// CustomLanguageSelector.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { getCookie } from '../../utils/getCookie';
import './LanguageSelector.css';

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'uk', label: 'Українська' },
  { value: 'es', label: 'Español' },
  { value: 'de', label: 'Deutsch' },
  { value: 'pl', label: 'Polski' },
  { value: 'pt', label: 'Português' },
  { value: 'fr', label: 'Français' },
];

export default function CustomLanguageSelector() {
  const [locale, setLocale] = useState('en');
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const cookieLocale = getCookie('NEXT_LOCALE');
    if (cookieLocale) setLocale(cookieLocale);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !(wrapperRef.current as HTMLElement).contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    setLocale(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; SameSite=Lax`;
    window.location.replace(window.location.href);
  };

  return (
    <div className="language-selector-wrapper" ref={wrapperRef}>
      <button
        className="language-selector"
         onClick={(e) => {
    setOpen((prev) => !prev);
    (e.currentTarget as HTMLButtonElement).blur(); // <– важливий рядок
  }}
      >
        <span className="language-selector-left">
          <i className="icon-language language-selector-icon" />
          <span className="language-selector-label">
            {languageOptions.find((o) => o.value === locale)?.label}
          </span>
        </span>
       <i className={`icon-arrow_drop_down_up language-selector-arrow ${open ? 'open' : ''}`} />
      </button>

      {open && (
        <ul className="language-selector-list">
          {languageOptions.map(({ value, label }) => (
            <li
              key={value}
              className={`language-selector-item${value === locale ? ' selected' : ''}`}
              onClick={() => handleChange(value)}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
