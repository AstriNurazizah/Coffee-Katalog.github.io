import API_ENDPOINT from '../globals/api-endpoint'
class RestaurantSource {
  static async allListRestaurants () {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANTS)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async restaurantDetailById (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }
}

export default RestaurantSource
