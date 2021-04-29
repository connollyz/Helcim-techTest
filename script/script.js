
// hamburgerMenu
const openMenu = function(){
    let openInput = document.getElementById("openDD").checked;
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");
  
  if(openInput === false){
    
    document.getElementById("openDD").checked = true;
    
    bar1.style.transform ="rotate(-45deg)";
    bar1.style.top ="7px";
    bar2.style.display ="none";
    bar3.style.transform ="rotate(45deg)";
    
  }else{

    document.getElementById("openDD").checked = false;
    bar1.style.transform ="rotate(180deg)";
    bar1.style.top ="0px";
    bar2.style.display ="block";
    bar3.style.transform ="rotate(180deg)";

  }

}

const hamburgerMenu = document.getElementById('hamburgerMenu').addEventListener('click', function(){
  
  openMenu()


});

const closeBar = document.getElementById('closeBar').addEventListener('click', function(){
  openMenu()
});







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
      const removeImgBtn = document.getElementById('close');
      previewDisplay.style.display="block"
      removeImgBtn.style.display="block"
      previewDisplay.src = newFile.result;
    }
    newFile.readAsDataURL(event.target.files[0]);
  }     
  

  const removeImg = document.getElementById('close').addEventListener("click", function(){
  
          const previewDisplay = document.getElementById('previewDisplay');
          const removeImgBtn = document.getElementById('close');

                previewDisplay.src =" ";
                removeImgBtn.style.display="none";
                previewDisplay.style.display="none";
              
                const newImg = document.getElementById('newImg');
                newImg.value = "";
      })



const postLayout = function(){
  let postBoxLayout = document.getElementById("postBoxLayout").checked;
  if(postBoxLayout === false){ 
    document.getElementById("postBoxLayout").checked = true;
  }else{
    document.getElementById("postBoxLayout").checked = false;
  }

}


const postTextLayout = document.getElementById('postText').addEventListener('click', function(){
  postLayout()
});

const exitLayout = document.getElementById('news').addEventListener('click', function(){
  document.getElementById("postBoxLayout").checked = false;
});










// create new post
const post = document.getElementById('post').addEventListener('click', function(event){
  // Prevent refresh on submit
  event.preventDefault();
  
 //userAccountInfo
  const userName = "John Doe"
  const userProfileImg="../assets/tofan-teodor-ProfilePhoto.jpg"
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

    // close err


//  err handling
  if(userTextInput === "" && newImg.value === ""){
    //alert user of err (cant post if there is no content).
    alert("Please add message and or Image to post.")
  

    // cancel post
    document.getElementById('news').removeChild(newCard);
  }else if( newImg.value  === ""){
      newCard.removeChild(cardImg);//Img
  }
     //Append New Card to Newsfeed
    document.getElementById('news').appendChild(newCard);
  

  const removeImgBtn = document.getElementById('close');
  removeImgBtn.style.display='none'

 
 

  //Clear Input
  clearInput();
  postLayout();
    
  });

 

