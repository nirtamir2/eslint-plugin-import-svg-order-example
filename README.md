# ESLint plugin import problem

This repository has been created to reproduce [issue Import/order with .svg file patterns](https://github.com/benmosher/eslint-plugin-import/issues/1858) with eslint-plugin-import.

I want that in `pages/index.js` the svg files will be group and will import as the last thing.

## Reproducing

Run `yarn lint` after you install dependencies with yarn

You will see:

```
  error  `../svgs/cat.svg` import should occur before import of `./a`  import/order
```

![problem](./problem.png)

## SVG components example

This example uses a custom `.babelrc` to add support for importing `.svg` files and rendering them as React components. [babel-plugin-inline-react-svg](https://www.npmjs.com/package/babel-plugin-inline-react-svg) is used to handle transpiling the SVGs.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/svg-components)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example svg-components svg-components-app
# or
yarn create next-app --example svg-components svg-components-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
