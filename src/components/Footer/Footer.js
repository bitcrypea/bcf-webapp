import React, { Component } from "react";
import { Container, HomeFooter, HomeFooterT, NewFooter, Column, LinkColor, H6, Link } from "./styled";

class Footer extends Component {
  render() {
    return (
      <Container>
          <HomeFooter>
              <HomeFooterT>
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
              </HomeFooterT>
          </HomeFooter>
      </Container>
    );
  }
}

export default Footer;
