const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario');//arreglo de todos los inputs por id (#) formulario

var nm1 = null;
var ap1 = null;
var em1 = null;
var te1 = null;

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
var campos = {
	nombre: false,
	apellido: false,
	email: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		
		case "nombre":
            validarCampo(expresiones.nombre, e.target, e.target.name);
            nm1 = e.target.value;
            
        break;
        case "apellido":
            validarCampo(expresiones.nombre, e.target, e.target.name);
            ap1 = e.target.value;
		break;
		case "email":
            validarCampo(expresiones.email, e.target, e.target.name);
            em1 = e.target.value;
		break;
		case "telefono":
            validarCampo(expresiones.telefono, e.target, e.target.name);
            te1 = e.target.value;
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

let contador = 0;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nm1!==null){

    
    if(campos.nombre, campos.apellido, campos.email, campos.telefono){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        //console.log(`story ${nm1} story`);

        $('#datos').append(`    <tr>
        <td>${contador + 1}</td>
        <td>${nm1}</td>
        <td>${ap1}</td>
        <td>${em1}</td>
        <td>${te1}</td>
    </tr>`);
contador++;

        nm1=null;

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) =>{
            icono.classList.remove('formulario__grupo-correcto')
        })

         
    }else{
        alert('Los datos no son correctos reintente');
    }
    }else{
        alert('Los datos no son correctos reintente');
    }
})


