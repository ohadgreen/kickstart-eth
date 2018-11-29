import React from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import ContributeForm from '../../components/ContributeForm';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes';

class CampaignShow extends React.Component {
    static async getInitialProps(props) { // lifecycle function that enbales next to run stuff before rendering the component
        const campaignAddress = props.query.address;
        // console.log('campaignAddress: ' + campaignAddress); // this is the page route parameter (/campaigns/:address)
        const campaign = Campaign(campaignAddress);
        const summary = await campaign.methods.getSummary().call();
        // console.log(summary);
        /* getSummary returns this:
        Result {
            '0': '100',
            '1': '0',
            '2': '0',
            '3': '0',
            '4': '0x3B967A5d6B1DeB18F7831d2B1b6Ddb03858Ea206'
        } */
        return {
            campaignAddress: campaignAddress,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
        };
    }

    renderCampaignInfoCards() {
        const { balance, manager, minimumContribution, requestsCount, approversCount } = this.props;

        const cards = [
            {
                header: manager,
                meta: 'Address of campaign manager',
                description: 'manager created this campaign',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign current balance (ether)',
                description: 'how much wei the campaign has',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: requestsCount,
                meta: 'number of requests',
                description: 'requests must be approved by approvers',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: approversCount,
                meta: 'number of approvers',
                description: 'people who contribute to this campaign and need to approve requests',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                meta: '(wei)',
                description: 'minimum amount of wei',
                style: { overflowWrap: 'break-word' }
            },
        ];

        return <Card.Group items={cards} />
    }

    render() {
        return (
            <Layout>
                <h3>Campaign details show</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>{/*  grid columns width adds up to 16 */}
                            {this.renderCampaignInfoCards()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.campaignAddress} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        <Link route={`/campaigns/${this.props.address}/requests`}>
                            <a>
                                <Button primary={true}>View Requests</Button>
                            </a>
                        </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        )
    }
}

export default CampaignShow;