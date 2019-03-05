import { lowerCase } from 'lodash';

function linkBuilder(linksArray){
    var i = 0;
    var linksHTML = '';

    while(i < linksArray.length){
        linksHTML += `        
        <li>
        <a data-navigo href="./${lowerCase(linksArray[i])}">${linksArray[i]}</a>
        </li>
        `;
        
        i++;
    }
    
    return linksHTML;
}

export default function Navigation(state){
    return `
<div id="navigation">

<ul>
${linkBuilder(state.links)}
</ul>

<img src="https://i.pinimg.com/originals/e0/c1/7f/e0c17f52e48a1dc98a989c6701b526c5.jpg"
        alt="DNA Graphic">

</div>
`;
}
