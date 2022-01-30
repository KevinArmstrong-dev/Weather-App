console.log("Js from client side loaded");


//fetch Api is used on the client side or in the browser
//it does not work on the server on in node 
fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
})

// fetch('http://localhost:3000/weather?address=boston').then((response) => {
//     response.json().then((data) => {
//        if(data.error){
//         console.log(data.error);
//        }else{
//         console.log(data);
//        }

//     })
// })

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');




weatherForm.addEventListener('submit',(evt)=>{
    //prevent default behavouir which is refreshing the page everytime a form is submitted
    //now it does nothing
    evt.preventDefault();

    const location = search.value;
    // console.log('Testing ',location);
    messageOne.textContent = 'Loading. .. ... ';

messageTwo.textContent = '';
    fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then((data) => {
       if(data.error){
        messageTwo.textContent = data.error;
       }else{
        messageOne.textContent = data.forecast.temperature;
       }

    })
})
})