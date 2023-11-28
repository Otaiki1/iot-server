// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContractApi {
    uint public count = 0;

    struct Detail {
        uint id;
        string temperature;
        string humidity;
        string location;
    }

    mapping(string => Detail) public details;

    function startLogging(string memory _identifier) public {
        count = count + 1;
        details[_identifier].id = count;
    }

    function log(
        string memory _identifier,
        string memory _temperature,
        string memory _humidity,
        string memory _location
    ) public {
        details[_identifier].temperature = _temperature;
        details[_identifier].humidity = _humidity;
        details[_identifier].location = _location;
    }

    function getLogInfo(
        string memory _identifier
    ) public view returns (Detail memory) {
        return details[_identifier];
    }
}
