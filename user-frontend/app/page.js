import Navbar from "./components/Navbar/Navbar";
import React from "react";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <div className="mt-20 grid text-center mx-auto lg:max-w-9xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-center">
          <a
            href="/pages/nsp"
            className="group rounded-lg border mr-5 mb-10 border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-100 hover:dark:border-white-700 hover:dark:bg-blue-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-4xl font-semibold`}>
              Narayan Shakti Peeth{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`m-0 max-w-[30ch] text-lg opacity-50 color-black mx-auto`}
            >
              यहाँ पूजा सामग्री की बिक्री दर्ज करें|
            </p>
          </a>
          <a
            href="/pages/bslndDonation"
            className="group rounded-lg border mr-5 mb-10 border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-100 hover:dark:border-white-700 hover:dark:bg-blue-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-4xl font-semibold`}>
              BSLND Donation{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`m-0 max-w-[30ch] text-lg opacity-50 color-black mx-auto`}
            >
              यहाँ दान राशि दर्ज करें|
            </p>
          </a>

          <a
            href="/pages/mndivine"
            className="group rounded-lg border mr-5 mb-10 border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-100 hover:dark:border-white-700 hover:dark:bg-blue-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-4xl font-semibold`}>
              MNDivine{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-lg opacity-50 mx-auto`}>
              यहां औषधियों की बिक्री की जानकारी दे|
            </p>
          </a>

          <a
            href="/pages/bslndNamaskar"
            className="group rounded-lg border mr-5 mb-10 border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-100 hover:dark:border-white-700 hover:dark:bg-blue-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-4xl font-semibold`}>
              BSLND Namaskar{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-lg opacity-50 mx-auto`}>
              यहाँ नमस्कार राशि दर्ज करें|
            </p>
          </a>

          <a
            href="/pages/visheshkripa"
            className="group rounded-lg border mr-5 mb-10 border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-100 hover:dark:border-white-700 hover:dark:bg-blue-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-4xl font-semibold`}>
              Vishesh Kripa{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-lg opacity-50 mx-auto`}>
              यहां विशेष कृपा की जानकारी दें।
            </p>
          </a>
          <a
            href="/pages/goshala"
            className="group rounded-lg border mr-5 mb-10 border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-100 hover:dark:border-white-700 hover:dark:bg-blue-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-4xl font-semibold`}>
              Goshala Sewa{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-lg opacity-50 mx-auto`}>
              {'"गौसेवा परमो धर्म"'}
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
