"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Box, Cylinder, Torus } from "@react-three/drei"
import type * as THREE from "three"

export function AIAssistant3D() {
  const groupRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Mesh>(null)
  const bodyRef = useRef<THREE.Mesh>(null)
  const leftArmRef = useRef<THREE.Mesh>(null)
  const rightArmRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15
      groupRef.current.rotation.y += delta * 0.08
    }

    if (headRef.current) {
      // Subtle head movement - more human-like
      headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08
      headRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.03
    }

    if (leftArmRef.current && rightArmRef.current) {
      // Gentle arm movement
      leftArmRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.1 + Math.PI / 8
      rightArmRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4 + Math.PI) * 0.1 - Math.PI / 8
    }
  })

  return (
    <group
      ref={groupRef}
      scale={clicked ? 1.15 : hovered ? 1.08 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Head - More realistic proportions */}
      <Sphere ref={headRef} args={[0.7, 32, 32]} position={[0, 1.4, 0]}>
        <meshStandardMaterial
          color={hovered ? "#60a5fa" : "#3b82f6"}
          transparent
          opacity={0.92}
          roughness={0.15}
          metalness={0.4}
        />
      </Sphere>

      {/* Eyes - More realistic */}
      <Sphere args={[0.12, 16, 16]} position={[-0.22, 1.5, 0.55]}>
        <meshStandardMaterial color="#ffffff" roughness={0.1} />
      </Sphere>
      <Sphere args={[0.12, 16, 16]} position={[0.22, 1.5, 0.55]}>
        <meshStandardMaterial color="#ffffff" roughness={0.1} />
      </Sphere>

      {/* Eye pupils - More expressive */}
      <Sphere args={[0.06, 16, 16]} position={[-0.22, 1.5, 0.62]}>
        <meshStandardMaterial color="#1e40af" />
      </Sphere>
      <Sphere args={[0.06, 16, 16]} position={[0.22, 1.5, 0.62]}>
        <meshStandardMaterial color="#1e40af" />
      </Sphere>

      {/* Eye highlights for realism */}
      <Sphere args={[0.02, 8, 8]} position={[-0.2, 1.52, 0.64]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </Sphere>
      <Sphere args={[0.02, 8, 8]} position={[0.24, 1.52, 0.64]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </Sphere>

      {/* Nose - subtle */}
      <Box args={[0.08, 0.15, 0.08]} position={[0, 1.35, 0.6]}>
        <meshStandardMaterial color="#4f46e5" transparent opacity={0.7} />
      </Box>

      {/* Mouth - friendly expression */}
      <Torus args={[0.15, 0.03, 8, 16]} position={[0, 1.2, 0.58]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="#ef4444" transparent opacity={0.8} />
      </Torus>

      {/* Neck */}
      <Cylinder args={[0.25, 0.3, 0.3, 16]} position={[0, 0.85, 0]}>
        <meshStandardMaterial color="#4f46e5" transparent opacity={0.85} />
      </Cylinder>

      {/* Body - More human proportions */}
      <Cylinder ref={bodyRef} args={[0.5, 0.7, 1.6, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color={hovered ? "#4f46e5" : "#3730a3"}
          transparent
          opacity={0.88}
          roughness={0.25}
          metalness={0.3}
        />
      </Cylinder>

      {/* Shoulders */}
      <Sphere args={[0.2, 16, 16]} position={[-0.7, 0.6, 0]}>
        <meshStandardMaterial color="#6366f1" transparent opacity={0.8} />
      </Sphere>
      <Sphere args={[0.2, 16, 16]} position={[0.7, 0.6, 0]}>
        <meshStandardMaterial color="#6366f1" transparent opacity={0.8} />
      </Sphere>

      {/* Arms - More realistic */}
      <Cylinder ref={leftArmRef} args={[0.12, 0.15, 1.1, 12]} position={[-0.85, 0.1, 0]} rotation={[0, 0, Math.PI / 8]}>
        <meshStandardMaterial color="#6366f1" transparent opacity={0.75} />
      </Cylinder>
      <Cylinder
        ref={rightArmRef}
        args={[0.12, 0.15, 1.1, 12]}
        position={[0.85, 0.1, 0]}
        rotation={[0, 0, -Math.PI / 8]}
      >
        <meshStandardMaterial color="#6366f1" transparent opacity={0.75} />
      </Cylinder>

      {/* Hands - More detailed */}
      <Sphere args={[0.18, 16, 16]} position={[-1.3, -0.35, 0]}>
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.85} />
      </Sphere>
      <Sphere args={[0.18, 16, 16]} position={[1.3, -0.35, 0]}>
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.85} />
      </Sphere>

      {/* Fingers - Simple but effective */}
      {[-1.3, 1.3].map((x, handIndex) => (
        <group key={handIndex}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Cylinder
              key={i}
              args={[0.03, 0.03, 0.15, 8]}
              position={[x + (i - 1.5) * 0.08, -0.45, 0.1]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <meshStandardMaterial color="#a855f7" transparent opacity={0.8} />
            </Cylinder>
          ))}
        </group>
      ))}

      {/* Chest indicator (AI core) - More sophisticated */}
      <Torus args={[0.25, 0.04, 12, 20]} position={[0, 0.3, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.4} transparent opacity={0.9} />
      </Torus>

      {/* Inner core ring */}
      <Torus args={[0.15, 0.02, 8, 16]} position={[0, 0.3, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={0.6} transparent opacity={0.8} />
      </Torus>

      {/* Floating data particles - More organized */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * Math.PI * 2
        const radius = 2.2 + Math.sin(i * 0.5) * 0.3
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = Math.sin(i * 0.3 + angle) * 0.4

        return (
          <Box key={i} args={[0.06, 0.06, 0.06]} position={[x, y, z]} rotation={[i * 0.2, i * 0.3, i * 0.1]}>
            <meshStandardMaterial
              color={i % 4 === 0 ? "#3b82f6" : i % 4 === 1 ? "#10b981" : i % 4 === 2 ? "#8b5cf6" : "#ef4444"}
              transparent
              opacity={0.7}
              emissive={i % 4 === 0 ? "#3b82f6" : i % 4 === 1 ? "#10b981" : i % 4 === 2 ? "#8b5cf6" : "#ef4444"}
              emissiveIntensity={0.3}
            />
          </Box>
        )
      })}

      {/* Neural network connections - More sophisticated */}
      {Array.from({ length: 12 }).map((_, i) => (
        <Cylinder
          key={`connection-${i}`}
          args={[0.015, 0.015, 1.8, 8]}
          position={[Math.cos((i / 12) * Math.PI * 2) * 1.4, 0.2, Math.sin((i / 12) * Math.PI * 2) * 1.4]}
          rotation={[Math.PI / 2, (i / 12) * Math.PI * 2, 0]}
        >
          <meshStandardMaterial color="#60a5fa" transparent opacity={0.4} emissive="#60a5fa" emissiveIntensity={0.2} />
        </Cylinder>
      ))}

      {/* Energy field around the assistant */}
      <Torus args={[3, 0.02, 8, 32]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.2} emissive="#3b82f6" emissiveIntensity={0.1} />
      </Torus>
    </group>
  )
}
