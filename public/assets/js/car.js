stateSelectEl = $("#stateSelect");
citySelectEl = $("#citySelect");
gasPriceEl = $("#gasPrice");
dailyGasEl = $("#dailyMiles");
mainDivEl = $("#mainDiv")
FindOutButtonEl = $("#findOutButton")
submitEl = $("#submitButton");


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
    $("#stateSelect").on("change", function () {
        console.log("stuff");
        var q = $(this).val();

        var cityList = [];
        $.get("/api/get_price/" + q, function (result) {
            if (result) {
                console.log(result)
            }
            else if(!result){
                console.log("didn't get anything")
            }



            // console.log(`data: ${data}`);
            // if (data) {
            //     console.log("inside api call");
            //     console.log(data);
            // };

            // console.log(data);
            // console.log(`${q} selected`);
            // $.ajax(data).done(function (response) {
            //     console.log(response);


            //     for (i = 0; response.result.cities.length; i++) {
            //         cityList.push(response.result.cities[i]);
            //     };
            //     console.log("city list:" + cityList);
            // }).then(function(cityList) {
            //     console.log(cityList);
            //     var options = '';
            //     for (i = 0; i < cityList.length; i++) {
            //         options += '<option value="' + cityList[i].name + '">' + cityList[i].name + '</option>';
            //     };
            //     citySelectEl.append(options);
            // });
        });
        // }).then(function (data) {
        //     console.log(`Data: ${data}`);
        //     for (i = 0; i < data.length + 1; i++) {
        //         cityList.push(data[i]);
        //     }
        //     console.log(cityList);
        // });


    });
    $(citySelectEl).on("change", function () {

        var currentCity = $(this).text();
        var id = $(this).val();
        console.log(`${currentCity} selected`);
        cityList.forEach(name => {
            if (name === currentCity) {
                regGas = cityList.gasoline;
                midGas = cityList.midGrade;
                premoGas = cityList.premium;
            }
        });
        $.get(`api/post/${id}`, (data) => {
            dailyGas = dailyGasEl.text();
            var gasPrice = premoGas * data.MPG * dailyGas;
            gasPriceEl = "<p> Daily gas cost:" + gasPrice + "</p>" + "<p> Year gas cost: " + gasPrice * 365 + "</p>";
        })

    });

});

