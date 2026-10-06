let myName = "Mr. Uhl";
console.log("Hello, " + myName);

let button = document.querySelector('button');
button.innerHTML = "Don't Click Me!";

// let favoriteColor = prompt("What is your favorite color?", "Blue");
// console.log("Your favorite color is: " + favoriteColor);

button.addEventListener('click', () => {
    // alert('Button clicked!');
    button.style.color = 'rgb(255, 255, 0)';

    const items = document.querySelectorAll("li");

    items.forEach(item => {
        console.log(item.textContent);
        item.style.backgroundColor = "rgb(200, 200, 255)";
    });
});

