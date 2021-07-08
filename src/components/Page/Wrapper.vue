<script>
export default {
  name: 'PageWrapper',
}
</script>

<template>
  <BaseBreadcrumb class="p-4" />

  <div class="px-4">
    <slot />
  </div>
</template>
