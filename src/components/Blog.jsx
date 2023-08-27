import React from "react";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      image: "/assets/blog/image33.png",
      title: "Rema",
      desc: "Shouts down his recent show with a stunning performance",
    },
    {
      id: 2,
      image: "/assets/blog/image34.png",
      title: "Kendrick Lamar",
      desc: "Still ranking streaming from the album “ Mr. Morale & the Big Steppers.”",
    },
    {
      id: 3,
      image: "/assets/blog/image35.png",
      title: "Burna Boy",
      desc: "Fans say this is the best album he has dropped because of the uniqueness of the album  ",
    },
    {
      id: 4,
      image: "/assets/blog/image36.png",
      title: "Rihanna",
      desc: "Fan can get over the stunning performance at super bowl ",
    },
  ];
  return (
    <div className="w-full bg-yellowish my-[4rem] px-[2rem] py-[20px] justify-center items-center ">
      <div className="flex flex-col justify-center items-center">
        <div className="font-600 text-[40px] m-[50px] text-center ">Trending On Our Blogs</div>
        <div className="flex w-full flex-wrap lg:flex-nowrap justify-center ">
          {blogData.map((item) => (
            <div key={item.index} className="w-[295px] mb-[20px] md:m-[20px] ">
              <img src={item.image} />
              <div className="flex my-[10px] font-600 text-[20px] ">
                <img src="/assets/blog/dot.svg" />
                <div>{item.title}</div>
              </div>
              <div>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
