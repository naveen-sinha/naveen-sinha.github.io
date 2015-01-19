# Fitbit analysis functions
#
# start with a data frame, my data
# - mydata: Data frame to analyze
#
# This creates plots for correlations between different variables from Fitbit
#

source("multiplot.r")

# plot correlations of sleep with activity
# p1 <- ggplot(mydata, aes(minutesAsleep, minutesSedentary)) + geom_point()
# p2 <- ggplot(mydata, aes(minutesAsleep, minutesLightlyActive)) + geom_point()
# p3 <- ggplot(mydata, aes(minutesAsleep, minutesFairlyActive)) + geom_point()
# p4 <- ggplot(mydata, aes(minutesAsleep, minutesVeryActive)) + geom_point()
# multiplot(p1, p2, p3, p4, cols=2)

# plot correlations of sleep with other variables
p1 <- ggplot(mydata, aes(minutesAsleep, minutesAwake)) + geom_point(color="blue") 
p1 <- p1 + xlab("Sleep (min.)") + ylab("Awake (min.)") + theme(legend.position='none') 
p2 <- ggplot(mydata, aes(minutesAsleep, minutesVeryActive)) + geom_point(color="red")
p2 <- p2 + xlab("Sleep (min.)") + ylab("Very active (min.)") + theme(legend.position='none') 
p3 <- ggplot(mydata, aes(minutesAsleep, steps)) + geom_point(color="yellow")
p3 <- p3 + xlab("Sleep (min.)") + ylab("Steps") + theme(legend.position='none') 
p4 <- ggplot(mydata, aes(minutesAsleep, caloriesIn)) + geom_point(color="green")
p4 <- p4 + xlab("Sleep (min.)") + ylab("Calories") + theme(legend.position='none') 
png("../plots/activity-corr.png")
multiplot(p1, p2, p3, p4, cols=2)
dev.off()

# plot correlations of time sedentary with other variables
# p1 <- ggplot(mydata, aes(minutesSedentary, minutesAwake)) + geom_point()
# p2 <- ggplot(mydata, aes(minutesSedentary, awakeningsCount)) + geom_point()
# p3 <- ggplot(mydata, aes(minutesSedentary, steps)) + geom_point()
# p4 <- ggplot(mydata, aes(minutesSedentary, caloriesIn)) + geom_point()
# multiplot(p1, p2, p3, p4, cols=2)

# plot correlations of time sedentary with other variables
# p1 <- ggplot(mydata, aes(caloriesIn, steps)) + geom_point()
# p2 <- ggplot(mydata, aes(caloriesIn, minutesAsleep)) + geom_point()
# p3 <- ggplot(mydata, aes(caloriesIn, minutesVeryActive)) + geom_point()
# p4 <- ggplot(mydata, aes(caloriesIn, minutesLightlyActive)) + geom_point()
# multiplot(p1, p2, p3, p4, cols=2)
