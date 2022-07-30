declare module 'com.comphenix.protocol.events' {
  import { Enum } from 'java.lang';
  import { UUID } from 'java.util';
  import { Builder } from 'com.comphenix.protocol.events.ListeningWhitelist';
  /**
   * Represents a listener that receives notifications when packets are sending or being received.
   * 
   * Use {@link PacketAdapter} for a simple wrapper around this interface.
   * @author Kristian
  */
  export class PacketListener {
  
  }
  /**
   * Marker containing the serialized packet data seen from the network, or output handlers that will serialize the
   * current packet.
   *
   * @author Kristian
  */
  export class NetworkMarker {
    /**
     * Determine if the given marker has any post listeners.
     *
     * @param marker - the marker to check.
     * @return TRUE if it does, FALSE otherwise.
    */
    static hasPostListeners(marker: NetworkMarker): boolean;
  }
  /**
   * Represents a packet event priority, similar to the Bukkit EventPriority.
   * 
   * @author Kristian
  */
  export class ListenerPriority extends Enum<ListenerPriority> {
    /**
     * Event call is of very low importance and should be ran first, to allow
     * other plugins to further customise the outcome.
    */
    static readonly LOWEST: ListenerPriority;
    /**
     * Event call is of low importance.
    */
    static readonly LOW: ListenerPriority;
    /**
     * Event call is neither important or unimportant, and may be ran normally.
    */
    static readonly NORMAL: ListenerPriority;
    /**
     * Event call is of high importance.
    */
    static readonly HIGH: ListenerPriority;
    /**
     * Event call is critical and must have the final say in what happens to the
     * event.
    */
    static readonly HIGHEST: ListenerPriority;
    /**
     * Event is listened to purely for monitoring the outcome of an event.
     * 
     * No modifications to the event should be made under this priority.
    */
    static readonly MONITOR: ListenerPriority;
    static valueOf(name: string): ListenerPriority;
    static values(): ListenerPriority[];
    /**
     * A low slot represents a low priority.
     * @return Integer representation of this priorty.
    */
    getSlot(): number;
  }
  export class SerializedOfflinePlayerTest {
    initMocks(): void;
    getProxyPlayer(): void;
    getSecondProxyPlayer(): void;
  }
  /**
   * Represents a packet that is scheduled for transmission at a later stage.
   * @author Kristian
  */
  export class ScheduledPacket {
    /**
     * Determine if this packet will be processed by any of the packet listeners.
     * @return TRUE if it will, FALSE otherwise.
    */
    isFiltered(): boolean;
    /**
     * Set whether or not this packet will be processed by packet listeners (except MONITOR listeners).
     * @param filtered - TRUE if it should be processed by listeners, FALSE otherwise.
    */
    setFiltered(filtered: boolean): void;
    /**
     * Schedule the packet transmission or reception.
    */
    schedule(): void;
    toString(): string;
  }
  export class AbstractStructure {
    getHandle(): any;
  }
  /**
   * Determines which packets will be observed by a listener, and with what priority.
   *
   * @author Kristian
  */
  export class ListeningWhitelist {
    /**
     * A whitelist with no packets - indicates that the listener shouldn't observe any packets.
    */
    static readonly EMPTY_WHITELIST: ListeningWhitelist;
    /**
     * Determine if the given whitelist is empty or not.
     *
     * @param whitelist - the whitelist to test.
     * @return TRUE if the whitelist is empty, FALSE otherwise.
    */
    static isEmpty(whitelist: ListeningWhitelist): boolean;
    /**
     * Construct a new builder of whitelists.
     *
     * @return New whitelist builder.
    */
    static newBuilder(): Builder;
    /**
     * Construct a new builder of whitelists initialized to the same values as the template.
     *
     * @param template - the template object.
     * @return New whitelist builder.
    */
    static newBuilder(template: ListeningWhitelist): Builder;
    /**
     * Whether or not this whitelist has any enabled packets.
     *
     * @return TRUE if there are any packets, FALSE otherwise.
    */
    isEnabled(): boolean;
    hashCode(): number;
    equals(obj: any): boolean;
    toString(): string;
  }
  export class PacketContainerTest {
    static initializeBukkit(): void;
    testGetByteArrays(): void;
    testGetBytes(): void;
    testGetShorts(): void;
    testGetIntegers(): void;
    testGetLongs(): void;
    testGetFloat(): void;
    testGetDoubles(): void;
    testGetStrings(): void;
    testGetStringArrays(): void;
    testGetIntegerArrays(): void;
    testGetItemModifier(): void;
    testGetItemListModifier(): void;
    testGetNbtModifier(): void;
    testEntityTypeModifier(): void;
    testGetPositionCollectionModifier(): void;
    testGetWatchableCollectionModifier(): void;
    testGameProfiles(): void;
    testChatComponents(): void;
    testSerialization(): void;
    testIntList(): void;
    testAttributeList(): void;
    testBlocks(): void;
    testBlockData(): void;
    testPotionEffect(): void;
    testPlayerAction(): void;
    testMobEffectList(): void;
    testSoundCategory(): void;
    testSoundEffects(): void;
    testGenericEnums(): void;
    testInternalStructures(): void;
    testDimensions(): void;
    testEntityEquipment(): void;
    testMovingBlockPos(): void;
    testMultiBlockChange(): void;
    testGameStateChange(): void;
    testUseEntity(): void;
    testSetSimulationDistance(): void;
    testMapChunk(): void;
    testComponentArrays(): void;
    testLoginSignatureNonce(): void;
    testLoginSignatureSigned(): void;
    testCloning(): void;
  }
  /**
   * Used to set a packet filter.
   * 
   * @author Kristian
  */
  export class ConnectionSide extends Enum<ConnectionSide> {
    /**
     * Listen for server side packets that will invoke onPacketSending().
    */
    static readonly SERVER_SIDE: ConnectionSide;
    /**
     * Listen for client side packets that will invoke onPacketReceiving().
    */
    static readonly CLIENT_SIDE: ConnectionSide;
    /**
     * Listen for both client and server side packets.
    */
    static readonly BOTH: ConnectionSide;
    static valueOf(name: string): ConnectionSide;
    static values(): ConnectionSide[];
    isForClient(): boolean;
    isForServer(): boolean;
    /**
     * If both connection sides are present, return {@link #BOTH} - otherwise, return the one valud connection side.
     * 
     * NULL is not a valid connection side.
     * @param a - the first connection side.
     * @param b - the second connection side.
     * @return BOTH or the one valid side, or NULL.
    */
    static add(a: ConnectionSide, b: ConnectionSide): ConnectionSide;
  }
  /**
   * Represents a packet listener that is invoked after a packet has been sent or received.
   * @author Kristian
  */
  export class PacketPostListener {
  
  }
  /**
   * Represents additional options a listener may require.
   *
   * @author Kristian
  */
  export class ListenerOptions extends Enum<ListenerOptions> {
    /**
     * Disable the automatic game phase detection that will normally force {@link GamePhase#LOGIN} when a packet ID is
     * known to be transmitted during login.
    */
    static readonly DISABLE_GAMEPHASE_DETECTION: ListenerOptions;
    /**
     * Do not verify that the owning plugin has a vaid plugin.yml.
    */
    static readonly SKIP_PLUGIN_VERIFIER: ListenerOptions;
    /**
     * Notify ProtocolLib that {@link PacketListener#onPacketSending(PacketEvent)} is thread safe.
    */
    static readonly ASYNC: ListenerOptions;
    static valueOf(name: string): ListenerOptions;
    static values(): ListenerOptions[];
  }
  /**
   * Represents a custom packet serializer onto the network stream.
   * 
   * @author Kristian
  */
  export class PacketOutputHandler {
  
  }
  
  }
  declare module 'com.comphenix.protocol.async' {
  import { Method } from 'java.lang.reflect';
  import { Set } from 'java.util';
  import { Comparable, Runnable, Thread } from 'java.lang';
  import { Serializable } from 'java.io';
  import { TimeUnit } from 'java.util.concurrent';
  import { AtomicInteger } from 'java.util.concurrent.atomic';
  /**
   * A runnable representing a asynchronous event listener.
   * 
   * @author Kristian
  */
  export class AsyncRunnable extends Runnable {
    /**
     * Retrieve a unique worker ID.
     * @return Unique worker ID.
    */
    getID(): number;
    /**
     * Stop the given runnable.
     * 
     * This may not occur right away.
     * @return TRUE if the thread was stopped, FALSE if it was already stopped.
     * @throws InterruptedException if it is interrupted
    */
    stop(): boolean;
    /**
     * Determine if we're running or not.
     * @return TRUE if we're running, FALSE otherwise.
    */
    isRunning(): boolean;
    /**
     * Determine if this runnable has already run its course.
     * @return TRUE if it has been stopped, FALSE otherwise.
    */
    isFinished(): boolean;
  }
  /**
   * Contains information about the packet that is being processed by asynchronous listeners.
   * 
   * Asynchronous listeners can use this to set packet timeout or transmission order.
   *
   * @author Kristian
  */
  export class AsyncMarker extends Serializable {
    /**
     * Default number of milliseconds until a packet will rejected.
    */
    static readonly DEFAULT_TIMEOUT_DELTA: number;
    /**
     * Default number of packets to skip.
    */
    static readonly DEFAULT_SENDING_DELTA: number;
    /**
     * Retrieve the time the packet was initially queued for asynchronous processing.
     * @return The initial time in number of milliseconds since 01.01.1970 00:00.
    */
    getInitialTime(): number;
    /**
     * Retrieve the time the packet will be forcefully rejected.
     * @return The time to reject the packet, in milliseconds since 01.01.1970 00:00.
    */
    getTimeout(): number;
    /**
     * Set the time the packet will be forcefully rejected.
     * @param timeout - time to reject the packet, in milliseconds since 01.01.1970 00:00.
    */
    setTimeout(timeout: number);
    /**
     * Retrieve the order the packet was originally transmitted.
     * @return The original packet index.
    */
    getOriginalSendingIndex(): number;
    /**
     * Retrieve the desired sending order after processing has completed.
     * 
     * Higher sending order means lower priority.
     * @return Desired sending order.
    */
    getNewSendingIndex(): number;
    /**
     * Sets the desired sending order after processing has completed.
     * 
     * Higher sending order means lower priority.
     * @param newSendingIndex - new packet send index.
    */
    setNewSendingIndex(newSendingIndex: number);
    /**
     * Retrieve whether or not this packet has been processed by the async listeners.
     * @return TRUE if it has been processed, FALSE otherwise.
    */
    isProcessed(): boolean;
    /**
     * Increment the number of times the current packet must be signalled as done before its transmitted.
     * 
     * This is useful if an asynchronous listener is waiting for further information before the
     * packet can be sent to the user. A packet listener MUST eventually call
     * {@link AsyncFilterManager#signalPacketTransmission(PacketEvent)},
     * even if the packet is cancelled, after this method is called.
     * 
     * It is recommended that processing outside a packet listener is wrapped in a synchronized block
     * using the {@link #getProcessingLock()} method.
     *
     * @return The new processing delay.
    */
    incrementProcessingDelay(): number;
    /**
     * Retrieve the number of times a packet must be signalled to be done before it's sent.
     * @return Number of processing delays.
    */
    getProcessingDelay(): number;
    /**
     * Whether or not this packet is or has been queued for processing.
     * @return TRUE if it has, FALSE otherwise.
    */
    isQueued(): boolean;
    /**
     * Retrieve the sending index when the packet was queued.
     * @return Queued sending index.
    */
    getQueuedSendingIndex(): number;
    /**
     * Processing lock used to synchronize access to the parent PacketEvent and PacketContainer.
     * 
     * This lock is automatically acquired for every asynchronous packet listener. It should only be
     * used to synchronize access to a PacketEvent if it's processing has been delayed.
     * @return A processing lock.
    */
    getProcessingLock(): any;
    setProcessingLock(processingLock: any);
    /**
     * Retrieve whether or not this packet has already been sent.
     * @return TRUE if it has been sent before, FALSE otherwise.
    */
    isTransmitted(): boolean;
    /**
     * Determine if this packet has expired.
     * @return TRUE if it has, FALSE otherwise.
    */
    hasExpired(): boolean;
    /**
     * Determine if this packet has expired given this time.
     * @param currentTime - the current time in milliseconds since 01.01.1970 00:00.
     * @return TRUE if it has, FALSE otherwise.
    */
    hasExpired(currentTime: number): boolean;
    /**
     * Determine if the asynchronous handling should be cancelled.
     * @return TRUE if it should, FALSE otherwise.
    */
    isAsyncCancelled(): boolean;
    /**
     * Set whether or not the asynchronous handling should be cancelled.
     * 
     * This is only relevant during the synchronous processing. Asynchronous
     * listeners should use the normal cancel-field to cancel a PacketEvent.
     *
     * @param asyncCancelled - TRUE to cancel it, FALSE otherwise.
    */
    setAsyncCancelled(asyncCancelled: boolean): void;
    /**
     * Retrieve the current worker ID.
     * @return Current worker ID.
    */
    getWorkerID(): number;
    compareTo(o: AsyncMarker): number;
    equals(other: any): boolean;
    hashCode(): number;
  }
  export interface AsyncMarker extends Serializable, Comparable<AsyncMarker> {}
  /**
   * Represents a handler for an asynchronous event.
   * 
   * Use {@link AsyncMarker#incrementProcessingDelay()} to delay a packet until a certain condition has been met.
   * @author Kristian
  */
  export class AsyncListenerHandler {
    /**
     * Determine whether or not this asynchronous handler has been cancelled.
     * @return TRUE if it has been cancelled/stopped, FALSE otherwise.
    */
    isCancelled(): boolean;
    /**
     * Cancel the handler.
    */
    cancel(): void;
    /**
     * Start a singler worker thread handling the asynchronous listener.
    */
    start(): void;
    /**
     * Create a friendly thread name using the following convention:
     * 
     *     Protocol Worker {id} - {plugin} - [recv: {packets}, send: {packets}]
     * 
     * @param id - the worker ID.
     * @return A friendly thread name.
    */
    getFriendlyWorkerName(id: number): string;
    /**
     * Start processing packets on the main thread.
     * 
     * This is useful if you need to synchronize with the main thread in your packet listener, but
     * you're not performing any expensive processing.
     * 
     * Note: Use a asynchronous worker if the packet listener may use more than 0.5 ms
     * of processing time on a single packet. Do as much as possible on the worker thread, and schedule synchronous tasks
     * to use the Bukkit API instead.
     * @return TRUE if the synchronized processing was successfully started, FALSE if it's already running.
     * @throws IllegalStateException If we couldn't start the underlying task.
    */
    syncStart(): boolean;
    /**
     * Start processing packets on the main thread.
     * 
     * This is useful if you need to synchronize with the main thread in your packet listener, but
     * you're not performing any expensive processing.
     * 
     * The processing time parameter gives the upper bound for the amount of time spent processing pending packets.
     * It should be set to a fairly low number, such as 0.5 ms or 1% of a game tick - to reduce the impact
     * on the main thread. Never go beyond 50 milliseconds.
     * 
     * Note: Use a asynchronous worker if the packet listener may exceed the ideal processing time
     * on a single packet. Do as much as possible on the worker thread, and schedule synchronous tasks
     * to use the Bukkit API instead.
     * 
     * @param time - the amount of processing time alloted per game tick (20 ticks per second).
     * @param unit - the unit of the processingTime argument.
     * @return TRUE if the synchronized processing was successfully started, FALSE if it's already running.
     * @throws IllegalStateException If we couldn't start the underlying task.
    */
    syncStart(time: number, unit: TimeUnit): boolean;
    /**
     * Stop processing packets on the main thread.
     * @return TRUE if we stopped any processing tasks, FALSE if it has already been stopped.
    */
    syncStop(): boolean;
    /**
     * Start multiple worker threads for this listener.
     * @param count - number of worker threads to start.
    */
    start(count: number): void;
    /**
     * Stop a worker thread.
    */
    stop(): void;
    /**
     * Stop the given amount of worker threads.
     * @param count - number of threads to stop.
    */
    stop(count: number): void;
    /**
     * Set the current number of workers.
     * 
     * This method can only be called with a count of zero when the listener is closing.
     * @param count - new number of workers.
    */
    setWorkers(workers: number);
    /**
     * Retrieve the current number of registered workers.
     * 
     * Note that the returned value may be out of data.
     * @return Number of registered workers.
    */
    getWorkers(): number;
  }
  
  }
  declare module 'com.comphenix.protocol.reflect.PrettyPrinter' {
  import { StringBuilder } from 'java.lang';
  /**
   * Represents a generic object printer.
   *
   * @author Kristian
  */
  export class ObjectPrinter {
    static readonly DEFAULT: ObjectPrinter;
    /**
     * Print the content of the given object.
     * 
     * Return FALSE in order for let the default printer take over.
     *
     * @param output - where to print the output.
     * @param value  - the value to print, may be NULL.
     * @return TRUE if we processed the value and added to the output, FALSE otherwise.
    */
    print(output: StringBuilder, value: any): boolean;
  }
  
  }
  declare module 'com.comphenix.protocol.wrappers.AutoWrapperTest' {
  import { Enum } from 'java.lang';
  export class WrappedFrameType extends Enum<WrappedFrameType> {
    static readonly TASK: WrappedFrameType;
    static readonly CHALLENGE: WrappedFrameType;
    static readonly GOAL: WrappedFrameType;
    static valueOf(name: string): WrappedFrameType;
    static values(): WrappedFrameType[];
  }
  export class WrappedAdvancementDisplay {
    frameType: WrappedFrameType;
    showToast: boolean;
    announceChat: boolean;
    hidden: boolean;
    x: number;
    y: number;
  }
  
  }
  declare module 'com.comphenix.protocol.wrappers.nbt' {
  import { Method } from 'java.lang.reflect';
  import { Map } from 'java.util';
  import { Enum, Class } from 'java.lang';
  /**
   * Represents all the element types 
   * 
   * @author Kristian
  */
  export class NbtType extends Enum<NbtType> {
    /**
     * Used to mark the end of compound tags. CANNOT be constructed.
    */
    static readonly TAG_END: NbtType;
    /**
     * A signed 1 byte integral type. Sometimes used for booleans.
    */
    static readonly TAG_BYTE: NbtType;
    /**
     * A signed 2 byte integral type.
    */
    static readonly TAG_SHORT: NbtType;
    /**
     * A signed 4 byte integral type.
    */
    static readonly TAG_INT: NbtType;
    /**
     * A signed 8 byte integral type.
    */
    static readonly TAG_LONG: NbtType;
    /**
     * A signed 4 byte floating point type.
    */
    static readonly TAG_FLOAT: NbtType;
    /**
     * A signed 8 byte floating point type.
    */
    static readonly TAG_DOUBLE: NbtType;
    /**
     * An array of bytes.
    */
    static readonly TAG_BYTE_ARRAY: NbtType;
    /**
     * An array of TAG_Int's payloads..
    */
    static readonly TAG_INT_ARRAY: NbtType;
    /**
     * A UTF-8 string
    */
    static readonly TAG_STRING: NbtType;
    /**
     * A list of tag payloads, without repeated tag IDs or any tag names.
    */
    static readonly TAG_LIST: NbtType;
    /**
     * A list of fully formed tags, including their IDs, names, and payloads. No two tags may have the same name.
    */
    static readonly TAG_COMPOUND: NbtType;
    /**
     * An array of longs
    */
    static readonly TAG_LONG_ARRAY: NbtType;
    static valueOf(name: string): NbtType;
    static values(): NbtType[];
    /**
     * Determine if the given NBT can store multiple children NBT tags.
     * @return TRUE if this is a composite NBT tag, FALSE otherwise.
    */
    isComposite(): boolean;
    /**
     * Retrieves the raw unique integer that identifies the type of the parent NBT element.
     * @return Integer that uniquely identifying the type.
    */
    getRawID(): number;
    /**
     * Retrieves the type of the value stored in the NBT element.
     * @return Type of the stored value.
    */
    getValueType(): Class<any>;
    /**
     * Retrieve an NBT type from a given raw ID.
     * @param rawID - the raw ID to lookup.
     * @return The associated NBT value.
    */
    static getTypeFromID(rawID: number): NbtType;
    /**
     * Retrieve an NBT type from the given Java class.
     * @param clazz - type of the value the NBT type can contain.
     * @return The NBT type.
     * @throws IllegalArgumentException If this class type cannot be represented by NBT tags.
    */
    static getTypeFromClass(clazz: Class<any>): NbtType;
  }
  /**
   * A visitor that can enumerate a NBT tree structure.
   * 
   * @author Kristian
  */
  export class NbtVisitor {
  
  }
  /**
   * @author dmulloy2
  */
  export class TileEntityTest {
    static beforeClass(): void;
    test(): void;
  }
  export class NbtCompoundTest {
    static initializeBukkit(): void;
    testCustomTags(): void;
  }
  export class NbtFactoryTest {
    static initializeBukkit(): void;
    testFromStream(): void;
    testItemTag(): void;
    testCreateTags(): void;
  }
  export class NameProperty {
    /**
     * Retrieve the name.
     * @return The name.
    */
    getName(): string;
    /**
     * Set the name.
     * @param name - the new value of the name.
    */
    setName(name: string);
    /**
     * Determine if a string of the given index exists in the base class.
     * @param baseClass - the base class.
     * @param index - the index to check.
     * @return TRUE if it does, FALSE otherwise.
    */
    static hasStringIndex(baseClass: Class<any>, index: number): boolean;
    /**
     * Retrieve a name property that delegates all read and write operations to a field of the given target.
     * @param baseClass - the base class.
     * @param target - the target 
     * @param index - the index of the field.
     * @return The name property.
    */
    static fromStringIndex(baseClass: Class<any>, target: any, index: number): NameProperty;
    /**
     * Retrieve a new name property around a simple field, forming a Java bean.
     * @return The name property.
    */
    static fromBean(): NameProperty;
  }
  /**
   * Factory methods for creating NBT elements, lists and compounds.
   *
   * @author Kristian
  */
  export class NbtFactory {
  
  }
  
  }
  declare module 'com.comphenix.protocol.wrappers.EnumWrappers' {
  import { Map } from 'java.util';
  import { Enum } from 'java.lang';
  export class ClientCommand extends Enum<ClientCommand> {
    static readonly PERFORM_RESPAWN: ClientCommand;
    static readonly REQUEST_STATS: ClientCommand;
    static readonly OPEN_INVENTORY_ACHIEVEMENT: ClientCommand;
    static valueOf(name: string): ClientCommand;
    static values(): ClientCommand[];
  }
  export class ChatVisibility extends Enum<ChatVisibility> {
    static readonly FULL: ChatVisibility;
    static readonly SYSTEM: ChatVisibility;
    static readonly HIDDEN: ChatVisibility;
    static valueOf(name: string): ChatVisibility;
    static values(): ChatVisibility[];
  }
  export class Difficulty extends Enum<Difficulty> {
    static readonly PEACEFUL: Difficulty;
    static readonly EASY: Difficulty;
    static readonly NORMAL: Difficulty;
    static readonly HARD: Difficulty;
    static valueOf(name: string): Difficulty;
    static values(): Difficulty[];
  }
  export class EntityUseAction extends Enum<EntityUseAction> {
    static readonly INTERACT: EntityUseAction;
    static readonly ATTACK: EntityUseAction;
    static readonly INTERACT_AT: EntityUseAction;
    static valueOf(name: string): EntityUseAction;
    static values(): EntityUseAction[];
  }
  /**
   * Represents a native game mode in Minecraft.
   * 
   * Not to be confused with {@link GameMode} in Bukkit.
   * 
   * @author Kristian
  */
  export class NativeGameMode extends Enum<NativeGameMode> {
    static readonly NOT_SET: NativeGameMode;
    static readonly SURVIVAL: NativeGameMode;
    static readonly CREATIVE: NativeGameMode;
    static readonly ADVENTURE: NativeGameMode;
    static readonly SPECTATOR: NativeGameMode;
    /**
     * @deprecated Replaced by NOT_SET
    */
    static readonly NONE: NativeGameMode;
    static valueOf(name: string): NativeGameMode;
    static values(): NativeGameMode[];
  }
  export class ResourcePackStatus extends Enum<ResourcePackStatus> {
    static readonly SUCCESSFULLY_LOADED: ResourcePackStatus;
    static readonly DECLINED: ResourcePackStatus;
    static readonly FAILED_DOWNLOAD: ResourcePackStatus;
    static readonly ACCEPTED: ResourcePackStatus;
    static valueOf(name: string): ResourcePackStatus;
    static values(): ResourcePackStatus[];
  }
  export class PlayerInfoAction extends Enum<PlayerInfoAction> {
    static readonly ADD_PLAYER: PlayerInfoAction;
    static readonly UPDATE_GAME_MODE: PlayerInfoAction;
    static readonly UPDATE_LATENCY: PlayerInfoAction;
    static readonly UPDATE_DISPLAY_NAME: PlayerInfoAction;
    static readonly REMOVE_PLAYER: PlayerInfoAction;
    static valueOf(name: string): PlayerInfoAction;
    static values(): PlayerInfoAction[];
  }
  export class TitleAction extends Enum<TitleAction> {
    static readonly TITLE: TitleAction;
    static readonly SUBTITLE: TitleAction;
    static readonly ACTIONBAR: TitleAction;
    static readonly TIMES: TitleAction;
    static readonly CLEAR: TitleAction;
    static readonly RESET: TitleAction;
    static valueOf(name: string): TitleAction;
    static values(): TitleAction[];
  }
  export class WorldBorderAction extends Enum<WorldBorderAction> {
    static readonly SET_SIZE: WorldBorderAction;
    static readonly LERP_SIZE: WorldBorderAction;
    static readonly SET_CENTER: WorldBorderAction;
    static readonly INITIALIZE: WorldBorderAction;
    static readonly SET_WARNING_TIME: WorldBorderAction;
    static readonly SET_WARNING_BLOCKS: WorldBorderAction;
    static valueOf(name: string): WorldBorderAction;
    static values(): WorldBorderAction[];
  }
  export class CombatEventType extends Enum<CombatEventType> {
    static readonly ENTER_COMBAT: CombatEventType;
    static readonly END_COMBAT: CombatEventType;
    static readonly ENTITY_DIED: CombatEventType;
    static valueOf(name: string): CombatEventType;
    static values(): CombatEventType[];
  }
  export class PlayerDigType extends Enum<PlayerDigType> {
    static readonly START_DESTROY_BLOCK: PlayerDigType;
    static readonly ABORT_DESTROY_BLOCK: PlayerDigType;
    static readonly STOP_DESTROY_BLOCK: PlayerDigType;
    static readonly DROP_ALL_ITEMS: PlayerDigType;
    static readonly DROP_ITEM: PlayerDigType;
    static readonly RELEASE_USE_ITEM: PlayerDigType;
    static readonly SWAP_HELD_ITEMS: PlayerDigType;
    static valueOf(name: string): PlayerDigType;
    static values(): PlayerDigType[];
    getAliases(): string[];
  }
  export class PlayerAction extends Enum<PlayerAction> {
    static readonly START_SNEAKING: PlayerAction;
    static readonly STOP_SNEAKING: PlayerAction;
    static readonly STOP_SLEEPING: PlayerAction;
    static readonly START_SPRINTING: PlayerAction;
    static readonly STOP_SPRINTING: PlayerAction;
    static readonly START_RIDING_JUMP: PlayerAction;
    static readonly STOP_RIDING_JUMP: PlayerAction;
    static readonly OPEN_INVENTORY: PlayerAction;
    static readonly START_FALL_FLYING: PlayerAction;
    static valueOf(name: string): PlayerAction;
    static values(): PlayerAction[];
    getAliases(): string[];
  }
  export class ScoreboardAction extends Enum<ScoreboardAction> {
    static readonly CHANGE: ScoreboardAction;
    static readonly REMOVE: ScoreboardAction;
    static valueOf(name: string): ScoreboardAction;
    static values(): ScoreboardAction[];
  }
  export class Particle extends Enum<Particle> {
    static readonly EXPLOSION_NORMAL: Particle;
    static readonly EXPLOSION_LARGE: Particle;
    static readonly EXPLOSION_HUGE: Particle;
    static readonly FIREWORKS_SPARK: Particle;
    static readonly WATER_BUBBLE: Particle;
    static readonly WATER_SPLASH: Particle;
    static readonly WATER_WAKE: Particle;
    static readonly SUSPENDED: Particle;
    static readonly SUSPENDED_DEPTH: Particle;
    static readonly CRIT: Particle;
    static readonly CRIT_MAGIC: Particle;
    static readonly SMOKE_NORMAL: Particle;
    static readonly SMOKE_LARGE: Particle;
    static readonly SPELL: Particle;
    static readonly SPELL_INSTANT: Particle;
    static readonly SPELL_MOB: Particle;
    static readonly SPELL_MOB_AMBIENT: Particle;
    static readonly SPELL_WITCH: Particle;
    static readonly DRIP_WATER: Particle;
    static readonly DRIP_LAVA: Particle;
    static readonly VILLAGER_ANGRY: Particle;
    static readonly VILLAGER_HAPPY: Particle;
    static readonly TOWN_AURA: Particle;
    static readonly NOTE: Particle;
    static readonly PORTAL: Particle;
    static readonly ENCHANTMENT_TABLE: Particle;
    static readonly FLAME: Particle;
    static readonly LAVA: Particle;
    static readonly FOOTSTEP: Particle;
    static readonly CLOUD: Particle;
    static readonly REDSTONE: Particle;
    static readonly SNOWBALL: Particle;
    static readonly SNOW_SHOVEL: Particle;
    static readonly SLIME: Particle;
    static readonly HEART: Particle;
    static readonly BARRIER: Particle;
    static readonly ITEM_CRACK: Particle;
    static readonly BLOCK_CRACK: Particle;
    static readonly BLOCK_DUST: Particle;
    static readonly WATER_DROP: Particle;
    static readonly ITEM_TAKE: Particle;
    static readonly MOB_APPEARANCE: Particle;
    static readonly DRAGON_BREATH: Particle;
    static readonly END_ROD: Particle;
    static readonly DAMAGE_INDICATOR: Particle;
    static readonly SWEEP_ATTACK: Particle;
    static readonly FALLING_DUST: Particle;
    static readonly TOTEM: Particle;
    static readonly SPIT: Particle;
    static valueOf(name: string): Particle;
    static values(): Particle[];
    getName(): string;
    getId(): number;
    isLongDistance(): boolean;
    getDataLength(): number;
    static getByName(name: string): Particle;
    static getById(id: number): Particle;
  }
  export class SoundCategory extends Enum<SoundCategory> {
    static readonly MASTER: SoundCategory;
    static readonly MUSIC: SoundCategory;
    static readonly RECORDS: SoundCategory;
    static readonly WEATHER: SoundCategory;
    static readonly BLOCKS: SoundCategory;
    static readonly HOSTILE: SoundCategory;
    static readonly NEUTRAL: SoundCategory;
    static readonly PLAYERS: SoundCategory;
    static readonly AMBIENT: SoundCategory;
    static readonly VOICE: SoundCategory;
    static valueOf(name: string): SoundCategory;
    static values(): SoundCategory[];
    getKey(): string;
    static getByKey(key: string): SoundCategory;
  }
  export class ItemSlot extends Enum<ItemSlot> {
    static readonly MAINHAND: ItemSlot;
    static readonly OFFHAND: ItemSlot;
    static readonly FEET: ItemSlot;
    static readonly LEGS: ItemSlot;
    static readonly CHEST: ItemSlot;
    static readonly HEAD: ItemSlot;
    static valueOf(name: string): ItemSlot;
    static values(): ItemSlot[];
  }
  export class Hand extends Enum<Hand> {
    static readonly MAIN_HAND: Hand;
    static readonly OFF_HAND: Hand;
    static valueOf(name: string): Hand;
    static values(): Hand[];
  }
  export class Direction extends Enum<Direction> {
    static readonly DOWN: Direction;
    static readonly UP: Direction;
    static readonly NORTH: Direction;
    static readonly SOUTH: Direction;
    static readonly WEST: Direction;
    static readonly EAST: Direction;
    static valueOf(name: string): Direction;
    static values(): Direction[];
  }
  export class ChatType extends Enum<ChatType> {
    static readonly CHAT: ChatType;
    static readonly SYSTEM: ChatType;
    static readonly GAME_INFO: ChatType;
    static valueOf(name: string): ChatType;
    static values(): ChatType[];
    getId(): number;
  }
  /**
   * Wrapped EntityPose enum for use in Entity Metadata Packet.
   * 
   * @apiNote Remember to use {@link #toNms()} when adding to a {@link WrappedDataWatcher}. 
   *          Serializer is obtained using Registry.get(EnumWrappers.getEntityPoseClass())
   * @since 1.13
   * @author Lewys Davies (Lew_)
  */
  export class EntityPose extends Enum<EntityPose> {
    static readonly STANDING: EntityPose;
    static readonly FALL_FLYING: EntityPose;
    static readonly SLEEPING: EntityPose;
    static readonly SWIMMING: EntityPose;
    static readonly SPIN_ATTACK: EntityPose;
    static readonly CROUCHING: EntityPose;
    static readonly LONG_JUMPING: EntityPose;
    static readonly DYING: EntityPose;
    static readonly CROAKING: EntityPose;
    static readonly USING_TONGUE: EntityPose;
    static readonly ROARING: EntityPose;
    static readonly SNIFFING: EntityPose;
    static readonly EMERGING: EntityPose;
    static readonly DIGGING: EntityPose;
    static valueOf(name: string): EntityPose;
    static values(): EntityPose[];
    /**
     * @param nms net.minecraft.server.EntityPose Object
     * @return Wrapped {@link EntityPose}
    */
    static fromNms(nms: any): EntityPose;
    /**
     @return net.minecraft.server.EntityPose enum equivalent to this wrapper enum 
    */
    toNms(): any;
  }
  export class Dimension extends Enum<Dimension> {
    static readonly OVERWORLD: Dimension;
    static readonly THE_NETHER: Dimension;
    static readonly THE_END: Dimension;
    static valueOf(name: string): Dimension;
    static values(): Dimension[];
    getId(): number;
    static fromId(id: number): Dimension;
  }
  export class AliasedEnum {
    getAliases(): string[];
  }
  
  }
  declare module 'com.comphenix.protocol.reflect' {
  import { Field, Constructor, Method, GenericDeclaration, Member } from 'java.lang.reflect';
  import { Set, Optional, Collection, List, Map } from 'java.util';
  import { RuntimeException, Throwable, Class } from 'java.lang';
  import { ObjectPrinter } from 'com.comphenix.protocol.reflect.PrettyPrinter';
  import { UnaryOperator } from 'java.util.function';
  /**
   * Can copy an object field by field.
   *
   * @author Kristian
  */
  export class ObjectWriter {
    /**
     * Copy every field in object A to object B. Each value is copied directly, and is not cloned.
     * 
     * The two objects must have the same number of fields of the same type.
     *
     * @param source      - fields to copy.
     * @param destination - fields to copy to.
     * @param commonType  - type containing each field to copy.
    */
    copyTo(source: any, destination: any, commonType: Class<any>): void;
  }
  /**
   * Interface that converts generic objects into types and back.
   *
   * @param  The specific type.
   * @author Kristian
  */
  export class EquivalentConverter<T> {
    /**
     * Retrieve a copy of the generic type from a specific type.
     * 
     * This is usually a native net.minecraft.server type in Minecraft.
     *
     * @param specific - the specific type we need to copy.
     * @return A copy of the specific type.
    */
    getGeneric(specific: T): any;
    /**
     * Retrieve a copy of the specific type using an instance of the generic type.
     * 
     * This is usually a wrapper type in the Bukkit API or ProtocolLib API.
     *
     * @param generic - the generic type.
     * @return The new specific type.
    */
    getSpecific(generic: any): T;
    /**
     * Due to type erasure, we need to explicitly keep a reference to the specific type.
     *
     * @return The specific type.
    */
    getSpecificType(): Class<T>;
  }
  /**
   * Provides list-oriented access to the fields of a Minecraft packet.
   * 
   * Implemented by using reflection. Use a CompiledStructureModifier, if speed is essential.
   *
   * @param  Type of the fields to retrieve.
   * @author Kristian
  */
  export class StructureModifier<T> {
    /**
     * Creates a structure modifier.
     *
     * @param targetType - the structure to modify.
    */
    constructor(targetType: Class<any>);
    /**
     * Creates a structure modifier.
     *
     * @param targetType        - the structure to modify.
     * @param superclassExclude - a superclass to exclude.
     * @param requireDefault    - whether we will be using writeDefaults()
    */
    constructor(targetType: Class<any>, superclassExclude: Class<any>, requireDefault: boolean);
    /**
     * Reads the value of a field given its index.
     * 
     * Note: This method is prone to exceptions (there are currently 5 total throw statements). It is recommended that you
     * use {@link #readSafely(int)}, which returns `null` if the field doesn't exist, instead of throwing an
     * exception.
     *
     * @param fieldIndex - index of the field.
     * @return Value of the field.
     * @throws FieldAccessException  if the given field index is out of bounds.
     * @throws IllegalStateException if this modifier has no target set.
    */
    read(fieldIndex: number): T;
    /**
     * Reads the value of a field only if it exists. If the field does not exist, `null` is returned.
     * 
     * As its name implies, this method is a much safer alternative to {@link #read(int)}. In addition to throwing less
     * exceptions and thereby causing less console spam, this method makes providing backwards compatiblity signficiantly
     * easier, as shown below:
     *
     * 
     * BlockPosition position = packet.getBlockPositionModifier().readSafely(0);
     * if (position != null) {
     *     // Handle 1.8+
     * } else {
     *     // Handle 1.7-
     * }
     * 
     *
     * @param fieldIndex - index of the field.
     * @return Value of the field, or NULL if it doesn't exist.
     * @throws IllegalStateException if this modifier has no target set.
    */
    readSafely(fieldIndex: number): T;
    /**
     * Reads the value of a field only if it exists. If the field does not exist, an empty {@link Optional} is returned.
     * 
     * This method has the same functionality as {@link #readSafely(int)}, but enforces null checks by way of an Optional.
     * It will eventually become the preferred method of reading fields.
     *
     * @param fieldIndex index of the field
     * @return An optional that may contain the value of the field
     * @see #readSafely(int)
    */
    optionRead(fieldIndex: number): Optional<T>;
    /**
     * Writes the value of a field given its index.
     *
     * @param fieldIndex - index of the field.
     * @param value      - new value of the field.
     * @return This structure modifier - for chaining.
     * @throws FieldAccessException The field doesn't exist, or it cannot be accessed under the current security
     *                              contraints.
    */
    write(fieldIndex: number, value: T): StructureModifier<T>;
    /**
     * Writes the value of a given field IF and ONLY if it exists.
     *
     * @param fieldIndex - index of the potential field.
     * @param value      - new value of the field.
     * @return This structure modifer - for chaining.
     * @throws FieldAccessException The field cannot be accessed under the current security contraints.
    */
    writeSafely(fieldIndex: number, value: T): StructureModifier<T>;
    /**
     * Correctly modifies the value of a field.
     *
     * @param fieldIndex - index of the field to modify.
     * @param select     - the function that modifies the field value.
     * @return This structure modifier - for chaining.
     * @throws FieldAccessException The field cannot be accessed under the current security contraints.
    */
    modify(fieldIndex: number, select: UnaryOperator<T>): StructureModifier<T>;
    /**
     * Sets all non-primitive fields to a more fitting default value. See {@link DefaultInstances#getDefault(Class)}.
     *
     * @return The current structure modifier - for chaining.
     * @throws FieldAccessException If we're unable to write to the fields due to a security limitation.
    */
    writeDefaults(): StructureModifier<T>;
    /**
     * Retrieves the common type of each field.
     *
     * @return Common type of each field.
    */
    getFieldType(): Class<any>;
    /**
     * Retrieves the type of the object we're modifying.
     *
     * @return Type of the object.
    */
    getTargetType(): Class<any>;
    /**
     * Retrieves the object we're currently modifying.
     *
     * @return Object we're modifying.
    */
    getTarget(): any;
    /**
     * Retrieve the number of readable types.
     *
     * @return Readable types.
    */
    size(): number;
    /**
     * Retrieve a field by index.
     *
     * @param fieldIndex - index of the field to retrieve.
     * @return The field represented with the given index.
     * @throws IllegalArgumentException If no field with the given index can be found.
    */
    getField(fieldIndex: number): Field;
    /**
     * Retrieve every value stored in the fields of the current type.
     *
     * @return Every field value.
     * @throws FieldAccessException Unable to access one or all of the fields
    */
    getValues(): T[];
    /**
     * Retrieves a structure modifier that only reads and writes fields of a given type.
     *
     * @param        Type
     * @param fieldType - the type, or supertype, of every field to modify.
     * @return A structure modifier for fields of this type.
    */
    withType<R>(fieldType: Class<any>): StructureModifier<R>;
    /**
     * Retrieves a structure modifier of the same type for a different object target.
     *
     * @param target - different target of the same type.
     * @return Structure modifier with the new target.
    */
    withTarget(target: any): StructureModifier<T>;
    toString(): string;
  }
  /**
   * Invoked when a field is inaccessible due to security limitations, or when it simply doesn't exist.
   *
   * @author Kristian
  */
  export class FieldAccessException extends RuntimeException {
    constructor();
    constructor(message: string, cause: Throwable);
    constructor(message: string);
    constructor(cause: Throwable);
    static fromFormat(message: string, ...params: any[]): FieldAccessException;
    toString(): string;
  }
  /**
   * Retrieves fields and methods by signature, not just name.
   *
   * @author Kristian
  */
  export class FuzzyReflection {
    constructor(source: Class<any>, forceAccess: boolean);
    /**
     * Retrieves a fuzzy reflection instance from a given class.
     *
     * @param source - the class we'll use.
     * @return A fuzzy reflection instance.
    */
    static fromClass(source: Class<any>): FuzzyReflection;
    /**
     * Retrieves a fuzzy reflection instance from a given class.
     *
     * @param source      - the class we'll use.
     * @param forceAccess - whether to override scope restrictions.
     * @return A fuzzy reflection instance.
    */
    static fromClass(source: Class<any>, forceAccess: boolean): FuzzyReflection;
    /**
     * Retrieves a fuzzy reflection instance from an object.
     *
     * @param reference - the object we'll use.
     * @return A fuzzy reflection instance that uses the class of the given object.
    */
    static fromObject(reference: any): FuzzyReflection;
    /**
     * Retrieves a fuzzy reflection instance from an object.
     *
     * @param reference   - the object we'll use.
     * @param forceAccess - whether to override scope restrictions.
     * @return A fuzzy reflection instance that uses the class of the given object.
    */
    static fromObject(reference: any, forceAccess: boolean): FuzzyReflection;
    /**
     * Retrieve the value of the first field of the given type.
     *
     * @param          Type
     * @param instance    - the instance to retrieve from.
     * @param fieldClass  - type of the field to retrieve.
     * @param forceAccess - whether to look for private and protected fields.
     * @return The value of that field.
     * @throws IllegalArgumentException If the field cannot be found.
    */
    static getFieldValue<T>(instance: any, fieldClass: Class<T>, forceAccess: boolean): T;
    static combineArrays<T>(...arrays: T[][]): Set<T>;
    /**
     * Retrieves the underlying class.
     *
     * @return The underlying class.
    */
    getSource(): Class<any>;
    /**
     * Retrieves whether or not not to override any scope restrictions.
     *
     * @return TRUE if we override scope, FALSE otherwise.
    */
    isForceAccess(): boolean;
    /**
     * Retrieve the singleton instance of a class, from a method or field.
     *
     * @return The singleton instance.
     * @throws IllegalStateException If the class has no singleton.
    */
    getSingleton(): any;
    /**
     * Retrieves a method by looking at its name.
     *
     * @param nameRegex -  regular expression that will match method names.
     * @return The first method that satisfies the regular expression.
     * @throws IllegalArgumentException If the method cannot be found.
    */
    getMethodByName(nameRegex: string): Method;
    /**
     * Retrieves a method by looking at the parameter types only.
     *
     * @param name - potential name of the method. Only used by the error mechanism.
     * @param args - parameter types of the method to find.
     * @return The first method that satisfies the parameter types.
     * @throws IllegalArgumentException If the method cannot be found.
    */
    getMethodByParameters(name: string, ...args: Class[]): Method;
    /**
     * Retrieves a method by looking at the parameter types and return type only.
     *
     * @param name       - potential name of the method. Only used by the error mechanism.
     * @param returnType - return type of the method to find.
     * @param args       - parameter types of the method to find.
     * @return The first method that satisfies the parameter types.
     * @throws IllegalArgumentException If the method cannot be found.
    */
    getMethodByReturnTypeAndParameters(name: string, returnType: Class<any>, ...args: Class[]): Method;
    /**
     * Retrieves every method that has the given parameter types and return type.
     *
     * @param returnType - return type of the method to find.
     * @param args       - parameter types of the method to find.
     * @return Every method that satisfies the given constraints.
    */
    getMethodListByParameters(returnType: Class<any>, ...args: Class[]): Method[];
    /**
     * Retrieves a field by name.
     *
     * @param nameRegex - regular expression that will match a field name.
     * @return The first field to match the given expression.
     * @throws IllegalArgumentException If the field cannot be found.
    */
    getFieldByName(nameRegex: string): Field;
    /**
     * Retrieves the first field with a type equal to or more specific to the given type.
     *
     * @param name - name the field probably is given. This will only be used in the error message.
     * @param type - type of the field to find.
     * @return The first field with a type that is an instance of the given type.
    */
    getFieldByType(name: string, type: Class<any>): Field;
    /**
     * Retrieves every field with a type equal to or more specific to the given type.
     *
     * @param type - type of the fields to find.
     * @return Every field with a type that is an instance of the given type.
    */
    getFieldListByType(type: Class<any>): Field[];
    /**
     * Retrieves a field with a given type and parameters. This is most useful when dealing with Collections.
     *
     * @param fieldType Type of the field
     * @param params    Variable length array of type parameters
     * @return The field
     * @throws IllegalArgumentException If the field cannot be found
    */
    getParameterizedField(fieldType: Class<any>, ...params: Class[]): Field;
    /**
     * Retrieves a field by type.
     * 
     * Note that the type is matched using the full canonical representation, i.e.:
     * 
     *     java.util.List
     *     net.comphenix.xp.ExperienceMod
     * 
     *
     * @param typeRegex - regular expression that will match the field type.
     * @return The first field with a type that matches the given regular expression.
     * @throws IllegalArgumentException If the field cannot be found.
    */
    getFieldByType(typeRegex: string): Field;
    /**
     * Retrieves all private and public fields in declared order.
     * 
     * Private, protected and package fields are ignored if forceAccess is FALSE.
     *
     * @return Every field.
    */
    getFields(): Set<Field>;
    /**
     * Retrieves all private and public fields, up until a certain superclass.
     *
     * @param excludeClass - the class (and its superclasses) to exclude from the search.
     * @return Every such declared field.
    */
    getDeclaredFields(excludeClass: Class<any>): Set<Field>;
    /**
     * Retrieves all private and public methods in declared order (after JDK 1.5).
     * 
     * Private, protected and package methods are ignored if forceAccess is FALSE.
     *
     * @return Every method.
    */
    getMethods(): Set<Method>;
    /**
     * Retrieves all private and public constructors in declared order (after JDK 1.5).
     * 
     * Private, protected and package constructors are ignored if forceAccess is FALSE.
     *
     * @return Every constructor.
    */
    getConstructors(): Set<Constructor<any>>;
  }
  export class ExactReflection {
    /**
     * Retrieves an exact reflection instance from a given class.
     *
     * @param source      - the class we'll use.
     * @param forceAccess - whether to also search for members which are out of the allowed scope.
     * @return A fuzzy reflection instance.
    */
    static fromClass(source: Class<any>, forceAccess: boolean): ExactReflection;
    /**
     * Retrieves an exact reflection instance from an object.
     *
     * @param reference   - the object we'll use.
     * @param forceAccess - whether to also search for members which are out of the allowed scope.
     * @return A fuzzy reflection instance that uses the class of the given object.
    */
    static fromObject(reference: any, forceAccess: boolean): ExactReflection;
    /**
     * Retrieve the first method in the class hierarchy with the given name and parameters.
     * 
     * If {@link #isForceAccess()} is TRUE, we will also search for methods which are out of the caller scope.
     *
     * @param methodName - the name of the method to find, NULL to only search by using the given parameters.
     * @param parameters - the parameters of the method to find.
     * @return the first matching method.
     * @throws IllegalArgumentException if there is no method with the given name and parameter types.
    */
    getMethod(methodName: string, ...parameters: Class[]): Method;
    /**
     * Finds the first method in the class hierarchy with the given name and parameters.
     * 
     * If {@link #isForceAccess()} is TRUE, we will also search for methods which are out of the caller scope.
     *
     * @param methodName - the name of the method to find, NULL to only search by using the given parameters.
     * @param parameters - the parameters of the method to find.
     * @return the first matching method, NULL if no method matches.
    */
    findMethod(methodName: string, ...parameters: Class[]): Method;
    /**
     * Retrieve a field in the class hierarchy by the given name.
     * 
     * If {@link #isForceAccess()} is TRUE, we will also search for fields which are out of the caller scope.
     *
     * @param fieldName - the name of the field to find.
     * @return the first matching field.
     * @throws IllegalArgumentException if no field with the given name was found.
    */
    getField(fieldName: string): Field;
    /**
     * Finds a field in the class hierarchy by the given name.
     * 
     * If {@link #isForceAccess()} is TRUE, we will also search for fields which are out of the caller scope.
     *
     * @param fieldName - the name of the field to find.
     * @return the first matching field, null if no field matches.
    */
    findField(fieldName: string): Field;
    /**
     * Retrieves the first constructor in the class hierarchy with the given parameters.
     * 
     * If {@link #isForceAccess()} is TRUE, we will also search for constructors which are out of the caller scope.
     *
     * @param parameters - the parameters of the constructor to find.
     * @return the first matching constructor.
     * @throws IllegalArgumentException if no constructor with the given parameters was found.
    */
    getConstructor(...parameters: Class[]): Constructor<any>;
    /**
     * Finds the first constructor in the class hierarchy with the given parameters.
     * 
     * If {@link #isForceAccess()} is TRUE, we will also search for constructors which are out of the caller scope.
     *
     * @param parameters - the parameters of the constructor to find.
     * @return the first matching constructor, NULL if no constructor matches.
    */
    findConstructor(...parameters: Class[]): Constructor<any>;
    /**
     * Retrieve an {@link ExactReflection} object where scope restrictions are ignored.
     *
     * @return A copy of the current object.
    */
    forceAccess(): ExactReflection;
    /**
     * Determine if we are overriding scope restrictions and will also find private, protected or package members.
     *
     * @return TRUE if we are, FALSE otherwise.
    */
    isForceAccess(): boolean;
    /**
     * Retrieve the source class we are searching.
     *
     * @return The source.
    */
    getSource(): Class<any>;
  }
  /**
   * Represents a method or a constructor.
   *
   * @author Kristian
  */
  export class MethodInfo extends GenericDeclaration {
    /**
     * Wraps a method as a MethodInfo object.
     *
     * @param method - the method to wrap.
     * @return The wrapped method.
    */
    static fromMethod(method: Method): MethodInfo;
    /**
     * Construct a list of method infos from a given array of methods.
     *
     * @param methods - array of methods.
     * @return Method info list.
    */
    static fromMethods(methods: Method[]): Collection<MethodInfo>;
    /**
     * Construct a list of method infos from a given collection of methods.
     *
     * @param methods - list of methods.
     * @return Method info list.
    */
    static fromMethods(methods: Collection<Method>): MethodInfo[];
    /**
     * Wraps a constructor as a method information object.
     *
     * @param constructor - the constructor to wrap.
     * @return A wrapped constructor.
    */
    static fromConstructor(constructor: Constructor<any>): MethodInfo;
    /**
     * Construct a list of method infos from a given array of constructors.
     *
     * @param constructors - array of constructors.
     * @return Method info list.
    */
    static fromConstructors(constructors: Constructor[]): Collection<MethodInfo>;
    /**
     * Construct a list of method infos from a given collection of constructors.
     *
     * @param constructors - list of constructors.
     * @return Method info list.
    */
    static fromConstructors(constructors: Collection<Constructor<any>>): MethodInfo[];
    /**
     * Returns a string describing this method or constructor
     *
     * @return A string representation of the object.
     * @see Method#toString()
     * @see Constructor#toString()
    */
    toString(): string;
    /**
     * Returns a string describing this method or constructor, including type parameters.
     *
     * @return A string describing this Method, include type parameters
     * @see Method#toGenericString()
     * @see Constructor#toGenericString()
    */
    toGenericString(): string;
    /**
     * Returns an array of Class objects that represent the types of the exceptions declared to be thrown by the
     * underlying method or constructor represented by this MethodInfo object.
     *
     * @return The exception types declared as being thrown by the method or constructor this object represents.
     * @see Method#getExceptionTypes()
     * @see Constructor#getExceptionTypes()
    */
    getExceptionTypes(): Class[];
    /**
     * Returns a Class object that represents the formal return type of the method or constructor represented by this
     * MethodInfo object.
     * 
     * This is always {@link Void} for constructors.
     *
     * @return The return value, or Void if a constructor.
     * @see Method#getReturnType()
    */
    getReturnType(): Class<any>;
    /**
     * Returns an array of Class objects that represent the formal parameter types, in declaration order, of the method or
     * constructor represented by this MethodInfo object.
     *
     * @return The parameter types for the method or constructor this object represents.
     * @see Method#getParameterTypes()
     * @see Constructor#getParameterTypes()
    */
    getParameterTypes(): Class[];
    /**
     * Determine if this is a constructor or not.
     *
     * @return TRUE if this represents a constructor, FALSE otherwise.
    */
    isConstructor(): boolean;
  }
  export interface MethodInfo extends GenericDeclaration, Member {}
  /**
   * Used to print the content of an arbitrary class.
   *
   * @author Kristian
  */
  export class PrettyPrinter {
    /**
     * How far we will recurse.
    */
    static readonly RECURSE_DEPTH: number;
    /**
     * Print the contents of an object.
     *
     * @param object - the object to serialize.
     * @return String representation of the class.
     * @throws IllegalAccessException If the object is null
    */
    static printObject(object: any): string;
    /**
     * Print the contents of an object.
     *
     * @param object - the object to serialize.
     * @param start  - class to start at.
     * @param stop   - superclass that will stop the process.
     * @return String representation of the class
     * @throws IllegalAccessException If the object is null
    */
    static printObject(object: any, start: Class<any>, stop: Class<any>): string;
    /**
     * Print the contents of an object.
     *
     * @param object        - the object to serialize.
     * @param start         - class to start at.
     * @param stop          - superclass that will stop the process.
     * @param hierachyDepth - maximum recursion level.
     * @return String representation of the class.
     * @throws IllegalAccessException If the object is null
    */
    static printObject(object: any, start: Class<any>, stop: Class<any>, hierachyDepth: number): string;
    /**
     * Print the contents of an object.
     *
     * @param object        - the object to serialize.
     * @param start         - class to start at.
     * @param stop          - superclass that will stop the process.
     * @param hierachyDepth - maximum recursion level.
     * @param printer       - a generic object printer.
     * @return String representation of the class.
     * @throws IllegalAccessException If the object is null
    */
    static printObject(object: any, start: Class<any>, stop: Class<any>, hierachyDepth: number, printer: ObjectPrinter): string;
  }
  
  }
  declare module 'com.comphenix.protocol.injector.PacketConstructor' {
  /**
   * Represents a unwrapper for a constructor parameter.
   *
   * @author Kristian
  */
  export class Unwrapper {
    /**
     * Convert the given wrapped object to the equivalent net.minecraft.server object.
     * 
     * Note that we may pass in a class instead of object - in that case, the unwrapper should return the equivalent NMS
     * class.
     *
     * @param wrappedObject - wrapped object or class.
     * @return The equivalent net.minecraft.server object or class.
    */
    unwrapItem(wrappedObject: any): any;
  }
  
  }
  declare module 'com.comphenix.protocol' {
  import { Level, Logger } from 'java.util.logging';
  import { Collection, List } from 'java.util';
  import { Comparable, Iterable, Throwable, Cloneable, Class } from 'java.lang';
  import { Serializable, File } from 'java.io';
  import { Consumer } from 'java.util.function';
  import { Sender, Protocol } from 'com.comphenix.protocol.PacketType';
  /**
   * Represents a object capable of sending or receiving packets.
   *
   * @author Kristian
  */
  export class PacketStream {
  
  }
  /**
   * The main entry point for ProtocolLib.
   * @author dmulloy2
  */
  export class ProtocolLibrary {
    /**
     * The minimum version ProtocolLib has been tested with.
    */
    static readonly MINIMUM_MINECRAFT_VERSION: string;
    /**
     * The maximum version ProtocolLib has been tested with.
    */
    static readonly MAXIMUM_MINECRAFT_VERSION: string;
    /**
     * The date (with ISO 8601 or YYYY-MM-DD) when the most recent version (1.19.1) was released.
    */
    static readonly MINECRAFT_LAST_RELEASE_DATE: string;
    /**
     * Plugins that are currently incompatible with ProtocolLib.
    */
    static readonly INCOMPATIBLE: string[];
    /**
     * Disables the ProtocolLib update checker.
    */
    static disableUpdates(): void;
    /**
     * Whether updates are currently disabled.
     * @return True if it is, false if not
    */
    static updatesDisabled(): boolean;
  }
  /**
   * Represents a asynchronous packet handler.
   * 
   * @author Kristian
  */
  export class AsynchronousManager {
    /**
     * Remove listeners, close threads and transmit every delayed packet.
    */
    cleanupAll(): void;
  }
  export class MinecraftVersionTest {
    testComparision(): void;
    testParsing(): void;
  }
  /**
   * Represents the configuration of ProtocolLib.
   *
   * @author Kristian
  */
  export class ProtocolConfig {
    /**
     * Reload configuration file.
    */
    reloadConfig(): void;
    /**
     * Retrieve a reference to the configuration file.
     *
     * @return Configuration file on disk.
    */
    getFile(): File;
    /**
     * Determine if detailed error reporting is enabled. Default FALSE.
     *
     * @return TRUE if it is enabled, FALSE otherwise.
    */
    isDetailedErrorReporting(): boolean;
    /**
     * Print warnings to players with protocol.info
     * @return true if enabled, false if not
    */
    isChatWarnings(): boolean;
    /**
     * Retrieve whether or not ProtocolLib should determine if a new version has been released.
     *
     * @return TRUE if it should do this automatically, FALSE otherwise.
    */
    isAutoNotify(): boolean;
    /**
     * Retrieve whether or not ProtocolLib should automatically download the new version.
     *
     * @return TRUE if it should, FALSE otherwise.
    */
    isAutoDownload(): boolean;
    /**
     * Determine whether or not debug mode is enabled.
     * 
     * This grants access to the filter command.
     *
     * @return TRUE if it is, FALSE otherwise.
    */
    isDebug(): boolean;
    /**
     * Set whether or not debug mode is enabled.
     *
     * @param value - TRUE if it is enabled, FALSE otherwise.
    */
    setDebug(value: boolean): void;
    /**
     * Retrieve the amount of time to wait until checking for a new update.
     *
     * @return The amount of time to wait.
    */
    getAutoDelay(): number;
    /**
     * The version of Minecraft to ignore the built-in safety feature.
     *
     * @return The version to ignore ProtocolLib's satefy.
    */
    getIgnoreVersionCheck(): string;
    /**
     * Retrieve whether or not metrics is enabled.
     *
     * @return TRUE if metrics is enabled, FALSE otherwise.
    */
    isMetricsEnabled(): boolean;
    /**
     * Retrieve the last time we updated, in seconds since 1970.01.01 00:00.
     *
     * @return Last update time.
    */
    getAutoLastTime(): number;
    /**
     * Set the last time we updated, in seconds since 1970.01.01 00:00.
     * 
     * Note that this is not considered to modify the configuration, so the modification count will not be incremented.
     *
     * @param lastTimeSeconds - new last update time.
    */
    setAutoLastTime(autoLastTime: number);
    /**
     * Retrieve the unique name of the script engine to use for filtering.
     *
     * @return Script engine to use.
    */
    getScriptEngineName(): string;
    /**
     * Set the unique name of the script engine to use for filtering.
     * 
     * This setting will take effect next time ProtocolLib is started.
     *
     * @param name - name of the script engine to use.
    */
    setScriptEngineName(scriptEngineName: string);
    /**
     * Retrieve the number of modifications made to this configuration.
     *
     * @return The number of modifications.
    */
    getModificationCount(): number;
    /**
     * Save the current configuration file.
    */
    saveAll(): void;
  }
  /**
   * Represents the type of a packet in a specific protocol.
   * 
   * Note that vanilla Minecraft reuses packet IDs per protocol (ping, game, login) and IDs are subject to change, so they are not reliable.
   * @author Kristian
  */
  export class PacketType extends Serializable {
    /**
     * Represents an unknown packet ID.
    */
    static readonly UNKNOWN_PACKET: number;
    /**
     * Find every packet type known to the current version of ProtocolLib.
     * @return Every packet type.
    */
    static values(): Iterable<PacketType>;
    /**
     * Retrieve a packet type from a legacy (1.6.4 and below) packet ID.
     * @param packetId - the legacy packet ID.
     * @return The corresponding packet type.
     * @throws IllegalArgumentException If the legacy packet could not be found.
     * @deprecated Legacy IDs haven't functioned properly for some time
    */
    static findLegacy(packetId: number): PacketType;
    /**
     * Retrieve a packet type from a legacy (1.6.4 and below) packet ID.
     * @param packetId - the legacy packet ID.
     * @param preference - the preferred sender, or NULL for any arbitrary sender.
     * @return The corresponding packet type.
     * @throws IllegalArgumentException If the legacy packet could not be found.
     * @deprecated Legacy IDs haven't functioned properly for some time
    */
    static findLegacy(packetId: number, preference: Sender): PacketType;
    /**
     * Determine if the given legacy packet exists.
     * @param packetId - the legacy packet ID.
     * @return TRUE if it does, FALSE otherwise.
     * @deprecated Legacy IDs haven't functioned properly for some time
    */
    static hasLegacy(packetId: number): boolean;
    /**
     * Retrieve a packet type from a protocol, sender and packet ID.
     * 
     * It is almost always better to access the packet types statically, like so:
     * 
     *   {@link PacketType.Play.Server#SPAWN_ENTITY}
     * 
     * However there are some valid uses for packet IDs. Please note that IDs
     * change almost every Minecraft version.
     *
     * @param protocol - the current protocol.
     * @param sender - the sender.
     * @param packetId - the packet ID.
     * @return The corresponding packet type.
     * @throws IllegalArgumentException If the current packet could not be found.
    */
    static findCurrent(protocol: Protocol, sender: Sender, packetId: number): PacketType;
    static findCurrent(protocol: Protocol, sender: Sender, name: string): PacketType;
    /**
     * Determine if the given packet exists.
     * @param protocol - the protocol.
     * @param sender - the sender.
     * @param packetId - the packet ID.
     * @return TRUE if it exists, FALSE otherwise.
    */
    static hasCurrent(protocol: Protocol, sender: Sender, packetId: number): boolean;
    /**
     * Retrieve a packet type from a protocol, sender and packet ID, for pre-1.8.
     * 
     * The packet will automatically be registered if its missing.
     * @param protocol - the current protocol.
     * @param sender - the sender.
     * @param packetId - the packet ID. Can be UNKNOWN_PACKET.
     * @param packetClass - the packet class
     * @return The corresponding packet type.
    */
    static fromID(protocol: Protocol, sender: Sender, packetId: number, packetClass: Class<any>): PacketType;
    /**
     * Retrieve a packet type from a protocol, sender, ID, and class for 1.8+
     * 
     * The packet will automatically be registered if its missing.
     * @param protocol - the current protocol.
     * @param sender - the sender.
     * @param packetId - the packet ID. Can be UNKNOWN_PACKET.
     * @param packetClass - the packet class.
     * @return The corresponding packet type.
    */
    static fromCurrent(protocol: Protocol, sender: Sender, packetId: number, packetClass: Class<any>): PacketType;
    /**
     * Lookup a packet type from a packet class.
     * @param packetClass - the packet class.
     * @return The corresponding packet type, or NULL if not found.
    */
    static fromClass(packetClass: Class<any>): PacketType;
    /**
     * Retrieve every packet type with the given UPPER_CAMEL_CASE name.
     * 
     * Note that the collection is unmodiable.
     * @param name - the name.
     * @return Every packet type, or an empty collection.
    */
    static fromName(name: string): Collection<PacketType>;
    /**
     * Determine if a given class represents a packet class.
     * @param packetClass - the class to lookup.
     * @return TRUE if this is a packet class, FALSE otherwise.
     * @deprecated Doesn't really have a purpose
    */
    static hasClass(packetClass: Class<any>): boolean;
    /**
     * Register a particular packet type.
     * 
     * Note that the registration will be performed on the main thread.
     * @param type - the type to register.
     * @param name - the name of the packet.
    */
    static scheduleRegister(type: PacketType, name: string): void;
    /**
     * Construct a new packet type.
     * @param protocol - the current protocol.
     * @param sender - client or server.
     * @param currentId - the current packet ID, or
    */
    constructor(protocol: Protocol, sender: Sender, currentId: number, ...names: string[]);
    /**
     * Determine if this packet is supported on the current server.
     * @return Whether or not the packet is supported.
    */
    isSupported(): boolean;
    /**
     * Retrieve the protocol (the connection state) the packet type belongs.
     * @return The protocol of this type.
    */
    getProtocol(): Protocol;
    /**
     * Retrieve which sender will transmit packets of this type.
     * @return The sender of these packets.
    */
    getSender(): Sender;
    /**
     * Determine if this packet was sent by the client.
     * @return TRUE if it was, FALSE otherwise.
    */
    isClient(): boolean;
    /**
     * Determine if this packet was sent by the server.
     * @return TRUE if it was, FALSE otherwise.
    */
    isServer(): boolean;
    /**
     * Retrieve the current protocol ID for this packet type.
     * 
     * This is only unique within a specific protocol and target.
     * 
     * It is unknown if the packet was removed at any point.
     * @return The current ID, or {@link #UNKNOWN_PACKET} if unknown.
     * @deprecated Don't rely on packet IDs, they change every version
    */
    getCurrentId(): number;
    getClassNames(): string[];
    /**
     * Retrieve the equivalent packet class.
     * @return The packet class, or NULL if not found.
    */
    getPacketClass(): Class<any>;
    /**
     * Retrieve the declared enum name of this packet type.
     * @return The enum name.
    */
    name(): string;
    /**
     * Whether or not this packet is deprecated. Deprecated packet types have either been renamed, replaced, or removed.
     * Kind of like the thing they use to tell children to recycle except with packets you probably shouldn't be using.
     *
     * @return True if the type is deprecated, false if not
    */
    isDeprecated(): boolean;
    /**
     * Whether or not the processing of this packet must take place on a thread different than the main thread. You don't
     * get a choice. If this is false it's up to you.
     *
     * @return True if async processing is forced, false if not.
    */
    isAsyncForced(): boolean;
    /**
     * Whether or not this packet was dynamically created (i.e. we don't have it registered)
     * @return True if dnyamic, false if not.
    */
    isDynamic(): boolean;
    hashCode(): number;
    equals(obj: any): boolean;
    compareTo(other: PacketType): number;
    toString(): string;
    clone(): PacketType;
  }
  export interface PacketType extends Serializable, Cloneable, Comparable<PacketType> {}
  /**
   * @author dmulloy2
  */
  export class PacketTypeTest {
    static beforeClass(): void;
    static afterClass(): void;
    static main(args: string[]): void;
    static initializeReflection(): void;
    testFindCurrent(): void;
    testLoginStart(): void;
    testDeprecation(): void;
    ensureTypesAreCorrect(): void;
    testPacketCreation(): void;
  }
  /**
   * @author dmulloy2
  */
  export class ProtocolLogger {
    /**
     * Logs a message to console with a given level.
     * @param level Logging level
     * @param message Message to log
     * @param args Arguments to format in
    */
    static log(level: Level, message: string, ...args: any[]): void;
    /**
     * Logs a method to console with the INFO level.
     * @param message Message to log
     * @param args Arguments to format in
    */
    static log(message: string, ...args: any[]): void;
    /**
     * Logs a message to console with a given level and exception.
     * @param level Logging level
     * @param message Message to log
     * @param ex Exception to log
    */
    static log(level: Level, message: string, ex: Throwable): void;
    static debug(message: string, ...args: any[]): void;
    static debug(message: string, ex: Throwable): void;
  }
  /**
   * Used to ensure that ProtocolLib and Bukkit is prepared to be tested.
   *
   * @author Kristian
  */
  export class BukkitInitialization {
    /**
     * Statically initializes the mock server for unit testing
    */
    static initializeAll(): void;
  }
  
  }
  declare module 'com.comphenix.protocol.utility' {
  import { Field, Method } from 'java.lang.reflect';
  import { Comparable, StringBuilder, AutoCloseable, Appendable, ClassLoader, Class } from 'java.lang';
  import { List, UUID, Map, Date } from 'java.util';
  import { Pattern } from 'java.util.regex';
  import { Serializable, DataOutputStream, Closeable, DataInputStream } from 'java.io';
  import { TimeUnit } from 'java.util.concurrent';
  /**
   * Represents an object that has been generated using ByteBuddy.
   *
   * @author Pim
  */
  export class ByteBuddyGenerated {
  
  }
  export class StreamSerializerTest {
    static initializeBukkit(): void;
    testStrings(): void;
    testCompound(): void;
    testItems(): void;
    testItemMeta(): void;
  }
  /**
   * A lookup of the associated protocol version of a given Minecraft server.
   *
   * @author Kristian
  */
  export class MinecraftProtocolVersion {
    /**
     * Retrieve the version of the Minecraft protocol for the current version of Minecraft.
     *
     * @return The version number.
    */
    static getCurrentVersion(): number;
  }
  export class MinecraftReflectionTestUtil {
    static readonly PACKAGE_VERSION: string;
    static readonly NMS: string;
    static readonly OBC: string;
    static init(): void;
  }
  /**
   * Determine the current Minecraft version.
   *
   * @author Kristian
  */
  export class MinecraftVersion extends Comparable<MinecraftVersion> {
    /**
     * Version 1.19 - the wild update
    */
    static readonly WILD_UPDATE: MinecraftVersion;
    /**
     * Version 1.18 - caves and cliffs part 2
    */
    static readonly CAVES_CLIFFS_2: MinecraftVersion;
    /**
     * Version 1.17 - caves and cliffs part 1
    */
    static readonly CAVES_CLIFFS_1: MinecraftVersion;
    /**
     * Version 1.16.2 - breaking change to the nether update
    */
    static readonly NETHER_UPDATE_2: MinecraftVersion;
    /**
     * Version 1.16.0 - the nether update
    */
    static readonly NETHER_UPDATE: MinecraftVersion;
    /**
     * Version 1.15 - the bee update
    */
    static readonly BEE_UPDATE: MinecraftVersion;
    /**
     * Version 1.14 - village and pillage update.
    */
    static readonly VILLAGE_UPDATE: MinecraftVersion;
    /**
     * Version 1.13 - update aquatic.
    */
    static readonly AQUATIC_UPDATE: MinecraftVersion;
    /**
     * Version 1.12 - the world of color update.
    */
    static readonly COLOR_UPDATE: MinecraftVersion;
    /**
     * Version 1.11 - the exploration update.
    */
    static readonly EXPLORATION_UPDATE: MinecraftVersion;
    /**
     * Version 1.10 - the frostburn update.
    */
    static readonly FROSTBURN_UPDATE: MinecraftVersion;
    /**
     * Version 1.9 - the combat update.
    */
    static readonly COMBAT_UPDATE: MinecraftVersion;
    /**
     * Version 1.8 - the "bountiful" update.
    */
    static readonly BOUNTIFUL_UPDATE: MinecraftVersion;
    /**
     * Version 1.7.8 - the update that changed the skin format (and distribution - R.I.P. player disguise)
    */
    static readonly SKIN_UPDATE: MinecraftVersion;
    /**
     * Version 1.7.2 - the update that changed the world.
    */
    static readonly WORLD_UPDATE: MinecraftVersion;
    /**
     * Version 1.6.1 - the horse update.
    */
    static readonly HORSE_UPDATE: MinecraftVersion;
    /**
     * Version 1.5.0 - the redstone update.
    */
    static readonly REDSTONE_UPDATE: MinecraftVersion;
    /**
     * Version 1.4.2 - the scary update (Wither Boss).
    */
    static readonly SCARY_UPDATE: MinecraftVersion;
    /**
     * The latest release version of minecraft.
    */
    static readonly LATEST: MinecraftVersion;
    /**
     * Construct a version object from the format major.minor.build, or the snapshot format.
     *
     * @param versionOnly - the version in text form.
    */
    constructor(versionOnly: string);
    /**
     * Construct a version object directly.
     *
     * @param major - major version number.
     * @param minor - minor version number.
     * @param build - build version number.
    */
    constructor(major: number, minor: number, build: number);
    /**
     * Construct a version object directly.
     *
     * @param major       - major version number.
     * @param minor       - minor version number.
     * @param build       - build version number.
     * @param development - development stage.
    */
    constructor(major: number, minor: number, build: number, development: string);
    /**
     * Extract the Minecraft version from CraftBukkit itself.
     *
     * @param text - the server version in text form.
     * @return The underlying MC version.
     * @throws IllegalStateException If we could not parse the version string.
    */
    static extractVersion(text: string): string;
    /**
     * Parse the given server version into a Minecraft version.
     *
     * @param serverVersion - the server version.
     * @return The resulting Minecraft version.
    */
    static fromServerVersion(serverVersion: string): MinecraftVersion;
    static getCurrentVersion(): MinecraftVersion;
    static setCurrentVersion(currentVersion: MinecraftVersion);
    static atOrAbove(version: MinecraftVersion): boolean;
    /**
     * Major version number
     *
     * @return Current major version number.
    */
    getMajor(): number;
    /**
     * Minor version number
     *
     * @return Current minor version number.
    */
    getMinor(): number;
    /**
     * Build version number
     *
     * @return Current build version number.
    */
    getBuild(): number;
    /**
     * Retrieve the development stage.
     *
     * @return Development stage, or NULL if this is a release.
    */
    getDevelopmentStage(): string;
    /**
     * Determine if this version is a snapshot.
     *
     * @return The snapshot version.
    */
    isSnapshot(): boolean;
    /**
     * Checks if this version is at or above the current version the server is running.
     *
     * @return true if this version is equal or newer than the server version, false otherwise.
    */
    atOrAbove(): boolean;
    /**
     * Retrieve the version String (major.minor.build) only.
     *
     * @return A normal version string.
    */
    getVersion(): string;
    compareTo(o: MinecraftVersion): number;
    isAtLeast(other: MinecraftVersion): boolean;
    equals(obj: any): boolean;
    hashCode(): number;
    toString(): string;
  }
  export interface MinecraftVersion extends Comparable<MinecraftVersion>, Serializable {}
  /**
   * Represents an abstract class loader that can only retrieve classes by their canonical name.
   *
   * @author Kristian
  */
  export class ClassSource {
    /**
     * Construct a class source from the default class loader.
     *
     * @return A class source.
    */
    static fromClassLoader(): ClassSource;
    /**
     * Construct a class source from the default class loader and package.
     *
     * @param packageName - the package that is prepended to every lookup.
     * @return A package source.
    */
    static fromPackage(packageName: string): ClassSource;
    /**
     * Construct a class source from the given class loader.
     *
     * @param loader - the class loader.
     * @return The corresponding class source.
    */
    static fromClassLoader(loader: ClassLoader): ClassSource;
    /**
     * Construct a class source from a mapping of canonical names and the corresponding classes. If the map is null, it
     * will be interpreted as an empty map. If the map does not contain a Class with the specified name, or that string
     * maps to NULL explicitly, a {@link ClassNotFoundException} will be thrown.
     *
     * @param map - map of class names and classes.
     * @return The class source.
    */
    static fromMap(map: Map<string, Class<any>>): ClassSource;
    /**
     * @return A ClassLoader which will never successfully load a class.
    */
    static empty(): ClassSource;
    /**
     * Append to canonical names together.
     *
     * @param a - the name to the left.
     * @param b - the name to the right.
     * @return The full canonical name, with a dot seperator.
    */
    static append(a: string, b: string): string;
    /**
     * Retrieve a class source that will retry failed lookups in the given source.
     *
     * @param other - the other class source.
     * @return A new class source.
    */
    retry(other: ClassSource): ClassSource;
    /**
     * Retrieve a class source that prepends a specific package name to every lookup.
     *
     * @param packageName - the package name to prepend.
     * @return The class source.
    */
    usingPackage(packageName: string): ClassSource;
    /**
     * Retrieve a class by name.
     *
     * @param canonicalName - the full canonical name of the class.
     * @return The corresponding class. If the class is not found, NULL should not be returned, instead a {@code
     * ClassNotFoundException} exception should be thrown.
     * @throws ClassNotFoundException If the class could not be found.
    */
    loadClass(canonicalName: string): Class<any>;
  }
  export class MinecraftMethodsTest {
    static initializeReflection(): void;
    testSendPacketMethods(): void;
    initializePacket(): void;
  }
  /**
   * Used to parse a snapshot version.
   *
   * @author Kristian
  */
  export class SnapshotVersion extends Comparable<SnapshotVersion> {
    constructor(version: string);
    /**
     * Retrieve the snapshot version within a week, starting at zero.
     *
     * @return The weekly version
    */
    getSnapshotWeekVersion(): number;
    /**
     * Retrieve the week this snapshot was released.
     *
     * @return The week.
    */
    getSnapshotDate(): Date;
    /**
     * Retrieve the raw snapshot string (yy'w'ww[a-z]).
     *
     * @return The snapshot string.
    */
    getSnapshotString(): string;
    compareTo(o: SnapshotVersion): number;
    equals(obj: any): boolean;
    hashCode(): number;
    toString(): string;
  }
  export interface SnapshotVersion extends Comparable<SnapshotVersion>, Serializable {}
  /**
   * Utility methods for reading and writing Minecraft objects to streams.
   *
   * @author Kristian
  */
  export class StreamSerializer {
    /**
     * Retrieve a default stream serializer.
     *
     * @return A serializer.
    */
    static getDefault(): StreamSerializer;
    /**
     * Write a variable integer to an output stream.
     *
     * @param destination - the destination.
     * @param value       - the value to write.
     * @throws IOException The destination stream threw an exception.
    */
    serializeVarInt(destination: DataOutputStream, value: number): void;
    /**
     * Read a variable integer from an input stream.
     *
     * @param source - the source.
     * @return The integer.
     * @throws IOException The source stream threw an exception.
    */
    deserializeVarInt(source: DataInputStream): number;
    /**
     * Serialize a string using the standard Minecraft UTF-16 encoding.
     * 
     * Note that strings cannot exceed 32767 characters, regardless if maximum lenght.
     *
     * @param output - the output stream.
     * @param text   - the string to serialize.
    */
    serializeString(output: DataOutputStream, text: string): void;
    /**
     * Deserialize a string using the standard Minecraft UTF-16 encoding.
     * 
     * Note that strings cannot exceed 32767 characters, regardless if maximum length.
     *
     * @param input         - the input stream.
     * @param maximumLength - the maximum length of the string.
     * @return The deserialized string.
    */
    deserializeString(input: DataInputStream, maximumLength: number): string;
  }
  export class SnapshotVersionTest {
    testDates(): void;
    testDateParsingProblem(): void;
    testMissingWeekVersion(): void;
  }
  /**
   * General utility class
   *
   * @author dmulloy2
  */
  export class Util {
    static classExists(className: string): boolean;
    /**
     * Whether this server is running Spigot or a Spigot fork. This works by checking if the SpigotConfig exists, which
     * should be true of all forks.
     *
     * @return True if it is, false if not.
    */
    static isUsingSpigot(): boolean;
    /**
     * Checks if the server is getting reloaded by walking down the current thread stack trace.
     *
     * @return true if the server is getting reloaded, false otherwise.
    */
    static isCurrentlyReloading(): boolean;
  }
  export class TestUtils {
    static setFinalField(obj: any, field: Field, newValue: any): void;
  }
  /**
   * Represents a shared ByteBuddy factory.
   *
   * @author Kristian
  */
  export class ByteBuddyFactory {
    static getInstance(): ByteBuddyFactory;
    /**
     * Get the current class loader we are using.
     *
     * @return The current class loader.
    */
    getClassLoader(): ClassLoader;
    /**
     * Set the current class loader to use when constructing enhancers.
     *
     * @param loader - the class loader
    */
    setClassLoader(classLoader: ClassLoader);
  }
  /**
   * Utility methods for sending chat messages.
   *
   * @author Kristian
  */
  export class ChatExtensions {
    /**
     * Print a flower box around a given message.
     *
     * @param message      - the message to print.
     * @param marginChar   - the character to use as margin.
     * @param marginWidth  - the width (in characters) of the left and right margin.
     * @param marginHeight - the height (in characters) of the top and buttom margin.
     * @return Flowerboxed message
    */
    static toFlowerBox(message: string[], marginChar: string, marginWidth: number, marginHeight: number): string[];
    /**
     * Broadcast a message without invoking any packet listeners.
     *
     * @param message    - message to send.
     * @param permission - permission required to receieve the message. NULL to target everyone.
    */
    broadcastMessageSilently(message: string, permission: string): void;
  }
  /**
   * Methods and constants specifically used in conjuction with reflecting Minecraft object.
   *
   * @author Kristian
  */
  export class MinecraftReflection {
    /**
     * Retrieve a regular expression that can match Minecraft package objects.
     *
     * @return Minecraft package matcher.
    */
    static getMinecraftObjectRegex(): string;
    /**
     * Retrieve the name of the Minecraft server package.
     *
     * @return Full canonical name of the Minecraft server package.
    */
    static getMinecraftPackage(): string;
    /**
     * Retrieve the package version of the underlying CraftBukkit server.
     *
     * @return The craftbukkit package version.
    */
    static getPackageVersion(): string;
    /**
     * Retrieve the name of the root CraftBukkit package.
     *
     * @return Full canonical name of the root CraftBukkit package.
    */
    static getCraftBukkitPackage(): string;
    /**
     * Dynamically retrieve the Bukkit entity from a given entity.
     *
     * @param nmsObject - the NMS entity.
     * @return A bukkit entity.
     * @throws RuntimeException If we were unable to retrieve the Bukkit entity.
    */
    static getBukkitEntity(nmsObject: any): any;
    /**
     * Determine if a given object can be found within the package net.minecraft.server.
     *
     * @param obj - the object to test.
     * @return TRUE if it can, FALSE otherwise.
    */
    static isMinecraftObject(obj: any): boolean;
    /**
     * Determine if the given class is found within the package net.minecraft.server, or any equivalent package.
     *
     * @param clazz - the class to test.
     * @return TRUE if it can, FALSE otherwise.
    */
    static isMinecraftClass(clazz: Class<any>): boolean;
    /**
     * Determine if a given object is found in net.minecraft.server, and has the given name.
     *
     * @param obj       - the object to test.
     * @param className - the class name to test.
     * @return TRUE if it can, FALSE otherwise.
    */
    static isMinecraftObject(obj: any, className: string): boolean;
    /**
     * Determine if a given Object is compatible with a given Class. That is, whether or not the Object is an instance of
     * that Class or one of its subclasses. If either is null, false is returned.
     *
     * @param clazz  Class to test for, may be null
     * @param object the Object to test, may be null
     * @return True if it is, false if not
     * @see Class#isAssignableFrom(Class)
    */
    static is(clazz: Class<any>, object: any): boolean;
    /**
     * Equivalent to {@link #is(Class, Object)} but we don't call getClass again
    */
    static is(clazz: Class<any>, test: Class<any>): boolean;
    /**
     * Determine if a given object is a BlockPosition.
     *
     * @param obj - the object to test.
     * @return TRUE if it can, FALSE otherwise.
    */
    static isBlockPosition(obj: any): boolean;
    /**
     * Determine if the given object is an NMS ChunkCoordIntPar.
     *
     * @param obj - the object.
     * @return TRUE if it can, FALSE otherwise.
    */
    static isChunkCoordIntPair(obj: any): boolean;
    /**
     * Determine if the given object is actually a Minecraft packet.
     *
     * @param obj - the given object.
     * @return TRUE if it is, FALSE otherwise.
    */
    static isPacketClass(obj: any): boolean;
    /**
     * Determine if the given object is assignable to a NetServerHandler (PlayerConnection)
     *
     * @param obj - the given object.
     * @return TRUE if it is, FALSE otherwise.
    */
    static isServerHandler(obj: any): boolean;
    /**
     * Determine if the given object is actually a Minecraft packet.
     *
     * @param obj - the given object.
     * @return TRUE if it is, FALSE otherwise.
    */
    static isMinecraftEntity(obj: any): boolean;
    /**
     * Determine if the given object is a NMS ItemStack.
     *
     * @param value - the given object.
     * @return TRUE if it is, FALSE otherwise.
    */
    static isItemStack(value: any): boolean;
    /**
     * Determine if the given object is a CraftPlayer class.
     *
     * @param value - the given object.
     * @return TRUE if it is, FALSE otherwise.
    */
    static isCraftPlayer(value: any): boolean;
    /**
     * Determine if the given object is a Minecraft player entity.
     *
     * @param obj - the given object.
     * @return TRUE if it is, FALSE otherwise.
    */
    static isMinecraftPlayer(obj: any): boolean;
    /**
     * Determine if the given object is a data watcher object.
     *
     * @param obj - the given object.
     * @return TRUE if it is, FALSE otherwise.
    */
    static isDataWatcher(obj: any): boolean;
    /**
     * Determine if the given object is an IntHashMap object.
     *
     * @param obj - the given object.
     * @return TRUE if it is, FALSE otherwise.
    */
    static isIntHashMap(obj: any): boolean;
    /**
     * Determine if the given object is a CraftItemStack instancey.
     *
     * @param obj - the given object.
     * @return TRUE if it is, FALSE otherwise.
    */
    static isCraftItemStack(obj: any): boolean;
    /**
     * Retrieve the EntityPlayer (NMS) class.
     *
     * @return The entity class.
    */
    static getEntityPlayerClass(): Class<any>;
    /**
     * Retrieve the EntityHuman class.
     *
     * @return The entity human class.
    */
    static getEntityHumanClass(): Class<any>;
    /**
     * Retrieve the GameProfile class.
     *
     * @return The game profile class.
    */
    static getGameProfileClass(): Class<any>;
    /**
     * Retrieve the entity (NMS) class.
     *
     * @return The entity class.
    */
    static getEntityClass(): Class<any>;
    /**
     * Retrieve the CraftChatMessage.
     *
     * @return The CraftChatMessage class.
    */
    static getCraftChatMessage(): Class<any>;
    /**
     * Retrieve the WorldServer (NMS) class.
     *
     * @return The WorldServer class.
    */
    static getWorldServerClass(): Class<any>;
    /**
     * Retrieve the World (NMS) class.
     *
     * @return The world class.
    */
    static getNmsWorldClass(): Class<any>;
    /**
     * Retrieve the packet class.
     *
     * @return The packet class.
    */
    static getPacketClass(): Class<any>;
    static getByteBufClass(): Class<any>;
    /**
     * Retrieve the EnumProtocol class.
     *
     * @return The Enum protocol class.
    */
    static getEnumProtocolClass(): Class<any>;
    /**
     * Retrieve the IChatBaseComponent class.
     *
     * @return The IChatBaseComponent.
    */
    static getIChatBaseComponentClass(): Class<any>;
    static getIChatBaseComponentArrayClass(): Class<any>;
    /**
     * Retrieve the NMS chat component text class.
     *
     * @return The chat component class.
    */
    static getChatComponentTextClass(): Class<any>;
    /**
     * Attempt to find the ChatSerializer class.
     *
     * @return The serializer class.
     * @throws IllegalStateException If the class could not be found or deduced.
    */
    static getChatSerializerClass(): Class<any>;
    /**
     * Retrieve the ServerPing class.
     *
     * @return The ServerPing class.
    */
    static getServerPingClass(): Class<any>;
    /**
     * Retrieve the ServerPingServerData class.
     *
     * @return The ServerPingServerData class.
    */
    static getServerPingServerDataClass(): Class<any>;
    /**
     * Retrieve the ServerPingPlayerSample class.
     *
     * @return The ServerPingPlayerSample class.
    */
    static getServerPingPlayerSampleClass(): Class<any>;
    /**
     * Retrieve the MinecraftServer class.
     *
     * @return MinecraftServer class.
    */
    static getMinecraftServerClass(): Class<any>;
    /**
     * Retrieve the NMS statistics class.
     *
     * @return The statistics class.
    */
    static getStatisticClass(): Class<any>;
    /**
     * Retrieve the NMS statistic list class.
     *
     * @return The statistic list class.
    */
    static getStatisticListClass(): Class<any>;
    /**
     * Retrieve the player list class (or ServerConfigurationManager),
     *
     * @return The player list class.
    */
    static getPlayerListClass(): Class<any>;
    /**
     * Retrieve the PlayerConnection class.
     *
     * @return The PlayerConnection class.
    */
    static getPlayerConnectionClass(): Class<any>;
    /**
     * Retrieve the NetworkManager class.
     *
     * @return The NetworkManager class.
    */
    static getNetworkManagerClass(): Class<any>;
    /**
     * Retrieve the NMS ItemStack class.
     *
     * @return The ItemStack class.
    */
    static getItemStackClass(): Class<any>;
    /**
     * Retrieve the Block (NMS) class.
     *
     * @return Block (NMS) class.
    */
    static getBlockClass(): Class<any>;
    static getItemClass(): Class<any>;
    static getFluidTypeClass(): Class<any>;
    static getParticleTypeClass(): Class<any>;
    /**
     * Retrieve the WorldType class.
     *
     * @return The WorldType class.
    */
    static getWorldTypeClass(): Class<any>;
    /**
     * Retrieve the DataWatcher class.
     *
     * @return The DataWatcher class.
    */
    static getDataWatcherClass(): Class<any>;
    /**
     * Retrieves the BlockPosition class.
     *
     * @return The BlockPosition class.
    */
    static getBlockPositionClass(): Class<any>;
    /**
     * Retrieves the Vec3D class.
     *
     * @return The Vec3D class.
    */
    static getVec3DClass(): Class<any>;
    /**
     * Retrieve the ChunkCoordIntPair class.
     *
     * @return The ChunkCoordIntPair class.
    */
    static getChunkCoordIntPair(): Class<any>;
    /**
     * Retrieve the DataWatcher Item class.
     *
     * @return The class
    */
    static getDataWatcherItemClass(): Class<any>;
    static getDataWatcherObjectClass(): Class<any>;
    static watcherObjectExists(): boolean;
    static getDataWatcherSerializerClass(): Class<any>;
    static getDataWatcherRegistryClass(): Class<any>;
    static getMinecraftKeyClass(): Class<any>;
    static getMobEffectListClass(): Class<any>;
    static getSoundEffectClass(): Class<any>;
    /**
     * Retrieve the ServerConnection abstract class.
     *
     * @return The ServerConnection class.
    */
    static getServerConnectionClass(): Class<any>;
    /**
     * Retrieve the NBT base class.
     *
     * @return The NBT base class.
    */
    static getNBTBaseClass(): Class<any>;
    /**
     * Retrieve the NBT read limiter class.
     *
     * @return The NBT read limiter.
    */
    static getNBTReadLimiterClass(): Class<any>;
    /**
     * Retrieve the NBT Compound class.
     *
     * @return The NBT Compond class.
    */
    static getNBTCompoundClass(): Class<any>;
    /**
     * Retrieve the EntityTracker (NMS) class.
     *
     * @return EntityTracker class.
    */
    static getEntityTrackerClass(): Class<any>;
    /**
     * Retrieve the attribute snapshot class.
     * 
     * This stores the final value of an attribute, along with all the associated computational steps.
     *
     * @return The attribute snapshot class.
    */
    static getAttributeSnapshotClass(): Class<any>;
    /**
     * Retrieve the IntHashMap class.
     *
     * @return IntHashMap class.
    */
    static getIntHashMapClass(): Class<any>;
    /**
     * Retrieve the attribute modifier class.
     *
     * @return Attribute modifier class.
    */
    static getAttributeModifierClass(): Class<any>;
    /**
     * Retrieve the net.minecraft.server.MobEffect class.
     *
     * @return The mob effect class.
    */
    static getMobEffectClass(): Class<any>;
    /**
     * Retrieve the packet data serializer class that overrides ByteBuf.
     *
     * @return The data serializer class.
    */
    static getPacketDataSerializerClass(): Class<any>;
    /**
     * Retrieve the NBTCompressedStreamTools class.
     *
     * @return The NBTCompressedStreamTools class.
    */
    static getNbtCompressedStreamToolsClass(): Class<any>;
    /**
     * Retrieve the NMS tile entity class.
     *
     * @return The tile entity class.
    */
    static getTileEntityClass(): Class<any>;
    /**
     * Retrieve the Gson class used by Minecraft.
     *
     * @return The Gson class.
    */
    static getMinecraftGsonClass(): Class<any>;
    /**
     * Retrieve the ItemStack[] class.
     *
     * @return The ItemStack[] class.
    */
    static getItemStackArrayClass(): Class<any>;
    /**
     * Retrieve the array class of a given component type.
     *
     * @param componentType - type of each element in the array.
     * @return The class of the array.
    */
    static getArrayClass(componentType: Class<any>): Class<any>;
    /**
     * Retrieve the CraftItemStack class.
     *
     * @return The CraftItemStack class.
    */
    static getCraftItemStackClass(): Class<any>;
    /**
     * Retrieve the CraftPlayer class.
     *
     * @return CraftPlayer class.
    */
    static getCraftPlayerClass(): Class<any>;
    /**
     * Retrieve the CraftWorld class.
     *
     * @return The CraftWorld class.
    */
    static getCraftWorldClass(): Class<any>;
    /**
     * Retrieve the CraftEntity class.
     *
     * @return CraftEntity class.
    */
    static getCraftEntityClass(): Class<any>;
    /**
     * Retrieve the CraftChatMessage introduced in 1.7.2
     *
     * @return The CraftChatMessage class.
    */
    static getCraftMessageClass(): Class<any>;
    /**
     * Retrieve the PlayerInfoData class in 1.8.
     *
     * @return The PlayerInfoData class
    */
    static getPlayerInfoDataClass(): Class<any>;
    /**
     * Retrieves the entity use action class in 1.17.
     *
     * @return The EntityUseAction class
    */
    static getEnumEntityUseActionClass(): Class<any>;
    /**
     * Determine if the given object is a PlayerInfoData.
     *
     * @param obj - the given object.
     * @return TRUE if it is, FALSE otherwise.
    */
    static isPlayerInfoData(obj: any): boolean;
    /**
     * Retrieve the IBlockData class in 1.8.
     *
     * @return The IBlockData class
    */
    static getIBlockDataClass(): Class<any>;
    /**
     * Retrieve the MultiBlockChangeInfo class in 1.8.
     *
     * @return The MultiBlockChangeInfo class
    */
    static getMultiBlockChangeInfoClass(): Class<any>;
    /**
     * Retrieve the MultiBlockChangeInfo array class in 1.8.
     *
     * @return The MultiBlockChangeInfo array class
    */
    static getMultiBlockChangeInfoArrayClass(): Class<any>;
    /**
     * Retrieve the PacketPlayOutGameStateChange.a class, aka GameState in 1.16
     *
     * @return The GameState class
    */
    static getGameStateClass(): Class<any>;
    static signUpdateExists(): boolean;
    static getNonNullListClass(): Class<any>;
    static getCraftSoundClass(): Class<any>;
    static getSectionPositionClass(): Class<any>;
    /**
     * Retrieve the class object of a specific CraftBukkit class.
     *
     * @param className - the specific CraftBukkit class.
     * @return Class object.
     * @throws RuntimeException If we are unable to find the given class.
    */
    static getCraftBukkitClass(className: string): Class<any>;
    /**
     * Retrieve the class object of a specific Minecraft class.
     *
     * @param className - the specific Minecraft class.
     * @return Class object.
     * @throws RuntimeException If we are unable to find the given class.
    */
    static getMinecraftClass(className: string): Class<any>;
    static getNullableNMS(className: string, ...aliases: string[]): Class<any>;
    /**
     * Retrieve the first class that matches a specified Minecraft name.
     *
     * @param className - the specific Minecraft class.
     * @param aliases   - alternative names for this Minecraft class.
     * @return Class object.
     * @throws RuntimeException If we are unable to find any of the given classes.
    */
    static getMinecraftClass(className: string, ...aliases: string[]): Class<any>;
    /**
     * Retrieve the class object of a specific Minecraft library class.
     *
     * @param className - the specific library Minecraft class.
     * @return Class object.
     * @throws RuntimeException If we are unable to find the given class.
    */
    static getMinecraftLibraryClass(className: string): Class<any>;
    /**
     * Dynamically retrieve the NetworkManager name.
     *
     * @return Name of the NetworkManager class.
    */
    static getNetworkManagerName(): string;
    /**
     * Retrieve an instance of the packet data serializer wrapper.
     *
     * @param buffer - the buffer.
     * @return The instance.
    */
    static getPacketDataSerializer(buffer: any): any;
    static getNbtTagTypes(): Class<any>;
    static getChatDeserializer(): Class<any>;
    static getChatMutableComponentClass(): Class<any>;
    static getDimensionManager(): Class<any>;
    static getMerchantRecipeList(): Class<any>;
    static getResourceKey(): Class<any>;
    static getEntityTypes(): Class<any>;
    static getParticleParam(): Class<any>;
    static getSectionPosition(): Class<any>;
    static getChunkProviderServer(): Class<any>;
    static getPlayerChunkMap(): Class<any>;
    static getIRegistry(): Class<any>;
    static getAttributeBase(): Class<any>;
    static getProfilePublicKeyClass(): Class<any>;
    static getSaltedSignatureClass(): Class<any>;
    static getProfilePublicKeyDataClass(): Class<any>;
    static getFastUtilClass(className: string): Class<any>;
    static getInt2ObjectMapClass(): Class<any>;
    static getIntArrayListClass(): Class<any>;
    static getLibraryClass(classname: string): Class<any>;
  }
  /**
   * Retrieve the content of well-known fields in Minecraft.
   *
   * @author Kristian
  */
  export class MinecraftFields {
    /**
     * Retrieve the PlayerConnection (or NetServerHandler) associated with a player.
     *
     * @param nmsPlayer - the NMS player.
     * @return The player connection.
    */
    static getPlayerConnection(nmsPlayer: any): any;
    /**
     * Retrieves the EntityPlayer player field from a PlayerConnection.
     *
     * @param playerConnection The PlayerConnection object from which to retrieve the EntityPlayer field.
     * @return The value of the EntityPlayer field in the PlayerConnection.
    */
    static getPlayerFromConnection(playerConnection: any): any;
  }
  /**
   * Represents a Guava CacheBuilder that is compatible with both Guava 10 and 13.
   * 
   * @author Kristian
  */
  export class SafeCacheBuilder<K, V> {
    /**
     * Construct a new safe cache builder.
     * @param  Key type
     * @param  Value type
     * 
     * @return A new cache builder.
    */
    static newBuilder<K, V>(): SafeCacheBuilder<K, V>;
    /**
     * Guides the allowed concurrency among update operations. Used as a hint
     * for internal sizing. The table is internally partitioned to try to permit
     * the indicated number of concurrent updates without contention. Because
     * assignment of entries to these partitions is not necessarily uniform, the
     * actual concurrency observed may vary. Ideally, you should choose a value
     * to accommodate as many threads as will ever concurrently modify the
     * table. Using a significantly higher value than you need can waste space
     * and time, and a significantly lower value can lead to thread contention.
     * But overestimates and underestimates within an order of magnitude do not
     * usually have much noticeable impact. A value of one permits only one
     * thread to modify the cache at a time, but since read operations can
     * proceed concurrently, this still yields higher concurrency than full
     * synchronization. Defaults to 4.
     * 
     * 
     * Note:The default may change in the future. If you care about this
     * value, you should always choose it explicitly.
     * 
     * @param concurrencyLevel New concurrency level
     * @return This for chaining
     * 
     * @throws IllegalArgumentException if `concurrencyLevel` is
     *         nonpositive
     * @throws IllegalStateException if a concurrency level was already set
    */
    concurrencyLevel(concurrencyLevel: number): SafeCacheBuilder<K, V>;
    /**
     * Specifies that each entry should be automatically removed from the cache
     * once a fixed duration has elapsed after the entry's creation, or last
     * access. Access time is reset by {@link com.google.common.cache.Cache#get Cache.get()},
     * but not by operations on the view returned by
     * {@link com.google.common.cache.Cache#asMap() Cache.asMap()}.
     * 
     * 
     * When `duration` is zero, elements will be evicted immediately after
     * being loaded into the cache. This has the same effect as invoking
     * {@link #maximumSize maximumSize}`(0)`. It can be useful in testing,
     * or to disable caching temporarily without a code change.
     * 
     * 
     * Expired entries may be counted by {@link com.google.common.cache.Cache#size Cache.size()}, but will never be
     * visible to read or write operations. Expired entries are currently
     * cleaned up during write operations, or during occasional read operations
     * in the absense of writes; though this behavior may change in the future.
     * 
     * @param duration the length of time after an entry is last accessed that
     *            it should be automatically removed
     * @param unit the unit that `duration` is expressed in
     * @return This for chaining
     * 
     * @throws IllegalArgumentException if `duration` is negative
     * @throws IllegalStateException if the time to idle or time to live was
     *             already set
    */
    expireAfterAccess(duration: number, unit: TimeUnit): SafeCacheBuilder<K, V>;
    /**
     * Specifies that each entry should be automatically removed from the cache
     * once a fixed duration has elapsed after the entry's creation, or the most
     * recent replacement of its value.
     * 
     * 
     * When `duration` is zero, elements will be evicted immediately after
     * being loaded into the cache. This has the same effect as invoking
     * {@link #maximumSize maximumSize}`(0)`. It can be useful in testing,
     * or to disable caching temporarily without a code change.
     * 
     * 
     * Expired entries may be counted by {@link com.google.common.cache.Cache#size Cache.size()}, but will never be
     * visible to read or write operations. Expired entries are currently
     * cleaned up during write operations, or during occasional read operations
     * in the absense of writes; though this behavior may change in the future.
     * 
     * @param duration the length of time after an entry is created that it
     *            should be automatically removed
     * @param unit the unit that `duration` is expressed in
     * @return This for chaining
     * 
     * @throws IllegalArgumentException if `duration` is negative
     * @throws IllegalStateException if the time to live or time to idle was
     *             already set
    */
    expireAfterWrite(duration: number, unit: TimeUnit): SafeCacheBuilder<K, V>;
    /**
     * Sets the minimum total size for the internal hash tables. For example, if
     * the initial capacity is `60`, and the concurrency level is
     * `8`, then eight segments are created, each having a hash table of
     * size eight. Providing a large enough estimate at construction time avoids
     * the need for expensive resizing operations later, but setting this value
     * unnecessarily high wastes memory.
     * 
     * @param initialCapacity - initial capacity
     * @return This for chaining
     * 
     * @throws IllegalArgumentException if `initialCapacity` is negative
     * @throws IllegalStateException if an initial capacity was already set
    */
    initialCapacity(initialCapacity: number): SafeCacheBuilder<K, V>;
    maximumSize(size: number): SafeCacheBuilder<K, V>;
    /**
     * Specifies that each value (not key) stored in the cache should be wrapped
     * in a {@link java.lang.ref.SoftReference SoftReference} (by default, strong references are used).
     * Softly-referenced objects will be garbage-collected in a globally
     * least-recently-used manner, in response to memory demand.
     * 
     * 
     * Warning: in most circumstances it is better to set a per-cache
     * {@linkplain #maximumSize maximum size} instead of using soft references.
     * You should only use this method if you are well familiar with the
     * practical consequences of soft references.
     * 
     * 
     * Note: when this method is used, the resulting cache will use
     * identity (`==`) comparison to determine equality of values.
     * 
     * @return This for chaining
     * 
     * @throws IllegalStateException if the value strength was already set
    */
    softValues(): SafeCacheBuilder<K, V>;
    /**
     * Specifies that each key (not value) stored in the cache should be wrapped
     * in a {@link java.lang.ref.WeakReference WeakReference} (by default, strong references are used).
     * 
     * 
     * Warning: when this method is used, the resulting cache will use
     * identity (`==`) comparison to determine equality of keys.
     * 
     * @return This for chaining
     * 
     * @throws IllegalStateException if the key strength was already set
    */
    weakKeys(): SafeCacheBuilder<K, V>;
    /**
     * Specifies that each value (not key) stored in the cache should be wrapped
     * in a {@link java.lang.ref.WeakReference WeakReference} (by default, strong references are used).
     * 
     * 
     * Weak values will be garbage collected once they are weakly reachable.
     * This makes them a poor candidate for caching; consider
     * {@link #softValues} instead.
     * 
     * 
     * Note: when this method is used, the resulting cache will use
     * identity (`==`) comparison to determine equality of values.
     * 
     * @return This for chaining
     * 
     * @throws IllegalStateException if the value strength was already set
    */
    weakValues(): SafeCacheBuilder<K, V>;
  }
  export class Closer extends AutoCloseable {
    static create(): Closer;
    static closeQuietly(close: Closeable): void;
    register<C>(close: C): C;
    close(): void;
  }
  /**
   * Static methods for accessing Minecraft methods.
   *
   * @author Kristian
  */
  export class MinecraftMethods {
  
  }
  /**
   * Represents a class for printing hexadecimal dumps.
   * 
   * @author Kristian
  */
  export class HexDumper {
    /**
     * Retrieve a hex dumper tuned for lines of 80 characters:
     * 
     * Values
     * 
     *     Property
     *     Value
     * 
     * 
     *     Position Length
     *     6
     * 
     * 
     *     Position Suffix
     *     ": "
     * 
     * 
     *     Delimiter
     *     " "
     * 
     * 
     *     Group Length
     *     2
     * 
     * 
     *     Group Count
     *     24
     * 
     * 
     *     Line Delimiter
     *     "\n"
     * 
     * 
     * @return The default dumper.
    */
    static defaultDumper(): HexDumper;
    /**
     * Set the delimiter between each new line.
     * @param lineDelimiter - the line delimiter.
     * @return This instance, for chaining.
    */
    lineDelimiter(lineDelimiter: string): HexDumper;
    /**
     * Set the number of hex characters in the position.
     * @param positionLength - number of characters, from 0 to 8.
     * @return This instance, for chaining.
    */
    positionLength(positionLength: number): HexDumper;
    /**
     * Set a suffix to write after each position.
     * @param positionSuffix - non-null string to write after the positions.
     * @return This instance, for chaining.
    */
    positionSuffix(positionSuffix: string): HexDumper;
    /**
     * Set the delimiter to write in between each group of hexadecimal characters.
     * @param delimiter - non-null string to write between each group.
     * @return This instance, for chaining.
    */
    delimiter(delimiter: string): HexDumper;
    /**
     * Set the length of each group in hexadecimal characters.
     * @param groupLength - the length of each group.
     * @return This instance, for chaining.
    */
    groupLength(groupLength: number): HexDumper;
    /**
     * Set the number of groups in each line. This is limited by the supply of bytes in the byte array.
     * 
     * Use {@link Integer#MAX_VALUE} to effectively disable lines.
     * @param groupCount - the count of groups.
     * @return This instance, for chaining.
    */
    groupCount(groupCount: number): HexDumper;
    /**
     * Append the hex dump of the given data to the string builder, using the current formatting settings.
     * @param appendable - appendable source.
     * @param data - the data to dump.
     * @throws IOException Any underlying IO exception.
    */
    appendTo(appendable: Appendable, data: number[]): void;
    /**
     * Append the hex dump of the given data to the string builder, using the current formatting settings.
     * @param appendable - appendable source.
     * @param data - the data to dump.
     * @param start - the starting index of the data.
     * @param length - the number of bytes to dump.
     * @throws IOException Any underlying IO exception.
    */
    appendTo(appendable: Appendable, data: number[], start: number, length: number): void;
    /**
     * Append the hex dump of the given data to the string builder, using the current formatting settings.
     * @param builder - the builder.
     * @param data - the data to dump.
    */
    appendTo(builder: StringBuilder, data: number[]): void;
    /**
     * Append the hex dump of the given data to the string builder, using the current formatting settings.
     * @param builder - the builder.
     * @param data - the data to dump.
     * @param start - the starting index of the data.
     * @param length - the number of bytes to dump.
    */
    appendTo(builder: StringBuilder, data: number[], start: number, length: number): void;
    /**
     * Calculate the length of each line.
     * @param byteCount - the maximum number of bytes
     * @return The lenght of the final line.
    */
    getLineLength(byteCount: number): number;
  }
  export class MinecraftReflectionTest {
    static initializeBukkit(): void;
    static undoMocking(): void;
    testBukkitMethod(): void;
    testIllegalClass(): void;
    testNullable(): void;
    testAttributeSnapshot(): void;
    testChatComponent(): void;
    testChatSerializer(): void;
    testChunkCoordIntPair(): void;
    testIBlockData(): void;
    testPlayerConnection(): void;
    testServerPing(): void;
    testServerPingPlayerSample(): void;
    testServerPingServerData(): void;
    testNbtStreamTools(): void;
    testDataWatcherItem(): void;
    testLoginSignature(): void;
    testItemStacks(): void;
    testGameProfile(): void;
    testEnumEntityUseAction(): void;
  }
  
  }
  declare module 'com.comphenix.protocol.updater.Updater' {
  import { Enum } from 'java.lang';
  /**
   * Allows the dev to specify the type of update that will be run.
  */
  export class UpdateType extends Enum<UpdateType> {
    /**
     * Run a version check, and then if the file is out of date, download the newest version.
    */
    static readonly DEFAULT: UpdateType;
    /**
     * Don't run a version check, just find the latest update and download it.
    */
    static readonly NO_VERSION_CHECK: UpdateType;
    /**
     * Get information about the version and the download size, but don't actually download anything.
    */
    static readonly NO_DOWNLOAD: UpdateType;
    static valueOf(name: string): UpdateType;
    static values(): UpdateType[];
  }
  /**
   * Gives the dev the result of the update process. Can be obtained by called getResult().
  */
  export class UpdateResult extends Enum<UpdateResult> {
    /**
     * The updater found an update, and has readied it to be loaded the next time the server restarts/reloads.
    */
    static readonly SUCCESS: UpdateResult;
    /**
     * The updater did not find an update, and nothing was downloaded.
    */
    static readonly NO_UPDATE: UpdateResult;
    /**
     * The server administrator has disabled the updating system
    */
    static readonly DISABLED: UpdateResult;
    /**
     * The updater found an update, but was unable to download it.
    */
    static readonly FAIL_DOWNLOAD: UpdateResult;
    /**
     * For some reason, the updater was unable to contact dev.bukkit.org to download the file.
    */
    static readonly FAIL_DBO: UpdateResult;
    /**
     * When running the version check, the file on DBO did not contain the a version in the format 'vVersion' such as
     * 'v1.0'.
    */
    static readonly FAIL_NOVERSION: UpdateResult;
    /**
     * The id provided by the plugin running the updater was invalid and doesn't exist on DBO.
    */
    static readonly FAIL_BADID: UpdateResult;
    /**
     * The server administrator has improperly configured their API key in the configuration
    */
    static readonly FAIL_APIKEY: UpdateResult;
    /**
     * The updater found an update, but because of the UpdateType being set to NO_DOWNLOAD, it wasn't downloaded.
    */
    static readonly UPDATE_AVAILABLE: UpdateResult;
    /**
     * The updater found an update at Spigot
    */
    static readonly SPIGOT_UPDATE_AVAILABLE: UpdateResult;
    static valueOf(name: string): UpdateResult;
    static values(): UpdateResult[];
    toString(): string;
  }
  
  }
  declare module 'com.comphenix.protocol.error' {
  import { Throwable, StackTraceElement, Class, Exception } from 'java.lang';
  import { File } from 'java.io';
  export class PluginContext {
    /**
     * Retrieve the name of the plugin that called the last method(s) in the exception.
     * @param ex - the exception.
     * @return The name of the plugin, or NULL.
    */
    static getPluginCaller(ex: Exception): string;
    /**
     * Lookup the plugin that this method invocation belongs to, and return its file name.
     * @param element - the method invocation.
     * @return Plugin name, or NULL if not found.
    */
    static getPluginName(element: StackTraceElement): string;
  }
  /**
   * Represents a strongly-typed report. Subclasses should be immutable.
   * 
   * By convention, a report must be declared as a static field publicly accessible from the sender class.
   * @author Kristian
  */
  export class ReportType {
    /**
     * Construct a new report type.
     * @param errorFormat - string used to format the underlying report.
    */
    constructor(errorFormat: string);
    /**
     * Convert the given report to a string, using the provided parameters.
     * @param parameters - parameters to insert, or NULL to insert nothing.
     * @return The full report in string format.
    */
    getMessage(parameters: any[]): string;
    toString(): string;
    /**
     * Retrieve the class of the given sender.
     * 
     * If the sender is already a Class, we return it.
     * @param sender - the sender to look up.
     * @return The class of the sender.
    */
    static getSenderClass(sender: any): Class<any>;
    /**
     * Retrieve the full canonical name of a given report type.
     * 
     * Note that the sender may be a class (for static callers), in which 
     * case it will be used directly instead of its getClass() method.
     * 
     * It is thus not advisable for class classes to report reports.
     * @param sender - the sender, or its class.
     * @param type - the report type.
     * @return The full canonical name.
    */
    static getReportName(sender: any, type: ReportType): string;
    /**
     * Retrieve all publicly associated reports.
     * @param sender - sender class.
     * @return All associated reports.
    */
    static getReports(sender: Class<any>): ReportType[];
  }
  /**
   * Represents an object that can forward an error {@link Report} to the display and permanent storage.
   * 
   * @author Kristian
  */
  export class ErrorReporter {
  
  }
  /**
   * Represents a error or warning report.
   * 
   * @author Kristian
  */
  export class Report {
    /**
     * Format the current report type with the provided message parameters.
     * @return The formated report message.
    */
    getReportMessage(): string;
    /**
     * Retrieve the message parameters that will be used to construc the report message.
     * 
     * This should not be confused with the method parameters of the caller method.
     * @return Message parameters.
    */
    getMessageParameters(): any[];
    /**
     * Retrieve the parameters of the caller method. Optional - may be NULL.
     * @return Parameters or the caller method.
    */
    getCallerParameters(): any[];
    /**
     * Retrieve the associated exception, or NULL if not found.
     * @return Associated exception, or NULL.
    */
    getException(): Throwable;
    /**
     * Determine if we have any message parameters.
     * @return TRUE if there are any message parameters, FALSE otherwise.
    */
    hasMessageParameters(): boolean;
    /**
     * Determine if we have any caller parameters.
     * @return TRUE if there are any caller parameters, FALSE otherwise.
    */
    hasCallerParameters(): boolean;
    /**
     * Retrieve desired  minimum number of nanoseconds until a report of the same type and parameters should be reprinted.
     * 
     * Note that this may be ignored or modified by the error reporter. Zero indicates no rate limit.
     * @return The number of nanoseconds. Never negative.
    */
    getRateLimit(): number;
    hashCode(): number;
    equals(obj: any): boolean;
  }
  
  }
  declare module 'com.comphenix.protocol.injector.packet' {
  import { Register } from 'com.comphenix.protocol.injector.packet.PacketRegistry';
  import { Class } from 'java.lang';
  /**
   * Represents an incoming packet injector.
   *
   * @author Kristian
  */
  export class PacketInjector {
    /**
     * Perform any necessary cleanup before unloading ProtocolLib.
    */
    cleanupAll(): void;
  }
  /**
   * Represents a class that can detect if a map has changed.
   * @author Kristian
  */
  export class MapContainer {
    constructor(source: any);
    /**
     * Determine if the map has changed.
     * @return TRUE if it has, FALSE otherwise.
    */
    hasChanged(): boolean;
    /**
     * Mark the map as changed or unchanged.
     * @param changed - TRUE if the map has changed, FALSE otherwise.
    */
    setChanged(changed: boolean): void;
  }
  /**
   * Static packet registry in Minecraft.
   * @author Kristian
  */
  export class PacketRegistry {
    /**
     * Ensure that our local register is up-to-date with Minecraft.
     * 
     * This operation may block the calling thread.
    */
    static synchronize(): void;
  }
  
  }
  declare module 'com.comphenix.protocol.events.ListeningWhitelist' {
  import { ListeningWhitelist } from 'com.comphenix.protocol.events';
  /**
   * Represents a builder of whitelists.
   *
   * @author Kristian
  */
  export class Builder {
    /**
     * Set the priority of the whitelist to monitor.
     *
     * @return This builder, for chaining.
    */
    monitor(): Builder;
    /**
     * Set the priority of the whitelist to normal.
     *
     * @return This builder, for chaining.
    */
    normal(): Builder;
    /**
     * Set the priority of the whitelist to lowest.
     *
     * @return This builder, for chaining.
    */
    lowest(): Builder;
    /**
     * Set the priority of the whitelist to low.
     *
     * @return This builder, for chaining.
    */
    low(): Builder;
    /**
     * Set the priority of the whitelist to highest.
     *
     * @return This builder, for chaining.
    */
    highest(): Builder;
    /**
     * Set the priority of the whitelist to high.
     *
     * @return This builder, for chaining.
    */
    high(): Builder;
    /**
     * Set the gamephase to {@link GamePhase#BOTH}.
     *
     * @return This builder, for chaining.
    */
    gamePhaseBoth(): Builder;
    /**
     * Construct a new whitelist from the values in this builder.
     *
     * @return The new whitelist.
    */
    build(): ListeningWhitelist;
  }
  
  }
  declare module 'com.comphenix.protocol.reflect.accessors' {
  import { Field, Constructor, Method } from 'java.lang.reflect';
  export class Accessors {
  
  }
  export class ConstructorAccessor {
    /**
     * Invoke the underlying constructor.
     *
     * @param args - the arguments to pass to the method.
     * @return The return value, or NULL for void methods.
    */
    invoke(...args: any[]): any;
    /**
     * Retrieve the underlying constructor.
     *
     * @return The method.
    */
    getConstructor(): Constructor<any>;
  }
  export class AccessorsTest {
    testField(): void;
    testMethod(): void;
    testConstructor(): void;
  }
  /**
   * Represents an interface for invoking a method.
   *
   * @author Kristian
  */
  export class MethodAccessor {
    /**
     * Invoke the underlying method.
     *
     * @param target - the target instance, or NULL for a static method.
     * @param args   - the arguments to pass to the method.
     * @return The return value, or NULL for void methods.
    */
    invoke(target: any, ...args: any[]): any;
    /**
     * Retrieve the underlying method.
     *
     * @return The method.
    */
    getMethod(): Method;
  }
  /**
   * Represents an interface for accessing a field.
   *
   * @author Kristian
  */
  export class FieldAccessor {
    /**
     * Retrieve the value of a field for a particular instance.
     *
     * @param instance - the instance, or NULL for a static field.
     * @return The value of the field.
     * @throws IllegalStateException If the current security context prohibits reflection.
    */
    get(instance: any): any;
    /**
     * Set the value of a field for a particular instance.
     *
     * @param instance - the instance, or NULL for a static field.
     * @param value    - the new value of the field.
    */
    set(instance: any, value: any): void;
    /**
     * Retrieve the underlying field.
     *
     * @return The field.
    */
    getField(): Field;
  }
  
  }
  declare module 'com.comphenix.protocol.wrappers.TroveWrapper' {
  import { RuntimeException } from 'java.lang';
  export class CannotFindTroveNoEntryValue extends RuntimeException {
  
  }
  
  }
  declare module 'com.comphenix.protocol.timing.TimedListenerManager' {
  import { Enum } from 'java.lang';
  export class ListenerType extends Enum<ListenerType> {
    static readonly ASYNC_SERVER_SIDE: ListenerType;
    static readonly ASYNC_CLIENT_SIDE: ListenerType;
    static readonly SYNC_SERVER_SIDE: ListenerType;
    static readonly SYNC_CLIENT_SIDE: ListenerType;
    static valueOf(name: string): ListenerType;
    static values(): ListenerType[];
  }
  
  }
  declare module 'com.comphenix.protocol.wrappers' {
  import { Field, Constructor, Method } from 'java.lang.reflect';
  import { Set, Optional, List, Map } from 'java.util';
  import { Enum, Cloneable, Class } from 'java.lang';
  import { StringReader } from 'java.io';
  import { Function, Supplier } from 'java.util.function';
  export class WrappedParticleTest {
    static beforeClass(): void;
    testBlockData(): void;
    testItemStacks(): void;
    testRedstone(): void;
  }
  /**
   * Utility class for converting between the BungeeCord Chat API and ProtocolLib's wrapper
   * 
   * Note: The BungeeCord Chat API is not included in CraftBukkit.
   * @author dmulloy2
  */
  export class ComponentConverter {
    static getBaseComponentArrayClass(): Class<any>;
  }
  export class EnumWrappersTest {
    static initializeBukkit(): void;
    validateAllEnumFieldsAreWrapped(): void;
    testValidity(): void;
  }
  export class WrappedGameProfileTest {
    static initializeBukkit(): void;
  }
  /**
   * Contains several useful equivalent converters for normal Bukkit types.
   * 
   * @author Kristian
  */
  export class BukkitConverters {
  
  }
  export class WrappedRegistryTest {
  
  }
  export class Pair<A, B> {
    constructor(first: A, second: B);
    getFirst(): A;
    getSecond(): B;
    setFirst(first: A);
    setSecond(second: B);
    equals(o: any): boolean;
    hashCode(): number;
  }
  export class WrappedBlockDataTest {
    static initializeBukkit(): void;
    testMaterialCreation(): void;
    testDataCreation(): void;
  }
  /**
   * Handles component parsing in 1.8
   * @author dmulloy2
  */
  export class ComponentParser {
    static deserialize(gson: any, component: Class<any>, str: StringReader): any;
  }
  export class MultiBlockChangeInfo {
    /**
     * Sets this block change's absolute coordinates.
     *
     * @param x X coordinate
     * @param y Y coordinate
     * @param z Z coordinate
    */
    setLocation(x: number, y: number, z: number): void;
    /**
     * Gets this block change's relative x coordinate.
     * 
     * @return Relative X coordinate
    */
    getX(): number;
    /**
     * Gets this block change's absolute x coordinate.
     *
     * @return Absolute X coordinate
    */
    getAbsoluteX(): number;
    /**
     * Sets this block change's absolute x coordinate.
     * 
     * @param x New x coordinate
    */
    setX(x: number);
    /**
     * Gets this block change's y coordinate.
     * 
     * @return Y coordinate
    */
    getY(): number;
    /**
     * Sets this block change's y coordinate
     * 
     * @param y New y coordinate
    */
    setY(y: number);
    /**
     * Gets this block change's relative z coordinate.
     * 
     * @return Relative Z coordinate
    */
    getZ(): number;
    /**
     * Gets this block change's absolute z coordinate.
     *
     * @return Absolute Z coordinate
    */
    getAbsoluteZ(): number;
    /**
     * Sets this block change's relative z coordinate.
     * 
     * @param z New z coordinate
    */
    setZ(z: number);
  }
  /**
   * Utility class for converting between the Adventure API Component and ProtocolLib's wrapper
   * 
   * Note: The Adventure API Component is not included in CraftBukkit, Bukkit or Spigot and but is present in PaperMC.
  */
  export class AdventureComponentConverter {
    static getComponentClass(): Class<any>;
  }
  /**
   * Represents an immutable wrapped ParticleParam in 1.13
  */
  export class WrappedParticle<T> {
    /**
     * Gets this Particle's Bukkit/ProtocolLib data. The type of this data depends on the
     * {@link #getParticle() Particle type}. For Block particles it will be {@link WrappedBlockData},
     * for Item crack particles, it will be an {@link ItemStack}, and for redstone particles it will
     * be {@link Particle.DustOptions}
     *
     * @return The particle data
    */
    getData(): T;
    /**
     * @return NMS handle
    */
    getHandle(): any;
    static fromHandle(handle: any): WrappedParticle;
  }
  export class MovingObjectPositionBlock extends Cloneable {
    constructor();
    static getNmsClass(): Class<any>;
    isInsideBlock(): boolean;
    setInsideBlock(insideBlock: boolean): void;
  }
  /**
   * @author dmulloy2
  */
  export class Vector3F {
    constructor();
    constructor(x: number, y: number, z: number);
    getX(): number;
    setX(x: number);
    getY(): number;
    setY(y: number);
    getZ(): number;
    setZ(z: number);
    hashCode(): number;
    equals(obj: any): boolean;
    static getMinecraftClass(): Class<any>;
  }
  /**
   * @author dmulloy2
  */
  export class MultiBlockChangeTest {
    static initializeBukkit(): void;
    test(): void;
  }
  /**
   * Copies a immutable net.minecraft.server.BlockPosition, which represents a integer 3D vector.
   * 
   * @author dmulloy2
  */
  export class BlockPosition {
    /**
     * Represents the null (0, 0, 0) origin.
    */
    static ORIGIN: BlockPosition;
    /**
     * Construct an immutable 3D vector.
     * @param x - x coordinate
     * @param y - y coordinate
     * @param z - z coordinate
    */
    constructor(x: number, y: number, z: number);
    /**
     * Retrieve the x-coordinate.
     * @return X coordinate.
    */
    getX(): number;
    /**
     * Retrieve the y-coordinate.
     * @return Y coordinate.
    */
    getY(): number;
    /**
     * Retrieve the z-coordinate.
     * @return Z coordinate.
    */
    getZ(): number;
    /**
     * Adds the current position and a given position together, producing a result position.
     * @param other - the other position.
     * @return The new result position.
    */
    add(other: BlockPosition): BlockPosition;
    /**
     * Adds the current position and a given position together, producing a result position.
     * @param other - the other position.
     * @return The new result position.
    */
    subtract(other: BlockPosition): BlockPosition;
    /**
     * Multiply each dimension in the current position by the given factor.
     * @param factor - multiplier.
     * @return The new result.
    */
    multiply(factor: number): BlockPosition;
    /**
     * Divide each dimension in the current position by the given divisor.
     * @param divisor - the divisor.
     * @return The new result.
    */
    divide(divisor: number): BlockPosition;
    equals(obj: any): boolean;
    hashCode(): number;
    toString(): string;
  }
  /**
   * Represents an immutable PlayerInfoData in the PLAYER_INFO packet.
   * @author dmulloy2
  */
  export class PlayerInfoData {
    /**
     * @deprecated Replaced by {@link #getLatency()}
    */
    getPing(): number;
    /**
     * Gets the latency between the client and the server.
     * @return The latency
    */
    getLatency(): number;
    equals(obj: any): boolean;
    hashCode(): number;
    toString(): string;
  }
  export class AutoWrapperTest {
    static initializeBukkit(): void;
    testToNms(): void;
    testFromNms(): void;
  }
  /**
   * Represents a generic enum converter.
   * @author Kristian
  */
  export class EnumWrappers {
    static getProtocolClass(): Class<any>;
    static getClientCommandClass(): Class<any>;
    static getChatVisibilityClass(): Class<any>;
    static getDifficultyClass(): Class<any>;
    static getEntityUseActionClass(): Class<any>;
    static getGameModeClass(): Class<any>;
    static getResourcePackStatusClass(): Class<any>;
    static getPlayerInfoActionClass(): Class<any>;
    static getTitleActionClass(): Class<any>;
    static getWorldBorderActionClass(): Class<any>;
    static getCombatEventTypeClass(): Class<any>;
    static getPlayerDigTypeClass(): Class<any>;
    static getPlayerActionClass(): Class<any>;
    static getScoreboardActionClass(): Class<any>;
    static getParticleClass(): Class<any>;
    static getSoundCategoryClass(): Class<any>;
    static getItemSlotClass(): Class<any>;
    static getHandClass(): Class<any>;
    static getDirectionClass(): Class<any>;
    static getChatTypeClass(): Class<any>;
    static getEntityPoseClass(): Class<any>;
  }
  export class WrappedRegistry {
    get(key: string): any;
    getId(key: string): number;
    getId(entry: any): number;
    static getAttributeRegistry(): WrappedRegistry;
    static getDimensionRegistry(): WrappedRegistry;
    static getRegistry(type: Class<any>): WrappedRegistry;
  }
  /**
   * Wrap a GNU Trove Collection class with an equivalent Java Collection class.
   * @author Kristian
  */
  export class TroveWrapper {
    /**
     * Retrieve a Java wrapper for the corresponding Trove map.
     * @param  Key type
     * @param  Value type
     * @param troveMap - the trove map to wrap.
     * @return The wrapped GNU Trove map.
     * @throws IllegalStateException If GNU Trove cannot be found in the class map.
     * @throws IllegalArgumentException If troveMap is NULL.
     * @throws FieldAccessException Error in wrapper method or lack of reflection permissions.
    */
    static getDecoratedMap<TKey, TValue>(troveMap: any): Map<TKey, TValue>;
    /**
     * Retrieve a Java wrapper for the corresponding Trove set.
     * @param  Type
     * @param troveSet - the trove set to wrap.
     * @return The wrapped GNU Trove set.
     * @throws IllegalStateException If GNU Trove cannot be found in the class map.
     * @throws IllegalArgumentException If troveSet is NULL.
     * @throws FieldAccessException Error in wrapper method or lack of reflection permissions.
    */
    static getDecoratedSet<TValue>(troveSet: any): Set<TValue>;
    /**
     * Retrieve a Java wrapper for the corresponding Trove list.
     * @param  Type
     * @param troveList - the trove list to wrap.
     * @return The wrapped GNU Trove list.
     * @throws IllegalStateException If GNU Trove cannot be found in the class map.
     * @throws IllegalArgumentException If troveList is NULL.
     * @throws FieldAccessException Error in wrapper method or lack of reflection permissions.
    */
    static getDecoratedList<TValue>(troveList: any): TValue[];
    /**
     * Determine if the given class is found within gnu.trove.
     * @param clazz - the clazz.
     * @return TRUE if it is, FALSE otherwise.
    */
    static isTroveClass(clazz: Class<any>): boolean;
  }
  export class WrappedProfilePublicKeyTest {
  
  }
  export class BukkitConvertersTest {
    static beforeClass(): void;
    testItemStacks(): void;
    testEither(): void;
  }
  export class MinecraftKey {
    /**
     * Constructs a new key with a given prefix and key.
     * 
     * @param prefix The prefix, usually minecraft.
     * @param key The key, the part we care about
    */
    constructor(prefix: string, key: string);
    /**
     * Constructs a new key with minecraft prefix and a key.
     * @param key The key
    */
    constructor(key: string);
    /**
     * Creates a MinecraftKey wrapper from a Minecraft handle.
     * @param handle The handle
     * @return The resulting key
    */
    static fromHandle(handle: any): MinecraftKey;
    /**
     * Creates a MinecraftKey wrapper from an Enum constant. The resulting key
     * is lower case, with underscores replaced by periods.
     * @param value The value
     * @return The resulting key
     * @deprecated This isn't accurate in all cases
    */
    static fromEnum(value: Enum<any>): MinecraftKey;
    /**
     * Gets the prefix of this MinecraftKey. It is minecraft by default.
     * @return The prefix
    */
    getPrefix(): string;
    /**
     * Gets the key of this MinecraftKey. It is generally the important part.
     * @return The key
    */
    getKey(): string;
    /**
     * Gets the full key of this MinecraftKey. It is in the format of
     * `prefix:key`
     * @return The full key
    */
    getFullKey(): string;
    /**
     * Returns this key back into Enum format, upper case with periods replaced
     * by underscores.
     * @return The enum format
     * @deprecated This isn't accurate in all cases
    */
    getEnumFormat(): string;
  }
  /**
   * Represents a datatype where either left or right is present. The values are available with a xor semantic. So at
   * most and at least one value will be available.
   * 
   * @param  left data type
   * @param  right data type
  */
  export class Either<L, R> {
    /**
     * @param leftConsumer transformer if the left value is present
     * @param rightConsumer transformer if the right value is present
     * @return result of applying the given functions to the left or right side
     * @param  result data type of both transformers
    */
    map<T>(leftConsumer: Function<L, T>, rightConsumer: Function<R, T>): T;
    /**
     * @return left value if present
    */
    left(): Optional<L>;
    /**
     * @return right value if present
    */
    right(): Optional<R>;
    /**
     * @param value containing value
     * @return either containing a left value
     * @param  data type of the containing value
     * @param  right data type
    */
    static left<L, R>(value: L): Either<L, R>;
    /**
     * @param value containing value
     * @return either containing a right value
     * @param  left data type
     * @param  data type of the containing value
    */
    static right<L, R>(value: R): Either<L, R>;
  }
  /**
   * Represents a wrapper for an NMS object.
   * @author Kristian
  */
  export class AbstractWrapper {
    /**
     * Construct a new NMS wrapper.
     * @param handleType - the NMS handle type.
    */
    constructor(handleType: Class<any>);
    /**
     * Retrieves the underlying NMS object.
     * @return The underlying NMS object.
    */
    getHandle(): any;
    /**
     * Retrieve the type of the handle.
     * @return The type of the handle.
    */
    getHandleType(): Class<any>;
    equals(obj: any): boolean;
    hashCode(): number;
    toString(): string;
  }
  /**
   * @author dmulloy2
  */
  export class WrappedDataWatcherTest {
    static prepare(): void;
    testBytes(): void;
    testStrings(): void;
    testFloats(): void;
    testSerializers(): void;
    testHasIndex(): void;
    testDeepClone(): void;
  }
  export class WrappedChatComponentTest {
    static initializeBukkit(): void;
    testText(): void;
  }
  export class ChunkCoordIntPairTest {
    static initializeBukkit(): void;
    test(): void;
  }
  export class CloningTest {
    static initializeBukkit(): void;
    cloneGameProfile(): void;
  }
  /**
   * Represents a ChunkCoordIntPair.
   * @author Kristian
  */
  export class ChunkCoordIntPair {
    /**
     * Construct a new chunk coord int pair.
     * @param x - the x index of the chunk.
     * @param z - the z index of the chunk.
    */
    constructor(x: number, z: number);
    /**
     * Retrieve the chunk index in the x-dimension.
     * 
     * This is the number of adjacent chunks to (0, 0), not a block coordinate.
     * @return The x chunk index.
    */
    getChunkX(): number;
    /**
     * Retrieve the chunk index in the z-dimension.
     * 
     * This is the number of adjacent chunks to (0, 0), not a block coordinate.
     * @return The z chunk index.
    */
    getChunkZ(): number;
    equals(obj: any): boolean;
    hashCode(): number;
    toString(): string;
  }
  export class WrappedAttributeTest {
    static initializeBukkit(): void;
    setUp(): void;
    testEquality(): void;
    testAttribute(): void;
    testFromTemplate(): void;
  }
  /**
   * Utility class for converters
   * @author dmulloy2
  */
  export class Converters {
  
  }
  /**
   * @author dmulloy2
  */
  export class PlayerInfoDataTest {
    static initializeBukkit(): void;
    test(): void;
  }
  export class WrappedServerPingTest {
    static initializeBukkit(): void;
    test(): void;
  }
  export class ClonableWrapper {
    getHandle(): any;
    deepClone(): ClonableWrapper;
  }
  
  }
  declare module 'com.comphenix.protocol.timing' {
  import { Set, Date } from 'java.util';
  import { AtomicBoolean, AtomicInteger } from 'java.util.concurrent.atomic';
  /**
   * Represents an online computation.
   *
   * @author Kristian
  */
  export class OnlineComputation {
    /**
     * Retrieve a wrapper for another online computation that is synchronized.
     *
     * @param computation - the computation.
     * @return The synchronized wrapper.
    */
    static synchronizedComputation(computation: OnlineComputation): OnlineComputation;
    /**
     * Retrieve the number of observations.
     *
     * @return Number of observations.
    */
    getCount(): number;
    /**
     * Observe a value.
     *
     * @param value - the observed value.
    */
    observe(value: number): void;
    /**
     * Construct a copy of the current online computation.
     *
     * @return The new copy.
    */
    copy(): OnlineComputation;
  }
  export class TimingReportGenerator {
  
  }
  /**
   * Tracks the invocation time for a particular plugin against a list of packets.
   *
   * @author Kristian
  */
  export class TimedTracker {
    /**
     * Begin tracking an execution time.
     *
     * @return The current tracking token.
    */
    beginTracking(): number;
    /**
     * Retrieve the total number of observations.
     *
     * @return Total number of observations.
    */
    getObservations(): number;
  }
  /**
   * Represents a system for recording the time spent by each packet listener.
   * @author Kristian
  */
  export class TimedListenerManager {
    /**
     * Retrieve the shared listener manager.
     * 
     * This should never change.
     * @return The shared listener manager.
    */
    static getInstance(): TimedListenerManager;
    /**
     * Start timing listeners.
     * @return TRUE if we started timing, FALSE if we are already timing listeners.
    */
    startTiming(): boolean;
    /**
     s
     * Stop timing listeners.
     * @return TRUE if we stopped timing, FALSE otherwise.
    */
    stopTiming(): boolean;
    /**
     * Retrieve the time the listener was started.
     * @return The time it was started, or NULL if they have never been started.
    */
    getStarted(): Date;
    /**
     * Retrieve the time the time listeners was stopped.
     * @return The time they were stopped, or NULL if not found.
    */
    getStopped(): Date;
    /**
     * Determine if we are currently timing listeners.
     * @return TRUE if we are, FALSE otherwise.
    */
    isTiming(): boolean;
    /**
     * Reset all packet gathering data.
    */
    clear(): void;
    /**
     * Retrieve every tracked plugin.
     * @return Every tracked plugin.
    */
    getTrackedPlugins(): Set<string>;
  }
  
  }
  declare module 'com.comphenix.protocol.events.PacketContainerTest' {
  import { Enum } from 'java.lang';
  /**
   * Actions from the outbound Boss packet. Used for testing generic enums.
   *
   * @author dmulloy2
  */
  export class Action extends Enum<Action> {
    static readonly ADD: Action;
    static readonly REMOVE: Action;
    static readonly UPDATE_PCT: Action;
    static readonly UPDATE_NAME: Action;
    static readonly UPDATE_STYLE: Action;
    static readonly UPDATE_PROPERTIES: Action;
    static valueOf(name: string): Action;
    static values(): Action[];
  }
  
  }
  declare module 'com.comphenix.protocol.reflect.instances' {
  import { UUID } from 'java.util';
  import { Throwable, Class, IllegalArgumentException } from 'java.lang';
  /**
   * Invoked when a instance provider indicates that a given type cannot or should not be
   * constructed under any circumstances.
   * 
   * @author Kristian
  */
  export class NotConstructableException extends IllegalArgumentException {
    /**
     * Construct a new not constructable exception.
    */
    constructor();
    /**
     * Construct a new not constructable exception with a custom message.
     * @param message - detail message
    */
    constructor(message: string);
    /**
     * Construct a new not constructable exception with a custom message and cause.
     * @param message - detail message
     * @param cause - cause
    */
    constructor(message: string, cause: Throwable);
    /**
     * Construct a new not constructable exception with a custom cause.
     * @param cause - cause
    */
    constructor(cause: Throwable);
  }
  export class MinecraftGenerator {
    static readonly SYS_UUID: UUID;
    static readonly AIR_ITEM_STACK: any;
  }
  /**
   * Represents a type generator for specific types.
   * 
   * @author Kristian
  */
  export class InstanceProvider {
    /**
     * Create an instance given a type, if possible.
     * @param type - type to create.
     * @return The instance, or NULL if the type cannot be created.
     * @throws NotConstructableException Thrown to indicate that this type cannot or should never be constructed.
    */
    create(type: Class<any> | null): any;
  }
  
  }
  declare module 'com.comphenix.protocol.injector.player.PlayerInjectionHandler' {
  import { Enum } from 'java.lang';
  /**
   * How to handle a previously existing player injection.
   *
   * @author Kristian
  */
  export class ConflictStrategy extends Enum<ConflictStrategy> {
    /**
     * Override it.
    */
    static readonly OVERRIDE: ConflictStrategy;
    /**
     * Immediately exit.
    */
    static readonly BAIL_OUT: ConflictStrategy;
    static valueOf(name: string): ConflictStrategy;
    static values(): ConflictStrategy[];
  }
  
  }
  declare module 'com.comphenix.protocol.wrappers.collection' {
  import { Set, Iterator, Collection } from 'java.util';
  /**
   * Represents an object that transform elements of type VInner to type VOuter and back again.
   * 
   * @author Kristian
   *
   * @param  - the first type.
   * @param  - the second type.
  */
  export class AbstractConverted<VInner, VOuter> {
  
  }
  /**
   * Represents a function that accepts two parameters.
   * @author Kristian
   * @param  - type of the first parameter.
   * @param  - type of the second parameter.
   * @param  - type of the return value.
  */
  export class BiFunction<T1, T2, TResult> {
    apply(arg1: T1, arg2: T2): TResult;
  }
  /**
   * Represents a set that will (best effort) cache elements before using 
   * an underlying set to retrieve the actual element.
   * 
   * The cache will be invalidated when data is removed.
   * 
   * @author Kristian
   * @param  - type of each element in the collection.
  */
  export class CachedCollection<T> extends Collection<T> {
    /**
     * Construct a cached collection with the given delegate.
     * 
     * Objects are cached before they can be extracted from this collection.
     * @param delegate - the delegate.
    */
    constructor(delegate: Set<T>);
    size(): number;
    isEmpty(): boolean;
    contains(o: any): boolean;
    iterator(): Iterator<T>;
    toArray(): any[];
    toArray<T>(a: T[]): T[];
    add(e: T): boolean;
    addAll(c: Collection<T>): boolean;
    containsAll(c: Collection<any>): boolean;
    remove(o: any): boolean;
    removeAll(c: Collection<any>): boolean;
    retainAll(c: Collection<any>): boolean;
    clear(): void;
    hashCode(): number;
    toString(): string;
  }
  
  }
  declare module 'com.comphenix.protocol.injector' {
  import { Constructor } from 'java.lang.reflect';
  import { Enum, Comparable, Class } from 'java.lang';
  import { List, Map } from 'java.util';
  import { Supplier } from 'java.util.function';
  import { Unwrapper } from 'com.comphenix.protocol.injector.PacketConstructor';
  /**
   * A packet constructor that uses an internal Minecraft.
   *
   * @author Kristian
  */
  export class PacketConstructor {
    /**
     * A packet constructor that automatically converts Bukkit types to their NMS conterpart.
     * 
     * Remember to call withPacket().
    */
    static DEFAULT: PacketConstructor;
    /**
     * Retrieve the class of an object, or just the class if it already is a class object.
     *
     * @param obj - the object.
     * @return The class of an object.
    */
    static getClass(obj: any): Class<any>;
    /**
     * Retrieve the id of the packets this constructor creates.
     * 
     * Deprecated: Use {@link #getType()} instead.
     *
     * @return The ID of the packets this constructor will create.
    */
    getPacketID(): number;
    /**
     * Return a copy of the current constructor with a different list of unwrappers.
     *
     * @param unwrappers - list of unwrappers that convert Bukkit wrappers into the equivalent NMS classes.
     * @return A constructor with a different set of unwrappers.
    */
    withUnwrappers(unwrappers: Unwrapper[]): PacketConstructor;
  }
  /**
   * Represents an object that initiate the packet listeners.
   *
   * @author Kristian
  */
  export class ListenerInvoker {
  
  }
  export class EntityUtilitiesTest {
    static beforeClass(): void;
    testReflection(): void;
  }
  /**
   * @author dmulloy2
  */
  export class WirePacketTest {
    static beforeClass(): void;
    testPackets(): void;
    testSerialization(): void;
  }
  /**
   * Caches structure modifiers.
   *
   * @author Kristian
  */
  export class StructureCache {
    static newPacket(clazz: Class<any>): any;
  }
  /**
   * The current player phase. This is used to limit the number of different injections.
   *
   * @author Kristian
  */
  export class GamePhase extends Enum<GamePhase> {
    /**
     * Only listen for packets sent or received before a player has logged in.
    */
    static readonly LOGIN: GamePhase;
    /**
     * Only listen for packets sent or received after a player has logged in.
    */
    static readonly PLAYING: GamePhase;
    /**
     * Listen for every sent and received packet.
    */
    static readonly BOTH: GamePhase;
    static valueOf(name: string): GamePhase;
    static values(): GamePhase[];
    /**
     * Determine if the current value represents the login phase.
     *
     * @return TRUE if it does, FALSE otherwise.
    */
    hasLogin(): boolean;
    /**
     * Determine if the current value represents the playing phase.
     *
     * @return TRUE if it does, FALSE otherwise.
    */
    hasPlaying(): boolean;
  }
  export class SortedCopyOnWriteArrayTest {
    testInsertion(): void;
    testOrder(): void;
  }
  /**
   * Represents a processor for network markers.
   *
   * @author Kristian
  */
  export class NetworkProcessor {
  
  }
  export class PacketFilterBuilder {
  
  }
  /**
   * Represents a listener with a priority.
   * 
   * @author Kristian
  */
  export class PrioritizedListener<TListener> extends Comparable<PrioritizedListener<TListener>> {
    compareTo(other: PrioritizedListener<TListener>): number;
    equals(obj: any): boolean;
    hashCode(): number;
    /**
     * Retrieve the underlying listener.
     * @return Underlying listener.
    */
    getListener(): TListener;
  }
  
  }
  declare module 'com.comphenix.protocol.reflect.fuzzy' {
  /**
   * Represents a matcher for fields, methods, constructors and classes.
   * 
   * This class should ideally never expose mutable state. Its round number must be immutable.
   *
   * @author Kristian
  */
  export class AbstractFuzzyMatcher<T> {
    /**
     * Determine if the given value is a match.
     *
     * @param value  - the value to match.
     * @param parent - the parent container, or NULL if this value is the root.
     * @return TRUE if it is a match, FALSE otherwise.
    */
    isMatch(value: T, parent: any): boolean;
    /**
     * Create a fuzzy matcher that returns the opposite result of the current matcher.
     *
     * @return An inverted fuzzy matcher.
    */
    inverted(): AbstractFuzzyMatcher<T>;
    /**
     * Require that this and the given matcher be TRUE.
     *
     * @param other - the other fuzzy matcher.
     * @return A combined fuzzy matcher.
    */
    and(other: AbstractFuzzyMatcher<T>): AbstractFuzzyMatcher<T>;
    /**
     * Require that either this or the other given matcher be TRUE.
     *
     * @param other - the other fuzzy matcher.
     * @return A combined fuzzy matcher.
    */
    or(other: AbstractFuzzyMatcher<T>): AbstractFuzzyMatcher<T>;
  }
  /**
   * Contains factory methods for matching classes.
   *
   * @author Kristian
  */
  export class FuzzyMatchers {
  
  }
  
  }
  declare module 'com.comphenix.protocol.PacketType' {
  import { Enum } from 'java.lang';
  /**
   * Packets sent during handshake.
   * @author Kristian
  */
  export class Handshake {
    static getProtocol(): Protocol;
  }
  /**
   * Packets sent and received when logged into the game.
   * @author Kristian
  */
  export class Play {
    static getProtocol(): Protocol;
  }
  /**
   * Packets sent and received when querying the server in the multiplayer menu.
   * @author Kristian
  */
  export class Status {
    static getProtocol(): Protocol;
  }
  /**
   * Packets sent and received when logging in to the server.
   * @author Kristian
  */
  export class Login {
    static getProtocol(): Protocol;
  }
  /**
   * Represents the different protocol or connection states.
   * @author Kristian
  */
  export class Protocol extends Enum<Protocol> {
    static readonly HANDSHAKING: Protocol;
    static readonly PLAY: Protocol;
    static readonly STATUS: Protocol;
    static readonly LOGIN: Protocol;
    /**
     * Only for packets removed in Minecraft 1.7.2
    */
    static readonly LEGACY: Protocol;
    static valueOf(name: string): Protocol;
    static values(): Protocol[];
    /**
     * Retrieve the correct protocol enum from a given vanilla enum instance.
     * @param vanilla - the vanilla protocol enum instance.
     * @return The corresponding protocol.
    */
    static fromVanilla(vanilla: Enum<any>): Protocol;
    getPacketName(): string;
    getMojangName(): string;
    getMcpPacketName(): string;
  }
  /**
   * Represents the sender of this packet type.
   * @author Kristian
   *
  */
  export class Sender extends Enum<Sender> {
    /**
     * Indicates that packets of this type will be sent by connected clients.
    */
    static readonly CLIENT: Sender;
    /**
     * Indicate that packets of this type will be sent by the current server.
    */
    static readonly SERVER: Sender;
    static valueOf(name: string): Sender;
    static values(): Sender[];
    getPacketName(): string;
    getMcpPacketName(): string;
    getMojangName(): string;
  }
  /**
   * Whether or not packets of this type must be handled asynchronously.
  */
  export class ForceAsync {
  
  }
  
  }
  declare module 'com.comphenix.protocol.updater' {
  import { Runnable, Thread } from 'java.lang';
  import { List } from 'java.util';
  import { UpdateType, UpdateResult } from 'com.comphenix.protocol.updater.Updater';
  /**
   * @author dmulloy2
  */
  export class UpdaterTest {
    static preparePlugin(): void;
    testUpdaterType(): void;
    testSpigotUpdater(): void;
  }
  /**
   * @author dmulloy2
  */
  export class Updater {
    versionCheck(title: string): boolean;
    /**
     * Add a listener to be executed when we have determined if an update is available.
     * 
     * The listener will be executed on the main thread.
     *
     * @param listener - the listener to add.
    */
    addListener(listener: Runnable): void;
    /**
     * Remove a listener.
     *
     * @param listener - the listener to remove.
     * @return TRUE if the listener was removed, FALSE otherwise.
    */
    removeListener(listener: Runnable): boolean;
    /**
     * Get the result of the update process.
    */
    getResult(): string;
    /**
     * Get the latest version's release type (release, beta, or alpha).
    */
    getLatestType(): string;
    /**
     * Get the latest version's game version.
    */
    getLatestGameVersion(): string;
    /**
     * Get the latest version's name.
    */
    getLatestName(): string;
    /**
     * Get the latest version's file link.
    */
    getLatestFileLink(): string;
    /**
     * Determine if we are already checking for an update.
     *
     * @return TRUE if we are, FALSE otherwise.
    */
    isChecking(): boolean;
    start(type: UpdateType): void;
    shouldNotify(): boolean;
    getRemoteVersion(): string;
  }
  
  }
  declare module 'com.comphenix.protocol.wrappers.Either' {
  import { Optional } from 'java.util';
  import { Either } from 'com.comphenix.protocol.wrappers';
  import { Function } from 'java.util.function';
  export class Left<L, R> extends Either<L, R> {
    map<T>(leftConsumer: Function<L, T>, rightConsumer: Function<R, T>): T;
    left(): Optional<L>;
    right(): Optional<R>;
  }
  export class Right<L, R> extends Either<L, R> {
    map<T>(leftConsumer: Function<L, T>, rightConsumer: Function<R, T>): T;
    left(): Optional<L>;
    right(): Optional<R>;
  }
  
  }
  declare module 'com.comphenix.protocol.reflect.cloning' {
  /**
   * Represents an object that is capable of cloning other objects.
   * 
   * @author Kristian
  */
  export class Cloner {
    /**
     * Determine whether or not the current cloner can clone the given object.
     * @param source - the object that is being considered.
     * @return TRUE if this cloner can actually clone the given object, FALSE otherwise.
    */
    canClone(source: any): boolean;
    /**
     * Perform the clone. 
     * 
     * This method should never be called unless a corresponding {@link #canClone(Object)} returns TRUE.
     * @param source - the value to clone.
     * @return A cloned value.
     * @throws IllegalArgumentException If this cloner cannot perform the clone.
    */
    clone(source: any): any;
  }
  export class AggregateClonerTest {
    static initializeBukkit(): void;
    testArrays(): void;
    testNonNullList(): void;
  }
  
  }
  declare module 'com.comphenix.protocol.injector.netty.channel' {
  /**
   * Represents an injector factory.
   * 
   * Note that the factory will return {@link EmptyInjector} when the factory is closed.
   *
   * @author Kristian
  */
  export class InjectionFactory {
    /**
     * Determine if the factory is closed.
     * 
     * If it is, all new injectors will be closed by default.
     *
     * @return TRUE if it is closed, FALSE otherwise.
    */
    isClosed(): boolean;
    /**
     * Close all injectors created by this factory, and cease the creation of new injections.
    */
    close(): void;
  }
  
  }
  declare module 'com.comphenix.protocol.collections' {
  import { Set, Collection, PriorityQueue, Map } from 'java.util';
  import { TimeUnit } from 'java.util.concurrent';
  import { Entry } from 'java.util.Map';
  import { ExpireEntry } from 'com.comphenix.protocol.collections.ExpireHashMap';
  /**
   * Represents a very quick integer-based lookup map, with a fixed key space size.
   * 
   * Integers must be non-negative.
   * @author Kristian
  */
  export class IntegerMap<T> {
    /**
     * Construct a new integer map with a default capacity.
    */
    constructor();
    /**
     * Construct a new integer map with a given capacity.
     * @param initialCapacity - the capacity.
    */
    constructor(initialCapacity: number);
    /**
     * Associate an integer key with the given value.
     * @param key - the integer key. Cannot be negative.
     * @param value - the value. Cannot be NULL.
     * @return The previous association, or NULL if not found.
    */
    put(key: number, value: T): T;
    /**
     * Remove an association from the map.
     * @param key - the key of the association to remove.
     * @return The old associated value, or NULL.
    */
    remove(key: number): T;
    /**
     * Retrieve the number of mappings in this map.
     * @return The number of mapping.
    */
    size(): number;
    /**
     * Retrieve the value associated with a given key.
     * @param key - the key.
     * @return The value, or NULL if not found.
    */
    get(key: number): T;
    /**
     * Determine if the given key exists in the map.
     * @param key - the key to check.
     * @return TRUE if it does, FALSE otherwise.
    */
    containsKey(key: number): boolean;
    /**
     * Convert the current map to an Integer map.
     * @return The Integer map.
    */
    toMap(): Map<number, any>;
  }
  /**
   * Represents a hash map where each association may expire after a given time has elapsed.
   * 
   * Note that replaced key-value associations are only collected once the original expiration time has elapsed. 
   * 
   * @author Kristian Stangeland
   *
   * @param  - type of the keys.
   * @param  - type of the values.
  */
  export class ExpireHashMap<K, V> {
    /**
     * Construct a new hash map where each entry may expire at a given time.
    */
    constructor();
    /**
     * Retrieve the value associated with the given key, if it has not expired.
     * @param key - the key.
     * @return The value, or NULL if not found or it has expired.
    */
    get(key: K): V;
    /**
     * Associate the given key with the given value, until the expire delay have elapsed.
     * @param key - the key.
     * @param value - the value.
     * @param expireDelay - the amount of time until this association expires. Must be greater than zero.
     * @param expireUnit - the unit of the expiration.
     * @return Any previously unexpired association with this key, or NULL.
    */
    put(key: K, value: V, expireDelay: number, expireUnit: TimeUnit): V;
    /**
     * Determine if the given key is referring to an unexpired association in the map.
     * @param key - the key.
     * @return TRUE if it is, FALSE otherwise.
    */
    containsKey(key: K): boolean;
    /**
     * Determine if the given value is referring to an unexpired association in the map.
     * @param value - the value.
     * @return TRUE if it is, FALSE otherwise.
    */
    containsValue(value: V): boolean;
    /**
     * Remove a key and its associated value from the map.
     * @param key - the key to remove.
     * @return Value of the removed association, NULL otherwise.
    */
    removeKey(key: K): V;
    /**
     * Retrieve the number of entries in the map.
     * @return The number of entries.
    */
    size(): number;
    /**
     * Retrieve a view of the keys in the current map.
     * @return View of the keys.
    */
    keySet(): Set<K>;
    /**
     * Retrieve a view of all the values in the current map.
     * @return All the values.
    */
    values(): Collection<V>;
    /**
     * Retrieve a view of all the entries in the set.
     * @return All the entries.
    */
    entrySet(): Set<Entry<K, V>>;
    /**
     * Retrieve a view of this expire map as an ordinary map that does not support insertion.
     * @return The map.
    */
    asMap(): Map<K, V>;
    /**
     * Clear all references to key-value pairs that have been removed or replaced before they were naturally evicted.
     * 
     * This operation requires a linear scan of the current entries in the map.
    */
    collect(): void;
    /**
     * Clear all the entries in the current map.
    */
    clear(): void;
    toString(): string;
  }
  
  }
  declare module 'com.comphenix.protocol.injector.player' {
  export class PlayerInjectionHandler {
    /**
     * Whether or not this player injection handler can also receive packets.
     *
     * @return TRUE if it can, FALSE otherwise.
    */
    canReceivePackets(): boolean;
    /**
     * Close any lingering proxy injections.
    */
    close(): void;
  }
  
  }
  declare module 'com.comphenix.protocol.concurrency' {
  import { Class } from 'java.lang';
  import { Set, NavigableMap, Iterator, Collection, List } from 'java.util';
  import { ConcurrentMap, TimeUnit } from 'java.util.concurrent';
  import { Entry, EndPoint } from 'com.comphenix.protocol.concurrency.AbstractIntervalTree';
  /**
   * Represents a concurrent set of packet types.
   *
   * @author Kristian
  */
  export class PacketTypeSet {
    constructor();
    /**
     * Determine if a packet type with the given packet class exists in the set.
     *
     * @param packetClass - the class to find.
     * @return TRUE if it does, FALSE otherwise.
    */
    contains(packetClass: Class<any>): boolean;
    /**
     * Determine if the type of a packet is in the current set.
     *
     * @param packet - the packet.
     * @return TRUE if it is, FALSE otherwise.
    */
    containsPacket(packet: any): boolean;
    /**
     * Retrieve the number of entries in the set.
     *
     * @return The number of entries.
    */
    size(): number;
    clear(): void;
  }
  export class BlockingHashMapTest {
    test(): void;
  }
  /**
   * A map that supports blocking on read operations. Null keys are not supported.
   * 
   * Values are stored as weak references, and will be automatically removed once they've all been dereferenced.
   * 
   * @author Kristian
   *
   * @param  - type of the key.
   * @param  - type of the value.
  */
  export class BlockingHashMap<TKey, TValue> {
    /**
     * Initialize a new map.
    */
    constructor();
    /**
     * Initialize a new map.
     * @param  Type of the key
     * @param  Type of the value
     * @return The created map.
    */
    static create<TKey, TValue>(): BlockingHashMap<TKey, TValue>;
    /**
     * Waits until a value has been associated with the given key, and then retrieves that value.
     * @param key - the key whose associated value is to be returned
     * @return The value to which the specified key is mapped.
     * @throws InterruptedException If the current thread got interrupted while waiting.
    */
    get(key: TKey): TValue;
    /**
     * Waits until a value has been associated with the given key, and then retrieves that value.
     * @param key - the key whose associated value is to be returned
     * @param timeout - the amount of time to wait until an association has been made.
     * @param unit - unit of timeout.
     * @return The value to which the specified key is mapped, or NULL if the timeout elapsed.
     * @throws InterruptedException If the current thread got interrupted while waiting.
    */
    get(key: TKey, timeout: number, unit: TimeUnit): TValue;
    /**
     * Waits until a value has been associated with the given key, and then retrieves that value.
     * 
     * If timeout is zero, this method will return immediately if it can't find an socket injector.
     * 
     * @param key - the key whose associated value is to be returned
     * @param timeout - the amount of time to wait until an association has been made.
     * @param unit - unit of timeout.
     * @param ignoreInterrupted - TRUE if we should ignore the thread being interrupted, FALSE otherwise.
     * @return The value to which the specified key is mapped, or NULL if the timeout elapsed.
     * @throws InterruptedException If the current thread got interrupted while waiting.
    */
    get(key: TKey, timeout: number, unit: TimeUnit, ignoreInterrupted: boolean): TValue;
    /**
     * Associate a given key with the given value.
     * 
     * Wakes up any blocking getters on this specific key.
     * 
     * @param key - the key to associate.
     * @param value - the value.
     * @return The previously associated value.
    */
    put(key: TKey, value: TValue): TValue;
    /**
     * If and only if a key is not present in the map will it be associated with the given value.
     * @param key - the key to associate.
     * @param value - the value to associate.
     * @return The previous value this key has been associated with.
    */
    putIfAbsent(key: TKey, value: TValue): TValue;
    size(): number;
    values(): Collection<TValue>;
    keys(): Set<TKey>;
  }
  /**
   * A thread-safe implementation of a listener multimap.
   *
   * @author Kristian
  */
  export class AbstractConcurrentListenerMultimap<T> {
    constructor();
  }
  /**
   * Represents a generic store of intervals and associated values. No two intervals
   * can overlap in this representation.
   * 
   * Note that this implementation is not thread safe.
   * 
   * @author Kristian
   *
   * @param  - type of the key. Must implement Comparable.
   * @param  - type of the value to associate.
  */
  export class AbstractIntervalTree<TKey, TValue> {
    /**
     * Removes every interval that intersects with the given range.
     * @param lowerBound - lowest value to remove.
     * @param upperBound - highest value to remove.
     * @return Intervals that were removed
    */
    remove(lowerBound: TKey, upperBound: TKey): Set<Entry>;
    /**
     * Removes every interval that intersects with the given range.
     * @param lowerBound - lowest value to remove.
     * @param upperBound - highest value to remove.
     * @param preserveDifference - whether or not to preserve the intervals that are partially outside.
     * @return Intervals that were removed
    */
    remove(lowerBound: TKey, upperBound: TKey, preserveDifference: boolean): Set<Entry>;
    /**
     * Associates a given interval of keys with a certain value. Any previous
     * association will be overwritten in the given interval.
     * 
     * Overlapping intervals are not permitted. A key can only be associated with a single value.
     * 
     * @param lowerBound - the minimum key (inclusive).
     * @param upperBound - the maximum key (inclusive).
     * @param value - the value, or NULL to reset this range.
    */
    put(lowerBound: TKey, upperBound: TKey, value: TValue): void;
    /**
     * Determines if the given key is within an interval.
     * @param key - key to check.
     * @return TRUE if the given key is within an interval in this tree, FALSE otherwise.
    */
    containsKey(key: TKey): boolean;
    /**
     * Enumerates over every range in this interval tree.
     * @return Number of ranges.
    */
    entrySet(): Set<Entry>;
    /**
     * Remove every interval.
    */
    clear(): void;
    /**
     * Inserts every range from the given tree into the current tree.
     * @param other - the other tree to read from.
    */
    putAll(other: AbstractIntervalTree<TKey, TValue>): void;
    /**
     * Retrieves the value of the range that matches the given key, or NULL if nothing was found.
     * @param key - the level to read for.
     * @return The correct amount of experience, or NULL if nothing was recorded.
    */
    get(key: TKey): TValue;
  }
  /**
   * An implicitly sorted array list that preserves insertion order and maintains duplicates.
   *
   * @param  - type of the elements in the list.
  */
  export class SortedCopyOnWriteArray<T> extends Collection<T> {
    /**
     * Construct an empty sorted array.
    */
    constructor();
    /**
     * Create a sorted array from the given list. The elements will be automatically sorted.
     *
     * @param wrapped - the collection whose elements are to be placed into the list.
    */
    constructor(wrapped: Collection<T>);
    /**
     * Inserts the given element in the proper location.
     *
     * @param value - element to insert.
    */
    add(value: T): boolean;
    addAll(values: Collection<T>): boolean;
    /**
     * Removes from the list by making a new list with every element except the one given.
     * 
     * Objects will be compared using the given objects equals() method.
     *
     * @param value - value to remove.
    */
    remove(value: any): boolean;
    removeAll(values: Collection<any>): boolean;
    retainAll(values: Collection<any>): boolean;
    /**
     * Removes from the list by making a copy of every element except the one with the given index.
     *
     * @param index - index of the element to remove.
    */
    remove(index: number): void;
    /**
     * Retrieves an element by index.
     *
     * @param index - index of element to retrieve.
     * @return The element at the given location.
    */
    get(index: number): T;
    /**
     * Retrieve the size of the list.
     *
     * @return Size of the list.
    */
    size(): number;
    /**
     * Retrieves an iterator over the elements in the given list. Warning: No not attempt to remove elements using the
     * iterator.
    */
    iterator(): Iterator<T>;
    clear(): void;
    contains(value: any): boolean;
    containsAll(values: Collection<any>): boolean;
    isEmpty(): boolean;
    toArray(): any[];
    toArray<T>(a: T[]): T[];
    toString(): string;
  }
  
  }
  declare module 'com.comphenix.protocol.metrics' {
  import { List } from 'java.util';
  import { CustomChart } from 'com.comphenix.protocol.metrics.Metrics';
  export class Statistics {
    static getVersion(): string;
  }
  /**
   * bStats collects some data for plugin authors.
   *
   * Check out https://bStats.org/ to learn more about bStats!
  */
  export class Metrics {
    static readonly B_STATS_VERSION: number;
    /**
     * Adds a custom chart.
     *
     * @param chart The chart to add.
    */
    addCustomChart(chart: CustomChart): void;
  }
  
  }
  declare module 'com.comphenix.integration.protocol' {
  import { InetSocketAddress } from 'java.net';
  export class TestPingPacket {
    /**
     * Create a new test ping packet test.
     *
     * @return The new test.
    */
    static newTest(): TestPingPacket;
  }
  export class SimpleCraftBukkitITCase {
    static setupCraftBukkit(): void;
    static shutdownCraftBukkit(): void;
    testPingPacket(): void;
  }
  export class SimpleMinecraftClient {
    constructor(protocolVersion: number);
    /**
     * Query the local server for ping information.
     *
     * @return The server information.
     * @throws IOException
    */
    queryLocalPing(): string;
    /**
     * Query the given server for its list ping information.
     *
     * @param address - the server hostname and port.
     * @return The server information.
     * @throws IOException
    */
    queryServerPing(address: InetSocketAddress): string;
  }
  
  }
  declare module 'com.comphenix.protocol.metrics.Metrics' {
  import { Map } from 'java.util';
  import { Callable } from 'java.util.concurrent';
  /**
   * Represents a custom chart.
  */
  export class CustomChart {
  
  }
  /**
   * Represents a custom simple pie.
  */
  export class SimplePie extends CustomChart {
    /**
     * Class constructor.
     *
     * @param chartId The id of the chart.
     * @param callable The callable which is used to request the chart data.
    */
    constructor(chartId: string, callable: Callable<string>);
  }
  /**
   * Represents a custom advanced pie.
  */
  export class AdvancedPie extends CustomChart {
    /**
     * Class constructor.
     *
     * @param chartId The id of the chart.
     * @param callable The callable which is used to request the chart data.
    */
    constructor(chartId: string, callable: Callable<Map<string, number>>);
  }
  /**
   * Represents a custom drilldown pie.
  */
  export class DrilldownPie extends CustomChart {
    /**
     * Class constructor.
     *
     * @param chartId The id of the chart.
     * @param callable The callable which is used to request the chart data.
    */
    constructor(chartId: string, callable: Callable<Map<string, Map<string, number>>>);
  }
  /**
   * Represents a custom single line chart.
  */
  export class SingleLineChart extends CustomChart {
    /**
     * Class constructor.
     *
     * @param chartId The id of the chart.
     * @param callable The callable which is used to request the chart data.
    */
    constructor(chartId: string, callable: Callable<number>);
  }
  /**
   * Represents a custom multi line chart.
  */
  export class MultiLineChart extends CustomChart {
    /**
     * Class constructor.
     *
     * @param chartId The id of the chart.
     * @param callable The callable which is used to request the chart data.
    */
    constructor(chartId: string, callable: Callable<Map<string, number>>);
  }
  /**
   * Represents a custom simple bar chart.
  */
  export class SimpleBarChart extends CustomChart {
    /**
     * Class constructor.
     *
     * @param chartId The id of the chart.
     * @param callable The callable which is used to request the chart data.
    */
    constructor(chartId: string, callable: Callable<Map<string, number>>);
  }
  /**
   * Represents a custom advanced bar chart.
  */
  export class AdvancedBarChart extends CustomChart {
    /**
     * Class constructor.
     *
     * @param chartId The id of the chart.
     * @param callable The callable which is used to request the chart data.
    */
    constructor(chartId: string, callable: Callable<Map<string, number[]>>);
  }
  
  }
  declare module 'com.comphenix.protocol.error.Report' {
  import { Throwable } from 'java.lang';
  import { Report } from 'com.comphenix.protocol.error';
  import { TimeUnit } from 'java.util.concurrent';
  /**
   * Must be constructed through the factory method in Report.
  */
  export class ReportBuilder {
    /**
     * Set the current exception that occurred.
     * @param exception - exception that occurred.
     * @return This builder, for chaining.
    */
    error(exception: Throwable | null): ReportBuilder;
    /**
     * Set the message parameters that are used to construct a message text.
     * @param messageParameters - parameters for the report type.
     * @return This builder, for chaining.
    */
    messageParam(...messageParameters: any[] | null): ReportBuilder;
    /**
     * Set the parameters in the caller method. This is optional.
     * @param callerParameters - parameters of the caller method.
     * @return This builder, for chaining.
    */
    callerParam(...callerParameters: any[] | null): ReportBuilder;
    /**
     * Set the minimum number of nanoseconds to wait until a report of equal type and parameters
     * is allowed to be printed again.
     * @param rateLimit - number of nanoseconds, or 0 to disable. Cannot be negative.
     * @return This builder, for chaining.
    */
    rateLimit(rateLimit: number): ReportBuilder;
    /**
     * Set the minimum time to wait until a report of equal type and parameters is allowed to be printed again.
     * @param rateLimit - the time, or 0 to disable. Cannot be negative.
     * @param rateUnit - the unit of the rate limit.
     * @return This builder, for chaining.
    */
    rateLimit(rateLimit: number, rateUnit: TimeUnit): ReportBuilder;
    /**
     * Construct a new report with the provided input.
     * @return A new report.
    */
    build(): Report;
  }
  
  }
  declare module 'com.comphenix.protocol.injector.netty' {
  import { Class } from 'java.lang';
  /**
   * Represents an injected client connection.
   *
   * @author Kristian
  */
  export class Injector {
    /**
     * Retrieve the current protocol version of the player.
     *
     * @return Protocol version.
    */
    getProtocolVersion(): number;
    /**
     * Inject the current channel.
     * 
     * Note that only active channels can be injected.
     *
     * @return TRUE if we injected the channel, false if we could not inject or it was already injected.
    */
    inject(): boolean;
    uninject(): void;
    /**
     * Close the current injector.
    */
    close(): void;
    receiveClientPacket(packet: any): void;
    disconnect(message: string): void;
    /**
     * Determine if the channel has already been injected.
     *
     * @return TRUE if it has, FALSE otherwise.
    */
    isInjected(): boolean;
    /**
     * Determine if this channel has been closed and cleaned up.
     *
     * @return TRUE if it has, FALSE otherwise.
    */
    isClosed(): boolean;
  }
  /**
   * A packet represented only by its id and bytes.
   *
   * @author dmulloy2
  */
  export class WirePacket {
    /**
     * Constructs a new WirePacket with a given id and contents
     *
     * @param id    ID of the packet
     * @param bytes Contents of the packet
    */
    constructor(id: number, bytes: number[]);
    /**
     * Creates a WirePacket from an existing Minecraft packet
     *
     * @param packet Existing Minecraft packet
     * @return The resulting WirePacket
     * @throws IllegalArgumentException If the packet is null or not a Minecraft packet
    */
    static fromPacket(packet: any): WirePacket;
    /**
     * Gets this packet's ID
     *
     * @return The ID
    */
    getId(): number;
    /**
     * Gets this packet's contents as a byte array
     *
     * @return The contents
    */
    getBytes(): number[];
    equals(obj: any): boolean;
    hashCode(): number;
    toString(): string;
  }
  /**
   * Represents a listener for received or sent packets.
   *
   * @author Kristian
  */
  export class ChannelListener {
    /**
     * Determine if there is a packet listener for the given packet.
     *
     * @param packetClass - the packet class to check.
     * @return TRUE if there is such a listener, FALSE otherwise.
    */
    hasListener(packetClass: Class<any>): boolean;
    /**
     * Determine if there is a server packet listener that must be executed on the main thread.
     *
     * @param packetClass - the packet class to check.
     * @return TRUE if there is, FALSE otherwise.
    */
    hasMainThreadListener(packetClass: Class<any>): boolean;
    /**
     * Determine if debug mode is enabled.
     *
     * @return TRUE if it is, FALSE otherwise.
    */
    isDebug(): boolean;
  }
  
  }
  declare module 'com.comphenix.protocol.injector.temporary' {
  import { SocketAddress } from 'java.net';
  /**
   * A temporary player created by ProtocolLib when a true player instance does not exist.
   * 
   * Also able to store a socket injector
   * 
  */
  export class TemporaryPlayer {
  
  }
  /**
   * Represents an injector that only gives access to a player's socket.
   *
   * @author Kristian
  */
  export class MinimalInjector {
    /**
     * Retrieve the associated address of this player.
     *
     * @return The associated address.
    */
    getAddress(): SocketAddress;
    /**
     * Attempt to disconnect the current client.
     *
     * @param message - the message to display.
    */
    disconnect(message: string): void;
    /**
     * Determines if the player is currently connected.
     *
     * @return true if the player is connected.
    */
    isConnected(): boolean;
  }
  /**
   * Create fake player instances that represents pre-authenticated clients.
  */
  export class TemporaryPlayerFactory {
  
  }
  export class TemporaryPlayerFactoryTest {
    initMocks(): void;
    testUnavailableSocketInjector(): void;
    createTemporaryPlayer(): void;
  }
  
  }
  declare module 'com.comphenix.protocol.wrappers.nbt.io' {
  import { Class } from 'java.lang';
  import { LoadMethod } from 'com.comphenix.protocol.wrappers.nbt.io.NbtBinarySerializer';
  /**
   * Serializes NBT to a base-64 encoded string and back.
   * 
   * @author Kristian
  */
  export class NbtTextSerializer {
    /**
     * A default instance of this serializer.
    */
    static readonly DEFAULT: NbtTextSerializer;
    constructor();
  }
  export class NbtConfigurationSerializerTest {
    static initializeBukkit(): void;
    testSerialization(): void;
  }
  export class NbtBinarySerializer {
    /**
     * Retrieve a default instance of the NBT binary serializer.
    */
    static readonly DEFAULT: NbtBinarySerializer;
  }
  /**
   * Serialize and deserialize NBT information from a configuration section.
   * 
   * Note that data types may be internally preserved by modifying the serialized name. This may
   * be visible to the end-user.
   * 
   * @author Kristian
  */
  export class NbtConfigurationSerializer {
    /**
     * The default delimiter that is used to store the data type in YAML.
    */
    static readonly TYPE_DELIMITER: string;
    /**
     * A standard YAML serializer.
    */
    static readonly DEFAULT: NbtConfigurationSerializer;
    /**
     * Construct a serializer using {@link #TYPE_DELIMITER} as the default delimiter.
    */
    constructor();
    /**
     * Construct a serializer using the given value as a delimiter.
     * @param dataTypeDelimiter - the local data type delimiter.
    */
    constructor(dataTypeDelimiter: string);
    /**
     * Retrieve the current data type delimiter.
     * @return The current data type delimiter.
    */
    getDataTypeDelimiter(): string;
  }
  
  }
  