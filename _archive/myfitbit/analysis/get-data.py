import urllib2
import csv

response = urllib2.urlopen('https://docs.google.com/spreadsheet/pub?key=0Asd8_SN6_H2ZdEp6N1pOWldiQWZVclhETWx0c25FZkE&single=true&gid=0&output=csv')
data = response.read()

f = open('mydata2.csv', 'wb')
f.write(data)
f.close



