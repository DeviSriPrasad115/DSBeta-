install.packages("shiny")
library(shiny)
ui<-fluidPage(
  sidebarLayout(
    sidebarPanel = sidebarPanel("replacing"),
    mainPanel=mainPanel("dvr")
  )
)
server<-function(input,output){
  
}
shinyApp(ui=ui,server = server)
