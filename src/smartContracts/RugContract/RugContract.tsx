import {AbiRegistry, Address, SmartContract} from "@multiversx/sdk-core/out";

import abiJson from "./rug-royalties.abi.json";
import {rugSmartContractAddress} from "../../config/config.tsx";

const abiRegistry = AbiRegistry.create(abiJson);
export const rugContract = new SmartContract({
    address: new Address(rugSmartContractAddress),
    abi: abiRegistry,
});
