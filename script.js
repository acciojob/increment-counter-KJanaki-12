//your JS code here. If rhttps://www.svgrepo.com/show/345221/three-dots.svgequired.
let counter = document.getElementById("counter");
let btn = document.getElementById("incrementBtn");

count = parseInt(counter.innerText);
function increseValue() {
	alert(count);
	count++;
	counter.innerText = `${count}`;
}

btn.addEventListener("click", increseValue);

