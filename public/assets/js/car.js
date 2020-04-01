var stateSelectEl = $("#stateSelect");
var citySelectEl = $("#citySelect");
var mainDivEl = $("#mainDiv")
var FindOutButtonEl = $("#findOutButton")

//res.sendFile(path.join(__dirname, "../views/Login.handlebars"));



$(document).ready(() => {

    $("#loginbtn").on("click", function () {
        $.get("/login", function (data) {
            window.location.replace("/login");
        })

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
                    var startPrice1 = parseInt(data.starting_price).toLocaleString();
                    var totalMaintenance = parseInt(data.total_cost);
                    var totalMaintenance1 = parseInt(data.total_cost).toLocaleString();
                    var totalCostOfVehicle = (startPrice + totalMaintenance).toLocaleString();
                    console.log(`start price ${totalCostOfVehicle}`);
                    $(".totalDollarValue").text(`$ ${totalCostOfVehicle}`);
                    $("#price").text(`$ ${startPrice1}`);
                    $("#MaintenancePrice").text(`$ ${totalMaintenance1}`);

                    $("#stockphoto").attr("src", data.stockphoto);
                    // //var number = 1557564534;
                    // document.body.innerHTML = number.toLocaleString();


                }
            });

        });
        // GET DEALERS INFO
        $.get("/api/dealers", function (data2) {
            alert("dealers!!");
            $("#footer")
        })

        // $("#model-area").val("");
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
//});
