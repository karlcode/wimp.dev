import axios from 'axios'
import { api } from 'prismic-javascript';

const pkg = require('./package')
const PrismicConfig = require('./prismic.config')

module.exports = {
  mode: 'spa',


  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900'
      }
    ],
    script: [{
        innerHTML: '{ window.prismic = { endpoint: "' + PrismicConfig.apiEndpoint + '"} }'
      },
      {
        src: '//static.cdn.prismic.io/prismic.min.js'
      }
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/resetr.css',
    '@/assets/css/common.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/link-resolver.js',
    '~/plugins/prismic-vue.js',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['prismic-nuxt', {
      endpoint: "https://wimp-blog.prismic.io/api/v2",
      linkResolver: function (doc) {
        if (doc.isBroken) {
          return '/not-found'
        }
      
        if (doc.type === 'blog_home') {
          console.log("HIT BLOG HOME1");
          return '/'
        }
      
        if (doc.type === 'post') {
          console.log("POST");
          return '/blog/' + doc.uid
        }
      
        return '/not-found'
      }
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  }
}
