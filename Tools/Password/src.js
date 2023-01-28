var encodedString;
function encrypt(){
    var baseString=document.getElementById("en").value;
    encodedString=window.btoa(baseString);
    document.getElementById("de").value=encodedString;
}

function decrypt(){
    var baseString=document.getElementById("de").value;
    var decodeString=window.atob(encodedString);
    document.getElementById("de").value=decodeString;
}