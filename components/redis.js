const Redis = require('ioredis')
const fs = require('fs')

const redis = new Redis({
    host: 'redis-19877.c1.us-west-2-2.ec2.cloud.redislabs.com',
    port: 19877,
    password: 'GFWpgTU8YnfaBGrTCvG9xhjII5xEy96k'
});