let questionEle = document.getElementById("question")
let optionsEle = document.getElementById("options")
let nextbtn = document.getElementById("next");
let previousbtn = document.getElementById("previous")


let questions = [
    {
        question:"what is capital of France?",
        answer:"paris",
        options:["Berlin","Paris","England","India"]
    },
    {
        question:"which is smallest country in the world?",
        answer:"vatican City",
        options:["Brezil","Landon","America","vatican City"]

    }

];

let currquestion = 0;

displayQuestion();
nextbtn.addEventListener("click",function(){
    currquestion++;
    if(currquestion>=questions.length){
        currquestion = questions.length-1;
    }
    displayQuestion();
});

previousbtn.addEventListener("click",function(){
    currquestion--;
    if(currquestion < 0){
        currquestion = 0;
    }
    displayQuestion();
});

function displayQuestion(){
    questionEle.innerHTML = questions[currquestion].question;
    optionsEle.innerHTML="";

    questions[currquestion].options.forEach((option) => {
        document.createElement("button");
            optionEle.innerHTML=option;  
    optionsEle.appendChild(optionEle); 

    }); 
    
    
}

