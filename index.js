var buttons = document.querySelectorAll(".drum");
console.log(buttons);

// For adding event listener on the click of mouse
for(let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", function(){

        var buttonHtml = this.innerHTML;
        makeSound(buttonHtml);
        buttonAnimation(buttonHtml);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// For adding event listeners on the click of keyboard keys
function makeSound(key)
{
    switch(key)
    {
        case "w" :
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a" :
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s" :
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d" :
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j" :
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

        case "k" :
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "l" :
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;

        default : console.log("Invalid button");
            
    }
}

// For adding animations to the click of mouse and keyboard key
function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
