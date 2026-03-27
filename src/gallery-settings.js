const modules = import.meta.glob('/src/assets/images/gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

// doc https://react-photo-album.com/documentation
// photos in src/assets/images/gallery

const photos = Object.entries(modules).map(([filePath, mod], idx) => {
  const filename = filePath.split('/').pop();
  const image = mod.default;
  return {
    key: idx,
    alt: filename,
    src: image.src,
    width: image.width,
    height: image.height,
  };
});

export default {
  enabled: true,
  layout: 'masonry',
  photos,
};
