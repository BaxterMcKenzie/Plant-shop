/* jshint esversion: 6 */

// Document Ready function - ensure the HTML is fully loaded before trying to use any JS

// $ = getElement or querySelector

// Grab the document (HTML) and check it is ready:

$(document).ready(function () {
    // ALL JS is placed inside of here

    // FULL PAGE INITIALISATION
    $('#fullpage').fullpage({
        //License
        licenceKey: 'gplv3-license',
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        // turn on navigation arrows:
        // navigation: true, // comment out or remove to remove nav arrows
        controlArrows: false,
    });

    //methods
    $.fn.fullpage.setAllowScrolling(false); // prevent scroll of sections and slides

    //  Function to move to the specified section
    function moveToSection(number) {
        fullpage_api.moveTo(number); // allows you to move sections or "jump"
    }

    $('#goToSection1').click(function () {
        moveToSection(1);
    });

    $('#goToSection2').click(function () {
        moveToSection(2);
    });


    // Move to slide # - first number is section, second is slide -zero indexed for slides
    $('#goToSlide1').click(function () {
        fullpage_api.moveTo(1, 0);
    });

    $('#goToSlide2').click(function () {
        fullpage_api.moveTo(1, 1);
    });

    // Set up a Variable to track the user
    let user;

    // Click on the submit button:
    $('#submitButton').click(function (event) {
        event.preventDefault();
        console.log('working');

        // Setup Regex for form Validation:
        const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const yesNoRegex = /^yes$|^Yes$/;

        // Get input values
        const username = $('#username').val();
        const password = $('#password').val();
        const yesNo = $('#yesNo').val();

        console.log(username + password + yesNo);

        // Test aginst Regex for form validation
        if (!usernameRegex.test(username)) {
            $('#formMessage').html(`<p>'Invalid username. Must be 3-15 characters long and contain only letters, numbers, and underscores.'</p>`);
        } else if (!passwordRegex.test(password)) {
            $('#formMessage').html(`<p>'Password must be at least 8 characters long and contain both letters and numbers.'</p>`);
        } else if (!yesNoRegex.test(yesNo)) {
            $('#formMessage').html(`<p>'You must like plants to enter'</p>`);
        } else {
            // Passes all the regex tests:
            $('#formMessage').html('');

            // Move to slide 2 of section 1
            fullpage_api.moveTo(2, 0); // Slide 2
        }
    });

    function checkForLoggedInUser() {
        if (!user) {
            console.log("log in");
        } else {
            console.log(user);
            $('#slide2').html(``);
        }
    }

    checkForLoggedInUser(); // because no vlaue is assigned to user it treats it as false

    const products = [{
            id: 1,
            name: 'OX TONGUE',
            price: '$16.41',
            type: 'Succulent',
            care: '<i class="fa-solid fa-leaf"></i>',
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

    ];

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

            $('#results').append(productcard);

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