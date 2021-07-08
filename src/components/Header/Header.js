import Link from 'next/link';
import React from 'react';
import { SiFacebook, SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { GrArchlinux } from 'react-icons/gr';
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white',marginBottom:'20px' }}>
          <GrArchlinux size='3rem' />
          <Span>hmed</Span>
          <p
            style={{
              fontFamily: 'Finger Paint',
              paddingTop: '2rem',
              paddingLeft: '3px',
              fontSize: '10px',
            }}
          >
            .me
          </p>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/ahmedsgit'>
        <SiGithub size='2rem'></SiGithub>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/ahmedsazzad/'>
        <SiLinkedin size='2rem'></SiLinkedin>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/ahmedsazzad/'>
        <SiFacebook size='2rem'></SiFacebook>
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/mr.ahmedsazzad/'>
        <SiInstagram size='2rem'></SiInstagram>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
