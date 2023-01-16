export default function Input({type,className,placeholder,id,name,children,rows}) {
    switch (type) {
        case 'input':
            return (
                <input type="text" className="block w-full px-3 py-2 sm:py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pri-400 focus:outline-none" id={id|| undefined} placeholder={children || undefined} />
              )
        case 'textarea':
            return (
                <textarea className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pri-400 focus:outline-none " id={id || undefined} rows={rows || 3} placeholder={children || undefined} />
            )
        default:
            return <></>
    }
}
