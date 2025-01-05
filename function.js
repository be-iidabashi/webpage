function change(){
    title.style.fontSize = '100px';
}

let count = 0;

function timer(){
    count += 1;
    if (count % 2 === 1) {
        subtitle.style.color = 'red';
    } else {
        subtitle.style.color = 'black';
    }
}

btn.onclick = change;

setInterval(timer, 300)