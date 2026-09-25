import { useEffect, useId, useRef, useState } from "react";

type Prefs = { large: boolean; gray: boolean; contrast: boolean };
const KEY = "mb-a11y-prefs";
const DEFAULTS: Prefs = { large: false, gray: false, contrast: false };

const OPTIONS: { key: keyof Prefs; label: string; hint: string }[] = [
  { key: "large", label: "Bigger text", hint: "Makes all text about 25% larger" },
  { key: "gray", label: "Black & white", hint: "Removes colours from the page" },
  { key: "contrast", label: "High contrast", hint: "Pure black text on white paper" },
];

export function AccessibilityPanel() {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS);
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Load saved choices after hydration
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) setPrefs({ ...DEFAULTS, ...JSON.parse(saved) });
    } catch {
      /* ignore */
    }
  }, []);

  // Apply choices to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("a11y-large", prefs.large);
    root.classList.toggle("a11y-gray", prefs.gray);
    root.classList.toggle("a11y-contrast", prefs.contrast);
    try {
      localStorage.setItem(KEY, JSON.stringify(prefs));
    } catch {
      /* ignore */
    }
  }, [prefs]);

  // Escape closes and returns focus; move focus into panel on open
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-2">
      {open && (
        <div
          ref={panelRef}
          id={panelId}
          role="group"
          aria-label="Accessibility settings"
          className="w-64 rounded-sm border-2 border-ink bg-paper p-4 shadow-[0_10px_24px_rgb(0_0_0/0.18)]"
        >
          <p className="hand text-2xl text-ink">make it easier to read</p>
          <ul className="mt-3 space-y-2">
            {OPTIONS.map((o) => (
              <li key={o.key}>
                <button
                  type="button"
                  aria-pressed={prefs[o.key]}
                  onClick={() => setPrefs((p) => ({ ...p, [o.key]: !p[o.key] }))}
                  className="flex min-h-11 w-full items-center gap-3 rounded-sm px-2 text-left text-ink hover:bg-paper-deep"
                >
                  <span
                    aria-hidden="true"
                    className={`flex size-4 shrink-0 items-center justify-center border-2 border-ink text-[10px] font-bold ${prefs[o.key] ? "bg-ink text-paper" : ""}`}
                  >
                    {prefs[o.key] ? "✓" : ""}
                  </span>
                  <span>
                    <span className="block font-bold">{o.label}</span>
                    <span className="block text-sm text-ink-soft">{o.hint}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setPrefs(DEFAULTS)}
            className="label-mono mt-3 min-h-11 px-2 text-ink underline"
          >
            Reset
          </button>
        </div>
      )}
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="label-mono min-h-11 rounded-full border-2 border-ink bg-sun px-4 text-ink shadow-[0_2px_5px_rgb(0_0_0/0.18)]"
      >
        <span aria-hidden="true">Aa </span>accessibility
      </button>
    </div>
  );
}
