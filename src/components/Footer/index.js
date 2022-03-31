import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterIcon } from './FooterElements'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'


const Footer = () => {
  return (
      <FooterContainer>
          <FooterWrap>
              <FooterLinksContainer>
                  <FooterLinksWrapper>
                      <FooterLinkTitle>
                            About Me
                      </FooterLinkTitle>
                      <FooterLinkItems>
                          <FooterIcon href={"https://www.instagram.com/" + process.env.REACT_APP_IG_USERNAME} target="_blank">
                              <FaInstagram size={40}/>
                          </FooterIcon>
                          <FooterIcon href={"https://wa.me/" + process.env.REACT_APP_PHONE_NUMBER} target="_blank">
                              <FaWhatsapp size={40}/>
                          </FooterIcon>
                          <FooterIcon href={"mailto:" + process.env.REACT_APP_EMAIL} target="_blank">
                              <AiOutlineMail size={40}/>
                          </FooterIcon>
                          <FooterIcon href={"https://www.linkedin.com/in/" + process.env.REACT_APP_LINKEDIN} target="_blank">
                              <AiFillLinkedin size={40}/>
                          </FooterIcon>
                      </FooterLinkItems>
                  </FooterLinksWrapper>
              </FooterLinksContainer>
          </FooterWrap>
      </FooterContainer>
  )
}

export default Footer