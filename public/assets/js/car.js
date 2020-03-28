stateSelectEl = $("#stateSelect");
citySelectEl = $("#citySelect");
mainDivEl = $("#mainDiv")
FindOutButtonEl = $("#findOutButton")



$(document).ready(() => {


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
                alert("boooooooo")
                $("#vehicleName").text(`The Total Cost of your ${data.model}`);
                var startPrice = parseInt(data.starting_price);
                var totalMaintenance = parseInt(data.total_cost);
                var totalCostOfVehicle = startPrice + totalMaintenance;
                console.log(`start price ${totalCostOfVehicle}`);
                $(".totalDollarValue").text(`$ ${totalCostOfVehicle}`);
                $("#price").text(`$ ${startPrice}`);
                $("#MaintenancePrice").text(`$ ${totalMaintenance}`);

                $("#stockphoto").attr("src", data.stockphoto);



            }
        });

    });

    // $("#model-area").val("");





    var cityList = [];
    var regGas = 0;
    var midGas = 0;
    var premoGas = 0;
    stateSelectEl.on("change", () => {
        var q = $(this).val();

        stateSelectEl.on("change", () => {
            var settings = {
                "method": "GET",
                "hostname": "api.collectapi.com",
                "port": null,
                "path": `/gasPrice/stateUsaPrice?state=${q}`,
                "headers": {
                    "content-type": "appliaction/json",
                    "authorization": "apikey 49PSi9LIungoODV0eCgFY1:6kRdisGS8DTmy0S8uTesMe"
                }
            }
            $.ajax(settings).done((response) => {
                console.log(response);
                regGas = response[0].gasoline;
                midGas = response[0].midGrade;
                premoGas = response[0].premium;

                for (i = 0; response.result.cities.length; i++) {
                    cityList.push(response.result.cities[i]);
                };
            }).then((cityList) => {
                var options = '';
                for (i = 0; i < cityList.length; i++) {
                    options += '<option value="' + cityList[i].name + '">' + cityList[i].name + '</option>';
                };
                citySelectEl.append(options);
            });

        });
    });
    $(citySelectEl).on("change", () => {

    })

});

