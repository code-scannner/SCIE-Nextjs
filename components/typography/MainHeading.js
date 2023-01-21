export default function MainHeading({className,children}) {
  return (
    <div className={`font-bold tracking-widest ${className || ""}`}>
        {children}
    </div>
  )
}
