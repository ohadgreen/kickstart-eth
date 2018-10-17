const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaign;
let campaignAddress;


beforeEach(async () => {
    // 1. fetch list of accout addresses
    accounts = await web3.eth.getAccounts();
    // 2. use one account to deploy the contract
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000' });

    // 3. create one campaign with factory
    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    // 4. get the new campaign address
    // method.send => interacting with method that changes the contract
    // method.call => interacting with method that doesn't change the contract (read only)
    const campaignAddressList = await factory.methods.getDeployedCampaigns().call();
    campaignAddress = campaignAddressList[0];

    campaign = await new web3.eth.Contract( // the contract has been already deployed, but it needs the address on the net
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );
});

describe('Campaigns', () => {
    it('deploys factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('marks caller as campaign manager', async () => {
        const manager = await campaign.methods.manager().call(); // manager() is automatically created by solidity by setting the field public
        assert.equal(accounts[0], manager);
    });

    it('let people contribute and mark them as approvers', async () => {
        await campaign.methods.contribute().send({
            value: 200,
            from: accounts[1]
        });

        const isApprover = await campaign.methods.approvers(accounts[1]).call();
        assert(isApprover); // checks true
    });

    it('require minimum value contribution', async () => {
        try {
            await campaign.methods.contribute().send({
                from: accounts[1],
                value: '5' // < 100
            });
            assert(false); // if this line gets executed it means test failed
        }
        catch (error) {
            // console.log('error: ', error);
            assert(error);
        }
    });

    it('allows manager to make a request', async() => {
        await campaign.methods.createRequest('buy stuff', '100', accounts[1]).send({
            from: accounts[0],
            gas: '1000000'
        });
        const request = await campaign.methods.requests(0).call();
        console.log('request: ', request.description);

        assert.equal(100, request.value)
        
    })
})