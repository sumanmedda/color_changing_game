const changeBgColorButton = document.querySelector('.change_bg_color');// button click
const mainBox = document.querySelector('.main_box');// main box background 
const bodyColor = document.querySelector('body');// main body background
const navBarBrand = document.querySelector('.navbar-brand'); // stores value of navbarbrand
const addMoreColors = document.querySelector('.add_more_colors'); // button for adding more colors
const colorList = document.querySelector(".colorList"); // stores the value of colors in a list
const colors = ['Azure', 'Aqua', 'BlanchedAlmond', 'GhostWhite', 'CadetBlue', 'burlywood', 'Chocolate', 'Crimson', 'DarkRed', 'DarkSlateGrey', 'Indigo', 'LemonChiffon', 'LightGreen', 'LightSeaGreen', 'SlateBlue', 'Salmon', 'PaleVioletRed', 'Olive'];// colors

// initalizing background default color on page load
bodyColor.style.backgroundColor = 'SteelBlue';
mainBox.style.backgroundColor = 'white';
navBarBrand.style.color = 'Tomato';


// initiliazing adding event listners on click event
changeBgColorButton.addEventListener('click', changeBg);
changeBgColorButton.addEventListener('click', changeBackground);
changeBgColorButton.addEventListener('click', changeNavBrandColor);
addMoreColors.addEventListener('click', addmorecolors);



// function on click for box background
function changeBg() {
    const colorIndex = parseInt(Math.random() * colors.length);
    bodyColor.style.backgroundColor = colors[colorIndex];
};

// function on click for body background
function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length);
    mainBox.style.backgroundColor = colors[colorIndex];
    colorList.append(`${colors[colorIndex]}`);
}; 

// function for navBrand color
function changeNavBrandColor() {
    const colorIndex = parseInt(Math.random() * colors.length);
    navBarBrand.style.color = colors[colorIndex];
};

//pushing your favourite color
function addmorecolors() {

    const inputData = prompt('Enter your color you want to see in game');

    if (inputData == ''){
        alert('Enter color name first');
        return false;
    };

    if (colors.includes(inputData)) {
        alert(`Good Choice, But we already have ${inputData} color.`);
        return false;
    };

    colors.unshift(inputData);

    alert(`Thanks for adding new color : ${inputData}.`);
    
};




