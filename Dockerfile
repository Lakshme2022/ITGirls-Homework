FROM node:20
WORKDIR /app
RUN npm install -g browserify
RUN npm install -g watchify
RUN npm install -g live-server
CMD ["/bin/bash"]