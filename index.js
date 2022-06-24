let registerBtn = document.querySelector(".registerbtn");
let loginPath = document.querySelector('.login');
let signUp = document.querySelector(".register");
let body = document.querySelector("#cover");
let loginBtn = document.querySelector(".btn5");
let inputs1 = document.querySelector(".inputs1");
let inputs2 = document.querySelector(".inputs2");
let replyBtn = document.querySelectorAll(".btn1");
let comment1 = document.querySelector("#resp1");
let comment2 = document.querySelector("#resp2");
let comment3 = document.querySelector("#resp3");
let container = document.querySelector(".container1");
let msg = document.querySelector(".msg");
let vertLine = document.querySelector(".vl");
let deleteBtn = document.querySelector(".btn3");
let delCover = document.querySelector(".modal");
let cancelBtn = document.querySelector(".del");
let plusBtn = document.querySelectorAll(".plus");
let minusBtn = document.querySelectorAll(".minus");
let numberBtn = document.querySelectorAll(".num");

            // FORM SECTION
registerBtn.addEventListener("click", () => {
    loginPath.style.display = "none"
    signUp.style.display = "block"
})

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (inputs1.value === 'christofa' || inputs2.value === '12345'){
       loginPath.style.display = "none"
       body.style.display = "block"
    } else if (inputs1.value === '' || inputs2.value === ''){
        msg.style.display = "block"
        msg.innerHTML = 'Please enter all fields'
        setTimeout(()=> msg.remove(), 2000)
    } else {
        msg.style.display = "block"
        msg.innerHTML = 'Wrong Username or Password'
        setTimeout(()=> msg.remove(), 2000)
        inputs1.value = ''
        inputs2.value = ''
    }
    
})


        // BODY SECTION
 for (let i = 0; i < replyBtn.length; i++) {
    replyBtn[i].addEventListener("click", ()=> {
        vertLine.style.cssText = `
            height: 400px;
            top: 420px;
        `
    });
    replyBtn[0].addEventListener("click", ()=> {
        comment1.style.display = "block"
        vertLine.style.cssText = `
            top: 370px;
    `
    });
    replyBtn[1].addEventListener("click", ()=> {
        comment2.style.display = "block"
        vertLine.style.cssText = `
            top: 350px;
    `
    });
    replyBtn[2].addEventListener("click", ()=> {
        comment3.style.display = "block"
        vertLine.style.cssText = `
            height: 400px;
            top: 220px;
        `
    });
 }

 deleteBtn.addEventListener ("click", ()=> {
     delCover.style.display = "block"
 })

cancelBtn.addEventListener ("click", ()=> {
    delCover.style.display = "none"
    body.style.display = "block"
})
 
let count = 1;
plusBtn[0].addEventListener("click", ()=> {
    count++;
    numberBtn[0].innerHTML = count
})
plusBtn[1].addEventListener("click", ()=> {
    count++;
    numberBtn[1].innerHTML = count
})
plusBtn[2].addEventListener("click", ()=> {
    count++;
    numberBtn[2].innerHTML = count
})
plusBtn[3].addEventListener("click", ()=> {
    count++;
    numberBtn[3].innerHTML = count
})

minusBtn[0].addEventListener("click",()=> {
    count--
    numberBtn[0].innerHTML = count
})
minusBtn[1].addEventListener("click",()=> {
    count--
    numberBtn[1].innerHTML = count
})
minusBtn[2].addEventListener("click",()=> {
    count--
    numberBtn[2].innerHTML = count
})
minusBtn[3].addEventListener("click",()=> {
    count--
    numberBtn[3].innerHTML = count
})

// for (let i = 0; i < plusBtn.length; i++) { 
//     for (let i = 0; i < numberBtn.length; i++) { 
//         minusBtn[i].addEventListener("click",()=> {
//             count++
//             numberBtn[i].innerHTML = count
//         })
//     }
// }

// for (let i = 0; i < minusBtn.length; i++) { 
//     for (let i = 0; i < numberBtn.length; i++) { 
//         minusBtn[i].addEventListener("click",()=> {
//             count--
//             numberBtn[i].innerHTML = count
//         })
//     }
// }
