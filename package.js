Package.describe({
    name: 'strikeout:lazyload-xt',
    version: '1.0.5',
    // Brief, one-line summary of the package.
    summary: 'Lazy load XT is a jQuery plugin for images, videos and other media',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    var c = 'client';

    api.versionsFrom('1.0.3.1');
    api.use(['jquery', 'spacebars', 'templating']);

    // core
    api.addFiles('lib/jquery.lazyloadxt.min.js', c);
    api.addFiles('lib/jquery.lazyloadxt.srcset.min.js', c);
    api.addFiles('lib/jquery.lazyloadxt.autoload.min.js', c);

    // addons
    api.addFiles('lib/jquery.lazyloadxt.picture.min.js', c);
    api.addFiles('lib/jquery.lazyloadxt.print.min.js', c);

    api.addFiles('lib/jquery.lazyloadxt.fadein.min.css', c);

    // meteor helper
    api.addFiles('lazy.html', c);
    api.addFiles('lazy.js', c);
    api.addFiles('lazy.css', c);
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('strikeout:slick');


});
