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
  render() {
    const { currentUser } = this.props;

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
                  <Switch defaultChecked onChange={() => {}} />
                </div>
              </ReferralContent>
            </ReferralContentLeft>
            <ReferralContentRight>
              <ReferralTitle>Current referral number of you is: </ReferralTitle>
              <div>
                <Input style={{ maxWidth: 200 }} disabled placeholder="1" />
              </div>
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
