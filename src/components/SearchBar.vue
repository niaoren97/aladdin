<template lang="pug">
head-bar
  template(slot="left")
    slot(name="left")
  template(slot="center")
    input(@click="$emit('')")
  template(slot="right")
    slot(name="right")

</template>
<script>

export default {
  name: "SearchBar"
}
</script>
<style lang="stylus" scoped>
</style>