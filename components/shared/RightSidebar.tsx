import { questions } from "@/constants";
import Image from "next/image";
import React from "react";
import RenderTag from "./RenderTag";
const popularTags = [
  { _id: 1, name: "javascript", totalQuestions: 5 },
  { _id: 2, name: "react", totalQuestions: 50 },
  { _id: 3, name: "next", totalQuestions: 5 },
  { _id: 4, name: "vuejs", totalQuestions: 15 },
  { _id: 5, name: "tailwindcss", totalQuestions: 10 },
];
const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border  custom-scrollbar sticky right-0 top-0 flex h-full w-[330px] flex-col overflow-y-auto border-l p-6 pt-36 max-xl:hidden ">
      <div>
        <h3 className="h3-bold text-dark300_light900">Top Questions</h3>
        {questions.map((question, index) => (
          <div
            className="text-dark500_light700 flex shrink-0  justify-between gap-7"
            key={index}
          >
            <p className="body-medium text-dark500_light700 mt-[30px] ">
              {question}
            </p>
            <Image
              src="/assets/icons/chevron-right.svg"
              alt="arrow"
              width={20}
              height={20}
              className="invert-colors"
            />
          </div>
        ))}
      </div>
      <div className=" mt-16">
        <h3 className="h3-bold text-dark300_light900">Top Questions</h3>
        <h3 className=" ">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
