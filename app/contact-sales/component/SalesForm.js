"use client";

import React, { useState } from "react"; 
import { SuccessSentForm } from "@/app/components/contactSalesForm/SuccessSentForm";
import { Formik, Field, Form } from "formik";
import { Input } from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import { toast } from "react-toastify";
import "./SalesForm.css";
import { ButtonLink } from "@/app/ui/button/ButtonLink";




function SalesForm({title,
  subTitle,
  name,
  email,
  company,
  message,
  submit_0,
  submit_1,
  schedule,
  successTranslations
  }) {
  const [sent, setSent] = useState(false);

  const onClickSubmit = async (values, setSubmitting, resetForm) => {
    const { fullName, workEmail, company, message } = values;
    try {

      const html = `
        <h1>Contact Sales (landing)</h1>
        <p><b>Full Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${workEmail}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Message:</b> ${message}</p>
      `;


      const res = await fetch(
        "https://platform.metaenga.com/contactSales/mail/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mail: workEmail,
            fullName,
            company,
            subject: "Contact sales (landing)",
            html,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      setSubmitting(false);
      resetForm();
      setSent(true);
    } catch (error) {
      console.error("Error sending form data:", error);
      toast.error("Message not sent. Try again later.");
      setSubmitting(false);
    }
  };

  return (
    <div className="sales-form">
      <h1 className="main__header">{title}</h1>
      <p className="sub__header text__body-light">
       {subTitle}
      </p>

      <Formik
        initialValues={{
          fullName: "",
          workEmail: "",
          company: "",
          message: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.fullName) {
            errors.fullName = "Required";
          }
          if (!values.workEmail) {
            errors.workEmail = "Required";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.workEmail)) {
            errors.workEmail = "Invalid email address";
          }
          if (!values.company) {
            errors.company = "Required";
          }
          return errors;
        }}
        validateOnMount={true}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
       
            await onClickSubmit(values, setSubmitting, resetForm);
        
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <div className="sales-form__field">
              <Field name="fullName">
                {({ field, meta, form: {touched, errors}}) => (
                  <Input
                  id={field.name}
                    label={name}
                    {...field}
                    err={meta.touched && meta.error}
                    helperText={touched.fullName && errors.fullName}
                    disabled={isSubmitting}
                  />
                )}
              </Field>
            </div>
            <div className="sales-form__field">
              <Field name="workEmail">
                {({ field, meta, form: {touched, errors} }) => (
                  <Input
                  id={field.name}
                    label={email}
                    {...field}
                    err={meta.touched && meta.error}
                    helperText={touched.workEmail && errors.workEmail}
                    disabled={isSubmitting}
                  />
                )}
              </Field>
            </div>
            <div className="sales-form__field">
              <Field name="company">
                {({ field, meta, form: {touched, errors}  }) => (
                  <Input
                  id={field.name}
                    label={company}
                    {...field}
                    err={meta.touched && meta.error}
                    helperText={touched.company && errors.company}
                    disabled={isSubmitting}
                  />
                )}
              </Field>
            </div>
            <div className="sales-form__field">
              <Field name="message">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors },
                  meta,
                }) => (
                  <Input
                  id={field.name}
                    small
                    label={message}
                    type="area"
                    rows={3}
                    {...field}
                    err={meta.touched && meta.error}
                    helperText={errors.message}
                    disabled={isSubmitting}
                  />
                )}
              </Field>
            </div>
            <div className="sales-form__buttons">
              <ButtonLink
                className="btn secondary"
                type="button"
                href="https://metaenga.com/book-a-demo"
              >
                {schedule}
              </ButtonLink>
              <Button
                className="btn primary"
                type="submit"
                disabled={isSubmitting || !isValid}
                loading={isSubmitting}
              >
                <span className="full-text">{submit_0}</span>
                <span className="short-text">{submit_1}</span>
              </Button>
            </div>
          </Form>
        )}
      </Formik>

      {sent && (
        <SuccessSentForm  {...successTranslations}/>
      )}
    </div>
  );
}

export default SalesForm;
