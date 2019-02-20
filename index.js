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
import nameChecker from './src/Greeter';

var root = document.querySelector('#root');

root.innerHTML = `
${Navigation('Nav Bar')}
${Header('Portfolio page of Justin D. Lautz')}
${Content}
${Footer}
`;

nameChecker();
