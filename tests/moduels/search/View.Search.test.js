describe("Given View.Search", function () {
    var html = [
        "<div id='container'><span>Enter TV Programs</span><input type='text'><button value='submit' type='submit'>Search</button></div>"
    ].join('');

    beforeEach(function () {
        $('body').append(html);
    });

    afterEach(function () {
        $('#container').remove();
    });

    describe("When Search View instantiates", function () {
        var SearchContainer = ITV.Module.Search.View.SearchContainer,
            searchContainerView,
            searchModel = _.extend({
                set: function(){}
            }, Backbone.Events),
            spySet;

        beforeEach(function () {
            searchContainerView = new SearchContainer({
                el: document.getElementById("container"),
                model: searchModel
            });

            spySet = spyOn(searchContainerView.model, 'set');
        });

        describe("When user enters value 'ab12' for text box", function () {
            beforeEach(function () {
                searchContainerView.$el.find("input[type='text']").val('ab12');
            });

            describe("And click on 'Search' button", function () {
                beforeEach(function () {
                    searchContainerView.$el.find("button").click();
                });

                it("Should save value of search into model", function () {
                    expect(spySet).toHaveBeenCalledWith({ searchText: 'ab12' });
                });
            });

            describe("And press 'Enter' button", function () {
                beforeEach(function () {
                    var e = jQuery.Event("keypress");
                    e.which = 13;
                    e.keyCode = 13;
                    console.log(e);
                    searchContainerView.$el.find("input[type='text']").trigger(e);
                });

                it("Should save value of search into model", function () {
                    expect(spySet).toHaveBeenCalledWith({ searchText: 'ab12' });
                });
            });
        })
    });

});