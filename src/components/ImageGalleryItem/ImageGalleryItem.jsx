import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onClick }) =>
  images.map(({ id, webformatURL, largeImageURL }) => (
    <li className={s.ImageGalleryItem} key={id} onClick={() => onClick(largeImageURL)}>
      <img src={webformatURL} alt={id} className={s.ImageGalleryItemImage} />
    </li>
  ));

export default ImageGalleryItem;
