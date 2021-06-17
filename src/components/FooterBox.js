import { useState } from 'react';

const FooterBox = ({ title, text1, text2, text3, text4, text5, text6 }) => {
	const [mouseOver0, setMouseOVer0] = useState(false);

	const onMouseOver0 = () => {
		setMouseOVer0(true);
	};

	const onMouseOut0 = () => {
		setMouseOVer0(false);
	};

	const [mouseOver1, setMouseOVer1] = useState(false);

	const onMouseOver1 = () => {
		setMouseOVer1(true);
	};

	const onMouseOut1 = () => {
		setMouseOVer1(false);
	};

	const [mouseOver2, setMouseOVer2] = useState(false);

	const onMouseOver2 = () => {
		setMouseOVer2(true);
	};

	const onMouseOut2 = () => {
		setMouseOVer2(false);
	};

	const [mouseOver3, setMouseOVer3] = useState(false);

	const onMouseOver3 = () => {
		setMouseOVer3(true);
	};

	const onMouseOut3 = () => {
		setMouseOVer3(false);
	};

	const [mouseOver4, setMouseOVer4] = useState(false);

	const onMouseOver4 = () => {
		setMouseOVer4(true);
	};

	const onMouseOut4 = () => {
		setMouseOVer4(false);
	};

	const [mouseOver5, setMouseOVer5] = useState(false);

	const onMouseOver5 = () => {
		setMouseOVer5(true);
	};

	const onMouseOut5 = () => {
		setMouseOVer5(false);
	};

	return (
		<div
			style={{
				//FooterBox
				boxSizing: 'border-box',
				width: '240px',
				padding: '0px 15px',
			}}
		>
			<div
				style={{
					//FooterHeader
					fontSize: '20px',
					marginBottom: '8px',
					color: '#212529',
					fontWeight: '600',
				}}
			>
				{title}
			</div>

			<div
				style={{
					//FooterBody
					fontSize: '16px',
					color: '#6c757d',
					cursor: 'pointer',
				}}
			>
				<div
					onMouseOver={onMouseOver0}
					onMouseOut={onMouseOut0}
					style={{
						textDecoration: mouseOver0 ? 'underline' : '',
					}}
				>
					{text1}
				</div>
				<div
					onMouseOver={onMouseOver1}
					onMouseOut={onMouseOut1}
					style={{
						textDecoration: mouseOver1 ? 'underline' : '',
					}}
				>
					{text2}
				</div>
				<div
					onMouseOver={onMouseOver2}
					onMouseOut={onMouseOut2}
					style={{
						textDecoration: mouseOver2 ? 'underline' : '',
					}}
				>
					{text3}
				</div>
				<div
					onMouseOver={onMouseOver3}
					onMouseOut={onMouseOut3}
					style={{
						textDecoration: mouseOver3 ? 'underline' : '',
					}}
				>
					{text4}
				</div>
				<div
					onMouseOver={onMouseOver4}
					onMouseOut={onMouseOut4}
					style={{
						textDecoration: mouseOver4 ? 'underline' : '',
					}}
				>
					{text5}
				</div>
				<div
					onMouseOver={onMouseOver5}
					onMouseOut={onMouseOut5}
					style={{
						textDecoration: mouseOver5 ? 'underline' : '',
					}}
				>
					{text6}
				</div>
			</div>
		</div>
	);
};

export default FooterBox;
