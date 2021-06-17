import { useState } from "react";

const Button = () => 
{
    const [mouseOver,setMouseOVer]=useState(false);
  
    const onMouseOver2 = () => {
      setMouseOVer(true);
    };
  
    const onMouseOut2 = () => {
      setMouseOVer(false);
    };

    return (
        <button
      onMouseOver={onMouseOver2}  
      onMouseOut={onMouseOut2}
      style={{
        color: '#007bff',
        fontSize: '1rem', 
        border: 'solid',
        borderWidth: '1px',
        borderColor: '#007bff',
        padding: '6px 12px',
        borderRadius: '4px',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        background: mouseOver ? '#007bff': '#ffffff',      
        color: mouseOver ? '#ffffff': '#007bff',
      }}>
       Sign up
      </button>
    )
}

export default Button;