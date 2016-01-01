# Scenary On My Bike

A theme for Ghost blogging platform.

## Why is it called Scenary On My Bike?

I was listening to a song by a band called Scenary On My Bike at the time. No other particular reason.

## Installation

### Dev environment
You will need to download and set up [Ghost](https://github.com/TryGhost/Ghost) repo and clone this repository inside `/content/themes/` folder.

1. Clone the repository to `/content/themes/` folder of your local Ghost repo using `git clone` command.
2. Run `npm install`
3. Run `grunt`

This will build all sass and js files and set up a watch on all files in `/src` folder. 

### Distribution
1. Follow the step 1 to 2 of Dev environment setup.
2. Run `grunt dist`

This will minify and uglify all javascript and css files.

## Setup

First thing is to switch your theme to Sceneary On My Bike in Ghost admin panel

1. Create a new post titled 'About.'
2. Create a new navigation with label 'About' and  path '/about'
3. Create a new navigation with label 'Blog; and path '/#blog'
4. Delete 'Home' navigation if it exists
5. Upload blog logo.

# License
The MIT License (MIT)

Copyright (c) 2015 chris-yoon90

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.