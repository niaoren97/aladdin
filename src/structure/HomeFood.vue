<template lang="pug">
.container
  swiper
    swiper-slide.slide(v-for="slide in slides" )
      img.slide(:src="slide")
  section-block
    section-divider(title="热销类目")
  section-block
    section-divider(title="爆品推荐")
      .
</template>
<script>
import { createProduct, fakeImage } from '@/utils'
import faker from 'faker'
import _ from 'lodash'
const cs = ['糖果', '膨化', '方便面', '巧克力']

export default {
  name: 'HomeFood',
  data() {
    return {
      slides: _.range(0, 4).map(() => fakeImage(720, 300)),
      categories: _.range(0, 4).map((x) => ({
        id: faker.random.uuid(),
        title: cs[x],
      })),
    }
  },
}
</script>

