export function getLocalizedBullets(t, keyPrefix, variant = 'default') {
  const raw = t.raw(keyPrefix);

  if (typeof raw === 'object' && raw !== null) {
    const allKeys = Object.keys(raw);
    const titleKeys = allKeys.filter(key => key.startsWith('title_'));

    const indexes = titleKeys
      .map(k => Number(k.split('_')[1]))
      .filter(i => !isNaN(i))
      .sort((a, b) => a - b);

    return indexes
      .map(i => {
        const title = raw[`title_${i}`];
        const text = raw[`text_${i}`];
        if (!title && !text) return null;

        switch (variant) {
          case 'solution':
          case 'challenge':
            return (
              <span key={i}>
                <strong>{title}</strong>
                <br />
                {text}
              </span>
            );
          case 'impact':
          default:
            return (
              <span key={i}>
                <strong>{title}</strong>{"\u00A0"} - {text}
              </span>
            );
        }
      })
      .filter(Boolean);
  }

  return [];
}
