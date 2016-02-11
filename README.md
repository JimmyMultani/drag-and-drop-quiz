Drag and Drop UI Quiz
=======

A simple questionnaire that uses HTML5 drag and drop features and page transitions.

This project uses HTML, Sass, ES6/JS and is compiled through Gulp.

***using LibSass, with Susy***

## Requirements
 - Node (v4.2.x)
 - npm (2.14.x)
 - browser-sync (```npm install -g browser-sync```) (2.11.x)
 - Gulp (```npm install -g gulp```) ([CLI] v3.9.0)

## Installation
- vagrant up
- npm install
- gulp

## Configuration
- gulpfile.js
	- BrowserSync
		- If you already have a server, read the instructions inside the gulpfile
- Sass
	- set other defaults in _variables.scss (font-stacks, link colors, etc)

## Usage
```Shell
- gulp serve          -> build for dev
- gulp build          -> build for prod
- gulp serve:dist     -> build and serve the output from the dist build
```

## Media Queries list
#### Desktop first
```
- xlarge (or default) which represents 1025px and up
- xxl     --> min-width: 1200px
- large   --> max-width: 1024px
- medium  --> max-width: 767px
- small   --> max-width: 599px
- xsmall  --> max-width: 479px
```
