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

I haven't really decided it yet because this is only used for my own website. As long as you are not making money off of this, you are free to use it and modify it as you see fit. I'll think about the licensing if I ever decide to publish it on the Ghost market theme.
