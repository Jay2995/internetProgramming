'use strict'

document.getElementById("changeThis1").textContent = 1;
document.getElementById("changeThis2").textContent = 2;
document.getElementById("changeThis3").textContent = 3;
document.getElementById("changeThis4").textContent = 4;


//container 

document.querySelectorAll(".rows").forEach(element => 
   element.style.backgroundColor = "rgb(8,100,100)")


// console.log(document.querySelectorAll(".rows"));
const feedbackCommentByUser = document.querySelector('.comment')
// console.log(feedbackCommentByUser);
const sendButton = document.querySelector('input[type=submit]')
const resetBtn = document.querySelector('input[type=reset]')
const feedback = document.getElementById('feedbackReturn')

// console.log(feedback);



sendButton.addEventListener('click', function(e){
   e.preventDefault()
   console.log();
   if(!feedbackCommentByUser.value)alert('No comment')
      feedback.insertAdjacentHTML('beforeend', feedbackCommentByUser.value)
      feedbackCommentByUser.value =''

})
   resetBtn.addEventListener('click', function(e){
   e.preventDefault()
   feedbackCommentByUser.value = feedback.textContent = ''
   
   })
// console.log(feedbackCommentByUser);

