let inputName = $("#inputName");

const inputAge = $("#inputAge");
const btnSubmit = $("#btnSubmit");

//expresiones regulares
const validLetters = /^[a-zA-z]*$/;

//cambia a mayusculas al escribir
function mayus(e) {
  e.value = e.value.toUpperCase();
}
btnSubmit.on("click", (e) => {
  e.preventDefault();
  if (    validLetters.test(inputName.val()) 
          && typeof parseInt(inputAge.val()) === "number" 
          && !isNaN(parseInt(inputAge.val()))  ) 
        {
          
          alert(`Muchas gracias ${inputName.val()},tus datos han sido guardados correctamente` );
        } 
  else if (!validLetters.test(inputName.val())) {
    alert(`El nombre ingresado no es válido`);
  } else {
    alert(`No ha ingresado su edad`);
  }
});
