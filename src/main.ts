import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import {createHead} from '@vueuse/head'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import Oruga from '@oruga-ui/oruga-next'
import Toast from 'vue-toastification'
import 'chartkick/chart.js'

import VueClickAway from 'vue3-click-away'
import VueChartkick from 'vue-chartkick'
import CKEditor from '@ckeditor/ckeditor5-vue'

import GStore from '~/store'
import { pinia } from './stores'
import App from './App.vue'

import 'vue-toastification/dist/index.css'
import './assets/css/tailwind.css'

import en from '../locales/en.json'

const routes = setupLayouts(generatedRoutes)

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
  }
})

// eslint-disable-next-line no-console
console.log(routes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const head = createHead()


const toastOptions = {
  maxToasts: 20,
  newestOnTop: true,
}

const app = createApp(App)

app.provide('GStore', GStore)

app.use(Oruga)
app.use(CKEditor)

app.use(VueClickAway)
app.use(VueChartkick)
app.use(head)
app.use(Toast, toastOptions)
app.use(router)
app.use(i18n)
app.use(pinia)
app.mount('#app')
