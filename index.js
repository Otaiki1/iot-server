const ethers = require("ethers");
require("dotenv").config();
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const contractAddress = process.env.CONTRACT_ADDRESS;

const provider = new ethers.providers.JsonRpcProvider(API_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const {
  abi,
} = require("./artifacts/contracts/ContractApi.sol/ContractApi.json");
const contractInstance = new ethers.Contract(contractAddress, abi, signer);

const express = require("express");
const app = express();
app.use(express.json());

app.get("/logger/:id", async (req, res) => {
  //http://localhost:3000/products/1
  try {
    const id = req.params.id;
    const product = await contractInstance.getLogInfo(String(id));
    let prod = [];
    prod[0] = parseInt(product[0]);
    prod[1] = product[1];
    prod[2] = product[2];
    prod[3] = product[3];
    res.send(prod);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/start", async (req, res) => {
  try {
    const { identifier } = req.body;
    const tx = await contractInstance.startLogging(String(identifier), {
      gasLimit: 10000000,
    });
    await tx.wait();
    res.json({ success: true });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/log/:id", async (req, res) => {
  //http://localhost:3000/products/1
  try {
    const identifier = req.params.id;
    const { temperature, humidity, location } = req.body;
    const tx = await contractInstance.log(
      String(identifier),
      temperature,
      humidity,
      location,
      { gasLimit: 10000000 }
    );
    await tx.wait();
    res.json({ success: true });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log("API server is listening on port 3000");
});
