"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "pro-mep-admin-settings";

type Settings = {
  announcement: string;
  announcementEnabled: boolean;
  primaryColor: string;
  accentColor: string;
  showReviews: boolean;
  showTrades: boolean;
  showServices: boolean;
};

const defaults: Settings = {
  announcement: "Now accepting new MEP design and estimating projects.",
  announcementEnabled: false,
  primaryColor: "#621215",
  accentColor: "#e1ab4e",
  showReviews: true,
  showTrades: true,
  showServices: true,
};

export default function SiteRuntime() {
  const [settings, setSettings] = useState<Settings>(defaults);

  useEffect(() => {
    const read = () => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved) setSettings({ ...defaults, ...JSON.parse(saved) });
      } catch {
        setSettings(defaults);
      }
    };
    read();
    window.addEventListener("pro-mep-settings-updated", read);
    return () => window.removeEventListener("pro-mep-settings-updated", read);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--burgundy", settings.primaryColor);
    document.documentElement.style.setProperty("--gold", settings.accentColor);
    document.documentElement.dataset.showReviews = String(settings.showReviews);
    document.documentElement.dataset.showTrades = String(settings.showTrades);
    document.documentElement.dataset.showServices = String(settings.showServices);
  }, [settings]);

  if (!settings.announcementEnabled || !settings.announcement) return null;
  return <div className="announcement-bar" role="status">{settings.announcement}</div>;
}
