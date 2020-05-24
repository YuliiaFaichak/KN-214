function valid(form){            
    let fail = false;
    let message = "";
    let name = form.name.value;
    let SecondName = form.secondName.value;
    let num = form.num.value;

    let letters = /[A-Za-z]/; 
    let cyfr = /[0-9]/;
    if(letters.test(name) == false)
        message += "Неправильно введене ім'я!\n";
        fail = true;
    if(letters.test(SecondName) == false)
        message += "Неправильно введене прізвище!\n";
        fail = true;
    if(cyfr.test(num) == false){
        message += "Неправильно введений номер\n";
        fail = true;
    }
    if((!checkbox1.checked && !checkbox2.checked) || (checkbox1.checked && checkbox2.checked)){
        message+= "Виберіть стать!\n";
        fail = true;
    }
    if(fail)
        alert(message);
    else return true;
}

let btn = document.getElementById("inputsubmit1");
let field = document.getElementsByClassName("textbox");
let field1 = document.getElementById("num");
let field2 = document.getElementById("secondName");
let field3 = document.getElementById("name");

btn.addEventListener("mouseover", function(){btn.style.background = 'blueviolet' });
btn.addEventListener("mouseout", function(){btn.style.background = '' });
field1.addEventListener("focus", function(){field1.style.border = 'BlueViolet 2px solid'});
field1.addEventListener("mouseout", function(){field1.style.border = 'white 0px solid'});

field2.addEventListener("focus", function(){field2.style.border = 'BlueViolet 2px solid'});
field2.addEventListener("mouseout", function(){field2.style.border = 'white 0px solid'});
field3.addEventListener("focus", function(){field3.style.border = 'BlueViolet 2px solid'});
field3.addEventListener("mouseout", function(){field3.style.border = 'white 0px solid'});

function lightTheme(){
    let body = document.getElementById("body");
    body.style.backgroundImage='url(m1.jpg)';
}

function darkTheme(){
    let body = document.getElementById("body");
    body.style.backgroundImage='url(fon.jpg)';
}

let change = document.getElementById("button");
change.addEventListener("dblclick", lightTheme);
change.addEventListener("click", darkTheme);



