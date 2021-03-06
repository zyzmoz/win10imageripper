const path = require('path');
const fs = require('fs');
const sizeOf = require('image-size');
const userName = process.env['USERPROFILE'].split(path.sep)[2];

const directoryPath = path.join('/Users', `${userName}/AppData/Local/Packages/Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy/LocalState/Assets`);


const fetchImages = (output = __dirname) => {
  return new Promise((resolve) => {
    const targetPath = path.join(output, 'temp');
    fs.readdir(directoryPath, (err, files) => {
      if (err)
        return console.log(err);

      files.forEach(file => {
        if (!fs.existsSync('temp'))
          fs.mkdirSync('temp');

        const targetFile = `${targetPath}/${file}.temp.jpg`
        fs.copyFile(`${directoryPath}/${file}`, targetFile, (err, file) => {
          if (err)
            return console.log(err);

          sizeOf(targetFile, (err, size) => {        
            if (err ||(size.width <= 500))
              fs.unlink(targetFile, (err) => {
                if (err)
                  return console.log(err)
              });
          });
        });
      });
      const outputPath = path.join(output, 'temp');
      fs.readdir(outputPath, (err, files) => {
        let res = []
        files.forEach(file => res.push(`${targetPath}/${file}`));
        resolve(res);
      });
    });
  });

}

module.exports = {
  fetchImages
}
