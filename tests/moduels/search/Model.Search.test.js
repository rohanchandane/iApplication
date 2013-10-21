describe("Given Model.Search", function () {
    describe("When Search Model instantiates", function () {
        var SearchModel = ITV.Module.Search.Model.Search,
            searchModel,
            spyCallService,
            searchService = _.extend({
                callService: function () {}
            }, Backbone.Events);

        beforeEach(function () {
            searchModel = new SearchModel({
                service: searchService
            });

            spyCallService = spyOn(searchService, 'callService');

            // updating default value
            searchModel.set({searchText: 'somesearch'}, {silent: true});
        });

        describe("When Model's searchText value updated with '' (empty) ", function() {
            beforeEach(function () {
                searchModel.set({searchText: ''});
            });

            it("Should NOT call callService", function () {
                expect(spyCallService).not.toHaveBeenCalled();
            });
        });

        describe("When Model's searchText value updated with 'ab12' (not empty)", function() {
            beforeEach(function () {
                searchModel.set({searchText: 'ab12'});
            });

            it("Should call callService", function () {
                expect(spyCallService).toHaveBeenCalled();
            });
        });
    });
});