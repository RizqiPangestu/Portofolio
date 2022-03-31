import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
  return (
      <HeroContainer>
          <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='videp/mp4' />
              <div>test</div>
          </HeroBg>
          <HeroContent>
              <HeroH1>Hello, I'm Estu</HeroH1>
              <HeroP>
                  I'm a Computer Science graduate from
                  Universitas Gadjah Mada who passionate
                  about backend development and
                  computer vision
              </HeroP>
          </HeroContent>
      </HeroContainer>
  )
}

export default HeroSection