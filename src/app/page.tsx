"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaGlobe, FaLaptopCode, FaChartLine, FaLock, FaCloud, FaChalkboardTeacher } from "react-icons/fa";
import {
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaGamepad,
  FaRocket,
  FaUtensils,
} from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="bg-gray-70">
     

      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-center items-center text-white text-center px-6">
        <img
          src="kk.jpg" // 👈 put tech-bg.jpg inside /public
          alt="Tech background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute  inset-0 bg-black/60 -z-10" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-2"
        >
          Welcome to Nextrive Technologies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sl text-gray-200 max-w-2xl"
        >
         Your trusted partner for software, web, and mobile solutions.
        </motion.p>
      </section>

      
       {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl text-black font-bold mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.img
              src="mm.jpg"
              alt="About Nextrive"
              className="rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-gray-700 text-lg leading-relaxed"
            >
              <p className="mb-6">
                At <span className="font-semibold">Nextrive Technologies</span>, we are committed to
                building digital products that transform ideas into scalable realities.
                Our expertise spans across software development, cloud systems, AI,
                and business automation.
              </p>
              <p className="mb-6">
                Our <span className="font-semibold">mission</span> is to provide affordable,
                innovative, and practical IT solutions that empower individuals,
                startups, and enterprises.
              </p>
              <p>
                We <span className="font-semibold">envision</span> becoming one of the most
                accepted and innovative tech companies, bridging technology with
                business needs worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-6xl text-black mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-14"
          >
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Web Development",
                desc: "Responsive, scalable, and modern websites tailored to your business.",
                icon: <FaGlobe className="text-blue-500 text-5xl mx-auto mb-4" />,
              },
              {
                title: "Software Solutions",
                desc: "Custom software applications designed for efficiency and innovation.",
                icon: <FaLaptopCode className="text-green-500 text-5xl mx-auto mb-4" />,
              },
              {
                title: "IT Consulting",
                desc: "Expert guidance to drive your digital transformation journey.",
                icon: <FaChartLine className="text-purple-500 text-5xl mx-auto mb-4" />,
              },
              {
                title: "Cybersecurity",
                desc: "Protect your business with robust and reliable security solutions.",
                icon: <FaLock className="text-red-500 text-5xl mx-auto mb-4" />,
              },
              {
                title: "Cloud Computing",
                desc: "Scalable cloud solutions for flexibility and growth.",
                icon: <FaCloud className="text-indigo-500 text-5xl mx-auto mb-4" />,
              },
              {
                title: "Training & Capacity Building",
                desc: "Empowering individuals and organizations with digital skills.",
                icon: <FaChalkboardTeacher className="text-yellow-500 text-5xl mx-auto mb-4" />,
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* TEAM */}
<section id="team" className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
  <div className="max-w-6xl mx-auto text-black px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-bold mb-4"
    >
      Meet Our Team
    </motion.h2>
    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
      A passionate group of innovators, developers, and creators driving the
      future of technology at Nextrive.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          name: "Suleiman Mohammed",
          role: "Software Developer",
          img: "team1.jpg",
          whatsapp: "https://wa.me/2348169997543",
          facebook: "https://web.facebook.com/profile.php?id=100039553060732",
        },
        {
          name: "Alfa Saidu",
          role: "Project Manager",
          img: "/team2.png",
          whatsapp: "https://wa.me/2348103455759",
          facebook: "https://web.facebook.com/profile.php?id=100080943060594",
        },
        {
          name: "Hadi Hayatu",
          role: "Business Development",
          img: "/team3.png",
          whatsapp: "https://wa.me/2349064047200",
          facebook: "https://web.facebook.com/hayatu.hadi",
        },
        {
          name: "Mohammed Usman",
          role: "Cybersecurity Specialist",
          img: "/team4.png",
          whatsapp: "https://wa.me/2348068872960",
          facebook: "https://web.facebook.com/profile.php?id=100066582450503",
        },
        {
          name: "Abdullahi Barkindo",
          role: "UI/UX Designer",
          img: "/team5.jpg",
          whatsapp: "https://wa.me/2349091106867",
          facebook: "https://web.facebook.com/abdoulbarkindo",
        },
      ].map((member, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2"
        >
          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-gray-200 shadow-sm">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-sm text-gray-500 mb-4">{member.role}</p>
          <div className="flex justify-center space-x-5">
            <a
              href={member.whatsapp}
              target="_blank"
              className="text-green-600 text-2xl hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
          
            <a
              href={member.facebook}
              target="_blank"
              className="text-blue-600 text-2xl hover:scale-110 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* PORTFOLIO */}
<section id="portfolio" className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto text-black px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-bold mb-14"
    >
      Our Portfolio
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "CBT Testing Platform",
          desc: "An online examination system with real-time grading and reporting.",
          icon: <FaCode className="text-blue-500 text-5xl mb-4 mx-auto" />,
        },
        {
          title: "Fresh Air Booking System",
          desc: "A transport booking platform with secure payments and e-tickets.",
          icon: <FaMobileAlt className="text-green-500 text-5xl mb-4 mx-auto" />,
        },
        {
          title: "Signature Verification App",
          desc: "AI-powered solution for verifying official signatures securely.",
          icon: <FaDatabase className="text-purple-500 text-5xl mb-4 mx-auto" />,
        },
        {
          title: "Puzzle Game",
          desc: "A fun sliding puzzle game with timer, scoring, and sound effects.",
          icon: <FaGamepad className="text-red-500 text-5xl mb-4 mx-auto" />,
        },
        {
          title: "Nextrive Booster",
          desc: "A powerful business automation tool for SMEs.",
          icon: <FaRocket className="text-yellow-500 text-5xl mb-4 mx-auto" />,
        },
        {
          title: "Food Ordering Gallery",
          desc: "An online food gallery and booking system with manual delivery.",
          icon: <FaUtensils className="text-orange-500 text-5xl mb-4 mx-auto" />,
        },
      ].map((proj, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition text-center"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block"
          >
            {proj.icon}
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
          <p className="text-gray-600 text-sm">{proj.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

 <ContactForm />
{/* FOOTER */}
<footer className="bg-gray-900 text-gray-300 py-12">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
    
    {/* Company Info */}
    <div className="text-center md:text-left">
      <h3 className=" font-bold text-lg mb-3">NEXTRIVE TECHNOLOGIES</h3>
      <p className="text-sm leading-relaxed">
        Empowering businesses with innovative <br /> 
        and affordable digital solutions.
      </p>
    </div>

    {/* Contact Info */}
    <div className="text-center">
      <h3 className="font-bold text-lg mb-3">NEXTRIVE OFFICE ADDRESS</h3>
      <p className="text-sm flex items-center justify-center mb-5  md:justify-start gap-2">
        📍 No. 4, Alhaji Habu Upstairs, Opp. Yan-Gwanjo Mosque, Mubi Main Market, Mubi North, Adamawa State.
      </p>
      <h1 className="font-bold">CUSTOMER SUPPORT</h1>
      <p className="text-sm flex items-center justify-center  md:justify-start gap-2">
        📞 <a href="tel:+2348169997543" className="hover:text-green-400 transition">
          +234 816 999 7543 | +234 816 847 2591
        </a>
      </p>
      <p className="text-sm flex items-center justify-center md:justify-start gap-2">
        ✉️ <a href="mailto:nextrivetechnologies@gmail.com" className="hover:text-green-400 transition">
          nextrivetechnologies@gmail.com
        </a>
      </p>
    </div>

    {/* Social Links */}
    <div className="flex justify-center md:justify-end items-center space-x-6">
      <a
        href="https://wa.me/2348169997543"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-500 transition text-2xl"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://web.facebook.com/profile.php?id=61576882865428"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition text-2xl"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.youtube.com/@NextriveTechnologies"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition text-2xl"
        aria-label="Facebook"
      >
        <FaYoutube />
      </a>
    </div>
  </div>

  {/* Bottom Note */}
  <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-6">
    © {new Date().getFullYear()} <span className="text-white font-semibold">Nextrive Technologies</span>. All rights reserved.
  </div>
</footer>


    </main>
  );
}
