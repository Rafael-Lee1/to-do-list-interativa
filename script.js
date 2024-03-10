// script.js
$(document).ready(function() {
    $("#addTask").click(function() {
        var taskText = $("#newTask").val();
        if (taskText !== "") {
            $("#taskList").append("<li>" + taskText + "</li>");
            $("#newTask").val("");
        }
    });

    $("#taskList").on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});
