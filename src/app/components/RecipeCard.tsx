import React from 'react'

export default function RecipeCard() {
    return (
        <div className="bg-white p-4 rounded shadow">
            <img alt="A delicious plate of spaghetti with tomato sauce and basil" className="w-full h-48 object-cover rounded mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/0cTgUmOQfCVKe0WZLrrWLzSzS9eNJvOtfTpzCfVeMRf6H8P6JA.jpg" width="300" />
            <h3 className="text-xl font-bold mb-2">
                Spaghetti Bolognese
            </h3>
            <p className="text-gray-700 mb-4">
                A classNameic Italian pasta dish with rich, meaty sauce.
            </p>
            <a className="text-green-600 hover:underline" href="#">
                View Recipe
            </a>
        </div>
    )
}
