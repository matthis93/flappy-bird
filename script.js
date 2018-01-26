[]
function saut() {
   $("#bird").animate({marginBottom:'+=250px'},500 )
}

function bas() {
   $("#bird").animate({marginTop:'+=250px'},500 )
}


$(document).keypress(function(e) {
if (e.keyCode == 122)
{ $("#bird").animate({marginBottom:"+=100px"},100);
}
if (e.keyCode == 115)
{ $("#bird").animate({marginTop:'+=100px'},100);
}
if (e.keyCode == 100)
{ $("#bird").animate({marginLeft:'+=100px'},100);
}
if (e.keyCode == 113)
{ $("#bird").animate({marginRight:'+=100px'},100);
}
// alert(e.keyCode);
});


// alert(e.keyCode);
// if(e.keyCode==32)
// else {
//   else if (true) {
//
//   }
// }
