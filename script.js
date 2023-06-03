/* Change defualt cursor*/
const blobity = new Blobity({
    licenseKey: 'opensource',
    focusableElement: '[data-blobity], a[href]:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]',
    zIndex: 3,
    magnetic: true,
    mode: 'bouncy',
    opacity: 0,
    color: "#cdc6b4",
      dotColor: "#e63946",
    focusableElementsOffsetX: 5,
    focusableElementsOffsetY: 5,
});


/* Changing text color on click*/
let text = document.querySelectorAll('h1, h2, h3, p, button, a, input, textarea');

const colorValue = () => {
    return Math.floor(Math.random() * 256)
};

const colorChange = event => {
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.color = randomColor;
}

text.forEach(element => {
    element.onclick = colorChange;
});
