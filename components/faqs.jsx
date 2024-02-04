/* eslint-disable react/prop-types */
import Item from "./Item";
import { useState } from "react";


 const faqArray = [
  {
    question: "School",
    answer:
      `Brigade School - 1.2 km
      National Public School - 3.2 km
      Vidyashilp Academy - 14 km
      Mallya Aditi International School - 15 km
      Stone Hill International School - 25.5 km`,
  },
  {
    question: "Health care",
    answer:
      `Columbia Asia Hospital - 19.3 km
      Cloud Nine - 1.2 km
      Vikram Hospital - 22.2 km
      Narayana Nethralaya - 650 m`,
  },
  {
    question: "work",
    answer:
      `World Trade Center - 900 m,
      Richmond Circle - 11.6 km,
      MG Road - 11.7 km,
      Indiranagar - 13.7 km,
      Koramangala - 15.4 km`,
  },
  {
    question:
      "Shooping",
    answer:
      `
      Orion Mall - 450 m,
      Metro Wholesale 1.4 km,
      GT World Mall 4.9 km,
      Malleshwaram 2 km`,
  },
];
  
const Accordion = ({backgroundColor}) => {
  const [ActiveIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(ActiveIndex === index ? null : index);
  };

  return (
    <div id="accordion-wrapper" className="flex flex-col gap-0 max-w-[800px] w-full mx-auto rounded-xl border border-gray-200 divide-y overflow-hidden">
      {faqArray.map((faq, i) => (
        <Item
          key={i}
          answerID={`answer-${i + 1}`}
          questionID={`question-${i + 1}`}
          isActive={ActiveIndex === i}
          onClick={() => handleToggle(i)}
          question={faq.question}
          answer={faq.answer}
          ariaExpanded={ActiveIndex === i ? true : false}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
};

export default Accordion;