import React, { useState, useEffect, createContext, useContext } from 'react'
import './style.css'

export default function News() {

    const [news, setnews] = useState([])
    const [count,setcount]=useState(8);

    useEffect(() => {
        const fetchApi = async () => {

            const url = `https://newsapi.org/v2/everything?q=weather forecast&apiKey=7c408f9fd34d4b8bb3f918f6dc696b1e`
            // const url = `https://newsdata.io/api/1/news?apikey=pub_27930e6ae2f2e891747d8cb93f0865b9cb8cd `
            try {

                const response = await fetch(url);
                const respjson = await response.json();

                console.log("news is ")
                setnews(respjson.articles)
                console.log(news)

            }

            catch (e) {
                console.log("error occured")
                console.error(e)

            }

        }

        fetchApi();


    }, []);

    
    const handlecount =()=>{
        setcount(count+4)
    }


    return (
        <div>
            <div className='row p-3'>

            <h2 className='text-center pt-3 text-white'>Weather Headlines :</h2>

                {
                    news.slice(0,count).map((temp, index) => {
                        
                            return (
                                <div className='news_card bg-white col-sm-6 col-md-4 col-lg-3 p-1 mt-2'>
                                    <div className=''>
                                        <a href={temp.url} target="_main"><img src={temp.urlToImage} alt="image" className="img-fluid text-center news_image" /></a>
                                        <h6 className=''>{temp.title}</h6>
                                    </div>
                                </div>
                            )
                        
                        

                    })
                }

                

            </div>
            <div className='row justify-content-center align-items-center mb-5'>
                <button className='col-3 btn btn-primary' onClick={handlecount}>Read More</button>
            </div>
        
        </div>
    )
}
