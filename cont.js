var submit = document.querySelector("#celeb-1")
var final = document.querySelector("#celeb-2")
var login = document.querySelector("#login")
var signup = document.querySelector("#signup")




login.addEventListener("click",()=>{
    submit.style.opacity="1";
    alert("You have Looged-in Successfully ✅")
})



signup.addEventListener("click",()=>{
    final.style.opacity="1";
    final.style.repeat = "1"
    alert("You Signed-up Successfully ✅")
   
})



gsap.from("#form-cont",{
    opacity: 0,
    duration: 1,
    // delay: 0.5,
    y: -50,
    // x:100
})


gsap.from("#form-left",{
    opacity: 0,
    duration: 0.6,
    // delay:0.3,
   x: -200,
//    delay:0.3,
   
})

gsap.from("#form-right",{
    opacity: 0,
    duration: 0.6,
   x: 200,
    //    delay:0.3,

   
})



gsap.from(".ball-1",{
   
    duration: 0.9,
    
   x: 100,
       
})

gsap.from(".ball-2",{
 
    duration: 0.9,
  
   x: 100,
    //    delay:0.3,
})


gsap.from("#login",{
 
    duration: 1,
  
   x: 100,
    //    delay:0.3,
})


gsap.from("#signup",{
 
    duration: 1,
  
   x: -120,
    //    delay:0.3,
})
gsap.from("#logo",{
 
    duration: 0.4,
  
   y: -120,
    //    delay:0.3,
})




