"use client";
import { useState, useEffect } from "react";

const Location = () => {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const nameLocal = localStorage.getItem("Name");
    if (nameLocal) {
      setName(nameLocal);
    }
  }, []);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const saveName = () => {
    localStorage.setItem("Name", name);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <div>
          <p>{`Seu nome: ${name || '-'}`}</p>
          <input
            type="text"
            value={name}
            onChange={handleName}
            placeholder="Digite seu nome"
          />
          <button onClick={saveName}>salvar</button>
        </div>
      </div>
    </>
  );
};

export default Location;
