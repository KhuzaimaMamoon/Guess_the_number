let random_num=(parseInt(Math.random()*100+1));
console.log(random_num);
let body=document.querySelector("body");
let user_input=document.querySelector("#input");
let submit=document.querySelector("button");
let guess_slot=document.querySelector(".guesses");
let remaining=document.querySelector(".lastresult");
let low_or_high=document.querySelector(".low_or_high");
let startOver=document.querySelector(".guess");

const p=document.createElement("p");
let preGuess=[];
let numGuess=1;
let playGame=true;
if(playGame){
    submit.addEventListener("click",function (e){
        e.preventDefault();
        const guess=parseInt(user_input.value);
        validate_guess(guess);
    })
}
function validate_guess(guess){
    if (guess<=0 ||guess>100 ||isNaN(guess)){
        alert("Enter a valid number between 1 and 100 ");
    }
    else{
        preGuess.push(guess);
        if (numGuess===11){
            display_guess(guess);
            display_message(`Game over. Random number was ${random_num}`);
            end_game();
        }
        else{
            display_guess(guess);
            check_guess(guess);
        }
    }
}
function check_guess(guess){
    if (guess===random_num){
        display_message(`You guessed it right`);
        end_game();
        body.style.backgroundColor="green";

    }
    else if (guess<random_num){
        display_message("Number is too low");
        body.style.backgroundColor="red";

    }
    else if (guess>random_num){
        display_message("Number is too high");

    }

}
function display_guess(guess){
    user_input.value="";
    guess_slot.innerHTML+=`${guess},`;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;

}
function display_message(message){
    low_or_high.innerHTML=`<h1>${message}</h1>`;
    low_or_high.style.margin="1em";
}
function end_game(){
    user_input.value="";
    user_input.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML="<h2 id='newgame'>Start new game</h2>"
    startOver.appendChild(p);
    playGame=false;
    new_game();

}
function new_game(){
     const new_game_button=document.querySelector("#newgame");
     new_game_button.addEventListener("click",function(e){
         random_num=(parseInt(Math.random()*100+1));
         preGuess=[];
         numGuess=1;
         guess_slot.innerHTML="";
         remaining.innerHTML=`${11-numGuess}`;
         low_or_high.innerHTML="";
         user_input.removeAttribute("disabled","");
         startOver.removeChild(p);
         playGame=true;
     })

}
