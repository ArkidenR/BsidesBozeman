import React from 'react';


const Venue = () => {

	return (

		<>
			<div className="container mx-auto px-4">

				<div className="w-full h-screen bg-300 BackRoundF" >
					
					<div className="container VenueT">

						<h1> Venue </h1>
						
					</div>
					<br/>
					<br/>
					<div className="container VenueC">


						<div className="container VenueImg">
							<p> Venue Map </p>

						</div>


					</div>
					<br/>
					<br/>

					<div className="container VenueC">
						<p> More information </p>

					</div>

					<br/>
					<br/>

					<div className="container VenueC">
						<p> Parking information </p>

					</div>

				</div>
			</div>
		</>

	);
};

export default Venue;