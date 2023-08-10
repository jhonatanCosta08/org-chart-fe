export interface PersonModel {
    id: string,
    name: string,
    email: string,
    phone: string,
    city: string,
    photo: string,
    managerId: string,
    positionId: string,
    personPositionName: string,
    personDescription: string,
    joinedDate: string,
    person: PersonModel[]
}