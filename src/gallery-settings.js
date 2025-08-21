const modules = import.meta.glob('/src/assets/images/gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  as: 'url',
});

// doc https://react-photo-album.com/documentation
// photos in src/assets/images/gallery

const photos = Object.entries(modules).map(([filePath, url], idx) => {
  const filename = filePath.split('/').pop();
  return {
    key: idx,
    alt: filename,
    src: url,
    width: 1200,
    height: 800,
  };
});

export default {
  enabled: true,
  layout: 'masonry',
  photos,
};
