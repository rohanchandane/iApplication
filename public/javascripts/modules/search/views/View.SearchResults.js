var ITV = ITV || {};
ITV.Module = ITV.Module || {};
ITV.Module.Search = ITV.Module.Search || {};
ITV.Module.Search.View = ITV.Module.Search.View || {};

ITV.Module.Search.View.SearchResults = Backbone.View.extend({
    initialize: function () {
        this.model.on('change', this.updateSearchStatus, this);
        this.collection.on('reset', this.handleSearchResultsUpdate, this);
        this.$el.find('#searchTerm').hide();
        this.$el.find('#totalResults').hide();
    },

    updateSearchStatus: function () {
        this.updateKey();
        this.updateTotalCount();
    },

    updateKey: function () {
        this.$el.find('#searchTerm').show();
        this.$el.find('#searchTerm .key').text(this.model.get('key'));
    },

    updateTotalCount: function () {
        this.$el.find('#totalResults').show();
        this.$el.find('#totalResults .totalCount').text(this.model.get('totalCount'));
    },

    handleSearchResultsUpdate: function () {
        this.resetSearchResults();
        this.updateSearchResults();
    },

    updateSearchResults: function () {
        this.searchResultsHtml = this.renderHtmlFromTemplate();
        this.$el.find('#results table').append(this.searchResultsHtml);
    },

    renderHtmlFromTemplate: function () {
        return _.template( $("#programTemplate").html(), { programList: this.collection.models });
    },

    resetSearchResults: function () {
        this.$el.find('#results table').empty();
    }

});