import React, { Component } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

export default class OktaSignInWidget extends Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    this.widget = new OktaSignIn({
      logo: '//logo.clearbit.com/okta.com',
      idpDisplay: "SECONDARY",                        // Try: [PRIMARY, SECONDARY] Changes button display order
      idps: [ {type: 'MICROSOFT', id: '0oa170psffBE5QrBj697'}],
      //The property baseUrl is the URL of the application.
      baseUrl: this.props.baseUrl,
      redirectUri:'https://pbarot.okta.com/oauth2/v1/authorize/callback	'
    });
    //callbacks that will be called when the login has been successful or when an error occurred.
    this.widget.renderEl({el: this.wrapper.current}, this.props.onSuccess, this.props.onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div ref={this.wrapper} />;
  }
};
