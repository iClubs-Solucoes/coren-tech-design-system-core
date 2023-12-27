# Used Technologies

This project was built with:

- React

- Typescript

- Styled Components

- Storybook

- Vite

- Vitest

- React Testing Library

- ESLint

- Prettier

- Plop.js

# Usage

To use this design system library you must follow the following steps:



Install the dependencies

With yarn:

```
yarn add @iclubs-packages/design-system
```

With npm:

```
npm i @iclubs-packages/design-system
```



Import the components, containers and so on. And after, use it. For example:

```
import { Card } from "@iclubs-packages/design-system";

export function App() {
  return <Card>Hello README!</Card>;
}
```

# Start Storybook

To start our Storybook is just run the following command:

```
yarn storybook
```

A node script will run and our design system documentation will be opened in your browser.

# New component creation

We use [Plop.js](https://plopjs.com/) to padronize our component creation in the project.



To create a new component is just run the following command:

```
yarn new:component
```

That a node script with plop, again, will do all the job for you! 😉✨

# Library build

To build the library you must run:

```
yarn build
```

Then the Vite will build the application and create the `dist` folder, containing the project build.

# Library publishing

## Publishing itself

First, you will have to change the project version in the `package.json`:

```
{
  "version": "1.0.0", // change to 1.0.1 e.g
  ...
}
```



After, you have to build the application.



And, finally, run:

```
yarn publish
```

Following the indicated steps. With that, a new version will be published in [our npm](https://www.npmjs.com/org/iclubs-packages).



## Testing your publishable

After publishing a new version, you can test if your changes climb successfully to NPM. To do this, you can:



Go to the `package.json` of the lib itself and update the dev dependency "@iclubs-packages/design-system" to the version you just published.

```
{
  "devDependencies": {
    "@iclubs-packages/design-system": "^0.0.5", // change to 0.0.6 e.g
  },
  ...
}
```



After, you will run `yarn` to update the version of the library in the project.



With that, you be able to test your change on the `src/TestingComponents.tsx` page.



For example, if you added a new component in the design system you can import this component in this page and test if it appears on the screen.

# Tests

## Config

Our test coverage is 100% for:

- Statements

- Branches

- Functions

- And lines

Everything, basically.



## Running Unit tests

To run the tests you have two options:

`yarn test` that runs the tests silencing the console outputs from the run.

    yarn test



And `yarn test-visible` that runs the tests showing these console outputs.

```
yarn test-visible
```
