declare module 'com.comphenix.protocol.reflect.fuzzy.AbstractFuzzyMember' {
import { Class } from 'java.lang';
import { Pattern } from 'java.util.regex';
import { AbstractFuzzyMatcher } from 'com.comphenix.protocol.reflect.fuzzy';
/**
 * Represents a builder of a fuzzy member contract.
 * 
 * @author Kristian
*/
export class Builder<T> {
  /**
   * Add a given bit-field of required modifiers for every matching member.
   * @param modifier - bit-field of modifiers that are required.
   * @return This builder, for chaining.
  */
  requireModifier(modifier: number): Builder<T>;
  /**
   * Require that every matching member is public.
   * @return This builder, for chaining.
  */
  requirePublic(): Builder<T>;
  /**
   * Add a given bit-field of modifers that will skip or ignore members.
   * @param modifier - bit-field of modifiers to skip or ignore.
   * @return This builder, for chaining.
  */
  banModifier(modifier: number): Builder<T>;
  /**
   * Set the regular expresson that matches a members name.
   * @param regex - new regular expression of valid names.
   * @return This builder, for chaining.
  */
  nameRegex(regex: string): Builder<T>;
  /**
   * Set the regular expression pattern that matches a members name.
   * @param pattern - regular expression pattern for a valid name.
   * @return This builder, for chaining.
  */
  nameRegex(pattern: Pattern): Builder<T>;
  /**
   * Set the exact name of the member we are matching.
   * 
   * This will overwrite the regular expression rule.
   * @param name - exact name.
   * @return This builder, for chaining.
  */
  nameExact(name: string): Builder<T>;
  /**
   * Require that a member is defined by this exact class.
   * @param declaringClass - the declaring class of any matching member.
   * @return This builder, for chaining.
  */
  declaringClassExactType(declaringClass: Class<any>): Builder<T>;
  /**
   * Require that a member is defined by this exact class, or any super class.
   * @param declaringClass - the declaring class.
   * @return This builder, for chaining.
  */
  declaringClassSuperOf(declaringClass: Class<any>): Builder<T>;
  /**
   * Require that a member is defined by this exact class, or any super class.
   * @param declaringClass - the declaring class.
   * @return This builder, for chaining.
  */
  declaringClassDerivedOf(declaringClass: Class<any>): Builder<T>;
  /**
   * Require that a member is defined by a class that matches the given matcher.
   * @param classMatcher - class matcher.
   * @return This builder, for chaining.
  */
  declaringClassMatching(classMatcher: AbstractFuzzyMatcher<Class<any>>): Builder<T>;
  /**
   * Build a new instance of this type.
   * 
   * Builders should call {@link AbstractFuzzyMember#prepareBuild()} when constructing new objects.
   * @return New instance of this type.
  */
  build(): T;
}

}
declare module 'com.comphenix.protocol.wrappers.EnumWrappers' {
import { Map } from 'java.util';
import { Enum, Class } from 'java.lang';
import { EquivalentConverter } from 'com.comphenix.protocol.reflect';
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
  static readonly DYING: EntityPose;
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
/**
 * The common Enum converter
*/
export class EnumConverter<T> extends EquivalentConverter<T> {
  constructor(genericType: Class<any>, specificType: Class<T>);
  /**
   * Retrieve a copy of the specific type using an instance of the generic type.
   * 
   * This is usually a wrapper type in the Bukkit API or ProtocolLib API.
   * @param generic - the generic type.
   * @return The new specific type.
  */
  getSpecific(generic: any): T;
  /**
   * Retrieve a copy of the generic type from a specific type.
   * 
   * This is usually a native net.minecraft.server type in Minecraft.
   * @param specific - the specific type we need to copy.
   * @return A copy of the specific type.
  */
  getGeneric(specific: T): any;
  /**
   * Due to type erasure, we need to explicitly keep a reference to the specific type.
   * @return The specific type.
  */
  getSpecificType(): Class<T>;
}
export class AliasedEnum {
  getAliases(): string[];
}
/**
 * Enums whose name has changed across NMS versions. Enums using this must also implement {@link AliasedEnum}
*/
export class AliasedEnumConverter<T> extends EquivalentConverter<T> {
  constructor(genericType: Class<any>, specificType: Class<T>);
  /**
   * Retrieve a copy of the specific type using an instance of the generic type.
   * 
   * This is usually a wrapper type in the Bukkit API or ProtocolLib API.
   * @param generic - the generic type.
   * @return The new specific type.
  */
  getSpecific(generic: any): T;
  /**
   * Retrieve a copy of the generic type from a specific type.
   * 
   * This is usually a native net.minecraft.server type in Minecraft.
   * @param specific - the specific type we need to copy.
   * @return A copy of the specific type.
  */
  getGeneric(specific: T): any;
  /**
   * Due to type erasure, we need to explicitly keep a reference to the specific type.
   * @return The specific type.
  */
  getSpecificType(): Class<T>;
}
/**
 * Used for classes where it's an enum in everything but name
 * @param  Generic type
*/
export class FauxEnumConverter<T> extends EquivalentConverter<T> {
  constructor(specific: Class<T>, generic: Class<any>);
  /**
   * Retrieve a copy of the generic type from a specific type.
   * 
   * This is usually a native net.minecraft.server type in Minecraft.
   * @param specific - the specific type we need to copy.
   * @return A copy of the specific type.
  */
  getGeneric(specific: T): any;
  /**
   * Retrieve a copy of the specific type using an instance of the generic type.
   * 
   * This is usually a wrapper type in the Bukkit API or ProtocolLib API.
   * @param generic - the generic type.
   * @return The new specific type.
  */
  getSpecific(generic: any): T;
  /**
   * Due to type erasure, we need to explicitly keep a reference to the specific type.
   * @return The specific type.
  */
  getSpecificType(): Class<T>;
}
export class IndexedEnumConverter<T> extends EquivalentConverter<T> {
  constructor(specificClass: Class<T>, genericClass: Class<any>);
  /**
   * Retrieve a copy of the generic type from a specific type.
   * 
   * This is usually a native net.minecraft.server type in Minecraft.
   * @param specific - the specific type we need to copy.
   * @return A copy of the specific type.
  */
  getGeneric(specific: T): any;
  /**
   * Retrieve a copy of the specific type using an instance of the generic type.
   * 
   * This is usually a wrapper type in the Bukkit API or ProtocolLib API.
   * @param generic - the generic type.
   * @return The new specific type.
  */
  getSpecific(generic: any): T;
  /**
   * Due to type erasure, we need to explicitly keep a reference to the specific type.
   * @return The specific type.
  */
  getSpecificType(): Class<T>;
}

}
declare module 'com.comphenix.protocol.reflect.fuzzy.FuzzyMethodContract' {
import { Builder as com_comphenix_protocol_reflect_fuzzy_AbstractFuzzyMember_Builder } from 'com.comphenix.protocol.reflect.fuzzy.AbstractFuzzyMember';
import { Class } from 'java.lang';
import { Pattern } from 'java.util.regex';
import { AbstractFuzzyMatcher, FuzzyMethodContract } from 'com.comphenix.protocol.reflect.fuzzy';
/**
 * Represents a builder for a fuzzy method contract.
 * 
 * @author Kristian
*/
export class Builder extends com_comphenix_protocol_reflect_fuzzy_AbstractFuzzyMember_Builder<FuzzyMethodContract> {
  requireModifier(modifier: number): Builder;
  requirePublic(): Builder;
  banModifier(modifier: number): Builder;
  nameRegex(regex: string): Builder;
  nameRegex(pattern: Pattern): Builder;
  nameExact(name: string): Builder;
  declaringClassExactType(declaringClass: Class<any>): Builder;
  declaringClassSuperOf(declaringClass: Class<any>): Builder;
  declaringClassDerivedOf(declaringClass: Class<any>): Builder;
  declaringClassMatching(classMatcher: AbstractFuzzyMatcher<Class<any>>): Builder;
  /**
   * Add a new required parameter by type for any matching method.
   * @param type - the exact type this parameter must match.
   * @return This builder, for chaining.
  */
  parameterExactType(type: Class<any>): Builder;
  /**
   * Add a new required parameter whose type must be a superclass of the given type.
   * 
   * If a method parameter is of type Number, then any derived class here (Integer, Long, etc.) will match it.
   * @param type - a type or less derived type of the matching parameter.
   * @return This builder, for chaining.
  */
  parameterSuperOf(type: Class<any>): Builder;
  /**
   * Add a new required parameter whose type must be a derived class of the given class.
   * 
   * If the method parameter has the type Integer, then the class Number here will match it.
   * @param type - a type or more derived type of the matching parameter.
   * @return This builder, for chaining.
  */
  parameterDerivedOf(type: Class<any>): Builder;
  /**
   * Add a new required parameter whose type must match the given class matcher.
   * @param classMatcher - the class matcher.
   * @return This builder, for chaining.
  */
  parameterMatches(classMatcher: AbstractFuzzyMatcher<Class<any>>): Builder;
  /**
   * Add a new required parameter by type and position for any matching method.
   * @param type - the exact type this parameter must match.
   * @param index - the expected position in the parameter list.
   * @return This builder, for chaining.
  */
  parameterExactType(type: Class<any>, index: number): Builder;
  /**
   * Add a new required parameters by type and order for any matching method.
   * @param types - the types of every parameters in order.
   * @return This builder, for chaining.
  */
  parameterExactArray(...types: Class[]): Builder;
  /**
   * Add a new required parameter whose type must be a superclass of the given type.
   * 
   * If a parameter is of type Number, any derived class (Integer, Long, etc.) will match it.
   * @param type - a type or derived type of the matching parameter.
   * @param index - the expected position in the parameter list.
   * @return This builder, for chaining.
  */
  parameterSuperOf(type: Class<any>, index: number): Builder;
  /**
   * Add a new required parameter whose type must be a derived class of the given class.
   * 
   * If the method parameter has the type Integer, then the class Number here will match it.
   * @param type - a type or more derived type of the matching parameter.
   * @param index - the expected position in the parameter list.
   * @return This builder, for chaining.
  */
  parameterDerivedOf(type: Class<any>, index: number): Builder;
  /**
   * Add a new required parameter whose type must match the given class matcher and index.
   * @param classMatcher - the class matcher.
   * @param index - the expected position in the parameter list.
   * @return This builder, for chaining.
  */
  parameterMatches(classMatcher: AbstractFuzzyMatcher<Class<any>>, index: number): Builder;
  /**
   * Set the expected number of parameters in the matching method.
   * @param expectedCount - the number of parameters to expect.
   * @return This builder, for chaining.
  */
  parameterCount(expectedCount: number): Builder;
  /**
   * Require a void method.
   * @return This builder, for chaining.
  */
  returnTypeVoid(): Builder;
  /**
   * Set the return type of a matching method exactly.
   * @param type - the exact return type.
   * @return This builder, for chaining.
  */
  returnTypeExact(type: Class<any>): Builder;
  /**
   * Set the expected super class of the return type for every matching method.
   * @param type - the return type, or a super class of it.
   * @return This builder, for chaining.
  */
  returnDerivedOf(type: Class<any>): Builder;
  /**
   * Set a matcher that must match the return type of a matching method.
   * @param classMatcher - the exact return type.
   * @return This builder, for chaining.
  */
  returnTypeMatches(classMatcher: AbstractFuzzyMatcher<Class<any>>): Builder;
  /**
   * Add a throwable exception that must match the given type exactly.
   * @param type - exception type.
   * @return This builder, for chaining.
  */
  exceptionExactType(type: Class<any>): Builder;
  /**
   * Add a throwable exception that must match the given type or be derived.
   * @param type - exception type.
   * @return This builder, for chaining.
  */
  exceptionSuperOf(type: Class<any>): Builder;
  /**
   * Add a throwable exception that must match the given matcher,
   * @param classMatcher - the class matcher that must match.
   * @return This builder, for chaining.
  */
  exceptionMatches(classMatcher: AbstractFuzzyMatcher<Class<any>>): Builder;
  /**
   * Add a throwable exception that must match the given type exactly and index.
   * @param type - exception type.
   * @param index - the position in the throwable list.
   * @return This builder, for chaining.
  */
  exceptionExactType(type: Class<any>, index: number): Builder;
  /**
   * Add a throwable exception that must match the given type or be derived and index.
   * @param type - exception type.
   * @param index - the position in the throwable list.
   * @return This builder, for chaining.
  */
  exceptionSuperOf(type: Class<any>, index: number): Builder;
  /**
   * Add a throwable exception that must match the given matcher and index.
   * @param classMatcher - the class matcher that must match.
   * @param index - the position in the throwable list.
   * @return This builder, for chaining.
  */
  exceptionMatches(classMatcher: AbstractFuzzyMatcher<Class<any>>, index: number): Builder;
  build(): FuzzyMethodContract;
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
   * Note that we may pass in a class instead of object - in that case, the unwrapper should
   * return the equivalent NMS class.
   * @param wrappedObject - wrapped object or class.
   * @return The equivalent net.minecraft.server object or class.
  */
  unwrapItem(wrappedObject: any): any;
}

}
declare module 'com.comphenix.protocol.reflect.ClassAnalyser' {
import { Class } from 'java.lang';
import { AsmOpcodes } from 'com.comphenix.protocol.reflect.ClassAnalyser.AsmMethod';
/**
 * Represents a method in ASM.
 * 
 * Keep in mind that this may also invoke a constructor.
 * @author Kristian
*/
export class AsmMethod {
  constructor(opcode: AsmOpcodes, ownerClass: string, methodName: string, signature: string);
  getOwnerName(): string;
  /**
   * Retrieve the opcode used to invoke this method or constructor.
   * @return The opcode.
  */
  getOpcode(): AsmOpcodes;
  /**
   * Retrieve the associated owner class.
   * @return The owner class.
   * @throws ClassNotFoundException If the class was not found
  */
  getOwnerClass(): Class<any>;
  getMethodName(): string;
  getSignature(): string;
}

}
declare module 'com.comphenix.protocol.wrappers.WrappedDataWatcher' {
import { Class } from 'java.lang';
import { List } from 'java.util';
import { MethodAccessor, ConstructorAccessor } from 'com.comphenix.protocol.reflect.accessors';
import { AbstractWrapper } from 'com.comphenix.protocol.wrappers';
import { StructureModifier } from 'com.comphenix.protocol.reflect';
/**
 * Represents a DataWatcherObject in 1.9. In order to register an object,
 * the serializer must be specified.
 * 
 * @author dmulloy2
*/
export class WrappedDataWatcherObject {
  /**
   * Creates a new watcher object from a NMS handle.
   * 
   * @param handle The handle
  */
  constructor(handle: any);
  /**
   * Creates a new watcher object from an index and serializer.
   * 
   * @param index Index
   * @param serializer Serializer, see {@link Registry}
  */
  constructor(index: number, serializer: Serializer);
  /**
   * Gets this watcher object's index.
   * 
   * @return The index
  */
  getIndex(): number;
  /**
   * Gets this watcher object's serializer. Will return null if the
   * serializer was never specified.
   * 
   * @return The serializer, or null
  */
  getSerializer(): Serializer;
  checkSerializer(): void;
  getHandle(): any;
  getHandleType(): Class<any>;
  toString(): string;
  equals(obj: any): boolean;
  hashCode(): number;
}
/**
 * Represents a DataWatcherSerializer in 1.9. If a Serializer is optional,
 * values must be wrapped in a {@link Optional}.
 * 
 * @author dmulloy2
*/
export class Serializer extends AbstractWrapper {
  /**
   * Constructs a new Serializer
   * 
   * @param type Type it serializes
   * @param handle NMS handle
   * @param optional Whether or not it's {@link Optional}
  */
  constructor(type: Class<any>, handle: any, optional: boolean);
  /**
   * Gets the type this serializer serializes.
   * 
   * @return The type
  */
  getType(): Class<any>;
  /**
   * Whether or not this serializer is optional, that is whether or not
   * the return type is wrapped in a {@link Optional}.
   * 
   * @return True if it is, false if not
  */
  isOptional(): boolean;
  toString(): string;
}
/**
 * Represents a DataWatcherRegistry containing the supported
 * {@link Serializer}s in 1.9.
 *
 * 
 *   Byte
 *   Integer
 *   Float
 *   String
 *   IChatBaseComponent
 *   ItemStack
 *   Optional<IBlockData>
 *   Boolean
 *   Vector3f
 *   BlockPosition
 *   Optional<BlockPosition>
 *   EnumDirection
 *   Optional<UUID>
 *   NBTTagCompound
 * 
 *
 * @author dmulloy2
*/
export class Registry {
  /**
   * Gets the first serializer associated with a given class.
   *
   * Note: If {@link Serializer#isOptional() the serializer is optional},
   *   values must be wrapped in an {@link Optional}.
   *
   * If there are multiple serializers for a given class (i.e. BlockPosition),
   *   you should use {@link #get(Class, boolean)} for more precision.
   *
   * @param clazz Class to find serializer for
   * @return The serializer, or null if none exists
  */
  static get(clazz: Class<any>): Serializer;
  /**
   * Gets the first serializer associated with a given class and optional state.
   * 
   * Note: If the serializer is optional, values must be
   * wrapped in an {@link Optional}
   *
   * @param clazz Class to find serializer for
   * @param optional Optional state
   * @return The serializer, or null if none exists
  */
  static get(clazz: Class<any>, optional: boolean): Serializer;
  /**
   * Gets the serializer associated with a given NMS handle.
   * @param handle The handle
   * @return The serializer, or null if none exists
  */
  static fromHandle(handle: any): Serializer;
  /**
   * Gets the serializer for IChatBaseComponents
   * @return The serializer
  */
  static getChatComponentSerializer(): Serializer;
  /**
   * Gets the serializer for IChatBaseComponents
   * @param optional If true, objects must be wrapped in an {@link Optional}
   * @return The serializer
  */
  static getChatComponentSerializer(optional: boolean): Serializer;
  /**
   * Gets the serializer for ItemStacks
   * @param optional If true, objects must be wrapped in an {@link Optional}
   * @return The serializer
  */
  static getItemStackSerializer(optional: boolean): Serializer;
  /**
   * Gets the serializer for BlockData
   * @param optional If true, objects must be wrapped in an {@link Optional}
   * @return The serializer
  */
  static getBlockDataSerializer(optional: boolean): Serializer;
  /**
   * Gets the serializer for Vector3Fs
   * @return The serializer
  */
  static getVectorSerializer(): Serializer;
  /**
   * Gets the serializer for BlockPositions
   * @param optional If true, objects must be wrapped in an {@link Optional}
   * @return The serializer
  */
  static getBlockPositionSerializer(optional: boolean): Serializer;
  /**
   * Gets the serializer for Directions
   * @return The serializer
  */
  static getDirectionSerializer(): Serializer;
  /**
   * Gets the serializer for UUIDs
   * @param optional If true, objects must be wrapped in an {@link Optional}
   * @return The serializer
  */
  static getUUIDSerializer(optional: boolean): Serializer;
  /**
   * Gets the serializer for NBT Compound tags
   * @return The serializer
  */
  static getNBTCompoundSerializer(): Serializer;
}

}
declare module 'com.comphenix.protocol.reflect.accessors.Accessors' {
import { Field } from 'java.lang.reflect';
import { FieldAccessor } from 'com.comphenix.protocol.reflect.accessors';
/**
 * Represents a field accessor that synchronizes access to the underlying field.
 * @author Kristian
*/
export class SynchronizedFieldAccessor extends FieldAccessor {
  /**
   * Set the value of a field for a particular instance.
   * @param instance - the instance, or NULL for a static field.
   * @param value - the new value of the field.
  */
  set(instance: any, value: any): void;
  /**
   * Retrieve the value of a field for a particular instance.
   * @param instance - the instance, or NULL for a static field.
   * @return The value of the field.
   * @throws IllegalStateException If the current security context prohibits reflection.
  */
  get(instance: any): any;
  /**
   * Retrieve the underlying field.
   * @return The field.
  */
  getField(): Field;
}

}
declare module 'com.comphenix.protocol.utility' {
import { PacketContainer } from 'com.comphenix.protocol.events';
import { Field, Constructor, Method } from 'java.lang.reflect';
import { ByteBufAllocator, ByteBuf, ByteBufProcessor } from 'io.netty.buffer';
import { NavigableMap, List, UUID, Map, Date } from 'java.util';
import { ConcurrentMap, TimeUnit } from 'java.util.concurrent';
import { NbtCompound } from 'com.comphenix.protocol.wrappers.nbt';
import { AbstractFuzzyMatcher } from 'com.comphenix.protocol.reflect.fuzzy';
import { ByteOrder, ByteBuffer } from 'java.nio';
import { EquivalentConverter } from 'com.comphenix.protocol.reflect';
import { GatheringByteChannel, ScatteringByteChannel } from 'java.nio.channels';
import { Default } from 'net.bytebuddy.dynamic.scaffold.subclass.ConstructorStrategy';
import { ProtocolManager } from 'com.comphenix.protocol';
import { Charset } from 'java.nio.charset';
import { Optional } from 'net.bytebuddy.dynamic.DynamicType.Builder.MethodDefinition.ImplementationDefinition';
import { Comparable, StringBuilder, Appendable, ClassLoader, Class } from 'java.lang';
import { Pattern } from 'java.util.regex';
import { Serializable, DataOutputStream, InputStream, OutputStream, Closeable, DataInputStream } from 'java.io';
import { ReportType } from 'com.comphenix.protocol.error';
import { MethodAccessor, FieldAccessor } from 'com.comphenix.protocol.reflect.accessors';
/**
 * Represents an object that has been generated using ByteBuddy.
 *
 * @author Pim
*/
export class ByteBuddyGenerated {

}
export class ZeroBuffer extends ByteBuf {
  capacity(): number;
  capacity(i: number): ByteBuf;
  maxCapacity(): number;
  alloc(): ByteBufAllocator;
  order(): ByteOrder;
  order(byteOrder: ByteOrder): ByteBuf;
  unwrap(): ByteBuf;
  isDirect(): boolean;
  readerIndex(): number;
  readerIndex(i: number): ByteBuf;
  writerIndex(): number;
  writerIndex(i: number): ByteBuf;
  setIndex(i: number, i1: number): ByteBuf;
  readableBytes(): number;
  writableBytes(): number;
  maxWritableBytes(): number;
  isReadable(): boolean;
  isReadable(i: number): boolean;
  isWritable(): boolean;
  isWritable(i: number): boolean;
  clear(): ByteBuf;
  markReaderIndex(): ByteBuf;
  resetReaderIndex(): ByteBuf;
  markWriterIndex(): ByteBuf;
  resetWriterIndex(): ByteBuf;
  discardReadBytes(): ByteBuf;
  discardSomeReadBytes(): ByteBuf;
  ensureWritable(i: number): ByteBuf;
  ensureWritable(i: number, b: boolean): number;
  getBoolean(i: number): boolean;
  getByte(i: number): number;
  getUnsignedByte(i: number): number;
  getShort(i: number): number;
  getUnsignedShort(i: number): number;
  getMedium(i: number): number;
  getUnsignedMedium(i: number): number;
  getInt(i: number): number;
  getUnsignedInt(i: number): number;
  getLong(i: number): number;
  getChar(i: number): string;
  getFloat(i: number): number;
  getDouble(i: number): number;
  getBytes(i: number, byteBuf: ByteBuf): ByteBuf;
  getBytes(i: number, byteBuf: ByteBuf, i1: number): ByteBuf;
  getBytes(i: number, byteBuf: ByteBuf, i1: number, i2: number): ByteBuf;
  getBytes(i: number, bytes: number[]): ByteBuf;
  getBytes(i: number, bytes: number[], i1: number, i2: number): ByteBuf;
  getBytes(i: number, byteBuffer: ByteBuffer): ByteBuf;
  getBytes(i: number, outputStream: OutputStream, i1: number): ByteBuf;
  getBytes(i: number, gatheringByteChannel: GatheringByteChannel, i1: number): number;
  setBoolean(i: number, b: boolean): ByteBuf;
  setByte(i: number, i1: number): ByteBuf;
  setShort(i: number, i1: number): ByteBuf;
  setMedium(i: number, i1: number): ByteBuf;
  setInt(i: number, i1: number): ByteBuf;
  setLong(i: number, l: number): ByteBuf;
  setChar(i: number, i1: number): ByteBuf;
  setFloat(i: number, v: number): ByteBuf;
  setDouble(i: number, v: number): ByteBuf;
  setBytes(i: number, byteBuf: ByteBuf): ByteBuf;
  setBytes(i: number, byteBuf: ByteBuf, i1: number): ByteBuf;
  setBytes(i: number, byteBuf: ByteBuf, i1: number, i2: number): ByteBuf;
  setBytes(i: number, bytes: number[]): ByteBuf;
  setBytes(i: number, bytes: number[], i1: number, i2: number): ByteBuf;
  setBytes(i: number, byteBuffer: ByteBuffer): ByteBuf;
  setBytes(i: number, inputStream: InputStream, i1: number): number;
  setBytes(i: number, scatteringByteChannel: ScatteringByteChannel, i1: number): number;
  setZero(i: number, i1: number): ByteBuf;
  readBoolean(): boolean;
  readByte(): number;
  readUnsignedByte(): number;
  readShort(): number;
  readUnsignedShort(): number;
  readMedium(): number;
  readUnsignedMedium(): number;
  readInt(): number;
  readUnsignedInt(): number;
  readLong(): number;
  readChar(): string;
  readFloat(): number;
  readDouble(): number;
  readBytes(i: number): ByteBuf;
  readSlice(i: number): ByteBuf;
  readBytes(byteBuf: ByteBuf): ByteBuf;
  readBytes(byteBuf: ByteBuf, i: number): ByteBuf;
  readBytes(byteBuf: ByteBuf, i: number, i1: number): ByteBuf;
  readBytes(bytes: number[]): ByteBuf;
  readBytes(bytes: number[], i: number, i1: number): ByteBuf;
  readBytes(byteBuffer: ByteBuffer): ByteBuf;
  readBytes(outputStream: OutputStream, i: number): ByteBuf;
  readBytes(gatheringByteChannel: GatheringByteChannel, i: number): number;
  skipBytes(i: number): ByteBuf;
  writeBoolean(b: boolean): ByteBuf;
  writeByte(i: number): ByteBuf;
  writeShort(i: number): ByteBuf;
  writeMedium(i: number): ByteBuf;
  writeInt(i: number): ByteBuf;
  writeLong(l: number): ByteBuf;
  writeChar(i: number): ByteBuf;
  writeFloat(v: number): ByteBuf;
  writeDouble(v: number): ByteBuf;
  writeBytes(byteBuf: ByteBuf): ByteBuf;
  writeBytes(byteBuf: ByteBuf, i: number): ByteBuf;
  writeBytes(byteBuf: ByteBuf, i: number, i1: number): ByteBuf;
  writeBytes(bytes: number[]): ByteBuf;
  writeBytes(bytes: number[], i: number, i1: number): ByteBuf;
  writeBytes(byteBuffer: ByteBuffer): ByteBuf;
  writeBytes(inputStream: InputStream, i: number): number;
  writeBytes(scatteringByteChannel: ScatteringByteChannel, i: number): number;
  writeZero(i: number): ByteBuf;
  indexOf(i: number, i1: number, b: number): number;
  bytesBefore(b: number): number;
  bytesBefore(i: number, b: number): number;
  bytesBefore(i: number, i1: number, b: number): number;
  forEachByte(byteBufProcessor: ByteBufProcessor): number;
  forEachByte(i: number, i1: number, byteBufProcessor: ByteBufProcessor): number;
  forEachByteDesc(byteBufProcessor: ByteBufProcessor): number;
  forEachByteDesc(i: number, i1: number, byteBufProcessor: ByteBufProcessor): number;
  copy(): ByteBuf;
  copy(i: number, i1: number): ByteBuf;
  slice(): ByteBuf;
  slice(i: number, i1: number): ByteBuf;
  duplicate(): ByteBuf;
  nioBufferCount(): number;
  nioBuffer(): ByteBuffer;
  nioBuffer(i: number, i1: number): ByteBuffer;
  internalNioBuffer(i: number, i1: number): ByteBuffer;
  nioBuffers(): ByteBuffer[];
  nioBuffers(i: number, i1: number): ByteBuffer[];
  hasArray(): boolean;
  array(): number[];
  arrayOffset(): number;
  hasMemoryAddress(): boolean;
  memoryAddress(): number;
  toString(charset: Charset): string;
  toString(i: number, i1: number, charset: Charset): string;
  hashCode(): number;
  equals(o: any): boolean;
  compareTo(byteBuf: ByteBuf): number;
  toString(): string;
  retain(i: number): ByteBuf;
  release(): boolean;
  release(i: number): boolean;
  refCnt(): number;
  retain(): ByteBuf;
}
/**
 * Determine the current Minecraft version.
 * 
 * @author Kristian
*/
export class MinecraftVersion extends Comparable<MinecraftVersion> {
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
   * Construct a version object from the format major.minor.build, or the snapshot format.
   * @param versionOnly - the version in text form.
  */
  constructor(versionOnly: string);
  /**
   * Construct a version object directly.
   * @param major - major version number.
   * @param minor - minor version number.
   * @param build - build version number.
  */
  constructor(major: number, minor: number, build: number);
  /**
   * Construct a version object directly.
   * @param major - major version number.
   * @param minor - minor version number.
   * @param build - build version number.
   * @param development - development stage.
  */
  constructor(major: number, minor: number, build: number, development: string);
  /**
   * Major version number
   * @return Current major version number.
  */
  getMajor(): number;
  /**
   * Minor version number
   * @return Current minor version number.
  */
  getMinor(): number;
  /**
   * Build version number
   * @return Current build version number.
  */
  getBuild(): number;
  /**
   * Retrieve the development stage.
   * @return Development stage, or NULL if this is a release.
  */
  getDevelopmentStage(): string;
  /**
   * Retrieve the snapshot version, or NULL if this is a release.
   * @return The snapshot version.
  */
  getSnapshot(): SnapshotVersion;
  /**
   * Determine if this version is a snapshot.
   * @return The snapshot version.
  */
  isSnapshot(): boolean;
  atOrAbove(): boolean;
  /**
   * Retrieve the version String (major.minor.build) only.
   * @return A normal version string.
  */
  getVersion(): string;
  compareTo(o: MinecraftVersion): number;
  isAtLeast(other: MinecraftVersion): boolean;
  equals(obj: any): boolean;
  hashCode(): number;
  toString(): string;
  /**
   * Extract the Minecraft version from CraftBukkit itself.
   * @param text - the server version in text form.
   * @return The underlying MC version.
   * @throws IllegalStateException If we could not parse the version string.
  */
  static extractVersion(text: string): string;
  /**
   * Parse the given server version into a Minecraft version.
   * @param serverVersion - the server version.
   * @return The resulting Minecraft version.
  */
  static fromServerVersion(serverVersion: string): MinecraftVersion;
  static setCurrentVersion(currentVersion: MinecraftVersion);
  static getCurrentVersion(): MinecraftVersion;
  static atOrAbove(version: MinecraftVersion): boolean;
}
export interface MinecraftVersion extends Comparable<MinecraftVersion>, Serializable {}
/**
 * This class can be used to reconstruct objects.
 *
 * Note that it is limited to classes where both the order and number of member variables matches the order and number
 * of arguments for the first constructor. This means that this class is mostly useful for classes generated by lambdas.
 *
 * @param  The type of the object to reconstruct.
 * @author Pim
*/
export class ObjectReconstructor<T> {
  constructor(clz: Class<T>);
  /**
   * Gets the values of all member variables of the provided instance.
   * @param instance The instance for which to get all the member variables.
   * @return The values of the member variables from the instance.
  */
  getValues(instance: any): any[];
  /**
   * Gets the fields in the class.
   * @return The fields.
  */
  getFields(): Field[];
  /**
   * Creates a new instance of the class using the new values.
   * @param values The new values for the member variables of the class.
   * @return The new instance.
  */
  reconstruct(values: any[]): T;
}
export class NettyVersion {
  static getVersion(): NettyVersion;
  constructor(s: string);
  toString(): string;
  equals(obj: any): boolean;
  getMajor(): number;
  getMinor(): number;
  getRevision(): number;
  isValid(): boolean;
  isGreaterThan(major: number, minor: number, rev: number): boolean;
}
/**
 * Used to parse a snapshot version.
 * @author Kristian
*/
export class SnapshotVersion extends Comparable<SnapshotVersion> {
  constructor(version: string);
  /**
   * Retrieve the snapshot version within a week, starting at zero.
   * @return The weekly version
  */
  getSnapshotWeekVersion(): number;
  /**
   * Retrieve the week this snapshot was released.
   * @return The week.
  */
  getSnapshotDate(): Date;
  /**
   * Retrieve the raw snapshot string (yy'w'ww[a-z]).
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
 * Represents a shared ByteBuddy factory.
 * @author Kristian
*/
export class ByteBuddyFactory {
  static getInstance(): ByteBuddyFactory;
  /**
   * Set the current class loader to use when constructing enhancers.
   * @param loader - the class loader
  */
  setClassLoader(classLoader: ClassLoader);
  /**
   * Get the current class loader we are using.
   * @return The current class loader.
  */
  getClassLoader(): ClassLoader;
  /**
   * Creates a type builder for a subclass of a given {@link Class}.
   * @param clz The class for which to create a subclass.
   * @return A type builder for creating a new class extending the provided clz and implementing
   * {@link ByteBuddyGenerated}.
  */
  createSubclass<T>(clz: Class<T>): Optional<T>;
  /**
   * Creates a type builder for a subclass of a given {@link Class}.
   * @param clz The class for which to create a subclass.
   * @param constructorStrategy The constructor strategy to use.
   * @return A type builder for creating a new class extending the provided clz and implementing
   * {@link ByteBuddyGenerated}.
  */
  createSubclass<T>(clz: Class<T>, constructorStrategy: Default): Optional<T>;
}
/**
 * Represents an input stream that delegates to a byte buffer.
 * @author Kristian
*/
export class ByteBufferInputStream extends InputStream {
  constructor(buf: ByteBuffer);
  read(): number;
  read(bytes: number[], off: number, len: number): number;
}
export class Constants {
  static readonly PACKAGE_VERSION: string;
  static readonly NMS: string;
  static readonly OBC: string;
  static readonly CURRENT_VERSION: MinecraftVersion;
  static init(): void;
}
/**
 * Static methods for accessing Minecraft methods.
 * 
 * @author Kristian
*/
export class MinecraftMethods {
  /**
   * Retrieve the send packet method in PlayerConnection/NetServerHandler.
   * @return The send packet method.
  */
  static getSendPacketMethod(): Method;
  /**
   * Retrieve the disconnect method for a given player connection.
   * @param playerConnection - the player connection.
   * @return The
  */
  static getDisconnectMethod(playerConnection: Class<any>): Method;
  /**
   * Retrieve the handle/send packet method of network manager.
   * 
   * This only exists in version 1.7.2 and above.
   * @return The handle method.
  */
  static getNetworkManagerHandleMethod(): Method;
  /**
   * Retrieve the packetRead(ChannelHandlerContext, Packet) method of NetworkManager.
   * 
   * This only exists in version 1.7.2 and above.
   * @return The packetRead method.
  */
  static getNetworkManagerReadPacketMethod(): Method;
  /**
   * Retrieve the Packet.read(PacketDataSerializer) method.
   * 
   * This only exists in version 1.7.2 and above.
   * @return The packet read method.
  */
  static getPacketReadByteBufMethod(): Method;
  /**
   * Retrieve the Packet.write(PacketDataSerializer) method.
   * 
   * This only exists in version 1.7.2 and above.
   * @return The packet write method.
  */
  static getPacketWriteByteBufMethod(): Method;
}
/**
 * A lookup of the associated protocol version of a given Minecraft server.
 * @author Kristian
*/
export class MinecraftProtocolVersion {
  /**
   * Retrieve the version of the Minecraft protocol for the current version of Minecraft.
   * @return The version number.
  */
  static getCurrentVersion(): number;
  /**
   * Retrieve the version of the Minecraft protocol for this version of Minecraft.
   * @param version - the version.
   * @return The version number.
  */
  static getVersion(version: MinecraftVersion): number;
}
/**
 * Represents an output stream that is backed by a ByteBuffer.
 * @author Kristian
*/
export class ByteBufferOutputStream extends OutputStream {
  constructor(buf: ByteBuffer);
  write(b: number): void;
  write(bytes: number[], off: number, len: number): void;
}
/**
 * Represents an abstract class loader that can only retrieve classes by their canonical name.
 * @author Kristian
*/
export class ClassSource {
  /**
   * Construct a class source from the default class loader.
   * @return A class source.
  */
  static fromClassLoader(): ClassSource;
  /**
   * Construct a class source from the default class loader and package.
   * @param packageName - the package that is prepended to every lookup.
   * @return A package source.
  */
  static fromPackage(packageName: string): ClassSource;
  /**
   * Construct a class source from the given class loader.
   * @param loader - the class loader.
   * @return The corresponding class source.
  */
  static fromClassLoader(loader: ClassLoader): ClassSource;
  /**
   * Construct a class source from a mapping of canonical names and the corresponding classes.
   * If the map is null, it will be interpreted as an empty map. If the map does not contain a Class with the specified name, or that string maps to NULL explicitly, a {@link ClassNotFoundException} will be thrown.
   * @param map - map of class names and classes.
   * @return The class source.
  */
  static fromMap(map: Map<string, Class<any>>): ClassSource;
  /**
   * @return A ClassLoader which will never successfully load a class.
  */
  static empty(): ClassSource;
  /**
   * Retrieve a class source that will attempt lookups in each of the given sources in the order they are in the array, and return the first value that is found.
   * If the sources array is null or composed of any null elements, an exception will be thrown.
   * @param sources - the class sources.
   * @return A new class source.
  */
  static attemptLoadFrom(...sources: ClassSource[]): ClassSource;
  /**
   * Retrieve a class source that will retry failed lookups in the given source.
   * @param other - the other class source.
   * @return A new class source.
  */
  retry(other: ClassSource): ClassSource;
  /**
   * Retrieve a class source that prepends a specific package name to every lookup.
   * @param packageName - the package name to prepend.
   * @return The class source.
  */
  usingPackage(packageName: string): ClassSource;
  /**
   * Retrieve a class by name.
   * @param canonicalName - the full canonical name of the class.
   * @return The corresponding class. If the class is not found, NULL should not be returned, instead a `ClassNotFoundException` exception should be thrown.
   * @throws ClassNotFoundException If the class could not be found.
  */
  loadClass(canonicalName: string): Class<any>;
}
/**
 * Utility methods for reading and writing Minecraft objects to streams.
 * 
 * @author Kristian
*/
export class StreamSerializer {
  /**
   * Retrieve a default stream serializer.
   * @return A serializer.
  */
  static getDefault(): StreamSerializer;
  /**
   * Write a variable integer to an output stream.
   * @param destination - the destination.
   * @param value - the value to write.
   * @throws IOException The destination stream threw an exception.
  */
  serializeVarInt(destination: DataOutputStream, value: number): void;
  /**
   * Read a variable integer from an input stream.
   * @param source - the source.
   * @return The integer.
   * @throws IOException The source stream threw an exception.
  */
  deserializeVarInt(source: DataInputStream): number;
  /**
   * Write or serialize a NBT compound to the given output stream.
   * 
   * Note: An NBT compound can be written to a stream even if it's NULL.
   * 
   * @param output - the target output stream.
   * @param compound - the NBT compound to be serialized, or NULL to represent nothing.
   * @throws IOException If the operation fails due to reflection problems.
  */
  serializeCompound(output: DataOutputStream, compound: NbtCompound): void;
  /**
   * Read or deserialize an NBT compound from a input stream.
   * @param input - the target input stream.
   * @return The resulting compound, or NULL.
   * @throws IOException If the operation failed due to reflection or corrupt data.
  */
  deserializeCompound(input: DataInputStream): NbtCompound;
  /**
   * Serialize a string using the standard Minecraft UTF-16 encoding.
   * 
   * Note that strings cannot exceed 32767 characters, regardless if maximum lenght.
   * @param output - the output stream.
   * @param text - the string to serialize.
   * @throws IOException If the data in the string cannot be written.
  */
  serializeString(output: DataOutputStream, text: string): void;
  /**
   * Deserialize a string using the standard Minecraft UTF-16 encoding.
   * 
   * Note that strings cannot exceed 32767 characters, regardless if maximum length.
   * @param input - the input stream.
   * @param maximumLength - the maximum length of the string.
   * @return The deserialized string.
   * @throws IOException If deserializing fails
  */
  deserializeString(input: DataInputStream, maximumLength: number): string;
}
/**
 * General utility class
 * @author dmulloy2
*/
export class Util {
  /**
   * Converts a variable argument array into a List.
   * @param elements Array to convert
   * @return The list
  */
  static asList<E>(...elements: E[]): E[];
  static classExists(className: string): boolean;
  /**
   * Whether or not this server is running Spigot or a Spigot fork. This works by checking
   * if the SpigotConfig exists, which should be true of all forks.
   * @return True if it is, false if not.
  */
  static isUsingSpigot(): boolean;
}
/**
 * Methods and constants specifically used in conjuction with reflecting Minecraft object.
 *
 * @author Kristian
*/
export class MinecraftReflection {
  static readonly REPORT_CANNOT_FIND_MCPC_REMAPPER: ReportType;
  static readonly REPORT_CANNOT_LOAD_CPC_REMAPPER: ReportType;
  static readonly REPORT_NON_CRAFTBUKKIT_LIBRARY_PACKAGE: ReportType;
  /**
   * Regular expression that matches a Minecraft object.
   * 
   * Replaced by the method {@link #getMinecraftObjectRegex()}.
  */
  static readonly MINECRAFT_OBJECT: string;
  /**
   * Retrieve a regular expression that can match Minecraft package objects.
   * @return Minecraft package matcher.
  */
  static getMinecraftObjectRegex(): string;
  /**
   * Retrieve a abstract fuzzy class matcher for Minecraft objects.
   * @return A matcher for Minecraft objects.
  */
  static getMinecraftObjectMatcher(): AbstractFuzzyMatcher<Class<any>>;
  /**
   * Retrieve the name of the Minecraft server package.
   * @return Full canonical name of the Minecraft server package.
  */
  static getMinecraftPackage(): string;
  /**
   * Retrieve the package version of the underlying CraftBukkit server.
   * @return The package version, or NULL if not applicable (before 1.4.6).
  */
  static getPackageVersion(): string;
  /**
   * Used during debugging and testing.
   * @param minecraftPackage - the current Minecraft package.
   * @param craftBukkitPackage - the current CraftBukkit package.
  */
  static setMinecraftPackage(minecraftPackage: string, craftBukkitPackage: string): void;
  /**
   * Retrieve the name of the root CraftBukkit package.
   * @return Full canonical name of the root CraftBukkit package.
  */
  static getCraftBukkitPackage(): string;
  /**
   * Dynamically retrieve the Bukkit entity from a given entity.
   * @param nmsObject - the NMS entity.
   * @return A bukkit entity.
   * @throws RuntimeException If we were unable to retrieve the Bukkit entity.
  */
  static getBukkitEntity(nmsObject: any): any;
  /**
   * Determine if a given object can be found within the package net.minecraft.server.
   * @param obj - the object to test.
   * @return TRUE if it can, FALSE otherwise.
  */
  static isMinecraftObject(obj: any): boolean;
  /**
   * Determine if the given class is found within the package net.minecraft.server, or any equivalent package.
   * @param clazz - the class to test.
   * @return TRUE if it can, FALSE otherwise.
  */
  static isMinecraftClass(clazz: Class<any>): boolean;
  /**
   * Determine if a given object is found in net.minecraft.server, and has the given name.
   * @param obj - the object to test.
   * @param className - the class name to test.
   * @return TRUE if it can, FALSE otherwise.
  */
  static isMinecraftObject(obj: any, className: string): boolean;
  /**
   * Determine if a given Object is compatible with a given Class. That is,
   * whether or not the Object is an instance of that Class or one of its
   * subclasses. If either is null, false is returned.
   * 
   * @param clazz Class to test for, may be null
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
   * Determine if a given object is a ChunkPosition.
   * @param obj - the object to test.
   * @return TRUE if it can, FALSE otherwise.
  */
  static isChunkPosition(obj: any): boolean;
  /**
   * Determine if a given object is a BlockPosition.
   * @param obj - the object to test.
   * @return TRUE if it can, FALSE otherwise.
  */
  static isBlockPosition(obj: any): boolean;
  /**
   * Determine if the given object is an NMS ChunkCoordIntPar.
   * @param obj - the object.
   * @return TRUE if it can, FALSE otherwise.
  */
  static isChunkCoordIntPair(obj: any): boolean;
  /**
   * Determine if a given object is a ChunkCoordinate.
   * @param obj - the object to test.
   * @return TRUE if it can, FALSE otherwise.
  */
  static isChunkCoordinates(obj: any): boolean;
  /**
   * Determine if the given object is actually a Minecraft packet.
   * @param obj - the given object.
   * @return TRUE if it is, FALSE otherwise.
  */
  static isPacketClass(obj: any): boolean;
  /**
   * Determine if the given object is a NetLoginHandler (PendingConnection)
   * @param obj - the given object.
   * @return TRUE if it is, FALSE otherwise.
  */
  static isLoginHandler(obj: any): boolean;
  /**
   * Determine if the given object is assignable to a NetServerHandler (PlayerConnection)
   * @param obj - the given object.
   * @return TRUE if it is, FALSE otherwise.
  */
  static isServerHandler(obj: any): boolean;
  /**
   * Determine if the given object is actually a Minecraft packet.
   * @param obj - the given object.
   * @return TRUE if it is, FALSE otherwise.
  */
  static isMinecraftEntity(obj: any): boolean;
  /**
   * Determine if the given object is a NMS ItemStack.
   * @param value - the given object.
   * @return TRUE if it is, FALSE otherwise.
  */
  static isItemStack(value: any): boolean;
  /**
   * Determine if the given object is a CraftPlayer class.
   * @param value - the given object.
   * @return TRUE if it is, FALSE otherwise.
  */
  static isCraftPlayer(value: any): boolean;
  /**
   * Determine if the given object is a Minecraft player entity.
   * @param obj - the given object.
   * @return TRUE if it is, FALSE otherwise.
  */
  static isMinecraftPlayer(obj: any): boolean;
  /**
   * Determine if the given object is a watchable object.
   * @param obj - the given object.
   * @return TRUE if it is, FALSE otherwise.
  */
  static isWatchableObject(obj: any): boolean;
  /**
   * Determine if the given object is a data watcher object.
   * @param obj - the given object.
   * @return TRUE if it is, FALSE otherwise.
  */
  static isDataWatcher(obj: any): boolean;
  /**
   * Determine if the given object is an IntHashMap object.
   * @param obj - the given object.
   * @return TRUE if it is, FALSE otherwise.
  */
  static isIntHashMap(obj: any): boolean;
  /**
   * Determine if the given object is a CraftItemStack instancey.
   * @param obj - the given object.
   * @return TRUE if it is, FALSE otherwise.
  */
  static isCraftItemStack(obj: any): boolean;
  /**
   * Retrieve the EntityPlayer (NMS) class.
   * @return The entity class.
  */
  static getEntityPlayerClass(): Class<any>;
  /**
   * Retrieve the EntityHuman class.
   * @return The entity human class.
  */
  static getEntityHumanClass(): Class<any>;
  /**
   * Retrieve the GameProfile class in 1.7.2 and later.
   * 
   * @return The game profile class.
   * @throws IllegalStateException If we are running 1.6.4 or earlier.
  */
  static getGameProfileClass(): Class<any>;
  /**
   * Retrieve the entity (NMS) class.
   * @return The entity class.
  */
  static getEntityClass(): Class<any>;
  /**
   * Retrieve the CraftChatMessage in Minecraft 1.7.2.
   * @return The CraftChatMessage class.
  */
  static getCraftChatMessage(): Class<any>;
  /**
   * Retrieve the WorldServer (NMS) class.
   * @return The WorldServer class.
  */
  static getWorldServerClass(): Class<any>;
  /**
   * Retrieve the World (NMS) class.
   * @return The world class.
  */
  static getNmsWorldClass(): Class<any>;
  /**
   * Retrieve the packet class.
   * @return The packet class.
  */
  static getPacketClass(): Class<any>;
  static getByteBufClass(): Class<any>;
  /**
   * Retrieve the EnumProtocol class in 1.7.2.
   * @return The Enum protocol class.
  */
  static getEnumProtocolClass(): Class<any>;
  /**
   * Retrieve the IChatBaseComponent class.
   * @return The IChatBaseComponent.
  */
  static getIChatBaseComponentClass(): Class<any>;
  static getIChatBaseComponentArrayClass(): Class<any>;
  /**
   * Retrieve the NMS chat component text class.
   * @return The chat component class.
  */
  static getChatComponentTextClass(): Class<any>;
  /**
   * Attempt to find the ChatSerializer class.
   * @return The serializer class.
   * @throws IllegalStateException If the class could not be found or deduced.
  */
  static getChatSerializerClass(): Class<any>;
  /**
   * Retrieve the ServerPing class in Minecraft 1.7.2.
   * @return The ServerPing class.
  */
  static getServerPingClass(): Class<any>;
  /**
   * Retrieve the ServerPingServerData class in Minecraft 1.7.2.
   * @return The ServerPingServerData class.
  */
  static getServerPingServerDataClass(): Class<any>;
  /**
   * Retrieve the ServerPingPlayerSample class in Minecraft 1.7.2.
   * @return The ServerPingPlayerSample class.
  */
  static getServerPingPlayerSampleClass(): Class<any>;
  /**
   * Determine if this Minecraft version is using Netty.
   * 
   * Spigot is ignored in this consideration.
   * @return TRUE if it does, FALSE otherwise.
  */
  static isUsingNetty(): boolean;
  /**
   * Retrieve the MinecraftServer class.
   * @return MinecraftServer class.
  */
  static getMinecraftServerClass(): Class<any>;
  /**
   * Retrieve the NMS statistics class.
   * @return The statistics class.
  */
  static getStatisticClass(): Class<any>;
  /**
   * Retrieve the NMS statistic list class.
   * @return The statistic list class.
  */
  static getStatisticListClass(): Class<any>;
  /**
   * Retrieve the player list class (or ServerConfigurationManager),
   * @return The player list class.
  */
  static getPlayerListClass(): Class<any>;
  /**
   * Retrieve the NetLoginHandler class (or PendingConnection)
   * @return The NetLoginHandler class.
  */
  static getNetLoginHandlerClass(): Class<any>;
  /**
   * Retrieve the PlayerConnection class (or NetServerHandler)
   * @return The PlayerConnection class.
  */
  static getPlayerConnectionClass(): Class<any>;
  /**
   * Retrieve the NetworkManager class or its interface.
   * @return The NetworkManager class or its interface.
  */
  static getNetworkManagerClass(): Class<any>;
  /**
   * Retrieve the NetHandler class (or Connection)
   * @return The NetHandler class.
  */
  static getNetHandlerClass(): Class<any>;
  /**
   * Retrieve the NMS ItemStack class.
   * @return The ItemStack class.
  */
  static getItemStackClass(): Class<any>;
  /**
   * Retrieve the Block (NMS) class.
   * @return Block (NMS) class.
  */
  static getBlockClass(): Class<any>;
  static getItemClass(): Class<any>;
  static getFluidTypeClass(): Class<any>;
  static getParticleTypeClass(): Class<any>;
  /**
   * Retrieve the WorldType class.
   * @return The WorldType class.
  */
  static getWorldTypeClass(): Class<any>;
  /**
   * Retrieve the DataWatcher class.
   * @return The DataWatcher class.
  */
  static getDataWatcherClass(): Class<any>;
  /**
   * Retrieves the ChunkPosition class.
   *
   * @return The ChunkPosition class.
  */
  static getChunkPositionClass(): Class<any>;
  /**
   * Retrieves the BlockPosition class.
   * 
   * @return The BlockPosition class.
  */
  static getBlockPositionClass(): Class<any>;
  /**
   * Retrieves the Vec3D class.
   * @return The Vec3D class.
  */
  static getVec3DClass(): Class<any>;
  /**
   * Retrieve the ChunkCoordinates class.
   * @return The ChunkPosition class.
  */
  static getChunkCoordinatesClass(): Class<any>;
  /**
   * Retrieve the ChunkCoordIntPair class.
   * @return The ChunkCoordIntPair class.
  */
  static getChunkCoordIntPair(): Class<any>;
  /**
   * Retrieve the WatchableObject class. Replaced by {@link #getDataWatcherItemClass()}
   * @return The WatchableObject class.
  */
  static getWatchableObjectClass(): Class<any>;
  /**
   * Retrieve the DataWatcher Item class.
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
   * @return The ServerConnection class.
  */
  static getServerConnectionClass(): Class<any>;
  /**
   * Retrieve the NBT base class.
   * @return The NBT base class.
  */
  static getNBTBaseClass(): Class<any>;
  /**
   * Retrieve the NBT read limiter class.
   * 
   * This is only supported in 1.7.8 (released 2014) and higher.
   * @return The NBT read limiter.
  */
  static getNBTReadLimiterClass(): Class<any>;
  /**
   * Retrieve the NBT Compound class.
   * @return The NBT Compond class.
  */
  static getNBTCompoundClass(): Class<any>;
  /**
   * Retrieve the EntityTracker (NMS) class.
   * @return EntityTracker class.
  */
  static getEntityTrackerClass(): Class<any>;
  /**
   * Retrieve the attribute snapshot class.
   * 
   * This stores the final value of an attribute, along with all the associated computational steps.
   * @return The attribute snapshot class.
  */
  static getAttributeSnapshotClass(): Class<any>;
  /**
   * Retrieve the IntHashMap class.
   * @return IntHashMap class.
  */
  static getIntHashMapClass(): Class<any>;
  /**
   * Retrieve the attribute modifier class.
   * @return Attribute modifier class.
  */
  static getAttributeModifierClass(): Class<any>;
  /**
   * Retrieve the net.minecraft.server.MobEffect class.
   * @return The mob effect class.
  */
  static getMobEffectClass(): Class<any>;
  /**
   * Retrieve the packet data serializer class that overrides ByteBuf.
   * @return The data serializer class.
  */
  static getPacketDataSerializerClass(): Class<any>;
  /**
   * Retrieve the NBTCompressedStreamTools class.
   * @return The NBTCompressedStreamTools class.
  */
  static getNbtCompressedStreamToolsClass(): Class<any>;
  /**
   * Retrieve the NMS tile entity class.
   * @return The tile entity class.
  */
  static getTileEntityClass(): Class<any>;
  /**
   * Retrieve the Gson class used by Minecraft.
   * @return The Gson class.
  */
  static getMinecraftGsonClass(): Class<any>;
  /**
   * Retrieve the ItemStack[] class.
   * @return The ItemStack[] class.
  */
  static getItemStackArrayClass(): Class<any>;
  /**
   * Retrieve the array class of a given component type.
   * @param componentType - type of each element in the array.
   * @return The class of the array.
  */
  static getArrayClass(componentType: Class<any>): Class<any>;
  /**
   * Retrieve the CraftItemStack class.
   * @return The CraftItemStack class.
  */
  static getCraftItemStackClass(): Class<any>;
  /**
   * Retrieve the CraftPlayer class.
   * @return CraftPlayer class.
  */
  static getCraftPlayerClass(): Class<any>;
  /**
   * Retrieve the CraftWorld class.
   * @return The CraftWorld class.
  */
  static getCraftWorldClass(): Class<any>;
  /**
   * Retrieve the CraftEntity class.
   * @return CraftEntity class.
  */
  static getCraftEntityClass(): Class<any>;
  /**
   * Retrieve the CraftChatMessage introduced in 1.7.2
   * @return The CraftChatMessage class.
  */
  static getCraftMessageClass(): Class<any>;
  /**
   * Retrieve the PlayerInfoData class in 1.8.
   * @return The PlayerInfoData class
  */
  static getPlayerInfoDataClass(): Class<any>;
  /**
   * Retrieves the entity use action class in 1.17.
   * @return The EntityUseAction class
  */
  static getEnumEntityUseActionClass(): Class<any>;
  /**
   * Get a method accessor to get the actual use action out of the wrapping EnumEntityUseAction in 1.17.
   * @return a method accessor to get the actual use action
  */
  static getEntityUseActionEnumMethodAccessor(): MethodAccessor;
  /**
   * Get a field accessor for the hand in the wrapping EnumEntityUseAction in 1.17.
   *
   * @param enumEntityUseAction the object instance of the action, the field is not present in attack.
   * @return a field accessor for the hand in the wrapping EnumEntityUseAction
  */
  static getHandEntityUseActionEnumFieldAccessor(enumEntityUseAction: any): FieldAccessor;
  /**
   * Get a field accessor for the vec3d in the wrapping EnumEntityUseAction in 1.17.
   *
   * @param enumEntityUseAction the object instance of the action, the field is not present in attack.
   * @return a field accessor for the hand in the wrapping EnumEntityUseAction
  */
  static getVec3EntityUseActionEnumFieldAccessor(enumEntityUseAction: any): FieldAccessor;
  /**
   * Determine if the given object is a PlayerInfoData.
   * @param obj - the given object.
   * @return TRUE if it is, FALSE otherwise.
  */
  static isPlayerInfoData(obj: any): boolean;
  /**
   * Retrieve the IBlockData class in 1.8.
   * @return The IBlockData class
  */
  static getIBlockDataClass(): Class<any>;
  /**
   * Retrieve the MultiBlockChangeInfo class in 1.8.
   * @return The MultiBlockChangeInfo class
  */
  static getMultiBlockChangeInfoClass(): Class<any>;
  /**
   * Retrieve the MultiBlockChangeInfo array class in 1.8.
   * @return The MultiBlockChangeInfo array class
  */
  static getMultiBlockChangeInfoArrayClass(): Class<any>;
  /**
   * Retrieve the PacketPlayOutGameStateChange.a class, aka GameState in 1.16
   * @return The GameState class
  */
  static getGameStateClass(): Class<any>;
  static signUpdateExists(): boolean;
  static getNonNullListClass(): Class<any>;
  static getNonNullListCreateAccessor(): MethodAccessor;
  static getCraftSoundClass(): Class<any>;
  static getSectionPositionClass(): Class<any>;
  /**
   * Retrieve the class object of a specific CraftBukkit class.
   * @param className - the specific CraftBukkit class.
   * @return Class object.
   * @throws RuntimeException If we are unable to find the given class.
  */
  static getCraftBukkitClass(className: string): Class<any>;
  /**
   * Retrieve the class object of a specific Minecraft class.
   * @param className - the specific Minecraft class.
   * @return Class object.
   * @throws RuntimeException If we are unable to find the given class.
  */
  static getMinecraftClass(className: string): Class<any>;
  static getNullableNMS(className: string, ...aliases: string[]): Class<any>;
  /**
   * Retrieve the first class that matches a specified Minecraft name.
   * @param className - the specific Minecraft class.
   * @param aliases - alternative names for this Minecraft class.
   * @return Class object.
   * @throws RuntimeException If we are unable to find any of the given classes.
  */
  static getMinecraftClass(className: string, ...aliases: string[]): Class<any>;
  /**
   * Retrieve the class object of a specific Minecraft library class.
   * @param className - the specific library Minecraft class.
   * @return Class object.
   * @throws RuntimeException If we are unable to find the given class.
  */
  static getMinecraftLibraryClass(className: string): Class<any>;
  /**
   * Dynamically retrieve the NetworkManager name.
   * @return Name of the NetworkManager class.
  */
  static getNetworkManagerName(): string;
  /**
   * Dynamically retrieve the name of the current NetLoginHandler.
   * @return Name of the NetLoginHandler class.
  */
  static getNetLoginHandlerName(): string;
  /**
   * Retrieve an instance of the packet data serializer wrapper.
   * @param buffer - the buffer.
   * @return The instance.
  */
  static getPacketDataSerializer(buffer: any): any;
  static getNbtTagTypes(): Class<any>;
  static getChatDeserializer(): Class<any>;
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
  static getFastUtilClass(className: string): Class<any>;
  static getInt2ObjectMapClass(): Class<any>;
  static getIntArrayListClass(): Class<any>;
}
/**
 * Utility methods for sending chat messages.
 * 
 * @author Kristian
*/
export class ChatExtensions {
  constructor(manager: ProtocolManager);
  /**
   * Construct chat packet to send in order to display a given message.
   * @param message - the message to send.
   * @return The packets.
  */
  static createChatPackets(message: string): PacketContainer[];
  /**
   * Broadcast a message without invoking any packet listeners.
   * @param message - message to send.
   * @param permission - permission required to receieve the message. NULL to target everyone.
   * @throws InvocationTargetException If we were unable to send the message.
  */
  broadcastMessageSilently(message: string, permission: string): void;
  /**
   * Print a flower box around a given message.
   * @param message - the message to print.
   * @param marginChar - the character to use as margin.
   * @param marginWidth - the width (in characters) of the left and right margin.
   * @param marginHeight - the height (in characters) of the top and buttom margin.
   * @return Flowerboxed message
  */
  static toFlowerBox(message: string[], marginChar: string, marginWidth: number, marginHeight: number): string[];
}
/**
 * Retrieve the content of well-known fields in Minecraft.
 * @author Kristian
*/
export class MinecraftFields {

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
export class Closer extends Closeable {
  static create(): Closer;
  register<C>(close: C): C;
  close(): void;
  static closeQuietly(close: Closeable): void;
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
  /**
   * Retrieve the closest equivalent converter to a specific class.
   * @param clazz - the class.
   * @return The closest converter, or NULL if not found,
  */
  static findConverter(clazz: Class<any>): EquivalentConverter<any>;
  /**
   * Retrieve a detailed string representation of the given packet.
   * @param packetContainer - the packet to describe.
   * @return The detailed description.
   * @throws IllegalAccessException An error occured.
  */
  static getPacketDescription(packetContainer: PacketContainer): string;
}

}
declare module 'com.comphenix.protocol.error' {
import { Logger } from 'java.util.logging';
import { ExpireHashMap } from 'com.comphenix.protocol.collections';
import { Set, Map } from 'java.util';
import { Throwable, StackTraceElement, Class, Exception } from 'java.lang';
import { PrintStream, File } from 'java.io';
import { ConcurrentMap } from 'java.util.concurrent';
import { ReportBuilder } from 'com.comphenix.protocol.error.Report';
import { AtomicInteger } from 'java.util.concurrent.atomic';
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
  /**
   * Prints a debug message from the current sender.
   * 
   * Most users will not see this message.
   * @param sender - the sender.
   * @param report - the report.
  */
  reportDebug(sender: any, report: Report): void;
  /**
   * Prints a debug message from the current sender.
   * @param sender - the sender.
   * @param builder - the report builder.
  */
  reportDebug(sender: any, builder: ReportBuilder): void;
  /**
   * Prints a warning message from the current plugin.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportWarning(sender: any, report: Report): void;
  /**
   * Prints a warning message from the current plugin.
   * @param sender - the object containing the caller method.
   * @param reportBuilder - an error report builder that will be used to get the report.
  */
  reportWarning(sender: any, reportBuilder: ReportBuilder): void;
  /**
   * Prints a detailed error report about an unhandled exception.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportDetailed(sender: any, report: Report): void;
  /**
   * Prints a detailed error report about an unhandled exception.
   * @param sender - the object containing the caller method.
   * @param reportBuilder - an error report builder that will be used to get the report.
  */
  reportDetailed(sender: any, reportBuilder: ReportBuilder): void;
}
/**
 * Construct an error reporter that delegates to another error reporter.
 * @author Kristian
*/
export class DelegatedErrorReporter extends ErrorReporter {
  /**
   * Construct a new error reporter that forwards all reports to a given reporter.
   * @param delegated - the delegated reporter.
  */
  constructor(delegated: ErrorReporter);
  /**
   * Retrieve the underlying error reporter.
   * @return Underlying error reporter.
  */
  getDelegated(): ErrorReporter;
  /**
   * Prints a debug message from the current sender.
   * 
   * Most users will not see this message.
   * @param sender - the sender.
   * @param report - the report.
  */
  reportDebug(sender: any, report: Report): void;
  /**
   * Prints a warning message from the current plugin.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportWarning(sender: any, report: Report): void;
  /**
   * Prints a detailed error report about an unhandled exception.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportDetailed(sender: any, report: Report): void;
  /**
   * Prints a warning message from the current plugin.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportWarning(sender: any, reportBuilder: ReportBuilder): void;
  /**
   * Prints a detailed error report about an unhandled exception.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportDetailed(sender: any, reportBuilder: ReportBuilder): void;
  /**
   * Prints a debug message from the current sender.
   * 
   * Most users will not see this message.
   * @param sender - the sender.
   * @param report - the report.
  */
  reportDebug(sender: any, builder: ReportBuilder): void;
}
/**
 * Represents a basic error reporter that prints error reports to the standard error stream.
 * 
 * Note that this implementation doesn't distinguish between {@link #reportWarning(Object, Report)} 
 * and {@link #reportDetailed(Object, Report)} - they both have the exact same behavior.
 * @author Kristian
*/
export class BasicErrorReporter extends ErrorReporter {
  /**
   * Construct a new basic error reporter that prints directly the standard error stream.
  */
  constructor();
  /**
   * Construct a error reporter that prints to the given output stream.
   * @param output - the output stream.
  */
  constructor(output: PrintStream);
  /**
   * Prints a debug message from the current sender.
   * 
   * Most users will not see this message.
   * @param sender - the sender.
   * @param report - the report.
  */
  reportDebug(sender: any, report: Report): void;
  /**
   * Prints a debug message from the current sender.
   * 
   * Most users will not see this message.
   * @param sender - the sender.
   * @param report - the report.
  */
  reportDebug(sender: any, builder: ReportBuilder): void;
  /**
   * Prints a warning message from the current plugin.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportWarning(sender: any, report: Report): void;
  /**
   * Prints a warning message from the current plugin.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportWarning(sender: any, reportBuilder: ReportBuilder): void;
  /**
   * Prints a detailed error report about an unhandled exception.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportDetailed(sender: any, report: Report): void;
  /**
   * Prints a detailed error report about an unhandled exception.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportDetailed(sender: any, reportBuilder: ReportBuilder): void;
}
/**
 * Represents an error reporter that rethrows every exception instead.
 * @author Kristian
*/
export class RethrowErrorReporter extends ErrorReporter {
  /**
   * Prints a debug message from the current sender.
   * 
   * Most users will not see this message.
   * @param sender - the sender.
   * @param report - the report.
  */
  reportDebug(sender: any, report: Report): void;
  /**
   * Prints a debug message from the current sender.
   * 
   * Most users will not see this message.
   * @param sender - the sender.
   * @param report - the report.
  */
  reportDebug(sender: any, builder: ReportBuilder): void;
  /**
   * Prints a warning message from the current plugin.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportWarning(sender: any, reportBuilder: ReportBuilder): void;
  /**
   * Prints a warning message from the current plugin.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportWarning(sender: any, report: Report): void;
  /**
   * Prints a detailed error report about an unhandled exception.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportDetailed(sender: any, reportBuilder: ReportBuilder): void;
  /**
   * Prints a detailed error report about an unhandled exception.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportDetailed(sender: any, report: Report): void;
}
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
 * Internal class used to handle exceptions.
 * 
 * @author Kristian
*/
export class DetailedErrorReporter extends ErrorReporter {
  /**
   * Report format for printing the current exception count.
  */
  static readonly REPORT_EXCEPTION_COUNT: ReportType;
  static readonly SECOND_LEVEL_PREFIX: string;
  static readonly DEFAULT_PREFIX: string;
  static readonly DEFAULT_SUPPORT_URL: string;
  static readonly ERROR_PERMISSION: string;
  static readonly DEFAULT_MAX_ERROR_COUNT: number;
  /**
   * Determine if we're using detailed error reporting.
   * @return TRUE if we are, FALSE otherwise.
  */
  isDetailedReporting(): boolean;
  /**
   * Set whether or not to use detailed error reporting.
   * @param detailedReporting - TRUE to enable it, FALSE otherwise.
  */
  setDetailedReporting(detailedReporting: boolean): void;
  /**
   * Prints a debug message from the current sender.
   * 
   * Most users will not see this message.
   * @param sender - the sender.
   * @param report - the report.
  */
  reportDebug(sender: any, builder: ReportBuilder): void;
  /**
   * Prints a debug message from the current sender.
   * 
   * Most users will not see this message.
   * @param sender - the sender.
   * @param report - the report.
  */
  reportDebug(sender: any, report: Report): void;
  /**
   * Prints a warning message from the current plugin.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportWarning(sender: any, reportBuilder: ReportBuilder): void;
  /**
   * Prints a warning message from the current plugin.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportWarning(sender: any, report: Report): void;
  /**
   * Prints a detailed error report about an unhandled exception.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportDetailed(sender: any, reportBuilder: ReportBuilder): void;
  /**
   * Prints a detailed error report about an unhandled exception.
   * @param sender - the object containing the caller method.
   * @param report - an error report to include.
  */
  reportDetailed(sender: any, report: Report): void;
  /**
   * Retrieve a string representation of the given object.
   * @param value - object to convert.
   * @return String representation.
  */
  static getStringDescription(value: any): string;
  /**
   * Retrieve the current number of errors printed through {@link #reportDetailed(Object, Report)}.
   * @return Number of errors printed.
  */
  getErrorCount(): number;
  /**
   * Set the number of errors printed.
   * @param errorCount - new number of errors printed.
  */
  setErrorCount(errorCount: number);
  /**
   * Retrieve the maximum number of errors we can print before we begin suppressing errors.
   * @return Maximum number of errors.
  */
  getMaxErrorCount(): number;
  /**
   * Set the maximum number of errors we can print before we begin suppressing errors.
   * @param maxErrorCount - new max count.
  */
  setMaxErrorCount(maxErrorCount: number);
  /**
   * Adds the given global parameter. It will be included in every error report.
   * 
   * Both key and value must be non-null.
   * @param key - name of parameter.
   * @param value - the global parameter itself.
  */
  addGlobalParameter(key: string, value: any): void;
  /**
   * Retrieve a global parameter by its key.
   * @param key - key of the parameter to retrieve.
   * @return The value of the global parameter, or NULL if not found.
  */
  getGlobalParameter(key: string): any;
  /**
   * Reset all global parameters.
  */
  clearGlobalParameters(): void;
  /**
   * Retrieve a set of every registered global parameter.
   * @return Set of all registered global parameters.
  */
  globalParameters(): Set<string>;
  /**
   * Retrieve the support URL that will be added to all detailed reports.
   * @return Support URL.
  */
  getSupportURL(): string;
  /**
   * Set the support URL that will be added to all detailed reports.
   * @param supportURL - the new support URL.
  */
  setSupportURL(supportURL: string);
  /**
   * Retrieve the prefix to apply to every line in the error reports.
   * @return Error report prefix.
  */
  getPrefix(): string;
  /**
   * Set the prefix to apply to every line in the error reports.
   * @param prefix - new prefix.
  */
  setPrefix(prefix: string);
  /**
   * Retrieve the current logger that is used to print all reports.
   * @return The current logger.
  */
  getLogger(): Logger;
  /**
   * Set the current logger that is used to print all reports.
   * @param logger - new logger.
  */
  setLogger(logger: Logger);
}
/**
 * Represents a error or warning report.
 * 
 * @author Kristian
*/
export class Report {
  /**
   * Construct a new report builder.
   * @param type - the initial report type.
   * @return Report builder.
  */
  static newBuilder(type: ReportType): ReportBuilder;
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
   * Retrieve the report type.
   * @return Report type.
  */
  getType(): ReportType;
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
import { Field } from 'java.lang.reflect';
import { ListenerOptions } from 'com.comphenix.protocol.events';
import { Class } from 'java.lang';
import { Set, Optional } from 'java.util';
import { Sender } from 'com.comphenix.protocol.PacketType';
import { PacketType } from 'com.comphenix.protocol';
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
 * Represents an incoming packet injector.
 * 
 * @author Kristian
*/
export class PacketInjector {
  /**
   * Determine if a packet is cancelled or not.
   * @param packet - the packet to check.
   * @return TRUE if it is, FALSE otherwise.
  */
  isCancelled(packet: any): boolean;
  /**
   * Set whether or not a packet is cancelled.
   * @param packet - the packet to set.
   * @param cancelled - TRUE to cancel the packet, FALSE otherwise.
  */
  setCancelled(packet: any, cancelled: boolean): void;
  /**
   * Start intercepting packets with the given packet type.
   * @param type - the type of the packets to start intercepting.
   * @param options - any listener options.
   * @return TRUE if we didn't already intercept these packets, FALSE otherwise.
  */
  addPacketHandler(type: PacketType, options: Set<ListenerOptions>): boolean;
  /**
   * Stop intercepting packets with the given packet type.
   * @param type - the type of the packets to stop intercepting.
   * @return TRUE if we successfuly stopped intercepting a given packet ID, FALSE otherwise.
  */
  removePacketHandler(type: PacketType): boolean;
  /**
   * Determine if packets with the given packet type is being intercepted.
   * @param type - the packet type to lookup.
   * @return TRUE if we do, FALSE otherwise.
  */
  hasPacketHandler(type: PacketType): boolean;
  /**
   * Invoked when input buffers have changed.
   * @param set - the new set of packets that require the read buffer.
  */
  inputBuffersChanged(set: Set<PacketType>): void;
  /**
   * Retrieve every intercepted packet type.
   * @return Every intercepted packet type.
  */
  getPacketHandlers(): Set<PacketType>;
  /**
   * Perform any necessary cleanup before unloading ProtocolLib.
  */
  cleanupAll(): void;
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
  /**
   * Determine if the given packet type is supported on the current server.
   * @param type - the type to check.
   * @return TRUE if it is, FALSE otherwise.
  */
  static isSupported(type: PacketType): boolean;
  /**
   * Retrieve every known and supported server packet type.
   * @return Every server packet type.
  */
  static getServerPacketTypes(): Set<PacketType>;
  /**
   * Retrieve every known and supported server packet type.
   * @return Every server packet type.
  */
  static getClientPacketTypes(): Set<PacketType>;
  /**
   * Retrieves the correct packet class from a given type.
   *
   * @param type - the packet type.
   * @param forceVanilla - whether or not to look for vanilla classes, not injected classes.
   * @return The associated class.
   * @deprecated forceVanilla no longer has any effect
  */
  static getPacketClassFromType(type: PacketType, forceVanilla: boolean): Class<any>;
  static tryGetPacketClass(type: PacketType): Optional<Class<any>>;
  /**
   * Get the packet class associated with a given type. First attempts to read from the
   * type-to-class mapping, and tries
   * @param type the packet type
   * @return The associated class
  */
  static getPacketClassFromType(type: PacketType): Class<any>;
  /**
   * Retrieve the packet type of a given packet.
   * @param packet - the class of the packet.
   * @return The packet type, or NULL if not found.
  */
  static getPacketType(packet: Class<any>): PacketType;
  /**
   * Retrieve the packet type of a given packet.
   * @param packet - the class of the packet.
   * @param sender - the sender of the packet, or NULL.
   * @return The packet type, or NULL if not found.
   * @deprecated sender no longer has any effect
  */
  static getPacketType(packet: Class<any>, sender: Sender): PacketType;
}

}
declare module 'com.comphenix.protocol.injector.netty.ChannelInjector' {
import { SocketInjector } from 'com.comphenix.protocol.injector.server';
import { NetworkMarker } from 'com.comphenix.protocol.events';
import { SocketAddress, Socket } from 'java.net';
import { ChannelInjector } from 'com.comphenix.protocol.injector.netty';
/**
 * Represents a socket injector that foreards to the current channel injector.
 * @author Kristian
*/
export class ChannelSocketInjector extends SocketInjector {
  /**
   * Retrieve the associated socket of this player.
   * @return The associated socket.
   * @throws IllegalAccessException If we're unable to read the socket field.
   * @deprecated May be null on certain server implementations. Also don't use raw sockets.
  */
  getSocket(): Socket;
  /**
   * Retrieve the associated address of this player.
   * @return The associated address.
   * @throws IllegalAccessException If we're unable to read the socket field.
  */
  getAddress(): SocketAddress;
  /**
   * Attempt to disconnect the current client.
   * @param message - the message to display.
   * @throws InvocationTargetException If disconnection failed.
  */
  disconnect(message: string): void;
  /**
   * Send a packet to the client.
   * @param packet - server packet to send.
   * @param marker - the network marker.
   * @param filtered - whether or not the packet will be filtered by our listeners.
   * @throws InvocationTargetException If an error occured when sending the packet.
  */
  sendServerPacket(packet: any, marker: NetworkMarker, filtered: boolean): void;
  /**
   * Invoked when a delegated socket injector transfers the state of one injector to the next.
   * @param delegate - the new injector.
  */
  transferState(delegate: SocketInjector): void;
  /**
   * Determines if the player is currently connected.
   * @return true if the player is connected.
  */
  isConnected(): boolean;
}

}
declare module 'com.comphenix.protocol.wrappers.TroveWrapper' {
import { RuntimeException } from 'java.lang';
export class CannotFindTroveNoEntryValue extends RuntimeException {

}

}
declare module 'com.comphenix.protocol.wrappers.WrappedServerPing' {
import { RenderedImage, BufferedImage } from 'java.awt.image';
import { InputStream } from 'java.io';
export class CompressedImage {
  /**
   * Construct a new compressed image.
   * @param mime - the mime type.
   * @param data - the raw compressed image data.
  */
  constructor(mime: string, data: number[]);
  /**
   * Retrieve a compressed image from an input stream.
   * @param input - the PNG as an input stream.
   * @return The compressed image.
   * @throws IOException If we cannot read the input stream.
  */
  static fromPng(input: InputStream): CompressedImage;
  /**
   * Retrieve a compressed image from a byte array of a PNG file.
   * @param data - the file as a byte array.
   * @return The compressed image.
  */
  static fromPng(data: number[]): CompressedImage;
  /**
   * Retrieve a compressed image from a base-64 encoded PNG file.
   * @param base64 - the base 64-encoded PNG.
   * @return The compressed image.
  */
  static fromBase64Png(base64: string): CompressedImage;
  /**
   * Retrieve a compressed image from an image.
   * @param image - the image.
   * @return A compressed image from an image.
   * @throws IOException If we were unable to compress the image.
  */
  static fromPng(image: RenderedImage): CompressedImage;
  /**
   * Retrieve a compressed image from an encoded text.
   * @param text - the encoded text.
   * @return The corresponding compressed image.
  */
  static fromEncodedText(text: string): CompressedImage;
  /**
   * Retrieve the MIME type of the image.
   * 
   * This is image/png in vanilla Minecraft.
   * @return The MIME type.
  */
  getMime(): string;
  /**
   * Retrieve a copy of the underlying data array.
   * @return The underlying compressed image.
  */
  getDataCopy(): number[];
  /**
   * Uncompress and return the stored image.
   * @return The image.
   * @throws IOException If the image data could not be decoded.
  */
  getImage(): BufferedImage;
  /**
   * Convert the compressed image to encoded text.
   * @return The encoded text.
  */
  toEncodedText(): string;
}

}
declare module 'com.comphenix.protocol.timing' {
import { PacketListener } from 'com.comphenix.protocol.events';
import { Set, List, Map, Date } from 'java.util';
import { File } from 'java.io';
import { AtomicBoolean } from 'java.util.concurrent.atomic';
import { ListenerType } from 'com.comphenix.protocol.timing.TimedListenerManager';
import { PacketType } from 'com.comphenix.protocol';
export class TimingReportGenerator {
  saveTo(destination: File, manager: TimedListenerManager): void;
}
/**
 * Represents an online algortihm for computing the mean and standard deviation without storing every value.
 * @author Kristian
*/
export class StatisticsStream extends OnlineComputation {
  /**
   * Construct a new stream with no observations.
  */
  constructor();
  /**
   * Construct a copy of the given stream.
   * @param other - copy of the stream.
  */
  constructor(other: StatisticsStream);
  copy(): StatisticsStream;
  /**
   * Observe a value.
   * @param value - the observed value.
  */
  observe(value: number): void;
  /**
   * Retrieve the average of all the observations.
   * @return The average.
  */
  getMean(): number;
  /**
   * Retrieve the variance of all the observations.
   * @return The variance.
  */
  getVariance(): number;
  /**
   * Retrieve the standard deviation of all the observations.
   * @return The STDV.
  */
  getStandardDeviation(): number;
  /**
   * Retrieve the minimum observation yet observed.
   * @return The minimum observation.
  */
  getMinimum(): number;
  /**
   * Retrieve the maximum observation yet observed.
   * @return The maximum observation.
  */
  getMaximum(): number;
  /**
   * Combine the two statistics.
   * @param other - the other statistics.
   * @return Combined statistics
  */
  add(other: StatisticsStream): StatisticsStream;
  /**
   * Retrieve the number of observations.
   * @return Number of observations.
  */
  getCount(): number;
  toString(): string;
}
/**
 * Tracks the invocation time for a particular plugin against a list of packets.
 * @author Kristian
*/
export class TimedTracker {
  /**
   * Begin tracking an execution time.
   * @return The current tracking token.
  */
  beginTracking(): number;
  /**
   * Stop and record the execution time since the creation of the given tracking token.
   * @param trackingToken - the tracking token.
   * @param type - the packet type.
  */
  endTracking(trackingToken: number, type: PacketType): void;
  /**
   * Retrieve the total number of observations.
   * @return Total number of observations.
  */
  getObservations(): number;
  /**
   * Retrieve an map (indexed by packet type) of all relevant statistics.
   * @return The map of statistics.
  */
  getStatistics(): Map<PacketType, StatisticsStream>;
}
/**
 * Represents an online algortihm of computing histograms over time.
 * @author Kristian
*/
export class HistogramStream extends OnlineComputation {
  /**
   * Construct a new histogram stream which splits up every observation in different bins, ordered by time. 
   * @param binWidth - maximum number of observations in each bin.
  */
  constructor(binWidth: number);
  /**
   * Construct a new copy of the given histogram.
   * @param other - the histogram to copy.
  */
  constructor(other: HistogramStream);
  copy(): HistogramStream;
  observe(value: number): void;
  /**
   * Retrieve the total statistics of every bin in the histogram.
   * 
   * This method is not thread safe.
   * @return The total statistics.
  */
  getTotal(): StatisticsStream;
  getCount(): number;
}
/**
 * Represents an online computation.
 * @author Kristian
*/
export class OnlineComputation {
  /**
   * Retrieve the number of observations.
   * @return Number of observations.
  */
  getCount(): number;
  /**
   * Observe a value.
   * @param value - the observed value.
  */
  observe(value: number): void;
  /**
   * Construct a copy of the current online computation.
   * @return The new copy.
  */
  copy(): OnlineComputation;
  /**
   * Retrieve a wrapper for another online computation that is synchronized.
   * @param computation - the computation.
   * @return The synchronized wrapper.
  */
  static synchronizedComputation(computation: OnlineComputation): OnlineComputation;
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
  /**
   * Retrieve the timed tracker associated with the given listener and listener type.
   * @param listener - the listener.
   * @param type - the listener type.
   * @return The timed tracker.
  */
  getTracker(listener: PacketListener, type: ListenerType): TimedTracker;
  /**
   * Retrieve the timed tracker associated with the given plugin and listener type.
   * @param pluginName - the plugin name.
   * @param type - the listener type.
   * @return The timed tracker.
  */
  getTracker(pluginName: string, type: ListenerType): TimedTracker;
}

}
declare module 'com.comphenix.protocol.events.NetworkMarker' {
import { NetworkMarker, ConnectionSide } from 'com.comphenix.protocol.events';
export class EmptyBufferMarker extends NetworkMarker {
  constructor(side: ConnectionSide);
}

}
declare module 'com.comphenix.protocol.reflect.instances' {
import { Constructor } from 'java.lang.reflect';
import { Node } from 'com.comphenix.protocol.reflect.instances.ExistingGenerator';
import { Collection, List, UUID, Map } from 'java.util';
import { Throwable, Class, IllegalArgumentException } from 'java.lang';
import { MethodAccessor } from 'com.comphenix.protocol.reflect.accessors';
import { AbstractFuzzyMatcher } from 'com.comphenix.protocol.reflect.fuzzy';
/**
 * Provides instance constructors using a list of existing values.
 * 
 * Only one instance per individual class.
 * @author Kristian
*/
export class ExistingGenerator extends InstanceProvider {
  /**
   * Automatically create an instance provider from a objects public and private fields.
   * 
   * If two or more fields share the same type, the last declared non-null field will take
   * precedent.
   * @param object - object to create an instance generator from.
   * @return The instance generator.
  */
  static fromObjectFields(object: any): ExistingGenerator;
  /**
   * Automatically create an instance provider from a objects public and private fields.
   * 
   * If two or more fields share the same type, the last declared non-null field will take
   * precedent.
   * @param object - object to create an instance generator from.
   * @param type - the type to cast the object.
   * @return The instance generator.
  */
  static fromObjectFields(object: any, type: Class<any>): ExistingGenerator;
  /**
   * Create an instance generator from a pre-defined array of values.
   * @param values - values to provide.
   * @return An instance provider that uses these values.
  */
  static fromObjectArray(values: any[]): ExistingGenerator;
  /**
   * Create an instance given a type, if possible.
   * @param type - type to create.
   * @return The instance, or NULL if the type cannot be created.
   * @throws NotConstructableException Thrown to indicate that this type cannot or should never be constructed.
  */
  create(type: Class<any> | null): any;
}
/**
 * Used to construct default instances of any type.
 * @author Kristian
*/
export class DefaultInstances extends InstanceProvider {
  /**
   * Standard default instance provider.
  */
  static readonly DEFAULT: DefaultInstances;
  /**
   * Copy a given instance provider.
   * @param other - instance provider to copy.
  */
  constructor(other: DefaultInstances);
  /**
   * Construct a default instance generator using the given instance providers.
   * @param instaceProviders - array of instance providers.
  */
  constructor(...instaceProviders: InstanceProvider[]);
  /**
   * Construct a default instance generator using the given instance providers.
   * @param instanceProviders - array of instance providers.
   * @return An default instance generator.
  */
  static fromArray(...instanceProviders: InstanceProvider[]): DefaultInstances;
  /**
   * Construct a default instance generator using the given instance providers.
   * @param instanceProviders - collection of instance providers.
   * @return An default instance generator.
  */
  static fromCollection(instanceProviders: Collection<InstanceProvider>): DefaultInstances;
  /**
   * Retrieve whether or not the constructor's parameters must be non-null.
   * @return TRUE if they must be non-null, FALSE otherwise.
  */
  isNonNull(): boolean;
  /**
   * Set whether or not the constructor's parameters must be non-null.
   * @param nonNull - TRUE if they must be non-null, FALSE otherwise.
  */
  setNonNull(nonNull: boolean): void;
  /**
   * Retrieve the the maximum height of the hierachy of creates types.
   * @return Maximum height.
  */
  getMaximumRecursion(): number;
  /**
   * Set the maximum height of the hierachy of creates types. Used to prevent cycles.
   * @param maximumRecursion - maximum recursion height.
  */
  setMaximumRecursion(maximumRecursion: number);
  /**
   * Retrieves a default instance or value that is assignable to this type.
   * 
   * This includes, but isn't limited too:
   * 
   *   Primitive types. Returns either zero or null.
   *   Primitive wrappers.
   *   String types. Returns an empty string.
   *   Arrays. Returns a zero-length array of the same type.
   *   Enums. Returns the first declared element.
   *   Collection interfaces, such as List and Set. Returns the most appropriate empty container.
   *   Any type with a public constructor that has parameters with defaults.
   * 
   * @param  Type
   * @param type - the type to construct a default value.
   * @return A default value/instance, or NULL if not possible.
  */
  getDefault<T>(type: Class<T>): T;
  /**
   * Retrieve the constructor with the fewest number of parameters.
   * @param  Type
   * @param type - type to construct.
   * @return A constructor with the fewest number of parameters, or NULL if the type has no constructors.
  */
  getMinimumConstructor<T>(type: Class<T>): Constructor<T>;
  /**
   * Retrieves a default instance or value that is assignable to this type.
   * 
   * This includes, but isn't limited too:
   * 
   *   Primitive types. Returns either zero or null.
   *   Primitive wrappers.
   *   String types. Returns an empty string.
   *   Arrays. Returns a zero-length array of the same type.
   *   Enums. Returns the first declared element.
   *   Collection interfaces, such as List and Set. Returns the most appropriate empty container.
   *   Any type with a public constructor that has parameters with defaults.
   * 
   * @param  Type
   * @param type - the type to construct a default value.
   * @param providers - instance providers used during the construction.
   * @return A default value/instance, or NULL if not possible.
  */
  getDefault<T>(type: Class<T>, providers: InstanceProvider[]): T;
  /**
   * Create an instance given a type, if possible.
   * @param type - type to create.
   * @return The instance, or NULL if the type cannot be created.
   * @throws NotConstructableException Thrown to indicate that this type cannot or should never be constructed.
  */
  create(type: Class<any> | null): any;
}
/**
 * Provides simple constructors for collection interfaces.
 * @author Kristian
*/
export class CollectionGenerator extends InstanceProvider {
  /**
   * Shared instance of this generator.
  */
  static readonly INSTANCE: CollectionGenerator;
  /**
   * Create an instance given a type, if possible.
   * @param type - type to create.
   * @return The instance, or NULL if the type cannot be created.
   * @throws NotConstructableException Thrown to indicate that this type cannot or should never be constructed.
  */
  create(type: Class<any> | null): any;
}
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
/**
 * Generator that ensures certain types will never be created.
 * 
 * @author Kristian
*/
export class BannedGenerator extends InstanceProvider {
  /**
   * Construct a generator that ensures any class that matches the given matcher is never constructed.
   * @param classMatcher - a class matcher.
  */
  constructor(classMatcher: AbstractFuzzyMatcher<Class<any>>);
  constructor(...classes: Class[]);
  /**
   * Create an instance given a type, if possible.
   * @param type - type to create.
   * @return The instance, or NULL if the type cannot be created.
   * @throws NotConstructableException Thrown to indicate that this type cannot or should never be constructed.
  */
  create(type: Class<any> | null): any;
}
export class MinecraftGenerator {
  static readonly SYS_UUID: UUID;
  static readonly AIR_ITEM_STACK: any;
  static readonly INSTANCE: InstanceProvider;
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
/**
 * Provides constructors for primtive types, wrappers, arrays and strings.
 * @author Kristian
*/
export class PrimitiveGenerator extends InstanceProvider {
  /**
   * Default value for Strings.
  */
  static readonly STRING_DEFAULT: string;
  /**
   * Shared instance of this generator.
  */
  static INSTANCE: PrimitiveGenerator;
  constructor(stringDefault: string);
  /**
   * Retrieve the string default.
   * @return Default instance of a string.
  */
  getStringDefault(): string;
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
import { Set, Iterator, Collection, List, ListIterator, Map } from 'java.util';
import { Entry } from 'java.util.Map';
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
 * Represents a set that wraps another set by transforming the items going in and out.
 * 
 * @author Kristian
 *
 * @param  - type of the element in the inner invisible set.
 * @param  - type of the elements publically accessible in the outer set.
*/
export class ConvertedSet<VInner, VOuter> extends ConvertedCollection<VInner, VOuter> {
  constructor(inner: Collection<VInner>);
}
export interface ConvertedSet<VInner, VOuter> extends ConvertedCollection<VInner, VOuter>, Set<VOuter> {}
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
 * Represents a list that wraps another list by transforming the items going in and out.
 * 
 * @author Kristian
 *
 * @param  - type of the items in the inner invisible list.
 * @param  - type of the items publically accessible in the outer list.
*/
export class ConvertedList<VInner, VOuter> extends ConvertedCollection<VInner, VOuter> {
  constructor(inner: VInner[]);
  add(index: number, element: VOuter): void;
  addAll(index: number, c: Collection<VOuter>): boolean;
  get(index: number): VOuter;
  indexOf(o: any): number;
  lastIndexOf(o: any): number;
  listIterator(): ListIterator<VOuter>;
  listIterator(index: number): ListIterator<VOuter>;
  remove(index: number): VOuter;
  set(index: number, element: VOuter): VOuter;
  subList(fromIndex: number, toIndex: number): VOuter[];
  add(e: VOuter): boolean;
  addAll(c: Collection<VOuter>): boolean;
  remove(o: any): boolean;
}
export interface ConvertedList<VInner, VOuter> extends ConvertedCollection<VInner, VOuter> {}
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
/**
 * Represents a cached set. Enumeration of the set will use a cached inner list.
 * 
 * @author Kristian
 * @param  - the element type.
*/
export class CachedSet<T> extends CachedCollection<T> {
  /**
   * Construct a cached set from the given delegate.
   * @param delegate - the set delegate.
  */
  constructor(delegate: Set<T>);
}
export interface CachedSet<T> extends CachedCollection<T>, Set<T> {}
/**
 * Represents a collection that wraps another collection by transforming the elements going in and out.
 * 
 * @author Kristian
 *
 * @param  - type of the element in the inner invisible collection.
 * @param  - type of the elements publically accessible in the outer collection.
*/
export class ConvertedCollection<VInner, VOuter> extends AbstractConverted<VInner, VOuter> {
  constructor(inner: Collection<VInner>);
  add(e: VOuter): boolean;
  addAll(c: Collection<VOuter>): boolean;
  clear(): void;
  contains(o: any): boolean;
  containsAll(c: Collection<any>): boolean;
  isEmpty(): boolean;
  iterator(): Iterator<VOuter>;
  remove(o: any): boolean;
  removeAll(c: Collection<any>): boolean;
  retainAll(c: Collection<any>): boolean;
  size(): number;
  toArray(): any[];
  toArray<T>(a: T[]): T[];
}
export interface ConvertedCollection<VInner, VOuter> extends AbstractConverted<VInner, VOuter>, Collection<VOuter> {}
/**
 * Represents a map that wraps another map by transforming the entries going in and out.
 * 
 * @author Kristian
 *
 * @param  - type of the value in the entries in the inner invisible map.
 * @param  - type of the value in the entries publically accessible in the outer map.
*/
export class ConvertedMap<Key, VInner, VOuter> extends AbstractConverted<VInner, VOuter> {
  constructor(inner: Map<Key, VInner>);
  clear(): void;
  containsKey(key: any): boolean;
  containsValue(value: any): boolean;
  entrySet(): Set<Entry<Key, VOuter>>;
  get(key: any): VOuter;
  isEmpty(): boolean;
  keySet(): Set<Key>;
  put(key: Key, value: VOuter): VOuter;
  putAll(m: Map<Key, VOuter>): void;
  remove(key: any): VOuter;
  size(): number;
  values(): Collection<VOuter>;
  /**
   * Returns a string representation of this map.  The string representation
   * consists of a list of key-value mappings in the order returned by the
   * map's entrySet view's iterator, enclosed in braces
   * ("{}").  Adjacent mappings are separated by the characters
   * ", " (comma and space).  Each key-value mapping is rendered as
   * the key followed by an equals sign ("=") followed by the
   * associated value.  Keys and values are converted to strings as by
   * {@link String#valueOf(Object)}.
   *
   * @return a string representation of this map
  */
  toString(): string;
}
export interface ConvertedMap<Key, VInner, VOuter> extends AbstractConverted<VInner, VOuter>, Map<Key, VOuter> {}

}
declare module 'com.comphenix.protocol.injector' {
import { Constructor } from 'java.lang.reflect';
import { PacketContainer, ListenerPriority, PacketEvent, ListeningWhitelist, PacketListener, NetworkMarker } from 'com.comphenix.protocol.events';
import { AsyncFilterManager } from 'com.comphenix.protocol.async';
import { Set, List, Map } from 'java.util';
import { ConcurrentMap } from 'java.util.concurrent';
import { AtomicBoolean, AtomicInteger } from 'java.util.concurrent.atomic';
import { StructureModifier } from 'com.comphenix.protocol.reflect';
import { Unwrapper } from 'com.comphenix.protocol.injector.PacketConstructor';
import { ProtocolManager, PacketType, AsynchronousManager } from 'com.comphenix.protocol';
import { MinecraftVersion } from 'com.comphenix.protocol.utility';
import { AbstractConcurrentListenerMultimap } from 'com.comphenix.protocol.concurrency';
import { PlayerInjectionHandler } from 'com.comphenix.protocol.injector.player';
import { Enum, Comparable, RuntimeException, Runnable, ClassLoader, Throwable, Class } from 'java.lang';
import { ErrorReporter, ReportType } from 'com.comphenix.protocol.error';
import { PacketInjector } from 'com.comphenix.protocol.injector.packet';
import { ConstructorAccessor } from 'com.comphenix.protocol.reflect.accessors';
import { ProtocolInjector } from 'com.comphenix.protocol.injector.netty';
import { Supplier } from 'java.util.function';
import { TimedListenerManager } from 'com.comphenix.protocol.timing';
/**
 * Sets the inject hook type. Different types allow for maximum compatibility.
 * @author Kristian
*/
export class PlayerInjectHooks extends Enum<PlayerInjectHooks> {
  /**
   * The injection hook that does nothing. Set when every other inject hook fails.
  */
  static readonly NONE: PlayerInjectHooks;
  /**
   * Override the network handler object itself. Only works in 1.3.
   * 
   * Cannot intercept MapChunk packets.
  */
  static readonly NETWORK_MANAGER_OBJECT: PlayerInjectHooks;
  /**
   * Override the packet queue lists in NetworkHandler.
   * 
   * Cannot intercept MapChunk packets.
  */
  static readonly NETWORK_HANDLER_FIELDS: PlayerInjectHooks;
  /**
   * Override the server handler object. Versatile, but a tad slower.
  */
  static readonly NETWORK_SERVER_OBJECT: PlayerInjectHooks;
  static valueOf(name: string): PlayerInjectHooks;
  static values(): PlayerInjectHooks[];
}
/**
 * Caches structure modifiers.
 * @author Kristian
*/
export class StructureCache {
  static newPacket(clazz: Class<any>): any;
  /**
   * Creates an empty Minecraft packet of the given type.
   * @param type - packet type.
   * @return Created packet.
  */
  static newPacket(type: PacketType): any;
  /**
   * Retrieve a cached structure modifier for the given packet type.
   * @param type - packet type.
   * @return A structure modifier.
  */
  static getStructure(type: PacketType): StructureModifier<any>;
  /**
   * Retrieve a cached structure modifier given a packet type.
   * @param packetType - packet type.
   * @return A structure modifier.
  */
  static getStructure(packetType: Class<any>): StructureModifier<any>;
  /**
   * Retrieve a cached structure modifier given a packet type.
   * @param packetType - packet type.
   * @param compile - whether or not to asynchronously compile the structure modifier.
   * @return A structure modifier.
  */
  static getStructure(packetType: Class<any>, compile: boolean): StructureModifier<any>;
  /**
   * Retrieve a cached structure modifier for the given packet type.
   * @param type - packet type.
   * @param compile - whether or not to asynchronously compile the structure modifier.
   * @return A structure modifier.
  */
  static getStructure(type: PacketType, compile: boolean): StructureModifier<any>;
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
   * @return TRUE if it does, FALSE otherwise.
  */
  hasLogin(): boolean;
  /**
   * Determine if the current value represents the playing phase.
   * @return TRUE if it does, FALSE otherwise.
  */
  hasPlaying(): boolean;
}
export class PacketFilterManager extends ListenerInvoker {
  static readonly REPORT_CANNOT_LOAD_PACKET_LIST: ReportType;
  static readonly REPORT_CANNOT_INITIALIZE_PACKET_INJECTOR: ReportType;
  static readonly REPORT_PLUGIN_DEPEND_MISSING: ReportType;
  static readonly REPORT_UNSUPPORTED_SERVER_PACKET: ReportType;
  static readonly REPORT_UNSUPPORTED_CLIENT_PACKET: ReportType;
  static readonly REPORT_CANNOT_UNINJECT_PLAYER: ReportType;
  static readonly REPORT_CANNOT_UNINJECT_OFFLINE_PLAYER: ReportType;
  static readonly REPORT_CANNOT_INJECT_PLAYER: ReportType;
  static readonly REPORT_CANNOT_UNREGISTER_PLUGIN: ReportType;
  static readonly REPORT_PLUGIN_VERIFIER_ERROR: ReportType;
  /**
   * The number of ticks in a second.
  */
  static readonly TICKS_PER_SECOND: number;
  /**
   * Only create instances of this class if ProtocolLib is disabled.
   * @param builder - PacketFilterBuilder
  */
  constructor(builder: PacketFilterBuilder);
  /**
   * Construct a new packet filter builder.
   * @return New builder.
  */
  static newBuilder(): PacketFilterBuilder;
  /**
   * Retrieve the current Minecraft version.
   * @return The current version.
  */
  getMinecraftVersion(): MinecraftVersion;
  /**
   * Retrieve the current asynchronous packet manager.
   * @return Asynchronous packet manager.
  */
  getAsynchronousManager(): AsynchronousManager;
  /**
   * Determine if debug mode is enabled.
   * @return TRUE if it is, FALSE otherwise.
  */
  isDebug(): boolean;
  /**
   * Set whether or not debug mode is enabled.
   * @param debug - TRUE if it is, FALSE otherwise.
  */
  setDebug(debug: boolean): void;
  /**
   * Retrieves how the server packets are read.
   * @return Injection method for reading server packets.
  */
  getPlayerHook(): PlayerInjectHooks;
  /**
   * Sets how the server packets are read.
   * @param playerHook - the new injection method for reading server packets.
  */
  setPlayerHook(playerHook: PlayerInjectHooks);
  /**
   * Adds a packet listener.
   * 
   * Adding an already registered listener has no effect. If you need to change the packets
   * the current listener is observing, you must first remove the packet listener before you
   * can register it again.
   * @param listener - new packet listener.
  */
  addPacketListener(listener: PacketListener): void;
  /**
   * Determine if a given packet may be sent during login.
   * @param type - the packet type.
   * @return TRUE if it may, FALSE otherwise.
  */
  isLoginPacket(type: PacketType): boolean;
  /**
   * Determine if the packet IDs in a whitelist is valid.
   * @param listener - the listener that will be mentioned in the error.
   * @param whitelist - whitelist of packet IDs.
   * @throws IllegalArgumentException If the whitelist is illegal.
  */
  verifyWhitelist(listener: PacketListener, whitelist: ListeningWhitelist): void;
  /**
   * Removes a given packet listener.
   * 
   * Attempting to remove a listener that doesn't exist has no effect.
   * @param listener - the packet listener to remove.
  */
  removePacketListener(listener: PacketListener): void;
  /**
   * Invokes the given packet event for every registered listener.
   * @param event - the packet event to invoke.
  */
  invokePacketRecieving(event: PacketEvent): void;
  /**
   * Invokes the given packet event for every registered listener.
   * @param event - the packet event to invoke.
  */
  invokePacketSending(event: PacketEvent): void;
  /**
   * Broadcast a given packet to every connected player on the server.
   * @param packet - the packet to broadcast.
   * @throws FieldAccessException If we were unable to send the packet due to reflection problems.
  */
  broadcastServerPacket(packet: PacketContainer): void;
  /**
   * Constructs a new encapsulated Minecraft packet with the given ID.
   * @param  type - packet  type.
   * @return New encapsulated Minecraft packet.
  */
  createPacket(type: PacketType): PacketContainer;
  /**
   * Constructs a new encapsulated Minecraft packet with the given ID.
   * @param  type - packet  type.
   * @return New encapsulated Minecraft packet.
  */
  createPacket(type: PacketType, forceDefaults: boolean): PacketContainer;
  /**
   * Construct a packet using the special builtin Minecraft constructors.
   * @param type - the packet type.
   * @param arguments - arguments that will be passed to the constructor.
   * @return The packet constructor.
  */
  createPacketConstructor(type: PacketType, ...arguments: any[]): PacketConstructor;
  /**
   * Retrieves a immutable set containing the type of the sent server packets that will be observed by listeners.
   * @return Every filtered server packet.
  */
  getSendingFilterTypes(): Set<PacketType>;
  /**
   * Retrieves a immutable set containing the type of the received client packets that will be observed by listeners.
   * @return Every filtered client packet.
  */
  getReceivingFilterTypes(): Set<PacketType>;
  /**
   * Retrieve the associated type of a packet.
   * @param packet - the packet.
   * @return The packet type.
  */
  getPacketType(packet: any): PacketType;
  /**
   * Retrieves the current plugin class loader.
   * @return Class loader.
  */
  getClassLoader(): ClassLoader;
  /**
   * Determines whether or not this protocol manager has been disabled.
   * @return TRUE if it has, FALSE otherwise.
  */
  isClosed(): boolean;
  /**
   * Called when ProtocolLib is closing.
  */
  close(): void;
}
export interface PacketFilterManager extends ListenerInvoker, InternalManager {}
/**
 * Represents an object capable of converting wrapped Bukkit objects into NMS objects.
 * 
 * Typical conversions include:
 * 
 * org.bukkit.entity.Player to net.minecraft.server.EntityPlayer
 * org.bukkit.World to net.minecraft.server.WorldServer
 * 
 * 
 * @author Kristian
*/
export class BukkitUnwrapper extends Unwrapper {
  static readonly REPORT_ILLEGAL_ARGUMENT: ReportType;
  static readonly REPORT_SECURITY_LIMITATION: ReportType;
  static readonly REPORT_CANNOT_FIND_UNWRAP_METHOD: ReportType;
  static readonly REPORT_CANNOT_READ_FIELD_HANDLE: ReportType;
  /**
   * Retrieve the default instance of the Bukkit unwrapper.
   * @return The default instance.
  */
  static getInstance(): BukkitUnwrapper;
  /**
   * Construct a new Bukkit unwrapper with ProtocolLib's default error reporter.
  */
  constructor();
  /**
   * Construct a new Bukkit unwrapper with the given error reporter.
   * @param reporter - the error reporter to use.
  */
  constructor(reporter: ErrorReporter);
  unwrapItem(wrappedObject: any): any;
}
export class PacketFilterBuilder {
  /**
   * Update the current class loader.
   * @param classLoader - current class loader.
   * @return This builder, for chaining.
  */
  classLoader(classLoader: ClassLoader): PacketFilterBuilder;
  /**
   * Set the current Minecraft version.
   * @param mcVersion - Minecraft version.
   * @return This builder, for chaining. 
  */
  minecraftVersion(mcVersion: MinecraftVersion): PacketFilterBuilder;
  /**
   * Set the task used to delay unhooking when ProtocolLib is no in use.
   * @param unhookTask - the unhook task.
   * @return This builder, for chaining.
  */
  unhookTask(unhookTask: DelayedSingleTask): PacketFilterBuilder;
  /**
   * Set the error reporter.
   * @param reporter - new error reporter.
   * @return This builder, for chaining.
  */
  reporter(reporter: ErrorReporter): PacketFilterBuilder;
  /**
   * Determine if we should prepare to hook Netty in Spigot.
   * 
   * This is calculated in the {@link #build()} method.
   * @return TRUE if we should, FALSE otherwise.
  */
  isNettyEnabled(): boolean;
  /**
   * Retrieve the class loader set in this builder.
   * @return The class loader.
  */
  getClassLoader(): ClassLoader;
  /**
   * Retrieve the current Minecraft version.
   * @return Current version.
  */
  getMinecraftVersion(): MinecraftVersion;
  /**
   * Retrieve the task that is used to delay unhooking when ProtocolLib is no in use.
   * @return The unhook task.
  */
  getUnhookTask(): DelayedSingleTask;
  /**
   * Retrieve the error reporter.
   * @return Error reporter.
  */
  getReporter(): ErrorReporter;
  /**
   * Retrieve the asynchronous manager.
   * 
   * This is first constructed the {@link #build()} method.
   * @return The asynchronous manager.
  */
  getAsyncManager(): AsyncFilterManager;
  /**
   * Create a new packet filter manager.
   * @return A new packet filter manager.
  */
  build(): InternalManager;
}
/**
 * Yields access to the internal hook configuration.
 * 
 * @author Kristian
*/
export class InternalManager extends ProtocolManager {
  /**
   * Retrieves how the server packets are read.
   * @return Injection method for reading server packets.
  */
  getPlayerHook(): PlayerInjectHooks;
  /**
   * Sets how the server packets are read.
   * @param playerHook - the new injection method for reading server packets.
  */
  setPlayerHook(playerHook: PlayerInjectHooks);
  /**
   * Called when ProtocolLib is closing.
  */
  close(): void;
  /**
   * Determine if debug mode is enabled.
   * @return TRUE if it is, FALSE otherwise.
  */
  isDebug(): boolean;
  /**
   * Set whether or not debug mode is enabled.
   * @param debug - TRUE if it is, FALSE otherwise.
  */
  setDebug(debug: boolean): void;
}
/**
 * Represents a single delayed task.
 * 
 * @author Kristian
*/
export class DelayedSingleTask {
  /**
   * Schedule a single task for execution. 
   * 
   * Any previously scheduled task will be automatically cancelled.
   * 
   * Note that a tick delay of zero will execute the task immediately. 
   * 
   * @param ticksDelay - number of ticks before the task is executed.
   * @param task - the task to schedule.
   * @return TRUE if the task was successfully scheduled or executed, FALSE otherwise.
  */
  schedule(ticksDelay: number, task: Runnable): boolean;
  /**
   * Whether or not a future task is scheduled to be executed.
   * @return TRUE if a current task has been scheduled for execution, FALSE otherwise.
  */
  isRunning(): boolean;
  /**
   * Cancel a future task from being executed.
   * @return TRUE if a task was cancelled, FALSE otherwise.
  */
  cancel(): boolean;
  /**
   * Retrieve the raw task ID.
   * @return Raw task ID, or negative one if no task has been scheduled.
  */
  getTaskID(): number;
  /**
   * Stop the current task and all future tasks scheduled by this instance.
  */
  close(): void;
}
/**
 * Invoked when attempting to use a player that has already logged out.
 * 
 * @author Kristian
*/
export class PlayerLoggedOutException extends RuntimeException {
  constructor();
  constructor(message: string, cause: Throwable);
  constructor(message: string);
  constructor(cause: Throwable);
  /**
   * Construct an exception from a formatted message.
   * @param message - the message to format.
   * @param params - parameters.
   * @return The formated exception
  */
  static fromFormat(message: string, ...params: any[]): PlayerLoggedOutException;
}
/**
 * Registry of synchronous packet listeners.
 * 
 * @author Kristian
*/
export class SortedPacketListenerList extends AbstractConcurrentListenerMultimap<PacketListener> {
  constructor();
  /**
   * Invokes the given packet event for every registered listener.
   * @param reporter - the error reporter that will be used to inform about listener exceptions.
   * @param event - the packet event to invoke.
  */
  invokePacketRecieving(reporter: ErrorReporter, event: PacketEvent): void;
  /**
   * Invokes the given packet event for every registered listener of the given priority.
   * @param reporter - the error reporter that will be used to inform about listener exceptions.
   * @param event - the packet event to invoke.
   * @param priorityFilter - the required priority for a listener to be invoked.
  */
  invokePacketRecieving(reporter: ErrorReporter, event: PacketEvent, priorityFilter: ListenerPriority): void;
  /**
   * Invokes the given packet event for every registered listener.
   * @param reporter - the error reporter that will be used to inform about listener exceptions.
   * @param event - the packet event to invoke.
  */
  invokePacketSending(reporter: ErrorReporter, event: PacketEvent): void;
  /**
   * Invokes the given packet event for every registered listener of the given priority.
   * @param reporter - the error reporter that will be used to inform about listener exceptions.
   * @param event - the packet event to invoke.
   * @param priorityFilter - the required priority for a listener to be invoked.
  */
  invokePacketSending(reporter: ErrorReporter, event: PacketEvent, priorityFilter: ListenerPriority): void;
}
/**
 * A packet constructor that uses an internal Minecraft.
 * @author Kristian
 *
*/
export class PacketConstructor {
  /**
   * A packet constructor that automatically converts Bukkit types to their NMS conterpart.
   * 
   * Remember to call withPacket().
  */
  static DEFAULT: PacketConstructor;
  /**
   * Retrieve the id of the packets this constructor creates.
   * 
   * Deprecated: Use {@link #getType()} instead.
   * @return The ID of the packets this constructor will create.
  */
  getPacketID(): number;
  /**
   * Retrieve the type of the packets this constructor creates.
   * @return The type of the created packets.
  */
  getType(): PacketType;
  /**
   * Return a copy of the current constructor with a different list of unwrappers.
   * @param unwrappers - list of unwrappers that convert Bukkit wrappers into the equivalent NMS classes.
   * @return A constructor with a different set of unwrappers.
  */
  withUnwrappers(unwrappers: Unwrapper[]): PacketConstructor;
  /**
   * Create a packet constructor that creates packets using the given types.
   * 
   * Note that if you pass a Class as a value, it will use its type directly.
   * @param type - the type of the packet to create.
   * @param values - the values that will match each parameter in the desired constructor.
   * @return A packet constructor with these types.
   * @throws IllegalArgumentException If no packet constructor could be created with these types.
  */
  withPacket(type: PacketType, values: any[]): PacketConstructor;
  /**
   * Construct a packet using the special builtin Minecraft constructors.
   * @param values - values containing Bukkit wrapped items to pass to Minecraft.
   * @return The created packet.
   * @throws FieldAccessException Failure due to a security limitation.
   * @throws IllegalArgumentException Arguments doesn't match the constructor.
   * @throws RuntimeException Minecraft threw an exception.
  */
  createPacket(...values: any[]): PacketContainer;
  /**
   * Retrieve the class of an object, or just the class if it already is a class object.
   * @param obj - the object.
   * @return The class of an object.
  */
  static getClass(obj: any): Class<any>;
}
/**
 * Represents an object that initiate the packet listeners.
 * 
 * @author Kristian
*/
export class ListenerInvoker {
  /**
   * Invokes the given packet event for every registered listener.
   * @param event - the packet event to invoke.
  */
  invokePacketRecieving(event: PacketEvent): void;
  /**
   * Invokes the given packet event for every registered listener.
   * @param event - the packet event to invoke.
  */
  invokePacketSending(event: PacketEvent): void;
  /**
   * Retrieve the associated type of a packet.
   * @param packet - the packet.
   * @return The packet type.
  */
  getPacketType(packet: any): PacketType;
}
/**
 * Represents a processor for network markers.
 * @author Kristian
*/
export class NetworkProcessor {
  /**
   * Construct a new network processor.
   * @param reporter - the reporter.
  */
  constructor(reporter: ErrorReporter);
  /**
   * Process the serialized packet byte array with the given network marker.
   * @param event - current packet event.
   * @param marker - the network marker.
   * @param input - the input array.
   * @return The output array.
  */
  processOutput(event: PacketEvent, marker: NetworkMarker, input: number[]): number[];
  /**
   * Invoke the post listeners and packet transmission, if any.
   * @param event - PacketEvent
   * @param marker - the network marker, or NULL.
  */
  invokePostEvent(event: PacketEvent, marker: NetworkMarker): void;
}
/**
 * Represents a listener with a priority.
 * 
 * @author Kristian
*/
export class PrioritizedListener<TListener> extends Comparable<PrioritizedListener<TListener>> {
  constructor(listener: TListener, priority: ListenerPriority);
  compareTo(other: PrioritizedListener<TListener>): number;
  equals(obj: any): boolean;
  hashCode(): number;
  /**
   * Retrieve the underlying listener.
   * @return Underlying listener.
  */
  getListener(): TListener;
  /**
   * Retrieve the priority of this listener.
   * @return Listener priority.
  */
  getPriority(): ListenerPriority;
}

}
declare module 'com.comphenix.protocol.wrappers.WrappedVillagerData' {
import { Enum } from 'java.lang';
export class Type extends Enum<Type> {
  static readonly DESERT: Type;
  static readonly JUNGLE: Type;
  static readonly PLAINS: Type;
  static readonly SAVANNA: Type;
  static readonly SNOW: Type;
  static readonly SWAMP: Type;
  static readonly TAIGA: Type;
  static valueOf(name: string): Type;
  static values(): Type[];
}
export class Profession extends Enum<Profession> {
  static readonly NONE: Profession;
  static readonly ARMORER: Profession;
  static readonly BUTCHER: Profession;
  static readonly CARTOGRAPHER: Profession;
  static readonly CLERIC: Profession;
  static readonly FARMER: Profession;
  static readonly FISHERMAN: Profession;
  static readonly FLETCHER: Profession;
  static readonly LEATHERWORKER: Profession;
  static readonly LIBRARIAN: Profession;
  static readonly MASON: Profession;
  static readonly NITWIT: Profession;
  static readonly SHEPHERD: Profession;
  static readonly TOOLSMITH: Profession;
  static readonly WEAPONSMITH: Profession;
  static valueOf(name: string): Profession;
  static values(): Profession[];
}

}
declare module 'com.comphenix.protocol.reflect.fuzzy' {
import { Field } from 'java.lang.reflect';
import { Comparable, Class } from 'java.lang';
import { Set, List } from 'java.util';
import { Pattern } from 'java.util.regex';
import { Builder as com_comphenix_protocol_reflect_fuzzy_FuzzyMethodContract_Builder, ParameterClassMatcher } from 'com.comphenix.protocol.reflect.fuzzy.FuzzyMethodContract';
import { MethodInfo } from 'com.comphenix.protocol.reflect';
import { Builder as com_comphenix_protocol_reflect_fuzzy_FuzzyClassContract_Builder } from 'com.comphenix.protocol.reflect.fuzzy.FuzzyClassContract';
import { Builder } from 'com.comphenix.protocol.reflect.fuzzy.FuzzyFieldContract';
/**
 * Represents a matcher for fields, methods, constructors and classes.
 * 
 * This class should ideally never expose mutable state. Its round number must be immutable.
 * @author Kristian
*/
export class AbstractFuzzyMatcher<T> extends Comparable<AbstractFuzzyMatcher<T>> {
  /**
   * Determine if the given value is a match.
   * @param value - the value to match.
   * @param parent - the parent container, or NULL if this value is the root.
   * @return TRUE if it is a match, FALSE otherwise.
  */
  isMatch(value: T, parent: any): boolean;
  /**
   * Retrieve the cached round number. This should never change once calculated.
   * 
   * Matchers with a lower round number are applied before matchers with a higher round number.
   * @return The round number.
   * @see #calculateRoundNumber()
  */
  getRoundNumber(): number;
  compareTo(obj: AbstractFuzzyMatcher<T>): number;
  /**
   * Create a fuzzy matcher that returns the opposite result of the current matcher.
   * @return An inverted fuzzy matcher.
  */
  inverted(): AbstractFuzzyMatcher<T>;
  /**
   * Require that this and the given matcher be TRUE.
   * @param other - the other fuzzy matcher.
   * @return A combined fuzzy matcher.
  */
  and(other: AbstractFuzzyMatcher<T>): AbstractFuzzyMatcher<T>;
  /**
   * Require that either this or the other given matcher be TRUE.
   * @param other - the other fuzzy matcher.
   * @return A combined fuzzy matcher.
  */
  or(other: AbstractFuzzyMatcher<T>): AbstractFuzzyMatcher<T>;
}
/**
 * Represents a field matcher.
 * 
 * @author Kristian
*/
export class FuzzyFieldContract extends AbstractFuzzyMember<Field> {
  /**
   * Match a field by its type.
   * @param matcher - the type to match.
   * @return The field contract.
  */
  static matchType(matcher: AbstractFuzzyMatcher<Class<any>>): FuzzyFieldContract;
  /**
   * Return a new fuzzy field contract builder.
   * @return New fuzzy field contract builder.
  */
  static newBuilder(): Builder;
  /**
   * Retrieve the class matcher that matches the type of a field.
   * @return The class matcher.
  */
  getTypeMatcher(): AbstractFuzzyMatcher<Class<any>>;
  isMatch(value: Field, parent: any): boolean;
  hashCode(): number;
  equals(obj: any): boolean;
  isMatch(value: T, parent: any): boolean;
}
/**
 * Determine if a given class implements a given fuzzy (duck typed) contract.
 * 
 * @author Kristian
*/
export class FuzzyClassContract extends AbstractFuzzyMatcher<Class<any>> {
  /**
   * Construct a new fuzzy class contract builder.
   * @return A new builder.
  */
  static newBuilder(): com_comphenix_protocol_reflect_fuzzy_FuzzyClassContract_Builder;
  isMatch(value: Class<any>, parent: any): boolean;
  toString(): string;
  /**
   * Determine if the given value is a match.
   * @param value - the value to match.
   * @param parent - the parent container, or NULL if this value is the root.
   * @return TRUE if it is a match, FALSE otherwise.
  */
  isMatch(value: T, parent: any): boolean;
}
/**
 * Contains factory methods for matching classes.
 * 
 * @author Kristian
*/
export class FuzzyMatchers {
  /**
   * Construct a class matcher that matches an array with a given component matcher.
   * @param componentMatcher - the component matcher.
   * @return A new array matcher.
  */
  static matchArray(componentMatcher: AbstractFuzzyMatcher<Class<any>>): AbstractFuzzyMatcher<Class<any>>;
  /**
   * Retrieve a fuzzy matcher that will match any class.
   * @return A class matcher.
  */
  static matchAll(): AbstractFuzzyMatcher<Class<any>>;
  /**
   * Construct a class matcher that matches types exactly.
   * @param matcher - the matching class.
   * @return A new class matcher.
  */
  static matchExact(matcher: Class<any>): AbstractFuzzyMatcher<Class<any>>;
  /**
   * Construct a class matcher that matches any of the given classes exactly.
   * @param classes - list of classes to match.
   * @return A new class matcher.
  */
  static matchAnyOf(...classes: Class[]): AbstractFuzzyMatcher<Class<any>>;
  /**
   * Construct a class matcher that matches any of the given classes exactly.
   * @param classes - set of classes to match.
   * @return A new class matcher.
  */
  static matchAnyOf(classes: Set<Class<any>>): AbstractFuzzyMatcher<Class<any>>;
  /**
   * Construct a class matcher that matches super types of the given class.
   * @param matcher - the matching type must be a super class of this type.
   * @return A new class matcher.
  */
  static matchSuper(matcher: Class<any>): AbstractFuzzyMatcher<Class<any>>;
  /**
   * Construct a class matcher that matches derived types of the given class.
   * @param matcher - the matching type must be a derived class of this type.
   * @return A new class matcher.
  */
  static matchDerived(matcher: Class<any>): AbstractFuzzyMatcher<Class<any>>;
  /**
   * Construct a class matcher based on the canonical names of classes.
   * @param regex - regular expression pattern matching class names.
   * @param priority - the priority this matcher takes - higher is better.
   * @return A fuzzy class matcher based on name.
  */
  static matchRegex(regex: Pattern, priority: number): AbstractFuzzyMatcher<Class<any>>;
  /**
   * Construct a class matcher based on the canonical names of classes.
   * @param regex - regular expression matching class names.
   * @param priority - the priority this matcher takes - higher is better.
   * @return A fuzzy class matcher based on name.
  */
  static matchRegex(regex: string, priority: number): AbstractFuzzyMatcher<Class<any>>;
  /**
   * Match the parent class of a method, field or constructor.
   * @return Parent matcher.
  */
  static matchParent(): AbstractFuzzyMatcher<Class<any>>;
}
/**
 * Represents a matcher that matches members.
 * 
 * @author Kristian
 * @param  - type that it matches.
*/
export class AbstractFuzzyMember<T> extends AbstractFuzzyMatcher<T> {
  /**
   * Retrieve a bit field of every {@link java.lang.reflect.Modifier Modifier} that is required for the member to match.
   * @return A required modifier bit field.
  */
  getModifiersRequired(): number;
  /**
   * Retrieve a bit field of every {@link java.lang.reflect.Modifier Modifier} that must not be present for the member to match.
   * @return A banned modifier bit field.
  */
  getModifiersBanned(): number;
  /**
   * Retrieve the regular expression pattern that is used to match the name of a member.
   * @return The regex matching a name, or NULL if everything matches.
  */
  getNameRegex(): Pattern;
  /**
   * Retrieve a class matcher for the declaring class of the member.
   * @return An object matching the declaring class.
  */
  getDeclaringMatcher(): AbstractFuzzyMatcher<Class<any>>;
  isMatch(value: T, parent: any): boolean;
  toString(): string;
  equals(obj: any): boolean;
  hashCode(): number;
}
/**
 * Represents a contract for matching methods or constructors.
 * 
 * @author Kristian
*/
export class FuzzyMethodContract extends AbstractFuzzyMember<MethodInfo> {
  /**
   * Return a method contract builder.
   * @return Method contract builder.
  */
  static newBuilder(): com_comphenix_protocol_reflect_fuzzy_FuzzyMethodContract_Builder;
  /**
   * Retrieve the class matcher for the return type.
   * @return Class matcher for the return type.
  */
  getReturnMatcher(): AbstractFuzzyMatcher<Class<any>>;
  /**
   * Retrieve an immutable list of every exception matcher for this method.
   * @return Immutable list of every exception matcher.
  */
  getExceptionMatchers(): ParameterClassMatcher[];
  /**
   * Retrieve the expected parameter count for this method.
   * @return Expected parameter count, or NULL if anyting goes.
  */
  getParamCount(): number;
  isMatch(value: MethodInfo, parent: any): boolean;
  hashCode(): number;
  equals(obj: any): boolean;
  isMatch(value: T, parent: any): boolean;
}

}
declare module 'com.comphenix.protocol.PacketType' {
import { ConnectionSide } from 'com.comphenix.protocol.events';
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
  /**
   * Retrieve the equivialent connection side.
   * @return The connection side.
  */
  toSide(): ConnectionSide;
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
declare module 'com.comphenix.protocol.reflect.cloning' {
import { Constructor } from 'java.lang.reflect';
import { WeakReference } from 'java.lang.ref';
import { Class } from 'java.lang';
import { Set, List, Map } from 'java.util';
import { InstanceProvider } from 'com.comphenix.protocol.reflect.instances';
import { Builder } from 'com.comphenix.protocol.reflect.cloning.AggregateCloner';
import { Function } from 'java.util.function';
import { ObjectWriter } from 'com.comphenix.protocol.reflect';
/**
 * Attempts to clone collection and array classes.
 * 
 * @author Kristian
*/
export class CollectionCloner extends Cloner {
  /**
   * Constructs a new collection and array cloner with the given inner element cloner.
   * @param defaultCloner - default inner element cloner.
  */
  constructor(defaultCloner: Cloner);
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
  /**
   * Retrieve the default cloner used to clone the content of each element in the collection.
   * @return Cloner used to clone elements.
  */
  getDefaultCloner(): Cloner;
}
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
/**
 * Represents a cloner that can clone any class that implements Serializable.
 * @author Kristian Stangeland
*/
export class SerializableCloner extends Cloner {
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
  /**
   * Clone the given object using serialization.
   * @param  Type
   * @param obj - the object to clone.
   * @return The cloned object.
   * @throws RuntimeException If we were unable to clone the object.
  */
  static clone<T>(obj: T): T;
}
/**
 * Represents a class capable of cloning objects by deeply copying its fields.
 * 
 * @author Kristian
*/
export class FieldCloner extends Cloner {
  /**
   * Constructs a field cloner that copies objects by reading and writing the internal fields directly.
   * @param defaultCloner - the default cloner used while copying fields.
   * @param instanceProvider - used to construct new, empty copies of a given type.
  */
  constructor(defaultCloner: Cloner, instanceProvider: InstanceProvider);
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
  /**
   * Retrieve the default cloner used to clone the content of each field.
   * @return Cloner used to clone fields.
  */
  getDefaultCloner(): Cloner;
  /**
   * Retrieve the instance provider this cloner is using to create new, empty classes.
   * @return The instance provider in use.
  */
  getInstanceProvider(): InstanceProvider;
}
/**
 * Implements a cloning procedure by trying multiple methods in turn until one is successful.
 * 
 * @author Kristian
*/
export class AggregateCloner extends Cloner {
  /**
   * Represents a default aggregate cloner.
  */
  static readonly DEFAULT: AggregateCloner;
  /**
   * Begins constructing a new aggregate cloner.
   * @return A builder for a new aggregate cloner.
  */
  static newBuilder(): Builder;
  /**
   * Retrieves a view of the current list of cloners.
   * @return Current cloners.
  */
  getCloners(): Cloner[];
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
/**
 * Detects classes that are immutable, and thus doesn't require cloning.
 * 
 * This ought to have no false positives, but plenty of false negatives.
 * 
 * @author Kristian
*/
export class ImmutableDetector extends Cloner {
  /**
   * Determine whether or not the current cloner can clone the given object.
   * @param source - the object that is being considered.
   * @return TRUE if this cloner can actually clone the given object, FALSE otherwise.
  */
  canClone(source: any): boolean;
  /**
   * Determine if the given type is probably immutable.
   * @param type - the type to check.
   * @return TRUE if the type is immutable, FALSE otherwise.
  */
  static isImmutable(type: Class<any>): boolean;
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
/**
 * Creates a cloner wrapper that accepts and clones NULL values.
 * 
 * @author Kristian
*/
export class NullableCloner extends Cloner {
  constructor(wrapped: Cloner);
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
  getWrapped(): Cloner;
}
/**
 * Represents an object that can clone a specific list of Bukkit- and Minecraft-related objects.
 * 
 * @author Kristian
*/
export class BukkitCloner extends Cloner {
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
/**
 * A cloner that can clone Java Optional objects
 * @author dmulloy2
*/
export class JavaOptionalCloner extends Cloner {
  constructor(wrapped: Cloner);
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
  getWrapped(): Cloner;
}
export class GuavaOptionalCloner extends Cloner {
  constructor(wrapped: Cloner);
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
  getWrapped(): Cloner;
}

}
declare module 'com.comphenix.protocol.collections' {
import { Set, Collection, PriorityQueue, Map } from 'java.util';
import { TimeUnit } from 'java.util.concurrent';
import { Entry } from 'java.util.Map';
import { ExpireEntry } from 'com.comphenix.protocol.collections.ExpireHashMap';
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
/**
 * Represents a very quick integer-based lookup map, with a fixed key space size.
 * 
 * Integers must be non-negative.
 * @author Kristian
*/
export class IntegerMap<T> {
  /**
   * Construct a new integer map.
   * @param  Parameter type
   * @return A new integer map.
  */
  static newMap<T>(): IntegerMap<T>;
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

}
declare module 'com.comphenix.protocol.injector.player' {
import { PacketContainer, PacketEvent, PacketListener, ListenerOptions } from 'com.comphenix.protocol.events';
import { Set } from 'java.util';
import { InetSocketAddress } from 'java.net';
import { InputStream } from 'java.io';
import { PlayerInjectHooks, GamePhase } from 'com.comphenix.protocol.injector';
import { PacketType } from 'com.comphenix.protocol';
export class PlayerInjectionHandler {
  /**
   * Retrieves how the server packets are read.
   * @return Injection method for reading server packets.
  */
  getPlayerHook(): PlayerInjectHooks;
  /**
   * Retrieves how the server packets are read.
   * @param phase - the current game phase.
   * @return Injection method for reading server packets.
  */
  getPlayerHook(phase: GamePhase): PlayerInjectHooks;
  /**
   * Sets how the server packets are read.
   * @param playerHook - the new injection method for reading server packets.
  */
  setPlayerHook(playerHook: PlayerInjectHooks);
  /**
   * Sets how the server packets are read.
   * @param phase - the current game phase.
   * @param playerHook - the new injection method for reading server packets.
  */
  setPlayerHook(phase: GamePhase, playerHook: PlayerInjectHooks): void;
  /**
   * Add an underlying packet handler of the given type.
   * @param type - packet type to register.
   * @param options - any specified listener options.
  */
  addPacketHandler(type: PacketType, options: Set<ListenerOptions>): void;
  /**
   * Remove an underlying packet handler of this type.
   * @param type - packet type to unregister.
  */
  removePacketHandler(type: PacketType): void;
  /**
   * Unregisters a player by the given address.
   * 
   * If the server handler has been created before we've gotten a chance to unject the player,
   * the method will try a workaround to remove the injected hook in the NetServerHandler.
   * 
   * @param address - address of the player to unregister.
   * @return TRUE if a player has been uninjected, FALSE otherwise.
  */
  uninjectPlayer(address: InetSocketAddress): boolean;
  /**
   * Determine if the given listeners are valid.
   * @param listeners - listeners to check.
  */
  checkListener(listeners: Set<PacketListener>): void;
  /**
   * Determine if a listener is valid or not.
   * 
   * If not, a warning will be printed to the console.
   * @param listener - listener to check.
  */
  checkListener(listener: PacketListener): void;
  /**
   * Retrieve the current list of registered sending listeners.
   * @return List of the sending listeners's packet IDs.
  */
  getSendingFilters(): Set<PacketType>;
  /**
   * Whether or not this player injection handler can also receive packets.
   * @return TRUE if it can, FALSE otherwise.
  */
  canRecievePackets(): boolean;
  /**
   * Invoked if this player injection handler can process received packets.
   * @param packet - the received packet.
   * @param input - the input stream.
   * @param buffered - the buffered packet.
   * @return The packet event.
  */
  handlePacketRecieved(packet: PacketContainer, input: InputStream, buffered: number[]): PacketEvent;
  /**
   * Close any lingering proxy injections.
  */
  close(): void;
  /**
   * Determine if we have packet listeners with the given type that must be executed on the main thread.
   * 
   * This only applies for onPacketSending(), as it makes certain guarantees.
   * @param type - the packet type.
   * @return TRUE if we do, FALSE otherwise.
  */
  hasMainThreadListener(type: PacketType): boolean;
}

}
declare module 'com.comphenix.protocol.concurrency' {
import { ListeningWhitelist } from 'com.comphenix.protocol.events';
import { Iterable, Class } from 'java.lang';
import { Set, NavigableMap, Iterator, Collection, List } from 'java.util';
import { ConcurrentMap, TimeUnit } from 'java.util.concurrent';
import { PrioritizedListener } from 'com.comphenix.protocol.injector';
import { PacketType } from 'com.comphenix.protocol';
import { Entry, EndPoint } from 'com.comphenix.protocol.concurrency.AbstractIntervalTree';
/**
 * Represents a concurrent set of packet types.
 * @author Kristian
*/
export class PacketTypeSet {
  constructor();
  constructor(values: Collection<PacketType>);
  /**
   * Add a particular type to the set.
   * @param type - the type to add.
  */
  addType(type: PacketType): void;
  /**
   * Add the given types to the set of packet types.
   * @param types - the types to add.
  */
  addAll(types: Iterable<PacketType>): void;
  /**
   * Remove a particular type to the set.
   * @param type - the type to remove.
  */
  removeType(type: PacketType): void;
  /**
   * Remove the given types from the set.
   * @param types Types to remove
  */
  removeAll(types: Iterable<PacketType>): void;
  /**
   * Determine if the given packet type exists in the set.
   * @param type - the type to find.
   * @return TRUE if it does, FALSE otherwise.
  */
  contains(type: PacketType): boolean;
  /**
   * Determine if a packet type with the given packet class exists in the set.
   * @param packetClass - the class to find.
   * @return TRUE if it does, FALSE otherwise.
  */
  contains(packetClass: Class<any>): boolean;
  /**
   * Determine if the type of a packet is in the current set.
   * @param packet - the packet.
   * @return TRUE if it is, FALSE otherwise.
  */
  containsPacket(packet: any): boolean;
  /**
   * Retrieve a view of this packet type set.
   * @return The packet type values.
  */
  values(): Set<PacketType>;
  /**
   * Retrieve the number of entries in the set.
   * @return The number of entries.
  */
  size(): number;
  clear(): void;
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
export class AbstractConcurrentListenerMultimap<TListener> {
  constructor();
  /**
   * Adds a listener to its requested list of packet receivers.
   * @param listener - listener with a list of packets to receive notifications for.
   * @param whitelist - the packet whitelist to use.
  */
  addListener(listener: TListener, whitelist: ListeningWhitelist): void;
  /**
   * Removes the given listener from the packet event list.
   * @param listener - listener to remove.
   * @param whitelist - the packet whitelist that was used.
   * @return Every packet ID that was removed due to no listeners.
  */
  removeListener(listener: TListener, whitelist: ListeningWhitelist): PacketType[];
  /**
   * Retrieve the registered listeners, in order from the lowest to the highest priority.
   * 
   * The returned list is thread-safe and doesn't require synchronization.
   * @param type - packet type.
   * @return Registered listeners.
  */
  getListener(type: PacketType): Collection<PrioritizedListener<TListener>>;
  /**
   * Retrieve every listener.
   * @return Every listener.
  */
  values(): Iterable<PrioritizedListener<TListener>>;
  /**
   * Retrieve every registered packet type:
   * @return Registered packet type.
  */
  keySet(): Set<PacketType>;
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
 * @param  - type of the elements in the list.
*/
export class SortedCopyOnWriteArray<T> extends Collection<T> {
  /**
   * Construct an empty sorted array.
  */
  constructor();
  /**
   * Create a sorted array from the given list. The elements will be automatically sorted.
   * @param wrapped - the collection whose elements are to be placed into the list.
  */
  constructor(wrapped: Collection<T>);
  /**
   * Create a sorted array from the given list. 
   * @param wrapped - the collection whose elements are to be placed into the list.
   * @param sort - TRUE to automatically sort the collection, FALSE if it is already sorted. 
  */
  constructor(wrapped: Collection<T>, sort: boolean);
  /**
   * Inserts the given element in the proper location.
   * @param value - element to insert.
  */
  add(value: T): boolean;
  addAll(values: Collection<T>): boolean;
  /**
   * Removes from the list by making a new list with every element except the one given.
   * 
   * Objects will be compared using the given objects equals() method.
   * @param value - value to remove.
  */
  remove(value: any): boolean;
  removeAll(values: Collection<any>): boolean;
  retainAll(values: Collection<any>): boolean;
  /**
   * Removes from the list by making a copy of every element except the one with the given index.
   * @param index - index of the element to remove.
  */
  remove(index: number): void;
  /**
   * Retrieves an element by index. 
   * @param index - index of element to retrieve.
   * @return The element at the given location.
  */
  get(index: number): T;
  /**
   * Retrieve the size of the list.
   * @return Size of the list.
  */
  size(): number;
  /**
   * Retrieves an iterator over the elements in the given list. 
   * Warning: No not attempt to remove elements using the iterator.
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
/**
 * Represents a very quick integer set that uses a lookup table to store membership.
 * 
 * This class is intentionally missing a size method.
 * @author Kristian
*/
export class IntegerSet {
  /**
   * Initialize a lookup table with the given maximum number of elements.
   * 
   * This creates a set for elements in the range [0, count).
   * 
   * Formally, the current set must be a subset of [0, 1, 2, ..., count - 1].
   * @param maximumCount - maximum element value and count.
  */
  constructor(maximumCount: number);
  /**
   * Initialize a lookup table with a given maximum and value list.
   * 
   * The provided elements must be in the range [0, count).
   * @param maximumCount - the maximum element value and count.
   * @param values - the elements to add to the set.
  */
  constructor(maximumCount: number, values: Collection<number>);
  /**
   * Determine whether or not the given element exists in the set.
   * @param element - the element to check. Must be in the range [0, count).
   * @return TRUE if the given element exists, FALSE otherwise.
  */
  contains(element: number): boolean;
  /**
   * Add the given element to the set, or do nothing if it already exists.
   * @param element - element to add.
   * @throws ArrayIndexOutOfBoundsException If the given element is not in the range [0, count).
  */
  add(element: number): void;
  /**
   * Add the given collection of elements to the set.
   * @param packets - elements to add.
  */
  addAll(packets: Collection<number>): void;
  /**
   * Remove the given element from the set, or do nothing if it's already removed.
   * @param element - element to remove.
  */
  remove(element: number): void;
  /**
   * Remove every element from the set.
  */
  clear(): void;
  /**
   * Convert the current IntegerSet to an equivalent HashSet.
   * @return The resulting HashSet.
  */
  toSet(): Set<number>;
}

}
declare module 'com.comphenix.protocol.wrappers.BukkitConverters' {
import { EquivalentConverter } from 'com.comphenix.protocol.reflect';
/**
 * Represents a typical equivalence converter.
 * 
 * @author Kristian
 * @param  - type that can be converted.
 * @deprecated Replaced by {@link Converters#ignoreNull(EquivalentConverter)}
*/
export class IgnoreNullConverter<TType> extends EquivalentConverter<TType> {
  /**
   * Retrieve a copy of the generic type from a specific type.
   * 
   * This is usually a native net.minecraft.server type in Minecraft.
   * @param specific - the specific type we need to copy.
   * @return A copy of the specific type.
  */
  getGeneric(specific: TType): any;
  /**
   * Retrieve a copy of the actual generic value.
   * @param specific - the specific type-
   * @return A copy of the specific type.
  */
  getGenericValue(specific: TType): any;
  /**
   * Retrieve a copy of the specific type using an instance of the generic type.
   * 
   * This is usually a wrapper type in the Bukkit API or ProtocolLib API.
   * @param generic - the generic type.
   * @return The new specific type.
  */
  getSpecific(generic: any): TType;
  /**
   * Retrieve a copy of the specific type using an instance of the generic type.
   * @param generic - generic type.
   * @return A copy of the specific type.
  */
  getSpecificValue(generic: any): TType;
  equals(obj: any): boolean;
  hashCode(): number;
}

}
declare module 'com.comphenix.protocol.injector.netty' {
import { PacketContainer, PacketEvent, PacketListener, NetworkMarker, ConnectionSide, ListenerOptions } from 'com.comphenix.protocol.events';
import { Set, Iterator, Collection, List, ListIterator, Map, Queue, Deque } from 'java.util';
import { ByteOrder, ByteBuffer } from 'java.nio';
import { SocketChannel as java_nio_channels_SocketChannel, GatheringByteChannel, FileChannel, ScatteringByteChannel } from 'java.nio.channels';
import { VolatileField } from 'com.comphenix.protocol.reflect';
import { PacketType } from 'com.comphenix.protocol';
import { ObjectReconstructor } from 'com.comphenix.protocol.utility';
import { EventExecutorGroup } from 'io.netty.util.concurrent';
import { SocketAddress, InetAddress, Socket } from 'java.net';
import { ErrorReporter, ReportType } from 'com.comphenix.protocol.error';
import { PacketInjector } from 'com.comphenix.protocol.injector.packet';
import { FieldAccessor } from 'com.comphenix.protocol.reflect.accessors';
import { Entry } from 'java.util.Map';
import { ByteToMessageDecoder, MessageToByteEncoder } from 'io.netty.handler.codec';
import { ChannelFuture, EventLoop, ChannelMetadata, ChannelConfig, Channel, ChannelPromise, ChannelHandlerContext, ChannelProgressivePromise, ChannelHandler, ChannelPipeline } from 'io.netty.channel';
import { SocketChannel } from 'io.netty.channel.socket';
import { Method } from 'java.lang.reflect';
import { AbstractByteBuf, ByteBufAllocator, ByteBuf } from 'io.netty.buffer';
import { ConcurrentMap } from 'java.util.concurrent';
import { ListenerInvoker, PlayerInjectHooks, GamePhase, NetworkProcessor } from 'com.comphenix.protocol.injector';
import { AtomicInteger } from 'java.util.concurrent.atomic';
import { AttributeKey, Attribute } from 'io.netty.util';
import { Protocol } from 'com.comphenix.protocol.PacketType';
import { Unsafe } from 'io.netty.channel.Channel';
import { TemporaryPlayerFactory } from 'com.comphenix.protocol.injector.server';
import { Throwable, Class } from 'java.lang';
import { PlayerInjectionHandler } from 'com.comphenix.protocol.injector.player';
import { PacketTypeSet } from 'com.comphenix.protocol.concurrency';
import { DataOutputStream, InputStream, OutputStream, DataInputStream } from 'java.io';
/**
 * Represents a channel injector.
 * @author Kristian
*/
export class ChannelInjector extends ByteToMessageDecoder {
  /**
   * Get the version of the current protocol.
   * @return The version.
  */
  getProtocolVersion(): number;
  /**
   * Inject the current channel.
   * 
   * Note that only active channels can be injected.
   * @return TRUE if we injected the channel, false if we could not inject or it was already injected.
  */
  inject(): boolean;
  exceptionCaught(ctx: ChannelHandlerContext, cause: Throwable): void;
  channelActive(ctx: ChannelHandlerContext): void;
  /**
   * Send a packet to a player's client.
   * @param packet - the packet to send.
   * @param marker - the network marker.
   * @param filtered - whether or not the packet is filtered.
  */
  sendServerPacket(packet: any, marker: NetworkMarker, filtered: boolean): void;
  /**
   * Recieve a packet on the server.
   * @param packet - the (NMS) packet to send.
  */
  recieveClientPacket(packet: any): void;
  /**
   * Retrieve the current protocol state.
   * @return The current protocol.
  */
  getCurrentProtocol(): Protocol;
  /**
   * Retrieve the network marker associated with a given packet.
   * @param packet - the packet.
   * @return The network marker.
  */
  getMarker(packet: any): NetworkMarker;
  /**
   * Associate a given network marker with a specific packet.
   * @param packet - the NMS packet.
   * @param marker - the associated marker.
  */
  saveMarker(packet: any, marker: NetworkMarker): void;
  /**
   * Determine if the channel has already been injected.
   * @return TRUE if it has, FALSE otherwise.
  */
  isInjected(): boolean;
  /**
   * Determine if this channel has been closed and cleaned up.
   * @return TRUE if it has, FALSE otherwise.
  */
  isClosed(): boolean;
  /**
   * Close the current injector.
  */
  close(): void;
  getChannel(): Channel;
}
export interface ChannelInjector extends ByteToMessageDecoder, Injector {}
/**
 * Represents an injected client connection.
 * @author Kristian
*/
export class Injector {
  /**
   * Retrieve the current protocol version of the player.
   * @return Protocol version.
  */
  getProtocolVersion(): number;
  /**
   * Inject the current channel.
   * 
   * Note that only active channels can be injected.
   * @return TRUE if we injected the channel, false if we could not inject or it was already injected.
  */
  inject(): boolean;
  /**
   * Close the current injector.
  */
  close(): void;
  /**
   * Send a packet to a player's client.
   * @param packet - the packet to send.
   * @param marker - the network marker.
   * @param filtered - whether or not the packet is filtered.
  */
  sendServerPacket(packet: any, marker: NetworkMarker, filtered: boolean): void;
  /**
   * Recieve a packet on the server.
   * @param packet - the (NMS) packet to send.
  */
  recieveClientPacket(packet: any): void;
  /**
   * Retrieve the current protocol state.
   * @return The current protocol.
  */
  getCurrentProtocol(): Protocol;
  /**
   * Retrieve the network marker associated with a given packet.
   * @param packet - the packet.
   * @return The network marker.
  */
  getMarker(packet: any): NetworkMarker;
  /**
   * Associate a given network marker with a specific packet.
   * @param packet - the NMS packet.
   * @param marker - the associated marker.
  */
  saveMarker(packet: any, marker: NetworkMarker): void;
  /**
   * Determine if the channel has already been injected.
   * @return TRUE if it has, FALSE otherwise.
  */
  isInjected(): boolean;
  /**
   * Determine if this channel has been closed and cleaned up.
   * @return TRUE if it has, FALSE otherwise.
  */
  isClosed(): boolean;
}
export class ChannelProxy extends Channel {
  constructor(delegate: Channel, messageClass: Class<any>);
  attr<T>(paramAttributeKey: AttributeKey<T>): Attribute<T>;
  bind(paramSocketAddress: SocketAddress): ChannelFuture;
  pipeline(): ChannelPipeline;
  connect(paramSocketAddress: SocketAddress): ChannelFuture;
  alloc(): ByteBufAllocator;
  newPromise(): ChannelPromise;
  eventLoop(): EventLoop;
  connect(paramSocketAddress1: SocketAddress, paramSocketAddress2: SocketAddress): ChannelFuture;
  newProgressivePromise(): ChannelProgressivePromise;
  parent(): Channel;
  config(): ChannelConfig;
  newSucceededFuture(): ChannelFuture;
  isOpen(): boolean;
  disconnect(): ChannelFuture;
  isRegistered(): boolean;
  newFailedFuture(paramThrowable: Throwable): ChannelFuture;
  close(): ChannelFuture;
  isActive(): boolean;
  deregister(): ChannelFuture;
  voidPromise(): ChannelPromise;
  metadata(): ChannelMetadata;
  bind(paramSocketAddress: SocketAddress, paramChannelPromise: ChannelPromise): ChannelFuture;
  localAddress(): SocketAddress;
  remoteAddress(): SocketAddress;
  connect(paramSocketAddress: SocketAddress, paramChannelPromise: ChannelPromise): ChannelFuture;
  closeFuture(): ChannelFuture;
  isWritable(): boolean;
  flush(): Channel;
  connect(paramSocketAddress1: SocketAddress, paramSocketAddress2: SocketAddress, paramChannelPromise: ChannelPromise): ChannelFuture;
  read(): Channel;
  unsafe(): Unsafe;
  disconnect(paramChannelPromise: ChannelPromise): ChannelFuture;
  close(paramChannelPromise: ChannelPromise): ChannelFuture;
  deregister(paramChannelPromise: ChannelPromise): ChannelFuture;
  write(paramObject: any): ChannelFuture;
  write(paramObject: any, paramChannelPromise: ChannelPromise): ChannelFuture;
  writeAndFlush(paramObject: any, paramChannelPromise: ChannelPromise): ChannelFuture;
  writeAndFlush(paramObject: any): ChannelFuture;
  compareTo(o: Channel): number;
}
/**
 * Represents a listener for received or sent packets.
 * @author Kristian
*/
export class ChannelListener {
  /**
   * Invoked when a packet is being sent to the client.
   * 
   * This is invoked on the main thread.
   * @param injector - the channel injector.
   * @param packet - the packet.
   * @param marker - the network marker.
   * @return The packet even that was passed to the listeners, with a possible packet change, or NULL.
  */
  onPacketSending(injector: Injector, packet: any, marker: NetworkMarker): PacketEvent;
  /**
   * Invoked when a packet is being received from a client.
   * 
   * This is invoked on an asynchronous worker thread.
   * @param injector - the channel injector.
   * @param packet - the packet.
   * @param marker - the associated network marker, if any.
   * @return The packet even that was passed to the listeners, with a possible packet change, or NULL.
  */
  onPacketReceiving(injector: Injector, packet: any, marker: NetworkMarker): PacketEvent;
  /**
   * Determine if there is a packet listener for the given packet.
   * @param packetClass - the packet class to check.
   * @return TRUE if there is such a listener, FALSE otherwise.
  */
  hasListener(packetClass: Class<any>): boolean;
  /**
   * Determine if there is a server packet listener that must be executed on the main thread.
   * @param packetClass - the packet class to check.
   * @return TRUE if there is, FALSE otherwise.
  */
  hasMainThreadListener(packetClass: Class<any>): boolean;
  /**
   * Determine if we need the buffer data of a given client side packet.
   * @param packetClass - the packet class.
   * @return TRUE if we do, FALSE otherwise.
  */
  includeBuffer(packetClass: Class<any>): boolean;
  /**
   * Retrieve the current error reporter.
   * @return The error reporter.
  */
  getReporter(): ErrorReporter;
  /**
   * Determine if debug mode is enabled.
   * @return TRUE if it is, FALSE otherwise.
  */
  isDebug(): boolean;
}
/**
 * Construct a ByteBuf around an input stream and an output stream.
 * 
 * Note that as streams usually don't support seeking, this implementation will ignore
 * all indexing in the byte buffer.
 * @author Kristian
*/
export class NettyByteBufAdapter extends AbstractByteBuf {
  /**
   * Construct a new Minecraft packet serializer using the current byte buf adapter.
   * @param input - the input stream.
   * @return A packet serializer with a wrapped byte buf adapter.
  */
  static packetReader(input: DataInputStream): ByteBuf;
  /**
   * Construct a new Minecraft packet deserializer using the current byte buf adapter.
   * @param output - the output stream.
   * @return A packet serializer with a wrapped byte buf adapter.
  */
  static packetWriter(output: DataOutputStream): ByteBuf;
  refCnt(): number;
  release(): boolean;
  release(paramInt: number): boolean;
  capacity(): number;
  capacity(paramInt: number): ByteBuf;
  alloc(): ByteBufAllocator;
  order(): ByteOrder;
  unwrap(): ByteBuf;
  isDirect(): boolean;
  getBytes(index: number, dst: ByteBuf, dstIndex: number, length: number): ByteBuf;
  getBytes(index: number, dst: number[], dstIndex: number, length: number): ByteBuf;
  getBytes(index: number, dst: ByteBuffer): ByteBuf;
  getBytes(index: number, dst: OutputStream, length: number): ByteBuf;
  getBytes(index: number, out: GatheringByteChannel, length: number): number;
  setBytes(index: number, src: ByteBuf, srcIndex: number, length: number): ByteBuf;
  setBytes(index: number, src: number[], srcIndex: number, length: number): ByteBuf;
  setBytes(index: number, src: ByteBuffer): ByteBuf;
  setBytes(index: number, in_: InputStream, length: number): number;
  setBytes(index: number, in_: ScatteringByteChannel, length: number): number;
  copy(index: number, length: number): ByteBuf;
  nioBufferCount(): number;
  nioBuffer(paramInt1: number, paramInt2: number): ByteBuffer;
  internalNioBuffer(paramInt1: number, paramInt2: number): ByteBuffer;
  nioBuffers(paramInt1: number, paramInt2: number): ByteBuffer[];
  hasArray(): boolean;
  array(): number[];
  arrayOffset(): number;
  hasMemoryAddress(): boolean;
  memoryAddress(): number;
  retain(paramInt: number): ByteBuf;
  retain(): ByteBuf;
  getBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
  setBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
  touch(): ByteBuf;
  touch(arg0: any): ByteBuf;
}
/**
 * Represents an injector factory.
 * 
 * Note that the factory will return {@link ClosedInjector} when the factory is closed.
 * @author Kristian
*/
export class InjectionFactory {
  /**
   * Construct a new channel injector for the given channel.
   * @param channel - the channel.
   * @param listener - the listener.
   * @param playerFactory - a temporary player creator.
   * @return The channel injector, or a closed injector.
  */
  fromChannel(channel: Channel, listener: ChannelListener, playerFactory: TemporaryPlayerFactory): Injector;
  /**
   * Cache an injector by name alone.
   * @param name - the name to lookup.
   * @param injector - the injector.
   * @return The cached injector.
  */
  cacheInjector(name: string, injector: Injector): Injector;
  /**
   * Determine if the factory is closed.
   * 
   * If it is, all new injectors will be closed by default.
   * @return TRUE if it is closed, FALSE otherwise.
  */
  isClosed(): boolean;
  /**
   * Close all injectors created by this factory, and cease the creation of new injections.
  */
  close(): void;
}
/**
 * A pipeline proxy.
 * @author Kristian
*/
export class PipelineProxy extends ChannelPipeline {
  constructor(pipeline: ChannelPipeline, channel: Channel);
  addAfter(arg0: EventExecutorGroup, arg1: string, arg2: string, arg3: ChannelHandler): ChannelPipeline;
  addAfter(arg0: string, arg1: string, arg2: ChannelHandler): ChannelPipeline;
  addBefore(arg0: EventExecutorGroup, arg1: string, arg2: string, arg3: ChannelHandler): ChannelPipeline;
  addBefore(arg0: string, arg1: string, arg2: ChannelHandler): ChannelPipeline;
  addFirst(...arg0: ChannelHandler[]): ChannelPipeline;
  addFirst(arg0: EventExecutorGroup, ...arg1: ChannelHandler[]): ChannelPipeline;
  addFirst(arg0: EventExecutorGroup, arg1: string, arg2: ChannelHandler): ChannelPipeline;
  addFirst(arg0: string, arg1: ChannelHandler): ChannelPipeline;
  addLast(...arg0: ChannelHandler[]): ChannelPipeline;
  addLast(arg0: EventExecutorGroup, ...arg1: ChannelHandler[]): ChannelPipeline;
  addLast(arg0: EventExecutorGroup, arg1: string, arg2: ChannelHandler): ChannelPipeline;
  addLast(arg0: string, arg1: ChannelHandler): ChannelPipeline;
  bind(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
  bind(arg0: SocketAddress): ChannelFuture;
  channel(): Channel;
  close(): ChannelFuture;
  close(arg0: ChannelPromise): ChannelFuture;
  connect(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
  connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): ChannelFuture;
  connect(arg0: SocketAddress, arg1: SocketAddress): ChannelFuture;
  connect(arg0: SocketAddress): ChannelFuture;
  context(arg0: ChannelHandler): ChannelHandlerContext;
  context(arg0: Class<ChannelHandler>): ChannelHandlerContext;
  context(arg0: string): ChannelHandlerContext;
  deregister(): ChannelFuture;
  deregister(arg0: ChannelPromise): ChannelFuture;
  fireChannelUnregistered(): ChannelPipeline;
  disconnect(): ChannelFuture;
  disconnect(arg0: ChannelPromise): ChannelFuture;
  fireChannelActive(): ChannelPipeline;
  fireChannelInactive(): ChannelPipeline;
  fireChannelRead(arg0: any): ChannelPipeline;
  fireChannelReadComplete(): ChannelPipeline;
  fireChannelRegistered(): ChannelPipeline;
  fireChannelWritabilityChanged(): ChannelPipeline;
  fireExceptionCaught(arg0: Throwable): ChannelPipeline;
  fireUserEventTriggered(arg0: any): ChannelPipeline;
  first(): ChannelHandler;
  firstContext(): ChannelHandlerContext;
  flush(): ChannelPipeline;
  get<T>(arg0: Class<T>): T;
  get(arg0: string): ChannelHandler;
  iterator(): Iterator<Entry<string, ChannelHandler>>;
  last(): ChannelHandler;
  lastContext(): ChannelHandlerContext;
  names(): string[];
  read(): ChannelPipeline;
  remove(arg0: ChannelHandler): ChannelPipeline;
  remove<T>(arg0: Class<T>): T;
  remove(arg0: string): ChannelHandler;
  removeFirst(): ChannelHandler;
  removeLast(): ChannelHandler;
  replace(arg0: ChannelHandler, arg1: string, arg2: ChannelHandler): ChannelPipeline;
  replace<T>(arg0: Class<T>, arg1: string, arg2: ChannelHandler): T;
  replace(arg0: string, arg1: string, arg2: ChannelHandler): ChannelHandler;
  toMap(): Map<string, ChannelHandler>;
  write(arg0: any, arg1: ChannelPromise): ChannelFuture;
  write(arg0: any): ChannelFuture;
  writeAndFlush(arg0: any, arg1: ChannelPromise): ChannelFuture;
  writeAndFlush(arg0: any): ChannelFuture;
}
/**
 * A packet represented only by its id and bytes.
 * @author dmulloy2
*/
export class WirePacket {
  /**
   * Constructs a new WirePacket with a given type and contents
   * @param type Type of the packet
   * @param bytes Contents of the packet
  */
  constructor(type: PacketType, bytes: number[]);
  /**
   * Constructs a new WirePacket with a given id and contents
   * @param id ID of the packet
   * @param bytes Contents of the packet
  */
  constructor(id: number, bytes: number[]);
  /**
   * Gets this packet's ID
   * @return The ID
  */
  getId(): number;
  /**
   * Gets this packet's contents as a byte array
   * @return The contents
  */
  getBytes(): number[];
  /**
   * Writes the id of this packet to a given output
   * @param output Output to write to
  */
  writeId(output: ByteBuf): void;
  /**
   * Writes the contents of this packet to a given output
   * @param output Output to write to
  */
  writeBytes(output: ByteBuf): void;
  /**
   * Fully writes the ID and contents of this packet to a given output
   * @param output Output to write to
  */
  writeFully(output: ByteBuf): void;
  /**
   * Serializes this packet into a byte buffer
   * @return The buffer
  */
  serialize(): ByteBuf;
  equals(obj: any): boolean;
  hashCode(): number;
  toString(): string;
  /**
   * Creates a WirePacket from an existing PacketContainer
   * @param packet Existing packet
   * @return The resulting WirePacket
  */
  static fromPacket(packet: PacketContainer): WirePacket;
  /**
   * Creates a byte array from an existing PacketContainer containing all the
   * bytes from that packet
   * 
   * @param packet Existing packet
   * @return the byte array
  */
  static bytesFromPacket(packet: PacketContainer): number[];
  /**
   * Creates a WirePacket from an existing Minecraft packet
   * @param packet Existing Minecraft packet
   * @return The resulting WirePacket
   * @throws IllegalArgumentException If the packet is null or not a Minecraft packet
  */
  static fromPacket(packet: any): WirePacket;
  static writeVarInt(output: ByteBuf, i: number): void;
  static readVarInt(input: ByteBuf): number;
}
export class AbstractPlayerHandler extends PlayerInjectionHandler {
  constructor(sendingFilters: PacketTypeSet);
  /**
   * Sets how the server packets are read.
   * @param phase - the current game phase.
   * @param playerHook - the new injection method for reading server packets.
  */
  setPlayerHook(phase: GamePhase, playerHook: PlayerInjectHooks): void;
  /**
   * Sets how the server packets are read.
   * @param playerHook - the new injection method for reading server packets.
  */
  setPlayerHook(playerHook: PlayerInjectHooks);
  /**
   * Add an underlying packet handler of the given type.
   * @param type - packet type to register.
   * @param options - any specified listener options.
  */
  addPacketHandler(type: PacketType, options: Set<ListenerOptions>): void;
  /**
   * Remove an underlying packet handler of this type.
   * @param type - packet type to unregister.
  */
  removePacketHandler(type: PacketType): void;
  /**
   * Retrieve the current list of registered sending listeners.
   * @return List of the sending listeners's packet IDs.
  */
  getSendingFilters(): Set<PacketType>;
  /**
   * Close any lingering proxy injections.
  */
  close(): void;
  /**
   * Retrieves how the server packets are read.
   * @param phase - the current game phase.
   * @return Injection method for reading server packets.
  */
  getPlayerHook(phase: GamePhase): PlayerInjectHooks;
  /**
   * Whether or not this player injection handler can also receive packets.
   * @return TRUE if it can, FALSE otherwise.
  */
  canRecievePackets(): boolean;
  /**
   * Retrieves how the server packets are read.
   * @return Injection method for reading server packets.
  */
  getPlayerHook(): PlayerInjectHooks;
  /**
   * Determine if the given listeners are valid.
   * @param listeners - listeners to check.
  */
  checkListener(listener: PacketListener): void;
  /**
   * Determine if the given listeners are valid.
   * @param listeners - listeners to check.
  */
  checkListener(listeners: Set<PacketListener>): void;
}
export class NettyNetworkMarker extends NetworkMarker {
  constructor(side: ConnectionSide, inputBuffer: number[]);
  constructor(side: ConnectionSide, inputBuffer: ByteBuffer);
}
/**
 * Represents a closed injector.
 * @author Kristian
*/
export class ClosedInjector extends Injector {
  /**
   * Inject the current channel.
   * 
   * Note that only active channels can be injected.
   * @return TRUE if we injected the channel, false if we could not inject or it was already injected.
  */
  inject(): boolean;
  /**
   * Close the current injector.
  */
  close(): void;
  /**
   * Send a packet to a player's client.
   * @param packet - the packet to send.
   * @param marker - the network marker.
   * @param filtered - whether or not the packet is filtered.
  */
  sendServerPacket(packet: any, marker: NetworkMarker, filtered: boolean): void;
  /**
   * Recieve a packet on the server.
   * @param packet - the (NMS) packet to send.
  */
  recieveClientPacket(packet: any): void;
  /**
   * Retrieve the current protocol state.
   * @return The current protocol.
  */
  getCurrentProtocol(): Protocol;
  /**
   * Retrieve the network marker associated with a given packet.
   * @param packet - the packet.
   * @return The network marker.
  */
  getMarker(packet: any): NetworkMarker;
  /**
   * Associate a given network marker with a specific packet.
   * @param packet - the NMS packet.
   * @param marker - the associated marker.
  */
  saveMarker(packet: any, marker: NetworkMarker): void;
  /**
   * Determine if the channel has already been injected.
   * @return TRUE if it has, FALSE otherwise.
  */
  isInjected(): boolean;
  /**
   * Determine if this channel has been closed and cleaned up.
   * @return TRUE if it has, FALSE otherwise.
  */
  isClosed(): boolean;
  /**
   * Retrieve the current protocol version of the player.
   * @return Protocol version.
  */
  getProtocolVersion(): number;
}
export class BootstrapList extends any[] {
  /**
   * Construct a new bootstrap list.
   * @param delegate - the delegate.
   * @param handler - the channel handler to add.
  */
  constructor(delegate: any[], handler: ChannelHandler);
  add(element: any): boolean;
  addAll(collection: Collection<any>): boolean;
  set(index: number, element: any): any;
  /**
   * Close and revert all changes.
  */
  close(): void;
  size(): number;
  isEmpty(): boolean;
  contains(o: any): boolean;
  iterator(): Iterator<any>;
  toArray(): any[];
  toArray<T>(a: T[]): T[];
  remove(o: any): boolean;
  containsAll(c: Collection<any>): boolean;
  addAll(index: number, c: Collection<any>): boolean;
  removeAll(c: Collection<any>): boolean;
  retainAll(c: Collection<any>): boolean;
  clear(): void;
  get(index: number): any;
  add(index: number, element: any): void;
  remove(index: number): any;
  indexOf(o: any): number;
  lastIndexOf(o: any): number;
  listIterator(): ListIterator<any>;
  listIterator(index: number): ListIterator<any>;
  subList(fromIndex: number, toIndex: number): any[];
}
export class SocketAdapter extends Socket {
  static adapt(ch: Channel): SocketAdapter;
  bind(bindpoint: SocketAddress): void;
  close(): void;
  connect(endpoint: SocketAddress): void;
  connect(endpoint: SocketAddress, timeout: number): void;
  equals(obj: any): boolean;
  getChannel(): java_nio_channels_SocketChannel;
  getInetAddress(): InetAddress;
  getInputStream(): InputStream;
  getKeepAlive(): boolean;
  getLocalAddress(): InetAddress;
  getLocalPort(): number;
  getLocalSocketAddress(): SocketAddress;
  getOOBInline(): boolean;
  getOutputStream(): OutputStream;
  getPort(): number;
  getReceiveBufferSize(): number;
  getRemoteSocketAddress(): SocketAddress;
  getReuseAddress(): boolean;
  getSendBufferSize(): number;
  getSoLinger(): number;
  getSoTimeout(): number;
  getTcpNoDelay(): boolean;
  getTrafficClass(): number;
  hashCode(): number;
  isBound(): boolean;
  isClosed(): boolean;
  isConnected(): boolean;
  isInputShutdown(): boolean;
  isOutputShutdown(): boolean;
  sendUrgentData(data: number): void;
  setKeepAlive(on: boolean): void;
  setOOBInline(on: boolean): void;
  setPerformancePreferences(connectionTime: number, latency: number, bandwidth: number): void;
  setReceiveBufferSize(receiveBufferSize: number);
  setReuseAddress(on: boolean): void;
  setSendBufferSize(sendBufferSize: number);
  setSoLinger(on: boolean, linger: number): void;
  setSoTimeout(soTimeout: number);
  setTcpNoDelay(on: boolean): void;
  setTrafficClass(trafficClass: number);
  shutdownInput(): void;
  shutdownOutput(): void;
  toString(): string;
}
export class AbstractPacketInjector extends PacketInjector {
  constructor(reveivedFilters: PacketTypeSet);
  /**
   * Determine if a packet is cancelled or not.
   * @param packet - the packet to check.
   * @return TRUE if it is, FALSE otherwise.
  */
  isCancelled(packet: any): boolean;
  /**
   * Set whether or not a packet is cancelled.
   * @param packet - the packet to set.
   * @param cancelled - TRUE to cancel the packet, FALSE otherwise.
  */
  setCancelled(packet: any, cancelled: boolean): void;
  /**
   * Start intercepting packets with the given packet type.
   * @param type - the type of the packets to start intercepting.
   * @param options - any listener options.
   * @return TRUE if we didn't already intercept these packets, FALSE otherwise.
  */
  addPacketHandler(type: PacketType, options: Set<ListenerOptions>): boolean;
  /**
   * Stop intercepting packets with the given packet type.
   * @param type - the type of the packets to stop intercepting.
   * @return TRUE if we successfuly stopped intercepting a given packet ID, FALSE otherwise.
  */
  removePacketHandler(type: PacketType): boolean;
  /**
   * Determine if packets with the given packet type is being intercepted.
   * @param type - the packet type to lookup.
   * @return TRUE if we do, FALSE otherwise.
  */
  hasPacketHandler(type: PacketType): boolean;
  /**
   * Retrieve every intercepted packet type.
   * @return Every intercepted packet type.
  */
  getPacketHandlers(): Set<PacketType>;
  /**
   * Perform any necessary cleanup before unloading ProtocolLib.
  */
  cleanupAll(): void;
}
/**
 * Stores packets that need to be sent without being handled by the listeners (filtered=false).
 * When other packets sent after sending the packet are removed, the packet is removed as well
 * to prevent a memory leak, assuming a consistent send order is in place.
 * 
 * @author bergerkiller
*/
export class PacketFilterQueue {
  /**
   * Adds a packet to this queue, indicating further on that it should not be filtered.
   * 
   * @param packet
  */
  add(packet: any): void;
  /**
   * Checks whether a packet is contained inside this queue, indicating
   * it should not be filtered.
   * 
   * @param packet
   * @return True if contained and packet should not be filtered (filtered=false)
  */
  contains(packet: any): boolean;
  /**
   * Checks whether a packet is contained inside this queue and removes it if so.
   * Other packets marked in this queue that were sent before this packet are
   * removed from the queue also, avoiding memory leaks because of dropped packets.
   * 
   * @param packet
   * @return True if contained and packet should not be filtered (filtered=false)
  */
  remove(packet: any): boolean;
}
export class ProtocolInjector extends ChannelListener {
  static readonly REPORT_CANNOT_INJECT_INCOMING_CHANNEL: ReportType;
  /**
   * Determine if debug mode is enabled.
   * @return TRUE if it is, FALSE otherwise.
  */
  isDebug(): boolean;
  /**
   * Set whether or not the debug mode is enabled.
   * @param debug - TRUE if it is, FALSE otherwise.
  */
  setDebug(debug: boolean): void;
  /**
   * Inject into the spigot connection class.
  */
  inject(): void;
  /**
   * Determine if there is a packet listener for the given packet.
   * @param packetClass - the packet class to check.
   * @return TRUE if there is such a listener, FALSE otherwise.
  */
  hasListener(packetClass: Class<any>): boolean;
  /**
   * Determine if there is a server packet listener that must be executed on the main thread.
   * @param packetClass - the packet class to check.
   * @return TRUE if there is, FALSE otherwise.
  */
  hasMainThreadListener(packetClass: Class<any>): boolean;
  /**
   * Retrieve the current error reporter.
   * @return The error reporter.
  */
  getReporter(): ErrorReporter;
  /**
   * Clean up any remaning injections.
  */
  close(): void;
  /**
   * Invoked when a packet is being sent to the client.
   * 
   * This is invoked on the main thread.
   * @param injector - the channel injector.
   * @param packet - the packet.
   * @param marker - the network marker.
   * @return The packet even that was passed to the listeners, with a possible packet change, or NULL.
  */
  onPacketSending(injector: Injector, packet: any, marker: NetworkMarker): PacketEvent;
  /**
   * Invoked when a packet is being received from a client.
   * 
   * This is invoked on an asynchronous worker thread.
   * @param injector - the channel injector.
   * @param packet - the packet.
   * @param marker - the associated network marker, if any.
   * @return The packet even that was passed to the listeners, with a possible packet change, or NULL.
  */
  onPacketReceiving(injector: Injector, packet: any, marker: NetworkMarker): PacketEvent;
  /**
   * Determine if we need the buffer data of a given client side packet.
   * @param packetClass - the packet class.
   * @return TRUE if we do, FALSE otherwise.
  */
  includeBuffer(packetClass: Class<any>): boolean;
  getPlayerInjector(): PlayerInjectionHandler;
  getPacketInjector(): PacketInjector;
}

}
declare module 'com.comphenix.protocol.events' {
import { Method } from 'java.lang.reflect';
import { ByteBuf } from 'io.netty.buffer';
import { Set, Optional, Collection, List, PriorityQueue, UUID, Vector, Map } from 'java.util';
import { ConcurrentMap } from 'java.util.concurrent';
import { GamePhase } from 'com.comphenix.protocol.injector';
import { NbtBase } from 'com.comphenix.protocol.wrappers.nbt';
import { PlayerInfoAction, SoundCategory, CombatEventType, Difficulty, PlayerAction, Direction, Hand, NativeGameMode, Particle, ScoreboardAction, ClientCommand, WorldBorderAction, PlayerDigType, ChatVisibility, ChatType, ResourcePackStatus, EntityUseAction, ItemSlot, TitleAction } from 'com.comphenix.protocol.wrappers.EnumWrappers';
import { ByteBuffer } from 'java.nio';
import { EquivalentConverter, StructureModifier } from 'com.comphenix.protocol.reflect';
import { Sender, Protocol } from 'com.comphenix.protocol.PacketType';
import { PacketType, PacketStream } from 'com.comphenix.protocol';
import { StreamSerializer } from 'com.comphenix.protocol.utility';
import { AggregateCloner } from 'com.comphenix.protocol.reflect.cloning';
import { Enum, Class } from 'java.lang';
import { Serializable, DataInputStream } from 'java.io';
import { AdapterParameteters } from 'com.comphenix.protocol.events.PacketAdapter';
import { Builder } from 'com.comphenix.protocol.events.ListeningWhitelist';
import { WrappedStatistic, WrappedBlockData, WrappedChatComponent, ChunkCoordIntPair, PlayerInfoData, ChunkPosition, WrappedParticle, BlockPosition, MultiBlockChangeInfo, MinecraftKey, WrappedServerPing, MovingObjectPositionBlock, WrappedGameProfile, WrappedEnumEntityUseAction, WrappedAttribute, WrappedWatchableObject, WrappedDataWatcher } from 'com.comphenix.protocol.wrappers';
/**
 * Represents a listener that receives notifications when packets are sending or being received.
 * 
 * Use {@link PacketAdapter} for a simple wrapper around this interface.
 * @author Kristian
*/
export class PacketListener {
  /**
   * Invoked right before a packet is transmitted from the server to the client.
   * 
   * Note that the packet may be replaced, if needed.
   * 
   * This method is executed on the main thread in 1.6.4 and earlier, and thus the Bukkit API is safe to use.
   * 
   * In Minecraft 1.7.2 and later, this method MAY be executed asynchronously, but only if {@link ListenerOptions#ASYNC}
   * have been specified in the listener. This is off by default.
   * @param event - the packet that should be sent.
  */
  onPacketSending(event: PacketEvent): void;
  /**
   * Invoked right before a received packet from a client is being processed.
   * 
   * WARNING: 
   * This method will be called asynchronously! You should synchronize with the main
   * thread using {@link org.bukkit.scheduler.BukkitScheduler#scheduleSyncDelayedTask(Plugin, Runnable, long) scheduleSyncDelayedTask}
   * if you need to call the Bukkit API.
   * @param event - the packet that has been received.
  */
  onPacketReceiving(event: PacketEvent): void;
  /**
   * Retrieve which packets sent by the server this listener will observe.
   * @return List of server packets to observe, along with the priority.
  */
  getSendingWhitelist(): ListeningWhitelist;
  /**
   * Retrieve which packets sent by the client this listener will observe.
   * @return List of server packets to observe, along with the priority.
  */
  getReceivingWhitelist(): ListeningWhitelist;
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
/**
 * Represents a Minecraft packet indirectly.
 * 
 * @author Kristian
*/
export class PacketContainer extends AbstractStructure {
  /**
   * Creates a packet container for a new packet.
   * @param type - the type of the packet to create.
  */
  constructor(type: PacketType);
  /**
   * Creates a packet container for an existing packet.
   * @param type - Type of the given packet.
   * @param handle - contained packet.
  */
  constructor(type: PacketType, handle: any);
  /**
   * Creates a packet container for an existing packet.
   * @param type - Type of the given packet.
   * @param handle - contained packet.
   * @param structure - structure modifier.
  */
  constructor(type: PacketType, handle: any, structure: StructureModifier<any>);
  /**
   * Construct a new packet container from a given handle.
   * @param packet - the NMS packet.
   * @return The packet container.
  */
  static fromPacket(packet: any): PacketContainer;
  /**
   * Retrieves the underlying Minecraft packet.
   * @return Underlying Minecraft packet.
  */
  getHandle(): any;
  /**
   * Retrieves the generic structure modifier for this packet.
   * @return Structure modifier.
  */
  getModifier(): StructureModifier<any>;
  getStructures(): StructureModifier<InternalStructure>;
  getOptionalStructures(): StructureModifier<Optional<InternalStructure>>;
  /**
   * @deprecated Packet IDs are unreliable
  */
  getId(): number;
  /**
   * Retrieve the packet type of this packet.
   * @return The packet type.
  */
  getType(): PacketType;
  /**
   * Create a shallow copy of the current packet.
   * 
   * This merely writes the content of each field to the new class directly,
   * without performing any expensive copies.
   * 
   * @return A shallow copy of the current packet.
  */
  shallowClone(): PacketContainer;
  /**
   * Create a deep copy of the current packet.
   * 
   * This will perform a full copy of the entire object tree, only skipping
   * known immutable objects and primitive types.
   * 
   * Note that the inflated buffers in packet 51 and 56 will be copied directly to save memory.
   * 
   * @return A deep copy of the current packet.
  */
  deepClone(): PacketContainer;
  /**
   * Construct a new packet data serializer.
   * @return The packet data serializer.
  */
  static createPacketBuffer(): ByteBuf;
  /**
   * Gets the metadata value for a given key if it exists. Packet metadata expires after a minute, which is far longer
   * than a packet will ever be held in processing.
   *
   * @param key Metadata key
   * @param  Metadata type
   * @return The metadata value, or an empty optional
  */
  getMeta<T>(key: string): Optional<T>;
  /**
   * Sets the metadata value at a given key. Packet metadata expires after a minute, which is far longer than a packet
   * will ever be held in processing.
   *
   * @param key Metadata key
   * @param value Metadata value
   * @param  Metadata type
  */
  setMeta<T>(key: string, value: T): void;
  /**
   * Removes the metadata for a given key if it exists.
   * @param key Key to remove meta for
  */
  removeMeta(key: string): void;
  toString(): string;
}
export interface PacketContainer extends AbstractStructure, Serializable {}
/**
 * Represents a packet that is scheduled for transmission at a later stage.
 * @author Kristian
*/
export class ScheduledPacket {
  /**
   * Retrieve the packet that will be sent or transmitted.
   * @return The sent or received packet.
  */
  getPacket(): PacketContainer;
  /**
   * Set the packet that will be sent or transmitted.
   * @param packet - the new packet, cannot be NULL.
  */
  setPacket(packet: PacketContainer);
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
   * Retrieve the sender of this packet.
   * @return The sender.
  */
  getSender(): Sender;
  /**
   * Schedule the packet transmission or reception.
  */
  schedule(): void;
  /**
   * Schedule the packet transmission or reception.
   * @param stream - the packet stream.
  */
  schedule(stream: PacketStream): void;
  toString(): string;
}
export class InternalStructure extends AbstractStructure {
  getStructures(): StructureModifier<InternalStructure>;
  getOptionalStructures(): StructureModifier<Optional<InternalStructure>>;
  toString(): string;
}
/**
 * Represents an adapter version of a post listener.
 * @author Kristian
*/
export class PacketPostAdapter extends PacketPostListener {

}
/**
 * Represents an adapter version of the output handler interface.
 * @author Kristian
*/
export class PacketOutputAdapter extends PacketOutputHandler {
  /**
   * Retrieve the priority that decides the order each network handler is allowed to manipulate the output buffer.
   * 
   * Higher priority is executed before lower.
   * @return The handler priority.
  */
  getPriority(): ListenerPriority;
}
/**
 * Represents a packet listener with useful constructors.
 * 
 * Remember to override onPacketReceiving() and onPacketSending(), depending on the ConnectionSide.
 * @author Kristian
*/
export class PacketAdapter extends PacketListener {
  /**
   * Initialize a packet adapter using a collection of parameters. Use {@link #params()} to get an instance to this builder.
   * @param params - the parameters.
  */
  constructor(params: AdapterParameteters);
  /**
   * Invoked right before a received packet from a client is being processed.
   * 
   * WARNING: 
   * This method will be called asynchronously! You should synchronize with the main
   * thread using {@link org.bukkit.scheduler.BukkitScheduler#scheduleSyncDelayedTask(Plugin, Runnable, long) scheduleSyncDelayedTask}
   * if you need to call the Bukkit API.
   * @param event - the packet that has been received.
  */
  onPacketReceiving(event: PacketEvent): void;
  /**
   * Invoked right before a packet is transmitted from the server to the client.
   * 
   * Note that the packet may be replaced, if needed.
   * 
   * This method is executed on the main thread in 1.6.4 and earlier, and thus the Bukkit API is safe to use.
   * 
   * In Minecraft 1.7.2 and later, this method MAY be executed asynchronously, but only if {@link ListenerOptions#ASYNC}
   * have been specified in the listener. This is off by default.
   * @param event - the packet that should be sent.
  */
  onPacketSending(event: PacketEvent): void;
  /**
   * Retrieve which packets sent by the client this listener will observe.
   * @return List of server packets to observe, along with the priority.
  */
  getReceivingWhitelist(): ListeningWhitelist;
  /**
   * Retrieve which packets sent by the server this listener will observe.
   * @return List of server packets to observe, along with the priority.
  */
  getSendingWhitelist(): ListeningWhitelist;
  /**
   * Retrieves the name of the plugin that has been associated with the listener.
   * @param listener - the listener.
   * @return Name of the associated plugin.
  */
  static getPluginName(listener: PacketListener): string;
  toString(): string;
  /**
   * Construct a helper object for passing parameters to the packet adapter.
   * 
   * This is often simpler and better than passing them directly to each constructor.
   * @return Helper object.
  */
  static params(): AdapterParameteters;
}
/**
 * Represents additional options a listener may require.
 * 
 * @author Kristian
*/
export class ListenerOptions extends Enum<ListenerOptions> {
  /**
   * Retrieve the serialized client packet as it appears on the network stream.
  */
  static readonly INTERCEPT_INPUT_BUFFER: ListenerOptions;
  /**
   * Disable the automatic game phase detection that will normally force {@link GamePhase#LOGIN} when
   * a packet ID is known to be transmitted during login.
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
  /**
   * Retrieve the priority that decides the order each network handler is allowed to manipulate the output buffer.
   * 
   * Higher priority is executed before lower.
   * @return The handler priority.
  */
  getPriority(): ListenerPriority;
  /**
   * Invoked when a given packet is to be written to the output stream.
   * 
   * Note that the buffer is initially filled with the output from the default write method.
   * 
   * In Minecraft 1.6.4, the header is always excluded, whereas it MUST be included in Minecraft 1.7.2. Call 
   * {@link NetworkMarker#requireOutputHeader()} to determine this.
   * @param event - the packet that will be outputted.
   * @param buffer - the data that is currently scheduled to be outputted.
   * @return The modified byte array to write. NULL is not permitted.
  */
  handle(event: PacketEvent, buffer: number[]): number[];
}
/**
 * Represents a listener that is notified of every sent and received packet.
 * 
 * @author Kristian
*/
export class MonitorAdapter extends PacketListener {
  /**
   * Retrieve which packets sent by the server this listener will observe.
   * @return List of server packets to observe, along with the priority.
  */
  getSendingWhitelist(): ListeningWhitelist;
  /**
   * Retrieve which packets sent by the client this listener will observe.
   * @return List of server packets to observe, along with the priority.
  */
  getReceivingWhitelist(): ListeningWhitelist;
}
/**
 * Marker containing the serialized packet data seen from the network,
 * or output handlers that will serialize the current packet.
 * 
 * @author Kristian
*/
export class NetworkMarker {
  /**
   * Construct a new network marker.
   * @param side - which side this marker belongs to.
   * @param inputBuffer - the read serialized packet data.
   * @param type - packet type
  */
  constructor(side: ConnectionSide, inputBuffer: ByteBuffer, type: PacketType);
  /**
   * Construct a new network marker.
   * 
   * The input buffer is only non-null for client-side packets.
   * @param side - which side this marker belongs to.
   * @param inputBuffer - the read serialized packet data.
   * @param type - packet type
  */
  constructor(side: ConnectionSide, inputBuffer: number[], type: PacketType);
  /**
   * Retrieve whether or not this marker belongs to a client or a server side packet.
   * @return The side the parent packet belongs to.
  */
  getSide(): ConnectionSide;
  /**
   * Retrieve a utility class for serializing and deserializing Minecraft objects.
   * @return Serialization utility class.
  */
  getSerializer(): StreamSerializer;
  /**
   * Retrieve the serialized packet data (excluding the header by default) from the network input stream.
   * 
   * The returned buffer is read-only. If the parent event is a server side packet this
   * method throws {@link IllegalStateException}.
   * 
   * It returns NULL if the packet was transmitted by a plugin locally.
   * @return A byte buffer containing the raw packet data read from the network.
  */
  getInputBuffer(): ByteBuffer;
  /**
   * Retrieve the serialized packet data from the network input stream.
   * 
   * The returned buffer is read-only. If the parent event is a server side packet this
   * method throws {@link IllegalStateException}.
   * 
   * It returns NULL if the packet was transmitted by a plugin locally.
   * @param excludeHeader - whether or not to exclude the packet ID header.
   * @return A byte buffer containing the raw packet data read from the network.
  */
  getInputBuffer(excludeHeader: boolean): ByteBuffer;
  /**
   * Retrieve the serialized packet data (excluding the header by default) as an input stream.
   * 
   * The data is exactly the same as in {@link #getInputBuffer()}.
   * @see #getInputBuffer()
   * @return The incoming serialized packet data as a stream, or NULL if the packet was transmitted locally.
  */
  getInputStream(): DataInputStream;
  /**
   * Retrieve the serialized packet data as an input stream.
   * 
   * The data is exactly the same as in {@link #getInputBuffer()}.
   * @see #getInputBuffer()
   * @param excludeHeader - whether or not to exclude the packet ID header.
   * @return The incoming serialized packet data as a stream, or NULL if the packet was transmitted locally.
  */
  getInputStream(excludeHeader: boolean): DataInputStream;
  /**
   * Whether or not the output handlers have to write a packet header.
   * @return TRUE if they do, FALSE otherwise.
  */
  requireOutputHeader(): boolean;
  /**
   * Enqueue the given output handler for managing how the current packet will be written to the network stream.
   * 
   * Note that output handlers are not serialized, as most consumers will probably implement them using anonymous classes.
   * It is not safe to serialize anonymous classes, as their name depend on the order in which they are declared in the parent class.
   * 
   * This can only be invoked on server side packet events.
   * @param handler - the handler that will take part in serializing the packet.
   * @return TRUE if it was added, FALSE if it has already been added.
  */
  addOutputHandler(handler: PacketOutputHandler): boolean;
  /**
   * Remove a given output handler from the serialization queue.
   * 
   * This can only be invoked on server side packet events.
   * @param handler - the handler to remove.
   * @return TRUE if the handler was removed, FALSE otherwise.
  */
  removeOutputHandler(handler: PacketOutputHandler): boolean;
  /**
   * Retrieve every registered output handler in no particular order.
   * @return Every registered output handler.
  */
  getOutputHandlers(): Collection<PacketOutputHandler>;
  /**
   * Add a listener that is invoked after a packet has been successfully sent to the client, or received
   * by the server.
   * 
   * Received packets are not guarenteed to have been fully processed, but packets passed
   * to {@link ProtocolManager#recieveClientPacket(Player, PacketContainer)} will be processed after the
   * current packet event.
   * 
   * Note that post listeners will be executed asynchronously off the main thread. They are not executed
   * in any defined order.
   * @param listener - the listener that will be invoked.
   * @return TRUE if it was added.
  */
  addPostListener(listener: PacketPostListener): boolean;
  /**
   * Remove the first instance of the given listener.
   * @param listener - listener to remove.
   * @return TRUE if it was removed, FALSE otherwise.
  */
  removePostListener(listener: PacketPostListener): boolean;
  /**
   * Retrieve an immutable view of all the listeners that will be invoked once the packet has been sent or received.
   * @return Every post packet listener. Never NULL.
  */
  getPostListeners(): PacketPostListener[];
  /**
   * Retrieve a list of packets that will be schedule (in-order) when the current packet has been successfully transmitted.
   * 
   * This list is modifiable.
   * @return List of packets that will be scheduled.
  */
  getScheduledPackets(): ScheduledPacket[];
  /**
   * Determine if the given marker has any output handlers.
   * @param marker - the marker to check.
   * @return TRUE if it does, FALSE otherwise.
  */
  static hasOutputHandlers(marker: NetworkMarker): boolean;
  /**
   * Determine if the given marker has any post listeners.
   * @param marker - the marker to check.
   * @return TRUE if it does, FALSE otherwise.
  */
  static hasPostListeners(marker: NetworkMarker): boolean;
  /**
   * Retrieve the byte buffer stored in the given marker.
   * @param marker - the marker.
   * @return The byte buffer, or NULL if not found.
  */
  static getByteBuffer(marker: NetworkMarker): number[];
  /**
   * Retrieve the network marker of a particular event without creating it.
   * 
   * This is an internal method that should not be used by API users.
   * @param event - the event.
   * @return The network marker.
  */
  static getNetworkMarker(event: PacketEvent): NetworkMarker;
  /**
   * Retrieve the scheduled packets of a particular network marker without constructing the list.
   * 
   * This is an internal method that should not be used by API users.
   * @param marker - the marker.
   * @return The list, or NULL if not found or initialized.
  */
  static readScheduledPackets(marker: NetworkMarker): ScheduledPacket[];
}
export class AbstractStructure {
  getHandle(): any;
  getModifier(): StructureModifier<any>;
  /**
   * Retrieves a read/write structure for every field with the given type.
   * @param  Type
   * @param primitiveType - the type to find.
   * @return A modifier for this specific type.
  */
  getSpecificModifier<T>(primitiveType: Class<T>): StructureModifier<T>;
  /**
   * Retrieves a read/write structure for every byte field.
   * @return A modifier for every byte field.
  */
  getBytes(): StructureModifier<number>;
  /**
   * Retrieves a read/write structure for every boolean field.
   * @return A modifier for every boolean field.
  */
  getBooleans(): StructureModifier<boolean>;
  /**
   * Retrieves a read/write structure for every short field.
   * @return A modifier for every short field.
  */
  getShorts(): StructureModifier<number>;
  /**
   * Retrieves a read/write structure for every integer field.
   * @return A modifier for every integer field.
  */
  getIntegers(): StructureModifier<number>;
  /**
   * Retrieves a read/write structure for every long field.
   * @return A modifier for every long field.
  */
  getLongs(): StructureModifier<number>;
  /**
   * Retrieves a read/write structure for every float field.
   * @return A modifier for every float field.
  */
  getFloat(): StructureModifier<number>;
  /**
   * Retrieves a read/write structure for every double field.
   * @return A modifier for every double field.
  */
  getDoubles(): StructureModifier<number>;
  /**
   * Retrieves a read/write structure for every String field.
   * @return A modifier for every String field.
  */
  getStrings(): StructureModifier<string>;
  /**
   * Retrieves a read/write structure for every UUID field.
   * @return A modifier for every UUID field.
  */
  getUUIDs(): StructureModifier<UUID>;
  /**
   * Retrieves a read/write structure for every String array field.
   * @return A modifier for every String array field.
  */
  getStringArrays(): StructureModifier<string[]>;
  /**
   * Retrieves a read/write structure for every byte array field.
   * @return A modifier for every byte array field.
  */
  getByteArrays(): StructureModifier<number[]>;
  /**
   * Retrieve a serializer for reading and writing ItemStacks stored in a byte array.
   * @return A instance of the serializer.
  */
  getByteArraySerializer(): StreamSerializer;
  /**
   * Retrieves a read/write structure for every int array field.
   * @return A modifier for every int array field.
  */
  getIntegerArrays(): StructureModifier<number[]>;
  /**
   * Retrieves a read/write structure for every short array field.
   * @return A modifier for every short array field.
  */
  getShortArrays(): StructureModifier<number[]>;
  /**
   * Retrieve a read/write structure for maps of statistics.
   * 
   * Note that you must write back the changed map to persist it.
   * @return A modifier for maps of statistics.
  */
  getStatisticMaps(): StructureModifier<Map<WrappedStatistic, number>>;
  /**
   * Retrieves a read/write structure for data watchers.
   * @return A modifier for data watchers.
  */
  getDataWatcherModifier(): StructureModifier<WrappedDataWatcher>;
  /**
   * Retrieves a read/write structure for chunk positions.
   * @return A modifier for a ChunkPosition.
  */
  getPositionModifier(): StructureModifier<ChunkPosition>;
  /**
   * Retrieves a read/write structure for block positions.
   * @return A modifier for a BlockPosition.
  */
  getBlockPositionModifier(): StructureModifier<BlockPosition>;
  /**
   * Retrieves a read/write structure for wrapped ChunkCoordIntPairs.
   * @return A modifier for ChunkCoordIntPair.
  */
  getChunkCoordIntPairs(): StructureModifier<ChunkCoordIntPair>;
  /**
   * Retrieves a read/write structure for NBT classes.
   * @return A modifier for NBT classes.
  */
  getNbtModifier(): StructureModifier<NbtBase<any>>;
  /**
   * Retrieves a read/write structure for lists of NBT classes.
   * @return A modifier for lists of NBT classes.
  */
  getListNbtModifier(): StructureModifier<NbtBase<any>[]>;
  /**
   * Retrieves a read/write structure for Vectors.
   * @return A modifier for Vectors.
  */
  getVectors(): StructureModifier<Vector>;
  /**
   * Retrieves a read/write structure for collections of attribute snapshots.
   * 
   * This modifier will automatically marshal between the visible ProtocolLib WrappedAttribute and the
   * internal Minecraft AttributeSnapshot.
   * @return A modifier for AttributeSnapshot collection fields.
  */
  getAttributeCollectionModifier(): StructureModifier<WrappedAttribute[]>;
  /**
   * Retrieves a read/write structure for collections of chunk positions.
   * 
   * This modifier will automatically marshal between the visible ProtocolLib ChunkPosition and the
   * internal Minecraft ChunkPosition.
   *
   * @return A modifier for ChunkPosition list fields.
  */
  getPositionCollectionModifier(): StructureModifier<ChunkPosition[]>;
  /**
   * Retrieves a read/write structure for collections of chunk positions.
   * 
   * This modifier will automatically marshal between the visible ProtocolLib BlockPosition and the
   * internal Minecraft BlockPosition.
   *
   * @return A modifier for ChunkPosition list fields.
  */
  getBlockPositionCollectionModifier(): StructureModifier<BlockPosition[]>;
  /**
   * Retrieves a read/write structure for collections of watchable objects.
   * 
   * This modifier will automatically marshal between the visible WrappedWatchableObject and the
   * internal Minecraft WatchableObject.
   * @return A modifier for watchable object list fields.
  */
  getWatchableCollectionModifier(): StructureModifier<WrappedWatchableObject[]>;
  /**
   * Retrieves a read/write structure for game profiles in Minecraft 1.7.2.
   * 
   * This modifier will automatically marshal between WrappedGameProfile and the
   * internal Minecraft GameProfile.
   * @return A modifier for GameProfile fields.
  */
  getGameProfiles(): StructureModifier<WrappedGameProfile>;
  /**
   * Retrieves a read/write structure for BlockData in Minecraft 1.8.
   * 
   * This modifier will automatically marshal between WrappedBlockData and the
   * internal Minecraft IBlockData.
   * @return A modifier for BlockData fields.
  */
  getBlockData(): StructureModifier<WrappedBlockData>;
  /**
   * Retrieves a read/write structure for IBlockData arrays in Minecraft 1.16.2+
   * @return A modifier for IBlockData array fields
  */
  getBlockDataArrays(): StructureModifier<WrappedBlockData[]>;
  /**
   * Retrieves a read/write structure for MultiBlockChangeInfo arrays in Minecraft 1.8.
   * 
   * This modifier will automatically marshal between MultiBlockChangeInfo and the
   * internal Minecraft MultiBlockChangeInfo.
   * @return A modifier for BlockData fields.
  */
  getMultiBlockChangeInfoArrays(): StructureModifier<MultiBlockChangeInfo[]>;
  /**
   * Retrieves a read/write structure for chat components in Minecraft 1.7.2.
   * 
   * This modifier will automatically marshal between WrappedChatComponent and the
   * internal Minecraft IChatBaseComponent.
   * @return A modifier for ChatComponent fields.
  */
  getChatComponents(): StructureModifier<WrappedChatComponent>;
  /**
   * Retrieves a read/write structure for arrays of chat components.
   * 
   * This modifier will automatically marshal between WrappedChatComponent and the
   * internal Minecraft IChatBaseComponent (1.9.2 and below) or the internal
   * NBTCompound (1.9.4 and up).
   * 
   * Note that in 1.9.4 and up this modifier only works properly with sign
   * tile entities.
   * @return A modifier for ChatComponent array fields.
  */
  getChatComponentArrays(): StructureModifier<WrappedChatComponent[]>;
  /**
   * Retrieve a read/write structure for the ServerPing fields in the following packet: 
   * 
   *   {@link PacketType.Status.Server#SERVER_INFO}
   * 
   * @return A modifier for ServerPing fields.
  */
  getServerPings(): StructureModifier<WrappedServerPing>;
  /**
   * Retrieve a read/write structure for the PlayerInfoData list fields in the following packet: 
   * 
   *   {@link PacketType.Play.Server#PLAYER_INFO}
   * 
   * @return A modifier for PlayerInfoData list fields.
  */
  getPlayerInfoDataLists(): StructureModifier<PlayerInfoData[]>;
  /**
   * Retrieve a read/write structure for the Protocol enum in 1.7.2.
   * @return A modifier for Protocol enum fields.
  */
  getProtocols(): StructureModifier<Protocol>;
  /**
   * Retrieve a read/write structure for the ClientCommand enum in 1.7.2.
   * @return A modifier for ClientCommand enum fields.
  */
  getClientCommands(): StructureModifier<ClientCommand>;
  /**
   * Retrieve a read/write structure for the ChatVisibility enum in 1.7.2.
   * @return A modifier for ChatVisibility enum fields.
  */
  getChatVisibilities(): StructureModifier<ChatVisibility>;
  /**
   * Retrieve a read/write structure for the Difficulty enum in 1.7.2.
   * @return A modifier for Difficulty enum fields.
  */
  getDifficulties(): StructureModifier<Difficulty>;
  /**
   * Retrieve a read/write structure for the EntityUse enum in 1.7.2.
   * @return A modifier for EntityUse enum fields.
  */
  getEntityUseActions(): StructureModifier<EntityUseAction>;
  /**
   * Retrieves a read/write structure for the EntityUseAction class in the UseEntity packet sent by the client for
   * 1.17 and above.
   * @return A modifier for EntityUseAction class fields.
  */
  getEnumEntityUseActions(): StructureModifier<WrappedEnumEntityUseAction>;
  /**
   * Retrieve a read/write structure for the NativeGameMode enum in 1.7.2.
   * @return A modifier for NativeGameMode enum fields.
  */
  getGameModes(): StructureModifier<NativeGameMode>;
  /**
   * Retrieve a read/write structure for the ResourcePackStatus enum in 1.8.
   * @return A modifier for ResourcePackStatus enum fields.
  */
  getResourcePackStatus(): StructureModifier<ResourcePackStatus>;
  /**
   * Retrieve a read/write structure for the PlayerInfo enum in 1.8.
   * @return A modifier for PlayerInfoAction enum fields.
  */
  getPlayerInfoAction(): StructureModifier<PlayerInfoAction>;
  /**
   * Retrieve a read/write structure for the TitleAction enum in 1.8.
   * @return A modifier for TitleAction enum fields.
  */
  getTitleActions(): StructureModifier<TitleAction>;
  /**
   * Retrieve a read/write structure for the WorldBorderAction enum in 1.8.
   * @return A modifier for WorldBorderAction enum fields.
  */
  getWorldBorderActions(): StructureModifier<WorldBorderAction>;
  /**
   * Retrieve a read/write structure for the CombatEventType enum in 1.8.
   * @return A modifier for CombatEventType enum fields.
  */
  getCombatEvents(): StructureModifier<CombatEventType>;
  /**
   * Retrieve a read/write structure for the PlayerDigType enum in 1.8.
   * @return A modifier for PlayerDigType enum fields.
  */
  getPlayerDigTypes(): StructureModifier<PlayerDigType>;
  /**
   * Retrieve a read/write structure for the PlayerAction enum in 1.8.
   * @return A modifier for PlayerAction enum fields.
  */
  getPlayerActions(): StructureModifier<PlayerAction>;
  /**
   * Retrieve a read/write structure for the ScoreboardAction enum in 1.8.
   * @return A modifier for ScoreboardAction enum fields.
  */
  getScoreboardActions(): StructureModifier<ScoreboardAction>;
  /**
   * Retrieve a read/write structure for the Particle enum in 1.8-1.12.
   * NOTE: This will produce undesirable results in 1.13
   * @return A modifier for Particle enum fields.
  */
  getParticles(): StructureModifier<Particle>;
  /**
   * Retrieve a read/write structure for ParticleParams in 1.13
   * @return A modifier for ParticleParam fields.
  */
  getNewParticles(): StructureModifier<WrappedParticle>;
  /**
   * Retrieve a read/write structure for the SoundCategory enum in 1.9.
   * @return A modifier for SoundCategory enum fields.
  */
  getSoundCategories(): StructureModifier<SoundCategory>;
  /**
   * Retrieve a read/write structure for the ItemSlot enum in 1.9.
   * @return A modifier for ItemSlot enum fields.
  */
  getItemSlots(): StructureModifier<ItemSlot>;
  /**
   * Retrieve a read/write structure for the Hand enum in 1.9.
   * @return A modifier for Hand enum fields.
  */
  getHands(): StructureModifier<Hand>;
  /**
   * Retrieve a read/write structure for the Direction enum in 1.10.
   * @return A modifier for Direction enum fields.
  */
  getDirections(): StructureModifier<Direction>;
  /**
   * Retrieve a read/write structure for the ChatType enum in 1.12.
   * @return A modifier for ChatType enum fields.
  */
  getChatTypes(): StructureModifier<ChatType>;
  /**
   * Retrieve a read/write structure for the MinecraftKey class.
   * @return A modifier for MinecraftKey fields.
  */
  getMinecraftKeys(): StructureModifier<MinecraftKey>;
  /**
   * Retrieve a read/write structure for dimension IDs in 1.13.1+
   * @return A modifier for dimension IDs
  */
  getDimensions(): StructureModifier<number>;
  /**
   * Retrieve a read/write structure for MovingObjectPositionBlock in 1.16+
   * @return The Structure Modifier
  */
  getMovingBlockPositions(): StructureModifier<MovingObjectPositionBlock>;
  /**
   * Retrieve a read/write structure for SectionPositions in 1.16.2+
   * @return The Structure Modifier
  */
  getSectionPositions(): StructureModifier<BlockPosition>;
  /**
   * Retrieve a read/write structure for Game State IDs in 1.16+
   * @return The Structure Modifier
  */
  getGameStateIDs(): StructureModifier<number>;
  getIntLists(): StructureModifier<number[]>;
  /**
   * Retrieve a read/write structure for the Map class.
   * @param keyConverter Converter for map keys
   * @param valConverter Converter for map values
   * @param  Key param
   * @param  Value param
   * @return A modifier for Map fields.
   *
   * @see BukkitConverters
   * @see EquivalentConverter
  */
  getMaps<K, V>(keyConverter: EquivalentConverter<K>, valConverter: EquivalentConverter<V>): StructureModifier<Map<K, V>>;
  /**
   * Retrieve a read/write structure for the Set class.
   * @param converter Converter for elements
   * @param  Element param
   * @return A modifier for Set fields
   *
   * @see BukkitConverters
   * @see EquivalentConverter
  */
  getSets<E>(converter: EquivalentConverter<E>): StructureModifier<Set<E>>;
  /**
   * Retrieve a read/write structure for the List class.
   * @param converter Converter for elements
   * @param  Element param
   * @return A modifier for List fields
  */
  getLists<E>(converter: EquivalentConverter<E>): StructureModifier<E[]>;
  /**
   * Retrieve a read/write structure for an enum. This allows for the use of
   * user-created enums that may not exist in ProtocolLib. The specific (user
   * created) enum constants must match up perfectly with their generic (NMS)
   * counterparts.
   *
   * @param enumClass The specific Enum class
   * @param nmsClass The generic Enum class
   * @return The modifier
  */
  getEnumModifier<T>(enumClass: Class<T>, nmsClass: Class<any>): StructureModifier<T>;
  /**
   * Retrieve a read/write structure for an enum. This method is for convenience,
   * see {@link #getEnumModifier(Class, Class)} for more information.
   *
   * @param enumClass The specific Enum class
   * @param index Index of the generic Enum
   * @return The modifier
   * @see #getEnumModifier(Class, Class)
  */
  getEnumModifier<T>(enumClass: Class<T>, index: number): StructureModifier<T>;
}
/**
 * Determines which packets will be observed by a listener, and with what priority.
 * @author Kristian
*/
export class ListeningWhitelist {
  /**
   * A whitelist with no packets - indicates that the listener shouldn't observe any packets.
  */
  static readonly EMPTY_WHITELIST: ListeningWhitelist;
  /**
   * Whether or not this whitelist has any enabled packets.
   * @return TRUE if there are any packets, FALSE otherwise.
  */
  isEnabled(): boolean;
  /**
   * Retrieve the priority in the execution order of the packet listener. Highest priority will be executed last.
   * @return Execution order in terms of priority.
  */
  getPriority(): ListenerPriority;
  /**
   * Retrieves a set of the packets that will be observed by the listeners.
   * @return Packet whitelist.
  */
  getTypes(): Set<PacketType>;
  /**
   * Retrieve which game phase this listener is active under.
   * @return The active game phase.
  */
  getGamePhase(): GamePhase;
  /**
   * Retrieve every special option associated with this whitelist.
   * @return Every special option.
  */
  getOptions(): Set<ListenerOptions>;
  hashCode(): number;
  /**
   * Determine if the given whitelist is empty or not.
   * @param whitelist - the whitelist to test.
   * @return TRUE if the whitelist is empty, FALSE otherwise.
  */
  static isEmpty(whitelist: ListeningWhitelist): boolean;
  equals(obj: any): boolean;
  toString(): string;
  /**
   * Construct a new builder of whitelists.
   * @return New whitelist builder.
  */
  static newBuilder(): Builder;
  /**
   * Construct a new builder of whitelists initialized to the same values as the template.
   * @param template - the template object.
   * @return New whitelist builder.
  */
  static newBuilder(template: ListeningWhitelist): Builder;
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
   * Retrieve the sender of this connection side.
   * 
   * This is NULL for {@link #BOTH}.
   * @return The sender.
  */
  getSender(): Sender;
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
  /**
   * Invoked after a packet has been sent or received.
   * 
   * Note that this is invoked asynchronously.
   * @param event - the packet event.
  */
  onPostEvent(event: PacketEvent): void;
}

}
declare module 'com.comphenix.protocol.async' {
import { Method } from 'java.lang.reflect';
import { PacketEvent, PacketListener } from 'com.comphenix.protocol.events';
import { Set, Iterator } from 'java.util';
import { Comparable, Runnable, Thread } from 'java.lang';
import { Serializable } from 'java.io';
import { ErrorReporter, ReportType } from 'com.comphenix.protocol.error';
import { ArrayBlockingQueue, TimeUnit } from 'java.util.concurrent';
import { PrioritizedListener, SortedPacketListenerList } from 'com.comphenix.protocol.injector';
import { AtomicInteger } from 'java.util.concurrent.atomic';
import { TimedListenerManager } from 'com.comphenix.protocol.timing';
import { ProtocolManager, PacketType, AsynchronousManager, PacketStream } from 'com.comphenix.protocol';
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
   * Retrieve the packet stream responsible for transmitting this packet.
   * @return The packet stream.
  */
  getPacketStream(): PacketStream;
  /**
   * Sets the output packet stream responsible for transmitting this packet.
   * @param packetStream - new output packet stream.
  */
  setPacketStream(packetStream: PacketStream);
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
   * Retrieve the current asynchronous listener handler.
   * @return Asychronous listener handler, or NULL if this packet is not asynchronous.
  */
  getListenerHandler(): AsyncListenerHandler;
  /**
   * Retrieve the current worker ID.
   * @return Current worker ID.
  */
  getWorkerID(): number;
  /**
   * Determine if Minecraft allows asynchronous processing of this packet.
   * @param event - packet event
   * @return TRUE if it does, FALSE otherwise.
   * @throws FieldAccessException If determining fails for some reasaon
  */
  isMinecraftAsync(event: PacketEvent): boolean;
  compareTo(o: AsyncMarker): number;
  equals(other: any): boolean;
  hashCode(): number;
}
export interface AsyncMarker extends Serializable, Comparable<AsyncMarker> {}
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
 * Represents a handler for an asynchronous event.
 * 
 * Use {@link AsyncMarker#incrementProcessingDelay()} to delay a packet until a certain condition has been met.
 * @author Kristian
*/
export class AsyncListenerHandler {
  static readonly REPORT_HANDLER_NOT_STARTED: ReportType;
  /**
   * Determine whether or not this asynchronous handler has been cancelled.
   * @return TRUE if it has been cancelled/stopped, FALSE otherwise.
  */
  isCancelled(): boolean;
  /**
   * Retrieve the current asynchronous packet listener.
   * @return Current packet listener.
  */
  getAsyncListener(): PacketListener;
  /**
   * Cancel the handler.
  */
  cancel(): void;
  /**
   * Queue a packet for processing.
   * @param packet - a packet for processing.
   * @throws IllegalStateException If the underlying packet queue is full.
  */
  enqueuePacket(packet: PacketEvent): void;
  /**
   * Create a worker that will initiate the listener loop. Note that using stop() to
   * close a specific worker is less efficient than stopping an arbitrary worker.
   * 
   * Warning: Never call the run() method in the main thread.
   * @return The listener loop
  */
  getListenerLoop(): AsyncRunnable;
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
/**
 * Represents a filter manager for asynchronous packets.
 * 
 * By using {@link AsyncMarker#incrementProcessingDelay()}, a packet can be delayed without having to block the
 * processing thread.
 * @author Kristian
*/
export class AsyncFilterManager extends AsynchronousManager {
  /**
   * Retrieve the protocol manager.
   * @return The protocol manager.
  */
  getManager(): ProtocolManager;
  /**
   * Set the associated protocol manager.
   * @param manager - the new manager.
  */
  setManager(manager: ProtocolManager);
  /**
   * Registers an asynchronous packet handler.
   * 
   * Use {@link AsyncMarker#incrementProcessingDelay()} to delay a packet until its ready to be transmitted.
   * 
   * To start listening asynchronously, pass the getListenerLoop() runnable to a different thread.
   * @param listener - the packet listener that will receive these asynchronous events.
   * @return An asynchronous handler.
  */
  registerAsyncHandler(listener: PacketListener): AsyncListenerHandler;
  /**
   * Register a synchronous listener that handles packets when they time out.
   * @param listener - synchronous listener that will handle timed out packets.
  */
  registerTimeoutHandler(listener: PacketListener): void;
  /**
   * Get a immutable set of every registered timeout handler.
   * @return Set of every registered timeout handler.
  */
  getTimeoutHandlers(): Set<PacketListener>;
  /**
   * Get an immutable set of every registered asynchronous packet listener.
   * @return Set of every asynchronous packet listener.
  */
  getAsyncHandlers(): Set<PacketListener>;
  /**
   * Registers an asynchronous packet handler.
   * 
   * Use {@link AsyncMarker#incrementProcessingDelay()} to delay a packet until its ready to be transmitted.
   * 
   * To start listening asynchronously, pass the getListenerLoop() runnable to a different thread.
   * 
   * Asynchronous events will only be executed if a synchronous listener with the same packets is registered.
   * If you already have a synchronous event, call this method with autoInject set to FALSE.
   * 
   * @param listener - the packet listener that will receive these asynchronous events.
   * @param autoInject - whether or not to automatically create the corresponding synchronous listener,
   * @return An asynchronous handler.
  */
  registerAsyncHandler(listener: PacketListener, autoInject: boolean): AsyncListenerHandler;
  /**
   * Unregisters a given timeout listener.
   * @param listener - the timeout listener to unregister.
  */
  unregisterTimeoutHandler(listener: PacketListener): void;
  /**
   * Unregisters and closes the given asynchronous handler.
   * @param handler - asynchronous handler.
  */
  unregisterAsyncHandler(listener: PacketListener): void;
  /**
   * Unregisters and closes the given asynchronous handler.
   * @param handler - asynchronous handler.
  */
  unregisterAsyncHandler(handler: AsyncListenerHandler): void;
  /**
   * Enqueue a packet for asynchronous processing.
   * 
   * @param syncPacket - synchronous packet event.
   * @param asyncMarker - the asynchronous marker to use.
  */
  enqueueSyncPacket(syncPacket: PacketEvent, asyncMarker: AsyncMarker): void;
  /**
   * Retrieves a immutable set containing the types of the received client packets that will be
   * observed by the asynchronous listeners.
   * @return Every filtered client packet.
  */
  getReceivingTypes(): Set<PacketType>;
  /**
   * Retrieves a immutable set containing the types of the sent server packets that will be
   * observed by the asynchronous listeners.
   * @return Every filtered server packet.
  */
  getSendingTypes(): Set<PacketType>;
  /**
   * Determine if a given synchronous packet has asynchronous listeners.
   * @param packet - packet to test.
   * @return TRUE if it does, FALSE otherwise.
  */
  hasAsynchronousListeners(packet: PacketEvent): boolean;
  /**
   * Construct a asynchronous marker with all the default values.
   * @return Asynchronous marker.
  */
  createAsyncMarker(): AsyncMarker;
  /**
   * Construct an async marker with the given sending priority delta and timeout delta.
   * @param timeoutDelta - how long (in ms) until the packet expire.
   * @return An async marker.
  */
  createAsyncMarker(timeoutDelta: number): AsyncMarker;
  /**
   * Retrieve the default packet stream.
   * @return Default packet stream.
  */
  getPacketStream(): PacketStream;
  /**
   * Retrieve the default error reporter.
   * @return Default reporter.
  */
  getErrorReporter(): ErrorReporter;
  /**
   * Remove listeners, close threads and transmit every delayed packet.
  */
  cleanupAll(): void;
  /**
   * Signal that a packet is ready to be transmitted.
   * 
   * This should only be called if {@link com.comphenix.protocol.async.AsyncMarker#incrementProcessingDelay() AsyncMarker.incrementProcessingDelay()}
   * has been called previously.
   * @param packet - packet to signal.
  */
  signalPacketTransmission(packet: PacketEvent): void;
  /**
   * Retrieve the sending queue this packet belongs to.
   * @param packet - the packet.
   * @return The server or client sending queue the packet belongs to.
  */
  getSendingQueue(packet: PacketEvent): PacketSendingQueue;
  /**
   * Retrieve the sending queue this packet belongs to.
   * @param packet - the packet.
   * @param createNew - if TRUE, create a new queue if it hasn't already been created.
   * @return The server or client sending queue the packet belongs to.
  */
  getSendingQueue(packet: PacketEvent, createNew: boolean): PacketSendingQueue;
  /**
   * Retrieve the processing queue this packet belongs to.
   * @param packet - the packet.
   * @return The server or client sending processing the packet belongs to.
  */
  getProcessingQueue(packet: PacketEvent): PacketProcessingQueue;
  /**
   * Signal that a packet has finished processing.
   * @param packet - packet to signal.
  */
  signalFreeProcessingSlot(packet: PacketEvent): void;
  /**
   * Send any due packets, or clean up packets that have expired.
   * @param tickCounter Tick counter
   * @param onMainThread Whether or not to execute on the main thread
  */
  sendProcessedPackets(tickCounter: number, onMainThread: boolean): void;
}

}
declare module 'com.comphenix.protocol.wrappers.AutoWrapper' {
import { RuntimeException } from 'java.lang';
export class InvalidWrapperException extends RuntimeException {

}

}
declare module 'com.comphenix.protocol.PacketType.Status' {
import { Sender } from 'com.comphenix.protocol.PacketType';
import { PacketType, PacketTypeEnum } from 'com.comphenix.protocol';
/**
 * Outgoing packets.
 * @author Kristian
*/
export class Server extends PacketTypeEnum {
  static readonly SERVER_INFO: PacketType;
  static readonly PONG: PacketType;
  /**
   * @deprecated Renamed to {@link #SERVER_INFO}
  */
  static readonly OUT_SERVER_INFO: PacketType;
  static getSender(): Sender;
  static getInstance(): Server;
}
/**
 * Incoming packets.
 * @author Kristian
*/
export class Client extends PacketTypeEnum {
  static readonly START: PacketType;
  static readonly PING: PacketType;
  static getSender(): Sender;
  static getInstance(): Client;
}

}
declare module 'com.comphenix.protocol.reflect.PrettyPrinter' {
import { StringBuilder } from 'java.lang';
/**
 * Represents a generic object printer.
 * @author Kristian
*/
export class ObjectPrinter {
  static readonly DEFAULT: ObjectPrinter;
  /**
   * Print the content of the given object.
   * 
   * Return FALSE in order for let the default printer take over.
   * @param output - where to print the output.
   * @param value - the value to print, may be NULL.
   * @return TRUE if we processed the value and added to the output, FALSE otherwise.
  */
  print(output: StringBuilder, value: any): boolean;
}

}
declare module 'com.comphenix.protocol.wrappers.nbt' {
import { Constructor, Method } from 'java.lang.reflect';
import { Enum, Iterable, Class } from 'java.lang';
import { Set, Iterator, Collection, List, Map } from 'java.util';
import { DataOutput } from 'java.io';
import { ClonableWrapper } from 'com.comphenix.protocol.wrappers';
import { StructureModifier } from 'com.comphenix.protocol.reflect';
/**
 * Indicates that this NBT wraps an underlying net.minecraft.server instance.
 * 
 * Use {@link NbtFactory} to load or create instances.
 * 
 * @author Kristian
 * 
 * @param  - type of the value that is stored.
*/
export class NbtWrapper<TType> extends NbtBase<TType> {
  /**
   * Retrieve the underlying net.minecraft.server instance.
   * @return The NMS instance.
  */
  getHandle(): any;
  /**
   * Write the current NBT tag to an output stream.
   * @param destination - the destination stream.
  */
  write(destination: DataOutput): void;
}
export interface NbtWrapper<TType> extends NbtBase<TType>, ClonableWrapper {}
/**
 * Represents a list of NBT tags of the same type without names.
 * 
 * Use {@link NbtFactory} to load or create an instance.
 * 
 * The {@link NbtBase#getValue()} method returns a {@link java.util.List} that will correctly return the content
 * of this NBT list, but may throw an {@link UnsupportedOperationException} for any of the write operations.
 * 
 * @author Kristian
 *
 * @param  - the value type of each NBT tag.
*/
export class NbtList<TType> extends NbtBase<NbtBase<TType>[]> {
  /**
   * The name of every NBT tag in a list.
  */
  static readonly EMPTY_NAME: string;
  /**
   * Get the type of each element.
   * 
   * This will be {@link NbtType#TAG_END TAG_END} if the NBT list has just been created.
   * @return Element type.
  */
  getElementType(): NbtType;
  /**
   * Set the type of each element.
   * @param type - type of each element.
  */
  setElementType(elementType: NbtType);
  /**
   * Add a value to a typed list by attempting to convert it to the nearest value.
   * 
   * Note that the list must be typed by setting {@link #setElementType(NbtType)} before calling this function.
   * @param value - the value to add.
  */
  addClosest(value: any): void;
  /**
   * Add a NBT list or NBT compound to the list.
   * @param element Element to add
  */
  add(element: NbtBase<TType>): void;
  /**
   * Add a new string element to the list.
   * @param value - the string element to add.
   * @throws IllegalArgumentException If this is not a list of strings.
  */
  add(value: string): void;
  /**
   * Add a new byte element to the list.
   * @param value - the byte element to add.
   * @throws IllegalArgumentException If this is not a list of bytes.
  */
  add(value: number): void;
  /**
   * Add a new byte array element to the list.
   * @param value - the byte array element to add.
   * @throws IllegalArgumentException If this is not a list of byte arrays.
  */
  add(value: number[]): void;
  /**
   * Add a new int array element to the list.
   * @param value - the int array element to add.
   * @throws IllegalArgumentException If this is not a list of int arrays.
  */
  add(value: number[]): void;
  /**
   * Remove a given object from the list.
   * @param remove - the object to remove.
  */
  remove(remove: any): void;
  /**
   * Retrieve an element by index.
   * @param index - index of the element to retrieve.
   * @return The element to retrieve.
   * @throws IndexOutOfBoundsException If the index is out of range
  */
  getValue(index: number): TType;
  /**
   * Retrieve the number of elements in this list.
   * @return The number of elements in this list.
  */
  size(): number;
  /**
   * Retrieve each NBT tag in this list.
   * @return A view of NBT tag in this list.
  */
  asCollection(): Collection<NbtBase<TType>>;
  /**
   * Iterate over all the elements in this list.
  */
  iterator(): Iterator<TType>;
}
export interface NbtList<TType> extends NbtBase<NbtBase<TType>[]>, Iterable<TType> {}
/**
 * Factory methods for creating NBT elements, lists and compounds.
 *
 * @author Kristian
*/
export class NbtFactory {
  /**
   * Attempt to cast this NBT tag as a compund.
   *
   * @param tag - the NBT tag to cast.
   * @return This instance as a compound.
   * @throws UnsupportedOperationException If this is not a compound.
  */
  static asCompound(tag: NbtBase<any>): NbtCompound;
  /**
   * Attempt to cast this NBT tag as a list.
   *
   * @param tag - the NBT tag to cast.
   * @return This instance as a list.
   * @throws UnsupportedOperationException If this is not a list.
  */
  static asList(tag: NbtBase<any>): NbtList<any>;
  /**
   * Get a NBT wrapper from a NBT base.
   * 
   * This may clone the content if the NbtBase is not a NbtWrapper.
   *
   * @param  Type
   * @param base - the base class.
   * @return A NBT wrapper.
  */
  static fromBase<T>(base: NbtBase<T>): NbtWrapper<T>;
  /**
   * Load a NBT compound from a GZIP compressed file.
   *
   * @param file - the source file.
   * @return The compound.
   * @throws IOException Unable to load file.
  */
  static fromFile(file: string): NbtCompound;
  /**
   * Save a NBT compound to a new compressed file, overwriting any existing files in the process.
   *
   * @param compound - the compound to save.
   * @param file - the destination file.
   * @throws IOException Unable to save compound.
  */
  static toFile(compound: NbtCompound, file: string): void;
  /**
   * Initialize a NBT wrapper.
   * 
   * Use {@link #fromNMS(Object, String)} instead.
   *
   * @param  Type
   * @param handle - the underlying net.minecraft.server object to wrap.
   * @return A NBT wrapper.
  */
  static fromNMS<T>(handle: any): NbtWrapper<T>;
  /**
   * Initialize a NBT wrapper with a name.
   *
   * @param  Type
   * @param name - the name of the tag, or NULL if not valid.
   * @param handle - the underlying net.minecraft.server object to wrap.
   * @return A NBT wrapper.
  */
  static fromNMS<T>(handle: any, name: string): NbtWrapper<T>;
  /**
   * Retrieve the NBT compound from a given NMS handle.
   *
   * @param handle - the underlying net.minecraft.server object to wrap.
   * @return A NBT compound wrapper
  */
  static fromNMSCompound(handle: any): NbtCompound;
  /**
   * Constructs a NBT tag of type string.
   *
   * @param name - name of the tag.
   * @param value - value of the tag.
   * @return The constructed NBT tag.
  */
  static of(name: string, value: string): NbtBase<string>;
  /**
   * Constructs a NBT tag of type byte.
   *
   * @param name - name of the tag.
   * @param value - value of the tag.
   * @return The constructed NBT tag.
  */
  static of(name: string, value: number): NbtBase<number>;
  /**
   * Constructs a NBT tag of type byte array.
   *
   * @param name - name of the tag.
   * @param value - value of the tag.
   * @return The constructed NBT tag.
  */
  static of(name: string, value: number[]): NbtBase<number[]>;
  /**
   * Constructs a NBT tag of type int array.
   *
   * @param name - name of the tag.
   * @param value - value of the tag.
   * @return The constructed NBT tag.
  */
  static of(name: string, value: number[]): NbtBase<number[]>;
  /**
   * Construct a new NBT compound initialized with a given list of NBT values.
   *
   * @param name - the name of the compound wrapper.
   * @param list - the list of elements to add.
   * @return The new wrapped NBT compound.
  */
  static ofCompound(name: string, list: Collection<NbtBase<any>>): NbtCompound;
  /**
   * Construct a new NBT compound wrapper.
   *
   * @param name - the name of the compound wrapper.
   * @return The new wrapped NBT compound.
  */
  static ofCompound(name: string): NbtCompound;
  /**
   * Construct a NBT list of out an array of values.
   *
   * @param  Type
   * @param name - name of this list.
   * @param elements - elements to add.
   * @return The new filled NBT list.
  */
  static ofList<T>(name: string, ...elements: T[]): NbtList<T>;
  /**
   * Construct a NBT list of out a list of values.
   *
   * @param  Type
   * @param name - name of this list.
   * @param elements - elements to add.
   * @return The new filled NBT list.
  */
  static ofList<T>(name: string, elements: Collection<T>): NbtList<T>;
  /**
   * Create a new NBT wrapper from a given type.
   *
   * @param  Type
   * @param type - the NBT type.
   * @param name - the name of the NBT tag.
   * @return The new wrapped NBT tag.
   * @throws FieldAccessException If we're unable to create the underlying tag.
  */
  static ofWrapper<T>(type: NbtType, name: string): NbtWrapper<T>;
  /**
   * Create a new NBT wrapper from a given type.
   *
   * @param  Type
   * @param type - the NBT type.
   * @param name - the name of the NBT tag.
   * @param value - the value of the new tag.
   * @return The new wrapped NBT tag.
   * @throws FieldAccessException If we're unable to create the underlying tag.
  */
  static ofWrapper<T>(type: NbtType, name: string, value: T): NbtWrapper<T>;
  /**
   * Create a new NBT wrapper from a given type.
   *
   * @param  Type
   * @param type - type of the NBT value.
   * @param name - the name of the NBT tag.
   * @param value - the value of the new tag.
   * @return The new wrapped NBT tag.
   * @throws FieldAccessException     If we're unable to create the underlying tag.
   * @throws IllegalArgumentException If the given class type is not valid NBT.
  */
  static ofWrapper<T>(type: Class<any>, name: string, value: T): NbtWrapper<T>;
}
/**
 * Represents a mapping of arbitrary NBT elements and their unique names.
 * 
 * Use {@link NbtFactory} to load or create an instance.
 * 
 * The {@link NbtBase#getValue()} method returns a {@link java.util.Map} that will return the full content
 * of this NBT compound, but may throw an {@link UnsupportedOperationException} for any of the write operations.
 * 
 * @author Kristian
*/
export class NbtCompound extends NbtBase<Map<string, NbtBase<any>>> {
  getValue(): Map<string, NbtBase<any>>;
  /**
   * Determine if an entry with the given key exists or not.
   * @param key - the key to lookup.
   * @return TRUE if an entry with the given key exists, FALSE otherwise.
  */
  containsKey(key: string): boolean;
  /**
   * Retrieve a Set view of the keys of each entry in this compound.
   * @return The keys of each entry.
  */
  getKeys(): Set<string>;
  /**
   * Retrieve the value of a given entry.
   * @param  Type
   * @param key - key of the entry to retrieve.
   * @return The value of this entry, or NULL if not found.
  */
  getValue<T>(key: string): NbtBase<T>;
  /**
   * Retrieve a value by its key, or assign and return a new NBT element if it doesn't exist.
   * @param key - the key of the entry to find or create.
   * @param type - the NBT element we will create if not found.
   * @return The value that was retrieved or just created.
  */
  getValueOrDefault(key: string, type: NbtType): NbtBase<any>;
  /**
   * Set a entry based on its name.
   * @param  Type
   * @param entry - entry with a name and value.
   * @return This compound, for chaining.
   * @throws IllegalArgumentException If entry is NULL.
  */
  put<T>(entry: NbtBase<T>): NbtCompound;
  /**
   * Retrieve the string value of an entry identified by a given key.
   * @param key - the key of the entry.
   * @return The string value of the entry.
   * @throws IllegalArgumentException If the key doesn't exist.
  */
  getString(key: string): string;
  /**
   * Retrieve the string value of an existing entry, or from a new default entry if it doesn't exist.
   * @param key - the key of the entry.
   * @return The value that was retrieved or just created.
  */
  getStringOrDefault(key: string): string;
  /**
   * Associate a NBT string value with the given key.
   * @param key - the key and NBT name.
   * @param value - the value.
   * @return This current compound, for chaining.
  */
  put(key: string, value: string): NbtCompound;
  /**
   * Inserts an entry after cloning it and renaming it to "key".
   * @param key - the name of the entry.
   * @param entry - the entry to insert.
   * @return This current compound, for chaining.
  */
  put(key: string, entry: NbtBase<any>): NbtCompound;
  /**
   * Retrieve the byte value of an entry identified by a given key.
   * @param key - the key of the entry.
   * @return The byte value of the entry.
   * @throws IllegalArgumentException If the key doesn't exist.
  */
  getByte(key: string): number;
  /**
   * Retrieve the byte value of an existing entry, or from a new default entry if it doesn't exist.
   * @param key - the key of the entry.
   * @return The value that was retrieved or just created.
  */
  getByteOrDefault(key: string): number;
  /**
   * Associate a NBT byte value with the given key.
   * @param key - the key and NBT name.
   * @param value - the value.
   * @return This current compound, for chaining.
  */
  put(key: string, value: number): NbtCompound;
  /**
   * Retrieve the short value of an entry identified by a given key.
   * @param key - the key of the entry.
   * @return The short value of the entry.
   * @throws IllegalArgumentException If the key doesn't exist.
  */
  getShort(key: string): number;
  /**
   * Retrieve the short value of an existing entry, or from a new default entry if it doesn't exist.
   * @param key - the key of the entry.
   * @return The value that was retrieved or just created.
  */
  getShortOrDefault(key: string): number;
  /**
   * Retrieve the integer value of an entry identified by a given key.
   * @param key - the key of the entry.
   * @return The integer value of the entry.
   * @throws IllegalArgumentException If the key doesn't exist.
  */
  getInteger(key: string): number;
  /**
   * Retrieve the integer value of an existing entry, or from a new default entry if it doesn't exist.
   * @param key - the key of the entry.
   * @return The value that was retrieved or just created.
  */
  getIntegerOrDefault(key: string): number;
  /**
   * Retrieve the long value of an entry identified by a given key.
   * @param key - the key of the entry.
   * @return The long value of the entry.
   * @throws IllegalArgumentException If the key doesn't exist.
  */
  getLong(key: string): number;
  /**
   * Retrieve the long value of an existing entry, or from a new default entry if it doesn't exist.
   * @param key - the key of the entry.
   * @return The value that was retrieved or just created.
  */
  getLongOrDefault(key: string): number;
  /**
   * Retrieve the float value of an entry identified by a given key.
   * @param key - the key of the entry.
   * @return The float value of the entry.
   * @throws IllegalArgumentException If the key doesn't exist.
  */
  getFloat(key: string): number;
  /**
   * Retrieve the float value of an existing entry, or from a new default entry if it doesn't exist.
   * @param key - the key of the entry.
   * @return The value that was retrieved or just created.
  */
  getFloatOrDefault(key: string): number;
  /**
   * Retrieve the double value of an entry identified by a given key.
   * @param key - the key of the entry.
   * @return The double value of the entry.
   * @throws IllegalArgumentException If the key doesn't exist.
  */
  getDouble(key: string): number;
  /**
   * Retrieve the double value of an existing entry, or from a new default entry if it doesn't exist.
   * @param key - the key of the entry.
   * @return The value that was retrieved or just created.
  */
  getDoubleOrDefault(key: string): number;
  /**
   * Retrieve the byte array value of an entry identified by a given key.
   * @param key - the key of the entry.
   * @return The byte array value of the entry.
   * @throws IllegalArgumentException If the key doesn't exist.
  */
  getByteArray(key: string): number[];
  /**
   * Associate a NBT byte array value with the given key.
   * @param key - the key and NBT name.
   * @param value - the value.
   * @return This current compound, for chaining.
  */
  put(key: string, value: number[]): NbtCompound;
  /**
   * Retrieve the integer array value of an entry identified by a given key.
   * @param key - the key of the entry.
   * @return The integer array value of the entry.
   * @throws IllegalArgumentException If the key doesn't exist.
  */
  getIntegerArray(key: string): number[];
  /**
   * Associate a NBT integer array value with the given key.
   * @param key - the key and NBT name.
   * @param value - the value.
   * @return This current compound, for chaining.
  */
  put(key: string, value: number[]): NbtCompound;
  /**
   * Associates a given Java primitive value, list, map or NbtBase with a certain key.
   * 
   * If the value is NULL, the corresponding key is removed. Any Map or List will be converted
   * to a corresponding NbtCompound or NbtList.
   * 
   * @param key - the name of the new entry,
   * @param value - the value of the new entry, or NULL to remove the current value.
   * @return This current compound, for chaining.
  */
  putObject(key: string, value: any): NbtCompound;
  /**
   * Retrieve the primitive object, NbtList or NbtCompound associated with the given key.
   * @param key - the key of the object to find.
   * @return The object with this key, or NULL if we couldn't find anything.
  */
  getObject(key: string): any;
  /**
   * Retrieve the compound (map) value of an entry identified by a given key.
   * @param key - the key of the entry.
   * @return The compound value of the entry.
   * @throws IllegalArgumentException If the key doesn't exist.
  */
  getCompound(key: string): NbtCompound;
  /**
   * Retrieve a compound (map) value by its key, or create a new compound if it doesn't exist.
   * @param key - the key of the entry to find or create.
   * @return The compound value that was retrieved or just created.
  */
  getCompoundOrDefault(key: string): NbtCompound;
  /**
   * Associate a NBT compound with its name as key.
   * @param compound - the compound value.
   * @return This current compound, for chaining.
  */
  put(compound: NbtCompound): NbtCompound;
  /**
   * Retrieve the NBT list value of an entry identified by a given key.
   * @param  Type
   * @param key - the key of the entry.
   * @return The NBT list value of the entry.
   * @throws IllegalArgumentException If the key doesn't exist.
  */
  getList<T>(key: string): NbtList<T>;
  /**
   * Retrieve a NBT list value by its key, or create a new list if it doesn't exist.
   * @param  Type
   * @param key - the key of the entry to find or create.
   * @return The compound value that was retrieved or just created.
  */
  getListOrDefault<T>(key: string): NbtList<T>;
  /**
   * Associate a NBT list with the given key.
   * @param  Type
   * @param list - the list value.
   * @return This current compound, for chaining.
  */
  put<T>(list: NbtList<T>): NbtCompound;
  /**
   * Associate a new NBT list with the given key.
   * @param  Type
   * @param key - the key and name of the new NBT list.
   * @param list - the list of NBT elements.
   * @return This current compound, for chaining.
  */
  put<T>(key: string, list: Collection<NbtBase<T>>): NbtCompound;
  /**
   * Remove the NBT element that is associated with the given key.
   * @param  Type
   * @param key - the key of the element to remove.
   * @return The removed element, or NULL if no such element was found.
  */
  remove<T>(key: string): NbtBase<any>;
  /**
   * Retrieve an iterator view of the NBT tags stored in this compound.
   * @return The tags stored in this compound.
  */
  iterator(): Iterator<NbtBase<any>>;
  /**
   * Set the value of this NBT tag.
   * @param newValue - the new value of this tag.
  */
  setValue(value: TType);
}
export interface NbtCompound extends NbtBase<Map<string, NbtBase<any>>>, Iterable<NbtBase<any>> {}
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
  /**
   * Visit a leaf node, which is a NBT tag with a primitive or String value.
   * @param node - the visited leaf node.
   * @return TRUE to continue visiting children at this level, FALSE otherwise.
  */
  visit(node: NbtBase<any>): boolean;
  /**
   * Begin visiting a list node that contains multiple child nodes of the same type.
   * @param list - the NBT tag to process.
   * @return TRUE to visit the child nodes of this list, FALSE otherwise.
  */
  visitEnter(list: NbtList<any>): boolean;
  /**
   * Begin visiting a compound node that contains multiple child nodes of different types.
   * @param compound - the NBT tag to process.
   * @return TRUE to visit the child nodes of this compound, FALSE otherwise.
  */
  visitEnter(compound: NbtCompound): boolean;
  /**
   * Stop visiting a list node. 
   * @param list - the list we're done visiting.
   * @return TRUE for the parent to visit any subsequent sibling nodes, FALSE otherwise.
  */
  visitLeave(list: NbtList<any>): boolean;
  /**
   * Stop visiting a compound node.
   * @param compound - the compound we're done visting.
   * @return TRUE for the parent to visit any subsequent sibling nodes, FALSE otherwise
  */
  visitLeave(compound: NbtCompound): boolean;
}
/**
 * Represents a generic container for an NBT element.
 * 
 * Use {@link NbtFactory} to load or create an instance.
 *
 * @author Kristian
 * @param  - type of the value that is stored.
*/
export class NbtBase<TType> extends ClonableWrapper {
  /**
   * Accepts a NBT visitor.
   * @param visitor - the hierarchical NBT visitor.
   * @return TRUE if the parent should continue processing children at the current level, FALSE otherwise.
  */
  accept(visitor: NbtVisitor): boolean;
  /**
   * Retrieve the type of this NBT element.
   * @return The type of this NBT element.
  */
  getType(): NbtType;
  /**
   * Retrieve the name of this NBT tag.
   * 
   * This will be an empty string if the NBT tag is stored in a list.
   * @return Name of the tag.
  */
  getName(): string;
  /**
   * Set the name of this NBT tag.
   * 
   * This will be ignored if the NBT tag is stored in a list.
   * @param name - name of the tag.
  */
  setName(name: string);
  /**
   * Retrieve the value of this NBT tag.
   * 
   * Is either a primitive {@link java.lang.Number wrapper}, {@link java.lang.String String}, 
   * {@link java.util.List List} or a {@link java.util.Map Map}. 
   * 
   * Users are encouraged to cast an NBT compound to {@link NbtCompound} and use its put and get-methods
   * instead of accessing its content from getValue().
   * 
   * All operations that modify collections directly, such as {@link java.util.List#add(Object) List.add(Object)} or 
   * {@link java.util.Map#clear() Map.clear()}, are considered optional. This also include members in {@link java.util.Iterator Iterator} and 
   * {@link java.util.ListIterator ListIterator}. Operations that are not implemented throw a 
   * {@link java.lang.UnsupportedOperationException UnsupportedOperationException}.
   * @return Value of this tag.
  */
  getValue(): TType;
  /**
   * Set the value of this NBT tag.
   * @param newValue - the new value of this tag.
  */
  setValue(value: TType);
  /**
   * Clone the current NBT tag.
   * @return The cloned tag.
  */
  deepClone(): NbtBase<TType>;
  getHandle(): any;
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

}
declare module 'com.comphenix.protocol.reflect.ClassAnalyser.AsmMethod' {
import { Enum } from 'java.lang';
export class AsmOpcodes extends Enum<AsmOpcodes> {
  static readonly INVOKE_VIRTUAL: AsmOpcodes;
  static readonly INVOKE_SPECIAL: AsmOpcodes;
  static readonly INVOKE_STATIC: AsmOpcodes;
  static readonly INVOKE_INTERFACE: AsmOpcodes;
  static readonly INVOKE_DYNAMIC: AsmOpcodes;
  static valueOf(name: string): AsmOpcodes;
  static values(): AsmOpcodes[];
  static fromIntOpcode(opcode: number): AsmOpcodes;
}

}
declare module 'com.comphenix.protocol.reflect.cloning.AggregateCloner' {
import { AggregateCloner, Cloner } from 'com.comphenix.protocol.reflect.cloning';
import { Class } from 'java.lang';
import { InstanceProvider } from 'com.comphenix.protocol.reflect.instances';
/**
 * Supplies the cloner factories with necessary parameters.
 * 
 * @author Kristian
*/
export class BuilderParameters {
  /**
   * Retrieve the instance provider last set in the builder.
   * @return Current instance provider.
  */
  getInstanceProvider(): InstanceProvider;
  /**
   * Retrieve the aggregate cloner that is being built.
   * @return The parent cloner.
  */
  getAggregateCloner(): Cloner;
}
/**
 * Represents a builder for aggregate (combined) cloners.
 * 
 * @author Kristian
*/
export class Builder {
  /**
   * Create a new aggregate builder.
  */
  constructor();
  /**
   * Set the instance provider supplied to all cloners in this builder.
   * @param provider - new instance provider.
   * @return The current builder.
  */
  instanceProvider(provider: InstanceProvider): Builder;
  /**
   * Add the next cloner that will be considered in turn.
   * @param type - the type of the next cloner.
   * @return This builder.
  */
  andThen(type: Class<Cloner>): Builder;
  /**
   * Build a new aggregate cloner using the supplied values.
   * @return A new aggregate cloner.
  */
  build(): AggregateCloner;
}

}
declare module 'com.comphenix.protocol.reflect' {
import { Field, Constructor, Method, GenericDeclaration, Member } from 'java.lang.reflect';
import { Set, Optional, Collection, List, Map } from 'java.util';
import { RuntimeException, Throwable, Class } from 'java.lang';
import { DefaultInstances } from 'com.comphenix.protocol.reflect.instances';
import { ConcurrentMap } from 'java.util.concurrent';
import { ObjectPrinter } from 'com.comphenix.protocol.reflect.PrettyPrinter';
import { FieldAccessor } from 'com.comphenix.protocol.reflect.accessors';
import { AbstractFuzzyMatcher } from 'com.comphenix.protocol.reflect.fuzzy';
import { AsmMethod } from 'com.comphenix.protocol.reflect.ClassAnalyser';
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
   * @param source - fields to copy.
   * @param destination - fields to copy to.
   * @param commonType - type containing each field to copy.
  */
  copyTo(source: any, destination: any, commonType: Class<any>): void;
}
export class ClassAnalyser {
  /**
   * Retrieve the default instance.
   * @return The default.
  */
  static getDefault(): ClassAnalyser;
  /**
   * Retrieve every method calls in the given method.
   * @param method - the method to analyse.
   * @return The method calls.
   * @throws IOException Cannot access the parent class.
  */
  getMethodCalls(method: Method): AsmMethod[];
}
/**
 * Interface that converts generic objects into types and back.
 * 
 * @author Kristian
 * @param  The specific type.
*/
export class EquivalentConverter<T> {
  /**
   * Retrieve a copy of the generic type from a specific type.
   * 
   * This is usually a native net.minecraft.server type in Minecraft.
   * @param specific - the specific type we need to copy.
   * @return A copy of the specific type.
  */
  getGeneric(specific: T): any;
  /**
   * Retrieve a copy of the specific type using an instance of the generic type.
   * 
   * This is usually a wrapper type in the Bukkit API or ProtocolLib API.
   * @param generic - the generic type.
   * @return The new specific type.
  */
  getSpecific(generic: any): T;
  /**
   * Due to type erasure, we need to explicitly keep a reference to the specific type.
   * @return The specific type.
  */
  getSpecificType(): Class<T>;
}
/**
 * Utilities for working with fields by reflection. Adapted and refactored from
 * the dormant [reflect] Commons sandbox component.
 * 
 * The ability is provided to break the scoping restrictions coded by the
 * programmer. This can allow fields to be changed that shouldn't be. This
 * facility should be used with care.
 * 
 * @author Apache Software Foundation
 * @author Matt Benson
 * @since 2.5
 * @version $Id: FieldUtils.java 1057009 2011-01-09 19:48:06Z niallp $
*/
export class FieldUtils {
  /**
   * FieldUtils instances should NOT be constructed in standard programming.
   * 
   * This constructor is public to permit tools that require a JavaBean
   * instance to operate.
  */
  constructor();
  /**
   * Gets an accessible Field by name respecting scope.
   * Superclasses/interfaces will be considered.
   * 
   * @param cls the class to reflect, must not be null
   * @param fieldName the field name to obtain
   * @return the Field object
   * @throws IllegalArgumentException if the class or field name is null
  */
  static getField(cls: Class, fieldName: string): Field;
  /**
   * Gets an accessible Field by name breaking scope if
   * requested. Superclasses/interfaces will be considered.
   * 
   * @param cls the class to reflect, must not be null
   * @param fieldName the field name to obtain
   * @param forceAccess whether to break scope restrictions using the
   *            setAccessible method. False will
   *            only match public fields.
   * @return the Field object
   * @throws IllegalArgumentException if the class or field name is null
  */
  static getField(cls: Class, fieldName: string, forceAccess: boolean): Field;
  /**
   * Read an accessible static Field.
   * 
   * @param field to read
   * @return the field value
   * @throws IllegalArgumentException if the field is null or not static
   * @throws IllegalAccessException if the field is not accessible
  */
  static readStaticField(field: Field): any;
  /**
   * Read a static Field.
   * 
   * @param field to read
   * @param forceAccess whether to break scope restrictions using the
   *            setAccessible method.
   * @return the field value
   * @throws IllegalArgumentException if the field is null or not static
   * @throws IllegalAccessException if the field is not made accessible
  */
  static readStaticField(field: Field, forceAccess: boolean): any;
  /**
   * Read the named public static field. Superclasses will be considered.
   * 
   * @param cls the class to reflect, must not be null
   * @param fieldName the field name to obtain
   * @return the value of the field
   * @throws IllegalArgumentException if the class or field name is null
   * @throws IllegalAccessException if the field is not accessible
  */
  static readStaticField(cls: Class, fieldName: string): any;
  /**
   * Read the named static field. Superclasses will be considered.
   * 
   * @param cls the class to reflect, must not be null
   * @param fieldName the field name to obtain
   * @param forceAccess whether to break scope restrictions using the
   *            setAccessible method. False will
   *            only match public fields.
   * @return the Field object
   * @throws IllegalArgumentException if the class or field name is null
   * @throws IllegalAccessException if the field is not made accessible
  */
  static readStaticField(cls: Class, fieldName: string, forceAccess: boolean): any;
  /**
   * Read an accessible Field.
   * 
   * @param field the field to use
   * @param target the object to call on, may be null for static fields
   * @return the field value
   * @throws IllegalArgumentException if the field is null
   * @throws IllegalAccessException if the field is not accessible
  */
  static readField(field: Field, target: any): any;
  /**
   * Read a Field.
   * 
   * @param field the field to use
   * @param target the object to call on, may be null for static fields
   * @param forceAccess whether to break scope restrictions using the
   *            setAccessible method.
   * @return the field value
   * @throws IllegalArgumentException if the field is null
   * @throws IllegalAccessException if the field is not made accessible
  */
  static readField(field: Field, target: any, forceAccess: boolean): any;
  /**
   * Read the named public field. Superclasses will be considered.
   * 
   * @param target the object to reflect, must not be null
   * @param fieldName the field name to obtain
   * @return the value of the field
   * @throws IllegalArgumentException if the class or field name is null
   * @throws IllegalAccessException if the named field is not public
  */
  static readField(target: any, fieldName: string): any;
  /**
   * Read the named field. Superclasses will be considered.
   * 
   * @param target the object to reflect, must not be null
   * @param fieldName the field name to obtain
   * @param forceAccess whether to break scope restrictions using the
   *            setAccessible method. False will
   *            only match public fields.
   * @return the field value
   * @throws IllegalArgumentException if the class or field name is null
   * @throws IllegalAccessException if the named field is not made accessible
  */
  static readField(target: any, fieldName: string, forceAccess: boolean): any;
  /**
   * Write a public static Field.
   * 
   * @param field to write
   * @param value to set
   * @throws IllegalArgumentException if the field is null or not static
   * @throws IllegalAccessException if the field is not public or is final
  */
  static writeStaticField(field: Field, value: any): void;
  /**
   * Write a static Field.
   * 
   * @param field to write
   * @param value to set
   * @param forceAccess whether to break scope restrictions using the
   *            setAccessible method. False will
   *            only match public fields.
   * @throws IllegalArgumentException if the field is null or not static
   * @throws IllegalAccessException if the field is not made accessible or is
   *             final
  */
  static writeStaticField(field: Field, value: any, forceAccess: boolean): void;
  /**
   * Write a named public static Field. Superclasses will be considered.
   * 
   * @param cls Class on which the Field is to be found
   * @param fieldName to write
   * @param value to set
   * @throws IllegalArgumentException if the field cannot be located or is not
   *             static
   * @throws IllegalAccessException if the field is not public or is final
  */
  static writeStaticField(cls: Class, fieldName: string, value: any): void;
  /**
   * Write a named static Field. Superclasses will be considered.
   * 
   * @param cls Class on which the Field is to be found
   * @param fieldName to write
   * @param value to set
   * @param forceAccess whether to break scope restrictions using the
   *            setAccessible method. False will
   *            only match public fields.
   * @throws IllegalArgumentException if the field cannot be located or is not
   *             static
   * @throws IllegalAccessException if the field is not made accessible or is
   *             final
  */
  static writeStaticField(cls: Class, fieldName: string, value: any, forceAccess: boolean): void;
  static writeStaticFinalField(clazz: Class<any>, fieldName: string, value: any, forceAccess: boolean): void;
  /**
   * Write an accessible field.
   * 
   * @param field to write
   * @param target the object to call on, may be null for static fields
   * @param value to set
   * @throws IllegalArgumentException if the field is null
   * @throws IllegalAccessException if the field is not accessible or is final
  */
  static writeField(field: Field, target: any, value: any): void;
  /**
   * Write a field.
   * 
   * @param field to write
   * @param target the object to call on, may be null for static fields
   * @param value to set
   * @param forceAccess whether to break scope restrictions using the
   *            setAccessible method. False will
   *            only match public fields.
   * @throws IllegalArgumentException if the field is null
   * @throws IllegalAccessException if the field is not made accessible or is
   *             final
  */
  static writeField(field: Field, target: any, value: any, forceAccess: boolean): void;
  /**
   * Write a public field. Superclasses will be considered.
   * 
   * @param target the object to reflect, must not be null
   * @param fieldName the field name to obtain
   * @param value to set
   * @throws IllegalArgumentException if target or
   *             fieldName is null
   * @throws IllegalAccessException if the field is not accessible
  */
  static writeField(target: any, fieldName: string, value: any): void;
  /**
   * Write a field. Superclasses will be considered.
   * 
   * @param target the object to reflect, must not be null
   * @param fieldName the field name to obtain
   * @param value to set
   * @param forceAccess whether to break scope restrictions using the
   *            setAccessible method. False will
   *            only match public fields.
   * @throws IllegalArgumentException if target or
   *             fieldName is null
   * @throws IllegalAccessException if the field is not made accessible
  */
  static writeField(target: any, fieldName: string, value: any, forceAccess: boolean): void;
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
   * @param source - the class we'll use.
   * @return A fuzzy reflection instance.
  */
  static fromClass(source: Class<any>): FuzzyReflection;
  /**
   * Retrieves a fuzzy reflection instance from a given class.
   * @param source - the class we'll use.
   * @param forceAccess - whether or not to override scope restrictions.
   * @return A fuzzy reflection instance.
  */
  static fromClass(source: Class<any>, forceAccess: boolean): FuzzyReflection;
  /**
   * Retrieves a fuzzy reflection instance from an object.
   * @param reference - the object we'll use.
   * @return A fuzzy reflection instance that uses the class of the given object.
  */
  static fromObject(reference: any): FuzzyReflection;
  /**
   * Retrieves a fuzzy reflection instance from an object.
   * @param reference - the object we'll use.
   * @param forceAccess - whether or not to override scope restrictions.
   * @return A fuzzy reflection instance that uses the class of the given object.
  */
  static fromObject(reference: any, forceAccess: boolean): FuzzyReflection;
  /**
   * Retrieve the value of the first field of the given type.
   * @param  Type
   * @param instance - the instance to retrieve from.
   * @param fieldClass - type of the field to retrieve.
   * @param forceAccess - whether or not to look for private and protected fields.
   * @return The value of that field.
   * @throws IllegalArgumentException If the field cannot be found.
  */
  static getFieldValue<T>(instance: any, fieldClass: Class<T>, forceAccess: boolean): T;
  /**
   * Retrieves the underlying class.
   * @return The underlying class.
  */
  getSource(): Class<any>;
  /**
   * Retrieve the singleton instance of a class, from a method or field.
   * @return The singleton instance.
   * @throws IllegalStateException If the class has no singleton.
  */
  getSingleton(): any;
  /**
   * Retrieve the first method that matches.
   * 
   * ForceAccess must be TRUE in order for this method to access private, protected and package level method.
   * @param matcher - the matcher to use.
   * @return The first method that satisfies the given matcher.
   * @throws IllegalArgumentException If the method cannot be found.
  */
  getMethod(matcher: AbstractFuzzyMatcher<MethodInfo>): Method;
  /**
   * Retrieve a method that matches. If there are multiple methods that match, the first one with the preferred
   * name is selected.
   * 
   * ForceAccess must be TRUE in order for this method to access private, protected and package level method.
   * @param matcher - the matcher to use.
   * @param preferred - the preferred name.
   * @return The first method that satisfies the given matcher.
   * @throws IllegalArgumentException If the method cannot be found.
  */
  getMethod(matcher: AbstractFuzzyMatcher<MethodInfo>, preferred: string): Method;
  /**
   * Retrieve a list of every method that matches the given matcher.
   * 
   * ForceAccess must be TRUE in order for this method to access private, protected and package level methods.
   * @param matcher - the matcher to apply.
   * @return List of found methods.
  */
  getMethodList(matcher: AbstractFuzzyMatcher<MethodInfo>): Method[];
  /**
   * Retrieves a method by looking at its name.
   * @param nameRegex -  regular expression that will match method names.
   * @return The first method that satisfies the regular expression.
   * @throws IllegalArgumentException If the method cannot be found.
  */
  getMethodByName(nameRegex: string): Method;
  /**
   * Retrieves a method by looking at the parameter types only.
   * @param name - potential name of the method. Only used by the error mechanism.
   * @param args - parameter types of the method to find.
   * @return The first method that satisfies the parameter types.
   * @throws IllegalArgumentException If the method cannot be found.
  */
  getMethodByParameters(name: string, ...args: Class[]): Method;
  /**
   * Retrieves a method by looking at the parameter types and return type only.
   * @param name - potential name of the method. Only used by the error mechanism.
   * @param returnType - return type of the method to find.
   * @param args - parameter types of the method to find.
   * @return The first method that satisfies the parameter types.
   * @throws IllegalArgumentException If the method cannot be found.
  */
  getMethodByParameters(name: string, returnType: Class<any>, args: Class[]): Method;
  /**
   * Retrieves a method by looking at the parameter types and return type only.
   * @param name - potential name of the method. Only used by the error mechanism.
   * @param returnTypeRegex - regular expression matching the return type of the method to find.
   * @param argsRegex - regular expressions of the matching parameter types.
   * @return The first method that satisfies the parameter types.
   * @throws IllegalArgumentException If the method cannot be found.
  */
  getMethodByParameters(name: string, returnTypeRegex: string, argsRegex: string[]): Method;
  /**
   * Invoke a method by return type and parameters alone.
   * 
   * The parameters must be non-null for this to work.
   * @param target - the instance.
   * @param name - the name of the method - for debugging.
   * @param returnType - the expected return type.
   * @param parameters - the parameters.
   * @return The return value, or NULL.
  */
  invokeMethod(target: any, name: string, returnType: Class<any>, ...parameters: any[]): any;
  /**
   * Retrieves every method that has the given parameter types and return type.
   * @param returnType - return type of the method to find.
   * @param args - parameter types of the method to find.
   * @return Every method that satisfies the given constraints.
  */
  getMethodListByParameters(returnType: Class<any>, args: Class[]): Method[];
  /**
   * Retrieves a field by name.
   * @param nameRegex - regular expression that will match a field name.
   * @return The first field to match the given expression.
   * @throws IllegalArgumentException If the field cannot be found.
  */
  getFieldByName(nameRegex: string): Field;
  /**
   * Retrieves the first field with a type equal to or more specific to the given type.
   * @param name - name the field probably is given. This will only be used in the error message.
   * @param type - type of the field to find.
   * @return The first field with a type that is an instance of the given type.
  */
  getFieldByType(name: string, type: Class<any>): Field;
  /**
   * Retrieves every field with a type equal to or more specific to the given type.
   * @param type - type of the fields to find.
   * @return Every field with a type that is an instance of the given type.
  */
  getFieldListByType(type: Class<any>): Field[];
  /**
   * Retrieves a field with a given type and parameters. This is most useful
   * when dealing with Collections.
   *
   * @param fieldType Type of the field
   * @param params Variable length array of type parameters
   * @return The field
   *
   * @throws IllegalArgumentException If the field cannot be found
  */
  getParameterizedField(fieldType: Class<any>, ...params: Class[]): Field;
  /**
   * Retrieve the first field that matches.
   * 
   * ForceAccess must be TRUE in order for this method to access private, protected and package level fields.
   * @param matcher - the matcher to use.
   * @return The first method that satisfies the given matcher.
   * @throws IllegalArgumentException If the method cannot be found.
  */
  getField(matcher: AbstractFuzzyMatcher<Field>): Field;
  /**
   * Retrieve a list of every field that matches the given matcher.
   * 
   * ForceAccess must be TRUE in order for this method to access private, protected and package level fields.
   * @param matcher - the matcher to apply.
   * @return List of found fields.
  */
  getFieldList(matcher: AbstractFuzzyMatcher<Field>): Field[];
  /**
   * Retrieves a field by type.
   * 
   * Note that the type is matched using the full canonical representation, i.e.:
   * 
   *     java.util.List
   *     net.comphenix.xp.ExperienceMod
   * 
   * @param typeRegex - regular expression that will match the field type.
   * @return The first field with a type that matches the given regular expression.
   * @throws IllegalArgumentException If the field cannot be found.
  */
  getFieldByType(typeRegex: string): Field;
  /**
   * Retrieves a field by type.
   * 
   * Note that the type is matched using the full canonical representation, i.e.:
   * 
   *     java.util.List
   *     net.comphenix.xp.ExperienceMod
   * 
   * @param typeRegex - regular expression that will match the field type.
   * @param ignored - types to ignore.
   * @return The first field with a type that matches the given regular expression.
   * @throws IllegalArgumentException If the field cannot be found.
  */
  getFieldByType(typeRegex: string, ignored: Set<Class>): Field;
  /**
   * Retrieve the first constructor that matches.
   * 
   * ForceAccess must be TRUE in order for this method to access private, protected and package level constructors.
   * @param matcher - the matcher to use.
   * @return The first constructor that satisfies the given matcher.
   * @throws IllegalArgumentException If the constructor cannot be found.
  */
  getConstructor(matcher: AbstractFuzzyMatcher<MethodInfo>): Constructor<any>;
  /**
   * Retrieve every method as a map over names.
   * 
   * Note that overloaded methods will only occur once in the resulting map.
   * @param methods - every method.
   * @return A map over every given method.
  */
  getMappedMethods(methods: Method[]): Map<string, Method>;
  /**
   * Retrieve a list of every constructor that matches the given matcher.
   * 
   * ForceAccess must be TRUE in order for this method to access private, protected and package level constructors.
   * @param matcher - the matcher to apply.
   * @return List of found constructors.
  */
  getConstructorList(matcher: AbstractFuzzyMatcher<MethodInfo>): Constructor<any>[];
  /**
   * Retrieves all private and public fields in declared order (after JDK 1.5).
   * 
   * Private, protected and package fields are ignored if forceAccess is FALSE.
   * @return Every field.
  */
  getFields(): Set<Field>;
  /**
   * Retrieves all private and public fields, up until a certain superclass.
   * @param excludeClass - the class (and its superclasses) to exclude from the search.
   * @return Every such declared field.
  */
  getDeclaredFields(excludeClass: Class<any>): Set<Field>;
  /**
   * Retrieves all private and public methods in declared order (after JDK 1.5).
   * 
   * Private, protected and package methods are ignored if forceAccess is FALSE.
   * @return Every method.
  */
  getMethods(): Set<Method>;
  /**
   * Retrieves all private and public constructors in declared order (after JDK 1.5).
   * 
   * Private, protected and package constructors are ignored if forceAccess is FALSE.
   * @return Every constructor.
  */
  getConstructors(): Set<Constructor<any>>;
  /**
   * Retrieves whether or not not to override any scope restrictions.
   * @return TRUE if we override scope, FALSE otherwise.
  */
  isForceAccess(): boolean;
  /**
   * Sets whether or not not to override any scope restrictions.
   * @param forceAccess - TRUE if we override scope, FALSE otherwise.
  */
  setForceAccess(forceAccess: boolean): void;
}
export class ExactReflection {
  /**
   * Retrieves an exact reflection instance from a given class.
   * @param source - the class we'll use.
   * @return A fuzzy reflection instance.
  */
  static fromClass(source: Class<any>): ExactReflection;
  /**
   * Retrieves an exact reflection instance from a given class.
   * @param source - the class we'll use.
   * @param forceAccess - whether or not to override scope restrictions.
   * @return A fuzzy reflection instance.
  */
  static fromClass(source: Class<any>, forceAccess: boolean): ExactReflection;
  /**
   * Retrieves an exact reflection instance from an object.
   * @param reference - the object we'll use.
   * @return A fuzzy reflection instance that uses the class of the given object.
  */
  static fromObject(reference: any): ExactReflection;
  /**
   * Retrieves an exact reflection instance from an object.
   * @param reference - the object we'll use.
   * @param forceAccess - whether or not to override scope restrictions.
   * @return A fuzzy reflection instance that uses the class of the given object.
  */
  static fromObject(reference: any, forceAccess: boolean): ExactReflection;
  /**
   * Retrieve the first method in the class hierachy with the given name and parameters.
   * 
   * If {@link #isForceAccess()} is TRUE, we will also search for protected and private methods.
   * @param methodName - the method name to find, or NULL to look for everything.
   * @param parameters - the parameters.
   * @return The first matched method.
   * @throws IllegalArgumentException If we cannot find a method by this name.
  */
  getMethod(methodName: string, ...parameters: Class[]): Method;
  /**
   * Retrieve a field in the class hierachy by the given name.
   * 
   * If {@link #isForceAccess()} is TRUE, we will also search for protected and private fields.
   * @param fieldName - the field name. Cannot be NULL.
   * @return The first matched field.
  */
  getField(fieldName: string): Field;
  /**
   * Retrieve an {@link ExactReflection} object where scope restrictions are ignored.
   * @return A copy of the current object.
  */
  forceAccess(): ExactReflection;
  /**
   * Determine if we are overriding scope restrictions and will also find 
   * private, protected or package members.
   * @return TRUE if we are, FALSE otherwise.
  */
  isForceAccess(): boolean;
  /**
   * Retrieve the source class we are searching.
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
   * @param method - the method to wrap.
   * @return The wrapped method.
  */
  static fromMethod(method: Method): MethodInfo;
  /**
   * Construct a list of method infos from a given array of methods.
   * @param methods - array of methods.
   * @return Method info list.
  */
  static fromMethods(methods: Method[]): Collection<MethodInfo>;
  /**
   * Construct a list of method infos from a given collection of methods.
   * @param methods - list of methods.
   * @return Method info list.
  */
  static fromMethods(methods: Collection<Method>): MethodInfo[];
  /**
   * Wraps a constructor as a method information object.
   * @param constructor - the constructor to wrap.
   * @return A wrapped constructor.
  */
  static fromConstructor(constructor: Constructor<any>): MethodInfo;
  /**
   * Construct a list of method infos from a given array of constructors.
   * @param constructors - array of constructors.
   * @return Method info list.
  */
  static fromConstructors(constructors: Constructor[]): Collection<MethodInfo>;
  /**
   * Construct a list of method infos from a given collection of constructors.
   * @param constructors - list of constructors.
   * @return Method info list.
  */
  static fromConstructors(constructors: Collection<Constructor<any>>): MethodInfo[];
  /**
   * Returns a string describing this method or constructor
   * @return A string representation of the object.
   * @see Method#toString()
   * @see Constructor#toString()
  */
  toString(): string;
  /**
   * Returns a string describing this method or constructor, including type parameters.
   * @return A string describing this Method, include type parameters
   * @see Method#toGenericString()
   * @see Constructor#toGenericString()
  */
  toGenericString(): string;
  /**
   * Returns an array of Class objects that represent the types of the exceptions declared to be thrown by the
   * underlying method or constructor represented by this MethodInfo object.
   * @return The exception types declared as being thrown by the method or constructor this object represents.
   * @see Method#getExceptionTypes()
   * @see Constructor#getExceptionTypes()
  */
  getExceptionTypes(): Class[];
  /**
   * Returns a Class object that represents the formal return type of the method or constructor
   * represented by this MethodInfo object.
   * 
   * This is always {@link Void} for constructors.
   * @return The return value, or Void if a constructor.
   * @see Method#getReturnType()
  */
  getReturnType(): Class<any>;
  /**
   * Returns an array of Class objects that represent the formal parameter types, in declaration order,
   * of the method or constructor represented by this MethodInfo object.
   * @return The parameter types for the method or constructor this object represents.
   * @see Method#getParameterTypes()
   * @see Constructor#getParameterTypes()
  */
  getParameterTypes(): Class[];
  /**
   * Determine if this is a constructor or not.
   * @return TRUE if this represents a constructor, FALSE otherwise.
  */
  isConstructor(): boolean;
}
export interface MethodInfo extends GenericDeclaration, Member {}
/**
 * Represents a traditional int field enum.
 * 
 * @author Kristian
*/
export class IntEnum {
  /**
   * Registers every declared integer field.
  */
  constructor();
  /**
   * Determines whether or not the given member exists.
   * @param id - the ID of the member to find.
   * @return TRUE if a member with the given ID exists, FALSE otherwise.
  */
  hasMember(id: number): boolean;
  /**
   * Retrieve the ID of the member with the given name.
   * @param name - name of member to retrieve.
   * @return ID of the member, or NULL if not found.
  */
  valueOf(name: string): number;
  /**
   * Retrieve the name of the member with the given id.
   * @param id - id of the member to retrieve.
   * @return Declared name of the member, or NULL if not found.
  */
  getDeclaredName(id: number): string;
  /**
   * Retrieve the ID of every registered member.
   * @return Enumeration of every value.
  */
  values(): Set<number>;
}
/**
 * Represents a field that will revert to its original state when this class is garbaged collected.
 * 
 * @author Kristian
*/
export class VolatileField {
  /**
   * Initializes a volatile field with an associated object.
   * @param field - the field.
   * @param container - the object this field belongs to.
  */
  constructor(field: Field, container: any);
  /**
   * Initializes a volatile field with an associated object.
   * @param field - the field.
   * @param container - the object this field belongs to.
   * @param forceAccess - whether or not to override any scope restrictions.
  */
  constructor(field: Field, container: any, forceAccess: boolean);
  /**
   * Initializes a volatile field with the given accessor and associated object.
   * @param accessor - the field accessor.
   * @param container - the object this field belongs to.
  */
  constructor(accessor: FieldAccessor, container: any);
  /**
   * Retrieves the current field.
   * @return The stored field.
  */
  getField(): Field;
  /**
   * Retrieves the object the field is stored.
   * @return The reference object.
  */
  getContainer(): any;
  /**
   * Retrieves whether or not not to override any scope restrictions.
   * @return TRUE if we override scope, FALSE otherwise.
  */
  isForceAccess(): boolean;
  /**
   * Sets whether or not not to override any scope restrictions.
   * @param forceAccess - TRUE if we override scope, FALSE otherwise.
  */
  setForceAccess(forceAccess: boolean): void;
  /**
   * Retrieves the current field value.
   * @return The current field value.
  */
  getValue(): any;
  /**
   * Retrieves the field value before the previous setValue(), unless saveValue() has been called.
   * @return Previous value.
  */
  getOldValue(): any;
  /**
   * Sets the current value. This will be reverted unless saveValue() is called.
   * @param newValue - new field value.
  */
  setValue(value: any);
  /**
   * Reapply the current changed value.
   * 
   * Also refresh the previously set value.
  */
  refreshValue(): void;
  /**
   * Ensure that the current value is still set after this class has been garbaged collected.
  */
  saveValue(): void;
  /**
   * Revert to the previously set value.
  */
  revertValue(): void;
  /**
   * Retrieve a synchronized version of the current field.
   * @return A synchronized volatile field.
  */
  toSynchronized(): VolatileField;
  /**
   * Determine whether or not we'll need to revert the value.
   * @return True if it is set, false if not.
  */
  isCurrentSet(): boolean;
  toString(): string;
}
/**
 * Provides list-oriented access to the fields of a Minecraft packet.
 * 
 * Implemented by using reflection. Use a CompiledStructureModifier, if speed is essential.
 * 
 * @author Kristian
 * @param  Type of the fields to retrieve.
*/
export class StructureModifier<TField> {
  /**
   * Creates a structure modifier.
   * @param targetType - the structure to modify.
  */
  constructor(targetType: Class);
  /**
   * Creates a structure modifier.
   * @param targetType - the structure to modify.
   * @param useStructureCompiler - whether or not to use a structure compiler.
  */
  constructor(targetType: Class, useStructureCompiler: boolean);
  /**
   * Creates a structure modifier.
   * @param targetType - the structure to modify.
   * @param superclassExclude - a superclass to exclude.
   * @param requireDefault - whether or not we will be using writeDefaults().
  */
  constructor(targetType: Class, superclassExclude: Class, requireDefault: boolean);
  /**
   * Creates a structure modifier.
   * @param targetType - the structure to modify.
   * @param superclassExclude - a superclass to exclude.
   * @param requireDefault - whether or not we will be using writeDefaults().
   * @param useStructureCompiler - whether or not to automatically compile this structure modifier.
  */
  constructor(targetType: Class, superclassExclude: Class, requireDefault: boolean, useStructureCompiler: boolean);
  /**
   * Reads the value of a field given its index.
   * 
   * Note: This method is prone to exceptions (there are currently 5 total throw statements). It is recommended that you
   * use {@link #readSafely(int)}, which returns `null` if the field doesn't exist, instead of throwing an exception.
   * 
   * @param fieldIndex - index of the field.
   * @return Value of the field.
   * @throws FieldAccessException if the field doesn't exist, or it cannot be accessed under the current security contraints.
  */
  read(fieldIndex: number): TField;
  /**
   * Reads the value of a field only if it exists. If the field does not exist, `null` is returned.
   * 
   * As its name implies, this method is a much safer alternative to {@link #read(int)}.
   * In addition to throwing less exceptions and thereby causing less console spam, this
   * method makes providing backwards compatiblity signficiantly easier, as shown below:
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
   * @throws FieldAccessException if the field cannot be accessed under the current security constraints.
  */
  readSafely(fieldIndex: number): TField;
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
  optionRead(fieldIndex: number): Optional<TField>;
  /**
   * Determine whether or not a field is read-only (final).
   * @param fieldIndex - index of the field.
   * @return TRUE if the field by the given index is read-only, FALSE otherwise.
  */
  isReadOnly(fieldIndex: number): boolean;
  /**
   * Determine if a given field is public or not.
   * @param fieldIndex - field index.
   * @return TRUE if the field is public, FALSE otherwise.
  */
  isPublic(fieldIndex: number): boolean;
  /**
   * Set whether or not a field should be treated as read only.
   * 
   * Note that changing the read-only state to TRUE will only work if the current
   * field was recently read-only or the current structure modifier hasn't been compiled yet.
   * 
   * @param fieldIndex - index of the field.
   * @param value - TRUE if this field should be read only, FALSE otherwise.
   * @throws FieldAccessException If we cannot modify the read-only status.
  */
  setReadOnly(fieldIndex: number, value: boolean): void;
  /**
   * Writes the value of a field given its index.
   * @param fieldIndex - index of the field.
   * @param value - new value of the field.
   * @return This structure modifier - for chaining.
   * @throws FieldAccessException The field doesn't exist, or it cannot be accessed under the current security contraints.
  */
  write(fieldIndex: number, value: TField): StructureModifier<TField>;
  /**
   * Writes the value of a given field IF and ONLY if it exists.
   * @param fieldIndex - index of the potential field.
   * @param value - new value of the field.
   * @return This structure modifer - for chaining.
   * @throws FieldAccessException The field cannot be accessed under the current security contraints.
  */
  writeSafely(fieldIndex: number, value: TField): StructureModifier<TField>;
  /**
   * Retrieves a structure modifier that only reads and writes fields of a given type.
   * @param  Type
   * @param fieldType - the type, or supertype, of every field to modify.
   * @return A structure modifier for fields of this type.
  */
  withType<T>(fieldType: Class): StructureModifier<T>;
  /**
   * Sets all non-primitive fields to a more fitting default value. See {@link DefaultInstances#getDefault(Class)}.
   * @return The current structure modifier - for chaining.
   * @throws FieldAccessException If we're unable to write to the fields due to a security limitation.
  */
  writeDefaults(): StructureModifier<TField>;
  /**
   * Retrieves a structure modifier that only reads and writes fields of a given type.
   * @param  Type
   * @param fieldType - the type, or supertype, of every field to modify.
   * @param converter - converts objects into the given type.
   * @return A structure modifier for fields of this type.
  */
  withType<T>(fieldType: Class, converter: EquivalentConverter<T>): StructureModifier<T>;
  /**
   * Retrieves a structure modifier that only reads and writes fields of a given type.
   * @param  Type
   * @param fieldType - the type, or supertype, of every field to modify.
   * @param converter - converts objects into the given type.
   * @param paramTypes - field type parameters
   * @return A structure modifier for fields of this type.
  */
  withParamType<T>(fieldType: Class, converter: EquivalentConverter<T>, ...paramTypes: Class[]): StructureModifier<T>;
  /**
   * Retrieves the common type of each field.
   * @return Common type of each field.
  */
  getFieldType(): Class;
  /**
   * Retrieves the type of the object we're modifying.
   * @return Type of the object.
  */
  getTargetType(): Class;
  /**
   * Retrieves the object we're currently modifying.
   * @return Object we're modifying.
  */
  getTarget(): any;
  /**
   * Retrieve the number of readable types.
   * @return Readable types.
  */
  size(): number;
  /**
   * Retrieves a structure modifier of the same type for a different object target.
   * @param target - different target of the same type.
   * @return Structure modifier with the new target.
  */
  withTarget(target: any): StructureModifier<TField>;
  /**
   * Retrieves a list of the fields matching the constraints of this structure modifier.
   * @return List of fields.
  */
  getFields(): Field[];
  /**
   * Retrieve a field by index.
   * @param fieldIndex - index of the field to retrieve.
   * @return The field represented with the given index.
   * @throws IllegalArgumentException If no field with the given index can be found.
  */
  getField(fieldIndex: number): Field;
  /**
   * Retrieve every value stored in the fields of the current type.
   * @return Every field value.
   * @throws FieldAccessException Unable to access one or all of the fields
  */
  getValues(): TField[];
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
   * @param object - the object to serialize.
   * @return String representation of the class.
   * @throws IllegalAccessException If the object is null
  */
  static printObject(object: any): string;
  /**
   * Print the contents of an object.
   * @param object - the object to serialize.
   * @param start - class to start at.
   * @param stop - superclass that will stop the process.
   * @return String representation of the class
   * @throws IllegalAccessException If the object is null
  */
  static printObject(object: any, start: Class<any>, stop: Class<any>): string;
  /**
   * Print the contents of an object.
   * @param object - the object to serialize.
   * @param start - class to start at.
   * @param stop - superclass that will stop the process.
   * @param hierachyDepth - maximum recursion level.
   * @return String representation of the class.
   * @throws IllegalAccessException If the object is null
  */
  static printObject(object: any, start: Class<any>, stop: Class<any>, hierachyDepth: number): string;
  /**
   * Print the contents of an object.
   * @param object - the object to serialize.
   * @param start - class to start at.
   * @param stop - superclass that will stop the process.
   * @param hierachyDepth - maximum recursion level.
   * @param printer - a generic object printer.
   * @return String representation of the class.
   * @throws IllegalAccessException If the object is null
  */
  static printObject(object: any, start: Class<any>, stop: Class<any>, hierachyDepth: number, printer: ObjectPrinter): string;
}
export class MethodUtils {
  /**
   * Set whether methods should be cached for greater performance or not,
   * default is true.
   *
   * @param cacheMethods true if methods should be
   * cached for greater performance, otherwise false
   * @since 1.8.0
  */
  static setCacheMethods(cacheMethods: boolean): void;
  /**
   * Clear the method cache.
   * @return the number of cached methods cleared
   * @since 1.8.0
  */
  static clearCache(): number;
  /**
   * Invoke a named method whose parameter type matches the object type.
   *
   * The behaviour of this method is less deterministic
   * than invokeExactMethod().
   * It loops through all methods with names that match
   * and then executes the first it finds with compatable parameters.
   *
   * This method supports calls to methods taking primitive parameters
   * via passing in wrapping classes. So, for example, a Boolean class
   * would match a boolean primitive.
   *
   *  This is a convenient wrapper for
   * {@link #invokeMethod(Object object,String methodName,Object [] args)}.
   * 
   *
   * @param object invoke method on this object
   * @param methodName get method with this name
   * @param arg use this argument
   * @return The value returned by the invoked method
   *
   * @throws NoSuchMethodException if there is no such accessible method
   * @throws InvocationTargetException wraps an exception thrown by the
   *  method invoked
   * @throws IllegalAccessException if the requested method is not accessible
   *  via reflection
  */
  static invokeMethod(object: any, methodName: string, arg: any): any;
  /**
   * Invoke a named method whose parameter type matches the object type.
   *
   * The behaviour of this method is less deterministic
   * than {@link #invokeExactMethod(Object object,String methodName,Object [] args)}.
   * It loops through all methods with names that match
   * and then executes the first it finds with compatable parameters.
   *
   * This method supports calls to methods taking primitive parameters
   * via passing in wrapping classes. So, for example, a Boolean class
   * would match a boolean primitive.
   *
   *  This is a convenient wrapper for
   * {@link #invokeMethod(Object object,String methodName,Object [] args,Class[] parameterTypes)}.
   * 
   *
   * @param object invoke method on this object
   * @param methodName get method with this name
   * @param args use these arguments - treat null as empty array
   * @return The value returned by the invoked method
   *
   * @throws NoSuchMethodException if there is no such accessible method
   * @throws InvocationTargetException wraps an exception thrown by the
   *  method invoked
   * @throws IllegalAccessException if the requested method is not accessible
   *  via reflection
  */
  static invokeMethod(object: any, methodName: string, args: any[]): any;
  /**
   * Invoke a named method whose parameter type matches the object type.
   *
   * The behaviour of this method is less deterministic
   * than {@link
   * #invokeExactMethod(Object object,String methodName,Object [] args,Class[] parameterTypes)}.
   * It loops through all methods with names that match
   * and then executes the first it finds with compatable parameters.
   *
   * This method supports calls to methods taking primitive parameters
   * via passing in wrapping classes. So, for example, a Boolean class
   * would match a boolean primitive.
   *
   *
   * @param object invoke method on this object
   * @param methodName get method with this name
   * @param args use these arguments - treat null as empty array
   * @param parameterTypes match these parameters - treat null as empty array
   * @return The value returned by the invoked method
   *
   * @throws NoSuchMethodException if there is no such accessible method
   * @throws InvocationTargetException wraps an exception thrown by the
   *  method invoked
   * @throws IllegalAccessException if the requested method is not accessible
   *  via reflection
  */
  static invokeMethod(object: any, methodName: string, args: any[], parameterTypes: Class[]): any;
  /**
   * Invoke a method whose parameter type matches exactly the object
   * type.
   *
   *  This is a convenient wrapper for
   * {@link #invokeExactMethod(Object object,String methodName,Object [] args)}.
   * 
   *
   * @param object invoke method on this object
   * @param methodName get method with this name
   * @param arg use this argument
   * @return The value returned by the invoked method
   *
   * @throws NoSuchMethodException if there is no such accessible method
   * @throws InvocationTargetException wraps an exception thrown by the
   *  method invoked
   * @throws IllegalAccessException if the requested method is not accessible
   *  via reflection
  */
  static invokeExactMethod(object: any, methodName: string, arg: any): any;
  /**
   * Invoke a method whose parameter types match exactly the object
   * types.
   *
   *  This uses reflection to invoke the method obtained from a call to
   * getAccessibleMethod().
   *
   * @param object invoke method on this object
   * @param methodName get method with this name
   * @param args use these arguments - treat null as empty array
   * @return The value returned by the invoked method
   *
   * @throws NoSuchMethodException if there is no such accessible method
   * @throws InvocationTargetException wraps an exception thrown by the
   *  method invoked
   * @throws IllegalAccessException if the requested method is not accessible
   *  via reflection
  */
  static invokeExactMethod(object: any, methodName: string, args: any[]): any;
  /**
   * Invoke a method whose parameter types match exactly the parameter
   * types given.
   *
   * This uses reflection to invoke the method obtained from a call to
   * getAccessibleMethod().
   *
   * @param object invoke method on this object
   * @param methodName get method with this name
   * @param args use these arguments - treat null as empty array
   * @param parameterTypes match these parameters - treat null as empty array
   * @return The value returned by the invoked method
   *
   * @throws NoSuchMethodException if there is no such accessible method
   * @throws InvocationTargetException wraps an exception thrown by the
   *  method invoked
   * @throws IllegalAccessException if the requested method is not accessible
   *  via reflection
  */
  static invokeExactMethod(object: any, methodName: string, args: any[], parameterTypes: Class[]): any;
  /**
   * Invoke a static method whose parameter types match exactly the parameter
   * types given.
   *
   * This uses reflection to invoke the method obtained from a call to
   * {@link #getAccessibleMethod(Class, String, Class[])}.
   *
   * @param objectClass invoke static method on this class
   * @param methodName get method with this name
   * @param args use these arguments - treat null as empty array
   * @param parameterTypes match these parameters - treat null as empty array
   * @return The value returned by the invoked method
   *
   * @throws NoSuchMethodException if there is no such accessible method
   * @throws InvocationTargetException wraps an exception thrown by the
   *  method invoked
   * @throws IllegalAccessException if the requested method is not accessible
   *  via reflection
   * @since 1.8.0
  */
  static invokeExactStaticMethod(objectClass: Class, methodName: string, args: any[], parameterTypes: Class[]): any;
  /**
   * Invoke a named static method whose parameter type matches the object type.
   *
   * The behaviour of this method is less deterministic
   * than {@link #invokeExactMethod(Object, String, Object[], Class[])}.
   * It loops through all methods with names that match
   * and then executes the first it finds with compatable parameters.
   *
   * This method supports calls to methods taking primitive parameters
   * via passing in wrapping classes. So, for example, a Boolean class
   * would match a boolean primitive.
   *
   *  This is a convenient wrapper for
   * {@link #invokeStaticMethod(Class objectClass,String methodName,Object [] args)}.
   * 
   *
   * @param objectClass invoke static method on this class
   * @param methodName get method with this name
   * @param arg use this argument
   * @return The value returned by the invoked method
   *
   * @throws NoSuchMethodException if there is no such accessible method
   * @throws InvocationTargetException wraps an exception thrown by the
   *  method invoked
   * @throws IllegalAccessException if the requested method is not accessible
   *  via reflection
   * @since 1.8.0
  */
  static invokeStaticMethod(objectClass: Class, methodName: string, arg: any): any;
  /**
   * Invoke a named static method whose parameter type matches the object type.
   *
   * The behaviour of this method is less deterministic
   * than {@link #invokeExactMethod(Object object,String methodName,Object [] args)}.
   * It loops through all methods with names that match
   * and then executes the first it finds with compatable parameters.
   *
   * This method supports calls to methods taking primitive parameters
   * via passing in wrapping classes. So, for example, a Boolean class
   * would match a boolean primitive.
   *
   *  This is a convenient wrapper for
   * {@link #invokeStaticMethod(Class objectClass,String methodName,Object [] args,Class[] parameterTypes)}.
   * 
   *
   * @param objectClass invoke static method on this class
   * @param methodName get method with this name
   * @param args use these arguments - treat null as empty array
   * @return The value returned by the invoked method
   *
   * @throws NoSuchMethodException if there is no such accessible method
   * @throws InvocationTargetException wraps an exception thrown by the
   *  method invoked
   * @throws IllegalAccessException if the requested method is not accessible
   *  via reflection
   * @since 1.8.0
  */
  static invokeStaticMethod(objectClass: Class, methodName: string, args: any[]): any;
  /**
   * Invoke a named static method whose parameter type matches the object type.
   *
   * The behaviour of this method is less deterministic
   * than {@link
   * #invokeExactStaticMethod(Class objectClass,String methodName,Object [] args,Class[] parameterTypes)}.
   * It loops through all methods with names that match
   * and then executes the first it finds with compatable parameters.
   *
   * This method supports calls to methods taking primitive parameters
   * via passing in wrapping classes. So, for example, a Boolean class
   * would match a boolean primitive.
   *
   *
   * @param objectClass invoke static method on this class
   * @param methodName get method with this name
   * @param args use these arguments - treat null as empty array
   * @param parameterTypes match these parameters - treat null as empty array
   * @return The value returned by the invoked method
   *
   * @throws NoSuchMethodException if there is no such accessible method
   * @throws InvocationTargetException wraps an exception thrown by the
   *  method invoked
   * @throws IllegalAccessException if the requested method is not accessible
   *  via reflection
   * @since 1.8.0
  */
  static invokeStaticMethod(objectClass: Class, methodName: string, args: any[], parameterTypes: Class[]): any;
  /**
   * Invoke a static method whose parameter type matches exactly the object
   * type.
   *
   *  This is a convenient wrapper for
   * {@link #invokeExactStaticMethod(Class objectClass,String methodName,Object [] args)}.
   * 
   *
   * @param objectClass invoke static method on this class
   * @param methodName get method with this name
   * @param arg use this argument
   * @return The value returned by the invoked method
   *
   * @throws NoSuchMethodException if there is no such accessible method
   * @throws InvocationTargetException wraps an exception thrown by the
   *  method invoked
   * @throws IllegalAccessException if the requested method is not accessible
   *  via reflection
   * @since 1.8.0
  */
  static invokeExactStaticMethod(objectClass: Class, methodName: string, arg: any): any;
  /**
   * Invoke a static method whose parameter types match exactly the object
   * types.
   *
   *  This uses reflection to invoke the method obtained from a call to
   * {@link #getAccessibleMethod(Class, String, Class[])}.
   *
   * @param objectClass invoke static method on this class
   * @param methodName get method with this name
   * @param args use these arguments - treat null as empty array
   * @return The value returned by the invoked method
   *
   * @throws NoSuchMethodException if there is no such accessible method
   * @throws InvocationTargetException wraps an exception thrown by the
   *  method invoked
   * @throws IllegalAccessException if the requested method is not accessible
   *  via reflection
   * @since 1.8.0
  */
  static invokeExactStaticMethod(objectClass: Class, methodName: string, args: any[]): any;
  /**
   * Return an accessible method (that is, one that can be invoked via
   * reflection) with given name and parameters.  If no such method
   * can be found, return null.
   * This is just a convenient wrapper for
   * {@link #getAccessibleMethod(Method method)}.
   *
   * @param clazz get method from this class
   * @param methodName get method with this name
   * @param parameterTypes with these parameters types
   * @return The accessible method
  */
  static getAccessibleMethod(clazz: Class, methodName: string, parameterTypes: Class[]): Method;
  /**
   * Return an accessible method (that is, one that can be invoked via
   * reflection) that implements the specified Method.  If no such method
   * can be found, return null.
   *
   * @param method The method that we wish to call
   * @return The accessible method
  */
  static getAccessibleMethod(method: Method): Method;
  /**
   * Return an accessible method (that is, one that can be invoked via
   * reflection) that implements the specified Method.  If no such method
   * can be found, return null.
   *
   * @param clazz The class of the object
   * @param method The method that we wish to call
   * @return The accessible method
   * @since 1.8.0
  */
  static getAccessibleMethod(clazz: Class, method: Method): Method;
  /**
   * Find an accessible method that matches the given name and has compatible parameters.
   * Compatible parameters mean that every method parameter is assignable from
   * the given parameters.
   * In other words, it finds a method with the given name
   * that will take the parameters given.
   *
   * This method is slightly undeterminstic since it loops
   * through methods names and return the first matching method.
   * 
   * This method is used by
   * {@link
   * #invokeMethod(Object object,String methodName,Object [] args,Class[] parameterTypes)}.
   *
   * This method can match primitive parameter by passing in wrapper classes.
   * For example, a Boolean will match a primitive boolean
   * parameter.
   *
   * @param clazz find method in this class
   * @param methodName find method with this name
   * @param parameterTypes find method with compatible parameters
   * @return The accessible method
  */
  static getMatchingAccessibleMethod(clazz: Class, methodName: string, parameterTypes: Class[]): Method;
  /**
   * Determine whether a type can be used as a parameter in a method invocation.
   * This method handles primitive conversions correctly.
   *
   * In order words, it will match a Boolean to a boolean,
   * a Long to a long,
   * a Float to a float,
   * a Integer to a int,
   * and a Double to a double.
   * Now logic widening matches are allowed.
   * For example, a Long will not match a int.
   *
   * @param parameterType the type of parameter accepted by the method
   * @param parameterization the type of parameter being tested
   *
   * @return true if the assignement is compatible.
  */
  static isAssignmentCompatible(parameterType: Class, parameterization: Class): boolean;
  /**
   * Gets the wrapper object class for the given primitive type class.
   * For example, passing boolean.class returns Boolean.class
   * @param primitiveType the primitive type class for which a match is to be found
   * @return the wrapper type associated with the given primitive
   * or null if no match is found
  */
  static getPrimitiveWrapper(primitiveType: Class): Class;
  /**
   * Gets the class for the primitive type corresponding to the primitive wrapper class given.
   * For example, an instance of Boolean.class returns a boolean.class.
   * @param wrapperType the
   * @return the primitive type class corresponding to the given wrapper class,
   * null if no match is found
  */
  static getPrimitiveType(wrapperType: Class): Class;
  /**
   * Find a non primitive representation for given primitive class.
   *
   * @param clazz the class to find a representation for, not null
   * @return the original class if it not a primitive. Otherwise the wrapper class. Not null
  */
  static toNonPrimitiveClass(clazz: Class): Class;
}

}
declare module 'com.comphenix.protocol.reflect.compiler' {
import { Method } from 'java.lang.reflect';
import { ClassLoader, Class } from 'java.lang';
import { Set, List, Map } from 'java.util';
import { ErrorReporter, ReportType } from 'com.comphenix.protocol.error';
import { ExecutorService, TimeUnit } from 'java.util.concurrent';
import { StructureModifier } from 'com.comphenix.protocol.reflect';
import { StructureKey } from 'com.comphenix.protocol.reflect.compiler.StructureCompiler';
/**
 * Represents a StructureModifier compiler.
 *
 * @author Kristian
*/
export class StructureCompiler {
  static readonly REPORT_TOO_MANY_GENERATED_CLASSES: ReportType;
  static attemptClassLoad: boolean;
  /**
   * Lookup the current class loader for any previously generated classes before we attempt to generate something.
   * @param  Type
   * @param source - the structure modifier to look up.
   * @return TRUE if we successfully found a previously generated class, FALSE otherwise.
  */
  lookupClassLoader<TField>(source: StructureModifier<TField>): boolean;
  /**
   * Compiles the given structure modifier.
   * 
   * WARNING: Do NOT call this method in the main thread. Compiling may easily take 10 ms, which is already
   * over 1/4 of a tick (50 ms). Let the background thread automatically compile the structure modifiers instead.
   * @param  Type
   * @param source - structure modifier to compile.
   * @return A compiled structure modifier.
  */
  compile<TField>(source: StructureModifier<TField>): StructureModifier<TField>;
}
/**
 * Compiles structure modifiers on a background thread.
 * 
 * This is necessary as we cannot block the main thread.
 * 
 * @author Kristian
*/
export class BackgroundCompiler {
  static readonly REPORT_CANNOT_COMPILE_STRUCTURE_MODIFIER: ReportType;
  static readonly REPORT_CANNOT_SCHEDULE_COMPILATION: ReportType;
  /**
   * The default format for the name of new worker threads.
  */
  static readonly THREAD_FORMAT: string;
  static readonly SHUTDOWN_DELAY_MS: number;
  /**
   * The default fraction of perm gen space after which the background compiler will be disabled.
  */
  static readonly DEFAULT_DISABLE_AT_PERM_GEN: number;
  /**
   * Retrieves the current background compiler.
   * @return Current background compiler.
  */
  static getInstance(): BackgroundCompiler;
  /**
   * Sets the single background compiler we're using.
   * @param backgroundCompiler - current background compiler, or NULL if the library is not loaded.
  */
  static setInstance(instance: BackgroundCompiler);
  /**
   * Initialize a background compiler.
   * 
   * Uses the default {@link #THREAD_FORMAT} to name worker threads.
   * @param loader - class loader from Bukkit.
   * @param reporter - current error reporter.
  */
  constructor(loader: ClassLoader, reporter: ErrorReporter);
  /**
   * Initialize a background compiler utilizing the given thread pool.
   * @param loader - class loader from Bukkit.
   * @param reporter - current error reporter.
   * @param executor - thread pool we'll use.
  */
  constructor(loader: ClassLoader, reporter: ErrorReporter, executor: ExecutorService);
  /**
   * Ensure that the indirectly given structure modifier is eventually compiled.
   * @param cache - store of structure modifiers.
   * @param key - key of the structure modifier to compile.
  */
  scheduleCompilation(cache: Map<Class, StructureModifier>, key: Class): void;
  /**
   * Ensure that the given structure modifier is eventually compiled.
   * @param  Type
   * @param uncompiled - structure modifier to compile.
   * @param listener - listener responsible for responding to the compilation.
  */
  scheduleCompilation<TKey>(uncompiled: StructureModifier<TKey>, listener: CompileListener<TKey>): void;
  /**
   * Add a compile listener if we are still waiting for the structure modifier to be compiled.
   * @param  Type
   * @param uncompiled - the structure modifier that may get compiled.
   * @param listener - the listener to invoke in that case.
  */
  addListener<TKey>(uncompiled: StructureModifier<TKey>, listener: CompileListener<TKey>): void;
  /**
   * Clean up after ourselves using the default timeout.
  */
  shutdownAll(): void;
  /**
   * Clean up after ourselves.
   * @param timeout - the maximum time to wait.
   * @param unit - the time unit of the timeout argument.
  */
  shutdownAll(timeout: number, unit: TimeUnit): void;
  /**
   * Retrieve whether or not the background compiler is enabled.
   * @return TRUE if it is enabled, FALSE otherwise.
  */
  isEnabled(): boolean;
  /**
   * Sets whether or not the background compiler is enabled.
   * @param enabled - TRUE to enable it, FALSE otherwise.
  */
  setEnabled(enabled: boolean): void;
  /**
   * Retrieve the fraction of perm gen space used after which the background compiler will be disabled.
   * @return The fraction after which the background compiler is disabled.
  */
  getDisablePermGenFraction(): number;
  /**
   * Set the fraction of perm gen space used after which the background compiler will be disabled.
   * @param fraction - the maximum use of perm gen space.
  */
  setDisablePermGenFraction(disablePermGenFraction: number);
  /**
   * Retrieve the current structure compiler.
   * @return Current structure compiler.
  */
  getCompiler(): StructureCompiler;
}
/**
 * Represents a compiled structure modifier.
 * 
 * @author Kristian
*/
export class CompiledStructureModifier extends StructureModifier<any> {
  constructor();
  setReadOnly(fieldIndex: number, value: boolean): void;
  writeDefaults(): StructureModifier<any>;
  read(fieldIndex: number): any;
  write(index: number, value: any): StructureModifier<any>;
  withTarget(target: any): StructureModifier<any>;
  /**
   * Writes the value of a field given its index.
   * @param fieldIndex - index of the field.
   * @param value - new value of the field.
   * @return This structure modifier - for chaining.
   * @throws FieldAccessException The field doesn't exist, or it cannot be accessed under the current security contraints.
  */
  write(fieldIndex: number, value: TField): StructureModifier<TField>;
}
/**
 * Used to save the result of an compilation.
 * 
 * @author Kristian
 * @param  - type of the structure modifier field.
*/
export class CompileListener<TKey> {
  /**
   * Invoked when a structure modifier has been successfully compiled.
   * @param compiledModifier - the compiled structure modifier.
  */
  onCompiled(compiledModifier: StructureModifier<TKey>): void;
}

}
declare module 'com.comphenix.protocol' {
import { Level, Logger } from 'java.util.logging';
import { PacketContainer, PacketEvent, ListeningWhitelist, PacketListener } from 'com.comphenix.protocol.events';
import { AsyncListenerHandler } from 'com.comphenix.protocol.async';
import { Set, Iterator, Collection, List } from 'java.util';
import { Comparable, Iterable, Throwable, Cloneable, Class } from 'java.lang';
import { Serializable, File } from 'java.io';
import { ErrorReporter } from 'com.comphenix.protocol.error';
import { PlayerInjectHooks, PacketConstructor } from 'com.comphenix.protocol.injector';
import { Consumer } from 'java.util.function';
import { Sender, Protocol } from 'com.comphenix.protocol.PacketType';
import { MinecraftVersion } from 'com.comphenix.protocol.utility';
/**
 * Represents an API for accessing the Minecraft protocol.
 * @author Kristian
*/
export class ProtocolManager extends PacketStream {
  /**
   * Broadcast a given packet to every connected player on the server.
   * @param packet - the packet to broadcast.
   * @throws FieldAccessException If we were unable to send the packet due to reflection problems.
  */
  broadcastServerPacket(packet: PacketContainer): void;
  /**
   * Adds a packet listener.
   * 
   * Adding an already registered listener has no effect. If you need to change the packets
   * the current listener is observing, you must first remove the packet listener before you
   * can register it again.
   * @param listener - new packet listener.
  */
  addPacketListener(listener: PacketListener): void;
  /**
   * Removes a given packet listener.
   * 
   * Attempting to remove a listener that doesn't exist has no effect.
   * @param listener - the packet listener to remove.
  */
  removePacketListener(listener: PacketListener): void;
  /**
   * Constructs a new encapsulated Minecraft packet with the given ID.
   * @param  type - packet  type.
   * @return New encapsulated Minecraft packet.
  */
  createPacket(type: PacketType): PacketContainer;
  /**
   * Constructs a new encapsulated Minecraft packet with the given ID.
   * 
   * If set to true, the forceDefaults option will force the system to automatically
   * give non-primitive fields in the packet sensible default values. For instance, certain
   * packets - like Packet60Explosion - require a List or Set to be non-null. If the
   * forceDefaults option is true, the List or Set will be automatically created.
   * 
   * @param type - packet type.
   * @param forceDefaults - TRUE to use sensible defaults in most fields, FALSE otherwise.
   * @return New encapsulated Minecraft packet.
  */
  createPacket(type: PacketType, forceDefaults: boolean): PacketContainer;
  /**
   * Construct a packet using the special builtin Minecraft constructors.
   * @param type - the packet type.
   * @param arguments - arguments that will be passed to the constructor.
   * @return The packet constructor.
  */
  createPacketConstructor(type: PacketType, ...arguments: any[]): PacketConstructor;
  /**
   * Retrieves a immutable set containing the type of the sent server packets that will be observed by listeners.
   * @return Every filtered server packet.
  */
  getSendingFilterTypes(): Set<PacketType>;
  /**
   * Retrieves a immutable set containing the type of the received client packets that will be observed by listeners.
   * @return Every filtered client packet.
  */
  getReceivingFilterTypes(): Set<PacketType>;
  /**
   * Retrieve the current Minecraft version.
   * @return The current version.
  */
  getMinecraftVersion(): MinecraftVersion;
  /**
   * Determines whether or not this protocol manager has been disabled.
   * @return TRUE if it has, FALSE otherwise.
  */
  isClosed(): boolean;
  /**
   * Retrieve the current asynchronous packet manager.
   * @return Asynchronous packet manager.
  */
  getAsynchronousManager(): AsynchronousManager;
  verifyWhitelist(listener: PacketListener, whitelist: ListeningWhitelist): void;
}
/**
 * Represents a object capable of sending or receiving packets.
 * 
 * @author Kristian
*/
export class PacketStream {

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
   * Set whether or not detailed error reporting is enabled.
   * 
   * @param value - TRUE if it is enabled, FALSE otherwise.
  */
  setDetailedErrorReporting(value: boolean): void;
  /**
   * Retrieve whether or not ProtocolLib should determine if a new version has been released.
   * 
   * @return TRUE if it should do this automatically, FALSE otherwise.
  */
  isAutoNotify(): boolean;
  /**
   * Set whether or not ProtocolLib should determine if a new version has been released.
   * 
   * @param value - TRUE to do this automatically, FALSE otherwise.
  */
  setAutoNotify(value: boolean): void;
  /**
   * Retrieve whether or not ProtocolLib should automatically download the new version.
   * 
   * @return TRUE if it should, FALSE otherwise.
  */
  isAutoDownload(): boolean;
  /**
   * Set whether or not ProtocolLib should automatically download the new version.
   * 
   * @param value - TRUE if it should. FALSE otherwise.
  */
  setAutoDownload(value: boolean): void;
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
   * Set the list of suppressed report types,
   * 
   * @param reports - suppressed report types.
  */
  setSuppressedReports(suppressedReports: string[]);
  /**
   * Retrieve the amount of time to wait until checking for a new update.
   * 
   * @return The amount of time to wait.
  */
  getAutoDelay(): number;
  /**
   * Set the amount of time to wait until checking for a new update.
   * 
   * This time must be greater than 59 seconds.
   * 
   * @param delaySeconds - the amount of time to wait.
  */
  setAutoDelay(autoDelay: number);
  /**
   * The version of Minecraft to ignore the built-in safety feature.
   * 
   * @return The version to ignore ProtocolLib's satefy.
  */
  getIgnoreVersionCheck(): string;
  /**
   * Sets under which version of Minecraft the version safety feature will be ignored.
   * 
   * This is useful if a server operator has tested and verified that a version of ProtocolLib works, but doesn't want or can't upgrade to a newer version.
   * 
   * @param ignoreVersion - the version of Minecraft where the satefy will be disabled.
  */
  setIgnoreVersionCheck(ignoreVersionCheck: string);
  /**
   * Retrieve whether or not metrics is enabled.
   * 
   * @return TRUE if metrics is enabled, FALSE otherwise.
  */
  isMetricsEnabled(): boolean;
  /**
   * Set whether or not metrics is enabled.
   * 
   * This setting will take effect next time ProtocolLib is started.
   * 
   * @param enabled - whether or not metrics is enabled.
  */
  setMetricsEnabled(enabled: boolean): void;
  /**
   * Retrieve whether or not the background compiler for structure modifiers is enabled or not.
   * 
   * @return TRUE if it is enabled, FALSE otherwise.
  */
  isBackgroundCompilerEnabled(): boolean;
  /**
   * Set whether or not the background compiler for structure modifiers is enabled or not.
   * 
   * This setting will take effect next time ProtocolLib is started.
   * 
   * @param enabled - TRUE if is enabled/running, FALSE otherwise.
  */
  setBackgroundCompilerEnabled(enabled: boolean): void;
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
   * Retrieve the default injection method.
   * 
   * @return Default method.
  */
  getDefaultMethod(): PlayerInjectHooks;
  /**
   * Retrieve the injection method that has been set in the configuration, or use a default value.
   * 
   * @return Injection method to use.
   * @throws IllegalArgumentException If the configuration option is malformed.
  */
  getInjectionMethod(): PlayerInjectHooks;
  /**
   * Set the starting injection method to use.
   * 
   * @return Injection method.
  */
  setInjectionMethod(injectionMethod: PlayerInjectHooks);
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
   * Retrieve the correct object enum from a specific packet type.
   * @param type - the packet type.
   * @return The corresponding object enum.
  */
  static getObjectEnum(type: PacketType): PacketTypeEnum;
  /**
   * Construct a new packet type.
   * @param protocol - the current protocol.
   * @param sender - client or server.
   * @param currentId - the current packet ID, or
  */
  constructor(protocol: Protocol, sender: Sender, currentId: number, ...names: string[]);
  /**
   * Construct a new packet type.
   * @param protocol - the current protocol.
   * @param sender - client or server.
   * @param currentId - the current packet ID.
   * @param version - the version of the current ID.
  */
  constructor(protocol: Protocol, sender: Sender, currentId: number, version: MinecraftVersion, ...names: string[]);
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
   * Retrieve the Minecraft version for the current ID.
   * @return The Minecraft version.
  */
  getCurrentVersion(): MinecraftVersion;
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
 * Represents a more modern object-based enum.
 * 
 * This is useful if you want the flexibility of a modern Java enum, but don't
 * want to prevent the creation of additional members dynamically.
 * @author Kristian
*/
export class PacketTypeEnum extends Iterable<PacketType> {
  /**
   * Registers every declared PacketType field.
  */
  constructor();
  /**
   * Registers a member if its not present.
   * @param instance - member instance.
   * @param name - name of member.
   * @return TRUE if the member was registered, FALSE otherwise.
  */
  registerMember(instance: PacketType, name: string): boolean;
  /**
   * Determines whether or not the given member has been registered to this enum.
   * @param member - the member to check.
   * @return TRUE if the given member has been registered, FALSE otherwise.
  */
  hasMember(member: PacketType): boolean;
  /**
   * Retrieve every registered member.
   * @return Enumeration of every value.
  */
  values(): Set<PacketType>;
  iterator(): Iterator<PacketType>;
}
/**
 * @author dmulloy2
*/
export class ProtocolLogger {
  /**
   * Don't call this method from any plugin. Currently only public to test if it fixes a weird error.
   * See GH-740
   * @param plugin ProtocolLib
  */
  static init(plugin: ProtocolLib): void;
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
  static warnAbove(version: MinecraftVersion, message: string, ...args: any[]): void;
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
   * The date (with ISO 8601 or YYYY-MM-DD) when the most recent version (1.17.1) was released.
  */
  static readonly MINECRAFT_LAST_RELEASE_DATE: string;
  /**
   * Plugins that are currently incompatible with ProtocolLib.
  */
  static readonly INCOMPATIBLE: string[];
  /**
   * Gets ProtocolLib's configuration
   * @return The config
  */
  static getConfig(): ProtocolConfig;
  /**
   * Retrieves the packet protocol manager.
   * @return Packet protocol manager
  */
  static getProtocolManager(): ProtocolManager;
  /**
   * Retrieve the current error reporter.
   * @return Current error reporter.
  */
  static getErrorReporter(): ErrorReporter;
  /**
   * Disables the ProtocolLib update checker.
  */
  static disableUpdates(): void;
  /**
   * Whether or not updates are currently disabled.
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
   * Registers an asynchronous packet handler.
   * 
   * Use {@link AsyncMarker#incrementProcessingDelay()} to delay a packet until its ready to be transmitted.
   * 
   * To start listening asynchronously, pass the getListenerLoop() runnable to a different thread.
   * @param listener - the packet listener that will receive these asynchronous events.
   * @return An asynchronous handler.
  */
  registerAsyncHandler(listener: PacketListener): AsyncListenerHandler;
  /**
   * Unregisters and closes the given asynchronous handler.
   * @param handler - asynchronous handler.
  */
  unregisterAsyncHandler(handler: AsyncListenerHandler): void;
  /**
   * Unregisters and closes the first asynchronous handler associated with the given listener.
   * @param listener - asynchronous listener
  */
  unregisterAsyncHandler(listener: PacketListener): void;
  /**
   * Retrieves a immutable set containing the types of the sent server packets that will be
   * observed by the asynchronous listeners.
   * @return Every filtered server packet.
  */
  getSendingTypes(): Set<PacketType>;
  /**
   * Retrieves a immutable set containing the types of the received client packets that will be
   * observed by the asynchronous listeners.
   * @return Every filtered client packet.
  */
  getReceivingTypes(): Set<PacketType>;
  /**
   * Determine if a given synchronous packet has asynchronous listeners.
   * @param packet - packet to test.
   * @return TRUE if it does, FALSE otherwise.
  */
  hasAsynchronousListeners(packet: PacketEvent): boolean;
  /**
   * Retrieve the default packet stream.
   * @return Default packet stream.
  */
  getPacketStream(): PacketStream;
  /**
   * Retrieve the default error reporter.
   * @return Default reporter.
  */
  getErrorReporter(): ErrorReporter;
  /**
   * Remove listeners, close threads and transmit every delayed packet.
  */
  cleanupAll(): void;
  /**
   * Signal that a packet is ready to be transmitted.
   * 
   * This should only be called if {@link com.comphenix.protocol.async.AsyncMarker#incrementProcessingDelay() AsyncMarker.incrementProcessingDelay()}
   * has been called previously.
   * @param packet - packet to signal.
  */
  signalPacketTransmission(packet: PacketEvent): void;
  /**
   * Register a synchronous listener that handles packets when they time out.
   * @param listener - synchronous listener that will handle timed out packets.
  */
  registerTimeoutHandler(listener: PacketListener): void;
  /**
   * Unregisters a given timeout listener.
   * @param listener - the timeout listener to unregister.
  */
  unregisterTimeoutHandler(listener: PacketListener): void;
  /**
   * Get a immutable set of every registered timeout handler.
   * @return Set of every registered timeout handler.
  */
  getTimeoutHandlers(): Set<PacketListener>;
  /**
   * Get an immutable set of every registered asynchronous packet listener.
   * @return Set of every asynchronous packet listener.
  */
  getAsyncHandlers(): Set<PacketListener>;
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
   * When running the version check, the file on DBO did not contain the a version in the format 'vVersion' such as 'v1.0'.
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
declare module 'com.comphenix.protocol.events.PacketAdapter' {
import { ListenerPriority, ListenerOptions, ConnectionSide } from 'com.comphenix.protocol.events';
import { Set } from 'java.util';
import { GamePhase } from 'com.comphenix.protocol.injector';
import { PacketType } from 'com.comphenix.protocol';
/**
 * Represents a builder for passing parameters to the packet adapter constructor.
 * 
 * Note: Never make spelling mistakes in a public API!
 * @author Kristian
*/
export class AdapterParameteters {
  /**
   * Set the packet types this listener is looking for. This parameter is required.
   * @param connectionSide - the new packet type.
   * @return This builder, for chaining.
  */
  connectionSide(connectionSide: ConnectionSide): AdapterParameteters;
  /**
   * Set this adapter to also look for client-side packets.
   * @return This builder, for chaining.
  */
  clientSide(): AdapterParameteters;
  /**
   * Set this adapter to also look for server-side packets.
   * @return This builder, for chaining.
  */
  serverSide(): AdapterParameteters;
  /**
   * Set the the event priority, where the execution is in ascending order from lowest to highest.
   * 
   * Default is {@link ListenerPriority#NORMAL}.
   * @param listenerPriority - the new event priority.
   * @return This builder, for chaining.
  */
  listenerPriority(listenerPriority: ListenerPriority): AdapterParameteters;
  /**
   * Set which game phase this listener is active under. This is a hint for ProtocolLib to start intercepting login packets.
   * 
   * Default is {@link GamePhase#PLAYING}, which will not intercept login packets.
   * @param gamePhase - the new game phase.
   * @return This builder, for chaining.
  */
  gamePhase(gamePhase: GamePhase): AdapterParameteters;
  /**
   * Set the game phase to {@link GamePhase#LOGIN}, allowing ProtocolLib to intercept login packets.
   * @return This builder, for chaining.
  */
  loginPhase(): AdapterParameteters;
  /**
   * Set listener options that decide whether or not to intercept the raw packet data as read from the network stream.
   * 
   * The default is to disable this raw packet interception.
   * @param options - every option to use.
   * @return This builder, for chaining.
  */
  options(...options: ListenerOptions[]): AdapterParameteters;
  /**
   * Set listener options that decide whether or not to intercept the raw packet data as read from the network stream.
   * 
   * The default is to disable this raw packet interception.
   * @param options - every option to use.
   * @return This builder, for chaining.
  */
  options(options: Set<ListenerOptions>): AdapterParameteters;
  /**
   * Set the listener option to {@link ListenerOptions#INTERCEPT_INPUT_BUFFER}, causing ProtocolLib to read the raw packet data from the network stream.
   * @return This builder, for chaining.
  */
  optionIntercept(): AdapterParameteters;
  /**
   * Set the listener option to {@link ListenerOptions#ASYNC}, indicating that our listener is thread safe.
   * 
   * This allows ProtocolLib to perform certain optimizations.
   * @return This builder, for chaining.
  */
  optionAsync(): AdapterParameteters;
  /**
   * Set the packet types the listener is looking for.
   * 
   * This parameter is required.
   * @param packets - the packet types to look for.
   * @return This builder, for chaining.
  */
  types(...packets: PacketType[]): AdapterParameteters;
  /**
   * Set the packet types the listener is looking for.
   * 
   * This parameter is required.
   * @param packets - a set of packet types to look for.
   * @return This builder, for chaining.
  */
  types(packets: Set<PacketType>): AdapterParameteters;
}

}
declare module 'com.comphenix.protocol.events.ListeningWhitelist' {
import { ListenerPriority, ListeningWhitelist, ListenerOptions } from 'com.comphenix.protocol.events';
import { Set, Collection } from 'java.util';
import { GamePhase } from 'com.comphenix.protocol.injector';
import { PacketType } from 'com.comphenix.protocol';
/**
 * Represents a builder of whitelists.
 * @author Kristian
*/
export class Builder {
  /**
   * Set the priority to use when constructing new whitelists.
   * @param priority - the priority.
   * @return This builder, for chaining.
  */
  priority(priority: ListenerPriority): Builder;
  /**
   * Set the priority of the whitelist to monitor.
   * @return This builder, for chaining.
  */
  monitor(): Builder;
  /**
   * Set the priority of the whitelist to normal.
   * @return This builder, for chaining.
  */
  normal(): Builder;
  /**
   * Set the priority of the whitelist to lowest.
   * @return This builder, for chaining.
  */
  lowest(): Builder;
  /**
   * Set the priority of the whitelist to low.
   * @return This builder, for chaining.
  */
  low(): Builder;
  /**
   * Set the priority of the whitelist to highest.
   * @return This builder, for chaining.
  */
  highest(): Builder;
  /**
   * Set the priority of the whitelist to high.
   * @return This builder, for chaining.
  */
  high(): Builder;
  /**
   * Set the whitelist of packet types to copy when constructing new whitelists.
   * @param types - the whitelist of packets.
   * @return This builder, for chaining.
  */
  types(...types: PacketType[]): Builder;
  /**
   * Set the whitelist of packet types to copy when constructing new whitelists.
   * @param types - the whitelist of packets.
   * @return This builder, for chaining.
  */
  types(types: Collection<PacketType>): Builder;
  /**
   * Set the gamephase to use when constructing new whitelists.
   * @param gamePhase - the gamephase.
   * @return This builder, for chaining.
  */
  gamePhase(gamePhase: GamePhase): Builder;
  /**
   * Set the gamephase to {@link GamePhase#BOTH}.
   * @return This builder, for chaining.
  */
  gamePhaseBoth(): Builder;
  /**
   * Set the options to copy when constructing new whitelists.
   * @param options - the options.
   * @return This builder, for chaining.
  */
  options(options: Set<ListenerOptions>): Builder;
  /**
   * Set the options to copy when constructing new whitelists.
   * @param options - the options.
   * @return This builder, for chaining.
  */
  options(options: Collection<ListenerOptions>): Builder;
  /**
   * Set the options to copy when constructing new whitelists.
   * @param serverOptions - the options array.
   * @return This builder, for chaining.
  */
  options(serverOptions: ListenerOptions[]): Builder;
  /**
   * Options to merge into the current set of options.
   * @param serverOptions - the options array.
   * @return This builder, for chaining.
  */
  mergeOptions(...serverOptions: ListenerOptions[]): Builder;
  /**
   * Options to merge into the current set of options.
   * @param serverOptions - the options array.
   * @return This builder, for chaining.
  */
  mergeOptions(serverOptions: Collection<ListenerOptions>): Builder;
  /**
   * Construct a new whitelist from the values in this builder.
   * @return The new whitelist.
  */
  build(): ListeningWhitelist;
}

}
declare module 'com.comphenix.protocol.reflect.accessors' {
import { Field, Constructor, Method } from 'java.lang.reflect';
import { Class } from 'java.lang';
export class ConstructorAccessor {
  /**
   * Invoke the underlying constructor.
   * @param args - the arguments to pass to the method.
   * @return The return value, or NULL for void methods.
  */
  invoke(...args: any[]): any;
  /**
   * Retrieve the underlying constructor.
   * @return The method.
  */
  getConstructor(): Constructor<any>;
}
export class ReadOnlyFieldAccessor extends FieldAccessor {
  /**
   * Set the value of a field for a particular instance.
   * @param instance - the instance, or NULL for a static field.
   * @param value - the new value of the field.
  */
  set(instance: any, value: any): void;
}
/**
 * Represents an interface for invoking a method.
 * @author Kristian 
*/
export class MethodAccessor {
  /**
   * Invoke the underlying method.
   * @param target - the target instance, or NULL for a static method.
   * @param args - the arguments to pass to the method.
   * @return The return value, or NULL for void methods.
  */
  invoke(target: any, ...args: any[]): any;
  /**
   * Retrieve the underlying method.
   * @return The method.
  */
  getMethod(): Method;
}
/**
 * Represents an interface for accessing a field.
 * @author Kristian
*/
export class FieldAccessor {
  /**
   * Retrieve the value of a field for a particular instance.
   * @param instance - the instance, or NULL for a static field.
   * @return The value of the field.
   * @throws IllegalStateException If the current security context prohibits reflection.
  */
  get(instance: any): any;
  /**
   * Set the value of a field for a particular instance.
   * @param instance - the instance, or NULL for a static field.
   * @param value - the new value of the field.
  */
  set(instance: any, value: any): void;
  /**
   * Retrieve the underlying field.
   * @return The field.
  */
  getField(): Field;
}
export class Accessors {
  /**
   * Retrieve an accessor for the first field of the given type.
   * @param instanceClass - the type of the instance to retrieve.
   * @param fieldClass - type of the field to retrieve.
   * @param forceAccess - whether or not to look for private and protected fields.
   * @return The field accessor.
   * @throws IllegalArgumentException If the field cannot be found.
  */
  static getFieldAccessor(instanceClass: Class<any>, fieldClass: Class<any>, forceAccess: boolean): FieldAccessor;
  /**
   * Retrieve an accessor (in declared order) for every field of the givne type.
   * @param instanceClass - the type of the instance to retrieve.
   * @param fieldClass - type of the field(s) to retrieve.
   * @param forceAccess - whether or not to look for private and protected fields.
   * @return The accessors.
  */
  static getFieldAccessorArray(instanceClass: Class<any>, fieldClass: Class<any>, forceAccess: boolean): FieldAccessor[];
  /**
   * Retrieve an accessor for the first field of the given type.
   * @param instanceClass - the type of the instance to retrieve.
   * @param fieldName - name of the field to retrieve.
   * @param forceAccess - whether or not to look for private and protected fields.
   * @return The value of that field.
   * @throws IllegalArgumentException If the field cannot be found.
  */
  static getFieldAccessor(instanceClass: Class<any>, fieldName: string, forceAccess: boolean): FieldAccessor;
  /**
   * Retrieve a field accessor from a given field that uses unchecked exceptions.
   * @param field - the field.
   * @return The field accessor.
  */
  static getFieldAccessor(field: Field): FieldAccessor;
  /**
   * Retrieve a field accessor from a given field that uses unchecked exceptions.
   * @param field - the field.
   * @param forceAccess - whether or not to skip Java access checking.
   * @return The field accessor.
  */
  static getFieldAccessor(field: Field, forceAccess: boolean): FieldAccessor;
  /**
   * Retrieve a field accessor for a field with the given name and equivalent type, or NULL.
   * @param clazz - the declaration class.
   * @param fieldName - the field name.
   * @param fieldType - assignable field type.
   * @return The field accessor, or NULL if not found.
  */
  static getFieldAcccessorOrNull(clazz: Class<any>, fieldName: string, fieldType: Class<any>): FieldAccessor;
  /**
   * Retrieve a method accessor for a field with the given name and equivalent type, or NULL.
   * @param clazz - the declaration class.
   * @param methodName - the method name.
   * @return The method accessor, or NULL if not found.
  */
  static getMethodAcccessorOrNull(clazz: Class<any>, methodName: string): MethodAccessor;
  /**
   * Find a specific constructor in a class.
   * @param clazz - the class.
   * @param parameters - the signature of the constructor to find.
   * @return The constructor, or NULL if not found.
  */
  static getConstructorAccessorOrNull(clazz: Class<any>, ...parameters: Class[]): ConstructorAccessor;
  /**
   * Retrieve a field accessor that will cache the content of the field.
   * 
   * Note that we don't check if the underlying field has changed after the value has been cached,
   * so it's best to use this on final fields.
   * @param inner - the accessor.
   * @return A cached field accessor.
  */
  static getCached(inner: FieldAccessor): FieldAccessor;
  /**
   * Retrieve a field accessor where the write operation is synchronized on the current field value.
   * @param accessor - the accessor.
   * @return The field accessor.
  */
  static getSynchronized(accessor: FieldAccessor): FieldAccessor;
  /**
   * Retrieve a method accessor that always return a constant value, regardless if input.
   * @param returnValue - the constant return value.
   * @param method - the method.
   * @return A constant method accessor.
  */
  static getConstantAccessor(returnValue: any, method: Method): MethodAccessor;
  /**
   * Retrieve a method accessor for a method with the given name and signature.
   * @param instanceClass - the parent class.
   * @param methodName - the method name.
   * @param parameters - the parameters.
   * @return The method accessor.
  */
  static getMethodAccessor(instanceClass: Class<any>, methodName: string, ...parameters: Class[]): MethodAccessor;
  /**
   * Retrieve a method accessor for a particular method, avoding checked exceptions.
   * @param method - the method to access.
   * @return The method accessor.
  */
  static getMethodAccessor(method: Method): MethodAccessor;
  /**
   * Retrieve a method accessor for a particular method, avoding checked exceptions.
   * @param method - the method to access.
   * @param forceAccess - whether or not to skip Java access checking.
   * @return The method accessor.
  */
  static getMethodAccessor(method: Method, forceAccess: boolean): MethodAccessor;
  /**
   * Retrieve a constructor accessor for a constructor with the given signature.
   * @param instanceClass - the parent class.
   * @param parameters - the parameters.
   * @return The constructor accessor.
   * @throws IllegalArgumentException If we cannot find this constructor.
   * @throws IllegalStateException If we cannot access reflection.
  */
  static getConstructorAccessor(instanceClass: Class<any>, ...parameters: Class[]): ConstructorAccessor;
  /**
   * Retrieve a constructor accessor for a particular constructor, avoding checked exceptions.
   * @param constructor - the constructor to access.
   * @return The method accessor.
  */
  static getConstructorAccessor(constructor: Constructor<any>): ConstructorAccessor;
}

}
declare module 'com.comphenix.protocol.PacketType.Handshake' {
import { Sender } from 'com.comphenix.protocol.PacketType';
import { PacketType, PacketTypeEnum } from 'com.comphenix.protocol';
/**
 * Incoming packets.
 * @author Kristian
*/
export class Client extends PacketTypeEnum {
  static readonly SET_PROTOCOL: PacketType;
  static getInstance(): Client;
  static getSender(): Sender;
}
/**
 * An empty enum, as the server will not send any packets in this protocol.
 * @author Kristian
*/
export class Server extends PacketTypeEnum {
  static getInstance(): Server;
  static getSender(): Sender;
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
import { Component } from 'net.kyori.adventure.text';
import { Field, Constructor, Method } from 'java.lang.reflect';
import { PacketContainer } from 'com.comphenix.protocol.events';
import { PublicKey } from 'java.security';
import { Set, Optional, Iterator, Collection, List, UUID, Map } from 'java.util';
import { NbtBase } from 'com.comphenix.protocol.wrappers.nbt';
import { PlayerInfoAction, FauxEnumConverter, CombatEventType, SoundCategory, Difficulty, Dimension, PlayerAction, Direction, Hand, NativeGameMode, Particle, ScoreboardAction, ClientCommand, WorldBorderAction, PlayerDigType, ChatVisibility, ChatType, ResourcePackStatus, EntityUseAction, ItemSlot, TitleAction, EntityPose } from 'com.comphenix.protocol.wrappers.EnumWrappers';
import { Type, Profession } from 'com.comphenix.protocol.wrappers.WrappedVillagerData';
import { Builder as com_comphenix_protocol_wrappers_WrappedAttributeModifier_Builder, Operation } from 'com.comphenix.protocol.wrappers.WrappedAttributeModifier';
import { EquivalentConverter, StructureModifier } from 'com.comphenix.protocol.reflect';
import { Builder, WrappedAttributeBase } from 'com.comphenix.protocol.wrappers.WrappedAttribute';
import { Unwrapper } from 'com.comphenix.protocol.injector.PacketConstructor';
import { Protocol } from 'com.comphenix.protocol.PacketType';
import { ClassSource } from 'com.comphenix.protocol.utility';
import { WrappedDataWatcherObject, Serializer } from 'com.comphenix.protocol.wrappers.WrappedDataWatcher';
import { Enum, Comparable, Iterable, Cloneable, Class } from 'java.lang';
import { ReportType } from 'com.comphenix.protocol.error';
import { StringReader } from 'java.io';
import { DimensionImpl } from 'com.comphenix.protocol.wrappers.BukkitConverters';
import { ReadOnlyFieldAccessor, MethodAccessor, FieldAccessor, ConstructorAccessor } from 'com.comphenix.protocol.reflect.accessors';
import { Function, Supplier } from 'java.util.function';
import { CompressedImage } from 'com.comphenix.protocol.wrappers.WrappedServerPing';
/**
 * Utility class for converting between the BungeeCord Chat API and ProtocolLib's wrapper
 * 
 * Note: The BungeeCord Chat API is not included in CraftBukkit.
 * @author dmulloy2
*/
export class ComponentConverter {
  static getBaseComponentArrayClass(): Class<any>;
}
/**
 * Allows access to a chunk coordinate.
 * 
 * @author Kristian
*/
export class WrappedChunkCoordinate extends AbstractWrapper {
  /**
   * Create a new empty wrapper.
  */
  constructor();
  /**
   * Create a wrapper for a specific chunk coordinates.
   * @param handle - the NMS chunk coordinates.
  */
  constructor(handle: Comparable);
  /**
   * Create a wrapper with specific values.
   * @param x - the x coordinate.
   * @param y - the y coordinate.
   * @param z - the z coordinate.
  */
  constructor(x: number, y: number, z: number);
  /**
   * Create a chunk coordinate wrapper from a given position.
   * @param position - the given position.
  */
  constructor(position: ChunkPosition);
  getHandle(): any;
  /**
   * Retrieve the x coordinate of the underlying coordinate.
   * @return The x coordinate.
  */
  getX(): number;
  /**
   * Set the x coordinate of the underlying coordinate.
   * @param newX - the new x coordinate.
  */
  setX(x: number);
  /**
   * Retrieve the y coordinate of the underlying coordinate.
   * @return The y coordinate.
  */
  getY(): number;
  /**
   * Set the y coordinate of the underlying coordinate.
   * @param newY - the new y coordinate.
  */
  setY(y: number);
  /**
   * Retrieve the z coordinate of the underlying coordinate.
   * @return The z coordinate.
  */
  getZ(): number;
  /**
   * Set the z coordinate of the underlying coordiate.
   * @param newZ - the new z coordinate.
  */
  setZ(z: number);
  /**
   * Create an immutable chunk position from this coordinate.
   * @return The new immutable chunk position.
  */
  toPosition(): ChunkPosition;
  compareTo(other: WrappedChunkCoordinate): number;
  toString(): string;
}
export interface WrappedChunkCoordinate extends AbstractWrapper, Comparable<WrappedChunkCoordinate> {}
/**
 * Contains several useful equivalent converters for normal Bukkit types.
 * 
 * @author Kristian
*/
export class BukkitConverters {
  static getMapConverter<K, V>(keyConverter: EquivalentConverter<K>, valConverter: EquivalentConverter<V>): EquivalentConverter<Map<K, V>>;
  static getListConverter<T>(listClass: Class<any>, itemConverter: EquivalentConverter<T>): EquivalentConverter<T[]>;
  /**
   * Retrieve an equivalent converter for a list of generic items.
   * @param  Type
   * @param itemConverter - an equivalent converter for the generic type.
   * @return An equivalent converter.
  */
  static getListConverter<T>(itemConverter: EquivalentConverter<T>): EquivalentConverter<T[]>;
  static getPairConverter<A, B>(firstConverter: EquivalentConverter<A>, secondConverter: EquivalentConverter<B>): EquivalentConverter<Pair<A, B>>;
  /**
   * Retrieve an equivalent converter for a set of generic items.
   * @param  Element type
   * @param itemConverter - an equivalent converter for the generic type.
   * @return An equivalent converter.
  */
  static getSetConverter<T>(itemConverter: EquivalentConverter<T>): EquivalentConverter<Set<T>>;
  /**
   * Retrieve an equivalent converter for an array of generic items.
   * @param  Type
   * 
   * The array is wrapped in a list.
   * @param genericItemType - the generic item type.
   * @param itemConverter - an equivalent converter for the generic type.
   * @return An equivalent converter.
  */
  static getArrayConverter<T>(genericItemType: Class<any>, itemConverter: EquivalentConverter<T>): EquivalentConverter<Iterable<T>>;
  /**
   * Retrieve a converter for wrapped game profiles.
   * @return Wrapped game profile converter.
  */
  static getWrappedGameProfileConverter(): EquivalentConverter<WrappedGameProfile>;
  /**
   * Retrieve a converter for wrapped chat components.
   * @return Wrapped chat component.
  */
  static getWrappedChatComponentConverter(): EquivalentConverter<WrappedChatComponent>;
  /**
   * Retrieve a converter for wrapped block data.
   * @return Wrapped block data.
  */
  static getWrappedBlockDataConverter(): EquivalentConverter<WrappedBlockData>;
  /**
   * Retrieve a converter for wrapped attribute snapshots.
   * @return Wrapped attribute snapshot converter.
  */
  static getWrappedAttributeConverter(): EquivalentConverter<WrappedAttribute>;
  /**
   * Retrieve a converter for watchable objects and the respective wrapper.
   * @return A watchable object converter.
  */
  static getWatchableObjectConverter(): EquivalentConverter<WrappedWatchableObject>;
  /**
   * Retrieve a converter for the NMS DataWatcher class and our wrapper.
   * @return A DataWatcher converter.
  */
  static getDataWatcherConverter(): EquivalentConverter<WrappedDataWatcher>;
  /**
   * Retrieve an equivalent converter for net.minecraft.server NBT classes and their wrappers.
   * @return An equivalent converter for NBT.
  */
  static getNbtConverter(): EquivalentConverter<NbtBase<any>>;
  /**
   * Retrieve the converter for the ServerPing packet in {@link PacketType.Status.Server#SERVER_INFO}.
   * @return Server ping converter.
  */
  static getWrappedServerPingConverter(): EquivalentConverter<WrappedServerPing>;
  /**
   * Retrieve the converter for a statistic.
   * @return Statistic converter.
  */
  static getWrappedStatisticConverter(): EquivalentConverter<WrappedStatistic>;
  static getParticleConverter(): EquivalentConverter<WrappedParticle>;
  /**
   * Retrieve an equivalent unwrapper for the converter.
   * @param nativeType - the native NMS type the converter produces.
   * @param converter - the converter.
   * @return The equivalent unwrapper.
  */
  static asUnwrapper(nativeType: Class<any>, converter: EquivalentConverter<any>): Unwrapper;
  /**
   * Retrieve every converter that is associated with a generic class.
   * @return Every converter with a unique generic class.
  */
  static getConvertersForGeneric(): Map<Class<any>, EquivalentConverter<any>>;
  /**
   * Retrieve every NMS to/from Bukkit converter as unwrappers.
   * @return Every unwrapper.
  */
  static getUnwrappers(): Unwrapper[];
  static getDimensionIDConverter(): EquivalentConverter<number>;
  static getSectionPositionConverter(): EquivalentConverter<BlockPosition>;
  static getGameStateConverter(): EquivalentConverter<number>;
}
/**
 * Represents a chat component added in Minecraft 1.7.2
 * @author Kristian
*/
export class WrappedChatComponent extends AbstractWrapper {
  /**
   * Construct a new chat component wrapper around the given NMS object.
   * @param handle - the NMS object.
   * @return The wrapper.
  */
  static fromHandle(handle: any): WrappedChatComponent;
  /**
   * Construct a new chat component wrapper from the given JSON string.
   * @param json - the json.
   * @return The chat component wrapper.
  */
  static fromJson(json: string): WrappedChatComponent;
  /**
   * Construct a wrapper around a new text chat component with the given text.
   * 
   * Note: {@link #fromLegacyText(String)} is preferred for text that contains
   * legacy formatting codes since it will translate them to the JSON equivalent.
   * @param text - the text of the text chat component.
   * @return The wrapper around the new chat component.
  */
  static fromText(text: string): WrappedChatComponent;
  /**
   * Construct an array of chat components from a standard Minecraft message.
   * 
   * This uses {@link ChatColor} for formating.
   * @param message - the message.
   * @return The equivalent chat components.
  */
  static fromChatMessage(message: string): WrappedChatComponent[];
  /**
   * Construct a single chat component from a standard Minecraft message
   * (with legacy formatting codes), preserving multiple lines.
   * @param message - the message.
   * @return The equivalent chat component.
  */
  static fromLegacyText(message: string): WrappedChatComponent;
  /**
   * Retrieve a copy of this component as a JSON string.
   * 
   * Note that any modifications to this JSON string will not update the current component.
   * @return The JSON representation of this object.
  */
  getJson(): string;
  /**
   * Set the content of this component using a JSON object.
   * @param obj - the JSON that represents the new component.
  */
  setJson(json: string);
  /**
   * Retrieve a deep copy of the current chat component.
   * @return A copy of the current component.
  */
  deepClone(): WrappedChatComponent;
  toString(): string;
}
export interface WrappedChatComponent extends AbstractWrapper, ClonableWrapper {}
/**
 * Handles component parsing in 1.8
 * @author dmulloy2
*/
export class ComponentParser {
  static deserialize(gson: any, component: Class<any>, str: StringReader): any;
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
  /**
   * Used to convert between NMS ChunkPosition and the wrapper instance.
   * @return A new converter.
  */
  static getConverter(): EquivalentConverter<BlockPosition>;
  equals(obj: any): boolean;
  hashCode(): number;
  toString(): string;
}
/**
 * Represents an immutable PlayerInfoData in the PLAYER_INFO packet.
 * @author dmulloy2
*/
export class PlayerInfoData {
  constructor(profile: WrappedGameProfile, latency: number, gameMode: NativeGameMode, displayName: WrappedChatComponent);
  /**
   * Gets the GameProfile of the player represented by this data.
   * @return The GameProfile
  */
  getProfile(): WrappedGameProfile;
  /**
   * @deprecated Replaced by {@link #getLatency()}
  */
  getPing(): number;
  /**
   * Gets the latency between the client and the server.
   * @return The latency
  */
  getLatency(): number;
  /**
   * Gets the GameMode of the player represented by this data.
   * @return The GameMode
  */
  getGameMode(): NativeGameMode;
  /**
   * Gets the display name of the player represented by this data.
   * @return The display name
  */
  getDisplayName(): WrappedChatComponent;
  /**
   * Used to convert between NMS PlayerInfoData and the wrapper instance.
   * @return A new converter.
  */
  static getConverter(): EquivalentConverter<PlayerInfoData>;
  equals(obj: any): boolean;
  hashCode(): number;
  toString(): string;
}
/**
 * Represents a generic enum converter.
 * @author Kristian
*/
export class EnumWrappers {
  static getFromNativeMap(): Map<Class<any>, EquivalentConverter<any>>;
  static getFromWrapperMap(): Map<Class<any>, EquivalentConverter<any>>;
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
  static getProtocolConverter(): EquivalentConverter<Protocol>;
  static getClientCommandConverter(): EquivalentConverter<ClientCommand>;
  static getChatVisibilityConverter(): EquivalentConverter<ChatVisibility>;
  static getDifficultyConverter(): EquivalentConverter<Difficulty>;
  static getEntityUseActionConverter(): EquivalentConverter<EntityUseAction>;
  static getGameModeConverter(): EquivalentConverter<NativeGameMode>;
  static getResourcePackStatusConverter(): EquivalentConverter<ResourcePackStatus>;
  static getPlayerInfoActionConverter(): EquivalentConverter<PlayerInfoAction>;
  static getTitleActionConverter(): EquivalentConverter<TitleAction>;
  static getWorldBorderActionConverter(): EquivalentConverter<WorldBorderAction>;
  static getCombatEventTypeConverter(): EquivalentConverter<CombatEventType>;
  static getPlayerDiggingActionConverter(): EquivalentConverter<PlayerDigType>;
  static getEntityActionConverter(): EquivalentConverter<PlayerAction>;
  static getUpdateScoreActionConverter(): EquivalentConverter<ScoreboardAction>;
  static getParticleConverter(): EquivalentConverter<Particle>;
  static getSoundCategoryConverter(): EquivalentConverter<SoundCategory>;
  static getItemSlotConverter(): EquivalentConverter<ItemSlot>;
  static getHandConverter(): EquivalentConverter<Hand>;
  static getDirectionConverter(): EquivalentConverter<Direction>;
  static getChatTypeConverter(): EquivalentConverter<ChatType>;
  /**
   * @since 1.13+
   * @return {@link EnumConverter} or null (if bellow 1.13 / nms EnumPose class cannot be found)
  */
  static getEntityPoseConverter(): EquivalentConverter<EntityPose>;
  /**
   * Retrieve a generic enum converter for use with StructureModifiers.
   * @param genericClass - Generic nms enum class
   * @param specificType - Specific enum class
   * @return A generic enum converter
  */
  static getGenericConverter<T>(genericClass: Class<any>, specificType: Class<T>): EquivalentConverter<T>;
}
/**
 * Wrap a GNU Trove Collection class with an equivalent Java Collection class.
 * @author Kristian
*/
export class TroveWrapper {
  /**
   * Retrieve a read-only field accessor that automatically wraps the underlying Trove instance.
   * @param accessor - the accessor.
   * @return The read only accessor.
  */
  static wrapMapField(accessor: FieldAccessor): ReadOnlyFieldAccessor;
  /**
   * Retrieve a read-only field accessor that automatically wraps the underlying Trove instance.
   * @param accessor - the accessor.
   * @return The read only accessor.
  */
  static wrapSetField(accessor: FieldAccessor): ReadOnlyFieldAccessor;
  /**
   * Retrieve a read-only field accessor that automatically wraps the underlying Trove instance.
   * @param accessor - the accessor.
   * @return The read only accessor.
  */
  static wrapListField(accessor: FieldAccessor): ReadOnlyFieldAccessor;
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
  static getConverter(): EquivalentConverter<MinecraftKey>;
}
/**
 * Represents a wrapper for a game profile.
 * @author Kristian
*/
export class WrappedGameProfile extends AbstractWrapper {
  static readonly REPORT_INVALID_UUID: ReportType;
  /**
   * Construct a new game profile with the given properties.
   * 
   * Note that this constructor is very lenient when parsing UUIDs for backwards compatibility reasons.
   * IDs that cannot be parsed as an UUID will be hashed and form a version 3 UUID instead.
   * 
   * This method is deprecated for Minecraft 1.7.8 and above.
   * 
   * @param id - the UUID of the player.
   * @param name - the name of the player.
  */
  constructor(id: string, name: string);
  /**
   * Construct a new game profile with the given properties.
   * 
   * Note that at least one of the parameters must be non-null.
   * 
   * @param uuid - the UUID of the player, or NULL.
   * @param name - the name of the player, or NULL.
  */
  constructor(uuid: UUID, name: string);
  /**
   * Construct a wrapper around an existing game profile.
   * 
   * @param handle - the underlying profile, or NULL.
   * @return A wrapper around an existing game profile.
  */
  static fromHandle(handle: any): WrappedGameProfile;
  /**
   * Retrieve the UUID of the player.
   * 
   * Note that Minecraft 1.7.5 and earlier doesn't use UUIDs internally, and it may not be possible to convert the string to an UUID.
   * 
   * We use the same lax conversion as in {@link #WrappedGameProfile(String, String)}.
   * 
   * @return The UUID, or NULL if the UUID is NULL.
   * @throws IllegalStateException If we cannot parse the internal ID as an UUID.
  */
  getUUID(): UUID;
  /**
   * Retrieve the textual representation of the player's UUID.
   * 
   * Note that there's nothing stopping plugins from creating non-standard UUIDs.
   * 
   * In Minecraft 1.7.8 and later, this simply returns the string form of {@link #getUUID()}.
   * 
   * @return The UUID of the player, or NULL if not computed.
  */
  getId(): string;
  /**
   * Retrieve the name of the player.
   * 
   * @return The player name.
  */
  getName(): string;
  /**
   * Construct a new game profile with the same ID, but different name.
   * 
   * @param name - the new name of the profile to create.
   * @return The new game profile.
  */
  withName(name: string): WrappedGameProfile;
  /**
   * Construct a new game profile with the same name, but different id.
   * 
   * @param id - the new id of the profile to create.
   * @return The new game profile.
  */
  withId(id: string): WrappedGameProfile;
  /**
   * Determine if the game profile contains both an UUID and a name.
   * 
   * @return TRUE if it does, FALSE otherwise.
  */
  isComplete(): boolean;
  toString(): string;
  hashCode(): number;
  equals(obj: any): boolean;
}
/**
 * Represents a Minecraft statistics.
 * @author Kristian
*/
export class WrappedStatistic extends AbstractWrapper {
  /**
   * Construct a new wrapper from a given underlying statistics.
   * @param handle - the statistics.
   * @return The wrapped statistics.
  */
  static fromHandle(handle: any): WrappedStatistic;
  /**
   * Construct a wrapper around an existing game profile.
   * @param name - statistic name.
   * @return The wrapped statistics, or NULL if not found.
  */
  static fromName(name: string): WrappedStatistic;
  /**
   * Retrieve every known statistics.
   * @return Every statistics.
  */
  static values(): Iterable<WrappedStatistic>;
  /**
   * Retrieve the unique name of this statistic.
   * @return The name.
  */
  getName(): string;
  toString(): string;
}
/**
 * Represents a single attribute sent in packet 44.
 * @author Kristian
*/
export class WrappedAttribute extends AbstractWrapper {
  static KEY_WRAPPED: boolean;
  /**
   * Construct a new wrapped attribute around a specific NMS instance.
   * @param handle - handle to a NMS AttributeSnapshot.
   * @return The attribute wrapper.
   * @throws IllegalArgumentException If the handle is not a AttributeSnapshot.
  */
  static fromHandle(handle: any): WrappedAttribute;
  /**
   * Construct a new wrapped attribute builder.
   * @return The new builder.
  */
  static newBuilder(): Builder;
  /**
   * Construct a new wrapped attribute builder initialized to the values from a template.
   * @param template - the attribute template.
   * @return The new builder.
  */
  static newBuilder(template: WrappedAttribute): Builder;
  /**
   * Retrieve the unique attribute key that identifies its function.
   * 
   * Example: "generic.maxHealth"
   * @return The attribute key.
  */
  getAttributeKey(): string;
  /**
   * Retrieve the attribute base instance. New in 1.16.
   *
   * @return The attribute base
  */
  getBase(): WrappedAttributeBase;
  /**
   * Retrieve the base value of this attribute, before any of the modifiers have been taken into account.
   * @return The base value.
  */
  getBaseValue(): number;
  /**
   * Retrieve the final computed value.
   * @return The final value.
  */
  getFinalValue(): number;
  /**
   * Retrieve the parent update attributes packet.
   * @return The parent packet.
   * @deprecated Removed in 1.17
  */
  getParentPacket(): PacketContainer | null;
  /**
   * Determine if the attribute has a given attribute modifier, identified by UUID.
   * @param id - the id to check for.
   * @return TRUE if it does, FALSE otherwise.
  */
  hasModifier(id: UUID): boolean;
  /**
   * Retrieve an attribute modifier by UUID.
   * @param id - the id to look for.
   * @return The single attribute modifier with the given ID.
  */
  getModifierByUUID(id: UUID): WrappedAttributeModifier;
  /**
   * Retrieve an immutable set of all the attribute modifiers that will compute the final value of this attribute.
   * @return Every attribute modifier.
  */
  getModifiers(): Set<WrappedAttributeModifier>;
  /**
   * Construct an attribute with the same key and name, but a different list of modifiers.
   * @param modifiers - attribute modifiers.
   * @return The new attribute.
  */
  withModifiers(modifiers: Collection<WrappedAttributeModifier>): WrappedAttribute;
  equals(obj: any): boolean;
  hashCode(): number;
  toString(): string;
  /**
   * Retrieves the underlying NMS object.
   * @return The underlying NMS object.
  */
  getHandle(): any;
}
export class WrappedVillagerData extends AbstractWrapper {
  static fromHandle(handle: any): WrappedVillagerData;
  static fromValues(type: Type, profession: Profession, level: number): WrappedVillagerData;
  static getNmsClass(): Class<any>;
  getLevel(): number;
  getType(): Type;
  getProfession(): Profession;
  deepClone(): WrappedVillagerData;
}
export interface WrappedVillagerData extends AbstractWrapper, ClonableWrapper {}
export class Pair<A, B> {
  constructor(first: A, second: B);
  getFirst(): A;
  getSecond(): B;
  setFirst(first: A);
  setSecond(second: B);
  equals(o: any): boolean;
  hashCode(): number;
}
/**
 * Automatically wraps an internal NMS class to a non-versioned, deofbuscated class.
 * Requirements:
 * 
 *     The wrapper must be public
 *     If the wrapper is an internal class, it must be static
 *     The wrapper must have one public constructor with no arguments (the default constructor is acceptable)
 *     The wrapper must have the the same number of fields as the NMS class
 *     Each field should correspond, in order, to its NMS counterpart
 *     Non-generic fields must have a converter
 * 
 *
 * @author dmulloy2
*/
export class AutoWrapper<T> extends EquivalentConverter<T> {
  static wrap<T>(wrapperClass: Class<T>, nmsClass: Class<any>): AutoWrapper<T>;
  static wrap<T>(wrapperClass: Class<T>, nmsClassName: string): AutoWrapper<T>;
  field(index: number, wrapper: Function<any, any>, unwrapper: Function<any, any>): AutoWrapper<T>;
  field(index: number, converter: EquivalentConverter): AutoWrapper<T>;
  wrap(nmsObject: any): T;
  unwrap(wrapper: any): any;
  /**
   * Retrieve a copy of the specific type using an instance of the generic type.
   * 
   * This is usually a wrapper type in the Bukkit API or ProtocolLib API.
   * @param generic - the generic type.
   * @return The new specific type.
  */
  getSpecific(generic: any): T;
  /**
   * Retrieve a copy of the generic type from a specific type.
   * 
   * This is usually a native net.minecraft.server type in Minecraft.
   * @param specific - the specific type we need to copy.
   * @return A copy of the specific type.
  */
  getGeneric(specific: any): any;
  /**
   * Due to type erasure, we need to explicitly keep a reference to the specific type.
   * @return The specific type.
  */
  getSpecificType(): Class<T>;
  /**
   * Retrieve a copy of the generic type from a specific type.
   * 
   * This is usually a native net.minecraft.server type in Minecraft.
   * @param specific - the specific type we need to copy.
   * @return A copy of the specific type.
  */
  getGeneric(specific: T): any;
}
export class MultiBlockChangeInfo {
  constructor(location: number, data: WrappedBlockData, chunk: ChunkCoordIntPair);
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
  /**
   * Gets this block change's block data.
   * 
   * @return The block data
  */
  getData(): WrappedBlockData;
  /**
   * Sets this block change's block data.
   * 
   * @param data New block data
  */
  setData(data: WrappedBlockData);
  /**
   * Gets the chunk this block change occured in.
   * 
   * @return The chunk
  */
  getChunk(): ChunkCoordIntPair;
  static getConverter(chunk: ChunkCoordIntPair): EquivalentConverter<MultiBlockChangeInfo>;
}
/**
 * Utility class for converting between the Adventure API Component and ProtocolLib's wrapper
 * 
 * Note: The Adventure API Component is not included in CraftBukkit, Bukkit or Spigot and but is present in PaperMC.
*/
export class AdventureComponentConverter {
  /**
   * Converts a {@link WrappedChatComponent} into a {@link Component}
   * @param wrapper ProtocolLib wrapper
   * @return Component
  */
  static fromWrapper(wrapper: WrappedChatComponent): Component;
  /**
   * Converts a {@link Component} into a ProtocolLib wrapper
   * @param components Component
   * @return ProtocolLib wrapper
  */
  static fromComponent(component: Component): WrappedChatComponent;
  static getComponentClass(): Class<any>;
  static clone(component: any): Component;
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
  getBlockPosition(): BlockPosition;
  setBlockPosition(blockPosition: BlockPosition);
  getDirection(): Direction;
  setDirection(direction: Direction);
  isInsideBlock(): boolean;
  setInsideBlock(insideBlock: boolean): void;
  static getConverter(): EquivalentConverter<MovingObjectPositionBlock>;
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
  static getConverter(): EquivalentConverter<Vector3F>;
}
/**
 * Represents a wrapper around a AttributeModifier.
 * 
 * This is used to compute the final attribute value.
 * 
 * @author Kristian
*/
export class WrappedAttributeModifier extends AbstractWrapper {
  /**
   * Construct a new attribute modifier builder.
   * 
   * It will automatically be supplied with a random UUID.
   * @return The new builder.
  */
  static newBuilder(): com_comphenix_protocol_wrappers_WrappedAttributeModifier_Builder;
  /**
   * Construct a new attribute modifier builder with the given UUID.
   * @param id - the new UUID.
   * @return Thew new builder.
  */
  static newBuilder(id: UUID): com_comphenix_protocol_wrappers_WrappedAttributeModifier_Builder;
  /**
   * Construct a new wrapped attribute modifier builder initialized to the values from a template.
   * @param template - the attribute modifier template.
   * @return The new builder.
  */
  static newBuilder(template: WrappedAttributeModifier): com_comphenix_protocol_wrappers_WrappedAttributeModifier_Builder;
  /**
   * Construct an attribute modifier wrapper around a given NMS instance.
   * @param handle - the NMS instance.
   * @return The created attribute modifier.
   * @throws IllegalArgumentException If the handle is not an AttributeModifier.
  */
  static fromHandle(handle: any): WrappedAttributeModifier;
  /**
   * Retrieve the unique UUID that identifies the origin of this modifier.
   * @return The unique UUID.
  */
  getUUID(): UUID;
  /**
   * Retrieve a human readable name of this modifier.
   * 
   * Note that this will be "Unknown synced attribute modifier" on the client side.
   * @return The attribute key.
  */
  getName(): string;
  /**
   * Retrieve the operation that is used to compute the final attribute value.
   * @return The operation.
  */
  getOperation(): Operation;
  /**
   * Retrieve the amount to modify in the operation.
   * @return The amount.
  */
  getAmount(): number;
  /**
   * Retrieve the underlying attribute modifier.
   * @return The underlying modifier.
  */
  getHandle(): any;
  /**
   * Set whether or not the modifier is pending synchronization with the client.
   * 
   * This value will be disregarded for {@link #equals(Object)}.
   * @param pending - TRUE if is is, FALSE otherwise.
  */
  setPendingSynchronization(pending: boolean): void;
  /**
   * Whether or not the modifier is pending synchronization with the client.
   * @return TRUE if it is, FALSE otherwise.
  */
  isPendingSynchronization(): boolean;
  /**
   * Determine if a given modifier is equal to the current modifier.
   * 
   * Two modifiers are considered equal if they use the same UUID.
   * @param obj - the object to check against.
   * @return TRUE if the given object is the same, FALSE otherwise.
  */
  equals(obj: any): boolean;
  hashCode(): number;
  toString(): string;
}
export class WrappedBlockData extends AbstractWrapper {
  constructor(handle: any);
  /**
   * Gets this BlockData's legacy data. Not recommended on 1.13+
   * @return The legacy data
  */
  getData(): number;
  /**
   * Sets this BlockData's legacy data. Not recommended on 1.13+
   * @param data The new legacy data
  */
  setData(data: number);
  deepClone(): WrappedBlockData;
  static fromHandle(handle: any): WrappedBlockData;
  /**
   * Creates a new Wrapped Block Data instance from a given Spigot Block Data
   * @param data Spigot block data
   * @return The new Wrapped Block Data
  */
  static createData(data: any): WrappedBlockData;
  toString(): string;
  hashCode(): number;
  equals(o: any): boolean;
}
export interface WrappedBlockData extends AbstractWrapper, ClonableWrapper {}
/**
 * Represents a DataWatcher
 * @author dmulloy2
*/
export class WrappedDataWatcher extends AbstractWrapper {
  /**
   * Constructs a new DataWatcher wrapper around a NMS handle. The resulting
   * DataWatcher will likely have existing values that can be removed with
   * {@link #clear()}.
   * 
   * @param handle DataWatcher handle
  */
  constructor(handle: any);
  /**
   * Constructs a new DataWatcher using a fake egg entity. The
   * resulting DataWatcher will not have any keys or values and new ones will
   * have to be added using watcher objects.
  */
  constructor();
  /**
   * Constructs a new DataWatcher using a fake egg entity and a given
   * list of watchable objects.
   * 
   * @param objects The list of objects
  */
  constructor(objects: WrappedWatchableObject[]);
  /**
   * Gets the contents of this DataWatcher as a map.
   * @return The contents
  */
  asMap(): Map<number, WrappedWatchableObject>;
  /**
   * Gets a set containing the registered indexes.
   * @return The set
  */
  getIndexes(): Set<number>;
  /**
   * Gets a list of the contents of this DataWatcher.
   * @return The contents
  */
  getWatchableObjects(): WrappedWatchableObject[];
  iterator(): Iterator<WrappedWatchableObject>;
  /**
   * Gets the size of this DataWatcher's contents.
   * @return The size
  */
  size(): number;
  /**
   * Gets the item at a given index.
   * 
   * @param index Index to get
   * @return The watchable object, or null if none exists
  */
  getWatchableObject(index: number): WrappedWatchableObject;
  /**
   * @deprecated Renamed to {@link #remove(int)}
  */
  removeObject(index: number): WrappedWatchableObject;
  /**
   * Removes the item at a given index.
   * 
   * @param index Index to remove
   * @return The previous value, or null if none existed
  */
  remove(index: number): WrappedWatchableObject;
  /**
   * Whether or not this DataWatcher has an object at a given index.
   * 
   * @param index Index to check for
   * @return True if it does, false if not
  */
  hasIndex(index: number): boolean;
  /**
   * Returns a set containing all the registered indexes
   * @return The set
  */
  indexSet(): Set<number>;
  /**
   * Clears the contents of this DataWatcher. The watcher will be empty after
   * this operation is called.
  */
  clear(): void;
  /**
   * Get a watched byte.
   * 
   * @param index - index of the watched byte.
   * @return The watched byte, or NULL if this value doesn't exist.
  */
  getByte(index: number): number;
  /**
   * Get a watched short.
   * 
   * @param index - index of the watched short.
   * @return The watched short, or NULL if this value doesn't exist.
  */
  getShort(index: number): number;
  /**
   * Get a watched integer.
   * 
   * @param index - index of the watched integer.
   * @return The watched integer, or NULL if this value doesn't exist.
  */
  getInteger(index: number): number;
  /**
   * Get a watched float.
   * 
   * @param index - index of the watched float.
   * @return The watched float, or NULL if this value doesn't exist.
  */
  getFloat(index: number): number;
  /**
   * Get a watched string.
   * 
   * @param index - index of the watched string.
   * @return The watched string, or NULL if this value doesn't exist.
  */
  getString(index: number): string;
  /**
   * Get a watched string.
   * 
   * @param index - index of the watched string.
   * @return The watched string, or NULL if this value doesn't exist.
  */
  getChunkCoordinate(index: number): WrappedChunkCoordinate;
  /**
   * Retrieve a watchable object by index.
   * 
   * @param index Index of the object to retrieve.
   * @return The watched object or null if it doesn't exist.
  */
  getObject(index: number): any;
  /**
   * Retrieve a watchable object by watcher object.
   * 
   * @param object The watcher object
   * @return The watched object or null if it doesn't exist.
  */
  getObject(object: WrappedDataWatcherObject): any;
  /**
   * Sets the DataWatcher Item at a given index to a new value. In 1.9 and up,
   * you cannot register objects without a watcher object.
   * 
   * @param index Index of the object to set
   * @param value New value
   * @param update Whether or not to inform the client
   * 
   * @see WrappedDataWatcher#setObject(WrappedDataWatcherObject, Object, boolean)
   * @throws IllegalArgumentException in 1.9 and up if there isn't already an
   * 		object at this index
  */
  setObject(index: number, value: any, update: boolean): void;
  /**
   * Shortcut for {@link #setObject(int, Object, boolean)}
  */
  setObject(index: number, value: any): void;
  /**
   * Sets the DataWatcher Item at a given index to a new value.
   * 
   * @param index Index of the object to set
   * @param serializer Serializer from {@link Registry#get(Class)}
   * @param value New value
   * @param update Whether or not to inform the client
   * 
   * @see WrappedDataWatcher#setObject(WrappedDataWatcherObject, Object)
  */
  setObject(index: number, serializer: Serializer, value: any, update: boolean): void;
  /**
   * Alias for {@link #setObject(int, Serializer, Object, boolean)}
  */
  setObject(index: number, serializer: Serializer, value: any): void;
  /**
   * Sets the DataWatcher Item at a given index to a new value.
   * 
   * @param index Index of the object to set
   * @param value New value
   * @param update Whether or not to inform the client
   * 
   * @see WrappedDataWatcher#setObject(int, Object, boolean)
  */
  setObject(index: number, value: WrappedWatchableObject, update: boolean): void;
  /**
   * Alias for {@link #setObject(int, WrappedWatchableObject, boolean)}
  */
  setObject(index: number, value: WrappedWatchableObject): void;
  /**
   * Sets the DataWatcher Item associated with a given watcher object to a new value.
   * 
   * @param object Associated watcher object
   * @param value Wrapped value
   * @param update Whether or not to inform the client
   * 
   * @see #setObject(WrappedDataWatcherObject, Object)
  */
  setObject(object: WrappedDataWatcherObject, value: WrappedWatchableObject, update: boolean): void;
  /**
   * Shortcut for {@link #setObject(WrappedDataWatcherObject, WrappedWatchableObject, boolean)}
  */
  setObject(object: WrappedDataWatcherObject, value: WrappedWatchableObject): void;
  /**
   * Sets the DataWatcher Item associated with a given watcher object to a
   * new value. If there is not already an object at this index, the
   * specified watcher object must have a serializer.
   * 
   * @param object Associated watcher object
   * @param value New value
   * 
   * @throws IllegalArgumentException If the watcher object is null or must
   * 			have a serializer and does not have one.
  */
  setObject(object: WrappedDataWatcherObject, value: any, update: boolean): void;
  /**
   * Shortcut for {@link #setObject(WrappedDataWatcherObject, Object, boolean)}
  */
  setObject(object: WrappedDataWatcherObject, value: any): void;
  /**
   * Clone the content of the current DataWatcher.
   * 
   * @return A cloned data watcher.
  */
  deepClone(): WrappedDataWatcher;
  /**
   * Retrieves the type ID associated with a given class. No longer supported
   * in 1.9 and up due to the removal of type IDs.
   * 
   * @param clazz Class to find ID for
   * @return The ID, or null if not found
  */
  static getTypeID(clazz: Class<any>): number;
  /**
   * Retrieves the class associated with a given type ID. No longer
   * supported in 1.9 and up due to the removal of type IDs.
   * 
   * @param typeID ID to find Class for
   * @return The Class, or null if not found
  */
  static getTypeClass(typeID: number): Class<any>;
  equals(obj: any): boolean;
  hashCode(): number;
  toString(): string;
}
export interface WrappedDataWatcher extends AbstractWrapper, Iterable<WrappedWatchableObject>, ClonableWrapper {}
export class WrappedRegistry {
  get(key: MinecraftKey): any;
  get(key: string): any;
  getKey(generic: any): MinecraftKey;
  static getAttributeRegistry(): WrappedRegistry;
  static getDimensionRegistry(): WrappedRegistry;
}
/**
 * Represents an entity used action used in the UseEntity packet sent by the client.
 * @author derklaro
*/
export class WrappedEnumEntityUseAction extends AbstractWrapper {
  static readonly CONVERTER: EquivalentConverter<WrappedEnumEntityUseAction>;
  /**
   * Construct a new wrapper for the entity use action class in the UseEntity packet.
   * @param handle - the NMS handle.
   * @return the created wrapper.
  */
  static fromHandle(handle: any): WrappedEnumEntityUseAction;
  /**
   * Get the jvm static action for attacking an entity.
   * @return the action for an entity attack.
  */
  static attack(): WrappedEnumEntityUseAction;
  /**
   * Get an action for interacting with an entity.
   * @param hand - the hand used for the interact.
   * @return the action for an interact.
  */
  static interact(hand: Hand): WrappedEnumEntityUseAction;
  /**
   * Get the action used for the interact.
   * @return the interact action.
  */
  getAction(): EntityUseAction;
  /**
   * Get the hand used for the interact. Only available if this represents interact or interact_at.
   * @return the hand used for the interact.
   * @throws IllegalArgumentException if called for attack.
  */
  getHand(): Hand;
  /**
   * Sets the hand used for the interact.
   * @param hand the used hand.
   * @throws IllegalArgumentException if called for attack.
  */
  setHand(hand: Hand);
  deepClone(): WrappedEnumEntityUseAction;
  /**
   * Get a field accessor for the position in the interact_at type.
   * @return a field accessor for the position field.
   * @throws IllegalArgumentException if called for attack or interact.
  */
  getPositionAccessor(): FieldAccessor;
}
export interface WrappedEnumEntityUseAction extends AbstractWrapper, ClonableWrapper {}
/**
 * Represents a server ping packet data.
 * @author Kristian
*/
export class WrappedServerPing extends AbstractWrapper {
  /**
   * Construct a new server ping initialized with a zero player count, and zero maximum.
   * 
   * Note that the version string is set to 1.9.4.
  */
  constructor();
  /**
   * Construct a wrapped server ping from a native NMS object.
   * @param handle - the native object.
   * @return The wrapped server ping object.
  */
  static fromHandle(handle: any): WrappedServerPing;
  /**
   * Construct a wrapper server ping from an encoded JSON string.
   * @param json - the JSON string.
   * @return The wrapped server ping.
  */
  static fromJson(json: string): WrappedServerPing;
  /**
   * Retrieve the message of the day.
   * @return The messge of the day.
  */
  getMotD(): WrappedChatComponent;
  /**
   * Set the message of the day.
   * @param description - message of the day.
  */
  setMotD(motD: WrappedChatComponent): void;
  /**
   * Set the message of the day.
   * @param message - the message.
  */
  setMotD(motD: string): void;
  /**
   * Retrieve the compressed PNG file that is being displayed as a favicon.
   * @return The favicon, or NULL if no favicon will be displayed.
  */
  getFavicon(): CompressedImage;
  /**
   * Set the compressed PNG file that is being displayed.
   * @param image - the new compressed image or NULL if no favicon should be displayed.
  */
  setFavicon(favicon: CompressedImage);
  /**
   * Retrieve the displayed number of online players.
   * @return The displayed number.
   * @throws IllegalStateException If the player count has been hidden via {@link #setPlayersVisible(boolean)}.
   * @see #setPlayersOnline(int)
  */
  getPlayersOnline(): number;
  /**
   * Set the displayed number of online players.
   * 
   * As of 1.7.2, this is completely unrestricted, and can be both positive and
   * negative, as well as higher than the player maximum.
   * @param online - online players.
  */
  setPlayersOnline(playersOnline: number);
  /**
   * Retrieve the displayed maximum number of players.
   * @return The maximum number.
   * @throws IllegalStateException If the player maximum has been hidden via {@link #setPlayersVisible(boolean)}.
   * @see #setPlayersMaximum(int)
  */
  getPlayersMaximum(): number;
  /**
   * Set the displayed maximum number of players.
   * 
   * The 1.7.2 accepts any value as a player maximum, positive or negative. It even permits a player maximum that
   * is less than the player count.
   * @param maximum - maximum player count.
  */
  setPlayersMaximum(playersMaximum: number);
  /**
   * Set whether or not the player count and player maximum is visible.
   * 
   * Note that this may set the current player count and maximum to their respective real values.
   * @param visible - TRUE if it should be visible, FALSE otherwise.
  */
  setPlayersVisible(visible: boolean): void;
  /**
   * Determine if the player count and maximum is visible.
   * 
   * If not, the client will display ??? in the same location.
   * @return TRUE if the player statistics is visible, FALSE otherwise.
  */
  isPlayersVisible(): boolean;
  /**
   * Set the displayed list of logged in players.
   * @param profile - every logged in player.
  */
  setPlayers(players: Iterable<WrappedGameProfile>);
  /**
   * Retrieve the version name of the current server.
   * @return The version name.
  */
  getVersionName(): string;
  /**
   * Set the version name of the current server.
   * @param name - the new version name.
  */
  setVersionName(versionName: string);
  /**
   * Retrieve the protocol number.
   * @return The protocol.
  */
  getVersionProtocol(): number;
  /**
   * Set the version protocol
   * @param protocol - the protocol number.
  */
  setVersionProtocol(versionProtocol: number);
  /**
   * Retrieve a deep copy of the current wrapper object.
   * @return The current object.
  */
  deepClone(): WrappedServerPing;
  /**
   * Retrieve the underlying JSON representation of this server ping.
   * @return The JSON representation.
  */
  toJson(): string;
  toString(): string;
}
export interface WrappedServerPing extends AbstractWrapper, ClonableWrapper {}
/**
 * Represents a wrapper over a signed property.
 * @author Kristian
*/
export class WrappedSignedProperty extends AbstractWrapper {
  /**
   * Construct a new wrapped signed property from the given values.
   * @param name - the name of the property.
   * @param value - the value of the property.
   * @param signature - the BASE64-encoded signature of the value.
  */
  constructor(name: string, value: string, signature: string);
  /**
   * Construct a new signed property from a given NMS property.
   * @param handle - the property.
   * @return The wrapped signed property.
  */
  static fromHandle(handle: any): WrappedSignedProperty;
  /**
   * Construct a new wrapped signed property from the given values.
   * @param name - the name of the property.
   * @param value - the value of the property.
   * @param signature - the BASE64-encoded signature of the value.
   * @return The signed property.
  */
  static fromValues(name: string, value: string, signature: string): WrappedSignedProperty;
  /**
   * Retrieve the name of the underlying property, such as "textures".
   * @return Name of the property.
  */
  getName(): string;
  /**
   * Retrieve the signature of the property (base64) as returned by the session server's /hasJoined.
   * @return The signature of the property.
  */
  getSignature(): string;
  /**
   * Retrieve the value of the property (base64) as return by the session server's /hasJoined
   * @return  The value of the property.
  */
  getValue(): string;
  /**
   * Determine if this property has a signature.
   * @return TRUE if it does, FALSE otherwise.
  */
  hasSignature(): boolean;
  /**
   * Determine if the signature of this property is valid and signed by the corresponding private key.
   * @param key - the public key.
   * @return TRUE if it is, FALSE otherwise.
  */
  isSignatureValid(key: PublicKey): boolean;
  hashCode(): number;
  equals(object: any): boolean;
  toString(): string;
}
/**
 * Copies a immutable net.minecraft.server.ChunkPosition, which represents a integer 3D vector.
 * 
 * @author Kristian
*/
export class ChunkPosition {
  /**
   * Represents the null (0, 0, 0) origin.
  */
  static ORIGIN: ChunkPosition;
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
  add(other: ChunkPosition): ChunkPosition;
  /**
   * Adds the current position and a given position together, producing a result position.
   * @param other - the other position.
   * @return The new result position.
  */
  subtract(other: ChunkPosition): ChunkPosition;
  /**
   * Multiply each dimension in the current position by the given factor.
   * @param factor - multiplier.
   * @return The new result.
  */
  multiply(factor: number): ChunkPosition;
  /**
   * Divide each dimension in the current position by the given divisor.
   * @param divisor - the divisor.
   * @return The new result.
  */
  divide(divisor: number): ChunkPosition;
  /**
   * Used to convert between NMS ChunkPosition and the wrapper instance.
   * @return A new converter.
  */
  static getConverter(): EquivalentConverter<ChunkPosition>;
  equals(obj: any): boolean;
  hashCode(): number;
  toString(): string;
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
 * Represents a wrapper for the internal IntHashMap in Minecraft.
 * @author Kristian
 * @deprecated IntHashMap no longer exists
*/
export class WrappedIntHashMap extends AbstractWrapper {
  /**
   * Construct a new IntHashMap.
   * @return A new IntHashMap.
  */
  static newMap(): WrappedIntHashMap;
  /**
   * Construct a wrapper around a given NMS IntHashMap.
   * @param handle - the NMS IntHashMap.
   * @return The created wrapped.
   * @throws IllegalArgumentException If the handle is not an IntHasMap.
  */
  static fromHandle(handle: any): WrappedIntHashMap;
  /**
   * Associates a specified key with the given value in the integer map. 
   * 
   * If the key has already been associated with a value, then it will be replaced by the new value.
   * @param key - the key to insert.
   * @param value - the value to insert. Cannot be NULL.
   * @throws RuntimeException If the reflection machinery failed.
  */
  put(key: number, value: any): void;
  /**
   * Retrieve the value associated with a specific key, or NULL if not found.
   * @param key - the integer key.
   * @return The associated value, or NULL.
  */
  get(key: number): any;
  /**
   * Remove a mapping of a key to a value if it is present.
   * @param key - the key of the mapping to remove.
   * @return The object that was removed, or NULL if the key is not present.
  */
  remove(key: number): any;
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
   * Retrieve the equivalent chunk position.
   * @param y - the y position.
   * @return The chunk position.
  */
  getPosition(y: number): ChunkPosition;
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
  /**
   * Used to convert between NMS ChunkPosition and the wrapper instance.
   * @return A new converter.
  */
  static getConverter(): EquivalentConverter<ChunkCoordIntPair>;
  equals(obj: any): boolean;
  hashCode(): number;
  toString(): string;
}
/**
 * Utility class for converters
 * @author dmulloy2
*/
export class Converters {
  /**
   * Returns a converter that ignores null elements, so that the underlying converter doesn't have to worry about them.
   * @param converter Underlying converter
   * @param  Element type
   * @return An ignore null converter
  */
  static ignoreNull<T>(converter: EquivalentConverter<T>): EquivalentConverter<T>;
  /**
   * Returns a converter that passes generic and specific values through without converting.
   * @param clazz Element class
   * @param  Element type
   * @return A passthrough converter
  */
  static passthrough<T>(clazz: Class<T>): EquivalentConverter<T>;
  /**
   * Creates a simple converter for wrappers with `getHandle()` and `fromHandle(...)` methods. With Java 8,
   * converters can be reduced to a single line (see {@link BukkitConverters#getWrappedGameProfileConverter()}).
   * @param toHandle Function from wrapper to handle (i.e. `getHandle()`)
   * @param fromHandle Function from handle to wrapper (i.e. `fromHandle(Object)`)
   * @param  Wrapper type
   * @return A handle converter
  */
  static handle<T>(toHandle: Function<T, any>, fromHandle: Function<any, T>, specificType: Class<T>): EquivalentConverter<T>;
  /**
   * Creates a generic array converter. Converts a NMS object array to and from a wrapper array by converting
   * each element individually.
   *
   * @param nmsClass NMS class
   * @param converter Underlying converter
   * @param  Generic type
   * @return An array converter
  */
  static array<T>(nmsClass: Class<any>, converter: EquivalentConverter<T>): EquivalentConverter<T[]>;
  static optional<T>(converter: EquivalentConverter<T>): EquivalentConverter<Optional<T>>;
}
/**
 * Represents a DataWatcher Item in 1.8 thru 1.10.
 * @author dmulloy2
*/
export class WrappedWatchableObject extends AbstractWrapper {
  /**
   * Constructs a DataWatcher Item wrapper from an existing NMS data watcher item.
   * @param handle Data watcher item
  */
  constructor(handle: any);
  /**
   * Constructs a DataWatcher Item wrapper from a given index and initial value.
   * 
   * Not recommended in 1.9 and up.
   * @param index Index of the Item
   * @param value Initial value
  */
  constructor(index: number, value: any);
  /**
   * Constructs a DataWatcher Item wrapper from a given watcher object and initial value.
   * @param watcherObject Watcher object
   * @param value Initial value
  */
  constructor(watcherObject: WrappedDataWatcherObject, value: any);
  /**
   * Gets this Item's watcher object, which contains the index and serializer.
   * @return The watcher object
  */
  getWatcherObject(): WrappedDataWatcherObject;
  /**
   * Gets this Item's index from the watcher object
   * @return The index
  */
  getIndex(): number;
  /**
   * Gets the wrapped value of this data watcher item.
   * @return The wrapped value
  */
  getValue(): any;
  /**
   * Gets the raw value of this data watcher item.
   * @return Raw value
  */
  getRawValue(): any;
  /**
   * Sets the value of this item.
   * @param value New value
   * @param updateClient Whether or not to update the client
  */
  setValue(value: any, updateClient: boolean): void;
  /**
   * Sets the value of this item.
   * @param value New value
  */
  setValue(value: any);
  /**
   * Whether or not the value must be synchronized with the client.
   * @return True if it must, false if not
  */
  getDirtyState(): boolean;
  /**
   * Sets this item's dirty state
   * @param dirty New state
  */
  setDirtyState(dirty: boolean): void;
  equals(obj: any): boolean;
  hashCode(): number;
  toString(): string;
}
export class ClonableWrapper {
  getHandle(): any;
  deepClone(): ClonableWrapper;
}

}
declare module 'com.comphenix.protocol.PacketType.Login' {
import { Sender } from 'com.comphenix.protocol.PacketType';
import { PacketType, PacketTypeEnum } from 'com.comphenix.protocol';
/**
 * Outgoing packets.
 * @author Kristian
*/
export class Server extends PacketTypeEnum {
  static readonly DISCONNECT: PacketType;
  static readonly ENCRYPTION_BEGIN: PacketType;
  static readonly SUCCESS: PacketType;
  static readonly SET_COMPRESSION: PacketType;
  static readonly CUSTOM_PAYLOAD: PacketType;
  static getSender(): Sender;
  static getInstance(): Server;
}
/**
 * Incoming packets.
 * @author Kristian
*/
export class Client extends PacketTypeEnum {
  static readonly START: PacketType;
  static readonly ENCRYPTION_BEGIN: PacketType;
  static readonly CUSTOM_PAYLOAD: PacketType;
  static getSender(): Sender;
  static getInstance(): Client;
}

}
declare module 'com.comphenix.protocol.wrappers.WrappedAttributeModifier' {
import { UUID } from 'java.util';
import { Enum } from 'java.lang';
import { WrappedAttributeModifier } from 'com.comphenix.protocol.wrappers';
/**
 * Represents the different modifier operations.
 * 
 * The final value is computed as follows:
 * 
 * Set X = base value.
 * Execute all modifiers with {@link Operation#ADD_NUMBER}.
 * Set Y = X.
 * Execute all modifiers with {@link Operation#MULTIPLY_PERCENTAGE}.
 * Execute all modifiers with {@link Operation#ADD_PERCENTAGE}.
 * Y is the final value.
 * 
 * @author Kristian
*/
export class Operation extends Enum<Operation> {
  /**
   * Increment X by amount.
  */
  static readonly ADD_NUMBER: Operation;
  /**
   * Increment Y by X * amount.
  */
  static readonly MULTIPLY_PERCENTAGE: Operation;
  /**
   * Multiply Y by (1 + amount)
  */
  static readonly ADD_PERCENTAGE: Operation;
  static valueOf(name: string): Operation;
  static values(): Operation[];
  /**
   * Retrieve the unique operation ID.
   * @return Operation ID.
  */
  getId(): number;
  /**
   * Retrieve the associated operation from an ID.
   * @param id - the ID.
   * @return The operation.
  */
  static fromId(id: number): Operation;
}
/**
 * Represents a builder of attribute modifiers.
 * 
 * Use {@link WrappedAttributeModifier#newBuilder()} to construct an instance of the builder.
 * @author Kristian
*/
export class Builder {
  /**
   * Set the unique UUID that identifies the origin of this modifier.
   * 
   * This parameter is automatically supplied with a random UUID, or the
   * UUID from an attribute modifier to clone.
   * 
   * @param uuid - the uuid to supply to the new object.
   * @return This builder, for chaining.
  */
  uuid(uuid: UUID): Builder;
  /**
   * Set the operation that is used to compute the final attribute value.
   * 
   * @param operation - the operation to supply to the new object.
   * @return This builder, for chaining.
  */
  operation(operation: Operation): Builder;
  /**
   * Set a human readable name of this modifier.
   * @param name - the name of the modifier.
   * @return This builder, for chaining.
  */
  name(name: string): Builder;
  /**
   * Set the amount to modify in the operation.
   * 
   * @param amount - the amount to supply to the new object.
   * @return This builder, for chaining.
  */
  amount(amount: number): Builder;
  /**
   * Construct a new attribute modifier and its wrapper using the supplied values in this builder.
   * @return The new attribute modifier.
   * @throws NullPointerException If UUID has not been set.
   * @throws RuntimeException If we are unable to construct the underlying attribute modifier.
  */
  build(): WrappedAttributeModifier;
}

}
declare module 'com.comphenix.protocol.wrappers.WrappedAttribute' {
import { PacketContainer } from 'com.comphenix.protocol.events';
import { Collection } from 'java.util';
import { WrappedAttribute, WrappedAttributeModifier } from 'com.comphenix.protocol.wrappers';
export class WrappedAttributeBase {
  defaultValue: number;
  unknown: boolean;
  key: string;
}
/**
 * Represents a builder for wrapped attributes.
 * 
 * Use {@link WrappedAttribute#newBuilder()} to construct it.
 * @author Kristian
*/
export class Builder {
  /**
   * Change the base value of the attribute.
   * 
   * The modifiers will automatically supply a value if this is unset.
   * @param baseValue - the base value value.
   * @return This builder, for chaining.
  */
  baseValue(baseValue: number): Builder;
  /**
   * Set the unique attribute key that identifies its function.
   * 
   * This is required.
   * @param attributeKey - the unique attribute key.
   * @return This builder, for chaining.
  */
  attributeKey(attributeKey: string): Builder;
  /**
   * Set the modifers that will be supplied to the client, and used to compute the final value.
   * @param modifiers - the attribute modifiers.
   * @return This builder, for chaining.
  */
  modifiers(modifiers: Collection<WrappedAttributeModifier>): Builder;
  /**
   * Set the parent update attributes packet (44).
   * @param packet - the parent packet.
   * @return This builder, for chaining.
  */
  packet(packet: PacketContainer): Builder;
  /**
   * Build a new wrapped attribute with the values of this builder.
   * @return The wrapped attribute.
   * @throws RuntimeException If anything went wrong with the reflection.
  */
  build(): WrappedAttribute;
}

}
declare module 'com.comphenix.protocol.updater' {
import { Runnable, Thread } from 'java.lang';
import { List } from 'java.util';
import { UpdateType, UpdateResult } from 'com.comphenix.protocol.updater.Updater';
import { URL } from 'java.net';
import { File } from 'java.io';
import { ReportType } from 'com.comphenix.protocol.error';
export class Updater {
  static readonly REPORT_CANNOT_UPDATE_PLUGIN: ReportType;
  versionCheck(title: string): boolean;
  /**
   * Add a listener to be executed when we have determined if an update is available.
   * 
   * The listener will be executed on the main thread.
   * @param listener - the listener to add.
  */
  addListener(listener: Runnable): void;
  /**
   * Remove a listener.
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
   * @return TRUE if we are, FALSE otherwise.
  */
  isChecking(): boolean;
  start(type: UpdateType): void;
  shouldNotify(): boolean;
  getRemoteVersion(): string;
}
export class BukkitUpdater extends Updater {
  /**
   * Begin looking for updates.
   * @param type - the update type.
  */
  start(type: UpdateType): void;
  read(): boolean;
  getRemoteVersion(): string;
}
export class SpigotUpdater extends Updater {
  start(type: UpdateType): void;
  getResult(): string;
  getSpigotVersion(): string;
  getRemoteVersion(): string;
}

}
declare module 'com.comphenix.protocol.reflect.fuzzy.FuzzyClassContract' {
import { Field } from 'java.lang.reflect';
import { Class } from 'java.lang';
import { List } from 'java.util';
import { AbstractFuzzyMatcher, FuzzyClassContract } from 'com.comphenix.protocol.reflect.fuzzy';
import { Builder as com_comphenix_protocol_reflect_fuzzy_FuzzyMethodContract_Builder } from 'com.comphenix.protocol.reflect.fuzzy.FuzzyMethodContract';
import { MethodInfo } from 'com.comphenix.protocol.reflect';
import { Builder as com_comphenix_protocol_reflect_fuzzy_FuzzyFieldContract_Builder } from 'com.comphenix.protocol.reflect.fuzzy.FuzzyFieldContract';
/**
 * Represents a class contract builder.
 * @author Kristian
 *
*/
export class Builder {
  /**
   * Add a new field contract.
   * @param matcher - new field contract.
   * @return This builder, for chaining.
  */
  field(matcher: AbstractFuzzyMatcher<Field>): Builder;
  /**
   * Add a new field contract via a builder.
   * @param builder - builder for the new field contract.
   * @return This builder, for chaining.
  */
  field(builder: com_comphenix_protocol_reflect_fuzzy_FuzzyFieldContract_Builder): Builder;
  /**
   * Add a new method contract.
   * @param matcher - new method contract.
   * @return This builder, for chaining.
  */
  method(matcher: AbstractFuzzyMatcher<MethodInfo>): Builder;
  /**
   * Add a new method contract via a builder.
   * @param builder - builder for the new method contract.
   * @return This builder, for chaining.
  */
  method(builder: com_comphenix_protocol_reflect_fuzzy_FuzzyMethodContract_Builder): Builder;
  /**
   * Add a new constructor contract.
   * @param matcher - new constructor contract.
   * @return This builder, for chaining.
  */
  constructor(matcher: AbstractFuzzyMatcher<MethodInfo>): Builder;
  /**
   * Add a new constructor contract via a builder.
   * @param builder - builder for the new constructor contract.
   * @return This builder, for chaining.
  */
  constructor(builder: com_comphenix_protocol_reflect_fuzzy_FuzzyMethodContract_Builder): Builder;
  /**
   * Add a new base class contract.
   * @param matcher - new base class contract.
   * @return This builder, for chaining.
  */
  baseclass(matcher: AbstractFuzzyMatcher<Class<any>>): Builder;
  /**
   * Add a new base class contract.
   * @param builder - builder for the new base class contract.
   * @return This builder, for chaining.
  */
  baseclass(builder: Builder): Builder;
  /**
   * Add a new interface contract.
   * @param matcher - new interface contract.
   * @return This builder, for chaining.
  */
  interfaces(matcher: AbstractFuzzyMatcher<Class<any>>): Builder;
  /**
   * Add a new interface contract.
   * @param builder - builder for the new interface contract.
   * @return This builder, for chaining.
  */
  interfaces(builder: Builder): Builder;
  build(): FuzzyClassContract;
}

}
declare module 'com.comphenix.protocol.reflect.fuzzy.FuzzyFieldContract' {
import { Builder as com_comphenix_protocol_reflect_fuzzy_AbstractFuzzyMember_Builder } from 'com.comphenix.protocol.reflect.fuzzy.AbstractFuzzyMember';
import { Class } from 'java.lang';
import { Pattern } from 'java.util.regex';
import { FuzzyFieldContract, AbstractFuzzyMatcher } from 'com.comphenix.protocol.reflect.fuzzy';
/**
 * Represents a builder for a field matcher.
 * 
 * @author Kristian
*/
export class Builder extends com_comphenix_protocol_reflect_fuzzy_AbstractFuzzyMember_Builder<FuzzyFieldContract> {
  requireModifier(modifier: number): Builder;
  banModifier(modifier: number): Builder;
  requirePublic(): Builder;
  nameRegex(regex: string): Builder;
  nameRegex(pattern: Pattern): Builder;
  nameExact(name: string): Builder;
  declaringClassExactType(declaringClass: Class<any>): Builder;
  declaringClassSuperOf(declaringClass: Class<any>): Builder;
  declaringClassDerivedOf(declaringClass: Class<any>): Builder;
  declaringClassMatching(classMatcher: AbstractFuzzyMatcher<Class<any>>): Builder;
  typeExact(type: Class<any>): Builder;
  typeSuperOf(type: Class<any>): Builder;
  typeDerivedOf(type: Class<any>): Builder;
  typeMatches(matcher: AbstractFuzzyMatcher<Class<any>>): Builder;
  build(): FuzzyFieldContract;
}

}
declare module 'com.comphenix.protocol.injector.server' {
import { NetworkMarker } from 'com.comphenix.protocol.events';
import { List } from 'java.util';
import { SocketAddress, Socket } from 'java.net';
import { InputStream } from 'java.io';
import { ErrorReporter } from 'com.comphenix.protocol.error';
/**
 * Represents an injector that only gives access to a player's socket.
 * 
 * @author Kristian
*/
export class SocketInjector {
  /**
   * Retrieve the associated socket of this player.
   * @return The associated socket.
   * @throws IllegalAccessException If we're unable to read the socket field.
   * @deprecated May be null on certain server implementations. Also don't use raw sockets.
  */
  getSocket(): Socket;
  /**
   * Retrieve the associated address of this player.
   * @return The associated address.
   * @throws IllegalAccessException If we're unable to read the socket field.
  */
  getAddress(): SocketAddress;
  /**
   * Attempt to disconnect the current client.
   * @param message - the message to display.
   * @throws InvocationTargetException If disconnection failed.
  */
  disconnect(message: string): void;
  /**
   * Send a packet to the client.
   * @param packet - server packet to send.
   * @param marker - the network marker.
   * @param filtered - whether or not the packet will be filtered by our listeners.
   * @throws InvocationTargetException If an error occured when sending the packet.
  */
  sendServerPacket(packet: any, marker: NetworkMarker, filtered: boolean): void;
  /**
   * Invoked when a delegated socket injector transfers the state of one injector to the next.
   * @param delegate - the new injector.
  */
  transferState(delegate: SocketInjector): void;
  /**
   * Determines if the player is currently connected.
   * @return true if the player is connected.
  */
  isConnected(): boolean;
}
export class BukkitSocketInjector extends SocketInjector {
  /**
   * Retrieve the associated socket of this player.
   * @return The associated socket.
   * @throws IllegalAccessException If we're unable to read the socket field.
   * @deprecated May be null on certain server implementations. Also don't use raw sockets.
  */
  getSocket(): Socket;
  /**
   * Retrieve the associated address of this player.
   * @return The associated address.
   * @throws IllegalAccessException If we're unable to read the socket field.
  */
  getAddress(): SocketAddress;
  /**
   * Attempt to disconnect the current client.
   * @param message - the message to display.
   * @throws InvocationTargetException If disconnection failed.
  */
  disconnect(message: string): void;
  /**
   * Send a packet to the client.
   * @param packet - server packet to send.
   * @param marker - the network marker.
   * @param filtered - whether or not the packet will be filtered by our listeners.
   * @throws InvocationTargetException If an error occured when sending the packet.
  */
  sendServerPacket(packet: any, marker: NetworkMarker, filtered: boolean): void;
  /**
   * Invoked when a delegated socket injector transfers the state of one injector to the next.
   * @param delegate - the new injector.
  */
  transferState(delegate: SocketInjector): void;
  /**
   * Determines if the player is currently connected.
   * @return true if the player is connected.
  */
  isConnected(): boolean;
}
/**
 * Constructs the appropriate input stream lookup for the current JVM and architecture.
 * 
 * @author Kristian
*/
export class InputStreamLookupBuilder {
  static newBuilder(): InputStreamLookupBuilder;
  /**
   * Set the error reporter to pass on to the lookup.
   * @param reporter - the error reporter.
   * @return The current builder, for chaining.
  */
  reporter(reporter: ErrorReporter): InputStreamLookupBuilder;
  build(): AbstractInputStreamLookup;
}
export class AbstractInputStreamLookup {
  /**
   * Inject the given server thread or dedicated connection.
   * @param container - class that contains a ServerSocket field.
  */
  inject(container: any): void;
  /**
   * Retrieve the associated socket injector for a player.
   * @param input - the indentifying filtered input stream.
   * @return The socket injector we have associated with this player.
  */
  waitSocketInjector(input: InputStream): SocketInjector;
  /**
   * Retrieve an injector by its socket.
   * @param socket - the socket.
   * @return The socket injector.
  */
  waitSocketInjector(socket: Socket): SocketInjector;
  /**
   * Retrieve a injector by its address.
   * @param address - the address of the socket.
   * @return The socket injector, or NULL if not found.
  */
  waitSocketInjector(address: SocketAddress): SocketInjector;
  /**
   * Attempt to get a socket injector without blocking the thread.
   * @param address - the address to lookup.
   * @return The socket injector, or NULL if not found.
  */
  peekSocketInjector(address: SocketAddress): SocketInjector;
  /**
   * Associate a given socket address to the provided socket injector.
   * @param address - the socket address to associate.
   * @param injector - the injector.
  */
  setSocketInjector(address: SocketAddress, injector: SocketInjector): void;
  /**
   * Invoked when the injection should be undone.
  */
  cleanupAll(): void;
}
/**
 * Create fake player instances that represents pre-authenticated clients.
*/
export class TemporaryPlayerFactory {

}
/**
 * A temporary player created by ProtocolLib when a true player instance does not exist.
 * 
 * Also able to store a socket injector
 * 
*/
export class TemporaryPlayer {

}

}
declare module 'com.comphenix.protocol.PacketType.Play' {
import { Sender } from 'com.comphenix.protocol.PacketType';
import { PacketType, PacketTypeEnum } from 'com.comphenix.protocol';
/**
 * Outgoing packets.
 * @author Kristian
*/
export class Server extends PacketTypeEnum {
  static readonly SPAWN_ENTITY: PacketType;
  static readonly SPAWN_ENTITY_EXPERIENCE_ORB: PacketType;
  static readonly SPAWN_ENTITY_LIVING: PacketType;
  static readonly SPAWN_ENTITY_PAINTING: PacketType;
  static readonly NAMED_ENTITY_SPAWN: PacketType;
  static readonly ADD_VIBRATION_SIGNAL: PacketType;
  static readonly ANIMATION: PacketType;
  static readonly STATISTIC: PacketType;
  static readonly BLOCK_BREAK: PacketType;
  static readonly BLOCK_BREAK_ANIMATION: PacketType;
  static readonly TILE_ENTITY_DATA: PacketType;
  static readonly BLOCK_ACTION: PacketType;
  static readonly BLOCK_CHANGE: PacketType;
  static readonly BOSS: PacketType;
  static readonly SERVER_DIFFICULTY: PacketType;
  static readonly CHAT: PacketType;
  static readonly CLEAR_TITLES: PacketType;
  static readonly TAB_COMPLETE: PacketType;
  static readonly COMMANDS: PacketType;
  static readonly CLOSE_WINDOW: PacketType;
  static readonly WINDOW_ITEMS: PacketType;
  static readonly WINDOW_DATA: PacketType;
  static readonly SET_SLOT: PacketType;
  static readonly SET_COOLDOWN: PacketType;
  static readonly CUSTOM_PAYLOAD: PacketType;
  static readonly CUSTOM_SOUND_EFFECT: PacketType;
  static readonly KICK_DISCONNECT: PacketType;
  static readonly ENTITY_STATUS: PacketType;
  static readonly EXPLOSION: PacketType;
  static readonly UNLOAD_CHUNK: PacketType;
  static readonly GAME_STATE_CHANGE: PacketType;
  static readonly OPEN_WINDOW_HORSE: PacketType;
  static readonly INITIALIZE_BORDER: PacketType;
  static readonly KEEP_ALIVE: PacketType;
  static readonly MAP_CHUNK: PacketType;
  static readonly WORLD_EVENT: PacketType;
  static readonly WORLD_PARTICLES: PacketType;
  static readonly LIGHT_UPDATE: PacketType;
  static readonly LOGIN: PacketType;
  static readonly MAP: PacketType;
  static readonly OPEN_WINDOW_MERCHANT: PacketType;
  static readonly REL_ENTITY_MOVE: PacketType;
  static readonly REL_ENTITY_MOVE_LOOK: PacketType;
  static readonly ENTITY_LOOK: PacketType;
  static readonly VEHICLE_MOVE: PacketType;
  static readonly OPEN_BOOK: PacketType;
  static readonly OPEN_WINDOW: PacketType;
  static readonly OPEN_SIGN_EDITOR: PacketType;
  static readonly PING: PacketType;
  static readonly AUTO_RECIPE: PacketType;
  static readonly ABILITIES: PacketType;
  static readonly PLAYER_COMBAT_END: PacketType;
  static readonly PLAYER_COMBAT_ENTER: PacketType;
  static readonly PLAYER_COMBAT_KILL: PacketType;
  static readonly PLAYER_INFO: PacketType;
  static readonly LOOK_AT: PacketType;
  static readonly POSITION: PacketType;
  static readonly RECIPES: PacketType;
  static readonly ENTITY_DESTROY: PacketType;
  static readonly REMOVE_ENTITY_EFFECT: PacketType;
  static readonly RESOURCE_PACK_SEND: PacketType;
  static readonly RESPAWN: PacketType;
  static readonly ENTITY_HEAD_ROTATION: PacketType;
  static readonly MULTI_BLOCK_CHANGE: PacketType;
  static readonly SELECT_ADVANCEMENT_TAB: PacketType;
  static readonly SET_ACTION_BAR_TEXT: PacketType;
  static readonly SET_BORDER_CENTER: PacketType;
  static readonly SET_BORDER_LERP_SIZE: PacketType;
  static readonly SET_BORDER_SIZE: PacketType;
  static readonly SET_BORDER_WARNING_DELAY: PacketType;
  static readonly SET_BORDER_WARNING_DISTANCE: PacketType;
  static readonly CAMERA: PacketType;
  static readonly HELD_ITEM_SLOT: PacketType;
  static readonly VIEW_CENTRE: PacketType;
  static readonly VIEW_DISTANCE: PacketType;
  static readonly SPAWN_POSITION: PacketType;
  static readonly SCOREBOARD_DISPLAY_OBJECTIVE: PacketType;
  static readonly ENTITY_METADATA: PacketType;
  static readonly ATTACH_ENTITY: PacketType;
  static readonly ENTITY_VELOCITY: PacketType;
  static readonly ENTITY_EQUIPMENT: PacketType;
  static readonly EXPERIENCE: PacketType;
  static readonly UPDATE_HEALTH: PacketType;
  static readonly SCOREBOARD_OBJECTIVE: PacketType;
  static readonly MOUNT: PacketType;
  static readonly SCOREBOARD_TEAM: PacketType;
  static readonly SCOREBOARD_SCORE: PacketType;
  static readonly SET_SUBTITLE_TEXT: PacketType;
  static readonly UPDATE_TIME: PacketType;
  static readonly SET_TITLE_TEXT: PacketType;
  static readonly SET_TITLES_ANIMATION: PacketType;
  static readonly ENTITY_SOUND: PacketType;
  static readonly NAMED_SOUND_EFFECT: PacketType;
  static readonly STOP_SOUND: PacketType;
  static readonly PLAYER_LIST_HEADER_FOOTER: PacketType;
  static readonly NBT_QUERY: PacketType;
  static readonly COLLECT: PacketType;
  static readonly ENTITY_TELEPORT: PacketType;
  static readonly ADVANCEMENTS: PacketType;
  static readonly UPDATE_ATTRIBUTES: PacketType;
  static readonly ENTITY_EFFECT: PacketType;
  static readonly RECIPE_UPDATE: PacketType;
  static readonly TAGS: PacketType;
  /**
   * @deprecated Removed in 1.9
  */
  static readonly MAP_CHUNK_BULK: PacketType;
  /**
   * @deprecated Removed in 1.9
  */
  static readonly SET_COMPRESSION: PacketType;
  /**
   * @deprecated Removed in 1.9
  */
  static readonly UPDATE_ENTITY_NBT: PacketType;
  /**
   * @deprecated Renamed to {@link #WINDOW_DATA}
  */
  static readonly CRAFT_PROGRESS_BAR: PacketType;
  /**
   * @deprecated Renamed to {@link #REL_ENTITY_MOVE_LOOK}
  */
  static readonly ENTITY_MOVE_LOOK: PacketType;
  /**
   * @deprecated Renamed to {@link #STATISTIC}
  */
  static readonly STATISTICS: PacketType;
  /**
   * @deprecated Renamed to {@link #OPEN_SIGN_EDITOR}
  */
  static readonly OPEN_SIGN_ENTITY: PacketType;
  /**
   * @deprecated Replaced by {@link #TILE_ENTITY_DATA}
  */
  static readonly UPDATE_SIGN: PacketType;
  /**
   * @deprecated Removed in 1.14
  */
  static readonly BED: PacketType;
  /**
   * @deprecated Renamed to {@link #BED}
  */
  static readonly USE_BED: PacketType;
  /**
   * @deprecated Removed in 1.16
  */
  static readonly SPAWN_ENTITY_WEATHER: PacketType;
  /**
   * @deprecated Removed in 1.17, split into separate packets
  */
  static readonly TITLE: PacketType;
  /**
   * @deprecated Removed in 1.17, split into separate packets
  */
  static readonly WORLD_BORDER: PacketType;
  /**
   * @deprecated Removed in 1.17, split into separate packets
  */
  static readonly COMBAT_EVENT: PacketType;
  /**
   * @deprecated Removed in 1.17
  */
  static readonly TRANSACTION: PacketType;
  /**
   * @deprecated Made abstract in 1.17, no actual packet anymore
  */
  static readonly ENTITY: PacketType;
  static getSender(): Sender;
  static getInstance(): Server;
}
/**
 * Incoming packets.
 * @author Kristian
*/
export class Client extends PacketTypeEnum {
  static readonly TELEPORT_ACCEPT: PacketType;
  static readonly TILE_NBT_QUERY: PacketType;
  static readonly DIFFICULTY_CHANGE: PacketType;
  static readonly CHAT: PacketType;
  static readonly CLIENT_COMMAND: PacketType;
  static readonly SETTINGS: PacketType;
  static readonly TAB_COMPLETE: PacketType;
  static readonly ENCHANT_ITEM: PacketType;
  static readonly WINDOW_CLICK: PacketType;
  static readonly CLOSE_WINDOW: PacketType;
  static readonly CUSTOM_PAYLOAD: PacketType;
  static readonly B_EDIT: PacketType;
  static readonly ENTITY_NBT_QUERY: PacketType;
  static readonly USE_ENTITY: PacketType;
  static readonly JIGSAW_GENERATE: PacketType;
  static readonly KEEP_ALIVE: PacketType;
  static readonly DIFFICULTY_LOCK: PacketType;
  static readonly POSITION: PacketType;
  static readonly POSITION_LOOK: PacketType;
  static readonly LOOK: PacketType;
  static readonly GROUND: PacketType;
  static readonly VEHICLE_MOVE: PacketType;
  static readonly BOAT_MOVE: PacketType;
  static readonly PICK_ITEM: PacketType;
  static readonly AUTO_RECIPE: PacketType;
  static readonly ABILITIES: PacketType;
  static readonly BLOCK_DIG: PacketType;
  static readonly ENTITY_ACTION: PacketType;
  static readonly STEER_VEHICLE: PacketType;
  static readonly PONG: PacketType;
  static readonly RECIPE_SETTINGS: PacketType;
  static readonly RECIPE_DISPLAYED: PacketType;
  static readonly ITEM_NAME: PacketType;
  static readonly RESOURCE_PACK_STATUS: PacketType;
  static readonly ADVANCEMENTS: PacketType;
  static readonly TR_SEL: PacketType;
  static readonly BEACON: PacketType;
  static readonly HELD_ITEM_SLOT: PacketType;
  static readonly SET_COMMAND_BLOCK: PacketType;
  static readonly SET_COMMAND_MINECART: PacketType;
  static readonly SET_CREATIVE_SLOT: PacketType;
  static readonly SET_JIGSAW: PacketType;
  static readonly STRUCT: PacketType;
  static readonly UPDATE_SIGN: PacketType;
  static readonly ARM_ANIMATION: PacketType;
  static readonly SPECTATE: PacketType;
  static readonly USE_ITEM: PacketType;
  static readonly BLOCK_PLACE: PacketType;
  /**
   * @deprecated Removed in 1.17
  */
  static readonly TRANSACTION: PacketType;
  /**
   * @deprecated Removed in 1.17
  */
  static readonly FLYING: PacketType;
  static getSender(): Sender;
  static getInstance(): Client;
}

}
declare module 'com.comphenix.protocol.metrics' {
import { List } from 'java.util';
import { CustomChart } from 'com.comphenix.protocol.metrics.Metrics';
import { ProtocolLib } from 'com.comphenix.protocol';
export class Statistics {
  constructor(plugin: ProtocolLib);
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
declare module 'com.comphenix.protocol.error.Report' {
import { Throwable } from 'java.lang';
import { Report, ReportType } from 'com.comphenix.protocol.error';
import { TimeUnit } from 'java.util.concurrent';
/**
 * Must be constructed through the factory method in Report.
*/
export class ReportBuilder {
  /**
   * Set the current report type. Cannot be NULL.
   * @param type - report type.
   * @return This builder, for chaining.
  */
  type(type: ReportType): ReportBuilder;
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
declare module 'com.comphenix.protocol.wrappers.nbt.io' {
import { Method } from 'java.lang.reflect';
import { Class } from 'java.lang';
import { LoadMethod } from 'com.comphenix.protocol.wrappers.nbt.io.NbtBinarySerializer';
import { DataInput, DataOutput } from 'java.io';
import { NbtType, NbtBase, NbtCompound, NbtList, NbtWrapper } from 'com.comphenix.protocol.wrappers.nbt';
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
  /**
   * Construct a serializer with a custom binary serializer.
   * @param binary - binary serializer.
  */
  constructor(binary: NbtBinarySerializer);
  /**
   * Retrieve the binary serializer that is used.
   * @return The binary serializer.
  */
  getBinarySerializer(): NbtBinarySerializer;
  /**
   * Serialize a NBT tag to a base-64 encoded string.
   * @param  Type
   * @param value - the NBT tag to serialize.
   * @return The NBT tag in base-64 form.
  */
  serialize<TType>(value: NbtBase<TType>): string;
  /**
   * Deserialize a NBT tag from a base-64 encoded string.
   * @param  Type
   * @param input - the base-64 string.
   * @return The NBT tag contained in the string.
   * @throws IOException If we are unable to parse the input.
  */
  deserialize<TType>(input: string): NbtWrapper<TType>;
  /**
   * Deserialize a NBT compound from a base-64 encoded string.
   * @param input - the base-64 string.
   * @return The NBT tag contained in the string.
   * @throws IOException If we are unable to parse the input.
  */
  deserializeCompound(input: string): NbtCompound;
  /**
   * Deserialize a NBT list from a base-64 encoded string.
   * @param  Type
   * @param input - the base-64 string.
   * @return The NBT tag contained in the string.
   * @throws IOException If we are unable to parse the input.
  */
  deserializeList<T>(input: string): NbtList<T>;
}
export class NbtBinarySerializer {
  /**
   * Retrieve a default instance of the NBT binary serializer.
  */
  static readonly DEFAULT: NbtBinarySerializer;
  /**
   * Write the content of a wrapped NBT tag to a stream.
   * @param  Type
   * @param value - the NBT tag to write.
   * @param destination - the destination stream.
  */
  serialize<TType>(value: NbtBase<TType>, destination: DataOutput): void;
  /**
   * Load an NBT tag from a stream.
   * @param  Type
   * @param source - the input stream.
   * @return An NBT tag.
  */
  deserialize<TType>(source: DataInput): NbtWrapper<TType>;
  /**
   * Load an NBT compound from a stream.
   * @param source - the input stream.
   * @return An NBT compound.
  */
  deserializeCompound(source: DataInput): NbtCompound;
  /**
   * Load an NBT list from a stream.
   * @param  Type
   * @param source - the input stream.
   * @return An NBT list.
  */
  deserializeList<T>(source: DataInput): NbtList<T>;
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
  toNodeValue(value: any, type: NbtType): any;
}

}
