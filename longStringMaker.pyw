from urllib.request import urlopen
from html.parser import HTMLParser
import tkinter as tk
# I used this to turn the straight pastes from Latin Library into single lines
# with the newlines escaped so that I can give them to a javascript string in texts.js.
# Give it input.txt with your paste, and it will give you output.txt with all the newlines
# escaped and in a single line. You can paste something new into input and type "go" when it's
# done and it will do it again without having to close, overwriting output.txt. 
class URLParser(HTMLParser):
	def __init__(self, url):
		self.url = url
		self.open = urlopen(url)
		self.feed(self.open.readlines())
		self.current_tag = []
		self.output_buffer = ""
	def handle_starttag(self, tag):
		self.current_tag.append(tag)
	def handle_endtag(self, tag):
		for i in range(1, len(self.current_tag)+1):
			if self.current_tag[-1*i] == tag:
				self.current_tag.pop(-1*i)
				break
	def handle_data(self, data):
		if self.current_tag[-1] == "p":
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