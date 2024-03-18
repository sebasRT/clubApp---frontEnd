import { Container, Heading, Hr, Img, Link, Tailwind, Text } from "@react-email/components"

const WelcomeUserEmail = ({ clientName = "sebas", otp = "12345"}: { clientName: string, otp: string }) => {

    return (
        
            <Tailwind>
                <Container className="font-sans">

                <Heading as="h1" className="text-center font-sans">Bienvenido a nuestra familia {clientName}</Heading>
                <Hr />
                <Heading as="h4">Aquí te dejamos el paso a paso para ingresar a tu perfil: </Heading>
                <ul className="space-y-5 *:py-2">
                    <li className="py-2">Ingresa a nuestro sitio web: <Link href="https://www.clu-app.xyz">click aquí</Link>👈🏼</li>
                    <li className="py-2">Da click en el botón "INGRESAR"</li>
                    <li className="py-2">Ingresa tu DNI</li>
                    <li className="py-2">Se te pedirá el siguiente código de 6 dígitos la primera vez que ingreses:  </li>
                    <Text className="text-center text-3xl tracking-widest">{otp}</Text>
                    <li className="py-2">Ingresa la clave con la que quieres ingresar la proxima vez y listo 😎🔥...  </li>
                </ul>
               
        </Container>
            </Tailwind>

    )

}

export default WelcomeUserEmail