var btn = document.querySelector('button');
btn.onclick = difference(form);

function difference(form)
{
    var result, number1 = form.one.value, number2 = form.two.value;
    document.write("Введено:  ");
    document.write(number1 + " ");
    document.write(" " + number2 + " ");
    document.write("<br />");

    //max = Math.max(number1, number2);
    //min = Math.min(number1, number2);
    if (number1 > number2)
        number1 = number1 - number2;
    else
        number2 = number2 - number1;
    document.write("Результат:  ");
    document.write(number1 + " ");
    document.write(number2 + " ");
}

//difference(2, 3);