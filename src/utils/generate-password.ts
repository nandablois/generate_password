type GeneratePasswordOptions = {
    length: number;
    includeUppercase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
  };
  
  export function generatePassword({
    length,
    includeUppercase,
    includeNumbers,
    includeSymbols,
  }: GeneratePasswordOptions): string {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}<>?';
  
    let chars = lower;
    if (includeUppercase) chars += upper;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;
  
    if (chars.length === 0) return '';
  
    let generated = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * chars.length);
      generated += chars[index];
    }
  
    return generated;
  }
  