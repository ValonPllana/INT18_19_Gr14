var partIndex = 1;


function plusParts(r) {
  showSlides(slideIndex += r);
}



function showParts(r) {
  var j;
  var parts = document.getElementsByClassName("part1");

  if (r > parts.length) {partIndex = 1}    
  if (r < 1) {partIndex = parts.length}
  for (j = 0; j < parts.length; j++) {
      parts[j].style.display = "none";  
  }

  parts[partIndex-1].style.display = "block"; 
   
}

showParts(partIndex);