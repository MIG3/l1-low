var btn = document.querySelector('button');
btn.onclick = difference(form);

function print(num1, num2)
{
    document.write(num1 + " ");
    document.write(" " + num2 + " ");
    document.write("<br />");
}

function difference(form)
{
    var result, number1 = form.one.value, number2 = form.two.value;
    document.write("Введено:  ");
    print(number1, number2);

    //max = Math.max(number1, number2);
    //min = Math.min(number1, number2);
    if (number1 > number2)
        number1 = number1 - number2;
    else
        number2 = number2 - number1;
    document.write("Результат:  ");
    print(number1, number2);
}