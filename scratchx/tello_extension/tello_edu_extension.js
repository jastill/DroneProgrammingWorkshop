/* Extension  for the tello drone */
/* John Astill 2019*/

new (function() {
    var ext = this;

    // Cleanup
    ext._shutdown = function() {

    };

    // Status reporting code
    // Connection missing?
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Functions for block with type 'w' will get a callback function as the 
    // final argument. This should be called to indicate that the block can
    // stop waiting.
    ext.command = function(callback) {
        console.log('command');
    };

    ext.takeoff = function(callback) {
        console.log('takeoff');
    };

    ext.land = function(callback) {
        console.log('Land');
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['w', 'Start SDK', 'command'],
            ['w', 'Take Off', 'takeoff'],
            ['w', 'Land', 'land']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Tello EDU Drone', descriptor, ext);
})();