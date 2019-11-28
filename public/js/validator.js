// var input = document.querySelector("#phone");
// var iti = intlTelInput(input, {
//   initialCountry: "in",
//   preferredCountries: ["in"],
//   separateDialCode: true
// });
// updateCountryCode();
// input.addEventListener("countrychange", function() {
//   updateCountryCode();
// });
// function updateCountryCode() {
//   let data = iti.getSelectedCountryData();
//   input.value = data.dialCode;
// }

function validateForm() {
  const [name, email, phone] = document.forms["entryForm"];
  if (!name.value || !email.value || !phone.value) {
    alert("none of the below field can be empty !!!, please fill them");
    return false;
  }
  if (!validator.isAlpha(name.value.replace(/ +/g, ""))) {
    alert("invalid name please re-enter name");
    return false;
  }
  if (!validator.isEmail(email.value)) {
    alert("invalid email please re-enter email");
    return false;
  }
  if (!validator.isMobilePhone(phone.value)) {
    alert("invalid phone no , please re-enter phone no");
    return false;
  }
  return true;
}