LatinLinker
===========
#I'm calling it on this, I have no idea what I'm doing. Maybe if I can think better, I'll be able to do it, but surely not now. 

So, where I was was that I was trying to pretty much recreate the LatinLibrary website so I could have all the texts locally on the site itself because javascript can't get outside websites. I had a python script that would do it partially, but there was too much to think about and I couldn't think about it all at once. Maybe another day. 
A webapp that takes a link to a page from LatinLibrary or similar and shows it with all the words as links to their Whitaker's Words definitions. 


#Specification

The main page will be a text entry box and a "Submit" button in the beginning, followed by a setup very similar to thelatinlibrary.com by the end, where you can pick author, text, and chapter/book. Then, it will be formatted almost exactly like [this page](http://www.thelatinlibrary.com/vergil/aen1.shtml), but every individual word, except for the headers and line numbers, will be a link to the page for it on William Whitaker's Words. 

*Technical Note:* The format for the dictionary entry on Whitaker's Words is "http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword=%s", where %s is the word. 

Ideally, it would have the text on the left hand side, and then the dictionary entry would pop up not in a new window but on the right side. 

![Diagram](http://i.imgur.com/UkumsoR.png)
