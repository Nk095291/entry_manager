
var input = document.querySelector("#phone1");
var iti = intlTelInput(input, {
  initialCountry: "in",
  preferredCountries: ["in"],
  separateDialCode: true
});
let data = iti.getSelectedCountryData();
input.value = data.dialCode;
input.addEventListener("countrychange", function () {
  let data = iti.getSelectedCountryData();
  input.value = data.dialCode;
});


var input2 = document.querySelector("#phone2");
var iti2 = intlTelInput(input2, {
  initialCountry: "in",
  preferredCountries: ["in"],
  separateDialCode: true
});
let data2 = iti2.getSelectedCountryData();
input2.value = data2.dialCode;
input2.addEventListener("countrychange", function () {
  let data2 = iti2.getSelectedCountryData();
  input2.value = data2.dialCode;
});


function check(name,email,phone)
{
  try{
    if (!name.value || !email.value || !phone.value) {
      modal("none of the below field can be empty !!!, please fill them");
      return false;
    }
    if (!validator.isAlpha(name.value.replace(/ +/g, ""))) {
      modal("invalid name please re-enter name");
      return false;
    }
    if (!validator.isEmail(email.value)) {
      modal("invalid email please re-enter email");
      return false;
    }
    if (!validator.isMobilePhone(phone.value) ) {
      modal("invalid phone no , please re-enter phone no");
      return false;
    }
    // console.log(phone.value.length)

    if(phone.value.length<12)
    {
      modal('please correct phone no (did you add country code?)');
      return false;
    }
  }catch(err)
  {
    modal('fill the details correctly!!!');
    console.log(err);
    return false;
  }
 
  return true;
}


function validateFormVisitor() {
  const [name, phone,email] = document.forms["visitor-form"];
  return check(name,email,phone);
} 

function validateFormHost() {
  const [name, email, phone,address] = document.forms["host-form"];
  // console.log(address.value);
  if( !address.value )
  {
    modal('please enter address');
    return false;
  }
   return check(name,email,phone);
   
} 


var modal = function(html)
{

  var modal_table   = $('<div />')    .addClass('modal-table'),
      modal_cell    = $('<div />')    .addClass('modal-cell')
                                      .appendTo(modal_table),
      modal_bar     = $('<div />')    .addClass('modal-bar')
                                      .appendTo(modal_cell),
      modal_content = $('<div />')    .addClass('modal-content')
                                      .html(html)
                                      .appendTo(modal_bar),
      button        = $('<button />') .appendTo(modal_content)
                                      .text("Okay")
                                      .addClass('alertButton')
                                      .click(function(){
                                        modal_table.remove();
                                      });

  $('body').append(modal_table);

}
  
