'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// to update the url with search params
import { useSearchParams } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  // call use search params
  const searchParams = useSearchParams();
  // add onchange listener to input that will invoke handleSearch whenever input value changes
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    // set params string based on users input, if input empty -> delete it
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
  }
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
