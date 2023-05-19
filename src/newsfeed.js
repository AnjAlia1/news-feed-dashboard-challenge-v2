import { useEffect, useState } from "react";

export const Post = () => {
    const [isReadMore, setisReadMore] = useState(true);
    const [result, setResult] = useState({
      "author": "Sakshita Khosla",
      "content": "Mumbai witnessed the 'Zero Shadow Day', which was also witnessed by people in Bengaluru and Hyderabad recently. Pictures and videos of the rare phenomenon, in which no shadows of vertical objects are formed at solar noon, were shared online. People did experiments with cylindrical objects to demonstrate the phenomenon.",
      "date": "16 May 2023,Tuesday",
      "id": "b86dc42d972d4803b397615ab291fc3e",
      "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/05_may/16_tue/img_1684210545273_382.jpg?",
      "readMoreUrl": "https://www.hindustantimes.com/cities/mumbai-news/mumbai-witnesses-zero-shadow-day-after-hyderabad-bengaluru-101684159619826-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
      "time": "09:51 am",
      "title": "Mumbai witnesses 'Zero Shadow Day', pics surface",
      "url": "https://www.inshorts.com/en/news/mumbai-witnesses-zero-shadow-day-pics-surface-1684210904335"
    });
    const toggleReadMore = () => {
        setisReadMore(!isReadMore)
    }
  
    // useEffect(() =>{
    //   const getData = async () =>{
    //    const apiResult = await fetch('https://inshorts.deta.dev/news?category=science')
    //     .then(res => {
    //       return res.json();
    //     })
    //     // .then(data=>{})
    //     .then(information => {
    //       return information;
    //       setResult(information);
    //       // console.log('data useEffect', data)
    //       // console.log('data', data.data)
    //       // console.log('data usffect',  result.data)
    //     })
    //   }
    //     getData();
    //       // (err) => {
    //       //   return console.error(err)
    //       // })
    //       // )
    //   }, [])

    // useEffect(() =>{
    //   const getData = async () =>{
    //    const apiResult = await fetch('https://inshorts.deta.dev/news?category=science');
    // const finalData = await apiResult.json();
    // setResult(finalData);
    //     // })
    //   }
    //     getData();
    //   }, [])

    return(
      result.data.map((val) =>{
            return( 
            <div >
              <div><h6>{val.author}</h6>
              <img src={val.imageUrl} className="news-img"></img> 
                    <div className="news-box">
                            <p value={val.id}>{isReadMore ? val.content.slice(0, 120) : val.content}
                                <span key={val.id} value={val.id} onClick={(e) => toggleReadMore(e)}>{isReadMore ? '..Readmore' : 'showless'}</span>
                            </p>
                            <span>{val.time}</span>
                        </div>   
                    </div>
                </div>
            )
        })  
    )
    
    }

