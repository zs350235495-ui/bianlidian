/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        cream:    '#FFF8F0',
        oat:      '#F5EDE3',
        warmOrange:  '#E8935A',
        warmOrangeLight: '#F4B88A',
        warmOrangeDeep: '#D47A3F',
        buttercup: '#F5D78E',
        buttercupLight: '#FBE9B7',
        carbon:    '#2E2A27',
        carbonLight: '#4A4541',
        carbonMuted: '#8A8480',
        mintFresh: '#A8D5BA',
        skyBlue:   '#9ECFEA',
        blushPink: '#F2B8B5',
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', '"Outfit"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Noto Sans SC"', 'sans-serif'],
      },
      borderRadius: { 'shelf': '1rem', 'pill': '9999px' },
      boxShadow: {
        'card': '0 2px 16px 0 rgba(46,42,39,0.07)',
        'card-hover': '0 8px 32px 0 rgba(46,42,39,0.13)',
        'shelf': '0 4px 24px 0 rgba(46,42,39,0.09)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-up-delayed': 'slideUp 0.6s ease-out 0.15s forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.7' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        pulseSoft: { '0%,100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.05)' } },
      },
    },
  },
  plugins: [],
};
