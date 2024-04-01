import { useContext, useState } from 'react';
import { coachPopUpContext } from './CoachesList';
import { IoMdCloseCircle } from 'react-icons/io';
import * as yup from 'yup';
import { editCoachAction } from '@/lib/admin.actions';
import { CgSpinner } from 'react-icons/cg';

type EditInputs = {
    userName: string;
    userLastname: string;
    userEmail: string;
    userAddress: string;
};

const schema: yup.ObjectSchema<EditInputs> = yup.object({
    userName: yup.string().required("Este campo es requerido"),
    userLastname: yup.string().required("Este campo es requerido"),
    userEmail: yup.string().email("Ingresa un email").required("Este campo es requerido"),
    userAddress: yup.string().required("Este campo es requerido")
});

const placeholders: Record<keyof EditInputs, string> = {
    userName: "Nombre *",
    userLastname: "Apellido *",
    userEmail: "Correo electrónico *",
    userAddress: "Dirección *",
};

const EditCoachPopUp = () => {
    const { location, coachInfo: { userName, userLastname, userEmail, userAddress, coachNumber }, editOpen, setEditOpen } = useContext(coachPopUpContext);

    const [editingState, setEditingState] = useState<"loading" | "done" | "failed" | "">("")
    const playerToUpdate: EditInputs = { userName, userLastname, userEmail, userAddress }

    const updateCoach = async (formData: FormData) => {
        setEditingState("loading")

        const edit = await editCoachAction(formData);

        if (!edit) {        console.log(edit);
            setEditingState("failed"); return };
    
        setEditingState("done")
    };

    return (
        <>

            {editOpen &&
                <div style={{ left: location[0], top: location[1] }} className='fixed grid place-items-center bg-baltic-sea-700 w-40 h-60  z-50 shadow-xl text-baltic-sea-50 border-2 border-baltic-sea-950 rounded-md ml:w-52 md:h-64'>
                    <IoMdCloseCircle onClick={() => setEditOpen(false)} className='absolute right-0 top-0 m-1 text-2xl text-red-500 z-50' />
                    {
                        (() => {
                            switch (editingState) {
                                case "loading":
                                    return <div className="flex flex-col">
                                        <span className="block font-semibold">Procesando...</span>
                                        <CgSpinner className="animate-spin text-5xl mx-auto" />
                                    </div>;

                                case "done":
                                    return <div className="flex flex-col gap-20 items-center text-center">
                                    <span className="block my-4 font-semibold">Jugador actualizado exitosamente</span>
                                    <button className="bg-primary-500 text-baltic-sea-50 px-2 py-1 font-bold rounded leading-loose w-fit "
                                        onClick={() => { setEditOpen(false), setEditingState("") }}
                                    >OK</button>
                                </div>;

                                case "failed":
                                    return <div className="flex flex-col gap-20 items-center text-center">
                                        <span className="block my-4 text-sm font-semibold">Su solicitud no pudo ser procesada, si el problema persiste contacte a su proveedor de software.</span>
                                        <button className="bg-primary-500 text-baltic-sea-50 px-2 py-1 font-bold rounded leading-loose w-fit"
                                            onClick={() => { setEditOpen(false), setEditingState("") }}
                                        >OK</button>
                                    </div>


                                default:
                                    return <form action={updateCoach} className='relative p-2 flex flex-col justify-between h-full w-full '>
                                        <span className='font-semibold text-sm ml:text-base '>Editar usuario: </span>
                                        {Object.keys(playerToUpdate).map((fieldName, index) => (

                                            <div key={index} className='text-xs relative border-[2px] border-transparent rounded-md ml:text-sm sm:text-base'>

                                                <input
                                                    id={fieldName}
                                                    name={fieldName}
                                                    className='peer pl-2 text-baltic-sea-50 rounded-sm outline-none bg-white/40 w-full h-6'
                                                    type="text"
                                                    defaultValue={playerToUpdate[fieldName as keyof EditInputs]}
                                                    placeholder=""
                                                />
                                                <label htmlFor={fieldName}
                                                    className='absolute left-2 -top-4 peer-placeholder-shown:text-red-500 peer-placeholder-shown:top-0 peer-placeholder-shown:text-xs font-semibold text-[10px] transition ml:-top-5 ml:peer-placeholder-shown:text-sm'>
                                                    {placeholders[fieldName as keyof EditInputs]}
                                                </label>
                                            </div>

                                        ))}
                                        <input defaultValue={coachNumber?.toString()} hidden name="playerId" id='playerId' />
                                        <button type="submit" className="text-sm tracking-wide font-thin bg-primary-500 rounded-lg font-squada ">ACTUALIZAR</button>
                                    </form>

                            }
                        })()
                    }

                </div>
            }
        </>
    );
};

export default EditCoachPopUp;
