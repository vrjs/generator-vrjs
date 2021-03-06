# Setup

## Pre-requisites

- Node.js version 0.12 and above
  - [https://nodejs.org](https://nodejs.org)
  - See [this](https://nodesource.com/blog/nodejs-v012-iojs-and-the-nodesource-linux-repositories) for Linux

- Yoeman
  - `npm install -g yo`

- Github's Electron
  - `npm install electron-prebuilt -g`	
	
## Install 

You can install using the `yo` menu (search for `vrjs`) or install directly from the source code repository.

```
> git clone https://github.com/vrjs/generator-vrjs
> cd generator-vrjs
> npm install
> npm link
```


## Create project

Create a directory to hold your project (i.e. `app` -> `mkdir app`).  Move into the directory -> `cd app`.  Then run the generator: 

```
> yo vrjs
```
The generator will ask you for a project name (defaults to the current directory).  

You can then run your app by typing `electron .`
