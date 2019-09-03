import React from 'react';

class Product extends React.Component {

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
        fetch("http://localhost:9000/products",{
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
                <tr key={row.product_id}>
                    <td> {row.product_id}</td>
                    <td> {row.category_id}</td>
                    <td> {row.name}</td>
                    <td> {row.description}</td>
                    <td> {row.country_of_origin}</td>
                    <td> {row.weight}</td>
                    <td> {row.price}</td>
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
                                <th>product_id</th>
                                <th>category_id</th>
                                <th>name</th>
                                <th>description</th>
                                <th>country_of_origin</th>
                                <th>weight</th>
                                <th>price</th>
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

export default Product;