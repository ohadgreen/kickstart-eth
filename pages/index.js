import React from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends React.Component {
    static async getInitialProps() { // lifecycle function that enbales next to run stuff before rendering the component
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        console.log('campaigns: ' + campaigns);
        return { campaigns: campaigns };
    }

    render() {
        return (
            <div>Campaigns Index
            <div>
                    {this.props.campaigns[0]}
                </div>
            </div>
        )
    }

}

export default CampaignIndex;