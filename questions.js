var questions = [
    {prompt: "What does a boolean method return?\n(a) An if/else statement\n\(b) A true/false statement\n(c) A string of values\n(d) An arrow to the knee",
     answer: "b"
    },
    {prompt: "What does a boolean method return?\n(a) An if/else statement\n\(b) A true/false statement\n(c) A string of values\n(d) An arrow to the knee",
     answer: ""
    },
    {prompt: "What does a boolean method return?\n(a) An if/else statement\n\(b) A true/false statement\n(c) A string of values\n(d) An arrow to the knee",
     answer: ""
    },
    {prompt: "What does a boolean method return?\n(a) An if/else statement\n\(b) A true/false statement\n(c) A string of values\n(d) An arrow to the knee",
     answer: ""
    },
    
];
var score = 0;

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer){
        score++;
        alert("Genius!!");
    }   else {
        alert ("'Tis only a flesh wound....");
    }
}
alert("You got " + score + "/" + questions.length + " questions correct!");