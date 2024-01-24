import { Link } from 'react-router-dom';
import img from '../../../src/assets/img_9.png'
const More = () => {
    return (
        <div className='m-20'>
            <div className="hero bg-white shadow-xl p-20 m-auto rounded">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={img} className="max-w-sm rounded-lg" />
                    <div>
                        <p className='text-blue-600'>NOT SURE WHERE TO START?</p>
                        <h1 className="text-4xl font-bold mt-3">Want to know Special Offers & Updates of new courses?</h1>
                        <Link to='/register'><button className="btn bg-[#7B67F6] text-white mt-8">Join Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default More;