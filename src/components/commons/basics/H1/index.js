import styled from 'styled-components';
import { ifProp } from 'styled-tools';

const H1 = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 0.25em;
  border-bottom: 1px solid #e5e5e5;
  line-height: ${ifProp({ size: 'large' }, '100px', '1.5em')};
`;

export default H1;
