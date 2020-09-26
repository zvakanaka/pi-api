# Setup
`git clone https://github.com/zvakanaka/pi-api.git`  
`cd pi-api`  
`npm install`  
`npm start`  

# Routes
## `/cpu-temperature`
Returns CPU temperature data. 
```json
{
  "celsius": 37,
  "fahrenheit": 98.6
}
```

## `/cpu`
Returns CPU information. 
```json
{
  "model": "Raspberry Pi 4 Model B Rev 1.4",
  "MHz": 600.1,
  "maxMHz": 1500,
  "minMHz": 600
}
```

## `/cpu-frequency`
Returns CPU frequency in megahertz. 
```json
{
  "MHz": 600.1
}
```

## `/voltage`
Returns voltage (only works on Raspberry Pi currently). 
```json
{
  "voltage": 3
}
```

## `/ram`
Returns RAM statistics. 
```json
{
  "ramTotal": 8016988,
  "ramUsed": 5788196,
  "ramFree": 333216,
  "ramShared": 663612,
  "ramCache": 1895576,
  "ramAvailable": 1590888,
  "swapTotal": 2097148,
  "swapUsed": 764512,
  "swapFree": 1332636
}
```