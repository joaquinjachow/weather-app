import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className="flex p-1 px-3 space-x-4 bg-white rounded-lg" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <div className="flex items-center space-x-2">
        <label>🔎</label>
        <input
          className="px-4 py-1 font-normal no-underline bg-gray-100 rounded-lg outline-none"
          type="text"
          id="city"
          placeholder="Ciudad"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </div>
      <input className="px-4 py-2 text-black bg-white rounded-lg" type="submit" value="Agregar" />
    </form>
  );
}
