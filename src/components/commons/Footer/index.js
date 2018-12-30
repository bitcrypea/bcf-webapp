import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  FooterContent,
  FooterContainer,
  FooterColumn,
  NewFooter,
  Column,
  LinkColor,
  H6,
  Link
} from './styled';
import { push } from 'connected-react-router';

class Footer extends Component {
  render() {
    const { gotoTerms } = this.props;
    return (
      <FooterContainer>
        <FooterContent>
          <FooterColumn>
            <NewFooter>
              <Column>
                <LinkColor>Apply For Listing</LinkColor>
                <LinkColor>API</LinkColor>
                <LinkColor>Contact</LinkColor>
                <LinkColor>Join Us</LinkColor>
                <LinkColor>Fees</LinkColor>
              </Column>
              <Column>
                <H6>COMPANY</H6>
                <Link onClick={() => gotoTerms()}>Terms</Link>
                <Link>News</Link>
                <Link>Token Introduction</Link>
                <Link>FAQ</Link>
                <Link>Guides</Link>
              </Column>
              <Column>
                <H6>CONTACT US</H6>
                <Link>Telegram</Link>
                <Link>Email</Link>
                <Link>Facebook</Link>
                <Link>WeChat</Link>
              </Column>
              <Column>
                <H6>SOCIAL MEDIA</H6>
                <Link>Facebook</Link>
                <Link>Twitter</Link>
                <Link>Reddit</Link>
                <Link>instagram</Link>
                <Link>Medium</Link>
              </Column>
            </NewFooter>
          </FooterColumn>
        </FooterContent>
      </FooterContainer>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      gotoTerms: () => push('/terms')
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Footer);
