/* jshint esversion: 6 */

$(document).ready(function () {
    // FULL PAGE INITIALISATION
    $('#fullpage').fullpage({
        licenceKey: 'gplv3-license',
        autoScrolling: true,
        scrollHorizontally: true,
        controlArrows: false,
    });

    $.fn.fullpage.setAllowScrolling(false); // prevent scroll of sections and slides

    // Move to specific section
    function moveToSection(number) {
        fullpage_api.moveTo(number);
    }

    $('#goToSection1').click(function () {
        moveToSection(1);
    });

    $('#goToSection2').click(function () {
        moveToSection(2);
    });

    $('#goToSlide1').click(function () {
        fullpage_api.moveTo(1, 0);
    });

    $('#goToSlide2').click(function () {
        fullpage_api.moveTo(1, 1);
    });

    let user;

    $('#submitButton').click(function (event) {
        event.preventDefault();

        const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const yesNoRegex = /^yes$|^Yes$/;

        const username = $('#username').val();
        const password = $('#password').val();
        const yesNo = $('#yesNo').val();

        if (!usernameRegex.test(username)) {
            $('#formMessage').html('<p>Invalid username. Must be 3-15 characters long and  contain only letters, numbers, and underscores.</p>');
        } else if (!passwordRegex.test(password)) {
            $('#formMessage').html('<p>Password must be at least 8 characters long and contain both letters and numbers.</p>');
        } else if (!yesNoRegex.test(yesNo)) {
            $('#formMessage').html('<p>You must like plants to enter</p>');
        } else {
            $('#formMessage').html('');
            fullpage_api.moveTo(2, 0);
        }
    });

    function checkForLoggedInUser() {
        if (!user) {
            console.log("log in");
        } else {
            console.log(user);
            $('#slide2').html('');
        }
    }

    checkForLoggedInUser();

    const products = [{
        id: 1,
        name: 'OX TONGUE',
        price: '$16.41',
        type: 'Succulent',
        care: '<i class="fa-solid fa-leaf"></i>',
        position: 'Sunny position in porous fast draining soil.',
        planting: 'Dig a hole double the size of the pot the plant came in. Backfill with potting mix mixed in with your soil. Water.',
        plantTips: 'Let dry out between watering. Feed Spring, Summer, Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/ox-tongue.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/ox-tongue2.webp',
            }
        ]
    },
    {
        id: 2,
        name: 'ALOE',
        price: '$17.99',
        type: 'Succulent',
        care: '<i class="fa-solid fa-leaf"></i>',
        position: 'Sunny position in porous fast draining soil.',
        planting: 'Dig a hole double the size of the pot the plant came in. Backfill with potting mix mixed in with your soil. Water.',
        plantTips: 'Let dry out between watering. Feed Spring, Summer, Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/aloe2.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/aloe.webp',
            }
        ]
    },
    {
        id: 3,
        name: 'ECHEVERIA VIOLET QUEEN',
        price: '$11.99',
        type: 'Succulent',
        care: '<i class="fa-solid fa-leaf"></i>',
        position: 'Sunny position in porous fast draining soil.',
        planting: 'Dig a hole double the size of the pot the plant came in. Backfill with potting mix mixed in with your soil. Water.',
        plantTips: 'Let dry out between watering. Feed Spring, Summer, Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/ech1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/ech2.webp',
            }
        ]
    },
    {
        id: 4,
        name: 'RAY OF LIGHT',
        price: '$21.29',
        type: 'Succulent',
        care: '<i class="fa-solid fa-leaf"></i>',
        position: 'Sunny position in porous fast draining soil.',
        planting: 'Dig a hole double the size of the pot the plant came in. Backfill with potting mix mixed in with your soil. Water.',
        plantTips: 'Let dry out between watering. Feed Spring, Summer, Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/rayOfLight1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/rayOfLight2.webp',
            }
        ]
    },
    {
        id: 5,
        name: 'CURLY GOLD OPUNTIA',
        price: '$39.99',
        type: 'Succulent',
        care: '<i class="fa-solid fa-leaf"></i>',
        position: 'Sunny position in porous fast draining soil.',
        planting: 'Dig a hole double the size of the pot the plant came in. Backfill with potting mix mixed in with your soil. Water.',
        plantTips: 'Let dry out between watering. Feed Spring, Summer, Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/curly-gold1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/curly-gold2.webp',
            }
        ]
    },
    {
        id: 6,
        name: 'MONSTERA DELICIOSA',
        price: '$31.99',
        type: 'Foliage',
        care: '<i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i>',
        position: 'Indoors, medium to high indirect light.',
        planting: 'Using potting mix, replant into a pot twice as large, with drainage holes. Water so soil is moist.',
        plantTips: 'Keep soil moist and repot in spring. Feed Spring, Summer & Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/monst1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/monst2.webp',
            }
        ]
    },
    {
        id: 7,
        name: 'ZEBRINA TRADESCANTIA',
        price: '$8.65',
        type: 'Foliage',
        care: '<i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i>',
        position: 'Indoors, medium to high indirect light.',
        planting: 'Using potting mix, replant into a pot twice as large, with drainage holes. Water so soil is moist.',
        plantTips: 'Keep soil moist and repot in spring. Feed Spring, Summer & Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/trad1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/trad2.webp',
            }
        ]
    },
    {
        id: 8,
        name: 'PEACE LILY',
        price: '$26.39',
        type: 'Foliage',
        care: '<i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i>',
        position: 'Indoors, medium to high indirect light.',
        planting: 'Using potting mix, replant into a pot twice as large, with drainage holes. Water so soil is moist.',
        plantTips: 'Keep soil moist and repot in spring. Feed Spring, Summer & Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/pl1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/pl2.webp',
            }
        ]
    },
    {
        id: 9,
        name: 'ATOM',
        price: '$14.39',
        type: 'Foliage',
        care: '<i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i>',
        position: 'Indoors, medium to high indirect light.',
        planting: 'Using potting mix, replant into a pot twice as large, with drainage holes. Water so soil is moist.',
        plantTips: 'Keep soil moist and repot in spring. Feed Spring, Summer & Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/king.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/king2.webp',
            }
        ]
    },
    {
        id: 10,
        name: 'SYNGONIUM',
        price: '$15.99',
        type: 'Foliage',
        care: '<i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i>',
        position: 'Indoors, medium to high indirect light.',
        planting: 'Using potting mix, replant into a pot twice as large, with drainage holes. Water so soil is moist.',
        plantTips: 'Keep soil moist and repot in spring. Feed Spring, Summer & Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/syn1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/syn2.webp',
            }
        ]
    },
    {
        id: 11,
        name: 'ELASTICA',
        price: '$45.59',
        type: 'Ficus',
        care: '<i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i>',
        position: 'Indoors, medium to high indirect light.',
        planting: 'Using potting mix, replant into a pot twice as large, with drainage holes. Water so soil is moist.',
        plantTips: 'Keep soil moist and repot in spring. Feed Spring, Summer & Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/ficus1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/ficus2.webp',
            }
        ]
    },
    {
        id: 12,
        name: 'SHIVEREANA',
        price: '$47.59',
        type: 'Ficus',
        care: '<i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i>',
        position: 'Indoors, medium to high indirect light.',
        planting: 'Using potting mix, replant into a pot twice as large, with drainage holes. Water so soil is moist.',
        plantTips: 'Keep soil moist and repot in spring. Feed Spring, Summer & Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/shiv1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/shiv2.webp',
            }
        ]
    },
    {
        id: 13,
        name: 'CLOE',
        price: '$47.99',
        type: 'Ficus',
        care: '<i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i>',
        position: 'Indoors, medium to high indirect light.',
        planting: 'Using potting mix, replant into a pot twice as large, with drainage holes. Water so soil is moist.',
        plantTips: 'Keep soil moist and repot in spring. Feed Spring, Summer & Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/cloe1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/cloe2.webp',
            }
        ]
    },
    {
        id: 14,
        name: 'LYRATA',
        price: '$39.99',
        type: 'Ficus',
        care: '<i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i>',
        position: 'Indoors, medium to high indirect light.',
        planting: 'Using potting mix, replant into a pot twice as large, with drainage holes. Water so soil is moist.',
        plantTips: 'Keep soil moist and repot in spring. Feed Spring, Summer & Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/ly1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/ly2.webp',
            }
        ]
    },
    {
        id: 15,
        name: 'FICUS DANIELLE',
        price: '$39.99',
        type: 'Ficus',
        care: '<i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i>',
        position: 'Indoors, medium to high indirect light.',
        planting: 'Using potting mix, replant into a pot twice as large, with drainage holes. Water so soil is moist.',
        plantTips: 'Keep soil moist and repot in spring. Feed Spring, Summer & Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/dan1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/dan2.webp',
            }
        ]
    },
    {
        id: 16,
        name: 'SNOW ROSE',
        price: '$99.99',
        type: 'Bonsia',
        care: '<i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i>',
        position: 'Full sun. Indooes for short spells out of direct snlight.',
        planting: 'Plant into Bonsai pot with potting mix.',
        plantTips: 'Keep soil moisy at all times. Liquid feed monthly.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/bbb1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/bbb2.webp',
            }
        ]
    },
    {
        id: 17,
        name: 'JUNIPER',
        price: '$119.99',
        type: 'Bonsia',
        care: '<i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i>',
        position: 'Full sun. Indooes for short spells out of direct snlight.',
        planting: 'Plant into Bonsai pot with potting mix.',
        plantTips: 'Keep soil moisy at all times. Liquid feed monthly.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/jun1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/jun2.webp',
            }
        ]
    },
    {
        id: 18,
        name: 'SPRUCE',
        price: '$69.99',
        type: 'Bonsia',
        care: '<i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i><i class="fa-solid fa-leaf"></i>',
        position: 'Full sun. Indooes for short spells out of direct snlight.',
        planting: 'Plant into Bonsai pot with potting mix.',
        plantTips: 'Keep soil moisy at all times. Liquid feed monthly.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/spruce1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/spruce2.webp',
            }
        ]
    },
    {
        id: 19,
        name: 'CAREX GRASS',
        price: '$7.69',
        type: 'Native Shrub',
        care: '<i class="fa-solid fa-leaf"></i>',
        position: 'Full sun to part shade. Fertile, damp to moist, soil.',
        planting: 'Dig a hole double the size of the pot the plant came in. Backfill, mixing compost and sheep pellets in with your soil. Feed once planted, water deeply and apply mulch.',
        plantTips: 'Keep soil moist. Feed Spring, Summer & Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/carex1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/carex2.webp',
            }
        ]
    },
    {
        id: 20,
        name: 'HEBE DIOSMIFOLIA',
        price: '$16.09',
        type: 'Native Shrub',
        care: '<i class="fa-solid fa-leaf"></i>',
        position: 'Sunny position in fertile, moist, free draining soil..',
        planting: 'Dig a hole double the size of the pot the plant came in. Backfill, mixing compost and sheep pellets in with your soil. Feed once planted, water deeply and apply mulch.',
        plantTips: 'Keep moist during hotter months. Feed Spring, Summer, Autumn.',
        image: [{
                imageName: 'Image 1 Alt',
                imageSrc: './img/hebe1.webp',
            },
            {
                imageName: 'Image 2 Alt',
                imageSrc: './img/hebe2.webp',
            }
        ]
    },
    
    
    ];

    const typeFilter = $('#type-filter');

    function filterByType() {
        const selectedType = typeFilter.val();
        const filteredProducts = selectedType ? products.filter(product => product.type === selectedType) : products;
        populateCards(filteredProducts);
    }

    typeFilter.on('change', function () {
        filterByType();
    });

    const priceMin = $('#priceMin');
    const priceMax = $('#priceMax');

    function filterByPrice() {
        const minPrice = parseFloat(priceMin.val());
        const maxPrice = parseFloat(priceMax.val());
        const filteredProducts = products.filter(product => {
            const priceValue = parseFloat(product.price.replace(/\$/g, ''));
            if ((!isNaN(minPrice) && priceValue < minPrice) || (!isNaN(maxPrice) && priceValue > maxPrice)) {
                return false;
            }
            return true;
        });
        populateCards(filteredProducts);
    }

    priceMin.on('input', function () {
        filterByPrice();
    });

    priceMax.on('input', function () {
        filterByPrice();
    });

    function populateCards(array) {
        $('#results').html('');
        for (let i = 0; i < array.length; i++) {
            const productCard = `
                <div class="card">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="${array[i].image[0].imageSrc}" alt="${array[i].image[0].imageName}" class="card-img" data-id="${array[i].id}">
                            </div>
                            <div class="swiper-slide">
                                <img src="${array[i].image[1].imageSrc}" alt="${array[i].image[1].imageName}" class="card-img" data-id="${array[i].id}">
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="card-details">
                        <h3>${array[i].name}</h3>
                        <h4>${array[i].type}</h4>
                        <h5>${array[i].price}</h5>
                        <h6> Care Level: ${array[i].care}</h6>
                    </div>
                </div>
            `;
            $('#results').append(productCard);

            const swipers = $('.swiper');
            swipers.each(function () {
                new Swiper(this, {
                    direction: 'vertical',
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                });
            });
        }
        attachModalToImages();
    }

    // ------- SORTING BY NAME ---------


// Sort by Name function
function sortbyName() {
    function compareByName(a, b) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    }
    const sortedNames = products.sort(compareByName);
    console.log(sortedNames);
    populateCards(sortedNames);
}

// Onclick - sort the array and repopulate the cards
$('#a-z').on('click', function () {
    console.log('sort button working');
    sortbyName();
});

    // ---------- SORT BY PRICE HIGH --------

// Sort by Price High
const sortByPriceHigh = $('#price-high');

function sortbyPriceHigh() {
  const sortedPrices = products.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
  populateCards(sortedPrices);
}

sortByPriceHigh.on('click', function () {
  sortbyPriceHigh();
});

// ---------- SORT BY PRICE LOW --------

// Sort by Price Low
const sortByPriceLow = $('#price-low');

function sortbyPriceLow() {
  const sortedPrices = products.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
  populateCards(sortedPrices);
}

sortByPriceLow.on('click', function () {
  sortbyPriceLow();
});

    populateCards(products);

    function attachModalToImages() {
        const images = $('.card-img');
        const detailsModal = $('#details-modal');

        images.on('click', function (event) {
            const scrollPosition = $(window).scrollTop();
            detailsModal.data('scrollPosition', scrollPosition);
            const rect = event.target.getBoundingClientRect();
            const imageTop = rect.top + scrollPosition;
            const windowHeight = $(window).height();
            const dialogHeight = detailsModal.outerHeight();
            const viewportTop = scrollPosition;

            let dialogTop = viewportTop + (windowHeight - dialogHeight) / 2;
            if (dialogTop < imageTop) {
                dialogTop = imageTop;
            } else if (dialogTop + dialogHeight > windowHeight + viewportTop) {
                dialogTop = windowHeight + viewportTop - dialogHeight;
            }

            detailsModal.css('top', dialogTop + 'px');
            detailsModal[0].showModal();
            $('body').addClass('modal-open');
            populateModal($(this).data('id'));
        });

        detailsModal.on('close', function () {
            $('body').removeClass('modal-open');
            const scrollPosition = detailsModal.data('scrollPosition');
            $(window).scrollTop(scrollPosition);
        });
    }

    function populateModal(productId) {
        const product = products.find(product => product.id == productId);

        if (!product) {
            console.error('Product not found with ID:', productId);
            return;
        }

        const modalContent = `
        <img src="${product.image[0].imageSrc}" alt="${product.image[0].imageName}" class="modal-img">
            <h2>${product.name}</h2>
            <h4>${product.type}</h4>
            <h5>${product.price}</h5>
            <h6>Care Level: ${product.care}</h6>
            <div class="plant-care-container">
            <div class="plant-care"><p><span>Position:</span> <br><br> ${product.position}</p></div>
            <div class="plant-care"><p><span>Planting:</span> <br><br>  ${product.planting}</p></div>
            <div class="plant-care"><p><span>Plant Tips:</span> <br><br>  ${product.plantTips}</p></div></div>
            <button class="close-modal">Close</button>
        `;
        $('.modal-contents').html(modalContent);
        
        // Attach close event to close button
        $('.close-modal').on('click', function () {
            $('#details-modal')[0].close();
        });
    }

    // Attach close event to any existing close button
    $('.close-modal').on('click', function () {
        $('#details-modal')[0].close();
    });
});