/**
 * HostController
 *
 * @description :: Server-side logic for managing hosts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
    
    index: function (req, res) {
        return res.view();
    },
    
    create: function (req, res, next) {
        var host = {
            name: req.param('name'),
            email: req.param('email'),
            message: req.param('message'),
        }
    
        Host.create(host, function hostCreated(err, host) {
            if (err) {
                console.log(err);
                return res.view({message: 'Algo deu errado, por favor tente novamente!'});
            }
            
            return res.view({message: 'Vamos fazer novos amiguinhos!!!'});
        })
    }

};

