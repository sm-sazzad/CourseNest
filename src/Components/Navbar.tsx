
import type { Dispatch, SetStateAction } from "react";
import NavLogo from "../assets/NavLogo.png"
import type { IDataType } from "../DataType"
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { CiCirclePlus } from "react-icons/ci";
interface selectedProps {
    total: number,
    setTotal: Dispatch<SetStateAction<number>>,
    selected: IDataType[],
    setSelected: Dispatch<SetStateAction<IDataType[]>>
    sidebar: boolean,
    setSidebar: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ selected, setSelected, total, setTotal, setSidebar, sidebar }: selectedProps) => {


    const handleRemoveBtn = (course: IDataType) => {
        const remain = selected.filter(n => !(n.id === course.id));
        setSelected(remain);
        setTotal(total - course.price);
        toast.info(`${course.courseName} removed from your list`, {
            position: "top-center",
            theme: "colored",
        });
    }

    return (<>
        <div className="bg-white/99 border-b-[0.5px] z-60 border-indigo-200 sticky top-0">
            <nav className="flex items-center justify-between gap-5 py-3 px-5 w-[90%] mx-auto">
                <div>
                    <a href="">
                        <img src={NavLogo} alt="CourseNest" className="h-14 object-left" />
                    </a>
                </div>
                <ul className="flex gap-3">
                    <li className="py-2.5 px-5 bg-[#8a6fdb] text-white rounded-xl font-semibold hover:text-black hover:-translate-y-1 transition-transform duration-300 inline-block hover:shadow-lg">Total Cost: {total}</li>
                    <li><a onClick={() => setSidebar(true)} className="py-2.5 px-5 cursor-pointer bg-[#8a6fdb] text-white rounded-xl font-semibold hover:text-black hover:-translate-y-1 transition-transform duration-300 inline-block hover:shadow-lg">My Courses</a></li>
                </ul>
            </nav>
        </div>
        <div onClick={() => setSidebar(false)} className={`z-70 fixed inset-0 h-screen bg-black/40 transition-opacity duration-300 ${sidebar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`absolute right-0 top-0 overflow-y-auto overscroll-contain h-screen py-5 px-5 w-full bg-linear-to-br from-indigo-950 via-indigo-900 to-cyan-900 transition-transform duration-500 ${sidebar ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center w-[90%] mx-auto">
                    <h1 className="font-bold text-4xl text-white">My Courses</h1>
                    <button onClick={() => setSidebar(false)} className="self-end  text-2xl cursor-pointer py-2 px-6 rounded-full bg-white mr-10"><RxCross2 /></button>
                </div>
                {
                    selected.length === 0 ? (
                        <div className="flex flex-col items-center my-30 space-y-3 text-white">
                            <h1 className="text-4xl">No Courses Enrolled </h1>
                            <p>You haven't enrolled in any course yet.</p>
                            <button></button>
                            <button onClick={() => setSidebar(false)}
                                className={`from-indigo-700 to-cyan-600 flex items-center gap-1 cursor-pointer py-2 px-4 rounded-xl bg-linear-to-r text-white font-semibold text-sm shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200`}>
                                <CiCirclePlus className="inline text-xl font-semibold" /> Add Course
                            </button>
                        </div>
                    ) :
                        (<div className="grid grid-cols-5 gap-3 w-[90%] mx-auto mt-10">
                            {
                                (selected.map(course => <div>
                                    <div className="group  bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-indigo-100 flex flex-col h-full">

                                        {/* Image + Badges */}
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={course.courseImg}
                                                alt={course.courseName}
                                                className="h-52 w-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                                            />

                                            {/* Level badge (top-left) */}
                                            <span className="absolute top-3 left-3 bg-[#8a6fdb]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                                                {course.level}
                                            </span>

                                            {/* Duration badge (top-right) */}
                                            <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                                                ⏱ {course.duration}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex flex-col grow">
                                            <h2 className="text-lg font-bold text-gray-800 mb-1">
                                                {course.courseName}
                                            </h2>

                                            <div>
                                                <p className="text-sm text-gray-600 font-medium mb-3">
                                                    👨‍🏫 {course.instructor}
                                                </p>
                                                <span className="text-xl grew font-extrabold bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                                                    ৳{course.price}
                                                </span>
                                            </div>

                                            {/* Price + Button row */}
                                            <div className="flex items-center justify-between gap-3 mt-auto">
                                                <button className={`from-indigo-700 to-cyan-600 cursor-pointer w-full py-2 px-4 rounded-xl bg-linear-to-r text-white font-semibold text-sm shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200`}>Start</button>
                                                <button onClick={() => handleRemoveBtn(course)}
                                                    className={`from-indigo-700 to-cyan-600 cursor-pointer w-full py-2 px-4 rounded-xl bg-linear-to-r text-white font-semibold text-sm shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200`}>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>))
                            }
                        </div>)
                }
            </div>
        </div>
    </>);
};

export default Navbar;