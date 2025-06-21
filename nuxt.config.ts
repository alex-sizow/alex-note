// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css: [
    '~/assets/styles/main.css'
  ],

  modules: ['@nuxt/fonts'],
  fonts: {
    MontserratAlternates: [
      {
        src: '~/public/fonts/MontserratAlternates-Regular.ttf',
        weight: 400,
        style: 'normal',
      },
      {
        src: '~/public/fonts/MontserratAlternates-Italic.ttf',
        weight: 400,
        style: 'italic',
      },
      {
        src: '~/public/fonts/MontserratAlternates-Bold.ttf',
        weight: 700,
        style: 'normal',
      },
      {
        src: '~/public/fonts/MontserratAlternates-BoldItalic.ttf',
        weight: 700,
        style: 'italic',
      },
      {
        src: '~/public/fonts/MontserratAlternates-Light.ttf',
        weight: 300,
        style: 'normal',
      },
      {
        src: '~/public/fonts/MontserratAlternates-LightItalic.ttf',
        weight: 300,
        style: 'italic',
      },
      {
        src: '~/public/fonts/MontserratAlternates-SemiBold.ttf',
        weight: 600,
        style: 'normal',
      },
      {
        src: '~/public/fonts/MontserratAlternates-SemiBoldItalic.ttf',
        weight: 600,
        style: 'italic',
      },
    ],
  },
})