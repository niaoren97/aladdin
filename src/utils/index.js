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

function fakeImage(w, h) {
  return `http://dummyimage.com/${w}x${h}`
}
export { Address, Coupon, fakeImage }
