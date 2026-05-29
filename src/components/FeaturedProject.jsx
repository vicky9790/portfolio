import React, { useState } from 'react';
import {
  Cpu, Database, Layout, Droplet, Wind,
  Trash2, Truck, ExternalLink, ChevronRight,
  Lightbulb, Flame, Video, Zap, Activity,
  AlertTriangle, CloudRain
} from 'lucide-react';
import './FeaturedProject.css';

const Github = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const modulesData = [
  {
    id: 'water',
    emoji: '💧',
    name: 'Aqua Shield',
    title: '💧 Aqua Shield — Water Quality & Flow Monitoring',
    icon: <Droplet size={16} />,
    description: 'Deploys ultrasonic and flow-rate sensors to track tank volume, detect leaks, and monitor water quality in real time. Triggers instant backend alerts when anomalies exceed defined thresholds.',
    tech: 'ESP32 • Ultrasonic Sensors • Flow Meters • Node.js • Socket.io'
  },
  {
    id: 'air',
    emoji: '🌫',
    name: 'Airium',
    title: '🌫 Airium — Air Quality Monitoring',
    icon: <Wind size={16} />,
    description: 'Continuously monitors CO levels, particulate matter, and ambient humidity using MQ-135 and DHT11 sensors. Converts raw data into a live AQI dashboard visible to the entire community.',
    tech: 'MQ-135 • DHT11 • Node.js API • React AQI Display'
  },
  {
    id: 'cctv',
    emoji: '📹',
    name: 'Village Surveillance',
    title: '📹 Village Surveillance — Smart CCTV Monitoring',
    icon: <Video size={16} />,
    description: 'Low-latency ESP32-CAM feeds stream live footage to the command dashboard. Motion detection events generate snapshot payloads sent to alert endpoints in under 200ms.',
    tech: 'ESP32-CAM • WebSockets • React Dashboard • Motion Detection'
  },
  {
    id: 'transport',
    emoji: '🚌',
    name: 'Bus Track',
    title: '🚌 Bus Track — Live Transport Tracking',
    icon: <Truck size={16} />,
    description: 'Provides real-time bus arrival estimations and schedule data to rural residents. Eliminates uncertainty around public transport and improves daily commute planning.',
    tech: 'React App • MongoDB Atlas • GPS Integration • Leaflet Maps'
  },
  {
    id: 'emergency',
    emoji: '🚑',
    name: 'Emergency Aid',
    title: '🚑 Emergency Aid — Ambulance Assistance',
    icon: <AlertTriangle size={16} />,
    description: 'One-tap emergency request system that dispatches the nearest ambulance using GPS coordinates and sends real-time status updates to both dispatcher and the requesting user.',
    tech: 'React SOS UI • Node.js Dispatch API • MongoDB • GPS'
  },
  {
    id: 'power',
    emoji: '⚡',
    name: 'Power Guardian',
    title: '⚡ Power Guardian — Electricity Monitoring',
    icon: <Zap size={16} />,
    description: 'ACS712 current sensors monitor voltage, phase loads, and grid disruption patterns. Sends automated fault alerts to village administrators preventing extended outages.',
    tech: 'ACS712 Sensor • ESP32 • Express REST Endpoints • Alert Broker'
  },
  {
    id: 'fire',
    emoji: '🔥',
    name: 'Fire Hawk',
    title: '🔥 Fire Hawk — Smoke & Fire Detection',
    icon: <Flame size={16} />,
    description: 'Thermal and smoke sensor arrays placed at high-risk locations. Streams geo-tagged emergency coordinates to response teams the moment hazard thresholds are crossed.',
    tech: 'Flame Sensors • MQ-2 Smoke Sensor • Node.js Alerts API'
  },
  {
    id: 'waste',
    emoji: '🗑',
    name: 'Bin Saver',
    title: '🗑 Bin Saver — Smart Waste Management',
    icon: <Trash2 size={16} />,
    description: 'Ultrasonic fill-level sensors on public bins broadcast dynamic routing instructions to sanitation teams when capacity exceeds 85%, eliminating unnecessary collection runs.',
    tech: 'ESP8266 • Ultrasonic Sensors • REST API • Cron Scheduling'
  },
  {
    id: 'light',
    emoji: '💡',
    name: 'Lumina Guard',
    title: '💡 Lumina Guard — Smart Street Lighting',
    icon: <Lightbulb size={16} />,
    description: 'LDR-triggered streetlights that auto-adjust brightness based on ambient light levels and motion proximity. Significantly reduces unnecessary power consumption across village limits.',
    tech: 'LDR Sensors • Triac Dimmers • ESP32 • Node.js Server'
  },
  {
    id: 'rain',
    emoji: '🌧',
    name: 'Sky Guard',
    title: '🌧 Sky Guard — Rainfall Monitoring',
    icon: <CloudRain size={16} />,
    description: 'Tipping bucket rain gauges track cumulative and live rainfall intensity. Feeds data to flood risk prediction models and issues early warning notifications to residents.',
    tech: 'Rain Gauge Sensor • ESP32 • Node.js • MongoDB Time-Series'
  }
];

const archNodes = [
  { label: 'IoT Sensor Nodes', desc: 'ESP32 / ESP8266 + Environmental Sensors', colorClass: 'node-hardware', icon: <Cpu size={22} /> },
  { label: 'REST API Communication', desc: 'HTTP / JSON', colorClass: 'node-comm', icon: <Activity size={22} />, isArrow: true, protocol: 'HTTP / JSON' },
  { label: 'Backend Processing Layer', desc: 'Node.js + Express + MongoDB', colorClass: 'node-backend', icon: <Database size={22} /> },
  { label: 'Real-Time Communication', desc: 'Socket.io / WebSockets', colorClass: 'node-comm', icon: <Activity size={22} />, isArrow: true, protocol: 'Socket.io / WebSockets' },
  { label: 'Monitoring Dashboard', desc: 'React.js Command Center', colorClass: 'node-frontend', icon: <Layout size={22} /> },
];

const FeaturedProject = () => {
  const [activeModule, setActiveModule] = useState('water');

  return (
    <section id="featured-project" className="featured-section">
      <div className="section-header reveal">
        <span className="featured-badge">Academic Capstone</span>
        <h2 className="section-title">Featured Final Year Project</h2>
        <div className="section-divider"></div>
      </div>

      <div className="featured-container glass-panel reveal">
        <div className="featured-content-grid">

          {/* ── Left Panel: Details ── */}
          <div className="featured-details">
            <h3 className="project-title-xl">Smart Village 1.1</h3>
            <p className="project-tagline">IoT-Powered Smart Rural Infrastructure Platform</p>

            <div className="spec-meta-grid">
              <div className="spec-item">
                <span className="spec-label">Role</span>
                <span className="spec-value">Full-Stack &amp; IoT Developer</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Tech Stack</span>
                <span className="spec-value">React.js • Node.js • Express.js • MongoDB • Socket.io • ESP32 / ESP8266 • REST APIs • IoT Sensors</span>
              </div>
            </div>

            {/* Problem Statement */}
            <div className="project-block">
              <h4 className="block-title">Problem Statement</h4>
              <p className="block-text">
                Rural communities often depend on manual systems to manage water, electricity, waste collection,
                transport and public safety. These disconnected systems lead to resource wastage, delayed response
                times and limited infrastructure visibility.
              </p>
              <p className="block-text" style={{ marginTop: '0.7rem' }}>
                Smart Village 1.1 addresses this challenge by integrating IoT sensors, real-time analytics and
                centralized monitoring into a single digital ecosystem.
              </p>
            </div>

            {/* 10 Smart Modules */}
            <div className="project-block">
              <h4 className="block-title">Core Smart Modules</h4>
              <div className="module-tabs">
                {modulesData.map((mod) => (
                  <button
                    key={mod.id}
                    className={`module-tab-btn ${activeModule === mod.id ? 'active' : ''}`}
                    onClick={() => setActiveModule(mod.id)}
                    title={mod.title}
                  >
                    <span className="module-emoji">{mod.emoji}</span>
                    <span>{mod.name}</span>
                  </button>
                ))}
              </div>

              <div className="module-card-display">
                <h5 className="module-display-title">
                  {modulesData.find(m => m.id === activeModule).title}
                </h5>
                <p className="module-display-text">
                  {modulesData.find(m => m.id === activeModule).description}
                </p>
                <div className="module-display-tech">
                  <strong>Module Stack:</strong> {modulesData.find(m => m.id === activeModule).tech}
                </div>
              </div>
            </div>

            {/* My Contributions */}
            <div className="project-block">
              <h4 className="block-title">My Contributions</h4>
              <ul className="contributions-list">
                <li>Designed and developed real-time monitoring dashboard interfaces.</li>
                <li>Developed backend REST APIs and WebSocket communication layers using Node.js and Express.</li>
                <li>Structured MongoDB schemas for high-frequency sensor telemetry logs.</li>
                <li>Integrated ESP32 / ESP8266 communication workflows and IoT device connectivity.</li>
                <li>Implemented live threshold-based alert systems for environmental and infrastructure monitoring.</li>
                <li>Coordinated modular architecture planning and subsystem integration.</li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="featured-actions">
              <a href="https://github.com/vicky9790/smart_attendance" className="btn btn-primary"
                target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                <span>Source Code</span>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <ExternalLink size={18} />
                <span>Request PPT / Demo</span>
              </a>
            </div>
          </div>

          {/* ── Right Panel: Architecture + Telemetry ── */}
          <div className="featured-visual-panel">
            <div className="arch-visualizer">
              <h4 className="visualizer-title">Live System Architecture</h4>

              <div className="nodes-flow">
                {archNodes.map((node, i) =>
                  node.isArrow ? (
                    <div key={i} className="flow-arrow">
                      <ChevronRight size={18} className="arrow-pulse" />
                      <span className="flow-protocol">{node.protocol}</span>
                    </div>
                  ) : (
                    <div key={i} className={`flow-node ${node.colorClass}`}>
                      <div className="node-icon">{node.icon}</div>
                      <span className="node-label">{node.label}</span>
                      <span className="node-desc">{node.desc}</span>
                      <div className="pulse-dot"></div>
                    </div>
                  )
                )}
              </div>

              {/* Telemetry Feed */}
              <div className="telemetry-box">
                <div className="telemetry-header">
                  <div className="status-indicator-dot online"></div>
                  <span>LIVE SYSTEM TELEMETRY (SIMULATED)</span>
                </div>
                <div className="telemetry-grid">
                  <div className="telemetry-card">
                    <div className="tel-header">
                      <span className="tel-label">💧 Aqua Shield</span>
                      <span className="tel-badge badge-healthy">Healthy</span>
                    </div>
                    <span className="tel-value color-cyan">Tank: 92.4% Full</span>
                  </div>
                  <div className="telemetry-card">
                    <div className="tel-header">
                      <span className="tel-label">🌫 Airium AQI</span>
                      <span className="tel-badge badge-normal">Normal</span>
                    </div>
                    <span className="tel-value color-green">45 — Excellent</span>
                  </div>
                  <div className="telemetry-card">
                    <div className="tel-header">
                      <span className="tel-label">⚡ Power Guardian</span>
                      <span className="tel-badge badge-healthy">Stable</span>
                    </div>
                    <span className="tel-value color-cyan">230V — Online</span>
                  </div>
                  <div className="telemetry-card">
                    <div className="tel-header">
                      <span className="tel-label">🗑 Bin Saver #4</span>
                      <span className="tel-badge badge-normal">Normal</span>
                    </div>
                    <span className="tel-value color-orchid">38% Fill</span>
                  </div>
                  <div className="telemetry-card">
                    <div className="tel-header">
                      <span className="tel-label">🚌 Bus Track</span>
                      <span className="tel-badge badge-active">Active</span>
                    </div>
                    <span className="tel-value">Arriving in 4 min</span>
                  </div>
                  <div className="telemetry-card">
                    <div className="tel-header">
                      <span className="tel-label">🌧 Sky Guard</span>
                      <span className="tel-badge badge-warning">Warning</span>
                    </div>
                    <span className="tel-value color-green">2.3mm — Light Rain</span>
                  </div>
                </div>
              </div>

              {/* Project Impact */}
              <div className="impact-box">
                <h5 className="impact-title">Project Impact</h5>
                <p className="impact-text">
                  Smart Village 1.1 demonstrates how IoT and full-stack technologies can modernize rural
                  infrastructure through automation, real-time monitoring and smarter public resource management.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
