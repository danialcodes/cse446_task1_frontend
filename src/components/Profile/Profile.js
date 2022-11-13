import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Profile = () => {
    const [isDisabled, setIsDisabled] = useState(true);

    const [upDateData, setUpDateData] = useState({});


    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(upDateData);
        
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUpDateData({ ...upDateData, [name]: value });
    }

    const handleCheck = (e) => {
        const value = e.target.checked;
        if (value === true && e.target.name === "update") {
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
        }
    }

    return (
        <div className="flex  min-h-screen justify-center">

            <div className="flex flex-col justify-center flex-1 bg-gray-100
        ">
                <div className="bg-green-200  mx-auto w-2/4 p-10 rounded">
                    <div>

                        <h1 className="text-gray-800 font-bold text-2xl mb-1">My Information</h1>
                    </div>
                    <div className="mt-8">
                        <form className="mt-6">

                            <div className="space-y-4">

                                <div className="mb-4 md:flex md:justify-between">

                                    <div className='mb-4 md:mr-2 md:mb-0'>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name </label>
                                        <div className="mt-1">
                                            <input onChange={handleChange} id="name" name="name" disabled={isDisabled} type="text" autoComplete="name" required value={upDateData.name} className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>
                                    {<div className="md:ml-2">
                                        <label htmlFor="student_id" className="block text-sm font-medium text-gray-900">Student Id</label>
                                        <div className="mt-1">
                                            <input onChange={handleChange} disabled={isDisabled} id="student_id" name="student_id" type="text" required value={upDateData.student_id} className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>}
                                    {<div className="md:ml-2">
                                        <label htmlFor="faculty_initial" className="block text-sm font-medium text-gray-900">Faculty Initial</label>
                                        <div className="mt-1">
                                            <input onChange={handleChange} disabled={isDisabled} id="faculty_initial" name="faculty_initial" type="text" required value={upDateData.faculty_initial} className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>}
                                    {<div className="md:ml-2">
                                        <label htmlFor="joining" className="block text-sm font-medium text-gray-900">Joining Semester</label>
                                        <div className="mt-1">
                                            <input onChange={handleChange} disabled={isDisabled} id="joining" name="joining_semester" type="text" autoComplete="joining" required value={upDateData.joining_semester} className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>}
                                    {<div className="md:ml-2">
                                        <label htmlFor="club_advisor" className="block text-sm font-medium text-gray-900">Club Advisor</label>
                                        <div className="mt-1">
                                            <input onChange={handleChange} disabled={isDisabled} id="club_advisor" name="club_advisor" type="text" required value={upDateData.club_name} className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>}

                                </div>
                                <div className="mb-4 md:flex md:justify-between">

                                    <div className='mb-4 md:mr-2 md:mb-0'>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900"> Phone </label>
                                        <div className="mt-1">
                                            <input onChange={handleChange} disabled={isDisabled} id="phone" name="phone" type="text" autoComplete="phone" required value={upDateData.phone} className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>
                                    <div>

                                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email </label>
                                        <div className="mt-1">
                                            <input onChange={handleChange} disabled={isDisabled} id="email" name="email" type="email" autoComplete="email" required value={upDateData.email} className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>
                                    <div className="md:ml-2">
                                        <label htmlFor="blood_group" className="block text-sm font-medium text-gray-900"> Blood Group </label>
                                        <div className="mt-1">
                                            <input onChange={handleChange} disabled={isDisabled} id="blood_group" name="blood_group" type="text" autoComplete="blood_group" required value={upDateData.blood_group} className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>
                                </div>
                                {<div className="mb-4 md:flex md:justify-between">

                                    <div className='mb-4 md:mr-2 md:mb-0'>
                                        <label htmlFor="ap" className="block text-sm font-medium text-gray-900"> Academic Program</label>
                                        <div className="mt-1">
                                            <input disabled={true} id="ap" name="ap" type="text" autoComplete="ap" value={upDateData.program_name} className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>
                                    <div>

                                        <label htmlFor="club" className="block text-sm font-medium text-gray-900">Club</label>
                                        <div className="mt-1">
                                            <input disabled={true} id="club" name="club" type="club" autoComplete="email" value={upDateData.club_name} className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>

                                </div>}





                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="update" name="update" type="checkbox" required className="w-4 h-4 text-green-500 border-gray-200 rounded focus:ring-green-500" onChange={handleCheck} />
                                        <label htmlFor="update" className="block ml-2 text-sm text-neutral-600">Update Profile?
                                        </label>
                                    </div>
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

export default Profile;