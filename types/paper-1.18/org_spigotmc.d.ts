declare module 'org.spigotmc.event.entity' {
import { EntityEvent } from 'org.bukkit.event.entity';
import { HandlerList, Cancellable } from 'org.bukkit.event';
import { Entity } from 'org.bukkit.entity';
/**
 * Called when an entity stops riding another entity.
*/
export class EntityDismountEvent extends EntityEvent {
  constructor(what: Entity, dismounted: Entity);
  constructor(what: Entity, dismounted: Entity, isCancellable: boolean);
  getDismounted(): Entity;
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
  isCancellable(): boolean;
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}
export interface EntityDismountEvent extends EntityEvent, Cancellable {}
/**
 * Called when an entity attempts to ride another entity.
*/
export class EntityMountEvent extends EntityEvent {
  constructor(what: Entity, mount: Entity);
  getMount(): Entity;
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
export interface EntityMountEvent extends EntityEvent, Cancellable {}

}
declare module 'org.spigotmc' {
import { Timing } from 'co.aikar.timings';
/**
 * This is here for legacy purposes incase any plugin used it.
 *
 * If you use this, migrate ASAP as this will be removed in the future!
 *
 * @deprecated
 * @see co.aikar.timings.Timings#of
*/
export class CustomTimingsHandler {
  constructor(name: string);
  startTiming(): void;
  stopTiming(): void;
}

}
declare module 'org.spigotmc.event.player' {
import { PlayerEvent } from 'org.bukkit.event.player';
import { HandlerList } from 'org.bukkit.event';
import { Player } from 'org.bukkit.entity';
import { Location } from 'org.bukkit';
/**
 * Called when player is about to spawn in a world after joining the server.
*/
export class PlayerSpawnLocationEvent extends PlayerEvent {
  constructor(who: Player, spawnLocation: Location);
  /**
   * Gets player's spawn location.
   * If the player {@link Player#hasPlayedBefore()}, it's going to default to the location inside player.dat file.
   * For new players, the default spawn location is spawn of the main Bukkit world.
   *
   * @return the spawn location
  */
  getSpawnLocation(): Location;
  /**
   * Sets player's spawn location.
   *
   * @param location the spawn location
  */
  setSpawnLocation(spawnLocation: Location);
  getHandlers(): HandlerList;
  static getHandlerList(): HandlerList;
}

}
