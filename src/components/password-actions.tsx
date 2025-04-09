"use client";

import { Button, Typography } from "@mui/material";
import ShowPassword from "./show-password";

type PasswordActionsProps = {
  password: string;
  copied: boolean;
  onGenerate: () => void;
  onCopy: () => void;
};

export default function PasswordActions({
  password,
  copied,
  onGenerate,
  onCopy,
}: PasswordActionsProps) {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={onGenerate}
        className="bg-blue-200 text-white p-2  "
        sx={{ mt: 2 }}
      >
        Gerar Senha
      </Button>
      {password && (
        <ShowPassword password={password} onCopy={onCopy} copied={copied} />
      )}
      {copied && (
        <Typography
          variant="body1"
          className="text-center p-2 mt-2 font-medium text-blue-900"
          sx={{ fontFamily: "'Poppins', monospace" }}
        >
          Senha copiada com sucesso !
        </Typography>
      )}
    </>
  );
}
