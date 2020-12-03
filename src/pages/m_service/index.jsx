import React from 'react';
import ReactEcharts from 'echarts-for-react';
import M_BACK_ARROW from '../../assets/back_arrow.png'
function HotelService () {

     const mapStyle = {
       
        width:  window.innerWidth,
         height: window.innerHeight,
         textAlign: "center",
        paddingTop: "40px"
    }

    return (
        <div >
              <div style={{height:"60px",width:"100%",background:"#ffffff",position:"fixed"}}>
                <img onClick={()=>window.history.back()} src={ M_BACK_ARROW } style={ {height:"20px",position:"absolute",top:"50%",marginTop:"-5px",marginLeft:"20px"} }/>
           </div>
          
            <div style={ {  background:"#ffffff",  } } className='container' id='container' style={ mapStyle }>
                <p style={ { fontSize: "24px", color: "#23B5FE" } }>联系我们</p> 
                
            <hr style={ {margin:"0 20px"} } color="#f5f5f5"/>
            <p style={{fontSize:"22px"}}>岳鑫 <small  style={{fontSize:"18px"}}>156 0768 8773</small> <a style={{color:"#23B5FE",fontSize:"16px",marginLeft:"20px"}} href="tel:15607688773">立即拨打</a> </p> 
            <p style={{fontSize:"22px"}}>范佳琪  <small  style={{fontSize:"18px"}}>135 0357 5852</small><a style={{color:"#23B5FE",fontSize:"16px",marginLeft:"20px"}} href="tel:13503575852">立即拨打</a> </p> 
           
           
                </div>
        </div>
    )
};

export default HotelService;