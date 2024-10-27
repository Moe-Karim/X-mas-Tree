var displayTree = document.body;
var num = window.prompt("Enter tree height:");
var s = ""
for (i=0;i<num;i++){
    if (i==0)
        s += "&nbsp;".repeat((num))+"<span class='top'>*</span>";
    s+= "&nbsp;".repeat((num -i -1))+"*"+"|".repeat((i*2+1))+"*"+"<br>";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
setInterval((element)=>{
displayTree.style.color=getRandomColor();
displayTree.innerHTML=s;
}
,1000);