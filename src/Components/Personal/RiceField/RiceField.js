import React, { useState, useEffect } from 'react';
import './RiceField.css';
import riceplant from './riceplant.png';
import { data } from '../../../firebase-config.js';
import { setDoc, doc, onSnapshot, collection } from 'firebase/firestore';
import Fade from 'react-reveal/Fade';

function RiceField() {

    const [d, setD] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [total, setTotal] = useState([]);
    let num = 0;
    try {
        num = total[0].value;
    } catch (e) {
        // do nothing
    }


    useEffect(() =>
        onSnapshot(collection(data, "Total"), (snapshot) =>
            setTotal(snapshot.docs.map(doc => doc.data()))
        ),
        []
    );

    const handleEdit = async () => {
        const docRef = doc(data, "Total", "Rice");
        const payload = { value: total[0].value + 1 };
        setDoc(docRef, payload);
    }

    function randomWidth() {
        return Math.floor((Math.random() * 80) - 40);
    }

    function randomHeight() {
        return Math.floor((Math.random() * 70) - 35);
    }

    function clicked() {
        disappear();
        handleEdit();
        setX(randomWidth);
        setY(randomHeight);
    }

    function disappear() {
        setD(true);
    }


    return (
        <Fade bottom>
            <div className='ricefield'>
                <div>
                    <hr />
                    <h1>Rice Field</h1>
                </div>
                <div className='ricefield_info'>
                    I want to dedicate a section to rice.
                    Rice has a deep cultural meaning for myself
                    and my family. Not only is it our staple
                    source of carbohidrates, rice has served
                    as the source of income in my family for
                    many generations.
                </div>
                <p className='ricefield_ricecount'>Total Rice Harvested: <strong>{num}</strong></p>
                <div className='ricefield_play'>
                    <img src={riceplant} onClick={clicked} style={{ width: '100px', position: 'relative', left: x + '%', top: y + '%' }} />
                    <p hidden={d}>click me!</p>
                </div>
            </div>
        </Fade>
    );
}

export default RiceField;