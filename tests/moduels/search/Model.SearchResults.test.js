describe("Given Model.SearchResults", function () {
    describe("When SearchResults Model instantiates", function () {
        var SearchResultsModel = ITV.Module.Search.Model.SearchResults,
            searchResultsModel;

        beforeEach(function () {
            searchResultsModel = new SearchResultsModel();
        });

        describe("When 'ITV.Module.Search.Service.SearchResultUpdated' event occurs with responseData", function() {
            var responseData = {
                "Result": [
                    {"Key": "AB12", "TotalCount": 20}
                ]
            };
            beforeEach(function () {
                Backbone.Events.trigger('ITV.Module.Search.Service.SearchResultUpdated', responseData);
            });

            it("Should update 'Key' attribute with 'AB12' ", function () {
                expect(searchResultsModel.get('key')).toEqual('AB12');
            });

            it("Should update 'TotalCount' attribute with 20", function () {
                expect(searchResultsModel.get('totalCount')).toEqual(20);
            });
        });
    });
});