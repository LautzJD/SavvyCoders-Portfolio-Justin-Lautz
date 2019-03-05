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
import { startCase } from 'lodash';

console.log(startCase);

// import nameChecker from './src/Greeter';


// var home = {
//     'title': 'Portfolio page of Justin D. Lautz'
// };

// var blog = {
//     'title': 'Welcome to my blog'
// };

// var contact = {
//     'title': 'Welcome to my contact'
// };

// var projects = {
//     'title': 'Welcome to my projects'
// };
// document.querySelector('#navigation ul li:nth-child(1)').addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target.href);
//     render(home);
// });


// document.querySelector('#navigation ul li:nth-child(2)').addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target.href);
//     render(blog);
// });

// document.querySelector('#navigation ul li:nth-child(3)').addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target.href);
//     render(contact);
// });
    
// document.querySelector('#navigation ul li:nth-child(4)').addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target.href);
//     render(projects);
// });

        
//  REFACTORED INTO "STATE"   //

var root = document.querySelector('#root');

// State holds infomatio the render function needs to render the page. This is a nested object//
var State =
            {
                'Home': {
                    'links': [ 'Home','Blog', 'Contact', 'Projects' ],
                    'title': 'Portfolio Page of Justin D Lautz'
                },
                'Blog': {
                    'links': [ 'Home','Blog', 'Contact', 'Projects' ],
                    'title': 'Welcome to my blog'
                },
                'Contact': {
                    'links': [ 'Home','Blog', 'Contact', 'Projects' ],
                    'title': 'Welcome to my contact'
                },
                'Projects': {
                    'links': [ 'Home','Blog', 'Contact', 'Projects' ],
                    'title': 'Welcome to my projects'
                }
            };
// Grabs a state object and renders it into the page//

function render(state){
    var links;
    var i = 0;
        
    // Function decleration//
    function navHandler(event){
        var destination = startCase(event.target.textContent);

        event.preventDefault();

        render(State[destination]); // Must use bracket notation to access an object dynamically//
    }


    // Grab each component and updates #root's HTML with the generated HTML that works with State//
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state.title)}
    ${Content(state)}
    ${Footer(state)}
    `;

    links = document.querySelectorAll('#navigation > ul > li >  a');

    // run a while loop for as long as the length of links is//
    while(i < links.length){
        // change the index
        links[i].addEventListener('click', navHandler);
        // Grab the event object that is available from the browser//
        // open up the Event Object and access the the target (What the source of the event was)//
        // This will revel a DOM node (in this case an <a>) tag//
        // Grab the textcontent inside of that <a> - this will be something like "home"
        // Ise that string to access the thing we need from State Object defined above//
        
        i++;
    }
}

render(State.Home);

// create event handlers for each navigation link//

// nameChecker();