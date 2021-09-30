import React from 'react'
import Lottie from 'react-lottie';
import animationNoData from 'sources/animation/nodata.json'

const NoData: React.FC = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationNoData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <>
        <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
        />
    </>
  )
}

export default NoData