describe("Given View.SearchResults", function () {
    var html = [
        "<div id='searchResult'><div id='searchTerm'><span>Searched for:</span><span class='key'></span></div><div id='totalResults'><span>Total results:</span><span class='totalCount'></span></div><div id='results'>Search Results:<table></table></div></div>"
    ].join('');

    beforeEach(function () {
        $('body').append(html);
    });

    afterEach(function () {
        $('#searchResult').remove();
    });

    describe("When SearchResults View instantiates", function () {
        var SearchResults = ITV.Module.Search.View.SearchResults,
            searchResultsView,
            resultsModel = _.extend({}, Backbone.Events),
            resultsCollection = _.extend({}, Backbone.Events),
            spyUpdateSearchResults,
            spyResetSearchResults;


        beforeEach(function () {
            spyUpdateSearchResults = spyOn(SearchResults.prototype, "updateSearchResults");
            spyResetSearchResults = spyOn(SearchResults.prototype, "resetSearchResults");
            searchResultsView = new SearchResults({
                el: document.getElementById("searchResult"),
                model: resultsModel,
                collection: resultsCollection
            });

            searchResultsView.model = _.extend({
                key: 'AB12',
                totalCount: 20,
                get: function (param) {
                    if(param === 'key') {
                        return this.key
                    }
                    if(param === 'totalCount') {
                        return this.totalCount
                    }
                }
            }, resultsModel);

        });

        it("Should hide 'Searched for:' label", function () {
            expect(searchResultsView.$el.find('#searchTerm').css('display')).toBe('none');
        });

        it("Should hide 'Total results:' label", function () {
            expect(searchResultsView.$el.find('#totalResults').css('display')).toBe('none');
        });

        describe("When results model gets updated with value { key: 'AB12', totalCount: 20 }", function () {
            beforeEach(function () {

                searchResultsView.model.trigger('change');
            });
            it("Should update 'Searched for:' with value 'AB12' ", function () {
                expect(searchResultsView.$el.find('#searchTerm .key').text()).toBe('AB12');
            });
            it("Should update 'Total Results:' with value 20", function () {
                expect(searchResultsView.$el.find('#totalResults .totalCount').text()).toBe('20');
            });
        });

        describe("When results collection updated", function () {
            beforeEach(function () {
                searchResultsView.collection.trigger('reset');
            });

            it("Should call resetSearchResults", function () {
                expect(spyResetSearchResults).toHaveBeenCalled();
            });

            it("Should call updateSearchResults", function () {
                expect(spyUpdateSearchResults).toHaveBeenCalled();
            });
        });
    });

});