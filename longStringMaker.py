from urllib.request import urlopen
# I used this to turn the straight pastes from Latin Library into single lines
# with the newlines escaped so that I can give them to a javascript string in texts.js.
# Give it input.txt with your paste, and it will give you output.txt with all the newlines
# escaped and in a single line. You can paste something new into input and type "go" when it's
# done and it will do it again without having to close, overwriting output.txt. 
while True:
	with open('input.txt', 'r') as f:
		with open('output.txt', 'w') as o:
			l = list(f)
			for i in range(len(l)):
				l[i] = str(l[i]).replace('\n','').replace('\'', r"\'").replace(r'"', r'\"')
			o.write('\\n'.join(l))
			if input('Next...').lower() != 'go':
				break