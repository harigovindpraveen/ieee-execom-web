
import React, { useState } from 'react';

const faqData = [
  {
    question: 'Who can participate in the event?',
    answer: 'This event is open exclusively to all First Year students. Come join us to meet your batchmates and seniors!',
  },
  {
    question: 'Where is the venue located?',
    answer: 'The event will be held at the CGPC Hall.<br/><br/><b>Directions:</b> It is located on the top floor of the Library Block. If you are facing the college, go to the right side; the Library Block is situated just behind the Main Block.',
  },
  {
    question: 'Why is registration mandatory?',
    answer: 'Registration is critical for our Team Balancing System.<br/><br/><b>How it works:</b> We use the registration data to randomly generate 12 mixed teams, ensuring an equal ratio of boys and girls in every group.<br/><br/><b>The Benefit:</b> Once the teams are locked in, your group can log in and access the team-based games (like the Treasure Hunt or Quiz) from any team member’s account.',
  },
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        className="w-full flex justify-between items-center text-left text-xl font-semibold py-6 transition-colors duration-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`transition-colors duration-300 ${isOpen ? 'text-cyan-400' : 'text-white'}`}>{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 text-cyan-400 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="pb-6 pr-8">
          <p className="text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: answer }}></p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="bg-black text-white py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
            <div className="flex justify-center items-center gap-x-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <p className="text-sm font-bold tracking-widest text-gray-500">QUESTIONS</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Frequently Asked Questions
            </h2>
        </div>
        <div>
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
