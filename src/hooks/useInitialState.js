import {useState, useEffect} from'react';

const useInitialState = (API_URL)=>{
    const [videos, setVideos] = useState({mylist:[], trends:[], originals:[]});
    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);
    return videos;
}

export default useInitialState;