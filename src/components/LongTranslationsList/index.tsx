import * as React from "react";
import { a11yDark, CodeBlock } from "react-code-blocks";

interface ILongTranslationsListProps {
  enTransaltions: any;
  ruTransaltions: any;
  name: string;
}

const findLongerRuTranslations = (en: any, ru: any, parentKey: string = "") => {
  const results: { key: string; valueEn: string; valueRu: string }[] = [];

  for (const key in en) {
    const combinedKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof en[key] === "object") {
      results.push(
        ...findLongerRuTranslations(en[key], ru[key] || {}, combinedKey)
      );
    } else {
      const enText = en[key] || "";
      const ruText = ru[key] || "";

      if (enText.length < 10 && ruText.length > enText.length) {
        results.push({
          key: combinedKey,
          valueEn: enText,
          valueRu: ruText,
        });
      }
    }
  }

  return results;
};

const LongTranslationsList: React.FunctionComponent<
  ILongTranslationsListProps
> = ({ enTransaltions, ruTransaltions, name }) => {
  const longTranslations = findLongerRuTranslations(
    { [name]: enTransaltions },
    { [name]: ruTransaltions }
  );
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 dark:from-blue-300 dark:to-green-300">
        {name}: ({longTranslations.length})
      </h2>
      {longTranslations.map((pair, index) => (
        <div key={index} className="border border-gray-100 p-2 max-w-3xl">
          <strong>{pair.key}</strong>
          <div>
            EN:{" "}
            <CodeBlock
              text={pair.valueEn}
              showLineNumbers={false}
              theme={a11yDark}
              language="javascript"
              wrapLongLines
            />
          </div>
          <div>
            RU:{" "}
            <CodeBlock
              text={pair.valueRu}
              showLineNumbers={false}
              theme={a11yDark}
              wrapLongLines
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LongTranslationsList;
