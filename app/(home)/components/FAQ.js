'use client';
import React, { useEffect, useState } from 'react'

import './FAQ.css';
import { sumMonthly } from '../../variables/planPrice';

const Accordion = ({ title, index, openedAcc, onClick, children }) => {
	const [isOpen, setOpen] = React.useState(false);

	useEffect(() => {
		if (index === openedAcc) {
			setOpen(true)
		} else {
			setOpen(false)
		}
	}, [openedAcc, index])

	return (
		<div className="accordion-wrapper">
			<div
				className={`accordion-title ${isOpen ? "open" : ""} text__body`}
				onClick={() => onClick(index)}
			>
				{title}
			</div>
			<div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
				<div className="accordion-content text__body">{children}</div>
			</div>
		</div>
	);
};



const trainingfaq = [
	{
		title: "Can I get this VR Training?",
		content: <p>
			Absolutely! You can get this VR Training under our cutting-edge XR Training Platform and explore any other solutions available in the VR Training Library at <a className='accordion__link' href='https://metaenga.com'>metaenga.com</a>
		</p>
	},
	{
		title: "Will there be more XR content available for me?",
		content: <p>
			Yes! Digital Engineering and Magic provides XR Training Platform with a constantly growing VR Training Library on workplace safety and the power and utilities industry. More than <span>10 VR Training</span> and 360 videos are available right now.
			<br /><br />
			XR Training Platform provides a 360 Video Library that can expand with your own educational 360 videos and can be accessed from the web interface or any device. <br />
			This solution is called <span>Metaenga</span>.
		</p>
	},
	{
		title: "How much does Metaenga cost?",
		content: <p>
			Discover Metaenga&apos;s cutting-edge immersive training solutions at scale on your organization for one fixed monthly or annual fee per headset account. <br /> <br />
			Plans range from <span>FREE</span> to <span>USD {sumMonthly}.00</span> a month per headset account. No extra costs.
		</p>
	},
	{
		title: "Which VR headset do I need?",
		content: <p>
			Metaenga supports industry standards headsets <span>Meta Quest</span> and <span>Pico 4</span> for VR Training. We are constantly working on expanding the range of supported VR devices so that new devices will appear rapidly. <br /> <br />
			360 Video learning content is available everywhere. Sign in with your organization&apos;s Metaenga account to watch instantly from your personal computer or any internet-connected device, including smartphones and tablets. <br /><br />
			You can also download your favorite 360 learning videos with <span>iOS</span> and <span>Android</span>. Use the download feature to watch while you&apos;re on the go and without an internet connection. Take Metaenga with you anywhere.
		</p>
	},
	{
		title: "Is the XR Training platform good for me?",
		content: <p>
			Metaegna is good for everyone – from businesses to individuals. <br /> <br />
			Metaenga platform offers skills development in a user-friendly and intuitive way, adding occupational safety and health awareness in a friendly work environment, thereby increasing learning speed, engagement, and productivity.
		</p>
	}

]

export default function FAQ({ title, data }) {
  const [activeAcc, setActiveAcc] = useState(null);
  const [dataForRender, setDataForRender] = useState(null);

  const onClick = (index) => {
    setActiveAcc((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      const newData = pathname === '/training' ? trainingfaq : data;
      setDataForRender(newData);
    }
  }, [data]);

  return (
    <div className="faq">
      <div className="container quote__container faq__container">
        <h6 className="main__header title">{title}</h6>
        <div className="wrapper">
          {dataForRender?.map((item, index) => (
            <Accordion
              title={item.title}
              index={index}
              openedAcc={activeAcc}
              key={index}
              onClick={onClick}
            >
              {item.content}
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
