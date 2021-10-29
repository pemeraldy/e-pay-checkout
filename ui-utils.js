"use strict";

let utils = () => {
  function init() {
    //set all event listeners and default states
  }
  function spinCard() {
    const ccvInput = document.getElementById("cvv");
    ccvInput.addEventListener("focus", () => {
      document.querySelector(".card-display").classList.add("cvv-active");
    });
    ccvInput.addEventListener("blur", () => {
      document.querySelector(".card-display").classList.remove("cvv-active");
    });
  }
  function numberOnly(event) {
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
    if (event.charCode >= 48 && event.charCode <= 57) {
      return true;
    }
    event.preventDefault();
  }

  function returnCardType(num) {
    let number = num;
    let re = new RegExp("^4");
    if (number.match(re) != null) return "visa";

    re = new RegExp("^(34|37)");
    if (number.match(re) != null) return "amex";

    re = new RegExp("^5[1-5]");
    if (number.match(re) != null) return "mastercard";

    re = new RegExp("^6011");
    if (number.match(re) != null) return "discover";

    re = new RegExp("^62");
    if (number.match(re) != null) return "unionpay";

    re = new RegExp("^9792");
    if (number.match(re) != null) return "troy";

    re = new RegExp("^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}");
    if (number.match(re) != null) return "dinersclub";

    re = new RegExp("^35(2[89]|[3-8])");
    if (number.match(re) != null) return "jcb";

    return ""; // default type
  }
};

module.exports = utils;
