import React, {FunctionComponent} from 'react'
interface SubtitleProp {
    text: string
}
const Subtitle: FunctionComponent<SubtitleProp> = ({text}) => {
  return (
    <h2 className="scroll-m-20 text-2xl font-medium tracking-tight justify-center flex sm:text-3xl p-2">
        {text}
    </h2>
  )
}

export default Subtitle
