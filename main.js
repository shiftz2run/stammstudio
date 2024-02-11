var m = false;
function openMenu(){
	if(m){
		document.getElementById("menu").style.display="none";
		document.getElementById("menuBtn").innerHTML ="Menu";
		m = false;
		return;
	}
	document.getElementById("menu").style.display="block";
	document.getElementById("menuBtn").innerHTML ="Fermer Menu";
	m = true;
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000);
} 