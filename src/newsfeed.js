import { useEffect, useState } from "react";

export const Post = () => {
    const [isReadMore, setisReadMore] = useState(true);
    const [result, setResult] = useState({});
    const toggleReadMore = () => {
        setisReadMore(!isReadMore)
    }

    useEffect(() => {
        fetch('https://inshorts.deta.dev/news?category=science')
          .then(res => {
            return res.json();
          })
          .then((data) => {
            setResult(data);
            console.log('data useEffect', data)
            console.log('data', data.data)
            console.log('data usffect',  result.data)
          },
          (err) => {
            return console.error(err)
          })
      }, [])

    return(
      result.data.map((data) =>{
            return( 
            <div >
              <div><h6>{data.author}</h6>
              <img src={data.imageUrl} className="news-img"></img> 
                    <div className="news-box">
                            <p value={data.id}>{isReadMore ? data.content.slice(0, 120) : data.content}
                                <span key={data.id} value={data.id} onClick={(e) => toggleReadMore(e)}>{isReadMore ? '..Readmore' : 'showless'}</span>
                            </p>
                            <span>{data.time}</span>
                        </div>
                         
                    </div>
                </div>
            )
        })  
    )
    
    }

