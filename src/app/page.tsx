"use client";
import TranslationsAccardion from "@/components/TranslationsAccardion";
import ApiErrorsEn from "../translations/en/apiErrors.json";
import FormErrorsEn from "../translations/en/formErrors.json";
import ApiErrorsRu from "../translations/ru/apiErrors.json";
import FormErrorsRu from "../translations/ru/formErrors.json";
import AppEn from "../translations/en/app.json";
import AppRu from "../translations/ru/app.json";
import TooltipsEn from "../translations/en/tooltips.json";
import TooltipsRu from "../translations/ru/tooltips.json";
import LongTranslationsList from "@/components/LongTranslationsList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Translation visualition tool
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            for{" "}
            <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 dark:from-blue-300 dark:to-green-300">
              AEVO
            </h1>
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full p-4">
        <TranslationsAccardion
          name="Form errors"
          enTransaltions={FormErrorsEn}
          ruTransaltions={FormErrorsRu}
        />
        <TranslationsAccardion
          name="Api errors"
          enTransaltions={ApiErrorsEn}
          ruTransaltions={ApiErrorsRu}
        />
        <TranslationsAccardion
          name="Tooltips"
          enTransaltions={TooltipsEn}
          ruTransaltions={TooltipsRu}
        />
        <TranslationsAccardion
          name="App"
          enTransaltions={AppEn}
          ruTransaltions={AppRu}
        />
      </div>

      <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 dark:from-blue-300 dark:to-green-300">
        Possible long translations
      </h2>

      <LongTranslationsList
        name="Form errors"
        enTransaltions={FormErrorsEn}
        ruTransaltions={FormErrorsRu}
      />
      <LongTranslationsList
        name="Api errors"
        enTransaltions={ApiErrorsEn}
        ruTransaltions={ApiErrorsRu}
      />
      <LongTranslationsList
        name="Tooltips"
        enTransaltions={TooltipsEn}
        ruTransaltions={TooltipsRu}
      />
      <LongTranslationsList
        name="App"
        enTransaltions={AppEn}
        ruTransaltions={AppRu}
      />
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
