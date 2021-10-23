const controlador = {
    index: (req, res) => {
        res.send('Index de productos');
    }, 
    show: (req, res) => {
        res.send('Show de productos');
    },
    create: (req, res) => {
        res.send('Create de productos');
    }
};

module.exports = controlador;
