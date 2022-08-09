makeNewCanvas(16);  //load page with 16x16 grid
//Loop createElement for divs of canvas for i number of iterations inputted by user

function makeNewCanvas(number) {
const gridUnit = Math.floor(1/(number));
const container = document.querySelector('#container');
while(container.firstChild) {   //remove old canvas if present
    container.removeChild(container.firstChild);
};
container.style.gridTemplateColumns = `repeat(${number}, auto)`; //set up grid template
for (let i = 1; i < number**2 + 1; ++i) {
    let activeGrid = document.createElement('div');
    activeGrid.classList.add('grid-item')
    activeGrid.id = `item-${i}`;
    container.appendChild(activeGrid);
    activeGrid.addEventListener('mouseover', () => {   //activate selected div once mouse hovers over it
                activeGrid.style.backgroundColor = `${getRandomColor()}`;  //randomly selects color
        });
    };
};

    //if no color: that randomly assigns RBG background color to item
    //if color: increases darkness by 10%

const button = document.querySelector('#button');   //button triggers function to make new canvas
button.addEventListener('click', getCanvasSize);

function getCanvasSize() {
    let userInput = prompt('Please enter a number between 10 and 100 for your canvas size:', '16');
    let num = parseInt(userInput);
    if (!userInput) return; //stop code if window is closed.
    while (!(num > 10 && num < 101)) {  //check for appropriate number range. return to prompt window if incorrect
        userInput = prompt('Input out of range. You must choose a number between 10 and 100.', '16');
        num = parseInt(userInput);
    };
    return makeNewCanvas(num);
    
}

function getRandomColor() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return 'rgb('+ r +',' + g +','+ b + ')';
}