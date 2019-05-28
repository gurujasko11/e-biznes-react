import React, { Component } from 'react';
import axios from 'axios';

type Address = {
  address_id: number;
  user_id: string;
  country: string;
  city: string;
  street: string;
  home_number: number;
  apartament_number: number;
  postal_code: string;
};

type AddressesState = {
  addresses: Address[];
};

class Addresses extends Component<any, AddressesState> {
  state: AddressesState = {
    addresses: [],
  };

  async componentDidMount() {
    try {
      const addressesResponse = await axios.get('/addresses');
      const addresses: Address[] = addressesResponse.data;

      this.setState({
        addresses,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { addresses } = this.state;
    return (
      <div className="container">
        <h1 className="mb-3">Addresses</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">address_id</th>
              <th scope="col">user_id</th>
              <th scope="col">country</th>
              <th scope="col">city</th>
              <th scope="col">street</th>
              <th scope="col">home_number</th>
              <th scope="col">apartament_number</th>
              <th scope="col">postal_code</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((address) => {
              return (
                <tr key={address.address_id}>
                <td>{address.address_id}</td>
                <td>{address.user_id}</td>
                <td>{address.country}</td>
                <td>{address.city}</td>
                <td>{address.street}</td>
                <td>{address.home_number}</td>
                <td>{address.apartament_number}</td>
                <td>{address.postal_code}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Addresses;
