from urllib.request import urlopen
from html.parser import HTMLParser
import tkinter as tk
# I used this to turn the straight pastes from Latin Library into single lines
# with the newlines escaped so that I can give them to a javascript string in texts.js.
# Give it input.txt with your paste, and it will give you output.txt with all the newlines
# escaped and in a single line. You can paste something new into input and type "go" when it's
# done and it will do it again without having to close, overwriting output.txt. 

# GIVE IT MORE PADDING AND THEN DO THE MANUAL BOX. ALSO, FIX THE ERROR. 
class URLParser(HTMLParser):
	def __init__(self, url):
		HTMLParser.__init__(self)
		self.url = url
		self.in_paragraph = False
		self.open = urlopen(url)
		self.output_buffer = ""
		self.header = False
		self.feed(r"\n".join([i.decode("UTF-8").replace("\n", "") for i in self.open if i.decode('UTF-8') != "\n"]).replace('"', r'\"').replace("  ", " ").replace("'", r"\'").replace(r"\n ", " "))
	def handle_starttag(self, tag, attrs):
		# Make it prevent pageheads from being included, and try to remove some of the extra newlines. 
		if dict(attrs).get("class", None) == None and tag == "p":
			self.in_paragraph = True
		elif tag == "b" or tag == "strong":
			self.header = True
	def handle_endtag(self, tag):
		if tag == "p":
			self.in_paragraph = False
		elif tag == "b" or tag == "strong":
			self.header = False
	def handle_data(self, data):
		if self.header:
			self.output_buffer += "<h3>{}</h3>".format(data)
		elif self.in_paragraph:
			self.output_buffer += data
	def output(self):
		return self.output_buffer
class URLFrame(tk.Frame):
	def __init__(self, root, command):
		tk.Frame.__init__(self, root)
		self.root = root
		self.command = command
		self.label = tk.Label(self, text="Enter a URL: ")
		self.label.pack(side="left")
		self.box = tk.Entry(self)
		self.box.pack(side="left")
		self.button = tk.Button(self, text="Parse", command=lambda: self.command(self.box.get()))
		self.button.pack(side="left")
def parseUrl(url):
	with open("output.txt", 'w') as f:
		parser = URLParser(url)
		f.write(parser.output())
root = tk.Tk()
frame = URLFrame(root, parseUrl)
frame.pack()
root.mainloop()

# I'm going to try to make a gui, so this will be unnecessary. 
# while True:
	# with open('input.txt', 'r') as f:
		# with open('output.txt', 'w') as o:
			# l = list(f)
			# for i in range(len(l)):
				# l[i] = str(l[i]).replace('\n','').replace('\'', r"\'").replace(r'"', r'\"')
			# o.write('\\n'.join(l))
			# if input('Next...').lower() != 'go':
				# break