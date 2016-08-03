/* feedreader.js*/

$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('URL is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
            });
        });


        it('Name is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
            });
        });
    });


    /*  Write a new test suite named "The menu" */
    describe('The menu', function() {

        it('is hidden by default', function(){
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         it('is shown when icon is clicked', function(){
          $('a.menu-icon-link').click();
         expect($('body').hasClass('menu-hidden')).toBe(false);
       });

    });
    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

         beforeEach(function(done){
           loadFeed(1, done);
         });

         it('entry is in container', function(){
           expect($('.entry, .feed').length).toBeGreaterThan(0);
         });
    });

    /*  Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        var oldFeed;

         beforeEach(function(done){
           oldFeed = $('.feed').html();
           loadFeed(1, function(){
             done();
           });
       });

         it('content changes when feed is loaded', function(done){
           loadFeed(0, function(){
           expect($('.feed').html()).not.toBe(oldFeed);
           done();
         });
       });

    });
}());

//TODO: test everything,
//TODO: Re-write comments.
