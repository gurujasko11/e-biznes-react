import React, {Component} from 'react';
import "../../style/style.css";
import {Link} from "react-router-dom";
import {getCategories, getProducts} from "../../utils/get-api";
import item1 from "../../images/honey.jpg";
import {addProduct} from "../../utils/post-api";
import {updateProduct} from "../../utils/put-api";


class EditProducts extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            categories: [],
            product_name: '',
            product_description: '',
            category: '',
            country_of_origin: '',
            weight: 0,
            category_id: 0,
            product_price: '',
            productToEdit: [],
            productUpdate: false,
            updatedProduct: []
        };
        this.handleEditAction = this.handleEditAction.bind(this)
        this.postData = this.postData.bind(this)
    }

    componentDidMount() {
        this.getProducts();
        this.getCategories();
    }

    getCategories() {
        getCategories().then((categories) => {
            this.setState({categories});
        });
    }

    getProducts() {
        getProducts().then((products) => {
            this.setState({products});
        });
    }

    getRelatedCategoryName(categories, product) {
        for (var idx = 0; idx < categories.length; idx++) {
            if (categories[idx].id === parseInt(product.category)) {
                return categories[idx].name;
            }
        }
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


    renderOption = (json) => {
        return <option value={json.id}>{json.name}</option>
    }

    handleEditAction(product) {
        this.setState({product: product, product_name: product.name, product_description: product.description, product_category: product.category, product_price: product.price})
    }

    postData = (event) => {
        event.preventDefault();
        this.setState({productUpdate: false});
        updateProduct(this.state.product.product_id, this.state.product_name, this.state.product_description, this.state.category_id, this.state.weight, this.state.country_of_origin, this.state.product_price);
        let product = {
            id: this.state.product.id,
            name: this.state.product_name,
            description: this.state.product_description,
            category_id: this.state.category_id,
            weight: this.state.weight,
            country_of_origin: this.country_of_origin,
            price: this.state.product_price
        }
        this.setState({productUpdate: true, updatedProduct: product});
    }

    render() {
        const {products} = this.state;
        const {categories} = this.state;
        let itemList = [];
        if(this.state.updatedProduct !== undefined && this.state.productUpdate ){
            var index = products.findIndex(obj => obj.id === this.state.updatedProduct.id);
            products[index] = this.state.updatedProduct;
        }

        if (this.state.product !== undefined && !this.state.productUpdate) {
            return (
                < form onSubmit={this.postData}>
                    <div className="center">
                        <br></br>
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
                            {categories.map(this.renderOption)} </select>

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

                        <button className="waves-effect waves-light btn">Edit product</button>
                    </div>
                </form>
            )
        } else if (this.state.products.length > 0) {
            this.state.productUpdate = false;
            itemList = products.map(item => {
                return (
                    <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item1} alt={item.name}/>
                            <a onClick={() => this.handleEditAction(item)}
                               className="waves-effect waves-teal btn-flat">Edit</a>
                        </div>
                        <div className="card-content">
                            <span className="card-title">{item.name}</span>
                            <p>{item.description}</p>
                            <i>({this.getRelatedCategoryName(categories, item)})</i>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                    </div>
                )
            })
        }
        return (
            <div className="container">
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }

};
export default EditProducts;
