"use client";

import { FormEvent, useEffect, useState } from "react";

const STORAGE_KEY = "pro-mep-admin-settings";
const ACCESS_KEY = "pro-mep-admin-session";
const defaults = {
  announcement: "Now accepting new MEP design and estimating projects.",
  announcementEnabled: false,
  primaryColor: "#621215",
  accentColor: "#e1ab4e",
  showReviews: true,
  showTrades: true,
  showServices: true,
};

type Settings = typeof defaults;

export default function AdminPanel() {
  const [authenticated, setAuthenticated] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [settings, setSettings] = useState<Settings>(defaults);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setAuthenticated(window.localStorage.getItem(ACCESS_KEY) === "true");
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { setSettings({ ...defaults, ...JSON.parse(stored) }); } catch { setSettings(defaults); }
    }
  }, []);

  function login(event: FormEvent) {
    event.preventDefault();
    if (accessCode.trim().length < 4) return;
    window.localStorage.setItem(ACCESS_KEY, "true");
    setAuthenticated(true);
  }

  function saveSettings(event: FormEvent) {
    event.preventDefault();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    window.dispatchEvent(new Event("pro-mep-settings-updated"));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  }

  if (!authenticated) {
    return <main className="admin-page"><div className="admin-login"><div className="admin-kicker">PRIVATE CONTROL PANEL</div><h1>Welcome back.</h1><p>Enter your local preview access code to manage the website.</p><form onSubmit={login}><label htmlFor="admin-code">Access code</label><input id="admin-code" type="password" value={accessCode} onChange={(event) => setAccessCode(event.target.value)} placeholder="Any 4+ character code" autoFocus /><button type="submit">Open dashboard</button></form><small>This local prototype stores settings only in this browser.</small></div></main>;
  }

  return <main className="admin-page"><div className="admin-shell"><header className="admin-header"><div><div className="admin-kicker">PRO MEP SOLUTION / ADMIN</div><h1>Website control panel</h1><p>Manage the client-facing experience from one focused workspace.</p></div><button className="admin-logout" onClick={() => { window.localStorage.removeItem(ACCESS_KEY); setAuthenticated(false); }}>Log out</button></header><form onSubmit={saveSettings} className="admin-grid"><section className="admin-card admin-card-wide"><div className="admin-card-heading"><div><span className="admin-icon">A</span><div><h2>Announcement bar</h2><p>Show a short update at the top of the website.</p></div></div><label className="admin-switch"><input type="checkbox" checked={settings.announcementEnabled} onChange={(event) => setSettings({ ...settings, announcementEnabled: event.target.checked })} /><span /></label></div><input value={settings.announcement} onChange={(event) => setSettings({ ...settings, announcement: event.target.value })} placeholder="Write an announcement..." /></section><section className="admin-card"><div className="admin-card-heading"><div><span className="admin-icon">C</span><div><h2>Brand colors</h2><p>Use your brand palette consistently.</p></div></div></div><div className="admin-color-row"><label>Primary <input type="color" value={settings.primaryColor} onChange={(event) => setSettings({ ...settings, primaryColor: event.target.value })} /></label><code>{settings.primaryColor}</code></div><div className="admin-color-row"><label>Accent <input type="color" value={settings.accentColor} onChange={(event) => setSettings({ ...settings, accentColor: event.target.value })} /></label><code>{settings.accentColor}</code></div></section><section className="admin-card"><div className="admin-card-heading"><div><span className="admin-icon">V</span><div><h2>Homepage sections</h2><p>Choose what the visitor sees.</p></div></div></div>{[["showReviews", "Fiverr reviews"], ["showTrades", "Our trades"], ["showServices", "Our services"]].map(([key, label]) => <label className="admin-check" key={key}><input type="checkbox" checked={settings[key as keyof Settings] as boolean} onChange={(event) => setSettings({ ...settings, [key]: event.target.checked })} />{label}</label>)}</section><section className="admin-card admin-card-wide admin-preview-card"><div><div className="admin-kicker">LIVE PREVIEW</div><h2>Brand preview</h2><p>Changes apply to this browser after saving.</p></div><div className="admin-preview-strip" style={{ background: settings.primaryColor }}><strong>Pro MEP Solution</strong><span style={{ background: settings.accentColor }}>Your trusted MEP partner</span></div></section><div className="admin-actions"><button className="admin-save" type="submit">{saved ? "Saved successfully ✓" : "Save changes"}</button><a href="/" target="_blank" rel="noreferrer">Open website ↗</a></div></form></div></main>;
}
