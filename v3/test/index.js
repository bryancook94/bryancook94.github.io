
let data=findFinish(4)
let result={};
let resultSVG={};
let temp;

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
        
        //console.log(sn-sdx-d2-d3,${sn}-${sdx}-${d2}-${d3})
        
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
        
        
  
        let score=val;    
  
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

function create(arrOfThrows){

    for(let i=0;i<arrOfThrows.length;i++){
        let key=Object.keys(arrOfThrows[i])[0];
        let val=Object.values(arrOfThrows[i])[0];

        console.log(`dart-${i+1}`,`${key.substring(0,1)}${val}`)
        if(resultSVG[`dart-${i+1}`]==undefined){resultSVG[`dart-${i+1}`]=[]}
            resultSVG[`dart-${i+1}`].push(`${key.substring(0,1)}${val}`)


        if(i==0){temp=undefined};
        if(temp==undefined){
            if(result[key]==undefined){
                result[key]={};
                result[key][val]={};
                temp=result[key][val];
                //console.log("a",i,temp);
                continue;
            }
            if(result[key]!==undefined){
                //result[key][val]={};
                //temp=result[key][val];
                //console.log("b",i,temp)

                if(result[key][val]!==undefined){
                    temp=result[key][val];
                    //console.log("b1",i,temp)
                }
                else{
                    result[key][val]={};
                    temp=result[key][val];
                    //console.log("b2",i,temp)
                }

            }
        }
        else {
            if(temp[key]==undefined){
                temp[key]={};
                temp[key][val]={};
                temp=temp[key][val];
                //console.log("c",i,temp)
            }
            if(temp[key]!==undefined){
                if(temp[key][val]!==undefined){
                    temp=temp[key][val];
                    //console.log("d1",i,temp)
                }
                else{
                    temp[key][val]={};
                    temp=temp[key][val];
                    //console.log("d2",i,temp)
                }
            }
        }
    
        //console.log(result,i);
    }
temp=undefined
return
}

for(let i=0;i<data.length;i++){

    let arr=data[i];
    arr.reverse();
    create(arr);        
}        

console.log(result)


{
    "single": {
        "1": {
            "single": {
                "1": {
                    "double": {
                        "1": {}
                    }
                }
            }
        },
        "2": {
            "double": {
                "1": {}
            }
        }
    },
    "double": {
        "1": {
            "double": {
                "1": {}
            }
        },
        "2": {}
    }
}


{
    "dart-1": [
        "s1",
        "d1",
        "s2",
        "d2"
    ],
    "dart-2": [
        "s1",
        "d1",
        "d1"
    ],
    "dart-3": [
        "d1"
    ]
}


[...document.querySelectorAll(`#areas path[id^="s"],#areas path[id^="d"],#areas path[id^="t"]`)].forEach((item)=>{item.setAttribute("fill","#d6d4d4")})


