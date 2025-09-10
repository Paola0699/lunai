// src/LanguageSelector.js
import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <label
        htmlFor="language-select"
        style={{ marginRight: "8px", color: "white" }}
      >
        {i18n.t("language_selector_label")}:{"  "}
      </label>

      <select
        id="language-select"
        onChange={changeLanguage}
        value={i18n.language}
        className="round form-control"
        style={{ display: "inline-block", width: "auto" }}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
