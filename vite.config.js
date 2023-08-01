import { defineConfig } from 'vite'
import { sveltepress } from '@sveltepress/vite'
import { defaultTheme } from '@sveltepress/theme-default'

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
          // Add your navbar configs here
        ],
        sidebar: {
          // Add your sidebar configs here
        },
        github: 'https://github.com/Blackman99/sveltepress',
        logo: '/logo_intezet.jpg',
      }),
      siteConfig: {
        title: 'Dr. Németh Tamás',
        description: 'Szegedi Tudományegyetem',
      },
    }),
  ],
})

export default config
