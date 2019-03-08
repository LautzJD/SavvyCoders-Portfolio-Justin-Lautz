
import { lowerCase } from 'lodash';

function linkBuilder(linksArray){
    var linksHTML = linksArray.map((link) => {
        var destination = '';

        if(link !== 'Home'){
            destination = lowerCase(link);
        }

        return `
        <li>
        <a data-navigo href="./${destination}">${link}</a>
        </li>
        `;
    }).join(' ');

    console.log(linksHTML);

    return linksHTML;
}

export default function Navigation(state){
    return `
     <div id = "navigation">

                <ul>
                    ${linkBuilder(state.links)}
                </ul>

                <img src="https://i.pinimg.com/originals/e0/c1/7f/e0c17f52e48a1dc98a989c6701b526c5.jpg"
                    alt="DNA Graphic">

            </div>
    `;
}

// var i = 0;
// while(i < linksArray.length){
//     if(linksArray[i] !== 'Home'){
//         destination = lowerCase(linksArray[i]);
//     }
//     linksHTML += `
//     <li>
//     <a data-navigo href="./${destination}">${linksArray[i]}</a>
//     </li>
//     `;

//     i++;
// }


// linksArray.forEach((link) =>  { // 'link' represents each individual 'link' in the link aray
//     if(link !== 'Home'){
//         destination = lowerCase(link);
//     }
//     linksHTML += `
//         < li >
//         <a data-navigo href="./${destination}">${link}</a>
//     </li >
//         `;
// });


