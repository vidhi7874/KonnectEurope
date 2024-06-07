import React, { useState } from "react";
import classNames from "classnames";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="b">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="font-medium text-lg">{title}</h2>
        <svg
          className={classNames("w-6 h-6 transform", { "rotate-180": isOpen })}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.7 12.3l-7.1 7.1c-.4.4-1 .4-1.4 0l-7.1-7.1c-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0L12 16.6l6.3-6.3c.4-.4 1-.4 1.4 0l1.4 1.4c.4.4.4 1 0 1.3z"
          />
        </svg>
      </div>
      {isOpen && <div className="p-4">{content}</div>}
    </div>
  );
};

const FAQPage = () => {
  return (
    <div className="container mx-auto py-8">
      <Accordion
        title="Can I choose my meals?"
        content="Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget."
      />
      <Accordion
        title="When will I receive my order??"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium nibh at ex faucibus fringilla. Donec ullamcorper massa eu eros hendrerit, vel maximus eros faucibus. Praesent accumsan, nunc sed auctor blandit, est massa facilisis nisi, in pulvinar felis sapien in lorem."
      />
      <Accordion
        title="Can I skip a delivery?"
        content="Vivamus non dolor non nisl laoreet fermentum sed a orci. Nullam vehicula efficitur ligula id tristique. Fusce hendrerit mauris vel massa facilisis, sit amet blandit odio rutrum. Nullam quis mauris auctor, fringilla quam vel, tincidunt tellus."
      />
       <Accordion
        title="Can I add Extras to my delivery?"
        content="Vivamus non dolor non nisl laoreet fermentum sed a orci. Nullam vehicula efficitur ligula id tristique. Fusce hendrerit mauris vel massa facilisis, sit amet blandit odio rutrum. Nullam quis mauris auctor, fringilla quam vel, tincidunt tellus."
      />
    </div>
  );
};

export default FAQPage;
