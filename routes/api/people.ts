
export async function fetchPeopleData() {
    const url = 'http://localhost:3000/person';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Ocorreu um erro:', error);
        throw error;
    }
}