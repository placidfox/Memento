#! /bin/sh


if [ ! -d ""./build"" ]; then 
    mkdir build
fi

zip -r build/memento.zip . -x .gitignore README.md build_zip.sh .git/\*
nemo ./build