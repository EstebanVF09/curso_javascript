var alertPlaceholder = document.getElementById('liveAlertPlaceholder')

function ShowAlert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

console.group("Cuadrados");

function PerimetroCuadrado(lado){
    return lado * 4;
}
function AreaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

console.group("Triangulos");

function PerimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function AreaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

console.group("Circulos");

function DiametroCirculo(radio){
    return radio * 2;
}
function PerimetroCirculo(radio){
    return DiametroCirculo(radio) * Math.PI;
}
function AreaCirculo(radio){
    return (radio * radio) * Math.PI;
}

console.groupEnd();

function ProcesarAreaCuadrado(){
    const input = document.getElementById("txtLadoCuadrado").value;
    MostrarDatos(`El area del cuadrado es: ${AreaCuadrado(input)}`);
}
function ProcesarPerimetroCuadrado(){
    const input = document.getElementById("txtLadoCuadrado").value;
    MostrarDatos(`El perimetro del cuadrado es: ${PerimetroCuadrado(input)}`);
}
function ProcesarAreaTriangulo(){
    const inputBase = document.getElementById("txtBaseTriangulo").value;
    const inputAltura = document.getElementById("txtAlturaTriangulo").value;
    MostrarDatos(`El area del triangulo es: ${AreaTriangulo(inputBase, inputAltura)}`);
}
function ProcesarPerimetroTriangulo(){
    const inputLado1 = Number(document.getElementById("txtLado1Triangulo").value);
    const inputLado2 = Number(document.getElementById("txtLado2Triangulo").value);
    const inputBase = Number(document.getElementById("txtBaseTriangulo").value);
    MostrarDatos(`El perimetro del triangulo es: ${PerimetroTriangulo(inputLado1, inputLado2, inputBase)}`);
}
function ProcesarDiametroCirculo(){
    const inputRadio = Number(document.getElementById("txtRadio").value);
    MostrarDatos(`El diametro del circulo es: ${DiametroCirculo(inputRadio)}`);
}
function ProcesarPerimetroCirculo(){
    const inputRadio = Number(document.getElementById("txtRadio").value);
    MostrarDatos(`El diametro del circulo es: ${DiametroCirculo(inputRadio)}`);   
}

function ProcesarAreaCirculo(){
    const inputRadio = Number(document.getElementById("txtRadio").value);
    MostrarDatos(`El area del circulo es: ${AreaCirculo(inputRadio)}`);   
}
function MostrarDatos(mensaje){
    ShowAlert(mensaje,'success');
}