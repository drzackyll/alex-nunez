import React from 'react'

const Reviews = [
  "Alejandro does a great job. He is honest, quick and extremely responsive. We consider him our Go-To IT Guy now.",
  "Alejandro was very proficient in addressing the issues that shut down my laptop. His service was invaluable.",
  "I bought a new hard drive and needed it set up and files transferred from the old one. Alejandro did the install and transfer of my data without a hitch. He was very professional throughout the process, even though it took a bit longer than either of us had anticipated. He answered questions for me (a non-techie) in a layperson's language. I would definitely use his service again.",
  "Alejandro was superb. He really knows what he is doing. I wish everyone was as good as he.",
  "I was very pleased with Alejandro. He called when he was on his way over, knew what he was doing, was very professional and I felt that I could call him if I had any further questions. And I think his prices are very reasonable.",
  "I called Alejandro when I moved to my new apartment to set up my computer and internet. He came when scheduled, was super prompt as always and stayed until he finished the job. Perfect!",
  "This was a difficult setup because my computer had a newer operating system than the computer was supposed to handle. Alejandro was patient and resourceful and finally got it going! Good work.",
  "Alejandro is knowledgeable - explains clearly - and is very polite and helpful. I would recommend him any time.",
  "Alejandro was fantastic, on time, and worked fast. Highly recommend the service and will call again if needed.",
  "He was terrific. Very professional. Very helpful and a pleasure to deal with.I will certainly be calling him again.",
  "This young man was a total professional, but at the same time he was pleasant, and obviously knew what he was doing. He had my multifunctional device hooked up and running on my PC, IPad and iPhone. He turned it over to me to test all functions which went smoothly. I would highly recommend him, he's reasonably priced, efficient and pleasant. Thank you."
]

const Home = () => {
  return (
    <div className="container-fluid">
    <br />
    <br />
      <div className="row">
        <div className="col-sm-3 col-sm-offset-2">
          <img src={require("../../public/images/martin.jpg")} style={{maxWidth: "100%", maxHeight: "100%"}} alt="Alex Nunez"/>
        </div>
        <div className="col-sm-3">
          <b>What I Offer</b><br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <div className="col-sm-2">
          <b>What Clients Say</b><br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."<br />
          -Satisfied Customer 1<br /><br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."<br />
          -Satisfied Customer 2
        </div>
      </div>
    </div>
  )
}

export default Home
