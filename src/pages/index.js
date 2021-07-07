import { withPrefix, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa"
import '../styles/layout.css'
import BlogLayout from '../components/blog_layout'
import AvatarImg from '../images/avatar_website.jpg'

const MainPage = () => {
  return (
    <BlogLayout>
      <Container className="page-content" fluid>
        <Row>
            <Col xs={4} className='avatar'>
                <img
                    className='avatar_image'
                    src={AvatarImg}
                    alt='user avatar'
                />

                <h2>Hi! I'm Alibek!</h2>
                <h3><a href='https://drive.google.com/file/d/1wIbyfpCxhYz93oQK_xSyWY9fE6d5mVPw/view?usp=sharing'>Resume</a></h3>
                <p><i>Student @ Lehigh • Undergraduate Researcher at <a href='https://m3-learning.com/'>M3 Learning</a> • Martial Artist</i></p>
                <p>Glad you visited my page! My name is Alibek Kaliyev, and I am an <b>international student from Kazakhstan</b> studying <b>Computer Science and Business at Lehigh University</b>.
                   Along with my passion in Machine/Deep Learning technologies and Software Engineering that I am trying to combine, I am deeply interested in topics of
                   Neuroscience, Cognitive Science and Philosophy. I believe that the link between the brain and AI is the thing that will shape the future of humanity.
                </p>
                <p>I also love martial arts, especially <b>karate</b> that I have been doing for 15 years. Martial arts plays important part in my life by
                  teaching me discipline, courage, persistence and humility. Besides that, I love reading books, playing guitar and sharing my thoughts in my <a href='https://t.me/abekek_notes'>Russian blog</a> on Telegram.
                </p>

                <div className="social">
                {'https://github.com/abekek' && <a className="social-link github" href={'https://github.com/abekek'}>
                  <FaGithub className="social-icon" size="32" />
                </a>}
                {'https://www.linkedin.com/in/abekek/' && <a className="social-link linkedin" href={'https://www.linkedin.com/in/abekek/'}>
                  <FaLinkedin className="social-icon" size="32" />
                </a>}
                {`mailto:abekek01@gmail.com` && <a className="social-link email" href={`mailto:abekek01@gmail.com`}>
                  <FaEnvelope className="social-icon" size="32" />
                </a>}
              </div>
            </Col>
        </Row>
      </Container>
      <style jsx>{`
      .page-content {
        max-width: 100%;
        margin-bottom: 40px;
      }
    
      .avatar {
        align-items: center;
        margin-top: 24px;
        flex-direction: column;
      }
    
      .avatar_image {
        box-shadow: 3px 3px 15px 0px rgba(0,0,0,0.75);
        max-width: 200px;
        border-radius: 100px;
        margin: 0 auto 24px;
      }
    
      .social {
        margin-top: 4px;
        margin-bottom: 12px;
      }
    
      .social-link {
        padding: 8px;
        color: #555;
      }
    
      a.social-link.twitter:hover {
        color: #1da1f2;
      }
    
      a.social-link.github:hover {
        color: #24292e;
      }
    
      a.social-link.linkedin:hover {
        color: #0077B5;
      }
      
      a.social-link.email:hover {
        color: #c23a2b;
      }
    `}</style>
    </BlogLayout>
  )
}

export default MainPage