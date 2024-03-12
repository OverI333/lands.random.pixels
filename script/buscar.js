// function buscarURL() {
//     url = "https://play.pixels.xyz/pixels/share/"
//     var codigo = document.getElementById("urlInput").value;
//     if (codigo.trim() === "") {
//         alert("Ingresa una ID");
//         document.getElementById("urlInput").value = "";
//     }else if (!isNaN(codigo)){
//         document.getElementById("iframeResultado").src = url+codigo;
//         document.getElementById("urlInput").value = "";
//         document.getElementById("code").textContent = codigo;
//     } else{
//         alert("Ingresa una ID");
//         document.getElementById("urlInput").value = "";
//     }
    
    
// }
function irAPaginaPrincipal() {
    window.location.href = "main.html";
}

// function copiarContenido(overlayId) {
//     var overlay = document.getElementById(overlayId);
//     var texto = overlay.innerText;

//     var textareaTemp = document.createElement('textarea');
//     textareaTemp.value = texto;

//     document.body.appendChild(textareaTemp);
//     textareaTemp.select();
//     document.execCommand('copy');
//     document.body.removeChild(textareaTemp);
   
// }
