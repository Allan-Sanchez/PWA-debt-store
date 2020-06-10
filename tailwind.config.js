/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    minWidth: {
         '0': '0',
         '1/4': '25%',
         '1/2': '50%',
         '3/5': '60%',
         '3/4': '75%',
         'full': '100%',
    },
    extends:{

      width: {
        '14':'50px'
      }
    }
  },
  variants: {},
  plugins: []
}
