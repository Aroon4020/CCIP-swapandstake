/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SourceChainSender,
  SourceChainSenderInterface,
} from "../../../../artifacts/contracts/Source_Chain.sol/SourceChainSender";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_link",
        type: "address",
      },
      {
        internalType: "address",
        name: "_swapRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wmatic",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdt",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "destinationChainSelector",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "feeToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fees",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "destinationChainSelector",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
    ],
    name: "swapAndStake",
    outputs: [
      {
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6101206040523480156200001257600080fd5b5060405162001c0138038062001c018339818101604052810190620000389190620001ba565b60016000819055508473ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508373ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff166101008173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660e08173ffffffffffffffffffffffffffffffffffffffff1681525050505050505062000242565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001828262000155565b9050919050565b620001948162000175565b8114620001a057600080fd5b50565b600081519050620001b48162000189565b92915050565b600080600080600060a08688031215620001d957620001d862000150565b5b6000620001e988828901620001a3565b9550506020620001fc88828901620001a3565b94505060406200020f88828901620001a3565b93505060606200022288828901620001a3565b92505060806200023588828901620001a3565b9150509295509295909350565b60805160a05160c05160e05161010051611929620002d86000396000818160a70152818160f30152818161068301526108e40152600081816101ad01528181610524015261092001526000818160d101526109a701526000818161026c015281816103640152818161044001526106380152600081816102c60152818161047c01528181610502015261056a01526119296000f3fe6080604052600436106100225760003560e01c8063b4f007311461002e57610029565b3661002957005b600080fd5b61004860048036038101906100439190610ec8565b61005e565b6040516100559190610f5c565b60405180910390f35b60008086116100a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161009990610fd4565b60405180910390fd5b6100cc7f000000000000000000000000000000000000000000000000000000000000000087610681565b6101377f0000000000000000000000000000000000000000000000000000000000000000877f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166107859092919063ffffffff16565b600061014387876108d4565b90506000600167ffffffffffffffff81111561016257610161610ff4565b5b60405190808252806020026020018201604052801561019b57816020015b610188610dbf565b8152602001906001900390816101805790505b509050600060405180604001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168152602001848152509050808260008151811061020257610201611023565b5b602002602001018190525060006040518060a001604052808860405160200161022b9190611061565b6040516020818303038152906040528152602001336040516020016102509190611061565b60405160208183030381529060405281526020018481526020017f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020016102bd60405180602001604052808a815250610a4a565b815250905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166320487ded8a846040518363ffffffff1660e01b815260040161031f9291906112a2565b602060405180830381865afa15801561033c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036091906112e7565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103bb9190611061565b602060405180830381865afa1580156103d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103fc91906112e7565b81111561043e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043590611360565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b81526004016104b992919061138f565b6020604051808303816000875af11580156104d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fc91906113f0565b506105687f0000000000000000000000000000000000000000000000000000000000000000867f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166107859092919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166396f4e9f98a846040518363ffffffff1660e01b81526004016105c39291906112a2565b6020604051808303816000875af11580156105e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106069190611449565b95508867ffffffffffffffff16867f6b6da56b1307373f9bd6679da1d5b7f08ce714f80bc3b92807d23fd9064917f88a7f000000000000000000000000000000000000000000000000000000000000000085338b60405161066b959493929190611476565b60405180910390a3505050505095945050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161480156106dc5750600034115b15610753578034146106ed57600080fd5b8173ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561073557600080fd5b505af1158015610749573d6000803e3d6000fd5b5050505050610781565b6107803330838573ffffffffffffffffffffffffffffffffffffffff16610ac9909392919063ffffffff16565b5b5050565b600081148061080f575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b81526004016107cc9291906114c9565b602060405180830381865afa1580156107e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080d91906112e7565b145b61084e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084590611564565b60405180910390fd5b6108cf8363095ea7b360e01b848460405160240161086d92919061138f565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b52565b505050565b6000806040518060e001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020017f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff168152602001428152602001858152602001848152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bc651188826040518263ffffffff1660e01b81526004016109fe9190611621565b6020604051808303816000875af1158015610a1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4191906112e7565b91505092915050565b60606397a657c960e01b82604051602401610a659190611658565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050919050565b610b4c846323b872dd60e01b858585604051602401610aea93929190611673565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b52565b50505050565b6000610bb4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610c199092919063ffffffff16565b9050600081511115610c145780806020019051810190610bd491906113f0565b610c13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0a9061171c565b60405180910390fd5b5b505050565b6060610c288484600085610c31565b90509392505050565b606082471015610c76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6d906117ae565b60405180910390fd5b610c7f85610d45565b610cbe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb59061181a565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610ce79190611876565b60006040518083038185875af1925050503d8060008114610d24576040519150601f19603f3d011682016040523d82523d6000602084013e610d29565b606091505b5091509150610d39828286610d58565b92505050949350505050565b600080823b905060008111915050919050565b60608315610d6857829050610db8565b600083511115610d7b5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610daf91906118d1565b60405180910390fd5b9392505050565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b600080fd5b6000819050919050565b610e0781610df4565b8114610e1257600080fd5b50565b600081359050610e2481610dfe565b92915050565b600067ffffffffffffffff82169050919050565b610e4781610e2a565b8114610e5257600080fd5b50565b600081359050610e6481610e3e565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e9582610e6a565b9050919050565b610ea581610e8a565b8114610eb057600080fd5b50565b600081359050610ec281610e9c565b92915050565b600080600080600060a08688031215610ee457610ee3610def565b5b6000610ef288828901610e15565b9550506020610f0388828901610e15565b9450506040610f1488828901610e55565b9350506060610f2588828901610eb3565b9250506080610f3688828901610e15565b9150509295509295909350565b6000819050919050565b610f5681610f43565b82525050565b6000602082019050610f716000830184610f4d565b92915050565b600082825260208201905092915050565b7f5a65726f20416d6f756e74000000000000000000000000000000000000000000600082015250565b6000610fbe600b83610f77565b9150610fc982610f88565b602082019050919050565b60006020820190508181036000830152610fed81610fb1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b61105b81610e8a565b82525050565b60006020820190506110766000830184611052565b92915050565b61108581610e2a565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156110c55780820151818401526020810190506110aa565b60008484015250505050565b6000601f19601f8301169050919050565b60006110ed8261108b565b6110f78185611096565b93506111078185602086016110a7565b611110816110d1565b840191505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61115081610e8a565b82525050565b61115f81610df4565b82525050565b60408201600082015161117b6000850182611147565b50602082015161118e6020850182611156565b50505050565b60006111a08383611165565b60408301905092915050565b6000602082019050919050565b60006111c48261111b565b6111ce8185611126565b93506111d983611137565b8060005b8381101561120a5781516111f18882611194565b97506111fc836111ac565b9250506001810190506111dd565b5085935050505092915050565b600060a083016000830151848203600086015261123482826110e2565b9150506020830151848203602086015261124e82826110e2565b9150506040830151848203604086015261126882826111b9565b915050606083015161127d6060860182611147565b506080830151848203608086015261129582826110e2565b9150508091505092915050565b60006040820190506112b7600083018561107c565b81810360208301526112c98184611217565b90509392505050565b6000815190506112e181610dfe565b92915050565b6000602082840312156112fd576112fc610def565b5b600061130b848285016112d2565b91505092915050565b7f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000600082015250565b600061134a601283610f77565b915061135582611314565b602082019050919050565b600060208201905081810360008301526113798161133d565b9050919050565b61138981610df4565b82525050565b60006040820190506113a46000830185611052565b6113b16020830184611380565b9392505050565b60008115159050919050565b6113cd816113b8565b81146113d857600080fd5b50565b6000815190506113ea816113c4565b92915050565b60006020828403121561140657611405610def565b5b6000611414848285016113db565b91505092915050565b61142681610f43565b811461143157600080fd5b50565b6000815190506114438161141d565b92915050565b60006020828403121561145f5761145e610def565b5b600061146d84828501611434565b91505092915050565b600060a08201905061148b6000830188611052565b6114986020830187611052565b6114a56040830186611380565b6114b26060830185611052565b6114bf6080830184611380565b9695505050505050565b60006040820190506114de6000830185611052565b6114eb6020830184611052565b9392505050565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b600061154e603683610f77565b9150611559826114f2565b604082019050919050565b6000602082019050818103600083015261157d81611541565b9050919050565b61158d81610e6a565b82525050565b60e0820160008201516115a96000850182611147565b5060208201516115bc6020850182611147565b5060408201516115cf6040850182611147565b5060608201516115e26060850182611156565b5060808201516115f56080850182611156565b5060a082015161160860a0850182611156565b5060c082015161161b60c0850182611584565b50505050565b600060e0820190506116366000830184611593565b92915050565b6020820160008201516116526000850182611156565b50505050565b600060208201905061166d600083018461163c565b92915050565b60006060820190506116886000830186611052565b6116956020830185611052565b6116a26040830184611380565b949350505050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611706602a83610f77565b9150611711826116aa565b604082019050919050565b60006020820190508181036000830152611735816116f9565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000611798602683610f77565b91506117a38261173c565b604082019050919050565b600060208201905081810360008301526117c78161178b565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611804601d83610f77565b915061180f826117ce565b602082019050919050565b60006020820190508181036000830152611833816117f7565b9050919050565b600081905092915050565b60006118508261108b565b61185a818561183a565b935061186a8185602086016110a7565b80840191505092915050565b60006118828284611845565b915081905092915050565b600081519050919050565b60006118a38261188d565b6118ad8185610f77565b93506118bd8185602086016110a7565b6118c6816110d1565b840191505092915050565b600060208201905081810360008301526118eb8184611898565b90509291505056fea26469706673582212206b7cdbd794d44f1852a1b4c6ceabcf2dc42284fff3d66c497f1a4f77275a2e4464736f6c63430008130033";

type SourceChainSenderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SourceChainSenderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SourceChainSender__factory extends ContractFactory {
  constructor(...args: SourceChainSenderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _router: PromiseOrValue<string>,
    _link: PromiseOrValue<string>,
    _swapRouter: PromiseOrValue<string>,
    _wmatic: PromiseOrValue<string>,
    _usdt: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SourceChainSender> {
    return super.deploy(
      _router,
      _link,
      _swapRouter,
      _wmatic,
      _usdt,
      overrides || {}
    ) as Promise<SourceChainSender>;
  }
  override getDeployTransaction(
    _router: PromiseOrValue<string>,
    _link: PromiseOrValue<string>,
    _swapRouter: PromiseOrValue<string>,
    _wmatic: PromiseOrValue<string>,
    _usdt: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _router,
      _link,
      _swapRouter,
      _wmatic,
      _usdt,
      overrides || {}
    );
  }
  override attach(address: string): SourceChainSender {
    return super.attach(address) as SourceChainSender;
  }
  override connect(signer: Signer): SourceChainSender__factory {
    return super.connect(signer) as SourceChainSender__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SourceChainSenderInterface {
    return new utils.Interface(_abi) as SourceChainSenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SourceChainSender {
    return new Contract(address, _abi, signerOrProvider) as SourceChainSender;
  }
}
