function password(){
    var op = document.getElementById('op').value;
    var np = document.getElementById('np').value;
    var cp = document.getElementById('cp').value
    if(op && np && cp){
        alert('verification code sent to your email');
    }
    else if ( op=="" || op==np || np==cp)
    {
        alert("enter valid email and password");

    }
    else if(np!==cp)
    {
        alert("password mismatch");
    }
}