"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const SearchBar = () => {
const router=useRouter()
const handleSearch =(e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const formData =new FormData(e.currentTarget);
    const name =formData.get("name") as string;
    if(name){
            router.push(`/list?name=${name}`)
    }
}

  return (
    <form className='flex items-center justify-between gap-4
     bg-gray-100 p-2 rounded-md flex-1 ' onSubmit={handleSearch}>
     <input placeholder='Search' type='text' name="name" 
     className='flex-1 outline-none bg-transparent '  />
     <button type='submit' className='cursor-pointer'>
        <Image src="./search.png" alt="search" width={16} height={16}  />
     </button>
    </form>
  )
}

export default SearchBar