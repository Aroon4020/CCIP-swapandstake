/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOwnable,
  IOwnableInterface,
} from "../../../../../../../../artifacts/@chainlink/contracts-ccip/src/v0.8/shared/interfaces/IOwnable";

const _abi = [
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IOwnable__factory {
  static readonly abi = _abi;
  static createInterface(): IOwnableInterface {
    return new utils.Interface(_abi) as IOwnableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOwnable {
    return new Contract(address, _abi, signerOrProvider) as IOwnable;
  }
}
