// Task 1: Change Heading Text ========================

const heading = document.getElementById("heading");
const button = document.getElementById("changeBtn");

button.addEventListener("click", function () {
    heading.innerText = "Welcome to JavaScript";
});

// Task 2: Change Paragraph Color ==================

const p = document.getElementById("text");

const redText = document.getElementById("red-text");
const blueText = document.getElementById("blue-text");
const greenText = document.getElementById("green-text");

redText.addEventListener("click", function () {
    p.style.color = "red";
});

blueText.addEventListener("click", function () {
    p.style.color = "blue";
});

greenText.addEventListener("click", function () {
    p.style.color = "green";
});

// Task 3: Change Background Color =================

const redBg = document.getElementById("redBg");
const blueBg = document.getElementById("blueBg");
const greenBg = document.getElementById("greenBg");
const whiteBg = document.getElementById("whiteBg");

redBg.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
});

blueBg.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
});

greenBg.addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
});

whiteBg.addEventListener("click", function () {
    document.body.style.backgroundColor = "white";
});

// Task 4: Show and Hide Text =============== 

const showBtn = document.getElementById("Show");
const hideBtn = document.getElementById("Hide");

const text1 = document.getElementById("text-1");

showBtn.addEventListener("click", function () {
    text1.style.opacity = "1";
});
hideBtn.addEventListener("click", function () {
    text1.style.opacity = "0";
});

// Task 5: Change Image 

const changeImage = document.getElementById("image");
const changeImageBtn = document.getElementById("changeImage");

changeImageBtn.addEventListener("click", function () {
    changeImage.src = "https://picsum.photos/960/540?2" + Math.random() * 100;
});


// Task 6: Increase Font Size ============

const fontSizeText = document.getElementById("fontSizeText");
const increaseFont = document.getElementById("increaseFont");

let font = 16;

increaseFont.addEventListener("click", function () {
    font = font + 2;
    fontSizeText.style.fontSize = font + "px";
});

// Task 7: Counter ================== -->

const counter = document.getElementById("counter");

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", function () {
    counter.innerText = Number(counter.innerText) + 1;
})
decreaseBtn.addEventListener("click", function () {
    if (Number(counter.innerText) <= 0) {
        return;
    } else {
        counter.innerText = Number(counter.innerText) - 1;
    }
})
resetBtn.addEventListener("click", function () {
    counter.innerText = "0";
})

// Task 8: Toggle Dark Mode =========

const darkModeBtn = document.getElementById("toggleDark");

darkModeBtn.addEventListener("click", function () {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkModeBtn.innerText = "Dark Mode";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        darkModeBtn.innerText = "Light Mode";
    }
});

// Task 9: Add a New Paragraph 

const addParagraphBtn = document.getElementById("addParagraph");
const paragraph = document.getElementById("paragraph")

addParagraphBtn.addEventListener("click", function () {
    paragraph.innerHTML += "<p> New Paragraph </p>";

});

// Task 10: Remove the Last Paragraph ===========

const removeParagraph = document.getElementById("removeParagraph");

removeParagraph.addEventListener("click", function () {
    paragraph.lastElementChild.remove();
});

// Task 11: Change Button Text =========

const changeButtonText = document.getElementById("changeButtonText");

changeButtonText.addEventListener("click", function () {
    changeButtonText.innerText = "Clicked!";
});

// Task 12: Random Number Generator ========

const randomNumber = document.getElementById("randomNumber");
const generateNumberBtn = document.getElementById("generateNumberBtn");

generateNumberBtn.addEventListener("click", function () {
    randomNumber.innerText = Math.floor(Math.random() * 100) + 1;
});

// Task 13: Random Background Colour =======

const randomColorBtn = document.getElementById("randomColorBtn");

randomColorBtn.addEventListener("click", function () {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor =
        `rgb(${red}, ${green}, ${blue})`;

});

// Task 14: Traffic Light ===================

const redLight = document.getElementById("redLight");
const yellowLight = document.getElementById("yellowLight");
const greenLight = document.getElementById("greenLight");

const redLightBtn = document.getElementById("redLightBtn");
const yellowLightBtn = document.getElementById("yellowLightBtn");
const greenLightBtn = document.getElementById("greenLightBtn");

redLightBtn.addEventListener("click", function () {

    redLight.classList.toggle("red-active");
    yellowLight.classList.remove("yellow-active");
    greenLight.classList.remove("green-active");

});

yellowLightBtn.addEventListener("click", function () {

    redLight.classList.remove("red-active");
    yellowLight.classList.toggle("yellow-active");
    greenLight.classList.remove("green-active");

});

greenLightBtn.addEventListener("click", function () {

    redLight.classList.remove("red-active");
    yellowLight.classList.remove("yellow-active");
    greenLight.classList.toggle("green-active");

});


