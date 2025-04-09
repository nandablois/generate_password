import { Slider, Typography } from "@mui/material";

type LenghtSliderProps = {
  lenght: number;
  setLentgh: (value: number) => void;
};

export default function LengthSlider({ lenght, setLentgh }: LenghtSliderProps) {
  return (
    <>
      <Typography gutterBottom className="text-sm text-blue-900 mb-4">Tamanho da Senha: {lenght} caracteres</Typography>
      <Slider
        value={lenght}
        onChange={(_, value) => setLentgh(value as number)}
        min={1}
        max={32}        
      />
    </>
  );
}