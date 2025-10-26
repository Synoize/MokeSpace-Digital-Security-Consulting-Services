import React from "react";
import Footer from "../components/Footer";

const LandingAbout = () => {
  return (
    <>
      <div className="bg-[#0d0d0d] text-white min-h-screen pt-32 pb-20">
        {/* Header Section */}
        <section className="py-16 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-orange-500">MokeSpace</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Your trusted partner in digital transformation and security
          </p>
        </section>

        {/* Who We Are */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <div className="bg-[#1a1a1a] p-10 rounded-2xl shadow-lg border border-orange-600/40 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">
              Who We Are
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              MokeSpace is a leading digital security consulting firm that
              specializes in providing comprehensive technology solutions to
              businesses of all sizes. We combine technical expertise with
              business acumen to deliver results that matter.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our team consists of experienced professionals in web development,
              app development, cybersecurity, design, and business strategy.
              Together, we create innovative solutions that drive growth while
              maintaining the highest security standards.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6 mb-20">
          {[
            {
              title: "Our Mission",
              desc: "To empower businesses with secure, innovative digital solutions that drive growth and success. We strive to make technology accessible, secure, and effective for organizations worldwide.",
            },
            {
              title: "Our Vision",
              desc: "To become the world’s most trusted digital security consulting firm, known for delivering exceptional results and building lasting partnerships with our clients and freelancer community.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-10 rounded-2xl shadow-lg border border-orange-600/40 text-center flex flex-col justify-center min-h-[260px]"
            >
              <h3 className="text-xl font-bold text-orange-500 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Why We Started */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <div className="bg-[#1a1a1a] p-10 rounded-2xl shadow-lg border border-orange-600/40 text-center">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Why We Started
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              MokeSpace was founded with a simple yet powerful vision: to bridge
              the gap between cutting-edge technology and business needs while
              prioritizing security at every step.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              We saw too many businesses struggling with digital transformation,
              facing security challenges, and unable to find reliable partners
              who truly understood their needs. We created MokeSpace to be that
              partner.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, we're proud to serve clients worldwide while also providing
              opportunities for talented freelancers to grow their careers and
              contribute to meaningful projects.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-orange-500">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Trust & Security",
                desc: "We prioritize the security and privacy of our clients' data above all else.",
                icon: "🛡️",
              },
              {
                title: "Innovation",
                desc: "Constantly pushing boundaries with cutting-edge technology solutions.",
                icon: "💡",
              },
              {
                title: "Transparency",
                desc: "Clear communication and honest relationships with clients and partners.",
                icon: "👁️",
              },
              {
                title: "Collaboration",
                desc: "Building strong partnerships through teamwork and mutual growth.",
                icon: "🤝",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-8 rounded-2xl shadow-lg text-center flex flex-col items-center justify-between h-full min-h-[240px] border border-transparent hover:border-orange-600/40 transition-transform"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-orange-500">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team & Culture */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <div className="bg-[#1a1a1a] p-12 rounded-2xl shadow-lg border border-orange-600/40 text-center">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              Our Team & Culture
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              At MokeSpace, we believe in fostering a culture of innovation,
              collaboration, and continuous learning. Our team includes
              full-time experts and a vibrant community of freelancers who share
              our passion for excellence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you're a client or a freelancer, you're part of the
              MokeSpace family. We grow together, learn together, and succeed
              together.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LandingAbout;
