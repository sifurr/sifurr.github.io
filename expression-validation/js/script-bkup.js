
// let chooseOptionBtn = document.querySelectorAll('button');
// console.log(chooseOptionBtn)

// chooseOptionBtn.forEach(item =>{
//   let receivedClick = item;
//   receivedClick.addEventListener('click', btnClicked);  
// })
// function btnClicked(){
//   let p = prompt("Write input")

//   console.log(p)
// }

let buttons = document.querySelectorAll('button');
// let phone = document.querySelector('#phone');

// for(i=0; i<buttons.length; i++){
//   let btnList = buttons[i];
//   btnList.addEventListener('click', function(){
//    let btnTitle = btnList.innerText
//    if(btnTitle === 'Email'){
//      let mail = prompt("Enter you email");
//     console.log(mail)
//    }else if(btnTitle === 'Phone'){
//      let phone = prompt("Enter you Phone Number")
//      console.log(phone)
//    }else if(btnTitle === 'NID'){
//     let nid = prompt("Enter you NID")
//     console.log(nid)
//   }else{
//     let pCode = prompt("Enter you Post Code")
//     console.log(pCode)
//   }    
//   });  
// }

// Define UI elements
// select all the option buttons 
let option = document.querySelectorAll('button');
let optMail = document.querySelector('#email').innerHTML.toLowerCase().trim();
let optPhone = document.querySelector('#phone').innerHTML.toLowerCase().trim();
let optNid = document.querySelector('#nid').innerHTML.toLowerCase().trim();
let optPost = document.querySelector('#post').innerHTML.toLowerCase().trim();
let msg = document.querySelector('.card-title');
msg.classList = `success error`;


for (i = 0; i < option.length; i++) {
  let btnList = option[i];
  btnList.addEventListener('click', function () {
    let btnTitle = btnList.innerText.toLowerCase().trim();
    switch (btnTitle) {
      case optMail:
        let mail = prompt("Enter you email");
        let reMail = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
        if (mail === '' || mail === null) {
          msg.innerHTML = `<b class="error">Opps! provide information.</b>`;
        }else if(reMail.test(mail)){
          msg.innerHTML = `<b class="success">Passed!<br> ${mail} is a valid email address</b>`;
        } else {
          msg.innerHTML = `<b class="error">${mail} is not a valid email address</b>`;
        }
        break;

      case optPhone:
        let mobile = prompt("Enter you phone number");
        let rePhone = /^(\+)?(88)?01[0-9]{9}$/;
        if (mobile === '' || mobile === null) {
          msg.innerHTML = `<b class="error">Opps! provide information.</b>`;          
        }else if(rePhone.test(mobile)){
          msg.innerHTML = `<b class="success">${mobile} is a valid Bangladeshi mobile phone number</b>`;
        } else {
          msg.innerHTML = `<b class="error">${mobile} is not a valid Bangladeshi mobile phone number</b>`;
        }
        break;

      case optNid:
        let nid = prompt("Enter you NID");
        // 10 digits NID must not start with 0 
        let reNid = /^[1-9][0-9]{9}$/;
        if (nid === '' || nid === null) {
          msg.innerHTML = `<b class="error">Opps! provide information.</b>`;
        } else if (reNid.test(nid)) {
          msg.innerHTML = `<b class="success">${nid} is a valid Bangladeshi NID number</b>`;
        }
        else {
          msg.innerHTML = `<b class="error">${nid} is not a valid Bangladeshi NID number</b>`;
        }
        break;

      case optPost:
        let postCode = prompt("Enter you Post Code in English");
        // 4 digits post code
        let rePost = /^[1-9][0-9]{3}$/;
        if (postCode === '' || postCode === null) {
          msg.innerHTML = `<b class="error">Opps! provide information.</b>`;
        } else if (rePost.test(postCode)) {
          msg.innerHTML = `<b class="success">${postCode} is a valid Bangladeshi postal code number</b>`;
        } else {
          msg.innerHTML = `<b class="error">${postCode} is not a vild Bangladeshi postal code number</b>`;
        }

        break;
    }

  });
}


// email.addEventListener('click', checkEmail);
// phone.addEventListener('click', checkPhone);


function checkEmail(e) {
  // dummy data for checking purpose
  let dummyData = "hello";
  // take input from user
  let userInput = prompt("your email: ").toLowerCase().trim();
  // compare the user input with dummyData 
  if (dummyData === userInput) {
    console.log('Your email is valid!')
  } else {
    console.log("Doesn't match")
  }
}


// function checkEmail(e){
//   // dummy data for checking purpose
//   let dummyData = "hello";
//   // take input from user
//   let userInput = prompt("your email: ").toLowerCase().trim();
//   // compare the user input with dummyData 
//   if(dummyData === userInput){
//     console.log('Your email is valid!')
//   }else{
//     console.log("Doesn't match")
//   }
// }

// function checkPhone(e){
//   // dummy data for checking purpose
//   let dummyData = "018";
//   // take input from user
//   let userInput = prompt("your email: ").toLowerCase().trim();
//   // compare the user input with dummyData 
//   if(dummyData === userInput){
//     console.log('Your phone number is valid!')
//   }else{
//     console.log("Phone number is Not valid")
//   }
// }

