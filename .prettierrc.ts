import { type Config } from 'prettier'

const config: Config = {
  semi: false,
  singleQuote: true,
  printWidth: 100,
  plugins: ['@prettier/plugin-xml', 'prettier-plugin-yaml'],
}

export default config
