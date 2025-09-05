import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

const HookuseMemo = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    const FetchData = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const data = await res.data;
            setData(data)
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        FetchData();
    }, []);

    /*
    const findLongData1 = (data) => {
        let longData = "";

        for (let i = 0; i < data.length; i++) {
            let curr = data[i].title;

            if (curr.length > longData.length) {
                longData = curr;
            }
        }
        return longData;
    }
    */

    const findLongData2 = (data) => {
        if (data?.length === 0) {
            return null;
        }

        let longData = "";

        data?.forEach((v) => {
            //console.log(v?.title?.repeat(10000));
            if (v?.title?.length > longData.length) {
                longData = v.title;
            }
        });
        console.log(longData)
        return longData;
    }

    const MemoFunction = useMemo(() => {
        return findLongData2(data);
    }, [data]);

    return (
        <div>
            <h3>useMemo</h3>

            {/*<p>{findLongData1(data)}</p>*/}
            <p>{MemoFunction}</p>

            <button onClick={() => setCount(count + 1)}>
                {count}
            </button>
        </div>
    )
}

export default HookuseMemo
