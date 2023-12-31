import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Navbar from 'app/components/Navbar';

export default function Home() {
  return (
    <div>
      <header className="bg-pink-500 py-4">
        <Navbar />
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          {/* Header Content */}
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          {/* Image Content */}
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          {/* Footer Links */}
          <Link
            href="#"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <a>
              <h2 className="mb-3 text-2xl font-semibold">
                Docs{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Find in-depth information about Next.js features and API.
              </p>
            </a>
          </Link>

          <Link
            href="#"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <a>
              <h2 className="mb-3 text-2xl font-semibold">
                Learn{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>
          </Link>

          <Link
            href="#"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <a>
              <h2 className="mb-3 text-2xl font-semibold">
                Templates{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Explore the Next.js 13 playground.
              </p>
            </a>
          </Link>

          <Link
            href="#"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <a>
              <h2 className="mb-3 text-2xl font-semibold">
                Deploy{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Instantly deploy your Next.js site to a shareable URL with Vercel.
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className="bg-pink-500 py-4">
        <div className="container mx-auto text-white text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="next.svg"
              alt="Company Logo"
              width={100}
              height={100}
            />
          </div>
          <p className="text-sm opacity-50">
            &copy; {new Date().getFullYear()} Rota App. All rights reserved.
          </p>
          <div className="mt-2">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link href="#">
                  <a className="text-white opacity-50 hover:opacity-75">
                    Terms of Service
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-white opacity-50 hover:opacity-75">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-white opacity-50 hover:opacity-75">
                    Cookie Policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
