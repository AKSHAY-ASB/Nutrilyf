import React from 'react';
import './NutritionFactsTable.css'

const NutritionFactsTable = () => {
    const jaggeryFacts = {
        servingSize: '100g',
        calories: 383,
        totalFat: '0g',
        sodium: '10mg',
        totalCarbohydrate: '98g',
        dietaryFiber: '0g',
        sugars: '98g',
        protein: '0.4g'
    };

    const sugarFacts = {
        servingSize: '100g',
        calories: 387,
        totalFat: '0g',
        sodium: '1mg',
        totalCarbohydrate: '100g',
        dietaryFiber: '0g',
        sugars: '100g',
        protein: '0g'
    };

    return (
        <div className='container'>
            <h1 className='component-title-text'>Jaggery vs Sugar Nutrition Facts</h1>
            <table className="nutrition-table">
                <thead>
                    <tr>
                        <th>Nutrient</th>
                        <th>Jaggery</th>
                        <th>Sugar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Serving Size</td>
                        <td>{jaggeryFacts.servingSize}</td>
                        <td>{sugarFacts.servingSize}</td>
                    </tr>
                    <tr>
                        <td>Calories</td>
                        <td>{jaggeryFacts.calories}</td>
                        <td>{sugarFacts.calories}</td>
                    </tr>
                    <tr>
                        <td>Total Fat</td>
                        <td>{jaggeryFacts.totalFat}</td>
                        <td>{sugarFacts.totalFat}</td>
                    </tr>
                    <tr>
                        <td>Sodium</td>
                        <td>{jaggeryFacts.sodium}</td>
                        <td>{sugarFacts.sodium}</td>
                    </tr>
                    <tr>
                        <td>Total Carbohydrate</td>
                        <td>{jaggeryFacts.totalCarbohydrate}</td>
                        <td>{sugarFacts.totalCarbohydrate}</td>
                    </tr>
                    <tr>
                        <td>Dietary Fiber</td>
                        <td>{jaggeryFacts.dietaryFiber}</td>
                        <td>{sugarFacts.dietaryFiber}</td>
                    </tr>
                    <tr>
                        <td>Sugars</td>
                        <td>{jaggeryFacts.sugars}</td>
                        <td>{sugarFacts.sugars}</td>
                    </tr>
                    <tr>
                        <td>Protein</td>
                        <td>{jaggeryFacts.protein}</td>
                        <td>{sugarFacts.protein}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default NutritionFactsTable;
