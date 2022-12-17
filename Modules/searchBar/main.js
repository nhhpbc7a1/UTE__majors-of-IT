var items=[];
$.getJSON('/Data.json', function (json) {
for (var key in json) {
if (json.hasOwnProperty(key)) {
    var item = json[key];
    items.push(item.Name,);            
}
}

window.onscroll = function() {

    var body = document.body; //IE 'quirks'
    var document = document.documentElement; //IE with doctype
    document = (document.clientHeight) ? document : body;

    if (document.scrollTop == 0) {
        alert("top");
    }        
};

});
$("#searchBox").keyup(
    function () {
        $("#searchItem").empty();
        console.log($("#searchBox").val().toLowerCase().trim())
        for (var i = 0; i < items.length; i++) {
            if (items[i].toLocaleLowerCase().includes($("#searchBox").val().toLowerCase().trim()) && $("#searchBox").val().toLowerCase().trim().length > 0) {
                $("#searchItem").append("<p class=\"item\" > " + items[i] + "</p>")
            }
        }
    }
)


