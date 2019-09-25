import React from 'react'
import { Button, Form, Grid, Image, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Image src='logo.png' size="medium" centered/>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <Button color='teal' fluid size='large'>
            Admin Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)

export default LoginForm