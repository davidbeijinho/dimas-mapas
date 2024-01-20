import csv from 'csvtojson'

export async function GET(request: Request) {

const csvFilePath='data/lina.csv'

const json = await csv().fromFile(csvFilePath);

return Response.json(json);
}
