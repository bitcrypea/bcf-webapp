import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Input, Button } from "antd";

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

const RegisterForm = props => {
  const { handleSubmit, pristine                      , submitting } = props;
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

      <Field
        label=""
        name="confirmPassword"
        component={AInput}
        type="password"
        placeholder="Confirm password"
      />

      <FormItem>
        <Button
          type="primary"
          disabled={pristine || submitting}
          htmlType="submit"
          style={{ width: "100%" }}
        >
          Submit
        </Button>
      </FormItem>
    </Form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }

  return errors;
};

export default reduxForm({
  form: "simple", // a unique identifier for this form
  validate
})(RegisterForm);
