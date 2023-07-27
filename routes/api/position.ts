

export async function fetchPositionData() {
    const url = 'https://api.github.com/users/jhonCosta08';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Ocorreu um erro:', error);
        throw error;
    }
}