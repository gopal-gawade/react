import axios from 'axios';
import { use } from 'react';


const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    return response.json();
}

const fetchDataFunc = fetchData();

const Hookuse = () => {
    const data = use(fetchDataFunc);

    return (
        <div>
            <h3>use</h3>
            <p>{data?.title}</p>
        </div>
    );
}

export default Hookuse
