function Footer() {
  return (
    <section className="px-[10px] lg:px-[60px] bg-gunmetal text-white pt-[100px] space-y-[98px]">
      <div className="lg:h-[231.46px] p-10 lg:px-[70px] flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:justify-between text-black lg:items-center bg-alice-blue rounded-[24px]">
        <h3 className="text-[30px] font-montreal lg:text-[35px] lg:w-[500px] font-medium leading-[42.1px] lg:leading-[45.5px]">
          Ready to Speak with Confidence?
        </h3>
        <button className="w-[220px] h-[71px] space-x-[12px] rounded-[25px]">
          <p className="text-[18px]">Get Started</p>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.738281"
              y="0.833252"
              width="26.6667"
              height="26.6667"
              rx="13.3333"
              fill="#C1C2B4"
            />
            <path
              d="M19.6915 14.5478C19.902 14.3372 19.902 13.9958 19.6915 13.7852L16.2599 10.3537C16.0493 10.1431 15.7079 10.1431 15.4973 10.3537C15.2868 10.5643 15.2868 10.9057 15.4973 11.1162L18.5476 14.1665L15.4973 17.2168C15.2868 17.4273 15.2868 17.7688 15.4973 17.9793C15.7079 18.1899 16.0493 18.1899 16.2599 17.9793L19.6915 14.5478ZM8.83398 14.7057H19.3102V13.6273H8.83398V14.7057Z"
              fill="#262B3A"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-[83.48px] px-[50px] text-[16px] text-[#626362]">
        <div className="w-[219px] space-y-[40px]">
          <img src="./assets/logo.png" alt="brand logo" className="h-8" />
          <p>Don't wait for your next big opportunity to practice.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[83.48px]">
          <div className="space-y-[28px]">
            <p className="text-[#2F4858]">Features</p>
            <ul className="space-y-[24px]">
              <li>Easy Integration</li>
              <li>Fast Support</li>
              <li>Secure Payments</li>
              <li>24/7 Availability</li>
            </ul>
          </div>
          <div className="space-y-[28px]">
            <p className="text-[#2F4858]">Support</p>
            <ul className="space-y-[24px]">
              <li>Help Center</li>
              <li>Live Chat</li>
              <li>How It Works</li>
              <li>User Guides</li>
            </ul>
          </div>
          <div className="space-y-[28px]">
            <p className="text-[#2F4858]">Legal</p>
            <ul className="space-y-[24px]">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-t-alice-blue flex flex-col lg:flex-row space-y-4 lg:space-y-0 py-[40px] justify-between text-[16px] text-[#626362]">
        <p>© 2024 Greentech Inc. All Rights Reserved.</p>
        <div className="flex items-center gap-[30px]">
          <p>Terms & Condition</p>
          <div className="h-2 w-2 rounded-full bg-[#626362]" />
          <p>Privacy Policy</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
