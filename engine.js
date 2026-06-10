export function resonanceEngine(name, birth) {

  let score = birth.replaceAll("-","")
    .split("")
    .reduce((a,b)=>a + Number(b), 0);

  if (score < 40) {
    return {
      archetype: "Lunar Dreamer",
      bio: "Emotional atmospheric creator",
      energy: "Soft",
      audience: "Late-night listeners",
      stage: "Intimate storyteller"
    };
  }

  if (score < 60) {
    return {
      archetype: "Neon Performer",
      bio: "Balanced emotional + rhythmic energy",
      energy: "Balanced",
      audience: "Indie + mainstream",
      stage: "Festival performer"
    };
  }

  if (score < 80) {
    return {
      archetype: "Solar Storyteller",
      bio: "Emotion-driven narrative sound",
      energy: "High emotional",
      audience: "Story listeners",
      stage: "Expressive performer"
    };
  }

  return {
    archetype: "Quantum Architect",
    bio: "Experimental sonic builder",
    energy: "Experimental",
    audience: "Deep listeners",
    stage: "Concept artist"
  };
}
