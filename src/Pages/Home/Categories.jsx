import icon1 from '../../../src/assets/icon1.png';
import icon2 from '../../../src/assets/icon2.png';
import icon3 from '../../../src/assets/icon4.png';
import icon4 from '../../../src/assets/icon6.png';
const Categories = () => {
    return (
        <div className=" my-24">
            <div>
                <h2 className="text-2xl font-bold text-center mb-10">Categories you want to learn</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 m-5">
                <div className="card lg:w-72 h-60 bg-[#1162fc] text-primary-content m-auto">
                    <div className="card-body text-center">
                        <div className="flex items-center justify-center">
                            <div className="rounded-full bg-white p-5 ">
                                <img src={icon3} alt="" />
                            </div>
                        </div>
                        <h2 className="card-title justify-center text-white">Web Development</h2>
                    </div>
                </div>
                <div className="card  lg:w-72 h-60 bg-[#00c0a6] text-primary-content m-auto">
                    <div className="card-body text-center">
                        <div className="flex items-center justify-center">
                            <div className="rounded-full bg-white p-5 ">
                                <img src={icon1} alt="" />
                            </div>
                        </div>
                        <h2 className="card-title justify-center text-white">Data Science & Analytics</h2>
                    </div>
                </div>
                <div className="card  lg:w-72  h-60 bg-[#DD246E] text-primary-content m-auto">
                    <div className="card-body text-center">
                        <div className="flex items-center justify-center">
                            <div className="rounded-full bg-white p-5 ">
                                <img src={icon4} alt="" />
                            </div>
                        </div>
                        <h2 className="card-title justify- text-white">Algebra Math Calculation</h2>
                    </div>
                </div>
                <div className="card  lg:w-72 h-60 bg-[#fa7919] text-primary-content m-auto">
                    <div className="card-body text-center">
                        <div className="flex items-center justify-center">
                            <div className="rounded-full bg-white p-5 ">
                                <img src={icon2} alt="" />
                            </div>
                        </div>
                        <h2 className="card-title justify-center text-white">Artificial Intellegence</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;