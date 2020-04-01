var stateSelectEl = $("#stateSelect");
var citySelectEl = $("#citySelect");
var gasPriceEl = $("#gasPrice");
var dailyGasEl = $("#dailyMiles");
var mainDivEl = $("#mainDiv")
var FindOutButtonEl = $("#findOutButton")
var submitEl = $("#submitButton");
var modelAreaEl = $("#model-area");

$(document).ready(() => {

    var premoGas = 0;
    var dailyGas = 0;
    var displayGas = 0;
    var mpg = 0;

    submitEl.on("click", function () {
        window.scrollTo(0, 1250);
        console.log("submit button listener")
        // alert("You clicked to find more")
    });
    FindOutButtonEl.on("click", function () {
        window.scrollTo(0, 500);
        console.log("find button listener")
        // alert("You clicked to find more")
    });

    // GETTING ALL CAR MODELS DISPLAYED FOR USER :

    $.get("/api/all", function (data) {

        if (data.length !== 0) {

            for (var i = 0; i < data.length; i++) {

                var option = $("<option>");
                option.val(data[i].id);
                option.text(data[i].model);

                $(".model-area").prepend(option);

            }
        }
    });

    // GETTING ID TO PULL DATA FROM DB AND DISPLAYING PRICES TO USER
    $("#model-area").on("change", function () {
        var id = $(this).val();
        console.log("id chosen:");
        console.log(id);
        $.get("/api/posts/" + id, function (data) {
            if (data) {
                // alert("boooooooo")
                $("#vehicleName").text(`The Total Cost of your ${data.model}`);
                var startPrice = parseInt(data.starting_price);
                var startPrice1 = parseInt(data.starting_price).toLocaleString();
                var totalMaintenance = parseInt(data.total_cost);
                var totalMaintenance1 = parseInt(data.total_cost).toLocaleString();
                var totalCostOfVehicle = (startPrice + totalMaintenance).toLocaleString();
                console.log(`start price ${totalCostOfVehicle}`);
                $(".totalDollarValue").text(`$ ${totalCostOfVehicle}`);
                $("#price").text(`$ ${startPrice1}`);
                $("#MaintenancePrice").text(`$ ${totalMaintenance1}`);
                $("#stockphoto").attr("src", data.stockphoto);
                mpg = data.MPG;
            }
        });

    }); ///// compare page////////////new jake
    $.get("/api/all", function (data) {

        if (data.length !== 0) {

            for (var i = 0; i < data.length; i++) {

                var option = $("<option>");
                option.val(data[i].id);
                option.text(data[i].model);

                $("#model-area").prepend(option);

            }
        }
    });
    $("#model-area").on("change", function () {
        var id = $(this).val();
        console.log("id chosen:");
        console.log(id);
        $.get("/api/posts/" + id, function (data) {
            if (data) {
                // alert("boooooooo")
                $("#vehicleName").text(`The Total Cost of your ${data.model}`);
                var startPrice = parseInt(data.starting_price);
                var startPrice1 = parseInt(data.starting_price).toLocaleString();
                var totalMaintenance = parseInt(data.total_cost);
                var totalMaintenance1 = parseInt(data.total_cost).toLocaleString();
                var totalCostOfVehicle = (startPrice + totalMaintenance).toLocaleString();
                var mpg1 = parseInt(data.MPG);
                console.log(`start price ${totalCostOfVehicle}`);
                $("#msrp1").text(`$ ${totalCostOfVehicle}`);
                $("#service1").text(`$ ${startPrice1}`);
                $("#service1").text(`$ ${totalMaintenance1}`);
                $("#comparephoto1").attr("src", data.stockphoto);
                var serviceIntervalsHead = "Service Intervals"
                $(".serviceIntervalsHead").text(serviceIntervalsHead);
                $("#fuel1").text(mpg1 + " MPG (Combined)");
                ////////////////////////////// jake input begin
                var tenk1 = parseInt(data.cost_10k);
                var twenk1 = parseInt(data.cost_20k);
                var thirk1 = parseInt(data.cost_30k);
                var fork1 = parseInt(data.cost_40k);
                var fifk1 = parseInt(data.cost_50k);
                var sixk1 = parseInt(data.cost_60k);
                $("#tenk1").text(`Service @ 10k Miles: $ ${tenk1}`);
                $("#twenk1").text(`Service @ 20k Miles: $ ${twenk1}`);
                $("#thirk1").text(`Service @ 30k Miles: $ ${thirk1}`);
                $("#fork1").text(`Service @ 40K Miles: $ ${fork1}`);
                $("#fifk1").text(`Service @ 50k Miles: $ ${fifk1}`);
                $("#sixk1").text(`Service @ 60k Miles: $ ${sixk1}`);
                mpg = data.MPG;
            }
        });
    });
    //second compare
    $.get("/api/all", function (data) {

        if (data.length !== 0) {

            for (var i = 0; i < data.length; i++) {

                var option = $("<option>");
                option.val(data[i].id);
                option.text(data[i].model);

                $("#model-area2").prepend(option);

            }
        }
    });
    $("#model-area2").on("change", function () {
        var id = $(this).val();
        console.log("id chosen:");
        console.log(id);
        $.get("/api/posts/" + id, function (data) {
            if (data) {
                // alert("boooooooo")
                $("#vehicleName").text(`The Total Cost of your ${data.model}`);
                var startPrice = parseInt(data.starting_price);
                var startPrice1 = parseInt(data.starting_price).toLocaleString();
                var totalMaintenance = parseInt(data.total_cost);
                var totalMaintenance1 = parseInt(data.total_cost).toLocaleString();
                var totalCostOfVehicle = (startPrice + totalMaintenance).toLocaleString();
                var mpg2 = parseInt(data.MPG);
                console.log(`start price ${totalCostOfVehicle}`);
                $("#msrp2").text(`$ ${totalCostOfVehicle}`);
                $("#service2").text(`$ ${startPrice1}`);
                $("#service2").text(`$ ${totalMaintenance1}`);
                $("#comparephoto2").attr("src", data.stockphoto);
                var serviceIntervalsHead2 = "Service Intervals"
                $(".serviceIntervalsHead2").text(serviceIntervalsHead2);
                $("#fuel2").text(mpg2 + " MPG (Combined)");
                //jake////////////////////////////
                var tenk2 = parseInt(data.cost_10k);
                var twenk2 = parseInt(data.cost_20k);
                var thirk2 = parseInt(data.cost_30k);
                var fork2 = parseInt(data.cost_40k);
                var fifk2 = parseInt(data.cost_50k);
                var sixk2 = parseInt(data.cost_60k);
                $("#tenk2").text(`Service @ 10k Miles: $ ${tenk2}`);
                $("#twenk2").text(`Service @ 20k Miles: $ ${twenk2}`);
                $("#thirk2").text(`Service @ 30k Miles: $ ${thirk2}`);
                $("#fork2").text(`Service @ 40K Miles: $ ${fork2}`);
                $("#fifk2").text(`Service @ 50k Miles: $ ${fifk2}`);
                $("#sixk2").text(`Service @ 60k Miles: $ ${sixk2}`);
                mpg = data.MPG;
            };
        });
    });
    /////////////////////////////////end of jake input



    $("#stateSelect").on("change", function () {
        // console.log("stuff");
        var q = $(this).val();
        console.log(q);
        $.get(`/api/get_price/${q}`, function (result) {
            if (result) {
                premoGas = parseFloat(result);
                console.log(premoGas);
            }
            else if (!result) {
                console.log("didn't get anything")
            }
        });
    });

    submitEl.on("click", function (event) {
        event.preventDefault();
        console.log("submitted");
        console.log(mpg)
        console.log(dailyGas)
        dailyGas = parseFloat(dailyGasEl.val());
        displayGas = ((dailyGas / mpg) * premoGas);
        gasPriceEl.text("$" + displayGas.toFixed(2) + " - Daily Gas Costs");


    });

});
