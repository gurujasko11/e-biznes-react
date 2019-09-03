import React from 'react';

class User extends React.Component {

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
        fetch("http://localhost:9000/users",{
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
                <tr key={row.user_id}>
                    <td> {row.user_id}</td>
                    <td> {row.login}</td>
                    <td> {row.password}</td>
                    <td> {row.email}</td>
                    <td> {row.phone}</td>
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
                                <th>user_id</th>
                                <th>login</th>
                                <th>password</th>
                                <th>email</th>
                                <th>phone</th>
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

export default User;