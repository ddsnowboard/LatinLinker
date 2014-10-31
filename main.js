$(document).ready(function () {
	$("#submit").click(function () {
		var text = $("#text").val().split('\n');
		$("#entry").html('');

		var lineOffset = 1;
		for (var i = 0; i < text.length; i++) {
			var line = text[i].split(' ');
			for (var j = 0; j < line.length; j++) {
				if (!(isNaN(line[j]))) {
					line.splice(j, 1);
				} else {

					line[j] = '<a class="text" href="http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword=' + line[j] + '" target="_blank">' + line[j] + '</a>';
				}
			}
			text[i] = line.join(' ');
			if (text[i] === '') {
				$("#table").append("<tr><td></tr></td>");
				lineOffset--;
			} else {
				$("#table").append("<tr><td>" + (i + lineOffset).toString() + "</td><td>" + text[i] + '</td></tr>');
			}
		}
	});
	$("td").click(function () {
		$("#control").css("visibility", 'visible');
		switch ($(this).html()) {
		case "Aeneid Book I":
			$("#text").val(AeneidI);
			break;
		case "Aeneid Book II":
			$("#text").val(AeneidII);
			break;
		case "Aeneid Book IV":
			$("#text").val(AeneidIV);
			break;
		case "DBG Book I":
			$("#text").val(DBGI);
			break;
		case "DBG Book IV":
			$("#text").val(DBGIV);
			break;
		case "DBG Book VI":
			$("#text").val(DBGVI);
			break;
		case "Aeneid Book VI":
			$("#text").val(AeneidVI);
			break;
		default:
			console.log($(this).html());
		}
		$("#submit").click();
	});
	$("#light").click(function () {
		$("html").css("background-color", "white");
		$("#control").css('border', '1px solid black');
		$("html").css("color", "black");
		$(".text").css("color", "black");
	});
	$("#dark").click(function () {
		$("html").css("background-color", "#555555");
		$("#control").css("border", "1px solid white");
		$("html").css("color", "white");
		$(".text").css("color", "white");
	});
});
