import styled from 'styled-components';

export const HeaderContainer = styled.div `
width: 100%;   
display: flex;
color: #343a40;
border-bottom: solid; 
border-bottom-width: 1px;
border-bottom-color: #e5e5e5;
box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 5%);
align-items: center;
justify-content: space-between;
margin-bottom: 16px;
flex-flow: row wrap;
padding: 16px 24px;
box-sizing: border-box;
`
export const HeaderTypoContainer = styled.div `
fon-size: 16px;
display: flex;
font-weight: 400; 
cursor: pointer;  
`

export const HeaderTypoElements = styled.div `
display: flex;
margin-right: 8px;
`

export const PricingHeader = styled.div `
width: 100%;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
color: #212529;
padding-top: 3rem;
padding-bottom: 1.5rem;
`
export const Pricing = styled.div `
font-size: 56px;
font-weight: 300;
margin-bottom: 8px;
`

export const PricingText = styled.div `
font-size: 20px;
font-weight: 300;
width: 668px;
margin-bottom: 16px;
`
export const Container = styled.div `
padding: 0px -15px; 
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 32px;
`

export const CardDeck = styled.div `
display: flex;
margin-bottom: 16px;
flex-flow: row wrap; 
width: 63%;
`

export const Footer = styled.div `
margin: 48px 0px;
padding: 48px 0px 0px;
display: flex;
border-top: solid;
border-width: thin;
border-color: rgba(0,0,0,.125);
justify-content: space-around;
box-sizing: border-box;
width: 930px;
`

export const FooterElement = styled.div `
color: #6c757d;
box-sizing: border-box;
width: 240px;
font-size: 12.8px;
`

