import CreateMatchForm from './CreateMatchForm';
import EditNextMatch from './EditNextMatch';
import { getGames } from './Schedules';
import dayjs from 'dayjs';
import EditPrevMatch from './EditPrevMatch';

const MatchesControl = async() => {
const games = await getGames()

const currentDate = dayjs();

const previousGame = games.filter(game => dayjs(game.gameDay).isBefore(currentDate)).pop();
const nextGame = games.filter(game => dayjs(game.gameDay).isAfter(currentDate)).shift();


    return (
<div className='flex flex-col bg-baltic-sea-600/30 row-span-2'>
        <section className='flex-grow grid grid-rows-[1fr_auto_1fr]  0'>
            <section className='size-full flex flex-col justify-between md:justify-around backdrop-brightness-110 gap-2 p-3'>
                <h3 className=' text-center text-baltic-sea-800 text-xl '>Crear partido</h3>
                <CreateMatchForm />
            </section>
            <section className='flex flex-col items-center  text-baltic-sea-800 py-3 bg-baltic-sea-700/30'>
                <h3 className='text-center text-md text-white/70'>Partido anterior</h3>
                <EditPrevMatch game={previousGame}/>
            </section>
            <section className='size-full flex flex-col items-center justify-between md:justify-around text-baltic-sea-100 p-3 gap-2 bg-baltic-sea-700'>
                <h3 className=' text-center text-primary-500 text-xl '>Proximo Partido</h3>
                <EditNextMatch game={nextGame}/>
            </section>
        </section>
</div>

    )
}

export default MatchesControl