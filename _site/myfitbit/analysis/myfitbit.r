# Fitbit analysis functions
#
# start with a data frame, my data
# - mydata: Data frame to analyze
#
# This is my first attempt to write an R function.
#

source("multiplot.r")

p1 <- qplot(minutesAsleep, minutesSedentary, data=mydata, color="red")
p2 <- qplot(minutesAsleep, minutesLightlyActive, data=mydata, color="orange")
p3 <- qplot(minutesAsleep, minutesFairlyActive, data=mydata, color="yellow")
p4 <- qplot(minutesAsleep, minutesVeryActive, data=mydata, color="green")
multiplot(p1, p2, p3, p4, cols=2)