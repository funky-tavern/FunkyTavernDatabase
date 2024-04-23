#!/bin/bash


npm run clean

ts-node src/build.ts

tsc || echo 'Build ran with errors. Check the log above for more details.'
cp src/db lib/db -r && cp package.json lib/ && cp README.md lib/