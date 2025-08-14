import { useCallback } from 'react';
import { toast } from '../hooks/use-toast';

export function useDownloadThankYou() {
  return useCallback(() => {
    toast({
      title: 'Thank you for downloading my resume!',
      description: 'Wishing you a productive day! 🚀',
      duration: 4000,
      style: {
        background: 'linear-gradient(120deg, #181C23 80%, #23263A 100%)',
        color: '#F3F6FA',
        fontWeight: 'bold',
        fontFamily: 'monospace',
        fontSize: '1.1rem',
        border: '1.5px solid #58A6FF',
        boxShadow: '0 4px 32px 0 #58A6FF22',
        borderRadius: '12px',
        padding: '1.1rem 1.5rem',
      }
    });
  }, []);
}
