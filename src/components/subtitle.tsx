import React, {FunctionComponent} from 'react'
interface SubtitleProp {
    text: string
}
const Subtitle: FunctionComponent<SubtitleProp> = ({text}) => {
  return (
      <h2 className="flex items-center justify-center mb-6 text-[32px] font-bold text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[50px]">
          {text}
      </h2>
  )
}

export default Subtitle
