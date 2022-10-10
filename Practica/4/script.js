function fncSumar(){
    var num1 = document.getElementById('txtnum1').value;
    var num2 = document.getElementById('txtnum2').value;
    var suma = parseFloat(num1) + parseFloat(num2);
    var datos = '<strong>Resultado: </strong>' +  suma;

    document.getElementById('divMensaje').innerHTML = datos
}

function fncRestar(){
    var num1 = document.getElementById('txtnum1').value;
    var num2 = document.getElementById('txtnum2').value;
    var resta = parseFloat(num1) - parseFloat(num2);
    var datos = '<strong>Resultado: </strong>' +  resta;

    document.getElementById('divMensaje').innerHTML = datos
}

function fncMultiplicar(){
    var num1 = document.getElementById('txtnum1').value;
    var num2 = document.getElementById('txtnum2').value;
    var multi = parseFloat(num1) * parseFloat(num2);
    var datos = '<strong>Resultado: </strong>' +  multi;

    document.getElementById('divMensaje').innerHTML = datos
}

function fncDivision(){
    var num1 = document.getElementById('txtnum1').value;
    var num2 = document.getElementById('txtnum2').value;
    var division = parseFloat(num1) / parseFloat(num2);
    var datos = '<strong>Resultado: </strong>' +  division;

    document.getElementById('divMensaje').innerHTML = datos
}


function fncNum(){
    var num0 = document.getElementById('btn0').value;
    var num1 = document.getElementById('btn1').value;
    var num2 = document.getElementById('btn2').value;
    var num3 = document.getElementById('btn3').value;
    var num4 = document.getElementById('btn4').value;
    var num5 = document.getElementById('btn5').value;
    var num6 = document.getElementById('btn6').value;
    var num7 = document.getElementById('btn7').value;
    var num8 = document.getElementById('btn8').value;
    var num9 = document.getElementById('btn9').value;
    var nums = num0 + num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9;

    var data = '<strong>Resultado: </strong>' +  nums;
    document.getElementById('divScreen').innerHTML = data
}