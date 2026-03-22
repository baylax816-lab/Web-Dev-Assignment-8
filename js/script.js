console.log("script.js connected!");


let score = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
};

let selectedAnswers = {
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null
};

const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach((block, questionIndex) => {
    const answerButtons = block.querySelectorAll(".answer-btn");

    answerButtons.forEach(button => {
        button.addEventListener("click", () => {


            answerButtons.forEach(btn => {
                btn.classList.remove("btn-primary");
                btn.classList.add("btn-outline-primary");
            });

            
            button.classList.remove("btn-outline-primary");
            button.classList.add("btn-primary");

            
            selectedAnswers[`question${questionIndex + 1}`] = button.dataset.answer;
        });
    });
});


document.getElementById("show-result").addEventListener("click", () => {

    
    score = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

   
    for (let key in selectedAnswers) {
        let answer = selectedAnswers[key];
        if (answer) {
            score[answer]++;
        }
    }

  
    let highest = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);

    let result = "";


    if (highest === "A") {
        result = "🎤 Pop — You are energetic, social, and love excitement.";
    } 
    else if (highest === "B") {
        result = "🎸 Indie / Alternative — You are thoughtful, creative, and unique.";
    } 
    else if (highest === "C") {
        result = "🤠 Country / Rock — You enjoy freedom, adventure, and simple fun.";
    } 
    else if (highest === "D") {
        result = "🎧 Hip-Hop / Rap — You are confident, bold, and expressive.";
    }

    
    document.getElementById("result-text").textContent = result;
    document.getElementById("result-container").style.display = "block";
});