var ITV = ITV || {};
ITV.Module = ITV.Module || {};
ITV.Module.Search = ITV.Module.Search || {};
ITV.Module.Search.Service = ITV.Module.Search.Service || {};

ITV.Module.Search.Service.Search = Backbone.Model.extend({
    defaults: {
        "serviceURL" : ""
    },

    callService: function (searchData) {
        var ajaxParam = {
            url: this.get('serviceURL'),
            type: 'GET',
            cache: false,
            success: this.searchSuccess,
            error: this.searchFail,
            timeout: 10000,
            data: searchData,
            dataType: 'json'

        }
        $.ajax(ajaxParam);
    },

    searchSuccess: function (responseData) {
        Backbone.Events.trigger('ITV.Module.Search.Service.SearchResultUpdated', responseData);
    },

    searchFail: function () {
    }
});