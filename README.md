This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A Simple CRA template made my [Utkarsh Bhimte](https://twitter.com/bhimtebhaisaab) according to all his preferences

## Installation

```
npx create-react-app my-app --template jabardast
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Component Template

I am using [birla](https://www.npmjs.com/package/birla) for managing component templates which makes it easier to maintain a simple project structure and component structure. There are scripts in package.json which helps in creating components from the template. The templates are in the `birla-templates` folder.

## State Management

I am using react context for state management

## Firebase Integration

Using [firebase hooks](https://www.npmjs.com/package/react-firebase-hooks) for linking to firebase-firestore.

## Styling

Using [styled-components](https://www.npmjs.com/package/styled-components) for the styling.

### Global Style Variables

I am using CSS variables that are located in the `src/utils/globalStyles.ts`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
