declare module 'me.lucko.luckperms.common.node.factory' {
import { Parser } from 'me.lucko.luckperms.common.node.factory.NodeBuilders';
export class NodeBuilders {

}
/**
 * Used to add/remove a delimiter character for the {@link AbstractNode#NODE_SEPARATOR} character.
*/
export class Delimiters {
  static readonly DELIMITER: string;
  static escapeCharacters(s: string): string;
  static unescapeCharacters(s: string): string;
}
export class NodeCommandFactory {

}

}
declare module 'me.lucko.luckperms.common.storage.implementation.sql.connection' {
import { Connection } from 'java.sql';
import { Function } from 'java.util.function';
export class ConnectionFactory {
  getImplementationName(): string;
  shutdown(): void;
  getStatementProcessor(): Function<string, string>;
  getConnection(): Connection;
}

}
declare module 'me.lucko.luckperms.common.config.generic' {
import { ValuesMap } from 'me.lucko.luckperms.common.config.generic.KeyedConfiguration';
export class KeyedConfiguration {
  /**
   * Reloads the configuration.
  */
  reload(): void;
}

}
declare module 'me.lucko.luckperms.common.bulkupdate' {
import { Connection, PreparedStatement } from 'java.sql';
import { Enum, StringBuilder } from 'java.lang';
import { List } from 'java.util';
import { Function } from 'java.util.function';
/**
 * Responsible for building a {@link BulkUpdate}
*/
export class BulkUpdateBuilder {
  static create(): BulkUpdateBuilder;
  trackStatistics(trackStatistics: boolean): BulkUpdateBuilder;
  toString(): string;
}
/**
 * Keeps track of the number of nodes, users and groups that were affected in a BulkUpdate operation.
*/
export class BulkUpdateStatistics {
  constructor();
  getAffectedNodes(): number;
  getAffectedUsers(): number;
  getAffectedGroups(): number;
  incrementAffectedNodes(): void;
  incrementAffectedUsers(): void;
  incrementAffectedGroups(): void;
  incrementAffectedNodes(delta: number): void;
  incrementAffectedUsers(delta: number): void;
  incrementAffectedGroups(delta: number): void;
}
export class PreparedStatementBuilder {
  constructor();
  append(s: string): PreparedStatementBuilder;
  variable(variable: string): PreparedStatementBuilder;
  build(connection: Connection, mapping: Function<string, string>): PreparedStatement;
  toReadableString(): string;
}
/**
 * Represents a query to be applied to a set of data.
 * Queries can either be applied to im-memory sets of data, or converted to SQL syntax to be executed remotely.
*/
export class BulkUpdate {
  isTrackingStatistics(): boolean;
  equals(o: any): boolean;
  hashCode(): number;
  toString(): string;
}
/**
 * Represents the data sets a query should apply to
*/
export class DataType extends Enum<DataType> {
  static readonly ALL: DataType;
  static readonly USERS: DataType;
  static readonly GROUPS: DataType;
  static valueOf(name: string): DataType;
  static values(): DataType[];
  getName(): string;
  isIncludingUsers(): boolean;
  isIncludingGroups(): boolean;
}

}
declare module 'me.lucko.luckperms.common.command.spec' {
import { Enum } from 'java.lang';
export class Argument {
  getName(): string;
  isRequired(): boolean;
}
/**
 * An enumeration of the command defintion/usage messages used in the plugin.
*/
export class CommandSpec extends Enum<CommandSpec> {
  static readonly USER: CommandSpec;
  static readonly GROUP: CommandSpec;
  static readonly TRACK: CommandSpec;
  static readonly LOG: CommandSpec;
  static readonly SYNC: CommandSpec;
  static readonly INFO: CommandSpec;
  static readonly EDITOR: CommandSpec;
  static readonly VERBOSE: CommandSpec;
  static readonly TREE: CommandSpec;
  static readonly SEARCH: CommandSpec;
  static readonly NETWORK_SYNC: CommandSpec;
  static readonly IMPORT: CommandSpec;
  static readonly EXPORT: CommandSpec;
  static readonly RELOAD_CONFIG: CommandSpec;
  static readonly BULK_UPDATE: CommandSpec;
  static readonly TRANSLATIONS: CommandSpec;
  static readonly APPLY_EDITS: CommandSpec;
  static readonly TRUST_EDITOR: CommandSpec;
  static readonly CREATE_GROUP: CommandSpec;
  static readonly DELETE_GROUP: CommandSpec;
  static readonly LIST_GROUPS: CommandSpec;
  static readonly CREATE_TRACK: CommandSpec;
  static readonly DELETE_TRACK: CommandSpec;
  static readonly LIST_TRACKS: CommandSpec;
  static readonly USER_INFO: CommandSpec;
  static readonly USER_SWITCHPRIMARYGROUP: CommandSpec;
  static readonly USER_PROMOTE: CommandSpec;
  static readonly USER_DEMOTE: CommandSpec;
  static readonly USER_CLONE: CommandSpec;
  static readonly GROUP_INFO: CommandSpec;
  static readonly GROUP_LISTMEMBERS: CommandSpec;
  static readonly GROUP_SETWEIGHT: CommandSpec;
  static readonly GROUP_SET_DISPLAY_NAME: CommandSpec;
  static readonly GROUP_RENAME: CommandSpec;
  static readonly GROUP_CLONE: CommandSpec;
  static readonly HOLDER_EDITOR: CommandSpec;
  static readonly HOLDER_SHOWTRACKS: CommandSpec;
  static readonly HOLDER_CLEAR: CommandSpec;
  static readonly PERMISSION: CommandSpec;
  static readonly PARENT: CommandSpec;
  static readonly META: CommandSpec;
  static readonly PERMISSION_INFO: CommandSpec;
  static readonly PERMISSION_SET: CommandSpec;
  static readonly PERMISSION_UNSET: CommandSpec;
  static readonly PERMISSION_SETTEMP: CommandSpec;
  static readonly PERMISSION_UNSETTEMP: CommandSpec;
  static readonly PERMISSION_CHECK: CommandSpec;
  static readonly PERMISSION_CLEAR: CommandSpec;
  static readonly PARENT_INFO: CommandSpec;
  static readonly PARENT_SET: CommandSpec;
  static readonly PARENT_ADD: CommandSpec;
  static readonly PARENT_REMOVE: CommandSpec;
  static readonly PARENT_SET_TRACK: CommandSpec;
  static readonly PARENT_ADD_TEMP: CommandSpec;
  static readonly PARENT_REMOVE_TEMP: CommandSpec;
  static readonly PARENT_CLEAR: CommandSpec;
  static readonly PARENT_CLEAR_TRACK: CommandSpec;
  static readonly META_INFO: CommandSpec;
  static readonly META_SET: CommandSpec;
  static readonly META_UNSET: CommandSpec;
  static readonly META_SETTEMP: CommandSpec;
  static readonly META_UNSETTEMP: CommandSpec;
  static readonly META_ADDPREFIX: CommandSpec;
  static readonly META_ADDSUFFIX: CommandSpec;
  static readonly META_SETPREFIX: CommandSpec;
  static readonly META_SETSUFFIX: CommandSpec;
  static readonly META_REMOVEPREFIX: CommandSpec;
  static readonly META_REMOVESUFFIX: CommandSpec;
  static readonly META_ADDTEMP_PREFIX: CommandSpec;
  static readonly META_ADDTEMP_SUFFIX: CommandSpec;
  static readonly META_SETTEMP_PREFIX: CommandSpec;
  static readonly META_SETTEMP_SUFFIX: CommandSpec;
  static readonly META_REMOVETEMP_PREFIX: CommandSpec;
  static readonly META_REMOVETEMP_SUFFIX: CommandSpec;
  static readonly META_CLEAR: CommandSpec;
  static readonly TRACK_INFO: CommandSpec;
  static readonly TRACK_EDITOR: CommandSpec;
  static readonly TRACK_APPEND: CommandSpec;
  static readonly TRACK_INSERT: CommandSpec;
  static readonly TRACK_REMOVE: CommandSpec;
  static readonly TRACK_CLEAR: CommandSpec;
  static readonly TRACK_RENAME: CommandSpec;
  static readonly TRACK_CLONE: CommandSpec;
  static readonly LOG_RECENT: CommandSpec;
  static readonly LOG_SEARCH: CommandSpec;
  static readonly LOG_NOTIFY: CommandSpec;
  static readonly LOG_USER_HISTORY: CommandSpec;
  static readonly LOG_GROUP_HISTORY: CommandSpec;
  static readonly LOG_TRACK_HISTORY: CommandSpec;
  static readonly SPONGE: CommandSpec;
  static readonly SPONGE_PERMISSION_INFO: CommandSpec;
  static readonly SPONGE_PERMISSION_SET: CommandSpec;
  static readonly SPONGE_PERMISSION_CLEAR: CommandSpec;
  static readonly SPONGE_PARENT_INFO: CommandSpec;
  static readonly SPONGE_PARENT_ADD: CommandSpec;
  static readonly SPONGE_PARENT_REMOVE: CommandSpec;
  static readonly SPONGE_PARENT_CLEAR: CommandSpec;
  static readonly SPONGE_OPTION_INFO: CommandSpec;
  static readonly SPONGE_OPTION_SET: CommandSpec;
  static readonly SPONGE_OPTION_UNSET: CommandSpec;
  static readonly SPONGE_OPTION_CLEAR: CommandSpec;
  static valueOf(name: string): CommandSpec;
  static values(): CommandSpec[];
  usage(): string;
  key(): string;
}

}
declare module 'me.lucko.luckperms.common.command' {
import { ExecutorService } from 'java.util.concurrent';
import { AtomicBoolean } from 'java.util.concurrent.atomic';
/**
 * Root command manager for the '/luckperms' command.
*/
export class CommandManager {

}

}
declare module 'me.lucko.luckperms.common.verbose' {
import { DateTimeFormatter } from 'java.time.format';
import { Instant } from 'java.time';
import { UUID } from 'java.util';
import { AutoCloseable, Throwable, Exception } from 'java.lang';
import { AtomicInteger } from 'java.util.concurrent.atomic';
/**
 * Represents a verbose filter expression.
 *
 * The expression is compiled when the instance is initialised - subsequent
 * evaluations should be relatively fast.
*/
export class VerboseFilter {
  static acceptAll(): VerboseFilter;
  static compile(expression: string): VerboseFilter;
  isBlank(): boolean;
  toString(): string;
}
/**
 * Accepts {@link VerboseEvent}s and passes them onto registered {@link VerboseListener}s.
*/
export class VerboseHandler extends AutoCloseable {
  /**
   * Flushes the pending events to listeners.
  */
  flush(): void;
  close(): void;
}
export class VerboseCheckTarget {
  static readonly USER_TYPE: string;
  static readonly GROUP_TYPE: string;
  static readonly INTERNAL_TYPE: string;
  static internal(name: string): VerboseCheckTarget;
  static of(type: string, name: string): VerboseCheckTarget;
  getType(): string;
  getName(): string;
  getId(): UUID | null;
  describe(): string;
  equals(o: any): boolean;
  hashCode(): number;
  toString(): string;
}
/**
 * Exception thrown when attempting to compile a {@link VerboseFilter}
 * using an invalid filter string.
*/
export class InvalidFilterException extends Exception {
  constructor(message: string, cause: Throwable);
}
export class BooleanExpressionTest {

}
/**
 * Accepts and processes {@link VerboseEvent}, passed from the {@link VerboseHandler}.
*/
export class VerboseListener {
  getMatchedCount(): number;
}

}
declare module 'me.lucko.luckperms.common.verbose.expression.BooleanExpressionCompiler' {
import { RuntimeException } from 'java.lang';
/**
 * Evaluates the value of variables within an expression.
*/
export class VariableEvaluator {
  /**
   * Evaluates the value of a variable.
   *
   * @param variable the variable
   * @return the result
  */
  eval(variable: string): boolean;
}
/**
 * AST for a boolean expression.
*/
export class AST {
  static readonly ALWAYS_TRUE: AST;
  /**
   * Evaluates the AST.
   *
   * @param variableEvaluator the variable evaluator
   * @return the result
  */
  eval(variableEvaluator: VariableEvaluator): boolean;
}
/**
 * Represents a lexing error.
*/
export class LexerException extends RuntimeException {

}
/**
 * Represents a parsing error.
*/
export class ParserException extends RuntimeException {

}

}
declare module 'me.lucko.luckperms.common.context.calculator.WorldNameRewriter' {
import { Map } from 'java.util';
import { WorldNameRewriter } from 'me.lucko.luckperms.common.context.calculator';
export class Empty extends WorldNameRewriter {

}
export class NonEmpty extends WorldNameRewriter {
  constructor(rewrites: Map<string, string>);
}

}
declare module 'me.lucko.luckperms.common.inheritance' {
/**
 * Provides {@link InheritanceGraph}s.
*/
export class InheritanceGraphFactory {

}

}
declare module 'me.lucko.luckperms.common.util.Paginated' {
export class Entry<T> {
  constructor(position: number, value: T);
  position(): number;
  value(): T;
  toString(): string;
}

}
declare module 'me.lucko.luckperms.common.api.implementation' {
export class ApiAbstractManager<I, E, H> {

}

}
declare module 'me.lucko.luckperms.common.util.Throwing' {
export class Runnable {
  run(): void;
}
export class Consumer<T> {
  accept(t: T): void;
}

}
declare module 'me.lucko.luckperms.common.context.calculator' {
import { Map } from 'java.util';
/**
 * Rewrites world names according to the {@link ConfigKeys#WORLD_REWRITES} option.
*/
export class WorldNameRewriter {
  static of(rewrites: Map<string, string>): WorldNameRewriter;
}

}
declare module 'me.lucko.luckperms.common.node.matcher' {
export class StandardNodeMatchers {

}

}
declare module 'me.lucko.luckperms.common.plugin.logging' {
import { Throwable } from 'java.lang';
/**
 * Represents the logger instance being used by LuckPerms on the platform.
 *
 * Messages sent using the logger are sent prefixed with the LuckPerms tag,
 * and on some implementations will be colored depending on the message type.
*/
export class PluginLogger {
  info(s: string): void;
  warn(s: string): void;
  warn(s: string, t: Throwable): void;
  severe(s: string): void;
  severe(s: string, t: Throwable): void;
}

}
declare module 'me.lucko.luckperms.common.storage.implementation.file.watcher' {
import { AutoCloseable, Thread } from 'java.lang';
import { Map } from 'java.util';
import { AtomicReference } from 'java.util.concurrent.atomic';
import { Path, FileSystem, WatchKey, WatchService } from 'java.nio.file';
/**
 * Utility for "watching" for file changes using a {@link WatchService}.
*/
export class AbstractFileWatcher extends AutoCloseable {
  constructor(fileSystem: FileSystem, autoRegisterNewSubDirectories: boolean);
  /**
   * Register a watch key in the given directory.
   *
   * @param directory the directory
   * @throws IOException if unable to register a key
  */
  register(directory: Path): void;
  /**
   * Register a watch key recursively in the given directory.
   *
   * @param root the root directory
   * @throws IOException if unable to register a key
  */
  registerRecursively(root: Path): void;
  /**
   * Processes {@link WatchEvent}s from the watch service until it is closed, or until
   * the thread is interrupted.
  */
  runEventProcessingLoop(): void;
  close(): void;
}

}
declare module 'me.lucko.luckperms.common.util.Difference' {
import { Enum } from 'java.lang';
/**
 * A single change recorded in the {@link Difference} tracker.
 *
 * @param  the value type
*/
export class Change<T> {
  constructor(type: ChangeType, value: T);
  type(): ChangeType;
  value(): T;
  inverse(): Change<T>;
  equals(o: any): boolean;
  hashCode(): number;
  toString(): string;
}
/**
 * The type of change.
*/
export class ChangeType extends Enum<ChangeType> {
  static readonly ADD: ChangeType;
  static readonly REMOVE: ChangeType;
  static valueOf(name: string): ChangeType;
  static values(): ChangeType[];
  inverse(): ChangeType;
}

}
declare module 'me.lucko.luckperms.common.plugin.scheduler' {
import { Runnable } from 'java.lang';
import { Executor } from 'java.util.concurrent';
/**
 * A scheduler for running tasks using the systems provided by the platform
*/
export class SchedulerAdapter {
  /**
   * Gets an async executor instance
   *
   * @return an async executor instance
  */
  async(): Executor;
  /**
   * Gets a sync executor instance
   *
   * @return a sync executor instance
  */
  sync(): Executor;
  /**
   * Executes a task async
   *
   * @param task the task
  */
  executeAsync(task: Runnable): void;
  /**
   * Executes a task sync
   *
   * @param task the task
  */
  executeSync(task: Runnable): void;
  /**
   * Shuts down the scheduler instance.
   *
   * {@link #asyncLater(Runnable, long, TimeUnit)} and {@link #asyncRepeating(Runnable, long, TimeUnit)}.
  */
  shutdownScheduler(): void;
  /**
   * Shuts down the executor instance.
   *
   * {@link #async()} and {@link #executeAsync(Runnable)}.
  */
  shutdownExecutor(): void;
}
/**
 * Represents a scheduled task
*/
export class SchedulerTask {
  /**
   * Cancels the task.
  */
  cancel(): void;
}

}
declare module 'me.lucko.luckperms.common.bulkupdate.comparison.Comparison' {
/**
 * An instance of {@link Comparison} which is bound to an expression.
*/
export class CompiledExpression {
  /**
   * Tests the expression against a given string, according to the
   * rules of the parent {@link Comparison}.
   *
   * @param string the string
   * @return if there was a match
  */
  test(string: string): boolean;
}

}
declare module 'me.lucko.luckperms.common.storage.implementation.file.loader' {
/**
 * Wraps an object which can produce configurate {@link ConfigurationLoader}s.
*/
export class ConfigurateLoader {

}

}
declare module 'me.lucko.luckperms.common.node.utils' {
import { Set } from 'java.util';
import { Enum } from 'java.lang';
export class NodeJsonSerializer {

}
export class ShorthandParserTest {

}
/**
 * Utility to expand shorthand nodes
*/
export class ShorthandParser extends Enum<ShorthandParser> {
  /**
   * Expands "1-4" to ["1", "2", "3", "4"]
  */
  static readonly NUMERIC_RANGE: ShorthandParser;
  /**
   * Expands "a-d" to ["a", "b", "c", "d"]
  */
  static readonly CHARACTER_RANGE: ShorthandParser;
  /**
   * Expands "aa,bb|cc" to ["aa", "bb", "cc"]
  */
  static readonly LIST: ShorthandParser;
  static valueOf(name: string): ShorthandParser;
  static values(): ShorthandParser[];
  /**
   * Parses and expands the shorthand format.
   *
   * @param s the string to expand
   * @return the expanded result
  */
  static expandShorthand(s: string): Set<string>;
}

}
declare module 'me.lucko.luckperms.common.metastacking' {
/**
 * Contains the standard {@link MetaStackElement}s provided by LuckPerms.
*/
export class StandardStackElements {

}

}
declare module 'me.lucko.luckperms.common.plugin' {
import { Optional, UUID } from 'java.util';
/**
 * Main internal interface for LuckPerms plugins, providing the base for
 * abstraction throughout the project.
 *
 * All plugin platforms implement this interface.
*/
export class LuckPermsPlugin {
  /**
   * Lookup a uuid from a username.
   *
   * @param username the username to lookup
   * @return an optional uuid, if found
  */
  lookupUniqueId(username: string): Optional<UUID>;
  /**
   * Lookup a username from a uuid.
   *
   * @param uniqueId the uuid to lookup
   * @return an optional username, if found
  */
  lookupUsername(uniqueId: UUID): Optional<string>;
  /**
   * Tests whether the given username is valid.
   *
   * @param username the username
   * @return true if valid
  */
  testUsernameValidity(username: string): boolean;
  /**
   * Called at the end of the sync task.
  */
  performPlatformDataSync(): void;
}

}
declare module 'me.lucko.luckperms.common.actionlog.Log' {
import { Log } from 'me.lucko.luckperms.common.actionlog';
export class Builder {
  build(): Log;
}

}
declare module 'me.lucko.luckperms.common.bulkupdate.comparison' {
import { Enum } from 'java.lang';
import { CompiledExpression } from 'me.lucko.luckperms.common.bulkupdate.comparison.Comparison';
/**
 * An enumeration of standard {@link Comparison}s.
*/
export class StandardComparison extends Enum<StandardComparison> {
  static readonly EQUAL: StandardComparison;
  static readonly NOT_EQUAL: StandardComparison;
  static readonly SIMILAR: StandardComparison;
  static readonly NOT_SIMILAR: StandardComparison;
  static valueOf(name: string): StandardComparison;
  static values(): StandardComparison[];
  static readonly WILDCARD: string;
  static readonly WILDCARD_ONE: string;
  getSymbol(): string;
  toString(): string;
  static parseComparison(s: string): StandardComparison;
}
export class Constraint {
  /**
   * Returns if the given value satisfies this constraint
   *
   * @param value the value
   * @return true if satisfied
  */
  eval(value: string): boolean;
  toString(): string;
}
/**
 * A method of comparing two strings
*/
export class Comparison {
  /**
   * Gets the symbol which represents this comparison
   *
   * @return the comparison symbol
  */
  getSymbol(): string;
  /**
   * Creates a {@link CompiledExpression} for the given expression
   *
   * @param expression the expression
   * @return the compiled expression
  */
  compile(expression: string): CompiledExpression;
}

}
declare module 'me.lucko.luckperms.common.api' {
import { Method } from 'java.lang.reflect';
export class ApiUtils {
  static checkName(s: string): string;
}
export class ApiRegistrationUtil {
  static unregisterProvider(): void;
}

}
declare module 'me.lucko.luckperms.common.webeditor.socket' {
import { KeyPair, PrivateKey, PublicKey } from 'java.security';
import { Map } from 'java.util';
import { Enum } from 'java.lang';
import { TimeUnit } from 'java.util.concurrent';
export class WebEditorSocket {
  /**
   * Waits the specified amount of time for the socket to connect,
   * before throwing an exception if a timeout occurs.
   *
   * @param timeout the timeout
   * @param unit the timeout unit
  */
  waitForConnect(timeout: number, unit: TimeUnit): void;
  trustConnection(nonce: string): boolean;
  scheduleCleanupIfUnused(): void;
  close(): void;
  getRemotePublicKey(): PublicKey;
  setRemotePublicKey(remotePublicKey: PublicKey);
  isClosed(): boolean;
}
/**
 * Utilities for public/private key crypto used by the web editor socket connection.
*/
export class CryptographyUtils {
  /**
   * Parse a public key from the given string.
   *
   * @param base64String a base64 string encoding the public key
   * @return the parsed public key
   * @throws IllegalArgumentException if the input was invalid
  */
  static parsePublicKey(base64String: string): PublicKey;
  /**
   * Generate a public/private key pair.
   *
   * @return the generated key pair
  */
  static generateKeyPair(): KeyPair;
  /**
   * Signs `msg` using the given {@link PrivateKey}.
   *
   * @param privateKey the private key to sign with
   * @param msg the message
   * @return a base64 string containing the signature
  */
  static sign(privateKey: PrivateKey, msg: string): string;
  /**
   * Verify that the given base64 encoded signature matches
   * the given message and {@link PublicKey}.
   *
   * @param publicKey the public key that the message was supposedly signed with
   * @param msg the message
   * @param signatureBase64 the provided signature
   * @return true if the signature is ok
  */
  static verify(publicKey: PublicKey, msg: string, signatureBase64: string): boolean;
}
export class SocketMessageType extends Enum<SocketMessageType> {
  /**
   Sent when the editor first says "hello" over the channel. (editor -> plugin) 
  */
  static readonly HELLO: SocketMessageType;
  /**
   Sent when the plugin replies to the editors "hello" message. (plugin -> editor) 
  */
  static readonly HELLO_REPLY: SocketMessageType;
  /**
   Sent by the editor to confirm that a connection has been established. (editor -> plugin) 
  */
  static readonly CONNECTED: SocketMessageType;
  /**
   Sent by the editor to request that the plugin applies a change. (editor -> plugin) 
  */
  static readonly CHANGE_REQUEST: SocketMessageType;
  /**
   Sent by the plugin to confirm that the changes sent by the editor have been accepted or applied. (plugin -> editor) 
  */
  static readonly CHANGE_RESPONSE: SocketMessageType;
  /**
   Ping message to keep the socket alive. (editor -> plugin) 
  */
  static readonly PING: SocketMessageType;
  /**
   Ping response. (plugin -> editor) 
  */
  static readonly PONG: SocketMessageType;
  static valueOf(name: string): SocketMessageType;
  static values(): SocketMessageType[];
  readonly id: string;
  static getById(id: string): SocketMessageType;
}

}
declare module 'me.lucko.luckperms.common.webeditor.socket.listener' {
/**
 * A handler for a given type of message.
*/
export class Handler {

}

}
declare module 'me.lucko.luckperms.common.bulkupdate.query' {
import { Enum } from 'java.lang';
/**
 * Represents a query component
*/
export class Query {

}
/**
 * Represents a field being used in an update
*/
export class QueryField extends Enum<QueryField> {
  static readonly PERMISSION: QueryField;
  static readonly SERVER: QueryField;
  static readonly WORLD: QueryField;
  static valueOf(name: string): QueryField;
  static values(): QueryField[];
  static of(s: string): QueryField;
  getSqlName(): string;
}

}
declare module 'me.lucko.luckperms.common.calculator.processor' {
/**
 * A processor within a {@link PermissionCalculator}.
 *
 * Processors should not implement any sort of caching. This is handled in
 * the parent calculator.
*/
export class PermissionProcessor {
  /**
   * Called after a change has been made to the source map
  */
  refresh(): void;
  /**
   * Called after the parent calculator has been invalidated
  */
  invalidate(): void;
}

}
declare module 'me.lucko.luckperms.common.config.generic.key' {
import { Map } from 'java.util';
export class ConfigKeyFactory<T> {
  static readonly BOOLEAN: ConfigKeyFactory<boolean>;
  static readonly STRING: ConfigKeyFactory<string>;
  static readonly LOWERCASE_STRING: ConfigKeyFactory<string>;
  static readonly STRING_MAP: ConfigKeyFactory<Map<string, string>>;
}
/**
 * Represents a key in the configuration.
 *
 * @param  the value type
*/
export class ConfigKey<T> {
  /**
   * Gets the position of this key within the keys enum.
   *
   * @return the position
  */
  ordinal(): number;
  /**
   * Gets if the config key can be reloaded.
   *
   * @return the if the key can be reloaded
  */
  reloadable(): boolean;
}

}
declare module 'me.lucko.luckperms.common.context' {
export class ContextSetTest {
  testImmutableBuilder(): void;
  testImmutableContains(): void;
  testImmutableContainsAll(): void;
}

}
declare module 'me.lucko.luckperms.common.locale' {
import { LanguageInfo } from 'me.lucko.luckperms.common.locale.TranslationRepository';
import { Locale, Set, Collection, List, OptionalInt, Map } from 'java.util';
import { Path } from 'java.nio.file';
import { Args0, Args2, Args1, Args4, Args3 } from 'me.lucko.luckperms.common.locale.Message';
/**
 * A collection of formatted messages used by the plugin.
*/
export class Message {
  static readonly VIEW_AVAILABLE_COMMANDS_PROMPT: Args1<string>;
  static readonly NO_PERMISSION_FOR_SUBCOMMANDS: Args0;
  static readonly ALREADY_EXECUTING_COMMAND: Args0;
  static readonly FIRST_TIME_SETUP: Args2<string, string>;
  static readonly LOADING_DATABASE_ERROR: Args0;
  static readonly LOADING_STATE_ERROR: Args0;
  static readonly LOADING_STATE_ERROR_CB_OFFLINE_MODE: Args0;
  static readonly LOADING_SETUP_ERROR: Args0;
  static readonly OP_DISABLED: Args0;
  static readonly OP_DISABLED_SPONGE: Args0;
  static readonly VERBOSE_LOG_META: Args3<string, string, string>;
  static readonly VERBOSE_LOG_HOVER_TYPE: Args1<string>;
  static readonly VERBOSE_LOG_HOVER_ORIGIN: Args1<string>;
  static readonly VERBOSE_LOG_HOVER_THREAD: Args1<string>;
  static readonly VERBOSE_LOG_HOVER_TRACE_TITLE: Args0;
  static readonly VERBOSE_LOG_HOVER_TRACE_CONTENT: Args1<string>;
  static readonly VERBOSE_LOG_HOVER_TRACE_OVERFLOW: Args1<number>;
  static readonly VERBOSE_LOG_HOVER_PROCESSOR: Args1<string>;
  static readonly EXPORT_LOG: Args1<string>;
  static readonly EXPORT_LOG_PROGRESS: Args1<string>;
  static readonly COMMAND_NOT_RECOGNISED: Args0;
  static readonly COMMAND_NO_PERMISSION: Args0;
  static readonly MAIN_COMMAND_USAGE_HEADER: Args2<string, string>;
  static readonly COMMAND_USAGE_DETAILED_ARGS_HEADER: Args0;
  static readonly REQUIRED_ARGUMENT: Args1<string>;
  static readonly OPTIONAL_ARGUMENT: Args1<string>;
  static readonly USER_NOT_ONLINE: Args1<string>;
  static readonly USER_NOT_FOUND: Args1<string>;
  static readonly GROUP_NOT_FOUND: Args1<string>;
  static readonly TRACK_NOT_FOUND: Args1<string>;
  static readonly TRACK_SAVE_ERROR: Args1<string>;
  static readonly USER_INVALID_ENTRY: Args1<string>;
  static readonly GROUP_INVALID_ENTRY: Args1<string>;
  static readonly TRACK_INVALID_ENTRY: Args1<string>;
  static readonly VERBOSE_INVALID_FILTER: Args2<string, string>;
  static readonly VERBOSE_ON: Args0;
  static readonly VERBOSE_ON_QUERY: Args1<string>;
  static readonly VERBOSE_ON_COMMAND: Args2<string, string>;
  static readonly VERBOSE_OFF: Args0;
  static readonly VERBOSE_OFF_COMMAND: Args0;
  static readonly VERBOSE_OFF_COMMAND_NO_CHECKS: Args0;
  static readonly VERBOSE_RECORDING_ON: Args0;
  static readonly VERBOSE_RECORDING_ON_QUERY: Args1<string>;
  static readonly VERBOSE_UPLOAD_START: Args0;
  static readonly VERBOSE_RESULTS_URL: Args1<string>;
  static readonly TREE_UPLOAD_START: Args0;
  static readonly TREE_EMPTY: Args0;
  static readonly TREE_URL: Args1<string>;
  static readonly GENERIC_HTTP_REQUEST_FAILURE: Args2<number, string>;
  static readonly GENERIC_HTTP_UNKNOWN_FAILURE: Args0;
  static readonly SEARCH_SEARCHING: Args1<string>;
  static readonly SEARCH_SEARCHING_MEMBERS: Args1<string>;
  static readonly SEARCH_RESULT_GROUP_DEFAULT: Args0;
  static readonly SEARCH_RESULT: Args3<number, number, number>;
  static readonly SEARCH_SHOWING_USERS: Args3<number, number, number>;
  static readonly SEARCH_SHOWING_GROUPS: Args3<number, number, number>;
  static readonly APPLY_EDITS_SESSION_UNKNOWN: Args2<string, string>;
  static readonly APPLY_EDITS_SESSION_APPLIED_ALREADY: Args2<string, string>;
  static readonly APPLY_EDITS_INVALID_CODE: Args1<string>;
  static readonly APPLY_EDITS_UNABLE_TO_READ: Args1<string>;
  static readonly APPLY_EDITS_UNKNOWN_TYPE: Args1<string>;
  static readonly APPLY_EDITS_TARGET_USER_NOT_UUID: Args1<string>;
  static readonly APPLY_EDITS_TARGET_USER_UNABLE_TO_LOAD: Args1<string>;
  static readonly APPLY_EDITS_TARGET_NO_CHANGES_PRESENT: Args0;
  static readonly APPLY_EDITS_SUCCESS_SUMMARY: Args2<number, number>;
  static readonly APPLY_EDITS_TRACK_AFTER: Args1<string[]>;
  static readonly APPLY_EDITS_TRACK_BEFORE: Args1<string[]>;
  static readonly EDITOR_NO_MATCH: Args0;
  static readonly EDITOR_START: Args0;
  static readonly EDITOR_URL: Args1<string>;
  static readonly EDITOR_SOCKET_CONNECTED: Args0;
  static readonly EDITOR_SOCKET_RECONNECTED: Args0;
  static readonly EDITOR_SOCKET_CHANGES_RECEIVED: Args0;
  static readonly EDITOR_SOCKET_UNTRUSTED: Args4<string, string, string, boolean>;
  static readonly EDITOR_SOCKET_TRUST_SUCCESS: Args0;
  static readonly EDITOR_SOCKET_TRUST_FAILURE: Args0;
  static readonly EDITOR_HTTP_REQUEST_FAILURE: Args2<number, string>;
  static readonly EDITOR_HTTP_UNKNOWN_FAILURE: Args0;
  static readonly TRACK_DOES_NOT_CONTAIN: Args2<string, string>;
  static readonly ALREADY_EXISTS: Args1<string>;
  static readonly DOES_NOT_EXIST: Args1<string>;
  static readonly USER_LOAD_ERROR: Args0;
  static readonly GROUP_LOAD_ERROR: Args0;
  static readonly GROUPS_LOAD_ERROR: Args0;
  static readonly TRACK_LOAD_ERROR: Args0;
  static readonly TRACKS_LOAD_ERROR: Args0;
  static readonly TRACK_EMPTY: Args1<string>;
  static readonly UPDATE_TASK_REQUEST: Args0;
  static readonly UPDATE_TASK_COMPLETE: Args0;
  static readonly UPDATE_TASK_COMPLETE_NETWORK: Args0;
  static readonly UPDATE_TASK_PUSH_SUCCESS: Args1<string>;
  static readonly UPDATE_TASK_PUSH_FAILURE: Args0;
  static readonly UPDATE_TASK_PUSH_FAILURE_NOT_SETUP: Args0;
  static readonly RELOAD_CONFIG_SUCCESS: Args0;
  static readonly DELETE_GROUP_ERROR_DEFAULT: Args0;
  static readonly GROUPS_LIST: Args0;
  static readonly TRACKS_LIST: Args1<Collection<string>>;
  static readonly PERMISSION_CHECK_INFO_HEADER: Args1<string>;
  static readonly PERMISSION_INVALID_ENTRY_EMPTY: Args0;
  static readonly ILLEGAL_DATE_ERROR: Args1<string>;
  static readonly PAST_DATE_ERROR: Args0;
  static readonly META_INVALID_PRIORITY: Args1<string>;
  static readonly BULK_UPDATE_DISABLED: Args0;
  static readonly BULK_UPDATE_MUST_USE_CONSOLE: Args0;
  static readonly BULK_UPDATE_INVALID_DATA_TYPE: Args0;
  static readonly BULK_UPDATE_INVALID_CONSTRAINT: Args1<string>;
  static readonly BULK_UPDATE_INVALID_COMPARISON: Args1<string>;
  static readonly BULK_UPDATE_QUEUED: Args1<string>;
  static readonly BULK_UPDATE_CONFIRM: Args2<string, string>;
  static readonly BULK_UPDATE_UNKNOWN_ID: Args1<string>;
  static readonly BULK_UPDATE_STARTING: Args0;
  static readonly BULK_UPDATE_SUCCESS: Args0;
  static readonly BULK_UPDATE_STATISTICS: Args3<number, number, number>;
  static readonly BULK_UPDATE_FAILURE: Args0;
  static readonly TRANSLATIONS_SEARCHING: Args0;
  static readonly TRANSLATIONS_SEARCHING_ERROR: Args0;
  static readonly INSTALLED_TRANSLATIONS: Args1<Collection<string>>;
  static readonly AVAILABLE_TRANSLATIONS_HEADER: Args0;
  static readonly AVAILABLE_TRANSLATIONS_ENTRY: Args4<string, string, number, string[]>;
  static readonly TRANSLATIONS_DOWNLOAD_PROMPT: Args1<string>;
  static readonly TRANSLATIONS_INSTALLING: Args0;
  static readonly TRANSLATIONS_INSTALLING_SPECIFIC: Args1<string>;
  static readonly TRANSLATIONS_INSTALL_COMPLETE: Args0;
  static readonly TRANSLATIONS_DOWNLOAD_ERROR: Args1<string>;
  static readonly INFO_PARENT_HEADER: Args0;
  static readonly INFO_TEMP_PARENT_HEADER: Args0;
  static readonly USER_REMOVEGROUP_ERROR_PRIMARY: Args0;
  static readonly USER_PRIMARYGROUP_WARN_OPTION: Args1<string>;
  static readonly USER_TRACK_ERROR_AMBIGUOUS_TRACK_SELECTION: Args0;
  static readonly USER_PROMOTE_ERROR_MALFORMED: Args1<string>;
  static readonly USER_DEMOTE_ERROR_MALFORMED: Args1<string>;
  static readonly GROUP_INFO_GENERAL: Args3<string, string, OptionalInt>;
  static readonly GROUP_INFO_CONTEXTUAL_DATA: Args3<string, string, Map<string, string[]>>;
  static readonly GROUP_SET_DISPLAY_NAME_DOESNT_HAVE: Args1<string>;
  static readonly GROUP_SET_DISPLAY_NAME_ALREADY_HAS: Args2<string, string>;
  static readonly GROUP_SET_DISPLAY_NAME_ALREADY_IN_USE: Args2<string, string>;
  static readonly TRACK_PATH: Args1<Collection<string>>;
  static readonly TRACK_PATH_HIGHLIGHTED: Args2<Collection<string>, string>;
  static readonly TRACK_PATH_HIGHLIGHTED_PROGRESSION: Args4<Collection<string>, string, string, boolean>;
  static readonly TRACK_CLEAR: Args1<string>;
  static readonly TRACK_APPEND_SUCCESS: Args2<string, string>;
  static readonly TRACK_INSERT_SUCCESS: Args3<string, string, number>;
  static readonly TRACK_INSERT_ERROR_NUMBER: Args1<string>;
  static readonly TRACK_INSERT_ERROR_INVALID_POS: Args1<number>;
  static readonly TRACK_REMOVE_SUCCESS: Args2<string, string>;
  static readonly LOG_LOAD_ERROR: Args0;
  static readonly LOG_INVALID_PAGE_RANGE: Args1<number>;
  static readonly LOG_NO_ENTRIES: Args0;
  static readonly LOG_NOTIFY_CONSOLE: Args0;
  static readonly LOG_NOTIFY_TOGGLE_ON: Args0;
  static readonly LOG_NOTIFY_TOGGLE_OFF: Args0;
  static readonly LOG_NOTIFY_ALREADY_ON: Args0;
  static readonly LOG_NOTIFY_ALREADY_OFF: Args0;
  static readonly LOG_NOTIFY_UNKNOWN: Args0;
  static readonly LOG_SEARCH_HEADER: Args3<string, number, number>;
  static readonly LOG_RECENT_HEADER: Args2<number, number>;
  static readonly LOG_RECENT_BY_HEADER: Args3<string, number, number>;
  static readonly LOG_HISTORY_USER_HEADER: Args3<string, number, number>;
  static readonly LOG_HISTORY_GROUP_HEADER: Args3<string, number, number>;
  static readonly LOG_HISTORY_TRACK_HEADER: Args3<string, number, number>;
  static readonly IMPORT_ALREADY_RUNNING: Args0;
  static readonly EXPORT_ALREADY_RUNNING: Args0;
  static readonly FILE_NOT_WITHIN_DIRECTORY: Args1<string>;
  static readonly EXPORT_FILE_ALREADY_EXISTS: Args1<string>;
  static readonly EXPORT_FILE_NOT_WRITABLE: Args1<string>;
  static readonly EXPORT_FILE_FAILURE: Args0;
  static readonly EXPORT_FILE_SUCCESS: Args1<string>;
  static readonly EXPORT_WEB_SUCCESS: Args2<string, string>;
  static readonly IMPORT_FILE_DOESNT_EXIST: Args1<string>;
  static readonly IMPORT_FILE_NOT_READABLE: Args1<string>;
  static readonly IMPORT_FILE_READ_FAILURE: Args0;
  static readonly IMPORT_WEB_INVALID_CODE: Args1<string>;
  static readonly HTTP_REQUEST_FAILURE: Args2<number, string>;
  static readonly HTTP_UNKNOWN_FAILURE: Args0;
  static readonly IMPORT_UNABLE_TO_READ: Args1<string>;
  static readonly IMPORT_PROGRESS: Args3<number, number, number>;
  static readonly IMPORT_START: Args0;
  static readonly IMPORT_INFO: Args1<string>;
  static readonly IMPORT_END_COMPLETE: Args1<number>;
}
export class TranslationManager {
  /**
   The default locale used by LuckPerms messages 
  */
  static readonly DEFAULT_LOCALE: Locale;
  getTranslationsDirectory(): Path;
  getRepositoryTranslationsDirectory(): Path;
  getRepositoryStatusFile(): Path;
  getInstalledLocales(): Set<Locale>;
  reload(): void;
  static isTranslationFile(path: Path): boolean;
  /**
   * Loads custom translations (in any language) from the plugin configuration folder.
  */
  loadFromFileSystem(directory: Path, suppressDuplicatesError: boolean): void;
  static parseLocale(locale: string | null): Locale | null;
  static localeDisplayName(locale: Locale): string;
}
export class TranslationRepository {
  /**
   * Gets a list of available languages.
   *
   * @return a list of languages
   * @throws IOException if an i/o error occurs
   * @throws UnsuccessfulRequestException if the http request fails
  */
  getAvailableLanguages(): LanguageInfo[];
  /**
   * Schedules a refresh of the current translations if necessary.
  */
  scheduleRefresh(): void;
}

}
declare module 'me.lucko.luckperms.common.model' {
import { Enum } from 'java.lang';
import { Optional, List, OptionalInt, UUID, Comparator } from 'java.util';
/**
 * Utility class for creating instances of {@link PromotionResult}.
*/
export class PromotionResults {

}
/**
 * Calculates and caches a User's "primary group"
*/
export class PrimaryGroupHolder {
  /**
   * Gets the primary group which is stored against the user's data.
   *
   * @return the stored value
  */
  getStoredValue(): Optional<string>;
  /**
   * Sets the primary group which is stored against the user's data.
   *
   * @param value the new stored value
  */
  setStoredValue(storedValue: string);
}
/**
 * Used to identify a specific {@link User}.
*/
export class UserIdentifier {
  /**
   * Creates a {@link UserIdentifier}.
   *
   * @param uniqueId the uuid of the user
   * @param username the username of the user, nullable
   * @return a new identifier
  */
  static of(uniqueId: UUID, username: string | null): UserIdentifier;
  getUniqueId(): UUID;
  getUsername(): Optional<string>;
  equals(o: any): boolean;
  hashCode(): number;
  toString(): string;
}
/**
 * Utility class for creating instances of {@link DemotionResult}.
*/
export class DemotionResults {

}
export class Track {
  getName(): string;
  /**
   * Gets an ordered list of the groups on this track
   *
   * @return am ordered {@link List} of the groups on this track
  */
  getGroups(): string[];
  setGroups(groups: string[]);
  /**
   * Gets the number of groups on this track
   *
   * @return the number of groups on this track
  */
  getSize(): number;
  /**
   * Gets the next group on the track, after the one provided
   *
   * @param current the group before the group being requested
   * @return the group name, or null if the end of the track has been reached
   * @throws IllegalArgumentException if the track does not contain the group given
  */
  getNext(current: string): string;
  /**
   * Gets the group before the group provided
   *
   * @param current the group after the group being requested
   * @return the group name, or null if the start of the track has been reached
   * @throws IllegalArgumentException if the track does not contain the group given
  */
  getPrevious(current: string): string;
  /**
   * Checks if a group features on this track
   *
   * @param group the group to check
   * @return true if the group is on this track
  */
  containsGroup(group: string): boolean;
  /**
   * Clear all of the groups within this track
  */
  clearGroups(): void;
  equals(o: any): boolean;
  hashCode(): number;
  toString(): string;
}
export class HolderType extends Enum<HolderType> {
  static readonly USER: HolderType;
  static readonly GROUP: HolderType;
  static valueOf(name: string): HolderType;
  static values(): HolderType[];
  toString(): string;
}
/**
 * Represents an object that can hold permissions, (a user or group)
 *
 * Data is stored in {@link NodeMap}s. A holder has two of these, one for
 * enduring nodes and one for transient nodes.
 *
 * This class provides a number of methods to perform inheritance lookups.
 * These lookup methods initially use Lists of nodes populated with the
 * inheritance tree. Nodes at the start of this list have priority over nodes at
 * the end. Nodes higher up the tree appear at the end of these lists. In order
 * to remove duplicate elements, the lists are flattened. This is significantly
 * faster than trying to prevent duplicates throughout the process of accumulation,
 * and reduces the need for too much caching.
 *
 * Cached state is avoided in these instances to cut down on memory
 * footprint. The nodes are stored indexed to the contexts they apply in, so
 * doing context specific querying should be fast. Caching would be ineffective
 * here, due to the potentially vast amount of contexts being used by nodes,
 * and the potential for very large inheritance trees.
*/
export class PermissionHolder {
  getInheritanceComparator(): Comparator<any>;
  /**
   * Gets a display name for this permission holder, without any formatting.
   *
   * @return the display name
  */
  getPlainDisplayName(): string;
  /**
   * Removes temporary permissions that have expired
   *
   * @return true if permissions had expired and were removed
  */
  auditTemporaryNodes(): boolean;
  getWeight(): OptionalInt;
}

}
declare module 'me.lucko.luckperms.common.event.gen' {
import { MethodHandle } from 'java.lang.invoke';
/**
 * Holds the generated event class for a given type of {@link LuckPermsEvent}.
*/
export class GeneratedEventClass {
  /**
   * Pre-generates {@link GeneratedEventClass}es for known event types.
  */
  static preGenerate(): void;
}

}
declare module 'me.lucko.luckperms.common.command.tabcomplete' {
import { Collection, List } from 'java.util';
import { Stream } from 'java.util.stream';
import { Supplier } from 'java.util.function';
/**
 * Common completion suppliers used by the plugin
*/
export class TabCompletions {

}
/**
 * Utility for computing tab completion results
*/
export class TabCompleter {
  static create(): TabCompleter;
  complete(args: string[]): string[];
}
export class CompletionSupplier {
  static readonly EMPTY: CompletionSupplier;
  static startsWith(...strings: string[]): CompletionSupplier;
  static startsWith(strings: Collection<string>): CompletionSupplier;
  static startsWith(stringsSupplier: Supplier<Stream<string>>): CompletionSupplier;
  static contains(...strings: string[]): CompletionSupplier;
  static contains(strings: Collection<string>): CompletionSupplier;
  static contains(stringsSupplier: Supplier<Stream<string>>): CompletionSupplier;
  supplyCompletions(partial: string): string[];
}

}
declare module 'me.lucko.luckperms.common.command.utils' {
import { Enum } from 'java.lang';
import { List } from 'java.util';
/**
 * Tokenizes command input into distinct "argument" tokens.
 *
 * Splits on whitespace, except when surrounded by quotes.
*/
export class ArgumentTokenizer extends Enum<ArgumentTokenizer> {
  static readonly EXECUTE: ArgumentTokenizer;
  static readonly TAB_COMPLETE: ArgumentTokenizer;
  static valueOf(name: string): ArgumentTokenizer;
  static values(): ArgumentTokenizer[];
  tokenizeInput(args: string[]): string[];
  tokenizeInput(args: string): string[];
}
export class SortType extends Enum<SortType> {
  static readonly PRIORITY: SortType;
  static readonly ALPHABETICALLY: SortType;
  static valueOf(name: string): SortType;
  static values(): SortType[];
  toString(): string;
}
/**
 * Utility methods for saving users, groups and tracks.
*/
export class StorageAssistant {

}
export class SortMode {
  isAscending(): boolean;
}
/**
 * Tokenizes strings on whitespace, but ignoring whitespace enclosed within quotes.
*/
export class QuotedStringTokenizer {
  constructor(string: string);
  tokenize(omitEmptyStringAtEnd: boolean): string[];
}

}
declare module 'me.lucko.luckperms.common.event' {
import { UUID } from 'java.util';
export class EventDispatcher {
  dispatchContextUpdate(subject: any): void;
  dispatchGroupLoadAll(): void;
  dispatchConfigReload(): void;
  dispatchPostSync(): void;
  dispatchNetworkPreSync(initialState: boolean, id: UUID): boolean;
  dispatchPreSync(initialState: boolean): boolean;
  dispatchTrackLoadAll(): void;
  dispatchUserFirstLogin(uniqueId: UUID, username: string): void;
  dispatchUniqueIdDetermineType(uniqueId: UUID, initialType: string): string;
  dispatchUniqueIdLookup(username: string, initial: UUID): UUID;
  dispatchUsernameLookup(uniqueId: UUID, initial: string): string;
  dispatchUsernameValidityCheck(username: string, initialState: boolean): boolean;
}
/**
 * Defines a class which listens to {@link LuckPermsEvent}s.
*/
export class LuckPermsEventListener {

}

}
declare module 'me.lucko.luckperms.common.dependencies' {
import { MessageDigest } from 'java.security';
import { Enum, Throwable, Exception } from 'java.lang';
import { Path } from 'java.nio.file';
/**
 * The dependencies used by LuckPerms.
*/
export class Dependency extends Enum<Dependency> {
  static readonly ASM: Dependency;
  static readonly ASM_COMMONS: Dependency;
  static readonly JAR_RELOCATOR: Dependency;
  static readonly ADVENTURE: Dependency;
  static readonly ADVENTURE_PLATFORM: Dependency;
  static readonly ADVENTURE_PLATFORM_BUKKIT: Dependency;
  static readonly ADVENTURE_PLATFORM_BUNGEECORD: Dependency;
  static readonly EVENT: Dependency;
  static readonly CAFFEINE: Dependency;
  static readonly OKIO: Dependency;
  static readonly OKHTTP: Dependency;
  static readonly BYTEBUDDY: Dependency;
  static readonly COMMODORE: Dependency;
  static readonly COMMODORE_FILE: Dependency;
  static readonly MARIADB_DRIVER: Dependency;
  static readonly MYSQL_DRIVER: Dependency;
  static readonly POSTGRESQL_DRIVER: Dependency;
  static readonly H2_DRIVER: Dependency;
  static readonly SQLITE_DRIVER: Dependency;
  static readonly HIKARI: Dependency;
  static readonly SLF4J_SIMPLE: Dependency;
  static readonly SLF4J_API: Dependency;
  static readonly MONGODB_DRIVER_CORE: Dependency;
  static readonly MONGODB_DRIVER_LEGACY: Dependency;
  static readonly MONGODB_DRIVER_SYNC: Dependency;
  static readonly MONGODB_DRIVER_BSON: Dependency;
  static readonly JEDIS: Dependency;
  static readonly RABBITMQ: Dependency;
  static readonly COMMONS_POOL_2: Dependency;
  static readonly CONFIGURATE_CORE: Dependency;
  static readonly CONFIGURATE_GSON: Dependency;
  static readonly CONFIGURATE_YAML: Dependency;
  static readonly SNAKEYAML: Dependency;
  static readonly CONFIGURATE_HOCON: Dependency;
  static readonly HOCON_CONFIG: Dependency;
  static readonly CONFIGURATE_TOML: Dependency;
  static readonly TOML4J: Dependency;
  static valueOf(name: string): Dependency;
  static values(): Dependency[];
  getFileName(classifier: string): string;
  getChecksum(): number[];
  checksumMatches(hash: number[]): boolean;
  /**
   * Creates a {@link MessageDigest} suitable for computing the checksums
   * of dependencies.
   *
   * @return the digest
  */
  static createDigest(): MessageDigest;
}
/**
 * Represents a repository which contains {@link Dependency}s.
*/
export class DependencyRepository extends Enum<DependencyRepository> {
  /**
   * Maven Central mirror repository.
   *
   * This is used to reduce the load on repo.maven.org.
   *
   * Although Maven Central is technically a CDN, it is meant for developer use,
   * not end-user products. It is trivial and not very expensive for us to provide a
   * mirror, which will absorb any traffic caused by LP.
   *
   * LuckPerms will fallback to the real-thing if the mirror ever goes offline.
   * Retrieved content is validated with a checksum, so there is no risk to integrity.
  */
  static readonly MAVEN_CENTRAL_MIRROR: DependencyRepository;
  /**
   * Maven Central.
  */
  static readonly MAVEN_CENTRAL: DependencyRepository;
  static valueOf(name: string): DependencyRepository;
  static values(): DependencyRepository[];
}
/**
 * Loads and manages runtime dependencies for the plugin.
*/
export class DependencyManager {

}
/**
 * Exception thrown if a dependency cannot be downloaded.
*/
export class DependencyDownloadException extends Exception {
  constructor();
  constructor(message: string);
  constructor(message: string, cause: Throwable);
  constructor(cause: Throwable);
}
/**
 * Applies LuckPerms specific behaviour for {@link Dependency}s.
*/
export class DependencyRegistry {
  static isGsonRelocated(): boolean;
}
export class DependencyChecksumTest {
  check(): void;
}

}
declare module 'me.lucko.luckperms.common.storage.implementation' {
import { Set, UUID } from 'java.util';
export class StorageImplementation {
  getImplementationName(): string;
  init(): void;
  shutdown(): void;
  getUniqueUsers(): Set<UUID>;
  loadAllGroups(): void;
  loadAllTracks(): void;
  deletePlayerData(uniqueId: UUID): void;
  getPlayerUniqueId(username: string): UUID | null;
  getPlayerName(uniqueId: UUID): string | null;
}

}
declare module 'me.lucko.luckperms.common.model.manager.user' {
import { Runnable } from 'java.lang';
import { UUID } from 'java.util';
import { TimeUnit } from 'java.util.concurrent';
import { TimeoutSettings } from 'me.lucko.luckperms.common.model.manager.user.UserHousekeeper';
/**
 * The instance responsible for unloading users which are no longer needed.
*/
export class UserHousekeeper extends Runnable {
  registerUsage(uuid: UUID): void;
  registerApiUsage(uuid: UUID): void;
  clearApiUsage(uuid: UUID): void;
  run(): void;
  cleanup(uuid: UUID): void;
  static timeoutSettings(duration: number, unit: TimeUnit): TimeoutSettings;
}

}
declare module 'me.lucko.luckperms.common.context.manager' {
import { UUID } from 'java.util';
import { Class } from 'java.lang';
import { StaticLookupCache, CalculatorList } from 'me.lucko.luckperms.common.context.manager.ContextManager';
/**
 * Supplies contexts for a given subject.
*/
export class QueryOptionsSupplier {

}
/**
 * Base implementation of {@link ContextManager} which caches content lookups.
 *
 * @param  the calculator type
*/
export class ContextManager<S, P> {
  getSubjectClass(): Class<S>;
  getPlayerClass(): Class<P>;
  getUniqueId(player: P): UUID;
  signalContextUpdate(subject: S): void;
}

}
declare module 'me.lucko.luckperms.common.util.gson' {
export class GsonProvider {

}
/**
 * Stupidly simple fluent gson wrappers
*/
export class JElement {

}

}
declare module 'me.lucko.luckperms.common.model.nodemap' {
/**
 * A map of nodes held by a {@link PermissionHolder}.
*/
export class NodeMap {
  isEmpty(): boolean;
  size(): number;
}

}
declare module 'me.lucko.luckperms.common.webeditor' {
import { Set, List, Map } from 'java.util';
/**
 * Encapsulates a session with the web editor.
 *
 * A session is tied to a specific user, and can comprise of multiple requests to and
 * responses from the web editor.
*/
export class WebEditorSession {
  open(): void;
  createFollowUpSession(): string;
  getCommandLabel(): string;
}
/**
 * Encapsulates a request to the web editor.
*/
export class WebEditorRequest {
  static readonly MAX_USERS: number;
  encode(): number[];
  getTracks(): Map<string, string[]>;
}
/**
 * Encapsulates a response from the web editor.
*/
export class WebEditorResponse {

}

}
declare module 'me.lucko.luckperms.common.backup.Exporter' {
import { Path } from 'java.nio.file';
import { Exporter } from 'me.lucko.luckperms.common.backup';
export class SaveFile extends Exporter {

}
export class WebUpload extends Exporter {

}

}
declare module 'me.lucko.luckperms.common.config' {
/**
 * All of the {@link ConfigKey}s used by LuckPerms.
 *
 * The {@link #getKeys()} method and associated behaviour allows this class
 * to function a bit like an enum, but with generics.
*/
export class ConfigKeys {

}
/**
 * A wrapper for the 'contexts.json' file.
*/
export class ContextsFile {
  load(): void;
  save(): void;
}

}
declare module 'me.lucko.luckperms.common.actionlog' {
import { Builder } from 'me.lucko.luckperms.common.actionlog.Log';
export class LogDispatcher {

}
export class Log {
  static builder(): Builder;
  static empty(): Log;
}
export class ActionJsonSerializer {

}

}
declare module 'me.lucko.luckperms.common.verbose.expression' {
import { AST } from 'me.lucko.luckperms.common.verbose.expression.BooleanExpressionCompiler';
/**
 * Compiler for boolean expressions with variables.
*/
export class BooleanExpressionCompiler {
  /**
   * Compiles an {@link AST} for a given boolean expression.
   *
   * @param expression the expression string
   * @return the compiled AST
   * @throws LexerException if an error occurs when lexing the expression
   * @throws ParserException if an error occurs when parsing the expression
  */
  static compile(expression: string): AST;
}

}
declare module 'me.lucko.luckperms.common.query' {
export class DataSelector {

}

}
declare module 'me.lucko.luckperms.common.config.generic.adapter' {
import { List, Map } from 'java.util';
export class ConfigurationAdapter {
  reload(): void;
  getString(path: string, def: string): string;
  getInteger(path: string, def: number): number;
  getBoolean(path: string, def: boolean): boolean;
  getStringList(path: string, def: string[]): string[];
  getStringMap(path: string, def: Map<string, string>): Map<string, string>;
}

}
declare module 'me.lucko.luckperms.common.backup' {
import { Runnable } from 'java.lang';
import { SimpleDateFormat } from 'java.text';
import { ProgressLogger } from 'me.lucko.luckperms.common.backup.Exporter';
/**
 * Handles export operations
*/
export class Exporter extends Runnable {
  run(): void;
}
/**
 * Handles import operations
*/
export class Importer extends Runnable {
  run(): void;
}

}
declare module 'me.lucko.luckperms.common.storage.implementation.split' {
import { Enum } from 'java.lang';
export class SplitStorageType extends Enum<SplitStorageType> {
  static readonly LOG: SplitStorageType;
  static readonly USER: SplitStorageType;
  static readonly GROUP: SplitStorageType;
  static readonly TRACK: SplitStorageType;
  static readonly UUID: SplitStorageType;
  static valueOf(name: string): SplitStorageType;
  static values(): SplitStorageType[];
}

}
declare module 'me.lucko.luckperms.common.dependencies.classloader' {
import { URLClassLoader, URL } from 'java.net';
/**
 * A classloader "isolated" from the rest of the Minecraft server.
 *
 * Used to load specific LuckPerms dependencies without causing conflicts
 * with other plugins, or libraries provided by the server implementation.
*/
export class IsolatedClassLoader extends URLClassLoader {
  constructor(urls: URL[]);
}

}
declare module 'me.lucko.luckperms.common.locale.Message' {
export class Args0 {

}
export class Args1<A0> {

}
export class Args2<A0, A1> {

}
export class Args3<A0, A1, A2> {

}
export class Args4<A0, A1, A2, A3> {

}
export class Args5<A0, A1, A2, A3, A4> {

}
export class Args6<A0, A1, A2, A3, A4, A5> {

}

}
declare module 'me.lucko.luckperms.common.plugin.classpath' {
import { AutoCloseable } from 'java.lang';
import { URLClassLoader, URL } from 'java.net';
import { Path } from 'java.nio.file';
/**
 * Interface which allows access to add URLs to the plugin classpath at runtime.
*/
export class ClassPathAppender extends AutoCloseable {
  addJarToClasspath(file: Path): void;
  close(): void;
}
/**
 * Provides access to {@link URLClassLoader}#addURL.
*/
export class URLClassLoaderAccess {
  /**
   * Creates a {@link URLClassLoaderAccess} for the given class loader.
   *
   * @param classLoader the class loader
   * @return the access object
  */
  static create(classLoader: URLClassLoader): URLClassLoaderAccess;
  /**
   * Adds the given URL to the class loader.
   *
   * @param url the URL to add
  */
  addURL(url: URL): void;
}

}
declare module 'me.lucko.luckperms.common.util.StackTracePrinter' {
import { StackTraceElement } from 'java.lang';
import { StackTracePrinter } from 'me.lucko.luckperms.common.util';
import { Predicate } from 'java.util.function';
export class Builder {
  truncateLength(truncateLength: number): Builder;
  ignoreElementsMatching(predicate: Predicate<any>): Builder;
  ignoreClass(className: string): Builder;
  ignoreClassStartingWith(className: string): Builder;
  build(): StackTracePrinter;
}

}
declare module 'me.lucko.luckperms.common.storage.misc' {
import { Map } from 'java.util';
import { Pattern } from 'java.util.regex';
import { Predicate } from 'java.util.function';
export class DataConstraints {
  static readonly MAX_PERMISSION_LENGTH: number;
  static readonly MAX_TRACK_NAME_LENGTH: number;
  static readonly MAX_GROUP_NAME_LENGTH: number;
  static readonly MAX_PLAYER_USERNAME_LENGTH: number;
  static readonly PLAYER_USERNAME_INVALID_CHAR_MATCHER: Pattern;
  static readonly MAX_SERVER_LENGTH: number;
  static readonly MAX_WORLD_LENGTH: number;
  static readonly PERMISSION_TEST: Predicate<string>;
  static readonly PLAYER_USERNAME_TEST: Predicate<string>;
  static readonly PLAYER_USERNAME_TEST_LENIENT: Predicate<string>;
  static readonly GROUP_NAME_TEST: Predicate<string>;
  static readonly GROUP_NAME_TEST_ALLOW_SPACE: Predicate<string>;
  static readonly TRACK_NAME_TEST: Predicate<string>;
  static readonly TRACK_NAME_TEST_ALLOW_SPACE: Predicate<string>;
  static readonly SERVER_NAME_TEST: Predicate<string>;
  static readonly WORLD_NAME_TEST: Predicate<string>;
}
export class StorageCredentials {
  constructor(address: string, database: string, username: string, password: string, maxPoolSize: number, minIdleConnections: number, maxLifetime: number, keepAliveTime: number, connectionTimeout: number, properties: Map<string, string>);
  getAddress(): string;
  getDatabase(): string;
  getUsername(): string;
  getPassword(): string;
  getMaxPoolSize(): number;
  getMinIdleConnections(): number;
  getMaxLifetime(): number;
  getKeepAliveTime(): number;
  getConnectionTimeout(): number;
  getProperties(): Map<string, string>;
}

}
declare module 'me.lucko.luckperms.common.calculator' {
/**
 * Creates a calculator instance given a set of contexts
*/
export class CalculatorFactory {

}

}
declare module 'me.lucko.luckperms.common.verbose.event' {
import { Enum } from 'java.lang';
export class VerboseEventType extends Enum<VerboseEventType> {
  /**
   * {@link PermissionCheckEvent}
  */
  static readonly PERMISSION: VerboseEventType;
  /**
   * {@link MetaCheckEvent}
  */
  static readonly META: VerboseEventType;
  static valueOf(name: string): VerboseEventType;
  static values(): VerboseEventType[];
  toString(): string;
}
/**
 * Represents the origin of a meta check
*/
export class CheckOrigin extends Enum<CheckOrigin> {
  /**
   * Indicates the check was caused by a lookup in a platform API
  */
  static readonly PLATFORM_API: CheckOrigin;
  /**
   * Indicates the check was caused by a 'hasPermission' check on the platform
  */
  static readonly PLATFORM_API_HAS_PERMISSION: CheckOrigin;
  /**
   * Indicates the check was caused by a 'hasPermissionSet' type check on the platform
  */
  static readonly PLATFORM_API_HAS_PERMISSION_SET: CheckOrigin;
  /**
   * Indicates the check was caused by a 3rd party API call
  */
  static readonly THIRD_PARTY_API: CheckOrigin;
  /**
   * Indicates the check was caused by a LuckPerms API call
  */
  static readonly LUCKPERMS_API: CheckOrigin;
  /**
   * Indicates the check was caused by a LuckPerms internal
  */
  static readonly INTERNAL: CheckOrigin;
  static valueOf(name: string): CheckOrigin;
  static values(): CheckOrigin[];
}

}
declare module 'me.lucko.luckperms.common.context.serializer' {
/**
 * Serializes and deserializes {@link ContextSet}s to and from JSON.
 *
 * The entries within the serialized output are sorted, this ensures that any two invocations
 * of {@link #serialize(ContextSet)} with the same {@link ContextSet} will produce
 * the same exact JSON string.
*/
export class ContextSetJsonSerializer {

}
export class ContextSetConfigurateSerializer {

}

}
declare module 'me.lucko.luckperms.common.storage.implementation.sql.connection.file' {
import { SQLWarning, NClob, Blob, Statement, Connection, PreparedStatement, Savepoint, DatabaseMetaData, Struct, Array, SQLXML, CallableStatement, Clob } from 'java.sql';
import { Class } from 'java.lang';
import { Properties, Map } from 'java.util';
import { Executor } from 'java.util.concurrent';
/**
 * A wrapper around a {@link Connection} which blocks usage of the default {@link #close()} method.
*/
export class NonClosableConnection extends Connection {
  constructor(delegate: Connection);
  /**
   * Actually {@link #close() closes} the underlying connection.
  */
  shutdown(): void;
  close(): void;
  isWrapperFor(iface: Class<any>): boolean;
  unwrap<T>(iface: Class<T>): T;
  createStatement(): Statement;
  prepareStatement(sql: string): PreparedStatement;
  prepareCall(sql: string): CallableStatement;
  nativeSQL(sql: string): string;
  setAutoCommit(autoCommit: boolean): void;
  getAutoCommit(): boolean;
  commit(): void;
  rollback(): void;
  isClosed(): boolean;
  getMetaData(): DatabaseMetaData;
  setReadOnly(readOnly: boolean): void;
  isReadOnly(): boolean;
  setCatalog(catalog: string);
  getCatalog(): string;
  setTransactionIsolation(transactionIsolation: number);
  getTransactionIsolation(): number;
  getWarnings(): SQLWarning;
  clearWarnings(): void;
  createStatement(resultSetType: number, resultSetConcurrency: number): Statement;
  prepareStatement(sql: string, resultSetType: number, resultSetConcurrency: number): PreparedStatement;
  prepareCall(sql: string, resultSetType: number, resultSetConcurrency: number): CallableStatement;
  getTypeMap(): Map<string, Class<any>>;
  setTypeMap(typeMap: Map<string, Class<any>>);
  setHoldability(holdability: number);
  getHoldability(): number;
  setSavepoint(): Savepoint;
  setSavepoint(savepoint: string);
  rollback(savepoint: Savepoint): void;
  releaseSavepoint(savepoint: Savepoint): void;
  createStatement(resultSetType: number, resultSetConcurrency: number, resultSetHoldability: number): Statement;
  prepareStatement(sql: string, resultSetType: number, resultSetConcurrency: number, resultSetHoldability: number): PreparedStatement;
  prepareCall(sql: string, resultSetType: number, resultSetConcurrency: number, resultSetHoldability: number): CallableStatement;
  prepareStatement(sql: string, autoGeneratedKeys: number): PreparedStatement;
  prepareStatement(sql: string, columnIndexes: number[]): PreparedStatement;
  prepareStatement(sql: string, columnNames: string[]): PreparedStatement;
  createClob(): Clob;
  createBlob(): Blob;
  createNClob(): NClob;
  createSQLXML(): SQLXML;
  isValid(timeout: number): boolean;
  setClientInfo(name: string, value: string): void;
  setClientInfo(clientInfo: Properties);
  getClientInfo(name: string): string;
  getClientInfo(): Properties;
  createArrayOf(typeName: string, elements: any[]): Array;
  createStruct(typeName: string, attributes: any[]): Struct;
  setSchema(schema: string);
  getSchema(): string;
  abort(executor: Executor): void;
  setNetworkTimeout(executor: Executor, milliseconds: number): void;
  getNetworkTimeout(): number;
}

}
declare module 'me.lucko.luckperms.common.messaging' {
export class InternalMessagingService {
  /**
   * Gets the name of this messaging service
   *
   * @return the name of this messaging service
  */
  getName(): string;
  /**
   * Closes the messaging service
  */
  close(): void;
  /**
   * Uses the messaging service to inform other servers about a general
   * change.
  */
  pushUpdate(): void;
}

}
declare module 'me.lucko.luckperms.common.cacheddata.type' {
import { Set } from 'java.util';
import { AtomicReference } from 'java.util.concurrent.atomic';
import { State } from 'me.lucko.luckperms.common.cacheddata.type.MetaAccumulator';
/**
 * Holds temporary mutable meta whilst this object is passed up the
 * inheritance tree to accumulate meta from parents
*/
export class MetaAccumulator {
  /**
   * "Completes" the accumulator, preventing any further changes.
   *
   * Also performs some final processing on the accumulators state, before
   * data is read.
  */
  complete(): void;
  setPrimaryGroup(primaryGroup: string);
  getPrimaryGroup(): string;
  toString(): string;
}

}
declare module 'me.lucko.luckperms.common.storage.implementation.custom' {
/**
 * Hook to allow external code to provide a storage implementation
*/
export class CustomStorageProviders {

}
/**
 * A storage provider
*/
export class CustomStorageProvider {

}

}
declare module 'me.lucko.luckperms.common.bulkupdate.action' {
/**
 * Represents an action to be applied to a given node.
*/
export class Action {
  /**
   * Gets the name of this action
   *
   * @return the name of the action
  */
  getName(): string;
}

}
declare module 'me.lucko.luckperms.common.tasks' {
import { Runnable } from 'java.lang';
export class ExpireTemporaryTask extends Runnable {
  run(): void;
}
/**
 * System wide sync task for LuckPerms.
 *
 * Ensures that all local data is consistent with the storage.
*/
export class SyncTask extends Runnable {
  /**
   * Runs the update task
   *
   * Called async.
  */
  run(): void;
}
export class CacheHousekeepingTask extends Runnable {
  run(): void;
}

}
declare module 'me.lucko.luckperms.common.command.abstraction' {
import { Exception } from 'java.lang';
import { Predicate } from 'java.util.function';
/**
 * An abstract command class
 *
 * @param  the argument type required by the command
*/
export class Command<T> {
  /**
   * Gets the short name of this command
   *
   * The result should be appropriately capitalised.
   *
   * @return the command name
  */
  getName(): string;
  /**
   * Gets the predicate used to validate the number of arguments provided to
   * the command on execution
   *
   * @return the argument checking predicate
  */
  getArgumentCheck(): Predicate<number>;
  /**
   * Gets the usage of this command.
   * Will only return a non empty result for main commands.
   *
   * @return the usage of this command.
  */
  getUsage(): string;
  /**
   * Gets if this command should be displayed in command listings, or "hidden"
   *
   * @return if the command should be displayed
  */
  shouldDisplay(): boolean;
}
/**
 * Exception to be thrown if there is an error processing a command
*/
export class CommandException extends Exception {

}
/**
 * A sub command which can be be applied to both groups and users.
 * This doesn't extend the other Command or SubCommand classes to avoid generics hell.
*/
export class GenericChildCommand {
  getName(): string;
  getArgumentCheck(): Predicate<any>;
}

}
declare module 'me.lucko.luckperms.common.webeditor.store' {
import { KeyPair } from 'java.security';
import { Set } from 'java.util';
import { CompletableFuture } from 'java.util.concurrent';
import { Path } from 'java.nio.file';
/**
 * Contains a store of known web editor sessions and provides a lookup function for
 * trusted editor public keys.
*/
export class WebEditorStore {
  keyPair(): KeyPair;
}
export class RemoteSession {
  isCompleted(): boolean;
  complete(): void;
}
export class WebEditorSocketMap {

}
export class WebEditorSessionMap {

}
export class WebEditorKeystore {
  constructor(consoleKeysPath: Path);
}

}
declare module 'me.lucko.luckperms.common.storage' {
import { Set, List, UUID } from 'java.util';
import { Enum, Void } from 'java.lang';
import { CompletableFuture } from 'java.util.concurrent';
/**
 * Provides a {@link CompletableFuture} based API for interacting with a {@link StorageImplementation}.
*/
export class Storage {
  getName(): string;
  init(): void;
  shutdown(): void;
  getUniqueUsers(): CompletableFuture<Set<UUID>>;
  loadAllGroups(): CompletableFuture<Void>;
  loadAllTracks(): CompletableFuture<Void>;
  deletePlayerData(uniqueId: UUID): CompletableFuture<Void>;
  getPlayerUniqueId(username: string): CompletableFuture<UUID>;
  getPlayerName(uniqueId: UUID): CompletableFuture<string>;
}
export class StorageType extends Enum<StorageType> {
  static readonly YAML: StorageType;
  static readonly JSON: StorageType;
  static readonly HOCON: StorageType;
  static readonly TOML: StorageType;
  static readonly YAML_COMBINED: StorageType;
  static readonly JSON_COMBINED: StorageType;
  static readonly HOCON_COMBINED: StorageType;
  static readonly TOML_COMBINED: StorageType;
  static readonly MONGODB: StorageType;
  static readonly MARIADB: StorageType;
  static readonly MYSQL: StorageType;
  static readonly POSTGRESQL: StorageType;
  static readonly SQLITE: StorageType;
  static readonly H2: StorageType;
  static readonly CUSTOM: StorageType;
  static valueOf(name: string): StorageType;
  static values(): StorageType[];
  static parse(name: string, def: StorageType): StorageType;
  getName(): string;
  getIdentifiers(): string[];
}
export class StorageFactory {

}

}
declare module 'me.lucko.luckperms.common.plugin.bootstrap' {
import { Instant } from 'java.time';
import { ClassLoader } from 'java.lang';
import { Optional, Collection, UUID } from 'java.util';
import { InputStream } from 'java.io';
import { CountDownLatch } from 'java.util.concurrent';
import { Path } from 'java.nio.file';
/**
 * A {@link LuckPermsBootstrap} that was bootstrapped by a loader.
*/
export class BootstrappedWithLoader {
  /**
   * Gets the loader object that did the bootstrapping.
   *
   * @return the loader
  */
  getLoader(): any;
}
/**
 * Bootstrap plugin interface
 *
 * Instances of this interface are responsible for loading the
 * "LuckPerms plugin" on their respective platforms.
*/
export class LuckPermsBootstrap {
  /**
   * Returns a countdown latch which {@link CountDownLatch#countDown() counts down}
   * after the plugin has loaded.
   *
   * @return a loading latch
  */
  getLoadLatch(): CountDownLatch;
  /**
   * Returns a countdown latch which {@link CountDownLatch#countDown() counts down}
   * after the plugin has enabled.
   *
   * @return an enable latch
  */
  getEnableLatch(): CountDownLatch;
  /**
   * Gets a string of the plugin's version
   *
   * @return the version of the plugin
  */
  getVersion(): string;
  /**
   * Gets the time when the plugin first started in millis.
   *
   * @return the enable time
  */
  getStartupTime(): Instant;
  /**
   * Gets the name or "brand" of the running platform
   *
   * @return the server brand
  */
  getServerBrand(): string;
  /**
   * Gets the version of the running platform
   *
   * @return the server version
  */
  getServerVersion(): string;
  /**
   * Gets the name associated with this server
   *
   * @return the server name
  */
  getServerName(): string | null;
  /**
   * Gets the plugins main data storage directory
   *
   * Bukkit: ./plugins/LuckPerms
   * BungeeCord: ./plugins/LuckPerms
   * Sponge: ./luckperms/
   * Velocity: ./plugins/luckperms
   * Fabric: ./mods/LuckPerms
   * Forge: ./config/luckperms
   *
   * @return the platforms data folder
  */
  getDataDirectory(): Path;
  /**
   * Gets the plugins configuration directory
   *
   * @return the config directory
  */
  getConfigDirectory(): Path;
  /**
   * Gets a bundled resource file from the jar
   *
   * @param path the path of the file
   * @return the file as an input stream
  */
  getResourceStream(path: string): InputStream;
  /**
   * Gets a player object linked to this User. The returned object must be the same type
   * as the instance used in the platforms ContextManager
   *
   * @param uniqueId the users unique id
   * @return a player object, or null, if one couldn't be found.
  */
  getPlayer(uniqueId: UUID): Optional<any>;
  /**
   * Lookup a uuid from a username, using the servers internal uuid cache.
   *
   * @param username the username to lookup
   * @return an optional uuid, if found
  */
  lookupUniqueId(username: string): Optional<UUID>;
  /**
   * Lookup a username from a uuid, using the servers internal uuid cache.
   *
   * @param uniqueId the uuid to lookup
   * @return an optional username, if found
  */
  lookupUsername(uniqueId: UUID): Optional<string>;
  /**
   * Gets the number of users online on the platform
   *
   * @return the number of users
  */
  getPlayerCount(): number;
  /**
   * Gets the usernames of the users online on the platform
   *
   * @return a {@link List} of usernames
  */
  getPlayerList(): Collection<string>;
  /**
   * Gets the UUIDs of the users online on the platform
   *
   * @return a {@link Set} of UUIDs
  */
  getOnlinePlayers(): Collection<UUID>;
  /**
   * Checks if a user is online
   *
   * @param uniqueId the users external uuid
   * @return true if the user is online
  */
  isPlayerOnline(uniqueId: UUID): boolean;
  /**
   * Attempts to identify the plugin behind the given classloader.
   *
   * Used for giving more helpful log messages when things break.
   *
   * @param classLoader the classloader to identify
   * @return the name of the classloader source
   * @throws Exception anything
  */
  identifyClassLoader(classLoader: ClassLoader): string | null;
}

}
declare module 'me.lucko.luckperms.common.model.PrimaryGroupHolder' {
import { Optional } from 'java.util';
import { PrimaryGroupHolder } from 'me.lucko.luckperms.common.model';
/**
 * Simple implementation which just holds a stored value.
*/
export class Stored extends PrimaryGroupHolder {
  /**
   * Gets the primary group which is stored against the user's data.
   *
   * @return the stored value
  */
  getStoredValue(): Optional<string>;
  /**
   * Sets the primary group which is stored against the user's data.
   *
   * @param value the new stored value
  */
  setStoredValue(storedValue: string);
}
export class AllParentsByWeight {

}
export class ParentsByWeight {

}

}
declare module 'me.lucko.luckperms.common.node' {
import { Enum } from 'java.lang';
export class NodeEquality extends Enum<NodeEquality> {
  static readonly KEY_VALUE_EXPIRY_CONTEXTS: NodeEquality;
  static readonly KEY_EXPIRY_CONTEXTS: NodeEquality;
  static readonly KEY_VALUE_HASEXPIRY_CONTEXTS: NodeEquality;
  static readonly KEY_HASEXPIRY_CONTEXTS: NodeEquality;
  static readonly KEY_CONTEXTS: NodeEquality;
  static readonly KEY: NodeEquality;
  static valueOf(name: string): NodeEquality;
  static values(): NodeEquality[];
  comparesContexts(): boolean;
}

}
declare module 'me.lucko.luckperms.common.locale.TranslationRepository' {
import { Locale, List } from 'java.util';
export class LanguageInfo {
  id(): string;
  name(): string;
  locale(): Locale;
  progress(): number;
  contributors(): string[];
}

}
declare module 'me.lucko.luckperms.common.graph' {
import { Enum, Iterable } from 'java.lang';
/**
 * A set of traversal algorithm implementations for {@link Graph}s.
 *
 * @author Jens Nyman (Guava)
*/
export class TraversalAlgorithm extends Enum<TraversalAlgorithm> {
  /**
   * Traverses in breadth-first order.
   *
   * That is, all the nodes of depth 0 are returned, then depth 1, then 2, and so on.
   *
   * See Wikipedia for more info.
  */
  static readonly BREADTH_FIRST: TraversalAlgorithm;
  /**
   * Traverses in depth-first pre-order.
   *
   * "Pre-order" implies that nodes appear in the order in which they are
   * first visited.
   *
   * See Wikipedia for more info.
  */
  static readonly DEPTH_FIRST_PRE_ORDER: TraversalAlgorithm;
  /**
   * Traverses in depth-first post-order.
   *
   * "Post-order" implies that nodes appear in the order in which they are
   * visited for the last time.
   *
   * See Wikipedia for more info.
  */
  static readonly DEPTH_FIRST_POST_ORDER: TraversalAlgorithm;
  static valueOf(name: string): TraversalAlgorithm;
  static values(): TraversalAlgorithm[];
}
/**
 * A minimal functional interface for graph-structured data.
 *
 * @param  the node parameter type
*/
export class Graph<N> {
  /**
   * Returns all nodes in this graph directly adjacent to `node` which
   * can be reached by traversing `node`'s outgoing edges.
   *
   * @throws IllegalArgumentException if `node` is not an element of this graph
  */
  successors(node: N): Iterable<N>;
}

}
declare module 'me.lucko.luckperms.common.command.access.CommandPermission' {
import { Enum } from 'java.lang';
export class Type extends Enum<Type> {
  static readonly NONE: Type;
  static readonly USER: Type;
  static readonly GROUP: Type;
  static readonly TRACK: Type;
  static readonly LOG: Type;
  static readonly SPONGE: Type;
  static valueOf(name: string): Type;
  static values(): Type[];
  getTag(): string;
}

}
declare module 'me.lucko.luckperms.common.command.access' {
import { Type } from 'me.lucko.luckperms.common.command.access.CommandPermission';
import { Enum } from 'java.lang';
import { Function, BiFunction } from 'java.util.function';
/**
 * An enumeration of the permissions required to execute built in LuckPerms commands.
*/
export class CommandPermission extends Enum<CommandPermission> {
  static readonly SYNC: CommandPermission;
  static readonly INFO: CommandPermission;
  static readonly EDITOR: CommandPermission;
  static readonly VERBOSE: CommandPermission;
  static readonly VERBOSE_COMMAND_OTHERS: CommandPermission;
  static readonly TREE: CommandPermission;
  static readonly SEARCH: CommandPermission;
  static readonly IMPORT: CommandPermission;
  static readonly EXPORT: CommandPermission;
  static readonly RELOAD_CONFIG: CommandPermission;
  static readonly BULK_UPDATE: CommandPermission;
  static readonly APPLY_EDITS: CommandPermission;
  static readonly TRUST_EDITOR: CommandPermission;
  static readonly TRANSLATIONS: CommandPermission;
  static readonly CREATE_GROUP: CommandPermission;
  static readonly DELETE_GROUP: CommandPermission;
  static readonly LIST_GROUPS: CommandPermission;
  static readonly CREATE_TRACK: CommandPermission;
  static readonly DELETE_TRACK: CommandPermission;
  static readonly LIST_TRACKS: CommandPermission;
  static readonly USER_INFO: CommandPermission;
  static readonly USER_PERM_INFO: CommandPermission;
  static readonly USER_PERM_SET: CommandPermission;
  static readonly USER_PERM_UNSET: CommandPermission;
  static readonly USER_PERM_SET_TEMP: CommandPermission;
  static readonly USER_PERM_UNSET_TEMP: CommandPermission;
  static readonly USER_PERM_CHECK: CommandPermission;
  static readonly USER_PERM_CLEAR: CommandPermission;
  static readonly USER_PARENT_INFO: CommandPermission;
  static readonly USER_PARENT_SET: CommandPermission;
  static readonly USER_PARENT_SET_TRACK: CommandPermission;
  static readonly USER_PARENT_ADD: CommandPermission;
  static readonly USER_PARENT_REMOVE: CommandPermission;
  static readonly USER_PARENT_ADD_TEMP: CommandPermission;
  static readonly USER_PARENT_REMOVE_TEMP: CommandPermission;
  static readonly USER_PARENT_CLEAR: CommandPermission;
  static readonly USER_PARENT_CLEAR_TRACK: CommandPermission;
  static readonly USER_PARENT_SWITCHPRIMARYGROUP: CommandPermission;
  static readonly USER_META_INFO: CommandPermission;
  static readonly USER_META_SET: CommandPermission;
  static readonly USER_META_UNSET: CommandPermission;
  static readonly USER_META_SET_TEMP: CommandPermission;
  static readonly USER_META_UNSET_TEMP: CommandPermission;
  static readonly USER_META_ADD_PREFIX: CommandPermission;
  static readonly USER_META_ADD_SUFFIX: CommandPermission;
  static readonly USER_META_SET_PREFIX: CommandPermission;
  static readonly USER_META_SET_SUFFIX: CommandPermission;
  static readonly USER_META_REMOVE_PREFIX: CommandPermission;
  static readonly USER_META_REMOVE_SUFFIX: CommandPermission;
  static readonly USER_META_ADD_TEMP_PREFIX: CommandPermission;
  static readonly USER_META_ADD_TEMP_SUFFIX: CommandPermission;
  static readonly USER_META_SET_TEMP_PREFIX: CommandPermission;
  static readonly USER_META_SET_TEMP_SUFFIX: CommandPermission;
  static readonly USER_META_REMOVE_TEMP_PREFIX: CommandPermission;
  static readonly USER_META_REMOVE_TEMP_SUFFIX: CommandPermission;
  static readonly USER_META_CLEAR: CommandPermission;
  static readonly USER_EDITOR: CommandPermission;
  static readonly USER_SHOW_TRACKS: CommandPermission;
  static readonly USER_PROMOTE: CommandPermission;
  static readonly USER_DEMOTE: CommandPermission;
  static readonly USER_CLEAR: CommandPermission;
  static readonly USER_CLONE: CommandPermission;
  static readonly GROUP_INFO: CommandPermission;
  static readonly GROUP_PERM_INFO: CommandPermission;
  static readonly GROUP_PERM_SET: CommandPermission;
  static readonly GROUP_PERM_UNSET: CommandPermission;
  static readonly GROUP_PERM_SET_TEMP: CommandPermission;
  static readonly GROUP_PERM_UNSET_TEMP: CommandPermission;
  static readonly GROUP_PERM_CHECK: CommandPermission;
  static readonly GROUP_PERM_CLEAR: CommandPermission;
  static readonly GROUP_PARENT_INFO: CommandPermission;
  static readonly GROUP_PARENT_SET: CommandPermission;
  static readonly GROUP_PARENT_SET_TRACK: CommandPermission;
  static readonly GROUP_PARENT_ADD: CommandPermission;
  static readonly GROUP_PARENT_REMOVE: CommandPermission;
  static readonly GROUP_PARENT_ADD_TEMP: CommandPermission;
  static readonly GROUP_PARENT_REMOVE_TEMP: CommandPermission;
  static readonly GROUP_PARENT_CLEAR: CommandPermission;
  static readonly GROUP_PARENT_CLEAR_TRACK: CommandPermission;
  static readonly GROUP_META_INFO: CommandPermission;
  static readonly GROUP_META_SET: CommandPermission;
  static readonly GROUP_META_UNSET: CommandPermission;
  static readonly GROUP_META_SET_TEMP: CommandPermission;
  static readonly GROUP_META_UNSET_TEMP: CommandPermission;
  static readonly GROUP_META_ADD_PREFIX: CommandPermission;
  static readonly GROUP_META_ADD_SUFFIX: CommandPermission;
  static readonly GROUP_META_SET_PREFIX: CommandPermission;
  static readonly GROUP_META_SET_SUFFIX: CommandPermission;
  static readonly GROUP_META_REMOVE_PREFIX: CommandPermission;
  static readonly GROUP_META_REMOVE_SUFFIX: CommandPermission;
  static readonly GROUP_META_ADD_TEMP_PREFIX: CommandPermission;
  static readonly GROUP_META_ADD_TEMP_SUFFIX: CommandPermission;
  static readonly GROUP_META_SET_TEMP_PREFIX: CommandPermission;
  static readonly GROUP_META_SET_TEMP_SUFFIX: CommandPermission;
  static readonly GROUP_META_REMOVE_TEMP_PREFIX: CommandPermission;
  static readonly GROUP_META_REMOVE_TEMP_SUFFIX: CommandPermission;
  static readonly GROUP_META_CLEAR: CommandPermission;
  static readonly GROUP_EDITOR: CommandPermission;
  static readonly GROUP_LIST_MEMBERS: CommandPermission;
  static readonly GROUP_SHOW_TRACKS: CommandPermission;
  static readonly GROUP_SET_WEIGHT: CommandPermission;
  static readonly GROUP_SET_DISPLAY_NAME: CommandPermission;
  static readonly GROUP_CLEAR: CommandPermission;
  static readonly GROUP_RENAME: CommandPermission;
  static readonly GROUP_CLONE: CommandPermission;
  static readonly TRACK_INFO: CommandPermission;
  static readonly TRACK_EDITOR: CommandPermission;
  static readonly TRACK_APPEND: CommandPermission;
  static readonly TRACK_INSERT: CommandPermission;
  static readonly TRACK_REMOVE: CommandPermission;
  static readonly TRACK_CLEAR: CommandPermission;
  static readonly TRACK_RENAME: CommandPermission;
  static readonly TRACK_CLONE: CommandPermission;
  static readonly LOG_RECENT: CommandPermission;
  static readonly LOG_USER_HISTORY: CommandPermission;
  static readonly LOG_GROUP_HISTORY: CommandPermission;
  static readonly LOG_TRACK_HISTORY: CommandPermission;
  static readonly LOG_SEARCH: CommandPermission;
  static readonly LOG_NOTIFY: CommandPermission;
  static readonly SPONGE_PERMISSION_INFO: CommandPermission;
  static readonly SPONGE_PERMISSION_SET: CommandPermission;
  static readonly SPONGE_PERMISSION_CLEAR: CommandPermission;
  static readonly SPONGE_PARENT_INFO: CommandPermission;
  static readonly SPONGE_PARENT_ADD: CommandPermission;
  static readonly SPONGE_PARENT_REMOVE: CommandPermission;
  static readonly SPONGE_PARENT_CLEAR: CommandPermission;
  static readonly SPONGE_OPTION_INFO: CommandPermission;
  static readonly SPONGE_OPTION_SET: CommandPermission;
  static readonly SPONGE_OPTION_UNSET: CommandPermission;
  static readonly SPONGE_OPTION_CLEAR: CommandPermission;
  static valueOf(name: string): CommandPermission;
  static values(): CommandPermission[];
  static readonly ROOT: string;
  getNode(): string;
  getPermission(): string;
  getType(): Type;
}
/**
 * Implements argument based permission checks for use in command implementations.
*/
export class ArgumentPermissions {

}

}
declare module 'me.lucko.luckperms.common.storage.implementation.file' {
import { UUID } from 'java.util';
import { Enum, Throwable } from 'java.lang';
import { IOException } from 'java.io';
import { SaveBuffer } from 'me.lucko.luckperms.common.storage.implementation.file.FileActionLogger';
import { LookupMap } from 'me.lucko.luckperms.common.storage.implementation.file.FileUuidCache';
import { Path } from 'java.nio.file';
import { ReentrantLock } from 'java.util.concurrent.locks';
export class StorageLocation extends Enum<StorageLocation> {
  static readonly USERS: StorageLocation;
  static readonly GROUPS: StorageLocation;
  static readonly TRACKS: StorageLocation;
  static valueOf(name: string): StorageLocation;
  static values(): StorageLocation[];
}
export class FileActionLogger {
  init(contentFile: Path, legacyFile: Path): void;
  flush(): void;
}
export class FileIOException extends IOException {
  constructor(fileName: string, cause: Throwable);
}
export class FileUuidCache {
  /**
   * Removes a mapping from the cache
   *
   * @param uuid the uuid of the player to remove
  */
  removeMapping(uuid: UUID): void;
  /**
   * Gets the most recent uuid which connected with the given username, or null
   *
   * @param username the username to lookup with
   * @return a uuid, or null
  */
  lookupUuid(username: string): UUID | null;
  /**
   * Gets the most recent username used by a given uuid
   *
   * @param uuid the uuid to lookup with
   * @return a username, or null
  */
  lookupUsername(uuid: UUID): string;
  load(file: Path): void;
  save(file: Path): void;
}

}
declare module 'me.lucko.luckperms.common.storage.implementation.sql' {
import { List } from 'java.util';
import { InputStream } from 'java.io';
export class SchemaReader {
  static getStatements(is: InputStream): string[];
}
export class SqlRowId {
  constructor(rowId: number);
  getRowId(): number;
  equals(o: any): boolean;
  hashCode(): number;
  toString(): string;
}

}
declare module 'me.lucko.luckperms.common.model.manager' {
import { Collection, Map } from 'java.util';
import { Function } from 'java.util.function';
/**
 * A class which manages instances of a class
 *
 * @param  the class used to identify each object held in this manager
 * @param  the super class being managed
 * @param  the implementation class this manager is "managing"
*/
export class Manager<I, C, T> extends Function<I, T> {
  /**
   * Gets a map containing all cached instances held by this manager.
   *
   * @return all instances held in this manager
  */
  getAll(): Map<I, T>;
  /**
   * Gets or creates an object by id
   *
   * Should only every be called by the storage implementation.
   *
   * @param id The id to search by
   * @return a {@link T} object if the object is loaded or makes and returns a new object
  */
  getOrMake(id: I): T;
  /**
   * Get an object by id
   *
   * @param id The id to search by
   * @return a {@link T} object if the object is loaded, returns null if the object is not loaded
  */
  getIfLoaded(id: I): T;
  /**
   * Check to see if a object is loaded or not
   *
   * @param id The id of the object
   * @return true if the object is loaded
  */
  isLoaded(id: I): boolean;
  /**
   * Removes and unloads the object from the manager
   *
   * @param id The object id to unload
  */
  unload(id: I): void;
  /**
   * Calls {@link #unload(Object)} for all objects currently
   * loaded not in the given collection of ids.
   *
   * @param ids the ids to retain
  */
  retainAll(ids: Collection<I>): void;
}

}
declare module 'me.lucko.luckperms.common.cache.PatternCache' {
import { Pattern, PatternSyntaxException } from 'java.util.regex';
export class CachedPattern {
  getPattern(): Pattern | null;
  getException(): PatternSyntaxException | null;
}

}
declare module 'me.lucko.luckperms.common.loader' {
import { RuntimeException, Throwable, ClassLoader } from 'java.lang';
import { URLClassLoader, URL } from 'java.net';
/**
 * Classloader that can load a jar from within another jar file.
 *
 * The "loader" jar contains the loading code & public API classes,
 * and is class-loaded by the platform.
 *
 * The inner "plugin" jar contains the plugin itself, and is class-loaded
 * by the loading code & this classloader.
*/
export class JarInJarClassLoader extends URLClassLoader {
  /**
   * Creates a new jar-in-jar class loader.
   *
   * @param loaderClassLoader the loader plugin's classloader (setup and created by the platform)
   * @param jarResourcePath the path to the jar-in-jar resource within the loader jar
   * @throws LoadingException if something unexpectedly bad happens
  */
  constructor(loaderClassLoader: ClassLoader, jarResourcePath: string);
  addJarToClasspath(url: URL): void;
  deleteJarResource(): void;
}
/**
 * Runtime exception used if there is a problem during loading
*/
export class LoadingException extends RuntimeException {
  constructor(message: string);
  constructor(message: string, cause: Throwable);
}
/**
 * Minimal bootstrap plugin, called by the loader plugin.
*/
export class LoaderBootstrap {
  onLoad(): void;
  onEnable(): void;
  onDisable(): void;
}

}
declare module 'me.lucko.luckperms.common.util' {
import { LinkedHashSet, Set, Collection, List, UUID, Map } from 'java.util';
import { CompletableFuture, Executor, TimeUnit, ForkJoinPool } from 'java.util.concurrent';
import { Stream } from 'java.util.stream';
import { ChronoUnit } from 'java.time.temporal';
import { Path } from 'java.nio.file';
import { EmptyList, EmptySet, EmptyMap } from 'me.lucko.luckperms.common.util.EmptyCollections';
import { Entry } from 'me.lucko.luckperms.common.util.Paginated';
import { Duration } from 'java.time';
import { Enum, Iterable, StackTraceElement, Class, Void } from 'java.lang';
import { Builder } from 'me.lucko.luckperms.common.util.StackTracePrinter';
import { Pattern } from 'java.util.regex';
import { Function, Consumer, Predicate } from 'java.util.function';
import { ChangeType, Change } from 'me.lucko.luckperms.common.util.Difference';
/**
 * Empty collections that do not throw {@link UnsupportedOperationException} on mutate operations.
*/
export class EmptyCollections {
  static list<E>(): E[];
  static set<E>(): Set<E>;
  static map<K, V>(): Map<K, V>;
}
/**
 * A simple pagination utility
 *
 * @param  the element type
*/
export class Paginated<T> {
  constructor(content: Collection<T>);
  getContent(): T[];
  getMaxPages(entriesPerPage: number): number;
  getPage(pageNo: number, pageSize: number): Entry<T>[];
}
export class Throwing {

}
/**
 * Records a log of the changes that occur as a result
 * of mutations (add or remove operations).
 *
 * @param  the value type
*/
export class Difference<T> {
  /**
   * Gets the recorded changes.
   *
   * @return the changes
  */
  getChanges(): Set<Change<T>>;
  /**
   * Gets if no changes have been recorded.
   *
   * @return if no changes have been recorded
  */
  isEmpty(): boolean;
  /**
   * Gets the recorded changes of a given type
   *
   * @param type the type of change
   * @return the changes
  */
  getChanges(type: ChangeType): Set<T>;
  /**
   * Gets the values that have been added.
   *
   * @return the added values
  */
  getAdded(): Set<T>;
  /**
   * Gets the values that have been removed.
   *
   * @return the removed values
  */
  getRemoved(): Set<T>;
  /**
   * Clears all recorded changes.
  */
  clear(): void;
  /**
   * Records a change.
   *
   * @param type the type of change
   * @param value the changed value
  */
  recordChange(type: ChangeType, value: T): void;
  /**
   * Records some changes.
   *
   * @param type the type of change
   * @param values the changed values
  */
  recordChanges(type: ChangeType, values: Iterable<T>): void;
  /**
   * Merges the recorded differences in `other` into this.
   *
   * @param other the other differences
   * @return this
  */
  mergeFrom(other: Difference<T>): Difference<T>;
  toString(): string;
}
export class MoreFiles {
  static createFileIfNotExists(path: Path): Path;
  static createDirectoryIfNotExists(path: Path): Path;
  static createDirectoriesIfNotExists(path: Path): Path;
  static deleteDirectory(path: Path): void;
}
export class Iterators {
  static tryIterate<I, O>(iterable: Iterable<I>, mapping: Function<I, O>, action: Consumer<O>): boolean;
  static tryIterate<E>(array: E[], action: Consumer<E>): boolean;
  static tryIterate<I, O>(array: I[], mapping: Function<I, O>, action: Consumer<O>): boolean;
  static divideIterable<E>(source: Iterable<E>, size: number): E[][];
}
/**
 * Encapsulates the type of a players unique id.
*/
export class UniqueIdType {
  static readonly AUTHENTICATED: UniqueIdType;
  static readonly UNAUTHENTICATED: UniqueIdType;
  static readonly NPC: UniqueIdType;
  static readonly UNKNOWN: UniqueIdType;
  getType(): string;
}
export class ImmutableCollectors {

}
/**
 * Small utility to cache custom name lookups for enum values.
 *
 * @param  the enum type
*/
export class EnumNamer<E> {
  static readonly LOWER_CASE_NAME: Function<Enum<any>, string>;
  constructor(enumClass: Class<E>, definedNames: Map<any, string>, namingFunction: Function<any, string>);
  constructor(enumClass: Class<E>, namingFunction: Function<any, string>);
  name(value: E): string;
}
export class StackTracePrinter {
  static elementToString(consumer: Consumer<string>): Consumer<StackTraceElement>;
  static builder(): Builder;
  process(stackTrace: StackTraceElement[], consumer: Consumer<StackTraceElement>): number;
  toBuilder(): Builder;
}
export class EnumNamerTest {

}
/**
 * A collection of predicate utilities used mostly in command classes
*/
export class Predicates {
  static alwaysFalse<T>(): Predicate<T>;
  static alwaysTrue<T>(): Predicate<T>;
  static notInRange(start: number, end: number): Predicate<number>;
  static inRange(start: number, end: number): Predicate<number>;
  static not<T>(t: T): Predicate<T>;
  static is<T>(t: T): Predicate<T>;
  static startsWithIgnoreCase(prefix: string): Predicate<string>;
  static containsIgnoreCase(substring: string): Predicate<string>;
}
/**
 * Parses durations from a string format
*/
export class DurationParser {
  static parseDuration(input: string): Duration;
}
export class CaffeineFactory {
  static executor(): Executor;
}
export class IteratorsTest {

}
export class DurationParserTest {

}
/**
 * A simple expiring set implementation using Caffeine caches
 *
 * @param  element type
*/
export class ExpiringSet<E> {
  constructor(duration: number, unit: TimeUnit);
  add(item: E): boolean;
  contains(item: E): boolean;
  remove(item: E): void;
}
/**
 * Utilities for working with {@link UUID}s.
*/
export class Uuids {
  static readonly PREDICATE: Predicate<string>;
  static fromString(s: string): UUID | null;
  static parse(s: string): UUID | null;
}
/**
 * Formats durations to a readable form
*/
export class DurationFormatter {
  static readonly LONG: DurationFormatter;
  static readonly CONCISE: DurationFormatter;
  static readonly CONCISE_LOW_ACCURACY: DurationFormatter;
  constructor(concise: boolean);
  constructor(concise: boolean, accuracy: number);
  /**
   * Formats `duration` as a string.
   *
   * @param duration the duration
   * @return the formatted string
  */
  formatString(duration: Duration): string;
}
export class PaginatedTest {

}
export class CompletableFutures {
  static allOf(futures: Stream<CompletableFuture<any>>): CompletableFuture<Void>;
  static allOf(futures: Collection<CompletableFuture<any>>): CompletableFuture<Void>;
}

}
declare module 'me.lucko.luckperms.common.model.manager.user.UserHousekeeper' {
import { TimeUnit } from 'java.util.concurrent';
export class TimeoutSettings {

}

}
declare module 'me.lucko.luckperms.common.plugin.util' {
import { Set, UUID } from 'java.util';
/**
 * Abstract listener utility for handling new player connections
*/
export class AbstractConnectionListener {
  /**
   * Gets the unique players which have connected to the server since it started.
   *
   * @return the unique connections
  */
  getUniqueConnections(): Set<UUID>;
  handleDisconnect(uniqueId: UUID): void;
}

}
declare module 'me.lucko.luckperms.common.config.generic.KeyedConfiguration' {
export class ValuesMap {
  constructor(size: number);
}

}
declare module 'me.lucko.luckperms.common.http' {
import { Exception } from 'java.lang';
export class UnsuccessfulRequestException extends Exception {

}
export class AbstractHttpClient {

}

}
declare module 'me.lucko.luckperms.common.sender' {
import { UUID } from 'java.util';
/**
 * Wrapper interface to represent a CommandSender/CommandSource within the common command implementations.
*/
export class Sender {
  static readonly CONSOLE_UUID: UUID;
  /**
   The name used by the console sender. 
  */
  static readonly CONSOLE_NAME: string;
  /**
   * Gets the sender's username
   *
   * @return a friendly username for the sender
  */
  getName(): string;
  /**
   * Gets a string representing the senders username, and their current location
   * within the network.
   *
   * @return a friendly identifier for the sender
  */
  getNameWithLocation(): string;
  /**
   * Gets the sender's unique id.
   *
   * See {@link #CONSOLE_UUID} for the console's UUID representation.
   *
   * @return the sender's uuid
  */
  getUniqueId(): UUID;
  /**
   * Check if the Sender has a permission.
   *
   * @param permission the permission to check for
   * @return true if the sender has the permission
  */
  hasPermission(permission: string): boolean;
  /**
   * Makes the sender perform a command.
   *
   * @param commandLine the command
  */
  performCommand(commandLine: string): void;
  /**
   * Gets whether this sender is the console
   *
   * @return if the sender is the console
  */
  isConsole(): boolean;
  /**
   * Gets whether this sender is still valid & receiving messages.
   *
   * @return if this sender is valid
  */
  isValid(): boolean;
}

}
declare module 'me.lucko.luckperms.common.dependencies.relocation' {
import { Constructor, Method } from 'java.lang.reflect';
/**
 * Handles class runtime relocation of packages in downloaded dependencies
*/
export class RelocationHandler {

}
export class RelocationHelper {
  static readonly OKIO_STRING: string;
  static readonly OKHTTP3_STRING: string;
}
export class Relocation {
  static of(id: string, pattern: string): Relocation;
  getPattern(): string;
  getRelocatedPattern(): string;
  equals(o: any): boolean;
  hashCode(): number;
}

}
declare module 'me.lucko.luckperms.common.treeview' {
import { Optional, List, Map, Queue } from 'java.util';
import { Comparable, AutoCloseable } from 'java.lang';
import { SimpleDateFormat } from 'java.text';
import { Stream } from 'java.util.stream';
import { Entry } from 'java.util.Map';
/**
 * A readable view of a branch of {@link TreeNode}s.
*/
export class TreeView {
  /**
   * Gets if this TreeView has any content.
   *
   * @return true if the treeview has data
  */
  hasData(): boolean;
}
/**
 * An immutable and sorted version of TreeNode
 *
 * Entries in the children map are sorted first by whether they have
 * any children, and then alphabetically
*/
export class ImmutableTreeNode extends Comparable<ImmutableTreeNode> {
  constructor(children: Stream<Entry<string, ImmutableTreeNode>>);
  getChildren(): Optional<Map<string, ImmutableTreeNode>>;
  /**
   * Gets the node endings of each branch of the tree at this stage
   *
   * The key represents the depth of the node.
   *
   * @return the node endings
  */
  getNodeEndings(): Entry<number, string>[];
  compareTo(o: ImmutableTreeNode): number;
}
/**
 * Represents one "branch" or "level" of the node tree
*/
export class TreeNode {
  constructor();
  tryInsert(s: string): TreeNode | null;
  getChildren(): Optional<Map<string, TreeNode>>;
  getChildrenSize(): number;
}
/**
 * Stores a collection of all permissions known to the platform.
*/
export class PermissionRegistry extends AutoCloseable {
  rootAsList(): string[];
  offer(permission: string): void;
  close(): void;
  insert(permission: string): void;
}

}
declare module 'me.lucko.luckperms.common.cache' {
import { Optional, Map } from 'java.util';
import { Pattern } from 'java.util.regex';
import { CachedPattern } from 'me.lucko.luckperms.common.cache.PatternCache';
import { CompletableFuture, TimeUnit } from 'java.util.concurrent';
import { Supplier } from 'java.util.function';
import { Processor } from 'me.lucko.luckperms.common.cache.BufferedRequest';
/**
 * Simple one element cache implementation.
 *
 * @param  the type being stored
*/
export class Cache<T> {
  get(): T;
  getIfPresent(): Optional<T>;
  invalidate(): void;
}
/**
 * Thread-safe request buffer.
 *
 * Waits for the buffer time to pass before performing the operation.
 * If the request is called again in that time, the buffer time is reset.
 *
 * @param  the return type
*/
export class BufferedRequest<T> {
  /**
   * Makes a request to the buffer
   *
   * @return the future
  */
  request(): CompletableFuture<T>;
  /**
   * Requests the value, bypassing the buffer
   *
   * @return the value
  */
  requestDirectly(): T;
}
export class PatternCache {
  static lookup(regex: string): CachedPattern;
  static compile(regex: string): Pattern;
}
/**
 * An expiring supplier extension.
 *
 * The delegate supplier is only called on executions of {@link #get()} if the
 * result isn't already calculated.
 *
 * @param  the supplied type
*/
export class ExpiringCache<T> extends Supplier<T> {
  get(): T;
  invalidate(): void;
}

}
declare module 'me.lucko.luckperms.common.cacheddata' {
/**
 * Metadata about a given {@link CachedData}.
*/
export class CacheMetadata {

}
export class UsageTracked {
  recordUsage(): void;
  usedSince(duration: number): boolean;
}

}
