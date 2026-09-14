import type { Dispatch, SetStateAction } from 'react';
import hero from '../assets/hero.png'

interface sidebarProps {
    setSidebar: Dispatch<SetStateAction<boolean>>
}

const Banner = ({ setSidebar }: sidebarProps) => {
    return (
        <div className='w-[90%] mx-auto mt-5 relative'>
            <img src={hero} alt="" className='h-[80vh] w-full mx-auto object-cover rounded-2xl ring ring-indigo-300' />
            <span className='absolute top-5 left-5 ring-2 ring-indigo-200 px-2 py-1 rounded-2xl bg-indigo-100 font-medium'>🎓 Learn. Grow. Succeed.</span>
            <div className='absolute inset-0'>
                <div className='absolute top-1/2 left-10 space-y-5 -translate-y-1/2'>
                    <h1 className='text-6xl font-extrabold'>Build Your Future, <br /> One Course at a Time.</h1>
                    <p className='font-medium text-xl w-[60%]'>Explore quality courses, learn from expert instructors, and build the skills you need to achieve your career goals.</p>
                    <ul className="flex gap-3 mt-10">
                        <li><a href="#course" className="py-2.5 px-5 bg-[#8a6fdb] text-white rounded-xl font-semibold hover:-translate-y-1 transition-transform duration-300 inline-block hover:text-black hover:shadow-lg">Explore Courses</a></li>
                        <li onClick={() => setSidebar(true)} className="py-2.5 px-5 bg-[#8a6fdb] text-white rounded-xl font-semibold hover:-translate-y-1 transition-transform duration-300 inline-block hover:text-black hover:shadow-lg cursor-pointer">My Courses</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;