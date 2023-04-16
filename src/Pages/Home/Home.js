import React from 'react';
import { FiFilter } from 'react-icons/fi';

const Home = () => {
    return (
        <div className='my-10'>
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5'>
                <div className="hero xl:col-span-1 lg:col-span-1">
                    <div className="hero-content flex-col lg:flex w-full p-0">
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-5 rounded-none">
                            <div className='flex items-center justify-center gap-1'>
                                <FiFilter></FiFilter>
                                <h1 className="text-xl font-semibold">Filters</h1>
                            </div>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Job Title</span>
                                    </label>
                                    <input type="text" placeholder="job title" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input type="text" placeholder="location" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Salary Range</span>
                                    </label>
                                    <input type="text" placeholder="salary" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Experience</span>
                                    </label>
                                    <select className="select w-full">
                                        <option disabled selected>Select Your Experience</option>
                                        <option>0-1 Year</option>
                                        <option>0-2 Year</option>
                                        <option>0-3 Year</option>
                                        <option>0-4 Year</option>
                                        <option>0-5 Year</option>
                                    </select>
                                </div>
                                <div className="form-control mt-5">
                                    <button type='search' className='btn'>search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border xl:col-span-2 lg:col-span-2 md:col-span-2'>
                    <h1>This is right side bar</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;