<template lang="pug">
.single-page  
  navigation-bar(:title="title")
</template>
<script>

export default {
  name: 'SecretDetail',
  data() {
    return {title: "detail page"}
  },
}
</script>

