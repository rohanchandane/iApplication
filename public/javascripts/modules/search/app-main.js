/**
 * Created by Rohan on 10/17/13.
 */

(function($) {

    $(function() {

        var searchService = new ITV.Module.Search.Service.Search({
            serviceURL: "/search"
        });
        var searchModel = new ITV.Module.Search.Model.Search({
            service: searchService
        });
        var searchResultCollection = new ITV.Module.Search.Collection.SearchResults();
        var searchResultsModel = new ITV.Module.Search.Model.SearchResults();

        var searchView = new ITV.Module.Search.View.SearchContainer({
            el: document.getElementById("searchContainer"),
            model: searchModel
        });

        var searchResultsView = new ITV.Module.Search.View.SearchResults({
            el: document.getElementById("searchResult"),
            model: searchResultsModel,
            collection: searchResultCollection
        });

    });

})(jQuery);