import React, {Component} from 'react';
import {FormGroup, Button, ControlLabel, HelpBlock, FormControl} from 'react-bootstrap';
import {addProduct} from '../../utils/post-api';
import {getCategories} from '../../utils/get-api';

function FieldGroup({
                        id,
                        label,
                        help,
                        ...props
                    }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props}/> {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

class AddProduct extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            categories: [],
            product_name: '',
            product_description: '',
            category: '',
            country_of_origin: '',
            weight: 0,
            category_id: 0,
            product_price: '',
            product_added: false
        };

        this.handleProductNameChange = this
            .handleProductNameChange
            .bind(this);
        this.handleProductDescriptionChange = this
            .handleProductDescriptionChange
            .bind(this);
        this.handleProductCategoryChange = this
            .handleProductCategoryChange
            .bind(this);
        this.handleProductPriceChange = this
            .handleProductPriceChange
            .bind(this);
        this.postData = this
            .postData
            .bind(this);
    }

    renderOption = (json) => {
        return <option value={json.id}>{json.name}</option>
    }

    handleProductNameChange = (e) => {
        this.setState({product_name: e.target.value});
    }

    handleProductDescriptionChange = (e) => {
        this.setState({product_description: e.target.value});
    }

    handleProductCategoryChange = (e) => {
        this.setState({category: e.target.value});
        var found = this.state.categories.find(function(element) {
            if(element.name === e.target.value)
                return true;
        });
        this.setState({category_id: found.category_id});

    }

    handleProductPriceChange = (e) => {
        this.setState({product_price: e.target.value});
    }

    handleCountryOfOriginChange = (e) => {
        this.setState({country_of_origin: e.target.value});
    }

    handleProductWeightChange = (e) => {
        this.setState({weight: e.target.value});
    }

    postData = (event) => {
        event.preventDefault();
        this.setState({product_added: false});
            addProduct(this.state.product_name, this.state.product_description, this.state.category_id, this.state.weight, this.state.country_of_origin, this.state.product_price);
        this.setState({product_added: true});
    }

    getCategories() {
        getCategories().then((categories) => {
            this.setState({categories});
        })
    }

    componentDidMount() {
        this.getCategories();
    }


    render() {
        if (!this.state.product_added) {
            const catConst = this.state.categories;
            return (
                < form onSubmit={this.postData}>
                    <div className="center">
                        <br/>
                        <label htmlFor="product_name">Product name</label>
                        <input id="product_name"
                               required={true}
                               name="Product name" type="text"
                               placeholder="Enter product name"
                               onChange={this.handleProductNameChange}/>

                        <label htmlFor="product_description">Product description</label>
                        <input id="product_description"
                               required={true}
                               name="Product description" type="text"
                               placeholder="Enter product description"
                               onChange={this.handleProductDescriptionChange}/>


                        <label htmlFor="formControlsSelect">Choose category</label>
                        <select id="formControlsSelect"
                                required="required"
                                className="browser-default"
                                placeholder="Choose category"
                                value={this.state.value}
                                onChange={this.handleProductCategoryChange}>
                            <option value="" selected disabled hidden>Choose category</option>
                            {catConst.map(this.renderOption)} </select>

                        <label htmlFor="country_of_origin">Country of origin</label>
                        <input id="country_of_origin"
                               required={false}
                               name="Country of origin" type="text"
                               placeholder="Enter country of origin"
                               onChange={this.handleCountryOfOriginChange}/>

                        <label htmlFor="weight">Product weight (g)</label>
                        <input id="weight"
                               required={false}
                               name="Product weight (g)" type="text"
                               placeholder="Enter product weight"
                               onChange={this.handleProductWeightChange}/>

                        <label htmlFor="product_price">Product price ($)</label>
                        <input id="product_price"
                               required={true}
                               name="Product price ($)" type="number"
                               defaultValue={this.state.price}
                               onChange={this.handleProductPriceChange}/>

                        <button className="waves-effect waves-light btn">Add product</button>
                    </div>
                </form>
            );
        } else {
            return (
                <div>
                    <h1>
                        Product <b><i>{this.state.product_name}</i></b> added!
                    </h1>
                </div>
            );
        }
    }
}

export default AddProduct;