<h1>Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll</h1>
<ul>
  <li>getElementById: It will select only one element from dom using id.</li>
  <li>getElementsByClassName: It will select all the element from dom using class name.</li>
  <li>querySelector: It will select only one element like getElementById. If user will provide class name it will select the first element of the class.</li>
  <li>querySelectorAll: It will select all element like getElementsByClassName.</li>
</ul>
<p>querySelector and querySelectorAll these method are used user need to provide class or id selector with its name like CSS</p>

<h2>Create and insert a new element into the DOM</h2>
<ol>
  <li>Firstly, we need to get the contianer where we want to appen the element</li>
  <li>Secondly, we need to create a new element</li>
  <li>Thirdly, add content or attributes</li>
  <li>And finaly, we need to appen the element inside the parent or container using appenChild or appen method</li>
</ol>

<h2>Event Bubbling and how does it work</h2>
<p>Event bubbling is a mechanism in javascript where an event starts from an element or targeted element and it will go up to its parent</p>

<h2>Event Delegation in JavaScript and why is it useful</h2>
<p>Event delegant in javascript is a technique where we add eventListener on a parent element instead of adding on multiple child. It is very helpful because we only add event listener on a parent add access inside its every single child element</p>

<h2>The difference between preventDefault() and stopPropagation() methods</h2>
<p>Both are event methodes. But they do difference thing</p>
<p>preventDefault stops the default browser behavior of an element</p>
<p>stopPropagation stops the event from bubbling up to parent elements</p>
