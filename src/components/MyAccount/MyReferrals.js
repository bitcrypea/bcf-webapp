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
import { Switch, Input, Badge } from 'antd';

class MyReferrals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enable: this.props.enable,
      code: localStorage.getItem('affiliate_codes'),
    };
  }

  handleChange = checked => {
    this.setState({ enable: checked });
  };

  render() {
    const { enable } = this.state;
    if (enable) {
      this.props.createAffiliate(this.state.code);
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
                    <Input
                      value={this.state.code}
                      style={{ maxWidth: 200 }}
                      disabled
                    />
                  </div>
                </div>
              )}
            </ReferralContentRight>
          </AccountBasicInfoContainer>
        </AccountSection>

        <AccountSection style={{ paddingTop: 50 }}>
          <AccountInfoTitle>
            <span>Sucessful referrals</span>
          </AccountInfoTitle>
          <AccountBasicInfoContainer>
            <Badge
              count={this.props.count}
              style={{ backgroundColor: '#52c41a', marginRight: 10 }}
            />
            {`  `}
            People
          </AccountBasicInfoContainer>
        </AccountSection>
      </Fragment>
    );
  }
}

export default MyReferrals;
