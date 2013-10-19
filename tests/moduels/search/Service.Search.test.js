describe("Given Service.Search", function () {
    describe("When Search Service instantiates", function () {
        var SearchService = ITV.Module.Search.Service.Search,
            searchService,
            spyAjax;

        beforeEach(function () {
            spyAjax = spyOn($, 'ajax');
            searchService = new SearchService({
                serviceURL:"/search"
            });
        });

        describe("When callService called", function() {
            var data = {
                searchText: 'ab12',
                target: 'json',
                platform: 'dotcom'
            }

            beforeEach(function () {
                searchService.callService(data);
            });

            it("Should make an Ajax call", function () {
                expect(spyAjax).toHaveBeenCalled();
            });

            it("Should call ajax with serviceURL '/search' ", function () {
                expect($.ajax.mostRecentCall.args[0].url).toEqual('/search');
            });

            it("Should call ajax with data object passed", function () {
                expect(spyAjax.mostRecentCall.args[0].data).toEqual(data)
            });

            it("Should call ajax with success function", function () {
                expect(spyAjax.mostRecentCall.args[0].success).toEqual(jasmine.any(Function));
            });

            it("Should call ajax with error function  ", function () {
                expect(spyAjax.mostRecentCall.args[0].error).toEqual(jasmine.any(Function));
            });

        });
    });

    describe("When 'success' called with responseData received from server", function () {
        var SearchService = ITV.Module.Search.Service.Search,
            searchService,
            spyTrigger,
            successResponse = { success: true };

        beforeEach(function () {
            spyTrigger = spyOn(Backbone.Events, 'trigger');
            searchService = new SearchService({
                serviceURL: "/search"
            });

            searchService.searchSuccess(successResponse);
        });

        it("Should trigger 'ITV.Module.Search.Service.SearchResultUpdated' event", function () {
            expect(spyTrigger).toHaveBeenCalledWith("ITV.Module.Search.Service.SearchResultUpdated", successResponse);
        });
    });
});