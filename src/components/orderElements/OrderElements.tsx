import React, { Component } from 'react';
import axios from 'axios';

type OrderElement = {
  order_element_id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  };

type OrderElementsState = {
    orderElements: OrderElement[];
};

class OrderElements extends Component<any, OrderElementsState> {
  state: OrderElementsState = {
    orderElements: [],
  };

  async componentDidMount() {
    try {
      const orderElementsResponse = await axios.get('/orderElements');
      const orderElements: OrderElement[] = orderElementsResponse.data;

      this.setState({
        orderElements,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { orderElements } = this.state;
    return (
      <div className="container">
        <h1 className="mb-3">OrderElements</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">order_element_id</th>
              <th scope="col">order_id</th>
              <th scope="col">product_id</th>
              <th scope="col">quantity</th>
              <th scope="col">price</th>
            </tr>
          </thead>
          <tbody>
            {orderElements.map((orderElement) => {
              return (
                <tr key={orderElement.order_element_id}>
                    <td>{orderElement.order_element_id}</td>
                    <td>{orderElement.order_id}</td>
                    <td>{orderElement.product_id}</td>
                    <td>{orderElement.quantity}</td>
                    <td>{orderElement.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OrderElements;
