# Setup

## Pre-requisites

- Node.js version 0.12 and above
  - [https://nodejs.org/download/](https://nodejs.org/download/)
  - See [this](https://nodesource.com/blog/nodejs-v012-iojs-and-the-nodesource-linux-repositories) for Linux

- Yoeman
  - `npm install -g yo`

- Electron
  - `npm install electron-prebuilt -g`	
	
## Install from Source

```
> git clone https://github.com/vrjs/generator-vrjs
> cd generator-vrjs
> npm install
> npm link
> npm install electron-prebuilt -g
```

## Create project
```
> yo vrjs
```
The generator will ask you for a project name (lets say you call it `app`).  Once its done, `cd app` and type `electron .` to start the vrjs application.
