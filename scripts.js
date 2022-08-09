makeNewCanvas(16);  //load page with 16x16 grid
makeColorChange();  //load event listener

function makeNewCanvas(number) {    //Loop createElement for divs of canvas for i number of iterations inputted by user
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
        };
    };
function makeColorChange() {   
    const gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach((item) =>{
        item.addEventListener('mouseover', () => {   //activate selected div once mouse hovers over it
            if (item.style.backgroundColor === "") {  //if no color randomly select color
                item.style.backgroundColor = `${getRandomColor()}`;  
            }else {item.style.backgroundColor = `${getDarkerColor(item.style.backgroundColor)}`;
        }});
        });
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
    makeNewCanvas(num);
    makeColorChange();
}

function getRandomColor() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return 'rgb('+ r +',' + g +','+ b + ')';
}

function getDarkerColor(rgbColor) {
    rgbColor = rgbColor.slice(4,-1);    //remove rgb( and )
    let arrColor = rgbColor.split(",");     //convert to array of 3 numbers

    let r = Math.floor(arrColor[0]*.6); //decrease by 30% and round to lowest whole number
    let g = Math.floor(arrColor[1]*.6);
    let b = Math.floor(arrColor[2]*.6);

    const darkColor = 'rgb('+ r +',' + g +','+ b + ')'  //concat to build new rgb color
return darkColor; 
}