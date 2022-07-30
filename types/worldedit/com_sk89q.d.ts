declare module 'com.sk89q.worldedit.world.snapshot.experimental.fs' {
import { CompoundTag } from 'com.sk89q.jnbt';
import { Optional, List } from 'java.util';
import { ZonedDateTime } from 'java.time';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { URI } from 'java.net';
import { ArchiveNioSupport } from 'com.sk89q.worldedit.util.io.file';
import { Stream } from 'java.util.stream';
import { Snapshot, SnapshotInfo, SnapshotDatabase } from 'com.sk89q.worldedit.world.snapshot.experimental';
import { AtomicReference } from 'java.util.concurrent.atomic';
import { Closer } from 'com.sk89q.worldedit.util.io';
import { SnapshotDateTimeParser } from 'com.sk89q.worldedit.util.time';
import { Path } from 'java.nio.file';
/**
 * Snapshot based on a world folder. Extracts chunks from the region folder.
 *
 * 
 * Note that the Path can belong to another filesystem. This allows easy integration with
 * zips due to Java's built-in zipfs support.
 * 
*/
export class FolderSnapshot extends Snapshot {
  constructor(info: SnapshotInfo, folder: Path, closeCallback: Closer | null);
  getFolder(): Path;
  getInfo(): SnapshotInfo;
  /**
   * Get the chunk information for the given position. Implementations may ignore the Y-chunk
   * if its chunks are only stored in 2D.
   *
   * @param position the position of the chunk
   * @return the tag containing chunk data
  */
  getChunkTag(position: BlockVector3): CompoundTag;
  /**
   * Close this snapshot. This releases the IO handles used to load chunk information.
  */
  close(): void;
}
/**
 * Implements a snapshot database based on a filesystem.
*/
export class FileSystemSnapshotDatabase extends SnapshotDatabase {
  static tryParseDate(path: Path): ZonedDateTime;
  static createUri(name: string): URI;
  static maybeCreate(root: Path, archiveNioSupport: ArchiveNioSupport): FileSystemSnapshotDatabase;
  constructor(root: Path, archiveNioSupport: ArchiveNioSupport);
  getRoot(): Path;
  /**
   * Get the URI scheme handled by this database.
  */
  getScheme(): string;
  /**
   * Get a snapshot by name.
   *
   * @param name the name of the snapshot
   * @return the snapshot if available
  */
  getSnapshot(name: URI): Optional<Snapshot>;
  /**
   * Get all snapshots by world, unsorted. The stream should be
   * {@linkplain Stream#close() closed}, as it may allocate filesystem or network resources.
   *
   * @param worldName the name of the world
   * @return a stream of all snapshots for the given world in this database
  */
  getSnapshots(worldName: string): Stream<Snapshot>;
}

}
declare module 'com.sk89q.worldedit.function.mask.OffsetsMask' {
import { Iterable } from 'java.lang';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { Mask, OffsetsMask } from 'com.sk89q.worldedit.function.mask';
/**
 * A builder for an {@link OffsetsMask}.
*/
export class Builder {
  /**
   * Set the mask to test.
   * @param mask the mask to test
   * @return this builder, for chaining
  */
  mask(mask: Mask): Builder;
  /**
   * Set whether the mask should fail if the original position matches. Defaults to
   * `false`.
   *
   * @param excludeSelf `true` to exclude the original position if it matches
   * @return this builder, for chaining
  */
  excludeSelf(excludeSelf: boolean): Builder;
  /**
   * Set the minimum amount of matches required. Defaults to `1`. Must be smaller than
   * or equal to the {@linkplain #maxMatches(int) max matches} and the {@link #offsets} size,
   * and greater than or equal to `0`.
   *
   * @param minMatches the minimum amount of matches required
   * @return this builder, for chaining
  */
  minMatches(minMatches: number): Builder;
  /**
   * Set the maximum amount of matches allowed. Defaults to {@link Integer#MAX_VALUE}. Must
   * be greater than or equal to {@linkplain #minMatches(int)}.
   *
   * @param maxMatches the maximum amount of matches allowed
   * @return this builder, for chaining
  */
  maxMatches(maxMatches: number): Builder;
  /**
   * Set the offsets to test. Defaults to all {@linkplain Flag#CARDINAL cardinal}
   * and {@linkplain Flag#UPRIGHT upright} directions.
   *
   * @param offsets the offsets to test
   * @return this builder, for chaining
  */
  offsets(offsets: Iterable<BlockVector3>): Builder;
  /**
   * Build an offsets mask.
   *
   * @return the new mask
  */
  build(): OffsetsMask;
}

}
declare module 'com.sk89q.worldedit.internal' {
import { List } from 'java.util';
import { ConfigurationLoadEvent } from 'com.sk89q.worldedit.event.platform';
export class Constants {
  /**
   * List of top level NBT fields that should not be copied to a world,
   * such as UUIDLeast and UUIDMost.
  */
  static readonly NO_COPY_ENTITY_NBT_FIELDS: string[];
  /**
   * The DataVersion for Minecraft 1.13
  */
  static readonly DATA_VERSION_MC_1_13: number;
  /**
   * The DataVersion for Minecraft 1.13.2
  */
  static readonly DATA_VERSION_MC_1_13_2: number;
  /**
   * The DataVersion for Minecraft 1.14
  */
  static readonly DATA_VERSION_MC_1_14: number;
  /**
   * The DataVersion for Minecraft 1.15
  */
  static readonly DATA_VERSION_MC_1_15: number;
  /**
   * The DataVersion for Minecraft 1.16
  */
  static readonly DATA_VERSION_MC_1_16: number;
  /**
   * The DataVersion for Minecraft 1.17
  */
  static readonly DATA_VERSION_MC_1_17: number;
}
export class SchematicsEventListener {
  onConfigLoad(event: ConfigurationLoadEvent): void;
}

}
declare module 'com.sk89q.worldedit.world.fluid' {
import { Category, NamespacedRegistry, Keyed } from 'com.sk89q.worldedit.registry';
/**
 * Stores a list of categories of Block Types.
*/
export class FluidCategories {
  static readonly LAVA: FluidCategory;
  static readonly WATER: FluidCategory;
  static register(tag: FluidCategory): FluidCategory;
  static get(id: string): FluidCategory | null;
}
/**
 * A category of fluids. This is due to the splitting up of
 * blocks such as wool into separate ids.
*/
export class FluidCategory extends Category<FluidType> {
  static readonly REGISTRY: NamespacedRegistry<FluidCategory>;
  constructor(id: string);
}
export interface FluidCategory extends Category<FluidType>, Keyed {}
/**
 * Stores a list of common Fluid String IDs.
*/
export class FluidTypes {
  static readonly EMPTY: FluidType;
  static readonly FLOWING_LAVA: FluidType;
  static readonly FLOWING_WATER: FluidType;
  static readonly LAVA: FluidType;
  static readonly WATER: FluidType;
  static register(fluid: FluidType): FluidType;
  static get(id: string): FluidType | null;
}
/**
 * Minecraft now has a 'fluid' system. This is a
 * stub class to represent what it may be in the future.
*/
export class FluidType extends Keyed {
  static readonly REGISTRY: NamespacedRegistry<FluidType>;
  constructor(id: string);
  /**
   * Gets the ID of this block.
   *
   * @return The id
  */
  getId(): string;
  toString(): string;
  hashCode(): number;
  equals(obj: any): boolean;
}

}
declare module 'com.sk89q.worldedit.world.storage.ChunkStoreHelper' {
import { InputStream } from 'java.io';
export class ChunkDataInputSupplier {
  openInputStream(): InputStream;
}

}
declare module 'com.sk89q.worldedit.regions.factory' {
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { Region } from 'com.sk89q.worldedit.regions';
export class RegionFactory {
  createCenteredAt(position: BlockVector3, size: number): Region;
}
export class CuboidRegionFactory extends RegionFactory {
  createCenteredAt(position: BlockVector3, size: number): Region;
}
export class CylinderRegionFactory extends RegionFactory {
  constructor(height: number);
  createCenteredAt(position: BlockVector3, size: number): Region;
}
export class SphereRegionFactory extends RegionFactory {
  createCenteredAt(position: BlockVector3, size: number): Region;
}

}
declare module 'com.sk89q.worldedit.extension.factory.parser.pattern' {
import { Pattern as java_util_regex_Pattern } from 'java.util.regex';
import { Stream } from 'java.util.stream';
import { ParserContext } from 'com.sk89q.worldedit.extension.input';
import { WorldEdit } from 'com.sk89q.worldedit';
import { Pattern } from 'com.sk89q.worldedit.function.pattern';
import { InputParser } from 'com.sk89q.worldedit.internal.registry';
export class TypeOrStateApplyingPatternParser extends InputParser<Pattern> {
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): Stream<string>;
  parseFromInput(input: string, context: ParserContext): Pattern;
}
export class BlockCategoryPatternParser extends InputParser<Pattern> {
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): Stream<string>;
  parseFromInput(input: string, context: ParserContext): Pattern;
}
export class RandomPatternParser extends InputParser<Pattern> {
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): Stream<string>;
  parseFromInput(input: string, context: ParserContext): Pattern;
}
export class SingleBlockPatternParser extends InputParser<Pattern> {
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): Stream<string>;
  parseFromInput(input: string, context: ParserContext): Pattern;
}
export class RandomStatePatternParser extends InputParser<Pattern> {
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): Stream<string>;
  parseFromInput(input: string, context: ParserContext): Pattern;
}
export class ClipboardPatternParser extends InputParser<Pattern> {
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): Stream<string>;
  parseFromInput(input: string, context: ParserContext): Pattern;
}

}
declare module 'com.sk89q.worldedit.regions.selector.limit' {
import { Optional } from 'java.util';
/**
 * Defines limits for selections.
*/
export class SelectorLimits {
  /**
   * Get the optionally defined vertex limit for polygons.
   *
   * If one is not present, then there is no limitation.
   *
   * @return an optional vertex limit
  */
  getPolygonVertexLimit(): Optional<number>;
  /**
   * Get the optionally defined vertex limit for polyhedrons.
   *
   * If one is not present, then there is no limitation.
   *
   * @return an optional vertex limit
  */
  getPolyhedronVertexLimit(): Optional<number>;
}
/**
 * No limits at all.
*/
export class PermissiveSelectorLimits extends SelectorLimits {
  /**
   * Get the optionally defined vertex limit for polygons.
   *
   * If one is not present, then there is no limitation.
   *
   * @return an optional vertex limit
  */
  getPolygonVertexLimit(): Optional<number>;
  /**
   * Get the optionally defined vertex limit for polyhedrons.
   *
   * If one is not present, then there is no limitation.
   *
   * @return an optional vertex limit
  */
  getPolyhedronVertexLimit(): Optional<number>;
  /**
   * Get a static instance.
   *
   * @return an instance
  */
  static getInstance(): PermissiveSelectorLimits;
}

}
declare module 'com.sk89q.worldedit.function.factory' {
import { Vector3 } from 'com.sk89q.worldedit.math';
import { FlatRegion, Region } from 'com.sk89q.worldedit.regions';
import { Mode } from 'com.sk89q.worldedit.function.factory.Deform';
import { Operation } from 'com.sk89q.worldedit.function.operation';
import { BiomePattern } from 'com.sk89q.worldedit.function.pattern';
import { Expression } from 'com.sk89q.worldedit.internal.expression';
import { Extent } from 'com.sk89q.worldedit.extent';
import { RegionFunction, Contextual, LayerFunction, EditContext } from 'com.sk89q.worldedit.function';
export class Snow extends Contextual<LayerFunction> {
  constructor(stack: boolean);
  createFromContext(context: EditContext): LayerFunction;
  toString(): string;
}
export class ApplyLayer extends Contextual<Operation> {
  constructor(func: Contextual<LayerFunction>);
  constructor(region: FlatRegion, func: Contextual<LayerFunction>);
  createFromContext(context: EditContext): Operation;
  toString(): string;
}
export class Paint extends Contextual<Operation> {
  constructor(func: Contextual<RegionFunction>, density: number);
  constructor(destination: Extent, region: Region, func: Contextual<RegionFunction>, density: number);
  createFromContext(context: EditContext): Operation;
  toString(): string;
}
export class ApplyRegion extends Contextual<Operation> {
  constructor(func: Contextual<RegionFunction>);
  constructor(region: Region, func: Contextual<RegionFunction>);
  createFromContext(context: EditContext): Operation;
  toString(): string;
}
export class Deform extends Contextual<Operation> {
  constructor(expression: string);
  constructor(expression: string, mode: Mode);
  constructor(destination: Extent, region: Region, expression: string);
  constructor(destination: Extent, region: Region, expression: string, mode: Mode);
  getDestination(): Extent;
  setDestination(destination: Extent);
  getRegion(): Region;
  setRegion(region: Region);
  getMode(): Mode;
  setMode(mode: Mode);
  getOffset(): Vector3;
  setOffset(offset: Vector3);
  toString(): string;
  createFromContext(context: EditContext): Operation;
}
export class BiomeFactory extends Contextual<RegionFunction> {
  constructor(biomeType: BiomePattern);
  createFromContext(context: EditContext): RegionFunction;
  toString(): string;
}
/**
 * Creates an operation from a region context.
 *
 * @deprecated Use {@link ApplyRegion} or {@link ApplyLayer}
 *     depending on function type.
*/
export class Apply extends Contextual<Operation> {
  constructor(func: Contextual<RegionFunction>);
  constructor(region: Region, func: Contextual<RegionFunction>);
  createFromContext(context: EditContext): Operation;
  toString(): string;
}

}
declare module 'com.sk89q.worldedit.util.logging' {
import { Filter, LogRecord, Formatter, StreamHandler, Level } from 'java.util.logging';
import { Date } from 'java.util';
/**
 * A standard logging format for WorldEdit.
*/
export class LogFormat extends Formatter {
  static readonly DEFAULT_FORMAT: string;
  constructor();
  constructor(format: string);
  format(record: LogRecord): string;
}
/**
 * A {@link StreamHandler} delegate that allows for the swap and disable of
 * another handler. When {@link #setHandler(StreamHandler)} is called with
 * null, then records passed onto this handler will be dropped. Otherwise,
 * the delegate handler will receive those records.
*/
export class DynamicStreamHandler extends StreamHandler {
  /**
   * Get the delegate handler.
   *
   * @return the delegate handler (Which may be null)
  */
  getHandler(): StreamHandler | null;
  /**
   * Set the handler.
   *
   * @param handler the delegate handler (which can be null)
  */
  setHandler(handler: StreamHandler | null);
  publish(record: LogRecord): void;
  close(): void;
  setEncoding(encoding: string | null);
  isLoggable(record: LogRecord): boolean;
  flush(): void;
  setFormatter(formatter: Formatter | null);
  getFormatter(): Formatter;
  getEncoding(): string;
  setFilter(filter: Filter | null);
  getFilter(): Filter;
  setLevel(level: Level);
  getLevel(): Level;
}

}
declare module 'com.sk89q.worldedit.function.util' {
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { RegionFunction, FlatRegionFunction } from 'com.sk89q.worldedit.function';
/**
 * Offsets the position parameter by adding a given offset vector.
*/
export class RegionOffset extends RegionFunction {
  /**
   * Create a new instance.
   *
   * @param offset the offset
   * @param function the function that is called with the offset position
  */
  constructor(offset: BlockVector3, func: RegionFunction);
  /**
   * Get the offset that is added to the position.
   *
   * @return the offset
  */
  getOffset(): BlockVector3;
  /**
   * Set the offset that is added to the position.
   *
   * @param offset the offset
  */
  setOffset(offset: BlockVector3);
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3): boolean;
}
/**
 * Offsets the position parameter by adding a given offset vector.
*/
export class FlatRegionOffset extends FlatRegionFunction {
  /**
   * Create a new instance.
   *
   * @param offset the offset
   * @param function the function that is called with the offset position
  */
  constructor(offset: BlockVector2, func: FlatRegionFunction);
  /**
   * Get the offset that is added to the position.
   *
   * @return the offset
  */
  getOffset(): BlockVector2;
  /**
   * Set the offset that is added to the position.
   *
   * @param offset the offset
  */
  setOffset(offset: BlockVector2);
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector2): boolean;
}

}
declare module 'com.sk89q.worldedit.world.biome' {
import { BiomeRegistry } from 'com.sk89q.worldedit.world.registry';
import { Collection } from 'java.util';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { BiomePattern } from 'com.sk89q.worldedit.function.pattern';
import { NamespacedRegistry, Keyed } from 'com.sk89q.worldedit.registry';
/**
 * Stores a list of common {@link BiomeType BiomeTypes}.
 *
 * @see BiomeType
*/
export class BiomeTypes {
  static readonly BADLANDS: BiomeType | null;
  static readonly BADLANDS_PLATEAU: BiomeType | null;
  static readonly BAMBOO_JUNGLE: BiomeType | null;
  static readonly BAMBOO_JUNGLE_HILLS: BiomeType | null;
  static readonly BASALT_DELTAS: BiomeType | null;
  static readonly BEACH: BiomeType | null;
  static readonly BIRCH_FOREST: BiomeType | null;
  static readonly BIRCH_FOREST_HILLS: BiomeType | null;
  static readonly COLD_OCEAN: BiomeType | null;
  static readonly CRIMSON_FOREST: BiomeType | null;
  static readonly DARK_FOREST: BiomeType | null;
  static readonly DARK_FOREST_HILLS: BiomeType | null;
  static readonly DEEP_COLD_OCEAN: BiomeType | null;
  static readonly DEEP_FROZEN_OCEAN: BiomeType | null;
  static readonly DEEP_LUKEWARM_OCEAN: BiomeType | null;
  static readonly DEEP_OCEAN: BiomeType | null;
  static readonly DEEP_WARM_OCEAN: BiomeType | null;
  static readonly DESERT: BiomeType | null;
  static readonly DESERT_HILLS: BiomeType | null;
  static readonly DESERT_LAKES: BiomeType | null;
  static readonly DRIPSTONE_CAVES: BiomeType | null;
  static readonly END_BARRENS: BiomeType | null;
  static readonly END_HIGHLANDS: BiomeType | null;
  static readonly END_MIDLANDS: BiomeType | null;
  static readonly ERODED_BADLANDS: BiomeType | null;
  static readonly FLOWER_FOREST: BiomeType | null;
  static readonly FOREST: BiomeType | null;
  static readonly FROZEN_OCEAN: BiomeType | null;
  static readonly FROZEN_RIVER: BiomeType | null;
  static readonly GIANT_SPRUCE_TAIGA: BiomeType | null;
  static readonly GIANT_SPRUCE_TAIGA_HILLS: BiomeType | null;
  static readonly GIANT_TREE_TAIGA: BiomeType | null;
  static readonly GIANT_TREE_TAIGA_HILLS: BiomeType | null;
  static readonly GRAVELLY_MOUNTAINS: BiomeType | null;
  static readonly ICE_SPIKES: BiomeType | null;
  static readonly JUNGLE: BiomeType | null;
  static readonly JUNGLE_EDGE: BiomeType | null;
  static readonly JUNGLE_HILLS: BiomeType | null;
  static readonly LUKEWARM_OCEAN: BiomeType | null;
  static readonly LUSH_CAVES: BiomeType | null;
  static readonly MODIFIED_BADLANDS_PLATEAU: BiomeType | null;
  static readonly MODIFIED_GRAVELLY_MOUNTAINS: BiomeType | null;
  static readonly MODIFIED_JUNGLE: BiomeType | null;
  static readonly MODIFIED_JUNGLE_EDGE: BiomeType | null;
  static readonly MODIFIED_WOODED_BADLANDS_PLATEAU: BiomeType | null;
  static readonly MOUNTAIN_EDGE: BiomeType | null;
  static readonly MOUNTAINS: BiomeType | null;
  static readonly MUSHROOM_FIELD_SHORE: BiomeType | null;
  static readonly MUSHROOM_FIELDS: BiomeType | null;
  static readonly NETHER: BiomeType | null;
  static readonly NETHER_WASTES: BiomeType | null;
  static readonly OCEAN: BiomeType | null;
  static readonly PLAINS: BiomeType | null;
  static readonly RIVER: BiomeType | null;
  static readonly SAVANNA: BiomeType | null;
  static readonly SAVANNA_PLATEAU: BiomeType | null;
  static readonly SHATTERED_SAVANNA: BiomeType | null;
  static readonly SHATTERED_SAVANNA_PLATEAU: BiomeType | null;
  static readonly SMALL_END_ISLANDS: BiomeType | null;
  static readonly SNOWY_BEACH: BiomeType | null;
  static readonly SNOWY_MOUNTAINS: BiomeType | null;
  static readonly SNOWY_TAIGA: BiomeType | null;
  static readonly SNOWY_TAIGA_HILLS: BiomeType | null;
  static readonly SNOWY_TAIGA_MOUNTAINS: BiomeType | null;
  static readonly SNOWY_TUNDRA: BiomeType | null;
  static readonly SOUL_SAND_VALLEY: BiomeType | null;
  static readonly STONE_SHORE: BiomeType | null;
  static readonly SUNFLOWER_PLAINS: BiomeType | null;
  static readonly SWAMP: BiomeType | null;
  static readonly SWAMP_HILLS: BiomeType | null;
  static readonly TAIGA: BiomeType | null;
  static readonly TAIGA_HILLS: BiomeType | null;
  static readonly TAIGA_MOUNTAINS: BiomeType | null;
  static readonly TALL_BIRCH_FOREST: BiomeType | null;
  static readonly TALL_BIRCH_HILLS: BiomeType | null;
  static readonly THE_END: BiomeType | null;
  static readonly THE_VOID: BiomeType | null;
  static readonly WARM_OCEAN: BiomeType | null;
  static readonly WARPED_FOREST: BiomeType | null;
  static readonly WOODED_BADLANDS_PLATEAU: BiomeType | null;
  static readonly WOODED_HILLS: BiomeType | null;
  static readonly WOODED_MOUNTAINS: BiomeType | null;
  /**
   * Gets the {@link BiomeType} associated with the given id.
  */
  static get(id: string): BiomeType | null;
}
/**
 * Utility methods related to biomes.
 *
 * @deprecated Only method is being deprecated for removal.
*/
export class Biomes {
  /**
   * Find a biome that matches the given input name.
   *
   * @param biomes a list of biomes
   * @param name the name to test
   * @param registry a biome registry
   * @return a biome or null
   * @deprecated This uses the outdated name system. Find names by comparing with their ID instead.
  */
  static findBiomeByName(biomes: Collection<BiomeType>, name: string, registry: BiomeRegistry): BiomeType | null;
}
/**
 * All the types of biomes in the game.
*/
export class BiomeType extends Keyed {
  static readonly REGISTRY: NamespacedRegistry<BiomeType>;
  constructor(id: string);
  /**
   * Gets the ID of this biome.
   *
   * @return The id
  */
  getId(): string;
  toString(): string;
  hashCode(): number;
  equals(obj: any): boolean;
  /**
   * Return a {@link BiomeType} for the given position.
   *
   * @param position the position
   * @return a biome
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  applyBiome(position: BlockVector3): BiomeType;
}
export interface BiomeType extends Keyed, BiomePattern {}
/**
 * Provides information about a biome.
 *
 * @deprecated This no longer returns useful information.
*/
export class BiomeData {
  /**
   * Get the name of the biome, which does not have to follow any
   * particular convention.
   *
   * @return the biome's name
   * @deprecated This method does not work on the server.
   *     Use {@link BiomeRegistry#getRichName(BiomeType)}.
  */
  getName(): string;
}

}
declare module 'com.sk89q.worldedit.history.changeset' {
import { Iterator, List } from 'java.util';
import { Change } from 'com.sk89q.worldedit.history.change';
import { LocatedBlockList } from 'com.sk89q.worldedit.util.collection';
/**
 * Tracks a set of undoable operations and allows their undo and redo. The
 * entirety of a change set should be undone and redone at once.
*/
export class ChangeSet {
  /**
   * Add the given change to the history.
   *
   * @param change the change
  */
  add(change: Change): void;
  /**
   * Whether or not the ChangeSet is recording changes.
   *
   * @return whether or not the ChangeSet is set to record changes
  */
  isRecordingChanges(): boolean;
  /**
   * Tell the change set whether to record changes or not.
   *
   * @param recordChanges whether to record changes or not
  */
  setRecordChanges(recordChanges: boolean): void;
  /**
   * Get a backward directed iterator that can be used for undo.
   *
   * The iterator may return the changes out of order, as long as the final
   * result after all changes have been applied is correct.
   *
   * @return a undo directed iterator
  */
  backwardIterator(): Iterator<Change>;
  /**
   * Get a forward directed iterator that can be used for redo.
   *
   * The iterator may return the changes out of order, as long as the final
   * result after all changes have been applied is correct.
   *
   * @return a forward directed iterator
  */
  forwardIterator(): Iterator<Change>;
  /**
   * Get the number of stored changes.
   *
   * @return the change count
  */
  size(): number;
}
/**
 * An extension of {@link ArrayListHistory} that stores {@link BlockChange}s
 * separately in two {@link ArrayList}s.
 *
 * Whether this is a good idea or not is highly questionable, but this class
 * exists because this is how history was implemented in WorldEdit for
 * many years.
*/
export class BlockOptimizedHistory extends ArrayListHistory {
  add(change: Change): void;
  forwardIterator(): Iterator<Change>;
  backwardIterator(): Iterator<Change>;
  size(): number;
}
/**
 * Stores all {@link Change}s in an {@link ArrayList}.
*/
export class ArrayListHistory extends ChangeSet {
  /**
   * Add the given change to the history.
   *
   * @param change the change
  */
  add(change: Change): void;
  /**
   * Whether or not the ChangeSet is recording changes.
   *
   * @return whether or not the ChangeSet is set to record changes
  */
  isRecordingChanges(): boolean;
  /**
   * Tell the change set whether to record changes or not.
   *
   * @param recordChanges whether to record changes or not
  */
  setRecordChanges(recordChanges: boolean): void;
  /**
   * Get a backward directed iterator that can be used for undo.
   *
   * The iterator may return the changes out of order, as long as the final
   * result after all changes have been applied is correct.
   *
   * @return a undo directed iterator
  */
  backwardIterator(): Iterator<Change>;
  /**
   * Get a forward directed iterator that can be used for redo.
   *
   * The iterator may return the changes out of order, as long as the final
   * result after all changes have been applied is correct.
   *
   * @return a forward directed iterator
  */
  forwardIterator(): Iterator<Change>;
  /**
   * Get the number of stored changes.
   *
   * @return the change count
  */
  size(): number;
}

}
declare module 'com.sk89q.worldedit.util.asset' {
import { Class } from 'java.lang';
import { Set, Optional, List } from 'java.util';
import { ImageHeightmap } from 'com.sk89q.worldedit.util.asset.holder';
import { Callable } from 'java.util.concurrent';
import { WorldEdit } from 'com.sk89q.worldedit';
import { Path } from 'java.nio.file';
export class AssetLoader<T> {
  constructor(worldEdit: WorldEdit, assetDir: Path);
  /**
   * Loads an asset.
   *
   * @param path path in assets directory, can be with and without its file extension
   * @return asset if successfully loaded, null otherwise
  */
  getAsset(path: string): T | null;
  /**
   * The extensions that this asset loader supports.
   *
   * @return The supported extensions
  */
  getAllowedExtensions(): Set<string>;
}
/**
 * Loads and caches image files from WorldEdit's assets directory.
*/
export class ImageHeightmapLoader extends AssetLoader<ImageHeightmap> {
  constructor(worldEdit: WorldEdit, assetDir: Path);
  loadAssetFromPath(path: Path): ImageHeightmap | null;
  getAllowedExtensions(): Set<string>;
}
/**
 * A Callable to load an asset by name.
 *
 * 
 * This is intended to be used with {@link AsyncCommandBuilder} for loading assets in commands.
 * 
 *
 * @param  The asset type
*/
export class AssetLoadTask<T> extends Callable<T> {
  /**
   * Creates an asset load task with the given loader and asset name.
   *
   * @param loader The asset loader
   * @param assetName The asset name
  */
  constructor(loader: AssetLoader<T>, assetName: string);
  call(): T;
}
/**
 * Class to store the various asset loaders.
*/
export class AssetLoaders {
  /**
   * Creates a new AssetManager to load and cache custom assets.
   *
   * @param worldEdit WorldEdit instance
  */
  constructor(worldEdit: WorldEdit);
  init(): void;
  uninit(): void;
  registerAssetLoader<T>(loader: AssetLoader<T>, assetClass: Class<T>): void;
  /**
   * Gets the Asset Loader for the given file of the given type.
   *
   * @param assetClass The class to get a loader for
   * @param filename The filename to attempt to load
   * @param  The returned asset type
  */
  getAssetLoader<T>(assetClass: Class<T>, filename: string): Optional<AssetLoader<T>>;
  /**
   * Get the Asset Loaders for the given type.
   *
   * @param assetClass The class to get the loaders of
   * @return The list of asset loaders
   *
   * @param  The asset type
  */
  getAssetLoaders<T>(assetClass: Class<T>): AssetLoader<T>[];
  /**
   * Gets an immutable list of all files that match a certain asset type.
   *
   * @param assetClass The asset class
   * @return The list of files
  */
  getFilesForAsset(assetClass: Class<any>): Path[];
  /**
   * Gets an immutable copy of all registered asset loaders.
   *
   * @return The asset loaders
  */
  getAssetLoaders(): AssetLoader<any>[];
}

}
declare module 'com.sk89q.worldedit.util.task' {
import { List, Comparator } from 'java.util';
/**
 * Manages running tasks and informs users of their progress, but does not
 * execute the task.
*/
export class Supervisor {
  /**
   * Get a list of running or queued tasks.
   *
   * @return a list of tasks
  */
  getTasks(): Task<any>[];
  /**
   * Monitor the given task.
   *
   * @param task the task
  */
  monitor(task: Task<any>): void;
}
/**
 * Compares task states according to the order of the {@link Task.State}
 * enumeration.
*/
export class TaskStateComparator extends Comparator<Task<any>> {
  compare(o1: Task<any>, o2: Task<any>): number;
}
/**
 * An implementation of a `Supervisor`.
*/
export class SimpleSupervisor extends Supervisor {
  /**
   * Get a list of running or queued tasks.
   *
   * @return a list of tasks
  */
  getTasks(): Task<any>[];
  /**
   * Monitor the given task.
   *
   * @param task the task
  */
  monitor(task: Task<any>): void;
}

}
declare module 'com.sk89q.worldedit.util.SideEffect' {
import { Enum } from 'java.lang';
export class State extends Enum<State> {
  static readonly OFF: State;
  static readonly ON: State;
  static readonly DELAYED: State;
  static valueOf(name: string): State;
  static values(): State[];
  getDisplayName(): string;
}

}
declare module 'com.sk89q.worldedit.extension.factory.parser' {
import { Stream } from 'java.util.stream';
import { ParserContext } from 'com.sk89q.worldedit.extension.input';
import { WorldEdit } from 'com.sk89q.worldedit';
import { BaseItem } from 'com.sk89q.worldedit.blocks';
import { BaseBlock } from 'com.sk89q.worldedit.world.block';
import { InputParser } from 'com.sk89q.worldedit.internal.registry';
export class DefaultItemParser extends InputParser<BaseItem> {
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): Stream<string>;
  parseFromInput(input: string, context: ParserContext): BaseItem;
}
/**
 * Parses block input strings.
*/
export class DefaultBlockParser extends InputParser<BaseBlock> {
  constructor(worldEdit: WorldEdit);
  parseFromInput(input: string, context: ParserContext): BaseBlock;
  getSuggestions(input: string): Stream<string>;
}

}
declare module 'com.sk89q.wepif.PermissionsResolverManager' {
import { Exception } from 'java.lang';
export class MissingPluginException extends Exception {

}

}
declare module 'com.sk89q.worldedit.internal.command' {
import { State } from 'com.sk89q.worldedit.internal.command.CommandArgParser';
import { Logger } from 'java.util.logging';
import { Method } from 'java.lang.reflect';
import { Optional, List, Map, Comparator } from 'java.util';
import { Stream } from 'java.util.stream';
import { CommandCallListener, CommandRegistration } from 'org.enginehub.piston.gen';
import { ReplacementMessageGenerator } from 'com.sk89q.worldedit.internal.command.CommandUtil';
import { InjectedValueAccess, Key } from 'org.enginehub.piston.inject';
import { AutoCloseable } from 'java.lang';
import { Builder } from 'java.util.stream.Stream';
import { CommandManager, Command, CommandParameters } from 'org.enginehub.piston';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { Substring } from 'com.sk89q.worldedit.internal.util';
import { CommandPermissionsConditionGenerator } from 'com.sk89q.worldedit.command.util';
import { WorldEdit } from 'com.sk89q.worldedit';
import { CommandLocals } from 'com.sk89q.minecraft.util.commands';
import { Authorizer } from 'com.sk89q.worldedit.util.auth';
/**
 * Logs called commands to a logger.
*/
export class CommandLoggingHandler extends CommandCallListener {
  /**
   * Create a new instance.
   *
   * @param worldEdit an instance of WorldEdit
   * @param logger the logger to send messages to
  */
  constructor(worldEdit: WorldEdit, logger: Logger);
  beforeCall(method: Method, parameters: CommandParameters): void;
  close(): void;
}
export interface CommandLoggingHandler extends CommandCallListener, AutoCloseable {}
export class CommandArgParser {
  static forArgString(argString: string): CommandArgParser;
  constructor(input: Substring[]);
  parseArgs(): Stream<Substring>;
}
export class CommandRegistrationHandler {
  constructor(callListeners: CommandCallListener[]);
  register<CI>(manager: CommandManager, registration: CommandRegistration<CI>, instance: CI): void;
}
/**
 * Implementation of an authorizer that uses {@link Actor#hasPermission(String)}.
*/
export class ActorAuthorizer extends Authorizer {
  /**
   * Tests whether permission is granted for the given context.
   *
   * @param locals locals
   * @param permission the permission string
   * @return true if permitted
  */
  testPermission(locals: CommandLocals, permission: string): boolean;
}
export class CommandUtil {
  static createNewCommandReplacementText(suggestedCommand: string): Component;
  static deprecate(command: Command, reason: string, replacementMessageGenerator: ReplacementMessageGenerator): Command;
  static footerWithoutDeprecation(command: Command): Optional<Component>;
  static deprecationWarning(command: Command): Optional<Component>;
  static isDeprecated(command: Command): boolean;
  static getSubCommands(currentCommand: Command): Map<string, Command>;
  static byCleanName(): Comparator<Command>;
  /**
   * Fix `suggestions` to replace the last space-separated word in `arguments`.
  */
  static fixSuggestions(arguments: string, suggestions: Substring[]): string[];
  /**
   * Require `condition` to be `true`, otherwise throw a {@link CommandException}
   * with the given message.
   *
   * @param condition the condition to check
   * @param message the message for failure
  */
  static checkCommandArgument(condition: boolean, message: string): void;
  /**
   * Require `condition` to be `true`, otherwise throw a {@link CommandException}
   * with the given message.
   *
   * @param condition the condition to check
   * @param message the message for failure
  */
  static checkCommandArgument(condition: boolean, message: Component): void;
  static requireIV<T>(type: Key<T>, name: string, injectedValueAccess: InjectedValueAccess): T;
}

}
declare module 'com.sk89q.worldedit.command.util' {
import { Method } from 'java.lang.reflect';
import { Set, Timer, TimerTask, List } from 'java.util';
import { Stream } from 'java.util.stream';
import { ExceptionConverter } from 'com.sk89q.worldedit.internal.command.exception';
import { Callable } from 'java.util.concurrent';
import { CommandConditionGenerator } from 'org.enginehub.piston.gen';
import { InjectedValueAccess, Key } from 'org.enginehub.piston.inject';
import { EntityFunction } from 'com.sk89q.worldedit.function';
import { Enum, Runnable } from 'java.lang';
import { Type } from 'com.sk89q.worldedit.command.util.EntityRemover';
import { Supervisor } from 'com.sk89q.worldedit.util.task';
import { CommandManager } from 'org.enginehub.piston';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { Consumer } from 'java.util.function';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
import { Condition } from 'org.enginehub.piston.Command';
import { Registry, NamespacedRegistry } from 'com.sk89q.worldedit.registry';
/**
 * For internal WorldEdit use only.
*/
export class WorldEditAsyncCommandBuilder {
  static createAndSendMessage(actor: Actor, task: Callable<Component>, desc: string | null): void;
  static createAndSendMessage(actor: Actor, task: Callable<Component>, desc: Component | null): void;
}
export class PrintCommandHelp {
  static help(commandPath: string[], page: number, listSubCommands: boolean, manager: CommandManager, actor: Actor, helpRootCommand: string): void;
}
export class AsyncCommandBuilder<T> {
  static wrap<T>(callable: Callable<T>, sender: Actor): AsyncCommandBuilder<T>;
  registerWithSupervisor(supervisor: Supervisor, description: string): AsyncCommandBuilder<T>;
  sendMessageAfterDelay(message: string): AsyncCommandBuilder<T>;
  sendMessageAfterDelay(message: Component): AsyncCommandBuilder<T>;
  setDelayMessage(delayMessage: Component);
  setWorkingMessage(workingMessage: Component);
  onSuccess(message: Component | null, consumer: Consumer<T> | null): AsyncCommandBuilder<T>;
  onSuccess(message: string | null, consumer: Consumer<T> | null): AsyncCommandBuilder<T>;
  onFailure(message: Component | null, exceptionConverter: ExceptionConverter | null): AsyncCommandBuilder<T>;
  onFailure(message: string | null, exceptionConverter: ExceptionConverter | null): AsyncCommandBuilder<T>;
}
export class FutureProgressListener extends Runnable {
  constructor(sender: Actor, message: string);
  constructor(sender: Actor, message: Component);
  constructor(sender: Actor, message: Component, workingMessage: Component | null);
  run(): void;
}
export class CommandPermissions {

}
export class PermissionCondition extends Condition {
  constructor(permissions: Set<string>);
  getPermissions(): Set<string>;
  satisfied(context: InjectedValueAccess): boolean;
}
/**
 * The implementation of /remove.
*/
export class EntityRemover {
  static fromString(str: string): EntityRemover;
  createFunction(): EntityFunction;
}
export class CommandPermissionsConditionGenerator extends CommandConditionGenerator {
  generateCondition(commandMethod: Method): Condition;
}
/**
 * Indicates how the affected blocks should be hinted at in the log.
*/
export class Logging {

}
/**
 * The implementation of /butcher.
*/
export class CreatureButcher {
  flags: number;
  constructor(player: Actor);
  or(flag: number, on: boolean): void;
  or(flag: number, on: boolean, permission: string): void;
  createFunction(): EntityFunction;
}
export class HookMode extends Enum<HookMode> {
  static readonly ACTIVE: HookMode;
  static readonly INACTIVE: HookMode;
  static valueOf(name: string): HookMode;
  static values(): HookMode[];
}
/**
 * Internal class for generating common command suggestions.
*/
export class SuggestionHelper {
  static getBlockCategorySuggestions(tag: string, allowRandom: boolean): Stream<string>;
  static getBlockPropertySuggestions(blockType: string, props: string): Stream<string>;
  static getRegistrySuggestions<V>(registry: Registry<V>, input: string): Stream<string>;
  static getNamespacedRegistrySuggestions<V>(registry: NamespacedRegistry<V>, input: string): Stream<string>;
}
export class SubCommandPermissionCondition extends PermissionCondition {
  satisfied(context: InjectedValueAccess): boolean;
}
export class MessageTimerTask extends TimerTask {
  run(): void;
}

}
declare module 'com.sk89q.worldedit.math.interpolation' {
import { Vector3 } from 'com.sk89q.worldedit.math';
import { List, TreeMap } from 'java.util';
/**
 * Represents an arbitrary function in ℝ → ℝ3.
*/
export class Interpolation {
  /**
   * Sets nodes to be used by subsequent calls to
   * {@link #getPosition(double)} and the other methods.
   *
   * @param nodes the nodes
  */
  setNodes(nodes: Node[]);
  /**
   * Gets the result of f(position).
   *
   * @param position the position to interpolate
   * @return the result
  */
  getPosition(position: number): Vector3;
  /**
   * Gets the result of f'(position).
   *
   * @param position the position to interpolate
   * @return the result
  */
  get1stDerivative(position: number): Vector3;
  /**
   * Gets the result of ∫ab|f'(t)| dt.
   * That means it calculates the arc length (in meters) between positionA
   * and positionB.
   *
   * @param positionA lower limit
   * @param positionB upper limit
   * @return the arc length
  */
  arcLength(positionA: number, positionB: number): number;
  /**
   * Get the segment position.
   *
   * @param position the position
   * @return the segment position
  */
  getSegment(position: number): number;
}
/**
 * Reparametrises another interpolation function by arc length.
 *
 * This is done so entities travel at roughly the same speed across
 * the whole route.
*/
export class ReparametrisingInterpolation extends Interpolation {
  constructor(baseInterpolation: Interpolation);
  /**
   * Sets nodes to be used by subsequent calls to
   * {@link #getPosition(double)} and the other methods.
   *
   * @param nodes the nodes
  */
  setNodes(nodes: Node[]);
  getBaseInterpolation(): Interpolation;
  /**
   * Gets the result of f(position).
   *
   * @param position the position to interpolate
   * @return the result
  */
  getPosition(position: number): Vector3;
  /**
   * Gets the result of f'(position).
   *
   * @param position the position to interpolate
   * @return the result
  */
  get1stDerivative(position: number): Vector3;
  /**
   * Gets the result of ∫ab|f'(t)| dt.
   * That means it calculates the arc length (in meters) between positionA
   * and positionB.
   *
   * @param positionA lower limit
   * @param positionB upper limit
   * @return the arc length
  */
  arcLength(positionA: number, positionB: number): number;
  /**
   * Get the segment position.
   *
   * @param position the position
   * @return the segment position
  */
  getSegment(position: number): number;
}
/**
 * A Kochanek-Bartels interpolation; continuous in the 2nd derivative.
 *
 * Supports {@link Node#getTension() tension}, {@link Node#getBias() bias} and
 * {@link Node#getContinuity() continuity} parameters per {@link Node}.
*/
export class KochanekBartelsInterpolation extends Interpolation {
  constructor();
  /**
   * Sets nodes to be used by subsequent calls to
   * {@link #getPosition(double)} and the other methods.
   *
   * @param nodes the nodes
  */
  setNodes(nodes: Node[]);
  /**
   * Gets the result of f(position).
   *
   * @param position the position to interpolate
   * @return the result
  */
  getPosition(position: number): Vector3;
  /**
   * Gets the result of f'(position).
   *
   * @param position the position to interpolate
   * @return the result
  */
  get1stDerivative(position: number): Vector3;
  /**
   * Gets the result of ∫ab|f'(t)| dt.
   * That means it calculates the arc length (in meters) between positionA
   * and positionB.
   *
   * @param positionA lower limit
   * @param positionB upper limit
   * @return the arc length
  */
  arcLength(positionA: number, positionB: number): number;
  /**
   * Get the segment position.
   *
   * @param position the position
   * @return the segment position
  */
  getSegment(position: number): number;
}
/**
 * Represents a node for interpolation.
 *
 * The {@link #tension}, {@link #bias} and {@link #continuity} fields
 * are parameters for the Kochanek-Bartels interpolation algorithm.
*/
export class Node {
  constructor();
  constructor(other: Node);
  constructor(position: Vector3);
  getPosition(): Vector3;
  setPosition(position: Vector3);
  getTension(): number;
  setTension(tension: number);
  getBias(): number;
  setBias(bias: number);
  getContinuity(): number;
  setContinuity(continuity: number);
}
/**
 * Simple linear interpolation. Mainly used for testing.
*/
export class LinearInterpolation extends Interpolation {
  /**
   * Sets nodes to be used by subsequent calls to
   * {@link #getPosition(double)} and the other methods.
   *
   * @param nodes the nodes
  */
  setNodes(nodes: Node[]);
  /**
   * Gets the result of f(position).
   *
   * @param position the position to interpolate
   * @return the result
  */
  getPosition(position: number): Vector3;
  /**
   * Gets the result of f'(position).
   *
   * @param position the position to interpolate
   * @return the result
  */
  get1stDerivative(position: number): Vector3;
  /**
   * Gets the result of ∫ab|f'(t)| dt.
   * That means it calculates the arc length (in meters) between positionA
   * and positionB.
   *
   * @param positionA lower limit
   * @param positionB upper limit
   * @return the arc length
  */
  arcLength(positionA: number, positionB: number): number;
  /**
   * Get the segment position.
   *
   * @param position the position
   * @return the segment position
  */
  getSegment(position: number): number;
}

}
declare module 'com.sk89q.worldedit.internal.block.BlockStateIdAccess' {
import { BlockState } from 'com.sk89q.worldedit.world.block';
export class BlockStateInternalId {
  getInternalId(blockState: BlockState): number;
  setInternalId(blockState: BlockState, internalId: number): void;
}

}
declare module 'com.sk89q.worldedit.session' {
import { Set, Timer, UUID, Map } from 'java.util';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { SessionHolder } from 'com.sk89q.worldedit.session.SessionManager';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { Operation } from 'com.sk89q.worldedit.function.operation';
import { Clipboard } from 'com.sk89q.worldedit.extent.clipboard';
import { Throwable, Exception } from 'java.lang';
import { Identifiable } from 'com.sk89q.worldedit.util';
import { SessionIdleEvent, ConfigurationLoadEvent } from 'com.sk89q.worldedit.event.platform';
import { WorldEdit, LocalSession } from 'com.sk89q.worldedit';
import { Extent } from 'com.sk89q.worldedit.extent';
import { Subject } from 'com.sk89q.worldedit.util.auth';
import { SessionStore } from 'com.sk89q.worldedit.session.storage';
import { Transform } from 'com.sk89q.worldedit.math.transform';
/**
 * Session manager for WorldEdit.
 *
 * Get a reference to one from {@link WorldEdit}.
 *
 * While this class is thread-safe, the returned session may not be.
*/
export class SessionManager {
  static EXPIRATION_GRACE: number;
  /**
   * Create a new session manager.
   *
   * @param worldEdit a WorldEdit instance
  */
  constructor(worldEdit: WorldEdit);
  /**
   * Get whether a session exists for the given owner.
   *
   * @param owner the owner
   * @return true if a session exists
  */
  contains(owner: SessionOwner): boolean;
  /**
   * Find a session by its name specified by {@link SessionKey#getName()}.
   *
   * @param name the name
   * @return the session, if found, otherwise `null`
  */
  findByName(name: string): LocalSession | null;
  /**
   * Gets the session for an owner and return it if it exists, otherwise
   * return `null`.
   *
   * @param owner the owner
   * @return the session for the owner, if it exists
  */
  getIfPresent(owner: SessionOwner): LocalSession | null;
  /**
   * Get the session for an owner and create one if one doesn't exist.
   *
   * @param owner the owner
   * @return a session
  */
  get(owner: SessionOwner): LocalSession;
  /**
   * Remove the session for the given owner if one exists.
   *
   * @param owner the owner
  */
  remove(owner: SessionOwner): void;
  /**
   * Called to unload this session manager.
  */
  unload(): void;
  /**
   * Remove all sessions.
  */
  clear(): void;
  onConfigurationLoad(event: ConfigurationLoadEvent): void;
  onSessionIdle(event: SessionIdleEvent): void;
}
/**
 * An object that owns a session.
*/
export class SessionOwner extends Subject {
  /**
   * Get an object describing this session.
   *
   * @return the status object
  */
  getSessionKey(): SessionKey;
}
/**
 * Raised when the session is missing.
*/
export class MissingSessionException extends Exception {
  constructor();
  constructor(message: string);
  constructor(message: string, cause: Throwable);
  constructor(cause: Throwable);
}
/**
 * Thrown if the session cannot be persisted
 * (because {@link SessionKey#isPersistent()} returns false).
*/
export class TransientSessionException extends Exception {
  constructor();
  constructor(message: string);
  constructor(message: string, cause: Throwable);
  constructor(cause: Throwable);
}
/**
 * Provides information about a session.
 *
 * A reference for this object may be kept around for a long time.
*/
export class SessionKey extends Identifiable {
  /**
   * Get the name for this session, if one is available, so that it can
   * be referred to by others.
   *
   * @return a name or `null`
  */
  getName(): string | null;
  /**
   * Return whether the session is still active. Sessions that are inactive
   * for a prolonged amount of time may be removed. If this method
   * always returns `false`, the the related session may never
   * be stored.
   *
   * This method may be called from any thread, so this call
   * must be thread safe.
   *
   * @return true if active
  */
  isActive(): boolean;
  /**
   * Return whether this session should be persisted.
   *
   * @return true if persistent
  */
  isPersistent(): boolean;
}
/**
 * Holds the clipboard and the current transform on the clipboard.
*/
export class ClipboardHolder {
  /**
   * Create a new instance with the given clipboard.
   *
   * @param clipboard the clipboard
  */
  constructor(clipboard: Clipboard);
  /**
   * Get the clipboard.
   *
   * 
   * If there is a transformation applied, the returned clipboard will
   * not contain its effect.
   * 
   *
   * @return the clipboard
  */
  getClipboard(): Clipboard;
  /**
   * Set the transform.
   *
   * @param transform the transform
  */
  setTransform(transform: Transform);
  /**
   * Get the transform.
   *
   * @return the transform
  */
  getTransform(): Transform;
  /**
   * Create a builder for an operation to paste this clipboard.
   *
   * @return a builder
  */
  createPaste(targetExtent: Extent): PasteBuilder;
}
/**
 * Builds an operation to paste the contents of a clipboard.
*/
export class PasteBuilder {
  /**
   * Set the target location.
   *
   * @param to the target location
   * @return this builder instance
  */
  to(to: BlockVector3): PasteBuilder;
  /**
   * Set a custom mask of blocks to ignore from the source.
   * This provides a more flexible alternative to {@link #ignoreAirBlocks(boolean)}, for example
   * one might want to ignore structure void if copying a Minecraft Structure, etc.
   *
   * @param sourceMask the mask for the source
   * @return this builder instance
  */
  maskSource(sourceMask: Mask): PasteBuilder;
  /**
   * Set whether air blocks in the source are skipped over when pasting.
   *
   * @return this builder instance
  */
  ignoreAirBlocks(ignoreAirBlocks: boolean): PasteBuilder;
  /**
   * Set whether the copy should include source entities.
   * Note that this is true by default for legacy reasons.
   *
   * @param copyEntities if entities should be copied
   * @return this builder instance
  */
  copyEntities(copyEntities: boolean): PasteBuilder;
  /**
   * Set whether the copy should include source biomes (if available).
   *
   * @param copyBiomes if biomes should be copied
   * @return this builder instance
  */
  copyBiomes(copyBiomes: boolean): PasteBuilder;
  /**
   * Build the operation.
   *
   * @return the operation
  */
  build(): Operation;
}

}
declare module 'com.sk89q.worldedit.function.mask' {
import { Property } from 'com.sk89q.worldedit.registry.state';
import { Builder } from 'com.sk89q.worldedit.function.mask.OffsetsMask';
import { Set, Collection, Map } from 'java.util';
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { Region } from 'com.sk89q.worldedit.regions';
import { Builder as com_sk89q_worldedit_function_mask_OffsetsMask2D_Builder } from 'com.sk89q.worldedit.function.mask.OffsetsMask2D';
import { IntSupplier } from 'java.util.function';
import { Expression } from 'com.sk89q.worldedit.internal.expression';
import { NoiseGenerator } from 'com.sk89q.worldedit.math.noise';
import { AlwaysFalse, AlwaysTrue } from 'com.sk89q.worldedit.function.mask.Masks';
import { BiomeType } from 'com.sk89q.worldedit.world.biome';
import { Extent } from 'com.sk89q.worldedit.extent';
import { BlockType, BlockCategory, BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * A mask that tests whether a block matches a given {@link BlockCategory}, or tag.
*/
export class BlockCategoryMask extends AbstractExtentMask {
  constructor(extent: Extent, category: BlockCategory);
  test(vector: BlockVector3): boolean;
  toMask2D(): Mask2D | null;
}
export class BlockStateMask extends AbstractExtentMask {
  /**
   * Creates a mask that checks if a given block has the desired properties set to the desired value.
   *
   * @param extent the extent to get blocks from
   * @param states the desired states (property -> value) that a block should have to match the mask
   * @param strict true to only match blocks that have all properties and values, false to also match blocks that
   *              do not have the properties (but only fail blocks with the properties but wrong values)
  */
  constructor(extent: Extent, states: Map<string, string>, strict: boolean);
  test(vector: BlockVector3): boolean;
  toMask2D(): Mask2D | null;
}
/**
 * Tests true if the biome at applied points is the same as the one given.
 *
 * @deprecated use {@link BiomeMask} as biomes are now 3D.
*/
export class BiomeMask2D extends AbstractMask2D {
  /**
   * Create a new biome mask.
   *
   * @param extent the extent
   * @param biomes a list of biomes to match
  */
  constructor(extent: Extent, biomes: Collection<BiomeType>);
  /**
   * Create a new biome mask.
   *
   * @param extent the extent
   * @param biome an array of biomes to match
  */
  constructor(extent: Extent, ...biome: BiomeType[]);
  /**
   * Add the given biomes to the list of criteria.
   *
   * @param biomes a list of biomes
  */
  add(biomes: Collection<BiomeType>): void;
  /**
   * Add the given biomes to the list of criteria.
   *
   * @param biome an array of biomes
  */
  add(...biome: BiomeType[]): void;
  /**
   * Get the list of biomes that are tested with.
   *
   * @return a list of biomes
  */
  getBiomes(): Collection<BiomeType>;
  test(vector: BlockVector2): boolean;
}
/**
 * A mask that returns true whenever the block at the location is not
 * an air block (it contains some other block).
*/
export class ExistingBlockMask extends AbstractExtentMask {
  /**
   * Create a new existing block map.
   *
   * @param extent the extent to check
  */
  constructor(extent: Extent);
  test(vector: BlockVector3): boolean;
  toMask2D(): Mask2D | null;
}
/**
 * Checks whether any face of the given offsets to a block match a given mask.
*/
export class OffsetsMask extends AbstractMask {
  /**
   * Create an offsets mask for a single offset.
   *
   * @param mask the mask to use
   * @param offset the offset
   * @return the new offsets mask
  */
  static single(mask: Mask, offset: BlockVector3): OffsetsMask;
  /**
   * Create a new builder, using the given mask.
   * @param mask the mask to use
   * @return the builder
  */
  static builder(mask: Mask): Builder;
  /**
   * Get the mask.
   *
   * @return the mask
  */
  getMask(): Mask;
  /**
   * Get the flag determining if matching the current block should fail the mask.
   *
   * @return if it should exclude self-matches
  */
  getExcludeSelf(): boolean;
  /**
   * Gets the minimum number of matches to pass.
   *
   * @return the minimum number of matches
  */
  getMinMatches(): number;
  /**
   * Gets the maximum number of matches to pass.
   *
   * @return the maximum number of matches
  */
  getMaxMatches(): number;
  test(vector: BlockVector3): boolean;
  toMask2D(): Mask2D | null;
}
/**
 * Tests true if all contained masks test true.
*/
export class MaskIntersection2D extends Mask2D {
  /**
   * Create a new intersection.
   *
   * @param masks a list of masks
  */
  constructor(masks: Collection<Mask2D>);
  /**
   * Create a new intersection.
   *
   * @param mask a list of masks
  */
  constructor(...mask: Mask2D[]);
  /**
   * Add some masks to the list.
   *
   * @param masks the masks
  */
  add(masks: Collection<Mask2D>): void;
  /**
   * Add some masks to the list.
   *
   * @param mask the masks
  */
  add(...mask: Mask2D[]): void;
  /**
   * Get the masks that are tested with.
   *
   * @return the masks
  */
  getMasks(): Collection<Mask2D>;
  /**
   * Returns true if the criteria is met.
   *
   * @param vector the vector to test
   * @return true if the criteria is met
  */
  test(vector: BlockVector2): boolean;
}
/**
 * Combines several masks and requires that one or more masks return true
 * when a certain position is tested. It serves as a logical OR operation
 * on a list of masks.
*/
export class MaskUnion extends MaskIntersection {
  /**
   * Create a new union.
   *
   * @param masks a list of masks
  */
  constructor(masks: Collection<Mask>);
  /**
   * Create a new union.
   *
   * @param mask a list of masks
  */
  constructor(...mask: Mask[]);
  test(vector: BlockVector3): boolean;
  toMask2D(): Mask2D | null;
}
/**
 * A mask that tests whether given positions are contained within a region.
*/
export class RegionMask extends AbstractMask {
  /**
   * Create a new region mask.
   *
   * @param region the region
  */
  constructor(region: Region);
  /**
   * Get the region.
   *
   * @return the region
  */
  getRegion(): Region;
  /**
   * Set the region that positions must be contained within.
   *
   * @param region the region
  */
  setRegion(region: Region);
  test(vector: BlockVector3): boolean;
  toMask2D(): Mask2D | null;
}
/**
 * Tests true if any contained mask is true, even if it just one.
*/
export class MaskUnion2D extends MaskIntersection2D {
  /**
   * Create a new union.
   *
   * @param masks a list of masks
  */
  constructor(masks: Collection<Mask2D>);
  /**
   * Create a new union.
   *
   * @param mask a list of masks
  */
  constructor(...mask: Mask2D[]);
  test(vector: BlockVector2): boolean;
}
/**
 * A mask that evaluates an expression.
 *
 * Expressions are evaluated as `true` if they return a value
 * greater than `0`.
*/
export class ExpressionMask extends AbstractMask {
  /**
   * Create a new instance.
   *
   * @param expression the expression
   * @throws ExpressionException thrown if there is an error with the expression
  */
  constructor(expression: string);
  /**
   * Create a new instance.
   *
   * @param expression the expression
  */
  constructor(expression: Expression);
  constructor(expression: Expression, timeout: IntSupplier | null);
  test(vector: BlockVector3): boolean;
  toMask2D(): Mask2D | null;
}
export class ExpressionMask2D extends AbstractMask2D {
  /**
   * Create a new instance.
   *
   * @param expression the expression
   * @throws ExpressionException thrown if there is an error with the expression
  */
  constructor(expression: string);
  /**
   * Create a new instance.
   *
   * @param expression the expression
  */
  constructor(expression: Expression);
  constructor(expression: Expression, timeout: IntSupplier | null);
  test(vector: BlockVector2): boolean;
}
/**
 * Combines several masks and requires that all masks return true
 * when a certain position is tested. It serves as a logical AND operation
 * on a list of masks.
*/
export class MaskIntersection extends AbstractMask {
  /**
   * Create a new intersection.
   *
   * @param masks a list of masks
  */
  constructor(masks: Collection<Mask>);
  /**
   * Create a new intersection.
   *
   * @param mask a list of masks
  */
  constructor(...mask: Mask[]);
  /**
   * Add some masks to the list.
   *
   * @param masks the masks
  */
  add(masks: Collection<Mask>): void;
  /**
   * Add some masks to the list.
   *
   * @param mask the masks
  */
  add(...mask: Mask[]): void;
  /**
   * Get the masks that are tested with.
   *
   * @return the masks
  */
  getMasks(): Collection<Mask>;
  test(vector: BlockVector3): boolean;
  toMask2D(): Mask2D | null;
}
/**
 * Tests true if the biome at applied points is the same as the one given.
*/
export class BiomeMask extends AbstractMask {
  /**
   * Create a new biome mask.
   *
   * @param extent the extent
   * @param biomes a list of biomes to match
  */
  constructor(extent: Extent, biomes: Collection<BiomeType>);
  /**
   * Create a new biome mask.
   *
   * @param extent the extent
   * @param biome an array of biomes to match
  */
  constructor(extent: Extent, ...biome: BiomeType[]);
  /**
   * Add the given biomes to the list of criteria.
   *
   * @param biomes a list of biomes
  */
  add(biomes: Collection<BiomeType>): void;
  /**
   * Add the given biomes to the list of criteria.
   *
   * @param biome an array of biomes
  */
  add(...biome: BiomeType[]): void;
  /**
   * Get the list of biomes that are tested with.
   *
   * @return a list of biomes
  */
  getBiomes(): Collection<BiomeType>;
  test(vector: BlockVector3): boolean;
  toMask2D(): Mask2D | null;
}
/**
 * Checks whether another mask tests true for a position that is offset
 * a given vector.
 *
 * @deprecated Use {@link OffsetsMask2D#single}
*/
export class OffsetMask2D extends AbstractMask2D {
  /**
   * Create a new instance.
   *
   * @param mask the mask
   * @param offset the offset
  */
  constructor(mask: Mask2D, offset: BlockVector2);
  /**
   * Get the mask.
   *
   * @return the mask
  */
  getMask(): Mask2D;
  /**
   * Set the mask.
   *
   * @param mask the mask
  */
  setMask(mask: Mask2D);
  /**
   * Get the offset.
   *
   * @return the offset
  */
  getOffset(): BlockVector2;
  /**
   * Set the offset.
   *
   * @param offset the offset
  */
  setOffset(offset: BlockVector2);
  test(vector: BlockVector2): boolean;
}
/**
 * A base class of {@link Mask} that all masks should inherit from.
*/
export class AbstractMask extends Mask {

}
/**
 * Various utility functions related to {@link Mask} and {@link Mask2D}.
*/
export class Masks {
  /**
   * Return a 3D mask that always returns true.
   *
   * @return a mask
  */
  static alwaysTrue(): Mask;
  /**
   * Return a 2D mask that always returns true.
   *
   * @return a mask
  */
  static alwaysTrue2D(): Mask2D;
  /**
   * Negate the given mask.
   *
   * @param mask the mask
   * @return a new mask
  */
  static negate(mask: Mask): Mask;
  /**
   * Negate the given mask.
   *
   * @param mask the mask
   * @return a new mask
  */
  static negate(mask: Mask2D): Mask2D;
  /**
   * Return a 3-dimensional version of a 2D mask.
   *
   * @param mask the mask to make 3D
   * @return a 3D mask
  */
  static asMask(mask: Mask2D): Mask;
}
/**
 * A mask that uses a noise generator and returns true whenever the noise
 * generator returns a value above the given density.
*/
export class NoiseFilter2D extends AbstractMask2D {
  /**
   * Create a new noise filter.
   *
   * @param noiseGenerator the noise generator
   * @param density the density
  */
  constructor(noiseGenerator: NoiseGenerator, density: number);
  /**
   * Get the noise generator.
   *
   * @return the noise generator
  */
  getNoiseGenerator(): NoiseGenerator;
  /**
   * Set the noise generator.
   *
   * @param noiseGenerator a noise generator
  */
  setNoiseGenerator(noiseGenerator: NoiseGenerator);
  /**
   * Get the probability of passing as a number between 0 and 1 (inclusive).
   *
   * @return the density
  */
  getDensity(): number;
  /**
   * Set the probability of passing as a number between 0 and 1 (inclusive).
  */
  setDensity(density: number);
  test(pos: BlockVector2): boolean;
}
/**
 * A mask that checks whether blocks at the given positions are matched by
 * a block in a list.
 *
 * This mask checks for both an exact block type and state value match,
 * respecting fuzzy status of the BlockState.
*/
export class BlockMask extends AbstractExtentMask {
  /**
   * Create a new block mask.
   *
   * @param extent the extent
   * @param blocks a list of blocks to match
  */
  constructor(extent: Extent, blocks: Collection<BaseBlock>);
  /**
   * Create a new block mask.
   *
   * @param extent the extent
   * @param block an array of blocks to match
  */
  constructor(extent: Extent, ...block: BaseBlock[]);
  /**
   * Add the given blocks to the list of criteria.
   *
   * @param blocks a list of blocks
  */
  add(blocks: Collection<BaseBlock>): void;
  /**
   * Add the given blocks to the list of criteria.
   *
   * @param block an array of blocks
  */
  add(...block: BaseBlock[]): void;
  /**
   * Get the list of blocks that are tested with.
   *
   * @return a list of blocks
  */
  getBlocks(): Collection<BaseBlock>;
  test(vector: BlockVector3): boolean;
  toMask2D(): Mask2D | null;
}
/**
 * A mask that checks whether blocks at the given positions are matched by
 * a block in a list.
 *
 * This mask checks for ONLY the block type. If state should also be checked,
 * use {@link BlockMask}.
*/
export class BlockTypeMask extends AbstractExtentMask {
  /**
   * Create a new block mask.
   *
   * @param extent the extent
   * @param blocks a list of blocks to match
  */
  constructor(extent: Extent, blocks: Collection<BlockType>);
  /**
   * Create a new block mask.
   *
   * @param extent the extent
   * @param block an array of blocks to match
  */
  constructor(extent: Extent, ...block: BlockType[]);
  /**
   * Add the given blocks to the list of criteria.
   *
   * @param blocks a list of blocks
  */
  add(blocks: Collection<BlockType>): void;
  /**
   * Add the given blocks to the list of criteria.
   *
   * @param block an array of blocks
  */
  add(...block: BlockType[]): void;
  /**
   * Get the list of blocks that are tested with.
   *
   * @return a list of blocks
  */
  getBlocks(): Collection<BlockType>;
  test(vector: BlockVector3): boolean;
  toMask2D(): Mask2D | null;
}
/**
 * Tests whether a given vector meets a criteria.
*/
export class Mask2D {
  /**
   * Returns true if the criteria is met.
   *
   * @param vector the vector to test
   * @return true if the criteria is met
  */
  test(vector: BlockVector2): boolean;
}
/**
 * An abstract implementation of {@link Mask} that takes uses an {@link Extent}.
*/
export class AbstractExtentMask extends AbstractMask {
  /**
   * Get the extent.
   *
   * @return the extent
  */
  getExtent(): Extent;
  /**
   * Set the extent.
   *
   * @param extent the extent
  */
  setExtent(extent: Extent);
}
/**
 * A base class of {@link Mask2D} that all masks should inherit from.
*/
export class AbstractMask2D extends Mask2D {

}
export class SolidBlockMask extends AbstractExtentMask {
  constructor(extent: Extent);
  test(vector: BlockVector3): boolean;
  toMask2D(): Mask2D | null;
}
/**
 * Checks whether any face of the given offsets to a block match a given mask.
*/
export class OffsetsMask2D extends AbstractMask2D {
  /**
   * Create an offsets mask for a single offset.
   *
   * @param mask the mask to use
   * @param offset the offset
   * @return the new offsets mask
  */
  static single(mask: Mask2D, offset: BlockVector2): OffsetsMask2D;
  /**
   * Create a new builder, using the given mask.
   * @param mask the mask to use
   * @return the builder
  */
  static builder(mask: Mask2D): com_sk89q_worldedit_function_mask_OffsetsMask2D_Builder;
  /**
   * Get the mask.
   *
   * @return the mask
  */
  getMask(): Mask2D;
  /**
   * Get the flag determining if matching the current block should fail the mask.
   *
   * @return if it should exclude self-matches
  */
  getExcludeSelf(): boolean;
  /**
   * Gets the minimum number of matches to pass.
   *
   * @return the minimum number of matches
  */
  getMinMatches(): number;
  /**
   * Gets the maximum number of matches to pass.
   *
   * @return the maximum number of matches
  */
  getMaxMatches(): number;
  test(vector: BlockVector2): boolean;
}
/**
 * Checks whether another mask tests true for a position that is offset
 * a given vector.
 *
 * @deprecated Use {@link OffsetsMask#single}
*/
export class OffsetMask extends AbstractMask {
  /**
   * Create a new instance.
   *
   * @param mask the mask
   * @param offset the offset
  */
  constructor(mask: Mask, offset: BlockVector3);
  /**
   * Get the mask.
   *
   * @return the mask
  */
  getMask(): Mask;
  /**
   * Set the mask.
   *
   * @param mask the mask
  */
  setMask(mask: Mask);
  /**
   * Get the offset.
   *
   * @return the offset
  */
  getOffset(): BlockVector3;
  /**
   * Set the offset.
   *
   * @param offset the offset
  */
  setOffset(offset: BlockVector3);
  test(vector: BlockVector3): boolean;
  toMask2D(): Mask2D | null;
}
/**
 * Has the criteria where the Y value of passed positions must be within
 * a certain range of Y values (inclusive).
*/
export class BoundedHeightMask extends AbstractMask {
  /**
   * Create a new bounded height mask.
   *
   * @param minY the minimum Y
   * @param maxY the maximum Y (must be equal to or greater than minY)
  */
  constructor(minY: number, maxY: number);
  test(vector: BlockVector3): boolean;
  toMask2D(): Mask2D | null;
}
/**
 * Tests whether a given vector meets a criteria.
*/
export class Mask {
  /**
   * Returns true if the criteria is met.
   *
   * @param vector the vector to test
   * @return true if the criteria is met
  */
  test(vector: BlockVector3): boolean;
  /**
   * Get the 2D version of this mask if one exists.
   *
   * @return a 2D mask version or `null` if this mask can't be 2D
  */
  toMask2D(): Mask2D | null;
}
/**
 * A mask that uses a noise generator and returns true whenever the noise
 * generator returns a value above the given density.
*/
export class NoiseFilter extends AbstractMask {
  /**
   * Create a new noise filter.
   *
   * @param noiseGenerator the noise generator
   * @param density the density
  */
  constructor(noiseGenerator: NoiseGenerator, density: number);
  /**
   * Get the noise generator.
   *
   * @return the noise generator
  */
  getNoiseGenerator(): NoiseGenerator;
  /**
   * Set the noise generator.
   *
   * @param noiseGenerator a noise generator
  */
  setNoiseGenerator(noiseGenerator: NoiseGenerator);
  /**
   * Get the probability of passing as a number between 0 and 1 (inclusive).
   *
   * @return the density
  */
  getDensity(): number;
  /**
   * Set the probability of passing as a number between 0 and 1 (inclusive).
  */
  setDensity(density: number);
  test(vector: BlockVector3): boolean;
  toMask2D(): Mask2D | null;
}

}
declare module 'com.sk89q.worldedit.extension.platform.permission' {
import { Optional } from 'java.util';
import { SelectorLimits } from 'com.sk89q.worldedit.regions.selector.limit';
import { LocalConfiguration } from 'com.sk89q.worldedit';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
/**
 * Standard override permissions.
*/
export class OverridePermissions {
  static readonly NO_LIMITS: string;
}
export class ActorSelectorLimits extends SelectorLimits {
  constructor(configuration: LocalConfiguration, actor: Actor);
  /**
   * Get the optionally defined vertex limit for polygons.
   *
   * If one is not present, then there is no limitation.
   *
   * @return an optional vertex limit
  */
  getPolygonVertexLimit(): Optional<number>;
  /**
   * Get the optionally defined vertex limit for polyhedrons.
   *
   * If one is not present, then there is no limitation.
   *
   * @return an optional vertex limit
  */
  getPolyhedronVertexLimit(): Optional<number>;
  static forActor(actor: Actor): ActorSelectorLimits;
}

}
declare module 'com.sk89q.worldedit.extent.clipboard.io.legacycompat' {
import { IntegerProperty, Property } from 'com.sk89q.worldedit.registry.state';
import { Tag, CompoundTag } from 'com.sk89q.jnbt';
import { Map } from 'java.util';
import { Direction } from 'com.sk89q.worldedit.util';
import { BlockStateHolder } from 'com.sk89q.worldedit.world.block';
import { EntityType } from 'com.sk89q.worldedit.world.entity';
export class NBTCompatibilityHandler {
  isAffectedBlock<B>(block: B): boolean;
  updateNBT<B>(block: B, values: Map<string, Tag>): BlockStateHolder<any>;
}
export class BannerBlockCompatibilityHandler extends NBTCompatibilityHandler {
  isAffectedBlock<B>(block: B): boolean;
  updateNBT<B>(block: B, values: Map<string, Tag>): BlockStateHolder<any>;
}
export class SkullBlockCompatibilityHandler extends NBTCompatibilityHandler {
  isAffectedBlock<B>(block: B): boolean;
  updateNBT<B>(block: B, values: Map<string, Tag>): BlockStateHolder<any>;
}
export class FlowerPotCompatibilityHandler extends NBTCompatibilityHandler {
  isAffectedBlock<B>(block: B): boolean;
  updateNBT<B>(block: B, values: Map<string, Tag>): BlockStateHolder<any>;
}
export class SignCompatibilityHandler extends NBTCompatibilityHandler {
  isAffectedBlock<B>(block: B): boolean;
  updateNBT<B>(block: B, values: Map<string, Tag>): BlockStateHolder<any>;
}
export class BedBlockCompatibilityHandler extends NBTCompatibilityHandler {
  isAffectedBlock<B>(block: B): boolean;
  updateNBT<B>(block: B, values: Map<string, Tag>): BlockStateHolder<any>;
}
export class EntityNBTCompatibilityHandler {
  isAffectedEntity(type: EntityType, entityTag: CompoundTag): boolean;
  updateNBT(type: EntityType, entityTag: CompoundTag): CompoundTag;
}
export class Pre13HangingCompatibilityHandler extends EntityNBTCompatibilityHandler {
  isAffectedEntity(type: EntityType, tag: CompoundTag): boolean;
  updateNBT(type: EntityType, tag: CompoundTag): CompoundTag;
}
export class NoteBlockCompatibilityHandler extends NBTCompatibilityHandler {
  isAffectedBlock<B>(block: B): boolean;
  updateNBT<B>(block: B, values: Map<string, Tag>): BlockStateHolder<any>;
}

}
declare module 'com.sk89q.worldedit.math.convolution' {
import { Region } from 'com.sk89q.worldedit.regions';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { EditSession } from 'com.sk89q.worldedit';
/**
 * A linear Kernel generator (all cells weigh the same).
*/
export class LinearKernel extends Kernel {
  constructor(radius: number);
}
/**
 * Allows applications of Kernels onto the region's height map.
 *
 * Only used for smoothing (with a GaussianKernel).
*/
export class HeightMapFilter {
  /**
   * Construct the HeightMapFilter object.
   *
   * @param kernel the kernel
  */
  constructor(kernel: Kernel);
  /**
   * Construct the HeightMapFilter object.
   *
   * @param kernelWidth the width
   * @param kernelHeight the height
   * @param kernelData the data
  */
  constructor(kernelWidth: number, kernelHeight: number, kernelData: number[]);
  /**
   * Get the kernel.
  */
  getKernel(): Kernel;
  /**
   * Set the kernel.
   *
   * @param kernel the kernel
  */
  setKernel(kernel: Kernel);
  /**
   * Filter with a 2D kernel.
   *
   * @param inData the data
   * @param width the width
   * @param height the height
   *
   * @return the modified height map
  */
  filter(inData: number[], width: number, height: number): number[];
}
export class Kernel {
  constructor(width: number, height: number, data: number[]);
  getXOrigin(): number;
  getYOrigin(): number;
  getWidth(): number;
  getHeight(): number;
  getKernelData(data: number[]): number[];
}
/**
 * Allows applications of Kernels onto the region's height map.
 *
 * Currently only used for smoothing (with a GaussianKernel).
*/
export class HeightMap {
  /**
   * Constructs the HeightMap.
   *
   * @param session an edit session
   * @param region the region
  */
  constructor(session: EditSession, region: Region, mask: Mask | null);
  /**
   * Apply the filter 'iterations' amount times.
   *
   * @param filter the filter
   * @param iterations the number of iterations
   * @return number of blocks affected
   * @throws MaxChangedBlocksException if the maximum block change limit is exceeded
  */
  applyFilter(filter: HeightMapFilter, iterations: number): number;
  /**
   * Apply a raw heightmap to the region.
   *
   * @param data the data
   * @return number of blocks affected
   * @throws MaxChangedBlocksException if the maximum block change limit is exceeded
  */
  apply(data: number[]): number;
}
/**
 * A Gaussian Kernel generator (2D bellcurve).
*/
export class GaussianKernel extends Kernel {
  /**
   * Constructor of the kernel.
   *
   * @param radius the resulting diameter will be radius * 2 + 1
   * @param sigma controls 'flatness'
  */
  constructor(radius: number, sigma: number);
}

}
declare module 'com.sk89q.worldedit.internal.command.CommandUtil' {
import { Command, CommandParameters } from 'org.enginehub.piston';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
export class NewCommandGenerator {
  newCommand(oldCommand: Command, oldParameters: CommandParameters): string;
}
export class ReplacementMessageGenerator {
  /**
   * Generate text that says "Please use [cmd] instead." and allows clicking to dump
   * the command to the text box.
  */
  static forNewCommand(generator: NewCommandGenerator): ReplacementMessageGenerator;
  getReplacement(oldCommand: Command, oldParameters: CommandParameters): Component;
}

}
declare module 'com.sk89q.worldedit.util.function' {
import { Runnable } from 'java.lang';
import { Function } from 'java.util.function';
/**
 * I/O function type.
*/
export class IOFunction<T, R> {
  static unchecked<T, R>(func: IOFunction<T, R>): Function<T, R>;
  apply(param: T): R;
}
/**
 * I/O runnable type.
*/
export class IORunnable {
  static unchecked(runnable: IORunnable): Runnable;
  run(): void;
}

}
declare module 'com.sk89q.worldedit.world.weather' {
import { Registry, Keyed } from 'com.sk89q.worldedit.registry';
export class WeatherTypes {
  static readonly CLEAR: WeatherType;
  static readonly RAIN: WeatherType;
  static readonly THUNDER_STORM: WeatherType;
  static register(weather: WeatherType): WeatherType;
  static get(id: string): WeatherType | null;
}
export class WeatherType extends Keyed {
  static readonly REGISTRY: Registry<WeatherType>;
  constructor(id: string);
  /**
   * The id of this object in the registry. Must be unique, and lowercase. Certain registries (e.g Namespaced ones) may have additional restrictions.
   * @return an id
  */
  getId(): string;
  /**
   * Gets the name of this weather, or the ID if the name cannot be found.
   *
   * @return The name, or ID
  */
  getName(): string;
  toString(): string;
  hashCode(): number;
  equals(obj: any): boolean;
}

}
declare module 'com.sk89q.worldedit.command.tool.brush' {
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { RegionFactory } from 'com.sk89q.worldedit.regions.factory';
import { ClipboardHolder } from 'com.sk89q.worldedit.session';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { ImageHeightmap } from 'com.sk89q.worldedit.util.asset.holder';
import { Operation } from 'com.sk89q.worldedit.function.operation';
import { CreatureButcher } from 'com.sk89q.worldedit.command.util';
import { LocalSession, EditSession } from 'com.sk89q.worldedit';
import { Pattern } from 'com.sk89q.worldedit.function.pattern';
import { Contextual } from 'com.sk89q.worldedit.function';
export class SphereBrush extends Brush {
  /**
   * Build the object.
   *
   * @param editSession the `EditSession`
   * @param position the position
   * @param pattern the pattern
   * @param size the size of the brush
   * @throws MaxChangedBlocksException if the maximum block change limit is exceeded
  */
  build(editSession: EditSession, position: BlockVector3, pattern: Pattern, size: number): void;
}
export class ImageHeightmapBrush extends Brush {
  constructor(heightmap: ImageHeightmap, intensity: number, erase: boolean, flatten: boolean, randomize: boolean);
  /**
   * Build the object.
   *
   * @param editSession the `EditSession`
   * @param position the position
   * @param pattern the pattern
   * @param size the size of the brush
   * @throws MaxChangedBlocksException if the maximum block change limit is exceeded
  */
  build(editSession: EditSession, position: BlockVector3, pattern: Pattern, doubleSize: number): void;
}
export class GravityBrush extends Brush {
  constructor(heightOffset: number);
  /**
   * Build the object.
   *
   * @param editSession the `EditSession`
   * @param position the position
   * @param pattern the pattern
   * @param size the size of the brush
   * @throws MaxChangedBlocksException if the maximum block change limit is exceeded
  */
  build(editSession: EditSession, position: BlockVector3, pattern: Pattern, size: number): void;
}
export class CylinderBrush extends Brush {
  constructor(height: number);
  /**
   * Build the object.
   *
   * @param editSession the `EditSession`
   * @param position the position
   * @param pattern the pattern
   * @param size the size of the brush
   * @throws MaxChangedBlocksException if the maximum block change limit is exceeded
  */
  build(editSession: EditSession, position: BlockVector3, pattern: Pattern, size: number): void;
}
export class ButcherBrush extends Brush {
  constructor(flags: CreatureButcher);
  /**
   * Build the object.
   *
   * @param editSession the `EditSession`
   * @param position the position
   * @param pattern the pattern
   * @param size the size of the brush
   * @throws MaxChangedBlocksException if the maximum block change limit is exceeded
  */
  build(editSession: EditSession, position: BlockVector3, pattern: Pattern, size: number): void;
}
/**
 * A brush is a long-range build tool.
*/
export class Brush {
  /**
   * Build the object.
   *
   * @param editSession the `EditSession`
   * @param position the position
   * @param pattern the pattern
   * @param size the size of the brush
   * @throws MaxChangedBlocksException if the maximum block change limit is exceeded
  */
  build(editSession: EditSession, position: BlockVector3, pattern: Pattern, size: number): void;
}
export class SmoothBrush extends Brush {
  constructor(iterations: number);
  constructor(iterations: number, mask: Mask | null);
  /**
   * Build the object.
   *
   * @param editSession the `EditSession`
   * @param position the position
   * @param pattern the pattern
   * @param size the size of the brush
   * @throws MaxChangedBlocksException if the maximum block change limit is exceeded
  */
  build(editSession: EditSession, position: BlockVector3, pattern: Pattern, size: number): void;
}
export class ClipboardBrush extends Brush {
  constructor(holder: ClipboardHolder, ignoreAirBlocks: boolean, usingOrigin: boolean);
  constructor(holder: ClipboardHolder, ignoreAirBlocks: boolean, usingOrigin: boolean, pasteEntities: boolean, pasteBiomes: boolean, sourceMask: Mask);
  /**
   * Build the object.
   *
   * @param editSession the `EditSession`
   * @param position the position
   * @param pattern the pattern
   * @param size the size of the brush
   * @throws MaxChangedBlocksException if the maximum block change limit is exceeded
  */
  build(editSession: EditSession, position: BlockVector3, pattern: Pattern, size: number): void;
}
export class HollowSphereBrush extends Brush {
  /**
   * Build the object.
   *
   * @param editSession the `EditSession`
   * @param position the position
   * @param pattern the pattern
   * @param size the size of the brush
   * @throws MaxChangedBlocksException if the maximum block change limit is exceeded
  */
  build(editSession: EditSession, position: BlockVector3, pattern: Pattern, size: number): void;
}
export class HollowCylinderBrush extends Brush {
  constructor(height: number);
  /**
   * Build the object.
   *
   * @param editSession the `EditSession`
   * @param position the position
   * @param pattern the pattern
   * @param size the size of the brush
   * @throws MaxChangedBlocksException if the maximum block change limit is exceeded
  */
  build(editSession: EditSession, position: BlockVector3, pattern: Pattern, size: number): void;
}
export class OperationFactoryBrush extends Brush {
  constructor(operationFactory: Contextual<Operation>, regionFactory: RegionFactory);
  constructor(operationFactory: Contextual<Operation>, regionFactory: RegionFactory, session: LocalSession);
  /**
   * Build the object.
   *
   * @param editSession the `EditSession`
   * @param position the position
   * @param pattern the pattern
   * @param size the size of the brush
   * @throws MaxChangedBlocksException if the maximum block change limit is exceeded
  */
  build(editSession: EditSession, position: BlockVector3, pattern: Pattern, size: number): void;
}

}
declare module 'com.sk89q.worldedit.internal.helper' {
import { Direction } from 'com.sk89q.worldedit.util';
/**
 * Utility methods for working with directions in Minecraft.
*/
export class MCDirections {
  static fromHanging(i: number): Direction;
  static toHanging(direction: Direction): number;
  static fromPre13Hanging(i: number): Direction;
  static fromHorizontalHanging(i: number): Direction;
  static toHorizontalHanging(direction: Direction): number;
  static fromLegacyHanging(i: number): number;
  static fromRotation(i: number): Direction;
  static toRotation(direction: Direction): number;
}

}
declare module 'com.sk89q.worldedit.command.factory' {
import { Direction } from 'com.sk89q.worldedit.util';
import { TreeType } from 'com.sk89q.worldedit.util.TreeGenerator';
import { Pattern } from 'com.sk89q.worldedit.function.pattern';
import { BaseItem } from 'com.sk89q.worldedit.blocks';
import { ForestGenerator } from 'com.sk89q.worldedit.function.generator';
import { RegionFunction, Contextual, EditContext } from 'com.sk89q.worldedit.function';
export class TreeGeneratorFactory extends Contextual<ForestGenerator> {
  constructor(type: TreeType);
  createFromContext(input: EditContext): ForestGenerator;
  toString(): string;
}
export class ReplaceFactory extends Contextual<RegionFunction> {
  constructor(fill: Pattern);
  createFromContext(context: EditContext): RegionFunction;
  toString(): string;
}
export class ItemUseFactory extends Contextual<RegionFunction> {
  constructor(item: BaseItem);
  constructor(item: BaseItem, dir: Direction);
  createFromContext(input: EditContext): RegionFunction;
  toString(): string;
}

}
declare module 'com.sk89q.minecraft.util.commands' {
import { Method } from 'java.lang.reflect';
import { Set, List, Map } from 'java.util';
import { Throwable, Class, Exception } from 'java.lang';
export class CommandException extends Exception {
  constructor();
  constructor(message: string);
  constructor(message: string, t: Throwable);
  constructor(t: Throwable);
  prependStack(name: string): void;
  /**
   * Gets the command that was called, which will include the sub-command
   * (i.e. "/br sphere").
   *
   * @param prefix the command shebang character (such as "/") -- may be empty
   * @param spacedSuffix a suffix to put at the end (optional) -- may be null
   * @return the command that was used
  */
  getCommandUsed(prefix: string, spacedSuffix: string | null): string;
}
export class SuggestionContext {
  forHangingValue(): boolean;
  forLastValue(): boolean;
  forFlag(): boolean;
  getFlag(): string;
  toString(): string;
  static flag(flag: string): SuggestionContext;
  static lastValue(): SuggestionContext;
  static hangingValue(): SuggestionContext;
}
export class CommandUsageException extends CommandException {
  constructor(message: string, usage: string);
  getUsage(): string;
}
export class CommandLocals {
  containsKey(key: any): boolean;
  containsValue(value: any): boolean;
  get(key: any): any;
  get<T>(key: Class<T>): T;
  put(key: any, value: any): any;
}
/**
 * Manager for handling commands. This allows you to easily process commands,
 * including nested commands, by correctly annotating methods of a class.
 *
 * To use this, it is merely a matter of registering classes containing
 * the commands (as methods with the proper annotations) with the
 * manager. When you want to process a command, use one of the
 * `execute` methods. If something is wrong, such as incorrect
 * usage, insufficient permissions, or a missing command altogether, an
 * exception will be raised for upstream handling.
 *
 * Methods of a class to be registered can be static, but if an injector
 * is registered with the class, the instances of the command classes
 * will be created automatically and methods will be called non-statically.
 *
 * To mark a method as a command, use {@link Command}. For nested commands,
 * see {@link NestedCommand}. To handle permissions, use
 * {@link CommandPermissions}.
 *
 * This uses Java reflection extensively, but to reduce the overhead of
 * reflection, command lookups are completely cached on registration. This
 * allows for fast command handling. Method invocation still has to be done
 * with reflection, but this is quite fast in that of itself.
 *
 * @param  command sender class
*/
export class CommandsManager<T> {
  /**
   * Register an class that contains commands (denoted by {@link Command}.
   * If no dependency injector is specified, then the methods of the
   * class will be registered to be called statically. Otherwise, new
   * instances will be created of the command classes and methods will
   * not be called statically.
   *
   * @param cls the class to register
  */
  register(cls: Class<any>): void;
  /**
   * Register an class that contains commands (denoted by {@link Command}.
   * If no dependency injector is specified, then the methods of the
   * class will be registered to be called statically. Otherwise, new
   * instances will be created of the command classes and methods will
   * not be called statically. A List of {@link Command} annotations from
   * registered commands is returned.
   *
   * @param cls the class to register
   * @return A List of {@link Command} annotations from registered commands,
   * for use in eg. a dynamic command registration system.
  */
  registerAndReturn(cls: Class<any>): Command[];
  /**
   * Register the methods of a class. This will automatically construct
   * instances as necessary.
   *
   * @param cls the class to register
   * @param parent the parent method
   * @return Commands Registered
  */
  registerMethods(cls: Class<any>, parent: Method): Command[];
  /**
   * Checks to see whether there is a command named such at the root level.
   * This will check aliases as well.
   *
   * @param command the command
   * @return true if the command exists
  */
  hasCommand(command: string): boolean;
  /**
   * Get a list of command descriptions. This is only for root commands.
   *
   * @return a map of commands
  */
  getCommands(): Map<string, string>;
  /**
   * Get the mapping of methods under a parent command.
   *
   * @return the mapping
  */
  getMethods(): Map<Method, Map<string, Method>>;
  /**
   * Get a map from command name to help message. This is only for root commands.
   *
   * @return a map of help messages for each command
  */
  getHelpMessages(): Map<string, string>;
  /**
   * Attempt to execute a command. This version takes a separate command
   * name (for the root command) and then a list of following arguments.
   *
   * @param cmd command to run
   * @param args arguments
   * @param player command source
   * @param methodArgs method arguments
   * @throws CommandException thrown when the command throws an error
  */
  execute(cmd: string, args: string[], player: T, ...methodArgs: any[]): void;
  /**
   * Attempt to execute a command.
   *
   * @param args the arguments
   * @param player the player
   * @param methodArgs the arguments for the method
   * @throws CommandException thrown on command error
  */
  execute(args: string[], player: T, ...methodArgs: any[]): void;
  /**
   * Attempt to execute a command.
   *
   * @param parent the parent method
   * @param args an array of arguments
   * @param player the player
   * @param methodArgs the array of method arguments
   * @param level the depth of the command
   * @throws CommandException thrown on a command error
  */
  executeMethod(parent: Method, args: string[], player: T, methodArgs: any[], level: number): void;
  invokeMethod(parent: Method, args: string[], player: T, method: Method, instance: any, methodArgs: any[], level: number): void;
  /**
   * Returns whether a player permission..
   *
   * @param player the player
   * @param permission the permission
   * @return true if permission is granted
  */
  hasPermission(player: T, permission: string): boolean;
  /**
   * Get the injector used to create new instances. This can be
   * null, in which case only classes will be registered statically.
   *
   * @return an injector instance
  */
  getInjector(): Injector;
  /**
   * Set the injector for creating new instances.
   *
   * @param injector injector or null
  */
  setInjector(injector: Injector);
}
export class WrappedCommandException extends CommandException {
  constructor(t: Throwable);
}
/**
 * Constructs new instances.
*/
export class Injector {
  /**
   * Constructs a new instance of the given class.
   * 
   * @param cls class
   * @return object
   * @throws IllegalAccessException thrown on injection fault
   * @throws InstantiationException thrown on injection fault
   * @throws InvocationTargetException thrown on injection fault
  */
  getInstance(cls: Class<any>): any;
}
export class UnhandledCommandException extends CommandException {

}
export class CommandContext {
  static split(args: string): string[];
  constructor(args: string);
  constructor(args: string[]);
  constructor(args: string, valueFlags: Set<string>);
  constructor(args: string, valueFlags: Set<string>, allowHangingFlag: boolean);
  constructor(args: string[], valueFlags: Set<string>);
  /**
   * Parse the given array of arguments.
   *
   * Empty arguments are removed from the list of arguments.
   *
   * @param args an array with arguments
   * @param valueFlags a set containing all value flags (pass null to disable value flag parsing)
   * @param allowHangingFlag true if hanging flags are allowed
   * @param locals the locals, null to create empty one
   * @throws CommandException thrown on a parsing error
  */
  constructor(args: string[], valueFlags: Set<string>, allowHangingFlag: boolean, locals: CommandLocals);
  /**
   * Parse the given array of arguments.
   *
   * Empty arguments are removed from the list of arguments.
   *
   * @param args an array with arguments
   * @param valueFlags a set containing all value flags (pass null to disable value flag parsing)
   * @param allowHangingFlag true if hanging flags are allowed
   * @param locals the locals, null to create empty one
   * @param parseFlags where to parse flags
   * @throws CommandException thrown on a parsing error
  */
  constructor(args: string[], valueFlags: Set<string>, allowHangingFlag: boolean, locals: CommandLocals, parseFlags: boolean);
  getSuggestionContext(): SuggestionContext;
  getCommand(): string;
  matches(command: string): boolean;
  getString(index: number): string;
  getString(index: number, def: string): string;
  getJoinedStrings(initialIndex: number): string;
  getRemainingString(start: number): string;
  getString(start: number, end: number): string;
  getInteger(index: number): number;
  getInteger(index: number, def: number): number;
  getDouble(index: number): number;
  getDouble(index: number, def: number): number;
  getSlice(index: number): string[];
  getPaddedSlice(index: number, padding: number): string[];
  getParsedSlice(index: number): string[];
  getParsedPaddedSlice(index: number, padding: number): string[];
  hasFlag(ch: string): boolean;
  getFlags(): Set<string>;
  getValueFlags(): Map<string, string>;
  getFlag(ch: string): string;
  getFlag(ch: string, def: string): string;
  getFlagInteger(ch: string): number;
  getFlagInteger(ch: string, def: number): number;
  getFlagDouble(ch: string): number;
  getFlagDouble(ch: string, def: number): number;
  argsLength(): number;
  getLocals(): CommandLocals;
}
export class CommandAlias {

}
/**
 * This annotation indicates that a command can be used from the console.
*/
export class Console {

}
/**
 * Indicates a list of permissions that should be checked.
*/
export class CommandPermissions {

}
export class MissingNestedCommandException extends CommandUsageException {
  constructor(message: string, usage: string);
}
/**
 * Indicates a nested command. Mark methods with this annotation to tell
 * {@link CommandsManager} that a method is merely a shell for child
 * commands. Note that the body of a method marked with this annotation
 * will never called. Additionally, not all fields of {@link Command} apply
 * when it is used in conjunction with this annotation, although both
 * are still required.
*/
export class NestedCommand {

}
export class SimpleInjector extends Injector {
  constructor(...args: any[]);
  /**
   * Constructs a new instance of the given class.
   * 
   * @param cls class
   * @return object
   * @throws IllegalAccessException thrown on injection fault
   * @throws InstantiationException thrown on injection fault
   * @throws InvocationTargetException thrown on injection fault
  */
  getInstance(clazz: Class<any>): any;
}
/**
 * This annotation indicates a command. Methods should be marked with this
 * annotation to tell {@link CommandsManager} that the method is a command.
 * Note that the method name can actually be anything.
*/
export class Command {

}
/**
 * Thrown when not enough permissions are satisfied.
*/
export class CommandPermissionsException extends CommandException {

}

}
declare module 'com.sk89q.worldedit.internal.expression' {
import { Instant } from 'java.time';
import { Set, Optional, List, Map, OptionalDouble } from 'java.util';
import { RuntimeException, ThreadLocal, Throwable } from 'java.lang';
import { Variable } from 'com.sk89q.worldedit.internal.expression.LocalSlot';
import { AllStatementsContext, FunctionCallContext } from 'com.sk89q.worldedit.antlr.ExpressionParser';
import { MethodHandle } from 'java.lang.invoke';
import { VoronoiNoise, RidgedMultiFractalNoise, PerlinNoise } from 'com.sk89q.worldedit.math.noise';
/**
 * Thrown when the lexer encounters a problem.
*/
export class LexerException extends ExpressionException {
  constructor(position: number);
  constructor(position: number, message: string, cause: Throwable);
  constructor(position: number, message: string);
  constructor(position: number, cause: Throwable);
}
/**
 * Represents a way to access blocks in a world. Has to accept non-rounded coordinates.
*/
export class ExpressionEnvironment {
  getBlockType(x: number, y: number, z: number): number;
  getBlockData(x: number, y: number, z: number): number;
  getBlockTypeAbs(x: number, y: number, z: number): number;
  getBlockDataAbs(x: number, y: number, z: number): number;
  getBlockTypeRel(x: number, y: number, z: number): number;
  getBlockDataRel(x: number, y: number, z: number): number;
}
export class ExpressionHelper {
  static resolveFunction(functions: Functions, ctx: FunctionCallContext): MethodHandle;
  /**
   * The argument should be wrapped in a {@link LocalSlot.Constant} before being passed.
  */
  static readonly WRAPPED_CONSTANT: string;
}
export class SlotTable {
  keySet(): Set<string>;
  putSlot(name: string, slot: LocalSlot): void;
  containsSlot(name: string): boolean;
  initVariable(name: string): Optional<Variable>;
  getSlot(name: string): Optional<LocalSlot>;
  getVariable(name: string): Optional<Variable>;
  getSlotValue(name: string): OptionalDouble;
}
/**
 * Contains all functions that can be used in expressions.
*/
export class Functions {
  getEnvironment(): ExpressionEnvironment;
  setEnvironment(environment: ExpressionEnvironment);
}
/**
 * Thrown when there's a problem during expression evaluation.
*/
export class EvaluationException extends ExpressionException {
  constructor(position: number);
  constructor(position: number, message: string, cause: Throwable);
  constructor(position: number, message: string);
  constructor(position: number, cause: Throwable);
}
/**
 * Thrown when the parser encounters a problem.
*/
export class ParserException extends ExpressionException {
  constructor(position: number);
  constructor(position: number, message: string, cause: Throwable);
  constructor(position: number, message: string);
  constructor(position: number, cause: Throwable);
}
/**
 * Compiles and evaluates expressions.
 *
 * Supported operators:
 *
 * 
 *     Logical: &&, ||, ! (unary)
 *     Bitwise: ~ (unary), >>, <<
 *     Arithmetic: +, -, *, /, % (modulo), ^ (power), - (unary), --, ++ (prefix only)
 *     Comparison: <=, >=, >, <, ==, !=, ~= (near)
 * 
 *
 * Supported functions: abs, acos, asin, atan, atan2, cbrt, ceil, cos, cosh,
 * exp, floor, ln, log, log10, max, max, min, min, rint, round, sin, sinh,
 * sqrt, tan, tanh and more. (See the Functions class or the wiki)
 *
 * Constants: e, pi
 *
 * To compile an equation, run
 * `Expression.compile("expression here", "var1", "var2"...)`.
 * If you wish to run the equation multiple times, you can then optimize it,
 * by calling {@link #optimize()}. You can then run the equation as many times
 * as you want by calling {@link #evaluate(double...)}. You do not need to
 * pass values for all slots specified while compiling.
 * To query slots after evaluation, you can use the {@linkplain #getSlots() slot table}.
*/
export class Expression {
  static compile(expression: string, ...variableNames: string[]): Expression;
  evaluate(...values: number[]): number;
  evaluate(values: number[], timeout: number): number;
  optimize(): void;
  getSource(): string;
  toString(): string;
  getSlots(): SlotTable;
  getEnvironment(): ExpressionEnvironment;
  setEnvironment(environment: ExpressionEnvironment);
}
/**
 * Represents the metadata for a named local slot.
*/
export class LocalSlot {
  getValue(): number;
}
/**
 * A common superinterface for everything passed to parser processors.
*/
export class Identifiable {
  /**
   * Returns a character that helps identify the token, pseudo-token or invokable in question.
   *
   *      * Tokens:
   * i - IdentifierToken
   * 0 - NumberToken
   * o - OperatorToken
   * \0 - NullToken
   * CharacterTokens are returned literally
   *
   * PseudoTokens:
   * p - UnaryOperator
   * V - UnboundVariable
   *
   * Nodes:
   * c - Constant
   * v - Variable
   * f - Function
   * l - LValueFunction
   * s - Sequence
   * I - Conditional
   * w - While
   * F - For
   * r - Return
   * b - Break (includes continue)
   * S - SimpleFor
   * C - Switch
   * 
  */
  id(): string;
  getPosition(): number;
}
/**
 * Thrown when an evaluation exceeds the timeout time.
*/
export class ExpressionTimeoutException extends EvaluationException {
  constructor(message: string);
}
export class ExecutionData {
  /**
   * Special execution context for evaluating constant values. As long as no variables are used,
   * it can be considered constant.
  */
  static readonly CONSTANT_EVALUATOR: ExecutionData;
  constructor(slots: SlotTable, functions: Functions, deadline: Instant);
  getSlots(): SlotTable;
  getFunctions(): Functions;
  getDeadline(): Instant;
  checkDeadline(): void;
}
/**
 * Represents a "compiled" expression.
*/
export class CompiledExpression {
  execute(executionData: ExecutionData): number;
}
/**
 * Thrown when there's a problem during any stage of the expression
 * compilation or evaluation.
*/
export class ExpressionException extends RuntimeException {
  constructor(position: number);
  constructor(position: number, message: string, cause: Throwable);
  constructor(position: number, message: string);
  constructor(position: number, cause: Throwable);
  getPosition(): number;
}

}
declare module 'com.sk89q.worldedit.util.io.file' {
import { Optional, List, Comparator, Spliterator } from 'java.util';
import { Enum } from 'java.lang';
import { URL } from 'java.net';
import { Closeable } from 'java.io';
import { Stream } from 'java.util.stream';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { WorldEditException } from 'com.sk89q.worldedit';
import { Path } from 'java.nio.file';
import { Lock } from 'java.util.concurrent.locks';
import { FileAttribute } from 'java.nio.file.attribute';
export class FilenameException extends WorldEditException {
  constructor(filename: string);
  constructor(filename: string, msg: Component);
  constructor(filename: string, msg: string);
  getFilename(): string;
}
export class ArchiveNioSupports {
  static tryOpenAsDir(archive: Path): Optional<ArchiveDir>;
  /**
   * Get an {@link ArchiveNioSupport} that combines all known instances.
   * @return a combined {@link ArchiveNioSupport} instance
  */
  static combined(): ArchiveNioSupport;
  /**
   * If root contains a folder with the same name as `name`, and no regular files,
   * returns the path to that folder. Otherwise, return the root path.
   *
   * 
   * This method is used to provide equal outputs for archives that do and do not contain
   * their name as part of their root folder.
   * 
   *
   * @param root the root path
   * @param name the name that might exist inside root
   * @return the corrected path
  */
  static skipRootSameName(root: Path, name: string): Path;
}
export class SafeFiles {
  /**
   * A version of {@link Files#list(Path)} that won't leak resources.
   *
   * 
   * Instead, it immediately consumes the entire listing into a {@link List} and
   * calls {@link List#stream()}.
   * 
   *
   * @param dir the directory to list
   * @return an I/O-resource-free stream of the files in the directory
   * @throws IOException if an I/O error occurs
  */
  static noLeakFileList(dir: Path): Stream<Path>;
  /**
   * {@link Path#getFileName()} includes a slash sometimes for some reason.
   * This will get rid of it.
   *
   * @param path the path to get the file name for
   * @return the file name of the given path
  */
  static canonicalFileName(path: Path): string;
  /**
   * Recursively uses {@link #tryHardToDelete(Path)} to cleanup directories before deleting them.
   *
   * @param directory the directory to delete
   * @throws IOException if an error occurs trying to delete the directory
  */
  static tryHardToDeleteDir(directory: Path): void;
  /**
   * Tries to delete a path. If it fails the first time, uses an implementation detail to try
   * and make it possible to delete the path, and then tries again. If that fails, throws an
   * {@link IOException} with both errors.
   *
   * @param path the path to delete
   * @throws IOException if the path could not be deleted after multiple attempts
  */
  static tryHardToDelete(path: Path): void;
  /**
   * Get a set of file attributes for file creation with owner-only access, if possible.
   *
   * 
   * On POSIX, this returns o+rw (and o+x if directory), on Windows it returns nothing.
   * 
   *
   * @return the owner-only file attributes
  */
  static getOwnerOnlyFileAttributes(attributeTarget: AttributeTarget): FileAttribute[];
}
export class AttributeTarget extends Enum<AttributeTarget> {
  static readonly FILE: AttributeTarget;
  static readonly DIRECTORY: AttributeTarget;
  static valueOf(name: string): AttributeTarget;
  static values(): AttributeTarget[];
}
export class MorePaths {
  static oldestFirst(): Comparator<Path>;
  static newestFirst(): Comparator<Path>;
  /**
   * Starting with the first path element, add elements until reaching this path.
  */
  static iterPaths(path: Path): Stream<Path>;
  /**
   * Create an efficiently-splittable spliterator for the given path elements.
   *
   * 
   * Since paths are so small, this is only useful for preventing heavy computations
   * on later parts of the stream from occurring when using
   * {@link Streams#findLast(IntStream)}, and not for parallelism.
   * 
   *
   * @param path the path to create a spliterator for
   * @return the spliterator
  */
  static optimizedSpliterator(path: Path): Spliterator<Path>;
}
export class FilenameResolutionException extends FilenameException {
  constructor(filename: string);
  constructor(filename: string, msg: Component);
  constructor(filename: string, msg: string);
}
export class InvalidFilenameException extends FilenameException {
  constructor(filename: string);
  constructor(filename: string, msg: Component);
  constructor(filename: string, msg: string);
}
export class ArchiveUnpacker {
  constructor(unpackDir: Path);
  unpackArchive(archiveUrl: URL): Path;
}
export class ZipArchiveNioSupport extends ArchiveNioSupport {
  static getInstance(): ZipArchiveNioSupport;
  /**
   * Try to open the given archive as a file system.
   *
   * @param archive the archive to open
   * @return the path for the root of the archive, if available
  */
  tryOpenAsDir(archive: Path): Optional<ArchiveDir>;
}
/**
 * Something that can provide access to an archive file as a file system.
*/
export class ArchiveNioSupport {
  /**
   * Try to open the given archive as a file system.
   *
   * @param archive the archive to open
   * @return the path for the root of the archive, if available
  */
  tryOpenAsDir(archive: Path): Optional<ArchiveDir>;
}
/**
 * Represents an archive opened as a directory. This must be closed after work on the Path is
 * done.
*/
export class ArchiveDir extends Closeable {
  getPath(): Path;
}
export class FileSelectionAbortedException extends FilenameException {
  constructor();
  constructor(msg: string);
  constructor(msg: Component);
}

}
declare module 'com.sk89q.worldedit.util.asset.holder' {
import { BufferedImage } from 'java.awt.image';
/**
 * Represents an image that acts as a heightmap.
 *
 * 
 * Height is determined by how light each pixel of the image is,
 * from black (0) to white (1). Lightness is determined by an
 * average of the 3 color channels.
 * 
*/
export class ImageHeightmap {
  /**
   * Create a new image heightmap from an image.
   *
   * @param image The image
  */
  constructor(image: BufferedImage);
  /**
   * Gets the height at the given position with scaling applied.
   *
   * @param x The x position
   * @param y The y position
   * @param size The size to sample the image as
   * @return The height at the location
  */
  getHeightAt(x: number, y: number, size: number): number;
}

}
declare module 'com.sk89q.worldedit.bukkit.adapter' {
import { Property } from 'com.sk89q.worldedit.registry.state';
import { ItemType } from 'com.sk89q.worldedit.world.item';
import { Set, List, OptionalInt, Map } from 'java.util';
import { Throwable, ClassLoader, Exception } from 'java.lang';
import { SideEffect } from 'com.sk89q.worldedit.util';
import { File } from 'java.io';
import { DataFixer } from 'com.sk89q.worldedit.world';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { WorldEditException } from 'com.sk89q.worldedit';
import { BaseItemStack } from 'com.sk89q.worldedit.blocks';
import { BlockState, BlockType } from 'com.sk89q.worldedit.world.block';
/**
 * Loads Bukkit implementation adapters.
*/
export class BukkitImplLoader {
  /**
   * Create a new instance.
  */
  constructor();
  /**
   * Search the given JAR for candidate implementations.
   *
   * @param file the file
   * @throws IOException thrown on I/O error
  */
  addFromJar(file: File): void;
  /**
   * Search for classes stored as separate files available via the given
   * class loader.
   *
   * @param classLoader the class loader
   * @throws IOException thrown on error
  */
  addFromPath(classLoader: ClassLoader): void;
  /**
   * Iterate through the list of candidates and load an adapter.
   *
   * @return an adapter
   * @throws AdapterLoadException thrown if no adapter could be found
  */
  loadAdapter(): BukkitImplAdapter;
}
export class UnsupportedVersionEditException extends WorldEditException {
  constructor();
}
/**
 * An interface for adapters of various Bukkit implementations.
*/
export class BukkitImplAdapter {
  /**
   * Get a data fixer, or null if not supported.
   *
   * @return the data fixer
  */
  getDataFixer(): DataFixer | null;
  /**
   * Check if this adapter supports the watchdog.
   *
   * @return `true` if {@link #tickWatchdog()} is implemented
  */
  supportsWatchdog(): boolean;
  /**
   * Tick the server watchdog, if possible.
  */
  tickWatchdog(): void;
  /**
   * Gets the name for the given block.
   *
   * @param blockType the block
   * @return The name
  */
  getRichBlockName(blockType: BlockType): Component;
  /**
   * Gets the name for the given item.
   *
   * @param itemType the item
   * @return The name
  */
  getRichItemName(itemType: ItemType): Component;
  /**
   * Gets the name for the given item stack.
   *
   * @param itemStack the item stack
   * @return The name
  */
  getRichItemName(itemStack: BaseItemStack): Component;
  /**
   * Get a map of `string -> property`.
   *
   * @param blockType The block type
   * @return The properties map
  */
  getProperties(blockType: BlockType): Map<string, Property<any>>;
  /**
   * Get the {@link SideEffect}s that this adapter supports.
   *
   * @return The side effects that are supported
  */
  getSupportedSideEffects(): Set<SideEffect>;
  /**
   * Retrieve the internal ID for a given state, if possible.
   *
   * @param state The block state
   * @return the internal ID of the state
  */
  getInternalBlockStateId(state: BlockState): OptionalInt;
}
/**
 * Reflection helper to deal with obfuscation.
*/
export class Refraction {
  static pickName(mojangName: string, spigotName: string): string;
}
/**
 * Thrown when no adapter can be found.
*/
export class AdapterLoadException extends Exception {
  constructor();
  constructor(message: string);
  constructor(message: string, cause: Throwable);
  constructor(cause: Throwable);
}

}
declare module 'com.sk89q.worldedit.function.operation' {
import { RegionVisitor, EntityVisitor } from 'com.sk89q.worldedit.function.visitor';
import { Set, Iterator, Collection, List, Deque } from 'java.util';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { Region } from 'com.sk89q.worldedit.regions';
import { Change } from 'com.sk89q.worldedit.history.change';
import { UndoContext } from 'com.sk89q.worldedit.history';
import { Type } from 'com.sk89q.worldedit.function.operation.ChangeSetExecutor';
import { RegionFunction } from 'com.sk89q.worldedit.function';
import { Iterable } from 'java.lang';
import { ChangeSet } from 'com.sk89q.worldedit.history.changeset';
import { LocatedBlock } from 'com.sk89q.worldedit.util';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { BlockMap } from 'com.sk89q.worldedit.util.collection';
import { Extent } from 'com.sk89q.worldedit.extent';
import { BaseBlock } from 'com.sk89q.worldedit.world.block';
import { Transform } from 'com.sk89q.worldedit.math.transform';
/**
 * Executes a delegate operation, but returns to another operation upon
 * completing the delegate.
*/
export class DelegateOperation extends Operation {
  /**
   * Create a new operation delegate.
   *
   * @param original the operation to return to
   * @param delegate the delegate operation to complete before returning
  */
  constructor(original: Operation, delegate: Operation);
  /**
   * Complete the next step. If this method returns true, then the method may
   * be called again in the future, or possibly never. If this method
   * returns false, then this method should not be called again.
   *
   * @param run describes information about the current run
   * @return another operation to run that operation again, or null to stop
   * @throws WorldEditException an error
  */
  resume(run: RunContext): Operation;
  /**
   * Abort the current task. After the this method is called,
   * {@link #resume(RunContext)} should not be called at any point in the
   * future. This method should not be called after successful completion of
   * the operation. This method must be called if the operation is
   * interrupted before completion.
  */
  cancel(): void;
  /**
   * Gets an iterable of messages that describe the current status of the
   * operation.
   *
   * @return The status messages
  */
  getStatusMessages(): Iterable<Component>;
}
export class SetLocatedBlocks extends Operation {
  constructor(extent: Extent, blocks: Iterable<LocatedBlock>);
  /**
   * Complete the next step. If this method returns true, then the method may
   * be called again in the future, or possibly never. If this method
   * returns false, then this method should not be called again.
   *
   * @param run describes information about the current run
   * @return another operation to run that operation again, or null to stop
   * @throws WorldEditException an error
  */
  resume(run: RunContext): Operation;
  /**
   * Abort the current task. After the this method is called,
   * {@link #resume(RunContext)} should not be called at any point in the
   * future. This method should not be called after successful completion of
   * the operation. This method must be called if the operation is
   * interrupted before completion.
  */
  cancel(): void;
}
/**
 * Executes multiple queues in order.
*/
export class OperationQueue extends Operation {
  /**
   * Create a new queue containing no operations.
  */
  constructor();
  /**
   * Create a new queue with operations from the given collection.
   *
   * @param operations a collection of operations
  */
  constructor(operations: Collection<Operation>);
  /**
   * Create a new queue with operations from the given array.
   *
   * @param operation an array of operations
  */
  constructor(...operation: Operation[]);
  /**
   * Add a new operation to the queue.
   *
   * @param operation the operation
  */
  offer(operation: Operation): void;
  /**
   * Complete the next step. If this method returns true, then the method may
   * be called again in the future, or possibly never. If this method
   * returns false, then this method should not be called again.
   *
   * @param run describes information about the current run
   * @return another operation to run that operation again, or null to stop
   * @throws WorldEditException an error
  */
  resume(run: RunContext): Operation;
  /**
   * Abort the current task. After the this method is called,
   * {@link #resume(RunContext)} should not be called at any point in the
   * future. This method should not be called after successful completion of
   * the operation. This method must be called if the operation is
   * interrupted before completion.
  */
  cancel(): void;
  /**
   * Gets an iterable of messages that describe the current status of the
   * operation.
   *
   * @return The status messages
  */
  getStatusMessages(): Iterable<Component>;
}
/**
 * An task that may be split into multiple steps to be run sequentially
 * immediately or at a varying or fixed interval. Operations should attempt
 * to break apart tasks into smaller tasks that can be completed in quicker
 * successions.
*/
export class Operation {
  /**
   * Complete the next step. If this method returns true, then the method may
   * be called again in the future, or possibly never. If this method
   * returns false, then this method should not be called again.
   *
   * @param run describes information about the current run
   * @return another operation to run that operation again, or null to stop
   * @throws WorldEditException an error
  */
  resume(run: RunContext): Operation;
  /**
   * Abort the current task. After the this method is called,
   * {@link #resume(RunContext)} should not be called at any point in the
   * future. This method should not be called after successful completion of
   * the operation. This method must be called if the operation is
   * interrupted before completion.
  */
  cancel(): void;
  /**
   * Add messages to the provided list that describe the current status
   * of the operation.
   *
   * @param messages The list to add messages to
   * @deprecated Will be removed in WorldEdit 8.0 - use the Component variant
  */
  addStatusMessages(messages: string[]): void;
  /**
   * This is an internal field, and should not be touched.
  */
  static readonly warnedDeprecatedClasses: Set<string>;
  /**
   * Gets an iterable of messages that describe the current status of the
   * operation.
   *
   * @return The status messages
  */
  getStatusMessages(): Iterable<Component>;
}
/**
 * Describes the current run.
*/
export class RunContext {
  /**
   * Return whether the current operation should still continue running.
   *
   * This method can be called frequently.
   *
   * @return true if the operation should continue running
  */
  shouldContinue(): boolean;
}
export class SetBlockMap extends Operation {
  constructor(extent: Extent, blocks: BlockMap<BaseBlock>);
  /**
   * Complete the next step. If this method returns true, then the method may
   * be called again in the future, or possibly never. If this method
   * returns false, then this method should not be called again.
   *
   * @param run describes information about the current run
   * @return another operation to run that operation again, or null to stop
   * @throws WorldEditException an error
  */
  resume(run: RunContext): Operation;
  /**
   * Abort the current task. After the this method is called,
   * {@link #resume(RunContext)} should not be called at any point in the
   * future. This method should not be called after successful completion of
   * the operation. This method must be called if the operation is
   * interrupted before completion.
  */
  cancel(): void;
}
/**
 * Operation helper methods.
*/
export class Operations {
  /**
   * Complete a given operation synchronously until it completes.
   *
   * @param op operation to execute
   * @throws WorldEditException WorldEdit exception
  */
  static complete(op: Operation): void;
  /**
   * Complete a given operation synchronously until it completes. Catch all
   * errors that is not {@link MaxChangedBlocksException} for legacy reasons.
   *
   * @param op operation to execute
   * @throws MaxChangedBlocksException thrown when too many blocks have been changed
  */
  static completeLegacy(op: Operation): void;
  /**
   * Complete a given operation synchronously until it completes. Re-throw all
   * {@link com.sk89q.worldedit.WorldEditException} exceptions as
   * {@link java.lang.RuntimeException}s.
   *
   * @param op operation to execute
  */
  static completeBlindly(op: Operation): void;
}
/**
 * Performs an undo or redo from a given {@link ChangeSet}.
*/
export class ChangeSetExecutor extends Operation {
  /**
   * Complete the next step. If this method returns true, then the method may
   * be called again in the future, or possibly never. If this method
   * returns false, then this method should not be called again.
   *
   * @param run describes information about the current run
   * @return another operation to run that operation again, or null to stop
   * @throws WorldEditException an error
  */
  resume(run: RunContext): Operation;
  /**
   * Abort the current task. After the this method is called,
   * {@link #resume(RunContext)} should not be called at any point in the
   * future. This method should not be called after successful completion of
   * the operation. This method must be called if the operation is
   * interrupted before completion.
  */
  cancel(): void;
  /**
   * Create a new undo operation.
   *
   * @param changeSet the change set
   * @param context an undo context
   * @return an operation
  */
  static createUndo(changeSet: ChangeSet, context: UndoContext): ChangeSetExecutor;
  /**
   * Create a new redo operation.
   *
   * @param changeSet the change set
   * @param context an undo context
   * @return an operation
  */
  static createRedo(changeSet: ChangeSet, context: UndoContext): ChangeSetExecutor;
}
/**
 * Makes a copy of a portion of one extent to another extent or another point.
 *
 * This is a forward extent copy, meaning that it iterates over the blocks
 * in the source extent, and will copy as many blocks as there are in the
 * source. Therefore, interpolation will not occur to fill in the gaps.
*/
export class ForwardExtentCopy extends Operation {
  /**
   * Create a new copy using the region's lowest minimum point as the
   * "from" position.
   *
   * @param source the source extent
   * @param region the region to copy
   * @param destination the destination extent
   * @param to the destination position
   * @see #ForwardExtentCopy(Extent, Region, BlockVector3, Extent, BlockVector3) the main constructor
  */
  constructor(source: Extent, region: Region, destination: Extent, to: BlockVector3);
  /**
   * Create a new copy.
   *
   * @param source the source extent
   * @param region the region to copy
   * @param from the source position
   * @param destination the destination extent
   * @param to the destination position
  */
  constructor(source: Extent, region: Region, from: BlockVector3, destination: Extent, to: BlockVector3);
  /**
   * Get the transformation that will occur on every point.
   *
   * The transformation will stack with each repetition.
   *
   * @return a transformation
  */
  getTransform(): Transform;
  /**
   * Set the transformation that will occur on every point.
   *
   * @param transform a transformation
   * @see #getTransform()
  */
  setTransform(transform: Transform);
  /**
   * Get the mask that gets applied to the source extent.
   *
   * This mask can be used to filter what will be copied from the source.
   *
   * @return a source mask
  */
  getSourceMask(): Mask;
  /**
   * Set a mask that gets applied to the source extent.
   *
   * @param sourceMask a source mask
   * @see #getSourceMask()
  */
  setSourceMask(sourceMask: Mask);
  /**
   * Get the function that gets applied to all source blocks after
   * the copy has been made.
   *
   * @return a source function, or null if none is to be applied
  */
  getSourceFunction(): RegionFunction;
  /**
   * Set the function that gets applied to all source blocks after
   * the copy has been made.
   *
   * @param function a source function, or null if none is to be applied
  */
  setSourceFunction(sourceFunction: RegionFunction);
  /**
   * Get the number of repetitions left.
   *
   * @return the number of repetitions
  */
  getRepetitions(): number;
  /**
   * Set the number of repetitions left.
   *
   * @param repetitions the number of repetitions
  */
  setRepetitions(repetitions: number);
  /**
   * Return whether entities should be copied along with blocks.
   *
   * @return true if copying
  */
  isCopyingEntities(): boolean;
  /**
   * Set whether entities should be copied along with blocks.
   *
   * @param copyingEntities true if copying
  */
  setCopyingEntities(copyingEntities: boolean): void;
  /**
   * Return whether entities that are copied should be removed.
   *
   * @return true if removing
  */
  isRemovingEntities(): boolean;
  /**
   * Set whether entities that are copied should be removed.
   *
   * @param removingEntities true if removing
  */
  setRemovingEntities(removingEntities: boolean): void;
  /**
   * Return whether biomes should be copied along with blocks.
   *
   * @return true if copying biomes
  */
  isCopyingBiomes(): boolean;
  /**
   * Set whether biomes should be copies along with blocks.
   *
   * @param copyingBiomes true if copying
  */
  setCopyingBiomes(copyingBiomes: boolean): void;
  /**
   * Get the number of affected objects.
   *
   * @return the number of affected
  */
  getAffected(): number;
  /**
   * Complete the next step. If this method returns true, then the method may
   * be called again in the future, or possibly never. If this method
   * returns false, then this method should not be called again.
   *
   * @param run describes information about the current run
   * @return another operation to run that operation again, or null to stop
   * @throws WorldEditException an error
  */
  resume(run: RunContext): Operation;
  /**
   * Abort the current task. After the this method is called,
   * {@link #resume(RunContext)} should not be called at any point in the
   * future. This method should not be called after successful completion of
   * the operation. This method must be called if the operation is
   * interrupted before completion.
  */
  cancel(): void;
  /**
   * Gets an iterable of messages that describe the current status of the
   * operation.
   *
   * @return The status messages
  */
  getStatusMessages(): Iterable<Component>;
}

}
declare module 'com.sk89q.worldedit.entity' {
import { CompoundTag } from 'com.sk89q.jnbt';
import { Vector3, BlockVector3 } from 'com.sk89q.worldedit.math';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { NbtValued, World } from 'com.sk89q.worldedit.world';
import { HandSide, Faceted, Direction, Location } from 'com.sk89q.worldedit.util';
import { BlockBag } from 'com.sk89q.worldedit.extent.inventory';
import { BaseItemStack } from 'com.sk89q.worldedit.blocks';
import { Actor, Locatable } from 'com.sk89q.worldedit.extension.platform';
import { GameMode } from 'com.sk89q.worldedit.world.gamemode';
import { BaseBlock } from 'com.sk89q.worldedit.world.block';
import { EntityType } from 'com.sk89q.worldedit.world.entity';
/**
 * A reference to an instance of an entity that exists in an {@link Extent}
 * and thus would have position and similar details.
 *
 * This object cannot be directly cloned because it represents a particular
 * instance of an entity, but a {@link BaseEntity} can be created from
 * this entity by calling {@link #getState()}.
*/
export class Entity extends Faceted {
  /**
   * Get a copy of the entity's state.
   *
   * In some cases, this method may return `null` if a snapshot
   * of the entity can't be created. It may not be possible, for example,
   * to get a snapshot of a player.
   *
   * @return the entity's state or null if one cannot be created
  */
  getState(): BaseEntity | null;
  /**
   * Remove this entity from it container.
   *
   * @return true if removal was successful
  */
  remove(): boolean;
}
export interface Entity extends Faceted, Locatable {}
/**
 * Represents a player.
*/
export class Player extends Entity {
  /**
   * Return the world that the player is on.
   *
   * @return the world
  */
  getWorld(): World;
  /**
   * Returns true if the entity is holding a pick axe.
   *
   * @return whether a pick axe is held
  */
  isHoldingPickAxe(): boolean;
  /**
   * Get the player's cardinal direction (N, W, NW, etc.) with an offset. May return null.
   * @param yawOffset offset that is added to the player's yaw before determining the cardinal direction
   *
   * @return the direction
  */
  getCardinalDirection(yawOffset: number): Direction;
  /**
   * Get the item that the player is holding.
   *
   * @return the item the player is holding
  */
  getItemInHand(handSide: HandSide): BaseItemStack;
  /**
   * Get the Block that the player is holding.
   *
   * @return the item id of the item the player is holding
  */
  getBlockInHand(handSide: HandSide): BaseBlock;
  /**
   * Gives the player an item.
   *
   * @param itemStack The item to give
  */
  giveItem(itemStack: BaseItemStack): void;
  /**
   * Get this actor's block bag.
   *
   * @return the actor's block bag
  */
  getInventoryBlockBag(): BlockBag;
  /**
   * Return this actor's game mode.
   *
   * @return the game mode
  */
  getGameMode(): GameMode;
  /**
   * Sets the player to the given game mode.
   *
   * @param gameMode The game mode
  */
  setGameMode(gameMode: GameMode);
  /**
   * Find a position for the actor to stand that is not inside a block.
   * Blocks above the player will be iteratively tested until there is
   * a series of two free blocks. The actor will be teleported to
   * that free position.
   *
   * @param searchPos search position
  */
  findFreePosition(searchPos: Location): void;
  /**
   * Set the actor on the ground.
   *
   * @param searchPos The location to start searching from
  */
  setOnGround(onGround: Location);
  /**
   * Find a position for the player to stand that is not inside a block.
   * Blocks above the player will be iteratively tested until there is
   * a series of two free blocks. The player will be teleported to
   * that free position.
  */
  findFreePosition(): void;
  /**
   * Go up one level to the next free space above.
   *
   * @return true if a spot was found
  */
  ascendLevel(): boolean;
  /**
   * Go up one level to the next free space above.
   *
   * @return true if a spot was found
  */
  descendLevel(): boolean;
  /**
   * Ascend to the ceiling above.
   *
   * @param clearance How many blocks to leave above the player's head
   * @return whether the player was moved
  */
  ascendToCeiling(clearance: number): boolean;
  /**
   * Ascend to the ceiling above.
   *
   * @param clearance How many blocks to leave above the player's head
   * @param alwaysGlass Always put glass under the player
   * @return whether the player was moved
  */
  ascendToCeiling(clearance: number, alwaysGlass: boolean): boolean;
  /**
   * Just go up.
   *
   * @param distance How far up to teleport
   * @return whether the player was moved
  */
  ascendUpwards(distance: number): boolean;
  /**
   * Just go up.
   *
   * @param distance How far up to teleport
   * @param alwaysGlass Always put glass under the player
   * @return whether the player was moved
  */
  ascendUpwards(distance: number, alwaysGlass: boolean): boolean;
  /**
   * Make the player float in the given blocks.
   *
   * @param x The X coordinate of the block to float in
   * @param y The Y coordinate of the block to float in
   * @param z The Z coordinate of the block to float in
  */
  floatAt(x: number, y: number, z: number, alwaysGlass: boolean): void;
  /**
   * Get the point of the block that is being stood in.
   *
   * @return point
   * @deprecated Use Locatable#getBlockLocation
  */
  getBlockIn(): Location;
  /**
   * Get the point of the block that is being stood upon.
   *
   * @return point
  */
  getBlockOn(): Location;
  /**
   * Get the point of the block being looked at. May return null.
   * Will return the farthest away air block if useLastBlock is true and no other block is found.
   *
   * @param range how far to checks for blocks
   * @param useLastBlock try to return the last valid air block found
   * @return point
  */
  getBlockTrace(range: number, useLastBlock: boolean): Location;
  /**
   * Get the point of the block being looked at. May return null.
   * Will return the farthest away block before matching the stop mask if useLastBlock is true and no other block is found.
   *
   * @param range how far to checks for blocks
   * @param useLastBlock try to return the last valid block not matching the stop mask found
   * @param stopMask the mask used to determine when to stop tracing
   * @return point
  */
  getBlockTrace(range: number, useLastBlock: boolean, stopMask: Mask | null): Location;
  /**
   * Get the face that the player is looking at.
   *
   * @param range the range
   * @param useLastBlock try to return the last valid air block found
   * @return a face
  */
  getBlockTraceFace(range: number, useLastBlock: boolean): Location;
  /**
   * Get the face that the player is looking at.
   *
   * @param range the range
   * @param useLastBlock try to return the last valid block not matching the stop mask found
   * @param stopMask the mask used to determine when to stop tracing
   * @return a face
  */
  getBlockTraceFace(range: number, useLastBlock: boolean, stopMask: Mask | null): Location;
  /**
   * Get the point of the block being looked at. May return null.
   *
   * @param range How far to checks for blocks
   * @return point
  */
  getBlockTrace(range: number): Location;
  /**
   * Get the point of the block being looked at. May return null.
   *
   * @param range How far to checks for blocks
   * @return point
  */
  getSolidBlockTrace(range: number): Location;
  /**
   * Get the player's cardinal direction (N, W, NW, etc.). May return null.
   *
   * @return the direction
  */
  getCardinalDirection(): Direction;
  /**
   * Pass through the wall that you are looking at.
   *
   * @param range How far to checks for blocks
   * @return whether the player was pass through
  */
  passThroughForwardWall(range: number): boolean;
  /**
   * Move the player.
   *
   * @param pos where to move them
   * @param pitch the pitch (up/down) of the player's view in degrees
   * @param yaw the yaw (left/right) of the player's view in degrees
   * @deprecated This method may fail without indication. Use
   * {@link #trySetPosition(Vector3, float, float)} instead
  */
  setPosition(pos: Vector3, pitch: number, yaw: number): void;
  /**
   * Attempt to move the player.
   *
   * 
   * This action may fail, due to other mods cancelling the move.
   * If so, this method will return `false`.
   * 
   *
   * @param pos where to move them
   * @param pitch the pitch (up/down) of the player's view in degrees
   * @param yaw the yaw (left/right) of the player's view in degrees
   * @return if the move was able to occur
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  trySetPosition(pos: Vector3, pitch: number, yaw: number): boolean;
  /**
   * Sends a fake block to the client.
   *
   * 
   *     This block isn't real.
   * 
   *
   * @param pos The position of the block
   * @param block The block to send, null to reset
  */
  sendFakeBlock<B>(pos: BlockVector3, block: B | null): void;
  /**
   * Attempts to set the position of this actor.
   *
   * 
   * This action may fail, due to other mods cancelling the move.
   * If so, this method will return `false`.
   * 
   *
   * @param pos the position to set
   * @return if the position was able to be set
  */
  trySetPosition(pos: Vector3): boolean;
}
export interface Player extends Entity, Actor {}
/**
 * Represents a mutable "snapshot" of an entity.
 *
 * An instance of this class contains all the information needed to
 * accurately reproduce the entity, provided that the instance was
 * made correctly. In some implementations, it may not be possible to get a
 * snapshot of entities correctly, so, for example, the NBT data for an entity
 * may be missing.
 *
 * This class identifies entities using its entity type string, although
 * this is not very efficient as the types are currently not interned. This
 * may be changed in the future.
*/
export class BaseEntity extends NbtValued {
  /**
   * Create a new base entity.
   *
   * @param type the entity type
   * @param nbtData NBT data
  */
  constructor(type: EntityType, nbtData: CompoundTag);
  /**
   * Create a new base entity with no NBT data.
   *
   * @param type the entity type
  */
  constructor(type: EntityType);
  /**
   * Make a clone of a {@link BaseEntity}.
   *
   * @param other the object to clone
  */
  constructor(other: BaseEntity);
  /**
   * Returns whether the block contains NBT data. {@link #getNbtData()}
   * must not return null if this method returns true.
   *
   * @return true if there is NBT data
  */
  hasNbtData(): boolean;
  /**
   * Get the object's NBT data (tile entity data). The returned tag, if
   * modified in any way, should be sent to {@link #setNbtData(CompoundTag)}
   * so that the instance knows of the changes. Making changes without
   * calling {@link #setNbtData(CompoundTag)} could have unintended
   * consequences.
   *
   * {@link #hasNbtData()} must return true if and only if method does
   * not return null.
   *
   * @return compound tag, or null
  */
  getNbtData(): CompoundTag | null;
  /**
   * Set the object's NBT data (tile entity data).
   *
   * @param nbtData NBT data, or null if no data
  */
  setNbtData(nbtData: CompoundTag | null);
  /**
   * Get the type of entity.
   *
   * @return the entity type
  */
  getType(): EntityType;
}

}
declare module 'com.sk89q.worldedit.internal.wna' {
import { CompoundTag } from 'com.sk89q.jnbt';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { SideEffectSet } from 'com.sk89q.worldedit.util';
import { BlockState } from 'com.sk89q.worldedit.world.block';
/**
 * Natively access and perform operations on the world.
 *
 * @param  the native chunk type
 * @param  the native block state type
 * @param  the native position type
*/
export class WorldNativeAccess<NC, NBS, NP> {
  setBlock<B>(position: BlockVector3, block: B, sideEffects: SideEffectSet): boolean;
  applySideEffects(position: BlockVector3, previousType: BlockState, sideEffectSet: SideEffectSet): void;
  /**
   * Receive the current side-effect set from the high level call.
   *
   * 
   * This allows the implementation to branch on the side-effects internally.
   * 
   *
   * @param sideEffectSet the set of side-effects
  */
  setCurrentSideEffectSet(currentSideEffectSet: SideEffectSet);
  getChunk(x: number, z: number): NC;
  toNative(state: BlockState): NBS;
  getBlockState(chunk: NC, position: NP): NBS;
  setBlockState(chunk: NC, position: NP, state: NBS): NBS | null;
  getValidBlockForPosition(block: NBS, position: NP): NBS;
  getPosition(x: number, y: number, z: number): NP;
  updateLightingForBlock(position: NP): void;
  updateTileEntity(position: NP, tag: CompoundTag): boolean;
  notifyBlockUpdate(chunk: NC, position: NP, oldState: NBS, newState: NBS): void;
  isChunkTicking(chunk: NC): boolean;
  markBlockChanged(chunk: NC, position: NP): void;
  notifyNeighbors(pos: NP, oldState: NBS, newState: NBS): void;
  updateNeighbors(pos: NP, oldState: NBS, newState: NBS, recursionLimit: number): void;
  onBlockStateChange(pos: NP, oldState: NBS, newState: NBS): void;
  /**
   * This is a heavily modified function stripped from MC to apply WorldEdit-modifications.
   *
   * 
   * See Forge's World.markAndNotifyBlock
   * 
  */
  markAndNotifyBlock(pos: NP, chunk: NC, oldState: NBS, newState: NBS, sideEffectSet: SideEffectSet): void;
}

}
declare module 'com.sk89q.worldedit.function' {
import { Collection, List } from 'java.util';
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { Mask, Mask2D } from 'com.sk89q.worldedit.function.mask';
import { Region } from 'com.sk89q.worldedit.regions';
import { Direction } from 'com.sk89q.worldedit.util';
import { World } from 'com.sk89q.worldedit.world';
import { LocalSession } from 'com.sk89q.worldedit';
import { Pattern } from 'com.sk89q.worldedit.function.pattern';
import { Entity } from 'com.sk89q.worldedit.entity';
import { BaseItem } from 'com.sk89q.worldedit.blocks';
import { Extent } from 'com.sk89q.worldedit.extent';
/**
 * Passes calls to {@link #apply(BlockVector2)} to the
 * delegate {@link com.sk89q.worldedit.function.FlatRegionFunction} if they
 * match the given mask.
*/
export class FlatRegionMaskingFilter extends FlatRegionFunction {
  /**
   * Create a new masking filter.
   *
   * @param mask the mask
   * @param function the delegate function to call
  */
  constructor(mask: Mask2D, func: FlatRegionFunction);
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector2): boolean;
}
export class Contextual<T> {
  createFromContext(context: EditContext): T;
}
export class EditContext {
  getDestination(): Extent;
  setDestination(destination: Extent);
  getRegion(): Region | null;
  setRegion(region: Region | null);
  getFill(): Pattern | null;
  setFill(fill: Pattern | null);
  getSession(): LocalSession | null;
  setSession(session: LocalSession | null);
}
/**
 * Performs a function on the columns in a {@link FlatRegion}, or also
 * known as vectors with only X and Z components (where Y is height).
*/
export class FlatRegionFunction {
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector2): boolean;
}
/**
 * Performs a function on points in a region.
*/
export class RegionFunction {
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3): boolean;
}
/**
 * A function that takes a position and a depth.
*/
export class LayerFunction {
  /**
   * Returns whether the given block should be "passed through" when
   * conducting the ground search.
   *
   * @param position return whether the given block is the ground
   * @return true if the search should stop
  */
  isGround(position: BlockVector3): boolean;
  /**
   * Apply the function to the given position.
   *
   * The depth would be the number of blocks from the surface if
   * a {@link LayerVisitor} was used.
   *
   * @param position the position
   * @param depth the depth as a number starting from 0
   * @return true whether this method should be called for further layers
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3, depth: number): boolean;
}
/**
 * Applies a function to entities.
*/
export class EntityFunction {
  /**
   * Apply the function to the entity.
   *
   * @param entity the entity
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(entity: Entity): boolean;
}
export class ItemUseFunction extends RegionFunction {
  constructor(world: World, item: BaseItem);
  constructor(world: World, item: BaseItem, dir: Direction);
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3): boolean;
}
/**
 * Passes calls to {@link #apply(BlockVector3)} to the
 * delegate {@link com.sk89q.worldedit.function.RegionFunction} if they
 * match the given mask.
*/
export class RegionMaskingFilter extends RegionFunction {
  /**
   * Create a new masking filter.
   *
   * @param mask the mask
   * @param function the function
  */
  constructor(mask: Mask, func: RegionFunction);
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3): boolean;
}
/**
 * Applies a {@link RegionFunction} to the first ground block.
*/
export class GroundFunction extends LayerFunction {
  /**
   * Create a new ground function.
   *
   * @param mask a mask
   * @param function the function to apply
  */
  constructor(mask: Mask, func: RegionFunction);
  /**
   * Get the mask that determines what the ground consists of.
   *
   * @return a mask
  */
  getMask(): Mask;
  /**
   * Set the mask that determines what the ground consists of.
   *
   * @param mask a mask
  */
  setMask(mask: Mask);
  /**
   * Get the number of affected objects.
   *
   * @return the number of affected
  */
  getAffected(): number;
  /**
   * Returns whether the given block should be "passed through" when
   * conducting the ground search.
   *
   * @param position return whether the given block is the ground
   * @return true if the search should stop
  */
  isGround(position: BlockVector3): boolean;
  /**
   * Apply the function to the given position.
   *
   * The depth would be the number of blocks from the surface if
   * a {@link LayerVisitor} was used.
   *
   * @param position the position
   * @param depth the depth as a number starting from 0
   * @return true whether this method should be called for further layers
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3, depth: number): boolean;
}
/**
 * Executes several region functions in order.
*/
export class CombinedRegionFunction extends RegionFunction {
  /**
   * Create a combined region function.
  */
  constructor();
  /**
   * Create a combined region function.
   *
   * @param functions a list of functions to match
  */
  constructor(functions: Collection<RegionFunction>);
  /**
   * Create a combined region function.
   *
   * @param function an array of functions to match
  */
  constructor(...func: RegionFunction[]);
  /**
   * Add the given functions to the list of functions to call.
   *
   * @param functions a list of functions
  */
  add(functions: Collection<RegionFunction>): void;
  /**
   * Add the given functions to the list of functions to call.
   *
   * @param function an array of functions
  */
  add(...func: RegionFunction[]): void;
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3): boolean;
}

}
declare module 'com.sk89q.worldedit.world.entity' {
import { NamespacedRegistry, Keyed } from 'com.sk89q.worldedit.registry';
export class EntityType extends Keyed {
  static readonly REGISTRY: NamespacedRegistry<EntityType>;
  constructor(id: string);
  /**
   * The id of this object in the registry. Must be unique, and lowercase. Certain registries (e.g Namespaced ones) may have additional restrictions.
   * @return an id
  */
  getId(): string;
  /**
   * Gets the name of this item, or the ID if the name cannot be found.
   *
   * @return The name, or ID
  */
  getName(): string;
  toString(): string;
  hashCode(): number;
  equals(obj: any): boolean;
}
/**
 * Stores a list of common {@link EntityType EntityTypes}.
 *
 * @see EntityType
*/
export class EntityTypes {
  static readonly AREA_EFFECT_CLOUD: EntityType | null;
  static readonly ARMOR_STAND: EntityType | null;
  static readonly ARROW: EntityType | null;
  static readonly AXOLOTL: EntityType | null;
  static readonly BAT: EntityType | null;
  static readonly BEE: EntityType | null;
  static readonly BLAZE: EntityType | null;
  static readonly BOAT: EntityType | null;
  static readonly CAT: EntityType | null;
  static readonly CAVE_SPIDER: EntityType | null;
  static readonly CHEST_MINECART: EntityType | null;
  static readonly CHICKEN: EntityType | null;
  static readonly COD: EntityType | null;
  static readonly COMMAND_BLOCK_MINECART: EntityType | null;
  static readonly COW: EntityType | null;
  static readonly CREEPER: EntityType | null;
  static readonly DOLPHIN: EntityType | null;
  static readonly DONKEY: EntityType | null;
  static readonly DRAGON_FIREBALL: EntityType | null;
  static readonly DROWNED: EntityType | null;
  static readonly EGG: EntityType | null;
  static readonly ELDER_GUARDIAN: EntityType | null;
  static readonly END_CRYSTAL: EntityType | null;
  static readonly ENDER_DRAGON: EntityType | null;
  static readonly ENDER_PEARL: EntityType | null;
  static readonly ENDERMAN: EntityType | null;
  static readonly ENDERMITE: EntityType | null;
  static readonly EVOKER: EntityType | null;
  static readonly EVOKER_FANGS: EntityType | null;
  static readonly EXPERIENCE_BOTTLE: EntityType | null;
  static readonly EXPERIENCE_ORB: EntityType | null;
  static readonly EYE_OF_ENDER: EntityType | null;
  static readonly FALLING_BLOCK: EntityType | null;
  static readonly FIREBALL: EntityType | null;
  static readonly FIREWORK_ROCKET: EntityType | null;
  static readonly FISHING_BOBBER: EntityType | null;
  static readonly FOX: EntityType | null;
  static readonly FURNACE_MINECART: EntityType | null;
  static readonly GHAST: EntityType | null;
  static readonly GIANT: EntityType | null;
  static readonly GLOW_ITEM_FRAME: EntityType | null;
  static readonly GLOW_SQUID: EntityType | null;
  static readonly GOAT: EntityType | null;
  static readonly GUARDIAN: EntityType | null;
  static readonly HOGLIN: EntityType | null;
  static readonly HOPPER_MINECART: EntityType | null;
  static readonly HORSE: EntityType | null;
  static readonly HUSK: EntityType | null;
  static readonly ILLUSIONER: EntityType | null;
  static readonly IRON_GOLEM: EntityType | null;
  static readonly ITEM: EntityType | null;
  static readonly ITEM_FRAME: EntityType | null;
  static readonly LEASH_KNOT: EntityType | null;
  static readonly LIGHTNING_BOLT: EntityType | null;
  static readonly LLAMA: EntityType | null;
  static readonly LLAMA_SPIT: EntityType | null;
  static readonly MAGMA_CUBE: EntityType | null;
  static readonly MARKER: EntityType | null;
  static readonly MINECART: EntityType | null;
  static readonly MOOSHROOM: EntityType | null;
  static readonly MULE: EntityType | null;
  static readonly OCELOT: EntityType | null;
  static readonly PAINTING: EntityType | null;
  static readonly PANDA: EntityType | null;
  static readonly PARROT: EntityType | null;
  static readonly PHANTOM: EntityType | null;
  static readonly PIG: EntityType | null;
  static readonly PIGLIN: EntityType | null;
  static readonly PIGLIN_BRUTE: EntityType | null;
  static readonly PILLAGER: EntityType | null;
  static readonly PLAYER: EntityType | null;
  static readonly POLAR_BEAR: EntityType | null;
  static readonly POTION: EntityType | null;
  static readonly PUFFERFISH: EntityType | null;
  static readonly RABBIT: EntityType | null;
  static readonly RAVAGER: EntityType | null;
  static readonly SALMON: EntityType | null;
  static readonly SHEEP: EntityType | null;
  static readonly SHULKER: EntityType | null;
  static readonly SHULKER_BULLET: EntityType | null;
  static readonly SILVERFISH: EntityType | null;
  static readonly SKELETON: EntityType | null;
  static readonly SKELETON_HORSE: EntityType | null;
  static readonly SLIME: EntityType | null;
  static readonly SMALL_FIREBALL: EntityType | null;
  static readonly SNOW_GOLEM: EntityType | null;
  static readonly SNOWBALL: EntityType | null;
  static readonly SPAWNER_MINECART: EntityType | null;
  static readonly SPECTRAL_ARROW: EntityType | null;
  static readonly SPIDER: EntityType | null;
  static readonly SQUID: EntityType | null;
  static readonly STRAY: EntityType | null;
  static readonly STRIDER: EntityType | null;
  static readonly TNT: EntityType | null;
  static readonly TNT_MINECART: EntityType | null;
  static readonly TRADER_LLAMA: EntityType | null;
  static readonly TRIDENT: EntityType | null;
  static readonly TROPICAL_FISH: EntityType | null;
  static readonly TURTLE: EntityType | null;
  static readonly VEX: EntityType | null;
  static readonly VILLAGER: EntityType | null;
  static readonly VINDICATOR: EntityType | null;
  static readonly WANDERING_TRADER: EntityType | null;
  static readonly WITCH: EntityType | null;
  static readonly WITHER: EntityType | null;
  static readonly WITHER_SKELETON: EntityType | null;
  static readonly WITHER_SKULL: EntityType | null;
  static readonly WOLF: EntityType | null;
  static readonly ZOGLIN: EntityType | null;
  static readonly ZOMBIE: EntityType | null;
  static readonly ZOMBIE_HORSE: EntityType | null;
  static readonly ZOMBIE_PIGMAN: EntityType | null;
  static readonly ZOMBIE_VILLAGER: EntityType | null;
  static readonly ZOMBIFIED_PIGLIN: EntityType | null;
  /**
   * Gets the {@link EntityType} associated with the given id.
  */
  static get(id: string): EntityType | null;
}

}
declare module 'com.sk89q.worldedit.world.block.FuzzyBlockState' {
import { Property } from 'com.sk89q.worldedit.registry.state';
import { Map } from 'java.util';
import { BlockState, BlockType, FuzzyBlockState } from 'com.sk89q.worldedit.world.block';
/**
 * Builder for FuzzyBlockState.
*/
export class Builder {
  /**
   * The type of the Fuzzy BlockState.
   *
   * @param type The type
   * @return The builder, for chaining
  */
  type(type: BlockType): Builder;
  /**
   * The type of the Fuzzy BlockState.
   *
   * @param state The state
   * @return The builder, for chaining
  */
  type(state: BlockState): Builder;
  /**
   * Adds a property to the fuzzy BlockState.
   *
   * @param property The property
   * @param value The value
   * @param  The property type
   * @return The builder, for chaining
  */
  withProperty<V>(property: Property<V>, value: V): Builder;
  /**
   * Builds a FuzzyBlockState from this builder.
   *
   * @return The fuzzy BlockState
  */
  build(): FuzzyBlockState;
  /**
   * Resets the builder.
   *
   * @return The builder, for chaining
  */
  reset(): Builder;
}

}
declare module 'com.sk89q.worldedit.session.request' {
import { Set, Iterator, List } from 'java.util';
import { Vector3, BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { ThreadLocal } from 'java.lang';
import { Region } from 'com.sk89q.worldedit.regions';
import { Location } from 'com.sk89q.worldedit.util';
import { World } from 'com.sk89q.worldedit.world';
import { Operation } from 'com.sk89q.worldedit.function.operation';
import { LocalSession, EditSession } from 'com.sk89q.worldedit';
import { Entity, BaseEntity } from 'com.sk89q.worldedit.entity';
import { BiomeType } from 'com.sk89q.worldedit.world.biome';
import { Extent } from 'com.sk89q.worldedit.extent';
import { BlockState, BaseBlock } from 'com.sk89q.worldedit.world.block';
export class RequestExtent extends Extent {
  /**
   * Get the minimum point in the extent.
   *
   * If the extent is unbounded, then a large (negative) value may
   * be returned.
   *
   * @return the minimum point
  */
  getMinimumPoint(): BlockVector3;
  /**
   * Get the maximum point in the extent.
   *
   * If the extent is unbounded, then a large (positive) value may
   * be returned.
   *
   * @return the maximum point
  */
  getMaximumPoint(): BlockVector3;
  /**
   * Get a list of all entities within the given region.
   *
   * If the extent is not wholly loaded (i.e. a world being simulated in the
   * game will not have every chunk loaded), then this list may not be
   * incomplete.
   *
   * @param region the region in which entities must be contained
   * @return a list of entities
  */
  getEntities(region: Region): Entity[];
  /**
   * Get a list of all entities.
   *
   * If the extent is not wholly loaded (i.e. a world being simulated in the
   * game will not have every chunk loaded), then this list may not be
   * incomplete.
   *
   * @return a list of entities
  */
  getEntities(): Entity[];
  /**
   * Create an entity at the given location.
   *
   * @param entity the entity
   * @param location the location
   * @return a reference to the created entity, or null if the entity could not be created
  */
  createEntity(location: Location, entity: BaseEntity): Entity | null;
  /**
   * Get a snapshot of the block at the given location.
   *
   * If the given position is out of the bounds of the extent, then the behavior
   * is undefined (an air block could be returned). However, `null`
   * should not be returned.
   *
   * The returned block is immutable and is a snapshot of the block at the time
   * of call. It has no position attached to it, so it could be reused in
   * {@link Pattern}s and so on.
   *
   * @param position position of the block
   * @return the block
  */
  getBlock(position: BlockVector3): BlockState;
  /**
   * Get a immutable snapshot of the block at the given location.
   *
   * @param position position of the block
   * @return the block
  */
  getFullBlock(position: BlockVector3): BaseBlock;
  /**
   * Get the biome at the given location.
   *
   * If there is no biome available, then the ocean biome should be
   * returned.
   *
   * @param position the (x, z) location to check the biome at
   * @return the biome at the location
   * @deprecated Biomes in Minecraft are 3D now, use {@link InputExtent#getBiome(BlockVector3)}
  */
  getBiome(position: BlockVector3): BiomeType;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(position: BlockVector3, block: T): boolean;
  /**
   * Check if this extent fully supports 3D biomes.
   *
   * 
   * If `false`, the extent only visually reads biomes from `y = 0`.
   * The biomes will still be set in 3D, but the client will only see the one at
   * `y = 0`. It is up to the caller to determine if they want to set that
   * biome instead, or simply warn the actor.
   * 
   *
   * @return if the extent fully supports 3D biomes
  */
  fullySupports3DBiomes(): boolean;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector3, biome: BiomeType): boolean;
  /**
   * Return an {@link Operation} that should be called to tie up loose ends
   * (such as to commit changes in a buffer).
   *
   * @return an operation or null if there is none to execute
  */
  commit(): Operation | null;
  /**
   * Get the biome at the given location.
   *
   * If there is no biome available, then the ocean biome should be
   * returned.
   *
   * @param position the (x, z) location to check the biome at
   * @return the biome at the location
   * @deprecated Biomes in Minecraft are 3D now, use {@link InputExtent#getBiome(BlockVector3)}
  */
  getBiome(position: BlockVector2): BiomeType;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector2, biome: BiomeType): boolean;
}
/**
 * Describes the current request using a {@link ThreadLocal}.
*/
export class Request {
  /**
   * Get the request world.
   *
   * @return the world, which may be null
  */
  getWorld(): World | null;
  /**
   * Set the request world.
   *
   * @param world the world, which may be null
  */
  setWorld(world: World | null);
  /**
   * Get the request session.
   *
   * @return the session, which may be null
  */
  getSession(): LocalSession | null;
  /**
   * Get the request session.
   *
   * @param session the session, which may be null
  */
  setSession(session: LocalSession | null);
  /**
   * Get the {@link EditSession}.
   *
   * @return the edit session, which may be null
  */
  getEditSession(): EditSession | null;
  /**
   * Set the {@link EditSession}.
   *
   * @param editSession the edit session, which may be null
  */
  setEditSession(editSession: EditSession | null);
  /**
   * Get the current request, which is specific to the current thread.
   *
   * @return the current request
  */
  static request(): Request;
  /**
   * Reset the current request and clear all fields.
  */
  static reset(): void;
  /**
   * Check if the current request object is still valid. Invalid requests may contain outdated values.
   *
   * @return true if the request is valid
  */
  isValid(): boolean;
}
/**
 * A region that mirrors the current selection according to the current
 * {@link LocalSession} and {@link World} set on the current
 * {@link Request}.
 *
 * If a selection cannot be taken, then the selection will be assumed to be
 * that of a {@link NullRegion}.
*/
export class RequestSelection extends Region {
  /**
   * Get the lower point of a region.
   *
   * @return min. point
  */
  getMinimumPoint(): BlockVector3;
  /**
   * Get the upper point of a region.
   *
   * @return max. point
  */
  getMaximumPoint(): BlockVector3;
  /**
   * Get the center point of a region.
   * Note: Coordinates will not be integers
   * if the corresponding lengths are even.
   *
   * @return center point
  */
  getCenter(): Vector3;
  /**
   * Get the number of blocks in the region.
   *
   * @return number of blocks
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  getVolume(): number;
  /**
   * Get X-size.
   *
   * @return width
  */
  getWidth(): number;
  /**
   * Get Y-size.
   *
   * @return height
  */
  getHeight(): number;
  /**
   * Get Z-size.
   *
   * @return length
  */
  getLength(): number;
  /**
   * Expand the region.
   *
   * @param changes array/arguments with multiple related changes
   * @throws RegionOperationException if the operation cannot be performed
  */
  expand(...changes: BlockVector3[]): void;
  /**
   * Contract the region.
   *
   * @param changes array/arguments with multiple related changes
   * @throws RegionOperationException if the operation cannot be performed
  */
  contract(...changes: BlockVector3[]): void;
  /**
   * Shift the region.
   *
   * @param change the change
   * @throws RegionOperationException if the operation cannot be performed
  */
  shift(change: BlockVector3): void;
  /**
   * Returns true based on whether the region contains the point.
   *
   * @param position the position
   * @return true if contained
  */
  contains(position: BlockVector3): boolean;
  /**
   * Get a list of chunks.
   *
   * @return a list of chunk coordinates
  */
  getChunks(): Set<BlockVector2>;
  /**
   * Return a list of 16*16*16 chunks in a region.
   *
   * @return the chunk cubes this region overlaps with
  */
  getChunkCubes(): Set<BlockVector3>;
  /**
   * Sets the world that the selection is in.
   *
   * @return the world, or null
  */
  getWorld(): World;
  /**
   * Sets the world that the selection is in.
   *
   * @param world the world, which may be null
  */
  setWorld(world: World);
  /**
   * Make a clone of the region.
   *
   * @return a cloned version
  */
  clone(): Region;
  /**
   * Polygonizes a cross-section or a 2D projection of the region orthogonal to the Y axis.
   *
   * @param maxPoints maximum number of points to generate. -1 for no limit.
   * @return the points.
  */
  polygonize(maxPoints: number): BlockVector2[];
  iterator(): Iterator<BlockVector3>;
}

}
declare module 'com.sk89q.worldedit.world.chunk' {
import { Tag, CompoundTag } from 'com.sk89q.jnbt';
import { Map } from 'java.util';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { BlockState, BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * The chunk format for Minecraft 1.13 to 1.15
*/
export class AnvilChunk13 extends Chunk {
  /**
   * Construct the chunk with a compound tag.
   *
   * @param tag the tag to read
   * @throws DataException on a data error
  */
  constructor(tag: CompoundTag);
  /**
   * Get a block.
   *
   * @param position the position of the block
   * @return block the block
   * @throws DataException thrown on data error
  */
  getBlock(position: BlockVector3): BaseBlock;
}
/**
 * The chunk format for Minecraft 1.16 and newer
*/
export class AnvilChunk16 extends AnvilChunk13 {
  /**
   * Construct the chunk with a compound tag.
   *
   * @param tag the tag to read
   * @throws DataException on a data error
  */
  constructor(tag: CompoundTag);
}
/**
 * Represents an Alpha chunk.
*/
export class OldChunk extends Chunk {
  /**
   * Construct the chunk with a compound tag.
   *
   * @param tag the tag
   * @throws DataException if there is an error getting the chunk data
  */
  constructor(tag: CompoundTag);
  /**
   * Get a block.
   *
   * @param position the position of the block
   * @return block the block
   * @throws DataException thrown on data error
  */
  getBlock(position: BlockVector3): BaseBlock;
}
export class AnvilChunk extends Chunk {
  /**
   * Construct the chunk with a compound tag.
   *
   * @param tag the tag to read
   * @throws DataException on a data error
  */
  constructor(tag: CompoundTag);
  /**
   * Get a block.
   *
   * @param position the position of the block
   * @return block the block
   * @throws DataException thrown on data error
  */
  getBlock(position: BlockVector3): BaseBlock;
}
export class PackedIntArrayReader {
  constructor(data: number[]);
  get(index: number): number;
}
/**
 * A 16 by 16 block chunk.
*/
export class Chunk {
  /**
   * Get a block.
   *
   * @param position the position of the block
   * @return block the block
   * @throws DataException thrown on data error
  */
  getBlock(position: BlockVector3): BaseBlock;
}

}
declare module 'com.sk89q.worldedit.regions.shape' {
import { BitSet } from 'java.util';
import { Vector3, BlockVector3 } from 'com.sk89q.worldedit.math';
import { Region } from 'com.sk89q.worldedit.regions';
import { EditSession } from 'com.sk89q.worldedit';
import { Pattern } from 'com.sk89q.worldedit.function.pattern';
import { ExpressionEnvironment } from 'com.sk89q.worldedit.internal.expression';
import { BiomeType } from 'com.sk89q.worldedit.world.biome';
import { Extent } from 'com.sk89q.worldedit.extent';
/**
 * Generates solid and hollow shapes according to materials returned by the
 * {@link #getBiome} method.
*/
export class ArbitraryBiomeShape {
  constructor(extent: Region);
  /**
   * Generates the shape.
   *
   * @param editSession The EditSession to use.
   * @param baseBiome The default biome type.
   * @param hollow Specifies whether to generate a hollow shape.
   * @return number of affected blocks.
  */
  generate(editSession: EditSession, baseBiome: BiomeType, hollow: boolean): number;
}
/**
 * Generates solid and hollow shapes according to materials returned by the
 * {@link #getMaterial} method.
*/
export class RegionShape extends ArbitraryShape {
  constructor(extent: Region);
}
export class WorldEditExpressionEnvironment extends ExpressionEnvironment {
  constructor(extent: Extent, unit: Vector3, zero: Vector3);
  toWorld(x: number, y: number, z: number): BlockVector3;
  toWorldRel(x: number, y: number, z: number): Vector3;
  getBlockType(x: number, y: number, z: number): number;
  getBlockData(x: number, y: number, z: number): number;
  getBlockTypeAbs(x: number, y: number, z: number): number;
  getBlockDataAbs(x: number, y: number, z: number): number;
  getBlockTypeRel(x: number, y: number, z: number): number;
  getBlockDataRel(x: number, y: number, z: number): number;
  setCurrentBlock(currentBlock: Vector3);
}
/**
 * Generates solid and hollow shapes according to materials returned by the
 * {@link #getMaterial} method.
*/
export class ArbitraryShape {
  constructor(extent: Region);
  /**
   * Generates the shape.
   *
   * @param editSession The EditSession to use.
   * @param pattern The pattern to generate default materials from.
   * @param hollow Specifies whether to generate a hollow shape.
   * @return number of affected blocks.
   * @throws MaxChangedBlocksException if the maximum blocks changed is exceeded
  */
  generate(editSession: EditSession, pattern: Pattern, hollow: boolean): number;
}

}
declare module 'com.sk89q.worldedit.function.factory.Deform' {
import { Enum } from 'java.lang';
export class Mode extends Enum<Mode> {
  static readonly RAW_COORD: Mode;
  static readonly OFFSET: Mode;
  static readonly UNIT_CUBE: Mode;
  static valueOf(name: string): Mode;
  static values(): Mode[];
}

}
declare module 'com.sk89q.worldedit.regions.selector' {
import { List } from 'java.util';
import { Enum, Class } from 'java.lang';
import { NumberFormat } from 'java.text';
import { Vector2, Vector3, BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { World } from 'com.sk89q.worldedit.world';
import { RegionSelector, Polygonal2DRegion, ConvexPolyhedralRegion, CylinderRegion, Region, CuboidRegion, EllipsoidRegion } from 'com.sk89q.worldedit.regions';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { CUIRegion } from 'com.sk89q.worldedit.internal.cui';
import { SelectorLimits } from 'com.sk89q.worldedit.regions.selector.limit';
import { LocalSession } from 'com.sk89q.worldedit';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
/**
 * Creates a `CylinderRegionSelector` from a user's selections.
*/
export class CylinderRegionSelector extends RegionSelector {
  /**
   * Create a new region selector with a `null` world.
  */
  constructor();
  /**
   * Create a new region selector.
   *
   * @param world the world, which may be `null`
  */
  constructor(world: World | null);
  /**
   * Create a new selector from the given one.
   *
   * @param oldSelector the old selector
  */
  constructor(oldSelector: RegionSelector);
  /**
   * Create a new selector.
   *
   * @param world the world
   * @param center the center
   * @param radius the radius
   * @param minY the minimum Y
   * @param maxY the maximum Y
  */
  constructor(world: World | null, center: BlockVector2, radius: Vector2, minY: number, maxY: number);
  /**
   * Get the world for the region selector.
   *
   * @return a world, which may be null
  */
  getWorld(): World | null;
  /**
   * Set the world for the region selector.
   *
   * @param world the world, which may be null
  */
  setWorld(world: World | null);
  /**
   * Called when the first point is selected.
   *
   * @param position the position
   * @return true if something changed
  */
  selectPrimary(position: BlockVector3, limits: SelectorLimits): boolean;
  /**
   * Called when the second point is selected.
   *
   * @param position the position
   * @return true if something changed
  */
  selectSecondary(position: BlockVector3, limits: SelectorLimits): boolean;
  /**
   * Tell the player information about his/her primary selection.
   *
   * @param actor the actor
   * @param session the session
   * @param position position
  */
  explainPrimarySelection(player: Actor, session: LocalSession, pos: BlockVector3): void;
  /**
   * Tell the player information about his/her secondary selection.
   *
   * @param actor the actor
   * @param session the session
   * @param position position
  */
  explainSecondarySelection(player: Actor, session: LocalSession, pos: BlockVector3): void;
  /**
   * Tell the player information about the region's changes. This may resend
   * all the defining region information if needed.
   *
   * @param actor the actor
   * @param session the session
  */
  explainRegionAdjust(player: Actor, session: LocalSession): void;
  /**
   * Get the primary position.
   *
   * @return the primary position
   * @throws IncompleteRegionException thrown if a region has not been fully defined
  */
  getPrimaryPosition(): BlockVector3;
  /**
   * Get the selection.
   *
   * @return the created region
   * @throws IncompleteRegionException thrown if a region has not been fully defined
  */
  getRegion(): CylinderRegion;
  /**
   * Get the region even if it's not fully defined.
   *
   * @return an incomplete region object that is incomplete
  */
  getIncompleteRegion(): CylinderRegion;
  /**
   * Returns whether the region has been fully defined.
   *
   * @return true if a selection is available
  */
  isDefined(): boolean;
  /**
   * Update the selector with changes to the region.
  */
  learnChanges(): void;
  /**
   * Clear the selection.
  */
  clear(): void;
  /**
   * Get a lowercase name of this region selector type.
   *
   * @return a lower case name of the type
  */
  getTypeName(): string;
  /**
   * Get lines of information about the selection.
   *
   * @return a list of lines describing the region.
  */
  getSelectionInfoLines(): Component[];
  /**
   * Get the number of blocks inside the region.
   *
   * @return number of blocks, or -1 if undefined
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  getVolume(): number;
  /**
   * Sends CUI events describing the region for
   * versions of CUI equal to or greater than the
   * value supplied by getProtocolVersion().
   *
  */
  describeCUI(session: LocalSession, player: Actor): void;
  /**
   * Sends CUI events describing the region for
   * versions of CUI smaller than the value
   * supplied by getProtocolVersion().
   *
  */
  describeLegacyCUI(session: LocalSession, player: Actor): void;
  /**
   * Returns the CUI version that is required to send
   * up-to-date data. If the CUI version is smaller than
   * this value, the legacy methods will be called.
   *
   * @return the protocol version
  */
  getProtocolVersion(): number;
  /**
   * Returns the type ID to send to CUI in the selection event.
   *
   * @return the type ID
  */
  getTypeID(): string;
  /**
   * Returns the type ID to send to CUI in the selection
   * event if the CUI is in legacy mode.
   *
   * @return the legacy type ID
  */
  getLegacyTypeID(): string;
}
export interface CylinderRegionSelector extends RegionSelector, CUIRegion {}
/**
 * Creates a `CuboidRegion` from a user's selections by expanding
 * the region on every right click.
*/
export class ExtendingCuboidRegionSelector extends CuboidRegionSelector {
  /**
   * Create a new selector with a `null` world.
  */
  constructor();
  /**
   * Create a new selector.
   *
   * @param world the world, which may be `null`
  */
  constructor(world: World | null);
  /**
   * Create a new selector from another one.
   *
   * @param oldSelector the other selector
  */
  constructor(oldSelector: RegionSelector);
  /**
   * Create a new selector.
   *
   * @param world the world
   * @param position1 the first position
   * @param position2 the second position
  */
  constructor(world: World | null, position1: BlockVector3, position2: BlockVector3);
  selectPrimary(position: BlockVector3, limits: SelectorLimits): boolean;
  selectSecondary(position: BlockVector3, limits: SelectorLimits): boolean;
  explainPrimarySelection(player: Actor, session: LocalSession, pos: BlockVector3): void;
  explainSecondarySelection(player: Actor, session: LocalSession, pos: BlockVector3): void;
}
/**
 * Creates a `Polygonal2DRegion` from a user's selections.
*/
export class Polygonal2DRegionSelector extends RegionSelector {
  /**
   * Create a new selector with a `null` world.
  */
  constructor();
  /**
   * Create a new selector with the given world.
   *
   * @param world the world
  */
  constructor(world: World | null);
  /**
   * Create a new selector from another one.
   *
   * @param oldSelector the old selector
  */
  constructor(oldSelector: RegionSelector);
  /**
   * Create a new selector.
   *
   * @param world the world
   * @param points a list of points
   * @param minY the minimum Y
   * @param maxY the maximum Y
  */
  constructor(world: World | null, points: BlockVector2[], minY: number, maxY: number);
  /**
   * Get the world for the region selector.
   *
   * @return a world, which may be null
  */
  getWorld(): World | null;
  /**
   * Set the world for the region selector.
   *
   * @param world the world, which may be null
  */
  setWorld(world: World | null);
  /**
   * Called when the first point is selected.
   *
   * @param position the position
   * @return true if something changed
  */
  selectPrimary(position: BlockVector3, limits: SelectorLimits): boolean;
  /**
   * Called when the second point is selected.
   *
   * @param position the position
   * @return true if something changed
  */
  selectSecondary(position: BlockVector3, limits: SelectorLimits): boolean;
  /**
   * Tell the player information about his/her primary selection.
   *
   * @param actor the actor
   * @param session the session
   * @param position position
  */
  explainPrimarySelection(player: Actor, session: LocalSession, pos: BlockVector3): void;
  /**
   * Tell the player information about his/her secondary selection.
   *
   * @param actor the actor
   * @param session the session
   * @param position position
  */
  explainSecondarySelection(player: Actor, session: LocalSession, pos: BlockVector3): void;
  /**
   * Tell the player information about the region's changes. This may resend
   * all the defining region information if needed.
   *
   * @param actor the actor
   * @param session the session
  */
  explainRegionAdjust(player: Actor, session: LocalSession): void;
  /**
   * Get the primary position.
   *
   * @return the primary position
   * @throws IncompleteRegionException thrown if a region has not been fully defined
  */
  getPrimaryPosition(): BlockVector3;
  /**
   * Get the selection.
   *
   * @return the created region
   * @throws IncompleteRegionException thrown if a region has not been fully defined
  */
  getRegion(): Polygonal2DRegion;
  /**
   * Get the region even if it's not fully defined.
   *
   * @return an incomplete region object that is incomplete
  */
  getIncompleteRegion(): Polygonal2DRegion;
  /**
   * Returns whether the region has been fully defined.
   *
   * @return true if a selection is available
  */
  isDefined(): boolean;
  /**
   * Update the selector with changes to the region.
  */
  learnChanges(): void;
  /**
   * Clear the selection.
  */
  clear(): void;
  /**
   * Get a lowercase name of this region selector type.
   *
   * @return a lower case name of the type
  */
  getTypeName(): string;
  /**
   * Get lines of information about the selection.
   *
   * @return a list of lines describing the region.
  */
  getSelectionInfoLines(): Component[];
  /**
   * Get the number of blocks inside the region.
   *
   * @return number of blocks, or -1 if undefined
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  getVolume(): number;
  /**
   * Get the number of points.
   *
   * @return the number of points
  */
  getPointCount(): number;
  /**
   * Sends CUI events describing the region for
   * versions of CUI equal to or greater than the
   * value supplied by getProtocolVersion().
   *
  */
  describeCUI(session: LocalSession, player: Actor): void;
  /**
   * Sends CUI events describing the region for
   * versions of CUI smaller than the value
   * supplied by getProtocolVersion().
   *
  */
  describeLegacyCUI(session: LocalSession, player: Actor): void;
  /**
   * Returns the CUI version that is required to send
   * up-to-date data. If the CUI version is smaller than
   * this value, the legacy methods will be called.
   *
   * @return the protocol version
  */
  getProtocolVersion(): number;
  /**
   * Returns the type ID to send to CUI in the selection event.
   *
   * @return the type ID
  */
  getTypeID(): string;
  /**
   * Returns the type ID to send to CUI in the selection
   * event if the CUI is in legacy mode.
   *
   * @return the legacy type ID
  */
  getLegacyTypeID(): string;
}
export interface Polygonal2DRegionSelector extends RegionSelector, CUIRegion {}
/**
 * Creates a `EllipsoidRegionSelector` from a user's selections.
*/
export class EllipsoidRegionSelector extends RegionSelector {
  /**
   * Create a new selector with a `null` world.
  */
  constructor();
  /**
   * Create a new selector.
   *
   * @param world the world, which may be `null`
  */
  constructor(world: World | null);
  /**
   * Create a new selector from the given selector.
   *
   * @param oldSelector the old selector
  */
  constructor(oldSelector: RegionSelector);
  /**
   * Create a new selector.
   *
   * @param world the world
   * @param center the center
   * @param radius the radius
  */
  constructor(world: World | null, center: BlockVector3, radius: Vector3);
  /**
   * Get the world for the region selector.
   *
   * @return a world, which may be null
  */
  getWorld(): World | null;
  /**
   * Set the world for the region selector.
   *
   * @param world the world, which may be null
  */
  setWorld(world: World | null);
  /**
   * Called when the first point is selected.
   *
   * @param position the position
   * @return true if something changed
  */
  selectPrimary(position: BlockVector3, limits: SelectorLimits): boolean;
  /**
   * Called when the second point is selected.
   *
   * @param position the position
   * @return true if something changed
  */
  selectSecondary(position: BlockVector3, limits: SelectorLimits): boolean;
  /**
   * Tell the player information about his/her primary selection.
   *
   * @param actor the actor
   * @param session the session
   * @param position position
  */
  explainPrimarySelection(player: Actor, session: LocalSession, pos: BlockVector3): void;
  /**
   * Tell the player information about his/her secondary selection.
   *
   * @param actor the actor
   * @param session the session
   * @param position position
  */
  explainSecondarySelection(player: Actor, session: LocalSession, pos: BlockVector3): void;
  /**
   * Tell the player information about the region's changes. This may resend
   * all the defining region information if needed.
   *
   * @param actor the actor
   * @param session the session
  */
  explainRegionAdjust(player: Actor, session: LocalSession): void;
  /**
   * Returns whether the region has been fully defined.
   *
   * @return true if a selection is available
  */
  isDefined(): boolean;
  /**
   * Get the selection.
   *
   * @return the created region
   * @throws IncompleteRegionException thrown if a region has not been fully defined
  */
  getRegion(): EllipsoidRegion;
  /**
   * Get the region even if it's not fully defined.
   *
   * @return an incomplete region object that is incomplete
  */
  getIncompleteRegion(): EllipsoidRegion;
  /**
   * Update the selector with changes to the region.
  */
  learnChanges(): void;
  /**
   * Clear the selection.
  */
  clear(): void;
  /**
   * Get a lowercase name of this region selector type.
   *
   * @return a lower case name of the type
  */
  getTypeName(): string;
  /**
   * Get lines of information about the selection.
   *
   * @return a list of lines describing the region.
  */
  getSelectionInfoLines(): Component[];
  /**
   * Get the number of blocks inside the region.
   *
   * @return number of blocks, or -1 if undefined
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  getVolume(): number;
  /**
   * Sends CUI events describing the region for
   * versions of CUI equal to or greater than the
   * value supplied by getProtocolVersion().
   *
  */
  describeCUI(session: LocalSession, player: Actor): void;
  /**
   * Sends CUI events describing the region for
   * versions of CUI smaller than the value
   * supplied by getProtocolVersion().
   *
  */
  describeLegacyCUI(session: LocalSession, player: Actor): void;
  /**
   * Returns the type ID to send to CUI in the selection
   * event if the CUI is in legacy mode.
   *
   * @return the legacy type ID
  */
  getLegacyTypeID(): string;
  /**
   * Returns the CUI version that is required to send
   * up-to-date data. If the CUI version is smaller than
   * this value, the legacy methods will be called.
   *
   * @return the protocol version
  */
  getProtocolVersion(): number;
  /**
   * Returns the type ID to send to CUI in the selection event.
   *
   * @return the type ID
  */
  getTypeID(): string;
  /**
   * Get the primary position.
   *
   * @return the primary position
   * @throws IncompleteRegionException thrown if a region has not been fully defined
  */
  getPrimaryPosition(): BlockVector3;
}
export interface EllipsoidRegionSelector extends RegionSelector, CUIRegion {}
/**
 * Creates a `ConvexPolyhedralRegion` from a user's selections.
*/
export class ConvexPolyhedralRegionSelector extends RegionSelector {
  /**
   * Create a new selector with a `null` world.
  */
  constructor();
  /**
   * Create a new selector.
   *
   * @param world the world, which may be `null`
  */
  constructor(world: World | null);
  /**
   * Create a new selector.
   *
   * @param oldSelector the old selector
  */
  constructor(oldSelector: RegionSelector);
  /**
   * Get the world for the region selector.
   *
   * @return a world, which may be null
  */
  getWorld(): World | null;
  /**
   * Set the world for the region selector.
   *
   * @param world the world, which may be null
  */
  setWorld(world: World | null);
  /**
   * Called when the first point is selected.
   *
   * @param position the position
   * @return true if something changed
  */
  selectPrimary(position: BlockVector3, limits: SelectorLimits): boolean;
  /**
   * Called when the second point is selected.
   *
   * @param position the position
   * @return true if something changed
  */
  selectSecondary(position: BlockVector3, limits: SelectorLimits): boolean;
  /**
   * Get the primary position.
   *
   * @return the primary position
   * @throws IncompleteRegionException thrown if a region has not been fully defined
  */
  getPrimaryPosition(): BlockVector3;
  /**
   * Get the selection.
   *
   * @return the created region
   * @throws IncompleteRegionException thrown if a region has not been fully defined
  */
  getRegion(): Region;
  /**
   * Get the region even if it's not fully defined.
   *
   * @return an incomplete region object that is incomplete
  */
  getIncompleteRegion(): Region;
  /**
   * Returns whether the region has been fully defined.
   *
   * @return true if a selection is available
  */
  isDefined(): boolean;
  /**
   * Get the number of blocks inside the region.
   *
   * @return number of blocks, or -1 if undefined
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  getVolume(): number;
  /**
   * Update the selector with changes to the region.
  */
  learnChanges(): void;
  /**
   * Clear the selection.
  */
  clear(): void;
  /**
   * Get a lowercase name of this region selector type.
   *
   * @return a lower case name of the type
  */
  getTypeName(): string;
  /**
   * Get lines of information about the selection.
   *
   * @return a list of lines describing the region.
  */
  getSelectionInfoLines(): Component[];
  /**
   * Tell the player information about his/her primary selection.
   *
   * @param actor the actor
   * @param session the session
   * @param position position
  */
  explainPrimarySelection(player: Actor, session: LocalSession, pos: BlockVector3): void;
  /**
   * Tell the player information about his/her secondary selection.
   *
   * @param actor the actor
   * @param session the session
   * @param position position
  */
  explainSecondarySelection(player: Actor, session: LocalSession, pos: BlockVector3): void;
  /**
   * Tell the player information about the region's changes. This may resend
   * all the defining region information if needed.
   *
   * @param actor the actor
   * @param session the session
  */
  explainRegionAdjust(player: Actor, session: LocalSession): void;
  /**
   * Returns the CUI version that is required to send
   * up-to-date data. If the CUI version is smaller than
   * this value, the legacy methods will be called.
   *
   * @return the protocol version
  */
  getProtocolVersion(): number;
  /**
   * Returns the type ID to send to CUI in the selection event.
   *
   * @return the type ID
  */
  getTypeID(): string;
  /**
   * Sends CUI events describing the region for
   * versions of CUI equal to or greater than the
   * value supplied by getProtocolVersion().
   *
  */
  describeCUI(session: LocalSession, player: Actor): void;
  /**
   * Returns the type ID to send to CUI in the selection
   * event if the CUI is in legacy mode.
   *
   * @return the legacy type ID
  */
  getLegacyTypeID(): string;
  /**
   * Sends CUI events describing the region for
   * versions of CUI smaller than the value
   * supplied by getProtocolVersion().
   *
  */
  describeLegacyCUI(session: LocalSession, player: Actor): void;
}
export interface ConvexPolyhedralRegionSelector extends RegionSelector, CUIRegion {}
/**
 * Creates a `SphereRegion` from a user's selections.
*/
export class SphereRegionSelector extends EllipsoidRegionSelector {
  /**
   * Create a new selector with a `null world`.
  */
  constructor();
  /**
   * Create a new selector.
   *
   * @param world the world, which may be `null`
  */
  constructor(world: World | null);
  /**
   * Create a new selector from another one.
   *
   * @param oldSelector the old selector
  */
  constructor(oldSelector: RegionSelector);
  /**
   * Create a new selector.
   *
   * @param world the world
   * @param center the center position
   * @param radius the radius
  */
  constructor(world: World | null, center: BlockVector3, radius: number);
  selectSecondary(position: BlockVector3, limits: SelectorLimits): boolean;
  explainSecondarySelection(player: Actor, session: LocalSession, pos: BlockVector3): void;
  getTypeName(): string;
}
/**
 * Creates a `CuboidRegion` from a user's selections.
*/
export class CuboidRegionSelector extends RegionSelector {
  /**
   * Create a new region selector with a `null` world.
  */
  constructor();
  /**
   * Create a new region selector.
   *
   * @param world the world, which may be `null`
  */
  constructor(world: World | null);
  /**
   * Create a copy of another selector.
   *
   * @param oldSelector another selector
  */
  constructor(oldSelector: RegionSelector);
  /**
   * Create a new region selector with the given two positions.
   *
   * @param world the world
   * @param position1 position 1
   * @param position2 position 2
  */
  constructor(world: World | null, position1: BlockVector3, position2: BlockVector3);
  /**
   * Get the world for the region selector.
   *
   * @return a world, which may be null
  */
  getWorld(): World | null;
  /**
   * Set the world for the region selector.
   *
   * @param world the world, which may be null
  */
  setWorld(world: World | null);
  /**
   * Called when the first point is selected.
   *
   * @param position the position
   * @return true if something changed
  */
  selectPrimary(position: BlockVector3, limits: SelectorLimits): boolean;
  /**
   * Called when the second point is selected.
   *
   * @param position the position
   * @return true if something changed
  */
  selectSecondary(position: BlockVector3, limits: SelectorLimits): boolean;
  /**
   * Tell the player information about his/her primary selection.
   *
   * @param actor the actor
   * @param session the session
   * @param position position
  */
  explainPrimarySelection(player: Actor, session: LocalSession, pos: BlockVector3): void;
  /**
   * Tell the player information about his/her secondary selection.
   *
   * @param actor the actor
   * @param session the session
   * @param position position
  */
  explainSecondarySelection(player: Actor, session: LocalSession, pos: BlockVector3): void;
  /**
   * Tell the player information about the region's changes. This may resend
   * all the defining region information if needed.
   *
   * @param actor the actor
   * @param session the session
  */
  explainRegionAdjust(player: Actor, session: LocalSession): void;
  /**
   * Get the primary position.
   *
   * @return the primary position
   * @throws IncompleteRegionException thrown if a region has not been fully defined
  */
  getPrimaryPosition(): BlockVector3;
  /**
   * Returns whether the region has been fully defined.
   *
   * @return true if a selection is available
  */
  isDefined(): boolean;
  /**
   * Get the selection.
   *
   * @return the created region
   * @throws IncompleteRegionException thrown if a region has not been fully defined
  */
  getRegion(): CuboidRegion;
  /**
   * Get the region even if it's not fully defined.
   *
   * @return an incomplete region object that is incomplete
  */
  getIncompleteRegion(): CuboidRegion;
  /**
   * Update the selector with changes to the region.
  */
  learnChanges(): void;
  /**
   * Clear the selection.
  */
  clear(): void;
  /**
   * Get a lowercase name of this region selector type.
   *
   * @return a lower case name of the type
  */
  getTypeName(): string;
  /**
   * Get lines of information about the selection.
   *
   * @return a list of lines describing the region.
  */
  getSelectionInfoLines(): Component[];
  /**
   * Get the number of blocks inside the region.
   *
   * @return number of blocks, or -1 if undefined
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  getVolume(): number;
  /**
   * Sends CUI events describing the region for
   * versions of CUI equal to or greater than the
   * value supplied by getProtocolVersion().
   *
  */
  describeCUI(session: LocalSession, player: Actor): void;
  /**
   * Sends CUI events describing the region for
   * versions of CUI smaller than the value
   * supplied by getProtocolVersion().
   *
  */
  describeLegacyCUI(session: LocalSession, player: Actor): void;
  /**
   * Returns the CUI version that is required to send
   * up-to-date data. If the CUI version is smaller than
   * this value, the legacy methods will be called.
   *
   * @return the protocol version
  */
  getProtocolVersion(): number;
  /**
   * Returns the type ID to send to CUI in the selection event.
   *
   * @return the type ID
  */
  getTypeID(): string;
  /**
   * Returns the type ID to send to CUI in the selection
   * event if the CUI is in legacy mode.
   *
   * @return the legacy type ID
  */
  getLegacyTypeID(): string;
}
export interface CuboidRegionSelector extends RegionSelector, CUIRegion {}
/**
 * An enum of default region selector types.
*/
export class RegionSelectorType extends Enum<RegionSelectorType> {
  static readonly CUBOID: RegionSelectorType;
  static readonly EXTENDING_CUBOID: RegionSelectorType;
  static readonly CYLINDER: RegionSelectorType;
  static readonly SPHERE: RegionSelectorType;
  static readonly ELLIPSOID: RegionSelectorType;
  static readonly POLYGON: RegionSelectorType;
  static readonly CONVEX_POLYHEDRON: RegionSelectorType;
  static valueOf(name: string): RegionSelectorType;
  static values(): RegionSelectorType[];
  /**
   * Get the selector class.
   *
   * @return a selector class
  */
  getSelectorClass(): Class<RegionSelector>;
  /**
   * Create a new selector instance.
   *
   * @return a selector
  */
  createSelector(): RegionSelector;
}

}
declare module 'com.sk89q.worldedit.world.RegenOptions' {
import { RegenOptions } from 'com.sk89q.worldedit.world';
export class Builder {
  /**
   * Sets the seed to regenerate with. Defaults to `null`.
   *
   * 
   * Use `null` to use the world's current seed.
   * 
   *
   * @param seed the seed to regenerate with
   * @return this builder
  */
  seed(seed: number | null): Builder;
  /**
   * Turn on or off applying the biomes from the regenerated chunk. Defaults to `false`.
   *
   * @param regenBiomes `true` to apply biomes
   * @return this builder
  */
  regenBiomes(regenBiomes: boolean): Builder;
  /**
   * Build the options object.
   *
   * @return the options object
  */
  build(): RegenOptions;
}

}
declare module 'com.sk89q.worldedit.regions.iterator' {
import { Iterator } from 'java.util';
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { FlatRegion, Region } from 'com.sk89q.worldedit.regions';
export class RegionIterator extends Iterator<BlockVector3> {
  constructor(region: Region);
  hasNext(): boolean;
  next(): BlockVector3;
  remove(): void;
}
export class FlatRegion3DIterator extends Iterator<BlockVector3> {
  constructor(region: FlatRegion, flatIterator: Iterator<BlockVector2>);
  constructor(region: FlatRegion);
  hasNext(): boolean;
  next(): BlockVector3;
  remove(): void;
}
export class FlatRegionIterator extends Iterator<BlockVector2> {
  constructor(region: Region);
  hasNext(): boolean;
  next(): BlockVector2;
}

}
declare module 'com.sk89q.worldedit.extent.reorder.MultiStageReorder' {
import { Enum } from 'java.lang';
export class PlacementPriority extends Enum<PlacementPriority> {
  static readonly CLEAR_FINAL: PlacementPriority;
  static readonly CLEAR_LAST: PlacementPriority;
  static readonly CLEAR_LATE: PlacementPriority;
  static readonly FIRST: PlacementPriority;
  static readonly LATE: PlacementPriority;
  static readonly LAST: PlacementPriority;
  static readonly FINAL: PlacementPriority;
  static valueOf(name: string): PlacementPriority;
  static values(): PlacementPriority[];
}

}
declare module 'com.sk89q.worldedit.event' {
/**
 * An abstract implementation of {@link Cancellable} that has all
 * of {@link Cancellable}'s methods implemented.
*/
export class AbstractCancellable extends Cancellable {
  /**
   * Returns whether the event has been cancelled.
   *
   * @return true if cancelled
  */
  isCancelled(): boolean;
  /**
   * Set whether the event has been cancelled.
   *
   * @param cancelled true if cancelled
  */
  setCancelled(cancelled: boolean): void;
}
/**
 * An abstract base class for all WorldEdit events.
*/
export class Event {

}
/**
 * Marks an event that has a cancellable state. The meaning of cancellation
 * depends on the event.
*/
export class Cancellable {
  /**
   * Returns whether the event has been cancelled.
   *
   * @return true if cancelled
  */
  isCancelled(): boolean;
  /**
   * Set whether the event has been cancelled.
   *
   * @param cancelled true if cancelled
  */
  setCancelled(cancelled: boolean): void;
}

}
declare module 'com.sk89q.worldedit.util.eventbus' {
import { Method } from 'java.lang.reflect';
import { Comparable, Class } from 'java.lang';
import { Priority } from 'com.sk89q.worldedit.util.eventbus.EventHandler';
import { MethodHandle } from 'java.lang.invoke';
import { ReadWriteLock } from 'java.util.concurrent.locks';
/**
 * Dispatches events to listeners, and provides ways for listeners to register
 * themselves.
 *
 * This class is based on Guava's {@link EventBus} but priority is supported
 * and events are dispatched at the time of call, rather than being queued up.
 * This does allow dispatching during an in-progress dispatch.
*/
export class EventBus {
  /**
   * Registers the given handler for the given class to receive events.
   *
   * @param clazz the event class to register
   * @param handler the handler to register
  */
  subscribe(clazz: Class<any>, handler: EventHandler): void;
  /**
   * Unregisters the given handler for the given class.
   *
   * @param clazz the class
   * @param handler the handler
  */
  unsubscribe(clazz: Class<any>, handler: EventHandler): void;
  /**
   * Registers all handler methods on `object` to receive events.
   * Handler methods are selected and classified using this EventBus's
   * {@link SubscriberFindingStrategy}; the default strategy is the
   * {@link AnnotatedSubscriberFinder}.
   *
   * @param object object whose handler methods should be registered.
  */
  register(object: any): void;
  /**
   * Unregisters all handler methods on a registered `object`.
   *
   * @param object  object whose handler methods should be unregistered.
   * @throws IllegalArgumentException if the object was not previously registered.
  */
  unregister(object: any): void;
  /**
   * Posts an event to all registered handlers.  This method will return
   * successfully after the event has been posted to all handlers, and
   * regardless of any exceptions thrown by handlers.
   *
   * @param event  event to post.
  */
  post(event: any): void;
}
/**
 * Used to mark methods as event handlers.
*/
export class Subscribe {

}
/**
 * Invokes a {@link Method} to dispatch an event.
*/
export class MethodEventHandler extends EventHandler {
  /**
   * Create a new event handler.
   *
   * @param priority the priority
   * @param method the method
  */
  constructor(priority: Priority, object: any, method: Method);
  /**
   * Get the method.
   *
   * @return the method
  */
  getMethod(): Method;
  dispatch(event: any): void;
  equals(o: any): boolean;
  hashCode(): number;
}
export class MethodHandleEventHandler extends EventHandler {
  dispatch(event: any): void;
  hashCode(): number;
  equals(o: any): boolean;
}
/**
 * Event handler object for {@link EventBus} that is able to dispatch
 * an event.
 *
 * Original for Guava, licensed under the Apache License, Version 2.0.
*/
export class EventHandler extends Comparable<EventHandler> {
  /**
   * Get the priority.
   *
   * @return the priority
  */
  getPriority(): Priority;
  /**
   * Dispatch the given event.
   *
   * Subclasses should override {@link #dispatch(Object)}.
   *
   * @param event the event
   * @throws InvocationTargetException thrown if an exception is thrown during dispatch
  */
  handleEvent(event: any): void;
  /**
   * Dispatch the event.
   *
   * @param event the event object
   * @throws Exception an exception that may be thrown
  */
  dispatch(event: any): void;
  compareTo(o: EventHandler): number;
  hashCode(): number;
  equals(obj: any): boolean;
  toString(): string;
}

}
declare module 'com.sk89q.worldedit.util.collection' {
import { Iterable } from 'java.lang';
import { AbstractMap, Set, Iterator, Collection, List, Map } from 'java.util';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { LocatedBlock } from 'com.sk89q.worldedit.util';
import { Stream } from 'java.util.stream';
import { Entry } from 'java.util.Map';
import { Function, BiFunction, BiConsumer, Predicate } from 'java.util.function';
import { BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * A space-efficient map implementation for block locations.
*/
export class BlockMap<V> extends AbstractMap<BlockVector3, V> {
  static create<V>(): BlockMap<V>;
  static createForBaseBlock(): BlockMap<BaseBlock>;
  static copyOf<V>(source: Map<BlockVector3, V>): BlockMap<V>;
  put(key: BlockVector3, value: V): V;
  getOrDefault(key: any, defaultValue: V): V;
  forEach(action: BiConsumer<any, any>): void;
  replaceAll(func: BiFunction<any, any, V>): void;
  putIfAbsent(key: BlockVector3, value: V): V;
  remove(key: any, value: any): boolean;
  replace(key: BlockVector3, oldValue: V, newValue: V): boolean;
  replace(key: BlockVector3, value: V): V;
  computeIfAbsent(key: BlockVector3, mappingFunction: Function<any, V>): V;
  computeIfPresent(key: BlockVector3, remappingFunction: BiFunction<any, any, V>): V;
  compute(key: BlockVector3, remappingFunction: BiFunction<any, any, V>): V;
  merge(key: BlockVector3, value: V, remappingFunction: BiFunction<any, any, V>): V;
  entrySet(): Set<Entry<BlockVector3, V>>;
  containsValue(value: any): boolean;
  containsKey(key: any): boolean;
  get(key: any): V;
  remove(key: any): V;
  putAll(m: Map<BlockVector3, V>): void;
  clear(): void;
  size(): number;
  values(): Collection<V>;
  equals(o: any): boolean;
  hashCode(): number;
}
/**
 * Wrapper around a list of blocks located in the world.
*/
export class LocatedBlockList extends Iterable<LocatedBlock> {
  constructor();
  constructor(collection: Collection<LocatedBlock>);
  add(setBlockCall: LocatedBlock): void;
  add<B>(location: BlockVector3, block: B): void;
  containsLocation(location: BlockVector3): boolean;
  get(location: BlockVector3): BaseBlock | null;
  size(): number;
  clear(): void;
  iterator(): Iterator<LocatedBlock>;
  reverseIterator(): Iterator<LocatedBlock>;
}
/**
 * Double array lists to work like a Map, but not really.
 *
 * The usefulness of this class is highly questionable.
*/
export class DoubleArrayList<A, B> extends Iterable<Entry<A, B>> {
  /**
   * Construct the object.
   *
   * @param isReversed true if the list should be reversed
  */
  constructor(isReversed: boolean);
  /**
   * Add an item.
   *
   * @param a the first item
   * @param b the second item
  */
  put(a: A, b: B): void;
  /**
   * Get size.
   *
   * @return count of objects
  */
  size(): number;
  /**
   * Clear the list.
  */
  clear(): void;
  /**
   * Get an entry set.
   *
   * @return entry set
  */
  iterator(reversed: boolean): Iterator<Entry<A, B>>;
  iterator(): Iterator<Entry<A, B>>;
}
/**
 * Additionally stream facilities.
*/
export class MoreStreams {
  /**
   * Emit elements from `stream` until `predicate` returns `false`.
  */
  static takeWhile<T>(stream: Stream<T>, predicate: Predicate<T>): Stream<T>;
  /**
   * Emit elements from `stream` until `predicate` returns `true`.
  */
  static takeUntil<T>(stream: Stream<T>, predicate: Predicate<T>): Stream<T>;
}

}
declare module 'com.sk89q.worldedit.session.storage' {
import { UUID } from 'java.util';
import { File } from 'java.io';
import { LocalSession } from 'com.sk89q.worldedit';
/**
 * Commits sessions to disk.
 *
 * Both {@link #load(UUID)} and {@link #save(UUID, LocalSession)} may be
 * called at the same in different threads, so implementations should
 * be aware of this issue.
*/
export class SessionStore {
  /**
   * Load a session identified by the given UUID.
   *
   * If the session does not exist (has never been saved), then
   * a new {@link LocalSession} must be returned.
   *
   * @param id the UUID
   * @return a session
   * @throws IOException thrown on read error
  */
  load(id: UUID): LocalSession;
  /**
   * Save the given session identified by the given UUID.
   *
   * @param id the UUID
   * @param session a session
   * @throws IOException thrown on read error
  */
  save(id: UUID, session: LocalSession): void;
}
/**
 * Stores sessions as JSON files in a directory.
 *
 * Currently, this implementation doesn't handle thread safety very well.
*/
export class JsonFileSessionStore extends SessionStore {
  /**
   * Create a new session store.
   *
   * @param dir the directory
  */
  constructor(dir: File);
  /**
   * Load a session identified by the given UUID.
   *
   * If the session does not exist (has never been saved), then
   * a new {@link LocalSession} must be returned.
   *
   * @param id the UUID
   * @return a session
   * @throws IOException thrown on read error
  */
  load(id: UUID): LocalSession;
  /**
   * Save the given session identified by the given UUID.
   *
   * @param id the UUID
   * @param session a session
   * @throws IOException thrown on read error
  */
  save(id: UUID, session: LocalSession): void;
}
/**
 * A session store that doesn't know how to store sessions.
*/
export class VoidStore extends SessionStore {
  /**
   * Load a session identified by the given UUID.
   *
   * If the session does not exist (has never been saved), then
   * a new {@link LocalSession} must be returned.
   *
   * @param id the UUID
   * @return a session
   * @throws IOException thrown on read error
  */
  load(id: UUID): LocalSession;
  /**
   * Save the given session identified by the given UUID.
   *
   * @param id the UUID
   * @param session a session
   * @throws IOException thrown on read error
  */
  save(id: UUID, session: LocalSession): void;
}

}
declare module 'com.sk89q.worldedit.registry.state' {
import { List } from 'java.util';
import { Direction } from 'com.sk89q.worldedit.util';
export class BooleanProperty extends AbstractProperty<boolean> {
  constructor(name: string, values: boolean[]);
  getValueFor(string: string): boolean | null;
}
export class AbstractProperty<T> extends Property<T> {
  constructor(name: string, values: T[]);
  /**
   * Return a list of available values for this state.
   *
   * @return the list of state values
  */
  getValues(): T[];
  /**
   * Returns the name of this state.
   *
   * @return The state name
  */
  getName(): string;
  toString(): string;
  hashCode(): number;
  equals(obj: any): boolean;
}
export class EnumProperty extends AbstractProperty<string> {
  constructor(name: string, values: string[]);
  getValueFor(string: string): string | null;
}
export class IntegerProperty extends AbstractProperty<number> {
  constructor(name: string, values: number[]);
  getValueFor(string: string): number | null;
}
/**
 * Describes a state property of a block.
 *
 * Example states include "variant" (indicating material or type) and
 * "facing" (indicating orientation).
*/
export class Property<T> {
  /**
   * Returns the name of this state.
   *
   * @return The state name
  */
  getName(): string;
  /**
   * Return a list of available values for this state.
   *
   * @return the list of state values
  */
  getValues(): T[];
  /**
   * Gets the value for the given string, or null.
   *
   * @param string The string
   * @return The value, or null
   * @throws IllegalArgumentException When the value is invalid.
  */
  getValueFor(string: string): T | null;
}
export class DirectionalProperty extends AbstractProperty<Direction> {
  constructor(name: string, values: Direction[]);
  getValueFor(string: string): Direction | null;
}

}
declare module 'com.sk89q.worldedit.world.registry' {
import { Property } from 'com.sk89q.worldedit.registry.state';
import { ItemType } from 'com.sk89q.worldedit.world.item';
import { Set, OptionalInt, Map } from 'java.util';
import { ItemEntry } from 'com.sk89q.worldedit.world.registry.BundledItemData';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { ResourceLoader } from 'com.sk89q.worldedit.util.io';
import { BlockEntry } from 'com.sk89q.worldedit.world.registry.BundledBlockData';
import { BaseEntity } from 'com.sk89q.worldedit.entity';
import { BaseItemStack } from 'com.sk89q.worldedit.blocks';
import { Category } from 'com.sk89q.worldedit.registry';
import { BiomeType, BiomeData } from 'com.sk89q.worldedit.world.biome';
import { BlockState, BlockType } from 'com.sk89q.worldedit.world.block';
/**
 * Provides information on blocks and provides methods to create them.
*/
export class BlockRegistry {
  /**
   * Gets the name for the given block.
   *
   * @param blockType the block
   * @return The name
  */
  getRichName(blockType: BlockType): Component;
  /**
   * Gets the name for the given block.
   *
   * @param blockType the block
   * @return The name, or null if it's unknown
   * @deprecated Names are now translatable, use {@link #getRichName(BlockType)}.
  */
  getName(blockType: BlockType): string | null;
  /**
   * Get the material for the given block.
   *
   * @param blockType the block
   * @return the material, or null if the material information is not known
  */
  getMaterial(blockType: BlockType): BlockMaterial | null;
  /**
   * Get an unmodifiable map of states for this block.
   *
   * @param blockType the block
   * @return a map of states where the key is the state's ID
  */
  getProperties(blockType: BlockType): Map<string, Property<any>>;
  /**
   * Retrieve the internal ID for a given state, if possible.
   *
   * @param state The block state
   * @return the internal ID of the state
  */
  getInternalBlockStateId(state: BlockState): OptionalInt;
}
export class NullBlockCategoryRegistry extends BlockCategoryRegistry {
  /**
   * Gets a set of values with a given category.
   *
   * @param category The category
   * @return A set of values
  */
  getCategorisedByName(category: string): Set<BlockType>;
}
export class PassthroughItemMaterial extends ItemMaterial {
  constructor(material: ItemMaterial | null);
  /**
   * Gets the the maximum quantity of this item that can be in a single stack.
   *
   * @return the maximum quantity
  */
  getMaxStackSize(): number;
  /**
   * Gets the the maximum damage this item can take before being broken.
   *
   * @return the maximum damage, or 0 if not applicable
  */
  getMaxDamage(): number;
}
export class NullItemCategoryRegistry extends ItemCategoryRegistry {
  /**
   * Gets a set of values with a given category.
   *
   * @param category The category
   * @return A set of values
  */
  getCategorisedByName(category: string): Set<ItemType>;
}
/**
 * Provides information on biomes.
*/
export class BiomeRegistry {
  /**
   * Get the name of the biome, usually as a translatable component.
   *
   * @param biomeType the biome type
   * @return the name of the biome
  */
  getRichName(biomeType: BiomeType): Component;
  /**
   * Get data about a biome.
   *
   * @param biome the biome
   * @return a data object or null if information is not known
   * @deprecated This method no longer returns any useful information.
   *     Use {@link #getRichName(BiomeType)} for the name of the biome.
  */
  getData(biome: BiomeType): BiomeData | null;
}
/**
 * A registry for ItemType categories.
*/
export class ItemCategoryRegistry extends CategoryRegistry<ItemType> {

}
/**
 * A biome registry that knows nothing.
*/
export class NullBiomeRegistry extends BiomeRegistry {
  /**
   * Create a new instance.
  */
  constructor();
  /**
   * Get the name of the biome, usually as a translatable component.
   *
   * @param biomeType the biome type
   * @return the name of the biome
  */
  getRichName(biomeType: BiomeType): Component;
  /**
   * Get data about a biome.
   *
   * @param biome the biome
   * @return a data object or null if information is not known
   * @deprecated This method no longer returns any useful information.
   *     Use {@link #getRichName(BiomeType)} for the name of the biome.
  */
  getData(biome: BiomeType): BiomeData | null;
}
export class PassthroughBlockMaterial extends BlockMaterial {
  constructor(material: BlockMaterial | null);
  /**
   * Gets if this block is a type of air.
   *
   * @return If it's air
  */
  isAir(): boolean;
  /**
   * Get whether this block is a full sized cube.
   *
   * @return the value of the test
  */
  isFullCube(): boolean;
  /**
   * Get whether this block is opaque.
   *
   * @return the value of the test
  */
  isOpaque(): boolean;
  /**
   * Get whether this block emits a Redstone signal.
   *
   * @return the value of the test
  */
  isPowerSource(): boolean;
  /**
   * Get whether this block is a liquid.
   *
   * @return the value of the test
  */
  isLiquid(): boolean;
  /**
   * Get whether this block is a solid.
   *
   * @return the value of the test
  */
  isSolid(): boolean;
  /**
   * Get the hardness factor for this block.
   *
   * @return the hardness factor
  */
  getHardness(): number;
  /**
   * Get the resistance factor for this block.
   *
   * @return the resistance factor
  */
  getResistance(): number;
  /**
   * Get the slipperiness factor for this block.
   *
   * @return the slipperiness factor
  */
  getSlipperiness(): number;
  /**
   * Get the light value for this block.
   *
   * @return the light value
  */
  getLightValue(): number;
  /**
   * Get whether this block breaks when it is pushed by a piston.
   *
   * @return true if the block breaks
  */
  isFragileWhenPushed(): boolean;
  /**
   * Get whether this block can be pushed by a piston.
   *
   * @return true if the block cannot be pushed
  */
  isUnpushable(): boolean;
  /**
   * Get whether this block is ticked randomly.
   *
   * @return true if this block is ticked randomly
  */
  isTicksRandomly(): boolean;
  /**
   * Get whether this block prevents movement.
   *
   * @return true if this block blocks movement
  */
  isMovementBlocker(): boolean;
  /**
   * Get whether this block will burn.
   *
   * @return true if this block will burn
  */
  isBurnable(): boolean;
  /**
   * Get whether this block needs to be broken by a tool for maximum
   * speed.
   *
   * @return true if a tool is required
  */
  isToolRequired(): boolean;
  /**
   * Get whether this block is replaced when a block is placed over it
   * (for example, tall grass).
   *
   * @return true if the block is replaced
  */
  isReplacedDuringPlacement(): boolean;
  /**
   * Get whether this block is translucent.
   *
   * @return true if the block is translucent
  */
  isTranslucent(): boolean;
  /**
   * Gets whether the block has a container (Item container).
   *
   * @return If it has a container
  */
  hasContainer(): boolean;
}
/**
 * An implementation of an entity registry that knows nothing.
*/
export class NullEntityRegistry extends EntityRegistry {
  /**
   * Create a new entity using its ID.
   *
   * @param id the id
   * @return the entity, which may be null if the entity does not exist
  */
  createFromId(id: string): BaseEntity | null;
}
/**
 * An implementation of {@link Registries} that converts legacy numeric IDs and
 * a contains a built-in block and item database.
*/
export class BundledRegistries extends Registries {
  /**
   * Get the block registry.
   *
   * @return the block registry
  */
  getBlockRegistry(): BlockRegistry;
  /**
   * Get the item registry.
   *
   * @return the item registry
  */
  getItemRegistry(): ItemRegistry;
  /**
   * Get the entity registry.
   *
   * @return the entity registry
  */
  getEntityRegistry(): EntityRegistry;
  /**
   * Get the biome registry.
   *
   * @return the biome registry
  */
  getBiomeRegistry(): BiomeRegistry;
  /**
   * Get the block category registry.
   *
   * @return the block category registry
  */
  getBlockCategoryRegistry(): BlockCategoryRegistry;
  /**
   * Get the item category registry.
   *
   * @return the item category registry
  */
  getItemCategoryRegistry(): ItemCategoryRegistry;
  /**
   * Get a singleton instance.
   *
   * @return an instance
  */
  static getInstance(): BundledRegistries;
}
/**
 * Contains getters for the various registries.
*/
export class Registries {
  /**
   * Get the block registry.
   *
   * @return the block registry
  */
  getBlockRegistry(): BlockRegistry;
  /**
   * Get the item registry.
   *
   * @return the item registry
  */
  getItemRegistry(): ItemRegistry;
  /**
   * Get the entity registry.
   *
   * @return the entity registry
  */
  getEntityRegistry(): EntityRegistry;
  /**
   * Get the biome registry.
   *
   * @return the biome registry
  */
  getBiomeRegistry(): BiomeRegistry;
  /**
   * Get the block category registry.
   *
   * @return the block category registry
  */
  getBlockCategoryRegistry(): BlockCategoryRegistry;
  /**
   * Get the item category registry.
   *
   * @return the item category registry
  */
  getItemCategoryRegistry(): ItemCategoryRegistry;
}
/**
 * A registry for BlockType categories.
*/
export class BlockCategoryRegistry extends CategoryRegistry<BlockType> {

}
/**
 * A block registry that uses {@link BundledBlockData} to serve information
 * about blocks.
*/
export class BundledBlockRegistry extends BlockRegistry {
  /**
   * Gets the name for the given block.
   *
   * @param blockType the block
   * @return The name
  */
  getRichName(blockType: BlockType): Component;
  /**
   * Gets the name for the given block.
   *
   * @param blockType the block
   * @return The name, or null if it's unknown
   * @deprecated Names are now translatable, use {@link #getRichName(BlockType)}.
  */
  getName(blockType: BlockType): string | null;
  /**
   * Get the material for the given block.
   *
   * @param blockType the block
   * @return the material, or null if the material information is not known
  */
  getMaterial(blockType: BlockType): BlockMaterial | null;
  /**
   * Get an unmodifiable map of states for this block.
   *
   * @param blockType the block
   * @return a map of states where the key is the state's ID
  */
  getProperties(blockType: BlockType): Map<string, Property<any>> | null;
  /**
   * Retrieve the internal ID for a given state, if possible.
   *
   * @param state The block state
   * @return the internal ID of the state
  */
  getInternalBlockStateId(state: BlockState): OptionalInt;
}
export class LegacyMapper {
  getItemFromLegacy(legacyId: number): ItemType | null;
  getItemFromLegacy(legacyId: number, data: number): ItemType | null;
  getLegacyFromItem(itemType: ItemType): number[] | null;
  getBlockFromLegacy(legacyId: number): BlockState | null;
  getBlockFromLegacy(legacyId: number, data: number): BlockState | null;
  getLegacyFromBlock(blockState: BlockState): number[] | null;
  static getInstance(): LegacyMapper;
}
/**
 * Describes the material for a block.
*/
export class BlockMaterial {
  /**
   * Gets if this block is a type of air.
   *
   * @return If it's air
  */
  isAir(): boolean;
  /**
   * Get whether this block is a full sized cube.
   *
   * @return the value of the test
  */
  isFullCube(): boolean;
  /**
   * Get whether this block is opaque.
   *
   * @return the value of the test
  */
  isOpaque(): boolean;
  /**
   * Get whether this block emits a Redstone signal.
   *
   * @return the value of the test
  */
  isPowerSource(): boolean;
  /**
   * Get whether this block is a liquid.
   *
   * @return the value of the test
  */
  isLiquid(): boolean;
  /**
   * Get whether this block is a solid.
   *
   * @return the value of the test
  */
  isSolid(): boolean;
  /**
   * Get the hardness factor for this block.
   *
   * @return the hardness factor
  */
  getHardness(): number;
  /**
   * Get the resistance factor for this block.
   *
   * @return the resistance factor
  */
  getResistance(): number;
  /**
   * Get the slipperiness factor for this block.
   *
   * @return the slipperiness factor
  */
  getSlipperiness(): number;
  /**
   * Get the light value for this block.
   *
   * @return the light value
  */
  getLightValue(): number;
  /**
   * Get whether this block breaks when it is pushed by a piston.
   *
   * @return true if the block breaks
  */
  isFragileWhenPushed(): boolean;
  /**
   * Get whether this block can be pushed by a piston.
   *
   * @return true if the block cannot be pushed
  */
  isUnpushable(): boolean;
  /**
   * Get whether this block is ticked randomly.
   *
   * @return true if this block is ticked randomly
  */
  isTicksRandomly(): boolean;
  /**
   * Get whether this block prevents movement.
   *
   * @return true if this block blocks movement
  */
  isMovementBlocker(): boolean;
  /**
   * Get whether this block will burn.
   *
   * @return true if this block will burn
  */
  isBurnable(): boolean;
  /**
   * Get whether this block needs to be broken by a tool for maximum
   * speed.
   *
   * @return true if a tool is required
  */
  isToolRequired(): boolean;
  /**
   * Get whether this block is replaced when a block is placed over it
   * (for example, tall grass).
   *
   * @return true if the block is replaced
  */
  isReplacedDuringPlacement(): boolean;
  /**
   * Get whether this block is translucent.
   *
   * @return true if the block is translucent
  */
  isTranslucent(): boolean;
  /**
   * Gets whether the block has a container (Item container).
   *
   * @return If it has a container
  */
  hasContainer(): boolean;
}
/**
 * A item registry that uses {@link BundledItemRegistry} to serve information
 * about items.
*/
export class BundledItemRegistry extends ItemRegistry {
  /**
   * Gets the name for the given item.
   *
   * @param itemType the item
   * @return The name
  */
  getRichName(itemType: ItemType): Component;
  /**
   * Gets the name for the given item.
   *
   * @param itemType the item
   * @return The name, or null if it's unknown
   * @deprecated Names are now translatable, use {@link #getRichName(ItemType)}.
  */
  getName(itemType: ItemType): string | null;
  /**
   * Get the material for the given item.
   *
   * @param itemType the item
   * @return the material, or null if the material information is not known
  */
  getMaterial(itemType: ItemType): ItemMaterial | null;
  /**
   * Gets the name for the given item stack.
   *
   * @param itemStack the item stack
   * @return The name
  */
  getRichName(itemStack: BaseItemStack): Component;
}
/**
 * Provides information on entities.
*/
export class EntityRegistry {
  /**
   * Create a new entity using its ID.
   *
   * @param id the id
   * @return the entity, which may be null if the entity does not exist
  */
  createFromId(id: string): BaseEntity | null;
}
export class ItemMaterial {
  /**
   * Gets the the maximum quantity of this item that can be in a single stack.
   *
   * @return the maximum quantity
  */
  getMaxStackSize(): number;
  /**
   * Gets the the maximum damage this item can take before being broken.
   *
   * @return the maximum damage, or 0 if not applicable
  */
  getMaxDamage(): number;
}
/**
 * A registry of categories. Minecraft internally calls these 'Tags'.
*/
export class CategoryRegistry<T> {
  /**
   * Gets a set of values with a given category.
   *
   * @param category The category
   * @return A set of values
  */
  getCategorisedByName(category: string): Set<T>;
  getAll(category: Category<T>): Set<T>;
}
export class ItemRegistry {
  /**
   * Gets the name for the given item.
   *
   * @param itemType the item
   * @return The name
  */
  getRichName(itemType: ItemType): Component;
  /**
   * Gets the name for the given item stack.
   *
   * @param itemStack the item stack
   * @return The name
  */
  getRichName(itemStack: BaseItemStack): Component;
  /**
   * Gets the name for the given item.
   *
   * @param itemType the item
   * @return The name, or null if it's unknown
   * @deprecated Names are now translatable, use {@link #getRichName(ItemType)}.
  */
  getName(itemType: ItemType): string | null;
  /**
   * Get the material for the given item.
   *
   * @param itemType the item
   * @return the material, or null if the material information is not known
  */
  getMaterial(itemType: ItemType): ItemMaterial | null;
}
/**
 * Provides item data based on the built-in item database that is bundled
 * with WorldEdit.
 *
 * A new instance cannot be created. Use {@link #getInstance()} to get
 * an instance.
 *
 * The data is read from a JSON file that is bundled with WorldEdit. If
 * reading fails (which occurs when this class is first instantiated), then
 * the methods will return `null`s for all items.
*/
export class BundledItemData {
  /**
   * Return the entry for the given item ID.
   *
   * @param id the ID
   * @return the entry, or null
  */
  findById(id: string): ItemEntry | null;
  /**
   * Get the material properties for the given item.
   *
   * @param id the string ID
   * @return the material's properties, or null
  */
  getMaterialById(id: string): ItemMaterial | null;
  /**
   * Get a singleton instance of this object.
   *
   * @return the instance
  */
  static getInstance(): BundledItemData;
}
export class SimpleItemMaterial extends ItemMaterial {
  constructor(maxStackSize: number, maxDamage: number);
  /**
   * Gets the the maximum quantity of this item that can be in a single stack.
   *
   * @return the maximum quantity
  */
  getMaxStackSize(): number;
  /**
   * Gets the the maximum damage this item can take before being broken.
   *
   * @return the maximum damage, or 0 if not applicable
  */
  getMaxDamage(): number;
}
/**
 * Provides block data based on the built-in block database that is bundled
 * with WorldEdit.
 *
 * A new instance cannot be created. Use {@link #getInstance()} to get
 * an instance.
 *
 * The data is read from a JSON file that is bundled with WorldEdit. If
 * reading fails (which occurs when this class is first instantiated), then
 * the methods will return `null`s for all blocks.
*/
export class BundledBlockData {
  /**
   * Return the entry for the given block ID.
   *
   * @param id the ID
   * @return the entry, or null
  */
  findById(id: string): BlockEntry | null;
  /**
   * Get the material properties for the given block.
   *
   * @param id the string ID
   * @return the material's properties, or null
  */
  getMaterialById(id: string): BlockMaterial | null;
  /**
   * Get a singleton instance of this object.
   *
   * @return the instance
  */
  static getInstance(): BundledBlockData;
}

}
declare module 'com.sk89q.worldedit.world' {
import { CompoundTag } from 'com.sk89q.jnbt';
import { Set, OptionalLong, List, PriorityQueue } from 'java.util';
import { Vector3, BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { Region } from 'com.sk89q.worldedit.regions';
import { Operation } from 'com.sk89q.worldedit.function.operation';
import { Entity, BaseEntity } from 'com.sk89q.worldedit.entity';
import { BaseItemStack, BaseItem } from 'com.sk89q.worldedit.blocks';
import { BiomeType } from 'com.sk89q.worldedit.world.biome';
import { Path } from 'java.nio.file';
import { Iterable, Exception } from 'java.lang';
import { WeatherType } from 'com.sk89q.worldedit.world.weather';
import { SideEffectSet, Direction, SideEffect, Location } from 'com.sk89q.worldedit.util';
import { TreeType } from 'com.sk89q.worldedit.util.TreeGenerator';
import { Builder } from 'com.sk89q.worldedit.world.RegenOptions';
import { QueuedEffect } from 'com.sk89q.worldedit.world.AbstractWorld';
import { EditSession, WorldEditException } from 'com.sk89q.worldedit';
import { Platform } from 'com.sk89q.worldedit.extension.platform';
import { Keyed } from 'com.sk89q.worldedit.registry';
import { Extent } from 'com.sk89q.worldedit.extent';
import { BlockState, BlockType, BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * Thrown if the world has been unloaded.
*/
export class WorldUnloadedException extends WorldEditException {
  /**
   * Create a new instance.
  */
  constructor();
}
/**
 * Regeneration options for {@link World#regenerate(Region, Extent, RegenOptions)}.
*/
export class RegenOptions {
  /**
   * Creates a new options builder.
   *
   * @return the builder
  */
  static builder(): Builder;
  /**
   * The seed to regenerate with.
   *
   * 
   * {@link OptionalLong#empty()} if the world's original seed should be used.
   * 
  */
  getSeed(): OptionalLong;
  /**
   * Whether biomes should be regenerated.
  */
  shouldRegenBiomes(): boolean;
}
/**
 * A null implementation of {@link World} that drops all changes and
 * returns dummy data.
*/
export class NullWorld extends AbstractWorld {
  getName(): string;
  getId(): string;
  setBlock<B>(position: BlockVector3, block: B, sideEffects: SideEffectSet): boolean;
  applySideEffects(position: BlockVector3, previousType: BlockState, sideEffectSet: SideEffectSet): Set<SideEffect>;
  getBlockLightLevel(position: BlockVector3): number;
  clearContainerBlockContents(position: BlockVector3): boolean;
  fullySupports3DBiomes(): boolean;
  getBiome(position: BlockVector3): BiomeType;
  setBiome(position: BlockVector3, biome: BiomeType): boolean;
  dropItem(position: Vector3, item: BaseItemStack): void;
  simulateBlockMine(position: BlockVector3): void;
  regenerate(region: Region, extent: Extent, options: RegenOptions): boolean;
  generateTree(type: TreeType, editSession: EditSession, position: BlockVector3): boolean;
  getWeather(): WeatherType;
  getRemainingWeatherDuration(): number;
  setWeather(weather: WeatherType);
  setWeather(weatherType: WeatherType, duration: number): void;
  getSpawnPosition(): BlockVector3;
  getBlock(position: BlockVector3): BlockState;
  getFullBlock(position: BlockVector3): BaseBlock;
  getEntities(region: Region): Entity[];
  getEntities(): Entity[];
  createEntity(location: Location, entity: BaseEntity): Entity | null;
  /**
   * Return an instance of this null world.
   *
   * @return a null world
  */
  static getInstance(): NullWorld;
  setBlock<B>(pt: BlockVector3, block: B): boolean;
  dropItem(pt: Vector3, item: BaseItemStack, times: number): void;
  /**
   * Similar to {@link Extent#setBlock(BlockVector3, BlockStateHolder)} but a
   * `notifyAndLight` parameter indicates whether adjacent blocks
   * should be notified that changes have been made and lighting operations
   * should be executed.
   *
   * If it's not possible to skip lighting, or if it's not possible to
   * avoid notifying adjacent blocks, then attempt to meet the
   * specification as best as possible.
   *
   * On implementations where the world is not simulated, the
   * `notifyAndLight` parameter has no effect either way.
   *
   * @param position position of the block
   * @param block block to set
   * @param notifyAndLight true to to notify and light
   * @return true if the block was successfully set (return value may not be accurate)
  */
  setBlock<B>(position: BlockVector3, block: B, notifyAndLight: boolean): boolean;
  /**
   * Regenerate an area.
   *
   * @param region the region
   * @param editSession the {@link EditSession}
   * @return true if re-generation was successful
  */
  regenerate(region: Region, editSession: EditSession): boolean;
  /**
   * Regenerate an area.
   *
   * @param region the region
   * @param extent the {@link Extent}
   * @return true if re-generation was successful
  */
  regenerate(region: Region, extent: Extent): boolean;
  /**
   * Get the biome at the given location.
   *
   * If there is no biome available, then the ocean biome should be
   * returned.
   *
   * @param position the (x, z) location to check the biome at
   * @return the biome at the location
   * @deprecated Biomes in Minecraft are 3D now, use {@link InputExtent#getBiome(BlockVector3)}
  */
  getBiome(position: BlockVector2): BiomeType;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(position: BlockVector3, block: T): boolean;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector2, biome: BiomeType): boolean;
}
/**
 * Thrown when there is an exception related to data handling.
*/
export class DataException extends Exception {
  constructor(msg: string);
  constructor();
}
/**
 * Indicates an object that contains extra data identified as an NBT structure.
 * This interface is used when saving and loading objects to a serialized
 * format, but may be used in other cases.
*/
export class NbtValued {
  /**
   * Returns whether the block contains NBT data. {@link #getNbtData()}
   * must not return null if this method returns true.
   *
   * @return true if there is NBT data
  */
  hasNbtData(): boolean;
  /**
   * Get the object's NBT data (tile entity data). The returned tag, if
   * modified in any way, should be sent to {@link #setNbtData(CompoundTag)}
   * so that the instance knows of the changes. Making changes without
   * calling {@link #setNbtData(CompoundTag)} could have unintended
   * consequences.
   *
   * {@link #hasNbtData()} must return true if and only if method does
   * not return null.
   *
   * @return compound tag, or null
  */
  getNbtData(): CompoundTag | null;
  /**
   * Set the object's NBT data (tile entity data).
   *
   * @param nbtData NBT data, or null if no data
  */
  setNbtData(nbtData: CompoundTag | null);
}
/**
 * Represents a world (dimension).
*/
export class World extends Extent {
  /**
   * Get the name of the world.
   *
   * @return a name for the world
  */
  getName(): string;
  /**
   * Get the folder in which this world is stored. May return null if unknown
   * or if this world is not serialized to disk.
   *
   * @return world storage path
  */
  getStoragePath(): Path | null;
  /**
   * Get the minimum Y.
   *
   * @return the minimum Y
  */
  getMinY(): number;
  /**
   * Get the maximum Y.
   *
   * @return the maximum Y
  */
  getMaxY(): number;
  /**
   * Create a mask that matches all liquids.
   *
   * Implementations should override this so that custom liquids
   * are supported.
   *
   * @return a mask
  */
  createLiquidMask(): Mask;
  /**
   * Use the given item on the block at the given location on the given side.
   *
   * @param item The item
   * @param face The face
   * @return Whether it succeeded
  */
  useItem(position: BlockVector3, item: BaseItem, face: Direction): boolean;
  /**
   * Similar to {@link Extent#setBlock(BlockVector3, BlockStateHolder)} but a
   * `notifyAndLight` parameter indicates whether adjacent blocks
   * should be notified that changes have been made and lighting operations
   * should be executed.
   *
   * If it's not possible to skip lighting, or if it's not possible to
   * avoid notifying adjacent blocks, then attempt to meet the
   * specification as best as possible.
   *
   * On implementations where the world is not simulated, the
   * `notifyAndLight` parameter has no effect either way.
   *
   * @param position position of the block
   * @param block block to set
   * @param notifyAndLight true to to notify and light
   * @return true if the block was successfully set (return value may not be accurate)
  */
  setBlock<B>(position: BlockVector3, block: B, notifyAndLight: boolean): boolean;
  /**
   * Similar to {@link Extent#setBlock(BlockVector3, BlockStateHolder)} but a
   * `sideEffects` parameter indicates which side effects should be applied
   * to the block. This includes block updates, lighting, and others. See {@link SideEffect}
   * for a full list.
   *
   * Not all implementations support all side effects. Use
   * {@link Platform#getSupportedSideEffects()} for a list of supported side effects.
   * Non-supported side effects will be ignored.
   *
   * @param position position of the block
   * @param block block to set
   * @param sideEffects which side effects to perform
   * @return true if the block was successfully set (return value may not be accurate)
  */
  setBlock<B>(position: BlockVector3, block: B, sideEffects: SideEffectSet): boolean;
  /**
   * Notifies the simulation that the block at the given location has
   * been changed and it must be re-lighted (and issue other events).
   *
   * @param position position of the block
   * @param previousType the type of the previous block that was there
   * @return true if the block was successfully notified
  */
  notifyAndLightBlock(position: BlockVector3, previousType: BlockState): boolean;
  /**
   * Applies a set of side effects on the given block.
   *
   * @param position position of the block
   * @param previousType the type of the previous block that was there
   * @param sideEffectSet which side effects to perform
   * @return a set of side effects that were applied
  */
  applySideEffects(position: BlockVector3, previousType: BlockState, sideEffectSet: SideEffectSet): Set<SideEffect>;
  /**
   * Get the light level at the given block.
   *
   * @param position the position
   * @return the light level (0-15)
  */
  getBlockLightLevel(position: BlockVector3): number;
  /**
   * Clear a chest's contents.
   *
   * @param position the position
   * @return true if the container was cleared
  */
  clearContainerBlockContents(position: BlockVector3): boolean;
  /**
   * Drop an item at the given position.
   *
   * @param position the position
   * @param item the item to drop
   * @param count the number of individual stacks to drop (number of item entities)
  */
  dropItem(position: Vector3, item: BaseItemStack, count: number): void;
  /**
   * Drop one stack of the item at the given position.
   *
   * @param position the position
   * @param item the item to drop
   * @see #dropItem(Vector3, BaseItemStack, int) shortcut method to specify the number of stacks
  */
  dropItem(position: Vector3, item: BaseItemStack): void;
  /**
   * Simulate a block being mined at the given position.
   *
   * @param position the position
  */
  simulateBlockMine(position: BlockVector3): void;
  /**
   * Gets whether the given {@link BlockState} can be placed here.
   *
   * @param position The position
   * @param blockState The blockstate
   * @return If it can be placed
  */
  canPlaceAt(position: BlockVector3, blockState: BlockState): boolean;
  /**
   * Regenerate an area.
   *
   * @param region the region
   * @param editSession the {@link EditSession}
   * @return true if re-generation was successful
  */
  regenerate(region: Region, editSession: EditSession): boolean;
  /**
   * Regenerate an area.
   *
   * @param region the region
   * @param extent the {@link Extent}
   * @return true if re-generation was successful
  */
  regenerate(region: Region, extent: Extent): boolean;
  /**
   * Regenerate an area.
   *
   * @param region the region
   * @param extent the {@link Extent}
   * @param options the regeneration options
   * @return true if regeneration was successful
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  regenerate(region: Region, extent: Extent, options: RegenOptions): boolean;
  /**
   * Generate a tree at the given position.
   *
   * @param type the tree type
   * @param editSession the {@link EditSession}
   * @param position the position
   * @return true if generation was successful
   * @throws MaxChangedBlocksException thrown if too many blocks were changed
  */
  generateTree(type: TreeType, editSession: EditSession, position: BlockVector3): boolean;
  /**
   * Load the chunk at the given position if it isn't loaded.
   *
   * @param position the position
  */
  checkLoadedChunk(position: BlockVector3): void;
  /**
   * Fix the given chunks after fast mode was used.
   *
   * Fast mode makes calls to {@link #setBlock(BlockVector3, BlockStateHolder, boolean)}
   * with `false` for the `notifyAndLight` parameter, which
   * may causes lighting errors to accumulate. Use of this method, if
   * it is implemented by the underlying world, corrects those lighting
   * errors and may trigger block change notifications.
   *
   * @param chunks a list of chunk coordinates to fix
  */
  fixAfterFastMode(chunks: Iterable<BlockVector2>): void;
  /**
   * Relight the given chunks if possible.
   *
   * @param chunks a list of chunk coordinates to fix
  */
  fixLighting(chunks: Iterable<BlockVector2>): void;
  /**
   * Play the given effect.
   *
   * @param position the position
   * @param type the effect type
   * @param data the effect data
   * @return true if the effect was played
  */
  playEffect(position: Vector3, type: number, data: number): boolean;
  /**
   * Queue a block break effect.
   *
   * @param server the server
   * @param position the position
   * @param blockType the block type
   * @param priority the priority
   * @return true if the effect was played
  */
  queueBlockBreakEffect(server: Platform, position: BlockVector3, blockType: BlockType, priority: number): boolean;
  /**
   * Gets the weather type of the world.
   *
   * @return The weather
  */
  getWeather(): WeatherType;
  /**
   * Gets the remaining weather duration.
   *
   * @return The weather duration
  */
  getRemainingWeatherDuration(): number;
  /**
   * Sets the weather type of the world.
   *
   * @param weatherType The weather type
  */
  setWeather(weather: WeatherType);
  /**
   * Sets the weather type of the world.
   *
   * @param weatherType The weather type
   * @param duration The duration of the weather
  */
  setWeather(weatherType: WeatherType, duration: number): void;
  /**
   * Gets the spawn position of this world.
   *
   * @return The spawn position
  */
  getSpawnPosition(): BlockVector3;
  equals(other: any): boolean;
  hashCode(): number;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(position: BlockVector3, block: T): boolean;
}
export interface World extends Extent, Keyed {}
/**
 * An abstract implementation of {@link World}.
*/
export class AbstractWorld extends World {
  /**
   * Use the given item on the block at the given location on the given side.
   *
   * @param item The item
   * @param face The face
   * @return Whether it succeeded
  */
  useItem(position: BlockVector3, item: BaseItem, face: Direction): boolean;
  /**
   * Similar to {@link Extent#setBlock(BlockVector3, BlockStateHolder)} but a
   * `notifyAndLight` parameter indicates whether adjacent blocks
   * should be notified that changes have been made and lighting operations
   * should be executed.
   *
   * If it's not possible to skip lighting, or if it's not possible to
   * avoid notifying adjacent blocks, then attempt to meet the
   * specification as best as possible.
   *
   * On implementations where the world is not simulated, the
   * `notifyAndLight` parameter has no effect either way.
   *
   * @param position position of the block
   * @param block block to set
   * @param notifyAndLight true to to notify and light
   * @return true if the block was successfully set (return value may not be accurate)
  */
  setBlock<B>(pt: BlockVector3, block: B): boolean;
  /**
   * Get the folder in which this world is stored. May return null if unknown
   * or if this world is not serialized to disk.
   *
   * @return world storage path
  */
  getStoragePath(): Path;
  /**
   * Get the minimum Y.
   *
   * @return the minimum Y
  */
  getMinY(): number;
  /**
   * Get the maximum Y.
   *
   * @return the maximum Y
  */
  getMaxY(): number;
  /**
   * Create a mask that matches all liquids.
   *
   * Implementations should override this so that custom liquids
   * are supported.
   *
   * @return a mask
  */
  createLiquidMask(): Mask;
  /**
   * Drop an item at the given position.
   *
   * @param position the position
   * @param item the item to drop
   * @param count the number of individual stacks to drop (number of item entities)
  */
  dropItem(pt: Vector3, item: BaseItemStack, times: number): void;
  /**
   * Load the chunk at the given position if it isn't loaded.
   *
   * @param position the position
  */
  checkLoadedChunk(pt: BlockVector3): void;
  /**
   * Fix the given chunks after fast mode was used.
   *
   * Fast mode makes calls to {@link #setBlock(BlockVector3, BlockStateHolder, boolean)}
   * with `false` for the `notifyAndLight` parameter, which
   * may causes lighting errors to accumulate. Use of this method, if
   * it is implemented by the underlying world, corrects those lighting
   * errors and may trigger block change notifications.
   *
   * @param chunks a list of chunk coordinates to fix
  */
  fixAfterFastMode(chunks: Iterable<BlockVector2>): void;
  /**
   * Relight the given chunks if possible.
   *
   * @param chunks a list of chunk coordinates to fix
  */
  fixLighting(chunks: Iterable<BlockVector2>): void;
  /**
   * Play the given effect.
   *
   * @param position the position
   * @param type the effect type
   * @param data the effect data
   * @return true if the effect was played
  */
  playEffect(position: Vector3, type: number, data: number): boolean;
  /**
   * Queue a block break effect.
   *
   * @param server the server
   * @param position the position
   * @param blockType the block type
   * @param priority the priority
   * @return true if the effect was played
  */
  queueBlockBreakEffect(server: Platform, position: BlockVector3, blockType: BlockType, priority: number): boolean;
  /**
   * Get the minimum point in the extent.
   *
   * If the extent is unbounded, then a large (negative) value may
   * be returned.
   *
   * @return the minimum point
  */
  getMinimumPoint(): BlockVector3;
  /**
   * Get the maximum point in the extent.
   *
   * If the extent is unbounded, then a large (positive) value may
   * be returned.
   *
   * @return the maximum point
  */
  getMaximumPoint(): BlockVector3;
  /**
   * Return an {@link Operation} that should be called to tie up loose ends
   * (such as to commit changes in a buffer).
   *
   * @return an operation or null if there is none to execute
  */
  commit(): Operation | null;
  /**
   * Gets the weather type of the world.
   *
   * @return The weather
  */
  getWeather(): WeatherType;
  /**
   * Gets the remaining weather duration.
   *
   * @return The weather duration
  */
  getRemainingWeatherDuration(): number;
  /**
   * Sets the weather type of the world.
   *
   * @param weatherType The weather type
  */
  setWeather(weather: WeatherType);
  /**
   * Sets the weather type of the world.
   *
   * @param weatherType The weather type
   * @param duration The duration of the weather
  */
  setWeather(weatherType: WeatherType, duration: number): void;
  /**
   * Similar to {@link Extent#setBlock(BlockVector3, BlockStateHolder)} but a
   * `notifyAndLight` parameter indicates whether adjacent blocks
   * should be notified that changes have been made and lighting operations
   * should be executed.
   *
   * If it's not possible to skip lighting, or if it's not possible to
   * avoid notifying adjacent blocks, then attempt to meet the
   * specification as best as possible.
   *
   * On implementations where the world is not simulated, the
   * `notifyAndLight` parameter has no effect either way.
   *
   * @param position position of the block
   * @param block block to set
   * @param notifyAndLight true to to notify and light
   * @return true if the block was successfully set (return value may not be accurate)
  */
  setBlock<B>(position: BlockVector3, block: B, notifyAndLight: boolean): boolean;
  /**
   * Similar to {@link Extent#setBlock(BlockVector3, BlockStateHolder)} but a
   * `sideEffects` parameter indicates which side effects should be applied
   * to the block. This includes block updates, lighting, and others. See {@link SideEffect}
   * for a full list.
   *
   * Not all implementations support all side effects. Use
   * {@link Platform#getSupportedSideEffects()} for a list of supported side effects.
   * Non-supported side effects will be ignored.
   *
   * @param position position of the block
   * @param block block to set
   * @param sideEffects which side effects to perform
   * @return true if the block was successfully set (return value may not be accurate)
  */
  setBlock<B>(position: BlockVector3, block: B, sideEffects: SideEffectSet): boolean;
  /**
   * Drop one stack of the item at the given position.
   *
   * @param position the position
   * @param item the item to drop
   * @see #dropItem(Vector3, BaseItemStack, int) shortcut method to specify the number of stacks
  */
  dropItem(position: Vector3, item: BaseItemStack): void;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(position: BlockVector3, block: T): boolean;
}

}
declare module 'com.sk89q.util.yaml' {
import { List, Map } from 'java.util';
import { Enum, Exception } from 'java.lang';
import { Vector2, Vector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { InputStream, OutputStream, File } from 'java.io';
/**
 * YAML configuration loader. To use this class, construct it with path to
 * a file and call its load() method. For specifying node paths in the
 * various get*() methods, they support SK's path notation, allowing you to
 * select child nodes by delimiting node names with periods.
 *
 * 
 * For example, given the following configuration file:
 *
 * members:
 *     - Hollie
 *     - Jason
 *     - Bobo
 *     - Aya
 *     - Tetsu
 * worldguard:
 *     fire:
 *         spread: false
 *         blocks: [cloth, rock, glass]
 * sturmeh:
 *     cool: false
 *     eats:
 *         babies: true
 *
 * Calling code could access sturmeh's baby eating state by using
 * `getBoolean("sturmeh.eats.babies", false)`. For lists, there are
 * methods such as `getStringList` that will return a type safe list.
*/
export class YAMLProcessor extends YAMLNode {
  static readonly LINE_BREAK: string;
  static readonly COMMENT_CHAR: string;
  constructor(file: File, writeDefaults: boolean, format: YAMLFormat);
  constructor(file: File, writeDefaults: boolean);
  /**
   * Loads the configuration file.
   *
   * @throws java.io.IOException on load error
  */
  load(): void;
  /**
   * Set the header for the file as a series of lines that are terminated
   * by a new line sequence.
   *
   * @param headerLines header lines to prepend
  */
  setHeader(header: string[]): void;
  /**
   * Set the header for the file. A header can be provided to prepend the
   * YAML data output on configuration save. The header is
   * printed raw and so must be manually commented if used. A new line will
   * be appended after the header, however, if a header is provided.
   *
   * @param header header to prepend
  */
  setHeader(header: string): void;
  /**
   * Return the set header.
   *
   * @return the header text
  */
  getHeader(): string;
  /**
   * Saves the configuration to disk. All errors are clobbered.
   *
   * @return true if it was successful
  */
  save(): boolean;
  getInputStream(): InputStream;
  getOutputStream(): OutputStream;
  /**
   * Returns a root-level comment.
   *
   * @param key the property key
   * @return the comment or `null`
  */
  getComment(key: string): string;
  setComment(key: string, comment: string): void;
  /**
   * Set a root-level comment.
   *
   * @param key the property key
   * @param comment the comment. May be `null`, in which case the comment
   *      is removed.
  */
  setComment(key: string, ...comment: string[]): void;
  /**
   * Returns root-level comments.
   *
   * @return map of root-level comments
  */
  getComments(): Map<string, string>;
  /**
   * Set root-level comments from a map.
   *
   * @param comments comment map
  */
  setComments(comments: Map<string, string>);
  /**
   * Get an empty ConfigurationNode for using as a default in methods that
   * select a node from a node list.
   *
   * @param writeDefaults true to write default values when a property is
   *      requested that doesn't exist
   * @return a node
  */
  static getEmptyNode(writeDefaults: boolean): YAMLNode;
}
export class YAMLFormat extends Enum<YAMLFormat> {
  static readonly EXTENDED: YAMLFormat;
  static readonly COMPACT: YAMLFormat;
  static valueOf(name: string): YAMLFormat;
  static values(): YAMLFormat[];
}
/**
 * Represents a configuration node.
*/
export class YAMLNode {
  constructor(root: Map<string, any>, writeDefaults: boolean);
  /**
   * Return the underlying map.
   *
   * @return the map
  */
  getMap(): Map<string, any>;
  /**
   * Clear all nodes.
  */
  clear(): void;
  /**
   * Gets a property at a location. This will either return an Object
   * or null, with null meaning that no configuration value exists at
   * that location. This could potentially return a default value (not yet
   * implemented) as defined by a plugin, if this is a plugin-tied
   * configuration.
   *
   * @param path path to node (dot notation)
   * @return object or null
  */
  getProperty(path: string): any;
  /**
   * Set the property at a location. This will override existing
   * configuration data to have it conform to key/value mappings.
   *
   * @param path the path
   * @param value the new value
  */
  setProperty(path: string, value: any): void;
  /**
   * Adds a new node to the given path. The returned object is a reference
   * to the new node. This method will replace an existing node at
   * the same path. See `setProperty`.
   *
   * @param path the path
   * @return a node for the path
  */
  addNode(path: string): YAMLNode;
  /**
   * Gets a string at a location. This will either return an String
   * or null, with null meaning that no configuration value exists at
   * that location. If the object at the particular location is not actually
   * a string, it will be converted to its string representation.
   *
   * @param path path to node (dot notation)
   * @return string or null
  */
  getString(path: string): string;
  /**
   * Gets a vector at a location. This will either return an Vector
   * or a null. If the object at the particular location is not
   * actually a string, it will be converted to its string representation.
   *
   * @param path path to node (dot notation)
   * @return string or default
  */
  getVector(path: string): Vector3;
  /**
   * Gets a 2D vector at a location. This will either return an Vector
   * or a null. If the object at the particular location is not
   * actually a string, it will be converted to its string representation.
   *
   * @param path path to node (dot notation)
   * @return string or default
  */
  getVector2(path: string): Vector2;
  /**
   * Gets a string at a location. This will either return an Vector
   * or the default value. If the object at the particular location is not
   * actually a string, it will be converted to its string representation.
   *
   * @param path path to node (dot notation)
   * @param def default value
   * @return string or default
  */
  getVector(path: string, def: Vector3): Vector3;
  /**
   * Gets a string at a location. This will either return an String
   * or the default value. If the object at the particular location is not
   * actually a string, it will be converted to its string representation.
   *
   * @param path path to node (dot notation)
   * @param def default value
   * @return string or default
  */
  getString(path: string, def: string): string;
  /**
   * Gets an integer at a location. This will either return an integer
   * or null. If the object at the particular location is not
   * actually a integer, the default value will be returned. However, other
   * number types will be casted to an integer.
   *
   * @param path path to node (dot notation)
   * @return integer or null
  */
  getInt(path: string): number;
  /**
   * Gets an integer at a location. This will either return an integer
   * or the default value. If the object at the particular location is not
   * actually a integer, the default value will be returned. However, other
   * number types will be casted to an integer.
   *
   * @param path path to node (dot notation)
   * @param def default value
   * @return int or default
  */
  getInt(path: string, def: number): number;
  /**
   * Gets a double at a location. This will either return an double
   * or null. If the object at the particular location is not
   * actually a double, the default value will be returned. However, other
   * number types will be casted to an double.
   *
   * @param path path to node (dot notation)
   * @return double or null
  */
  getDouble(path: string): number;
  /**
   * Gets a double at a location. This will either return an double
   * or the default value. If the object at the particular location is not
   * actually a double, the default value will be returned. However, other
   * number types will be casted to an double.
   *
   * @param path path to node (dot notation)
   * @param def default value
   * @return double or default
  */
  getDouble(path: string, def: number): number;
  /**
   * Gets a boolean at a location. This will either return an boolean
   * or null. If the object at the particular location is not
   * actually a boolean, the default value will be returned.
   *
   * @param path path to node (dot notation)
   * @return boolean or null
  */
  getBoolean(path: string): boolean;
  /**
   * Gets a boolean at a location. This will either return an boolean
   * or the default value. If the object at the particular location is not
   * actually a boolean, the default value will be returned.
   *
   * @param path path to node (dot notation)
   * @param def default value
   * @return boolean or default
  */
  getBoolean(path: string, def: boolean): boolean;
  /**
   * Get a list of keys at a location. If the map at the particular location
   * does not exist or it is not a map, null will be returned.
   *
   * @param path path to node (dot notation)
   * @return list of keys
  */
  getKeys(path: string): string[];
  /**
   * Gets a list of objects at a location. If the list is not defined,
   * null will be returned. The node must be an actual list.
   *
   * @param path path to node (dot notation)
   * @return boolean or default
  */
  getList(path: string): any[];
  /**
   * Gets a list of strings. Non-valid entries will not be in the list.
   * There will be no null slots. If the list is not defined, the
   * default will be returned. 'null' can be passed for the default
   * and an empty list will be returned instead. If an item in the list
   * is not a string, it will be converted to a string. The node must be
   * an actual list and not just a string.
   *
   * @param path path to node (dot notation)
   * @param def default value or null for an empty list as default
   * @return list of strings
  */
  getStringList(path: string, def: string[]): string[];
  /**
   * Gets a list of integers. Non-valid entries will not be in the list.
   * There will be no null slots. If the list is not defined, the
   * default will be returned. 'null' can be passed for the default
   * and an empty list will be returned instead. The node must be
   * an actual list and not just an integer.
   *
   * @param path path to node (dot notation)
   * @param def default value or null for an empty list as default
   * @return list of integers
  */
  getIntList(path: string, def: number[]): number[];
  /**
   * Gets a list of doubles. Non-valid entries will not be in the list.
   * There will be no null slots. If the list is not defined, the
   * default will be returned. 'null' can be passed for the default
   * and an empty list will be returned instead. The node must be
   * an actual list and cannot be just a double.
   *
   * @param path path to node (dot notation)
   * @param def default value or null for an empty list as default
   * @return list of integers
  */
  getDoubleList(path: string, def: number[]): number[];
  /**
   * Gets a list of booleans. Non-valid entries will not be in the list.
   * There will be no null slots. If the list is not defined, the
   * default will be returned. 'null' can be passed for the default
   * and an empty list will be returned instead. The node must be
   * an actual list and cannot be just a boolean,
   *
   * @param path path to node (dot notation)
   * @param def default value or null for an empty list as default
   * @return list of integers
  */
  getBooleanList(path: string, def: boolean[]): boolean[];
  /**
   * Gets a list of vectors. Non-valid entries will not be in the list.
   * There will be no null slots. If the list is not defined, the
   * default will be returned. 'null' can be passed for the default
   * and an empty list will be returned instead. The node must be
   * an actual node and cannot be just a vector,
   *
   * @param path path to node (dot notation)
   * @param def default value or null for an empty list as default
   * @return list of integers
  */
  getVectorList(path: string, def: Vector3[]): Vector3[];
  /**
   * Gets a list of 2D vectors. Non-valid entries will not be in the list.
   * There will be no null slots. If the list is not defined, the
   * default will be returned. 'null' can be passed for the default
   * and an empty list will be returned instead. The node must be
   * an actual node and cannot be just a vector,
   *
   * @param path path to node (dot notation)
   * @param def default value or null for an empty list as default
   * @return list of integers
  */
  getVector2List(path: string, def: Vector2[]): Vector2[];
  /**
   * Gets a list of 2D vectors. Non-valid entries will not be in the list.
   * There will be no null slots. If the list is not defined, the
   * default will be returned. 'null' can be passed for the default
   * and an empty list will be returned instead. The node must be
   * an actual node and cannot be just a vector,
   *
   * @param path path to node (dot notation)
   * @param def default value or null for an empty list as default
   * @return list of integers
  */
  getBlockVector2List(path: string, def: BlockVector2[]): BlockVector2[];
  /**
   * Gets a list of nodes. Non-valid entries will not be in the list.
   * There will be no null slots. If the list is not defined, the
   * default will be returned. 'null' can be passed for the default
   * and an empty list will be returned instead. The node must be
   * an actual node and cannot be just a boolean,
   *
   * @param path path to node (dot notation)
   * @param def default value or null for an empty list as default
   * @return list of integers
  */
  getNodeList(path: string, def: YAMLNode[]): YAMLNode[];
  /**
   * Get a configuration node at a path. If the node doesn't exist or the
   * path does not lead to a node, null will be returned. A node has
   * key/value mappings.
   *
   * @param path the path
   * @return node or null
  */
  getNode(path: string): YAMLNode | null;
  /**
   * Get a list of nodes at a location. If the map at the particular location
   * does not exist or it is not a map, null will be returned.
   *
   * @param path path to node (dot notation)
   * @return map of nodes
  */
  getNodes(path: string): Map<string, YAMLNode>;
  /**
   * Remove the property at a location. This will override existing
   * configuration data to have it conform to key/value mappings.
   *
   * @param path a path
  */
  removeProperty(path: string): void;
  writeDefaults(): boolean;
  setWriteDefaults(writeDefaults: boolean): void;
}
/**
 * YAMLProcessor exception.
*/
export class YAMLProcessorException extends Exception {
  constructor();
  constructor(msg: string);
}

}
declare module 'com.sk89q.worldedit.util.paste' {
import { URL } from 'java.net';
import { Supervisor } from 'com.sk89q.worldedit.util.task';
import { Callable } from 'java.util.concurrent';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
import { Builder } from 'com.sk89q.worldedit.util.formatting.text.TranslatableComponent';
export class EngineHubPaste extends Paster {
  paste(content: string): Callable<URL>;
}
export class Paster {
  paste(content: string): Callable<URL>;
}
export class ActorCallbackPaste {
  /**
   * Submit data to a pastebin service and inform the sender of
   * success or failure.
   *
   * @param supervisor The supervisor instance
   * @param sender The sender
   * @param content The content
   * @param successMessage The message, formatted with {@link String#format(String, Object...)} on success
   * @deprecated Use the Component-based version
  */
  static pastebin(supervisor: Supervisor, sender: Actor, content: string, successMessage: string): void;
  /**
   * Submit data to a pastebin service and inform the sender of
   * success or failure.
   *
   * @param supervisor The supervisor instance
   * @param sender The sender
   * @param content The content
   * @param successMessage The message builder, given the URL as an arg
  */
  static pastebin(supervisor: Supervisor, sender: Actor, content: string, successMessage: Builder): void;
}

}
declare module 'com.sk89q.worldedit.history.change' {
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { Location } from 'com.sk89q.worldedit.util';
import { Entity, BaseEntity } from 'com.sk89q.worldedit.entity';
import { UndoContext } from 'com.sk89q.worldedit.history';
import { BiomeType } from 'com.sk89q.worldedit.world.biome';
import { BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * Represents a biome change that may be undone or replayed.
 *
 * This biome change does not have an {@link Extent} assigned to it because
 * one will be taken from the passed {@link UndoContext}. If the context
 * does not have an extent (it is null), cryptic errors may occur.
 * @deprecated use {@link BiomeChange3D}
*/
export class BiomeChange extends Change {
  /**
   * Create a new biome change.
   *
   * @param position the position
   * @param previous the previous biome
   * @param current the current biome
  */
  constructor(position: BlockVector2, previous: BiomeType, current: BiomeType);
  /**
   * Get the position.
   *
   * @return the position
  */
  getPosition(): BlockVector2;
  /**
   * Get the previous biome.
   *
   * @return the previous biome
  */
  getPrevious(): BiomeType;
  /**
   * Get the current biome.
   *
   * @return the current biome
  */
  getCurrent(): BiomeType;
  /**
   * Perform an undo. This method may not be available if the object
   * was returned from {@link ChangeSet#forwardIterator()}.
   *
   * @param context a context for undo
   * @throws WorldEditException on an error
  */
  undo(context: UndoContext): void;
  /**
   * Perform an redo. This method may not be available if the object
   * was returned from {@link ChangeSet#backwardIterator()} ()}.
   *
   * @param context a context for redo
   * @throws WorldEditException on an error
  */
  redo(context: UndoContext): void;
}
/**
 * Tracks the removal of an entity.
*/
export class EntityRemove extends Change {
  /**
   * Create a new instance.
   *
   * @param location the location
   * @param state the state of the created entity
  */
  constructor(location: Location, state: BaseEntity);
  /**
   * Perform an undo. This method may not be available if the object
   * was returned from {@link ChangeSet#forwardIterator()}.
   *
   * @param context a context for undo
   * @throws WorldEditException on an error
  */
  undo(context: UndoContext): void;
  /**
   * Perform an redo. This method may not be available if the object
   * was returned from {@link ChangeSet#backwardIterator()} ()}.
   *
   * @param context a context for redo
   * @throws WorldEditException on an error
  */
  redo(context: UndoContext): void;
}
/**
 * Describes a change that can be undone or re-applied.
*/
export class Change {
  /**
   * Perform an undo. This method may not be available if the object
   * was returned from {@link ChangeSet#forwardIterator()}.
   *
   * @param context a context for undo
   * @throws WorldEditException on an error
  */
  undo(context: UndoContext): void;
  /**
   * Perform an redo. This method may not be available if the object
   * was returned from {@link ChangeSet#backwardIterator()} ()}.
   *
   * @param context a context for redo
   * @throws WorldEditException on an error
  */
  redo(context: UndoContext): void;
}
/**
 * Logs the creation of an entity and removes the entity upon undo.
*/
export class EntityCreate extends Change {
  /**
   * Create a new instance.
   *
   * @param location the location
   * @param state the state of the created entity
   * @param entity the entity that was created
  */
  constructor(location: Location, state: BaseEntity, entity: Entity);
  /**
   * Perform an undo. This method may not be available if the object
   * was returned from {@link ChangeSet#forwardIterator()}.
   *
   * @param context a context for undo
   * @throws WorldEditException on an error
  */
  undo(context: UndoContext): void;
  /**
   * Perform an redo. This method may not be available if the object
   * was returned from {@link ChangeSet#backwardIterator()} ()}.
   *
   * @param context a context for redo
   * @throws WorldEditException on an error
  */
  redo(context: UndoContext): void;
}
/**
 * Represents a block change that may be undone or replayed.
 *
 * This block change does not have an {@link Extent} assigned to it because
 * one will be taken from the passed {@link UndoContext}. If the context
 * does not have an extent (it is null), cryptic errors may occur.
*/
export class BlockChange extends Change {
  /**
   * Create a new block change.
   *
   * @param position the position
   * @param previous the previous block
   * @param current the current block
  */
  constructor(position: BlockVector3, previous: BP, current: BC);
  /**
   * Get the position.
   *
   * @return the position
  */
  getPosition(): BlockVector3;
  /**
   * Get the previous block.
   *
   * @return the previous block
  */
  getPrevious(): BaseBlock;
  /**
   * Get the current block.
   *
   * @return the current block
  */
  getCurrent(): BaseBlock;
  /**
   * Perform an undo. This method may not be available if the object
   * was returned from {@link ChangeSet#forwardIterator()}.
   *
   * @param context a context for undo
   * @throws WorldEditException on an error
  */
  undo(context: UndoContext): void;
  /**
   * Perform an redo. This method may not be available if the object
   * was returned from {@link ChangeSet#backwardIterator()} ()}.
   *
   * @param context a context for redo
   * @throws WorldEditException on an error
  */
  redo(context: UndoContext): void;
}
/**
 * Represents a biome change that may be undone or replayed.
 *
 * This biome change does not have an {@link Extent} assigned to it because
 * one will be taken from the passed {@link UndoContext}. If the context
 * does not have an extent (it is null), cryptic errors may occur.
*/
export class BiomeChange3D extends Change {
  /**
   * Create a new biome change.
   *
   * @param position the position
   * @param previous the previous biome
   * @param current the current biome
  */
  constructor(position: BlockVector3, previous: BiomeType, current: BiomeType);
  /**
   * Get the position.
   *
   * @return the position
  */
  getPosition(): BlockVector3;
  /**
   * Get the previous biome.
   *
   * @return the previous biome
  */
  getPrevious(): BiomeType;
  /**
   * Get the current biome.
   *
   * @return the current biome
  */
  getCurrent(): BiomeType;
  /**
   * Perform an undo. This method may not be available if the object
   * was returned from {@link ChangeSet#forwardIterator()}.
   *
   * @param context a context for undo
   * @throws WorldEditException on an error
  */
  undo(context: UndoContext): void;
  /**
   * Perform an redo. This method may not be available if the object
   * was returned from {@link ChangeSet#backwardIterator()} ()}.
   *
   * @param context a context for redo
   * @throws WorldEditException on an error
  */
  redo(context: UndoContext): void;
}

}
declare module 'com.sk89q.worldedit.extent.clipboard' {
import { List } from 'java.util';
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { Region } from 'com.sk89q.worldedit.regions';
import { Location } from 'com.sk89q.worldedit.util';
import { ClipboardEntity } from 'com.sk89q.worldedit.extent.clipboard.BlockArrayClipboard';
import { Operation } from 'com.sk89q.worldedit.function.operation';
import { Entity, BaseEntity } from 'com.sk89q.worldedit.entity';
import { BiomeType } from 'com.sk89q.worldedit.world.biome';
import { Extent } from 'com.sk89q.worldedit.extent';
import { BlockState, BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * Specifies an object that implements something suitable as a "clipboard."
*/
export class Clipboard extends Extent {
  /**
   * Get the bounding region of this extent.
   *
   * Implementations should return a copy of the region.
   *
   * @return the bounding region
  */
  getRegion(): Region;
  /**
   * Get the dimensions of the copy, which is at minimum (1, 1, 1).
   *
   * @return the dimensions
  */
  getDimensions(): BlockVector3;
  /**
   * Get the origin point from which the copy was made from.
   *
   * @return the origin
  */
  getOrigin(): BlockVector3;
  /**
   * Set the origin point from which the copy was made from.
   *
   * @param origin the origin
  */
  setOrigin(origin: BlockVector3);
  /**
   * Returns true if the clipboard has biome data. This can be checked since {@link Extent#getBiome(BlockVector3)}
   * strongly suggests returning {@link com.sk89q.worldedit.world.biome.BiomeTypes#OCEAN} instead of `null`
   * if biomes aren't present.
   *
   * @return true if the clipboard has biome data set
  */
  hasBiomes(): boolean;
}
/**
 * Stores block data as a multi-dimensional array of {@link BaseBlock}s and
 * other data as lists or maps.
*/
export class BlockArrayClipboard extends Clipboard {
  /**
   * Create a new instance.
   *
   * The origin will be placed at the region's lowest minimum point.
   *
   * @param region the bounding region
  */
  constructor(region: Region);
  /**
   * Get the bounding region of this extent.
   *
   * Implementations should return a copy of the region.
   *
   * @return the bounding region
  */
  getRegion(): Region;
  /**
   * Get the origin point from which the copy was made from.
   *
   * @return the origin
  */
  getOrigin(): BlockVector3;
  /**
   * Set the origin point from which the copy was made from.
   *
   * @param origin the origin
  */
  setOrigin(origin: BlockVector3);
  /**
   * Get the dimensions of the copy, which is at minimum (1, 1, 1).
   *
   * @return the dimensions
  */
  getDimensions(): BlockVector3;
  /**
   * Get the minimum point in the extent.
   *
   * If the extent is unbounded, then a large (negative) value may
   * be returned.
   *
   * @return the minimum point
  */
  getMinimumPoint(): BlockVector3;
  /**
   * Get the maximum point in the extent.
   *
   * If the extent is unbounded, then a large (positive) value may
   * be returned.
   *
   * @return the maximum point
  */
  getMaximumPoint(): BlockVector3;
  /**
   * Get a list of all entities within the given region.
   *
   * If the extent is not wholly loaded (i.e. a world being simulated in the
   * game will not have every chunk loaded), then this list may not be
   * incomplete.
   *
   * @param region the region in which entities must be contained
   * @return a list of entities
  */
  getEntities(region: Region): Entity[];
  /**
   * Get a list of all entities.
   *
   * If the extent is not wholly loaded (i.e. a world being simulated in the
   * game will not have every chunk loaded), then this list may not be
   * incomplete.
   *
   * @return a list of entities
  */
  getEntities(): Entity[];
  /**
   * Create an entity at the given location.
   *
   * @param entity the entity
   * @param location the location
   * @return a reference to the created entity, or null if the entity could not be created
  */
  createEntity(location: Location, entity: BaseEntity): Entity | null;
  /**
   * Get a snapshot of the block at the given location.
   *
   * If the given position is out of the bounds of the extent, then the behavior
   * is undefined (an air block could be returned). However, `null`
   * should not be returned.
   *
   * The returned block is immutable and is a snapshot of the block at the time
   * of call. It has no position attached to it, so it could be reused in
   * {@link Pattern}s and so on.
   *
   * @param position position of the block
   * @return the block
  */
  getBlock(position: BlockVector3): BlockState;
  /**
   * Get a immutable snapshot of the block at the given location.
   *
   * @param position position of the block
   * @return the block
  */
  getFullBlock(position: BlockVector3): BaseBlock;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<B>(position: BlockVector3, block: B): boolean;
  /**
   * Returns true if the clipboard has biome data. This can be checked since {@link Extent#getBiome(BlockVector3)}
   * strongly suggests returning {@link com.sk89q.worldedit.world.biome.BiomeTypes#OCEAN} instead of `null`
   * if biomes aren't present.
   *
   * @return true if the clipboard has biome data set
  */
  hasBiomes(): boolean;
  /**
   * Get the biome at the given location.
   *
   * If there is no biome available, then the ocean biome should be
   * returned.
   *
   * @param position the (x, z) location to check the biome at
   * @return the biome at the location
   * @deprecated Biomes in Minecraft are 3D now, use {@link InputExtent#getBiome(BlockVector3)}
  */
  getBiome(position: BlockVector3): BiomeType;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector3, biome: BiomeType): boolean;
  /**
   * Return an {@link Operation} that should be called to tie up loose ends
   * (such as to commit changes in a buffer).
   *
   * @return an operation or null if there is none to execute
  */
  commit(): Operation | null;
  /**
   * Get the biome at the given location.
   *
   * If there is no biome available, then the ocean biome should be
   * returned.
   *
   * @param position the (x, z) location to check the biome at
   * @return the biome at the location
   * @deprecated Biomes in Minecraft are 3D now, use {@link InputExtent#getBiome(BlockVector3)}
  */
  getBiome(position: BlockVector2): BiomeType;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(position: BlockVector3, block: T): boolean;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector2, biome: BiomeType): boolean;
}

}
declare module 'com.sk89q.worldedit.command.util.EntityRemover' {
import { Enum } from 'java.lang';
import { Pattern } from 'java.util.regex';
export class Type extends Enum<Type> {
  static readonly ALL: Type;
  static readonly PROJECTILES: Type;
  static readonly ITEMS: Type;
  static readonly FALLING_BLOCKS: Type;
  static readonly PAINTINGS: Type;
  static readonly ITEM_FRAMES: Type;
  static readonly BOATS: Type;
  static readonly MINECARTS: Type;
  static readonly TNT: Type;
  static readonly XP_ORBS: Type;
  static valueOf(name: string): Type;
  static values(): Type[];
  matches(str: string): boolean;
  static findByPattern(str: string): Type | null;
}

}
declare module 'com.sk89q.worldedit.extension.platform' {
import { Logger } from 'java.util.logging';
import { Locale, Set, Collection, List, Map } from 'java.util';
import { ArchiveUnpacker } from 'com.sk89q.worldedit.util.io.file';
import { LazyReference } from 'com.sk89q.worldedit.util.concurrency';
import { ExceptionConverter, WorldEditExceptionConverter } from 'com.sk89q.worldedit.internal.command.exception';
import { CommandManagerServiceImpl } from 'org.enginehub.piston.impl';
import { CommandRegistration } from 'org.enginehub.piston.gen';
import { ResourceLoader } from 'com.sk89q.worldedit.util.io';
import { Player } from 'com.sk89q.worldedit.entity';
import { GameMode } from 'com.sk89q.worldedit.world.gamemode';
import { DynamicStreamHandler } from 'com.sk89q.worldedit.util.logging';
import { Pattern } from 'java.util.regex';
import { HandSide, Direction, SideEffect, Location, Identifiable } from 'com.sk89q.worldedit.util';
import { CommandSuggestionEvent, PlatformUnreadyEvent, PlayerInputEvent, CommandEvent, PlatformReadyEvent, PlatformsRegisteredEvent, BlockInteractEvent } from 'com.sk89q.worldedit.event.platform';
import { CUIEvent } from 'com.sk89q.worldedit.internal.cui';
import { CommandRegistrationHandler } from 'com.sk89q.worldedit.internal.command';
import { TranslationManager } from 'com.sk89q.worldedit.util.translation';
import { Registries } from 'com.sk89q.worldedit.world.registry';
import { Vector3, BlockVector3 } from 'com.sk89q.worldedit.math';
import { SessionOwner } from 'com.sk89q.worldedit.session';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { World, DataFixer } from 'com.sk89q.worldedit.world';
import { AtomicBoolean } from 'java.util.concurrent.atomic';
import { InjectedValueStore } from 'org.enginehub.piston.inject';
import { Enum, RuntimeException, Runnable, Throwable, Cloneable } from 'java.lang';
import { File } from 'java.io';
import { CommandManager } from 'org.enginehub.piston';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { WorldEdit, LocalConfiguration } from 'com.sk89q.worldedit';
import { Extent } from 'com.sk89q.worldedit.extent';
import { Subject } from 'com.sk89q.worldedit.util.auth';
import { BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * Thrown when no capable platform is found.
*/
export class NoCapablePlatformException extends RuntimeException {
  constructor();
  constructor(message: string);
  constructor(message: string, cause: Throwable);
  constructor(cause: Throwable);
}
/**
 * Interface to a {@link Platform}'s watchdog service.
*/
export class Watchdog {
  tick(): void;
}
/**
 * Represents a platform that WorldEdit has been implemented for.
 *
 * It is strongly recommended that implementations extend from
 * {@link AbstractPlatform}.
*/
export class Platform {
  /**
   * Return the resource loader.
   *
   * @return The resource loader
  */
  getResourceLoader(): ResourceLoader;
  getTranslationManager(): TranslationManager;
  /**
   * Gets the registry holder.
   *
   * @return The registry holder
  */
  getRegistries(): Registries;
  /**
   * Gets the Minecraft data version being used by the platform.
   *
   * @return the data version
  */
  getDataVersion(): number;
  /**
   * Get a DataFixer capable of upgrading old data.
   *
   * @return a data fixer, or null if not supported by this platform
  */
  getDataFixer(): DataFixer;
  /**
   * Checks if a mob type is valid.
   *
   * @param type The mob type name to check
   * @return Whether the name is a valid mod type
  */
  isValidMobType(type: string): boolean;
  /**
   * Reload WorldEdit configuration.
  */
  reload(): void;
  /**
   * Schedules the given `task` to be invoked once every
   * `period` ticks after an initial delay of `delay` ticks.
   *
   * @param delay Delay in server ticks before executing first repeat
   * @param period Period in server ticks of the task
   * @param task Task to be executed
   * @return Task id number (-1 if scheduling failed)
  */
  schedule(delay: number, period: number, task: Runnable): number;
  /**
   * Get the watchdog service.
   *
   * @return the watchdog service, or `null` if none
  */
  getWatchdog(): Watchdog | null;
  /**
   * Get a list of available or loaded worlds.
   *
   * @return a list of worlds
  */
  getWorlds(): World[];
  /**
   * Create a duplicate of the given player.
   *
   * The given player may have been provided by a different platform.
   *
   * @param player the player to match
   * @return a matched player, otherwise null
  */
  matchPlayer(player: Player): Player | null;
  /**
   * Create a duplicate of the given world.
   *
   * The given world may have been provided by a different platform.
   *
   * @param world the world to match
   * @return a matched world, otherwise null
  */
  matchWorld(world: World): World | null;
  /**
   * Register the commands contained within the given command manager.
   *
   * 
   *     This method should be ignored if the platform offers a command registration event.
   * 
   *
   * @param commandManager the command manager
  */
  registerCommands(commandManager: CommandManager): void;
  /**
   * Register game hooks.
   *
   * @deprecated Call {@link #setGameHooksEnabled(boolean)} with `true` instead
  */
  registerGameHooks(): void;
  /**
   * Set if the game hooks are enabled for this platform.
  */
  setGameHooksEnabled(enabled: boolean): void;
  /**
   * Get the configuration from this platform.
   *
   * @return the configuration
  */
  getConfiguration(): LocalConfiguration;
  /**
   * Get the version of WorldEdit that this platform provides.
   *
   * This version should match WorldEdit releases because it may be
   * checked to match.
   *
   * @return the version
  */
  getVersion(): string;
  /**
   * Get a friendly name of the platform.
   *
   * The name can be anything (reasonable). An example name may be
   * "Bukkit" or "Forge".
   *
   * @return the platform name
  */
  getPlatformName(): string;
  /**
   * Get the version of the platform, which can be anything.
   *
   * @return the platform version
  */
  getPlatformVersion(): string;
  /**
   * Get a map of advertised capabilities of this platform, where each key
   * in the given map is a supported capability and the respective value
   * indicates the preference for this platform for that given capability.
   *
   * @return a map of capabilities
  */
  getCapabilities(): Map<Capability, Preference>;
  /**
   * Get a set of {@link SideEffect}s supported by this platform.
   *
   * @return A set of supported side effects
  */
  getSupportedSideEffects(): Set<SideEffect>;
}
/**
 * A collection of capabilities that a {@link Platform} may support.
*/
export class Capability extends Enum<Capability> {
  /**
   * The capability of registering game hooks to catch events such as
   * a player clicking a block.
  */
  static readonly GAME_HOOKS: Capability;
  /**
   * The capability of providing configuration.
  */
  static readonly CONFIGURATION: Capability;
  /**
   * The capability of handling user commands entered in chat or console.
  */
  static readonly USER_COMMANDS: Capability;
  /**
   * The capability of a platform to assess whether a given
   * {@link Actor} has sufficient authorization to perform a task.
  */
  static readonly PERMISSIONS: Capability;
  /**
   * The capability of a platform to dispatch WorldEditCUI events.
  */
  static readonly WORLDEDIT_CUI: Capability;
  /**
   * The capability of a platform to perform modifications to a world.
  */
  static readonly WORLD_EDITING: Capability;
  static valueOf(name: string): Capability;
  static values(): Capability[];
}
/**
 * Implements a platform with multiple connected users.
*/
export class MultiUserPlatform extends Platform {
  /**
   * Get a list of connected users.
   *
   * @return a list of connected users
  */
  getConnectedUsers(): Collection<Actor>;
}
/**
 * An abstract implementation of both a {@link Actor} and a {@link Player}
 * that is intended for implementations of WorldEdit to use to wrap
 * players that make use of WorldEdit.
*/
export class AbstractPlayerActor extends Actor {
  /**
   * Get the extent that this actor is in.
   *
   * @return the extent
  */
  getExtent(): Extent;
  /**
   * Returns true if the entity is holding a pick axe.
   *
   * @return whether a pick axe is held
  */
  isHoldingPickAxe(): boolean;
  /**
   * Find a position for the actor to stand that is not inside a block.
   * Blocks above the player will be iteratively tested until there is
   * a series of two free blocks. The actor will be teleported to
   * that free position.
   *
   * @param searchPos search position
  */
  findFreePosition(searchPos: Location): void;
  /**
   * Set the actor on the ground.
   *
   * @param searchPos The location to start searching from
  */
  setOnGround(onGround: Location);
  /**
   * Find a position for the actor to stand that is not inside a block.
   * Blocks above the player will be iteratively tested until there is
   * a series of two free blocks. The actor will be teleported to
   * that free position.
   *
   * @param searchPos search position
  */
  findFreePosition(): void;
  /**
   * Go up one level to the next free space above.
   *
   * @return true if a spot was found
  */
  ascendLevel(): boolean;
  /**
   * Go up one level to the next free space above.
   *
   * @return true if a spot was found
  */
  descendLevel(): boolean;
  /**
   * Ascend to the ceiling above.
   *
   * @param clearance How many blocks to leave above the player's head
   * @return whether the player was moved
  */
  ascendToCeiling(clearance: number): boolean;
  /**
   * Ascend to the ceiling above.
   *
   * @param clearance How many blocks to leave above the player's head
   * @return whether the player was moved
  */
  ascendToCeiling(clearance: number, alwaysGlass: boolean): boolean;
  /**
   * Just go up.
   *
   * @param distance How far up to teleport
   * @return whether the player was moved
  */
  ascendUpwards(distance: number): boolean;
  /**
   * Just go up.
   *
   * @param distance How far up to teleport
   * @return whether the player was moved
  */
  ascendUpwards(distance: number, alwaysGlass: boolean): boolean;
  /**
   * Make the player float in the given blocks.
   *
   * @param x The X coordinate of the block to float in
   * @param y The Y coordinate of the block to float in
   * @param z The Z coordinate of the block to float in
  */
  floatAt(x: number, y: number, z: number, alwaysGlass: boolean): void;
  /**
   * Get the point of the block that is being stood upon.
   *
   * @return point
  */
  getBlockOn(): Location;
  /**
   * Get the point of the block being looked at. May return null.
   * Will return the farthest away air block if useLastBlock is true and no other block is found.
   *
   * @param range how far to checks for blocks
   * @param useLastBlock try to return the last valid air block found
   * @return point
  */
  getBlockTrace(range: number, useLastBlock: boolean): Location;
  /**
   * Get the face that the player is looking at.
   *
   * @param range the range
   * @param useLastBlock try to return the last valid air block found
   * @return a face
  */
  getBlockTraceFace(range: number, useLastBlock: boolean): Location;
  /**
   * Get the point of the block being looked at. May return null.
   * Will return the farthest away air block if useLastBlock is true and no other block is found.
   *
   * @param range how far to checks for blocks
   * @param useLastBlock try to return the last valid air block found
   * @return point
  */
  getBlockTrace(range: number, useLastBlock: boolean, stopMask: Mask | null): Location;
  /**
   * Get the face that the player is looking at.
   *
   * @param range the range
   * @param useLastBlock try to return the last valid air block found
   * @return a face
  */
  getBlockTraceFace(range: number, useLastBlock: boolean, stopMask: Mask | null): Location;
  /**
   * Get the point of the block being looked at. May return null.
   * Will return the farthest away air block if useLastBlock is true and no other block is found.
   *
   * @param range how far to checks for blocks
   * @param useLastBlock try to return the last valid air block found
   * @return point
  */
  getBlockTrace(range: number): Location;
  /**
   * Get the point of the block being looked at. May return null.
   *
   * @param range How far to checks for blocks
   * @return point
  */
  getSolidBlockTrace(range: number): Location;
  /**
   * Get the player's cardinal direction (N, W, NW, etc.). May return null.
   *
   * @return the direction
  */
  getCardinalDirection(): Direction;
  /**
   * Get the player's cardinal direction (N, W, NW, etc.) with an offset. May return null.
   * @param yawOffset offset that is added to the player's yaw before determining the cardinal direction
   *
   * @return the direction
  */
  getCardinalDirection(yawOffset: number): Direction;
  /**
   * Get the Block that the player is holding.
   *
   * @return the item id of the item the player is holding
  */
  getBlockInHand(handSide: HandSide): BaseBlock;
  /**
   * Pass through the wall that you are looking at.
   *
   * @param range How far to checks for blocks
   * @return whether the player was pass through
  */
  passThroughForwardWall(range: number): boolean;
  /**
   * Attempt to move the player.
   *
   * 
   * This action may fail, due to other mods cancelling the move.
   * If so, this method will return `false`.
   * 
   *
   * @param pos where to move them
   * @param pitch the pitch (up/down) of the player's view in degrees
   * @param yaw the yaw (left/right) of the player's view in degrees
   * @return if the move was able to occur
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  trySetPosition(pos: Vector3): boolean;
  /**
   * Open a file open dialog.
   *
   * @param extensions null to allow all
   * @return the selected file or null if something went wrong
  */
  openFileOpenDialog(extensions: string[]): File;
  /**
   * Open a file save dialog.
   *
   * @param extensions null to allow all
   * @return the selected file or null if something went wrong
  */
  openFileSaveDialog(extensions: string[]): File;
  /**
   * Returns true if the actor can destroy bedrock.
   *
   * @return true if bedrock can be broken by the actor
  */
  canDestroyBedrock(): boolean;
  /**
   * Send a CUI event.
   *
   * @param event the event
  */
  dispatchCUIEvent(event: CUIEvent): void;
  equals(other: any): boolean;
  hashCode(): number;
  /**
   * Check whether this subject has been granted the given permission
   * and throw an exception on error.
   *
   * @param permission the permission
   * @throws AuthorizationException thrown if not permitted
  */
  checkPermission(permission: string): void;
  /**
   * Return whether this actor is a player.
   *
   * @return true if a player
  */
  isPlayer(): boolean;
  /**
   * Return this actor's game mode.
   *
   * @return the game mode
  */
  getGameMode(): GameMode;
  /**
   * Sets the player to the given game mode.
   *
   * @param gameMode The game mode
  */
  setGameMode(gameMode: GameMode);
  clone(): any;
  /**
   * Remove this entity from it container.
   *
   * @return true if removal was successful
  */
  remove(): boolean;
  /**
   * Sends a fake block to the client.
   *
   * 
   *     This block isn't real.
   * 
   *
   * @param pos The position of the block
   * @param block The block to send, null to reset
  */
  sendFakeBlock<B>(pos: BlockVector3, block: B): void;
  /**
   * Attempt to move the player.
   *
   * 
   * This action may fail, due to other mods cancelling the move.
   * If so, this method will return `false`.
   * 
   *
   * @param pos where to move them
   * @param pitch the pitch (up/down) of the player's view in degrees
   * @param yaw the yaw (left/right) of the player's view in degrees
   * @return if the move was able to occur
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  trySetPosition(pos: Vector3, pitch: number, yaw: number): boolean;
}
export interface AbstractPlayerActor extends Actor, Player, Cloneable {}
/**
 * An object that can perform actions in WorldEdit.
*/
export class Actor extends Identifiable {
  /**
   * Get the name of the actor.
   *
   * @return String
  */
  getName(): string;
  /**
   * Gets the display name of the actor. This can be a nickname, and is not guaranteed to be unique.
   *
   * @return The display name
  */
  getDisplayName(): string;
  /**
   * Print a message.
   *
   * @param msg The message text
   * @deprecated Use component-based functions (print)
  */
  printRaw(msg: string): void;
  /**
   * Print a WorldEdit message.
   *
   * @param msg The message text
   * @deprecated Use component-based functions (printDebug)
  */
  printDebug(msg: string): void;
  /**
   * Print a WorldEdit message.
   *
   * @param msg The message text
   * @deprecated Use component-based functions (printInfo)
  */
  print(msg: string): void;
  /**
   * Print a WorldEdit error.
   *
   * @param msg The error message text
   * @deprecated Use component-based functions (printError)
  */
  printError(msg: string): void;
  /**
   * Print a WorldEdit error.
   *
   * @param component The component to print
  */
  printError(component: Component): void;
  /**
   * Print a WorldEdit message.
   *
   * @param component The component to print
  */
  printInfo(component: Component): void;
  /**
   * Print a WorldEdit message.
   *
   * @param component The component to print
  */
  printDebug(component: Component): void;
  /**
   * Print a {@link Component}.
   *
   * @param component The component to print
  */
  print(component: Component): void;
  /**
   * Returns true if the actor can destroy bedrock.
   *
   * @return true if bedrock can be broken by the actor
  */
  canDestroyBedrock(): boolean;
  /**
   * Return whether this actor is a player.
   *
   * @return true if a player
  */
  isPlayer(): boolean;
  /**
   * Open a file open dialog.
   *
   * @param extensions null to allow all
   * @return the selected file or null if something went wrong
  */
  openFileOpenDialog(extensions: string[]): File;
  /**
   * Open a file save dialog.
   *
   * @param extensions null to allow all
   * @return the selected file or null if something went wrong
  */
  openFileSaveDialog(extensions: string[]): File;
  /**
   * Send a CUI event.
   *
   * @param event the event
  */
  dispatchCUIEvent(event: CUIEvent): void;
  /**
   * Get the locale of this actor.
   *
   * @return The locale
  */
  getLocale(): Locale;
  /**
   * Sends any relevant notices to the user when they first use WorldEdit in a session.
  */
  sendAnnouncements(): void;
}
export interface Actor extends Identifiable, SessionOwner, Subject {}
/**
 * Handles the registration and invocation of commands.
 *
 * This class is primarily for internal usage.
*/
export class PlatformCommandManager {
  static readonly COMMAND_CLEAN_PATTERN: Pattern;
  /**
   * Internal use only.
  */
  registerSubCommands<CI>(name: string, aliases: string[], desc: string, registration: CommandRegistration<CI>, instance: CI): void;
  getExceptionConverter(): ExceptionConverter;
  handleCommand(event: CommandEvent): void;
  handleCommandSuggestion(event: CommandSuggestionEvent): void;
  /**
   * Get the command manager instance.
   *
   * @return the command manager
  */
  getCommandManager(): CommandManager;
}
export class Locatable {
  /**
   * Get the location of this actor.
   *
   * @return the location of the actor
  */
  getLocation(): Location;
  /**
   * Get the location of this actor in block coordinates.
   *
   * @return the block location of the actor
  */
  getBlockLocation(): Location;
  /**
   * Sets the location of this actor.
   *
   * @param location the new location of the actor
   * @return if the teleport succeeded
  */
  setLocation(location: Location);
  /**
   * Sets the position of this actor.
   *
   * @param pos where to move them
   * @deprecated This method may fail without indication. Use {@link #trySetPosition(Vector3)}
   *      instead
  */
  setPosition(position: Vector3);
  /**
   * Attempts to set the position of this actor.
   *
   * 
   * This action may fail, due to other mods cancelling the move.
   * If so, this method will return `false`.
   * 
   *
   * @param pos the position to set
   * @return if the position was able to be set
  */
  trySetPosition(pos: Vector3): boolean;
  /**
   * Get the extent that this actor is in.
   *
   * @return the extent
  */
  getExtent(): Extent;
}
/**
 * Manages registered {@link Platform}s for WorldEdit. Platforms are
 * implementations of WorldEdit.
 *
 * This class is thread-safe.
*/
export class PlatformManager {
  /**
   * Create a new platform manager.
   *
   * @param worldEdit the WorldEdit instance
  */
  constructor(worldEdit: WorldEdit);
  /**
   * Register a platform with WorldEdit.
   *
   * @param platform the platform
  */
  register(platform: Platform): void;
  /**
   * Unregister a platform from WorldEdit.
   *
   * If the platform has been chosen for any capabilities, then a new
   * platform will be found.
   *
   * @param platform the platform
  */
  unregister(platform: Platform): boolean;
  /**
   * Get the preferred platform for handling a certain capability. Throws if none are available.
   *
   * @param capability the capability
   * @return the platform
   * @throws NoCapablePlatformException thrown if no platform is capable
  */
  queryCapability(capability: Capability): Platform;
  /**
   * Get a list of loaded platforms.
   *
   * The returned list is a copy of the original and is mutable.
   *
   * @return a list of platforms
  */
  getPlatforms(): Platform[];
  /**
   * Given a world, possibly return the same world but using a different
   * platform preferred for world editing operations.
   *
   * @param base the world to match
   * @return the preferred world, if one was found, otherwise the given world
  */
  getWorldForEditing(base: World): World;
  /**
   * Given an actor, return a new one that may use a different platform
   * for permissions and world editing.
   *
   * @param base the base actor to match
   * @return a new delegate actor
  */
  createProxyActor<T>(base: T): T;
  /**
   * Get the command manager.
   *
   * @return the command manager
  */
  getPlatformCommandManager(): PlatformCommandManager;
  /**
   * Get the current configuration.
   *
   * If no platform has been registered yet, then a default configuration
   * will be returned.
   *
   * @return the configuration
  */
  getConfiguration(): LocalConfiguration;
  getSupportedSideEffects(): Collection<SideEffect>;
  /**
   * You shouldn't have been calling this anyways, but this is now deprecated. Either don't
   * fire this event at all, or fire the new event via the event bus if you're a platform.
  */
  handlePlatformReady(event: PlatformReadyEvent): void;
  /**
   * Internal, do not call.
  */
  handlePlatformsRegistered(event: PlatformsRegisteredEvent): void;
  /**
   * Internal, do not call.
  */
  handleNewPlatformReady(event: PlatformReadyEvent): void;
  /**
   * Internal, do not call.
  */
  handleNewPlatformUnready(event: PlatformUnreadyEvent): void;
  handleBlockInteract(event: BlockInteractEvent): void;
  handlePlayerInput(event: PlayerInputEvent): void;
}
export class AbstractNonPlayerActor extends Actor {
  /**
   * Returns true if the actor can destroy bedrock.
   *
   * @return true if bedrock can be broken by the actor
  */
  canDestroyBedrock(): boolean;
  /**
   * Return whether this actor is a player.
   *
   * @return true if a player
  */
  isPlayer(): boolean;
  /**
   * Open a file open dialog.
   *
   * @param extensions null to allow all
   * @return the selected file or null if something went wrong
  */
  openFileOpenDialog(extensions: string[]): File;
  /**
   * Open a file save dialog.
   *
   * @param extensions null to allow all
   * @return the selected file or null if something went wrong
  */
  openFileSaveDialog(extensions: string[]): File;
  /**
   * Send a CUI event.
   *
   * @param event the event
  */
  dispatchCUIEvent(event: CUIEvent): void;
}
/**
 * Indicates the preference of a platform for a particular
 * {@link Capability}.
*/
export class Preference extends Enum<Preference> {
  /**
   * Indicates that the platform should be preferred for a given capability.
  */
  static readonly PREFERRED: Preference;
  /**
   * Indicates that preference for a platform is neutral for a given
   * capability.
  */
  static readonly NORMAL: Preference;
  /**
   * Indicates that there should not be a preference for the platform for
   * a given capability.
  */
  static readonly PREFER_OTHERS: Preference;
  static valueOf(name: string): Preference;
  static values(): Preference[];
  /**
   * Returns whether this given preference is preferred over the given
   * other preference.
   *
   * @param other the other preference
   * @return true if this preference is greater
  */
  isPreferredOver(other: Preference): boolean;
}
/**
 * An abstract implementation of {@link Platform}.
*/
export class AbstractPlatform extends Platform {
  /**
   * Return the resource loader.
   *
   * @return The resource loader
  */
  getResourceLoader(): ResourceLoader;
  getTranslationManager(): TranslationManager;
  /**
   * Schedules the given `task` to be invoked once every
   * `period` ticks after an initial delay of `delay` ticks.
   *
   * @param delay Delay in server ticks before executing first repeat
   * @param period Period in server ticks of the task
   * @param task Task to be executed
   * @return Task id number (-1 if scheduling failed)
  */
  schedule(delay: number, period: number, task: Runnable): number;
  /**
   * Get a list of available or loaded worlds.
   *
   * @return a list of worlds
  */
  getWorlds(): World[];
  /**
   * Get a DataFixer capable of upgrading old data.
   *
   * @return a data fixer, or null if not supported by this platform
  */
  getDataFixer(): DataFixer;
  /**
   * Reload WorldEdit configuration.
  */
  reload(): void;
}

}
declare module 'com.sk89q.worldedit.registry' {
import { Iterable } from 'java.lang';
import { Set, Iterator, Collection, Map } from 'java.util';
export class NamespacedRegistry<V> extends Registry<V> {
  constructor(name: string);
  constructor(name: string, defaultNamespace: string);
  get(key: string): V | null;
  register(key: string, value: V): V;
  /**
   * Get a set of the namespaces of all registered keys.
   *
   * @return set of namespaces
  */
  getKnownNamespaces(): Set<string>;
  /**
   * Get the default namespace for this registry.
   *
   * @return the default namespace
  */
  getDefaultNamespace(): string;
}
export class Category<T> {
  getId(): string;
  getAll(): Set<T>;
  /**
   * Checks if this category contains `object`.
   *
   * @param object the object
   * @return `true` if this category contains the object
  */
  contains(object: T): boolean;
  invalidateCache(): void;
  toString(): string;
}
export class Registry<V> extends Iterable<V> {
  constructor(name: string);
  getName(): string;
  get(key: string): V | null;
  register(key: string, value: V): V;
  keySet(): Set<string>;
  values(): Collection<V>;
  iterator(): Iterator<V>;
}
/**
 * Represents an objects that can be added to a registry and referenced by an id which is unique within its registry.
*/
export class Keyed {
  /**
   * The id of this object in the registry. Must be unique, and lowercase. Certain registries (e.g Namespaced ones) may have additional restrictions.
   * @return an id
  */
  getId(): string;
}

}
declare module 'com.sk89q.worldedit.util.auth' {
import { Throwable } from 'java.lang';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { WorldEditException } from 'com.sk89q.worldedit';
import { CommandLocals } from 'com.sk89q.minecraft.util.commands';
/**
 * Tests whether permission is granted.
*/
export class Authorizer {
  /**
   * Tests whether permission is granted for the given context.
   *
   * @param locals locals
   * @param permission the permission string
   * @return true if permitted
  */
  testPermission(locals: CommandLocals, permission: string): boolean;
}
/**
 * A subject has authorization attached to it.
*/
export class Subject {
  /**
   * Get a list of groups that this subject is a part of.
   *
   * @return an array containing a group name per entry
  */
  getGroups(): string[];
  /**
   * Check whether this subject has been granted the given permission
   * and throw an exception on error.
   *
   * @param permission the permission
   * @throws AuthorizationException thrown if not permitted
  */
  checkPermission(permission: string): void;
  /**
   * Return whether this subject has the given permission.
   *
   * @param permission the permission
   * @return true if permission is granted
  */
  hasPermission(permission: string): boolean;
}
/**
 * An implementation of {@link Authorizer} that always returns false for
 * tests of permissions.
*/
export class NullAuthorizer extends Authorizer {
  /**
   * Tests whether permission is granted for the given context.
   *
   * @param locals locals
   * @param permission the permission string
   * @return true if permitted
  */
  testPermission(locals: CommandLocals, permission: string): boolean;
}
/**
 * Raised when authorization is not granted.
*/
export class AuthorizationException extends WorldEditException {
  constructor();
  constructor(message: Component);
  constructor(message: string);
  constructor(message: Component, cause: Throwable);
  constructor(message: string, cause: Throwable);
  constructor(cause: Throwable);
}

}
declare module 'com.sk89q.worldedit.extent' {
import { ChangeSet } from 'com.sk89q.worldedit.history.changeset';
import { Set, List } from 'java.util';
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { Region } from 'com.sk89q.worldedit.regions';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { Location } from 'com.sk89q.worldedit.util';
import { Operation } from 'com.sk89q.worldedit.function.operation';
import { Entity, BaseEntity } from 'com.sk89q.worldedit.entity';
import { BiomeType } from 'com.sk89q.worldedit.world.biome';
import { BlockState, BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * A world, portion of a world, clipboard, or other object that can have blocks
 * set or entities placed.
 *
 * @see InputExtent the get____() portion
 * @see OutputExtent the set____() portion
*/
export class Extent extends InputExtent {
  /**
   * Get the minimum point in the extent.
   *
   * If the extent is unbounded, then a large (negative) value may
   * be returned.
   *
   * @return the minimum point
  */
  getMinimumPoint(): BlockVector3;
  /**
   * Get the maximum point in the extent.
   *
   * If the extent is unbounded, then a large (positive) value may
   * be returned.
   *
   * @return the maximum point
  */
  getMaximumPoint(): BlockVector3;
  /**
   * Get a list of all entities within the given region.
   *
   * If the extent is not wholly loaded (i.e. a world being simulated in the
   * game will not have every chunk loaded), then this list may not be
   * incomplete.
   *
   * @param region the region in which entities must be contained
   * @return a list of entities
  */
  getEntities(region: Region): Entity[];
  /**
   * Get a list of all entities.
   *
   * If the extent is not wholly loaded (i.e. a world being simulated in the
   * game will not have every chunk loaded), then this list may not be
   * incomplete.
   *
   * @return a list of entities
  */
  getEntities(): Entity[];
  /**
   * Create an entity at the given location.
   *
   * @param entity the entity
   * @param location the location
   * @return a reference to the created entity, or null if the entity could not be created
  */
  createEntity(location: Location, entity: BaseEntity): Entity | null;
}
export interface Extent extends InputExtent, OutputExtent {}
/**
 * Accepts block and entity changes.
*/
export class OutputExtent {
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(position: BlockVector3, block: T): boolean;
  /**
   * Check if this extent fully supports 3D biomes.
   *
   * 
   * If `false`, the extent only visually reads biomes from `y = 0`.
   * The biomes will still be set in 3D, but the client will only see the one at
   * `y = 0`. It is up to the caller to determine if they want to set that
   * biome instead, or simply warn the actor.
   * 
   *
   * @return if the extent fully supports 3D biomes
  */
  fullySupports3DBiomes(): boolean;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector2, biome: BiomeType): boolean;
  /**
   * Set the biome.
   *
   * 
   *     As implementation varies per Minecraft version, this may set more than
   *     this position's biome. On versions prior to 1.15, this will set the entire
   *     column. On later versions it will set the 4x4x4 cube.
   * 
   *
   * @param position the (x, y, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  setBiome(position: BlockVector3, biome: BiomeType): boolean;
  /**
   * Return an {@link Operation} that should be called to tie up loose ends
   * (such as to commit changes in a buffer).
   *
   * @return an operation or null if there is none to execute
  */
  commit(): Operation | null;
}
/**
 * Requires that all mutating methods pass a given {@link Mask}.
*/
export class MaskingExtent extends AbstractDelegateExtent {
  /**
   * Create a new instance.
   *
   * @param extent the extent
   * @param mask the mask
  */
  constructor(extent: Extent, mask: Mask);
  /**
   * Get the mask.
   *
   * @return the mask
  */
  getMask(): Mask;
  /**
   * Set a mask.
   *
   * @param mask a mask
  */
  setMask(mask: Mask);
  setBlock<B>(location: BlockVector3, block: B): boolean;
  setBlock<T>(location: BlockVector3, block: T): boolean;
}
/**
 * An extent that can report back if an operation fails due to the extent(s) below it.
 *
 * Internal use only.
*/
export class TracingExtent extends AbstractDelegateExtent {
  /**
   * Create a new instance.
   *
   * @param extent the extent
  */
  constructor(extent: Extent);
  isActive(): boolean;
  getTouchedLocations(): Set<BlockVector3>;
  setBlock<T>(location: BlockVector3, block: T): boolean;
  setBiome(position: BlockVector3, biome: BiomeType): boolean;
  createEntity(location: Location, entity: BaseEntity): Entity | null;
  toString(): string;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector2, biome: BiomeType): boolean;
}
/**
 * A base class for {@link Extent}s that merely passes extents onto another.
*/
export class AbstractDelegateExtent extends Extent {
  /**
   * Get the extent.
   *
   * @return the extent
  */
  getExtent(): Extent;
  /**
   * Get a snapshot of the block at the given location.
   *
   * If the given position is out of the bounds of the extent, then the behavior
   * is undefined (an air block could be returned). However, `null`
   * should not be returned.
   *
   * The returned block is immutable and is a snapshot of the block at the time
   * of call. It has no position attached to it, so it could be reused in
   * {@link Pattern}s and so on.
   *
   * @param position position of the block
   * @return the block
  */
  getBlock(position: BlockVector3): BlockState;
  /**
   * Get a immutable snapshot of the block at the given location.
   *
   * @param position position of the block
   * @return the block
  */
  getFullBlock(position: BlockVector3): BaseBlock;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(location: BlockVector3, block: T): boolean;
  /**
   * Create an entity at the given location.
   *
   * @param entity the entity
   * @param location the location
   * @return a reference to the created entity, or null if the entity could not be created
  */
  createEntity(location: Location, entity: BaseEntity): Entity | null;
  /**
   * Get a list of all entities.
   *
   * If the extent is not wholly loaded (i.e. a world being simulated in the
   * game will not have every chunk loaded), then this list may not be
   * incomplete.
   *
   * @return a list of entities
  */
  getEntities(): Entity[];
  /**
   * Get a list of all entities within the given region.
   *
   * If the extent is not wholly loaded (i.e. a world being simulated in the
   * game will not have every chunk loaded), then this list may not be
   * incomplete.
   *
   * @param region the region in which entities must be contained
   * @return a list of entities
  */
  getEntities(region: Region): Entity[];
  /**
   * Check if this extent fully supports 3D biomes.
   *
   * 
   * If `false`, the extent only visually reads biomes from `y = 0`.
   * The biomes will still be set in 3D, but the client will only see the one at
   * `y = 0`. It is up to the caller to determine if they want to set that
   * biome instead, or simply warn the actor.
   * 
   *
   * @return if the extent fully supports 3D biomes
  */
  fullySupports3DBiomes(): boolean;
  /**
   * Get the biome at the given location.
   *
   * If there is no biome available, then the ocean biome should be
   * returned.
   *
   * @param position the (x, z) location to check the biome at
   * @return the biome at the location
   * @deprecated Biomes in Minecraft are 3D now, use {@link InputExtent#getBiome(BlockVector3)}
  */
  getBiome(position: BlockVector3): BiomeType;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector3, biome: BiomeType): boolean;
  /**
   * Get the minimum point in the extent.
   *
   * If the extent is unbounded, then a large (negative) value may
   * be returned.
   *
   * @return the minimum point
  */
  getMinimumPoint(): BlockVector3;
  /**
   * Get the maximum point in the extent.
   *
   * If the extent is unbounded, then a large (positive) value may
   * be returned.
   *
   * @return the maximum point
  */
  getMaximumPoint(): BlockVector3;
  /**
   * Return an {@link Operation} that should be called to tie up loose ends
   * (such as to commit changes in a buffer).
   *
   * @return an operation or null if there is none to execute
  */
  commit(): Operation | null;
  /**
   * Get the biome at the given location.
   *
   * If there is no biome available, then the ocean biome should be
   * returned.
   *
   * @param position the (x, z) location to check the biome at
   * @return the biome at the location
   * @deprecated Biomes in Minecraft are 3D now, use {@link InputExtent#getBiome(BlockVector3)}
  */
  getBiome(position: BlockVector2): BiomeType;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector2, biome: BiomeType): boolean;
}
/**
 * An extent that returns air blocks for all blocks and does not
 * pass on any changes.
*/
export class NullExtent extends Extent {
  /**
   * Get the minimum point in the extent.
   *
   * If the extent is unbounded, then a large (negative) value may
   * be returned.
   *
   * @return the minimum point
  */
  getMinimumPoint(): BlockVector3;
  /**
   * Get the maximum point in the extent.
   *
   * If the extent is unbounded, then a large (positive) value may
   * be returned.
   *
   * @return the maximum point
  */
  getMaximumPoint(): BlockVector3;
  /**
   * Get a list of all entities within the given region.
   *
   * If the extent is not wholly loaded (i.e. a world being simulated in the
   * game will not have every chunk loaded), then this list may not be
   * incomplete.
   *
   * @param region the region in which entities must be contained
   * @return a list of entities
  */
  getEntities(region: Region): Entity[];
  /**
   * Get a list of all entities.
   *
   * If the extent is not wholly loaded (i.e. a world being simulated in the
   * game will not have every chunk loaded), then this list may not be
   * incomplete.
   *
   * @return a list of entities
  */
  getEntities(): Entity[];
  /**
   * Create an entity at the given location.
   *
   * @param entity the entity
   * @param location the location
   * @return a reference to the created entity, or null if the entity could not be created
  */
  createEntity(location: Location, entity: BaseEntity): Entity | null;
  /**
   * Get a snapshot of the block at the given location.
   *
   * If the given position is out of the bounds of the extent, then the behavior
   * is undefined (an air block could be returned). However, `null`
   * should not be returned.
   *
   * The returned block is immutable and is a snapshot of the block at the time
   * of call. It has no position attached to it, so it could be reused in
   * {@link Pattern}s and so on.
   *
   * @param position position of the block
   * @return the block
  */
  getBlock(position: BlockVector3): BlockState;
  /**
   * Get a immutable snapshot of the block at the given location.
   *
   * @param position position of the block
   * @return the block
  */
  getFullBlock(position: BlockVector3): BaseBlock;
  /**
   * Get the biome at the given location.
   *
   * If there is no biome available, then the ocean biome should be
   * returned.
   *
   * @param position the (x, z) location to check the biome at
   * @return the biome at the location
   * @deprecated Biomes in Minecraft are 3D now, use {@link InputExtent#getBiome(BlockVector3)}
  */
  getBiome(position: BlockVector3): BiomeType;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<B>(position: BlockVector3, block: B): boolean;
  /**
   * Check if this extent fully supports 3D biomes.
   *
   * 
   * If `false`, the extent only visually reads biomes from `y = 0`.
   * The biomes will still be set in 3D, but the client will only see the one at
   * `y = 0`. It is up to the caller to determine if they want to set that
   * biome instead, or simply warn the actor.
   * 
   *
   * @return if the extent fully supports 3D biomes
  */
  fullySupports3DBiomes(): boolean;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector3, biome: BiomeType): boolean;
  /**
   * Return an {@link Operation} that should be called to tie up loose ends
   * (such as to commit changes in a buffer).
   *
   * @return an operation or null if there is none to execute
  */
  commit(): Operation | null;
  /**
   * Get the biome at the given location.
   *
   * If there is no biome available, then the ocean biome should be
   * returned.
   *
   * @param position the (x, z) location to check the biome at
   * @return the biome at the location
   * @deprecated Biomes in Minecraft are 3D now, use {@link InputExtent#getBiome(BlockVector3)}
  */
  getBiome(position: BlockVector2): BiomeType;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(position: BlockVector3, block: T): boolean;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector2, biome: BiomeType): boolean;
}
/**
 * Provides the current state of blocks, entities, and so on.
*/
export class InputExtent {
  /**
   * Get a snapshot of the block at the given location.
   *
   * If the given position is out of the bounds of the extent, then the behavior
   * is undefined (an air block could be returned). However, `null`
   * should not be returned.
   *
   * The returned block is immutable and is a snapshot of the block at the time
   * of call. It has no position attached to it, so it could be reused in
   * {@link Pattern}s and so on.
   *
   * @param position position of the block
   * @return the block
  */
  getBlock(position: BlockVector3): BlockState;
  /**
   * Get a immutable snapshot of the block at the given location.
   *
   * @param position position of the block
   * @return the block
  */
  getFullBlock(position: BlockVector3): BaseBlock;
  /**
   * Get the biome at the given location.
   *
   * If there is no biome available, then the ocean biome should be
   * returned.
   *
   * @param position the (x, z) location to check the biome at
   * @return the biome at the location
   * @deprecated Biomes in Minecraft are 3D now, use {@link InputExtent#getBiome(BlockVector3)}
  */
  getBiome(position: BlockVector2): BiomeType;
  /**
   * Get the biome at the given location.
   *
   * 
   *     If there is no biome available, then the ocean biome should be
   *     returned.
   * 
   *
   * 
   *     As implementation varies per Minecraft version, this may not exactly get
   *     this positions biome. On versions prior to 1.15, this will get the entire
   *     column. On later versions it will get the 4x4x4 cube's biome.
   * 
   *
   * @param position the (x, y, z) location to check the biome at
   * @return the biome at the location
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  getBiome(position: BlockVector3): BiomeType;
}
/**
 * Base extent class for buffering changes between {@link #setBlock(BlockVector3, BlockStateHolder)}
 * and the delegate extent. This class ensures that {@link #getBlock(BlockVector3)} is properly
 * handled, by returning buffered blocks.
*/
export class AbstractBufferingExtent extends AbstractDelegateExtent {
  setBlock<T>(location: BlockVector3, block: T): boolean;
  getBlock(position: BlockVector3): BlockState;
  getFullBlock(position: BlockVector3): BaseBlock;
}
/**
 * Stores changes to a {@link ChangeSet}.
*/
export class ChangeSetExtent extends AbstractDelegateExtent {
  /**
   * Create a new instance.
   *
   * @param extent the extent
   * @param changeSet the change set
  */
  constructor(extent: Extent, changeSet: ChangeSet);
  setBlock<B>(location: BlockVector3, block: B): boolean;
  setBiome(position: BlockVector3, biome: BiomeType): boolean;
  createEntity(location: Location, state: BaseEntity): Entity | null;
  getEntities(): Entity[];
  getEntities(region: Region): Entity[];
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(location: BlockVector3, block: T): boolean;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector2, biome: BiomeType): boolean;
}

}
declare module 'com.sk89q.worldedit.math.transform' {
import { Collection } from 'java.util';
import { Vector3, BlockVector3 } from 'com.sk89q.worldedit.math';
import { Location } from 'com.sk89q.worldedit.util';
/**
 * An affine transform.
 *
 * This class is from the
 * JavaGeom project,
 * which is licensed under LGPL v2.1.
*/
export class AffineTransform extends Transform {
  /**
   * Creates a new affine transform3D set to the identity.
  */
  constructor();
  constructor(coefs: number[]);
  constructor(xx: number, yx: number, zx: number, tx: number, xy: number, yy: number, zy: number, ty: number, xz: number, yz: number, zz: number, tz: number);
  /**
   * Return whether this transform is an identity.
   *
   * If it is not known, then `false` must be returned.
   *
   * @return true if identity
  */
  isIdentity(): boolean;
  /**
   * Returns the affine coefficients of the transform. Result is an array of
   * 12 double.
  */
  coefficients(): number[];
  /**
   * Computes the inverse affine transform.
  */
  inverse(): AffineTransform;
  /**
   * Returns the affine transform created by applying first the affine
   * transform given by `that`, then this affine transform.
   *
   * @param that the transform to apply first
   * @return the composition this * that
  */
  concatenate(that: AffineTransform): AffineTransform;
  /**
   * Return the affine transform created by applying first this affine
   * transform, then the affine transform given by `that`.
   *
   * @param that the transform to apply in a second step
   * @return the composition that * this
  */
  preConcatenate(that: AffineTransform): AffineTransform;
  translate(vec: Vector3): AffineTransform;
  translate(vec: BlockVector3): AffineTransform;
  translate(x: number, y: number, z: number): AffineTransform;
  rotateX(theta: number): AffineTransform;
  rotateY(theta: number): AffineTransform;
  rotateZ(theta: number): AffineTransform;
  scale(s: number): AffineTransform;
  scale(sx: number, sy: number, sz: number): AffineTransform;
  scale(vec: Vector3): AffineTransform;
  /**
   * Returns the result of applying the function to the input.
   *
   * @param input the input
   * @return the result
  */
  apply(vector: Vector3): Vector3;
  combine(other: AffineTransform): AffineTransform;
  /**
   * Create a new {@link Transform} that combines this transform with another.
   *
   * @param other the other transform to occur second
   * @return a new transform
  */
  combine(other: Transform): Transform;
  /**
   * Returns if this affine transform represents a horizontal flip.
  */
  isHorizontalFlip(): boolean;
  /**
   * Returns if this affine transform represents a vertical flip.
  */
  isVerticalFlip(): boolean;
  toString(): string;
}
/**
 * Various utility methods related to {@link Transform}s.
*/
export class Transforms {
  /**
   * Transform a location's position with a given transform.
   *
   * Direction is unaffected.
   *
   * @param location the location
   * @param transform the transform
   * @return the transformed location
  */
  static transform(location: Location, transform: Transform): Location;
}
/**
 * Makes a transformation of {@link Vector3}s.
*/
export class Transform {
  /**
   * Return whether this transform is an identity.
   *
   * If it is not known, then `false` must be returned.
   *
   * @return true if identity
  */
  isIdentity(): boolean;
  /**
   * Returns the result of applying the function to the input.
   *
   * @param input the input
   * @return the result
  */
  apply(input: Vector3): Vector3;
  /**
   * Create a new inverse transform.
   *
   * @return a new inverse transform
  */
  inverse(): Transform;
  /**
   * Create a new {@link Transform} that combines this transform with another.
   *
   * @param other the other transform to occur second
   * @return a new transform
  */
  combine(other: Transform): Transform;
}
/**
 * Makes no transformation to given vectors.
*/
export class Identity extends Transform {
  /**
   * Return whether this transform is an identity.
   *
   * If it is not known, then `false` must be returned.
   *
   * @return true if identity
  */
  isIdentity(): boolean;
  /**
   * Returns the result of applying the function to the input.
   *
   * @param input the input
   * @return the result
  */
  apply(vector: Vector3): Vector3;
  /**
   * Create a new inverse transform.
   *
   * @return a new inverse transform
  */
  inverse(): Transform;
  /**
   * Create a new {@link Transform} that combines this transform with another.
   *
   * @param other the other transform to occur second
   * @return a new transform
  */
  combine(other: Transform): Transform;
}
/**
 * Combines several transforms in order.
*/
export class CombinedTransform extends Transform {
  /**
   * Create a new combined transformation.
   *
   * @param transforms a list of transformations
  */
  constructor(...transforms: Transform[]);
  /**
   * Create a new combined transformation.
   *
   * @param transforms a list of transformations
  */
  constructor(transforms: Collection<Transform>);
  /**
   * Return whether this transform is an identity.
   *
   * If it is not known, then `false` must be returned.
   *
   * @return true if identity
  */
  isIdentity(): boolean;
  /**
   * Returns the result of applying the function to the input.
   *
   * @param input the input
   * @return the result
  */
  apply(vector: Vector3): Vector3;
  /**
   * Create a new inverse transform.
   *
   * @return a new inverse transform
  */
  inverse(): Transform;
  /**
   * Create a new {@link Transform} that combines this transform with another.
   *
   * @param other the other transform to occur second
   * @return a new transform
  */
  combine(other: Transform): Transform;
}

}
declare module 'com.sk89q.worldedit.world.block' {
import { Property } from 'com.sk89q.worldedit.registry.state';
import { BlockMaterial } from 'com.sk89q.worldedit.world.registry';
import { ItemType } from 'com.sk89q.worldedit.world.item';
import { Builder } from 'com.sk89q.worldedit.world.block.FuzzyBlockState';
import { CompoundTag } from 'com.sk89q.jnbt';
import { List, Map } from 'java.util';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { LazyReference } from 'com.sk89q.worldedit.util.concurrency';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { Function } from 'java.util.function';
import { Pattern } from 'com.sk89q.worldedit.function.pattern';
import { TileEntityBlock } from 'com.sk89q.worldedit.blocks';
import { Category, NamespacedRegistry, Keyed } from 'com.sk89q.worldedit.registry';
/**
 * Represents a "snapshot" of a block with NBT Data.
 *
 * An instance of this block contains all the information needed to
 * accurately reproduce the block, provided that the instance was
 * made correctly. In some implementations, it may not be possible to get a
 * snapshot of blocks correctly, so, for example, the NBT data for a block
 * may be missing.
*/
export class BaseBlock extends BlockStateHolder<BaseBlock> {
  /**
   * Gets a map of state to state values.
   *
   * @return The state map
  */
  getStates(): Map<Property<any>, any>;
  /**
   * Get the block type.
   *
   * @return The type
  */
  getBlockType(): BlockType;
  /**
   * Returns a BlockState with the given state and value applied.
   *
   * @param property The state
   * @param value The value
   * @return The modified state, or same if could not be applied
  */
  with<V>(property: Property<V>, value: V): BaseBlock;
  /**
   * Gets the State for this Block.
   *
   * @param property The state to get the value for
   * @return The state value
  */
  getState<V>(property: Property<V>): V;
  /**
   * Returns whether the block contains NBT data. {@link #getNbtData()}
   * must not return null if this method returns true.
   *
   * @return true if there is NBT data
  */
  hasNbtData(): boolean;
  /**
   * Return the name of the title entity ID.
   *
   * @return tile entity ID, non-null string
  */
  getNbtId(): string;
  /**
   * Get the object's NBT data (tile entity data). The returned tag, if
   * modified in any way, should be sent to {@link #setNbtData(CompoundTag)}
   * so that the instance knows of the changes. Making changes without
   * calling {@link #setNbtData(CompoundTag)} could have unintended
   * consequences.
   *
   * {@link #hasNbtData()} must return true if and only if method does
   * not return null.
   *
   * @return compound tag, or null
  */
  getNbtData(): CompoundTag | null;
  /**
   * Set the object's NBT data (tile entity data).
   *
   * @param nbtData NBT data, or null if no data
  */
  setNbtData(nbtData: CompoundTag | null);
  /**
   * Checks whether the type ID and data value are equal.
  */
  equals(o: any): boolean;
  /**
   * Checks if the type is the same, and if the matched states are the same.
   *
   * @param o other block
   * @return true if equal
  */
  equalsFuzzy(o: BlockStateHolder<any>): boolean;
  /**
   * Returns an immutable {@link BlockState} from this BlockStateHolder.
   *
   * @return A BlockState
  */
  toImmutableState(): BlockState;
  /**
   * Gets a {@link BaseBlock} from this BlockStateHolder.
   *
   * @return The BaseBlock
  */
  toBaseBlock(): BaseBlock;
  /**
   * Gets a {@link BaseBlock} from this BlockStateHolder.
   *
   * @return The BaseBlock
  */
  toBaseBlock(compoundTag: CompoundTag): BaseBlock;
  hashCode(): number;
  toString(): string;
}
export interface BaseBlock extends BlockStateHolder<BaseBlock>, TileEntityBlock {}
export class BlockStateHolder<B> extends Pattern {
  /**
   * Get the block type.
   *
   * @return The type
  */
  getBlockType(): BlockType;
  /**
   * Returns a BlockState with the given state and value applied.
   *
   * @param property The state
   * @param value The value
   * @return The modified state, or same if could not be applied
  */
  with<V>(property: Property<V>, value: V): B;
  /**
   * Gets the value for the given state.
   *
   * @param property The state
   * @return The value
  */
  getState<V>(property: Property<V>): V;
  /**
   * Gets an immutable collection of the states.
   *
   * @return The states
  */
  getStates(): Map<Property<any>, any>;
  /**
   * Checks if the type is the same, and if the matched states are the same.
   *
   * @param o other block
   * @return true if equal
  */
  equalsFuzzy(o: BlockStateHolder<any>): boolean;
  /**
   * Returns an immutable {@link BlockState} from this BlockStateHolder.
   *
   * @return A BlockState
  */
  toImmutableState(): BlockState;
  /**
   * Gets a {@link BaseBlock} from this BlockStateHolder.
   *
   * @return The BaseBlock
  */
  toBaseBlock(): BaseBlock;
  /**
   * Gets a {@link BaseBlock} from this BlockStateHolder.
   *
   * @param compoundTag The NBT Data to apply
   * @return The BaseBlock
  */
  toBaseBlock(compoundTag: CompoundTag): BaseBlock;
  applyBlock(position: BlockVector3): BaseBlock;
  getAsString(): string;
}
export class BlockType extends Keyed {
  static readonly REGISTRY: NamespacedRegistry<BlockType>;
  constructor(id: string);
  constructor(id: string, values: Function<BlockState, BlockState>);
  /**
   * Gets the ID of this block.
   *
   * @return The id
  */
  getId(): string;
  getRichName(): Component;
  /**
   * Gets the name of this block, or the ID if the name cannot be found.
   *
   * @return The name, or ID
   * @deprecated The name is now translatable, use {@link #getRichName()}.
  */
  getName(): string;
  /**
   * Gets the properties of this BlockType in a `key->property` mapping.
   *
   * @return The properties map
  */
  getPropertyMap(): Map<string, Property<any>>;
  /**
   * Gets the properties of this BlockType.
   *
   * @return the properties
  */
  getProperties(): Property<any>[];
  /**
   * Gets a property by name.
   *
   * @param name The name
   * @return The property
  */
  getProperty<V>(name: string): Property<V>;
  /**
   * Gets the default state of this block type.
   *
   * @return The default state
  */
  getDefaultState(): BlockState;
  getFuzzyMatcher(): FuzzyBlockState;
  /**
   * Gets a list of all possible states for this BlockType.
   *
   * @return All possible states
  */
  getAllStates(): BlockState[];
  /**
   * Gets a state of this BlockType with the given properties.
   *
   * @return The state, if it exists
  */
  getState(key: Map<Property<any>, any>): BlockState;
  /**
   * Gets whether this block type has an item representation.
   *
   * @return If it has an item
  */
  hasItemType(): boolean;
  /**
   * Gets the item representation of this block type, if it exists.
   *
   * @return The item representation
  */
  getItemType(): ItemType | null;
  /**
   * Get the material for this BlockType.
   *
   * @return The material
  */
  getMaterial(): BlockMaterial;
  /**
   * Gets the legacy ID. Needed for legacy reasons.
   *
   * 
   * DO NOT USE THIS.
   * 
   *
   * @return legacy id or 0, if unknown
  */
  getLegacyId(): number;
  /**
   * Gets the legacy data. Needed for legacy reasons.
   *
   * 
   * DO NOT USE THIS.
   * 
   *
   * @return legacy data or 0, if unknown
  */
  getLegacyData(): number;
  toString(): string;
  hashCode(): number;
  equals(obj: any): boolean;
}
/**
 * An immutable class that represents the state a block can be in.
*/
export class BlockState extends BlockStateHolder<BlockState> {
  /**
   * Get the block type.
   *
   * @return The type
  */
  getBlockType(): BlockType;
  /**
   * Returns a BlockState with the given state and value applied.
   *
   * @param property The state
   * @param value The value
   * @return The modified state, or same if could not be applied
  */
  with<V>(property: Property<V>, value: V): BlockState;
  /**
   * Gets the value for the given state.
   *
   * @param property The state
   * @return The value
  */
  getState<V>(property: Property<V>): V;
  /**
   * Gets an immutable collection of the states.
   *
   * @return The states
  */
  getStates(): Map<Property<any>, any>;
  /**
   * Checks if the type is the same, and if the matched states are the same.
   *
   * @param o other block
   * @return true if equal
  */
  equalsFuzzy(o: BlockStateHolder<any>): boolean;
  /**
   * Returns an immutable {@link BlockState} from this BlockStateHolder.
   *
   * @return A BlockState
  */
  toImmutableState(): BlockState;
  /**
   * Gets a {@link BaseBlock} from this BlockStateHolder.
   *
   * @return The BaseBlock
  */
  toBaseBlock(): BaseBlock;
  /**
   * Gets a {@link BaseBlock} from this BlockStateHolder.
   *
   * @return The BaseBlock
  */
  toBaseBlock(compoundTag: CompoundTag): BaseBlock;
  toString(): string;
  equals(obj: any): boolean;
  hashCode(): number;
}
/**
 * Stores a list of common {@link BlockType BlockTypes}.
 *
 * @see BlockType
*/
export class BlockTypes {
  static readonly ACACIA_BUTTON: BlockType | null;
  static readonly ACACIA_DOOR: BlockType | null;
  static readonly ACACIA_FENCE: BlockType | null;
  static readonly ACACIA_FENCE_GATE: BlockType | null;
  static readonly ACACIA_LEAVES: BlockType | null;
  static readonly ACACIA_LOG: BlockType | null;
  static readonly ACACIA_PLANKS: BlockType | null;
  static readonly ACACIA_PRESSURE_PLATE: BlockType | null;
  static readonly ACACIA_SAPLING: BlockType | null;
  static readonly ACACIA_SIGN: BlockType | null;
  static readonly ACACIA_SLAB: BlockType | null;
  static readonly ACACIA_STAIRS: BlockType | null;
  static readonly ACACIA_TRAPDOOR: BlockType | null;
  static readonly ACACIA_WALL_SIGN: BlockType | null;
  static readonly ACACIA_WOOD: BlockType | null;
  static readonly ACTIVATOR_RAIL: BlockType | null;
  static readonly AIR: BlockType | null;
  static readonly ALLIUM: BlockType | null;
  static readonly AMETHYST_BLOCK: BlockType | null;
  static readonly AMETHYST_CLUSTER: BlockType | null;
  static readonly ANCIENT_DEBRIS: BlockType | null;
  static readonly ANDESITE: BlockType | null;
  static readonly ANDESITE_SLAB: BlockType | null;
  static readonly ANDESITE_STAIRS: BlockType | null;
  static readonly ANDESITE_WALL: BlockType | null;
  static readonly ANVIL: BlockType | null;
  static readonly ATTACHED_MELON_STEM: BlockType | null;
  static readonly ATTACHED_PUMPKIN_STEM: BlockType | null;
  static readonly AZALEA: BlockType | null;
  static readonly AZALEA_LEAVES: BlockType | null;
  static readonly AZURE_BLUET: BlockType | null;
  static readonly BAMBOO: BlockType | null;
  static readonly BAMBOO_SAPLING: BlockType | null;
  static readonly BARREL: BlockType | null;
  static readonly BARRIER: BlockType | null;
  static readonly BASALT: BlockType | null;
  static readonly BEACON: BlockType | null;
  static readonly BEDROCK: BlockType | null;
  static readonly BEE_NEST: BlockType | null;
  static readonly BEEHIVE: BlockType | null;
  static readonly BEETROOTS: BlockType | null;
  static readonly BELL: BlockType | null;
  static readonly BIG_DRIPLEAF: BlockType | null;
  static readonly BIG_DRIPLEAF_STEM: BlockType | null;
  static readonly BIRCH_BUTTON: BlockType | null;
  static readonly BIRCH_DOOR: BlockType | null;
  static readonly BIRCH_FENCE: BlockType | null;
  static readonly BIRCH_FENCE_GATE: BlockType | null;
  static readonly BIRCH_LEAVES: BlockType | null;
  static readonly BIRCH_LOG: BlockType | null;
  static readonly BIRCH_PLANKS: BlockType | null;
  static readonly BIRCH_PRESSURE_PLATE: BlockType | null;
  static readonly BIRCH_SAPLING: BlockType | null;
  static readonly BIRCH_SIGN: BlockType | null;
  static readonly BIRCH_SLAB: BlockType | null;
  static readonly BIRCH_STAIRS: BlockType | null;
  static readonly BIRCH_TRAPDOOR: BlockType | null;
  static readonly BIRCH_WALL_SIGN: BlockType | null;
  static readonly BIRCH_WOOD: BlockType | null;
  static readonly BLACK_BANNER: BlockType | null;
  static readonly BLACK_BED: BlockType | null;
  static readonly BLACK_CANDLE: BlockType | null;
  static readonly BLACK_CANDLE_CAKE: BlockType | null;
  static readonly BLACK_CARPET: BlockType | null;
  static readonly BLACK_CONCRETE: BlockType | null;
  static readonly BLACK_CONCRETE_POWDER: BlockType | null;
  static readonly BLACK_GLAZED_TERRACOTTA: BlockType | null;
  static readonly BLACK_SHULKER_BOX: BlockType | null;
  static readonly BLACK_STAINED_GLASS: BlockType | null;
  static readonly BLACK_STAINED_GLASS_PANE: BlockType | null;
  static readonly BLACK_TERRACOTTA: BlockType | null;
  static readonly BLACK_WALL_BANNER: BlockType | null;
  static readonly BLACK_WOOL: BlockType | null;
  static readonly BLACKSTONE: BlockType | null;
  static readonly BLACKSTONE_SLAB: BlockType | null;
  static readonly BLACKSTONE_STAIRS: BlockType | null;
  static readonly BLACKSTONE_WALL: BlockType | null;
  static readonly BLAST_FURNACE: BlockType | null;
  static readonly BLUE_BANNER: BlockType | null;
  static readonly BLUE_BED: BlockType | null;
  static readonly BLUE_CANDLE: BlockType | null;
  static readonly BLUE_CANDLE_CAKE: BlockType | null;
  static readonly BLUE_CARPET: BlockType | null;
  static readonly BLUE_CONCRETE: BlockType | null;
  static readonly BLUE_CONCRETE_POWDER: BlockType | null;
  static readonly BLUE_GLAZED_TERRACOTTA: BlockType | null;
  static readonly BLUE_ICE: BlockType | null;
  static readonly BLUE_ORCHID: BlockType | null;
  static readonly BLUE_SHULKER_BOX: BlockType | null;
  static readonly BLUE_STAINED_GLASS: BlockType | null;
  static readonly BLUE_STAINED_GLASS_PANE: BlockType | null;
  static readonly BLUE_TERRACOTTA: BlockType | null;
  static readonly BLUE_WALL_BANNER: BlockType | null;
  static readonly BLUE_WOOL: BlockType | null;
  static readonly BONE_BLOCK: BlockType | null;
  static readonly BOOKSHELF: BlockType | null;
  static readonly BRAIN_CORAL: BlockType | null;
  static readonly BRAIN_CORAL_BLOCK: BlockType | null;
  static readonly BRAIN_CORAL_FAN: BlockType | null;
  static readonly BRAIN_CORAL_WALL_FAN: BlockType | null;
  static readonly BREWING_STAND: BlockType | null;
  static readonly BRICK_SLAB: BlockType | null;
  static readonly BRICK_STAIRS: BlockType | null;
  static readonly BRICK_WALL: BlockType | null;
  static readonly BRICKS: BlockType | null;
  static readonly BROWN_BANNER: BlockType | null;
  static readonly BROWN_BED: BlockType | null;
  static readonly BROWN_CANDLE: BlockType | null;
  static readonly BROWN_CANDLE_CAKE: BlockType | null;
  static readonly BROWN_CARPET: BlockType | null;
  static readonly BROWN_CONCRETE: BlockType | null;
  static readonly BROWN_CONCRETE_POWDER: BlockType | null;
  static readonly BROWN_GLAZED_TERRACOTTA: BlockType | null;
  static readonly BROWN_MUSHROOM: BlockType | null;
  static readonly BROWN_MUSHROOM_BLOCK: BlockType | null;
  static readonly BROWN_SHULKER_BOX: BlockType | null;
  static readonly BROWN_STAINED_GLASS: BlockType | null;
  static readonly BROWN_STAINED_GLASS_PANE: BlockType | null;
  static readonly BROWN_TERRACOTTA: BlockType | null;
  static readonly BROWN_WALL_BANNER: BlockType | null;
  static readonly BROWN_WOOL: BlockType | null;
  static readonly BUBBLE_COLUMN: BlockType | null;
  static readonly BUBBLE_CORAL: BlockType | null;
  static readonly BUBBLE_CORAL_BLOCK: BlockType | null;
  static readonly BUBBLE_CORAL_FAN: BlockType | null;
  static readonly BUBBLE_CORAL_WALL_FAN: BlockType | null;
  static readonly BUDDING_AMETHYST: BlockType | null;
  static readonly CACTUS: BlockType | null;
  static readonly CAKE: BlockType | null;
  static readonly CALCITE: BlockType | null;
  static readonly CAMPFIRE: BlockType | null;
  static readonly CANDLE: BlockType | null;
  static readonly CANDLE_CAKE: BlockType | null;
  static readonly CARROTS: BlockType | null;
  static readonly CARTOGRAPHY_TABLE: BlockType | null;
  static readonly CARVED_PUMPKIN: BlockType | null;
  static readonly CAULDRON: BlockType | null;
  static readonly CAVE_AIR: BlockType | null;
  static readonly CAVE_VINES: BlockType | null;
  static readonly CAVE_VINES_PLANT: BlockType | null;
  static readonly CHAIN: BlockType | null;
  static readonly CHAIN_COMMAND_BLOCK: BlockType | null;
  static readonly CHEST: BlockType | null;
  static readonly CHIPPED_ANVIL: BlockType | null;
  static readonly CHISELED_DEEPSLATE: BlockType | null;
  static readonly CHISELED_NETHER_BRICKS: BlockType | null;
  static readonly CHISELED_POLISHED_BLACKSTONE: BlockType | null;
  static readonly CHISELED_QUARTZ_BLOCK: BlockType | null;
  static readonly CHISELED_RED_SANDSTONE: BlockType | null;
  static readonly CHISELED_SANDSTONE: BlockType | null;
  static readonly CHISELED_STONE_BRICKS: BlockType | null;
  static readonly CHORUS_FLOWER: BlockType | null;
  static readonly CHORUS_PLANT: BlockType | null;
  static readonly CLAY: BlockType | null;
  static readonly COAL_BLOCK: BlockType | null;
  static readonly COAL_ORE: BlockType | null;
  static readonly COARSE_DIRT: BlockType | null;
  static readonly COBBLED_DEEPSLATE: BlockType | null;
  static readonly COBBLED_DEEPSLATE_SLAB: BlockType | null;
  static readonly COBBLED_DEEPSLATE_STAIRS: BlockType | null;
  static readonly COBBLED_DEEPSLATE_WALL: BlockType | null;
  static readonly COBBLESTONE: BlockType | null;
  static readonly COBBLESTONE_SLAB: BlockType | null;
  static readonly COBBLESTONE_STAIRS: BlockType | null;
  static readonly COBBLESTONE_WALL: BlockType | null;
  static readonly COBWEB: BlockType | null;
  static readonly COCOA: BlockType | null;
  static readonly COMMAND_BLOCK: BlockType | null;
  static readonly COMPARATOR: BlockType | null;
  static readonly COMPOSTER: BlockType | null;
  static readonly CONDUIT: BlockType | null;
  static readonly COPPER_BLOCK: BlockType | null;
  static readonly COPPER_ORE: BlockType | null;
  static readonly CORNFLOWER: BlockType | null;
  static readonly CRACKED_DEEPSLATE_BRICKS: BlockType | null;
  static readonly CRACKED_DEEPSLATE_TILES: BlockType | null;
  static readonly CRACKED_NETHER_BRICKS: BlockType | null;
  static readonly CRACKED_POLISHED_BLACKSTONE_BRICKS: BlockType | null;
  static readonly CRACKED_STONE_BRICKS: BlockType | null;
  static readonly CRAFTING_TABLE: BlockType | null;
  static readonly CREEPER_HEAD: BlockType | null;
  static readonly CREEPER_WALL_HEAD: BlockType | null;
  static readonly CRIMSON_BUTTON: BlockType | null;
  static readonly CRIMSON_DOOR: BlockType | null;
  static readonly CRIMSON_FENCE: BlockType | null;
  static readonly CRIMSON_FENCE_GATE: BlockType | null;
  static readonly CRIMSON_FUNGUS: BlockType | null;
  static readonly CRIMSON_HYPHAE: BlockType | null;
  static readonly CRIMSON_NYLIUM: BlockType | null;
  static readonly CRIMSON_PLANKS: BlockType | null;
  static readonly CRIMSON_PRESSURE_PLATE: BlockType | null;
  static readonly CRIMSON_ROOTS: BlockType | null;
  static readonly CRIMSON_SIGN: BlockType | null;
  static readonly CRIMSON_SLAB: BlockType | null;
  static readonly CRIMSON_STAIRS: BlockType | null;
  static readonly CRIMSON_STEM: BlockType | null;
  static readonly CRIMSON_TRAPDOOR: BlockType | null;
  static readonly CRIMSON_WALL_SIGN: BlockType | null;
  static readonly CRYING_OBSIDIAN: BlockType | null;
  static readonly CUT_COPPER: BlockType | null;
  static readonly CUT_COPPER_SLAB: BlockType | null;
  static readonly CUT_COPPER_STAIRS: BlockType | null;
  static readonly CUT_RED_SANDSTONE: BlockType | null;
  static readonly CUT_RED_SANDSTONE_SLAB: BlockType | null;
  static readonly CUT_SANDSTONE: BlockType | null;
  static readonly CUT_SANDSTONE_SLAB: BlockType | null;
  static readonly CYAN_BANNER: BlockType | null;
  static readonly CYAN_BED: BlockType | null;
  static readonly CYAN_CANDLE: BlockType | null;
  static readonly CYAN_CANDLE_CAKE: BlockType | null;
  static readonly CYAN_CARPET: BlockType | null;
  static readonly CYAN_CONCRETE: BlockType | null;
  static readonly CYAN_CONCRETE_POWDER: BlockType | null;
  static readonly CYAN_GLAZED_TERRACOTTA: BlockType | null;
  static readonly CYAN_SHULKER_BOX: BlockType | null;
  static readonly CYAN_STAINED_GLASS: BlockType | null;
  static readonly CYAN_STAINED_GLASS_PANE: BlockType | null;
  static readonly CYAN_TERRACOTTA: BlockType | null;
  static readonly CYAN_WALL_BANNER: BlockType | null;
  static readonly CYAN_WOOL: BlockType | null;
  static readonly DAMAGED_ANVIL: BlockType | null;
  static readonly DANDELION: BlockType | null;
  static readonly DARK_OAK_BUTTON: BlockType | null;
  static readonly DARK_OAK_DOOR: BlockType | null;
  static readonly DARK_OAK_FENCE: BlockType | null;
  static readonly DARK_OAK_FENCE_GATE: BlockType | null;
  static readonly DARK_OAK_LEAVES: BlockType | null;
  static readonly DARK_OAK_LOG: BlockType | null;
  static readonly DARK_OAK_PLANKS: BlockType | null;
  static readonly DARK_OAK_PRESSURE_PLATE: BlockType | null;
  static readonly DARK_OAK_SAPLING: BlockType | null;
  static readonly DARK_OAK_SIGN: BlockType | null;
  static readonly DARK_OAK_SLAB: BlockType | null;
  static readonly DARK_OAK_STAIRS: BlockType | null;
  static readonly DARK_OAK_TRAPDOOR: BlockType | null;
  static readonly DARK_OAK_WALL_SIGN: BlockType | null;
  static readonly DARK_OAK_WOOD: BlockType | null;
  static readonly DARK_PRISMARINE: BlockType | null;
  static readonly DARK_PRISMARINE_SLAB: BlockType | null;
  static readonly DARK_PRISMARINE_STAIRS: BlockType | null;
  static readonly DAYLIGHT_DETECTOR: BlockType | null;
  static readonly DEAD_BRAIN_CORAL: BlockType | null;
  static readonly DEAD_BRAIN_CORAL_BLOCK: BlockType | null;
  static readonly DEAD_BRAIN_CORAL_FAN: BlockType | null;
  static readonly DEAD_BRAIN_CORAL_WALL_FAN: BlockType | null;
  static readonly DEAD_BUBBLE_CORAL: BlockType | null;
  static readonly DEAD_BUBBLE_CORAL_BLOCK: BlockType | null;
  static readonly DEAD_BUBBLE_CORAL_FAN: BlockType | null;
  static readonly DEAD_BUBBLE_CORAL_WALL_FAN: BlockType | null;
  static readonly DEAD_BUSH: BlockType | null;
  static readonly DEAD_FIRE_CORAL: BlockType | null;
  static readonly DEAD_FIRE_CORAL_BLOCK: BlockType | null;
  static readonly DEAD_FIRE_CORAL_FAN: BlockType | null;
  static readonly DEAD_FIRE_CORAL_WALL_FAN: BlockType | null;
  static readonly DEAD_HORN_CORAL: BlockType | null;
  static readonly DEAD_HORN_CORAL_BLOCK: BlockType | null;
  static readonly DEAD_HORN_CORAL_FAN: BlockType | null;
  static readonly DEAD_HORN_CORAL_WALL_FAN: BlockType | null;
  static readonly DEAD_TUBE_CORAL: BlockType | null;
  static readonly DEAD_TUBE_CORAL_BLOCK: BlockType | null;
  static readonly DEAD_TUBE_CORAL_FAN: BlockType | null;
  static readonly DEAD_TUBE_CORAL_WALL_FAN: BlockType | null;
  static readonly DEEPSLATE: BlockType | null;
  static readonly DEEPSLATE_BRICK_SLAB: BlockType | null;
  static readonly DEEPSLATE_BRICK_STAIRS: BlockType | null;
  static readonly DEEPSLATE_BRICK_WALL: BlockType | null;
  static readonly DEEPSLATE_BRICKS: BlockType | null;
  static readonly DEEPSLATE_COAL_ORE: BlockType | null;
  static readonly DEEPSLATE_COPPER_ORE: BlockType | null;
  static readonly DEEPSLATE_DIAMOND_ORE: BlockType | null;
  static readonly DEEPSLATE_EMERALD_ORE: BlockType | null;
  static readonly DEEPSLATE_GOLD_ORE: BlockType | null;
  static readonly DEEPSLATE_IRON_ORE: BlockType | null;
  static readonly DEEPSLATE_LAPIS_ORE: BlockType | null;
  static readonly DEEPSLATE_REDSTONE_ORE: BlockType | null;
  static readonly DEEPSLATE_TILE_SLAB: BlockType | null;
  static readonly DEEPSLATE_TILE_STAIRS: BlockType | null;
  static readonly DEEPSLATE_TILE_WALL: BlockType | null;
  static readonly DEEPSLATE_TILES: BlockType | null;
  static readonly DETECTOR_RAIL: BlockType | null;
  static readonly DIAMOND_BLOCK: BlockType | null;
  static readonly DIAMOND_ORE: BlockType | null;
  static readonly DIORITE: BlockType | null;
  static readonly DIORITE_SLAB: BlockType | null;
  static readonly DIORITE_STAIRS: BlockType | null;
  static readonly DIORITE_WALL: BlockType | null;
  static readonly DIRT: BlockType | null;
  static readonly DIRT_PATH: BlockType | null;
  static readonly DISPENSER: BlockType | null;
  static readonly DRAGON_EGG: BlockType | null;
  static readonly DRAGON_HEAD: BlockType | null;
  static readonly DRAGON_WALL_HEAD: BlockType | null;
  static readonly DRIED_KELP_BLOCK: BlockType | null;
  static readonly DRIPSTONE_BLOCK: BlockType | null;
  static readonly DROPPER: BlockType | null;
  static readonly EMERALD_BLOCK: BlockType | null;
  static readonly EMERALD_ORE: BlockType | null;
  static readonly ENCHANTING_TABLE: BlockType | null;
  static readonly END_GATEWAY: BlockType | null;
  static readonly END_PORTAL: BlockType | null;
  static readonly END_PORTAL_FRAME: BlockType | null;
  static readonly END_ROD: BlockType | null;
  static readonly END_STONE: BlockType | null;
  static readonly END_STONE_BRICK_SLAB: BlockType | null;
  static readonly END_STONE_BRICK_STAIRS: BlockType | null;
  static readonly END_STONE_BRICK_WALL: BlockType | null;
  static readonly END_STONE_BRICKS: BlockType | null;
  static readonly ENDER_CHEST: BlockType | null;
  static readonly EXPOSED_COPPER: BlockType | null;
  static readonly EXPOSED_CUT_COPPER: BlockType | null;
  static readonly EXPOSED_CUT_COPPER_SLAB: BlockType | null;
  static readonly EXPOSED_CUT_COPPER_STAIRS: BlockType | null;
  static readonly FARMLAND: BlockType | null;
  static readonly FERN: BlockType | null;
  static readonly FIRE: BlockType | null;
  static readonly FIRE_CORAL: BlockType | null;
  static readonly FIRE_CORAL_BLOCK: BlockType | null;
  static readonly FIRE_CORAL_FAN: BlockType | null;
  static readonly FIRE_CORAL_WALL_FAN: BlockType | null;
  static readonly FLETCHING_TABLE: BlockType | null;
  static readonly FLOWER_POT: BlockType | null;
  static readonly FLOWERING_AZALEA: BlockType | null;
  static readonly FLOWERING_AZALEA_LEAVES: BlockType | null;
  static readonly FROSTED_ICE: BlockType | null;
  static readonly FURNACE: BlockType | null;
  static readonly GILDED_BLACKSTONE: BlockType | null;
  static readonly GLASS: BlockType | null;
  static readonly GLASS_PANE: BlockType | null;
  static readonly GLOW_LICHEN: BlockType | null;
  static readonly GLOWSTONE: BlockType | null;
  static readonly GOLD_BLOCK: BlockType | null;
  static readonly GOLD_ORE: BlockType | null;
  static readonly GRANITE: BlockType | null;
  static readonly GRANITE_SLAB: BlockType | null;
  static readonly GRANITE_STAIRS: BlockType | null;
  static readonly GRANITE_WALL: BlockType | null;
  static readonly GRASS: BlockType | null;
  static readonly GRASS_BLOCK: BlockType | null;
  static readonly GRASS_PATH: BlockType | null;
  static readonly GRAVEL: BlockType | null;
  static readonly GRAY_BANNER: BlockType | null;
  static readonly GRAY_BED: BlockType | null;
  static readonly GRAY_CANDLE: BlockType | null;
  static readonly GRAY_CANDLE_CAKE: BlockType | null;
  static readonly GRAY_CARPET: BlockType | null;
  static readonly GRAY_CONCRETE: BlockType | null;
  static readonly GRAY_CONCRETE_POWDER: BlockType | null;
  static readonly GRAY_GLAZED_TERRACOTTA: BlockType | null;
  static readonly GRAY_SHULKER_BOX: BlockType | null;
  static readonly GRAY_STAINED_GLASS: BlockType | null;
  static readonly GRAY_STAINED_GLASS_PANE: BlockType | null;
  static readonly GRAY_TERRACOTTA: BlockType | null;
  static readonly GRAY_WALL_BANNER: BlockType | null;
  static readonly GRAY_WOOL: BlockType | null;
  static readonly GREEN_BANNER: BlockType | null;
  static readonly GREEN_BED: BlockType | null;
  static readonly GREEN_CANDLE: BlockType | null;
  static readonly GREEN_CANDLE_CAKE: BlockType | null;
  static readonly GREEN_CARPET: BlockType | null;
  static readonly GREEN_CONCRETE: BlockType | null;
  static readonly GREEN_CONCRETE_POWDER: BlockType | null;
  static readonly GREEN_GLAZED_TERRACOTTA: BlockType | null;
  static readonly GREEN_SHULKER_BOX: BlockType | null;
  static readonly GREEN_STAINED_GLASS: BlockType | null;
  static readonly GREEN_STAINED_GLASS_PANE: BlockType | null;
  static readonly GREEN_TERRACOTTA: BlockType | null;
  static readonly GREEN_WALL_BANNER: BlockType | null;
  static readonly GREEN_WOOL: BlockType | null;
  static readonly GRINDSTONE: BlockType | null;
  static readonly HANGING_ROOTS: BlockType | null;
  static readonly HAY_BLOCK: BlockType | null;
  static readonly HEAVY_WEIGHTED_PRESSURE_PLATE: BlockType | null;
  static readonly HONEY_BLOCK: BlockType | null;
  static readonly HONEYCOMB_BLOCK: BlockType | null;
  static readonly HOPPER: BlockType | null;
  static readonly HORN_CORAL: BlockType | null;
  static readonly HORN_CORAL_BLOCK: BlockType | null;
  static readonly HORN_CORAL_FAN: BlockType | null;
  static readonly HORN_CORAL_WALL_FAN: BlockType | null;
  static readonly ICE: BlockType | null;
  static readonly INFESTED_CHISELED_STONE_BRICKS: BlockType | null;
  static readonly INFESTED_COBBLESTONE: BlockType | null;
  static readonly INFESTED_CRACKED_STONE_BRICKS: BlockType | null;
  static readonly INFESTED_DEEPSLATE: BlockType | null;
  static readonly INFESTED_MOSSY_STONE_BRICKS: BlockType | null;
  static readonly INFESTED_STONE: BlockType | null;
  static readonly INFESTED_STONE_BRICKS: BlockType | null;
  static readonly IRON_BARS: BlockType | null;
  static readonly IRON_BLOCK: BlockType | null;
  static readonly IRON_DOOR: BlockType | null;
  static readonly IRON_ORE: BlockType | null;
  static readonly IRON_TRAPDOOR: BlockType | null;
  static readonly JACK_O_LANTERN: BlockType | null;
  static readonly JIGSAW: BlockType | null;
  static readonly JUKEBOX: BlockType | null;
  static readonly JUNGLE_BUTTON: BlockType | null;
  static readonly JUNGLE_DOOR: BlockType | null;
  static readonly JUNGLE_FENCE: BlockType | null;
  static readonly JUNGLE_FENCE_GATE: BlockType | null;
  static readonly JUNGLE_LEAVES: BlockType | null;
  static readonly JUNGLE_LOG: BlockType | null;
  static readonly JUNGLE_PLANKS: BlockType | null;
  static readonly JUNGLE_PRESSURE_PLATE: BlockType | null;
  static readonly JUNGLE_SAPLING: BlockType | null;
  static readonly JUNGLE_SIGN: BlockType | null;
  static readonly JUNGLE_SLAB: BlockType | null;
  static readonly JUNGLE_STAIRS: BlockType | null;
  static readonly JUNGLE_TRAPDOOR: BlockType | null;
  static readonly JUNGLE_WALL_SIGN: BlockType | null;
  static readonly JUNGLE_WOOD: BlockType | null;
  static readonly KELP: BlockType | null;
  static readonly KELP_PLANT: BlockType | null;
  static readonly LADDER: BlockType | null;
  static readonly LANTERN: BlockType | null;
  static readonly LAPIS_BLOCK: BlockType | null;
  static readonly LAPIS_ORE: BlockType | null;
  static readonly LARGE_AMETHYST_BUD: BlockType | null;
  static readonly LARGE_FERN: BlockType | null;
  static readonly LAVA: BlockType | null;
  static readonly LAVA_CAULDRON: BlockType | null;
  static readonly LECTERN: BlockType | null;
  static readonly LEVER: BlockType | null;
  static readonly LIGHT: BlockType | null;
  static readonly LIGHT_BLUE_BANNER: BlockType | null;
  static readonly LIGHT_BLUE_BED: BlockType | null;
  static readonly LIGHT_BLUE_CANDLE: BlockType | null;
  static readonly LIGHT_BLUE_CANDLE_CAKE: BlockType | null;
  static readonly LIGHT_BLUE_CARPET: BlockType | null;
  static readonly LIGHT_BLUE_CONCRETE: BlockType | null;
  static readonly LIGHT_BLUE_CONCRETE_POWDER: BlockType | null;
  static readonly LIGHT_BLUE_GLAZED_TERRACOTTA: BlockType | null;
  static readonly LIGHT_BLUE_SHULKER_BOX: BlockType | null;
  static readonly LIGHT_BLUE_STAINED_GLASS: BlockType | null;
  static readonly LIGHT_BLUE_STAINED_GLASS_PANE: BlockType | null;
  static readonly LIGHT_BLUE_TERRACOTTA: BlockType | null;
  static readonly LIGHT_BLUE_WALL_BANNER: BlockType | null;
  static readonly LIGHT_BLUE_WOOL: BlockType | null;
  static readonly LIGHT_GRAY_BANNER: BlockType | null;
  static readonly LIGHT_GRAY_BED: BlockType | null;
  static readonly LIGHT_GRAY_CANDLE: BlockType | null;
  static readonly LIGHT_GRAY_CANDLE_CAKE: BlockType | null;
  static readonly LIGHT_GRAY_CARPET: BlockType | null;
  static readonly LIGHT_GRAY_CONCRETE: BlockType | null;
  static readonly LIGHT_GRAY_CONCRETE_POWDER: BlockType | null;
  static readonly LIGHT_GRAY_GLAZED_TERRACOTTA: BlockType | null;
  static readonly LIGHT_GRAY_SHULKER_BOX: BlockType | null;
  static readonly LIGHT_GRAY_STAINED_GLASS: BlockType | null;
  static readonly LIGHT_GRAY_STAINED_GLASS_PANE: BlockType | null;
  static readonly LIGHT_GRAY_TERRACOTTA: BlockType | null;
  static readonly LIGHT_GRAY_WALL_BANNER: BlockType | null;
  static readonly LIGHT_GRAY_WOOL: BlockType | null;
  static readonly LIGHT_WEIGHTED_PRESSURE_PLATE: BlockType | null;
  static readonly LIGHTNING_ROD: BlockType | null;
  static readonly LILAC: BlockType | null;
  static readonly LILY_OF_THE_VALLEY: BlockType | null;
  static readonly LILY_PAD: BlockType | null;
  static readonly LIME_BANNER: BlockType | null;
  static readonly LIME_BED: BlockType | null;
  static readonly LIME_CANDLE: BlockType | null;
  static readonly LIME_CANDLE_CAKE: BlockType | null;
  static readonly LIME_CARPET: BlockType | null;
  static readonly LIME_CONCRETE: BlockType | null;
  static readonly LIME_CONCRETE_POWDER: BlockType | null;
  static readonly LIME_GLAZED_TERRACOTTA: BlockType | null;
  static readonly LIME_SHULKER_BOX: BlockType | null;
  static readonly LIME_STAINED_GLASS: BlockType | null;
  static readonly LIME_STAINED_GLASS_PANE: BlockType | null;
  static readonly LIME_TERRACOTTA: BlockType | null;
  static readonly LIME_WALL_BANNER: BlockType | null;
  static readonly LIME_WOOL: BlockType | null;
  static readonly LODESTONE: BlockType | null;
  static readonly LOOM: BlockType | null;
  static readonly MAGENTA_BANNER: BlockType | null;
  static readonly MAGENTA_BED: BlockType | null;
  static readonly MAGENTA_CANDLE: BlockType | null;
  static readonly MAGENTA_CANDLE_CAKE: BlockType | null;
  static readonly MAGENTA_CARPET: BlockType | null;
  static readonly MAGENTA_CONCRETE: BlockType | null;
  static readonly MAGENTA_CONCRETE_POWDER: BlockType | null;
  static readonly MAGENTA_GLAZED_TERRACOTTA: BlockType | null;
  static readonly MAGENTA_SHULKER_BOX: BlockType | null;
  static readonly MAGENTA_STAINED_GLASS: BlockType | null;
  static readonly MAGENTA_STAINED_GLASS_PANE: BlockType | null;
  static readonly MAGENTA_TERRACOTTA: BlockType | null;
  static readonly MAGENTA_WALL_BANNER: BlockType | null;
  static readonly MAGENTA_WOOL: BlockType | null;
  static readonly MAGMA_BLOCK: BlockType | null;
  static readonly MEDIUM_AMETHYST_BUD: BlockType | null;
  static readonly MELON: BlockType | null;
  static readonly MELON_STEM: BlockType | null;
  static readonly MOSS_BLOCK: BlockType | null;
  static readonly MOSS_CARPET: BlockType | null;
  static readonly MOSSY_COBBLESTONE: BlockType | null;
  static readonly MOSSY_COBBLESTONE_SLAB: BlockType | null;
  static readonly MOSSY_COBBLESTONE_STAIRS: BlockType | null;
  static readonly MOSSY_COBBLESTONE_WALL: BlockType | null;
  static readonly MOSSY_STONE_BRICK_SLAB: BlockType | null;
  static readonly MOSSY_STONE_BRICK_STAIRS: BlockType | null;
  static readonly MOSSY_STONE_BRICK_WALL: BlockType | null;
  static readonly MOSSY_STONE_BRICKS: BlockType | null;
  static readonly MOVING_PISTON: BlockType | null;
  static readonly MUSHROOM_STEM: BlockType | null;
  static readonly MYCELIUM: BlockType | null;
  static readonly NETHER_BRICK_FENCE: BlockType | null;
  static readonly NETHER_BRICK_SLAB: BlockType | null;
  static readonly NETHER_BRICK_STAIRS: BlockType | null;
  static readonly NETHER_BRICK_WALL: BlockType | null;
  static readonly NETHER_BRICKS: BlockType | null;
  static readonly NETHER_GOLD_ORE: BlockType | null;
  static readonly NETHER_PORTAL: BlockType | null;
  static readonly NETHER_QUARTZ_ORE: BlockType | null;
  static readonly NETHER_SPROUTS: BlockType | null;
  static readonly NETHER_WART: BlockType | null;
  static readonly NETHER_WART_BLOCK: BlockType | null;
  static readonly NETHERITE_BLOCK: BlockType | null;
  static readonly NETHERRACK: BlockType | null;
  static readonly NOTE_BLOCK: BlockType | null;
  static readonly OAK_BUTTON: BlockType | null;
  static readonly OAK_DOOR: BlockType | null;
  static readonly OAK_FENCE: BlockType | null;
  static readonly OAK_FENCE_GATE: BlockType | null;
  static readonly OAK_LEAVES: BlockType | null;
  static readonly OAK_LOG: BlockType | null;
  static readonly OAK_PLANKS: BlockType | null;
  static readonly OAK_PRESSURE_PLATE: BlockType | null;
  static readonly OAK_SAPLING: BlockType | null;
  static readonly OAK_SIGN: BlockType | null;
  static readonly OAK_SLAB: BlockType | null;
  static readonly OAK_STAIRS: BlockType | null;
  static readonly OAK_TRAPDOOR: BlockType | null;
  static readonly OAK_WALL_SIGN: BlockType | null;
  static readonly OAK_WOOD: BlockType | null;
  static readonly OBSERVER: BlockType | null;
  static readonly OBSIDIAN: BlockType | null;
  static readonly ORANGE_BANNER: BlockType | null;
  static readonly ORANGE_BED: BlockType | null;
  static readonly ORANGE_CANDLE: BlockType | null;
  static readonly ORANGE_CANDLE_CAKE: BlockType | null;
  static readonly ORANGE_CARPET: BlockType | null;
  static readonly ORANGE_CONCRETE: BlockType | null;
  static readonly ORANGE_CONCRETE_POWDER: BlockType | null;
  static readonly ORANGE_GLAZED_TERRACOTTA: BlockType | null;
  static readonly ORANGE_SHULKER_BOX: BlockType | null;
  static readonly ORANGE_STAINED_GLASS: BlockType | null;
  static readonly ORANGE_STAINED_GLASS_PANE: BlockType | null;
  static readonly ORANGE_TERRACOTTA: BlockType | null;
  static readonly ORANGE_TULIP: BlockType | null;
  static readonly ORANGE_WALL_BANNER: BlockType | null;
  static readonly ORANGE_WOOL: BlockType | null;
  static readonly OXEYE_DAISY: BlockType | null;
  static readonly OXIDIZED_COPPER: BlockType | null;
  static readonly OXIDIZED_CUT_COPPER: BlockType | null;
  static readonly OXIDIZED_CUT_COPPER_SLAB: BlockType | null;
  static readonly OXIDIZED_CUT_COPPER_STAIRS: BlockType | null;
  static readonly PACKED_ICE: BlockType | null;
  static readonly PEONY: BlockType | null;
  static readonly PETRIFIED_OAK_SLAB: BlockType | null;
  static readonly PINK_BANNER: BlockType | null;
  static readonly PINK_BED: BlockType | null;
  static readonly PINK_CANDLE: BlockType | null;
  static readonly PINK_CANDLE_CAKE: BlockType | null;
  static readonly PINK_CARPET: BlockType | null;
  static readonly PINK_CONCRETE: BlockType | null;
  static readonly PINK_CONCRETE_POWDER: BlockType | null;
  static readonly PINK_GLAZED_TERRACOTTA: BlockType | null;
  static readonly PINK_SHULKER_BOX: BlockType | null;
  static readonly PINK_STAINED_GLASS: BlockType | null;
  static readonly PINK_STAINED_GLASS_PANE: BlockType | null;
  static readonly PINK_TERRACOTTA: BlockType | null;
  static readonly PINK_TULIP: BlockType | null;
  static readonly PINK_WALL_BANNER: BlockType | null;
  static readonly PINK_WOOL: BlockType | null;
  static readonly PISTON: BlockType | null;
  static readonly PISTON_HEAD: BlockType | null;
  static readonly PLAYER_HEAD: BlockType | null;
  static readonly PLAYER_WALL_HEAD: BlockType | null;
  static readonly PODZOL: BlockType | null;
  static readonly POINTED_DRIPSTONE: BlockType | null;
  static readonly POLISHED_ANDESITE: BlockType | null;
  static readonly POLISHED_ANDESITE_SLAB: BlockType | null;
  static readonly POLISHED_ANDESITE_STAIRS: BlockType | null;
  static readonly POLISHED_BASALT: BlockType | null;
  static readonly POLISHED_BLACKSTONE: BlockType | null;
  static readonly POLISHED_BLACKSTONE_BRICK_SLAB: BlockType | null;
  static readonly POLISHED_BLACKSTONE_BRICK_STAIRS: BlockType | null;
  static readonly POLISHED_BLACKSTONE_BRICK_WALL: BlockType | null;
  static readonly POLISHED_BLACKSTONE_BRICKS: BlockType | null;
  static readonly POLISHED_BLACKSTONE_BUTTON: BlockType | null;
  static readonly POLISHED_BLACKSTONE_PRESSURE_PLATE: BlockType | null;
  static readonly POLISHED_BLACKSTONE_SLAB: BlockType | null;
  static readonly POLISHED_BLACKSTONE_STAIRS: BlockType | null;
  static readonly POLISHED_BLACKSTONE_WALL: BlockType | null;
  static readonly POLISHED_DEEPSLATE: BlockType | null;
  static readonly POLISHED_DEEPSLATE_SLAB: BlockType | null;
  static readonly POLISHED_DEEPSLATE_STAIRS: BlockType | null;
  static readonly POLISHED_DEEPSLATE_WALL: BlockType | null;
  static readonly POLISHED_DIORITE: BlockType | null;
  static readonly POLISHED_DIORITE_SLAB: BlockType | null;
  static readonly POLISHED_DIORITE_STAIRS: BlockType | null;
  static readonly POLISHED_GRANITE: BlockType | null;
  static readonly POLISHED_GRANITE_SLAB: BlockType | null;
  static readonly POLISHED_GRANITE_STAIRS: BlockType | null;
  static readonly POPPY: BlockType | null;
  static readonly POTATOES: BlockType | null;
  static readonly POTTED_ACACIA_SAPLING: BlockType | null;
  static readonly POTTED_ALLIUM: BlockType | null;
  static readonly POTTED_AZALEA_BUSH: BlockType | null;
  static readonly POTTED_AZURE_BLUET: BlockType | null;
  static readonly POTTED_BAMBOO: BlockType | null;
  static readonly POTTED_BIRCH_SAPLING: BlockType | null;
  static readonly POTTED_BLUE_ORCHID: BlockType | null;
  static readonly POTTED_BROWN_MUSHROOM: BlockType | null;
  static readonly POTTED_CACTUS: BlockType | null;
  static readonly POTTED_CORNFLOWER: BlockType | null;
  static readonly POTTED_CRIMSON_FUNGUS: BlockType | null;
  static readonly POTTED_CRIMSON_ROOTS: BlockType | null;
  static readonly POTTED_DANDELION: BlockType | null;
  static readonly POTTED_DARK_OAK_SAPLING: BlockType | null;
  static readonly POTTED_DEAD_BUSH: BlockType | null;
  static readonly POTTED_FERN: BlockType | null;
  static readonly POTTED_FLOWERING_AZALEA_BUSH: BlockType | null;
  static readonly POTTED_JUNGLE_SAPLING: BlockType | null;
  static readonly POTTED_LILY_OF_THE_VALLEY: BlockType | null;
  static readonly POTTED_OAK_SAPLING: BlockType | null;
  static readonly POTTED_ORANGE_TULIP: BlockType | null;
  static readonly POTTED_OXEYE_DAISY: BlockType | null;
  static readonly POTTED_PINK_TULIP: BlockType | null;
  static readonly POTTED_POPPY: BlockType | null;
  static readonly POTTED_RED_MUSHROOM: BlockType | null;
  static readonly POTTED_RED_TULIP: BlockType | null;
  static readonly POTTED_SPRUCE_SAPLING: BlockType | null;
  static readonly POTTED_WARPED_FUNGUS: BlockType | null;
  static readonly POTTED_WARPED_ROOTS: BlockType | null;
  static readonly POTTED_WHITE_TULIP: BlockType | null;
  static readonly POTTED_WITHER_ROSE: BlockType | null;
  static readonly POWDER_SNOW: BlockType | null;
  static readonly POWDER_SNOW_CAULDRON: BlockType | null;
  static readonly POWERED_RAIL: BlockType | null;
  static readonly PRISMARINE: BlockType | null;
  static readonly PRISMARINE_BRICK_SLAB: BlockType | null;
  static readonly PRISMARINE_BRICK_STAIRS: BlockType | null;
  static readonly PRISMARINE_BRICKS: BlockType | null;
  static readonly PRISMARINE_SLAB: BlockType | null;
  static readonly PRISMARINE_STAIRS: BlockType | null;
  static readonly PRISMARINE_WALL: BlockType | null;
  static readonly PUMPKIN: BlockType | null;
  static readonly PUMPKIN_STEM: BlockType | null;
  static readonly PURPLE_BANNER: BlockType | null;
  static readonly PURPLE_BED: BlockType | null;
  static readonly PURPLE_CANDLE: BlockType | null;
  static readonly PURPLE_CANDLE_CAKE: BlockType | null;
  static readonly PURPLE_CARPET: BlockType | null;
  static readonly PURPLE_CONCRETE: BlockType | null;
  static readonly PURPLE_CONCRETE_POWDER: BlockType | null;
  static readonly PURPLE_GLAZED_TERRACOTTA: BlockType | null;
  static readonly PURPLE_SHULKER_BOX: BlockType | null;
  static readonly PURPLE_STAINED_GLASS: BlockType | null;
  static readonly PURPLE_STAINED_GLASS_PANE: BlockType | null;
  static readonly PURPLE_TERRACOTTA: BlockType | null;
  static readonly PURPLE_WALL_BANNER: BlockType | null;
  static readonly PURPLE_WOOL: BlockType | null;
  static readonly PURPUR_BLOCK: BlockType | null;
  static readonly PURPUR_PILLAR: BlockType | null;
  static readonly PURPUR_SLAB: BlockType | null;
  static readonly PURPUR_STAIRS: BlockType | null;
  static readonly QUARTZ_BLOCK: BlockType | null;
  static readonly QUARTZ_BRICKS: BlockType | null;
  static readonly QUARTZ_PILLAR: BlockType | null;
  static readonly QUARTZ_SLAB: BlockType | null;
  static readonly QUARTZ_STAIRS: BlockType | null;
  static readonly RAIL: BlockType | null;
  static readonly RAW_COPPER_BLOCK: BlockType | null;
  static readonly RAW_GOLD_BLOCK: BlockType | null;
  static readonly RAW_IRON_BLOCK: BlockType | null;
  static readonly RED_BANNER: BlockType | null;
  static readonly RED_BED: BlockType | null;
  static readonly RED_CANDLE: BlockType | null;
  static readonly RED_CANDLE_CAKE: BlockType | null;
  static readonly RED_CARPET: BlockType | null;
  static readonly RED_CONCRETE: BlockType | null;
  static readonly RED_CONCRETE_POWDER: BlockType | null;
  static readonly RED_GLAZED_TERRACOTTA: BlockType | null;
  static readonly RED_MUSHROOM: BlockType | null;
  static readonly RED_MUSHROOM_BLOCK: BlockType | null;
  static readonly RED_NETHER_BRICK_SLAB: BlockType | null;
  static readonly RED_NETHER_BRICK_STAIRS: BlockType | null;
  static readonly RED_NETHER_BRICK_WALL: BlockType | null;
  static readonly RED_NETHER_BRICKS: BlockType | null;
  static readonly RED_SAND: BlockType | null;
  static readonly RED_SANDSTONE: BlockType | null;
  static readonly RED_SANDSTONE_SLAB: BlockType | null;
  static readonly RED_SANDSTONE_STAIRS: BlockType | null;
  static readonly RED_SANDSTONE_WALL: BlockType | null;
  static readonly RED_SHULKER_BOX: BlockType | null;
  static readonly RED_STAINED_GLASS: BlockType | null;
  static readonly RED_STAINED_GLASS_PANE: BlockType | null;
  static readonly RED_TERRACOTTA: BlockType | null;
  static readonly RED_TULIP: BlockType | null;
  static readonly RED_WALL_BANNER: BlockType | null;
  static readonly RED_WOOL: BlockType | null;
  static readonly REDSTONE_BLOCK: BlockType | null;
  static readonly REDSTONE_LAMP: BlockType | null;
  static readonly REDSTONE_ORE: BlockType | null;
  static readonly REDSTONE_TORCH: BlockType | null;
  static readonly REDSTONE_WALL_TORCH: BlockType | null;
  static readonly REDSTONE_WIRE: BlockType | null;
  static readonly REPEATER: BlockType | null;
  static readonly REPEATING_COMMAND_BLOCK: BlockType | null;
  static readonly RESPAWN_ANCHOR: BlockType | null;
  static readonly ROOTED_DIRT: BlockType | null;
  static readonly ROSE_BUSH: BlockType | null;
  static readonly SAND: BlockType | null;
  static readonly SANDSTONE: BlockType | null;
  static readonly SANDSTONE_SLAB: BlockType | null;
  static readonly SANDSTONE_STAIRS: BlockType | null;
  static readonly SANDSTONE_WALL: BlockType | null;
  static readonly SCAFFOLDING: BlockType | null;
  static readonly SCULK_SENSOR: BlockType | null;
  static readonly SEA_LANTERN: BlockType | null;
  static readonly SEA_PICKLE: BlockType | null;
  static readonly SEAGRASS: BlockType | null;
  static readonly SHROOMLIGHT: BlockType | null;
  static readonly SHULKER_BOX: BlockType | null;
  static readonly SIGN: BlockType | null;
  static readonly SKELETON_SKULL: BlockType | null;
  static readonly SKELETON_WALL_SKULL: BlockType | null;
  static readonly SLIME_BLOCK: BlockType | null;
  static readonly SMALL_AMETHYST_BUD: BlockType | null;
  static readonly SMALL_DRIPLEAF: BlockType | null;
  static readonly SMITHING_TABLE: BlockType | null;
  static readonly SMOKER: BlockType | null;
  static readonly SMOOTH_BASALT: BlockType | null;
  static readonly SMOOTH_QUARTZ: BlockType | null;
  static readonly SMOOTH_QUARTZ_SLAB: BlockType | null;
  static readonly SMOOTH_QUARTZ_STAIRS: BlockType | null;
  static readonly SMOOTH_RED_SANDSTONE: BlockType | null;
  static readonly SMOOTH_RED_SANDSTONE_SLAB: BlockType | null;
  static readonly SMOOTH_RED_SANDSTONE_STAIRS: BlockType | null;
  static readonly SMOOTH_SANDSTONE: BlockType | null;
  static readonly SMOOTH_SANDSTONE_SLAB: BlockType | null;
  static readonly SMOOTH_SANDSTONE_STAIRS: BlockType | null;
  static readonly SMOOTH_STONE: BlockType | null;
  static readonly SMOOTH_STONE_SLAB: BlockType | null;
  static readonly SNOW: BlockType | null;
  static readonly SNOW_BLOCK: BlockType | null;
  static readonly SOUL_CAMPFIRE: BlockType | null;
  static readonly SOUL_FIRE: BlockType | null;
  static readonly SOUL_LANTERN: BlockType | null;
  static readonly SOUL_SAND: BlockType | null;
  static readonly SOUL_SOIL: BlockType | null;
  static readonly SOUL_TORCH: BlockType | null;
  static readonly SOUL_WALL_TORCH: BlockType | null;
  static readonly SPAWNER: BlockType | null;
  static readonly SPONGE: BlockType | null;
  static readonly SPORE_BLOSSOM: BlockType | null;
  static readonly SPRUCE_BUTTON: BlockType | null;
  static readonly SPRUCE_DOOR: BlockType | null;
  static readonly SPRUCE_FENCE: BlockType | null;
  static readonly SPRUCE_FENCE_GATE: BlockType | null;
  static readonly SPRUCE_LEAVES: BlockType | null;
  static readonly SPRUCE_LOG: BlockType | null;
  static readonly SPRUCE_PLANKS: BlockType | null;
  static readonly SPRUCE_PRESSURE_PLATE: BlockType | null;
  static readonly SPRUCE_SAPLING: BlockType | null;
  static readonly SPRUCE_SIGN: BlockType | null;
  static readonly SPRUCE_SLAB: BlockType | null;
  static readonly SPRUCE_STAIRS: BlockType | null;
  static readonly SPRUCE_TRAPDOOR: BlockType | null;
  static readonly SPRUCE_WALL_SIGN: BlockType | null;
  static readonly SPRUCE_WOOD: BlockType | null;
  static readonly STICKY_PISTON: BlockType | null;
  static readonly STONE: BlockType | null;
  static readonly STONE_BRICK_SLAB: BlockType | null;
  static readonly STONE_BRICK_STAIRS: BlockType | null;
  static readonly STONE_BRICK_WALL: BlockType | null;
  static readonly STONE_BRICKS: BlockType | null;
  static readonly STONE_BUTTON: BlockType | null;
  static readonly STONE_PRESSURE_PLATE: BlockType | null;
  static readonly STONE_SLAB: BlockType | null;
  static readonly STONE_STAIRS: BlockType | null;
  static readonly STONECUTTER: BlockType | null;
  static readonly STRIPPED_ACACIA_LOG: BlockType | null;
  static readonly STRIPPED_ACACIA_WOOD: BlockType | null;
  static readonly STRIPPED_BIRCH_LOG: BlockType | null;
  static readonly STRIPPED_BIRCH_WOOD: BlockType | null;
  static readonly STRIPPED_CRIMSON_HYPHAE: BlockType | null;
  static readonly STRIPPED_CRIMSON_STEM: BlockType | null;
  static readonly STRIPPED_DARK_OAK_LOG: BlockType | null;
  static readonly STRIPPED_DARK_OAK_WOOD: BlockType | null;
  static readonly STRIPPED_JUNGLE_LOG: BlockType | null;
  static readonly STRIPPED_JUNGLE_WOOD: BlockType | null;
  static readonly STRIPPED_OAK_LOG: BlockType | null;
  static readonly STRIPPED_OAK_WOOD: BlockType | null;
  static readonly STRIPPED_SPRUCE_LOG: BlockType | null;
  static readonly STRIPPED_SPRUCE_WOOD: BlockType | null;
  static readonly STRIPPED_WARPED_HYPHAE: BlockType | null;
  static readonly STRIPPED_WARPED_STEM: BlockType | null;
  static readonly STRUCTURE_BLOCK: BlockType | null;
  static readonly STRUCTURE_VOID: BlockType | null;
  static readonly SUGAR_CANE: BlockType | null;
  static readonly SUNFLOWER: BlockType | null;
  static readonly SWEET_BERRY_BUSH: BlockType | null;
  static readonly TALL_GRASS: BlockType | null;
  static readonly TALL_SEAGRASS: BlockType | null;
  static readonly TARGET: BlockType | null;
  static readonly TERRACOTTA: BlockType | null;
  static readonly TINTED_GLASS: BlockType | null;
  static readonly TNT: BlockType | null;
  static readonly TORCH: BlockType | null;
  static readonly TRAPPED_CHEST: BlockType | null;
  static readonly TRIPWIRE: BlockType | null;
  static readonly TRIPWIRE_HOOK: BlockType | null;
  static readonly TUBE_CORAL: BlockType | null;
  static readonly TUBE_CORAL_BLOCK: BlockType | null;
  static readonly TUBE_CORAL_FAN: BlockType | null;
  static readonly TUBE_CORAL_WALL_FAN: BlockType | null;
  static readonly TUFF: BlockType | null;
  static readonly TURTLE_EGG: BlockType | null;
  static readonly TWISTING_VINES: BlockType | null;
  static readonly TWISTING_VINES_PLANT: BlockType | null;
  static readonly VINE: BlockType | null;
  static readonly VOID_AIR: BlockType | null;
  static readonly WALL_SIGN: BlockType | null;
  static readonly WALL_TORCH: BlockType | null;
  static readonly WARPED_BUTTON: BlockType | null;
  static readonly WARPED_DOOR: BlockType | null;
  static readonly WARPED_FENCE: BlockType | null;
  static readonly WARPED_FENCE_GATE: BlockType | null;
  static readonly WARPED_FUNGUS: BlockType | null;
  static readonly WARPED_HYPHAE: BlockType | null;
  static readonly WARPED_NYLIUM: BlockType | null;
  static readonly WARPED_PLANKS: BlockType | null;
  static readonly WARPED_PRESSURE_PLATE: BlockType | null;
  static readonly WARPED_ROOTS: BlockType | null;
  static readonly WARPED_SIGN: BlockType | null;
  static readonly WARPED_SLAB: BlockType | null;
  static readonly WARPED_STAIRS: BlockType | null;
  static readonly WARPED_STEM: BlockType | null;
  static readonly WARPED_TRAPDOOR: BlockType | null;
  static readonly WARPED_WALL_SIGN: BlockType | null;
  static readonly WARPED_WART_BLOCK: BlockType | null;
  static readonly WATER: BlockType | null;
  static readonly WATER_CAULDRON: BlockType | null;
  static readonly WAXED_COPPER_BLOCK: BlockType | null;
  static readonly WAXED_CUT_COPPER: BlockType | null;
  static readonly WAXED_CUT_COPPER_SLAB: BlockType | null;
  static readonly WAXED_CUT_COPPER_STAIRS: BlockType | null;
  static readonly WAXED_EXPOSED_COPPER: BlockType | null;
  static readonly WAXED_EXPOSED_CUT_COPPER: BlockType | null;
  static readonly WAXED_EXPOSED_CUT_COPPER_SLAB: BlockType | null;
  static readonly WAXED_EXPOSED_CUT_COPPER_STAIRS: BlockType | null;
  static readonly WAXED_OXIDIZED_COPPER: BlockType | null;
  static readonly WAXED_OXIDIZED_CUT_COPPER: BlockType | null;
  static readonly WAXED_OXIDIZED_CUT_COPPER_SLAB: BlockType | null;
  static readonly WAXED_OXIDIZED_CUT_COPPER_STAIRS: BlockType | null;
  static readonly WAXED_WEATHERED_COPPER: BlockType | null;
  static readonly WAXED_WEATHERED_CUT_COPPER: BlockType | null;
  static readonly WAXED_WEATHERED_CUT_COPPER_SLAB: BlockType | null;
  static readonly WAXED_WEATHERED_CUT_COPPER_STAIRS: BlockType | null;
  static readonly WEATHERED_COPPER: BlockType | null;
  static readonly WEATHERED_CUT_COPPER: BlockType | null;
  static readonly WEATHERED_CUT_COPPER_SLAB: BlockType | null;
  static readonly WEATHERED_CUT_COPPER_STAIRS: BlockType | null;
  static readonly WEEPING_VINES: BlockType | null;
  static readonly WEEPING_VINES_PLANT: BlockType | null;
  static readonly WET_SPONGE: BlockType | null;
  static readonly WHEAT: BlockType | null;
  static readonly WHITE_BANNER: BlockType | null;
  static readonly WHITE_BED: BlockType | null;
  static readonly WHITE_CANDLE: BlockType | null;
  static readonly WHITE_CANDLE_CAKE: BlockType | null;
  static readonly WHITE_CARPET: BlockType | null;
  static readonly WHITE_CONCRETE: BlockType | null;
  static readonly WHITE_CONCRETE_POWDER: BlockType | null;
  static readonly WHITE_GLAZED_TERRACOTTA: BlockType | null;
  static readonly WHITE_SHULKER_BOX: BlockType | null;
  static readonly WHITE_STAINED_GLASS: BlockType | null;
  static readonly WHITE_STAINED_GLASS_PANE: BlockType | null;
  static readonly WHITE_TERRACOTTA: BlockType | null;
  static readonly WHITE_TULIP: BlockType | null;
  static readonly WHITE_WALL_BANNER: BlockType | null;
  static readonly WHITE_WOOL: BlockType | null;
  static readonly WITHER_ROSE: BlockType | null;
  static readonly WITHER_SKELETON_SKULL: BlockType | null;
  static readonly WITHER_SKELETON_WALL_SKULL: BlockType | null;
  static readonly YELLOW_BANNER: BlockType | null;
  static readonly YELLOW_BED: BlockType | null;
  static readonly YELLOW_CANDLE: BlockType | null;
  static readonly YELLOW_CANDLE_CAKE: BlockType | null;
  static readonly YELLOW_CARPET: BlockType | null;
  static readonly YELLOW_CONCRETE: BlockType | null;
  static readonly YELLOW_CONCRETE_POWDER: BlockType | null;
  static readonly YELLOW_GLAZED_TERRACOTTA: BlockType | null;
  static readonly YELLOW_SHULKER_BOX: BlockType | null;
  static readonly YELLOW_STAINED_GLASS: BlockType | null;
  static readonly YELLOW_STAINED_GLASS_PANE: BlockType | null;
  static readonly YELLOW_TERRACOTTA: BlockType | null;
  static readonly YELLOW_WALL_BANNER: BlockType | null;
  static readonly YELLOW_WOOL: BlockType | null;
  static readonly ZOMBIE_HEAD: BlockType | null;
  static readonly ZOMBIE_WALL_HEAD: BlockType | null;
  /**
   * Gets the {@link BlockType} associated with the given id.
  */
  static get(id: string): BlockType | null;
}
/**
 * A category of blocks. This is due to the splitting up of
 * blocks such as wool into separate ids.
*/
export class BlockCategory extends Category<BlockType> {
  static readonly REGISTRY: NamespacedRegistry<BlockCategory>;
  constructor(id: string);
  /**
   * Checks whether the BlockStateHolder is contained within
   * this category.
   *
   * @param blockStateHolder The blockstateholder
   * @return If it's a part of this category
  */
  contains<B>(blockStateHolder: B): boolean;
  /**
   * Checks if this category contains `object`.
   *
   * @param object the object
   * @return `true` if this category contains the object
  */
  contains(object: T): boolean;
}
export interface BlockCategory extends Category<BlockType>, Keyed {}
/**
 * A Fuzzy BlockState. Used for partial matching.
 *
 * 
 * Immutable, construct with {@link FuzzyBlockState.Builder}.
 * 
*/
export class FuzzyBlockState extends BlockState {
  /**
   * Gets a full BlockState from this fuzzy one, filling in
   * properties with default values where necessary.
   *
   * @return The full BlockState
  */
  getFullState(): BlockState;
  toImmutableState(): BlockState;
  /**
   * Gets an instance of a builder.
   *
   * @return The builder
  */
  static builder(): Builder;
}
/**
 * Stores a list of common {@link BlockCategory BlockCategories}.
 *
 * @see BlockCategory
*/
export class BlockCategories {
  static readonly ACACIA_LOGS: BlockCategory;
  static readonly ANVIL: BlockCategory;
  static readonly BAMBOO_PLANTABLE_ON: BlockCategory;
  static readonly BANNERS: BlockCategory;
  static readonly BASE_STONE_NETHER: BlockCategory;
  static readonly BASE_STONE_OVERWORLD: BlockCategory;
  static readonly BEACON_BASE_BLOCKS: BlockCategory;
  static readonly BEDS: BlockCategory;
  static readonly BEE_GROWABLES: BlockCategory;
  static readonly BEEHIVES: BlockCategory;
  static readonly BIRCH_LOGS: BlockCategory;
  static readonly BUTTONS: BlockCategory;
  static readonly CAMPFIRES: BlockCategory;
  static readonly CANDLE_CAKES: BlockCategory;
  static readonly CANDLES: BlockCategory;
  static readonly CARPETS: BlockCategory;
  static readonly CAULDRONS: BlockCategory;
  static readonly CAVE_VINES: BlockCategory;
  static readonly CLIMBABLE: BlockCategory;
  static readonly COAL_ORES: BlockCategory;
  static readonly COPPER_ORES: BlockCategory;
  static readonly CORAL_BLOCKS: BlockCategory;
  static readonly CORAL_PLANTS: BlockCategory;
  static readonly CORALS: BlockCategory;
  static readonly CRIMSON_STEMS: BlockCategory;
  static readonly CROPS: BlockCategory;
  static readonly CRYSTAL_SOUND_BLOCKS: BlockCategory;
  static readonly DARK_OAK_LOGS: BlockCategory;
  static readonly DEEPSLATE_ORE_REPLACEABLES: BlockCategory;
  static readonly DIAMOND_ORES: BlockCategory;
  static readonly DIRT: BlockCategory;
  static readonly DIRT_LIKE: BlockCategory;
  static readonly DOORS: BlockCategory;
  static readonly DRAGON_IMMUNE: BlockCategory;
  static readonly DRIPSTONE_REPLACEABLE_BLOCKS: BlockCategory;
  static readonly EMERALD_ORES: BlockCategory;
  static readonly ENDERMAN_HOLDABLE: BlockCategory;
  static readonly FEATURES_CANNOT_REPLACE: BlockCategory;
  static readonly FENCE_GATES: BlockCategory;
  static readonly FENCES: BlockCategory;
  static readonly FIRE: BlockCategory;
  static readonly FLOWER_POTS: BlockCategory;
  static readonly FLOWERS: BlockCategory;
  static readonly GEODE_INVALID_BLOCKS: BlockCategory;
  static readonly GOLD_ORES: BlockCategory;
  static readonly GUARDED_BY_PIGLINS: BlockCategory;
  static readonly HOGLIN_REPELLENTS: BlockCategory;
  static readonly ICE: BlockCategory;
  static readonly IMPERMEABLE: BlockCategory;
  static readonly INFINIBURN_END: BlockCategory;
  static readonly INFINIBURN_NETHER: BlockCategory;
  static readonly INFINIBURN_OVERWORLD: BlockCategory;
  static readonly INSIDE_STEP_SOUND_BLOCKS: BlockCategory;
  static readonly IRON_ORES: BlockCategory;
  static readonly JUNGLE_LOGS: BlockCategory;
  static readonly LAPIS_ORES: BlockCategory;
  static readonly LAVA_POOL_STONE_REPLACEABLES: BlockCategory;
  static readonly LEAVES: BlockCategory;
  static readonly LOGS: BlockCategory;
  static readonly LOGS_THAT_BURN: BlockCategory;
  static readonly LUSH_GROUND_REPLACEABLE: BlockCategory;
  static readonly MINEABLE_AXE: BlockCategory;
  static readonly MINEABLE_HOE: BlockCategory;
  static readonly MINEABLE_PICKAXE: BlockCategory;
  static readonly MINEABLE_SHOVEL: BlockCategory;
  static readonly MOSS_REPLACEABLE: BlockCategory;
  static readonly MUSHROOM_GROW_BLOCK: BlockCategory;
  static readonly NEEDS_DIAMOND_TOOL: BlockCategory;
  static readonly NEEDS_IRON_TOOL: BlockCategory;
  static readonly NEEDS_STONE_TOOL: BlockCategory;
  static readonly NON_FLAMMABLE_WOOD: BlockCategory;
  static readonly NYLIUM: BlockCategory;
  static readonly OAK_LOGS: BlockCategory;
  static readonly OCCLUDES_VIBRATION_SIGNALS: BlockCategory;
  static readonly PIGLIN_REPELLENTS: BlockCategory;
  static readonly PLANKS: BlockCategory;
  static readonly PORTALS: BlockCategory;
  static readonly PRESSURE_PLATES: BlockCategory;
  static readonly PREVENT_MOB_SPAWNING_INSIDE: BlockCategory;
  static readonly RAILS: BlockCategory;
  static readonly REDSTONE_ORES: BlockCategory;
  static readonly SAND: BlockCategory;
  static readonly SAPLINGS: BlockCategory;
  static readonly SHULKER_BOXES: BlockCategory;
  static readonly SIGNS: BlockCategory;
  static readonly SLABS: BlockCategory;
  static readonly SMALL_DRIPLEAF_PLACEABLE: BlockCategory;
  static readonly SMALL_FLOWERS: BlockCategory;
  static readonly SNOW: BlockCategory;
  static readonly SOUL_FIRE_BASE_BLOCKS: BlockCategory;
  static readonly SOUL_SPEED_BLOCKS: BlockCategory;
  static readonly SPRUCE_LOGS: BlockCategory;
  static readonly STAIRS: BlockCategory;
  static readonly STANDING_SIGNS: BlockCategory;
  static readonly STONE_BRICKS: BlockCategory;
  static readonly STONE_ORE_REPLACEABLES: BlockCategory;
  static readonly STONE_PRESSURE_PLATES: BlockCategory;
  static readonly STRIDER_WARM_BLOCKS: BlockCategory;
  static readonly TALL_FLOWERS: BlockCategory;
  static readonly TRAPDOORS: BlockCategory;
  static readonly UNDERWATER_BONEMEALS: BlockCategory;
  static readonly UNSTABLE_BOTTOM_CENTER: BlockCategory;
  static readonly VALID_SPAWN: BlockCategory;
  static readonly WALL_CORALS: BlockCategory;
  static readonly WALL_POST_OVERRIDE: BlockCategory;
  static readonly WALL_SIGNS: BlockCategory;
  static readonly WALLS: BlockCategory;
  static readonly WARPED_STEMS: BlockCategory;
  static readonly WART_BLOCKS: BlockCategory;
  static readonly WITHER_IMMUNE: BlockCategory;
  static readonly WITHER_SUMMON_BASE_BLOCKS: BlockCategory;
  static readonly WOODEN_BUTTONS: BlockCategory;
  static readonly WOODEN_DOORS: BlockCategory;
  static readonly WOODEN_FENCES: BlockCategory;
  static readonly WOODEN_PRESSURE_PLATES: BlockCategory;
  static readonly WOODEN_SLABS: BlockCategory;
  static readonly WOODEN_STAIRS: BlockCategory;
  static readonly WOODEN_TRAPDOORS: BlockCategory;
  static readonly WOOL: BlockCategory;
  /**
   * Gets the {@link BlockCategory} associated with the given id.
  */
  static get(id: string): BlockCategory;
}

}
declare module 'com.sk89q.worldedit.world.item' {
import { ItemMaterial } from 'com.sk89q.worldedit.world.registry';
import { LazyReference } from 'com.sk89q.worldedit.util.concurrency';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { BaseItem } from 'com.sk89q.worldedit.blocks';
import { Category, NamespacedRegistry, Keyed } from 'com.sk89q.worldedit.registry';
import { BlockType } from 'com.sk89q.worldedit.world.block';
export class ItemType extends Keyed {
  static readonly REGISTRY: NamespacedRegistry<ItemType>;
  constructor(id: string);
  /**
   * The id of this object in the registry. Must be unique, and lowercase. Certain registries (e.g Namespaced ones) may have additional restrictions.
   * @return an id
  */
  getId(): string;
  getRichName(): Component;
  /**
   * Gets the name of this item, or the ID if the name cannot be found.
   *
   * @return The name, or ID
   * @deprecated Names are translatable now, use {@link #getRichName()}.
  */
  getName(): string;
  /**
   * Gets whether this item type has a block representation.
   *
   * @return If it has a block
  */
  hasBlockType(): boolean;
  /**
   * Gets the block representation of this item type, if it exists.
   *
   * @return The block representation
  */
  getBlockType(): BlockType | null;
  /**
   * Get the material for this ItemType.
   *
   * @return The material
  */
  getMaterial(): ItemMaterial;
  toString(): string;
  hashCode(): number;
  equals(obj: any): boolean;
}
/**
 * Stores a list of common {@link ItemCategory ItemCategories}.
 *
 * @see ItemCategory
*/
export class ItemCategories {
  static readonly ACACIA_LOGS: ItemCategory;
  static readonly ANVIL: ItemCategory;
  static readonly ARROWS: ItemCategory;
  static readonly AXOLOTL_TEMPT_ITEMS: ItemCategory;
  static readonly BANNERS: ItemCategory;
  static readonly BEACON_PAYMENT_ITEMS: ItemCategory;
  static readonly BEDS: ItemCategory;
  static readonly BIRCH_LOGS: ItemCategory;
  static readonly BOATS: ItemCategory;
  static readonly BUTTONS: ItemCategory;
  static readonly CANDLES: ItemCategory;
  static readonly CARPETS: ItemCategory;
  static readonly CLUSTER_MAX_HARVESTABLES: ItemCategory;
  static readonly COAL_ORES: ItemCategory;
  static readonly COALS: ItemCategory;
  static readonly COPPER_ORES: ItemCategory;
  static readonly CREEPER_DROP_MUSIC_DISCS: ItemCategory;
  static readonly CRIMSON_STEMS: ItemCategory;
  static readonly DARK_OAK_LOGS: ItemCategory;
  static readonly DIAMOND_ORES: ItemCategory;
  static readonly DOORS: ItemCategory;
  static readonly EMERALD_ORES: ItemCategory;
  static readonly FENCES: ItemCategory;
  static readonly FISHES: ItemCategory;
  static readonly FLOWERS: ItemCategory;
  static readonly FOX_FOOD: ItemCategory;
  static readonly FREEZE_IMMUNE_WEARABLES: ItemCategory;
  static readonly FURNACE_MATERIALS: ItemCategory;
  static readonly GOLD_ORES: ItemCategory;
  static readonly IGNORED_BY_PIGLIN_BABIES: ItemCategory;
  static readonly IRON_ORES: ItemCategory;
  static readonly JUNGLE_LOGS: ItemCategory;
  static readonly LAPIS_ORES: ItemCategory;
  static readonly LEAVES: ItemCategory;
  static readonly LECTERN_BOOKS: ItemCategory;
  static readonly LOGS: ItemCategory;
  static readonly LOGS_THAT_BURN: ItemCategory;
  static readonly MUSIC_DISCS: ItemCategory;
  static readonly NON_FLAMMABLE_WOOD: ItemCategory;
  static readonly OAK_LOGS: ItemCategory;
  static readonly OCCLUDES_VIBRATION_SIGNALS: ItemCategory;
  static readonly PIGLIN_FOOD: ItemCategory;
  static readonly PIGLIN_LOVED: ItemCategory;
  static readonly PIGLIN_REPELLENTS: ItemCategory;
  static readonly PLANKS: ItemCategory;
  static readonly RAILS: ItemCategory;
  static readonly REDSTONE_ORES: ItemCategory;
  static readonly SAND: ItemCategory;
  static readonly SAPLINGS: ItemCategory;
  static readonly SIGNS: ItemCategory;
  static readonly SLABS: ItemCategory;
  static readonly SMALL_FLOWERS: ItemCategory;
  static readonly SOUL_FIRE_BASE_BLOCKS: ItemCategory;
  static readonly SPRUCE_LOGS: ItemCategory;
  static readonly STAIRS: ItemCategory;
  static readonly STONE_BRICKS: ItemCategory;
  static readonly STONE_CRAFTING_MATERIALS: ItemCategory;
  static readonly STONE_TOOL_MATERIALS: ItemCategory;
  static readonly TALL_FLOWERS: ItemCategory;
  static readonly TRAPDOORS: ItemCategory;
  static readonly WALLS: ItemCategory;
  static readonly WARPED_STEMS: ItemCategory;
  static readonly WOODEN_BUTTONS: ItemCategory;
  static readonly WOODEN_DOORS: ItemCategory;
  static readonly WOODEN_FENCES: ItemCategory;
  static readonly WOODEN_PRESSURE_PLATES: ItemCategory;
  static readonly WOODEN_SLABS: ItemCategory;
  static readonly WOODEN_STAIRS: ItemCategory;
  static readonly WOODEN_TRAPDOORS: ItemCategory;
  static readonly WOOL: ItemCategory;
  /**
   * Gets the {@link ItemCategory} associated with the given id.
  */
  static get(id: string): ItemCategory;
}
/**
 * Stores a list of common {@link ItemType ItemTypes}.
 *
 * @see ItemType
*/
export class ItemTypes {
  static readonly ACACIA_BOAT: ItemType | null;
  static readonly ACACIA_BUTTON: ItemType | null;
  static readonly ACACIA_DOOR: ItemType | null;
  static readonly ACACIA_FENCE: ItemType | null;
  static readonly ACACIA_FENCE_GATE: ItemType | null;
  static readonly ACACIA_LEAVES: ItemType | null;
  static readonly ACACIA_LOG: ItemType | null;
  static readonly ACACIA_PLANKS: ItemType | null;
  static readonly ACACIA_PRESSURE_PLATE: ItemType | null;
  static readonly ACACIA_SAPLING: ItemType | null;
  static readonly ACACIA_SIGN: ItemType | null;
  static readonly ACACIA_SLAB: ItemType | null;
  static readonly ACACIA_STAIRS: ItemType | null;
  static readonly ACACIA_TRAPDOOR: ItemType | null;
  static readonly ACACIA_WOOD: ItemType | null;
  static readonly ACTIVATOR_RAIL: ItemType | null;
  static readonly AIR: ItemType | null;
  static readonly ALLIUM: ItemType | null;
  static readonly AMETHYST_BLOCK: ItemType | null;
  static readonly AMETHYST_CLUSTER: ItemType | null;
  static readonly AMETHYST_SHARD: ItemType | null;
  static readonly ANCIENT_DEBRIS: ItemType | null;
  static readonly ANDESITE: ItemType | null;
  static readonly ANDESITE_SLAB: ItemType | null;
  static readonly ANDESITE_STAIRS: ItemType | null;
  static readonly ANDESITE_WALL: ItemType | null;
  static readonly ANVIL: ItemType | null;
  static readonly APPLE: ItemType | null;
  static readonly ARMOR_STAND: ItemType | null;
  static readonly ARROW: ItemType | null;
  static readonly AXOLOTL_BUCKET: ItemType | null;
  static readonly AXOLOTL_SPAWN_EGG: ItemType | null;
  static readonly AZALEA: ItemType | null;
  static readonly AZALEA_LEAVES: ItemType | null;
  static readonly AZURE_BLUET: ItemType | null;
  static readonly BAKED_POTATO: ItemType | null;
  static readonly BAMBOO: ItemType | null;
  static readonly BARREL: ItemType | null;
  static readonly BARRIER: ItemType | null;
  static readonly BASALT: ItemType | null;
  static readonly BAT_SPAWN_EGG: ItemType | null;
  static readonly BEACON: ItemType | null;
  static readonly BEDROCK: ItemType | null;
  static readonly BEE_NEST: ItemType | null;
  static readonly BEE_SPAWN_EGG: ItemType | null;
  static readonly BEEF: ItemType | null;
  static readonly BEEHIVE: ItemType | null;
  static readonly BEETROOT: ItemType | null;
  static readonly BEETROOT_SEEDS: ItemType | null;
  static readonly BEETROOT_SOUP: ItemType | null;
  static readonly BELL: ItemType | null;
  static readonly BIG_DRIPLEAF: ItemType | null;
  static readonly BIRCH_BOAT: ItemType | null;
  static readonly BIRCH_BUTTON: ItemType | null;
  static readonly BIRCH_DOOR: ItemType | null;
  static readonly BIRCH_FENCE: ItemType | null;
  static readonly BIRCH_FENCE_GATE: ItemType | null;
  static readonly BIRCH_LEAVES: ItemType | null;
  static readonly BIRCH_LOG: ItemType | null;
  static readonly BIRCH_PLANKS: ItemType | null;
  static readonly BIRCH_PRESSURE_PLATE: ItemType | null;
  static readonly BIRCH_SAPLING: ItemType | null;
  static readonly BIRCH_SIGN: ItemType | null;
  static readonly BIRCH_SLAB: ItemType | null;
  static readonly BIRCH_STAIRS: ItemType | null;
  static readonly BIRCH_TRAPDOOR: ItemType | null;
  static readonly BIRCH_WOOD: ItemType | null;
  static readonly BLACK_BANNER: ItemType | null;
  static readonly BLACK_BED: ItemType | null;
  static readonly BLACK_CANDLE: ItemType | null;
  static readonly BLACK_CARPET: ItemType | null;
  static readonly BLACK_CONCRETE: ItemType | null;
  static readonly BLACK_CONCRETE_POWDER: ItemType | null;
  static readonly BLACK_DYE: ItemType | null;
  static readonly BLACK_GLAZED_TERRACOTTA: ItemType | null;
  static readonly BLACK_SHULKER_BOX: ItemType | null;
  static readonly BLACK_STAINED_GLASS: ItemType | null;
  static readonly BLACK_STAINED_GLASS_PANE: ItemType | null;
  static readonly BLACK_TERRACOTTA: ItemType | null;
  static readonly BLACK_WOOL: ItemType | null;
  static readonly BLACKSTONE: ItemType | null;
  static readonly BLACKSTONE_SLAB: ItemType | null;
  static readonly BLACKSTONE_STAIRS: ItemType | null;
  static readonly BLACKSTONE_WALL: ItemType | null;
  static readonly BLAST_FURNACE: ItemType | null;
  static readonly BLAZE_POWDER: ItemType | null;
  static readonly BLAZE_ROD: ItemType | null;
  static readonly BLAZE_SPAWN_EGG: ItemType | null;
  static readonly BLUE_BANNER: ItemType | null;
  static readonly BLUE_BED: ItemType | null;
  static readonly BLUE_CANDLE: ItemType | null;
  static readonly BLUE_CARPET: ItemType | null;
  static readonly BLUE_CONCRETE: ItemType | null;
  static readonly BLUE_CONCRETE_POWDER: ItemType | null;
  static readonly BLUE_DYE: ItemType | null;
  static readonly BLUE_GLAZED_TERRACOTTA: ItemType | null;
  static readonly BLUE_ICE: ItemType | null;
  static readonly BLUE_ORCHID: ItemType | null;
  static readonly BLUE_SHULKER_BOX: ItemType | null;
  static readonly BLUE_STAINED_GLASS: ItemType | null;
  static readonly BLUE_STAINED_GLASS_PANE: ItemType | null;
  static readonly BLUE_TERRACOTTA: ItemType | null;
  static readonly BLUE_WOOL: ItemType | null;
  static readonly BONE: ItemType | null;
  static readonly BONE_BLOCK: ItemType | null;
  static readonly BONE_MEAL: ItemType | null;
  static readonly BOOK: ItemType | null;
  static readonly BOOKSHELF: ItemType | null;
  static readonly BOW: ItemType | null;
  static readonly BOWL: ItemType | null;
  static readonly BRAIN_CORAL: ItemType | null;
  static readonly BRAIN_CORAL_BLOCK: ItemType | null;
  static readonly BRAIN_CORAL_FAN: ItemType | null;
  static readonly BREAD: ItemType | null;
  static readonly BREWING_STAND: ItemType | null;
  static readonly BRICK: ItemType | null;
  static readonly BRICK_SLAB: ItemType | null;
  static readonly BRICK_STAIRS: ItemType | null;
  static readonly BRICK_WALL: ItemType | null;
  static readonly BRICKS: ItemType | null;
  static readonly BROWN_BANNER: ItemType | null;
  static readonly BROWN_BED: ItemType | null;
  static readonly BROWN_CANDLE: ItemType | null;
  static readonly BROWN_CARPET: ItemType | null;
  static readonly BROWN_CONCRETE: ItemType | null;
  static readonly BROWN_CONCRETE_POWDER: ItemType | null;
  static readonly BROWN_DYE: ItemType | null;
  static readonly BROWN_GLAZED_TERRACOTTA: ItemType | null;
  static readonly BROWN_MUSHROOM: ItemType | null;
  static readonly BROWN_MUSHROOM_BLOCK: ItemType | null;
  static readonly BROWN_SHULKER_BOX: ItemType | null;
  static readonly BROWN_STAINED_GLASS: ItemType | null;
  static readonly BROWN_STAINED_GLASS_PANE: ItemType | null;
  static readonly BROWN_TERRACOTTA: ItemType | null;
  static readonly BROWN_WOOL: ItemType | null;
  static readonly BUBBLE_CORAL: ItemType | null;
  static readonly BUBBLE_CORAL_BLOCK: ItemType | null;
  static readonly BUBBLE_CORAL_FAN: ItemType | null;
  static readonly BUCKET: ItemType | null;
  static readonly BUDDING_AMETHYST: ItemType | null;
  static readonly BUNDLE: ItemType | null;
  static readonly CACTUS: ItemType | null;
  static readonly CACTUS_GREEN: ItemType | null;
  static readonly CAKE: ItemType | null;
  static readonly CALCITE: ItemType | null;
  static readonly CAMPFIRE: ItemType | null;
  static readonly CANDLE: ItemType | null;
  static readonly CARROT: ItemType | null;
  static readonly CARROT_ON_A_STICK: ItemType | null;
  static readonly CARTOGRAPHY_TABLE: ItemType | null;
  static readonly CARVED_PUMPKIN: ItemType | null;
  static readonly CAT_SPAWN_EGG: ItemType | null;
  static readonly CAULDRON: ItemType | null;
  static readonly CAVE_SPIDER_SPAWN_EGG: ItemType | null;
  static readonly CHAIN: ItemType | null;
  static readonly CHAIN_COMMAND_BLOCK: ItemType | null;
  static readonly CHAINMAIL_BOOTS: ItemType | null;
  static readonly CHAINMAIL_CHESTPLATE: ItemType | null;
  static readonly CHAINMAIL_HELMET: ItemType | null;
  static readonly CHAINMAIL_LEGGINGS: ItemType | null;
  static readonly CHARCOAL: ItemType | null;
  static readonly CHEST: ItemType | null;
  static readonly CHEST_MINECART: ItemType | null;
  static readonly CHICKEN: ItemType | null;
  static readonly CHICKEN_SPAWN_EGG: ItemType | null;
  static readonly CHIPPED_ANVIL: ItemType | null;
  static readonly CHISELED_DEEPSLATE: ItemType | null;
  static readonly CHISELED_NETHER_BRICKS: ItemType | null;
  static readonly CHISELED_POLISHED_BLACKSTONE: ItemType | null;
  static readonly CHISELED_QUARTZ_BLOCK: ItemType | null;
  static readonly CHISELED_RED_SANDSTONE: ItemType | null;
  static readonly CHISELED_SANDSTONE: ItemType | null;
  static readonly CHISELED_STONE_BRICKS: ItemType | null;
  static readonly CHORUS_FLOWER: ItemType | null;
  static readonly CHORUS_FRUIT: ItemType | null;
  static readonly CHORUS_PLANT: ItemType | null;
  static readonly CLAY: ItemType | null;
  static readonly CLAY_BALL: ItemType | null;
  static readonly CLOCK: ItemType | null;
  static readonly COAL: ItemType | null;
  static readonly COAL_BLOCK: ItemType | null;
  static readonly COAL_ORE: ItemType | null;
  static readonly COARSE_DIRT: ItemType | null;
  static readonly COBBLED_DEEPSLATE: ItemType | null;
  static readonly COBBLED_DEEPSLATE_SLAB: ItemType | null;
  static readonly COBBLED_DEEPSLATE_STAIRS: ItemType | null;
  static readonly COBBLED_DEEPSLATE_WALL: ItemType | null;
  static readonly COBBLESTONE: ItemType | null;
  static readonly COBBLESTONE_SLAB: ItemType | null;
  static readonly COBBLESTONE_STAIRS: ItemType | null;
  static readonly COBBLESTONE_WALL: ItemType | null;
  static readonly COBWEB: ItemType | null;
  static readonly COCOA_BEANS: ItemType | null;
  static readonly COD: ItemType | null;
  static readonly COD_BUCKET: ItemType | null;
  static readonly COD_SPAWN_EGG: ItemType | null;
  static readonly COMMAND_BLOCK: ItemType | null;
  static readonly COMMAND_BLOCK_MINECART: ItemType | null;
  static readonly COMPARATOR: ItemType | null;
  static readonly COMPASS: ItemType | null;
  static readonly COMPOSTER: ItemType | null;
  static readonly CONDUIT: ItemType | null;
  static readonly COOKED_BEEF: ItemType | null;
  static readonly COOKED_CHICKEN: ItemType | null;
  static readonly COOKED_COD: ItemType | null;
  static readonly COOKED_MUTTON: ItemType | null;
  static readonly COOKED_PORKCHOP: ItemType | null;
  static readonly COOKED_RABBIT: ItemType | null;
  static readonly COOKED_SALMON: ItemType | null;
  static readonly COOKIE: ItemType | null;
  static readonly COPPER_BLOCK: ItemType | null;
  static readonly COPPER_INGOT: ItemType | null;
  static readonly COPPER_ORE: ItemType | null;
  static readonly CORNFLOWER: ItemType | null;
  static readonly COW_SPAWN_EGG: ItemType | null;
  static readonly CRACKED_DEEPSLATE_BRICKS: ItemType | null;
  static readonly CRACKED_DEEPSLATE_TILES: ItemType | null;
  static readonly CRACKED_NETHER_BRICKS: ItemType | null;
  static readonly CRACKED_POLISHED_BLACKSTONE_BRICKS: ItemType | null;
  static readonly CRACKED_STONE_BRICKS: ItemType | null;
  static readonly CRAFTING_TABLE: ItemType | null;
  static readonly CREEPER_BANNER_PATTERN: ItemType | null;
  static readonly CREEPER_HEAD: ItemType | null;
  static readonly CREEPER_SPAWN_EGG: ItemType | null;
  static readonly CRIMSON_BUTTON: ItemType | null;
  static readonly CRIMSON_DOOR: ItemType | null;
  static readonly CRIMSON_FENCE: ItemType | null;
  static readonly CRIMSON_FENCE_GATE: ItemType | null;
  static readonly CRIMSON_FUNGUS: ItemType | null;
  static readonly CRIMSON_HYPHAE: ItemType | null;
  static readonly CRIMSON_NYLIUM: ItemType | null;
  static readonly CRIMSON_PLANKS: ItemType | null;
  static readonly CRIMSON_PRESSURE_PLATE: ItemType | null;
  static readonly CRIMSON_ROOTS: ItemType | null;
  static readonly CRIMSON_SIGN: ItemType | null;
  static readonly CRIMSON_SLAB: ItemType | null;
  static readonly CRIMSON_STAIRS: ItemType | null;
  static readonly CRIMSON_STEM: ItemType | null;
  static readonly CRIMSON_TRAPDOOR: ItemType | null;
  static readonly CROSSBOW: ItemType | null;
  static readonly CRYING_OBSIDIAN: ItemType | null;
  static readonly CUT_COPPER: ItemType | null;
  static readonly CUT_COPPER_SLAB: ItemType | null;
  static readonly CUT_COPPER_STAIRS: ItemType | null;
  static readonly CUT_RED_SANDSTONE: ItemType | null;
  static readonly CUT_RED_SANDSTONE_SLAB: ItemType | null;
  static readonly CUT_SANDSTONE: ItemType | null;
  static readonly CUT_SANDSTONE_SLAB: ItemType | null;
  static readonly CYAN_BANNER: ItemType | null;
  static readonly CYAN_BED: ItemType | null;
  static readonly CYAN_CANDLE: ItemType | null;
  static readonly CYAN_CARPET: ItemType | null;
  static readonly CYAN_CONCRETE: ItemType | null;
  static readonly CYAN_CONCRETE_POWDER: ItemType | null;
  static readonly CYAN_DYE: ItemType | null;
  static readonly CYAN_GLAZED_TERRACOTTA: ItemType | null;
  static readonly CYAN_SHULKER_BOX: ItemType | null;
  static readonly CYAN_STAINED_GLASS: ItemType | null;
  static readonly CYAN_STAINED_GLASS_PANE: ItemType | null;
  static readonly CYAN_TERRACOTTA: ItemType | null;
  static readonly CYAN_WOOL: ItemType | null;
  static readonly DAMAGED_ANVIL: ItemType | null;
  static readonly DANDELION: ItemType | null;
  static readonly DANDELION_YELLOW: ItemType | null;
  static readonly DARK_OAK_BOAT: ItemType | null;
  static readonly DARK_OAK_BUTTON: ItemType | null;
  static readonly DARK_OAK_DOOR: ItemType | null;
  static readonly DARK_OAK_FENCE: ItemType | null;
  static readonly DARK_OAK_FENCE_GATE: ItemType | null;
  static readonly DARK_OAK_LEAVES: ItemType | null;
  static readonly DARK_OAK_LOG: ItemType | null;
  static readonly DARK_OAK_PLANKS: ItemType | null;
  static readonly DARK_OAK_PRESSURE_PLATE: ItemType | null;
  static readonly DARK_OAK_SAPLING: ItemType | null;
  static readonly DARK_OAK_SIGN: ItemType | null;
  static readonly DARK_OAK_SLAB: ItemType | null;
  static readonly DARK_OAK_STAIRS: ItemType | null;
  static readonly DARK_OAK_TRAPDOOR: ItemType | null;
  static readonly DARK_OAK_WOOD: ItemType | null;
  static readonly DARK_PRISMARINE: ItemType | null;
  static readonly DARK_PRISMARINE_SLAB: ItemType | null;
  static readonly DARK_PRISMARINE_STAIRS: ItemType | null;
  static readonly DAYLIGHT_DETECTOR: ItemType | null;
  static readonly DEAD_BRAIN_CORAL: ItemType | null;
  static readonly DEAD_BRAIN_CORAL_BLOCK: ItemType | null;
  static readonly DEAD_BRAIN_CORAL_FAN: ItemType | null;
  static readonly DEAD_BUBBLE_CORAL: ItemType | null;
  static readonly DEAD_BUBBLE_CORAL_BLOCK: ItemType | null;
  static readonly DEAD_BUBBLE_CORAL_FAN: ItemType | null;
  static readonly DEAD_BUSH: ItemType | null;
  static readonly DEAD_FIRE_CORAL: ItemType | null;
  static readonly DEAD_FIRE_CORAL_BLOCK: ItemType | null;
  static readonly DEAD_FIRE_CORAL_FAN: ItemType | null;
  static readonly DEAD_HORN_CORAL: ItemType | null;
  static readonly DEAD_HORN_CORAL_BLOCK: ItemType | null;
  static readonly DEAD_HORN_CORAL_FAN: ItemType | null;
  static readonly DEAD_TUBE_CORAL: ItemType | null;
  static readonly DEAD_TUBE_CORAL_BLOCK: ItemType | null;
  static readonly DEAD_TUBE_CORAL_FAN: ItemType | null;
  static readonly DEBUG_STICK: ItemType | null;
  static readonly DEEPSLATE: ItemType | null;
  static readonly DEEPSLATE_BRICK_SLAB: ItemType | null;
  static readonly DEEPSLATE_BRICK_STAIRS: ItemType | null;
  static readonly DEEPSLATE_BRICK_WALL: ItemType | null;
  static readonly DEEPSLATE_BRICKS: ItemType | null;
  static readonly DEEPSLATE_COAL_ORE: ItemType | null;
  static readonly DEEPSLATE_COPPER_ORE: ItemType | null;
  static readonly DEEPSLATE_DIAMOND_ORE: ItemType | null;
  static readonly DEEPSLATE_EMERALD_ORE: ItemType | null;
  static readonly DEEPSLATE_GOLD_ORE: ItemType | null;
  static readonly DEEPSLATE_IRON_ORE: ItemType | null;
  static readonly DEEPSLATE_LAPIS_ORE: ItemType | null;
  static readonly DEEPSLATE_REDSTONE_ORE: ItemType | null;
  static readonly DEEPSLATE_TILE_SLAB: ItemType | null;
  static readonly DEEPSLATE_TILE_STAIRS: ItemType | null;
  static readonly DEEPSLATE_TILE_WALL: ItemType | null;
  static readonly DEEPSLATE_TILES: ItemType | null;
  static readonly DETECTOR_RAIL: ItemType | null;
  static readonly DIAMOND: ItemType | null;
  static readonly DIAMOND_AXE: ItemType | null;
  static readonly DIAMOND_BLOCK: ItemType | null;
  static readonly DIAMOND_BOOTS: ItemType | null;
  static readonly DIAMOND_CHESTPLATE: ItemType | null;
  static readonly DIAMOND_HELMET: ItemType | null;
  static readonly DIAMOND_HOE: ItemType | null;
  static readonly DIAMOND_HORSE_ARMOR: ItemType | null;
  static readonly DIAMOND_LEGGINGS: ItemType | null;
  static readonly DIAMOND_ORE: ItemType | null;
  static readonly DIAMOND_PICKAXE: ItemType | null;
  static readonly DIAMOND_SHOVEL: ItemType | null;
  static readonly DIAMOND_SWORD: ItemType | null;
  static readonly DIORITE: ItemType | null;
  static readonly DIORITE_SLAB: ItemType | null;
  static readonly DIORITE_STAIRS: ItemType | null;
  static readonly DIORITE_WALL: ItemType | null;
  static readonly DIRT: ItemType | null;
  static readonly DIRT_PATH: ItemType | null;
  static readonly DISPENSER: ItemType | null;
  static readonly DOLPHIN_SPAWN_EGG: ItemType | null;
  static readonly DONKEY_SPAWN_EGG: ItemType | null;
  static readonly DRAGON_BREATH: ItemType | null;
  static readonly DRAGON_EGG: ItemType | null;
  static readonly DRAGON_HEAD: ItemType | null;
  static readonly DRIED_KELP: ItemType | null;
  static readonly DRIED_KELP_BLOCK: ItemType | null;
  static readonly DRIPSTONE_BLOCK: ItemType | null;
  static readonly DROPPER: ItemType | null;
  static readonly DROWNED_SPAWN_EGG: ItemType | null;
  static readonly EGG: ItemType | null;
  static readonly ELDER_GUARDIAN_SPAWN_EGG: ItemType | null;
  static readonly ELYTRA: ItemType | null;
  static readonly EMERALD: ItemType | null;
  static readonly EMERALD_BLOCK: ItemType | null;
  static readonly EMERALD_ORE: ItemType | null;
  static readonly ENCHANTED_BOOK: ItemType | null;
  static readonly ENCHANTED_GOLDEN_APPLE: ItemType | null;
  static readonly ENCHANTING_TABLE: ItemType | null;
  static readonly END_CRYSTAL: ItemType | null;
  static readonly END_PORTAL_FRAME: ItemType | null;
  static readonly END_ROD: ItemType | null;
  static readonly END_STONE: ItemType | null;
  static readonly END_STONE_BRICK_SLAB: ItemType | null;
  static readonly END_STONE_BRICK_STAIRS: ItemType | null;
  static readonly END_STONE_BRICK_WALL: ItemType | null;
  static readonly END_STONE_BRICKS: ItemType | null;
  static readonly ENDER_CHEST: ItemType | null;
  static readonly ENDER_EYE: ItemType | null;
  static readonly ENDER_PEARL: ItemType | null;
  static readonly ENDERMAN_SPAWN_EGG: ItemType | null;
  static readonly ENDERMITE_SPAWN_EGG: ItemType | null;
  static readonly EVOKER_SPAWN_EGG: ItemType | null;
  static readonly EXPERIENCE_BOTTLE: ItemType | null;
  static readonly EXPOSED_COPPER: ItemType | null;
  static readonly EXPOSED_CUT_COPPER: ItemType | null;
  static readonly EXPOSED_CUT_COPPER_SLAB: ItemType | null;
  static readonly EXPOSED_CUT_COPPER_STAIRS: ItemType | null;
  static readonly FARMLAND: ItemType | null;
  static readonly FEATHER: ItemType | null;
  static readonly FERMENTED_SPIDER_EYE: ItemType | null;
  static readonly FERN: ItemType | null;
  static readonly FILLED_MAP: ItemType | null;
  static readonly FIRE_CHARGE: ItemType | null;
  static readonly FIRE_CORAL: ItemType | null;
  static readonly FIRE_CORAL_BLOCK: ItemType | null;
  static readonly FIRE_CORAL_FAN: ItemType | null;
  static readonly FIREWORK_ROCKET: ItemType | null;
  static readonly FIREWORK_STAR: ItemType | null;
  static readonly FISHING_ROD: ItemType | null;
  static readonly FLETCHING_TABLE: ItemType | null;
  static readonly FLINT: ItemType | null;
  static readonly FLINT_AND_STEEL: ItemType | null;
  static readonly FLOWER_BANNER_PATTERN: ItemType | null;
  static readonly FLOWER_POT: ItemType | null;
  static readonly FLOWERING_AZALEA: ItemType | null;
  static readonly FLOWERING_AZALEA_LEAVES: ItemType | null;
  static readonly FOX_SPAWN_EGG: ItemType | null;
  static readonly FURNACE: ItemType | null;
  static readonly FURNACE_MINECART: ItemType | null;
  static readonly GHAST_SPAWN_EGG: ItemType | null;
  static readonly GHAST_TEAR: ItemType | null;
  static readonly GILDED_BLACKSTONE: ItemType | null;
  static readonly GLASS: ItemType | null;
  static readonly GLASS_BOTTLE: ItemType | null;
  static readonly GLASS_PANE: ItemType | null;
  static readonly GLISTERING_MELON_SLICE: ItemType | null;
  static readonly GLOBE_BANNER_PATTERN: ItemType | null;
  static readonly GLOW_BERRIES: ItemType | null;
  static readonly GLOW_INK_SAC: ItemType | null;
  static readonly GLOW_ITEM_FRAME: ItemType | null;
  static readonly GLOW_LICHEN: ItemType | null;
  static readonly GLOW_SQUID_SPAWN_EGG: ItemType | null;
  static readonly GLOWSTONE: ItemType | null;
  static readonly GLOWSTONE_DUST: ItemType | null;
  static readonly GOAT_SPAWN_EGG: ItemType | null;
  static readonly GOLD_BLOCK: ItemType | null;
  static readonly GOLD_INGOT: ItemType | null;
  static readonly GOLD_NUGGET: ItemType | null;
  static readonly GOLD_ORE: ItemType | null;
  static readonly GOLDEN_APPLE: ItemType | null;
  static readonly GOLDEN_AXE: ItemType | null;
  static readonly GOLDEN_BOOTS: ItemType | null;
  static readonly GOLDEN_CARROT: ItemType | null;
  static readonly GOLDEN_CHESTPLATE: ItemType | null;
  static readonly GOLDEN_HELMET: ItemType | null;
  static readonly GOLDEN_HOE: ItemType | null;
  static readonly GOLDEN_HORSE_ARMOR: ItemType | null;
  static readonly GOLDEN_LEGGINGS: ItemType | null;
  static readonly GOLDEN_PICKAXE: ItemType | null;
  static readonly GOLDEN_SHOVEL: ItemType | null;
  static readonly GOLDEN_SWORD: ItemType | null;
  static readonly GRANITE: ItemType | null;
  static readonly GRANITE_SLAB: ItemType | null;
  static readonly GRANITE_STAIRS: ItemType | null;
  static readonly GRANITE_WALL: ItemType | null;
  static readonly GRASS: ItemType | null;
  static readonly GRASS_BLOCK: ItemType | null;
  static readonly GRASS_PATH: ItemType | null;
  static readonly GRAVEL: ItemType | null;
  static readonly GRAY_BANNER: ItemType | null;
  static readonly GRAY_BED: ItemType | null;
  static readonly GRAY_CANDLE: ItemType | null;
  static readonly GRAY_CARPET: ItemType | null;
  static readonly GRAY_CONCRETE: ItemType | null;
  static readonly GRAY_CONCRETE_POWDER: ItemType | null;
  static readonly GRAY_DYE: ItemType | null;
  static readonly GRAY_GLAZED_TERRACOTTA: ItemType | null;
  static readonly GRAY_SHULKER_BOX: ItemType | null;
  static readonly GRAY_STAINED_GLASS: ItemType | null;
  static readonly GRAY_STAINED_GLASS_PANE: ItemType | null;
  static readonly GRAY_TERRACOTTA: ItemType | null;
  static readonly GRAY_WOOL: ItemType | null;
  static readonly GREEN_BANNER: ItemType | null;
  static readonly GREEN_BED: ItemType | null;
  static readonly GREEN_CANDLE: ItemType | null;
  static readonly GREEN_CARPET: ItemType | null;
  static readonly GREEN_CONCRETE: ItemType | null;
  static readonly GREEN_CONCRETE_POWDER: ItemType | null;
  static readonly GREEN_DYE: ItemType | null;
  static readonly GREEN_GLAZED_TERRACOTTA: ItemType | null;
  static readonly GREEN_SHULKER_BOX: ItemType | null;
  static readonly GREEN_STAINED_GLASS: ItemType | null;
  static readonly GREEN_STAINED_GLASS_PANE: ItemType | null;
  static readonly GREEN_TERRACOTTA: ItemType | null;
  static readonly GREEN_WOOL: ItemType | null;
  static readonly GRINDSTONE: ItemType | null;
  static readonly GUARDIAN_SPAWN_EGG: ItemType | null;
  static readonly GUNPOWDER: ItemType | null;
  static readonly HANGING_ROOTS: ItemType | null;
  static readonly HAY_BLOCK: ItemType | null;
  static readonly HEART_OF_THE_SEA: ItemType | null;
  static readonly HEAVY_WEIGHTED_PRESSURE_PLATE: ItemType | null;
  static readonly HOGLIN_SPAWN_EGG: ItemType | null;
  static readonly HONEY_BLOCK: ItemType | null;
  static readonly HONEY_BOTTLE: ItemType | null;
  static readonly HONEYCOMB: ItemType | null;
  static readonly HONEYCOMB_BLOCK: ItemType | null;
  static readonly HOPPER: ItemType | null;
  static readonly HOPPER_MINECART: ItemType | null;
  static readonly HORN_CORAL: ItemType | null;
  static readonly HORN_CORAL_BLOCK: ItemType | null;
  static readonly HORN_CORAL_FAN: ItemType | null;
  static readonly HORSE_SPAWN_EGG: ItemType | null;
  static readonly HUSK_SPAWN_EGG: ItemType | null;
  static readonly ICE: ItemType | null;
  static readonly INFESTED_CHISELED_STONE_BRICKS: ItemType | null;
  static readonly INFESTED_COBBLESTONE: ItemType | null;
  static readonly INFESTED_CRACKED_STONE_BRICKS: ItemType | null;
  static readonly INFESTED_DEEPSLATE: ItemType | null;
  static readonly INFESTED_MOSSY_STONE_BRICKS: ItemType | null;
  static readonly INFESTED_STONE: ItemType | null;
  static readonly INFESTED_STONE_BRICKS: ItemType | null;
  static readonly INK_SAC: ItemType | null;
  static readonly IRON_AXE: ItemType | null;
  static readonly IRON_BARS: ItemType | null;
  static readonly IRON_BLOCK: ItemType | null;
  static readonly IRON_BOOTS: ItemType | null;
  static readonly IRON_CHESTPLATE: ItemType | null;
  static readonly IRON_DOOR: ItemType | null;
  static readonly IRON_HELMET: ItemType | null;
  static readonly IRON_HOE: ItemType | null;
  static readonly IRON_HORSE_ARMOR: ItemType | null;
  static readonly IRON_INGOT: ItemType | null;
  static readonly IRON_LEGGINGS: ItemType | null;
  static readonly IRON_NUGGET: ItemType | null;
  static readonly IRON_ORE: ItemType | null;
  static readonly IRON_PICKAXE: ItemType | null;
  static readonly IRON_SHOVEL: ItemType | null;
  static readonly IRON_SWORD: ItemType | null;
  static readonly IRON_TRAPDOOR: ItemType | null;
  static readonly ITEM_FRAME: ItemType | null;
  static readonly JACK_O_LANTERN: ItemType | null;
  static readonly JIGSAW: ItemType | null;
  static readonly JUKEBOX: ItemType | null;
  static readonly JUNGLE_BOAT: ItemType | null;
  static readonly JUNGLE_BUTTON: ItemType | null;
  static readonly JUNGLE_DOOR: ItemType | null;
  static readonly JUNGLE_FENCE: ItemType | null;
  static readonly JUNGLE_FENCE_GATE: ItemType | null;
  static readonly JUNGLE_LEAVES: ItemType | null;
  static readonly JUNGLE_LOG: ItemType | null;
  static readonly JUNGLE_PLANKS: ItemType | null;
  static readonly JUNGLE_PRESSURE_PLATE: ItemType | null;
  static readonly JUNGLE_SAPLING: ItemType | null;
  static readonly JUNGLE_SIGN: ItemType | null;
  static readonly JUNGLE_SLAB: ItemType | null;
  static readonly JUNGLE_STAIRS: ItemType | null;
  static readonly JUNGLE_TRAPDOOR: ItemType | null;
  static readonly JUNGLE_WOOD: ItemType | null;
  static readonly KELP: ItemType | null;
  static readonly KNOWLEDGE_BOOK: ItemType | null;
  static readonly LADDER: ItemType | null;
  static readonly LANTERN: ItemType | null;
  static readonly LAPIS_BLOCK: ItemType | null;
  static readonly LAPIS_LAZULI: ItemType | null;
  static readonly LAPIS_ORE: ItemType | null;
  static readonly LARGE_AMETHYST_BUD: ItemType | null;
  static readonly LARGE_FERN: ItemType | null;
  static readonly LAVA_BUCKET: ItemType | null;
  static readonly LEAD: ItemType | null;
  static readonly LEATHER: ItemType | null;
  static readonly LEATHER_BOOTS: ItemType | null;
  static readonly LEATHER_CHESTPLATE: ItemType | null;
  static readonly LEATHER_HELMET: ItemType | null;
  static readonly LEATHER_HORSE_ARMOR: ItemType | null;
  static readonly LEATHER_LEGGINGS: ItemType | null;
  static readonly LECTERN: ItemType | null;
  static readonly LEVER: ItemType | null;
  static readonly LIGHT: ItemType | null;
  static readonly LIGHT_BLUE_BANNER: ItemType | null;
  static readonly LIGHT_BLUE_BED: ItemType | null;
  static readonly LIGHT_BLUE_CANDLE: ItemType | null;
  static readonly LIGHT_BLUE_CARPET: ItemType | null;
  static readonly LIGHT_BLUE_CONCRETE: ItemType | null;
  static readonly LIGHT_BLUE_CONCRETE_POWDER: ItemType | null;
  static readonly LIGHT_BLUE_DYE: ItemType | null;
  static readonly LIGHT_BLUE_GLAZED_TERRACOTTA: ItemType | null;
  static readonly LIGHT_BLUE_SHULKER_BOX: ItemType | null;
  static readonly LIGHT_BLUE_STAINED_GLASS: ItemType | null;
  static readonly LIGHT_BLUE_STAINED_GLASS_PANE: ItemType | null;
  static readonly LIGHT_BLUE_TERRACOTTA: ItemType | null;
  static readonly LIGHT_BLUE_WOOL: ItemType | null;
  static readonly LIGHT_GRAY_BANNER: ItemType | null;
  static readonly LIGHT_GRAY_BED: ItemType | null;
  static readonly LIGHT_GRAY_CANDLE: ItemType | null;
  static readonly LIGHT_GRAY_CARPET: ItemType | null;
  static readonly LIGHT_GRAY_CONCRETE: ItemType | null;
  static readonly LIGHT_GRAY_CONCRETE_POWDER: ItemType | null;
  static readonly LIGHT_GRAY_DYE: ItemType | null;
  static readonly LIGHT_GRAY_GLAZED_TERRACOTTA: ItemType | null;
  static readonly LIGHT_GRAY_SHULKER_BOX: ItemType | null;
  static readonly LIGHT_GRAY_STAINED_GLASS: ItemType | null;
  static readonly LIGHT_GRAY_STAINED_GLASS_PANE: ItemType | null;
  static readonly LIGHT_GRAY_TERRACOTTA: ItemType | null;
  static readonly LIGHT_GRAY_WOOL: ItemType | null;
  static readonly LIGHT_WEIGHTED_PRESSURE_PLATE: ItemType | null;
  static readonly LIGHTNING_ROD: ItemType | null;
  static readonly LILAC: ItemType | null;
  static readonly LILY_OF_THE_VALLEY: ItemType | null;
  static readonly LILY_PAD: ItemType | null;
  static readonly LIME_BANNER: ItemType | null;
  static readonly LIME_BED: ItemType | null;
  static readonly LIME_CANDLE: ItemType | null;
  static readonly LIME_CARPET: ItemType | null;
  static readonly LIME_CONCRETE: ItemType | null;
  static readonly LIME_CONCRETE_POWDER: ItemType | null;
  static readonly LIME_DYE: ItemType | null;
  static readonly LIME_GLAZED_TERRACOTTA: ItemType | null;
  static readonly LIME_SHULKER_BOX: ItemType | null;
  static readonly LIME_STAINED_GLASS: ItemType | null;
  static readonly LIME_STAINED_GLASS_PANE: ItemType | null;
  static readonly LIME_TERRACOTTA: ItemType | null;
  static readonly LIME_WOOL: ItemType | null;
  static readonly LINGERING_POTION: ItemType | null;
  static readonly LLAMA_SPAWN_EGG: ItemType | null;
  static readonly LODESTONE: ItemType | null;
  static readonly LOOM: ItemType | null;
  static readonly MAGENTA_BANNER: ItemType | null;
  static readonly MAGENTA_BED: ItemType | null;
  static readonly MAGENTA_CANDLE: ItemType | null;
  static readonly MAGENTA_CARPET: ItemType | null;
  static readonly MAGENTA_CONCRETE: ItemType | null;
  static readonly MAGENTA_CONCRETE_POWDER: ItemType | null;
  static readonly MAGENTA_DYE: ItemType | null;
  static readonly MAGENTA_GLAZED_TERRACOTTA: ItemType | null;
  static readonly MAGENTA_SHULKER_BOX: ItemType | null;
  static readonly MAGENTA_STAINED_GLASS: ItemType | null;
  static readonly MAGENTA_STAINED_GLASS_PANE: ItemType | null;
  static readonly MAGENTA_TERRACOTTA: ItemType | null;
  static readonly MAGENTA_WOOL: ItemType | null;
  static readonly MAGMA_BLOCK: ItemType | null;
  static readonly MAGMA_CREAM: ItemType | null;
  static readonly MAGMA_CUBE_SPAWN_EGG: ItemType | null;
  static readonly MAP: ItemType | null;
  static readonly MEDIUM_AMETHYST_BUD: ItemType | null;
  static readonly MELON: ItemType | null;
  static readonly MELON_SEEDS: ItemType | null;
  static readonly MELON_SLICE: ItemType | null;
  static readonly MILK_BUCKET: ItemType | null;
  static readonly MINECART: ItemType | null;
  static readonly MOJANG_BANNER_PATTERN: ItemType | null;
  static readonly MOOSHROOM_SPAWN_EGG: ItemType | null;
  static readonly MOSS_BLOCK: ItemType | null;
  static readonly MOSS_CARPET: ItemType | null;
  static readonly MOSSY_COBBLESTONE: ItemType | null;
  static readonly MOSSY_COBBLESTONE_SLAB: ItemType | null;
  static readonly MOSSY_COBBLESTONE_STAIRS: ItemType | null;
  static readonly MOSSY_COBBLESTONE_WALL: ItemType | null;
  static readonly MOSSY_STONE_BRICK_SLAB: ItemType | null;
  static readonly MOSSY_STONE_BRICK_STAIRS: ItemType | null;
  static readonly MOSSY_STONE_BRICK_WALL: ItemType | null;
  static readonly MOSSY_STONE_BRICKS: ItemType | null;
  static readonly MULE_SPAWN_EGG: ItemType | null;
  static readonly MUSHROOM_STEM: ItemType | null;
  static readonly MUSHROOM_STEW: ItemType | null;
  static readonly MUSIC_DISC_11: ItemType | null;
  static readonly MUSIC_DISC_13: ItemType | null;
  static readonly MUSIC_DISC_BLOCKS: ItemType | null;
  static readonly MUSIC_DISC_CAT: ItemType | null;
  static readonly MUSIC_DISC_CHIRP: ItemType | null;
  static readonly MUSIC_DISC_FAR: ItemType | null;
  static readonly MUSIC_DISC_MALL: ItemType | null;
  static readonly MUSIC_DISC_MELLOHI: ItemType | null;
  static readonly MUSIC_DISC_PIGSTEP: ItemType | null;
  static readonly MUSIC_DISC_STAL: ItemType | null;
  static readonly MUSIC_DISC_STRAD: ItemType | null;
  static readonly MUSIC_DISC_WAIT: ItemType | null;
  static readonly MUSIC_DISC_WARD: ItemType | null;
  static readonly MUTTON: ItemType | null;
  static readonly MYCELIUM: ItemType | null;
  static readonly NAME_TAG: ItemType | null;
  static readonly NAUTILUS_SHELL: ItemType | null;
  static readonly NETHER_BRICK: ItemType | null;
  static readonly NETHER_BRICK_FENCE: ItemType | null;
  static readonly NETHER_BRICK_SLAB: ItemType | null;
  static readonly NETHER_BRICK_STAIRS: ItemType | null;
  static readonly NETHER_BRICK_WALL: ItemType | null;
  static readonly NETHER_BRICKS: ItemType | null;
  static readonly NETHER_GOLD_ORE: ItemType | null;
  static readonly NETHER_QUARTZ_ORE: ItemType | null;
  static readonly NETHER_SPROUTS: ItemType | null;
  static readonly NETHER_STAR: ItemType | null;
  static readonly NETHER_WART: ItemType | null;
  static readonly NETHER_WART_BLOCK: ItemType | null;
  static readonly NETHERITE_AXE: ItemType | null;
  static readonly NETHERITE_BLOCK: ItemType | null;
  static readonly NETHERITE_BOOTS: ItemType | null;
  static readonly NETHERITE_CHESTPLATE: ItemType | null;
  static readonly NETHERITE_HELMET: ItemType | null;
  static readonly NETHERITE_HOE: ItemType | null;
  static readonly NETHERITE_INGOT: ItemType | null;
  static readonly NETHERITE_LEGGINGS: ItemType | null;
  static readonly NETHERITE_PICKAXE: ItemType | null;
  static readonly NETHERITE_SCRAP: ItemType | null;
  static readonly NETHERITE_SHOVEL: ItemType | null;
  static readonly NETHERITE_SWORD: ItemType | null;
  static readonly NETHERRACK: ItemType | null;
  static readonly NOTE_BLOCK: ItemType | null;
  static readonly OAK_BOAT: ItemType | null;
  static readonly OAK_BUTTON: ItemType | null;
  static readonly OAK_DOOR: ItemType | null;
  static readonly OAK_FENCE: ItemType | null;
  static readonly OAK_FENCE_GATE: ItemType | null;
  static readonly OAK_LEAVES: ItemType | null;
  static readonly OAK_LOG: ItemType | null;
  static readonly OAK_PLANKS: ItemType | null;
  static readonly OAK_PRESSURE_PLATE: ItemType | null;
  static readonly OAK_SAPLING: ItemType | null;
  static readonly OAK_SIGN: ItemType | null;
  static readonly OAK_SLAB: ItemType | null;
  static readonly OAK_STAIRS: ItemType | null;
  static readonly OAK_TRAPDOOR: ItemType | null;
  static readonly OAK_WOOD: ItemType | null;
  static readonly OBSERVER: ItemType | null;
  static readonly OBSIDIAN: ItemType | null;
  static readonly OCELOT_SPAWN_EGG: ItemType | null;
  static readonly ORANGE_BANNER: ItemType | null;
  static readonly ORANGE_BED: ItemType | null;
  static readonly ORANGE_CANDLE: ItemType | null;
  static readonly ORANGE_CARPET: ItemType | null;
  static readonly ORANGE_CONCRETE: ItemType | null;
  static readonly ORANGE_CONCRETE_POWDER: ItemType | null;
  static readonly ORANGE_DYE: ItemType | null;
  static readonly ORANGE_GLAZED_TERRACOTTA: ItemType | null;
  static readonly ORANGE_SHULKER_BOX: ItemType | null;
  static readonly ORANGE_STAINED_GLASS: ItemType | null;
  static readonly ORANGE_STAINED_GLASS_PANE: ItemType | null;
  static readonly ORANGE_TERRACOTTA: ItemType | null;
  static readonly ORANGE_TULIP: ItemType | null;
  static readonly ORANGE_WOOL: ItemType | null;
  static readonly OXEYE_DAISY: ItemType | null;
  static readonly OXIDIZED_COPPER: ItemType | null;
  static readonly OXIDIZED_CUT_COPPER: ItemType | null;
  static readonly OXIDIZED_CUT_COPPER_SLAB: ItemType | null;
  static readonly OXIDIZED_CUT_COPPER_STAIRS: ItemType | null;
  static readonly PACKED_ICE: ItemType | null;
  static readonly PAINTING: ItemType | null;
  static readonly PANDA_SPAWN_EGG: ItemType | null;
  static readonly PAPER: ItemType | null;
  static readonly PARROT_SPAWN_EGG: ItemType | null;
  static readonly PEONY: ItemType | null;
  static readonly PETRIFIED_OAK_SLAB: ItemType | null;
  static readonly PHANTOM_MEMBRANE: ItemType | null;
  static readonly PHANTOM_SPAWN_EGG: ItemType | null;
  static readonly PIG_SPAWN_EGG: ItemType | null;
  static readonly PIGLIN_BANNER_PATTERN: ItemType | null;
  static readonly PIGLIN_BRUTE_SPAWN_EGG: ItemType | null;
  static readonly PIGLIN_SPAWN_EGG: ItemType | null;
  static readonly PILLAGER_SPAWN_EGG: ItemType | null;
  static readonly PINK_BANNER: ItemType | null;
  static readonly PINK_BED: ItemType | null;
  static readonly PINK_CANDLE: ItemType | null;
  static readonly PINK_CARPET: ItemType | null;
  static readonly PINK_CONCRETE: ItemType | null;
  static readonly PINK_CONCRETE_POWDER: ItemType | null;
  static readonly PINK_DYE: ItemType | null;
  static readonly PINK_GLAZED_TERRACOTTA: ItemType | null;
  static readonly PINK_SHULKER_BOX: ItemType | null;
  static readonly PINK_STAINED_GLASS: ItemType | null;
  static readonly PINK_STAINED_GLASS_PANE: ItemType | null;
  static readonly PINK_TERRACOTTA: ItemType | null;
  static readonly PINK_TULIP: ItemType | null;
  static readonly PINK_WOOL: ItemType | null;
  static readonly PISTON: ItemType | null;
  static readonly PLAYER_HEAD: ItemType | null;
  static readonly PODZOL: ItemType | null;
  static readonly POINTED_DRIPSTONE: ItemType | null;
  static readonly POISONOUS_POTATO: ItemType | null;
  static readonly POLAR_BEAR_SPAWN_EGG: ItemType | null;
  static readonly POLISHED_ANDESITE: ItemType | null;
  static readonly POLISHED_ANDESITE_SLAB: ItemType | null;
  static readonly POLISHED_ANDESITE_STAIRS: ItemType | null;
  static readonly POLISHED_BASALT: ItemType | null;
  static readonly POLISHED_BLACKSTONE: ItemType | null;
  static readonly POLISHED_BLACKSTONE_BRICK_SLAB: ItemType | null;
  static readonly POLISHED_BLACKSTONE_BRICK_STAIRS: ItemType | null;
  static readonly POLISHED_BLACKSTONE_BRICK_WALL: ItemType | null;
  static readonly POLISHED_BLACKSTONE_BRICKS: ItemType | null;
  static readonly POLISHED_BLACKSTONE_BUTTON: ItemType | null;
  static readonly POLISHED_BLACKSTONE_PRESSURE_PLATE: ItemType | null;
  static readonly POLISHED_BLACKSTONE_SLAB: ItemType | null;
  static readonly POLISHED_BLACKSTONE_STAIRS: ItemType | null;
  static readonly POLISHED_BLACKSTONE_WALL: ItemType | null;
  static readonly POLISHED_DEEPSLATE: ItemType | null;
  static readonly POLISHED_DEEPSLATE_SLAB: ItemType | null;
  static readonly POLISHED_DEEPSLATE_STAIRS: ItemType | null;
  static readonly POLISHED_DEEPSLATE_WALL: ItemType | null;
  static readonly POLISHED_DIORITE: ItemType | null;
  static readonly POLISHED_DIORITE_SLAB: ItemType | null;
  static readonly POLISHED_DIORITE_STAIRS: ItemType | null;
  static readonly POLISHED_GRANITE: ItemType | null;
  static readonly POLISHED_GRANITE_SLAB: ItemType | null;
  static readonly POLISHED_GRANITE_STAIRS: ItemType | null;
  static readonly POPPED_CHORUS_FRUIT: ItemType | null;
  static readonly POPPY: ItemType | null;
  static readonly PORKCHOP: ItemType | null;
  static readonly POTATO: ItemType | null;
  static readonly POTION: ItemType | null;
  static readonly POWDER_SNOW_BUCKET: ItemType | null;
  static readonly POWERED_RAIL: ItemType | null;
  static readonly PRISMARINE: ItemType | null;
  static readonly PRISMARINE_BRICK_SLAB: ItemType | null;
  static readonly PRISMARINE_BRICK_STAIRS: ItemType | null;
  static readonly PRISMARINE_BRICKS: ItemType | null;
  static readonly PRISMARINE_CRYSTALS: ItemType | null;
  static readonly PRISMARINE_SHARD: ItemType | null;
  static readonly PRISMARINE_SLAB: ItemType | null;
  static readonly PRISMARINE_STAIRS: ItemType | null;
  static readonly PRISMARINE_WALL: ItemType | null;
  static readonly PUFFERFISH: ItemType | null;
  static readonly PUFFERFISH_BUCKET: ItemType | null;
  static readonly PUFFERFISH_SPAWN_EGG: ItemType | null;
  static readonly PUMPKIN: ItemType | null;
  static readonly PUMPKIN_PIE: ItemType | null;
  static readonly PUMPKIN_SEEDS: ItemType | null;
  static readonly PURPLE_BANNER: ItemType | null;
  static readonly PURPLE_BED: ItemType | null;
  static readonly PURPLE_CANDLE: ItemType | null;
  static readonly PURPLE_CARPET: ItemType | null;
  static readonly PURPLE_CONCRETE: ItemType | null;
  static readonly PURPLE_CONCRETE_POWDER: ItemType | null;
  static readonly PURPLE_DYE: ItemType | null;
  static readonly PURPLE_GLAZED_TERRACOTTA: ItemType | null;
  static readonly PURPLE_SHULKER_BOX: ItemType | null;
  static readonly PURPLE_STAINED_GLASS: ItemType | null;
  static readonly PURPLE_STAINED_GLASS_PANE: ItemType | null;
  static readonly PURPLE_TERRACOTTA: ItemType | null;
  static readonly PURPLE_WOOL: ItemType | null;
  static readonly PURPUR_BLOCK: ItemType | null;
  static readonly PURPUR_PILLAR: ItemType | null;
  static readonly PURPUR_SLAB: ItemType | null;
  static readonly PURPUR_STAIRS: ItemType | null;
  static readonly QUARTZ: ItemType | null;
  static readonly QUARTZ_BLOCK: ItemType | null;
  static readonly QUARTZ_BRICKS: ItemType | null;
  static readonly QUARTZ_PILLAR: ItemType | null;
  static readonly QUARTZ_SLAB: ItemType | null;
  static readonly QUARTZ_STAIRS: ItemType | null;
  static readonly RABBIT: ItemType | null;
  static readonly RABBIT_FOOT: ItemType | null;
  static readonly RABBIT_HIDE: ItemType | null;
  static readonly RABBIT_SPAWN_EGG: ItemType | null;
  static readonly RABBIT_STEW: ItemType | null;
  static readonly RAIL: ItemType | null;
  static readonly RAVAGER_SPAWN_EGG: ItemType | null;
  static readonly RAW_COPPER: ItemType | null;
  static readonly RAW_COPPER_BLOCK: ItemType | null;
  static readonly RAW_GOLD: ItemType | null;
  static readonly RAW_GOLD_BLOCK: ItemType | null;
  static readonly RAW_IRON: ItemType | null;
  static readonly RAW_IRON_BLOCK: ItemType | null;
  static readonly RED_BANNER: ItemType | null;
  static readonly RED_BED: ItemType | null;
  static readonly RED_CANDLE: ItemType | null;
  static readonly RED_CARPET: ItemType | null;
  static readonly RED_CONCRETE: ItemType | null;
  static readonly RED_CONCRETE_POWDER: ItemType | null;
  static readonly RED_DYE: ItemType | null;
  static readonly RED_GLAZED_TERRACOTTA: ItemType | null;
  static readonly RED_MUSHROOM: ItemType | null;
  static readonly RED_MUSHROOM_BLOCK: ItemType | null;
  static readonly RED_NETHER_BRICK_SLAB: ItemType | null;
  static readonly RED_NETHER_BRICK_STAIRS: ItemType | null;
  static readonly RED_NETHER_BRICK_WALL: ItemType | null;
  static readonly RED_NETHER_BRICKS: ItemType | null;
  static readonly RED_SAND: ItemType | null;
  static readonly RED_SANDSTONE: ItemType | null;
  static readonly RED_SANDSTONE_SLAB: ItemType | null;
  static readonly RED_SANDSTONE_STAIRS: ItemType | null;
  static readonly RED_SANDSTONE_WALL: ItemType | null;
  static readonly RED_SHULKER_BOX: ItemType | null;
  static readonly RED_STAINED_GLASS: ItemType | null;
  static readonly RED_STAINED_GLASS_PANE: ItemType | null;
  static readonly RED_TERRACOTTA: ItemType | null;
  static readonly RED_TULIP: ItemType | null;
  static readonly RED_WOOL: ItemType | null;
  static readonly REDSTONE: ItemType | null;
  static readonly REDSTONE_BLOCK: ItemType | null;
  static readonly REDSTONE_LAMP: ItemType | null;
  static readonly REDSTONE_ORE: ItemType | null;
  static readonly REDSTONE_TORCH: ItemType | null;
  static readonly REPEATER: ItemType | null;
  static readonly REPEATING_COMMAND_BLOCK: ItemType | null;
  static readonly RESPAWN_ANCHOR: ItemType | null;
  static readonly ROOTED_DIRT: ItemType | null;
  static readonly ROSE_BUSH: ItemType | null;
  static readonly ROSE_RED: ItemType | null;
  static readonly ROTTEN_FLESH: ItemType | null;
  static readonly SADDLE: ItemType | null;
  static readonly SALMON: ItemType | null;
  static readonly SALMON_BUCKET: ItemType | null;
  static readonly SALMON_SPAWN_EGG: ItemType | null;
  static readonly SAND: ItemType | null;
  static readonly SANDSTONE: ItemType | null;
  static readonly SANDSTONE_SLAB: ItemType | null;
  static readonly SANDSTONE_STAIRS: ItemType | null;
  static readonly SANDSTONE_WALL: ItemType | null;
  static readonly SCAFFOLDING: ItemType | null;
  static readonly SCULK_SENSOR: ItemType | null;
  static readonly SCUTE: ItemType | null;
  static readonly SEA_LANTERN: ItemType | null;
  static readonly SEA_PICKLE: ItemType | null;
  static readonly SEAGRASS: ItemType | null;
  static readonly SHEARS: ItemType | null;
  static readonly SHEEP_SPAWN_EGG: ItemType | null;
  static readonly SHIELD: ItemType | null;
  static readonly SHROOMLIGHT: ItemType | null;
  static readonly SHULKER_BOX: ItemType | null;
  static readonly SHULKER_SHELL: ItemType | null;
  static readonly SHULKER_SPAWN_EGG: ItemType | null;
  static readonly SIGN: ItemType | null;
  static readonly SILVERFISH_SPAWN_EGG: ItemType | null;
  static readonly SKELETON_HORSE_SPAWN_EGG: ItemType | null;
  static readonly SKELETON_SKULL: ItemType | null;
  static readonly SKELETON_SPAWN_EGG: ItemType | null;
  static readonly SKULL_BANNER_PATTERN: ItemType | null;
  static readonly SLIME_BALL: ItemType | null;
  static readonly SLIME_BLOCK: ItemType | null;
  static readonly SLIME_SPAWN_EGG: ItemType | null;
  static readonly SMALL_AMETHYST_BUD: ItemType | null;
  static readonly SMALL_DRIPLEAF: ItemType | null;
  static readonly SMITHING_TABLE: ItemType | null;
  static readonly SMOKER: ItemType | null;
  static readonly SMOOTH_BASALT: ItemType | null;
  static readonly SMOOTH_QUARTZ: ItemType | null;
  static readonly SMOOTH_QUARTZ_SLAB: ItemType | null;
  static readonly SMOOTH_QUARTZ_STAIRS: ItemType | null;
  static readonly SMOOTH_RED_SANDSTONE: ItemType | null;
  static readonly SMOOTH_RED_SANDSTONE_SLAB: ItemType | null;
  static readonly SMOOTH_RED_SANDSTONE_STAIRS: ItemType | null;
  static readonly SMOOTH_SANDSTONE: ItemType | null;
  static readonly SMOOTH_SANDSTONE_SLAB: ItemType | null;
  static readonly SMOOTH_SANDSTONE_STAIRS: ItemType | null;
  static readonly SMOOTH_STONE: ItemType | null;
  static readonly SMOOTH_STONE_SLAB: ItemType | null;
  static readonly SNOW: ItemType | null;
  static readonly SNOW_BLOCK: ItemType | null;
  static readonly SNOWBALL: ItemType | null;
  static readonly SOUL_CAMPFIRE: ItemType | null;
  static readonly SOUL_LANTERN: ItemType | null;
  static readonly SOUL_SAND: ItemType | null;
  static readonly SOUL_SOIL: ItemType | null;
  static readonly SOUL_TORCH: ItemType | null;
  static readonly SPAWNER: ItemType | null;
  static readonly SPECTRAL_ARROW: ItemType | null;
  static readonly SPIDER_EYE: ItemType | null;
  static readonly SPIDER_SPAWN_EGG: ItemType | null;
  static readonly SPLASH_POTION: ItemType | null;
  static readonly SPONGE: ItemType | null;
  static readonly SPORE_BLOSSOM: ItemType | null;
  static readonly SPRUCE_BOAT: ItemType | null;
  static readonly SPRUCE_BUTTON: ItemType | null;
  static readonly SPRUCE_DOOR: ItemType | null;
  static readonly SPRUCE_FENCE: ItemType | null;
  static readonly SPRUCE_FENCE_GATE: ItemType | null;
  static readonly SPRUCE_LEAVES: ItemType | null;
  static readonly SPRUCE_LOG: ItemType | null;
  static readonly SPRUCE_PLANKS: ItemType | null;
  static readonly SPRUCE_PRESSURE_PLATE: ItemType | null;
  static readonly SPRUCE_SAPLING: ItemType | null;
  static readonly SPRUCE_SIGN: ItemType | null;
  static readonly SPRUCE_SLAB: ItemType | null;
  static readonly SPRUCE_STAIRS: ItemType | null;
  static readonly SPRUCE_TRAPDOOR: ItemType | null;
  static readonly SPRUCE_WOOD: ItemType | null;
  static readonly SPYGLASS: ItemType | null;
  static readonly SQUID_SPAWN_EGG: ItemType | null;
  static readonly STICK: ItemType | null;
  static readonly STICKY_PISTON: ItemType | null;
  static readonly STONE: ItemType | null;
  static readonly STONE_AXE: ItemType | null;
  static readonly STONE_BRICK_SLAB: ItemType | null;
  static readonly STONE_BRICK_STAIRS: ItemType | null;
  static readonly STONE_BRICK_WALL: ItemType | null;
  static readonly STONE_BRICKS: ItemType | null;
  static readonly STONE_BUTTON: ItemType | null;
  static readonly STONE_HOE: ItemType | null;
  static readonly STONE_PICKAXE: ItemType | null;
  static readonly STONE_PRESSURE_PLATE: ItemType | null;
  static readonly STONE_SHOVEL: ItemType | null;
  static readonly STONE_SLAB: ItemType | null;
  static readonly STONE_STAIRS: ItemType | null;
  static readonly STONE_SWORD: ItemType | null;
  static readonly STONECUTTER: ItemType | null;
  static readonly STRAY_SPAWN_EGG: ItemType | null;
  static readonly STRIDER_SPAWN_EGG: ItemType | null;
  static readonly STRING: ItemType | null;
  static readonly STRIPPED_ACACIA_LOG: ItemType | null;
  static readonly STRIPPED_ACACIA_WOOD: ItemType | null;
  static readonly STRIPPED_BIRCH_LOG: ItemType | null;
  static readonly STRIPPED_BIRCH_WOOD: ItemType | null;
  static readonly STRIPPED_CRIMSON_HYPHAE: ItemType | null;
  static readonly STRIPPED_CRIMSON_STEM: ItemType | null;
  static readonly STRIPPED_DARK_OAK_LOG: ItemType | null;
  static readonly STRIPPED_DARK_OAK_WOOD: ItemType | null;
  static readonly STRIPPED_JUNGLE_LOG: ItemType | null;
  static readonly STRIPPED_JUNGLE_WOOD: ItemType | null;
  static readonly STRIPPED_OAK_LOG: ItemType | null;
  static readonly STRIPPED_OAK_WOOD: ItemType | null;
  static readonly STRIPPED_SPRUCE_LOG: ItemType | null;
  static readonly STRIPPED_SPRUCE_WOOD: ItemType | null;
  static readonly STRIPPED_WARPED_HYPHAE: ItemType | null;
  static readonly STRIPPED_WARPED_STEM: ItemType | null;
  static readonly STRUCTURE_BLOCK: ItemType | null;
  static readonly STRUCTURE_VOID: ItemType | null;
  static readonly SUGAR: ItemType | null;
  static readonly SUGAR_CANE: ItemType | null;
  static readonly SUNFLOWER: ItemType | null;
  static readonly SUSPICIOUS_STEW: ItemType | null;
  static readonly SWEET_BERRIES: ItemType | null;
  static readonly TALL_GRASS: ItemType | null;
  static readonly TARGET: ItemType | null;
  static readonly TERRACOTTA: ItemType | null;
  static readonly TINTED_GLASS: ItemType | null;
  static readonly TIPPED_ARROW: ItemType | null;
  static readonly TNT: ItemType | null;
  static readonly TNT_MINECART: ItemType | null;
  static readonly TORCH: ItemType | null;
  static readonly TOTEM_OF_UNDYING: ItemType | null;
  static readonly TRADER_LLAMA_SPAWN_EGG: ItemType | null;
  static readonly TRAPPED_CHEST: ItemType | null;
  static readonly TRIDENT: ItemType | null;
  static readonly TRIPWIRE_HOOK: ItemType | null;
  static readonly TROPICAL_FISH: ItemType | null;
  static readonly TROPICAL_FISH_BUCKET: ItemType | null;
  static readonly TROPICAL_FISH_SPAWN_EGG: ItemType | null;
  static readonly TUBE_CORAL: ItemType | null;
  static readonly TUBE_CORAL_BLOCK: ItemType | null;
  static readonly TUBE_CORAL_FAN: ItemType | null;
  static readonly TUFF: ItemType | null;
  static readonly TURTLE_EGG: ItemType | null;
  static readonly TURTLE_HELMET: ItemType | null;
  static readonly TURTLE_SPAWN_EGG: ItemType | null;
  static readonly TWISTING_VINES: ItemType | null;
  static readonly VEX_SPAWN_EGG: ItemType | null;
  static readonly VILLAGER_SPAWN_EGG: ItemType | null;
  static readonly VINDICATOR_SPAWN_EGG: ItemType | null;
  static readonly VINE: ItemType | null;
  static readonly WANDERING_TRADER_SPAWN_EGG: ItemType | null;
  static readonly WARPED_BUTTON: ItemType | null;
  static readonly WARPED_DOOR: ItemType | null;
  static readonly WARPED_FENCE: ItemType | null;
  static readonly WARPED_FENCE_GATE: ItemType | null;
  static readonly WARPED_FUNGUS: ItemType | null;
  static readonly WARPED_FUNGUS_ON_A_STICK: ItemType | null;
  static readonly WARPED_HYPHAE: ItemType | null;
  static readonly WARPED_NYLIUM: ItemType | null;
  static readonly WARPED_PLANKS: ItemType | null;
  static readonly WARPED_PRESSURE_PLATE: ItemType | null;
  static readonly WARPED_ROOTS: ItemType | null;
  static readonly WARPED_SIGN: ItemType | null;
  static readonly WARPED_SLAB: ItemType | null;
  static readonly WARPED_STAIRS: ItemType | null;
  static readonly WARPED_STEM: ItemType | null;
  static readonly WARPED_TRAPDOOR: ItemType | null;
  static readonly WARPED_WART_BLOCK: ItemType | null;
  static readonly WATER_BUCKET: ItemType | null;
  static readonly WAXED_COPPER_BLOCK: ItemType | null;
  static readonly WAXED_CUT_COPPER: ItemType | null;
  static readonly WAXED_CUT_COPPER_SLAB: ItemType | null;
  static readonly WAXED_CUT_COPPER_STAIRS: ItemType | null;
  static readonly WAXED_EXPOSED_COPPER: ItemType | null;
  static readonly WAXED_EXPOSED_CUT_COPPER: ItemType | null;
  static readonly WAXED_EXPOSED_CUT_COPPER_SLAB: ItemType | null;
  static readonly WAXED_EXPOSED_CUT_COPPER_STAIRS: ItemType | null;
  static readonly WAXED_OXIDIZED_COPPER: ItemType | null;
  static readonly WAXED_OXIDIZED_CUT_COPPER: ItemType | null;
  static readonly WAXED_OXIDIZED_CUT_COPPER_SLAB: ItemType | null;
  static readonly WAXED_OXIDIZED_CUT_COPPER_STAIRS: ItemType | null;
  static readonly WAXED_WEATHERED_COPPER: ItemType | null;
  static readonly WAXED_WEATHERED_CUT_COPPER: ItemType | null;
  static readonly WAXED_WEATHERED_CUT_COPPER_SLAB: ItemType | null;
  static readonly WAXED_WEATHERED_CUT_COPPER_STAIRS: ItemType | null;
  static readonly WEATHERED_COPPER: ItemType | null;
  static readonly WEATHERED_CUT_COPPER: ItemType | null;
  static readonly WEATHERED_CUT_COPPER_SLAB: ItemType | null;
  static readonly WEATHERED_CUT_COPPER_STAIRS: ItemType | null;
  static readonly WEEPING_VINES: ItemType | null;
  static readonly WET_SPONGE: ItemType | null;
  static readonly WHEAT: ItemType | null;
  static readonly WHEAT_SEEDS: ItemType | null;
  static readonly WHITE_BANNER: ItemType | null;
  static readonly WHITE_BED: ItemType | null;
  static readonly WHITE_CANDLE: ItemType | null;
  static readonly WHITE_CARPET: ItemType | null;
  static readonly WHITE_CONCRETE: ItemType | null;
  static readonly WHITE_CONCRETE_POWDER: ItemType | null;
  static readonly WHITE_DYE: ItemType | null;
  static readonly WHITE_GLAZED_TERRACOTTA: ItemType | null;
  static readonly WHITE_SHULKER_BOX: ItemType | null;
  static readonly WHITE_STAINED_GLASS: ItemType | null;
  static readonly WHITE_STAINED_GLASS_PANE: ItemType | null;
  static readonly WHITE_TERRACOTTA: ItemType | null;
  static readonly WHITE_TULIP: ItemType | null;
  static readonly WHITE_WOOL: ItemType | null;
  static readonly WITCH_SPAWN_EGG: ItemType | null;
  static readonly WITHER_ROSE: ItemType | null;
  static readonly WITHER_SKELETON_SKULL: ItemType | null;
  static readonly WITHER_SKELETON_SPAWN_EGG: ItemType | null;
  static readonly WOLF_SPAWN_EGG: ItemType | null;
  static readonly WOODEN_AXE: ItemType | null;
  static readonly WOODEN_HOE: ItemType | null;
  static readonly WOODEN_PICKAXE: ItemType | null;
  static readonly WOODEN_SHOVEL: ItemType | null;
  static readonly WOODEN_SWORD: ItemType | null;
  static readonly WRITABLE_BOOK: ItemType | null;
  static readonly WRITTEN_BOOK: ItemType | null;
  static readonly YELLOW_BANNER: ItemType | null;
  static readonly YELLOW_BED: ItemType | null;
  static readonly YELLOW_CANDLE: ItemType | null;
  static readonly YELLOW_CARPET: ItemType | null;
  static readonly YELLOW_CONCRETE: ItemType | null;
  static readonly YELLOW_CONCRETE_POWDER: ItemType | null;
  static readonly YELLOW_DYE: ItemType | null;
  static readonly YELLOW_GLAZED_TERRACOTTA: ItemType | null;
  static readonly YELLOW_SHULKER_BOX: ItemType | null;
  static readonly YELLOW_STAINED_GLASS: ItemType | null;
  static readonly YELLOW_STAINED_GLASS_PANE: ItemType | null;
  static readonly YELLOW_TERRACOTTA: ItemType | null;
  static readonly YELLOW_WOOL: ItemType | null;
  static readonly ZOGLIN_SPAWN_EGG: ItemType | null;
  static readonly ZOMBIE_HEAD: ItemType | null;
  static readonly ZOMBIE_HORSE_SPAWN_EGG: ItemType | null;
  static readonly ZOMBIE_PIGMAN_SPAWN_EGG: ItemType | null;
  static readonly ZOMBIE_SPAWN_EGG: ItemType | null;
  static readonly ZOMBIE_VILLAGER_SPAWN_EGG: ItemType | null;
  static readonly ZOMBIFIED_PIGLIN_SPAWN_EGG: ItemType | null;
  /**
   * Gets the {@link ItemType} associated with the given id.
  */
  static get(id: string): ItemType | null;
}
/**
 * A category of items. This is due to the splitting up of
 * items such as wool into separate ids.
*/
export class ItemCategory extends Category<ItemType> {
  static readonly REGISTRY: NamespacedRegistry<ItemCategory>;
  constructor(id: string);
  /**
   * Checks whether the BaseItem is contained within
   * this category.
   *
   * @param baseItem The item
   * @return If it's a part of this category
  */
  contains(baseItem: BaseItem): boolean;
  /**
   * Checks if this category contains `object`.
   *
   * @param object the object
   * @return `true` if this category contains the object
  */
  contains(object: T): boolean;
}
export interface ItemCategory extends Category<ItemType>, Keyed {}

}
declare module 'com.sk89q.worldedit.function.visitor' {
import { Set, Iterator, List, Queue } from 'java.util';
import { Iterable } from 'java.lang';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { Mask, Mask2D } from 'com.sk89q.worldedit.function.mask';
import { FlatRegion, Region } from 'com.sk89q.worldedit.regions';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { RunContext, Operation } from 'com.sk89q.worldedit.function.operation';
import { Entity } from 'com.sk89q.worldedit.entity';
import { RegionFunction, EntityFunction, LayerFunction, FlatRegionFunction } from 'com.sk89q.worldedit.function';
/**
 * Visits the layers within a region.
 *
 * This class works by iterating over all the columns in a {@link FlatRegion},
 * finding the first ground block in each column (searching from a given
 * maximum Y down to a minimum Y), and then applies a {@link LayerFunction} to
 * each layer.
*/
export class LayerVisitor extends Operation {
  /**
   * Create a new visitor.
   *
   * @param flatRegion the flat region to visit
   * @param minY the minimum Y to stop the search at
   * @param maxY the maximum Y to begin the search at
   * @param function the layer function to apply t blocks
  */
  constructor(flatRegion: FlatRegion, minY: number, maxY: number, func: LayerFunction);
  /**
   * Get the mask that determines which columns within the flat region
   * will be visited.
   *
   * @return a 2D mask
  */
  getMask(): Mask2D;
  /**
   * Set the mask that determines which columns within the flat region
   * will be visited.
   *
   * @param mask a 2D mask
  */
  setMask(mask: Mask2D);
  /**
   * Complete the next step. If this method returns true, then the method may
   * be called again in the future, or possibly never. If this method
   * returns false, then this method should not be called again.
   *
   * @param run describes information about the current run
   * @return another operation to run that operation again, or null to stop
   * @throws WorldEditException an error
  */
  resume(run: RunContext): Operation;
  /**
   * Abort the current task. After the this method is called,
   * {@link #resume(RunContext)} should not be called at any point in the
   * future. This method should not be called after successful completion of
   * the operation. This method must be called if the operation is
   * interrupted before completion.
  */
  cancel(): void;
}
/**
 * Visits adjacent points on the same X-Z plane as long as the points
 * pass the given mask, and then executes the provided region
 * function on the entire column.
 *
 * This is used by `//fill`.
*/
export class DownwardVisitor extends RecursiveVisitor {
  /**
   * Create a new visitor.
   *
   * @param mask the mask
   * @param function the function
   * @param baseY the base Y
  */
  constructor(mask: Mask, func: RegionFunction, baseY: number);
}
/**
 * Applies region functions to columns in a {@link FlatRegion}.
*/
export class FlatRegionVisitor extends Operation {
  /**
   * Create a new visitor.
   *
   * @param flatRegion a flat region
   * @param function a function to apply to columns
  */
  constructor(flatRegion: FlatRegion, func: FlatRegionFunction);
  /**
   * Get the number of affected objects.
   *
   * @return the number of affected
  */
  getAffected(): number;
  /**
   * Complete the next step. If this method returns true, then the method may
   * be called again in the future, or possibly never. If this method
   * returns false, then this method should not be called again.
   *
   * @param run describes information about the current run
   * @return another operation to run that operation again, or null to stop
   * @throws WorldEditException an error
  */
  resume(run: RunContext): Operation;
  /**
   * Abort the current task. After the this method is called,
   * {@link #resume(RunContext)} should not be called at any point in the
   * future. This method should not be called after successful completion of
   * the operation. This method must be called if the operation is
   * interrupted before completion.
  */
  cancel(): void;
  /**
   * Gets an iterable of messages that describe the current status of the
   * operation.
   *
   * @return The status messages
  */
  getStatusMessages(): Iterable<Component>;
}
/**
 * Performs a breadth-first search starting from points added with
 * {@link #visit(BlockVector3)}. The search continues
 * to a certain adjacent point provided that the method
 * {@link #isVisitable(BlockVector3, BlockVector3)}
 * returns true for that point.
 *
 * As an abstract implementation, this class can be used to implement
 * functionality that starts at certain points and extends outward from
 * those points.
*/
export class BreadthFirstSearch extends Operation {
  /**
   * Add the given location to the list of locations to visit, provided
   * that it has not been visited. The position passed to this method
   * will still be visited even if it fails
   * {@link #isVisitable(BlockVector3, BlockVector3)}.
   *
   * This method should be used before the search begins, because if
   * the position does fail the test, and the search has already
   * visited it (because it is connected to another root point),
   * the search will mark the position as "visited" and a call to this
   * method will do nothing.
   *
   * @param position the position
  */
  visit(position: BlockVector3): void;
  /**
   * Get the number of affected objects.
   *
   * @return the number of affected
  */
  getAffected(): number;
  /**
   * Complete the next step. If this method returns true, then the method may
   * be called again in the future, or possibly never. If this method
   * returns false, then this method should not be called again.
   *
   * @param run describes information about the current run
   * @return another operation to run that operation again, or null to stop
   * @throws WorldEditException an error
  */
  resume(run: RunContext): Operation;
  /**
   * Abort the current task. After the this method is called,
   * {@link #resume(RunContext)} should not be called at any point in the
   * future. This method should not be called after successful completion of
   * the operation. This method must be called if the operation is
   * interrupted before completion.
  */
  cancel(): void;
  /**
   * Gets an iterable of messages that describe the current status of the
   * operation.
   *
   * @return The status messages
  */
  getStatusMessages(): Iterable<Component>;
}
/**
 * A {@link RecursiveVisitor} that goes orthogonally to the side and down, but never up.
*/
export class NonRisingVisitor extends RecursiveVisitor {
  /**
   * Create a new recursive visitor.
   *
   * @param mask the mask
   * @param function the function
  */
  constructor(mask: Mask, func: RegionFunction);
}
/**
 * An implementation of an {@link BreadthFirstSearch} that uses a mask to
 * determine where a block should be visited.
*/
export class RecursiveVisitor extends BreadthFirstSearch {
  /**
   * Create a new recursive visitor.
   *
   * @param mask the mask
   * @param function the function
  */
  constructor(mask: Mask, func: RegionFunction);
}
/**
 * Utility class to apply region functions to {@link com.sk89q.worldedit.regions.Region}.
*/
export class RegionVisitor extends Operation {
  constructor(region: Region, func: RegionFunction);
  /**
   * Get the number of affected objects.
   *
   * @return the number of affected
  */
  getAffected(): number;
  /**
   * Complete the next step. If this method returns true, then the method may
   * be called again in the future, or possibly never. If this method
   * returns false, then this method should not be called again.
   *
   * @param run describes information about the current run
   * @return another operation to run that operation again, or null to stop
   * @throws WorldEditException an error
  */
  resume(run: RunContext): Operation;
  /**
   * Abort the current task. After the this method is called,
   * {@link #resume(RunContext)} should not be called at any point in the
   * future. This method should not be called after successful completion of
   * the operation. This method must be called if the operation is
   * interrupted before completion.
  */
  cancel(): void;
  /**
   * Gets an iterable of messages that describe the current status of the
   * operation.
   *
   * @return The status messages
  */
  getStatusMessages(): Iterable<Component>;
}
/**
 * Visits entities as provided by an `Iterator`.
*/
export class EntityVisitor extends Operation {
  /**
   * Create a new instance.
   *
   * @param iterator the iterator
   * @param function the function
  */
  constructor(iterator: Iterator<Entity>, func: EntityFunction);
  /**
   * Get the number of affected objects.
   *
   * @return the number of affected
  */
  getAffected(): number;
  /**
   * Complete the next step. If this method returns true, then the method may
   * be called again in the future, or possibly never. If this method
   * returns false, then this method should not be called again.
   *
   * @param run describes information about the current run
   * @return another operation to run that operation again, or null to stop
   * @throws WorldEditException an error
  */
  resume(run: RunContext): Operation;
  /**
   * Abort the current task. After the this method is called,
   * {@link #resume(RunContext)} should not be called at any point in the
   * future. This method should not be called after successful completion of
   * the operation. This method must be called if the operation is
   * interrupted before completion.
  */
  cancel(): void;
  /**
   * Gets an iterable of messages that describe the current status of the
   * operation.
   *
   * @return The status messages
  */
  getStatusMessages(): Iterable<Component>;
}

}
declare module 'com.sk89q.worldedit.EditSession' {
import { Enum } from 'java.lang';
/**
 * Used by {@link EditSession#setBlock(BlockVector3, BlockStateHolder, Stage)} to
 * determine which {@link Extent}s should be bypassed.
*/
export class Stage extends Enum<Stage> {
  static readonly BEFORE_HISTORY: Stage;
  static readonly BEFORE_REORDER: Stage;
  static readonly BEFORE_CHANGE: Stage;
  static valueOf(name: string): Stage;
  static values(): Stage[];
}
/**
 * Reorder mode for {@link EditSession#setReorderMode(ReorderMode)}.
 *
 * 
 * MULTI_STAGE = Multi stage reorder, may not be great with mods.
 * FAST = Use the fast mode. Good for mods.
 * NONE = Place blocks without worrying about placement order.
 * 
*/
export class ReorderMode extends Enum<ReorderMode> {
  static readonly MULTI_STAGE: ReorderMode;
  static readonly FAST: ReorderMode;
  static readonly NONE: ReorderMode;
  static valueOf(name: string): ReorderMode;
  static values(): ReorderMode[];
  getDisplayName(): string;
}

}
declare module 'com.sk89q.worldedit.util.net' {
import { Map } from 'java.util';
import { HttpURLConnection, URL } from 'java.net';
import { InputStream, OutputStream, Closeable, File } from 'java.io';
import { Form, BufferedResponse } from 'com.sk89q.worldedit.util.net.HttpRequest';
export class HttpRequest extends Closeable {
  /**
   * Submit data.
   *
   * @return this object
  */
  body(data: string): HttpRequest;
  /**
   * Submit form data.
   *
   * @param form the form
   * @return this object
  */
  bodyUrlEncodedForm(form: Form): HttpRequest;
  /**
   * Submit form data.
   *
   * @param form the form
   * @return this object
  */
  bodyMultipartForm(form: Form): HttpRequest;
  /**
   * Add a header.
   *
   * @param key   the header key
   * @param value the header value
   * @return this object
  */
  header(key: string, value: string): HttpRequest;
  /**
   * Execute the request.
   * 
   * After execution, {@link #close()} should be called.
   *
   * @return this object
   * @throws java.io.IOException on I/O error
  */
  execute(): HttpRequest;
  /**
   * Require that the response code is one of the given response codes.
   *
   * @param codes a list of codes
   * @return this object
   * @throws java.io.IOException if there is an I/O error or the response code is not expected
  */
  expectResponseCode(...codes: number[]): HttpRequest;
  /**
   * Get the response code.
   *
   * @return the response code
   * @throws java.io.IOException on I/O error
  */
  getResponseCode(): number;
  /**
   * Get the input stream.
   *
   * @return the input stream
  */
  getInputStream(): InputStream;
  /**
   * Buffer the returned response.
   *
   * @return the buffered response
   * @throws java.io.IOException  on I/O error
   * @throws InterruptedException on interruption
  */
  returnContent(): BufferedResponse;
  /**
   * Save the result to a file.
   *
   * @param file the file
   * @return this object
   * @throws java.io.IOException  on I/O error
   * @throws InterruptedException on interruption
  */
  saveContent(file: File): HttpRequest;
  /**
   * Save the result to an output stream.
   *
   * @param out the output stream
   * @return this object
   * @throws java.io.IOException  on I/O error
   * @throws InterruptedException on interruption
  */
  saveContent(out: OutputStream): HttpRequest;
  close(): void;
  /**
   * Perform a GET request.
   *
   * @param url the URL
   * @return a new request object
  */
  static get(url: URL): HttpRequest;
  /**
   * Perform a POST request.
   *
   * @param url the URL
   * @return a new request object
  */
  static post(url: URL): HttpRequest;
  /**
   * Perform a request.
   *
   * @param method the method
   * @param url    the URL
   * @return a new request object
  */
  static request(method: string, url: URL): HttpRequest;
  /**
   * Create a new {@link java.net.URL} and throw a {@link RuntimeException} if the URL
   * is not valid.
   *
   * @param url the url
   * @return a URL object
   * @throws RuntimeException if the URL is invalid
  */
  static url(url: string): URL;
}

}
declare module 'com.sk89q.worldedit.extent.transform' {
import { Set } from 'java.util';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { AbstractDelegateExtent, Extent } from 'com.sk89q.worldedit.extent';
import { BlockState, BaseBlock } from 'com.sk89q.worldedit.world.block';
import { Transform } from 'com.sk89q.worldedit.math.transform';
/**
 * Transforms blocks themselves (but not their position) according to a
 * given transform.
*/
export class BlockTransformExtent extends AbstractDelegateExtent {
  /**
   * Create a new instance.
   *
   * @param extent the extent
  */
  constructor(extent: Extent, transform: Transform);
  /**
   * Get the transform.
   *
   * @return the transform
  */
  getTransform(): Transform;
  getBlock(position: BlockVector3): BlockState;
  getFullBlock(position: BlockVector3): BaseBlock;
  setBlock<B>(location: BlockVector3, block: B): boolean;
  /**
   * Transform the given block using the given transform.
   *
   * The provided block is not modified.
   *
   * @param block the block
   * @param transform the transform
   * @return the same block
  */
  static transform<B>(block: B, transform: Transform): B;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(location: BlockVector3, block: T): boolean;
}

}
declare module 'com.sk89q.util' {
import { Collection, List, Map } from 'java.util';
export class ReflectionUtil {
  static getField<T>(from: any, name: string): T;
}
/**
 * String utilities.
*/
export class StringUtil {
  /**
   * Trim a string if it is longer than a certain length.
   *
   * @param str the string
   * @param len the length to trim to
   * @return a new string
  */
  static trimLength(str: string, len: number): string;
  /**
   * Join an array of strings into a string.
   *
   * @param str the string array
   * @param delimiter the delimiter
   * @param initialIndex the initial index to start form
   * @return a new string
  */
  static joinString(str: string[], delimiter: string, initialIndex: number): string;
  /**
   * Join an array of strings into a string.
   *
   * @param str the string array
   * @param delimiter the delimiter
   * @param initialIndex the initial index to start form
   * @param quote the character to put around each entry
   * @return a new string
  */
  static joinQuotedString(str: string[], delimiter: string, initialIndex: number, quote: string): string;
  /**
   * Join an array of strings into a string.
   *
   * @param str the string array
   * @param delimiter the delimiter
   * @return a new string
  */
  static joinString(str: string[], delimiter: string): string;
  /**
   * Join an array of strings into a string.
   *
   * @param str an array of objects
   * @param delimiter the delimiter
   * @param initialIndex the initial index to start form
   * @return a new string
  */
  static joinString(str: any[], delimiter: string, initialIndex: number): string;
  /**
   * Join an array of strings into a string.
   *
   * @param str a list of integers
   * @param delimiter the delimiter
   * @param initialIndex the initial index to start form
   * @return a new string
  */
  static joinString(str: number[], delimiter: string, initialIndex: number): string;
  /**
   * Join an list of strings into a string.
   *
   * @param str a list of strings
   * @param delimiter the delimiter
   * @param initialIndex the initial index to start form
   * @return a new string
  */
  static joinString(str: Collection<any>, delimiter: string, initialIndex: number): string;
  /**
   * Find the Levenshtein distance between two Strings.
   *
   * This is the number of changes needed to change one String into
   * another, where each change is a single character modification (deletion,
   * insertion or substitution).
   *
   * The previous implementation of the Levenshtein distance algorithm
   * was from http://www.merriampark.com/ld.htm
   *
   * Chas Emerick has written an implementation in Java, which avoids an OutOfMemoryError
   * which can occur when my Java implementation is used with very large strings.
   * This implementation of the Levenshtein distance algorithm
   * is from http://www.merriampark.com/ldjava.htm
   *
   *      * StringUtil.getLevenshteinDistance(null, *)             = IllegalArgumentException
   * StringUtil.getLevenshteinDistance(*, null)             = IllegalArgumentException
   * StringUtil.getLevenshteinDistance("","")               = 0
   * StringUtil.getLevenshteinDistance("","a")              = 1
   * StringUtil.getLevenshteinDistance("aaapppp", "")       = 7
   * StringUtil.getLevenshteinDistance("frog", "fog")       = 1
   * StringUtil.getLevenshteinDistance("fly", "ant")        = 3
   * StringUtil.getLevenshteinDistance("elephant", "hippo") = 7
   * StringUtil.getLevenshteinDistance("hippo", "elephant") = 7
   * StringUtil.getLevenshteinDistance("hippo", "zzzzzzzz") = 8
   * StringUtil.getLevenshteinDistance("hello", "hallo")    = 1
   * 
   *
   * @param s  the first String, must not be null
   * @param t  the second String, must not be null
   * @return result distance
   * @throws IllegalArgumentException if either String input `null`
  */
  static getLevenshteinDistance(s: string, t: string): number;
  static lookup<T>(lookup: Map<string, T>, name: string, fuzzy: boolean): T;
  static parseListInQuotes(input: string[], delimiter: string, quoteOpen: string, quoteClose: string): string[];
  static parseListInQuotes(input: string[], delimiter: string, quoteOpen: string, quoteClose: string, appendLeftover: boolean): string[];
}

}
declare module 'com.sk89q.worldedit.bukkit' {
import { ItemType } from 'com.sk89q.worldedit.world.item';
import { Locale, Set, Collection, List, OptionalInt, UUID, Map } from 'java.util';
import { Entity, Player, BaseEntity } from 'com.sk89q.worldedit.entity';
import { GameMode } from 'com.sk89q.worldedit.world.gamemode';
import { WorldNativeAccess } from 'com.sk89q.worldedit.internal.wna';
import { BiomeType } from 'com.sk89q.worldedit.world.biome';
import { Path } from 'java.nio.file';
import { SideEffectSet, HandSide, Direction, YAMLConfiguration, SideEffect, Location } from 'com.sk89q.worldedit.util';
import { TreeType } from 'com.sk89q.worldedit.util.TreeGenerator';
import { CUIEvent } from 'com.sk89q.worldedit.internal.cui';
import { CommandRegistration } from 'com.sk89q.bukkit.util';
import { Property } from 'com.sk89q.worldedit.registry.state';
import { BlockCategoryRegistry, BundledBlockRegistry, BlockMaterial, Registries, ItemCategoryRegistry } from 'com.sk89q.worldedit.world.registry';
import { Vector3, BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { SessionKey } from 'com.sk89q.worldedit.session';
import { Region } from 'com.sk89q.worldedit.regions';
import { World, DataFixer, AbstractWorld, RegenOptions } from 'com.sk89q.worldedit.world';
import { BlockBag } from 'com.sk89q.worldedit.extent.inventory';
import { YAMLProcessor } from 'com.sk89q.util.yaml';
import { Lifecycled } from 'com.sk89q.worldedit.util.lifecycle';
import { BaseItemStack, BaseItem } from 'com.sk89q.worldedit.blocks';
import { Iterable, Runnable, Class } from 'java.lang';
import { WeatherType } from 'com.sk89q.worldedit.world.weather';
import { CommandManager } from 'org.enginehub.piston';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { ParserContext } from 'com.sk89q.worldedit.extension.input';
import { EditSession, LocalConfiguration } from 'com.sk89q.worldedit';
import { AbstractNonPlayerActor, MultiUserPlatform, Capability, Watchdog, Preference, Actor, AbstractPlatform, AbstractPlayerActor, Locatable } from 'com.sk89q.worldedit.extension.platform';
import { Extent } from 'com.sk89q.worldedit.extent';
import { BlockState, BlockType, BaseBlock } from 'com.sk89q.worldedit.world.block';
export class BukkitItemCategoryRegistry extends ItemCategoryRegistry {
  /**
   * Gets a set of values with a given category.
   *
   * @param category The category
   * @return A set of values
  */
  getCategorisedByName(category: string): Set<ItemType>;
}
export class BukkitPlayerBlockBag extends BlockBag {
  fetchBlock(blockState: BlockState): void;
  storeBlock(blockState: BlockState, amount: number): void;
  flushChanges(): void;
  addSourcePosition(pos: Location): void;
  addSingleSourcePosition(pos: Location): void;
  /**
   * Store a block.
   *
   * @param blockState The block state
   * @throws BlockBagException on error
  */
  storeBlock(blockState: BlockState): void;
}
export class BukkitWorld extends AbstractWorld {
  getEntities(region: Region): Entity[];
  getEntities(): Entity[];
  createEntity(location: Location, entity: BaseEntity): Entity | null;
  getName(): string;
  getId(): string;
  getStoragePath(): Path;
  getBlockLightLevel(pt: BlockVector3): number;
  regenerate(region: Region, extent: Extent, options: RegenOptions): boolean;
  clearContainerBlockContents(pt: BlockVector3): boolean;
  generateTree(type: TreeType, editSession: EditSession, pt: BlockVector3): boolean;
  dropItem(pt: Vector3, item: BaseItemStack): void;
  checkLoadedChunk(pt: BlockVector3): void;
  equals(other: any): boolean;
  hashCode(): number;
  getMaxY(): number;
  getMinY(): number;
  fixAfterFastMode(chunks: Iterable<BlockVector2>): void;
  playEffect(position: Vector3, type: number, data: number): boolean;
  getWeather(): WeatherType;
  getRemainingWeatherDuration(): number;
  setWeather(weather: WeatherType);
  setWeather(weatherType: WeatherType, duration: number): void;
  getSpawnPosition(): BlockVector3;
  simulateBlockMine(pt: BlockVector3): void;
  canPlaceAt(position: BlockVector3, blockState: BlockState): boolean;
  getBlock(position: BlockVector3): BlockState;
  setBlock<B>(position: BlockVector3, block: B, sideEffects: SideEffectSet): boolean;
  getFullBlock(position: BlockVector3): BaseBlock;
  applySideEffects(position: BlockVector3, previousType: BlockState, sideEffectSet: SideEffectSet): Set<SideEffect>;
  useItem(position: BlockVector3, item: BaseItem, face: Direction): boolean;
  fullySupports3DBiomes(): boolean;
  getBiome(position: BlockVector3): BiomeType;
  setBiome(position: BlockVector3, biome: BiomeType): boolean;
  /**
   * Similar to {@link Extent#setBlock(BlockVector3, BlockStateHolder)} but a
   * `notifyAndLight` parameter indicates whether adjacent blocks
   * should be notified that changes have been made and lighting operations
   * should be executed.
   *
   * If it's not possible to skip lighting, or if it's not possible to
   * avoid notifying adjacent blocks, then attempt to meet the
   * specification as best as possible.
   *
   * On implementations where the world is not simulated, the
   * `notifyAndLight` parameter has no effect either way.
   *
   * @param position position of the block
   * @param block block to set
   * @param notifyAndLight true to to notify and light
   * @return true if the block was successfully set (return value may not be accurate)
  */
  setBlock<B>(pt: BlockVector3, block: B): boolean;
  /**
   * Drop an item at the given position.
   *
   * @param position the position
   * @param item the item to drop
   * @param count the number of individual stacks to drop (number of item entities)
  */
  dropItem(pt: Vector3, item: BaseItemStack, times: number): void;
  /**
   * Similar to {@link Extent#setBlock(BlockVector3, BlockStateHolder)} but a
   * `notifyAndLight` parameter indicates whether adjacent blocks
   * should be notified that changes have been made and lighting operations
   * should be executed.
   *
   * If it's not possible to skip lighting, or if it's not possible to
   * avoid notifying adjacent blocks, then attempt to meet the
   * specification as best as possible.
   *
   * On implementations where the world is not simulated, the
   * `notifyAndLight` parameter has no effect either way.
   *
   * @param position position of the block
   * @param block block to set
   * @param notifyAndLight true to to notify and light
   * @return true if the block was successfully set (return value may not be accurate)
  */
  setBlock<B>(position: BlockVector3, block: B, notifyAndLight: boolean): boolean;
  /**
   * Regenerate an area.
   *
   * @param region the region
   * @param editSession the {@link EditSession}
   * @return true if re-generation was successful
  */
  regenerate(region: Region, editSession: EditSession): boolean;
  /**
   * Regenerate an area.
   *
   * @param region the region
   * @param extent the {@link Extent}
   * @return true if re-generation was successful
  */
  regenerate(region: Region, extent: Extent): boolean;
  /**
   * Get the biome at the given location.
   *
   * If there is no biome available, then the ocean biome should be
   * returned.
   *
   * @param position the (x, z) location to check the biome at
   * @return the biome at the location
   * @deprecated Biomes in Minecraft are 3D now, use {@link InputExtent#getBiome(BlockVector3)}
  */
  getBiome(position: BlockVector2): BiomeType;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(position: BlockVector3, block: T): boolean;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector2, biome: BiomeType): boolean;
}
/**
 * Adapts between Bukkit and WorldEdit equivalent objects.
*/
export class BukkitAdapter {
  /**
   * Convert any WorldEdit world into an equivalent wrapped Bukkit world.
   *
   * If a matching world cannot be found, a {@link RuntimeException}
   * will be thrown.
   *
   * @param world the world
   * @return a wrapped Bukkit world
  */
  static asBukkitWorld(world: World): BukkitWorld;
}
export class BukkitCommandSender extends AbstractNonPlayerActor {
  getUniqueId(): UUID;
  getName(): string;
  printRaw(msg: string): void;
  print(msg: string): void;
  printDebug(msg: string): void;
  printError(msg: string): void;
  print(component: Component): void;
  getGroups(): string[];
  hasPermission(perm: string): boolean;
  checkPermission(permission: string): void;
  getLocale(): Locale;
  getSessionKey(): SessionKey;
  /**
   * Print a WorldEdit error.
   *
   * @param component The component to print
  */
  printError(component: Component): void;
  /**
   * Print a WorldEdit message.
   *
   * @param component The component to print
  */
  printDebug(component: Component): void;
}
export class BukkitBlockCategoryRegistry extends BlockCategoryRegistry {
  /**
   * Gets a set of values with a given category.
   *
   * @param category The category
   * @return A set of values
  */
  getCategorisedByName(category: string): Set<BlockType>;
}
export class BukkitBlockCommandSender extends AbstractNonPlayerActor {
  getName(): string;
  printRaw(msg: string): void;
  print(msg: string): void;
  printDebug(msg: string): void;
  printError(msg: string): void;
  print(component: Component): void;
  getLocale(): Locale;
  /**
   * Get the location of this actor.
   *
   * @return the location of the actor
  */
  getLocation(): Location;
  /**
   * Sets the location of this actor.
   *
   * @param location the new location of the actor
   * @return if the teleport succeeded
  */
  setLocation(location: Location);
  /**
   * Get the extent that this actor is in.
   *
   * @return the extent
  */
  getExtent(): Extent;
  getUniqueId(): UUID;
  getGroups(): string[];
  checkPermission(permission: string): void;
  hasPermission(permission: string): boolean;
  getSessionKey(): SessionKey;
  /**
   * Print a WorldEdit error.
   *
   * @param component The component to print
  */
  printError(component: Component): void;
  /**
   * Print a WorldEdit message.
   *
   * @param component The component to print
  */
  printDebug(component: Component): void;
}
export interface BukkitBlockCommandSender extends AbstractNonPlayerActor, Locatable {}
export class BukkitPlayer extends AbstractPlayerActor {
  getUniqueId(): UUID;
  getItemInHand(handSide: HandSide): BaseItemStack;
  getBlockInHand(handSide: HandSide): BaseBlock;
  getName(): string;
  getDisplayName(): string;
  giveItem(itemStack: BaseItemStack): void;
  printRaw(msg: string): void;
  print(msg: string): void;
  printDebug(msg: string): void;
  printError(msg: string): void;
  print(component: Component): void;
  trySetPosition(pos: Vector3, pitch: number, yaw: number): boolean;
  getGroups(): string[];
  getInventoryBlockBag(): BlockBag;
  getGameMode(): GameMode;
  setGameMode(gameMode: GameMode);
  hasPermission(perm: string): boolean;
  getWorld(): World;
  dispatchCUIEvent(event: CUIEvent): void;
  isAllowedToFly(): boolean;
  setFlying(flying: boolean): void;
  getState(): BaseEntity;
  getLocation(): Location;
  setLocation(location: Location);
  getLocale(): Locale;
  sendAnnouncements(): void;
  getFacet<T>(cls: Class<T>): T | null;
  getSessionKey(): SessionKey;
  sendFakeBlock<B>(pos: BlockVector3, block: B): void;
  /**
   * Attempt to move the player.
   *
   * 
   * This action may fail, due to other mods cancelling the move.
   * If so, this method will return `false`.
   * 
   *
   * @param pos where to move them
   * @param pitch the pitch (up/down) of the player's view in degrees
   * @param yaw the yaw (left/right) of the player's view in degrees
   * @return if the move was able to occur
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  trySetPosition(pos: Vector3): boolean;
  /**
   * Print a WorldEdit error.
   *
   * @param component The component to print
  */
  printError(component: Component): void;
  /**
   * Print a WorldEdit message.
   *
   * @param component The component to print
  */
  printDebug(component: Component): void;
}
/**
 * YAMLConfiguration but with setting for no op permissions and plugin root data folder.
*/
export class BukkitConfiguration extends YAMLConfiguration {
  noOpPermissions: boolean;
  commandBlockSupport: boolean;
  unsupportedVersionEditing: boolean;
  constructor(config: YAMLProcessor, plugin: WorldEditPlugin);
  load(): void;
  getWorkingDirectoryPath(): Path;
}
export class BukkitServerInterface extends AbstractPlatform {
  readonly plugin: WorldEditPlugin;
  /**
   * Gets the registry holder.
   *
   * @return The registry holder
  */
  getRegistries(): Registries;
  /**
   * Gets the Minecraft data version being used by the platform.
   *
   * @return the data version
  */
  getDataVersion(): number;
  /**
   * Get a DataFixer capable of upgrading old data.
   *
   * @return a data fixer, or null if not supported by this platform
  */
  getDataFixer(): DataFixer;
  /**
   * Checks if a mob type is valid.
   *
   * @param type The mob type name to check
   * @return Whether the name is a valid mod type
  */
  isValidMobType(type: string): boolean;
  /**
   * Reload WorldEdit configuration.
  */
  reload(): void;
  /**
   * Schedules the given `task` to be invoked once every
   * `period` ticks after an initial delay of `delay` ticks.
   *
   * @param delay Delay in server ticks before executing first repeat
   * @param period Period in server ticks of the task
   * @param task Task to be executed
   * @return Task id number (-1 if scheduling failed)
  */
  schedule(delay: number, period: number, task: Runnable): number;
  /**
   * Get the watchdog service.
   *
   * @return the watchdog service, or `null` if none
  */
  getWatchdog(): Watchdog;
  /**
   * Get a list of available or loaded worlds.
   *
   * @return a list of worlds
  */
  getWorlds(): World[];
  /**
   * Create a duplicate of the given player.
   *
   * The given player may have been provided by a different platform.
   *
   * @param player the player to match
   * @return a matched player, otherwise null
  */
  matchPlayer(player: Player): Player | null;
  /**
   * Create a duplicate of the given world.
   *
   * The given world may have been provided by a different platform.
   *
   * @param world the world to match
   * @return a matched world, otherwise null
  */
  matchWorld(world: World): BukkitWorld | null;
  /**
   * Register the commands contained within the given command manager.
   *
   * 
   *     This method should be ignored if the platform offers a command registration event.
   * 
   *
   * @param commandManager the command manager
  */
  registerCommands(dispatcher: CommandManager): void;
  /**
   * Set if the game hooks are enabled for this platform.
  */
  setGameHooksEnabled(enabled: boolean): void;
  /**
   * Get the configuration from this platform.
   *
   * @return the configuration
  */
  getConfiguration(): LocalConfiguration;
  /**
   * Get the version of WorldEdit that this platform provides.
   *
   * This version should match WorldEdit releases because it may be
   * checked to match.
   *
   * @return the version
  */
  getVersion(): string;
  /**
   * Get a friendly name of the platform.
   *
   * The name can be anything (reasonable). An example name may be
   * "Bukkit" or "Forge".
   *
   * @return the platform name
  */
  getPlatformName(): string;
  /**
   * Get the version of the platform, which can be anything.
   *
   * @return the platform version
  */
  getPlatformVersion(): string;
  /**
   * Get a map of advertised capabilities of this platform, where each key
   * in the given map is a supported capability and the respective value
   * indicates the preference for this platform for that given capability.
   *
   * @return a map of capabilities
  */
  getCapabilities(): Map<Capability, Preference>;
  /**
   * Get a set of {@link SideEffect}s supported by this platform.
   *
   * @return A set of supported side effects
  */
  getSupportedSideEffects(): Set<SideEffect>;
  unregisterCommands(): void;
  /**
   * Get a list of connected users.
   *
   * @return a list of connected users
  */
  getConnectedUsers(): Collection<Actor>;
}
export interface BukkitServerInterface extends AbstractPlatform, MultiUserPlatform {}
export class BukkitBlockRegistry extends BundledBlockRegistry {
  getRichName(blockType: BlockType): Component;
  getMaterial(blockType: BlockType): BlockMaterial | null;
  getProperties(blockType: BlockType): Map<string, Property<any>> | null;
  getInternalBlockStateId(state: BlockState): OptionalInt;
}

}
declare module 'com.sk89q.worldedit.entity.metadata' {
/**
 * Describes various classes of entities.
*/
export class EntityProperties {
  /**
   * Test whether the entity is a player-derived entity.
   *
   * @return true if a player derived entity
  */
  isPlayerDerived(): boolean;
  /**
   * Test whether the entity is a projectile.
   *
   * @return true if a projectile
  */
  isProjectile(): boolean;
  /**
   * Test whether the entity is an item.
   *
   * @return true if an item
  */
  isItem(): boolean;
  /**
   * Test whether the entity is a falling block.
   *
   * @return true if a falling block
  */
  isFallingBlock(): boolean;
  /**
   * Test whether the entity is a painting.
   *
   * @return true if a painting
  */
  isPainting(): boolean;
  /**
   * Test whether the entity is an item frame.
   *
   * @return true if an item frame
  */
  isItemFrame(): boolean;
  /**
   * Test whether the entity is a boat.
   *
   * @return true if a boat
  */
  isBoat(): boolean;
  /**
   * Test whether the entity is a minecart.
   *
   * @return true if a minecart
  */
  isMinecart(): boolean;
  /**
   * Test whether the entity is a primed TNT block.
   *
   * @return true if TNT
  */
  isTNT(): boolean;
  /**
   * Test whether the entity is an experience orb.
   *
   * @return true if an experience orb
  */
  isExperienceOrb(): boolean;
  /**
   * Test whether the entity is a living entity.
   *
   * A "living entity" is the superclass of many living entity classes
   * in Minecraft.
   *
   * @return true if a living entity
  */
  isLiving(): boolean;
  /**
   * Test whether the entity is an animal.
   *
   * @return true if an animal
  */
  isAnimal(): boolean;
  /**
   * Test whether the entity is an ambient creature, which includes
   * the bat.
   *
   * @return true if an ambient creature
  */
  isAmbient(): boolean;
  /**
   * Test whether the entity is a non-player controlled character, which
   * includes villagers, NPCs from mods, and so on.
   *
   * @return true if an NPC
  */
  isNPC(): boolean;
  /**
   * Test whether the entity is the iron golem from Minecraft.
   *
   * @return true if an iron golem
  */
  isGolem(): boolean;
  /**
   * Test whether the entity is tameable and is tamed.
   *
   * @return true if tamed
  */
  isTamed(): boolean;
  /**
   * Test whether the entity has been named (tagged).
   *
   * @return true if named
  */
  isTagged(): boolean;
  /**
   * Test whether the entity is an armor stand.
   *
   * @return true if an armor stand
  */
  isArmorStand(): boolean;
  /**
   * Test whether this entity can be pasted.
   *
   * @return true if pasteable
  */
  isPasteable(): boolean;
  /**
   * Test whether the entity is a water creature.
   *
   * @return true if water creature
  */
  isWaterCreature(): boolean;
}

}
declare module 'com.sk89q.worldedit.command.util.SubCommandPermissionCondition' {
import { Collection, List } from 'java.util';
import { Command } from 'org.enginehub.piston';
import { Condition } from 'org.enginehub.piston.Command';
export class Generator {
  constructor(subCommands: Collection<Command>);
  build(): Condition;
}

}
declare module 'com.sk89q.worldedit.world.gamemode' {
import { Registry, Keyed } from 'com.sk89q.worldedit.registry';
export class GameMode extends Keyed {
  static readonly REGISTRY: Registry<GameMode>;
  constructor(id: string);
  /**
   * The id of this object in the registry. Must be unique, and lowercase. Certain registries (e.g Namespaced ones) may have additional restrictions.
   * @return an id
  */
  getId(): string;
  /**
   * Gets the name of this game mode, or the ID if the name cannot be found.
   *
   * @return The name, or ID
  */
  getName(): string;
  toString(): string;
  hashCode(): number;
  equals(obj: any): boolean;
}
export class GameModes {
  static readonly SURVIVAL: GameMode;
  static readonly CREATIVE: GameMode;
  static readonly ADVENTURE: GameMode;
  static readonly SPECTATOR: GameMode;
  static register(gameMode: GameMode): GameMode;
  static get(id: string): GameMode | null;
}

}
declare module 'com.sk89q.worldedit.util.report' {
import { StackTraceElement } from 'java.lang';
import { Iterator, Collection, List, ListIterator } from 'java.util';
import { Line } from 'com.sk89q.worldedit.util.report.DataReport';
export class StackTraceReport extends Report {
  constructor(stackTrace: StackTraceElement[]);
  getTitle(): string;
  toString(): string;
}
export class ShallowObjectReport extends DataReport {
  constructor(title: string, object: any);
}
export class ConfigReport extends DataReport {
  constructor();
}
export class HierarchyObjectReport extends ShallowObjectReport {
  constructor(title: string, object: any);
}
export class Report {
  getTitle(): string;
}
/**
 * Annotates properties that should not be exposed in the report.
*/
export class Unreported {

}
export class SystemInfoReport extends DataReport {
  constructor();
}
export class DataReport extends Report {
  constructor(title: string);
  append(key: string, message: string): void;
  append(key: string, message: string, ...values: any[]): void;
  append(key: string, value: number): void;
  append(key: string, value: boolean): void;
  append(key: string, value: any): void;
  getTitle(): string;
  toString(): string;
}
export class ReportList extends Report {
  constructor(title: string);
  getTitle(): string;
  size(): number;
  isEmpty(): boolean;
  contains(o: any): boolean;
  iterator(): Iterator<Report>;
  toArray(): any[];
  toArray<T>(a: T[]): T[];
  add(report: Report): boolean;
  remove(o: any): boolean;
  containsAll(c: Collection<any>): boolean;
  addAll(c: Collection<Report>): boolean;
  addAll(index: number, c: Collection<Report>): boolean;
  removeAll(c: Collection<any>): boolean;
  retainAll(c: Collection<any>): boolean;
  clear(): void;
  equals(o: any): boolean;
  hashCode(): number;
  get(index: number): Report;
  set(index: number, element: Report): Report;
  add(index: number, element: Report): void;
  remove(index: number): Report;
  indexOf(o: any): number;
  lastIndexOf(o: any): number;
  listIterator(): ListIterator<Report>;
  listIterator(index: number): ListIterator<Report>;
  subList(fromIndex: number, toIndex: number): Report[];
  toString(): string;
}
export interface ReportList extends Report {}

}
declare module 'com.sk89q.worldedit.function.operation.ChangeSetExecutor' {
import { Enum } from 'java.lang';
export class Type extends Enum<Type> {
  static readonly UNDO: Type;
  static readonly REDO: Type;
  static valueOf(name: string): Type;
  static values(): Type[];
}

}
declare module 'com.sk89q.worldedit.command' {
import { DateTimeFormatter } from 'java.time.format';
import { List } from 'java.util';
import { ReorderMode } from 'com.sk89q.worldedit.EditSession';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { RegionFactory } from 'com.sk89q.worldedit.regions.factory';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { Region } from 'com.sk89q.worldedit.regions';
import { World } from 'com.sk89q.worldedit.world';
import { BaseItem } from 'com.sk89q.worldedit.blocks';
import { Player } from 'com.sk89q.worldedit.entity';
import { BiomeType } from 'com.sk89q.worldedit.world.biome';
import { ZonedDateTime } from 'java.time';
import { Direction } from 'com.sk89q.worldedit.util';
import { TreeType } from 'com.sk89q.worldedit.util.TreeGenerator';
import { CommandManagerService, CommandManager, CommandParameters } from 'org.enginehub.piston';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { CommandRegistrationHandler } from 'com.sk89q.worldedit.internal.command';
import { SelectorChoice } from 'com.sk89q.worldedit.command.argument';
import { EntityRemover, HookMode } from 'com.sk89q.worldedit.command.util';
import { WorldEdit, LocalSession, EditSession, WorldEditException } from 'com.sk89q.worldedit';
import { Pattern } from 'com.sk89q.worldedit.function.pattern';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
import { CommandArgument } from 'org.enginehub.piston.part';
/**
 * Commands for working with chunks.
*/
export class ChunkCommands {
  constructor(worldEdit: WorldEdit);
  chunkInfo(player: Player): void;
  listChunks(actor: Actor, world: World, session: LocalSession, page: number): void;
  deleteChunks(actor: Actor, world: World, session: LocalSession, beforeTime: ZonedDateTime): void;
}
/**
 * Commands that work with schematic files.
*/
export class SchematicCommands {
  /**
   * Create a new instance.
   *
   * @param worldEdit reference to WorldEdit
  */
  constructor(worldEdit: WorldEdit);
  load(actor: Actor, session: LocalSession, filename: string, formatName: string): void;
  save(actor: Actor, session: LocalSession, filename: string, formatName: string, allowOverwrite: boolean): void;
  delete(actor: Actor, filename: string): void;
  formats(actor: Actor): void;
  list(actor: Actor, page: number, oldFirst: boolean, newFirst: boolean): void;
}
export class ToolCommands {
  static register(registration: CommandRegistrationHandler, commandManager: CommandManager, commandManagerService: CommandManagerService, worldEdit: WorldEdit): void;
  constructor(we: WorldEdit);
  none(player: Player, session: LocalSession): void;
  selwand(player: Player, session: LocalSession): void;
  navwand(player: Player, session: LocalSession): void;
  info(player: Player, session: LocalSession): void;
  tree(player: Player, session: LocalSession, type: TreeType): void;
  stacker(player: Player, session: LocalSession, range: number, mask: Mask): void;
  repl(player: Player, session: LocalSession, pattern: Pattern): void;
  cycler(player: Player, session: LocalSession): void;
  floodFill(player: Player, session: LocalSession, pattern: Pattern, range: number): void;
  deltree(player: Player, session: LocalSession): void;
  farwand(player: Player, session: LocalSession): void;
  longrangebuildtool(player: Player, session: LocalSession, primary: Pattern, secondary: Pattern): void;
}
export class SuperPickaxeCommands {
  constructor(we: WorldEdit);
  single(player: Player, session: LocalSession): void;
  area(player: Player, session: LocalSession, range: number): void;
  recursive(player: Player, session: LocalSession, range: number): void;
}
/**
 * Commands for moving the player around.
*/
export class NavigationCommands {
  /**
   * Create a new instance.
   *
   * @param worldEdit reference to WorldEdit
  */
  constructor(worldEdit: WorldEdit);
  unstuck(player: Player): void;
  ascend(player: Player, levels: number): void;
  descend(player: Player, levels: number): void;
  ceiling(player: Player, clearance: number, forceFlight: boolean, forceGlass: boolean): void;
  thru(player: Player): void;
  jumpTo(player: Player): void;
  up(player: Player, distance: number, forceFlight: boolean, forceGlass: boolean): void;
}
/**
 * Snapshot commands.
*/
export class SnapshotCommands {
  constructor(we: WorldEdit);
}
export class SnapshotUtilCommands {
  constructor(we: WorldEdit);
  restore(actor: Actor, world: World, session: LocalSession, editSession: EditSession, snapshotName: string): void;
}
/**
 * Implements biome-related commands such as "/biomelist".
*/
export class BiomeCommands {
  /**
   * Create a new instance.
  */
  constructor();
  biomeList(actor: Actor, page: number): void;
  biomeInfo(player: Player, session: LocalSession, useLineOfSight: boolean, usePosition: boolean): void;
  setBiome(player: Player, session: LocalSession, editSession: EditSession, target: BiomeType, atPosition: boolean): void;
}
export class WorldEditCommands {
  constructor(we: WorldEdit);
  version(actor: Actor): void;
  reload(actor: Actor): void;
  report(actor: Actor, pastebin: boolean): void;
  cui(player: Player, session: LocalSession): void;
  tz(actor: Actor, session: LocalSession, timezone: string): void;
  help(actor: Actor, listSubCommands: boolean, page: number, command: string[]): void;
}
/**
 * Utility commands.
*/
export class UtilityCommands {
  constructor(we: WorldEdit);
  fill(actor: Actor, session: LocalSession, editSession: EditSession, pattern: Pattern, radius: number, depth: number): number;
  fillr(actor: Actor, session: LocalSession, editSession: EditSession, pattern: Pattern, radius: number, depth: number): number;
  drain(actor: Actor, session: LocalSession, editSession: EditSession, radius: number, waterlogged: boolean): number;
  fixLava(actor: Actor, session: LocalSession, editSession: EditSession, radius: number): number;
  fixWater(actor: Actor, session: LocalSession, editSession: EditSession, radius: number): number;
  removeAbove(actor: Actor, session: LocalSession, editSession: EditSession, size: number, height: number): number;
  removeBelow(actor: Actor, session: LocalSession, editSession: EditSession, size: number, height: number): number;
  removeNear(actor: Actor, session: LocalSession, editSession: EditSession, mask: Mask, radius: number): number;
  replaceNear(actor: Actor, world: World, session: LocalSession, editSession: EditSession, radius: number, from: Mask, to: Pattern): number;
  snow(actor: Actor, session: LocalSession, editSession: EditSession, size: number, height: number, stack: boolean): number;
  thaw(actor: Actor, session: LocalSession, editSession: EditSession, size: number, height: number): number;
  green(actor: Actor, session: LocalSession, editSession: EditSession, size: number, height: number, convertCoarse: boolean): number;
  extinguish(actor: Actor, session: LocalSession, editSession: EditSession, radius: number): number;
  butcher(actor: Actor, radius: number, killPets: boolean, killNpcs: boolean, killGolems: boolean, killAnimals: boolean, killAmbient: boolean, killWithName: boolean, killFriendly: boolean, killArmorStands: boolean, killWater: boolean): number;
  remove(actor: Actor, remover: EntityRemover, radius: number): number;
  calc(actor: Actor, input: string[]): void;
  help(actor: Actor, listSubCommands: boolean, page: number, command: string[]): void;
}
/**
 * Commands related to scripting.
*/
export class ScriptingCommands {
  /**
   * Create a new instance.
   *
   * @param worldEdit reference to WorldEdit
  */
  constructor(worldEdit: WorldEdit);
  execute(player: Player, session: LocalSession, filename: string, args: string[]): void;
  executeLast(player: Player, session: LocalSession, args: string[]): void;
}
export class ApplyBrushCommands {
  static register(service: CommandManagerService, commandManager: CommandManager, registration: CommandRegistrationHandler): void;
  forest(parameters: CommandParameters, player: Player, localSession: LocalSession, type: TreeType): void;
  item(parameters: CommandParameters, player: Player, localSession: LocalSession, item: BaseItem, direction: Direction): void;
  set(parameters: CommandParameters, player: Player, localSession: LocalSession, pattern: Pattern): void;
}
/**
 * Clipboard commands.
*/
export class ClipboardCommands {
  copy(actor: Actor, session: LocalSession, editSession: EditSession, region: Region, copyEntities: boolean, copyBiomes: boolean, mask: Mask): void;
  cut(actor: Actor, session: LocalSession, editSession: EditSession, region: Region, leavePattern: Pattern, copyEntities: boolean, copyBiomes: boolean, mask: Mask): void;
  paste(actor: Actor, world: World, session: LocalSession, editSession: EditSession, ignoreAirBlocks: boolean, atOrigin: boolean, selectPasted: boolean, onlySelect: boolean, pasteEntities: boolean, pasteBiomes: boolean, sourceMask: Mask): void;
  rotate(actor: Actor, session: LocalSession, rotateY: number, rotateX: number, rotateZ: number): void;
  flip(actor: Actor, session: LocalSession, direction: BlockVector3): void;
  clearClipboard(actor: Actor, session: LocalSession): void;
}
/**
 * General WorldEdit commands.
*/
export class GeneralCommands {
  static register(registration: CommandRegistrationHandler, commandManager: CommandManager, commandManagerService: CommandManagerService, worldEdit: WorldEdit): void;
  /**
   * Create a new instance.
   *
   * @param worldEdit reference to WorldEdit
  */
  constructor(worldEdit: WorldEdit);
  limit(actor: Actor, session: LocalSession, limit: number): void;
  timeout(actor: Actor, session: LocalSession, limit: number): void;
  reorderMode(actor: Actor, session: LocalSession, reorderMode: ReorderMode): void;
  drawSelection(player: Player, session: LocalSession, drawSelection: boolean): void;
  world(actor: Actor, session: LocalSession, world: World): void;
  watchdog(actor: Actor, session: LocalSession, hookMode: HookMode): void;
  gmask(actor: Actor, session: LocalSession, mask: Mask): void;
  togglePlace(actor: Actor, session: LocalSession): void;
  searchItem(actor: Actor, blocksOnly: boolean, itemsOnly: boolean, page: number, query: string[]): void;
}
export class InsufficientArgumentsException extends WorldEditException {
  constructor(error: string);
  constructor(error: Component);
}
/**
 * Selection commands.
*/
export class SelectionCommands {
  constructor(we: WorldEdit);
  pos1(actor: Actor, world: World, session: LocalSession, coordinates: BlockVector3): void;
  pos2(actor: Actor, world: World, session: LocalSession, coordinates: BlockVector3): void;
  hpos1(player: Player, session: LocalSession): void;
  hpos2(player: Player, session: LocalSession): void;
  chunk(actor: Actor, world: World, session: LocalSession, coordinates: BlockVector3, expandSelection: boolean, useChunkCoordinates: boolean): void;
  wand(player: Player, session: LocalSession, navWand: boolean): void;
  toggleWand(player: Player): void;
  contract(actor: Actor, world: World, session: LocalSession, amount: number, reverseAmount: number, direction: BlockVector3[]): void;
  shift(actor: Actor, world: World, session: LocalSession, amount: number, direction: BlockVector3[]): void;
  outset(actor: Actor, world: World, session: LocalSession, amount: number, onlyHorizontal: boolean, onlyVertical: boolean): void;
  inset(actor: Actor, world: World, session: LocalSession, amount: number, onlyHorizontal: boolean, onlyVertical: boolean): void;
  size(actor: Actor, world: World, session: LocalSession, clipboardInfo: boolean): void;
  count(actor: Actor, world: World, session: LocalSession, editSession: EditSession, mask: Mask): number;
  distr(actor: Actor, world: World, session: LocalSession, clipboardDistr: boolean, separateStates: boolean, page: number): void;
  select(actor: Actor, world: World, session: LocalSession, selector: SelectorChoice, setDefaultSelector: boolean): void;
}
/**
 * Commands for the generation of shapes and other objects.
*/
export class GenerationCommands {
  /**
   * Create a new instance.
   *
   * @param worldEdit reference to WorldEdit
  */
  constructor(worldEdit: WorldEdit);
  hcyl(actor: Actor, session: LocalSession, editSession: EditSession, pattern: Pattern, radii: number[], height: number): number;
  cyl(actor: Actor, session: LocalSession, editSession: EditSession, pattern: Pattern, radii: number[], height: number, hollow: boolean): number;
  hsphere(actor: Actor, session: LocalSession, editSession: EditSession, pattern: Pattern, radii: number[], raised: boolean): number;
  sphere(actor: Actor, session: LocalSession, editSession: EditSession, pattern: Pattern, radii: number[], raised: boolean, hollow: boolean): number;
  forestGen(actor: Actor, session: LocalSession, editSession: EditSession, size: number, type: TreeType, density: number): number;
  pumpkins(actor: Actor, session: LocalSession, editSession: EditSession, size: number): number;
  hollowPyramid(actor: Actor, session: LocalSession, editSession: EditSession, pattern: Pattern, size: number): number;
  pyramid(actor: Actor, session: LocalSession, editSession: EditSession, pattern: Pattern, size: number, hollow: boolean): number;
  generate(actor: Actor, session: LocalSession, editSession: EditSession, region: Region, pattern: Pattern, expression: string[], hollow: boolean, useRawCoords: boolean, offset: boolean, offsetCenter: boolean): number;
  generateBiome(actor: Actor, session: LocalSession, editSession: EditSession, region: Region, target: BiomeType, expression: string[], hollow: boolean, useRawCoords: boolean, offset: boolean, offsetCenter: boolean): number;
}
/**
 * Tool commands.
*/
export class ToolUtilCommands {
  constructor(we: WorldEdit);
  togglePickaxe(player: Player, session: LocalSession, superPickaxe: boolean): void;
  mask(player: Player, session: LocalSession, mask: Mask): void;
  material(player: Player, session: LocalSession, pattern: Pattern): void;
  range(player: Player, session: LocalSession, range: number): void;
  size(player: Player, session: LocalSession, size: number): void;
  traceMask(player: Player, session: LocalSession, mask: Mask): void;
}
export class PaintBrushCommands {
  static register(service: CommandManagerService, commandManager: CommandManager, registration: CommandRegistrationHandler): void;
  forest(parameters: CommandParameters, player: Player, localSession: LocalSession, type: TreeType): void;
  item(parameters: CommandParameters, player: Player, localSession: LocalSession, item: BaseItem, direction: Direction): void;
  set(parameters: CommandParameters, player: Player, localSession: LocalSession, pattern: Pattern): void;
}
/**
 * Commands to set brush shape.
*/
export class BrushCommands {
  /**
   * Create a new instance.
   *
   * @param worldEdit reference to WorldEdit
  */
  constructor(worldEdit: WorldEdit);
  sphereBrush(player: Player, session: LocalSession, pattern: Pattern, radius: number, hollow: boolean): void;
  cylinderBrush(player: Player, session: LocalSession, pattern: Pattern, radius: number, height: number, hollow: boolean): void;
  clipboardBrush(player: Player, session: LocalSession, ignoreAir: boolean, usingOrigin: boolean, pasteEntities: boolean, pasteBiomes: boolean, sourceMask: Mask): void;
  smoothBrush(player: Player, session: LocalSession, radius: number, iterations: number, mask: Mask): void;
  extinguishBrush(player: Player, session: LocalSession, radius: number): void;
  gravityBrush(player: Player, session: LocalSession, radius: number, height: number): void;
  butcherBrush(player: Player, session: LocalSession, radius: number, killPets: boolean, killNpcs: boolean, killGolems: boolean, killAnimals: boolean, killAmbient: boolean, killWithName: boolean, killFriendly: boolean, killArmorStands: boolean, killWater: boolean): void;
  deform(player: Player, localSession: LocalSession, shape: RegionFactory, radius: number, expression: string, useRawCoords: boolean, usePlacement: boolean): void;
  set(player: Player, localSession: LocalSession, shape: RegionFactory, radius: number, pattern: Pattern): void;
  forest(player: Player, localSession: LocalSession, shape: RegionFactory, radius: number, density: number, type: TreeType): void;
  raise(player: Player, localSession: LocalSession, shape: RegionFactory, radius: number): void;
  lower(player: Player, localSession: LocalSession, shape: RegionFactory, radius: number): void;
  snow(player: Player, localSession: LocalSession, shape: RegionFactory, radius: number, stack: boolean): void;
  biome(player: Player, localSession: LocalSession, shape: RegionFactory, radius: number, biomeType: BiomeType): void;
}
/**
 * Extracted from {@link SelectionCommands} to allow importing of {@link Command}.
*/
export class ExpandCommands {
  static register(registration: CommandRegistrationHandler, commandManager: CommandManager, commandManagerService: CommandManagerService): void;
  expand(actor: Actor, world: World, session: LocalSession, amount: number, reverseAmount: number, direction: BlockVector3[]): void;
}
/**
 * Commands that operate on regions.
*/
export class RegionCommands {
  /**
   * Create a new instance.
  */
  constructor();
  set(actor: Actor, editSession: EditSession, region: Region, pattern: Pattern): number;
  line(actor: Actor, editSession: EditSession, region: Region, pattern: Pattern, thickness: number, shell: boolean): number;
  curve(actor: Actor, editSession: EditSession, region: Region, pattern: Pattern, thickness: number, shell: boolean): number;
  replace(actor: Actor, editSession: EditSession, region: Region, from: Mask, to: Pattern): number;
  overlay(actor: Actor, editSession: EditSession, region: Region, pattern: Pattern): number;
  center(actor: Actor, editSession: EditSession, region: Region, pattern: Pattern): number;
  naturalize(actor: Actor, editSession: EditSession, region: Region): number;
  walls(actor: Actor, editSession: EditSession, region: Region, pattern: Pattern): number;
  faces(actor: Actor, editSession: EditSession, region: Region, pattern: Pattern): number;
  smooth(actor: Actor, editSession: EditSession, region: Region, iterations: number, mask: Mask): number;
  move(actor: Actor, world: World, editSession: EditSession, session: LocalSession, region: Region, multiplier: number, offset: BlockVector3, replace: Pattern, moveSelection: boolean, ignoreAirBlocks: boolean, copyEntities: boolean, copyBiomes: boolean, mask: Mask): number;
  stack(actor: Actor, world: World, editSession: EditSession, session: LocalSession, region: Region, count: number, offset: BlockVector3, moveSelection: boolean, ignoreAirBlocks: boolean, copyEntities: boolean, copyBiomes: boolean, blockUnits: boolean, mask: Mask): number;
  deform(actor: Actor, session: LocalSession, editSession: EditSession, region: Region, expression: string[], useRawCoords: boolean, offset: boolean, offsetCenter: boolean): number;
  hollow(actor: Actor, editSession: EditSession, region: Region, thickness: number, pattern: Pattern): number;
  forest(actor: Actor, editSession: EditSession, region: Region, type: TreeType, density: number): number;
  flora(actor: Actor, editSession: EditSession, region: Region, density: number): number;
}
/**
 * Commands to undo, redo, and clear history.
*/
export class HistoryCommands {
  /**
   * Create a new instance.
   *
   * @param worldEdit reference to WorldEdit
  */
  constructor(worldEdit: WorldEdit);
  undo(actor: Actor, session: LocalSession, times: number, playerName: string): void;
  redo(actor: Actor, session: LocalSession, times: number, playerName: string): void;
  clearHistory(actor: Actor, session: LocalSession): void;
}

}
declare module 'com.sk89q.worldedit.internal.registry' {
import { List } from 'java.util';
import { Stream } from 'java.util.stream';
import { ParserContext } from 'com.sk89q.worldedit.extension.input';
import { WorldEdit } from 'com.sk89q.worldedit';
/**
 * An abstract implementation of a factory for internal usage.
 *
 * @param  the element that the factory returns
*/
export class AbstractFactory<E> {
  /**
   * Gets an immutable list of parsers.
   *
   * 
   * To add parsers, use the register method.
   * 
   *
   * @return the parsers
  */
  getParsers(): InputParser<E>[];
  parseFromInput(input: string, context: ParserContext): E;
  getSuggestions(input: string): string[];
  /**
   * Registers an InputParser to this factory.
   *
   * @param inputParser The input parser
  */
  register(inputParser: InputParser<E>): void;
}
/**
 * Input parser interface for {@link AbstractFactory}.
 *
 * @param  the element
*/
export class InputParser<E> {
  parseFromInput(input: string, context: ParserContext): E;
  /**
   * Gets a stream of suggestions of input to this parser.
   *
   * @return a stream of suggestions
  */
  getSuggestions(input: string): Stream<string>;
}
/**
 * An input parser that only performs a single function from aliases.
 *
 * @param  the element
*/
export class SimpleInputParser<E> extends InputParser<E> {
  /**
   * The strings this parser matches.
   *
   * @return the matching aliases
  */
  getMatchedAliases(): string[];
  parseFromInput(input: string, context: ParserContext): E;
  parseFromSimpleInput(input: string, context: ParserContext): E;
  /**
   * Gets the primary name of this matcher.
   *
   * @return the primary match
  */
  getPrimaryMatcher(): string;
  getSuggestions(input: string): Stream<string>;
}

}
declare module 'com.sk89q.worldedit.util' {
import { Set, Random, Optional, List, OptionalInt, Properties, UUID, Map } from 'java.util';
import { Vector3, BlockVector3 } from 'com.sk89q.worldedit.math';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { World } from 'com.sk89q.worldedit.world';
import { YAMLProcessor } from 'com.sk89q.util.yaml';
import { Player } from 'com.sk89q.worldedit.entity';
import { Path } from 'java.nio.file';
import { Enum, Comparable, Number, Class } from 'java.lang';
import { File } from 'java.io';
import { TreeType } from 'com.sk89q.worldedit.util.TreeGenerator';
import { State } from 'com.sk89q.worldedit.util.SideEffect';
import { LocalConfiguration } from 'com.sk89q.worldedit';
import { Function } from 'java.util.function';
import { Choice } from 'com.sk89q.worldedit.util.WeightedChoice';
import { Extent } from 'com.sk89q.worldedit.extent';
import { BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * Simple LocalConfiguration that loads settings using
 * `java.util.Properties`.
*/
export class PropertiesConfiguration extends LocalConfiguration {
  /**
   * Construct the object. The configuration isn't loaded yet.
   *
   * @param path the path to the configuration
  */
  constructor(path: Path);
  /**
   * Construct the object. The configuration isn't loaded yet.
   *
   * @param path the path to the configuration
   * @deprecated Use {@link PropertiesConfiguration#PropertiesConfiguration(Path)}
  */
  constructor(path: File);
  load(): void;
}
/**
 * Represents a location in a world with has a direction.
 *
 * Like `Vectors`, `Locations` are immutable and mutator methods
 * will create a new copy.
 *
 * At the moment, but this may change in the future, {@link #hashCode()} and
 * {@link #equals(Object)} are subject to minor differences caused by
 * floating point errors.
*/
export class Location {
  /**
   * Create a new instance in the given extent at 0, 0, 0 with a
   * direction vector of 0, 0, 0.
   *
   * @param extent the extent
  */
  constructor(extent: Extent);
  /**
   * Create a new instance in the given extent with the given coordinates
   * with a direction vector of 0, 0, 0.
   *
   * @param extent the extent
   * @param x the X coordinate
   * @param y the Y coordinate
   * @param z the Z coordinate
  */
  constructor(extent: Extent, x: number, y: number, z: number);
  /**
   * Create a new instance in the given extent with the given position
   * vector and a direction vector of 0, 0, 0.
   *
   * @param extent the extent
   * @param position the position vector
  */
  constructor(extent: Extent, position: Vector3);
  /**
   * Create a new instance in the given extent with the given coordinates
   * and the given direction vector.
   *
   * @param extent the extent
   * @param x the X coordinate
   * @param y the Y coordinate
   * @param z the Z coordinate
   * @param direction the direction vector
  */
  constructor(extent: Extent, x: number, y: number, z: number, direction: Vector3);
  /**
   * Create a new instance in the given extent with the given coordinates
   * and the given direction vector.
   *
   * @param extent the extent
   * @param x the X coordinate
   * @param y the Y coordinate
   * @param z the Z coordinate
   * @param yaw the yaw, in degrees
   * @param pitch the pitch, in degrees
  */
  constructor(extent: Extent, x: number, y: number, z: number, yaw: number, pitch: number);
  /**
   * Create a new instance in the given extent with the given position vector
   * and the given direction vector.
   *
   * @param extent the extent
   * @param position the position vector
   * @param direction the direction vector
  */
  constructor(extent: Extent, position: Vector3, direction: Vector3);
  /**
   * Create a new instance in the given extent with the given position vector
   * and the given direction vector.
   *
   * @param extent the extent
   * @param position the position vector
   * @param yaw the yaw, in degrees
   * @param pitch the pitch, in degrees
  */
  constructor(extent: Extent, position: Vector3, yaw: number, pitch: number);
  /**
   * Get the extent.
   *
   * @return the extent
  */
  getExtent(): Extent;
  /**
   * Create a clone of this object with the given extent.
   *
   * @param extent the new extent
   * @return the new instance
  */
  setExtent(extent: Extent);
  /**
   * Get the yaw in degrees.
   *
   * @return the yaw in degrees
  */
  getYaw(): number;
  /**
   * Create a clone of this object with the given yaw.
   *
   * @param yaw the new yaw
   * @return the new instance
  */
  setYaw(yaw: number);
  /**
   * Get the pitch in degrees.
   *
   * @return the pitch in degrees
  */
  getPitch(): number;
  /**
   * Create a clone of this object with the given pitch.
   *
   * @param pitch the new yaw
   * @return the new instance
  */
  setPitch(pitch: number);
  /**
   * Create a clone of this object with the given yaw and pitch.
   *
   * @param yaw the new yaw
   * @param pitch the new pitch
   * @return the new instance
  */
  setDirection(yaw: number, pitch: number): Location;
  /**
   * Get the direction vector.
   *
   * @return the direction vector
  */
  getDirection(): Vector3;
  /**
   * Get the direction as a {@link Direction}.
   *
   * @return The direction
  */
  getDirectionEnum(): Direction;
  /**
   * Create a clone of this object with the given direction.
   *
   * @param direction the new direction
   * @return the new instance
  */
  setDirection(direction: Vector3);
  /**
   * Get a {@link Vector3} form of this location's position.
   *
   * @return a vector
  */
  toVector(): Vector3;
  /**
   * Get the X component of the position vector.
   *
   * @return the X component
  */
  getX(): number;
  /**
   * Get the rounded X component of the position vector.
   *
   * @return the rounded X component
  */
  getBlockX(): number;
  /**
   * Return a copy of this object with the X component of the new object
   * set to the given value.
   *
   * @param x the new value for the X component
   * @return a new immutable instance
  */
  setX(x: number);
  /**
   * Get the Y component of the position vector.
   *
   * @return the Y component
  */
  getY(): number;
  /**
   * Get the rounded Y component of the position vector.
   *
   * @return the rounded Y component
  */
  getBlockY(): number;
  /**
   * Return a copy of this object with the Y component of the new object
   * set to the given value.
   *
   * @param y the new value for the Y component
   * @return a new immutable instance
  */
  setY(y: number);
  /**
   * Get the Z component of the position vector.
   *
   * @return the Z component
  */
  getZ(): number;
  /**
   * Get the rounded Z component of the position vector.
   *
   * @return the rounded Z component
  */
  getBlockZ(): number;
  /**
   * Return a copy of this object with the Z component of the new object
   * set to the given value.
   *
   * @param z the new value for the Y component
   * @return a new immutable instance
  */
  setZ(z: number);
  /**
   * Return a copy of this object with the position set to the given value.
   *
   * @param position The new position
   * @return a new immutable instance
  */
  setPosition(position: Vector3);
  equals(o: any): boolean;
  hashCode(): number;
}
export class HandSide extends Enum<HandSide> {
  static readonly MAIN_HAND: HandSide;
  static readonly OFF_HAND: HandSide;
  static valueOf(name: string): HandSide;
  static values(): HandSide[];
}
/**
 * This class uses an inefficient method to figure out what block a player
 * is looking towards.
 *
 * Originally written by toi. It was ported to WorldEdit and trimmed down by
 * sk89q. Thanks to Raphfrk for optimization of toi's original class.
*/
export class TargetBlock {
  /**
   * Constructor requiring a player, uses default values.
   *
   * @param player player to work with
  */
  constructor(player: Player);
  /**
   * Constructor requiring a player, max distance and a checking distance.
   *
   * @param player Player to work with
   * @param maxDistance how far it checks for blocks
   * @param checkDistance how often to check for blocks, the smaller the more precise
  */
  constructor(player: Player, maxDistance: number, checkDistance: number);
  /**
   * Set the mask used for determine where to stop traces.
   * Setting to null will restore the default.
   *
   * @param stopMask the mask used to stop traces
  */
  setStopMask(stopMask: Mask | null);
  /**
   * Set the mask used for determine where to stop solid block traces.
   * Setting to null will restore the default.
   *
   * @param solidMask the mask used to stop solid block traces
  */
  setSolidMask(solidMask: Mask | null);
  /**
   * Returns any block at the sight. Returns null if out of range or if no
   * viable target was found. Will try to return the last valid air block it finds.
   *
   * @return Block
  */
  getAnyTargetBlock(): Location;
  /**
   * Returns the block at the sight. Returns null if out of range or if no
   * viable target was found
   *
   * @return Block
  */
  getTargetBlock(): Location;
  /**
   * Returns the block at the sight. Returns null if out of range or if no
   * viable target was found
   *
   * @return Block
  */
  getSolidTargetBlock(): Location;
  /**
   * Get next block.
   *
   * @return next block position
  */
  getNextBlock(): Location;
  /**
   * Returns the current block along the line of vision.
   *
   * @return block position
  */
  getCurrentBlock(): Location;
  /**
   * Returns the previous block in the aimed path.
   *
   * @return block position
  */
  getPreviousBlock(): Location;
  getAnyTargetBlockFace(): Location;
  getTargetBlockFace(): Location;
}
export class SideEffect extends Enum<SideEffect> {
  static readonly LIGHTING: SideEffect;
  static readonly NEIGHBORS: SideEffect;
  static readonly UPDATE: SideEffect;
  static readonly VALIDATION: SideEffect;
  static readonly ENTITY_AI: SideEffect;
  static readonly EVENTS: SideEffect;
  static valueOf(name: string): SideEffect;
  static values(): SideEffect[];
  getDisplayName(): string;
  getDescription(): string;
  getDefaultValue(): State;
}
/**
 * Represents an object that can be identified by a UUID.
*/
export class Identifiable {
  /**
   * Get the UUID for this object.
   *
   * @return the UUID
  */
  getUniqueId(): UUID;
}
export class GuavaUtil {
  static firstNonNull<T>(first: T | null, second: T | null): T;
}
/**
 * Indicates that an object can provide various "facets," which are
 * specific distinct interfaces that can represent a portion of the object.
 *
 * For example, an instance of an {@link Entity} may have a facet
 * for accessing its inventory (if it contains an inventory) or a facet
 * for accessing its health (if it has health).
 *
 * Facets are referred to by their interface or abstract class and
 * it is dependent on the implementation of the object specifying this
 * interface to return the most applicable implementation. However, in
 * many cases, such an implementation may not apply or it has not been
 * implemented so a request for a facet may return `null`.
*/
export class Faceted {
  /**
   * Get the facet corresponding to the given class or interface.
   *
   * @param cls the class or interface
   * @param  the type
   * @return an implementation of the facet or `null` if one is unavailable
  */
  getFacet<T>(cls: Class<T>): T | null;
}
export class Countable<T> extends Comparable<Countable<T>> {
  /**
   * Construct the object.
   *
   * @param id the ID
   * @param amount the count of
  */
  constructor(id: T, amount: number);
  getID(): T;
  setID(iD: T);
  getAmount(): number;
  setAmount(amount: number);
  /**
   * Decrement the amount.
  */
  decrement(): void;
  /**
   * Increment the amount.
  */
  increment(): void;
  compareTo(other: Countable<T>): number;
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
}
/**
 * A less simple implementation of {@link LocalConfiguration}
 * using YAML configuration files.
*/
export class YAMLConfiguration extends LocalConfiguration {
  load(): void;
  unload(): void;
}
export class SideEffectSet {
  constructor(sideEffects: Map<SideEffect, State>);
  with(sideEffect: SideEffect, state: State): SideEffectSet;
  doesApplyAny(): boolean;
  getState(effect: SideEffect): State;
  /**
   * Gets whether this side effect is not off.
   *
   * 
   * This returns whether it is either delayed or on.
   * 
   *
   * @param effect The side effect
   * @return Whether it should apply
  */
  shouldApply(effect: SideEffect): boolean;
  getSideEffectsToApply(): Set<SideEffect>;
  static defaults(): SideEffectSet;
  static none(): SideEffectSet;
}
/**
 * Represents a block located at some position.
*/
export class LocatedBlock {
  constructor(location: BlockVector3, block: BaseBlock);
  getLocation(): BlockVector3;
  getBlock(): BaseBlock;
  hashCode(): number;
  equals(obj: any): boolean;
}
/**
 * A collection of cardinal, ordinal, and secondary-ordinal directions.
*/
export class Direction extends Enum<Direction> {
  static readonly NORTH: Direction;
  static readonly EAST: Direction;
  static readonly SOUTH: Direction;
  static readonly WEST: Direction;
  static readonly UP: Direction;
  static readonly DOWN: Direction;
  static readonly NORTHEAST: Direction;
  static readonly NORTHWEST: Direction;
  static readonly SOUTHEAST: Direction;
  static readonly SOUTHWEST: Direction;
  static readonly WEST_NORTHWEST: Direction;
  static readonly WEST_SOUTHWEST: Direction;
  static readonly NORTH_NORTHWEST: Direction;
  static readonly NORTH_NORTHEAST: Direction;
  static readonly EAST_NORTHEAST: Direction;
  static readonly EAST_SOUTHEAST: Direction;
  static readonly SOUTH_SOUTHEAST: Direction;
  static readonly SOUTH_SOUTHWEST: Direction;
  static valueOf(name: string): Direction;
  static values(): Direction[];
  /**
   * Return true if the direction is of a cardinal direction (north, west
   * east, and south).
   *
   * This evaluates as false for directions that have a non-zero
   * Y-component.
   *
   * @return true if cardinal
  */
  isCardinal(): boolean;
  /**
   * Return true if the direction is of an ordinal direction (northwest,
   * southwest, southeast, northeaast).
   *
   * @return true if ordinal
  */
  isOrdinal(): boolean;
  /**
   * Return true if the direction is of a secondary ordinal direction
   * (north-northwest, north-northeast, south-southwest, etc.).
   *
   * @return true if secondary ordinal
  */
  isSecondaryOrdinal(): boolean;
  /**
   * Return whether Y component is non-zero.
   *
   * @return true if the Y component is non-zero
  */
  isUpright(): boolean;
  /**
   * Get the vector.
   *
   * @return the vector
  */
  toVector(): Vector3;
  /**
   * Get the vector.
   *
   * @return the vector
  */
  toBlockVector(): BlockVector3;
  /**
   * Find the closest direction to the given direction vector.
   *
   * @param vector the vector
   * @param flags the only flags that are permitted (use bitwise math)
   * @return the closest direction, or null if no direction can be returned
  */
  static findClosest(vector: Vector3, flags: number): Direction | null;
  /**
   * Gets all directions with the given flags.
   *
   * @param flags The flags
   * @return The directions that fit the flags
  */
  static valuesOf(flags: number): Direction[];
  /**
   * Converts a rotation index into a Direction.
   *
   * 
   *     Rotation indexes are used in BlockStates, such as sign posts.
   * 
   *
   * @param rotation The rotation index
   * @return The direction, if applicable
  */
  static fromRotationIndex(rotation: number): Optional<Direction>;
  toRotationIndex(): OptionalInt;
}
export class FileDialogUtil {
  static showSaveDialog(exts: string[]): File;
  static showOpenDialog(exts: string[]): File;
}
/**
 * Tree generator.
*/
export class TreeGenerator {
  /**
   * Looks up a tree type. May return null if a tree type by that
   * name is not found.
   *
   * @param type the tree type
   * @return a tree type or null
  */
  static lookup(type: string): TreeType | null;
}
/**
 * Returns the best choice given a weighting function and a target weight.
 *
 * A function must be supplied that returns a numeric score for each
 * choice. The function can return null to mean that the choice should
 * not be considered.
 *
 * @param  the type of choice
*/
export class WeightedChoice<T> {
  /**
   * Create a new instance.
   *
   * @param function a function that assigns a score for each choice
   * @param target the target score that the best choice should be closest to
  */
  constructor(func: Function<T, Number>, target: number);
  /**
   * Consider the given object.
   *
   * @param object the choice
  */
  consider(object: T): void;
  /**
   * Get the best choice.
   *
   * @return the best choice
  */
  getChoice(): Optional<Choice<T>>;
}

}
declare module 'com.sk89q.worldedit.util.TreeGenerator' {
import { Set, Map } from 'java.util';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { Enum } from 'java.lang';
import { EditSession } from 'com.sk89q.worldedit';
export class TreeType extends Enum<TreeType> {
  static readonly TREE: TreeType;
  static readonly BIG_TREE: TreeType;
  static readonly REDWOOD: TreeType;
  static readonly TALL_REDWOOD: TreeType;
  static readonly MEGA_REDWOOD: TreeType;
  static readonly RANDOM_REDWOOD: TreeType;
  static readonly BIRCH: TreeType;
  static readonly TALL_BIRCH: TreeType;
  static readonly RANDOM_BIRCH: TreeType;
  static readonly JUNGLE: TreeType;
  static readonly SMALL_JUNGLE: TreeType;
  static readonly SHORT_JUNGLE: TreeType;
  static readonly RANDOM_JUNGLE: TreeType;
  static readonly JUNGLE_BUSH: TreeType;
  static readonly RED_MUSHROOM: TreeType;
  static readonly BROWN_MUSHROOM: TreeType;
  static readonly CRIMSON_FUNGUS: TreeType;
  static readonly WARPED_FUNGUS: TreeType;
  static readonly RANDOM_MUSHROOM: TreeType;
  static readonly SWAMP: TreeType;
  static readonly ACACIA: TreeType;
  static readonly DARK_OAK: TreeType;
  static readonly PINE: TreeType;
  static readonly CHORUS_PLANT: TreeType;
  static readonly RANDOM: TreeType;
  static valueOf(name: string): TreeType;
  static values(): TreeType[];
  static getAliases(): Set<string>;
  static getPrimaryAliases(): Set<string>;
  generate(editSession: EditSession, pos: BlockVector3): boolean;
  /**
   * Get user-friendly tree type name.
   *
   * @return a name
  */
  getName(): string;
  /**
   * Return type from name. May return null.
   *
   * @param name name to search
   * @return a tree type or null
  */
  static lookup(name: string): TreeType | null;
}

}
declare module 'com.sk89q.worldedit.extension.factory' {
import { Set, List } from 'java.util';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { ParserContext } from 'com.sk89q.worldedit.extension.input';
import { WorldEdit } from 'com.sk89q.worldedit';
import { Pattern } from 'com.sk89q.worldedit.function.pattern';
import { BaseItem } from 'com.sk89q.worldedit.blocks';
import { BaseBlock } from 'com.sk89q.worldedit.world.block';
import { AbstractFactory } from 'com.sk89q.worldedit.internal.registry';
/**
 * A registry of known {@link Pattern}s. Provides methods to instantiate
 * new patterns from input.
 *
 * Instances of this class can be taken from
 * {@link WorldEdit#getPatternFactory()}.
*/
export class PatternFactory extends AbstractFactory<Pattern> {
  /**
   * Create a new instance.
   *
   * @param worldEdit the WorldEdit instance
  */
  constructor(worldEdit: WorldEdit);
}
export class ItemFactory extends AbstractFactory<BaseItem> {
  /**
   * Create a new instance.
   *
   * @param worldEdit the WorldEdit instance.
  */
  constructor(worldEdit: WorldEdit);
}
/**
 * A registry of known {@link Mask}s. Provides methods to instantiate
 * new masks from input.
 *
 * Instances of this class can be taken from
 * {@link WorldEdit#getMaskFactory()}.
*/
export class MaskFactory extends AbstractFactory<Mask> {
  /**
   * Create a new mask registry.
   *
   * @param worldEdit the WorldEdit instance
  */
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): string[];
  parseFromInput(input: string, context: ParserContext): Mask;
}
/**
 * A registry of known {@link BaseBlock}s. Provides methods to instantiate
 * new blocks from input.
 *
 * Instances of this class can be taken from
 * {@link WorldEdit#getBlockFactory()}.
*/
export class BlockFactory extends AbstractFactory<BaseBlock> {
  /**
   * Create a new instance.
   *
   * @param worldEdit the WorldEdit instance.
  */
  constructor(worldEdit: WorldEdit);
  /**
   * Return a set of blocks from a comma-delimited list of blocks.
   *
   * @param input the input
   * @param context the context
   * @return a set of blocks
   * @throws InputParseException thrown in error with the input
  */
  parseFromListInput(input: string, context: ParserContext): Set<BaseBlock>;
}

}
declare module 'com.sk89q.worldedit.world.snapshot.experimental' {
import { Comparable } from 'java.lang';
import { CompoundTag } from 'com.sk89q.jnbt';
import { Optional, ArrayList, List, Map, Comparator } from 'java.util';
import { ZonedDateTime } from 'java.time';
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { URI } from 'java.net';
import { Chunk } from 'com.sk89q.worldedit.world.chunk';
import { Region } from 'com.sk89q.worldedit.regions';
import { Closeable } from 'java.io';
import { Stream } from 'java.util.stream';
import { EditSession } from 'com.sk89q.worldedit';
/**
 * Handler for querying snapshot storage.
*/
export class SnapshotDatabase {
  /**
   * Get the URI scheme handled by this database.
  */
  getScheme(): string;
  /**
   * Get a snapshot by name.
   *
   * @param name the name of the snapshot
   * @return the snapshot if available
  */
  getSnapshot(name: URI): Optional<Snapshot>;
  /**
   * Get all snapshots by world, unsorted. The stream should be
   * {@linkplain Stream#close() closed}, as it may allocate filesystem or network resources.
   *
   * @param worldName the name of the world
   * @return a stream of all snapshots for the given world in this database
  */
  getSnapshots(worldName: string): Stream<Snapshot>;
  getSnapshotsNewestFirst(worldName: string): Stream<Snapshot>;
  getSnapshotsOldestFirst(worldName: string): Stream<Snapshot>;
  getSnapshotsBefore(worldName: string, date: ZonedDateTime): Stream<Snapshot>;
  getSnapshotsAfter(worldName: string, date: ZonedDateTime): Stream<Snapshot>;
}
/**
 * Represents a world snapshot.
*/
export class Snapshot extends Closeable {
  getInfo(): SnapshotInfo;
  /**
   * Get the chunk information for the given position. Implementations may ignore the Y-chunk
   * if its chunks are only stored in 2D.
   *
   * @param position the position of the chunk
   * @return the tag containing chunk data
  */
  getChunkTag(position: BlockVector3): CompoundTag;
  /**
   * Get the chunk information for the given position.
   *
   * @see #getChunkTag(BlockVector3)
   * @see ChunkStoreHelper#getChunk(CompoundTag)
  */
  getChunk(position: BlockVector3): Chunk;
  /**
   * Close this snapshot. This releases the IO handles used to load chunk information.
  */
  close(): void;
}
export class SnapshotComparator {
  static getInstance(): Comparator<Snapshot>;
}
/**
 * Information about a snapshot, such as name and date.
*/
export class SnapshotInfo extends Comparable<SnapshotInfo> {
  static create(name: URI, dateTime: ZonedDateTime): SnapshotInfo;
  getName(): URI;
  getDisplayName(): string;
  getDateTime(): ZonedDateTime;
  equals(o: any): boolean;
  hashCode(): number;
  toString(): string;
  compareTo(o: SnapshotInfo): number;
}
/**
 * A snapshot restore operation.
*/
export class SnapshotRestore {
  /**
   * Construct the snapshot restore operation.
   *
   * @param snapshot The {@link Snapshot} to restore from
   * @param editSession The {@link EditSession} to restore to
   * @param region The {@link Region} to restore to
  */
  constructor(snapshot: Snapshot, editSession: EditSession, region: Region);
  /**
   * Get the number of chunks that are needed.
   *
   * @return a number of chunks
  */
  getChunksAffected(): number;
  /**
   * Restores to world.
   *
   * @throws MaxChangedBlocksException if the max block change limit is exceeded
  */
  restore(): void;
  /**
   * Get a list of the missing chunks. restore() must have been called
   * already.
   *
   * @return a list of coordinates
  */
  getMissingChunks(): BlockVector2[];
  /**
   * Get a list of the chunks that could not have been loaded for other
   * reasons. restore() must have been called already.
   *
   * @return a list of coordinates
  */
  getErrorChunks(): BlockVector2[];
  /**
   * Checks to see where the backup succeeded in any capacity. False will
   * be returned if no chunk could be successfully loaded.
   *
   * @return true if there was total failure
  */
  hadTotalFailure(): boolean;
  /**
   * Get the last error message.
   *
   * @return a message
  */
  getLastErrorMessage(): string;
}

}
declare module 'com.sk89q.worldedit.internal.annotation' {
/**
 * Annotates a parameter to indicate it as optional. This is really a bit of a hack, used to
 * get a {@link Player} or `null` instead of throwing.
*/
export class OptionalArg {

}
/**
 * Annotates a {@link BlockVector3} parameter to inject a direction.
*/
export class Direction {

}
/**
 * Indicates that this value should come from the current selection.
*/
export class Selection {

}
/**
 * Annotates a {@link BlockVector3} parameter to inject an offset.
*/
export class Offset {

}
/**
 * Annotates a `double` parameter to inject multiple radii values.
*/
export class Radii {

}
/**
 * Annotates a {@link Mask} parameter to use the clipboard as the extent instead of target World/EditSession.
*/
export class ClipboardMask {

}
/**
 * Annotates a `List` parameter to inject multiple direction.
*/
export class MultiDirection {

}
/**
 * Indicates that this value is for holding the vertical height.
*/
export class VertHeight {

}
/**
 * Indicates that this value is for 3d-chunk compatibility.
 *
 * 
 * For vectors, this means that the vector supports 2D & 3D inputs,
 * with 2D getting a Y value of 0.
 * 
*/
export class Chunk3d {

}

}
declare module 'com.sk89q.worldedit.internal.cui' {
import { Vector2, BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { LocalSession } from 'com.sk89q.worldedit';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
import { Player } from 'com.sk89q.worldedit.entity';
import { BaseBlock } from 'com.sk89q.worldedit.world.block';
export class CUIRegion {
  /**
   * Sends CUI events describing the region for
   * versions of CUI equal to or greater than the
   * value supplied by getProtocolVersion().
   *
  */
  describeCUI(session: LocalSession, player: Actor): void;
  /**
   * Sends CUI events describing the region for
   * versions of CUI smaller than the value
   * supplied by getProtocolVersion().
   *
  */
  describeLegacyCUI(session: LocalSession, player: Actor): void;
  /**
   * Returns the CUI version that is required to send
   * up-to-date data. If the CUI version is smaller than
   * this value, the legacy methods will be called.
   *
   * @return the protocol version
  */
  getProtocolVersion(): number;
  /**
   * Returns the type ID to send to CUI in the selection event.
   *
   * @return the type ID
  */
  getTypeID(): string;
  /**
   * Returns the type ID to send to CUI in the selection
   * event if the CUI is in legacy mode.
   *
   * @return the legacy type ID
  */
  getLegacyTypeID(): string;
}
export class SelectionPolygonEvent extends CUIEvent {
  constructor(...vertices: number[]);
  getTypeId(): string;
  getParameters(): string[];
}
export class CUIEvent {
  getTypeId(): string;
  getParameters(): string[];
}
export class SelectionShapeEvent extends CUIEvent {
  constructor(shapeName: string);
  getTypeId(): string;
  getParameters(): string[];
}
export class SelectionCylinderEvent extends CUIEvent {
  constructor(pos: BlockVector3, radius: Vector2);
  getTypeId(): string;
  getParameters(): string[];
}
export class SelectionPointEvent extends CUIEvent {
  constructor(id: number, pos: BlockVector3, area: number);
  getTypeId(): string;
  getParameters(): string[];
}
/**
 * Handles creation of server-side CUI systems.
*/
export class ServerCUIHandler {
  static getMaxServerCuiSize(): number;
  /**
   * Creates a structure block that shows the region.
   *
   * 
   *     Null symbolises removal of the CUI.
   * 
   *
   * @param player The player to create the structure block for.
   * @return The structure block, or null
  */
  static createStructureBlock(player: Player): BaseBlock | null;
}
export class SelectionMinMaxEvent extends CUIEvent {
  constructor(min: number, max: number);
  getTypeId(): string;
  getParameters(): string[];
}
export class SelectionEllipsoidPointEvent extends CUIEvent {
  constructor(id: number, pos: BlockVector3);
  getTypeId(): string;
  getParameters(): string[];
}
export class SelectionPoint2DEvent extends CUIEvent {
  constructor(id: number, pos: BlockVector2, area: number);
  constructor(id: number, pos: BlockVector3, area: number);
  getTypeId(): string;
  getParameters(): string[];
}

}
declare module 'com.sk89q.worldedit.extent.reorder' {
import { Map } from 'java.util';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { Operation } from 'com.sk89q.worldedit.function.operation';
import { PlacementPriority } from 'com.sk89q.worldedit.extent.reorder.MultiStageReorder';
import { BlockMap } from 'com.sk89q.worldedit.util.collection';
import { Extent, AbstractBufferingExtent } from 'com.sk89q.worldedit.extent';
import { BlockType, BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * A special extent that batches changes into Minecraft chunks. This helps
 * improve the speed of setting the blocks, since chunks do not need to be
 * loaded repeatedly, however it does take more memory due to caching the
 * blocks.
*/
export class ChunkBatchingExtent extends AbstractBufferingExtent {
  constructor(extent: Extent);
  constructor(extent: Extent, enabled: boolean);
  isEnabled(): boolean;
  setEnabled(enabled: boolean): void;
  commitRequired(): boolean;
  setBlock<B>(location: BlockVector3, block: B): boolean;
  setBlock<T>(location: BlockVector3, block: T): boolean;
}
/**
 * An interface for {@link Extent}s that are meant to reorder changes so
 * that they are more successful.
 *
 * For example, torches in Minecraft need to be placed on a block. A smart
 * reordering implementation might place the torch after the block has
 * been placed.
*/
export class ReorderingExtent extends Extent {

}
/**
 * Re-orders blocks into several stages.
*/
export class MultiStageReorder extends AbstractBufferingExtent {
  /**
   * Create a new instance when the re-ordering is enabled.
   *
   * @param extent the extent
  */
  constructor(extent: Extent);
  /**
   * Create a new instance.
   *
   * @param extent the extent
   * @param enabled true to enable
  */
  constructor(extent: Extent, enabled: boolean);
  /**
   * Return whether re-ordering is enabled.
   *
   * @return true if re-ordering is enabled
  */
  isEnabled(): boolean;
  /**
   * Set whether re-ordering is enabled.
   *
   * @param enabled true if re-ordering is enabled
  */
  setEnabled(enabled: boolean): void;
  commitRequired(): boolean;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<B>(location: BlockVector3, block: B): boolean;
  commitBefore(): Operation;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(location: BlockVector3, block: T): boolean;
}
export interface MultiStageReorder extends AbstractBufferingExtent, ReorderingExtent {}

}
declare module 'com.sk89q.worldedit.util.translation' {
import { Type } from 'java.lang.reflect';
import { Locale, Set, Map } from 'java.util';
import { Void } from 'java.lang';
import { ArchiveUnpacker } from 'com.sk89q.worldedit.util.io.file';
import { Future } from 'java.util.concurrent';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { TranslatableComponentRenderer } from 'com.sk89q.worldedit.util.formatting.text.renderer';
import { ResourceLoader } from 'com.sk89q.worldedit.util.io';
import { Path } from 'java.nio.file';
import { Lock } from 'java.util.concurrent.locks';
/**
 * Handles translations for the plugin.
 *
 * 
 * These should be in the following format:
 * plugin.component.message[.meta]*
 * 
 *
 * 
 * Where,
 * plugin = worldedit
 * component = The part of the plugin, eg expand
 * message = A descriptor for which message, eg, expanded
 * meta = Any extra information such as plural/singular (Can have none to infinite)
 * 
*/
export class TranslationManager {
  static makeTranslationKey(type: string, id: string): string;
  constructor(archiveUnpacker: ArchiveUnpacker, resourceLoader: ResourceLoader);
  reload(): void;
  convertText(component: Component, locale: Locale): Component;
  setDefaultLocale(defaultLocale: Locale);
}

}
declare module 'com.sk89q.worldedit.world.registry.BundledItemData' {
export class ItemEntry {
  localizedName: string;
}

}
declare module 'com.sk89q.worldedit.util.gson' {
/**
 * Utility methods for Google's GSON library.
*/
export class GsonUtil {
  static stringValue(s: string): string;
}

}
declare module 'com.sk89q.worldedit.extent.inventory' {
import { Map } from 'java.util';
import { Exception } from 'java.lang';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { Location } from 'com.sk89q.worldedit.util';
import { AbstractDelegateExtent, Extent } from 'com.sk89q.worldedit.extent';
import { BlockState, BlockType } from 'com.sk89q.worldedit.world.block';
/**
 * Represents a source to get blocks from and store removed ones.
*/
export class BlockBag {
  /**
   * Stores a block as if it was mined.
   *
   * @param blockState the block state
   * @throws BlockBagException on error
  */
  storeDroppedBlock(blockState: BlockState): void;
  /**
   * Sets a block as if it was placed by hand.
   *
   * @param blockState The block state
   * @throws BlockBagException on error
  */
  fetchPlacedBlock(blockState: BlockState): void;
  /**
   * Get a block.
   *
   * @param blockState the block state
   * @throws BlockBagException on error
  */
  fetchBlock(blockState: BlockState): void;
  /**
   * Store a block.
   *
   * @param blockState The block state
   * @throws BlockBagException on error
  */
  storeBlock(blockState: BlockState): void;
  /**
   * Store a block.
   *
   * @param blockState The block state
   * @param amount The amount
   * @throws BlockBagException on error
  */
  storeBlock(blockState: BlockState, amount: number): void;
  /**
   * Checks to see if a block exists without removing it.
   *
   * @param blockState the block state
   * @return whether the block exists
  */
  peekBlock(blockState: BlockState): boolean;
  /**
   * Flush any changes. This is called at the end.
  */
  flushChanges(): void;
  /**
   * Adds a position to be used a source.
   *
   * @param pos the position
  */
  addSourcePosition(pos: Location): void;
  /**
   * Adds a position to be used a source.
   *
   * @param pos the position
  */
  addSingleSourcePosition(pos: Location): void;
}
/**
 * Thrown when the target inventory of a block bag is full.
*/
export class OutOfSpaceException extends BlockBagException {
  /**
   * Construct the object.
   *
   * @param type the type of the block
  */
  constructor(type: BlockType);
  /**
   * Get the type of the block.
   *
   * @return the type
  */
  getType(): BlockType;
}
/**
 * Thrown when a block that can't be placed is used.
*/
export class UnplaceableBlockException extends BlockBagException {

}
/**
 * Applies a {@link BlockBag} to operations.
*/
export class BlockBagExtent extends AbstractDelegateExtent {
  /**
   * Create a new instance.
   *
   * @param extent the extent
   * @param blockBag the block bag
  */
  constructor(extent: Extent, blockBag: BlockBag | null);
  /**
   * Get the block bag.
   *
   * @return a block bag, which may be null if none is used
  */
  getBlockBag(): BlockBag | null;
  /**
   * Set the block bag.
   *
   * @param blockBag a block bag, which may be null if none is used
  */
  setBlockBag(blockBag: BlockBag | null);
  /**
   * Gets the list of missing blocks and clears the list for the next
   * operation.
   *
   * @return a map of missing blocks
  */
  popMissing(): Map<BlockType, number>;
  setBlock<B>(position: BlockVector3, block: B): boolean;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(location: BlockVector3, block: T): boolean;
}
/**
 * Thrown when there are no more blocks left.
*/
export class OutOfBlocksException extends BlockBagException {

}
/**
 * Thrown when a block bag detects a problem.
*/
export class BlockBagException extends Exception {

}

}
declare module 'com.sk89q.worldedit.internal.block' {
import { BitSet } from 'java.util';
import { BlockStateInternalId } from 'com.sk89q.worldedit.internal.block.BlockStateIdAccess';
import { BlockState } from 'com.sk89q.worldedit.world.block';
export class BlockStateIdAccess {
  static setBlockStateInternalId(blockStateInternalId: BlockStateInternalId);
  /**
   * An invalid internal ID, for verification purposes.
   * @return an internal ID which is never valid
  */
  static invalidId(): number;
  static isValidInternalId(internalId: number): boolean;
  static getBlockStateId(holder: BlockState): number;
  static getBlockStateById(id: number): BlockState | null;
  static register(blockState: BlockState, id: number): void;
  static clear(): void;
}

}
declare module 'com.sk89q.worldedit.util.lifecycle' {
import { Optional, Map } from 'java.util';
import { Events } from 'com.sk89q.worldedit.util.lifecycle.Lifecycled';
import { Function, BiConsumer, Predicate } from 'java.util.function';
import { Lock } from 'java.util.concurrent.locks';
/**
 * A {@link Lifecycled} that never invalidates.
*/
export class ConstantLifecycled<T> extends Lifecycled<T> {
  constructor(value: T);
  /**
   * Get the value or {@link Optional#empty()}.
   *
   * @return the value
  */
  value(): Optional<T>;
  /**
   * Get the event manager for this lifecycled object.
   *
   * @return the event manager
  */
  events(): Events<T>;
}
/**
 * A {@link Lifecycled} that can be directly called to {@linkplain #invalidate() invalidate} it or
 * set a {@linkplain #newValue(Object) new value}.
*/
export class SimpleLifecycled<T> extends Lifecycled<T> {
  static valid<T>(value: T): SimpleLifecycled<T>;
  static invalid<T>(): SimpleLifecycled<T>;
  /**
   * Set the value of this lifecycled and fire the new value event.
   *
   * @param value the value
  */
  newValue(value: T): void;
  /**
   * Remove the value of this lifecycled and fire the invalidated event.
  */
  invalidate(): void;
  /**
   * Get the value or {@link Optional#empty()}.
   *
   * @return the value
  */
  value(): Optional<T>;
  /**
   * Get the event manager for this lifecycled object.
   *
   * @return the event manager
  */
  events(): Events<T>;
}
/**
 * Represents an object with a simple valid/invalid lifecycle.
 *
 * 
 * A lifecycled object will start with no value, then trigger
 * {@link Events#onNewValue(Object, BiConsumer)} callbacks when it gets one, and
 * {@link Events#onInvalidated(Object, BiConsumer)} callbacks when it loses it. A full
 * invalidated->new value cycle is called a "reload".
 * 
 *
 * 
 * Downstream lifecycled objects can be derived using functional methods, and share some
 * common rules. They will apply the operation sometime before the result is needed, either
 * eagerly or lazily. They will re-do the operation after the upstream {@link Lifecycled} is
 * reloaded.
 * 
 *
 * 
 * Unless specified, {@link Lifecycled} objects are not thread-safe. However, the
 * {@link Events} objects are, and callbacks may be added from any thread.
 * 
 *
 * @param  the value type
*/
export class Lifecycled<T> {
  /**
   * Get the value or {@link Optional#empty()}.
   *
   * @return the value
  */
  value(): Optional<T>;
  /**
   * Get the value or throw.
   *
   * @return the value
   * @throws IllegalStateException if there is no value
  */
  valueOrThrow(): T;
  /**
   * Check for validity, usually without triggering computation.
   *
   * @return if this lifecycled's {@link #value()} is valid
  */
  isValid(): boolean;
  /**
   * Get the event manager for this lifecycled object.
   *
   * @return the event manager
  */
  events(): Events<T>;
  /**
   * Map the value.
   *
   * @param mapper the mapper function
   * @param  the new type
   * @return the downstream lifecycled
  */
  map<U>(mapper: Function<T, U>): Lifecycled<U>;
  /**
   * Filter the value. In other words, create a new lifecycled object where validity is ANDed
   * with the result of calling the filter function.
   *
   * @param filterer the filter function
   * @return the downstream lifecycled
  */
  filter(filterer: Predicate<T>): Lifecycled<T>;
  flatMap<U>(mapper: Function<T, Lifecycled<U>>): Lifecycled<U>;
}
/**
 * Convenience class for implementing the callbacks of {@link Lifecycled}.
*/
export class LifecycledCallbackHandler<T> extends Events<T> {
  constructor(lifecycled: Lifecycled<T>);
  onInvalidated<O>(owner: O, callback: BiConsumer<O, any>): void;
  onNewValue<O>(owner: O, callback: BiConsumer<O, any>): void;
  /**
   * Fire {@link #onInvalidated(Object, BiConsumer)} callbacks.
  */
  fireInvalidated(): void;
  /**
   * Fire {@link #onNewValue(Object, BiConsumer)} callbacks, the {@link Lifecycled#value()} must
   * be available.
  */
  fireOnNewValue(): void;
}

}
declare module 'com.sk89q.worldedit.util.time' {
import { ZonedDateTime } from 'java.time';
import { Pattern } from 'java.util.regex';
import { Path } from 'java.nio.file';
/**
 * Instances of this interface try to determine an {@link ZonedDateTime} from a given
 * {@link Path}.
*/
export class SnapshotDateTimeParser {
  /**
   * Attempt to detect an ZonedDateTime from a path.
   *
   * 
   * The path is not guaranteed to exist.
   * 
   *
   * @param path the path
   * @return date-time, if it can be parsed
  */
  detectDateTime(path: Path): ZonedDateTime | null;
}
/**
 * Parses date-times by looking at the file name. File names without a time
 * will use 00:00:00.
 *
 * 
 * Elements may be separated by a space, dash, or colon.
 * The date and time may additionally be separated by a 'T'.
 * Only the year must have all digits, others may omit padding
 * zeroes.
 * 
 *
 * 
 * Valid file name examples:
 * 
 *     `2019-06-15`
 *     `2019-06-15 10:20:30`
 *     `2019-06-15 10:20:30`
 *     `2019-06-15T10:20:30`
 *     `2019 06 15 10 20 30`
 *     `2019-06-15-10-20-30`
 *     `2019-6-1-1-2-3`
 * 
 * 
*/
export class FileNameDateTimeParser extends SnapshotDateTimeParser {
  static getInstance(): FileNameDateTimeParser;
  /**
   * Attempt to detect an ZonedDateTime from a path.
   *
   * 
   * The path is not guaranteed to exist.
   * 
   *
   * @param path the path
   * @return date-time, if it can be parsed
  */
  detectDateTime(path: Path): ZonedDateTime | null;
}
export class ModificationDateTimeParser extends SnapshotDateTimeParser {
  static getInstance(): ModificationDateTimeParser;
  /**
   * Attempt to detect an ZonedDateTime from a path.
   *
   * 
   * The path is not guaranteed to exist.
   * 
   *
   * @param path the path
   * @return date-time, if it can be parsed
  */
  detectDateTime(path: Path): ZonedDateTime;
}

}
declare module 'com.sk89q.worldedit.command.tool' {
import { Property } from 'com.sk89q.worldedit.registry.state';
import { ItemType } from 'com.sk89q.worldedit.world.item';
import { UUID, Map } from 'java.util';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { Direction, Location } from 'com.sk89q.worldedit.util';
import { TreeType } from 'com.sk89q.worldedit.util.TreeGenerator';
import { Brush } from 'com.sk89q.worldedit.command.tool.brush';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { LocalSession, WorldEditException, LocalConfiguration } from 'com.sk89q.worldedit';
import { Pattern } from 'com.sk89q.worldedit.function.pattern';
import { Platform, Actor } from 'com.sk89q.worldedit.extension.platform';
import { Player } from 'com.sk89q.worldedit.entity';
/**
 * Looks up information about a block.
*/
export class QueryTool extends BlockTool {
  /**
   * Checks to see if the player can still be using this tool (considering
   * permissions and such).
   *
   * @param actor the actor
   * @return true if use is permitted
  */
  canUse(player: Actor): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
}
/**
 * A pickaxe mode that removes floating treetops (logs and leaves not connected
 * to anything else).
*/
export class FloatingTreeRemover extends BlockTool {
  constructor();
  /**
   * Checks to see if the player can still be using this tool (considering
   * permissions and such).
   *
   * @param actor the actor
   * @return true if use is permitted
  */
  canUse(player: Actor): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
}
export class NavigationWand extends DoubleActionTraceTool {
  /**
   * Perform the secondary function of this tool.
   *
   * @param server The platform
   * @param config The config instance
   * @param player The player
   * @param session The local session
   * @return true to cancel the original event which triggered this action (if possible)
  */
  actSecondary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession): boolean;
  /**
   * Perform the primary action of this trace tool.
   *
   * @param server The platform
   * @param config The config instance
   * @param player The player
   * @param session The local session
   * @return true to cancel the original event which triggered this action (if possible)
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession): boolean;
  /**
   * Checks to see if the player can still be using this tool (considering
   * permissions and such).
   *
   * @param actor the actor
   * @return true if use is permitted
  */
  canUse(actor: Actor): boolean;
}
export class TraceTool extends Tool {
  /**
   * Perform the primary action of this trace tool.
   *
   * @param server The platform
   * @param config The config instance
   * @param player The player
   * @param session The local session
   * @return true to cancel the original event which triggered this action (if possible)
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession): boolean;
}
export class BlockTool extends Tool {
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @param server The platform
   * @param config The config instance
   * @param player The player
   * @param session The local session
   * @param clicked The location that was clicked
   * @param face The face that was clicked
   * @return true to cancel the original event which triggered this action (if possible)
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
}
/**
 * Represents a trace tool that also has a secondary/primary function.
*/
export class DoubleActionTraceTool extends TraceTool {
  /**
   * Perform the secondary function of this tool.
   *
   * @param server The platform
   * @param config The config instance
   * @param player The player
   * @param session The local session
   * @return true to cancel the original event which triggered this action (if possible)
  */
  actSecondary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession): boolean;
}
/**
 * A super pickaxe mode that removes one block.
*/
export class SinglePickaxe extends BlockTool {
  /**
   * Checks to see if the player can still be using this tool (considering
   * permissions and such).
   *
   * @param actor the actor
   * @return true if use is permitted
  */
  canUse(player: Actor): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
}
export class SelectionWand extends DoubleActionBlockTool {
  /**
   * Perform the secondary action of this block tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses must override
   * {@link #actSecondary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actSecondary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
  /**
   * Checks to see if the player can still be using this tool (considering
   * permissions and such).
   *
   * @param actor the actor
   * @return true if use is permitted
  */
  canUse(actor: Actor): boolean;
  /**
   * Perform the secondary action of this block tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses must override
   * {@link #actSecondary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actSecondary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
}
/**
 * A super pickaxe mode that will remove blocks in an area.
*/
export class AreaPickaxe extends BlockTool {
  constructor(range: number);
  /**
   * Checks to see if the player can still be using this tool (considering
   * permissions and such).
   *
   * @param actor the actor
   * @return true if use is permitted
  */
  canUse(player: Actor): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
}
/**
 * Represents a block tool that also has a secondary/primary function.
*/
export class DoubleActionBlockTool extends BlockTool {
  /**
   * Perform the secondary action of this block tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses must override
   * {@link #actSecondary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actSecondary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
  /**
   * Perform the secondary action of this block tool.
   *
   * @param server The platform
   * @param config The config instance
   * @param player The player
   * @param session The local session
   * @param clicked The location that was clicked
   * @param face The face that was clicked
   * @return true to cancel the original event which triggered this action (if possible)
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  actSecondary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
}
/**
 * A mode that replaces one block.
*/
export class BlockReplacer extends DoubleActionBlockTool {
  constructor(pattern: Pattern);
  /**
   * Checks to see if the player can still be using this tool (considering
   * permissions and such).
   *
   * @param actor the actor
   * @return true if use is permitted
  */
  canUse(player: Actor): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
  /**
   * Perform the secondary action of this block tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses must override
   * {@link #actSecondary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actSecondary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
  /**
   * Perform the secondary action of this block tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses must override
   * {@link #actSecondary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actSecondary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
}
export class InvalidToolBindException extends WorldEditException {
  constructor(item: ItemType, msg: Component);
  constructor(item: ItemType, msg: string);
  getItemType(): ItemType;
}
/**
 * Builds a shape at the place being looked at.
*/
export class BrushTool extends TraceTool {
  /**
   * Construct the tool.
   *
   * @param permission the permission to check before use is allowed
  */
  constructor(permission: string);
  /**
   * Checks to see if the player can still be using this tool (considering
   * permissions and such).
   *
   * @param actor the actor
   * @return true if use is permitted
  */
  canUse(player: Actor): boolean;
  /**
   * Get the filter.
   *
   * @return the filter
  */
  getMask(): Mask;
  /**
   * Set the block filter used for identifying blocks to replace.
   *
   * @param filter the filter to set
  */
  setMask(mask: Mask);
  /**
   * Get the mask used for identifying where to stop traces.
   *
   * @return the mask used to stop block traces
  */
  getTraceMask(): Mask | null;
  /**
   * Set the block mask used for identifying where to stop traces.
   *
   * @param traceMask the mask used to stop block traces
  */
  setTraceMask(traceMask: Mask | null);
  /**
   * Set the brush.
   *
   * @param brush the brush
   * @param permission the permission
  */
  setBrush(brush: Brush, permission: string): void;
  /**
   * Get the current brush.
   *
   * @return the current brush
  */
  getBrush(): Brush;
  /**
   * Set the material.
   *
   * @param material the material
  */
  setFill(fill: Pattern | null);
  /**
   * Get the material.
   *
   * @return the material
  */
  getMaterial(): Pattern | null;
  /**
   * Get the set brush size.
   *
   * @return a radius
  */
  getSize(): number;
  /**
   * Set the set brush size.
   *
   * @param radius a radius
  */
  setSize(size: number);
  /**
   * Get the set brush range.
   *
   * @return the range of the brush in blocks
  */
  getRange(): number;
  /**
   * Set the set brush range.
   *
   * @param range the range of the brush in blocks
  */
  setRange(range: number);
  /**
   * Perform the primary action of this trace tool.
   *
   * @param server The platform
   * @param config The config instance
   * @param player The player
   * @param session The local session
   * @return true to cancel the original event which triggered this action (if possible)
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession): boolean;
}
/**
 * Represents a tool. This interface alone defines nothing. A tool also
 * has to implement `BlockTool` or `TraceTool`.
*/
export class Tool {
  /**
   * Checks to see if the player can still be using this tool (considering
   * permissions and such).
   *
   * @param actor the actor
   * @return true if use is permitted
  */
  canUse(actor: Actor): boolean;
}
/**
 * A wand that can be used at a distance.
*/
export class DistanceWand extends BrushTool {
  constructor();
  /**
   * Perform the secondary function of this tool.
   *
   * @param server The platform
   * @param config The config instance
   * @param player The player
   * @param session The local session
   * @return true to cancel the original event which triggered this action (if possible)
  */
  actSecondary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession): boolean;
  /**
   * Perform the primary action of this trace tool.
   *
   * @param server The platform
   * @param config The config instance
   * @param player The player
   * @param session The local session
   * @return true to cancel the original event which triggered this action (if possible)
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession): boolean;
}
export interface DistanceWand extends BrushTool, DoubleActionTraceTool {}
export class StackTool extends BlockTool {
  constructor(range: number, mask: Mask);
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
  /**
   * Checks to see if the player can still be using this tool (considering
   * permissions and such).
   *
   * @param actor the actor
   * @return true if use is permitted
  */
  canUse(actor: Actor): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
}
/**
 * A mode that cycles the data values of supported blocks.
*/
export class BlockDataCyler extends DoubleActionBlockTool {
  /**
   * Checks to see if the player can still be using this tool (considering
   * permissions and such).
   *
   * @param actor the actor
   * @return true if use is permitted
  */
  canUse(player: Actor): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
  /**
   * Perform the secondary action of this block tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses must override
   * {@link #actSecondary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actSecondary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
  /**
   * Perform the secondary action of this block tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses must override
   * {@link #actSecondary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actSecondary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
}
/**
 * A tool that flood fills blocks.
*/
export class FloodFillTool extends BlockTool {
  constructor(range: number, pattern: Pattern);
  /**
   * Checks to see if the player can still be using this tool (considering
   * permissions and such).
   *
   * @param actor the actor
   * @return true if use is permitted
  */
  canUse(player: Actor): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
}
/**
 * A tool that can place (or remove) blocks at a distance.
*/
export class LongRangeBuildTool extends BrushTool {
  constructor(secondary: Pattern, primary: Pattern);
  /**
   * Checks to see if the player can still be using this tool (considering
   * permissions and such).
   *
   * @param actor the actor
   * @return true if use is permitted
  */
  canUse(player: Actor): boolean;
  /**
   * Perform the secondary function of this tool.
   *
   * @param server The platform
   * @param config The config instance
   * @param player The player
   * @param session The local session
   * @return true to cancel the original event which triggered this action (if possible)
  */
  actSecondary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession): boolean;
  /**
   * Perform the primary action of this trace tool.
   *
   * @param server The platform
   * @param config The config instance
   * @param player The player
   * @param session The local session
   * @return true to cancel the original event which triggered this action (if possible)
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession): boolean;
}
export interface LongRangeBuildTool extends BrushTool, DoubleActionTraceTool {}
/**
 * A pickaxe mode that recursively finds adjacent blocks within range of
 * an initial block and of the same type.
*/
export class RecursivePickaxe extends BlockTool {
  constructor(range: number);
  /**
   * Checks to see if the player can still be using this tool (considering
   * permissions and such).
   *
   * @param actor the actor
   * @return true if use is permitted
  */
  canUse(player: Actor): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
}
/**
 * Plants a tree.
*/
export class TreePlanter extends BlockTool {
  constructor(treeType: TreeType);
  /**
   * Checks to see if the player can still be using this tool (considering
   * permissions and such).
   *
   * @param actor the actor
   * @return true if use is permitted
  */
  canUse(player: Actor): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location, face: Direction | null): boolean;
  /**
   * Perform the primary action of this tool.
   *
   * @return true to cancel the original event which triggered this action (if possible)
   * @deprecated New subclasses should override
   * {@link #actPrimary(Platform, LocalConfiguration, Player, LocalSession, Location, Direction)}
   *      instead
  */
  actPrimary(server: Platform, config: LocalConfiguration, player: Player, session: LocalSession, clicked: Location): boolean;
}

}
declare module 'com.sk89q.worldedit.util.formatting' {
import { Locale } from 'java.util';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { ConfigRenderer, ConfigHolder } from 'org.enginehub.piston.config';
export class WorldEditText {
  static readonly CONFIG_HOLDER: ConfigHolder;
  static format(component: Component, locale: Locale): Component;
  static reduceToText(component: Component, locale: Locale): string;
}

}
declare module 'com.sk89q.worldedit.util.task.progress' {
import { Iterator, Collection, List } from 'java.util';
/**
 * An iterator that keeps track of how many entries have been visited and
 * calculates a "percent completed" using a provided total count.
 *
 * The returned progress percentage will always be between 0 or 1
 * (inclusive). If the iterator returns more entries than the total count,
 * then 100% will be returned for the progress.
 *
 * @param  the type
*/
export class ProgressIterator<V> extends Iterator<V> {
  hasNext(): boolean;
  next(): V;
  remove(): void;
  /**
   * Get the current percentage of completion.
   *
   * @return a progress object
  */
  getProgress(): Progress;
  /**
   * Create a new instance.
   *
   * @param iterator the iterator
   * @param count the number of objects
   * @param  the type
   * @return an instance
  */
  static create<V>(iterator: Iterator<V>, count: number): ProgressIterator<V>;
  /**
   * Create a new instance from a list.
   *
   * @param list a list
   * @param  the type
   * @return an instance
  */
  static create<V>(list: V[]): ProgressIterator<V>;
}
export interface ProgressIterator<V> extends Iterator<V>, ProgressObservable {}
/**
 * An object that is able to report on its progress.
*/
export class ProgressObservable {
  /**
   * Get the current percentage of completion.
   *
   * @return a progress object
  */
  getProgress(): Progress;
}
/**
 * A progress object describes the progress of an operation, specifying
 * either a percentage of completion or a status of indeterminacy.
 *
 * Progress objects are immutable.
 *
 * To create a new instance, use one of the static constructors
 * on this class.
*/
export class Progress {
  /**
   * Return whether the current progress is indeterminate.
   *
   * @return true if indeterminate
  */
  isIndeterminate(): boolean;
  /**
   * Get the progress percentage.
   *
   * If {@link #isIndeterminate()} returns `true`, the behavior
   * of this method is undefined.
   *
   * @return a number in the range [0, 1]
  */
  getProgress(): number;
  /**
   * Get a static progress object that is indeterminate.
   *
   * @return a progress object
  */
  static indeterminate(): Progress;
  /**
   * Get a static progress object that is complete.
   *
   * @return a progress object
  */
  static completed(): Progress;
  /**
   * Create a new progress object with the given percentage.
   *
   * @param value the percentage, which will be clamped to [0, 1]
   * @return a progress object
  */
  static of(value: number): Progress;
  /**
   * Create a new progress object with progress split equally between the
   * given progress objects.
   *
   * @param objects an array of progress objects
   * @return a new progress value
  */
  static split(...objects: Progress[]): Progress;
  /**
   * Create a new progress object with progress split equally between the
   * given progress objects.
   *
   * @param progress a collection of progress objects
   * @return a new progress value
  */
  static split(progress: Collection<Progress>): Progress;
  /**
   * Create a new progress object with progress split equally between the
   * given {@link ProgressObservable}s.
   *
   * @param observables an array of observables
   * @return a new progress value
  */
  static splitObservables(...observables: ProgressObservable[]): Progress;
  /**
   * Create a new progress object with progress split equally between the
   * given {@link ProgressObservable}s.
   *
   * @param observables a collection of observables
   * @return a new progress value
  */
  static splitObservables(observables: Collection<ProgressObservable>): Progress;
}

}
declare module 'com.sk89q.worldedit.function.entity' {
import { Vector3 } from 'com.sk89q.worldedit.math';
import { Entity } from 'com.sk89q.worldedit.entity';
import { Extent } from 'com.sk89q.worldedit.extent';
import { EntityFunction } from 'com.sk89q.worldedit.function';
import { Transform } from 'com.sk89q.worldedit.math.transform';
/**
 * Copies entities provided to the function to the provided destination
 * `Extent`.
*/
export class ExtentEntityCopy extends EntityFunction {
  /**
   * Create a new instance.
   *
   * @param from the from position
   * @param destination the destination `Extent`
   * @param to the destination position
   * @param transform the transformation to apply to both position and orientation
  */
  constructor(from: Vector3, destination: Extent, to: Vector3, transform: Transform);
  /**
   * Return whether entities that are copied should be removed.
   *
   * @return true if removing
  */
  isRemoving(): boolean;
  /**
   * Set whether entities that are copied should be removed.
   *
   * @param removing true if removing
  */
  setRemoving(removing: boolean): void;
  /**
   * Apply the function to the entity.
   *
   * @param entity the entity
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(entity: Entity): boolean;
}

}
declare module 'com.sk89q.worldedit.command.util.CommandPermissionsConditionGenerator' {
import { CommandPermissionsConditionGenerator } from 'com.sk89q.worldedit.command.util';
export class Registration {
  commandPermissionsConditionGenerator(generator: CommandPermissionsConditionGenerator): Registration;
}

}
declare module 'com.sk89q.worldedit.function.mask.OffsetsMask2D' {
import { Iterable } from 'java.lang';
import { BlockVector2 } from 'com.sk89q.worldedit.math';
import { OffsetsMask2D, Mask2D } from 'com.sk89q.worldedit.function.mask';
/**
 * A builder for an {@link OffsetsMask}.
*/
export class Builder {
  /**
   * Set the mask to test.
   * @param mask the mask to test
   * @return this builder, for chaining
  */
  mask(mask: Mask2D): Builder;
  /**
   * Set whether the mask should fail if the original position matches. Defaults to
   * `false`.
   *
   * @param excludeSelf `true` to exclude the original position if it matches
   * @return this builder, for chaining
  */
  excludeSelf(excludeSelf: boolean): Builder;
  /**
   * Set the minimum amount of matches required. Defaults to `1`. Must be smaller than
   * or equal to the {@linkplain #maxMatches(int) max matches} and the {@link #offsets} size,
   * and greater than or equal to `0`.
   *
   * @param minMatches the minimum amount of matches required
   * @return this builder, for chaining
  */
  minMatches(minMatches: number): Builder;
  /**
   * Set the maximum amount of matches allowed. Defaults to {@link Integer#MAX_VALUE}. Must
   * be greater than or equal to {@linkplain #minMatches(int)}.
   *
   * @param maxMatches the maximum amount of matches allowed
   * @return this builder, for chaining
  */
  maxMatches(maxMatches: number): Builder;
  /**
   * Set the offsets to test. Defaults to all {@linkplain Flag#CARDINAL cardinal}
   * directions.
   *
   * @param offsets the offsets to test
   * @return this builder, for chaining
  */
  offsets(offsets: Iterable<BlockVector2>): Builder;
  /**
   * Build an offsets mask.
   *
   * @return the new mask
  */
  build(): OffsetsMask2D;
}

}
declare module 'com.sk89q.worldedit.extension.input' {
import { Throwable } from 'java.lang';
import { World } from 'com.sk89q.worldedit.world';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { LocalSession, WorldEditException } from 'com.sk89q.worldedit';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
import { Extent } from 'com.sk89q.worldedit.extent';
/**
 * Contains contextual information that may be useful when constructing
 * objects from a registry (such as {@link MaskFactory}).
 *
 * By default, {@link #isRestricted()} will return true.
*/
export class ParserContext {
  /**
   * Create a new instance.
  */
  constructor();
  /**
   * Creates a copy of another instance.
   *
   * @param other the other instance
  */
  constructor(other: ParserContext);
  /**
   * Get the {@link Extent} set on this context.
   *
   * @return an extent
  */
  getExtent(): Extent | null;
  /**
   * Set the extent.
   *
   * @param extent an extent, or null if none is available
  */
  setExtent(extent: Extent | null);
  /**
   * Get the {@link LocalSession}.
   *
   * @return a session
  */
  getSession(): LocalSession | null;
  /**
   * Set the session.
   *
   * @param session a session, or null if none is available
  */
  setSession(session: LocalSession | null);
  /**
   * Get the {@link World} set on this context.
   *
   * @return a world
  */
  getWorld(): World | null;
  /**
   * Set the world.
   *
   * @param world a world, or null if none is available
  */
  setWorld(world: World | null);
  /**
   * Get the {@link Actor} set on this context.
   *
   * @return an actor, or null
  */
  getActor(): Actor | null;
  /**
   * Set the actor.
   *
   * @param actor an actor, or null if none is available
  */
  setActor(actor: Actor | null);
  /**
   * Get the {@link Extent} set on this context.
   *
   * @return an extent
   * @throws InputParseException thrown if no {@link Extent} is set
  */
  requireExtent(): Extent;
  /**
   * Get the {@link LocalSession}.
   *
   * @return a session
   * @throws InputParseException thrown if no {@link LocalSession} is set
  */
  requireSession(): LocalSession;
  /**
   * Get the {@link World} set on this context.
   *
   * @return a world
   * @throws InputParseException thrown if no {@link World} is set
  */
  requireWorld(): World;
  /**
   * Get the {@link Actor} set on this context.
   *
   * @return an actor
   * @throws InputParseException thrown if no {@link Actor} is set
  */
  requireActor(): Actor;
  /**
   * Returns whether there should be restrictions (as a result of
   * limits or permissions) considered when parsing the input.
   *
   * @return true if restricted
  */
  isRestricted(): boolean;
  /**
   * Set whether there should be restrictions (as a result of
   * limits or permissions) considered when parsing the input.
   *
   * @param restricted true if restricted
  */
  setRestricted(restricted: boolean): void;
  /**
   * Get whether wildcards are preferred.
   *
   * @return true if wildcards are preferred
  */
  isPreferringWildcard(): boolean;
  /**
   * Set whether wildcards are preferred.
   *
   * @param preferringWildcard true if wildcards are preferred
  */
  setPreferringWildcard(preferringWildcard: boolean): void;
  /**
   * Set whether legacy IDs should be attempted.
   *
   * @param tryLegacy true if legacy IDs should be attempted
  */
  setTryLegacy(tryLegacy: boolean): void;
  /**
   * Get whether legacy IDs should be tried.
   *
   * @return true if legacy should be tried
  */
  isTryingLegacy(): boolean;
}
/**
 * Thrown when usage is disallowed.
*/
export class DisallowedUsageException extends InputParseException {
  /**
   * Create with a message.
   *
   * @param message the message
  */
  constructor(message: Component);
  /**
   * Create with a message.
   *
   * @param message the message
  */
  constructor(message: string);
  /**
   * Create with a message and a cause.
   *
   * @param message the message
   * @param cause the cause
  */
  constructor(message: Component, cause: Throwable);
  /**
   * Create with a message and a cause.
   *
   * @param message the message
   * @param cause the cause
  */
  constructor(message: string, cause: Throwable);
}
/**
 * Thrown when a match fails when input is parsed.
*/
export class NoMatchException extends InputParseException {
  /**
   * Create with a message.
   *
   * @param message the message
  */
  constructor(message: Component);
  /**
   * Create with a message.
   *
   * @param message the message
  */
  constructor(message: string);
  /**
   * Create with a message and a cause.
   *
   * @param message the message
   * @param cause the cause
  */
  constructor(message: Component, cause: Throwable);
  /**
   * Create with a message and a cause.
   *
   * @param message the message
   * @param cause the cause
  */
  constructor(message: string, cause: Throwable);
}
/**
 * Thrown when parsed input results in an error.
*/
export class InputParseException extends WorldEditException {
  /**
   * Throw with a message.
   *
   * @param message the message
  */
  constructor(message: Component);
  /**
   * Throw with a message.
   *
   * @param message the message
  */
  constructor(message: string);
  /**
   * Throw with a message and a cause.
   *
   * @param message the message
   * @param cause the cause
  */
  constructor(message: Component, cause: Throwable);
  /**
   * Throw with a message and a cause.
   *
   * @param message the message
   * @param cause the cause
  */
  constructor(message: string, cause: Throwable);
}

}
declare module 'com.sk89q.worldedit' {
import { ItemType } from 'com.sk89q.worldedit.world.item';
import { Locale, Set, Calendar, List, Map, LinkedList } from 'java.util';
import { Stage, ReorderMode } from 'com.sk89q.worldedit.EditSession';
import { Operation } from 'com.sk89q.worldedit.function.operation';
import { Entity, Player, BaseEntity } from 'com.sk89q.worldedit.entity';
import { BiomeType } from 'com.sk89q.worldedit.world.biome';
import { Path } from 'java.nio.file';
import { ChangeSet } from 'com.sk89q.worldedit.history.changeset';
import { ZoneId } from 'java.time';
import { AssetLoaders } from 'com.sk89q.worldedit.util.asset';
import { Countable, SideEffectSet, Direction, Location } from 'com.sk89q.worldedit.util';
import { TreeType } from 'com.sk89q.worldedit.util.TreeGenerator';
import { Supervisor } from 'com.sk89q.worldedit.util.task';
import { RegionSelectorType } from 'com.sk89q.worldedit.regions.selector';
import { MaskFactory, BlockFactory, ItemFactory, PatternFactory } from 'com.sk89q.worldedit.extension.factory';
import { Snapshot as com_sk89q_worldedit_world_snapshot_experimental_Snapshot, SnapshotDatabase } from 'com.sk89q.worldedit.world.snapshot.experimental';
import { CUIEvent } from 'com.sk89q.worldedit.internal.cui';
import { MultiStageReorder, ChunkBatchingExtent } from 'com.sk89q.worldedit.extent.reorder';
import { Snapshot, SnapshotRepository } from 'com.sk89q.worldedit.world.snapshot';
import { EventBus } from 'com.sk89q.worldedit.util.eventbus';
import { SurvivalModeExtent, WatchdogTickingExtent, SideEffectExtent } from 'com.sk89q.worldedit.extent.world';
import { TranslationManager } from 'com.sk89q.worldedit.util.translation';
import { Vector3, BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { ClipboardHolder, SessionManager } from 'com.sk89q.worldedit.session';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { RegionSelector, FlatRegion, Region } from 'com.sk89q.worldedit.regions';
import { World } from 'com.sk89q.worldedit.world';
import { BlockBagExtent, BlockBag } from 'com.sk89q.worldedit.extent.inventory';
import { AtomicBoolean } from 'java.util.concurrent.atomic';
import { BrushTool, BlockTool, Tool } from 'com.sk89q.worldedit.command.tool';
import { AutoCloseable, Exception } from 'java.lang';
import { File } from 'java.io';
import { Kind } from 'com.sk89q.worldedit.WorldEditManifest';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { BlockChangeLimiter } from 'com.sk89q.worldedit.extent.validation';
import { Pattern } from 'com.sk89q.worldedit.function.pattern';
import { Expression } from 'com.sk89q.worldedit.internal.expression';
import { PlatformManager, Actor } from 'com.sk89q.worldedit.extension.platform';
import { TracingExtent, Extent, MaskingExtent } from 'com.sk89q.worldedit.extent';
import { BlockState, BlockType, BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * Raised when an item is used when a block was expected.
*/
export class NotABlockException extends WorldEditException {
  /**
   * Create a new instance.
  */
  constructor();
  /**
   * Create a new instance.
   *
   * @param input the input that was used
  */
  constructor(input: string);
  /**
   * Create a new instance.
   *
   * @param input the input that was used
  */
  constructor(input: number);
  /**
   * Create a new instance.
   *
   * @param input the input that was used
  */
  constructor(input: ItemType);
}
/**
 * Thrown when an invalid item is specified.
*/
export class InvalidItemException extends DisallowedItemException {
  constructor(type: string, message: string);
}
/**
 * Raised when a world is missing but is required.
*/
export class MissingWorldException extends WorldEditException {
  constructor();
}
/**
 * Thrown when an unknown direction is specified or detected.
*/
export class UnknownDirectionException extends WorldEditException {
  /**
   * Create a new instance.
   *
   * @param dir the input that was tried
  */
  constructor(dir: string);
  /**
   * Get the direction string that was input.
   *
   * @return input
  */
  getDirection(): string;
}
/**
 * Thrown when a disallowed item is used.
 *
 * @deprecated Use {@link DisallowedUsageException}
*/
export class DisallowedItemException extends WorldEditException {
  constructor(type: string);
  constructor(type: string, message: string);
  getID(): string;
}
/**
 * Thrown when there is no clipboard set.
*/
export class EmptyClipboardException extends WorldEditException {

}
/**
 * Thrown when no item exist by the ID.
*/
export class UnknownItemException extends WorldEditException {
  /**
   * Create a new instance.
   *
   * @param type the input that was provided
  */
  constructor(type: string);
  /**
   * Get the input.
   *
   * @return the input
  */
  getID(): string;
}
/**
 * Thrown when a maximum radius is reached, such as, for example,
 * in the case of a sphere command.
*/
export class MaxRadiusException extends WorldEditException {

}
/**
 * Raised when a region is not fully defined.
*/
export class IncompleteRegionException extends WorldEditException {

}
/**
 * Represents WorldEdit's configuration.
*/
export class LocalConfiguration {
  profile: boolean;
  traceUnflushedSessions: boolean;
  disallowedBlocks: Set<string>;
  defaultChangeLimit: number;
  maxChangeLimit: number;
  defaultVerticalHeight: number;
  defaultMaxPolygonalPoints: number;
  maxPolygonalPoints: number;
  defaultMaxPolyhedronPoints: number;
  maxPolyhedronPoints: number;
  shellSaveType: string;
  snapshotsConfigured: boolean;
  snapshotRepo: SnapshotRepository;
  snapshotDatabase: SnapshotDatabase;
  maxRadius: number;
  maxSuperPickaxeSize: number;
  maxBrushRadius: number;
  logCommands: boolean;
  logFile: string;
  logFormat: string;
  registerHelp: boolean;
  wandItem: string;
  superPickaxeDrop: boolean;
  superPickaxeManyDrop: boolean;
  useInventory: boolean;
  useInventoryOverride: boolean;
  useInventoryCreativeOverride: boolean;
  navigationUseGlass: boolean;
  navigationWand: string;
  navigationWandMaxDistance: number;
  scriptTimeout: number;
  calculationTimeout: number;
  maxCalculationTimeout: number;
  allowedDataCycleBlocks: Set<string>;
  saveDir: string;
  scriptsDir: string;
  showHelpInfo: boolean;
  butcherDefaultRadius: number;
  butcherMaxRadius: number;
  allowSymlinks: boolean;
  serverSideCUI: boolean;
  extendedYLimit: boolean;
  defaultLocaleName: string;
  defaultLocale: Locale;
  /**
   * Load the configuration.
  */
  load(): void;
  /**
   * Get the working directory to work from.
   *
   * @return a working directory
   * @deprecated Use {@link LocalConfiguration#getWorkingDirectoryPath()}
  */
  getWorkingDirectory(): File;
  /**
   * Get the working directory to work from.
   *
   * @return a working directory
  */
  getWorkingDirectoryPath(): Path;
  initializeSnapshotConfiguration(directory: string, experimental: boolean): void;
  convertLegacyItem(legacy: string): string;
  setDefaultLocaleName(defaultLocaleName: string): void;
}
/**
 * A builder-style factory for {@link EditSession EditSessions}.
*/
export class EditSessionBuilder {
  getWorld(): World | null;
  /**
   * Set the world for the {@link EditSession}.
   *
   * @param world the world
   * @return this builder
  */
  world(world: World | null): EditSessionBuilder;
  getMaxBlocks(): number;
  /**
   * Set the maximum blocks to change for the {@link EditSession}.
   *
   * @param maxBlocks the maximum blocks to change
   * @return this builder
  */
  maxBlocks(maxBlocks: number): EditSessionBuilder;
  getActor(): Actor | null;
  /**
   * Set the actor who owns the {@link EditSession}.
   *
   * @param actor the actor
   * @return this builder
  */
  actor(actor: Actor | null): EditSessionBuilder;
  getBlockBag(): BlockBag | null;
  /**
   * Set the block bag for the {@link EditSession}.
   *
   * @param blockBag the block bag
   * @return this builder
  */
  blockBag(blockBag: BlockBag | null): EditSessionBuilder;
  /**
   * Check if tracing is enabled.
   *
   * Internal use only.
  */
  isTracing(): boolean;
  /**
   * Set tracing enabled/disabled.
   *
   * Internal use only.
  */
  tracing(tracing: boolean): EditSessionBuilder;
  locatableActor<A>(locatable: A): EditSessionBuilder;
  /**
   * Build the {@link EditSession} using properties described in this builder.
   *
   * @return the new EditSession
  */
  build(): EditSession;
}
/**
 * Creates new {@link EditSession}s. To get an instance of this factory,
 * use {@link WorldEdit#getEditSessionFactory()}.
 *
 * It is no longer possible to replace the instance of this in WorldEdit
 * with a custom one. Use {@link EditSessionEvent} to override
 * the creation of {@link EditSession}s.
 *
 * @deprecated Using the ever-extending factory methods is deprecated. Replace with {@link EditSessionBuilder},
 *     which in most cases will be as simple as calling `builder.world(world).build()`.
*/
export class EditSessionFactory {
  /**
   * Construct an edit session with a maximum number of blocks.
   *
   * @param world the world
   * @param maxBlocks the maximum number of blocks that can be changed, or -1 to use no limit
   * @return an instance
  */
  getEditSession(world: World, maxBlocks: number): EditSession;
  /**
   * Construct an edit session with a maximum number of blocks.
   *
   * @param world the world
   * @param maxBlocks the maximum number of blocks that can be changed, or -1 to use no limit
   * @param actor the actor that the {@link EditSession} is for
   * @return an instance
  */
  getEditSession(world: World, maxBlocks: number, actor: Actor): EditSession;
  /**
   * Construct an edit session with a maximum number of blocks and a block bag.
   *
   * @param world the world
   * @param maxBlocks the maximum number of blocks that can be changed, or -1 to use no limit
   * @param blockBag an optional {@link BlockBag} to use, otherwise null
   * @return an instance
  */
  getEditSession(world: World, maxBlocks: number, blockBag: BlockBag): EditSession;
  /**
   * Construct an edit session with a maximum number of blocks and a block bag.
   *
   * @param world the world
   * @param maxBlocks the maximum number of blocks that can be changed, or -1 to use no limit
   * @param blockBag an optional {@link BlockBag} to use, otherwise null
   * @param actor the actor that the {@link EditSession} is for
   * @return an instance
  */
  getEditSession(world: World, maxBlocks: number, blockBag: BlockBag, actor: Actor): EditSession;
}
/**
 * Thrown when a maximum radius for a brush is reached.
*/
export class MaxBrushRadiusException extends MaxRadiusException {

}
/**
 * Represents WorldEdit info from the MANIFEST.MF file.
*/
export class WorldEditManifest {
  static readonly WORLD_EDIT_VERSION: string;
  static readonly WORLD_EDIT_KIND: string;
  static load(): WorldEditManifest;
  getWorldEditVersion(): string;
  getWorldEditKind(): Kind;
}
/**
 * Parent for all WorldEdit exceptions.
*/
export class WorldEditException extends Exception {
  /**
   * Get the message of this exception as a rich text component.
   *
   * @return The rich message
  */
  getRichMessage(): Component;
}
/**
 * The entry point and container for a working implementation of WorldEdit.
 *
 * An instance handles event handling; block, mask, pattern, etc. registration;
 * the management of sessions; the creation of {@link EditSession}s; and more.
 * In order to use WorldEdit, at least one {@link Platform} must be registered
 * with WorldEdit using {@link PlatformManager#register(Platform)} on the
 * manager retrieved using {@link WorldEdit#getPlatformManager()}.
 *
 * An instance of WorldEdit can be retrieved using the static
 * method {@link WorldEdit#getInstance()}, which is shared among all
 * platforms within the same classloader hierarchy.
*/
export class WorldEdit {
  /**
   * Gets the current instance of this class.
   *
   * An instance will always be available, but no platform may yet be
   * registered with WorldEdit, meaning that a number of operations
   * may fail. However, event handlers can be registered.
   *
   * @return an instance of WorldEdit.
  */
  static getInstance(): WorldEdit;
  /**
   * Get the platform manager, where platforms (that implement WorldEdit)
   * can be registered and information about registered platforms can
   * be queried.
   *
   * @return the platform manager
  */
  getPlatformManager(): PlatformManager;
  /**
   * Get the event bus for WorldEdit.
   *
   * Event handlers can be registered on the event bus.
   *
   * @return the event bus
  */
  getEventBus(): EventBus;
  /**
   * Get the supervisor. Internal, not for API use.
   *
   * @return the supervisor
  */
  getSupervisor(): Supervisor;
  /**
   * Get the block factory from which new {@link BlockStateHolder}s can be
   * constructed.
   *
   * @return the block factory
  */
  getBlockFactory(): BlockFactory;
  /**
   * Get the item factory from which new {@link BaseItem}s can be
   * constructed.
   *
   * @return the item factory
  */
  getItemFactory(): ItemFactory;
  /**
   * Get the mask factory from which new {@link Mask}s
   * can be constructed.
   *
   * @return the mask factory
  */
  getMaskFactory(): MaskFactory;
  /**
   * Get the pattern factory from which new {@link Pattern}s
   * can be constructed.
   *
   * @return the pattern factory
  */
  getPatternFactory(): PatternFactory;
  /**
   * Return the session manager.
   *
   * @return the session manager
  */
  getSessionManager(): SessionManager;
  /**
   * Return the translation manager.
   *
   * @return the translation manager
  */
  getTranslationManager(): TranslationManager;
  /**
   * Return the asset loaders instance.
   *
   * @return the asset loaders instance
  */
  getAssetLoaders(): AssetLoaders;
  /**
   * Gets the path to a file. This method will check to see if the filename
   * has valid characters and has an extension. It also prevents directory
   * traversal exploits by checking the root directory and the file directory.
   * On success, a `java.io.File` object will be returned.
   *
   * @param actor the actor
   * @param dir sub-directory to look in
   * @param filename filename (user-submitted)
   * @param defaultExt append an extension if missing one, null to not use
   * @param extensions list of extensions, null for any
   * @return a file
   * @throws FilenameException thrown if the filename is invalid
  */
  getSafeSaveFile(actor: Actor, dir: File, filename: string, defaultExt: string, ...extensions: string[]): File;
  /**
   * Gets the path to a file. This method will check to see if the filename
   * has valid characters and has an extension. It also prevents directory
   * traversal exploits by checking the root directory and the file directory.
   * On success, a `java.io.File` object will be returned.
   *
   * @param actor the actor
   * @param dir sub-directory to look in
   * @param filename filename (user-submitted)
   * @param defaultExt append an extension if missing one, null to not use
   * @param extensions list of extensions, null for any
   * @return a file
   * @throws FilenameException thrown if the filename is invalid
  */
  getSafeOpenFile(actor: Actor, dir: File, filename: string, defaultExt: string, ...extensions: string[]): File;
  /**
   * Load the bundled mappings.
  */
  loadMappings(): void;
  /**
   * Checks to see if the specified radius is within bounds.
   *
   * @param radius the radius
   * @throws MaxRadiusException if the radius is bigger than the configured radius
  */
  checkMaxRadius(radius: number): void;
  /**
   * Checks to see if the specified brush radius is within bounds.
   *
   * @param radius the radius
   * @throws MaxBrushRadiusException if the radius is bigger than the configured radius
  */
  checkMaxBrushRadius(radius: number): void;
  /**
   * Get a file relative to the defined working directory. If the specified
   * path is absolute, then the working directory is not used.
   *
   * @param path the subpath under the working directory
   * @return a working directory
   * @deprecated Use {@link WorldEdit#getWorkingDirectoryPath(String)} instead
  */
  getWorkingDirectoryFile(path: string): File;
  /**
   * Get a file relative to the defined working directory. If the specified
   * path is absolute, then the working directory is not used.
   *
   * @param path the subpath under the working directory
   * @return a working directory
  */
  getWorkingDirectoryPath(path: string): Path;
  /**
   * Get the direction vector for a player's direction.
   *
   * @param player the player
   * @param dirStr the direction string
   * @return a direction vector
   * @throws UnknownDirectionException thrown if the direction is not known, or a relative direction is used with null player
  */
  getDirection(player: Player | null, dirStr: string): BlockVector3;
  /**
   * Get the direction vector for a player's direction.
   *
   * @param player the player
   * @param dirStr the direction string
   * @return a direction vector
   * @throws UnknownDirectionException thrown if the direction is not known, or a relative direction is used with null player
  */
  getDiagonalDirection(player: Player | null, dirStr: string): BlockVector3;
  /**
   * Flush a block bag's changes to a player.
   *
   * @param actor the actor
   * @param editSession the edit session
  */
  flushBlockBag(actor: Actor, editSession: EditSession): void;
  /**
   * Called on arm swing.
   *
   * @param player the player
   * @return true if the swing was handled
  */
  handleArmSwing(player: Player): boolean;
  /**
   * Called on right click (not on a block).
   *
   * @param player the player
   * @return true if the right click was handled
  */
  handleRightClick(player: Player): boolean;
  /**
   * Called on right click.
   *
   * @param player the player
   * @param clicked the clicked block
   * @return false if you want the action to go through
  */
  handleBlockRightClick(player: Player, clicked: Location): boolean;
  /**
   * Called on right click.
   *
   * @param player the player
   * @param clicked the clicked block
   * @param face The clicked face
   * @return false if you want the action to go through
  */
  handleBlockRightClick(player: Player, clicked: Location, face: Direction | null): boolean;
  /**
   * Called on left click.
   *
   * @param player the player
   * @param clicked the clicked block
   * @return false if you want the action to go through
  */
  handleBlockLeftClick(player: Player, clicked: Location): boolean;
  /**
   * Called on left click.
   *
   * @param player the player
   * @param clicked the clicked block
   * @param face The clicked face
   * @return false if you want the action to go through
  */
  handleBlockLeftClick(player: Player, clicked: Location, face: Direction | null): boolean;
  /**
   * Executes a WorldEdit script.
   *
   * @param player the player
   * @param f the script file to execute
   * @param args arguments for the script
   * @throws WorldEditException if something goes wrong
  */
  runScript(player: Player, f: File, args: string[]): void;
  /**
   * Get Worldedit's configuration.
   *
   * @return a configuration
  */
  getConfiguration(): LocalConfiguration;
  /**
   * Get a factory for {@link EditSession}s.
   *
   * @deprecated Use {@link #newEditSessionBuilder()} instead. See {@link EditSessionFactory} for details.
  */
  getEditSessionFactory(): EditSessionFactory;
  /**
   * Create a builder for {@link EditSession}s.
  */
  newEditSessionBuilder(): EditSessionBuilder;
  /**
   * Shorthand for `newEditSessionBuilder().world(world).build()`.
   *
   * @param world the world
   * @return the new {@link EditSession}
  */
  newEditSession(world: World | null): EditSession;
  /**
   * Shorthand for `newEditSessionBuilder().locatableActor(locatableActor).build()`.
   *
   * @param locatableActor the actor
   * @return the new {@link EditSession}
  */
  newEditSession<A>(locatableActor: A): EditSession;
  /**
   * Get the version.
   *
   * @return the version of WorldEdit
  */
  static getVersion(): string;
}
/**
 * Thrown when too many blocks are changed (which may be limited
 * due to the configuration).
*/
export class MaxChangedBlocksException extends WorldEditException {
  /**
   * Create a new instance.
   *
   * @param maxBlocks the maximum number of blocks that can be changed
  */
  constructor(maxBlocks: number);
  /**
   * Get the limit.
   *
   * @return the maximum number of blocks that can be changed
  */
  getBlockLimit(): number;
}
/**
 * An {@link Extent} that handles history, {@link BlockBag}s, change limits,
 * block re-ordering, and much more. Most operations in WorldEdit use this class.
 *
 * Most of the actual functionality is implemented with a number of other
 * {@link Extent}s that are chained together. For example, history is logged
 * using the {@link ChangeSetExtent}.
*/
export class EditSession extends Extent {
  /**
   * Turns on specific features for a normal WorldEdit session, such as
   * {@link #setBatchingChunks(boolean)
   * chunk batching}.
  */
  enableStandardMode(): void;
  /**
   * Sets the {@link ReorderMode} of this EditSession, and flushes the session.
   *
   * @param reorderMode The reorder mode
  */
  setReorderMode(reorderMode: ReorderMode);
  /**
   * Get the reorder mode.
   *
   * @return the reorder mode
  */
  getReorderMode(): ReorderMode;
  /**
   * Get the world.
   *
   * @return the world
  */
  getWorld(): World;
  /**
   * Get the underlying {@link ChangeSet}.
   *
   * @return the change set
  */
  getChangeSet(): ChangeSet;
  /**
   * Get the maximum number of blocks that can be changed. -1 will be returned
   * if it the limit disabled.
   *
   * @return the limit (>= 0) or -1 for no limit
  */
  getBlockChangeLimit(): number;
  /**
   * Set the maximum number of blocks that can be changed.
   *
   * @param limit the limit (>= 0) or -1 for no limit
  */
  setBlockChangeLimit(blockChangeLimit: number);
  /**
   * Returns queue status.
   *
   * @return whether the queue is enabled
   * @deprecated Use {@link EditSession#getReorderMode()} with MULTI_STAGE instead.
  */
  isQueueEnabled(): boolean;
  /**
   * Queue certain types of block for better reproduction of those blocks.
   *
   * @deprecated Use {@link EditSession#setReorderMode(ReorderMode)} with MULTI_STAGE instead.
  */
  enableQueue(): void;
  /**
   * Disable the queue. This will flush the session.
   *
   * @deprecated Use {@link EditSession#setReorderMode(ReorderMode)} with another mode instead.
  */
  disableQueue(): void;
  /**
   * Get the mask.
   *
   * @return mask, may be null
  */
  getMask(): Mask;
  /**
   * Set a mask.
   *
   * @param mask mask or null
  */
  setMask(mask: Mask);
  /**
   * Get the {@link SurvivalModeExtent}.
   *
   * @return the survival simulation extent
  */
  getSurvivalExtent(): SurvivalModeExtent;
  /**
   * Set whether fast mode is enabled.
   *
   * Fast mode may skip lighting checks or adjacent block
   * notification.
   *
   * @param enabled true to enable
  */
  setFastMode(enabled: boolean): void;
  /**
   * Set which block updates should occur.
   *
   * @param sideEffectSet side effects to enable
  */
  setSideEffectApplier(sideEffectApplier: SideEffectSet);
  /**
   * Return fast mode status.
   *
   * Fast mode may skip lighting checks or adjacent block
   * notification.
   *
   * @return true if enabled
  */
  hasFastMode(): boolean;
  getSideEffectApplier(): SideEffectSet;
  /**
   * Get the {@link BlockBag} is used.
   *
   * @return a block bag or null
  */
  getBlockBag(): BlockBag;
  /**
   * Set a {@link BlockBag} to use.
   *
   * @param blockBag the block bag to set, or null to use none
  */
  setBlockBag(blockBag: BlockBag);
  /**
   * Gets the list of missing blocks and clears the list for the next
   * operation.
   *
   * @return a map of missing blocks
  */
  popMissingBlocks(): Map<BlockType, number>;
  /**
   * Returns chunk batching status.
   *
   * @return whether chunk batching is enabled
  */
  isBatchingChunks(): boolean;
  /**
   * Enable or disable chunk batching. Disabling will flush the session.
   *
   * @param batchingChunks `true` to enable, `false` to disable
  */
  setBatchingChunks(batchingChunks: boolean): void;
  /**
   * Disable all buffering extents.
   *
   * @see #setReorderMode(ReorderMode)
   * @see #setBatchingChunks(boolean)
  */
  disableBuffering(): void;
  /**
   * Check if this session will tick the watchdog.
   *
   * @return `true` if any watchdog extent is enabled
  */
  isTickingWatchdog(): boolean;
  /**
   * Set all watchdog extents to the given mode.
  */
  setTickingWatchdog(active: boolean): void;
  /**
   * Get the number of blocks changed, including repeated block changes.
   *
   * This number may not be accurate.
   *
   * @return the number of block changes
  */
  getBlockChangeCount(): number;
  /**
   * Check if this extent fully supports 3D biomes.
   *
   * 
   * If `false`, the extent only visually reads biomes from `y = 0`.
   * The biomes will still be set in 3D, but the client will only see the one at
   * `y = 0`. It is up to the caller to determine if they want to set that
   * biome instead, or simply warn the actor.
   * 
   *
   * @return if the extent fully supports 3D biomes
  */
  fullySupports3DBiomes(): boolean;
  /**
   * Get the biome at the given location.
   *
   * If there is no biome available, then the ocean biome should be
   * returned.
   *
   * @param position the (x, z) location to check the biome at
   * @return the biome at the location
   * @deprecated Biomes in Minecraft are 3D now, use {@link InputExtent#getBiome(BlockVector3)}
  */
  getBiome(position: BlockVector3): BiomeType;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector3, biome: BiomeType): boolean;
  /**
   * Get a snapshot of the block at the given location.
   *
   * If the given position is out of the bounds of the extent, then the behavior
   * is undefined (an air block could be returned). However, `null`
   * should not be returned.
   *
   * The returned block is immutable and is a snapshot of the block at the time
   * of call. It has no position attached to it, so it could be reused in
   * {@link Pattern}s and so on.
   *
   * @param position position of the block
   * @return the block
  */
  getBlock(position: BlockVector3): BlockState;
  /**
   * Get a immutable snapshot of the block at the given location.
   *
   * @param position position of the block
   * @return the block
  */
  getFullBlock(position: BlockVector3): BaseBlock;
  /**
   * Returns the highest solid 'terrain' block.
   *
   * @param x the X coordinate
   * @param z the Z coordinate
   * @param minY minimal height
   * @param maxY maximal height
   * @return height of highest block found or 'minY'
  */
  getHighestTerrainBlock(x: number, z: number, minY: number, maxY: number): number;
  /**
   * Returns the highest solid 'terrain' block.
   *
   * @param x the X coordinate
   * @param z the Z coordinate
   * @param minY minimal height
   * @param maxY maximal height
   * @param filter a mask of blocks to consider, or null to consider any solid (movement-blocking) block
   * @return height of highest block found or 'minY'
  */
  getHighestTerrainBlock(x: number, z: number, minY: number, maxY: number, filter: Mask): number;
  /**
   * Set a block, bypassing both history and block re-ordering.
   *
   * @param position the position to set the block at
   * @param block the block
   * @param stage the level
   * @return whether the block changed
   * @throws WorldEditException thrown on a set error
  */
  setBlock<B>(position: BlockVector3, block: B, stage: Stage): boolean;
  /**
   * Set a block, bypassing both history and block re-ordering.
   *
   * @param position the position to set the block at
   * @param block the block
   * @return whether the block changed
  */
  rawSetBlock<B>(position: BlockVector3, block: B): boolean;
  /**
   * Set a block, bypassing history but still utilizing block re-ordering.
   *
   * @param position the position to set the block at
   * @param block the block
   * @return whether the block changed
  */
  smartSetBlock<B>(position: BlockVector3, block: B): boolean;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<B>(position: BlockVector3, block: B): boolean;
  /**
   * Sets the block at a position, subject to both history and block re-ordering.
   *
   * @param position the position
   * @param pattern a pattern to use
   * @return Whether the block changed -- not entirely dependable
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  setBlock(position: BlockVector3, pattern: Pattern): boolean;
  /**
   * Create an entity at the given location.
   *
   * @param entity the entity
   * @param location the location
   * @return a reference to the created entity, or null if the entity could not be created
  */
  createEntity(location: Location, entity: BaseEntity): Entity | null;
  /**
   * Restores all blocks to their initial state.
   *
   * @param editSession a new {@link EditSession} to perform the undo in
  */
  undo(editSession: EditSession): void;
  /**
   * Sets to new state.
   *
   * @param editSession a new {@link EditSession} to perform the redo in
  */
  redo(editSession: EditSession): void;
  /**
   * Get the number of changed blocks.
   *
   * @return the number of changes
  */
  size(): number;
  /**
   * Get the minimum point in the extent.
   *
   * If the extent is unbounded, then a large (negative) value may
   * be returned.
   *
   * @return the minimum point
  */
  getMinimumPoint(): BlockVector3;
  /**
   * Get the maximum point in the extent.
   *
   * If the extent is unbounded, then a large (positive) value may
   * be returned.
   *
   * @return the maximum point
  */
  getMaximumPoint(): BlockVector3;
  /**
   * Get a list of all entities within the given region.
   *
   * If the extent is not wholly loaded (i.e. a world being simulated in the
   * game will not have every chunk loaded), then this list may not be
   * incomplete.
   *
   * @param region the region in which entities must be contained
   * @return a list of entities
  */
  getEntities(region: Region): Entity[];
  /**
   * Get a list of all entities.
   *
   * If the extent is not wholly loaded (i.e. a world being simulated in the
   * game will not have every chunk loaded), then this list may not be
   * incomplete.
   *
   * @return a list of entities
  */
  getEntities(): Entity[];
  /**
   * Closing an EditSession flushes its buffers to the world, and performs other
   * cleanup tasks.
  */
  close(): void;
  /**
   * Communicate to the EditSession that all block changes are complete,
   * and that it should apply them to the world.
   *
   * @deprecated Replace with {@link #close()} for proper cleanup behavior.
  */
  flushSession(): void;
  /**
   * Return an {@link Operation} that should be called to tie up loose ends
   * (such as to commit changes in a buffer).
   *
   * @return an operation or null if there is none to execute
  */
  commit(): Operation | null;
  /**
   * Count the number of blocks of a list of types in a region.
   *
   * @param region the region
   * @param searchBlocks the list of blocks to search
   * @return the number of blocks that matched the block
  */
  countBlocks(region: Region, searchBlocks: Set<BaseBlock>): number;
  /**
   * Count the number of blocks of a list of types in a region.
   *
   * @param region the region
   * @param searchMask mask to match
   * @return the number of blocks that matched the mask
  */
  countBlocks(region: Region, searchMask: Mask): number;
  /**
   * Fills an area recursively in the X/Z directions.
   *
   * @param origin the location to start from
   * @param block the block to fill with
   * @param radius the radius of the spherical area to fill
   * @param depth the maximum depth, starting from the origin
   * @param recursive whether a breadth-first search should be performed
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  fillXZ<B>(origin: BlockVector3, block: B, radius: number, depth: number, recursive: boolean): number;
  /**
   * Fills an area recursively in the X/Z directions.
   *
   * @param origin the origin to start the fill from
   * @param pattern the pattern to fill with
   * @param radius the radius of the spherical area to fill, with 0 as the smallest radius
   * @param depth the maximum depth, starting from the origin, with 1 as the smallest depth
   * @param recursive whether a breadth-first search should be performed
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  fillXZ(origin: BlockVector3, pattern: Pattern, radius: number, depth: number, recursive: boolean): number;
  /**
   * Remove a cuboid above the given position with a given apothem and a given height.
   *
   * @param position base position
   * @param apothem an apothem of the cuboid (on the XZ plane), where the minimum is 1
   * @param height the height of the cuboid, where the minimum is 1
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  removeAbove(position: BlockVector3, apothem: number, height: number): number;
  /**
   * Remove a cuboid below the given position with a given apothem and a given height.
   *
   * @param position base position
   * @param apothem an apothem of the cuboid (on the XZ plane), where the minimum is 1
   * @param height the height of the cuboid, where the minimum is 1
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  removeBelow(position: BlockVector3, apothem: number, height: number): number;
  /**
   * Remove blocks of a certain type nearby a given position.
   *
   * @param position center position of cuboid
   * @param mask the mask to match
   * @param apothem an apothem of the cuboid, where the minimum is 1
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  removeNear(position: BlockVector3, mask: Mask, apothem: number): number;
  /**
   * Sets all the blocks inside a region to a given block type.
   *
   * @param region the region
   * @param block the block
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  setBlocks<B>(region: Region, block: B): number;
  /**
   * Sets all the blocks inside a region to a given pattern.
   *
   * @param region the region
   * @param pattern the pattern that provides the replacement block
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  setBlocks(region: Region, pattern: Pattern): number;
  /**
   * Replaces all the blocks matching a given filter, within a given region, to a block
   * returned by a given pattern.
   *
   * @param region the region to replace the blocks within
   * @param filter a list of block types to match, or null to use {@link com.sk89q.worldedit.function.mask.ExistingBlockMask}
   * @param replacement the replacement block
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  replaceBlocks<B>(region: Region, filter: Set<BaseBlock>, replacement: B): number;
  /**
   * Replaces all the blocks matching a given filter, within a given region, to a block
   * returned by a given pattern.
   *
   * @param region the region to replace the blocks within
   * @param filter a list of block types to match, or null to use {@link com.sk89q.worldedit.function.mask.ExistingBlockMask}
   * @param pattern the pattern that provides the new blocks
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  replaceBlocks(region: Region, filter: Set<BaseBlock>, pattern: Pattern): number;
  /**
   * Replaces all the blocks matching a given mask, within a given region, to a block
   * returned by a given pattern.
   *
   * @param region the region to replace the blocks within
   * @param mask the mask that blocks must match
   * @param pattern the pattern that provides the new blocks
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  replaceBlocks(region: Region, mask: Mask, pattern: Pattern): number;
  /**
   * Sets the blocks at the center of the given region to the given pattern.
   * If the center sits between two blocks on a certain axis, then two blocks
   * will be placed to mark the center.
   *
   * @param region the region to find the center of
   * @param pattern the replacement pattern
   * @return the number of blocks placed
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  center(region: Region, pattern: Pattern): number;
  /**
   * Make the faces of the given region as if it was a {@link CuboidRegion}.
   *
   * @param region the region
   * @param block the block to place
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
   * @deprecated Use {@link EditSession#makeCuboidFaces(Region, Pattern)}.
  */
  makeCuboidFaces<B>(region: Region, block: B): number;
  /**
   * Make the faces of the given region as if it was a {@link CuboidRegion}.
   *
   * @param region the region
   * @param pattern the pattern to place
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  makeCuboidFaces(region: Region, pattern: Pattern): number;
  /**
   * Make the faces of the given region. The method by which the faces are found
   * may be inefficient, because there may not be an efficient implementation supported
   * for that specific shape.
   *
   * @param region the region
   * @param pattern the pattern to place
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  makeFaces(region: Region, pattern: Pattern): number;
  /**
   * Make the walls (all faces but those parallel to the X-Z plane) of the given region
   * as if it was a {@link CuboidRegion}.
   *
   * @param region the region
   * @param block the block to place
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  makeCuboidWalls<B>(region: Region, block: B): number;
  /**
   * Make the walls (all faces but those parallel to the X-Z plane) of the given region
   * as if it was a {@link CuboidRegion}.
   *
   * @param region the region
   * @param pattern the pattern to place
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  makeCuboidWalls(region: Region, pattern: Pattern): number;
  /**
   * Make the walls of the given region. The method by which the walls are found
   * may be inefficient, because there may not be an efficient implementation supported
   * for that specific shape.
   *
   * @param region the region
   * @param pattern the pattern to place
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  makeWalls(region: Region, pattern: Pattern): number;
  /**
   * Places a layer of blocks on top of ground blocks in the given region
   * (as if it were a cuboid).
   *
   * @param region the region
   * @param block the placed block
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
   * @deprecated Use {@link EditSession#overlayCuboidBlocks(Region, Pattern)}.
  */
  overlayCuboidBlocks<B>(region: Region, block: B): number;
  /**
   * Places a layer of blocks on top of ground blocks in the given region
   * (as if it were a cuboid).
   *
   * @param region the region
   * @param pattern the placed block pattern
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  overlayCuboidBlocks(region: Region, pattern: Pattern): number;
  /**
   * Turns the first 3 layers into dirt/grass and the bottom layers
   * into rock, like a natural Minecraft mountain.
   *
   * @param region the region to affect
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  naturalizeCuboidBlocks(region: Region): number;
  /**
   * Stack a cuboid region. For compatibility, entities are copied by biomes are not.
   * Use {@link #stackCuboidRegion(Region, BlockVector3, int, boolean, boolean, Mask)} to fine tune.
   *
   * @param region the region to stack
   * @param dir the direction to stack
   * @param count the number of times to stack
   * @param copyAir true to also copy air blocks
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  stackCuboidRegion(region: Region, dir: BlockVector3, count: number, copyAir: boolean): number;
  /**
   * Stack a cuboid region.
   *
   * @param region the region to stack
   * @param offset how far to move the contents each stack
   * @param count the number of times to stack
   * @param copyEntities true to copy entities
   * @param copyBiomes true to copy biomes
   * @param mask source mask for the operation (only matching blocks are copied)
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  stackCuboidRegion(region: Region, offset: BlockVector3, count: number, copyEntities: boolean, copyBiomes: boolean, mask: Mask): number;
  /**
   * Stack a region using block units.
   *
   * @param region the region to stack
   * @param offset how far to move the contents each stack in block units
   * @param count the number of times to stack
   * @param copyEntities true to copy entities
   * @param copyBiomes true to copy biomes
   * @param mask source mask for the operation (only matching blocks are copied)
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
   * @throws RegionOperationException thrown if the region operation is invalid
  */
  stackRegionBlockUnits(region: Region, offset: BlockVector3, count: number, copyEntities: boolean, copyBiomes: boolean, mask: Mask): number;
  /**
   * Move the blocks in a region a certain direction.
   *
   * @param region the region to move
   * @param offset the offset
   * @param multiplier the number to multiply the offset by
   * @param copyAir true to copy air blocks
   * @param replacement the replacement pattern to fill in after moving, or null to use air
   * @return number of blocks moved
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  moveRegion(region: Region, offset: BlockVector3, multiplier: number, copyAir: boolean, replacement: Pattern): number;
  /**
   * Move the blocks in a region a certain direction.
   *
   * @param region the region to move
   * @param offset the offset
   * @param multiplier the number to multiply the offset by
   * @param moveEntities true to move entities
   * @param copyBiomes true to copy biomes (source biome is unchanged)
   * @param mask source mask for the operation (only matching blocks are moved)
   * @param replacement the replacement pattern to fill in after moving, or null to use air
   * @return number of blocks moved
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
   * @throws IllegalArgumentException thrown if the region is not a flat region, but copyBiomes is true
  */
  moveRegion(region: Region, offset: BlockVector3, multiplier: number, moveEntities: boolean, copyBiomes: boolean, mask: Mask, replacement: Pattern): number;
  /**
   * Move the blocks in a region a certain direction.
   *
   * @param region the region to move
   * @param dir the direction
   * @param distance the distance to move
   * @param copyAir true to copy air blocks
   * @param replacement the replacement pattern to fill in after moving, or null to use air
   * @return number of blocks moved
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  moveCuboidRegion(region: Region, dir: BlockVector3, distance: number, copyAir: boolean, replacement: Pattern): number;
  /**
   * Drain nearby pools of water or lava.
   *
   * @param origin the origin to drain from, which will search a 3x3 area
   * @param radius the radius of the removal, where a value should be 0 or greater
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  drainArea(origin: BlockVector3, radius: number): number;
  /**
   * Drain nearby pools of water or lava, optionally removed waterlogged states from blocks.
   *
   * @param origin the origin to drain from, which will search a 3x3 area
   * @param radius the radius of the removal, where a value should be 0 or greater
   * @param waterlogged true to make waterlogged blocks non-waterlogged as well
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  drainArea(origin: BlockVector3, radius: number, waterlogged: boolean): number;
  /**
   * Fix liquids so that they turn into stationary blocks and extend outward.
   *
   * @param origin the original position
   * @param radius the radius to fix
   * @param fluid the type of the fluid
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  fixLiquid(origin: BlockVector3, radius: number, fluid: BlockType): number;
  /**
   * Makes a cylinder.
   *
   * @param pos Center of the cylinder
   * @param block The block pattern to use
   * @param radius The cylinder's radius
   * @param height The cylinder's up/down extent. If negative, extend downward.
   * @param filled If false, only a shell will be generated.
   * @return number of blocks changed
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  makeCylinder(pos: BlockVector3, block: Pattern, radius: number, height: number, filled: boolean): number;
  /**
   * Makes a cylinder.
   *
   * @param pos Center of the cylinder
   * @param block The block pattern to use
   * @param radiusX The cylinder's largest north/south extent
   * @param radiusZ The cylinder's largest east/west extent
   * @param height The cylinder's up/down extent. If negative, extend downward.
   * @param filled If false, only a shell will be generated.
   * @return number of blocks changed
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  makeCylinder(pos: BlockVector3, block: Pattern, radiusX: number, radiusZ: number, height: number, filled: boolean): number;
  /**
   * Makes a sphere.
   *
   * @param pos Center of the sphere or ellipsoid
   * @param block The block pattern to use
   * @param radius The sphere's radius
   * @param filled If false, only a shell will be generated.
   * @return number of blocks changed
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  makeSphere(pos: BlockVector3, block: Pattern, radius: number, filled: boolean): number;
  /**
   * Makes a sphere or ellipsoid.
   *
   * @param pos Center of the sphere or ellipsoid
   * @param block The block pattern to use
   * @param radiusX The sphere/ellipsoid's largest north/south extent
   * @param radiusY The sphere/ellipsoid's largest up/down extent
   * @param radiusZ The sphere/ellipsoid's largest east/west extent
   * @param filled If false, only a shell will be generated.
   * @return number of blocks changed
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  makeSphere(pos: BlockVector3, block: Pattern, radiusX: number, radiusY: number, radiusZ: number, filled: boolean): number;
  /**
   * Makes a pyramid.
   *
   * @param position a position
   * @param block a block
   * @param size size of pyramid
   * @param filled true if filled
   * @return number of blocks changed
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  makePyramid(position: BlockVector3, block: Pattern, size: number, filled: boolean): number;
  /**
   * Thaw blocks in a radius.
   *
   * @param position the position
   * @param radius the radius
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
   * @deprecated Use {@link #thaw(BlockVector3, double, int)}.
  */
  thaw(position: BlockVector3, radius: number): number;
  /**
   * Thaw blocks in a cylinder.
   *
   * @param position the position
   * @param radius the radius
   * @param height the height (upwards and downwards)
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  thaw(position: BlockVector3, radius: number, height: number): number;
  /**
   * Make snow in a radius.
   *
   * @param position a position
   * @param radius a radius
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
   * @deprecated Use {@link #simulateSnow(BlockVector3, double, int)}.
  */
  simulateSnow(position: BlockVector3, radius: number): number;
  /**
   * Make snow in a cylinder.
   *
   * @param position a position
   * @param radius a radius
   * @param height the height (upwards and downwards)
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  simulateSnow(position: BlockVector3, radius: number, height: number): number;
  /**
   * Make snow in a region.
   *
   * @param region the region to simulate snow in
   * @param stack whether it should stack existing snow
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  simulateSnow(region: FlatRegion, stack: boolean): number;
  /**
   * Make dirt green.
   *
   * @param position a position
   * @param radius a radius
   * @param onlyNormalDirt only affect normal dirt (all default properties)
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
   * @deprecated Use {@link #green(BlockVector3, double, int, boolean)}.
  */
  green(position: BlockVector3, radius: number, onlyNormalDirt: boolean): number;
  /**
   * Make dirt green in a cylinder.
   *
   * @param position the position
   * @param radius the radius
   * @param height the height
   * @param onlyNormalDirt only affect normal dirt (all default properties)
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  green(position: BlockVector3, radius: number, height: number, onlyNormalDirt: boolean): number;
  /**
   * Makes pumpkin patches randomly in an area around the given position.
   *
   * @param position the base position
   * @param apothem the apothem of the (square) area
   * @return number of patches created
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  makePumpkinPatches(position: BlockVector3, apothem: number): number;
  /**
   * Makes a forest.
   *
   * @param basePosition a position
   * @param size a size
   * @param density between 0 and 1, inclusive
   * @param treeType the tree type
   * @return number of trees created
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  makeForest(basePosition: BlockVector3, size: number, density: number, treeType: TreeType): number;
  /**
   * Makes a forest.
   *
   * @param region the region to generate trees in
   * @param density between 0 and 1, inclusive
   * @param treeType the tree type
   * @return number of trees created
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  makeForest(region: Region, density: number, treeType: TreeType): number;
  /**
   * Get the block distribution inside a region.
   *
   * @param region a region
   * @return the results
  */
  getBlockDistribution(region: Region, separateStates: boolean): Countable<BlockState>[];
  /**
   * Generate a shape for the given expression.
   *
   * @param region the region to generate the shape in
   * @param zero the coordinate origin for x/y/z variables
   * @param unit the scale of the x/y/z/ variables
   * @param pattern the default material to make the shape from
   * @param expressionString the expression defining the shape
   * @param hollow whether the shape should be hollow
   * @return number of blocks changed
   * @throws ExpressionException if there is a problem with the expression
   * @throws MaxChangedBlocksException if the maximum block change limit is exceeded
  */
  makeShape(region: Region, zero: Vector3, unit: Vector3, pattern: Pattern, expressionString: string, hollow: boolean): number;
  /**
   * Generate a shape for the given expression.
   *
   * @param region the region to generate the shape in
   * @param zero the coordinate origin for x/y/z variables
   * @param unit the scale of the x/y/z/ variables
   * @param pattern the default material to make the shape from
   * @param expressionString the expression defining the shape
   * @param hollow whether the shape should be hollow
   * @param timeout the time, in milliseconds, to wait for each expression evaluation before halting it. -1 to disable
   * @return number of blocks changed
   * @throws ExpressionException if there is a problem with the expression
   * @throws MaxChangedBlocksException if the maximum block change limit is exceeded
  */
  makeShape(region: Region, zero: Vector3, unit: Vector3, pattern: Pattern, expressionString: string, hollow: boolean, timeout: number): number;
  /**
   * Internal version of {@link EditSession#makeShape(Region, Vector3, Vector3, Pattern, String, boolean, int)}.
   *
   * 
   * The Expression class is subject to change. Expressions should be provided via the string overload.
   * 
  */
  makeShape(region: Region, zero: Vector3, unit: Vector3, pattern: Pattern, expression: Expression, hollow: boolean, timeout: number): number;
  /**
   * Deforms the region by a given expression. A deform provides a block's x, y, and z coordinates (possibly scaled)
   * to an expression, and then sets the block to the block given by the resulting values of the variables, if they
   * have changed.
   *
   * @param region the region to deform
   * @param zero the origin of the coordinate system
   * @param unit the scale of the coordinate system
   * @param expressionString the expression to evaluate for each block
   *
   * @return number of blocks changed
   *
   * @throws ExpressionException thrown on invalid expression input
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  deformRegion(region: Region, zero: Vector3, unit: Vector3, expressionString: string): number;
  /**
   * Deforms the region by a given expression. A deform provides a block's x, y, and z coordinates (possibly scaled)
   * to an expression, and then sets the block to the block given by the resulting values of the variables, if they
   * have changed.
   *
   * @param region the region to deform
   * @param zero the origin of the coordinate system
   * @param unit the scale of the coordinate system
   * @param expressionString the expression to evaluate for each block
   * @param timeout maximum time for the expression to evaluate for each block. -1 for unlimited.
   *
   * @return number of blocks changed
   *
   * @throws ExpressionException thrown on invalid expression input
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  deformRegion(region: Region, zero: Vector3, unit: Vector3, expressionString: string, timeout: number): number;
  /**
   * Internal version of {@link EditSession#deformRegion(Region, Vector3, Vector3, String, int)}.
   *
   * 
   * The Expression class is subject to change. Expressions should be provided via the string overload.
   * 
  */
  deformRegion(region: Region, zero: Vector3, unit: Vector3, expression: Expression, timeout: number): number;
  /**
   * Hollows out the region (Semi-well-defined for non-cuboid selections).
   *
   * @param region the region to hollow out.
   * @param thickness the thickness of the shell to leave (manhattan distance)
   * @param pattern The block pattern to use
   *
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  hollowOutRegion(region: Region, thickness: number, pattern: Pattern): number;
  /**
   * Draws a line (out of blocks) between two vectors.
   *
   * @param pattern The block pattern used to draw the line.
   * @param pos1 One of the points that define the line.
   * @param pos2 The other point that defines the line.
   * @param radius The radius (thickness) of the line.
   * @param filled If false, only a shell will be generated.
   *
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
   *
   * @see #drawLine(Pattern, List, double, boolean)
  */
  drawLine(pattern: Pattern, pos1: BlockVector3, pos2: BlockVector3, radius: number, filled: boolean): number;
  /**
   * Draws a line (out of blocks) between two or more vectors.
   *
   * @param pattern The block pattern used to draw the line.
   * @param vectors the list of vectors to draw the line between
   * @param radius The radius (thickness) of the line.
   * @param filled If false, only a shell will be generated.
   *
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  drawLine(pattern: Pattern, vectors: BlockVector3[], radius: number, filled: boolean): number;
  /**
   * Draws a spline (out of blocks) between specified vectors.
   *
   * @param pattern The block pattern used to draw the spline.
   * @param nodevectors The list of vectors to draw through.
   * @param tension The tension of every node.
   * @param bias The bias of every node.
   * @param continuity The continuity of every node.
   * @param quality The quality of the spline. Must be greater than 0.
   * @param radius The radius (thickness) of the spline.
   * @param filled If false, only a shell will be generated.
   *
   * @return number of blocks affected
   * @throws MaxChangedBlocksException thrown if too many blocks are changed
  */
  drawSpline(pattern: Pattern, nodevectors: BlockVector3[], tension: number, bias: number, continuity: number, quality: number, radius: number, filled: boolean): number;
  makeBiomeShape(region: Region, zero: Vector3, unit: Vector3, biomeType: BiomeType, expressionString: string, hollow: boolean): number;
  makeBiomeShape(region: Region, zero: Vector3, unit: Vector3, biomeType: BiomeType, expressionString: string, hollow: boolean, timeout: number): number;
  /**
   * Get the biome at the given location.
   *
   * If there is no biome available, then the ocean biome should be
   * returned.
   *
   * @param position the (x, z) location to check the biome at
   * @return the biome at the location
   * @deprecated Biomes in Minecraft are 3D now, use {@link InputExtent#getBiome(BlockVector3)}
  */
  getBiome(position: BlockVector2): BiomeType;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(position: BlockVector3, block: T): boolean;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector2, biome: BiomeType): boolean;
}
export interface EditSession extends Extent, AutoCloseable {}
/**
 * Stores session information.
*/
export class LocalSession {
  static MAX_HISTORY_SIZE: number;
  /**
   * Construct the object.
   *
   * {@link #setConfiguration(LocalConfiguration)} should be called
   * later with configuration.
  */
  constructor();
  /**
   * Construct the object.
   *
   * @param config the configuration
  */
  constructor(config: LocalConfiguration | null);
  /**
   * Set the configuration.
   *
   * @param config the configuration
  */
  setConfiguration(configuration: LocalConfiguration);
  /**
   * Called on post load of the session from persistent storage.
  */
  postLoad(): void;
  /**
   * Get whether this session is "dirty" and has changes that needs to
   * be committed.
   *
   * @return true if dirty
  */
  isDirty(): boolean;
  /**
   * Get whether this session is "dirty" and has changes that needs to
   * be committed, and reset it to `false`.
   *
   * @return true if the dirty value was `true`
  */
  compareAndResetDirty(): boolean;
  /**
   * Get the session's timezone.
   *
   * @return the timezone
  */
  getTimeZone(): ZoneId;
  /**
   * Set the session's timezone.
   *
   * @param timezone the user's timezone
  */
  setTimezone(timezone: ZoneId);
  /**
   * Clear history.
  */
  clearHistory(): void;
  /**
   * Remember an edit session for the undo history. If the history maximum
   * size is reached, old edit sessions will be discarded.
   *
   * @param editSession the edit session
  */
  remember(editSession: EditSession): void;
  /**
   * Performs an undo.
   *
   * @param newBlockBag a new block bag
   * @param actor the actor
   * @return whether anything was undone
  */
  undo(newBlockBag: BlockBag | null, actor: Actor): EditSession;
  /**
   * Performs a redo.
   *
   * @param newBlockBag a new block bag
   * @param actor the actor
   * @return whether anything was redone
  */
  redo(newBlockBag: BlockBag | null, actor: Actor): EditSession;
  hasWorldOverride(): boolean;
  getWorldOverride(): World | null;
  setWorldOverride(worldOverride: World | null);
  isTickingWatchdog(): boolean;
  setTickingWatchdog(tickingWatchdog: boolean): void;
  isTracingActions(): boolean;
  setTracingActions(tracingActions: boolean): void;
  /**
   * Get the default region selector.
   *
   * @return the default region selector
  */
  getDefaultRegionSelector(): RegionSelectorType;
  /**
   * Set the default region selector.
   *
   * @param defaultSelector the default region selector
  */
  setDefaultRegionSelector(defaultRegionSelector: RegionSelectorType);
  /**
   * Get the region selector for defining the selection. If the selection
   * was defined for a different world, the old selection will be discarded.
   *
   * @param world the world
   * @return position the position
  */
  getRegionSelector(world: World): RegionSelector;
  /**
   * Set the region selector.
   *
   * @param world the world
   * @param selector the selector
  */
  setRegionSelector(world: World, selector: RegionSelector): void;
  /**
   * Returns true if the region is fully defined for the specified world.
   *
   * @param world the world
   * @return true if a region selection is defined
  */
  isSelectionDefined(world: World): boolean;
  /**
   * Get the selection region. If you change the region, you should
   * call learnRegionChanges(). If the selection is not fully defined,
   * the `IncompleteRegionException` exception will be thrown.
   *
   * Note that this method will return a region in the current selection world,
   * which is not guaranteed to be the player's world or even the current world
   * override. If you require a specific world, use the
   * {@link LocalSession#getSelection(World)} overload instead.
   *
   * @return the selected region
   * @throws IncompleteRegionException if the region is not fully defined
  */
  getSelection(): Region;
  /**
   * Get the selection region. If you change the region, you should
   * call learnRegionChanges(). If the selection is defined in
   * a different world, or the selection isn't fully defined,
   * the `IncompleteRegionException` exception will be thrown.
   *
   * @param world the world
   * @return a region
   * @throws IncompleteRegionException if no region is selected, or the provided world is null
  */
  getSelection(world: World | null): Region;
  /**
   * Get the selection world.
   *
   * @return the the world of the selection
  */
  getSelectionWorld(): World | null;
  /**
   * Gets the clipboard.
   *
   * @return clipboard
   * @throws EmptyClipboardException thrown if no clipboard is set
  */
  getClipboard(): ClipboardHolder;
  /**
   * Sets the clipboard.
   *
   * Pass `null` to clear the clipboard.
   *
   * @param clipboard the clipboard, or null if the clipboard is to be cleared
  */
  setClipboard(clipboard: ClipboardHolder | null);
  /**
   * Check if tool control is enabled.
   *
   * @return true always - see deprecation notice
   * @deprecated The wand is now a tool that can be bound/unbound.
  */
  isToolControlEnabled(): boolean;
  /**
   * Set if tool control is enabled.
   *
   * @param toolControl unused - see deprecation notice
   * @deprecated The wand is now a tool that can be bound/unbound.
  */
  setToolControl(toolControl: boolean): void;
  /**
   * Get the maximum number of blocks that can be changed in an edit session.
   *
   * @return block change limit
  */
  getBlockChangeLimit(): number;
  /**
   * Set the maximum number of blocks that can be changed.
   *
   * @param maxBlocksChanged the maximum number of blocks changed
  */
  setBlockChangeLimit(blockChangeLimit: number);
  /**
   * Get the maximum time allowed for certain executions to run before cancelling them, such as expressions.
   *
   * @return timeout time, in milliseconds
  */
  getTimeout(): number;
  /**
   * Set the maximum number of blocks that can be changed.
   *
   * @param timeout the time, in milliseconds, to limit certain executions to, or -1 to disable
  */
  setTimeout(timeout: number);
  /**
   * Checks whether the super pick axe is enabled.
   *
   * @return status
  */
  hasSuperPickAxe(): boolean;
  /**
   * Enable super pick axe.
  */
  enableSuperPickAxe(): void;
  /**
   * Disable super pick axe.
  */
  disableSuperPickAxe(): void;
  /**
   * Toggle the super pick axe.
   *
   * @return whether the super pick axe is now enabled
  */
  toggleSuperPickAxe(): boolean;
  /**
   * Get the position use for commands that take a center point
   * (i.e. //forestgen, etc.).
   *
   * @param actor the actor
   * @return the position to use
   * @throws IncompleteRegionException thrown if a region is not fully selected
  */
  getPlacementPosition(actor: Actor): BlockVector3;
  setPlaceAtPos1(placeAtPos1: boolean): void;
  isPlaceAtPos1(): boolean;
  /**
   * Toggle placement position.
   *
   * @return whether "place at position 1" is now enabled
  */
  togglePlacementPosition(): boolean;
  /**
   * Get a block bag for a player.
   *
   * @param player the player to get the block bag for
   * @return a block bag
  */
  getBlockBag(player: Player): BlockBag | null;
  /**
   * Get the legacy snapshot that has been selected.
   *
   * @return the legacy snapshot
  */
  getSnapshot(): Snapshot | null;
  /**
   * Select a legacy snapshot.
   *
   * @param snapshot a legacy snapshot
  */
  setSnapshot(snapshot: Snapshot | null);
  /**
   * Get the snapshot that has been selected.
   *
   * @return the snapshot
  */
  getSnapshotExperimental(): com_sk89q_worldedit_world_snapshot_experimental_Snapshot | null;
  /**
   * Select a snapshot.
   *
   * @param snapshotExperimental a snapshot
  */
  setSnapshotExperimental(snapshotExperimental: com_sk89q_worldedit_world_snapshot_experimental_Snapshot | null);
  /**
   * Get the assigned block tool.
   *
   * @return the super pickaxe tool mode
  */
  getSuperPickaxe(): BlockTool;
  /**
   * Set the super pick axe tool.
   *
   * @param tool the tool to set
  */
  setSuperPickaxe(superPickaxe: BlockTool);
  /**
   * Get the tool assigned to the item.
   *
   * @param item the item type
   * @return the tool, which may be `null`
  */
  getTool(item: ItemType): Tool | null;
  /**
   * Get the brush tool assigned to the item. If there is no tool assigned
   * or the tool is not assigned, the slot will be replaced with the
   * brush tool.
   *
   * @param item the item type
   * @return the tool, or `null`
   * @throws InvalidToolBindException if the item can't be bound to that item
  */
  getBrushTool(item: ItemType): BrushTool;
  /**
   * Set the tool.
   *
   * @param item the item type
   * @param tool the tool to set, which can be `null`
   * @throws InvalidToolBindException if the item can't be bound to that item
  */
  setTool(item: ItemType, tool: Tool | null): void;
  /**
   * Returns whether inventory usage is enabled for this session.
   *
   * @return if inventory is being used
  */
  isUsingInventory(): boolean;
  /**
   * Set the state of inventory usage.
   *
   * @param useInventory if inventory is to be used
  */
  setUseInventory(useInventory: boolean): void;
  /**
   * Get the last script used.
   *
   * @return the last script's name
  */
  getLastScript(): string | null;
  /**
   * Set the last script used.
   *
   * @param lastScript the last script's name
  */
  setLastScript(lastScript: string | null);
  /**
   * Tell the player the WorldEdit version.
   *
   * @param actor the actor
  */
  tellVersion(actor: Actor): void;
  shouldUseServerCUI(): boolean;
  setUseServerCUI(useServerCUI: boolean): void;
  /**
   * Update server-side WorldEdit CUI.
   *
   * @param actor The player
  */
  updateServerCUI(actor: Actor): void;
  /**
   * Dispatch a CUI event but only if the actor has CUI support.
   *
   * @param actor the actor
   * @param event the event
  */
  dispatchCUIEvent(actor: Actor, event: CUIEvent): void;
  /**
   * Dispatch the initial setup CUI messages.
   *
   * @param actor the actor
  */
  dispatchCUISetup(actor: Actor): void;
  /**
   * Send the selection information.
   *
   * @param actor the actor
  */
  dispatchCUISelection(actor: Actor): void;
  /**
   * Describe the selection to the CUI actor.
   *
   * @param actor the actor
  */
  describeCUI(actor: Actor): void;
  /**
   * Handle a CUI initialization message.
   *
   * @param text the message
  */
  handleCUIInitializationMessage(text: string, actor: Actor): void;
  /**
   * Gets the status of CUI support.
   *
   * @return true if CUI is enabled
  */
  hasCUISupport(): boolean;
  /**
   * Sets the status of CUI support.
   *
   * @param support true if CUI is enabled
  */
  setCUISupport(support: boolean): void;
  /**
   * Gets the client's CUI protocol version.
   *
   * @return the CUI version
  */
  getCUIVersion(): number;
  /**
   * Sets the client's CUI protocol version.
   *
   * @param cuiVersion the CUI version
  */
  setCUIVersion(cUIVersion: number);
  /**
   * Detect date from a user's input.
   *
   * @param input the input to parse
   * @return a date
  */
  detectDate(input: string): Calendar | null;
  /**
   * Construct a new edit session.
   *
   * @param actor the actor
   * @return an edit session
  */
  createEditSession(actor: Actor): EditSession;
  /**
   * Gets the side effect applier of this session.
   *
   * @return the side effect applier
  */
  getSideEffectSet(): SideEffectSet;
  /**
   * Sets the side effect applier for this session.
   *
   * @param sideEffectSet the side effect applier
  */
  setSideEffectSet(sideEffectSet: SideEffectSet);
  /**
   * Checks if the session has fast mode enabled.
   *
   * @return true if fast mode is enabled
  */
  hasFastMode(): boolean;
  /**
   * Set fast mode.
   *
   * @param fastMode true if fast mode is enabled
  */
  setFastMode(fastMode: boolean): void;
  /**
   * Gets the reorder mode of the session.
   *
   * @return The reorder mode
  */
  getReorderMode(): ReorderMode;
  /**
   * Sets the reorder mode of the session.
   *
   * @param reorderMode The reorder mode
  */
  setReorderMode(reorderMode: ReorderMode);
  /**
   * Get the mask.
   *
   * @return mask, may be null
  */
  getMask(): Mask;
  /**
   * Set a mask.
   *
   * @param mask mask or null
  */
  setMask(mask: Mask);
  /**
   * Get the preferred wand item for this user, or `null` to use the default.
   * @return item id of wand item, or `null`
  */
  getWandItem(): string;
  /**
   * Get if the selection wand item should use the default, or null if unknown.
   *
   * @return if it should use the default
  */
  isWandItemDefault(): boolean;
  /**
   * Get the preferred navigation wand item for this user, or `null` to use the default.
   * @return item id of nav wand item, or `null`
  */
  getNavWandItem(): string;
  /**
   * Get if the navigation wand item should use the default, or null if unknown.
   *
   * @return if it should use the default
  */
  isNavWandItemDefault(): boolean;
  /**
   * Get the last block distribution stored in this session.
   *
   * @return block distribution or `null`
  */
  getLastDistribution(): Countable<BlockState>[];
  /**
   * Store a block distribution in this session.
  */
  setLastDistribution(lastDistribution: Countable<BlockState>[]);
  /**
   * Call when this session has become inactive.
   *
   * This is for internal use only.
  */
  onIdle(): void;
}

}
declare module 'com.sk89q.worldedit.math.noise' {
import { Random } from 'java.util';
import { Vector2, Vector3 } from 'com.sk89q.worldedit.math';
/**
 * Generates ridged multi-fractal noise.
*/
export class RidgedMultiFractalNoise {
  getFrequency(): number;
  setFrequency(frequency: number);
  getLacunarity(): number;
  setLacunarity(lacunarity: number);
  getOctaveCount(): number;
  setOctaveCount(octaveCount: number);
  setSeed(seed: number);
  getSeed(): number;
}
/**
 * Generates Voronoi noise.
*/
export class VoronoiNoise {
  getFrequency(): number;
  setFrequency(frequency: number);
  setSeed(seed: number);
  getSeed(): number;
}
/**
 * Generates Perlin noise.
*/
export class PerlinNoise {
  getFrequency(): number;
  setFrequency(frequency: number);
  getLacunarity(): number;
  setLacunarity(lacunarity: number);
  getOctaveCount(): number;
  setOctaveCount(octaveCount: number);
  setPersistence(persistence: number);
  getPersistence(): number;
  setSeed(seed: number);
  getSeed(): number;
}
/**
 * Generates noise in a deterministic or non-deterministic manner.
*/
export class NoiseGenerator {
  /**
   * Get the noise value for the given position. The returned value may
   * change on every future call for the same position.
   *
   * @param position the position
   * @return a noise value between 0 (inclusive) and 1 (inclusive)
  */
  noise(position: Vector2): number;
  /**
   * Get the noise value for the given position. The returned value may
   * change on every future call for the same position.
   *
   * @param position the position
   * @return a noise value between 0 (inclusive) and 1 (inclusive)
  */
  noise(position: Vector3): number;
}
/**
 * Generates noise using {@link java.util.Random}. Every time a noise
 * generating function is called, a new value will be returned.
*/
export class RandomNoise extends NoiseGenerator {
  /**
   * Create a new noise generator using the given `Random`.
   *
   * @param random the random instance
  */
  constructor(random: Random);
  /**
   * Create a new noise generator with a newly constructed `Random`
   * instance.
  */
  constructor();
  /**
   * Get the noise value for the given position. The returned value may
   * change on every future call for the same position.
   *
   * @param position the position
   * @return a noise value between 0 (inclusive) and 1 (inclusive)
  */
  noise(position: Vector2): number;
  /**
   * Get the noise value for the given position. The returned value may
   * change on every future call for the same position.
   *
   * @param position the position
   * @return a noise value between 0 (inclusive) and 1 (inclusive)
  */
  noise(position: Vector3): number;
}

}
declare module 'com.sk89q.worldedit.util.formatting.component' {
import { CommandEntry } from 'com.sk89q.worldedit.util.formatting.component.CommandListBox';
import { Locale, List } from 'java.util';
import { TextColor } from 'com.sk89q.worldedit.util.formatting.text.format';
import { SideEffectSet, SideEffect } from 'com.sk89q.worldedit.util';
import { LazyReference } from 'com.sk89q.worldedit.util.concurrency';
import { State } from 'com.sk89q.worldedit.util.SideEffect';
import { Command, CommandParameters } from 'org.enginehub.piston';
import { TextComponent, Component } from 'com.sk89q.worldedit.util.formatting.text';
import { Builder } from 'com.sk89q.worldedit.util.formatting.text.TextComponent';
import { WorldEditException } from 'com.sk89q.worldedit';
export class PaginationBox extends MessageBox {
  getComponent(number: number): Component;
  getComponentsSize(): number;
  setComponentsPerPage(componentsPerPage: number);
  formatForConsole(): void;
  create(page: number): Component;
  create(): TextComponent;
  static fromStrings(header: string, pageCommand: string | null, lines: string[]): PaginationBox;
  static fromComponents(header: string, pageCommand: string | null, lines: Component[]): PaginationBox;
}
/**
 * A box to describe usage of a command.
*/
export class CommandUsageBox extends TextComponentProducer {
  /**
   * Create a new usage box.
   *
   * @param commands the commands to describe
   * @param commandString the commands that were used, such as "/we" or "/brush sphere"
   * @param helpRootCommand the command used to get subcommand help
  */
  constructor(commands: Command[], commandString: string, helpRootCommand: string);
  /**
   * Create a new usage box.
   *
   * @param commands the commands to describe
   * @param commandString the commands that were used, such as "/we" or "/brush sphere"
   * @param helpRootCommand the command used to get subcommand help
   * @param parameters list of parameters to use
  */
  constructor(commands: Command[], commandString: string, helpRootCommand: string, parameters: CommandParameters | null);
}
export class CommandListBox extends PaginationBox {
  /**
   * Create a new box.
   *
   * @param title the title
  */
  constructor(title: string, pageCommand: string, helpCommand: string);
  getComponent(number: number): Component;
  getComponentsSize(): number;
  appendCommand(alias: string, description: Component): void;
  appendCommand(alias: string, description: string, insertion: string): void;
  appendCommand(alias: string, description: Component, insertion: string): void;
  isHidingHelp(): boolean;
  setHidingHelp(hideHelp: boolean): void;
}
/**
 * Makes for a box with a border above and below.
*/
export class MessageBox extends TextComponentProducer {
  /**
   * Create a new box.
  */
  constructor(title: string, contents: TextComponentProducer);
  /**
   * Create a new box.
  */
  constructor(title: string, contents: TextComponentProducer, borderColor: TextColor);
  /**
   * Gets the message box contents producer.
   *
   * @return The contents producer
  */
  getContents(): TextComponentProducer;
  create(): TextComponent;
}
/**
 * Represents a subtle part of the message.
*/
export class SubtleFormat extends TextComponentProducer {
  /**
   * Creates a SubtleFormat with the given message.
   *
   * @param texts The text
   * @return The Component
  */
  static wrap(...texts: string[]): TextComponent;
}
/**
 * Represents a fragment representing a command that is to be typed.
*/
export class CodeFormat extends TextComponentProducer {
  /**
   * Creates a CodeFormat with the given message.
   *
   * @param texts The text
   * @return The Component
  */
  static wrap(...texts: string[]): TextComponent;
}
export class InvalidComponentException extends WorldEditException {
  constructor(message: string);
  constructor(message: Component);
}
export class TextComponentProducer {
  getBuilder(): Builder;
  /**
   * Adds a component as a child to this Producer.
   *
   * @param component The component
   * @return The producer, for chaining
  */
  append(component: Component): TextComponentProducer;
  /**
   * Adds a string as a child to this Producer.
   *
   * @param string The text
   * @return The producer, for chaining
  */
  append(string: string): TextComponentProducer;
  /**
   * Adds a newline as a child to this Producer.
   *
   * @return The producer, for chaining
  */
  newline(): TextComponentProducer;
  /**
   * Create a TextComponent from this producer.
   *
   * @return The component
  */
  create(): TextComponent;
  /**
   * Reset the producer to a clean slate.
   *
   * @return The producer, for chaining
  */
  reset(): TextComponentProducer;
}
export class TextUtils {
  /**
   * Join an array of components with a joiner component.
   *
   * @param components The components to join
   * @param joiner The joiner component
   * @return The joined component
  */
  static join(components: Component[], joiner: Component): Component;
  /**
   * Gets a Java Locale object by the Minecraft locale tag.
   *
   * @param locale The Minecraft locale tag
   * @return A Java locale
  */
  static getLocaleByMinecraftTag(locale: string): Locale;
}
/**
 * Represents a fragment representing an error.
*/
export class ErrorFormat extends TextComponentProducer {
  /**
   * Creates an ErrorFormat with the given message.
   *
   * @param texts The text
   * @return The Component
  */
  static wrap(...texts: string[]): TextComponent;
}
export class SideEffectBox extends PaginationBox {
  constructor(sideEffectSet: SideEffectSet);
  getComponent(number: number): Component;
  getComponentsSize(): number;
}
/**
 * Represents a fragment representing a label.
*/
export class LabelFormat extends TextComponentProducer {
  /**
   * Creates a LabelFormat with the given message.
   *
   * @param texts The text
   * @return The Component
  */
  static wrap(...texts: string[]): TextComponent;
}

}
declare module 'com.sk89q.worldedit.util.lifecycle.Lifecycled' {
import { BiConsumer } from 'java.util.function';
export class Events<T> {
  /**
   * Add a callback for when this lifecycled is given a new value. Will be called immediately
   * if this lifecycled is currently valid.
   *
   * 
   * The callback should not reference the owner, it must only access it via the parameter.
   * This ensures that the owner will be GC-able, otherwise it may be stuck in a reference
   * loop.
   * 
   *
   * @param owner when the owner is GC'd, the callback is removed
   * @param callback the callback, will be passed the lifecycled object
  */
  onNewValue<O>(owner: O, callback: BiConsumer<O, any>): void;
  /**
   * Add a callback for when this lifecycled is invalidated. Will be called immediately if
   * this lifecycled is currently invalid.
   *
   * 
   * The callback should not reference the owner, it must only access it via the parameter.
   * This ensures that the owner will be GC-able, otherwise it may be stuck in a reference
   * loop.
   * 
   *
   * @param owner when the owner is GC'd, the callback is removed
   * @param callback the callback, will be passed the lifecycled object
  */
  onInvalidated<O>(owner: O, callback: BiConsumer<O, any>): void;
}

}
declare module 'com.sk89q.wepif' {
import { RuntimeException, Class } from 'java.lang';
import { Set, List, Map } from 'java.util';
import { File } from 'java.io';
import { YAMLProcessor, YAMLNode } from 'com.sk89q.util.yaml';
export class PermissionsResolver extends PermissionsProvider {
  load(): void;
  getDetectionMessage(): string;
}
export class VaultResolver extends PermissionsResolver {
  load(): void;
  getDetectionMessage(): string;
  hasPermission(name: string, permission: string): boolean;
  hasPermission(worldName: string, name: string, permission: string): boolean;
  inGroup(player: string, group: string): boolean;
  getGroups(player: string): string[];
}
export class ConfigurationPermissionsResolver extends PermissionsResolver {
  constructor(config: YAMLProcessor);
  static generateDefaultPerms(section: YAMLNode): YAMLNode;
  load(): void;
  hasPermission(player: string, permission: string): boolean;
  hasPermission(worldName: string, player: string, permission: string): boolean;
  inGroup(player: string, group: string): boolean;
  getGroups(player: string): string[];
  getDetectionMessage(): string;
}
export class FlatFilePermissionsResolver extends PermissionsResolver {
  constructor();
  constructor(groupFile: File, userFile: File);
  loadGroupPermissions(): Map<string, Set<string>>;
  load(): void;
  hasPermission(player: string, permission: string): boolean;
  hasPermission(worldName: string, player: string, permission: string): boolean;
  inGroup(player: string, group: string): boolean;
  getGroups(player: string): string[];
  getDetectionMessage(): string;
}
export class PermissionsProvider {
  hasPermission(name: string, permission: string): boolean;
  hasPermission(worldName: string, name: string, permission: string): boolean;
  inGroup(player: string, group: string): boolean;
  getGroups(player: string): string[];
}
export class PluginPermissionsResolver extends PermissionsResolver {
  load(): void;
  hasPermission(name: string, permission: string): boolean;
  hasPermission(worldName: string, name: string, permission: string): boolean;
  inGroup(player: string, group: string): boolean;
  getGroups(player: string): string[];
  getDetectionMessage(): string;
}
export class GroupManagerResolver extends DinnerPermsResolver {
  load(): void;
  getGroups(name: string): string[];
  getDetectionMessage(): string;
}
export class bPermissionsResolver extends PermissionsResolver {
  load(): void;
  getDetectionMessage(): string;
  hasPermission(name: string, permission: string): boolean;
  hasPermission(worldName: string, name: string, permission: string): boolean;
  inGroup(player: string, group: string): boolean;
  getGroups(player: string): string[];
}
export class WEPIFRuntimeException extends RuntimeException {
  constructor(message: string);
}
export class DinnerPermsResolver extends PermissionsResolver {
  static readonly GROUP_PREFIX: string;
  load(): void;
  hasPermission(name: string, permission: string): boolean;
  hasPermission(worldName: string, name: string, permission: string): boolean;
  inGroup(name: string, group: string): boolean;
  getGroups(name: string): string[];
  getDetectionMessage(): string;
}
export class PermissionsResolverManager extends PermissionsResolver {
  static isInitialized(): boolean;
  static getInstance(): PermissionsResolverManager;
  findResolver(): void;
  load(): void;
  hasPermission(name: string, permission: string): boolean;
  hasPermission(worldName: string, name: string, permission: string): boolean;
  inGroup(player: string, group: string): boolean;
  getGroups(player: string): string[];
  getDetectionMessage(): string;
}
export class NijiPermissionsResolver extends PermissionsResolver {
  load(): void;
  hasPermission(name: string, permission: string): boolean;
  hasPermission(worldName: string, name: string, permission: string): boolean;
  inGroup(name: string, group: string): boolean;
  getGroups(name: string): string[];
  getDetectionMessage(): string;
}
export class PermissionsExResolver extends DinnerPermsResolver {
  hasPermission(worldName: string, name: string, permission: string): boolean;
  getDetectionMessage(): string;
  hasPermission(name: string, permission: string): boolean;
}

}
declare module 'com.sk89q.worldedit.util.concurrency' {
import { ExecutorService } from 'java.util.concurrent';
import { Supplier } from 'java.util.function';
/**
 * Thread-safe lazy reference.
*/
export class LazyReference<T> {
  static from<T>(valueComputation: Supplier<T>): LazyReference<T>;
  getValue(): T;
}
/**
 * Even more `ExecutorService` factory methods.
*/
export class EvenMoreExecutors {
  /**
   * Creates a thread pool that creates new threads as needed up to
   * a maximum number of threads, but will reuse previously constructed
   * threads when they are available.
   *
   * @param minThreads the minimum number of threads to have at a given time
   * @param maxThreads the maximum number of threads to have at a given time
   * @param queueSize  the size of the queue before new submissions are rejected
   * @return the newly created thread pool
  */
  static newBoundedCachedThreadPool(minThreads: number, maxThreads: number, queueSize: number): ExecutorService;
  /**
   * Creates a thread pool that creates new threads as needed up to
   * a maximum number of threads, but will reuse previously constructed
   * threads when they are available.
   *
   * @param minThreads   the minimum number of threads to have at a given time
   * @param maxThreads   the maximum number of threads to have at a given time
   * @param queueSize    the size of the queue before new submissions are rejected
   * @param threadFormat thread name formatter
   * @return the newly created thread pool
  */
  static newBoundedCachedThreadPool(minThreads: number, maxThreads: number, queueSize: number, threadFormat: string): ExecutorService;
}

}
declare module 'com.sk89q.worldedit.internal.expression.LocalSlot' {
import { LocalSlot } from 'com.sk89q.worldedit.internal.expression';
export class Constant extends LocalSlot {
  constructor(value: number);
  getValue(): number;
  toString(): string;
}
export class Variable extends LocalSlot {
  constructor(value: number);
  setValue(value: number);
  getValue(): number;
  toString(): string;
}

}
declare module 'com.sk89q.worldedit.internal.command.exception' {
import { ExceptionHandler } from 'com.sk89q.worldedit.internal.command.exception.ExceptionConverterHelper';
import { InvalidToolBindException } from 'com.sk89q.worldedit.command.tool';
import { List } from 'java.util';
import { UsageException } from 'org.enginehub.piston.exception';
import { Throwable, NumberFormatException } from 'java.lang';
import { Pattern } from 'java.util.regex';
import { FilenameResolutionException, InvalidFilenameException, FileSelectionAbortedException } from 'com.sk89q.worldedit.util.io.file';
import { RegionOperationException } from 'com.sk89q.worldedit.regions';
import { DisallowedUsageException, NoMatchException } from 'com.sk89q.worldedit.extension.input';
import { WorldEdit, EmptyClipboardException, MaxBrushRadiusException, IncompleteRegionException, MaxRadiusException, InvalidItemException, WorldEditException, MissingWorldException, MaxChangedBlocksException, UnknownDirectionException } from 'com.sk89q.worldedit';
import { ExpressionException } from 'com.sk89q.worldedit.internal.expression';
import { InsufficientArgumentsException } from 'com.sk89q.worldedit.command';
/**
 * An implementation of an {@link ExceptionConverter} that automatically calls
 * the correct method defined on this object.
 *
 * Only public methods will be used. Methods will be called in order of decreasing
 * levels of inheritance (between classes where one inherits the other). For two
 * different inheritance branches, the order between them is undefined.
*/
export class ExceptionConverterHelper extends ExceptionConverter {
  constructor();
  /**
   * Attempt to convert the given throwable into a {@link CommandException}.
   *
   * If the exception is not recognized, then nothing should be thrown.
   *
   * @param t the throwable
   * @throws CommandException a command exception
  */
  convert(t: Throwable): void;
}
/**
 * Used to convert a recognized {@link Throwable} into an appropriate
 * {@link CommandException}.
 *
 * Methods may throw relevant exceptions that are not caught by the command manager,
 * but translate into reasonable exceptions for an application. However, unknown exceptions are
 * normally simply wrapped in a {@link CommandExecutionException} and bubbled up. Only
 * normal {@link CommandException}s will be printed correctly, so a converter translates
 * one of these unknown exceptions into an appropriate {@link CommandException}.
 *
 * This also allows the code calling the command to not need be aware of these
 * application-specific exceptions, as they will all be converted to
 * {@link CommandException}s that are handled normally.
*/
export class ExceptionConverter {
  /**
   * Attempt to convert the given throwable into a {@link CommandException}.
   *
   * If the exception is not recognized, then nothing should be thrown.
   *
   * @param t the throwable
   * @throws CommandException a command exception
  */
  convert(t: Throwable): void;
}
/**
 * converts WorldEdit exceptions and converts them into {@link CommandException}s.
*/
export class WorldEditExceptionConverter extends ExceptionConverterHelper {
  constructor(worldEdit: WorldEdit);
  convert(e: NumberFormatException): void;
  convert(e: IncompleteRegionException): void;
  convert(e: MissingWorldException): void;
  convert(e: NoMatchException): void;
  convert(e: InvalidItemException): void;
  convert(e: DisallowedUsageException): void;
  convert(e: MaxChangedBlocksException): void;
  convert(e: MaxBrushRadiusException): void;
  convert(e: MaxRadiusException): void;
  convert(e: UnknownDirectionException): void;
  convert(e: InsufficientArgumentsException): void;
  convert(e: RegionOperationException): void;
  convert(e: ExpressionException): void;
  convert(e: EmptyClipboardException): void;
  convert(e: InvalidFilenameException): void;
  convert(e: FilenameResolutionException): void;
  convert(e: InvalidToolBindException): void;
  convert(e: FileSelectionAbortedException): void;
  convert(e: WorldEditException): void;
  convert(e: UsageException): void;
  /**
   * Attempt to convert the given throwable into a {@link CommandException}.
   *
   * If the exception is not recognized, then nothing should be thrown.
   *
   * @param t the throwable
   * @throws CommandException a command exception
  */
  convert(t: Throwable): void;
}
/**
 * Denotes a match of an exception.
*/
export class ExceptionMatch {

}

}
declare module 'com.sk89q.worldedit.extension.factory.parser.mask' {
import { List } from 'java.util';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { Stream } from 'java.util.stream';
import { ParserContext } from 'com.sk89q.worldedit.extension.input';
import { WorldEdit } from 'com.sk89q.worldedit';
import { InputParser, SimpleInputParser } from 'com.sk89q.worldedit.internal.registry';
export class LazyRegionMaskParser extends SimpleInputParser<Mask> {
  constructor(worldEdit: WorldEdit);
  getMatchedAliases(): string[];
  parseFromSimpleInput(input: string, context: ParserContext): Mask;
}
export class BlockStateMaskParser extends InputParser<Mask> {
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): Stream<string>;
  parseFromInput(input: string, context: ParserContext): Mask;
}
export class BlockCategoryMaskParser extends InputParser<Mask> {
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): Stream<string>;
  parseFromInput(input: string, context: ParserContext): Mask;
}
export class AirMaskParser extends SimpleInputParser<Mask> {
  constructor(worldEdit: WorldEdit);
  getMatchedAliases(): string[];
  parseFromSimpleInput(input: string, context: ParserContext): Mask;
}
export class BiomeMaskParser extends InputParser<Mask> {
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): Stream<string>;
  parseFromInput(input: string, context: ParserContext): Mask;
}
export class SolidMaskParser extends SimpleInputParser<Mask> {
  constructor(worldEdit: WorldEdit);
  getMatchedAliases(): string[];
  parseFromSimpleInput(input: string, context: ParserContext): Mask;
}
export class NegateMaskParser extends InputParser<Mask> {
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): Stream<string>;
  parseFromInput(input: string, context: ParserContext): Mask;
}
export class OffsetMaskParser extends InputParser<Mask> {
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): Stream<string>;
  parseFromInput(input: string, context: ParserContext): Mask;
}
/**
 * Parses mask input strings.
*/
export class BlocksMaskParser extends InputParser<Mask> {
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): Stream<string>;
  parseFromInput(component: string, context: ParserContext): Mask;
}
export class ExpressionMaskParser extends InputParser<Mask> {
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): Stream<string>;
  parseFromInput(input: string, context: ParserContext): Mask;
}
export class NoiseMaskParser extends InputParser<Mask> {
  constructor(worldEdit: WorldEdit);
  getSuggestions(input: string): Stream<string>;
  parseFromInput(input: string, context: ParserContext): Mask;
}
export class ExistingMaskParser extends SimpleInputParser<Mask> {
  constructor(worldEdit: WorldEdit);
  getMatchedAliases(): string[];
  parseFromSimpleInput(input: string, context: ParserContext): Mask;
}
export class ExposedMaskParser extends SimpleInputParser<Mask> {
  constructor(worldEdit: WorldEdit);
  getMatchedAliases(): string[];
  parseFromSimpleInput(input: string, context: ParserContext): Mask;
}
export class RegionMaskParser extends SimpleInputParser<Mask> {
  constructor(worldEdit: WorldEdit);
  getMatchedAliases(): string[];
  parseFromSimpleInput(input: string, context: ParserContext): Mask;
}

}
declare module 'com.sk89q.worldedit.internal.expression.invoke' {
import { RuntimeException } from 'java.lang';
import { AllStatementsContext } from 'com.sk89q.worldedit.antlr.ExpressionParser';
import { MethodType, MethodHandle } from 'java.lang.invoke';
import { Functions, CompiledExpression } from 'com.sk89q.worldedit.internal.expression';
/**
 * Compiles an expression from an AST into {@link MethodHandle}s.
*/
export class ExpressionCompiler {
  compileExpression(root: AllStatementsContext, functions: Functions): CompiledExpression;
}
/**
 * Thrown when a return is encountered, to pop the stack frames and return the value easily.
 *
 * 
 * Should be caught by the executor.
 * 
*/
export class ReturnException extends RuntimeException {
  constructor(result: number);
  getResult(): number;
}

}
declare module 'com.sk89q.worldedit.scripting' {
import { Set, List, Map } from 'java.util';
import { File } from 'java.io';
import { WorldEdit, LocalSession, EditSession, LocalConfiguration } from 'com.sk89q.worldedit';
import { Pattern } from 'com.sk89q.worldedit.function.pattern';
import { Platform } from 'com.sk89q.worldedit.extension.platform';
import { Player } from 'com.sk89q.worldedit.entity';
import { BaseBlock } from 'com.sk89q.worldedit.world.block';
export class RhinoCraftScriptEngine extends CraftScriptEngine {
  setTimeLimit(timeLimit: number);
  getTimeLimit(): number;
  evaluate(script: string, filename: string, args: Map<string, any>): any;
}
export class CraftScriptEnvironment {
  constructor(controller: WorldEdit, server: Platform, config: LocalConfiguration, session: LocalSession, player: Player);
}
/**
 * The context given to scripts.
*/
export class CraftScriptContext extends CraftScriptEnvironment {
  constructor(controller: WorldEdit, server: Platform, config: LocalConfiguration, session: LocalSession, player: Player, args: string[]);
  /**
   * Get an edit session. Every subsequent call returns a new edit session.
   * Usually you only need to use one edit session.
   *
   * @return an edit session
  */
  remember(): EditSession;
  /**
   * Get the player.
   *
   * @return the calling player
  */
  getPlayer(): Player;
  /**
   * Get the player's session.
   *
   * @return a session
  */
  getSession(): LocalSession;
  /**
   * Get the configuration for WorldEdit.
   *
   * @return the configuration
  */
  getConfiguration(): LocalConfiguration;
  /**
   * Get a list of edit sessions that have been created.
   *
   * @return a list of created `EditSession`s
  */
  getEditSessions(): EditSession[];
  /**
   * Print a regular message to the user.
   *
   * @param message a message
  */
  print(message: string): void;
  /**
   * Print an error message to the user.
   *
   * @param message a message
  */
  error(message: string): void;
  /**
   * Print a raw message to the user.
   *
   * @param message a message
  */
  printRaw(message: string): void;
  /**
   * Checks to make sure that there are enough but not too many arguments.
   *
   * @param min a number of arguments
   * @param max -1 for no maximum
   * @param usage usage string
   * @throws InsufficientArgumentsException if the arguments are not "sufficiently" good
  */
  checkArgs(min: number, max: number, usage: string): void;
  /**
   * Immediately terminate execution of the script, but without a failure message.
   *
   * @implNote This exits by throwing an exception, which if caught will prevent
   *     the script from exiting
  */
  exit(): void;
  /**
   * Get an item from an item name or an item ID number.
   *
   * @param input input to parse
   * @param allAllowed true to ignore blacklists
   * @return a block
   * @throws NoMatchException if no block was found
   * @throws DisallowedUsageException if the block is disallowed
  */
  getBlock(input: string, allAllowed: boolean): BaseBlock;
  /**
   * Get a block.
   *
   * @param id the type Id
   * @return a block
   * @throws NoMatchException if no block was found
   * @throws DisallowedUsageException if the block is disallowed
  */
  getBlock(id: string): BaseBlock;
  /**
   * Get a list of blocks as a set. This returns a Pattern.
   *
   * @param list the input
   * @return pattern
   * @throws NoMatchException if the pattern was invalid
   * @throws DisallowedUsageException if the block is disallowed
  */
  getBlockPattern(list: string): Pattern;
  /**
   * Get a list of blocks as a set.
   *
   * @param list a list
   * @param allBlocksAllowed true if all blocks are allowed
   * @return set
   * @throws NoMatchException if the blocks couldn't be found
   * @throws DisallowedUsageException if the block is disallowed
  */
  getBlocks(list: string, allBlocksAllowed: boolean): Set<BaseBlock>;
  /**
   * Gets the path to a file for opening. This method will check to see if the
   * filename has valid characters and has an extension. It also prevents
   * directory traversal exploits by checking the root directory and the file
   * directory. On success, a `java.io.File` object will be
   * returned.
   *
   * Use this method if you need to read a file from a directory.
   *
   * @param folder sub-directory to look in
   * @param filename filename (user-submitted)
   * @param defaultExt default extension to append if there is none
   * @param exts list of extensions for file open dialog, null for no filter
   * @return a file
   * @throws FilenameException if there is a problem with the name of the file
  */
  getSafeOpenFile(folder: string, filename: string, defaultExt: string, ...exts: string[]): File;
  /**
   * Gets the path to a file for saving. This method will check to see if the
   * filename has valid characters and has an extension. It also prevents
   * directory traversal exploits by checking the root directory and the file
   * directory. On success, a `java.io.File` object will be
   * returned.
   *
   * Use this method if you need to read a file from a directory.
   *
   * @param folder sub-directory to look in
   * @param filename filename (user-submitted)
   * @param defaultExt default extension to append if there is none
   * @param exts list of extensions for file save dialog, null for no filter
   * @return a file
   * @throws FilenameException if there is a problem with the name of the file
  */
  getSafeSaveFile(folder: string, filename: string, defaultExt: string, ...exts: string[]): File;
}
export class CraftScriptEngine {
  setTimeLimit(timeLimit: number);
  getTimeLimit(): number;
  evaluate(script: string, filename: string, args: Map<string, any>): any;
}

}
declare module 'com.sk89q.worldedit.util.io' {
import { Suppressor } from 'com.sk89q.worldedit.util.io.Closer';
import { Deque } from 'java.util';
import { RuntimeException, Throwable, Class } from 'java.lang';
import { URL } from 'java.net';
import { InputStream, Closeable } from 'java.io';
import { WorldEdit } from 'com.sk89q.worldedit';
import { ZipFile } from 'java.util.zip';
import { Path } from 'java.nio.file';
/**
 * An abstract loader that handles loading resources from bundled URLs or local
 * files.
*/
export class ResourceLoader {
  /**
   * Gets the bundled resource URL by name, relative to the provided class.
   *
   * 
   * The path name must not start with `/`.
   * 
   *
   * @param clazz The class to search relative to
   * @param pathName The path name
   * @return The URL to this bundled resource
   * @throws IOException if an IO issue occurs
  */
  getResource(clazz: Class<any>, pathName: string): URL | null;
  /**
   * Gets the bundled resource URL by name.
   *
   * 
   * The path name must not start with `/`. It is always
   * absolute.
   * 
   *
   * @param pathName The path name
   * @return The URL to this bundled resource
   * @throws IOException if an IO issue occurs
  */
  getRootResource(pathName: string): URL | null;
  /**
   * Gets the {@link Path} reference to this local resource. The file may not
   * exist.
   *
   * @param pathName The path name
   * @return The path reference
  */
  getLocalResource(pathName: string): Path;
}
export class Closer extends Closeable {
  /**
   * Creates a new {@link Closer}.
  */
  static create(): Closer;
  register<C>(closeable: C): C;
  /**
   * Registers the given `zipFile` to be closed when this `Closer` is
   * {@linkplain #close closed}.
   *
   * @return the given `closeable`
  */
  register<Z>(zipFile: Z): Z;
  /**
   * Call {@link #rethrow(Throwable)} with the given exception, but before throwing the exception,
   * also close this Closer. Exceptions from closing are added to `t` as suppressed
   * exceptions.
   *
   * @param t the throwable that should be re-thrown
   * @throws IOException if `t` is an IOException, or one occurs
  */
  rethrowAndClose(t: Throwable): RuntimeException;
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
}
export class ForwardSeekableInputStream extends InputStream {
  constructor(parent: InputStream);
  read(): number;
  available(): number;
  close(): void;
  mark(readlimit: number): void;
  markSupported(): boolean;
  read(b: number[], off: number, len: number): number;
  read(b: number[]): number;
  reset(): void;
  skip(n: number): number;
  seek(n: number): void;
}
export class WorldEditResourceLoader extends ResourceLoader {
  constructor(worldEdit: WorldEdit);
  /**
   * Gets the {@link Path} reference to this local resource. The file may not
   * exist.
   *
   * @param pathName The path name
   * @return The path reference
  */
  getLocalResource(pathName: string): Path;
}

}
declare module 'com.sk89q.worldedit.command.util.CreatureButcher' {
export class Flags {
  static readonly PETS: number;
  static readonly NPCS: number;
  static readonly ANIMALS: number;
  static readonly GOLEMS: number;
  static readonly AMBIENT: number;
  static readonly TAGGED: number;
  static readonly ARMOR_STAND: number;
  static readonly WATER: number;
  static readonly FRIENDLY: number;
}

}
declare module 'com.sk89q.worldedit.util.collection.DoubleArrayList' {
import { Iterator, ListIterator } from 'java.util';
import { Entry } from 'java.util.Map';
/**
 * Entry iterator.
*/
export class ForwardEntryIterator<T> extends Iterator<Entry<A, B>> {
  constructor(keyIterator: Iterator<A>, valueIterator: Iterator<B>);
  hasNext(): boolean;
  next(): Entry<A, B>;
  remove(): void;
}
/**
 * Entry iterator.
*/
export class ReverseEntryIterator<T> extends Iterator<Entry<A, B>> {
  constructor(keyIterator: ListIterator<A>, valueIterator: ListIterator<B>);
  hasNext(): boolean;
  next(): Entry<A, B>;
  remove(): void;
}
/**
 * Class to masquerade as Map.Entry.
*/
export class Entry<C, D> extends Entry<A, B> {
  getKey(): A;
  getValue(): B;
  setValue(value: B);
}

}
declare module 'com.sk89q.worldedit.extent.cache' {
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { CachedBlock } from 'com.sk89q.worldedit.extent.cache.LastAccessExtentCache';
import { AbstractDelegateExtent, Extent } from 'com.sk89q.worldedit.extent';
import { BlockState, BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * Returns the same cached {@link BlockState} for repeated calls to
 * {@link #getBlock(BlockVector3)} with the same position.
*/
export class LastAccessExtentCache extends AbstractDelegateExtent {
  /**
   * Create a new instance.
   *
   * @param extent the extent
  */
  constructor(extent: Extent);
  getBlock(position: BlockVector3): BlockState;
  getFullBlock(position: BlockVector3): BaseBlock;
  setBlock<T>(location: BlockVector3, block: T): boolean;
}

}
declare module 'com.sk89q.worldedit.event.platform' {
import { List } from 'java.util';
import { Enum } from 'java.lang';
import { SessionKey } from 'com.sk89q.worldedit.session';
import { Direction, Location } from 'com.sk89q.worldedit.util';
import { Substring } from 'com.sk89q.worldedit.internal.util';
import { LocalConfiguration } from 'com.sk89q.worldedit';
import { Cancellable, Event, AbstractCancellable } from 'com.sk89q.worldedit.event';
import { Platform, Actor } from 'com.sk89q.worldedit.extension.platform';
import { Player } from 'com.sk89q.worldedit.entity';
/**
 * Posted when suggestions for auto-completion are requested for command input.
*/
export class CommandSuggestionEvent extends Event {
  /**
   * Create a new instance.
   *
   * @param actor the player
   * @param arguments the arguments
  */
  constructor(actor: Actor, arguments: string);
  /**
   * Get the actor that issued the command.
   *
   * @return the actor that issued the command
  */
  getActor(): Actor;
  /**
   * Get the arguments.
   *
   * @return the arguments
  */
  getArguments(): string;
  /**
   * Get the list of suggestions that are to be presented.
   *
   * 
   *     Each Substring holds the replacement as the substring,
   *     and the replacement range as the original substring range.
   * 
   *
   * @return the list of suggestions
  */
  getSuggestions(): Substring[];
  /**
   * Set the list of suggestions that are to be presented.
   *
   * @param suggestions the list of suggestions
  */
  setSuggestions(suggestions: Substring[]);
}
/**
 * Raised when a platform needs to retract all registered data, e.g. due to a reload.
*/
export class PlatformUnreadyEvent extends PlatformEvent {
  constructor(platform: Platform);
}
/**
 * Raised whenever a player sends input.
*/
export class PlayerInputEvent extends Event {
  /**
   * Create a new event.
   *
   * @param player the player
   * @param inputType the input type
  */
  constructor(player: Player, inputType: InputType);
  /**
   * Get the player that sent the input.
   *
   * @return the player
  */
  getPlayer(): Player;
  /**
   * Get the type of input sent.
   *
   * @return the input sent
  */
  getInputType(): InputType;
  /**
   * Returns whether the event has been cancelled.
   *
   * @return true if cancelled
  */
  isCancelled(): boolean;
  /**
   * Set whether the event has been cancelled.
   *
   * @param cancelled true if cancelled
  */
  setCancelled(cancelled: boolean): void;
}
export interface PlayerInputEvent extends Event, Cancellable {}
/**
 * An event fired when a session becomes idle.
 *
 * This can happen when a player leaves the server.
*/
export class SessionIdleEvent extends Event {
  constructor(key: SessionKey);
  /**
   * Get a key identifying the session that has become idle.
   *
   * @return the key for the session
  */
  getKey(): SessionKey;
}
/**
 * The type of input sent.
*/
export class InputType extends Enum<InputType> {
  /**
   * Left click.
  */
  static readonly PRIMARY: InputType;
  /**
   * Right click.
  */
  static readonly SECONDARY: InputType;
  static valueOf(name: string): InputType;
  static values(): InputType[];
}
/**
 * Raised when the configuration has been loaded or re-loaded.
*/
export class ConfigurationLoadEvent extends Event {
  /**
   * Create a new instance.
   *
   * @param configuration the new configuration
  */
  constructor(configuration: LocalConfiguration);
  /**
   * Get the configuration.
   *
   * @return the configuration
  */
  getConfiguration(): LocalConfiguration;
}
export class PlatformEvent extends Event {
  /**
   * Get the platform for this event.
   *
   * @return the platform
  */
  getPlatform(): Platform;
}
/**
 * Called when a block is interacted with.
*/
export class BlockInteractEvent extends Event {
  /**
   * Create a new event.
   *
   * @param cause the causing actor
   * @param location the location of the block
   * @param type the type of interaction
  */
  constructor(cause: Actor, location: Location, type: Interaction);
  /**
   * Create a new event.
   *
   * @param cause the causing actor
   * @param location the location of the block
   * @param face the face of the block that was interacted with
   * @param type the type of interaction
  */
  constructor(cause: Actor, location: Location, face: Direction | null, type: Interaction);
  /**
   * Get the cause of this event.
   *
   * @return the cause
  */
  getCause(): Actor;
  /**
   * Get the location of the block that was interacted with.
   *
   * @return the location
  */
  getLocation(): Location;
  /**
   * Get the face of the block that was interacted with.
   *
   * @return The interacted face
  */
  getFace(): Direction | null;
  /**
   * Get the type of interaction.
   *
   * @return the type of interaction
  */
  getType(): Interaction;
  /**
   * Returns whether the event has been cancelled.
   *
   * @return true if cancelled
  */
  isCancelled(): boolean;
  /**
   * Set whether the event has been cancelled.
   *
   * @param cancelled true if cancelled
  */
  setCancelled(cancelled: boolean): void;
}
export interface BlockInteractEvent extends Event, Cancellable {}
/**
 * Fired when configuration has been loaded and the platform is in the
 * intialization stage.
 *
 * This event is fired once.
*/
export class PlatformInitializeEvent extends Event {

}
/**
 * Fired by a platform when it believes all available platforms should be registered.
*/
export class PlatformsRegisteredEvent extends Event {

}
/**
 * This class is currently only for internal use. Do not post or catch this event.
*/
export class CommandEvent extends AbstractCancellable {
  /**
   * Create a new instance.
   *
   * @param actor the player
   * @param arguments the arguments
  */
  constructor(actor: Actor, arguments: string);
  /**
   * Get the actor that issued the command.
   *
   * @return the actor that issued the command
  */
  getActor(): Actor;
  /**
   * Get the arguments.
   *
   * @return the arguments
  */
  getArguments(): string;
}
/**
 * Raised when a platform has finished loading its data.
*/
export class PlatformReadyEvent extends PlatformEvent {
  constructor(platform: Platform);
}
/**
 * The type of interaction.
*/
export class Interaction extends Enum<Interaction> {
  /**
   * Refers to primary input usage (left click).
  */
  static readonly HIT: Interaction;
  /**
   * Refers to secondary input usage (right click).
  */
  static readonly OPEN: Interaction;
  static valueOf(name: string): Interaction;
  static values(): Interaction[];
}

}
declare module 'com.sk89q.worldedit.util.Direction' {
/**
 * Flags to use with {@link #findClosest(Vector3, int)}.
*/
export class Flag {
  static CARDINAL: number;
  static ORDINAL: number;
  static SECONDARY_ORDINAL: number;
  static UPRIGHT: number;
  static ALL: number;
}

}
declare module 'com.sk89q.worldedit.command.argument' {
import { List } from 'java.util';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { World } from 'com.sk89q.worldedit.world';
import { ConversionResult, ArgumentConverter } from 'org.enginehub.piston.converter';
import { InjectedValueAccess } from 'org.enginehub.piston.inject';
import { AbstractFactory } from 'com.sk89q.worldedit.internal.registry';
import { Enum } from 'java.lang';
import { ZonedDateTime } from 'java.time';
import { Direction, SideEffect } from 'com.sk89q.worldedit.util';
import { CommandManager } from 'org.enginehub.piston';
import { TextComponent, Component } from 'com.sk89q.worldedit.util.formatting.text';
import { ParserContext } from 'com.sk89q.worldedit.extension.input';
import { EntityRemover } from 'com.sk89q.worldedit.command.util';
import { WorldEdit } from 'com.sk89q.worldedit';
import { Function, Consumer } from 'java.util.function';
import { Registry } from 'com.sk89q.worldedit.registry';
export class DirectionVectorConverter extends AbstractDirectionConverter<BlockVector3> {
  constructor(worldEdit: WorldEdit, includeDiagonals: boolean);
  static register(worldEdit: WorldEdit, commandManager: CommandManager): void;
}
export class Chunk3dVectorConverter<C, T> extends ArgumentConverter<T> {
  static register(commandManager: CommandManager): void;
  describeAcceptableArguments(): Component;
  convert(argument: string, context: InjectedValueAccess): ConversionResult<T>;
}
export class RegionFactoryConverter {
  static register(commandManager: CommandManager): void;
}
export class BooleanConverter {
  static register(commandManager: CommandManager): void;
}
export class FactoryConverter<T> extends ArgumentConverter<T> {
  static register(worldEdit: WorldEdit, commandManager: CommandManager): void;
  convert(argument: string, context: InjectedValueAccess): ConversionResult<T>;
  getSuggestions(input: string, context: InjectedValueAccess): string[];
  describeAcceptableArguments(): Component;
}
export class WorldConverter extends ArgumentConverter<World> {
  static register(commandManager: CommandManager): void;
  describeAcceptableArguments(): Component;
  getSuggestions(input: string, context: InjectedValueAccess): string[];
  convert(s: string, injectedValueAccess: InjectedValueAccess): ConversionResult<World>;
}
export class VectorConverter<C, T> extends ArgumentConverter<T> {
  static readonly BLOCK_VECTOR_3_CONVERTER: VectorConverter<number, BlockVector3>;
  static register(commandManager: CommandManager): void;
  describeAcceptableArguments(): Component;
  convert(argument: string, context: InjectedValueAccess): ConversionResult<T>;
}
/**
 * Converter for handling default heights as the
 * {@linkplain LocalConfiguration#defaultVerticalHeight currently configured
 * height}.
*/
export class HeightConverter extends ArgumentConverter<number> {
  /**
   * The value that converts to the default vertical height.
  */
  static readonly DEFAULT_VALUE: string;
  static register(commandManager: CommandManager): void;
  describeAcceptableArguments(): Component;
  convert(argument: string, context: InjectedValueAccess): ConversionResult<number>;
}
export class SideEffectConverter extends ArgumentConverter<SideEffect> {
  static register(commandManager: CommandManager): void;
  describeAcceptableArguments(): Component;
  getSuggestions(input: string, context: InjectedValueAccess): string[];
  convert(argument: string, context: InjectedValueAccess): ConversionResult<SideEffect>;
}
export class SelectorChoice extends Enum<SelectorChoice> {
  static readonly CUBOID: SelectorChoice;
  static readonly EXTEND: SelectorChoice;
  static readonly POLY: SelectorChoice;
  static readonly ELLIPSOID: SelectorChoice;
  static readonly SPHERE: SelectorChoice;
  static readonly CYL: SelectorChoice;
  static readonly CONVEX: SelectorChoice;
  static readonly HULL: SelectorChoice;
  static readonly POLYHEDRON: SelectorChoice;
  static readonly LIST: SelectorChoice;
  static valueOf(name: string): SelectorChoice;
  static values(): SelectorChoice[];
}
export class RegistryConverter<V> extends ArgumentConverter<V> {
  static register(commandManager: CommandManager): void;
  describeAcceptableArguments(): Component;
  convert(argument: string, injectedValueAccess: InjectedValueAccess): ConversionResult<V>;
  getSuggestions(input: string, context: InjectedValueAccess): string[];
}
export class EntityRemoverConverter extends ArgumentConverter<EntityRemover> {
  static register(commandManager: CommandManager): void;
  describeAcceptableArguments(): Component;
  getSuggestions(input: string, context: InjectedValueAccess): string[];
  convert(argument: string, context: InjectedValueAccess): ConversionResult<EntityRemover>;
}
export class OffsetConverter extends ArgumentConverter<BlockVector3> {
  static register(worldEdit: WorldEdit, commandManager: CommandManager): void;
  describeAcceptableArguments(): Component;
  getSuggestions(input: string, context: InjectedValueAccess): string[];
  convert(input: string, context: InjectedValueAccess): ConversionResult<BlockVector3>;
}
export class AbstractDirectionConverter<D> extends ArgumentConverter<D> {
  convert(argument: string, context: InjectedValueAccess): ConversionResult<D>;
  describeAcceptableArguments(): Component;
  getSuggestions(input: string, context: InjectedValueAccess): string[];
}
export class DirectionConverter extends AbstractDirectionConverter<Direction> {
  static register(worldEdit: WorldEdit, commandManager: CommandManager): void;
}
export class ZonedDateTimeConverter extends ArgumentConverter<ZonedDateTime> {
  static register(commandManager: CommandManager): void;
  describeAcceptableArguments(): Component;
  convert(argument: string, context: InjectedValueAccess): ConversionResult<ZonedDateTime>;
}
export class CommaSeparatedValuesConverter<T> extends ArgumentConverter<T> {
  static wrap<T>(delegate: ArgumentConverter<T>): CommaSeparatedValuesConverter<T>;
  static wrapAndLimit<T>(delegate: ArgumentConverter<T>, maximum: number): CommaSeparatedValuesConverter<T>;
  describeAcceptableArguments(): Component;
  getSuggestions(input: string, context: InjectedValueAccess): string[];
  convert(argument: string, context: InjectedValueAccess): ConversionResult<T>;
}
export class EnumConverter {
  static register(commandManager: CommandManager): void;
}
/**
 * Key-interface for {@link InjectedValueAccess} for the String arguments.
*/
export class Arguments {
  get(): string;
}

}
declare module 'com.sk89q.worldedit.world.registry.BundledBlockData' {
import { SimpleBlockMaterial } from 'com.sk89q.worldedit.world.registry';
export class BlockEntry {
  localizedName: string;
}

}
declare module 'com.sk89q.worldedit.world.snapshot' {
import { ChunkStore } from 'com.sk89q.worldedit.world.storage';
import { Calendar, ArrayList, List, Map } from 'java.util';
import { Comparable, Exception } from 'java.lang';
import { ZonedDateTime } from 'java.time';
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { Pattern } from 'java.util.regex';
import { Region } from 'com.sk89q.worldedit.regions';
import { File } from 'java.io';
import { EditSession } from 'com.sk89q.worldedit';
/**
 * A repository contains zero or more snapshots.
*/
export class SnapshotRepository {
  /**
   * Create a new instance of a repository.
   *
   * @param dir the directory
  */
  constructor(dir: File);
  /**
   * Create a new instance of a repository.
   *
   * @param dir the directory
  */
  constructor(dir: string);
  /**
   * Get a list of snapshots in a directory. The newest snapshot is
   * near the top of the array.
   *
   * @param newestFirst true to get the newest first
   * @return a list of snapshots
  */
  getSnapshots(newestFirst: boolean, worldName: string): Snapshot[];
  /**
   * Get the first snapshot after a date.
   *
   * @param date a date
   * @return a snapshot or null
  */
  getSnapshotAfter(date: ZonedDateTime, world: string): Snapshot | null;
  /**
   * Get the first snapshot before a date.
   *
   * @param date a date
   * @return a snapshot or null
  */
  getSnapshotBefore(date: ZonedDateTime, world: string): Snapshot | null;
  /**
   * Get the default snapshot.
   *
   * @param world the world name
   * @return a snapshot or null
  */
  getDefaultSnapshot(world: string): Snapshot | null;
  /**
   * Check to see if a snapshot is valid.
   *
   * @param snapshot a snapshot name
   * @return whether it is a valid snapshot
  */
  isValidSnapshotName(snapshot: string): boolean;
  /**
   * Get a snapshot.
   *
   * @param name the name of the snapshot
   * @return a snapshot
   * @throws InvalidSnapshotException if the snapshot is invalid
  */
  getSnapshot(name: string): Snapshot;
  /**
   * Get the snapshot directory.
   *
   * @return a path
  */
  getDirectory(): File;
}
/**
 * A snapshot restore operation.
*/
export class SnapshotRestore {
  /**
   * Construct the snapshot restore operation.
   *
   * @param chunkStore The {@link ChunkStore} to restore from
   * @param editSession The {@link EditSession} to restore to
   * @param region The {@link Region} to restore to
  */
  constructor(chunkStore: ChunkStore, editSession: EditSession, region: Region);
  /**
   * Get the number of chunks that are needed.
   *
   * @return a number of chunks
  */
  getChunksAffected(): number;
  /**
   * Restores to world.
   *
   * @throws MaxChangedBlocksException if the max block change limit is exceeded
  */
  restore(): void;
  /**
   * Get a list of the missing chunks. restore() must have been called
   * already.
   *
   * @return a list of coordinates
  */
  getMissingChunks(): BlockVector2[];
  /**
   * Get a list of the chunks that could not have been loaded for other
   * reasons. restore() must have been called already.
   *
   * @return a list of coordinates
  */
  getErrorChunks(): BlockVector2[];
  /**
   * Checks to see where the backup succeeded in any capacity. False will
   * be returned if no chunk could be successfully loaded.
   *
   * @return true if there was total failure
  */
  hadTotalFailure(): boolean;
  /**
   * Get the last error message.
   *
   * @return a message
  */
  getLastErrorMessage(): string;
}
/**
 * A name parser attempts to make sense of a filename for a snapshot.
*/
export class SnapshotDateParser {
  /**
   * Attempt to detect a date from a file.
   *
   * @param file the file
   * @return date or null
  */
  detectDate(file: File): Calendar | null;
}
export class InvalidSnapshotException extends Exception {

}
export class ModificationTimerParser extends SnapshotDateParser {
  /**
   * Attempt to detect a date from a file.
   *
   * @param file the file
   * @return date or null
  */
  detectDate(file: File): Calendar;
}
/**
 * A snapshot is a backup.
*/
export class Snapshot extends Comparable<Snapshot> {
  /**
   * Construct a snapshot restoration operation.
   *
   * @param repo a repository
   * @param snapshot a snapshot name
  */
  constructor(repo: SnapshotRepository, snapshot: string);
  /**
   * Get a chunk store.
   *
   * @return a chunk store
   * @throws IOException if there is an error loading the chunk store
   * @throws DataException  if there is an error loading the chunk store
  */
  getChunkStore(): ChunkStore;
  /**
   * Check the zip/tar file it contains the given world.
   *
   * @return true if the zip/tar file contains the given world
  */
  containsWorld(worldname: string): boolean;
  /**
   * Get the snapshot's name.
   *
   * @return the name of the snapshot
  */
  getName(): string;
  /**
   * Get the file for the snapshot.
   *
   * @return path to the snapshot
  */
  getFile(): File;
  /**
   * Get the date associated with this snapshot.
   *
   * @return date for the snapshot
  */
  getDate(): ZonedDateTime;
  /**
   * Set the date of the snapshot.
   *
   * @param date the date of the snapshot
  */
  setDate(date: ZonedDateTime);
  compareTo(o: Snapshot): number;
  equals(o: any): boolean;
  hashCode(): number;
}
export class YYMMDDHHIISSParser extends SnapshotDateParser {
  /**
   * Attempt to detect a date from a file.
   *
   * @param file the file
   * @return date or null
  */
  detectDate(file: File): Calendar;
}

}
declare module 'com.sk89q.worldedit.util.WeightedChoice' {
/**
 * A tuple of choice and score.
 *
 * @param  the choice type
*/
export class Choice<T> {
  /**
   * Get the chosen value.
   *
   * @return the value
  */
  getValue(): T;
  /**
   * Get the score.
   *
   * @return the score
  */
  getScore(): number;
}

}
declare module 'com.sk89q.bukkit.util' {
import { CodeSource } from 'java.security';
import { Class } from 'java.lang';
import { List, Map } from 'java.util';
import { Command, CommandsManager } from 'com.sk89q.minecraft.util.commands';
/**
 * Validates that certain specified classes came from the same source as
 * a plugin.
*/
export class ClassSourceValidator {
  /**
   * Return a map of classes that been loaded from a different source.
   *
   * @param classes A list of classes to check
   * @return The results
  */
  findMismatches(classes: Class<any>[]): Map<Class<any>, CodeSource>;
  /**
   * Reports classes that have come from a different source.
   *
   * The warning is emitted to the log.
   *
   * @param classes The list of classes to check
  */
  reportMismatches(classes: Class<any>[]): void;
}
export class CommandInspector {

}
export class CommandsManagerRegistration extends CommandRegistration {
  register(clazz: Class<any>): boolean;
  registerAll(registered: Command[]): boolean;
  register(registered: CommandInfo[]): boolean;
}
export class CommandInfo {
  constructor(usage: string, desc: string, aliases: string[], registeredWith: any);
  constructor(usage: string, desc: string, aliases: string[], registeredWith: any, permissions: string[]);
  getAliases(): string[];
  getName(): string;
  getUsage(): string;
  getDesc(): string;
  getPermissions(): string[];
  getRegisteredWith(): any;
}
export class CommandRegistration {
  register(registered: CommandInfo[]): boolean;
  unregisterCommands(): boolean;
}

}
declare module 'com.sk89q.worldedit.extent.world' {
import { Set, List, Map } from 'java.util';
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { Region } from 'com.sk89q.worldedit.regions';
import { SideEffectSet, Location } from 'com.sk89q.worldedit.util';
import { World } from 'com.sk89q.worldedit.world';
import { Entity, BaseEntity } from 'com.sk89q.worldedit.entity';
import { Watchdog } from 'com.sk89q.worldedit.extension.platform';
import { BiomeType } from 'com.sk89q.worldedit.world.biome';
import { AbstractDelegateExtent, Extent } from 'com.sk89q.worldedit.extent';
import { BlockState, BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * Automatically loads chunks when blocks are accessed.
*/
export class ChunkLoadingExtent extends AbstractDelegateExtent {
  /**
   * Create a new instance.
   *
   * @param extent the extent
   * @param world the world
   * @param enabled true to enable
  */
  constructor(extent: Extent, world: World, enabled: boolean);
  /**
   * Create a new instance with chunk loading enabled.
   *
   * @param extent the extent
   * @param world the world
  */
  constructor(extent: Extent, world: World);
  setBlock<B>(location: BlockVector3, block: B): boolean;
  setBiome(position: BlockVector3, biome: BiomeType): boolean;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(location: BlockVector3, block: T): boolean;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector2, biome: BiomeType): boolean;
}
/**
 * Makes changes to the world as if a player had done so during survival mode.
 *
 * Note that this extent may choose to not call the underlying
 * extent and may instead call methods on the {@link World} that is passed
 * in the constructor. For that reason, if you wish to "catch" changes, you
 * should catch them before the changes reach this extent.
*/
export class SurvivalModeExtent extends AbstractDelegateExtent {
  /**
   * Create a new instance.
   *
   * @param extent the extent
   * @param world the world
  */
  constructor(extent: Extent, world: World);
  /**
   * Return whether changes to the world should be simulated with the
   * use of game tools (such as pickaxes) whenever possible and reasonable.
   *
   * For example, we could pretend that the act of setting a coal ore block
   * to air (nothing) was the act of a player mining that coal ore block
   * with a pickaxe, which would mean that a coal item would be dropped.
   *
   * @return true if tool use is to be simulated
  */
  hasToolUse(): boolean;
  /**
   * Set whether changes to the world should be simulated with the
   * use of game tools (such as pickaxes) whenever possible and reasonable.
   *
   * @param toolUse true if tool use is to be simulated
   * @see #hasToolUse() for an explanation
  */
  setToolUse(toolUse: boolean): void;
  hasStripNbt(): boolean;
  setStripNbt(stripNbt: boolean): void;
  setBlock<B>(location: BlockVector3, block: B): boolean;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(location: BlockVector3, block: T): boolean;
}
/**
 * An extent that sets blocks in the world, with a {@link SideEffectSet}.
*/
export class SideEffectExtent extends AbstractDelegateExtent {
  /**
   * Create a new instance.
   *
   * @param world the world
  */
  constructor(world: World);
  isPostEditSimulationEnabled(): boolean;
  setPostEditSimulationEnabled(enabled: boolean): void;
  getSideEffectSet(): SideEffectSet;
  setSideEffectSet(sideEffectSet: SideEffectSet);
  setBlock<B>(location: BlockVector3, block: B): boolean;
  commitRequired(): boolean;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(location: BlockVector3, block: T): boolean;
}
/**
 * Handles quirks when placing biomes.
*/
export class BiomeQuirkExtent extends AbstractDelegateExtent {
  /**
   * Create a new instance.
   *
   * @param extent the extent
  */
  constructor(extent: Extent);
  setBiome(position: BlockVector3, biome: BiomeType): boolean;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector2, biome: BiomeType): boolean;
}
/**
 * Handles various quirks when setting blocks, such as ice turning
 * into water or containers dropping their contents.
 *
 * @deprecated Handled by the world entirely now
*/
export class BlockQuirkExtent extends AbstractDelegateExtent {
  /**
   * Create a new instance.
   *
   * @param extent the extent
   * @param world the world
  */
  constructor(extent: Extent, world: World);
  setBlock<B>(position: BlockVector3, block: B): boolean;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(location: BlockVector3, block: T): boolean;
}
/**
 * Extent that ticks the watchdog before every world-affecting action.
*/
export class WatchdogTickingExtent extends AbstractDelegateExtent {
  /**
   * Create a new instance.
   *
   * @param extent the extent
   * @param watchdog the watchdog to reset
  */
  constructor(extent: Extent, watchdog: Watchdog);
  isEnabled(): boolean;
  setEnabled(enabled: boolean): void;
  setBlock<T>(location: BlockVector3, block: T): boolean;
  createEntity(location: Location, entity: BaseEntity): Entity | null;
  setBiome(position: BlockVector3, biome: BiomeType): boolean;
  getBlock(position: BlockVector3): BlockState;
  getFullBlock(position: BlockVector3): BaseBlock;
  getBiome(position: BlockVector3): BiomeType;
  getEntities(): Entity[];
  getEntities(region: Region): Entity[];
  /**
   * Get the biome at the given location.
   *
   * If there is no biome available, then the ocean biome should be
   * returned.
   *
   * @param position the (x, z) location to check the biome at
   * @return the biome at the location
   * @deprecated Biomes in Minecraft are 3D now, use {@link InputExtent#getBiome(BlockVector3)}
  */
  getBiome(position: BlockVector2): BiomeType;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector2, biome: BiomeType): boolean;
}

}
declare module 'com.sk89q.worldedit.event.extent' {
import { Stage } from 'com.sk89q.worldedit.EditSession';
import { List } from 'java.util';
import { World } from 'com.sk89q.worldedit.world';
import { Event } from 'com.sk89q.worldedit.event';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
import { TracingExtent, Extent } from 'com.sk89q.worldedit.extent';
/**
 * Raised (several times) when a new {@link EditSession} is being instantiated.
 *
 * Block loggers, as well as block set interceptors, can use this event to wrap
 * the given {@link Extent} with their own, which would allow them to intercept
 * all changes made to the world. For example, the code below would wrap the
 * existing extent with a custom one, and the custom extent would receive
 * all method calls before the extent fetched from
 * {@link #getExtent()} would.
 *
 *  * event.setExtent(new MyExtent(event.getExtent())
 * 
 *
 * This event is fired several times during the creation of a single
 * {@link EditSession}, but {@link #getStage()} will differ each time.
 * The stage determines at which point {@link Extent}s added to this event
 * will be called. For example, if you inject an extent when the stage
 * is set to {@link Stage#BEFORE_HISTORY}, then you can drop (or log) changes
 * before the change has reached the history, reordering, and actual change
 * extents, but that means that any changes made with
 * {@link EditSession#rawSetBlock(BlockVector3, BlockStateHolder)} will skip your
 * custom {@link Extent} because that method bypasses history (and reorder).
 * It is thus recommended that loggers intercept at {@link Stage#BEFORE_CHANGE}
 * and block interceptors intercept at BOTH {@link Stage#BEFORE_CHANGE} and
 * {@link Stage#BEFORE_HISTORY}.
*/
export class EditSessionEvent extends Event {
  /**
   * Create a new event.
   *
   * @param world the world
   * @param actor the actor, or null if there is no actor specified
   * @param maxBlocks the maximum number of block changes
   * @param stage the stage
  */
  constructor(world: World | null, actor: Actor, maxBlocks: number, stage: Stage);
  /**
   * Get the actor for this event.
   *
   * @return the actor, which may be null if unavailable
  */
  getActor(): Actor | null;
  /**
   * Get the world.
   *
   * @return the world
  */
  getWorld(): World | null;
  /**
   * Get the maximum number of blocks that may be set.
   *
   * @return the maximum number of blocks, which is -1 if unlimited
  */
  getMaxBlocks(): number;
  /**
   * Get the {@link Extent} that can be wrapped.
   *
   * @return the extent
  */
  getExtent(): Extent;
  /**
   * Get the stage that is being wrapped.
   *
   * @return the stage
  */
  getStage(): Stage;
  /**
   * Set a new extent that should be used. It should wrap the extent
   * returned from {@link #getExtent()}.
   *
   * @param extent the extent
  */
  setExtent(extent: Extent);
  /**
   * Set tracing enabled, with the current extent as the "base".
   *
   * Internal use only.
   * @param tracing if tracing is enabled
  */
  setTracing(tracing: boolean): void;
  /**
   * Get the current list of tracing extents.
   *
   * Internal use only.
  */
  getTracingExtents(): TracingExtent[];
  /**
   * Create a clone of this event with the given stage.
   *
   * @param stage the stage
   * @return a new event
  */
  clone(stage: Stage): EditSessionEvent;
}

}
declare module 'com.sk89q.jnbt' {
import { Class } from 'java.lang';
import { Collection, List, Map } from 'java.util';
import { Vector3 } from 'com.sk89q.worldedit.math';
import { DataOutputStream, InputStream, OutputStream, Closeable, DataInputStream } from 'java.io';
import { Charset } from 'java.nio.charset';
/**
 * Helps create list tags.
*/
export class ListTagBuilder {
  /**
   * Add the given tag.
   *
   * @param value the tag
   * @return this object
  */
  add(value: Tag): ListTagBuilder;
  /**
   * Add all the tags in the given list.
   *
   * @param value a list of tags
   * @return this object
  */
  addAll(value: Collection<Tag>): ListTagBuilder;
  /**
   * Build an unnamed list tag with this builder's entries.
   *
   * @return the new list tag
  */
  build(): ListTag;
  /**
   * Create a new builder instance.
   *
   * @return a new builder
  */
  static create(type: Class<Tag>): ListTagBuilder;
  /**
   * Create a new builder instance.
   *
   * @return a new builder
  */
  static createWith(...entries: Tag[]): ListTagBuilder;
}
/**
 * A class which holds constant values.
*/
export class NBTConstants {
  static readonly CHARSET: Charset;
  static readonly TYPE_END: number;
  static readonly TYPE_BYTE: number;
  static readonly TYPE_SHORT: number;
  static readonly TYPE_INT: number;
  static readonly TYPE_LONG: number;
  static readonly TYPE_FLOAT: number;
  static readonly TYPE_DOUBLE: number;
  static readonly TYPE_BYTE_ARRAY: number;
  static readonly TYPE_STRING: number;
  static readonly TYPE_LIST: number;
  static readonly TYPE_COMPOUND: number;
  static readonly TYPE_INT_ARRAY: number;
  static readonly TYPE_LONG_ARRAY: number;
  /**
   * Convert a type ID to its corresponding {@link Tag} class.
   *
   * @param id type ID
   * @return tag class
   * @throws IllegalArgumentException thrown if the tag ID is not valid
  */
  static getClassFromType(id: number): Class<Tag>;
}
/**
 * The `TAG_Int` tag.
*/
export class IntTag extends Tag {
  /**
   * Creates the tag with an empty name.
   *
   * @param value the value of the tag
  */
  constructor(value: number);
  getValue(): number;
  toString(): string;
}
/**
 * The `TAG_String` tag.
*/
export class StringTag extends Tag {
  /**
   * Creates the tag with an empty name.
   *
   * @param value the value of the tag
  */
  constructor(value: string);
  getValue(): string;
  toString(): string;
}
/**
 * The `TAG_Long` tag.
*/
export class LongTag extends Tag {
  /**
   * Creates the tag with an empty name.
   *
   * @param value the value of the tag
  */
  constructor(value: number);
  getValue(): number;
  toString(): string;
}
/**
 * This class reads NBT, or Named Binary Tag
 * streams, and produces an object graph of subclasses of the `Tag`
 * object.
 *
 * 
 * The NBT format was created by Markus Persson, and the specification may be
 * found at 
 * https://minecraft.gamepedia.com/NBT_format.
 * 
*/
export class NBTInputStream extends Closeable {
  /**
   * Creates a new `NBTInputStream`, which will source its data
   * from the specified input stream.
   *
   * @param is the input stream
  */
  constructor(is: InputStream);
  /**
   * Reads an NBT tag from the stream.
   *
   * @return The tag that was read.
   * @throws IOException if an I/O error occurs.
  */
  readNamedTag(): NamedTag;
  close(): void;
}
/**
 * The `TAG_Short` tag.
*/
export class ShortTag extends Tag {
  /**
   * Creates the tag with an empty name.
   *
   * @param value the value of the tag
  */
  constructor(value: number);
  getValue(): number;
  toString(): string;
}
/**
 * The `TAG_Long_Array` tag.
*/
export class LongArrayTag extends Tag {
  /**
   * Creates the tag with an empty name.
   *
   * @param value the value of the tag
  */
  constructor(value: number[]);
  getValue(): number[];
  toString(): string;
}
/**
 * The `TAG_Byte_Array` tag.
*/
export class ByteArrayTag extends Tag {
  /**
   * Creates the tag with an empty name.
   *
   * @param value the value of the tag
  */
  constructor(value: number[]);
  getValue(): number[];
  toString(): string;
}
/**
 * The `TAG_Double` tag.
*/
export class DoubleTag extends Tag {
  /**
   * Creates the tag with an empty name.
   *
   * @param value the value of the tag
  */
  constructor(value: number);
  getValue(): number;
  toString(): string;
}
/**
 * The `TAG_Int_Array` tag.
*/
export class IntArrayTag extends Tag {
  /**
   * Creates the tag with an empty name.
   *
   * @param value the value of the tag
  */
  constructor(value: number[]);
  getValue(): number[];
  toString(): string;
}
/**
 * The `TAG_Byte` tag.
*/
export class ByteTag extends Tag {
  /**
   * Creates the tag with an empty name.
   *
   * @param value the value of the tag
  */
  constructor(value: number);
  getValue(): number;
  toString(): string;
}
/**
 * A class which contains NBT-related utility methods.
 *
*/
export class NBTUtils {
  /**
   * Gets the type name of a tag.
   *
   * @param clazz the tag class
   * @return The type name.
  */
  static getTypeName(clazz: Class<Tag>): string;
  /**
   * Gets the type code of a tag class.
   *
   * @param clazz the tag class
   * @return The type code.
   * @throws IllegalArgumentException if the tag class is invalid.
  */
  static getTypeCode(clazz: Class<Tag>): number;
  /**
   * Gets the class of a type of tag.
   *
   * @param type the type
   * @return The class.
   * @throws IllegalArgumentException if the tag type is invalid.
  */
  static getTypeClass(type: number): Class<Tag>;
  /**
   * Read a vector from a list tag containing ideally three values: the
   * X, Y, and Z components.
   *
   * For values that are unavailable, their values will be 0.
   *
   * @param listTag the list tag
   * @return a vector
  */
  static toVector(listTag: ListTag): Vector3;
  /**
   * Get child tag of a NBT structure.
   *
   * @param items the map to read from
   * @param key the key to look for
   * @param expected the expected NBT class type
   * @return child tag
   * @throws InvalidFormatException if the format of the items is invalid
  */
  static getChildTag<T>(items: Map<string, Tag>, key: string, expected: Class<T>): T;
}
/**
 * This class writes NBT, or Named Binary Tag
 * `Tag` objects to an underlying `OutputStream`.
 *
 * 
 * The NBT format was created by Markus Persson, and the specification may be
 * found at 
 * https://minecraft.gamepedia.com/NBT_format.
 * 
*/
export class NBTOutputStream extends Closeable {
  /**
   * Creates a new `NBTOutputStream`, which will write data to the
   * specified underlying output stream.
   *
   * @param os
   *            The output stream.
   * @throws IOException
   *             if an I/O error occurs.
  */
  constructor(os: OutputStream);
  /**
   * Writes a tag.
   *
   * @param tag
   *            The tag to write.
   * @throws IOException
   *             if an I/O error occurs.
  */
  writeNamedTag(name: string, tag: Tag): void;
  close(): void;
}
/**
 * The `TAG_Compound` tag.
*/
export class CompoundTag extends Tag {
  /**
   * Creates the tag with an empty name.
   *
   * @param value the value of the tag
  */
  constructor(value: Map<string, Tag>);
  /**
   * Returns whether this compound tag contains the given key.
   *
   * @param key the given key
   * @return true if the tag contains the given key
  */
  containsKey(key: string): boolean;
  getValue(): Map<string, Tag>;
  /**
   * Return a new compound tag with the given values.
   *
   * @param value the value
   * @return the new compound tag
  */
  setValue(value: Map<string, Tag>);
  /**
   * Create a compound tag builder.
   *
   * @return the builder
  */
  createBuilder(): CompoundTagBuilder;
  /**
   * Get a byte array named with the given key.
   *
   * If the key does not exist or its value is not a byte array tag,
   * then an empty byte array will be returned.
   *
   * @param key the key
   * @return a byte array
  */
  getByteArray(key: string): number[];
  /**
   * Get a byte named with the given key.
   *
   * If the key does not exist or its value is not a byte tag,
   * then `0` will be returned.
   *
   * @param key the key
   * @return a byte
  */
  getByte(key: string): number;
  /**
   * Get a double named with the given key.
   *
   * If the key does not exist or its value is not a double tag,
   * then `0` will be returned.
   *
   * @param key the key
   * @return a double
  */
  getDouble(key: string): number;
  /**
   * Get a double named with the given key, even if it's another
   * type of number.
   *
   * If the key does not exist or its value is not a number,
   * then `0` will be returned.
   *
   * @param key the key
   * @return a double
  */
  asDouble(key: string): number;
  /**
   * Get a float named with the given key.
   *
   * If the key does not exist or its value is not a float tag,
   * then `0` will be returned.
   *
   * @param key the key
   * @return a float
  */
  getFloat(key: string): number;
  /**
   * Get a `int[]` named with the given key.
   *
   * If the key does not exist or its value is not an int array tag,
   * then an empty array will be returned.
   *
   * @param key the key
   * @return an int array
  */
  getIntArray(key: string): number[];
  /**
   * Get an int named with the given key.
   *
   * If the key does not exist or its value is not an int tag,
   * then `0` will be returned.
   *
   * @param key the key
   * @return an int
  */
  getInt(key: string): number;
  /**
   * Get an int named with the given key, even if it's another
   * type of number.
   *
   * If the key does not exist or its value is not a number,
   * then `0` will be returned.
   *
   * @param key the key
   * @return an int
  */
  asInt(key: string): number;
  /**
   * Get a list of tags named with the given key.
   *
   * If the key does not exist or its value is not a list tag,
   * then an empty list will be returned.
   *
   * @param key the key
   * @return a list of tags
  */
  getList(key: string): Tag[];
  /**
   * Get a `TagList` named with the given key.
   *
   * If the key does not exist or its value is not a list tag,
   * then an empty tag list will be returned.
   *
   * @param key the key
   * @return a tag list instance
  */
  getListTag(key: string): ListTag;
  /**
   * Get a list of tags named with the given key.
   *
   * If the key does not exist or its value is not a list tag,
   * then an empty list will be returned. If the given key references
   * a list but the list of of a different type, then an empty
   * list will also be returned.
   *
   * @param key the key
   * @param listType the class of the contained type
   * @return a list of tags
   * @param  the type of list
  */
  getList<T>(key: string, listType: Class<T>): T[];
  /**
   * Get a `long[]` named with the given key.
   *
   * If the key does not exist or its value is not an long array tag,
   * then an empty array will be returned.
   *
   * @param key the key
   * @return an int array
  */
  getLongArray(key: string): number[];
  /**
   * Get a long named with the given key.
   *
   * If the key does not exist or its value is not a long tag,
   * then `0` will be returned.
   *
   * @param key the key
   * @return a long
  */
  getLong(key: string): number;
  /**
   * Get a long named with the given key, even if it's another
   * type of number.
   *
   * If the key does not exist or its value is not a number,
   * then `0` will be returned.
   *
   * @param key the key
   * @return a long
  */
  asLong(key: string): number;
  /**
   * Get a short named with the given key.
   *
   * If the key does not exist or its value is not a short tag,
   * then `0` will be returned.
   *
   * @param key the key
   * @return a short
  */
  getShort(key: string): number;
  /**
   * Get a string named with the given key.
   *
   * If the key does not exist or its value is not a string tag,
   * then `""` will be returned.
   *
   * @param key the key
   * @return a string
  */
  getString(key: string): string;
  toString(): string;
}
/**
 * The `TAG_List` tag.
*/
export class ListTag extends Tag {
  /**
   * Creates the tag with an empty name.
   *
   * @param type the type of tag
   * @param value the value of the tag
  */
  constructor(type: Class<Tag>, value: Tag[]);
  /**
   * Gets the type of item in this list.
   *
   * @return The type of item in this list.
  */
  getType(): Class<Tag>;
  getValue(): Tag[];
  /**
   * Create a new list tag with this tag's name and type.
   *
   * @param list the new list
   * @return a new list tag
  */
  setValue(value: Tag[]);
  /**
   * Get the tag if it exists at the given index.
   *
   * @param index the index
   * @return the tag or null
  */
  getIfExists(index: number): Tag | null;
  /**
   * Get a byte array named with the given index.
   *
   * If the index does not exist or its value is not a byte array tag,
   * then an empty byte array will be returned.
   *
   * @param index the index
   * @return a byte array
  */
  getByteArray(index: number): number[];
  /**
   * Get a byte named with the given index.
   *
   * If the index does not exist or its value is not a byte tag,
   * then `0` will be returned.
   *
   * @param index the index
   * @return a byte
  */
  getByte(index: number): number;
  /**
   * Get a double named with the given index.
   *
   * If the index does not exist or its value is not a double tag,
   * then `0` will be returned.
   *
   * @param index the index
   * @return a double
  */
  getDouble(index: number): number;
  /**
   * Get a double named with the given index, even if it's another
   * type of number.
   *
   * If the index does not exist or its value is not a number,
   * then `0` will be returned.
   *
   * @param index the index
   * @return a double
  */
  asDouble(index: number): number;
  /**
   * Get a float named with the given index.
   *
   * If the index does not exist or its value is not a float tag,
   * then `0` will be returned.
   *
   * @param index the index
   * @return a float
  */
  getFloat(index: number): number;
  /**
   * Get a `int[]` named with the given index.
   *
   * If the index does not exist or its value is not an int array tag,
   * then an empty array will be returned.
   *
   * @param index the index
   * @return an int array
  */
  getIntArray(index: number): number[];
  /**
   * Get an int named with the given index.
   *
   * If the index does not exist or its value is not an int tag,
   * then `0` will be returned.
   *
   * @param index the index
   * @return an int
  */
  getInt(index: number): number;
  /**
   * Get an int named with the given index, even if it's another
   * type of number.
   *
   * If the index does not exist or its value is not a number,
   * then `0` will be returned.
   *
   * @param index the index
   * @return an int
  */
  asInt(index: number): number;
  /**
   * Get a list of tags named with the given index.
   *
   * If the index does not exist or its value is not a list tag,
   * then an empty list will be returned.
   *
   * @param index the index
   * @return a list of tags
  */
  getList(index: number): Tag[];
  /**
   * Get a `TagList` named with the given index.
   *
   * If the index does not exist or its value is not a list tag,
   * then an empty tag list will be returned.
   *
   * @param index the index
   * @return a tag list instance
  */
  getListTag(index: number): ListTag;
  /**
   * Get a list of tags named with the given index.
   *
   * If the index does not exist or its value is not a list tag,
   * then an empty list will be returned. If the given index references
   * a list but the list of of a different type, then an empty
   * list will also be returned.
   *
   * @param index the index
   * @param listType the class of the contained type
   * @return a list of tags
   * @param  the NBT type
  */
  getList<T>(index: number, listType: Class<T>): T[];
  /**
   * Get a long named with the given index.
   *
   * If the index does not exist or its value is not a long tag,
   * then `0` will be returned.
   *
   * @param index the index
   * @return a long
  */
  getLong(index: number): number;
  /**
   * Get a long named with the given index, even if it's another
   * type of number.
   *
   * If the index does not exist or its value is not a number,
   * then `0` will be returned.
   *
   * @param index the index
   * @return a long
  */
  asLong(index: number): number;
  /**
   * Get a short named with the given index.
   *
   * If the index does not exist or its value is not a short tag,
   * then `0` will be returned.
   *
   * @param index the index
   * @return a short
  */
  getShort(index: number): number;
  /**
   * Get a string named with the given index.
   *
   * If the index does not exist or its value is not a string tag,
   * then `""` will be returned.
   *
   * @param index the index
   * @return a string
  */
  getString(index: number): string;
  toString(): string;
}
/**
 * Helps create compound tags.
*/
export class CompoundTagBuilder {
  /**
   * Put the given key and tag into the compound tag.
   *
   * @param key they key
   * @param value the value
   * @return this object
  */
  put(key: string, value: Tag): CompoundTagBuilder;
  /**
   * Put the given key and value into the compound tag as a
   * `ByteArrayTag`.
   *
   * @param key they key
   * @param value the value
   * @return this object
  */
  putByteArray(key: string, value: number[]): CompoundTagBuilder;
  /**
   * Put the given key and value into the compound tag as a
   * `ByteTag`.
   *
   * @param key they key
   * @param value the value
   * @return this object
  */
  putByte(key: string, value: number): CompoundTagBuilder;
  /**
   * Put the given key and value into the compound tag as a
   * `DoubleTag`.
   *
   * @param key they key
   * @param value the value
   * @return this object
  */
  putDouble(key: string, value: number): CompoundTagBuilder;
  /**
   * Put the given key and value into the compound tag as a
   * `FloatTag`.
   *
   * @param key they key
   * @param value the value
   * @return this object
  */
  putFloat(key: string, value: number): CompoundTagBuilder;
  /**
   * Put the given key and value into the compound tag as a
   * `IntArrayTag`.
   *
   * @param key they key
   * @param value the value
   * @return this object
  */
  putIntArray(key: string, value: number[]): CompoundTagBuilder;
  /**
   * Put the given key and value into the compound tag as an `IntTag`.
   *
   * @param key they key
   * @param value the value
   * @return this object
  */
  putInt(key: string, value: number): CompoundTagBuilder;
  /**
   * Put the given key and value into the compound tag as a
   * `LongArrayTag`.
   *
   * @param key they key
   * @param value the value
   * @return this object
  */
  putLongArray(key: string, value: number[]): CompoundTagBuilder;
  /**
   * Put the given key and value into the compound tag as a
   * `LongTag`.
   *
   * @param key they key
   * @param value the value
   * @return this object
  */
  putLong(key: string, value: number): CompoundTagBuilder;
  /**
   * Put the given key and value into the compound tag as a
   * `ShortTag`.
   *
   * @param key they key
   * @param value the value
   * @return this object
  */
  putShort(key: string, value: number): CompoundTagBuilder;
  /**
   * Put the given key and value into the compound tag as a
   * `StringTag`.
   *
   * @param key they key
   * @param value the value
   * @return this object
  */
  putString(key: string, value: string): CompoundTagBuilder;
  /**
   * Remove the given key from the compound tag. Does nothing if the key doesn't exist.
   *
   * @param key the key
   * @return this object
  */
  remove(key: string): CompoundTagBuilder;
  /**
   * Put all the entries from the given map into this map.
   *
   * @param value the map of tags
   * @return this object
  */
  putAll(value: Map<string, Tag>): CompoundTagBuilder;
  /**
   * Build an unnamed compound tag with this builder's entries.
   *
   * @return the new compound tag
  */
  build(): CompoundTag;
  /**
   * Create a new builder instance.
   *
   * @return a new builder
  */
  static create(): CompoundTagBuilder;
}
/**
 * The `TAG_End` tag.
*/
export class EndTag extends Tag {
  getValue(): any;
  toString(): string;
}
/**
 * The `TAG_Float` tag.
*/
export class FloatTag extends Tag {
  /**
   * Creates the tag with an empty name.
   *
   * @param value the value of the tag
  */
  constructor(value: number);
  getValue(): number;
  toString(): string;
}
/**
 * A tag that has a name.
*/
export class NamedTag {
  /**
   * Create a new named tag.
   *
   * @param name the name
   * @param tag the tag
  */
  constructor(name: string, tag: Tag);
  /**
   * Get the name of the tag.
   *
   * @return the name
  */
  getName(): string;
  /**
   * Get the tag.
   *
   * @return the tag
  */
  getTag(): Tag;
}
/**
 * Represents a NBT tag.
*/
export class Tag {
  /**
   * Gets the value of this tag.
   *
   * @return the value
  */
  getValue(): any;
}

}
declare module 'com.sk89q.worldedit.math' {
import { Comparator } from 'java.util';
/**
 * Various math utility methods.
*/
export class MathUtils {
  /**
   * Safe minimum, such that 1 / SAFE_MIN does not overflow.
   *
   * In IEEE 754 arithmetic, this is also the smallest normalized number
   * 2-1022. The value of this constant is from Apache Commons
   * Math 2.2.
  */
  static readonly SAFE_MIN: number;
  /**
   * Modulus, divisor-style.
   *
   * @param a a
   * @param n n
   * @return the modulus
  */
  static divisorMod(a: number, n: number): number;
  /**
   * Returns the cosine of an angle given in degrees. This is better than
   * just `Math.cos(Math.toRadians(degrees))` because it provides a
   * more accurate result for angles divisible by 90 degrees.
   *
   * @param degrees the angle
   * @return the cosine of the given angle
  */
  static dCos(degrees: number): number;
  /**
   * Returns the sine of an angle given in degrees. This is better than just
   * `Math.sin(Math.toRadians(degrees))` because it provides a more
   * accurate result for angles divisible by 90 degrees.
   *
   * @param degrees the angle
   * @return the sine of the given angle
  */
  static dSin(degrees: number): number;
  /**
   * Returns the rounded double of the given value, rounding to the
   * nearest integer value away from zero on ties.
   *
   * 
   * This behavior is the same as {@link java.math.RoundingMode#HALF_UP}.
   * 
   *
   * @param value the value
   * @return the rounded value
  */
  static roundHalfUp(value: number): number;
}
/**
 * Sort block positions by region, then chunk.
*/
export class RegionOptimizedChunkComparator {
  static readonly INSTANCE: Comparator<BlockVector3>;
}
/**
 * An immutable 2-dimensional vector.
*/
export class BlockVector2 {
  static readonly ZERO: BlockVector2;
  static readonly UNIT_X: BlockVector2;
  static readonly UNIT_Z: BlockVector2;
  static readonly ONE: BlockVector2;
  /**
   * A comparator for BlockVector2ds that orders the vectors by rows, with x as the
   * column and z as the row.
   *
   * 
   * For example, if x is the horizontal axis and z is the vertical axis, it
   * sorts like so:
   * 
   *
   *      * 0123
   * 4567
   * 90ab
   * cdef
   * 
  */
  static readonly COMPARING_GRID_ARRANGEMENT: Comparator<BlockVector2>;
  static at(x: number, z: number): BlockVector2;
  /**
   * Get the X coordinate.
   *
   * @return the x coordinate
  */
  getX(): number;
  /**
   * Get the X coordinate.
   *
   * @return the x coordinate
  */
  getBlockX(): number;
  /**
   * Set the X coordinate.
   *
   * @param x the new X
   * @return a new vector
  */
  withX(x: number): BlockVector2;
  /**
   * Get the Z coordinate.
   *
   * @return the z coordinate
  */
  getZ(): number;
  /**
   * Get the Z coordinate.
   *
   * @return the z coordinate
  */
  getBlockZ(): number;
  /**
   * Set the Z coordinate.
   *
   * @param z the new Z
   * @return a new vector
  */
  withZ(z: number): BlockVector2;
  /**
   * Add another vector to this vector and return the result as a new vector.
   *
   * @param other the other vector
   * @return a new vector
  */
  add(other: BlockVector2): BlockVector2;
  /**
   * Add another vector to this vector and return the result as a new vector.
   *
   * @param x the value to add
   * @param z the value to add
   * @return a new vector
  */
  add(x: number, z: number): BlockVector2;
  /**
   * Add a list of vectors to this vector and return the
   * result as a new vector.
   *
   * @param others an array of vectors
   * @return a new vector
  */
  add(...others: BlockVector2[]): BlockVector2;
  /**
   * Subtract another vector from this vector and return the result
   * as a new vector.
   *
   * @param other the other vector
   * @return a new vector
  */
  subtract(other: BlockVector2): BlockVector2;
  /**
   * Subtract another vector from this vector and return the result
   * as a new vector.
   *
   * @param x the value to subtract
   * @param z the value to subtract
   * @return a new vector
  */
  subtract(x: number, z: number): BlockVector2;
  /**
   * Subtract a list of vectors from this vector and return the result
   * as a new vector.
   *
   * @param others an array of vectors
   * @return a new vector
  */
  subtract(...others: BlockVector2[]): BlockVector2;
  /**
   * Multiply this vector by another vector on each component.
   *
   * @param other the other vector
   * @return a new vector
  */
  multiply(other: BlockVector2): BlockVector2;
  /**
   * Multiply this vector by another vector on each component.
   *
   * @param x the value to multiply
   * @param z the value to multiply
   * @return a new vector
  */
  multiply(x: number, z: number): BlockVector2;
  /**
   * Multiply this vector by zero or more vectors on each component.
   *
   * @param others an array of vectors
   * @return a new vector
  */
  multiply(...others: BlockVector2[]): BlockVector2;
  /**
   * Perform scalar multiplication and return a new vector.
   *
   * @param n the value to multiply
   * @return a new vector
  */
  multiply(n: number): BlockVector2;
  /**
   * Divide this vector by another vector on each component.
   *
   * @param other the other vector
   * @return a new vector
  */
  divide(other: BlockVector2): BlockVector2;
  /**
   * Divide this vector by another vector on each component.
   *
   * @param x the value to divide by
   * @param z the value to divide by
   * @return a new vector
  */
  divide(x: number, z: number): BlockVector2;
  /**
   * Perform scalar division and return a new vector.
   *
   * @param n the value to divide by
   * @return a new vector
  */
  divide(n: number): BlockVector2;
  /**
   * Shift all components right.
   *
   * @param x the value to shift x by
   * @param z the value to shift z by
   * @return a new vector
  */
  shr(x: number, z: number): BlockVector2;
  /**
   * Shift all components right by `n`.
   *
   * @param n the value to shift by
   * @return a new vector
  */
  shr(n: number): BlockVector2;
  /**
   * Get the length of the vector.
   *
   * @return length
  */
  length(): number;
  /**
   * Get the length, squared, of the vector.
   *
   * @return length, squared
  */
  lengthSq(): number;
  /**
   * Get the distance between this vector and another vector.
   *
   * @param other the other vector
   * @return distance
  */
  distance(other: BlockVector2): number;
  /**
   * Get the distance between this vector and another vector, squared.
   *
   * @param other the other vector
   * @return distance
  */
  distanceSq(other: BlockVector2): number;
  /**
   * Get the normalized vector, which is the vector divided by its
   * length, as a new vector.
   *
   * @return a new vector
  */
  normalize(): BlockVector2;
  /**
   * Gets the dot product of this and another vector.
   *
   * @param other the other vector
   * @return the dot product of this and the other vector
  */
  dot(other: BlockVector2): number;
  /**
   * Checks to see if a vector is contained with another.
   *
   * @param min the minimum point (X, Y, and Z are the lowest)
   * @param max the maximum point (X, Y, and Z are the lowest)
   * @return true if the vector is contained
  */
  containedWithin(min: BlockVector2, max: BlockVector2): boolean;
  /**
   * Floors the values of all components.
   *
   * @return a new vector
  */
  floor(): BlockVector2;
  /**
   * Rounds all components up.
   *
   * @return a new vector
  */
  ceil(): BlockVector2;
  /**
   * Rounds all components to the closest integer.
   *
   * Components < 0.5 are rounded down, otherwise up.
   *
   * @return a new vector
  */
  round(): BlockVector2;
  /**
   * Returns a vector with the absolute values of the components of
   * this vector.
   *
   * @return a new vector
  */
  abs(): BlockVector2;
  /**
   * Perform a 2D transformation on this vector and return a new one.
   *
   * @param angle in degrees
   * @param aboutX about which x coordinate to rotate
   * @param aboutZ about which z coordinate to rotate
   * @param translateX what to add after rotation
   * @param translateZ what to add after rotation
   * @return a new vector
   * @see AffineTransform another method to transform vectors
  */
  transform2D(angle: number, aboutX: number, aboutZ: number, translateX: number, translateZ: number): BlockVector2;
  /**
   * Gets the minimum components of two vectors.
   *
   * @param v2 the second vector
   * @return minimum
  */
  getMinimum(v2: BlockVector2): BlockVector2;
  /**
   * Gets the maximum components of two vectors.
   *
   * @param v2 the second vector
   * @return maximum
  */
  getMaximum(v2: BlockVector2): BlockVector2;
  toVector2(): Vector2;
  /**
   * Creates a 3D vector by adding a zero Y component to this vector.
   *
   * @return a new vector
  */
  toVector3(): Vector3;
  /**
   * Creates a 3D vector by adding the specified Y component to this vector.
   *
   * @param y the Y component
   * @return a new vector
  */
  toVector3(y: number): Vector3;
  /**
   * Creates a 3D vector by adding a zero Y component to this vector.
   *
   * @return a new vector
  */
  toBlockVector3(): BlockVector3;
  /**
   * Creates a 3D vector by adding the specified Y component to this vector.
   *
   * @param y the Y component
   * @return a new vector
  */
  toBlockVector3(y: number): BlockVector3;
  equals(obj: any): boolean;
  hashCode(): number;
  toString(): string;
  /**
   * Returns a string representation that is supported by the parser.
   * @return string
  */
  toParserString(): string;
}
/**
 * An immutable 3-dimensional vector.
*/
export class BlockVector3 {
  static readonly ZERO: BlockVector3;
  static readonly UNIT_X: BlockVector3;
  static readonly UNIT_Y: BlockVector3;
  static readonly UNIT_Z: BlockVector3;
  static readonly UNIT_MINUS_X: BlockVector3;
  static readonly UNIT_MINUS_Y: BlockVector3;
  static readonly UNIT_MINUS_Z: BlockVector3;
  static readonly ONE: BlockVector3;
  static at(x: number, y: number, z: number): BlockVector3;
  static isLongPackable(location: BlockVector3): boolean;
  static checkLongPackable(location: BlockVector3): void;
  static fromLongPackedForm(packed: number): BlockVector3;
  /**
   * Returns a comparator that sorts vectors first by Y, then Z, then X.
   *
   * 
   * Useful for sorting by chunk block storage order.
   * 
  */
  static sortByCoordsYzx(): Comparator<BlockVector3>;
  toLongPackedForm(): number;
  /**
   * Get the X coordinate.
   *
   * @return the x coordinate
  */
  getX(): number;
  /**
   * Get the X coordinate.
   *
   * @return the x coordinate
  */
  getBlockX(): number;
  /**
   * Set the X coordinate.
   *
   * @param x the new X
   * @return a new vector
  */
  withX(x: number): BlockVector3;
  /**
   * Get the Y coordinate.
   *
   * @return the y coordinate
  */
  getY(): number;
  /**
   * Get the Y coordinate.
   *
   * @return the y coordinate
  */
  getBlockY(): number;
  /**
   * Set the Y coordinate.
   *
   * @param y the new Y
   * @return a new vector
  */
  withY(y: number): BlockVector3;
  /**
   * Get the Z coordinate.
   *
   * @return the z coordinate
  */
  getZ(): number;
  /**
   * Get the Z coordinate.
   *
   * @return the z coordinate
  */
  getBlockZ(): number;
  /**
   * Set the Z coordinate.
   *
   * @param z the new Z
   * @return a new vector
  */
  withZ(z: number): BlockVector3;
  /**
   * Add another vector to this vector and return the result as a new vector.
   *
   * @param other the other vector
   * @return a new vector
  */
  add(other: BlockVector3): BlockVector3;
  /**
   * Add another vector to this vector and return the result as a new vector.
   *
   * @param x the value to add
   * @param y the value to add
   * @param z the value to add
   * @return a new vector
  */
  add(x: number, y: number, z: number): BlockVector3;
  /**
   * Add a list of vectors to this vector and return the
   * result as a new vector.
   *
   * @param others an array of vectors
   * @return a new vector
  */
  add(...others: BlockVector3[]): BlockVector3;
  /**
   * Subtract another vector from this vector and return the result
   * as a new vector.
   *
   * @param other the other vector
   * @return a new vector
  */
  subtract(other: BlockVector3): BlockVector3;
  /**
   * Subtract another vector from this vector and return the result
   * as a new vector.
   *
   * @param x the value to subtract
   * @param y the value to subtract
   * @param z the value to subtract
   * @return a new vector
  */
  subtract(x: number, y: number, z: number): BlockVector3;
  /**
   * Subtract a list of vectors from this vector and return the result
   * as a new vector.
   *
   * @param others an array of vectors
   * @return a new vector
  */
  subtract(...others: BlockVector3[]): BlockVector3;
  /**
   * Multiply this vector by another vector on each component.
   *
   * @param other the other vector
   * @return a new vector
  */
  multiply(other: BlockVector3): BlockVector3;
  /**
   * Multiply this vector by another vector on each component.
   *
   * @param x the value to multiply
   * @param y the value to multiply
   * @param z the value to multiply
   * @return a new vector
  */
  multiply(x: number, y: number, z: number): BlockVector3;
  /**
   * Multiply this vector by zero or more vectors on each component.
   *
   * @param others an array of vectors
   * @return a new vector
  */
  multiply(...others: BlockVector3[]): BlockVector3;
  /**
   * Perform scalar multiplication and return a new vector.
   *
   * @param n the value to multiply
   * @return a new vector
  */
  multiply(n: number): BlockVector3;
  /**
   * Divide this vector by another vector on each component.
   *
   * @param other the other vector
   * @return a new vector
  */
  divide(other: BlockVector3): BlockVector3;
  /**
   * Divide this vector by another vector on each component.
   *
   * @param x the value to divide by
   * @param y the value to divide by
   * @param z the value to divide by
   * @return a new vector
  */
  divide(x: number, y: number, z: number): BlockVector3;
  /**
   * Perform scalar division and return a new vector.
   *
   * @param n the value to divide by
   * @return a new vector
  */
  divide(n: number): BlockVector3;
  /**
   * Shift all components right.
   *
   * @param x the value to shift x by
   * @param y the value to shift y by
   * @param z the value to shift z by
   * @return a new vector
  */
  shr(x: number, y: number, z: number): BlockVector3;
  /**
   * Shift all components right by `n`.
   *
   * @param n the value to shift by
   * @return a new vector
  */
  shr(n: number): BlockVector3;
  /**
   * Shift all components left.
   *
   * @param x the value to shift x by
   * @param y the value to shift y by
   * @param z the value to shift z by
   * @return a new vector
  */
  shl(x: number, y: number, z: number): BlockVector3;
  /**
   * Shift all components left by `n`.
   *
   * @param n the value to shift by
   * @return a new vector
  */
  shl(n: number): BlockVector3;
  /**
   * Get the length of the vector.
   *
   * @return length
  */
  length(): number;
  /**
   * Get the length, squared, of the vector.
   *
   * @return length, squared
  */
  lengthSq(): number;
  /**
   * Get the distance between this vector and another vector.
   *
   * @param other the other vector
   * @return distance
  */
  distance(other: BlockVector3): number;
  /**
   * Get the distance between this vector and another vector, squared.
   *
   * @param other the other vector
   * @return distance
  */
  distanceSq(other: BlockVector3): number;
  /**
   * Get the normalized vector, which is the vector divided by its
   * length, as a new vector.
   *
   * @return a new vector
  */
  normalize(): BlockVector3;
  /**
   * Gets the dot product of this and another vector.
   *
   * @param other the other vector
   * @return the dot product of this and the other vector
  */
  dot(other: BlockVector3): number;
  /**
   * Gets the cross product of this and another vector.
   *
   * @param other the other vector
   * @return the cross product of this and the other vector
  */
  cross(other: BlockVector3): BlockVector3;
  /**
   * Checks to see if a vector is contained with another.
   *
   * @param min the minimum point (X, Y, and Z are the lowest)
   * @param max the maximum point (X, Y, and Z are the lowest)
   * @return true if the vector is contained
  */
  containedWithin(min: BlockVector3, max: BlockVector3): boolean;
  /**
   * Clamp the Y component.
   *
   * @param min the minimum value
   * @param max the maximum value
   * @return a new vector
  */
  clampY(min: number, max: number): BlockVector3;
  /**
   * Floors the values of all components.
   *
   * @return a new vector
  */
  floor(): BlockVector3;
  /**
   * Rounds all components up.
   *
   * @return a new vector
  */
  ceil(): BlockVector3;
  /**
   * Rounds all components to the closest integer.
   *
   * Components < 0.5 are rounded down, otherwise up.
   *
   * @return a new vector
  */
  round(): BlockVector3;
  /**
   * Returns a vector with the absolute values of the components of
   * this vector.
   *
   * @return a new vector
  */
  abs(): BlockVector3;
  /**
   * Perform a 2D transformation on this vector and return a new one.
   *
   * @param angle in degrees
   * @param aboutX about which x coordinate to rotate
   * @param aboutZ about which z coordinate to rotate
   * @param translateX what to add after rotation
   * @param translateZ what to add after rotation
   * @return a new vector
   * @see AffineTransform another method to transform vectors
  */
  transform2D(angle: number, aboutX: number, aboutZ: number, translateX: number, translateZ: number): BlockVector3;
  /**
   * Get this vector's pitch as used within the game.
   *
   * @return pitch in radians
  */
  toPitch(): number;
  /**
   * Get this vector's yaw as used within the game.
   *
   * @return yaw in radians
  */
  toYaw(): number;
  /**
   * Gets the minimum components of two vectors.
   *
   * @param v2 the second vector
   * @return minimum
  */
  getMinimum(v2: BlockVector3): BlockVector3;
  /**
   * Gets the maximum components of two vectors.
   *
   * @param v2 the second vector
   * @return maximum
  */
  getMaximum(v2: BlockVector3): BlockVector3;
  /**
   * Creates a 2D vector by dropping the Y component from this vector.
   *
   * @return a new {@link BlockVector2}
  */
  toBlockVector2(): BlockVector2;
  toVector3(): Vector3;
  equals(obj: any): boolean;
  hashCode(): number;
  toString(): string;
  /**
   * Returns a string representation that is supported by the parser.
   * @return string
  */
  toParserString(): string;
}
/**
 * Sort block positions by region, chunk, and finally Y-Z-X.
*/
export class RegionOptimizedComparator {
  static readonly INSTANCE: Comparator<BlockVector3>;
}
/**
 * An immutable 2-dimensional vector.
*/
export class Vector2 {
  static readonly ZERO: Vector2;
  static readonly UNIT_X: Vector2;
  static readonly UNIT_Z: Vector2;
  static readonly ONE: Vector2;
  static at(x: number, z: number): Vector2;
  /**
   * Get the X coordinate.
   *
   * @return the x coordinate
  */
  getX(): number;
  /**
   * Set the X coordinate.
   *
   * @param x the new X
   * @return a new vector
  */
  withX(x: number): Vector2;
  /**
   * Get the Z coordinate.
   *
   * @return the z coordinate
  */
  getZ(): number;
  /**
   * Set the Z coordinate.
   *
   * @param z the new Z
   * @return a new vector
  */
  withZ(z: number): Vector2;
  /**
   * Add another vector to this vector and return the result as a new vector.
   *
   * @param other the other vector
   * @return a new vector
  */
  add(other: Vector2): Vector2;
  /**
   * Add another vector to this vector and return the result as a new vector.
   *
   * @param x the value to add
   * @param z the value to add
   * @return a new vector
  */
  add(x: number, z: number): Vector2;
  /**
   * Add a list of vectors to this vector and return the
   * result as a new vector.
   *
   * @param others an array of vectors
   * @return a new vector
  */
  add(...others: Vector2[]): Vector2;
  /**
   * Subtract another vector from this vector and return the result
   * as a new vector.
   *
   * @param other the other vector
   * @return a new vector
  */
  subtract(other: Vector2): Vector2;
  /**
   * Subtract another vector from this vector and return the result
   * as a new vector.
   *
   * @param x the value to subtract
   * @param z the value to subtract
   * @return a new vector
  */
  subtract(x: number, z: number): Vector2;
  /**
   * Subtract a list of vectors from this vector and return the result
   * as a new vector.
   *
   * @param others an array of vectors
   * @return a new vector
  */
  subtract(...others: Vector2[]): Vector2;
  /**
   * Multiply this vector by another vector on each component.
   *
   * @param other the other vector
   * @return a new vector
  */
  multiply(other: Vector2): Vector2;
  /**
   * Multiply this vector by another vector on each component.
   *
   * @param x the value to multiply
   * @param z the value to multiply
   * @return a new vector
  */
  multiply(x: number, z: number): Vector2;
  /**
   * Multiply this vector by zero or more vectors on each component.
   *
   * @param others an array of vectors
   * @return a new vector
  */
  multiply(...others: Vector2[]): Vector2;
  /**
   * Perform scalar multiplication and return a new vector.
   *
   * @param n the value to multiply
   * @return a new vector
  */
  multiply(n: number): Vector2;
  /**
   * Divide this vector by another vector on each component.
   *
   * @param other the other vector
   * @return a new vector
  */
  divide(other: Vector2): Vector2;
  /**
   * Divide this vector by another vector on each component.
   *
   * @param x the value to divide by
   * @param z the value to divide by
   * @return a new vector
  */
  divide(x: number, z: number): Vector2;
  /**
   * Perform scalar division and return a new vector.
   *
   * @param n the value to divide by
   * @return a new vector
  */
  divide(n: number): Vector2;
  /**
   * Get the length of the vector.
   *
   * @return length
  */
  length(): number;
  /**
   * Get the length, squared, of the vector.
   *
   * @return length, squared
  */
  lengthSq(): number;
  /**
   * Get the distance between this vector and another vector.
   *
   * @param other the other vector
   * @return distance
  */
  distance(other: Vector2): number;
  /**
   * Get the distance between this vector and another vector, squared.
   *
   * @param other the other vector
   * @return distance
  */
  distanceSq(other: Vector2): number;
  /**
   * Get the normalized vector, which is the vector divided by its
   * length, as a new vector.
   *
   * @return a new vector
  */
  normalize(): Vector2;
  /**
   * Gets the dot product of this and another vector.
   *
   * @param other the other vector
   * @return the dot product of this and the other vector
  */
  dot(other: Vector2): number;
  /**
   * Checks to see if a vector is contained with another.
   *
   * @param min the minimum point (X, Y, and Z are the lowest)
   * @param max the maximum point (X, Y, and Z are the lowest)
   * @return true if the vector is contained
  */
  containedWithin(min: Vector2, max: Vector2): boolean;
  /**
   * Floors the values of all components.
   *
   * @return a new vector
  */
  floor(): Vector2;
  /**
   * Rounds all components up.
   *
   * @return a new vector
  */
  ceil(): Vector2;
  /**
   * Rounds all components to the closest integer.
   *
   * Components < 0.5 are rounded down, otherwise up.
   *
   * @return a new vector
  */
  round(): Vector2;
  /**
   * Returns a vector with the absolute values of the components of
   * this vector.
   *
   * @return a new vector
  */
  abs(): Vector2;
  /**
   * Perform a 2D transformation on this vector and return a new one.
   *
   * @param angle in degrees
   * @param aboutX about which x coordinate to rotate
   * @param aboutZ about which z coordinate to rotate
   * @param translateX what to add after rotation
   * @param translateZ what to add after rotation
   * @return a new vector
   * @see AffineTransform another method to transform vectors
  */
  transform2D(angle: number, aboutX: number, aboutZ: number, translateX: number, translateZ: number): Vector2;
  /**
   * Gets the minimum components of two vectors.
   *
   * @param v2 the second vector
   * @return minimum
  */
  getMinimum(v2: Vector2): Vector2;
  /**
   * Gets the maximum components of two vectors.
   *
   * @param v2 the second vector
   * @return maximum
  */
  getMaximum(v2: Vector2): Vector2;
  static toBlockPoint(x: number, z: number): BlockVector2;
  /**
   * Create a new {@link BlockVector2} from this vector.
   *
   * @return a new {@link BlockVector2}
  */
  toBlockPoint(): BlockVector2;
  /**
   * Creates a 3D vector by adding a zero Y component to this vector.
   *
   * @return a new vector
  */
  toVector3(): Vector3;
  /**
   * Creates a 3D vector by adding the specified Y component to this vector.
   *
   * @param y the Y component
   * @return a new vector
  */
  toVector3(y: number): Vector3;
  equals(obj: any): boolean;
  hashCode(): number;
  toString(): string;
  /**
   * Returns a string representation that is supported by the parser.
   * @return string
  */
  toParserString(): string;
}
/**
 * An immutable 3-dimensional vector.
*/
export class Vector3 {
  static readonly ZERO: Vector3;
  static readonly UNIT_X: Vector3;
  static readonly UNIT_Y: Vector3;
  static readonly UNIT_Z: Vector3;
  static readonly ONE: Vector3;
  static at(x: number, y: number, z: number): Vector3;
  /**
   * Returns a comparator that sorts vectors first by Y, then Z, then X.
   *
   * 
   * Useful for sorting by chunk block storage order.
   * 
  */
  static sortByCoordsYzx(): Comparator<Vector3>;
  /**
   * Get the X coordinate.
   *
   * @return the x coordinate
  */
  getX(): number;
  /**
   * Set the X coordinate.
   *
   * @param x the new X
   * @return a new vector
  */
  withX(x: number): Vector3;
  /**
   * Get the Y coordinate.
   *
   * @return the y coordinate
  */
  getY(): number;
  /**
   * Set the Y coordinate.
   *
   * @param y the new Y
   * @return a new vector
  */
  withY(y: number): Vector3;
  /**
   * Get the Z coordinate.
   *
   * @return the z coordinate
  */
  getZ(): number;
  /**
   * Set the Z coordinate.
   *
   * @param z the new Z
   * @return a new vector
  */
  withZ(z: number): Vector3;
  /**
   * Add another vector to this vector and return the result as a new vector.
   *
   * @param other the other vector
   * @return a new vector
  */
  add(other: Vector3): Vector3;
  /**
   * Add another vector to this vector and return the result as a new vector.
   *
   * @param x the value to add
   * @param y the value to add
   * @param z the value to add
   * @return a new vector
  */
  add(x: number, y: number, z: number): Vector3;
  /**
   * Add a list of vectors to this vector and return the
   * result as a new vector.
   *
   * @param others an array of vectors
   * @return a new vector
  */
  add(...others: Vector3[]): Vector3;
  /**
   * Subtract another vector from this vector and return the result
   * as a new vector.
   *
   * @param other the other vector
   * @return a new vector
  */
  subtract(other: Vector3): Vector3;
  /**
   * Subtract another vector from this vector and return the result
   * as a new vector.
   *
   * @param x the value to subtract
   * @param y the value to subtract
   * @param z the value to subtract
   * @return a new vector
  */
  subtract(x: number, y: number, z: number): Vector3;
  /**
   * Subtract a list of vectors from this vector and return the result
   * as a new vector.
   *
   * @param others an array of vectors
   * @return a new vector
  */
  subtract(...others: Vector3[]): Vector3;
  /**
   * Multiply this vector by another vector on each component.
   *
   * @param other the other vector
   * @return a new vector
  */
  multiply(other: Vector3): Vector3;
  /**
   * Multiply this vector by another vector on each component.
   *
   * @param x the value to multiply
   * @param y the value to multiply
   * @param z the value to multiply
   * @return a new vector
  */
  multiply(x: number, y: number, z: number): Vector3;
  /**
   * Multiply this vector by zero or more vectors on each component.
   *
   * @param others an array of vectors
   * @return a new vector
  */
  multiply(...others: Vector3[]): Vector3;
  /**
   * Perform scalar multiplication and return a new vector.
   *
   * @param n the value to multiply
   * @return a new vector
  */
  multiply(n: number): Vector3;
  /**
   * Divide this vector by another vector on each component.
   *
   * @param other the other vector
   * @return a new vector
  */
  divide(other: Vector3): Vector3;
  /**
   * Divide this vector by another vector on each component.
   *
   * @param x the value to divide by
   * @param y the value to divide by
   * @param z the value to divide by
   * @return a new vector
  */
  divide(x: number, y: number, z: number): Vector3;
  /**
   * Perform scalar division and return a new vector.
   *
   * @param n the value to divide by
   * @return a new vector
  */
  divide(n: number): Vector3;
  /**
   * Get the length of the vector.
   *
   * @return length
  */
  length(): number;
  /**
   * Get the length, squared, of the vector.
   *
   * @return length, squared
  */
  lengthSq(): number;
  /**
   * Get the distance between this vector and another vector.
   *
   * @param other the other vector
   * @return distance
  */
  distance(other: Vector3): number;
  /**
   * Get the distance between this vector and another vector, squared.
   *
   * @param other the other vector
   * @return distance
  */
  distanceSq(other: Vector3): number;
  /**
   * Get the normalized vector, which is the vector divided by its
   * length, as a new vector.
   *
   * @return a new vector
  */
  normalize(): Vector3;
  /**
   * Gets the dot product of this and another vector.
   *
   * @param other the other vector
   * @return the dot product of this and the other vector
  */
  dot(other: Vector3): number;
  /**
   * Gets the cross product of this and another vector.
   *
   * @param other the other vector
   * @return the cross product of this and the other vector
  */
  cross(other: Vector3): Vector3;
  /**
   * Checks to see if a vector is contained with another.
   *
   * @param min the minimum point (X, Y, and Z are the lowest)
   * @param max the maximum point (X, Y, and Z are the lowest)
   * @return true if the vector is contained
  */
  containedWithin(min: Vector3, max: Vector3): boolean;
  /**
   * Clamp the Y component.
   *
   * @param min the minimum value
   * @param max the maximum value
   * @return a new vector
  */
  clampY(min: number, max: number): Vector3;
  /**
   * Floors the values of all components.
   *
   * @return a new vector
  */
  floor(): Vector3;
  /**
   * Rounds all components up.
   *
   * @return a new vector
  */
  ceil(): Vector3;
  /**
   * Rounds all components to the closest integer.
   *
   * Components < 0.5 are rounded down, otherwise up.
   *
   * @return a new vector
  */
  round(): Vector3;
  /**
   * Returns a vector with the absolute values of the components of
   * this vector.
   *
   * @return a new vector
  */
  abs(): Vector3;
  /**
   * Perform a 2D transformation on this vector and return a new one.
   *
   * @param angle in degrees
   * @param aboutX about which x coordinate to rotate
   * @param aboutZ about which z coordinate to rotate
   * @param translateX what to add after rotation
   * @param translateZ what to add after rotation
   * @return a new vector
   * @see AffineTransform another method to transform vectors
  */
  transform2D(angle: number, aboutX: number, aboutZ: number, translateX: number, translateZ: number): Vector3;
  /**
   * Get this vector's pitch as used within the game.
   *
   * @return pitch in radians
  */
  toPitch(): number;
  /**
   * Get this vector's yaw as used within the game.
   *
   * @return yaw in radians
  */
  toYaw(): number;
  /**
   * Gets the minimum components of two vectors.
   *
   * @param v2 the second vector
   * @return minimum
  */
  getMinimum(v2: Vector3): Vector3;
  /**
   * Gets the maximum components of two vectors.
   *
   * @param v2 the second vector
   * @return maximum
  */
  getMaximum(v2: Vector3): Vector3;
  /**
   * Create a new `BlockVector` using the given components.
   *
   * @param x the X coordinate
   * @param y the Y coordinate
   * @param z the Z coordinate
   * @return a new `BlockVector`
  */
  static toBlockPoint(x: number, y: number, z: number): BlockVector3;
  /**
   * Create a new `BlockVector` from this vector.
   *
   * @return a new `BlockVector`
  */
  toBlockPoint(): BlockVector3;
  /**
   * Creates a 2D vector by dropping the Y component from this vector.
   *
   * @return a new {@link Vector2}
  */
  toVector2(): Vector2;
  equals(obj: any): boolean;
  hashCode(): number;
  toString(): string;
  /**
   * Returns a string representation that is supported by the parser.
   * @return string
  */
  toParserString(): string;
}
export class BitMath {
  static mask(bits: number): number;
  static unpackX(packed: number): number;
  static unpackZ(packed: number): number;
  static unpackY(packed: number): number;
  static extractSigned(i: number, shift: number, bits: number): number;
  static fixSign(i: number, bits: number): number;
}

}
declare module 'com.sk89q.worldedit.util.eventbus.EventHandler' {
import { Enum } from 'java.lang';
export class Priority extends Enum<Priority> {
  static readonly VERY_EARLY: Priority;
  static readonly EARLY: Priority;
  static readonly NORMAL: Priority;
  static readonly LATE: Priority;
  static readonly VERY_LATE: Priority;
  static valueOf(name: string): Priority;
  static values(): Priority[];
}

}
declare module 'com.sk89q.worldedit.function.biome' {
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { BiomePattern } from 'com.sk89q.worldedit.function.pattern';
import { BiomeType } from 'com.sk89q.worldedit.world.biome';
import { Extent } from 'com.sk89q.worldedit.extent';
import { RegionFunction, FlatRegionFunction } from 'com.sk89q.worldedit.function';
import { Transform } from 'com.sk89q.worldedit.math.transform';
/**
 * Replaces the biome at the locations that this function is applied to.
*/
export class BiomeReplace extends FlatRegionFunction {
  /**
   * Create a new instance.
   *
   * @param extent an extent
   * @param biome a biome
  */
  constructor(extent: Extent, biome: BiomeType);
  /**
   * Create a new instance.
   *
   * @param extent the extent to apply this function to
   * @param pattern the biome pattern to set
  */
  constructor(extent: Extent, pattern: BiomePattern);
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3): boolean;
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector2): boolean;
}
export interface BiomeReplace extends FlatRegionFunction, RegionFunction {}
/**
 * Copies the biome from one extent to another.
*/
export class ExtentBiomeCopy extends FlatRegionFunction {
  /**
   * Make a new biome copy.
   *
   * @param source the source extent
   * @param from the source offset
   * @param destination the destination extent
   * @param to the destination offset
   * @param transform a transform to apply to positions (after source offset, before destination offset)
   * @deprecated use {@link ExtentBiomeCopy#ExtentBiomeCopy(Extent, BlockVector3, Extent, BlockVector3, Transform)}
  */
  constructor(source: Extent, from: BlockVector2, destination: Extent, to: BlockVector2, transform: Transform);
  /**
   * Make a new biome copy.
   *
   * @param source the source extent
   * @param from the source offset
   * @param destination the destination extent
   * @param to the destination offset
   * @param transform a transform to apply to positions (after source offset, before destination offset)
  */
  constructor(source: Extent, from: BlockVector3, destination: Extent, to: BlockVector3, transform: Transform);
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3): boolean;
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector2): boolean;
}
export interface ExtentBiomeCopy extends FlatRegionFunction, RegionFunction {}

}
declare module 'com.sk89q.worldedit.regions' {
import { Set, Iterator, Collection, List } from 'java.util';
import { Iterable, Cloneable } from 'java.lang';
import { Vector2, Vector3, BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { Triangle } from 'com.sk89q.worldedit.regions.polyhedron';
import { World } from 'com.sk89q.worldedit.world';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { SelectorLimits } from 'com.sk89q.worldedit.regions.selector.limit';
import { LocalSession, WorldEditException } from 'com.sk89q.worldedit';
import { Actor } from 'com.sk89q.worldedit.extension.platform';
import { BigDecimal } from 'java.math';
import { Extent } from 'com.sk89q.worldedit.extent';
import { Transform } from 'com.sk89q.worldedit.math.transform';
/**
 * Transforms another region according to a provided vector `Transform`.
 *
 * @see Transform
*/
export class TransformRegion extends AbstractRegion {
  /**
   * Create a new instance.
   *
   * @param region the region
   * @param transform the transform
  */
  constructor(region: Region, transform: Transform);
  /**
   * Create a new instance.
   *
   * @param world the world, which may be null
   * @param region the region
   * @param transform the transform
  */
  constructor(world: World | null, region: Region, transform: Transform);
  /**
   * Get the untransformed, base region.
   *
   * @return the base region
  */
  getRegion(): Region;
  /**
   * Get the transform that is applied.
   *
   * @return the transform
  */
  getTransform(): Transform;
  /**
   * Set the transform that is applied.
   *
   * @param transform the transform
  */
  setTransform(transform: Transform);
  getMinimumPoint(): BlockVector3;
  getMaximumPoint(): BlockVector3;
  getCenter(): Vector3;
  getVolume(): number;
  getWidth(): number;
  getHeight(): number;
  getLength(): number;
  expand(...changes: BlockVector3[]): void;
  contract(...changes: BlockVector3[]): void;
  shift(change: BlockVector3): void;
  contains(position: BlockVector3): boolean;
  polygonize(maxPoints: number): BlockVector2[];
  iterator(): Iterator<BlockVector3>;
}
export class AbstractRegion extends Region {
  constructor(world: World);
  /**
   * Get the center point of a region.
   * Note: Coordinates will not be integers
   * if the corresponding lengths are even.
   *
   * @return center point
  */
  getCenter(): Vector3;
  /**
   * Get the iterator.
   *
   * @return iterator of points inside the region
  */
  iterator(): Iterator<BlockVector3>;
  /**
   * Sets the world that the selection is in.
   *
   * @return the world, or null
  */
  getWorld(): World;
  /**
   * Sets the world that the selection is in.
   *
   * @param world the world, which may be null
  */
  setWorld(world: World);
  /**
   * Shift the region.
   *
   * @param change the change
   * @throws RegionOperationException if the operation cannot be performed
  */
  shift(change: BlockVector3): void;
  /**
   * Make a clone of the region.
   *
   * @return a cloned version
  */
  clone(): AbstractRegion;
  /**
   * Polygonizes a cross-section or a 2D projection of the region orthogonal to the Y axis.
   *
   * @param maxPoints maximum number of points to generate. -1 for no limit.
   * @return the points.
  */
  polygonize(maxPoints: number): BlockVector2[];
  /**
   * Get the number of blocks in the region.
   *
   * @return number of blocks
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  getVolume(): number;
  /**
   * Get X-size.
   *
   * @return width
  */
  getWidth(): number;
  /**
   * Get Y-size.
   *
   * @return height
  */
  getHeight(): number;
  /**
   * Get Z-size.
   *
   * @return length
  */
  getLength(): number;
  /**
   * Get a list of chunks.
   *
   * @return a set of chunks
  */
  getChunks(): Set<BlockVector2>;
  /**
   * Return a list of 16*16*16 chunks in a region.
   *
   * @return the chunk cubes this region overlaps with
  */
  getChunkCubes(): Set<BlockVector3>;
}
export class AbstractFlatRegion extends AbstractRegion {
  /**
   * Gets the minimum Y value.
   *
   * @return the Y value
  */
  getMinimumY(): number;
  /**
   * Gets the maximum Y value.
   *
   * @return the Y value
  */
  getMaximumY(): number;
}
export interface AbstractFlatRegion extends AbstractRegion, FlatRegion {}
/**
 * An axis-aligned cuboid. It can be defined using two corners of the cuboid.
*/
export class CuboidRegion extends AbstractRegion {
  /**
   * Construct a new instance of this cuboid using two corners of the cuboid.
   *
   * @param pos1 the first position
   * @param pos2 the second position
  */
  constructor(pos1: BlockVector3, pos2: BlockVector3);
  /**
   * Construct a new instance of this cuboid using two corners of the cuboid.
   *
   * @param world the world
   * @param pos1  the first position
   * @param pos2  the second position
  */
  constructor(world: World, pos1: BlockVector3, pos2: BlockVector3);
  /**
   * Get the first cuboid-defining corner.
   *
   * @return a position
  */
  getPos1(): BlockVector3;
  /**
   * Set the first cuboid-defining corner.
   *
   * @param pos1 a position
  */
  setPos1(pos1: BlockVector3);
  /**
   * Get the second cuboid-defining corner.
   *
   * @return a position
  */
  getPos2(): BlockVector3;
  /**
   * Set the second cuboid-defining corner.
   *
   * @param pos2 a position
  */
  setPos2(pos2: BlockVector3);
  /**
   * Get a region that contains the faces of this cuboid.
   *
   * @return a new complex region
  */
  getFaces(): Region;
  /**
   * Get a region that contains the walls (all faces but the ones parallel to
   * the X-Z plane) of this cuboid.
   *
   * @return a new complex region
  */
  getWalls(): Region;
  /**
   * Get the lower point of a region.
   *
   * @return min. point
  */
  getMinimumPoint(): BlockVector3;
  /**
   * Get the upper point of a region.
   *
   * @return max. point
  */
  getMaximumPoint(): BlockVector3;
  /**
   * Get the bounding box of this region as a {@link CuboidRegion}.
   *
   * @return the bounding box
  */
  getBoundingBox(): CuboidRegion;
  /**
   * Gets the minimum Y value.
   *
   * @return the Y value
  */
  getMinimumY(): number;
  /**
   * Gets the maximum Y value.
   *
   * @return the Y value
  */
  getMaximumY(): number;
  /**
   * Expand the region.
   *
   * @param changes array/arguments with multiple related changes
   * @throws RegionOperationException if the operation cannot be performed
  */
  expand(...changes: BlockVector3[]): void;
  /**
   * Contract the region.
   *
   * @param changes array/arguments with multiple related changes
   * @throws RegionOperationException if the operation cannot be performed
  */
  contract(...changes: BlockVector3[]): void;
  /**
   * Shift the region.
   *
   * @param change the change
   * @throws RegionOperationException if the operation cannot be performed
  */
  shift(change: BlockVector3): void;
  /**
   * Get a list of chunks.
   *
   * @return a list of chunk coordinates
  */
  getChunks(): Set<BlockVector2>;
  /**
   * Return a list of 16*16*16 chunks in a region.
   *
   * @return the chunk cubes this region overlaps with
  */
  getChunkCubes(): Set<BlockVector3>;
  /**
   * Returns true based on whether the region contains the point.
   *
   * @param position the position
   * @return true if contained
  */
  contains(position: BlockVector3): boolean;
  iterator(): Iterator<BlockVector3>;
  /**
   * Get this region as an iterable flat region.
   *
   * @return a flat region iterable
  */
  asFlatRegion(): Iterable<BlockVector2>;
  toString(): string;
  /**
   * Make a clone of the region.
   *
   * @return a cloned version
  */
  clone(): CuboidRegion;
  /**
   * Make a cuboid region out of the given region using the minimum and maximum
   * bounds of the provided region.
   *
   * @param region the region
   * @return a new cuboid region
  */
  static makeCuboid(region: Region): CuboidRegion;
  /**
   * Make a cuboid from the center.
   *
   * @param origin the origin
   * @param apothem the apothem, where 0 is the minimum value to make a 1x1 cuboid
   * @return a cuboid region
  */
  static fromCenter(origin: BlockVector3, apothem: number): CuboidRegion;
}
export interface CuboidRegion extends AbstractRegion, FlatRegion {}
export class ConvexPolyhedralRegion extends AbstractRegion {
  /**
   * Constructs an empty mesh, containing no vertices or triangles.
   *
   * @param world the world
  */
  constructor(world: World | null);
  /**
   * Constructs an independent copy of the given region.
   *
   * @param region the region to copy
  */
  constructor(region: ConvexPolyhedralRegion);
  /**
   * Clears the region, removing all vertices and triangles.
  */
  clear(): void;
  /**
   * Add a vertex to the region.
   *
   * @param vertex the vertex
   * @return true, if something changed.
  */
  addVertex(vertex: BlockVector3): boolean;
  isDefined(): boolean;
  getMinimumPoint(): BlockVector3;
  getMaximumPoint(): BlockVector3;
  getCenter(): Vector3;
  expand(...changes: BlockVector3[]): void;
  contract(...changes: BlockVector3[]): void;
  shift(change: BlockVector3): void;
  contains(position: BlockVector3): boolean;
  getVertices(): Collection<BlockVector3>;
  getTriangles(): Collection<Triangle>;
  clone(): AbstractRegion;
}
export class RegionOperationException extends WorldEditException {
  constructor(msg: string);
  constructor(msg: Component);
}
/**
 * Represents a cylindrical region.
*/
export class CylinderRegion extends AbstractRegion {
  /**
   * Construct the region.
  */
  constructor();
  /**
   * Construct the region.
   *
   * @param world the world
  */
  constructor(world: World);
  /**
   * Construct the region.
   *
   * @param world the world
   * @param center the center position
   * @param radius the radius along the X and Z axes
   * @param minY the minimum Y, inclusive
   * @param maxY the maximum Y, inclusive
  */
  constructor(world: World, center: BlockVector3, radius: Vector2, minY: number, maxY: number);
  /**
   * Construct the region.
   *
   * @param center the center position
   * @param radius the radius along the X and Z axes
   * @param minY the minimum Y, inclusive
   * @param maxY the maximum Y, inclusive
  */
  constructor(center: BlockVector3, radius: Vector2, minY: number, maxY: number);
  constructor(region: CylinderRegion);
  /**
   * Get the center point of a region.
   * Note: Coordinates will not be integers
   * if the corresponding lengths are even.
   *
   * @return center point
  */
  getCenter(): Vector3;
  /**
   * Sets the main center point of the region.
   *
   * @param center the center point
  */
  setCenter(center: BlockVector2);
  /**
   * Returns the radius of the cylinder.
   *
   * @return the radius along the X and Z axes
  */
  getRadius(): Vector2;
  /**
   * Sets the radius of the cylinder.
   *
   * @param radius the radius along the X and Z axes
  */
  setRadius(radius: Vector2);
  /**
   * Extends the radius to be at least the given radius.
   *
   * @param minRadius the minimum radius
  */
  extendRadius(minRadius: Vector2): void;
  /**
   * Set the minimum Y.
   *
   * @param y the y
  */
  setMinimumY(minimumY: number);
  /**
   * Se the maximum Y.
   *
   * @param y the y
  */
  setMaximumY(maximumY: number);
  /**
   * Get the lower point of a region.
   *
   * @return min. point
  */
  getMinimumPoint(): BlockVector3;
  /**
   * Get the upper point of a region.
   *
   * @return max. point
  */
  getMaximumPoint(): BlockVector3;
  /**
   * Gets the maximum Y value.
   *
   * @return the Y value
  */
  getMaximumY(): number;
  /**
   * Gets the minimum Y value.
   *
   * @return the Y value
  */
  getMinimumY(): number;
  /**
   * Get the number of blocks in the region.
   *
   * @return number of blocks
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  getVolume(): number;
  /**
   * Get X-size.
   *
   * @return width
  */
  getWidth(): number;
  /**
   * Get Y-size.
   *
   * @return height
  */
  getHeight(): number;
  /**
   * Get Z-size.
   *
   * @return length
  */
  getLength(): number;
  /**
   * Expand the region.
   *
   * @param changes array/arguments with multiple related changes
   * @throws RegionOperationException if the operation cannot be performed
  */
  expand(...changes: BlockVector3[]): void;
  /**
   * Contract the region.
   *
   * @param changes array/arguments with multiple related changes
   * @throws RegionOperationException if the operation cannot be performed
  */
  contract(...changes: BlockVector3[]): void;
  /**
   * Shift the region.
   *
   * @param change the change
   * @throws RegionOperationException if the operation cannot be performed
  */
  shift(change: BlockVector3): void;
  /**
   * Checks to see if a point is inside this region.
  */
  contains(position: BlockVector3): boolean;
  /**
   * Sets the height of the cylinder to fit the specified Y.
   *
   * @param y the y value
   * @return true if the area was expanded
  */
  setY(y: number);
  iterator(): Iterator<BlockVector3>;
  /**
   * Get this region as an iterable flat region.
   *
   * @return a flat region iterable
  */
  asFlatRegion(): Iterable<BlockVector2>;
  toString(): string;
  /**
   * Make a clone of the region.
   *
   * @return a cloned version
  */
  clone(): CylinderRegion;
  /**
   * Polygonizes a cross-section or a 2D projection of the region orthogonal to the Y axis.
   *
   * @param maxPoints maximum number of points to generate. -1 for no limit.
   * @return the points.
  */
  polygonize(maxPoints: number): BlockVector2[];
  /**
   * Return a new instance with the given center and radius in the X and Z
   * axes with a Y that extends from the bottom of the extent to the top
   * of the extent.
   *
   * @param extent the extent
   * @param center the center position
   * @param radius the radius in the X and Z axes
   * @return a region
  */
  static createRadius(extent: Extent, center: BlockVector3, radius: number): CylinderRegion;
}
export interface CylinderRegion extends AbstractRegion, FlatRegion {}
/**
 * Utility methods relating to {@link Region}s.
*/
export class Regions {
  /**
   * Get the minimum Y coordinate of the given region using the region's
   * {@link Region#getMinimumPoint()} method.
   *
   * @param region the region
   * @return the Y coordinate
  */
  static minimumY(region: Region): number;
  /**
   * Get the maximum Y coordinate of the given region using the region's
   * {@link Region#getMaximumPoint()} method.
   *
   * @param region the region
   * @return the Y coordinate
  */
  static maximumY(region: Region): number;
  /**
   * Get the minimum Y coordinate of the given region using the region's
   * {@link Region#getMinimumPoint()} method.
   *
   * @param region the region
   * @return the Y coordinate
  */
  static minimumBlockY(region: Region): number;
  /**
   * Get the maximum Y coordinate of the given region using the region's
   * {@link Region#getMaximumPoint()} method.
   *
   * @param region the region
   * @return the Y coordinate
  */
  static maximumBlockY(region: Region): number;
  /**
   * Attempt to get a {@link FlatRegion} from the given region.
   *
   * If the given region is already a {@link FlatRegion}, then the region
   * will be cast and returned. Otherwise, a new {@link CuboidRegion} will
   * be created covers the provided region's minimum and maximum extents.
   *
   * @param region the region
   * @return a flat region
  */
  static asFlatRegion(region: Region): FlatRegion;
}
/**
 * Represents a physical shape.
*/
export class Region extends Iterable<BlockVector3> {
  /**
   * Get the lower point of a region.
   *
   * @return min. point
  */
  getMinimumPoint(): BlockVector3;
  /**
   * Get the upper point of a region.
   *
   * @return max. point
  */
  getMaximumPoint(): BlockVector3;
  /**
   * Get the bounding box of this region as a {@link CuboidRegion}.
   *
   * @return the bounding box
  */
  getBoundingBox(): CuboidRegion;
  /**
   * Get the center point of a region.
   * Note: Coordinates will not be integers
   * if the corresponding lengths are even.
   *
   * @return center point
  */
  getCenter(): Vector3;
  /**
   * Get the number of blocks in the region.
   *
   * @return number of blocks
   * @deprecated use {@link Region#getVolume()} to prevent overflows
  */
  getArea(): number;
  /**
   * Get the number of blocks in the region.
   *
   * @return number of blocks
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  getVolume(): number;
  /**
   * Get X-size.
   *
   * @return width
  */
  getWidth(): number;
  /**
   * Get Y-size.
   *
   * @return height
  */
  getHeight(): number;
  /**
   * Get Z-size.
   *
   * @return length
  */
  getLength(): number;
  /**
   * Expand the region.
   *
   * @param changes array/arguments with multiple related changes
   * @throws RegionOperationException if the operation cannot be performed
  */
  expand(...changes: BlockVector3[]): void;
  /**
   * Contract the region.
   *
   * @param changes array/arguments with multiple related changes
   * @throws RegionOperationException if the operation cannot be performed
  */
  contract(...changes: BlockVector3[]): void;
  /**
   * Shift the region.
   *
   * @param change the change
   * @throws RegionOperationException if the operation cannot be performed
  */
  shift(change: BlockVector3): void;
  /**
   * Returns true based on whether the region contains the point.
   *
   * @param position the position
   * @return true if contained
  */
  contains(position: BlockVector3): boolean;
  /**
   * Get a list of chunks.
   *
   * @return a list of chunk coordinates
  */
  getChunks(): Set<BlockVector2>;
  /**
   * Return a list of 16*16*16 chunks in a region.
   *
   * @return the chunk cubes this region overlaps with
  */
  getChunkCubes(): Set<BlockVector3>;
  /**
   * Sets the world that the selection is in.
   *
   * @return the world, or null
  */
  getWorld(): World | null;
  /**
   * Sets the world that the selection is in.
   *
   * @param world the world, which may be null
  */
  setWorld(world: World | null);
  /**
   * Make a clone of the region.
   *
   * @return a cloned version
  */
  clone(): Region;
  /**
   * Polygonizes a cross-section or a 2D projection of the region orthogonal to the Y axis.
   *
   * @param maxPoints maximum number of points to generate. -1 for no limit.
   * @return the points.
  */
  polygonize(maxPoints: number): BlockVector2[];
}
export interface Region extends Iterable<BlockVector3>, Cloneable {}
/**
 * Represents a 2D polygonal region.
*/
export class Polygonal2DRegion extends AbstractRegion {
  /**
   * Construct the region.
  */
  constructor();
  /**
   * Construct the region.
   *
   * @param world the world
  */
  constructor(world: World);
  /**
   * Construct the region.
   *
   * @param world the world
   * @param points list of points
   * @param minY minimum Y
   * @param maxY maximum Y
  */
  constructor(world: World, points: BlockVector2[], minY: number, maxY: number);
  /**
   * Make a copy of another region.
   *
   * @param region the other region
  */
  constructor(region: Polygonal2DRegion);
  /**
   * Get the list of points.
   *
   * @return a list of points
  */
  getPoints(): BlockVector2[];
  /**
   * Add a point to the list.
   *
   * @param position the position
  */
  addPoint(position: BlockVector2): void;
  /**
   * Add a point to the list.
   *
   * @param position the position
  */
  addPoint(position: BlockVector3): void;
  /**
   * Gets the minimum Y value.
   *
   * @return the Y value
  */
  getMinimumY(): number;
  /**
   * Set the minimum Y.
   *
   * @param y the Y
  */
  setMinimumY(minimumY: number);
  /**
   * Gets the maximum Y value.
   *
   * @return the Y value
  */
  getMaximumY(): number;
  /**
   * Set the maximum Y.
   *
   * @param y the Y
  */
  setMaximumY(maximumY: number);
  /**
   * Get the lower point of a region.
   *
   * @return min. point
  */
  getMinimumPoint(): BlockVector3;
  /**
   * Get the upper point of a region.
   *
   * @return max. point
  */
  getMaximumPoint(): BlockVector3;
  /**
   * Get the number of blocks in the region.
   *
   * @return number of blocks
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  getVolume(): number;
  /**
   * Get X-size.
   *
   * @return width
  */
  getWidth(): number;
  /**
   * Get Y-size.
   *
   * @return height
  */
  getHeight(): number;
  /**
   * Get Z-size.
   *
   * @return length
  */
  getLength(): number;
  /**
   * Expand the region.
   *
   * @param changes array/arguments with multiple related changes
   * @throws RegionOperationException if the operation cannot be performed
  */
  expand(...changes: BlockVector3[]): void;
  /**
   * Contract the region.
   *
   * @param changes array/arguments with multiple related changes
   * @throws RegionOperationException if the operation cannot be performed
  */
  contract(...changes: BlockVector3[]): void;
  /**
   * Shift the region.
   *
   * @param change the change
   * @throws RegionOperationException if the operation cannot be performed
  */
  shift(change: BlockVector3): void;
  /**
   * Returns true based on whether the region contains the point.
   *
   * @param position the position
   * @return true if contained
  */
  contains(position: BlockVector3): boolean;
  /**
   * Checks to see if a point is inside a region.
   *
   * @param points a list of points
   * @param minY the min Y
   * @param maxY the max Y
   * @param pt the position to check
   * @return true if the given polygon contains the given point
  */
  static contains(points: BlockVector2[], minY: number, maxY: number, pt: BlockVector3): boolean;
  /**
   * Return the number of points.
   *
   * @return the number of points
  */
  size(): number;
  /**
   * Expand the height of the polygon to fit the specified Y.
   *
   * @param y the amount to expand
   * @return true if the area was expanded
  */
  expandY(y: number): boolean;
  iterator(): Iterator<BlockVector3>;
  /**
   * Get this region as an iterable flat region.
   *
   * @return a flat region iterable
  */
  asFlatRegion(): Iterable<BlockVector2>;
  /**
   * Returns string representation in the format
   * "(x1, z1) - ... - (xN, zN) * (minY - maxY)"
   *
   * @return string
  */
  toString(): string;
  /**
   * Make a clone of the region.
   *
   * @return a cloned version
  */
  clone(): Polygonal2DRegion;
  /**
   * Polygonizes a cross-section or a 2D projection of the region orthogonal to the Y axis.
   *
   * @param maxPoints maximum number of points to generate. -1 for no limit.
   * @return the points.
  */
  polygonize(maxPoints: number): BlockVector2[];
}
export interface Polygonal2DRegion extends AbstractRegion, FlatRegion {}
/**
 * Represents an ellipsoid region.
*/
export class EllipsoidRegion extends AbstractRegion {
  /**
   * Construct a new instance of this ellipsoid region.
   *
   * @param pos1 the first position
   * @param pos2 the second position
  */
  constructor(pos1: BlockVector3, pos2: Vector3);
  /**
   * Construct a new instance of this ellipsoid region.
   *
   * @param world the world
   * @param center the center
   * @param radius the radius
  */
  constructor(world: World, center: BlockVector3, radius: Vector3);
  constructor(ellipsoidRegion: EllipsoidRegion);
  getMinimumPoint(): BlockVector3;
  getMaximumPoint(): BlockVector3;
  getVolume(): number;
  getWidth(): number;
  getHeight(): number;
  getLength(): number;
  expand(...changes: BlockVector3[]): void;
  contract(...changes: BlockVector3[]): void;
  shift(change: BlockVector3): void;
  /**
   * Get the center.
   *
   * @return center
  */
  getCenter(): Vector3;
  /**
   * Set the center.
   *
   * @param center the center
  */
  setCenter(center: BlockVector3);
  /**
   * Get the radii.
   *
   * @return radii
  */
  getRadius(): Vector3;
  /**
   * Set the radii.
   *
   * @param radius the radius
  */
  setRadius(radius: Vector3);
  getChunks(): Set<BlockVector2>;
  contains(position: BlockVector3): boolean;
  /**
   * Returns string representation in the format
   * "(centerX, centerY, centerZ) - (radiusX, radiusY, radiusZ)".
   *
   * @return string
  */
  toString(): string;
  extendRadius(minRadius: Vector3): void;
  clone(): EllipsoidRegion;
}
export class FlatRegion extends Region {
  /**
   * Gets the minimum Y value.
   *
   * @return the Y value
  */
  getMinimumY(): number;
  /**
   * Gets the maximum Y value.
   *
   * @return the Y value
  */
  getMaximumY(): number;
  /**
   * Get this region as an iterable flat region.
   *
   * @return a flat region iterable
  */
  asFlatRegion(): Iterable<BlockVector2>;
}
/**
 * An intersection of several other regions. Any location that is contained in one
 * of the child regions is considered as contained by this region.
 *
 * {@link #iterator()} returns a special iterator that will iterate through
 * the iterators of each region in an undefined sequence. Some positions may
 * be repeated if the position is contained in more than one region, but this cannot
 * be guaranteed to occur.
*/
export class RegionIntersection extends AbstractRegion {
  /**
   * Create a new instance with the included list of regions.
   *
   * @param regions a list of regions, which is copied
  */
  constructor(regions: Region[]);
  /**
   * Create a new instance with the included list of regions.
   *
   * @param regions a list of regions, which is copied
  */
  constructor(...regions: Region[]);
  /**
   * Create a new instance with the included list of regions.
   *
   * @param world   the world
   * @param regions a list of regions, which is copied
  */
  constructor(world: World, regions: Region[]);
  /**
   * Create a new instance with the included list of regions.
   *
   * @param world   the world
   * @param regions an array of regions, which is copied
  */
  constructor(world: World, ...regions: Region[]);
  getMinimumPoint(): BlockVector3;
  getMaximumPoint(): BlockVector3;
  expand(...changes: BlockVector3[]): void;
  contract(...changes: BlockVector3[]): void;
  contains(position: BlockVector3): boolean;
  iterator(): Iterator<BlockVector3>;
}
/**
 * Region selectors create {@link Region}s from a series of "selected points."
 * They are used, for example, to allow users to create a {@link CuboidRegion}
 * by selecting two corners of the cuboid.
*/
export class RegionSelector {
  /**
   * Get the world for the region selector.
   *
   * @return a world, which may be null
  */
  getWorld(): World | null;
  /**
   * Set the world for the region selector.
   *
   * @param world the world, which may be null
  */
  setWorld(world: World | null);
  /**
   * Called when the first point is selected.
   *
   * @param position the position
   * @return true if something changed
  */
  selectPrimary(position: BlockVector3, limits: SelectorLimits): boolean;
  /**
   * Called when the second point is selected.
   *
   * @param position the position
   * @return true if something changed
  */
  selectSecondary(position: BlockVector3, limits: SelectorLimits): boolean;
  /**
   * Tell the player information about his/her primary selection.
   *
   * @param actor the actor
   * @param session the session
   * @param position position
  */
  explainPrimarySelection(actor: Actor, session: LocalSession, position: BlockVector3): void;
  /**
   * Tell the player information about his/her secondary selection.
   *
   * @param actor the actor
   * @param session the session
   * @param position position
  */
  explainSecondarySelection(actor: Actor, session: LocalSession, position: BlockVector3): void;
  /**
   * Tell the player information about the region's changes. This may resend
   * all the defining region information if needed.
   *
   * @param actor the actor
   * @param session the session
  */
  explainRegionAdjust(actor: Actor, session: LocalSession): void;
  /**
   * Get the primary position.
   *
   * @return the primary position
   * @throws IncompleteRegionException thrown if a region has not been fully defined
  */
  getPrimaryPosition(): BlockVector3;
  /**
   * Get the selection.
   *
   * @return the created region
   * @throws IncompleteRegionException thrown if a region has not been fully defined
  */
  getRegion(): Region;
  /**
   * Get the region even if it's not fully defined.
   *
   * @return an incomplete region object that is incomplete
  */
  getIncompleteRegion(): Region;
  /**
   * Returns whether the region has been fully defined.
   *
   * @return true if a selection is available
  */
  isDefined(): boolean;
  /**
   * Get the number of blocks inside the region.
   *
   * @return number of blocks, or -1 if undefined
   * @deprecated use {@link RegionSelector#getVolume()}
  */
  getArea(): number;
  /**
   * Get the number of blocks inside the region.
   *
   * @return number of blocks, or -1 if undefined
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  getVolume(): number;
  /**
   * Update the selector with changes to the region.
  */
  learnChanges(): void;
  /**
   * Clear the selection.
  */
  clear(): void;
  /**
   * Get a lowercase name of this region selector type.
   *
   * @return a lower case name of the type
  */
  getTypeName(): string;
  /**
   * Get lines of information about the selection.
   *
   * @return a list of lines describing the region
  */
  getInformationLines(): string[];
  /**
   * Get lines of information about the selection.
   *
   * @return a list of lines describing the region.
  */
  getSelectionInfoLines(): Component[];
}
/**
 * A region that contains no points.
*/
export class NullRegion extends Region {
  /**
   * Get the lower point of a region.
   *
   * @return min. point
  */
  getMinimumPoint(): BlockVector3;
  /**
   * Get the upper point of a region.
   *
   * @return max. point
  */
  getMaximumPoint(): BlockVector3;
  /**
   * Get the center point of a region.
   * Note: Coordinates will not be integers
   * if the corresponding lengths are even.
   *
   * @return center point
  */
  getCenter(): Vector3;
  /**
   * Get the number of blocks in the region.
   *
   * @return number of blocks
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  getVolume(): number;
  /**
   * Get X-size.
   *
   * @return width
  */
  getWidth(): number;
  /**
   * Get Y-size.
   *
   * @return height
  */
  getHeight(): number;
  /**
   * Get Z-size.
   *
   * @return length
  */
  getLength(): number;
  /**
   * Expand the region.
   *
   * @param changes array/arguments with multiple related changes
   * @throws RegionOperationException if the operation cannot be performed
  */
  expand(...changes: BlockVector3[]): void;
  /**
   * Contract the region.
   *
   * @param changes array/arguments with multiple related changes
   * @throws RegionOperationException if the operation cannot be performed
  */
  contract(...changes: BlockVector3[]): void;
  /**
   * Shift the region.
   *
   * @param change the change
   * @throws RegionOperationException if the operation cannot be performed
  */
  shift(change: BlockVector3): void;
  /**
   * Returns true based on whether the region contains the point.
   *
   * @param position the position
   * @return true if contained
  */
  contains(position: BlockVector3): boolean;
  /**
   * Get a list of chunks.
   *
   * @return a list of chunk coordinates
  */
  getChunks(): Set<BlockVector2>;
  /**
   * Return a list of 16*16*16 chunks in a region.
   *
   * @return the chunk cubes this region overlaps with
  */
  getChunkCubes(): Set<BlockVector3>;
  /**
   * Sets the world that the selection is in.
   *
   * @return the world, or null
  */
  getWorld(): World;
  /**
   * Sets the world that the selection is in.
   *
   * @param world the world, which may be null
  */
  setWorld(world: World);
  /**
   * Make a clone of the region.
   *
   * @return a cloned version
  */
  clone(): NullRegion;
  /**
   * Polygonizes a cross-section or a 2D projection of the region orthogonal to the Y axis.
   *
   * @param maxPoints maximum number of points to generate. -1 for no limit.
   * @return the points.
  */
  polygonize(maxPoints: number): BlockVector2[];
  iterator(): Iterator<BlockVector3>;
}

}
declare module 'com.sk89q.worldedit.util.net.HttpRequest' {
import { Map } from 'java.util';
import { OutputStream, File } from 'java.io';
/**
 * Used with {@link #bodyUrlEncodedForm(Form)}.
*/
export class Form {
  readonly elements: Map<string, string>;
  /**
   * Add a key/value to the form.
   *
   * @param key   the key
   * @param value the value
   * @return this object
  */
  add(key: string, value: string): Form;
  getFormDataSeparator(): string;
  toFormDataString(): string;
  toUrlEncodedString(): string;
  /**
   * Create a new form.
   *
   * @return a new form
  */
  static create(): Form;
}
/**
 * Used to buffer the response in memory.
*/
export class BufferedResponse {
  /**
   * Return the result as bytes.
   *
   * @return the data
  */
  asBytes(): number[];
  /**
   * Return the result as a string.
   *
   * @param encoding the encoding
   * @return the string
   * @throws java.io.IOException on I/O error
  */
  asString(encoding: string): string;
  /**
   * Save the result to a file.
   *
   * @param file the file
   * @return this object
   * @throws java.io.IOException  on I/O error
   * @throws InterruptedException on interruption
  */
  saveContent(file: File): BufferedResponse;
  /**
   * Save the result to an output stream.
   *
   * @param out the output stream
   * @return this object
   * @throws java.io.IOException  on I/O error
   * @throws InterruptedException on interruption
  */
  saveContent(out: OutputStream): BufferedResponse;
}

}
declare module 'com.sk89q.worldedit.internal.anvil.ChunkDeletionInfo' {
import { BlockVector2 } from 'com.sk89q.worldedit.math';
import { List } from 'java.util';
export class ChunkBatch {
  worldPath: string;
  backup: boolean;
  deletionPredicates: DeletionPredicate[];
  chunks: BlockVector2[];
  minChunk: BlockVector2;
  maxChunk: BlockVector2;
  getChunkCount(): number;
}
export class DeletionPredicate {
  property: string;
  comparison: string;
  value: string;
}

}
declare module 'com.sk89q.worldedit.blocks' {
import { Property } from 'com.sk89q.worldedit.registry.state';
import { ItemType } from 'com.sk89q.worldedit.world.item';
import { Collection, Map } from 'java.util';
import { ListTag, CompoundTag } from 'com.sk89q.jnbt';
import { NbtValued } from 'com.sk89q.worldedit.world';
import { Component } from 'com.sk89q.worldedit.util.formatting.text';
import { BlockState, BlockType, BlockStateHolder, BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * Represents a stack of BaseItems.
 *
 * This class may be removed in the future.
*/
export class BaseItemStack extends BaseItem {
  /**
   * Construct the object with default stack size of one, with damage value of 0.
   *
   * @param itemType The item type
  */
  constructor(itemType: ItemType);
  /**
   * Construct the object.
   *
   * @param itemType The item type
   * @param amount amount in the stack
  */
  constructor(itemType: ItemType, amount: number);
  /**
   * Construct the object.
   *
   * @param id The item type
   * @param tag Tag value
   * @param amount amount in the stack
  */
  constructor(id: ItemType, tag: CompoundTag, amount: number);
  /**
   * Get the number of items in the stack.
   *
   * @return the amount
  */
  getAmount(): number;
  /**
   * Set the amount of items in the stack.
   *
   * @param amount the amount to set
  */
  setAmount(amount: number);
  getRichName(): Component;
}
/**
 * A mob spawner block.
*/
export class MobSpawnerBlock extends BaseBlock {
  /**
   * Construct the mob spawner block with a specified data value.
   *
   * @param blockState The block state
  */
  constructor(blockState: BlockState);
  /**
   * Construct the mob spawner block.
   *
   * @param blockState The block state
   * @param mobType mob type
  */
  constructor(blockState: BlockState, mobType: string);
  /**
   * Get the mob type.
   *
   * @return the mob type
  */
  getMobType(): string;
  /**
   * Set the mob type.
   *
   * @param mobType the mob type
  */
  setMobType(mobType: string);
  /**
   * Get the spawn delay.
   *
   * @return the delay
  */
  getDelay(): number;
  /**
   * Set the spawn delay.
   *
   * @param delay the delay to set
  */
  setDelay(delay: number);
  hasNbtData(): boolean;
  getNbtId(): string;
  getNbtData(): CompoundTag;
  setNbtData(nbtData: CompoundTag);
}
/**
 * Represents an item, without an amount value. See {@link BaseItemStack}
 * for an instance with stack amount information.
 *
 * This class may be removed in the future.
*/
export class BaseItem extends NbtValued {
  /**
   * Construct the object.
   *
   * @param itemType Type of the item
  */
  constructor(itemType: ItemType);
  /**
   * Construct the object.
   *
   * @param itemType Type of the item
   * @param tag NBT Compound tag
  */
  constructor(itemType: ItemType, tag: CompoundTag | null);
  /**
   * Get the type of item.
   *
   * @return the type
  */
  getType(): ItemType;
  /**
   * Set the type of the item.
   *
   * @param itemType The type to set
  */
  setType(type: ItemType);
  /**
   * Returns whether the block contains NBT data. {@link #getNbtData()}
   * must not return null if this method returns true.
   *
   * @return true if there is NBT data
  */
  hasNbtData(): boolean;
  /**
   * Get the object's NBT data (tile entity data). The returned tag, if
   * modified in any way, should be sent to {@link #setNbtData(CompoundTag)}
   * so that the instance knows of the changes. Making changes without
   * calling {@link #setNbtData(CompoundTag)} could have unintended
   * consequences.
   *
   * {@link #hasNbtData()} must return true if and only if method does
   * not return null.
   *
   * @return compound tag, or null
  */
  getNbtData(): CompoundTag | null;
  /**
   * Set the object's NBT data (tile entity data).
   *
   * @param nbtData NBT data, or null if no data
  */
  setNbtData(nbtData: CompoundTag | null);
}
/**
 * Represents a sign block.
*/
export class SignBlock extends BaseBlock {
  /**
   * Construct the sign with text.
   *
   * @param blockState The block state
   * @param text lines of text
  */
  constructor(blockState: BlockState, text: string[]);
  /**
   * Get the text.
   *
   * @return the text
  */
  getText(): string[];
  /**
   * Set the text.
   *
   * @param text the text to set
  */
  setText(text: string[]);
  hasNbtData(): boolean;
  getNbtId(): string;
  getNbtData(): CompoundTag;
  setNbtData(nbtData: CompoundTag);
}
/**
 * Indicates a block that contains extra data identified as an NBT structure.
 * Compared to a {@link NbtValued}, tile entity blocks also contain an ID.
 *
 * @see NbtValued
*/
export class TileEntityBlock extends NbtValued {
  /**
   * Return the name of the title entity ID.
   *
   * @return tile entity ID, non-null string
  */
  getNbtId(): string;
}
/**
 * A skull block.
*/
export class SkullBlock extends BaseBlock {
  /**
   * Construct the skull block with a default type of skelton.
   * @param state BlockState to set
  */
  constructor(state: BlockState);
  /**
   * Construct the skull block with a given rotation and owner.
   * The type is assumed to be player unless owner is null or empty.
   * @param blockState BlockState to set
   * @param owner name of player
  */
  constructor(blockState: BlockState, owner: string);
  /**
   * Set the skull's owner. Automatically sets type to player if not empty or null.
   * @param owner player name to set the skull to
  */
  setOwner(owner: string);
  /**
   * Get the skull's owner. Returns null if unset.
   * @return player name or null
  */
  getOwner(): string;
  hasNbtData(): boolean;
  getNbtId(): string;
  getNbtData(): CompoundTag;
  setNbtData(nbtData: CompoundTag);
}
/**
 * Block-related utility methods.
*/
export class Blocks {
  /**
   * Checks whether a given block is in a list of base blocks.
   *
   * @param collection the collection
   * @param o the block
   * @return true if the collection contains the given block
  */
  static containsFuzzy<B>(collection: Collection<BlockStateHolder<any>>, o: B): boolean;
  /**
   * Parses a string->string map to find the matching Property and values for the given BlockType.
   *
   * @param states the desired states and values
   * @param type the block type to get properties and values for
   * @return a property->value map
  */
  static resolveProperties(states: Map<string, string>, type: BlockType): Map<Property<any>, any>;
}

}
declare module 'com.sk89q.worldedit.history' {
import { Extent } from 'com.sk89q.worldedit.extent';
/**
 * Provides context for undo and redo operations.
 *
 * For example, {@link BlockChange}s take the {@link Extent} from the
 * context rather than store a reference to one.
*/
export class UndoContext {
  /**
   * Get the extent set on this context.
   *
   * @return an extent or null
  */
  getExtent(): Extent | null;
  /**
   * Set the extent on this context.
   *
   * @param extent an extent or null
  */
  setExtent(extent: Extent | null);
}

}
declare module 'com.sk89q.worldedit.extent.TracingExtent' {
import { Enum } from 'java.lang';
export class Action extends Enum<Action> {
  static readonly SET_BLOCK: Action;
  static readonly SET_BIOME: Action;
  static readonly CREATE_ENTITY: Action;
  static valueOf(name: string): Action;
  static values(): Action[];
}

}
declare module 'com.sk89q.worldedit.function.block' {
import { Property } from 'com.sk89q.worldedit.registry.state';
import { List, Map } from 'java.util';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { Countable } from 'com.sk89q.worldedit.util';
import { World } from 'com.sk89q.worldedit.world';
import { EditSession } from 'com.sk89q.worldedit';
import { Pattern } from 'com.sk89q.worldedit.function.pattern';
import { Extent } from 'com.sk89q.worldedit.extent';
import { RegionFunction, LayerFunction } from 'com.sk89q.worldedit.function';
import { BlockState } from 'com.sk89q.worldedit.world.block';
import { Transform } from 'com.sk89q.worldedit.math.transform';
/**
 * Copies blocks from one extent to another.
*/
export class ExtentBlockCopy extends RegionFunction {
  /**
   * Make a new copy.
   *
   * @param source the source extent
   * @param from the source offset
   * @param destination the destination extent
   * @param to the destination offset
   * @param transform a transform to apply to positions (after source offset, before destination offset)
  */
  constructor(source: Extent, from: BlockVector3, destination: Extent, to: BlockVector3, transform: Transform);
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3): boolean;
}
/**
 * Replaces blocks with a given pattern.
*/
export class BlockReplace extends RegionFunction {
  /**
   * Create a new instance.
   *
   * @param extent an extent
   * @param pattern a pattern
  */
  constructor(extent: Extent, pattern: Pattern);
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3): boolean;
}
/**
 * Keeps a count of the number of times that {@link #apply(BlockVector3)} is
 * called.
*/
export class Counter extends RegionFunction {
  /**
   * Returns the number of blocks that have been counted.
   *
   * @return the number of blocks
  */
  getCount(): number;
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3): boolean;
}
export class SnowSimulator extends LayerFunction {
  constructor(extent: Extent, stack: boolean);
  getAffected(): number;
  /**
   * Returns whether the given block should be "passed through" when
   * conducting the ground search.
   *
   * @param position return whether the given block is the ground
   * @return true if the search should stop
  */
  isGround(position: BlockVector3): boolean;
  /**
   * Apply the function to the given position.
   *
   * The depth would be the number of blocks from the surface if
   * a {@link LayerVisitor} was used.
   *
   * @param position the position
   * @param depth the depth as a number starting from 0
   * @return true whether this method should be called for further layers
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3, depth: number): boolean;
}
/**
 * Makes a layer of grass on top, three layers of dirt below, and smooth stone
 * only below that for all layers that originally consist of grass, dirt,
 * or smooth stone.
*/
export class Naturalizer extends LayerFunction {
  /**
   * Make a new naturalizer.
   *
   * @param editSession an edit session
  */
  constructor(editSession: EditSession);
  /**
   * Get the number of affected objects.
   *
   * @return the number of affected
  */
  getAffected(): number;
  /**
   * Returns whether the given block should be "passed through" when
   * conducting the ground search.
   *
   * @param position return whether the given block is the ground
   * @return true if the search should stop
  */
  isGround(position: BlockVector3): boolean;
  /**
   * Apply the function to the given position.
   *
   * The depth would be the number of blocks from the surface if
   * a {@link LayerVisitor} was used.
   *
   * @param position the position
   * @param depth the depth as a number starting from 0
   * @return true whether this method should be called for further layers
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3, depth: number): boolean;
}
export class BlockDistributionCounter extends RegionFunction {
  constructor(extent: Extent, separateStates: boolean);
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3): boolean;
  /**
   * Gets the distribution list.
   *
   * @return The distribution
  */
  getDistribution(): Countable<BlockState>[];
}

}
declare module 'com.sk89q.worldedit.world.storage' {
import { ChunkDataInputSupplier } from 'com.sk89q.worldedit.world.storage.ChunkStoreHelper';
import { ListTag, CompoundTag } from 'com.sk89q.jnbt';
import { Vector2, BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { Chunk } from 'com.sk89q.worldedit.world.chunk';
import { Location } from 'com.sk89q.worldedit.util';
import { DataException, World } from 'com.sk89q.worldedit.world';
import { InputStream, Closeable, DataInputStream, File } from 'java.io';
import { ForwardSeekableInputStream } from 'com.sk89q.worldedit.util.io';
import { ZipFile } from 'java.util.zip';
import { Extent } from 'com.sk89q.worldedit.extent';
export class ChunkStoreException extends DataException {
  constructor(msg: string);
  constructor();
}
export class FileMcRegionChunkStore extends McRegionChunkStore {
  /**
   * Create an instance. The passed path is the folder to read the
   * chunk files from.
   *
   * @param path a path
  */
  constructor(path: File);
  isValid(): boolean;
}
/**
 * Represents chunk stores that use Alpha's file format for storing chunks.
 * The code to resolve the filename is already implemented in this class
 * and an inheriting class merely needs to implement getInputStream().
*/
export class LegacyChunkStore extends ChunkStore {
  /**
   * Get the filename of a chunk.
   *
   * @param position chunk position
   * @param separator folder separator character
   * @return pathname
  */
  static getFilename(position: BlockVector2, separator: string): string;
  /**
   * Get the filename of a chunk, using the system's default path
   * separator.
   *
   * @param position chunk position
   * @return pathname
  */
  static getFilename(position: BlockVector2): string;
  getChunkTag(position: BlockVector2, world: World): CompoundTag;
}
/**
 * Reader for a MCRegion file. This reader works on input streams, meaning
 * that it can be used to read files from non-file based sources.
*/
export class McRegionReader {
  static readonly CHUNK_HEADER_SIZE: number;
  /**
   * Construct the reader.
   *
   * @param stream the stream
   * @throws IOException if there is an error getting the region data
  */
  constructor(stream: InputStream);
  /**
   * Gets the uncompressed data input stream for a chunk.
   *
   * @param position chunk position
   * @return an input stream
   * @throws IOException if there is an error getting the chunk data
   * @throws DataException if there is an error getting the chunk data
  */
  getChunkInputStream(position: BlockVector2): InputStream;
  /**
   * Returns whether the file contains a chunk.
   *
   * @param x the X coordinate
   * @param z the Z coordinate
   * @return the offset
  */
  hasChunk(x: number, z: number): boolean;
  /**
   * Close the stream.
  */
  close(): void;
}
/**
 * Thrown if the world is missing.
*/
export class MissingWorldException extends ChunkStoreException {
  constructor();
  constructor(worldName: string);
  constructor(msg: string, worldName: string);
  /**
   * Get name of the world in question. May be null if unknown.
   *
   * @return the world name
  */
  getWorldName(): string | null;
}
/**
 * Thrown if a chunk is missing.
*/
export class MissingChunkException extends ChunkStoreException {
  constructor();
  constructor(position: Vector2);
  /**
   * Get chunk position in question. May be null if unknown.
   *
   * @return a chunk position
  */
  getChunkPosition(): Vector2;
}
/**
 * Represents the chunk store used by Minecraft alpha but zipped.
*/
export class ZippedMcRegionChunkStore extends McRegionChunkStore {
  /**
   * Create an instance. The folder argument lets you choose a folder or
   * path to look into in the ZIP for the files. Use a blank string for
   * the folder to not look into a subdirectory.
   *
   * @param zipFile the ZIP file
   * @param folder the folder
   * @throws IOException if there is an error opening the zip
   * @throws ZipException if there is an error opening the zip
  */
  constructor(zipFile: File, folder: string);
  /**
   * Create an instance. The sub-folder containing the chunk data will
   * be detected.
   *
   * @param zipFile the ZIP file
   * @throws IOException if there is an error opening the zip
   * @throws ZipException if there is an error opening the zip
  */
  constructor(zipFile: File);
  close(): void;
  isValid(): boolean;
}
/**
 * Represents the chunk store used by Minecraft alpha but zipped.
*/
export class ZippedLegacyChunkStore extends LegacyChunkStore {
  /**
   * Create an instance. The folder argument lets you choose a folder or
   * path to look into in the ZIP for the files. Use a blank string for
   * the folder to not look into a subdirectory.
   *
   * @param zipFile the zip file
   * @param folder the folder
   * @throws IOException if there is an error opening the zip
   * @throws ZipException if there is an error opening the zip
  */
  constructor(zipFile: File, folder: string);
  /**
   * Create an instance. The subfolder containing the chunk data will
   * be detected.
   *
   * @param zipFile the zip file
   * @throws IOException if there is an error opening the zip
   * @throws ZipException if there is an error opening the zip
  */
  constructor(zipFile: File);
  close(): void;
  isValid(): boolean;
}
export class ChunkStoreHelper {
  static readCompoundTag(input: ChunkDataInputSupplier): CompoundTag;
  /**
   * Convert a chunk NBT tag into a {@link Chunk} implementation.
   *
   * @param rootTag the root tag of the chunk
   * @return a Chunk implementation
   * @throws DataException if the rootTag is not valid chunk data
  */
  static getChunk(rootTag: CompoundTag): Chunk;
}
/**
 * Represents chunk storage mechanisms.
*/
export class ChunkStore extends Closeable {
  /**
   * The shift for converting to/from a chunk position.
   *
   * 
   * `>>` - to chunk
   * `<<` - from chunk
   * 
  */
  static readonly CHUNK_SHIFTS: number;
  /**
   * The shift for converting to/from a 3D chunk position.
   *
   * 
   * `>>` - to Y of 3D-chunk
   * `<<` - from Y of 3D-chunk
   * 
  */
  static readonly CHUNK_SHIFTS_Y: number;
  /**
   * Convert a position to a 3D-chunk. Y is counted in steps of 256.
   *
   * @param position the position
   * @return chunk coordinates
  */
  static toChunk3d(position: BlockVector3): BlockVector3;
  /**
   * Convert a position to a chunk.
   *
   * @param position the position
   * @return chunk coordinates
  */
  static toChunk(position: BlockVector3): BlockVector2;
  /**
   * Get the tag for a chunk.
   *
   * @param position the position of the chunk
   * @return tag
   * @throws DataException thrown on data error
   * @throws IOException thrown on I/O error
  */
  getChunkTag(position: BlockVector2, world: World): CompoundTag;
  /**
   * Get a chunk at a location.
   *
   * @param position the position of the chunk
   * @return a chunk
   * @throws ChunkStoreException thrown if there is an error from the chunk store
   * @throws DataException thrown on data error
   * @throws IOException thrown on I/O error
  */
  getChunk(position: BlockVector2, world: World): Chunk;
  close(): void;
  /**
   * Returns whether the chunk store is of this type.
   *
   * @return true if valid
  */
  isValid(): boolean;
}
export class McRegionChunkStore extends ChunkStore {
  /**
   * Get the filename of a region file.
   *
   * @param position chunk position
   * @return the filename
  */
  static getFilename(position: BlockVector2): string;
  getChunkTag(position: BlockVector2, world: World): CompoundTag;
  close(): void;
}
/**
 * Represents the chunk store used by Minecraft alpha but zipped. Uses
 * the replacement classes for java.util.zip.* from TrueZip.
*/
export class TrueZipLegacyChunkStore extends LegacyChunkStore {
  /**
   * Create an instance. The folder argument lets you choose a folder or
   * path to look into in the ZIP for the files. Use a blank string for
   * the folder to not look into a subdirectory.
   *
   * @param zipFile the ZIP file to open
   * @param folder the folder to look into in the ZIP
   * @throws IOException if there is an error opening the zip
   * @throws ZipException if there is an error opening the zip
  */
  constructor(zipFile: File, folder: string);
  /**
   * Create an instance. The subf-older containing the chunk data will
   * be detected.
   *
   * @param zipFile the ZIP file to open
   * @throws IOException if there is an error opening the zip
   * @throws ZipException if there is an error opening the zip
  */
  constructor(zipFile: File);
  close(): void;
  isValid(): boolean;
}
/**
 * Represents the chunk store used by Minecraft Alpha.
*/
export class FileLegacyChunkStore extends LegacyChunkStore {
  /**
   * Create an instance. The passed path is the folder to read the
   * chunk files from.
   *
   * @param path path to a folder
  */
  constructor(path: File);
  isValid(): boolean;
}
/**
 * Represents the chunk store used by Minecraft but zipped. Uses
 * the replacement classes for java.util.zip.* from TrueZip.
*/
export class TrueZipMcRegionChunkStore extends McRegionChunkStore {
  /**
   * Create an instance. The folder argument lets you choose a folder or
   * path to look into in the ZIP for the files. Use a blank string for
   * the folder to not look into a subdirectory.
   *
   * @param zipFile the ZIP file
   * @param folder the folder to look into
   * @throws IOException if there is an error opening the zip
   * @throws ZipException if there is an error opening the zip
  */
  constructor(zipFile: File, folder: string);
  /**
   * Create an instance. The subfolder containing the chunk data will
   * be detected.
   *
   * @param zipFile the ZIP file
   * @throws IOException if there is an error opening the zip
   * @throws ZipException if there is an error opening the zip
  */
  constructor(zipFile: File);
  close(): void;
  isValid(): boolean;
}
export class InvalidFormatException extends DataException {
  constructor(msg: string);
}
/**
 * Utility methods for working with NBT data used in Minecraft.
*/
export class NBTConversions {
  /**
   * Read a `Location` from two list tags, the first of which contains
   * three numbers for the X, Y, and Z components, and the second of
   * which contains two numbers, the yaw and pitch in degrees.
   *
   * For values that are unavailable, their values will be 0.
   *
   * @param extent the extent
   * @param positionTag the position tag
   * @param directionTag the direction tag
   * @return a location
  */
  static toLocation(extent: Extent, positionTag: ListTag, directionTag: ListTag): Location;
}

}
declare module 'com.sk89q.worldedit.regions.polyhedron' {
import { Vector3 } from 'com.sk89q.worldedit.math';
export class Triangle {
  /**
   * Constructs a triangle with the given vertices (counter-clockwise).
   *
   * @param v0 first vertex
   * @param v1 second vertex
   * @param v2 third vertex
  */
  constructor(v0: Vector3, v1: Vector3, v2: Vector3);
  /**
   * Returns the triangle's vertex with the given index, counter-clockwise.
   *
   * @param index Vertex index. Valid input: 0..2
   * @return a vertex
  */
  getVertex(index: number): Vector3;
  /**
   * Returns the triangle's edge with the given index, counter-clockwise.
   *
   * @param index Edge index. Valid input: 0..2
   * @return an edge
  */
  getEdge(index: number): Edge;
  /**
   * Returns whether the given point is above the plane the triangle is in.
   *
   * @param pt the point to test
   * @return true if the point is below
  */
  below(pt: Vector3): boolean;
  /**
   * Returns whether the given point is above the plane the triangle is in.
   *
   * @param pt the point to test
   * @return true if the point is above
  */
  above(pt: Vector3): boolean;
  /**
   * Set the triangle's tag.
   *
   * @param tag the tag
   * @return this object
  */
  tag(tag: string): Triangle;
  toString(): string;
}
export class Edge {
  constructor(start: Vector3, end: Vector3);
  equals(other: any): boolean;
  hashCode(): number;
  toString(): string;
  /**
   * Create a triangle from { this.start, this.end, vertex }
   *
   * @param vertex the 3rd vertex for the triangle
   * @return a triangle
  */
  createTriangle(vertex: Vector3): Triangle;
  /**
   * Create a triangle from { this.start, vertex, this.end }.
   *
   * @param vertex the second vertex
   * @return a new triangle
  */
  createTriangle2(vertex: Vector3): Triangle;
}

}
declare module 'com.sk89q.worldedit.WorldEditManifest' {
import { Enum } from 'java.lang';
export class Kind extends Enum<Kind> {
  static readonly MOD: Kind;
  static readonly PLUGIN: Kind;
  static readonly UNKNOWN: Kind;
  static valueOf(name: string): Kind;
  static values(): Kind[];
  readonly folderName: string;
}

}
declare module 'com.sk89q.worldedit.math.geom' {
import { Vector2, BlockVector2 } from 'com.sk89q.worldedit.math';
import { List } from 'java.util';
/**
 * Helper method for anything related to polygons.
*/
export class Polygons {
  /**
   * Calculates the polygon shape of a cylinder which can then be used for e.g. intersection detection.
   *
   * @param center the center point of the cylinder
   * @param radius the radius of the cylinder
   * @param maxPoints max points to be used for the calculation
   * @return a list of {@link BlockVector2} which resemble the shape as a polygon
  */
  static polygonizeCylinder(center: BlockVector2, radius: Vector2, maxPoints: number): BlockVector2[];
}

}
declare module 'com.sk89q.worldedit.internal.util' {
import { Class } from 'java.lang';
import { List } from 'java.util';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { ExecutorService } from 'java.util.concurrent';
import { BlockType } from 'com.sk89q.worldedit.world.block';
export class DeprecationUtil {
  /**
   * Verify that one of the two functions is overridden. Caller method must be the new method,
   * annotated with {@link NonAbstractForCompatibility}.
   *
   * @param implementingClass the result of calling {@link Object#getClass()}
  */
  static checkDelegatingOverride(implementingClass: Class<any>): void;
  static isSign(blockType: BlockType): boolean;
  static getHeadOwnerKey(): string;
}
export class InfoEntryPoint {
  static main(args: string[]): void;
}
/**
 * An explicit substring. Provides the range from which it was taken.
*/
export class Substring {
  /**
   * Take a substring from `original`, and {@link #wrap(String, int, int)} it into
   * a Substring.
  */
  static from(original: string, start: number): Substring;
  /**
   * Take a substring from `original`, and {@link #wrap(String, int, int)} it into
   * a Substring.
  */
  static from(original: string, start: number, end: number): Substring;
  /**
   * Wrap the given parameters into a Substring instance.
  */
  static wrap(substring: string, start: number, end: number): Substring;
  getSubstring(): string;
  getStart(): number;
  getEnd(): number;
  equals(o: any): boolean;
  hashCode(): number;
  toString(): string;
}
/**
 * Abstract class for adapters.
 *
 * @param  class of adapted objects
*/
export class AbstractAdapter<E> {
  /**
   * Create a new instance.
   *
   * @param object the object to adapt
  */
  constructor(object: E);
  /**
   * Get the object.
   *
   * @return the object
  */
  getHandle(): E;
}
export class LogManagerCompat {

}
/**
 * The annotated method is only non-`abstract` for compatibility with old subclasses,
 * and will be made `abstract` in the next major version of WorldEdit.
 *
 * 
 * Any new subclasses must override the annotated method, failing to do so will result in
 * an exception at runtime.
 * 
*/
export class NonAbstractForCompatibility {

}
export class BiomeMath {
  static readonly HORIZONTAL_SECTION_COUNT: number;
  static readonly HORIZONTAL_BIT_MASK: number;
  /**
   * Compute the index into the MC biome array, for extended-height worlds.
   *
   * @param x the block x coordinate
   * @param y the block y coordinate
   * @param z the block z coordinate
   * @param minY minimum y of the world
   * @param maxY maximum y of the world
   * @return the index into the standard MC biome array
  */
  static computeBiomeIndex(x: number, y: number, z: number, minY: number, maxY: number): number;
}
/**
 * Uses a radix sort to order vectors by region, then chunk, then Y value (max -> min).
*/
export class RegionOptimizedVectorSorter {
  static sort(vectors: BlockVector3[]): void;
  /**
   * For test purposes, or if you want to finely control when parallelism occurs.
   *
   * 
   * `vectors` must be mutable, and will be sorted after this method returns.
   * 
   *
   * @param parallel `true` to sort in parallel
   * @param vectors the vectors to sort
  */
  static sort(parallel: boolean, vectors: BlockVector3[]): void;
}

}
declare module 'com.sk89q.worldedit.bukkit.BukkitBlockRegistry' {
import { PassthroughBlockMaterial } from 'com.sk89q.worldedit.world.registry';
export class BukkitBlockMaterial extends PassthroughBlockMaterial {
  isAir(): boolean;
  isSolid(): boolean;
  isBurnable(): boolean;
  isTranslucent(): boolean;
}

}
declare module 'com.sk89q.worldedit.extent.clipboard.io' {
import { Clipboard } from 'com.sk89q.worldedit.extent.clipboard';
import { Enum } from 'java.lang';
import { NBTInputStream, NBTOutputStream } from 'com.sk89q.jnbt';
import { Set, Collection, List, OptionalInt, Map } from 'java.util';
import { DataFixer } from 'com.sk89q.worldedit.world';
import { InputStream, OutputStream, Closeable, File } from 'java.io';
/**
 * A collection of supported clipboard formats.
*/
export class ClipboardFormat {
  /**
   * Returns the name of this format.
   *
   * @return The name of the format
  */
  getName(): string;
  /**
   * Get a set of aliases.
   *
   * @return a set of aliases
  */
  getAliases(): Set<string>;
  /**
   * Create a reader.
   *
   * @param inputStream the input stream
   * @return a reader
   * @throws IOException thrown on I/O error
  */
  getReader(inputStream: InputStream): ClipboardReader;
  /**
   * Create a writer.
   *
   * @param outputStream the output stream
   * @return a writer
   * @throws IOException thrown on I/O error
  */
  getWriter(outputStream: OutputStream): ClipboardWriter;
  /**
   * Return whether the given file is of this format.
   *
   * @param file the file
   * @return true if the given file is of this format
  */
  isFormat(file: File): boolean;
  /**
   * Get the file extension this format primarily uses.
   *
   * @return The primary file extension
  */
  getPrimaryFileExtension(): string;
  /**
   * Get the file extensions this format is commonly known to use. This should
   * include {@link #getPrimaryFileExtension()}.
   *
   * @return The file extensions this format might be known by
  */
  getFileExtensions(): Set<string>;
}
/**
 * Reads schematic files using the Sponge Schematic Specification.
*/
export class SpongeSchematicReader extends NBTSchematicReader {
  /**
   * Create a new instance.
   *
   * @param inputStream the input stream to read from
  */
  constructor(inputStream: NBTInputStream);
  read(): Clipboard;
  getDataVersion(): OptionalInt;
  close(): void;
}
/**
 * Writes schematic files using the Sponge schematic format.
*/
export class SpongeSchematicWriter extends ClipboardWriter {
  /**
   * Create a new schematic writer.
   *
   * @param outputStream the output stream to write to
  */
  constructor(outputStream: NBTOutputStream);
  /**
   * Writes a clipboard.
   *
   * @param clipboard the clipboard
   * @throws IOException thrown on I/O error
  */
  write(clipboard: Clipboard): void;
  close(): void;
}
/**
 * Reads `Clipboard`s.
 *
 * @see Clipboard
*/
export class ClipboardReader extends Closeable {
  /**
   * Read a `Clipboard`.
   *
   * @return the read clipboard
   * @throws IOException thrown on I/O error
  */
  read(): Clipboard;
  /**
   * Get the DataVersion from a file (if possible).
   *
   * @return The data version, or empty
  */
  getDataVersion(): OptionalInt;
}
/**
 * Reads schematic files that are compatible with MCEdit and other editors.
*/
export class MCEditSchematicReader extends NBTSchematicReader {
  /**
   * Create a new instance.
   *
   * @param inputStream the input stream to read from
  */
  constructor(inputStream: NBTInputStream);
  read(): Clipboard;
  close(): void;
}
/**
 * Base class for NBT schematic readers.
*/
export class NBTSchematicReader extends ClipboardReader {

}
/**
 * Writes `Clipboard`s.
 *
 * @see Clipboard
*/
export class ClipboardWriter extends Closeable {
  /**
   * Writes a clipboard.
   *
   * @param clipboard the clipboard
   * @throws IOException thrown on I/O error
  */
  write(clipboard: Clipboard): void;
}
/**
 * A collection of supported clipboard formats.
*/
export class BuiltInClipboardFormat extends Enum<BuiltInClipboardFormat> {
  /**
   * The Schematic format used by MCEdit.
  */
  static readonly MCEDIT_SCHEMATIC: BuiltInClipboardFormat;
  static readonly SPONGE_SCHEMATIC: BuiltInClipboardFormat;
  static valueOf(name: string): BuiltInClipboardFormat;
  static values(): BuiltInClipboardFormat[];
  getName(): string;
  getAliases(): Set<string>;
  getFileExtensions(): Set<string>;
}
export class ClipboardFormats {
  static registerClipboardFormat(format: ClipboardFormat): void;
  /**
   * Find the clipboard format named by the given alias.
   *
   * @param alias
   *            the alias
   * @return the format, otherwise null if none is matched
  */
  static findByAlias(alias: string): ClipboardFormat | null;
  /**
   * Detect the format of given a file.
   *
   * @param file
   *            the file
   * @return the format, otherwise null if one cannot be detected
  */
  static findByFile(file: File): ClipboardFormat | null;
  static getAll(): Collection<ClipboardFormat>;
  /**
   * Not public API, only used by SchematicCommands.
   * It is not in SchematicCommands because it may rely on internal register calls.
  */
  static getFileExtensionArray(): string[];
}

}
declare module 'com.sk89q.worldedit.extent.validation' {
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { World } from 'com.sk89q.worldedit.world';
import { AbstractDelegateExtent, Extent } from 'com.sk89q.worldedit.extent';
/**
 * Limits the number of blocks that can be changed before a
 * {@link MaxChangedBlocksException} is thrown.
*/
export class BlockChangeLimiter extends AbstractDelegateExtent {
  /**
   * Create a new instance.
   *
   * @param extent the extent
   * @param limit the limit (>= 0) or -1 for no limit
  */
  constructor(extent: Extent, limit: number);
  /**
   * Get the limit.
   *
   * @return the limit (>= 0) or -1 for no limit
  */
  getLimit(): number;
  /**
   * Set the limit.
   *
   * @param limit the limit (>= 0) or -1 for no limit
  */
  setLimit(limit: number);
  /**
   * Get the number of blocks that have been counted so far.
   *
   * @return the number of blocks
  */
  getCount(): number;
  setBlock<B>(location: BlockVector3, block: B): boolean;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(location: BlockVector3, block: T): boolean;
}
/**
 * Validates set data to prevent creating invalid blocks and such.
*/
export class DataValidatorExtent extends AbstractDelegateExtent {
  /**
   * Create a new instance.
   *
   * @param extent the extent
   * @param world the world
  */
  constructor(extent: Extent, world: World);
  setBlock<B>(location: BlockVector3, block: B): boolean;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(location: BlockVector3, block: T): boolean;
}

}
declare module 'com.sk89q.worldedit.extent.buffer' {
import { Map } from 'java.util';
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { Region } from 'com.sk89q.worldedit.regions';
import { Mask } from 'com.sk89q.worldedit.function.mask';
import { Pattern, BiomePattern } from 'com.sk89q.worldedit.function.pattern';
import { BiomeType } from 'com.sk89q.worldedit.world.biome';
import { AbstractDelegateExtent, Extent, AbstractBufferingExtent } from 'com.sk89q.worldedit.extent';
import { BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * Buffers changes to an {@link Extent} and allows later retrieval for
 * actual application of the changes.
 *
 * This buffer will not attempt to return results from the buffer when
 * accessor methods (such as {@link #getBlock(BlockVector3)}) are called.
*/
export class ForgetfulExtentBuffer extends AbstractDelegateExtent {
  /**
   * Create a new extent buffer that will buffer every change.
   *
   * @param delegate the delegate extent for {@link Extent#getBlock(BlockVector3)}, etc. calls
  */
  constructor(delegate: Extent);
  /**
   * Create a new extent buffer that will buffer changes that meet the criteria
   * of the given mask.
   *
   * @param delegate the delegate extent for {@link Extent#getBlock(BlockVector3)}, etc. calls
   * @param mask the mask
  */
  constructor(delegate: Extent, mask: Mask);
  setBlock<B>(location: BlockVector3, block: B): boolean;
  setBiome(position: BlockVector3, biome: BiomeType): boolean;
  /**
   * Return a {@link BaseBlock} for the given position.
   *
   * @param position the position
   * @return a block
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  applyBlock(pos: BlockVector3): BaseBlock;
  /**
   * Return a {@link BiomeType} for the given position.
   *
   * @param position the position
   * @return a biome
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  applyBiome(pos: BlockVector3): BiomeType;
  /**
   * Return a region representation of this buffer.
   *
   * @return a region
  */
  asRegion(): Region;
  /**
   * Change the block at the given location to the given block. The operation may
   * not tie the given {@link BlockStateHolder} to the world, so future changes to the
   * {@link BlockStateHolder} do not affect the world until this method is called again.
   *
   * The return value of this method indicates whether the change was probably
   * successful. It may not be successful if, for example, the location is out
   * of the bounds of the extent. It may be unsuccessful if the block passed
   * is the same as the one in the world. However, the return value is only an
   * estimation and it may be incorrect, but it could be used to count, for
   * example, the approximate number of changes.
   *
   * @param position position of the block
   * @param block block to set
   * @return true if the block was successfully set (return value may not be accurate)
   * @throws WorldEditException thrown on an error
  */
  setBlock<T>(location: BlockVector3, block: T): boolean;
  /**
   * Set the biome.
   *
   * @param position the (x, z) location to set the biome at
   * @param biome the biome to set to
   * @return true if the biome was successfully set (return value may not be accurate)
   * @deprecated Biomes in Minecraft are 3D now, use {@link OutputExtent#setBiome(BlockVector3, BiomeType)}
  */
  setBiome(position: BlockVector2, biome: BiomeType): boolean;
}
export interface ForgetfulExtentBuffer extends AbstractDelegateExtent, Pattern, BiomePattern {}
/**
 * Buffers changes to an {@link Extent} and allows retrieval of the changed blocks,
 * without modifying the underlying extent.
*/
export class ExtentBuffer extends AbstractBufferingExtent {
  /**
   * Create a new extent buffer that will buffer every change.
   *
   * @param delegate the delegate extent for {@link Extent#getBlock(BlockVector3)}, etc. calls
  */
  constructor(delegate: Extent);
  /**
   * Create a new extent buffer that will buffer changes that meet the criteria
   * of the given mask.
   *
   * @param delegate the delegate extent for {@link Extent#getBlock(BlockVector3)}, etc. calls
   * @param mask the mask
  */
  constructor(delegate: Extent, mask: Mask);
  setBlock<T>(location: BlockVector3, block: T): boolean;
}

}
declare module 'com.sk89q.worldedit.function.pattern' {
import { Property } from 'com.sk89q.worldedit.registry.state';
import { Clipboard } from 'com.sk89q.worldedit.extent.clipboard';
import { Random, List, Map } from 'java.util';
import { BlockVector3, BlockVector2 } from 'com.sk89q.worldedit.math';
import { Chance } from 'com.sk89q.worldedit.function.pattern.RandomPattern';
import { BiomeType } from 'com.sk89q.worldedit.world.biome';
import { Extent } from 'com.sk89q.worldedit.extent';
import { BlockState, BlockType, BlockStateHolder, FuzzyBlockState, BaseBlock } from 'com.sk89q.worldedit.world.block';
/**
 * A pattern that reads from {@link Clipboard}.
*/
export class ClipboardPattern extends RepeatingExtentPattern {
  /**
   * Create a new clipboard pattern.
   *
   * @param clipboard the clipboard
  */
  constructor(clipboard: Clipboard);
  /**
   * Create a new clipboard pattern.
   *
   * @param clipboard the clipboard
   * @param offset the offset
  */
  constructor(clipboard: Clipboard, offset: BlockVector3);
}
/**
 * An abstract implementation for {@link Pattern}s.
*/
export class AbstractPattern extends Pattern {

}
/**
 * Removes the waterlogged state from blocks if possible. If not possible, returns air.
*/
export class WaterloggedRemover extends AbstractExtentPattern {
  constructor(extent: Extent);
  applyBlock(position: BlockVector3): BaseBlock;
}
/**
 * A pattern that composes multiple patterns consecutively, ensuring that changes from one
 * pattern are realized by the subsequent one(s). For best results, use an {@link ExtentBuffer}
 * to avoid changing blocks in an underlying extent (e.g. the world).
*/
export class ExtentBufferedCompositePattern extends AbstractExtentPattern {
  /**
   * Construct a new instance of this pattern.
   *
   * Note that all patterns passed which are ExtentPatterns should use the same extent as the one
   * passed to this constructor, or block changes may not be realized by those patterns.
   *
   * @param extent the extent to buffer changes to
   * @param patterns the patterns to apply, in order
  */
  constructor(extent: Extent, ...patterns: Pattern[]);
  applyBlock(position: BlockVector3): BaseBlock;
}
/**
 * Returns a {@link BiomeType} for a given position.
*/
export class BiomePattern {
  /**
   * Return a {@link BiomeType} for the given position.
   *
   * @param position the position
   * @return a biome
   * @deprecated use {@link BiomePattern#applyBiome(BlockVector3)}
  */
  apply(position: BlockVector2): BiomeType;
  /**
   * Return a {@link BiomeType} for the given position.
   *
   * @param position the position
   * @return a biome
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  applyBiome(position: BlockVector3): BiomeType;
}
export class AbstractExtentPattern extends AbstractPattern {
  constructor(extent: Extent);
  /**
   * Get the extent associated with this pattern.
   *
   * @return the extent for this pattern
  */
  getExtent(): Extent;
}
export interface AbstractExtentPattern extends AbstractPattern, ExtentPattern {}
/**
 * A pattern that returns the same {@link BaseBlock} each time.
 *
 * @deprecated all BlockStateHolders can be used directly as a pattern
*/
export class BlockPattern extends AbstractPattern {
  /**
   * Create a new pattern with the given block.
   *
   * @param block the block
  */
  constructor(block: BlockStateHolder<any>);
  /**
   * Get the block.
   *
   * @return the block that is always returned
  */
  getBlock(): BaseBlock;
  /**
   * Set the block that is returned.
   *
   * @param block the block
  */
  setBlock(block: BlockStateHolder<any>);
  applyBlock(position: BlockVector3): BaseBlock;
}
/**
 * Applies a block type while retaining all possible states.
*/
export class TypeApplyingPattern extends AbstractExtentPattern {
  constructor(extent: Extent, blockState: BlockState);
  applyBlock(position: BlockVector3): BaseBlock;
}
/**
 * Returns the blocks from {@link Extent}, repeating when out of bounds.
*/
export class RepeatingExtentPattern extends AbstractExtentPattern {
  /**
   * Create a new instance.
   *
   * @param extent the extent
   * @param offset the offset
  */
  constructor(extent: Extent, origin: BlockVector3, offset: BlockVector3);
  /**
   * Get the offset.
   *
   * @return the offset
  */
  getOffset(): BlockVector3;
  /**
   * Set the offset.
   *
   * @param offset the offset
  */
  setOffset(offset: BlockVector3);
  /**
   * Get the origin.
   *
   * @return the origin
  */
  getOrigin(): BlockVector3;
  /**
   * Set the origin.
   *
   * @param origin the origin
  */
  setOrigin(origin: BlockVector3);
  applyBlock(position: BlockVector3): BaseBlock;
}
/**
 * Uses a random pattern of a weighted list of patterns.
*/
export class RandomPattern extends AbstractPattern {
  /**
   * Add a pattern to the weight list of patterns.
   *
   * The probability for the pattern added is chance / max where max is
   * the sum of the probabilities of all added patterns.
   *
   * @param pattern the pattern
   * @param chance the chance, which can be any positive number
  */
  add(pattern: Pattern, chance: number): void;
  applyBlock(position: BlockVector3): BaseBlock;
}
/**
 * Returns a {@link BaseBlock} for a given position.
*/
export class Pattern {
  /**
   * Return a {@link BaseBlock} for the given position.
   *
   * @param position the position
   * @return a block
   * @deprecated use {@link Pattern#applyBlock(BlockVector3)}
  */
  apply(position: BlockVector3): BaseBlock;
  /**
   * Return a {@link BaseBlock} for the given position.
   *
   * @param position the position
   * @return a block
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  applyBlock(position: BlockVector3): BaseBlock;
}
export class StateApplyingPattern extends AbstractExtentPattern {
  constructor(extent: Extent, statesToSet: Map<string, string>);
  applyBlock(position: BlockVector3): BaseBlock;
}
export class RandomStatePattern extends Pattern {
  constructor(state: FuzzyBlockState);
  /**
   * Return a {@link BaseBlock} for the given position.
   *
   * @param position the position
   * @return a block
   * @apiNote This must be overridden by new subclasses. See {@link NonAbstractForCompatibility}
   *          for details
  */
  applyBlock(position: BlockVector3): BaseBlock;
}
export class ExtentPattern extends Pattern {
  /**
   * Get the extent associated with this pattern.
   *
   * @return the extent for this pattern
  */
  getExtent(): Extent;
}

}
declare module 'com.sk89q.worldedit.internal.anvil' {
import { BlockVector2 } from 'com.sk89q.worldedit.math';
import { Set, List, Comparator } from 'java.util';
import { ChunkBatch } from 'com.sk89q.worldedit.internal.anvil.ChunkDeletionInfo';
import { Path } from 'java.nio.file';
export class ChunkDeleter {
  static readonly DELCHUNKS_FILE_NAME: string;
  static readInfo(chunkFile: Path): ChunkDeletionInfo;
  static writeInfo(info: ChunkDeletionInfo, chunkFile: Path): void;
  static runFromFile(chunkFile: Path, deleteOnSuccess: boolean): void;
  getDeletedChunkCount(): number;
  getDeletionsRequested(): number;
}
/**
 * Internal class. Subject to changes.
*/
export class ChunkDeletionInfo {
  batches: ChunkBatch[];
}

}
declare module 'com.sk89q.worldedit.function.generator' {
import { Random } from 'java.util';
import { BlockVector3 } from 'com.sk89q.worldedit.math';
import { TreeType } from 'com.sk89q.worldedit.util.TreeGenerator';
import { EditSession } from 'com.sk89q.worldedit';
import { Pattern } from 'com.sk89q.worldedit.function.pattern';
import { RegionFunction } from 'com.sk89q.worldedit.function';
/**
 * Generates flora (which may include tall grass, flowers, etc.).
 *
 * The current implementation is not biome-aware, but it may become so in
 * the future.
*/
export class FloraGenerator extends RegionFunction {
  /**
   * Create a new flora generator.
   *
   * @param editSession the edit session
  */
  constructor(editSession: EditSession);
  /**
   * Return whether the flora generator is set to be biome-aware.
   *
   * By default, it is currently disabled by default, but
   * this may change.
   *
   * @return true if biome aware
  */
  isBiomeAware(): boolean;
  /**
   * Set whether the generator is biome aware.
   *
   * It is currently not possible to make the generator biome-aware.
   *
   * @param biomeAware must always be false
  */
  setBiomeAware(biomeAware: boolean): void;
  /**
   * Get a pattern for plants to place inside a desert environment.
   *
   * @return a pattern that places flora
  */
  static getDesertPattern(): Pattern;
  /**
   * Get a pattern for plants to place inside a temperate environment.
   *
   * @return a pattern that places flora
  */
  static getTemperatePattern(): Pattern;
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3): boolean;
}
/**
 * Generates forests by searching for the ground starting from the given upper Y
 * coordinate for every column given.
*/
export class ForestGenerator extends RegionFunction {
  /**
   * Create a new instance.
   *
   * @param editSession the edit session
   * @param treeType a tree generator
  */
  constructor(editSession: EditSession, treeType: TreeType);
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3): boolean;
}
/**
 * Generates patches of fruit (i.e. pumpkin patches).
*/
export class GardenPatchGenerator extends RegionFunction {
  /**
   * Create a new instance.
   *
   * @param editSession the edit session
  */
  constructor(editSession: EditSession);
  /**
   * Get the plant pattern that is placed.
   *
   * @return the plant pattern
  */
  getPlant(): Pattern;
  /**
   * Set the plant pattern that is placed.
   *
   * @param plant the plant pattern
  */
  setPlant(plant: Pattern);
  /**
   * Get the number of affected blocks.
   *
   * @return affected count
  */
  getAffected(): number;
  /**
   * Apply the function to the given position.
   *
   * @param position the position
   * @return true if something was changed
   * @throws WorldEditException thrown on an error
  */
  apply(position: BlockVector3): boolean;
  /**
   * Get a pattern that creates pumpkins with different faces.
   *
   * @return a pumpkin pattern
  */
  static getPumpkinPattern(): Pattern;
  /**
   * Get a pattern that creates melons.
   *
   * @return a melon pattern
  */
  static getMelonPattern(): Pattern;
}

}
