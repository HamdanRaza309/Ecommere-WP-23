import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useLocation, Link } from "react-router-dom";

export default function SigninScreen() {
    const { search } = useLocation();
    const redirectInURL = new URLSearchParams(search).get('redirect');
    const redirect = redirectInURL ? redirectInURL : '/';
    return (
        <Container className="small-container">
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <h1 className="my-3">Sign in</h1>
            <Form>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required />
                </Form.Group>
                <div className="mb-3">
                    <Button type="submit">Sign In</Button>
                </div>
                <div className="mb-3">
                    New Customer?{' '}
                    <Link to={`/signup?redirect=${redirect}`}>Create Your Account</Link>
                </div>
            </Form>
        </Container>
    )
}