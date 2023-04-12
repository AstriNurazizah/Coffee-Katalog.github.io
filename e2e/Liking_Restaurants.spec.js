const assert = require('assert')
// eslint-disable-next-line no-undef
Feature('Liking Restaurants')

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

const dataEmpty = 'Tidak ada restaurant untuk ditampilkan'

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants')
  I.see(dataEmpty, '#restaurants')
})

// eslint-disable-next-line no-undef
Scenario('liking one restaurant', async ({ I }) => {
  I.wait(5)
  I.see(dataEmpty, '#restaurants')
  I.amOnPage('/')
  // … kita akan mengisi uji coba berikutnya …
  I.wait(5)
  I.seeElement('h3 a')
  // eslint-disable-next-line no-undef
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
  // eslint-disable-next-line no-undef
  assert.strictEqual(firstRestauranItemName, likedRestaurantItemName)
})
