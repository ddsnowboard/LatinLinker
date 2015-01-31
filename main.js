DARK_TEXT = "black";
LIGHT_TEXT = "rgb(220,220,220)";
DARK_BACKGROUND = "#444444";
LIGHT_BACKGROUND = "rgb(270, 240, 200)";
var text_groups = {
	"Vergil" : {
		"Aeneid Book I" : AeneidI,
		"Aeneid Book II" : AeneidII,
		"Aeneid Book IV" : AeneidIV,
		"Aeneid Book VI" : AeneidVI,
	},
	"Caesar" : {
		"DBG Book I" : DBGI,
		"DBG Book IV" : DBGIV,
		"DBG Book V" : DBGV,
		"DBG Book VI" : DBGVI
	},
	"Other" : {
		"Catullus" : CATULLUS,
		"De Fato" : DEFATO,
		"Sermones" : SERMONES,
	}
};
$(document).ready(function () {
	for (author in text_groups) {
		if (text_groups.hasOwnProperty(author)) {
			$("#documents").append("<tr><th>" + author + "</th><td class=\"arrow\"><img src=\"down.png\" class=\"arrow\"/></td></tr>");
			for (text in text_groups[author]) {
				if (text_groups[author].hasOwnProperty(text)) {
					$("#documents").append("<tr><td class=" + author + ">" + text + "</tr></td>");
				}
			}
		}
		$("." + author + ":not(.arrow)").parent().hide()
		$("." + author + ":not(.arrow)").click(function () {
			$("#text").val(text_groups[this.className][$(this).html()]);
			console.log(this.innerHTML);
			$("#submit").click();
		})
	}
	$("th").click(function () {
		$("td:not(.arrow)").hide().parent().hide();
		$("." + $(this).html()).show().parent().show();
	});

	$("#submit").click(function () {
		var text = $("#text").val().split('\n');
		$("#entry").html('');
		var lineOffset = 1;
		for (var i = 0; i < text.length; i++) {
			var line = text[i].split(' ');
			for (var j = 0; j < line.length; ++j) {
				if (!(isNaN(line[j]))) {
					line.splice(j, 1);
				} else {
					line[j] = '<a class="text" href="http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword=' + line[j] + '" target="_blank">' + line[j] + '</a>';
				}
			}
			text[i] = line.join(' ');
			if (text[i] === '') {
				$("#table").append("<tr><td></tr></td>");
				--lineOffset;
			} else {
				$("#table").append("<tr><td>" + (i + lineOffset).toString() + "</td><td>" + text[i] + '</td></tr>');
			}
		}
	});
	$("#text").css("margin-right", $("#control").width() + 5);
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
