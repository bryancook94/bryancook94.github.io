



function moveContent(event) {
    //console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
    const xPercent = (event.clientX / window.innerWidth) * 100;
    const yPercent = (event.clientY / window.innerHeight) * 100;

    console.log(`X: ${xPercent.toFixed(2)}%, Y: ${yPercent.toFixed(2)}%`);


    document.getElementById(`dot`).style.left=`calc(${xPercent}% - 25px/2)`;
    document.getElementById(`dot`).style.top=`calc(${yPercent}% - 25px/2)`;

    document.getElementById(`container`).style.gridTemplateColumns=`${xPercent}% ${100-xPercent}%`;
    document.getElementById(`container`).style.gridTemplateRows=`${yPercent}% ${100-yPercent}%`;
    
  //  document.querySelector('svg').setAttribute("width",`${Math.floor(event.clientX)}`);
  //  document.querySelector('svg').setAttribute("height",`${Math.floor(event.clientY)}`);

}

// on click add 
document.getElementById('dot').addEventListener('click',()=>{
    document.getElementById('dot').style.background="green";
    document.addEventListener('mousemove',moveContent);

})



//on double click remove
document.getElementById('dot').addEventListener('dblclick', function() {
    document.getElementById('dot').style.background="red";
    document.removeEventListener('mousemove', moveContent);

    drawTheGraph();
});


function eval(elem){
    let score = elem.parentNode.querySelector('.profile-score input');
    let scored = elem.parentNode.querySelector('.profile-scored input');
    console.log(score,scored,elem)   

    let action='';
    let value='';

    if(scored.value!=''){
          action=scored.value[0];
          value=scored.value.substring(1);
    }
    console.log(action,value)   

    if(action=="+" && isIntegerNumber(score.value) && isIntegerNumber(value)){
          //the reset is a numnber
          score.value=parseInt(score.value)+parseInt(value);
          drawTheGraph();
    }
    if(action=="-" && isIntegerNumber(score.value) && isIntegerNumber(value)){
        if(parseInt(score.value)>0){
            score.value=parseInt(score.value)-parseInt(value);
            drawTheGraph();
        }
        else{
            console.log('score is negative')
      }
  
    }
    else{
          console.log('no action')
    }

    return
}


function isIntegerNumber(value) {
    let test=parseInt(value)
    return typeof test === 'number' && !Number.isNaN(test) && value.replace(/[0-9]/gi,"").length==0;
}
