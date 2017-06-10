var quote="";
var right=false;

$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    
    $("#btn").on("click", function () {
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
            $(".theQ").html(a[0].content + "<p>— " + a[0].title + "</p>")
            quote+=$(".theQ").text();
            right=true;
        });
    }); 
    
    $("#twitter").on("click",function(){
        if (right===false) quote+="All great achievements require time. -Maya Angelou";
        $("#twitter").attr("href",'https://twitter.com/intent/tweet?text='+'"'+quote+'"');
    });
    
    $("#tumblr").on("click",function(){
        $("#tumblr").attr("href",'https://www.tumblr.com/widgets/share/tool?caption='+'"'+quote+'"'+' &canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
    });
});