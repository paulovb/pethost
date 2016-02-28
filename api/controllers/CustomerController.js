/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    index: function (req, res) {
        return res.view();
    },
    
    create: function (req, res, next) {
        var customer = {
            name: req.param('name'),
            email: req.param('email'),
        }
    
        Customer.create(customer, function customerCreated(err, customer) {
            if (err) {
                console.log(err);
                return res.view({message: 'Algo deu errado, por favor tente novamente!'});
            }
            
            return res.view({message: 'O seu Pet será bem amado'});
        })
    }

};

