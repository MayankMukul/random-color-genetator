const getcolor =() =>{
    const randomnumber = Math.floor( Math.random() * 16777215 );
    const randomcode = "#" + randomnumber.toString(16);
    document.body.style.backgroundColor=randomcode;
    document.getElementById("color-code").innerText=randomcode
}

function cpytoclip() {
    let copy = document.getElementById("color-code").innerHTML
    navigator.clipboard.writeText(copy);
}

document.getElementById("strtoclip").addEventListener("click",cpytoclip);

document.getElementById("btn").addEventListener("click",getcolor);


getcolor();