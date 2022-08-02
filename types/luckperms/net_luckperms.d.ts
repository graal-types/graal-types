declare module 'net.luckperms.api.node.types.PrefixNode' {
import { Builder as net_luckperms_api_node_types_ChatMetaNode_Builder } from 'net.luckperms.api.node.types.ChatMetaNode';
import { PrefixNode } from 'net.luckperms.api.node.types';
/**
 * A {@link PrefixNode} builder.
*/
export class Builder extends net_luckperms_api_node_types_ChatMetaNode_Builder<PrefixNode, Builder> {
  /**
   * Sets the prefix.
   *
   * @param prefix the prefix
   * @return the builder
  */
  prefix(prefix: string): Builder;
}

}
declare module 'net.luckperms.api.messaging' {
import { User } from 'net.luckperms.api.model.user';
/**
 * A means to push changes to other servers using the platforms networking
*/
export class MessagingService {
  /**
   * Gets the name of this messaging service
   *
   * @return the name of this messaging service
  */
  getName(): string;
  /**
   * Uses the messaging service to inform other servers about a general
   * change.
   *
   * The standard response by other servers will be to execute a overall
   * sync of all live data, equivalent to calling
   * {@link LuckPerms#runUpdateTask()}.
   *
   * This will push the update asynchronously, and this method will return
   * immediately. Note that this method will not cause an update to be
   * processed on the local server.
  */
  pushUpdate(): void;
  /**
   * Uses the messaging service to inform other servers about a change to a
   * specific user.
   *
   * The standard response by other servers is undefined, however the
   * current implementation will reload the corresponding users data if they
   * are online.
   *
   * This will push the update asynchronously, and this method will return
   * immediately. Note that this method will not cause an update to be
   * processed on the local server.
   *
   * @param user the user to push the update for
  */
  pushUserUpdate(user: User): void;
}

}
declare module 'net.luckperms.api.node.types.DisplayNameNode' {
import { NodeBuilder } from 'net.luckperms.api.node';
import { DisplayNameNode } from 'net.luckperms.api.node.types';
/**
 * A {@link DisplayNameNode} builder.
*/
export class Builder extends NodeBuilder<DisplayNameNode, Builder> {
  /**
   * Sets the display name.
   *
   * @param displayName the display name
   * @return the builder
  */
  displayName(displayName: string): Builder;
}

}
declare module 'net.luckperms.api.event.sync' {
import { LuckPermsEvent } from 'net.luckperms.api.event';
import { UUID } from 'java.util';
import { Cancellable } from 'net.luckperms.api.event.type';
/**
 * Called before a sync task runs
*/
export class PreSyncEvent extends LuckPermsEvent {

}
export interface PreSyncEvent extends LuckPermsEvent, Cancellable {}
/**
 * Called when the configuration is reloaded
*/
export class ConfigReloadEvent extends LuckPermsEvent {

}
/**
 * Called when an sync task has been completed
*/
export class PostSyncEvent extends LuckPermsEvent {

}
/**
 * Called before a received network sync task runs
*/
export class PreNetworkSyncEvent extends LuckPermsEvent {
  /**
   * Gets the ID of the sync request
   *
   * @return the id of the sync request
  */
  getSyncId(): UUID;
}
export interface PreNetworkSyncEvent extends LuckPermsEvent, Cancellable {}

}
declare module 'net.luckperms.api.event.source' {
import { Type } from 'net.luckperms.api.event.source.Source';
import { PlatformEntity } from 'net.luckperms.api.platform';
/**
 * Represents an {@link PlatformEntity} which was the {@link Source} of something.
*/
export class EntitySource extends Source {
  /**
   * Gets the entity.
   *
   * @return the entity
  */
  getEntity(): PlatformEntity;
}
/**
 * Represents the source of an event.
 *
 * Could also be described as the "thing" that caused an event to occur.
*/
export class Source {
  /**
   * Gets the source type
   *
   * @return the type
  */
  getType(): Type;
}

}
declare module 'net.luckperms.api.event.log.LogNotifyEvent' {
import { Enum } from 'java.lang';
/**
 * Represents where a log entry is from
*/
export class Origin extends Enum<Origin> {
  /**
   * Marks a log entry which originated from the current server instance
  */
  static readonly LOCAL: Origin;
  /**
   * Marks a log entry which originated from an API call on the current server instance
  */
  static readonly LOCAL_API: Origin;
  /**
   * Marks a log entry which was sent to this server via the messaging service
  */
  static readonly REMOTE: Origin;
  static valueOf(name: string): Origin;
  static values(): Origin[];
}

}
declare module 'net.luckperms.api.event.track' {
import { LuckPermsEvent } from 'net.luckperms.api.event';
import { List } from 'java.util';
import { CreationCause, DeletionCause } from 'net.luckperms.api.event.cause';
import { Track } from 'net.luckperms.api.track';
/**
 * Called when a track is created
*/
export class TrackCreateEvent extends LuckPermsEvent {
  /**
   * Gets the new track
   *
   * @return the new track
  */
  getTrack(): Track;
  /**
   * Gets the cause of the creation
   *
   * @return the cause of the creation
  */
  getCause(): CreationCause;
}
/**
 * Called when a track is loaded into memory from the storage.
 *
 * Note that this event is not the same as {@link TrackCreateEvent}
*/
export class TrackLoadEvent extends LuckPermsEvent {
  /**
   * Gets the track that was loaded
   *
   * @return the track that was loaded
  */
  getTrack(): Track;
}
/**
 * Called when a track is deleted
*/
export class TrackDeleteEvent extends LuckPermsEvent {
  /**
   * Gets the name of the deleted track
   *
   * @return the name of the deleted track
  */
  getTrackName(): string;
  /**
   * Gets an immutable copy of the tracks existing data
   *
   * @return a copy of the tracks existing data
  */
  getExistingData(): string[];
  /**
   * Gets the cause of the deletion
   *
   * @return the cause of the deletion
  */
  getCause(): DeletionCause;
}
/**
 * Called when all tracks have been loaded in from storage.
 *
 * Usually only called on startup and in sync tasks.
*/
export class TrackLoadAllEvent extends LuckPermsEvent {

}

}
declare module 'net.luckperms.api.actionlog.Action.Target' {
import { Enum } from 'java.lang';
/**
 * Represents the type of a {@link Target}.
*/
export class Type extends Enum<Type> {
  static readonly USER: Type;
  static readonly GROUP: Type;
  static readonly TRACK: Type;
  static valueOf(name: string): Type;
  static values(): Type[];
}

}
declare module 'net.luckperms.api.model.data' {
import { WithMergedNode } from 'net.luckperms.api.model.data.DataMutateResult';
import { Node, NodeEqualityPredicate } from 'net.luckperms.api.node';
import { Enum } from 'java.lang';
import { Collection, Map } from 'java.util';
import { ContextSet, ImmutableContextSet } from 'net.luckperms.api.context';
import { Tristate } from 'net.luckperms.api.util';
import { Predicate } from 'java.util.function';
/**
 * Represents the result of a data mutation call on a LuckPerms object.
 *
 * Usually as the result to a call on a {@link PermissionHolder} or {@link Track}.
*/
export class DataMutateResult extends Enum<DataMutateResult> {
  /**
   * Indicates the mutation was a success
  */
  static readonly SUCCESS: DataMutateResult;
  /**
   * Indicates the mutation failed
  */
  static readonly FAIL: DataMutateResult;
  /**
   * Indicates the mutation failed because the subject of the action already has something
  */
  static readonly FAIL_ALREADY_HAS: DataMutateResult;
  /**
   * Indicates the mutation failed because the subject of the action lacks something
  */
  static readonly FAIL_LACKS: DataMutateResult;
  static valueOf(name: string): DataMutateResult;
  static values(): DataMutateResult[];
  wasSuccessful(): boolean;
}
/**
 * Controls how the implementation should behave when new temporary nodes are set
 * that would otherwise conflict with existing entries.
 *
 * The default behaviour of {@link NodeMap#add(Node)} is
 * to return a result of {@link DataMutateResult#FAIL_ALREADY_HAS} when an equivalent
 * node is found. This can be replicated using {@link #NONE}.
 *
 * However, the {@link NodeMap#add(Node, TemporaryNodeMergeStrategy)}
 * method allows this behaviour to be customized for temporary permissions.
*/
export class TemporaryNodeMergeStrategy extends Enum<TemporaryNodeMergeStrategy> {
  /**
   * Expiry durations will be added to the existing expiry time of a permission.
  */
  static readonly ADD_NEW_DURATION_TO_EXISTING: TemporaryNodeMergeStrategy;
  /**
   * Expiry durations will be replaced if the new duration is longer than the current one.
  */
  static readonly REPLACE_EXISTING_IF_DURATION_LONGER: TemporaryNodeMergeStrategy;
  /**
   * The operation will fail if an existing temporary node is present.
  */
  static readonly NONE: TemporaryNodeMergeStrategy;
  static valueOf(name: string): TemporaryNodeMergeStrategy;
  static values(): TemporaryNodeMergeStrategy[];
}
/**
 * Encapsulates a store of data ({@link Node}s) within a {@link PermissionHolder}.
 *
 * The effect of any mutate operation will not persist in storage unless changes are
 * explicitly saved. If changes are not saved, the effect will only be observed until the next
 * time the holders permission data is (re)loaded. Changes to {@link User}s should be saved
 * using {@link UserManager#saveUser(User)}, and changes to {@link Group}s should be saved
 * using {@link GroupManager#saveGroup(Group)}.
 *
 * Before making changes to a user or group, it may be a good idea to load a fresh copy of
 * the backing data from the storage if you haven't done so already, to avoid overwriting changes
 * made already. This can be done via {@link UserManager#loadUser(UUID)} or
 * {@link GroupManager#loadGroup(String)} respectively.
*/
export class NodeMap {
  /**
   * Gets a map of the {@link Node}s contained within this instance,
   * mapped to their defined {@link Node#getContexts() context}.
   *
   * @return a map of nodes
  */
  toMap(): Map<ImmutableContextSet, Collection<Node>>;
  /**
   * Gets a flattened view of {@link Node}s contained within this instance.
   *
   * Effectively combines the value collections of the map returned by
   * {@link #toMap()}.
   *
   * @return a flattened collection of nodes
  */
  toCollection(): Collection<Node>;
  /**
   * Gets if this instance contains a given {@link Node}.
   *
   * Returns {@link Tristate#UNDEFINED} if the instance does not contain the node,
   * and the {@link Node#getValue() assigned value} of the node as a {@link Tristate}
   * if it is present.
   *
   * @param node              the node to check for
   * @param equalityPredicate how to determine if a node matches
   * @return a Tristate relating to the assigned state of the node
   * @throws NullPointerException if the node is null
  */
  contains(node: Node, equalityPredicate: NodeEqualityPredicate): Tristate;
  /**
   * Adds a node.
   *
   * @param node the node to be add
   * @return the result of the operation
  */
  add(node: Node): DataMutateResult;
  /**
   * Adds a node.
   *
   * @param node the node to add
   * @param temporaryNodeMergeStrategy the strategy used to merge temporary permission entries
   * @return the result of the operation
  */
  add(node: Node, temporaryNodeMergeStrategy: TemporaryNodeMergeStrategy): WithMergedNode;
  /**
   * Removes a node.
   *
   * @param node the node to remove
   * @return the result of the operation
  */
  remove(node: Node): DataMutateResult;
  /**
   * Clears all nodes.
  */
  clear(): void;
  /**
   * Clears any nodes which pass the predicate.
   *
   * @param test the predicate to test for nodes which should be removed
  */
  clear(test: Predicate<any>): void;
  /**
   * Clears all nodes in a specific context.
   *
   * @param contextSet the contexts to filter by
  */
  clear(contextSet: ContextSet): void;
  /**
   * Clears all nodes in a specific context which pass the predicate.
   *
   * @param contextSet the contexts to filter by
   * @param test the predicate to test for nodes which should be removed
  */
  clear(contextSet: ContextSet, test: Predicate<any>): void;
}
/**
 * Represents a type of data.
*/
export class DataType extends Enum<DataType> {
  /**
   * Normal data.
  */
  static readonly NORMAL: DataType;
  /**
   * Data which expires automatically at the end of a session.
   * (when a user logs off)
   *
   * This data is never saved to the backend storage provider.
  */
  static readonly TRANSIENT: DataType;
  static valueOf(name: string): DataType;
  static values(): DataType[];
}

}
declare module 'net.luckperms.api.messenger.message.type' {
import { UUID } from 'java.util';
import { Action } from 'net.luckperms.api.actionlog';
import { Message } from 'net.luckperms.api.messenger.message';
/**
 * Represents an "update" message.
 *
 * Used to notify other servers of general changes.
*/
export class UpdateMessage extends Message {

}
/**
 * Represents an "user update" message.
 *
 * Used to notify other servers of a change to a specific user.
*/
export class UserUpdateMessage extends Message {
  /**
   * Gets the user the message is for.
   *
   * @return the user
  */
  getUserUniqueId(): UUID;
}
/**
 * Represents an "action log" message.
 *
 * Used to dispatch live action log updates to other servers.
*/
export class ActionLogMessage extends Message {
  /**
   * Gets the action being sent
   *
   * @return the action
  */
  getAction(): Action;
}

}
declare module 'net.luckperms.api.event.cause' {
import { Enum } from 'java.lang';
/**
 * The cause of a group/track deletion
*/
export class DeletionCause extends Enum<DeletionCause> {
  /**
   * The deletion was caused by a command
  */
  static readonly COMMAND: DeletionCause;
  /**
   * The deletion was caused by the web editor
   * @since 5.3
  */
  static readonly WEB_EDITOR: DeletionCause;
  /**
   * The deletion was caused by an API call
  */
  static readonly API: DeletionCause;
  /**
   * The deletion was caused by a LuckPerms internal
  */
  static readonly INTERNAL: DeletionCause;
  static valueOf(name: string): DeletionCause;
  static values(): DeletionCause[];
}
/**
 * The cause of a group/track creation
*/
export class CreationCause extends Enum<CreationCause> {
  /**
   * The creation was caused by a command
  */
  static readonly COMMAND: CreationCause;
  /**
   * The creation was caused by the web editor
  */
  static readonly WEB_EDITOR: CreationCause;
  /**
   * The creation was caused by an API call
  */
  static readonly API: CreationCause;
  /**
   * The creation was caused by a LuckPerms internal
  */
  static readonly INTERNAL: CreationCause;
  static valueOf(name: string): CreationCause;
  static values(): CreationCause[];
}

}
declare module 'net.luckperms.api.event.player' {
import { PlayerSaveResult } from 'net.luckperms.api.model';
import { LuckPermsEvent } from 'net.luckperms.api.event';
import { UUID } from 'java.util';
import { Result } from 'net.luckperms.api.util';
import { User } from 'net.luckperms.api.model.user';
/**
 * Called when player data is saved to the storage.
 *
 * Data can be saved using {@link UserManager#savePlayerData(UUID, String)}.
*/
export class PlayerDataSaveEvent extends LuckPermsEvent {
  /**
   * Gets the unique ID that was saved.
   *
   * @return the uuid
  */
  getUniqueId(): UUID;
  /**
   * Gets the username that was saved.
   *
   * @return the username
  */
  getUsername(): string;
  /**
   * Gets the result of the operation.
   *
   * @return the result
  */
  getResult(): PlayerSaveResult;
}
/**
 * Called when LuckPerms has finished processing a Player's initial connection.
 *
 * This event will always execute during the platforms async connection
 * event. The LuckPerms platform listener processing the connection will block
 * while this event is posted.
 *
 * This, among other things, allows you to wait until permission data is
 * loaded for a User during the BungeeCord 'LoginEvent', as event priorities are
 * ignored by the current implementation.
 *
 * The implementation will make an attempt to ensure this event is called
 * for all connections, even if the operation to load User data was not
 * successful. Note that LuckPerms will usually cancel the platform connection
 * event if data could not be loaded.
*/
export class PlayerLoginProcessEvent extends LuckPermsEvent {
  /**
   * Gets the UUID of the connection which was processed
   *
   * @return the uuid of the connection which was processed
  */
  getUniqueId(): UUID;
  /**
   * Gets the username of the connection which was processed
   *
   * @return the username of the connection which was processed
  */
  getUsername(): string;
  /**
   * Gets if the login was processed successfully.
   *
   * @return true if the login was successful
  */
  wasSuccessful(): boolean;
  /**
   * Gets the resultant User instance which was loaded.
   *
   * Returns `null` if the login was not processed
   * {@link #wasSuccessful() successfully.}
   *
   * @return the user instance
  */
  getUser(): User | null;
}
export interface PlayerLoginProcessEvent extends LuckPermsEvent, Result {}

}
declare module 'net.luckperms.api.model.PermissionHolder' {
/**
 * Represents a way to identify distinct {@link PermissionHolder}s.
*/
export class Identifier {
  /**
   * The {@link #getType() type} of {@link User} permission holders.
  */
  static readonly USER_TYPE: string;
  /**
   * The {@link #getType() type} of {@link Group} permission holders.
  */
  static readonly GROUP_TYPE: string;
  /**
   * Gets the {@link PermissionHolder}s generic name.
   *
   * The result of this method is guaranteed to be a unique identifier for distinct instances
   * of the same type of object.
   *
   * For {@link User}s, this method returns a {@link UUID#toString() string} representation of
   * the users {@link User#getUniqueId() unique id}.
   *
   * For {@link Group}s, this method returns the {@link Group#getName() group name}.
   *
   * The {@link User#getUniqueId()}, {@link User#getUsername()} and {@link Group#getName()} methods
   * define a "tighter" specification for obtaining object identifiers.
   *
   * @return the identifier for this object. Either a uuid string or name.
  */
  getName(): string;
  /**
   * Gets the type of the {@link PermissionHolder}.
   *
   * @return the type
  */
  getType(): string;
}

}
declare module 'net.luckperms.api.model.data.DataMutateResult' {
import { DataMutateResult } from 'net.luckperms.api.model.data';
import { Node } from 'net.luckperms.api.node';
/**
 * Extension of {@link DataMutateResult} for temporary set operations.
*/
export class WithMergedNode {
  /**
   * Gets the underlying result.
   *
   * @return the result
  */
  getResult(): DataMutateResult;
  /**
   * Gets the node that resulted from any {@link TemporaryNodeMergeStrategy}
   * processing.
   *
   * If no processing took place, the same instance will be returned by
   * this method.
   *
   * @return the resultant node
  */
  getMergedNode(): Node;
}

}
declare module 'net.luckperms.api.model' {
import { CachedDataManager } from 'net.luckperms.api.cacheddata';
import { Outcome } from 'net.luckperms.api.model.PlayerSaveResult';
import { DataType, NodeMap } from 'net.luckperms.api.model.data';
import { NodeType, Node } from 'net.luckperms.api.node';
import { Set, Collection, UUID, SortedSet } from 'java.util';
import { QueryOptions } from 'net.luckperms.api.query';
import { Group } from 'net.luckperms.api.model.group';
import { Identifier } from 'net.luckperms.api.model.PermissionHolder';
/**
 * Encapsulates the result of an operation to save uuid data about a player.
 *
 * The corresponding method can be found at
 * {@link UserManager#savePlayerData(UUID, String)}.
*/
export class PlayerSaveResult {
  /**
   * Gets the status returned by the operation
   *
   * @return the status
  */
  getOutcomes(): Set<Outcome>;
  /**
   * Gets if the result includes a certain outcome.
   *
   * @param outcome the outcome to check for
   * @return if the result includes the outcome
  */
  includes(outcome: Outcome): boolean;
  /**
   * Gets the previous username involved in the result.
   *
   * Returns null when the result doesn't {@link #includes(Outcome) include} the
   * {@link Outcome#USERNAME_UPDATED} status.
   *
   * @return the previous username
   * @see Outcome#USERNAME_UPDATED
  */
  getPreviousUsername(): string | null;
  /**
   * Gets the other uuids involved in the result.
   *
   * Returns null when the result doesn't {@link #includes(Outcome) include} the
   * {@link Outcome#OTHER_UNIQUE_IDS_PRESENT_FOR_USERNAME} status.
   *
   * @return the other uuids
   * @see Outcome#OTHER_UNIQUE_IDS_PRESENT_FOR_USERNAME
  */
  getOtherUniqueIds(): Set<UUID> | null;
}
/**
 * Generic superinterface for an object which holds permissions.
*/
export class PermissionHolder {
  /**
   * Gets the identifier of the holder.
   *
   * @return the identifier
  */
  getIdentifier(): Identifier;
  /**
   * Gets a friendly name for this holder, to be displayed in command output, etc.
   *
   * This will always return a value, eventually falling back to
   * {@link Identifier#getName()} if no other "friendlier" identifiers are present.
   *
   * For {@link User}s, this method will attempt to return the {@link User#getUsername() username},
   * before falling back to {@link Identifier#getName()}.
   *
   * For {@link Group}s, this method will attempt to return the groups display name, before
   * falling back to {@link Identifier#getName()}.
   *
   * @return a friendly identifier for this holder
  */
  getFriendlyName(): string;
  /**
   * Gets the most appropriate query options available at the time for the
   * {@link PermissionHolder}.
   *
   * For {@link User}s, the most appropriate query options will be their
   * {@link ContextManager#getQueryOptions(User) current active query options} if the
   * corresponding player is online, and otherwise, will fallback to
   * {@link ContextManager#getStaticQueryOptions() the current static query options}
   * if they are offline.
   *
   * For {@link Group}s, the most appropriate query options will always be
   * {@link ContextManager#getStaticQueryOptions()} the current static query options.
   *
   * @return query options
   * @since 5.1
  */
  getQueryOptions(): QueryOptions;
  /**
   * Gets the holders {@link CachedDataManager} cache.
   *
   * @return the holders cached data.
  */
  getCachedData(): CachedDataManager;
  /**
   * Gets the {@link NodeMap} of a particular type.
   *
   * @param dataType the data type
   * @return the data
  */
  getData(dataType: DataType): NodeMap;
  /**
   * Gets the holders {@link DataType#NORMAL} data.
   *
   * @return the normal data
  */
  data(): NodeMap;
  /**
   * Gets the holders {@link DataType#TRANSIENT} data.
   *
   * Transient permissions only exist for the duration of the session.
   *
   * A transient node is a permission that does not persist.
   * Whenever a user logs out of the server, or the server restarts, this permission will
   * disappear. It is never saved to the datastore, and therefore will not apply on other
   * servers.
   *
   * This is useful if you want to temporarily set a permission for a user while they're
   * online, but don't want it to persist, and have to worry about removing it when they log
   * out.
   *
   * @return the transient data
  */
  transientData(): NodeMap;
  /**
   * Gets a flattened view of the holders own {@link Node}s.
   *
   * This list is constructed using the values of both the {@link #data() normal}
   * and {@link #transientData() transient} backing node maps.
   *
   * It may contain duplicate entries if the same node is added to both the normal
   * and transient node maps. You can use {@link #getDistinctNodes()} for a view without
   * duplicates.
   *
   * This method does not resolve inheritance rules.
   *
   * @return a collection of the holders own nodes.
  */
  getNodes(): Collection<Node>;
  /**
   * Gets a flattened view of the holders own {@link Node}s of the given `type`.
   *
   * @param type the type of node to filter by
   * @param  the node type
   * @return a filtered collection of the holders own nodes
   * @see #getNodes()
   * @since 5.1
  */
  getNodes<T>(type: NodeType<T>): Collection<T>;
  /**
   * Gets a flattened and sorted view of the holders own distinct {@link Node}s.
   *
   * Effectively a sorted version of {@link #getNodes()}, without duplicates. Use the
   * aforementioned method if you don't require either of these attributes.
   *
   * This method does not resolve inheritance rules.
   *
   * @return a sorted set of the holders own distinct nodes
  */
  getDistinctNodes(): SortedSet<Node>;
  /**
   * Gets a resolved view of the holders own and inherited {@link Node}s.
   *
   * The returned list will contain every inherited
   * node the holder has, in the order that they were inherited in.
   *
   * This means the list will contain duplicates.
   *
   * Inheritance is performed according to the platforms rules, and the order will vary
   * depending on the accumulation order. By default, the holders own nodes are first in the list,
   * with the entries from the end of the inheritance tree appearing last.
   *
   * @param queryOptions the query options
   * @return a list of the holders inherited nodes
  */
  resolveInheritedNodes(queryOptions: QueryOptions): Collection<Node>;
  /**
   * Gets a resolved view of the holders own and inherited {@link Node}s of a given `type`.
   *
   * @param type the type of node to filter by
   * @param queryOptions the query options
   * @param  the node type
   * @return a filtered list of the holders inherited nodes
   * @see #resolveInheritedNodes(QueryOptions)
   * @since 5.1
  */
  resolveInheritedNodes<T>(type: NodeType<T>, queryOptions: QueryOptions): Collection<T>;
  /**
   * Gets a resolved and sorted view of the holders own and inherited distinct {@link Node}s.
   *
   * Effectively a sorted version of {@link #resolveInheritedNodes(QueryOptions)},
   * without duplicates. Use the aforementioned method if you don't require either of these
   * attributes.
   *
   * Inheritance is performed according to the platforms rules, and the order will vary
   * depending on the accumulation order. By default, the holders own nodes are first in the list,
   * with the entries from the end of the inheritance tree appearing last.
   *
   * @param queryOptions the query options
   * @return a sorted set of the holders distinct inherited nodes
  */
  resolveDistinctInheritedNodes(queryOptions: QueryOptions): SortedSet<Node>;
  /**
   * Gets a collection of the {@link Group}s this holder inherits nodes from.
   *
   * If {@link Flag#RESOLVE_INHERITANCE} is set, this will include holders inherited from both
   * directly and indirectly (through directly inherited groups). It will effectively resolve the
   * whole "inheritance tree".
   *
   * If {@link Flag#RESOLVE_INHERITANCE} is not set, then the traversal will only go one
   * level up the inheritance tree, and return only directly inherited groups.
   *
   * The collection will be ordered according to the platforms inheritance rules. The groups
   * which are inherited from first will appear earlier in the list.
   *
   * The list will not contain the holder.
   *
   * @param queryOptions the query options
   * @return a collection of the groups the holder inherits from
   * @since 5.1
  */
  getInheritedGroups(queryOptions: QueryOptions): Collection<Group>;
  /**
   * Removes any temporary permissions that have expired.
   *
   * This method is called periodically by the platform, so it is only necessary to run
   * if you want to guarantee that the current data is totally up-to-date.
  */
  auditTemporaryNodes(): void;
}

}
declare module 'net.luckperms.api.context.ImmutableContextSet' {
import { Iterable } from 'java.lang';
import { Context, ContextSet, ImmutableContextSet } from 'net.luckperms.api.context';
/**
 * A builder for {@link ImmutableContextSet}.
*/
export class Builder {
  /**
   * Adds a context to the set.
   *
   * @param key   the key to add
   * @param value the value to add
   * @return the builder
   * @throws NullPointerException if the key or value is null
   * @see MutableContextSet#add(String, String)
  */
  add(key: string, value: string): Builder;
  /**
   * Adds a context to the set.
   *
   * @param entry the entry to add
   * @return the builder
   * @throws NullPointerException if the entry is null
   * @see MutableContextSet#add(Context)
  */
  add(entry: Context): Builder;
  /**
   * Adds the contexts contained in the given {@link Iterable} to the set.
   *
   * @param iterable an iterable of key value context pairs
   * @return the builder
   * @throws NullPointerException if iterable is null
   * @see MutableContextSet#addAll(Iterable)
  */
  addAll(iterable: Iterable<Context>): Builder;
  /**
   * Adds all the contexts in another {@link ContextSet} to the set.
   *
   * @param contextSet the set to add from
   * @return the builder
   * @throws NullPointerException if the contextSet is null
   * @see MutableContextSet#addAll(ContextSet)
  */
  addAll(contextSet: ContextSet): Builder;
  /**
   * Creates a {@link ImmutableContextSet} from the values previously
   * added to the builder.
   *
   * @return an {@link ImmutableContextSet} from the builder
  */
  build(): ImmutableContextSet;
}

}
declare module 'net.luckperms.api.node.types.WeightNode' {
import { NodeBuilder } from 'net.luckperms.api.node';
import { WeightNode } from 'net.luckperms.api.node.types';
/**
 * A {@link WeightNode} builder.
*/
export class Builder extends NodeBuilder<WeightNode, Builder> {
  /**
   * Sets the weight.
   *
   * @param weight the weight
   * @return the builder
  */
  weight(weight: number): Builder;
}

}
declare module 'net.luckperms.api.track' {
import { DataMutateResult } from 'net.luckperms.api.model.data';
import { ContextSet } from 'net.luckperms.api.context';
import { Set, Optional, List } from 'java.util';
import { Void } from 'java.lang';
import { Status } from 'net.luckperms.api.track.DemotionResult';
import { CompletableFuture } from 'java.util.concurrent';
import { Result } from 'net.luckperms.api.util';
import { User } from 'net.luckperms.api.model.user';
import { Group } from 'net.luckperms.api.model.group';
import { Status as net_luckperms_api_track_PromotionResult_Status } from 'net.luckperms.api.track.PromotionResult';
/**
 * Represents the object responsible for managing {@link Track} instances.
 *
 * All blocking methods return {@link CompletableFuture}s, which will be
 * populated with the result once the data has been loaded/saved asynchronously.
 * Care should be taken when using such methods to ensure that the main server
 * thread is not blocked.
 *
 * Methods such as {@link CompletableFuture#get()} and equivalent should
 * not be called on the main server thread. If you need to use
 * the result of these operations on the main server thread, register a
 * callback using {@link CompletableFuture#thenAcceptAsync(Consumer, Executor)}.
*/
export class TrackManager {
  /**
   * Creates a new track in the plugin's storage provider and then loads it
   * into memory.
   *
   * If a track by the same name already exists, it will be loaded.
   *
   * @param name the name of the track
   * @return the resultant track
   * @throws NullPointerException if the name is null
  */
  createAndLoadTrack(name: string): CompletableFuture<Track>;
  /**
   * Loads a track from the plugin's storage provider into memory.
   *
   * Returns an {@link Optional#empty() empty optional} if the track does
   * not exist.
   *
   * @param name the name of the track
   * @return the resultant track
   * @throws NullPointerException if the name is null
  */
  loadTrack(name: string): CompletableFuture<Optional<Track>>;
  /**
   * Saves a track's data back to the plugin's storage provider.
   *
   * You should call this after you make any changes to a track.
   *
   * @param track the track to save
   * @return a future to encapsulate the operation.
   * @throws NullPointerException  if track is null
   * @throws IllegalStateException if the track instance was not obtained from LuckPerms.
  */
  saveTrack(track: Track): CompletableFuture<Void>;
  /**
   * Permanently deletes a track from the plugin's storage provider.
   *
   * @param track the track to delete
   * @return a future to encapsulate the operation.
   * @throws NullPointerException  if track is null
   * @throws IllegalStateException if the track instance was not obtained from LuckPerms.
  */
  deleteTrack(track: Track): CompletableFuture<Void>;
  /**
   * Loads all tracks into memory.
   *
   * @return a future to encapsulate the operation.
  */
  loadAllTracks(): CompletableFuture<Void>;
  /**
   * Gets a loaded track.
   *
   * @param name the name of the track to get
   * @return a {@link Track} object, if one matching the name exists, or null if not
   * @throws NullPointerException if the name is null
  */
  getTrack(name: string): Track | null;
  /**
   * Gets a set of all loaded tracks.
   *
   * @return a {@link Set} of {@link Track} objects
  */
  getLoadedTracks(): Set<Track>;
  /**
   * Check if a track is loaded in memory
   *
   * @param name the name to check for
   * @return true if the track is loaded
   * @throws NullPointerException if the name is null
  */
  isLoaded(name: string): boolean;
}
/**
 * An ordered chain of {@link Group}s.
*/
export class Track {
  /**
   * Gets the name of this track
   *
   * @return the name of this track
  */
  getName(): string;
  /**
   * Gets a list of the groups on this track
   *
   * Index 0 is the first/lowest group in (or start of) the track.
   *
   * The returned collection is immutable, and cannot be modified.
   *
   * @return an ordered {@link List} of the groups on this track
  */
  getGroups(): string[];
  /**
   * Gets the next group on the track, after the one provided
   *
   * `null` is returned if the group is not on the track.
   *
   * @param current the group before the group being requested
   * @return the group name, or null if the end of the track has been reached
   * @throws NullPointerException  if the group is null
   * @throws IllegalStateException if the group instance was not obtained from LuckPerms.
  */
  getNext(current: Group): string | null;
  /**
   * Gets the previous group on the track, before the one provided
   *
   * `null` is returned if the group is not on the track.
   *
   * @param current the group after the group being requested
   * @return the group name, or null if the start of the track has been reached
   * @throws NullPointerException  if the group is null
   * @throws IllegalStateException if the group instance was not obtained from LuckPerms.
  */
  getPrevious(current: Group): string | null;
  /**
   * Promotes the given user along this track.
   *
   * @param user       the user to promote
   * @param contextSet the contexts to promote the user in
   * @return the result of the action
  */
  promote(user: User, contextSet: ContextSet): PromotionResult;
  /**
   * Demotes the given user along this track.
   *
   * @param user       the user to demote
   * @param contextSet the contexts to demote the user in
   * @return the result of the action
  */
  demote(user: User, contextSet: ContextSet): DemotionResult;
  /**
   * Appends a group to the end of this track
   *
   * @param group the group to append
   * @return the result of the operation
   * @throws NullPointerException  if the group is null
   * @throws IllegalStateException if the group instance was not obtained from LuckPerms.
  */
  appendGroup(group: Group): DataMutateResult;
  /**
   * Inserts a group at a certain position on this track
   *
   * @param group    the group to be inserted
   * @param position the index position (a value of 0 inserts at the start)
   * @return the result of the operation
   * @throws IndexOutOfBoundsException if the position is less than 0 or greater than the size of the track
   * @throws NullPointerException      if the group is null
   * @throws IllegalStateException     if the group instance was not obtained from LuckPerms.
  */
  insertGroup(group: Group, position: number): DataMutateResult;
  /**
   * Removes a group from this track
   *
   * @param group the group to remove
   * @return the result of the operation
   * @throws NullPointerException  if the group is null
   * @throws IllegalStateException if the group instance was not obtained from LuckPerms.
  */
  removeGroup(group: Group): DataMutateResult;
  /**
   * Removes a group from this track
   *
   * @param group the group to remove
   * @return the result of the operation
   * @throws NullPointerException if the group is null
  */
  removeGroup(group: string): DataMutateResult;
  /**
   * Checks if a group features on this track
   *
   * @param group the group to check
   * @return true if the group is on this track
   * @throws NullPointerException  if the group is null
   * @throws IllegalStateException if the group instance was not obtained from LuckPerms.
  */
  containsGroup(group: Group): boolean;
  /**
   * Checks if a group features on this track
   *
   * @param group the group to check
   * @return true if the group is on this track
   * @throws NullPointerException if the group is null
  */
  containsGroup(group: string): boolean;
  /**
   * Clear all of the groups from this track
  */
  clearGroups(): void;
}
/**
 * Encapsulates the result of {@link User}s demotion along a {@link Track}.
*/
export class DemotionResult extends Result {
  /**
   * Gets the status of the result.
   *
   * @return the status
  */
  getStatus(): Status;
  wasSuccessful(): boolean;
  /**
   * Gets the name of the group the user was demoted from, if applicable.
   *
   * Will only be present for results with a {@link #getStatus() status} of
   * {@link Status#SUCCESS} or {@link Status#REMOVED_FROM_FIRST_GROUP}.
   *
   * The value will also be set for results with the {@link Status#MALFORMED_TRACK} status,
   * with this value marking the group which no longer exists.
   *
   * @return the group the user was demoted from.
  */
  getGroupFrom(): Optional<string>;
  /**
   * Gets the name of the group the user was demoted from, if applicable.
   *
   * Will only be present for results with a {@link #getStatus() status} of
   * {@link Status#SUCCESS}.
   *
   * @return the group the user was demoted to.
  */
  getGroupTo(): Optional<string>;
}
/**
 * Encapsulates the result of {@link User}s promotion along a {@link Track}.
*/
export class PromotionResult extends Result {
  /**
   * Gets the status of the result.
   *
   * @return the status
  */
  getStatus(): net_luckperms_api_track_PromotionResult_Status;
  wasSuccessful(): boolean;
  /**
   * Gets the name of the group the user was promoted from, if applicable.
   *
   * Will only be present for results with a {@link #getStatus() status} of
   * {@link Status#SUCCESS}.
   *
   * @return the group the user was promoted from.
  */
  getGroupFrom(): Optional<string>;
  /**
   * Gets the name of the group the user was promoted from, if applicable.
   *
   * Will only be present for results with a {@link #getStatus() status} of
   * {@link Status#SUCCESS} or {@link Status#ADDED_TO_FIRST_GROUP}.
   *
   * The value will also be set for results with the {@link Status#MALFORMED_TRACK} status,
   * with this value marking the group which no longer exists.
   *
   * @return the group the user was promoted to.
  */
  getGroupTo(): Optional<string>;
}

}
declare module 'net.luckperms.api.node.types.PermissionNode' {
import { NodeBuilder } from 'net.luckperms.api.node';
import { PermissionNode } from 'net.luckperms.api.node.types';
/**
 * A {@link PermissionNode} builder.
*/
export class Builder extends NodeBuilder<PermissionNode, Builder> {
  /**
   * Sets the permission.
   *
   * @param permission the permission
   * @return the builder
  */
  permission(permission: string): Builder;
}

}
declare module 'net.luckperms.api.event.group' {
import { CachedDataManager } from 'net.luckperms.api.cacheddata';
import { Node } from 'net.luckperms.api.node';
import { LuckPermsEvent } from 'net.luckperms.api.event';
import { Set } from 'java.util';
import { CreationCause, DeletionCause } from 'net.luckperms.api.event.cause';
import { Group } from 'net.luckperms.api.model.group';
/**
 * Called when all groups have been loaded in from storage.
 *
 * Usually only called on startup and in sync tasks.
*/
export class GroupLoadAllEvent extends LuckPermsEvent {

}
/**
 * Called when a group is loaded into memory from the storage.
 *
 * Note that this event is not the same as {@link GroupCreateEvent}
*/
export class GroupLoadEvent extends LuckPermsEvent {
  /**
   * Gets the group that was loaded
   *
   * @return the group that was loaded
  */
  getGroup(): Group;
}
/**
 * Called when a group is deleted
*/
export class GroupDeleteEvent extends LuckPermsEvent {
  /**
   * Gets the name of the deleted group
   *
   * @return the name of the deleted group
  */
  getGroupName(): string;
  /**
   * Gets an immutable copy of the groups existing data
   *
   * @return a copy of the groups existing data
  */
  getExistingData(): Set<Node>;
  /**
   * Gets the cause of the deletion
   *
   * @return the cause of the deletion
  */
  getCause(): DeletionCause;
}
/**
 * Called when a groups {@link CachedDataManager} is loaded.
*/
export class GroupCacheLoadEvent extends LuckPermsEvent {
  /**
   * Gets the group whose data was loaded
   *
   * @return the group
  */
  getGroup(): Group;
  /**
   * Gets the data that was loaded
   *
   * @return the loaded data
  */
  getLoadedData(): CachedDataManager;
}
/**
 * Called when a group is created
*/
export class GroupCreateEvent extends LuckPermsEvent {
  /**
   * Gets the new group
   *
   * @return the new group
  */
  getGroup(): Group;
  /**
   * Gets the cause of the creation
   *
   * @return the cause of the creation
  */
  getCause(): CreationCause;
}
/**
 * Called when a groups cached data is refreshed
*/
export class GroupDataRecalculateEvent extends LuckPermsEvent {
  /**
   * Gets the group whose data was recalculated
   *
   * @return the group
  */
  getGroup(): Group;
  /**
   * Gets the data that was recalculated
   *
   * @return the data
  */
  getData(): CachedDataManager;
}

}
declare module 'net.luckperms.api.event.context' {
import { LuckPermsEvent } from 'net.luckperms.api.event';
import { Class } from 'java.lang';
import { Optional } from 'java.util';
/**
 * Called when a subject's current/active contexts are updated.
 *
 * There are no guarantees that this event will be called for every update. It is merely to be
 * used as a "hint" for plugins which depend on the current active contexts for a player.
 *
 * It will always be fired following a call to
 * {@link ContextManager#signalContextUpdate(Object)}.
 *
 * The {@link #getSubject() subject} is always an instance of the platform's subject type. See
 * {@link ContextManager} for details.
 *
 * Unlike most other LuckPerms events, this event is not fired asynchronously. Care should be
 * taken to ensure listeners are lightweight. Additionally, listeners should ensure they do not
 * cause further updates to player context, thus possibly causing a stack overflow.
 *
 * @since 5.2
*/
export class ContextUpdateEvent extends LuckPermsEvent {
  /**
   * Gets the subject whose contexts were updated.
   *
   * @return the subject
  */
  getSubject(): any;
  /**
   * Gets the subject whose contexts were updated, casted to a given type.
   *
   * @param subjectClass the type to cast to
   * @param  the subject type
   * @return the casted subject
  */
  getSubject<T>(subjectClass: Class<T>): Optional<T>;
}

}
declare module 'net.luckperms.api.event.track.mutate' {
import { LuckPermsEvent } from 'net.luckperms.api.event';
import { List } from 'java.util';
import { Track } from 'net.luckperms.api.track';
/**
 * Called when a track is cleared
*/
export class TrackClearEvent extends TrackMutateEvent {

}
/**
 * Called when a group is removed from a track
*/
export class TrackRemoveGroupEvent extends TrackMutateEvent {
  /**
   * Gets the group that was removed
   *
   * @return the group that was removed
  */
  getGroup(): string;
}
/**
 * Called when a track is changed
*/
export class TrackMutateEvent extends LuckPermsEvent {
  /**
   * Gets the track that was mutated
   *
   * @return the track that was mutated
  */
  getTrack(): Track;
  /**
   * Gets an immutable copy of the tracks data before the change
   *
   * @return the data before the change
  */
  getStateBefore(): string[];
  /**
   * Gets an immutable copy of the tracks data after the change
   *
   * @return the data after the change
  */
  getStateAfter(): string[];
}
/**
 * Called when a group is added to a track
*/
export class TrackAddGroupEvent extends TrackMutateEvent {
  /**
   * Gets the group that was added
   *
   * @return the group that was added
  */
  getGroup(): string;
}

}
declare module 'net.luckperms.api.actionlog.Action' {
import { Type } from 'net.luckperms.api.actionlog.Action.Target';
import { Instant } from 'java.time';
import { Optional, UUID } from 'java.util';
import { Action } from 'net.luckperms.api.actionlog';
/**
 * Represents the source of an action.
*/
export class Source {
  /**
   * Gets the source unique id.
   *
   * @return the source unique id
  */
  getUniqueId(): UUID;
  /**
   * Gets the source name.
   *
   * @return the source name
  */
  getName(): string;
}
/**
 * Represents the target of an action.
*/
export class Target {
  /**
   * Gets the target unique id.
   *
   * @return the target unique id
  */
  getUniqueId(): Optional<UUID>;
  /**
   * Gets the target name.
   *
   * @return the target name
  */
  getName(): string;
  /**
   * Gets the target type.
   *
   * @return the target type
  */
  getType(): Type;
}
/**
 * Builds an {@link Action} instance
*/
export class Builder {
  /**
   * Sets the timestamp of the entry.
   *
   * @param timestamp the timestamp
   * @return the builder
   * @see Action#getTimestamp()
  */
  timestamp(timestamp: Instant): Builder;
  /**
   * Sets the actor of the entry.
   *
   * @param actor the actor
   * @return the builder
  */
  source(actor: UUID): Builder;
  /**
   * Sets the actor name of the entry.
   *
   * @param actorName the actor name
   * @return the builder
  */
  sourceName(actorName: string): Builder;
  /**
   * Sets the type of the entry.
   *
   * @param type the type
   * @return the builder
  */
  targetType(type: Type): Builder;
  /**
   * Sets the acted object for the entry.
   *
   * @param acted the acted object
   * @return the builder
  */
  target(acted: UUID | null): Builder;
  /**
   * Sets the acted name for the entry.
   *
   * @param actedName the acted name
   * @return the builder
  */
  targetName(actedName: string): Builder;
  /**
   * Sets the action of the entry.
   *
   * @param action the action
   * @return the builder
  */
  description(action: string): Builder;
  /**
   * Creates a {@link Action} instance from the builder.
   *
   * @return a new log entry instance
  */
  build(): Action;
}

}
declare module 'net.luckperms.api.event.extension' {
import { LuckPermsEvent } from 'net.luckperms.api.event';
import { Extension } from 'net.luckperms.api.extension';
/**
 * Called when an {@link Extension} is loaded.
*/
export class ExtensionLoadEvent extends LuckPermsEvent {
  /**
   * Gets the extension that was loaded.
   *
   * @return the extension
  */
  getExtension(): Extension;
}

}
declare module 'net.luckperms.api.event.util' {
/**
 * Represents the position of a parameter within an event.
 *
 * This is an implementation detail and should not be relied upon.
*/
export class Param {

}

}
declare module 'net.luckperms.api.actionlog' {
import { Instant } from 'java.time';
import { UUID, SortedSet } from 'java.util';
import { Comparable, Void } from 'java.lang';
import { CompletableFuture } from 'java.util.concurrent';
import { Target, Builder, Source } from 'net.luckperms.api.actionlog.Action';
/**
 * Represents the internal LuckPerms log.
 *
 * The returned instance provides a copy of the data at the time of retrieval.
 *
 * Any changes made to log entries will only apply to this instance of the log.
 * You can add to the log using the {@link ActionLogger}, and then request an updated copy.
 *
 * All methods are thread safe, and return immutable and thread safe collections.
*/
export class ActionLog {
  /**
   * Gets the {@link Action}s that make up this log.
   *
   * @return the content
  */
  getContent(): SortedSet<Action>;
  /**
   * Gets the entries in the log performed by the given actor.
   *
   * @param actor the uuid of the actor to filter by
   * @return the content for the given actor
  */
  getContent(actor: UUID): SortedSet<Action>;
  /**
   * Gets the log content for a given user
   *
   * @param uniqueId the uuid to filter by
   * @return all content in this log where the user = uuid
  */
  getUserHistory(uniqueId: UUID): SortedSet<Action>;
  /**
   * Gets the log content for a given group
   *
   * @param name the name to filter by
   * @return all content in this log where the group = name
  */
  getGroupHistory(name: string): SortedSet<Action>;
  /**
   * Gets the log content for a given track
   *
   * @param name the name to filter by
   * @return all content in this log where the track = name
  */
  getTrackHistory(name: string): SortedSet<Action>;
}
/**
 * Represents the object responsible for handling action logging.
*/
export class ActionLogger {
  /**
   * Returns a new {@link Action.Builder} instance
   *
   * @return a new builder
  */
  actionBuilder(): Builder;
  /**
   * Gets a {@link ActionLog} instance from the plugin storage.
   *
   * @return a log instance
  */
  getLog(): CompletableFuture<ActionLog>;
  /**
   * Submits a log entry to the plugin to be handled.
   *
   * This method submits the log to the storage provider and broadcasts
   * it.
   *
   * It is therefore roughly equivalent to calling
   * {@link #submitToStorage(Action)} and {@link #broadcastAction(Action)},
   * however, using this method is preferred to making the calls individually.
   *
   * If you want to submit a log entry but don't know which method to pick,
   * use this one.
   *
   * @param entry the entry to submit
   * @return a future which will complete when the action is done
  */
  submit(entry: Action): CompletableFuture<Void>;
  /**
   * Submits a log entry to the plugins storage handler.
   *
   * @param entry the entry to submit
   * @return a future which will complete when the action is done
  */
  submitToStorage(entry: Action): CompletableFuture<Void>;
  /**
   * Submits a log entry to the plugins log broadcasting handler.
   *
   * If enabled, this method will also dispatch the log entry via the
   * plugins {@link MessagingService}.
   *
   * @param entry the entry to submit
   * @return a future which will complete when the action is done
  */
  broadcastAction(entry: Action): CompletableFuture<Void>;
}
/**
 * Represents a logged action.
*/
export class Action extends Comparable<Action> {
  /**
   * Gets a {@link Action.Builder}
   *
   * @return a new builder
  */
  static builder(): Builder;
  /**
   * Gets the time when the action occurred.
   *
   * @return the timestamp
  */
  getTimestamp(): Instant;
  /**
   * Gets the source of the action.
   *
   * @return the source
  */
  getSource(): Source;
  /**
   * Gets the target of the action.
   *
   * @return the target
  */
  getTarget(): Target;
  /**
   * Returns a string describing the action which took place.
   *
   * In most instances, this returns a variation of the command string which caused
   * the change.
   *
   * @return the action
  */
  getDescription(): string;
}

}
declare module 'net.luckperms.api.query.meta' {
import { Result } from 'net.luckperms.api.cacheddata';
import { List } from 'java.util';
import { OptionKey } from 'net.luckperms.api.query';
import { MetaNode } from 'net.luckperms.api.node.types';
/**
 * A function that selects the {@link MetaNode#getMetaValue() meta value} to be used in queries
 * against a given {@link MetaNode#getMetaKey() meta key}.
 *
 * @since 5.1
*/
export class MetaValueSelector {
  /**
   * The {@link OptionKey} for {@link MetaValueSelector}.
  */
  static readonly KEY: OptionKey<MetaValueSelector>;
  /**
   * Selects the meta value to map to the given key.
   *
   * The `values` list is guaranteed to contain at least 1 element.
   *
   * @param key the key
   * @param values the values, in the order in which they were accumulated.
   * @return the selected value
  */
  selectValue(key: string, values: Result<string, MetaNode>[]): Result<string, MetaNode>;
}

}
declare module 'net.luckperms.api.node.types' {
import { Builder as net_luckperms_api_node_types_RegexPermissionNode_Builder } from 'net.luckperms.api.node.types.RegexPermissionNode';
import { Builder as net_luckperms_api_node_types_MetaNode_Builder } from 'net.luckperms.api.node.types.MetaNode';
import { Builder as net_luckperms_api_node_types_InheritanceNode_Builder } from 'net.luckperms.api.node.types.InheritanceNode';
import { Optional, OptionalInt } from 'java.util';
import { Builder as net_luckperms_api_node_types_SuffixNode_Builder } from 'net.luckperms.api.node.types.SuffixNode';
import { Builder as net_luckperms_api_node_types_PrefixNode_Builder } from 'net.luckperms.api.node.types.PrefixNode';
import { ScopedNode, NodeType, ChatMetaType } from 'net.luckperms.api.node';
import { Pattern } from 'java.util.regex';
import { Builder as net_luckperms_api_node_types_DisplayNameNode_Builder } from 'net.luckperms.api.node.types.DisplayNameNode';
import { Builder as net_luckperms_api_node_types_WeightNode_Builder } from 'net.luckperms.api.node.types.WeightNode';
import { Builder } from 'net.luckperms.api.node.types.PermissionNode';
import { Group } from 'net.luckperms.api.model.group';
/**
 * A sub-type of {@link Node} representing basic permissions.
*/
export class PermissionNode extends ScopedNode<PermissionNode, Builder> {
  getType(): NodeType<PermissionNode>;
  /**
   * Gets the permission string this node encapsulates.
   *
   * The exact value of this string may vary for nodes which aren't regular
   * permission settings.
   *
   * @return the actual permission node
  */
  getPermission(): string;
  /**
   * Gets if this node is a wildcard permission.
   *
   * @return true if this node is a wildcard permission
  */
  isWildcard(): boolean;
  /**
   * Gets the level of this wildcard.
   *
   * The node luckperms.* has a wildcard level of 1.
   * The node luckperms.user.permission.* has a wildcard level of 3.
   *
   * Nodes with a higher wildcard level are more specific and have priority over
   * less specific nodes (nodes with a lower wildcard level).
   *
   * @return the wildcard level
  */
  getWildcardLevel(): OptionalInt;
  /**
   * Creates a {@link PermissionNode} builder.
   *
   * @return the builder
  */
  static builder(): Builder;
  /**
   * Creates a {@link PermissionNode} builder.
   *
   * @param permission the permission to set
   * @return the builder
  */
  static builder(permission: string): Builder;
}
/**
 * A sub-type of {@link Node} used to store suffix assignments.
*/
export class SuffixNode extends ChatMetaNode<SuffixNode, net_luckperms_api_node_types_SuffixNode_Builder> {
  getType(): NodeType<SuffixNode>;
  /**
   * Creates a {@link SuffixNode} builder.
   *
   * @return the builder
  */
  static builder(): net_luckperms_api_node_types_SuffixNode_Builder;
  /**
   * Creates a {@link SuffixNode} builder.
   *
   * @param suffix the suffix to set
   * @param priority the priority to set
   * @return the builder
  */
  static builder(suffix: string, priority: number): net_luckperms_api_node_types_SuffixNode_Builder;
}
/**
 * Represents a chat meta node. (a {@link PrefixNode} or {@link SuffixNode})
 *
 * @param  the node type
 * @param  the node builder type
*/
export class ChatMetaNode<N, B> extends ScopedNode<N, B> {
  /**
   * Gets the priority.
   *
   * @return the priority
  */
  getPriority(): number;
  /**
   * Gets the meta value.
   *
   * @return the value
  */
  getMetaValue(): string;
  /**
   * Gets the type.
   *
   * @return the type
  */
  getMetaType(): ChatMetaType;
}
/**
 * A sub-type of {@link Node} used to store regex permissions.
*/
export class RegexPermissionNode extends ScopedNode<RegexPermissionNode, net_luckperms_api_node_types_RegexPermissionNode_Builder> {
  getType(): NodeType<RegexPermissionNode>;
  /**
   * Gets the non-compiled pattern string.
   *
   * @return the pattern string
  */
  getPatternString(): string;
  /**
   * Gets the pattern for the regex node.
   *
   * Will return an empty optional if the Pattern could not be parsed.
   *
   * @return the pattern
  */
  getPattern(): Optional<Pattern>;
  /**
   * Creates a {@link RegexPermissionNode} builder.
   *
   * @return the builder
  */
  static builder(): net_luckperms_api_node_types_RegexPermissionNode_Builder;
  /**
   * Creates a {@link RegexPermissionNode} builder.
   *
   * @param pattern the pattern to set
   * @return the builder
  */
  static builder(pattern: string): net_luckperms_api_node_types_RegexPermissionNode_Builder;
  /**
   * Creates a {@link RegexPermissionNode} builder.
   *
   * @param pattern the pattern to set
   * @return the builder
  */
  static builder(pattern: Pattern): net_luckperms_api_node_types_RegexPermissionNode_Builder;
}
/**
 * A sub-type of {@link Node} used to mark that the holder of the node should inherit
 * from another group.
*/
export class InheritanceNode extends ScopedNode<InheritanceNode, net_luckperms_api_node_types_InheritanceNode_Builder> {
  getType(): NodeType<InheritanceNode>;
  /**
   * Gets the name of the group to be inherited.
   *
   * This is no guarantee that this group exists.
   *
   * @return the name of the group
  */
  getGroupName(): string;
  /**
   * Creates a {@link InheritanceNode} builder.
   *
   * @return the builder
  */
  static builder(): net_luckperms_api_node_types_InheritanceNode_Builder;
  /**
   * Creates a {@link InheritanceNode} builder.
   *
   * @param group the group to set
   * @return the builder
  */
  static builder(group: string): net_luckperms_api_node_types_InheritanceNode_Builder;
  /**
   * Sets the name of group to inherit.
   *
   * @param group the group name
   * @return the builder
  */
  static builder(group: Group): net_luckperms_api_node_types_InheritanceNode_Builder;
}
/**
 * A sub-type of {@link Node} used to store meta assignments.
*/
export class MetaNode extends ScopedNode<MetaNode, net_luckperms_api_node_types_MetaNode_Builder> {
  getType(): NodeType<MetaNode>;
  /**
   * Gets the meta key.
   *
   * @return the meta key
  */
  getMetaKey(): string;
  /**
   * Gets the meta value.
   *
   * @return the meta value
  */
  getMetaValue(): string;
  /**
   * Creates a {@link MetaNode} builder.
   *
   * @return the builder
  */
  static builder(): net_luckperms_api_node_types_MetaNode_Builder;
  /**
   * Creates a {@link MetaNode} builder.
   *
   * @param key the meta key to set
   * @param value the meta value to set
   * @return the builder
  */
  static builder(key: string, value: string): net_luckperms_api_node_types_MetaNode_Builder;
}
/**
 * A sub-type of {@link Node} used to store prefix assignments.
*/
export class PrefixNode extends ChatMetaNode<PrefixNode, net_luckperms_api_node_types_PrefixNode_Builder> {
  getType(): NodeType<PrefixNode>;
  /**
   * Creates a {@link PrefixNode} builder.
   *
   * @return the builder
  */
  static builder(): net_luckperms_api_node_types_PrefixNode_Builder;
  /**
   * Creates a {@link PrefixNode} builder.
   *
   * @param prefix the prefix to set
   * @param priority the priority to set
   * @return the builder
  */
  static builder(prefix: string, priority: number): net_luckperms_api_node_types_PrefixNode_Builder;
}
/**
 * A sub-type of {@link Node} used to mark the display name of the node's holder.
*/
export class DisplayNameNode extends ScopedNode<DisplayNameNode, net_luckperms_api_node_types_DisplayNameNode_Builder> {
  getType(): NodeType<DisplayNameNode>;
  /**
   * Gets the display name.
   *
   * @return the display name
  */
  getDisplayName(): string;
  /**
   * Creates a {@link DisplayNameNode} builder.
   *
   * @return the builder
  */
  static builder(): net_luckperms_api_node_types_DisplayNameNode_Builder;
  /**
   * Creates a {@link DisplayNameNode} builder.
   *
   * @param displayName the display name to set
   * @return the builder
  */
  static builder(displayName: string): net_luckperms_api_node_types_DisplayNameNode_Builder;
}
/**
 * A sub-type of {@link Node} used to mark the weight of the node's holder.
*/
export class WeightNode extends ScopedNode<WeightNode, net_luckperms_api_node_types_WeightNode_Builder> {
  getType(): NodeType<WeightNode>;
  /**
   * Gets the weight value.
   *
   * @return the weight
  */
  getWeight(): number;
  /**
   * Creates a {@link WeightNode} builder.
   *
   * @return the builder
  */
  static builder(): net_luckperms_api_node_types_WeightNode_Builder;
  /**
   * Creates a {@link WeightNode} builder.
   *
   * @param weight the weight to set
   * @return the builder
  */
  static builder(weight: number): net_luckperms_api_node_types_WeightNode_Builder;
}

}
declare module 'net.luckperms.api.extension' {
import { Collection } from 'java.util';
import { Path } from 'java.nio.file';
/**
 * Manages extensions.
*/
export class ExtensionManager {
  /**
   * Loads the given extension.
   *
   * @param extension the extension to load
  */
  loadExtension(extension: Extension): void;
  /**
   * Loads the extension at the given path.
   *
   * @param path the path to the extension
   * @return the extension
   * @throws IOException if the extension could not be loaded
  */
  loadExtension(path: Path): Extension;
  /**
   * Gets a collection of all loaded extensions.
   *
   * @return the loaded extensions
  */
  getLoadedExtensions(): Collection<Extension>;
}
/**
 * Represents a simple extension "plugin" for LuckPerms.
 *
 * Yes, that's right. A plugin for a plugin.
 *
 * Extensions should either declare a no-arg constructor, or a constructor
 * that accepts a single {@link LuckPerms} parameter as it's only argument.
*/
export class Extension {
  /**
   * Loads the extension.
  */
  load(): void;
  /**
   * Unloads the extension.
  */
  unload(): void;
}

}
declare module 'net.luckperms.api.platform' {
import { CachedMetaData, CachedPermissionData } from 'net.luckperms.api.cacheddata';
import { Type as net_luckperms_api_platform_Platform_Type } from 'net.luckperms.api.platform.Platform';
import { Instant } from 'java.time';
import { Set, Collection, UUID } from 'java.util';
import { ImmutableContextSet } from 'net.luckperms.api.context';
import { QueryOptions } from 'net.luckperms.api.query';
import { Type } from 'net.luckperms.api.platform.PlatformEntity';
import { User } from 'net.luckperms.api.model.user';
/**
 * Provides information about the LuckPerms plugin.
*/
export class PluginMetadata {
  /**
   * Gets the plugin version
   *
   * @return the version of the plugin running on the platform
  */
  getVersion(): string;
  /**
   * Gets the API version
   *
   * @return the version of the API running on the platform
  */
  getApiVersion(): string;
}
/**
 * Represents an entity on the server.
 *
 * This does not relate directly to a "Minecraft Entity". The closest
 * comparison is to a "CommandSender" or "CommandSource".
 *
 * The various types of {@link PlatformEntity} are detailed in {@link Type}.
*/
export class PlatformEntity {
  /**
   * Gets the unique id of the entity, if it has one.
   *
   * For players, this returns their uuid assigned by the server.
   *
   * @return the uuid of the object, if available
  */
  getUniqueId(): UUID | null;
  /**
   * Gets the name of the object
   *
   * @return the object name
  */
  getName(): string;
  /**
   * Gets the entities type.
   *
   * @return the type
  */
  getType(): Type;
}
/**
 * Provides information about the platform LuckPerms is running on.
*/
export class Platform {
  /**
   * Gets the type of platform LuckPerms is running on
   *
   * @return the type of platform LuckPerms is running on
  */
  getType(): net_luckperms_api_platform_Platform_Type;
  /**
   * Gets the unique players which have connected to the server since it started.
   *
   * @return the unique connections
  */
  getUniqueConnections(): Set<UUID>;
  /**
   * Gets a {@link Collection} of all known permission strings.
   *
   * @return a collection of the known permissions
  */
  getKnownPermissions(): Collection<string>;
  /**
   * Gets the time when the plugin first started.
   *
   * @return the enable time
  */
  getStartTime(): Instant;
}
/**
 * A utility class for adapting platform Player instances to LuckPerms {@link User}s.
 *
 * Note: this class will only work for online players.
 *
 * The "player type" parameter must be equal to the class or interface used by the
 * server platform to represent players.
 *
 * Specifically:
 *
 * 
 * 
 * `org.bukkit.entity.Player`
 * `net.md_5.bungee.api.connection.ProxiedPlayer`
 * `org.spongepowered.api/entity.living.player.Player`
 * `cn.nukkit.Player`
 * `com.velocitypowered.api.proxy.Player`
 * 
 *
 * @param  the player type
 * @since 5.1
*/
export class PlayerAdapter<T> {
  /**
   * Gets the {@link User} instance for the given `player`.
   *
   * @param player the player
   * @return the user
   * @see UserManager#getUser(UUID)
  */
  getUser(player: T): User;
  /**
   * Gets current {@link ImmutableContextSet active context} for the `player`.
   *
   * @param player the player
   * @return the active context for the player
   * @see ContextManager#getContext(Object)
  */
  getContext(player: T): ImmutableContextSet;
  /**
   * Gets current {@link QueryOptions active query options} for the `player`.
   *
   * @param player the player
   * @return the active query options for the player
   * @see ContextManager#getQueryOptions(Object)
  */
  getQueryOptions(player: T): QueryOptions;
  /**
   * Gets the current {@link CachedPermissionData} for the `player`,
   * using their {@link #getQueryOptions(Object) active query options}.
   *
   * @param player the player
   * @return the cached permission data for the player
   * @see CachedDataManager#getPermissionData()
  */
  getPermissionData(player: T): CachedPermissionData;
  /**
   * Gets the current {@link CachedMetaData} for the `player`,
   * using their {@link #getQueryOptions(Object) active query options}.
   *
   * @param player the player
   * @return the cached meta data for the player
   * @see CachedDataManager#getMetaData()
  */
  getMetaData(player: T): CachedMetaData;
}

}
declare module 'net.luckperms.api' {
import { NodeMatcherFactory } from 'net.luckperms.api.node.matcher';
import { ContextManager } from 'net.luckperms.api.context';
import { Optional } from 'java.util';
import { NodeBuilderRegistry } from 'net.luckperms.api.node';
import { EventBus } from 'net.luckperms.api.event';
import { MessagingService } from 'net.luckperms.api.messaging';
import { QueryOptionsRegistry } from 'net.luckperms.api.query';
import { CompletableFuture } from 'java.util.concurrent';
import { TrackManager } from 'net.luckperms.api.track';
import { ActionLogger } from 'net.luckperms.api.actionlog';
import { PlayerAdapter, Platform, PluginMetadata } from 'net.luckperms.api.platform';
import { MessengerProvider } from 'net.luckperms.api.messenger';
import { Class, Void } from 'java.lang';
import { UserManager } from 'net.luckperms.api.model.user';
import { MetaStackFactory } from 'net.luckperms.api.metastacking';
import { GroupManager } from 'net.luckperms.api.model.group';
/**
 * Provides static access to the {@link LuckPerms} API.
 *
 * Ideally, the ServiceManager for the platform should be used to obtain an
 * instance, however, this provider can be used if this is not viable.
*/
export class LuckPermsProvider {
  /**
   * Gets an instance of the {@link LuckPerms} API,
   * throwing {@link IllegalStateException} if the API is not loaded yet.
   *
   * This method will never return null.
   *
   * @return an instance of the LuckPerms API
   * @throws IllegalStateException if the API is not loaded yet
  */
  static get(): LuckPerms;
}
/**
 * The LuckPerms API.
 *
 * The API allows other plugins on the server to read and modify LuckPerms
 * data, change behaviour of the plugin, listen to certain events, and integrate
 * LuckPerms into other plugins and systems.
 *
 * This interface represents the base of the API package. All functions are
 * accessed via this interface.
 *
 * To start using the API, you need to obtain an instance of this interface.
 * These are registered by the LuckPerms plugin to the platforms Services
 * Manager. This is the preferred method for obtaining an instance.
 *
 * For ease of use, and for platforms without a Service Manager, an instance
 * can also be obtained from the static singleton accessor in
 * {@link LuckPermsProvider}.
*/
export class LuckPerms {
  /**
   * Gets the name of this server.
   *
   * This is defined in the LuckPerms configuration file, and is used for
   * server specific permission handling.
   *
   * The default server name is "global".
   *
   * @return the server name
  */
  getServerName(): string;
  /**
   * Gets the {@link UserManager}, responsible for managing
   * {@link User} instances.
   *
   * This manager can be used to retrieve instances of {@link User} by uuid
   * or name, or query all loaded users.
   *
   * @return the user manager
  */
  getUserManager(): UserManager;
  /**
   * Gets the {@link GroupManager}, responsible for managing
   * {@link Group} instances.
   *
   * This manager can be used to retrieve instances of {@link Group} by
   * name, or query all loaded groups.
   *
   * @return the group manager
  */
  getGroupManager(): GroupManager;
  /**
   * Gets the {@link TrackManager}, responsible for managing
   * {@link Track} instances.
   *
   * This manager can be used to retrieve instances of {@link Track} by
   * name, or query all loaded tracks.
   *
   * @return the track manager
  */
  getTrackManager(): TrackManager;
  /**
   * Gets the {@link PlayerAdapter} instance, a utility class for adapting platform Player
   * instances to {@link User}s.
   *
   * The `playerClass` parameter must be equal to the class or interface used by the
   * server platform to represent players.
   *
   * Specifically:
   *
   * 
   * 
   * `org.bukkit.entity.Player`
   * `net.md_5.bungee.api.connection.ProxiedPlayer`
   * `org.spongepowered.api/entity.living.player.Player`
   * `net.minecraft.server.network.ServerPlayerEntity` (Fabric)
   * `cn.nukkit.Player`
   * `com.velocitypowered.api.proxy.Player`
   * 
   *
   * @param playerClass the class used by the platform to represent players
   * @param  the player class type
   * @return the player adapter
   * @throws IllegalArgumentException if the player class is not correct
   * @since 5.1
  */
  getPlayerAdapter<T>(playerClass: Class<T>): PlayerAdapter<T>;
  /**
   * Gets the {@link Platform}, which represents the server platform the
   * plugin is running on.
   *
   * @return the platform
  */
  getPlatform(): Platform;
  /**
   * Gets the {@link PluginMetadata}, responsible for providing metadata about
   * the LuckPerms plugin currently running.
   *
   * @return the plugin metadata
  */
  getPluginMetadata(): PluginMetadata;
  /**
   * Gets the {@link EventBus}, used for subscribing to internal LuckPerms
   * events.
   *
   * @return the event bus
  */
  getEventBus(): EventBus;
  /**
   * Gets the {@link MessagingService}, used to dispatch updates throughout a
   * network of servers running the plugin.
   *
   * Not all instances of LuckPerms will have a messaging service setup and
   * configured.
   *
   * @return the messaging service instance, if present.
  */
  getMessagingService(): Optional<MessagingService>;
  /**
   * Gets the {@link ActionLogger}, responsible for saving and broadcasting
   * defined actions occurring on the platform.
   *
   * @return the action logger
  */
  getActionLogger(): ActionLogger;
  /**
   * Gets the {@link ContextManager}, responsible for managing
   * {@link ContextCalculator}s, and calculating applicable contexts.
   *
   * @return the context manager
  */
  getContextManager(): ContextManager;
  /**
   * Gets the {@link MetaStackFactory}.
   *
   * The metastack factory provides methods for retrieving
   * {@link MetaStackElement}s and constructing
   * {@link MetaStackDefinition}s.
   *
   * @return the meta stack factory
  */
  getMetaStackFactory(): MetaStackFactory;
  /**
   * Schedules the execution of an update task, and returns an encapsulation
   * of the task as a {@link CompletableFuture}.
   *
   * The exact actions performed in an update task remains an
   * implementation detail of the plugin, however, as a minimum, it is
   * expected to perform a full reload of user, group and track data, and
   * ensure that any changes are fully applied and propagated.
   *
   * @return a future
  */
  runUpdateTask(): CompletableFuture<Void>;
  /**
   * Registers a {@link MessengerProvider} for use by the platform.
   *
   * Note that the mere action of registering a provider doesn't
   * necessarily mean that it will be used.
   *
   * @param messengerProvider the messenger provider.
  */
  registerMessengerProvider(messengerProvider: MessengerProvider): void;
  /**
   * Gets the {@link NodeBuilderRegistry}.
   *
   * @return the node builder registry
  */
  getNodeBuilderRegistry(): NodeBuilderRegistry;
  /**
   * Gets the {@link QueryOptionsRegistry}.
   *
   * @return the query options registry
   * @since 5.1
  */
  getQueryOptionsRegistry(): QueryOptionsRegistry;
  /**
   * Gets the {@link NodeMatcherFactory}.
   *
   * @return the node matcher factory
   * @since 5.1
  */
  getNodeMatcherFactory(): NodeMatcherFactory;
}

}
declare module 'net.luckperms.api.event.node' {
import { DataType } from 'net.luckperms.api.model.data';
import { PermissionHolder } from 'net.luckperms.api.model';
import { LuckPermsEvent } from 'net.luckperms.api.event';
import { Set } from 'java.util';
import { Node } from 'net.luckperms.api.node';
/**
 * Called when a node is added to/removed from a user/group
*/
export class NodeMutateEvent extends LuckPermsEvent {
  /**
   * Gets the target of the event
   *
   * @return the event target
  */
  getTarget(): PermissionHolder;
  /**
   * Gets the data type that was mutated.
   *
   * @return the data type
  */
  getDataType(): DataType;
  /**
   * Gets an immutable copy of the holders data before the change
   *
   * @return the data before the change
  */
  getDataBefore(): Set<Node>;
  /**
   * Gets an immutable copy of the holders data after the change
   *
   * @return the data after the change
  */
  getDataAfter(): Set<Node>;
  /**
   * Gets whether the target of this event is a {@link User}
   *
   * This is equivalent to checking if getTarget() instanceof User
   *
   * @return if the event is targeting a user
  */
  isUser(): boolean;
  /**
   * Gets whether the target of this event is a {@link Group}
   *
   * This is equivalent to checking if getTarget() instanceof Group
   *
   * @return if the event is targeting a group
  */
  isGroup(): boolean;
}
/**
 * Called when a node is added to a holder
*/
export class NodeAddEvent extends NodeMutateEvent {
  /**
   * Gets the node that was added
   *
   * @return the node that was added
  */
  getNode(): Node;
  getDataBefore(): Set<Node>;
}
/**
 * Called when a holder has their nodes cleared
*/
export class NodeClearEvent extends NodeMutateEvent {
  /**
   * Gets the nodes that were cleared
   *
   * @return the nodes that were removed
   * @since 5.3
  */
  getNodes(): Set<Node>;
  getDataBefore(): Set<Node>;
}
/**
 * Called when a node is removed from a holder
*/
export class NodeRemoveEvent extends NodeMutateEvent {
  /**
   * Gets the node that was removed
   *
   * @return the node that was removed
  */
  getNode(): Node;
  getDataBefore(): Set<Node>;
}

}
declare module 'net.luckperms.api.cacheddata' {
import { Node } from 'net.luckperms.api.node';
import { Optional, SortedMap, List, Map } from 'java.util';
import { QueryOptions } from 'net.luckperms.api.query';
import { Tristate } from 'net.luckperms.api.util';
import { Function } from 'java.util.function';
import { MetaStackDefinition } from 'net.luckperms.api.metastacking';
import { SuffixNode, PrefixNode, MetaNode } from 'net.luckperms.api.node.types';
import { Container } from 'net.luckperms.api.cacheddata.CachedDataManager';
/**
 * Represents the result of a cached data lookup.
 *
 * You can find "the holder that has the node that caused this result"
 * using the following code:
 * 
 * 
 *  * public static {@link net.luckperms.api.model.PermissionHolder.Identifier} holderThatHasTheNodeThatCausedTheResult(Result<?, ?> result) {
 *     {@link Node} node = result.node();
 *     if (node == null) {
 *         return null;
 *     }
 *     {@link net.luckperms.api.node.metadata.types.InheritanceOriginMetadata} origin = node.getMetadata(InheritanceOriginMetadata.KEY).orElse(null);
 *     if (origin == null) {
 *         return null;
 *     }
 *     return origin.getOrigin();
 * }
 * 
 *
 * Combined with the node itself, this is all the information needed to determine
 * the root cause of the result.
 * 
 *
 * The nullability of {@link #result()} is purposely undefined to allow the
 * flexibility for methods using {@link Result} to declare it. In general, if the `T` type
 * has a nullable/undefined value, then the return of {@link #result()} will be non-null,
 * and if not, it will be nullable.
 *
 * @param  the result type
 * @param  the node type
 * @since 5.4
*/
export class Result<T, N> {
  /**
   * Gets the underlying result.
   *
   * @return the underlying result
  */
  result(): T;
  /**
   * Gets the node that caused the result.
   *
   * @return the causing node
  */
  node(): N | null;
}
/**
 * Holds cached lookup data for a given set of query options.
 *
 * All calls will account for inheritance, as well as any default data
 * provided by the platform. These calls are heavily cached and are therefore
 * fast.
*/
export class CachedData {
  /**
   * Gets the query options this container is holding data for.
   *
   * @return the query options this container is caching
  */
  getQueryOptions(): QueryOptions;
}
/**
 * Holds cached permission and meta lookup data for a {@link PermissionHolder}.
 *
 * All calls will account for inheritance, as well as any default data
 * provided by the platform. These calls are heavily cached and are therefore
 * fast.
*/
export class CachedDataManager {
  /**
   * Gets the manager for {@link CachedPermissionData}.
   *
   * @return the permission data manager
  */
  permissionData(): Container<CachedPermissionData>;
  /**
   * Gets the manager for {@link CachedMetaData}.
   *
   * @return the meta data manager
  */
  metaData(): Container<CachedMetaData>;
  /**
   * Gets PermissionData from the cache, using the given query options.
   *
   * @param queryOptions the query options
   * @return a permission data instance
  */
  getPermissionData(queryOptions: QueryOptions): CachedPermissionData;
  /**
   * Gets MetaData from the cache, using the given query options.
   *
   * @param queryOptions the query options
   * @return a meta data instance
  */
  getMetaData(queryOptions: QueryOptions): CachedMetaData;
  /**
   * Invalidates all cached {@link CachedPermissionData} and {@link CachedMetaData}
   * instances.
  */
  invalidate(): void;
  /**
   * Invalidates all underlying permission calculators.
   *
   * Can be called to allow for an update in defaults.
  */
  invalidatePermissionCalculators(): void;
}
/**
 * Holds cached meta lookup data for a specific set of contexts.
 * 
 * Meta data refers to {@link PrefixNode prefixes}, {@link SuffixNode suffixes} and
 * {@link MetaNode meta (options)} held by a permission holder.
 *
 * All calls will account for inheritance, as well as any default data
 * provided by the platform. These calls are heavily cached and are therefore
 * fast.
*/
export class CachedMetaData extends CachedData {
  /**
   * Query a meta value for the given `key`.
   * 
   * This method will always return a {@link Result}, but the
   * {@link Result#result() inner result} {@link String} will be null if a value
   * for the given key was not found.
   *
   * @param key the key
   * @return a result containing the value
   * @since 5.4
  */
  queryMetaValue(key: string): Result<string, MetaNode>;
  /**
   * Gets a value for the given meta key.
   * 
   * If no such meta value exists for the given key, `null` is returned.
   *
   * @param key the key
   * @return the value
  */
  getMetaValue(key: string): string | null;
  /**
   * Gets a value for the given meta key, and runs it through the given `transformer`.
   *
   * If no such meta value exists, an {@link Optional#empty() empty optional} is returned.
   * (the transformer will never be passed a null argument)
   *
   * The transformer is allowed to throw {@link IllegalArgumentException} or return null. This
   * will also result in an {@link Optional#empty() empty optional} being returned.
   *
   * For example, to parse and return an integer meta value, use:
   *      *     getMetaValue("my-int-val", Integer::parseInt).orElse(0);
   * 
   *
   * @param key the key
   * @param valueTransformer the transformer used to transform the value
   * @param  the type of the transformed result
   * @return the meta value
   * @since 5.3
  */
  getMetaValue<T>(key: string, valueTransformer: Function<string, T>): Optional<T>;
  /**
   * Query for a prefix.
   * 
   * This method uses the rules defined by the {@link #getPrefixStackDefinition() prefix stack}
   * to produce a {@link String} output.
   * 
   * Assuming the default configuration is used, this will usually be the value of the
   * holder's highest priority prefix node.
   * 
   * This method will always return a {@link Result}, but the
   * {@link Result#result() inner result} {@link String} will be null if
   * a the resultant prefix stack contained no elements.
   *
   * @return a result containing the prefix
   * @since 5.4
  */
  queryPrefix(): Result<string, PrefixNode>;
  /**
   * Gets the prefix.
   * 
   * This method uses the rules defined by the {@link #getPrefixStackDefinition() prefix stack}
   * to produce a {@link String} output.
   * 
   * Assuming the default configuration is used, this will usually be the value of the
   * holder's highest priority prefix node.
   * 
   * If the resultant prefix stack contained no elements, `null` is returned.
   *
   * @return a prefix string, or null
  */
  getPrefix(): string | null;
  /**
   * Query for a suffix.
   *
   * This method uses the rules defined by the {@link #getSuffixStackDefinition() suffix stack}
   * to produce a {@link String} output.
   *
   * Assuming the default configuration is used, this will usually be the value of the
   * holder's highest priority suffix node.
   *
   * This method will always return a {@link Result}, but the
   * {@link Result#result() inner result} {@link String} will be null if
   * a the resultant suffix stack contained no elements.
   *
   * @return a result containing the suffix
   * @since 5.4
  */
  querySuffix(): Result<string, SuffixNode>;
  /**
   * Gets the suffix.
   *
   * This method uses the rules defined by the {@link #getSuffixStackDefinition() suffix stack}
   * to produce a {@link String} output.
   *
   * Assuming the default configuration is used, this will usually be the value of the
   * holder's highest priority suffix node.
   *
   * If the resultant suffix stack contained no elements, `null` is returned.
   *
   * @return a suffix string, or null
  */
  getSuffix(): string | null;
  /**
   * Gets a map of all accumulated {@link MetaNode meta}.
   *
   * Prefer using the {@link #getMetaValue(String)} method for querying values.
   *
   * @return a map of meta
  */
  getMeta(): Map<string, string[]>;
  /**
   * Gets a sorted map of all accumulated {@link PrefixNode prefixes}.
   *
   * Prefer using the {@link #getPrefix()} method for querying.
   *
   * @return a sorted map of prefixes
  */
  getPrefixes(): SortedMap<number, string>;
  /**
   * Gets a sorted map of all accumulated {@link SuffixNode suffixes}.
   *
   * Prefer using the {@link #getSuffix()} method for querying.
   *
   * @return a sorted map of suffixes
  */
  getSuffixes(): SortedMap<number, string>;
  /**
   * Gets the name of the holders primary group.
   *
   * Will return `null` for Group holder types.
   *
   * @return the name of the primary group
   * @since 5.1
  */
  getPrimaryGroup(): string | null;
  /**
   * Gets the definition used for the prefix stack.
   *
   * @return the definition used for the prefix stack
  */
  getPrefixStackDefinition(): MetaStackDefinition;
  /**
   * Gets the definition used for the suffix stack.
   *
   * @return the definition used for the suffix stack
  */
  getSuffixStackDefinition(): MetaStackDefinition;
}
/**
 * Holds cached permission lookup data for a specific set of contexts.
 *
 * All calls will account for inheritance, as well as any default data
 * provided by the platform. These calls are heavily cached and are therefore
 * fast.
*/
export class CachedPermissionData extends CachedData {
  /**
   * Performs a permission check for the given `permission` node.
   *
   * This check is equivalent to the "hasPermission" method call on most platforms.
   * You can use {@link Tristate#asBoolean()} if you need a truthy result.
   *
   * @param permission the permission node
   * @return a result containing the tristate
   * @throws NullPointerException if permission is null
   * @since 5.4
  */
  queryPermission(permission: string): Result<Tristate, Node>;
  /**
   * Performs a permission check for the given `permission` node.
   *
   * This check is equivalent to the "hasPermission" method call on most platforms.
   * You can use {@link Tristate#asBoolean()} if you need a truthy result.
   *
   * @param permission the permission node
   * @return a tristate result
   * @throws NullPointerException if permission is null
  */
  checkPermission(permission: string): Tristate;
  /**
   * Invalidates the underlying permission calculator cache.
   *
   * Can be called to allow for an update in defaults.
  */
  invalidateCache(): void;
  /**
   * Gets an immutable copy of the permission map backing the permission calculator
   *
   * @return an immutable set of permissions
  */
  getPermissionMap(): Map<string, boolean>;
}

}
declare module 'net.luckperms.api.platform.Platform' {
import { Enum } from 'java.lang';
/**
 * Represents a type of platform which LuckPerms can run on.
*/
export class Type extends Enum<Type> {
  static readonly BUKKIT: Type;
  static readonly BUNGEECORD: Type;
  static readonly SPONGE: Type;
  static readonly NUKKIT: Type;
  static readonly VELOCITY: Type;
  static readonly FABRIC: Type;
  static valueOf(name: string): Type;
  static values(): Type[];
  /**
   * Gets a readable name for the platform type.
   *
   * @return a readable name
  */
  getFriendlyName(): string;
}

}
declare module 'net.luckperms.api.node.types.SuffixNode' {
import { Builder as net_luckperms_api_node_types_ChatMetaNode_Builder } from 'net.luckperms.api.node.types.ChatMetaNode';
import { SuffixNode } from 'net.luckperms.api.node.types';
/**
 * A {@link SuffixNode} builder.
*/
export class Builder extends net_luckperms_api_node_types_ChatMetaNode_Builder<SuffixNode, Builder> {
  /**
   * Sets the suffix.
   *
   * @param suffix the suffix
   * @return the builder
  */
  suffix(suffix: string): Builder;
}

}
declare module 'net.luckperms.api.track.DemotionResult' {
import { Enum } from 'java.lang';
/**
 * The result status
*/
export class Status extends Enum<Status> {
  /**
   * Indicates that the user was demoted normally.
  */
  static readonly SUCCESS: Status;
  /**
   * Indicates that the user was removed from the first group in the track.
   *
   * This usually occurs when the user is currently on the first group, and was demoted
   * "over the start" of the track.
  */
  static readonly REMOVED_FROM_FIRST_GROUP: Status;
  /**
   * Indicates that the previous group in the track no longer exists.
  */
  static readonly MALFORMED_TRACK: Status;
  /**
   * Indicates that the user isn't a member of any of the groups on this track.
  */
  static readonly NOT_ON_TRACK: Status;
  /**
   * Indicates that the implementation was unable to determine the users current position on
   * this track.
   *
   * This usually occurs when the user is on more than one group on the track.
  */
  static readonly AMBIGUOUS_CALL: Status;
  /**
   * An undefined failure occurred.
  */
  static readonly UNDEFINED_FAILURE: Status;
  static valueOf(name: string): Status;
  static values(): Status[];
  wasSuccessful(): boolean;
}

}
declare module 'net.luckperms.api.event.source.Source' {
import { Enum } from 'java.lang';
/**
 * Represents a type of source
*/
export class Type extends Enum<Type> {
  /**
   * Represents an {@link PlatformEntity} source
   *
   * @see EntitySource
  */
  static readonly ENTITY: Type;
  /**
   * Represents an unknown source
  */
  static readonly UNKNOWN: Type;
  static valueOf(name: string): Type;
  static values(): Type[];
}

}
declare module 'net.luckperms.api.model.user' {
import { NodeMatcher } from 'net.luckperms.api.node.matcher';
import { PlayerSaveResult, PermissionHolder } from 'net.luckperms.api.model';
import { HeldNode } from 'net.luckperms.api.node';
import { Set, Collection, List, UUID, Map } from 'java.util';
import { Void } from 'java.lang';
import { CompletableFuture } from 'java.util.concurrent';
import { Consumer } from 'java.util.function';
/**
 * A player which holds permission data.
*/
export class User extends PermissionHolder {
  /**
   * Gets the users unique ID
   *
   * @return the users Mojang assigned unique id
  */
  getUniqueId(): UUID;
  /**
   * Gets the users username
   *
   * Returns null if no username is known for the user.
   *
   * @return the users username
  */
  getUsername(): string | null;
  /**
   * Gets the users current primary group.
   *
   * The result of this method depends on which method is configured for primary group
   * calculation. It may not be the same as any value set through
   * {@link #setPrimaryGroup(String)}.
   *
   * @return the users primary group
  */
  getPrimaryGroup(): string;
  /**
   * Sets a users primary group.
   *
   * This modifies the "stored value" for the users primary group, which may or may not
   * actually take effect, depending on how the platform is calculating primary groups.
   *
   * @param group the new primary group
   * @return if the change was applied successfully
   * @throws IllegalStateException if the user is not a member of that group
   * @throws NullPointerException  if the group is null
  */
  setPrimaryGroup(primaryGroup: string);
}
/**
 * Represents the object responsible for managing {@link User} instances.
 *
 * Note that User instances are automatically loaded for online players.
 * It's likely that offline players will not have an instance pre-loaded.
 *
 * All blocking methods return {@link CompletableFuture}s, which will be
 * populated with the result once the data has been loaded/saved asynchronously.
 * Care should be taken when using such methods to ensure that the main server
 * thread is not blocked.
 *
 * Methods such as {@link CompletableFuture#get()} and equivalent should
 * not be called on the main server thread. If you need to use
 * the result of these operations on the main server thread, register a
 * callback using {@link CompletableFuture#thenAcceptAsync(Consumer, Executor)}.
*/
export class UserManager {
  /**
   * Loads a user from the plugin's storage provider into memory.
   *
   * @param uniqueId the uuid of the user
   * @param username the username, if known
   * @return the resultant user
   * @throws NullPointerException if the uuid is null
  */
  loadUser(uniqueId: UUID, username: string | null): CompletableFuture<User>;
  /**
   * Loads a user from the plugin's storage provider into memory.
   *
   * @param uniqueId the uuid of the user
   * @return the resultant user
   * @throws NullPointerException if the uuid is null
  */
  loadUser(uniqueId: UUID): CompletableFuture<User>;
  /**
   * Uses the LuckPerms cache to find a uuid for the given username.
   *
   * This lookup is case insensitive.
   *
   * @param username the username
   * @return a uuid, could be null
   * @throws NullPointerException     if either parameters are null
   * @throws IllegalArgumentException if the username is invalid
  */
  lookupUniqueId(username: string): CompletableFuture<UUID>;
  /**
   * Uses the LuckPerms cache to find a username for the given uuid.
   *
   * @param uniqueId the uuid
   * @return a username, could be null
   * @throws NullPointerException     if either parameters are null
   * @throws IllegalArgumentException if the username is invalid
  */
  lookupUsername(uniqueId: UUID): CompletableFuture<string>;
  /**
   * Saves a user's data back to the plugin's storage provider.
   *
   * You should call this after you make any changes to a user.
   *
   * @param user the user to save
   * @return a future to encapsulate the operation.
   * @throws NullPointerException  if user is null
   * @throws IllegalStateException if the user instance was not obtained from LuckPerms.
  */
  saveUser(user: User): CompletableFuture<Void>;
  /**
   * Loads a user from the plugin's storage provider, applies the given `action`,
   * then saves the user's data back to storage.
   *
   * This method effectively calls {@link #loadUser(UUID)}, followed by the `action`,
   * then {@link #saveUser(User)}, and returns an encapsulation of the whole process as a
   * {@link CompletableFuture}. 
   *
   * @param uniqueId the uuid of the user
   * @param action the action to apply to the user
   * @return a future to encapsulate the operation
   * @since 5.1
  */
  modifyUser(uniqueId: UUID, action: Consumer<any>): CompletableFuture<Void>;
  /**
   * Saves data about a player to the uuid caching system.
   *
   * @param uniqueId     the users mojang unique id
   * @param username the users username
   * @return the result of the operation.
   * @throws NullPointerException     if either parameters are null
   * @throws IllegalArgumentException if the username is invalid
  */
  savePlayerData(uniqueId: UUID, username: string): CompletableFuture<PlayerSaveResult>;
  /**
   * Deletes any data about a given player from the uuid caching system.
   *
   * Note that this method does not affect any saved user/permissions data.
   *
   * @param uniqueId the users mojang unique id
   * @return a future encapsulating the result of the operation
   * @since 5.2
  */
  deletePlayerData(uniqueId: UUID): CompletableFuture<Void>;
  /**
   * Gets a set all "unique" user UUIDs.
   *
   * "Unique" meaning the user isn't just a member of the "default" group.
   *
   * @return a set of uuids
  */
  getUniqueUsers(): CompletableFuture<Set<UUID>>;
  /**
   * Searches the {@link User#data() normal node maps} of all known {@link User}s for {@link Node}
   * entries matching the given {@link NodeMatcher matcher}.
   *
   * @param matcher the matcher
   * @return the entries which matched
   * @since 5.1
  */
  searchAll<T>(matcher: NodeMatcher<T>): CompletableFuture<Map<UUID, Collection<T>>>;
  /**
   * Searches for a list of users with a given permission.
   *
   * @param permission the permission to search for
   * @return a list of held permissions
   * @throws NullPointerException if the permission is null
   * @deprecated Use {@link #searchAll(NodeMatcher)} instead
  */
  getWithPermission(permission: string): CompletableFuture<HeldNode<UUID>[]>;
  /**
   * Gets a loaded user.
   *
   * @param uniqueId the uuid of the user to get
   * @return a {@link User} object, if one matching the uuid is loaded, or null if not
   * @throws NullPointerException if the uuid is null
  */
  getUser(uniqueId: UUID): User | null;
  /**
   * Gets a loaded user.
   *
   * @param username the username of the user to get
   * @return a {@link User} object, if one matching the uuid is loaded, or null if not
   * @throws NullPointerException if the name is null
  */
  getUser(username: string): User | null;
  /**
   * Gets a set of all loaded users.
   *
   * @return a {@link Set} of {@link User} objects
  */
  getLoadedUsers(): Set<User>;
  /**
   * Check if a user is loaded in memory
   *
   * @param uniqueId the uuid to check for
   * @return true if the user is loaded
   * @throws NullPointerException if the uuid is null
  */
  isLoaded(uniqueId: UUID): boolean;
  /**
   * Unload a user from the internal storage, if they're not currently online.
   *
   * @param user the user to unload
   * @throws NullPointerException if the user is null
  */
  cleanupUser(user: User): void;
}

}
declare module 'net.luckperms.api.metastacking' {
import { ChatMetaType } from 'net.luckperms.api.node';
import { Optional, List } from 'java.util';
import { OptionKey } from 'net.luckperms.api.query';
import { ChatMetaNode } from 'net.luckperms.api.node.types';
/**
 * Factory to create meta stack elements and definitions.
*/
export class MetaStackFactory {
  /**
   * Parses a standard {@link MetaStackElement} from string, using the pre-defined elements in the plugin.
   *
   * @param definition the definition
   * @return the parsed element, if present
  */
  fromString(definition: string): Optional<MetaStackElement>;
  /**
   * Parses a list of {@link MetaStackElement}s from string, using the pre-defined elements in the plugin.
   *
   * If an element cannot be parsed, it will not be included in the resultant list.
   *
   * @param definitions the definition strings
   * @return a list of parsed elements
  */
  fromStrings(definitions: string[]): MetaStackElement[];
  /**
   * Creates a new {@link MetaStackDefinition} with the given properties.
   *
   * @param elements                 the elements to be included in the stack.
   * @param duplicateRemovalFunction the duplicate removal function
   * @param startSpacer              the spacer to be included at the start of the stacks output
   * @param middleSpacer             the spacer to be included between stack elements
   * @param endSpacer                the spacer to be included at the end of the stacks output
   * @return the new stack definition instance
  */
  createDefinition(elements: MetaStackElement[], duplicateRemovalFunction: DuplicateRemovalFunction, startSpacer: string, middleSpacer: string, endSpacer: string): MetaStackDefinition;
}
/**
 * Represents an element within a {@link MetaStackDefinition}.
 *
 * The element itself does not contain any mutable state.
*/
export class MetaStackElement {
  /**
   * Returns if the given node should be accumulated onto the stack.
   *
   * @param type    the type of entry being accumulated
   * @param node    the node being considered
   * @param current the current value being used. If this returns true, the current value will be replaced by this entry
   * @return true if the node should be accumulated into this element, replacing the current value
  */
  shouldAccumulate(type: ChatMetaType, node: ChatMetaNode<any, any>, current: ChatMetaNode<any, any> | null): boolean;
}
/**
 * Represents a meta stack model, consisting of a chain of elements, separated by spacers.
 *
 * The resultant string is constructed as:
 * [start spacer] [element] [middle spacer] [element] [middle spacer] [element] [end spacer]
 *
 * Definitions can be passed to a users UserData instance using MetaContexts, and the result of this stack can be
 * retrieved from the returned MetaData instance.
*/
export class MetaStackDefinition {
  /**
   * The {@link OptionKey} for the prefix {@link MetaStackDefinition}.
  */
  static readonly PREFIX_STACK_KEY: OptionKey<MetaStackDefinition>;
  /**
   * The {@link OptionKey} for the suffix {@link MetaStackDefinition}.
  */
  static readonly SUFFIX_STACK_KEY: OptionKey<MetaStackDefinition>;
  /**
   * Gets an immutable list of the elements in this stack definition
   *
   * @return the elements in this stack
  */
  getElements(): MetaStackElement[];
  /**
   * Gets the duplicate removal function, applied to the entries before
   * formatting takes place.
   *
   * @return the duplicate removal function
  */
  getDuplicateRemovalFunction(): DuplicateRemovalFunction;
  /**
   * Gets the spacer string added before any stack elements
   *
   * @return the start spacer
  */
  getStartSpacer(): string;
  /**
   * Gets the spacer added between stack elements
   *
   * @return the middle spacer
  */
  getMiddleSpacer(): string;
  /**
   * Gets the spacer added after any stack elements
   *
   * @return the end spacer
  */
  getEndSpacer(): string;
}
/**
 * Functional interface which removes duplicate entries from a list.
 *
 * Used by LuckPerms to remove duplicate entries from a MetaStack.
*/
export class DuplicateRemovalFunction {
  /**
   * Removes duplicates from the given list, according to the behaviour
   * of the function.
   *
   * @param list the entries
   * @param  the type of entries
  */
  processDuplicates<T>(list: T[]): void;
  /**
   * A {@link DuplicateRemovalFunction} that does not remove duplicates.
  */
  static readonly RETAIN_ALL: DuplicateRemovalFunction;
  /**
   * A {@link DuplicateRemovalFunction} that retains only the first occurrence.
  */
  static readonly FIRST_ONLY: DuplicateRemovalFunction;
  /**
   * A {@link DuplicateRemovalFunction} that retains only the last occurrence.
  */
  static readonly LAST_ONLY: DuplicateRemovalFunction;
}

}
declare module 'net.luckperms.api.model.group' {
import { PermissionHolder } from 'net.luckperms.api.model';
import { NodeMatcher } from 'net.luckperms.api.node.matcher';
import { HeldNode } from 'net.luckperms.api.node';
import { Set, Optional, Collection, List, OptionalInt, Map } from 'java.util';
import { Void } from 'java.lang';
import { QueryOptions } from 'net.luckperms.api.query';
import { CompletableFuture } from 'java.util.concurrent';
import { Consumer } from 'java.util.function';
/**
 * Represents the object responsible for managing {@link Group} instances.
 *
 * All blocking methods return {@link CompletableFuture}s, which will be
 * populated with the result once the data has been loaded/saved asynchronously.
 * Care should be taken when using such methods to ensure that the main server
 * thread is not blocked.
 *
 * Methods such as {@link CompletableFuture#get()} and equivalent should
 * not be called on the main server thread. If you need to use
 * the result of these operations on the main server thread, register a
 * callback using {@link CompletableFuture#thenAcceptAsync(Consumer, Executor)}.
*/
export class GroupManager {
  /**
   * Creates a new group in the plugin's storage provider and then loads it
   * into memory.
   *
   * If a group by the same name already exists, it will be loaded.
   *
   * @param name the name of the group
   * @return the resultant group
   * @throws NullPointerException if the name is null
  */
  createAndLoadGroup(name: string): CompletableFuture<Group>;
  /**
   * Loads a group from the plugin's storage provider into memory.
   *
   * Returns an {@link Optional#empty() empty optional} if the group does
   * not exist.
   *
   * @param name the name of the group
   * @return the resultant group
   * @throws NullPointerException if the name is null
  */
  loadGroup(name: string): CompletableFuture<Optional<Group>>;
  /**
   * Saves a group's data back to the plugin's storage provider.
   *
   * You should call this after you make any changes to a group.
   *
   * @param group the group to save
   * @return a future to encapsulate the operation.
   * @throws NullPointerException  if group is null
   * @throws IllegalStateException if the group instance was not obtained from LuckPerms.
  */
  saveGroup(group: Group): CompletableFuture<Void>;
  /**
   * Permanently deletes a group from the plugin's storage provider.
   *
   * @param group the group to delete
   * @return a future to encapsulate the operation.
   * @throws NullPointerException  if group is null
   * @throws IllegalStateException if the group instance was not obtained from LuckPerms.
  */
  deleteGroup(group: Group): CompletableFuture<Void>;
  /**
   * Loads (or creates) a group from the plugin's storage provider, applies the given
   * `action`, then saves the group's data back to storage.
   *
   * This method effectively calls {@link #createAndLoadGroup(String)}, followed by the
   * `action`, then {@link #saveGroup(Group)}, and returns an encapsulation of the whole
   * process as a {@link CompletableFuture}. 
   *
   * @param name the name of the group
   * @param action the action to apply to the group
   * @return a future to encapsulate the operation
   * @since 5.1
  */
  modifyGroup(name: string, action: Consumer<any>): CompletableFuture<Void>;
  /**
   * Loads all groups into memory.
   *
   * @return a future to encapsulate the operation.
  */
  loadAllGroups(): CompletableFuture<Void>;
  /**
   * Searches the {@link Group#data() normal node maps} of all known {@link Group}s for {@link Node}
   * entries matching the given {@link NodeMatcher matcher}.
   *
   * @param matcher the matcher
   * @return the entries which matched
   * @since 5.1
  */
  searchAll<T>(matcher: NodeMatcher<T>): CompletableFuture<Map<string, Collection<T>>>;
  /**
   * Searches for a list of groups with a given permission.
   *
   * @param permission the permission to search for
   * @return a list of held permissions, or null if the operation failed
   * @throws NullPointerException if the permission is null
   * @deprecated Use {@link #searchAll(NodeMatcher)} instead
  */
  getWithPermission(permission: string): CompletableFuture<HeldNode<string>[]>;
  /**
   * Gets a loaded group.
   *
   * @param name the name of the group to get
   * @return a {@link Group} object, if one matching the name exists, or null if not
   * @throws NullPointerException if the name is null
  */
  getGroup(name: string): Group | null;
  /**
   * Gets a set of all loaded groups.
   *
   * @return a {@link Set} of {@link Group} objects
  */
  getLoadedGroups(): Set<Group>;
  /**
   * Check if a group is loaded in memory
   *
   * @param name the name to check for
   * @return true if the group is loaded
   * @throws NullPointerException if the name is null
  */
  isLoaded(name: string): boolean;
}
/**
 * An inheritable holder of permission data.
*/
export class Group extends PermissionHolder {
  /**
   * Get the name of the group
   *
   * @return the name of the group
  */
  getName(): string;
  /**
   * Gets the groups "display name", if it has one that differs from it's actual name.
   *
   * The lookup is made using the current servers active context.
   *
   * Will return null if the groups display name is equal to it's
   * {@link #getName() actual name}.
   *
   * @return the display name
  */
  getDisplayName(): string | null;
  /**
   * Gets the groups "display name", if it has one that differs from it's actual name.
   *
   * Will return null if the groups display name is equal to it's
   * {@link #getName() actual name}.
   *
   * @param queryOptions the query options to lookup in
   * @return the display name
  */
  getDisplayName(queryOptions: QueryOptions): string | null;
  /**
   * Gets the weight of this group, if present.
   *
   * @return the group weight
  */
  getWeight(): OptionalInt;
}

}
declare module 'net.luckperms.api.event.player.lookup' {
import { LuckPermsEvent } from 'net.luckperms.api.event';
import { UUID } from 'java.util';
import { ResultEvent } from 'net.luckperms.api.event.type';
import { AtomicBoolean } from 'java.util.concurrent.atomic';
/**
 * Called when the platform needs a username for a given unique id.
 *
 * @since 5.3
*/
export class UsernameLookupEvent extends LuckPermsEvent {
  /**
   * Gets the {@link UUID unique id} being looked up.
   *
   * @return the unique id
  */
  getUniqueId(): UUID;
  /**
   * Sets the result username.
   *
   * @param username the username
  */
  setUsername(username: string | null);
}
export interface UsernameLookupEvent extends LuckPermsEvent, ResultEvent<string> {}
/**
 * Called when the platform needs a unique id for a given username.
 *
 * @since 5.3
*/
export class UniqueIdLookupEvent extends LuckPermsEvent {
  /**
   * Gets the username being looked up.
   *
   * @return the username
  */
  getUsername(): string;
  /**
   * Sets the result unique id.
   *
   * @param uniqueId the unique id
  */
  setUniqueId(uniqueId: UUID | null);
}
export interface UniqueIdLookupEvent extends LuckPermsEvent, ResultEvent<UUID> {}
/**
 * Called when the validity of a username is being tested.
 *
 * @since 5.3
*/
export class UsernameValidityCheckEvent extends LuckPermsEvent {
  /**
   * Gets the username being tested.
   *
   * @return the username
  */
  getUsername(): string;
  /**
   * Gets the current validity state for the username.
   *
   * @return the validity state
  */
  validityState(): AtomicBoolean;
  /**
   * Gets if the username is currently considered to be valid.
   *
   * @return if the username is valid
  */
  isValid(): boolean;
  /**
   * Sets if the username should be considered valid or not.
   *
   * @param valid whether the username is valid
  */
  setValid(valid: boolean): void;
}
/**
 * Called when the platform needs to determine the type of a player's {@link UUID unique id}.
 *
 * @since 5.3
*/
export class UniqueIdDetermineTypeEvent extends LuckPermsEvent {
  /**
   * The players UUID has been obtained by authenticating with the Mojang session servers.
   *
   * Usually indicated by the UUID being {@link UUID#version() version} 4.
  */
  static readonly TYPE_AUTHENTICATED: string;
  /**
   * The players UUID has not been obtained through authentication, and instead is likely based
   * on the username they connected with.
   *
   * Usually indicated by the UUID being {@link UUID#version() version} 3.
  */
  static readonly TYPE_UNAUTHENTICATED: string;
  /**
   * The players UUID most likely belongs to a NPC (non-player character).
   *
   * Usually indicated by the UUID being {@link UUID#version() version} 2.
   *
   * @since 5.4
  */
  static readonly TYPE_NPC: string;
  /**
   * Unknown UUID type.
   *
   * @since 5.4
  */
  static readonly TYPE_UNKNOWN: string;
  /**
   * Gets the {@link UUID unique id} being queried.
   *
   * @return the unique id
  */
  getUniqueId(): UUID;
  /**
   * Gets the current result unique id type.
   *
   * @return the type
  */
  getType(): string;
  /**
   * Sets the result unique id type.
   *
   * @param type the type
  */
  setType(type: string);
}
export interface UniqueIdDetermineTypeEvent extends LuckPermsEvent, ResultEvent<string> {}

}
declare module 'net.luckperms.api.model.PlayerSaveResult' {
import { Enum } from 'java.lang';
/**
 * The various states the result can take
*/
export class Outcome extends Enum<Outcome> {
  /**
   * There was no existing data saved for either the uuid or username
  */
  static readonly CLEAN_INSERT: Outcome;
  /**
   * There was existing data for the player, no change was needed.
  */
  static readonly NO_CHANGE: Outcome;
  /**
   * There was already a record for the UUID saved, but it was for a different username.
   *
   * This is normal, players are able to change their usernames.
  */
  static readonly USERNAME_UPDATED: Outcome;
  /**
   * There was already a record for the username saved, but it was under a different uuid.
   *
   * This is a bit of a cause for concern. It's possible that "player1" has changed
   * their username to "player2", and "player3" has changed their username to "player1".
   * If the original "player1" doesn't join after changing their name, this conflict could
   * occur.
   *
   * However, what's more likely is that the server is not setup to authenticate
   * correctly. Usually this is a problem with BungeeCord "ip-forwarding", but could be
   * that the user of the plugin is running a network off a shared database with one
   * server in online mode and another in offline mode.
  */
  static readonly OTHER_UNIQUE_IDS_PRESENT_FOR_USERNAME: Outcome;
  static valueOf(name: string): Outcome;
  static values(): Outcome[];
}

}
declare module 'net.luckperms.api.event' {
import { AutoCloseable, Class } from 'java.lang';
import { Set } from 'java.util';
import { Consumer } from 'java.util.function';
import { LuckPerms } from 'net.luckperms.api';
/**
 * Represents a subscription to a {@link LuckPermsEvent}.
 *
 * @param  the event class
*/
export class EventSubscription<T> extends AutoCloseable {
  /**
   * Gets the class this handler is listening to
   *
   * @return the event class
  */
  getEventClass(): Class<T>;
  /**
   * Returns true if this handler is active
   *
   * @return true if this handler is still active
  */
  isActive(): boolean;
  /**
   * Unregisters this handler from the event bus.
  */
  close(): void;
  /**
   * Gets the event consumer responsible for handling the event
   *
   * @return the event consumer
  */
  getHandler(): Consumer<any>;
}
/**
 * A superinterface for all LuckPerms events.
*/
export class LuckPermsEvent {
  /**
   * Get the API instance this event was dispatched from
   *
   * @return the api instance
  */
  getLuckPerms(): LuckPerms;
  /**
   * Gets the type of the event.
   *
   * @return the type of the event
  */
  getEventType(): Class<LuckPermsEvent>;
}
/**
 * The LuckPerms event bus.
 *
 * Used to subscribe (or "listen") to LuckPerms events.
*/
export class EventBus {
  /**
   * Registers a new subscription to the given event.
   *
   * The returned {@link EventSubscription} instance encapsulates the subscription state. It has
   * methods which can be used to terminate the subscription, or view stats about the nature of
   * the subscription.
   *
   * @param eventClass the event class
   * @param handler    the event handler
   * @param         the event class
   * @return an event handler instance representing this subscription
  */
  subscribe<T>(eventClass: Class<T>, handler: Consumer<any>): EventSubscription<T>;
  /**
   * Registers a new subscription to the given event.
   *
   * The returned {@link EventSubscription} instance encapsulates the subscription state. It has
   * methods which can be used to terminate the subscription, or view stats about the nature of
   * the subscription.
   *
   * Unlike {@link #subscribe(Class, Consumer)}, this method accepts an additional parameter
   * for `plugin`. This object must be a "plugin" instance on the platform, and is used to
   * automatically {@link EventSubscription#close() unregister} the subscription when the
   * corresponding plugin is disabled.
   *
   * @param         the event class
   * @param plugin     a plugin instance to bind the subscription to.
   * @param eventClass the event class
   * @param handler    the event handler
   * @return an event handler instance representing this subscription
  */
  subscribe<T>(plugin: any, eventClass: Class<T>, handler: Consumer<any>): EventSubscription<T>;
  /**
   * Gets a set of all registered handlers for a given event.
   *
   * @param eventClass the event to find handlers for
   * @param         the event class
   * @return an immutable set of event handlers
  */
  getSubscriptions<T>(eventClass: Class<T>): Set<EventSubscription<T>>;
}

}
declare module 'net.luckperms.api.context' {
import { Builder as net_luckperms_api_query_QueryOptions_Builder } from 'net.luckperms.api.query.QueryOptions';
import { Set, Optional, Iterator, Map } from 'java.util';
import { Enum, Iterable } from 'java.lang';
import { Builder } from 'net.luckperms.api.context.ImmutableContextSet';
import { QueryMode, OptionKey, QueryOptions } from 'net.luckperms.api.query';
import { User } from 'net.luckperms.api.model.user';
import { Function, Supplier } from 'java.util.function';
/**
 * Some default context keys used by the plugin.
*/
export class DefaultContextKeys {
  /**
   * The context key used to denote the name of the subjects server.
  */
  static readonly SERVER_KEY: string;
  /**
   * The context key used to denote the name of the subjects world.
  */
  static readonly WORLD_KEY: string;
  /**
   * The context key used to denote the dimension type of the subjects world.
   *
   * Possible values: overworld, the_nether, the_end
   *
   * @since 5.3
  */
  static readonly DIMENSION_TYPE_KEY: string;
  /**
   * The context key used to denote the subjects gamemode.
   *
   * Possible values: survival, creative, adventure, spectator
   *
   * @since 5.3
  */
  static readonly GAMEMODE_KEY: string;
}
/**
 * Extension of {@link ContextCalculator} which provides the same context
 * regardless of the subject.
*/
export class StaticContextCalculator extends ContextCalculator<any> {
  /**
   * Creates a new {@link StaticContextCalculator} that provides a single context.
   *
   * @param key the key of the context provided by the calculator
   * @param valueFunction the function used to compute the corresponding value
   *                      for each query. A context will not be "accumulated"
   *                      if the value returned is null.
   * @return the resultant calculator
  */
  static forSingleContext(key: string, valueFunction: Supplier<string>): StaticContextCalculator;
  /**
   * Submits any contexts this calculator determines to be applicable.
   *
   * Care should be taken to ensure implementations of this method meet the
   * general requirements for {@link ContextCalculator}, defined in the class
   * doc.
   *
   * @param consumer the {@link ContextConsumer} to submit contexts to
  */
  calculate(consumer: ContextConsumer): void;
  calculate(target: any, consumer: ContextConsumer): void;
  /**
   * Creates a new {@link ContextCalculator} that provides a single context.
   *
   * @param key the key of the context provided by the calculator
   * @param valueFunction the function used to compute the corresponding value
   *                      for each query. A context will not be "accumulated"
   *                      if the value returned is null.
   * @param  the contextual type
   * @return the resultant calculator
  */
  static forSingleContext<T>(key: string, valueFunction: Function<T, string>): ContextCalculator<T>;
  /**
   * Submits any contexts this calculator determines to be applicable to
   * the `target` contextual subject.
   *
   * Care should be taken to ensure implementations of this method meet the
   * general requirements for {@link ContextCalculator}, defined in the class
   * doc.
   *
   * @param target the target contextual subject for this operation
   * @param consumer the {@link ContextConsumer} to submit contexts to
  */
  calculate(target: T, consumer: ContextConsumer): void;
}
/**
 * A mutable implementation of {@link ContextSet}.
*/
export class MutableContextSet extends ContextSet {
  /**
   * Creates a new empty MutableContextSet.
   *
   * @return a new MutableContextSet
  */
  static create(): MutableContextSet;
  /**
   * Creates a {@link MutableContextSet} from a context pair.
   *
   * @param key   the key
   * @param value the value
   * @return a new MutableContextSet containing one context pair
   * @throws NullPointerException if key or value is null
  */
  static of(key: string, value: string): MutableContextSet;
  /**
   * Adds a context to this set.
   *
   * @param key   the key to add
   * @param value the value to add
   * @throws NullPointerException if the key or value is null
  */
  add(key: string, value: string): void;
  /**
   * Adds a context to this set.
   *
   * @param entry the entry to add
   * @throws NullPointerException if the entry is null
  */
  add(entry: Context): void;
  /**
   * Adds the contexts contained in the given {@link Iterable} to this set.
   *
   * @param iterable an iterable of key value context pairs
   * @throws NullPointerException if iterable is null
  */
  addAll(iterable: Iterable<Context>): void;
  /**
   * Adds all the contexts in another {@link ContextSet} to this set.
   *
   * @param contextSet the set to add from
   * @throws NullPointerException if the contextSet is null
  */
  addAll(contextSet: ContextSet): void;
  /**
   * Removes a context from this set.
   *
   * @param key   the key to remove
   * @param value the value to remove
   * @throws NullPointerException if the key or value is null
  */
  remove(key: string, value: string): void;
  /**
   * Removes all contexts from this set with the given key.
   *
   * @param key the key to remove
   * @throws NullPointerException if the key is null
  */
  removeAll(key: string): void;
  /**
   * Removes all contexts from the set.
  */
  clear(): void;
}
/**
 * Represents an individual context pair.
 *
 * Context keys and values may not be null or empty. A key/value will be
 * deemed empty if it's length is zero, or if it consists of only space
 * characters.
 *
 * @see ContextSet
*/
export class Context {
  /**
   * Tests whether `key` is valid.
   *
   * Context keys and values may not be null or empty. A key/value will be
   * deemed empty if it's length is zero, or if it consists of only space
   * characters.
   *
   * An exception is thrown when an invalid key is added to a {@link ContextSet}.
   *
   * @param key the key to test
   * @return true if valid, false otherwise.
   * @since 5.1
  */
  static isValidKey(key: string | null): boolean;
  /**
   * Tests whether `value` is valid.
   *
   * Context keys and values may not be null or empty. A key/value will be
   * deemed empty if it's length is zero, or if it consists of only space
   * characters.
   *
   * An exception is thrown when an invalid value is added to a {@link ContextSet}.
   *
   * @param value the value to test
   * @return true if valid, false otherwise.
   * @since 5.1
  */
  static isValidValue(value: string | null): boolean;
  /**
   * Gets the context key.
   *
   * @return the key
  */
  getKey(): string;
  /**
   * Gets the context value
   *
   * @return the value
  */
  getValue(): string;
}
/**
 * Functional interface that accepts context key value pairs.
*/
export class ContextConsumer {
  /**
   * Accepts a context pair.
   *
   * @param key the key
   * @param value the value
  */
  accept(key: string, value: string): void;
  /**
   * Accepts a context pair.
   *
   * @param context the context
  */
  accept(context: Context): void;
  /**
   * Accepts a context set.
   *
   * @param contextSet the context set
  */
  accept(contextSet: ContextSet): void;
}
/**
 * An immutable implementation of {@link ContextSet}.
*/
export class ImmutableContextSet extends ContextSet {
  /**
   * Creates an {@link ImmutableContextSet.Builder}.
   *
   * @return a new ImmutableContextSet builder
  */
  static builder(): Builder;
  /**
   * Returns an empty {@link ImmutableContextSet}.
   *
   * @return an empty ImmutableContextSet
  */
  static empty(): ImmutableContextSet;
  /**
   * Creates an {@link ImmutableContextSet} from a context pair.
   *
   * @param key   the key
   * @param value the value
   * @return a new ImmutableContextSet containing one context pair
   * @throws NullPointerException if key or value is null
  */
  static of(key: string, value: string): ImmutableContextSet;
  /**
   * @deprecated This context set is already immutable!
  */
  immutableCopy(): ImmutableContextSet;
}
/**
 * Mode for determining whether a {@link ContextSet} satisfies another.
 *
 * @since 5.2
 * @see ContextSet#isSatisfiedBy(ContextSet, ContextSatisfyMode)
*/
export class ContextSatisfyMode extends Enum<ContextSatisfyMode> {
  /**
   * Mode where a {@link ContextSet} A will be satisfied by another set B, if at least one of the
   * key-value entries per key in A are also in B.
   *
   * For example, given A = {server=survival, world=overworld, world=nether},
   * another set `X` will satisfy `A` if `X` contains
   * server=survival AND (world=overworld OR world=nether).
  */
  static readonly AT_LEAST_ONE_VALUE_PER_KEY: ContextSatisfyMode;
  /**
   * Mode where a {@link ContextSet} A will be satisfied by another set B, if all key-value
   * entries in A are also in B.
   *
   * For example, given A = {server=survival, world=overworld, world=nether},
   * another set `X` will satisfy `A` if `X` contains
   * server=survival AND world=overworld AND world=nether.
  */
  static readonly ALL_VALUES_PER_KEY: ContextSatisfyMode;
  static valueOf(name: string): ContextSatisfyMode;
  static values(): ContextSatisfyMode[];
  /**
   * The {@link OptionKey} for {@link ContextSatisfyMode}.
  */
  static readonly KEY: OptionKey<ContextSatisfyMode>;
}
/**
 * Calculates the contexts applicable for a contextual subject.
 *
 * Implementations of this interface should satisfy the following
 * requirements:
 * 
 *     Context lookups should be fast: lookup methods are likely to
 *     be invoked frequently, and should therefore be fast to execute. If
 *     determining the current contexts involves a particularly time consuming
 *     lookup (database queries, network requests, etc), then such results
 *     should be cached ahead of time.
 *
 *     Context lookups should be thread-safe: lookups will sometimes
 *     be performed from "async" threads, and therefore should not access any
 *     part of the server only safe for access from a sync context. If
 *     necessary, such results should be determined ahead of time and stored in
 *     a thread-safe collection for retrieval later.
 *
 *     Context lookups should not query active contexts: doing so is
 *     likely to result in a stack overflow, or thread deadlock. Care should be
 *     taken to avoid (indirect) calls to the same calculator.
 * 
 * 
 *
 * Calculators should be registered using
 * {@link ContextManager#registerCalculator(ContextCalculator)}.
*/
export class ContextCalculator<T> {
  /**
   * Creates a new {@link ContextCalculator} that provides a single context.
   *
   * @param key the key of the context provided by the calculator
   * @param valueFunction the function used to compute the corresponding value
   *                      for each query. A context will not be "accumulated"
   *                      if the value returned is null.
   * @param  the contextual type
   * @return the resultant calculator
  */
  static forSingleContext<T>(key: string, valueFunction: Function<T, string>): ContextCalculator<T>;
  /**
   * Submits any contexts this calculator determines to be applicable to
   * the `target` contextual subject.
   *
   * Care should be taken to ensure implementations of this method meet the
   * general requirements for {@link ContextCalculator}, defined in the class
   * doc.
   *
   * @param target the target contextual subject for this operation
   * @param consumer the {@link ContextConsumer} to submit contexts to
  */
  calculate(target: T, consumer: ContextConsumer): void;
  /**
   * Gets a {@link ContextSet}, containing some/all of the contexts this
   * calculator could potentially submit.
   *
   * The result of this call is primarily intended on providing
   * suggestions to end users when defining permissions.
   *
   * @return a set of potential contexts
  */
  estimatePotentialContexts(): ContextSet;
}
/**
 * A set of contexts.
 *
 * Context in the most basic sense simply means the circumstances where
 * something will apply.
 *
 * A single "context" consists of a key and a value, both strings. The key
 * describes the type of the context, and the value represents what the key is
 * set to.
 *
 * For example, a context with `key=world` and `value=world_nether`
 * describes that a subject is in the "world_nether" world.
 *
 * Contexts are exposed to end users and manipulated when managing permissions.
 * For this reason, context keys should strike a balance between being descriptive
 * and succinct.
 *
 * Context keys and values are case-insensitive, and will be automatically
 * converted to {@link String#toLowerCase() lowercase} when added to a
 * context set. Keys and values cannot be null or empty (len=0 or consisting of
 * only whitespace).
 *
 * If a context key is formed of more than one word, the parts should be
 * separated by the '`-`' character. (e.g. "`server-type`")
 *
 * If a context key is likely to conflict with another plugin, it should be
 * appropriately namespaced using the name of the plugin providing the context.
 * The namespace should be at the start of the context key, and separated using
 * the '`:`' character. (e.g. "`worldguard:region`" for WorldGuard
 * regions)
 *
 * Contexts can be combined with each other to form so called
 * "context sets" - simply a collection of context pairs.
 *
 * Two default ContextSet implementations are provided.
 * {@link MutableContextSet} allows the addition and removal of context keys
 * after construction, and {@link ImmutableContextSet} does not.
*/
export class ContextSet extends Iterable<Context> {
  /**
   * Gets if this {@link ContextSet} is immutable.
   *
   * The state of immutable instances will never change.
   *
   * @return true if the set is immutable
  */
  isImmutable(): boolean;
  /**
   * Returns an immutable representation of this {@link ContextSet}.
   *
   * If the set is already immutable, the same object will be returned.
   * If the set is mutable, an immutable copy will be made.
   *
   * @return an immutable representation of this set
  */
  immutableCopy(): ImmutableContextSet;
  /**
   * Creates a mutable copy of this {@link ContextSet}.
   *
   * A new copy is returned regardless of the
   * {@link #isImmutable() mutability} of this set.
   *
   * @return a mutable ContextSet
  */
  mutableCopy(): MutableContextSet;
  /**
   * Returns a {@link Set} of {@link Context}s representing the current
   * state of this {@link ContextSet}.
   *
   * The returned set is immutable, and is a copy of the current set.
   * (will not update live)
   *
   * @return an immutable set
  */
  toSet(): Set<Context>;
  /**
   * Returns a {@link Map} representing the current state of this
   * {@link ContextSet}.
   *
   * The returned set is immutable, and is a copy of the current set.
   * (will not update live)
   *
   * @return a map
  */
  toMap(): Map<string, Set<string>>;
  /**
   * Returns a {@link Map} loosely representing the current state of
   * this {@link ContextSet}.
   *
   * The returned map is immutable, and is a copy of the current set.
   * (will not update live)
   *
   * As a single context key can be mapped to multiple values, this method
   * may not be a true representation of the set.
   *
   * @return an immutable map
   * @deprecated Deprecated because the returned map may not contain all data in the ContextSet
  */
  toFlattenedMap(): Map<string, string>;
  /**
   * Returns an {@link Iterator} over each of the context pairs in this set.
   *
   * The returned iterator represents the state of the set at the time of creation. It is not
   * updated as the set changes.
   *
   * The iterator does not support {@link Iterator#remove()} calls.
   *
   * @return an iterator
  */
  iterator(): Iterator<Context>;
  /**
   * Returns if the {@link ContextSet} contains at least one value for the
   * given key.
   *
   * @param key the key to check for
   * @return true if the set contains a value for the key
   * @throws NullPointerException if the key is null
  */
  containsKey(key: string): boolean;
  /**
   * Returns a {@link Set} of the values mapped to the given key.
   *
   * The returned set is immutable, and only represents the current state
   * of the {@link ContextSet}. (will not update live)
   *
   * @param key the key to get values for
   * @return a set of values
   * @throws NullPointerException if the key is null
  */
  getValues(key: string): Set<string>;
  /**
   * Returns any value from this {@link ContextSet} matching the key, if present.
   *
   * Note that context keys can be mapped to multiple values.
   * Use {@link #getValues(String)} to retrieve all associated values.
   *
   * @param key the key to find values for
   * @return an optional containing any match
  */
  getAnyValue(key: string): Optional<string>;
  /**
   * Returns if the {@link ContextSet} contains a given context pairing.
   *
   * @param key   the key to look for
   * @param value the value to look for
   * @return true if the set contains the context pair
   * @throws NullPointerException if the key or value is null
  */
  contains(key: string, value: string): boolean;
  /**
   * Returns if the {@link ContextSet} contains a given context pairing.
   *
   * @param entry the entry to look for
   * @return true if the set contains the context pair
   * @throws NullPointerException if the key or value is null
  */
  contains(entry: Context): boolean;
  /**
   * Returns if the {@link ContextSet} contains any of the given context pairings.
   *
   * @param key the key to look for
   * @param values the values to look for
   * @return true if the set contains any of the pairs
   * @since 5.2
  */
  containsAny(key: string, values: Iterable<string>): boolean;
  /**
   * Returns if this {@link ContextSet} is "satisfied" by another set.
   *
   * {@link ContextSatisfyMode#AT_LEAST_ONE_VALUE_PER_KEY} is the mode used by this method.
   *
   * @param other the other set
   * @return true if this context set is satisfied by the other
  */
  isSatisfiedBy(other: ContextSet): boolean;
  /**
   * Returns if this {@link ContextSet} is "satisfied" by another set, according to the given
   * `mode`.
   *
   * @param other the other set
   * @param mode the mode to use
   * @return true if this context set is satisfied by the other
   * @since 5.2
  */
  isSatisfiedBy(other: ContextSet, mode: ContextSatisfyMode): boolean;
  /**
   * Returns if the {@link ContextSet} is empty.
   *
   * @return true if the set is empty
  */
  isEmpty(): boolean;
  /**
   * Gets the number of context pairs in the {@link ContextSet}.
   *
   * @return the size of the set
  */
  size(): number;
}
/**
 * Manages {@link ContextCalculator}s, and calculates applicable contexts for a
 * given type.
 *
 * This interface accepts {@link Object} types as a parameter to avoid having to depend
 * on specific server implementations. In all cases, the "player" or "subject" type for
 * the platform must be used.
 *
 * Specifically:
 *
 * 
 * 
 * `org.bukkit.entity.Player`
 * `net.md_5.bungee.api.connection.ProxiedPlayer`
 * `org.spongepowered.api.service.permission.Subject`
 * `net.minecraft.server.network.ServerPlayerEntity` (Fabric)
 * `cn.nukkit.Player`
 * `com.velocitypowered.api.proxy.Player`
 * 
*/
export class ContextManager {
  /**
   * Queries the ContextManager for current context values for the subject.
   *
   * @param subject the subject
   * @return the applicable context for the subject
  */
  getContext(subject: any): ImmutableContextSet;
  /**
   * Queries the ContextManager for current context values for the given User.
   *
   * This will only return a value if the player corresponding to the
   * {@link User} is online.
   *
   * If you need to obtain a {@link ImmutableContextSet} instance
   * regardless, you should initially try this method, and then fallback on
   * {@link #getStaticContext()}.
   *
   * @param user the user
   * @return the applicable context for the subject
  */
  getContext(user: User): Optional<ImmutableContextSet>;
  /**
   * Gets the contexts from the static calculators in this manager.
   *
   * Static calculators provide the same context for all subjects, and are
   * marked as such when registered.
   *
   * @return the current active static contexts
  */
  getStaticContext(): ImmutableContextSet;
  /**
   * Creates a new {@link QueryOptions.Builder}.
   *
   * @param mode the mode
   * @return a new query options builder
  */
  queryOptionsBuilder(mode: QueryMode): net_luckperms_api_query_QueryOptions_Builder;
  /**
   * Obtains current {@link QueryOptions} for the subject.
   *
   * @param subject the subject
   * @return the query options for the subject
  */
  getQueryOptions(subject: any): QueryOptions;
  /**
   * Obtains current {@link QueryOptions} for the given User.
   *
   * This will only return a value if the player corresponding to the
   * {@link User} is online.
   *
   * If you need to obtain a {@link QueryOptions} instance regardless, you should
   * initially try this method, and then fallback on {@link #getStaticQueryOptions()}.
   *
   * @param user the user
   * @return the query options for the subject
  */
  getQueryOptions(user: User): Optional<QueryOptions>;
  /**
   * Gets the static query options, using the registered static context calculators.
   *
   * @return the current static query options
  */
  getStaticQueryOptions(): QueryOptions;
  /**
   * Registers a context calculator with the manager.
   *
   * @param calculator the calculator
  */
  registerCalculator(calculator: ContextCalculator<any>): void;
  /**
   * Unregisters a context calculator with the manager.
   *
   * @param calculator the calculator
  */
  unregisterCalculator(calculator: ContextCalculator<any>): void;
  /**
   * Signal to the {@link ContextManager} that a `subject`s
   * current contexts have changed.
   *
   * It is not strictly necessary to make a call to this method every time a context
   * changes.
   *
   * @param subject the subject
   * @since 5.2
  */
  signalContextUpdate(subject: any): void;
  /**
   * Gets the {@link ContextSetFactory}, responsible for creating
   * {@link ContextSet} instances.
   *
   * @return the context set factory
  */
  getContextSetFactory(): ContextSetFactory;
  /**
   * Invalidates the lookup cache for a given subject
   *
   * @param subject the subject
   * @deprecated Use {@link #signalContextUpdate(Object)} instead
  */
  invalidateCache(subject: any): void;
}

}
declare module 'net.luckperms.api.node' {
import { Optional } from 'java.util';
import { Enum } from 'java.lang';
import { Builder } from 'net.luckperms.api.node.types.ChatMetaNode';
import { Predicate } from 'java.util.function';
import { RegexPermissionNode, ChatMetaNode, SuffixNode, InheritanceNode, DisplayNameNode, PrefixNode, WeightNode, MetaNode, PermissionNode } from 'net.luckperms.api.node.types';
/**
 * Represents a type of chat meta
*/
export class ChatMetaType extends Enum<ChatMetaType> {
  /**
   * Represents a prefix
  */
  static readonly PREFIX: ChatMetaType;
  /**
   * Represents a suffix
  */
  static readonly SUFFIX: ChatMetaType;
  static valueOf(name: string): ChatMetaType;
  static values(): ChatMetaType[];
  /**
   * Gets the {@link NodeType} for the {@link ChatMetaType}.
   *
   * @return the node type
  */
  nodeType(): NodeType<ChatMetaNode<any, any>>;
  /**
   * Creates a {@link ChatMetaNode.Builder} for the {@link ChatMetaType}.
   *
   * @return a builder
  */
  builder(): Builder<any, any>;
  /**
   * Creates a {@link ChatMetaNode.Builder} for the {@link ChatMetaType}.
   *
   * @param value the value to set
   * @param priority the priority to set
   * @return a builder
  */
  builder(value: string, priority: number): Builder<any, any>;
  toString(): string;
}
/**
 * Represents a type of {@link Node}.
*/
export class NodeType<T> {
  /**
   * Node type for {@link PermissionNode}.
  */
  static readonly PERMISSION: NodeType<PermissionNode>;
  /**
   * Node type for {@link RegexPermissionNode}.
  */
  static readonly REGEX_PERMISSION: NodeType<RegexPermissionNode>;
  /**
   * Node type for {@link InheritanceNode}.
  */
  static readonly INHERITANCE: NodeType<InheritanceNode>;
  /**
   * Node type for {@link PrefixNode}.
  */
  static readonly PREFIX: NodeType<PrefixNode>;
  /**
   * Node type for {@link SuffixNode}.
  */
  static readonly SUFFIX: NodeType<SuffixNode>;
  /**
   * Node type for {@link MetaNode}.
  */
  static readonly META: NodeType<MetaNode>;
  /**
   * Node type for {@link WeightNode}.
  */
  static readonly WEIGHT: NodeType<WeightNode>;
  /**
   * Node type for {@link DisplayNameNode}.
  */
  static readonly DISPLAY_NAME: NodeType<DisplayNameNode>;
  /**
   * Node type for {@link ChatMetaNode}.
   *
   * This is an abstract type, and therefore will never
   * be returned from {@link Node#getType()}.
  */
  static readonly CHAT_META: NodeType<ChatMetaNode<any, any>>;
  /**
   * Node type for {@link ChatMetaNode} or {@link MetaNode}.
   *
   * This is an abstract type, and therefore will never
   * be returned from {@link Node#getType()}.
  */
  static readonly META_OR_CHAT_META: NodeType<Node>;
  /**
   * Gets a name for the node type.
   *
   * @return a name
  */
  name(): string;
  /**
   * Returns if the passed node matches the type
   *
   * @param node the node to test
   * @return true if the node has the same type
  */
  matches(node: Node): boolean;
  /**
   * Casts the given {@link Node} to the type defined by the {@link NodeType}.
   *
   * An {@link IllegalArgumentException} is thrown if the node to cast does
   * not {@link #matches(Node) match} the type.
   *
   * @param node the node to cast
   * @return the casted node
   * @throws IllegalArgumentException if the node to cast does not match the type
  */
  cast(node: Node): T;
  /**
   * Attempts to cast the given {@link Node} to the type defined by the
   * {@link NodeType}.
   *
   * Returns an {@link Optional#empty() empty optional} if the node to cast
   * does not {@link #matches(Node) match} the type.
   *
   * @param node the node to cast
   * @return an optional, possibly containing a casted node
  */
  tryCast(node: Node): Optional<T>;
  /**
   * Returns a {@link Predicate}, returning whether a {@link Node}
   * {@link #matches(Node) matches} this type.
   *
   * @return a predicate for the {@link #matches(Node)} method.
  */
  predicate(): Predicate<Node>;
  /**
   * Returns a {@link Predicate}, returning whether a {@link Node}
   * {@link #matches(Node) matches} this type, and passes the given
   * `and` {@link Predicate}.
   *
   * @param and a predicate to AND with the result of the type match check
   * @return a matching predicate, ANDed with the given predicate parameter
  */
  predicate(and: Predicate<any>): Predicate<Node>;
}
/**
 * A relationship between a {@link PermissionHolder} and a {@link Node}.
 *
 * @param  the identifier type of the holder
 * @deprecated The only usages of this interface are also deprecated.
*/
export class HeldNode<T> {
  /**
   * Gets the holder of the node
   *
   * @return the holder
  */
  getHolder(): T;
  /**
   * Gets the node
   *
   * @return the node
  */
  getNode(): Node;
}
/**
 * An equality test for determining if two nodes are to be considered equal.
 *
 * Recall that {@link Node}s have 4 key attributes: key, value, context, expiry.
 *
 * In the default {@link Node#equals(Object)} implementation (equivalent to {@link #EXACT}),
 * all 4 of these key attributes are considered. However, there are occasions where such strict
 * equality checking is not desired, hence the use of this class.
 *
 * {@link NodeEqualityPredicate}s can either be used inline, by directly calling the
 * {@link #areEqual(Node, Node)} method, or can be passed as a parameter to the
 * {@link Node#equals(Node, NodeEqualityPredicate)} method. Either approach is valid, and both will
 * result in the same result.
 *
 * Generally, implementations of this interface should fulfil the same
 * requirements as the {@link Object#equals(Object)} contract.
*/
export class NodeEqualityPredicate {
  /**
   * Returns if the two nodes are equal.
   *
   * This method should avoid making calls to {@link Node#equals(Node, NodeEqualityPredicate)}
   * with `this` as the second argument, directly or otherwise.
   *
   * @param o1 the first node
   * @param o2 the second node
   * @return true if equal
  */
  areEqual(o1: Node, o2: Node): boolean;
  /**
   * Returns a {@link Predicate}, returning true if the tested node is equal
   * to the one given, according to the {@link NodeEqualityPredicate}.
   *
   * @param node the given node
   * @return a predicate
  */
  equalTo(node: Node): Predicate<Node>;
  /**
   * Represents an exact match.
   *
   * Returns true if: (and)
   * 
   * 
   * {@link Node#getKey() key} = key
   * {@link Node#getValue() value} = value
   * {@link Node#getContexts() context} = context
   * {@link Node#getExpiry() expiry} = expiry
   * 
   *
   * All 4 attributes of the nodes must match to be considered equal.
   *
   * This is the default form of equality, used by {@link Node#equals(Object)}.
  */
  static readonly EXACT: NodeEqualityPredicate;
  /**
   * Only the {@link Node#getKey() key}s need match, all other attributes are ignored.
  */
  static readonly ONLY_KEY: NodeEqualityPredicate;
  /**
   * All attributes must match, except for {@link Node#getValue() value}, which is ignored.
   *
   * Returns true if: (and)
   * 
   * 
   * {@link Node#getKey() key} = key
   * {@link Node#getContexts() context} = context
   * {@link Node#getExpiry() expiry} = expiry
   * 
  */
  static readonly IGNORE_VALUE: NodeEqualityPredicate;
  /**
   * All attributes must match, except for the {@link Node#getExpiry() expiry time}, which is
   * ignored.
   *
   * Note that with this setting, whether a node has an expiry or not is still considered.
   *
   * Returns true if: (and)
   * 
   * 
   * {@link Node#getKey() key} = key
   * {@link Node#getValue() value} = value
   * {@link Node#getContexts() context} = context
   * {@link Node#hasExpiry() has expiry} = has expiry
   * 
  */
  static readonly IGNORE_EXPIRY_TIME: NodeEqualityPredicate;
  /**
   * All attributes must match, except for {@link Node#getValue() value} and the
   * {@link Node#getExpiry() expiry time}, which are ignored.
   *
   * Note that with this setting, whether a node has an expiry or not is still considered.
   *
   * Returns true if: (and)
   * 
   * 
   * {@link Node#getKey() key} = key
   * {@link Node#getContexts() context} = context
   * {@link Node#hasExpiry() has expiry} = has expiry
   * 
  */
  static readonly IGNORE_EXPIRY_TIME_AND_VALUE: NodeEqualityPredicate;
  /**
   * All attributes must match, except for {@link Node#getValue() value} and the if the node
   * {@link Node#hasExpiry() has an expiry}, which are ignored.
   *
   * Effectively only considers the key and the context.
   *
   * Returns true if: (and)
   * 
   * 
   * {@link Node#getKey() key} = key
   * {@link Node#getContexts() context} = context
   * 
  */
  static readonly IGNORE_VALUE_OR_IF_TEMPORARY: NodeEqualityPredicate;
}
/**
 * A {@link Node}, with its own type and the type of its associated builder
 * defined as a type parameter.
 *
 * @param  the node type
 * @param  the node builder type
*/
export class ScopedNode<N, B> extends Node {
  getType(): NodeType<N>;
  toBuilder(): B;
}

}
declare module 'net.luckperms.api.query' {
import { Enum } from 'java.lang';
/**
 * Represents the type of query associated with a given {@link QueryOptions}.
*/
export class QueryMode extends Enum<QueryMode> {
  /**
   * Contextual query.
   *
   * The query will use the {@link QueryOptions#context() contexts} defined
   * in the {@link QueryOptions} to filter which data is applicable.
  */
  static readonly CONTEXTUAL: QueryMode;
  /**
   * Non-contextual query.
   *
   * The query will use not use contexts to filter which data is
   * applicable.
  */
  static readonly NON_CONTEXTUAL: QueryMode;
  static valueOf(name: string): QueryMode;
  static values(): QueryMode[];
}
/**
 * The flags which can be set for a query.
 *
 * By default (in places like new instances of {@link QueryOptions.Builder} and
 * {@link QueryOptions#defaultContextualOptions()}), all {@link Flag}s are set to true.
*/
export class Flag extends Enum<Flag> {
  /**
   * If parent groups should be resolved
  */
  static readonly RESOLVE_INHERITANCE: Flag;
  /**
   * If global or non-server-specific nodes should be applied
  */
  static readonly INCLUDE_NODES_WITHOUT_SERVER_CONTEXT: Flag;
  /**
   * If global or non-world-specific nodes should be applied
  */
  static readonly INCLUDE_NODES_WITHOUT_WORLD_CONTEXT: Flag;
  /**
   * If global or non-server-specific group memberships should be applied
  */
  static readonly APPLY_INHERITANCE_NODES_WITHOUT_SERVER_CONTEXT: Flag;
  /**
   * If global or non-world-specific group memberships should be applied
  */
  static readonly APPLY_INHERITANCE_NODES_WITHOUT_WORLD_CONTEXT: Flag;
  static valueOf(name: string): Flag;
  static values(): Flag[];
}

}
declare module 'net.luckperms.api.util' {
import { Enum } from 'java.lang';
/**
 * Represents a generic result, which can either be successful or fail.
*/
export class Result {
  /**
   * Instance of {@link Result} which always reports success.
  */
  static readonly GENERIC_SUCCESS: Result;
  /**
   * Instance of {@link Result} which always reports failure.
  */
  static readonly GENERIC_FAILURE: Result;
  /**
   * Gets if the operation which produced this result completed successfully.
   *
   * @return if the result indicates a success
  */
  wasSuccessful(): boolean;
}
/**
 * Represents three different states of a setting.
 *
 * Possible values:
 * 
 * 
 *     {@link #TRUE} - a positive setting
 *     {@link #FALSE} - a negative (negated) setting
 *     {@link #UNDEFINED} - a non-existent setting
 * 
*/
export class Tristate extends Enum<Tristate> {
  /**
   * A value indicating a positive setting
  */
  static readonly TRUE: Tristate;
  /**
   * A value indicating a negative (negated) setting
  */
  static readonly FALSE: Tristate;
  /**
   * A value indicating a non-existent setting
  */
  static readonly UNDEFINED: Tristate;
  static valueOf(name: string): Tristate;
  static values(): Tristate[];
  /**
   * Returns a {@link Tristate} from a boolean
   *
   * @param val the boolean value
   * @return {@link #TRUE} or {@link #FALSE}, if the value is true or false, respectively.
  */
  static of(val: boolean): Tristate;
  /**
   * Returns the value of the Tristate as a boolean.
   *
   * A value of {@link #UNDEFINED} converts to false.
   *
   * @return a boolean representation of the Tristate.
  */
  asBoolean(): boolean;
}

}
declare module 'net.luckperms.api.node.types.ChatMetaNode' {
import { NodeBuilder } from 'net.luckperms.api.node';
/**
 * A {@link ChatMetaNode} builder.
 *
 * @param  the node type
 * @param  the node builder type
*/
export class Builder<N, B> extends NodeBuilder<N, B> {
  /**
   * Sets the priority.
   *
   * @param priority the priority
   * @return the builder
  */
  priority(priority: number): B;
}

}
declare module 'net.luckperms.api.event.log' {
import { LuckPermsEvent } from 'net.luckperms.api.event';
import { UUID } from 'java.util';
import { Cancellable } from 'net.luckperms.api.event.type';
import { Origin as net_luckperms_api_event_log_LogBroadcastEvent_Origin } from 'net.luckperms.api.event.log.LogBroadcastEvent';
import { Action } from 'net.luckperms.api.actionlog';
import { Origin } from 'net.luckperms.api.event.log.LogNotifyEvent';
import { PlatformEntity } from 'net.luckperms.api.platform';
/**
 * Called when a log entry is about to be sent to specific notifiable object on
 * the platform.
 *
 * This event is not called for players without the notify permission,
 * but is called for objects which are ignoring log notifications (called with
 * the cancelled flag set to true).
*/
export class LogNotifyEvent extends LuckPermsEvent {
  /**
   * Gets the log entry to be sent
   *
   * @return the log entry to be sent
  */
  getEntry(): Action;
  /**
   * Gets where the log entry originated from.
   *
   * @return the origin of the log
  */
  getOrigin(): Origin;
  /**
   * Gets the object to be notified.
   *
   * @return the object to notify
  */
  getNotifiable(): PlatformEntity;
}
export interface LogNotifyEvent extends LuckPermsEvent, Cancellable {}
/**
 * Called when a log is about to be published to the storage file/table
*/
export class LogPublishEvent extends LuckPermsEvent {
  /**
   * Gets the log entry to be published
   *
   * @return the log entry to be published
  */
  getEntry(): Action;
}
export interface LogPublishEvent extends LuckPermsEvent, Cancellable {}
/**
 * Called when a log entry is received via the MessagingService
*/
export class LogReceiveEvent extends LuckPermsEvent {
  /**
   * Gets the ID of the log entry being received
   *
   * @return the id of the log entry being received
  */
  getLogId(): UUID;
  /**
   * Gets the log entry being received
   *
   * @return the log entry being received
  */
  getEntry(): Action;
}
/**
 * Called when a log is about to be published to the network via the MessagingService
*/
export class LogNetworkPublishEvent extends LuckPermsEvent {
  /**
   * Gets the ID of the log entry being published
   *
   * @return the id of the log entry being published
  */
  getLogId(): UUID;
  /**
   * Gets the log entry to be published
   *
   * @return the log entry to be published
  */
  getEntry(): Action;
}
export interface LogNetworkPublishEvent extends LuckPermsEvent, Cancellable {}
/**
 * Called when a log entry is about to be sent to notifiable players on the platform
*/
export class LogBroadcastEvent extends LuckPermsEvent {
  /**
   * Gets the log entry to be broadcasted
   *
   * @return the log entry to be broadcasted
  */
  getEntry(): Action;
  /**
   * Gets where the log entry originated from.
   *
   * @return the origin of the log
  */
  getOrigin(): net_luckperms_api_event_log_LogBroadcastEvent_Origin;
}
export interface LogBroadcastEvent extends LuckPermsEvent, Cancellable {}

}
declare module 'net.luckperms.api.track.PromotionResult' {
import { Enum } from 'java.lang';
/**
 * The result status
*/
export class Status extends Enum<Status> {
  /**
   * Indicates that the user was promoted normally.
  */
  static readonly SUCCESS: Status;
  /**
   * Indicates that the user was added to the first group in the track.
   *
   * This usually occurs when the user isn't already on any of the groups in the track.
  */
  static readonly ADDED_TO_FIRST_GROUP: Status;
  /**
   * Indicates that the next group in the track no longer exists.
  */
  static readonly MALFORMED_TRACK: Status;
  /**
   * Indicates that the user is already a member of the group at the end of the track,
   * and as such cannot be promoted any further.
  */
  static readonly END_OF_TRACK: Status;
  /**
   * Indicates that the implementation was unable to determine the users current position on
   * this track.
   *
   * This usually occurs when the user is on more than one group on the track.
  */
  static readonly AMBIGUOUS_CALL: Status;
  /**
   * An undefined failure occurred.
  */
  static readonly UNDEFINED_FAILURE: Status;
  static valueOf(name: string): Status;
  static values(): Status[];
  wasSuccessful(): boolean;
}

}
declare module 'net.luckperms.api.query.dataorder' {
import { DataType } from 'net.luckperms.api.model.data';
import { Enum } from 'java.lang';
import { List, Comparator } from 'java.util';
import { OptionKey } from 'net.luckperms.api.query';
import { Consumer, Predicate } from 'java.util.function';
import { Identifier } from 'net.luckperms.api.model.PermissionHolder';
/**
 * Represents which different {@link DataType}s are used for a query.
 *
 * The {@link DataTypeFilter} enum simply represents some default
 * implementations of the {@link Predicate} required by {@link QueryOptions}
 * and the {@link #values(Predicate)} method.
 *
 * Users are free to implement their own predicate. However, be aware that
 * it is possible that more {@link DataType}s may be added in the future.
 * Ideally the {@link Predicate} implementations should be able to handle these
 * smoothly.
 *
 * @see DataTypeFilterFunction
 * @since 5.2
*/
export class DataTypeFilter extends Enum<DataTypeFilter> {
  /**
   * A data type filter indicating that all {@link DataType}s should be used.
  */
  static readonly ALL: DataTypeFilter;
  /**
   * A data type filter indicating that no {@link DataType}s should be used.
  */
  static readonly NONE: DataTypeFilter;
  /**
   * A data type filter indicating that only {@link DataType#NORMAL} should be used.
  */
  static readonly NORMAL_ONLY: DataTypeFilter;
  /**
   * A data type filter indicating that only {@link DataType#TRANSIENT} should be used.
  */
  static readonly TRANSIENT_ONLY: DataTypeFilter;
  static valueOf(name: string): DataTypeFilter;
  static values(): DataTypeFilter[];
  /**
   * Gets a {@link List} of all {@link DataType}s, filtered by the `predicate`.
   *
   * @param predicate the predicate to filter with
   * @return the list of data types
  */
  static values(predicate: Predicate<any>): DataType[];
}
/**
 * Represents the order in which to query different {@link DataType}s.
 *
 * The {@link DataQueryOrder} enum simply represents some default
 * implementations of the {@link Comparator} required by {@link QueryOptions}
 * and the {@link #queryInOrder(Comparator, Consumer)} or
 * {@link #order(Comparator)} methods.
 *
 * Users are free to implement their own comparator. However, be aware that
 * it is possible that more {@link DataType}s may be added in the future.
 * Ideally the {@link Comparator} implementations should be able to handle these
 * smoothly.
 *
 * @see DataQueryOrderFunction
*/
export class DataQueryOrder extends Enum<DataQueryOrder> {
  /**
   * A data query order indicating that {@link DataType#TRANSIENT} should be queried first.
  */
  static readonly TRANSIENT_FIRST: DataQueryOrder;
  /**
   * A data query order indicating that {@link DataType#TRANSIENT} should be queried last.
  */
  static readonly TRANSIENT_LAST: DataQueryOrder;
  static valueOf(name: string): DataQueryOrder;
  static values(): DataQueryOrder[];
  /**
   * Gets a {@link List} of all {@link DataType}s, in order of greatest to least, as defined by
   * the `comparator`.
   *
   * Equivalent to calling {@link Arrays#sort(Object[], Comparator)} on
   * {@link DataType#values()}, but with the comparator
   * {@link Comparator#reversed() reversed}.
   *
   * @param comparator the comparator
   * @return the ordered data types
  */
  static order(comparator: Comparator<any>): DataType[];
  /**
   * Calls the `action` {@link Consumer} for each {@link DataType}, in
   * the order defined by the `comparator`.
   *
   * @param comparator the comparator
   * @param action the action
  */
  static queryInOrder(comparator: Comparator<any>, action: Consumer<any>): void;
}
/**
 * A function that generates a {@link DataQueryOrder} comparator for
 * {@link PermissionHolder}s as required during inheritance.
*/
export class DataQueryOrderFunction {
  /**
   * The {@link OptionKey} for {@link DataQueryOrderFunction}.
  */
  static readonly KEY: OptionKey<DataQueryOrderFunction>;
  /**
   * Creates a {@link DataQueryOrderFunction} that always returns the given
   * `comparator`.
   *
   * @param comparator the comparator
   * @return the data query order function
   * @since 5.2
  */
  static always(comparator: Comparator<DataType>): DataQueryOrderFunction;
  /**
   * Gets the {@link DataQueryOrder} comparator for the given
   * {@link PermissionHolder.Identifier holder identifier}.
   *
   * @param holderIdentifier the holder identifier
   * @return the comparator to use
  */
  getOrderComparator(holderIdentifier: Identifier): Comparator<DataType>;
}
/**
 * A function that generates a {@link DataTypeFilter} predicate for
 * {@link PermissionHolder}s as required during inheritance.
 *
 * @since 5.2
*/
export class DataTypeFilterFunction {
  /**
   * The {@link OptionKey} for {@link DataTypeFilterFunction}.
  */
  static readonly KEY: OptionKey<DataTypeFilterFunction>;
  /**
   * Creates a {@link DataTypeFilterFunction} that always returns the given
   * `predicate`.
   *
   * @param predicate the predicate
   * @return the data type filter function
  */
  static always(predicate: Predicate<DataType>): DataTypeFilterFunction;
  /**
   * Gets the {@link DataTypeFilter} predicate for the given
   * {@link PermissionHolder.Identifier holder identifier}.
   *
   * @param holderIdentifier the holder identifier
   * @return the predicate to use
  */
  getTypeFilter(holderIdentifier: Identifier): Predicate<DataType>;
}

}
declare module 'net.luckperms.api.event.user' {
import { CachedDataManager } from 'net.luckperms.api.cacheddata';
import { LuckPermsEvent } from 'net.luckperms.api.event';
import { UUID } from 'java.util';
import { Cancellable } from 'net.luckperms.api.event.type';
import { User } from 'net.luckperms.api.model.user';
/**
 * Called when a user is loaded into memory from the storage.
*/
export class UserLoadEvent extends LuckPermsEvent {
  /**
   * Gets the user that was loaded
   *
   * @return the user that was loaded
  */
  getUser(): User;
}
/**
 * Called when a user is about to be unloaded from memory.
 *
 * @since 5.3
*/
export class UserUnloadEvent extends LuckPermsEvent {
  /**
   * Gets the user that is being unloaded
   *
   * @return the user that is being unloaded
  */
  getUser(): User;
}
export interface UserUnloadEvent extends LuckPermsEvent, Cancellable {}
/**
 * Called when a users cached data is refreshed
*/
export class UserDataRecalculateEvent extends LuckPermsEvent {
  /**
   * Gets the user whose data was recalculated
   *
   * @return the user
  */
  getUser(): User;
  /**
   * Gets the data that was recalculated
   *
   * @return the data
  */
  getData(): CachedDataManager;
}
/**
 * Called when the user logs into the network for the first time.
 *
 * Particularly useful for networks with multiple
 * lobbies, who want to welcome a user when they join for the first time.
 *
 * This event is fired before the player has actually joined the game on the async login / auth event. If you want to
 * do something with the user, store the UUID in a set, and then check the set in the PlayerJoinEvent o.e.
 *
 * The users data will not be loaded when this event is called.
*/
export class UserFirstLoginEvent extends LuckPermsEvent {
  /**
   * Gets the UUID of the user
   *
   * @return the uuid of the user
  */
  getUniqueId(): UUID;
  /**
   * Gets the username of the user
   *
   * @return the username of the user
  */
  getUsername(): string;
}
/**
 * Called when a users {@link CachedDataManager} is loaded.
*/
export class UserCacheLoadEvent extends LuckPermsEvent {
  /**
   * Gets the user whose data was loaded
   *
   * @return the user
  */
  getUser(): User;
  /**
   * Gets the data that was loaded
   *
   * @return the loaded data
  */
  getLoadedData(): CachedDataManager;
}

}
declare module 'net.luckperms.api.node.types.RegexPermissionNode' {
import { NodeBuilder } from 'net.luckperms.api.node';
import { Pattern } from 'java.util.regex';
import { RegexPermissionNode } from 'net.luckperms.api.node.types';
/**
 * A {@link RegexPermissionNode} builder.
*/
export class Builder extends NodeBuilder<RegexPermissionNode, Builder> {
  /**
   * Sets the pattern.
   *
   * @param pattern the pattern
   * @return the builder
  */
  pattern(pattern: string): Builder;
  /**
   * Sets the pattern.
   *
   * @param pattern the pattern
   * @return the builder
  */
  pattern(pattern: Pattern): Builder;
}

}
declare module 'net.luckperms.api.node.types.InheritanceNode' {
import { NodeBuilder } from 'net.luckperms.api.node';
import { Group } from 'net.luckperms.api.model.group';
import { InheritanceNode } from 'net.luckperms.api.node.types';
/**
 * A {@link InheritanceNode} builder.
*/
export class Builder extends NodeBuilder<InheritanceNode, Builder> {
  /**
   * Sets the name of the group to inherit.
   *
   * Note that only one of this method and {@link #group(Group)}
   * need be called.
   *
   * @param group the group name
   * @return the builder
  */
  group(group: string): Builder;
  /**
   * Sets the group to inherit.
   *
   * Note that only one of this method and {@link #group(String)}
   * need be called.
   *
   * @param group the group
   * @return the builder
  */
  group(group: Group): Builder;
}

}
declare module 'net.luckperms.api.event.user.track' {
import { LuckPermsEvent } from 'net.luckperms.api.event';
import { Optional } from 'java.util';
import { Enum } from 'java.lang';
import { Sourced } from 'net.luckperms.api.event.type';
import { Track } from 'net.luckperms.api.track';
import { User } from 'net.luckperms.api.model.user';
/**
 * Called when a user is demoted down a track.
 *
 * {@link #getAction()} is always {@link TrackAction#DEMOTION}
*/
export class UserDemoteEvent extends UserTrackEvent {
  getAction(): TrackAction;
}
/**
 * Called when a user interacts with a track through a promotion or demotion
*/
export class UserTrackEvent extends LuckPermsEvent {
  /**
   * Gets the track involved in the event
   *
   * @return the track involved in the event
  */
  getTrack(): Track;
  /**
   * Gets the user who was promoted or demoted
   *
   * @return the user involved in the event
  */
  getUser(): User;
  /**
   * Gets the action performed
   *
   * @return the action performed
  */
  getAction(): TrackAction;
  /**
   * Gets the group the user was promoted/demoted from.
   *
   * May be {@link Optional#empty()} if the user wasn't already placed on the track.
   *
   * @return the group the user was promoted/demoted from
  */
  getGroupFrom(): Optional<string>;
  /**
   * Gets the group the user was promoted/demoted to
   *
   * @return the group the user was promoted/demoted to
  */
  getGroupTo(): Optional<string>;
}
export interface UserTrackEvent extends LuckPermsEvent, Sourced {}
/**
 * Represents the type of action performed in a {@link UserTrackEvent}
*/
export class TrackAction extends Enum<TrackAction> {
  /**
   * The user was promoted up a track
  */
  static readonly PROMOTION: TrackAction;
  /**
   * The user was demoted down a track
  */
  static readonly DEMOTION: TrackAction;
  static valueOf(name: string): TrackAction;
  static values(): TrackAction[];
}
/**
 * Called when a user is promoted up a track.
 *
 * {@link #getAction()} is always {@link TrackAction#PROMOTION}
*/
export class UserPromoteEvent extends UserTrackEvent {
  getAction(): TrackAction;
}

}
declare module 'net.luckperms.api.node.types.MetaNode' {
import { NodeBuilder } from 'net.luckperms.api.node';
import { MetaNode } from 'net.luckperms.api.node.types';
/**
 * A {@link MetaNode} builder.
*/
export class Builder extends NodeBuilder<MetaNode, Builder> {
  /**
   * Sets the meta key.
   *
   * @param key the meta key
   * @return the builder
  */
  key(key: string): Builder;
  /**
   * Sets the meta value.
   *
   * @param value the meta value
   * @return the builder
  */
  value(value: string): Builder;
}

}
declare module 'net.luckperms.api.event.type' {
import { AtomicBoolean, AtomicReference } from 'java.util.concurrent.atomic';
import { Source } from 'net.luckperms.api.event.source';
/**
 * Represents an event with a {@link Source}.
*/
export class Sourced {
  /**
   * Gets the events source.
   *
   * Never returns null. In situations where the source is unknown, a
   * {@link Source} with type {@link Source.Type#UNKNOWN} is returned.
   *
   * @return the source
  */
  getSource(): Source;
}
/**
 * Represents an event that has a result.
 *
 * @param  the type of the result
 * @since 5.3
*/
export class ResultEvent<T> {
  /**
   * Gets an {@link AtomicReference} containing the result.
   *
   * @return the result
  */
  result(): AtomicReference<T>;
  /**
   * Gets if a result has been set for the event.
   *
   * @return if there is a result
  */
  hasResult(): boolean;
}
/**
 * Represents an event that can be cancelled
*/
export class Cancellable {
  /**
   * Gets an {@link AtomicBoolean} holding the cancellation state of the event
   *
   * @return the cancellation
  */
  cancellationState(): AtomicBoolean;
  /**
   * Returns true if the event is currently cancelled.
   *
   * @return if the event is cancelled
  */
  isCancelled(): boolean;
  /**
   * Returns true if the event is not currently cancelled.
   *
   * @return if the event is not cancelled
  */
  isNotCancelled(): boolean;
  /**
   * Sets the cancellation state of the event.
   *
   * @param cancelled the new state
   * @return the previous state
  */
  setCancelled(cancelled: boolean): boolean;
}

}
declare module 'net.luckperms.api.platform.PlatformEntity' {
import { Enum } from 'java.lang';
/**
 * The different types of {@link PlatformEntity}
*/
export class Type extends Enum<Type> {
  /**
   * Represents a player connected to the server
  */
  static readonly PLAYER: Type;
  /**
   * Represents the server console
  */
  static readonly CONSOLE: Type;
  static valueOf(name: string): Type;
  static values(): Type[];
}

}
declare module 'net.luckperms.api.event.log.LogBroadcastEvent' {
import { Enum } from 'java.lang';
/**
 * Represents where a log entry is from
*/
export class Origin extends Enum<Origin> {
  /**
   * Marks a log entry which originated from the current server instance
  */
  static readonly LOCAL: Origin;
  /**
   * Marks a log entry which originated from an API call on the current server instance
  */
  static readonly LOCAL_API: Origin;
  /**
   * Marks a log entry which was sent to this server via the messaging service
  */
  static readonly REMOTE: Origin;
  static valueOf(name: string): Origin;
  static values(): Origin[];
}

}
declare module 'net.luckperms.api.messenger.message' {
/**
 * Represents an outgoing {@link Message}.
 *
 * Outgoing messages are ones which have been generated by this instance.
 * (in other words, they are implemented by LuckPerms)
 *
 * Note that all implementations of this interface are guaranteed to be an
 * instance of one of the interfaces extending {@link Message} in the
 * 'api.messenger.message.type' package.
*/
export class OutgoingMessage extends Message {
  /**
   * Gets an encoded string form of this message.
   *
   * The format of this string is likely to change between versions and
   * should not be depended on.
   *
   * Implementations which want to use a standard method of serialisation
   * can send outgoing messages using the string returned by this method, and
   * pass on the message on the "other side" using
   * {@link IncomingMessageConsumer#consumeIncomingMessageAsString(String)}.
   *
   * @return an encoded string form of the message
  */
  asEncodedString(): string;
}

}
declare module 'net.luckperms.api.cacheddata.CachedDataManager' {
import { Void } from 'java.lang';
import { QueryOptions } from 'net.luckperms.api.query';
import { CompletableFuture } from 'java.util.concurrent';
/**
 * Manages a specific type of {@link CachedData cached data} within
 * a {@link CachedDataManager} instance.
 *
 * @param  the data type
*/
export class Container<T> {
  /**
   * Gets {@link T data} from the cache.
   *
   * @param queryOptions the query options
   * @return a data instance
   * @throws NullPointerException if contexts is null
  */
  get(queryOptions: QueryOptions): T;
  /**
   * Calculates {@link T data}, bypassing the cache.
   *
   * The result of this operation is calculated each time the method is called.
   * The result is not added to the internal cache.
   *
   * It is therefore highly recommended to use {@link #get(QueryOptions)} instead.
   *
   * The use cases of this method are more around constructing one-time
   * instances of {@link T data}, without adding the result to the cache.
   *
   * @param queryOptions the query options
   * @return a data instance
   * @throws NullPointerException if contexts is null
  */
  calculate(queryOptions: QueryOptions): T;
  /**
   * (Re)calculates data for a given context.
   *
   * This method returns immediately in all cases. The (re)calculation is
   * performed asynchronously and applied to the cache in the background.
   *
   * If there was a previous data instance associated with
   * the given {@link QueryOptions}, then that instance will continue to be returned by
   * {@link #get(QueryOptions)} until the recalculation is completed.
   *
   * If there was no value calculated and cached prior to the call of this
   * method, then one will be calculated.
   *
   * @param queryOptions the query options
   * @throws NullPointerException if contexts is null
  */
  recalculate(queryOptions: QueryOptions): void;
  /**
   * (Re)loads permission data for a given context.
   *
   * Unlike {@link #recalculate(QueryOptions)}, this method immediately
   * invalidates any previous data values contained within the cache,
   * and then schedules a task to reload a new data instance to
   * replace the one which was invalidated.
   *
   * The invalidation happens immediately during the execution of this method.
   * The result of the re-computation encapsulated by the future.
   *
   * Subsequent calls to {@link #get(QueryOptions)} will block until
   * the result of this operation is complete.
   *
   * If there was no value calculated and cached prior to the call of this
   * method, then one will be calculated.
   *
   * This method returns a Future so users can optionally choose to wait
   * until the recalculation has been performed.
   *
   * @param queryOptions the query options.
   * @return a future
   * @throws NullPointerException if contexts is null
  */
  reload(queryOptions: QueryOptions): CompletableFuture<T>;
  /**
   * Recalculates data for all known contexts.
   *
   * This method returns immediately. The recalculation is performed
   * asynchronously and applied to the cache in the background.
   *
   * The previous data instances will continue to be returned
   * by {@link #get(QueryOptions)} until the recalculation is completed.
  */
  recalculate(): void;
  /**
   * Reloads permission data for all known contexts.
   *
   * Unlike {@link #recalculate()}, this method immediately
   * invalidates all previous data values contained within the cache,
   * and then schedules a task to reload new data instances to
   * replace the ones which were invalidated.
   *
   * The invalidation happens immediately during the execution of this method.
   * The result of the re-computation encapsulated by the future.
   *
   * Subsequent calls to {@link #get(QueryOptions)} will block until
   * the result of this operation is complete.
   *
   * This method returns a Future so users can optionally choose to wait
   * until the recalculation has been performed.
   *
   * @return a future
  */
  reload(): CompletableFuture<Void>;
  /**
   * Invalidates any cached data instances mapped to the given context.
   *
   * @param queryOptions the queryOptions to invalidate for
  */
  invalidate(queryOptions: QueryOptions): void;
  /**
   * Invalidates all cached data instances.
  */
  invalidate(): void;
}

}
