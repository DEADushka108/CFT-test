import React, {Fragment} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import {Title} from '../../styles/main/main';
import {Form, Section, Item, Legend, Fieldset, Label, Input, Textarea, SubmitButton} from '../../styles/feedback/feedback';

const ContactScreen = () => {

  return <Fragment>
    <Header/>
    <main className="page-main">
      <Title>Contact us</Title>
      <Section>
        <Form action="#" method="GET">
          <Fieldset>
            <Legend>Introduce yourself an write us some word</Legend>
            <Item>
              <Label htmlFor="user-name">Full name</Label>
              <Input id="user-name" type="text" name="full-name" placeholder="Your Name" required/>
            </Item>
            <Item>
              <Label htmlFor="user-email">Email</Label>
              <Input id="user-email" type="email" name="email" placeholder="Your Email" required />
            </Item>
            <Item>
              <Label htmlFor="comment-field">Message</Label>
              <Textarea name="comment" id="comment-field" rows="5" placeholder="Your Message"></Textarea>
            </Item>
          </Fieldset>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </Section>
    </main>
    <Footer/>

  </Fragment>;
};

export default ContactScreen;
