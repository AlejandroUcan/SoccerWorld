window.addEventListener('load', function() {
  let productRegisterForm = document.querySelector('#productRegisterForm');

  productRegisterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let errores = [];

    let productEquipo = document.querySelector('#productEquipo');
    let equipoErrorMessage = document.querySelector('#equipoErrorMessage');
    equipoErrorMessage.innerText = '';

    if(productEquipo.value == '') {
      productEquipo.classList.remove('is-valid');
      productEquipo.classList.add('is-invalid');
      equipoErrorMessage.innerText = 'El campo equipo no puede estar vacío';
      errores.push('El campo equipo no puede estar vacío');
    } else if(productEquipo.value.length < 5) {
        productEquipo.classList.remove('is-valid');
        productEquipo.classList.add('is-invalid');
        equipoErrorMessage.innerText = 'El campo equipo debe contener al menos 5 caracteres';
        errores.push('El campo equipo debe contener al menos 5 caracteres');
    } else {
      productEquipo.classList.remove('is-invalid');
      productEquipo.classList.add('is-valid');
    }

    let productLiga = document.querySelector('#productLiga');
    let ligaErrorMessage = document.querySelector('#ligaErrorMessage');
    ligaErrorMessage.innerText = '';

    if(productLiga.value == '') {
      productLiga.classList.remove('is-valid');
      productLiga.classList.add('is-invalid');
      ligaErrorMessage.innerText = 'El campo liga no puede estar vacío';
      errores.push('El campo liga no puede estar vacío');
    } else {
      productLiga.classList.remove('is-invalid');
      productLiga.classList.add('is-valid');
    }

    let productMarca = document.querySelector('#productMarca');
    let marcaErrorMessage = document.querySelector('#marcaErrorMessage');
    marcaErrorMessage.innerText = '';

    if(productMarca.value == '') {
      productMarca.classList.remove('is-valid');
      productMarca.classList.add('is-invalid');
      marcaErrorMessage.innerText = 'El campo marca no puede estar vacío';
      errores.push('El campo marca no puede estar vacío');
    } else {
      productMarca.classList.remove('is-invalid');
      productMarca.classList.add('is-valid');
    }

    let productTipo = document.querySelector('#productTipo');
    let tipoErrorMessage = document.querySelector('#tipoErrorMessage');
    tipoErrorMessage.innerText = '';

    if(productTipo.value == '') {
      productTipo.classList.remove('is-valid');
      productTipo.classList.add('is-invalid');
      tipoErrorMessage.innerText = 'El campo tipo no debe estar vacío'; 
      errores.push('El campo tipo no debe estar vacío');
    } else {
      productTipo.classList.remove('is-invalid');
      productTipo.classList.add('is-valid');
      
    }

    let productTemporada = document.querySelector('#productTemporada');
    let temporadaErrorMessage = document.querySelector('#temporadaErrorMessage');
    temporadaErrorMessage.innerText = '';

    if(productTemporada.value == '') {
      productTemporada.classList.remove('is-valid');
      productTemporada.classList.add('is-invalid');
      temporadaErrorMessage.innerText = 'El campo temporada no puede estar vacío';
      errores.push('El campo temporada no puede estar vacío');
    } else {
      productTemporada.classList.remove('is-invalid');
      productTemporada.classList.add('is-valid');
    }

    let productCategoria = document.querySelector('#productCategoria');
    let categoriaErrorMessage = document.querySelector('#categoriaErrorMessage');
    categoriaErrorMessage.innerText = '';

    if(productCategoria.value == '') {
      productCategoria.classList.remove('is-valid');
      productCategoria.classList.add('is-invalid');
      categoriaErrorMessage.innerText = 'El campo categoria no debe estar vacío'; 
      errores.push('El campo categoria no debe estar vacío');
    } else {
      productCategoria.classList.remove('is-invalid');
      productCategoria.classList.add('is-valid');
      
    }

    let productPrecio = document.querySelector('#productPrecio');
    let precioErrorMessage = document.querySelector('#precioErrorMessage');
    precioErrorMessage.innerText = '';

    if(productPrecio.value == '') {
      productPrecio.classList.remove('is-valid');
      productPrecio.classList.add('is-invalid');
      precioErrorMessage.innerText = 'El campo precio no debe estar vacío'; 
      errores.push('El campo precio no debe estar vacío');
    } else {
      if (parseInt(productPrecio.value, 10)) {
        productPrecio.classList.remove('is-invalid');
        productPrecio.classList.add('is-valid');
      } else {
        precioErrorMessage.innerText = 'El campo precio debe contener valores numéricos'; 
        productPrecio.classList.remove('is-valid');
        productPrecio.classList.add('is-invalid');
      }
    }

    if(!errores > 0) {
      productRegisterForm.submit();
      equipoErrorMessage.innerText = ''; 
      ligaErrorMessage.innerText = ''; 
      marcaErrorMessage.innerText = ''; 
      tipoErrorMessage.innerText = ''; 
      temporadaErrorMessage.innerText = ''; 
      categoriaErrorMessage.innerText = ''; 
      precioErrorMessage.innerText = ''; 
    }
  });
});