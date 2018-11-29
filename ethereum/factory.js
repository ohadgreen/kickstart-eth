import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xdA62cd5C776433a6C6a5f4F0762bC3454bf65FdA' // campaign factory address
);

export default instance;
