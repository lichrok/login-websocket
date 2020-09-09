export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}
