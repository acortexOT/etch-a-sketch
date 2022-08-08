newCanvas(16);
//Loop createElement for canvas with divs class grid-item and id 'item [i]', (get width and safe as max)
function newCanvas(number) {
const container = document.querySelector('#container');
for (let i = 1; i < number**2 + 1; ++i) {
    let activeGrid = document.createElement('div');
    activeGrid.classList.add('grid-item')
    activeGrid.id = `item-${i}`;
    container.appendChild(activeGrid);
}};
//hover eventListener triggers function 
    //if no color: that randomly assigns RBG background color to item
    //if color: increases darkness by 10%
//button triggers NewGrid function
    //prompt asks user to input number of squares per side for new grid
    //input is checked for being number less than 101
        //if true: deletes all divs from container and loops divs with entered number
        //if number but less than 100, cheeky prompt to retry with smaller number, between 10-100
        //elseif not a number: than prompt to retry using a number between 10 - 100
        //else empty return
