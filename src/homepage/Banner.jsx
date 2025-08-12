import React from 'react';

const Banner = () => {
return (
    <div
        className="relative h-screen flex items-center justify-start"
        style={{
            backgroundImage: "url('https://res.cloudinary.com/dzf1orh6a/image/upload/v1754641087/7042_uy4khn.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-start w-1/2 pl-16 text-white">
            <h1 className="text-5xl font-bold mb-4">Exquisite Jewelry for Every Occasion</h1>
            <p className="text-lg mb-8">Discover our stunning collection of handcrafted jewelry, designed to make you shine.</p>
            <button className="bg-[#D4AF37] text-white font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">Shop Now</button>
        </div>
    </div>
);
};

export default Banner;