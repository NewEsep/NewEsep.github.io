function computeBMI() {
    let height = Number(document.getElementById("height").value);
    let heightunits = document.getElementById("heightunits").value;
    let weight = Number(document.getElementById("weight").value);
    let weightunits = document.getElementById("weightunits").value;


    if (heightunits == "inches") height /= 39.3700787;
    if (weightunits == "lb") weight /= 2.20462;


    let BMI = Math.round(weight / Math.pow(height, 2) * 10000);

    document.getElementById("output").innerText = Math.round(BMI * 100) / 100;

    let output = Math.round(BMI * 100) / 100
    if (output < 18.5)
        document.getElementById("comment").innerText = "Недостаточный";
    else if (output >= 18.5 && output <= 25)
        document.getElementById("comment").innerText = "Нормальный";
    else if (output >= 25 && output <= 30)
        document.getElementById("comment").innerText = "Тучный";
    else if (output > 30)
        document.getElementById("comment").innerText = "Избыточный";
}
