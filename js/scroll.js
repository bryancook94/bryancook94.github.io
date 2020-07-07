function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
}
let original=Math.max(document.body.offsetHeight - (window.pageYOffset + window.innerHeight), 0);


function myFunction(x){
let scrollPosition =window.pageYOffset;
let windowSize=window.innerHeight;
let bodyHeight=document.body.offsetHeight;
let bottom=Math.max(bodyHeight - (scrollPosition + windowSize), 0);
let test=x;
var cir=(test-bottom)*(360.0/test);

console.log("==",bottom,'==>',test,'==>',cir);

 if (bottom==0){
  document.getElementById("arc1").setAttribute("d", describeArc(100, 100, 50, 0,359.99 ));
 }
 else {
  document.getElementById("arc1").setAttribute("d", describeArc(100, 100, 50, 0,cir ));
 }
};//end of myfunction
