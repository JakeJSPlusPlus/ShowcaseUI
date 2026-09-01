export async function GET() {
  const response = await fetch("https://hipsum.co/api/?type=hipster-centric&paras=15");
  const data = await response.json();
  return new Response(JSON.stringify(data));
}
