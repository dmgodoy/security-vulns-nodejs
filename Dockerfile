#FROM library/node:6
FROM ubuntu:xenial

LABEL org.opencontainers.image.authors="Daniel Garcia aka (cr0hn) <cr0hn@cr0hn.com>"

ENV STAGE "DOCKER"

RUN apt-get update && apt-get -y upgrade && \
    apt-get install -y nodejs npm netcat && \
    ln -s /usr/bin/nodejs /usr/bin/node && \
    mkdir /app && \
    groupadd --system appuser && \
    useradd --system --gid appuser --home-dir /app --shell /usr/sbin/nologin appuser && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/*

WORKDIR /app

# Install depends
COPY package.json /app/
RUN npm install

# Bundle code
COPY . /app

RUN chmod +x /app/start.sh && \
    chown -R appuser:appuser /app

EXPOSE 3000

USER appuser

CMD [ "/app/start.sh" ]
#CMD [ "npm", "start" ]