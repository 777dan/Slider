let img_src = ["images/one.jpg", "images/two.jpg", "images/apple.jpg"];

let i = 0;
let slider = document.getElementById("slider");
let effect;

let timer;

function next() {
    i++;
    if (i >= img_src.length) {
        i = 0;
    }
    addEffect();
    setTimeout(change, 1000);
    // slider.src = img_src[i];
}

function prev() {
    i--;
    if (i < 0) {
        i = 2;
    }
    addEffect();
    setTimeout(change, 1000);
}

let ef = document.forms["effects"];
for (let i = 0; i < ef.length; i++) {
    ef[i].addEventListener("change", changeEffect);
}

function changeEffect(event) {
    effect = event.target.value;
}

let value = document.getElementById("go1").getAttribute("checked");
if (value == "checked") {
    effect = "go";
}

function start() {
    stop();
    timer = setInterval(next, 2000);
}

function stop() {
    clearInterval(timer);
}

function addEffect() {
    opct(i);
    slider.classList.add(effect);
}


function change() {
    slider.src = img_src[i];
    // alert(i)
    // if (i == 0) {
    //     let b = document.getElementById("img1");
    //     b.classList.add("100%");
    // }
    slider.classList.remove(effect);
}

let linkImage;

function clickMini1() {
    linkImage = document.getElementById("img1").src;
    clickMini()
}

function clickMini2() {
    linkImage = document.getElementById("img2").src;
    clickMini()
}

function clickMini3() {
    linkImage = document.getElementById("img3").src;
    clickMini()
}

function clickMini() {
    let findImage1 = linkImage.indexOf("images");
    let cutLink = linkImage.slice(findImage1, linkImage.length);
    let findImage = img_src.indexOf(cutLink);
    addEffect();
    // opct();
    setTimeout(change1, 1000);
    // opct();
    function change1() {
        slider.src = img_src[findImage];
        opct(findImage);
        slider.classList.remove(effect);
    }
}

function opct(i) {
    if (i == 0) {
        document.getElementById("img1").classList.add("wh");
        document.getElementById("img2").classList.remove("wh");
        document.getElementById("img3").classList.remove("wh");
    }

    if (i == 1) {
        document.getElementById("img2").classList.add("wh");
        document.getElementById("img1").classList.remove("wh");
        document.getElementById("img3").classList.remove("wh");
    }

    if (i == 2) {
        document.getElementById("img3").classList.add("wh");
        document.getElementById("img2").classList.remove("wh");
        document.getElementById("img1").classList.remove("wh");
    }
}