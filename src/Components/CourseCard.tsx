import type { Dispatch, SetStateAction } from "react";
import type { IDataType } from "../DataType";
import { toast } from "react-toastify";

export interface CourseProps {
    course: IDataType;
    selected: IDataType[],
    setSelected: Dispatch<SetStateAction<IDataType[]>>,
    total: number,
    setTotal: Dispatch<SetStateAction<number>>
}


const CourseCard = ({ course, selected, setSelected, total, setTotal }: CourseProps) => {

    const isSelected = selected.some(n => n.id === course.id);

    const handleAddBtn = (course: IDataType) => {
        const newSelected = [course, ...selected];
        setSelected(newSelected);
        toast.success(`${course.courseName} course enrolled successfully!`, {
            position: "top-center",
            theme: "colored",
        });
    }

    return (
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-indigo-100 flex flex-col">

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
            <div className="p-5 flex flex-col ">
                <h2 className="text-lg font-bold text-gray-800 mb-1">
                    {course.courseName}
                </h2>

                <p className="text-sm text-gray-600 font-medium mb-3">
                    👨‍🏫 {course.instructor}
                </p>

                {/* Price + Button row */}
                <div className="mt-auto flex items-center justify-between gap-3">
                    <span className="text-xl font-extrabold bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                        ৳{course.price}
                    </span>
                    <button disabled={isSelected}
                        onClick={() => { handleAddBtn(course); setTotal(total + course.price); }} className={`${isSelected ? "from-indigo-800 to-cyan-700" : "from-indigo-700 to-cyan-600"} cursor-pointer py-2 px-4 rounded-xl bg-linear-to-r text-white font-semibold text-sm shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200`}>
                        {
                            isSelected ? "Enrolled" : "Enroll Now"
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;