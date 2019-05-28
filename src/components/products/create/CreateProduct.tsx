import React, { Component } from 'react';
import axios from 'axios';

type ProductPostData = {
    category_id: number;
    name: string;
    description: string;
    country_of_origin: string;
    weight: number;
    price: number;
};

type CreateProductState = {
    category_id: string;
    name: string;
    description: string;
    country_of_origin: string;
    weight: string;
    price: string;
};

class CreateProduct extends Component<any, CreateProductState> {
  state: CreateProductState = {
    category_id: '',
    name: '',
    description: '',
    country_of_origin: '',
    weight: '',
    price: '',
  };

  render() {
    const {
        category_id,
        name,
        description,
        country_of_origin,
        weight,
        price,
    } = this.state;

    return (
      <div className="container">
        <h1 className="mb-3">Create product</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              if (category_id !== null && name  !== null && description !== null &&  country_of_origin !== null && weight !== null && price != null) {
                const data: ProductPostData = {
                    category_id: parseInt(category_id),
                    name,
                    description,
                    country_of_origin,
                    weight: parseFloat(weight),
                    price: parseInt(price),
                };

                await axios.post(
                  '/product',
                  data,
                );

                this.setState({
                    category_id: '',
                    name: '',
                    description: '',
                    country_of_origin: '',
                    weight: '',
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
              value={category_id}
              onChange={(e) => {
                this.setState({ category_id: e.target.value });
              }}
              className="form-control"
              placeholder="category_id"
            />
            <input
              type="text"
              value={name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
              className="form-control"
              placeholder="name"
            />
            <input
              type="text"
              value={description}
              onChange={(e) => {
                this.setState({ description: e.target.value });
              }}
              className="form-control"
              placeholder="description"
            />
            <input
              type="text"
              value={country_of_origin}
              onChange={(e) => {
                this.setState({ country_of_origin: e.target.value });
              }}
              className="form-control"
              placeholder="country_of_origin"
            />
            <input
              type="text"
              value={weight}
              onChange={(e) => {
                this.setState({ weight : e.target.value });
              }}
              className="form-control"
              placeholder="weight"
            />
            <input
              type="text"
              value={price}
              onChange={(e) => {
                this.setState({ price : e.target.value });
              }}
              className="form-control"
              placeholder="price"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Create product
            </button>
        </form>
      </div>
    );
  }
}

export default CreateProduct;
