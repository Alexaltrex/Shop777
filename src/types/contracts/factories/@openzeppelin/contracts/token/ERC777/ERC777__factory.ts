/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC777,
  ERC777Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC777/ERC777";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "defaultOperators_",
        type: "address[]",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "AuthorizedOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Burned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
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
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "RevokedOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
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
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Sent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "authorizeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultOperators",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "granularity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "isOperatorFor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorSend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "revokeOperator",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620033aa380380620033aa83398181016040528101906200003791906200068e565b82600290805190602001906200004f92919062000272565b5081600390805190602001906200006892919062000272565b5080600490805190602001906200008192919062000303565b5060005b81518110156200011a57600160056000848481518110620000ab57620000aa62000747565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080806200011190620007af565b91505062000085565b50731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff166329965a1d307fac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce2177054306040518463ffffffff1660e01b81526004016200018e9392919062000829565b600060405180830381600087803b158015620001a957600080fd5b505af1158015620001be573d6000803e3d6000fd5b50505050731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff166329965a1d307faea199e31a596269b42cdafd93407f14436db6e4cad65417994c2eb37381e05a306040518463ffffffff1660e01b8152600401620002359392919062000829565b600060405180830381600087803b1580156200025057600080fd5b505af115801562000265573d6000803e3d6000fd5b50505050505050620008cb565b828054620002809062000895565b90600052602060002090601f016020900481019282620002a45760008555620002f0565b82601f10620002bf57805160ff1916838001178555620002f0565b82800160010185558215620002f0579182015b82811115620002ef578251825591602001919060010190620002d2565b5b509050620002ff919062000392565b5090565b8280548282559060005260206000209081019282156200037f579160200282015b828111156200037e5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000324565b5b5090506200038e919062000392565b5090565b5b80821115620003ad57600081600090555060010162000393565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200041a82620003cf565b810181811067ffffffffffffffff821117156200043c576200043b620003e0565b5b80604052505050565b600062000451620003b1565b90506200045f82826200040f565b919050565b600067ffffffffffffffff821115620004825762000481620003e0565b5b6200048d82620003cf565b9050602081019050919050565b60005b83811015620004ba5780820151818401526020810190506200049d565b83811115620004ca576000848401525b50505050565b6000620004e7620004e18462000464565b62000445565b905082815260208101848484011115620005065762000505620003ca565b5b620005138482856200049a565b509392505050565b600082601f830112620005335762000532620003c5565b5b815162000545848260208601620004d0565b91505092915050565b600067ffffffffffffffff8211156200056c576200056b620003e0565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620005af8262000582565b9050919050565b620005c181620005a2565b8114620005cd57600080fd5b50565b600081519050620005e181620005b6565b92915050565b6000620005fe620005f8846200054e565b62000445565b905080838252602082019050602084028301858111156200062457620006236200057d565b5b835b818110156200065157806200063c8882620005d0565b84526020840193505060208101905062000626565b5050509392505050565b600082601f830112620006735762000672620003c5565b5b815162000685848260208601620005e7565b91505092915050565b600080600060608486031215620006aa57620006a9620003bb565b5b600084015167ffffffffffffffff811115620006cb57620006ca620003c0565b5b620006d9868287016200051b565b935050602084015167ffffffffffffffff811115620006fd57620006fc620003c0565b5b6200070b868287016200051b565b925050604084015167ffffffffffffffff8111156200072f576200072e620003c0565b5b6200073d868287016200065b565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000620007bc82620007a5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415620007f257620007f162000776565b5b600182019050919050565b6200080881620005a2565b82525050565b6000819050919050565b62000823816200080e565b82525050565b6000606082019050620008406000830186620007fd565b6200084f602083018562000818565b6200085e6040830184620007fd565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620008ae57607f821691505b60208210811415620008c557620008c462000866565b5b50919050565b612acf80620008db6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063959b8c3f116100a2578063d95b637111610071578063d95b6371146102e3578063dd62ed3e14610313578063fad8b32a14610343578063fc673c4f1461035f578063fe9d93031461037b57610116565b8063959b8c3f1461025d57806395d89b41146102795780639bd9bbc614610297578063a9059cbb146102b357610116565b806323b872dd116100e957806323b872dd146101a5578063313ce567146101d5578063556f0dc7146101f357806362ad1b831461021157806370a082311461022d57610116565b806306e485381461011b57806306fdde0314610139578063095ea7b31461015757806318160ddd14610187575b600080fd5b610123610397565b6040516101309190611acf565b60405180910390f35b610141610425565b60405161014e9190611b8a565b60405180910390f35b610171600480360381019061016c9190611c22565b6104b7565b60405161017e9190611c7d565b60405180910390f35b61018f6104da565b60405161019c9190611ca7565b60405180910390f35b6101bf60048036038101906101ba9190611cc2565b6104e4565b6040516101cc9190611c7d565b60405180910390f35b6101dd610535565b6040516101ea9190611d31565b60405180910390f35b6101fb61053e565b6040516102089190611ca7565b60405180910390f35b61022b60048036038101906102269190611e81565b610547565b005b61024760048036038101906102429190611f34565b6105ad565b6040516102549190611ca7565b60405180910390f35b61027760048036038101906102729190611f34565b6105f5565b005b610281610856565b60405161028e9190611b8a565b60405180910390f35b6102b160048036038101906102ac9190611f61565b6108e8565b005b6102cd60048036038101906102c89190611c22565b610912565b6040516102da9190611c7d565b60405180910390f35b6102fd60048036038101906102f89190611fd0565b610952565b60405161030a9190611c7d565b60405180910390f35b61032d60048036038101906103289190611fd0565b610b03565b60405161033a9190611ca7565b60405180910390f35b61035d60048036038101906103589190611f34565b610b8a565b005b61037960048036038101906103749190612010565b610deb565b005b610395600480360381019061039091906120af565b610e4d565b005b6060600480548060200260200160405190810160405280929190818152602001828054801561041b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116103d1575b5050505050905090565b6060600280546104349061213a565b80601f01602080910402602001604051908101604052809291908181526020018280546104609061213a565b80156104ad5780601f10610482576101008083540402835291602001916104ad565b820191906000526020600020905b81548152906001019060200180831161049057829003601f168201915b5050505050905090565b6000806104c2610e73565b90506104cf818585610e7b565b600191505092915050565b6000600154905090565b6000806104ef610e73565b90506104fc858285611046565b610529858585604051806020016040528060008152506040518060200160405280600081525060006110d2565b60019150509392505050565b60006012905090565b60006001905090565b610558610552610e73565b86610952565b610597576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058e906121de565b60405180910390fd5b6105a6858585858560016110d2565b5050505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b8073ffffffffffffffffffffffffffffffffffffffff16610614610e73565b73ffffffffffffffffffffffffffffffffffffffff16141561066b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066290612270565b60405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561075557600760006106c9610e73565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690556107f2565b600160066000610763610e73565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b6107fa610e73565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f960405160405180910390a350565b6060600380546108659061213a565b80601f01602080910402602001604051908101604052809291908181526020018280546108919061213a565b80156108de5780601f106108b3576101008083540402835291602001916108de565b820191906000526020600020905b8154815290600101906020018083116108c157829003601f168201915b5050505050905090565b61090d6108f3610e73565b8484846040518060200160405280600081525060016110d2565b505050565b600061094861091f610e73565b8484604051806020016040528060008152506040518060200160405280600081525060006110d2565b6001905092915050565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480610a6a5750600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168015610a695750600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b5b80610afb5750600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b905092915050565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610b92610e73565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c00576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf790612302565b60405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610cf357600160076000610c60610e73565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610d87565b60066000610cff610e73565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690555b610d8f610e73565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa160405160405180910390a350565b610dfc610df6610e73565b85610952565b610e3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e32906121de565b60405180910390fd5b610e47848484846111f2565b50505050565b610e6f610e58610e73565b8383604051806020016040528060008152506111f2565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610eeb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee290612394565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5290612426565b60405180910390fd5b80600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516110399190611ca7565b60405180910390a3505050565b60006110528484610b03565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146110cc57818110156110be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b590612492565b60405180910390fd5b6110cb8484848403610e7b565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415611142576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113990612524565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156111b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a9906125b6565b60405180910390fd5b60006111bc610e73565b90506111cc818888888888611445565b6111da8188888888886115bb565b6111e9818888888888886117d5565b50505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611262576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125990612648565b60405180910390fd5b600061126c610e73565b905061127d81866000878787611445565b61128a81866000876119b6565b60008060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905084811015611310576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611307906126da565b60405180910390fd5b8481036000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555084600160008282546113679190612729565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a40988787876040516113cf939291906127b2565b60405180910390a3600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef876040516114359190611ca7565b60405180910390a3505050505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe8956040518363ffffffff1660e01b81526004016114b692919061281f565b60206040518083038186803b1580156114ce57600080fd5b505afa1580156114e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611506919061285d565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146115b2578073ffffffffffffffffffffffffffffffffffffffff166375ab97828888888888886040518763ffffffff1660e01b815260040161157f9695949392919061288a565b600060405180830381600087803b15801561159957600080fd5b505af11580156115ad573d6000803e3d6000fd5b505050505b50505050505050565b6115c7868686866119b6565b60008060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508381101561164d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116449061296b565b60405180910390fd5b8381036000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550836000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116e0919061298b565b925050819055508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc8261467798787878760405161175f939291906127b2565b60405180910390a48473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040516117c49190611ca7565b60405180910390a350505050505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6040518363ffffffff1660e01b815260040161184692919061281f565b60206040518083038186803b15801561185e57600080fd5b505afa158015611872573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611896919061285d565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611945578073ffffffffffffffffffffffffffffffffffffffff166223de298989898989896040518763ffffffff1660e01b815260040161190e9695949392919061288a565b600060405180830381600087803b15801561192857600080fd5b505af115801561193c573d6000803e3d6000fd5b505050506119ac565b81156119ab5761196a8673ffffffffffffffffffffffffffffffffffffffff166119bc565b156119aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119a190612a79565b60405180910390fd5b5b5b5050505050505050565b50505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a3682611a0b565b9050919050565b611a4681611a2b565b82525050565b6000611a588383611a3d565b60208301905092915050565b6000602082019050919050565b6000611a7c826119df565b611a8681856119ea565b9350611a91836119fb565b8060005b83811015611ac2578151611aa98882611a4c565b9750611ab483611a64565b925050600181019050611a95565b5085935050505092915050565b60006020820190508181036000830152611ae98184611a71565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b2b578082015181840152602081019050611b10565b83811115611b3a576000848401525b50505050565b6000601f19601f8301169050919050565b6000611b5c82611af1565b611b668185611afc565b9350611b76818560208601611b0d565b611b7f81611b40565b840191505092915050565b60006020820190508181036000830152611ba48184611b51565b905092915050565b6000604051905090565b600080fd5b600080fd5b611bc981611a2b565b8114611bd457600080fd5b50565b600081359050611be681611bc0565b92915050565b6000819050919050565b611bff81611bec565b8114611c0a57600080fd5b50565b600081359050611c1c81611bf6565b92915050565b60008060408385031215611c3957611c38611bb6565b5b6000611c4785828601611bd7565b9250506020611c5885828601611c0d565b9150509250929050565b60008115159050919050565b611c7781611c62565b82525050565b6000602082019050611c926000830184611c6e565b92915050565b611ca181611bec565b82525050565b6000602082019050611cbc6000830184611c98565b92915050565b600080600060608486031215611cdb57611cda611bb6565b5b6000611ce986828701611bd7565b9350506020611cfa86828701611bd7565b9250506040611d0b86828701611c0d565b9150509250925092565b600060ff82169050919050565b611d2b81611d15565b82525050565b6000602082019050611d466000830184611d22565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611d8e82611b40565b810181811067ffffffffffffffff82111715611dad57611dac611d56565b5b80604052505050565b6000611dc0611bac565b9050611dcc8282611d85565b919050565b600067ffffffffffffffff821115611dec57611deb611d56565b5b611df582611b40565b9050602081019050919050565b82818337600083830152505050565b6000611e24611e1f84611dd1565b611db6565b905082815260208101848484011115611e4057611e3f611d51565b5b611e4b848285611e02565b509392505050565b600082601f830112611e6857611e67611d4c565b5b8135611e78848260208601611e11565b91505092915050565b600080600080600060a08688031215611e9d57611e9c611bb6565b5b6000611eab88828901611bd7565b9550506020611ebc88828901611bd7565b9450506040611ecd88828901611c0d565b935050606086013567ffffffffffffffff811115611eee57611eed611bbb565b5b611efa88828901611e53565b925050608086013567ffffffffffffffff811115611f1b57611f1a611bbb565b5b611f2788828901611e53565b9150509295509295909350565b600060208284031215611f4a57611f49611bb6565b5b6000611f5884828501611bd7565b91505092915050565b600080600060608486031215611f7a57611f79611bb6565b5b6000611f8886828701611bd7565b9350506020611f9986828701611c0d565b925050604084013567ffffffffffffffff811115611fba57611fb9611bbb565b5b611fc686828701611e53565b9150509250925092565b60008060408385031215611fe757611fe6611bb6565b5b6000611ff585828601611bd7565b925050602061200685828601611bd7565b9150509250929050565b6000806000806080858703121561202a57612029611bb6565b5b600061203887828801611bd7565b945050602061204987828801611c0d565b935050604085013567ffffffffffffffff81111561206a57612069611bbb565b5b61207687828801611e53565b925050606085013567ffffffffffffffff81111561209757612096611bbb565b5b6120a387828801611e53565b91505092959194509250565b600080604083850312156120c6576120c5611bb6565b5b60006120d485828601611c0d565b925050602083013567ffffffffffffffff8111156120f5576120f4611bbb565b5b61210185828601611e53565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061215257607f821691505b602082108114156121665761216561210b565b5b50919050565b7f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60008201527f7220666f7220686f6c6465720000000000000000000000000000000000000000602082015250565b60006121c8602c83611afc565b91506121d38261216c565b604082019050919050565b600060208201905081810360008301526121f7816121bb565b9050919050565b7f4552433737373a20617574686f72697a696e672073656c66206173206f70657260008201527f61746f7200000000000000000000000000000000000000000000000000000000602082015250565b600061225a602483611afc565b9150612265826121fe565b604082019050919050565b600060208201905081810360008301526122898161224d565b9050919050565b7f4552433737373a207265766f6b696e672073656c66206173206f70657261746f60008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006122ec602183611afc565b91506122f782612290565b604082019050919050565b6000602082019050818103600083015261231b816122df565b9050919050565b7f4552433737373a20617070726f76652066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061237e602583611afc565b915061238982612322565b604082019050919050565b600060208201905081810360008301526123ad81612371565b9050919050565b7f4552433737373a20617070726f766520746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000612410602383611afc565b915061241b826123b4565b604082019050919050565b6000602082019050818103600083015261243f81612403565b9050919050565b7f4552433737373a20696e73756666696369656e7420616c6c6f77616e63650000600082015250565b600061247c601e83611afc565b915061248782612446565b602082019050919050565b600060208201905081810360008301526124ab8161246f565b9050919050565b7f4552433737373a207472616e736665722066726f6d20746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061250e602683611afc565b9150612519826124b2565b604082019050919050565b6000602082019050818103600083015261253d81612501565b9050919050565b7f4552433737373a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006125a0602483611afc565b91506125ab82612544565b604082019050919050565b600060208201905081810360008301526125cf81612593565b9050919050565b7f4552433737373a206275726e2066726f6d20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000612632602283611afc565b915061263d826125d6565b604082019050919050565b6000602082019050818103600083015261266181612625565b9050919050565b7f4552433737373a206275726e20616d6f756e7420657863656564732062616c6160008201527f6e63650000000000000000000000000000000000000000000000000000000000602082015250565b60006126c4602383611afc565b91506126cf82612668565b604082019050919050565b600060208201905081810360008301526126f3816126b7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061273482611bec565b915061273f83611bec565b925082821015612752576127516126fa565b5b828203905092915050565b600081519050919050565b600082825260208201905092915050565b60006127848261275d565b61278e8185612768565b935061279e818560208601611b0d565b6127a781611b40565b840191505092915050565b60006060820190506127c76000830186611c98565b81810360208301526127d98185612779565b905081810360408301526127ed8184612779565b9050949350505050565b61280081611a2b565b82525050565b6000819050919050565b61281981612806565b82525050565b600060408201905061283460008301856127f7565b6128416020830184612810565b9392505050565b60008151905061285781611bc0565b92915050565b60006020828403121561287357612872611bb6565b5b600061288184828501612848565b91505092915050565b600060c08201905061289f60008301896127f7565b6128ac60208301886127f7565b6128b960408301876127f7565b6128c66060830186611c98565b81810360808301526128d88185612779565b905081810360a08301526128ec8184612779565b9050979650505050505050565b7f4552433737373a207472616e7366657220616d6f756e7420657863656564732060008201527f62616c616e636500000000000000000000000000000000000000000000000000602082015250565b6000612955602783611afc565b9150612960826128f9565b604082019050919050565b6000602082019050818103600083015261298481612948565b9050919050565b600061299682611bec565b91506129a183611bec565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156129d6576129d56126fa565b5b828201905092915050565b7f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460008201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60208201527f6b656e73526563697069656e7400000000000000000000000000000000000000604082015250565b6000612a63604d83611afc565b9150612a6e826129e1565b606082019050919050565b60006020820190508181036000830152612a9281612a56565b905091905056fea26469706673582212209baed0aaca8c29386fdc3365f0bf1c9cf05c69806f5bb16ba3ad89dff860901d64736f6c63430008090033";

type ERC777ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC777ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC777__factory extends ContractFactory {
  constructor(...args: ERC777ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    defaultOperators_: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC777> {
    return super.deploy(
      name_,
      symbol_,
      defaultOperators_,
      overrides || {}
    ) as Promise<ERC777>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    defaultOperators_: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      defaultOperators_,
      overrides || {}
    );
  }
  override attach(address: string): ERC777 {
    return super.attach(address) as ERC777;
  }
  override connect(signer: Signer): ERC777__factory {
    return super.connect(signer) as ERC777__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC777Interface {
    return new utils.Interface(_abi) as ERC777Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC777 {
    return new Contract(address, _abi, signerOrProvider) as ERC777;
  }
}
