import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function useTranslation() {
  const { locale } = useRouter();
  const [messages, setMessages] = useState({});

  useEffect(() => {
    import(`../locales/${locale}/common.json`)
      .then((mod) => setMessages(mod))
      .catch(() => setMessages({}));
  }, [locale]);

  const t = (key) => {
    const parts = key.split('.');
    let result = messages;
    for (const part of parts) {
      result = result?.[part];
      if (!result) return key;
    }
    return result;
  };

  return { t };
}
