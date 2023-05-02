/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface ShopInterface extends utils.Interface {
  functions: {
    "FEE()": FunctionFragment;
    "burnFromShop(uint256)": FunctionFragment;
    "buyTokensFromShop()": FunctionFragment;
    "getShopBalance()": FunctionFragment;
    "getTokenPriceForBuy()": FunctionFragment;
    "getTokenPriceForSell()": FunctionFragment;
    "mintToShop(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sellTokensToShop(uint256)": FunctionFragment;
    "setTokenPriceForBuy(uint256)": FunctionFragment;
    "setTokenPriceForSell(uint256)": FunctionFragment;
    "token()": FunctionFragment;
    "tokensReceived(address,address,address,uint256,bytes,bytes)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawAll()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FEE"
      | "burnFromShop"
      | "buyTokensFromShop"
      | "getShopBalance"
      | "getTokenPriceForBuy"
      | "getTokenPriceForSell"
      | "mintToShop"
      | "owner"
      | "renounceOwnership"
      | "sellTokensToShop"
      | "setTokenPriceForBuy"
      | "setTokenPriceForSell"
      | "token"
      | "tokensReceived"
      | "transferOwnership"
      | "withdrawAll"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "burnFromShop",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "buyTokensFromShop",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getShopBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenPriceForBuy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenPriceForSell",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintToShop",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sellTokensToShop",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenPriceForBuy",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenPriceForSell",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokensReceived",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAll",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "FEE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "burnFromShop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyTokensFromShop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getShopBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenPriceForBuy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenPriceForSell",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintToShop", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sellTokensToShop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenPriceForBuy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenPriceForSell",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokensReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAll",
    data: BytesLike
  ): Result;

  events: {
    "Burn(uint256,uint256)": EventFragment;
    "Buy(address,uint256,uint256,uint256)": EventFragment;
    "BuyPriceChange(uint256,uint256,uint256)": EventFragment;
    "Mint(uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Sell(address,uint256,uint256,uint256)": EventFragment;
    "SellPriceChange(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Buy"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BuyPriceChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sell"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SellPriceChange"): EventFragment;
}

export interface BurnEventObject {
  amount: BigNumber;
  timestamp: BigNumber;
}
export type BurnEvent = TypedEvent<[BigNumber, BigNumber], BurnEventObject>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface BuyEventObject {
  buyer: string;
  amount: BigNumber;
  price: BigNumber;
  timestamp: BigNumber;
}
export type BuyEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  BuyEventObject
>;

export type BuyEventFilter = TypedEventFilter<BuyEvent>;

export interface BuyPriceChangeEventObject {
  oldValue: BigNumber;
  newValue: BigNumber;
  timestamp: BigNumber;
}
export type BuyPriceChangeEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  BuyPriceChangeEventObject
>;

export type BuyPriceChangeEventFilter = TypedEventFilter<BuyPriceChangeEvent>;

export interface MintEventObject {
  amount: BigNumber;
  timestamp: BigNumber;
}
export type MintEvent = TypedEvent<[BigNumber, BigNumber], MintEventObject>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SellEventObject {
  seller: string;
  amount: BigNumber;
  price: BigNumber;
  timestamp: BigNumber;
}
export type SellEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  SellEventObject
>;

export type SellEventFilter = TypedEventFilter<SellEvent>;

export interface SellPriceChangeEventObject {
  oldValue: BigNumber;
  newValue: BigNumber;
  timestamp: BigNumber;
}
export type SellPriceChangeEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  SellPriceChangeEventObject
>;

export type SellPriceChangeEventFilter = TypedEventFilter<SellPriceChangeEvent>;

export interface Shop extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ShopInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    burnFromShop(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    buyTokensFromShop(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getShopBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTokenPriceForBuy(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTokenPriceForSell(overrides?: CallOverrides): Promise<[BigNumber]>;

    mintToShop(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sellTokensToShop(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTokenPriceForBuy(
      tokenPriceForBuy_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTokenPriceForSell(
      tokenPriceForSell_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    tokensReceived(
      operator: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operatorData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  FEE(overrides?: CallOverrides): Promise<BigNumber>;

  burnFromShop(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  buyTokensFromShop(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getShopBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getTokenPriceForBuy(overrides?: CallOverrides): Promise<BigNumber>;

  getTokenPriceForSell(overrides?: CallOverrides): Promise<BigNumber>;

  mintToShop(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sellTokensToShop(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTokenPriceForBuy(
    tokenPriceForBuy_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTokenPriceForSell(
    tokenPriceForSell_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  tokensReceived(
    operator: PromiseOrValue<string>,
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    operatorData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawAll(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    FEE(overrides?: CallOverrides): Promise<BigNumber>;

    burnFromShop(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    buyTokensFromShop(overrides?: CallOverrides): Promise<void>;

    getShopBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenPriceForBuy(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenPriceForSell(overrides?: CallOverrides): Promise<BigNumber>;

    mintToShop(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sellTokensToShop(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenPriceForBuy(
      tokenPriceForBuy_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenPriceForSell(
      tokenPriceForSell_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    tokensReceived(
      operator: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operatorData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAll(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Burn(uint256,uint256)"(amount?: null, timestamp?: null): BurnEventFilter;
    Burn(amount?: null, timestamp?: null): BurnEventFilter;

    "Buy(address,uint256,uint256,uint256)"(
      buyer?: PromiseOrValue<string> | null,
      amount?: null,
      price?: null,
      timestamp?: null
    ): BuyEventFilter;
    Buy(
      buyer?: PromiseOrValue<string> | null,
      amount?: null,
      price?: null,
      timestamp?: null
    ): BuyEventFilter;

    "BuyPriceChange(uint256,uint256,uint256)"(
      oldValue?: null,
      newValue?: null,
      timestamp?: null
    ): BuyPriceChangeEventFilter;
    BuyPriceChange(
      oldValue?: null,
      newValue?: null,
      timestamp?: null
    ): BuyPriceChangeEventFilter;

    "Mint(uint256,uint256)"(amount?: null, timestamp?: null): MintEventFilter;
    Mint(amount?: null, timestamp?: null): MintEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Sell(address,uint256,uint256,uint256)"(
      seller?: PromiseOrValue<string> | null,
      amount?: null,
      price?: null,
      timestamp?: null
    ): SellEventFilter;
    Sell(
      seller?: PromiseOrValue<string> | null,
      amount?: null,
      price?: null,
      timestamp?: null
    ): SellEventFilter;

    "SellPriceChange(uint256,uint256,uint256)"(
      oldValue?: null,
      newValue?: null,
      timestamp?: null
    ): SellPriceChangeEventFilter;
    SellPriceChange(
      oldValue?: null,
      newValue?: null,
      timestamp?: null
    ): SellPriceChangeEventFilter;
  };

  estimateGas: {
    FEE(overrides?: CallOverrides): Promise<BigNumber>;

    burnFromShop(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    buyTokensFromShop(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getShopBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenPriceForBuy(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenPriceForSell(overrides?: CallOverrides): Promise<BigNumber>;

    mintToShop(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sellTokensToShop(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTokenPriceForBuy(
      tokenPriceForBuy_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTokenPriceForSell(
      tokenPriceForSell_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    tokensReceived(
      operator: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operatorData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burnFromShop(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    buyTokensFromShop(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getShopBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenPriceForBuy(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenPriceForSell(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintToShop(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sellTokensToShop(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTokenPriceForBuy(
      tokenPriceForBuy_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTokenPriceForSell(
      tokenPriceForSell_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokensReceived(
      operator: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operatorData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}