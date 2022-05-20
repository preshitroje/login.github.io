function validate(){
    let userName=document.getElementById("textId").value;
    let password=document.getElementById("password").value;

    if(userName=="admin" && password=="pccoe"){
        alert("login succesfully");
        window.open("https://preshitroje.github.io/noteMaker.github.io/");
        return false;
    }
    else{
        alert("login failed")
    }
}