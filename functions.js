function fun_innerHtml(){
    document.getElementById('text1').innerHTML="Function call Success!"
}
 
function fun_documentWrite(){
    document.write("Habibi clear all")
}

function fun_windowAlert(){
    window.alert("You just created an alert!")
}

function fun_consoleLog(){
    var e = document.getElementById('text1').textContent;
    console.log(e)
}

function fun_sumOfVariables(){
    var sum = 10+20;

    document.getElementById('variable_declaration').innerHTML="Sum = " +sum +".";
}

