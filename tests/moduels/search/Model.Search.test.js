describe("Given Model.Search", function () {
    describe("When Search Model instantiates", function () {
        var SearchModel = ITV.Module.Search.Model.Search,
            searchModel,
            spyCallService;

        beforeEach(function () {
            spyCallService = spyOn(SearchModel.prototype, 'callService');
            searchModel = new SearchModel();
        });

        describe("When Model's searchText value updated", function() {
            beforeEach(function () {
                searchModel.trigger('change:searchText');
            });

            it("Should call callService", function () {
                expect(spyCallService).toHaveBeenCalled();
            });
        });
    });
});