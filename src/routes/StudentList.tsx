import data from '../data.json';
import {Link} from "react-router-dom";

export default function StudentList() {
    
    const students = data.data.students;
    console.log(students);
    
    
    return(
        <>
            <h1>학생명단</h1>
            <div>
                {students.map((students) => (
                    <h4 key={students.id}>
                        <Link to={`/studentlist/${students.id}`}>
                            {students.name}
                        </Link>
                    </h4>
                ))}
            </div>
        </>
    );
}