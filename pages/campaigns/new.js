import React from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends React.Component {
    state = {
        minimumContribution: '',
        error: '',
        loading: false
    }

    onSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading: true, error: '' });
        try {
            const campaignAccount = await web3.eth.getAccounts();
            console.log('campaignAccount - ' + campaignAccount);
            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({ // metamask already init the calculated gas amount property for us
                    from: campaignAccount[0]
                });

            Router.pushRoute('/');
        } catch (err) {
            this.setState({ error: err.message });
        }

        this.setState({ loading: false });
    }

    render() {
        return (
            <Layout>
                <h3>Create a Campaign</h3>
                <Form onSubmit={this.onSubmit} error={this.state.error !== ''}> {/*error prop decides if the error message component should render*/}
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={e => this.setState({ minimumContribution: e.target.value })}
                        />
                    </Form.Field>
                    <Message
                        error
                        header="Oops..."
                        content={this.state.error}
                    />
                    <Button 
                        loading={this.state.loading}
                        primary={true}>
                        Create
                    </Button>
                </Form>

            </Layout>
        )
    }
}
export default CampaignNew;