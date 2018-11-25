import Web3 from 'web3';
const truffleWalletParams = require('../params.dev');

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') { // check to see if we are running on the server or the browser and if metamask is on
    //on browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else { // we are on the server or the user not running metamask
    const provider = new Web3.providers.HttpProvider(
        truffleWalletParams.infuraUrl
    );
    web3 = new Web3(provider);
}

export default web3;