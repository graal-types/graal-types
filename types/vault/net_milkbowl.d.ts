declare module 'net.milkbowl.vault.permission' {
import { Logger } from 'java.util.logging';
/**
 * The main Permission API - allows for group and player based permission tests
 *
*/
export class Permission {
  /**
   * Gets name of permission method
   * @return Name of Permission Method
  */
  getName(): string;
  /**
   * Checks if permission method is enabled.
   * @return Success or Failure
  */
  isEnabled(): boolean;
  /**
   * Returns if the permission system is or attempts to be compatible with super-perms.
   * @return True if this permission implementation works with super-perms
  */
  hasSuperPermsCompat(): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #playerHas(String, OfflinePlayer, String)} instead.
  */
  has(world: string, player: string, permission: string): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #playerHas(String, OfflinePlayer, String)} instead.
  */
  playerHas(world: string, player: string, permission: string): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #playerAdd(String, OfflinePlayer, String)} instead.
   * Add permission to a player.
   * Supports NULL value for World if the permission system registered supports global permissions.
   * But May return odd values if the servers registered permission system does not have a global permission store.
   * 
   * @param world World name
   * @param player Player name
   * @param permission Permission node
   * @return Success or Failure
  */
  playerAdd(world: string, player: string, permission: string): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #playerRemove(String, OfflinePlayer, String)} instead.
  */
  playerRemove(world: string, player: string, permission: string): boolean;
  /**
   * Checks if group has a permission node.
   * Supports NULL value for World if the permission system registered supports global permissions.
   * But May return odd values if the servers registered permission system does not have a global permission store.
   * 
   * @param world World name
   * @param group Group name
   * @param permission Permission node
   * @return Success or Failure
  */
  groupHas(world: string, group: string, permission: string): boolean;
  /**
   * Add permission to a group.
   * Supports NULL value for World if the permission system registered supports global permissions.
   * But May return odd values if the servers registered permission system does not have a global permission store.
   * 
   * @param world World name
   * @param group Group name
   * @param permission Permission node
   * @return Success or Failure
  */
  groupAdd(world: string, group: string, permission: string): boolean;
  /**
   * Remove permission from a group.
   * Supports NULL value for World if the permission system registered supports global permissions.
   * But May return odd values if the servers registered permission system does not have a global permission store.
   * 
   * @param world World name
   * @param group Group name
   * @param permission Permission node
   * @return Success or Failure
  */
  groupRemove(world: string, group: string, permission: string): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #playerInGroup(String, OfflinePlayer, String)} instead.
  */
  playerInGroup(world: string, player: string, group: string): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #playerAddGroup(String, OfflinePlayer, String)} instead.
  */
  playerAddGroup(world: string, player: string, group: string): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #playerRemoveGroup(String, OfflinePlayer, String)} instead.
  */
  playerRemoveGroup(world: string, player: string, group: string): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #getPlayerGroups(String, OfflinePlayer)} instead.
  */
  getPlayerGroups(world: string, player: string): string[];
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #getPrimaryGroup(String, OfflinePlayer)} instead.
  */
  getPrimaryGroup(world: string, player: string): string;
  /**
   * Returns a list of all known groups
   * @return an Array of String of all groups
  */
  getGroups(): string[];
  /**
   * Returns true if the given implementation supports groups.
   * @return true if the implementation supports groups
  */
  hasGroupSupport(): boolean;
}

}
declare module 'net.milkbowl.vault.economy.EconomyResponse' {
import { Enum } from 'java.lang';
/**
 * Enum for types of Responses indicating the status of a method call.
*/
export class ResponseType extends Enum<ResponseType> {
  static readonly SUCCESS: ResponseType;
  static readonly FAILURE: ResponseType;
  static readonly NOT_IMPLEMENTED: ResponseType;
  static valueOf(name: string): ResponseType;
  static values(): ResponseType[];
}

}
declare module 'net.milkbowl.vault.economy' {
import { List } from 'java.util';
import { ResponseType } from 'net.milkbowl.vault.economy.EconomyResponse';
/**
 * The main economy API
 *
*/
export class Economy {
  /**
   * Checks if economy method is enabled.
   * @return Success or Failure
  */
  isEnabled(): boolean;
  /**
   * Gets name of economy method
   * @return Name of Economy Method
  */
  getName(): string;
  /**
   * Returns true if the given implementation supports banks.
   * @return true if the implementation supports banks
  */
  hasBankSupport(): boolean;
  /**
   * Some economy plugins round off after a certain number of digits.
   * This function returns the number of digits the plugin keeps
   * or -1 if no rounding occurs.
   * @return number of digits after the decimal point kept
  */
  fractionalDigits(): number;
  /**
   * Format amount into a human readable String This provides translation into
   * economy specific formatting to improve consistency between plugins.  
   *
   * @param amount to format
   * @return Human readable string describing amount
  */
  format(amount: number): string;
  /**
   * Returns the name of the currency in plural form.
   * If the economy being used does not support currency names then an empty string will be returned.
   * 
   * @return name of the currency (plural)
  */
  currencyNamePlural(): string;
  /**
   * Returns the name of the currency in singular form.
   * If the economy being used does not support currency names then an empty string will be returned.
   * 
   * @return name of the currency (singular)
  */
  currencyNameSingular(): string;
  /**
   * 
   * @deprecated As of VaultAPI 1.4 use {@link #hasAccount(OfflinePlayer)} instead.
  */
  hasAccount(playerName: string): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #hasAccount(OfflinePlayer, String)} instead.
  */
  hasAccount(playerName: string, worldName: string): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #getBalance(OfflinePlayer)} instead.
  */
  getBalance(playerName: string): number;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #getBalance(OfflinePlayer, String)} instead.
  */
  getBalance(playerName: string, world: string): number;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #has(OfflinePlayer, double)} instead.
  */
  has(playerName: string, amount: number): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use @{link {@link #has(OfflinePlayer, String, double)} instead.
  */
  has(playerName: string, worldName: string, amount: number): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #withdrawPlayer(OfflinePlayer, double)} instead.
  */
  withdrawPlayer(playerName: string, amount: number): EconomyResponse;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #withdrawPlayer(OfflinePlayer, String, double)} instead.
  */
  withdrawPlayer(playerName: string, worldName: string, amount: number): EconomyResponse;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #depositPlayer(OfflinePlayer, double)} instead.
  */
  depositPlayer(playerName: string, amount: number): EconomyResponse;
  /**
   * @deprecated As of VaultAPI 1.4 use {@link #depositPlayer(OfflinePlayer, String, double)} instead.
  */
  depositPlayer(playerName: string, worldName: string, amount: number): EconomyResponse;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #createBank(String, OfflinePlayer)} instead.
  */
  createBank(name: string, player: string): EconomyResponse;
  /**
   * Deletes a bank account with the specified name.
   * @param name of the back to delete
   * @return if the operation completed successfully
  */
  deleteBank(name: string): EconomyResponse;
  /**
   * Returns the amount the bank has
   * @param name of the account
   * @return EconomyResponse Object
  */
  bankBalance(name: string): EconomyResponse;
  /**
   * Returns true or false whether the bank has the amount specified - DO NOT USE NEGATIVE AMOUNTS
   * 
   * @param name of the account
   * @param amount to check for
   * @return EconomyResponse Object
  */
  bankHas(name: string, amount: number): EconomyResponse;
  /**
   * Withdraw an amount from a bank account - DO NOT USE NEGATIVE AMOUNTS
   * 
   * @param name of the account
   * @param amount to withdraw
   * @return EconomyResponse Object
  */
  bankWithdraw(name: string, amount: number): EconomyResponse;
  /**
   * Deposit an amount into a bank account - DO NOT USE NEGATIVE AMOUNTS
   * 
   * @param name of the account
   * @param amount to deposit
   * @return EconomyResponse Object
  */
  bankDeposit(name: string, amount: number): EconomyResponse;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #isBankOwner(String, OfflinePlayer)} instead.
  */
  isBankOwner(name: string, playerName: string): EconomyResponse;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #isBankMember(String, OfflinePlayer)} instead.
  */
  isBankMember(name: string, playerName: string): EconomyResponse;
  /**
   * Gets the list of banks
   * @return the List of Banks
  */
  getBanks(): string[];
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #createPlayerAccount(OfflinePlayer)} instead.
  */
  createPlayerAccount(playerName: string): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #createPlayerAccount(OfflinePlayer, String)} instead.
  */
  createPlayerAccount(playerName: string, worldName: string): boolean;
}
/**
 * Indicates a typical Return for an Economy method.  
 * It includes a {@link ResponseType} indicating whether the plugin currently being used for Economy actually allows
 * the method, or if the operation was a success or failure.
 *
*/
export class EconomyResponse {
  /**
   * Amount modified by calling method
  */
  readonly amount: number;
  /**
   * New balance of account
  */
  readonly balance: number;
  /**
   * Success or failure of call. Using Enum of ResponseType to determine valid
   * outcomes
  */
  readonly type: ResponseType;
  /**
   * Error message if the variable 'type' is ResponseType.FAILURE
  */
  readonly errorMessage: string;
  /**
   * Constructor for EconomyResponse
   * @param amount Amount modified during operation
   * @param balance New balance of account
   * @param type Success or failure type of the operation
   * @param errorMessage Error message if necessary (commonly null)
  */
  constructor(amount: number, balance: number, type: ResponseType, errorMessage: string);
  /**
   * Checks if an operation was successful
   * @return Value
  */
  transactionSuccess(): boolean;
}
export class AbstractEconomy extends Economy {

}

}
declare module 'net.milkbowl.vault.chat' {
import { Permission } from 'net.milkbowl.vault.permission';
/**
 * The main Chat API - allows for Prefix/Suffix nodes along with generic Info nodes if the linked Chat system supports them
 *
*/
export class Chat {
  constructor(perms: Permission);
  /**
   * Gets name of permission method
   * @return Name of Permission Method
  */
  getName(): string;
  /**
   * Checks if permission method is enabled.
   * @return Success or Failure
  */
  isEnabled(): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #getPlayerPrefix(String, OfflinePlayer)} instead.
   * 
   * Get players prefix
   * @param world World name
   * @param player Player name
   * @return Prefix
  */
  getPlayerPrefix(world: string, player: string): string;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #setPlayerPrefix(String, OfflinePlayer, String)} instead.
   * 
   * Set players prefix
   * @param world World name
   * @param player Player name
   * @param prefix Prefix
  */
  setPlayerPrefix(world: string, player: string, prefix: string): void;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #getPlayerSuffix(String, OfflinePlayer)} instead.
   * 
   * Get players suffix
   * @param world World name
   * @param player Player name
   * @return Suffix
  */
  getPlayerSuffix(world: string, player: string): string;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #setPlayerSuffix(String, OfflinePlayer, String)} instead.
   * 
   * Set players suffix
   * @param world World name
   * @param player Player name
   * @param suffix Suffix
  */
  setPlayerSuffix(world: string, player: string, suffix: string): void;
  /**
   * Get group prefix
   * @param world World name
   * @param group Group name
   * @return Prefix
  */
  getGroupPrefix(world: string, group: string): string;
  /**
   * Set group prefix
   * @param world World name
   * @param group Group name
   * @param prefix Prefix
  */
  setGroupPrefix(world: string, group: string, prefix: string): void;
  /**
   * Get group suffix
   * @param world World name
   * @param group Group name
   * @return Suffix
  */
  getGroupSuffix(world: string, group: string): string;
  /**
   * Set group suffix
   * @param world World name
   * @param group Group name
   * @param suffix Suffix
  */
  setGroupSuffix(world: string, group: string, suffix: string): void;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #getPlayerInfoInteger(String, OfflinePlayer, String, int)} instead.
   * Get a players informational node (Integer) value
   * @param world World name
   * @param player Player name
   * @param node Permission node
   * @param defaultValue Default value
   * @return Value
  */
  getPlayerInfoInteger(world: string, player: string, node: string, defaultValue: number): number;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #setPlayerInfoInteger(String, OfflinePlayer, String, int)} instead.
   * 
   * Set a players informational node (Integer) value
   * @param world World name
   * @param player Player name
   * @param node Permission node
   * @param value Value to set
  */
  setPlayerInfoInteger(world: string, player: string, node: string, value: number): void;
  /**
   * Get a groups informational node (Integer) value
   * @param world World name
   * @param group Group name
   * @param node Permission node
   * @param defaultValue Default value
   * @return Value
  */
  getGroupInfoInteger(world: string, group: string, node: string, defaultValue: number): number;
  /**
   * Set a groups informational node (Integer) value
   * @param world World name
   * @param group Group name
   * @param node Permission node
   * @param value Value to set
  */
  setGroupInfoInteger(world: string, group: string, node: string, value: number): void;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #getPlayerInfoDouble(String, OfflinePlayer, String, double)} instead.
   * 
   * Get a players informational node (Double) value
   * @param world World name
   * @param player Player name
   * @param node Permission node
   * @param defaultValue Default value
   * @return Value
  */
  getPlayerInfoDouble(world: string, player: string, node: string, defaultValue: number): number;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #setPlayerInfoDouble(String, OfflinePlayer, String, double)} instead.
   * Set a players informational node (Double) value
   * @param world World name
   * @param player Player name
   * @param node Permission node
   * @param value Value to set
  */
  setPlayerInfoDouble(world: string, player: string, node: string, value: number): void;
  /**
   * Get a groups informational node (Double) value
   * @param world World name
   * @param group Group name
   * @param node Permission node
   * @param defaultValue Default value
   * @return Value
  */
  getGroupInfoDouble(world: string, group: string, node: string, defaultValue: number): number;
  /**
   * Set a groups informational node (Double) value
   * @param world World name
   * @param group Group name
   * @param node Permission node
   * @param value Value to set
  */
  setGroupInfoDouble(world: string, group: string, node: string, value: number): void;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #getPlayerInfoBoolean(String, OfflinePlayer, String, boolean)} instead.
   * 
   * Get a players informational node (Boolean) value
   * @param world World name
   * @param player Player name
   * @param node Permission node
   * @param defaultValue Default value
   * @return Value
  */
  getPlayerInfoBoolean(world: string, player: string, node: string, defaultValue: boolean): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #setPlayerInfoBoolean(String, OfflinePlayer, String, boolean)} instead.
   * Set a players informational node (Boolean) value
   * @param world World name
   * @param player Player name
   * @param node Permission node
   * @param value Value to set
  */
  setPlayerInfoBoolean(world: string, player: string, node: string, value: boolean): void;
  /**
   * Get a groups informational node (Boolean) value
   * @param world Name of World
   * @param group Name of Group
   * @param node Permission node
   * @param defaultValue Default value
   * @return Value
  */
  getGroupInfoBoolean(world: string, group: string, node: string, defaultValue: boolean): boolean;
  /**
   * Set a groups informational node (Boolean) value
   * @param world World name
   * @param group Group name
   * @param node Permission node
   * @param value Value to set
  */
  setGroupInfoBoolean(world: string, group: string, node: string, value: boolean): void;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #getPlayerInfoString(String, OfflinePlayer, String, String)} instead.
   *
   * Get a players informational node (String) value
   * @param world World name
   * @param player Player name
   * @param node Permission node
   * @param defaultValue Default value
   * @return Value
  */
  getPlayerInfoString(world: string, player: string, node: string, defaultValue: string): string;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #setPlayerInfoString(String, OfflinePlayer, String, String)} instead.
   * Set a players informational node (String) value
   * @param world World name
   * @param player Player name
   * @param node Permission node
   * @param value Value to set
  */
  setPlayerInfoString(world: string, player: string, node: string, value: string): void;
  /**
   * Get a groups informational node (String) value
   * @param world Name of World
   * @param group Name of Group
   * @param node Permission node
   * @param defaultValue Default value
   * @return Value
  */
  getGroupInfoString(world: string, group: string, node: string, defaultValue: string): string;
  /**
   * Set a groups informational node (String) value
   * @param world World name
   * @param group Group name
   * @param node Permission node
   * @param value Value to set
  */
  setGroupInfoString(world: string, group: string, node: string, value: string): void;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #playerInGroup(String, OfflinePlayer, String)} instead.
   * Check if player is member of a group.
   * @param world World name
   * @param player Player name
   * @param group Group name
   * @return Success or Failure
  */
  playerInGroup(world: string, player: string, group: string): boolean;
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #getPlayerGroups(String, OfflinePlayer)} instead.
   * Gets the list of groups that this player has
   * @param world World name
   * @param player Player name
   * @return Array of groups
  */
  getPlayerGroups(world: string, player: string): string[];
  /**
   * @deprecated As of VaultAPI 1.4 use {{@link #getPrimaryGroup(String, OfflinePlayer)} instead. 
   * Gets players primary group
   * @param world World name
   * @param player Player name
   * @return Players primary group
  */
  getPrimaryGroup(world: string, player: string): string;
  /**
   * Returns a list of all known groups
   * @return an Array of String of all groups
  */
  getGroups(): string[];
}

}
