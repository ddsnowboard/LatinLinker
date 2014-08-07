from urllib.request import urlopen
while True:
	with open('input.txt', 'r') as f:
		with open('output.txt', 'w') as o:
			l = list(f)
			for i in range(len(l)):
				l[i] = str(l[i]).replace('\n','').replace('\'', r"\'")
			o.write('\\n'.join(l))
			if input('Next...') != 'go':
				break