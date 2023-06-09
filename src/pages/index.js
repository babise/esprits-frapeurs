import Image from "next/image";
import React, { useRef } from "react";

const OnArrive = () => {
	const videoRef = useRef(null);

	const handlePlay = () => {
		videoRef.current.play();
	};

	return (
		<section className="onArrive">
			<video
				ref={videoRef}
				className="onArriveVideo"
				src="/ef_onarrive.mp4"
				playsInline
				autoPlay
				loop
				muted
				onClick={handlePlay}
				onTouchStart={handlePlay}
				id="onArriveVideo"
			></video>
			<div className="onArriveText">
				<h1>On arrive bientôt...</h1>
				<div id="eyes"></div>
			</div>
		</section>
	);
};

export default OnArrive;
