import animationGoogle from 'sources/animation/38870-google-logo-effect.json'
import animationFacebook from 'sources/animation/facebook.json'

export const defaultOptionsGoogle = {
    loop: true,
    autoplay: true,
    animationData: animationGoogle,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
export const defaultOptionsFacebook = {
    loop: true,
    autoplay: true,
    animationData: animationFacebook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };