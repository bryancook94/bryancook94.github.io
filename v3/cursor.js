



function moveContent(event) {
    //console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
    const xPercent = (event.clientX / window.innerWidth) * 100;
    const yPercent = (event.clientY / window.innerHeight) * 100;

    console.log(`X: ${xPercent.toFixed(2)}%, Y: ${yPercent.toFixed(2)}%`);


    document.getElementById(`dot`).style.left=`calc(${xPercent}% - 25px/2)`;
    document.getElementById(`dot`).style.top=`calc(${yPercent}% - 25px/2)`;

    document.getElementById(`container`).style.gridTemplateColumns=`${xPercent}% ${100-xPercent}%`;
    document.getElementById(`container`).style.gridTemplateRows=`${yPercent}% ${100-yPercent}%`;
    
}

document.addEventListener('mousemove',moveContent);


document.addEventListener('dblclick', function() {
    console.log("removeEventListener");
    document.removeEventListener('mousemove', moveContent);
});



function hasEventListener(element, eventType) {
    const listeners = getEventListeners(element);
    return listeners && listeners[eventType] && listeners[eventType].length > 0;
}

// Example usage:
const element = document.querySelector('#your-element-id');
const eventType = 'click';

if (hasEventListener(element, eventType)) {
    console.log(`The element already has a ${eventType} event listener.`);
} else {
    console.log(`The element does not have a ${eventType} event listener.`);
}