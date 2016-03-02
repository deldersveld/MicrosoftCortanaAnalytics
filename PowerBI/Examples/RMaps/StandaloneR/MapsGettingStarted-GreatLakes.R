library(maps)
library(mapproj)
library(dplyr)

datasetRaw <- data.frame(read.csv("./data/FAAAirport.csv", stringsAsFactors = FALSE))
dataset <- select(datasetRaw, Latitude, Longitude, State, Elevation, StateName, Type)

stateList <- c("IL", "IN", "MI", "OH", "WI")
dataset <- filter(dataset, State %in% stateList, Type == c("AIRPORT"))
dataset <- unique(dataset)

par(mfrow=c(1,2), mar=c(0,0,0,0))
elevationMax <- max(dataset$Elevation)

map("state", col="#01B8AA", bg="#374649", proj="albers", param=c(39,45))
points(mapproject(dataset$Longitude, dataset$Latitude), col=NA, bg="#F2C80F", pch=21, cex=dataset$Elevation / elevationMax * 0.5)

map("county", dataset$StateName, col="#01B8AA", bg="#374649", proj="albers", param=c(39,45))
points(mapproject(dataset$Longitude, dataset$Latitude), col=NA, bg="#F2C80F", pch=21, cex=dataset$Elevation / elevationMax * 0.8)