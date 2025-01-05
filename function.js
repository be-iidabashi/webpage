function change(){
    title.style.fontSize = '100px';
}

let count = 0;

function timer(){
    count += 1;
    if (count % 3 === 1) {
        subtitle.style.color = 'red';
    } else if (count % 3 === 2) {
        subtitle.style.color = 'green';
    } else {
        subtitle.style.color = 'black';
    }
}

btn.onclick = change;

setInterval(timer, 300)