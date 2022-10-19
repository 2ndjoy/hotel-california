import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Usercontext';

// const auth = getAuth(app);


const LogIn = () => {

    const [success, setSuccess] = useState(false);
    const [user, setUser] = useState({});


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const nabb = navigate(from, { replace: true });
    const { signIn, googleSignIn, facebookSignIn } = useContext(AuthContext);
    const handlegoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                setSuccess(true);
                navigate(from, { replace: true });


            })
            .catch(error => {
                console.error('error', error);
            })

    }
    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then((result) => {
                const user = result.user;
                setSuccess(true);
                setUser(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error('error', error);
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setSuccess(true);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error', error);
            })
    }
    return (

        <div>
            <div className='mt-5'>
                <div className='main-container d-flex container justify-content-around align-items-center'>
                    <img className='w-50 img-fluid img-fluid' src='https://i.ibb.co/0hLvWvP/undraw-Login-re/4vu2.png' />
                    <div className='w-42'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" required />
                            </Form.Group>

                            <div className='text-center'>
                                <p>
                                    New here?
                                    <Link to="/signup">Create an account</Link>

                                </p>
                                <div><p>Forgot Password?</p></div>
                            </div>

                            <div className='md:flex justify-center items-center gap-3 sm:grid mb-4'>
                                <Button variant="primary" className='bg-transparent w-36' type="submit">
                                    <p className='text-blue-800 items-center'>Log In</p>
                                </Button>

                            </div>

                            <div className='md:flex justify-center items-center gap-3'>

                                <Button onClick={handlegoogleSignIn} variant="primary" className='bg-transparent w-20'>
                                    <img className='w-10 image-fluid btn-image' src='https://img.icons8.com/color/452/google-logo.png' />
                                </Button>
                                <Button onClick={handleFacebookSignIn} variant="primary" className='bg-transparent w-20 md:mx-3'>
                                    <img className='w-10 image-fluid btn-image' src='https://img.icons8.com/color/452/facebook-logo.png' />
                                </Button>
                            </div>
                        </Form>
                        {
                            user.uid && nabb
                        }
                        {success && <Navigate to='/'></Navigate>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;