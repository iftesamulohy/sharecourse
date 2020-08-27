import React from 'react';
import fakeData from '../../fakeData/courseData';
import { useState } from 'react';
import Single from '../SingleCourse/Single';
import {CardGroup} from 'reactstrap';
import "./Shop.css"
import Summarry from '../Summarry/Summarry';
const Shop = () => {
    const [course, setCourse] = useState(fakeData);
    const [enroll,setEnroll]= useState([]);
    const handleEnroll = (course)=>{
        const newEnroll = [...enroll,course];
        setEnroll(newEnroll);
    }
    return (
        <div className="shop-container">
            <div className="single-product">
               <CardGroup>
               {
                course.map((course=><Single data={course} key={course.id} handleEnroll={handleEnroll}></Single>))
            }
                </CardGroup> 
           
            </div>
            <div>
                <Summarry enroll={enroll}></Summarry>
            </div>
            
        </div>
        
    );
};

export default Shop;