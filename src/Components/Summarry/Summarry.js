import React from 'react';
import {Button} from 'reactstrap';
import "./Summarry.css"

const Summarry = (props) => {
    const enroll = props.enroll;
    const total = enroll.reduce((total,course)=> total+course.price,0)
    const examFee = total*0.25;
    const subTotal = total+examFee;
    return (
        <div className="enroll-wraper">
            <h4>Enroll Summary</h4>
            <p>Total Course: {enroll.length}</p>
            <p>Course Bill: {total}$</p>
            <p>Exam Fees: {examFee.toFixed(2)}$</p>
            <p>Total Amount : {subTotal.toFixed(2)}$</p>
            <Button color="danger">Complete Enroll</Button>

        </div>
    );
};

export default Summarry;