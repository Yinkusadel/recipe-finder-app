"use client"

import { FormEvent, useState } from "react";

export default function Page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        setIsSubmitting(true); 
        setError(null); 

        // Prepare the data to be sent to Formspree
        const formData = {
            name,
            email,
            message,
        };

        try {
            // Send the data to Formspree via a POST request
            const response = await fetch("https://formspree.io/f/mqakyyga", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Check if the request was successful
            if (!response.ok) {
                throw new Error("Failed to send message. Please try again.");
            }

            // If successful, redirect to the homepage
            window.location.href = "/contact-us/thank-you"; // Redirect to home page
        } catch (err: unknown) {
            // Check if 'err' is an instance of Error before accessing 'message'
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred.");
            }
        } {
            setIsSubmitting(false); // Reset the submitting state
        }
    };

    return (
        <div className="">
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24 bg-green-5">
                        <div className="flex items-center lg:mb-0 mb-10 ">
                            <div>
                                <h4 className="text-green-600 text-base font-medium leading-6 mb-4 lg:text-left text-center">Contact Us</h4>
                                <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">Reach Out To Us</h2>

                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        className="w-full h-14 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="email"
                                        className="w-full h-14 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <textarea
                                        className="w-full h-32 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                                        placeholder="Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    ></textarea>

                                    {error && (
                                        <div className="text-red-600 mb-4">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-green-900 bg-green-600 shadow-sm"
                                    >
                                        {isSubmitting ? "Sending..." : "Send"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
