module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  variants: {
    extend: {
      padding: ['hover'],
      width: ['hover'],
    }
  },
  theme: {
    extend: {
      fontFamily: {
        'bt': 'americana-bt',
        'font-sans': '"Helvetica Neue", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
      }
    }
  }
}
