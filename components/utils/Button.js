export default function Button({children,className}) {
  return (
    <button className={"bg-pri-500 hover:bg-pri-400 text-white font-bold border-b-4 border-pri-700 hover:border-pri-500 rounded-md py-2 px-3 text-sm md:text-base md:rounded-lg md:py-3 md:px-4 transition-colors duration-200 "+className}>
      {children}
</button>
  )
}
