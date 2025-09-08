import React from 'react';

//const CircularProgress = ({ size = 100, strokeWidth = 10, value = 0 }) => {
//  const radius = (size - strokeWidth) / 2;
//  const circumference = radius * 2 * Math.PI;
//  const offset = circumference - (value / 100) * circumference;

//  return (
//    <svg width={size} height={size}>
//      <circle
//        stroke="lightgrey"
//        fill="transparent"
//        strokeWidth={strokeWidth}
//        r={radius}
//        cx={size / 2}
//        cy={size / 2}
//      />
//      <circle
//        stroke="blue"
//        fill="transparent"
//        strokeWidth={strokeWidth}
//        strokeDasharray={circumference + ' ' + circumference}
//        style={{ strokeDashoffset: offset }}
//        r={radius}
//        cx={size / 2}
//        cy={size / 2}
//        transform={`rotate(-90 ${size / 2} ${size / 2})`}
//      />
//      <text
//        x="50%"
//        y="50%"
//        textAnchor="middle"
//        stroke="#000"
//        dy=".3em"
//      >
//        {/*{`${value}%`}*/}
//      </text>
//    </svg>
//  );
//};

//const CircularProgress = ({ duration, resetKey }) => {
//	const animationStyle = {
//		 animation: `fillProgress ${duration}s linear forwards`,
//		 height: '5px',
//		 backgroundColor: 'blue',
//		 width: '0%', // Начальная ширина для корректного отображения анимации
//	};

//	return (
//		 <div style={animationStyle} key={resetKey} className="progress-bar"></div>
//	);
//};

const CircularProgress = ({ duration, size = 20, strokeWidth = 2, }) => {
	const radius = (size - strokeWidth) / 2; // Радиус круга
	const circumference = 2 * Math.PI * radius; // Окружность круга

	const animationStyle = {
		animation: `dash ${duration}s linear forwards`, // Используйте infinite для непрерывной анимации
	};

	return (
		<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
			<style>
				{`
                @keyframes dash {
                    from { stroke-dashoffset: ${circumference}; }
                    to { stroke-dashoffset: 0; }
                }
                `}
			</style>
			<circle
				cx={size / 2}
				cy={size / 2}
				r={radius}
				strokeWidth={`${strokeWidth}px`}
				stroke="#B8BBC0"
				fill="transparent"
				strokeLinecap="round"
			/>
			<circle
				cx={size / 2}
				cy={size / 2}
				r={radius}
				strokeWidth={`${strokeWidth}px`}
				stroke="#005DFF"
				fill="transparent"
				strokeLinecap="round"
				style={{
					strokeDasharray: circumference,
					strokeDashoffset: circumference,
					...animationStyle,
				}}
			/>
		</svg>
	);
};

export { CircularProgress };
