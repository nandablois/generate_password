import { useState } from "react";
import { generatePassword } from "@/utils/generate-password";

export function usePasswordGenerator(){
    const [password , setPassword] = useState('');
    const [copied , setCopied] = useState(false);

    const handleGenerator = (options:{
        length: number;
        includeUppercase: boolean;
        includeNumbers: boolean;
        includeSymbols: boolean;
    }) => {const newPassword = generatePassword(options); 
    setPassword(newPassword);
    setCopied(false);
};
    const handleCopy = () => {
        navigator.clipboard.writeText(password).then(() => {
            setCopied(true);
        });
    };

    return { password, handleGenerator, handleCopy, copied };
}
