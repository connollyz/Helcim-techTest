
// hamburgerMenu Functions
// Open/Close Menu Function
const openMenu = function(){
    let openInput = document.getElementById("openDD").checked;
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");
  // If HamburgerMenu is Closed Open Menu else is Hamburger Menu is Open Close
  if(openInput === false){
    // Change hamburgerMenu checkbox to true to trigger CSS styles
    document.getElementById("openDD").checked = true;
    // HamburgerMenu Animation on open Event
    bar1.style.transform ="rotate(-45deg)";
    bar1.style.top ="7px";
    bar2.style.display ="none";
    bar3.style.transform ="rotate(45deg)";
    
  }else{
    // Change hamburgerMenu checkbox to true to disable CSS styles
    document.getElementById("openDD").checked = false;
    // HamburgerMenu Animation on Close Event
    bar1.style.transform ="rotate(180deg)";
    bar1.style.top ="0px";
    bar2.style.display ="block";
    bar3.style.transform ="rotate(180deg)";
  }
}
// On click of HamburgerMenu Call OpenMenu Function
const hamburgerMenu = document.getElementById('hamburgerMenu').addEventListener('click', function(){
  openMenu()
});
// On click of closeBar Call OpenMenu Function
const closeBar = document.getElementById('closeBar').addEventListener('click', function(){
  openMenu()
});

// hamburgerMenuEnds


// Layout of PostBox
const postLayout = function(){
  // Get postBox checkbox and check status checked?
  let postBoxLayout = document.getElementById("postBoxLayout").checked;
  // If true trigger css styles else disable css styles to format post box layout
  if(postBoxLayout === false){ 
    document.getElementById("postBoxLayout").checked = true;
  }else{
    document.getElementById("postBoxLayout").checked = false;
  }
}

// On click of text input trigger postLayout function to run
const postTextLayout = document.getElementById('postText').addEventListener('click', function(){
  postLayout()
});

// In the event the user wants to cancel new post, on click of news feed set postBox checkbox to false to disable css styles to format post box layout to revert to original layout
const exitLayout = document.getElementById('news').addEventListener('click', function(){
  document.getElementById("postBoxLayout").checked = false;
});
//End of Layout PostBox

// clear input on submit of post
const clearInput = function () {
  // Get userInput value and set value to empty string
  document.getElementById('userInput').value = "";
  //Get user Preview Img and set src to empty string
  document.getElementById('previewDisplay').src = "";
  //Get user img Input and set value to empty string
  document.getElementById('newImg').value = "";
}
// End clearInput

// Preview Img Display
const display = function(event) {
    // Create new file reader to read the contends of the Img file
    const newFile = new FileReader();
    // When new file is loaded run
    newFile.onload = function(){
      // Get element where the Img will be displayed 
      const previewDisplay = document.getElementById('previewDisplay');
      // Get element to have to option to remove file 
      const removeImgBtn = document.getElementById('close');
      // Show preview element
      previewDisplay.style.display="block"
       // Show option to remove file
      removeImgBtn.style.display="block"
      // Set preview element src to the new file result (imgPath)
      previewDisplay.src = newFile.result;
    }
    // newFile read as data URL
    newFile.readAsDataURL(event.target.files[0]);
}  //End of Preview Img Display   
  
// Remove Preview Img on click of X
const removeImg = document.getElementById('close').addEventListener("click", function(){
  // Get element where the Img will be displayed 
  const previewDisplay = document.getElementById('previewDisplay');
  // Get element to have to option to remove file 
  const removeImgBtn = document.getElementById('close');
  // Set preview element src to the new file result (imgPath)
  previewDisplay.src =" ";
  //Hide option to remove file
  removeImgBtn.style.display="none";
  // HIde preview element
  previewDisplay.style.display="none";
  //Get user img Input and set value to empty string    
  document.getElementById('newImg').value = "";
});// Remove Preview Img Ends

//  Close ErrMessage
// Get close errMessageBtn
const gotIt = document.getElementById('gotIt');
// On click of close errMessageBtn run
gotIt.addEventListener('click', function(){
  // Get errMessage element
  const errMessage = document.getElementById('errMessage');
  // Hide errMessage element
  errMessage.style.display = "none";
});//End of close ErrMessage

// successMessage
const successMessage = function(){
  //Get successMessage element
  const successMessage = document.getElementById('success');
  // show successMessage element
  successMessage.style.display = "flex";
  // after 1.5s Hide successMessage
  setTimeout(function(){
  // Hide successMessage
  successMessage.style.display = "none";
  }, 1500);
}// end of successMessage

// create new post
const post = document.getElementById('post').addEventListener('click', function(event){
  //Prevent refresh on submit
  event.preventDefault();
  
 //Set userAccountInfo
  const userName = "John Doe"//Name
  const userProfileImg="assets/tofan-teodor-ProfilePhoto.jpg"//ProfilePhoto

  //Get Img value & Preview Src
  const newImg = document.getElementById('newImg');//Img Input value
  const imgSrc = document.getElementById("previewDisplay").src//Img Preview Element

  //Get User TextInput Value
  let userTextInput = document.getElementById('userInput').value;

  //Get Date
  const fullDate = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "september", "October", "November", "December"]
  const y = fullDate.getFullYear();
  const m = fullDate.getMonth();
  const d = fullDate.getDate();
  
 //Create NewCard Elements
  const newCard  = document.createElement('div');//newCard div
  const author  =   document.createElement('div');//newCard userInfo
  const cardImg  =   document.createElement('div');//newCard Img div
  const newDate = document.createElement('p');// newCard Date
  const newTextPost = document.createElement('p');// newCard Text p
  
  //Add class names to new elements
  newCard.className+='card';
  author.className+='author';
  cardImg.className+='postImg';
  newDate.className+='date';
 
  // Add content to the new card elements
  author.innerHTML = `<div class="authorProfileImg">
                          <img src=${userProfileImg}>
                      </div>
                      <h2>${userName}</h2>
                      `;
  cardImg.innerHTML = `<img src=${imgSrc}>`;
  newDate.innerHTML = `<p>${months[m]}-${d}-${y}</p>`;
  newTextPost.innerHTML = `<p>${userTextInput}</p>`;
  
  //Append child elements to newCard
  newCard.appendChild(author);//author of post
  newCard.appendChild(cardImg);//Img
  newCard.appendChild(newDate); //Date
  newCard.appendChild(newTextPost);//Text

  //err handling
  // If user Inputs are both empty strings though errMessage and alert user of err (cant post if there is no content).
  if(userTextInput === "" && newImg.value === ""){
    //Get errMessage
   const errMessage = document.getElementById('errMessage');
   //Show errMessage
    errMessage.style.display = "flex";
    //Get successMessage
     const successMessage = document.getElementById('success');
    //Hide successMessage
    successMessage.style.display = "none";
    // Cancel append post
    document.getElementById('news').removeChild(newCard);
  }else if( newImg.value  === ""){
    // If no img in post remove Img element from new Card post
      newCard.removeChild(cardImg);//Img Element
  } //End of err handling


  // Get option to remove display img
  const removeImgBtn = document.getElementById('close');
  // Hide Remove img option
  removeImgBtn.style.display='none'

  
  //Append New Card to Newsfeed
  document.getElementById('news').appendChild(newCard);
  
  //Clear Input and alert user of successful post
  clearInput();
  postLayout();
  successMessage(); 
});//End of Creat new post

