import { useState } from 'react';
import { Button } from '../ui/button';

export const WelcomeScreen = ({ onStart, loading }: { onStart: (textResume: string) => void; loading: boolean }) => {
  const [textResume, setTextResume] = useState('');

  const handleStart = () => {
    if (textResume.trim()) {
      onStart(textResume);
    } 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 p-10">
      <h1 className="text-4xl">
        Welcome to Tavus Conversational Video Interface
      </h1>
      <textarea
        className="w-3/4 p-4 border rounded-md"
        placeholder="Paste the resume text here..."
        rows={6}
        value={textResume}
        onChange={(e) => setTextResume(e.target.value)}
      />
      <Button onClick={handleStart} disabled={loading || !textResume.trim()}>{loading ? 'Loading...' : 'Start Conversation'}</Button>
    </div>
  );
};
