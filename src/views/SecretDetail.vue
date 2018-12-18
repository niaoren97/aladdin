<template lang="pug">
.single-page  
  navigation-bar(:title="title")
</template>
<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  name: 'SecretDetail',
  data() {
    return {title: "detail page"}
  },
  components: {
    NavigationBar,
  }
}
</script>

