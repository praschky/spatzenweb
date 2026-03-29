import React, { useState } from "react";

const Accordion = ({
  title,
  children,
  className,
  id,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: number;
}) => {
  const [show, setShow] = useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(show ? "auto" : "0px");

  // Close on custom event
  React.useEffect(() => {
    const handler = () => {
      setShow(false);
    };

    const eventName = `accordion:close-${id}`;
    window.addEventListener(eventName, handler);

    return () => window.removeEventListener(eventName, handler);
  }, [id]);

  React.useEffect(() => {
    if (show) {
      setHeight(`${contentRef.current?.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [show]);

  return (
    <div
      className={`accordion ${className} ${show && "border-dark/40"}`}
      data-accordion-id={id}
    >
      <button
        aria-expanded={show}
        className={`accordion-header ${show ? "pb-2" : ""}`}
        onClick={() => setShow(!show)}
      >
        {title}
        <span
          className={`h-8 w-8 rounded-lg ${show ? "bg-tertiary/60" : "bg-body"} flex items-center justify-center`}
        >
          <svg
            className={`accordion-icon transition-transform duration-500 ${show ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line
              x1="12"
              y1="5"
              x2="12"
              y2="19"
              className={`transition-opacity duration-500 ${show ? "opacity-0" : "opacity-100"}`}
            ></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ height, overflow: "hidden", transition: "height 0.5s ease" }}
      >
        {show && <div className="accordion-content [&_*]:m-0">{children}</div>}
      </div>
    </div>
  );
};

export default Accordion;
