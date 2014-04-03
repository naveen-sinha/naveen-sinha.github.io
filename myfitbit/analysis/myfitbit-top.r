# Fitbit analysis functions
#
# start with a data frame, my data
# - mydata: Data frame to analyze
#
# Create histograms of all the key data
#



# find the top 10 most active days
source("multiplot.r")

attributes(mydata)
attach(mydata)
newdata <- mydata[order(-steps),]
detach(mydata)
newdata[1:10, c('date','steps','minutesAsleep','caloriesIn')]

