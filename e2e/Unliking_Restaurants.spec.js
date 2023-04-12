/* eslint-disable no-undef */
const assert = require('assert')
// eslint-disable-next-line no-empty-pattern
const {} = require('regenerator-runtime')

Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

const dataEmpty = 'Tidak ada restaurant untuk ditampilkan'

// eslint-disable-next-line no-undef
Scenario('unliking one restaurant', async ({ I }) => {
  I.wait(5)
  I.see(dataEmpty, '#restaurants')
  I.amOnPage('/')
  I.wait(5)
  I.seeElement('h3 a')
  const firstRestauranItem = locate('h3 a').first()
  const firstRestauranItemName = await I.grabTextFrom(firstRestauranItem)
  I.click(firstRestauranItemName)
  I.wait(5)
  I.seeElement('#likeButton')
  I.click('#likeButton')
  I.amOnPage('/#/favorite')
  I.wait(5)
  I.seeElement('h3 a')
  const likedRestaurantItemName = await I.grabTextFrom('h3 a')
  assert.strictEqual(firstRestauranItemName, likedRestaurantItemName)
  I.click(likedRestaurantItemName)
  // unlike
  I.wait(5)
  I.seeElement('#likeButton')
  I.click('#likeButton')
  // favorite page
  I.amOnPage('/#/favorite')
  I.wait(5)
  I.seeElement('#restaurants')
  const noFavorieRestaurant = await I.grabTextFrom('#restaurants')
  assert.strictEqual(noFavorieRestaurant, dataEmpty)
})
