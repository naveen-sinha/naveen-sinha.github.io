# Fitbit analysis functions
#
# start with a data frame, my data
# - mydata: Data frame to analyze
#
# Set up the mydata frame for future analysis
#

require(RCurl)
myCSV <- getURL("https://docs.google.com/spreadsheet/pub?key=0Asd8_SN6_H2ZdEp6N1pOWldiQWZVclhETWx0c25FZkE&single=true&gid=0&output=csv")
mydata <- read.csv(textConnection(myCSV))

mydata$date <- as.Date(mydata$date, "%m/%d/%Y")
mydata$days <- weekdays(mydata$date)
mydata$days_f = factor(mydata$days, levels=c('sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'))

mydata <- within(mydata, caloriesIn <- ifelse(is.na(caloriesIn), 0, caloriesIn))
mydata <- within(mydata, timeInBed <- ifelse(is.na(timeInBed), 0, timeInBed))