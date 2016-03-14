transpile: babel -w --presets es2015 -d built src 
bundle: watchify -v -d -o built/bundle.js built/client/index.js
web: nodemon built/server/app.js -w built/server 
