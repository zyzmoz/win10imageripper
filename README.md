# Win10 Image Ripper Lib

Node module created to get Windows 10 login screen images.

## This Project Uses:
- fs
- path
- image-size
- jest

## Getting Started

Clone the sources using npm:
```
  npm i -S https://github.com/zyzmoz/win10imageripper.git
```

To use the module you'll need to invoke the function as:
```
  const ripper = require('win10imageripper');

  ripper.fetchImages(<output folder>).then(res => console.log(res));
```

## Commands

Run Test:
```
  npm test 
```


Feel free to fork, copy and study it!

That's all folks

Daniel