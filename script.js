function check(){
const password = document.getElementById("pass").value;
const cpassword = document.getElementById("cpass").value;
console.log(password, cpassword);
if(cpassword == password){
    document.getElementById("cpass").style.borderColor = "rgb(0, 255, 21)";
    document.getElementById("cpass").setCustomValidity('');
}else{
    document.getElementById("cpass").style.borderColor = "red";
    document.getElementById("cpass").setCustomValidity('Passwords do not match');
}
}