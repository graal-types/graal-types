declare module 'net.ess3.api' {
import { Throwable, Exception } from 'java.lang';
/**
 * @deprecated This is unused - see {@link com.earth2me.essentials.api.UserDoesNotExistException}.
*/
export class UserDoesNotExistException extends Exception {
  constructor(name: string);
}
/**
 * @deprecated You should use {@link com.earth2me.essentials.api.NoLoanPermittedException} instead of this class.
*/
export class NoLoanPermittedException extends Exception {
  constructor();
}
/**
 * Fired when trying to teleport a user to an invalid world. This usually only occurs if a world has been removed from
 * the server and a player tries to teleport to a warp or home in that world.
*/
export class InvalidWorldException extends Exception {
  constructor(world: string);
  getWorld(): string;
}
/**
 * A namespaced key that uses plugins as namespaces.
*/
export class PluginKey {
  getKey(): string;
  hashCode(): number;
  toString(): string;
  equals(o: any): boolean;
}
/**
 * @deprecated This exception relates to the abandoned 3.x storage refactor and is not implemented.
*/
export class InvalidNameException extends Exception {
  constructor(thrwbl: Throwable);
}
/**
 * Thrown when a transaction would put the player's balance above the maximum balance allowed.
*/
export class MaxMoneyException extends Exception {
  constructor();
}

}
