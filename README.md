## generates storybook with material-ui and styled components

The generated storybook can be used to develop, test, review and find
react components which, once exported in index.js, can be directly imported in
some react app. Corresponding app(s), which depends on this package, should be
part of a npm workspaces setup.

If apps are build with Unidirectional Data Flow paradigm, this can help to segregate
usage of local state (e.g. by react useState hook): It will not (or rarely)
occure within app's code.

Also styling efforts will not (or rarely) occure in app's code.

The code of app's views is more focused on behaviour.

#### localization

i18next and [react-i18next](https://react.i18next.com) is used for localization

#### prerequisite

- git
- latest node and npm

#### usage

1. Change into you scope directory, where your packages (of corrsesponding scope) are.
2. Create a directory with name of your package. Convention is lower case and
   hyphen-separated, for instance "your-package-name":

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
- [uniderectional data flow](<https://en.wikipedia.org/wiki/Unidirectional_Data_Flow_(computer_science)>)
