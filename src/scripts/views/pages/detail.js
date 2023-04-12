/* eslint-disable no-unused-vars */
import UrlParser from '../../routes/urls-parser'
import RestaurantSource from '../../data/restaurant-source'
import { createRestaurantDetailTemplate } from '../templates/template-creator'
import LikeButtonInitiator from '../../utils/like-button-presenter'
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb'
const Detail = {
  async render () {
    return `
      <div class="content">
        <h2 class="content__heading">DETAIL RESTAURANT</h2>
        <div id="restaurant" class="restaurant">
 
        </div>
      </div>

      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantSource.restaurantDetailById(url.id)
    const restaurantContainer = document.querySelector('#restaurant')
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant
    })
  }
}

export default Detail
