import React, { Component, Fragment } from 'react';
import {
  AccountInfoTitle,
  AccountBasicInfoContainer,
  AccountSection,
  ReferralContentRight,
  ReferralContentLeft,
  ReferralTitle,
  ReferralContent
} from './styled';
import { Switch, Input, Badge, Icon, message } from 'antd';
import runtimeEnv from '@mars/heroku-js-runtime-env';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from 'antd';
import { CustomButton } from '../commons/styled';

const env = runtimeEnv();

class MyReferrals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enable: this.props.enable,
      code: localStorage.getItem('affiliate_codes')
    };
  }

  handleChange = checked => {
    if (checked) {
      this.props.createAffiliate(this.state.code);
    }
  };

  onCopy = () => {
    message.success('Copied!');
  };

  render() {
    const { enable } = this.state;

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
                    checkedChildren={<Icon type="check" />}
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
                  <div>
                    <ReferralTitle>Referral Code</ReferralTitle>
                    <div>
                      <Input
                        value={this.state.code}
                        style={{ maxWidth: 200 }}
                        disabled
                      />
                    </div>
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <ReferralTitle>Referral Link</ReferralTitle>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <CustomButton style={{ paddingRight: 20 }}>
                        {' '}
                        {`${env.REACT_APP_REFER_LINK}/register?ref_code=${
                          this.state.code
                        }`}
                      </CustomButton>
                      <CopyToClipboard
                        text={`${env.REACT_APP_REFER_LINK}/register?ref_code=${
                          this.state.code
                        }`}
                        onCopy={this.onCopy}
                      >
                        <Button shape="circle" icon="copy" />
                      </CopyToClipboard>
                    </div>
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
            {this.props.count !== 0 && <span>People</span>}
          </AccountBasicInfoContainer>
        </AccountSection>
      </Fragment>
    );
  }
}

export default MyReferrals;
