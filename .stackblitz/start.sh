#! /bin/sh

# Copy .stackblit/env.template to /.env if it doesn't exist
cp -n .stackblitz/env.template .env

# Start app
npm start