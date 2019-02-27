$("#shortenBtn").click(function () {

    var source = $("#sourceInput").val();

    if ($.trim(source) === "") {
        alert("Please enter something!");
        return false;
    }

    $("#shortenBtn").addClass("is-loading");


    $.post("/create", {
            source: source
        })
        .done(function (data) {
            alert("Success: " + data);
            $("#shortenBtn").removeClass("is-loading");

        });

});