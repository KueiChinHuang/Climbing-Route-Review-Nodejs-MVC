const {index, show, new: _new, create, edit, update, delete: _delete} = require('../controllers/ClimbingroutesController');

module.exports = router => {
    router.get('/climbingroutes', index);
    router.get('/climbingroutes/new', _new);
    router.post('/climbingroutes', create);
    router.post('/climbingroutes/update', update);
    router.post('/climbingroutes/delete', _delete);
    router.get('/climbingroutes/:id/edit', edit);
    router.get('/climbingroutes/:id', show);
};