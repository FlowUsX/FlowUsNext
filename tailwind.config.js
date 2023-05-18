// const BLOG = require('./blog.config')
// const { fontFamilies } = require('./lib/font')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*..{js,ts,jsx,tsx,mdx}',
    './themes/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  // darkMode: BLOG.APPEARANCE === 'class' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    // fontFamily: fontFamilies,
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // colors: {
      //   day: {
      //     DEFAULT: BLOG.BACKGROUND_LIGHT || '#ffffff'
      //   },
      //   night: {
      //     DEFAULT: BLOG.BACKGROUND_DARK || '#111827'
      //   },
      //   hexo: {
      //     'background-gray': '#f5f5f5',
      //     'black-gray': '#101414',
      //     'light-gray': '#e5e5e5'
      //   }
      // },
      maxWidth: {
        side: '14rem',
        '9/10': '90%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
