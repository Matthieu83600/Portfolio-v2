import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const GalleryComponent = ({ data }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (data) {
      const allImages = [];

      // Parcourir les projets
      data.forEach(project => {
        // Parcourir les images de chaque projet
        project.pictures.forEach(picture => {
          // Ajouter l'objet image à la liste d'images
          allImages.push({
            original: picture,
            thumbnail: picture, // Vous pouvez également utiliser une miniature différente si nécessaire
            description: project.title // Utiliser le titre du projet comme description de l'image
          });
        });
      });

      // Mettre à jour le state avec les images
      setImages(allImages);
    }
  }, [data]);

  return (
        <ImageGallery
            className=""
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            showIndex
            lazyload
            additionalClass="gallery-item"
        />
  );
};

export default GalleryComponent;
