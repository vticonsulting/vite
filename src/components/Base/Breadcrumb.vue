<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()
    return { t }
  },
})
</script>

<template>
  <header class="flex items-center justify-between mx-auto">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="flex items-center space-x-4">
        <li>
          <div>
            <RouterLink :to="{ name: 'index' }">
              <BaseIconSolid name="home" class="text-gray-400 hover:text-gray-500" />
              <span class="sr-only">{{ t('home') }}</span>
            </RouterLink>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <BaseIconSolid name="chevron-right" class="flex-shrink-0 text-gray-400" />
            <RouterLink
              :to="{ name: 'index' }"
              class="ml-4 text-sm font-medium text-gray-400 hover:text-gray-500"
            >{{ t('dashboard') }}</RouterLink>
          </div>
        </li>
      </ol>
    </nav>

    <BaseLinksButton />
  </header>
</template>
