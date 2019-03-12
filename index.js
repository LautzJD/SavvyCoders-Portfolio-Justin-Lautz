/* eslint-disable vars-on-top */
/* var name = window.prompt("What's your name");
window.alert (`Why hello there ${name}`);*/

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
import * as State from './state';
import Navigo from 'navigo'; // helps client side routing so nav links work!//
// import nameChecker from './src/Greeter';

var router = new Navigo(location.origin);
var root = document.querySelector('#root');
        

function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state.title)}
    ${Content(state)}
    ${Footer(state)}
    `;
}

router.updatePageLinks();

// Function decleration//
function navHandler(params){
    var destination = startCase(params.page);

    render(State[destination]); // Must use bracket notation to access an object dynamically//
}

router
    .on('/:page', navHandler)
    .on('/', () => navHandler({ 'page': 'Home' }))

    .resolve();

// Fetch returns to us a promise//
// The response that comes from FETCH will fo into the callback function that the "then()" uses"//
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));


// nameChecker()