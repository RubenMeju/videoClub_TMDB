"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ currentPage, totalPages }) {
  console.log(totalPages);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") === 0 ? 1 : searchParams.get("page");
  const { replace } = useRouter();

  const handleNextPage = () => {
    const params = new URLSearchParams(searchParams);
    console.log(Number(page));
    const nextPage = Number(currentPage) + 1;
    params.set("page", nextPage.toString());

    replace(`?page=${nextPage.toString()}`);
  };

  const handlePrevPage = () => {
    const params = new URLSearchParams(searchParams);
    const prevPage = Number(page) - 1;

    if (prevPage < 1) {
      return;
    } else {
      params.set("page", prevPage.toString());
    }

    replace(`?page=${params.get("page").toString()}`);
  };
  return (
    <div className="m-10 flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Página
        <span className="font-semibold text-gray-900 dark:text-white m-2">
          {currentPage}
        </span>
        de
        <span className="font-semibold text-gray-900 dark:text-white m-2">
          {totalPages}
        </span>
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={handlePrevPage}
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Prev
        </button>
        <button
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={handleNextPage}
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
