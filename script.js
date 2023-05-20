function clock (){
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes() + seconds/60;
    const hour = (date.getHours() - 12) + minutes/60;
    console.log(seconds, minutes, hour);

    const secAngle = seconds * 6;
    const minAngle = minutes * 6;
    const hourAngle = hour * 30;


    const secondsHand = document.getElementById("seconds");
    const minutesHand = document.getElementById("minutes");
    const hourHand = document.getElementById("hours");


    secondsHand.setAttribute("transform", `rotate(${secAngle}, 244, 251)`);
    minutesHand.setAttribute("transform", `rotate(${minAngle}, 244, 251)`);
    hourHand.setAttribute("transform", `rotate(${hourAngle}, 244, 251)`);

}
setInterval(clock, 1000)