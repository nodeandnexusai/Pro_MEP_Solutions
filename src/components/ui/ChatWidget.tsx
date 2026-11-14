"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

type ChatMessage = { from: "assistant" | "user"; text: string };

const welcomeMessage: ChatMessage = {
  from: "assistant",
  text: "Hi! How can I help you with your project estimation today?",
};

const quickQuestions = ["What services do you offer?", "How fast is delivery?", "How can I get a quote?"];

function getReply(input: string) {
  const question = input.toLowerCase();
  if (question.includes("service") || question.includes("mep") || question.includes("design")) {
    return "We provide MEP Design, Quantity Takeoff, and Cost Estimation for construction projects.";
  }
  if (question.includes("takeoff") || question.includes("quantity") || question.includes("material")) {
    return "Our quantity takeoffs organize accurate material quantities by trade and project scope.";
  }
  if (question.includes("cost") || question.includes("estimate") || question.includes("price")) {
    return "Share your drawings and project scope for a clear, project-specific cost estimate.";
  }
  if (question.includes("fast") || question.includes("time") || question.includes("deliver") || question.includes("turnaround")) {
    return "Turnaround depends on project size and drawing detail. Send your scope and we will confirm timing.";
  }
  if (question.includes("contact") || question.includes("quote") || question.includes("hire")) {
    return "You can request a quote through our contact form or message us directly on WhatsApp.";
  }
  return "I can help with MEP Design, Quantity Takeoff, Cost Estimation, turnaround, and quotes. For anything else, use WhatsApp to speak with our team.";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((current) => [...current, { from: "user", text: trimmed }, { from: "assistant", text: getReply(trimmed) }]);
    setMessage("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(message);
  }

  return (
    <>
      {open && (
        <section className="chat-panel" aria-label="Pro MEP Assistant">
          <div className="chat-panel-header">
            <Image src="/images/pro-mep-logo.png" alt="" width={354} height={445} />
            <strong>PRO MEP Assistant</strong>
          </div>
          <div className="chat-panel-messages" aria-live="polite">
            {messages.map((item, index) => (
              <p className={`chat-message chat-message-${item.from}`} key={`${item.from}-${index}`}>
                {item.text}
              </p>
            ))}
          </div>
          <div className="chat-quick-actions">
            {quickQuestions.map((question) => <button type="button" key={question} onClick={() => sendMessage(question)}>{question}</button>)}
          </div>
          <form onSubmit={handleSubmit} className="chat-panel-form">
            <label htmlFor="chat-message" className="sr-only">Your message</label>
            <input id="chat-message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Write your message..." autoComplete="off" />
            <button type="submit">Send</button>
          </form>
          <a className="chat-whatsapp-link" href="https://wa.me/14029010788?text=Hello%20Pro%20MEP%20Solution%2C%20I%20need%20help%20with%20a%20project." target="_blank" rel="noreferrer">Continue on WhatsApp</a>
        </section>
      )}
      <button type="button" className="chat-float" onClick={() => setOpen(!open)} aria-label={open ? "Close Pro MEP Assistant" : "Open Pro MEP Assistant"} aria-expanded={open}>
        <Image src="/images/chat-icon.png" alt="" width={51} height={49} />
      </button>
    </>
  );
}
