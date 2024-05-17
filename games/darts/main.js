
  function openNav() {
    document.getElementById("mySidebar").style.width = "50vw";
    document.getElementById("main").style.marginLeft = "calc(100vw/2)";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  
  
  function select(val){
    let player=val.querySelector('table').id;
    let players=[...document.querySelectorAll('.card')];
    players.forEach((item)=>{
      let currentPlayer=item.querySelector('table').id
      if(currentPlayer==player){
        item.classList.add("card-active");
      }
      else{
        item.classList.remove("card-active");
      }
    });
    
    //console.log(player);
    return player
  }
  function action(val){
    let va=val.innerText;
    let da=val.getAttribute("data-value");
    let currentplayer=getCurrentPlayer();
    if(currentplayer==null){alert("select a player");return}
    
    let currentplayerscore=document.querySelector(`*[id="${currentplayer}"]`).closest("div.card").querySelector(".game").innerText;
    
    //console.log(va,isNumber(va),currentplayer,currentplayerscore);
    if(isNumber(va)==true){
      scoreCount=scoreCount+va
      //console.log("scoreCount",scoreCount)
    }
    
    if(da=="back"){
     let node=document.querySelector(`*[id="${currentplayer}"] .scored td`);
     if(node!==null){
      let toDel = parseInt(node.innerText);
      let currentScore=document.querySelector(`*[id="${currentplayer}"]`).closest("div.card").querySelector(".game").innerText;
          document.querySelector(`*[id="${currentplayer}"]`).closest("div.card").querySelector(".game").innerText=`${parseInt(currentScore)+toDel}`;
          node.remove();
     }
      
    }
    if(da=="enter"){
     if(scoreCount==""){alert("Select a score first");return;} 
     let convertScore=parseInt(currentplayerscore)-parseInt(scoreCount);
     document.querySelector(`*[id="${currentplayer}"]`).closest("div.card").querySelector(".game").innerText=parseInt(convertScore);
     document.querySelector(`*[id="${currentplayer}"] tbody.scored`).insertAdjacentHTML('afterBegin',`
     <tr>
      <td>${parseInt(scoreCount)}</td>
     </tr>
     `)
      
      //reset variable
      scoreCount="";
    }
    
    
    return va
    
  }

  function checkout(val){
    arrToSlide=undefined;

    let search=document.querySelector(`#Checkout-input`).value;
    let searchNum=parseInt(search);
    let outcome=findFinish(searchNum);
    //console.log(outcome);

    //clear previous results
    [...document.querySelectorAll(`option[data-combination*=","]`)].forEach((item,pos)=>{item.remove()})

    for(let i=0;i<outcome.length;i++){
      let dartSet=outcome[i].reverse();
      let darts=dartSet;
      //console.log("darts",darts);
      for(let j=0;j<dartSet.length;j++){
        let dartNum=(j+1);
        let dart=darts[j]
        let keyy=Object.keys(dart)[0];
        let vall=dart[keyy] ;
        //console.log("keyy",keyy,"vall",vall)

          //does this option exist
          let optTest=document.querySelector(`#${keyy}-dart-${dartNum} option[value="${vall}"]`);
          if(optTest==null){
            //console.log(`#${keyy}-dart-${dartNum}`,document.querySelector(`#${keyy}-dart-${dartNum}`));
            document.querySelector(`#${keyy}-dart-${dartNum}`).insertAdjacentHTML(`afterbegin`,`
            <option value="${vall}" data-combination="${i}">${vall}</option>
            `);
          }
          else{
            let dc=optTest.getAttribute("data-combination");
            optTest.setAttribute("data-combination",`${dc},${i}`);

          }


      }
    }
    let arr="1".split(",");
    for(let i=0;i<arr.length;i++){
            let current=arr[i];
            let nodes=[...document.querySelectorAll(`*[data-combination]`)]
            nodes.forEach((item)=>{if(item.value=="?"){item.selected=true;}})
            nodes.forEach((item,pos)=>{

              let dc=item.getAttribute("data-combination");
              let dcarr=dc.split(",")
              if(dcarr.includes(current)){
                  item.selected=true;
              }


            })

    }
    
    document.querySelector(`#checkouts-range`).setAttribute("min",0);
    document.querySelector(`#checkouts-range`).setAttribute("max",outcome.length-1);

  }
  function deleteNode(val){
    val.parentNode.remove();
    return
  }

  function isNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
  }
  function getCurrentPlayer(){
      //null
      let player=document.querySelector('.card-active');
      if(player!==null){
         player=player.querySelector('table').id
      }
    return player     
  }


function selectGame(val){
  let num=parseInt(val.value);
  let player=val.closest(".card").querySelector("table").id;
  let currentScore=parseInt(val.closest(".card").querySelector(".game").innerText);
  //console.log(val.value,player,currentScore);
  
  //set new score
  val.closest(".card").querySelector(".game").innerText=val.value+"01";
  return 
}

function findFinish(val){
    let index={
        "single":1,
        "double":2,
        "triple":3
        };
        let dart=[{"single":1},{"double":1},{"triple":1}]
        
        function findNumberSpace(sn,sd,dart2,dart3){
        let startNumber=sn;
        
        let resultSpace=[];
        let validSpace=[];
        let startingDouble={"double":sd};
        let sdx=2*sd;
        
        for(let i=0;i<dart2.length;i++){
        for(let j=0;j<dart3.length;j++){
        
        let currentAnswer=[]
        currentAnswer.push(startingDouble)
        currentAnswer.push(dart2[i])
        currentAnswer.push(dart3[j])
        resultSpace.push(currentAnswer)
        
        let validAnswer=[]
        let d2x=index[Object.keys(dart2[i])[0]];
        let d3x=index[Object.keys(dart3[j])[0]];
        
        let d2=Object.values(dart2[i])[0]*d2x;
        let d3=Object.values(dart3[j])[0]*d3x;
        
        //console.log(sn-sdx-d2-d3,`${sn}-${sdx}-${d2}-${d3}`)
        
        if((sn-sdx)==0){validAnswer=[startingDouble]}
        if((sn-sdx-d2)==0){validAnswer=[startingDouble,dart2[i]]}
        if((sn-sdx-d2-d3)==0){validAnswer=[startingDouble,dart2[i],dart3[j]]}
        if((sn-sdx)<0){}
        if((sn-sdx-d2)<0){}
        if((sn-sdx-d2-d3)<0){}
        
        if(validAnswer.length!==0){
        validSpace.push(validAnswer)
        }
        
        }
        }
        let validSpaceString=validSpace.map((item)=>{return JSON.stringify(item)})
        let validSpaceClean=[...new Set(validSpaceString)].map((item)=>{return JSON.parse(item)})
        //console.log(validSpaceClean)
        return validSpaceClean
        }
        
        

        let score=parseInt(document.querySelector(`#${getCurrentPlayer()}`).closest('.card').querySelector('.game').innerText);
                  document.querySelector(`#Checkout-input`).value=score;    

        let finalAnswerSpace=[];
        let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25];
        for(let a=0;a<numbers.length;a++){
        let start=numbers[a];
        
        for(let b=0;b<numbers.length;b++){
        let number2=numbers[b];
        let dart2=[];
        if(number2==25){dart2=[{"single":number2},{"double":number2}];} else{dart2=[{"single":number2},{"double":number2},{"triple":number2}];}
        
        
        for(let c=0;c<numbers.length;c++){
        let number3=numbers[c];
        let dart3=[];
        if(number3==25){dart3=[{"single":number3},{"double":number3}];} else{dart3=[{"single":number3},{"double":number3},{"triple":number3}];}
        finalAnswerSpace.push(...findNumberSpace(score,start,dart2,dart3))
        }
        }
        }
        
        let p=[...finalAnswerSpace];
        let pp=p.map((item)=>{return JSON.stringify(item)})
        let ppp=[...new Set(pp)].map((item)=>{return JSON.parse(item)})
        //console.log(ppp,"Final Answer Space for starting with : ",score, ` which has ${ppp.length} possible outcomes`)
        
        return ppp
}


var arrToSlide=undefined;
function updateOutcome(val){
          let current=val.value;
          //console.log("    current",current)
          if(arrToSlide){
            document.querySelector(`#checkouts-range`).setAttribute("min",0);
            document.querySelector(`#checkouts-range`).setAttribute("max",arrToSlide.length-1);

            current=arrToSlide[val.value];
            //console.log("new current",current)
          }

            
          let nodes=[...document.querySelectorAll(`*[data-combination]`)]
          nodes.forEach((item)=>{if(item.value=="?"){item.selected=true;}})

          nodes.forEach((item,pos)=>{
            let dc=item.getAttribute("data-combination");
            let dcarr=dc.split(",")
            if(dcarr.includes(current)){
                item.selected=true;
            }
          })
}

var scoreCount="";
var fullscreen=1;

function screen(){
  if(fullscreen==1){
    document.querySelector('body').requestFullscreen();
    fullscreen=0;
  }
  else {
    document.exitFullscreen();
    fullscreen=1;
  }

 }  


 
 let selects=[...document.querySelectorAll(`select[id*="-dart-"]`)]
 selects.forEach(select => {
  select.addEventListener('change', (elem) => {
      let valueSelected=elem.target.value;
      let optionNode=elem.target.querySelector(`option[value="${valueSelected}"]`);
      let dcArr=optionNode.getAttribute("data-combination").split(",");
      //console.log(valueSelected,dcArr,"@")
      arrToSlide=dcArr
      updateOutcome(valueSelected);
    })
});

