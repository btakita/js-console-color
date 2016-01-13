#!/bin/bash

cp index.es6.js dist/index.es6.js
babel --presets es2015 index.es6.js -o dist/index.js
