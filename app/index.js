const Generator = require('yeoman-generator'),
  { basename, resolve } = require('path'),
  { readdirSync } = require('fs')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
  }
  initializing() {
    var localName = this.appname.replace(/\s+/g, '-')
    if (readdirSync(this.destinationRoot()).length) {
      this.log.error('working directory is not empty (beware dot-files)')
      process.exit(1)
    }
    this.initial = {
      scope: basename(resolve(process.cwd(), '..')),
      localName,
      generatorName: localName.replace(/generator-/, ''),
    }
  }
  async prompting() {
    var { scope, localName } = this.initial
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        default: () => `@${scope}/${localName}`,
        message: 'Your project name',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Package description',
      },
      {
        type: 'input',
        name: 'license',
        default: 'MIT',
        message: 'License',
      },
      {
        type: 'input',
        name: 'author',
        default: () => scope,
        message: 'Author',
      },
      {
        type: 'input',
        name: 'repository',
        message: 'Repository uri',
      },
    ])
  }
  writing() {
    //beware handling of ignore files (should be not in template/static)
    var replacements = { ...this.answers, ...this.initial }

    this.fs.copy(this.templatePath('static/**/*'), this.destinationPath('.'), {
      globOptions: { dot: true },
    })
    this.fs.copyTpl(
      this.templatePath('_gitignore'),
      this.destinationPath('./.gitignore')
    )
    this.fs.copyTpl(
      this.templatePath('package-json'),
      this.destinationPath('./package.json'),
      replacements
    )
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('./README.md'),
      replacements
    )
  }
  install() {
    this.log('Install packages ...')
    //BEWARE peer dependencies in static package-json, do not install it here!
    const deps = '@material-ui/styles @material-ui/lab prop-types'
    const devDeps =
      '@babel/cli @babel/core @babel/preset-env @babel/preset-react \
babel-loader @storybook/react @storybook/addon-actions husky prettier \
eslint-config-prettier eslint eslint-plugin-react cross-env dotenv rimraf \
react-i18next'
    this.spawnCommandSync('npm', ['i', '-D', ...devDeps.split(' ')])
    this.spawnCommandSync('npm', ['i', ...deps.split(' ')])
    this.spawnCommandSync('git', ['init'])
    this.spawnCommandSync('npx', ['husky', 'install'])
  }
}
