import * as React from 'react'

const NotionAvatar = (props) => (
  <svg
    style={{
      justifyContent: 'center',
      alignSelf: 'center',
      transform: 'scale(-1,1)'
    }}
    viewBox='-350 -150 1500 1500'
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    {...props}
  >
    <circle cx='500' cy='500' r='500' />
    <path
      d='M800,500 Q800,300 700,300 L400,300 Q300,300 300,400 L300,600 Q300,700 400,700 L700,700 Q800,700 800,500z'
      fill='#fff'
    />
    <path
      d='M475,375 Q475,325 500,325 L650,325 Q675,325 675,375 L675,425 Q675,475 650,475 L500,475 Q475,475 475,425z'
      fill='currentColor'
    />
    <path
      d='M650,475 Q625,500 600,475 L550,425 Q525,400 500,425 L450,475 Q425,500 400,475 L350,425 Q325,400 300,425 L250,475 Q225,500 200,475 L150,425 Q125,400 100,425 L50,475 Q25,500 0,475 L0,25 Q25,0 50,25 L100,75 Q125,100 150,75 L200,25 Q225,0 250,25 L300,75 Q325,100 350,75 L400,25 Q425,0 450,25 L500,75 Q525,100 550,75 L600,25 Q625,0 650,25'
      fill='currentColor'
    />
  </svg>
)

export default NotionAvatar
