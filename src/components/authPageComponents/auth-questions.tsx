import React, { useState } from "react";

interface AuthQuestionsProps {
  plans: { id: number; plan: string }[];
  questions: {
    id: number;
    question: string;
    content: { contentId: number; plan?: string; role?: string }[];
  }[];
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  topicQuestion: string;
  setTopicQuestion: React.Dispatch<React.SetStateAction<string>>;
}

const AuthQuestions: React.FC<AuthQuestionsProps> = ({
  plans,
  questions,
  content,
  topicQuestion,
}) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [plan, setPlan] = useState("");

  const filteredQuestions = questions.filter(
    (question) => question.question === topicQuestion
  );

  console.log(filteredQuestions);
  const handleInputContent= (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlan(e.target.value);
  }

  return (
    <div className="font-[] mt-28">
      {filteredQuestions.map((item) => (
        <div>
          <p className="text-[#344054]">{item.question}</p>
          <div className="flex mt-3 space-x-4">
            {item.content.map((plan) => (
              <label
                key={plan.contentId}
                className={`flex items-center font-normal px-4 justify-start h-[50px] w-[150px] ${
                  plan.contentId === selectedOption
                    ? "bg-[#2154cb11] text-[#2154cb] "
                    : "text-black bg-transparent"
                }  space-x-2 rounded-[10px] border  cursor-pointer`}
              >
                <input
                  type="radio"
                  name="plans"
                  value={plan.contentId}
                  className="mt-0 mb-0 w-fit"
                  checked={selectedOption === plan.contentId}
                  onChange={() => setSelectedOption(plan.contentId)}
                />
                <span className="text-gray-70">{plan.plan}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuthQuestions;
