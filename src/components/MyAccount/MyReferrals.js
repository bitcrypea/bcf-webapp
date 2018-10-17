import React, { Component, Fragment } from 'react';
import {
  AccountInfoTitle,
  AccountBasicInfoContainer,
  AccountSection,
  ReferralContentRight,
  ReferralContentLeft,
  ReferralTitle,
  ReferralContent,
} from './styled';
import { Switch, Input } from 'antd';

class MyReferrals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enable: false,
    };
  }

  handleChange = checked => {
    this.setState({ enable: checked });
  };

  render() {
    const { enable } = this.state;
    if (enable) {
      this.props.createAffiliate(7);
    }
    return (
      <Fragment>
        <AccountSection>
          <AccountInfoTitle>
            <span>My Referrals</span>
          </AccountInfoTitle>
          <AccountBasicInfoContainer>
            <ReferralContentLeft>
              <ReferralContent>
                <ReferralTitle>Do you want to join program?</ReferralTitle>
                <div>
                  <Switch
                    defaultChecked={enable}
                    disabled={enable}
                    onChange={this.handleChange}
                  />
                </div>
              </ReferralContent>
            </ReferralContentLeft>
            <ReferralContentRight>
              {enable && (
                <div>
                  <ReferralTitle>
                    Current referral number of you is:{' '}
                  </ReferralTitle>
                  <div>
                    <Input style={{ maxWidth: 200 }} disabled placeholder="1" />
                  </div>
                </div>
              )}
            </ReferralContentRight>
          </AccountBasicInfoContainer>
        </AccountSection>

        <AccountSection style={{ paddingTop: 50 }}>
          <AccountInfoTitle>
            <span>Number account using your referral number</span>
          </AccountInfoTitle>
          <AccountBasicInfoContainer>Count: 10</AccountBasicInfoContainer>
        </AccountSection>
      </Fragment>
    );
  }
}

export default MyReferrals;
