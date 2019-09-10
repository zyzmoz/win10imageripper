const ripper = require('./index.js');

const ImageList = ripper.fetchImages().then(res => {
  console.log(res);
});
