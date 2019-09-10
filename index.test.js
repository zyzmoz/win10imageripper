const ripper = require('./index.js');

test('fetch images', () => {
  ripper.fetchImages().then(res => expect(res.length).not.toBeNull());  
});