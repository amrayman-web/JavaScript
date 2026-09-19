
const icons = document.getElementsByClassName("icon");
const reviewBtn = document.getElementById("reviewBtn");


for (let icon of icons) {
    icon.addEventListener("click", function () {

        for (let icon of icons) {
            icon.classList.remove("active");
        }

        icon.classList.add("active")

        if (icon.classList.contains("active")) {
            reviewBtn.removeAttribute("disabled", "")
        } else {
            reviewBtn.setAttribute("disabled", "")
        }
    });
}

const main = document.getElementById ("main")

reviewBtn.addEventListener ("click" , function () {
    main.innerHTML=`<h1>Thank you for your feadback!</h1> <br><br> <h2>We appreciate your time</h2>`
})