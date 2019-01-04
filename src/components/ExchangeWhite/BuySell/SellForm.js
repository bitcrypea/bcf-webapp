import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FormItem, ButtonGroup, Button, Input } from './styled';
import CustomInput from './makeField';
import normalizeNumber from './normalizeNumber';
import makeField from './makeField';

const AInput = makeField(Input);

class SellForm extends Component {
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
    const { handleSubmit } = this.props;

    return (
      <form
        onChange={e => this.onFormChange(e)}
        onSubmit={handleSubmit}
        style={{ fontSize: 13 }}
      >
        <Field
          label="Price"
          symbol="ETH"
          name="price"
          type="text"
          component={AInput}
          placeholder="Price"
          normalize={normalizeNumber}
        />

        <Field
          label="Amount"
          symbol="BTC"
          name="amount"
          type="text"
          component={AInput}
          placeholder="Amount"
          normalize={normalizeNumber}
        />

        <Field
          disabled
          label="Total"
          symbol="BTC"
          type="text"
          name="total"
          component={AInput}
          placeholder="Min 0.0001"
        />

        <FormItem>
          <ButtonGroup>
            <Button type="submit" style={{ backgroundColor: '#d24339' }}>
              Sell
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
    errors.price = 'Enter a price.';
  }
  if (!values.amount) {
    errors.amount = 'Enter a amount.';
  }

  return errors;
};

const mapStateToProps = (state, ownProps) => ({
  formState: state.form.sellForm // <== Inject the form store itself
});

export default connect(mapStateToProps)(
  reduxForm({
    form: 'sellForm', // a unique identifier for this form
    validate
  })(SellForm)
);
