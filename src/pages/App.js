import { useState } from 'react';
import Card from '../components/Card';
import FooterBox from '../components/FooterBox';
import Button from '../components/Button';
import HeaderTypo from '../components/HeaderTypo';
import * as Styled from './Styled';

function App() {
	const cardList = [
		{
			title: 'Free',
			price: 0,
			buttonLabel: 'Sign Up For Free',
			text1: 10,
			text2: 2,
			text3: 'Email support',
		},
		{
			title: 'Pro',
			price: 15,
			buttonLabel: 'Get Started',
			text1: 20,
			text2: 10,
			text3: 'Priority email support',
		},
		{
			title: 'Enterprise',
			price: 29,
			buttonLabel: 'Contact Us',
			text1: 30,
			text2: 15,
			text3: 'Phone and email support',
		},
	];

	const footerBoxList = [
		{
			title: 'Features',
			text1: 'Cool stuff',
			text2: 'Random feature',
			text3: 'Team feature',
			text4: 'Stuff for developers',
			text5: 'Another one',
			text6: 'Last time',
		},
		{
			title: 'Resources',
			text1: 'Resource',
			text2: 'Resource name',
			text3: 'Another resource',
			text4: 'Final resource',
		},
		{
			title: 'About',
			text1: 'Team',
			text2: 'Locations',
			text3: 'Privacy',
			text4: 'Terms',
		},
	];

	return (
		<div>
			<Styled.HeaderContainer>
				<div style={{ fontSize: '20px' }}>Company name</div>
				<Styled.HeaderTypoContainer>
					<Styled.HeaderTypoElements>
						<HeaderTypo name="Features" />
						<HeaderTypo name="Enterprise" />
						<HeaderTypo name="Support" />
						<HeaderTypo name="Pricing" />
					</Styled.HeaderTypoElements>

					<Button />
				</Styled.HeaderTypoContainer>
			</Styled.HeaderContainer>

			<Styled.PricingHeader>
				<Styled.Pricing>Pricing</Styled.Pricing>

				<Styled.PricingText>
					Quickly build an effective pricing table for your potential customers
					with this Bootstrap example. It's built with default Bootstrap
					components and utilities with little customization.
				</Styled.PricingText>
			</Styled.PricingHeader>

			<Styled.Container>
				<Styled.CardDeck>
					{cardList.map((card, index) => (
						<Card
							title={card.title}
							price={card.price}
							buttonLabel={card.buttonLabel}
							text1={card.text1}
							text2={card.text2}
							text3={card.text3}
						/>
					))}
				</Styled.CardDeck>
				<Styled.Footer>
					<div>
						<img
							src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
							width="24px"
							height="24px"
						/>
						<Styled.FooterElement>ⓒ 2017-2018</Styled.FooterElement>
					</div>

					{footerBoxList.map((footerBox, index) => (
						<FooterBox
							title={footerBox.title}
							text1={footerBox.text1}
							text2={footerBox.text2}
							text3={footerBox.text3}
							text4={footerBox.text4}
							text5={footerBox.text5}
							text6={footerBox.text6}
						/>
					))}
				</Styled.Footer>
			</Styled.Container>
		</div>
	);
}
export default App;
