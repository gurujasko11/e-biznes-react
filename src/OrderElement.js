import React from 'react';

class OrderElement extends React.Component {

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
        fetch("http://localhost:9000/order_elements",{
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
                <tr key={row.order_element_id}>
                    <td> {row.order_element_id}</td>
                    <td> {row.order_id}</td>
                    <td> {row.product_id}</td>
                    <td> {row.quantity}</td>
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
                                <th>order_element_id</th>
                                <th>order_id</th>
                                <th>product_id</th>
                                <th>quantity</th>
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

export default OrderElement;