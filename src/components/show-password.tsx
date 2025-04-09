import { IconButton, Paper, Tooltip, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

type ShowPasswordProps = {
  password: string;
  onCopy: () => void;
  copied: boolean;
};

export default function ShowPassword({ password, onCopy, copied }: ShowPasswordProps) {
  return (
    <Paper
      elevation={3}
      className="mt-6 p-4 flex items-center justify-between rounded-xl bg-white/60 backdrop-blur-md"
    >
      <Typography
        variant="subtitle1"
        className="break-words text-blue-800 font-semibold text-sm sm:text-base max-w-[85%]"
      >
        {password}
      </Typography>

        <IconButton onClick={onCopy} color={copied ? 'success' : 'primary'} size="small">
          <ContentCopyIcon fontSize="small" />
        </IconButton>
    </Paper>
  );
}
