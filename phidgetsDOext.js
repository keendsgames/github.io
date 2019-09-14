(function(ext) { 
		var phid;
/*
		var conn = new phidget22.Connection(8989, 'localhost');
                var ch = new phidget22.DigitalOutput();
                ch.onAttach = onAttach;
		phid = null;

		// If you want to open an output on a specific device, set the serial number:
		//ch.setDeviceSerialNumber(495379);

		// If you want to use the DigitalOutput mode of a port on your VINT hub, use these:
		ch.setIsHubPortDevice(true);
		ch.setHubPort(3);

		conn.connect().then(function() {
			console.log('connected');
			ch.open().then(function(ch) {
				console.log('channel open');
			}).catch(function(err) {
				console.log('failed to open the channel:' + err);
			});

		}).catch(function(err) {
			alert('failed to connect to server:' + err);
		});;
	});

		ch.onDetach = function(ch) {
			console.log('channel dettached');
		}

		function onAttach(ch) {
		console.log(ch + ' attached');
		phid = ch;
		//$('#ledField').show();

	}
*/
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

	//check if Phidgets installed
  	ext.installed = function() {
	console.log('Phidgets Install Check');
	if (phid !=null)
    	return 1;
	else
	return 0;
  	}

	//set output high
	ext.LEDStateOn = function() {
		//phid.setState($('#LEDstate')[0].checked);
		//phid.setState(true);   //turn led on
		console.log(' LEDStateOn');
		return 1;
	}

	//set output low
	ext.LEDstateOff = function() {
		//phid.setState($('#LEDstate')[0].checked);
        	//phid.setState(false);   //turn led off
		console.log(' LEDStateOff');
		return 0;
	}
/*
	//get button state
	ext.getButton = function() {
        	return phid.getState();   
	}
*/
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
	  // Block type, block name, function name
      ["b", "Phidget VINT installed?", "installed"],
      [" ", "Set Led On", "LEDStateOn", "1"],
      [" ", "Set Led Off", "LEDStateOff", "0"],
      ["b", "button pressed?", "getButton", "fasle"],
        ]

    };

    // Register the extension
    ScratchExtensions.register('phidgetsDOext', descriptor, ext);
})({});