# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
0xf5856EDc8Cd0BDbC4dC52Dad09Bf424D501BBc25

project link - https://puffy-dear-repair.glitch.me/log (post)
sample body of request {
    "data": 1,
    "temperature": "testTemp",
    "humidity": "100",
    "latitude": "west",
    "longtitude": "North"
}

to fetch (get)- we can use https://puffy-dear-repair.glitch.me/logger/1
 1 represents id

 should return  {
    2
    "temperature": "testTemp",
    "humidity": "100",
    "latitude": "west",
    "longtitude": "North"
}