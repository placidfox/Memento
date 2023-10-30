#! /bin/sh

zip -r build/memento.zip . -x .gitignore README.md build_zip.sh .git/\*
nemo /home/val/Developpement/BrowserExtensions/Memento/build