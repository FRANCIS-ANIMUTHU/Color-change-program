var button=document.getElementById('btn');

//addEventListener('event',listener)
button.addEventListener('click',color);


function color(event){
    document.body.style.backgroundColor=prompt('Enter the background color');
    event.target.style.color=prompt('Enter the text color');
    event.target.style.backgroundColor=prompt('Enter the button background color');

}





