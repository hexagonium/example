const WIDTH = 2000;
const HEIGHT = 1500;

const canvas = document.querySelector('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'hsla(0. 0%, 25%, 0.25';

const scene = document.querySelector('.scene');

var cars = [];

const car = new Car();
cars.push(car);

const render = () => {
    ctx.restore();
    requestAnimationFrame(render);
}

render();

setInterval(() => {

}, 1000 / 120);