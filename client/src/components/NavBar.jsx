import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="sticky top-0 flex w-48 flex-col px-8 gap-6 py-12 min-h-screen bg-[#131218]	">
      <Link to='/'>Home</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/flights'> <div className="flex gap-2"><svg fill="#ffffff"  height="24px" width="24px" viewBox="-6 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>airplane</title> <path d="M6.72 26.2c-0.040 0-0.080 0-0.12 0-0.28-0.040-0.48-0.2-0.64-0.44l-1.96-3.56-3.56-1.96c-0.24-0.12-0.4-0.36-0.44-0.64s0.040-0.52 0.24-0.72l1.8-1.8c0.2-0.2 0.48-0.28 0.76-0.24l2.040 0.36 2.68-2.68-6.48-3.2c-0.24-0.12-0.4-0.36-0.48-0.64s0.040-0.56 0.24-0.76l2-2c0.2-0.2 0.52-0.28 0.8-0.24l8.48 2.2 2.96-2.96c1.040-1.040 3.48-1.8 4.72-0.56 0.56 0.56 0.76 1.48 0.56 2.52-0.16 0.84-0.6 1.64-1.12 2.16l-2.96 2.96 2.2 8.48c0.080 0.28 0 0.6-0.24 0.8l-2 2c-0.2 0.2-0.48 0.28-0.76 0.24s-0.52-0.2-0.64-0.48l-3.2-6.48-2.68 2.68 0.36 2.040c0.040 0.28-0.040 0.56-0.24 0.76l-1.8 1.8c-0.080 0.28-0.28 0.36-0.52 0.36zM2.24 19.28l2.8 1.52c0.16 0.080 0.24 0.2 0.32 0.32l1.52 2.8 0.68-0.68-0.32-2.040c-0.040-0.28 0.040-0.56 0.24-0.76l3.84-3.84c0.2-0.2 0.48-0.28 0.76-0.24s0.52 0.2 0.64 0.48l3.2 6.48 0.8-0.8-2.2-8.48c-0.080-0.28 0-0.6 0.24-0.8l3.28-3.28c0.6-0.6 0.92-1.96 0.56-2.32s-1.72 0-2.32 0.56l-3.28 3.28c-0.2 0.2-0.52 0.28-0.8 0.24l-8.52-2.2-0.8 0.8 6.48 3.2c0.24 0.12 0.4 0.36 0.48 0.64s-0.040 0.56-0.24 0.76l-3.84 3.84c-0.2 0.2-0.48 0.28-0.76 0.24l-2.040-0.36-0.72 0.64z"></path> </g></svg>Loty</div></Link>
      <Link to='/add-flight'>
        <div className="flex gap-2"><svg fill="#ffffff" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve" stroke="#ffffff">

          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

          <g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M227.8,174.1v53.7h-53.7c-9.5,0-17.2,7.7-17.2,17.2s7.7,17.2,17.2,17.2h53.7v53.7c0,9.5,7.7,17.2,17.2,17.2 s17.1-7.7,17.1-17.2v-53.7h53.7c9.5,0,17.2-7.7,17.2-17.2s-7.7-17.2-17.2-17.2h-53.7v-53.7c0-9.5-7.7-17.2-17.1-17.2 S227.8,164.6,227.8,174.1z" /> <path d="M71.7,71.7C25.5,118,0,179.5,0,245s25.5,127,71.8,173.3C118,464.5,179.6,490,245,490s127-25.5,173.3-71.8 C464.5,372,490,310.4,490,245s-25.5-127-71.8-173.3C372,25.5,310.5,0,245,0C179.6,0,118,25.5,71.7,71.7z M455.7,245 c0,56.3-21.9,109.2-61.7,149s-92.7,61.7-149,61.7S135.8,433.8,96,394s-61.7-92.7-61.7-149S56.2,135.8,96,96s92.7-61.7,149-61.7 S354.2,56.2,394,96S455.7,188.7,455.7,245z" /> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g>

        </svg>Dodaj lot</div></Link>
      <Link to='/stats'>
        <div className="flex gap-2"><svg fill="#ffffff" height="24px" width="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512" stroke="#ffffff">

          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

          <g id="SVGRepo_iconCarrier"> <g> <g> <path d="m108.5,400.3l77.2-112.8 81.7,78.8c13.7,11.6 27.3,3.1 30.9-3l135.6-194.3 4.9,65c0.8,10.7 9.8,18.9 20.3,18.9 12,0 21.2-10.7 20.4-22l-8.6-114.3c-0.9-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.6,19.6 21.9,18.8l65-4.9-124.2,178-81.9-78.9c-5-5.7-20-10.8-31,3.2l-73,106.6v57.9c6.1-0.3 12.1-3.3 15.8-8.7z" /> <path d="M480.6,460.2H51.8V31.4c0-11.3-9.1-20.4-20.4-20.4C20.1,11,11,20.1,11,31.4v449.2c0,11.3,9.1,20.4,20.4,20.4h449.2 c11.3,0,20.4-9.1,20.4-20.4C501,469.3,491.9,460.2,480.6,460.2z" /> </g> </g> </g>

        </svg>Statystyki</div></Link>
    </nav>
  );
}
