const btn = document.getElementById("go_button");

function buttonClicked(){
    // alert("button is clicked");
    changeText();
    // btn.removeEventListener('click',buttonClicked);
}

btn.addEventListener('click',buttonClicked);

const eleToChange = document.getElementById("text_to_change");


let hobbies = ["cooking", "jogging", "programming"];
// console.log(hobbies);
function changeText(){
    // eleToChange.innerHTML = hobbies.pop();
    const inputValue = document.getElementsByClassName('my_input')[0];
    const inputMessage = document.getElementsByClassName('my_textarea')[0].value;
    const textToChange = document.getElementById('text_to_change');
    let result = inputValue.value + "<br / >";
    result += inputMessage;
    textToChange.innerHTML = result;
}

class Animal {
    constructor(name, isTerrestrial, sound){
        console.log(name + " is created, and is an animal.");
        this.name = name;
        this.isTerrestrial = isTerrestrial;
        this.sound = sound;
    }
    makeSound(){
        return this.sound;
    }
}
Animal.isLiving = true;

class Dog extends Animal{
    constructor(name, isTerrestrial, sound, isRabid){
        super(name, isTerrestrial, sound);
        this.isRabid = isRabid;
    }
    bark(){
        return this.makeSound();
    }
}