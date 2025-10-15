/**
 * Animation de particules organiques avec Three.js (WebGL)
 * Particules vertes qui flottent (évoquent feuilles/copeaux de bois)
 * Mouvement organique avec Perlin noise
 * Interaction souris : particules qui s'écartent doucement
 */
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticlesBackgroundProps {
  particleCount?: number;
  color?: string;
}

export default function ParticlesBackground({
  particleCount = 300,
  color = '#7CB342',
}: ParticlesBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Détecter les capacités WebGL
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
      console.warn('WebGL not supported, skipping particles animation');
      return;
    }

    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create particles geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position initiale aléatoire
      positions[i] = (Math.random() - 0.5) * 800; // x
      positions[i + 1] = (Math.random() - 0.5) * 800; // y
      positions[i + 2] = (Math.random() - 0.5) * 400; // z

      // Sauvegarde position initiale
      initialPositions[i] = positions[i];
      initialPositions[i + 1] = positions[i + 1];
      initialPositions[i + 2] = positions[i + 2];

      // Vélocité pour mouvement organique
      velocities[i] = (Math.random() - 0.5) * 0.3;
      velocities[i + 1] = (Math.random() - 0.5) * 0.3;
      velocities[i + 2] = (Math.random() - 0.5) * 0.1;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle material
    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color(color),
      size: 4,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      targetMouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let time = 0;
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      // Smooth mouse interpolation
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.05;

      const positions = geometry.attributes.position.array as Float32Array;

      // Update particle positions with organic movement
      for (let i = 0; i < particleCount * 3; i += 3) {
        // Mouvement organique (simulation Perlin avec sinus)
        const angle = time + i * 0.01;
        positions[i] += Math.sin(angle) * velocities[i]; // x
        positions[i + 1] += Math.cos(angle * 0.8) * velocities[i + 1]; // y
        positions[i + 2] += Math.sin(angle * 0.5) * velocities[i + 2]; // z

        // Interaction avec la souris : particules s'écartent
        const mouseInfluence = 100;
        const dx = positions[i] - mouseRef.current.x * 400;
        const dy = positions[i + 1] - mouseRef.current.y * 400;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseInfluence) {
          const force = (mouseInfluence - distance) / mouseInfluence;
          positions[i] += (dx / distance) * force * 2;
          positions[i + 1] += (dy / distance) * force * 2;
        }

        // Revenir doucement vers position initiale
        positions[i] += (initialPositions[i] - positions[i]) * 0.01;
        positions[i + 1] += (initialPositions[i + 1] - positions[i + 1]) * 0.01;
        positions[i + 2] += (initialPositions[i + 2] - positions[i + 2]) * 0.01;

        // Boundaries : téléporter de l'autre côté
        if (Math.abs(positions[i]) > 400) positions[i] *= -1;
        if (Math.abs(positions[i + 1]) > 400) positions[i + 1] *= -1;
        if (Math.abs(positions[i + 2]) > 200) positions[i + 2] *= -1;
      }

      geometry.attributes.position.needsUpdate = true;

      // Rotation subtile de l'ensemble
      particles.rotation.y = time * 0.05;
      particles.rotation.x = Math.sin(time * 0.1) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometry.dispose();
      particleMaterial.dispose();
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [particleCount, color]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
}
