import {Page,Form, FormLayout, Checkbox, TextField, Button,List} from '@shopify/polaris';

import React from "react";
import {useState, useCallback} from 'react';

import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  const { t } = useTranslation();
  var [email, setEmail] = useState();
  var printEmail;
  const handleSubmit = useCallback(() => {
    console.log(email);
    printEmail=email;
    setEmail();
  }, );


  const handleEmailChange = useCallback((value) => setEmail(value), []);
  return (
    <Page fullWidth>
     
      <Form onSubmit={handleSubmit}>
      <FormLayout>

        <TextField
          value={email}
          onChange={handleEmailChange}
          label="Email"
          type="email"
          autoComplete="email"
          helpText={
            <span>
              Please type your email and submit.
            </span>
          }
        />

        <Button submit>Submit</Button>
      </FormLayout>
    </Form>
    <List type="bullet">
      <List.Item>{printEmail}</List.Item>
      {/* <List.Item>Red shirt</List.Item>
      <List.Item>Green shirt</List.Item> */}
    </List>
    </Page>
  );
}
