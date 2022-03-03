function bmi() {
  let h = document.getElementById("height").value;
  let w = document.getElementById("weight").value;
  let bmi = w / (((h / 100) * h) / 100);
  let total = bmi.toFixed(2);
  document.getElementById("result").innerHTML = "Your BMI is " + total;

  if (total < 18.5) {
    document.getElementById("result").innerHTML =
      "Your BMI is " + total + " You are Under Weight";
  } else if (total >= 18.5 && total <= 24.9) {
    document.getElementById("result").innerHTML =
      "Your BMI is " + total + " You are Normal";
  } else if (total >= 25 && total <= 29.9) {
    document.getElementById("result").innerHTML =
      "Your BMI is " + total + " You are Over Weight";
  } else {
    document.getElementById("result").innerHTML =
      "Your BMI is " + total + " You are Obese";
  }
}
