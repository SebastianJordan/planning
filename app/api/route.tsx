export async function GET() {
    const data = {
        name:"echo"
    };
    return Response.json({ data })
}