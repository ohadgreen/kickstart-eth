import React from 'react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import { Button, Table } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';


class RequestIndex extends React.Component {
    static async getInitialProps(props) {
        const { address } = props.query;
        const campaign = Campaign(address);
        const requestsCount = await campaign.methods.getRequestsCount().call();
        const approversCount = await campaign.methods.approversCount().call();

        const requests = await Promise.all(
            Array(parseInt(requestsCount)).fill().map((element, i) => {
                return campaign.methods.requests(i).call();
            })
        );
        console.log('requests: ' + JSON.stringify(requests));

        return { address, requests, requestsCount, approversCount };
    }

    renderRequestRow = () => {
        return this.props.requests.map((request, i) => {
            return (
                    <RequestRow key={i}
                        id={i}
                        request={request}
                        address={this.props.address}
                        approversCount={this.props.approversCount}
                    />
                )
        })
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;

        return (
            <Layout>
                <h3>Requests List</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary floated="right" style={{marginBottom: 10}}>Add Request</Button>
                    </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approved</HeaderCell>
                            <HeaderCell>Finalized</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRequestRow()}
                    </Body>
                </Table>
                <div>Found {this.props.requestsCount} requests</div>
            </Layout>
        )
    }
}

export default RequestIndex;