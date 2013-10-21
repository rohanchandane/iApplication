var ITV = ITV || {};
ITV.Module = ITV.Module || {};
ITV.Module.Search = ITV.Module.Search || {};
ITV.Module.Search.Model = ITV.Module.Search.Model || {};

ITV.Module.Search.Model.Search = Backbone.Model.extend({

    defaults: {
        searchText: ""
    },

    initialize: function () {
        this.on("change:searchText", this.updateServiceParams, this);
    },

    updateServiceParams: function () {
        console.log('calling service');
        if(this.validate( this.get('searchText') )) {
            if( this.get('service') ) {
                this.get('service').callService({
                    searchText: this.get('searchText'),
                    target: 'json',
                    platform: 'dotcom'
                });
            }
        }

    },

    validate: function (attr) {
        if( attr !== "" ) {
            return true;
        } else {
            return false;
        }
    }
});