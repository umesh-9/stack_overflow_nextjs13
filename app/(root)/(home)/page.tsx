import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";
// const items = ["Newest", "Recommended", "Frequent", "Unanswered"];
const questions = [
  {
    _id: "1",
    title: "Cascading Deletes in SQLAlchemy",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      name: "UmeshNaidu",
      picture: "user.jpg",
    },
    upvotes: 10,
    views: 290000000,
    answers: 3,
    createdAt: new Date("2023-10-31"),
  },
  {
    _id: "2",
    title: "Getting Started with React Hooks",
    tags: [
      { _id: "3", name: "javascript" },
      { _id: "4", name: "react" },
    ],
    author: {
      _id: "2",
      name: "SarahDeveloper",
      picture: "sarah.jpg",
    },
    upvotes: 15,
    views: 42,
    answers: 5,
    createdAt: new Date("2022-02-15"),
  },
  {
    _id: "3",
    title: "Introduction to Machine Learning Algorithms",
    tags: [
      { _id: "5", name: "machine learning" },
      { _id: "6", name: "data science" },
    ],
    author: {
      _id: "3",
      name: "JohnDataScientist",
      picture: "john.jpg",
    },
    upvotes: 20,
    views: 60,
    answers: 7,
    createdAt: new Date("2022-03-10"),
  },
];
export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center ">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col  sm:items-center md:flex-1 md:flex-col md:items-start ">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search questions..."
          otherClases="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClases="min-h-[56px] sm:min-w-[177px]"
          containerClases="hidden max-md-flex"
        />
        <HomeFilters />
      </div>
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
