import React from 'react';
import imagenDefault from '../assets/images/imagen.jfif';

class LastProductInDb extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      productDetails: [],
    }
  }

  apiCall(url) {
    fetch(url) 
      .then(response => response.json())
      .then(data => {
        this.setState({
            productDetails: data.data
        })
        console.log(data.data)
      })
      .catch(error => console.log(error))
  }

  obtenerProduto() {
    this.apiCall('http://localhost:8080/api/products/product/last')
  }

  componentDidMount() {
    this.obtenerProduto()
  }

  render() {
    let nombreProducto;
    let descripcionProducto;
    let imagenProducto;

    if(this.state.productDetails == '') {
      nombreProducto = <p>No se pudo obtener el nombre del producto</p>
      descripcionProducto = <p>No se pudo obtener la descripción del produto</p>;
      imagenProducto = <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={ imagenDefault } alt=" DefaultImage"/>

    } else {
      let productName = this.state.productDetails[0].equipo;
      nombreProducto = <p> { productName } </p>

      let productDescription = this.state.productDetails[0].tipo + ' '  + this.state.productDetails[0].temporada;
      descripcionProducto = <p> { productDescription } </p>
      
      let productImg = 'http://localhost:3000/images/products/' + this.state.productDetails[0].imagen;
      console.log(productImg);
      imagenProducto = <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={ productImg } alt=" DefaultImage"/>
    }

    return (
      <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Último producto en BD</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            {imagenProducto}  
          </div>
          <p> {nombreProducto} </p>
          <p>  {descripcionProducto} </p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalles...</a>
        </div>
      </div>
    </div>
    );
  }
}

export default LastProductInDb;

  