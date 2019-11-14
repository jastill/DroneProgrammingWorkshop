# DroneProgrammingWorkshop
Drone programming workshop aimed at grade 6-12

## DJI Tello Edu Drone

Small safe drone that has an [SDK](https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello%20SDK%202.0%20User%20Guide.pdf) and tools for programming.

https://store.dji.com/product/tello-edu?vid=47091 

## Node-RED
[Node-RED](https://nodered.org/) is a programming tool for wiring devices together. We use it in this workshop to control a Tello Drone and try to perform various tasks.

We use the Flows with Node-RED to interact with the Drone sending commands and receiving status.

# Running the workshop

The Tello Drone is controlled via UDP messages over a wifi connection with the Drone as the access Point. 
This allows the workshop to be run from a single computer.
