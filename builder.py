from urllib.request import urlopen
from html.parser import HTMLParser
file = open('input.txt', 'r')
input_file = list(file)
file.close()
pages = {}
list_file = list(open('list.html', 'r'))
def hasTable(file):
	for i in file:
		if str(i, encoding='utf-8').find('table') != -1:
			return True
	return False
class MyParser(HTMLParser):
	def start(self):
		self.last_link = ''
		self.last_name = ''
		self.pages = {}
	def handle_starttag(self, tag, attrs):
		self.last_link = "http://www.thelatinlibrary.com/"+attrs[0][1]
	def handle_data(self, data):
		self.last_name = data
		self.pages[self.last_name] = self.last_link
class OtherParser(HTMLParser):
	def start(self):
		self.d = {}
		self.go = False
		self.current_author = ''
		self.last_link = ''
		self.work_list = []
	def handle_starttag(self, tag, attrs):
		if tag == 'td':
			self.go = True
		elif tag == 'a':
			self.last_link = "http://www.thelatinlibrary.com/"+attrs[0][1]
	def handle_data(self, data):
		if self.go:
			self.work_list.append(data)
			self.go = False
			self.d[data] = self.last_link
parser = MyParser()
parser.start()
for j in input_file:
	parser.feed(j)
pages = parser.pages
other = OtherParser()
other.start()
for i, j in enumerate(list_file):
	try:
		url = urlopen(pages[j.replace('\n','')])
		if hasTable(url):
			other.work_list = []
			other.current_author = j
			for p in url:
				other.feed(str(p, encoding='utf-8'))
			list_file[i] = list_file[i]+','.join(other.work_list)
	except KeyError:
		list_file.pop(i)
with open('list1.txt', 'w') as f:
	for i in list_file:
		f.write(i)
with open('works.txt', 'w') as f:
	for i, j in other.d.items():
		f.write(i+':'+j)