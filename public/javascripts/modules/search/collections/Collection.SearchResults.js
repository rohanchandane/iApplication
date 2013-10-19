var ITV = ITV || {};
ITV.Module = ITV.Module || {};
ITV.Module.Search = ITV.Module.Search || {};
ITV.Module.Search.Collection = ITV.Module.Search.Model || {};

ITV.Module.Search.Collection.SearchResults = Backbone.Collection.extend({
    initialize: function () {
        Backbone.Events.on('ITV.Module.Search.Service.SearchResultUpdated', this.updateCollection, this);
    },

    updateCollection: function (responseData) {
        this.reset(responseData.Result[0].Details);
    }
});