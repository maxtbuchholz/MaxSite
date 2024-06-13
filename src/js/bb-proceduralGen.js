import { createNoise2D } from 'simplex-noise';
export function generateTerrain(octaves, persistance) {
    octaves = parseInt(octaves);
    persistance = parseFloat(persistance)
    if(typeof(persistance) !== "number") {persistance = 0.5;}
    let canvas = document.getElementById('proceduralCanvas');
    let horizAmount = 260;
    let vertiAmount = horizAmount * (4/5)
    const pixleSize = 14;
    canvas.width = horizAmount * pixleSize;
    canvas.height = vertiAmount * pixleSize;
    const ctx = canvas.getContext("2d");

    const noise2D = createNoise2D();

    for(var x = 0; x < horizAmount; x++){
        for(var y = 0; y < vertiAmount; y++){
            var currOctaveMult = 1/100;
            var value = 0;
            var currPersist = 1;
            var totalPersist = 0;
            for(let o = 0; o < octaves; o++){
                value += (noise2D((x) * currOctaveMult, (y) * currOctaveMult) * currPersist);
                currOctaveMult *= 2;
                totalPersist += currPersist;
                currPersist *= persistance;
            }
            value /= totalPersist;
            value *= 256;
            if(value < 0.0001){
                ctx.fillStyle = `rgb(${29},${12},${120})`;//deep sea
            }else if(value < 20){
                ctx.fillStyle = `rgb(${79},${132},${202})`;//shallow sea
            }else if(value < 40){
                ctx.fillStyle = `rgb(${179},${166},${117})`;//sand
            }else if(value < 60){
                ctx.fillStyle = `rgb(${112},${169},${125})`;//hills1
            }else if(value < 80){
                ctx.fillStyle = `rgb(${99},${143},${109})`;//hills2
            }else if(value < 110){
                ctx.fillStyle = `rgb(${83},${121},${93})`;//hills3
            }else if(value < 130){
                ctx.fillStyle = `rgb(${166},${160},${158})`;//mountains1
            }else{
                ctx.fillStyle = `rgb(${213},${208},${190})`;//hills2
            }
            ctx.fillRect(x * pixleSize, y * pixleSize, pixleSize, pixleSize);
        }
    }
}