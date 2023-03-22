import React from 'react';
// import { Link } from 'react-router-dom';

// import Auth from '../utils/auth';

const Signup = () => {
    // const [formState, setFormState] = useState({
    //     username: '',
    //     password: '',
    // });
    // const [addProfile, { error }] = useMutation(ADD_PROFILE);

    // // update state based on form input changes
    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormState({ ...formState, [name]: value });

    // };

    // // submit form
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(formState);

    //     try {
    //         const { data } = await addProfile({
    //             variables: { ...formState },
    //         });

    //         Auth.login(data.addProfile.token);
    //     } catch (e) {
    //         console.error(e);
    //     }
    //     setFormState({
    //         username: '',
    //         password: '',
    //       });

    

    return (
        <div className="App">
            <div className="container">
                <div className="row d-flex justify-content-center">
                <div className="bg-secondary text-light">
                <h1 className="display-1">SIGN UP</h1>
                </div>
                    <div className="col-md-4 m-2">
                        
                            <form>
                                <div className="form-input">
                                    <label>Username</label>
                                    <input
                                        className="form-control"
                                        name="username"
                                        type="text"
                                        placeholder="Enter Username"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name='password'
                                        placeholder="Password"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary m-2">
                                    Sign Up
                                </button>
                            </form>
                    
                    </div>
                </div>
            </div>
        </div>
    );
    

};


export default Signup;