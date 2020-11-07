let drum = document.querySelectorAll('button');

//forEach method
drum.forEach(p=>{
    p.addEventListener('click', function(){
        var selectDrum = this.innerHTML;
        makeSound(selectDrum);
        buttonAnimation(selectDrum);
        
    });
});

//for loop method
/* for(i = 0; i < drum.length; i++){
    document.querySelectorAll('button')[i].addEventListener('click',function(){
        var selectDrum = this.innerHTML;
        makeSound(selectDrum);
    })
} */


document.addEventListener('keypress', function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case 'a': var audio = new Audio('sounds/tom-1.mp3');
                        audio.play();
            
            break;

        case 's': var audio = new Audio('sounds/tom-2.mp3');
                        audio.play();
            
            break;

        case 'd': var audio = new Audio('sounds/tom-3.mp3');
                        audio.play();
            
            break;

        case 'f': var audio = new Audio('sounds/tom-4.mp3');
                        audio.play();
            
            break;

        case 'j': var audio = new Audio('sounds/snare.mp3');
                        audio.play();
            
            break;

        case 'k': var audio = new Audio('sounds/crash.mp3');
                        audio.play();
            
            break;

        case 'l': var audio = new Audio('sounds/kick-bass.mp3');
                        audio.play();
            
            break;
    
        default: console.log(selectDrum);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector('.'+currentKey);
    activeButton.classList.add('pressed');

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100);
}


// function of operators:

/* function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function multi(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

function calculator(a, b, operator){
    return operator(a,b);
}
 */