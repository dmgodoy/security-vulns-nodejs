#FROM library/node:6
FROM ubuntu:xenial

LABEL org.opencontainers.image.authors="Daniel Garcia aka (cr0hn) <cr0hn@cr0hn.com>"

ENV STAGE "DOCKER"

RUN apt-get update && apt-get -y upgrade && \
    apt-get install -y --no-install-recommends netcat nodejs npm && \
    useradd --create-home --shell /bin/bash appuser

# Fix node links
RUN ln -s /usr/bin/nodejs /usr/bin/node

# Build app folders
RUN mkdir /app && chown appuser:appuser /app
WORKDIR /app

# Install depends
COPY package.json /app/
RUN npm install

# Bundle code
COPY . /app

RUN chmod +x /app/start.sh && chown -R appuser:appuser /app

USER appuser

EXPOSE 3000

CMD [ "/app/start.sh" ]
#CMD [ "npm", "start" ]