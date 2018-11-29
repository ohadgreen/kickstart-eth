import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
    state = {
        value: '',
        loadSpinner: false,
        errorMsg: ''
    }

    onSubmit = async e => {
        e.preventDefault();
        const campaign = Campaign(this.props.address);
        this.setState({ loadSpinner : true });
        try {
            const accounts = await web3.eth.getAccounts();
            console.log('from account: ' + accounts[0]);
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether') // convert ether to wei
            });

            Router.replaceRoute(`/campaigns/${this.props.address}`); // will refresh show campaign details page to get the updated campaign params
        } catch(err) {
            console.log(err);
            this.setState({ errorMsg: err.message});
        }
        this.setState({ loadSpinner: false, value: '', errorMsg: '' })
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={this.state.errorMsg !== ''}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input 
                        value={this.state.value}
                        onChange={(e) => this.setState({ value: e.target.value })}
                        label="ether" 
                        labelPosition="right"/>
                </Form.Field>
                <Message error header="Oops..." content={this.state.errorMsg} />
                <Button primary loading={this.state.loadSpinner}>
                    Contribute
                </Button>
            </Form>
        )
    }
}

export default ContributeForm;