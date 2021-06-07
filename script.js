const signBtn = document.getElementById('signbutton');
const logBtn = document.getElementById('logbutton');
const bookBtn = document.getElementById('bookbutton');

signBtn.addEventListener("click", function(){
    console.log("you have done it");
});


window.addEventListener('click', function(event){
    if(event.target === signBtn){
      this.prompt("Enter Your First Name"); 
      this.prompt("Enter Your Last Name");
      this.prompt("Enter Your Email ");
      this.prompt("Enter Your Password ");
    }
});

window.addEventListener('click', function(event){
    if(event.target === logBtn){
        let email  = window.prompt("Enter your email");
        let password = window.prompt("Enter your password");
    }
});

window.addEventListener('click', function(event){
    if(event.target === bookBtn){
        this.alert("Thanks For Booking!")
    }
});