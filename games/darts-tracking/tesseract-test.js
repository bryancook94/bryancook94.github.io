const { createWorker } = require('tesseract.js');



(async () => {

  const worker = await createWorker('eng')

  /*
  const worker = await createWorker('eng', 1, {
    logger: m => console.log(m), // Add logger here
  });
*/  

  let result = await worker.recognize('https://bryancook94.github.io/games/darts/images/438203995_1391892211483332_7984727671857014127_n%20(1).jpg');
  //console.log(result);
  result.data.words.forEach((a)=>{console.log(a.text)})

  //console.log(result.data.words[1].text);
  await worker.terminate();
})();