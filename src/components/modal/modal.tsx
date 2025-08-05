import React, { useRef, useState } from 'react';

import Card from '../card/card';

import './modal.css';

const Modal = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
    document.body.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    document.body.style.cursor = 'default';
  };

  const handleMouseUp = () => {
    setIsDown(false);
    document.body.style.cursor = 'default';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = x - startX;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };
  return (
    <div className="modal-container">
      <nav className="modal-nav">
        <ul className="nav-list">
          <li className="nav-links">Hoy</li>
          <li className="nav-links">Mañana</li>
          <li className="nav-links">Semana</li>
          <li className="nav-links">Siguiente Semana</li>
        </ul>
      </nav>
      <div
        className="card-list"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Modal;
