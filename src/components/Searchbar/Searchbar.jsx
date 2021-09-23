import React, { Component } from 'react';
import s from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    pictureName: '',
  };

  handleChange = e => {
    this.setState({ pictureName: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.pictureName.trim() === '') {
      alert('Введите название картинки');
      return;
    }
    this.props.onSubmit(this.state.pictureName);
    this.setState({
      pictureName: '',
    });
  };

  render() {
    const { pictureName } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            value={pictureName}
            onChange={this.handleChange}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
