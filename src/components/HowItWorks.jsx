import React from "react";

const HowItWorks = () => {
    return (
        <div className="mt-12">
            <div className="max-w-4xl mx-auto bg-white/30 bg-clip-padding backdrop-blur-lg backdrop-saturate-150 border border-white/20 rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            1
                        </div>
                        <h3 className="text-xl font-bold mb-2">Sign Up</h3>
                        <p className="text-black text-sm">
                            Create an account and provide your details to get started.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            2
                        </div>
                        <h3 className="text-xl font-bold mb-2">Find a Tutor</h3>
                        <p className="text-black text-sm">
                            Browse our list of qualified tutors and find the perfect match for your needs.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            3
                        </div>
                        <h3 className="text-xl font-bold mb-2">Start Learning</h3>
                        <p className="text-black text-sm">
                            Schedule sessions and begin your learning journey with your new tutor.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;