const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const axios = require('axios');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, result) => {
   if(errorMessage){
    console.log(errorMessage); 
   }else{
    console.log(JSON.stringify(result, undefined, 2));
   }
});

url: 'https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}'

axios.get()