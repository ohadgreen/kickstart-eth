import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xf857c07A600DF179ff3B5e964c0053Fb3dED6305' // campaign factory address
);

export default instance;
