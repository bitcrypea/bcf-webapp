import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import qs from 'qs';
import { makeField } from './GenerateField';

const FormItem = Form.Item;

const AInput = makeField(Input);

class RegisterForm extends Component {
  handleInitialize() {
    let code;
    const qsParsed = qs.parse(this.props.location.search.slice(1));

    if (qsParsed.ref_code !== undefined) {
      const affiliate_codes = localStorage.getItem('affiliate_codes');
      const ref_code = localStorage.getItem('ref_code');

      if (ref_code !== null) {
        code = ref_code;
      }
      if (affiliate_codes !== null && affiliate_codes !== qsParsed.ref_code) {
        if (ref_code === null) {
          localStorage.setItem('ref_code', qsParsed.ref_code);
          code = qsParsed.ref_code;
        }
      } else {
        if (ref_code === null) {
          localStorage.setItem('ref_code', qsParsed.ref_code);
          code = qsParsed.ref_code;
        }
      }
    }
    const initData = {
      referralId: code
    };

    this.props.initialize(initData);
  }

  componentDidMount() {
    this.handleInitialize();
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
          label=""
          name="referralId"
          component={AInput}
          type="text"
          placeholder="Referral ID (optional)"
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
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  null
)(
  reduxForm({
    form: 'registerForm', // a unique identifier for this form
    validate
  })(RegisterForm)
);
