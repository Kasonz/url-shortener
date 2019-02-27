$("#shorten").click(function () {

    var source = $("#source").val();

    $.post("/create", {
        source: source
        })
        .done(function (data) {
            alert("Data Loaded: " + data);
        });

});