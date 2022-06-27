const { defaultTheme } = require('vuepress')

module.exports = {
    lang: 'en-US',
    title: 'Vercel Vuepress',
    description: 'A minimal reproducible repository.',
    theme: defaultTheme({
        navbar: [
            { text: 'Snippets', link: '/snippets' },
        ],
    }),
}