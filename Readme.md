# Some Questions and its Answer of Assignment-05

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

**getElementById("id")**

- selects one elements by its unique id
- always returns a single element

**getElementById("class")**

- Selects all elements with the given class.
- Returns an HTMLCollection (live collection, updates automatically if DOM changes).
- You need to loop through it to access individual items.

**querySelectorAll("selector")**

- Selects all elements matching a CSS selector.
- Returns a NodeList (not live, but can be iterated using forEach).

## 2. How do you create and insert a new element into the DOM?

Answer:
const newDiv = document.createElement("div");

newDiv.textContent = "Hello";
newDiv.classList.add("my-class");

const container = document.getElementById("container");
container.appendChild(newDiv);

## 3. What is Event Bubbling and how does it work?

Answer:

- Event Bubbling is the process where an event starts from the innermost target element and then propagates (bubbles) upward to its parent, grandparent, and so on until it reaches the document.

- Example:
**In html:**
<!-- <div id="parent">
  <button id="child">Click Me</button>
</div> -->

**In Jabascript:**
document.getElementById("parent").addEventListener("click", (){
console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", (){
console.log("Child clicked");
});

output:
Child clicked
Parent clicked

## 4. What is Event Delegation in JavaScript? Why is it useful?

Answer:

- Event Delegation is a technique where instead of attaching event listeners to multiple child elements, you attach a single listener to their parent, and use event bubbling to catch events from children.

**Why useful?**

- Better performance (less event listeners in memory).

- Handles dynamically added elements without re-assigning event listeners.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:
**preventDefault()**

- Prevents the default browser action from happening.

**stopPropagation()**

- Stops the event from bubbling up (or down, in capturing phase).
