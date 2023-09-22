function copyEmail(id) {
    let cText  = document.getElementById(id);

    navigator.clipboard.writeText(cText.innerHTML);

    alert("Copied the text: " + cText.innerHTML);
}

//-----------------------ROTATING CURSOR---------------------------//
const follower = document.querySelector(".svg-circle");

//-------------------CURSOR-----------------//

const cursor = document.querySelector(".cursor");
let selected = document.querySelectorAll(".fancy-selector");

const coords = { x: 0, y: 0};

document.addEventListener("mousemove", (e) => {
    let prevX = coords.x;
    let prevY = coords.y;

    coords.x = e.pageX - 10;
    coords.y = e.pageY - 10;
    
    let x = coords.x;
    let y = coords.y;

    x += (prevX - x);
    y += (prevY - y);

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    follower.style.left = (x - 15);
    follower.style.top = (y - 15);
    
});

selected.forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        cursor.classList.add("active");
        document.querySelector("textPath").innerHTML = item.getAttribute("name");
        follower.classList.add("active");
    });
});

selected.forEach(item => {
    item.addEventListener("mouseleave", (e) => {
        cursor.classList.remove("active");
        follower.classList.remove("active");
    });
});



    