
function showTime (){
    let now = new Date ();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds ();
    document.getElementById ("hour").innerHTML = hour;
    document.getElementById ("minute").innerHTML = minute;
    document.getElementById ("second").innerHTML = second;
}
setInterval (showTime,10)