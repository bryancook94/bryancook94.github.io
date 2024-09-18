//import { drawTheGraph } from "./graph.js";

async function addNewPlayer(val){
    let players=[...document.querySelectorAll(`div[id^="player"]`)].map((item,pos)=>{return parseInt(item.getAttribute("id").replace("player",""))})
    if(players.length==0){players=[0]}
    let playerID=Math.max(...players)+1
    document.getElementById('bottom-right').insertAdjacentHTML(`beforeEnd`,`
    <div class="profile padding">
        <div class="profile-image" onclick="updatePicture(this.id)" id="player${playerID}">
            <div class="profile-name"></div>
        </div>
        <div class="score-group">
            <div class="profile-enter input border" onclick="eval(this)"><i class="fa-solid fa-arrow-left"></i></div>
            <div class="profile-color input border"><div class="clr-field"><button type="button" aria-labelledby="clr-open-label"></button><input type="text" data-coloris=""></div></div>
            <div class="profile-score border"><input type="text" value="301"></div>
            <div class="profile-scored border"><input type="text" value=""></div>
            <div class="profile-del input border" onclick="remove(this)"><i class="fa-solid fa-delete-left"></i></div>
        </div>
    </div>
    `)

}

async function updatePicture(val){
    await startCamera(document.getElementById(val).querySelector('.profile-name'));
    return 
}

async function startCamera(node) {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('video');
        video.srcObject = stream;
        console.log("startCamera",node);
        countdownAndCapture(video,node);
    } catch (err) {
        alert("No camera detected or access denied.");
        console.error("Error accessing the camera: ", err);
    }
}

function countdownAndCapture(video,node) {
    let countdown = 2;
    const countdownElement = document.getElementById('countdown');

    const interval = setInterval(() => {
        countdownElement.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);
            console.log("countdownAndCapture",node);
            countdownElement.textContent = '';
            takePicture(video,node);
        }
    }, 1000);
}

function takePicture(video,node) {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    console.log("takePicture",node);
    const data = canvas.toDataURL('image/png');
    node.style.backgroundImage = `url(${data})`;
    drawTheGraph()
}

function drawTheGraph(){
    //{ player: 'Player 1', score: 80 ,color:'red'}
    let rec=document.getElementById('top-left').getBoundingClientRect()
    document.querySelector('svg').setAttribute("width",`${Math.floor(rec.width)}`);
    document.querySelector('svg').setAttribute("height",`${Math.floor(rec.height)}`);

    const data = [...document.querySelectorAll(`div[id^="player"]`)].map((item,pos)=>{
        return {
            player:item.getAttribute("id"),
            score:(item.parentNode.querySelector('.profile-score input').value==''? 301 :parseInt(item.parentNode.querySelector('.profile-score input').value)),
            color:(item.parentNode.querySelector('.profile-color input').value==''?'steelblue':item.parentNode.querySelector('.profile-color input').value)
        }
    })
        document.querySelector('svg').innerHTML=null;
      
      const svg = d3.select("svg"),
            margin = { top: 20, right: 20, bottom: 30, left: 40 },
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
      
      const x = d3.scaleBand()
                  .rangeRound([0, width])
                  .padding(0.1)
                  .domain(data.map(d => d.player));
      
      const y = d3.scaleLinear()
                  .rangeRound([height, 0])
                  .domain([0, d3.max(data, d => d.score)]);
      
      g.append("g")
       .attr("class", "axis axis--x")
       .attr("transform", `translate(0,${height})`)
       .call(d3.axisBottom(x));
      
      g.append("g")
       .attr("class", "axis axis--y")
       .call(d3.axisLeft(y).ticks(10))
       .append("text")
       .attr("transform", "rotate(-90)")
       .attr("y", 6)
       .attr("dy", "0.71em")
       .attr("text-anchor", "end")
       .text("Score");
      
      g.selectAll(".bar")
       .data(data)
       .enter().append("rect")
       .attr("class", "bar")
       .attr("x", d => x(d.player))
       .attr("y", d => y(d.score))
       .attr("width", x.bandwidth())
       .attr("height", d => height - y(d.score))
       .attr("fill", (d, i) => d.color);
      
       /*
      const legend = svg.append("g")
                        .attr("class", "legend")
                        .attr("transform", `translate(${width - 100},${margin.top})`);
      
      legend.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", "steelblue");
      
      legend.append("text")
            .attr("x", 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .text("Player 1");
      
      legend.append("rect")
            .attr("x", 0)
            .attr("y", 24)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", "orange");
      
      legend.append("text")
            .attr("x", 24)
            .attr("y", 33)
            .attr("dy", ".35em")
            .text("Player 2");
            */
    return 
}

function remove(node){
    node.closest(".profile").remove()
    return
}

window.drawTheGraph=drawTheGraph;