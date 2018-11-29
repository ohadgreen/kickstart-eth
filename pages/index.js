import React from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends React.Component {
    static async getInitialProps() { // lifecycle function that enbales next to run stuff before rendering the component
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        console.log('campaigns: ' + campaigns);
        return { campaigns: campaigns };
    }

    renderCampaigns = () => {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                <Link route={`/campaigns/${address}`}>
                    <a>View Campaign</a>
                    </Link>),
                fluid: true
            }
        })
        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    <Link route="/campaigns/new">
                        <a>
                            <Button
                                floated="right"
                                content="create campaign"
                                icon="add"
                                primary
                            />
                            {this.renderCampaigns()}
                        </a>
                    </Link>
                </div>
            </Layout>
        )
    }
}

export default CampaignIndex;