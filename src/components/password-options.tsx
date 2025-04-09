import { FormControlLabel, Checkbox, Typography, FormGroup } from "@mui/material";

type PasswordOptionsProps = {
  includeUppercase: boolean;
  setIncludeUppercase: (value: boolean) => void;
  includeNumbers: boolean;
  setIncludeNumbers: (value: boolean) => void;
  includeSymbols: boolean;
  setIncludeSymbols: (value: boolean) => void;
};

export default function PasswordOptions({
  includeUppercase,
  setIncludeUppercase,
  includeNumbers,
  setIncludeNumbers,
  includeSymbols,
  setIncludeSymbols,
}: PasswordOptionsProps) {
  return (
    <>
      <FormGroup row sx={{justifyContent: "center"}}>
        <FormControlLabel
          control={
            <Checkbox
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              size="small"
            />
          }
          label="Letras maiúsculas"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              size="small"
            />
          }
          label="Números"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              size="small"
            />
          }
          label="Símbolos"
        />
      </FormGroup>
      </>
  );
}