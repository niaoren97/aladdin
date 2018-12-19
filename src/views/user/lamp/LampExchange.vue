<template lang="pug">
.single-page
  navigation-bar(title="兑换记录")
    template(slot="right")
      span(@click="clearRecord") 清空
      span(@click="editRecord") 编辑
    list
      //- TODO: may use @click
      list-item(v-for="rec in records",:key="rec.id",
        :showHead="editing", :checked="selectedRecords.includes(rec.id)",
        @head-click="selectRecord(rec.id)")
    .footer(v-if="editing")
      .footer-item
        check-box(:checked="selectedRecords.length === records.length", @click="checkAll")
        span 全选
      .footer-item(@click="deleteRecords")
        span 删除

</template>
<script>
export default {
  name: "LampExchange",

  data() {
    return {
      records: [],
      editing: false,
      selectedRecords: [],
    }
  },
  methods: {
    clearRecord() {

    },
    selectRecord(id ) {
      sr = this.selectedRecords
      let ind = sr.indexOf(id)
      if(ind > -1)
        sr.splice(ind, 1)
      else {
        sr.push(id)
      }
    },
    clearSelected() {
      this.selectedRecords = []
    },
    deleteRecord() {

    },
    editRecord() {
      this.editing = !this.editing
    },
    checkAll() {
      // this.
    }

  }
}
</script>
<style lang="stylus" scoped>
.footer
  position fixed
  bottom 0
  left 0
  width 100vw
  height 0.6rem
  display flex
  .footer-item
    width 50vw
</style>