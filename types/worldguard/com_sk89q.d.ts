declare module 'com.sk89q.worldguard.protection.regions' {
import { Migration } from 'com.sk89q.worldguard.protection.managers.migration';
import { Set, Collection, List, Map } from 'java.util';
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { World } from 'com.sk89q.worldedit.world';
import { ConcurrentMap } from 'java.util.concurrent';
import { RegionContainerImpl, RegionManager } from 'com.sk89q.worldguard.protection.managers';
import { QueryOption } from 'com.sk89q.worldguard.protection.regions.RegionQuery';
import { MapFlag, StateFlag, Flag } from 'com.sk89q.worldguard.protection.flags';
import { CacheKey } from 'com.sk89q.worldguard.protection.regions.QueryCache';
import { DefaultDomain } from 'com.sk89q.worldguard.domains';
import { ApplicableRegionSet } from 'com.sk89q.worldguard.protection';
import { Enum, Comparable } from 'java.lang';
import { Pattern } from 'java.util.regex';
import { LocalPlayer } from 'com.sk89q.worldguard';
import { ConfigurationManager } from 'com.sk89q.worldguard.config';
import { Location } from 'com.sk89q.worldedit.util';
import { MBRConverter } from 'org.khelekore.prtree';
import { State } from 'com.sk89q.worldguard.protection.flags.StateFlag';
import { RegionAssociable } from 'com.sk89q.worldguard.protection.association';
import { RegionDriver } from 'com.sk89q.worldguard.protection.managers.storage';
import { ChangeTracked } from 'com.sk89q.worldguard.util';
/**
 * Represents a region that can be indexed and have spatial queries performed
 * against it.
 *
 * Instances can be modified and access from several threads at a time.
 *
 * Note: this class has a natural ordering that is inconsistent with equals.
 * Regions with identical ids (and also the same priority) may exist in different managers (or no manager at all),
 * so care should be taken when comparing regions that have not been obtained from a single manager.
*/
export class ProtectedRegion extends ChangeTracked {
  static readonly GLOBAL_REGION: string;
  /**
   * Gets the name of this region
   *
   * @return the name
  */
  getId(): string;
  /**
   * Return whether this type of region encompasses physical area.
   *
   * @return Whether physical area is encompassed
  */
  isPhysicalArea(): boolean;
  /**
   * Get a vector containing the smallest X, Y, and Z components for the
   * corner of the axis-aligned bounding box that contains this region.
   *
   * @return the minimum point
  */
  getMinimumPoint(): BlockVector3;
  /**
   * Get a vector containing the highest X, Y, and Z components for the
   * corner of the axis-aligned bounding box that contains this region.
   *
   * @return the maximum point
  */
  getMaximumPoint(): BlockVector3;
  /**
   * Get the priority of the region, where higher numbers indicate a higher
   * priority.
   *
   * @return the priority
  */
  getPriority(): number;
  /**
   * Set the priority of the region, where higher numbers indicate a higher
   * priority.
   *
   * @param priority the priority to set
  */
  setPriority(priority: number);
  /**
   * Get the parent of the region, if one exists.
   *
   * @return the parent, or `null`
  */
  getParent(): ProtectedRegion | null;
  /**
   * Set the parent of this region. This checks to make sure that it will
   * not result in circular inheritance.
   *
   * @param parent the new parent
   * @throws CircularInheritanceException when circular inheritance is detected
  */
  setParent(parent: ProtectedRegion | null);
  /**
   * Clear the parent (set the parent to `null`).
  */
  clearParent(): void;
  /**
   * Get the domain that contains the owners of this region.
   *
   * @return the domain
  */
  getOwners(): DefaultDomain;
  /**
   * Set the owner domain.
   *
   * @param owners the new domain
  */
  setOwners(owners: DefaultDomain);
  /**
   * Get the domain that contains the members of this region, which does
   * not automatically include the owners.
   *
   * @return the members
  */
  getMembers(): DefaultDomain;
  /**
   * Set the members domain.
   *
   * @param members the new domain
  */
  setMembers(members: DefaultDomain);
  /**
   * Checks whether a region has members or owners.
   *
   * @return whether there are members or owners
  */
  hasMembersOrOwners(): boolean;
  /**
   * Checks whether a player is an owner of region or any of its parents.
   *
   * @param player player to check
   * @return whether an owner
  */
  isOwner(player: LocalPlayer): boolean;
  /**
   * Checks whether a player is an owner of region or any of its parents.
   *
   * @param playerName player name to check
   * @return whether an owner
   * @deprecated Names are deprecated, this will not return owners added by UUID (LocalPlayer)
  */
  isOwner(playerName: string): boolean;
  /**
   * Checks whether a player is a member OR OWNER of the region
   * or any of its parents.
   *
   * @param player player to check
   * @return whether an owner or member
  */
  isMember(player: LocalPlayer): boolean;
  /**
   * Checks whether a player is a member OR OWNER of the region
   * or any of its parents.
   *
   * @param playerName player name to check
   * @return whether an owner or member
   * @deprecated Names are deprecated, this will not return players added by UUID (LocalPlayer)
  */
  isMember(playerName: string): boolean;
  /**
   * Checks whether a player is a member of the region or any of its parents.
   *
   * @param player player to check
   * @return whether an member
  */
  isMemberOnly(player: LocalPlayer): boolean;
  /**
   * Get a flag's value.
   *
   * @param flag the flag to check
   * @return the value or null if isn't defined
   * @param  the flag type
   * @param  the type of the flag's value
  */
  getFlag<T, V>(flag: T): V | null;
  /**
   * Set a flag's value.
   *
   * @param flag the flag to check
   * @param val the value to set
   * @param  the flag type
   * @param  the type of the flag's value
  */
  setFlag<T, V>(flag: T, val: V | null): void;
  /**
   * Get the map of flags.
   *
   * @return the map of flags currently used for this region
  */
  getFlags(): Map<Flag<any>, any>;
  /**
   * Set the map of flags.
   *
   * A copy of the map will be used.
   *
   * @param flags the flags to set
  */
  setFlags(flags: Map<Flag<any>, any>);
  /**
   * Copy attributes from another region.
   *
   * @param other the other region
  */
  copyFrom(other: ProtectedRegion): void;
  /**
   * Get points of the region projected onto the X-Z plane.
   *
   * @return the points
  */
  getPoints(): BlockVector2[];
  /**
   * Get the number of blocks in this region.
   *
   * @return the volume of this region in blocks
  */
  volume(): number;
  /**
   * Check to see if a point is inside this region.
   *
   * @param pt The point to check
   * @return Whether `pt` is in this region
  */
  contains(pt: BlockVector3): boolean;
  /**
   * Check to see if a position is contained within this region.
   *
   * @param position the position to check
   * @return whether `position` is in this region
  */
  contains(position: BlockVector2): boolean;
  /**
   * Check to see if a point is inside this region.
   *
   * @param x the x coordinate to check
   * @param y the y coordinate to check
   * @param z the z coordinate to check
   * @return whether this region contains the point
  */
  contains(x: number, y: number, z: number): boolean;
  /**
   * Check to see if any of the points are inside this region projected
   * onto the X-Z plane.
   *
   * @param positions a list of positions
   * @return true if contained
  */
  containsAny(positions: BlockVector2[]): boolean;
  /**
   * Get the type of region.
   *
   * @return the type
  */
  getType(): RegionType;
  /**
   * Return a list of regions from the given list of regions that intersect
   * with this region.
   *
   * @param regions a list of regions to source from
   * @return the elements of `regions` that intersect with this region
  */
  getIntersectingRegions(regions: Collection<ProtectedRegion>): ProtectedRegion[];
  /**
   * @return true if this region should only be kept in memory and not be saved
  */
  isTransient(): boolean;
  /**
   * @return true if this region is not transient and changes have been made.
  */
  isDirty(): boolean;
  /**
   * Set whether changes have been made.
   *
   * @param dirty a new dirty state
  */
  setDirty(dirty: boolean): void;
  compareTo(other: ProtectedRegion): number;
  hashCode(): number;
  toString(): string;
  /**
   * Checks to see if the given ID is a valid ID.
   *
   * @param id the id to check
   * @return whether the region id given is valid
  */
  static isValidId(id: string): boolean;
}
export interface ProtectedRegion extends ChangeTracked, Comparable<ProtectedRegion> {}
/**
 * An enum of supported region types.
*/
export class RegionType extends Enum<RegionType> {
  static readonly CUBOID: RegionType;
  static readonly POLYGON: RegionType;
  static readonly GLOBAL: RegionType;
  static valueOf(name: string): RegionType;
  static values(): RegionType[];
  /**
   * Get the name of the region.
   *
   * @return the name of the region
  */
  getName(): string;
}
export class ProtectedRegionMBRConverter extends MBRConverter<ProtectedRegion> {
  getDimensions(): number;
  getMax(dimension: number, region: ProtectedRegion): number;
  getMin(dimension: number, region: ProtectedRegion): number;
}
/**
 * A special region that is not quite "anywhere" (its volume is 0, it
 * contains no positions, and it does not intersect with any other region).
 *
 * Global regions, however, are used to specify a region with flags that
 * are applied with the lowest priority.
*/
export class GlobalProtectedRegion extends ProtectedRegion {
  /**
   * Create a new instance.
   * Equivalent to {@link #GlobalProtectedRegion(String, boolean) GlobalProtectedRegion(id, false)}
   * transientRegion will be set to false, and this region can be saved.
   *
   * @param id the ID
  */
  constructor(id: string);
  /**
   * Create a new instance.
   *
   * @param id the ID
   * @param transientRegion whether this region should only be kept in memory and not be saved
  */
  constructor(id: string, transientRegion: boolean);
  isPhysicalArea(): boolean;
  getPoints(): BlockVector2[];
  volume(): number;
  contains(pt: BlockVector3): boolean;
  getType(): RegionType;
  getIntersectingRegions(regions: Collection<ProtectedRegion>): ProtectedRegion[];
  /**
   * Check to see if a position is contained within this region.
   *
   * @param position the position to check
   * @return whether `position` is in this region
  */
  contains(position: BlockVector2): boolean;
  /**
   * Check to see if a point is inside this region.
   *
   * @param x the x coordinate to check
   * @param y the y coordinate to check
   * @param z the z coordinate to check
   * @return whether this region contains the point
  */
  contains(x: number, y: number, z: number): boolean;
}
export class ProtectedPolygonalRegion extends ProtectedRegion {
  /**
   * Construct a new instance of this polygonal region.
   * Equivalent to {@link #ProtectedPolygonalRegion(String, boolean, List, int, int)
   * ProtectedPolygonalRegion(id, false, points, minY, maxY)}
   * transientRegion will be set to false, and this region can be saved.
   *
   * @param id the region id
   * @param points a {@link List} of points that this region should contain
   * @param minY the minimum y coordinate
   * @param maxY the maximum y coordinate
  */
  constructor(id: string, points: BlockVector2[], minY: number, maxY: number);
  /**
   * Construct a new instance of this polygonal region.
   *
   * @param id the region id
   * @param transientRegion whether this region should only be kept in memory and not be saved
   * @param points a {@link List} of points that this region should contain
   * @param minY the minimum y coordinate
   * @param maxY the maximum y coordinate
  */
  constructor(id: string, transientRegion: boolean, points: BlockVector2[], minY: number, maxY: number);
  isPhysicalArea(): boolean;
  getPoints(): BlockVector2[];
  contains(position: BlockVector3): boolean;
  getType(): RegionType;
  volume(): number;
  /**
   * Check to see if a position is contained within this region.
   *
   * @param position the position to check
   * @return whether `position` is in this region
  */
  contains(position: BlockVector2): boolean;
  /**
   * Check to see if a point is inside this region.
   *
   * @param x the x coordinate to check
   * @param y the y coordinate to check
   * @param z the z coordinate to check
   * @return whether this region contains the point
  */
  contains(x: number, y: number, z: number): boolean;
}
/**
 * Represents a cuboid region that can be protected.
 *
 * @author sk89q
*/
export class ProtectedCuboidRegion extends ProtectedRegion {
  /**
   * Construct a new instance of this cuboid region.
   * Equivalent to {@link #ProtectedCuboidRegion(String, boolean, BlockVector3, BlockVector3)
   * ProtectedCuboidRegion(id, false, pt1, pt2)}
   * transientRegion will be set to false, and this region can be saved.
   *
   * @param id the region id
   * @param pt1 the first point of this region
   * @param pt2 the second point of this region
  */
  constructor(id: string, pt1: BlockVector3, pt2: BlockVector3);
  /**
   * Construct a new instance of this cuboid region.
   *
   * @param id the region id
   * @param transientRegion whether this region should only be kept in memory and not be saved
   * @param pt1 the first point of this region
   * @param pt2 the second point of this region
  */
  constructor(id: string, transientRegion: boolean, pt1: BlockVector3, pt2: BlockVector3);
  /**
   * Set the lower point of the cuboid.
   *
   * @param position the point to set as the minimum point
   * @deprecated ProtectedRegion bounds should never be mutated. Regions must be redefined to move them.
   *              This method will be removed in a future release.
  */
  setMinimumPoint(minimumPoint: BlockVector3);
  /**
   * Set the upper point of the cuboid.
   *
   * @param position the point to set as the maximum point
   * @deprecated ProtectedRegion bounds should never be mutated. Regions must be redefined to move them.
   *              This method will be removed in a future release.
  */
  setMaximumPoint(maximumPoint: BlockVector3);
  isPhysicalArea(): boolean;
  getPoints(): BlockVector2[];
  contains(pt: BlockVector3): boolean;
  getType(): RegionType;
  volume(): number;
  /**
   * Get a vector containing the smallest X, Y, and Z components for the
   * corner of the axis-aligned bounding box that contains this region.
   *
   * @return the minimum point
  */
  getMinimumPoint(): BlockVector3;
  /**
   * Get a vector containing the highest X, Y, and Z components for the
   * corner of the axis-aligned bounding box that contains this region.
   *
   * @return the maximum point
  */
  getMaximumPoint(): BlockVector3;
  /**
   * Check to see if a position is contained within this region.
   *
   * @param position the position to check
   * @return whether `position` is in this region
  */
  contains(position: BlockVector2): boolean;
  /**
   * Check to see if a point is inside this region.
   *
   * @param x the x coordinate to check
   * @param y the y coordinate to check
   * @param z the z coordinate to check
   * @return whether this region contains the point
  */
  contains(x: number, y: number, z: number): boolean;
}
/**
 * A region container creates {@link RegionManager}s for loaded worlds, which
 * allows access to the region data of a world. Generally, only data is
 * loaded for worlds that are loaded in the server.
 *
 * This class is thread safe and its contents can be accessed from
 * multiple concurrent threads.
*/
export class RegionContainer {
  /**
   * Initialize the region container.
  */
  initialize(): void;
  /**
   * Save data and unload.
  */
  unload(): void;
  /**
   * Get the region store driver.
   *
   * @return the driver
  */
  getDriver(): RegionDriver;
  /**
   * Reload the region container.
   *
   * This method may block until the data for all loaded worlds has been
   * unloaded and new data has been loaded.
  */
  reload(): void;
  /**
   * Get the region manager for a world if one exists.
   *
   * If you wish to make queries and performance is more important
   * than accuracy, use {@link #createQuery()} instead.
   *
   * This method may return `null` if region data for the given
   * world has not been loaded, has failed to load, or support for regions
   * has been disabled.
   *
   * @param world the world
   * @return a region manager, or `null` if one is not available
  */
  get(world: World): RegionManager | null;
  /**
   * Get an immutable list of loaded {@link RegionManager}s.
   *
   * @return a list of managers
  */
  getLoaded(): RegionManager[];
  /**
   * Get the a set of region managers that are failing to save.
   *
   * @return a set of region managers
  */
  getSaveFailures(): Set<RegionManager>;
  /**
   * Create a new region query.
   *
   * @return a new query
  */
  createQuery(): RegionQuery;
  /**
   * Execute a migration and block any loading of region data during
   * the migration.
   *
   * @param migration the migration
   * @throws MigrationException thrown by the migration on error
  */
  migrate(migration: Migration): void;
  /**
   * Unload the region data for a world.
   *
   * @param world a world
  */
  unload(world: World): void;
}
/**
 * This object allows easy spatial queries involving region data for the
 * purpose of implementing protection / region flag checks.
 *
 * Results may be cached for brief amounts of time. If you want to get
 * data for the purposes of changing it, use of this class is not recommended.
 * Some of the return values of the methods may be simulated to reduce
 * boilerplate code related to implementing protection, meaning that false
 * data is returned.
*/
export class RegionQuery {
  /**
   * Create a new instance.
   *
   * @param cache the query cache
  */
  constructor(cache: QueryCache);
  /**
   * Query for regions containing the given location.
   *
   * {@link QueryOption#COMPUTE_PARENTS} is used.
   *
   * An instance of {@link ApplicableRegionSet} will always be returned,
   * even if regions are disabled or region data failed to load. An
   * appropriate "virtual" set will be returned in such a case (for example,
   * if regions are disabled, the returned set would permit all
   * activities).
   *
   * @param location the location
   * @return a region set
  */
  getApplicableRegions(location: Location): ApplicableRegionSet;
  /**
   * Query for regions containing the given location.
   *
   * An instance of {@link ApplicableRegionSet} will always be returned,
   * even if regions are disabled or region data failed to load. An
   * appropriate "virtual" set will be returned in such a case (for example,
   * if regions are disabled, the returned set would permit all
   * activities).
   *
   * @param location the location
   * @param option the option
   * @return a region set
  */
  getApplicableRegions(location: Location, option: QueryOption): ApplicableRegionSet;
  /**
   * Returns true if the BUILD flag allows the action in the location, but it
   * can be overridden by a list of other flags. The BUILD flag will not
   * override the other flags, but the other flags can override BUILD. If
   * neither BUILD or any of the flags permit the action, then false will
   * be returned.
   *
   * Use this method when checking flags that are related to build
   * protection. For example, lighting fire in a region should not be
   * permitted unless the player is a member of the region or the
   * LIGHTER flag allows it. However, the LIGHTER flag should be able
   * to allow lighting fires even if BUILD is set to DENY.
   *
   * How this method works (BUILD can be overridden by other flags but
   * not the other way around) is inconsistent, but it's required for
   * legacy reasons.
   *
   * This method does not check the region bypass permission. That must
   * be done by the calling code.
   *
   * @param location the location
   * @param player an optional player, which would be used to determine the region group to apply
   * @param flag the flag
   * @return true if the result was `ALLOW`
   * @see RegionResultSet#queryValue(RegionAssociable, Flag)
  */
  testBuild(location: Location, player: LocalPlayer, ...flag: StateFlag[]): boolean;
  /**
   * Returns true if the BUILD flag allows the action in the location, but it
   * can be overridden by a list of other flags. The BUILD flag will not
   * override the other flags, but the other flags can override BUILD. If
   * neither BUILD or any of the flags permit the action, then false will
   * be returned.
   *
   * Use this method when checking flags that are related to build
   * protection. For example, lighting fire in a region should not be
   * permitted unless the player is a member of the region or the
   * LIGHTER flag allows it. However, the LIGHTER flag should be able
   * to allow lighting fires even if BUILD is set to DENY.
   *
   * How this method works (BUILD can be overridden by other flags but
   * not the other way around) is inconsistent, but it's required for
   * legacy reasons.
   *
   * This method does not check the region bypass permission. That must
   * be done by the calling code.
   *
   * @param location the location
   * @param associable an optional associable
   * @param flag the flag
   * @return true if the result was `ALLOW`
   * @see RegionResultSet#queryValue(RegionAssociable, Flag)
  */
  testBuild(location: Location, associable: RegionAssociable, ...flag: StateFlag[]): boolean;
  /**
   * Returns true if the BUILD flag allows the action in the location, but it
   * can be overridden by a list of other flags. The BUILD flag will not
   * override the other flags, but the other flags can override BUILD. If
   * neither BUILD or any of the flags permit the action, then false will
   * be returned.
   *
   * Use this method when checking flags that are related to build
   * protection. For example, lighting fire in a region should not be
   * permitted unless the player is a member of the region or the
   * LIGHTER flag allows it. However, the LIGHTER flag should be able
   * to allow lighting fires even if BUILD is set to DENY.
   *
   * This method does include parameters for a {@link MapFlag}.
   *
   * How this method works (BUILD can be overridden by other flags but
   * not the other way around) is inconsistent, but it's required for
   * legacy reasons.
   *
   * This method does not check the region bypass permission. That must
   * be done by the calling code.
   *
   * @param location the location
   * @param associable an optional associable
   * @param mapFlag the MapFlag
   * @param key the key for the MapFlag
   * @param fallback the fallback flag for MapFlag
   * @param flag the flags
   * @return true if the result was `ALLOW`
   * @see RegionResultSet#queryValue(RegionAssociable, Flag)
  */
  testBuild<K>(location: Location, associable: RegionAssociable, mapFlag: MapFlag<K, State>, key: K, fallback: StateFlag | null, ...flag: StateFlag[]): boolean;
  /**
   * Test whether the (effective) value for a list of state flags equals
   * `ALLOW`.
   *
   * `player` can be non-null to satisfy region group requirements,
   * otherwise it will be assumed that the caller that is not a member of any
   * regions. (Flags on a region can be changed so that they only apply
   * to certain users.) The player argument is required if the
   * {@link Flags#BUILD} flag is in the list of flags.
   *
   * This method does not check the region bypass permission. That must
   * be done by the calling code.
   *
   * @param location the location
   * @param player an optional player, which would be used to determine the region group to apply
   * @param flag the flag
   * @return true if the result was `ALLOW`
   * @see RegionResultSet#queryValue(RegionAssociable, Flag)
  */
  testState(location: Location, player: LocalPlayer | null, ...flag: StateFlag[]): boolean;
  /**
   * Test whether the (effective) value for a list of state flags equals
   * `ALLOW`.
   *
   * `player` can be non-null to satisfy region group requirements,
   * otherwise it will be assumed that the caller that is not a member of any
   * regions. (Flags on a region can be changed so that they only apply
   * to certain users.) The player argument is required if the
   * {@link Flags#BUILD} flag is in the list of flags.
   *
   * This method does not check the region bypass permission. That must
   * be done by the calling code.
   *
   * @param location the location
   * @param associable an optional associable
   * @param flag the flag
   * @return true if the result was `ALLOW`
   * @see RegionResultSet#queryValue(RegionAssociable, Flag)
  */
  testState(location: Location, associable: RegionAssociable | null, ...flag: StateFlag[]): boolean;
  /**
   * Get the (effective) value for a list of state flags. The rules of
   * states is observed here; that is, `DENY` overrides `ALLOW`,
   * and `ALLOW` overrides `NONE`. One flag may override another.
   *
   * `player` can be non-null to satisfy region group requirements,
   * otherwise it will be assumed that the caller that is not a member of any
   * regions. (Flags on a region can be changed so that they only apply
   * to certain users.) The player argument is required if the
   * {@link Flags#BUILD} flag is in the list of flags.
   *
   * @param location the location
   * @param player an optional player, which would be used to determine the region groups that apply
   * @param flags a list of flags to check
   * @return a state
   * @see RegionResultSet#queryState(RegionAssociable, StateFlag...)
  */
  queryState(location: Location, player: LocalPlayer | null, ...flags: StateFlag[]): State | null;
  /**
   * Get the (effective) value for a list of state flags. The rules of
   * states is observed here; that is, `DENY` overrides `ALLOW`,
   * and `ALLOW` overrides `NONE`. One flag may override another.
   *
   * `player` can be non-null to satisfy region group requirements,
   * otherwise it will be assumed that the caller that is not a member of any
   * regions. (Flags on a region can be changed so that they only apply
   * to certain users.) The player argument is required if the
   * {@link Flags#BUILD} flag is in the list of flags.
   *
   * @param location the location
   * @param associable an optional associable
   * @param flags a list of flags to check
   * @return a state
   * @see RegionResultSet#queryState(RegionAssociable, StateFlag...)
  */
  queryState(location: Location, associable: RegionAssociable | null, ...flags: StateFlag[]): State | null;
  /**
   * Get the effective value for a flag. If there are multiple values
   * (for example, multiple overlapping regions with
   * the same priority may have the same flag set), then the selected
   * (or "winning") value will depend on the flag type.
   *
   * Only some flag types actually have a strategy for picking the
   * "best value." For most types, the actual value that is chosen to be
   * returned is undefined (it could be any value). As of writing, the only
   * type of flag that actually has a strategy for picking a value is the
   * {@link StateFlag}.
   *
   * `player` can be non-null to satisfy region group requirements,
   * otherwise it will be assumed that the caller that is not a member of any
   * regions. (Flags on a region can be changed so that they only apply
   * to certain users.) The player argument is required if the
   * {@link Flags#BUILD} flag is the flag being queried.
   *
   * @param location the location
   * @param player an optional player, which would be used to determine the region group to apply
   * @param flag the flag
   * @return a value, which could be `null`
   * @see RegionResultSet#queryValue(RegionAssociable, Flag)
  */
  queryValue<V>(location: Location, player: LocalPlayer | null, flag: Flag<V>): V | null;
  /**
   * Get the effective value for a flag. If there are multiple values
   * (for example, multiple overlapping regions with
   * the same priority may have the same flag set), then the selected
   * (or "winning") value will depend on the flag type.
   *
   * Only some flag types actually have a strategy for picking the
   * "best value." For most types, the actual value that is chosen to be
   * returned is undefined (it could be any value). As of writing, the only
   * type of flag that actually has a strategy for picking a value is the
   * {@link StateFlag}.
   *
   * `player` can be non-null to satisfy region group requirements,
   * otherwise it will be assumed that the caller that is not a member of any
   * regions. (Flags on a region can be changed so that they only apply
   * to certain users.) The player argument is required if the
   * {@link Flags#BUILD} flag is the flag being queried.
   *
   * @param location the location
   * @param associable an optional associable
   * @param flag the flag
   * @return a value, which could be `null`
   * @see RegionResultSet#queryValue(RegionAssociable, Flag)
  */
  queryValue<V>(location: Location, associable: RegionAssociable | null, flag: Flag<V>): V | null;
  /**
   * Get the effective value for a key in a {@link MapFlag}. If there are multiple values
   * (for example, if there are multiple regions with the same priority
   * but with different farewell messages set, there would be multiple
   * completing values), then the selected (or "winning") value will be undefined.
   *
   * A subject can be provided that is used to determine whether the value
   * of a flag on a particular region should be used. For example, if a
   * flag's region group is set to {@link RegionGroup#MEMBERS} and the given
   * subject is not a member, then the region would be skipped when
   * querying that flag. If `null` is provided for the subject, then
   * only flags that use {@link RegionGroup#ALL},
   * {@link RegionGroup#NON_MEMBERS}, etc. will apply.
   *
   * @param subject an optional subject, which would be used to determine the region group to apply
   * @param flag the flag of type {@link MapFlag}
   * @param key the key for the map flag
   * @return a value, which could be `null`
  */
  queryMapValue<V, K>(location: Location, subject: RegionAssociable | null, flag: MapFlag<K, V>, key: K): V | null;
  /**
   * Get the effective value for a key in a {@link MapFlag}. If there are multiple values
   * (for example, if there are multiple regions with the same priority
   * but with different farewell messages set, there would be multiple
   * completing values), then the selected (or "winning") value will be undefined.
   *
   * A subject can be provided that is used to determine whether the value
   * of a flag on a particular region should be used. For example, if a
   * flag's region group is set to {@link RegionGroup#MEMBERS} and the given
   * subject is not a member, then the region would be skipped when
   * querying that flag. If `null` is provided for the subject, then
   * only flags that use {@link RegionGroup#ALL},
   * {@link RegionGroup#NON_MEMBERS}, etc. will apply.
   *
   * It's possible to provide a fallback flag for the case when the key doesn't
   * exist in the {@link MapFlag}.
   *
   * @param subject an optional subject, which would be used to determine the region group to apply
   * @param flag the flag of type {@link MapFlag}
   * @param key the key for the map flag
   * @param fallback the fallback flag
   * @return a value, which could be `null`
  */
  queryMapValue<V, K>(location: Location, subject: RegionAssociable | null, flag: MapFlag<K, V>, key: K, fallback: Flag<V>): V | null;
  /**
   * Get the effective values for a flag, returning a collection of all
   * values. It is up to the caller to determine which value, if any,
   * from the collection will be used.
   *
   * `player` can be non-null to satisfy region group requirements,
   * otherwise it will be assumed that the caller that is not a member of any
   * regions. (Flags on a region can be changed so that they only apply
   * to certain users.) The player argument is required if the
   * {@link Flags#BUILD} flag is the flag being queried.
   *
   * @param location the location
   * @param player an optional player, which would be used to determine the region group to apply
   * @param flag the flag
   * @return a collection of values
   * @see RegionResultSet#queryAllValues(RegionAssociable, Flag)
  */
  queryAllValues<V>(location: Location, player: LocalPlayer | null, flag: Flag<V>): Collection<V>;
  /**
   * Get the effective values for a flag, returning a collection of all
   * values. It is up to the caller to determine which value, if any,
   * from the collection will be used.
   *
   * `player` can be non-null to satisfy region group requirements,
   * otherwise it will be assumed that the caller that is not a member of any
   * regions. (Flags on a region can be changed so that they only apply
   * to certain users.) The player argument is required if the
   * {@link Flags#BUILD} flag is the flag being queried.
   *
   * @param location the location
   * @param associable an optional associable
   * @param flag the flag
   * @return a collection of values
   * @see RegionResultSet#queryAllValues(RegionAssociable, Flag)
  */
  queryAllValues<V>(location: Location, associable: RegionAssociable | null, flag: Flag<V>): Collection<V>;
}
/**
 * Keeps a cache of {@link RegionResultSet}s. The contents of the cache
 * must be externally invalidated occasionally (and frequently).
 *
 * This class is fully concurrent.
*/
export class QueryCache {
  /**
   * Get from the cache a `ApplicableRegionSet` if an entry exists;
   * otherwise, query the given manager for a result and cache it.
   *
   * @param manager the region manager
   * @param location the location
   * @param option the option
   * @return a result
  */
  queryContains(manager: RegionManager, location: Location, option: QueryOption): ApplicableRegionSet;
  /**
   * Invalidate the cache and clear its contents.
  */
  invalidateAll(): void;
}

}
declare module 'com.sk89q.worldguard.bukkit.listener.debounce.legacy' {
import { Key as com_sk89q_worldguard_bukkit_listener_debounce_legacy_InventoryMoveItemEventDebounce_Key } from 'com.sk89q.worldguard.bukkit.listener.debounce.legacy.InventoryMoveItemEventDebounce';
import { Key as com_sk89q_worldguard_bukkit_listener_debounce_legacy_EntityEntityEventDebounce_Key } from 'com.sk89q.worldguard.bukkit.listener.debounce.legacy.EntityEntityEventDebounce';
import { Key } from 'com.sk89q.worldguard.bukkit.listener.debounce.legacy.BlockEntityEventDebounce';
export class BlockEntityEventDebounce extends AbstractEventDebounce<Key> {
  constructor(debounceTime: number);
}
export class InventoryMoveItemEventDebounce extends AbstractEventDebounce<com_sk89q_worldguard_bukkit_listener_debounce_legacy_InventoryMoveItemEventDebounce_Key> {
  constructor(debounceTime: number);
}
export class EntityEntityEventDebounce extends AbstractEventDebounce<com_sk89q_worldguard_bukkit_listener_debounce_legacy_EntityEntityEventDebounce_Key> {
  constructor(debounceTime: number);
}
export class AbstractEventDebounce<K> {

}

}
declare module 'com.sk89q.worldguard.protection.regions.ProtectedRegion' {
import { Exception } from 'java.lang';
/**
 * Thrown when setting a parent would create a circular inheritance
 * situation.
*/
export class CircularInheritanceException extends Exception {

}

}
declare module 'com.sk89q.worldguard.protection.managers.index.ChunkHashTable' {
import { ChunkHashTable, ConcurrentRegionIndex } from 'com.sk89q.worldguard.protection.managers.index';
import { Function } from 'java.util.function';
/**
 * A factory for instances of `ChunkHashCache`.
*/
export class Factory extends Function<string, ChunkHashTable> {
  constructor(supplier: Function<string, ConcurrentRegionIndex>);
  apply(name: string): ChunkHashTable;
}

}
declare module 'com.sk89q.worldguard.protection.managers' {
import { Logger } from 'java.util.logging';
import { ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { Set, Timer, Collection, List, Map } from 'java.util';
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { ConcurrentMap } from 'java.util.concurrent';
import { QueryOption } from 'com.sk89q.worldguard.protection.regions.RegionQuery';
import { ApplicableRegionSet } from 'com.sk89q.worldguard.protection';
import { Enum } from 'java.lang';
import { FlagRegistry } from 'com.sk89q.worldguard.protection.flags.registry';
import { LocalPlayer } from 'com.sk89q.worldguard';
import { ConcurrentRegionIndex } from 'com.sk89q.worldguard.protection.managers.index';
import { Function } from 'java.util.function';
import { RegionDatabase, RegionDriver } from 'com.sk89q.worldguard.protection.managers.storage';
import { Normal } from 'com.sk89q.worldguard.util';
/**
 * A region manager holds the regions for a world.
*/
export class RegionManager {
  /**
   * Create a new index.
   *
   * @param store the region store
   * @param indexFactory the factory for creating new instances of the index
   * @param flagRegistry the flag registry
  */
  constructor(store: RegionDatabase, indexFactory: Function<string, ConcurrentRegionIndex>, flagRegistry: FlagRegistry);
  /**
   * Get a displayable name for this store.
  */
  getName(): string;
  /**
   * Load regions from storage and replace the index on this manager with
   * the regions loaded from the store.
   *
   * This method will block until the save completes, but it will
   * not block access to the region data from other threads, nor will it
   * prevent the creation or modification of regions in the index while
   * a new collection of regions is loaded from storage.
   *
   * @throws StorageException thrown when loading fails
  */
  load(): void;
  /**
   * Save a snapshot of all the regions as it is right now to storage.
   *
   * @throws StorageException thrown on save error
  */
  save(): void;
  /**
   * Save changes to the region index to disk, preferring to only save
   * the changes (rather than the whole index), but choosing to save the
   * whole index if the underlying store does not support partial saves.
   *
   * This method does nothing if there are no changes.
   *
   * @return true if there were changes to be saved
   * @throws StorageException thrown on save error
  */
  saveChanges(): boolean;
  /**
   * Load the regions for a chunk.
   *
   * @param position the position
  */
  loadChunk(position: BlockVector2): void;
  /**
   * Load the regions for a chunk.
   *
   * @param positions a collection of positions
  */
  loadChunks(positions: Collection<BlockVector2>): void;
  /**
   * Unload the regions for a chunk.
   *
   * @param position the position
  */
  unloadChunk(position: BlockVector2): void;
  /**
   * Get an unmodifiable map of regions containing the state of the
   * index at the time of call.
   *
   * This call is relatively heavy (and may block other threads),
   * so refrain from calling it frequently.
   *
   * @return a map of regions
  */
  getRegions(): Map<string, ProtectedRegion>;
  /**
   * Replace the index with the regions in the given map.
   *
   * The parents of the regions will also be added to the index, even
   * if they are not in the provided map.
   *
   * @param regions a map of regions
  */
  setRegions(regions: Map<string, ProtectedRegion>): void;
  /**
   * Replace the index with the regions in the given collection.
   *
   * The parents of the regions will also be added to the index, even
   * if they are not in the provided map.
   *
   * @param regions a collection of regions
  */
  setRegions(regions: Collection<ProtectedRegion>): void;
  /**
   * Aad a region to the manager.
   *
   * The parents of the region will also be added to the index.
   *
   * @param region the region
  */
  addRegion(region: ProtectedRegion): void;
  /**
   * Return whether the index contains a region by the given name,
   * with equality determined by {@link Normal}.
   *
   * @param id the name of the region
   * @return true if this index contains the region
  */
  hasRegion(id: string): boolean;
  /**
   * Get the region named by the given name (equality determined using
   * {@link Normal}).
   *
   * @param id the name of the region
   * @return a region or `null`
  */
  getRegion(id: string): ProtectedRegion | null;
  /**
   * @deprecated Use exact ids with {@link #getRegion}
  */
  matchRegion(pattern: string): ProtectedRegion | null;
  /**
   * Remove a region from the index with the given name, opting to remove
   * the children of the removed region.
   *
   * @param id the name of the region
   * @return a list of removed regions where the first entry is the region specified by `id`
  */
  removeRegion(id: string): Set<ProtectedRegion> | null;
  /**
   * Remove a region from the index with the given name.
   *
   * @param id the name of the region
   * @param strategy what to do with children
   * @return a list of removed regions where the first entry is the region specified by `id`
  */
  removeRegion(id: string, strategy: RemovalStrategy): Set<ProtectedRegion> | null;
  /**
   * Query for effective flags and members for the given position.
   *
   * {@link QueryOption#COMPUTE_PARENTS} is used.
   *
   * @param position the position
   * @return the query object
  */
  getApplicableRegions(position: BlockVector3): ApplicableRegionSet;
  /**
   * Return a region set for the given position.
   *
   * @param position the position
   * @param option the option
   * @return a region set
  */
  getApplicableRegions(position: BlockVector3, option: QueryOption): ApplicableRegionSet;
  /**
   * Query for effective flags and members for the area represented
   * by the given region.
   *
   * {@link QueryOption#COMPUTE_PARENTS} is used.
   *
   * @param region the region
   * @return the query object
  */
  getApplicableRegions(region: ProtectedRegion): ApplicableRegionSet;
  /**
   * Return a region set for the area represented by the given region.
   *
   * @param region the region
   * @param option the option
   * @return a region set
  */
  getApplicableRegions(region: ProtectedRegion, option: QueryOption): ApplicableRegionSet;
  /**
   * Get a list of region names for regions that contain the given position.
   *
   * @param position the position
   * @return a list of names
  */
  getApplicableRegionsIDs(position: BlockVector3): string[];
  /**
   * Return whether there are any regions intersecting the given region that
   * are not owned by the given player.
   *
   * @param region the region
   * @param player the player
   * @return true if there are such intersecting regions
  */
  overlapsUnownedRegion(region: ProtectedRegion, player: LocalPlayer): boolean;
  /**
   * Get the number of regions.
   *
   * @return the number of regions
  */
  size(): number;
  /**
   * Get the number of regions that are owned by the given player.
   *
   * @param player the player
   * @return name number of regions that a player owns
  */
  getRegionCountOfPlayer(player: LocalPlayer): number;
}
/**
 * Determines the strategy regarding child regions when regions are
 * removed from a {@link RegionIndex}.
*/
export class RemovalStrategy extends Enum<RemovalStrategy> {
  /**
   * Unset the parent in children regions.
  */
  static readonly UNSET_PARENT_IN_CHILDREN: RemovalStrategy;
  /**
   * Remove any children under the removed regions. This includes sub-children, etc.
  */
  static readonly REMOVE_CHILDREN: RemovalStrategy;
  static valueOf(name: string): RemovalStrategy;
  static values(): RemovalStrategy[];
}
/**
 * Manages different {@link RegionManager}s for different worlds or dimensions.
 *
 * This is an internal class. Do not use it.
*/
export class RegionContainerImpl {
  /**
   * Create a new instance.
   *
   * @param driver the region store driver
   * @param flagRegistry the flag registry
  */
  constructor(driver: RegionDriver, flagRegistry: FlagRegistry);
  /**
   * Get the region store driver.
   *
   * @return the driver
  */
  getDriver(): RegionDriver;
  /**
   * Load the `RegionManager` for the world with the given name,
   * creating a new instance for the world if one does not exist yet.
   *
   * @param name the name of the world
   * @return a region manager, or `null` if loading failed
  */
  load(name: string): RegionManager | null;
  /**
   * Unload the region manager associated with the given world name.
   *
   * If no region manager has been loaded for the given name, then
   * nothing will happen.
   *
   * @param name the name of the world
  */
  unload(name: string): void;
  /**
   * Unload all region managers and save their contents before returning.
   * This message may block for an extended period of time.
  */
  unloadAll(): void;
  /**
   * Disable completely.
  */
  shutdown(): void;
  /**
   * Get the region manager for the given world name.
   *
   * @param name the name of the world
   * @return a region manager, or `null` if one was never loaded
  */
  get(name: string): RegionManager | null;
  /**
   * Get an immutable list of loaded region managers.
   *
   * @return an immutable list
  */
  getLoaded(): RegionManager[];
  /**
   * Get the a set of region managers that are failing to save.
   *
   * @return a set of region managers
  */
  getSaveFailures(): Set<RegionManager>;
}
/**
 * Describes the difference in region data.
*/
export class RegionDifference {
  /**
   * Create a new instance.
   *
   * @param changed a set of regions that were changed or added
   * @param removed a set of regions that were removed
  */
  constructor(changed: Set<ProtectedRegion>, removed: Set<ProtectedRegion>);
  /**
   * Get the regions that were changed or added.
   *
   * @return regions
  */
  getChanged(): Set<ProtectedRegion>;
  /**
   * Get the regions that were removed.
   *
   * @return regions
  */
  getRemoved(): Set<ProtectedRegion>;
  /**
   * Test whether there are changes or removals.
   *
   * @return true if there are changes
  */
  containsChanges(): boolean;
  addAll(diff: RegionDifference): void;
}

}
declare module 'com.sk89q.worldguard.internal.permission' {
import { ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { PermissionModel } from 'com.sk89q.worldguard.internal';
import { World } from 'com.sk89q.worldedit.world';
import { Flag } from 'com.sk89q.worldguard.protection.flags';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
/**
 * Used for querying region-related permissions.
*/
export class RegionPermissionModel extends AbstractPermissionModel {
  constructor(sender: Actor);
  /**
   * @deprecated Check `WorldGuard.getInstance().getPlatform().getSessionManager().hasBypass(..)` instead
  */
  mayIgnoreRegionProtection(world: World): boolean;
  mayForceLoadRegions(): boolean;
  mayForceSaveRegions(): boolean;
  mayMigrateRegionStore(): boolean;
  mayMigrateRegionNames(): boolean;
  mayMigrateRegionHeights(): boolean;
  mayDefine(): boolean;
  mayRedefine(region: ProtectedRegion): boolean;
  mayClaim(): boolean;
  mayClaimRegionsUnbounded(): boolean;
  mayDelete(region: ProtectedRegion): boolean;
  maySetPriority(region: ProtectedRegion): boolean;
  maySetParent(child: ProtectedRegion, parent: ProtectedRegion): boolean;
  maySelect(region: ProtectedRegion): boolean;
  mayLookup(region: ProtectedRegion): boolean;
  mayTeleportTo(region: ProtectedRegion): boolean;
  mayTeleportToCenter(region: ProtectedRegion): boolean;
  mayOverrideLocationFlagBounds(region: ProtectedRegion): boolean;
  mayList(): boolean;
  mayList(targetPlayer: string): boolean;
  maySetFlag(region: ProtectedRegion): boolean;
  maySetFlag(region: ProtectedRegion, flag: Flag<any>): boolean;
  maySetFlag(region: ProtectedRegion, flag: Flag<any>, value: string | null): boolean;
  mayAddMembers(region: ProtectedRegion): boolean;
  mayAddOwners(region: ProtectedRegion): boolean;
  mayRemoveMembers(region: ProtectedRegion): boolean;
  mayRemoveOwners(region: ProtectedRegion): boolean;
}
export class AbstractPermissionModel extends PermissionModel {
  getSender(): Actor;
}

}
declare module 'com.sk89q.worldguard.util.sql' {
import { Connection } from 'java.sql';
/**
 * Describes a data source.
*/
export class DataSourceConfig {
  /**
   * Create a new instance.
   *
   * @param dsn the DSN
   * @param username the username
   * @param password the password
   * @param tablePrefix the table prefix
  */
  constructor(dsn: string, username: string, password: string, tablePrefix: string);
  /**
   * Get the DSN.
   *
   * @return the DSN
  */
  getDsn(): string;
  /**
   * Get the username.
   *
   * @return the username
  */
  getUsername(): string;
  /**
   * Get the password.
   *
   * @return the password
  */
  getPassword(): string;
  /**
   * Get the table prefix.
   *
   * @return the table prefix
  */
  getTablePrefix(): string;
  /**
   * Create a new instance with a new DSN.
   *
   * @param dsn a new DSN string
   * @return a new instance
  */
  setDsn(dsn: string);
  /**
   * Create a new instance with a new username.
   *
   * @param username a new username
   * @return a new instance
  */
  setUsername(username: string);
  /**
   * Create a new instance with a new password.
   *
   * @param password a new password
   * @return a new instance
  */
  setPassword(password: string);
  /**
   * Create a new instance with a new table prefix.
   *
   * @param tablePrefix the new table prefix
   * @return a new instance
  */
  setTablePrefix(tablePrefix: string);
  /**
   * Create a new connection.
   *
   * @return the new connection
   * @throws SQLException raised if the connection cannot be instantiated
  */
  getConnection(): Connection;
}

}
declare module 'com.sk89q.worldguard.session.handler.NotifyEntryFlag' {
import { NotifyEntryFlag } from 'com.sk89q.worldguard.session.handler';
import { Factory as com_sk89q_worldguard_session_handler_Handler_Factory } from 'com.sk89q.worldguard.session.handler.Handler';
import { Session } from 'com.sk89q.worldguard.session';
export class Factory extends com_sk89q_worldguard_session_handler_Handler_Factory<NotifyEntryFlag> {
  create(session: Session): NotifyEntryFlag;
}

}
declare module 'com.sk89q.worldguard.util.io' {
import { Logger } from 'java.util.logging';
import { Deque } from 'java.util';
import { RuntimeException, Throwable, Class } from 'java.lang';
import { Closeable } from 'java.io';
import { Suppressor } from 'com.sk89q.worldguard.util.io.Closer';
export class Closer extends Closeable {
  /**
   * Creates a new {@link Closer}.
  */
  static create(): Closer;
  register<C>(closeable: C): C;
  /**
   * Stores the given throwable and rethrows it. It will be rethrown as is if it is an
   * `IOException`, `RuntimeException` or `Error`. Otherwise, it will be rethrown
   * wrapped in a `RuntimeException`. Note: Be sure to declare all of the checked
   * exception types your try block can throw when calling an overload of this method so as to avoid
   * losing the original exception type.
   *
   * This method always throws, and as such should be called as
   * `throw closer.rethrow(e);` to ensure the compiler knows that it will throw.
   *
   * @return this method does not return; it always throws
   * @throws IOException when the given throwable is an IOException
  */
  rethrow(e: Throwable): RuntimeException;
  /**
   * Stores the given throwable and rethrows it. It will be rethrown as is if it is an
   * `IOException`, `RuntimeException`, `Error` or a checked exception of the
   * given type. Otherwise, it will be rethrown wrapped in a `RuntimeException`. Note:
   * Be sure to declare all of the checked exception types your try block can throw when calling an
   * overload of this method so as to avoid losing the original exception type.
   *
   * This method always throws, and as such should be called as
   * `throw closer.rethrow(e, ...);` to ensure the compiler knows that it will throw.
   *
   * @return this method does not return; it always throws
   * @throws IOException when the given throwable is an IOException
   * @throws X when the given throwable is of the declared type X
  */
  rethrow<X>(e: Throwable, declaredType: Class<X>): RuntimeException;
  /**
   * Stores the given throwable and rethrows it. It will be rethrown as is if it is an
   * `IOException`, `RuntimeException`, `Error` or a checked exception of either
   * of the given types. Otherwise, it will be rethrown wrapped in a `RuntimeException`.
   * Note: Be sure to declare all of the checked exception types your try block can throw
   * when calling an overload of this method so as to avoid losing the original exception type.
   *
   * This method always throws, and as such should be called as
   * `throw closer.rethrow(e, ...);` to ensure the compiler knows that it will throw.
   *
   * @return this method does not return; it always throws
   * @throws IOException when the given throwable is an IOException
   * @throws X1 when the given throwable is of the declared type X1
   * @throws X2 when the given throwable is of the declared type X2
  */
  rethrow<X1, X2>(e: Throwable, declaredType1: Class<X1>, declaredType2: Class<X2>): RuntimeException;
  /**
   * Closes all `Closeable` instances that have been added to this `Closer`. If an
   * exception was thrown in the try block and passed to one of the `exceptionThrown` methods,
   * any exceptions thrown when attempting to close a closeable will be suppressed. Otherwise, the
   * first exception to be thrown from an attempt to close a closeable will be thrown and any
   * additional exceptions that are thrown after that will be suppressed.
  */
  close(): void;
  /**
   * Close quietly.
  */
  closeQuietly(): void;
}

}
declare module 'com.sk89q.worldguard.bukkit.listener.debounce.EventDebounce' {
export class Entry {
  setCancelled(cancelled: boolean): void;
}

}
declare module 'com.sk89q.worldguard.blacklist' {
import { Logger } from 'java.util.logging';
import { Action } from 'com.sk89q.worldguard.blacklist.action';
import { Class } from 'java.lang';
import { Set, List, Map } from 'java.util';
import { LocalPlayer } from 'com.sk89q.worldguard';
import { File } from 'java.io';
import { BlacklistEvent } from 'com.sk89q.worldguard.blacklist.event';
import { LoggerHandler } from 'com.sk89q.worldguard.blacklist.logger';
export class Blacklist {
  constructor(useAsWhitelist: boolean);
  /**
   * Returns whether the list is empty.
   *
   * @return whether the blacklist is empty
  */
  isEmpty(): boolean;
  /**
   * Get the number of individual items that have blacklist entries.
   *
   * @return The number of items in the blacklist
  */
  getItemCount(): number;
  /**
   * Returns whether the blacklist is used as a whitelist.
   *
   * @return whether the blacklist is be used as a whitelist
  */
  isWhitelist(): boolean;
  /**
   * Get the log.
   *
   * @return The logger used in this blacklist
  */
  getLogger(): BlacklistLoggerHandler;
  /**
   * Method to handle the event.
   *
   * @param event The event to check
   * @param forceRepeat Whether to force quickly repeating notifications
   * @param silent Whether to force-deny notifications
   * @return Whether the event is allowed
  */
  check(event: BlacklistEvent, forceRepeat: boolean, silent: boolean): boolean;
  /**
   * Load the blacklist.
   *
   * @param file The file to load from
   * @throws IOException if an error occurred reading from the file
  */
  load(file: File): void;
  /**
   * Get the last event.
   *
   * @return The last event
  */
  getLastEvent(): BlacklistEvent;
  /**
   * Notify administrators.
   *
   * @param event The event to notify about
   * @param comment The comment to notify with
  */
  notify(event: BlacklistEvent, comment: string): void;
}
export class BlacklistLoggerHandler extends LoggerHandler {
  /**
   * Add a handler.
   *
   * @param handler The handler to add
  */
  addHandler(handler: LoggerHandler): void;
  /**
   * Remove a handler.
   *
   * @param handler The handler to remove
  */
  removeHandler(handler: LoggerHandler): void;
  /**
   * Add a handler.
  */
  clearHandlers(): void;
  /**
   * Log an event.
   *
   * @param event The event to log
  */
  logEvent(event: BlacklistEvent, comment: string): void;
  /**
   * Close the connection.
  */
  close(): void;
}
export class BlacklistEntry {
  /**
   * Construct the object.
   *
   * @param blacklist The blacklist that contains this entry
  */
  constructor(blacklist: Blacklist);
  /**
   * @return the ignoreGroups
  */
  getIgnoreGroups(): string[];
  /**
   * @return the ignoreGroups
  */
  getIgnorePermissions(): string[];
  /**
   * @param ignoreGroups the ignoreGroups to set
  */
  setIgnoreGroups(ignoreGroups: string[]);
  /**
   * @param ignorePermissions the ignorePermissions to set
  */
  setIgnorePermissions(ignorePermissions: string[]);
  /**
   * @return the message
  */
  getMessage(): string;
  /**
   * @param message the message to set
  */
  setMessage(message: string);
  /**
   * @return the comment
  */
  getComment(): string;
  /**
   * @param comment the comment to set
  */
  setComment(comment: string);
  /**
   * Returns true if this player should be ignored.
   *
   * @param player The player to check
   * @return whether this player should be ignored for blacklist blocking
  */
  shouldIgnore(player: LocalPlayer | null): boolean;
  /**
   * Get the associated actions with an event.
   *
   * @param eventCls The event's class
   * @return The actions for the given event
  */
  getActions(eventCls: Class<BlacklistEvent>): Action[];
  /**
   * Method to handle the event.
   *
   * @param useAsWhitelist Whether this entry is being used in a whitelist
   * @param event The event to check
   * @param forceRepeat Whether to force repeating notifications even within the delay limit
   * @param silent Whether to prevent notifications from happening
   * @return Whether the action was allowed
  */
  check(useAsWhitelist: boolean, event: BlacklistEvent, forceRepeat: boolean, silent: boolean): boolean;
}

}
declare module 'com.sk89q.worldguard.bukkit.listener.debounce' {
export class BlockPistonRetractKey {
  equals(o: any): boolean;
  hashCode(): number;
}
export class EventDebounce<K> {
  constructor(debounceTime: number);
  static create<K>(debounceTime: number): EventDebounce<K>;
}
export class BlockPistonExtendKey {
  equals(o: any): boolean;
  hashCode(): number;
}

}
declare module 'com.sk89q.worldguard.session.handler.TimeLockFlag' {
import { TimeLockFlag } from 'com.sk89q.worldguard.session.handler';
import { Factory as com_sk89q_worldguard_session_handler_Handler_Factory } from 'com.sk89q.worldguard.session.handler.Handler';
import { Session } from 'com.sk89q.worldguard.session';
export class Factory extends com_sk89q_worldguard_session_handler_Handler_Factory<TimeLockFlag> {
  create(session: Session): TimeLockFlag;
}

}
declare module 'com.sk89q.worldguard.session.handler' {
import { Factory as com_sk89q_worldguard_session_handler_GreetingFlag_Factory } from 'com.sk89q.worldguard.session.handler.GreetingFlag';
import { Factory as com_sk89q_worldguard_session_handler_GodMode_Factory } from 'com.sk89q.worldguard.session.handler.GodMode';
import { ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { Set } from 'java.util';
import { Factory as com_sk89q_worldguard_session_handler_HealFlag_Factory } from 'com.sk89q.worldguard.session.handler.HealFlag';
import { Factory as com_sk89q_worldguard_session_handler_ExitFlag_Factory } from 'com.sk89q.worldguard.session.handler.ExitFlag';
import { Factory as com_sk89q_worldguard_session_handler_FarewellFlag_Factory } from 'com.sk89q.worldguard.session.handler.FarewellFlag';
import { Factory as com_sk89q_worldguard_session_handler_WeatherLockFlag_Factory } from 'com.sk89q.worldguard.session.handler.WeatherLockFlag';
import { Flag } from 'com.sk89q.worldguard.protection.flags';
import { Factory as com_sk89q_worldguard_session_handler_NotifyEntryFlag_Factory } from 'com.sk89q.worldguard.session.handler.NotifyEntryFlag';
import { GameMode } from 'com.sk89q.worldedit.world.gamemode';
import { Factory as com_sk89q_worldguard_session_handler_WaterBreathing_Factory } from 'com.sk89q.worldguard.session.handler.WaterBreathing';
import { Factory as com_sk89q_worldguard_session_handler_FeedFlag_Factory } from 'com.sk89q.worldguard.session.handler.FeedFlag';
import { Factory } from 'com.sk89q.worldguard.session.handler.TimeLockFlag';
import { ApplicableRegionSet } from 'com.sk89q.worldguard.protection';
import { Pattern } from 'java.util.regex';
import { LocalPlayer } from 'com.sk89q.worldguard';
import { WeatherType } from 'com.sk89q.worldedit.world.weather';
import { Location } from 'com.sk89q.worldedit.util';
import { Factory as com_sk89q_worldguard_session_handler_GameModeFlag_Factory } from 'com.sk89q.worldguard.session.handler.GameModeFlag';
import { Factory as com_sk89q_worldguard_session_handler_InvincibilityFlag_Factory } from 'com.sk89q.worldguard.session.handler.InvincibilityFlag';
import { Factory as com_sk89q_worldguard_session_handler_EntryFlag_Factory } from 'com.sk89q.worldguard.session.handler.EntryFlag';
import { Factory as com_sk89q_worldguard_session_handler_NotifyExitFlag_Factory } from 'com.sk89q.worldguard.session.handler.NotifyExitFlag';
import { State } from 'com.sk89q.worldguard.protection.flags.StateFlag';
import { MoveType, Session } from 'com.sk89q.worldguard.session';
export class TimeLockFlag extends FlagValueChangeHandler<string> {
  static readonly FACTORY: Factory;
  constructor(session: Session);
}
export class GreetingFlag extends Handler {
  static readonly FACTORY: com_sk89q_worldguard_session_handler_GreetingFlag_Factory;
  constructor(session: Session);
  onCrossBoundary(player: LocalPlayer, from: Location, to: Location, toSet: ApplicableRegionSet, entered: Set<ProtectedRegion>, exited: Set<ProtectedRegion>, moveType: MoveType): boolean;
}
export class HealFlag extends Handler {
  static readonly FACTORY: com_sk89q_worldguard_session_handler_HealFlag_Factory;
  constructor(session: Session);
  tick(player: LocalPlayer, set: ApplicableRegionSet): void;
}
export class GodMode extends Handler {
  static readonly FACTORY: com_sk89q_worldguard_session_handler_GodMode_Factory;
  constructor(session: Session);
  hasGodMode(player: LocalPlayer): boolean;
  setGodMode(player: LocalPlayer, godMode: boolean): void;
  getInvincibility(player: LocalPlayer): State | null;
  static set(player: LocalPlayer, session: Session, value: boolean): boolean;
}
export class WeatherLockFlag extends FlagValueChangeHandler<WeatherType> {
  static readonly FACTORY: com_sk89q_worldguard_session_handler_WeatherLockFlag_Factory;
  constructor(session: Session);
}
export class GameModeFlag extends FlagValueChangeHandler<GameMode> {
  static readonly FACTORY: com_sk89q_worldguard_session_handler_GameModeFlag_Factory;
  constructor(session: Session);
  getOriginalGameMode(): GameMode;
  getSetGameMode(): GameMode;
}
export class NotifyExitFlag extends FlagValueChangeHandler<boolean> {
  static readonly FACTORY: com_sk89q_worldguard_session_handler_NotifyExitFlag_Factory;
  constructor(session: Session);
}
export class InvincibilityFlag extends FlagValueChangeHandler<State> {
  static readonly FACTORY: com_sk89q_worldguard_session_handler_InvincibilityFlag_Factory;
  constructor(session: Session);
  getInvincibility(player: LocalPlayer): State | null;
}
export class NotifyEntryFlag extends FlagValueChangeHandler<boolean> {
  static readonly FACTORY: com_sk89q_worldguard_session_handler_NotifyEntryFlag_Factory;
  constructor(session: Session);
}
export class EntryFlag extends Handler {
  static readonly FACTORY: com_sk89q_worldguard_session_handler_EntryFlag_Factory;
  constructor(session: Session);
  onCrossBoundary(player: LocalPlayer, from: Location, to: Location, toSet: ApplicableRegionSet, entered: Set<ProtectedRegion>, exited: Set<ProtectedRegion>, moveType: MoveType): boolean;
}
export class ExitFlag extends FlagValueChangeHandler<State> {
  static readonly FACTORY: com_sk89q_worldguard_session_handler_ExitFlag_Factory;
  constructor(session: Session);
}
export class WaterBreathing extends Handler {
  static readonly FACTORY: com_sk89q_worldguard_session_handler_WaterBreathing_Factory;
  waterBreathing: boolean;
  constructor(session: Session);
  hasWaterBreathing(): boolean;
  setWaterBreathing(waterBreathing: boolean): void;
  static set(player: LocalPlayer, session: Session, value: boolean): boolean;
}
export class FarewellFlag extends Handler {
  static readonly FACTORY: com_sk89q_worldguard_session_handler_FarewellFlag_Factory;
  constructor(session: Session);
  initialize(player: LocalPlayer, current: Location, set: ApplicableRegionSet): void;
  onCrossBoundary(player: LocalPlayer, from: Location, to: Location, toSet: ApplicableRegionSet, entered: Set<ProtectedRegion>, exited: Set<ProtectedRegion>, moveType: MoveType): boolean;
}
export class FeedFlag extends Handler {
  static readonly FACTORY: com_sk89q_worldguard_session_handler_FeedFlag_Factory;
  constructor(session: Session);
  tick(player: LocalPlayer, set: ApplicableRegionSet): void;
}
/**
 * Stores session data and possibly acts on it.
*/
export class Handler {
  /**
   * Get the session.
   *
   * @return The session
  */
  getSession(): Session;
  /**
   * Called when the session is first being created or
   * `/wg flushstates` is used.
   *
   * @param player The player
   * @param current The player's current location
   * @param set The regions for the current location
  */
  initialize(player: LocalPlayer, current: Location, set: ApplicableRegionSet): void;
  /**
   * Called when {@link Session#testMoveTo(LocalPlayer, Location, MoveType)} is called.
   *
   * If this method returns `false`, then no other handlers
   * will be run (for this move attempt).
   *
   * @param player The player
   * @param from The previous, valid, location
   * @param to The new location to test
   * @param toSet The regions for the new location
   * @param moveType The type of movement
   * @return Whether the movement should be allowed
  */
  testMoveTo(player: LocalPlayer, from: Location, to: Location, toSet: ApplicableRegionSet, moveType: MoveType): boolean;
  /**
   * Called when a player has moved into a new location.
   *
   * This is called only if the move test
   * ({@link Session#testMoveTo(LocalPlayer, Location, MoveType)}) was successful.
   *
   * If this method returns `false`, then no other handlers
   * will be run (for this move attempt).
   *
   * @param player The player
   * @param from The previous, valid, location
   * @param to The new location to test
   * @param toSet The regions for the new location
   * @param entered The list of regions that have been entered
   * @param exited The list of regions that have been left
   * @param moveType The type of move
   * @return Whether the movement should be allowed
  */
  onCrossBoundary(player: LocalPlayer, from: Location, to: Location, toSet: ApplicableRegionSet, entered: Set<ProtectedRegion>, exited: Set<ProtectedRegion>, moveType: MoveType): boolean;
  /**
   * Called periodically (at least once every second) by
   * {@link SessionManager} in the server's main thread.
   *
   * @param player The player
   * @param set The regions for the player's current location
  */
  tick(player: LocalPlayer, set: ApplicableRegionSet): void;
  /**
   * Return whether the player should be invincible.
   *
   * {@link State#DENY} can be returned to prevent invincibility
   * even if another handler permits it.
   *
   * @param player The player
   * @return Invincibility state
  */
  getInvincibility(player: LocalPlayer): State | null;
  /**
   * Get the handler wrapped by this handler object, if applicable, or just return this if no handler is wrapped.
   * @return any wrapped handler, or this handler itself
  */
  getWrappedHandler(): Handler;
}
export class FlagValueChangeHandler<T> extends Handler {
  initialize(player: LocalPlayer, current: Location, set: ApplicableRegionSet): void;
  onCrossBoundary(player: LocalPlayer, from: Location, to: Location, toSet: ApplicableRegionSet, entered: Set<ProtectedRegion>, exited: Set<ProtectedRegion>, moveType: MoveType): boolean;
}

}
declare module 'com.sk89q.worldguard.config' {
import { Logger } from 'java.util.logging';
import { Set, List, Map } from 'java.util';
import { LocalPlayer } from 'com.sk89q.worldguard';
import { File } from 'java.io';
import { World } from 'com.sk89q.worldedit.world';
import { YAMLProcessor } from 'com.sk89q.util.yaml';
import { RegionDriver, DriverType } from 'com.sk89q.worldguard.protection.managers.storage';
import { Blacklist } from 'com.sk89q.worldguard.blacklist';
import { EntityType } from 'com.sk89q.worldedit.world.entity';
/**
 * Represents the global configuration and also delegates configuration
 * for individual worlds.
 *
 * @author sk89q
 * @author Michael
*/
export class ConfigurationManager {
  useRegionsCreatureSpawnEvent: boolean;
  activityHaltToggle: boolean;
  useGodPermission: boolean;
  useGodGroup: boolean;
  useAmphibiousGroup: boolean;
  usePlayerMove: boolean;
  usePlayerTeleports: boolean;
  deopOnJoin: boolean;
  blockInGameOp: boolean;
  migrateRegionsToUuid: boolean;
  keepUnresolvedNames: boolean;
  particleEffects: boolean;
  disablePermissionCache: boolean;
  disableDefaultBypass: boolean;
  announceBypassStatus: boolean;
  hostKeys: Map<string, string>;
  hostKeysAllowFMLClients: boolean;
  /**
   * Region Storage Configuration method, and config values
  */
  selectedRegionStoreDriver: RegionDriver;
  regionStoreDriverMap: Map<DriverType, RegionDriver>;
  /**
   * Get the folder for storing data files and configuration.
   *
   * @return the data folder
  */
  getDataFolder(): File;
  /**
   * Get the folder for storing data files and configuration for each
   * world.
   *
   * @return the data folder
  */
  getWorldsDataFolder(): File;
  /**
   * Load the configuration.
  */
  load(): void;
  /**
   * Unload the configuration.
  */
  unload(): void;
  /**
   * Get the configuration for a world.
   *
   * @param world The world to get the configuration for
   * @return `world`'s configuration
  */
  get(world: World): WorldConfiguration;
  disableUuidMigration(): void;
  /**
   * Check to see if god mode is enabled for a player.
   *
   * @param player The player to check
   * @return Whether the player has godmode through WorldGuard or CommandBook
  */
  hasGodMode(player: LocalPlayer): boolean;
  /**
   * Enable amphibious mode for a player.
   *
   * @param player The player to enable amphibious mode for
  */
  enableAmphibiousMode(player: LocalPlayer): void;
  /**
   * Disable amphibious mode  for a player.
   *
   * @param player The player to disable amphibious mode for
  */
  disableAmphibiousMode(player: LocalPlayer): void;
  /**
   * Check to see if amphibious mode is enabled for a player.
   *
   * @param player The player to check
   * @return Whether `player` has amphibious mode
  */
  hasAmphibiousMode(player: LocalPlayer): boolean;
}
export class YamlConfigurationManager extends ConfigurationManager {
  copyDefaults(): void;
  load(): void;
  postLoad(): void;
  getConfig(): YAMLProcessor;
  disableUuidMigration(): void;
}
export class YamlWorldConfiguration extends WorldConfiguration {
  getBoolean(node: string, def: boolean): boolean;
  getString(node: string, def: string): string;
  getInt(node: string, def: number): number;
  getIntList(node: string, def: number[]): number[];
  getStringList(node: string, def: string[]): string[];
  getKeys(node: string): string[];
  getProperty(node: string): any;
}
/**
 * Holds the configuration for individual worlds.
 *
 * @author sk89q
 * @author Michael
*/
export class WorldConfiguration {
  static readonly log: Logger;
  static readonly CONFIG_HEADER: string;
  boundedLocationFlags: boolean;
  useRegions: boolean;
  simulateSponge: boolean;
  spongeRadius: number;
  redstoneSponges: boolean;
  summaryOnStart: boolean;
  opPermissions: boolean;
  buildPermissions: boolean;
  buildPermissionDenyMessage: string;
  fireSpreadDisableToggle: boolean;
  itemDurability: boolean;
  disableExpDrops: boolean;
  blockPotionsAlways: boolean;
  disableConduitEffects: boolean;
  pumpkinScuba: boolean;
  noPhysicsGravel: boolean;
  noPhysicsSand: boolean;
  ropeLadders: boolean;
  allowPortalAnywhere: boolean;
  preventWaterDamage: Set<string>;
  blockLighter: boolean;
  disableFireSpread: boolean;
  disableFireSpreadBlocks: Set<string>;
  preventLavaFire: boolean;
  allowedLavaSpreadOver: Set<string>;
  blockTNTExplosions: boolean;
  blockTNTBlockDamage: boolean;
  blockCreeperExplosions: boolean;
  blockCreeperBlockDamage: boolean;
  blockWitherExplosions: boolean;
  blockWitherBlockDamage: boolean;
  blockWitherSkullExplosions: boolean;
  blockWitherSkullBlockDamage: boolean;
  blockEnderDragonBlockDamage: boolean;
  blockEnderDragonPortalCreation: boolean;
  blockFireballExplosions: boolean;
  blockFireballBlockDamage: boolean;
  blockOtherExplosions: boolean;
  blockEntityPaintingDestroy: boolean;
  blockEntityItemFrameDestroy: boolean;
  blockEntityArmorStandDestroy: boolean;
  blockEntityVehicleEntry: boolean;
  blockPluginSpawning: boolean;
  blockGroundSlimes: boolean;
  blockZombieDoorDestruction: boolean;
  disableContactDamage: boolean;
  disableFallDamage: boolean;
  disableLavaDamage: boolean;
  disableFireDamage: boolean;
  disableLightningDamage: boolean;
  disableDrowningDamage: boolean;
  disableSuffocationDamage: boolean;
  teleportOnSuffocation: boolean;
  disableVoidDamage: boolean;
  teleportOnVoid: boolean;
  safeFallOnVoid: boolean;
  disableExplosionDamage: boolean;
  disableMobDamage: boolean;
  highFreqFlags: boolean;
  checkLiquidFlow: boolean;
  regionWand: string;
  blockCreatureSpawn: Set<EntityType>;
  allowTamedSpawns: boolean;
  maxClaimVolume: number;
  claimOnlyInsideExistingRegions: boolean;
  setParentOnClaim: string;
  maxRegionCountPerPlayer: number;
  antiWolfDumbness: boolean;
  signChestProtection: boolean;
  disableSignChestProtectionCheck: boolean;
  removeInfiniteStacks: boolean;
  disableCreatureCropTrampling: boolean;
  disablePlayerCropTrampling: boolean;
  disableCreatureTurtleEggTrampling: boolean;
  disablePlayerTurtleEggTrampling: boolean;
  preventLightningFire: boolean;
  disallowedLightningBlocks: Set<string>;
  disableThunder: boolean;
  disableWeather: boolean;
  alwaysRaining: boolean;
  alwaysThundering: boolean;
  disablePigZap: boolean;
  disableVillagerZap: boolean;
  disableCreeperPower: boolean;
  disableHealthRegain: boolean;
  disableMushroomSpread: boolean;
  disableIceMelting: boolean;
  disableSnowMelting: boolean;
  disableSnowFormation: boolean;
  disableIceFormation: boolean;
  disableLeafDecay: boolean;
  disableGrassGrowth: boolean;
  disableMyceliumSpread: boolean;
  disableVineGrowth: boolean;
  disableRockGrowth: boolean;
  disableCropGrowth: boolean;
  disableEndermanGriefing: boolean;
  disableSnowmanTrails: boolean;
  disableSoilDehydration: boolean;
  disableCoralBlockFade: boolean;
  allowedSnowFallOver: Set<string>;
  regionInvinciblityRemovesMobs: boolean;
  regionCancelEmptyChatEvents: boolean;
  regionNetherPortalProtection: boolean;
  forceDefaultTitleTimes: boolean;
  fakePlayerBuildOverride: boolean;
  explosionFlagCancellation: boolean;
  disableDeathMessages: boolean;
  strictEntitySpawn: boolean;
  ignoreHopperMoveEvents: boolean;
  breakDeniedHoppers: boolean;
  useMaxPriorityAssociation: boolean;
  /**
   * Load the configuration.
  */
  loadConfiguration(): void;
  getBlacklist(): Blacklist;
  convertLegacyItems(legacyItems: string[]): string[];
  convertLegacyItem(legacy: string): string;
  convertLegacyBlocks(legacyBlocks: string[]): string[];
  convertLegacyBlock(legacy: string): string;
  getMaxRegionCount(player: LocalPlayer): number;
}

}
declare module 'com.sk89q.worldguard.session.handler.GameModeFlag' {
import { GameModeFlag } from 'com.sk89q.worldguard.session.handler';
import { Factory as com_sk89q_worldguard_session_handler_Handler_Factory } from 'com.sk89q.worldguard.session.handler.Handler';
import { Session } from 'com.sk89q.worldguard.session';
export class Factory extends com_sk89q_worldguard_session_handler_Handler_Factory<GameModeFlag> {
  create(session: Session): GameModeFlag;
}

}
declare module 'com.sk89q.worldguard.session.handler.EntryFlag' {
import { EntryFlag } from 'com.sk89q.worldguard.session.handler';
import { Factory as com_sk89q_worldguard_session_handler_Handler_Factory } from 'com.sk89q.worldguard.session.handler.Handler';
import { Session } from 'com.sk89q.worldguard.session';
export class Factory extends com_sk89q_worldguard_session_handler_Handler_Factory<EntryFlag> {
  create(session: Session): EntryFlag;
}

}
declare module 'com.sk89q.worldguard.util.profiler' {
import { Comparable, StackTraceElement } from 'java.lang';
import { Timer, Collection, Map } from 'java.util';
import { ThreadInfo } from 'java.lang.management';
import { TimeUnit } from 'java.util.concurrent';
import { Predicate } from 'java.util.function';
import { Sampler } from 'com.sk89q.worldguard.util.profiler.SamplerBuilder';
export class ThreadIdFilter extends Predicate<ThreadInfo> {
  constructor(id: number);
  test(threadInfo: ThreadInfo): boolean;
}
export class StackNode extends Comparable<StackNode> {
  constructor(name: string);
  getName(): string;
  getChildren(): Collection<StackNode>;
  getChild(name: string): StackNode;
  getChild(className: string, methodName: string): StackNode;
  getTotalTime(): number;
  log(time: number): void;
  log(elements: StackTraceElement[], time: number): void;
  compareTo(o: StackNode): number;
  toString(): string;
}
export class SamplerBuilder {
  getInterval(): number;
  setInterval(interval: number);
  getThreadFilter(): Predicate<ThreadInfo>;
  setThreadFilter(threadFilter: Predicate<ThreadInfo>);
  getRunTime(timeUnit: TimeUnit): number;
  setRunTime(time: number, timeUnit: TimeUnit): void;
  start(): Sampler;
}
export class StackTraceNode extends StackNode {
  constructor(className: string, methodName: string);
  getClassName(): string;
  getMethodName(): string;
  compareTo(o: StackNode): number;
}
export class ThreadNameFilter extends Predicate<ThreadInfo> {
  constructor(name: string);
  test(threadInfo: ThreadInfo): boolean;
}

}
declare module 'com.sk89q.worldguard.protection.FlagValueCalculator' {
import { Enum } from 'java.lang';
/**
 * Describes the membership result from
 * {@link #getMembership(RegionAssociable)}.
*/
export class Result extends Enum<Result> {
  /**
   * Indicates that there are no regions or the only regions are
   * ones with {@link Flags#PASSTHROUGH} enabled.
  */
  static readonly NO_REGIONS: Result;
  /**
   * Indicates that the player is not a member of all overlapping
   * regions.
  */
  static readonly FAIL: Result;
  /**
   * Indicates that the player is a member of all overlapping
   * regions.
  */
  static readonly SUCCESS: Result;
  static valueOf(name: string): Result;
  static values(): Result[];
}

}
declare module 'com.sk89q.worldguard.bukkit' {
import { Logger } from 'java.util.logging';
import { RegionContainer, ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { Collection, List } from 'java.util';
import { BukkitPlayer as com_sk89q_worldedit_bukkit_BukkitPlayer } from 'com.sk89q.worldedit.bukkit';
import { TargetMatcherSet } from 'com.sk89q.worldguard.bukkit.internal';
import { ProfileService } from 'com.sk89q.worldguard.util.profile.resolver';
import { GameMode } from 'com.sk89q.worldedit.world.gamemode';
import { ReportList } from 'com.sk89q.worldedit.util.report';
import { Path } from 'java.nio.file';
import { ProfileCache } from 'com.sk89q.worldguard.util.profile.cache';
import { LocalPlayer } from 'com.sk89q.worldguard';
import { Location } from 'com.sk89q.worldedit.util';
import { YamlWorldConfiguration, YamlConfigurationManager } from 'com.sk89q.worldguard.config';
import { TargetMatcherParser } from 'com.sk89q.worldguard.blacklist.target';
import { SessionManager } from 'com.sk89q.worldguard.session';
import { StringMatcher, WorldGuardPlatform, DebugHandler } from 'com.sk89q.worldguard.internal.platform';
import { FlagContextBuilder } from 'com.sk89q.worldguard.protection.flags.FlagContext';
import { ChestProtection } from 'com.sk89q.worldguard.chest';
import { World } from 'com.sk89q.worldedit.world';
import { ConcurrentMap } from 'java.util.concurrent';
import { YAMLProcessor } from 'com.sk89q.util.yaml';
import { BukkitSessionManager } from 'com.sk89q.worldguard.bukkit.session';
import { Iterable } from 'java.lang';
import { File } from 'java.io';
import { WeatherType } from 'com.sk89q.worldedit.world.weather';
import { TextComponent } from 'com.sk89q.worldedit.util.formatting.text';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
/**
 * A helper class to query whether a block or entity is protected by
 * WorldGuard.
*/
export class ProtectionQuery {

}
export class BukkitStringMatcher extends StringMatcher {
  /**
   * Match a world.
   *
   * The filter string syntax is as follows:
   * #main returns the main world
   * #normal returns the first world with a normal environment
   * #nether return the first world with a nether environment
   * #player:[name] returns the world that a player named `name` is located in, if the player is online.
   * [name] A world with the name `name`
   *
   * @param sender The sender requesting a match
   * @param filter The filter string
   * @return The resulting world
   * @throws CommandException if no world matches
  */
  matchWorld(sender: Actor, filter: string): World;
  /**
   * Match player names.
   *
   * The filter string uses the following format:
   * \@[name] looks up all players with the exact `name`
   * *[name] matches any player whose name contains `name`
   * [name] matches any player whose name starts with `name`
   *
   * @param filter The filter string to check.
   * @return A {@link List} of players who match `filter`
  */
  matchPlayerNames(filter: string): LocalPlayer[];
  /**
   * Matches players based on the specified filter string
   *
   * The filter string format is as follows:
   * * returns all the players currently online
   * If `sender` is a {@link Player}:
   * #world returns all players in the world that `sender` is in
   * #near reaturns all players within 30 blocks of `sender`'s location
   * Otherwise, the format is as specified in {@link #matchPlayerNames(String)}
   *
   * @param source The CommandSender who is trying to find a player
   * @param filter The filter string for players
   * @return iterator for players
   * @throws CommandException if no matches are found
  */
  matchPlayers(source: Actor, filter: string): Iterable<LocalPlayer>;
  /**
   * Match only a single player or console.
   *
   * The filter string syntax is as follows:
   * #console, *console, or ! return the server console
   * All syntax from {@link #matchSinglePlayer(Actor, String)}
   * @param sender The sender trying to match a CommandSender
   * @param filter The filter string
   * @return The resulting CommandSender
   * @throws CommandException if either zero or more than one player matched.
  */
  matchPlayerOrConsole(sender: Actor, filter: string): Actor;
  /**
   * Gets a world by name, if possible.
   *
   * @param worldName The name
   * @return The world
  */
  getWorldByName(worldName: string): World;
  /**
   * Replace macros in the text.
   *
   * The macros replaced are as follows:
   * %name%: The name of `sender`.
   * %id%: The unique name of the sender.
   * %online%: The number of players currently online on the server
   * If `sender` is a Player:
   * %world%: The name of the world `sender` is located in
   * %health%: The health of `sender`.
   *
   * @param sender The sender to check
   * @param message The message to replace macros in
   * @return The message with macros replaced
  */
  replaceMacros(sender: Actor, message: string): string;
  /**
   * Get a single player as an iterator for players.
   *
   * @param player The player to return in an Iterable
   * @return iterator for player
  */
  matchPlayers(player: LocalPlayer): Iterable<LocalPlayer>;
}
export class BukkitDebugHandler extends DebugHandler {
  testBreak(sender: Actor, target: LocalPlayer, fromTarget: boolean, stackTraceMode: boolean): void;
  testPlace(sender: Actor, target: LocalPlayer, fromTarget: boolean, stackTraceMode: boolean): void;
  testInteract(sender: Actor, target: LocalPlayer, fromTarget: boolean, stackTraceMode: boolean): void;
  testDamage(sender: Actor, target: LocalPlayer, fromTarget: boolean, stackTraceMode: boolean): void;
}
export class BukkitPlayer extends com_sk89q_worldedit_bukkit_BukkitPlayer {
  getName(): string;
  /**
   * Returns true if this player is inside a group.
   * 
   * @param group The group to check
   * @return Whether this player is in `group`
  */
  hasGroup(group: string): boolean;
  /**
   * Kick this player.
   * 
   * @param msg The message to kick the player with
  */
  kick(msg: string): void;
  /**
   * Ban this player.
   * 
   * @param msg The message to ban the player with
  */
  ban(msg: string): void;
  /**
   * Gets the health of this player.
   *
   * @return The health
  */
  getHealth(): number;
  /**
   * Sets the health of this player.
   *
   * @param health The health
  */
  setHealth(health: number);
  /**
   * Gets the max health of this player.
   *
   * @return The max health
  */
  getMaxHealth(): number;
  /**
   * Gets the food level of this player.
   *
   * @return The food level
  */
  getFoodLevel(): number;
  /**
   * Sets the food level of this player.
   *
   * @param foodLevel The food level
  */
  setFoodLevel(foodLevel: number);
  /**
   * Gets the saturation of this player.
   *
   * @return The saturation
  */
  getSaturation(): number;
  /**
   * Sets the saturation of this player.
   *
   * @param saturation The saturation
  */
  setSaturation(saturation: number);
  /**
   * Gets the exhaustion of this player.
   *
   * @return The exhaustion
  */
  getExhaustion(): number;
  /**
   * Sets the exhaustion of this player.
   *
   * @param exhaustion The exhaustion
  */
  setExhaustion(exhaustion: number);
  /**
   * Gets the players weather
   *
   * @return The players weather
  */
  getPlayerWeather(): WeatherType;
  /**
   * Sets the players WeatherType
   *
   * @param weather The weather type
  */
  setPlayerWeather(playerWeather: WeatherType);
  /**
   * Resets the players weather to normal.
  */
  resetPlayerWeather(): void;
  /**
   * Gets if the players time is relative.
   *
   * @return If the time is relative
  */
  isPlayerTimeRelative(): boolean;
  /**
   * Gets the time offset of the player.
   *
   * @return The players time offset
  */
  getPlayerTimeOffset(): number;
  /**
   * Sets the players time.
   *
   * @param time The players time
   * @param relative If it's relative
  */
  setPlayerTime(time: number, relative: boolean): void;
  /**
   * Resets the players time to normal.
  */
  resetPlayerTime(): void;
  /**
   * Gets the number of ticks the player is on fire for.
   *
   * @return The number of fire ticks
  */
  getFireTicks(): number;
  /**
   * Sets the number of ticks the player is on fire for.
   *
   * @param fireTicks The fire ticks
  */
  setFireTicks(fireTicks: number);
  /**
   * Sets the target of the compass
   *
   * @param location The location
  */
  setCompassTarget(compassTarget: Location);
  /**
   * This should preferably take Components but there's no way to do that yet
   *
   * @param title the title to display
   * @param subtitle the subtitle to display
  */
  sendTitle(title: string, subtitle: string): void;
  /**
   * Clears fall distance.
  */
  resetFallDistance(): void;
  /**
   * Teleport the player, potentially async, displaying the message on a success.
   *  @param location location to teleport to
   * @param successMessage message to display on success
   * @param failMessage message to display on failure
  */
  teleport(location: Location, successMessage: string, failMessage: string): void;
  getGroups(): string[];
  printRaw(msg: string): void;
  hasPermission(perm: string): boolean;
}
export interface BukkitPlayer extends com_sk89q_worldedit_bukkit_BukkitPlayer, LocalPlayer {}
/**
 * Holds the configuration for individual worlds.
 *
 * @author sk89q
 * @author Michael
*/
export class BukkitWorldConfiguration extends YamlWorldConfiguration {
  allowAllInteract: TargetMatcherSet;
  blockUseAtFeet: TargetMatcherSet;
  usePaperEntityOrigin: boolean;
  /**
   * Construct the object.
   *
   * @param plugin The WorldGuardPlugin instance
   * @param worldName The world name that this BukkitWorldConfiguration is for.
   * @param parentConfig The parent configuration to read defaults from
  */
  constructor(plugin: WorldGuardPlugin, worldName: string, parentConfig: YAMLProcessor);
  /**
   * Load the configuration.
  */
  loadConfiguration(): void;
  isChestProtected(block: Location, player: LocalPlayer): boolean;
  isChestProtected(block: Location): boolean;
  isChestProtectedPlacement(block: Location, player: LocalPlayer): boolean;
  isAdjacentChestProtected(block: Location, player: LocalPlayer): boolean;
  getChestProtection(): ChestProtection;
}
export class BukkitConfigurationManager extends YamlConfigurationManager {
  /**
   * Construct the object.
   *
   * @param plugin The plugin instance
  */
  constructor(plugin: WorldGuardPlugin);
  getWorldConfigs(): Collection<BukkitWorldConfiguration>;
  load(): void;
  getDataFolder(): File;
  copyDefaults(): void;
  unload(): void;
  postLoad(): void;
  /**
   * Get the configuration for a world.
   *
   * @param world The world to get the configuration for
   * @return `world`'s configuration
  */
  get(world: World): BukkitWorldConfiguration;
  get(worldName: string): BukkitWorldConfiguration;
  updateCommandBookGodMode(): void;
  hasCommandBookGodMode(): boolean;
}
export class BukkitUtil {

}
export class BukkitWorldGuardPlatform extends WorldGuardPlatform {
  constructor();
  /**
   * Gets the name of the platform.
   *
   * @return The platform name
  */
  getPlatformName(): string;
  /**
   * Gets the version of the platform.
   *
   * @return The platform version
  */
  getPlatformVersion(): string;
  /**
   * Notifies the platform when a flag context is created.
   *
   * @param flagContextBuilder The flag context
  */
  notifyFlagContextCreate(flagContextBuilder: FlagContextBuilder): void;
  /**
   * Get the global ConfigurationManager.
   * Use this to access global configuration values and per-world configuration values.
   *
   * @return The global ConfigurationManager
  */
  getGlobalStateManager(): BukkitConfigurationManager;
  /**
   * Gets an instance of the matcher, which handles matching
   * worlds, players, colours, etc from strings.
   *
   * @return The matcher
  */
  getMatcher(): StringMatcher;
  /**
   * Gets the session manager.
   *
   * @return The session manager
  */
  getSessionManager(): SessionManager;
  /**
   * Notifies all with the worldguard.notify permission.
   * This will check both superperms and WEPIF,
   * but makes sure WEPIF checks don't result in duplicate notifications
   *
   * @param message The notification to broadcast
  */
  broadcastNotification(message: string): void;
  /**
   * Notifies all with the worldguard.notify permission.
   * This will check both superperms and WEPIF,
   * but makes sure WEPIF checks don't result in duplicate notifications
   *
   * @param message The notification to broadcast
  */
  broadcastNotification(component: TextComponent): void;
  /**
   * Load the platform
  */
  load(): void;
  /**
   * Unload the platform
  */
  unload(): void;
  /**
   * Gets a RegionContainer.
   *
   * @return The region container
  */
  getRegionContainer(): RegionContainer;
  /**
   * Gets the handler for debug commands.
   *
   * @return The debug handler
  */
  getDebugHandler(): DebugHandler;
  /**
   * Gets the servers default game mode.
   *
   * @return The default game mode
  */
  getDefaultGameMode(): GameMode;
  /**
   * Gets the configuration directory.
   *
   * @return The config directory
  */
  getConfigDir(): Path;
  /**
   * Stack the inventory of the player
   *
   * @param localPlayer The player
  */
  stackPlayerInventory(localPlayer: LocalPlayer): void;
  /**
   * Adds reports specific to this platform.
   *
   * @param report The reportlist
  */
  addPlatformReports(report: ReportList): void;
  /**
   * Internal use.
  */
  createProfileService(profileCache: ProfileCache): ProfileService;
  /**
   * Get a region that encompasses the Vanilla spawn protection for the given world, if applicable.
   *
   * @param world world to check spawn protection of
   * @return a region, or null if not applicable
  */
  getSpawnProtection(world: World): ProtectedRegion | null;
}
export class BukkitRegionContainer extends RegionContainer {
  /**
   * Create a new instance.
   *
   * @param plugin the plugin
  */
  constructor(plugin: WorldGuardPlugin);
  initialize(): void;
  shutdown(): void;
}

}
declare module 'com.sk89q.worldguard.protection.association' {
import { RegionQuery, ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { Set, List } from 'java.util';
import { Location } from 'com.sk89q.worldedit.util';
import { Association } from 'com.sk89q.worldguard.domains';
export class AbstractRegionOverlapAssociation extends RegionAssociable {
  /**
   * Get the highest association level for the input regions.
   *
   * @param regions a list of regions
   * @return the highest membership level
  */
  getAssociation(regions: ProtectedRegion[]): Association;
}
/**
 * Utility methods to deal with associables.
*/
export class Associables {
  /**
   * Get an instance that always returns the same association.
   *
   * @param association the association
   * @return the instance
  */
  static constant(association: Association): RegionAssociable;
}
/**
 * An object that can have membership in a region.
*/
export class RegionAssociable {
  /**
   * Get the highest association level for the input regions.
   *
   * @param regions a list of regions
   * @return the highest membership level
  */
  getAssociation(regions: ProtectedRegion[]): Association;
}
/**
 * Determines that the association to a region is `OWNER` if the input
 * region is in a set of source regions.
 *
 * This class only performs a spatial query if its
 * {@link #getAssociation(List)} method is called.
*/
export class DelayedRegionOverlapAssociation extends AbstractRegionOverlapAssociation {
  /**
   * Create a new instance.
   * @param query the query
   * @param location the location
  */
  constructor(query: RegionQuery, location: Location);
  /**
   * Create a new instance.
   * @param query the query
   * @param location the location
   * @param useMaxPriorityAssociation whether to use the max priority from regions to determine association
  */
  constructor(query: RegionQuery, location: Location, useMaxPriorityAssociation: boolean);
  getAssociation(regions: ProtectedRegion[]): Association;
}
/**
 * Determines that the association to a region is `OWNER` if the input
 * region is in a set of source regions.
*/
export class RegionOverlapAssociation extends AbstractRegionOverlapAssociation {
  /**
   * Create a new instance.
   *
   * @param source set of regions that input regions must be contained within
  */
  constructor(source: Set<ProtectedRegion>);
  /**
   * Create a new instance.
   *
   * @param source set of regions that input regions must be contained within
   * @param useMaxPriorityAssociation whether to use the max priority from regions to determine association
  */
  constructor(source: Set<ProtectedRegion>, useMaxPriorityAssociation: boolean);
}

}
declare module 'com.sk89q.worldguard.session.handler.NotifyExitFlag' {
import { NotifyExitFlag } from 'com.sk89q.worldguard.session.handler';
import { Factory as com_sk89q_worldguard_session_handler_Handler_Factory } from 'com.sk89q.worldguard.session.handler.Handler';
import { Session } from 'com.sk89q.worldguard.session';
export class Factory extends com_sk89q_worldguard_session_handler_Handler_Factory<NotifyExitFlag> {
  create(session: Session): NotifyExitFlag;
}

}
declare module 'com.sk89q.worldguard.session.handler.GreetingFlag' {
import { GreetingFlag } from 'com.sk89q.worldguard.session.handler';
import { Factory as com_sk89q_worldguard_session_handler_Handler_Factory } from 'com.sk89q.worldguard.session.handler.Handler';
import { Session } from 'com.sk89q.worldguard.session';
export class Factory extends com_sk89q_worldguard_session_handler_Handler_Factory<GreetingFlag> {
  create(session: Session): GreetingFlag;
}

}
declare module 'com.sk89q.worldguard.internal.platform' {
import { RegionContainer, ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { List } from 'java.util';
import { FlagContextBuilder } from 'com.sk89q.worldguard.protection.flags.FlagContext';
import { World } from 'com.sk89q.worldedit.world';
import { ProfileService } from 'com.sk89q.worldguard.util.profile.resolver';
import { ReportList } from 'com.sk89q.worldedit.util.report';
import { GameMode } from 'com.sk89q.worldedit.world.gamemode';
import { Path } from 'java.nio.file';
import { ProfileCache } from 'com.sk89q.worldguard.util.profile.cache';
import { Iterable } from 'java.lang';
import { LocalPlayer } from 'com.sk89q.worldguard';
import { ConfigurationManager } from 'com.sk89q.worldguard.config';
import { TextComponent } from 'com.sk89q.worldedit.util.formatting.text';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
import { SessionManager } from 'com.sk89q.worldguard.session';
export class StringMatcher {
  /**
   * Match a world.
   *
   * The filter string syntax is as follows:
   * #main returns the main world
   * #normal returns the first world with a normal environment
   * #nether return the first world with a nether environment
   * #player:[name] returns the world that a player named `name` is located in, if the player is online.
   * [name] A world with the name `name`
   *
   * @param sender The sender requesting a match
   * @param filter The filter string
   * @return The resulting world
   * @throws CommandException if no world matches
  */
  matchWorld(sender: Actor, filter: string): World;
  /**
   * Match player names.
   *
   * The filter string uses the following format:
   * \@[name] looks up all players with the exact `name`
   * *[name] matches any player whose name contains `name`
   * [name] matches any player whose name starts with `name`
   *
   * @param filter The filter string to check.
   * @return A {@link List} of players who match `filter`
  */
  matchPlayerNames(filter: string): LocalPlayer[];
  /**
   * Checks if the given list of players is greater than size 0, otherwise
   * throw an exception.
   *
   * @param players The {@link List} to check
   * @return `players` as an {@link Iterable}
   * @throws CommandException If `players` is empty
  */
  checkPlayerMatch(players: LocalPlayer[]): Iterable<LocalPlayer>;
  /**
   * Matches players based on the specified filter string
   *
   * The filter string format is as follows:
   * * returns all the players currently online
   * If `sender` is a {@link Player}:
   * #world returns all players in the world that `sender` is in
   * #near reaturns all players within 30 blocks of `sender`'s location
   * Otherwise, the format is as specified in {@link #matchPlayerNames(String)}
   *
   * @param source The CommandSender who is trying to find a player
   * @param filter The filter string for players
   * @return iterator for players
   * @throws CommandException if no matches are found
  */
  matchPlayers(source: Actor, filter: string): Iterable<LocalPlayer>;
  /**
   * Match only a single player.
   *
   * @param sender The {@link Actor} who is requesting a player match
   * @param filter The filter string.
   * @see #matchPlayers(LocalPlayer) for filter string syntax
   * @return The single player
   * @throws CommandException If more than one player match was found
  */
  matchSinglePlayer(sender: Actor, filter: string): LocalPlayer;
  /**
   * Match only a single player or console.
   *
   * The filter string syntax is as follows:
   * #console, *console, or ! return the server console
   * All syntax from {@link #matchSinglePlayer(Actor, String)}
   * @param sender The sender trying to match a CommandSender
   * @param filter The filter string
   * @return The resulting CommandSender
   * @throws CommandException if either zero or more than one player matched.
  */
  matchPlayerOrConsole(sender: Actor, filter: string): Actor;
  /**
   * Get a single player as an iterator for players.
   *
   * @param player The player to return in an Iterable
   * @return iterator for player
  */
  matchPlayers(player: LocalPlayer): Iterable<LocalPlayer>;
  /**
   * Gets a world by name, if possible.
   *
   * @param worldName The name
   * @return The world
  */
  getWorldByName(worldName: string): World | null;
  /**
   * Replace macros in the text.
   *
   * The macros replaced are as follows:
   * %name%: The name of `sender`.
   * %id%: The unique name of the sender.
   * %online%: The number of players currently online on the server
   * If `sender` is a Player:
   * %world%: The name of the world `sender` is located in
   * %health%: The health of `sender`.
   *
   * @param sender The sender to check
   * @param message The message to replace macros in
   * @return The message with macros replaced
  */
  replaceMacros(sender: Actor, message: string): string;
}
export class DebugHandler {
  testBreak(sender: Actor, target: LocalPlayer, fromTarget: boolean, stackTraceMode: boolean): void;
  testPlace(sender: Actor, target: LocalPlayer, fromTarget: boolean, stackTraceMode: boolean): void;
  testInteract(sender: Actor, target: LocalPlayer, fromTarget: boolean, stackTraceMode: boolean): void;
  testDamage(sender: Actor, target: LocalPlayer, fromTarget: boolean, stackTraceMode: boolean): void;
}
/**
 * A platform for implementing.
*/
export class WorldGuardPlatform {
  /**
   * Gets the name of the platform.
   *
   * @return The platform name
  */
  getPlatformName(): string;
  /**
   * Gets the version of the platform.
   *
   * @return The platform version
  */
  getPlatformVersion(): string;
  /**
   * Notifies the platform when a flag context is created.
   *
   * @param flagContextBuilder The flag context
  */
  notifyFlagContextCreate(flagContextBuilder: FlagContextBuilder): void;
  /**
   * Get the global ConfigurationManager.
   * Use this to access global configuration values and per-world configuration values.
   *
   * @return The global ConfigurationManager
  */
  getGlobalStateManager(): ConfigurationManager;
  /**
   * Gets an instance of the matcher, which handles matching
   * worlds, players, colours, etc from strings.
   *
   * @return The matcher
  */
  getMatcher(): StringMatcher;
  /**
   * Gets the session manager.
   *
   * @return The session manager
  */
  getSessionManager(): SessionManager;
  /**
   * Notifies all with the worldguard.notify permission.
   * This will check both superperms and WEPIF,
   * but makes sure WEPIF checks don't result in duplicate notifications
   *
   * @param message The notification to broadcast
  */
  broadcastNotification(message: string): void;
  /**
   * Notifies all with the worldguard.notify permission.
   * This will check both superperms and WEPIF,
   * but makes sure WEPIF checks don't result in duplicate notifications
   *
   * @param component The notification to broadcast
  */
  broadcastNotification(component: TextComponent): void;
  /**
   * Load the platform
  */
  load(): void;
  /**
   * Unload the platform
  */
  unload(): void;
  /**
   * Gets a RegionContainer.
   *
   * @return The region container
  */
  getRegionContainer(): RegionContainer;
  /**
   * Gets the handler for debug commands.
   *
   * @return The debug handler
  */
  getDebugHandler(): DebugHandler;
  /**
   * Gets the servers default game mode.
   *
   * @return The default game mode
  */
  getDefaultGameMode(): GameMode;
  /**
   * Gets the configuration directory.
   *
   * @return The config directory
  */
  getConfigDir(): Path;
  /**
   * Stack the inventory of the player
   *
   * @param localPlayer The player
  */
  stackPlayerInventory(localPlayer: LocalPlayer): void;
  /**
   * Adds reports specific to this platform.
   *
   * @param report The reportlist
  */
  addPlatformReports(report: ReportList): void;
  /**
   * Internal use.
  */
  createProfileService(profileCache: ProfileCache): ProfileService;
  /**
   * Get a region that encompasses the Vanilla spawn protection for the given world, if applicable.
   *
   * @param world world to check spawn protection of
   * @return a region, or null if not applicable
  */
  getSpawnProtection(world: World): ProtectedRegion | null;
}

}
declare module 'com.sk89q.worldguard.bukkit.cause' {
import { List } from 'java.util';
/**
 * An instance of this object describes the actors that played a role in
 * causing an event, with the ability to describe a situation where one actor
 * controls several other actors to create the event.
 *
 * For example, if a player fires an arrow that hits an item frame, the player
 * is the initiator, while the arrow is merely controlled by the player to
 * hit the item frame.
*/
export class Cause {
  /**
   * Test whether the traced cause is indirect.
   *
   * If the cause is indirect, then the root cause may not be notified,
   * for example.
   *
   * @return true if the cause is indirect
  */
  isIndirect(): boolean;
  /**
   * Return whether a cause is known. This method will return false if
   * the list of causes is empty or the root cause is really not known
   * (e.g. primed TNT).
   *
   * @return true if known
  */
  isKnown(): boolean;
  getRootCause(): any | null;
  toString(): string;
  /**
   * Create a new instance with the given objects as the cause,
   * where the first-most object is the initial initiator and those
   * following it are controlled by the previous entry.
   *
   * @param cause an array of causing objects
   * @return a cause
  */
  static create(...cause: any[] | null): Cause;
  /**
   * Create a new instance that indicates that the cause is not known.
   *
   * @return a cause
  */
  static unknown(): Cause;
}

}
declare module 'com.sk89q.worldguard.protection.flags.FlagContext' {
import { Map } from 'java.util';
import { FlagContext } from 'com.sk89q.worldguard.protection.flags';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
export class FlagContextBuilder {
  setSender(sender: Actor);
  setInput(input: string);
  setObject(key: string, value: any): FlagContextBuilder;
  tryAddToMap(key: string, value: any): boolean;
  build(): FlagContext;
}

}
declare module 'com.sk89q.worldguard.chest' {
import { LocalPlayer } from 'com.sk89q.worldguard';
import { Location } from 'com.sk89q.worldedit.util';
import { BlockType } from 'com.sk89q.worldedit.world.block';
/**
 * Interface for chest protection.
*/
export class ChestProtection {
  /**
   * Returns whether a block is protected.
   * 
   * @param block The block to check
   * @param player The player to check
   * @return Whether the block is protected for player
  */
  isProtected(block: Location, player: LocalPlayer): boolean;
  /**
   * Returns whether a location where a chest block is trying to be created 
   * is protected. 
   * 
   * @param block The block to check
   * @param player The player to check
   * @return Whether `player` can place a block at the specified block
  */
  isProtectedPlacement(block: Location, player: LocalPlayer): boolean;
  /**
   * Returns whether an adjacent chest is protected.
   * 
   * @param searchBlock The block to check
   * @param player The player to check
   * @return Whether `searchBlock` is protected from access by `player`
  */
  isAdjacentChestProtected(searchBlock: Location, player: LocalPlayer): boolean;
  /**
   * Returns whether a blockType is a chest.
   *
   * @param blockType The blockType to check
   * @return Whether a type is a 'chest' (protectable block)
  */
  isChest(blockType: BlockType): boolean;
}
/**
 * Sign-based chest protection.
 *
 * @author sk89q
*/
export class SignChestProtection extends ChestProtection {
  isProtectedSign(block: Location, player: LocalPlayer): boolean;
  isProtected(location: Location, player: LocalPlayer): boolean;
  isProtectedPlacement(block: Location, player: LocalPlayer): boolean;
  isAdjacentChestProtected(searchBlock: Location, player: LocalPlayer): boolean;
}

}
declare module 'com.sk89q.worldguard.protection.managers.storage.sql' {
import { Logger } from 'java.util.logging';
import { List } from 'java.util';
import { ExecutorService } from 'java.util.concurrent';
import { DataSourceConfig } from 'com.sk89q.worldguard.util.sql';
import { RegionDatabase, RegionDriver } from 'com.sk89q.worldguard.protection.managers.storage';
/**
 * Stores regions using a JDBC connection with support for SQL.
 *
 * Note, however, that this implementation only supports MySQL.
 * 
*/
export class SQLDriver extends RegionDriver {
  /**
   * Create a new instance.
   *
   * @param config a configuration
  */
  constructor(config: DataSourceConfig);
  /**
   * Get a region database for a world.
   *
   * The given name should be a unique name for the world. Due to
   * legacy reasons, there are no stipulations on the case sensitivity
   * of the name. Historically, however, if the driver is a file-based
   * driver, case-sensitivity will vary on whether the underlying
   * filesystem is case-sensitive.
   *
   * This method should return quickly.
   *
   * @param name the name of the world, which may be case sensitive
   * @return the world
  */
  get(name: string): RegionDatabase;
  /**
   * Fetch all the region databases that have been stored using this driver.
   * Essentially, return a region database for all worlds that have had
   * regions saved for it in the past.
   *
   * As this may require a query to be performed, this method may block
   * for a prolonged period of time.
   *
   * @return a list of databases
   * @throws StorageException thrown if the fetch operation fails
  */
  getAll(): RegionDatabase[];
  /**
   * Get the name of the folder in migrations/region containing the migration files.
   *
   * @return the migration folder name
  */
  getMigrationFolderName(): string;
}

}
declare module 'com.sk89q.worldguard.session.handler.HealFlag' {
import { HealFlag } from 'com.sk89q.worldguard.session.handler';
import { Factory as com_sk89q_worldguard_session_handler_Handler_Factory } from 'com.sk89q.worldguard.session.handler.Handler';
import { Session } from 'com.sk89q.worldguard.session';
export class Factory extends com_sk89q_worldguard_session_handler_Handler_Factory<HealFlag> {
  create(session: Session): HealFlag;
}

}
declare module 'com.sk89q.worldguard.session.handler.FarewellFlag' {
import { FarewellFlag } from 'com.sk89q.worldguard.session.handler';
import { Factory as com_sk89q_worldguard_session_handler_Handler_Factory } from 'com.sk89q.worldguard.session.handler.Handler';
import { Session } from 'com.sk89q.worldguard.session';
export class Factory extends com_sk89q_worldguard_session_handler_Handler_Factory<FarewellFlag> {
  create(session: Session): FarewellFlag;
}

}
declare module 'com.sk89q.worldguard.util.formatting.component' {
import { TextComponentProducer } from 'com.sk89q.worldedit.util.formatting.component';
import { BlacklistEvent } from 'com.sk89q.worldguard.blacklist.event';
export class Notify extends TextComponentProducer {
  constructor(cause: string, description: string);
}
export class BlacklistNotify extends Notify {
  constructor(event: BlacklistEvent, comment: string);
}

}
declare module 'com.sk89q.worldguard.bukkit.event.debug' {
import { StackTraceElement } from 'java.lang';
import { List } from 'java.util';
/**
 * Represents call to {@link Cancellable#setCancelled(boolean)}.
*/
export class CancelAttempt {
  /**
   * Create a new instance.
   *
   * @param before The cancellation flag before the call
   * @param after The cancellation flag after the call
   * @param stackTrace The stack trace
  */
  constructor(before: boolean, after: boolean, stackTrace: StackTraceElement[]);
  /**
   * Get the cancellation state before the call.
   *
   * @return Whether the event was cancelled before
  */
  getBefore(): boolean;
  /**
   * Get the cancellation state after the call.
   *
   * @return The new cancellation state
  */
  getAfter(): boolean;
  /**
   * Get the stack trace.
   *
   * @return The stack trace
  */
  getStackTrace(): StackTraceElement[];
}
/**
 * Logs attempts at cancellation.
*/
export class CancelLogger {
  /**
   * Log a call.
   *
   * @param before The cancellation flag before the call
   * @param after The cancellation flag after the call
   * @param stackTrace The stack trace
  */
  log(before: boolean, after: boolean, stackTrace: StackTraceElement[]): void;
  /**
   * Get an immutable list of cancels.
   *
   * @return An immutable list
  */
  getCancels(): CancelAttempt[];
}

}
declare module 'com.sk89q.worldguard.protection' {
import { RegionQuery, ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { Iterable } from 'java.lang';
import { Set, Iterator, Collection, List } from 'java.util';
import { LocalPlayer } from 'com.sk89q.worldguard';
import { Location } from 'com.sk89q.worldedit.util';
import { Result } from 'com.sk89q.worldguard.protection.FlagValueCalculator';
import { MapFlag, StateFlag, Flag } from 'com.sk89q.worldguard.protection.flags';
import { State } from 'com.sk89q.worldguard.protection.flags.StateFlag';
import { RegionAssociable, DelayedRegionOverlapAssociation as com_sk89q_worldguard_protection_association_DelayedRegionOverlapAssociation } from 'com.sk89q.worldguard.protection.association';
/**
 * An implementation that calculates flags using a list of regions.
*/
export class RegionResultSet extends AbstractRegionSet {
  /**
   * Create a new region result set.
   *
   * The given list must not contain duplicates or the behavior of
   * this instance will be undefined.
   *
   * @param applicable the regions contained in this set
   * @param globalRegion the global region, set aside for special handling.
  */
  constructor(applicable: ProtectedRegion[], globalRegion: ProtectedRegion | null);
  /**
   * Create a new region result set.
   *
   * @param applicable the regions contained in this set
   * @param globalRegion the global region, set aside for special handling.
  */
  constructor(applicable: Set<ProtectedRegion>, globalRegion: ProtectedRegion | null);
  /**
   * Create a new region result set.
   *
   * The list of regions may be first sorted with
   * {@link NormativeOrders}. If that is the case, `sorted` should be
   * `true`. Otherwise, the list will be sorted in-place.
   * 
   * @param applicable the regions contained in this set
   * @param globalRegion the global region, set aside for special handling.
   * @param sorted true if the list is already sorted with {@link NormativeOrders}
  */
  constructor(applicable: ProtectedRegion[], globalRegion: ProtectedRegion | null, sorted: boolean);
  isVirtual(): boolean;
  queryState(subject: RegionAssociable | null, ...flags: StateFlag[]): State | null;
  queryValue<V>(subject: RegionAssociable | null, flag: Flag<V>): V | null;
  queryAllValues<V>(subject: RegionAssociable | null, flag: Flag<V>): Collection<V>;
  queryMapValue<V, K>(subject: RegionAssociable | null, flag: MapFlag<K, V>, key: K): V | null;
  queryMapValue<V, K>(subject: RegionAssociable | null, flag: MapFlag<K, V>, key: K, fallback: Flag<V>): V | null;
  isOwnerOfAll(player: LocalPlayer): boolean;
  isMemberOfAll(player: LocalPlayer): boolean;
  size(): number;
  getRegions(): Set<ProtectedRegion>;
  iterator(): Iterator<ProtectedRegion>;
  /**
   * Create a new instance using a list of regions that is known to
   * already be sorted by priority descending.
   *
   * @param regions a list of regions
   * @param globalRegion a global region
   * @return an instance
  */
  static fromSortedList(regions: ProtectedRegion[], globalRegion: ProtectedRegion | null): RegionResultSet;
}
/**
 * A region set that is to be used when region data has failed. Operations
 * are blocked.
*/
export class FailedLoadRegionSet extends AbstractRegionSet {
  isVirtual(): boolean;
  queryValue<V>(subject: RegionAssociable | null, flag: Flag<V>): V | null;
  queryMapValue<V, K>(subject: RegionAssociable | null, flag: MapFlag<K, V>, key: K): V | null;
  queryMapValue<V, K>(subject: RegionAssociable | null, flag: MapFlag<K, V>, key: K, fallback: Flag<V> | null): V | null;
  queryAllValues<V>(subject: RegionAssociable | null, flag: Flag<V>): Collection<V>;
  isOwnerOfAll(player: LocalPlayer): boolean;
  isMemberOfAll(player: LocalPlayer): boolean;
  size(): number;
  getRegions(): Set<ProtectedRegion>;
  iterator(): Iterator<ProtectedRegion>;
  /**
   * Get an instance.
   *
   * @return an instance
  */
  static getInstance(): FailedLoadRegionSet;
}
/**
 * Determines that the association to a region is `OWNER` if the input
 * region is in a set of source regions.
 *
 * This class only performs a spatial query if its
 * {@link #getAssociation(List)} method is called.
 *
 * @deprecated Use {@link com.sk89q.worldguard.protection.association.DelayedRegionOverlapAssociation} instead. This class is mis-packaged.
*/
export class DelayedRegionOverlapAssociation extends com_sk89q_worldguard_protection_association_DelayedRegionOverlapAssociation {
  /**
   * Create a new instance.
   * @param query the query
   * @param location the location
  */
  constructor(query: RegionQuery, location: Location);
  /**
   * Create a new instance.
   * @param query the query
   * @param location the location
   * @param useMaxPriorityAssociation whether to use the max priority from regions to determine association
  */
  constructor(query: RegionQuery, location: Location, useMaxPriorityAssociation: boolean);
}
export class AbstractRegionSet extends ApplicableRegionSet {
  /**
   * Test whether the (effective) value for a list of state flags equals
   * `ALLOW`.
   *
   * `subject` can be non-null to satisfy region group requirements,
   * otherwise it will be assumed that the caller that is not a member of any
   * regions. (Flags on a region can be changed so that they only apply
   * to certain users.) The subject argument is required if the
   * {@link Flags#BUILD} flag is in the list of flags.
   *
   * @param subject an optional subject, which would be used to determine the region groups that apply
   * @param flags a list of flags to check
   * @return true if the result was `ALLOW`
   * @see #queryState(RegionAssociable, StateFlag...)
  */
  testState(subject: RegionAssociable | null, ...flags: StateFlag[]): boolean;
  /**
   * Get the (effective) value for a list of state flags. The rules of
   * states is observed here; that is, `DENY` overrides `ALLOW`,
   * and `ALLOW` overrides `NONE`. One flag may override another.
   *
   * `subject` can be non-null to satisfy region group requirements,
   * otherwise it will be assumed that the caller that is not a member of any
   * regions. (Flags on a region can be changed so that they only apply
   * to certain users.) The subject argument is required if the
   * {@link Flags#BUILD} flag is in the list of flags.
   *
   * @param subject an optional subject, which would be used to determine the region groups that apply
   * @param flags a list of flags to check
   * @return a state
  */
  queryState(subject: RegionAssociable | null, ...flags: StateFlag[]): State | null;
}
/**
 * Calculates the value of a flag given a list of regions and an optional
 * global region.
 *
 * Since there may be multiple overlapping regions, regions with
 * differing priorities, regions with inheritance, flags with region groups
 * assigned to them, and much more, the task of calculating the "effective"
 * value of a flag is far from trivial. This class abstracts away the
 * difficult with a number of methods for performing these calculations.
*/
export class FlagValueCalculator {
  /**
   * Create a new instance.
   *
   * @param regions a list of applicable regions that must be sorted according to {@link NormativeOrders}
   * @param globalRegion an optional global region (null to not use one)
  */
  constructor(regions: ProtectedRegion[], globalRegion: ProtectedRegion | null);
  /**
   * Return the membership status of the given subject, indicating
   * whether there are no (counted) regions in the list of regions,
   * whether the subject is a member of all (counted) regions, or
   * whether the subject is not a member of all (counted) regions.
   *
   * A region is "counted" if it doesn't have the
   * {@link Flags#PASSTHROUGH} flag set to `ALLOW` and if
   * there isn't another "counted" region with a higher priority.
   * (The explicit purpose of the PASSTHROUGH flag is to have the
   * region be skipped over in this check.)
   *
   * This method is mostly for internal use. It's not particularly
   * useful.
   *
   * @param subject the subject
   * @return the membership result
  */
  getMembership(subject: RegionAssociable): Result;
  /**
   * Get the effective value for a list of state flags. The rules of
   * states is observed here; that is, `DENY` overrides `ALLOW`,
   * and `ALLOW` overrides `NONE`.
   *
   * A subject can be provided that is used to determine whether the value
   * of a flag on a particular region should be used. For example, if a
   * flag's region group is set to {@link RegionGroup#MEMBERS} and the given
   * subject is not a member, then the region would be skipped when
   * querying that flag. If `null` is provided for the subject, then
   * only flags that use {@link RegionGroup#ALL},
   * {@link RegionGroup#NON_MEMBERS}, etc. will apply.
   *
   * @param subject an optional subject, which would be used to determine the region group to apply
   * @param flags a list of flags to check
   * @return a state
  */
  queryState(subject: RegionAssociable | null, ...flags: StateFlag[]): State | null;
  /**
   * Get the effective value for a list of state flags. The rules of
   * states is observed here; that is, `DENY` overrides `ALLOW`,
   * and `ALLOW` overrides `NONE`.
   *
   * This method is the same as
   * {@link #queryState(RegionAssociable, StateFlag...)}.
   *
   * @param subject an optional subject, which would be used to determine the region group to apply
   * @param flag a flag to check
   * @return a state
  */
  queryState(subject: RegionAssociable | null, flag: StateFlag): State | null;
  /**
   * Get the effective value for a flag. If there are multiple values
   * (for example, if there are multiple regions with the same priority
   * but with different farewell messages set, there would be multiple
   * completing values), then the selected (or "winning") value will depend
   * on the flag type.
   *
   * Only some flag types actually have a strategy for picking the
   * "best value." For most types, the actual value that is chosen to be
   * returned is undefined (it could be any value). As of writing, the only
   * type of flag that can consistently return the same 'best' value is
   * {@link StateFlag}.
   *
   * A subject can be provided that is used to determine whether the value
   * of a flag on a particular region should be used. For example, if a
   * flag's region group is set to {@link RegionGroup#MEMBERS} and the given
   * subject is not a member, then the region would be skipped when
   * querying that flag. If `null` is provided for the subject, then
   * only flags that use {@link RegionGroup#ALL},
   * {@link RegionGroup#NON_MEMBERS}, etc. will apply.
   *
   * @param subject an optional subject, which would be used to determine the region group to apply
   * @param flag the flag
   * @return a value, which could be `null`
  */
  queryValue<V>(subject: RegionAssociable | null, flag: Flag<V>): V | null;
  /**
   * Get the effective value for a key in a {@link MapFlag}. If there are multiple values
   * (for example, if there are multiple regions with the same priority
   * but with different farewell messages set, there would be multiple
   * completing values), then the selected (or "winning") value will be undefined.
   *
   * A subject can be provided that is used to determine whether the value
   * of a flag on a particular region should be used. For example, if a
   * flag's region group is set to {@link RegionGroup#MEMBERS} and the given
   * subject is not a member, then the region would be skipped when
   * querying that flag. If `null` is provided for the subject, then
   * only flags that use {@link RegionGroup#ALL},
   * {@link RegionGroup#NON_MEMBERS}, etc. will apply.
   *
   * @param subject an optional subject, which would be used to determine the region group to apply
   * @param flag the flag of type {@link MapFlag}
   * @param key the key for the map flag
   * @return a value, which could be `null`
  */
  queryMapValue<V, K>(subject: RegionAssociable | null, flag: MapFlag<K, V>, key: K, fallback: Flag<V>): V | null;
  getEffectiveMapValue<V, K>(region: ProtectedRegion, mapFlag: MapFlag<K, V>, key: K, subject: RegionAssociable): V | null;
  static getEffectiveMapValueOf<V, K>(region: ProtectedRegion, mapFlag: MapFlag<K, V>, key: K, subject: RegionAssociable): V | null;
  /**
   * Get the effective values for a flag, returning a collection of all
   * values. It is up to the caller to determine which value, if any,
   * from the collection will be used.
   *
   * A subject can be provided that is used to determine whether the value
   * of a flag on a particular region should be used. For example, if a
   * flag's region group is set to {@link RegionGroup#MEMBERS} and the given
   * subject is not a member, then the region would be skipped when
   * querying that flag. If `null` is provided for the subject, then
   * only flags that use {@link RegionGroup#ALL},
   * {@link RegionGroup#NON_MEMBERS}, etc. will apply.
   *
   * @param subject an optional subject, which would be used to determine the region group to apply
   * @param flag the flag
   * @return a collection of values
  */
  queryAllValues<V>(subject: RegionAssociable | null, flag: Flag<V>): Collection<V>;
  /**
   * Get the effective priority of a region, overriding a region's priority
   * when appropriate (i.e. with the global region).
   *
   * @param region the region
   * @return the priority
  */
  getPriority(region: ProtectedRegion): number;
  static getPriorityOf(region: ProtectedRegion): number;
  /**
   * Get a region's state flag, checking parent regions until a value for the
   * flag can be found (if one even exists).
   *
   * @param region the region
   * @param flag the flag
   * @param subject an subject object
   * @return the value
  */
  getEffectiveFlag<V>(region: ProtectedRegion, flag: Flag<V>, subject: RegionAssociable | null): V | null;
  static getEffectiveFlagOf<V>(region: ProtectedRegion, flag: Flag<V>, subject: RegionAssociable | null): V | null;
}
/**
 * A virtual region result set that is highly permissive, considering everyone
 * a member. Returned flag values are default values (when available).
*/
export class PermissiveRegionSet extends AbstractRegionSet {
  isVirtual(): boolean;
  queryValue<V>(subject: RegionAssociable | null, flag: Flag<V>): V | null;
  queryMapValue<V, K>(subject: RegionAssociable | null, flag: MapFlag<K, V>, key: K): V | null;
  queryMapValue<V, K>(subject: RegionAssociable | null, flag: MapFlag<K, V>, key: K, fallback: Flag<V> | null): V | null;
  queryAllValues<V>(subject: RegionAssociable | null, flag: Flag<V>): Collection<V>;
  isOwnerOfAll(player: LocalPlayer): boolean;
  isMemberOfAll(player: LocalPlayer): boolean;
  size(): number;
  getRegions(): Set<ProtectedRegion>;
  iterator(): Iterator<ProtectedRegion>;
  /**
   * Get an instance.
   *
   * @return an instance
  */
  static getInstance(): PermissiveRegionSet;
}
/**
 * Represents the effective set of flags, owners, and members for a given
 * spatial query.
 *
 * An instance of this can be created using the spatial query methods
 * available on {@link RegionManager}.
*/
export class ApplicableRegionSet extends Iterable<ProtectedRegion> {
  /**
   * Return whether this region set is a virtual set. A virtual set
   * does not contain real results.
   *
   * A virtual result may be returned if region data failed to load or
   * there was some special exception (i.e. the region bypass permission).
   * 
   *
   * Be sure to check the value of this flag if an instance of this
   * interface is being retrieved from RegionQuery as it may
   * return an instance of {@link PermissiveRegionSet} or
   * {@link FailedLoadRegionSet}, among other possibilities.
   *
   * @return true if loaded
   * @see FailedLoadRegionSet
  */
  isVirtual(): boolean;
  /**
   * Test whether the (effective) value for a list of state flags equals
   * `ALLOW`.
   *
   * `subject` can be non-null to satisfy region group requirements,
   * otherwise it will be assumed that the caller that is not a member of any
   * regions. (Flags on a region can be changed so that they only apply
   * to certain users.) The subject argument is required if the
   * {@link Flags#BUILD} flag is in the list of flags.
   *
   * @param subject an optional subject, which would be used to determine the region groups that apply
   * @param flags a list of flags to check
   * @return true if the result was `ALLOW`
   * @see #queryState(RegionAssociable, StateFlag...)
  */
  testState(subject: RegionAssociable | null, ...flags: StateFlag[]): boolean;
  /**
   * Get the (effective) value for a list of state flags. The rules of
   * states is observed here; that is, `DENY` overrides `ALLOW`,
   * and `ALLOW` overrides `NONE`. One flag may override another.
   *
   * `subject` can be non-null to satisfy region group requirements,
   * otherwise it will be assumed that the caller that is not a member of any
   * regions. (Flags on a region can be changed so that they only apply
   * to certain users.) The subject argument is required if the
   * {@link Flags#BUILD} flag is in the list of flags.
   *
   * @param subject an optional subject, which would be used to determine the region groups that apply
   * @param flags a list of flags to check
   * @return a state
  */
  queryState(subject: RegionAssociable | null, ...flags: StateFlag[]): State | null;
  /**
   * Get the effective value for a flag. If there are multiple values
   * (for example, multiple overlapping regions with
   * the same priority may have the same flag set), then the selected
   * (or "winning") value will depend on the flag type.
   *
   * Only some flag types actually have a strategy for picking the
   * "best value." For most types, the actual value that is chosen to be
   * returned is undefined (it could be any value). As of writing, the only
   * type of flag that actually has a strategy for picking a value is the
   * {@link StateFlag}.
   *
   * `subject` can be non-null to satisfy region group requirements,
   * otherwise it will be assumed that the caller that is not a member of any
   * regions. (Flags on a region can be changed so that they only apply
   * to certain users.) The subject argument is required if the
   * {@link Flags#BUILD} flag is the flag being queried.
   *
   * @param subject an optional subject, which would be used to determine the region group to apply
   * @param flag the flag
   * @return a value, which could be `null`
  */
  queryValue<V>(subject: RegionAssociable | null, flag: Flag<V>): V | null;
  /**
   * Get the effective value for a key in a {@link MapFlag}. If there are multiple values
   * (for example, if there are multiple regions with the same priority
   * but with different farewell messages set, there would be multiple
   * completing values), then the selected (or "winning") value will be undefined.
   *
   * A subject can be provided that is used to determine whether the value
   * of a flag on a particular region should be used. For example, if a
   * flag's region group is set to {@link RegionGroup#MEMBERS} and the given
   * subject is not a member, then the region would be skipped when
   * querying that flag. If `null` is provided for the subject, then
   * only flags that use {@link RegionGroup#ALL},
   * {@link RegionGroup#NON_MEMBERS}, etc. will apply.
   *
   * @param subject an optional subject, which would be used to determine the region group to apply
   * @param flag the flag of type {@link MapFlag}
   * @param key the key for the map flag
   * @return a value, which could be `null`
  */
  queryMapValue<V, K>(subject: RegionAssociable | null, flag: MapFlag<K, V>, key: K): V | null;
  /**
   * Get the effective value for a key in a {@link MapFlag}. If there are multiple values
   * (for example, if there are multiple regions with the same priority
   * but with different farewell messages set, there would be multiple
   * completing values), then the selected (or "winning") value will be undefined.
   *
   * A subject can be provided that is used to determine whether the value
   * of a flag on a particular region should be used. For example, if a
   * flag's region group is set to {@link RegionGroup#MEMBERS} and the given
   * subject is not a member, then the region would be skipped when
   * querying that flag. If `null` is provided for the subject, then
   * only flags that use {@link RegionGroup#ALL},
   * {@link RegionGroup#NON_MEMBERS}, etc. will apply.
   *
   * @param subject an optional subject, which would be used to determine the region group to apply
   * @param flag the flag of type {@link MapFlag}
   * @param key the key for the map flag
   * @return a value, which could be `null`
  */
  queryMapValue<V, K>(subject: RegionAssociable | null, flag: MapFlag<K, V>, key: K, fallback: Flag<V> | null): V | null;
  /**
   * Get the effective values for a flag, returning a collection of all
   * values. It is up to the caller to determine which value, if any,
   * from the collection will be used.
   *
   * `subject` can be non-null to satisfy region group requirements,
   * otherwise it will be assumed that the caller that is not a member of any
   * regions. (Flags on a region can be changed so that they only apply
   * to certain users.) The subject argument is required if the
   * {@link Flags#BUILD} flag is the flag being queried.
   *
   * @param subject an optional subject, which would be used to determine the region group to apply
   * @param flag the flag
   * @return a collection of values
  */
  queryAllValues<V>(subject: RegionAssociable | null, flag: Flag<V>): Collection<V>;
  /**
   * Test whether a player is an owner of all regions in this set.
   *
   * @param player the player
   * @return whether the player is an owner of all regions
  */
  isOwnerOfAll(player: LocalPlayer): boolean;
  /**
   * Test whether a player is an owner or member of all regions in this set.
   *
   * @param player the player
   * @return whether the player is a member of all regions
  */
  isMemberOfAll(player: LocalPlayer): boolean;
  /**
   * Get the number of regions that are included.
   *
   * @return the number of contained regions
  */
  size(): number;
  /**
   * Get an immutable set of regions that are included in this set.
   *
   * @return a set of regions
  */
  getRegions(): Set<ProtectedRegion>;
}

}
declare module 'com.sk89q.worldguard.bukkit.util' {
import { Method } from 'java.lang.reflect';
import { Logger } from 'java.util.logging';
import { ClassLoader, Class } from 'java.lang';
import { List, UUID } from 'java.util';
import { PlayerHandleFunction } from 'com.sk89q.worldguard.bukkit.util.InteropUtils';
import { Handler } from 'com.sk89q.worldguard.bukkit.util.HandlerTracer';
/**
 * Traces the owner of a handler.
*/
export class HandlerTracer {

}
/**
 * Utility methods to deal with events.
*/
export class Events {

}
/**
 * Validates that certain specified classes came from the same source as
 * a plugin.
 * This is copied from the same class in WorldEdit because unfortunately
 * trying to use WorldEdit's means we're susceptible to getting a bad version
 * of this class if another plugin shades it....which is exactly what we're
 * trying to detect and report.
*/
export class ClassSourceValidator {
  /**
   * Reports classes that have come from a different source.
   *
   * The warning is emitted to the log.
   *
   * @param classes The list of classes to check
  */
  reportMismatches(classes: Class<any>[]): void;
}
export class InteropUtils {

}
/**
 * Material utility class.
*/
export class Materials {

}
export class Entities {

}
/**
 * Utility methods to deal with blocks.
*/
export class Blocks {

}

}
declare module 'com.sk89q.worldguard.protection.managers.index.PriorityRTreeIndex' {
import { PriorityRTreeIndex } from 'com.sk89q.worldguard.protection.managers.index';
import { Function } from 'java.util.function';
/**
 * A factory for new instances using this index.
*/
export class Factory extends Function<string, PriorityRTreeIndex> {
  apply(name: string): PriorityRTreeIndex;
}

}
declare module 'com.sk89q.worldguard.protection.managers.index' {
import { ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { Set, Collection } from 'java.util';
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { MBRConverter, PRTree } from 'org.khelekore.prtree';
import { ConcurrentMap, TimeUnit } from 'java.util.concurrent';
import { RegionDifference, RemovalStrategy } from 'com.sk89q.worldguard.protection.managers';
import { ChunkState } from 'com.sk89q.worldguard.protection.managers.index.ChunkHashTable';
import { LongHashTable } from 'com.sk89q.worldguard.util.collect';
import { Predicate } from 'java.util.function';
import { ChangeTracked } from 'com.sk89q.worldguard.util';
/**
 * An index that stores regions in a hash map, which allows for fast lookup
 * by ID but O(n) performance for spatial queries.
 *
 * This implementation supports concurrency to the extent that
 * a {@link ConcurrentMap} does.
*/
export class HashMapIndex extends ConcurrentRegionIndex {
  addAll(regions: Collection<ProtectedRegion>): void;
  bias(chunkPosition: BlockVector2): void;
  biasAll(chunkPositions: Collection<BlockVector2>): void;
  forget(chunkPosition: BlockVector2): void;
  forgetAll(): void;
  add(region: ProtectedRegion): void;
  remove(id: string, strategy: RemovalStrategy): Set<ProtectedRegion>;
  contains(id: string): boolean;
  get(id: string): ProtectedRegion | null;
  apply(consumer: Predicate<ProtectedRegion>): void;
  applyContaining(position: BlockVector3, consumer: Predicate<ProtectedRegion>): void;
  applyIntersecting(region: ProtectedRegion, consumer: Predicate<ProtectedRegion>): void;
  size(): number;
  getAndClearDifference(): RegionDifference;
  setDirty(dirty: RegionDifference);
  values(): Collection<ProtectedRegion>;
  isDirty(): boolean;
  setDirty(dirty: boolean): void;
}
/**
 * An implementation of a region index that supports concurrent access.
 *
 * The mechanics of concurrent access should be similar to that of
 * {@link ConcurrentMap}. Spatial queries can lag behind changes on the data
 * for brief periods of time.
*/
export class ConcurrentRegionIndex extends RegionIndex {

}
/**
 * An index of regions to allow for fast lookups of regions by their ID and
 * through spatial queries.
 *
 * Indexes may be thread-unsafe.
*/
export class RegionIndex extends ChangeTracked {
  /**
   * Bias the given chunk for faster lookups (put it in a hash table, etc.).
   *
   * Implementations may choose to do nothing.
   *
   * @param chunkPosition the chunk position
  */
  bias(chunkPosition: BlockVector2): void;
  /**
   * Bias the given chunk for faster lookups (put it in a hash table, etc.).
   *
   * Implementations may choose to do nothing.
   *
   * @param chunkPosition the chunk position
  */
  biasAll(chunkPosition: Collection<BlockVector2>): void;
  /**
   * No longer bias the given chunk for faster lookup.
   *
   * @param chunkPosition the chunk position
  */
  forget(chunkPosition: BlockVector2): void;
  /**
   * Clearly all extra cache data created by any calls to
   * {@link #bias(BlockVector2)}.
  */
  forgetAll(): void;
  /**
   * Add a region to this index, replacing any existing one with the same
   * name (equality determined using {@link Normal}).
   *
   * The parents of the region will also be added to the index.
   *
   * @param region the region
  */
  add(region: ProtectedRegion): void;
  /**
   * Add a list of regions to this index, replacing any existing one
   * with the same name (equality determined using {@link Normal}).
   *
   * The parents of the region will also be added to the index.
   *
   * @param regions a collections of regions
  */
  addAll(regions: Collection<ProtectedRegion>): void;
  /**
   * Remove a region from the index with the given name.
   *
   * @param id the name of the region
   * @param strategy what to do with children
   * @return a list of removed regions where the first entry is the region specified by `id`
  */
  remove(id: string, strategy: RemovalStrategy): Set<ProtectedRegion>;
  /**
   * Test whether the index contains a region named by the given name
   * (equality determined using {@link Normal}).
   *
   * @param id the name of the region
   * @return true if the index contains the region
  */
  contains(id: string): boolean;
  /**
   * Get the region named by the given name (equality determined using
   * {@link Normal}).
   *
   * @param id the name of the region
   * @return a region or `null`
  */
  get(id: string): ProtectedRegion | null;
  /**
   * Apply the given predicate to all the regions in the index
   * until there are no more regions or the predicate returns false.
   *
   * @param consumer a predicate that returns true to continue iterating
  */
  apply(consumer: Predicate<ProtectedRegion>): void;
  /**
   * Apply the given predicate to all regions that contain the given
   * position until there are no more regions or the predicate returns false.
   *
   * @param position the position
   * @param consumer a predicate that returns true to continue iterating
  */
  applyContaining(position: BlockVector3, consumer: Predicate<ProtectedRegion>): void;
  /**
   * Apply the given predicate to all regions that intersect the given
   * region until there are no more regions or the predicate returns false.
   *
   * @param region the intersecting region
   * @param consumer a predicate that returns true to continue iterating
  */
  applyIntersecting(region: ProtectedRegion, consumer: Predicate<ProtectedRegion>): void;
  /**
   * Return the number of regions in the index.
   *
   * @return the number of regions
  */
  size(): number;
  /**
   * Get the list of changed or removed regions since last call and
   * clear those lists.
   *
   * @return the difference
  */
  getAndClearDifference(): RegionDifference;
  /**
   * Set the index to be dirty using the given difference.
   *
   * @param difference the difference
  */
  setDirty(dirty: RegionDifference);
  /**
   * Get an unmodifiable collection of regions stored in this index.
   *
   * @return a collection of regions
  */
  values(): Collection<ProtectedRegion>;
}
/**
 * Maintains a hash table for each chunk containing a list of regions that
 * are contained within that chunk, allowing for fast spatial lookup.
*/
export class ChunkHashTable extends ConcurrentRegionIndex {
  /**
   * Create a new instance.
   *
   * @param index the index
   * @param name
  */
  constructor(index: RegionIndex, name: string);
  /**
   * Waits until all currently executing background tasks complete.
   *
   * @param timeout the maximum time to wait
   * @param unit the time unit of the timeout argument
   * @return `true` if this executor terminated and
   *         `false` if the timeout elapsed before termination
   * @throws InterruptedException on interruption
  */
  awaitCompletion(timeout: number, unit: TimeUnit): boolean;
  /**
   * Bias the given chunk for faster lookups (put it in a hash table, etc.).
   *
   * Implementations may choose to do nothing.
   *
   * @param chunkPosition the chunk position
  */
  bias(chunkPosition: BlockVector2): void;
  /**
   * Bias the given chunk for faster lookups (put it in a hash table, etc.).
   *
   * Implementations may choose to do nothing.
   *
   * @param chunkPosition the chunk position
  */
  biasAll(chunkPositions: Collection<BlockVector2>): void;
  /**
   * No longer bias the given chunk for faster lookup.
   *
   * @param chunkPosition the chunk position
  */
  forget(chunkPosition: BlockVector2): void;
  /**
   * Clearly all extra cache data created by any calls to
   * {@link #bias(BlockVector2)}.
  */
  forgetAll(): void;
  /**
   * Add a region to this index, replacing any existing one with the same
   * name (equality determined using {@link Normal}).
   *
   * The parents of the region will also be added to the index.
   *
   * @param region the region
  */
  add(region: ProtectedRegion): void;
  /**
   * Add a list of regions to this index, replacing any existing one
   * with the same name (equality determined using {@link Normal}).
   *
   * The parents of the region will also be added to the index.
   *
   * @param regions a collections of regions
  */
  addAll(regions: Collection<ProtectedRegion>): void;
  /**
   * Remove a region from the index with the given name.
   *
   * @param id the name of the region
   * @param strategy what to do with children
   * @return a list of removed regions where the first entry is the region specified by `id`
  */
  remove(id: string, strategy: RemovalStrategy): Set<ProtectedRegion>;
  /**
   * Test whether the index contains a region named by the given name
   * (equality determined using {@link Normal}).
   *
   * @param id the name of the region
   * @return true if the index contains the region
  */
  contains(id: string): boolean;
  /**
   * Get the region named by the given name (equality determined using
   * {@link Normal}).
   *
   * @param id the name of the region
   * @return a region or `null`
  */
  get(id: string): ProtectedRegion | null;
  /**
   * Apply the given predicate to all the regions in the index
   * until there are no more regions or the predicate returns false.
   *
   * @param consumer a predicate that returns true to continue iterating
  */
  apply(consumer: Predicate<ProtectedRegion>): void;
  /**
   * Apply the given predicate to all regions that contain the given
   * position until there are no more regions or the predicate returns false.
   *
   * @param position the position
   * @param consumer a predicate that returns true to continue iterating
  */
  applyContaining(position: BlockVector3, consumer: Predicate<ProtectedRegion>): void;
  /**
   * Apply the given predicate to all regions that intersect the given
   * region until there are no more regions or the predicate returns false.
   *
   * @param region the intersecting region
   * @param consumer a predicate that returns true to continue iterating
  */
  applyIntersecting(region: ProtectedRegion, consumer: Predicate<ProtectedRegion>): void;
  /**
   * Return the number of regions in the index.
   *
   * @return the number of regions
  */
  size(): number;
  /**
   * Get the list of changed or removed regions since last call and
   * clear those lists.
   *
   * @return the difference
  */
  getAndClearDifference(): RegionDifference;
  /**
   * Set the index to be dirty using the given difference.
   *
   * @param difference the difference
  */
  setDirty(dirty: RegionDifference);
  /**
   * Get an unmodifiable collection of regions stored in this index.
   *
   * @return a collection of regions
  */
  values(): Collection<ProtectedRegion>;
  /**
   * Tests whether changes have been made.
   *
   * @return true if changes have been made
  */
  isDirty(): boolean;
  /**
   * Set whether changes have been made.
   *
   * @param dirty a new dirty state
  */
  setDirty(dirty: boolean): void;
}
/**
 * An implementation of an index that uses {@link HashMapIndex} for queries
 * by region name and a priority R-tree for spatial queries.
 *
 * At the moment, the R-tree is only utilized for the
 * {@link #applyContaining(BlockVector3, Predicate)} method, and the underlying
 * hash map-based index is used for the other spatial queries. In addition,
 * every modification to the index requires the entire R-tree to be rebuilt,
 * although this operation is reasonably quick.
 *
 * This implementation is as thread-safe as the underlying
 * {@link HashMapIndex}, although spatial queries may lag behind changes
 * for very brief periods of time as the tree is rebuilt.
*/
export class PriorityRTreeIndex extends HashMapIndex {
  constructor();
  applyContaining(position: BlockVector3, consumer: Predicate<ProtectedRegion>): void;
  applyIntersecting(region: ProtectedRegion, consumer: Predicate<ProtectedRegion>): void;
}

}
declare module 'com.sk89q.worldguard.commands' {
import { WorldGuard } from 'com.sk89q.worldguard';
import { TextComponent } from 'com.sk89q.worldedit.util.formatting.text';
import { Function } from 'java.util.function';
import { CommandContext } from 'com.sk89q.minecraft.util.commands';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
import { Sampler } from 'com.sk89q.worldguard.util.profiler.SamplerBuilder';
export class ProtectionCommands {
  constructor(worldGuard: WorldGuard);
  region(args: CommandContext, sender: Actor): void;
  worldGuard(args: CommandContext, sender: Actor): void;
}
export class DebuggingCommands {
  /**
   * Create a new instance.
   *
   * @param worldGuard The worldGuard instance
  */
  constructor(worldGuard: WorldGuard);
  fireBreakEvent(args: CommandContext, sender: Actor): void;
  firePlaceEvent(args: CommandContext, sender: Actor): void;
  fireInteractEvent(args: CommandContext, sender: Actor): void;
  fireDamageEvent(args: CommandContext, sender: Actor): void;
}
export class GeneralCommands {
  constructor(worldGuard: WorldGuard);
  god(args: CommandContext, sender: Actor): void;
  ungod(args: CommandContext, sender: Actor): void;
  heal(args: CommandContext, sender: Actor): void;
  slay(args: CommandContext, sender: Actor): void;
  locate(args: CommandContext, sender: Actor): void;
  stack(args: CommandContext, sender: Actor): void;
}
export class WorldGuardCommands {
  constructor(worldGuard: WorldGuard);
  version(args: CommandContext, sender: Actor): void;
  reload(args: CommandContext, sender: Actor): void;
  report(args: CommandContext, sender: Actor): void;
  profile(args: CommandContext, sender: Actor): void;
  stopProfile(args: CommandContext, sender: Actor): void;
  flushStates(args: CommandContext, sender: Actor): void;
  listRunningTasks(args: CommandContext, sender: Actor): void;
  debug(args: CommandContext, sender: Actor): void;
}
export class ToggleCommands {
  constructor(worldGuard: WorldGuard);
  stopFire(args: CommandContext, sender: Actor): void;
  allowFire(args: CommandContext, sender: Actor): void;
  stopLag(args: CommandContext, sender: Actor): void;
}
/**
 * Command-related utility methods.
*/
export class CommandUtils {
  /**
   * Replace color macros in a string.
   *
   * @param str the string
   * @return the new string
  */
  static replaceColorMacros(str: string): string;
  /**
   * Get the name of the given owner object.
   *
   * @param owner the owner object
   * @return a name
  */
  static getOwnerName(owner: any | null): string;
  /**
   * Return a function that accepts a string to send a message to the
   * given sender.
   *
   * @param sender the sender
   * @return a function
  */
  static messageFunction(sender: Actor): Function<string, any>;
  /**
   * Return a function that accepts a TextComponent to send a message to the
   * given sender.
   *
   * @param sender the sender
   * @return a function
  */
  static messageComponentFunction(sender: Actor): Function<TextComponent, any>;
}

}
declare module 'com.sk89q.worldguard.protection.managers.storage' {
import { Logger } from 'java.util.logging';
import { ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { Set, List, Map } from 'java.util';
import { Enum, Throwable, Exception } from 'java.lang';
import { FlagRegistry } from 'com.sk89q.worldguard.protection.flags.registry';
import { RegionDifference } from 'com.sk89q.worldguard.protection.managers';
/**
 * This class provides utility methods that may be helpful in the
 * implementation of region databases.
 *
 * @see RegionDatabase
*/
export class RegionDatabaseUtils {
  /**
   * Re-link parent regions on each provided region using the two
   * provided maps.
   *
   * @param regions the map of regions from which parent regions are found
   * @param parentSets a mapping of region to parent name
  */
  static relinkParents(regions: Map<string, ProtectedRegion>, parentSets: Map<ProtectedRegion, string>): void;
}
/**
 * An enumeration of supported drivers.
*/
export class DriverType extends Enum<DriverType> {
  static readonly YAML: DriverType;
  static readonly MYSQL: DriverType;
  static valueOf(name: string): DriverType;
  static values(): DriverType[];
}
/**
 * Thrown when a partial save is not supported.
*/
export class DifferenceSaveException extends StorageException {
  constructor();
  constructor(message: string);
  constructor(message: string, cause: Throwable);
  constructor(cause: Throwable);
}
/**
 * A region database that saves the memory to an in-memory {@link HashSet}.
 *
 * This implementation is thread-safe. Difference saves
 * are not supported.
*/
export class MemoryRegionDatabase extends RegionDatabase {
  /**
   * Get a displayable name for this store.
  */
  getName(): string;
  /**
   * Load all regions from storage and place them into the passed map.
   *
   * The map will only be modified from one thread. The keys of
   * each map entry will be in respect to the ID of the region but
   * transformed to be lowercase. Until this method returns, the map may not
   * be modified by any other thread simultaneously. If an exception is
   * thrown, then the state in which the map is left is undefined.
   *
   * The provided map should have reasonably efficient
   * `get()` and `put()` calls in order to maximize performance.
   * 
   *
   * @param flags a flag registry
   * @return a set of loaded regions
   * @throws StorageException thrown on read error
  */
  loadAll(flagRegistry: FlagRegistry): Set<ProtectedRegion>;
  /**
   * Replace all the data in the store with the given collection of regions.
   *
   * @param regions a set of regions
   * @throws StorageException thrown on write error
  */
  saveAll(regions: Set<ProtectedRegion>): void;
  /**
   * Perform a partial save that only commits changes, rather than the
   * entire region index.
   *
   * @param difference the difference
   * @throws DifferenceSaveException thrown if partial saves are not supported
   * @throws StorageException thrown on write error
  */
  saveChanges(difference: RegionDifference): void;
}
/**
 * Exceptions related to region stores inherit from this exception.
*/
export class StorageException extends Exception {
  constructor();
  constructor(message: string);
  constructor(message: string, cause: Throwable);
  constructor(cause: Throwable);
}
/**
 * A driver manages {@link RegionDatabase}s for several worlds. An instance
 * can return instances of a database for any given world.
 *
 * @see RegionDatabase
*/
export class RegionDriver {
  /**
   * Get a region database for a world.
   *
   * The given name should be a unique name for the world. Due to
   * legacy reasons, there are no stipulations on the case sensitivity
   * of the name. Historically, however, if the driver is a file-based
   * driver, case-sensitivity will vary on whether the underlying
   * filesystem is case-sensitive.
   *
   * This method should return quickly.
   *
   * @param name the name of the world, which may be case sensitive
   * @return the world
  */
  get(name: string): RegionDatabase;
  /**
   * Fetch all the region databases that have been stored using this driver.
   * Essentially, return a region database for all worlds that have had
   * regions saved for it in the past.
   *
   * As this may require a query to be performed, this method may block
   * for a prolonged period of time.
   *
   * @return a list of databases
   * @throws StorageException thrown if the fetch operation fails
  */
  getAll(): RegionDatabase[];
}
/**
 * A region database stores a set of regions for a single world.
 *
 * If there are multiple worlds, then there should be one region database
 * per world. To manage multiple region databases, consider using an
 * implementation of a {@link RegionDriver}.
 *
 * @see RegionDriver
*/
export class RegionDatabase {
  /**
   * Get a displayable name for this store.
  */
  getName(): string;
  /**
   * Load all regions from storage and place them into the passed map.
   *
   * The map will only be modified from one thread. The keys of
   * each map entry will be in respect to the ID of the region but
   * transformed to be lowercase. Until this method returns, the map may not
   * be modified by any other thread simultaneously. If an exception is
   * thrown, then the state in which the map is left is undefined.
   *
   * The provided map should have reasonably efficient
   * `get()` and `put()` calls in order to maximize performance.
   * 
   *
   * @param flags a flag registry
   * @return a set of loaded regions
   * @throws StorageException thrown on read error
  */
  loadAll(flags: FlagRegistry): Set<ProtectedRegion>;
  /**
   * Replace all the data in the store with the given collection of regions.
   *
   * @param regions a set of regions
   * @throws StorageException thrown on write error
  */
  saveAll(regions: Set<ProtectedRegion>): void;
  /**
   * Perform a partial save that only commits changes, rather than the
   * entire region index.
   *
   * @param difference the difference
   * @throws DifferenceSaveException thrown if partial saves are not supported
   * @throws StorageException thrown on write error
  */
  saveChanges(difference: RegionDifference): void;
}

}
declare module 'com.sk89q.worldguard.session.handler.GodMode' {
import { GodMode } from 'com.sk89q.worldguard.session.handler';
import { Factory as com_sk89q_worldguard_session_handler_Handler_Factory } from 'com.sk89q.worldguard.session.handler.Handler';
import { Session } from 'com.sk89q.worldguard.session';
export class Factory extends com_sk89q_worldguard_session_handler_Handler_Factory<GodMode> {
  create(session: Session): GodMode;
}

}
declare module 'com.sk89q.worldguard.blacklist.action' {
import { Enum } from 'java.lang';
import { BlacklistEvent } from 'com.sk89q.worldguard.blacklist.event';
import { BlacklistEntry, Blacklist } from 'com.sk89q.worldguard.blacklist';
export class RepeatGuardedAction extends Action {
  apply(event: BlacklistEvent, silent: boolean, repeating: boolean, forceRepeat: boolean): ActionResult;
}
export class DenyAction extends Action {
  apply(event: BlacklistEvent, silent: boolean, repeating: boolean, forceRepeat: boolean): ActionResult;
  static getInstance(): DenyAction;
}
export class LogAction extends RepeatGuardedAction {
  constructor(blacklist: Blacklist, entry: BlacklistEntry);
}
export class Action {
  apply(event: BlacklistEvent, silent: boolean, repeating: boolean, forceRepeat: boolean): ActionResult;
}
export class BanAction extends Action {
  constructor(entry: BlacklistEntry);
  apply(event: BlacklistEvent, silent: boolean, repeating: boolean, forceRepeat: boolean): ActionResult;
}
export class KickAction extends Action {
  constructor(entry: BlacklistEntry);
  apply(event: BlacklistEvent, silent: boolean, repeating: boolean, forceRepeat: boolean): ActionResult;
}
export class AllowAction extends Action {
  apply(event: BlacklistEvent, silent: boolean, repeating: boolean, forceRepeat: boolean): ActionResult;
  static getInstance(): AllowAction;
}
export class NotifyAction extends RepeatGuardedAction {
  constructor(blacklist: Blacklist, entry: BlacklistEntry);
}
export class ActionType extends Enum<ActionType> {
  static readonly ALLOW: ActionType;
  static readonly DENY: ActionType;
  static readonly BAN: ActionType;
  static readonly KICK: ActionType;
  static readonly LOG: ActionType;
  static readonly NOTIFY: ActionType;
  static readonly TELL: ActionType;
  static valueOf(name: string): ActionType;
  static values(): ActionType[];
  parseInput(blacklist: Blacklist, entry: BlacklistEntry): Action;
  getActionName(): string;
}
export class TellAction extends RepeatGuardedAction {
  constructor(entry: BlacklistEntry);
}
export class ActionResult extends Enum<ActionResult> {
  static readonly INHERIT: ActionResult;
  static readonly DENY: ActionResult;
  static readonly ALLOW: ActionResult;
  static readonly DENY_OVERRIDE: ActionResult;
  static readonly ALLOW_OVERRIDE: ActionResult;
  static valueOf(name: string): ActionResult;
  static values(): ActionResult[];
}

}
declare module 'com.sk89q.worldguard.util.concurrent' {
import { ExecutorService } from 'java.util.concurrent';
/**
 * Provides additional executors.
*/
export class EvenMoreExecutors {
  /**
   * Creates a thread pool that creates new threads as needed up to
   * a maximum number of threads, but will reuse previously constructed
   * threads when they are available.
   *
   * @param minThreads the minimum number of threads to have at a given time
   * @param maxThreads the maximum number of threads to have at a given time
   * @param queueSize the size of the queue before new submissions are rejected
   * @return the newly created thread pool
  */
  static newBoundedCachedThreadPool(minThreads: number, maxThreads: number, queueSize: number): ExecutorService;
  /**
   * Creates a thread pool that creates new threads as needed up to
   * a maximum number of threads, but will reuse previously constructed
   * threads when they are available.
   *
   * @param minThreads the minimum number of threads to have at a given time
   * @param maxThreads the maximum number of threads to have at a given time
   * @param queueSize the size of the queue before new submissions are rejected
   * @param threadFormat thread name formatter
   * @return the newly created thread pool
  */
  static newBoundedCachedThreadPool(minThreads: number, maxThreads: number, queueSize: number, threadFormat: string): ExecutorService;
}

}
declare module 'com.sk89q.worldguard.session.handler.ExitFlag' {
import { ExitFlag } from 'com.sk89q.worldguard.session.handler';
import { Factory as com_sk89q_worldguard_session_handler_Handler_Factory } from 'com.sk89q.worldguard.session.handler.Handler';
import { Session } from 'com.sk89q.worldguard.session';
export class Factory extends com_sk89q_worldguard_session_handler_Handler_Factory<ExitFlag> {
  create(session: Session): ExitFlag;
}

}
declare module 'com.sk89q.worldguard.session.handler.WeatherLockFlag' {
import { WeatherLockFlag } from 'com.sk89q.worldguard.session.handler';
import { Factory as com_sk89q_worldguard_session_handler_Handler_Factory } from 'com.sk89q.worldguard.session.handler.Handler';
import { Session } from 'com.sk89q.worldguard.session';
export class Factory extends com_sk89q_worldguard_session_handler_Handler_Factory<WeatherLockFlag> {
  create(session: Session): WeatherLockFlag;
}

}
declare module 'com.sk89q.worldguard.protection.util' {
import { ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { Set, List, UUID } from 'java.util';
import { Throwable, Exception } from 'java.lang';
import { Pattern } from 'java.util.regex';
import { RegionSelector, Region } from 'com.sk89q.worldedit.regions';
import { Callable } from 'java.util.concurrent';
import { ProfileService } from 'com.sk89q.worldguard.util.profile.resolver';
import { UserLocatorPolicy } from 'com.sk89q.worldguard.protection.util.DomainInputResolver';
import { DefaultDomain } from 'com.sk89q.worldguard.domains';
import { PriorityComparator } from 'com.sk89q.worldguard.protection.util.NormativeOrders';
/**
 * Thrown when there are unresolved names.
*/
export class UnresolvedNamesException extends Exception {
  constructor();
  constructor(message: string);
  constructor(message: string, cause: Throwable);
  constructor(cause: Throwable);
}
/**
 * Sorts a list of regions so that higher priority regions always take
 * precedence over lower priority ones, and after sorting by priority, so
 * child regions always take priority over their parent regions.
 *
 * For example, if the regions are a, aa, aaa, aab, aac, b, ba, bc, where
 * aa implies that the second 'a' is a child of the first 'a', the sorted
 * order must reflect the following properties (where regions on the
 * left of < appear before in the sorted list):
 *
 * 
 *     [aaa, aab, aac] < aa < a
 *     [ba, bc] < b
 * 
 *
 * In the case of "[aaa, aab, aac]," the relative order between these
 * regions is unimportant as they all share the same parent (aaa). The
 * following choices would be valid sorts:
 *
 * 
 *     aaa, aab, aac, aa, a, ba, bc, b
 *     aab, aaa, aac, aa, a, bc, ba, b
 *     bc, ba, b, aab, aaa, aac, aa, a
 *     aab, aaa, bc, aac, aa, ba, a, b
 * 
 *
 * These sorted lists are required for {@link FlagValueCalculator} and
 * some implementations of {@link ApplicableRegionSet}.
*/
export class NormativeOrders {
  static sort(regions: ProtectedRegion[]): void;
  static fromSet(regions: Set<ProtectedRegion>): ProtectedRegion[];
}
/**
 * A helper class to convert regions from WorldGuard to WorldEdit
*/
export class WorldEditRegionConverter {
  /**
   * Converts a ProtectedRegion to a WorldEdit Region, otherwise null if
   * the ProtectedRegion can't be converted to a RegionSelector.
   *
   * @param region the WorldGuard region
   * @return the WorldEdit Region
  */
  static convertToRegion(region: ProtectedRegion): Region;
  /**
   * Converts a ProtectedRegion to a WorldEdit RegionSelector, otherwise null if
   * the ProtectedRegion can't be converted to a RegionSelector.
   *
   * @param region the WorldGuard region
   * @return the WorldEdit Region
  */
  static convertToSelector(region: ProtectedRegion): RegionSelector;
}
/**
 * Resolves input for a domain (i.e. "player1 player2 <uuid> g:group").
*/
export class DomainInputResolver extends Callable<DefaultDomain> {
  /**
   * Create a new instance.
   *
   * @param profileService the profile service
   * @param input the input to parse
  */
  constructor(profileService: ProfileService, input: string[]);
  /**
   * Get the policy used for identifying users.
   *
   * @return the policy
  */
  getLocatorPolicy(): UserLocatorPolicy;
  /**
   * Set the policy used for identifying users.
   *
   * @param locatorPolicy the policy
  */
  setLocatorPolicy(locatorPolicy: UserLocatorPolicy);
  call(): DefaultDomain;
  /**
   * Try to parse a UUID locator from input.
   *
   * @param input the input
   * @return a UUID or `null` if the input is not a UUID
  */
  static parseUUID(input: string): UUID | null;
}

}
declare module 'com.sk89q.worldguard.bukkit.internal' {
import { TargetMatcher, Target } from 'com.sk89q.worldguard.blacklist.target';
/**
 * Utility methods for dealing with metadata on entities.
 *
 * WorldGuard is placed as the owner of all values.
*/
export class WGMetadata {

}
export class TargetMatcherSet {
  add(matcher: TargetMatcher): boolean;
  test(target: Target): boolean;
  toString(): string;
}

}
declare module 'com.sk89q.worldguard.protection.managers.index.HashMapIndex' {
import { HashMapIndex } from 'com.sk89q.worldguard.protection.managers.index';
import { Function } from 'java.util.function';
/**
 * A factory for new instances using this index.
*/
export class Factory extends Function<string, HashMapIndex> {
  apply(name: string): HashMapIndex;
}

}
declare module 'com.sk89q.worldguard.protection.flags' {
import { Logger } from 'java.util.logging';
import { ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { DateTimeFormatter } from 'java.time.format';
import { Vector3 } from 'com.sk89q.worldedit.math';
import { Set, Collection, List, UUID, Map } from 'java.util';
import { FlagContextBuilder } from 'com.sk89q.worldguard.protection.flags.FlagContext';
import { GameMode } from 'com.sk89q.worldedit.world.gamemode';
import { Association } from 'com.sk89q.worldguard.domains';
import { EntityType } from 'com.sk89q.worldedit.world.entity';
import { Instant } from 'java.time';
import { ApplicableRegionSet } from 'com.sk89q.worldguard.protection';
import { Enum, Number, Class, Exception } from 'java.lang';
import { LocalPlayer } from 'com.sk89q.worldguard';
import { Pattern } from 'java.util.regex';
import { FlagRegistry } from 'com.sk89q.worldguard.protection.flags.registry';
import { WeatherType } from 'com.sk89q.worldedit.world.weather';
import { Location } from 'com.sk89q.worldedit.util';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
import { State } from 'com.sk89q.worldguard.protection.flags.StateFlag';
import { Registry } from 'com.sk89q.worldedit.registry';
export class InvalidFlagFormat extends Exception {
  constructor(msg: string);
}
export class UUIDFlag extends Flag<UUID> {
  constructor(name: string, defaultGroup: RegionGroup | null);
  constructor(name: string);
  parseInput(context: FlagContext): UUID;
  unmarshal(o: any | null): UUID;
  marshal(o: UUID): any;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}
/**
 * Stores an Number.
*/
export class NumberFlag<T> extends Flag<T> {
  /**
   * Not recommended for public use. Will likely be moved when migrating to piston for commands.
   * @param values suggested values
  */
  setSuggestedValues(suggestedValues: Number[]);
  /**
   * Not recommended for public use. Will likely be moved when migrating to piston for commands.
   * @return suggested values
  */
  getSuggestedValues(): Number[];
}
/**
 * Stores an integer.
*/
export class IntegerFlag extends NumberFlag<number> {
  constructor(name: string, defaultGroup: RegionGroup);
  constructor(name: string);
  parseInput(context: FlagContext): number;
  unmarshal(o: any): number;
  marshal(o: number): any;
  /**
   * Convert a raw type that was loaded (from a YAML file, for example)
   * into the type that this flag uses.
   *
   * @param o The object
   * @return The unmarshalled type
  */
  unmarshal(o: any | null): T;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}
/**
 * Stores a command/
*/
export class CommandStringFlag extends Flag<string> {
  constructor(name: string, defaultGroup: RegionGroup);
  constructor(name: string);
  parseInput(context: FlagContext): string;
  unmarshal(o: any): string;
  marshal(o: string): any;
  /**
   * Convert a raw type that was loaded (from a YAML file, for example)
   * into the type that this flag uses.
   *
   * @param o The object
   * @return The unmarshalled type
  */
  unmarshal(o: any | null): T;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}
export class RegistryFlag<T> extends Flag<T> {
  constructor(name: string, registry: Registry<T>);
  constructor(name: string, defaultGroup: RegionGroup | null, registry: Registry<T>);
  parseInput(context: FlagContext): T;
  getRegistry(): Registry<T>;
  unmarshal(o: any | null): T;
  marshal(o: T): any;
}
/**
 * Stores a region group.
*/
export class RegionGroupFlag extends EnumFlag<RegionGroup> {
  constructor(name: string, def: RegionGroup);
  getDefault(): RegionGroup;
  detectValue(input: string): RegionGroup;
  static isMember(region: ProtectedRegion, group: RegionGroup, player: LocalPlayer | null): boolean;
  static isMember(set: ApplicableRegionSet, group: RegionGroup | null, player: LocalPlayer): boolean;
}
export class FlagUtil {
  /**
   * Marshal a value of flag values into a map of raw values.
   *
   * @param values The unmarshalled flag values map
   * @return The raw values map
  */
  static marshal(values: Map<Flag<any>, any>): Map<string, any>;
}
/**
 * Stores a bi-state value.
*/
export class StateFlag extends Flag<State> {
  constructor(name: string, def: boolean, defaultGroup: RegionGroup);
  constructor(name: string, def: boolean);
  getDefault(): State;
  hasConflictStrategy(): boolean;
  chooseValue(values: Collection<State>): State | null;
  /**
   * Whether setting this flag to {@link State#ALLOW} is prevented on
   * the global region.
   *
   * This value is only changed, at least in WorldGuard, for the
   * {@link Flags#BUILD} flag.
   *
   * @return Whether `ALLOW` is prevented
  */
  preventsAllowOnGlobal(): boolean;
  parseInput(context: FlagContext): State;
  unmarshal(o: any): State;
  marshal(o: State): any;
  /**
   * Test whether at least one of the given states is `ALLOW`
   * but none are set to `DENY`.
   *
   * @param states zero or more states
   * @return true if the condition is matched
  */
  static test(...states: State[]): boolean;
  /**
   * Combine states, letting `DENY` override `ALLOW` and
   * `ALLOW` override `NONE` (or null).
   *
   * @param states zero or more states
   * @return the new state
  */
  static combine(...states: State[]): State | null;
  /**
   * Combine states, letting `DENY` override `ALLOW` and
   * `ALLOW` override `NONE` (or null).
   *
   * @param states zero or more states
   * @return the new state
  */
  static combine(states: Collection<State>): State | null;
  /**
   * Turn a boolean into either `NONE` (null) or `ALLOW` if
   * the boolean is false or true, respectively.
   *
   * @param flag a boolean value
   * @return a state
  */
  static allowOrNone(flag: boolean): State | null;
  /**
   * Turn `DENY` into `NONE` (null).
   *
   * @param state a state
   * @return a state
  */
  static denyToNone(state: State): State | null;
  /**
   * Convert a raw type that was loaded (from a YAML file, for example)
   * into the type that this flag uses.
   *
   * @param o The object
   * @return The unmarshalled type
  */
  unmarshal(o: any | null): T;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}
/**
 * Stores doubles.
*/
export class DoubleFlag extends NumberFlag<number> {
  constructor(name: string, defaultGroup: RegionGroup);
  constructor(name: string);
  parseInput(context: FlagContext): number;
  unmarshal(o: any): number;
  marshal(o: number): any;
  /**
   * Convert a raw type that was loaded (from a YAML file, for example)
   * into the type that this flag uses.
   *
   * @param o The object
   * @return The unmarshalled type
  */
  unmarshal(o: any | null): T;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}
/**
 * A grouping of region membership types.
*/
export class RegionGroup extends Enum<RegionGroup> {
  static readonly MEMBERS: RegionGroup;
  static readonly OWNERS: RegionGroup;
  static readonly NON_MEMBERS: RegionGroup;
  static readonly NON_OWNERS: RegionGroup;
  static readonly ALL: RegionGroup;
  static readonly NONE: RegionGroup;
  static valueOf(name: string): RegionGroup;
  static values(): RegionGroup[];
  /**
   * Test whether this group contains the given membership status.
   *
   * @param association membership status
   * @return true if contained
  */
  contains(association: Association): boolean;
}
/**
 * Stores an entity type.
 * @deprecated replaced by {@link RegistryFlag}, will be removed in WorldGuard 8
*/
export class EntityTypeFlag extends Flag<EntityType> {
  parseInput(context: FlagContext): EntityType;
  unmarshal(o: any | null): EntityType;
  marshal(o: EntityType): any;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}
/**
 * Stores a string.
*/
export class StringFlag extends Flag<string> {
  constructor(name: string);
  constructor(name: string, defaultValue: string);
  constructor(name: string, defaultGroup: RegionGroup);
  constructor(name: string, defaultGroup: RegionGroup, defaultValue: string);
  getDefault(): string | null;
  parseInput(context: FlagContext): string;
  unmarshal(o: any): string;
  marshal(o: string): any;
  /**
   * Convert a raw type that was loaded (from a YAML file, for example)
   * into the type that this flag uses.
   *
   * @param o The object
   * @return The unmarshalled type
  */
  unmarshal(o: any | null): T;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}
export class LocationFlag extends Flag<Location> {
  constructor(name: string, defaultGroup: RegionGroup);
  constructor(name: string);
  parseInput(context: FlagContext): Location;
  unmarshal(o: any): Location;
  marshal(o: Location): any;
  /**
   * Convert a raw type that was loaded (from a YAML file, for example)
   * into the type that this flag uses.
   *
   * @param o The object
   * @return The unmarshalled type
  */
  unmarshal(o: any | null): T;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}
/**
 * Stores an enum value.
*/
export class EnumFlag<T> extends Flag<T> {
  constructor(name: string, enumClass: Class<T>, defaultGroup: RegionGroup);
  constructor(name: string, enumClass: Class<T>);
  /**
   * Get the enum class.
   *
   * @return the enum class
  */
  getEnumClass(): Class<T>;
  /**
   * Fuzzy detect the value if the value is not found.
   *
   * @param input string input
   * @return value or null
  */
  detectValue(input: string): T;
  parseInput(context: FlagContext): T;
  unmarshal(o: any): T;
  marshal(o: T): any;
  /**
   * Convert a raw type that was loaded (from a YAML file, for example)
   * into the type that this flag uses.
   *
   * @param o The object
   * @return The unmarshalled type
  */
  unmarshal(o: any | null): T;
}
/**
 * Stores a set of types.
*/
export class SetFlag<T> extends Flag<Set<T>> {
  constructor(name: string, defaultGroup: RegionGroup, subFlag: Flag<T>);
  constructor(name: string, subFlag: Flag<T>);
  /**
   * Get the flag that is stored in this flag.
   *
   * @return the stored flag type
  */
  getType(): Flag<T>;
  parseInput(context: FlagContext): Set<T>;
  unmarshal(o: any): Set<T>;
  marshal(o: Set<T>): any;
  /**
   * Convert a raw type that was loaded (from a YAML file, for example)
   * into the type that this flag uses.
   *
   * @param o The object
   * @return The unmarshalled type
  */
  unmarshal(o: any | null): T;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}
export class FlagContext {
  static create(): FlagContextBuilder;
  put(name: string, value: any): void;
  getSender(): Actor;
  getUserInput(): string;
  /**
   * Gets the CommandSender as a player.
   *
   * @return Player
   * @throws InvalidFlagFormat if the sender is not a player
  */
  getPlayerSender(): LocalPlayer;
  getUserInputAsInt(): number;
  getUserInputAsDouble(): number;
  /**
   * Get an object from the context by key name.
   * May return null if the object does not exist in the context.
   *
   * @param name key name of the object
   * @return the object matching the key, or null
  */
  get(name: string): any | null;
  /**
   * Get an object from the context by key name.
   * Will only return null if
   *  a) you provide null as the default
   *  b) the key has explicity been set to null
   *
   * @param name key name of the object
   * @return the object matching the key
  */
  get(name: string, defaultValue: any): any | null;
  /**
   * Create a copy of this FlagContext, with optional substitutions for values
   *
   * If any supplied variable is null, it will be ignored.
   * If a map is supplied, it will override this FlagContext's values of the same key,
   * but unprovided keys will not be overriden and will be returned as shallow copies.
   *
   * @param commandSender CommandSender for the new FlagContext to run under
   * @param s String of the user input for the new FlagContext
   * @param values map of values to override from the current FlagContext
   * @return a copy of this FlagContext
  */
  copyWith(commandSender: Actor | null, s: string | null, values: Map<string, any> | null): FlagContext;
}
/**
 * The flags that are used in WorldGuard.
*/
export class Flags {
  static readonly INBUILT_FLAGS: string[];
  static readonly PASSTHROUGH: StateFlag;
  static readonly NONPLAYER_PROTECTION_DOMAINS: SetFlag<string>;
  static readonly BUILD: StateFlag;
  static readonly BLOCK_BREAK: StateFlag;
  static readonly BLOCK_PLACE: StateFlag;
  static readonly USE: StateFlag;
  static readonly INTERACT: StateFlag;
  static readonly DAMAGE_ANIMALS: StateFlag;
  static readonly PVP: StateFlag;
  static readonly SLEEP: StateFlag;
  static readonly RESPAWN_ANCHORS: StateFlag;
  static readonly TNT: StateFlag;
  static readonly CHEST_ACCESS: StateFlag;
  static readonly PLACE_VEHICLE: StateFlag;
  static readonly DESTROY_VEHICLE: StateFlag;
  static readonly LIGHTER: StateFlag;
  static readonly RIDE: StateFlag;
  static readonly POTION_SPLASH: StateFlag;
  static readonly ITEM_FRAME_ROTATE: StateFlag;
  static readonly TRAMPLE_BLOCKS: StateFlag;
  static readonly FIREWORK_DAMAGE: StateFlag;
  static readonly USE_ANVIL: StateFlag;
  static readonly USE_DRIPLEAF: StateFlag;
  static readonly ITEM_PICKUP: StateFlag;
  static readonly ITEM_DROP: StateFlag;
  static readonly EXP_DROPS: StateFlag;
  static readonly MOB_DAMAGE: StateFlag;
  static readonly CREEPER_EXPLOSION: StateFlag;
  static readonly ENDERDRAGON_BLOCK_DAMAGE: StateFlag;
  static readonly GHAST_FIREBALL: StateFlag;
  static readonly OTHER_EXPLOSION: StateFlag;
  static readonly WITHER_DAMAGE: StateFlag;
  static readonly ENDER_BUILD: StateFlag;
  static readonly SNOWMAN_TRAILS: StateFlag;
  static readonly RAVAGER_RAVAGE: StateFlag;
  static readonly ENTITY_PAINTING_DESTROY: StateFlag;
  static readonly ENTITY_ITEM_FRAME_DESTROY: StateFlag;
  static readonly MOB_SPAWNING: StateFlag;
  static readonly DENY_SPAWN: SetFlag<EntityType>;
  static readonly PISTONS: StateFlag;
  static readonly FIRE_SPREAD: StateFlag;
  static readonly LAVA_FIRE: StateFlag;
  static readonly LIGHTNING: StateFlag;
  static readonly SNOW_FALL: StateFlag;
  static readonly SNOW_MELT: StateFlag;
  static readonly ICE_FORM: StateFlag;
  static readonly ICE_MELT: StateFlag;
  static readonly FROSTED_ICE_MELT: StateFlag;
  static readonly FROSTED_ICE_FORM: StateFlag;
  static readonly MUSHROOMS: StateFlag;
  static readonly LEAF_DECAY: StateFlag;
  static readonly GRASS_SPREAD: StateFlag;
  static readonly MYCELIUM_SPREAD: StateFlag;
  static readonly VINE_GROWTH: StateFlag;
  static readonly ROCK_GROWTH: StateFlag;
  static readonly CROP_GROWTH: StateFlag;
  static readonly SOIL_DRY: StateFlag;
  static readonly CORAL_FADE: StateFlag;
  static readonly WATER_FLOW: StateFlag;
  static readonly LAVA_FLOW: StateFlag;
  static readonly WEATHER_LOCK: RegistryFlag<WeatherType>;
  static readonly TIME_LOCK: StringFlag;
  static readonly SEND_CHAT: StateFlag;
  static readonly RECEIVE_CHAT: StateFlag;
  static readonly BLOCKED_CMDS: SetFlag<string>;
  static readonly ALLOWED_CMDS: SetFlag<string>;
  static readonly TELE_LOC: LocationFlag;
  static readonly SPAWN_LOC: LocationFlag;
  /**
   * @deprecated The type of this flag will change from a StringFlag to a ComponentFlag to support JSON text
   *              in a future release. If you depend on the type of this flag, take proper precaution for future breakage.
  */
  static readonly TELE_MESSAGE: StringFlag;
  static readonly INVINCIBILITY: StateFlag;
  static readonly FALL_DAMAGE: StateFlag;
  static readonly HEALTH_REGEN: StateFlag;
  static readonly HUNGER_DRAIN: StateFlag;
  static readonly ENTRY: StateFlag;
  static readonly EXIT: StateFlag;
  static readonly EXIT_OVERRIDE: BooleanFlag;
  static readonly EXIT_VIA_TELEPORT: StateFlag;
  static readonly ENDERPEARL: StateFlag;
  static readonly CHORUS_TELEPORT: StateFlag;
  /**
   * @deprecated The type of this flag will change from a StringFlag to a ComponentFlag to support JSON text
   *              in a future release. If you depend on the type of this flag, take proper precaution for future breakage.
  */
  static readonly GREET_MESSAGE: StringFlag;
  /**
   * @deprecated The type of this flag will change from a StringFlag to a ComponentFlag to support JSON text
   *              in a future release. If you depend on the type of this flag, take proper precaution for future breakage.
  */
  static readonly FAREWELL_MESSAGE: StringFlag;
  /**
   * @deprecated The type of this flag will change from a StringFlag to a ComponentFlag to support JSON text
   *              in a future release. If you depend on the type of this flag, take proper precaution for future breakage.
  */
  static readonly GREET_TITLE: StringFlag;
  /**
   * @deprecated The type of this flag will change from a StringFlag to a ComponentFlag to support JSON text
   *              in a future release. If you depend on the type of this flag, take proper precaution for future breakage.
  */
  static readonly FAREWELL_TITLE: StringFlag;
  static readonly NOTIFY_ENTER: BooleanFlag;
  static readonly NOTIFY_LEAVE: BooleanFlag;
  static readonly GAME_MODE: RegistryFlag<GameMode>;
  static readonly HEAL_DELAY: IntegerFlag;
  static readonly HEAL_AMOUNT: IntegerFlag;
  static readonly MIN_HEAL: DoubleFlag;
  static readonly MAX_HEAL: DoubleFlag;
  static readonly FEED_DELAY: IntegerFlag;
  static readonly FEED_AMOUNT: IntegerFlag;
  static readonly MIN_FOOD: IntegerFlag;
  static readonly MAX_FOOD: IntegerFlag;
  /**
   * @deprecated The type of this flag will change from a StringFlag to a ComponentFlag to support JSON text
   *              in a future release. If you depend on the type of this flag, take proper precaution for future breakage.
  */
  static readonly DENY_MESSAGE: StringFlag;
  /**
   * @deprecated The type of this flag will change from a StringFlag to a ComponentFlag to support JSON text
   *              in a future release. If you depend on the type of this flag, take proper precaution for future breakage.
  */
  static readonly ENTRY_DENY_MESSAGE: StringFlag;
  /**
   * @deprecated The type of this flag will change from a StringFlag to a ComponentFlag to support JSON text
   *              in a future release. If you depend on the type of this flag, take proper precaution for future breakage.
  */
  static readonly EXIT_DENY_MESSAGE: StringFlag;
  /**
   * Try to match the flag with the given ID using a fuzzy name match.
   *
   * @param flagRegistry the flag registry
   * @param id the flag ID
   * @return a flag, or null
  */
  static fuzzyMatchFlag(flagRegistry: FlagRegistry, id: string): Flag<any>;
  /**
   * Dummy method to call that initialises the class.
  */
  static registerAll(): void;
}
/**
 * Stores an weather type.
 * @deprecated replaced by {@link RegistryFlag}, will be removed in WorldGuard 8
*/
export class WeatherTypeFlag extends Flag<WeatherType> {
  parseInput(context: FlagContext): WeatherType;
  unmarshal(o: any | null): WeatherType;
  marshal(o: WeatherType): any;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}
/**
 * Stores a vector.
*/
export class VectorFlag extends Flag<Vector3> {
  constructor(name: string, defaultGroup: RegionGroup);
  constructor(name: string);
  parseInput(context: FlagContext): Vector3;
  unmarshal(o: any): Vector3;
  marshal(o: Vector3): any;
  /**
   * Convert a raw type that was loaded (from a YAML file, for example)
   * into the type that this flag uses.
   *
   * @param o The object
   * @return The unmarshalled type
  */
  unmarshal(o: any | null): T;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}
/**
 * Stores an gamemode type.
 * @deprecated replaced by {@link RegistryFlag}, will be removed in WorldGuard 8
*/
export class GameModeTypeFlag extends Flag<GameMode> {
  parseInput(context: FlagContext): GameMode;
  unmarshal(o: any | null): GameMode;
  marshal(o: GameMode): any;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}
/**
 * Stores a timestamp.
*/
export class TimestampFlag extends Flag<Instant> {
  constructor(name: string, defaultGroup: RegionGroup | null);
  constructor(name: string);
  parseInput(context: FlagContext): Instant;
  unmarshal(o: any | null): Instant;
  marshal(o: Instant): any;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}
/**
 * Stores a key value map of typed {@link Flag}s.
*/
export class MapFlag<K, V> extends Flag<Map<K, V>> {
  constructor(name: string, keyFlag: Flag<K>, valueFlag: Flag<V>);
  constructor(name: string, defaultGroup: RegionGroup | null, keyFlag: Flag<K>, valueFlag: Flag<V>);
  /**
   * Get the flag that is stored as the key flag type.
   *
   * @return The key flag type.
  */
  getKeyFlag(): Flag<K>;
  /**
   * Get the flag type that is stored as values.
   *
   * @return The value flag type.
  */
  getValueFlag(): Flag<V>;
  parseInput(context: FlagContext): Map<K, V>;
  unmarshal(o: any | null): Map<K, V>;
  marshal(o: Map<K, V>): any;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}
/**
 * A flag carries extra data on a region.
 *
 * Each flag implementation is a singleton and must be registered with a
 * {@link FlagRegistry} to be useful. Flag values are stored as their
 * proper data type, but they are first "loaded" by calling
 * {@link #unmarshal(Object)}. On save, the objects are fed
 * through {@link #marshal(Object)} and then saved.
*/
export class Flag<T> {
  /**
   * Get the name of the flag.
   *
   * @return The name of the flag
  */
  getName(): string;
  /**
   * Get the default value.
   *
   * @return The default value, if one exists, otherwise `null` may be returned
  */
  getDefault(): T | null;
  /**
   * Given a list of values, choose the best one.
   *
   * If there is no "best value" defined, then the first value should
   * be returned. The default implementation returns the first value. If
   * an implementation does have a strategy defined, then
   * {@link #hasConflictStrategy()} should be overridden too.
   *
   * @param values A collection of values
   * @return The chosen value
  */
  chooseValue(values: Collection<T>): T | null;
  /**
   * Whether the flag can take a list of values and choose a "best one."
   *
   * This is the case with the {@link StateFlag} where `DENY`
   * overrides `ALLOW`, but most flags just return the
   * first result from a list.
   *
   * This flag is primarily used to optimize flag lookup in
   * {@link FlagValueCalculator}.
   *
   * @return Whether a best value can be chosen
  */
  hasConflictStrategy(): boolean;
  /**
   * Whether the flag implicitly has a value set as long as
   * {@link Flags#PASSTHROUGH} is not set.
   *
   * This value is only changed, at least in WorldGuard, for the
   * {@link Flags#BUILD} flag.
   *
   * @return Whether the flag is ignored
  */
  implicitlySetWithMembership(): boolean;
  /**
   * Whether, if the flag is not set at all, the value should be derived
   * from membership.
   *
   * This value is only changed, at least in WorldGuard, for the
   * {@link Flags#BUILD} flag.
   *
   * @return Whether membership is used
  */
  usesMembershipAsDefault(): boolean;
  /**
   * Whether the flag requires that a subject is specified in
   * {@link FlagValueCalculator}.
   *
   * This value is only changed, at least in WorldGuard, for the
   * {@link Flags#BUILD} flag.
   *
   * @return Whether a subject is required
  */
  requiresSubject(): boolean;
  /**
   * Get the region group flag.
   *
   * Every group has a region group flag except for region group flags
   * themselves.
   *
   * @return The region group flag
  */
  getRegionGroupFlag(): RegionGroupFlag;
  /**
   * Parse a given input to coerce it to a type compatible with the flag.
   *
   * @param context the {@link FlagContext}
   * @return The coerced type
   * @throws InvalidFlagFormat Raised if the input is invalid
  */
  parseInput(context: FlagContext): T;
  /**
   * Convert a raw type that was loaded (from a YAML file, for example)
   * into the type that this flag uses.
   *
   * @param o The object
   * @return The unmarshalled type
  */
  unmarshal(o: any | null): T;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
  toString(): string;
  /**
   * Test whether a flag name is valid.
   *
   * @param name The flag name
   * @return Whether the name is valid
  */
  static isValidName(name: string): boolean;
}
/**
 * A boolean flag.
*/
export class BooleanFlag extends Flag<boolean> {
  constructor(name: string, defaultGroup: RegionGroup);
  constructor(name: string);
  parseInput(context: FlagContext): boolean;
  unmarshal(o: any): boolean;
  marshal(o: boolean): any;
  /**
   * Convert a raw type that was loaded (from a YAML file, for example)
   * into the type that this flag uses.
   *
   * @param o The object
   * @return The unmarshalled type
  */
  unmarshal(o: any | null): T;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}

}
declare module 'com.sk89q.worldguard.util.profile.resolver' {
import { Profile } from 'com.sk89q.worldguard.util.profile';
import { UUID } from 'java.util';
/**
 * @deprecated Use {@link com.sk89q.worldguard.util.profile.resolver.PaperPlayerService} instead
*/
export class PaperProfileService {
  getIdealRequestLimit(): number;
  findByName(name: string): Profile | null;
  findByUuid(uuid: UUID): Profile | null;
  static getInstance(): PaperProfileService;
}

}
declare module 'com.sk89q.worldguard.commands.task' {
import { Logger } from 'java.util.logging';
import { ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { Set, Collection } from 'java.util';
import { OwnerMatcher } from 'com.sk89q.worldguard.commands.task.RegionLister';
import { Callable } from 'java.util.concurrent';
import { RegionManager, RemovalStrategy } from 'com.sk89q.worldguard.protection.managers';
import { CommandContext } from 'com.sk89q.minecraft.util.commands';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
import { UserLocatorPolicy } from 'com.sk89q.worldguard.protection.util.DomainInputResolver';
/**
 * Creates a new region.
*/
export class RegionAdder extends Callable<ProtectedRegion> {
  /**
   * Create a new instance.
   *
   * @param manager the manage
   * @param region the region
  */
  constructor(manager: RegionManager, region: ProtectedRegion);
  /**
   * Add the owners from the command's arguments.
   *
   * @param args the arguments
   * @param namesIndex the index in the list of arguments to read the first name from
  */
  addOwnersFromCommand(args: CommandContext, namesIndex: number): void;
  call(): ProtectedRegion;
  getOwnersInput(): string[] | null;
  setOwnersInput(ownersInput: string[] | null);
  getLocatorPolicy(): UserLocatorPolicy;
  setLocatorPolicy(locatorPolicy: UserLocatorPolicy);
}
export class RegionManagerSaver extends Callable<Collection<RegionManager>> {
  constructor(managers: Collection<RegionManager>);
  constructor(...manager: RegionManager[]);
  call(): Collection<RegionManager>;
}
export class RegionManagerLoader extends Callable<Collection<RegionManager>> {
  constructor(managers: Collection<RegionManager>);
  constructor(...manager: RegionManager[]);
  call(): Collection<RegionManager>;
}
export class RegionLister extends Callable<number> {
  constructor(manager: RegionManager, sender: Actor, world: string);
  getPage(): number;
  setPage(page: number);
  filterByIntersecting(region: ProtectedRegion): void;
  filterOwnedByName(name: string, nameOnly: boolean): void;
  filterIdByMatch(idFilter: string): void;
  call(): number;
}
/**
 * Removes a region.
*/
export class RegionRemover extends Callable<Set<ProtectedRegion>> {
  /**
   * Create a new instance.
   *
   * @param manager a region manager
   * @param region the region to remove
  */
  constructor(manager: RegionManager, region: ProtectedRegion);
  /**
   * GSet a parent removal strategy.
   *
   * @return a removal strategy or null (see{@link #setRemovalStrategy(RemovalStrategy)}
  */
  getRemovalStrategy(): RemovalStrategy | null;
  /**
   * Set a parent removal strategy. Set it to `null` to have the code
   * check for children and throw an error if any are found.
   *
   * @param removalStrategy a removal strategy, or `null` to error if children exist
  */
  setRemovalStrategy(removalStrategy: RemovalStrategy | null);
  call(): Set<ProtectedRegion>;
}

}
declare module 'com.sk89q.worldguard.protection.util.DomainInputResolver' {
import { Enum } from 'java.lang';
/**
 * The policy for locating users.
*/
export class UserLocatorPolicy extends Enum<UserLocatorPolicy> {
  static readonly UUID_ONLY: UserLocatorPolicy;
  static readonly NAME_ONLY: UserLocatorPolicy;
  static readonly UUID_AND_NAME: UserLocatorPolicy;
  static valueOf(name: string): UserLocatorPolicy;
  static values(): UserLocatorPolicy[];
}

}
declare module 'com.sk89q.worldguard.domains' {
import { ProfileCache } from 'com.sk89q.worldguard.util.profile.cache';
import { Set, UUID } from 'java.util';
import { Enum } from 'java.lang';
import { LocalPlayer } from 'com.sk89q.worldguard';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { ChangeTracked } from 'com.sk89q.worldguard.util';
/**
 * Indicates the level of membership.
*/
export class Association extends Enum<Association> {
  static readonly OWNER: Association;
  static readonly MEMBER: Association;
  static readonly NON_MEMBER: Association;
  static valueOf(name: string): Association;
  static values(): Association[];
}
/**
 * A combination of a {@link PlayerDomain} and a {@link GroupDomain}.
*/
export class DefaultDomain extends Domain {
  /**
   * Create a new domain.
  */
  constructor();
  /**
   * Create a new domain from an existing one, making a copy of all values.
   *
   * @param existing the other domain to copy values from
  */
  constructor(existing: DefaultDomain);
  /**
   * Get the domain that holds the players.
   *
   * @return a domain
  */
  getPlayerDomain(): PlayerDomain;
  /**
   * Set a new player domain.
   *
   * @param playerDomain a domain
  */
  setPlayerDomain(playerDomain: PlayerDomain);
  /**
   * Set the domain that holds the groups.
   *
   * @return a domain
  */
  getGroupDomain(): GroupDomain;
  /**
   * Set a new group domain.
   *
   * @param groupDomain a domain
  */
  setGroupDomain(groupDomain: GroupDomain);
  /**
   * Add the given player to the domain, identified by the player's name.
   *
   * @param name the name of the player
  */
  addPlayer(name: string): void;
  /**
   * Remove the given player from the domain, identified by the player's name.
   *
   * @param name the name of the player
  */
  removePlayer(name: string): void;
  /**
   * Remove the given player from the domain, identified by the player's UUID.
   *
   * @param uuid the UUID of the player
  */
  removePlayer(uuid: UUID): void;
  /**
   * Add the given player to the domain, identified by the player's UUID.
   *
   * @param uniqueId the UUID of the player
  */
  addPlayer(uniqueId: UUID): void;
  /**
   * Remove the given player from the domain, identified by either the
   * player's name, the player's unique ID, or both.
   *
   * @param player the player
  */
  removePlayer(player: LocalPlayer): void;
  /**
   * Add the given player to the domain, identified by the player's UUID.
   *
   * @param player the player
  */
  addPlayer(player: LocalPlayer): void;
  /**
   * Add all the entries from another domain.
   *
   * @param other the other domain
  */
  addAll(other: DefaultDomain): void;
  /**
   * Remove all the entries from another domain.
   *
   * @param other the other domain
  */
  removeAll(other: DefaultDomain): void;
  /**
   * Get the set of player names.
   *
   * @return the set of player names
  */
  getPlayers(): Set<string>;
  /**
   * Get the set of player UUIDs.
   *
   * @return the set of player UUIDs
  */
  getUniqueIds(): Set<UUID>;
  /**
   * Add the name of the group to the domain.
   *
   * @param name the name of the group.
  */
  addGroup(name: string): void;
  /**
   * Remove the given group from the domain.
   *
   * @param name the name of the group
  */
  removeGroup(name: string): void;
  /**
   * Get the set of group names.
   *
   * @return the set of group names
  */
  getGroups(): Set<string>;
  /**
   * Returns true if a domain contains a player.
   *
   * @param player the player to check
   * @return whether this domain contains `player`
  */
  contains(player: LocalPlayer): boolean;
  /**
   * Returns true if a domain contains a player.
   *
   * @param player the player to check
   * @return whether this domain contains `player`
  */
  contains(uniqueId: UUID): boolean;
  /**
   * Returns true if a domain contains a player.
   *
   * @param player the player to check
   * @return whether this domain contains `player`
  */
  contains(playerName: string): boolean;
  /**
   * Get the number of entries.
   *
   * @return the number of entries
  */
  size(): number;
  /**
   * Remove all entries.
  */
  clear(): void;
  removeAll(): void;
  toPlayersString(): string;
  toPlayersString(cache: ProfileCache | null): string;
  toGroupsString(): string;
  toUserFriendlyString(): string;
  toUserFriendlyString(cache: ProfileCache): string;
  toUserFriendlyComponent(cache: ProfileCache | null): Component;
  /**
   * Tests whether changes have been made.
   *
   * @return true if changes have been made
  */
  isDirty(): boolean;
  /**
   * Set whether changes have been made.
   *
   * @param dirty a new dirty state
  */
  setDirty(dirty: boolean): void;
  toString(): string;
}
export interface DefaultDomain extends Domain, ChangeTracked {}
/**
 * A domain contains a list of memberships.
*/
export class Domain {
  /**
   * Returns true if a domain contains a player.
   *
   * @param player the player to check
   * @return whether this domain contains `player`
  */
  contains(player: LocalPlayer): boolean;
  /**
   * Returns true if a domain contains a player.
   *
   * This method doesn't check for groups!
   *
   * @param uniqueId the UUID of the user
   * @return whether this domain contains a player by that name
  */
  contains(uniqueId: UUID): boolean;
  /**
   * Returns true if a domain contains a player.
   *
   * This method doesn't check for groups!
   *
   * @param playerName The name of the player to check
   * @return whether this domain contains a player by that name
   * @deprecated names are deprecated in MC 1.7+ in favor of UUIDs
  */
  contains(playerName: string): boolean;
  /**
   * Get the number of entries.
   *
   * @return the number of entries
  */
  size(): number;
  /**
   * Remove all entries.
  */
  clear(): void;
}
/**
 * Stores players (only) in a domain.
*/
export class PlayerDomain extends Domain {
  /**
   * Create a new instance.
  */
  constructor();
  /**
   * Create a new instance.
   *
   * @param domain the domain to copy values from
  */
  constructor(domain: PlayerDomain);
  /**
   * Create a new instance with the given names.
   *
   * @param names an array of names
   * @deprecated names are deprecated in favor of UUIDs in MC 1.7+
  */
  constructor(names: string[]);
  /**
   * Add the given player to the domain, identified by the player's name.
   *
   * @param name the name of the player
   * @deprecated names are deprecated in favor of UUIDs in MC 1.7+
  */
  addPlayer(name: string): void;
  /**
   * Add the given player to the domain, identified by the player's UUID.
   *
   * @param uniqueId the UUID of the player
  */
  addPlayer(uniqueId: UUID): void;
  /**
   * Add the given player to the domain, identified by the player's UUID.
   *
   * @param player the player
  */
  addPlayer(player: LocalPlayer): void;
  /**
   * Remove the given player from the domain, identified by the player's name.
   *
   * @param name the name of the player
   * @deprecated names are deprecated in favor of UUIDs in MC 1.7+
  */
  removePlayer(name: string): void;
  /**
   * Remove the given player from the domain, identified by the player's UUID.
   *
   * @param uuid the UUID of the player
  */
  removePlayer(uuid: UUID): void;
  /**
   * Remove the given player from the domain, identified by either the
   * player's name, the player's unique ID, or both.
   *
   * @param player the player
  */
  removePlayer(player: LocalPlayer): void;
  /**
   * Returns true if a domain contains a player.
   *
   * @param player the player to check
   * @return whether this domain contains `player`
  */
  contains(player: LocalPlayer): boolean;
  /**
   * Get the set of player names.
   *
   * @return the set of player names
   * @deprecated names are deprecated in favor of UUIDs in MC 1.7+
  */
  getPlayers(): Set<string>;
  /**
   * Get the set of player UUIDs.
   *
   * @return the set of player UUIDs
  */
  getUniqueIds(): Set<UUID>;
  /**
   * Returns true if a domain contains a player.
   *
   * @param player the player to check
   * @return whether this domain contains `player`
  */
  contains(uniqueId: UUID): boolean;
  /**
   * Returns true if a domain contains a player.
   *
   * @param player the player to check
   * @return whether this domain contains `player`
  */
  contains(playerName: string): boolean;
  /**
   * Get the number of entries.
   *
   * @return the number of entries
  */
  size(): number;
  /**
   * Remove all entries.
  */
  clear(): void;
  /**
   * Tests whether changes have been made.
   *
   * @return true if changes have been made
  */
  isDirty(): boolean;
  /**
   * Set whether changes have been made.
   *
   * @param dirty a new dirty state
  */
  setDirty(dirty: boolean): void;
  toString(): string;
}
export interface PlayerDomain extends Domain, ChangeTracked {}
/**
 * Contains groups in a domain.
*/
export class GroupDomain extends Domain {
  /**
   * Create a new instance.
  */
  constructor();
  /**
   * Create a new instance with copies from another domain.
   *
   * @param domain the domain to copy values from
  */
  constructor(domain: GroupDomain);
  /**
   * Create a new instance.
   *
   * @param groups an array of groups
  */
  constructor(groups: string[]);
  /**
   * Add the name of the group to the domain.
   *
   * @param name the name of the group.
  */
  addGroup(name: string): void;
  /**
   * Remove the given group from the domain.
   *
   * @param name the name of the group
  */
  removeGroup(name: string): void;
  /**
   * Returns true if a domain contains a player.
   *
   * @param player the player to check
   * @return whether this domain contains `player`
  */
  contains(player: LocalPlayer): boolean;
  /**
   * Get the set of group names.
   *
   * @return the set of group names
  */
  getGroups(): Set<string>;
  /**
   * Returns true if a domain contains a player.
   *
   * @param player the player to check
   * @return whether this domain contains `player`
  */
  contains(uniqueId: UUID): boolean;
  /**
   * Returns true if a domain contains a player.
   *
   * @param player the player to check
   * @return whether this domain contains `player`
  */
  contains(playerName: string): boolean;
  /**
   * Get the number of entries.
   *
   * @return the number of entries
  */
  size(): number;
  /**
   * Remove all entries.
  */
  clear(): void;
  /**
   * Tests whether changes have been made.
   *
   * @return true if changes have been made
  */
  isDirty(): boolean;
  /**
   * Set whether changes have been made.
   *
   * @param dirty a new dirty state
  */
  setDirty(dirty: boolean): void;
  toString(): string;
}
export interface GroupDomain extends Domain, ChangeTracked {}

}
declare module 'com.sk89q.worldguard.util.profiler.SamplerBuilder' {
import { TimerTask, SortedMap } from 'java.util';
import { ThreadMXBean, ThreadInfo } from 'java.lang.management';
import { StackNode } from 'com.sk89q.worldguard.util.profiler';
import { Predicate } from 'java.util.function';
export class Sampler extends TimerTask {
  cancel(): boolean;
  run(): void;
  toString(): string;
}

}
declare module 'com.sk89q.worldguard.bukkit.util.report' {
import { CancelAttempt } from 'com.sk89q.worldguard.bukkit.event.debug';
import { List } from 'java.util';
import { HandlerTracer } from 'com.sk89q.worldguard.bukkit.util';
import { Report, DataReport } from 'com.sk89q.worldedit.util.report';
export class ServerReport extends DataReport {
  constructor();
}
export class PerformanceReport extends DataReport {
  constructor();
}
export class ServicesReport extends DataReport {
  constructor();
}
/**
 * Reports on cancelled events.
*/
export class CancelReport extends Report {
  isDetectingPlugin(): boolean;
  setDetectingPlugin(detectingPlugin: boolean): void;
  getTitle(): string;
  toString(): string;
}
export class WorldReport extends DataReport {
  constructor();
}
export class PluginReport extends DataReport {
  constructor();
}
export class SchedulerReport extends DataReport {
  constructor();
}

}
declare module 'com.sk89q.worldguard.session.handler.WaterBreathing' {
import { WaterBreathing } from 'com.sk89q.worldguard.session.handler';
import { Factory as com_sk89q_worldguard_session_handler_Handler_Factory } from 'com.sk89q.worldguard.session.handler.Handler';
import { Session } from 'com.sk89q.worldguard.session';
export class Factory extends com_sk89q_worldguard_session_handler_Handler_Factory<WaterBreathing> {
  create(session: Session): WaterBreathing;
}

}
declare module 'com.sk89q.worldguard.internal' {
export class PermissionModel {

}

}
declare module 'com.sk89q.worldguard.protection.managers.storage.file' {
import { Logger } from 'java.util.logging';
import { ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { Set, List } from 'java.util';
import { FlagRegistry } from 'com.sk89q.worldguard.protection.flags.registry';
import { File } from 'java.io';
import { RegionDifference } from 'com.sk89q.worldguard.protection.managers';
import { RegionDatabase, RegionDriver } from 'com.sk89q.worldguard.protection.managers.storage';
/**
 * Stores region data in a {root_dir}/{id}/{filename} pattern on disk
 * using {@link YamlRegionFile}.
*/
export class DirectoryYamlDriver extends RegionDriver {
  /**
   * Create a new instance.
   *
   * @param rootDir the directory where the world folders reside
   * @param filename the filename (i.e. "regions.yml")
  */
  constructor(rootDir: File, filename: string);
  /**
   * Get a region database for a world.
   *
   * The given name should be a unique name for the world. Due to
   * legacy reasons, there are no stipulations on the case sensitivity
   * of the name. Historically, however, if the driver is a file-based
   * driver, case-sensitivity will vary on whether the underlying
   * filesystem is case-sensitive.
   *
   * This method should return quickly.
   *
   * @param name the name of the world, which may be case sensitive
   * @return the world
  */
  get(id: string): RegionDatabase;
  /**
   * Fetch all the region databases that have been stored using this driver.
   * Essentially, return a region database for all worlds that have had
   * regions saved for it in the past.
   *
   * As this may require a query to be performed, this method may block
   * for a prolonged period of time.
   *
   * @return a list of databases
   * @throws StorageException thrown if the fetch operation fails
  */
  getAll(): RegionDatabase[];
}
/**
 * A store that persists regions in a YAML-encoded file.
*/
export class YamlRegionFile extends RegionDatabase {
  /**
   * Create a new instance.
   *
   * @param name the name of this store
   * @param file the file
  */
  constructor(name: string, file: File);
  /**
   * Get a displayable name for this store.
  */
  getName(): string;
  /**
   * Load all regions from storage and place them into the passed map.
   *
   * The map will only be modified from one thread. The keys of
   * each map entry will be in respect to the ID of the region but
   * transformed to be lowercase. Until this method returns, the map may not
   * be modified by any other thread simultaneously. If an exception is
   * thrown, then the state in which the map is left is undefined.
   *
   * The provided map should have reasonably efficient
   * `get()` and `put()` calls in order to maximize performance.
   * 
   *
   * @param flags a flag registry
   * @return a set of loaded regions
   * @throws StorageException thrown on read error
  */
  loadAll(flagRegistry: FlagRegistry): Set<ProtectedRegion>;
  /**
   * Replace all the data in the store with the given collection of regions.
   *
   * @param regions a set of regions
   * @throws StorageException thrown on write error
  */
  saveAll(regions: Set<ProtectedRegion>): void;
  /**
   * Perform a partial save that only commits changes, rather than the
   * entire region index.
   *
   * @param difference the difference
   * @throws DifferenceSaveException thrown if partial saves are not supported
   * @throws StorageException thrown on write error
  */
  saveChanges(difference: RegionDifference): void;
}

}
declare module 'com.sk89q.worldguard' {
import { Logger } from 'java.util.logging';
import { ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { WorldGuardPlatform } from 'com.sk89q.worldguard.internal.platform';
import { List } from 'java.util';
import { ProfileService } from 'com.sk89q.worldguard.util.profile.resolver';
import { Player } from 'com.sk89q.worldedit.entity';
import { Association } from 'com.sk89q.worldguard.domains';
import { ProfileCache } from 'com.sk89q.worldguard.util.profile.cache';
import { FlagRegistry, SimpleFlagRegistry } from 'com.sk89q.worldguard.protection.flags.registry';
import { Location } from 'com.sk89q.worldedit.util';
import { WeatherType } from 'com.sk89q.worldedit.world.weather';
import { Supervisor } from 'com.sk89q.worldedit.util.task';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
import { RegionAssociable } from 'com.sk89q.worldguard.protection.association';
import { WorldGuardExceptionConverter } from 'com.sk89q.worldguard.util';
export class LocalPlayer extends Player {
  /**
   * Returns true if this player is inside a group.
   * 
   * @param group The group to check
   * @return Whether this player is in `group`
  */
  hasGroup(group: string): boolean;
  /**
   * Kick this player.
   * 
   * @param msg The message to kick the player with
  */
  kick(msg: string): void;
  /**
   * Ban this player.
   * 
   * @param msg The message to ban the player with
  */
  ban(msg: string): void;
  getAssociation(regions: ProtectedRegion[]): Association;
  /**
   * Gets the health of this player.
   *
   * @return The health
  */
  getHealth(): number;
  /**
   * Sets the health of this player.
   *
   * @param health The health
  */
  setHealth(health: number);
  /**
   * Gets the max health of this player.
   *
   * @return The max health
  */
  getMaxHealth(): number;
  /**
   * Gets the food level of this player.
   *
   * @return The food level
  */
  getFoodLevel(): number;
  /**
   * Sets the food level of this player.
   *
   * @param foodLevel The food level
  */
  setFoodLevel(foodLevel: number);
  /**
   * Gets the saturation of this player.
   *
   * @return The saturation
  */
  getSaturation(): number;
  /**
   * Sets the saturation of this player.
   *
   * @param saturation The saturation
  */
  setSaturation(saturation: number);
  /**
   * Gets the exhaustion of this player.
   *
   * @return The exhaustion
  */
  getExhaustion(): number;
  /**
   * Sets the exhaustion of this player.
   *
   * @param exhaustion The exhaustion
  */
  setExhaustion(exhaustion: number);
  /**
   * Gets the players weather
   *
   * @return The players weather
  */
  getPlayerWeather(): WeatherType;
  /**
   * Sets the players WeatherType
   *
   * @param weather The weather type
  */
  setPlayerWeather(playerWeather: WeatherType);
  /**
   * Resets the players weather to normal.
  */
  resetPlayerWeather(): void;
  /**
   * Gets if the players time is relative.
   *
   * @return If the time is relative
  */
  isPlayerTimeRelative(): boolean;
  /**
   * Gets the time offset of the player.
   *
   * @return The players time offset
  */
  getPlayerTimeOffset(): number;
  /**
   * Sets the players time.
   *
   * @param time The players time
   * @param relative If it's relative
  */
  setPlayerTime(time: number, relative: boolean): void;
  /**
   * Resets the players time to normal.
  */
  resetPlayerTime(): void;
  /**
   * Gets the number of ticks the player is on fire for.
   *
   * @return The number of fire ticks
  */
  getFireTicks(): number;
  /**
   * Sets the number of ticks the player is on fire for.
   *
   * @param fireTicks The fire ticks
  */
  setFireTicks(fireTicks: number);
  /**
   * Sets the target of the compass
   *
   * @param location The location
  */
  setCompassTarget(compassTarget: Location);
  /**
   * This should preferably take Components but there's no way to do that yet
   *
   * @param title the title to display
   * @param subtitle the subtitle to display
  */
  sendTitle(title: string, subtitle: string): void;
  /**
   * Clears fall distance.
  */
  resetFallDistance(): void;
  /**
   * Teleport the player, potentially async, displaying the message on a success.
   *  @param location location to teleport to
   * @param successMessage message to display on success
   * @param failMessage message to display on failure
  */
  teleport(location: Location, successMessage: string, failMessage: string): void;
}
export interface LocalPlayer extends Player, RegionAssociable {}
export class WorldGuard {
  static readonly logger: Logger;
  static getInstance(): WorldGuard;
  setup(): void;
  /**
   * The WorldGuard Platform.
   * The Platform is only available after WorldGuard is enabled.
   *
   * @return The platform
  */
  getPlatform(): WorldGuardPlatform;
  setPlatform(platform: WorldGuardPlatform);
  /**
   * Get the flag registry.
   *
   * @return the flag registry
  */
  getFlagRegistry(): FlagRegistry;
  /**
   * Get the supervisor.
   *
   * @return the supervisor
  */
  getSupervisor(): Supervisor;
  /**
   * Get the profile lookup service.
   *
   * @return the profile lookup service
  */
  getProfileService(): ProfileService;
  /**
   * Get the profile cache.
   *
   * @return the profile cache
  */
  getProfileCache(): ProfileCache;
  /**
   * Get the exception converter
   *
   * @return the exception converter
  */
  getExceptionConverter(): WorldGuardExceptionConverter;
  /**
   * Checks to see if the sender is a player, otherwise throw an exception.
   *
   * @param sender The sender
   * @return The player
   * @throws CommandException if it isn't a player
  */
  checkPlayer(sender: Actor): LocalPlayer;
  /**
   * Called when WorldGuard should be disabled.
  */
  disable(): void;
  /**
   * Get the version.
   *
   * @return the version of WorldEdit
  */
  static getVersion(): string;
}

}
declare module 'com.sk89q.worldguard.protection.flags.registry' {
import { Logger } from 'java.util.logging';
import { RuntimeException, Iterable } from 'java.lang';
import { Iterator, Collection, List, Map } from 'java.util';
import { ConcurrentMap } from 'java.util.concurrent';
import { FlagContext, Flag } from 'com.sk89q.worldguard.protection.flags';
export class SimpleFlagRegistry extends FlagRegistry {
  isInitialized(): boolean;
  setInitialized(initialized: boolean): void;
  /**
   * Register a new flag.
   *
   * There may be an appropriate time to register flags. If flags are
   * registered outside this time, then an exception may be thrown.
   *
   * @param flag The flag
   * @throws FlagConflictException Thrown when an existing flag exists with the same name
   * @throws IllegalStateException If it is not the right time to register new flags
  */
  register(flag: Flag<any>): void;
  /**
   * Register a collection of flags.
   *
   * There may be an appropriate time to register flags. If flags are
   * registered outside this time, then an exception may be thrown.
   *
   * If there is a flag conflict, then an error will be logged but
   * no exception will be thrown.
   *
   * @param flags a collection of flags
   * @throws IllegalStateException If it is not the right time to register new flags
  */
  registerAll(flags: Collection<Flag<any>>): void;
  /**
   * Get af flag by its name.
   *
   * @param name The name
   * @return The flag, if it has been registered
  */
  get(name: string): Flag<any> | null;
  /**
   * Get all flags
   *
   * @return All flags
  */
  getAll(): Flag<any>[];
  /**
   * Unmarshal a raw map of values into a map of flags with their
   * unmarshalled values.
   *
   * @param rawValues The raw values map
   * @param createUnknown Whether "just in time" flags should be created for unknown flags
   * @return The unmarshalled flag values map
  */
  unmarshal(rawValues: Map<string, any>, createUnknown: boolean): Map<Flag<any>, any>;
  /**
   * Get the number of registered flags.
   *
   * @return The number of registered flags
  */
  size(): number;
  iterator(): Iterator<Flag<any>>;
}
export class FlagConflictException extends RuntimeException {
  constructor(message: string);
}
/**
 * Keeps track of registered flags.
*/
export class FlagRegistry extends Iterable<Flag<any>> {
  /**
   * Register a new flag.
   *
   * There may be an appropriate time to register flags. If flags are
   * registered outside this time, then an exception may be thrown.
   *
   * @param flag The flag
   * @throws FlagConflictException Thrown when an existing flag exists with the same name
   * @throws IllegalStateException If it is not the right time to register new flags
  */
  register(flag: Flag<any>): void;
  /**
   * Register a collection of flags.
   *
   * There may be an appropriate time to register flags. If flags are
   * registered outside this time, then an exception may be thrown.
   *
   * If there is a flag conflict, then an error will be logged but
   * no exception will be thrown.
   *
   * @param flags a collection of flags
   * @throws IllegalStateException If it is not the right time to register new flags
  */
  registerAll(flags: Collection<Flag<any>>): void;
  /**
   * Get af flag by its name.
   *
   * @param name The name
   * @return The flag, if it has been registered
  */
  get(name: string): Flag<any> | null;
  /**
   * Get all flags
   *
   * @return All flags
  */
  getAll(): Flag<any>[];
  /**
   * Unmarshal a raw map of values into a map of flags with their
   * unmarshalled values.
   *
   * @param rawValues The raw values map
   * @param createUnknown Whether "just in time" flags should be created for unknown flags
   * @return The unmarshalled flag values map
  */
  unmarshal(rawValues: Map<string, any>, createUnknown: boolean): Map<Flag<any>, any>;
  /**
   * Get the number of registered flags.
   *
   * @return The number of registered flags
  */
  size(): number;
}
export class UnknownFlag extends Flag<any> {
  constructor(name: string);
  parseInput(context: FlagContext): any;
  unmarshal(o: any | null): any;
  marshal(o: any): any;
  /**
   * Convert the value stored for this flag into a type that can be
   * serialized into YAML.
   *
   * @param o The object
   * @return The marshalled type
  */
  marshal(o: T): any;
}

}
declare module 'com.sk89q.worldguard.util.report' {
import { ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { LocalPlayer } from 'com.sk89q.worldguard';
import { DataReport } from 'com.sk89q.worldedit.util.report';
export class ApplicableRegionsReport extends DataReport {
  constructor(player: LocalPlayer);
}
export class ConfigReport extends DataReport {
  constructor();
}
/**
 * Reports on a region.
*/
export class RegionReport extends DataReport {
  constructor(region: ProtectedRegion);
}

}
declare module 'com.sk89q.worldguard.util.logging' {
import { LogRecord, Formatter, Handler, Logger } from 'java.util.logging';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
/**
 * Sends all logger messages to a player.
*/
export class LoggerToChatHandler extends Handler {
  /**
   * Construct the object.
   *
   * @param player
  */
  constructor(player: Actor);
  /**
   * Close the handler.
  */
  close(): void;
  /**
   * Flush the output.
  */
  flush(): void;
  /**
   * Publish a log record.
  */
  publish(record: LogRecord): void;
}
export class RecordMessagePrefixer extends Handler {
  constructor(parentLogger: Logger, prefix: string);
  publish(record: LogRecord): void;
  flush(): void;
  close(): void;
  /**
   * Register a prefix handler on the given logger.
   *
   * @param logger the logger
   * @param prefix the prefix
  */
  static register(logger: Logger, prefix: string): void;
}

}
declare module 'com.sk89q.worldguard.session.handler.InvincibilityFlag' {
import { InvincibilityFlag } from 'com.sk89q.worldguard.session.handler';
import { Factory as com_sk89q_worldguard_session_handler_Handler_Factory } from 'com.sk89q.worldguard.session.handler.Handler';
import { Session } from 'com.sk89q.worldguard.session';
export class Factory extends com_sk89q_worldguard_session_handler_Handler_Factory<InvincibilityFlag> {
  create(session: Session): InvincibilityFlag;
}

}
declare module 'com.sk89q.worldguard.blacklist.target' {
import { ItemType } from 'com.sk89q.worldedit.world.item';
import { Exception } from 'java.lang';
import { BlockType } from 'com.sk89q.worldedit.world.block';
export class ItemBlockMatcher extends TargetMatcher {
  constructor(type: BlockType);
  /**
   * Get the matched type ID, which is merely used for indexing.
   *
   * @return the type ID
  */
  getMatchedTypeId(): string;
  /**
   * Return whether the given target is matched by this matcher.
   *
   * @param target the target
   * @return true if matched
  */
  test(target: Target): boolean;
}
/**
 * Matches a {@link Target}.
*/
export class TargetMatcher {
  /**
   * Get the matched type ID, which is merely used for indexing.
   *
   * @return the type ID
  */
  getMatchedTypeId(): string;
  /**
   * Return whether the given target is matched by this matcher.
   *
   * @param target the target
   * @return true if matched
  */
  test(target: Target): boolean;
}
export class TargetMatcherParseException extends Exception {
  constructor(message: string);
}
export class ItemTarget extends Target {
  constructor(type: ItemType);
  /**
   * Get the type ID.
   *
   * @return the type ID
  */
  getTypeId(): string;
  /**
   * Get a friendly name to be printed.
   *
   * @return a friendly name
  */
  getFriendlyName(): string;
}
export class BlockMatcher extends TargetMatcher {
  constructor(type: BlockType);
  /**
   * Get the matched type ID, which is merely used for indexing.
   *
   * @return the type ID
  */
  getMatchedTypeId(): string;
  /**
   * Return whether the given target is matched by this matcher.
   *
   * @param target the target
   * @return true if matched
  */
  test(target: Target): boolean;
}
export class BlockTarget extends Target {
  constructor(type: BlockType);
  /**
   * Get the type ID.
   *
   * @return the type ID
  */
  getTypeId(): string;
  /**
   * Get a friendly name to be printed.
   *
   * @return a friendly name
  */
  getFriendlyName(): string;
}
/**
 * A target is something that can have events attached to it.
*/
export class Target {
  /**
   * Get the type ID.
   *
   * @return the type ID
  */
  getTypeId(): string;
  /**
   * Get a friendly name to be printed.
   *
   * @return a friendly name
  */
  getFriendlyName(): string;
}
export class TargetMatcherParser {
  fromInput(input: string): TargetMatcher;
}
export class ItemMatcher extends TargetMatcher {
  constructor(type: ItemType);
  /**
   * Get the matched type ID, which is merely used for indexing.
   *
   * @return the type ID
  */
  getMatchedTypeId(): string;
  /**
   * Return whether the given target is matched by this matcher.
   *
   * @param target the target
   * @return true if matched
  */
  test(target: Target): boolean;
}

}
declare module 'com.sk89q.worldguard.util.collect' {
import { ArrayList } from 'java.util';
import { ReadLock, WriteLock } from 'java.util.concurrent.locks.ReentrantReadWriteLock';
import { ReentrantReadWriteLock } from 'java.util.concurrent.locks';
export class LongHashTable<V> extends LongBaseHashTable {
  put(msw: number, lsw: number, value: V): void;
  get(msw: number, lsw: number): V;
  put(key: number, value: V): void;
  get(key: number): V;
  values(): ArrayList<V>;
  put(msw: number, lsw: number, entry: EntryBase): void;
  put(entry: EntryBase): void;
}
export class EntryBase {
  constructor(key: number);
}
export class LongHash {
  static toLong(msw: number, lsw: number): number;
  static msw(l: number): number;
  static lsw(l: number): number;
  containsKey(msw: number, lsw: number): boolean;
  remove(msw: number, lsw: number): void;
  containsKey(key: number): boolean;
  remove(key: number): void;
}
export class LongHashSet extends LongHash {
  isEmpty(): boolean;
  size(): number;
  add(msw: number, lsw: number): void;
  add(key: number): void;
  containsKey(key: number): boolean;
  remove(key: number): void;
  popFirst(): number;
  popAll(): number[];
  keys(): number[];
  containsKey(msw: number, lsw: number): boolean;
  remove(msw: number, lsw: number): void;
}
export class LongBaseHashTable extends LongHash {
  put(msw: number, lsw: number, entry: EntryBase): void;
  getEntry(msw: number, lsw: number): EntryBase;
  put(entry: EntryBase): void;
  getEntry(key: number): EntryBase;
  containsKey(key: number): boolean;
  remove(key: number): void;
  entries(): ArrayList<EntryBase>;
  containsKey(msw: number, lsw: number): boolean;
  remove(msw: number, lsw: number): void;
}

}
declare module 'com.sk89q.worldguard.internal.util.sql' {
import { PreparedStatement } from 'java.sql';
export class StatementUtils {
  /**
   * Creates a comma separated list of PreparedStatement place holders
   *
   * @param length The number of wildcards to create
   * @return A string with `length` wildcards for usage in a PreparedStatement
  */
  static preparePlaceHolders(length: number): string;
  /**
   * Adds all of the parsed values to the PreparedStatement
   *
   * @param preparedStatement The preparedStanement to add to
   * @param values The values to set
   * @throws SQLException see {@link PreparedStatement#setString(int, String)}
  */
  static setValues(preparedStatement: PreparedStatement, ...values: string[]): void;
}

}
declare module 'com.sk89q.worldguard.bukkit.event' {
/**
 * Utility methods for dealing with delegate events.
*/
export class DelegateEvents {
  /**
   * Set an event to be silent.
   *
   * @param event the event
   * @param  the type of event
   * @return the same event
  */
  static setSilent<T>(event: T): T;
  /**
   * Set an event to be silent.
   *
   * @param event the event
   * @param silent true to set silent
   * @param  the type of event
   * @return the same event
  */
  static setSilent<T>(event: T, silent: boolean): T;
  /**
   * Set an event as handled as {@link Result#ALLOW} if `allowed` is
   * true, otherwise do nothing.
   *
   * @param event the event
   * @param  the type of event
   * @return the same event
  */
  static setAllowed<T>(event: T, allowed: boolean): T;
}
export class Handleable {

}
/**
 * A bulk event contains several affected objects in a list.
*/
export class BulkEvent {

}

}
declare module 'com.sk89q.worldguard.protection.flags.StateFlag' {
import { Enum } from 'java.lang';
export class State extends Enum<State> {
  static readonly ALLOW: State;
  static readonly DENY: State;
  static valueOf(name: string): State;
  static values(): State[];
}

}
declare module 'com.sk89q.worldguard.bukkit.chest' {
import { LocalPlayer } from 'com.sk89q.worldguard';
import { Location } from 'com.sk89q.worldedit.util';
import { SignChestProtection } from 'com.sk89q.worldguard.chest';
export class BukkitSignChestProtection extends SignChestProtection {
  isProtectedSign(block: Location, player: LocalPlayer): boolean;
}

}
declare module 'com.sk89q.worldguard.session' {
import { ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { Enum, Class } from 'java.lang';
import { Handler } from 'com.sk89q.worldguard.session.handler';
import { Set, HashMap, List, Map } from 'java.util';
import { LocalPlayer } from 'com.sk89q.worldguard';
import { Factory } from 'com.sk89q.worldguard.session.handler.Handler';
import { Location } from 'com.sk89q.worldedit.util';
import { World } from 'com.sk89q.worldedit.world';
import { AtomicBoolean } from 'java.util.concurrent.atomic';
import { BiPredicate } from 'java.util.function';
export class SessionManager {
  /**
   * Check whether a player has the region bypass permission.
   *
   * The return value may be cached for a few seconds.
   *
   * @param player The player
   * @param world The world
   * @return A value
  */
  hasBypass(player: LocalPlayer, world: World): boolean;
  /**
   * Re-initialize handlers and clear "last position," "last state," etc.
   * information for all players.
  */
  resetAllStates(): void;
  /**
   * Re-initialize handlers and clear "last position," "last state," etc.
   * information.
   *
   * @param player The player
  */
  resetState(player: LocalPlayer): void;
  /**
   * @return true if custom handlers are or were at some point registered, false otherwise
  */
  customHandlersRegistered(): boolean;
  /**
   * Register a handler with the BukkitSessionManager.
   *
   * You may specify another handler class to ensure your handler is always registered after that class.
   * If that class is not already registered, this method will return false.
   *
   * For example, flags that always act on a player in a region (like HealFlag and FeedFlag)
   * should be registered earlier, whereas flags that only take effect when a player leaves the region (like
   * FarewellFlag and GreetingFlag) should be registered after the ExitFlag.Factory.class handler factory.
   *
   * @param factory a factory which takes a session and returns an instance of your handler
   * @param after the handler factory to insert the first handler after, to ensure a specific order when creating new sessions
   *
   * @return `true` (as specified by {@link Collection#add})
   *          `false` if after is not registered, or factory is null
  */
  registerHandler(factory: Factory<Handler>, after: Factory<Handler> | null): boolean;
  /**
   * Unregister a handler.
   *
   * This will prevent it from being added to newly created sessions only. Existing
   * sessions with the handler will continue to use it.
   *
   * Will return false if the handler was not registered to begin with.
   *
   * @param factory the handler factory to unregister
   * @return true if the handler was registered and is now unregistered, false otherwise
  */
  unregisterHandler(factory: Factory<Handler>): boolean;
  /**
   * Create a session for a player.
   *
   * @param player The player
   * @return The new session
  */
  createSession(player: LocalPlayer): Session;
  /**
   * Get a player's session, if one exists.
   *
   * @param player The player
   * @return The session
  */
  getIfPresent(player: LocalPlayer): Session | null;
  /**
   * Get a player's session. A session will be created if there is no
   * existing session for the player.
   *
   * This method can only be called from the main thread. While the
   * session manager itself is thread-safe, some of the handlers may
   * require initialization that requires the server main thread.
   *
   * @param player The player to get a session for
   * @return The `player`'s session
  */
  get(player: LocalPlayer): Session;
}
/**
 * Keeps session information on a player.
*/
export class Session {
  /**
   * Create a new session.
   *
   * @param manager The session manager
  */
  constructor(manager: SessionManager);
  /**
   * Register a new handler.
   *
   * @param handler A new handler
  */
  register(handler: Handler): void;
  /**
   * Get the session manager.
   *
   * @return The session manager
  */
  getManager(): SessionManager;
  /**
   * Get a handler by class, if has been registered.
   *
   * @param type The type of handler
   * @param  The type of handler
   * @return A handler instance, otherwise null
  */
  getHandler<T>(type: Class<T>): T | null;
  /**
   * Initialize the session.
   *
   * @param player The player
  */
  initialize(player: LocalPlayer): void;
  /**
   * Tick the session.
   *
   * @param player The player
  */
  tick(player: LocalPlayer): void;
  /**
   * Re-initialize the session.
   *
   * @param player The player
  */
  resetState(player: LocalPlayer): void;
  /**
   * Test whether the session has invincibility enabled.
   *
   * @return Whether invincibility is enabled
  */
  isInvincible(player: LocalPlayer): boolean;
  /**
   * Test movement to the given location.
   *
   * @param player The player
   * @param to The new location
   * @param moveType The type of move
   * @return The overridden location, if the location is being overridden
   * @see #testMoveTo(LocalPlayer, Location, MoveType, boolean) For an explanation
  */
  testMoveTo(player: LocalPlayer, to: Location, moveType: MoveType): Location | null;
  /**
   * Test movement to the given location.
   *
   * If a non-null {@link Location} is returned, the player should be
   * at that location instead of where the player has tried to move to.
   *
   * If the `moveType` is cancellable
   * ({@link MoveType#isCancellable()}, then the last valid location will
   * be set to the given one.
   *
   * @param player The player
   * @param to The new location
   * @param moveType The type of move
   * @param forced Whether to force a check
   * @return The overridden location, if the location is being overridden
  */
  testMoveTo(player: LocalPlayer, to: Location, moveType: MoveType, forced: boolean): Location | null;
  /**
   * @return true if the owner of this session should not bypass protection, even if they have bypass permissions
  */
  hasBypassDisabled(): boolean;
  /**
   * Toggle bypass disabling for this session.
   * @param disabled true to disable region bypass
  */
  setBypassDisabled(disabled: boolean): void;
}
/**
 * Types of movements.
 *
 * Used with Session#testMoveTo(Location, MoveType).
*/
export class MoveType extends Enum<MoveType> {
  static readonly RESPAWN: MoveType;
  static readonly EMBARK: MoveType;
  static readonly MOVE: MoveType;
  static readonly GLIDE: MoveType;
  static readonly SWIM: MoveType;
  static readonly TELEPORT: MoveType;
  static readonly RIDE: MoveType;
  static readonly OTHER_NON_CANCELLABLE: MoveType;
  static readonly OTHER_CANCELLABLE: MoveType;
  static valueOf(name: string): MoveType;
  static values(): MoveType[];
  isCancellable(): boolean;
  isTeleport(): boolean;
}
export class AbstractSessionManager extends SessionManager {
  static readonly RUN_DELAY: number;
  static readonly SESSION_LIFETIME: number;
  /**
   * @return true if custom handlers are or were at some point registered, false otherwise
  */
  customHandlersRegistered(): boolean;
  /**
   * Register a handler with the BukkitSessionManager.
   *
   * You may specify another handler class to ensure your handler is always registered after that class.
   * If that class is not already registered, this method will return false.
   *
   * For example, flags that always act on a player in a region (like HealFlag and FeedFlag)
   * should be registered earlier, whereas flags that only take effect when a player leaves the region (like
   * FarewellFlag and GreetingFlag) should be registered after the ExitFlag.Factory.class handler factory.
   *
   * @param factory a factory which takes a session and returns an instance of your handler
   * @param after the handler factory to insert the first handler after, to ensure a specific order when creating new sessions
   *
   * @return `true` (as specified by {@link Collection#add})
   *          `false` if after is not registered, or factory is null
  */
  registerHandler(factory: Factory<Handler>, after: Factory<Handler> | null): boolean;
  /**
   * Unregister a handler.
   *
   * This will prevent it from being added to newly created sessions only. Existing
   * sessions with the handler will continue to use it.
   *
   * Will return false if the handler was not registered to begin with.
   *
   * @param factory the handler factory to unregister
   * @return true if the handler was registered and is now unregistered, false otherwise
  */
  unregisterHandler(factory: Factory<Handler>): boolean;
  /**
   * Check whether a player has the region bypass permission.
   *
   * The return value may be cached for a few seconds.
   *
   * @param player The player
   * @param world The world
   * @return A value
  */
  hasBypass(player: LocalPlayer, world: World): boolean;
  /**
   * Re-initialize handlers and clear "last position," "last state," etc.
   * information.
   *
   * @param player The player
  */
  resetState(player: LocalPlayer): void;
  /**
   * Get a player's session, if one exists.
   *
   * @param player The player
   * @return The session
  */
  getIfPresent(player: LocalPlayer): Session | null;
  /**
   * Get a player's session. A session will be created if there is no
   * existing session for the player.
   *
   * This method can only be called from the main thread. While the
   * session manager itself is thread-safe, some of the handlers may
   * require initialization that requires the server main thread.
   *
   * @param player The player to get a session for
   * @return The `player`'s session
  */
  get(player: LocalPlayer): Session;
  /**
   * Create a session for a player.
   *
   * @param player The player
   * @return The new session
  */
  createSession(player: LocalPlayer): Session;
}
export class WorldPlayerTuple {
  constructor(world: World, player: LocalPlayer);
  equals(o: any): boolean;
  getPlayer(): LocalPlayer;
  getWorld(): World;
  hashCode(): number;
}

}
declare module 'com.sk89q.worldguard.protection.managers.migration' {
import { Field } from 'java.lang.reflect';
import { Logger } from 'java.util.logging';
import { Set, Timer, UUID } from 'java.util';
import { Throwable, Exception } from 'java.lang';
import { FlagRegistry } from 'com.sk89q.worldguard.protection.flags.registry';
import { World } from 'com.sk89q.worldedit.world';
import { ConcurrentMap } from 'java.util.concurrent';
import { ProfileService } from 'com.sk89q.worldguard.util.profile.resolver';
import { RegionDriver } from 'com.sk89q.worldguard.protection.managers.storage';
/**
 * Thrown when a migration fails.
*/
export class MigrationException extends Exception {
  constructor();
  constructor(message: string);
  constructor(message: string, cause: Throwable);
  constructor(cause: Throwable);
}
/**
 * Handles migration from one region store driver to another.
*/
export class DriverMigration {
  /**
   * Create a new instance.
   *
   * @param driver the source storage driver
   * @param target the target storage driver
   * @param flagRegistry the flag registry
  */
  constructor(driver: RegionDriver, target: RegionDriver, flagRegistry: FlagRegistry);
}
export class WorldHeightMigration {
  constructor(driver: RegionDriver, flagRegistry: FlagRegistry, world: World | null);
}
/**
 * An object that migrates region data.
*/
export class Migration {
  /**
   * Execute the migration.
   *
   * @throws MigrationException thrown if the migration fails
  */
  migrate(): void;
}
/**
 * Migrates names to UUIDs for all the worlds in a region store.
*/
export class UUIDMigration {
  /**
   * Create a new instance.
   *
   * @param driver the storage driver
   * @param profileService the profile service
   * @param flagRegistry the flag registry
  */
  constructor(driver: RegionDriver, profileService: ProfileService, flagRegistry: FlagRegistry);
  /**
   * Get whether names that have no UUID equivalent (i.e. name that is not
   * owned) should be kept as names and not removed.
   *
   * @return true to keep names
  */
  getKeepUnresolvedNames(): boolean;
  /**
   * Set whether names that have no UUID equivalent (i.e. name that is not
   * owned) should be kept as names and not removed.
   *
   * @param keepUnresolvedNames true to keep names
  */
  setKeepUnresolvedNames(keepUnresolvedNames: boolean): void;
}

}
declare module 'com.sk89q.worldguard.protection.regions.RegionQuery' {
import { ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { Enum } from 'java.lang';
import { Set, Collection, List } from 'java.util';
import { RegionCollectionConsumer } from 'com.sk89q.worldguard.protection.util';
/**
 * Options for constructing a region set via
 * {@link #getApplicableRegions(Location, QueryOption)} for example.
*/
export class QueryOption extends Enum<QueryOption> {
  /**
   * Constructs a region set that does not include parent regions and
   * may be left unsorted (but a cached, sorted set of the same regions
   * may be returned).
  */
  static readonly NONE: QueryOption;
  /**
   * Constructs a region set that does not include parent regions and is
   * sorted by {@link NormativeOrders}.
  */
  static readonly SORT: QueryOption;
  /**
   * Constructs a region set that includes parent regions and is sorted by
   * {@link NormativeOrders}.
  */
  static readonly COMPUTE_PARENTS: QueryOption;
  static valueOf(name: string): QueryOption;
  static values(): QueryOption[];
  /**
   * Create a {@link RegionCollectionConsumer} with the given collection
   * used for the {@link RegionIndex}. Internal API.
   *
   * @param collection the collection
   * @return a region collection consumer
  */
  createIndexConsumer(collection: Collection<any>): RegionCollectionConsumer;
  /**
   * Convert the set of regions to a list. Sort and add parents if
   * necessary. Internal API.
   *
   * @param applicable the set of regions
   * @return a list of regions
  */
  constructResult(applicable: Set<ProtectedRegion>): ProtectedRegion[];
}

}
declare module 'com.sk89q.worldguard.session.handler.FeedFlag' {
import { FeedFlag } from 'com.sk89q.worldguard.session.handler';
import { Factory as com_sk89q_worldguard_session_handler_Handler_Factory } from 'com.sk89q.worldguard.session.handler.Handler';
import { Session } from 'com.sk89q.worldguard.session';
export class Factory extends com_sk89q_worldguard_session_handler_Handler_Factory<FeedFlag> {
  create(session: Session): FeedFlag;
}

}
declare module 'com.sk89q.worldguard.bukkit.listener.debounce.legacy.AbstractEventDebounce' {
export class Entry {
  setCancelled(cancelled: boolean): void;
}

}
declare module 'com.sk89q.worldguard.commands.region' {
import { TextComponentProducer } from 'com.sk89q.worldedit.util.formatting.component';
import { Logger } from 'java.util.logging';
import { ProtectedRegion } from 'com.sk89q.worldguard.protection.regions';
import { ProfileCache } from 'com.sk89q.worldguard.util.profile.cache';
import { WorldGuard } from 'com.sk89q.worldguard';
import { Callable } from 'java.util.concurrent';
import { TextComponent } from 'com.sk89q.worldedit.util.formatting.text';
import { RegionPermissionModel } from 'com.sk89q.worldguard.internal.permission';
import { CommandContext } from 'com.sk89q.minecraft.util.commands';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
/**
 * Create a region printout, as used in /region info to show information about
 * a region.
*/
export class RegionPrintoutBuilder extends Callable<TextComponent> {
  /**
   * Create a new instance with a region to report on.
   *
   * @param region the region
   * @param cache a profile cache, or `null`
  */
  constructor(world: string, region: ProtectedRegion, cache: ProfileCache | null, actor: Actor | null);
  /**
   * Add a new line.
  */
  newline(): void;
  /**
   * Add region name, type, and priority.
  */
  appendBasics(): void;
  /**
   * Add information about flags.
  */
  appendFlags(): void;
  /**
   * Append just the list of flags (without "Flags:"), including colors.
   *
   * @param useColors true to use colors
  */
  appendFlagsList(useColors: boolean): void;
  /**
   * Add information about parents.
  */
  appendParents(): void;
  /**
   * Add information about parents.
   * 
   * @param useColors true to use colors
  */
  appendParentTree(useColors: boolean): void;
  /**
   * Add information about members.
  */
  appendDomain(): void;
  /**
   * Add information about coordinates.
  */
  appendBounds(): void;
  call(): TextComponent;
  /**
   * Send the report to a {@link Actor}.
   *
   * @param sender the recipient
  */
  send(sender: Actor): void;
  append(str: string): TextComponentProducer;
  append(component: TextComponent): TextComponentProducer;
  toComponent(): TextComponent;
  toString(): string;
}
/**
 * Implements the /region commands for WorldGuard.
*/
export class RegionCommands {
  constructor(worldGuard: WorldGuard);
  /**
   * Defines a new region.
   * 
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  define(args: CommandContext, sender: Actor): void;
  /**
   * Re-defines a region with a new selection.
   *
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  redefine(args: CommandContext, sender: Actor): void;
  /**
   * Claiming command for users.
   *
   * This command is a joke and it needs to be rewritten. It was contributed
   * code :(
   *
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  claim(args: CommandContext, sender: Actor): void;
  /**
   * Get a WorldEdit selection from a region.
   *
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  select(args: CommandContext, sender: Actor): void;
  /**
   * Get information about a region.
   *
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  info(args: CommandContext, sender: Actor): void;
  /**
   * List regions.
   *
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  list(args: CommandContext, sender: Actor): void;
  /**
   * Set a flag.
   *
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  flag(args: CommandContext, sender: Actor): void;
  flagHelper(args: CommandContext, sender: Actor): void;
  /**
   * Set the priority of a region.
   *
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  setPriority(args: CommandContext, sender: Actor): void;
  /**
   * Set the parent of a region.
   *
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  setParent(args: CommandContext, sender: Actor): void;
  /**
   * Remove a region.
   *
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  remove(args: CommandContext, sender: Actor): void;
  /**
   * Reload the region database.
   *
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  load(args: CommandContext, sender: Actor): void;
  /**
   * Re-save the region database.
   *
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  save(args: CommandContext, sender: Actor): void;
  /**
   * Migrate the region database.
   *
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  migrateDB(args: CommandContext, sender: Actor): void;
  /**
   * Migrate the region databases to use UUIDs rather than name.
   *
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  migrateUuid(args: CommandContext, sender: Actor): void;
  /**
   * Migrate regions that went from 0-255 to new world heights.
   *
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  migrateHeights(args: CommandContext, sender: Actor): void;
  /**
   * Teleport to a region
   * 
   * @param args the arguments
   * @param sender the sender
   * @throws CommandException any error
  */
  teleport(args: CommandContext, sender: Actor): void;
  toggleBypass(args: CommandContext, sender: Actor): void;
}
export class MemberCommands {
  constructor(worldGuard: WorldGuard);
  addMember(args: CommandContext, sender: Actor): void;
  addOwner(args: CommandContext, sender: Actor): void;
  removeMember(args: CommandContext, sender: Actor): void;
  removeOwner(args: CommandContext, sender: Actor): void;
}

}
declare module 'com.sk89q.worldguard.session.handler.Handler' {
import { Session } from 'com.sk89q.worldguard.session';
export class Factory<T> {
  create(session: Session): T;
}

}
declare module 'com.sk89q.worldguard.blacklist.event' {
import { Enum, Class } from 'java.lang';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { LocalPlayer } from 'com.sk89q.worldguard';
import { Target } from 'com.sk89q.worldguard.blacklist.target';
export class BlockPlaceBlacklistEvent {
  /**
   * Construct the object.
   *
   * @param player The player associated with this event
   * @param position The position the event occurred at
   * @param target The target of the event
  */
  constructor(player: LocalPlayer | null, position: BlockVector3, target: Target);
  getDescription(): string;
  getEventType(): EventType;
}
export class BlockDispenseBlacklistEvent {
  /**
   * Construct the object.
   *
   * @param player The player associated with this event
   * @param position The position the event occurred at
   * @param target The target of the event
  */
  constructor(player: LocalPlayer | null, position: BlockVector3, target: Target);
  getDescription(): string;
  getLoggerMessage(): string;
  getEventType(): EventType;
}
export class ItemEquipBlacklistEvent {
  /**
   * Construct the object.
   *
   * @param player The player associated with this event
   * @param position The position the event occurred at
   * @param target The target of the event
  */
  constructor(player: LocalPlayer | null, position: BlockVector3, target: Target);
  getDescription(): string;
  getEventType(): EventType;
}
export class EventType extends Enum<EventType> {
  static readonly BREAK: EventType;
  static readonly PLACE: EventType;
  static readonly INTERACT: EventType;
  static readonly DISPENSE: EventType;
  static readonly DESTROY_WITH: EventType;
  static readonly ACQUIRE: EventType;
  static readonly EQUIP: EventType;
  static readonly DROP: EventType;
  static readonly USE: EventType;
  static valueOf(name: string): EventType;
  static values(): EventType[];
  getEventClass(): Class<BlacklistEvent>;
  getRuleName(): string;
}
export class BlacklistEvent {
  /**
   * Get the player.
   *
   * @return The player associated with this event
  */
  getPlayer(): LocalPlayer | null;
  /**
   * Get the cause name, which is usually the player name.
   *
   * @return the cause name
  */
  getCauseName(): string;
  /**
   * Get the position.
   *
   * @return The position of this event
  */
  getPosition(): BlockVector3;
  /**
   * Get the position that should be logged.
   *
   * @return The position that be logged.
  */
  getLoggedPosition(): BlockVector3;
  /**
   * Get the item type.
   *
   * @return The type associated with this event
  */
  getTarget(): Target;
  /**
   * Get a short description such as "break" or "destroy with."
   *
   * @return The event description
  */
  getDescription(): string;
  /**
   * Get a message for logger outputs.
   *
   * @return A logging message
  */
  getLoggerMessage(): string;
  /**
   * Get the event type.
   *
   * @return the type
  */
  getEventType(): EventType;
}
export class ItemAcquireBlacklistEvent {
  /**
   * Construct the object.
   *
   * @param player The player associated with this event
   * @param position The position the event occurred at
   * @param target The target of the event
  */
  constructor(player: LocalPlayer | null, position: BlockVector3, target: Target);
  getDescription(): string;
  getEventType(): EventType;
}
export class BlockInteractBlacklistEvent {
  /**
   * Construct the object.
   *
   * @param player The player associated with this event
   * @param position The position the event occurred at
   * @param target The target of the event
  */
  constructor(player: LocalPlayer | null, position: BlockVector3, target: Target);
  getDescription(): string;
  getEventType(): EventType;
}
export class BlockBreakBlacklistEvent {
  /**
   * Construct the object.
   *
   * @param player The player associated with this event
   * @param position The position the event occurred at
   * @param target The target of the event
  */
  constructor(player: LocalPlayer | null, position: BlockVector3, target: Target);
  getDescription(): string;
  getEventType(): EventType;
}
export class ItemUseBlacklistEvent {
  /**
   * Construct the object.
   *
   * @param player The player associated with this event
   * @param position The position the event occurred at
   * @param target The target of the event
  */
  constructor(player: LocalPlayer | null, position: BlockVector3, target: Target);
  getDescription(): string;
  getEventType(): EventType;
}
export class ItemDropBlacklistEvent {
  /**
   * Construct the object.
   *
   * @param player The player associated with this event
   * @param position The position the event occurred at
   * @param target The target of the event
  */
  constructor(player: LocalPlayer | null, position: BlockVector3, target: Target);
  getDescription(): string;
  getEventType(): EventType;
}
export class ItemDestroyWithBlacklistEvent {
  /**
   * Construct the object.
   *
   * @param player The player associated with this event
   * @param position The position the event occurred at
   * @param target The target of the event
  */
  constructor(player: LocalPlayer | null, position: BlockVector3, target: Target);
  getDescription(): string;
  getEventType(): EventType;
  getLoggedPosition(): BlockVector3;
}

}
declare module 'com.sk89q.worldguard.blacklist.logger' {
import { Logger } from 'java.util.logging';
import { Connection } from 'java.sql';
import { Comparable } from 'java.lang';
import { TreeMap } from 'java.util';
import { SimpleDateFormat } from 'java.text';
import { Pattern } from 'java.util.regex';
import { BufferedWriter } from 'java.io';
import { BlacklistEvent } from 'com.sk89q.worldguard.blacklist.event';
/**
 * Interface for loggers for the blacklist.
*/
export class LoggerHandler {
  /**
   * Log an event.
   *
   * @param event The event
   * @param comment The comment to log with the event
  */
  logEvent(event: BlacklistEvent, comment: string): void;
  /**
   * Close the logger.
  */
  close(): void;
}
export class DatabaseHandler extends LoggerHandler {
  /**
   * Construct the object.
   *
   * @param dsn The DSN for the connection
   * @param user The username to connect with
   * @param pass The password to connect with
   * @param table The table to log to
   * @param worldName The name of the world to log
   * @param logger The logger to log errors to
  */
  constructor(dsn: string, user: string, pass: string, table: string, worldName: string, logger: Logger);
  /**
   * Log an event.
   *
   * @param event The event
   * @param comment The comment to log with the event
  */
  logEvent(event: BlacklistEvent, comment: string): void;
  /**
   * Close the logger.
  */
  close(): void;
}
export class FileHandler extends LoggerHandler {
  /**
   * Construct the object.
   *
   * @param pathPattern The pattern for the log file path
   * @param worldName The name of the world
   * @param logger The logger used to log errors
  */
  constructor(pathPattern: string, worldName: string, logger: Logger);
  /**
   * Construct the object.
   *
   * @param pathPattern The pattern for logfile paths
   * @param cacheSize The size of the file cache
   * @param worldName The name of the associated world
   * @param logger The logger to log errors with
  */
  constructor(pathPattern: string, cacheSize: number, worldName: string, logger: Logger);
  /**
   * Log an event.
   *
   * @param event The event
   * @param comment The comment to log with the event
  */
  logEvent(event: BlacklistEvent, comment: string): void;
  /**
   * Close the logger.
  */
  close(): void;
}
export class ConsoleHandler extends LoggerHandler {
  constructor(worldName: string, logger: Logger);
  /**
   * Log an event.
   *
   * @param event The event
   * @param comment The comment to log with the event
  */
  logEvent(event: BlacklistEvent, comment: string): void;
  /**
   * Close the logger.
  */
  close(): void;
}
export class LogFileWriter extends Comparable<LogFileWriter> {
  path: string;
  /**
   * Construct the object.
   *
   * @param path The path to write to
   * @param writer The writer for the file
  */
  constructor(path: string, writer: BufferedWriter);
  /**
   * File path.
   *
   * @return The path the logger is logging to
  */
  getPath(): string;
  /**
   * @return the writer being logged to
  */
  getWriter(): BufferedWriter;
  /**
   * @return the lastUse
  */
  getLastUse(): number;
  /**
   * Update last use time.
  */
  updateLastUse(): void;
  compareTo(other: LogFileWriter | null): number;
}

}
declare module 'com.sk89q.worldguard.util' {
import { InvalidComponentException } from 'com.sk89q.worldedit.util.formatting.component';
import { Property } from 'com.sk89q.worldedit.registry.state';
import { Map } from 'java.util';
import { World } from 'com.sk89q.worldedit.world';
import { ExceptionConverterHelper } from 'com.sk89q.worldedit.internal.command.exception';
import { CancellationException, RejectedExecutionException } from 'java.util.concurrent';
import { UnresolvedNamesException } from 'com.sk89q.worldguard.protection.util';
import { Entity } from 'com.sk89q.worldedit.entity';
import { NumberFormatException, Class, InterruptedException } from 'java.lang';
import { Pattern } from 'java.util.regex';
import { LocalPlayer } from 'com.sk89q.worldguard';
import { Location } from 'com.sk89q.worldedit.util';
import { WorldEditException } from 'com.sk89q.worldedit';
import { AuthorizationException } from 'com.sk89q.worldedit.util.auth';
import { StorageException } from 'com.sk89q.worldguard.protection.managers.storage';
import { BlockType } from 'com.sk89q.worldedit.world.block';
/**
 * Normal names are strings that are considered equal after they have been
 * normalized using Unicode's NFC form and made lowercase.
*/
export class Normal {
  /**
   * Get the original name before normalization.
   *
   * @return the original name before normalization
  */
  getName(): string;
  /**
   * Get the normalized name.
   *
   * @return the normal name
  */
  getNormal(): string;
  /**
   * Normalize a string according to the rules of this class.
   *
   * @param name an string
   * @return the normalized string
  */
  static normalize(name: string): string;
  /**
   * Create a new instance.
   *
   * @param name the name
   * @return an instance
  */
  static normal(name: string): Normal;
  equals(o: any): boolean;
  hashCode(): number;
  /**
   * Return the un-normalized name.
   *
   * @return the un-normalized name
  */
  toString(): string;
}
/**
 * Math-related utilities.
*/
export class MathUtils {
  /**
   * Returns the product of `a` and `b`, provided it does not overflow.
   *
   * Borrowed from Google Guava since Bukkit uses an old version.
   *
   * @throws ArithmeticException if `a * b` overflows in signed `long` arithmetic
  */
  static checkedMultiply(a: number, b: number): number;
}
export class SpongeUtil {
  /**
   * Remove water around a sponge.
   *
   * @param world The world the sponge is in
   * @param ox The x coordinate of the 'sponge' block
   * @param oy The y coordinate of the 'sponge' block
   * @param oz The z coordinate of the 'sponge' block
  */
  static clearSpongeWater(world: World, ox: number, oy: number, oz: number): void;
  /**
   * Add water around a sponge.
   * 
   * @param world The world the sponge is located in
   * @param ox The x coordinate of the 'sponge' block
   * @param oy The y coordinate of the 'sponge' block
   * @param oz The z coordinate of the 'sponge' block
  */
  static addSpongeWater(world: World, ox: number, oy: number, oz: number): void;
}
/**
 * Helper methods for enums.
*/
export class Enums {
  /**
   * Search the given enum for a value that is equal to the one of the
   * given values, searching in an ascending manner.
   *
   * @param enumType the enum type
   * @param values the list of values
   * @param  the type of enum
   * @return the found value or null
  */
  static findByValue<T>(enumType: Class<T>, ...values: string[]): T | null;
  /**
   * Search the given enum for a value that is equal to the one of the
   * given values, searching in an ascending manner.
   *
   * Some fuzzy matching of the provided values may be performed.
   *
   * @param enumType the enum type
   * @param values the list of values
   * @param  the type of enum
   * @return the found value or null
  */
  static findFuzzyByValue<T>(enumType: Class<T>, ...values: string[]): T | null;
}
export class MessagingUtil {
  static sendStringToChat(player: LocalPlayer, message: string): void;
  static sendStringToTitle(player: LocalPlayer, message: string): void;
}
export class Locations {
  /**
   * Tests whether two different locations are in two different blocks.
   *
   * @param a The first location
   * @param b The second location
   * @return Whether the two locations are two different blocks
  */
  static isDifferentBlock(a: Location, b: Location): boolean;
}
/**
 * An object that keeps track of a dirty flag that is set to true when changes
 * are made to this object.
*/
export class ChangeTracked {
  /**
   * Tests whether changes have been made.
   *
   * @return true if changes have been made
  */
  isDirty(): boolean;
  /**
   * Set whether changes have been made.
   *
   * @param dirty a new dirty state
  */
  setDirty(dirty: boolean): void;
}
export class Entities {
  /**
   * Returns whether an entity should be removed for the halt activity mode.
   *
   * @param entity The entity
   * @return true if it's to be removed
  */
  static isIntensiveEntity(entity: Entity): boolean;
}
export class WorldGuardExceptionConverter extends ExceptionConverterHelper {
  convert(e: NumberFormatException): void;
  convert(e: InvalidComponentException): void;
  convert(e: StorageException): void;
  convert(e: RejectedExecutionException): void;
  convert(e: CancellationException): void;
  convert(e: InterruptedException): void;
  convert(e: WorldEditException): void;
  convert(e: UnresolvedNamesException): void;
  convert(e: AuthorizationException): void;
}

}
