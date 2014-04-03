# Fitbit analysis functions
#
# start with a data frame, my data
# - mydata: Data frame to analyze
#
# This separates the data from Fitbit according to day of the week
#

library(scales)

# steps
p <- ggplot(mydata, aes(date, steps, fill=(weekdays(date)), alpha=factor(steps))) + geom_bar(stat="identity", width=5)
p + facet_grid(days_f ~ .) + theme(legend.position='none') + xlab('Date') + ylab('Steps') + labs(title="Steps per day")
ggsave(file="../plots/steps-by-day.png")

# minutes asleep
p <- ggplot(mydata, aes(date, minutesAsleep, fill=(weekdays(date)), alpha=factor(minutesAsleep))) + geom_bar(stat="identity", width=5)
p + facet_grid(days_f ~ .) + theme(legend.position='none') + xlab('Date') + ylab('Time asleep (min.)') + labs(title="Sleep per day")
ggsave(file="../plots/sleep-by-day.png")

# minutes very active
p <- ggplot(mydata, aes(date, minutesVeryActive, fill=(weekdays(date)), alpha=factor(minutesVeryActive))) + geom_bar(stat="identity", width=5)
p + facet_grid(days_f ~ .) + theme(legend.position='none') + xlab('Date') + ylab('Time very active (min.)') + labs(title="Time very active per day")
ggsave(file="../plots/very-active-by-day.png")

# calories consumed
p <- ggplot(mydata, aes(date, caloriesIn, fill=(weekdays(date)), alpha=factor(caloriesIn))) + geom_bar(stat="identity", width=5)
p + facet_grid(days_f ~ .) + theme(legend.position='none') + xlab('Date') + ylab('Calories') + labs(title="Calories consumed per day")
ggsave(file="../plots/calories-by-day.png")