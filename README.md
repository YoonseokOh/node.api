# Install apidoc module global
npm install -g apidoc

# Make API document page
apidoc -i api/routes/v1/ -o apidoc/

# Server start
npm start
node bin/api

# API document URL
http://localhost:3030/docs

# Test URL
http://localhost:3030/v1/api?key=value
http://localhost:3030/v1/api/sub?key=value
