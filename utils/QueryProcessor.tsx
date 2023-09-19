export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.includes("Andrew ID")) {
    return ("I don't know your Andrew ID.");
  } else if (query.includes("name")) {
    return ("riya");
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const largestMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (largestMatch) {
    const x: number = parseInt(largestMatch[1]);
    const y: number = parseInt(largestMatch[2]);
    const z: number = parseInt(largestMatch[3]);
    return Math.max(x, y, z).toString();
  }

  const multiplyMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiplyMatch) {
    const x: number = parseInt(multiplyMatch[1]);
    const y: number = parseInt(multiplyMatch[2]);
    return (x*y).toString();
  }

  return "";
}
