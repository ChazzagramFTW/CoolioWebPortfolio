function readMore(string) {
    var moreText = document.getElementsByClassName("more " + string)[0];
    var btnText = document.getElementsByClassName("read-more " + string)[0];
  
    if (moreText.style.display === "inline") {
      moreText.style.display = "none";
      btnText.innerHTML = "Read more.."; 
    } else {
      btnText.innerHTML = "Read less..";    
      moreText.style.display = "inline";
    }
}