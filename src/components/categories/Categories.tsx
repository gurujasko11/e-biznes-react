import React, { Component } from 'react';
import axios from 'axios';

type Category = {
  category_id: number;
  name: string;
};

type CategoriesState = {
  categories: Category[];
};

class Categories extends Component<any, CategoriesState> {
  state: CategoriesState = {
    categories: [],
  };

  async componentDidMount() {
    try {
      const categoriesResponse = await axios.get('/categories');
      const categories: Category[] = categoriesResponse.data;

      this.setState({
        categories,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="container">
        <h1 className="mb-3">Categories</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => {
              return (
                <tr key={category.category_id}>
                  <td>{category.category_id}</td>
                  <td>{category.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Categories;
