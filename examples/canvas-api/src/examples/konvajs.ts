// @ts-ignore
import Konva from "konva";

// first we need to create a stage
let stage = new Konva.Stage({
    container: 'root',   // id of container <div>
    width: 500,
    height: 500
});

// then create layer
let layer = new Konva.Layer();

// create our shape
let circle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true,
});

let pentagon = new Konva.RegularPolygon({
    x: stage.width() / 2,
    y: stage.height() / 2,
    sides: 5,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    shadowOffsetX : 20,
    shadowOffsetY : 25,
    shadowBlur : 40,
    opacity : 0.5,
    draggable: true,
});

// add the shape to the layer
layer.add(circle);
layer.add(pentagon);
// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();