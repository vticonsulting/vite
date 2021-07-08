<script lang="ts">
import axios from 'axios'
// import axios from '~/plugins/axios'
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community',
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
      petOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 },
      ],
    }
  },
  methods: {
    sendForm(e) {
      axios
        .post('events', this.event)
        .then(function(response) {
          console.log('Response', response)
        })
        .catch(function(err) {
          console.log('Error', err)
        })
    },
  },
})
</script>

<template>
  <main class="flex-1">
    <PageHeading>{{ t('contact_form') }}</PageHeading>

    <section class="p-8 mt-4">
      <form @submit.prevent="sendForm">
        <BaseSelect :options="categories" v-model="event.category" label="Select a category" />
        <fieldset class="mt-16">
          <h3 class="font-medium">Name & describe your event</h3>

          <BaseInput v-model="event.title" label="Title" type="text" />

          <BaseInput v-model="event.description" label="Description" type="text" />
        </fieldset>

        <fieldset class="mt-16">
          <h3>Where is your event?</h3>

          <BaseInput v-model="event.location" label="Location" type="text" />
        </fieldset>

        <fieldset class="mt-16">
          <h3>Are pets allowed?</h3>
          <div>
            <BaseRadioGroup v-model="event.pets" name="pets" :options="petOptions" />
          </div>
        </fieldset>
        <fieldset class="mt-16">
          <h3>Extras</h3>
          <div>
            <BaseCheckbox v-model="event.extras.catering" label="Catering" />
          </div>
        </fieldset>

        <fieldset class="mt-16">
          <div>
            <BaseCheckbox v-model="event.extras.music" label="Live music" />
          </div>
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      <pre>{{ event }}</pre>
    </section>
  </main>
</template>
