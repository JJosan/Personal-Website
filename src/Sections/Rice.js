import '../App.css';
import rice from '../img/rice.png';
import { useState, useEffect } from 'react';
import { data } from '../firebase-config.js';
import { setDoc, doc, onSnapshot, collection } from 'firebase/firestore';

function Rice() {

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
        onSnapshot(collection(data,"Total"),(snapshot) => 
        setTotal(snapshot.docs.map(doc => doc.data()))
        ),
     []
    );

    const handleEdit = async () => {
        const docRef = doc(data, "Total", "Rice");
        const payload = {value : total[0].value + 1};
        setDoc(docRef, payload);
    }

    function randomWidth() {
        return Math.floor(Math.random() * (60 + 60) - 60);
    }
    
    function randomHeight() {
        return Math.floor(Math.random() * (60 + 10) - 10);
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
    <section style={{ backgroundColor: 'rgb(226, 229, 222)' }}>
        <div className='RiceGame'>
            <h2>Rice</h2>
            <p>I want to dedicate a section to rice. Rice has a deep cultural meaning for myself and my family. Not only
                is it our staple source of carbohidrates, rice has served as the source of income in my family for many generations.
                When I make any accomplishments, I will always remember all the things that allowed me to reach this far.</p>    
        </div>
        <div className='PlayArea'>
            <img src={rice} onClick={clicked} style={{ position: 'relative', left: x + '%', top: y + '%'}}/>
            <p hidden={d}>click me!</p>
        </div>
        <p>Total Rice Harvested: <strong>{num}</strong></p>
    </section>
    );
}

export default Rice;