# Fitbit analysis functions
#
# start with a data frame, my data
# - mydata: Data frame to analyze
#
# Create histograms of all the key data
#



# plot histograms of activity levels
source("multiplot.r")

p1 <- ggplot(mydata, aes(x=minutesSedentary, fill=..count..)) + theme(legend.position="none") 
p1 <- p1 + scale_fill_gradient("Count", low = "black", high = "blue") + geom_histogram(origin=0, binwidth=30) + xlab("Sedentary (min.)")

p2 <- ggplot(mydata, aes(x=minutesLightlyActive, fill=..count..)) + theme(legend.position="none")
p2 <- p2 + scale_fill_gradient("Count", low = "black", high = "red") + geom_histogram(origin=0, binwidth=10) + xlab("Lightly Active (min.)")

p3 <- ggplot(mydata, aes(x=minutesFairlyActive, fill=..count..)) + theme(legend.position="none")
p3 <- p3 + scale_fill_gradient("Count", low = "black", high = "yellow") + geom_histogram(origin=0, binwidth=10) + xlab("Fairly Active (min.)")

p4 <- ggplot(mydata, aes(x=minutesVeryActive, fill=..count..)) + theme(legend.position="none")
p4 <- p4 + scale_fill_gradient("Count", low = "black", high = "green") + geom_histogram(origin=0, binwidth=10) + xlab("Very Active (min.)")

png("../plots/activity-hist.png")
multiplot(p1, p3, p2, p4, cols=2)
dev.off()

# p1 <- ggplot(mydata, aes(x=minutesAsleep)) + geom_histogram()
# p2 <- ggplot(mydata, aes(x=minutesAwake)) + geom_histogram()
# p3 <- ggplot(mydata, aes(x=awakeningsCount)) + geom_histogram()
# p4 <- ggplot(mydata, aes(x=timeInBed)) + geom_histogram()
# multiplot(p1, p2, p3, p4, cols=2)

