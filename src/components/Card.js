import { useState } from "react";

const Card = ({title, price, buttonLabel, text1, text2, text3}) =>
{
    const [mouseOver,setMouseOVer]=useState(false);
  
    const onMouseOver2 = () => {
      setMouseOVer(true);
    };
  
    const onMouseOut2 = () => {
      setMouseOVer(false);
    };

    return (      
    <div
    style={{ //박스 전체
      boxShadow: '0 0.25rem 0.75rem rgb(0 0 0 / 5%)',
      margin: '0px 15px',
      textAlign: 'center',
      boxSizing: 'border-box',
      width: '30%',
      color: '#212529',
    }}>
     <div
     style={{ //박스 헤더
      fontSize: '24px', 
      border: 'solid',
      borderWidth: 'thin',
      borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',
      borderColor: 'rgba(0,0,0,.125)',
      padding: '12px 20px',
      backgroundColor: 'rgba(0,0,0,.03)',
     }}>
       {title}
     </div>
     <div  //박스 바디
     style={{
       fontSize: '24px', 
       border: 'solid',
       borderWidth: 'thin',
       borderRadius: '0 0 calc(.25rem - 1px) calc(.25rem - 1px)',
       borderColor: 'rgba(0,0,0,.125)',
       borderTopColor: 'transparent',
       padding: '20px',
     }}>

      <div
       style={{
        display: 'flex',
        marginBottom: '12px',
        alignItems: 'baseline',
        justifyContent: 'center',
      }}>

        <div
        style={{
          fontSize: '40px',
          fontWeight: '550',
          marginRight: '12px',
        }}>${price}</div>

        <div
        style={{
          color: '#6c757d',
          fontSize: '32px',
          fontWeight: '400',
        }}>/ mo</div>

      </div>
       
      <div
      style={{
       fontSize: '16px',
       textAlign: 'center',
       marginTop: '16px',
       marginBottom: '24px',
       fontWeight: '300',
      }}>
       <div>{text1} users included</div>
       <div>{text2} GB of storage</div>
       <div>{text3}</div>
       <div>Help center access</div>
      </div>
      
      <button    
      onMouseOver={onMouseOver2}  //함수
      onMouseOut={onMouseOut2}
      style={{
        color: '#007bff',
        fontSize: '20px', 
        border: 'solid',
        borderWidth: '1px',
        borderColor: '#007bff',
        padding: '8px 16px',
        borderRadius: '.3rem',
        textAlign: 'center',
        boxSizing: 'border-box',
        width: '100%',
        backgroundColor: 'transparent',
        cursor: 'pointer',        
        background: ((mouseOver&&(title==="Free"))||(~mouseOver&&(title!=="Free"))) ? '#007bff': '#ffffff',
        color: ((mouseOver&&(title==="Free"))||(~mouseOver&&(title!=="Free"))) ? '#ffffff': '#007bff', 
       }}
       >
       {buttonLabel}
      </button>

     </div>

    </div>
    )
}
export default Card;