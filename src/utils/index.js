import faker from 'faker'
import _ from 'lodash'

const arrayElement = faker.random.arrayElement

class Address {
  constructor(payload) {
    const { name, phone, province, city, district, detail, postCode } = payload
    this.name = name
    this.phone = phone
    this.province = province
    this.city = city
    this.district = district
    this.detail = detail
    this.postCode = postCode
  }
}

class Coupon {
  constructor(payload) {
    const { type, discount } = payload
    this.type = type
    this.discount = discount
  }
}

function fakeImage(w, h, color) {
  color = color || 'fff'
  return `http://dummyimage.com/${w}x${h}/${color}`
}
function createAddress() {
  return {
    id: faker.random.uuid(),
    reciever: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    province: faker.address.state(),
    area: faker.address.city(),
    county: faker.lorem.word(),
    detail: faker.address.secondaryAddress(),
    postCode: faker.address.zipCode,
  }
}
function createProduct() {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.words(3),
    images: [fakeImage(120, 120)],
    subtitle: faker.lorem.sentence(),
    price: _.random(20, 200, true).toFixed(2),
    country: arrayElement(['japan', 'america', 'english']),
  }
}
function createIdentity() {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    number: faker.random.uuid(),
    portrait: fakeImage(480, 320),
    back: fakeImage(480, 320),
  }
}
export {
  Address,
  Coupon,
  fakeImage,
  createAddress,
  createIdentity,
  createProduct,
}
