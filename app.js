const questions =[{

    'que': "What does the abbreviation HTML stand for?",
    'a':"HighText Machine Language",
    'b':"HyperText and links Markup Language",
    'c':"HyperText Markup Language",
    'd':"None of these",
    'correct':"c",    

 },{

    'que': "The correct sequence of HTML tags for starting a webpage is -",
    'a':"Head, Title, HTML, body",
    'b':"HTML, Body, Title, Head",
    'c':"HTML, Head, Title, Body",
    'd':"HTML, Head, Title, Body",
    'correct':"d",  

 },{

    'que': "Which of the following element is responsible for making the text bold in HTML?",
    'a':"<pre>",
    'b':"<a>",
    'c':"<b>",
    'd':"<br>",
    'correct':"c",   

 }
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
    
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.option')
const loadQuestion = () =>{
   if(index === total){
      return endQuiz()
   }
   reset();
    const data = questions[index]
    quesBox.innerText = ` ${index+1}) ${data.que}` ;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () =>{
   const data = questions[index];
   const ans = getAnswer()
   if (ans === data.correct){
      right++;
   }else{
      wrong++;
   }
   index++;
   loadQuestion();
   return;
}

const getAnswer = () =>{
   let answer;
   optionInputs.forEach(
      (input) => {

         if(input.checked){
            answer = input.value;
         }
        

      }
   )
   return answer;
}

const reset = () =>{
   optionInputs.forEach(
      (input) =>{
         input.checked = false;
      }
   )
}

const endQuiz = () =>{
   document.getElementById("box").innerHTML = `
      <h3> thankyou for playiing the quiz </h3>
      <h2> ${right} / ${total} are correct </h2>
   `
}

loadQuestion()