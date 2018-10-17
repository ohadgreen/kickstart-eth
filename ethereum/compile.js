const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build'); // deletes the entire folder
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

// console.log(solc.compile(source, 1));

fs.ensureDirSync(buildPath); // will recreate the folder

for (let contract in output) {
    let contractFileName = contract.replace(':', '');
    console.log('contract ', contractFileName);
    
    fs.outputJsonSync(
        path.resolve(buildPath, contractFileName + '.json'),
        output[contract]
    );
}
