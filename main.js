import Hydra from "hydra-synth"

const opt = {
    detectAudio: false,
    // height: 500,
    // width: 500
}

const hydra = new Hydra(opt)


console.log(hydra.canvas)


console.log(document.getElementsByTagName("canvas")[0])
// document.getElementsByTagName("canvas")[0].style = ""

// removes lib default styling for the html node that was preventing resizing
// console.log(hydra)

// osc(9,-0.1,0.1)
//     .modulateKaleid(osc(11,0.5,0),50)
//     .scale(0.1,0.3)
//     .modulate(noise(5,0.1))
//     .mult(solid(1,1,0.3))
//     .out(o0)

console.log(time)

// noise(11, 0.1)
//     // .modulate(voronoi(10, 0))
//     .modulate(shape(8, 0.5, 0.001).luma(0.5, 0.5))
//     .out(o0)

shape(5, 0.4, 0)
    .modulate(osc(10,0,1).saturate( () => Math.sin(time) * 10 ))
    .modulate(osc(30,0.1,1).hue(() => Math.sin(time)))
    .modulate(noise(100, 1).modulate(noise(50, 0.2).color(194, 29, 115, 1).modulate(noise(11, 0.2))))
    .out()
    
// shape(4, 0.5, 0.001)
//     .out(o3)

// render()