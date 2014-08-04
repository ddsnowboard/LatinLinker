from urllib.request import urlopen
from html.parser import HTMLParser
file = open('list.html', 'r')
for i in file:
	with open('index.html', 'a') as f:
		spot = 1
		f.write("<tr>")
		for i in file:
			f.write("<td>%s</td>" % i.replace('<br />', '').replace('<br>',''))
			if spot == 6:
				f.write("</tr><tr>")
				spot = 0
			spot+=1