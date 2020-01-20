
import { argv } from 'yargs'
import getData from './services/locations'

const run = async () => {
  const { customerName, latitude, longitude } = argv
  if (!customerName || !latitude || !longitude) {
    console.log('Please enter all three required params (ex: node start.js --customerName="Sunrise Bank" --longitude="-97.7352479" --latitude="30.4886951")')
    process.exit(1);
  }
  const outputData = await getData({ customerName, latitude, longitude });
  console.log(outputData);
};

run();
