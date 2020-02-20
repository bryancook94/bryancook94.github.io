console.info('worker created');
onmessage = (e)=>{
  postMessage(`Hi ${e.data}`);
}
