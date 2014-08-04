$(document).ready(function () {
	$("#submit").click(function () {
		console.log("working");
		$.ajax({
			type : "GET",
			url : $("#textbox").val(),
			success : function () {
				$("#choose").html('');
				// linkify(text);
			},
			failure : function () {
				alert("You didn't put in a valid URL. Try again");
			}
		});
	});
});
