import { Container, Heading, Hr, Img, Link, Tailwind, Text } from "@react-email/components"

const ChangeUserPassword = ({ clientName = "sebas" }: { clientName: string }) => {

    return (
        
            <Tailwind>
                <Container className="font-sans">

                <Heading as="h1" className="text-center font-sans">Bienvenido a nuestra familia {clientName}</Heading>
                <Hr />
                <Heading as="h4">Aquí te dejamos el paso a paso para ingresar a tu perfil: </Heading>
                <ul className="*:my-10">
                    <li>Ingresa a nuestro sitio web: <Link href="https://www.clu-app.xyz">click aquí</Link>👈🏼</li>
                    <li>Da click en el botón "INGRESAR"</li>
                    <li>Ingresa tu DNI</li>
                    <li>Se te pedirá el siguiente codigo de 6 digitos la primera vez que ingreses:  </li>
                </ul>
                <Text></Text>
        </Container>
            </Tailwind>

    )

}

export default ChangeUserPassword