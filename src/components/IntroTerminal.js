import React, { useState, useEffect } from "react";
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
        for(let i = 0; i < codeLines.length; i++){
            codeLines[i] = color_the_code(codeLines[i]);
        }
        startCodeLine(0);
    }, []);
    const [loadedCodeLines, setLoadedCodeLines] = useState([]);
    const [loadedOutputLines, setLoadedOutputLines] = useState([]);
    function startCodeLine(lineNo){
        if(lineNo < codeLines.length){
            setLoadedCodeLines(loadedCodeLines => [...loadedCodeLines, { text: codeLines[lineNo], index:  lineNo }] );
        }
        scrollCodeToBottom(); 
        scrollOutputToBottom();
    }
    function scrollDown(){
        scrollCodeToBottom(); 
        scrollOutputToBottom();
    }
    return(
        <div style={{background: 'rgba(30,30,30,0.8)', width: '500px', height: '295px', borderStyle: 'solid', borderWidth: '0.5px', borderColor: 'rgba(71,71,71,1)', borderRadius: '10px', display: 
        'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 0px 0px, rgb(10, 10, 10) 0px 0px 0px 0.5px', color: 'white'}}>
            <div style={{height: '26px', width: '100%', background: 'rgba(41,42,44,1)', borderBottomStyle: 'solid', borderBottomWidth: '0.5px', borderBottomColor: 'rgba(11,11,11,1)', display: 'flex', flexDirection: 'row'}}>
                <h3 className="poppins-regular" style={{color: 'rgba(144,145,146,1)', fontSize: '14px', position: 'absolute', width: '100%', textAlign: 'center', marginTop: '1px'}}>intro.cs</h3>
                <div style={{background: 'rgba(71, 71, 78, 0.5)', width: '12px', height: '12px', marginLeft: '7px', borderRadius: '50%', marginTop: '6px'}}/>
                <div style={{background: 'rgba(71, 71, 78, 0.5)', width: '12px', height: '12px', marginLeft: '7px', borderRadius: '50%', marginTop: '6px'}}/>
                <div style={{background: 'rgba(71, 71, 78, 0.5)', width: '12px', height: '12px', marginLeft: '7px', borderRadius: '50%', marginTop: '6px'}}/>
            </div>
            <div style={{height: '100%', width: '100%',  display: 'flex', flexDirection: 'column-reverse', overflow: 'hidden', fontSize: '14px', lineHeight: '14px'}}>
                <div style={{height: '72px', width: '100%', background: 'rgba(35,35,37,0)'}}>
                <div id="introTerminal_output" className="poppins-thin" style={{position: 'relative', width: '100%', maxHeight: 'calc(100%)', background: '', display: 'flex', flexDirection: 'column', verticalAlign: 'bottom', paddingLeft: '0px', paddingRight: '0px', overflow: 'hidden'}}>
                        <h5>b</h5>
                        <h5>c</h5>
                        <h5>d</h5>
                        <h5>e</h5>
                        <h5>f</h5>
                        <h5>aa</h5>
                        <h5>bb</h5>
                        <h5>cc</h5>
                        <h5>dd</h5>
                        <h5>ee</h5>
                        <h5>ff</h5>
                        <h5>aa</h5>
                        <h5>bb</h5>
                        <h5>cc</h5>
                        <h5>dd</h5>
                        <h5>ee</h5>
                        <h5>fff</h5>
                    </div>
                </div>
                <div style={{height: '22px', width: '100%', background: 'rgba(41,42,44,1)',  borderBottomStyle: 'solid', borderBottomWidth: '0.5px', borderBottomColor: 'rgba(11,11,11,1)',  borderTopStyle: 'solid', borderTopWidth: '0.5px', borderTopColor: 'rgba(71,71,71,1)', display: 'flex', flexDirection: 'row'}}>
                    <h3 style={{color: 'rgba(144,145,146,0.8)', fontSize: '10px', right: 0, left: 0, margin: 'auto', marginTop: '-0.5px', fontWeight: '500'}}>output</h3>
                </div>
                <div className="poppins-regular" style={{height: '100%', width: '100%', overflow: 'hidden'}}>
                    <div id="introTerminal_code" className="poppins-thin" style={{position: 'relative', width: '100%', maxHeight: '100%', background: '', display: 'flex', flexDirection: 'column', verticalAlign: 'bottom', paddingLeft: '0px', paddingRight: '0px', overflow: 'hidden'}}>
                    {loadedCodeLines.map((text) => {
                        return(
                            <CodeLine text={text.text} index={text.index} finishFunction={startCodeLine} scrollFunction={scrollDown}/>
                        );
                    })}               
                    </div>
                </div>
            </div>

        </div>
    );
}
function color_the_code(text){
    const substring = new RegExp("Console");
    // text = text.replace(substring, (highlight) => `<div style="color: yellow">${highlight}</div>`);
    return text;
}
const CodeLine = ({text, index, finishFunction, scrollFunction}) => {
    const [charNumber, setCharNumber] = useState(0);
    useEffect(() => {
        let localCharNumber = 0;
        const intervalId = setInterval(() => {
            scrollFunction();
            setCharNumber((i) => i + 1);
            localCharNumber++;
            if(localCharNumber >= text.length){
                clearInterval(intervalId);
                finishFunction(index + 1);
            }
        }, 50)
    }, []);
    return(
        <h5 className="introTerminal_codeText" style={{maxWidth: '100%', fontWeight: '500'}} ><span style={{whiteSpace: 'pre', textWrap: 'wrap'}}>{text.substring(0, charNumber)}</span><span className="introTerminal_codeText_insertBox" style={{color: 'transparent'}}>-</span></h5>
    );
}
var codeLines = [];
const origCodeLines = `string hello = "Hello I am";
string name = "Max Buchholz";
Console.WriteLine($"{hello} {name}");
Console.WriteLine("Computer Science is pretty cool!");
Console.WriteLine("Music is also pretty cool!");
double notes_up(double a, double b){
    return 12 * Math.Log(b / a) / Math.Log(2);
}
string[] notes = {"A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab"};
string note_name(double num){
    return notes[(int)Math.Round(notes_up(13.75, num)) % 12];
}
Console.WriteLine($"{note_name(880)}-880hz is {notes_up(440, 880)} notes above {note_name(440)}-440hz");
Console.WriteLine($"There are {notes.Length} notes per octave");
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
double harmonic_of(double num, int harmonic){
    return num * harmonic;
}
double noteUp = harmonic_of(440, 5);
Console.WriteLine($"The 5th harmonic of {note_name(440)}-440hz is {note_name(noteUp)}{noteUp} in octave {octave_num(noteUp)}");
Console.WriteLine($"Humans can hear around {Math.Round(notes_up(20,20_000))} notes in the 12 note western scale from 20hz to 20_000hz");
Console.WriteLine($"Dogs can hear around {Math.Round(notes_up(40,60_000))} notes from 40hz to 60_000hz");
`
export default IntroTerminal