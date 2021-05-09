## <%= description %>

#### Application component example

```
import {AppDecorator} from '@your-scope/storybook-ui'

//configuration of AppDecorator
const
  //see "resources" of https://www.i18next.com/overview/configuration-options
  text = {
    en: {
      translation: { name: "This is a long name text." },
    },
  },
  //see https://www.i18next.com/overview/configuration-options
  i18nConfig //optional

export default function Application() {
  return AppDecorator({ text, i18nConfig })(() => {
    return (
      <React.StrictMode>
        <div>example</div>
      </React.StrictMode>
    )
  })
}
```

#### https

To run storybook over https, enable it in .env file and define absolute path to
corresponding cert, ca and key file. The .env file must be ignored by git and npm
