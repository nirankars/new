import React from "react";

const Introduction = () => {
  return (
    <>
      {/* Part 1 starts */}
      <div className="container mx-auto  grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 text-white ">
        <h2 className="text-8xl text-[#c8c0b0] font-bold mt-96">
          USER-CENTRIC <br /> STRATIGIES <br /> THAT ACTUALLY <br />{" "}
          <span className="text-8xl">WORK</span>
        </h2>

        <p className="text-2xl lg:mt-[570px] md:mt-16 sm:mt-16 ml-48">
          We are a team of marketing experts dedicated to helping businesses
          achieve their marketing goals. Our services include branding, digital
          marketing, SEO, social media, content creation, and event management.
        </p>
      </div>
      {/* Part 1 ends */}

      {/* part 2 starts */}
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12 text-white">
        <div className="mt-40">
          <h3 className="mb-12 text-2xl text-[#c8c0b0]">
            brand <br /> management
          </h3>
          <p className="text-xl mb-4">
            Our branding services help companies establish a strong and
            consistent brand identity. We work with you to create a memorable
            brand that stands out from the competition.
          </p>
        </div>
        <div className="mt-40">
          <h3 className="mb-12 text-2xl text-[#c8c0b0]">
            digital <br /> marketing
          </h3>
          <p className="text-xl mb-4">
            We increase our clients' online presence and reach their target
            audience through digital marketing campaigns. Our services include
            SEO, PPC, email marketing, and social media marketing.
          </p>
        </div>
        <div className="mt-40">
          <h3 className="mb-12 text-2xl text-[#c8c0b0]">
            content <br /> creation
          </h3>
          <p className="text-xl mb-4">
            We create high-quality content that resonates with our clients'
            target audience and drives engagement. We specialize in creating
            content for various mediums like blog posts, social media posts,
            articles, videos, etc.
          </p>
        </div>
        <div className="mt-40">
          <h3 className="mb-12 text-2xl text-[#c8c0b0]">
            event <br /> management
          </h3>
          <p className="text-xl mb-4">
            We plan and execute events that help our clients connect with their
            target audience and build relationships with key stakeholders.
          </p>
        </div>
        <div className="mt-40">
          <h3 className="mb-12 text-2xl text-[#c8c0b0]">merchandise</h3>
          <p className="text-xl mb-4">
            We offer a range of merchandise services that promote our clients'
            brand and drive sales. Our services include product design,
            sourcing, branding, packaging, and distribution.
          </p>
        </div>
        <div className="mt-40">
          <h3 className="mb-12 text-2xl text-[#c8c0b0]">product launches</h3>
          <p className="text-xl mb-4">
            We help you launch new products and services, ensuring that they are
            well-received by the market.
          </p>
        </div>
      </div>
      {/* part 2 ends */}
    </>
  );
};

export default Introduction;
