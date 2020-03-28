// $(document).ready(function () {

//     var modelInput = $("#model-area")
//     // Adding an event listener for when the form is submitted
//     $("#submitform").on("submit", function handleFormSubmit(event) {
//         event.preventDefault();
//         // Wont submit the post if we are missing a body or a title
//         if (!modelInput.val().trim()) {
//             return;
//         }
//         // Constructing a newPost object to hand to the database
//         var newPost = {
//             model: modelInput.val().trim(),

//         };

//         console.log(newPost);

//         submitForm(newPost);
//     });
//     function submitForm(post) {
//         $.post("/api/posts", post, function () {
//             console.log("created new post");
//             location.reload()
//         })
//     }


//     $.get("/api/posts/" + id, function (data) {
//         if (data) {

//             postModelSelect.val(data.model);

//         }
//     });


// })