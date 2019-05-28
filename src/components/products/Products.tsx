import React, { Component } from 'react';
import axios from 'axios';

type Product = {
  product_id: number;
  category_id: number;
  name: string;
  description: string;
  country_of_origin: string;
  weight: number;
  price: number;
};

type ProductsState = {
    products: Product[];
};

class Products extends Component<any, ProductsState> {
  state: ProductsState = {
    products: [],
  };

  async componentDidMount() {
    try {
      const productsResponse = await axios.get('/products');
      const products: Product[] = productsResponse.data;

      this.setState({
        products,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { products } = this.state;
    return (
      <div className="container">
        <h1 className="mb-3">products</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">product_id</th>
              <th scope="col">category_id</th>
              <th scope="col">name</th>
              <th scope="col">description</th>
              <th scope="col">country_of_origin</th>
              <th scope="col">weight</th>
              <th scope="col">price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.product_id}>
                    <td>{product.product_id}</td>
                    <td>{product.category_id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.country_of_origin}</td>
                    <td>{product.weight}</td>
                    <td>{product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Products;
