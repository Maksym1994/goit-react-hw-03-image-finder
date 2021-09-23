import { Component } from 'react';
import './App.css';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

export class App extends Component {
  state = {
    pictureName: '',
  };

  handleFormSubmit = pictureName => {
    this.setState({ pictureName, page: 1, images: [] });
  };

  render() {
    const { pictureName } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery pictureName={pictureName} />
      </div>
    );
  }
}

export default App;
