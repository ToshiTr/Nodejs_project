$("#add_student_result").submit(function (event) {
    alert("Result inserted Successfully!!!");
})

$("#update_student_result").submit(function (event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function (n, i) {
        data[n['name']] = n['value'];
    })
    var request = {
        "url": `http://localhost:3000/api/update-result/${data.id}`,
        "method": "PUT",
        "data": data,
    }

    $.ajax(request).done(function (response) {
        alert("Result Updated Successfully!");
    })

});


if (window.location.pathname == "/") {
    $ondelete = $("table tbody td a.delete");
    $ondelete.click(function () {

        var id = $(this).attr("data-id");

        var request = {
            "url": `http://localhost:3000/api/delete-result/${id}`,
            "method": "DELETE"
        }

        if (confirm("Do you want to delete this result?")) {

            $.ajax(request).done(function (response) {
                alert("Result Deleted Successfully!");
                location.reload();
            })
        }
    })
}