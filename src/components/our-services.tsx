import { Link } from "react-router-dom";

function OurServices() {
    return (
        <section className={`w-full h-screen md:h-fit lg:h-screen px-6 sm:px-10 lg:px-24 pb-12 flex flex-col gap-3`}>
            <div>
                <h2 className={`text-primary text-lg xl:text-xl 2xl:text-2xl font-semibold`}>Our Services</h2>
                <h1 className={`text-2xl font-bold`}>Websites Built for Your Goals</h1>
            </div>    
            <p className={`text-md xl:text-lg 2xl:text-xl`}>
                We create websites that align with your needs, drive results, and help you grow. Our focus is on delivering digital
                solutions that are both functional and impactful. Each website is built with attention to detail, ensuring it meets your
                goals and adapts to future growth.
            </p>
            <p className={`text-md xl:text-lg 2xl:text-xl`}>
                Solutions made to fit your needs. Choose what works best for you.
            </p> 
            <div className={`flex flex-col sm:grid sm:grid-cols-2 gap-4 lg:gap-6`}>
                <div className={`bg-accent-2 py-6 md:py-8 px-6 md:px-8 lg:px-10 rounded-xl flex flex-col gap-1.5`}>
                    <img src="/images/person.png" alt="person" className={`w-14`}/>
                    <h3 className={`text-white text-lg xl:text-xl 2xl:text-2xl font-semibold`}>Personal Website — Make Your Mark Online!</h3>
                    <p className={`text-white text-md xl:text-lg 2xl:text-xl`}>
                        A clean, modern site to showcase your skills and
                        projects. Perfect for designers, developers,
                        freelancers, or students.
                    </p>
                </div>
                <div className={`bg-accent-2 py-6 md:py-8 px-6 md:px-8 lg:px-10 rounded-xl flex flex-col gap-1.5`}>
                    <img src="/images/success.png" alt="person" className={`w-14`}/>
                    <h3 className={`text-white text-lg xl:text-xl 2xl:text-2xl font-semibold`}>Business Page — Make Your Brand Stand Out!</h3>
                    <p className={`text-white text-md xl:text-lg 2xl:text-xl`}>
                        An elegant website built to highlight your
                        services, engage visitors, and build trust with
                        potential customers.
                    </p>
                </div>
            </div>
            <div className={`flex justify-end`}>
                <Link to="/contact" className={`w-fit mt-8 flex items-center gap-2 border border-transparent border-b-black border-b-2`}>
                    <span className={`text-lg font-semibold`}>Get Yours Now!</span>
                    <i className={`ri-arrow-right-line text-xl`} />
                </Link>
            </div>
            
        </section>
    );
}

export default OurServices