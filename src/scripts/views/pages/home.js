/* eslint-disable no-shadow */

import RestaurantSource from '../../data/restaurant-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
      <div class="content">
        <h2 class="content__heading">EXPLORE RESTAURANT</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `
  },

  async afterRender () {
    const restaurants = await RestaurantSource.allListRestaurants()
    const restaurantsContainer = document.querySelector('#restaurants')
    restaurants.forEach((restaurants) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurants)
    })
  }
}

export default Home
