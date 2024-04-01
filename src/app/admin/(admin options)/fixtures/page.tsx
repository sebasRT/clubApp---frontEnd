import { apiBaseURL } from "@/lib/utils"
import { Fixture as FixtureType } from "@/models/admin.model"
import Fixture from "./components/Fixture"
import { unstable_noStore } from "next/cache"


const getFixtures = async () => {
  try {

    const request = await fetch(`${apiBaseURL}/fixtures/list`)
    const data = await request.json() as FixtureType[]

    return data
  } catch (error: any) {
    throw new Error(error.message)
  }

}

const fixturesPages = async () => {
  unstable_noStore()
  const fixtures = await getFixtures()

  return (
    <div className="fixtures-container">
      <h1 className="text-center text-4xl my-2 font-bauhs">Fixtures</h1>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(_200px,_1fr))] place-items-center">

        {fixtures?.map((fixture, index) => (
          <Fixture key={index} data={fixture} />
        ))}
      </section>
    </div>
  );
}

export default fixturesPages