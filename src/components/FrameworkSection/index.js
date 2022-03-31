import React from 'react'
import { FrameworkContainer, FrameworkWrapper, FrameworkList, ColumnWrapper, ImgWrap, Img } from './FrameworkElements'
import logo_nodejs from '../../images/logo_nodejs.png'
import logo__axios from '../../images/logo_axios.png'
import logo_puppeteer from '../../images/logo_puppeteer.png'
import logo_sequelize from '../../images/logo_sequelize.png'
import logo_react from '../../images/logo_react.png'
import logo_mysql from '../../images/logo_mysql.png'
import logo_pytorch from '../../images/logo_pytorch.png'
import logo_opencv from '../../images/logo_opencv.png'

const FrameworkSection = ({alt,img}) => {
  return (
      <div>
          <FrameworkContainer>
              <FrameworkWrapper>
                  <FrameworkList>
                      <ColumnWrapper>
                          <ImgWrap>
                              <Img src={logo_nodejs} alt={"logo_nodejs"} />
                          </ImgWrap>
                      </ColumnWrapper>
                      <ColumnWrapper>
                          <ImgWrap>
                              <Img src={logo__axios} alt={"logo__axios"} />
                          </ImgWrap>
                      </ColumnWrapper>
                      <ColumnWrapper>
                          <ImgWrap>
                              <Img src={logo_puppeteer} alt={"logo_puppeteer"} />
                          </ImgWrap>
                      </ColumnWrapper>
                      <ColumnWrapper>
                          <ImgWrap>
                              <Img src={logo_sequelize} alt={"logo_sequelize"} />
                          </ImgWrap>
                      </ColumnWrapper>
                      <ColumnWrapper>
                          <ImgWrap>
                              <Img src={logo_react} alt={"logo_react"} />
                          </ImgWrap>
                      </ColumnWrapper>
                      <ColumnWrapper>
                          <ImgWrap>
                              <Img src={logo_mysql} alt={"logo_mysql"} />
                          </ImgWrap>
                      </ColumnWrapper>
                      <ColumnWrapper>
                          <ImgWrap>
                              <Img src={logo_pytorch} alt={"logo_pytorch"} />
                          </ImgWrap>
                      </ColumnWrapper>
                      <ColumnWrapper>
                          <ImgWrap>
                              <Img src={logo_opencv} alt={"logo_opencv"} />
                          </ImgWrap>
                      </ColumnWrapper>
                  </FrameworkList>
              </FrameworkWrapper>
          </FrameworkContainer>
      </div>
  )
}

export default FrameworkSection