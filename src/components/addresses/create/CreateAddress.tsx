import React, { Component } from 'react';
import axios from 'axios';

type AddressPostData = {
    user_id: number;
    country: string;
    city: string;
    street: string;
    home_number: number;
    apartament_number: number;
    postal_code: string;
};

type CreateAddressState = {
    user_id: string;
    country: string;
    city: string;
    street: string;
    home_number: string;
    apartament_number: string;
    postal_code: string;
};

class CreateAddress extends Component<any, CreateAddressState> {
  state: CreateAddressState = {
    user_id: '',
    country: '',
    city: '',
    street: '',
    home_number: '',
    apartament_number: '',
    postal_code: '',
  };

  render() {
    const {
        user_id,
        country,
        city,
        street,
        home_number,
        apartament_number,
        postal_code,
    } = this.state;

    return (
      <div className="container">
        <h1 className="mb-3">Create address</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              if (user_id !== null && country  !== null && city !== null &&  street !== null && home_number !== null && postal_code != null) {
                const data: AddressPostData = {
                    user_id: parseInt(user_id),
                    country,
                    city,
                    street,
                    home_number: parseInt(home_number),
                    apartament_number: parseInt(apartament_number),
                    postal_code,
                };

                await axios.post(
                  '/address',
                  data,
                );

                this.setState({
                    user_id: '',
                    country: '',
                    city: '',
                    street: '',
                    home_number: '',
                    apartament_number: '',
                    postal_code: '',
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
              value={user_id}
              onChange={(e) => {
                this.setState({ user_id: e.target.value });
              }}
              className="form-control"
              placeholder="user_id"
            />
            <input
              type="text"
              value={country}
              onChange={(e) => {
                this.setState({ country: e.target.value });
              }}
              className="form-control"
              placeholder="country"
            />
            <input
              type="text"
              value={city}
              onChange={(e) => {
                this.setState({ city: e.target.value });
              }}
              className="form-control"
              placeholder="city"
            />
            <input
              type="text"
              value={street}
              onChange={(e) => {
                this.setState({ street: e.target.value });
              }}
              className="form-control"
              placeholder="street"
            />
            <input
              type="text"
              value={home_number}
              onChange={(e) => {
                this.setState({ home_number : e.target.value });
              }}
              className="form-control"
              placeholder="home_number"
            />
            <input
              type="text"
              value={apartament_number}
              onChange={(e) => {
                this.setState({ apartament_number : e.target.value });
              }}
              className="form-control"
              placeholder="apartament_number"
            />
            <input
              type="text"
              value={postal_code}
              onChange={(e) => {
                this.setState({ postal_code : e.target.value });
              }}
              className="form-control"
              placeholder="postal_code"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Create address
            </button>
        </form>
      </div>
    );
  }
}

export default CreateAddress;
