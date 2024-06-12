import * as funciones from '../models/queries.joyas.js';
import joyas from '../data/data.joyas.js';

export const getHATEOAS = (req, res) => {
    const hateoas = funciones.HATEOAS();
    res.json(hateoas);
};

export const filterCategory = (req, res) => {
    const { categoria } = req.params;
    const joyasFiltradas = funciones.filterCategoryQuery(categoria);
    res.json({ joyas: joyasFiltradas });
};

export const filterJewerlyByField = (req, res) => {
    const { campo } = req.params;
    const valorBuscado = campo.toLowerCase();

    const joyasFiltradas = funciones.filterJewerlyByFieldQuery(valorBuscado);

    res.send({
        cantidad: joyasFiltradas.length,
        joyas: joyasFiltradas,
    });
};

export const getJewerlyById = (req, res) => {
    const { id } = req.params;
    const joya = funciones.getJewelByIdQuery(parseInt(id));
    if (joya) {
        res.json({ joya });
    } else {
        res.status(404).json({
            error: "404 Not Found",
            message: "No existe una producto con ese ID"
        });
    }
};

export const pageJewelry = (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const joyasPaginadas = funciones.pageJewelryQuery({ page: parseInt(page), limit: parseInt(limit) });
    res.json({ joyas: joyasPaginadas });
};

export const sortJewelryByValue = (req, res) => {
    const { orden } = req.query;
    const joyasOrdenadas = funciones.sortJewelryByValueQuery(joyas, orden);
    res.json({ joyas: joyasOrdenadas });
};
