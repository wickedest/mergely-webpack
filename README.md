# mergely-webpack

This project can be used to start a new project using Mergely using [webpack](https://webpack.js.org/).  Clone this repository and then delete the `.git` folder.

## Dependencies
Mergely uses pngquant, which may need to be built from source depending on which platform you are using. This requires [nasm](https://www.nasm.us/) and [libpng](http://www.libpng.org/pub/png/libpng.html).

First, try following installation instructions without doing anything. If you see `configure: error: no nasm (Netwide Assembler) found` and/or `make sure that libpng-dev is installed`, install nasm and libpng. On RHEL and RHEL-like Linuxes, the following may do the trick: 

```
sudo yum install nasm
sudo yum install libpng-devel
```

## Installation

```
git clone --depth=1 git@github.com:wickedest/mergely-webpack.git
cd mergely-webpack
rm -rf ./git
npm install
```

## Running Mergely

```
npm start
```

Then, open a browser to http://localhost:8080/editor.

## Creating a build

```
npm run build
```

## More information

For more information on Mergely and configuration options, see http://www.mergely.com.
