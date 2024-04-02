import { getMatchByCategory } from "@/lib/user.actions";

export default async function NextUsermatch() {
  const match = await getMatchByCategory();
  return (
    <>
      {match.slice(20, 30).map((info: any) => (
          <section key={info.gameId} className={`bg-silver-100 lg:px-16 py-1 rounded-[5px] m-2 text-center`}>
            <p className={`text-gray-600`}>Fecha 8 {info.gameDay}. {info.gameTime}pm <span className="text-black">{info.gameIslocal ? 'L' : 'V'}</span></p>
            <p className={`text-black`}>{info.gameTeamrival}</p>
          </section>
      ))}
    </>
  );
}
