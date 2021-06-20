<template>
  <div id="app">
    <img
      class="absolute w-[762px] h-[918px] top-[-325px] right-[62px] md:top-[-400px] md:right-[80px]"
      src="/crazy-background-image.png"
    />
    <button class="md:dark:disabled:focus:hover:bg-gray-400">Stackable</button>
    <button class="bg-[#1da1f1]">Share on Twitter</button>
    <div class="grid-cols-[1fr,700px,2fr]">
      <!-- ... -->
    </div>
    <div class="bg-red-500/25"></div>
    <div class="bg-gradient-to-r from-red-500/50"></div>
    <div
      class="border-2 border-t-blue-500 border-r-pink-500 border-b-green-500 border-l-yellow-500"
    >
      <!-- ... -->
    </div>
    <p class="selection:bg-yellow-300">I'm yellow when you highlight me.</p>

    <ul class="marker:text-gray-500">
      <li>Odio et sed.</li>
      <li>Voluptatem perferendis optio est id.</li>
      <li>Accusamus et aut odit.</li>
    </ul>

    <input class="invalid:border-red-500" />
    <input class="caret-red-500" />

    <label>
      <input type="checkbox" class="sr-only peer" />
      <span class="w-4 h-4 bg-gray-200 peer-checked:bg-blue-500"></span>
    </label>

    <div class="scale-50 grayscale backdrop-blur-sm"></div>
    <div class="scale-50 grayscale backdrop-blur-sm"></div>

    <footer>Using Vue v{{ vueVersion }} and Pinia v{{ piniaVersion }}.</footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { version as piniaVersion } from 'pinia/package.json'
import { version as vueVersion } from 'vue/package.json'

export default defineComponent({
  name: 'App',
  setup() {
    return {
      vueVersion,
      piniaVersion,
    }
  },
})
</script>
