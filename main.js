DARK_TEXT = "black";
LIGHT_TEXT = "rgb(220,220,220)";
DARK_BACKGROUND = "#444444";
LIGHT_BACKGROUND = "rgb(270, 240, 200)";
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
	$("#light").css("color", DARK_TEXT);
	$("#light").css("background-color", LIGHT_BACKGROUND);
	$("html").css("background-color", LIGHT_BACKGROUND);
	$("#dark").css("color", LIGHT_TEXT);
	$("#dark").css("background-color", DARK_BACKGROUND);
	$("#light").click(function () {
		$("html").css("background-color", LIGHT_BACKGROUND);
		$("#control").css('border', '1px solid black');
		$("html").css("color", DARK_TEXT);
		$(".text").css("color", DARK_TEXT);
	});
	$("#dark").click(function () {
		$("html").css("background-color", DARK_BACKGROUND);
		$("#control").css("border", "1px solid white");
		$("html").css("color", LIGHT_TEXT);
		$(".text").css("color", LIGHT_TEXT);
	});
});
