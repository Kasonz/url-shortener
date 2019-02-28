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

            //reload recent table
            app.loadRecords();

        });

});


// load recent 50 records
var app = new Vue({
    el: '#table',
    data: {
        results: [],
    },
    computed: {
        now: function () {
            return Date.now();
        }
    },
    watch: {

    },
    methods: {

        loadRecords: function () {

            // GET /someUrl
            this.$http.get('/recent').then(response => {

                // get body data
                this.results = response.body;

            }, response => {
                // error callback
            });

        }

    },
    created: function () {

    },
    init: function () {},
    mounted: function () {
        this.loadRecords();


    }
});