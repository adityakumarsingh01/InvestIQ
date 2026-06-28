export function scoreLabel(score: number) {

  if (score >= 90)
    return "Excellent";

  if (score >= 75)
    return "Very Good";

  if (score >= 60)
    return "Good";

  if (score >= 45)
    return "Average";

  return "Poor";
}

export function scoreColor(score: number) {

  if (score >= 80)
    return "bg-green-500";

  if (score >= 60)
    return "bg-blue-500";

  if (score >= 40)
    return "bg-yellow-500";

  return "bg-red-500";
}