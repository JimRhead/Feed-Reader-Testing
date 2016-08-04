/* feedreader.js */

$(function() {
    //test that all our RSS Feeds, URLs, and names are defined
    describe('RSS Feeds', function() {

        //tests that all RSS feeds are defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //tests that all URLs are defined
        it('URL is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        //tests that all names are defined
        it('Name is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    //tests that menu is hidden by default and toggles when clicked
    describe('The menu', function() {

        //tests that the menu is hidden by default
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        //tests that the menu toggles when clicked
        it('menu toggles when clicked', function() {

            //shows menu when clicked
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // hides menu when clicked again
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });

    });

    //tests that when loadFeed function is called and completes it work, there is an .entry element within the .feed container
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(1, done);
        });

        //tests that .entry is in .feed container
        it('entry is in container', function() {
            expect($('.entry, .feed').length).toBeGreaterThan(0);
        });
    });

    //tests whether new feed is loaded, content actually changes
    describe('New Feed Selection', function() {
        var oldFeed;
        //before loadFeed runs, stores old entry
        beforeEach(function(done) {
            oldFeed = $('.feed').html();
            loadFeed(1, done);
        });

        //tests that content changes when feed is loaded
        it('content changes when feed is loaded', function(done) {
            loadFeed(0, function() {
                expect($('.feed').html()).not.toBe(oldFeed);
                done();
            });
        });

    });
}());
