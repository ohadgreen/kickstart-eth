const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const truffleWalletParams = require('../params.dev');

const provider = new HDWalletProvider(
    truffleWalletParams.mneumonic, //mneumonic for the rinkeby account
    truffleWalletParams.infuraUrl //infura endpoint
);

const web3 = new Web3(provider);

// async-await can only be used inside of functions
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('trying to deploy from account:', accounts[0]);
    console.log('infuraUrl: ' + truffleWalletParams.infuraUrl);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)) // contract interfact = ABI
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('factory contract deployed to: ', result.options.address);
};

deploy();