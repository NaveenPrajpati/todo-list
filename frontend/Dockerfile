
# Create image based on the official Node image from dockerhub
FROM node:latest AS development

# Create app directory
WORKDIR /usr/src/app



# Copy dependency definitions
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# Install dependecies
#RUN npm set progress=false \
#    && npm config set depth 0 \
#    && npm i install
RUN npm i

# Get all the code needed to run the app
COPY . /usr/src/app

EXPOSE 3000

# Serve the app
CMD ["npm", "run","start"]

