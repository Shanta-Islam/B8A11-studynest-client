import img from '../../../src/assets/cta-bg.jpg'

const Details = () => {
    return (
        <div className="hero bg-[#F5F5F5] p-10">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <img src={img} className='w-96' />
                <div>
                    <h1 className="text-2xl font-bold">Start your journey With us</h1>
                    <div className='grid grid-cols-2 mt-5'>
                        <div className='flex gap-5 items-center'>
                            <div className="avatar placeholder">
                                <div className="bg-[#dd246e] text-neutral-content rounded-full w-10">
                                    <span className="text-xl">01</span>
                                </div>
                            </div>
                            <h3 className='text-lg font-medium'>Signup with all info</h3>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <div className="avatar placeholder">
                                <div className="bg-[#00c0a6] text-neutral-content rounded-full w-10">
                                    <span className="text-xl">02</span>
                                </div>
                            </div>
                            <h3 className='text-lg font-medium'>Take your Assignment</h3>
                        </div>
                        
                    </div>
                    <div className='grid grid-cols-2 mt-5'>
                        <div className='flex gap-5 items-center'>
                            <div className="avatar placeholder">
                                <div className="bg-[#1162FC] text-neutral-content rounded-full w-10">
                                    <span className="text-xl">03</span>
                                </div>
                            </div>
                            <h3 className='text-lg font-medium'>Learn from online</h3>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <div className="avatar placeholder">
                                <div className="bg-[#DD246E] text-neutral-content rounded-full w-10">
                                    <span className="text-xl">04</span>
                                </div>
                            </div>
                            <h3 className='text-lg font-medium'>Get attach new users</h3>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;