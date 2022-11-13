import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const AddMovies = () => {

    const [movie, setMovie] = useState({});


    const handleUpdate = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/putMovie', {movie})
            .then(res => res.data)
            .then(movie => {
                if (movie.error === "false") {
                    alert("Movie Added Successfully");
                }
            }) 

    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setMovie({ ...movie, [name]: value });
    }


    return (
        <div className="flex  min-h-screen justify-center align-top">

            <div className="flex flex-col justify-center flex-1 bg-gray-100
        ">
                <div className="bg-green-200  mx-auto w-2/4 p-10 rounded">
                    <div>

                        <h1 className="text-gray-800 font-bold text-2xl mb-1">Add Movie Information</h1>
                    </div>
                    <div className="mt-8">
                        <form className="mt-6">

                            <div className="space-y-4">



                                <div className='mb-4 md:mr-2 md:mb-0'>
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-900">Title </label>
                                    <div className="mt-1">
                                        <input onChange={handleChange} id="title" name="title" type="text" autoComplete="title" required value={movie.title} className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>


                                <div className="mb-4 flex justify-between">

                                    <div className='mb-4 md:mr-2 md:mb-0'>
                                        <label htmlFor="year" className="block text-sm font-medium text-gray-900"> Year </label>
                                        <div className="mt-1">
                                            <input onChange={handleChange} id="phone" name="year" type="text" autoComplete="year" required value={movie.year} className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>
                                    <div>

                                        <label htmlFor="director" className="block text-sm font-medium text-gray-900">Director </label>
                                        <div className="mt-1">
                                            <input onChange={handleChange} id="director" name="director" type="text" autoComplete="director" required value={movie.director} className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>

                                </div>






                                <div className="flex items-center justify-center">

                                    <div className="flex items-center justify-center" >
                                        <button onClick={handleUpdate} type="submit"
                                            className="flex items-center justify-center mx-4 px-4  py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-800 rounded-xl hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ">
                                            Update
                                        </button>
                                        <Link to="/">
                                            <button
                                                className="flex items-center justify-center mx-auto px-4  py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-800 rounded-xl hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ">
                                                Go Home
                                            </button>
                                        </Link>
                                    </div>

                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMovies;