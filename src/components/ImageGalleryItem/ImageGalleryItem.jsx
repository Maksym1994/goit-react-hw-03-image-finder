import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, id, onClick }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={id}
        className={s.ImageGalleryItemImage}
        onClick={() => onClick(largeImageURL, id)}
      />
    </li>
  );
};

export default ImageGalleryItem;
