var partIndex = 1;


function plusPart(n) {
  showParts(partIndex += n);
}



function showParts(n) {
  var i;
  var parts = document.getElementsByClassName("part1");
  if (n > parts.length) {partIndex = 1}    
  if (n < 1) {partIndex = parts.length}
  for (i = 0; i < parts.length; i++) {
      parts[i].style.display = "none";  
  }

  parts[partIndex-1].style.display = "block"; 
  
}

  
showParts(partIndex);