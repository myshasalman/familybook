var NAME = [
    "MR.SALMAN",
    "MRS AFRENN",
    "MISS JAZZ",
    "MR CRAL"
    ];
  var images= [
      "DADDY.jpeg","MOMMY.jpeg","JAZZ.jpeg","CRAL.jpeg"
  ]

  var i = 0;
  function click() {
    document.getElementById("#name").innerHTML= NAME[i];
    document.getElementById("fimg").src= images[i];
    i++;
    
  }