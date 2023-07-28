

export async function fetchPositionData() {
    const url = 'http://localhost:4200/position';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Ocorreu um erro:', error);
        throw error;
    }
}