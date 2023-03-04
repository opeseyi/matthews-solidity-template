// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

library Console {
    address constant CONSOLE_ADDRESS = address(0x000000000000000000636F6e736F6c652e6c6f67);

    function log(bytes32 _string, address _address) internal view {
        _sendLogPayload(abi.encodeWithSignature("log(bytes32,address)", _string, _address));
    }


	function _sendLogPayload(bytes memory payload) private view {
		uint256 payloadLength = payload.length;
		address consoleAddress = CONSOLE_ADDRESS;
		assembly {
			let payloadStart := add(payload, 32)
			let r := staticcall(gas(), consoleAddress, payloadStart, payloadLength, 0, 0)
		}
	}
}