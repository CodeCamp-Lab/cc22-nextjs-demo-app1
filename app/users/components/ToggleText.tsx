"use client";

import { useState } from "react";

export default function ToggleText() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        className="border p-2 mt-3 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        Toggle
      </button>
      {show && <p>Hello Next.js</p>}
    </div>
  );
}
