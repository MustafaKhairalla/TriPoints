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
    FindOutButtonEl.on("click", function () {
        window.scrollTo(0, 500);
        console.log("find button listener")
        alert("You clicked to find more")
    })

    // GETTING ALL CAR MODELS DISPLAYED FOR USER :

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

    // GETTING ID TO PULL DATA FROM DB AND DISPLAYING PRICES TO USER
    $("#model-area").on("change", function () {
        alert("model has been chosen!!!")
        var id = $(this).val();
        console.log("id chosen:");
        console.log(id);
        $.get("/api/posts/" + id, function (data) {
            if (data) {
                // alert("boooooooo")
                $("#vehicleName").text(`The Total Cost of your ${data.model}`);
                var startPrice = parseInt(data.starting_price);
                var totalMaintenance = parseInt(data.total_cost);
                var totalCostOfVehicle = startPrice + totalMaintenance;
                console.log(`start price ${totalCostOfVehicle}`);
                $(".totalDollarValue").text(`$ ${totalCostOfVehicle}`);
                $("#price").text(`$ ${startPrice}`);
                $("#MaintenancePrice").text(`$ ${totalMaintenance}`);

                $("#stockphoto").attr("src", data.stockphoto);
                mpg = data.MPG;


            }
        });

    });


  
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
   
    submitEl.on("click", function(event){
        event.preventDefault();
        console.log("submitted");
        console.log 
        dailyGas =  parseFloat(dailyGasEl.val());
        displayGas = ((mpg/dailyGas) * premoGas);
        gasPriceEl.text(displayGas);
    }); 

});

