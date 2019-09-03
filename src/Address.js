import React from 'react';

class Address extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data:null,
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch("http://localhost:9000/addresses",{
                mode: 'cors',
                method:'GET',
                headers: {
                    'Access-Control-Allow-Origin':'*'
                },
            }
        )
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result)
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    renderData() {
        console.log(this.state.data)
        return this.state.data.map((row) => {
            return (
                <tr key={row.address_id}>
                    <td> {row.address_id}</td>
                    <td> {row.user_id}</td>
                    <td> {row.country}</td>
                    <td> {row.city}</td>
                    <td> {row.street}</td>
                    <td> {row.home_number}</td>
                    <td> {row.apartament_number}</td>
                    <td> {row.postal_code}</td>
                </tr>
            );
        })
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <React.Fragment>
                    <div style={{padding:"15px"}}>
                        <table className="kursy">
                            <thead>
                            <tr>
                                <th>address_id</th>
                                <th>user_id</th>
                                <th>country</th>
                                <th>city</th>
                                <th>street</th>
                                <th>home_number</th>
                                <th>apartament_number</th>
                                <th>postal_code</th>
                            </tr>
                            </thead>

                            <tbody>
                            {this.state.isLoaded && this.renderData()}
                            </tbody>
                        </table>
                    </div>

                </React.Fragment>
            )
        } else {
            return (
                <div> loading ... </div>
            )
        }

    }
}

export default Address;