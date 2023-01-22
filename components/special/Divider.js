import React from 'react'

export default function Divider({marginTop,marginBottom}) {
  return (
    <div className="mx-auto flex justify-center" style={{marginTop:marginTop??"3rem",marginBottom:marginBottom??"3rem"}}>
        <hr className="w-11/12 h-1 bg-black/5" />
    </div>
  )
}

