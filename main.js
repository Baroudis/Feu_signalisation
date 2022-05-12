
o = document.getElementById("haut");
m = document.getElementById("milieu")
b = document.getElementById('bas')



function rouge() {
    o.classList.remove("blanc");
    o.classList.add("rouge");
    m.classList.remove("orange");
    m.classList.add("blanc");
    b.classList.remove("vert");
    b.classList.add('blanc');
}

function orange() {
    o.classList.remove("rouge");
    o.classList.add("blanc");
    m.classList.remove("blanc");
    m.classList.add("orange");
    b.classList.remove("vert");
    b.classList.add("blanc");
}

function vert() {
    o.classList.remove("rouge");
    o.classList.add("blanc");
    m.classList.remove("orange");
    m.classList.add("blanc");
    b.classList.remove("blanc");
    b.classList.add("vert");
}



function tous() {

    leorange = setTimeout(orange, 5000);
    lerouge = setTimeout(rouge, 8000);
    levert = setTimeout(vert, 30000);

}

setInterval(tous, 32000)




// const progressBar = document.getElementById("bar");
// const loadingMsg = document.getElementById("loading");
// let barWidth = 0;

// const animate = () => {
//     barWidth++;
//     progressBar.style.width = `${barWidth}%`;
//     setTimeout(() => {
//         loadingMsg.innerHTML = `${barWidth}% Completed`;
//     }, 10100);
// };

// // animation starts 2 seconds after page load
// setTimeout(() => {
//     let intervalID = setInterval(() => {
//         if (barWidth === 100) {
//             clearInterval(intervalID);
//         } else {
//             animate();
//         }
//     }, 340); //this sets the speed of the animation
// }, 2000);


