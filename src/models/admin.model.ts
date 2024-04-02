export type Player = {
    userName: string,
    userLastname: string,
    userDni: string,
    userEmail: string,
    userAddress: string,
    userPassword?: string,
    playerId?: number | string,
    playerBirthdate: string,
    category: {categoryName: string},
  }  

export type Coach = {
    coachNumber?: number,
    userName: string,
    userLastname: string,
    userDni: string,
    userEmail: string,
    userAddress: string,
    userPassword: string,
    categoryId?: number,
    roleId: number,
    clubId: number
  }

export type Category = {
  categoryId: number,
  categoryName: string,
  coach: {userName: string, userLastname: string},
  players: Player[],
  categorySchedule?: string,
  categoryDaytraining?: string
}

export type Game = {
  gameId: string,
  gameDay: string,
  gameTime: string,
  gameIslocal: boolean,
  gameTeamrival: string,
  gameLocalgoals: number,
  gameRivalgoals: number,
  location: string,
  category?: Category,
  categoryId: string,
  fixtureId: string,
}

export type Fixture = {
  fixtureId: number,
  fixtureName: string,
  fixtureGames: Game[]
}
