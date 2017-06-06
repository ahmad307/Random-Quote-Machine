
$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $("#btn").on("click", function () {
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
            $(".theQ").html(a[0].content + "<p>— " + a[0].title + "</p>")
        });
    }); 
});