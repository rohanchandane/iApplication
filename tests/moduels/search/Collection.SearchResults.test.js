describe("Given Collection.Search", function () {
    describe("When Search Collection instantiates", function () {
        var SearchResultsCollection = ITV.Module.Search.Collection.SearchResults,
            searchResultsCollection;

        beforeEach(function () {
            searchResultsCollection = new SearchResultsCollection();
        });

        describe("When 'ITV.Module.Search.Service.SearchResultUpdated' event occurs with responseData", function() {
            var collectionData = [
                {
                    "Details": [
                        {
                            "Programme":{
                                "Programme": {
                                    "Title": "Afterlife"
                                },
                                "ImageUri": "http://www.itv.com/img/157x88/ITV-Player-9a86867a-f280-459e-8de4-4670b2ab260b.jpg",
                                "Channel": {
                                    "Name": "ITV3"
                                },
                                "MostRecentEpisode": "/Date(1382043600000)/",
                                "ShortSynopsis": "Alison and Robert answer a plea for help and expose a fake psychic. Alison is rid of her mother's ghost, but has lost her gift of communicating with the other world  "
                            }
                        }
                    ]
                },
                {
                    "Details": [
                        {
                            "Programme":{
                                "Programme": {
                                    "Title": "Almost Naked Animals"
                                },
                                "ImageUri": "http://www.itv.com/img/157x88/Almost-Naked-Animals-82d35bfa-009e-4cf2-9c17-3c17c306344c.jpg",
                                "Channel": {
                                    "Name": "CITV"
                                },
                                "MostRecentEpisode": "/Date(1381655400000)/",
                                "ShortSynopsis": "Piggy reluctantly helps Howie and Octo to finally win a role-playing game of Dirks and Dragons."
                            }
                        }
                    ]
                }
            ];
            var responseData = {
                "Result": collectionData
            };

            beforeEach(function () {
                Backbone.Events.trigger('ITV.Module.Search.Service.SearchResultUpdated', responseData);
            });

            it("Should update collection with 'Result' data", function () {
                var counter = 0;
                _.each(searchResultsCollection.models, function (model) {
                    expect(_.isEqual(model.get('Programme'), collectionData[counter].Details[0].Programme)).toEqual(true);
                    counter++;
                });
            });

        });
    });
});