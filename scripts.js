newCanvas(16);  //load page with 16x16 grid
//Loop createElement for divs of canvas for i number of iterations inputted by user

function newCanvas(number) {
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
//button triggers NewGrid function
const button = document.querySelector('#button');
button.addEventListener('click', getCanvasSize);

function getCanvasSize() {
    let userInput = prompt('Please enter a number between 10 and 100 for your canvas size:', '16');
    let num = parseInt(userInput);
    return newCanvas(num);
}
    //prompt asks user to input number of squares per side for new grid
    //input is checked for being number less than 101
        //if true: deletes all divs from container and loops divs with entered number
        //if number but less than 100, cheeky prompt to retry with smaller number, between 10-100
        //elseif not a number: than prompt to retry using a number between 10 - 100
        //else empty return
function getRandomColor() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return 'rgb('+ r +',' + g +','+ b + ')';
}