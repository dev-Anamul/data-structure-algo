function isIsomorphic(s: string, t: string): boolean {
  const map = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i)) && map.get(s.charAt(i)) !== t.charAt(i))
      return false;
    else if (map.has(t.charAt(i))) {
      if (map.get(t.charAt(i)) !== s.charAt(i)) return false;
    } else {
      map.set(s.charAt(i), t.charAt(i));
      //   map.set(t.charAt(i), s.charAt(i));
    }
  }

  return true;
}

console.log(isIsomorphic("paper", "title"));
