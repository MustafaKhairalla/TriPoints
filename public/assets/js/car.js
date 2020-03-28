stateSelectEl = $("#stateSelect");
citySelectEl = $("#citySelect");
mainDivEl = $("#mainDiv")

// $(document).ready(() => {

// $.get("/api/all", function (data) {

//     if (data.length !== 0) {

//         // for (var i = 0; i < data.length; i++) {
//         //     // alert("hello");
//         //     // console.log("data from jquery:");
//         //     // console.log(data);
//         //     var row = $("<div>");
//         //     row.addClass("chirp");
//         //     // row.append("<p> chirped.. </p>");
//         //     row.append("<p>" + data[i].model + " chirped.. </p>");

//         //     $("#chirp-area").prepend(row);

//         // }
//         for (var i = 0; i < data.length; i++) {

//             var option = $("<option>");
//             option.val(data[i].id);
//             option.text(data[i].model);

//             $("#model-area").prepend(option);

//         }
//     }
//     $("#model-area").val("");
// });
// })


$(document).ready(() => {


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
        $("#model-area").val("");
    });

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

