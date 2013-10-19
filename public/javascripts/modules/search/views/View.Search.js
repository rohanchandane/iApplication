var ITV = ITV || {};
ITV.Module = ITV.Module || {};
ITV.Module.Search = ITV.Module.Search || {};
ITV.Module.Search.View = ITV.Module.Search.View || {};

ITV.Module.Search.View.SearchContainer = Backbone.View.extend({
    events: {
        "click button": "handleClick"
    },

    initialize: function () {},

    handleClick: function () {
        this.model.set({ searchText: this.$el.find("input[type='text']").val() })
    }
});