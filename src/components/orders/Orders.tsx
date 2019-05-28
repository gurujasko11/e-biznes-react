
import React, { Component } from 'react';
import axios from 'axios';

type Order = {
  order_id: number;
  address_id: string;
  order_date: string;
  realisation_date: string;
};

type OrdersState = {
  orders: Order[];
};

class Orders extends Component<any, OrdersState> {
  state: OrdersState = {
    orders: [],
  };

  async componentDidMount() {
    try {
      const ordersResponse = await axios.get('/orders');
      const orders: Order[] = ordersResponse.data;

      this.setState({
        orders,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { orders } = this.state;
    return (
      <div className="container">
        <h1 className="mb-3">Orders</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">order_id</th>
              <th scope="col">address_id</th>
              <th scope="col">order_date</th>
              <th scope="col">realisation_date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr key={order.order_id}>
                    <td>{order.order_id}</td>
                    <td>{order.address_id}</td>
                    <td>{order.order_date}</td>
                    <td>{order.realisation_date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Orders;
