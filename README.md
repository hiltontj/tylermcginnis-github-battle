# Tyler McGinnis's React Course

This is the working repo that I am using for the React course from [tylermcginnis.com](https://tylermcginnis.com/).

## React Hooks!

_NOTE: I am currently in the process of refactoring this project to make use of React Hooks! `git checkout hooks` (i.e. checkout the hooks branch) to see these changes._

## Setup

You will need to [create a new GitHub OAuth app](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/), and create your `app-config.json` file in the root project folder. There is a template for `app-config.json` provided in this repo. The actual config file is ignored by git.

## Launching Application

You can run a `webpack-dev-server` using:
```
npm run start
```
To build for production, do:
```
npm run build
```
Note: if on windows, use:
```
npm run build-for-windows
```
