type TruncateTextProps = {
  text: string;
  limit: number;
};

export const TruncateText = ({ text, limit }: TruncateTextProps) => {
  const words = text.split(' ');
  const truncatedText = words.slice(0, limit).join(' ');

  return truncatedText + (words.length > limit ? '...' : '');
};
