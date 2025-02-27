import React, { useEffect, useState } from "react";

interface AuthQuestionsProps {
  questions: {
    id: number;
    question: string;
    content: { contentId: number; plan?: string; role?: string }[];
  }[];
  setContent: React.Dispatch<React.SetStateAction<string>>;
  topicQuestion: string;
  setTopicQuestion: React.Dispatch<React.SetStateAction<string>>;
}

const AuthQuestions: React.FC<AuthQuestionsProps> = ({
  questions,

  setContent,
  topicQuestion,
  setTopicQuestion,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    plan?: number;
    role?: number;
  }>({});

  const filteredQuestions = questions.filter(
    (question) => question.question === topicQuestion
  );

  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);

  const handleInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (topicQuestion === "What do you plan on doing?") {
      setSelectedOptions((prev) => ({ ...prev, plan: value }));
      setTimeout(() => {
        setTopicQuestion("What role are you?");
      }, 800);

      console.log(selectedOptions);
    } else if (topicQuestion === "What role are you?") {
      setSelectedOptions((prev) => ({ ...prev, role: value }));
      setTimeout(() => {
        setContent("signup");
      }, 400);
    }
  };

  return (
    <div className="font-[Montserrat] mt-16 md:mt-28">
      {filteredQuestions.map((item) => (
        <div key={item.id}>
          <p className="text-[#344054]">{item.question}</p>
          <div
            className={` mt-3 w-full ${
              topicQuestion === "What do you plan on doing?"
                ? "md:flex-row flex-col max-md:space-y-4 flex space-x-4"
                : "md:grid flex-col  max-md:space-y-4 flex grid-cols-2 md:gap-5"
            }`}
          >
            {topicQuestion === "What do you plan on doing?"
              ? item.content.map((plan) => (
                  <label
                    key={plan.contentId}
                    className={`flex items-center font-normal text-sm  px-4 justify-start h-[60px] md:h-[50px] w-full md:w-[150px] ${
                      selectedOptions.plan === plan.contentId
                        ? "bg-[#2154cb11] text-[#2154cb] "
                        : "text-black bg-transparent border-[#b7b7b7]"
                    }  space-x-2 rounded-[10px] border   cursor-pointer`}
                  >
                    <input
                      type="radio"
                      name="plans"
                      value={plan.contentId}
                      className="mt-0 mb-0 w-fit  accent-[#2154cb]"
                      checked={selectedOptions.plan === plan.contentId}
                      onChange={handleInputContent}
                    />
                    <span className="text-gray-70">{plan.plan}</span>
                  </label>
                ))
              : item.content.map((roles) => (
                  <label
                    key={roles.contentId}
                    className={`flex items-center font-normal px-4 text-sm justify-start h-[60px] md:h-[50px] w-full md:w-[210px] ${
                      selectedOptions.role === roles.contentId
                        ? "bg-[#2154cb11] text-[#2154cb] "
                        : "text-black bg-transparent border-[#b7b7b7]"
                    }  space-x-2 rounded-[10px] border  cursor-pointer`}
                  >
                    <input
                      type="radio"
                      name="roles"
                      value={roles.contentId}
                      className="mt-0 mb-0 w-fit accent-[#2154cb] "
                      checked={selectedOptions.role === roles.contentId}
                      onChange={handleInputContent}
                    />
                    <span className="text-gray-70">{roles.role}</span>
                  </label>
                ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuthQuestions;
