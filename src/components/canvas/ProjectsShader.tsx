import React, { Suspense } from 'react'
import { useThree, Vector3 } from '@react-three/fiber'
import {
  Html,
  Loader,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  Sparkles,
  Text,
} from '@react-three/drei'

import Shader from './Shader/Shader'

const ProjectsShader: React.FC = () => {
  const posY = -0.5

  const images = [
    {
      title: 'AI Chatbot projects',
      position: [0, -1 + posY, -0.09],
      src: '/img/projects/chatbot/1.png',
      url: 'https://rhea.bytebreeze.com.au/',
    },
    {
      title: '',
      position: [-0.6, -2 + posY, -0.09],
      src: '/img/projects/chatbot/3.png',
      url: 'https://www.cuservly.com/',
    },

    {
      title: '',
      position: [0.6, -2 + posY, -0.09],
      src: '/img/projects/chatbot/2.png',
      url: 'https://app.thinkforce.ai/',
    },

    {
      title: 'Three.js Projects',
      position: [-0.6, -3 + posY, -0.09],
      src: '/img/projects/three/1.png',
      url: 'https://vr.ff.com/us',
    },

    {
      title: '',
      position: [0.6, -3 + posY, -0.09],
      src: '/img/projects/three/3.png',
      url: 'https://carvisualizer.plus360degrees.com/threejs/',
    },
    {
      title: '',
      position: [-0.8, -4 + posY, -0.09],
      src: '/img/projects/three/7.png',
      url: 'https://webshed.royssheds.com.au/',
    },
    {
      title: '',
      position: [0.8, -4 + posY, -0.09],
      src: '/img/projects/three/6.png',
      url: 'https://gardenroomplanner.com/',
    },
    {
      title: 'Ecommerce websites',
      position: [-0.6, -5 + posY, -0.09],
      src: '/img/projects/Screenshot_1.png',
      url: 'https://nclabeauty.com/',
    },
    {
      title: '',
      position: [0.6, -5 + posY, -0.09],
      src: '/img/projects/Screenshot_7.png',
      url: 'https://www.cityblue.com.br/',
    },

    {
      title: '',
      position: [-0.6, -6 + posY, -0.09],
      src: '/img/projects/Screenshot_3.png',
      url: 'https://www.creatifystore.net/',
    },

    {
      title: '',
      position: [0.6, -6 + posY, -0.09],
      src: '/img/projects/Screenshot_2.png',
      url: 'https://homeofdreams.org/',
    },




  ]

  const { width } = useThree((state) => state.viewport)

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 1]}
        fov={55}
        near={0.1}
        far={100}
      />

      <ScrollControls
        pages={7.5}
        distance={1}
        damping={4}
        horizontal={false}
        infinite={false}
      >
        <fog attach='fog' args={[0x050505, 0, 6]} />
        <Scroll>
          <Sparkles
            count={35}
            position={[-0.5, -2, -3.5]}
            scale={[6, 10, 10]}
            size={1}
            speed={2}
          />
          <Suspense
            fallback={
              <Html>
                <Loader />
              </Html>
            }
          >
            <Shader
              image={'/img/projects/texture.webp'}
              planeArgs={[6, 4, 32, 32]}
              planeRotation={[-Math.PI / 2.3, 0, 0]}
              wireframe={true}
              pointer={false}
              position={[0, -0.2, -1]}
            />

            {images.map((image, i) => {
              const { position, src, title, url } = image

              return (
                <group key={url}>
                  <Shader
                    image={src}
                    position={position as Vector3}
                    planeArgs={[0.8, 0.6, 32, 32]}
                    planeRotation={[0, 0, 0]}
                    wireframe={false}
                    pointer={true}
                    url={url}
                  />

                  <Text
                    position={[0, position[1], 0.1] as Vector3}
                    fillOpacity={0.9}
                    font='/FogtwoNo5.otf'
                    fontSize={width / 16}
                    material-toneMapped={false}
                    anchorX='center'
                    anchorY='middle'
                  >
                    {title}
                  </Text>

                  {/* <Text
                    position={[-position[0], position[1], 0.7] as Vector3}
                    strokeWidth={'0.1%'}
                    strokeOpacity={0.5}
                    strokeColor='#ffffff'
                    fillOpacity={0}
                    font='/FogtwoNo5.otf'
                    fontSize={width / 8}
                    material-toneMapped={false}
                    anchorX={`${position[0] === 0.1 ? 'right' : 'left'}`}
                    anchorY='middle'
                  >
                    {i + 1}
                  </Text> */}
                </group>
              )
            })}
            <Text
              position={[0, 0.7, -3]}
              rotation={[-0.3, 0, 0]}
              lineHeight={1.3}
              fillOpacity={1}
              font='/FogtwoNo5.otf'
              fontSize={width / 2}
              material-toneMapped={false}
              anchorX='center'
              anchorY='middle'
            >
              Projects
            </Text>
          </Suspense>
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default ProjectsShader
