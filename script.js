const buttonLightMode = document.querySelector('.lightmode');
let lightMode = false;
const root = document.querySelector(':root');

buttonLightMode.addEventListener("click", function(){
    if(!lightMode){
        buttonLightMode.innerHTML = "Turn the lights off";
        lightMode = true;
        toggleLightMode();
    }else{
        buttonLightMode.innerHTML = "Turn the lights on" ;
        lightMode = false;
        toggleLightMode();
    };
})

function toggleLightMode(){
    if(lightMode){
        setVariables(lightColors);
    }else{
        setVariables(darkColors);
    }
}

const setVariables = variables => Object.entries(variables).forEach(v => root.style.setProperty(v[0], v[1]));

/* color sets */
const darkColors = {
    '--graphic': 'hsla(207, 20%, 13%, 1)',
    '--background': 'hsla(207, 15%, 15%, 1)',
    '--element-active': 'hsla(207, 65%, 45%, 1)',
    '--element-interactive': 'hsla(335, 85%, 45%, 1)',
    '--element-interactive-sub': 'hsla(335, 85%, 45%, .5)',
    '--heading-color': '#fff',
    '--text-color': 'hsla(207, 15%, 65%, 1)',
}

const lightColors = {
    '--graphic': 'hsla(207, 10%, 96%, 1)',
    '--background': 'hsla(207, 0%, 100%, 1)',
    '--element-active': 'hsla(207, 65%, 45%, 1)',
    '--element-interactive': 'hsla(335, 85%, 45%, 1)',
    '--element-interactive-sub': 'hsla(335, 85%, 45%, .5)',
    '--heading-color': 'hsla(207, 44%, 10%, 1)',
    '--text-color': 'hsla(207, 15%, 40%, 1)',
}


