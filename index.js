const path = require('path');
const fs = require('fs');
const sizeOf = require('image-size');
const userName = process.env['USERPROFILE'].split(path.sep)[2];

const directoryPath = path.join('/Users', `${userName}/AppData/Local/Packages/Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy/LocalState/Assets`);


const fetchImages = async() => {
  await fs.readdir(directoryPath, (err, files) => {
    if (err)
      return console.log(err);

    files.forEach(file => {
      if (!fs.existsSync('temp'))
        fs.mkdirSync('temp');
      const target = `temp/${file}.temp.jpg`;
      fs.copyFile(`${directoryPath}/${file}`, target, (err, file) => {
        if (err)
          return console.log(err);
        const targetFile = path.join(__dirname, target);
        sizeOf(targetFile, (err, size) => {
          if (err) {
            fs.unlink(target, (err) => {
              if (err)
                return console.log(err)
            });
            return console.log(err);
          }
          if ((size.width <= 500) || err)
            fs.unlink(target, (err) => {
              if (err)
                return console.log(err)
            });
        });
      });
    });
  });
  const outputPath = path.join(__dirname, 'temp');
  const output = await new Promise((resolve) => fs.readdir(outputPath, (err, files) => {
    resolve(files);
  }));
  return output;
}

module.exports = {
  fetchImages
}
