declare module 'me.clip.placeholderapi.expansion.cloud' {
import { List } from 'java.util';
import { Version } from 'me.clip.placeholderapi.expansion.cloud.CloudExpansion';
export class CloudExpansion {
  constructor();
  getTimeSinceLastUpdate(): string;
  getName(): string;
  setName(name: string);
  getAuthor(): string;
  setAuthor(author: string);
  getVersion(): Version;
  getVersion(version: string): Version;
  getAvailableVersions(): string[];
  getLatestVersion(): string;
  setLatestVersion(latestVersion: string);
  getDescription(): string;
  setDescription(description: string);
  getSourceUrl(): string;
  setSourceUrl(sourceUrl: string);
  getDependencyUrl(): string;
  setDependencyUrl(dependencyUrl: string);
  hasExpansion(): boolean;
  setHasExpansion(hasExpansion: boolean): void;
  shouldUpdate(): boolean;
  setShouldUpdate(shouldUpdate: boolean): void;
  isVerified(): boolean;
  getLastUpdate(): number;
  setLastUpdate(lastUpdate: number);
  getRatingsCount(): number;
  getAverage_rating(): number;
  getPlaceholders(): string[];
  setPlaceholders(placeholders: string[]);
  getVersions(): Version[];
  setVersions(versions: Version[]);
}

}
declare module 'me.clip.placeholderapi.expansion' {
import { Level } from 'java.util.logging';
import { List, Map } from 'java.util';
import { Enum, Throwable } from 'java.lang';
import { PlaceholderHook, PlaceholderAPIPlugin } from 'me.clip.placeholderapi';
/**
 * Placeholder expansions which use NMS code should be version specific. Implementing this class
 * allows you to perform checks based on the version the server is running. The isCompatibleWith
 * method will be passed the server version and allow you to return if your expansion is compatible
 * with that version.
 *
 * @author Ryan McCarthy
*/
export class VersionSpecific {
  /**
   * This method is called before the expansion is attempted to be registered The server version
   * will be passed to this method so you know what version the server is currently running.
   *
   * @param v The {@link Version} to check against
   *
   * @return true if your expansion is compatible with the version the server is running.
  */
  isCompatibleWith(v: Version): boolean;
}
/**
 * Implementing this interface allows {@link me.clip.placeholderapi.expansion.PlaceholderExpansion PlaceholderExpansions}
 * to set a list of default configuration values through the {@link #getDefaults() getDefaults method}
 * that should be added to the config.yml of PlaceholderAPI.
 * 
 * The entries will be added under `expansions` as their own section.
 * Example:
 * returning a Map with key `foo` and value `bar` will result in the following config entry:
 * 
 * 
 * expansions:
 *   myexpansion:
 *     foo: "bar"
 * 
 * 
 * The configuration is set before the PlaceholderExpansion is registered!
 *
 * @author Ryan McCarthy
*/
export class Configurable {
  /**
   * The map returned by this method will be used to set config options in PlaceholderAPI's config.yml.
   * 
   * The key and value pairs are set under a section named after your
   * {@link me.clip.placeholderapi.expansion.PlaceholderExpansion PlaceholderExpansion} in the
   * `expansions` section of the config.
   *
   * @return Map of config path / values which need to be added / removed from the PlaceholderAPI
   * config.yml file
  */
  getDefaults(): Map<string, any>;
}
export class Version {
  constructor(version: string, isSpigot: boolean);
  getVersion(): string;
  isSpigot(): boolean;
  compareTo(version: string): boolean;
}
export class NMSVersion extends Enum<NMSVersion> {
  static readonly UNKNOWN: NMSVersion;
  static readonly SPIGOT_1_7_R1: NMSVersion;
  static readonly SPIGOT_1_7_R2: NMSVersion;
  static readonly SPIGOT_1_7_R3: NMSVersion;
  static readonly SPIGOT_1_7_R4: NMSVersion;
  static readonly SPIGOT_1_8_R1: NMSVersion;
  static readonly SPIGOT_1_8_R2: NMSVersion;
  static readonly SPIGOT_1_8_R3: NMSVersion;
  static readonly SPIGOT_1_9_R1: NMSVersion;
  static readonly SPIGOT_1_9_R2: NMSVersion;
  static readonly SPIGOT_1_10_R1: NMSVersion;
  static readonly SPIGOT_1_11_R1: NMSVersion;
  static readonly SPIGOT_1_12_R1: NMSVersion;
  static readonly SPIGOT_1_13_R1: NMSVersion;
  static readonly SPIGOT_1_13_R2: NMSVersion;
  static readonly SPIGOT_1_14_R1: NMSVersion;
  static readonly SPIGOT_1_15_R1: NMSVersion;
  static readonly SPIGOT_1_16_R1: NMSVersion;
  static readonly SPIGOT_1_16_R2: NMSVersion;
  static readonly SPIGOT_1_16_R3: NMSVersion;
  static readonly SPIGOT_1_17_R1: NMSVersion;
  static readonly SPIGOT_1_18_R1: NMSVersion;
  static readonly SPIGOT_1_19: NMSVersion;
  static valueOf(name: string): NMSVersion;
  static values(): NMSVersion[];
  static getVersion(version: string): NMSVersion;
  getVersion(): string;
}
/**
 * Any class extending this will be able to get registered as a PlaceholderExpansion.
 * The registration either happens automatically when the jar file containing a
 * class extending this one is located under the `PlaceholderAPI/expansions`
 * directory or when the {@link #register()} method is called by said class.
*/
export class PlaceholderExpansion extends PlaceholderHook {
  /**
   * The placeholder identifier of this expansion. May not contain {@literal %},
   * {@literal {}} or _
   *
   * @return placeholder identifier that is associated with this expansion
  */
  getIdentifier(): string;
  /**
   * The author of this expansion
   *
   * @return name of the author for this expansion
  */
  getAuthor(): string;
  /**
   * The version of this expansion
   *
   * @return current version of this expansion
  */
  getVersion(): string;
  /**
   * The name of this expansion
   *
   * @return {@link #getIdentifier()} by default, name of this expansion if specified
  */
  getName(): string;
  /**
   * The name of the plugin that this expansion hooks into. by default will null
   *
   * @return plugin name that this expansion requires to function
  */
  getRequiredPlugin(): string | null;
  /**
   * The placeholders associated with this expansion
   *
   * @return placeholder list that this expansion provides
  */
  getPlaceholders(): string[];
  /**
   * Expansions that do not use the ecloud and instead register from the dependency should set this
   * to true to ensure that your placeholder expansion is not unregistered when the papi reload
   * command is used
   *
   * @return if this expansion should persist through placeholder reloads
  */
  persist(): boolean;
  /**
   * Check if this placeholder identifier has already been registered
   *
   * @return true if the identifier for this expansion is already registered
  */
  isRegistered(): boolean;
  /**
   * If any requirements need to be checked before this expansion should register, you can check
   * them here
   *
   * @return true if this hook meets all the requirements to register
  */
  canRegister(): boolean;
  /**
   * Attempt to register this PlaceholderExpansion
   *
   * @return true if this expansion is now registered with PlaceholderAPI
  */
  register(): boolean;
  /**
   * Attempt to unregister this PlaceholderExpansion
   *
   * @return true if this expansion is now unregistered with PlaceholderAPI
  */
  unregister(): boolean;
  /**
   * Quick getter for the {@link PlaceholderAPIPlugin} instance
   *
   * @return {@link PlaceholderAPIPlugin} instance
  */
  getPlaceholderAPI(): PlaceholderAPIPlugin;
  /**
   * Gets the Object relative to the {@link #getConfigSection() default ConfigurationSection} set
   * by the expansion or the provided Default Object, when the default ConfigurationSection is null
   * 
   * @param path The path to get the Object from. This is relative to the default section
   * @param def The default Object to return when the ConfigurationSection returns null
   * @return Object from the provided path or the default one provided
  */
  get(path: string, def: any): any | null;
  /**
   * Gets the int relative to the {@link #getConfigSection() default ConfigurationSection} set
   * by the expansion or the provided Default int, when the default ConfigurationSection is null
   *
   * @param path The path to get the int from. This is relative to the default section
   * @param def The default int to return when the ConfigurationSection returns null
   * @return int from the provided path or the default one provided
  */
  getInt(path: string, def: number): number;
  /**
   * Gets the long relative to the {@link #getConfigSection() default ConfigurationSection} set
   * by the expansion or the provided Default long, when the default ConfigurationSection is null
   *
   * @param path The path to get the long from. This is relative to the default section
   * @param def The default long to return when the ConfigurationSection returns null
   * @return long from the provided path or the default one provided
  */
  getLong(path: string, def: number): number;
  /**
   * Gets the double relative to the {@link #getConfigSection() default ConfigurationSection} set
   * by the expansion or the provided Default double, when the default ConfigurationSection is null
   *
   * @param path The path to get the double from. This is relative to the default section
   * @param def The default double to return when the ConfigurationSection returns null
   * @return double from the provided path or the default one provided
  */
  getDouble(path: string, def: number): number;
  /**
   * Gets the String relative to the {@link #getConfigSection() default ConfigurationSection} set
   * by the expansion or the provided Default String, when the default ConfigurationSection is null
   *
   * @param path The path to get the String from. This is relative to the default section
   * @param def The default String to return when the ConfigurationSection returns null. Can be null
   * @return String from the provided path or the default one provided
  */
  getString(path: string, def: string | null): string | null;
  /**
   * Gets a String List relative to the {@link #getConfigSection() default ConfigurationSection} set
   * by the expansion or an empty List, when the default ConfigurationSection is null
   *
   * @param path The path to get the String list from. This is relative to the default section
   * @return String list from the provided path or an empty list
  */
  getStringList(path: string): string[];
  /**
   * Gets the boolean relative to the {@link #getConfigSection() default ConfigurationSection} set
   * by the expansion or the default boolean, when the default ConfigurationSection is null
   *
   * @param path The path to get the boolean from. This is relative to the default section
   * @param def The default boolean to return when the ConfigurationSection is null
   * @return boolean from the provided path or the default one provided
  */
  getBoolean(path: string, def: boolean): boolean;
  /**
   * Whether the {@link #getConfigSection() default ConfigurationSection} contains the provided path
   * or not. This will return `false` when either the default section is null, or doesn't
   * contain the provided path
   *
   * @param path The path to check
   * @return true when the default ConfigurationSection is not null and contains the path, false otherwise
  */
  configurationContains(path: string): boolean;
  /**
   * Logs the provided message with the provided Level in the console.
   * The message will be prefixed with {@link #getName() [<expansion name>]}
   * 
   * @param level The Level at which the message should be logged with
   * @param msg The message to log
  */
  log(level: Level, msg: string): void;
  /**
   * Logs the provided message and Throwable with the provided Level in the console.
   * The message will be prefixed with {@link #getName() [<expansion name>]}
   *
   * @param level The Level at which the message should be logged with
   * @param msg The message to log
   * @param throwable The Throwable to log
  */
  log(level: Level, msg: string, throwable: Throwable): void;
  /**
   * Logs the provided message with Level "info".
   * The message will be prefixed with {@link #getName() [<expansion name>]}
   *
   * @param msg The message to log
  */
  info(msg: string): void;
  /**
   * Logs the provided message with Level "warning".
   * The message will be prefixed with {@link #getName() [<expansion name>]}
   *
   * @param msg The message to log
  */
  warning(msg: string): void;
  /**
   * Logs the provided message with Level "severe" (error).
   * The message will be prefixed with {@link #getName() [<expansion name>]}
   *
   * @param msg The message to log
  */
  severe(msg: string): void;
  /**
   * Logs the provided message and Throwable with Level "severe" (error).
   * The message will be prefixed with {@link #getName() [<expansion name>]}
   *
   * @param msg The message to log
   * @param throwable The Throwable to log
  */
  severe(msg: string, throwable: Throwable): void;
  /**
   * Whether the provided Object is an instance of this PlaceholderExpansion.
   * This method will perform the following checks in order:
   * 
   *     Checks if Object equals the class. Returns true when equal and continues otherwise
   *     Checks if the Object is an instance of a PlaceholderExpansion. Returns false if not
   *     Checks if the Object's Identifier, Author and version equal the one of this class
   * 
   * 
   * @param o The Object to check
   * @return true or false depending on the above mentioned checks
  */
  equals(o: any): boolean;
  /**
   * Returns a String containing the Expansion's name, author and version
   * 
   * @return String containing name, author and version of the expansion
  */
  toString(): string;
  /**
   * @deprecated As of versions greater than 2.8.7, use {@link #getRequiredPlugin()}
   *
   * @return The plugin name.
  */
  getPlugin(): string;
  /**
   * @deprecated As of versions greater than 2.8.7, use the expansion cloud to show a description
   *
   * @return The description of the expansion.
  */
  getDescription(): string;
  /**
   * @deprecated As of versions greater than 2.8.7, use the expansion cloud to display a link
   *
   * @return The link for the expansion.
  */
  getLink(): string;
}
/**
 * Implementing this interface allows your {@link me.clip.placeholderapi.expansion.PlaceholderExpansion PlaceholderExpansion}
 * to be used as a relational placeholder expansion.
 * 
 * Relational placeholders take two Players as input and are always prefixed with `rel_`,
 * so `%foo_bar%` becomes `%rel_foo_bar%`
*/
export class Relational {

}
/**
 * Classes implementing this interface will have a {@link #clear() clear void} that is called
 * by PlaceholderAPI whenever the {@link me.clip.placeholderapi.expansion.PlaceholderExpansion PlaceholderExpansion}
 * is unregistered.
 * 
 * This allows you to execute things such as clearing internal caches, saving data to files, etc.
 *
 * @author Ryan McCarthy
*/
export class Cacheable {
  /**
   * Called when the implementing class is unregistered from PlaceholderAPI
  */
  clear(): void;
}
/**
 * Implementing this interface adds the {@link #start() start} and {@link #stop() stop} void
 * methods to your {@link me.clip.placeholderapi.expansion.PlaceholderExpansion PlaceholderExpansion}.
 * 
 * This can be used to execute methods and tasks whenever the PlaceholderExpansion has been
 * successfully (un)registered.
*/
export class Taskable {
  /**
   * Called when the implementing class has successfully been registered to the placeholder map.
   * Tasks that need to be performed when this expansion is registered should go here
  */
  start(): void;
  /**
   * Called when the implementing class has been unregistered from PlaceholderAPI.
   * Tasks that need to be performed when this expansion has unregistered should go here
  */
  stop(): void;
}
/**
 * Classes implementing this interface will have a {@link #cleanup(Player) cleanup void} that is
 * called by PlaceholderAPI whenever a Player leaves the server.
 * 
 * This can be useful for cases where you keep data of the player in a cache or similar
 * and want to free up space whenever they leave.
 *
 * @author Ryan McCarthy
*/
export class Cleanable {

}

}
declare module 'me.clip.placeholderapi.replacer' {
import { Closure } from 'me.clip.placeholderapi.replacer.Replacer';
export class CharsReplacer extends Replacer {
  constructor(closure: Closure);
}
export class Replacer {

}

}
declare module 'me.clip.placeholderapi.util.Format' {
import { Enum } from 'java.lang';
export class Align extends Enum<Align> {
  static readonly LEFT: Align;
  static readonly RIGHT: Align;
  static valueOf(name: string): Align;
  static values(): Align[];
}

}
declare module 'me.clip.placeholderapi.replacer.Replacer' {
import { Enum } from 'java.lang';
export class Closure extends Enum<Closure> {
  static readonly BRACKET: Closure;
  static readonly PERCENT: Closure;
  static valueOf(name: string): Closure;
  static values(): Closure[];
  readonly head: string;
  readonly tail: string;
}

}
declare module 'me.clip.placeholderapi' {
import { Set, Map } from 'java.util';
import { Pattern } from 'java.util.regex';
import { PlaceholderExpansion } from 'me.clip.placeholderapi.expansion';
import { Replacer } from 'me.clip.placeholderapi.replacer';
export class PlaceholderHook {

}
export class PlaceholderAPI {
  /**
   * Check if a specific placeholder identifier is currently registered
   *
   * @param identifier The identifier to check
   * @return true if identifier is already registered
  */
  static isRegistered(identifier: string): boolean;
  /**
   * Get all registered placeholder identifiers
   *
   * @return A Set of type String containing the identifiers of all registered expansions.
  */
  static getRegisteredIdentifiers(): Set<string>;
  /**
   * Get the normal placeholder pattern.
   * 
   * @return Regex Pattern of {@literal [%]([^%]+)[%]}
  */
  static getPlaceholderPattern(): Pattern;
  /**
   * Get the bracket placeholder pattern.
   * 
   * @return Regex Pattern of {@literal [{]([^{}]+)[}]}
  */
  static getBracketPlaceholderPattern(): Pattern;
  /**
   * Get the relational placeholder pattern.
   * 
   * @return Regex Pattern of {@literal [%](rel_)([^%]+)[%]}
  */
  static getRelationalPlaceholderPattern(): Pattern;
  /**
   * Check if a String contains any PlaceholderAPI placeholders ({@literal
   * %_%}).
   *
   * @param text String to check
   * @return true if String contains any matches to the normal placeholder pattern, false otherwise
  */
  static containsPlaceholders(text: string): boolean;
  /**
   * Check if a String contains any PlaceholderAPI bracket placeholders ({@literal
   * {_}}).
   *
   * @param text String to check
   * @return true if String contains any matches to the bracket placeholder pattern, false otherwise
  */
  static containsBracketPlaceholders(text: string): boolean;
  static registerExpansion(expansion: PlaceholderExpansion): boolean;
  static unregisterExpansion(expansion: PlaceholderExpansion): boolean;
  /**
   * Get map of registered placeholders
   * 
   * @deprecated Use {@link LocalExpansionManager#getExpansions()} instead.
   *
   * @return Map of registered placeholders
  */
  static getPlaceholders(): Map<string, PlaceholderHook>;
  /**
   * @deprecated Please use {@link PlaceholderExpansion} to
   * register placeholders instead
   * 
   * @param identifier The identifier to use for the {@link PlaceholderHook}
   * @param placeholderHook The {@link PlaceholderHook} to register
   * @return always false
  */
  static registerPlaceholderHook(identifier: string, placeholderHook: PlaceholderHook): boolean;
  /**
   * @deprecated Please use {@link PlaceholderExpansion} to
   * unregister placeholders instead
   * 
   * @param identifier The identifier to unregister
   * @return always false
  */
  static unregisterPlaceholderHook(identifier: string): boolean;
  /**
   * @deprecated Will be removed in a future release.
   * 
   * @return Set of registered identifiers
  */
  static getRegisteredPlaceholderPlugins(): Set<string>;
  /**
   * @deprecated Will be removed in a future release.
   * 
   * @return always null
  */
  static getExternalPlaceholderPlugins(): Set<string>;
}

}
declare module 'me.clip.placeholderapi.commands.impl.cloud' {
import { CloudExpansion } from 'me.clip.placeholderapi.expansion.cloud';
import { StringBuilder } from 'java.lang';
import { Set, List, Map } from 'java.util';
import { PlaceholderCommand } from 'me.clip.placeholderapi.commands';
import { Function } from 'java.util.function';
export class CommandECloudToggle extends PlaceholderCommand {
  constructor();
}
export class CommandECloudRefresh extends PlaceholderCommand {
  constructor();
}
export class CommandECloudExpansionPlaceholders extends PlaceholderCommand {
  constructor();
}
/**
 * please don't flame me for this code, I will fix this shit later.
*/
export class CommandECloudUpdate extends PlaceholderCommand {
  constructor();
}
export class CommandECloudClear extends PlaceholderCommand {
  constructor();
}
export class CommandECloud extends PlaceholderCommand {
  constructor();
}
export class CommandECloudExpansionList extends PlaceholderCommand {
  constructor();
  static addExpansionTitle(builder: StringBuilder, target: string, page: number): void;
}
export class CommandECloudExpansionInfo extends PlaceholderCommand {
  constructor();
}
export class CommandECloudDownload extends PlaceholderCommand {
  constructor();
}
export class CommandECloudStatus extends PlaceholderCommand {
  constructor();
}

}
declare module 'me.clip.placeholderapi.commands' {
import { Set, List } from 'java.util';
import { Stream } from 'java.util.stream';
export class PlaceholderCommand {
  static suggestByParameter(possible: Stream<string>, suggestions: string[], parameter: string | null): void;
  getLabel(): string;
  getAlias(): Set<string>;
  getLabels(): Set<string>;
  getPermission(): string | null;
  setPermission(permission: string);
}

}
declare module 'me.clip.placeholderapi.configuration' {
import { CloudExpansion } from 'me.clip.placeholderapi.expansion.cloud';
import { Optional, Comparator } from 'java.util';
import { Enum } from 'java.lang';
import { PlaceholderAPIPlugin } from 'me.clip.placeholderapi';
export class PlaceholderAPIConfig {
  constructor(plugin: PlaceholderAPIPlugin);
  checkUpdates(): boolean;
  cloudAllowUnverifiedExpansions(): boolean;
  isCloudEnabled(): boolean;
  setCloudEnabled(state: boolean): void;
  isDebugMode(): boolean;
  getExpansionSort(): Optional<ExpansionSort>;
  dateFormat(): string;
  booleanTrue(): string;
  booleanFalse(): string;
}
export class ExpansionSort extends Enum<ExpansionSort> {
  static readonly NAME: ExpansionSort;
  static readonly AUTHOR: ExpansionSort;
  static readonly LATEST: ExpansionSort;
  static valueOf(name: string): ExpansionSort;
  static values(): ExpansionSort[];
  compare(expansion1: CloudExpansion, expansion2: CloudExpansion): number;
}

}
declare module 'me.clip.placeholderapi.expansion.manager' {
import { Type } from 'java.lang.reflect';
import { CloudExpansion } from 'me.clip.placeholderapi.expansion.cloud';
import { Class } from 'java.lang';
import { Set, Optional, Map } from 'java.util';
import { File } from 'java.io';
import { PlaceholderAPIPlugin } from 'me.clip.placeholderapi';
import { Collector } from 'java.util.stream';
import { CompletableFuture, ExecutorService } from 'java.util.concurrent';
import { Version } from 'me.clip.placeholderapi.expansion.cloud.CloudExpansion';
export class MethodSignature {
  getName(): string;
  getParams(): Class[];
  equals(o: any): boolean;
  hashCode(): number;
}
export class CloudExpansionManager {
  constructor(plugin: PlaceholderAPIPlugin);
  load(): void;
  kill(): void;
  getCloudExpansions(): Map<string, CloudExpansion>;
  getCloudExpansionsInstalled(): Map<string, CloudExpansion>;
  getCloudExpansionsByAuthor(author: string): Map<string, CloudExpansion>;
  getCloudExpansionAuthors(): Set<string>;
  getCloudExpansionAuthorCount(): number;
  getCloudUpdateCount(): number;
  findCloudExpansionByName(name: string): Optional<CloudExpansion>;
  clean(): void;
  fetch(allowUnverified: boolean): void;
  isDownloading(expansion: CloudExpansion): boolean;
  downloadExpansion(expansion: CloudExpansion, version: Version): CompletableFuture<File>;
}

}
declare module 'me.clip.placeholderapi.exceptions' {
import { RuntimeException } from 'java.lang';
export class NoDefaultCommandException extends RuntimeException {
  constructor(message: string);
}

}
declare module 'me.clip.placeholderapi.util' {
import { Level } from 'java.util.logging';
import { Duration } from 'java.time';
import { Optional, Collection, List } from 'java.util';
import { Enum, Throwable, Class } from 'java.lang';
import { File } from 'java.io';
import { Collector, Stream } from 'java.util.stream';
import { CompletableFuture } from 'java.util.concurrent';
import { Align } from 'me.clip.placeholderapi.util.Format';
/**
 * For the record, I am not sorry.
*/
export class Format {
  static tablify(align: Align, rows: string[][]): Optional<string[]>;
}
export class Futures {
  static collector<T>(): Collector<CompletableFuture<T>, any, CompletableFuture<T[]>>;
  static of<T>(futures: Stream<CompletableFuture<T>>): CompletableFuture<T[]>;
  static of<T>(futures: Collection<CompletableFuture<T>>): CompletableFuture<T[]>;
}
export class TimeFormat extends Enum<TimeFormat> {
  static readonly DAYS: TimeFormat;
  static readonly HOURS: TimeFormat;
  static readonly MINUTES: TimeFormat;
  static readonly SECONDS: TimeFormat;
  static valueOf(name: string): TimeFormat;
  static values(): TimeFormat[];
}
export class FileUtil {
  static findClass<T>(file: File, clazz: Class<T>): Class<T> | null;
}
export class TimeUtil {
  static getRemaining(seconds: number, type: TimeFormat): string;
  /**
   * Format the given value with s, m, h and d (seconds, minutes, hours and days)
   *
   * @param duration {@link Duration} (eg, Duration.of(20, {@link ChronoUnit#SECONDS}) for 20
   *                 seconds)
   * @return formatted time
  */
  static getTime(duration: Duration): string;
  static getTime(seconds: number): string;
}
export class Msg {
  static log(level: Level, msg: string, ...args: any[]): void;
  static info(msg: string, ...args: any[]): void;
  static warn(msg: string, ...args: any[]): void;
  static warn(msg: string, throwable: Throwable, ...args: any[]): void;
  static severe(msg: string, ...args: any[]): void;
  static severe(msg: string, throwable: Throwable, ...args: any[]): void;
  static broadcast(...messages: string[]): void;
  static color(text: string): string;
}

}
declare module 'me.clip.placeholderapi.expansion.cloud.CloudExpansion' {
export class Version {
  getUrl(): string;
  setUrl(url: string);
  getVersion(): string;
  setVersion(version: string);
  getReleaseNotes(): string;
  setReleaseNotes(releaseNotes: string);
}

}
declare module 'me.clip.placeholderapi.commands.impl.local' {
import { DateTimeFormatter } from 'java.time.format';
import { PlaceholderCommand } from 'me.clip.placeholderapi.commands';
export class CommandHelp extends PlaceholderCommand {
  constructor();
}
export class CommandList extends PlaceholderCommand {
  constructor();
}
export class CommandReload extends PlaceholderCommand {
  constructor();
}
export class CommandExpansionUnregister extends PlaceholderCommand {
  constructor();
}
export class CommandVersion extends PlaceholderCommand {
  constructor();
}
export class CommandInfo extends PlaceholderCommand {
  constructor();
}
export class CommandExpansionRegister extends PlaceholderCommand {
  constructor();
}
export class CommandParse extends PlaceholderCommand {
  constructor();
}
export class CommandDump extends PlaceholderCommand {
  constructor();
}

}
