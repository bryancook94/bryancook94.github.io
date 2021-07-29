var degicon8=0;
var degicon6=30;
var degicon4=-30;
var position={
  "all":{"pos":0},
  "about":{"pos":"left","deg":-30},
  "projects":{"pos":"right","deg":30},
  "games":{"pos":"bottom","deg":0}
}


function about(){
  console.log("about",position)
  document.querySelectorAll('div[class*="bcxdown"]').forEach((a,b)=>{a.classList.remove("bcxdown")})
  if(position["about"].pos=="right"){
     document.querySelector('div[class*="4-icon"]').classList.add("bcxdown")
      let node = document.getElementById('rotate');
    position.all.pos+=120;
    position["projects"].pos="left";
    position["games"].pos="right";
    position["about"].pos="bottom";
    deg=position.all.pos;
    node.style.transform=`rotateZ(${deg}deg)`;

      let icon8 = document.querySelector('div[class*="8-icon"]');
      position["games"].deg-=120;
      let degicon8=position["games"].deg
      icon8.style.transform=`rotateZ(${degicon8}deg)`;

      let icon6 = document.querySelector('div[class*="6-icon"]');
      position["projects"].deg-=120;
      let degicon6=position["projects"].deg
      icon6.style.transform=`rotateZ(${degicon6}deg)`;

      let icon4 = document.querySelector('div[class*="4-icon"]');
      position["about"].deg-=120;
      let degicon4=position["about"].deg
      icon4.style.transform=`rotateZ(${degicon4}deg)`;

  }
  if(position["about"].pos=="left"){
     document.querySelector('div[class*="4-icon"]').classList.add("bcxdown")
      let node = document.getElementById('rotate');
    position.all.pos-=120;
    position["projects"].pos="left";
    position["games"].pos="right";
    position["about"].pos="bottom";
    deg=position.all.pos;
    node.style.transform=`rotateZ(${deg}deg)`;

    let icon8 = document.querySelector('div[class*="8-icon"]');
    position["games"].deg+=120;
    let degicon8=position["games"].deg
    icon8.style.transform=`rotateZ(${degicon8}deg)`;

    let icon6 = document.querySelector('div[class*="6-icon"]');
    position["projects"].deg+=120;
    let degicon6=position["projects"].deg
    icon6.style.transform=`rotateZ(${degicon6}deg)`;

    let icon4 = document.querySelector('div[class*="4-icon"]');
    position["about"].deg+=120;
    let degicon4=position["about"].deg
    icon4.style.transform=`rotateZ(${degicon4}deg)`;


  }
  document.getElementById('menu-addition-block').innerHTML="";
  document.getElementById('menu-addition-block').insertAdjacentHTML('afterbegin',`
    <div class="options option1"><div onclick="swap('contact')">Contact</div></div>
    <div class="options option2"><div onclick="swap('statement')">Statement</div></div>
    <div class="options option3"><div onclick="swap('image')">Hobbies</div></div>
  `);


}
function projects(){
    console.log("projects",position);
    document.querySelectorAll('div[class*="bcxdown"]').forEach((a,b)=>{a.classList.remove("bcxdown")})

  if(position["projects"].pos=="right"){
    document.querySelector('div[class*="6-icon"]').classList.add("bcxdown")
    let node = document.getElementById('rotate');
    position.all.pos+=120;
    position["projects"].pos="bottom";
    position["games"].pos="left";
    position["about"].pos="right";
    deg=position.all.pos;
    node.style.transform=`rotateZ(${deg}deg)`;

      let icon8 = document.querySelector('div[class*="8-icon"]');
      position["games"].deg-=120;
      let degicon8=position["games"].deg
      icon8.style.transform=`rotateZ(${degicon8}deg)`;

      let icon6 = document.querySelector('div[class*="6-icon"]');
      position["projects"].deg-=120;
      let degicon6=position["projects"].deg
      icon6.style.transform=`rotateZ(${degicon6}deg)`;

      let icon4 = document.querySelector('div[class*="4-icon"]');
      position["about"].deg-=120;
      let degicon4=position["about"].deg
      icon4.style.transform=`rotateZ(${degicon4}deg)`;
  }
  if(position["projects"].pos=="left"){
    document.querySelector('div[class*="6-icon"]').classList.add("bcxdown")
    let node = document.getElementById('rotate');
    position.all.pos-=120;
    position["projects"].pos="bottom";
    position["games"].pos="left";
    position["about"].pos="right";
    deg=position.all.pos;
    node.style.transform=`rotateZ(${deg}deg)`;

    let icon8 = document.querySelector('div[class*="8-icon"]');
    position["games"].deg+=120;
    let degicon8=position["games"].deg
    icon8.style.transform=`rotateZ(${degicon8}deg)`;

    let icon6 = document.querySelector('div[class*="6-icon"]');
    position["projects"].deg+=120;
    let degicon6=position["projects"].deg
    icon6.style.transform=`rotateZ(${degicon6}deg)`;

    let icon4 = document.querySelector('div[class*="4-icon"]');
    position["about"].deg+=120;
    let degicon4=position["about"].deg
    icon4.style.transform=`rotateZ(${degicon4}deg)`;

  }

  document.getElementById('menu-addition-block').innerHTML="";
  document.getElementById('menu-addition-block').insertAdjacentHTML('afterbegin',`
    <div class="options option1"><div onclick="swap('AutoKudos')">AutoKudos</div></div>
    <div class="options option2"><div onclick="swap('Sub3')">Project-Sub3</div></div>
    <div class="options option3"><div onclick="swap('doallmywork')">Doallmywork.com</div></div>
    <div class="options option4"><div onclick="swap('witneyvelo')">WitneyVelo.com</div></div>
  `);
}
function games(){
  console.log("games",position);
    document.querySelectorAll('div[class*="bcxdown"]').forEach((a,b)=>{a.classList.remove("bcxdown")})

  if(position["games"].pos=="right"){
    document.querySelector('div[class*="8-icon"]').classList.add("bcxdown")
    let node = document.getElementById('rotate');
    position.all.pos+=120;
    position["projects"].pos="right";
    position["games"].pos="bottom";
    position["about"].pos="left";
    deg=position.all.pos;
    node.style.transform=`rotateZ(${deg}deg)`;

    let icon8 = document.querySelector('div[class*="8-icon"]');
    position["games"].deg-=120;
    let degicon8=position["games"].deg
    icon8.style.transform=`rotateZ(${degicon8}deg)`;

    let icon6 = document.querySelector('div[class*="6-icon"]');
    position["projects"].deg-=120;
    let degicon6=position["projects"].deg
    icon6.style.transform=`rotateZ(${degicon6}deg)`;

    let icon4 = document.querySelector('div[class*="4-icon"]');
    position["about"].deg-=120;
    let degicon4=position["about"].deg
    icon4.style.transform=`rotateZ(${degicon4}deg)`;

  }
  if(position["games"].pos=="left"){
    document.querySelector('div[class*="8-icon"]').classList.add("bcxdown")
    let node = document.getElementById('rotate');
    position.all.pos-=120;
    position["projects"].pos="right";
    position["games"].pos="bottom";
    position["about"].pos="left";
    deg=position.all.pos;
    node.style.transform=`rotateZ(${deg}deg)`;

    let icon8 = document.querySelector('div[class*="8-icon"]');
    position["games"].deg+=120;
    let degicon8=position["games"].deg
    icon8.style.transform=`rotateZ(${degicon8}deg)`;

    let icon6 = document.querySelector('div[class*="6-icon"]');
    position["projects"].deg+=120;
    let degicon6=position["projects"].deg
    icon6.style.transform=`rotateZ(${degicon6}deg)`;

    let icon4 = document.querySelector('div[class*="4-icon"]');
    position["about"].deg+=120;
    let degicon4=position["about"].deg
    icon4.style.transform=`rotateZ(${degicon4}deg)`;


  }

  document.getElementById('menu-addition-block').innerHTML="";
  document.getElementById('menu-addition-block').insertAdjacentHTML('afterbegin',`
    <div class="options option1"><div onclick="swap('darts')">Darts Scorer</div></div>
    <div class="options option2"><div onclick="swap('4inarow')">4-in-a-row</div></div>
  `);
}


var data={
  "AutoKudos":{
            "name":"AutoKudos",
            "photo":"https://iambryancook.info/images/strava1.png",
            "text":"Every effort on strava deserves a thumbs up! A puppeteer lambda automates kudos, allowing me to only focus on the comments.",
            "text2":"<br/>Find me on strava and let the kudos begin!",
            "url":"",
          },
  "Sub3":{
            "name":"Project-Sub3",
            "photo":"https://project-sub3.com/img/banneralt_original.jpg",
            "text":"A React page hosted on github dedicated to the breaking of the 100 mile record. The form should be considered inactive whilst Jonathan is on his new adventure with GCN.",
            "text2":"<br/>This project gave me the chance to explore/use dynamodb,api gateway and lambda.",
            "url":"https://project-sub3.com/",
          },
  "doallmywork":{
            "name":"Doallmywork.com",
            "photo":"https://iambryancook.info/images/dotcom1.png",
            "text":"Prepared for a company hackathon, this project is a vast improvement on the original and is my first EC2 hosted app.",
            "text2":"<br/>This project also includes generators for construction of microsites (doallmywork.com/microsite) and emails (doallmywork.com/email) and uses these technologies react, redux, puppeteer, nginx.",
            "url":"https://doallmywork.com/microsite",
          },
  "witneyvelo":{
            "name":"WitneyVelo.com",
            "photo":"https://iambryancook.info/images/wvlogo.png",
            "text":"Hosted on S3, this was a fun project to help support my brother's formation of a new local cycling club. A club with less rules and more fun!",
            "text2":"<br/> A create-react-app using Strava to identify users before they upload to the gallery. It also displays local weather data and our favourite collection of routes with plans for more features.",
            "url":"https://witneyvelo.com/",
          },
  "darts":{
            "name":"Darts Scorer",
            "photo":"https://iambryancook.info/images/darts3.png",
            "text":"My first vanilla project to help me keep score when I play at home!",
            "text2":"<br/>Try the advance game in the settings!",
            "url":"https://iambryancook.info/games/darts.html",
          },
  "4inarow":{
            "name":"4 In A Row",
            "photo":"https://iambryancook.info/images/4inarow.png",
            "text":"My first React project.<br/>",
            "text2":"<br/>Alot of mistakes were made! In the future I might make this multiplayer and scale up the victory length",
            "url":"https://iambryancook.info/games/4inarow.html",
          },
  "contact":{
            "name":"contact",
            "photo":"https://iambryancook.info/images/image1.jpg",
            "text":" contact about this bla bla bla",
            "text2":"",
            "url":"",
          },
  "statement":{
            "name":"It all started from there....",
            "photo":"https://iambryancook.info/images/image1.jpg",
            "text":"I built a raspberry pi powered smart mirror to gather all my data into a single space.<br/> This is a project where I can practice,learn and see real benefits to my life.",
            "text2":"Older versions included Twilio integration to send SMS to my brother letting him know what TVshows were released.",
            "url":"https://iambryancook.info/projects/projects.html",
          },
"image":{
          "name":"",
          "photo":"https://iambryancook.info/images/image2.jpg",
          "text":"",
          "text2":"",
          "url":"",
        }
}

function swap(val){
  let {name,photo,text,url,text2}=data[val];
  switch(val){
    case "AutoKudos":
      document.querySelector('#quote span:nth-child(1)').innerHTML="Project";
      document.querySelector('#quote span:nth-child(2)').innerHTML=name;
      document.querySelector('#image').style.backgroundImage='url("'+photo+'")'
      document.getElementById('main-block-text').innerHTML=insertHLStrava();
      document.getElementById('main-block-text2').innerHTML="";
      document.getElementById("anchor").style.pointerEvents = "none";
      startHL();
      break;
    case "Sub3":
      document.querySelector('#quote span:nth-child(1)').innerHTML="Project";
      document.querySelector('#quote span:nth-child(2)').innerHTML=name;
      document.querySelector('#image').style.backgroundImage='url("'+photo+'")'
      document.getElementById('main-block-text').innerHTML=text;
      document.getElementById('main-block-text2').innerHTML=text2;
      document.getElementById('anchor').href=url;
      document.getElementById("anchor").style.pointerEvents = "initial";
      break;
    case "doallmywork":
      document.querySelector('#quote span:nth-child(1)').innerHTML="Project";
      document.querySelector('#quote span:nth-child(2)').innerHTML=name;
      document.querySelector('#image').style.backgroundImage='url("'+photo+'")'
      document.getElementById('main-block-text').innerHTML=text;
      document.getElementById('main-block-text2').innerHTML=text2;
      document.getElementById('anchor').href=url;
      document.getElementById("anchor").style.pointerEvents = "initial";
      break;
    case "witneyvelo":
      document.querySelector('#quote span:nth-child(1)').innerHTML="Project";
      document.querySelector('#quote span:nth-child(2)').innerHTML=name;
      document.querySelector('#image').style.backgroundImage='url("'+photo+'")'
      document.getElementById('main-block-text').innerHTML=text;
      document.getElementById('main-block-text2').innerHTML=text2;
      document.getElementById('anchor').href=url;
      document.getElementById("anchor").style.pointerEvents = "initial";
      break;
    case "darts":
      document.querySelector('#quote span:nth-child(1)').innerHTML="Game";
      document.querySelector('#quote span:nth-child(2)').innerHTML=name;
      document.querySelector('#image').style.backgroundImage='url("'+photo+'")'
      document.getElementById('main-block-text').innerHTML=text;
      document.getElementById('main-block-text2').innerHTML=text2;
      document.getElementById('anchor').href=url;
      document.getElementById("anchor").style.pointerEvents = "initial";
      break;
    case "4inarow":
      document.querySelector('#quote span:nth-child(1)').innerHTML="Game";
      document.querySelector('#quote span:nth-child(2)').innerHTML=name;
      document.querySelector('#image').style.backgroundImage='url("'+photo+'")'
      document.getElementById('main-block-text').innerHTML=text;
      document.getElementById('main-block-text2').innerHTML=text2;
      document.getElementById('anchor').href=url;
      document.getElementById("anchor").style.pointerEvents = "initial";
        break;
    case "statement":
      document.querySelector('#quote span:nth-child(1)').innerHTML="Free Code Camp";
      document.querySelector('#quote span:nth-child(2)').innerHTML="It all started from there....";
      document.querySelector('#image').style.backgroundImage='url("'+data["contact"].photo+'")';
      document.getElementById('main-block-text').innerHTML=text;
      document.getElementById('main-block-text2').innerHTML=text2;
      document.getElementById('anchor').href=url;
      document.getElementById("anchor").style.pointerEvents = "initial";
        break;
    case "image":
      document.querySelector('#quote span:nth-child(1)').innerHTML="Hobbies";
      document.querySelector('#quote span:nth-child(2)').innerHTML="";
      document.querySelector('#image').style.backgroundImage='url("'+photo+'")';
      document.getElementById('main-block-text').innerHTML=insertHLHobbies();
      document.getElementById('main-block-text2').innerHTML="";
      document.getElementById("anchor").style.pointerEvents = "none";
      startHL();
      break;
    default:
    document.querySelector('#quote span:nth-child(1)').innerHTML="Self - Taught";
    document.querySelector('#quote span:nth-child(2)').innerHTML="Full Stack Web Developer";
      document.querySelector('#image').style.backgroundImage='url("'+data["contact"].photo+'")';
      document.getElementById('main-block-text').innerHTML=insertHLContact();
      document.getElementById('main-block-text2').innerHTML="";
      document.getElementById("anchor").style.pointerEvents = "none";
      startHL();
      break;
  }

  var {height}=document.getElementById('menu-addition').getBoundingClientRect();
  document.getElementById('body-inner').style.height="calc(100vh - "+height+"px)";

}


var start=setInterval(function(){
 if(document.readyState=="complete"){
   var {height}=document.getElementById('menu-addition').getBoundingClientRect();
   document.getElementById('body-inner').style.height="calc(100vh - "+height+"px)";
   console.log("resized");
   clearInterval(start);
   projects();
   //setTimeout(()=>{projects()},1000);
 }

},300)


function insertHLStrava(){
  return `
  <pre>
  <code id="code" class="language-JavaScript">
//Strava Auto Kudos
//Find me on Strava and let the kudos begin
const chromium = require('chrome-aws-lambda');
const strava= new Promise(async(resolve,reject)=>{
  try{
        const browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
        ignoreHTTPSErrors: true,          });

        let page = await browser.newPage();
        await page.goto('https://www.strava.com/login');
        await page.type('#email',process.env.email);
        await page.type('#password',process.env.password);
        await page.click('#login-button');
        await page.waitForSelector('#dashboard-feed');
        await page.goto('https://www.strava.com/dashboard');
        const kudogiven=await page.evaluate(function(){
          var kudos=document.querySelectorAll('button[class*="js-add-kudo"]').length;
          document.querySelectorAll('button[class*="js-add-kudo"]').forEach((a,b)=>{
            a.click();
          });
          return kudos;
        });
        await browser.close();
        resolve(kudogiven);
  }
  catch(err){console.log(err.message);reject('something went wrong! ==> '+err.message+');}

})

exports.handler = async (event) => {

 return strava.then(function(value){console.log(value) }).catch(function(error){console.log(error) });

};

  </code>
  </pre>
  `
}

function insertHLContact(){
  return `
  <pre>
  <code id="code" class="language-JavaScript">

  let info = await transporter.sendMail({
    from: '"example@gmail.com" <example@gmail.com>', // sender address
    to: "cookbryan94@gmail.com", // list of receivers
    subject: "Hey There ", // Subject line
    html: "<b>Hey There</b>", // html body
  });

  </code>
  </pre>
  `
}
function insertHLHobbies(){
  return `
  <pre>
  <code id="code" class="language-JavaScript">
  const myLife={
  "fullname":"bryancook",
  "job":"configurator",
  "date":new Date(),
  "age": function(){
    return this.date.getFullYear()-1994
  },
  "technologies":["React,Redux,JavaScript,CSS,MYSQL","PHP",
  "Python","AWS","Nodejs","Puppeteer","git"],
  "hobbies":["scootering","tennis","cycling"],
  "interests":["Marvel","DC","chicken","cats","beagles","metal"],
  "FavouriteBands":["Parkway Drive","Blink 182","Venues",
  "Wednesday 13"]

  };
  var {hobbies,interests}=myLife;
  console.log('I am a '+myLife.age()+' year-old web developer who enjoys
  '+hobbies.join(",")+' and
  my interests extends to '+interests.join(",")+');
  </code>
  </pre>
  `
}

function startHL(){

  var target = document.getElementById('code');

  // Highlight the code
  hljs.highlightElement(target);

  // Get all the child nodes
  var children = Object.values(document.getElementById('code').childNodes);

  // Empty the target
  target.innerText = '';

  // And start the animation from the first node
  type(0);

  function type(i) {
      // Little helper
      function randomNumber(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
      }

      // Make the content visible
      if (i === 0) {
          target.style.visibility = 'visible';
      }

      // When we've displayed all the nodes
      // Just start over
      /*if (i >= children.length) {
          i = 0;
          target.innerText = '';
      }
   */
      // Append each node to the target code placeholder
      // And scroll that div if the code scrolls past it
      if (children.hasOwnProperty(i)) {
          target.appendChild(children[i]);

          target.scrollTop = target.scrollHeight;
      }

      // Step to the next node
      i++;

      // Repeat the process
      // after a variable amount of time
      setTimeout(function () {
          type(i);
      }, randomNumber(200, 500));
  }

}
