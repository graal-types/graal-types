declare module 'com.destroystokyo.paper.exception' {
import { BukkitTask } from 'org.bukkit.scheduler';
import { Throwable, Exception } from 'java.lang';
import { Command, CommandSender } from 'org.bukkit.command';
import { Listener, Event } from 'org.bukkit.event';
import { Plugin } from 'org.bukkit.plugin';
import { Player } from 'org.bukkit.entity';
/**
 * Thrown when the internal server throws a recoverable exception.
*/
export class ServerInternalException extends ServerException {
  constructor(message: string);
  constructor(message: string, cause: Throwable);
  constructor(cause: Throwable);
  static reportInternalException(cause: Throwable): void;
}
/**
 * Thrown whenever there is an exception with any enabling or disabling of plugins.
*/
export class ServerPluginEnableDisableException extends ServerPluginException {
  constructor(message: string, cause: Throwable, responsiblePlugin: Plugin);
  constructor(cause: Throwable, responsiblePlugin: Plugin);
}
/**
 * Thrown when an incoming plugin message channel throws an exception
*/
export class ServerPluginMessageException extends ServerPluginException {
  constructor(message: string, cause: Throwable, responsiblePlugin: Plugin, player: Player, channel: string, data: number[]);
  constructor(cause: Throwable, responsiblePlugin: Plugin, player: Player, channel: string, data: number[]);
  /**
   * Gets the channel to which the error occurred from recieving data from
   *
   * @return exception channel
  */
  getChannel(): string;
  /**
   * Gets the data to which the error occurred from
   *
   * @return exception data
  */
  getData(): number[];
  /**
   * Gets the player which the plugin message causing the exception originated from
   *
   * @return exception player
  */
  getPlayer(): Player;
}
/**
 * Thrown when a plugin's scheduler fails with an exception
*/
export class ServerSchedulerException extends ServerPluginException {
  constructor(message: string, cause: Throwable, task: BukkitTask);
  constructor(cause: Throwable, task: BukkitTask);
  /**
   * Gets the task which threw the exception
   *
   * @return exception throwing task
  */
  getTask(): BukkitTask;
}
/**
 * Called when a tab-complete request throws an exception
*/
export class ServerTabCompleteException extends ServerCommandException {
  constructor(message: string, cause: Throwable, command: Command, commandSender: CommandSender, arguments: string[]);
  constructor(cause: Throwable, command: Command, commandSender: CommandSender, arguments: string[]);
}
/**
 * Exception thrown when a server event listener throws an exception
*/
export class ServerEventException extends ServerPluginException {
  constructor(message: string, cause: Throwable, responsiblePlugin: Plugin, listener: Listener, event: Event);
  constructor(cause: Throwable, responsiblePlugin: Plugin, listener: Listener, event: Event);
  /**
   * Gets the listener which threw the exception
   *
   * @return event listener
  */
  getListener(): Listener;
  /**
   * Gets the event which caused the exception
   *
   * @return event
  */
  getEvent(): Event;
}
/**
 * Wrapper exception for all cases to which a plugin can be immediately blamed for
*/
export class ServerPluginException extends ServerException {
  constructor(message: string, cause: Throwable, responsiblePlugin: Plugin);
  constructor(cause: Throwable, responsiblePlugin: Plugin);
  /**
   * Gets the plugin which is directly responsible for the exception being thrown
   *
   * @return plugin which is responsible for the exception throw
  */
  getResponsiblePlugin(): Plugin;
}
/**
 * Wrapper exception for all exceptions that are thrown by the server.
*/
export class ServerException extends Exception {
  constructor(message: string);
  constructor(message: string, cause: Throwable);
  constructor(cause: Throwable);
}
/**
 * Thrown when a command throws an exception
*/
export class ServerCommandException extends ServerException {
  constructor(message: string, cause: Throwable, command: Command, commandSender: CommandSender, arguments: string[]);
  constructor(cause: Throwable, command: Command, commandSender: CommandSender, arguments: string[]);
  /**
   * Gets the command which threw the exception
   *
   * @return exception throwing command
  */
  getCommand(): Command;
  /**
   * Gets the command sender which executed the command request
   *
   * @return command sender of exception thrown command request
  */
  getCommandSender(): CommandSender;
  /**
   * Gets the arguments which threw the exception for the command
   *
   * @return arguments of exception thrown command request
  */
  getArguments(): string[];
}

}
declare module 'com.destroystokyo.paper.utils' {
import { Logger } from 'java.util.logging';
import { ConcurrentLinkedQueue } from 'java.util.concurrent';
import { LongAdder } from 'java.util.concurrent.atomic';
import { PluginDescriptionFile } from 'org.bukkit.plugin';
/**
 * Prevents plugins (e.g. Essentials) from changing the parent of the plugin logger.
*/
export class PaperPluginLogger extends Logger {
  static getLogger(description: PluginDescriptionFile): Logger;
  setParent(parent: Logger);
}
export class CachedSizeConcurrentLinkedQueue<E> extends ConcurrentLinkedQueue<E> {
  add(e: E): boolean;
  poll(): E | null;
  size(): number;
}

}
declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse' {
import { Collection, List } from 'java.util';
import { QueryResponse } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
/**
 * A builder for {@link QueryResponse} objects.
*/
export class Builder {
  motd(motd: string): Builder;
  gameVersion(gameVersion: string): Builder;
  map(map: string): Builder;
  currentPlayers(currentPlayers: number): Builder;
  maxPlayers(maxPlayers: number): Builder;
  hostname(hostname: string): Builder;
  port(port: number): Builder;
  players(players: Collection<string>): Builder;
  players(...players: string[]): Builder;
  clearPlayers(): Builder;
  serverVersion(serverVersion: string): Builder;
  plugins(plugins: Collection<PluginInformation>): Builder;
  plugins(...plugins: PluginInformation[]): Builder;
  clearPlugins(): Builder;
  /**
   * Builds new {@link QueryResponse} with supplied data
   * @return response
  */
  build(): QueryResponse;
}
/**
 * Plugin information
*/
export class PluginInformation {
  constructor(name: string, version: string);
  getName(): string;
  setName(name: string);
  setVersion(version: string);
  getVersion(): string;
  static of(name: string, version: string): PluginInformation;
}

}
declare module 'com.destroystokyo.paper.loottable' {
import { PlayerEvent } from 'org.bukkit.event.player';
import { UUID } from 'java.util';
import { Block } from 'org.bukkit.block';
import { Lootable } from 'org.bukkit.loot';
import { HandlerList, Cancellable } from 'org.bukkit.event';
import { Entity, Player } from 'org.bukkit.entity';
/**
 * Represents an Inventory that can generate loot, such as Chests inside of Fortresses and Mineshafts
*/
export class LootableBlockInventory extends LootableInventory {
  /**
   * Gets the block that is lootable
   * @return The Block
  */
  getBlock(): Block;
}
/**
 * Represents an Inventory that contains a Loot Table associated to it that will
 * automatically fill on first open.
 *
 * A new feature and API is provided to support automatically refreshing the contents
 * of the inventory based on that Loot Table after a configurable amount of time has passed.
 *
 * The behavior of how the Inventory is filled based on the loot table may vary based
 * on Minecraft versions and the Loot Table feature.
*/
export class LootableInventory extends Lootable {
  /**
   * Server owners have to enable whether or not an object in a world should refill
   *
   * @return If the world this inventory is currently in has Replenishable Lootables enabled
  */
  isRefillEnabled(): boolean;
  /**
   * Whether or not this object has ever been filled
   * @return Has ever been filled
  */
  hasBeenFilled(): boolean;
  /**
   * Has this player ever looted this block
   * @param player The player to check
   * @return Whether or not this player has looted this block
  */
  hasPlayerLooted(player: Player): boolean;
  /**
   * Has this player ever looted this block
   * @param player The player to check
   * @return Whether or not this player has looted this block
  */
  hasPlayerLooted(player: UUID): boolean;
  /**
   * Gets the timestamp, in milliseconds, of when the player last looted this object
   *
   * @param player The player to check
   * @return Timestamp last looted, or null if player has not looted this object
  */
  getLastLooted(player: Player): number | null;
  /**
   * Gets the timestamp, in milliseconds, of when the player last looted this object
   *
   * @param player The player to check
   * @return Timestamp last looted, or null if player has not looted this object
  */
  getLastLooted(player: UUID): number | null;
  /**
   * Change the state of whether or not a player has looted this block
   * @param player The player to change state for
   * @param looted true to add player to looted list, false to remove
   * @return The previous state of whether the player had looted this or not
  */
  setHasPlayerLooted(player: Player, looted: boolean): boolean;
  /**
   * Change the state of whether or not a player has looted this block
   * @param player The player to change state for
   * @param looted true to add player to looted list, false to remove
   * @return The previous state of whether the player had looted this or not
  */
  setHasPlayerLooted(player: UUID, looted: boolean): boolean;
  /**
   * Returns Whether or not this object has been filled and now has a pending refill
   * @return Has pending refill
  */
  hasPendingRefill(): boolean;
  /**
   * Gets the timestamp in milliseconds that the Lootable object was last refilled
   *
   * @return -1 if it was never refilled, or timestamp in milliseconds
  */
  getLastFilled(): number;
  /**
   * Gets the timestamp in milliseconds that the Lootable object will refill
   *
   * @return -1 if it is not scheduled for refill, or timestamp in milliseconds
  */
  getNextRefill(): number;
  /**
   * Sets the timestamp in milliseconds of the next refill for this object
   *
   * @param refillAt timestamp in milliseconds. -1 to clear next refill
   * @return The previous scheduled time to refill, or -1 if was not scheduled
  */
  setNextRefill(nextRefill: number);
}
/**
 * Represents an Inventory that can generate loot, such as Minecarts inside of Mineshafts
*/
export class LootableEntityInventory extends LootableInventory {
  /**
   * Gets the entity that is lootable
   * @return The Entity
  */
  getEntity(): Entity;
}
export class LootableInventoryReplenishEvent extends PlayerEvent {
  constructor(player: Player, inventory: LootableInventory);
  getInventory(): LootableInventory;
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
export interface LootableInventoryReplenishEvent extends PlayerEvent, Cancellable {}

}
declare module 'com.destroystokyo.paper.inventory.meta' {
import { ItemMeta } from 'org.bukkit.inventory.meta';
export class ArmorStandMeta extends ItemMeta {
  /**
   * Gets whether the ArmorStand should be invisible when spawned
   *
   * @return true if this should be invisible
  */
  isInvisible(): boolean;
  /**
   * Gets whether this ArmorStand should have no base plate when spawned
   *
   * @return true if it will not have a base plate
  */
  hasNoBasePlate(): boolean;
  /**
   * Gets whether this ArmorStand should show arms when spawned
   *
   * @return true if it will show arms
  */
  shouldShowArms(): boolean;
  /**
   * Gets whether this ArmorStand will be small when spawned
   *
   * @return true if it will be small
  */
  isSmall(): boolean;
  /**
   * Gets whether this ArmorStand will be a marker when spawned
   * The exact details of this flag are an implementation detail
   *
   * @return true if it will be a marker
  */
  isMarker(): boolean;
  /**
   * Sets that this ArmorStand should be invisible when spawned
   *
   * @param invisible true if set invisible
  */
  setInvisible(invisible: boolean): void;
  /**
   * Sets that this ArmorStand should have no base plate when spawned
   *
   * @param noBasePlate true if no base plate
  */
  setNoBasePlate(noBasePlate: boolean): void;
  /**
   * Sets that this ArmorStand should show arms when spawned
   *
   * @param showArms true if show arms
  */
  setShowArms(showArms: boolean): void;
  /**
   * Sets that this ArmorStand should be small when spawned
   *
   * @param small true if small
  */
  setSmall(small: boolean): void;
  /**
   * Sets that this ArmorStand should be a marker when spawned
   * The exact details of this flag are an implementation detail
   *
   * @param marker true if a marker
  */
  setMarker(marker: boolean): void;
}

}
declare module 'com.destroystokyo.paper.entity.ai' {
import { EnumSet, Collection } from 'java.util';
import { Enum, Class } from 'java.lang';
import { RangedEntity } from 'com.destroystokyo.paper.entity';
import { NamespacedKey } from 'org.bukkit';
import { AbstractHorse, Creature, Dolphin, Vex, Strider, Phantom, WanderingTrader, Guardian, AbstractVillager, Turtle, Raider, Zombie, Parrot, Evoker, Ravager, Fox, Panda, Ocelot, Drowned, Enderman, Cat, Vindicator, AbstractSkeleton, TraderLlama, Creeper, Rabbit, Silverfish, IronGolem, Shulker, Illager, Squid, Monster, Spellcaster, Fish, Wolf, SkeletonHorse, Wither, PolarBear, Mob, Bee, Tameable, PufferFish, Slime, Illusioner, Animals, Llama, Blaze, PigZombie, Ghast, Spider } from 'org.bukkit.entity';
/**
 * Represents a vanilla goal. Plugins should never implement this.
 * Generated by VanillaPathfinderTest in paper-server
*/
export class VanillaGoal<T> extends Goal<T> {
  static readonly AVOID_ENTITY: GoalKey<Creature>;
  static readonly BEG: GoalKey<Wolf>;
  static readonly BREAK_DOOR: GoalKey<Mob>;
  static readonly BREATH_AIR: GoalKey<Creature>;
  static readonly BREED: GoalKey<Animals>;
  static readonly CAT_LIE_ON_BED: GoalKey<Cat>;
  static readonly CAT_SIT_ON_BLOCK: GoalKey<Cat>;
  static readonly DOLPHIN_JUMP: GoalKey<Dolphin>;
  static readonly EAT_BLOCK: GoalKey<Mob>;
  static readonly FLEE_SUN: GoalKey<Creature>;
  static readonly FLOAT: GoalKey<Mob>;
  static readonly FOLLOW_BOAT: GoalKey<Creature>;
  static readonly FOLLOW_FLOCK_LEADER: GoalKey<Fish>;
  static readonly FOLLOW_MOB: GoalKey<Mob>;
  static readonly FOLLOW_OWNER: GoalKey<Tameable>;
  static readonly FOLLOW_PARENT: GoalKey<Animals>;
  static readonly GOLEM_RANDOM_STROLL_IN_VILLAGE: GoalKey<Creature>;
  static readonly INTERACT: GoalKey<Mob>;
  static readonly LAND_ON_OWNERS_SHOULDER: GoalKey<Parrot>;
  static readonly LEAP_AT: GoalKey<Mob>;
  static readonly LLAMA_FOLLOW_CARAVAN: GoalKey<Llama>;
  static readonly LOOK_AT_PLAYER: GoalKey<Mob>;
  static readonly LOOK_AT_TRADING_PLAYER: GoalKey<AbstractVillager>;
  static readonly MELEE_ATTACK: GoalKey<Creature>;
  static readonly MOVE_BACK_TO_VILLAGE: GoalKey<Creature>;
  static readonly MOVE_THROUGH_VILLAGE: GoalKey<Creature>;
  static readonly MOVE_TOWARDS_RESTRICTION: GoalKey<Creature>;
  static readonly MOVE_TOWARDS: GoalKey<Creature>;
  static readonly OCELOT_ATTACK: GoalKey<Mob>;
  static readonly OFFER_FLOWER: GoalKey<IronGolem>;
  static readonly OPEN_DOOR: GoalKey<Mob>;
  static readonly PANIC: GoalKey<Creature>;
  static readonly PATHFIND_TO_RAID: GoalKey<Raider>;
  static readonly RANDOM_LOOK_AROUND: GoalKey<Mob>;
  static readonly RANDOM_STROLL: GoalKey<Creature>;
  static readonly RANDOM_SWIMMING: GoalKey<Creature>;
  static readonly RANGED_ATTACK: GoalKey<RangedEntity>;
  static readonly RANGED_BOW_ATTACK: GoalKey<Monster>;
  static readonly RANGED_CROSSBOW_ATTACK: GoalKey<Monster>;
  static readonly REMOVE_BLOCK: GoalKey<Creature>;
  static readonly RESTRICT_SUN: GoalKey<Creature>;
  static readonly RUN_AROUND_LIKE_CRAZY: GoalKey<AbstractHorse>;
  static readonly SIT_WHEN_ORDERED_TO: GoalKey<Tameable>;
  static readonly STROLL_THROUGH_VILLAGE: GoalKey<Creature>;
  static readonly SWELL: GoalKey<Creeper>;
  static readonly TEMPT: GoalKey<Creature>;
  static readonly TRADE_WITH_PLAYER: GoalKey<AbstractVillager>;
  static readonly TRY_FIND_WATER: GoalKey<Creature>;
  static readonly USE_ITEM: GoalKey<Mob>;
  static readonly WATER_AVOIDING_RANDOM_FLYING: GoalKey<Creature>;
  static readonly WATER_AVOIDING_RANDOM_STROLL: GoalKey<Creature>;
  static readonly ZOMBIE_ATTACK: GoalKey<Zombie>;
  static readonly DEFEND_VILLAGE: GoalKey<IronGolem>;
  static readonly HURT_BY: GoalKey<Creature>;
  static readonly NEAREST_ATTACKABLE: GoalKey<Mob>;
  static readonly NEAREST_ATTACKABLE_WITCH: GoalKey<Raider>;
  static readonly NEAREST_HEALABLE_RAIDER: GoalKey<Raider>;
  static readonly NON_TAME_RANDOM: GoalKey<Tameable>;
  static readonly OWNER_HURT_BY: GoalKey<Tameable>;
  static readonly OWNER_HURT: GoalKey<Tameable>;
  static readonly RESET_UNIVERSAL_ANGER: GoalKey<Mob>;
  static readonly FISH_SWIM: GoalKey<Fish>;
  static readonly BEE_ATTACK: GoalKey<Bee>;
  static readonly BEE_BECOME_ANGRY: GoalKey<Bee>;
  static readonly BEE_ENTER_HIVE: GoalKey<Bee>;
  static readonly BEE_GO_TO_HIVE: GoalKey<Bee>;
  static readonly BEE_GO_TO_KNOWN_FLOWER: GoalKey<Bee>;
  static readonly BEE_GROW_CROP: GoalKey<Bee>;
  static readonly BEE_HURT_BY_OTHER: GoalKey<Bee>;
  static readonly BEE_LOCATE_HIVE: GoalKey<Bee>;
  static readonly BEE_POLLINATE: GoalKey<Bee>;
  static readonly BEE_WANDER: GoalKey<Bee>;
  static readonly CAT_AVOID_ENTITY: GoalKey<Cat>;
  static readonly CAT_RELAX_ON_OWNER: GoalKey<Cat>;
  static readonly CAT_TEMPT: GoalKey<Cat>;
  static readonly DOLPHIN_SWIM_TO_TREASURE: GoalKey<Dolphin>;
  static readonly DOLPHIN_SWIM_WITH_PLAYER: GoalKey<Dolphin>;
  static readonly PLAY_WITH_ITEMS: GoalKey<Dolphin>;
  static readonly DEFEND_TRUSTED: GoalKey<Fox>;
  static readonly FACEPLANT: GoalKey<Fox>;
  static readonly FOX_BREED: GoalKey<Fox>;
  static readonly FOX_EAT_BERRIES: GoalKey<Fox>;
  static readonly FOX_FLOAT: GoalKey<Fox>;
  static readonly FOX_FOLLOW_PARENT: GoalKey<Fox>;
  static readonly FOX_LOOK_AT_PLAYER: GoalKey<Fox>;
  static readonly FOX_MELEE_ATTACK: GoalKey<Fox>;
  static readonly FOX_PANIC: GoalKey<Fox>;
  static readonly FOX_POUNCE: GoalKey<Fox>;
  static readonly FOX_SEARCH_FOR_ITEMS: GoalKey<Fox>;
  static readonly FOX_STROLL_THROUGH_VILLAGE: GoalKey<Fox>;
  static readonly PERCH_AND_SEARCH: GoalKey<Fox>;
  static readonly SEEK_SHELTER: GoalKey<Fox>;
  static readonly SLEEP: GoalKey<Fox>;
  static readonly STALK_PREY: GoalKey<Fox>;
  static readonly OCELOT_AVOID_ENTITY: GoalKey<Ocelot>;
  static readonly OCELOT_TEMPT: GoalKey<Ocelot>;
  static readonly PANDA_ATTACK: GoalKey<Panda>;
  static readonly PANDA_AVOID: GoalKey<Panda>;
  static readonly PANDA_BREED: GoalKey<Panda>;
  static readonly PANDA_HURT_BY: GoalKey<Panda>;
  static readonly PANDA_LIE_ON_BACK: GoalKey<Panda>;
  static readonly PANDA_LOOK_AT_PLAYER: GoalKey<Panda>;
  static readonly PANDA_PANIC: GoalKey<Panda>;
  static readonly PANDA_ROLL: GoalKey<Panda>;
  static readonly PANDA_SIT: GoalKey<Panda>;
  static readonly PANDA_SNEEZE: GoalKey<Panda>;
  static readonly POLAR_BEAR_ATTACK_PLAYERS: GoalKey<PolarBear>;
  static readonly POLAR_BEAR_HURT_BY: GoalKey<PolarBear>;
  static readonly POLAR_BEAR_MELEE_ATTACK: GoalKey<PolarBear>;
  static readonly POLAR_BEAR_PANIC: GoalKey<PolarBear>;
  static readonly PUFFERFISH_PUFF: GoalKey<PufferFish>;
  static readonly EVIL_RABBIT_ATTACK: GoalKey<Rabbit>;
  static readonly RABBIT_AVOID_ENTITY: GoalKey<Rabbit>;
  static readonly RABBIT_PANIC: GoalKey<Rabbit>;
  static readonly RAID_GARDEN: GoalKey<Rabbit>;
  static readonly SQUID_FLEE: GoalKey<Squid>;
  static readonly SQUID_RANDOM_MOVEMENT: GoalKey<Squid>;
  static readonly TURTLE_BREED: GoalKey<Turtle>;
  static readonly TURTLE_GO_HOME: GoalKey<Turtle>;
  static readonly TURTLE_GO_TO_WATER: GoalKey<Turtle>;
  static readonly TURTLE_LAY_EGG: GoalKey<Turtle>;
  static readonly TURTLE_PANIC: GoalKey<Turtle>;
  static readonly TURTLE_RANDOM_STROLL: GoalKey<Turtle>;
  static readonly TURTLE_TRAVEL: GoalKey<Turtle>;
  static readonly WOLF_AVOID_ENTITY: GoalKey<Wolf>;
  static readonly LLAMA_ATTACK_WOLF: GoalKey<Llama>;
  static readonly LLAMA_HURT_BY: GoalKey<Llama>;
  static readonly SKELETON_TRAP: GoalKey<SkeletonHorse>;
  static readonly TRADER_LLAMA_DEFEND_WANDERING_TRADER: GoalKey<Llama>;
  static readonly WITHER_DO_NOTHING: GoalKey<Wither>;
  static readonly RAIDER_OPEN_DOOR: GoalKey<Illager>;
  static readonly SKELETON_MELEE: GoalKey<AbstractSkeleton>;
  static readonly BLAZE_ATTACK: GoalKey<Blaze>;
  static readonly DROWNED_ATTACK: GoalKey<Drowned>;
  static readonly DROWNED_GO_TO_BEACH: GoalKey<Drowned>;
  static readonly DROWNED_GO_TO_WATER: GoalKey<Creature>;
  static readonly DROWNED_SWIM_UP: GoalKey<Drowned>;
  static readonly DROWNED_TRIDENT_ATTACK: GoalKey<RangedEntity>;
  static readonly ENDERMAN_FREEZE_WHEN_LOOKED_AT: GoalKey<Enderman>;
  static readonly ENDERMAN_LEAVE_BLOCK: GoalKey<Enderman>;
  static readonly ENDERMAN_LOOK_FOR_PLAYER: GoalKey<Enderman>;
  static readonly ENDERMAN_TAKE_BLOCK: GoalKey<Enderman>;
  static readonly EVOKER_ATTACK_SPELL: GoalKey<Evoker>;
  static readonly EVOKER_CASTING_SPELL: GoalKey<Evoker>;
  static readonly EVOKER_SUMMON_SPELL: GoalKey<Evoker>;
  static readonly EVOKER_WOLOLO_SPELL: GoalKey<Evoker>;
  static readonly GHAST_LOOK: GoalKey<Ghast>;
  static readonly GHAST_SHOOT_FIREBALL: GoalKey<Ghast>;
  static readonly RANDOM_FLOAT_AROUND: GoalKey<Ghast>;
  static readonly GUARDIAN_ATTACK: GoalKey<Guardian>;
  static readonly ILLUSIONER_BLINDNESS_SPELL: GoalKey<Illusioner>;
  static readonly ILLUSIONER_MIRROR_SPELL: GoalKey<Illusioner>;
  static readonly LONG_DISTANCE_PATROL: GoalKey<Raider>;
  static readonly PHANTOM_ATTACK_PLAYER: GoalKey<Phantom>;
  static readonly PHANTOM_ATTACK_STRATEGY: GoalKey<Phantom>;
  static readonly PHANTOM_CIRCLE_AROUND_ANCHOR: GoalKey<Phantom>;
  static readonly PHANTOM_SWEEP_ATTACK: GoalKey<Phantom>;
  static readonly RAVAGER_MELEE_ATTACK: GoalKey<Ravager>;
  static readonly SHULKER_ATTACK: GoalKey<Shulker>;
  static readonly SHULKER_DEFENSE_ATTACK: GoalKey<Shulker>;
  static readonly SHULKER_NEAREST_ATTACK: GoalKey<Shulker>;
  static readonly SHULKER_PEEK: GoalKey<Shulker>;
  static readonly SILVERFISH_MERGE_WITH_STONE: GoalKey<Silverfish>;
  static readonly SILVERFISH_WAKE_UP_FRIENDS: GoalKey<Silverfish>;
  static readonly SLIME_ATTACK: GoalKey<Slime>;
  static readonly SLIME_FLOAT: GoalKey<Slime>;
  static readonly SLIME_KEEP_ON_JUMPING: GoalKey<Slime>;
  static readonly SLIME_RANDOM_DIRECTION: GoalKey<Slime>;
  static readonly SPELLCASTER_CASTING_SPELL: GoalKey<Spellcaster>;
  static readonly SPIDER_ATTACK: GoalKey<Spider>;
  static readonly SPIDER: GoalKey<Spider>;
  static readonly STRIDER_GO_TO_LAVA: GoalKey<Strider>;
  static readonly VEX_CHARGE_ATTACK: GoalKey<Vex>;
  static readonly VEX_COPY_OWNER: GoalKey<Vex>;
  static readonly VEX_RANDOM_MOVE: GoalKey<Vex>;
  static readonly VINDICATOR_BREAK_DOOR: GoalKey<Mob>;
  static readonly VINDICATOR_JOHNNY_ATTACK: GoalKey<Vindicator>;
  static readonly VINDICATOR_MELEE_ATTACK: GoalKey<Vindicator>;
  static readonly ZOMBIE_ATTACK_TURTLE_EGG: GoalKey<Zombie>;
  static readonly WANDER_TO_POSITION: GoalKey<WanderingTrader>;
  static readonly HOLD_GROUND_ATTACK: GoalKey<Raider>;
  static readonly OBTAIN_RAID_LEADER_BANNER: GoalKey<Raider>;
  static readonly RAIDER_CELEBRATION: GoalKey<Raider>;
  static readonly RAIDER_MOVE_THROUGH_VILLAGE: GoalKey<Raider>;
  static readonly PARROT_WANDER: GoalKey<Creature>;
  static readonly CLIMB_ON_TOP_OF_POWDER_SNOW: GoalKey<Mob>;
  static readonly WOLF_PANIC: GoalKey<Wolf>;
  /**
   * @deprecated removed in 1.16
  */
  static readonly ANGER: GoalKey<PigZombie>;
  /**
   * @deprecated removed in 1.16
  */
  static readonly ANGER_OTHER: GoalKey<PigZombie>;
  static readonly BLAZE_FIREBALL: GoalKey<Blaze>;
  static readonly TEMPT_CHANCE: GoalKey<Cat>;
  static readonly DOLPHIN_PLAY_WITH_ITEMS: GoalKey<Dolphin>;
  static readonly DROWNED_GOTO_BEACH: GoalKey<Drowned>;
  static readonly DROWNED_GOTO_WATER: GoalKey<Creature>;
  static readonly ENDERMAN_PICKUP_BLOCK: GoalKey<Enderman>;
  static readonly ENDERMAN_PLACE_BLOCK: GoalKey<Enderman>;
  static readonly PLAYER_WHO_LOOKED_AT_TARGET: GoalKey<Enderman>;
  static readonly EVOKER_CAST_SPELL: GoalKey<Evoker>;
  static readonly FOX_DEFEND_TRUSTED: GoalKey<Fox>;
  static readonly FOX_FACEPLANT: GoalKey<Fox>;
  static readonly FOX_PERCH_AND_SEARCH: GoalKey<Fox>;
  static readonly FOX_SLEEP: GoalKey<Fox>;
  static readonly FOX_SEEK_SHELTER: GoalKey<Fox>;
  static readonly FOX_STALK_PREY: GoalKey<Fox>;
  static readonly GHAST_ATTACK_TARGET: GoalKey<Ghast>;
  static readonly GHAST_IDLE_MOVE: GoalKey<Ghast>;
  static readonly GHAST_MOVE_TOWARDS_TARGET: GoalKey<Ghast>;
  static readonly SPELLCASTER_CAST_SPELL: GoalKey<Spellcaster>;
  static readonly LLAMATRADER_DEFENDED_WANDERING_TRADER: GoalKey<TraderLlama>;
  static readonly PANDA_HURT_BY_TARGET: GoalKey<Panda>;
  static readonly POLARBEAR_ATTACK_PLAYERS: GoalKey<PolarBear>;
  static readonly POLARBEAR_HURT_BY: GoalKey<PolarBear>;
  static readonly POLARBEAR_MELEE: GoalKey<PolarBear>;
  static readonly POLARBEAR_PANIC: GoalKey<PolarBear>;
  static readonly EAT_CARROTS: GoalKey<Rabbit>;
  static readonly KILLER_RABBIT_MELEE_ATTACK: GoalKey<Rabbit>;
  static readonly RABBIT_AVOID_TARGET: GoalKey<Rabbit>;
  static readonly RAIDER_HOLD_GROUND: GoalKey<Raider>;
  static readonly RAIDER_OBTAIN_BANNER: GoalKey<Raider>;
  static readonly SHULKER_DEFENSE: GoalKey<Shulker>;
  static readonly SHULKER_NEAREST: GoalKey<Shulker>;
  static readonly SILVERFISH_HIDE_IN_BLOCK: GoalKey<Silverfish>;
  static readonly SILVERFISH_WAKE_OTHERS: GoalKey<Silverfish>;
  static readonly SLIME_IDLE: GoalKey<Slime>;
  static readonly SLIME_NEAREST_PLAYER: GoalKey<Slime>;
  static readonly SLIME_RANDOM_JUMP: GoalKey<Slime>;
  static readonly SPIDER_MELEE_ATTACK: GoalKey<Spider>;
  static readonly SPIDER_NEAREST_ATTACKABLE_TARGET: GoalKey<Spider>;
  static readonly SQUID: GoalKey<Squid>;
  static readonly TURTLE_GOTO_WATER: GoalKey<Turtle>;
  static readonly TURTLE_TEMPT: GoalKey<Turtle>;
  static readonly VEX_COPY_TARGET_OF_OWNER: GoalKey<Vex>;
  static readonly VILLAGERTRADER_WANDER_TO_POSITION: GoalKey<WanderingTrader>;
  static readonly ARROW_ATTACK: GoalKey<RangedEntity>;
  static readonly AVOID_TARGET: GoalKey<Creature>;
  static readonly BOW_SHOOT: GoalKey<Monster>;
  static readonly BREATH: GoalKey<Creature>;
  static readonly CAT_SIT_ON_BED: GoalKey<Cat>;
  static readonly CROSSBOW_ATTACK: GoalKey<Monster>;
  static readonly DOOR_OPEN: GoalKey<Mob>;
  static readonly EAT_TILE: GoalKey<Mob>;
  static readonly FISH_SCHOOL: GoalKey<Fish>;
  static readonly FOLLOW_ENTITY: GoalKey<Mob>;
  static readonly HORSE_TRAP: GoalKey<SkeletonHorse>;
  static readonly HURT_BY_TARGET: GoalKey<Creature>;
  static readonly JUMP_ON_BLOCK: GoalKey<Cat>;
  static readonly LEAP_AT_TARGET: GoalKey<Mob>;
  static readonly LLAMA_FOLLOW: GoalKey<Llama>;
  static readonly MOVE_TOWARDS_TARGET: GoalKey<Creature>;
  static readonly NEAREST_ATTACKABLE_TARGET: GoalKey<Mob>;
  static readonly NEAREST_ATTACKABLE_TARGET_WITCH: GoalKey<Raider>;
  static readonly NEAREST_VILLAGE: GoalKey<Creature>;
  static readonly OWNER_HURT_BY_TARGET: GoalKey<Tameable>;
  static readonly OWNER_HURT_TARGET: GoalKey<Tameable>;
  static readonly PERCH: GoalKey<Parrot>;
  static readonly RAID: GoalKey<Raider>;
  static readonly RANDOM_FLY: GoalKey<Creature>;
  static readonly RANDOM_LOOKAROUND: GoalKey<Mob>;
  static readonly RANDOM_STROLL_LAND: GoalKey<Creature>;
  static readonly RANDOM_SWIM: GoalKey<Creature>;
  static readonly RANDOM_TARGET_NON_TAMED: GoalKey<Tameable>;
  static readonly SIT: GoalKey<Tameable>;
  static readonly STROLL_VILLAGE: GoalKey<Creature>;
  static readonly TAME: GoalKey<AbstractHorse>;
  static readonly WATER: GoalKey<Creature>;
  static readonly WATER_JUMP: GoalKey<Dolphin>;
  static readonly STROLL_VILLAGE_GOLEM: GoalKey<Creature>;
  static readonly UNIVERSAL_ANGER_RESET: GoalKey<Mob>;
}
/**
 * Represents a part of the "brain" of a mob. It tracks all tasks (running or not), allows adding and removing goals
*/
export class MobGoals {
  addGoal<T>(mob: T, priority: number, goal: Goal<T>): void;
  removeGoal<T>(mob: T, goal: Goal<T>): void;
  removeAllGoals<T>(mob: T): void;
  removeAllGoals<T>(mob: T, type: GoalType): void;
  removeGoal<T>(mob: T, key: GoalKey<T>): void;
  hasGoal<T>(mob: T, key: GoalKey<T>): boolean;
  getGoal<T>(mob: T, key: GoalKey<T>): Goal<T> | null;
  getGoals<T>(mob: T, key: GoalKey<T>): Collection<Goal<T>>;
  getAllGoals<T>(mob: T): Collection<Goal<T>>;
  getAllGoals<T>(mob: T, type: GoalType): Collection<Goal<T>>;
  getAllGoalsWithout<T>(mob: T, type: GoalType): Collection<Goal<T>>;
  getRunningGoals<T>(mob: T): Collection<Goal<T>>;
  getRunningGoals<T>(mob: T, type: GoalType): Collection<Goal<T>>;
  getRunningGoalsWithout<T>(mob: T, type: GoalType): Collection<Goal<T>>;
}
/**
 *
 * Used to identify a Goal. Consists of a {@link NamespacedKey} and the type of mob the goal can be applied to
 *
 * @param  the type of mob the goal can be applied to
*/
export class GoalKey<T> {
  getEntityClass(): Class<T>;
  getNamespacedKey(): NamespacedKey;
  equals(o: any): boolean;
  hashCode(): number;
  toString(): string;
  static of<A>(entityClass: Class<A>, namespacedKey: NamespacedKey): GoalKey<A>;
}
/**
 * Represents an AI goal of an entity
*/
export class Goal<T> {
  /**
   * Checks if this goal should be activated
   *
   * @return if this goal should be activated
  */
  shouldActivate(): boolean;
  /**
   * Checks if this goal should stay active, defaults to {@link Goal#shouldActivate()}
   *
   * @return if this goal should stay active
  */
  shouldStayActive(): boolean;
  /**
   * Called when this goal gets activated
  */
  start(): void;
  /**
   * Called when this goal gets stopped
  */
  stop(): void;
  /**
   * Called each tick the goal is activated
  */
  tick(): void;
  /**
   * A unique key that identifies this type of goal. Plugins should use their own namespace, not the minecraft
   * namespace. Additionally, this key also specifies to what mobs this goal can be applied to
   *
   * @return the goal key
  */
  getKey(): GoalKey<T>;
  /**
   * Returns a list of all applicable flags for this goal.
   *
   * This method is only called on construction.
   *
   * @return the subtypes.
  */
  getTypes(): EnumSet<GoalType>;
}
/**
 * Represents the subtype of a goal. Used by minecraft to disable certain types of goals if needed.
*/
export class GoalType extends Enum<GoalType> {
  static readonly MOVE: GoalType;
  static readonly LOOK: GoalType;
  static readonly JUMP: GoalType;
  static readonly TARGET: GoalType;
  /**
   * Used to map vanilla goals, that are a behavior goal but don't have a type set...
  */
  static readonly UNKNOWN_BEHAVIOR: GoalType;
  static valueOf(name: string): GoalType;
  static values(): GoalType[];
}

}
declare module 'com.destroystokyo.paper.inventory' {
import { List } from 'java.util';
import { RecipeChoice, ItemStack } from 'org.bukkit.inventory';
/**
 * Allows crafting Items that require full matching itemstacks to complete the recipe for custom items
 * @deprecated Draft API
*/
export class ItemStackRecipeChoice extends RecipeChoice {
  constructor(choices: ItemStack);
  constructor(choices: ItemStack[]);
  /**
   * Gets a single item stack representative of this stack choice.
   *
   * @return a single representative item
   * @deprecated for compatibility only
  */
  getItemStack(): ItemStack;
  clone(): RecipeChoice;
  test(itemStack: ItemStack): boolean;
}

}
declare module 'com.destroystokyo.paper.entity.Pathfinder' {
import { List } from 'java.util';
import { Location } from 'org.bukkit';
/**
 * Represents the result of a pathfinding calculation
*/
export class PathResult {
  /**
   * All currently calculated points to follow along the path to reach the destination location
   *
   * Will return points the entity has already moved past, see {@link #getNextPointIndex()}
   * @return List of points
  */
  getPoints(): Location[];
  /**
   * @return Returns the index of the current point along the points returned in {@link #getPoints()} the entity
   * is trying to reach. This value will be higher than the maximum index of {@link #getPoints()} if this path finding is done.
  */
  getNextPointIndex(): number;
  /**
   * @return The next location in the path points the entity is trying to reach, or null if there is no next point
  */
  getNextPoint(): Location | null;
  /**
   * @return The closest point the path can get to the target location
  */
  getFinalPoint(): Location | null;
}

}
declare module 'com.destroystokyo.paper.profile' {
import { Set, Collection, UUID } from 'java.util';
import { PlayerTextures, PlayerProfile as org_bukkit_profile_PlayerProfile } from 'org.bukkit.profile';
/**
 * Represents a property on a {@link PlayerProfile}
*/
export class ProfileProperty {
  constructor(name: string, value: string);
  constructor(name: string, value: string, signature: string | null);
  /**
   * @return The property name, ie "textures"
  */
  getName(): string;
  /**
   * @return The property value, likely to be base64 encoded
  */
  getValue(): string;
  /**
   * @return A signature from Mojang for signed properties
  */
  getSignature(): string | null;
  /**
   * @return If this property has a signature or not
  */
  isSigned(): boolean;
  equals(o: any): boolean;
  hashCode(): number;
}
/**
 * Represents a players profile for the game, such as UUID, Name, and textures.
*/
export class PlayerProfile extends org_bukkit_profile_PlayerProfile {
  /**
   * @return The players name, if set
  */
  getName(): string | null;
  /**
   * Sets this profiles Name
   *
   * @param name The new Name
   * @return The previous Name
  */
  setName(name: string | null);
  /**
   * @return The players unique identifier, if set
  */
  getId(): UUID | null;
  /**
   * Sets this profiles UUID
   *
   * @param uuid The new UUID
   * @return The previous UUID
  */
  setId(id: UUID | null);
  /**
   * Gets the {@link PlayerTextures} of this profile.
   * This will build a snapshot of the current texture data once
   * requested inside PlayerTextures.
   *
   * @return the textures, not null
  */
  getTextures(): PlayerTextures;
  /**
   * Copies the given textures.
   *
   * @param textures the textures to copy, or null to clear the
   * textures
  */
  setTextures(textures: PlayerTextures | null);
  /**
   * @return A Mutable set of this players properties, such as textures.
   * Values specified here are subject to implementation details.
  */
  getProperties(): Set<ProfileProperty>;
  /**
   * Check if the Profile has the specified property
   * @param property Property name to check
   * @return If the property is set
  */
  hasProperty(property: string | null): boolean;
  /**
   * Sets a property. If the property already exists, the previous one will be replaced
   * @param property Property to set.
  */
  setProperty(property: ProfileProperty);
  /**
   * Sets multiple properties. If any of the set properties already exist, it will be replaced
   * @param properties The properties to set
  */
  setProperties(properties: Collection<ProfileProperty>);
  /**
   * Removes a specific property from this profile
   * @param property The property to remove
   * @return If a property was removed
  */
  removeProperty(property: string | null): boolean;
  /**
   * Removes a specific property from this profile
   * @param property The property to remove
   * @return If a property was removed
  */
  removeProperty(property: ProfileProperty): boolean;
  /**
   * Removes all properties in the collection
   * @param properties The properties to remove
   * @return If any property was removed
  */
  removeProperties(properties: Collection<ProfileProperty>): boolean;
  /**
   * Clears all properties on this profile
  */
  clearProperties(): void;
  /**
   * @return If the profile is now complete (has UUID and Name)
  */
  isComplete(): boolean;
  /**
   * Like {@link #complete(boolean)} but will try only from cache, and not make network calls
   * Does not account for textures.
   *
   * @return If the profile is now complete (has UUID and Name)
  */
  completeFromCache(): boolean;
  /**
   * Like {@link #complete(boolean)} but will try only from cache, and not make network calls
   * Does not account for textures.
   *
   * @param onlineMode Treat this as online mode or not
   * @return If the profile is now complete (has UUID and Name)
  */
  completeFromCache(onlineMode: boolean): boolean;
  /**
   * Like {@link #complete(boolean)} but will try only from cache, and not make network calls
   * Does not account for textures.
   *
   * @param lookupUUID If only name is supplied, should we do a UUID lookup
   * @param onlineMode Treat this as online mode or not
   * @return If the profile is now complete (has UUID and Name)
  */
  completeFromCache(lookupUUID: boolean, onlineMode: boolean): boolean;
  /**
   * If this profile is not complete, then make the API call to complete it.
   * This is a blocking operation and should be done asynchronously.
   *
   * This will also complete textures. If you do not want to load textures, use {{@link #complete(boolean)}}
   * @return If the profile is now complete (has UUID and Name) (if you get rate limited, this operation may fail)
  */
  complete(): boolean;
  /**
   * If this profile is not complete, then make the API call to complete it.
   * This is a blocking operation and should be done asynchronously.
   *
   * Optionally will also fill textures.
   *
   * Online mode will be automatically determined
   * @param textures controls if we should fill the profile with texture properties
   * @return If the profile is now complete (has UUID and Name) (if you get rate limited, this operation may fail)
  */
  complete(textures: boolean): boolean;
  /**
   * If this profile is not complete, then make the API call to complete it.
   * This is a blocking operation and should be done asynchronously.
   *
   * Optionally will also fill textures.
   * @param textures controls if we should fill the profile with texture properties
   * @param onlineMode Treat this server as online mode or not
   * @return If the profile is now complete (has UUID and Name) (if you get rate limited, this operation may fail)
  */
  complete(textures: boolean, onlineMode: boolean): boolean;
  /**
   * Whether or not this Profile has textures associated to it
   * @return If has a textures property
  */
  hasTextures(): boolean;
}

}
declare module 'com.destroystokyo.paper.util.VersionFetcher' {
import { VersionFetcher } from 'com.destroystokyo.paper.util';
import { Component } from 'net.kyori.adventure.text';
export class DummyVersionFetcher extends VersionFetcher {
  /**
   * Amount of time to cache results for in milliseconds
   * 
   * Negative values will never cache.
   *
   * @return cache time
  */
  getCacheTime(): number;
  /**
   * Gets the version message to cache and show to command senders.
   *
   * NOTE: This is run in a new thread separate from that of the command processing thread
   *
   * @param serverVersion the current version of the server (will match {@link Bukkit#getVersion()})
   * @return the message to show when requesting a version
  */
  getVersionMessage(serverVersion: string): Component;
}

}
declare module 'com.destroystokyo.paper.Title' {
import { Title } from 'com.destroystokyo.paper';
/**
 * A builder for creating titles
*/
export class Builder {
  /**
   * Sets the title to the given text.
   *
   * It is recommended to the {@link BaseComponent} methods.
   *
   * @param title the title text
   * @return this builder instance
   * @throws NullPointerException if the title is null
  */
  title(title: string): Builder;
  /**
   * Sets the subtitle to the given text.
   *
   * It is recommended to the {@link BaseComponent} methods.
   *
   * @param subtitle the title text
   * @return this builder instance
  */
  subtitle(subtitle: string | null): Builder;
  /**
   * Sets the number of ticks for the title to fade in
   *
   * @param fadeIn the number of ticks to fade in
   * @return this builder instance
   * @throws IllegalArgumentException if it is negative
  */
  fadeIn(fadeIn: number): Builder;
  /**
   * Sets the number of ticks for the title to stay.
   *
   * @param stay the number of ticks to stay
   * @return this builder instance
   * @throws IllegalArgumentException if it is negative
  */
  stay(stay: number): Builder;
  /**
   * Sets the number of ticks for the title to fade out.
   *
   * @param fadeOut the number of ticks to fade out
   * @return this builder instance
   * @throws IllegalArgumentException if it is negative
  */
  fadeOut(fadeOut: number): Builder;
  /**
   * Create a title based on the values in the builder.
   *
   * @return a title from the values in this builder
   * @throws IllegalStateException if title isn't specified
  */
  build(): Title;
}

}
declare module 'com.destroystokyo.paper.event.block.AnvilDamagedEvent' {
import { Enum } from 'java.lang';
import { BlockData } from 'org.bukkit.block.data';
import { Material } from 'org.bukkit';
/**
 * Represents the amount of damage on an anvil block
*/
export class DamageState extends Enum<DamageState> {
  static readonly FULL: DamageState;
  static readonly CHIPPED: DamageState;
  static readonly DAMAGED: DamageState;
  static readonly BROKEN: DamageState;
  static valueOf(name: string): DamageState;
  static values(): DamageState[];
  /**
   * Get block material of this state
   *
   * @return Material
  */
  getMaterial(): Material;
  /**
   * Get damaged state by block data
   *
   * @param blockData Block data
   * @return DamageState
   * @throws IllegalArgumentException If non anvil block data is given
  */
  static getState(blockData: BlockData | null): DamageState;
  /**
   * Get damaged state by block material
   *
   * @param material Block material
   * @return DamageState
   * @throws IllegalArgumentException If non anvil material is given
  */
  static getState(material: Material | null): DamageState;
}

}
declare module 'com.destroystokyo.paper.event.inventory' {
import { InventoryEvent } from 'org.bukkit.event.inventory';
import { HandlerList } from 'org.bukkit.event';
import { InventoryView, GrindstoneInventory, ItemStack } from 'org.bukkit.inventory';
/**
 * Called when an item is put in a slot for grinding in a Grindstone
 * @see com.destroystokyo.paper.event.inventory.PrepareResultEvent
*/
export class PrepareGrindstoneEvent extends PrepareResultEvent {
  constructor(inventory: InventoryView, result: ItemStack | null);
  getInventory(): GrindstoneInventory;
}
/**
 * Called when an item is put in an inventory containing a result slot
*/
export class PrepareResultEvent extends InventoryEvent {
  constructor(inventory: InventoryView, result: ItemStack | null);
  /**
   * Get result item, may be null.
   *
   * @return result item
  */
  getResult(): ItemStack | null;
  setResult(result: ItemStack | null);
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}

}
declare module 'com.destroystokyo.paper.block.TargetBlockInfo' {
import { Enum } from 'java.lang';
export class FluidMode extends Enum<FluidMode> {
  static readonly NEVER: FluidMode;
  static readonly SOURCE_ONLY: FluidMode;
  static readonly ALWAYS: FluidMode;
  static valueOf(name: string): FluidMode;
  static values(): FluidMode[];
}

}
declare module 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent' {
import { Enum } from 'java.lang';
export class Reason extends Enum<Reason> {
  /**
   * The enderman has stopped attacking and ran away
  */
  static readonly RUNAWAY: Reason;
  /**
   * The enderman has teleported away due to indirect damage (ranged)
  */
  static readonly INDIRECT: Reason;
  /**
   * The enderman has teleported away due to a critical hit
  */
  static readonly CRITICAL_HIT: Reason;
  /**
   * The enderman has teleported away due to the player staring at it during combat
  */
  static readonly STARE: Reason;
  /**
   * Specific case for CRITICAL_HIT where the enderman is taking rain damage
  */
  static readonly DROWN: Reason;
  static valueOf(name: string): Reason;
  static values(): Reason[];
}

}
declare module 'com.destroystokyo.paper' {
import { ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { Collection, List } from 'java.util';
import { Enum, Class } from 'java.lang';
import { Pattern } from 'java.util.regex';
import { Builder } from 'com.destroystokyo.paper.Title';
import { BlockState, Block } from 'org.bukkit.block';
import { BaseTag } from 'io.papermc.paper.tag';
import { Plugin } from 'org.bukkit.plugin';
import { BlockData } from 'org.bukkit.block.data';
import { Predicate } from 'java.util.function';
import { MainHand, ItemStack } from 'org.bukkit.inventory';
import { Particle, NamespacedKey, Color, Material, World, Location } from 'org.bukkit';
import { Player } from 'org.bukkit.entity';
/**
 * Enumeration of different heightmap types maintained by the server. Generally using these maps is much faster
 * than using an iterative search for a block in a given x, z coordinate.
 *
 * @deprecated Upstream has added their own API for using the game heightmaps. See {@link org.bukkit.HeightMap} and the
 * non-deprecated getHighestBlock methods on World such as {@link org.bukkit.World#getHighestBlockAt(Location, HeightMap)}.
*/
export class HeightmapType extends Enum<HeightmapType> {
  /**
   * The highest block used for lighting in the world. Also the block returned by {@link World#getHighestBlockYAt(int, int)}}
  */
  static readonly LIGHT_BLOCKING: HeightmapType;
  /**
   * References the highest block in the world.
  */
  static readonly ANY: HeightmapType;
  /**
   * References the highest solid block in a world.
  */
  static readonly SOLID: HeightmapType;
  /**
   * References the highest solid or liquid block in a world.
  */
  static readonly SOLID_OR_LIQUID: HeightmapType;
  /**
   * References the highest solid or liquid block in a world, excluding leaves.
  */
  static readonly SOLID_OR_LIQUID_NO_LEAVES: HeightmapType;
  static valueOf(name: string): HeightmapType;
  static values(): HeightmapType[];
}
/**
 * Helps prepare a particle to be sent to players.
 *
 * Usage of the builder is preferred over the super long {@link World#spawnParticle(Particle, Location, int, double, double, double, double, Object)} API
*/
export class ParticleBuilder {
  constructor(particle: Particle);
  /**
   * Sends the particle to all receiving players (or all). This method is safe to use
   * Asynchronously
   *
   * @return a reference to this object.
  */
  spawn(): ParticleBuilder;
  /**
   * @return The particle going to be sent
  */
  particle(): Particle;
  /**
   * Changes what particle will be sent
   *
   * @param particle The particle
   * @return a reference to this object.
  */
  particle(particle: Particle): ParticleBuilder;
  /**
   * @return List of players who will receive the particle, or null for all in world
  */
  receivers(): Player[] | null;
  /**
   * Example use:
   *
   * builder.receivers(16); if (builder.hasReceivers()) { sendParticleAsync(builder); }
   *
   * @return If this particle is going to be sent to someone
  */
  hasReceivers(): boolean;
  /**
   * Sends this particle to all players in the world. This is rather silly and you should likely not
   * be doing this.
   *
   * Just be a logical person and use receivers by radius or collection.
   *
   * @return a reference to this object.
  */
  allPlayers(): ParticleBuilder;
  /**
   * @param receivers List of players to receive this particle, or null for all players in the
   * world
   * @return a reference to this object.
  */
  receivers(receivers: Player[] | null): ParticleBuilder;
  /**
   * @param receivers List of players to receive this particle, or null for all players in the
   * world
   * @return a reference to this object.
  */
  receivers(receivers: Collection<Player> | null): ParticleBuilder;
  /**
   * @param receivers List of players to be receive this particle, or null for all players in the
   * world
   * @return a reference to this object.
  */
  receivers(...receivers: Player[] | null): ParticleBuilder;
  /**
   * Selects all players within a cuboid selection around the particle location, within the
   * specified bounding box. If you want a more spherical check, see {@link #receivers(int,
   * boolean)}
   *
   * @param radius amount to add on all axis
   * @return a reference to this object.
  */
  receivers(radius: number): ParticleBuilder;
  /**
   * Selects all players within the specified radius around the particle location. If byDistance is
   * false, behavior uses cuboid selection the same as {@link #receivers(int, int)} If byDistance is
   * true, radius is tested by distance in a spherical shape
   *
   * @param radius amount to add on each axis
   * @param byDistance true to use a spherical radius, false to use a cuboid
   * @return a reference to this object.
  */
  receivers(radius: number, byDistance: boolean): ParticleBuilder;
  /**
   * Selects all players within a cuboid selection around the particle location, within the
   * specified bounding box. Allows specifying a different Y size than X and Z If you want a more
   * cylinder check, see {@link #receivers(int, int, boolean)} If you want a more spherical check,
   * see {@link #receivers(int, boolean)}
   *
   * @param xzRadius amount to add on the x/z axis
   * @param yRadius amount to add on the y axis
   * @return a reference to this object.
  */
  receivers(xzRadius: number, yRadius: number): ParticleBuilder;
  /**
   * Selects all players within the specified radius around the particle location. If byDistance is
   * false, behavior uses cuboid selection the same as {@link #receivers(int, int)} If byDistance is
   * true, radius is tested by distance on the y plane and on the x/z plane, in a cylinder shape.
   *
   * @param xzRadius amount to add on the x/z axis
   * @param yRadius amount to add on the y axis
   * @param byDistance true to use a cylinder shape, false to use cuboid
   * @return a reference to this object.
  */
  receivers(xzRadius: number, yRadius: number, byDistance: boolean): ParticleBuilder;
  /**
   * Selects all players within a cuboid selection around the particle location, within the
   * specified bounding box. If you want a more cylinder check, see {@link #receivers(int, int,
   * boolean)} If you want a more spherical check, see {@link #receivers(int, boolean)}
   *
   * @param xRadius amount to add on the x axis
   * @param yRadius amount to add on the y axis
   * @param zRadius amount to add on the z axis
   * @return a reference to this object.
  */
  receivers(xRadius: number, yRadius: number, zRadius: number): ParticleBuilder;
  /**
   * @return The player considered the source of this particle (for Visibility concerns), or null
  */
  source(): Player | null;
  /**
   * Sets the source of this particle for visibility concerns (Vanish API)
   *
   * @param source The player who is considered the source
   * @return a reference to this object.
  */
  source(source: Player | null): ParticleBuilder;
  /**
   * @return Location of where the particle will spawn
  */
  location(): Location | null;
  /**
   * Sets the location of where to spawn the particle
   *
   * @param location The location of the particle
   * @return a reference to this object.
  */
  location(location: Location): ParticleBuilder;
  /**
   * Sets the location of where to spawn the particle
   *
   * @param world World to spawn particle in
   * @param x X location
   * @param y Y location
   * @param z Z location
   * @return a reference to this object.
  */
  location(world: World, x: number, y: number, z: number): ParticleBuilder;
  /**
   * @return Number of particles to spawn
  */
  count(): number;
  /**
   * Sets the number of particles to spawn
   *
   * @param count Number of particles
   * @return a reference to this object.
  */
  count(count: number): ParticleBuilder;
  /**
   * Particle offset X. Varies by particle on how this is used
   *
   * @return Particle offset X.
  */
  offsetX(): number;
  /**
   * Particle offset Y. Varies by particle on how this is used
   *
   * @return Particle offset Y.
  */
  offsetY(): number;
  /**
   * Particle offset Z. Varies by particle on how this is used
   *
   * @return Particle offset Z.
  */
  offsetZ(): number;
  /**
   * Sets the particle offset. Varies by particle on how this is used
   *
   * @param offsetX Particle offset X
   * @param offsetY Particle offset Y
   * @param offsetZ Particle offset Z
   * @return a reference to this object.
  */
  offset(offsetX: number, offsetY: number, offsetZ: number): ParticleBuilder;
  /**
   * Gets the Particle extra data. Varies by particle on how this is used
   *
   * @return the extra particle data
  */
  extra(): number;
  /**
   * Sets the particle extra data. Varies by particle on how this is used
   *
   * @param extra the extra particle data
   * @return a reference to this object.
  */
  extra(extra: number): ParticleBuilder;
  /**
   * Gets the particle custom data. Varies by particle on how this is used
   *
   * @param  The Particle data type
   * @return the ParticleData for this particle
  */
  data<T>(): T | null;
  /**
   * Sets the particle custom data. Varies by particle on how this is used
   *
   * @param data The new particle data
   * @param  The Particle data type
   * @return a reference to this object.
  */
  data<T>(data: T | null): ParticleBuilder;
  /**
   * @return whether the particle is forcefully shown to players.
  */
  force(): boolean;
  /**
   * Sets whether the particle is forcefully shown to the player. If forced, the particle will show
   * faraway, as far as the player's view distance allows. If false, the particle will show
   * according to the client's particle settings.
   *
   * @param force true to force, false for normal
   * @return a reference to this object.
  */
  force(force: boolean): ParticleBuilder;
  /**
   * Sets the particle Color. Only valid for REDSTONE.
   *
   * @param color the new particle color
   * @return a reference to this object.
  */
  color(color: Color | null): ParticleBuilder;
  /**
   * Sets the particle Color and size. Only valid for REDSTONE.
   *
   * @param color the new particle color
   * @param size the size of the particle
   * @return a reference to this object.
  */
  color(color: Color | null, size: number): ParticleBuilder;
  /**
   * Sets the particle Color.
   * Only valid for REDSTONE.
   * @param r red color component
   * @param g green color component
   * @param b blue color component
   * @return a reference to this object.
  */
  color(r: number, g: number, b: number): ParticleBuilder;
}
export class NamespacedTag extends Namespaced {
  /**
   * The namespace representing all inbuilt keys.
  */
  static readonly MINECRAFT: string;
  /**
   * The namespace representing all keys generated by Bukkit for backwards
   * compatibility measures.
  */
  static readonly BUKKIT: string;
  /**
   * Create a key in a specific namespace.
   *
   * @param namespace String representing a grouping of keys
   * @param key Name for this specific key
   * @deprecated should never be used by plugins, for internal use only!!
  */
  constructor(namespace: string, key: string);
  /**
   * Create a key in the plugin's namespace.
   * 
   * Namespaces may only contain lowercase alphanumeric characters, periods,
   * underscores, and hyphens.
   * 
   * Keys may only contain lowercase alphanumeric characters, periods,
   * underscores, hyphens, and forward slashes.
   *
   * @param plugin the plugin to use for the namespace
   * @param key the key to create
  */
  constructor(plugin: Plugin, key: string);
  getNamespace(): string;
  getKey(): string;
  hashCode(): number;
  equals(obj: any): boolean;
  toString(): string;
  /**
   * Return a new random key in the {@link #BUKKIT} namespace.
   *
   * @return new key
   * @deprecated should never be used by plugins, for internal use only!!
  */
  static randomKey(): NamespacedTag;
  /**
   * Get a key in the Minecraft namespace.
   *
   * @param key the key to use
   * @return new key in the Minecraft namespace
  */
  static minecraft(key: string): NamespacedTag;
}
export class MaterialSetTag extends BaseTag<Material, MaterialSetTag> {
  /**
   * @deprecated Use NamespacedKey version of constructor
  */
  constructor(filter: Predicate<Material>);
  /**
   * @deprecated Use NamespacedKey version of constructor
  */
  constructor(materials: Collection<Material>);
  /**
   * @deprecated Use NamespacedKey version of constructor
  */
  constructor(...materials: Material[]);
  constructor(key: NamespacedKey | null, filter: Predicate<Material>);
  constructor(key: NamespacedKey | null, ...materials: Material[]);
  constructor(key: NamespacedKey | null, materials: Collection<Material>);
  constructor(key: NamespacedKey | null, materials: Collection<Material>, ...globalPredicates: Predicate[]);
  isTagged(block: BlockData): boolean;
  isTagged(block: BlockState): boolean;
  isTagged(block: Block): boolean;
  isTagged(item: ItemStack): boolean;
  isTagged(material: Material): boolean;
  isTagged(item: T): boolean;
}
/**
 * Represents a title to may be sent to a {@link Player}.
 *
 * A title can be sent without subtitle text.
 *
 * @deprecated use {@link net.kyori.adventure.title.Title}
*/
export class Title {
  /**
   * The default number of ticks for the title to fade in.
  */
  static readonly DEFAULT_FADE_IN: number;
  /**
   * The default number of ticks for the title to stay.
  */
  static readonly DEFAULT_STAY: number;
  /**
   * The default number of ticks for the title to fade out.
  */
  static readonly DEFAULT_FADE_OUT: number;
  /**
   * Create a title with the default time values and no subtitle.
   *
   * Times use default values.
   *
   * @param title the main text of the title
   * @throws NullPointerException if the title is null
  */
  constructor(title: string);
  /**
   * Create a title with the default time values.
   *
   * Times use default values.
   *
   * @param title    the main text of the title
   * @param subtitle the secondary text of the title
  */
  constructor(title: string, subtitle: string | null);
  /**
   * Creates a new title.
   *
   * It is recommended to the {@link BaseComponent} constrctors.
   *
   * @param title    the main text of the title
   * @param subtitle the secondary text of the title
   * @param fadeIn   the number of ticks for the title to fade in
   * @param stay     the number of ticks for the title to stay on screen
   * @param fadeOut  the number of ticks for the title to fade out
  */
  constructor(title: string, subtitle: string | null, fadeIn: number, stay: number, fadeOut: number);
  /**
   * Gets the number of ticks to fade in.
   *
   * The returned value is never negative.
   *
   * @return the number of ticks to fade in
  */
  getFadeIn(): number;
  /**
   * Gets the number of ticks to stay.
   *
   * The returned value is never negative.
   *
   * @return the number of ticks to stay
  */
  getStay(): number;
  /**
   * Gets the number of ticks to fade out.
   *
   * The returned value is never negative.
   *
   * @return the number of ticks to fade out
  */
  getFadeOut(): number;
  /**
   * Sends the title directly to an player
   *
   * @param player the receiver of the title
  */
  send(player: Player): void;
  /**
   * Sends the title directly to the defined players
   *
   * @param players the receivers of the title
  */
  send(players: Collection<Player>): void;
  /**
   * Sends the title directly to the defined players
   *
   * @param players the receivers of the title
  */
  send(players: Player[]): void;
  /**
   * Sends the title directly to all online players
  */
  broadcast(): void;
  static builder(): Builder;
}
export class ClientOption<T> {
  static readonly SKIN_PARTS: ClientOption<SkinParts>;
  static readonly CHAT_COLORS_ENABLED: ClientOption<boolean>;
  static readonly CHAT_VISIBILITY: ClientOption<ChatVisibility>;
  static readonly LOCALE: ClientOption<string>;
  static readonly MAIN_HAND: ClientOption<MainHand>;
  static readonly VIEW_DISTANCE: ClientOption<number>;
  getType(): Class<T>;
}
/**
 * Represents a namespaced resource, see {@link org.bukkit.NamespacedKey} for single elements
 * or {@link com.destroystokyo.paper.NamespacedTag} for a collection of elements
 *
 * Namespaces may only contain lowercase alphanumeric characters, periods,
 * underscores, and hyphens.
 * 
 * Keys may only contain lowercase alphanumeric characters, periods,
 * underscores, hyphens, and forward slashes.
 * 
 * You should not be implementing this interface yourself, use {@link org.bukkit.NamespacedKey}
 * or {@link com.destroystokyo.paper.NamespacedTag} as needed instead.
*/
export class Namespaced {
  /**
   * Gets the namespace this resource is a part of
   * 
   * This is contractually obligated to only contain lowercase alphanumeric characters,
   * periods, underscores, and hyphens.
   *
   * @return resource namespace
  */
  getNamespace(): string;
  /**
   * Gets the key corresponding to this resource
   * 
   * This is contractually obligated to only contain lowercase alphanumeric characters,
   * periods, underscores, hyphens, and forward slashes.
   *
   * @return resource key
  */
  getKey(): string;
}
export class SkinParts {
  hasCapeEnabled(): boolean;
  hasJacketEnabled(): boolean;
  hasLeftSleeveEnabled(): boolean;
  hasRightSleeveEnabled(): boolean;
  hasLeftPantsEnabled(): boolean;
  hasRightPantsEnabled(): boolean;
  hasHatsEnabled(): boolean;
  getRaw(): number;
}
/**
 * Represents a collection tags to identify materials that share common properties.
 * Will map to minecraft for missing tags, as well as custom ones that may be useful.
 * 
 * All tags in this class are unmodifiable, attempting to modify them will throw an
 * {@link UnsupportedOperationException}.
*/
export class MaterialTags {
  static readonly ARROWS: MaterialSetTag;
  /**
   * Covers all colors of beds.
  */
  static readonly BEDS: MaterialSetTag;
  /**
   * Covers all bucket items.
  */
  static readonly BUCKETS: MaterialSetTag;
  /**
   * Covers coal and charcoal.
  */
  static readonly COALS: MaterialSetTag;
  /**
   * Covers both cobblestone wall variants.
  */
  static readonly COBBLESTONE_WALLS: MaterialSetTag;
  /**
   * Covers both cobblestone and mossy Cobblestone.
  */
  static readonly COBBLESTONES: MaterialSetTag;
  /**
   * Covers all colors of concrete.
  */
  static readonly CONCRETES: MaterialSetTag;
  /**
   * Covers all colors of concrete powder.
  */
  static readonly CONCRETE_POWDER: MaterialSetTag;
  /**
   * Covers the two types of cooked fish.
  */
  static readonly COOKED_FISH: MaterialSetTag;
  /**
   * Covers all variants of doors.
  */
  static readonly DOORS: MaterialSetTag;
  /**
   * Covers all dyes.
  */
  static readonly DYES: MaterialSetTag;
  /**
   * Covers all variants of gates.
  */
  static readonly FENCE_GATES: MaterialSetTag;
  /**
   * Covers all variants of fences.
  */
  static readonly FENCES: MaterialSetTag;
  /**
   * Covers all variants of fish buckets.
  */
  static readonly FISH_BUCKETS: MaterialSetTag;
  /**
   * Covers the non-colored glass and 16 stained glass (not panes).
  */
  static readonly GLASS: MaterialSetTag;
  /**
   * Covers the non-colored glass panes and stained glass panes (panes only).
  */
  static readonly GLASS_PANES: MaterialSetTag;
  /**
   * Covers all glazed terracotta blocks.
  */
  static readonly GLAZED_TERRACOTTA: MaterialSetTag;
  /**
   * Covers the colors of stained terracotta.
  */
  static readonly STAINED_TERRACOTTA: MaterialSetTag;
  /**
   * Covers terracotta along with the stained variants.
  */
  static readonly TERRACOTTA: MaterialSetTag;
  /**
   * Covers both golden apples.
  */
  static readonly GOLDEN_APPLES: MaterialSetTag;
  /**
   * Covers the variants of horse armor.
  */
  static readonly HORSE_ARMORS: MaterialSetTag;
  /**
   * Covers the variants of infested blocks.
  */
  static readonly INFESTED_BLOCKS: MaterialSetTag;
  /**
   * Covers the variants of mushroom blocks.
  */
  static readonly MUSHROOM_BLOCKS: MaterialSetTag;
  /**
   * Covers all mushrooms.
  */
  static readonly MUSHROOMS: MaterialSetTag;
  /**
   * Covers all music disc items.
  */
  static readonly MUSIC_DISCS: MaterialSetTag;
  /**
   * Covers all ores.
  */
  static readonly ORES: MaterialSetTag;
  /**
   * Covers all piston typed items and blocks including the piston head and moving piston.
  */
  static readonly PISTONS: MaterialSetTag;
  /**
   * Covers all potato items.
  */
  static readonly POTATOES: MaterialSetTag;
  /**
   * Covers all wooden pressure plates and the weighted pressure plates and the stone pressure plate.
  */
  static readonly PRESSURE_PLATES: MaterialSetTag;
  /**
   * Covers the variants of prismarine blocks.
  */
  static readonly PRISMARINE: MaterialSetTag;
  /**
   * Covers the variants of prismarine slabs.
  */
  static readonly PRISMARINE_SLABS: MaterialSetTag;
  /**
   * Covers the variants of prismarine stairs.
  */
  static readonly PRISMARINE_STAIRS: MaterialSetTag;
  /**
   * Covers the variants of pumpkins.
  */
  static readonly PUMPKINS: MaterialSetTag;
  /**
   * Covers the variants of quartz blocks.
  */
  static readonly QUARTZ_BLOCKS: MaterialSetTag;
  /**
   * Covers all uncooked fish items.
  */
  static readonly RAW_FISH: MaterialSetTag;
  /**
   * Covers the variants of red sandstone blocks.
  */
  static readonly RED_SANDSTONES: MaterialSetTag;
  /**
   * Covers the variants of sandstone blocks.
  */
  static readonly SANDSTONES: MaterialSetTag;
  /**
   * Covers sponge and wet sponge.
  */
  static readonly SPONGES: MaterialSetTag;
  /**
   * Covers the non-colored and colored shulker boxes.
  */
  static readonly SHULKER_BOXES: MaterialSetTag;
  /**
   * Covers zombie, creeper, skeleton, dragon, and player heads.
  */
  static readonly SKULLS: MaterialSetTag;
  /**
   * Covers all spawn egg items.
  */
  static readonly SPAWN_EGGS: MaterialSetTag;
  /**
   * Covers all colors of stained glass.
  */
  static readonly STAINED_GLASS: MaterialSetTag;
  /**
   * Covers all colors of stained glass panes.
  */
  static readonly STAINED_GLASS_PANES: MaterialSetTag;
  /**
   * Covers all variants of trapdoors.
  */
  static readonly TRAPDOORS: MaterialSetTag;
  /**
   * Covers all wood variants of doors.
  */
  static readonly WOODEN_DOORS: MaterialSetTag;
  /**
   * Covers all wood variants of fences.
  */
  static readonly WOODEN_FENCES: MaterialSetTag;
  /**
   * Covers all wood variants of trapdoors.
  */
  static readonly WOODEN_TRAPDOORS: MaterialSetTag;
  /**
   * Covers the wood variants of gates.
  */
  static readonly WOODEN_GATES: MaterialSetTag;
  /**
   * Covers the variants of purpur.
  */
  static readonly PURPUR: MaterialSetTag;
  /**
   * Covers the variants of signs.
  */
  static readonly SIGNS: MaterialSetTag;
  /**
   * Covers the variants of a regular torch.
  */
  static readonly TORCH: MaterialSetTag;
  /**
   * Covers the variants of a redstone torch.
  */
  static readonly REDSTONE_TORCH: MaterialSetTag;
  /**
   * Covers the variants of a soul torch.
  */
  static readonly SOUL_TORCH: MaterialSetTag;
  /**
   * Covers the variants of torches.
  */
  static readonly TORCHES: MaterialSetTag;
  /**
   * Covers the variants of lanterns.
  */
  static readonly LANTERNS: MaterialSetTag;
  /**
   * Covers the variants of rails.
  */
  static readonly RAILS: MaterialSetTag;
  /**
   * Covers the variants of swords.
  */
  static readonly SWORDS: MaterialSetTag;
  /**
   * Covers the variants of shovels.
  */
  static readonly SHOVELS: MaterialSetTag;
  /**
   * Covers the variants of pickaxes.
  */
  static readonly PICKAXES: MaterialSetTag;
  /**
   * Covers the variants of axes.
  */
  static readonly AXES: MaterialSetTag;
  /**
   * Covers the variants of hoes.
  */
  static readonly HOES: MaterialSetTag;
  /**
   * Covers the variants of helmets.
  */
  static readonly HELMETS: MaterialSetTag;
  /**
   * Covers the variants of items that can be equipped in the helmet slot.
  */
  static readonly HEAD_EQUIPPABLE: MaterialSetTag;
  /**
   * Covers the variants of chestplate.
  */
  static readonly CHESTPLATES: MaterialSetTag;
  /**
   * Covers the variants of items that can be equipped in the chest slot.
  */
  static readonly CHEST_EQUIPPABLE: MaterialSetTag;
  /**
   * Covers the variants of leggings.
  */
  static readonly LEGGINGS: MaterialSetTag;
  /**
   * Covers the variants of boots.
  */
  static readonly BOOTS: MaterialSetTag;
  /**
   * Covers all variants of armor.
  */
  static readonly ARMOR: MaterialSetTag;
  /**
   * Covers the variants of bows.
  */
  static readonly BOWS: MaterialSetTag;
  /**
   * Covers the variants of player-throwable projectiles (not requiring a bow or any other "assistance").
  */
  static readonly THROWABLE_PROJECTILES: MaterialSetTag;
  /**
   * Covers materials that can be colored, such as wool, shulker boxes, stained glass etc.
  */
  static readonly COLORABLE: MaterialSetTag;
  /**
   * Covers the variants of coral.
  */
  static readonly CORAL: MaterialSetTag;
  /**
   * Covers the variants of coral fans.
  */
  static readonly CORAL_FANS: MaterialSetTag;
  /**
   * Covers the variants of coral blocks.
  */
  static readonly CORAL_BLOCKS: MaterialSetTag;
  /**
   * Covers all items that can be enchanted from the enchantment table or anvil.
  */
  static readonly ENCHANTABLE: MaterialSetTag;
  /**
   * Covers the variants of raw ores.
  */
  static readonly RAW_ORES: MaterialSetTag;
  /**
   * Covers the variants of deepslate ores.
  */
  static readonly DEEPSLATE_ORES: MaterialSetTag;
  /**
   * Covers the variants of raw ore blocks.
  */
  static readonly RAW_ORE_BLOCKS: MaterialSetTag;
  /**
   * Covers all oxidized copper blocks.
  */
  static readonly OXIDIZED_COPPER_BLOCKS: MaterialSetTag;
  /**
   * Covers all weathered copper blocks.
  */
  static readonly WEATHERED_COPPER_BLOCKS: MaterialSetTag;
  /**
   * Covers all exposed copper blocks.
  */
  static readonly EXPOSED_COPPER_BLOCKS: MaterialSetTag;
  /**
   * Covers all un-weathered copper blocks.
  */
  static readonly UNAFFECTED_COPPER_BLOCKS: MaterialSetTag;
  /**
   * Covers all waxed copper blocks.
   * 
   * Combine with other copper-related tags to filter is-waxed or not.
  */
  static readonly WAXED_COPPER_BLOCKS: MaterialSetTag;
  /**
   * Covers all un-waxed copper blocks.
   * 
   * Combine with other copper-related tags to filter is-un-waxed or not.
  */
  static readonly UNWAXED_COPPER_BLOCKS: MaterialSetTag;
  /**
   * Covers all copper block variants.
  */
  static readonly COPPER_BLOCKS: MaterialSetTag;
  /**
   * Covers all weathering/waxed states of the plain copper block.
  */
  static readonly FULL_COPPER_BLOCKS: MaterialSetTag;
  /**
   * Covers all weathering/waxed states of the cut copper block.
  */
  static readonly CUT_COPPER_BLOCKS: MaterialSetTag;
  /**
   * Covers all weathering/waxed states of the cut copper stairs.
  */
  static readonly CUT_COPPER_STAIRS: MaterialSetTag;
  /**
   * Covers all weathering/waxed states of the cut copper slab.
  */
  static readonly CUT_COPPER_SLABS: MaterialSetTag;
}

}
declare module 'com.destroystokyo.paper.event.server.AsyncTabCompleteEvent' {
import { Component } from 'net.kyori.adventure.text';
/**
 * A rich tab completion, consisting of a string suggestion, and a nullable {@link Component} tooltip.
*/
export class Completion {
  /**
   * Get the suggestion string for this {@link Completion}.
   *
   * @return suggestion string
  */
  suggestion(): string;
  /**
   * Get the suggestion tooltip for this {@link Completion}.
   *
   * @return tooltip component
  */
  tooltip(): Component | null;
  /**
   * Create a new {@link Completion} from a suggestion string.
   *
   * @param suggestion suggestion string
   * @return new completion instance
  */
  static completion(suggestion: string): Completion;
  /**
   * Create a new {@link Completion} from a suggestion string and a tooltip {@link Component}.
   *
   * If the provided component is null, the suggestion will not have a tooltip.
   *
   * @param suggestion suggestion string
   * @param tooltip    tooltip component, or null
   * @return new completion instance
  */
  static completion(suggestion: string, tooltip: Component | null): Completion;
}

}
declare module 'com.destroystokyo.paper.event.entity' {
import { PlayerEvent } from 'org.bukkit.event.player';
import { Reason } from 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent';
import { Collection, List } from 'java.util';
import { EndGateway } from 'org.bukkit.block';
import { TransformedReason } from 'com.destroystokyo.paper.event.entity.EntityTransformedEvent';
import { SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { EntityEvent, EntityTransformEvent, EntityTeleportEvent } from 'org.bukkit.event.entity';
import { Vector } from 'org.bukkit.util';
import { HandlerList, Cancellable, Event } from 'org.bukkit.event';
import { ItemStack } from 'org.bukkit.inventory';
import { Location } from 'org.bukkit';
import { LightningStrike, Turtle, Entity, Player, Egg, Creeper, ExperienceOrb, Slime, AreaEffectCloud, Projectile, EntityType, LivingEntity, EnderDragon, DragonFireball, Enderman, HumanEntity, Witch, SkeletonHorse } from 'org.bukkit.entity';
/**
 * WARNING: This event only fires for a limited number of cases, and not for every case that CreatureSpawnEvent does.
 *
 * You should still listen to CreatureSpawnEvent as a backup, and only use this event as an "enhancement".
 * The intent of this event is to improve server performance, so it fires even if the spawning might fail later, for
 * example when the entity would be unable to spawn due to limited space or lighting.
 * 
 * Currently: NATURAL and SPAWNER based reasons. Please submit a Pull Request for future additions.
 * Also, Plugins that replace Entity Registrations with their own custom entities might not fire this event.
*/
export class PreCreatureSpawnEvent extends Event {
  constructor(location: Location, type: EntityType, reason: SpawnReason);
  /**
   * @return The location this creature is being spawned at
  */
  getSpawnLocation(): Location;
  /**
   * @return The type of creature being spawned
  */
  getType(): EntityType;
  /**
   * @return Reason this creature is spawning (ie, NATURAL vs SPAWNER)
  */
  getReason(): SpawnReason;
  /**
   * @return If the spawn process should be aborted vs trying more attempts
  */
  shouldAbortSpawn(): boolean;
  /**
   * Set this if you are more blanket blocking all types of these spawns, and wish to abort the spawn process from
   * trying more attempts after this cancellation.
   *
   * @param shouldAbortSpawn Set if the spawn process should be aborted vs trying more attempts
  */
  setShouldAbortSpawn(shouldAbortSpawn: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
  /**
   * @return If the spawn of this creature is cancelled or not
  */
  isCancelled(): boolean;
  /**
   * Cancelling this event is more effecient than cancelling CreatureSpawnEvent
   * @param cancel true if you wish to cancel this event, and abort the spawn of this creature
  */
  setCancelled(cancel: boolean): void;
}
export interface PreCreatureSpawnEvent extends Event, Cancellable {}
/**
 * Called when an entity jumps
 * 
 * Cancelling the event will stop the entity from jumping
*/
export class EntityJumpEvent extends EntityEvent {
  constructor(entity: LivingEntity);
  getEntity(): LivingEntity;
  isCancelled(): boolean;
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface EntityJumpEvent extends EntityEvent, Cancellable {}
/**
 * Fired when a Slime decides to start jumping while swimming in water/lava.
 * 
 * This event does not fire for the entity's actual movement. Only when it
 * is choosing to start jumping.
*/
export class SlimeSwimEvent extends SlimeWanderEvent {
  constructor(slime: Slime);
}
export interface SlimeSwimEvent extends SlimeWanderEvent, Cancellable {}
/**
 * Called when a Creeper is ignite flag is changed (armed/disarmed to explode).
*/
export class CreeperIgniteEvent extends EntityEvent {
  constructor(creeper: Creeper, ignited: boolean);
  getEntity(): Creeper;
  isIgnited(): boolean;
  setIgnited(ignited: boolean): void;
  isCancelled(): boolean;
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface CreeperIgniteEvent extends EntityEvent, Cancellable {}
/**
 * Fired when a Slime decides to change direction to target a LivingEntity.
 * 
 * This event does not fire for the entity's actual movement. Only when it
 * is choosing to start moving.
*/
export class SlimeTargetLivingEntityEvent extends SlimePathfindEvent {
  constructor(slime: Slime, target: LivingEntity);
  /**
   * Get the targeted entity
   *
   * @return Targeted entity
  */
  getTarget(): LivingEntity;
}
export interface SlimeTargetLivingEntityEvent extends SlimePathfindEvent, Cancellable {}
/**
 * Fired when a Slime decides to start pathfinding.
 * 
 * This event does not fire for the entity's actual movement. Only when it
 * is choosing to start moving.
*/
export class SlimePathfindEvent extends EntityEvent {
  constructor(slime: Slime);
  /**
   * The Slime that is pathfinding.
   *
   * @return The Slime that is pathfinding.
  */
  getEntity(): Slime;
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
export interface SlimePathfindEvent extends EntityEvent, Cancellable {}
export class PreSpawnerSpawnEvent extends PreCreatureSpawnEvent {
  constructor(location: Location, type: EntityType, spawnerLocation: Location);
  getSpawnerLocation(): Location;
}
/**
 * Called when a phantom is spawned for an exhausted player
*/
export class PhantomPreSpawnEvent extends PreCreatureSpawnEvent {
  constructor(location: Location, entity: Entity, reason: SpawnReason);
  /**
   * Get the entity this phantom is spawning for
   *
   * @return Entity
  */
  getSpawningEntity(): Entity | null;
}
/**
 * Fired when a Turtle decides to go home
*/
export class TurtleGoHomeEvent extends EntityEvent {
  constructor(turtle: Turtle);
  /**
   * The turtle going home
   *
   * @return The turtle
  */
  getEntity(): Turtle;
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
export interface TurtleGoHomeEvent extends EntityEvent, Cancellable {}
/**
 * Fired when the server is calculating what chunks to try to spawn monsters in every Monster Spawn Tick event
*/
export class PlayerNaturallySpawnCreaturesEvent extends PlayerEvent {
  constructor(player: Player, radius: number);
  /**
   * @return The radius of chunks around this player to be included in natural spawn selection
  */
  getSpawnRadius(): number;
  /**
   * @param radius The radius of chunks around this player to be included in natural spawn selection
  */
  setSpawnRadius(spawnRadius: number);
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
  /**
   * @return If this players chunks will be excluded from natural spawns
  */
  isCancelled(): boolean;
  /**
   * @param cancel true if you wish to cancel this event, and not include this players chunks for natural spawning
  */
  setCancelled(cancel: boolean): void;
}
export interface PlayerNaturallySpawnCreaturesEvent extends PlayerEvent, Cancellable {}
/**
 * Fired any time an entity is being removed from a world for any reason
*/
export class EntityRemoveFromWorldEvent extends EntityEvent {
  constructor(entity: Entity);
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Fired when an Entity decides to start moving towards a location.
 *
 * This event does not fire for the entities actual movement. Only when it
 * is choosing to start moving to a location.
*/
export class EntityPathfindEvent extends EntityEvent {
  constructor(entity: Entity, loc: Location, targetEntity: Entity | null);
  /**
   * The Entity that is pathfinding.
   * @return The Entity that is pathfinding.
  */
  getEntity(): Entity;
  /**
   * If the Entity is trying to pathfind to an entity, this is the entity in relation.
   *
   * Otherwise this will return null.
   *
   * @return The entity target or null
  */
  getTargetEntity(): Entity | null;
  /**
   * The Location of where the entity is about to move to.
   *
   * Note that if the target happened to of been an entity
   * @return Location of where the entity is trying to pathfind to.
  */
  getLoc(): Location;
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
export interface EntityPathfindEvent extends EntityEvent, Cancellable {}
/**
 * Fired when an Entity is knocked back by the hit of another Entity. The acceleration
 * vector can be modified. If this event is cancelled, the entity is not knocked back.
 *
*/
export class EntityKnockbackByEntityEvent extends EntityEvent {
  constructor(entity: LivingEntity, hitBy: Entity, knockbackStrength: number, acceleration: Vector);
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
   * @return the entity which was knocked back
  */
  getEntity(): LivingEntity;
  /**
   * @return the original knockback strength.
  */
  getKnockbackStrength(): number;
  /**
   * @return the Entity which hit
  */
  getHitBy(): Entity;
  /**
   * @return the acceleration that will be applied
  */
  getAcceleration(): Vector;
}
export interface EntityKnockbackByEntityEvent extends EntityEvent, Cancellable {}
/**
 * Called when a thrown egg might hatch.
 * 
 * This event fires for all thrown eggs that may hatch, players, dispensers, etc.
*/
export class ThrownEggHatchEvent extends Event {
  constructor(egg: Egg, hatching: boolean, numHatches: number, hatchingType: EntityType);
  /**
   * Gets the egg involved in this event.
   *
   * @return the egg involved in this event
  */
  getEgg(): Egg;
  /**
   * Gets whether the egg is hatching or not. Will be what the server
   * would've done without interaction.
   *
   * @return boolean Whether the egg is going to hatch or not
  */
  isHatching(): boolean;
  /**
   * Sets whether the egg will hatch or not.
   *
   * @param hatching true if you want the egg to hatch, false if you want it
   *     not to
  */
  setHatching(hatching: boolean): void;
  /**
   * Get the type of the mob being hatched (EntityType.CHICKEN by default)
   *
   * @return The type of the mob being hatched by the egg
  */
  getHatchingType(): EntityType;
  /**
   * Change the type of mob being hatched by the egg
   *
   * @param hatchType The type of the mob being hatched by the egg
  */
  setHatchingType(hatchingType: EntityType);
  /**
   * Get the number of mob hatches from the egg. By default the number will
   * be the number the server would've done
   * 
   * 7/8 chance of being 0
   * 31/256 ~= 1/8 chance to be 1
   * 1/256 chance to be 4
   * 
   *
   * @return The number of mobs going to be hatched by the egg
  */
  getNumHatches(): number;
  /**
   * Change the number of mobs coming out of the hatched egg
   * 
   * The boolean hatching will override this number. Ie. If hatching =
   * false, this number will not matter
   *
   * @param numHatches The number of mobs coming out of the egg
  */
  setNumHatches(numHatches: number);
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Fired anytime the server is about to merge 2 experience orbs into one
*/
export class ExperienceOrbMergeEvent extends EntityEvent {
  constructor(mergeTarget: ExperienceOrb, mergeSource: ExperienceOrb);
  /**
   * @return The orb that will absorb the other experience orb
  */
  getMergeTarget(): ExperienceOrb;
  /**
   * @return The orb that is subject to being removed and merged into the target orb
  */
  getMergeSource(): ExperienceOrb;
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
   * @param cancel true if you wish to cancel this event, and prevent the orbs from merging
  */
  setCancelled(cancel: boolean): void;
}
export interface ExperienceOrbMergeEvent extends EntityEvent, Cancellable {}
/**
 * Fired when a Turtle lays eggs
*/
export class TurtleLayEggEvent extends EntityEvent {
  constructor(turtle: Turtle, location: Location, eggCount: number);
  /**
   * The turtle laying the eggs
   *
   * @return The turtle
  */
  getEntity(): Turtle;
  /**
   * Get the location where the eggs are being laid
   *
   * @return Location of eggs
  */
  getLocation(): Location;
  /**
   * Get the number of eggs being laid
   *
   * @return Number of eggs
  */
  getEggCount(): number;
  /**
   * Set the number of eggs being laid
   *
   * @param eggCount Number of eggs
  */
  setEggCount(eggCount: number);
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
export interface TurtleLayEggEvent extends EntityEvent, Cancellable {}
/**
 * Fired when an EnderDragon shoots a fireball
*/
export class EnderDragonShootFireballEvent extends EntityEvent {
  constructor(entity: EnderDragon, fireball: DragonFireball);
  /**
   * The enderdragon shooting the fireball
  */
  getEntity(): EnderDragon;
  /**
   * @return The fireball being shot
  */
  getFireball(): DragonFireball;
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
export interface EnderDragonShootFireballEvent extends EntityEvent, Cancellable {}
export class WitchReadyPotionEvent extends EntityEvent {
  constructor(witch: Witch, potion: ItemStack | null);
  /**
   * Fires thee event, returning the desired potion, or air of cancelled
   * @param witch the witch whom is readying to use a potion
   * @param potion the potion to be used
   * @return The ItemStack to be used
  */
  static process(witch: Witch, potion: ItemStack | null): ItemStack | null;
  getEntity(): Witch;
  /**
   * @return the potion the witch is readying to use
  */
  getPotion(): ItemStack | null;
  /**
   * Sets the potion the which is going to hold and use
   * @param potion The potion
  */
  setPotion(potion: ItemStack | null);
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
export interface WitchReadyPotionEvent extends EntityEvent, Cancellable {}
/**
 * Event called when a player gets close to a skeleton horse and triggers the lightning trap
*/
export class SkeletonHorseTrapEvent extends EntityEvent {
  constructor(horse: SkeletonHorse);
  constructor(horse: SkeletonHorse, eligibleHumans: HumanEntity[]);
  getEntity(): SkeletonHorse;
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
  getEligibleHumans(): HumanEntity[];
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface SkeletonHorseTrapEvent extends EntityEvent, Cancellable {}
/**
 * Fired when an entity transforms into another entity
 * 
 * If the event is cancelled, the entity will not transform
 * @deprecated Bukkit has added {@link EntityTransformEvent}, you should start using that
*/
export class EntityTransformedEvent extends EntityEvent {
  constructor(entity: Entity, transformed: Entity, reason: TransformedReason);
  /**
   * The entity after it has transformed
   *
   * @return Transformed entity
   * @deprecated see {@link EntityTransformEvent#getTransformedEntity()}
  */
  getTransformed(): Entity;
  /**
   * @return The reason for the transformation
   * @deprecated see {@link EntityTransformEvent#getTransformReason()}
  */
  getReason(): TransformedReason;
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
export interface EntityTransformedEvent extends EntityEvent, Cancellable {}
/**
 *  Fired when lightning strikes an entity
*/
export class EntityZapEvent extends EntityTransformEvent {
  constructor(entity: Entity, bolt: LightningStrike, replacementEntity: Entity);
  isCancelled(): boolean;
  setCancelled(cancel: boolean): void;
  /**
   * Gets the lightning bolt that is striking the entity.
   * @return The lightning bolt responsible for this event
  */
  getBolt(): LightningStrike;
  /**
   * Gets the entity that will replace the struck entity.
   * @return The entity that will replace the struck entity
  */
  getReplacementEntity(): Entity;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface EntityZapEvent extends EntityTransformEvent, Cancellable {}
/**
 * Fired when a Turtle starts digging to lay eggs
*/
export class TurtleStartDiggingEvent extends EntityEvent {
  constructor(turtle: Turtle, location: Location);
  /**
   * The turtle digging
   *
   * @return The turtle
  */
  getEntity(): Turtle;
  /**
   * Get the location where the turtle is digging
   *
   * @return Location where digging
  */
  getLocation(): Location;
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
export interface TurtleStartDiggingEvent extends EntityEvent, Cancellable {}
/**
 * Fired any time an entity is being added to the world for any reason.
 *
 * Not to be confused with {@link org.bukkit.event.entity.CreatureSpawnEvent}
 * This will fire anytime a chunk is reloaded too.
*/
export class EntityAddToWorldEvent extends EntityEvent {
  constructor(entity: Entity);
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Fired when a witch throws a potion at a player
*/
export class WitchThrowPotionEvent extends EntityEvent {
  constructor(witch: Witch, target: LivingEntity, potion: ItemStack | null);
  getEntity(): Witch;
  /**
   * @return The target of the potion
  */
  getTarget(): LivingEntity;
  /**
   * @return The potion the witch will throw at a player
  */
  getPotion(): ItemStack | null;
  /**
   * Sets the potion to be thrown at a player
   * @param potion The potion
  */
  setPotion(potion: ItemStack | null);
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
  /**
   * @return Event was cancelled or potion was null
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
export interface WitchThrowPotionEvent extends EntityEvent, Cancellable {}
/**
 * Fired when a witch consumes the potion in their hand to buff themselves.
*/
export class WitchConsumePotionEvent extends EntityEvent {
  constructor(witch: Witch, potion: ItemStack | null);
  getEntity(): Witch;
  /**
   * @return the potion the witch will consume and have the effects applied.
  */
  getPotion(): ItemStack | null;
  /**
   * Sets the potion to be consumed and applied to the witch.
   * @param potion The potion
  */
  setPotion(potion: ItemStack | null);
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
  /**
   * @return Event was cancelled or potion was null
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
export interface WitchConsumePotionEvent extends EntityEvent, Cancellable {}
export class EndermanEscapeEvent extends EntityEvent {
  constructor(entity: Enderman, reason: Reason);
  getEntity(): Enderman;
  /**
   * @return The reason the enderman is trying to escape
  */
  getReason(): Reason;
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
   * Cancels the escape.
   *
   * If this escape normally would of resulted in damage avoidance such as indirect,
   * the enderman will now take damage.
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
}
export interface EndermanEscapeEvent extends EntityEvent, Cancellable {}
/**
 * Called when an projectile collides with an entity
 * 
 * This event is called before {@link org.bukkit.event.entity.EntityDamageByEntityEvent}, and cancelling it will allow the projectile to continue flying
*/
export class ProjectileCollideEvent extends EntityEvent {
  /**
   * Get the entity the projectile collided with
   *
   * @return the entity collided with
  */
  getCollidedWith(): Entity;
  constructor(what: Projectile, collidedWith: Entity);
  /**
   * Get the projectile that collided
   *
   * @return the projectile that collided
  */
  getEntity(): Projectile;
  static getHandlerList(): HandlerList;
  getHandlers(): HandlerList;
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
export interface ProjectileCollideEvent extends EntityEvent, Cancellable {}
/**
 * Fired when an EnderDragon spawns an AreaEffectCloud by shooting flames
*/
export class EnderDragonFlameEvent extends EntityEvent {
  constructor(enderDragon: EnderDragon, areaEffectCloud: AreaEffectCloud);
  /**
   * The enderdragon involved in this event
  */
  getEntity(): EnderDragon;
  /**
   * @return The area effect cloud spawned in this collision
  */
  getAreaEffectCloud(): AreaEffectCloud;
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
export interface EnderDragonFlameEvent extends EntityEvent, Cancellable {}
/**
 * Fired when a DragonFireball collides with a block/entity and spawns an AreaEffectCloud
*/
export class EnderDragonFireballHitEvent extends EntityEvent {
  constructor(fireball: DragonFireball, targets: Collection<LivingEntity> | null, areaEffectCloud: AreaEffectCloud);
  /**
   * The fireball involved in this event
  */
  getEntity(): DragonFireball;
  /**
   * The living entities hit by fireball
   *
   * May be null if no entities were hit
   *
   * @return the targets
  */
  getTargets(): Collection<LivingEntity> | null;
  /**
   * @return The area effect cloud spawned in this collision
  */
  getAreaEffectCloud(): AreaEffectCloud;
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
export interface EnderDragonFireballHitEvent extends EntityEvent, Cancellable {}
/**
 * Fired when a Slime decides to start wandering.
 * 
 * This event does not fire for the entity's actual movement. Only when it
 * is choosing to start moving.
*/
export class SlimeWanderEvent extends SlimePathfindEvent {
  constructor(slime: Slime);
}
export interface SlimeWanderEvent extends SlimePathfindEvent, Cancellable {}
/**
 * Fired when an Enderman determines if it should attack a player or not.
 * Starts off cancelled if the player is wearing a pumpkin head or is not looking
 * at the Enderman, according to Vanilla rules.
 *
*/
export class EndermanAttackPlayerEvent extends EntityEvent {
  constructor(entity: Enderman, player: Player);
  /**
   * The enderman considering attacking
   *
   * @return The enderman considering attacking
  */
  getEntity(): Enderman;
  /**
   * The player the Enderman is considering attacking
   *
   * @return The player the Enderman is considering attacking
  */
  getPlayer(): Player;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
  /**
   *
   * @return If cancelled, the enderman will not attack
  */
  isCancelled(): boolean;
  /**
   * Cancels if the Enderman will attack this player
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
}
export interface EndermanAttackPlayerEvent extends EntityEvent, Cancellable {}
/**
 * Fired any time an entity attempts to teleport in an end gateway
*/
export class EntityTeleportEndGatewayEvent extends EntityTeleportEvent {
  constructor(what: Entity, from: Location, to: Location, gateway: EndGateway);
  /**
   * The gateway triggering the teleport
   *
   * @return EndGateway used
  */
  getGateway(): EndGateway;
}
/**
 * Fired when a Slime decides to change it's facing direction.
 * 
 * This event does not fire for the entity's actual movement. Only when it
 * is choosing to change direction.
*/
export class SlimeChangeDirectionEvent extends SlimePathfindEvent {
  constructor(slime: Slime, yaw: number);
  /**
   * Get the new chosen yaw
   *
   * @return Chosen yaw
  */
  getNewYaw(): number;
  /**
   * Set the new chosen yaw
   *
   * @param yaw Chosen yaw
  */
  setNewYaw(newYaw: number);
}
export interface SlimeChangeDirectionEvent extends SlimePathfindEvent, Cancellable {}

}
declare module 'com.destroystokyo.paper.ClientOption' {
import { Enum } from 'java.lang';
import { Index } from 'net.kyori.adventure.util';
export class ChatVisibility extends Enum<ChatVisibility> {
  static readonly FULL: ChatVisibility;
  static readonly SYSTEM: ChatVisibility;
  static readonly HIDDEN: ChatVisibility;
  static readonly UNKNOWN: ChatVisibility;
  static valueOf(name: string): ChatVisibility;
  static values(): ChatVisibility[];
  static NAMES: Index<string, ChatVisibility>;
  translationKey(): string;
}

}
declare module 'com.destroystokyo.paper.event.profile' {
import { Component } from 'net.kyori.adventure.text';
import { Set, Collection, UUID } from 'java.util';
import { HandlerList, Event } from 'org.bukkit.event';
import { ProfileProperty, PlayerProfile } from 'com.destroystokyo.paper.profile';
/**
 * Fired once a profiles additional properties (such as textures) has been filled
*/
export class FillProfileEvent extends Event {
  constructor(profile: PlayerProfile);
  /**
   * @return The Profile that had properties filled
  */
  getPlayerProfile(): PlayerProfile;
  /**
   * Same as .getPlayerProfile().getProperties()
   *
   * @see PlayerProfile#getProperties()
   * @return The new properties on the profile.
  */
  getProperties(): Set<ProfileProperty>;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Allows a plugin to intercept a Profile Lookup for a Profile by name
 *
 * At the point of event fire, the UUID and properties are unset.
 *
 * If a plugin sets the UUID, and optionally the properties, the API call to look up the profile may be skipped.
 *
 * No guarantees are made about thread execution context for this event. If you need to know, check
 * event.isAsync()
*/
export class PreLookupProfileEvent extends Event {
  constructor(name: string);
  /**
   * @return Name of the profile
  */
  getName(): string;
  /**
   * If this value is left null by the completion of the event call, then the server will
   * trigger a call to the Mojang API to look up the UUID (Network Request), and subsequently, fire a
   * {@link LookupProfileEvent}
   *
   * @return The UUID of the profile if it has already been provided by a plugin
  */
  getUUID(): UUID | null;
  /**
   * Sets the UUID for this player name. This will skip the initial API call to find the players UUID.
   *
   * However, if Profile Properties are needed by the server, you must also set them or else an API call might still be made.
   *
   * @param uuid the UUID to set for the profile or null to reset
  */
  setUUID(uUID: UUID | null);
  /**
   * @return The currently pending prepopulated properties.
   * Any property in this Set will be automatically prefilled on this Profile
  */
  getProfileProperties(): Set<ProfileProperty>;
  /**
   * Clears any existing prepopulated properties and uses the supplied properties
   * Any property in this Set will be automatically prefilled on this Profile
   * @param properties The properties to add
  */
  setProfileProperties(profileProperties: Set<ProfileProperty>);
  /**
   * Adds any properties currently missing to the prepopulated properties set, replacing any that already were set.
   * Any property in this Set will be automatically prefilled on this Profile
   * @param properties The properties to add
  */
  addProfileProperties(properties: Set<ProfileProperty>): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Fires when the server needs to verify if a player is whitelisted.
 *
 * Plugins may override/control the servers whitelist with this event,
 * and dynamically change the kick message.
*/
export class ProfileWhitelistVerifyEvent extends Event {
  constructor(profile: PlayerProfile, whitelistEnabled: boolean, whitelisted: boolean, isOp: boolean, kickMessage: string | null);
  constructor(profile: PlayerProfile, whitelistEnabled: boolean, whitelisted: boolean, isOp: boolean, kickMessage: Component | null);
  /**
   * @return the currently planned message to send to the user if they are not whitelisted
   * @deprecated use {@link #kickMessage()}
  */
  getKickMessage(): string | null;
  /**
   * @param kickMessage The message to send to the player on kick if not whitelisted. May set to null to use the server configured default
   * @deprecated Use {@link #kickMessage(Component)}
  */
  setKickMessage(kickMessage: string | null): void;
  /**
   * @param kickMessage The message to send to the player on kick if not whitelisted. May set to null to use the server configured default
  */
  kickMessage(kickMessage: Component | null): void;
  /**
   * @return The profile of the player trying to connect
  */
  getPlayerProfile(): PlayerProfile;
  /**
   * @return Whether the player is whitelisted to play on this server (whitelist may be off is why its true)
  */
  isWhitelisted(): boolean;
  /**
   * Changes the players whitelisted state. false will deny the login
   * @param whitelisted The new whitelisted state
  */
  setWhitelisted(whitelisted: boolean): void;
  /**
   * @return if the player obtained whitelist status by having op
  */
  isOp(): boolean;
  /**
   * @return if the server even has whitelist on
  */
  isWhitelistEnabled(): boolean;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Fired when the server is requesting to fill in properties of an incomplete profile, such as textures.
 *
 * Allows plugins to pre populate cached properties and avoid a call to the Mojang API
*/
export class PreFillProfileEvent extends Event {
  constructor(profile: PlayerProfile);
  /**
   * @return The profile that needs its properties filled
  */
  getPlayerProfile(): PlayerProfile;
  /**
   * Sets the properties on the profile, avoiding the call to the Mojang API
   * Same as .getPlayerProfile().setProperties(properties);
   * 
   * @see PlayerProfile#setProperties(Collection)
   * @param properties The properties to set/append
  */
  setProperties(properties: Collection<ProfileProperty>);
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Allows a plugin to be notified anytime AFTER a Profile has been looked up from the Mojang API
 * This is an opportunity to view the response and potentially cache things.
 *
 * No guarantees are made about thread execution context for this event. If you need to know, check
 * event.isAsync()
*/
export class LookupProfileEvent extends Event {
  constructor(profile: PlayerProfile);
  /**
   * @return The profile that was recently looked up. This profile can be mutated
  */
  getPlayerProfile(): PlayerProfile;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}

}
declare module 'com.destroystokyo.paper.event.block.TNTPrimeEvent' {
import { Enum } from 'java.lang';
export class PrimeReason extends Enum<PrimeReason> {
  /**
   * When TNT prime was caused by other explosion (chain reaction)
  */
  static readonly EXPLOSION: PrimeReason;
  /**
   * When TNT prime was caused by fire
  */
  static readonly FIRE: PrimeReason;
  /**
   * When {@link org.bukkit.entity.Player} used {@link org.bukkit.Material#FLINT_AND_STEEL} or
   * {@link org.bukkit.Material#FIRE_CHARGE} on given TNT block
  */
  static readonly ITEM: PrimeReason;
  /**
   * When TNT prime was caused by an {@link Entity} shooting TNT
   * using a bow with {@link org.bukkit.enchantments.Enchantment#ARROW_FIRE} enchantment
  */
  static readonly PROJECTILE: PrimeReason;
  /**
   * When redstone power triggered the TNT prime
  */
  static readonly REDSTONE: PrimeReason;
  static valueOf(name: string): PrimeReason;
  static values(): PrimeReason[];
}

}
declare module 'com.destroystokyo.paper.event.block' {
import { PotionEffect } from 'org.bukkit.potion';
import { Block } from 'org.bukkit.block';
import { InventoryEvent } from 'org.bukkit.event.inventory';
import { HandlerList, Cancellable } from 'org.bukkit.event';
import { BlockData } from 'org.bukkit.block.data';
import { PrimeReason } from 'com.destroystokyo.paper.event.block.TNTPrimeEvent';
import { DamageState } from 'com.destroystokyo.paper.event.block.AnvilDamagedEvent';
import { BlockEvent } from 'org.bukkit.event.block';
import { InventoryView, AnvilInventory } from 'org.bukkit.inventory';
import { Entity, Player } from 'org.bukkit.entity';
/**
 * Called when TNT block is about to turn into {@link org.bukkit.entity.TNTPrimed}
 * 
 * Cancelling it won't turn TNT into {@link org.bukkit.entity.TNTPrimed} and leaves
 * the TNT block as-is
 *
 * @author Mark Vainomaa
*/
export class TNTPrimeEvent extends BlockEvent {
  constructor(theBlock: Block, reason: PrimeReason, primerEntity: Entity | null);
  /**
   * Gets the TNT prime reason
   *
   * @return Prime reason
  */
  getReason(): PrimeReason;
  /**
   * Gets the TNT primer {@link Entity}.
   *
   * It's null if {@link #getReason()} is {@link PrimeReason#REDSTONE} or {@link PrimeReason#FIRE}.
   * It's not null if {@link #getReason()} is {@link PrimeReason#ITEM} or {@link PrimeReason#PROJECTILE}
   * It might be null if {@link #getReason()} is {@link PrimeReason#EXPLOSION}
   *
   * @return The {@link Entity} who primed the TNT
  */
  getPrimerEntity(): Entity | null;
  /**
   * Gets whether spawning {@link org.bukkit.entity.TNTPrimed} should be cancelled or not
   *
   * @return Whether spawning {@link org.bukkit.entity.TNTPrimed} should be cancelled or not
  */
  isCancelled(): boolean;
  /**
   * Sets whether to cancel spawning {@link org.bukkit.entity.TNTPrimed} or not
   *
   * @param cancel whether spawning {@link org.bukkit.entity.TNTPrimed} should be cancelled or not
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList | null;
  static getHandlerList(): HandlerList | null;
}
export interface TNTPrimeEvent extends BlockEvent, Cancellable {}
/**
 * Called when a beacon effect is being applied to a player.
*/
export class BeaconEffectEvent extends BlockEvent {
  constructor(block: Block, effect: PotionEffect, player: Player, primary: boolean);
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
   * Gets the potion effect being applied.
   *
   * @return Potion effect
  */
  getEffect(): PotionEffect;
  /**
   * Sets the potion effect that will be applied.
   *
   * @param effect Potion effect
  */
  setEffect(effect: PotionEffect);
  /**
   * Gets the player who the potion effect is being applied to.
   *
   * @return Affected player
  */
  getPlayer(): Player;
  /**
   * Gets whether the effect is a primary beacon effect.
   *
   * @return true if this event represents a primary effect
  */
  isPrimary(): boolean;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface BeaconEffectEvent extends BlockEvent, Cancellable {}
/**
 * Fired anytime the server intends to 'destroy' a block through some triggering reason.
 * This does not fire anytime a block is set to air, but only with more direct triggers such
 * as physics updates, pistons, Entities changing blocks, commands set to "Destroy".
 *
 * This event is associated with the game playing a sound effect at the block in question, when
 * something can be described as "intend to destroy what is there",
 *
 * Events such as leaves decaying, pistons retracting (where the block is moving), does NOT fire this event.
 *
*/
export class BlockDestroyEvent extends BlockEvent {
  constructor(block: Block, newState: BlockData, willDrop: boolean);
  /**
   * @return The new state of this block (Air, or a Fluid type)
  */
  getNewState(): BlockData;
  /**
   * @return If the server is going to drop the block in question with this destroy event
  */
  willDrop(): boolean;
  /**
   * @return If the server is going to play the sound effect for this destruction
  */
  playEffect(): boolean;
  /**
   * @param playEffect If the server should play the sound effect for this destruction
  */
  setPlayEffect(playEffect: boolean): void;
  /**
   * @return If the event is cancelled, meaning the block will not be destroyed
  */
  isCancelled(): boolean;
  /**
   * If the event is cancelled, the block will remain in its previous state.
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface BlockDestroyEvent extends BlockEvent, Cancellable {}
/**
 * Called when an anvil is damaged from being used
*/
export class AnvilDamagedEvent extends InventoryEvent {
  constructor(inventory: InventoryView, blockData: BlockData);
  getInventory(): AnvilInventory;
  /**
   * Gets the new state of damage on the anvil
   *
   * @return Damage state
  */
  getDamageState(): DamageState;
  /**
   * Sets the new state of damage on the anvil
   *
   * @param damageState Damage state
  */
  setDamageState(damageState: DamageState);
  /**
   * Gets if anvil is breaking on this use
   *
   * @return True if breaking
  */
  isBreaking(): boolean;
  /**
   * Sets if anvil is breaking on this use
   *
   * @param breaking True if breaking
  */
  setBreaking(breaking: boolean): void;
  isCancelled(): boolean;
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface AnvilDamagedEvent extends InventoryEvent, Cancellable {}

}
declare module 'com.destroystokyo.paper.event.entity.EntityTransformedEvent' {
import { Enum } from 'java.lang';
export class TransformedReason extends Enum<TransformedReason> {
  /**
   * When a zombie drowns
  */
  static readonly DROWNED: TransformedReason;
  /**
   * When a zombie villager is cured
  */
  static readonly CURED: TransformedReason;
  /**
   * When a villager turns to a zombie villager
  */
  static readonly INFECTED: TransformedReason;
  /**
   * When a mooshroom turns to a cow
  */
  static readonly SHEARED: TransformedReason;
  /**
   * When a pig turns to a zombiepigman
  */
  static readonly LIGHTNING: TransformedReason;
  static valueOf(name: string): TransformedReason;
  static values(): TransformedReason[];
}

}
declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent' {
import { Builder, PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { Collection } from 'java.util';
import { Enum } from 'java.lang';
/**
 * The type of query
*/
export class QueryType extends Enum<QueryType> {
  /**
   * Basic query asks only a subset of information, such as motd, game type (hardcoded to MINECRAFT), map,
   * current players, max players, server port and server motd
  */
  static readonly BASIC: QueryType;
  /**
   * Full query asks pretty much everything present on this event (only hardcoded values cannot be modified here).
  */
  static readonly FULL: QueryType;
  static valueOf(name: string): QueryType;
  static values(): QueryType[];
}
export class QueryResponse {
  /**
   * Get motd which will be used to reply to the query. By default it is {@link org.bukkit.Server#getMotd()}.
   * @return motd
  */
  getMotd(): string;
  /**
   * Get game version which will be used to reply to the query. By default supported Minecraft versions range is sent.
   * @return game version
  */
  getGameVersion(): string;
  /**
   * Get map name which will be used to reply to the query. By default `world` is sent.
   * @return map name
  */
  getMap(): string;
  /**
   * Get current online player count which will be used to reply to the query.
   * @return online player count
  */
  getCurrentPlayers(): number;
  /**
   * Get max player count which will be used to reply to the query.
   * @return max player count
  */
  getMaxPlayers(): number;
  /**
   * Get server (public facing) hostname
   * @return server hostname
  */
  getHostname(): string;
  /**
   * Get server (public facing) port
   * @return server port
  */
  getPort(): number;
  /**
   * Get collection of players which will be used to reply to the query.
   * @return collection of players
  */
  getPlayers(): Collection<string>;
  /**
   * Get server software (name and version) which will be used to reply to the query.
   * @return server software
  */
  getServerVersion(): string;
  /**
   * Get list of plugins which will be used to reply to the query.
   * @return collection of plugins
  */
  getPlugins(): Collection<PluginInformation>;
  /**
   * Creates a new {@link Builder} instance from data represented by this response
   * @return {@link QueryResponse} builder
  */
  toBuilder(): Builder;
  /**
   * Creates a new {@link Builder} instance
   * @return {@link QueryResponse} builder
  */
  static builder(): Builder;
}

}
declare module 'com.destroystokyo.paper.event.server' {
import { Component } from 'net.kyori.adventure.text';
import { Iterator, List } from 'java.util';
import { ServerListPingEvent } from 'org.bukkit.event.server';
import { CommandSender } from 'org.bukkit.command';
import { StatusClient } from 'com.destroystokyo.paper.network';
import { Completion } from 'com.destroystokyo.paper.event.server.AsyncTabCompleteEvent';
import { ServerException } from 'com.destroystokyo.paper.exception';
import { Location } from 'org.bukkit';
import { InetAddress } from 'java.net';
import { QueryResponse, QueryType } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { CachedServerIcon } from 'org.bukkit.util';
import { HandlerList, Cancellable, Event } from 'org.bukkit.event';
import { PlayerProfile } from 'com.destroystokyo.paper.profile';
import { Player } from 'org.bukkit.entity';
/**
 * This event is fired if server is getting queried over GS4 Query protocol
 *
 * Adapted from Velocity's ProxyQueryEvent
 *
 * @author Mark Vainomaa
*/
export class GS4QueryEvent extends Event {
  constructor(queryType: QueryType, querierAddress: InetAddress, response: QueryResponse);
  /**
   * Get query type
   * @return query type
  */
  getQueryType(): QueryType;
  /**
   * Get querier address
   * @return querier address
  */
  getQuerierAddress(): InetAddress;
  /**
   * Get query response
   * @return query response
  */
  getResponse(): QueryResponse;
  /**
   * Set query response
   * @param response query response
  */
  setResponse(response: QueryResponse);
  toString(): string;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * This event is fired when whitelist is toggled
 *
 * @author Mark Vainomaa
*/
export class WhitelistToggleEvent extends Event {
  constructor(enabled: boolean);
  /**
   * Gets whether whitelist is going to be enabled or not
   *
   * @return Whether whitelist is going to be enabled or not
  */
  isEnabled(): boolean;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Called whenever an exception is thrown in a recoverable section of the server.
*/
export class ServerExceptionEvent extends Event {
  constructor(exception: ServerException);
  /**
   * Gets the wrapped exception that was thrown.
   *
   * @return Exception thrown
  */
  getException(): ServerException;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Extended version of {@link ServerListPingEvent} that allows full control
 * of the response sent to the client.
*/
export class PaperServerListPingEvent extends ServerListPingEvent {
  constructor(client: StatusClient, motd: string, numPlayers: number, maxPlayers: number, version: string, protocolVersion: number, favicon: CachedServerIcon | null);
  constructor(client: StatusClient, motd: Component, numPlayers: number, maxPlayers: number, version: string, protocolVersion: number, favicon: CachedServerIcon | null);
  /**
   * Returns the {@link StatusClient} pinging the server.
   *
   * @return The client
  */
  getClient(): StatusClient;
  /**
   * {@inheritDoc}
   *
   * Returns `-1` if players are hidden using
   * {@link #shouldHidePlayers()}.
  */
  getNumPlayers(): number;
  /**
   * Sets the number of players displayed in the server list.
   *
   * Note that this won't have any effect if {@link #shouldHidePlayers()}
   * is enabled.
   *
   * @param numPlayers The number of online players
  */
  setNumPlayers(numPlayers: number);
  /**
   * {@inheritDoc}
   *
   * Returns `-1` if players are hidden using
   * {@link #shouldHidePlayers()}.
  */
  getMaxPlayers(): number;
  /**
   * Returns whether all player related information is hidden in the server
   * list. This will cause {@link #getNumPlayers()}, {@link #getMaxPlayers()}
   * and {@link #getPlayerSample()} to be skipped in the response.
   *
   * The Vanilla Minecraft client will display the player count as `???`
   * when this option is enabled.
   *
   * @return `true` if the player count is hidden
  */
  shouldHidePlayers(): boolean;
  /**
   * Sets whether all player related information is hidden in the server
   * list. This will cause {@link #getNumPlayers()}, {@link #getMaxPlayers()}
   * and {@link #getPlayerSample()} to be skipped in the response.
   *
   * The Vanilla Minecraft client will display the player count as `???`
   * when this option is enabled.
   *
   * @param hidePlayers `true` if the player count should be hidden
  */
  setHidePlayers(hidePlayers: boolean): void;
  /**
   * Returns a mutable list of {@link PlayerProfile} that will be displayed
   * as online players on the client.
   *
   * The Vanilla Minecraft client will display them when hovering the
   * player count with the mouse.
   *
   * @return The mutable player sample list
  */
  getPlayerSample(): PlayerProfile[];
  /**
   * Returns the version that will be sent as server version on the client.
   *
   * @return The server version
  */
  getVersion(): string;
  /**
   * Sets the version that will be sent as server version to the client.
   *
   * @param version The server version
  */
  setVersion(version: string);
  /**
   * Returns the protocol version that will be sent as the protocol version
   * of the server to the client.
   *
   * @return The protocol version of the server, or `-1` if the server
   * has not finished initialization yet
  */
  getProtocolVersion(): number;
  /**
   * Sets the protocol version that will be sent as the protocol version
   * of the server to the client.
   *
   * @param protocolVersion The protocol version of the server
  */
  setProtocolVersion(protocolVersion: number);
  /**
   * Gets the server icon sent to the client.
   *
   * @return The icon to send to the client, or `null` for none
  */
  getServerIcon(): CachedServerIcon | null;
  /**
   * Sets the server icon sent to the client.
   *
   * @param icon The icon to send to the client, or `null` for none
  */
  setServerIcon(serverIcon: CachedServerIcon | null);
  /**
   * {@inheritDoc}
   *
   * Cancelling this event will cause the connection to be closed immediately,
   * without sending a response to the client.
  */
  isCancelled(): boolean;
  /**
   * {@inheritDoc}
   *
   * Cancelling this event will cause the connection to be closed immediately,
   * without sending a response to the client.
  */
  setCancelled(cancel: boolean): void;
  /**
   * {@inheritDoc}
   *
   * Note: For compatibility reasons, this method will return all
   * online players, not just the ones referenced in {@link #getPlayerSample()}.
   * Removing a player will:
   *
   * 
   *     Decrement the online player count (if and only if) the player
   *     count wasn't changed by another plugin before.
   *     Remove all entries from {@link #getPlayerSample()} that refer to
   *     the removed player (based on their {@link UUID}).
   * 
  */
  iterator(): Iterator<Player>;
  /**
   * Set the maximum number of players sent.
   *
   * @param maxPlayers the maximum number of player
  */
  setMaxPlayers(maxPlayers: number);
}
export interface PaperServerListPingEvent extends ServerListPingEvent, Cancellable {}
/**
 * Allows plugins to compute tab completion results asynchronously. If this event provides completions, then the standard synchronous process will not be fired to populate the results. However, the synchronous TabCompleteEvent will fire with the Async results.
 *
 * Only 1 process will be allowed to provide completions, the Async Event, or the standard process.
*/
export class AsyncTabCompleteEvent extends Event {
  constructor(sender: CommandSender, buffer: string, isCommand: boolean, loc: Location | null);
  constructor(sender: CommandSender, completions: string[], buffer: string, isCommand: boolean, loc: Location | null);
  /**
   * Get the sender completing this command.
   *
   * @return the {@link CommandSender} instance
  */
  getSender(): CommandSender;
  /**
   * The list of completions which will be offered to the sender, in order.
   * This list is mutable and reflects what will be offered.
   *
   * If this collection is not empty after the event is fired, then
   * the standard process of calling {@link Command#tabComplete(CommandSender, String, String[])}
   * or current player names will not be called.
   *
   * @return a list of offered completions
  */
  getCompletions(): string[];
  /**
   * Set the completions offered, overriding any already set.
   * If this collection is not empty after the event is fired, then
   * the standard process of calling {@link Command#tabComplete(CommandSender, String, String[])}
   * or current player names will not be called.
   *
   * The passed collection will be cloned to a new List. You must call {{@link #getCompletions()}} to mutate from here
   *
   * @param completions the new completions
  */
  setCompletions(completions: string[]);
  /**
   * Return the entire buffer which formed the basis of this completion.
   *
   * @return command buffer, as entered
  */
  getBuffer(): string;
  /**
   * @return True if it is a command being tab completed, false if it is a chat message.
  */
  isCommand(): boolean;
  /**
   * @return The position looked at by the sender, or null if none
  */
  getLocation(): Location | null;
  /**
   * If true, the standard process of calling {@link Command#tabComplete(CommandSender, String, String[])}
   * or current player names will not be called.
   *
   * @return Is completions considered handled. Always true if completions is not empty.
  */
  isHandled(): boolean;
  /**
   * Sets whether or not to consider the completion request handled.
   * If true, the standard process of calling {@link Command#tabComplete(CommandSender, String, String[])}
   * or current player names will not be called.
   *
   * @param handled if this completion should be marked as being handled
  */
  setHandled(handled: boolean): void;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Will provide no completions, and will not fire the synchronous process
   * @param cancelled true if you wish to cancel this event
  */
  setCancelled(cancelled: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface AsyncTabCompleteEvent extends Event, Cancellable {}
export class ServerTickStartEvent extends Event {
  constructor(tickNumber: number);
  /**
   * @return What tick this is going be since start (first tick = 1)
  */
  getTickNumber(): number;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Called when the server has finished ticking the main loop
*/
export class ServerTickEndEvent extends Event {
  constructor(tickNumber: number, tickDuration: number, timeRemaining: number);
  /**
   * @return What tick this was since start (first tick = 1)
  */
  getTickNumber(): number;
  /**
   * @return Time in milliseconds of how long this tick took
  */
  getTickDuration(): number;
  /**
   * Amount of nanoseconds remaining before the next tick should start.
   *
   * If this value is negative, then that means the server has exceeded the tick time limit and TPS has been lost.
   *
   * Method will continously return the updated time remaining value. (return value is not static)
   *
   * @return Amount of nanoseconds remaining before the next tick should start
  */
  getTimeRemaining(): number;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}

}
declare module 'com.destroystokyo.paper.event.executor.asm' {
import { Method } from 'java.lang.reflect';
import { GeneratedClassLoader } from 'com.destroystokyo.paper.event.executor.asm.SafeClassDefiner';
import { ClassLoader, Class } from 'java.lang';
import { ConcurrentMap } from 'java.util.concurrent';
import { AtomicInteger } from 'java.util.concurrent.atomic';
export class ASMEventExecutorGenerator {
  static generateEventExecutor(m: Method, name: string): number[];
  static NEXT_ID: AtomicInteger;
  static generateName(): string;
}
export class ClassDefiner {
  /**
   * Returns if the defined classes can bypass access checks
   *
   * @return if classes bypass access checks
  */
  isBypassAccessChecks(): boolean;
  /**
   * Define a class
   *
   * @param parentLoader the parent classloader
   * @param name         the name of the class
   * @param data         the class data to load
   * @return the defined class
   * @throws ClassFormatError     if the class data is invalid
   * @throws NullPointerException if any of the arguments are null
  */
  defineClass(parentLoader: ClassLoader, name: string, data: number[]): Class<any>;
  static getInstance(): ClassDefiner;
}
export class SafeClassDefiner extends ClassDefiner {
  /**
   * Define a class
   *
   * @param parentLoader the parent classloader
   * @param name         the name of the class
   * @param data         the class data to load
   * @return the defined class
   * @throws ClassFormatError     if the class data is invalid
   * @throws NullPointerException if any of the arguments are null
  */
  defineClass(parentLoader: ClassLoader, name: string, data: number[]): Class<any>;
}

}
declare module 'com.destroystokyo.paper.event.player' {
import { PlayerTeleportEvent, PlayerEvent } from 'org.bukkit.event.player';
import { Component } from 'net.kyori.adventure.text';
import { UUID } from 'java.util';
import { SlotType } from 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent';
import { Advancement } from 'org.bukkit.advancement';
import { Cause } from 'com.destroystokyo.paper.event.player.PlayerSetSpawnEvent';
import { EquipmentSlot, MainHand, ItemStack } from 'org.bukkit.inventory';
import { NamespacedKey, Location } from 'org.bukkit';
import { ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { Exception } from 'java.lang';
import { EndGateway } from 'org.bukkit.block';
import { InetAddress } from 'java.net';
import { SkinParts } from 'com.destroystokyo.paper';
import { HandlerList, Cancellable, Event } from 'org.bukkit.event';
import { PlayerSpawnLocationEvent } from 'org.spigotmc.event.player';
import { Entity, Player, Firework, ExperienceOrb, Projectile } from 'org.bukkit.entity';
/**
 * Fired when a teleport is triggered for an End Gateway
*/
export class PlayerTeleportEndGatewayEvent extends PlayerTeleportEvent {
  constructor(player: Player, from: Location, to: Location, gateway: EndGateway);
  /**
   * The gateway triggering the teleport
   *
   * @return EndGateway used
  */
  getGateway(): EndGateway;
}
/**
 * 
 * This event is invoked when a player has disconnected. It is guaranteed that,
 * if the server is in online-mode, that the provided uuid and username have been
 * validated.
 * 
 *
 * 
 * The event is invoked for players who have not yet logged into the world, whereas
 * {@link org.bukkit.event.player.PlayerQuitEvent} is only invoked on players who have logged into the world.
 * 
 *
 * 
 * The event is invoked for players who have already logged into the world,
 * although whether or not the player exists in the world at the time of
 * firing is undefined. (That is, whether the plugin can retrieve a Player object
 * using the event parameters is undefined). However, it is guaranteed that this
 * event is invoked AFTER {@link org.bukkit.event.player.PlayerQuitEvent}, if the player has already logged into the world.
 * 
 *
 * 
 * This event is guaranteed to never fire unless {@link org.bukkit.event.player.AsyncPlayerPreLoginEvent} has
 * been fired beforehand, and this event may not be called in parallel with
 * {@link org.bukkit.event.player.AsyncPlayerPreLoginEvent} for the same connection.
 * 
 *
 * 
 * Cancelling the {@link org.bukkit.event.player.AsyncPlayerPreLoginEvent} guarantees the corresponding
 * `PlayerConnectionCloseEvent` is never called.
 * 
 *
 * 
 * The event may be invoked asynchronously or synchronously. Plugins should check
 * {@link Event#isAsynchronous()} and handle accordingly.
 * 
*/
export class PlayerConnectionCloseEvent extends Event {
  constructor(playerUniqueId: UUID, playerName: string, ipAddress: InetAddress, async: boolean);
  /**
   * Returns the `UUID` of the player disconnecting.
  */
  getPlayerUniqueId(): UUID;
  /**
   * Returns the name of the player disconnecting.
  */
  getPlayerName(): string;
  /**
   * Returns the player's IP address.
  */
  getIpAddress(): InetAddress;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Fired after a player has respawned
*/
export class PlayerPostRespawnEvent extends PlayerEvent {
  constructor(respawnPlayer: Player, respawnedLocation: Location, isBedSpawn: boolean);
  /**
   * Returns the location of the respawned player
   *
   * @return location of the respawned player
  */
  getRespawnedLocation(): Location;
  /**
   * Checks if the player respawned to their bed
   *
   * @return whether the player respawned to their bed
  */
  isBedSpawn(): boolean;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Triggered when a player starts spectating an entity in spectator mode.
*/
export class PlayerStartSpectatingEntityEvent extends PlayerEvent {
  constructor(player: Player, currentSpectatorTarget: Entity, newSpectatorTarget: Entity);
  /**
   * Gets the entity that the player is currently spectating or themselves if they weren't spectating anything
   *
   * @return The entity the player is currently spectating (before they start spectating the new target).
  */
  getCurrentSpectatorTarget(): Entity;
  /**
   * Gets the new entity that the player will now be spectating
   *
   * @return The entity the player is now going to be spectating.
  */
  getNewSpectatorTarget(): Entity;
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
export interface PlayerStartSpectatingEntityEvent extends PlayerEvent, Cancellable {}
/**
 * @deprecated Use {@link PlayerSpawnLocationEvent}, Duplicate API
*/
export class PlayerInitialSpawnEvent extends PlayerSpawnLocationEvent {
  constructor(who: Player, spawnLocation: Location);
}
/**
 * Called when a player is firing a bow and the server is choosing an arrow to use.
*/
export class PlayerReadyArrowEvent extends PlayerEvent {
  constructor(player: Player, bow: ItemStack, arrow: ItemStack);
  /**
   * @return the player is using to fire the arrow
  */
  getBow(): ItemStack;
  /**
   * @return the arrow that is attempting to be used
  */
  getArrow(): ItemStack;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
  /**
   * Whether or not use of this arrow is cancelled. On cancel, the server will try the next arrow available and fire another event.
  */
  isCancelled(): boolean;
  /**
   * Cancel use of this arrow. On cancel, the server will try the next arrow available and fire another event.
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
}
export interface PlayerReadyArrowEvent extends PlayerEvent, Cancellable {}
/**
 * Called when processing a player's attack on an entity when the player's attack strength cooldown is reset
*/
export class PlayerAttackEntityCooldownResetEvent extends PlayerEvent {
  constructor(who: Player, attackedEntity: Entity, cooledAttackStrength: number);
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   * 
   * If an attack cooldown event is cancelled, the players attack strength will remain at the same value instead of being reset.
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Cancelling this event will prevent the target player from having their cooldown reset from attacking this entity
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  /**
   * Get the value of the players cooldown attack strength when they initiated the attack
   *
   * @return returns the original player cooldown value
  */
  getCooledAttackStrength(): number;
  /**
   * Returns the entity attacked by the player
   *
   * @return the entity attacked by the player
  */
  getAttackedEntity(): Entity;
}
export interface PlayerAttackEntityCooldownResetEvent extends PlayerEvent, Cancellable {}
/**
 * Called when the player changes his client settings
*/
export class PlayerClientOptionsChangeEvent extends PlayerEvent {
  constructor(player: Player, locale: string, viewDistance: number, chatVisibility: ChatVisibility, chatColors: boolean, skinParts: SkinParts, mainHand: MainHand);
  getLocale(): string;
  hasLocaleChanged(): boolean;
  getViewDistance(): number;
  hasViewDistanceChanged(): boolean;
  getChatVisibility(): ChatVisibility;
  hasChatVisibilityChanged(): boolean;
  hasChatColorsEnabled(): boolean;
  hasChatColorsEnabledChanged(): boolean;
  getSkinParts(): SkinParts;
  hasSkinPartsChanged(): boolean;
  getMainHand(): MainHand;
  hasMainHandChanged(): boolean;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Called when a player's spawn is set, either by themselves or otherwise.
 * Cancelling this event will prevent the spawn from being set.
*/
export class PlayerSetSpawnEvent extends PlayerEvent {
  constructor(who: Player, cause: Cause, location: Location | null, forced: boolean, notifyPlayer: boolean, notification: Component | null);
  /**
   * Gets the cause of this event.
   *
   * @return the cause
  */
  getCause(): Cause;
  /**
   * Gets the location that the spawn is set to. The yaw
   * of this location is the spawn angle. Mutating this location
   * will change the resulting spawn point of the player. Use
   * {@link Location#clone()} to get a copy of this location.
   *
   * @return the spawn location, or null if removing the location
  */
  getLocation(): Location | null;
  /**
   * Sets the location to be set as the spawn location. The yaw
   * of this location is the spawn angle.
   *
   * @param location the spawn location, or null to remove the spawn location
  */
  setLocation(location: Location | null);
  /**
   * Gets if this is a force spawn location
   *
   * @return true if forced
  */
  isForced(): boolean;
  /**
   * Sets if this is a forced spawn location
   *
   * @param forced true to force
  */
  setForced(forced: boolean): void;
  /**
   * Gets if this action will notify the player their spawn
   * has been set.
   *
   * @return true to notify
  */
  willNotifyPlayer(): boolean;
  /**
   * Sets if this action will notify the player that their spawn
   * has been set.
   *
   * @param notifyPlayer true to notify
  */
  setNotifyPlayer(notifyPlayer: boolean): void;
  /**
   * Gets the notification message that will be sent to the player
   * if {@link #willNotifyPlayer()} returns true.
   *
   * @return null if no notification
  */
  getNotification(): Component | null;
  /**
   * Sets the notification message that will be sent to the player.
   *
   * @param notification null to send no message
  */
  setNotification(notification: Component | null);
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
export interface PlayerSetSpawnEvent extends PlayerEvent, Cancellable {}
export class PlayerUseUnknownEntityEvent extends PlayerEvent {
  constructor(who: Player, entityId: number, attack: boolean, hand: EquipmentSlot);
  getEntityId(): number;
  isAttack(): boolean;
  getHand(): EquipmentSlot;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * @deprecated Not used
*/
export class IllegalPacketEvent extends PlayerEvent {
  constructor(player: Player, type: string | null, kickMessage: string | null, e: Exception);
  isShouldKick(): boolean;
  setShouldKick(shouldKick: boolean): void;
  getKickMessage(): string | null;
  setKickMessage(kickMessage: string | null);
  getType(): string | null;
  getExceptionMessage(): string | null;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
  static process(player: Player, type: string | null, kickMessage: string | null, exception: Exception): void;
}
/**
 * This event is fired during a player handshake.
 *
 * If there are no listeners listening to this event, the logic default
 * to your server platform will be ran.
 *
 * WARNING: TAMPERING WITH THIS EVENT CAN BE DANGEROUS
*/
export class PlayerHandshakeEvent extends Event {
  /**
   * Creates a new {@link PlayerHandshakeEvent}.
   *
   * @param originalHandshake the original handshake string
   * @param cancelled if this event is enabled
   *
   * @deprecated in favour of {@link PlayerHandshakeEvent(String, String, boolean)}
  */
  constructor(originalHandshake: string, cancelled: boolean);
  /**
   * Creates a new {@link PlayerHandshakeEvent}.
   *
   * @param originalHandshake the original handshake string
   * @param originalSocketAddressHostname the original socket address hostname
   * @param cancelled if this event is enabled
  */
  constructor(originalHandshake: string, originalSocketAddressHostname: string, cancelled: boolean);
  /**
   * Determines if this event is cancelled.
   *
   * When this event is cancelled, custom handshake logic will not
   * be processed.
   *
   * @return `true` if this event is cancelled, `false` otherwise
  */
  isCancelled(): boolean;
  /**
   * Sets if this event is cancelled.
   *
   * When this event is cancelled, custom handshake logic will not
   * be processed.
   *
   * @param cancelled `true` if this event is cancelled, `false` otherwise
  */
  setCancelled(cancelled: boolean): void;
  /**
   * Gets the original handshake string.
   *
   * @return the original handshake string
  */
  getOriginalHandshake(): string;
  /**
   * Gets the original socket address hostname.
   *
   * This does not include the port.
   * In cases where this event is manually fired and the plugin wasn't updated yet, the default is `"127.0.0.1"`.
   *
   * @return the original socket address hostname
  */
  getOriginalSocketAddressHostname(): string;
  /**
   * Gets the server hostname string.
   *
   * This should not include the port.
   *
   * @return the server hostname string
  */
  getServerHostname(): string | null;
  /**
   * Sets the server hostname string.
   *
   * This should not include the port.
   *
   * @param serverHostname the server hostname string
  */
  setServerHostname(serverHostname: string);
  /**
   * Gets the socket address hostname string.
   *
   * This should not include the port.
   *
   * @return the socket address hostname string
  */
  getSocketAddressHostname(): string | null;
  /**
   * Sets the socket address hostname string.
   *
   * This should not include the port.
   *
   * @param socketAddressHostname the socket address hostname string
  */
  setSocketAddressHostname(socketAddressHostname: string);
  /**
   * Gets the unique id.
   *
   * @return the unique id
  */
  getUniqueId(): UUID | null;
  /**
   * Sets the unique id.
   *
   * @param uniqueId the unique id
  */
  setUniqueId(uniqueId: UUID);
  /**
   * Gets the profile properties.
   *
   * This should be a valid JSON string.
   *
   * @return the profile properties, as JSON
  */
  getPropertiesJson(): string | null;
  /**
   * Determines if authentication failed.
   *
   * When `true`, the client connecting will be disconnected
   * with the {@link #getFailMessage() fail message}.
   *
   * @return `true` if authentication failed, `false` otherwise
  */
  isFailed(): boolean;
  /**
   * Sets if authentication failed and the client should be disconnected.
   *
   * When `true`, the client connecting will be disconnected
   * with the {@link #getFailMessage() fail message}.
   *
   * @param failed `true` if authentication failed, `false` otherwise
  */
  setFailed(failed: boolean): void;
  /**
   * Sets the profile properties.
   *
   * This should be a valid JSON string.
   *
   * @param propertiesJson the profile properties, as JSON
  */
  setPropertiesJson(propertiesJson: string);
  /**
   * Gets the message to display to the client when authentication fails.
   *
   * @return the message to display to the client
  */
  failMessage(): Component;
  /**
   * Sets the message to display to the client when authentication fails.
   *
   * @param failMessage the message to display to the client
  */
  failMessage(failMessage: Component): void;
  /**
   * Sets the message to display to the client when authentication fails.
   *
   * @param failMessage the message to display to the client
   * @deprecated use {@link #failMessage(Component)}
  */
  setFailMessage(failMessage: string): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerHandshakeEvent extends Event, Cancellable {}
/**
 * Fired when a player boosts elytra flight with a firework
*/
export class PlayerElytraBoostEvent extends PlayerEvent {
  constructor(player: Player, itemStack: ItemStack, firework: Firework);
  /**
   * Get the firework itemstack used
   *
   * @return ItemStack of firework
  */
  getItemStack(): ItemStack;
  /**
   * Get the firework entity that was spawned
   *
   * @return Firework entity
  */
  getFirework(): Firework;
  /**
   * Get whether to consume the firework or not
   *
   * @return True to consume
  */
  shouldConsume(): boolean;
  /**
   * Set whether to consume the firework or not
   *
   * @param consume True to consume
  */
  setShouldConsume(consume: boolean): void;
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
export interface PlayerElytraBoostEvent extends PlayerEvent, Cancellable {}
/**
 * Called when the server detects the player is jumping.
 * 
 * Added to avoid the overhead and special case logic that many plugins use
 * when checking for jumps via PlayerMoveEvent, this event is fired whenever
 * the server detects that the player is jumping.
*/
export class PlayerJumpEvent extends PlayerEvent {
  constructor(player: Player, from: Location, to: Location);
  /**
   * Gets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   * 
   * If a jump event is cancelled, the player will be moved or
   * teleported back to the Location as defined by getFrom(). This will not
   * fire an event
   *
   * @return true if this event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Sets the cancellation state of this event. A cancelled event will not
   * be executed in the server, but will still pass to other plugins
   * 
   * If a jump event is cancelled, the player will be moved or
   * teleported back to the Location as defined by getFrom(). This will not
   * fire an event
   *
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
  /**
   * Gets the location this player jumped from
   *
   * @return Location the player jumped from
  */
  getFrom(): Location;
  /**
   * Sets the location to mark as where the player jumped from
   *
   * @param from New location to mark as the players previous location
  */
  setFrom(from: Location);
  /**
   * Gets the location this player jumped to
   *
   * This information is based on what the client sends, it typically
   * has little relation to the arc of the jump at any given point.
   *
   * @return Location the player jumped to
  */
  getTo(): Location;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerJumpEvent extends PlayerEvent, Cancellable {}
/**
 * Called when the locale of the player is changed.
 *
 * @deprecated Replaced by {@link org.bukkit.event.player.PlayerLocaleChangeEvent} upstream
*/
export class PlayerLocaleChangeEvent extends PlayerEvent {
  constructor(player: Player, oldLocale: string, newLocale: string);
  /**
   * Gets the locale the player switched from.
   *
   * @return player's old locale
  */
  getOldLocale(): string;
  /**
   * Gets the locale the player is changed to.
   *
   * @return player's new locale
  */
  getNewLocale(): string;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
/**
 * Triggered when a player stops spectating an entity in spectator mode.
*/
export class PlayerStopSpectatingEntityEvent extends PlayerEvent {
  constructor(player: Player, spectatorTarget: Entity);
  /**
   * Gets the entity that the player is spectating
   *
   * @return The entity the player is currently spectating (before they will stop).
  */
  getSpectatorTarget(): Entity;
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
export interface PlayerStopSpectatingEntityEvent extends PlayerEvent, Cancellable {}
/**
 * Called when a player clicks a recipe in the recipe book
*/
export class PlayerRecipeBookClickEvent extends PlayerEvent {
  constructor(player: Player, recipe: NamespacedKey, makeAll: boolean);
  /**
   * Gets the namespaced key of the recipe that was clicked by the player
   *
   * @return The namespaced key of the recipe
  */
  getRecipe(): NamespacedKey;
  /**
   * Changes what recipe is requested. This sets the requested recipe to the recipe with the given key
   *
   * @param recipe The key of the recipe that should be requested
  */
  setRecipe(recipe: NamespacedKey);
  /**
   * Gets a boolean which indicates whether or not the player requested to make the maximum amount of results. This is
   * true if shift is pressed while the recipe is clicked in the recipe book
   *
   * @return `true` if shift is pressed while the recipe is clicked
  */
  isMakeAll(): boolean;
  /**
   * Sets whether or not the maximum amount of results should be made. If this is true, the request is handled as if
   * the player had pressed shift while clicking on the recipe
   *
   * @param makeAll `true` if the request should attempt to make the maximum amount of results
  */
  setMakeAll(makeAll: boolean): void;
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
export interface PlayerRecipeBookClickEvent extends PlayerEvent, Cancellable {}
/**
 * Fired when a player is attempting to pick up an experience orb
*/
export class PlayerPickupExperienceEvent extends PlayerEvent {
  constructor(player: Player, experienceOrb: ExperienceOrb);
  /**
   * @return Returns the Orb that the player is picking up
  */
  getExperienceOrb(): ExperienceOrb;
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
   * If true, Cancels picking up the experience orb, leaving it in the world
   * @param cancel true if you wish to cancel this event
  */
  setCancelled(cancel: boolean): void;
}
export interface PlayerPickupExperienceEvent extends PlayerEvent, Cancellable {}
/**
 * Called when a player is granted a criteria in an advancement.
*/
export class PlayerAdvancementCriterionGrantEvent extends PlayerEvent {
  constructor(who: Player, advancement: Advancement, criterion: string);
  /**
   * Get the advancement which has been affected.
   *
   * @return affected advancement
  */
  getAdvancement(): Advancement;
  /**
   * Get the criterion which has been granted.
   *
   * @return granted criterion
  */
  getCriterion(): string;
  isCancelled(): boolean;
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerAdvancementCriterionGrantEvent extends PlayerEvent, Cancellable {}
/**
 * Called when a player shoots a projectile
*/
export class PlayerLaunchProjectileEvent extends PlayerEvent {
  constructor(shooter: Player, itemStack: ItemStack, projectile: Projectile);
  /**
   * Gets the projectile which will be launched by this event
   *
   * @return the launched projectile
  */
  getProjectile(): Projectile;
  /**
   * Get the ItemStack used to fire the projectile
   *
   * @return The ItemStack used
  */
  getItemStack(): ItemStack;
  /**
   * Get whether to consume the ItemStack or not
   *
   * @return True to consume
  */
  shouldConsume(): boolean;
  /**
   * Set whether to consume the ItemStack or not
   *
   * @param consumeItem True to consume
  */
  setShouldConsume(consumeItem: boolean): void;
  isCancelled(): boolean;
  setCancelled(cancel: boolean): void;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface PlayerLaunchProjectileEvent extends PlayerEvent, Cancellable {}
/**
 * Called when the player themselves change their armor items
 * 
 * Not currently called for environmental factors though it MAY BE IN THE FUTURE
*/
export class PlayerArmorChangeEvent extends PlayerEvent {
  constructor(player: Player, slotType: SlotType, oldItem: ItemStack | null, newItem: ItemStack | null);
  /**
   * Gets the type of slot being altered.
   *
   * @return type of slot being altered
  */
  getSlotType(): SlotType;
  /**
   * Gets the existing item that's being replaced
   *
   * @return old item
  */
  getOldItem(): ItemStack | null;
  /**
   * Gets the new item that's replacing the old
   *
   * @return new item
  */
  getNewItem(): ItemStack | null;
  toString(): string;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}

}
declare module 'com.destroystokyo.paper.util' {
import { Component } from 'net.kyori.adventure.text';
import { Throwable } from 'java.lang';
export class SneakyThrow {
  static sneaky(exception: Throwable): void;
}
export class VersionFetcher {
  /**
   * Amount of time to cache results for in milliseconds
   * 
   * Negative values will never cache.
   *
   * @return cache time
  */
  getCacheTime(): number;
  /**
   * Gets the version message to cache and show to command senders.
   *
   * NOTE: This is run in a new thread separate from that of the command processing thread
   *
   * @param serverVersion the current version of the server (will match {@link Bukkit#getVersion()})
   * @return the message to show when requesting a version
  */
  getVersionMessage(serverVersion: string): Component;
}

}
declare module 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent' {
import { Set } from 'java.util';
import { Enum } from 'java.lang';
import { Material } from 'org.bukkit';
export class SlotType extends Enum<SlotType> {
  static readonly HEAD: SlotType;
  static readonly CHEST: SlotType;
  static readonly LEGS: SlotType;
  static readonly FEET: SlotType;
  static valueOf(name: string): SlotType;
  static values(): SlotType[];
  /**
   * Gets an immutable set of all allowed material types that can be placed in an
   * armor slot.
   *
   * @return immutable set of material types
  */
  getTypes(): Set<Material>;
  /**
   * Gets the type of slot via the specified material
   *
   * @param material material to get slot by
   * @return slot type the material will go in, or null if it won't
  */
  static getByMaterial(material: Material): SlotType | null;
  /**
   * Gets whether or not this material can be equipped to a slot
   *
   * @param material material to check
   * @return whether or not this material can be equipped
  */
  static isEquipable(material: Material): boolean;
}

}
declare module 'com.destroystokyo.paper.network' {
import { InetSocketAddress } from 'java.net';
/**
 * Represents a client connected to the server.
*/
export class NetworkClient {
  /**
   * Returns the socket address of the client.
   *
   * @return The client's socket address
  */
  getAddress(): InetSocketAddress;
  /**
   * Returns the protocol version of the client.
   *
   * @return The client's protocol version, or `-1` if unknown
   * @see List of protocol
   *     version numbers
  */
  getProtocolVersion(): number;
  /**
   * Returns the virtual host the client is connected to.
   *
   * The virtual host refers to the hostname/port the client used to
   * connect to the server.
   *
   * @return The client's virtual host, or `null` if unknown
  */
  getVirtualHost(): InetSocketAddress | null;
}
/**
 * Represents a client requesting the current status from the server (e.g. from
 * the server list).
 *
 * @see PaperServerListPingEvent
*/
export class StatusClient extends NetworkClient {
  /**
   * Returns whether the client is using an older version that doesn't
   * support all of the features in {@link PaperServerListPingEvent}.
   *
   * For Vanilla, this returns `true` for all clients older than 1.7.
   *
   * @return `true` if the client is using legacy ping
  */
  isLegacy(): boolean;
}

}
declare module 'com.destroystokyo.paper.block' {
import { BlockFace, Block } from 'org.bukkit.block';
import { Sound } from 'org.bukkit';
/**
 * Represents information about a targeted block
*/
export class TargetBlockInfo {
  constructor(block: Block, blockFace: BlockFace);
  /**
   * Get the block that is targeted
   *
   * @return Targeted block
  */
  getBlock(): Block;
  /**
   * Get the targeted BlockFace
   *
   * @return Targeted blockface
  */
  getBlockFace(): BlockFace;
  /**
   * Get the relative Block to the targeted block on the side it is targeted at
   *
   * @return Block relative to targeted block
  */
  getRelativeBlock(): Block;
}
/**
 * Represents the sounds that a {@link Block} makes in certain situations
 * 
 * The sound group includes break, step, place, hit, and fall sounds.
 * @deprecated use {@link org.bukkit.SoundGroup}
*/
export class BlockSoundGroup {
  /**
   * Gets the sound that plays when breaking this block
   *
   * @return The break sound
   * @deprecated use {@link org.bukkit.SoundGroup#getBreakSound()}
  */
  getBreakSound(): Sound;
  /**
   * Gets the sound that plays when stepping on this block
   *
   * @return The step sound
   * @deprecated use {@link org.bukkit.SoundGroup#getStepSound()}
  */
  getStepSound(): Sound;
  /**
   * Gets the sound that plays when placing this block
   *
   * @return The place sound
   * @deprecated use {@link org.bukkit.SoundGroup#getPlaceSound()}
  */
  getPlaceSound(): Sound;
  /**
   * Gets the sound that plays when hitting this block
   *
   * @return The hit sound
   * @deprecated use {@link org.bukkit.SoundGroup#getHitSound()}
  */
  getHitSound(): Sound;
  /**
   * Gets the sound that plays when this block falls
   *
   * @return The fall sound
   * @deprecated use {@link org.bukkit.SoundGroup#getFallSound()}
  */
  getFallSound(): Sound;
}

}
declare module 'com.destroystokyo.paper.entity.villager' {
import { Map } from 'java.util';
import { Enum } from 'java.lang';
/**
 * A type of reputation gained with a {@link org.bukkit.entity.Villager Villager}.
 * 
 * All types but {@link #MAJOR_POSITIVE} are shared to other villagers.
*/
export class ReputationType extends Enum<ReputationType> {
  /**
   * A gossip with a majorly negative effect. This is only gained through killing a nearby
   * villager.
  */
  static readonly MAJOR_NEGATIVE: ReputationType;
  /**
   * A gossip with a minor negative effect. This is only gained through damaging a villager.
  */
  static readonly MINOR_NEGATIVE: ReputationType;
  /**
   * A gossip with a minor positive effect. This is only gained through curing a zombie
   * villager.
  */
  static readonly MINOR_POSITIVE: ReputationType;
  /**
   * A gossip with a major positive effect. This is only gained through curing a zombie
   * villager.
  */
  static readonly MAJOR_POSITIVE: ReputationType;
  /**
   * A gossip with a minor positive effect. This is only gained through trading with a villager.
  */
  static readonly TRADING: ReputationType;
  static valueOf(name: string): ReputationType;
  static values(): ReputationType[];
}
/**
 * A reputation score for a player on a villager.
*/
export class Reputation {
  constructor();
  constructor(reputation: Map<ReputationType, number>);
  /**
   * Gets the reputation value for a specific {@link ReputationType}.
   *
   * @param type The {@link ReputationType type} of reputation to get.
   * @return The value of the {@link ReputationType type}.
  */
  getReputation(type: ReputationType): number;
  /**
   * Sets the reputation value for a specific {@link ReputationType}.
   *
   * @param type The {@link ReputationType type} of reputation to set.
   * @param value The value of the {@link ReputationType type}.
  */
  setReputation(type: ReputationType, value: number): void;
}

}
declare module 'com.destroystokyo.paper.event.player.PlayerSetSpawnEvent' {
import { Enum } from 'java.lang';
export class Cause extends Enum<Cause> {
  /**
   * When a player interacts successfully with a bed.
  */
  static readonly BED: Cause;
  /**
   * When a player interacts successfully with a respawn anchor.
  */
  static readonly RESPAWN_ANCHOR: Cause;
  /**
   * When a player respawns.
  */
  static readonly PLAYER_RESPAWN: Cause;
  /**
   * When the `/spawnpoint` command is used on a player.
  */
  static readonly COMMAND: Cause;
  /**
   * When a plugin uses {@link Player#setBedSpawnLocation(Location)} or
   * {@link Player#setBedSpawnLocation(Location, boolean)}.
  */
  static readonly PLUGIN: Cause;
  /**
   * Fallback cause.
  */
  static readonly UNKNOWN: Cause;
  static valueOf(name: string): Cause;
  static values(): Cause[];
}

}
declare module 'com.destroystokyo.paper.entity' {
import { PathResult } from 'com.destroystokyo.paper.entity.Pathfinder';
import { Vector } from 'org.bukkit.util';
import { Location } from 'org.bukkit';
import { LivingEntity, Mob, Entity } from 'org.bukkit.entity';
export class RangedEntity extends Mob {
  /**
   * Attack the specified entity using a ranged attack.
   *
   * @param target the entity to target
   * @param charge How "charged" the attack is (how far back the bow was pulled for Bow attacks).
   *               This should be a value between 0 and 1, represented as targetDistance/maxDistance.
  */
  rangedAttack(target: LivingEntity, charge: number): void;
  /**
   * Sets that the Entity is "charging" up an attack, by raising its hands
   *
   * @param raiseHands Whether the entities hands are raised to charge attack
  */
  setChargingAttack(raiseHands: boolean): void;
  /**
   * Alias to {@link LivingEntity#isHandRaised()}, if the entity is charging an attack
   * @return If entities hands are raised
  */
  isChargingAttack(): boolean;
}
/**
 * Handles pathfinding operations for an Entity
*/
export class Pathfinder {
  /**
   *
   * @return The entity that is controlled by this pathfinder
  */
  getEntity(): Mob;
  /**
   * Instructs the Entity to stop trying to navigate to its current desired location
  */
  stopPathfinding(): void;
  /**
   * If the entity is currently trying to navigate to a destination, this will return true
   * @return true if the entity is navigating to a destination
  */
  hasPath(): boolean;
  /**
   * @return The location the entity is trying to navigate to, or null if there is no destination
  */
  getCurrentPath(): PathResult | null;
  /**
   * Calculates a destination for the Entity to navigate to, but does not set it
   * as the current target. Useful for calculating what would happen before setting it.
   * @param loc Location to navigate to
   * @return The closest Location the Entity can get to for this navigation, or null if no path could be calculated
  */
  findPath(loc: Location): PathResult | null;
  /**
   * Calculates a destination for the Entity to navigate to to reach the target entity,
   * but does not set it as the current target.
   * Useful for calculating what would happen before setting it.
   *
   * The behavior of this PathResult is subject to the games pathfinding rules, and may
   * result in the pathfinding automatically updating to follow the target Entity.
   *
   * However, this behavior is not guaranteed, and is subject to the games behavior.
   *
   * @param target the Entity to navigate to
   * @return The closest Location the Entity can get to for this navigation, or null if no path could be calculated
  */
  findPath(target: LivingEntity): PathResult | null;
  /**
   * Calculates a destination for the Entity to navigate to, and sets it with default speed
   * as the current target.
   * @param loc Location to navigate to
   * @return If the pathfinding was successfully started
  */
  moveTo(loc: Location): boolean;
  /**
   * Calculates a destination for the Entity to navigate to, with desired speed
   * as the current target.
   * @param loc Location to navigate to
   * @param speed Speed multiplier to navigate at, where 1 is 'normal'
   * @return If the pathfinding was successfully started
  */
  moveTo(loc: Location, speed: number): boolean;
  /**
   * Calculates a destination for the Entity to navigate to to reach the target entity,
   * and sets it with default speed.
   *
   * The behavior of this PathResult is subject to the games pathfinding rules, and may
   * result in the pathfinding automatically updating to follow the target Entity.
   *
   * However, this behavior is not guaranteed, and is subject to the games behavior.
   *
   * @param target the Entity to navigate to
   * @return If the pathfinding was successfully started
  */
  moveTo(target: LivingEntity): boolean;
  /**
   * Calculates a destination for the Entity to navigate to to reach the target entity,
   * and sets it with specified speed.
   *
   * The behavior of this PathResult is subject to the games pathfinding rules, and may
   * result in the pathfinding automatically updating to follow the target Entity.
   *
   * However, this behavior is not guaranteed, and is subject to the games behavior.
   *
   * @param target the Entity to navigate to
   * @param speed Speed multiplier to navigate at, where 1 is 'normal'
   * @return If the pathfinding was successfully started
  */
  moveTo(target: LivingEntity, speed: number): boolean;
  /**
   * Takes the result of a previous pathfinding calculation and sets it
   * as the active pathfinding with default speed.
   *
   * @param path The Path to start following
   * @return If the pathfinding was successfully started
  */
  moveTo(path: PathResult): boolean;
  /**
   * Takes the result of a previous pathfinding calculation and sets it
   * as the active pathfinding,
   *
   * @param path The Path to start following
   * @param speed Speed multiplier to navigate at, where 1 is 'normal'
   * @return If the pathfinding was successfully started
  */
  moveTo(path: PathResult, speed: number): boolean;
  /**
   * Checks if this pathfinder allows passing through closed doors.
   *
   * @return if this pathfinder allows passing through closed doors
  */
  canOpenDoors(): boolean;
  /**
   * Allows this pathfinder to pass through closed doors, or not
   *
   * @param canOpenDoors if the mob can pass through closed doors, or not
  */
  setCanOpenDoors(canOpenDoors: boolean): void;
  /**
   * Checks if this pathfinder allows passing through open doors.
   *
   * @return if this pathfinder allows passing through open doors
  */
  canPassDoors(): boolean;
  /**
   * Allows this pathfinder to pass through open doors, or not
   *
   * @param canPassDoors if the mob can pass through open doors, or not
  */
  setCanPassDoors(canPassDoors: boolean): void;
  /**
   * Checks if this pathfinder assumes that the mob can float
   *
   * @return if this pathfinder assumes that the mob can float
  */
  canFloat(): boolean;
  /**
   * Makes this pathfinder assume that the mob can float, or not
   *
   * @param canFloat if the mob can float, or not
  */
  setCanFloat(canFloat: boolean): void;
}
/**
 * Represents information about a targeted entity
*/
export class TargetEntityInfo {
  constructor(entity: Entity, hitVec: Vector);
  /**
   * Get the entity that is targeted
   *
   * @return Targeted entity
  */
  getEntity(): Entity;
  /**
   * Get the position the entity is targeted at
   *
   * @return Targeted position
  */
  getHitVector(): Vector;
}

}
declare module 'com.destroystokyo.paper.event.executor' {
import { Method } from 'java.lang.reflect';
import { Class } from 'java.lang';
import { Listener, Event } from 'org.bukkit.event';
import { EventExecutor } from 'org.bukkit.plugin';
import { MethodHandle } from 'java.lang.invoke';
export class StaticMethodHandleEventExecutor extends EventExecutor {
  constructor(eventClass: Class<Event>, m: Method);
  execute(listener: Listener, event: Event): void;
}
export class MethodHandleEventExecutor extends EventExecutor {
  constructor(eventClass: Class<Event>, handle: MethodHandle);
  constructor(eventClass: Class<Event>, m: Method);
  execute(listener: Listener, event: Event): void;
}

}
