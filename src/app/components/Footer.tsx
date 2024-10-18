import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">&copy; 2024 HR Solutions. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
