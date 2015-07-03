# Setup

## Pre-requisites

- Node.js version 0.12 and above
  - [https://nodejs.org/download/](https://nodejs.org/download/)
  - See [this](https://nodesource.com/blog/nodejs-v012-iojs-and-the-nodesource-linux-repositories) for Linux

- Yoeman
  - `npm install -g yo`

- Github's Electron
  - `npm install electron-prebuilt -g`	
	
## Install from Source

```
> git clone https://github.com/vrjs/generator-vrjs
> cd generator-vrjs
> npm install
> npm link
```

## Create project
```
> yo vrjs
```
The generator will ask you for a project name (lets say you call it `app`).  Once its done, prepare your app and start it by doing the following:

```
> cd app
> npm install
> electron .
```