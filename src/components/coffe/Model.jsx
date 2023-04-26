'use client'
import React, {useRef, useState} from 'react'
import {Box, useGLTF} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import * as THREE from 'three'

export function Model({isCounting, setIsCounting}) {
  const group = useRef()
  const {nodes, materials} = useGLTF('/models/coffe.gltf')
  const [isHovered, setIsHovered] = useState(false)
  const [targetRotation, setTargetRotation] = useState(0)

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += isCounting ? 0.02 : 0.005
    }

    // LERP vers la cible d'inclinaison en fonction de l'état de survol
    const currentRotation = group.current.rotation.x
    const lerpAmount = isHovered ? 0.1 : 0.05
    const newRotation = THREE.MathUtils.lerp(
      currentRotation,
      targetRotation,
      lerpAmount,
    )
    group.current.rotation.x = newRotation
  })

  return (
    <group
      ref={group}
      onClick={() => setIsCounting(true)}
      onPointerEnter={() => {
        setIsHovered(true)
        setTargetRotation(0.3) // Définir la cible d'inclinaison pour le survol
      }}
      onPointerLeave={() => {
        setIsHovered(false)
        setTargetRotation(0) // Définir la cible d'inclinaison pour l'état normal
      }}
    >
      <mesh
        geometry={nodes.Mesh_cupTea.geometry}
        material={materials._defaultMat}
      />
      <mesh
        geometry={nodes.Mesh_cupTea_1.geometry}
        material={materials.brownDarkest}
      />
    </group>
  )
}

useGLTF.preload('/models/coffe.gltf')
