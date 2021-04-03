## generates storybook with material-ui and styled components

#### prerequisite

- git
- latest node and npm

#### usage

1. Change into you scope directory, where your packages (of corrsesponding scope) are.
2. Create a directory with name of your package. Convention is lower case and
   dash-separated, here we assume we want to generate "your-package-name":

```
mkdir your-package-name
```

3. Change into this directory

```
cd your-package-name
```

4. Create the scaffolding. You will be asked for some global settings, which will
   be saved in package.json:

```
npx -p @pubcore/generator-storybook-mui -p yo yo @pubcore/storybook-mui
```

5. start storybook, If TLS is required (https), enable it in .env file

```
npm start
```

#### References

- https://medium.com/encode/setting-up-storybook-with-material-ui-and-styled-components-5bdacb6db866
- [storybook decorator, preview.js](https://storybook.js.org/docs/addons/introduction/)
- https://material-ui.com/guides/interoperability/
  https://yeoman.io
