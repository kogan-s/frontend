var classData = {
    classmates: [
        {name: "That on gal", description: "Always has the ansswer"},
        {name: "The weird dude", description: "Quick with a smile"},
        {name: "Taylor", description: "Just Taylor"}
    ]
}

var source = $('#class-template').html();
var template = Handlebars.compile(source);
var newHTML = template(classData);

// append our new html to the page
$('.classroom').append(newHTML);