Drag and Drop UI Quiz
=======

A simple questionnaire that uses HTML5 drag and drop features and page transitions.

This project uses HTML, Sass, Babel and is compiled through Gulp.

## Requirements
 - Node (v4.2.x)
 - npm (2.14.x)
 - browser-sync (```npm install -g browser-sync```) (2.11.x)
 - Gulp (```npm install -g gulp```) ([CLI] v3.9.x)

## Installation
```Bash
vagrant up
npm install
gulp
```

## Configuration
- gulpfile.js
	- BrowserSync
		- If you already have a server, read the instructions inside the gulpfile
- Sass
	- set other defaults in _variables.scss (font-stacks, link colors, etc)

## Usage
```Bash
gulp serve          -> build for dev
gulp build          -> build for prod
gulp serve:dist     -> build and serve the output from the dist build
```
