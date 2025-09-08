export function getCookie(name: string): string | undefined {
  const cookies = document.cookie.split('; ');
  const match = cookies.find((cookie) => cookie.startsWith(`${name}=`));
  return match?.split('=')[1];
}
