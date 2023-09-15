import React, { useState } from "react";
import {Card, Row, Col, Input, Typography,Avatar, Select} from "antd"
 import  {useGetCryptoNewsQuery} from "../services/cryptoNewsApi"
import moment from "moment/moment";
import { useGetCryptosQuery } from "../services/cryptoApi";




 const demoImage= "https://www.freepik.com/free-photos-vectors/cryptocurrency"
 const {Title, Text} = Typography
 const {Option} = Select

 const News = ({simplified})=>{
    const [newsCategory,setNewsCategory] = useState("Cryptocurrency")
    const {data:cryptoNews} = useGetCryptoNewsQuery({newsCategory, count:simplified ? 6:12})
    const {data} = useGetCryptosQuery(100)
   
    if(!cryptoNews?.value) return "Loading.."

   return(
  <Row gutter={[24,24]}>
  {!simplified && 
    <Col span={24}>
<Select
showSearch
className="select-news"
placeholder="Select a Crypto"
optionFilterProp="children"
onChange={(value)=>console.log(value)}
filterOption={(input,option)=> option.children.toLowerCase().indexof(input.toLowerCase()) >= 0 }
>
    <Option value="Cryptocurrency">Cryptocurrency </Option>
{data?.data?.coins.map((coin)=> <Option value={coin.name}>{coin.name} </Option>)}
</Select>
</Col>
  }




   {cryptoNews.value?.map((news,i)=>(
    <Col xs={24} sm={12} lg={8}  key={i}>
        <Card className="news-card"  hoverable   >
        <a href={news.url} target="_blank" rel="noreferrer">
            <div className="news-image-container">
         <Title className="news-title" level={4}>
         {news.name}
         </Title>
         {/* <img style={{maxHeight:"100px", maxWidth:"200px"}}  src={news?.image?.thumbnail?.contentUrl || demoImage }/> */}
         <img height="100px" width="100px"  src={news?.image?.thumbnail?.contentUrl || demoImage }/>
            </div>
            <p>
                {news.description >100 ? `${news.description.substring(0,100)}...` : news.description}
                {/* {news.description} */}
            </p>
            <div className="provider-container">
                <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}/>
               <Text> {moment(news.datePublished).startOf('ss').fromNow() }</Text> 
                </div>
            </div>
        </a>
    </Card>
    
    </Col>
   ))}
   </Row>
)
}

export default News