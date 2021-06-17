import {useState} from 'react';

const HeaderTypo = ({name}) => 
{
    const [mouseOver,setMouseOVer] = useState(false);
    
    const onMouseOver2 = () => {
        setMouseOVer(true);
    };

    const onMouseOut2 = () => {
        setMouseOVer(false);
    };

    return (
        <div 
        onMouseOver={onMouseOver2}
        onMouseOut={onMouseOut2}
        style={{
        padding: '8px', 
        textDecoration: mouseOver ? 'underline':''}}>
        {name}
        </div>
    )
}

export default HeaderTypo; 