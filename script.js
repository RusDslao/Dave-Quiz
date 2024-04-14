// Selecting all required elements
const info_box = document.querySelector(".info_box");
const continue_btn = document.getElementById('continue_btn');
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

import MIS from './Subjects/MIS.js';
import PL from './Subjects/PL.js';
import WST from './Subjects/WST.js';
import MST from './Subjects/MST.js';
import GB from './Subjects/GB.js';
import IAS from './Subjects/IAS.js';

let questions = []; // Declare an empty array to hold questions

// Function to handle radio button change event
// Function to handle radio button change event
function handleSubjectChange() {
    const selectedSubject = document.querySelector('input[name="subject"]:checked');
    
    if (!selectedSubject) {
        console.error("No subject selected");
        return;
    }

    console.log("Selected subject:", selectedSubject.value);
    
    switch(selectedSubject.value) {
        case "mis":
            questions = MIS.slice(); // Make a copy of the questions array
            break;
        case "pl":
            questions = PL.slice(); // Make a copy of the questions array
            break;
        case "wst":
            questions = WST.slice(); // Make a copy of the questions array
            break;
        case "mst":
            questions = MST.slice(); // Make a copy of the questions array
            break;
        case "gb":
            questions = GB.slice(); // Make a copy of the questions array
            break;
        case "ias":
            questions = IAS.slice(); // Make a copy of the questions array
            break;
        default:
            console.error("Invalid subject selected");
            break;
    }

    shuffleQuestions(); // Shuffle the questions array
}
const titleElement = document.getElementById('examTitle');
const radioButtons = document.querySelectorAll('input[name="subject"]');

radioButtons.forEach(button => {
    button.addEventListener('change', function() {
        const selectedSubject = document.querySelector('input[name="subject"]:checked').value;
        const subjectMap = {
            'mis': 'Management Information Systems',
            'pl': 'Programming Languages',
            'wst': 'Web System and Technologies',
            'mst': 'Mobile System and Technologies',
            'gb': 'Great Books',
            'ias': 'Infomation Assurance & Technologies'

        };
        titleElement.textContent = subjectMap[selectedSubject];
    });
});

// Function to shuffle the questions array
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]]; // Swap elements
    }
}


// Click event for continue button
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Hide info box
    quiz_box.classList.add("activeQuiz"); // Show quiz box
    handleSubjectChange(); // Call handleSubjectChange function to get questions
    showQuetions(0); // Call showQuestions function to display first question
    queCounter(1); // Set question counter
    startTimer(30); // Start timer
    startTimerLine(0); // Start timer line
}

let timeValue =  30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

// Click event for restart button
result_box.querySelector(".buttons .restart").onclick = () => {
    quiz_box.classList.add("activeQuiz"); // Show quiz box
    result_box.classList.remove("activeResult"); // Hide result box
    timeValue = 30; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    shuffleQuestions(); // Shuffle the questions again
    showQuetions(que_count); // Show first question
    queCounter(que_numb); // Set question counter
    clearInterval(counter); // Clear timer
    clearInterval(counterLine); // Clear timer line
    startTimer(timeValue); // Start timer
    startTimerLine(widthValue); // Start timer line
    timeText.textContent = "Time Left"; // Change timer text
}


// Click event for quit button
result_box.querySelector(".buttons .quit").onclick = () => {
    window.location.reload(); // Reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// Click event for Next button
next_btn.onclick = () => {
    if(que_count < questions.length - 1) { // Check if there are more questions
        que_count++;
        que_numb++;
        showQuetions(que_count); // Show next question
        queCounter(que_numb); // Update question counter
        clearInterval(counter); // Clear timer
        clearInterval(counterLine); // Clear timer line
        startTimer(timeValue); // Start timer
        startTimerLine(widthValue); // Start timer line
        timeText.textContent = "Time Left"; // Change timer text
        next_btn.classList.remove("show"); // Hide Next button
    } else {
        clearInterval(counter); // Clear timer
        clearInterval(counterLine); // Clear timer line
        showResult(); // Show result
    }
}

document.body.addEventListener('keydown', function(event) {
    next_btn.click(); // Simulate click on the next button
});


// Function to display questions and options
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");

    if (!questions || index < 0 || index >= questions.length) {
        console.error("Invalid questions array or index");
        return;
    }

    let que_tag = '<span>' + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; // Add question
    option_list.innerHTML = option_tag; // Add options
    
    const option = option_list.querySelectorAll(".option");

    // Set onclick attribute to all available options
    for (let i = 0; i < option.length; i++) {
        option[i].addEventListener("click", function() {
            optionSelected(this);
        });
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// Function to handle option selection
function optionSelected(answer) {
    clearInterval(counter); // Clear timer
    clearInterval(counterLine); // Clear timer line
    let userAns = answer.textContent; // Get user selected option
    let correcAns = questions[que_count].answer; // Get correct answer from array
    const allOptions = option_list.children.length; // Get all option items
    
    if(userAns == correcAns) { // If user selected option is equal to correct answer
        userScore += 1; // Increase score
        answer.classList.add("correct"); // Add green color to correct selected option

        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        answer.classList.add("incorrect"); // Add red color to incorrect selected option


        for(let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correcAns) { // If there is an option which is matched to the correct answer
                option_list.children[i].setAttribute("class", "option correct"); // Add green color

                console.log("Auto selected correct answer.");
            }
        }
    }
    for(let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); // Disable all options
    }
    next_btn.classList.add("show"); // Show the next button
}

// Function to display result
function showResult() {
    info_box.classList.remove("activeInfo"); // Hide info box
    quiz_box.classList.remove("activeQuiz"); // Hide quiz box
    result_box.classList.add("activeResult"); // Show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) {
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  // Add score
    } else if(userScore > 1) {
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    } else {
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

// Function to start timer
function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; // Change time value
        time--; // Decrement time
        if(time < 9) { // If timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; // Add a 0 before time value
        }
        if(time < 0) { // If timer is less than 0
            clearInterval(counter); // Clear timer
            timeText.textContent = "Time Off"; // Change timer text
            const allOptions = option_list.children.length; // Get all option items
            let correcAns = questions[que_count].answer; // Get correct answer from array
            for(let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correcAns) { // If there is an option which is matched to the correct answer
                    option_list.children[i].setAttribute("class", "option correct"); // Add green color
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); // Disable all options
            }
            next_btn.classList.add("show"); // Show the next button
        }
    }
}

// Function to start timer line
function startTimerLine(time) {
    let interval;
    
    // Function to detect device type
    function detectDeviceType() {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        return isMobile ? 'mobile' : 'desktop';
    }

    const deviceType = detectDeviceType();
    console.log('Device Type:', deviceType);

    // Set interval and cut-off time based on device type
    if (deviceType === 'mobile') {
        interval = 96; // For mobile
    } else {
        interval = 57; // For desktop
    }

    counterLine = setInterval(timer, interval);
    
    function timer() {
        time += 1; // Increment time
        time_line.style.width = time + "px"; // Change width of time line
        if (deviceType === 'desktop' && time > 549) { // If desktop and time > 549
            clearInterval(counterLine); // Clear counterLine
        } else if (deviceType === 'mobile' && time > 320) { // If mobile and time > 320
            clearInterval(counterLine); // Clear counterLine
        }
    }
}




// Function to set question counter
function queCounter(index) {
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  // Add question counter
}
