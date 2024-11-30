'use Client';

export default function Search (){
    return(
        <div className="w-full">
            <form action='' className='flex justify-center rounded-full'>
                <input
                type='text'
                className='w-full rounded-full p-2'
                placeholder='search'
                />
            </form>
        </div>
    )
}