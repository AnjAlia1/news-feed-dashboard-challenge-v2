import { useEffect, useState } from "react";

export const Post = () => {
  const [isReadMore, setisReadMore] = useState(true);
  const [result, setResult] = useState({
    category: "science",
    data: [
      {
        author: "Pragya Swastik",
        content:
          "Traffic-related air pollution causes memory loss and cognitive decline and triggers neurological pathways associated with the onset of Alzheimer's, according to a study by researchers from the University of California, Irvine. \"The link between air pollution and Alzheimer's is concerning...Our findings are just one example of what particulate matter can do to brain function,\" a researcher said.",
        date: "15 May 2023,Monday",
        id: "63e10e5e05ec41858d373a6504d5e9ca",
        imageUrl:
          "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/05_may/15_mon/img_1684146153022_205.jpg?",
        readMoreUrl:
          "https://www.timesnownews.com/health/exposure-to-traffic-related-air-pollution-impacts-brain-functioning-shows-study-article-100237462/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        time: "04:49 pm",
        title: "Traffic-related air pollution weakens brain function: Study",
        url: "https://www.inshorts.com/en/news/trafficrelated-air-pollution-weakens-brain-function-study-1684149573314",
      },
      
    ],
    success: true,
  });

  //   Add a useeffect to fetch the data from the api using fetch method, then pipe the data in .then() methods and finally update the state using setResult method.

  //   useEffect(() => {
  //     const getData = async () => {
  //       const apiResult = await fetch(
  //         "https://inshorts.deta.dev/news?category=science"
  //       );
  //       const finalData = await apiResult.json();
  //       setResult(finalData);
  //       // })
  //     };
  //     getData();
  //   }, []);

  // useEffect(() => {
  //     fetch("https://inshortsapi.vercel.app/news?category=science")
  //         .then((res) => res.json())
  //         .then((data) => setResult(data));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://inshorts.deta.dev/news?category=science"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setResult(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return result.data.map((val) => {
    return (
      <div className="news-div">
        <div >
          <h6 className="author-name">{val.author}</h6>
          <img src={val.imageUrl} className="news-img"></img>
          <div className="news-box">
            <p value={val.id}>
              {isReadMore ? val.content.slice(0, 120) : val.content}
              <a key={val.id} value={val.id} href="{val.readMoreUrl}" target="_blank" >
                {isReadMore ? "..Readmore" : "showless"}
              </a>
            </p>
            <span>{val.time}</span>
          </div>
        </div>
      </div>
    );
  });
};
