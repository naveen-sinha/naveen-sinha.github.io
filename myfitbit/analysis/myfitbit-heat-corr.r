# Fitbit analysis functions
#
# start with a data frame, my data
# - mydata: Data frame to analyze
#
# This creates a correlation heat map from Fitbit data
#

# Load the required packages
# source("ggcorplot.R")
library("Correlplot")
library(corrplot)
require(lattice)
library(ggplot2)
library(reshape2)

# attach(mydata)
cols <- c(2, 7, 8, 9, 10, 11, 12)
inData <- mydata[cols]
colnames(inData) <- c("steps", "food", "rest", "light", "fair", "very", "sleep")
Var1 <- inData;
Var2 <- inData;

# print(attributes(inData))

# Var1=c(minutesSedentary, minutesLightlyActive, minutesFairlyActive, minutesVeryActive, minutesAsleep, steps, caloriesIn)
# Var2=c(minutesSedentary, minutesLightlyActive, minutesFairlyActive, minutesVeryActive, minutesAsleep, steps, caloriesIn)
# detach(mydata)

M <- cor(inData)
p <- corrplot.mixed(M)

# p <- qplot(x=Var1, y=Var2, data=melt(cor(inData)), fill=value, geom="tile")

png("../plots/corr-matrix.png")
corrplot.mixed(M)
dev.off()


# plotmatrix(mydata[cols])

# pairs(mydata[cols], pch = 21)

# print(attributes(mydata[cols]))

# corrgram(inData, order=TRUE, lower.panel=panel.shade,
#   upper.panel=panel.pie, text.panel=panel.txt,
#   main="Correlation of Fitbit data")

# qplot(x=mydata[cols], y=mydata[cols], data=melt(cor(mydata)), fill=value, geom="tile")


# p <- ggcorplot(data = inData, var_text_size = 5, cor_text_limits = c(5,10))
