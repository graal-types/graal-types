declare module 'io.papermc.paper.world' {
import { Map } from 'java.util';
import { Enum } from 'java.lang';
export class MoonPhase extends Enum<MoonPhase> {
  static readonly FULL_MOON: MoonPhase;
  static readonly WANING_GIBBOUS: MoonPhase;
  static readonly LAST_QUARTER: MoonPhase;
  static readonly WANING_CRESCENT: MoonPhase;
  static readonly NEW_MOON: MoonPhase;
  static readonly WAXING_CRESCENT: MoonPhase;
  static readonly FIRST_QUARTER: MoonPhase;
  static readonly WAXING_GIBBOUS: MoonPhase;
  static valueOf(name: string): MoonPhase;
  static values(): MoonPhase[];
  static getPhase(day: number): MoonPhase;
}

}
declare module 'io.papermc.paper.event.player' {
import { Component } from 'net.kyori.adventure.text';
import { PlayerCommandPreprocessEvent, PlayerEvent, PlayerAnimationEvent } from 'org.bukkit.event.player';
import { FailReason } from 'io.papermc.paper.event.player.PlayerBedFailEnterEvent';
import { ServerEvent } from 'org.bukkit.event.server';
import { Set } from 'java.util';
import { ItemFrameChangeAction } from 'io.papermc.paper.event.player.PlayerItemFrameChangeEvent';
import { PageChangeDirection } from 'io.papermc.paper.event.player.PlayerLecternPageChangeEvent';
import { Material } from 'org.bukkit';
import { MerchantRecipe, LoomInventory, StonecutterInventory, EquipmentSlot, StonecuttingRecipe, ItemStack } from 'org.bukkit.inventory';
import { PotionEffectType } from 'org.bukkit.potion';
import { PatternType } from 'org.bukkit.block.banner';
import { Block, Sign, Lectern } from 'org.bukkit.block';
import { ChatRenderer } from 'io.papermc.paper.chat';
import { SignedMessage } from 'net.kyori.adventure.chat';
import { Side } from 'org.bukkit.block.sign';
import { HandlerList, Cancellable } from 'org.bukkit.event';
import { Audience } from 'net.kyori.adventure.audience';
import { LivingEntity, Entity, Player, ItemFrame, AbstractVillager } from 'org.bukkit.entity';
export class PlayerArmSwingEvent extends PlayerAnimationEvent {
  constructor(player: Player, equipmentSlot: EquipmentSlot);
  /**
   * Returns the hand of the arm swing.
   *
   * @return the hand
  */
  getHand(): EquipmentSlot;
}
export class PlayerBedFailEnterEvent extends PlayerEvent {
  constructor(player: Player, failReason: FailReason, bed: Block, willExplode: boolean, message: Component | null);
  getFailReason(): FailReason;
  getBed(): Block;
  getWillExplode(): boolean;
  setWillExplode(willExplode: boolean): void;
  getMessage(): Component | null;
  setMessage(message: Component | null);
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Cancel this event.
   * 
   * NOTE: This does not cancel the player getting in the bed, but any messages/explosions
   * that may occur because of the interaction.
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerBedFailEnterEvent extends PlayerEvent, Cancellable {}
/**
 * Fired when a player receives an item cooldown.
*/
export class PlayerItemCooldownEvent extends PlayerEvent {
  constructor(player: Player, type: Material, cooldown: number);
  /**
   * Get the material affected by the cooldown.
   *
   * @return material affected by the cooldown
  */
  getType(): Material;
  /**
   * Gets the cooldown in ticks.
   *
   * @return cooldown in ticks
  */
  getCooldown(): number;
  /**
   * Sets the cooldown of the material in ticks.
   * Setting the cooldown to 0 results in removing an already existing cooldown for the material.
   *
   * @param cooldown cooldown in ticks, has to be a positive number
  */
  setCooldown(cooldown: number);
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerItemCooldownEvent extends PlayerEvent, Cancellable {}
/**
 * Called when a player places an item in or takes an item out of a flowerpot.
*/
export class PlayerFlowerPotManipulateEvent extends PlayerEvent {
  constructor(player: Player, flowerpot: Block, item: ItemStack, placing: boolean);
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  /**
   * Gets the flowerpot that is involved in this event.
   *
   * @return the flowerpot that is involved with this event
  */
  getFlowerpot(): Block;
  /**
   * Gets the item being placed, or taken from, the flower pot.
   * Check if placing with {@link #isPlacing()}.
   *
   * @return the item placed, or taken from, the flowerpot
  */
  getItem(): ItemStack;
  /**
   * Gets if the item is being placed into the flowerpot.
   *
   * @return if the item is being placed into the flowerpot
  */
  isPlacing(): boolean;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerFlowerPotManipulateEvent extends PlayerEvent, Cancellable {}
/**
 * Called when the player tries to attack an entity.
 *
 * This occurs before any of the damage logic, so cancelling this event
 * will prevent any sort of sounds from being played when attacking.
 *
 * This event will fire as cancelled for certain entities, with {@link PrePlayerAttackEntityEvent#willAttack()} being false
 * to indicate that this entity will not actually be attacked.
 * 
 * Note: there may be other factors (invulnerability, etc) that will prevent this entity from being attacked that this event will not cover
*/
export class PrePlayerAttackEntityEvent extends PlayerEvent {
  constructor(who: Player, attacked: Entity, willAttack: boolean);
  /**
   * Gets the entity that was attacked in this event.
   * @return entity that was attacked
  */
  getAttacked(): Entity;
  /**
   * Gets if this entity will be attacked normally.
   * Entities like falling sand will return false because
   * their entity type does not allow them to be attacked.
   * 
   * Note: there may be other factors (invulnerability, etc) that will prevent this entity from being attacked that this event will not cover
   * @return if the entity will actually be attacked
  */
  willAttack(): boolean;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets if this attack should be cancelled, note if {@link PrePlayerAttackEntityEvent#willAttack()} returns false
   * this event will always be cancelled.
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
}
export interface PrePlayerAttackEntityEvent extends PlayerEvent, Cancellable {}
/**
 * Called when a {@link Player} clicks a side on a sign that causes a command to run.
 * 
 * This command is run with elevated permissions which allows players to access commands on signs they wouldn't
 * normally be able to run.
*/
export class PlayerSignCommandPreprocessEvent extends PlayerCommandPreprocessEvent {
  constructor(player: Player, message: string, recipients: Set<Player>, sign: Sign, side: Side);
  /**
   * Gets the sign that the command originated from.
   *
   * @return the sign
  */
  getSign(): Sign;
  /**
   * Gets the side of the sign that the command originated from.
   *
   * @return the sign side
  */
  getSide(): Side;
}
/**
 * An event fired when a {@link Player} sends a chat message to the server.
 *
 * @deprecated Listening to this event forces chat to wait for the main thread, delaying chat messages. It is recommended to use {@link AsyncChatEvent} instead, wherever possible.
*/
export class ChatEvent extends AbstractChatEvent {
  constructor(player: Player, viewers: Set<Audience>, renderer: ChatRenderer, message: Component, originalMessage: Component, signedMessage: SignedMessage);
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Called when a player selects a banner patten in a loom inventory.
*/
export class PlayerLoomPatternSelectEvent extends PlayerEvent {
  constructor(player: Player, loomInventory: LoomInventory, patternType: PatternType);
  /**
   * Gets the loom inventory involved.
   *
   * @return the loom inventory
  */
  getLoomInventory(): LoomInventory;
  /**
   * Gets the pattern type selected.
   *
   * @return the pattern type
  */
  getPatternType(): PatternType;
  /**
   * Sets the pattern type selected.
   *
   * @param patternType the pattern type
  */
  setPatternType(patternType: PatternType);
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerLoomPatternSelectEvent extends PlayerEvent, Cancellable {}
/**
 * Is called when a {@link Player} untracks an {@link Entity}.
*/
export class PlayerUntrackEntityEvent extends PlayerEvent {
  constructor(player: Player, entity: Entity);
  static getHandlerList(): HandlerList;
  getHandlers(): HandlerList;
  /**
   * Gets the entity that will be untracked
   * @return the entity untracked
  */
  getEntity(): Entity;
}
/**
 * Called when a player has slept long enough
 * to count as passing the night/storm.
 * 
 * Cancelling this event will prevent the player from being counted as deeply sleeping
 * unless they exit and re-enter the bed.
*/
export class PlayerDeepSleepEvent extends PlayerEvent {
  constructor(player: Player);
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerDeepSleepEvent extends PlayerEvent, Cancellable {}
/**
 * Called when the server detects a player stopping using an item.
 * Examples of this are letting go of the interact button when holding a bow, an edible item, or a spyglass.
*/
export class PlayerStopUsingItemEvent extends PlayerEvent {
  constructor(player: Player, item: ItemStack, ticksHeldFor: number);
  /**
   * Gets the exact item the player is releasing
   *
   * @return ItemStack the exact item the player released
  */
  getItem(): ItemStack;
  /**
   * Gets the number of ticks the item was held for
   *
   * @return int the number of ticks the item was held for
  */
  getTicksHeldFor(): number;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Called when an {@link ItemFrame} is having an item rotated, added, or removed from it.
*/
export class PlayerItemFrameChangeEvent extends PlayerEvent {
  constructor(player: Player, itemFrame: ItemFrame, itemStack: ItemStack, action: ItemFrameChangeAction);
  /**
   * Gets the {@link ItemFrame} involved in this event.
   * @return the {@link ItemFrame}
  */
  getItemFrame(): ItemFrame;
  /**
   * Gets the {@link ItemStack} involved in this event.
   * This is the item being added, rotated, or removed from the {@link ItemFrame}.
   * If this method returns air, then the resulting item in the ItemFrame will be empty.
   * @return the {@link ItemStack} being added, rotated, or removed
  */
  getItemStack(): ItemStack;
  /**
   * Sets the {@link ItemStack} that this {@link ItemFrame} holds.
   * If null is provided, the ItemStack will become air and the result in the ItemFrame will be empty.
   * @param itemStack {@link ItemFrame} item
  */
  setItemStack(itemStack: ItemStack | null);
  /**
   * Gets the action that was performed on this {@link ItemFrame}.
   * @see ItemFrameChangeAction
   * @return action performed on the item frame in this event
  */
  getAction(): ItemFrameChangeAction;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerItemFrameChangeEvent extends PlayerEvent, Cancellable {}
/**
 * Is called when a {@link Player} tracks an {@link Entity}.
*/
export class PlayerTrackEntityEvent extends PlayerEvent {
  constructor(player: Player, entity: Entity);
  static getHandlerList(): HandlerList;
  getHandlers(): HandlerList;
  /**
   * Gets the entity that will be tracked
   *
   * @return the entity tracked
  */
  getEntity(): Entity;
}
/**
 * Called when a player trades with a villager or wandering trader
*/
export class PlayerTradeEvent extends PlayerPurchaseEvent {
  constructor(player: Player, villager: AbstractVillager, trade: MerchantRecipe, rewardExp: boolean, increaseTradeUses: boolean);
  /**
   * Gets the Villager or Wandering trader associated with this event
   * @return the villager or wandering trader
  */
  getVillager(): AbstractVillager;
}
/**
 * An abstract implementation of a chat event, handling shared logic.
*/
export class AbstractChatEvent extends PlayerEvent {
  /**
   * Gets a set of {@link Audience audiences} that this chat message will be displayed to.
   *
   * The set returned is not guaranteed to be mutable and may auto-populate
   * on access. Any listener accessing the returned set should be aware that
   * it may reduce performance for a lazy set implementation.
   *
   * Listeners should be aware that modifying the list may throw {@link
   * UnsupportedOperationException} if the event caller provides an
   * unmodifiable set.
   *
   * @return a set of {@link Audience audiences} who will receive the chat message
  */
  viewers(): Set<Audience>;
  /**
   * Sets the chat renderer.
   *
   * @param renderer the chat renderer
   * @throws NullPointerException if `renderer` is `null`
  */
  renderer(renderer: ChatRenderer): void;
  /**
   * Gets the chat renderer.
   *
   * @return the chat renderer
  */
  renderer(): ChatRenderer;
  /**
   * Gets the user-supplied message.
   * The return value will reflect changes made using {@link #message(Component)}.
   *
   * @return the user-supplied message
  */
  message(): Component;
  /**
   * Sets the user-supplied message.
   *
   * @param message the user-supplied message
   * @throws NullPointerException if `message` is `null`
  */
  message(message: Component): void;
  /**
   * Gets the original and unmodified user-supplied message.
   * The return value will not reflect changes made using
   * {@link #message(Component)}.
   *
   * @return the original user-supplied message
  */
  originalMessage(): Component;
  /**
   * Gets the signed message.
   * Changes made in this event will not update
   * the signed message.
   *
   * @return the signed message
  */
  signedMessage(): SignedMessage;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancelled: boolean): void;
}
export interface AbstractChatEvent extends PlayerEvent, Cancellable {}
/**
 * Called when a player sets the effect for a beacon
*/
export class PlayerChangeBeaconEffectEvent extends PlayerEvent {
  constructor(player: Player, primary: PotionEffectType | null, secondary: PotionEffectType | null, beacon: Block | null);
  /**
   * @return the primary effect
  */
  getPrimary(): PotionEffectType | null;
  /**
   * Sets the primary effect
   * 
   * NOTE: The primary effect still has to be one of the valid effects for a beacon.
   *
   * @param primary the primary effect
  */
  setPrimary(primary: PotionEffectType | null);
  /**
   * @return the secondary effect
  */
  getSecondary(): PotionEffectType | null;
  /**
   * Sets the secondary effect
   * 
   * This only has an effect when the beacon is able to accept a secondary effect.
   * NOTE: The secondary effect still has to be a valid effect for a beacon.
   *
   * @param secondary the secondary effect
  */
  setSecondary(secondary: PotionEffectType | null);
  /**
   * @return the beacon block associated with this event, or null if not found
  */
  getBeacon(): Block | null;
  /**
   * Gets if the item used to change the beacon will be consumed.
   * 
   * Independent of {@link #isCancelled()}. If the event is cancelled
   * the item will NOT be consumed.
   *
   * @return true if item will be consumed
  */
  willConsumeItem(): boolean;
  /**
   * Sets if the item used to change the beacon should be consumed.
   * 
   * Independent of {@link #isCancelled()}. If the event is cancelled
   * the item will NOT be consumed.
   *
   * @param consumeItem true if item should be consumed
  */
  setConsumeItem(consumeItem: boolean): void;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   * 
   * If a {@link PlayerChangeBeaconEffectEvent} is cancelled, the changes will
   * not take effect
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   * 
   * If cancelled, the item will NOT be consumed regardless of what {@link #willConsumeItem()} says
   * 
   * If a {@link PlayerChangeBeaconEffectEvent} is cancelled, the changes will not be applied
   * or saved.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerChangeBeaconEffectEvent extends PlayerEvent, Cancellable {}
/**
 * Called when a slot contents change in a player's inventory.
*/
export class PlayerInventorySlotChangeEvent extends PlayerEvent {
  constructor(player: Player, rawSlot: number, oldItemStack: ItemStack, newItemStack: ItemStack);
  /**
   * The raw slot number that was changed.
   *
   * @return The raw slot number.
  */
  getRawSlot(): number;
  /**
   * The slot number that was changed, ready for passing to
   * {@link Inventory#getItem(int)}. Note that there may be two slots with
   * the same slot number, since a view links two different inventories.
   * 
   * If no inventory is opened, internal crafting view is used for conversion.
   *
   * @return The slot number.
  */
  getSlot(): number;
  /**
   * Clone of ItemStack that was in the slot before the change.
   *
   * @return The old ItemStack in the slot.
  */
  getOldItemStack(): ItemStack;
  /**
   * Clone of ItemStack that is in the slot after the change.
   *
   * @return The new ItemStack in the slot.
  */
  getNewItemStack(): ItemStack;
  /**
   * Gets whether the slot change advancements will be triggered.
   *
   * @return Whether the slot change advancements will be triggered.
  */
  shouldTriggerAdvancements(): boolean;
  /**
   * Sets whether the slot change advancements will be triggered.
   *
   * @param triggerAdvancements Whether the slot change advancements will be triggered.
  */
  setShouldTriggerAdvancements(triggerAdvancements: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Called when a player trades with a standalone merchant GUI.
*/
export class PlayerPurchaseEvent extends PlayerEvent {
  constructor(player: Player, trade: MerchantRecipe, rewardExp: boolean, increaseTradeUses: boolean);
  /**
   * Gets the associated trade with this event
   * @return the trade
  */
  getTrade(): MerchantRecipe;
  /**
   * Sets the trade. This is then used to determine the next prices
   * @param trade the trade to use
  */
  setTrade(trade: MerchantRecipe);
  /**
   * @return will trade try to reward exp
  */
  isRewardingExp(): boolean;
  /**
   * Sets whether the trade will try to reward exp
   * @param rewardExp try to reward exp
  */
  setRewardExp(rewardExp: boolean): void;
  /**
   * @return whether or not the trade will count as a use of the trade
  */
  willIncreaseTradeUses(): boolean;
  /**
   * Sets whether or not the trade will count as a use
   * @param increaseTradeUses true to count/false to not count
  */
  setIncreaseTradeUses(increaseTradeUses: boolean): void;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerPurchaseEvent extends PlayerEvent, Cancellable {}
/**
 * An event fired when a {@link Player} sends a chat message to the server.
*/
export class AsyncChatEvent extends AbstractChatEvent {
  constructor(async: boolean, player: Player, viewers: Set<Audience>, renderer: ChatRenderer, message: Component, originalMessage: Component, signedMessage: SignedMessage);
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export class AsyncChatCommandDecorateEvent extends AsyncChatDecorateEvent {
  constructor(async: boolean, player: Player | null, originalMessage: Component, result: Component);
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export class PlayerStonecutterRecipeSelectEvent extends PlayerEvent {
  constructor(player: Player, stonecutterInventory: StonecutterInventory, stonecuttingRecipe: StonecuttingRecipe);
  getStonecutterInventory(): StonecutterInventory;
  getStonecuttingRecipe(): StonecuttingRecipe;
  setStonecuttingRecipe(stonecuttingRecipe: StonecuttingRecipe);
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerStonecutterRecipeSelectEvent extends PlayerEvent, Cancellable {}
export class PlayerLecternPageChangeEvent extends PlayerEvent {
  constructor(player: Player, lectern: Lectern, book: ItemStack, pageChangeDirection: PageChangeDirection, oldPage: number, newPage: number);
  /**
   * Gets the lectern involved.
   *
   * @return the Lectern
  */
  getLectern(): Lectern;
  /**
   * Gets the current ItemStack on the lectern.
   *
   * @return the ItemStack on the Lectern
  */
  getBook(): ItemStack;
  /**
   * Gets the page change direction. This is essentially returns which button the player clicked, left or right.
   *
   * @return the page change direction
  */
  getPageChangeDirection(): PageChangeDirection;
  /**
   * Gets the page changed from. Pages are 0-indexed.
   *
   * @return the page changed from
  */
  getOldPage(): number;
  /**
   * Gets the page changed to. Pages are 0-indexed.
   *
   * @return the page changed to
  */
  getNewPage(): number;
  /**
   * Sets the page changed to. Pages are 0-indexed.
   * Page indices that are greater than the number of pages will show the last page.
   *
   * @param newPage the new paged changed to
  */
  setNewPage(newPage: number);
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerLecternPageChangeEvent extends PlayerEvent, Cancellable {}
/**
 * Called when the player is attempting to rename a mob
*/
export class PlayerNameEntityEvent extends PlayerEvent {
  constructor(player: Player, entity: LivingEntity, name: Component, persistent: boolean);
  /**
   * Gets the name to be given to the entity.
   * @return the name
  */
  getName(): Component | null;
  /**
   * Sets the name to be given to the entity.
   *
   * @param name the name
  */
  setName(name: Component | null);
  /**
   * Gets the entity involved in this event.
   *
   * @return the entity
  */
  getEntity(): LivingEntity;
  /**
   * Sets the entity involved in this event.
   *
   * @param entity the entity
  */
  setEntity(entity: LivingEntity);
  /**
   * Gets whether this will set the mob to be persistent.
   *
   * @return persistent
  */
  isPersistent(): boolean;
  /**
   * Sets whether this will set the mob to be persistent.
   *
   * @param persistent persistent
  */
  setPersistent(persistent: boolean): void;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerNameEntityEvent extends PlayerEvent, Cancellable {}
/**
 * This event is fired when the server decorates a component for chat purposes. This is called
 * before {@link AsyncChatEvent} and the other chat events. It is recommended that you modify the
 * message here, and use the chat events for modifying receivers and later the chat type. If you
 * want to keep the message as "signed" for the clients who get it, be sure to include the entire
 * original message somewhere in the final message.
 * @see AsyncChatCommandDecorateEvent for the decoration of messages sent via commands
*/
export class AsyncChatDecorateEvent extends ServerEvent {
  constructor(async: boolean, player: Player | null, originalMessage: Component, result: Component);
  /**
   * Gets the player (if available) associated with this event.
   * 
   * Certain commands request decorations without a player context
   * which is why this is possibly null.
   *
   * @return the player or null
  */
  player(): Player | null;
  /**
   * Gets the original decoration input
   *
   * @return the input
  */
  originalMessage(): Component;
  /**
   * Gets the decoration result. This may already be different from
   * {@link #originalMessage()} if some other listener to this event
   * OR the legacy preview event ({@link org.bukkit.event.player.AsyncPlayerChatPreviewEvent}
   * changed the result.
   *
   * @return the result
  */
  result(): Component;
  /**
   * Sets the resulting decorated component.
   *
   * @param result the result
  */
  result(result: Component): void;
  /**
   * If this decorating is part of a preview request/response.
   *
   * @return true if part of previewing
   * @deprecated chat preview was removed in 1.19.3
  */
  isPreview(): boolean;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * A cancelled decorating event means that no changes to the result component
   * will have any effect. The decorated component will be equal to the original
   * component.
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface AsyncChatDecorateEvent extends ServerEvent, Cancellable {}

}
declare module 'io.papermc.paper.util' {
import { ClassLoader, Class } from 'java.lang';
import { Duration } from 'java.time';
import { AbstractList, Iterator, RandomAccess, List, ListIterator, Map } from 'java.util';
import { Manifest } from 'java.util.jar';
import { Temporal, TemporalUnit } from 'java.time.temporal';
import { Function, Predicate } from 'java.util.function';
/**
 * Modified version of the Guava class with the same name to support add operations.
 *
 * @param  backing list element type
 * @param  transformed list element type
*/
export class TransformingRandomAccessList<F, T> extends AbstractList<T> {
  /**
   * Create a new {@link TransformingRandomAccessList}.
   *
   * @param fromList     backing list
   * @param toFunction   function mapping backing list element type to transformed list element type
   * @param fromFunction function mapping transformed list element type to backing list element type
  */
  constructor(fromList: F[], toFunction: Function<any, T>, fromFunction: Function<any, F>);
  clear(): void;
  get(index: number): T;
  iterator(): Iterator<T>;
  listIterator(index: number): ListIterator<T>;
  isEmpty(): boolean;
  removeIf(filter: Predicate<any>): boolean;
  remove(index: number): T;
  size(): number;
  set(i: number, t: T): T;
  add(i: number, t: T): void;
}
export interface TransformingRandomAccessList<F, T> extends AbstractList<T>, RandomAccess {}
export class JarManifests {
  static manifest(clazz: Class<any>): Manifest | null;
}
/**
 * A TemporalUnit that represents the target length of one server tick. This is defined
 * as 50 milliseconds. Note that this class is not for measuring the length that a tick
 * took, rather it is used for simple conversion between times and ticks.
 * @see #tick()
*/
export class Tick extends TemporalUnit {
  /**
   * Gets the instance of the tick temporal unit.
   * @return the tick instance
  */
  static tick(): Tick;
  /**
   * Creates a duration from an amount of ticks. This is shorthand for
   * {@link Duration#of(long, TemporalUnit)} called with the amount of ticks and
   * {@link #tick()}.
   * @param ticks the amount of ticks
   * @return the duration
  */
  static of(ticks: number): Duration;
  /**
   * Gets the number of whole ticks that occur in the provided duration. Note that this
   * method returns an `int` as this is the unit that Minecraft stores ticks in.
   * @param duration the duration
   * @return the number of whole ticks in this duration
   * @throws ArithmeticException if the duration is zero or an overflow occurs
  */
  fromDuration(duration: Duration): number;
  getDuration(): Duration;
  isDurationEstimated(): boolean;
  isDateBased(): boolean;
  isTimeBased(): boolean;
  addTo<R>(temporal: R, amount: number): R;
  between(start: Temporal, end: Temporal): number;
}

}
declare module 'io.papermc.paper.enchantments' {
import { Enum } from 'java.lang';
export class EnchantmentRarity extends Enum<EnchantmentRarity> {
  static readonly COMMON: EnchantmentRarity;
  static readonly UNCOMMON: EnchantmentRarity;
  static readonly RARE: EnchantmentRarity;
  static readonly VERY_RARE: EnchantmentRarity;
  static valueOf(name: string): EnchantmentRarity;
  static values(): EnchantmentRarity[];
  /**
   * Gets the weight for the rarity.
   *
   * @return the weight
  */
  getWeight(): number;
}

}
declare module 'io.papermc.paper.plugin.configuration' {
import { List } from 'java.util';
import { PluginLoadOrder } from 'org.bukkit.plugin';
import { PermissionDefault, Permission } from 'org.bukkit.permissions';
/**
 * This class acts as an abstraction for a plugin configuration.
*/
export class PluginMeta {
  /**
   * Provides the name of the plugin. This name uniquely identifies the plugin amongst all loaded plugins on the
   * server.
   * 
   * Will only contain alphanumeric characters, underscores, hyphens,
   *     and periods: [a-zA-Z0-9_\-\.].
   * Typically used for identifying the plugin data folder.
   * The name also acts as the token referenced in {@link #getPluginDependencies()},
   * {@link #getPluginSoftDependencies()}, and {@link #getLoadBeforePlugins()}.
   * 
   * 
   * In the plugin.yml, this entry is named name.
   * 
   * Example:name: MyPlugin
   *
   * @return the name of the plugin
  */
  getName(): string;
  /**
   * Returns the display name of the plugin, including the version.
   *
   * @return a descriptive name of the plugin and respective version
  */
  getDisplayName(): string;
  /**
   * Provides the fully qualified class name of the main class for the plugin.
   * A subtype of {@link JavaPlugin} is expected at this location.
   *
   * @return the fully qualified class name of the plugin's main class.
  */
  getMainClass(): string;
  /**
   * Returns the phase of the server startup logic that the plugin should be loaded.
   *
   * @return the plugin load order
   * @see PluginLoadOrder for further details regards the available load orders.
  */
  getLoadOrder(): PluginLoadOrder;
  /**
   * Provides the version of this plugin as defined by the plugin.
   * There is no inherit format defined/enforced for the version of a plugin, however a common approach
   * might be schematic versioning.
   *
   * @return the string representation of the plugin's version
  */
  getVersion(): string;
  /**
   * Provides the prefix that should be used for the plugin logger.
   * The logger prefix allows plugins to overwrite the usual default of the logger prefix, which is the name of the
   * plugin.
   *
   * @return the specific overwrite of the logger prefix as defined by the plugin. If the plugin did not define a
   *     custom logger prefix, this method will return null
  */
  getLoggerPrefix(): string | null;
  /**
   * Provides a list of dependencies that are required for this plugin to load.
   * The list holds the unique identifiers, following the constraints laid out in {@link #getName()}, of the
   * dependencies.
   * 
   * If any of the dependencies defined by this list are not installed on the server, this plugin will fail to load.
   *
   * @return an immutable list of required dependency names
  */
  getPluginDependencies(): string[];
  /**
   * Provides a list of dependencies that are used but not required by this plugin.
   * The list holds the unique identifiers, following the constraints laid out in {@link #getName()}, of the soft
   * dependencies.
   * 
   * If these dependencies are installed on the server, they will be loaded first and supplied as dependencies to this
   * plugin, however the plugin will load even if these dependencies are not installed.
   *
   * @return immutable list of soft dependencies
  */
  getPluginSoftDependencies(): string[];
  /**
   * Provides a list of plugins that should be loaded before this plugin is loaded.
   * The list holds the unique identifiers, following the constraints laid out in {@link #getName()}, of the
   * plugins that should be loaded before the plugin described by this plugin meta.
   * 
   * The plugins referenced in the list provided by this method are not considered dependencies of this plugin and
   * are hence not available to the plugin at runtime. They merely load before this plugin.
   *
   * @return immutable list of plugins to load before this plugin
  */
  getLoadBeforePlugins(): string[];
  /**
   * Returns the list of plugins/dependencies that this plugin provides.
   * The list holds the unique identifiers, following the constraints laid out in {@link #getName()}, for each plugin
   * it provides the expected classes for.
   *
   * @return immutable list of provided plugins/dependencies
  */
  getProvidedPlugins(): string[];
  /**
   * Provides the list of authors that are credited with creating this plugin.
   * The author names are in no particular format.
   *
   * @return an immutable list of the plugin's authors
  */
  getAuthors(): string[];
  /**
   * Provides a list of contributors that contributed to the plugin but are not considered authors.
   * The names of the contributors are in no particular format.
   *
   * @return an immutable list of the plugin's contributors
  */
  getContributors(): string[];
  /**
   * Gives a human-friendly description of the functionality the plugin
   * provides.
   *
   * @return description or null if the plugin did not define a human readable description.
  */
  getDescription(): string | null;
  /**
   * Provides the website for the plugin or the plugin's author.
   * The defined string value is not guaranteed to be in the form of a url.
   *
   * @return a string representation of the website that serves as the main hub for this plugin/its author.
  */
  getWebsite(): string | null;
  getPermissions(): Permission[];
  getPermissionDefault(): PermissionDefault;
  /**
   * Gets the api version that this plugin supports.
   * Nullable if this version is not specified, and should be
   * considered legacy (spigot plugins only)
   *
   * @return the version string made up of the major and minor version (e.g. 1.18 or 1.19). Minor versions like 1.18.2
   * are unified to their major release version (in this example 1.18)
  */
  getAPIVersion(): string | null;
}

}
declare module 'io.papermc.paper.datapack.Datapack' {
import { Enum } from 'java.lang';
export class Compatibility extends Enum<Compatibility> {
  static readonly TOO_OLD: Compatibility;
  static readonly TOO_NEW: Compatibility;
  static readonly COMPATIBLE: Compatibility;
  static valueOf(name: string): Compatibility;
  static values(): Compatibility[];
}

}
declare module 'io.papermc.paper.event.player.PlayerBedFailEnterEvent' {
import { Enum } from 'java.lang';
export class FailReason extends Enum<FailReason> {
  /**
   * The world doesn't allow sleeping (ex. Nether or The End). Entering
   * the bed is prevented and the bed explodes.
  */
  static readonly NOT_POSSIBLE_HERE: FailReason;
  /**
   * Entering the bed is prevented due to it not being night nor
   * thundering currently.
   * 
   * If the event is forcefully allowed during daytime, the player will
   * enter the bed (and set its bed location), but might get immediately
   * thrown out again.
  */
  static readonly NOT_POSSIBLE_NOW: FailReason;
  /**
   * Entering the bed is prevented due to the player being too far away.
  */
  static readonly TOO_FAR_AWAY: FailReason;
  /**
   * Bed is obstructed.
  */
  static readonly OBSTRUCTED: FailReason;
  /**
   * Entering the bed is prevented due to there being some other problem.
  */
  static readonly OTHER_PROBLEM: FailReason;
  /**
   * Entering the bed is prevented due to there being monsters nearby.
  */
  static readonly NOT_SAFE: FailReason;
  static valueOf(name: string): FailReason;
  static values(): FailReason[];
  static readonly VALUES: FailReason[];
}

}
declare module 'io.papermc.paper.plugin.loader.library' {
import { RuntimeException, Exception } from 'java.lang';
import { Path } from 'java.nio.file';
/**
 * The classpath library interface represents libraries that are capable of registering themselves via
 * {@link #register(LibraryStore)} on any given {@link LibraryStore}.
*/
export class ClassPathLibrary {
  /**
   * Called to register the library this class path library represents into the passed library store.
   * This method may either be implemented by the plugins themselves if they need complex logic, or existing
   * API exposed implementations of this interface may be used.
   *
   * @param store the library store instance to register this library into
   * @throws LibraryLoadingException if library loading failed for this classpath library
  */
  register(store: LibraryStore): void;
}
/**
 * Represents a storage that stores library jars.
 * 
 * The library store api allows plugins to register specific dependencies into their runtime classloader when their
 * {@link io.papermc.paper.plugin.loader.PluginLoader} is processed.
 *
 * @see io.papermc.paper.plugin.loader.PluginLoader
*/
export class LibraryStore {
  /**
   * Adds the provided library path to this library store.
   *
   * @param library path to the libraries jar file on the disk
  */
  addLibrary(library: Path): void;
}
/**
 * Indicates that an exception has occured while loading a library.
*/
export class LibraryLoadingException extends RuntimeException {
  constructor(s: string);
  constructor(s: string, e: Exception);
}

}
declare module 'io.papermc.paper.plugin.loader' {
import { PluginProviderContext } from 'io.papermc.paper.plugin.bootstrap';
import { ClassPathLibrary } from 'io.papermc.paper.plugin.loader.library';
/**
 * A mutable builder that may be used to collect and register all {@link ClassPathLibrary} instances a
 * {@link PluginLoader} aims to provide to its plugin at runtime.
*/
export class PluginClasspathBuilder {
  /**
   * Adds a new classpath library to this classpath builder.
   * 
   * As a builder, this method does not invoke {@link ClassPathLibrary#register(LibraryStore)} and
   * may hence be run without invoking potential IO performed by a {@link ClassPathLibrary} during resolution.
   * 
   * The paper api provides pre implemented {@link ClassPathLibrary} types that allow easy inclusion of existing
   * libraries on disk or on remote maven repositories.
   *
   * @param classPathLibrary the library instance to add to this builder
   * @return self
   * @see io.papermc.paper.plugin.loader.library.impl.JarLibrary
   * @see io.papermc.paper.plugin.loader.library.impl.MavenLibraryResolver
  */
  addLibrary(classPathLibrary: ClassPathLibrary): PluginClasspathBuilder;
  getContext(): PluginProviderContext;
}
/**
 * A plugin loader is responsible for creating certain aspects of a plugin before it is created.
 * 
 * The goal of the plugin loader is the creation of an expected/dynamic environment for the plugin to load into.
 * This, as of right now, only applies to creating the expected classpath for the plugin, e.g. supplying external
 * libraries to the plugin.
 * 
 * It should be noted that this class will be called from a different classloader, this will cause any static values
 * set in this class/any other classes loaded not to persist when the plugin loads.
*/
export class PluginLoader {
  /**
   * Called by the server to allows plugins to configure the runtime classpath that the plugin is run on.
   * This allows plugin loaders to configure dependencies for the plugin where jars can be downloaded or
   * provided during runtime.
   *
   * @param classpathBuilder a mutable classpath builder that may be used to register custom runtime dependencies
   *                         for the plugin the loader was registered for.
  */
  classloader(classpathBuilder: PluginClasspathBuilder): void;
}

}
declare module 'io.papermc.paper.event.block' {
import { PlayerEvent } from 'org.bukkit.event.player';
import { Component } from 'net.kyori.adventure.text';
import { List } from 'java.util';
import { BlockState, BlockFace, Beacon, Block } from 'org.bukkit.block';
import { DragonBattle } from 'org.bukkit.boss';
import { ProjectileHitEvent } from 'org.bukkit.event.entity';
import { LockableTileState } from 'io.papermc.paper.block';
import { Sound } from 'net.kyori.adventure.sound';
import { HandlerList, Cancellable } from 'org.bukkit.event';
import { Result } from 'org.bukkit.event.Event';
import { BellRingEvent as org_bukkit_event_block_BellRingEvent, BlockFormEvent, BlockEvent } from 'org.bukkit.event.block';
import { EquipmentSlot, ItemStack } from 'org.bukkit.inventory';
import { Entity, Raider, Player, Projectile } from 'org.bukkit.entity';
/**
 * Called when a bell is rung.
 * @deprecated use {@link org.bukkit.event.block.BellRingEvent}
*/
export class BellRingEvent extends org_bukkit_event_block_BellRingEvent {
  constructor(block: Block, direction: BlockFace, entity: Entity | null);
}
export interface BellRingEvent extends org_bukkit_event_block_BellRingEvent, Cancellable {}
/**
 * Called when a block forces another block to break and drop items.
 * 
 * Currently called for piston's and liquid flows.
*/
export class BlockBreakBlockEvent extends BlockEvent {
  constructor(block: Block, source: Block, drops: ItemStack[]);
  /**
   * Get the drops of this event
   *
   * @return the drops
  */
  getDrops(): ItemStack[];
  /**
   * Gets the block that cause this (e.g. a piston, or adjacent liquid)
   *
   * @return the source
  */
  getSource(): Block;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Called when a block tries to dispense an item, but its inventory is empty.
*/
export class BlockFailedDispenseEvent extends BlockEvent {
  constructor(theBlock: Block);
  /**
   * @return if the effect should be played
  */
  shouldPlayEffect(): boolean;
  /**
   * Sets if the effect for empty dispensers should be played
   *
   * @param playEffect if the effect should be played
  */
  shouldPlayEffect(playEffect: boolean): void;
  /**
   * {@inheritDoc}
   *
   * @return {@link #shouldPlayEffect()}
  */
  callEvent(): boolean;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Called when a beacon is deactivated, either because its base block(s) or itself were destroyed.
*/
export class BeaconDeactivatedEvent extends BlockEvent {
  constructor(block: Block);
  /**
   * Returns the beacon that was deactivated.
   * This will return null if the beacon does not exist.
   * (which can occur after the deactivation of a now broken beacon)
   *
   * @return The beacon that got deactivated, or null if it does not exist.
  */
  getBeacon(): Beacon | null;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Called when a beacon is activated.
 * Activation occurs when the beacon beam becomes visible.
*/
export class BeaconActivatedEvent extends BlockEvent {
  constructor(block: Block);
  /**
   * Returns the beacon that was activated.
   *
   * @return the beacon that was activated.
  */
  getBeacon(): Beacon;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export class BlockPreDispenseEvent extends BlockEvent {
  constructor(block: Block, itemStack: ItemStack, slot: number);
  /**
   * Gets the {@link ItemStack} to be dispensed.
   *
   * @return The item to be dispensed
  */
  getItemStack(): ItemStack;
  /**
   * Gets the inventory slot of the dispenser to dispense from.
   *
   * @return The inventory slot
  */
  getSlot(): number;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
}
export interface BlockPreDispenseEvent extends BlockEvent, Cancellable {}
/**
 * Called when an item is about to be composted by a hopper.
 * To prevent hoppers from moving items into composters, cancel the {@link InventoryMoveItemEvent}.
*/
export class CompostItemEvent extends BlockEvent {
  constructor(composter: Block, item: ItemStack, willRaiseLevel: boolean);
  /**
   * Gets the item that was used on the composter.
   *
   * @return the item
  */
  getItem(): ItemStack;
  /**
   * Gets whether the composter will rise a level.
   *
   * @return true if successful
  */
  willRaiseLevel(): boolean;
  /**
   * Sets whether the composter will rise a level.
   *
   * @param willRaiseLevel true if the composter should rise a level
  */
  setWillRaiseLevel(willRaiseLevel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Called when a {@link org.bukkit.entity.Raider} is revealed by a bell.
 * @deprecated use {@link org.bukkit.event.block.BellResonateEvent}
*/
export class BellRevealRaiderEvent extends BlockEvent {
  constructor(theBlock: Block, raider: Entity);
  /**
   * Gets the raider that the bell revealed.
   *
   * @return The raider
  */
  getEntity(): Raider;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * {@inheritDoc}
   * 
   * This does not cancel the particle effects shown on the bell, only the entity.
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface BellRevealRaiderEvent extends BlockEvent, Cancellable {}
/**
 * Called when a player uses sheers on a block.
 * 
 * This event is not called when breaking blocks with shears but instead only when a
 * player uses the sheer item on a block to garner drops from said block and/or change its state.
 * 
 * Examples include shearing a pumpkin to turn it into a carved pumpkin or shearing a beehive to get honeycomb.
*/
export class PlayerShearBlockEvent extends PlayerEvent {
  constructor(who: Player, block: Block, item: ItemStack, hand: EquipmentSlot, drops: ItemStack[]);
  /**
   * Gets the block being sheared in this event.
   *
   * @return The {@link Block} which block is being sheared in this event.
  */
  getBlock(): Block;
  /**
   * Gets the item used to shear the block.
   *
   * @return The {@link ItemStack} of the shears.
  */
  getItem(): ItemStack;
  /**
   * Gets the hand used to shear the block.
   *
   * @return Either {@link EquipmentSlot#HAND} OR {@link EquipmentSlot#OFF_HAND}.
  */
  getHand(): EquipmentSlot;
  /**
   * Gets the resulting drops of this event.
   *
   * @return A {@link List list} of {@link ItemStack items} that will be dropped as result of this event.
  */
  getDrops(): ItemStack[];
  /**
   * Gets whether the shearing of the block should be cancelled or not.
   *
   * @return Whether the shearing of the block should be cancelled or not.
  */
  isCancelled(): boolean;
  /**
   * Sets whether the shearing of the block should be cancelled or not.
   *
   * @param cancel whether the shearing of the block should be cancelled or not.
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerShearBlockEvent extends PlayerEvent, Cancellable {}
/**
 * Called when the server tries to check the lock on a lockable tile entity.
 * @see #setResult(Result) to change behavior
*/
export class BlockLockCheckEvent extends BlockEvent {
  constructor(block: Block, state: LockableTileState, player: Player, lockedMessage: Component, lockedSound: Sound);
  /**
   * Gets the snapshot {@link LockableTileState} of the tile entity
   * whose lock is being checked.
   *
   * @return the snapshot block state.
  */
  getBlockState(): LockableTileState;
  /**
   * Get the player involved this lock check.
   *
   * @return the player
  */
  getPlayer(): Player;
  /**
   * Gets the itemstack that will be used as the key itemstack. Initially
   * this will be the item in the player's main hand but an override can be set
   * with {@link #setKeyItem(ItemStack)}. Use {@link #isUsingCustomKeyItemStack()}
   * to check if a custom key stack has been set.
   *
   * @return the item being used as the key item
   * @see #isUsingCustomKeyItemStack()
  */
  getKeyItem(): ItemStack;
  /**
   * Sets the itemstack that will be used as the key item.
   *
   * @param stack the stack to use as a key (or null to fall back to the player's main hand item)
   * @see #resetKeyItem() to clear a custom key item
  */
  setKeyItem(keyItem: ItemStack);
  /**
   * Reset the key stack to the default (the player's main hand).
  */
  resetKeyItem(): void;
  /**
   * Checks if a custom key stack has been set.
   *
   * @return true if a custom key itemstack has been set
  */
  isUsingCustomKeyItemStack(): boolean;
  /**
   * Gets the result of this event.
   *
   * @return the result
   * @see #setResult(Result)
  */
  getResult(): Result;
  /**
   * Gets the result of this event. {@link org.bukkit.event.Event.Result#DEFAULT} is the default
   * allowing the vanilla logic to check the lock of this block. Set to {@link org.bukkit.event.Event.Result#ALLOW}
   * or {@link org.bukkit.event.Event.Result#DENY} to override that behavior.
   * 
   * Setting this to {@link org.bukkit.event.Event.Result#ALLOW} bypasses the spectator check.
   *
   * @param result the result of this event
  */
  setResult(result: Result);
  /**
   * Shorthand method to set the {@link #getResult()} to {@link org.bukkit.event.Event.Result#DENY},
   * the locked message and locked sound.
   *
   * @param lockedMessage the message to show if locked (or null for none)
   * @param lockedSound the sound to play if locked (or null for none)
  */
  denyWithMessageAndSound(lockedMessage: Component | null, lockedSound: Sound | null): void;
  /**
   * Gets the locked message that will be sent if the
   * player cannot open the block.
   *
   * @return the locked message (or null if none)
  */
  getLockedMessage(): Component | null;
  /**
   * Sets the locked message that will be sent if the
   * player cannot open the block.
   *
   * @param lockedMessage the locked message (or null for none)
  */
  setLockedMessage(lockedMessage: Component | null);
  /**
   * Gets the locked sound that will play if the
   * player cannot open the block.
   *
   * @return the locked sound (or null if none)
  */
  getLockedSound(): Sound | null;
  /**
   * Sets the locked sound that will play if the
   * player cannot open the block.
   *
   * @param lockedSound the locked sound (or null for none)
  */
  setLockedSound(lockedSound: Sound | null);
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Called when a Target Block is hit by a projectile.
 * 
 * Cancelling this event will stop the Target from emitting a redstone signal,
 * and in the case that the shooter is a player, will stop them from receiving
 * advancement criteria.
*/
export class TargetHitEvent extends ProjectileHitEvent {
  constructor(projectile: Projectile, block: Block, blockFace: BlockFace, signalStrength: number);
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancelled: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
  /**
   * Gets the strength of the redstone signal to be emitted by the Target block
   *
   * @return the strength of the redstone signal to be emitted
  */
  getSignalStrength(): number;
  /**
   * Sets the strength of the redstone signal to be emitted by the Target block
   *
   * @param signalStrength the strength of the redstone signal to be emitted
  */
  setSignalStrength(signalStrength: number);
}
export interface TargetHitEvent extends ProjectileHitEvent, Cancellable {}
/**
 * Called when the {@link EnderDragon} is defeated (killed) in a {@link DragonBattle},
 * causing a {@link Material#DRAGON_EGG} (more formally: {@link #getNewState()})
 * to possibly appear depending on {@link #isCancelled()}.
 * This event might be cancelled by default depending on
 * eg. {@link DragonBattle#hasBeenPreviouslyKilled()} and server configuration.
*/
export class DragonEggFormEvent extends BlockFormEvent {
  constructor(block: Block, newState: BlockState, dragonBattle: DragonBattle);
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancelled: boolean): void;
  /**
   * Gets the {@link DragonBattle} associated with this event.
   * Keep in mind that the {@link EnderDragon} is already dead
   * when this event is called.
   *
   * @return the dragon battle
  */
  getDragonBattle(): DragonBattle;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface DragonEggFormEvent extends BlockFormEvent, Cancellable {}

}
declare module 'io.papermc.paper.plugin.provider.util' {
import { Runnable, ClassLoader, Class } from 'java.lang';
/**
 * An internal utility type that holds logic for loading a provider-like type from a classloaders.
 * Provides, at least in the context of this utility, define themselves as implementations of a specific parent
 * interface/type, e.g. {@link org.bukkit.plugin.java.JavaPlugin} and implement a no-args constructor.
*/
export class ProviderUtil {
  /**
   * Loads the class found at the provided fully qualified class name from the passed classloader, creates a new
   * instance of it using the no-args constructor, that should exist as per this method contract, and casts it to the
   * provided parent type.
   *
   * @param clazz     the fully qualified name of the class to load
   * @param classType the parent type that the created object found at the `clazz` name should be cast to
   * @param loader    the loader from which the class should be loaded
   * @param        the generic type of the parent class the created object will be cast to
   * @return the object instantiated from the class found at the provided FQN, cast to the parent type
  */
  static loadClass<T>(clazz: string, classType: Class<T>, loader: ClassLoader): T;
  /**
   * Loads the class found at the provided fully qualified class name from the passed classloader, creates a new
   * instance of it using the no-args constructor, that should exist as per this method contract, and casts it to the
   * provided parent type.
   *
   * @param clazz     the fully qualified name of the class to load
   * @param classType the parent type that the created object found at the `clazz` name should be cast to
   * @param loader    the loader from which the class should be loaded
   * @param onError   a runnable that is executed before any unknown exception is raised through a sneaky throw.
   * @param        the generic type of the parent class the created object will be cast to
   * @return the object instantiated from the class found at the provided fully qualified class name, cast to the
   * parent type
  */
  static loadClass<T>(clazz: string, classType: Class<T>, loader: ClassLoader, onError: Runnable | null): T;
}

}
declare module 'io.papermc.paper.plugin.provider.entrypoint' {
import { PluginMeta } from 'io.papermc.paper.plugin.configuration';
/**
 * A dependency context is a read-only abstraction of a type/concept that can resolve dependencies between plugins.
 * 
 * This may for example be the server wide plugin manager itself, capable of validating if a dependency exists between
 * two {@link PluginMeta} instances, however the implementation is not limited to such a concrete use-case.
*/
export class DependencyContext {
  /**
   * Computes if the passed {@link PluginMeta} defined the passed dependency as a transitive dependency.
   * A transitive dependency, as implied by its name, may not have been configured directly by the passed plugin
   * but could also simply be a dependency of a dependency.
   * 
   * A simple example of this method would be
   * {@code
   * dependencyContext.isTransitiveDependency(pluginMetaA, pluginMetaC);
   * }
   * which would return `true` if `pluginMetaA` directly or indirectly depends on `pluginMetaC`.
   *
   * @param plugin the plugin meta this computation should consider the requester of the dependency status for the
   *               passed potential dependency.
   * @param depend the potential transitive dependency of the `plugin` parameter.
   * @return a simple boolean flag indicating if `plugin` considers `depend` as a transitive dependency.
  */
  isTransitiveDependency(plugin: PluginMeta, depend: PluginMeta): boolean;
  /**
   * Computes if this dependency context is aware of a dependency that provides/matches the passed identifier.
   * 
   * A dependency in this methods context is any dependable artefact. It does not matter if anything actually depends
   * on said artefact, its mere existence as a potential dependency is enough for this method to consider it a
   * dependency. If this dependency context is hence aware of an artefact with the matching identifier, this
   * method returns `true`.
   *
   * @param pluginIdentifier the unique identifier of the dependency with which to probe this dependency context.
   * @return a plain boolean flag indicating if this dependency context is aware of a potential dependency with the
   * passed identifier.
  */
  hasDependency(pluginIdentifier: string): boolean;
}

}
declare module 'io.papermc.paper.datapack' {
import { Collection } from 'java.util';
import { Compatibility } from 'io.papermc.paper.datapack.Datapack';
export class Datapack {
  /**
   * @return the name of the pack
  */
  getName(): string;
  /**
   * @return the compatibility of the pack
  */
  getCompatibility(): Compatibility;
  /**
   * @return whether or not the pack is currently enabled
  */
  isEnabled(): boolean;
  setEnabled(enabled: boolean): void;
}
export class DatapackManager {
  /**
   * @return all the packs known to the server
  */
  getPacks(): Collection<Datapack>;
  /**
   * @return all the packs which are currently enabled
  */
  getEnabledPacks(): Collection<Datapack>;
}

}
declare module 'io.papermc.paper.plugin' {
import { Set, List } from 'java.util';
import { Permissible, Permission } from 'org.bukkit.permissions';
/**
 * A permission manager implementation to keep backwards compatibility partially alive with existing plugins that used
 * the bukkit one before.
*/
export class PermissionManager {
  /**
   * Gets a {@link Permission} from its fully qualified name
   *
   * @param name Name of the permission
   * @return Permission, or null if none
  */
  getPermission(name: string): Permission | null;
  /**
   * Adds a {@link Permission} to this plugin manager.
   * 
   * If a permission is already defined with the given name of the new
   * permission, an exception will be thrown.
   *
   * @param perm Permission to add
   * @throws IllegalArgumentException Thrown when a permission with the same
   *                                  name already exists
  */
  addPermission(perm: Permission): void;
  /**
   * Removes a {@link Permission} registration from this plugin manager.
   * 
   * If the specified permission does not exist in this plugin manager,
   * nothing will happen.
   * 
   * Removing a permission registration will not remove the
   * permission from any {@link Permissible}s that have it.
   *
   * @param perm Permission to remove
  */
  removePermission(perm: Permission): void;
  /**
   * Removes a {@link Permission} registration from this plugin manager.
   * 
   * If the specified permission does not exist in this plugin manager,
   * nothing will happen.
   * 
   * Removing a permission registration will not remove the
   * permission from any {@link Permissible}s that have it.
   *
   * @param name Permission to remove
  */
  removePermission(name: string): void;
  /**
   * Gets the default permissions for the given op status
   *
   * @param op Which set of default permissions to get
   * @return The default permissions
  */
  getDefaultPermissions(op: boolean): Set<Permission>;
  /**
   * Recalculates the defaults for the given {@link Permission}.
   * 
   * This will have no effect if the specified permission is not registered
   * here.
   *
   * @param perm Permission to recalculate
  */
  recalculatePermissionDefaults(perm: Permission): void;
  /**
   * Subscribes the given Permissible for information about the requested
   * Permission, by name.
   * 
   * If the specified Permission changes in any form, the Permissible will
   * be asked to recalculate.
   *
   * @param permission  Permission to subscribe to
   * @param permissible Permissible subscribing
  */
  subscribeToPermission(permission: string, permissible: Permissible): void;
  /**
   * Unsubscribes the given Permissible for information about the requested
   * Permission, by name.
   *
   * @param permission  Permission to unsubscribe from
   * @param permissible Permissible subscribing
  */
  unsubscribeFromPermission(permission: string, permissible: Permissible): void;
  /**
   * Gets a set containing all subscribed {@link Permissible}s to the given
   * permission, by name
   *
   * @param permission Permission to query for
   * @return Set containing all subscribed permissions
  */
  getPermissionSubscriptions(permission: string): Set<Permissible>;
  /**
   * Subscribes to the given Default permissions by operator status
   * 
   * If the specified defaults change in any form, the Permissible will be
   * asked to recalculate.
   *
   * @param op          Default list to subscribe to
   * @param permissible Permissible subscribing
  */
  subscribeToDefaultPerms(op: boolean, permissible: Permissible): void;
  /**
   * Unsubscribes from the given Default permissions by operator status
   *
   * @param op          Default list to unsubscribe from
   * @param permissible Permissible subscribing
  */
  unsubscribeFromDefaultPerms(op: boolean, permissible: Permissible): void;
  /**
   * Gets a set containing all subscribed {@link Permissible}s to the given
   * default list, by op status
   *
   * @param op Default list to query for
   * @return Set containing all subscribed permissions
  */
  getDefaultPermSubscriptions(op: boolean): Set<Permissible>;
  /**
   * Gets a set of all registered permissions.
   * 
   * This set is a copy and will not be modified live.
   *
   * @return Set containing all current registered permissions
  */
  getPermissions(): Set<Permission>;
  /**
   * Adds a list of permissions.
   * 
   * This is meant as an optimization for adding multiple permissions without recalculating each permission.
   *
   * @param perm permission
  */
  addPermissions(perm: Permission[]): void;
  /**
   * Clears the current registered permissinos.
   * 
   * This is used for reloading.
  */
  clearPermissions(): void;
}

}
declare module 'io.papermc.paper.event.packet' {
import { HandlerList } from 'org.bukkit.event';
import { ChunkEvent } from 'org.bukkit.event.world';
import { Player } from 'org.bukkit.entity';
import { Chunk } from 'org.bukkit';
/**
 * Is called when a {@link org.bukkit.entity.Player} receives a {@link org.bukkit.Chunk}
 * 
 * Can for example be used for spawning a fake entity when the player receives a chunk.
 *
 * Should only be used for packet/clientside related stuff.
 * Not intended for modifying server side state.
*/
export class PlayerChunkLoadEvent extends ChunkEvent {
  constructor(chunk: Chunk, player: Player);
  getHandlers(): HandlerList;
  getPlayer(): Player;
  static getHandlerList(): HandlerList;
}
/**
 * Is called when a {@link Player} receives a chunk unload packet.
 *
 * Should only be used for packet/clientside related stuff.
 * Not intended for modifying server side.
*/
export class PlayerChunkUnloadEvent extends ChunkEvent {
  constructor(chunk: Chunk, player: Player);
  getHandlers(): HandlerList;
  getPlayer(): Player;
  static getHandlerList(): HandlerList;
}

}
declare module 'io.papermc.paper.entity' {
import { Enum } from 'java.lang';
import { Source } from 'net.kyori.adventure.sound.Sound';
import { TriState } from 'net.kyori.adventure.util';
import { ItemStack } from 'org.bukkit.inventory';
import { Sound, DyeColor } from 'org.bukkit';
import { LivingEntity, Entity, Fish } from 'org.bukkit.entity';
/**
 * Represents an entity that can be bucketed.
*/
export class Bucketable extends Entity {
  /**
   * Gets if this entity originated from a bucket.
   *
   * @return originated from bucket
  */
  isFromBucket(): boolean;
  /**
   * Sets if this entity originated from a bucket.
   *
   * @param fromBucket is from a bucket
  */
  setFromBucket(fromBucket: boolean): void;
  /**
   * Gets the base itemstack of this entity in a bucket form.
   *
   * @return bucket form
  */
  getBaseBucketItem(): ItemStack;
  /**
   * Gets the sound that is played when this entity
   * is picked up in a bucket.
   * @return bucket pickup sound
  */
  getPickupSound(): Sound;
}
/**
 * Represents a fish that can school with other fish.
*/
export class SchoolableFish extends Fish {
  /**
   * Forces this fish to follow the given fish.
   *
   * @param leader fish to follow
  */
  startFollowing(leader: SchoolableFish): void;
  /**
   * Causes the fish to stop following their current
   * leader.
  */
  stopFollowing(): void;
  /**
   * Gets the amount of fish currently following this fish.
   *
   * @return school size
  */
  getSchoolSize(): number;
  /**
   * Gets the maximum number of fish that will naturally follow this fish.
   *
   * @return max school size
  */
  getMaxSchoolSize(): number;
  /**
   * Gets the fish that this entity is currently following.
   *
   * @return following fish
  */
  getSchoolLeader(): SchoolableFish | null;
}
/**
 * Entities that can have their collars colored.
*/
export class CollarColorable extends LivingEntity {
  /**
   * Get the collar color of this entity
   *
   * @return the color of the collar
  */
  getCollarColor(): DyeColor;
  /**
   * Set the collar color of this entity
   *
   * @param color the color to apply
  */
  setCollarColor(collarColor: DyeColor);
}
/**
 * Represents an {@link Entity} that can experience friction with the air and ground.
*/
export class Frictional {
  /**
   * Gets the friction state of this entity.
   * When set to {@link TriState#TRUE}, the entity will always experience friction.
   * When set to {@link TriState#FALSE}, the entity will never experience friction.
   * When set to {@link TriState#NOT_SET}, the entity will fall back to Minecraft's default behaviour.
   *
   * @return the entity's friction state
  */
  getFrictionState(): TriState;
  /**
   * Sets the friction state of this entity.
   * When set to {@link TriState#TRUE}, the entity will always experience friction.
   * When set to {@link TriState#FALSE}, the entity will never experience friction.
   * When set to {@link TriState#NOT_SET}, the entity will fall back to Minecraft's default behaviour.
   * 
   * Please note that changing this value will do nothing for a player.
   *
   * @param state the new friction state to set for the entity
  */
  setFrictionState(frictionState: TriState);
}
/**
 * Represents what part of the entity should be used when determining where to face a position/entity.
 *
 * @see org.bukkit.entity.Player#lookAt(Position, LookAnchor)
 * @see org.bukkit.entity.Player#lookAt(Entity, LookAnchor, LookAnchor)
*/
export class LookAnchor extends Enum<LookAnchor> {
  /**
   * Represents the entity's feet.
   * @see LivingEntity#getLocation()
  */
  static readonly FEET: LookAnchor;
  /**
   * Represents the entity's eyes.
   * @see LivingEntity#getEyeLocation()
  */
  static readonly EYES: LookAnchor;
  static valueOf(name: string): LookAnchor;
  static values(): LookAnchor[];
}
/**
 * Represents an entity that can be sheared.
*/
export class Shearable extends Entity {
  /**
   * Forces the entity to be sheared and then play the effect as if it were sheared by a player.
   * This will cause the entity to be sheared, even if {@link Shearable#readyToBeSheared()} is false.
   * 
   * Some shearing behavior may cause the entity to no longer be valid
   * due to it being replaced by a different entity.
  */
  shear(): void;
  /**
   * Forces the entity to be sheared and then play the effect as if it were sheared by the provided source.
   * This will cause the entity to be sheared, even if {@link Shearable#readyToBeSheared()} is false.
   * 
   * Some shearing behavior may cause the entity to no longer be valid
   * due to it being replaced by a different entity.
   * 
   * This simulates the behavior of an actual shearing, which may cause events like EntityTransformEvent to be called
   * for mooshrooms, and EntityDropItemEvent to be called for sheep.
   *
   * @param source Sound source to play any sound effects on
  */
  shear(source: Source): void;
  /**
   * Gets if the entity would be able to be sheared or not naturally using shears.
   *
   * @return if the entity can be sheared
  */
  readyToBeSheared(): boolean;
}

}
declare module 'io.papermc.paper.event.server' {
import { Cause } from 'io.papermc.paper.event.server.ServerResourcesReloadedEvent';
import { ServerEvent } from 'org.bukkit.event.server';
import { HandlerList } from 'org.bukkit.event';
/**
 * Called when resources such as datapacks are reloaded (e.g. /minecraft:reload)
 * 
 *     Intended for use to re-register custom recipes, advancements that may be lost during a reload like this.
 * 
*/
export class ServerResourcesReloadedEvent extends ServerEvent {
  static readonly HANDLER_LIST: HandlerList;
  constructor(cause: Cause);
  /**
   * Gets the cause of the resource reload.
   *
   * @return the reload cause
  */
  getCause(): Cause;
  static getHandlerList(): HandlerList;
  getHandlers(): HandlerList;
}

}
declare module 'io.papermc.paper.event.player.PlayerLecternPageChangeEvent' {
import { Enum } from 'java.lang';
export class PageChangeDirection extends Enum<PageChangeDirection> {
  static readonly LEFT: PageChangeDirection;
  static readonly RIGHT: PageChangeDirection;
  static valueOf(name: string): PageChangeDirection;
  static values(): PageChangeDirection[];
}

}
declare module 'io.papermc.paper.registry' {
import { NamespacedKey, Registry, Keyed } from 'org.bukkit';
/**
 * Represents a reference to a server-backed registry value that may
 * change.
 *
 * @param  type of the value
*/
export class Reference<T> extends Keyed {
  /**
   * Gets the value from the registry with the key.
   *
   * @return the value
   * @throws java.util.NoSuchElementException if there is no value with this key
  */
  value(): T;
  /**
   * Gets the value from the registry with the key.
   *
   * @return the value or null if it doesn't exist
  */
  valueOrNull(): T | null;
  /**
   * Creates a reference to a registered value.
   *
   * @param registry the registry the value is located in
   * @param key the key to the value
   * @param  the type of the value
   * @return a reference
  */
  static create<T>(registry: Registry<T>, key: NamespacedKey): Reference<T>;
}

}
declare module 'io.papermc.paper.event.server.ServerResourcesReloadedEvent' {
import { Enum } from 'java.lang';
export class Cause extends Enum<Cause> {
  static readonly COMMAND: Cause;
  static readonly PLUGIN: Cause;
  static valueOf(name: string): Cause;
  static values(): Cause[];
}

}
declare module 'io.papermc.paper.potion' {
import { RecipeChoice, ItemStack } from 'org.bukkit.inventory';
import { NamespacedKey, Keyed } from 'org.bukkit';
/**
 * Represents a potion mix made in a Brewing Stand.
*/
export class PotionMix extends Keyed {
  /**
   * Creates a new potion mix. Add it to the server with {@link org.bukkit.potion.PotionBrewer#addPotionMix(PotionMix)}.
   *
   * @param key a unique key for the mix
   * @param result the resulting itemstack that will appear in the 3 bottom slots
   * @param input the input placed into the bottom 3 slots
   * @param ingredient the ingredient placed into the top slot
  */
  constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice, ingredient: RecipeChoice);
  /**
   * Return the namespaced identifier for this object.
   *
   * @return this object's key
  */
  getKey(): NamespacedKey;
  /**
   * Gets the resulting itemstack after the brew has finished.
   *
   * @return the result itemstack
  */
  getResult(): ItemStack;
  /**
   * Gets the input for the bottom 3 slots in the brewing stand.
   *
   * @return the bottom 3 slot ingredients
  */
  getInput(): RecipeChoice;
  /**
   * Gets the ingredient in the top slot of the brewing stand.
   *
   * @return the top slot input
  */
  getIngredient(): RecipeChoice;
  toString(): string;
  equals(o: any): boolean;
  hashCode(): number;
}

}
declare module 'io.papermc.paper.threadedregions.scheduler' {
import { Runnable } from 'java.lang';
import { CancelledState, ExecutionState } from 'io.papermc.paper.threadedregions.scheduler.ScheduledTask';
import { TimeUnit } from 'java.util.concurrent';
import { Plugin } from 'org.bukkit.plugin';
import { Consumer } from 'java.util.function';
import { World, Location } from 'org.bukkit';
/**
 * The region task scheduler can be used to schedule tasks by location to be executed on the region which owns the location.
 * 
 * Note: It is entirely inappropriate to use the region scheduler to schedule tasks for entities.
 * If you wish to schedule tasks to perform actions on entities, you should be using {@link Entity#getScheduler()}
 * as the entity scheduler will "follow" an entity if it is teleported, whereas the region task scheduler
 * will not.
 * 
*/
export class RegionScheduler {
  /**
   * Schedules a task to be executed on the region which owns the location.
   *
   * @param plugin The plugin that owns the task
   * @param world  The world of the region that owns the task
   * @param chunkX The chunk X coordinate of the region that owns the task
   * @param chunkZ The chunk Z coordinate of the region that owns the task
   * @param run    The task to execute
  */
  execute(plugin: Plugin, world: World, chunkX: number, chunkZ: number, run: Runnable): void;
  /**
   * Schedules a task to be executed on the region which owns the location.
   *
   * @param plugin   The plugin that owns the task
   * @param location The location at which the region executing should own
   * @param run      The task to execute
  */
  execute(plugin: Plugin, location: Location, run: Runnable): void;
  /**
   * Schedules a task to be executed on the region which owns the location on the next tick.
   *
   * @param plugin The plugin that owns the task
   * @param world  The world of the region that owns the task
   * @param chunkX The chunk X coordinate of the region that owns the task
   * @param chunkZ The chunk Z coordinate of the region that owns the task
   * @param task   The task to execute
   * @return The {@link ScheduledTask} that represents the scheduled task.
  */
  run(plugin: Plugin, world: World, chunkX: number, chunkZ: number, task: Consumer<ScheduledTask>): ScheduledTask;
  /**
   * Schedules a task to be executed on the region which owns the location on the next tick.
   *
   * @param plugin   The plugin that owns the task
   * @param location The location at which the region executing should own
   * @param task     The task to execute
   * @return The {@link ScheduledTask} that represents the scheduled task.
  */
  run(plugin: Plugin, location: Location, task: Consumer<ScheduledTask>): ScheduledTask;
  /**
   * Schedules a task to be executed on the region which owns the location after the specified delay in ticks.
   *
   * @param plugin     The plugin that owns the task
   * @param world      The world of the region that owns the task
   * @param chunkX     The chunk X coordinate of the region that owns the task
   * @param chunkZ     The chunk Z coordinate of the region that owns the task
   * @param task       The task to execute
   * @param delayTicks The delay, in ticks.
   * @return The {@link ScheduledTask} that represents the scheduled task.
  */
  runDelayed(plugin: Plugin, world: World, chunkX: number, chunkZ: number, task: Consumer<ScheduledTask>, delayTicks: number): ScheduledTask;
  /**
   * Schedules a task to be executed on the region which owns the location after the specified delay in ticks.
   *
   * @param plugin     The plugin that owns the task
   * @param location   The location at which the region executing should own
   * @param task       The task to execute
   * @param delayTicks The delay, in ticks.
   * @return The {@link ScheduledTask} that represents the scheduled task.
  */
  runDelayed(plugin: Plugin, location: Location, task: Consumer<ScheduledTask>, delayTicks: number): ScheduledTask;
  /**
   * Schedules a repeating task to be executed on the region which owns the location after the initial delay with the
   * specified period.
   *
   * @param plugin            The plugin that owns the task
   * @param world             The world of the region that owns the task
   * @param chunkX            The chunk X coordinate of the region that owns the task
   * @param chunkZ            The chunk Z coordinate of the region that owns the task
   * @param task              The task to execute
   * @param initialDelayTicks The initial delay, in ticks.
   * @param periodTicks       The period, in ticks.
   * @return The {@link ScheduledTask} that represents the scheduled task.
  */
  runAtFixedRate(plugin: Plugin, world: World, chunkX: number, chunkZ: number, task: Consumer<ScheduledTask>, initialDelayTicks: number, periodTicks: number): ScheduledTask;
  /**
   * Schedules a repeating task to be executed on the region which owns the location after the initial delay with the
   * specified period.
   *
   * @param plugin            The plugin that owns the task
   * @param location          The location at which the region executing should own
   * @param task              The task to execute
   * @param initialDelayTicks The initial delay, in ticks.
   * @param periodTicks       The period, in ticks.
   * @return The {@link ScheduledTask} that represents the scheduled task.
  */
  runAtFixedRate(plugin: Plugin, location: Location, task: Consumer<ScheduledTask>, initialDelayTicks: number, periodTicks: number): ScheduledTask;
}
/**
 * Represents a task scheduled to a scheduler.
*/
export class ScheduledTask {
  /**
   * Returns the plugin that scheduled this task.
   * @return the plugin that scheduled this task.
  */
  getOwningPlugin(): Plugin;
  /**
   * Returns whether this task executes on a fixed period, as opposed to executing only once.
   * @return whether this task executes on a fixed period, as opposed to executing only once.
  */
  isRepeatingTask(): boolean;
  /**
   * Attempts to cancel this task, returning the result of the attempt. In all cases, if the task is currently
   * being executed no attempt is made to halt the task, however any executions in the future are halted.
   * @return the result of the cancellation attempt.
  */
  cancel(): CancelledState;
  /**
   * Returns the current execution state of this task.
   * @return the current execution state of this task.
  */
  getExecutionState(): ExecutionState;
  /**
   * Returns whether the current execution state is {@link ExecutionState#CANCELLED} or {@link ExecutionState#CANCELLED_RUNNING}.
   * @return whether the current execution state is {@link ExecutionState#CANCELLED} or {@link ExecutionState#CANCELLED_RUNNING}.
  */
  isCancelled(): boolean;
}
/**
 * An entity can move between worlds with an arbitrary tick delay, be temporarily removed
 * for players (i.e end credits), be partially removed from world state (i.e inactive but not removed),
 * teleport between ticking regions, teleport between worlds, and even be removed entirely from the server.
 * The uncertainty of an entity's state can make it difficult to schedule tasks without worrying about undefined
 * behaviors resulting from any of the states listed previously.
 *
 * 
 * This class is designed to eliminate those states by providing an interface to run tasks only when an entity
 * is contained in a world, on the owning thread for the region, and by providing the current Entity object.
 * The scheduler also allows a task to provide a callback, the "retired" callback, that will be invoked
 * if the entity is removed before a task that was scheduled could be executed. The scheduler is also
 * completely thread-safe, allowing tasks to be scheduled from any thread context. The scheduler also indicates
 * properly whether a task was scheduled successfully (i.e scheduler not retired), thus the code scheduling any task
 * knows whether the given callbacks will be invoked eventually or not - which may be critical for off-thread
 * contexts.
 * 
*/
export class EntityScheduler {
  /**
   * Schedules a task with the given delay. If the task failed to schedule because the scheduler is retired (entity
   * removed), then returns `false`. Otherwise, either the run callback will be invoked after the specified delay,
   * or the retired callback will be invoked if the scheduler is retired.
   * Note that the retired callback is invoked in critical code, so it should not attempt to remove the entity, remove
   * other entities, load chunks, load worlds, modify ticket levels, etc.
   *
   * 
   * It is guaranteed that the run and retired callback are invoked on the region which owns the entity.
   * 
   * @param run The callback to run after the specified delay, may not be null.
   * @param retired Retire callback to run if the entity is retired before the run callback can be invoked, may be null.
   * @param delay The delay in ticks before the run callback is invoked. Any value less-than 1 is treated as 1.
   * @return `true` if the task was scheduled, which means that either the run function or the retired function
   *         will be invoked (but never both), or `false` indicating neither the run nor retired function will be invoked
   *         since the scheduler has been retired.
  */
  execute(plugin: Plugin, run: Runnable, retired: Runnable | null, delay: number): boolean;
  /**
   * Schedules a task to execute on the next tick. If the task failed to schedule because the scheduler is retired (entity
   * removed), then returns `null`. Otherwise, either the task callback will be invoked after the specified delay,
   * or the retired callback will be invoked if the scheduler is retired.
   * Note that the retired callback is invoked in critical code, so it should not attempt to remove the entity, remove
   * other entities, load chunks, load worlds, modify ticket levels, etc.
   *
   * 
   * It is guaranteed that the task and retired callback are invoked on the region which owns the entity.
   * 
   * @param plugin The plugin that owns the task
   * @param task The task to execute
   * @param retired Retire callback to run if the entity is retired before the run callback can be invoked, may be null.
   * @return The {@link ScheduledTask} that represents the scheduled task, or `null` if the entity has been removed.
  */
  run(plugin: Plugin, task: Consumer<ScheduledTask>, retired: Runnable | null): ScheduledTask | null;
  /**
   * Schedules a task with the given delay. If the task failed to schedule because the scheduler is retired (entity
   * removed), then returns `null`. Otherwise, either the task callback will be invoked after the specified delay,
   * or the retired callback will be invoked if the scheduler is retired.
   * Note that the retired callback is invoked in critical code, so it should not attempt to remove the entity, remove
   * other entities, load chunks, load worlds, modify ticket levels, etc.
   *
   * 
   * It is guaranteed that the task and retired callback are invoked on the region which owns the entity.
   * 
   * @param plugin The plugin that owns the task
   * @param task The task to execute
   * @param retired Retire callback to run if the entity is retired before the run callback can be invoked, may be null.
   * @param delayTicks The delay, in ticks.
   * @return The {@link ScheduledTask} that represents the scheduled task, or `null` if the entity has been removed.
  */
  runDelayed(plugin: Plugin, task: Consumer<ScheduledTask>, retired: Runnable | null, delayTicks: number): ScheduledTask | null;
  /**
   * Schedules a repeating task with the given delay and period. If the task failed to schedule because the scheduler
   * is retired (entity removed), then returns `null`. Otherwise, either the task callback will be invoked after
   * the specified delay, or the retired callback will be invoked if the scheduler is retired.
   * Note that the retired callback is invoked in critical code, so it should not attempt to remove the entity, remove
   * other entities, load chunks, load worlds, modify ticket levels, etc.
   *
   * 
   * It is guaranteed that the task and retired callback are invoked on the region which owns the entity.
   * 
   * @param plugin The plugin that owns the task
   * @param task The task to execute
   * @param retired Retire callback to run if the entity is retired before the run callback can be invoked, may be null.
   * @param initialDelayTicks The initial delay, in ticks.
   * @param periodTicks The period, in ticks.
   * @return The {@link ScheduledTask} that represents the scheduled task, or `null` if the entity has been removed.
  */
  runAtFixedRate(plugin: Plugin, task: Consumer<ScheduledTask>, retired: Runnable | null, initialDelayTicks: number, periodTicks: number): ScheduledTask | null;
}
/**
 * The global region task scheduler may be used to schedule tasks that will execute on the global region.
 * 
 * The global region is responsible for maintaining world day time, world game time, weather cycle,
 * sleep night skipping, executing commands for console, and other misc. tasks that do not belong to any specific region.
 * 
*/
export class GlobalRegionScheduler {
  /**
   * Schedules a task to be executed on the global region.
   * @param plugin The plugin that owns the task
   * @param run The task to execute
  */
  execute(plugin: Plugin, run: Runnable): void;
  /**
   * Schedules a task to be executed on the global region on the next tick.
   * @param plugin The plugin that owns the task
   * @param task The task to execute
   * @return The {@link ScheduledTask} that represents the scheduled task.
  */
  run(plugin: Plugin, task: Consumer<ScheduledTask>): ScheduledTask;
  /**
   * Schedules a task to be executed on the global region after the specified delay in ticks.
   * @param plugin The plugin that owns the task
   * @param task The task to execute
   * @param delayTicks The delay, in ticks.
   * @return The {@link ScheduledTask} that represents the scheduled task.
  */
  runDelayed(plugin: Plugin, task: Consumer<ScheduledTask>, delayTicks: number): ScheduledTask;
  /**
   * Schedules a repeating task to be executed on the global region after the initial delay with the
   * specified period.
   * @param plugin The plugin that owns the task
   * @param task The task to execute
   * @param initialDelayTicks The initial delay, in ticks.
   * @param periodTicks The period, in ticks.
   * @return The {@link ScheduledTask} that represents the scheduled task.
  */
  runAtFixedRate(plugin: Plugin, task: Consumer<ScheduledTask>, initialDelayTicks: number, periodTicks: number): ScheduledTask;
  /**
   * Attempts to cancel all tasks scheduled by the specified plugin.
   * @param plugin Specified plugin.
  */
  cancelTasks(plugin: Plugin): void;
}
/**
 * Scheduler that may be used by plugins to schedule tasks to execute asynchronously from the server tick process.
*/
export class AsyncScheduler {
  /**
   * Schedules the specified task to be executed asynchronously immediately.
   * @param plugin Plugin which owns the specified task.
   * @param task Specified task.
   * @return The {@link ScheduledTask} that represents the scheduled task.
  */
  runNow(plugin: Plugin, task: Consumer<ScheduledTask>): ScheduledTask;
  /**
   * Schedules the specified task to be executed asynchronously after the time delay has passed.
   * @param plugin Plugin which owns the specified task.
   * @param task Specified task.
   * @param delay The time delay to pass before the task should be executed.
   * @param unit The time unit for the time delay.
   * @return The {@link ScheduledTask} that represents the scheduled task.
  */
  runDelayed(plugin: Plugin, task: Consumer<ScheduledTask>, delay: number, unit: TimeUnit): ScheduledTask;
  /**
   * Schedules the specified task to be executed asynchronously after the initial delay has passed,
   * and then periodically executed with the specified period.
   * @param plugin Plugin which owns the specified task.
   * @param task Specified task.
   * @param initialDelay The time delay to pass before the first execution of the task.
   * @param period The time between task executions after the first execution of the task.
   * @param unit The time unit for the initial delay and period.
   * @return The {@link ScheduledTask} that represents the scheduled task.
  */
  runAtFixedRate(plugin: Plugin, task: Consumer<ScheduledTask>, initialDelay: number, period: number, unit: TimeUnit): ScheduledTask;
  /**
   * Attempts to cancel all tasks scheduled by the specified plugin.
   * @param plugin Specified plugin.
  */
  cancelTasks(plugin: Plugin): void;
}

}
declare module 'io.papermc.paper.math' {
import { BlockFace } from 'org.bukkit.block';
import { Vector } from 'org.bukkit.util';
import { World, Axis, Location } from 'org.bukkit';
/**
 * Rotations is an immutable object that stores rotations
 * in degrees on each axis (X, Y, Z).
*/
export class Rotations {
  /**
   * Rotations instance with every axis set to 0
  */
  static readonly ZERO: Rotations;
  /**
   * Creates a new Rotations instance holding the provided rotations
   *
   * @param x the angle for the X axis in degrees
   * @param y the angle for the Y axis in degrees
   * @param z the angle for the Z axis in degrees
   * @return Rotations instance holding the provided rotations
  */
  static ofDegrees(x: number, y: number, z: number): Rotations;
  /**
   * Returns the angle on the X axis in degrees
   *
   * @return the angle in degrees
  */
  x(): number;
  /**
   * Returns the angle on the Y axis in degrees
   *
   * @return the angle in degrees
  */
  y(): number;
  /**
   * Returns the angle on the Z axis in degrees
   *
   * @return the angle in degrees
  */
  z(): number;
  /**
   * Returns a new Rotations instance which is the result
   * of changing the X axis to the passed angle
   *
   * @param x the angle in degrees
   * @return the resultant Rotations
  */
  withX(x: number): Rotations;
  /**
   * Returns a new Rotations instance which is the result
   * of changing the Y axis to the passed angle
   *
   * @param y the angle in degrees
   * @return the resultant Rotations
  */
  withY(y: number): Rotations;
  /**
   * Returns a new Rotations instance which is the result
   * of changing the Z axis to the passed angle
   *
   * @param z the angle in degrees
   * @return the resultant Rotations
  */
  withZ(z: number): Rotations;
  /**
   * Returns a new Rotations instance which is the result of adding
   * the x, y, z components to this Rotations
   *
   * @param x the angle to add to the X axis in degrees
   * @param y the angle to add to the Y axis in degrees
   * @param z the angle to add to the Z axis in degrees
   * @return the resultant Rotations
  */
  add(x: number, y: number, z: number): Rotations;
  /**
   * Returns a new Rotations instance which is the result of subtracting
   * the x, y, z components from this Rotations
   *
   * @param x the angle to subtract from the X axis in degrees
   * @param y the angle to subtract from the Y axis in degrees
   * @param z the angle to subtract from the Z axis in degrees
   * @return the resultant Rotations
  */
  subtract(x: number, y: number, z: number): Rotations;
}
/**
 * A position represented with integers.
 * 
 * May see breaking changes until Experimental annotation is removed.
 * @see FinePosition
*/
export class BlockPosition extends Position {
  x(): number;
  y(): number;
  z(): number;
  isBlock(): boolean;
  isFine(): boolean;
  toBlock(): BlockPosition;
  offset(x: number, y: number, z: number): BlockPosition;
  /**
   * Returns a block position offset by 1 in the direction specified.
   *
   * @param blockFace the block face to offset towards
   * @return the offset block position
  */
  offset(blockFace: BlockFace): BlockPosition;
  /**
   * Returns a block position offset in the direction specified
   * multiplied by the amount.
   *
   * @param blockFace the block face to offset towards
   * @param amount the number of times to move in that direction
   * @return the offset block position
  */
  offset(blockFace: BlockFace, amount: number): BlockPosition;
  /**
   * Returns a block position offset by the amount along
   * the specified axis.
   *
   * @param axis the axis to offset along
   * @param amount the amount to offset along that axis
   * @return the offset block position
  */
  offset(axis: Axis, amount: number): BlockPosition;
}
/**
 * A position represented with doubles.
 * 
 * May see breaking changes until Experimental annotation is removed.
 * @see BlockPosition
*/
export class FinePosition extends Position {
  blockX(): number;
  blockY(): number;
  blockZ(): number;
  isBlock(): boolean;
  isFine(): boolean;
  toBlock(): BlockPosition;
  offset(x: number, y: number, z: number): FinePosition;
}
/**
 * Common interface for {@link FinePosition} and {@link BlockPosition}.
 * 
 * May see breaking changes until Experimental annotation is removed.
*/
export class Position {
  static readonly FINE_ZERO: FinePosition;
  static readonly BLOCK_ZERO: BlockPosition;
  /**
   * Gets the block x value for this position
   *
   * @return the block x value
  */
  blockX(): number;
  /**
   * Gets the block x value for this position
   *
   * @return the block x value
  */
  blockY(): number;
  /**
   * Gets the block x value for this position
   *
   * @return the block x value
  */
  blockZ(): number;
  /**
   * Gets the x value for this position
   *
   * @return the x value
  */
  x(): number;
  /**
   * Gets the y value for this position
   *
   * @return the y value
  */
  y(): number;
  /**
   * Gets the z value for this position
   *
   * @return the z value
  */
  z(): number;
  /**
   * Checks of this position represents a {@link BlockPosition}
   *
   * @return true if block
  */
  isBlock(): boolean;
  /**
   * Checks if this position represents a {@link FinePosition}
   *
   * @return true if fine
  */
  isFine(): boolean;
  /**
   * Returns a position offset by the specified amounts.
   *
   * @param x x value to offset
   * @param y y value to offset
   * @param z z value to offset
   * @return the offset position
  */
  offset(x: number, y: number, z: number): Position;
  /**
   * Returns a new position at the center of the block position this represents
   *
   * @return a new center position
  */
  toCenter(): FinePosition;
  /**
   * Returns the block position of this position
   * or itself if it already is a block position
   *
   * @return the block position
  */
  toBlock(): BlockPosition;
  /**
   * Converts this position to a vector
   *
   * @return a new vector
  */
  toVector(): Vector;
  /**
   * Creates a new location object at this position with the specified world
   *
   * @param world the world for the location object
   * @return a new location
  */
  toLocation(world: World): Location;
  /**
   * Creates a position at the coordinates
   *
   * @param x x coord
   * @param y y coord
   * @param z z coord
   * @return a position with those coords
  */
  static block(x: number, y: number, z: number): BlockPosition;
  /**
   * Creates a position from the location.
   *
   * @param location the location to copy the position of
   * @return a new position at that location
  */
  static block(location: Location): BlockPosition;
  /**
   * Creates a position at the coordinates
   *
   * @param x x coord
   * @param y y coord
   * @param z z coord
   * @return a position with those coords
  */
  static fine(x: number, y: number, z: number): FinePosition;
  /**
   * Creates a position from the location.
   *
   * @param location the location to copy the position of
   * @return a new position at that location
  */
  static fine(location: Location): FinePosition;
}

}
declare module 'io.papermc.paper.text' {
import { Component } from 'net.kyori.adventure.text';
import { PlainTextComponentSerializer, PlainComponentSerializer } from 'net.kyori.adventure.text.serializer.plain';
import { CommandSender } from 'org.bukkit.command';
import { LegacyComponentSerializer } from 'net.kyori.adventure.text.serializer.legacy';
import { GsonComponentSerializer } from 'net.kyori.adventure.text.serializer.gson';
import { ComponentFlattener } from 'net.kyori.adventure.text.flattener';
import { Entity } from 'org.bukkit.entity';
/**
 * Paper API-specific methods for working with {@link Component}s and related.
*/
export class PaperComponents {
  /**
   * Resolves a component with a specific command sender and subject.
   * 
   * Note that in Vanilla, elevated permissions are usually required to use
   * '@' selectors in various component types, but this method should not
   * check such permissions from the sender.
   * 
   * A {@link CommandSender} argument is required to resolve:
   * 
   *     {@link net.kyori.adventure.text.NBTComponent}
   *     {@link net.kyori.adventure.text.ScoreComponent}
   *     {@link net.kyori.adventure.text.SelectorComponent}
   * 
   * A {@link Entity} argument is optional to help resolve:
   * 
   *     {@link net.kyori.adventure.text.ScoreComponent}
   * 
   * {@link net.kyori.adventure.text.TranslatableComponent}s don't require any extra arguments.
   *
   * @param input the component to resolve
   * @param context the command sender to resolve with
   * @param scoreboardSubject the scoreboard subject to use (for use with {@link net.kyori.adventure.text.ScoreComponent}s)
   * @return the resolved component
   * @throws IOException if a syntax error tripped during resolving
  */
  static resolveWithContext(input: Component, context: CommandSender | null, scoreboardSubject: Entity | null): Component;
  /**
   * Resolves a component with a specific command sender and subject.
   * 
   * Note that in Vanilla, elevated permissions are required to use
   * '@' selectors in various component types. If the boolean `bypassPermissions`
   * argument is `false`, the {@link CommandSender} argument will be used to query
   * those permissions.
   * 
   * A {@link CommandSender} argument is required to resolve:
   * 
   *     {@link net.kyori.adventure.text.NBTComponent}
   *     {@link net.kyori.adventure.text.ScoreComponent}
   *     {@link net.kyori.adventure.text.SelectorComponent}
   * 
   * A {@link Entity} argument is optional to help resolve:
   * 
   *     {@link net.kyori.adventure.text.ScoreComponent}
   * 
   * {@link net.kyori.adventure.text.TranslatableComponent}s don't require any extra arguments.
   *
   * @param input the component to resolve
   * @param context the command sender to resolve with
   * @param scoreboardSubject the scoreboard subject to use (for use with {@link net.kyori.adventure.text.ScoreComponent}s)
   * @param bypassPermissions true to bypass permissions checks for resolving components
   * @return the resolved component
   * @throws IOException if a syntax error tripped during resolving
  */
  static resolveWithContext(input: Component, context: CommandSender | null, scoreboardSubject: Entity | null, bypassPermissions: boolean): Component;
  /**
   * Return a component flattener that can use game data to resolve extra information about components.
   *
   * @return a component flattener
  */
  static flattener(): ComponentFlattener;
  /**
   * Get a serializer for {@link Component}s that will convert components to
   * a plain-text string.
   *
   * Implementations may provide a serializer capable of processing any
   * information that requires access to implementation details.
   *
   * @return a serializer to plain text
   * @deprecated will be removed in adventure 5.0.0, use {@link PlainTextComponentSerializer#plainText()}
  */
  static plainSerializer(): PlainComponentSerializer;
  /**
   * Get a serializer for {@link Component}s that will convert components to
   * a plain-text string.
   *
   * Implementations may provide a serializer capable of processing any
   * information that requires access to implementation details.
   *
   * @return a serializer to plain text
   * @deprecated use {@link PlainTextComponentSerializer#plainText()}
  */
  static plainTextSerializer(): PlainTextComponentSerializer;
  /**
   * Get a serializer for {@link Component}s that will convert to and from the
   * standard JSON serialization format using Gson.
   *
   * Implementations may provide a serializer capable of processing any
   * information that requires implementation details, such as legacy
   * (pre-1.16) hover events.
   *
   * @return a json component serializer
   * @deprecated use {@link GsonComponentSerializer#gson()}
  */
  static gsonSerializer(): GsonComponentSerializer;
  /**
   * Get a serializer for {@link Component}s that will convert to and from the
   * standard JSON serialization format using Gson, downsampling any RGB colors
   * to their nearest {@link NamedTextColor} counterpart.
   *
   * Implementations may provide a serializer capable of processing any
   * information that requires implementation details, such as legacy
   * (pre-1.16) hover events.
   *
   * @return a json component serializer
   * @deprecated use {@link GsonComponentSerializer#colorDownsamplingGson()}
  */
  static colorDownsamplingGsonSerializer(): GsonComponentSerializer;
  /**
   * Get a serializer for {@link Component}s that will convert to and from the
   * legacy component format used by Bukkit. This serializer uses the
   * {@link LegacyComponentSerializer.Builder#useUnusualXRepeatedCharacterHexFormat()}
   * option to match upstream behavior.
   *
   * This legacy serializer uses the standard section symbol to mark
   * formatting characters.
   *
   * Implementations may provide a serializer capable of processing any
   * information that requires access to implementation details.
   *
   * @return a section serializer
   * @deprecated use {@link LegacyComponentSerializer#legacySection()}
  */
  static legacySectionSerializer(): LegacyComponentSerializer;
}

}
declare module 'io.papermc.paper.tag' {
import { Class } from 'java.lang';
import { Set, Collection, List } from 'java.util';
import { Predicate } from 'java.util.function';
import { EntityType } from 'org.bukkit.entity';
import { NamespacedKey, Tag } from 'org.bukkit';
/**
 * All tags in this class are unmodifiable, attempting to modify them will throw an
 * {@link UnsupportedOperationException}.
*/
export class EntityTags {
  /**
   * Covers undead mobs
   * @see https://minecraft.gamepedia.com/Mob#Undead_mobs
  */
  static readonly UNDEADS: EntitySetTag;
  /**
   * Covers all horses
  */
  static readonly HORSES: EntitySetTag;
  /**
   * Covers all minecarts
  */
  static readonly MINECARTS: EntitySetTag;
  /**
   * Covers mobs that split into smaller mobs
  */
  static readonly SPLITTING_MOBS: EntitySetTag;
  /**
   * Covers all water based mobs
   * @see https://minecraft.gamepedia.com/Mob#Water-based_mobs
  */
  static readonly WATER_BASED: EntitySetTag;
}
export class EntitySetTag extends BaseTag<EntityType, EntitySetTag> {
  constructor(key: NamespacedKey, filter: Predicate<EntityType>);
  constructor(key: NamespacedKey, ...values: EntityType[]);
  constructor(key: NamespacedKey, values: Collection<EntityType>);
  constructor(key: NamespacedKey, values: Collection<EntityType>, ...globalPredicates: Predicate[]);
}
export class BaseTag<T, C> extends Tag<T> {
  constructor(clazz: Class<T>, key: NamespacedKey, filter: Predicate<T>);
  constructor(clazz: Class<T>, key: NamespacedKey, ...values: T[]);
  constructor(clazz: Class<T>, key: NamespacedKey, values: Collection<T>);
  constructor(clazz: Class<T>, key: NamespacedKey, values: Collection<T>, ...globalPredicates: Predicate[]);
  lock(): C;
  isLocked(): boolean;
  /**
   * Return the namespaced identifier for this object.
   *
   * @return this object's key
  */
  getKey(): NamespacedKey;
  /**
   * Gets an immutable set of all tagged items.
   *
   * @return set of tagged items
  */
  getValues(): Set<T>;
  /**
   * Returns whether or not this tag has an entry for the specified item.
   *
   * @param item to check
   * @return if it is tagged
  */
  isTagged(item: T): boolean;
  add(...tags: Tag[]): C;
  add(...values: T[]): C;
  add(collection: Collection<T>): C;
  add(filter: Predicate<T>): C;
  contains(with_: string): C;
  endsWith(with_: string): C;
  startsWith(with_: string): C;
  not(...tags: Tag[]): C;
  not(...values: T[]): C;
  not(values: Collection<T>): C;
  not(filter: Predicate<T>): C;
  notContains(with_: string): C;
  notEndsWith(with_: string): C;
  notStartsWith(with_: string): C;
  ensureSize(label: string, size: number): C;
}

}
declare module 'io.papermc.paper.event.player.PlayerItemFrameChangeEvent' {
import { Enum } from 'java.lang';
export class ItemFrameChangeAction extends Enum<ItemFrameChangeAction> {
  static readonly PLACE: ItemFrameChangeAction;
  static readonly REMOVE: ItemFrameChangeAction;
  static readonly ROTATE: ItemFrameChangeAction;
  static valueOf(name: string): ItemFrameChangeAction;
  static values(): ItemFrameChangeAction[];
}

}
declare module 'io.papermc.paper.event.world' {
import { CommandSender } from 'org.bukkit.command';
import { HandlerList, Cancellable } from 'org.bukkit.event';
import { WorldEvent } from 'org.bukkit.event.world';
import { StructureType, GameRule, World, Location } from 'org.bukkit';
/**
 * Called when a world's gamerule is changed, either by command or by api.
*/
export class WorldGameRuleChangeEvent extends WorldEvent {
  constructor(world: World, commandSender: CommandSender | null, gameRule: GameRule<any>, value: string);
  /**
   * Gets the command sender associated with this event.
   *
   * @return `null` if the gamerule was changed via api, otherwise the {@link CommandSender}.
  */
  getCommandSender(): CommandSender | null;
  /**
   * Gets the game rule associated with this event.
   *
   * @return the gamerule being changed.
  */
  getGameRule(): GameRule<any>;
  /**
   * Gets the new value of the gamerule.
   *
   * @return the new value of the gamerule.
  */
  getValue(): string;
  /**
   * Sets the new value of this gamerule.
   *
   * @param value the new value of the gamerule.
  */
  setValue(value: string);
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface WorldGameRuleChangeEvent extends WorldEvent, Cancellable {}
/**
 * Called before a structure/feature is located.
 * This happens when:
 * 
 *     The /locate command is used.
 *     An Eye of Ender is used.
 *     An Explorer/Treasure Map is activated.
 *     {@link World#locateNearestStructure(Location, StructureType, int, boolean)} is invoked.
 * 
 * @deprecated no longer used, see {@link StructuresLocateEvent}
*/
export class StructureLocateEvent extends WorldEvent {
  constructor(world: World, origin: Location, structureType: StructureType, radius: number, findUnexplored: boolean);
  static getHandlerList(): HandlerList;
  getHandlers(): HandlerList;
  /**
   * Gets the location set as the structure location, if it was defined.
   * 
   * Returns `null` if it has not been set by {@link StructureLocateEvent#setResult(Location)}.
   * Since this event fires before the search is done, the actual location is unknown at this point.
   *
   * @return The result location, if it has been set. null if it has not.
   * @see World#locateNearestStructure(Location, StructureType, int, boolean)
  */
  getResult(): Location | null;
  /**
   * Sets the result {@link Location}. This causes the search to be skipped, and the location passed here to be used as the result.
   *
   * @param result the {@link Location} of the structure.
  */
  setResult(result: Location | null);
  /**
   * Gets the {@link StructureType} that is to be located.
   *
   * @return the structure type.
  */
  getType(): StructureType;
  /**
   * Sets the {@link StructureType} that is to be located.
   *
   * @param type the structure type.
  */
  setType(type: StructureType);
  /**
   * Gets the {@link Location} from which the search is to be conducted.
   *
   * @return {@link Location} where search begins
  */
  getOrigin(): Location;
  /**
   * Gets the search radius in which to attempt locating the structure.
   * 
   * This radius may not always be obeyed during the structure search!
   *
   * @return the search radius.
  */
  getRadius(): number;
  /**
   * Sets the search radius in which to attempt locating the structure.
   * 
   * This radius may not always be obeyed during the structure search!
   *
   * @param radius the search radius.
  */
  setRadius(radius: number);
  /**
   * Gets whether to search exclusively for unexplored structures.
   * 
   * As with the search radius, this value is not always obeyed.
   *
   * @return Whether to search for only unexplored structures.
  */
  shouldFindUnexplored(): boolean;
  /**
   * Sets whether to search exclusively for unexplored structures.
   * 
   * As with the search radius, this value is not always obeyed.
   *
   * @param findUnexplored Whether to search for only unexplored structures.
  */
  setFindUnexplored(findUnexplored: boolean): void;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
}
export interface StructureLocateEvent extends WorldEvent, Cancellable {}

}
declare module 'io.papermc.paper.command' {
import { Component } from 'net.kyori.adventure.text';
export class CommandBlockHolder {
  /**
   * Gets the command that this CommandBlock will run when powered.
   * This will never return null.  If the CommandBlock does not have a
   * command, an empty String will be returned instead.
   *
   * @return Command that this CommandBlock will run when activated.
  */
  getCommand(): string;
  /**
   * Sets the command that this CommandBlock will run when powered.
   * Setting the command to null is the same as setting it to an empty
   * String.
   *
   * @param command Command that this CommandBlock will run when activated.
  */
  setCommand(command: string | null);
  /**
   * Gets the last output from this command block.
   *
   * @return the last output
  */
  lastOutput(): Component;
  /**
   * Sets the last output from this command block.
   *
   * @param lastOutput the last output
  */
  lastOutput(lastOutput: Component | null): void;
  /**
   * Gets the success count from this command block.
   * @see Command_Block#Success_count
   *
   * @return the success count
  */
  getSuccessCount(): number;
  /**
   * Sets the success count from this command block.
   * @see Command_Block#Success_count
   *
   * @param successCount the success count
  */
  setSuccessCount(successCount: number);
}

}
declare module 'io.papermc.paper.threadedregions.scheduler.ScheduledTask' {
import { Enum } from 'java.lang';
/**
 * Represents the result of attempting to cancel a task.
*/
export class CancelledState extends Enum<CancelledState> {
  /**
   * The task (repeating or not) has been successfully cancelled by the caller thread. The task is not executing
   * currently, and it will not begin execution in the future.
  */
  static readonly CANCELLED_BY_CALLER: CancelledState;
  /**
   * The task (repeating or not) is already cancelled. The task is not executing currently, and it will not
   * begin execution in the future.
  */
  static readonly CANCELLED_ALREADY: CancelledState;
  /**
   * The task is not a repeating task, and could not be cancelled because the task is being executed.
  */
  static readonly RUNNING: CancelledState;
  /**
   * The task is not a repeating task, and could not be cancelled because the task has already finished execution.
  */
  static readonly ALREADY_EXECUTED: CancelledState;
  /**
   * The caller thread successfully stopped future executions of a repeating task, but the task is currently
   * being executed.
  */
  static readonly NEXT_RUNS_CANCELLED: CancelledState;
  /**
   * The repeating task's future executions are cancelled already, but the task is currently
   * being executed.
  */
  static readonly NEXT_RUNS_CANCELLED_ALREADY: CancelledState;
  static valueOf(name: string): CancelledState;
  static values(): CancelledState[];
}
/**
 * Represents the current execution state of the task.
*/
export class ExecutionState extends Enum<ExecutionState> {
  /**
   * The task is currently not executing, but may begin execution in the future.
  */
  static readonly IDLE: ExecutionState;
  /**
   * The task is currently executing.
  */
  static readonly RUNNING: ExecutionState;
  /**
   * The task is not repeating, and the task finished executing.
  */
  static readonly FINISHED: ExecutionState;
  /**
   * The task is not executing and will not begin execution in the future. If this task is not repeating, then
   * this task was never executed.
  */
  static readonly CANCELLED: ExecutionState;
  /**
   * The task is repeating and currently executing, but future executions are cancelled and will not occur.
  */
  static readonly CANCELLED_RUNNING: ExecutionState;
  static valueOf(name: string): ExecutionState;
  static values(): ExecutionState[];
}

}
declare module 'io.papermc.paper.world.structure' {
import { Structure } from 'org.bukkit.generator.structure';
import { Reference } from 'io.papermc.paper.registry';
import { NamespacedKey, StructureType, Keyed } from 'org.bukkit';
/**
 * Represents a configured structure each with a
 * {@link StructureType}. Multiple ConfiguredStructures can have
 * the same {@link StructureType}.
 * @deprecated use {@link Structure}
*/
export class ConfiguredStructure extends Keyed {
  static readonly PILLAGER_OUTPOST: Reference<ConfiguredStructure>;
  static readonly MINESHAFT: Reference<ConfiguredStructure>;
  static readonly MINESHAFT_MESA: Reference<ConfiguredStructure>;
  static readonly WOODLAND_MANSION: Reference<ConfiguredStructure>;
  static readonly JUNGLE_TEMPLE: Reference<ConfiguredStructure>;
  static readonly DESERT_PYRAMID: Reference<ConfiguredStructure>;
  static readonly IGLOO: Reference<ConfiguredStructure>;
  static readonly SHIPWRECK: Reference<ConfiguredStructure>;
  static readonly SHIPWRECK_BEACHED: Reference<ConfiguredStructure>;
  static readonly SWAMP_HUT: Reference<ConfiguredStructure>;
  static readonly STRONGHOLD: Reference<ConfiguredStructure>;
  static readonly OCEAN_MONUMENT: Reference<ConfiguredStructure>;
  static readonly OCEAN_RUIN_COLD: Reference<ConfiguredStructure>;
  static readonly OCEAN_RUIN_WARM: Reference<ConfiguredStructure>;
  static readonly FORTRESS: Reference<ConfiguredStructure>;
  static readonly NETHER_FOSSIL: Reference<ConfiguredStructure>;
  static readonly END_CITY: Reference<ConfiguredStructure>;
  static readonly BURIED_TREASURE: Reference<ConfiguredStructure>;
  static readonly BASTION_REMNANT: Reference<ConfiguredStructure>;
  static readonly VILLAGE_PLAINS: Reference<ConfiguredStructure>;
  static readonly VILLAGE_DESERT: Reference<ConfiguredStructure>;
  static readonly VILLAGE_SAVANNA: Reference<ConfiguredStructure>;
  static readonly VILLAGE_SNOWY: Reference<ConfiguredStructure>;
  static readonly VILLAGE_TAIGA: Reference<ConfiguredStructure>;
  static readonly RUINED_PORTAL_STANDARD: Reference<ConfiguredStructure>;
  static readonly RUINED_PORTAL_DESERT: Reference<ConfiguredStructure>;
  static readonly RUINED_PORTAL_JUNGLE: Reference<ConfiguredStructure>;
  static readonly RUINED_PORTAL_SWAMP: Reference<ConfiguredStructure>;
  static readonly RUINED_PORTAL_MOUNTAIN: Reference<ConfiguredStructure>;
  static readonly RUINED_PORTAL_OCEAN: Reference<ConfiguredStructure>;
  static readonly RUINED_PORTAL_NETHER: Reference<ConfiguredStructure>;
  /**
   * Return the namespaced identifier for this object.
   *
   * @return this object's key
  */
  getKey(): NamespacedKey;
  /**
   * Gets the structure type for this configure structure.
   *
   * @return the structure type
  */
  getStructureType(): StructureType;
  equals(o: any): boolean;
  hashCode(): number;
  toString(): string;
  toModern(): Structure;
  static fromModern(structure: Structure): ConfiguredStructure | null;
}

}
declare module 'io.papermc.paper.event.world.border' {
import { HandlerList, Cancellable } from 'org.bukkit.event';
import { Type } from 'io.papermc.paper.event.world.border.WorldBorderBoundsChangeEvent';
import { WorldEvent } from 'org.bukkit.event.world';
import { WorldBorder, World, Location } from 'org.bukkit';
export class WorldBorderEvent extends WorldEvent {
  constructor(world: World, worldBorder: WorldBorder);
  getWorldBorder(): WorldBorder;
}
/**
 * Called when a moving world border has finished its move.
*/
export class WorldBorderBoundsChangeFinishEvent extends WorldBorderEvent {
  constructor(world: World, worldBorder: WorldBorder, oldSize: number, newSize: number, duration: number);
  /**
   * Gets the old size of the worldborder.
   *
   * @return the old size
  */
  getOldSize(): number;
  /**
   * Gets the new size of the worldborder.
   *
   * @return the new size
  */
  getNewSize(): number;
  /**
   * Gets the duration this worldborder took to make the change.
   * 
   * Can be 0 if handlers for {@link io.papermc.paper.event.world.border.WorldBorderCenterChangeEvent} set the duration to 0.
   *
   * @return the duration of the transition
  */
  getDuration(): number;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Called when a world border's center is changed.
*/
export class WorldBorderCenterChangeEvent extends WorldBorderEvent {
  constructor(world: World, worldBorder: WorldBorder, oldCenter: Location, newCenter: Location);
  /**
   * Gets the original center location of the world border.
   *
   * @return the old center
  */
  getOldCenter(): Location;
  /**
   * Gets the new center location for the world border.
   *
   * @return the new center
  */
  getNewCenter(): Location;
  /**
   * Sets the new center location for the world border. Y coordinate is ignored.
   *
   * @param newCenter the new center
  */
  setNewCenter(newCenter: Location);
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface WorldBorderCenterChangeEvent extends WorldBorderEvent, Cancellable {}
/**
 * Called when a world border changes its bounds, either over time, or instantly.
*/
export class WorldBorderBoundsChangeEvent extends WorldBorderEvent {
  constructor(world: World, worldBorder: WorldBorder, type: Type, oldSize: number, newSize: number, duration: number);
  /**
   * Gets if this change is an instant change or over-time change.
   *
   * @return the change type
  */
  getType(): Type;
  /**
   * Gets the old size or the world border.
   *
   * @return the old size
  */
  getOldSize(): number;
  /**
   * Gets the new size of the world border.
   *
   * @return the new size
  */
  getNewSize(): number;
  /**
   * Sets the new size of the world border.
   *
   * @param newSize the new size
  */
  setNewSize(newSize: number);
  /**
   * Gets the time in milliseconds for the change. Will be 0 if instant.
   *
   * @return the time in milliseconds for the change
  */
  getDuration(): number;
  /**
   * Sets the time in milliseconds for the change. Will change {@link #getType()} to return
   * {@link Type#STARTED_MOVE}.
   *
   * @param duration the time in milliseconds for the change
  */
  setDuration(duration: number);
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface WorldBorderBoundsChangeEvent extends WorldBorderEvent, Cancellable {}

}
declare module 'io.papermc.paper.advancement' {
import { Component } from 'net.kyori.adventure.text';
import { Frame } from 'io.papermc.paper.advancement.AdvancementDisplay';
import { ItemStack } from 'org.bukkit.inventory';
import { NamespacedKey } from 'org.bukkit';
/**
 * Describes the display of an advancement.
 * 
 * The display is used in the chat, in the toast messages and the advancements
 * screen.
*/
export class AdvancementDisplay {
  /**
   * Gets the {@link Frame}.
   * 
   * This defines the appearance of the tile in the advancements screen and
   * the text when it's completed.
   *
   * @return the frame type
  */
  frame(): Frame;
  /**
   * Gets the advancement title.
   *
   * @return the title
  */
  title(): Component;
  /**
   * Gets the description.
   *
   * @return the description
  */
  description(): Component;
  /**
   * Gets the icon shown in the frame in the advancements screen.
   *
   * @return a copy of the icon
  */
  icon(): ItemStack;
  /**
   * Gets whether a toast should be displayed.
   * 
   * A toast is a notification that will be displayed in the top right corner
   * of the screen.
   *
   * @return `true` if a toast should be shown
  */
  doesShowToast(): boolean;
  /**
   * Gets whether a message should be sent in the chat.
   *
   * @return `true` if a message should be sent
   * @see org.bukkit.event.player.PlayerAdvancementDoneEvent#message() to edit
   * the message
  */
  doesAnnounceToChat(): boolean;
  /**
   * Gets whether this advancement is hidden.
   * 
   * Hidden advancements cannot be viewed by the player until they have been
   * unlocked.
   *
   * @return `true` if hidden
  */
  isHidden(): boolean;
  /**
   * Gets the texture displayed behind the advancement tree when selected.
   * 
   * This only affects root advancements without any parent. If the background
   * is not specified or doesn't exist, the tab background will be the missing
   * texture.
   *
   * @return the background texture path
  */
  backgroundPath(): NamespacedKey | null;
  /**
   * Gets the formatted display name for this display. This
   * is a part of the component that would be shown in chat when a player
   * completes the advancement.
   *
   * @return the display name
   * @see org.bukkit.advancement.Advancement#displayName()
  */
  displayName(): Component;
}

}
declare module 'io.papermc.paper.advancement.AdvancementDisplay' {
import { Enum } from 'java.lang';
import { Index } from 'net.kyori.adventure.util';
import { TextColor } from 'net.kyori.adventure.text.format';
/**
 * Defines how the {@link #icon()} appears in the advancements screen and
 * the color used with the {@link #title() advancement name}.
*/
export class Frame extends Enum<Frame> {
  /**
   * "Challenge complete" advancement.
   * 
   * The client will play the `ui.toast.challenge_complete` sound
   * when the challenge is completed and the toast is shown.
  */
  static readonly CHALLENGE: Frame;
  /**
   * "Goal reached" advancement.
  */
  static readonly GOAL: Frame;
  /**
   * "Advancement made" advancement.
  */
  static readonly TASK: Frame;
  static valueOf(name: string): Frame;
  static values(): Frame[];
  /**
   * The name map.
  */
  static readonly NAMES: Index<string, Frame>;
  /**
   * Gets the {@link TextColor} used for the advancement name.
   *
   * @return the text color
  */
  color(): TextColor;
  /**
   * Gets the translation key used when an advancement is completed.
   * 
   * This is the first line of the toast displayed by the client.
   *
   * @return the toast message key
  */
  translationKey(): string;
}

}
declare module 'io.papermc.paper.inventory' {
import { Enum } from 'java.lang';
import { TextColor } from 'net.kyori.adventure.text.format';
export class ItemRarity extends Enum<ItemRarity> {
  static readonly COMMON: ItemRarity;
  static readonly UNCOMMON: ItemRarity;
  static readonly RARE: ItemRarity;
  static readonly EPIC: ItemRarity;
  static valueOf(name: string): ItemRarity;
  static values(): ItemRarity[];
  /**
   * Gets the color formatting associated with the rarity.
   * @return
  */
  getColor(): TextColor;
}

}
declare module 'io.papermc.paper.event.entity' {
import { Component } from 'net.kyori.adventure.text';
import { Set, Collection, Map } from 'java.util';
import { Block } from 'org.bukkit.block';
import { CompostItemEvent } from 'io.papermc.paper.event.block';
import { EntityEvent, PotionSplashEvent } from 'org.bukkit.event.entity';
import { Vector } from 'org.bukkit.util';
import { HandlerList, Cancellable } from 'org.bukkit.event';
import { EquipmentSlot, ItemStack } from 'org.bukkit.inventory';
import { World, DyeColor, PortalType, Location } from 'org.bukkit';
import { LivingEntity, Entity, Player, Tameable, PufferFish, Warden, ElderGuardian, ThrownPotion } from 'org.bukkit.entity';
/**
 * Called when an entity enters the hitbox of a block.
 * Only called for blocks that react when an entity is inside.
 * If cancelled, any action that would have resulted from that entity
 * being in the block will not happen (such as extinguishing an entity in a cauldron).
 * 
 * Blocks this is currently called for:
 * 
 *     Big dripleaf
 *     Bubble column
 *     Buttons
 *     Cactus
 *     Campfire
 *     Cauldron
 *     Crops
 *     Ender Portal
 *     Fires
 *     Frogspawn
 *     Honey
 *     Hopper
 *     Detector rails
 *     Nether portals
 *     Pitcher crop
 *     Powdered snow
 *     Pressure plates
 *     Sweet berry bush
 *     Tripwire
 *     Waterlily
 *     Web
 *     Wither rose
 * 
*/
export class EntityInsideBlockEvent extends EntityEvent {
  constructor(entity: Entity, block: Block);
  /**
   * Gets the block.
   *
   * @return the block
  */
  getBlock(): Block;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface EntityInsideBlockEvent extends EntityEvent, Cancellable {}
/**
 * Called when a {@link Tameable} dies and sends a death message.
*/
export class TameableDeathMessageEvent extends EntityEvent {
  constructor(what: Tameable, deathMessage: Component);
  /**
   * Set the death message that appears to the owner of the tameable.
   *
   * @param deathMessage Death message to appear
  */
  deathMessage(deathMessage: Component): void;
  /**
   * Get the death message that appears to the owner of the tameable.
   *
   * @return Death message to appear
  */
  deathMessage(): Component;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getEntity(): Tameable;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface TameableDeathMessageEvent extends EntityEvent, Cancellable {}
/**
 * Called when a splash water potion "splashes" and affects
 * different entities in different ways.
*/
export class WaterBottleSplashEvent extends PotionSplashEvent {
  constructor(potion: ThrownPotion, affectedEntities: Map<LivingEntity, number>, rehydrate: Set<LivingEntity>, extinguish: Set<LivingEntity>);
  /**
   * Gets an immutable collection of entities that
   * will take damage as a result of this event. Use
   * other methods on this class to modify which entities
   * take damage.
   *
   * @return an immutable collection of entities
   * @see #doNotDamageAsWaterSensitive(LivingEntity)
   * @see #damageAsWaterSensitive(LivingEntity)
  */
  getToDamage(): Collection<LivingEntity>;
  /**
   * Removes this entity from the group that
   * will be damaged.
   *
   * @param entity entity to remove
  */
  doNotDamageAsWaterSensitive(entity: LivingEntity): void;
  /**
   * Adds this entity to the group that
   * will be damaged
   *
   * @param entity entity to add
  */
  damageAsWaterSensitive(entity: LivingEntity): void;
  /**
   * Get a mutable collection of entities
   * that will be rehydrated by this.
   * 
   * As of 1.19.3 this only will contain Axolotls as they
   * are the only entity type that can be rehydrated, but
   * it may change in the future.
   *
   * @return the entities
  */
  getToRehydrate(): Collection<LivingEntity>;
  /**
   * Get a mutable collection of entities that will
   * be extinguished as a result of this event.
   *
   * @return entities to be extinguished
  */
  getToExtinguish(): Collection<LivingEntity>;
  /**
   * @return a confusing collection, don't use it
   * @deprecated Use {@link #getToDamage()}
  */
  getAffectedEntities(): Collection<LivingEntity>;
  /**
   * Doesn't make sense for this event as intensity doesn't vary.
   * @return a confusing value
   * @deprecated check if {@link #getToDamage()} contains an entity
  */
  getIntensity(entity: LivingEntity): number;
  /**
   * Doesn't make sense for this event as intensity doesn't vary.
   * @deprecated use {@link #damageAsWaterSensitive(LivingEntity)}
   * or {@link #doNotDamageAsWaterSensitive(LivingEntity)} to change which entities are
   * damaged
  */
  setIntensity(entity: LivingEntity, intensity: number): void;
}
/**
 * Called when an item is about to be composted by an entity.
*/
export class EntityCompostItemEvent extends CompostItemEvent {
  constructor(who: Entity, composter: Block, item: ItemStack, willRaiseLevel: boolean);
  /**
   * Gets the entity that interacted with the composter.
   *
   * @return the entity that composted an item.
  */
  getEntity(): Entity;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
}
export interface EntityCompostItemEvent extends CompostItemEvent, Cancellable {}
/**
 * Called when an entity is ready to be teleported by a plugin.
 * Currently this is only called after the required
 * ticks have passed for a Nether Portal.
 * 
 * Cancelling this event resets the entity's readiness
 * regarding the current portal.
*/
export class EntityPortalReadyEvent extends EntityEvent {
  constructor(entity: Entity, targetWorld: World | null, portalType: PortalType);
  /**
   * Gets the world this portal will teleport to.
   * Can be null if "allow-nether" is false in server.properties
   * or if there is another situation where there is no world to teleport to.
   * 
   * This world may be modified by later events such as {@link org.bukkit.event.player.PlayerPortalEvent}
   * or {@link org.bukkit.event.entity.EntityPortalEvent}.
   *
   * @return the world the portal will teleport the entity to.
  */
  getTargetWorld(): World | null;
  /**
   * Sets the world this portal will teleport to. A null value
   * will essentially cancel the teleport and prevent further events
   * such as {@link org.bukkit.event.player.PlayerPortalEvent} from firing.
   * 
   * This world may be modified by later events such as {@link org.bukkit.event.player.PlayerPortalEvent}
   * or {@link org.bukkit.event.entity.EntityPortalEvent}.
   *
   * @param targetWorld the world
  */
  setTargetWorld(targetWorld: World | null);
  /**
   * Gets the portal type for this event.
   *
   * @return the portal type
  */
  getPortalType(): PortalType;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface EntityPortalReadyEvent extends EntityEvent, Cancellable {}
/**
 * Is called when an entity sits down or stands up.
*/
export class EntityToggleSitEvent extends EntityEvent {
  constructor(entity: Entity, isSitting: boolean);
  /**
   * Gets the new sitting state that the entity will change to.
   *
   * @return If it's going to sit or not.
  */
  getSittingState(): boolean;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface EntityToggleSitEvent extends EntityEvent, Cancellable {}
/**
 * Called just before a {@link PufferFish} inflates or deflates.
*/
export class PufferFishStateChangeEvent extends EntityEvent {
  constructor(entity: PufferFish, newPuffState: number);
  getEntity(): PufferFish;
  /**
   * Get the new puff state of the {@link PufferFish}.
   * 
   * This is what the {@link PufferFish}'s new puff state will be after this event if it isn't cancelled.
   * Refer to {@link PufferFish#getPuffState()} to get the current puff state.
   * @return The new puff state, 0 being not inflated, 1 being slightly inflated and 2 being fully inflated
  */
  getNewPuffState(): number;
  /**
   * Get if the {@link PufferFish} is going to inflate.
   * @return If its going to inflate
  */
  isInflating(): boolean;
  /**
   * Get if the {@link PufferFish} is going to deflate.
   * @return If its going to deflate
  */
  isDeflating(): boolean;
  /**
   * Set whether or not to cancel the {@link PufferFish} (in/de)flating.
   *
   * @param cancel true if you wish to cancel the (in/de)flation
  */
  setCancelled(cancel: boolean): void;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PufferFishStateChangeEvent extends EntityEvent, Cancellable {}
/**
 * Called when two entities mate and the mating process results in a fertilization.
 * Fertilization differs from normal breeding, as represented by the {@link org.bukkit.event.entity.EntityBreedEvent}, as
 * it does not result in the immediate creation of the child entity in the world.
 * 
 * An example of this would be:
 * 
 * A frog being marked as "is_pregnant" and laying {@link org.bukkit.Material#FROGSPAWN} later.
 * Sniffers producing the {@link org.bukkit.Material#SNIFFER_EGG} item, which needs to be placed before it can begin to hatch.
 * A turtle being marked with "HasEgg" and laying a {@link org.bukkit.Material#TURTLE_EGG} later.
 * 
 *
 * The event hence only exposes the two parent entities in the fertilization process and cannot provide the child entity, as it will only exist at a later point in time.
*/
export class EntityFertilizeEggEvent extends EntityEvent {
  constructor(mother: LivingEntity, father: LivingEntity, breeder: Player | null, bredWith: ItemStack | null, experience: number);
  getEntity(): LivingEntity;
  /**
   * Provides the entity in the fertilization process that will eventually be responsible for "creating" offspring,
   * may that be by setting a block that later hatches or dropping an egg that has to be placed.
   *
   * @return The "mother" entity.
  */
  getMother(): LivingEntity;
  /**
   * Provides the "father" entity in the fertilization process that is not responsible for initiating the offspring
   * creation.
   *
   * @return the other parent
  */
  getFather(): LivingEntity;
  /**
   * Gets the Entity responsible for fertilization. Breeder is null for spontaneous
   * conception.
   *
   * @return The Entity who initiated breeding.
  */
  getBreeder(): Player | null;
  /**
   * The ItemStack that was used to initiate fertilization, if present.
   *
   * @return ItemStack used to initiate breeding.
  */
  getBredWith(): ItemStack | null;
  /**
   * Get the amount of experience granted by fertilization.
   *
   * @return experience amount
  */
  getExperience(): number;
  /**
   * Set the amount of experience granted by fertilization.
   * If the amount is negative or zero, no experience will be dropped.
   *
   * @param experience experience amount
  */
  setExperience(experience: number);
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface EntityFertilizeEggEvent extends EntityEvent, Cancellable {}
/**
 * Is called when an {@link org.bukkit.entity.ElderGuardian} appears in front of a {@link org.bukkit.entity.Player}.
*/
export class ElderGuardianAppearanceEvent extends EntityEvent {
  constructor(what: Entity, affectedPlayer: Player);
  /**
   * Get the player affected by the guardian appearance.
   *
   * @return Player affected by the appearance
  */
  getAffectedPlayer(): Player;
  /**
   * The elder guardian playing the effect.
   *
   * @return The elder guardian
  */
  getEntity(): ElderGuardian;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface ElderGuardianAppearanceEvent extends EntityEvent, Cancellable {}
/**
 * Called when an entity is dyed. Currently, this is called for {@link org.bukkit.entity.Sheep}
 * being dyed, and {@link org.bukkit.entity.Wolf}/{@link org.bukkit.entity.Cat} collars being dyed.
*/
export class EntityDyeEvent extends EntityEvent {
  constructor(entity: Entity, dyeColor: DyeColor, player: Player | null);
  /**
   * Gets the DyeColor the entity is being dyed
   *
   * @return the DyeColor the entity is being dyed
  */
  getColor(): DyeColor;
  /**
   * Sets the DyeColor the entity is being dyed
   *
   * @param dyeColor the DyeColor the entity will be dyed
  */
  setColor(color: DyeColor);
  /**
   * Returns the player dyeing the entity, if available.
   *
   * @return player or null
  */
  getPlayer(): Player | null;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface EntityDyeEvent extends EntityEvent, Cancellable {}
/**
 * Called when an item on or used by an entity takes durability damage as a result of being hit/used.
 * 
 * NOTE: default vanilla behaviour dictates that armor/tools picked up by
 * mobs do not take damage (except via Thorns).
*/
export class EntityDamageItemEvent extends EntityEvent {
  constructor(entity: Entity, item: ItemStack, damage: number);
  /**
   * Gets the item being damaged.
   *
   * @return the item
  */
  getItem(): ItemStack;
  /**
   * Gets the amount of durability damage this item will be taking.
   *
   * @return durability change
  */
  getDamage(): number;
  /**
   * Sets the amount of durability damage this item will be taking.
   *
   * @param damage the damage amount to cause
  */
  setDamage(damage: number);
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface EntityDamageItemEvent extends EntityEvent, Cancellable {}
/**
 * Holds information for living entity movement events
 * 
 * Does not fire for players; use {@link PlayerMoveEvent} for player movement.
*/
export class EntityMoveEvent extends EntityEvent {
  constructor(entity: LivingEntity, from: Location, to: Location);
  getEntity(): LivingEntity;
  isCancelled(): boolean;
  setCancelled(cancel: boolean): void;
  /**
   * Gets the location this entity moved from
   *
   * @return Location the entity moved from
  */
  getFrom(): Location;
  /**
   * Sets the location to mark as where the entity moved from
   *
   * @param from New location to mark as the entity's previous location
  */
  setFrom(from: Location);
  /**
   * Gets the location this entity moved to
   *
   * @return Location the entity moved to
  */
  getTo(): Location;
  /**
   * Sets the location that this entity will move to
   *
   * @param to New Location this entity will move to
  */
  setTo(to: Location);
  /**
   * Check if the entity has changed position (even within the same block) in the event
   *
   * @return whether the entity has changed position or not
  */
  hasChangedPosition(): boolean;
  /**
   * Check if the entity has changed position (even within the same block) in the event, disregarding a possible world change
   *
   * @return whether the entity has changed position or not
  */
  hasExplicitlyChangedPosition(): boolean;
  /**
   * Check if the entity has moved to a new block in the event
   *
   * @return whether the entity has moved to a new block or not
  */
  hasChangedBlock(): boolean;
  /**
   * Check if the entity has moved to a new block in the event, disregarding a possible world change
   *
   * @return whether the entity has moved to a new block or not
  */
  hasExplicitlyChangedBlock(): boolean;
  /**
   * Check if the entity has changed orientation in the event
   *
   * @return whether the entity has changed orientation or not
  */
  hasChangedOrientation(): boolean;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface EntityMoveEvent extends EntityEvent, Cancellable {}
/**
 * Called when a LivingEntity loads a crossbow with a projectile.
*/
export class EntityLoadCrossbowEvent extends EntityEvent {
  constructor(entity: LivingEntity, crossbow: ItemStack | null, hand: EquipmentSlot);
  getEntity(): LivingEntity;
  /**
   * Gets the crossbow {@link ItemStack} being loaded.
   *
   * @return the crossbow involved in this event
  */
  getCrossbow(): ItemStack | null;
  /**
   * Gets the hand from which the crossbow was loaded.
   *
   * @return the hand
  */
  getHand(): EquipmentSlot;
  /**
   *
   * @return should the itemstack be consumed
  */
  shouldConsumeItem(): boolean;
  /**
   *
   * @param consume should the item be consumed
  */
  setConsumeItem(consume: boolean): void;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Set whether or not to cancel the crossbow being loaded. If canceled, the
   * projectile that would be loaded into the crossbow will not be consumed.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface EntityLoadCrossbowEvent extends EntityEvent, Cancellable {}
/**
 * Fired when an entity is pushed by another entity's attack. The acceleration vector can be
 * modified. If this event is cancelled, the entity will not get pushed.
 * 
 * Note: Some entities might trigger this multiple times on the same entity
 * as multiple acceleration calculations are done.
*/
export class EntityPushedByEntityAttackEvent extends EntityEvent {
  constructor(entity: Entity, pushedBy: Entity, acceleration: Vector);
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  /**
   * Gets the entity which pushed the affected entity.
   *
   * @return the pushing entity
  */
  getPushedBy(): Entity;
  /**
   * Gets the acceleration that will be applied to the affected entity.
   *
   * @return the acceleration vector
  */
  getAcceleration(): Vector;
}
export interface EntityPushedByEntityAttackEvent extends EntityEvent, Cancellable {}
/**
 * Called when a Warden's anger level has changed due to another entity.
 * 
 * If the event is cancelled, the warden's anger level will not change.
*/
export class WardenAngerChangeEvent extends EntityEvent {
  constructor(warden: Warden, target: Entity | null, oldAnger: number, newAnger: number);
  /**
   * Gets the entity (if any) which triggered this anger update.
   *
   * @return triggering entity, or null
  */
  getTarget(): Entity | null;
  /**
   * Gets the old anger level.
   *
   * @return old anger level
   * @see Warden#getAnger(Entity)
  */
  getOldAnger(): number;
  /**
   * Gets the new anger level resulting from this event.
   *
   * @return new anger level
   * @see Warden#getAnger(Entity)
  */
  getNewAnger(): number;
  /**
   * Sets the new anger level resulting from this event.
   * 
   * The anger of a warden is capped at 150.
   *
   * @param newAnger the new anger level, max 150
   * @see Warden#setAnger(Entity, int)
   * @throws IllegalArgumentException if newAnger is greater than 150
  */
  setNewAnger(newAnger: number);
  getEntity(): Warden;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancelled: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface WardenAngerChangeEvent extends EntityEvent, Cancellable {}

}
declare module 'io.papermc.paper.plugin.loader.library.impl' {
import { List } from 'java.util';
import { Logger } from 'org.slf4j';
import { RepositorySystem, DefaultRepositorySystemSession } from 'org.eclipse.aether';
import { Dependency } from 'org.eclipse.aether.graph';
import { Path } from 'java.nio.file';
import { RemoteRepository } from 'org.eclipse.aether.repository';
import { ClassPathLibrary, LibraryStore } from 'io.papermc.paper.plugin.loader.library';
/**
 * A simple jar library implementation of the {@link ClassPathLibrary} that allows {@link io.papermc.paper.plugin.loader.PluginLoader}s to
 * append a jar stored on the local file system into their runtime classloader.
 * 
 * An example creation of the jar library type may look like this:
 * {@code
 *   final JarLibrary customLibrary = new JarLibrary(Path.of("libs/custom-library-1.24.jar"));
 * }
 * resulting in a jar library that provides the jar at `libs/custom-library-1.24.jar` to the plugins classloader
 * at runtime.
 * 
 * The jar library implementation will error if file exists at the specified path.
*/
export class JarLibrary extends ClassPathLibrary {
  /**
   * Creates a new jar library that references the jar file found at the provided path.
   *
   * @param path the path, relative to the JVMs start directory.
  */
  constructor(path: Path);
  /**
   * Called to register the library this class path library represents into the passed library store.
   * This method may either be implemented by the plugins themselves if they need complex logic, or existing
   * API exposed implementations of this interface may be used.
   *
   * @param store the library store instance to register this library into
   * @throws LibraryLoadingException if library loading failed for this classpath library
  */
  register(store: LibraryStore): void;
}
/**
 * The maven library resolver acts as a resolver for yet to be resolved jar libraries that may be pulled from a
 * remote maven repository.
 * 
 * Plugins may create and configure a {@link MavenLibraryResolver} by creating a new one and registering both
 * a dependency artifact that should be resolved to a library at runtime and the repository it is found in.
 * An example of this would be the inclusion of the jooq library for typesafe SQL queries:
 * {@code
 * MavenLibraryResolver resolver = new MavenLibraryResolver();
 * resolver.addDependency(new Dependency(new DefaultArtifact("org.jooq:jooq:3.17.7"), null));
 * resolver.addRepository(new RemoteRepository.Builder(
 *     "central", "default", "https://repo1.maven.org/maven2/"
 * ).build());
 * }
 *
 * Plugins may create and register a {@link MavenLibraryResolver} after configuring it.
*/
export class MavenLibraryResolver extends ClassPathLibrary {
  /**
   * Creates a new maven library resolver instance.
   * 
   * The created instance will use the servers `libraries` folder to cache fetched libraries in.
   * Notably, the resolver is created without any repository, not even maven central.
   * It is hence crucial that plugins which aim to use this api register all required repositories before
   * submitting the {@link MavenLibraryResolver} to the {@link io.papermc.paper.plugin.loader.PluginClasspathBuilder}.
  */
  constructor();
  /**
   * Adds the provided dependency to the library resolver.
   * The artifact from the first valid repository matching the passed dependency will be chosen.
   *
   * @param dependency the definition of the dependency the maven library resolver should resolve when running
   * @see MavenLibraryResolver#addRepository(RemoteRepository)
  */
  addDependency(dependency: Dependency): void;
  /**
   * Adds the provided repository to the library resolver.
   * The order in which these are added does matter, as dependency resolving will start at the first added
   * repository.
   *
   * @param remoteRepository the configuration that defines the maven repository this library resolver should fetch
   *                         dependencies from
  */
  addRepository(remoteRepository: RemoteRepository): void;
  /**
   * Resolves the provided dependencies and adds them to the library store.
   *
   * @param store the library store the then resolved and downloaded dependencies are registered into
   * @throws LibraryLoadingException if resolving a dependency failed
  */
  register(store: LibraryStore): void;
}

}
declare module 'io.papermc.paper.event.world.border.WorldBorderBoundsChangeEvent' {
import { Enum } from 'java.lang';
export class Type extends Enum<Type> {
  static readonly STARTED_MOVE: Type;
  static readonly INSTANT_MOVE: Type;
  static valueOf(name: string): Type;
  static values(): Type[];
}

}
declare module 'io.papermc.paper.annotation' {
/**
 * Annotation used to mark methods or constructors which should not be called.
 *
 * Separate from {@link Deprecated} to differentiate from the large amount of deprecations.
*/
export class DoNotUse {

}

}
declare module 'io.papermc.paper.block' {
import { TileState, BlockFace, Lockable } from 'org.bukkit.block';
import { BlockData } from 'org.bukkit.block.data';
import { Nameable } from 'org.bukkit';
/**
 * Interface for tile entities that are lockable.
*/
export class LockableTileState extends TileState {

}
export interface LockableTileState extends TileState, Lockable, Nameable {}
export class MovingPiston extends TileState {
  /**
   * Gets the block that is being pushed
   *
   * @return the pushed block
  */
  getMovingBlock(): BlockData;
  /**
   * The direction that the current moving piston
   * is pushing/pulling a block in.
   *
   * @return the direction
  */
  getDirection(): BlockFace;
  /**
   * Gets if the piston is extending or not.
   * Returns false if the piston is retracting.
   *
   * @return is extending or not
  */
  isExtending(): boolean;
  /**
   * Returns if this moving piston represents the main piston head
   * from the original piston.
   *
   * @return is the piston head or not
  */
  isPistonHead(): boolean;
}

}
declare module 'io.papermc.paper.plugin.bootstrap' {
import { JavaPlugin } from 'org.bukkit.plugin.java';
import { ComponentLogger } from 'net.kyori.adventure.text.logger.slf4j';
import { Path } from 'java.nio.file';
import { PluginMeta } from 'io.papermc.paper.plugin.configuration';
/**
 * Represents the context provided to a {@link PluginBootstrap} during both the bootstrapping and plugin
 * instantiation logic.
 * A boostrap context may be used to access data or logic usually provided to {@link org.bukkit.plugin.Plugin} instances
 * like the plugin's configuration or logger during the plugins bootstrap.
*/
export class BootstrapContext extends PluginProviderContext {

}
/**
 * Represents the context provided to a {@link PluginBootstrap} during both the bootstrapping and plugin
 * instantiation logic.
 * A boostrap context may be used to access data or logic usually provided to {@link org.bukkit.plugin.Plugin} instances
 * like the plugin's configuration or logger during the plugins bootstrap.
*/
export class PluginProviderContext {
  /**
   * Provides the plugin's configuration.
   *
   * @return the plugin's configuration
  */
  getConfiguration(): PluginMeta;
  /**
   * Provides the path to the data directory of the plugin.
   *
   * @return the previously described path
  */
  getDataDirectory(): Path;
  /**
   * Provides the logger used for this plugin.
   *
   * @return the logger instance
  */
  getLogger(): ComponentLogger;
  /**
   * Provides the path to the originating source of the plugin, such as the plugin's JAR file.
   *
   * @return the previously described path
  */
  getPluginSource(): Path;
}
/**
 * A plugin boostrap is meant for loading certain parts of the plugin before the server is loaded.
 * 
 * Plugin bootstrapping allows values to be initialized in certain parts of the server that might not be allowed
 * when the server is running.
 * 
 * Your bootstrap class will be on the same classloader as your JavaPlugin.
 * 
 * All calls to Bukkit may throw a NullPointerExceptions or return null unexpectedly. You should only call api methods that are explicitly documented to work in the bootstrapper
*/
export class PluginBootstrap {
  /**
   * Called by the server, allowing you to bootstrap the plugin with a context that provides things like a logger and your shared plugin configuration file.
   *
   * @param context the server provided context
  */
  bootstrap(context: BootstrapContext): void;
  /**
   * Called by the server to instantiate your main class.
   * Plugins may override this logic to define custom creation logic for said instance, like passing addition
   * constructor arguments.
   *
   * @param context the server created bootstrap object
   * @return the server requested instance of the plugins main class.
  */
  createPlugin(context: PluginProviderContext): JavaPlugin;
}

}
declare module 'io.papermc.paper.plugin.provider.classloader' {
import { Class } from 'java.lang';
import { JavaPlugin, PluginClassLoader } from 'org.bukkit.plugin.java';
import { Closeable } from 'java.io';
import { PluginMeta } from 'io.papermc.paper.plugin.configuration';
/**
 * The class loader access interface is an internal representation of a class accesses' ability to see types
 * from other {@link ConfiguredPluginClassLoader}.
 * 
 * An example of this would be a class loader access representing a plugin. The class loader access in that case would
 * only return `true` on calls for {@link #canAccess(ConfiguredPluginClassLoader)} if the passed class loader
 * is owned by a direct or transitive dependency of the plugin, preventing the plugin for accidentally discovering and
 * using class types that are supplied by plugins/libraries the plugin did not actively define as a dependency.
*/
export class ClassLoaderAccess {
  /**
   * Evaluates if this class loader access is allowed to access types provided by the passed {@link
   * ConfiguredPluginClassLoader}.
   * 
   * This interface method does not offer any further contracts on the interface level, as the logic to determine
   * what class loaders this class loader access is allowed to retrieve types from depends heavily on the type of
   * access.
   * Legacy spigot types for example may access any class loader available on the server, while modern paper plugins
   * are properly limited to their dependency tree.
   *
   * @param classLoader the class loader for which access should be evaluated
   * @return a plain boolean flag, `true` indicating that this class loader access is allowed to access types
   * from the passed configured plugin class loader, `false` indicating otherwise.
  */
  canAccess(classLoader: ConfiguredPluginClassLoader): boolean;
}
/**
 * The configured plugin class loader represents an internal abstraction over the classloaders used by the server
 * to load and access a plugins classes during runtime.
 * 
 * It implements {@link Closeable} to define the ability to shutdown and close the classloader that implements this
 * interface.
*/
export class ConfiguredPluginClassLoader extends Closeable {
  /**
   * Provides the configuration of the plugin that this plugin classloader provides type access to.
   *
   * @return the plugin meta instance, holding all meta information about the plugin instance.
  */
  getConfiguration(): PluginMeta;
  /**
   * Attempts to load a class from this plugin class loader using the passed fully qualified name.
   * This lookup logic can be configured through the following parameters to define how wide or how narrow the
   * class lookup should be.
   *
   * @param name           the fully qualified name of the class to load
   * @param resolve        whether the class should be resolved if needed or not
   * @param checkGlobal    whether this lookup should check transitive dependencies, including either the legacy spigot
   *                       global class loader or the paper {@link PluginClassLoaderGroup}
   * @param checkLibraries whether the defined libraries should be checked for the class or not
   * @return the class found at the fully qualified class name passed under the passed restrictions
   * @throws ClassNotFoundException if the class could not be found considering the passed restrictions
   * @see ClassLoader#loadClass(String)
   * @see Class#forName(String, boolean, ClassLoader)
  */
  loadClass(name: string, resolve: boolean, checkGlobal: boolean, checkLibraries: boolean): Class<any>;
  /**
   * Initializes both this configured plugin class loader and the java plugin passed to link to each other.
   * This logic is to be called exactly once when the initial setup between the class loader and the instantiated
   * {@link JavaPlugin} is loaded.
   *
   * @param plugin the {@link JavaPlugin} that should be interlinked with this class loader.
  */
  init(plugin: JavaPlugin): void;
  /**
   * Gets the plugin held by this class loader.
   *
   * @return the plugin or null if it doesn't exist yet
  */
  getPlugin(): JavaPlugin | null;
  /**
   * Get the plugin classloader group
   * that is used by the underlying classloader
   * @return classloader
  */
  getGroup(): PluginClassLoaderGroup | null;
}
/**
 * A plugin classloader group represents a group of classloaders that a plugins classloader may access.
 * 
 * An example of this would be a classloader group that holds all direct and transitive dependencies a plugin declared,
 * allowing a plugins classloader to access classes included in these dependencies via this group.
*/
export class PluginClassLoaderGroup {
  /**
   * Attempts to find/load a class from this plugin class loader group using the passed fully qualified name
   * in any of the classloaders that are part of this group.
   * 
   * The lookup order across the contained loaders is not defined on the API level and depends purely on the
   * implementation.
   *
   * @param name      the fully qualified name of the class to load
   * @param resolve   whether the class should be resolved if needed or not
   * @param requester plugin classloader that is requesting the class from this loader group
   * @return the class found at the fully qualified class name passed. If the class could not be found, `null`
   * will be returned.
   * @see ConfiguredPluginClassLoader#loadClass(String, boolean, boolean, boolean)
  */
  getClassByName(name: string, resolve: boolean, requester: ConfiguredPluginClassLoader): Class<any> | null;
  /**
   * Removes a configured plugin classloader from this class loader group.
   * If the classloader is not currently in the list, this method will simply do nothing.
   *
   * @param configuredPluginClassLoader the plugin classloader to remove from the group
  */
  remove(configuredPluginClassLoader: ConfiguredPluginClassLoader): void;
  /**
   * Adds the passed plugin classloader to this group, allowing this group to use it during
   * {@link #getClassByName(String, boolean, ConfiguredPluginClassLoader)} lookups.
   * 
   * This method does not query the {@link ClassLoaderAccess} (exposed via {@link #getAccess()}) to ensure
   * if this group has access to the class loader passed.
   *
   * @param configuredPluginClassLoader the plugin classloader to add to this group.
  */
  add(configuredPluginClassLoader: ConfiguredPluginClassLoader): void;
  /**
   * Provides the class loader access that guards and defines the content of this classloader group.
   * While not guaranteed contractually (see {@link #add(ConfiguredPluginClassLoader)}), the access generally is
   * responsible for defining which {@link ConfiguredPluginClassLoader}s should be part of this group and which ones
   * should not.
   *
   * @return the classloader access governing which classloaders should be part of this group and which ones should
   * not.
  */
  getAccess(): ClassLoaderAccess;
}
/**
 * The plugin classloader storage is an internal type that is used to manage existing classloaders on the server.
 * 
 * The paper classloader storage is also responsible for storing added {@link ConfiguredPluginClassLoader}s into
 * {@link PluginClassLoaderGroup}s, via {@link #registerOpenGroup(ConfiguredPluginClassLoader)},
 * {@link #registerSpigotGroup(PluginClassLoader)} and {@link
 * #registerAccessBackedGroup(ConfiguredPluginClassLoader, ClassLoaderAccess)}.
 * 
 * Groups are differentiated into the global group or plugin owned groups.
 * 
 * The global group holds all registered class loaders and merely exists to maintain backwards compatibility with
 * spigots legacy classloader handling.
 * The plugin groups only contains the classloaders that each plugin has access to and hence serves to properly
 * separates unrelated classloaders.
 * 
*/
export class PaperClassLoaderStorage {
  /**
   * Access to the shared instance of the {@link PaperClassLoaderStorageAccess}.
   *
   * @return the singleton instance of the {@link PaperClassLoaderStorage} used throughout the server
  */
  static instance(): PaperClassLoaderStorage;
  /**
   * Registers a legacy spigot {@link PluginClassLoader} into the loader storage, creating a group wrapping
   * the single plugin class loader with transitive access to the global group.
   *
   * @param pluginClassLoader the legacy spigot plugin class loader to register
   * @return the group the plugin class loader was placed into
  */
  registerSpigotGroup(pluginClassLoader: PluginClassLoader): PluginClassLoaderGroup;
  /**
   * Registers a paper configured plugin classloader into a new open group, with full access to the global
   * plugin class loader group.
   * 
   * This method hence allows the configured plugin class loader to access all other class loaders registered in this
   * storage.
   *
   * @param classLoader the configured plugin class loader to register
   * @return the group the plugin class loader was placed into
  */
  registerOpenGroup(classLoader: ConfiguredPluginClassLoader): PluginClassLoaderGroup;
  /**
   * Registers a paper configured classloader into a new, access backed group.
   * The access backed classloader group, different from an open group, only has access to the classloaders
   * the passed {@link ClassLoaderAccess} grants access to.
   *
   * @param classLoader the configured plugin class loader to register
   * @param access      the class loader access that defines what other classloaders the passed plugin class loader
   *                    should be granted access to.
   * @return the group the plugin class loader was placed into.
  */
  registerAccessBackedGroup(classLoader: ConfiguredPluginClassLoader, access: ClassLoaderAccess): PluginClassLoaderGroup;
  /**
   * Unregisters a configured class loader from this storage.
   * This removes the passed class loaders from any group it may have been a part of, including the global group.
   * 
   * Note: this method is highly discouraged from being used, as mutation of the classloaders at runtime
   * is not encouraged
   *
   * @param configuredPluginClassLoader the class loader to remove from this storage.
  */
  unregisterClassloader(configuredPluginClassLoader: ConfiguredPluginClassLoader): void;
  /**
   * Registers a configured plugin class loader directly into the global group without adding it to
   * any existing groups.
   * 
   * Note: this method unsafely injects the plugin classloader directly into the global group, which bypasses the
   * group structure paper's plugin API introduced. This method should hence be used with caution.
   *
   * @param pluginLoader the configured plugin classloader instance that should be registered directly into the global
   *                     group.
   * @return a simple boolean flag, `true` if the classloader was registered or `false` if the classloader
   * was already part of the global group.
  */
  registerUnsafePlugin(pluginLoader: ConfiguredPluginClassLoader): boolean;
}

}
