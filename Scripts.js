/* eslint-disable vars-on-top */
/* var name = window.prompt("What's your name");
window.alert (`Why hello there ${name}`);*/

/* document.getElementById("navigation").textContent = "Good Night World";*/

/* console.log(document.querySelector("#header h1"));
console.log(document.querySelector("#footer h2"));
 
document.querySelector("#navigation>ul>li:nth-child(1)").innerHTML = "<a href='https://google.com'>Google</a>";
 
document.querySelector("#navigation>ul>li:nth-child(2)").textContent = "I am now changed";*/
/* nth-child(2) selects the second list item! .innerHTML allows you to link something*/

var name;

var blankChecker = function blankChecker(){
    if(name === ''){
        name = window.prompt("Seriously, what's your name?");
        blankChecker(); /* RECURSION*/
    }
};

var nameChecker = function nameChecker(){
    name = window.prompt("What's your name?");
    blankChecker();
    document.querySelector('#header h2').textContent = `Welcome ${name}`;
};

nameChecker();