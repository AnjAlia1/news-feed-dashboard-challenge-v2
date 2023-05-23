import { FaSearch } from 'react-icons/fa'
export const Search = ()=>{
    return(
    <div className='search-input'>
        <FaSearch className="Search-Bar"></FaSearch>
      <input className="input-for-search" type="search"/>
    </div>
    )

}
