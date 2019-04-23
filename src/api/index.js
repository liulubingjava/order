import { get } from './helpers'

// var baseUrl = 'http://www.rubyliu.top:9000'
// const getSeller = get(baseUrl + '/api/seller?sellerId=1')
// const getGoods = get(baseUrl + '/api/goods?sellerId=1')
// const getRatings = get(baseUrl + '/api/ratings?sellerId=1')
const getSeller = get('/api/seller')
const getGoods = get('/api/goods')
const getRatings = get('/api/ratings')
export {
  getSeller,
  getGoods,
  getRatings
}
