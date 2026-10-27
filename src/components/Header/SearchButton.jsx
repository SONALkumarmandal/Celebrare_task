import React from 'react'

function SearchButton() {
  return (
    <button type="button" className='bg-white h-9 rounded-md w-16 hover: cursor-pointer hover:bg-zinc-200'>
        <b className='text-sm'><i>search</i></b>
    </button>
  )
}

export default SearchButton