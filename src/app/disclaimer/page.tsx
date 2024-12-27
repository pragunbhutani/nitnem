export default function DisclaimerPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 flex-1 flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Disclaimer</h1>
      <div className="font-serif">
        <p className="text-gray-700 dark:text-gray-200 mb-4">
          This website was created in the spirit of <em> seva</em> (selfless
          service) to help make the teachings of Sikhi more accessible to
          everyone. However, please note that it may contain mistakes, and it
          should not be regarded as an authoritative source for understanding
          the Guru Granth Sahib.
        </p>
        <p className="text-gray-700 dark:text-gray-200 mb-4">
          We encourage you to consult your trusted spiritual leaders or verified
          resources for accurate guidance and interpretation. Any errors in the
          content are unintentional, and we humbly apologize for them.
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          If you have any suggestions or notice any mistakes,{" "}
          <a
            href="https://github.com/pragunbhutani/nitnem/issues/new"
            className="underline"
            target="_blank"
          >
            please share them
          </a>{" "}
          so that this resource — and our own understanding — may continue to
          improve.
        </p>
      </div>
    </div>
  );
}
