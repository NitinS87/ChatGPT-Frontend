import React from "react";
import autoAnimate from "@formkit/auto-animate";
import { useEffect } from "react";
import { useRef } from "react";

const ChatBody = ({ chat }) => {
  const aiStyle =
    "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto";

  const parent = useRef(null);
  const bottomRef = useRef(null);

  //only for auto anumations
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, []);

  //for scrolling bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  return (
    <div className="flex flex-col gap-4" ref={parent}>
      {chat.map((message, i) => {
        return (
          <div
            key={i}
            className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${
              message.sender === "ai" && aiStyle
            }`}
          >
            <pre className="whitespace-pre-wrap">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}

      <div ref={bottomRef} className="h-3"></div>
      {/* client message */}
      {/* <div className="border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]">
        <pre className="whitespace-pre-wrap">
          <span>Hi Chat GPT, Can you help me?</span>
        </pre>
      </div> */}

      {/* ai message */}
      {/* <div
        className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${aiStyle}`}
      >
        <pre>
          <span>Yeah, I can help you with anything</span>
        </pre>
      </div> */}
    </div>
  );
};

export default ChatBody;
