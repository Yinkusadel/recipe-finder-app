"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Recipe {
    title: string;
    image: string;
    instructions: string;
    ingredients: string[];
}

export default function Page({ params }: { params: Promise<{ RecipeId: string }> }) {
    const { RecipeId } = React.use(params);

    const [recipe, setRecipe] = React.useState<Recipe | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const apikey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
                const url = `https://api.spoonacular.com/recipes/${RecipeId}/information?apiKey=${apikey}`;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch recipe details');
                }

                const data = await response.json();
                setRecipe(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        if (RecipeId) {
            fetchRecipeDetails();
        }
    }, [RecipeId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!recipe) {
        return <div>No recipe found.</div>;
    }

    return (
        <div className="bg-white p-4 rounded shadow flex justify-center">
            <div className='w-[50%]'>
                <Image
                    alt={recipe.title}
                    className="w-full h-72 object-cover rounded mb-4"
                    height={200} // height in pixels
                    src={recipe.image} // source of the image
                    width={300} // width in pixels
                />
                <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                <p className="text-gray-700 mb-4">{recipe.instructions}</p>
                <Link className="text-green-600 hover:underline" href="/">
                    Back to Home
                </Link>
            </div>

        </div>
    );
}
