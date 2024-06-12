import joyas from '../data/data.joyas.js';

export const HATEOAS = () => {
    return joyas.map((j) => ({
        name: j.name,
        href: `http://localhost:3000/api/v1/joyas/${j.id}`,
    }));
};

export const filterCategoryQuery = (categoria) => {
    return joyas.filter((joya) => joya.category.toLowerCase() === categoria.toLowerCase());
};

export const filterJewerlyByFieldQuery = (valor) => {
    return joyas.filter((joya) => {
        return Object.keys(joya).some(key =>
            key.toLowerCase().includes(valor) ||
            (typeof joya[key] === 'string' && joya[key].toLowerCase().includes(valor))
        );
    });
};

export const getJewelByIdQuery = (id) => {
    return joyas.find((j) => j.id === id);
};

export const pageJewelryQuery = ({ page = 1, limit = 5 }) => {
    const start = (page - 1) * limit;
    const end = start + limit;
    return joyas.slice(start, end);
};

export const sortJewelryByValueQuery = (joyas, orden) => {
    return orden === 'asc'
        ? joyas.sort((a, b) => a.value - b.value)
        : orden === 'desc'
            ? joyas.sort((a, b) => b.value - a.value)
            : [];
};
