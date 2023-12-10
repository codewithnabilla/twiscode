import Image from "next/image";
function AboutUs() {
  return (
    <div className="container mx-auto px-20 pt-5">
      <div className="flex-row mt-20 justify-between sm:flex pb-10">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-5xl font-bold">
            We’re a passionate group of people working from around the world to
            build the future of web or app.
          </h1>
          <p className="mt-10">
            You can work with us as your technology partner for full-cycle
            design and development, as an external team that you can delegate
            tasks to or as consultants to advise you on how to best use
            technology to meet your business objectives.
          </p>
        </div>
        <div className="flex-1 mt-20 sm:ml-20">
          <Image
            src="/team.jpg"
            className="object-contain md:object-scale-down rounded-md"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="mt-20 pb-10">
        <div className="mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold">
            We approach the workplace <br /> as something that adds to our
            <br />
            lives and adds value to world.
          </h1>
          <p className="mt-5">
            We discover everything there is to learn about your business, what a
            new app needs to deliver and to whom.
          </p>
        </div>
        <div className="flex-coloumn sm:flex justify-between gap-8 items-end">
          <div className="flex-1">
            <div className="box-border h-50 md:h-80 w-45 mb-5 md:mb-0 p-4 bg-slate-300 rounded-lg">
              <p className="font-bold text-3xl mb-2 md:mb-24">$8.9 billion</p>
              <p className="font-bold pt-1 md:pt-12 mb-1">
                We’re proud that our customers have made over $8 billion in
                total revenue.
              </p>
              <p>
                In twiscode, the goal is to decorate something. An element of
                great need.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="box-border h-50 md:h-30 w-45 mb-5 md:mb-0 p-4 bg-slate-400 rounded-lg">
              <p className="font-bold text-3xl mb-2 md:mb-2">250k</p>
              <p className="font-bold mb-1">Users on the platform</p>
              <p>We can reach user around 250k in a year</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="box-border h-50 md:h-60 w-45 mb-5 md:mb-0 p-4 bg-slate-500 rounded-lg">
              <p className="font-bold text-3xl mb-2 md:mb-20">401,093</p>
              <p className="font-bold  mb-1">Transactions this year</p>
              <p>Transactions history twiscode achieve 401,093 in a year</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-2xl sm:text-4xl font-bold">Our values</h1>
        <p className="text-lg mt-5">
          We’ll also suggest a few of our own ideas we love coming up with fresh
          solutions that really make the technology work hard.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 mb-10">
        <div>
          <p className="font-bold">Be world-class</p>
          <p>
            A world-class web development company places an unwavering
            commitment to quality at the core of its operations. This involves a
            meticulous focus on every aspect of the development process.
          </p>
        </div>
        <div>
          <p className="font-bold">Share everything you know</p>
          <p>
            Embracing this principle encourages individuals to freely impart
            their insights, skills, and experiences with others. It fosters an
            environment where information flows seamlessly, enabling collective
            learning and growth.
          </p>
        </div>
        <div>
          <p className="font-bold">Always learning</p>
          <p>
            Embracing this mindset entails a perpetual curiosity, a hunger for
            knowledge, and a willingness to adapt to evolving circumstances.
            Those who adhere to the principle of always learning actively seek
            out new information, experiences, and skills, recognizing that
            growth is a lifelong journey.
          </p>
        </div>
        <div>
          <p className="font-bold">Be supportive</p>
          <p>
            A team becomes truly supportive when its members share a collective
            mindset of encouragement, understanding, and cooperation. In such an
            atmosphere, individuals feel empowered to express their ideas, take
            calculated risks.
          </p>
        </div>
        <div>
          <p className="font-bold">Take responsibility</p>
          <p>
            Those who embody the principle of taking responsibility understand
            that accountability is the foundation of integrity and trust. Rather
            than placing blame, they proactively seek solutions, learn from
            mistakes, and continuously strive to improve.
          </p>
        </div>
        <div>
          <p className="font-bold">Enjoy downtime</p>
          <p>
            Embracing and savoring downtime is an essential aspect of
            maintaining a healthy and balanced lifestyle. Whether it's a moment
            of solitude, a leisurely activity, or simply relaxing, downtime
            provides a crucial opportunity to recharge and rejuvenate.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
