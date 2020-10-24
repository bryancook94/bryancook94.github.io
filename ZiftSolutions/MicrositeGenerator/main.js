

function myFunction(node){

var TDTS=document.getElementById('ReadySectionsInner').scrollHeight-document.getElementById('ReadySectionsInner').clientHeight
var ToGo=1-(TDTS-document.getElementById('ReadySectionsInner').scrollTop)/TDTS;

document.getElementById('chart').innerHTML="";

var canvas = d3.select("#chart").append("svg")
               .attr("width",100)
               .attr("height",100);

var group = canvas.append("g")
            .attr("transform","translate(50,50)");
var r=50;
var p=Math.PI*2*ToGo;

var arc = d3.svg.arc()
            .innerRadius(r-10)
            .outerRadius(r)
            .startAngle(0)
            .endAngle(p);


group.append("path")
     .attr("d",arc);


}

function myFunctionb(node){

var TDTS=document.getElementById('dropzone').scrollHeight-document.getElementById('dropzone').clientHeight
var ToGo=1-(TDTS-document.getElementById('dropzone').scrollTop)/TDTS;

document.getElementById('chartb').innerHTML="";

var canvas = d3.select("#chartb").append("svg")
               .attr("width",100)
               .attr("height",100);

var group = canvas.append("g")
            .attr("transform","translate(50,50)");
var r=50;
var p=Math.PI*2*ToGo;

var arc = d3.svg.arc()
            .innerRadius(r-10)
            .outerRadius(r)
            .startAngle(0)
            .endAngle(p);


group.append("path")
     .attr("d",arc);


}

function myFunctionc(node){

var TDTS=document.getElementById('settings').scrollHeight-document.getElementById('settings').clientHeight
var ToGo=1-(TDTS-document.getElementById('settings').scrollTop)/TDTS;

document.getElementById('chartc').innerHTML="";

var canvas = d3.select("#chartc").append("svg")
               .attr("width",100)
               .attr("height",100);

var group = canvas.append("g")
            .attr("transform","translate(50,50)");
var r=50;
var p=Math.PI*2*ToGo;

var arc = d3.svg.arc()
            .innerRadius(r-10)
            .outerRadius(r)
            .startAngle(0)
            .endAngle(p);


group.append("path")
     .attr("d",arc);


}
