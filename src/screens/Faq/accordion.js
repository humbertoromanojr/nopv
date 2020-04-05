import React, { useState, useEffect } from "react";
import styled from "styled-components";
import smoothscroll from "smoothscroll-polyfill";

const SButton = styled.button`
  appearance: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
`;

const ContentContainer = styled.div`
  display: none;

  &.content-open {
    display: block;
  }
`;

const Accordion = ({ id, question, answer, iconColor }) => {
  let [isContentVisible, setContentVisible] = useState(true);

  const elementId = (((1 + Math.random()) * 0x10000) | 0)
    .toString(16)
    .substring(1);

  const domElementTop = elementId.offsetTop - 150;

  const toggleVisibility = () => {
    // setTimeout is here because of a recognised iPad issue:
    // https://stackoverflow.com/questions/19929197/javascript-window-scrollto-issue-on-ipad

    window.setTimeout(function() {
      window.scrollTo({ top: domElementTop, behavior: "smooth" });
    }, 0);
  };

  useEffect(() => {
    smoothscroll.polyfill();
    setContentVisible((isContentVisible = !isContentVisible));
  }, []);

  return (
    <li>
      <h3>
        <SButton
          onClick={() =>
            setContentVisible((isContentVisible = !isContentVisible))
          }
          toggleVisibility={() => toggleVisibility()}
          aria-controls={`content-${elementId}`}
          aria-expanded={isContentVisible}
          id={`control-${elementId}`}
        >
          {isContentVisible ? (
            <svg
              width="12"
              height="2"
              viewBox="0 0 12 2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title> Closed</title>
              <path
                d="M1.333 1h9.334"
                strokeWidth="2"
                stroke={"grey" || iconColor}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title> Open</title>
              <g
                strokeWidth="2"
                transform="translate(-2 -2)"
                stroke={"grey" || iconColor}
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 3.333v9.334M3.333 8h9.334" />
              </g>
            </svg>
          )}
          {question}
        </SButton>
      </h3>
      {isContentVisible && (
        <ContentContainer
          aria-hidden={!isContentVisible}
          className={isContentVisible && "content-open"}
          id={`content-${id}`}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </li>
  );
};

export default Accordion;
