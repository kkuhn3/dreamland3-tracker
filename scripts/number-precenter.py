import re

with open('./output.txt', 'w') as out:
	with open('../locations.css') as f:
		for line in f:
			numMatch = re.search('[0-9]+px', line)
			if (numMatch == None):
				out.write(line)
			else:
				topMatch = re.search('top', line)
				if (topMatch == None):
					num = int(numMatch.group()[0:-2]) / 21.70
					out.write('\tleft: ' + str(num) + '%;\n')
				else:
					num = int(numMatch.group()[0:-2]) / 8.32
					out.write('\ttop: ' + str(num) + '%;\n')
