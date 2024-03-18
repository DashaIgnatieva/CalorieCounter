

const calculate = () => {
    /*
    Получаем значения полей ввода, и далее по формуле
    получаем значение калорийности продукта
    */
    const calories100grams = document.getElementById("calories100grams").value; // Получаем данные из поля ввода
    const productWeight = document.getElementById("productWeight").value;
    const outputNode = document.getElementById("result");

    const result = productWeight * calories100grams / 100;

    outputNode.innerText = result;
};