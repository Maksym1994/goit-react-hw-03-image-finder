import { Component } from 'react';
import getImages from 'components/services/api';
import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Spinner from 'components/Loader/Loader';

export class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle',
    page: 1,
    searchPicture: null,
    showButton: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { pictureName } = this.props;
    const { page } = this.state;

    if (prevProps.pictureName !== pictureName) {
      this.setState({
        images: null,
        page: 1,
        status: 'pending',
      });
      getImages(pictureName, 1).then(responce => {
        if (responce.data.total !== 0) {
          this.setState({
            images: responce.data.hits,
            showButton: true,
            status: 'resolved',
          });
        } else {
          this.setState({ status: 'rejected' });
        }
      });
    }

    if (prevState.page !== page && page !== 1) {
      getImages(pictureName, page).then(responce => {
        const newPicture = responce.data.hits;
        this.setState({
          images: [...prevState.images, ...newPicture],
          status: 'resolved',
          showButton: true,
        });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
    }
  }

  handleSelectedImage = imageURL => {
    this.setState({
      searchPicture: imageURL,
    });
  };

  handleLoadMore = () => {
    this.setState(p => ({ page: p.page + 1 }));
  };

  render() {
    const { images, searchPicture, status, showButton } = this.state;

    if (status === 'idle') {
      return <h2 className={s.title}>Введите поисковый запрос</h2>;
    }
    if (status === 'rejected') {
      return <h2 className={s.title}>Картинки по запросу {this.props.pictureName} не найдены</h2>;
    }
    return (
      <>
        {status === 'pending' && (
          <div className={s.loader}>
            <Spinner />
          </div>
        )}
        {status === 'resolved' && (
          <ul className={s.ImageGallery}>
            <ImageGalleryItem images={images} onClick={this.handleSelectedImage} />
          </ul>
        )}
        {showButton && <Button onClick={this.handleLoadMore} />}
        {searchPicture && <Modal src={searchPicture} onCloseModal={this.handleSelectedImage} />}
      </>
    );
  }
}

export default ImageGallery;
