<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <router-link tag="li" active-class="active" :to="link.url" :exact="link.exact"  v-for="link in links" :key="link.url">
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>

</template>

<script>
export default {
  name: 'Sidebar',
  props: ['value'],
  data: () => ({
    links: [
      { title: 'Счет', url: '/', exact: true },
      { title: 'История', url: '/history' },
      { title: 'Планирование', url: '/planning' },
      { title: 'Новая Запись', url: '/record' },
      { title: 'Категория', url: '/categories' }
    ]
  })
}
</script>

<style scoped>

</style>
