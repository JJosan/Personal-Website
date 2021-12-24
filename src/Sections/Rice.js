import '../App.css';
import rice from '../img/rice.png';
import { useState, useEffect } from 'react';
import { data } from '../firebase-config.js';
import { setDoc, doc, onSnapshot, collection } from 'firebase/firestore';

function Rice() {
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
        handleEdit();
        setX(randomWidth);
        setY(randomHeight);
    }

    return (
    <section style={{ backgroundColor: 'rgb(226, 229, 222)' }}>
        <div className='RiceGame'>
            <h2>Rice</h2>
            <p>Rice fields are an important part of my identity. My father, grandfather, and great-grandfather all harvested rice
                in the rice fields to live another day. I am the first generation in my family to escape the cycle to find a better life.
                When I advance in life, I will always remember the things that brought me this far.</p>    
        </div>
        <div className='PlayArea'>
            <img src={rice} onClick={clicked} style={{ position: 'relative', left: x + '%', top: y + '%'}}/>
        </div>
        <p>Total Rice Harvested: <strong>{num}</strong></p>
    </section>
    );
}

export default Rice;