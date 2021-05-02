# Fitbit heatmap calendar functions
#
# start with a data frame, my data
# - mydata: Data frame to analyze
#
# Set up the mydata frame for future analysis
#

library(ggplot2)
library(lubridate)

source("calendarCustom.r")
source("myfitbit-init.r")

# distance heat map
pdf("../plots/heat-distance.pdf")
calendarFlow(mydata$date, mydata$distance, palette="bluegray", main="Distance")
dev.off()

# activity (very) heat map
pdf("../plots/heat-activity.pdf")
calendarFlow(mydata$date, mydata$activity, palette="red", main="Activity")
dev.off()

# food heat map
pdf("../plots/heat-food.pdf")
calendarFlow(mydata$date, mydata$caloriesIn, palette="green", main="Calories")
dev.off()	

# sleep heat map
pdf("../plots/heat-sleep.pdf")
calendarFlow(mydata$date, mydata$timeInBed, palette="blue", main="Sleep")
dev.off()
