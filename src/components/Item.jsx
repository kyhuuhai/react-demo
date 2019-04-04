import React, { Component, Fragment } from 'react';
import store from '../store/store';
import { editItems } from '../actions/action';
import { removeItem } from '../actions/action';

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false
    };
  }

  handleEdit = () => {
    this.setState({ editable: !this.state.editable });

    if (this.state.editable) {
      let item = {
        id: this.props.item.id,
        name: this.state.name,
        description: this.state.description
      };

      editItems(item).then(data => {
        if (data.result.status === 500) {
          alert(data.result.message);
          window.sessionStorage.setItem('authenToken', '');
          this.props.history.push('/login');
        } else {
          store.dispatch(data);
        }
      });
    }
  };

  editInput = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  submitRemoveItem = () => {
    removeItem(this.props.item.id).then(data => {
      if (data.result.status === 500) {
        alert(data.result.message);
        window.sessionStorage.setItem('authenToken', '');
        this.props.history.push('/login');
      } else {
        store.dispatch(data);
      }
    });
  };

  cancelEdit = () => {
    this.setState({ editable: !this.state.editable });
  };

  render() {
    let name,
      description,
      buttonText,
      removeButton = '',
      cancelButton = '';

    if (this.state.editable) {
      name = (
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Edit the name of the item"
          onChange={this.editInput}
          defaultValue={this.props.item.name}
        />
      );

      description = (
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Edit the description of the item"
          onChange={this.editInput}
          defaultValue={this.props.item.description}
        />
      );

      buttonText = 'Submit';
      removeButton = '';
      cancelButton = (
        <input
          type="button"
          onClick={this.cancelEdit}
          value="Cancel"
          className="btn btn-danger form-control"
        />
      );
    } else {
      name = <h4 className="card-title">{this.props.item.name}</h4>;
      description = <p className="card-text">{description}</p>;
      removeButton = (
        <input
          type="button"
          onClick={this.submitRemoveItem}
          value="Remove"
          className="btn btn-danger form-control"
        />
      );
      buttonText = 'Edit';
      cancelButton = '';
    }

    return (
      <Fragment>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="http://placehold.it/700x400"
              alt=""
            />

            <div className="card-body">
              {name}
              {description}
            </div>
            <div className="card-footer form-group">
              <input
                type="button"
                onClick={this.handleEdit}
                value={buttonText}
                className="btn btn-warning form-control"
              />
              {cancelButton}
              {removeButton}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
