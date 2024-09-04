import React, { useState, useEffect, useLayoutEffect } from "react";
import { delay, motion } from 'framer-motion';
import '../styles/ProfileImage.css';
import '../styles/IntroTerminal.css';
const IntroTerminal = ({ onPage }) => {
    function scrollOutputToBottom(){
        var element = document.getElementById("introTerminal_output");
        element.scrollTop = 2 * element.scrollHeight + 100;
    }
    function scrollCodeToBottom(){
        var element = document.getElementById("introTerminal_code");
        element.scrollTop = element.scrollHeight + 100;
    }
    useEffect(() => {
        codeLines = origCodeLines.split('\n');
        outputLines = origOutputLines.split('\n');
        for(let i = 0; i < codeLines.length; i++){
            codeLines[i] = color_the_code(codeLines[i]);
        }
        startCodeLine(0);
    }, []);
    const [loadedCodeLines, setLoadedCodeLines] = useState([]);
    const [loadedOutputLines, setLoadedOutputLines] = useState([]);
    function startCodeLine(lineNo){
        if(lineNo < codeLines.length){
            setLoadedCodeLines(loadedCodeLines => [...loadedCodeLines, { text: codeLines[lineNo], index: lineNo, length: codeLines[lineNo][0].fullLength }] );
        }
        scrollCodeToBottom(); 
        scrollOutputToBottom();
    }
    function scrollDown(){
        scrollCodeToBottom(); 
        scrollOutputToBottom();
    }
    const [outputLineNumber, setOutputLineNumber] = useState(0);
    function addOutputLine(){
        if(outputLineNumber < outputLines.length){
            setLoadedOutputLines(loadedOutputLines => [...loadedOutputLines, { text: outputLines[outputLineNumber] }] );
            setOutputLineNumber(i => i+1);
        }
    }
    return(
        <div style={{background: 'rgba(30,30,30,0.7)', width: '550px', borderStyle: 'solid', borderWidth: '1.0px', borderColor: 'rgba(71,71,71,1)', borderRadius: '10px', display: 
        'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 0px 0px, rgb(10, 10, 10) 0px 0px 0px 0.5px', color: 'white'}} className="introTerminalIn terminalScale">
            <div style={{height: '26px', width: '100%', background: 'rgba(41,42,44,1)', borderBottomStyle: 'solid', borderBottomWidth: '0.5px', borderBottomColor: 'rgba(11,11,11,1)', display: 'flex', flexDirection: 'row', overflow: 'hidden'}}>
                <h3 className="poppins-regular" style={{color: 'rgba(144,145,146,1)', fontSize: '14px', position: 'absolute', right: 0, left: 0, margin: 'auto',  width: '100%', textAlign: 'center', marginTop: '1px'}}>intro.cs</h3>
                <div style={{background: 'rgba(71, 71, 78, 0.5)', width: '12px', height: '12px', marginLeft: '7px', borderRadius: '50%', marginTop: '6px'}}/>
                <div style={{background: 'rgba(71, 71, 78, 0.5)', width: '12px', height: '12px', marginLeft: '7px', borderRadius: '50%', marginTop: '6px'}}/>
                <div style={{background: 'rgba(71, 71, 78, 0.5)', width: '12px', height: '12px', marginLeft: '7px', borderRadius: '50%', marginTop: '6px'}}/>
            </div>
            <div style={{height: '100%', width: '100%',  display: 'flex', flexDirection: 'column-reverse', overflow: 'hidden', fontSize: '14px', lineHeight: '14px'}}>
                <div style={{height: '93px', width: '100%', background: 'rgba(35,35,37,0)', overflow: 'hidden'}}>
                <div id="introTerminal_output" className="poppins-thin" style={{position: 'relative', width: 'calc(100% - 4px)', maxHeight: 'calc(100%)', background: '', display: 'flex', flexDirection: 'column', verticalAlign: 'bottom', paddingLeft: '2px', paddingRight: '0px', overflow: 'hidden'}}>
                    {loadedOutputLines.map((text, index) => {
                        return(
                            <OutputLine key={index} text={text.text}/>
                            // <h3>{text.text}</h3>
                        );
                    })}    
                    </div>
                </div>
                <div style={{height: '22px', width: '100%', background: 'rgba(41,42,44,1)',  borderBottomStyle: 'solid', borderBottomWidth: '0.5px', borderBottomColor: 'rgba(11,11,11,1)',  borderTopStyle: 'solid', borderTopWidth: '0.5px', borderTopColor: 'rgba(71,71,71,1)', display: 'flex', flexDirection: 'row', overflow: 'hidden'}}>
                    <h3 style={{color: 'rgba(144,145,146,0.8)', fontSize: '10px', right: 0, left: 0, margin: 'auto', marginTop: '-0.5px', fontWeight: '500'}}>output</h3>
                </div>
                <div className="poppins-regular" style={{height: '100%', width: '100%', overflow: 'hidden'}}>
                    <div id="introTerminal_code" className="poppins-thin" style={{position: 'relative', width: 'calc(100% - 4px)', maxHeight: '100%', background: '', display: 'flex', flexDirection: 'column', verticalAlign: 'bottom', paddingLeft: '2px', paddingRight: '0px', overflow: 'hidden'}}>
                    {loadedCodeLines.map((text, index) => {
                        return(
                            <CodeLine key={index} texts={text.text} index={text.index} length={text.length} finishFunction={startCodeLine} scrollFunction={scrollDown} outputFunction={addOutputLine}/>
                        );
                    })}               
                    </div>
                </div>
            </div>

        </div>
    );
}
function color_the_code(text){
    let isLog = text.includes("Console");
    let textLength = text.length + 1;
    var texts = [{ text: text, color: 'white'}];
    function split_and_color(spText, spColor){
        let newTexts = [];
        texts.forEach(element => {
            if(element.color === 'white'){
                let splitText = element.text.split(spText);
                if(splitText.length === 1){
                        newTexts.push({text: splitText[0], color: element.color})
                }else if(splitText.length !== 0){                                   //Word found
                    for(let i = 0; i < splitText.length; i++){
                        newTexts.push({text: splitText[i], color: element.color})
                        if(i < splitText.length - 1){
                            newTexts.push({text: spText, color: spColor})
                        }
                    }
                }
            }else{
                newTexts.push(element);
            }
        });
        texts = structuredClone(newTexts);
    }
    // console.log(texts)
    let green = 'rgb(105,183,163)';
    let blue = 'rgb(147,187,214)';
    let darkBlue = 'rgb(96,141,190)';
    let orange = 'rgb(197,148,124)';
    let purple = 'rgb(171,126,172)';
    let yellow = 'rgb(209,209,167)';
    split_and_color("Console", green);
    split_and_color("Math", green);

    split_and_color("return", purple);
    split_and_color("(", purple);
    split_and_color(")", purple);
    split_and_color("[", purple);
    split_and_color("]", purple);

    split_and_color("$", orange);
    split_and_color("{", orange);
    split_and_color("}", orange);
    split_and_color("\"", orange);

    split_and_color("WriteLine", yellow);
    split_and_color("Round", yellow);
    split_and_color("Floor", yellow);
    split_and_color("Log", yellow);
    split_and_color("note_name", yellow);
    split_and_color("notes_up", yellow);
    split_and_color("octave_num", yellow);
    split_and_color("cents_sharp", yellow);
    split_and_color("cents_flat", yellow);
    split_and_color("harmonic_of", yellow);

    split_and_color("int", darkBlue);
    split_and_color("double", darkBlue);
    split_and_color("string", darkBlue);
    split_and_color("float", darkBlue);
    split_and_color("char", darkBlue);
    split_and_color("bool", darkBlue);

    split_and_color("name", blue);
    split_and_color("hello", blue);
    split_and_color("noteUp", blue);
    split_and_color("harmonic_number", blue);
    split_and_color("num", blue);
    split_and_color("musicNotes", blue);
    split_and_color("Length", blue);
    split_and_color("upper", blue);
    split_and_color("lower", blue);

    // console.log(texts)
    // const substring = new RegExp("Console");
    // text = text.replace(substring, (highlight) => `<div style="color: yellow">${highlight}</div>`);
    texts[0].fullLength = textLength;
    texts[0].isConsoleLog = isLog;
    // texts = texts.filter(a => a.text !== "")
    // if(debug){
    //     //console.log(texts);
    // }
    // console.log(texts);
    return texts;
}
const CodeLine = ({texts, index, length, finishFunction, scrollFunction, outputFunction}) => {
    const [charNumber, setCharNumber] = useState(0);
    useEffect(() => {
        let localCharNumber = 0;
        const intervalId = setInterval(() => {
            scrollFunction();
            setCharNumber((i) => i + 1);
            localCharNumber++;
            if(localCharNumber >= length){
                clearInterval(intervalId);
                finishFunction(index + 1);
                if(texts[0].isConsoleLog){
                    outputFunction();
                    setIsNewConsole(true);
                    setTimeout(() => {
                        setIsNewConsole(false);
                      }, 50);
                }
            }
        }, 30)
    }, []);
    const [isNewConsole, setIsNewConsole] = useState(false);
    return(
        <h5 className={`introTerminal_codeText ${isNewConsole ? 'newLogBackground' : 'oldLogBackground'}`} style={{fontWeight: '500'}} ><span style={{whiteSpace: 'pre'}}><RichSubableText texts={texts} length={charNumber}/></span><span className="introTerminal_codeText_insertBox" style={{color: 'transparent'}}>-</span></h5>
    );
}
const OutputLine = ({text}) => {
    useEffect(() => {
        setTimeout(() => {
            setIsNew(false);
          }, 50);
    }, []);
    const [isNew, setIsNew] = useState(true);
    return(
        <h5 className={`introTerminal_outputText`} style={{fontWeight: '500'}} ><span className={`${isNew ? 'newLogBackground' : 'oldLogBackground'}`} style={{whiteSpace: 'pre-line'}}>{text}</span></h5>
    );
}
const RichSubableText = ({texts, length}) => {
    useLayoutEffect(() => {
        let locLength = length;
        texts.forEach(element => {
            element.textSub = element.text.substring(0, locLength)
            locLength -= element.text.length;
        });
    });
    return(
        <span>
            {texts.map((elem, index) => {
                return(
                    <span key={index} style={{color: elem.color}}>{elem.textSub}</span>
                );
        })}
        </span>
    );
}
var outputLines = [];
const origOutputLines = 
`Hello I am Max Buchholz
I am a Software Developer!
Heres some quick music math!
There are 12 notes per octave
E-1320hz is 19 notes above A-440hz
Middle C is the start of octave 4
A-452.89hz is 49 cents sharper than A-440hz
C-258.62hz is 20 cents flatter than C-261.626hz
The 5th harmonic of A-440hz is C#-2200hz in octave 7
Humans can hear around 120 notes in the 12 note western scale from 20hz to 20_000hz
Dogs can hear around 127 notes from 40hz to 60_000hz`
var codeLines = [];
const origCodeLines = 
`string hello = "Hello I am";
string name = "Max Buchholz";
Console.WriteLine($"{hello} {name}");
Console.WriteLine("I am a Software Developer!");
Console.WriteLine("Heres some quick music math!");
double notes_up(double lower, double upper){
    return 12 * Math.Log(upper / lower) / Math.Log(2);
}
string[] musicNotes = {"A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab"};
Console.WriteLine($"There are {musicNotes.Length} notes per octave");
string note_name(double num){
    return musicNotes[(int)Math.Round(notes_up(13.75, num)) % 12];
}
Console.WriteLine($"{note_name(1320)}-1320hz is {Math.Round(notes_up(440, 1320))} notes above {note_name(440)}-440hz");
double octave_num(double num){
    return Math.Floor(notes_up(16.35160, num) / 12);
}
Console.WriteLine($"Middle {note_name(261.626)} is the start of octave {octave_num(261.626)}");
int cents_sharp(double num){
    return (int)(notes_up(16.35160, num) % 1 * 100);
}
Console.WriteLine($"{note_name(452.89298412)}-452.89hz is {cents_sharp(452.89298412)} cents sharper than {note_name(440)}-440hz");
double cents_flat(double num){
    return 100 - cents_sharp(num);
}
Console.WriteLine($"{note_name(258.62096909)}-258.62hz is {cents_flat(258.62096909)} cents flatter than {note_name(261.626)}-261.626hz");
double harmonic_of(double num, int harmonic_number){
    return num * harmonic_number;
}
double noteUp = harmonic_of(440, 5);
Console.WriteLine($"The 5th harmonic of {note_name(440)}-440hz is {note_name(noteUp)}-{noteUp}hz in octave {octave_num(noteUp)}");
Console.WriteLine($"Humans can hear around {Math.Round(notes_up(20,20_000))} notes in the 12 note western scale from 20hz to 20_000hz");
Console.WriteLine($"Dogs can hear around {Math.Round(notes_up(40,60_000))} notes from 40hz to 60_000hz");
`
export default IntroTerminal