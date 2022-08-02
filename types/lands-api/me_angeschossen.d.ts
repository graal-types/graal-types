declare module 'me.angeschossen.lands.api.nation' {
import { Collection } from 'java.util';
import { LandPlayer } from 'me.angeschossen.lands.api.player';
import { MemberHolder } from 'me.angeschossen.lands.api';
import { Land } from 'me.angeschossen.lands.api.land';
export class Nation extends MemberHolder {
  getCapital(): Land;
  /**
   * Check if a land is member of this nation.
   *
   * @param land The target land
   * @return Will return false if land is not member of this nation.
  */
  isMember(land: Land): boolean;
  isMember(landPlayer: LandPlayer): boolean;
  /**
   * Get the members of this land.
   *
   * @return Lands of this nation.
  */
  getLands(): Collection<Land>;
}

}
declare module 'me.angeschossen.lands.api.land.enums' {
import { Enum } from 'java.lang';
export class SortMode extends Enum<SortMode> {
  static readonly CHUNKS: SortMode;
  static readonly BALANCE: SortMode;
  static readonly MEMBERS: SortMode;
  static readonly LEVEL: SortMode;
  static valueOf(name: string): SortMode;
  static values(): SortMode[];
}
export class LandType extends Enum<LandType> {
  static readonly LAND: LandType;
  static readonly ADMIN: LandType;
  static readonly CAMP: LandType;
  static valueOf(name: string): LandType;
  static values(): LandType[];
  readonly id: number;
  static getById(id: number): LandType;
  isSelectable(): boolean;
}
export class LandGetMode extends Enum<LandGetMode> {
  static readonly POSITION: LandGetMode;
  static readonly EDIT: LandGetMode;
  static readonly CONFIG: LandGetMode;
  static valueOf(name: string): LandGetMode;
  static values(): LandGetMode[];
}
export class SettingMode extends Enum<SettingMode> {
  static readonly GLOBAL: SettingMode;
  static readonly LAND: SettingMode;
  static valueOf(name: string): SettingMode;
  static values(): SettingMode[];
}
export class LandSetting extends Enum<LandSetting> {
  static readonly ENTITY_GRIEFING: LandSetting;
  static readonly TNT_GRIEFING: LandSetting;
  static readonly PISTON_GRIEFING: LandSetting;
  static readonly MONSTER_SPAWN: LandSetting;
  static readonly ANIMAL_SPAWN: LandSetting;
  static readonly WATERFLOW_ALLOW: LandSetting;
  static readonly TITLE_HIDE: LandSetting;
  static readonly FIRE_SPREAD: LandSetting;
  static readonly LEAF_DECAY: LandSetting;
  static readonly PLANT_GROWTH: LandSetting;
  static readonly SNOW_KEEP: LandSetting;
  static valueOf(name: string): LandSetting;
  static values(): LandSetting[];
  isInverted(): boolean;
  getCfgName(): string;
  static getById(iD: number): LandSetting;
  static getByCfgName(name: string): LandSetting;
  static init(): void;
  getStatus(b: boolean): boolean;
  getId(): number;
  isWilderness(): boolean;
  isAllowInWar(): boolean;
  isDisplayable(): boolean;
  isForceEnable(): boolean;
}

}
declare module 'me.angeschossen.lands.api.inbox' {
import { Enum } from 'java.lang';
export class InboxCategory extends Enum<InboxCategory> {
  static readonly ALL: InboxCategory;
  static readonly ECONOMY: InboxCategory;
  static readonly MEMBERS: InboxCategory;
  static readonly WAR: InboxCategory;
  static valueOf(name: string): InboxCategory;
  static values(): InboxCategory[];
}
export class InboxMessage {
  getCategory(): InboxCategory;
  getTime(): number;
  getText(): string;
  getTextWithDate(): string;
  appliesToFilter(type: InboxCategory): boolean;
}

}
declare module 'me.angeschossen.lands.api.role.enums' {
import { Enum } from 'java.lang';
export class RoleType extends Enum<RoleType> {
  static readonly OWNER: RoleType;
  static readonly NATION: RoleType;
  static readonly NORMAL: RoleType;
  static readonly ENTRY: RoleType;
  static readonly VISITOR: RoleType;
  static valueOf(name: string): RoleType;
  static values(): RoleType[];
  static getById(id: number): RoleType;
  getId(): number;
  isSystem(): boolean;
  shouldCountOnNextFreePriority(): boolean;
  isDeleteable(): boolean;
  setDeleteable(deleteable: boolean): void;
  shouldAddToNewObject(): boolean;
  canMultiple(): boolean;
}

}
declare module 'me.angeschossen.lands.api' {
import { Color } from 'java.awt';
import { WarStats, War } from 'me.angeschossen.lands.api.war';
import { Enum } from 'java.lang';
import { Collection, List, UUID } from 'java.util';
import { MessageSource } from 'me.angeschossen.lands.api.events.LandChatEvent';
import { LandPlayer } from 'me.angeschossen.lands.api.player';
import { BalanceHolder } from 'me.angeschossen.lands.api.holders';
import { InboxCategory, InboxMessage } from 'me.angeschossen.lands.api.inbox';
import { CompletableFuture } from 'java.util.concurrent';
import { Level } from 'me.angeschossen.lands.api.levels';
import { WarTeam } from 'me.angeschossen.lands.api.war.enums';
export class MemberHolder extends BalanceHolder {
  addWarshield(seconds: number): void;
  exists(): boolean;
  /**
   * Get all allies.
   *
   * @return Current allies
  */
  getAllies(): Collection<MemberHolder>;
  getCachedRequirement(requirement: string): number;
  getChunksAmount(): number;
  getColorName(): string;
  /**
   * Get the creation timestamp.
   *
   * @return Time milliseconds
  */
  getCreationTime(): number;
  /**
   * Get all enemies.
   *
   * @return Current enemies
  */
  getEnemies(): Collection<MemberHolder>;
  getId(): number;
  getInbox(): InboxMessage[];
  getInbox(category: InboxCategory): InboxMessage[];
  getLevel(): Level;
  getMembersAmount(): number;
  getName(): string;
  getOnlineLandPlayers(): Collection<LandPlayer>;
  getOwnerUID(): UUID;
  getStats(): WarStats;
  /**
   * Get all trusted players
   *
   * @return Trusted players
  */
  getTrustedPlayers(): Collection<UUID>;
  getType(): HolderType;
  getWar(): War | null;
  getWarName(): string;
  getWarTeam(): WarTeam | null;
  getWarshield(): number;
  getWebMapColor(): Color | null;
  hasWarEntity(entity: MemberHolder): boolean;
  hasWarshield(): boolean;
  /**
   * Check if memberHolder has alliance with this once.
   *
   * @param memberHolder The target
   * @return true, if they're in an alliance.
  */
  isAlly(memberHolder: MemberHolder): boolean;
  /**
   * Check if memberHolder is an enemy to this one.
   *
   * @param memberHolder The target
   * @return true, if they're enemies.
  */
  isEnemy(memberHolder: MemberHolder): boolean;
  isInWar(): boolean;
  isRequirementCached(requirement: string): boolean;
  isTrusted(uuid: UUID): boolean;
  isWarField(): boolean;
  leaveWar(): boolean;
  markLevelUpdate(): void;
  modifyRequirementCache(requirement: string, modify: number, allowNegative: boolean): CompletableFuture<number>;
  /**
   * Send message to online players of this land.
   *
   * @param playerUUID Sender
   * @param message    Message
   * @param messageSource Where the message has been sent from.
  */
  sendMessage(playerUUID: UUID, message: string, messageSource: MessageSource): void;
  setWarShield(warShield: number);
  updateRequirementCache(requirement: string, val: number, levelCalc: boolean): void;
}
export class HolderType extends Enum<HolderType> {
  static readonly LAND: HolderType;
  static readonly NATION: HolderType;
  static valueOf(name: string): HolderType;
  static values(): HolderType[];
}

}
declare module 'me.angeschossen.lands.api.flags' {
import { Collection, List } from 'java.util';
import { Category } from 'me.angeschossen.lands.api.flags.types.RoleFlag';
import { RoleFlag, LandFlag } from 'me.angeschossen.lands.api.flags.types';
import { Target, Module } from 'me.angeschossen.lands.api.flags.Flag';
export class FlagRegistry {
  register(flag: Flag): Flag;
  isValidName(name: string): boolean;
  getRole(name: string): RoleFlag | null;
  getLand(name: string): LandFlag | null;
  get(name: string): Flag | null;
  getRoleFlags(): Collection<RoleFlag>;
  getRoleFlags(category: Category): RoleFlag[];
  getLandFlags(): Collection<LandFlag>;
}
export class Flags {
  static BLOCK_BREAK: RoleFlag;
  static BLOCK_PLACE: RoleFlag;
  static ATTACK_PLAYER: RoleFlag;
  static ATTACK_ANIMAL: RoleFlag;
  static ATTACK_MONSTER: RoleFlag;
  static BLOCK_IGNITE: RoleFlag;
  static INTERACT_GENERAL: RoleFlag;
  static INTERACT_MECHANISM: RoleFlag;
  static INTERACT_CONTAINER: RoleFlag;
  static INTERACT_DOOR: RoleFlag;
  static INTERACT_TRAPDOOR: RoleFlag;
  static INTERACT_VILLAGER: RoleFlag;
  static FLY: RoleFlag;
  static SPAWN_TELEPORT: RoleFlag;
  static LAND_ENTER: RoleFlag;
  static VEHICLE_USE: RoleFlag;
  static ITEM_PICKUP: RoleFlag;
  static ENDER_PEARL: RoleFlag;
  static TRAMPLE_FARMLAND: RoleFlag;
  static HARVEST: RoleFlag;
  static PLAYER_TRUST: RoleFlag;
  static PLAYER_UNTRUST: RoleFlag;
  static PLAYER_SETROLE: RoleFlag;
  static LAND_CLAIM: RoleFlag;
  static LAND_CLAIM_BORDER: RoleFlag;
  static SPAWN_SET: RoleFlag;
  static SETTING_EDIT_LAND: RoleFlag;
  static SETTING_EDIT_ROLE: RoleFlag;
  static SETTING_EDIT_TAXES: RoleFlag;
  static SETTING_EDIT_VARIOUS: RoleFlag;
  static BALANCE_WITHDRAW: RoleFlag;
  static AREA_ASSIGN: RoleFlag;
  static PLAYER_BAN: RoleFlag;
  static WAR_MANAGE: RoleFlag;
  static NO_DAMAGE: RoleFlag;
  static ENTITY_GRIEFING: LandFlag;
  static TNT_GRIEFING: LandFlag;
  static PISTON_GRIEFING: LandFlag;
  static MONSTER_SPAWN: LandFlag;
  static ANIMAL_SPAWN: LandFlag;
  static WATERFLOW_ALLOW: LandFlag;
  static TITLE_HIDE: LandFlag;
  static FIRE_SPREAD: LandFlag;
  static LEAF_DECAY: LandFlag;
  static PLANT_GROWTH: LandFlag;
  static SNOW_MELT: LandFlag;
  static NATION_EDIT: RoleFlag;
  static registerAll(): void;
  static get(name: string): Flag | null;
}
export class Flag {
  isDisplayInWild(): boolean;
  isAlwaysAllowInWild(): boolean;
  isApplyInSubareas(): boolean;
  getDescription(): string[] | null;
  setDescription(description: string[] | null): void;
  setDescription(description: string | null): void;
  isDisplay(): boolean;
  setDisplay(display: boolean): Flag;
  getDisplayName(): string;
  setDisplayName(displayName: string | null);
  getName(): string;
  getWarState(): boolean;
  setWarState(state: boolean): Flag;
  getTogglePerm(): string;
  getModule(): Module;
  getTarget(): Target;
}

}
declare module 'me.angeschossen.lands.api.land' {
import { Nation } from 'me.angeschossen.lands.api.nation';
import { War } from 'me.angeschossen.lands.api.war';
import { DeleteReason } from 'me.angeschossen.lands.api.events.land';
import { Collection, UUID } from 'java.util';
import { TrustedPlayer, LandPlayer, Invite } from 'me.angeschossen.lands.api.player';
import { LandSetting } from 'me.angeschossen.lands.api.land.enums';
import { CompletableFuture } from 'java.util.concurrent';
import { RoleFlag, LandFlag } from 'me.angeschossen.lands.api.flags.types';
import { BoundingBox } from 'me.angeschossen.lands.api.blockworks';
import { MemberHolder } from 'me.angeschossen.lands.api';
import { Role } from 'me.angeschossen.lands.api.role';
export class LandArea extends Area {
  /**
   * Get the bounding box of the sub area.
   *
   * @return Will return null if the area is not setup {@link #isSetup()}.
  */
  getBoundingBox(): BoundingBox | null;
  setName(name: string);
  contains(x: number, y: number, z: number): boolean;
  isSetup(): boolean;
  getName(): string;
}
export class ChunkCoordinate {
  equals(x: number, z: number): boolean;
  /**
   * Get block x
   *
   * @return Block x
  */
  getBlockX(): number;
  /**
   * Get block z
   *
   * @return Block z
  */
  getBlockZ(): number;
  /**
   * Get chunk x
   *
   * @return Chunk x
  */
  getX(): number;
  /**
   * Get chunk z
   *
   * @return Chunk z
  */
  getZ(): number;
  /**
   * Check if chunk contains these parameters.
   *
   * @param worldName World
   * @param x         Chunk x
   * @param z         Chunk z
   * @return Will return false if not all parameters match.
  */
  equals(worldName: string, x: number, z: number): boolean;
}
export class LandWorld {
  getLand(x: number, z: number): Land | null;
  getArea(x: number, y: number, z: number): Area | null;
  /**
   * Get name of world.
   *
   * @return Name of world
  */
  getName(): string;
  /**
   * Is landChunk loaded?
   *
   * @param x X identifier
   * @param z Z identifier
   * @return Loaded
  */
  isChunkLoaded(x: number, z: number): boolean;
}
export class Land extends MemberHolder {
  getDefaultArea(): Area;
  delete(landPlayer: LandPlayer | null, reason: DeleteReason): CompletableFuture<boolean>;
  hasArea(name: string): boolean;
  banPlayer(playerUID: UUID): boolean;
  unbanPlayer(playerUID: UUID): void;
  /**
   * Get the identification of this land.
   * This is independent of the land name.
   *
   * @return Numerical ID
  */
  getId(): number;
  getWar(): War;
  getNation(): Nation | null;
  /**
   * Get upkeep costs
   *
   * @return Upkeep costs
  */
  getUpkeepCosts(): number;
  getColorName(): string;
  /**
   * Get name of the land
   * This value never changes
   *
   * @return Name of land without color
  */
  getName(): string;
  /**
   * Set name of land
   *
   * @param name New name
   * @return Will return false, if a 3rd party plugin cancelled it.
  */
  setName(name: string);
  /**
   * Get owner UUID of land
   *
   * @return UUID of owner
  */
  getOwnerUID(): UUID;
  /**
   * Untrust a player in the whole land.
   *
   * @param playerUID Player UID
   * @return Change
  */
  untrustPlayer(playerUID: UUID): boolean;
  /**
   * Get the size of an land
   *
   * @return Size of land
  */
  getSize(): number;
  /**
   * Trust a player to the whole land, including areas.
   *
   * @param playerUID The target player
   * @return Change
  */
  trustPlayer(playerUID: UUID): boolean;
  /**
   * Get max members.
   *
   * @return Max members
  */
  getMaxMembers(): number;
  /**
   * Get max chunk claims.
   *
   * @param countNation Should level bonuses from the nation be added to the value?
   * @return Max chunk claims
  */
  getMaxChunks(countNation: boolean): number;
  /**
   * Set title message.
   *
   * @param title If title is null, it will set the default title instead.
  */
  setTitleMessage(titleMessage: string | null);
  /**
   * Set an new owner for land
   *
   * @param playerUID Player for new owner
  */
  setOwner(owner: UUID);
  isTrusted(playerUID: UUID): boolean;
  /**
   * Get trusted player.
   *
   * @param playerUUID UID of player.
   * @return Trusted player
  */
  getTrustedPlayer(playerUUID: UUID): TrustedPlayer | null;
  /**
   * Does land exist?
   *
   * @return boolean
  */
  exists(): boolean;
  /**
   * Get land balance
   *
   * @return Balance
  */
  getBalance(): number;
  /**
   * Set land bank balance
   *
   * @param balance Value
  */
  setBalance(balance: number);
  /**
   * Add money to land bank. Use negative numbers
   * to remove money.
   *
   * @param value Value
   * @return If value was negative and result smaller then 0, false.
  */
  addBalance(value: number): boolean;
}
export class TaxHolder {
  setTax(tax: number);
  addTax(value: number): number;
  getTax(): number;
  getName(): string;
  getColorName(): string;
  getEstimatedTaxRevenue(self: any | null, assumeTrusted: boolean, before: boolean): number;
}
export class Area {
  addTax(tax: number): number;
  banPlayer(uuid: UUID): boolean;
  canEnter(landPlayer: LandPlayer, sendMessage: boolean): boolean;
  getColorName(): string;
  getEntryRole(): Role;
  getInvite(receiverUUID: UUID): Invite | null;
  getLand(): Land;
  getName(): string;
  getOwnerUID(): UUID;
  getRole(playerUID: UUID): Role;
  getRole(name: string): Role;
  getTax(): number;
  setTax(tax: number);
  getTrustedPlayers(): Collection<UUID>;
  getVisitorRole(): Role;
  hasFlag(flag: LandFlag): boolean;
  hasFlag(playerUUID: UUID, flag: RoleFlag): boolean;
  hasLandSetting(naturalFlags: LandSetting): boolean;
  isBanned(playerUID: UUID): boolean;
  isDefault(): boolean;
  isTrusted(playerUID: UUID): boolean;
  toggleFlag(flag: LandFlag): boolean;
  toggleLandSetting(naturalFlags: LandSetting): boolean;
  unbanPlayer(playerUID: UUID): void;
}

}
declare module 'me.angeschossen.lands.api.war' {
import { MemberHolder } from 'me.angeschossen.lands.api';
export class War {
  end(winner: MemberHolder, surrendered: boolean, reward: number): void;
  isParticipating(entity: MemberHolder): boolean;
  isEndingSoon(): boolean;
  getWinner(): MemberHolder | null;
  getAttackerStats(): WarStats;
  getDefenderStats(): WarStats;
}
export class WarStats {
  getWon(): number;
  getLost(): number;
  getKills(): number;
  getDeaths(): number;
  getCaptures(): number;
}

}
declare module 'me.angeschossen.lands.api.holders' {
export class BalanceHolder {
  getBalance(): number;
  setBalance(balance: number);
  addBalance(add: number): boolean;
  getName(): string;
  getWarName(): string;
  getBalanceDisplay(): string;
}

}
declare module 'me.angeschossen.lands.api.flags.types.RoleFlag' {
import { Enum } from 'java.lang';
export class Category extends Enum<Category> {
  static readonly ACTION: Category;
  static readonly MANAGEMENT: Category;
  static valueOf(name: string): Category;
  static values(): Category[];
}

}
declare module 'me.angeschossen.lands.api.war.declaration' {
import { War } from 'me.angeschossen.lands.api.war';
import { WarTeam } from 'me.angeschossen.lands.api.war.enums';
export class WarDeclaration {
  setTribute(tribute: number);
  getTribute(): number;
  getMaxTribute(warTeam: WarTeam): number;
  startsSoon(): boolean;
  start(): War;
}

}
declare module 'me.angeschossen.lands.api.player' {
import { War } from 'me.angeschossen.lands.api.war';
import { Set, Collection, UUID } from 'java.util';
import { BlockCoordinate } from 'me.angeschossen.lands.api.blockworks';
import { BiPredicate } from 'java.util.function';
import { ChunkCoordinate, Land } from 'me.angeschossen.lands.api.land';
export class Selection {
  /**
   * Is selection complete (pos 1 and pos 2)?
   *
   * @return Will return false if one position is missing.
  */
  isComplete(): boolean;
  /**
   * Get pos 1
   *
   * @return Location of pos 1
  */
  getPos1(): BlockCoordinate;
  /**
   * Get pos 2
   *
   * @return Location of pos 2
  */
  getPos2(): BlockCoordinate;
  /**
   * Is valid?
   *
   * @param sendMessage Send not valid messages to player?
   * @return Will return false if selection is not complete, positions are not in the same world
   * or the selection is too big.
  */
  isValid(sendMessage: boolean): boolean;
  /**
   * Get chunks in this selection.
   *
   * @return Chunks in this selection
  */
  getChunks(): Collection<ChunkCoordinate>;
  /**
   * Get size.
   *
   * @return Size
  */
  getSize(): number;
  getChunks(predicate: BiPredicate<number, number>): Collection<ChunkCoordinate>;
  /**
   * Disable selection
  */
  disable(): void;
}
export class TrustedPlayer {
  /**
   * Get max chunk claims
   *
   * @return Max chunk claims
  */
  getSupportClaims(): number;
  /**
   * Is the player trusted in the whole land?
   *
   * @return Is trusted in whole land
  */
  isTrustedWholeLand(): boolean;
  getTrustedSize(): number;
  /**
   * Get player UID
   *
   * @return The players UUID
  */
  getUID(): UUID;
}
export class OfflinePlayer {
  getEditLand(): Land | null;
  getLands(): Collection<Land>;
  getSize(): number;
  /**
   * Get UID of player
   *
   * @return UUID
  */
  getUID(): UUID;
}
export class Visualization {
  /**
   * @return Whether the visualization is permanent or not.
  */
  isPermanent(): boolean;
  /**
   * Check if visualization has more time until it stops.
   *
   * @return Will return false if the visualization is about to stop.
  */
  hasNext(): boolean;
}
export class Invite {
  isWholeLand(): boolean;
  /**
   * Get UUID of sender
   *
   * @return UUID of sender
  */
  getSender(): UUID;
  /**
   * Get UUID of receiver
   *
   * @return UUID of receiver
  */
  getReceiver(): UUID;
  /**
   * Get sent date
   *
   * @return Date
  */
  getTime(): number;
  /**
   * Deny invite
  */
  deny(): void;
  /**
   * Get land
   *
   * @return Land
  */
  getLand(): Land;
}
export class LandPlayer extends OfflinePlayer {
  /**
   * Is the player participating in a war?
   *
   * @return true, if player is in war.
  */
  isInWar(): boolean;
  /**
   * Check if the player is participating in the war.
   *
   * @param war War
   * @return true, if they're participating in the war.
  */
  isInWar(war: War): boolean;
  getWars(): Set<War>;
  /**
   * Get current selection.
   *
   * @return Selection
  */
  getSelection(): Selection | null;
  /**
   * Get support claims per land.
   *
   * @return Max support claims
  */
  getSupportClaimsPerLand(): number;
  /**
   * Get a players /lands edit land.
   * @param sendMessage true: the player will receive a message, if they're not part of a land.
   * @return The current /lands edit land
  */
  getEditLand(sendMessage: boolean): Land | null;
  /**
   * Get invite of land
   *
   * @param landName Name of land
   * @return Invite
  */
  getInvite(landName: string): Invite;
  /**
   * Get land where the player is member in
   *
   * @param landName Name or displayname of land
   * @return Land or null, if not member
  */
  getLand(landName: string): Land | null;
  /**
   * Set edit land
   * /lands edit
   *
   * @param land Land to select
  */
  setEditLand(editLand: Land | null);
  /**
   * Get all lands the player owns or is member of.
   *
   * @return Lands
  */
  getLands(): Set<Land>;
  /**
   * Get number of lands (own lands and where the player is trusted)
   *
   * @return Will return 0, if player has no lands.
  */
  getSize(): number;
  /**
   * Get an owning land
   *
   * @return Land or null, if player doesn't own a land
  */
  getOwningLand(): Land | null;
  getInvites(): Collection<Invite>;
  /**
   * Check if player invited from land
   *
   * @param landName Name of land
   * @return Will return false if no invite from land found.
  */
  hasInvite(landName: string): boolean;
  /**
   * Check if player has owning land
   *
   * @return Will return false if players doesn't own land.
  */
  ownsLand(): boolean;
  /**
   * Get names of lands.
   *
   * @return Array
  */
  getLandNames(): string[];
  getEditLand(): Land | null;
}

}
declare module 'me.angeschossen.lands.api.levels.requirement' {
import { List } from 'java.util';
import { Requirement as me_angeschossen_lands_api_levels_Requirement } from 'me.angeschossen.lands.api.levels';
import { MemberHolder } from 'me.angeschossen.lands.api';
export class Requirement extends me_angeschossen_lands_api_levels_Requirement {
  getRequired(): number;
  getProgressDisplay(memberHolder: MemberHolder): string;
  getProgress(memberHolder: MemberHolder): number;
  matches(memberHolder: MemberHolder): boolean;
  getDescription(): string[];
  getName(): string;
  getTitle(): string;
}
export class CachedRequirement extends Requirement {
  getValue(memberHolder: MemberHolder): number;
  retrieveValue(memberHolder: MemberHolder): number;
}

}
declare module 'me.angeschossen.lands.api.levels.attribute.impl' {
import { LevelAttribute } from 'me.angeschossen.lands.api.levels.attribute';
export class EffectsAttribute extends LevelAttribute {

}
export class ChunksAttribute extends LevelAttribute {
  constructor(name: string, description: string, value: number);
  getValue(): number;
}
export class EffectsAmountAttribute extends LevelAttribute {
  constructor(name: string, description: string, amount: number);
  getValue(): number;
}
export class UpkeepAttribute extends LevelAttribute {
  constructor(name: string, description: string, value: number);
  getValue(): number;
  modifyUpkeep(value: number): number;
}

}
declare module 'me.angeschossen.lands.api.flags.Flag' {
import { Enum } from 'java.lang';
export class Target extends Enum<Target> {
  static readonly PLAYER: Target;
  static readonly ADMIN: Target;
  static valueOf(name: string): Target;
  static values(): Target[];
}
export class Module extends Enum<Module> {
  static readonly LAND: Module;
  static readonly WAR: Module;
  static readonly NATION: Module;
  static valueOf(name: string): Module;
  static values(): Module[];
}

}
declare module 'me.angeschossen.lands.api.levels' {
import { Collection, List } from 'java.util';
import { MemberHolder } from 'me.angeschossen.lands.api';
export class Level {
  addRequirement(requirement: Requirement): void;
  getName(): string;
  getNext(): Level | null;
  getPrevious(): Level | null;
  getPosition(): number;
  getProgress(memberHolder: MemberHolder): number;
  getRequirements(): Collection<Requirement>;
  matches(memberHolder: MemberHolder): boolean;
}
export class LevelsHandler {
  getLandLevels(): Level[];
  getNationLevels(): Level[];
}
export class Requirement {
  getName(): string;
  getTitle(): string;
  getValue(memberHolder: MemberHolder): number;
  getProgress(memberHolder: MemberHolder): number;
  getDescription(): string[];
  getRequired(): number;
  getProgressDisplay(memberHolder: MemberHolder): string;
  matches(memberHolder: MemberHolder): boolean;
}

}
declare module 'me.angeschossen.lands.api.sorting' {
import { Collection, List, Comparator } from 'java.util';
export class Sorting<T> extends Comparator<T> {
  constructor(sortingContext: SortingContext<T>, id: string);
  get(place: number): T | null;
  get(): T[];
  getDisplayName(): string;
  getEmoji(): string;
  getId(): string;
  getPlace(t: T): number;
  handleParseHologramLine(place: number): string | null;
  handleParseMenuItem(place: number): string[][];
  handleParseSignLines(place: number): string[];
  sort(): void;
}
export class SortingContext<T> {
  addSorting(sorting: Sorting<T>): void;
  getId(): string;
  getNext(mode: Sorting<T> | null): Sorting<T>;
  getSortings(): Collection<Sorting<T>>;
  getTargets(): T[];
}

}
declare module 'me.angeschossen.lands.api.blockworks' {
export class BoundingBox {
  getMax(): BlockCoordinate;
  getMin(): BlockCoordinate;
  contains(x: number, y: number, z: number): boolean;
  /**
   * Same as {@link #contains(int, int, int)}, but ignores y values.
   *
   * @param x Block coordinate X
   * @param z Block coordinate Z
   * @return true, if the boundingBox contains these coordinates.
  */
  contains(x: number, z: number): boolean;
}
export class BlockCoordinate {
  getX(): number;
  getY(): number;
  getZ(): number;
  getChunkX(): number;
  getChunkZ(): number;
}

}
declare module 'me.angeschossen.lands.api.exceptions' {
import { RuntimeException } from 'java.lang';
import { Flag } from 'me.angeschossen.lands.api.flags';
import { Land } from 'me.angeschossen.lands.api.land';
export class PlayerUntrustedException extends RuntimeException {
  constructor(errorMessage: string);
}
export class FlagConflictException extends RuntimeException {
  constructor(existing: Flag, message: string);
  getExisting(): Flag;
}
export class NameAlreadyTakenException extends RuntimeException {
  constructor(errorMessage: string);
}
export class ManagedByDifferentHolderException extends RuntimeException {
  constructor(errorMessage: string);
}
export class PlayerTrustedException extends RuntimeException {
  constructor(errorMessage: string);
}
export class IllegalUntrustException extends RuntimeException {
  constructor(errorMessage: string);
}
export class LandAlreadyInNationException extends RuntimeException {
  constructor(land: Land);
}

}
declare module 'me.angeschossen.lands.api.nation.invite' {
import { Nation } from 'me.angeschossen.lands.api.nation';
import { Land } from 'me.angeschossen.lands.api.land';
export class NationInvite {
  /**
   * Get sender nation.
   *
   * @return Sender
  */
  getSender(): Nation;
  /**
   * Get receiver land.
   *
   * @return Receiver
  */
  getReceiver(): Land;
  /**
   * Accept invite
   *
   * @return Will return false if land or nation does not exist anymore.
   * @throws LandAlreadyInNationException If the target land is already part of a nation.
  */
  accept(): boolean;
  /**
   * Deny invite - land.
  */
  deny(): void;
  /**
   * Revoke invite - nation.
  */
  revoke(): void;
}

}
declare module 'me.angeschossen.lands.api.events.land' {
import { Enum } from 'java.lang';
export class DeleteReason extends Enum<DeleteReason> {
  static readonly DEFAULT: DeleteReason;
  static readonly UPKEEP: DeleteReason;
  static readonly ADMIN: DeleteReason;
  static readonly INACTIVITY: DeleteReason;
  static readonly UNKNOWN: DeleteReason;
  static readonly WAR: DeleteReason;
  static readonly EXPIRED: DeleteReason;
  static readonly NO_CLAIMS: DeleteReason;
  static valueOf(name: string): DeleteReason;
  static values(): DeleteReason[];
}

}
declare module 'me.angeschossen.lands.api.flags.types' {
import { LandPlayer } from 'me.angeschossen.lands.api.player';
import { Category } from 'me.angeschossen.lands.api.flags.types.RoleFlag';
import { Module } from 'me.angeschossen.lands.api.flags.Flag';
import { Predicate } from 'java.util.function';
import { Role } from 'me.angeschossen.lands.api.role';
import { Flag } from 'me.angeschossen.lands.api.flags';
import { Area, Land } from 'me.angeschossen.lands.api.land';
export class RoleFlag extends Flag {
  isToggleableByNation(): boolean;
  setToggleableByNation(toggleable: boolean): RoleFlag;
  getPredicate(): Predicate<Role>;
  getTogglePerm(): string;
  sendDenied(landPlayer: LandPlayer, area: Area | null): void;
  sendDeniedInWar(landPlayer: LandPlayer, land: Land | null): void;
  getBypassPerm(): string;
  getModule(): Module;
  getBypassPermWild(): string;
  getCategory(): Category;
}
export class NationRoleFlag extends RoleFlag {
  getTogglePerm(): string;
  getBypassPerm(): string;
  getBypassPermWild(): string;
  getModule(): Module;
}
export class LandFlag extends Flag {
  getDefaultState(): boolean;
  setDefaultState(defaultState: boolean): Flag;
  getModule(): Module;
  getTogglePerm(): string;
}

}
declare module 'me.angeschossen.lands.api.levels.attribute' {
export class LevelAttribute {
  constructor(name: string, description: string);
  getAttributeDisplay(): string;
  getName(): string;
}

}
declare module 'me.angeschossen.lands.api.integration' {
import { Nation } from 'me.angeschossen.lands.api.nation';
import { Runnable } from 'java.lang';
import { Collection, List, UUID } from 'java.util';
import { LandPlayer, OfflinePlayer } from 'me.angeschossen.lands.api.player';
import { SortMode } from 'me.angeschossen.lands.api.land.enums';
import { CompletableFuture } from 'java.util.concurrent';
import { LevelsHandler } from 'me.angeschossen.lands.api.levels';
import { SortingContext } from 'me.angeschossen.lands.api.sorting';
import { FlagRegistry, Flag } from 'me.angeschossen.lands.api.flags';
import { LandWorld, Land } from 'me.angeschossen.lands.api.land';
export class LandsIntegrator {
  /**
   * Add requirements to levels.
   *
   * @return LevelsHandler
   * @since 5.14.0
  */
  getLevelsHandler(): LevelsHandler;
  /**
   * Execute actions once Lands is loaded.
   * This is not needed in most use cases.
   *
   * @param runnable The runnable that will be executed.
   * @since 5.13.0
  */
  onLoad(runnable: Runnable): void;
  /**
   * The flag registry allows you to make some more specific actions than in the Flags class.
   *
   * @return The flag registry
  */
  getFlagRegistry(): FlagRegistry;
  /**
   * Register your owns flags into Lands. They will also be toggleable in the GUI menus if you set display to true.
   *
   * @param flag RoleFlag or LandFlag
   *             RoleFlags are "playerflags" and LandFlags are natural flags.
   *             For roleflags you need to specify the Category type ACTION or MANAGEMENT.
   * @throws FlagConflictException    A flag with this name already exists.
   * @throws IllegalArgumentException The name is invalid. It contains illegal characters or is too long (greater than 20 chars).
  */
  registerFlag(flag: Flag): void;
  /**
   * Get cached landPlayer
   *
   * @param playerUUID UUID of player
   * @return LandPlayer or null, if not cached
   * @since 2.5.7
  */
  getLandPlayer(playerUUID: UUID): LandPlayer | null;
  isClaimed(worldName: string, chunkX: number, chunkZ: number): CompletableFuture<boolean>;
  /**
   * Get land.
   *
   * @param worldName Name of world, where land is located
   * @param landName  Name or displayname of land
   * @return Land or null, if not exists.
   * @since 2.5.7
  */
  getLand(worldName: string, landName: string): Land;
  getOfflineLandPlayer(playerUID: UUID): CompletableFuture<OfflinePlayer>;
  /**
   * Get landWorld.
   *
   * @param worldName Name of world.
   * @return LandWorld or null, if it's not an landWorld.
  */
  getLandWorld(worldName: string): LandWorld;
  getLand(id: number): Land;
  getNation(id: number): Nation | null;
  getNation(name: string): Nation | null;
  /**
   * Get land by name
   * Name is not case sensitive
   *
   * @param name Name
   * @return Land
  */
  getLand(name: string): Land;
  getLands(): Collection<Land>;
  /**
   * Get top lands by sorting.
   *
   * @param sortMode Sortmode
   * @return Top lands in order
  */
  getTopLands(sortMode: SortMode): Land[];
  /**
   * Get top lands by sorting.
   *
   * @param sortMode Sortmode
   * @param page     Same as /lands top
   * @return Top lands in order
  */
  getTopLands(sortMode: SortMode, page: number): Land[];
  /**
   * Get a sorted context.
   * @param id The context id. Default: land, nation
   * @return null, if the sorting context does not exist.
  */
  getSortingContext(id: string): SortingContext<any> | null;
  /**
   * Get top land by sorting and place.
   *
   * @param sortMode Sortmode
   * @param place    Place
   * @return Top lands in order
  */
  getTopLand(sortMode: SortMode, place: number): Land | null;
  /**
   * Print top lands, same as /lands top.
   *
   * @param sortMode Sortmode
   * @param page     Page
   * @return Top lands in order and message
  */
  printTopLands(sortMode: SortMode, page: number): string[];
  /**
   * Get name of integration.
   *
   * @return Name
  */
  getName(): string;
  disable(): void;
  disable(hookKey: string | null): void;
  initialize(): string;
  isEnabled(): boolean;
  getAccess(hookKey: string): boolean;
  isPublic(): boolean;
  getDefaultTopSortMode(): SortMode;
}
export class LandsIntegration extends LandsIntegrator {
  disable(): void;
  disable(hookKey: string | null): void;
  getAccess(hookKey: string): boolean;
  getDefaultTopSortMode(): SortMode;
  /**
   * The flag registry allows you to make some more specific actions than in the Flags class.
   *
   * @return The flag registry
  */
  getFlagRegistry(): FlagRegistry;
  /**
   * Get land.
   *
   * @param worldName Name of world, where land is located
   * @param landName  Name or displayname of land
   * @return Land or null, if not exists.
   * @since 2.5.7
  */
  getLand(worldName: string, landName: string): Land;
  /**
   * Get land.
   *
   * @param worldName Name of world, where land is located
   * @param landName  Name or displayname of land
   * @return Land or null, if not exists.
   * @since 2.5.7
  */
  getLand(id: number): Land;
  /**
   * Get land.
   *
   * @param worldName Name of world, where land is located
   * @param landName  Name or displayname of land
   * @return Land or null, if not exists.
   * @since 2.5.7
  */
  getLand(name: string): Land;
  /**
   * Get cached landPlayer
   *
   * @param playerUUID UUID of player
   * @return LandPlayer or null, if not cached
   * @since 2.5.7
  */
  getLandPlayer(playerUUID: UUID): LandPlayer | null;
  /**
   * Get landWorld.
   *
   * @param worldName Name of world.
   * @return LandWorld or null, if it's not an landWorld.
  */
  getLandWorld(worldName: string): LandWorld;
  getLands(): Collection<Land>;
  /**
   * Add requirements to levels.
   *
   * @return LevelsHandler
   * @since 5.14.0
  */
  getLevelsHandler(): LevelsHandler;
  /**
   * Get name of integration.
   *
   * @return Name
  */
  getName(): string;
  getNation(id: number): Nation | null;
  getNation(name: string): Nation | null;
  getOfflineLandPlayer(playerUID: UUID): CompletableFuture<OfflinePlayer>;
  /**
   * Get top land by sorting and place.
   *
   * @param sortMode Sortmode
   * @param place    Place
   * @return Top lands in order
  */
  getTopLand(sortMode: SortMode, place: number): Land;
  /**
   * Get top lands by sorting.
   *
   * @param sortMode Sortmode
   * @return Top lands in order
  */
  getTopLands(sortMode: SortMode): Land[];
  /**
   * Get top lands by sorting.
   *
   * @param sortMode Sortmode
   * @return Top lands in order
  */
  getTopLands(sortMode: SortMode, page: number): Land[];
  /**
   * Get a sorted context.
   * @param id The context id. Default: land, nation
   * @return null, if the sorting context does not exist.
  */
  getSortingContext(id: string): SortingContext<any> | null;
  initialize(): string;
  isClaimed(worldName: string, chunkX: number, chunkZ: number): CompletableFuture<boolean>;
  isEnabled(): boolean;
  isPublic(): boolean;
  /**
   * Execute actions once Lands is loaded.
   * This is not needed in most use cases.
   *
   * @param runnable The runnable that will be executed.
   * @since 5.13.0
  */
  onLoad(runnable: Runnable): void;
  /**
   * Print top lands, same as /lands top.
   *
   * @param sortMode Sortmode
   * @param page     Page
   * @return Top lands in order and message
  */
  printTopLands(sortMode: SortMode, page: number): string[];
  /**
   * Register your owns flags into Lands. They will also be toggleable in the GUI menus if you set display to true.
   *
   * @param flag RoleFlag or LandFlag
   *             RoleFlags are "playerflags" and LandFlags are natural flags.
   *             For roleflags you need to specify the Category type ACTION or MANAGEMENT.
   * @throws FlagConflictException    A flag with this name already exists.
   * @throws IllegalArgumentException The name is invalid. It contains illegal characters or is too long (greater than 20 chars).
  */
  registerFlag(flag: Flag): void;
}

}
declare module 'me.angeschossen.lands.api.role' {
import { RoleFlag } from 'me.angeschossen.lands.api.flags.types';
import { RoleType } from 'me.angeschossen.lands.api.role.enums';
export class Role {
  getType(): RoleType;
  getName(): string;
  setName(name: string);
  getColorName(): string;
  isVisitorRole(): boolean;
  toggleFlag(flag: RoleFlag): boolean;
  hasFlag(flag: RoleFlag): boolean;
}

}
declare module 'me.angeschossen.lands.api.war.enums' {
import { Enum } from 'java.lang';
export class WarStatus extends Enum<WarStatus> {
  static readonly PREPARATION: WarStatus;
  static readonly FIGHT: WarStatus;
  static valueOf(name: string): WarStatus;
  static values(): WarStatus[];
}
export class WarTeam extends Enum<WarTeam> {
  static readonly ATTACKER: WarTeam;
  static readonly DEFENDER: WarTeam;
  static readonly NEUTRAL: WarTeam;
  static valueOf(name: string): WarTeam;
  static values(): WarTeam[];
  getOpposite(): WarTeam;
}
export class WarSetting extends Enum<WarSetting> {
  static readonly FRIENDLY_FIRE: WarSetting;
  static valueOf(name: string): WarSetting;
  static values(): WarSetting[];
  static getById(id: number): WarSetting;
  isEnabled(): boolean;
  setEnabled(): void;
  getId(): number;
}
export class WarResult extends Enum<WarResult> {
  static readonly SURRENDERED: WarResult;
  static readonly DRAW: WarResult;
  static readonly NORMAL: WarResult;
  static valueOf(name: string): WarResult;
  static values(): WarResult[];
}

}
