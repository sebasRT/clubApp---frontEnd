import { NextRequest } from "next/server";
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { getPlayerInfo, updatePlayerInfo } from "@/lib/user.actions";

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! });


// const updatePlayer = async () => {
//   const data = await getPlayerInfo()
//   const edit = await updatePlayerInfo(data);

//   if (!edit) {        
//     console.log(edit);return };
// };

export async function POST(request: NextRequest) {
  const body = await request.json().then((data) => data as {data: {id: string}});

  const payment = await new Payment(client).get({id: body.data.id})
  
  console.log('payment:', payment);

  // if(payment.api_response.status === 200){
  //   return updatePlayer
  // }
  

  return Response.json({success: true});
}
