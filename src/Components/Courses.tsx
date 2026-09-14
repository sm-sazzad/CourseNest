import { use, type Dispatch, type SetStateAction } from "react";
import type { IDataType } from "../DataType";
import CourseCard from "./CourseCard";

export interface PromisesProps {
    Promises: Promise<IDataType[]>,
    selected: IDataType[],
    setSelected: Dispatch<SetStateAction<IDataType[]>>,
    total: number,
    setTotal: Dispatch<SetStateAction<number>>
}


const Courses = ({ Promises, selected, setSelected, total, setTotal }: PromisesProps) => {
    const courses = use(Promises);
    console.log(courses)
    return (
        <div id="course" className="w-[90%] mx-auto  scroll-m-20">
            <div className="my-10 ">
                <h1 className="text-center font-extrabold text-5xl">All Courses</h1>
            </div>
            <div className="grid grid-cols-4 gap-3 mb-10">
                {
                    courses.map((course) => <CourseCard course={course} key={course.id} selected={selected} setSelected={setSelected} total={total} setTotal={setTotal} />)
                }
            </div>
        </div>
    );
};

export default Courses;