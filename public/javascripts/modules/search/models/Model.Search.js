var ITV = ITV || {};
ITV.Module = ITV.Module || {};
ITV.Module.Search = ITV.Module.Search || {};
ITV.Module.Search.Model = ITV.Module.Search.Model || {};

ITV.Module.Search.Model.Search = Backbone.Model.extend({

    initialize: function () {
        this.on("change:searchText", this.callService, this);
    },

    callService: function () {
        if( this.get('service') ) {
            this.get('service').callService({
                searchText: this.get('searchText'),
                target: 'json',
                platform: 'dotcom'
            });
        }
    }
});