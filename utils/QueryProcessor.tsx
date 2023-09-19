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

  const minusMatch = query.match(/What is (\d+) minus (\d+)/);
  if (minusMatch) {
    const x: number = parseInt(minusMatch[1]);
    const y: number = parseInt(minusMatch[2]);
    return (x-y).toString();
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

  const squareCubeMatch = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if (squareCubeMatch) {
    let array: number[] = [];
    for (let i = 1; i < 8; i++) {
      const a: number = parseInt(squareCubeMatch[i]);
      if ((Math.sqrt(a) * Math.sqrt(a) == a) && (Math.cbrt(a) * Math.cbrt(a) * Math.cbrt(a))) {
        array.push(a);
      } 
    }
    return array.toString();
  }

  const primeMatch = query.match("/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)/");
  if (primeMatch) {
    let array: number[] = [];
    for (let i = 1; i < 6; i++) {
      const a: number = parseInt(primeMatch[i]);
      for (let i = 2, s = Math.sqrt(a); i <= s; i++) {
        if (a % i == 0) {
          break;
        }
      }
      if (a > 1) {
        array.push(a);
      }
    }
    return array.toString();
  }

  return "";
}
