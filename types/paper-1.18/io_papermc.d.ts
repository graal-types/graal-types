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
import { Set } from 'java.util';
import { FailReason } from 'io.papermc.paper.event.player.PlayerBedFailEnterEvent';
import { ItemFrameChangeAction } from 'io.papermc.paper.event.player.PlayerItemFrameChangeEvent';
import { PageChangeDirection } from 'io.papermc.paper.event.player.PlayerLecternPageChangeEvent';
import { Material } from 'org.bukkit';
import { MerchantRecipe, LoomInventory, StonecutterInventory, EquipmentSlot, StonecuttingRecipe, ItemStack } from 'org.bukkit.inventory';
import { PotionEffectType } from 'org.bukkit.potion';
import { PatternType } from 'org.bukkit.block.banner';
import { Block, Sign, Lectern } from 'org.bukkit.block';
import { ChatRenderer } from 'io.papermc.paper.chat';
import { HandlerList, Cancellable } from 'org.bukkit.event';
import { Audience } from 'net.kyori.adventure.audience';
import { LivingEntity, Player, AbstractVillager, ItemFrame } from 'org.bukkit.entity';
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
 * Called when a {@link Player} clicks a sign that causes a command to run.
 * 
 * This command is run with elevated permissions which allows players to access commands on signs they wouldn't
 * normally be able to run.
*/
export class PlayerSignCommandPreprocessEvent extends PlayerCommandPreprocessEvent {
  constructor(player: Player, message: string, recipients: Set<Player>, sign: Sign);
  /**
   * Gets the sign that the command originated from.
   *
   * @return the sign
  */
  getSign(): Sign;
}
/**
 * An event fired when a {@link Player} sends a chat message to the server.
 *
 * @deprecated Listening to this event forces chat to wait for the main thread, delaying chat messages. It is recommended to use {@link AsyncChatEvent} instead, wherever possible.
*/
export class ChatEvent extends AbstractChatEvent {
  constructor(player: Player, viewers: Set<Audience>, renderer: ChatRenderer, message: Component, originalMessage: Component);
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
   * Gets if the item used to change the beacon will be consume.
   * 
   * Independant of {@link #isCancelled()}. If the event is cancelled
   * the item will NOT be consumed.
   *
   * @return true if item will be consumed
  */
  willConsumeItem(): boolean;
  /**
   * Sets if the item used to change the beacon should be consumed.
   * 
   * Independant of {@link #isCancelled()}. If the event is cancelled
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
  constructor(async: boolean, player: Player, viewers: Set<Audience>, renderer: ChatRenderer, message: Component, originalMessage: Component);
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

}
declare module 'io.papermc.paper.util' {
import { ClassLoader, Class } from 'java.lang';
import { AbstractList, Iterator, RandomAccess, List, ListIterator, Map } from 'java.util';
import { Manifest } from 'java.util.jar';
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
declare module 'io.papermc.paper.event.block' {
import { PlayerEvent } from 'org.bukkit.event.player';
import { List } from 'java.util';
import { BlockState, BlockFace, Beacon, Block } from 'org.bukkit.block';
import { DragonBattle } from 'org.bukkit.boss';
import { ProjectileHitEvent } from 'org.bukkit.event.entity';
import { HandlerList, Cancellable } from 'org.bukkit.event';
import { BlockFormEvent, BlockEvent } from 'org.bukkit.event.block';
import { EquipmentSlot, ItemStack } from 'org.bukkit.inventory';
import { Entity, Raider, Player, Projectile } from 'org.bukkit.entity';
/**
 * Called when a bell is rung.
*/
export class BellRingEvent extends BlockEvent {
  constructor(block: Block, entity: Entity | null);
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
   * Gets the entity that rang the bell.
   *
   * @return the ringer or null if none
  */
  getEntity(): Entity | null;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface BellRingEvent extends BlockEvent, Cancellable {}
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
 * Called when a {@link org.bukkit.entity.Raider} is revealed by a bell.
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
import { ItemStack } from 'org.bukkit.inventory';
import { Sound, DyeColor } from 'org.bukkit';
import { LivingEntity, Entity } from 'org.bukkit.entity';
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
declare module 'io.papermc.paper.text' {
import { PlainTextComponentSerializer, PlainComponentSerializer } from 'net.kyori.adventure.text.serializer.plain';
import { LegacyComponentSerializer } from 'net.kyori.adventure.text.serializer.legacy';
import { GsonComponentSerializer } from 'net.kyori.adventure.text.serializer.gson';
import { ComponentFlattener } from 'net.kyori.adventure.text.flattener';
/**
 * Paper API-specific methods for working with {@link Component}s and related.
*/
export class PaperComponents {
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
declare module 'io.papermc.paper.world.structure' {
import { Reference } from 'io.papermc.paper.registry';
import { NamespacedKey, StructureType, Keyed } from 'org.bukkit';
/**
 * Represents a configured structure each with a
 * {@link StructureType}. Multiple ConfiguredStructures can have
 * the same {@link StructureType}.
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
 * Called when a moving world border has finished it's move.
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
declare module 'io.papermc.paper.chat' {
import { Component } from 'net.kyori.adventure.text';
import { ViewerUnaware } from 'io.papermc.paper.chat.ChatRenderer';
import { Audience } from 'net.kyori.adventure.audience';
import { Player } from 'org.bukkit.entity';
/**
 * A chat renderer is responsible for rendering chat messages sent by {@link Player}s to the server.
*/
export class ChatRenderer {
  /**
   * Renders a chat message. This will be called once for each receiving {@link Audience}.
   *
   * @param source the message source
   * @param sourceDisplayName the display name of the source player
   * @param message the chat message
   * @param viewer the receiving {@link Audience}
   * @return a rendered chat message
  */
  render(source: Player, sourceDisplayName: Component, message: Component, viewer: Audience): Component;
  /**
   * Create a new instance of the default {@link ChatRenderer}.
   *
   * @return a new {@link ChatRenderer}
  */
  static defaultRenderer(): ChatRenderer;
  /**
   * Creates a new viewer-unaware {@link ChatRenderer}, which will render the chat message a single time,
   * displaying the same rendered message to every viewing {@link Audience}.
   *
   * @param renderer the viewer unaware renderer
   * @return a new {@link ChatRenderer}
  */
  static viewerUnaware(renderer: ViewerUnaware): ChatRenderer;
}

}
declare module 'io.papermc.paper.event.entity' {
import { Component } from 'net.kyori.adventure.text';
import { Block } from 'org.bukkit.block';
import { EntityEvent } from 'org.bukkit.event.entity';
import { HandlerList, Cancellable } from 'org.bukkit.event';
import { DyeColor, Location } from 'org.bukkit';
import { EquipmentSlot, ItemStack } from 'org.bukkit.inventory';
import { LivingEntity, Entity, Player, Tameable, PufferFish, ElderGuardian } from 'org.bukkit.entity';
/**
 * Called when an entity enters the hitbox of a block.
 * Only called for blocks that react when an entity is inside.
 * If cancelled, any action that would have resulted from that entity
 * being in the block will not happen (such as extinguishing an entity in a cauldron).
 * 
 * Blocks this is currently called for:
 * 
 *     Bubble column
 *     Buttons
 *     Cactus
 *     Campfire
 *     Cauldron
 *     Crops
 *     Ender Portal
 *     Fires
 *     Honey
 *     Hopper
 *     Detector rails
 *     Nether portals
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

}
declare module 'io.papermc.paper.chat.ChatRenderer' {
import { Component } from 'net.kyori.adventure.text';
import { Player } from 'org.bukkit.entity';
/**
 * Similar to {@link ChatRenderer}, but without knowledge of the message viewer.
 *
 * @see ChatRenderer#viewerUnaware(ViewerUnaware)
*/
export class ViewerUnaware {
  /**
   * Renders a chat message.
   *
   * @param source the message source
   * @param sourceDisplayName the display name of the source player
   * @param message the chat message
   * @return a rendered chat message
  */
  render(source: Player, sourceDisplayName: Component, message: Component): Component;
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
