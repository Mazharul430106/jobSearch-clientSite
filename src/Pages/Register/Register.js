import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {

    const {createUser, updateUser} = useContext(AuthContext);
    // console.log(createUser)

    const { register, handleSubmit } = useForm()
    const handleRegister = (data, even) => {
        // console.log(data);
        createUser(data.email, data.password)
        .then(result=> {
            const user = result.user;
            console.log(user)
            toast.success('User Created Successfully');
            even.target.reset();
            const profile = {
                displayName: data.name,
                photoURL: data.photo
            }

            updateUser(profile)
            .then(()=>{
                alert('user update successfully')
            })
            .catch(error=>{
                console.log(error)
            })



        })
        .catch(error=> {
            console.log(error)
        })

    }

    return (
        <div className="hero my-10 xl:col-span-1 lg:col-span-1">
            <div className="hero-content flex-col lg:flex xl:max-w-[450px] lg:max-w-[450px] w-full p-0">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 rounded-none">
                    <div className='flex items-center justify-center pt-6 gap-1'>
                        <h1 className="text-3xl font-semibold">Register Now</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name',{ required: true })} name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" {...register('photo',{ required: true })} name='photo' placeholder="img-url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email',{ required: true })} name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password',{ required: true })} name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-5">
                                <button type='text' className='btn'>Register</button>
                            </div>
                            <div className='flex items-center justify-between pt-3'>
                                <span>All ready have an account</span>
                                <Link to='/login'>Please login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;