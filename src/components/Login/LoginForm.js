import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

const makeField = Component => ({ input, meta, children, hasFeedback, label, ...rest }) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      label={label}
      validateStatus={hasError ? "error" : "success"}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...rest} children={children} />
    </FormItem>
  );
};

const AInput = makeField(Input);

const LoginForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field label="" name="email" component={AInput} type="email" placeholder="Email" />
      <Field label="" name="password" component={AInput} type="password" placeholder="Password" />
      <FormItem>
        <Button type="primary" disabled={pristine || submitting} htmlType="submit" style={{ width: "100%" }}>
          Log In
        </Button>
      </FormItem>
    </Form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "You need enter email";
  }
  if (!values.password) {
    errors.password = "You need enter password";
  }

  return errors;
};

export default reduxForm({
  form: "login", // a unique identifier for this form
  validate
})(LoginForm);
