"use client";

import { useState } from "react";
import { Container, Typography } from "@mui/material";
import { usePasswordGenerator } from "@/hook/use-password-generator";
import PasswordOptions from "@/components/password-options";
import LengthSlider from "@/components/lenght-slider";
import Image from "next/image";
import PasswordActions from "@/components/password-actions";

export default function Home() {
  const [length, setLentgh] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const { password, handleGenerator, handleCopy, copied } =
    usePasswordGenerator();

  const handleGeneratorClick = () => {
    handleGenerator({
      length,
      includeUppercase,
      includeNumbers,
      includeSymbols,
    });
  };

  return (
    <div className="min-h-screen flex flex-col  bg-gradient-to-br from-blue-200 via-indigo-200 to-blue-300">
    <Container
      maxWidth="xs"
      sx={{ mt: 4, mb: 4 }}
      className="bg-white/60 backdrop-blur-md rounded-2xl bg-gradient-to-r from-blue-100 to-blue-200  shadow-xl p-6"
      
    >
      <Image
        src="/password.png"
        alt="password"
        width={100}
        height={100}
        className=" mx-auto mb-4"
      />

      <Typography
        variant="h5"
        gutterBottom
        className="text-blue-900 font-semibold text-center mb-4 "
        sx={{ fontFamily: "'Roboto', monospace" }}
      >
        Gerador de Senhas
      </Typography>

      <LengthSlider lenght={length} setLentgh={setLentgh} />

      <PasswordOptions
        includeUppercase={includeUppercase}
        setIncludeUppercase={setIncludeUppercase}
        includeNumbers={includeNumbers}
        setIncludeNumbers={setIncludeNumbers}
        includeSymbols={includeSymbols}
        setIncludeSymbols={setIncludeSymbols}
      />

      <PasswordActions
        password={password}
        copied={copied}
        onGenerate={handleGeneratorClick}
        onCopy={handleCopy}
      />
    </Container>
    </div>
  );
}
