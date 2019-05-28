import React, { Component } from 'react';
import axios from 'axios';

type OrderPostData = {
    address_id: number;
    order_date: string;
    realisation_date: string;
};

type CreateOrderState = {
    address_id: string;
    order_date: string;
    realisation_date: string;
};

class CreateOrder extends Component<any, CreateOrderState> {
  state: CreateOrderState = {
    address_id: '',
    order_date: '',
    realisation_date: '',
  };

  render() {
    const {
        address_id,
        order_date,
        realisation_date,
    } = this.state;

    return (
      <div className="container">
        <h1 className="mb-3">Create order</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              if (address_id !== null && order_date !== null && realisation_date !== null) {
                const data: OrderPostData = {
                    address_id: parseInt(address_id),
                    order_date,
                    realisation_date,
                };

                await axios.post(
                  '/order',
                  data,
                );

                this.setState({
                    address_id: '',
                    order_date: '',
                    realisation_date: '',
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
              value={address_id}
              onChange={(e) => {
                this.setState({ address_id: e.target.value });
              }}
              className="form-control"
              placeholder="address_id"
            />
            <input
              type="text"
              value={order_date}
              onChange={(e) => {
                this.setState({ order_date: e.target.value });
              }}
              className="form-control"
              placeholder="order_date"
            />
            <input
              type="text"
              value={realisation_date}
              onChange={(e) => {
                this.setState({ realisation_date: e.target.value });
              }}
              className="form-control"
              placeholder="realisation_date"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Create order
            </button>
        </form>
      </div>
    );
  }
}

export default CreateOrder;
