import styled from 'styled-components';

export const BuySellContainer = styled.div`
  left: 355px;
  right: 355px;
  padding: 33px;
  position: absolute;
  top: 480px;
  border-right: 1px solid #e6e6e6;
  bottom: 0;
  box-sizing: border-box;
`;

export const FormItem = styled.div`
  margin-top: 7px;
  padding-bottom: 0;
`;

export const Label = styled.label`
  padding-bottom: 0;
  display: block;
  color: #a5a5a5;
  margin-bottom: 5px;
  box-sizing: border-box;
  padding: 5px 0;
  vertical-align: middle;
`;

export const InputGroup = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  border-radius: 3px;
`;

export const Input = styled.input`
  border: 1px solid #d24339;
  border-right: 0;
  margin: 0;
  color: #121212 !important;
  font-size: 16px;
  font-weight: 700;
  border-radius: 0 !important;
  border: 1px solid #dbdbdb;
  border-right-width: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-flex: 1;
  -ms-flex: auto;
  flex: auto;
  display: inline;
  outline: none;
  vertical-align: middle;
  width: auto;
  text-align: right;

  ::placeholder {
    color: #dbdbdb;
  }
`;

export const InputGroupAddon = styled.span`
  border-left: 0;
  font-size: 16px;
  font-weight: 400;
  color: #c7c7c7 !important;
  line-height: 1.4;
  padding-left: 0;
  display: inline-block;
  vertical-align: middle;
  min-width: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  padding: 10px;
  border-left-width: 0 !important;
  border: 1px solid #dbdbdb;
  border-radius: 0 !important;
  border: 1px solid #dbdbdb;
  border-right-width: 0;
`;

export const ButtonPlus = styled.button`
  border-right-width: 1px;
  margin: 0;
  line-height: 1;
  width: 42px;
  border: 1px solid #dbdbdb;
  flex: none;
  padding: 5px 10px;
  font-size: 20px;
  color: #01071f;
  display: inline-block;
  vertical-align: middle;
  min-width: 40px;
  box-sizing: border-box;
  text-align: center;
  background-color: #f7f7f7 !important;
  margin-left: 0 !important;
  outline: none;
  cursor: pointer;
  font-weight: 400;
  text-decoration: none;
`;

export const ButtonMinus = styled.button`
  margin: 0;
  line-height: 1;
  width: 42px;
  border-radius: 0 !important;
  border: 1px solid #dbdbdb;
  border-right-width: 0;
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  padding: 5px 10px;
  font-size: 20px;
  color: #01071f;
  display: inline-block;
  vertical-align: middle;
  min-width: 40px;
  box-sizing: border-box;
  text-align: center;
  background-color: #f7f7f7 !important;
  margin-left: 0 !important;
  outline: none;
  cursor: pointer;
  font-weight: 400;
  text-decoration: none;
`;

export const ButtonGroup = styled.div`
  display: flex;
  padding-top: 10px;
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: 700;
  height: 44px;
  padding: 0;
  margin-left: 0 !important;
  flex: 1;
  text-align: center;
  border: 1px solid #dbdbdb;
  border-color: transparent !important;
  color: #fff !important;
  vertical-align: middle;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`;

export const Message = styled.div`
  display: inline-block;
  color: #d24339;
  float: right;
  vertical-align: middle;
  max-width: 300px;
`;
