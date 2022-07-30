declare module 'net.essentialsx.api.v2.services' {
import { UUID, Map } from 'java.util';
import { Void } from 'java.lang';
import { Entry } from 'net.essentialsx.api.v2.services.BalanceTop';
import { CompletableFuture } from 'java.util.concurrent';
import { BigDecimal } from 'java.math';
/**
 * A class which provides numerous methods to interact with Essentials' balance top calculations.
 * 
 * Note: Implementations of this class should be thread-safe and thus do not need to be called from the server thread.
*/
export class BalanceTop {
  /**
   * Re-calculates the balance top cache asynchronously.
   * 
   * This method will return a {@link CompletableFuture CompletableFuture<Void>} which
   * will be completed upon the recalculation of the balance top map.
   * After which you should run {@link BalanceTop#getBalanceTopCache()}
   * to get the newly updated cache
   *
   * @return A future which completes after the balance top cache has been calculated.
  */
  calculateBalanceTopMapAsync(): CompletableFuture<Void>;
  /**
   * Gets the balance top cache or an empty list if one has not been calculated yet. The balance top cache is a {@link Map}
   * which maps the UUID of the player to a {@link BalanceTop.Entry} object which stores the user's display name and balance.
   * The returned map is sorted by greatest to least wealth.
   * 
   * There is no guarantee the returned cache is up to date. The balancetop command is directly responsible for updating
   * this cache and does so every two minutes (if executed). See {@link BalanceTop#calculateBalanceTopMapAsync()} to
   * manually update this cache yourself.
   *
   * @return The balance top cache.
   * @see BalanceTop#calculateBalanceTopMapAsync()
  */
  getBalanceTopCache(): Map<UUID, Entry>;
  /**
   * Gets the epoch time (in mills.) that the baltop cache was last updated at. A value of zero indicates the cache
   * has not been calculated yet at all.
   *
   * @return The epoch time (in mills.) since last cache update or zero.
  */
  getCacheAge(): number;
  /**
   * Gets the total amount of money in the economy at the point of the last balance top cache calculation or returns zero
   * if no baltop calculation has been made as of yet.
   *
   * @return The total amount of money in the economy or zero.
   * @see BalanceTop#getCacheAge() to find last baltop cache calculation
  */
  getBalanceTopTotal(): BigDecimal;
  /**
   * Checks to see if {@link BalanceTop#calculateBalanceTopMapAsync()} is still in the process of calculating the map.
   *
   * @return true if the balance top cache is still in the process of being calculated, otherwise false.
  */
  isCacheLocked(): boolean;
}

}
declare module 'net.essentialsx.api.v2.services.BalanceTop' {
import { UUID } from 'java.util';
import { BigDecimal } from 'java.math';
/**
 * This class represents a user's name/balance in the balancetop cache.
*/
export class Entry {
  constructor(uuid: UUID, displayName: string, balance: BigDecimal);
  /**
   * Gets the UUID of the user.
   * @return The uuid of this user.
  */
  getUuid(): UUID;
  /**
   * Gets the display name of the user at the time of cache population.
   * @return The display name of this user.
  */
  getDisplayName(): string;
  /**
   * Gets the balance of the user at the time of cache population.
   * @return The balance of this user.
  */
  getBalance(): BigDecimal;
}

}
declare module 'net.essentialsx.api.v2.services.mail' {
import { UUID } from 'java.util';
/**
 * An entity which is allowed to send mail to an {@link net.ess3.api.IUser IUser}.
 *
 * In Essentials, IUser and Console are the entities that implement this interface.
*/
export class MailSender {
  /**
   * Gets the username of this {@link MailSender}.
   * @return The sender's username.
  */
  getName(): string;
  /**
   * Gets the {@link UUID} of this {@link MailSender} or null if this sender doesn't have a UUID.
   * @return The sender's {@link UUID} or null if N/A.
  */
  getUUID(): UUID;
}
/**
 * An immutable representation of a message sent as mail.
*/
export class MailMessage {
  constructor(read: boolean, legacy: boolean, sender: string, uuid: UUID, timestamp: number, expire: number, message: string);
  /**
   * Checks if this message has been read by its recipient yet.
   * @return true if this message has been read.
  */
  isRead(): boolean;
  /**
   * Checks if this message was created via legacy api or converted from legacy format.
   *
   * A legacy messages only contains data for the read state and message.
   * @see #isRead()
   * @see #getMessage()
   * @return true if this message is a legacy message.
  */
  isLegacy(): boolean;
  /**
   * Gets the sender's username at the time of sending the message.
   * @return The sender's username.
  */
  getSenderUsername(): string;
  /**
   * Gets the sender's {@link UUID} or null if the sender does not have a UUID.
   * @return The sender's {@link UUID} or null.
  */
  getSenderUUID(): UUID;
  /**
   * Gets the millisecond epoch time when the message was sent.
   * @return The epoch time when message was sent.
  */
  getTimeSent(): number;
  /**
   * Gets the millisecond epoch at which this message will expire and no longer been shown to the user.
   * @return The epoch time when the message will expire.
  */
  getTimeExpire(): number;
  /**
   * Gets the message content for normal mail or the entire mail format for legacy mail.
   * @see #isLegacy()
   * @return The mail content or format.
  */
  getMessage(): string;
  /**
   * Helper method to check if this mail has expired and should not been shown to the recipient.
   * @return true if this mail has expired.
  */
  isExpired(): boolean;
}
/**
 * This interface provides access to core Essentials mailing functions, allowing API users to send messages to {@link IUser IUser's }.
*/
export class MailService {

}

}
