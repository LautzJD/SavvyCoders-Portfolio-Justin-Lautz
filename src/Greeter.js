var name;

function blankChecker(){
    if(name === ''){
        // or use !name = checks if its a falsey statement//
        name = window.prompt("Seriously, what's your name?");
        blankChecker(); /* RECURSION*/
    }
}

export default function nameChecker(){
    name = window.prompt("What's your name?");

    blankChecker(); /* BlockingCode*/

    document.querySelector('#header h2').textContent = `Welcome ${name}`;
}
