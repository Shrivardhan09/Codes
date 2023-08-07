

import React, { Component } from 'react';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
      },
      isEditMode: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { formData, isEditMode } = this.state;
    if (isEditMode) {
      // Handle editing existing data
      console.log('Edit form data:', formData);
      // Here, you can update your data in the backend or perform any other operations
    } else {
      // Handle adding new data
      console.log('Add form data:', formData);
      // Here, you can save your data in the backend or perform any other operations
    }

    // Reset the form after submission
    this.setState({
      formData: {
        name: '',
        email: '',
      },
      isEditMode: false,
    });
  };

  render() {
    const { formData, isEditMode } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button type="submit">{isEditMode ? 'Edit' : 'Add'}</button>
      </form>
    );
  }
}

export default FormComponent;
