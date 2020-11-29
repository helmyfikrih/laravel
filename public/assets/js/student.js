$(document).ready(function () {
    $("#example1").DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: base_url + "/student/getList",
            data: function (data) {
                data.params = {
                    filter: "TEST",
                };
            },
        },
        columns: [
            {
                data: "ID",
                name: "ID",
            },
            {
                data: "nama",
                name: "nama",
            },
            {
                data: "nim",
                name: "nim",
            },
            {
                data: "email",
                name: "email",
            },
        ],
    });
});
