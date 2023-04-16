import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

    const { signInUser } = useContext(AuthContext);

    const { register, handleSubmit } = useForm();
    const handleLoginForm = (data, even) => {
        // console.log(data)

        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('User Login Successfully ')
                even.target.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="hero my-10 xl:col-span-1 lg:col-span-1">
            <div className="hero-content flex-col lg:flex xl:max-w-[450px] lg:max-w-[450px] w-full p-0">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 rounded-none">
                    <div className='flex items-center justify-center pt-6 gap-1'>
                        <h1 className="text-3xl font-semibold">Login Now</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleLoginForm)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} name='email' placeholder="location" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password', { required: true })} placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-8">
                                <button type='search' className='btn'>Login</button>
                            </div>
                        </form>
                        <div className='flex items-center justify-between'>
                            <span>Create an account</span>
                            <Link to='/register'>Please register</Link>
                        </div>
                        <div className="divider">OR</div>
                        <div className="form-control">
                            <button type='search' className='btn'>Login with google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;