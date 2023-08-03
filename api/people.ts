
export async function getPersonById(id: string) {
    const url = `http://localhost:4200/person/${id}`;
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Ocorreu um erro:', error);
        throw error;
    }
}