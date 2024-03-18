import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function CustomForm({user, setuserInParentComponent}) {
  

  const [userObject, setUserObject] = useState(user);

  function changeUsernameHandler(event)
  {
    console.log("new username", event.target.value);

    setUserObject({
      ...userObject,
      username: event.target.value
    })
    setuserInParentComponent(userObject)
  }
  
  function changeEmailHandler(event)
  {
    console.log("new email:", event.target.value);
    setUserObject({
      ...userObject,
      email: event.target.value
    })
  }

  return (
    <Form style={{ paddingTop: 100, maxWidth: 400, marginLeft: 'auto', marginRight: 'auto'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={userObject.email} onChange={(event) => changeEmailHandler(event)}/>
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Usename" value={userObject.username} onChange={(event) => changeUsernameHandler(event)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export {CustomForm};
