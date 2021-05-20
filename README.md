# node-project
Demo node-project to present the dockerization of node-project
# Lokális környezet
## A program akkor futtatható a lokális gépen, ha van node (node.js) telepítve. A programot node:14-el teszteltem. Ellenőrzés az alábbi paranccsal lehetséges
    node -v
## Ha van node a lokális környezetet létre kell hozni az alábbi parancs kiadásával
    npm install
## A project lokális futtatása node-project könyvtárból
    node app.js
## Megtekintés a böngészőben(app.js 18. sora tartalmazza a PORT számot):
    localhost:8080 
# Docker környezet
## Ha saját magad építed fel az image fájlt, akkor az alábbi parancsot kell kiadni a node-project könyvtárban 
    docker build -t azkomdocker/nodejs-image-demo .
## Az alábbi paranccsal nézheted meg, hogy elkészült-e az image fájl    
    docker images
## Az alábbi parancsot kiadhatod akkor is, ha nem csináltál (build) saját image fájlt. Ekkor a dockerhub-ról fogja leszedni.
    docker run --name nodejs-image-demo -p 80:8080 -d azkomdocker/nodejs-image-demo
## Az alábbi paranccsal nézheted meg, hogy fut-e a konténer
    docker ps
## Az alábbi paranccsal tudsz belépni a futó konténerbe, és "nézgelődhetsz". Ez egy nagyon karcsú alpine linux
    docker exec -it nodejs-image-demo sh
