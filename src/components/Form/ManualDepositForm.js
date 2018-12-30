import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Button } from 'antd';
import { makeField } from './GenerateField';

const FormItem = Form.Item;

const AInput = makeField(Input);

const ManualDepositForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        label=""
        name="currency"
        component={AInput}
        type="text"
        placeholder="Currency"
      />
      <Field
        label=""
        name="amount"
        component={AInput}
        type="text"
        placeholder="Amount"
      />
      <FormItem>
        <Button
          type="primary"
          disabled={pristine || submitting}
          htmlType="submit"
          style={{ width: '100%' }}
        >
          Submit
        </Button>
      </FormItem>
    </Form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.amount) {
    errors.currency = 'You need enter currency';
  }
  if (!values.amount) {
    errors.amount = 'You need enter amount';
  }

  return errors;
};

export default reduxForm({
  form: 'manualDeposit', // a unique identifier for this form
  validate
})(ManualDepositForm);
