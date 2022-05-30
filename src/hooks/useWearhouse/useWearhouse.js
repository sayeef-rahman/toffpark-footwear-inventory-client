import { useEffect, useState } from "react";

const useWearhouse= () =>{
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-chamber-78225.herokuapp.com/wearhouse')
            .then(res => res.json())
            .then(data => setShoes(data));
    }, [])

    return [shoes, setShoes];
}

export default useWearhouse;
