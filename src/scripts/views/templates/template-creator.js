import CONFIG from '../../globals/config'

const createRestaurantDetailTemplate = (restaurant) => `
  <img class="restaurant__picture" src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name}" />
   <div class="restaurant-item__header__rating">
            <p>Rating: ⭐️ <span class="restaurant-item__header__rating__score">${
  restaurant.rating
}</span></p>
        </div>
  <div class="restaurant__info">
            <h2 class="restaurant__name">${restaurant.name}</h2>
            <p class="restaurant_address">${
  restaurant.address
}, <span class="restaurant_city">Kota ${restaurant.city}</span></p>
            <h3 class="description">Deskripsi</h3>
            <p class="restaurant__description">${restaurant.description}</p>
        </div>
       <div class="restaurant_overview">
            <div class="restaurant_list_food">
                <h3 class="food_title">Menu Makanan</h3>
                <ul class="list_food">
                    ${restaurant.menus.foods
    .map((food) => `<li>${food.name}</li>`)
    .join('')}
                </ul>
            </div>
            <div class="restaurant_list_drink">
                <h3 class="drink_title">Menu Minuman</h3>
                <ul class="list_drink">
                ${restaurant.menus.drinks
    .map((drink) => `<li>${drink.name}</li>`)
    .join('')}
                </ul>
            </div>
            
            <article class="review">
            <h3 class="header__items">Review Customer</h3>
            ${restaurant.customerReviews.slice(0, 3)
    .map(
      (review) => `
              <article class="review_item">
              <h2 id="nama_review">${review.name}</h2>
              <br/> <small>${review.date}</small>
              <p> ${review.review}  </p>
              </article>
              `
    )}
`

const createRestaurantItemTemplate = (restaurants) => `
  <div class="restaurants-item">
    <div class="restaurants-item__header">
        <img class="restaurants-item__header__picture lazyload" alt="${restaurants.name}"
            data-src="${CONFIG.BASE_IMAGE_URL}${restaurants.pictureId}">
        <div class="restaurants-item__header__rating">
            <p>⭐️<span class="restaurants-item__header__rating__score">${
  restaurants.rating
}</span></p>
        </div>
    </div>
    <div class="restaurants-item__content">
        <h3><a href="${`/#/detail/${restaurants.id}`}">${
  restaurants.name
}</a></h3>
        <p>${restaurants.description}</p>
    </div>
  </div>
  `

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
