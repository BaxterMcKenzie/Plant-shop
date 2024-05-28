// Document Ready function - ensure the HTML is fully loaded before trying to use any JS

// $ = getElement or querySelector

// Grab the document (HTML) and check it is ready:
$(document).ready(function () {
    // ALL JS is placed inside of here

    const products = [{
      brand: 'DARKSTAR',
      price: '$49.99',
      name: 'Collapse Pink Deck',
      width: '8.0 x 31.62',
      image: [{
          imageName: 'Image 1 Alt',
          imageSrc: './img/collapsepinkdeck.webp',
        },
        {
          imageName: 'Image 2 Alt',
          imageSrc: './img/collapsepinkback.webp',
        },
        {
          imageName: 'Image 3 Alt',
          imageSrc: './img/collapsepinkside.webp',
        }
      ]
    },

]

// -------- HTML ELEMENTS & SETTING AS GLOBAL SCOPED --------


// // Get the sort button:
// const sortByNameButton = document.getElementById('nameButton');

// -------- POPULATE CARDS & Initial Population --------

// Populate cards - no sorting just populatin
function populateCards(array) {
// clear out any results first:
$('#results').html('');
// Loop over the students and create a crad for each student - for loop
for (let i = 0; i < array.length; i++) {
  // then populate:

  const productcard = `
          <div class="card">
          <div class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="${array[i].image[0].imageSrc}" alt="${array[i].image[0].imageName} image 1"></div>
                <div class="swiper-slide"><img src="${array[i].image[1].imageSrc}" alt="${array[i].image[1].imageName} image 2"></div>
                <div class="swiper-slide"><img src="${array[i].image[2].imageSrc}" alt="${array[i].image[2].imageName} image 3"></div>
              </div>
              <div class="swiper-pagination"></div>
          </div>
              <div class="card-details">
                  <h3>${array[i].brand}</h3>
                  <h4>${array[i].name}</h4>
                  <h6> Width: ${array[i].width}</h6>
                  <h5> Price: ${array[i].price}</h5>
              </div>
          </div>
      `

  $('#results').append(productcard)

  // Re-initialize Swiper Instances
  const swipers = document.querySelectorAll('.swiper');
  swipers.forEach(swiperEl => {
    new Swiper(swiperEl, {
      direction: 'vertical',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  });
}
}

populateCards(products);

/** SWIPER JS */

const swiper = new Swiper('.swiper', {
// Optional parameters
direction: 'vertical',
loop: true,

// If we need pagination
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
});

});