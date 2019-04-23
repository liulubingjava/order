import { get } from './helpers'

const getSeller = get('/api/seller?sellerId=1')
const getGoods = get('/api/goods?sellerId=1')
const getRatings = get('/api/ratings?sellerId=1')
export {
  getSeller,
  getGoods,
  getRatings
}
