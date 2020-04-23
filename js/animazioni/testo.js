var i = 0;
var txt = 'ALLENATI CON NOI!'; /* The text */
var speed = 180; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("animazione").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();