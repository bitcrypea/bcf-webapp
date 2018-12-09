import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Button } from 'antd';
import { makeField } from './GenerateField';

const FormItem = Form.Item;

const AInput = makeField(Input);

const LoginForm = ({ handleSubmit, pristine, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        label=""
        name="email"
        component={AInput}
        type="email"
        placeholder="Email"
      />
      <Field
        label=""
        name="password"
        component={AInput}
        type="password"
        placeholder="Password"
      />
      <FormItem>
        <Button
          type="primary"
          disabled={pristine || submitting}
          htmlType="submit"
          style={{ width: '100%' }}
        >
          Log In
        </Button>
      </FormItem>
    </Form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'You need enter email';
  }
  if (!values.password) {
    errors.password = 'You need enter password';
  }

  return errors;
};

export default reduxForm({
  form: 'login', // a unique identifier for this form
  validate
})(LoginForm);
