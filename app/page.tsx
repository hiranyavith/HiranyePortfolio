"use client";
import Image from "next/image";

//imges
import profileImg from "../public/programming_profile_img.svg";
import Card1Img from "../public/card1_img.png";
import Card2Img from "../public/card2_img.png";
import Card3Img from "../public/card3_img.png";
import Card4Img from "../public/card4_img.png";
import Card5Img from "../public/card5_img.png";
import Card6Img from "../public/card6_img.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import techCart from "../public/techcartlogin.png";
import StudenMUI from "../public/studentmui.png";
import Uidesign from "../public/Desktop - 1 1.png";
import AdyapanaLogin from "../public/adyapanalogin.png";
import AdyapanaHome from "../public/adyapanahome.png";
import AdyapanaStudentPage from "../public/adyapanasm.png";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  //function
  const [darkmode, setdarkmode] = useState(false);
  return (
    <div className={darkmode ? "dark:" : ""}>
      <main className="font-outfit bg-yellow-50 min-h-screen px-10 md:px-20 lg:px-40 dark:bg-black">
        {/* nav and hero */}
        <section>
          {/* nav */}
          <nav className="py-10 flex justify-between">
            <h1 className=" text-sm text-gray-500 font-roboto md:text-xl lg:text-2xl">
              Developed By Mr <b className="font-outfit">Hiranye Vithanage</b>
            </h1>
            <ul className="flex items-center">
              {/* icon */}
              <li>
                <BsFillMoonStarsFill
                  onclick={() => setdarkmode(!darkmode)}
                  className="cursor-pointer text-xl mx-10"
                />
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1k-USX1aI26MsGzv-_AjUyYLCTnU00eq4/view?usp=sharing"
                  download={"resume"}
                  className="bg-yellow-400 text-black px-8 py-2 border-none rounded-xl"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* hero */}
          <div className="text-center p-10">
            <h1 className="font-outfit text-5xl font-bold text-yellow-400 py-2 md:text-6xl lg:text-7xl lg:mb-4">
              Hiranye Vithange
            </h1>
            <h3 className="text-2xl font-semibold md:text-3xl">
              Full Stack Software Engineer
            </h3>
            <p className="text-sm py-5 text-gray-400 leading-6 max-w-xl mx-auto md:text-md">
              Welcome to the professional portfolio and website of Hiranye
              Vithanage, a dedicated undergraduate Full Stack Software Engineer
              passionate about crafting robust and innovative digital solutions.
              Dive into a world where creativity meets functionality, where
              every line of code is meticulously crafted to bring ideas to
              life.As an undergraduate Full Stack Software Engineer, Hiranye
              brings a unique blend of theoretical knowledge and hands-on
              experience to the table. With a keen eye for detail and a hunger
              for continuous learning, Hiranye specializes in developing
              end-to-end web applications that seamlessly integrate front-end
              and back-end technologies.Explore Hiranye's projects to witness
              the fusion of cutting-edge design principles with efficient coding
              practices. From dynamic user interfaces to scalable server-side
              architectures, each project showcases Hiranye's commitment to
              excellence and his ability to tackle complex technical challenges
              with finesse.Whether you're a fellow developer seeking
              inspiration, a potential client looking for tailored software
              solutions, or an employer in search of top talent, Hiranye's
              website offers insights into his skills, expertise, and
              professional journey.Join Hiranye Vithanage on a journey through
              the world of software engineering, where innovation knows no
              bounds and every line of code tells a story of creativity and
              ingenuity.
            </p>
          </div>
          {/* social media */}
          <div className=" text-3xl flex justify-center gap-16 text-gray-700 py-2 lg:text-6xl md:text-5xl">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="https://github.com/hiranyavith" target="_blank">
                <AiFillGithub />
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://www.linkedin.co
m/in/hiranye-vithange196443246/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="#">
                <AiFillTwitterCircle />
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://www.facebook.com/hiranye.vithanage/"
                target="_blank"
              >
                <AiFillFacebook />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className=" m-auto relative bg-gradient-to-b from-yellow-200 w-80 h-80 p-5 mt-10 rounded-full">
              {/* profile */}
              <Image src={profileImg} alt="Profile Image Here" layout="fill" />
            </div>
          </motion.div>
        </section>
        {/* services */}
        <section>
          <div className="">
            <h2 className="text-5xl py-10 font-bold opacity-60">
              Sevices I Offer
            </h2>
            <p className="text-lg py-2 text-gray-400 leading-6">
              Welcome to the digital domain of Hiranye Vithanage – your
              destination for innovative solutions and cutting-edge services in
              the realm of Information Technology. Explore a world where
              creativity meets functionality, where every pixel and line of code
              is crafted with precision and passion.
            </p>
          </div>
          {/* services card */}
          <div className="md:flex lg:flex gap-10 mx-auto">
            {/* card1 */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className=" bg-yellow-200 text-center shadow-md p-5 rounded-xl my-10">
                <Image
                  src={Card1Img}
                  alt="Figma Img"
                  width={150}
                  height={150}
                  className="inline"
                />
                <h2 className="text-3xl font-outfit opacity-60">
                  Graphic Designing
                </h2>
                <p className="text-sm py-2 text-gray-800 leading-6 opacity-70">
                  Embark on a visual journey with captivating designs that
                  breathe life into your brand. From striking logos to
                  eye-catching banners, I specialize in creating compelling
                  graphics that leave a lasting impression and elevate your
                  brand identity to new heights.
                </p>
              </div>
            </motion.div>
            {/* card2 */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className=" bg-yellow-200 text-center shadow-md p-5 rounded-xl my-10">
                <Image
                  src={Card2Img}
                  alt="Figma Img"
                  width={150}
                  height={150}
                  className="inline"
                />
                <h2 className="text-3xl font-outfit opacity-60">
                  App Development
                </h2>
                <p className="text-sm py-2 text-gray-800 leading-6 opacity-70">
                  Step into the future with bespoke mobile applications tailored
                  to your unique needs. Leveraging the latest technologies and
                  design principles, I transform your ideas into intuitive and
                  engaging mobile experiences that captivate audiences and drive
                  business growth.
                </p>
              </div>
            </motion.div>
            {/* card3 */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className=" bg-yellow-200 text-center shadow-md p-5 rounded-xl my-10">
                <Image
                  src={Card3Img}
                  alt="Figma Img"
                  width={150}
                  height={150}
                  className="inline"
                />
                <h2 className="text-3xl font-outfit opacity-60">
                  Web Development
                </h2>
                <p className="text-sm py-2 text-gray-800 leading-6 opacity-70">
                  Experience the power of the web with dynamic and responsive
                  websites that showcase your brand and captivate your audience.
                  With expertise in front-end and back-end development, I create
                  seamless and user-friendly web solutions that deliver
                  exceptional performance and functionality.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="md:flex lg:flex gap-10 mx-auto">
            {/* card4 */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className=" bg-yellow-200 text-center shadow-md p-5 rounded-xl my-10">
                <Image
                  src={Card4Img}
                  alt="Figma Img"
                  width={150}
                  height={150}
                  className="inline"
                />
                <h2 className="text-3xl font-outfit opacity-60">
                  Server Side Dev
                </h2>
                <p className="text-sm py-2 text-gray-800 leading-6 opacity-70">
                  Unlock the potential of server-side development with robust
                  and scalable architectures that power your digital ecosystem.
                  From database management to API integration, I specialize in
                  building secure and efficient server-side solutions that
                  ensure seamless communication and data management.
                </p>
              </div>
            </motion.div>
            {/* card5 */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className=" bg-yellow-200 text-center shadow-md p-5 rounded-xl my-10">
                <Image
                  src={Card5Img}
                  alt="Figma Img"
                  width={150}
                  height={150}
                  className="inline"
                />
                <h2 className="text-3xl font-outfit opacity-60">
                  Software Application Dev
                </h2>
                <p className="text-sm py-2 text-gray-800 leading-6 opacity-70">
                  Enter the realm of custom software solutions designed to
                  streamline your business operations and drive efficiency.
                  Whether you need a CRM system, inventory management software,
                  or bespoke business applications, I deliver tailored solutions
                  that empower your organization to thrive in the digital age.
                </p>
              </div>
            </motion.div>
            {/* card6 */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className=" bg-yellow-200 text-center shadow-md p-5 rounded-xl my-10">
                <Image
                  src={Card6Img}
                  alt="Figma Img"
                  width={150}
                  height={150}
                  className="inline"
                />
                <h2 className="text-3xl font-outfit opacity-60">
                  Problem Solving
                </h2>
                <p className="text-sm py-2 text-gray-800 leading-6 opacity-70">
                  Turn challenges into opportunities with strategic
                  problem-solving expertise that delivers results. With a knack
                  for analyzing complex issues and implementing effective
                  solutions, I tackle technical challenges head-on, ensuring
                  optimal performance and reliability in every project.
                </p>
              </div>
            </motion.div>
          </div>
          <p className="text-lg py-2 text-gray-400 leading-6">
            Embark on a journey of innovation and transformation with Hiranye
            Vithanage – your trusted partner in harnessing the power of
            technology to achieve your goals. Let's collaborate to bring your
            ideas to life and propel your business towards success in the
            digital era.
          </p>
        </section>
        {/* my work */}
        <section>
          <div className="">
            <h2 className="text-5xl py-10 font-bold opacity-60">Portfolio</h2>
            <p className="text-lg py-2 text-gray-800 leading-6 opacity-70">
              Welcome to the heart of innovation and creativity – the Project
              Showcase section of Hiranye Vithanage's website. Here, you'll
              discover a curated collection of my finest works, each a testament
              to my dedication to excellence and passion for pushing the
              boundaries of technology. Dive into a diverse array of projects
              spanning graphic design, app development, web development,
              server-side solutions, software applications, and problem-solving
              endeavors. From sleek mobile applications to robust web platforms
              and intricate software systems, each project embodies a unique
              blend of innovation, functionality, and aesthetic appeal. Explore
              case studies detailing the challenges faced, the solutions
              implemented, and the outcomes achieved. Witness firsthand the
              transformative power of technology as I leverage cutting-edge
              tools and methodologies to address complex business needs and
              deliver tangible results. Whether you're seeking inspiration for
              your next project, exploring potential collaboration
              opportunities, or simply curious to see what's possible in the
              world of technology, the Project Showcase section invites you to
              embark on a journey of discovery and innovation. Join me as we
              explore the intersection of creativity and technology, where ideas
              flourish, and possibilities abound. Let's turn visions into
              reality and make an impact together in the digital landscape.
            </p>
          </div>
          {/* images */}

          <div className=" flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -10,
                  borderRadius: "100%",
                }}
              >
                <Image
                  src={techCart}
                  alt="TechCart Site"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>
            <div className="basis-1/3 flex-1">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -10,
                  borderRadius: "100%",
                }}
              >
                <Image
                  src={StudenMUI}
                  alt="TechCart Site"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>
            <div className="basis-1/3 flex-1">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -10,
                  borderRadius: "100%",
                }}
              >
                <Image
                  src={Uidesign}
                  alt="TechCart Site"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>
            <div className="basis-1/2 flex-1">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -10,
                  borderRadius: "100%",
                }}
              >
                <Image
                  src={AdyapanaLogin}
                  alt="TechCart Site"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>
            <div className="basis-1/3 flex-1">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -10,
                  borderRadius: "100%",
                }}
              >
                <Image
                  src={AdyapanaHome}
                  alt="TechCart Site"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>
            <div className="basis-1/3 flex-1">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -10,
                  borderRadius: "100%",
                }}
              >
                <Image
                  src={AdyapanaStudentPage}
                  alt="TechCart Site"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* footer */}
        <footer className=" border-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10 lg:flex-row lg:items-center">
          <div className="">
            <h3 className=" text-base mb-2">Contact For More Details</h3>
            <p className="opacity-40">
              Feel free to get in touch for further inquiries or to discuss your
              project requirements. You can reach me through any of the
              following channels
              <p>
                Phone Number: <a href="0702802209">+94702802209</a>
                &nbsp;Address: 71/4 Elapahala Road, Gorakapitiya, Piliyandala
                Email Address &nbsp;
                 <a href="hiranyevithange916@gmail.com">
                   hiranyevithange916@gmail.com
                </a>
              </p>{" "}
              Whether you have questions about my services, want to schedule a
              consultation, or simply wish to connect, I'm here to assist you.
              Looking forward to hearing from you!
            </p>
          </div>
          <div className="">
            <div className=" text-2xl flex justify-center gap-16 text-gray-700 py-2 opacity-80 md:text-5xl lg:text-6xl">
              <a href="https://github.com/hiranyavith" target="_blank">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.co
m/in/hiranye-vithange196443246/" target="_blank">
                <AiFillLinkedin />
              </a>
              <a href="#">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.facebook.com/hiranye.vithanage/"
                target="_blank">
                <AiFillFacebook />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
