// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hideMode = document.querySelector('div');
hideMode.classList.add('hidden');
const likeEmoji = document.getElementsByClassName('like-glyph');


mimicServerCall().then(function(){
  for (let i = 0; i < likeEmoji.length; i++){
    likeEmoji[i].addEventListener('click', likeHandler);
  }
}).catch(function(){
  hideMode.classList.remove('hidden');
  setTimeout(function () {hideMode.classList.add('hidden');
  }, 300);

});

  


function likeHandler(event) {
  const likeEmoji = event.target; 
  const currentHeart = likeEmoji.textContent;

  if (currentHeart === EMPTY_HEART) {
    likeEmoji.classList.add('activated-heart');
    likeEmoji.textContent = FULL_HEART;

  } else {
    likeEmoji.textContent = EMPTY_HEART;
  }
}












//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
   setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
