const Color = ["#FF5733", "#FFBD33", "#DBFF33", "#75FF33", "#33FF57", "#33FFBD", "#00ADFF", "#0052FF", "#4700FF", "#8900FF", "#FB00FF", "#FF006E", "#FF0000"];

const container = document.querySelector(".content-wrapper");
const colorName = document.querySelector(".color-code");
const Button = document.querySelector(".btn");

function handleColorFlipp() {
    const RandomNumber = Math.floor(Math.random() * Color.length);

    container.style.backgroundColor = Color[RandomNumber];
    colorName.innerHTML = Color[RandomNumber];
}