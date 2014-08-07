$(document).ready(function () {
	$("#submit").click(function () {
		var text = $("#text").val().split('\n');
		$("#entry").html('');
		
		var lineOffset = 1
			for (var i = 0; i < text.length; i++) {
				var line = text[i].split(' ');
				for (var j = 0; j < line.length; j++) {
					if (!(isNaN(line[j]))) {
						line.splice(j, 1);
					} else {

						line[j] = '<a href="http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword=' + line[j] + '" target="_blank">' + line[j] + '</a>';
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
		default:
		console.log($(this).html());
		}
		$("#submit").click();
	});
});
