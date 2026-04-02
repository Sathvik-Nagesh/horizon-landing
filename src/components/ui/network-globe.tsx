"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

export const NetworkGlobe = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    
    // Create soft gradient background locally or let it be transparent
    // scene.background = null; 

    // Camera Setup
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 300;

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Group to hold globe elements
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Base Wireframe Sphere
    const geometry = new THREE.SphereGeometry(100, 32, 32);
    
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x667eea,
      transparent: true,
      opacity: 0.15,
    });
    
    const wireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(geometry),
      wireframeMaterial
    );
    globeGroup.add(wireframe);

    // 2. Data Points
    const pointsGeometry = new THREE.BufferGeometry();
    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i+=3) {
        // Random points on a sphere
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        
        const x = 100 * Math.sin(phi) * Math.cos(theta);
        const y = 100 * Math.sin(phi) * Math.sin(theta);
        const z = 100 * Math.cos(phi);
        
        posArray[i] = x;
        posArray[i+1] = y;
        posArray[i+2] = z;
    }
    
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create circular texture for particles programmatically
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const context = canvas.getContext('2d');
    if (context) {
        const gradient = context.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, 16, 16);
    }
    const dotTexture = new THREE.CanvasTexture(canvas);

    const pointsMaterial = new THREE.PointsMaterial({
      size: 2,
      map: dotTexture,
      transparent: true,
      opacity: 0.8,
      color: 0x00f2fe,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    
    const particles = new THREE.Points(pointsGeometry, pointsMaterial);
    globeGroup.add(particles);

    // 3. Core Inner Glow
    const coreGeometry = new THREE.SphereGeometry(95, 32, 32);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x050510, // Dark core
      transparent: true,
      opacity: 0.9,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    globeGroup.add(core);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if(!rect) return;
        mouseX = (e.clientX - rect.left - rect.width / 2);
        mouseY = (e.clientY - rect.top - rect.height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Base rotation
      globeGroup.rotation.y = elapsedTime * 0.05;
      globeGroup.rotation.x = elapsedTime * 0.02;

      // Mouse drag rotation damping
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;
      
      globeGroup.rotation.y += 0.05 * (targetX - globeGroup.rotation.y);
      globeGroup.rotation.x += 0.05 * (targetY - globeGroup.rotation.x);
      
      // Pulse particles
      const scale = 1 + Math.sin(elapsedTime * 2) * 0.02;
      particles.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };
    
    animate();

    // Entry Animation
    gsap.fromTo(globeGroup.scale, 
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, duration: 2, ease: "power3.out" }
    );

    // Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-24 bg-black border-t border-white/5" id="network">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-left" data-cursor="text">
                <p className="features__label mb-4 text-left">GLOBAL ARCHITECTURE</p>
                <h2 className="text-4xl md:text-5xl font-syne font-bold text-white mb-6">
                    Spatial networks built for <span className="text-gradient">infinite scale.</span>
                </h2>
                <p className="text-white/50 font-inter text-lg leading-relaxed mb-8">
                    Our decentralized nodes route volumetric data faster than ever before. Capable of handling millions of concurrent XR realities globally with zero-latency edge delivery.
                </p>
                <div className="flex gap-4">
                    <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="text-white font-bold block text-2xl">99.9%</span>
                        <span className="text-xs text-white/40 uppercase tracking-widest">Uptime</span>
                    </div>
                    <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="text-white font-bold block text-2xl">&lt;10ms</span>
                        <span className="text-xs text-white/40 uppercase tracking-widest">Latency</span>
                    </div>
                </div>
            </div>
            
            <div 
                ref={containerRef} 
                className="w-full h-[500px]" 
                data-cursor="drag"
            />
        </div>
    </div>
  );
};
