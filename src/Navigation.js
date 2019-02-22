export default function Navigation(){
    return `
<div id="navigation">

<h1></h1>

<ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="blog/">Blog</a></li>
    <li><a href="Contact/">Contact</a></li>
    <li><a href="Projects/">Projects</a>

        <ul>
            <li><a href="">First</a></li>
            <li><a href="">Second</a></li>
            <li><a href="">Third</a></li>

        </ul>
    </li>

</ul>

<img src="https://i.pinimg.com/originals/e0/c1/7f/e0c17f52e48a1dc98a989c6701b526c5.jpg"
        alt="DNA Graphic">

</div>
`;
}