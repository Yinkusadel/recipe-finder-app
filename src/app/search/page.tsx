"use client"
import Link from 'next/link';
import React, { useState } from 'react';

interface Recipe {
    title: string;
    image: string;
    id: number; 
}

export default function SearchRecipe() {

    const [query, setQuery] = useState(''); // Store the search query
    const [recipes, setRecipes] = useState<Recipe[]>([]); // Store fetched recipes
    const [loading, setLoading] = useState(false); // Manage loading state
    const [error, setError] = useState<string | null>(null); // Store error messages


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };


    const handleSearchSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page refresh on form submission
        if (!query) return; // Don't search if the input is empty

        setLoading(true);
        setError(null); // Clear previous errors

        try {
            const apikey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY; // API key
            const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&query=${query}`; // Search API

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }

            const data = await response.json();
            setRecipes(data.results); // Set the recipes from the response
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setLoading(false);
        }
    };



    return (
        <section className="mb-8 px-2">
            <h2 className="text-3xl font-bold mb-4">Search for Recipes</h2>
            <form onSubmit={handleSearchSubmit} className="flex space-x-2">
                <input
                    className="flex-grow p-2 border border-gray-300 rounded"
                    placeholder="Search by ingredient..."
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                />
                <button className="bg-green-600 text-white p-2 rounded" type="submit" disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {error && <p className="text-red-600 mt-4">{error}</p>} {/* Display error if any */}

            {recipes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {recipes.map((recipe, index) => (
                        <div key={index} className="bg-white p-4 rounded shadow">
                            <img
                                alt={recipe.title}
                                className="w-full h-48 object-cover rounded mb-4"
                                src={recipe.image}
                                height="200"
                                width="300"
                            />
                            <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                            <Link href={`/view-recipe/${recipe.id}`} className="text-green-600 hover:underline">
                                View Recipe
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                query && !loading && <p>No recipes found.</p>// Display message if no recipes found and not loading
            )}
        </section>
    );
}
