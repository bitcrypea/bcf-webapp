import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  FormItem,
  Label,
  InputGroup,
  InputGroupAddon,
  ButtonPlus,
  ButtonMinus,
  ButtonGroup,
  Button
} from './styled';
import CustomInput from './CustomInput';
import normalizeNumber from './normalizeNumber';

class BuyForm extends Component {
  onFormChange = e => {
    const { name, value } = e.target;
    const {
      formState: { values }
    } = this.props;

    if (name === 'price' && values && values.amount) {
      if (!isNaN(parseFloat(values.amount)) && !isNaN(parseFloat(value))) {
        this.props.change(
          'total',
          parseFloat(values.amount) * parseFloat(value)
        );
      }
    }

    if (name === 'amount' && values && values.price) {
      if (!isNaN(parseFloat(values.price)) && !isNaN(parseFloat(value))) {
        this.props.change(
          'total',
          parseFloat(values.price) * parseFloat(value)
        );
      }
    }
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form
        onChange={e => this.onFormChange(e)}
        onSubmit={handleSubmit}
        style={{ fontSize: 13 }}
      >
        <FormItem>
          <Label>Price</Label>
          <InputGroup>
            <Field
              name="price"
              type="text"
              component={CustomInput}
              placeholder="Price"
              normalize={normalizeNumber}
            />
            <InputGroupAddon>ETH</InputGroupAddon>
            <ButtonMinus>-</ButtonMinus>
            <ButtonPlus>+</ButtonPlus>
          </InputGroup>
        </FormItem>

        <FormItem>
          <Label>Amount</Label>
          <InputGroup>
            <Field
              name="amount"
              type="text"
              component={CustomInput}
              placeholder="Amount"
              normalize={normalizeNumber}
            />
            <InputGroupAddon>BTC</InputGroupAddon>
            <ButtonMinus>-</ButtonMinus>
            <ButtonPlus>+</ButtonPlus>
          </InputGroup>
        </FormItem>

        <FormItem>
          <Label>Total</Label>
          <InputGroup>
            <Field
              disabled
              type="text"
              name="total"
              component={CustomInput}
              placeholder="Min 0.0001"
            />
            <InputGroupAddon
              disabled
              style={{
                borderRightWidth: 1,
                backgroundColor: 'rgb(235, 235, 228)'
              }}
            >
              BTC
            </InputGroupAddon>
          </InputGroup>
        </FormItem>

        <FormItem>
          <ButtonGroup>
            <Button
              type="submit"
              disabled={pristine || submitting}
              style={{ backgroundColor: '#00a56a' }}
            >
              Buy
            </Button>
          </ButtonGroup>
        </FormItem>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.price) {
    errors.price = 'You need enter price';
  }
  if (!values.amount) {
    errors.amount = 'You need enter amount';
  }

  return errors;
};

const mapStateToProps = (state, ownProps) => ({
  formState: state.form.buyForm // <== Inject the form store itself
});

export default connect(mapStateToProps)(
  reduxForm({
    form: 'buyForm' // a unique identifier for this form
  })(BuyForm)
);
