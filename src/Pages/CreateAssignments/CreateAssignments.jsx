import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../context/AuthProvider";
const CreateAssignments = () => {
    const { user } = useContext(AuthContext);
    const handleCreateAssignment = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const desc = form.desc.value;
        const marks = form.marks.value;
        const photo = form.photo.value;
        const dLevel = form.dLevel.value;
        const dateValue = form.dateValue.value;
        const email = user?.email;

        const newAssignment = { title, desc, marks, photo, dLevel, dateValue, email }
        // console.log(newAssignment);
        fetch('http://localhost:5000/assignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Assignment Created Successfully')
                }
                form.reset();
            })

    }
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="p-20">
            <h2 className="text-2xl font-bold text-center">Create Assignment</h2>
            <form onSubmit={handleCreateAssignment}>
                {/* form title and desc row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Assignment Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Assignment Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="desc" className="textarea textarea-bordered w-full" placeholder="Description" required></textarea>
                        </label>
                    </div>
                </div>
                {/* form marks and img url row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Marks</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="marks" placeholder="Marks" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Thumbnail Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Image URL" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* form difficulty level and date row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Difficulty Level</span>
                        </label>
                        <label className="input-group">
                            <select className="select select-bordered w-full" name='dLevel' required>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Due Date</span>
                        </label>
                        <label className="input-group">
                            <DatePicker  selected={startDate} onChange={(date) => setStartDate(date)} name="dateValue" className='input input-bordered w-full' required />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Create Assignment" className="btn btn-block" />

            </form>
            <Toaster />
        </div>
    );
};

export default CreateAssignments;