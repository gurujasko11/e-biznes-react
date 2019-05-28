import React, { Component } from 'react';
import axios from 'axios';

type OrderElementPostData = {
    order_id: number;
    product_id: number;
    quantity: number;
    price: number;
};

type CreateOrderElementState = {
    order_id: string;
    product_id: string;
    quantity: string;
    price: string;
};

class CreateOrderElement extends Component<any, CreateOrderElementState> {
  state: CreateOrderElementState = {
    order_id: '',
    product_id: '',
    quantity: '',
    price: '',
  };

  render() {
    const {
        order_id,
        product_id,
        quantity,
        price,
    } = this.state;

    return (
      <div className="container">
        <h1 className="mb-3">Create order element</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              if (order_id !== null && product_id !== null && quantity !== null && price !== null) {
                const data: OrderElementPostData = {
                    order_id: parseInt(order_id),
                    product_id: parseInt(product_id),
                    quantity: parseInt(quantity),
                    price: parseInt(price),
                };

                await axios.post(
                  '/order_element',
                  data,
                );

                this.setState({
                    order_id: '',
                    product_id: '',
                    quantity: '',
                    price: '',
                });
              }
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <div className="form-group">
            <input
              type="text"
              value={order_id}
              onChange={(e) => {
                this.setState({ order_id: e.target.value });
              }}
              className="form-control"
              placeholder="order_id"
            />
            <input
              type="text"
              value={product_id}
              onChange={(e) => {
                this.setState({ product_id: e.target.value });
              }}
              className="form-control"
              placeholder="product_id"
            />
            <input
              type="text"
              value={quantity}
              onChange={(e) => {
                this.setState({ quantity: e.target.value });
              }}
              className="form-control"
              placeholder="quantity"
            />
            <input
              type="text"
              value={price}
              onChange={(e) => {
                this.setState({ price: e.target.value });
              }}
              className="form-control"
              placeholder="price"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Create order element
            </button>
        </form>
      </div>
    );
  }
}

export default CreateOrderElement;
