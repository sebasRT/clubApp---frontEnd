'use server'
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { redirect } from "next/navigation";

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN!});

export async function pay(){
  const preference =await new Preference(client).create({
    body: {
      items: [
        {
          id:'cuota',
          title: 'Cuota',
          quantity: 1,
          unit_price: 10000
        }
      ],
    }
  })

  redirect(preference.sandbox_init_point!)
}