import { useState } from "react";

export default function ContactWindow() {
  const [sent, setSent] = useState(false);

  return (
    <>
      {/* Outlook toolbar */}
      <div className="xp-menu-bar">
        <span className="xp-menu-bar-item">File</span>
        <span className="xp-menu-bar-item">Edit</span>
        <span className="xp-menu-bar-item">View</span>
        <span className="xp-menu-bar-item">Insert</span>
        <span className="xp-menu-bar-item">Format</span>
        <span className="xp-menu-bar-item">Tools</span>
        <span className="xp-menu-bar-item">Help</span>
      </div>

      {/* Toolbar buttons */}
      <div className="xp-toolbar">
        <button className="xp-toolbar-button" onClick={() => setSent(true)}>
          <img src="/xp-assets/icons/outlook.png" alt="" />
          Send
        </button>
        <button className="xp-toolbar-button">
          <img src="/xp-assets/icons/folder-open.png" alt="" />
          Attach
        </button>
      </div>

      {sent ? (
        <div
          className="window-body"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>✉️</div>
            <p style={{ fontWeight: "bold" }}>
              Your message has been sent!
            </p>
            <p style={{ color: "#555", fontSize: 11 }}>
              (This is a demo — in production, this would use a real email
              service.)
            </p>
            <button
              style={{ marginTop: 8, fontSize: 11, padding: "3px 16px" }}
              onClick={() => setSent(false)}
            >
              New Message
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="xp-outlook-header">
            <label>To:</label>
            <input type="text" defaultValue="evasco38@gmail.com" readOnly />
            <label>Cc:</label>
            <input type="text" placeholder="" />
            <label>Subject:</label>
            <input type="text" placeholder="Re: Let's connect" />
          </div>
          <div className="xp-outlook-body">
            <textarea
              placeholder="Write your message here..."
              style={{
                flex: 1,
                border: "none",
                resize: "none",
                fontFamily: '"Tahoma", sans-serif',
                fontSize: 11,
                padding: 8,
                outline: "none",
                background: "#fff",
              }}
            />
          </div>
        </>
      )}
    </>
  );
}
