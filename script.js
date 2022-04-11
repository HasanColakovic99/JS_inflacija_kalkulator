function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate');
    inflationRate = parseFloat(inflationRate.value);

    let money = document.querySelector('#money');
    money = parseFloat(money.value);

    let years = document.querySelector('#years');
    years = parseFloat(years.value);


    // FORMULA ZA IZRAČUN INFLACIJE (1 godina)
    let worth = money + (money * (inflationRate / 100));

    // IZRAČUNAVANJE INFLACIJE ZA ODREĐEN BROJ GODINA
    for (let i = 1; i < years; i++) {
        worth += worth * (inflationRate / 100);
    }

    // SADA ĆEMO ISPISATI REČENICU
    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Današnjih ${money}$ vrijedi isto kao ${worth.toFixed(2)}$ za ${years} godina.`;

    let container = document.querySelector('.container');
    container.appendChild(newElement);
}