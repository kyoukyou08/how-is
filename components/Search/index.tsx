'use Client';

export default function Search (){
    return(
        <div className="w-full">
            <form action='' className='flex justify-center rounded-full'>
                <input
                type='text'
                className='w-4/5 rounded-full p-2'
                placeholder='search'
                />
            </form>
        </div>
    )
}