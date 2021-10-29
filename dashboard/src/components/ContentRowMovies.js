import React from 'react';
import SmallCard from './SmallCard';

class ContentRowMovies extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      productNumber: '',
      userNumber: '',
    }
  }

  apiCallProduct(url) {
    fetch(url) 
      .then(response => response.json())
      .then(data => {
        this.setState({
            productNumber: data.total
        })
        console.log(data.data)
      })
      .catch(error => console.log(error))
  }

  
  apiCallUser(url) {
    fetch(url) 
      .then(response => response.json())
      .then(data => {
        this.setState({
            userNumber: data.total
        })
        console.log(data.data)
      })
      .catch(error => console.log(error))
  }

  obtenerNumProducto() {
    this.apiCallProduct('http://localhost:8080/api/products')
  }

  obtenerNumUsuario() {
    this.apiCallUser('http://localhost:8080/api/users')
  }

  componentDidMount() {
    this.obtenerNumProducto()
    this.obtenerNumUsuario()
  }

  render() {
    let cartProps;

    if((this.state.productNumber != '') && (this.state.userNumber != '')) {
      let productsInDB = {
        title: 'Produtos en Base de Datos',
        color: 'primary', 
        cuantity: this.state.productNumber,
        icon: 'fa-clipboard-list'
      }
      let usersInDB = {
        title:'Usuarios en Base de datos' ,
        color:'warning',
        cuantity: this.state.userNumber,
        icon:'fa-user-check'
      }

      cartProps = [productsInDB, usersInDB]; 
    } else {
      cartProps = [];
    }

    return (
      <div className="row justify-content-center">
        {cartProps.map( (movie, i) => {
          return <SmallCard {...movie} key={i}/>    
        })}
      </div>
    );
  }
}

export default ContentRowMovies;

  