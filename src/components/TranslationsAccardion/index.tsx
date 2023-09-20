"use client";
import * as React from "react";

interface ITranslationsAccardionProps {
  enTransaltions: any;
  ruTransaltions: any;
  name: string;
}

const cache: Record<string, { total: number; translated: number }> = {};

const countTranslations = (en: any, ru: any, parentKey: string = "") => {
  let totalCount = 0;
  let translatedCount = 0;

  for (const key in en) {
    const combinedKey = parentKey + "." + key;
    if (cache[combinedKey]) {
      totalCount += cache[combinedKey].total;
      translatedCount += cache[combinedKey].translated;
    } else {
      if (typeof en[key] === "object") {
        const { total, translated } = countTranslations(
          en[key],
          ru[key] || {},
          combinedKey
        );
        totalCount += total;
        translatedCount += translated;
      } else {
        totalCount++;
        if (ru[key]) translatedCount++;
      }
      cache[combinedKey] = { total: totalCount, translated: translatedCount };
    }
  }

  return { total: totalCount, translated: translatedCount };
};

const renderTranslation = (en: any, ru: any) => {
  return Object.keys(en).map((key, index) => {
    const valueEn = en[key];
    const valueRu = ru[key];

    if (typeof valueEn === "object") {
      const { total, translated } = countTranslations(valueEn, valueRu || {});
      const completionPercentage = ((translated / total) * 100).toFixed(2);

      return (
        <li
          key={index}
          className="w-full text-xs sm:text-sm flex items-center gap-x-3 flex-wrap select-none border border-gray-200"
        >
          <input
            type="checkbox"
            id={`${key}${index}`}
            className="peer appearance-none"
          />
          <label
            htmlFor={`${key}${index}`}
            className="p-4 cursor-pointer grow bg-gray-900 flex items-center w-full"
          >
            <p>{key}</p>
            <div className="ml-auto">{completionPercentage}%</div>
            <div className="w-40 ml-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <div className="ml-2">
              ({translated}/{total})
            </div>
          </label>
          <div className="peer-checked:max-h-max max-h-0 basis-full peer-checked:border-y-[1px] peer-checked:p-3 border-blue-300 overflow-hidden transition-all select-text">
            {renderTranslation(valueEn, valueRu || {})}
          </div>
        </li>
      );
    } else {
      // Render direct translation values
      return (
        <div key={index} className="border border-gray-100 p-2">
          <strong>{key}:</strong>
          <div>EN: {valueEn}</div>
          <div>RU: {valueRu || "---"}</div>
        </div>
      );
    }
  });
};

const TranslationsAccardion: React.FunctionComponent<
  ITranslationsAccardionProps
> = ({ enTransaltions, ruTransaltions, name }) => (
  <ul className="text-white shadow-2xl w-full">
    {renderTranslation({ [name]: enTransaltions }, { [name]: ruTransaltions })}
  </ul>
);

export default TranslationsAccardion;
