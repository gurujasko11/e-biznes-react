import React, { Component } from 'react';
import axios from 'axios';

type CategoryPostData = {
  name: string;
};

type CreateCategoryState = {
  name: string;
};

class CreateCategory extends Component<any, CreateCategoryState> {
  state: CreateCategoryState = {
    name: '',
  };

  render() {
    const {
      name,
    } = this.state;

    return (
      <div className="container">
        <h1 className="mb-3">Create category</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              if (
                name !== null
              ) {
                const data: CategoryPostData = {
                  name,
                };

                await axios.post(
                  '/category',
                  data,
                );

                this.setState({
                  name: '',
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
              value={name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Create category
            </button>
        </form>
      </div>
    );
  }
}

export default CreateCategory;
