import React from 'react'
import { useSpring, animated as a } from 'react-spring';
import { TypeAnimation } from 'react-type-animation';
import  Picture  from "../Pictures/me.png";
import arrow from "../Pictures/arrow_svg.svg";
import TextGradient from '../components/display_stars/Gradient/TextGradient';
import confetti from 'canvas-confetti';
import soundy from "../Sounds/pop.mp3";
import abra from "../Sounds/magicwoshoowosho.mp3";
import useSound from "use-sound";
import {FiTwitter} from "react-icons/fi"
import {AiOutlineLinkedin} from "react-icons/ai"
const HomePage = () => {
  const [hovery, sethovery] = React.useState(false);
  const [boop] = useSound(soundy);
  const [abraka] = useSound(abra)
    const ask = useSpring(
    {
        from: { rotateZ:0},
      to: {  rotateZ:360},
      loop: true,
      config:{duration:13000}
    }
  );






  const arrowy = useSpring({
    rotatez: hovery ? 200 : 0, width: hovery ? 100 : 0,
    y: hovery ? 19 : 0,
    x: hovery ? -90 : 0,

  });
  const arrowtext = useSpring({
    y: hovery ? 36 : 100,
    x: hovery ? 56 : 20,
    opacity: hovery ? 1 : 0,
    rotatez: hovery ? -11: 0,

  });

var defaults = {
	spread: 360,
	ticks: 50,
	gravity: 0,
	decay: 0.94,
	startVelocity: 30,
	shapes: ["star"],
	colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
};

  const shoot = () => {
  boop();
	confetti({
		...defaults,
		particleCount: 40,
		scalar: 1.2,
		shapes: ["star"],
	});

	confetti({
		...defaults,
		particleCount: 10,
		scalar: 0.75,
		shapes: ["circle"],
	});
}












  return (
		<div className=" flex flex-col items-center justify-center gap-3 pb-3 z-10">
			<div class="avatar z-10 absolute md:top-40 top-20 mb-6">
				<div class="w-[10rem] mask mask-hexagon ">
					<img src={Picture} alt="profile" />
				</div>
			</div>

			<div className="w-full mb-2 flex items-center justify-center  ">
				<button
					onDoubleClick={() => {
						sethovery(!hovery);
            !hovery ? shoot() : abraka();
					}}>
					<div
						className=" mono_text4 md:text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-3xl hover:bg-gradient-to-l transition ease-linear delay-150  animate-glow  mb-2 h-20  rocket"
						id="#content">
						@Aryan_Kathawale
					</div>
				</button>
				<a.img
					src={arrow}
					style={{ ...arrowy }}
					alt="arrow"
					className="w-20 h-20 fill-accent z-10 absolute"
				/>
				<a.div
					className="absolute arrow_text text-[#2af598] text-3xl "
					style={{ ...arrowtext }}>
					<TypeAnimation
						sequence={[
							"Full Stack Developer",
							3000,
							"Loves Lofi , pop , Nirvana etc",
							3000,
							"Gamer",
							3000,
							"Weeb ",
							3000,
							"Hikiomori",
							4000,
							"@kiritocode1",
							6900,
							"Occassionally gets Laid",
							5000,
							"Basically Lazy Batman ",
							4000,
							"Open Source",
							4000,
							"Loves Mushrooms",
							3000,
							"Coffee to Code Converter",
							5000,
							"Student in NBN, Pune",
							1000,
							"190 wpm ",
							1000,
							"Graphic Designer",
							3000,
							"Nerrrrrrrrd",
							3000,
							"Philosopher",
							1000,
							"PTSD",
							1000,
							"Lives Loudly",
							4000,
							"Internet's own boy",
							9086,
						]}
						//  Replacing previous Text
						style={{ fontSize: "1.875rem" }}
						wrapper="h2"
						repeat={Infinity}
					/>
				</a.div>
			</div>
			<div className="flex flex-col  lg:flex-row w-full items-center gap-12 justify-center  pt-4 md:px-16 mt-10">
				<div className=" bg-neutral w-full rounded-xl h-[20rem] text-white flex flex-col gap-4 pt-8 px-6">
					<h1 className="text-3xl flex mono_text4">About Me👋</h1>
					<div className="mono_text2 font-extrabold flex  text-start w-full flex-wrap">
            hii there , its me aryan , im a 20 year old JS developer , i specialise in Web technologies , like frameworks 🚀 , build tools , databases 🥸, GPT tools 🧠 and other things , Feel free to contact me using the mailing system 🤗 . 
            <br />
            <br/>
            oh  btw this page is also very fun!!! 
            feel free to poke around @Aryan_Kathawale for surprise
					</div>
				</div>
				<div className=" flex w-full rounded-xl justify-center md:visible relative h-[20rem] overflow-hidden items-center">
					<div className="backdrop-filter backdrop-blur-lg bg-opacity-20 z-10 bg-secondary w-full absolute h-[20rem] mono_text4 flex flex-col px-6 pt-8 text-neutral">
						<h1 className='text-3xl flex hover:before:content-["#"] hover:before:transition hover:before:ease-out hover:before:delay-[5000ms] hover:before:text-primary'>
							Socialize{" "}
						</h1>
						<div className="mono_text2 font-extrabold">
							Id love to talk and geek out with you 😊, on projects and jobs{" "}
						</div>
						<div className="w-full   flex items-start p-4 justify-evenly flex-col flex-wrap mt-4">
							<a
								className="btn btn-rounded flex items-center justify-evenly"
								href="https://twitter.com/kiritotwt1">
								<FiTwitter />
							</a>
							<a
								className="btn btn-rounded"
								href="https://www.linkedin.com/in/aryan-kathawale-8983b5171/">
								<AiOutlineLinkedin />
							</a>
							<div className="flex flex-wrap">
								{" "}
								checkout <TextGradient link="Socials" text="/Socials" />
								,&nbsp; <TextGradient link="blogs" text="/blogs" />
								&nbsp; & <TextGradient link="learn" text="/learn" />
								
							</div>
						</div>
					</div>
					<a.div
						style={{ ...ask }}
						className="w-[90rem]  rounded-lg  flex justify-evenly absolute">
						<div className="w-2 h-2 bg-secondary glow_contact1 rounded-full " />
						<div className="w-2 h-2 bg-secondary glow_contact2 rounded-full" />
					</a.div>
				</div>
      </div>
      
			<div>
				<div className="card lg:card-side bg-ghost shadow-xl">
					<figure>
						<img
							src={Picture}
							alt="Album"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">New album is released!</h2>
						<p>Click the button to listen on Spotiwhy app.</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Listen</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;