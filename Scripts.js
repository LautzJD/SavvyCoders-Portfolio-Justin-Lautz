/* var name = window.prompt("What's your name");
window.alert (`Why hello there ${name}`);*/

/* document.getElementById("navigation").textContent = "Good Night World";*/

/* console.log(document.querySelector("#header h1"));
console.log(document.querySelector("#footer h2"));
 
document.querySelector("#navigation>ul>li:nth-child(1)").innerHTML = "<a href='https://google.com'>Google</a>";
 
document.querySelector("#navigation>ul>li:nth-child(2)").textContent = "I am now changed";*/
/* nth-child(2) selects the second list item! .innerHTML allows you to link something*/


var nameChecker = function nameChecker(){
    var name = window.prompt("What's your name?");

    if(name === ''){
        name = window.prompt("Seriously, what's your name?");
    }
    else{
        document.querySelector('#header h1').textContent = `Why hello there ${name}`;
    }
};

nameChecker();