
// --------  initialise the country code selector------------------
var input = $(".phone")[0];
var iti = intlTelInput(input, {
  initialCountry: "in",
  preferredCountries: ["in"],
  separateDialCode: true
});

var input2 = $(".phone")[1];
var iti2 = intlTelInput(input2, {
  initialCountry: "in",
  preferredCountries: ["in"],
  separateDialCode: true
});

// ---------------- validation functions --------------------
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
  }catch(err)
  {
    modal('fill the details correctly!!!');
    return false;
  }
 
  return true;
}

function validateFormVisitor() {
  const [name, phone,email] = document.forms["visitor-form"];
  if( !check(name,email,phone) ) return false;
  // adding country code before sending it to the server
  phone.value = $(".iti__selected-dial-code")[1].innerHTML + phone.value;
} 

function validateFormHost() {
  const [name, email, phone,address] = document.forms["host-form"];
  if( !check(name,email,phone)) return false;
    phone.value = $(".iti__selected-dial-code")[0].innerHTML + phone.value;   
} 

//------------------------ custom alert------------------------------------ 
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
  
