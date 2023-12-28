export async function GET() {
  let data : exampleData = {
    hello: "world",
    id: 0
  };
   
  return Response.json(data);
}