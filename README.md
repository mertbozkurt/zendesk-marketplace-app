# What is this?

This is a Pisano application for measure CX metrics by the help of Pisano Platfrom for Zendesk Support.

# Get started

1. Clone the repository

```
git clone git@github.com:mertbozkurt/zendesk-marketplace-app.git
```

2. Install `zcli` [npm package](https://www.npmjs.com/package/@zendesk/zcli) globally on your PC, that is distributed by Zendesk.

```
yarn global add @zendesk/zcli
```

or

```
npm install -g @zendesk/zcli
```

3. Install boilerplate packages inside cloned repository

```
cd zendesk-vite-boilerplate
yarn
```

or

```
cd zendesk-vite-boilerplate
npm install
```

## Local development

1. Inside your boilerplate cloned directory use scripts from `package.json` to start `zcli` server. It will build all required Zendesk files, including `manifest.json`

```
yarn zcli:start
```

2. At this point you can start a server using any framework that you might have created before, or have in your `packages` directory.

```
yarn ticket_sidebar:start
