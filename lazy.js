//UI.registerHelper("img", function (path) {
//    return Meteor.status().connected;
//});


//$.lazyLoadXT.autoLoadTime = 1000 * 7;

Template.img.rendered = function () {
    $(this).lazyLoadXT();
};