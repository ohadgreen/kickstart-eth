'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var truffleWalletParams = require('../params.dev');

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // check to see if we are running on the server or the browser and if metamask is on
    //on browser and metamask is running
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // we are on the server or the user not running metamask
    var provider = new _web2.default.providers.HttpProvider(truffleWalletParams.infuraUrl);
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ0cnVmZmxlV2FsbGV0UGFyYW1zIiwicmVxdWlyZSIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsImluZnVyYVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFDQSxJQUFNLHNCQUFzQixRQUFRLEFBQVIsQUFBNUI7O0FBRUEsSUFBSSxZQUFKOztBQUVBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTVELGFBQXlFLEFBQUU7QUFDdkU7QUFDQTtXQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0g7QUFIRCxPQUdPLEFBQUU7QUFDTDtRQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNiLG9CQUFvQixBQURQLEFBQWpCLEFBR0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0g7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L2pzL2V0aGVyZXVtX2Rldi91ZGVteV9jb3Vyc2Uva2lja3N0YXJ0In0=