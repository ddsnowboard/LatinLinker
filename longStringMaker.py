from urllib.request import urlopen
with open('input.txt', 'r') as f:
	with open('output.txt', 'w') as o:
		for i in f:
			url = urlopen(i)
			l = list(url)
			for i in range(len(l)):
				l[i] = str(l[i]).replace('\n', '\\n')
			for i in l:
				o.write(repr(i))
			input('Next...')