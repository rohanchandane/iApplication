var ITV = ITV || {};
ITV.Module = ITV.Module || {};
ITV.Module.Search = ITV.Module.Search || {};
ITV.Module.Search.View = ITV.Module.Search.View || {};

ITV.Module.Search.View.SearchContainer = Backbone.View.extend({
    events: {
        "click button": "handleClick",
        "keypress input[type='text']": "handleKeypress"
    },

    initialize: function () {},

    handleClick: function () {
        this.model.set({ searchText: this.$el.find("input[type='text']").val() })
    },

    handleKeypress: function (e) {
        if (e.which === 13 || e.keyCode === 13) {
            this.handleClick();
        }
    }
});