"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Recipe {
    title: string;
    image: string;
    id: number;
}

export default function RandomRecipe() {
    const [recipes, setRecipes] = useState<Recipe[]>([]); // Change state to hold an array of recipes
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const apikey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY; // Use the exposed env variable
                const url = `https://api.spoonacular.com/recipes/random?apiKey=${apikey}&number=6`; // Fetch 6 random recipes

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch recipes');
                }

                const data = await response.json();
                setRecipes(data.recipes); // Set the recipes array

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

        fetchRecipes();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            {recipes.length > 0 ? (
                <>
                    {recipes.map((recipe, index) => (
                        <div key={index} className="bg-white p-4 rounded shadow">
                            <Image
                                alt={recipe.title}
                                className="w-full h-48 object-cover rounded mb-4"
                                height={200} // height in pixels
                                src={recipe.image} // source of the image
                                width={300} // width in pixels
                            />
                            <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                            <Link href={`/view-recipe/${recipe.id}`} className="text-green-600 hover:underline">
                                View Recipe
                            </Link>

                        </div>
                    ))}
                </>
            ) : (
                <p>No recipes found.</p>
            )}
        </>
    );
}
