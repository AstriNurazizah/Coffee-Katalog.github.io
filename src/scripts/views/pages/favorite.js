import FavoriteCoffee from '../../data/favoriterestaurant-idb'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorited Restaurant</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteCoffee.getAllRestaurants()
    const restaurantsContainer = document.querySelector('#restaurants')

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
      Tidak ada restaurant untuk ditampilkan`
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Favorite
