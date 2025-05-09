'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// to update the url with search params + then update the url
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
// to debounce the search input
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  // call use search params + pathname + router
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // add debounced onchange listener to input that will invoke handleSearch whenever input value changes
  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching...${term}`)
    const params = new URLSearchParams(searchParams);
    // set params string based on users input, if input empty -> delete it
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    // for example: pathname = /dashboard/invoices, params.toString() = ?query=lee
    replace(`${pathname}?${params.toString()}`);
  }, 300);

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
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
