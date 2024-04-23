#!/bin/bash


echo "  _______  __    __  .__   __.  __  ___ ____    ____  .___________.    ___   ____    ____  _______ .______      .__   __.     _______  .______  "
echo " |   ____||  |  |  | |  \ |  | |  |/  / \   \  /   /  |           |   /   \  \   \  /   / |   ____||   _  \     |  \ |  |    |       \ |   _  \ "
echo " |  |__   |  |  |  | |   \|  | |  '  /   \   \/   /   \`---|  |----\`  /  ^  \  \   \/   /  |  |__   |  |_)  |    |   \|  |    |  .--.  ||  |_)  |"
echo " |   __|  |  |  |  | |  . \`  | |    <     \_    _/        |  |      /  /_\  \  \      /   |   __|  |      /     |  . \`  |    |  |  |  ||   _  < "
echo " |  |     |  |  |  | |  |\   | |  .  \      |  |          |  |     /  _____  \  \    /    |  |____ |  |\  \----.|  |\   |    |  '--'  ||  |_)  |"
echo " |__|      \______/  |__| \__| |__|\__\     |__|          |__|    /__/     \__\  \__/     |_______|| _| \`._____||__| \__|    |_______/ |______/ "

echo -e "\n-------------------------------------------------------------------------------------------------------------------------------------------------\n"


echo -e "\n::Cleaning up the lib folder\n"
npm run clean


echo -e "\n::Building the D&D Database\n"
ts-node src/build.ts

echo -e "\n::Copying the necessary files to the lib folder\n"
tsc || echo '::Build ran with errors. Check the log above for more details.'
cp src/db lib/db -r && cp package.json lib/ && cp README.md lib/