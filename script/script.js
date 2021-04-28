// clear input on submit
const clearInput = function () {
  document.getElementById('userInput').value = "";
   //imgInput
  const previewDisplay = document.getElementById('previewDisplay');
      previewDisplay.src = "";
      // imgInput
       const newImg = document.getElementById('newImg');
                newImg.value = "";
}

   const display = function(event) {
    const newFile = new FileReader();
    newFile.onload = function(){
      const previewDisplay = document.getElementById('previewDisplay');
      previewDisplay.src = newFile.result;
    }
    newFile.readAsDataURL(event.target.files[0]);
  }     
  

  const removeImg = document.getElementById('close').addEventListener("click", function(){
          const previewDisplay = document.getElementById('previewDisplay');
                previewDisplay.src =" ";

                const newImg = document.getElementById('newImg');
                newImg.value = "";
      })





// create new post
const post = document.getElementById('post').addEventListener('click', function(event){
  // Prevent refresh on submit
  event.preventDefault();
  
 //userAccountInfo
  const userName = "John Doe"
  const userProfileImg="assets/userIcon.svg"
  //imgInput
  const newImg = document.getElementById('newImg');
  const imgSrc = document.getElementById("previewDisplay").src
  //textInput
  let userTextInput = document.getElementById('userInput').value;
  //Date
   const fullDate = new Date();
  const months = ["January", "Febuary", "March", "April", "May", "June", "July", "Aug", "september", "October", "November", "December"]
  const y = fullDate.getFullYear();
  const m = fullDate.getMonth();
  const d = fullDate.getDate();
  
  
 //Create NewCard Elements
  const newCard  = document.createElement('div');//newCard div
  const author  =   document.createElement('div');//newCard userInfo
  const cardImg  =   document.createElement('div');//newCard Img div
  const newDate = document.createElement('p');// newCard Date
  const newTextPost = document.createElement('p');// newCard Text p
  
  //add Class names to New Elements
  newCard.className+='card';
  author.className+='author';
  cardImg.className+='postImg';
  newDate.className+='date';
 
  // add content in to the html
  author.innerHTML = `<div class="authorProfileImg">
                          <img src=${userProfileImg}>
                      </div>
                      <h2>${userName}</h2>
                      `;
  cardImg.innerHTML = `<img src=${imgSrc}>`;
  newDate.innerHTML = `<p>${months[m]}-${d}-${y}</p>`;
  newTextPost.innerHTML = `<p>${userTextInput}</p>`;
  


  
  
  //Append Child Element to newCard

  newCard.appendChild(author);//author of post
  newCard.appendChild(cardImg);//Img
  newCard.appendChild(newDate); //Date
  newCard.appendChild(newTextPost);//Text

  //Append New Card to Newsfeed
  document.getElementById('news').appendChild(newCard);

//  err handling
  if(userTextInput === "" && newImg.value === ""){
    //alert user of err (cant post if there is no content).
    alert("err");
    // cancel post
    document.getElementById('news').removeChild(newCard);
  }else if ( newImg.value  === ""){
 newCard.removeChild(cardImg);//Img
  }
  //Clear Input
  clearInput();

    
    });