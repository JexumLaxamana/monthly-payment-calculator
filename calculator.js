function calculate(){
  if (document.getElementById("0.03").selected) {
    rate = 0.03;
  } else if (document.getElementById("0.04").selected) {
    rate = 0.04;
  } else {
    rate = 0.05;
  }

  if (document.getElementById("10year").checked) {
    term = 10;
  } else if (document.getElementById("15year").checked) {
    term = 15;
  } else {
    term = 30;
  }

  loan = parseFloat(document.getElementById("loan").value);

  monthlypayment = (loan*rate/12)/(1-Math.pow(1+rate/12,-12*term));
  
  document.getElementById("mp").innerHTML = monthlypayment.toString();
}