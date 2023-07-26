import React, { useState, useEffect } from 'react';
import './style.css';

export default function News() {
    const [news, setNews] = useState([]);
    const [count, setCount] = useState(8);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://newsapi.org/v2/everything?q=weather forecast&apiKey=7c408f9fd34d4b8bb3f918f6dc696b1e`;
            try {
                const response = await fetch(url);
                const respjson = await response.json();
                setNews(respjson.articles);
                setLoading(false);
            } catch (e) {
                console.log("Error occurred");
                console.error(e);
                setLoading(false);
            }
        };

        fetchApi();
    }, []);

    const handleCount = () => {
        setCount(count + 8);
    };

    return (
        <div>
            <div className='row p-3'>
                <h2 className='text-center pt-3 text-white'>Weather Headlines:</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : news.length > 0 ? (
                    news.slice(0, count).map((temp, index) => (
                        <div key={index} className='news_card bg-white col-sm-6 col-md-4 col-lg-3 p-1 mt-2'>
                            <div className=''>
                                <a href={temp.url} target="_main"><img src={temp.urlToImage} alt="image" className="img-fluid text-center news_image" /></a>
                                <h6 className=''>{temp.title}</h6>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No news available</p>
                )}
            </div>
            {!loading && (
                <div className='row justify-content-center align-items-center mb-5'>
                    <button className='col-3 btn btn-primary' onClick={handleCount}>Read More</button>
                </div>
            )}
        </div>
    );
}
