"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim()) return;
    window.location.href = `/contact?message=${encodeURIComponent(message.trim())}`;
  }

  return (
    <>
      {open && (
        <section className="chat-panel" aria-label="Pro MEP Assistant">
          <div className="chat-panel-message">
            <Image src="/images/pro-mep-logo.png" alt="" width={354} height={445} />
            <p><strong>PRO MEP Assistant:</strong> Hi! How can I help you with your project estimation today?</p>
          </div>
          <form onSubmit={handleSubmit} className="chat-panel-form">
            <label htmlFor="chat-message" className="sr-only">Your message</label>
            <input id="chat-message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Write your message..." autoComplete="off" />
            <button type="submit">Send</button>
          </form>
        </section>
      )}
      <button type="button" className="chat-float" onClick={() => setOpen(!open)} aria-label={open ? "Close Pro MEP Assistant" : "Open Pro MEP Assistant"} aria-expanded={open}>
        <Image src="/images/chat-icon.png" alt="" width={51} height={49} />
      </button>
    </>
  );
}
