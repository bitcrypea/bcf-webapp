import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';

const FormItem = Form.Item;

const makeField = Component => ({
  input,
  meta,
  children,
  hasFeedback,
  label,
  ...rest
}) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      style={{ textAlign: 'left' }}
      label={label}
      validateStatus={hasError ? 'error' : 'success'}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...rest} children={children} />
    </FormItem>
  );
};

const AInput = makeField(Input);

class RegisterForm extends Component {
  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    const initData = {
      referralId: '1234',
    };

    this.props.initialize(initData);
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
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
          name="firstName"
          component={AInput}
          type="text"
          placeholder="First Name"
        />

        <Field
          label=""
          name="lastName"
          component={AInput}
          type="text"
          placeholder="Last Name"
        />

        <Field
          label="Referral ID (optional)"
          name="referralId"
          component={AInput}
          type="text"
          placeholder="Referral ID"
        />

        <FormItem>
          <Button
            type="primary"
            disabled={pristine || submitting}
            htmlType="submit"
            style={{ width: '100%' }}
          >
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  return errors;
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(
  mapStateToProps,
  null
)(
  reduxForm({
    form: 'registerForm', // a unique identifier for this form
    validate,
  })(RegisterForm)
);
