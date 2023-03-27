import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Loader from "../components/Loader";

export default function Home() {
  const [typingText, setTyping] = useState("");
  const [isCall, setIsCall] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(true);

  const refAnimateOnScroll = useRef(null);
  const refMainScroll = useRef(null);
  const refAnchor = useRef(null);
  const refService = useRef(null);
  const refVideo = useRef(null);

  useEffect(() => {
    // if unable to hable onload video event close the loader after 5s
    const closeAnimation = setTimeout(() => {
      setPlayAnimation(false);
    }, 5 * 1000);

    return clearTimeout(closeAnimation);
  }, []);

  const timer = (array) => {
    setTimeout(() => {
      i++;
      if (i < test.length) {
        timer(array);
      }
    }, 500);
  };
  const typingAnimation = () => {
    let text = `At our company, we\'re passionate about helping businesses succeed.
    That\'s why we\'re constantly expanding our range of custom solutions to
    meet your unique needs. Whether you\'re looking to streamline your
    operations or explore new opportunities for growth, our team is here
    to help. With a focus on innovation and creativity, we\'re always
    pushing the boundaries to create new and exciting solutions for our
    clients. Let us help you take your business to the next level.`;

    text = text.split("");
    let i = 0;
    const tempArray = [];
    const timer = () => {
      const timeount = setTimeout(() => {
        let tempCharater = text[i];
        tempArray.push(tempCharater);

        let tempText = tempArray.join("");
        // tempText = tempText.concat("", text[i]);

        setTyping(tempText);

        i++;
        if (i < text.length) {
          timer();
        }

        return clearTimeout(timeount);
      }, 50);
    };

    timer();
  };

  const handlingScroll = () => {
    const pageYOffset = refMainScroll.current.scrollTop;

    const height = refAnchor.current.getBoundingClientRect().top + pageYOffset;

    let presentageScroll = (pageYOffset / height) * 100;
    presentageScroll = parseFloat(presentageScroll).toFixed(2);

    if (presentageScroll > 8) {
      refAnimateOnScroll.current.classList.add("animate-on-scroll");
    }
    if (presentageScroll > 20) {
      refService.current.classList.add("animate-on-scroll");
    }

    if (presentageScroll > 70) {
      if (!isCall) {
        typingAnimation();
        setIsCall(true);
      }
    }
  };

  return (
    <div
      className="wrapper bg-slate-900 "
      ref={refMainScroll}
      onScroll={handlingScroll}
    >
      <Head>
        <title>KERNAL SPACE</title>
      </Head>

      {playAnimation && <Loader />}
      
      <div className="video-background">
        <video
          className="pb-2"
          ref={refVideo}
          autoPlay
          muted
          loop
          onLoadedData={() => {
            setPlayAnimation(false);
          }}
          src="/bg.mp4"
        ></video>
        <div className="content-head">
          <img
            className="w-1/2 md:w-1/5 absolute"
            alt="background"
            src="ooorganize.svg"
          ></img>
          <h1 className="absolute text-2xl md:text-3xl  font-bold text-slate-200 tracking-in-contract-bck ">
            KERNAL SPACE
          </h1>
        </div>
        <div className="absolute bottom-0 w-full h-96 bg-slate-300 content-head-b"></div>
      </div>

      <div className="w-full h-64 grid  place-items-center">
        <p
          className="w-3/4 md:w-2/4 text-center text-xl text-cyan-200  opacity-0"
          ref={refAnimateOnScroll}
        >
          In the digital age, innovation is key. Those who are willing to take
          risks, experiment, and embrace the power of digital tools will be the
          ones who thrive. Don&apos;t be afraid to try new things and forge your
          own path – the possibilities are endless
        </p>
      </div>

      <div className="parallax">
        <div
          className="absolute w-11/12  md:w-3/4 md:grid md:grid-cols-3 gap-4 opacity-0"
          ref={refService}
        >
          <div>
            <ul className="text-teal-200 text-center">
              <li className="my-8 bg-slate-800 shadow-drop-2-tb h-16 p-2 rounded opacity-70">
                Customized high-quality software development for your needs
              </li>
              <li className="my-8 bg-slate-800 shadow-drop-2-tb  h-16 p-2 rounded opacity-70">
                Experts in latest tech deliver top-tier IT services.
              </li>
              <li className="my-8 bg-slate-800 shadow-drop-2-tb  h-16 p-2 rounded opacity-70">
                Collaborative approach to meet your expectations, with progress
                reports.
              </li>
              <li className="my-8 bg-slate-800 shadow-drop-2-tb  h-16 p-2 rounded opacity-70">
                Innovation and creativity to meet your evolving needs and
                challenges.
              </li>
            </ul>
          </div>
          <div></div>
          <div>
            <ul className="text-teal-200 text-center ">
              <li className="my-8 bg-slate-800 shadow-drop-2-tb  h-16 p-2 rounded opacity-70">
                Timely and budget-friendly service that satisfies.
              </li>
              <li className="my-8 bg-slate-800 shadow-drop-2-tb  h-16 p-2 rounded opacity-70">
                Robust security measures for your sensitive data and
                information.
              </li>
              <li className="my-8 bg-slate-800 shadow-drop-2-tb  h-16 p-2 rounded opacity-70">
                Ongoing support and maintenance, including updates and
                troubleshooting
              </li>
              <li className="my-8 bg-slate-800 shadow-drop-2-tb  h-16 p-2 rounded opacity-70">
                Competitive pricing for valuable and quality services.
              </li>
            </ul>
          </div>
        </div>
        <img
          className="w-3/4 md:w-2/5 absolute  background"
          alt="mars"
          src="mars-interactive-solar-system-13.png"
        ></img>
        <img
          className="w-2/4 md:w-1/5 absolute  foreground"
          alt="Astronaut"
          src="Astronaut-PNG-Image.png"
        ></img>
      </div>

      <div className=" w-full  md:grid   md:place-items-center">
        <img src="oooscillate.svg" className="w-full" alt="image"></img>

        <div className="md:absolute w-full md:flex  md:justify-center">
          <div className="w-3/5 md:w-1/6 bg-slate-200 my-8 md:my-0  mx-auto md:mx-4 rounded p-4 card text-center">
            <img
              alt="Search Engine Optimization"
              src="5597785.png"
              className="w-2/5 mx-auto my-6"
            ></img>
            <p>Search Engine Optimization</p>
          </div>
          <div className="w-3/5 md:w-1/6 bg-slate-200 my-8 md:my-0 mx-auto md:mx-4 rounded p-4 card text-center">
            <img
              alt="Web Design and Developments"
              src="4205106.png"
              className="w-2/5 mx-auto my-6"
            ></img>
            <p>Web Design and Developments</p>
          </div>
          <div className="w-3/5 md:w-1/6 bg-slate-200 my-8 md:my-0 mx-auto md:mx-4 rounded p-4 card text-center">
            <img
              alt="Cloud Computing Services"
              src="9536528.png"
              className="w-2/5 mx-auto my-6"
            ></img>
            <p>Cloud Computing Services</p>
          </div>
        </div>
      </div>

      <div className="w-full md:h-96 md:w-3/4 my-12 mx-auto rounded p-2  md:flex md:justify-between">
        <img
          className="rounded md:w-2/4"
          src="e45cdd27a970e6bba8e9fa9d6bb84544.jpg"
          alt="team work"
        ></img>

        <p className="p-2 md:w-2/4 font-mono text-slate-200  p-1 mx-2">
          {typingText}
          <samp className="blink">|</samp>
        </p>
      </div>
      <p className="text-blue-400 text-center mt-32 text-4xl ">Contact Us</p>
      <div className=" w-full flex justify-center py-16" ref={refAnchor}>
        <div className=" p-4 mx-4 text-center rounded-full hover:cursor-pointer hover:bg-slate-700">
          <img src="1384072.png" alt="linkedin" className="w-8"></img>
        </div>
        <div className=" p-4 mx-4 text-center rounded-full hover:cursor-pointer hover:bg-slate-700">
          <img src="1384075.png" alt="twitter" className="w-8"></img>
        </div>
        <div className=" p-4 mx-4 text-center rounded-full  hover:cursor-pointer hover:bg-slate-700">
          <img src="3059989.png" alt="mail" className="w-8"></img>
        </div>
      </div>
    </div>
  );
}
