'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getComponent = getComponent;

var _noflo = require('noflo');

var _noflo2 = _interopRequireDefault(_noflo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getComponent() {
    var component = new _noflo2.default.Component();
    component.description = "This component receives data on a single input\
  port and sends the same data out to the output port";

    // Register ports and event handlers
    component.inPorts.add('in', { datatype: 'all' }, function (event, payload) {
        switch (event) {
            case 'data':
                // Forward data when we receive it.
                // Note: send() will connect automatically if needed
                return component.outPorts.out.send(payload);
            case 'disconnect':
                // Disconnect output port when input port disconnects
                return component.outPorts.out.disconnect();
        }
    });
    component.outPorts.add('out', { datatype: 'all' });

    return component; // Return new instance
}

//# sourceMappingURL=Test.js.map