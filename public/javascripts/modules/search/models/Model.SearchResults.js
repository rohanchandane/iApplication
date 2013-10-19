var ITV = ITV || {};
ITV.Module = ITV.Module || {};
ITV.Module.Search = ITV.Module.Search || {};
ITV.Module.Search.Model = ITV.Module.Search.Model || {};

ITV.Module.Search.Model.SearchResults = Backbone.Model.extend({
    defaults:{
        key: "",
        totalCount: ""
    },

    initialize: function () {
        Backbone.Events.on('ITV.Module.Search.Service.SearchResultUpdated', this.updateModel, this);
    },

    updateModel: function (responseData) {
        this.set({ key: responseData.Result[0].Key, totalCount: responseData.Result[0].TotalCount });
    }
});