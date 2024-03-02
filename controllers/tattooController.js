const Tattoo = require('../models/tattooModel');

exports.addTattoo = async (req, res) => {

    try {
        let tattoo;

      // Creamos nuestro tatuaje
        tattoo = new Tattoo(req.body);

        await tattoo.save();
        res.send(tattoo);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getAllTattoos = async (req, res) => {

    try {

        const tattoos = await Tattoo.find();
        res.json(tattoos)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.updateTattoo = async (req, res) => {

    try {
        const { title, description, price, details, imageUrl } = req.body;
        let tattoo = await Tattoo.findById(req.params.id);

        if(!tattoo) {
            res.status(404).json({ msg: 'No existe el tatuaje' })
        }

        tattoo.title = title;
        tattoo.description = description;
        tattoo.price = price;
        tattoo.details = details;
        tattoo.imageUrl = imageUrl;

        tattoo = await Tattoo.findOneAndUpdate({ _id: req.params.id },tattoo, { new: true} )
        res.json(tattoo);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.getTattooById = async (req, res) => {

    try {
        let tattoo = await Tattoo.findById(req.params.id);

        if(!tattoo) {
            res.status(404).json({ msg: 'No existe el tatuaje' })
        }

    res.json(tattoo);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.deleteTattoo = async (req, res) => {
    try {
        let tattoo = await Tattoo.findById(req.params.id);

    if (!tattoo) {
        return res.status(404).json({ msg: 'No existe el tatuaje' });
    }

    await Tattoo.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Tatuaje eliminado con éxito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.searchTattoos = async (req, res) => {
    try {
        const query = req.query.query; // Obtener el parámetro de búsqueda desde la URL
        const tattoos = await Tattoo.find({ title: { $regex: query, $options: 'i' } }); // Realizar la búsqueda insensible a mayúsculas y minúsculas

        res.json(tattoos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en la búsqueda de tatuajes');
    }
}
