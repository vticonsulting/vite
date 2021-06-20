<script lang="ts">
// import { defineComponent, PropType } from 'vue'
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
// import { PersonItem } from '~/types'

export default defineComponent({
  props: {
    person: {
      // type: Object as PropType<PersonItem>,
      type: Object,
      required: true,
    },
  },
  inject: ['GStore'],
  setup() {
    const { t } = useI18n()
    const toast = useToast()
    return {
      assetsURL: '/assets',
      t,
      toast
    }
  },
  methods: {
    handleSubmit() {
      this.toast.info('I’m an info toast!')
    },
    save() {
      // Call to API
      this.GStore.flashMessage = 'Saved'

      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'PersonHome'
      })
    }
  }
})
</script>


<template>
  <main class="flex-1 lg:col-span-9">
    <SectionWrapper>
      <SectionHeader>{{ t('my_profile') }}</SectionHeader>
      <form @submit.prevent="handleSubmit" method="POST">Form</form>
    </SectionWrapper>
  </main>
</template>
