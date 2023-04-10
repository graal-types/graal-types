declare module 'co.aikar.timings' {
import { Method } from 'java.lang.reflect';
import { ComponentLike, Component } from 'net.kyori.adventure.text';
import { Set, List, UUID, Map } from 'java.util';
import { Command, CommandSender, MessageCommandSender } from 'org.bukkit.command';
import { BukkitCommand } from 'org.bukkit.command.defaults';
import { Material, Location } from 'org.bukkit';
import { Iterable, AutoCloseable, Runnable, Class } from 'java.lang';
import { Identified, Identity } from 'net.kyori.adventure.identity';
import { Listener, Event } from 'org.bukkit.event';
import { EventExecutor, Plugin } from 'org.bukkit.plugin';
import { Audience, ForwardingAudience, MessageType } from 'net.kyori.adventure.audience';
import { EvictingQueue } from 'com.google.common.collect';
import { MinuteReport } from 'co.aikar.timings.TimingHistory';
import { EntityType } from 'org.bukkit.entity';
export class TimedEventExecutor extends EventExecutor {
  /**
   * Wraps an event executor and associates a timing handler to it.
   *
   * @param executor Executor to wrap
   * @param plugin Owning plugin
   * @param method EventHandler method
   * @param eventClass Owning class
  */
  constructor(executor: EventExecutor, plugin: Plugin, method: Method | null, eventClass: Class<Event>);
  execute(listener: Listener, event: Event): void;
  toString(): string;
}
export class FullServerTickHandler {
  startTiming(): Timing;
  stopTiming(): void;
}
/**
 * @deprecated Timings will likely be replaced with Spark in the future
*/
export class Timings {
  static readonly NULL_HANDLER: Timing;
  /**
   * Returns a Timing for a plugin corresponding to a name.
   *
   * @param plugin Plugin to own the Timing
   * @param name   Name of Timing
   * @return Handler
  */
  static of(plugin: Plugin, name: string): Timing;
  /**
   * Returns a handler that has a groupHandler timer handler. Parent timers should not have their
   * start/stop methods called directly, as the children will call it for you.
   *
   * Parent Timers are used to group multiple subsections together and get a summary of them combined
   * Parent Handler can not be changed after first call
   *
   * @param plugin       Plugin to own the Timing
   * @param name         Name of Timing
   * @param groupHandler Parent handler to mirror .start/stop calls to
   * @return Timing Handler
  */
  static of(plugin: Plugin, name: string, groupHandler: Timing | null): Timing;
  /**
   * Returns a Timing object after starting it, useful for Java7 try-with-resources.
   *
   * try (Timing ignored = Timings.ofStart(plugin, someName)) {
   * // timed section
   * }
   *
   * @param plugin Plugin to own the Timing
   * @param name   Name of Timing
   * @return Timing Handler
  */
  static ofStart(plugin: Plugin, name: string): Timing;
  /**
   * Returns a Timing object after starting it, useful for Java7 try-with-resources.
   *
   * try (Timing ignored = Timings.ofStart(plugin, someName, groupHandler)) {
   * // timed section
   * }
   *
   * @param plugin       Plugin to own the Timing
   * @param name         Name of Timing
   * @param groupHandler Parent handler to mirror .start/stop calls to
   * @return Timing Handler
  */
  static ofStart(plugin: Plugin, name: string, groupHandler: Timing | null): Timing;
  /**
   * Gets whether or not the Spigot Timings system is enabled
   *
   * @return Enabled or not
  */
  static isTimingsEnabled(): boolean;
  /**
   * Sets whether or not the Spigot Timings system should be enabled
   *
   * Calling this will reset timing data.
   *
   * @param enabled Should timings be reported
  */
  static setTimingsEnabled(enabled: boolean): void;
  static deprecationMessage(): Component;
  /**
   * Sets whether or not the Timings should monitor at Verbose level.
   *
   * When Verbose is disabled, high-frequency timings will not be available.
   *
   * @return Enabled or not
  */
  static isVerboseTimingsEnabled(): boolean;
  /**
   * Sets whether or not the Timings should monitor at Verbose level.
   *
   * When Verbose is disabled, high-frequency timings will not be available.
   * Calling this will reset timing data.
   *
   * @param enabled Should high-frequency timings be reported
  */
  static setVerboseTimingsEnabled(enabled: boolean): void;
  /**
   * Gets the interval between Timing History report generation.
   *
   * Defaults to 5 minutes (6000 ticks)
   *
   * @return Interval in ticks
  */
  static getHistoryInterval(): number;
  /**
   * Sets the interval between Timing History report generations.
   *
   * Defaults to 5 minutes (6000 ticks)
   *
   * This will recheck your history length, so lowering this value will lower your
   * history length if you need more than 60 history windows.
   *
   * @param interval Interval in ticks
  */
  static setHistoryInterval(historyInterval: number);
  /**
   * Gets how long in ticks Timings history is kept for the server.
   *
   * Defaults to 1 hour (72000 ticks)
   *
   * @return Duration in Ticks
  */
  static getHistoryLength(): number;
  /**
   * Sets how long Timing History reports are kept for the server.
   *
   * Defaults to 1 hours(72000 ticks)
   *
   * This value is capped at a maximum of getHistoryInterval() * MAX_HISTORY_FRAMES (12)
   *
   * Will not reset Timing Data but may truncate old history if the new length is less than old length.
   *
   * @param length Duration in ticks
  */
  static setHistoryLength(historyLength: number);
  /**
   * Resets all Timing Data
  */
  static reset(): void;
  /**
   * Generates a report and sends it to the specified command sender.
   *
   * If sender is null, ConsoleCommandSender will be used.
   * @param sender The sender to send to, or null to use the ConsoleCommandSender
  */
  static generateReport(sender: CommandSender | null): void;
  /**
   * Generates a report and sends it to the specified listener.
   * Use with {@link org.bukkit.command.BufferedCommandSender} to get full response when done!
   * @param sender The listener to send responses too.
  */
  static generateReport(sender: TimingsReportListener): void;
}
/**
 * Provides an ability to time sections of code within the Minecraft Server
 *
 * @deprecated Timings will likely be replaced with Spark in the future
*/
export class Timing extends AutoCloseable {
  /**
   * Starts timing the execution until {@link #stopTiming()} is called.
   *
   * @return Timing
  */
  startTiming(): Timing;
  /**
   * Stops timing and records the data. Propagates the data up to group handlers.
   *
   * Will automatically be called when this Timing is used with try-with-resources
  */
  stopTiming(): void;
  /**
   * Starts timing the execution until {@link #stopTiming()} is called.
   *
   * But only if we are on the primary thread.
   *
   * @return Timing
  */
  startTimingIfSync(): Timing;
  /**
   * Stops timing and records the data. Propagates the data up to group handlers.
   *
   * Will automatically be called when this Timing is used with try-with-resources
   *
   * But only if we are on the primary thread.
  */
  stopTimingIfSync(): void;
  /**
   * @deprecated Doesn't do anything - Removed
  */
  abort(): void;
  /**
   * Used internally to get the actual backing Handler in the case of delegated Handlers
   *
   * @return TimingHandler
  */
  getTimingHandler(): TimingHandler | null;
  close(): void;
}
export class TimingsCommand extends BukkitCommand {
  constructor(name: string);
  execute(sender: CommandSender, currentAlias: string, args: string[]): boolean;
  tabComplete(sender: CommandSender, alias: string, args: string[]): string[];
  /**
   * Executed on tab completion for this command, returning a list of
   * options the player can tab through.
   *
   * @param sender Source object which is executing this command
   * @param alias the alias being used
   * @param args All arguments passed to the command, split via ' '
   * @param location The position looked at by the sender, or null if none
   * @return a list of tab-completions for the specified arguments. This
   *     will never be null. List may be immutable.
   * @throws IllegalArgumentException if sender, alias, or args is null
  */
  tabComplete(sender: CommandSender, alias: string, args: string[], location: Location | null): string[];
}
/**
 * @deprecated Timings will likely be replaced with Spark in the future
*/
export class TimingsManager {
  static readonly FULL_SERVER_TICK: FullServerTickHandler;
  static readonly TIMINGS_TICK: TimingHandler;
  static readonly PLUGIN_GROUP_HANDLER: Timing;
  static url: string;
  static hiddenConfigs: string[];
  static privacy: boolean;
  /**
   * Due to access restrictions, we need a helper method to get a Command TimingHandler with String group
   *
   * Plugins should never call this
   *
   * @param pluginName Plugin this command is associated with
   * @param command    Command to get timings for
   * @return TimingHandler
  */
  static getCommandTiming(pluginName: string | null, command: Command): Timing;
  /**
   * Looks up the class loader for the specified class, and if it is a PluginClassLoader, return the
   * Plugin that created this class.
   *
   * @param clazz Class to check
   * @return Plugin if created by a plugin
  */
  static getPluginByClassloader(clazz: Class<any> | null): Plugin | null;
}
export class TimingHistory {
  static lastMinuteTime: number;
  static timedTicks: number;
  static playerTicks: number;
  static entityTicks: number;
  static tileEntityTicks: number;
  static activatedEntityTicks: number;
}
export class NullTimingHandler extends Timing {
  static readonly NULL: Timing;
  /**
   * Starts timing the execution until {@link #stopTiming()} is called.
   *
   * @return Timing
  */
  startTiming(): Timing;
  /**
   * Stops timing and records the data. Propagates the data up to group handlers.
   *
   * Will automatically be called when this Timing is used with try-with-resources
  */
  stopTiming(): void;
  /**
   * Starts timing the execution until {@link #stopTiming()} is called.
   *
   * But only if we are on the primary thread.
   *
   * @return Timing
  */
  startTimingIfSync(): Timing;
  /**
   * Stops timing and records the data. Propagates the data up to group handlers.
   *
   * Will automatically be called when this Timing is used with try-with-resources
   *
   * But only if we are on the primary thread.
  */
  stopTimingIfSync(): void;
  /**
   * @deprecated Doesn't do anything - Removed
  */
  abort(): void;
  /**
   * Used internally to get the actual backing Handler in the case of delegated Handlers
   *
   * @return TimingHandler
  */
  getTimingHandler(): TimingHandler | null;
  close(): void;
}
export class TimingsReportListener extends ForwardingAudience {
  constructor(senders: CommandSender);
  constructor(sender: CommandSender, onDone: Runnable | null);
  constructor(senders: CommandSender[]);
  constructor(senders: CommandSender[], onDone: Runnable | null);
  getTimingsURL(): string | null;
  done(): void;
  done(url: string | null): void;
  sendMessage(source: Identity, message: Component, type: MessageType): void;
  /**
   * Gets the audiences.
   *
   * @return the audiences
   * @since 4.0.0
  */
  audiences(): Iterable<Audience>;
  sendMessage(message: string): void;
  addConsoleIfNeeded(): void;
  sendMessage(source: Identified, message: Component, type: MessageType): void;
  /**
   * Sends a chat message with a {@link Identity#nil() nil} identity to this {@link Audience}.
   *
   * @param message a message
   * @see Component
   * @see #sendMessage(Identified, ComponentLike)
   * @see #sendMessage(Identity, ComponentLike)
   * @since 4.1.0
  */
  sendMessage(message: ComponentLike): void;
  /**
   * Sends a chat message from the given {@link Identified} to this {@link Audience}.
   *
   * @param source the source of the message
   * @param message a message
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identified, message: ComponentLike): void;
  /**
   * Sends a chat message from the entity represented by the given {@link Identity} (or the game using {@link Identity#nil()}) to this {@link Audience}.
   *
   * @param source the identity of the source of the message
   * @param message a message
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identity, message: ComponentLike): void;
  /**
   * Sends a chat message with a {@link Identity#nil() nil} identity to this {@link Audience}.
   *
   * @param message a message
   * @see Component
   * @see #sendMessage(Identified, Component)
   * @see #sendMessage(Identity, Component)
   * @since 4.1.0
  */
  sendMessage(message: Component): void;
  /**
   * Sends a chat message from the given {@link Identified} to this {@link Audience}.
   *
   * @param source the source of the message
   * @param message a message
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identified, message: Component): void;
  /**
   * Sends a chat message from the entity represented by the given {@link Identity} (or the game using {@link Identity#nil()}) to this {@link Audience}.
   *
   * @param source the identity of the source of the message
   * @param message a message
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identity, message: Component): void;
  /**
   * Sends a chat message with a {@link Identity#nil() nil} identity to this {@link Audience}.
   *
   * @param message a message
   * @param type the type
   * @see Component
   * @see #sendMessage(Identified, ComponentLike, MessageType)
   * @see #sendMessage(Identity, ComponentLike, MessageType)
   * @since 4.1.0
  */
  sendMessage(message: ComponentLike, type: MessageType): void;
  /**
   * Sends a chat message from the given {@link Identified} to this {@link Audience}.
   *
   * @param source the source of the message
   * @param message a message
   * @param type the type
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identified, message: ComponentLike, type: MessageType): void;
  /**
   * Sends a chat message from the entity represented by the given {@link Identity} (or the game using {@link Identity#nil()}) to this {@link Audience}.
   *
   * @param source the identity of the source of the message
   * @param message a message
   * @param type the type
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identity, message: ComponentLike, type: MessageType): void;
  /**
   * Sends a chat message with a {@link Identity#nil() nil} identity to this {@link Audience}.
   *
   * @param message a message
   * @param type the type
   * @see Component
   * @see #sendMessage(Identified, Component, MessageType)
   * @see #sendMessage(Identity, Component, MessageType)
   * @since 4.1.0
  */
  sendMessage(message: Component, type: MessageType): void;
  sendMessage(messages: string[]): void;
  sendMessage(sender: UUID | null, message: string): void;
  sendMessage(sender: UUID | null, messages: string[]): void;
}
export interface TimingsReportListener extends ForwardingAudience, MessageCommandSender {}

}
declare module 'co.aikar.util' {
import { JSONPair } from 'co.aikar.util.JSONUtil';
import { Iterable, Class } from 'java.lang';
import { AbstractMap, Set, Collection, List, Map } from 'java.util';
import { Function } from 'com.google.common.base';
import { Entry } from 'java.util.Map';
import { Function as java_util_function_Function } from 'java.util.function';
import { Int2ObjectOpenHashMap } from 'it.unimi.dsi.fastutil.ints';
import { ForwardingMap } from 'com.google.common.collect';
/**
 * Provides Utility methods that assist with generating JSON Objects
*/
export class JSONUtil {
  /**
   * Creates a key/value "JSONPair" object
   *
   * @param key Key to use
   * @param obj Value to use
   * @return JSONPair
  */
  static pair(key: string, obj: any | null): JSONPair;
  static pair(key: number, obj: any | null): JSONPair;
  /**
   * Creates a new JSON object from multiple JSONPair key/value pairs
   *
   * @param data JSONPairs
   * @return Map
  */
  static createObject(...data: JSONPair[]): Map<string, any>;
  /**
   * This appends multiple key/value Obj pairs into a JSON Object
   *
   * @param parent Map to be appended to
   * @param data Data to append
   * @return Map
  */
  static appendObjectData(parent: Map, ...data: JSONPair[]): Map<string, any>;
  /**
   * This builds a JSON array from a set of data
   *
   * @param data Data to build JSON array from
   * @return List
  */
  static toArray(...data: any[]): List;
  /**
   * These help build a single JSON array using a mapper function
   *
   * @param collection Collection to apply to
   * @param mapper Mapper to apply
   * @param  Element Type
   * @return List
  */
  static toArrayMapper<E>(collection: E[], mapper: Function<E, any>): List;
  static toArrayMapper<E>(collection: Iterable<E>, mapper: Function<E, any>): List;
  /**
   * These help build a single JSON Object from a collection, using a mapper function
   *
   * @param collection Collection to apply to
   * @param mapper Mapper to apply
   * @param  Element Type
   * @return Map
  */
  static toObjectMapper<E>(collection: E[], mapper: Function<E, JSONPair>): Map;
  static toObjectMapper<E>(collection: Iterable<E>, mapper: Function<E, JSONPair>): Map;
}
/**
 * Implements a Most Recently Used cache in front of a backing map, to quickly access the last accessed result.
 *
 * @param  Key Type of the Map
 * @param  Value Type of the Map
*/
export class MRUMapCache<K, V> extends AbstractMap<K, V> {
  constructor(backingMap: Map<K, V>);
  size(): number;
  isEmpty(): boolean;
  containsKey(key: any | null): boolean;
  containsValue(value: any | null): boolean;
  get(key: any | null): V | null;
  put(key: K | null, value: V | null): V | null;
  remove(key: any | null): V | null;
  putAll(m: Map<K, V>): void;
  clear(): void;
  keySet(): Set<K>;
  values(): Collection<V>;
  entrySet(): Set<Entry<K, V>>;
  /**
   * Wraps the specified map with a most recently used cache
   *
   * @param map Map to be wrapped
   * @param  Key Type of the Map
   * @param  Value Type of the Map
   * @return Map
  */
  static of<K, V>(map: Map<K, V>): Map<K, V>;
}
export class Counter<T> extends ForwardingMap<T, number> {
  decrement(key: T | null): number;
  increment(key: T | null): number;
  decrement(key: T | null, amount: number): number;
  increment(key: T | null, amount: number): number;
  getCount(key: T | null): number;
}
/**
 * Allows you to pass a Loader function that when a key is accessed that doesn't exists,
 * automatically loads the entry into the map by calling the loader Function.
 *
 * .get() Will only return null if the Loader can return null.
 *
 * You may pass any backing Map to use.
 *
 * This class is not thread safe and should be wrapped with Collections.synchronizedMap on the OUTSIDE of the LoadingMap if needed.
 *
 * Do not wrap the backing map with Collections.synchronizedMap.
 *
 * @param  Key
 * @param  Value
*/
export class LoadingMap<K, V> extends AbstractMap<K, V> {
  /**
   * Initializes an auto loading map using specified loader and backing map
   * @param backingMap Map to wrap
   * @param loader Loader
  */
  constructor(backingMap: Map<K, V>, loader: java_util_function_Function<K, V>);
  /**
   * Creates a new LoadingMap with the specified map and loader
   *
   * @param backingMap Actual map being used.
   * @param loader Loader to use
   * @param  Key Type of the Map
   * @param  Value Type of the Map
   * @return Map
  */
  static of<K, V>(backingMap: Map<K, V>, loader: java_util_function_Function<K, V>): Map<K, V>;
  /**
   * Creates a LoadingMap with an auto instantiating loader.
   *
   * Will auto construct class of of Value when not found
   *
   * Since this uses Reflection, It is more effecient to define your own static loader
   * than using this helper, but if performance is not critical, this is easier.
   *
   * @param backingMap Actual map being used.
   * @param keyClass Class used for the K generic
   * @param valueClass Class used for the V generic
   * @param  Key Type of the Map
   * @param  Value Type of the Map
   * @return Map that auto instantiates on .get()
  */
  static newAutoMap<K, V>(backingMap: Map<K, V>, keyClass: Class<K> | null, valueClass: Class<V>): Map<K, V>;
  /**
   * Creates a LoadingMap with an auto instantiating loader.
   *
   * Will auto construct class of of Value when not found
   *
   * Since this uses Reflection, It is more effecient to define your own static loader
   * than using this helper, but if performance is not critical, this is easier.
   *
   * @param backingMap Actual map being used.
   * @param valueClass Class used for the V generic
   * @param  Key Type of the Map
   * @param  Value Type of the Map
   * @return Map that auto instantiates on .get()
  */
  static newAutoMap<K, V>(backingMap: Map<K, V>, valueClass: Class<V>): Map<K, V>;
  /**
   * @see #newAutoMap
   *
   * new Auto initializing map using a HashMap.
   *
   * @param keyClass Class used for the K generic
   * @param valueClass Class used for the V generic
   * @param  Key Type of the Map
   * @param  Value Type of the Map
   * @return Map that auto instantiates on .get()
  */
  static newHashAutoMap<K, V>(keyClass: Class<K> | null, valueClass: Class<V>): Map<K, V>;
  /**
   * @see #newAutoMap
   *
   * new Auto initializing map using a HashMap.
   *
   * @param valueClass Class used for the V generic
   * @param  Key Type of the Map
   * @param  Value Type of the Map
   * @return Map that auto instantiates on .get()
  */
  static newHashAutoMap<K, V>(valueClass: Class<V>): Map<K, V>;
  /**
   * @see #newAutoMap
   *
   * new Auto initializing map using a HashMap.
   *
   * @param keyClass Class used for the K generic
   * @param valueClass Class used for the V generic
   * @param initialCapacity Initial capacity to use
   * @param loadFactor Load factor to use
   * @param  Key Type of the Map
   * @param  Value Type of the Map
   * @return Map that auto instantiates on .get()
  */
  static newHashAutoMap<K, V>(keyClass: Class<K> | null, valueClass: Class<V>, initialCapacity: number, loadFactor: number): Map<K, V>;
  /**
   * @see #newAutoMap
   *
   * new Auto initializing map using a HashMap.
   *
   * @param valueClass Class used for the V generic
   * @param initialCapacity Initial capacity to use
   * @param loadFactor Load factor to use
   * @param  Key Type of the Map
   * @param  Value Type of the Map
   * @return  Map that auto instantiates on .get()
  */
  static newHashAutoMap<K, V>(valueClass: Class<V>, initialCapacity: number, loadFactor: number): Map<K, V>;
  /**
   * Initializes an auto loading map using a HashMap
   *
   * @param loader Loader to use
   * @param  Key Type of the Map
   * @param  Value Type of the Map
   * @return Map
  */
  static newHashMap<K, V>(loader: java_util_function_Function<K, V>): Map<K, V>;
  /**
   * Initializes an auto loading map using a HashMap
   *
   * @param loader Loader to use
   * @param initialCapacity Initial capacity to use
   * @param  Key Type of the Map
   * @param  Value Type of the Map
   * @return Map
  */
  static newHashMap<K, V>(loader: java_util_function_Function<K, V>, initialCapacity: number): Map<K, V>;
  /**
   * Initializes an auto loading map using a HashMap
   *
   * @param loader Loader to use
   * @param initialCapacity Initial capacity to use
   * @param loadFactor Load factor to use
   * @param  Key Type of the Map
   * @param  Value Type of the Map
   * @return Map
  */
  static newHashMap<K, V>(loader: java_util_function_Function<K, V>, initialCapacity: number, loadFactor: number): Map<K, V>;
  /**
   * Initializes an auto loading map using an Identity HashMap
   *
   * @param loader Loader to use
   * @param  Key Type of the Map
   * @param  Value Type of the Map
   * @return Map
  */
  static newIdentityHashMap<K, V>(loader: java_util_function_Function<K, V>): Map<K, V>;
  /**
   * Initializes an auto loading map using an Identity HashMap
   *
   * @param loader Loader to use
   * @param initialCapacity Initial capacity to use
   * @param  Key Type of the Map
   * @param  Value Type of the Map
   * @return Map
  */
  static newIdentityHashMap<K, V>(loader: java_util_function_Function<K, V>, initialCapacity: number): Map<K, V>;
  size(): number;
  isEmpty(): boolean;
  containsKey(key: any | null): boolean;
  containsValue(value: any | null): boolean;
  get(key: any | null): V | null;
  put(key: K | null, value: V | null): V | null;
  remove(key: any | null): V | null;
  putAll(m: Map<K, V>): void;
  clear(): void;
  keySet(): Set<K>;
  values(): Collection<V>;
  equals(o: any | null): boolean;
  hashCode(): number;
  entrySet(): Set<Entry<K, V>>;
  clone(): LoadingMap<K, V>;
}
/**
 * Allows you to pass a Loader function that when a key is accessed that doesn't exist,
 * automatically loads the entry into the map by calling the loader Function.
 *
 * .get() Will only return null if the Loader can return null.
 *
 * You may pass any backing Map to use.
 *
 * This class is not thread safe and should be wrapped with Collections.synchronizedMap on the OUTSIDE of the LoadingMap if needed.
 *
 * Do not wrap the backing map with Collections.synchronizedMap.
 *
 * @param  Value
*/
export class LoadingIntMap<V> extends Int2ObjectOpenHashMap<V> {
  constructor(loader: Function<number, V>);
  constructor(expectedSize: number, loader: Function<number, V>);
  constructor(expectedSize: number, loadFactor: number, loader: Function<number, V>);
  get(key: number): V | null;
}

}
declare module 'co.aikar.util.JSONUtil' {
/**
 * Simply stores a key and a value, used internally by many methods below.
*/
export class JSONPair {

}

}
declare module 'co.aikar.util.LoadingMap' {
import { Function } from 'java.util.function';
/**
 * Due to java stuff, you will need to cast it to (Function) for some cases
 *
 * @param  Type
*/
export class Feeder<T> extends Function<T, T> {
  apply(input: any | null): T | null;
  apply(): T | null;
}

}
declare module 'co.aikar.util.LoadingIntMap' {
import { Function } from 'com.google.common.base';
/**
 * Due to java stuff, you will need to cast it to (Function) for some cases
 *
 * @param  Type
*/
export class Feeder<T> extends Function<T, T> {
  apply(input: any | null): T | null;
  apply(): T | null;
}

}
