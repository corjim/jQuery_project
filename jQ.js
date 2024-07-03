// 1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”

$(function () {
    console.log(`Let’s get ready to party with jQuery!`)
})

// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head.

$('article img').addClass('image-center');

//   Remove the last paragraph in the article.

$('article p').eq(5).remove();


// Set the font size of the title to be a random pixel size from 0 to 100.

$('#title').css('font-size', Math.random() * 100);


// Add an item to the list; it can say whatever you want.

$("ol").append('<li>Sometimes I can say what I want</li>')


//  Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.


$('aside').empty().append('<p>Sorry for wasting your mb with the list </p>')


// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
});

// Add an event listener so that when you click on the image, it is removed from the DOM.

$('article').on('click', 'img', function () {
    $(this).remove()
});


//      PART TWO

/*
Build an application that uses jQuery to do the following:

- Contains a form with two inputs for a title and rating along with a button to submit the form.
- When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
- When the button to remove is clicked, remove each title and rating from the DOM.
*/


$('.container').ready(function () {
    let appForm = $('<div id ="app-form"></div>').appendTo('.container');

    $('form').on('submit', function (evt) {
        evt.preventDefault();

        //  Variable for input values
        let appTitle = $('#app-title').val();
        let appRating = $('#app-rating').val();

        //  Create list for outputs
        $(appForm).append(`<li> ${appTitle} - Rating: ${appRating} </li>`)


        // clears the input field
        $('#app-title').val('');
        $('#app-rating').val('');

        // create and append a remove button
        $('<button id = rmbtn>remove</button>').appendTo('li');
        $('button').addClass('button')

        // delegate for button removal.
        $('li').on('click', "#rmbtn", function () {
            $(this).parent().remove();
        })

    })
})
