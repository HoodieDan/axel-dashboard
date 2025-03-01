import clsx from "clsx";

interface Params {
  plan: {
    type: string;
    price: number;
    sessions: number;
    contents: Array<string>;
    button_text: string;
    highlight: boolean;
  };
}

function PricingCard({ plan }: Params) {
  return (
    <div
      className={clsx(
        "h-max lg:h-[600px] w-max p-[30px] font-montreal rounded-[24px] border flex flex-col justify-between border-[#6F7C8E]",
        plan.highlight &&
          "bg-gunmetal text-white relative lg:bottom-[48px] border-none"
      )}
    >
      <div>
        <div className="space-y-[30px] relative pb-[24px] border-b">
          {plan.highlight && (
            <div className="px-[12px] py-[10px] absolute -top-[40px] -right-12 rotate-12 bg-alice-blue w-max text-black text-[14px] rounded-full">
              🔥 Most Popular
            </div>
          )}
          <div className="py-[6px] font-medium px-[10px] text-[12px] rounded-[6px] bg-[#B5B5B529] w-max">
            {plan.type}
          </div>
          <div className="space-y-[5px]">
            <p
              className={clsx(
                "text-[16px]",
                plan.highlight ? "text-[#ECB25E]" : "text-green-sheen"
              )}
            >
              {plan.sessions} SESSIONS
            </p>
            <h3 className="text-[16px] flex items-center font-light">
              <span className="text-[48px] font-bold mr-[20px]">
                ${plan.price}
              </span>{" "}
              / Month
            </h3>
          </div>
        </div>

        <div className="space-y-[22px] mt-[50px]">
          {plan.contents.map((content, idx) => (
            <div className="flex gap-[16px] items-center">
              <div key={idx}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={clsx(
                    "stroke-gunmetal",
                    plan.highlight && "stroke-white"
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.9987 1.6387C9.36736 1.4404 8.6955 1.3335 7.9987 1.3335C4.3168 1.3335 1.33203 4.31826 1.33203 8.00016C1.33203 11.682 4.3168 14.6668 7.9987 14.6668C11.6806 14.6668 14.6654 11.682 14.6654 8.00016C14.6654 7.30336 14.5584 6.63152 14.3602 6.00016"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5.66602 6.33333L7.99935 8.66667L13.9995 2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[16px] w-[226px]">{content}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        className={clsx(
          "py-[12px] rounded-[10px] mt-[35px] w-full bg-[#6F7C8E]",
          plan.highlight && "bg-alice-blue text-black"
        )}
      >
        {plan.button_text}
      </button>
    </div>
  );
}

export default PricingCard;
