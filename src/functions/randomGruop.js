export default function getRandomGroup() {
  const list = ["Family", "Work", "School"];
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}
