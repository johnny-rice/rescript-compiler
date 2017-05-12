#!/bin/sh

set -e

export OCAMLPARAM='_,bin-annot=1,annot=1' 
export OCAMLRUNPARAM=b
export BS_DEBUG=true
export npm_package_name=bs-platform

echo "Checking"
make -r -j5  check 
echo "Linking"
make -r -j2 bin/bsc.exe bin/bsb.exe 
echo "Making libs"
make libs 
echo "Making test"
make -C test -j30 all

echo "Update depend, snapshot"
make -j7 depend snapshotml
make -C test depend 
make -C runtime depend
make -C others depend
echo "Done"
