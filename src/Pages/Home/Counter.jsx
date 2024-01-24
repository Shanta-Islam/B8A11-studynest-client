
const Counter = () => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 bg-[#7B67F6] text-white p-14"  style={{backgroundImage: 'url(https://i.ibb.co/R4T1zc9/illustration-bg.png)'}}>
            <div className="text-center">
                <p className="text-4xl font-medium">10</p>
                <h3 className="text-2xl">Students</h3>
            </div>
            <div className="text-center">
                <p className="text-4xl font-medium">15</p>
                <h3 className="text-2xl">Online Assignments</h3>
            </div>
            <div className="text-center">
                <p className="text-4xl font-medium">6</p>
                <h3 className="text-2xl">Feedback</h3>
            </div>
            <div className="text-center">
                <p className="text-4xl font-medium">100%</p>
                <h3 className="text-2xl">Satisfaction</h3>
            </div>

        </div>
    );
};

export default Counter;