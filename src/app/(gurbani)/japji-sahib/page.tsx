import Link from "next/link";
import { japjiData } from "@/data/japjiData";

export default function JapjiPage() {
  return (
    <div className="p-2 sm:p-6">
      <h1 className="text-2xl font-bold dark:text-slate-200 text-slate-800 mb-4">
        Japji Sahib
      </h1>
      <p className="dark:text-slate-200 text-slate-800 mb-8">
        Welcome to the Japji Sahib reading page. Select a stanza below:
      </p>

      {/* Example links to stanzas 1, 2, 3, etc. */}
      <ul className="list-none grid grid-cols-1 gap-y-3 dark:text-slate-200">
        {japjiData.map((stanza, index) => (
          <li key={index} className="">
            <Link
              href={`/japji-sahib/${index}`}
              // className="text-blue-600 dark:text-blue-400 underline"
            >
              {/* {stanza.title} - {stanza.lines[0].romanTransliteration} */}
              <div className="rounded-lg dark:bg-slate-800 bg-slate-200  px-4 py-2 hover:bg-slate-300 dark:hover:bg-slate-600">
                <p className="text-base pb-2 dark:text-slate-300 text-slate-700">
                  {stanza.title}
                </p>
                <div className="text-sm dark:text-slate-400 text-slate-600">
                  <p>{stanza.lines[0].devanagariTransliteration}</p>
                  <p>{stanza.lines[0].romanTransliteration}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
