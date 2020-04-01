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
// //var number = 1557564534;
// document.body.innerHTML = number.toLocaleString();


            }
        });

    });
    // GET DEALERS INFO
    // $.get("/api/dealers", function (data2) {
    //     alert("dealers!!");
    //     getDealersInfo(data2);
    //     function getDealersInfo(data2) {
    //         var newDealer = {
    //             name: data2.name,
    //             phone_number: data2.hone_number,
    //             address: data2.address

    //         };

    //         $.ajax("/api/dealers", {
    //             type: "POST",
    //             data: newDealer
    //         }).then(function () {
    //             console.log("NDealers ready!");
    //             location.reload();
    //         });
    //     }
    // })


    // $.get("/api/dealers", function (data2) {

    //     if (data2.length !== 0) {

    //         for (var i = 0; i < data2.length; i++) {


    //             $("#dealerName").text(data2[i].name);
    //             // option.text(data[i].model);

    //             // $("#model-area").prepend(option);

    //         }
    //     }
    // });




  
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

