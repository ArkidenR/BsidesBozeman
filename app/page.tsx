import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <br/>
        <div className="container w-full h-screen bg-300 BackRoundF" >
          <div className="container heroS">

            <h1 > BSides Bozeman </h1>

          </div>
          <br/>
          <br/>
          <div className="container HeroCon">

            <div className="row">
              <div className="container HeroImg2">
                
      
                <div className="row ">
                  <div className="col">
                    <p> something like a pic something like a pic something like a pic something like a pic something like a pic </p>
                  </div>
                  <div className="col ">
                    <p>Testing</p>
                  </div>
                  <div className="col-md">
                  </div>
                </div>
              </div>
            </div>

          </div>

          <br/>
          <br/>
          <div className="container HeroDs">

            <h1>Description about BSides events. </h1>

          </div>

        </div>

      </div>
    </>
  );
}
