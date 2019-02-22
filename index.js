/* eslint-disable vars-on-top */
/* var name = window.prompt("What's your name");
window.alert (`Why hello there ${name}`);*/

/* document.getElementById("navigation").textContent = "Good Night World";*/

/* console.log(document.querySelector("#header h1"));
console.log(document.querySelector("#footer h2"));
 
document.querySelector("#navigation>ul>li:nth-child(1)").innerHTML = "<a href='https://google.com'>Google</a>";
 
document.querySelector("#navigation>ul>li:nth-child(2)").textContent = "I am now changed";*/
/* nth-child(2) selects the second list item! .innerHTML allows you to link something*/

import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
// import nameChecker from './src/Greeter';

var home = {
    'title': 'Portfolio page of Justin D. Lautz'
};

var blog = {
    'title': 'Welcome to my blog'
};
    
var contact = {
    'title': 'Welcome to my contact'
};
    
var projects = {
    'title': 'Welcome to my projects'
};

var root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state.title)}
    ${Content(state)}
    ${Footer(state)}
    `;
}

render(home);

document.querySelector('#navigation ul li:nth-child(1)').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(home);
});


document.querySelector('#navigation ul li:nth-child(2)').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(blog);
});

document.querySelector('#navigation ul li:nth-child(3)').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(contact);
});

document.querySelector('#navigation ul li:nth-child(4)').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(projects);
});

// create event handlers for each navigation link//
// console log the nae of the link that was clicked//


// nameChecker();