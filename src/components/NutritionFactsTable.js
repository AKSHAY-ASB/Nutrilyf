import React from 'react';
import './NutritionFactsTable.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "../images/sugarcane.jpg";
import { GiSugarCane } from 'react-icons/gi';


const NutritionFactsTable = () => {
    const jaggeryFacts = {
        servingSize: '385 Kcl',
        protein: '0.40 gm',
        calcium: '75.0 mg',
        phosphours: '37.0 mg',
        iron: '2.50 mg',
        fat: '0.40 gm',
        vitaminC: '0.50 gm',
        carbohydrates: '95.0 gm'

    };

    const sugarFacts = {
        servingSize: '385 Kcl',
        protein: '0.10 gm',
        calcium: '12.40 mg',
        phosphours: '1.00 mg',
        iron: '-',
        fat: '-',
        vitaminC: '-',
        carbohydrates: '98.40 gm'
    };

    return (
        <div className='container'>
            <div className="row">
                <h1 className='component-title-text-none'>Jaggery vs Sugar Nutrition Facts</h1>
            </div>


            <Container >
                <Row>
                    <Col sm={4} className='pt-4'>
                        <div className="card">
                            <div className="card-content">
                               
                                {/* Relationship with a nice person is like sugarcane,
                                 you break it, crush it, squeeze it, even beat or grind it, still you will get only sweetness. */}
                                    {/* <img src={Logo} style={{width:'100%'}}/> */}
                                    <div className='sugarcaneImg'>
                                    <GiSugarCane />
                                    <GiSugarCane />
                                    <GiSugarCane />
                                    </div>
                                    <div className='card-text'>
                                    <h1 style={{color:'#F5860C'}}>Relationship</h1>
                                    <p> with a nice person is like</p>
                                    <h1 className='py-2' style={{color:'#F5860C'}}>sugarcane</h1>
                                    <p>you break it, crush it,</p>
                                    <p>squeeze it, even beat </p>
                                    <p>or grind it,</p>
                                    <p>still you will get only</p>
                                    <h1 className='py-3' style={{color:'#F5860C'}}>sweetness</h1>
                                    </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={8} className='pt-4'>
                    <h3 className='tbl-reponsive pb-3'>Jaggery vs Sugar Nutrition Facts</h3>
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
                                    <td>Energy</td>
                                    <td>{jaggeryFacts.servingSize}</td>
                                    <td>{sugarFacts.servingSize}</td>
                                </tr>
                                <tr>
                                    <td>Protein</td>
                                    <td>{jaggeryFacts.protein}</td>
                                    <td>{sugarFacts.protein}</td>
                                </tr>
                                <tr>
                                    <td>Calcium</td>
                                    <td>{jaggeryFacts.calcium}</td>
                                    <td>{sugarFacts.calcium}</td>
                                </tr>
                                <tr>
                                    <td>Phosphorus</td>
                                    <td>{jaggeryFacts.phosphours}</td>
                                    <td>{sugarFacts.phosphours}</td>
                                </tr>
                                <tr>
                                    <td>Iron</td>
                                    <td>{jaggeryFacts.iron}</td>
                                    <td>{sugarFacts.iron}</td>
                                </tr>
                                <tr>
                                    <td>Fat</td>
                                    <td>{jaggeryFacts.fat}</td>
                                    <td>{sugarFacts.fat}</td>
                                </tr>
                                <tr>
                                    <td>Vitamin C</td>
                                    <td>{jaggeryFacts.vitaminC}</td>
                                    <td>{sugarFacts.vitaminC}</td>
                                </tr>
                                <tr>
                                    <td>Carbohydrates</td>
                                    <td>{jaggeryFacts.carbohydrates}</td>
                                    <td>{sugarFacts.carbohydrates}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NutritionFactsTable;
