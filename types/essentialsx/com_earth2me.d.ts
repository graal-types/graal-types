declare module 'com.earth2me.essentials.MobData' {
import { Enum } from 'java.lang';
export class Data extends Enum<Data> {
  static readonly ADULT: Data;
  static readonly BABY: Data;
  static readonly CHEST: Data;
  static readonly ADULTZOMBIE: Data;
  static readonly BABYZOMBIE: Data;
  static readonly HORSESADDLE: Data;
  static readonly PIGSADDLE: Data;
  static readonly ELECTRIFIED: Data;
  static readonly ANGRY: Data;
  static readonly TAMED: Data;
  static readonly COLORABLE: Data;
  static readonly EXP: Data;
  static readonly SIZE: Data;
  static readonly RAID_LEADER: Data;
  static readonly FISH_BODY_COLOR: Data;
  static readonly FISH_PATTERN_COLOR: Data;
  static readonly GOAT_SCREAMING: Data;
  static valueOf(name: string): Data;
  static values(): Data[];
}

}
declare module 'com.earth2me.essentials.Trade' {
import { Enum } from 'java.lang';
export class TradeType extends Enum<TradeType> {
  static readonly MONEY: TradeType;
  static readonly EXP: TradeType;
  static readonly ITEM: TradeType;
  static valueOf(name: string): TradeType;
  static values(): TradeType[];
}
export class OverflowType extends Enum<OverflowType> {
  static readonly ABORT: OverflowType;
  static readonly DROP: OverflowType;
  static readonly RETURN: OverflowType;
  static valueOf(name: string): OverflowType;
  static values(): OverflowType[];
}

}
declare module 'com.earth2me.essentials.textreader' {
import { List, Map } from 'java.util';
export class BookPager {
  getPages(pageStr: string): string[];
}
export class TextPager {

}
export class IText {
  getLines(): string[];
  getChapters(): string[];
  getBookmarks(): Map<string, number>;
}
export class SimpleTextPager {
  getLines(): string[];
  getLine(line: number): string;
}

}
declare module 'com.earth2me.essentials.signs.EssentialsSign' {
export class ISign {
  getLine(index: number): string;
  setLine(index: number, text: string): void;
  updateSign(): void;
}

}
declare module 'com.earth2me.essentials.craftbukkit' {
export class InventoryWorkaround {

}
export class BanLookup {

}
export class SetExpFix {
  static getExpAtLevel(level: number): number;
  static getExpToLevel(level: number): number;
}

}
declare module 'com.earth2me.essentials.updatecheck' {
import { CompletableFuture } from 'java.util.concurrent';
import { RemoteVersion } from 'com.earth2me.essentials.updatecheck.UpdateChecker';
export class UpdateChecker {
  isDevBuild(): boolean;
  fetchLatestDev(): CompletableFuture<RemoteVersion>;
  fetchLatestRelease(): CompletableFuture<RemoteVersion>;
  getVersionIdentifier(): string;
  getVersionBranch(): string;
  getBuildInfo(): string;
  getLatestRelease(): string;
  getVersionMessages(sendLatestMessage: boolean, verboseErrors: boolean): string[];
}

}
declare module 'com.earth2me.essentials.utils.PasteUtil' {
export class PasteFile {
  constructor(name: string, contents: string);
  getName(): string;
  getContents(): string;
}
export class PasteResult {
  getPasteUrl(): string;
  getDeletionKey(): string | null;
  getPasteId(): string;
}

}
declare module 'com.earth2me.essentials.utils.VersionUtil' {
import { Enum, Comparable } from 'java.lang';
import { Pattern } from 'java.util.regex';
export class BukkitVersion extends Comparable<BukkitVersion> {
  static fromString(string: string): BukkitVersion;
  isHigherThan(o: BukkitVersion): boolean;
  isHigherThanOrEqualTo(o: BukkitVersion): boolean;
  isLowerThan(o: BukkitVersion): boolean;
  isLowerThanOrEqualTo(o: BukkitVersion): boolean;
  getMajor(): number;
  getMinor(): number;
  getPatch(): number;
  getRevision(): number;
  getPrerelease(): number;
  getReleaseCandidate(): number;
  equals(o: any): boolean;
  hashCode(): number;
  toString(): string;
  compareTo(o: BukkitVersion): number;
}
export class SupportStatus extends Enum<SupportStatus> {
  static readonly FULL: SupportStatus;
  static readonly LIMITED: SupportStatus;
  static readonly DANGEROUS_FORK: SupportStatus;
  static readonly NMS_CLEANROOM: SupportStatus;
  static readonly UNSTABLE: SupportStatus;
  static readonly OUTDATED: SupportStatus;
  static valueOf(name: string): SupportStatus;
  static values(): SupportStatus[];
  isSupported(): boolean;
}

}
declare module 'com.earth2me.essentials.config.holders' {
import { Timestamps } from 'com.earth2me.essentials.config.holders.UserConfigHolder';
import { List, UUID, Map } from 'java.util';
import { BigDecimal } from 'java.math';
export class UserConfigHolder {
  money(): BigDecimal;
  money(value: BigDecimal): void;
  nickname(): string;
  nickname(value: string): void;
  powertools(): Map<string, string[]>;
  jail(): string;
  jail(value: string): void;
  teleportEnabled(): boolean;
  teleportEnabled(value: boolean): void;
  teleportAuto(): boolean;
  teleportAuto(value: boolean): void;
  ignore(): UUID[];
  ignore(value: UUID[]): void;
  godMode(): boolean;
  godMode(value: boolean): void;
  muted(): boolean;
  muted(value: boolean): void;
  muteReason(): string;
  muteReason(value: string): void;
  jailed(): boolean;
  jailed(value: boolean): void;
  ipAddress(): string;
  ipAddress(value: string): void;
  afk(): boolean;
  afk(value: boolean): void;
  geolocation(): string;
  geolocation(value: string): void;
  socialSpy(): boolean;
  socialSpy(value: boolean): void;
  npc(): boolean;
  npc(value: boolean): void;
  lastAccountName(): string;
  lastAccountName(value: string): void;
  powerToolsEnabled(): boolean;
  powerToolsEnabled(value: boolean): void;
  acceptingPay(): boolean;
  acceptingPay(value: boolean): void;
  confirmPay(): boolean;
  confirmPay(value: boolean): void;
  confirmClear(): boolean;
  confirmClear(value: boolean): void;
  lastMessageReplyRecipient(): boolean;
  lastMessageReplyRecipient(value: boolean): void;
  baltopExempt(): boolean;
  baltopExempt(value: boolean): void;
  shouting(): boolean;
  shouting(value: boolean): void;
  timestamps(): Timestamps;
}

}
declare module 'com.earth2me.essentials.metrics' {
import { Map } from 'java.util';
export class MetricsWrapper {
  markCommand(command: string, state: boolean): void;
}

}
declare module 'com.earth2me.essentials.config.annotations' {
/**
 * Used to indicate to Configurate that the annotated field should be
 * treated as null if it is treated as incomplete.
*/
export class DeleteIfIncomplete {

}
/**
 * Used to indicate to Configurate that the annotated field should be
 * treated as null if it is a Collection, Map, or String that is empty.
*/
export class DeleteOnEmpty {

}

}
declare module 'com.earth2me.essentials.commands' {
import { Map } from 'java.util';
import { Throwable, NoSuchFieldException, Exception } from 'java.lang';
export class PlayerExemptException extends NoSuchFieldException {
  constructor(message: string);
}
export class NotEnoughArgumentsException extends Exception {
  constructor();
  constructor(string: string);
  constructor(ex: Throwable);
}
export class PlayerNotFoundException extends NoSuchFieldException {
  constructor();
}
export class WarpNotFoundException extends Exception {
  constructor();
  constructor(message: string);
}
export class NoChargeException extends Exception {
  constructor();
}
export class IEssentialsCommand {
  getName(): string;
  getUsageStrings(): Map<string, string>;
}
export class QuietAbortException extends Exception {
  constructor();
  constructor(message: string);
}

}
declare module 'com.earth2me.essentials.MobCompat' {
import { Enum } from 'java.lang';
export class CatType extends Enum<CatType> {
  static readonly SIAMESE: CatType;
  static readonly WHITE: CatType;
  static readonly RED: CatType;
  static readonly TABBY: CatType;
  static readonly TUXEDO: CatType;
  static readonly BRITISH_SHORTHAIR: CatType;
  static readonly CALICO: CatType;
  static readonly PERSIAN: CatType;
  static readonly RAGDOLL: CatType;
  static readonly JELLIE: CatType;
  static readonly BLACK: CatType;
  static valueOf(name: string): CatType;
  static values(): CatType[];
}
export class VillagerProfession extends Enum<VillagerProfession> {
  static readonly NONE: VillagerProfession;
  static readonly ARMORER: VillagerProfession;
  static readonly BUTCHER: VillagerProfession;
  static readonly CARTOGRAPHER: VillagerProfession;
  static readonly CLERIC: VillagerProfession;
  static readonly FARMER: VillagerProfession;
  static readonly FISHERMAN: VillagerProfession;
  static readonly FLETCHER: VillagerProfession;
  static readonly LEATHERWORKER: VillagerProfession;
  static readonly LIBRARIAN: VillagerProfession;
  static readonly MASON: VillagerProfession;
  static readonly NITWIT: VillagerProfession;
  static readonly SHEPHERD: VillagerProfession;
  static readonly TOOLSMITH: VillagerProfession;
  static readonly WEAPONSMITH: VillagerProfession;
  static valueOf(name: string): VillagerProfession;
  static values(): VillagerProfession[];
}

}
declare module 'com.earth2me.essentials.config' {
import { Type } from 'java.lang.reflect';
import { Runnable, Class } from 'java.lang';
import { Set, List } from 'java.util';
import { File } from 'java.io';
import { ExecutorService } from 'java.util.concurrent';
import { AtomicBoolean, AtomicInteger } from 'java.util.concurrent.atomic';
import { BigDecimal } from 'java.math';
export class ConfigurateUtil {
  static toBigDecimal(input: string, def: BigDecimal): BigDecimal;
}
export class ConfigurationSaveTask extends Runnable {
  run(): void;
}
export class EssentialsConfiguration {
  constructor(configFile: File);
  constructor(configFile: File, templateName: string);
  constructor(configFile: File, templateName: string, resourceClass: Class<any>);
  constructor(configFile: File, templateName: string, header: string);
  getFile(): File;
  setProperty(path: string, list: any[]): void;
  setExplicitList<T>(path: string, list: T[], type: Type): void;
  getList<T>(path: string, type: Class<T>): T[];
  isList(path: string): boolean;
  setProperty(path: string, value: string): void;
  getString(path: string, def: string): string;
  setProperty(path: string, value: boolean): void;
  getBoolean(path: string, def: boolean): boolean;
  isBoolean(path: string): boolean;
  setProperty(path: string, value: number): void;
  getLong(path: string, def: number): number;
  getInt(path: string, def: number): number;
  getDouble(path: string, def: number): number;
  getFloat(path: string, def: number): number;
  setProperty(path: string, value: BigDecimal): void;
  getBigDecimal(path: string, def: BigDecimal): BigDecimal;
  setRaw(path: string, value: any): void;
  get(path: string): any;
  getKeys(): Set<string>;
  removeProperty(path: string): void;
  hasProperty(path: string): boolean;
  load(): void;
  legacyFileExists(): boolean;
  convertLegacyFile(): void;
  altFileExists(): boolean;
  convertAltFile(): void;
  /**
   * Begins a transaction.
   * 
   * A transaction informs Essentials to pause the saving of data. This is should be used when
   * bulk operations are being done and data shouldn't be saved until after the transaction has
   * been completed.
  */
  startTransaction(): void;
  stopTransaction(): void;
  stopTransaction(blocking: boolean): void;
  setSaveHook(saveHook: Runnable);
  save(): void;
  blockingSave(): void;
}

}
declare module 'com.earth2me.essentials.config.entities' {
/**
 * Represents a Location but doesn't parse the location until it is requested via {@link LazyLocation#location()}.
*/
export class LazyLocation {
  constructor(worldId: string, worldName: string, x: number, y: number, z: number, yaw: number, pitch: number);
  world(): string;
  worldName(): string;
  x(): number;
  y(): number;
  z(): number;
  yaw(): number;
  pitch(): number;
}

}
declare module 'com.earth2me.essentials.config.holders.UserConfigHolder' {
import { Map } from 'java.util';
export class Timestamps {
  lastTeleport(): number;
  lastTeleport(value: number): void;
  lastHeal(): number;
  lastHeal(value: number): void;
  mute(): number;
  mute(value: number): void;
  jail(): number;
  jail(value: number): void;
  onlineJail(): number;
  onlineJail(value: number): void;
  logout(): number;
  logout(value: number): void;
  login(): number;
  login(value: number): void;
  kits(): Map<string, number>;
  kits(value: Map<string, number>): void;
}

}
declare module 'com.earth2me.essentials' {
import { MessageDigest } from 'java.security';
import { Set, ArrayList, List, UUID, Map, Date, LinkedList } from 'java.util';
import { TradeType } from 'com.earth2me.essentials.Trade';
import { CompletableFuture, ScheduledExecutorService, ConcurrentSkipListMap } from 'java.util.concurrent';
import { AtomicBoolean } from 'java.util.concurrent.atomic';
import { DecimalFormat } from 'java.text';
import { Enum, Runnable, Throwable, Class, Exception } from 'java.lang';
import { Pattern } from 'java.util.regex';
import { FileWriter, FileFilter, File } from 'java.io';
import { ExecuteRecord } from 'com.earth2me.essentials.ExecuteTimer';
import { MethodHandle } from 'java.lang.invoke';
import { Enemies } from 'com.earth2me.essentials.Mob';
import { TpaRequest } from 'com.earth2me.essentials.IUser';
import { BigDecimal } from 'java.math';
export class CommandSource {
  isPlayer(): boolean;
  sendMessage(message: string): void;
  getSelfSelector(): string;
  getDisplayName(): string;
}
export class ChargeException extends Exception {
  constructor(message: string);
  constructor(message: string, throwable: Throwable);
}
export class ITarget {

}
export class SpawnMob {
  static mobParts(mobString: string): string[];
  static mobData(mobString: string): string[];
}
export class EssentialsLogger {

}
export class TimedTeleport extends Runnable {
  run(): void;
}
export class StorageTest {
  constructor();
  testOldUserdata(): void;
}
export class EssentialsTimer extends Runnable {
  run(): void;
  getAverageTPS(): number;
}
export class IEssentialsModule {

}
export class AlternativeCommandsHandler {
  disabledCommands(): Map<string, string>;
}
export class MetaItemStack {
  isValidFirework(): boolean;
  isValidPotion(): boolean;
  completePotion(): boolean;
  addItemFlags(string: string): void;
}
export class ExecuteTimer {
  constructor();
  start(): void;
  mark(label: string): void;
  end(): string;
}
export class Backup extends Runnable {
  onPlayerJoin(): void;
  stopTask(): void;
  getTaskLock(): CompletableFuture<any>;
  setPendingShutdown(shutdown: boolean): void;
  run(): void;
}
export class Mob extends Enum<Mob> {
  static readonly CHICKEN: Mob;
  static readonly COW: Mob;
  static readonly CREEPER: Mob;
  static readonly GHAST: Mob;
  static readonly GIANT: Mob;
  static readonly HORSE: Mob;
  static readonly PIG: Mob;
  static readonly PIGZOMB: Mob;
  static readonly ZOMBIFIED_PIGLIN: Mob;
  static readonly SHEEP: Mob;
  static readonly SKELETON: Mob;
  static readonly SLIME: Mob;
  static readonly SPIDER: Mob;
  static readonly SQUID: Mob;
  static readonly ZOMBIE: Mob;
  static readonly WOLF: Mob;
  static readonly CAVESPIDER: Mob;
  static readonly ENDERMAN: Mob;
  static readonly SILVERFISH: Mob;
  static readonly ENDERDRAGON: Mob;
  static readonly VILLAGER: Mob;
  static readonly BLAZE: Mob;
  static readonly MUSHROOMCOW: Mob;
  static readonly MAGMACUBE: Mob;
  static readonly SNOWMAN: Mob;
  static readonly OCELOT: Mob;
  static readonly IRONGOLEM: Mob;
  static readonly WITHER: Mob;
  static readonly BAT: Mob;
  static readonly WITCH: Mob;
  static readonly BOAT: Mob;
  static readonly MINECART: Mob;
  static readonly MINECART_CHEST: Mob;
  static readonly MINECART_FURNACE: Mob;
  static readonly MINECART_TNT: Mob;
  static readonly MINECART_HOPPER: Mob;
  static readonly MINECART_MOB_SPAWNER: Mob;
  static readonly ENDERCRYSTAL: Mob;
  static readonly EXPERIENCEORB: Mob;
  static readonly ARMOR_STAND: Mob;
  static readonly ENDERMITE: Mob;
  static readonly GUARDIAN: Mob;
  static readonly ELDER_GUARDIAN: Mob;
  static readonly RABBIT: Mob;
  static readonly SHULKER: Mob;
  static readonly POLAR_BEAR: Mob;
  static readonly WITHER_SKELETON: Mob;
  static readonly STRAY_SKELETON: Mob;
  static readonly ZOMBIE_VILLAGER: Mob;
  static readonly SKELETON_HORSE: Mob;
  static readonly ZOMBIE_HORSE: Mob;
  static readonly DONKEY: Mob;
  static readonly MULE: Mob;
  static readonly EVOKER: Mob;
  static readonly VEX: Mob;
  static readonly VINDICATOR: Mob;
  static readonly LLAMA: Mob;
  static readonly HUSK: Mob;
  static readonly ILLUSIONER: Mob;
  static readonly PARROT: Mob;
  static readonly TURTLE: Mob;
  static readonly PHANTOM: Mob;
  static readonly COD: Mob;
  static readonly SALMON: Mob;
  static readonly PUFFERFISH: Mob;
  static readonly TROPICAL_FISH: Mob;
  static readonly DROWNED: Mob;
  static readonly DOLPHIN: Mob;
  static readonly CAT: Mob;
  static readonly FOX: Mob;
  static readonly PANDA: Mob;
  static readonly PILLAGER: Mob;
  static readonly RAVAGER: Mob;
  static readonly TRADER_LLAMA: Mob;
  static readonly WANDERING_TRADER: Mob;
  static readonly BEE: Mob;
  static readonly STRAY: Mob;
  static readonly HOGLIN: Mob;
  static readonly PIGLIN: Mob;
  static readonly STRIDER: Mob;
  static readonly ZOGLIN: Mob;
  static readonly PIGLIN_BRUTE: Mob;
  static readonly AXOLOTL: Mob;
  static readonly GOAT: Mob;
  static readonly GLOW_SQUID: Mob;
  static readonly ALLAY: Mob;
  static readonly FROG: Mob;
  static readonly TADPOLE: Mob;
  static readonly WARDEN: Mob;
  static readonly CHEST_BOAT: Mob;
  static valueOf(name: string): Mob;
  static values(): Mob[];
  readonly name: string;
  readonly type: Enemies;
  suffix: string;
  static getMobList(): Set<string>;
  static fromName(name: string): Mob;
}
export class Potions {

}
export class MobData extends Enum<MobData> {
  static readonly BABY_AGEABLE: MobData;
  static readonly ADULT_AGEABLE: MobData;
  static readonly BABY_CAT: MobData;
  static readonly BABY_PIG: MobData;
  static readonly BABY_WOLF: MobData;
  static readonly BABY_CHICKEN: MobData;
  static readonly BABY_HORSE: MobData;
  static readonly BABY_OCELOT: MobData;
  static readonly BABY_SHEEP: MobData;
  static readonly BABY_COW: MobData;
  static readonly BABY_VILLAGER: MobData;
  static readonly TAMED_TAMEABLE: MobData;
  static readonly TAME_TAMEABLE: MobData;
  static readonly RANDOM_SHEEP: MobData;
  static readonly COLORABLE_SHEEP: MobData;
  static readonly POLKA_HORSE: MobData;
  static readonly SOOTY_HORSE: MobData;
  static readonly BLAZE_HORSE: MobData;
  static readonly SOCKS_HORSE: MobData;
  static readonly LEOPARD_HORSE: MobData;
  static readonly APPALOOSA_HORSE: MobData;
  static readonly PAINT_HORSE: MobData;
  static readonly MILKY_HORSE: MobData;
  static readonly SPLOTCHY_HORSE: MobData;
  static readonly BLACK_HORSE: MobData;
  static readonly CHESTNUT_HORSE: MobData;
  static readonly LIVER_HORSE: MobData;
  static readonly CREAMY_HORSE: MobData;
  static readonly FLAXEN_HORSE: MobData;
  static readonly GRAY_HORSE: MobData;
  static readonly DAPPLE_HORSE: MobData;
  static readonly BUCKSKIN_HORSE: MobData;
  static readonly DARKBROWN_HORSE: MobData;
  static readonly DARK_HORSE: MobData;
  static readonly DBROWN_HORSE: MobData;
  static readonly BAY_HORSE: MobData;
  static readonly BROWN_HORSE: MobData;
  static readonly SADDLE_HORSE: MobData;
  static readonly GOLD_ARMOR_HORSE: MobData;
  static readonly DIAMOND_ARMOR_HORSE: MobData;
  static readonly ARMOR_HORSE: MobData;
  static readonly SIAMESE_CAT: MobData;
  static readonly WHITE_CAT: MobData;
  static readonly RED_CAT: MobData;
  static readonly ORANGE_CAT: MobData;
  static readonly TABBY_CAT: MobData;
  static readonly BLACK_CAT: MobData;
  static readonly TUXEDO_CAT: MobData;
  static readonly BRITISH_SHORTHAIR_CAT: MobData;
  static readonly CALICO_CAT: MobData;
  static readonly PERSIAN_CAT: MobData;
  static readonly RAGDOLL_CAT: MobData;
  static readonly JELLIE_CAT: MobData;
  static readonly ALL_BLACK_CAT: MobData;
  static readonly BABY_ZOMBIE: MobData;
  static readonly ADULT_ZOMBIE: MobData;
  static readonly NETHERITE_SWORD_ZOMBIE: MobData;
  static readonly DIAMOND_SWORD_ZOMBIE: MobData;
  static readonly GOLD_SWORD_ZOMBIE: MobData;
  static readonly IRON_SWORD_ZOMBIE: MobData;
  static readonly STONE_SWORD_ZOMBIE: MobData;
  static readonly SWORD_ZOMBIE: MobData;
  static readonly NETHERITE_SWORD_SKELETON: MobData;
  static readonly DIAMOND_SWORD_SKELETON: MobData;
  static readonly GOLD_SWORD_SKELETON: MobData;
  static readonly IRON_SWORD_SKELETON: MobData;
  static readonly STONE_SWORD_SKELETON: MobData;
  static readonly SWORD_SKELETON: MobData;
  static readonly BOW_SKELETON: MobData;
  static readonly POWERED_CREEPER: MobData;
  static readonly ELECTRIC_CREEPER: MobData;
  static readonly CHARGED_CREEPER: MobData;
  static readonly SADDLE_PIG: MobData;
  static readonly ANGRY_WOLF: MobData;
  static readonly RABID_WOLF: MobData;
  static readonly VILLAGER: MobData;
  static readonly ARMORER_VILLAGER: MobData;
  static readonly BUTCHER_VILLAGER: MobData;
  static readonly CARTOGRAPHER_VILLAGER: MobData;
  static readonly CLERIC_VILLAGER: MobData;
  static readonly FARMER_VILLAGER: MobData;
  static readonly FISHERMAN_VILLAGER: MobData;
  static readonly FLETCHER_VILLAGER: MobData;
  static readonly LEATHERWORKER_VILLAGER: MobData;
  static readonly LIBRARIAN_VILLAGER: MobData;
  static readonly MASON_VILLAGER: MobData;
  static readonly NITWIT_VILLAGER: MobData;
  static readonly SHEPHERD_VILLAGER: MobData;
  static readonly TOOLSMITH_VILLAGER: MobData;
  static readonly WEAPONSMITH_VILLAGER: MobData;
  static readonly DESERT_VILLAGER: MobData;
  static readonly JUNGLE_VILLAGER: MobData;
  static readonly PLAINS_VILLAGER: MobData;
  static readonly SAVANNA_VILLAGER: MobData;
  static readonly SNOWY_VILLAGER: MobData;
  static readonly SWAMP_VILLAGER: MobData;
  static readonly TAIGA_VILLAGER: MobData;
  static readonly SIZE_SLIME: MobData;
  static readonly NUM_EXPERIENCE_ORB: MobData;
  static readonly RED_PARROT: MobData;
  static readonly GREEN_PARROT: MobData;
  static readonly BLUE_PARROT: MobData;
  static readonly CYAN_PARROT: MobData;
  static readonly GRAY_PARROT: MobData;
  static readonly KOB_TROPICAL_FISH: MobData;
  static readonly SUNSTREAK_TROPICAL_FISH: MobData;
  static readonly SNOOPER_TROPICAL_FISH: MobData;
  static readonly DASHER_TROPICAL_FISH: MobData;
  static readonly BRINELY_TROPICAL_FISH: MobData;
  static readonly SPOTTY_TROPICAL_FISH: MobData;
  static readonly FLOPPER_TROPICAL_FISH: MobData;
  static readonly STRIPEY_TROPICAL_FISH: MobData;
  static readonly GLITTER_TROPICAL_FISH: MobData;
  static readonly BLOCKFISH_TROPICAL_FISH: MobData;
  static readonly BETTY_TROPICAL_FISH: MobData;
  static readonly CLAYFISH_TROPICAL_FISH: MobData;
  static readonly BROWN_MUSHROOM_COW: MobData;
  static readonly RED_MUSHROOM_COW: MobData;
  static readonly AGGRESSIVE_PANDA_MAIN: MobData;
  static readonly LAZY_PANDA_MAIN: MobData;
  static readonly WORRIED_PANDA_MAIN: MobData;
  static readonly PLAYFUL_PANDA_MAIN: MobData;
  static readonly BROWN_PANDA_MAIN: MobData;
  static readonly WEAK_PANDA_MAIN: MobData;
  static readonly AGGRESSIVE_PANDA_HIDDEN: MobData;
  static readonly LAZY_PANDA_HIDDEN: MobData;
  static readonly WORRIED_PANDA_HIDDEN: MobData;
  static readonly PLAYFUL_PANDA_HIDDEN: MobData;
  static readonly BROWN_PANDA_HIDDEN: MobData;
  static readonly WEAK_PANDA_HIDDEN: MobData;
  static readonly CREAMY_LLAMA: MobData;
  static readonly WHITE_LLAMA: MobData;
  static readonly BROWN_LLAMA: MobData;
  static readonly GRAY_LLAMA: MobData;
  static readonly CREAMY_TRADER_LLAMA: MobData;
  static readonly WHITE_TRADER_LLAMA: MobData;
  static readonly BROWN_TRADER_LLAMA: MobData;
  static readonly GRAY_TRADER_LLAMA: MobData;
  static readonly RANDOM_SHULKER: MobData;
  static readonly COLORABLE_SHULKER: MobData;
  static readonly RED_FOX: MobData;
  static readonly SNOW_FOX: MobData;
  static readonly SIZE_PHANTOM: MobData;
  static readonly RAID_LEADER: MobData;
  static readonly TROPICAL_FISH_BODY_COLOR: MobData;
  static readonly TROPICAL_FISH_PATTERN_COLOR: MobData;
  static readonly LUCY_AXOLOTL: MobData;
  static readonly LEUCISTIC_AXOLOTL: MobData;
  static readonly PINK_AXOLOTL: MobData;
  static readonly WILD_AXOLOTL: MobData;
  static readonly BROWN_AXOLOTL: MobData;
  static readonly GOLD_AXOLOTL: MobData;
  static readonly CYAN_AXOLOTL: MobData;
  static readonly BLUE_AXOLOTL: MobData;
  static readonly SCREAMING_GOAT: MobData;
  static readonly TEMPERATE_FROG: MobData;
  static readonly WARM_FROG: MobData;
  static readonly COLD_FROG: MobData;
  static valueOf(name: string): MobData;
  static values(): MobData[];
  getMatched(): string;
}
export class Trade {
  static closeLog(): void;
  getMoney(): BigDecimal;
  getExperience(): number;
  getType(): TradeType;
}
export class IConf {
  reloadConfig(): void;
}
export class PlayerList {
  static outputFormat(group: string, message: string): string;
}
export class Kit {
  getName(): string;
  getItems(): string[];
}
export class UUIDMap {
  loadAllUsers(names: ConcurrentSkipListMap<string, UUID>, history: ConcurrentSkipListMap<UUID, ArrayList<string>>): void;
  writeUUIDMap(): void;
  forceWriteUUIDMap(): void;
  shutdown(): void;
}
export class MessagingTest {
  constructor();
  testNullLastMessageReplyRecipient(): void;
  testNonNullLastMessageReplyRecipient(): void;
}
export class PlayerExtension {

}
export class Enchantments {
  static keySet(): Set<string>;
}
export class MobCompat {
  static readonly RAIDER: Class;
}
export class EconomyTest {
  constructor();
  testEconomy(): void;
  testNegativePayCommand(): void;
}
export class ManagedFile {
  static copyResourceAscii(resourceName: string, file: File): void;
  static checkForVersion(file: File, version: string): boolean;
  static getDigest(): MessageDigest;
  getLines(): string[];
}
export class EssentialsUpgrade {
  convertMailList(): void;
  convertStupidCamelCaseUserdataKeys(): void;
  /**
   * This migration cleans up unused files left behind by the chaos resulting from Vault's questionable economy
   * integration, and upstream Essentials' rushed and untested 1.7.10 UUID support.
   * Both of these have been fixed in EssentialsX as of 2.18.x and 2.19.x respectively, but the leftover userdata
   * files can reach into the tens of thousands and can cause excessive memory and storage usage, so this migration
   * relocates these files to a backup folder to be removed by the server owner at a later date.
   * 
   * To quote JRoy, who suffered immensely while trying to debug and fix various related issues:
   * 
   * "Essentials decided when adding its initial support for UUIDs, it wanted an implementation which would cause
   * eternal pain and suffering for any person who dared touch any of the code in the future. This code that was made
   * was so bad, it managed to somehow not maintain any actual UUID support for any external integrations/plugins.
   * Up until 2.19.0 and 2.18.0 respectively, our Vault integration and entire Economy system was entirely based off
   * username strings, and thanks to Vault being a flawed standard, for some reason exposes account create to third
   * party plugins rather than letting the implementation handle it. That doesn't seem like a huge problem at the
   * surface, but there was one small problem: whoever made the Vault integration for Essentials suffered a stroke in
   * the process of creating it. The implementation for the createAccount method, regardless of whether it was an
   * actual player or an NPC account (which the Vault spec NEVER accounted for but plugins just have to guess when
   * to support them), it would always create an NPC account. This caused any plugin integrating with Vault, creating
   * NPC accounts for pretty much every single player on the server. It still, to this day, amazes me how nobody saw
   * this code and didn't die without rewriting it; Or how everybody simply didn't stop using this plugin because how
   * awful that godforsaken code was. Anyways, this upgrade does its best to delete NPC accounts created by the
   * horrible economy code, as any operation which loads all user data into memory will load all these NPC accounts
   * and spam the console with warnings."
  */
  purgeBrokenNpcAccounts(): void;
  convertIgnoreList(): void;
  convertKits(): void;
  banFormatChange(): void;
  beforeSettings(): void;
  afterSettings(): void;
}
export class AsyncTimedTeleport extends Runnable {
  run(): void;
}
/**
 * Provides access to the user abstraction and stored data. Maintainers should add methods to this interface.
 *
 * @deprecated External plugins should use {@link net.ess3.api.IUser} instead of this interface, in case future APIs are added.
*/
export class IUser {
  isAuthorized(node: string): boolean;
  isPermissionSet(node: string): boolean;
  healCooldown(): void;
  giveMoney(value: BigDecimal): void;
  takeMoney(value: BigDecimal): void;
  canAfford(value: BigDecimal): boolean;
  setLastLocation(): void;
  setLogoutLocation(): void;
  /**
   * Returns whether this user has an outstanding teleport request to deal with.
   *
   * @deprecated The teleport request system has been moved into a multi-user teleport request queue.
   * @see IUser#hasPendingTpaRequests(boolean, boolean)
   * @return whether there is a teleport request
  */
  hasOutstandingTeleportRequest(): boolean;
  getMoney(): BigDecimal;
  setMoney(money: BigDecimal);
  /**
   * 'Hidden' Represents when a player is hidden from others. This status includes when the player is hidden via other
   * supported plugins. Use isVanished() if you want to check if a user is vanished by Essentials.
   *
   * @return If the user is hidden or not
   * @see IUser#isVanished()
  */
  isHidden(): boolean;
  /**
   * Whether the user was hidden before leaving the server.
   *
   * @return true if the user was hidden.
  */
  isLeavingHidden(): boolean;
  setLeavingHidden(leavingHidden: boolean): void;
  setHidden(vanish: boolean): void;
  isGodModeEnabled(): boolean;
  getGroup(): string;
  inGroup(group: string): boolean;
  canBuild(): boolean;
  /**
   * @deprecated The teleport request system has been moved into a multi-user teleport request queue.
   * @see IUser#getNextTpaRequest(boolean, boolean, boolean)
  */
  getTeleportRequestTime(): number;
  enableInvulnerabilityAfterTeleport(): void;
  resetInvulnerabilityAfterTeleport(): void;
  hasInvulnerabilityAfterTeleport(): boolean;
  /**
   * 'Vanished' Represents when a player is hidden from others by Essentials. This status does NOT include when the
   * player is hidden via other plugins. Use isHidden() if you want to check if a user is vanished by any supported
   * plugin.
   *
   * @return If the user is vanished or not
   * @see IUser#isHidden()
  */
  isVanished(): boolean;
  setVanished(vanish: boolean): void;
  isIgnoreExempt(): boolean;
  sendMessage(message: string): void;
  getHomes(): string[];
  delHome(name: string): void;
  hasHome(): boolean;
  getLastTeleportTimestamp(): number;
  setLastTeleportTimestamp(lastTeleportTimestamp: number);
  getJail(): string;
  setJail(jail: string);
  getFormattedJailTime(): string;
  getMails(): string[];
  addMail(mail: string): void;
  getMailAmount(): number;
  isAfk(): boolean;
  setAfk(set: boolean): void;
  isIgnoreMsg(): boolean;
  setIgnoreMsg(ignoreMsg: boolean): void;
  setConfigProperty(node: string, object: any): void;
  getConfigKeys(): Set<string>;
  getConfigMap(): Map<string, any>;
  getConfigMap(node: string): Map<string, any>;
  getCommandCooldowns(): Map<Pattern, number>;
  getCommandCooldownExpiry(label: string): Date;
  addCommandCooldown(pattern: Pattern, expiresAt: Date, save: boolean): void;
  clearCommandCooldown(pattern: Pattern): boolean;
  getName(): string;
  getUUID(): UUID;
  getDisplayName(): string;
  getFormattedNickname(): string;
  getAfkMessage(): string;
  setAfkMessage(afkMessage: string);
  getAfkSince(): number;
  isAcceptingPay(): boolean;
  setAcceptingPay(acceptingPay: boolean): void;
  isPromptingPayConfirm(): boolean;
  setPromptingPayConfirm(prompt: boolean): void;
  isPromptingClearConfirm(): boolean;
  setPromptingClearConfirm(prompt: boolean): void;
  isLastMessageReplyRecipient(): boolean;
  setLastMessageReplyRecipient(enabled: boolean): void;
  setToggleShout(toggleShout: boolean): void;
  isToggleShout(): boolean;
  /**
   * Gets information about the most-recently-made, non-expired TPA request in the tpa queue of this {@link IUser}.
   * 
   * The TPA Queue is Last-In-First-Out queue which stores all the active pending teleport
   * requests of this {@link IUser}. Timeout calculations are also done during the
   * iteration process of this method, ensuring that teleport requests made past the timeout
   * period are removed from queue and therefore not returned here. The maximum size of this
   * queue is determined by {@link ISettings#getTpaMaxRequests()}.
   *
   * @param inform            true if the underlying {@link IUser} should be informed if a request expires during iteration.
   * @param ignoreExpirations true if this method should not process expirations for the entire queue and stop execution on the first unexpired request.
   * @param excludeHere       true if /tphere requests should be ignored in fetching the next tpa request.
   * @return A {@link TpaRequest} corresponding to the next available request or null if no valid request is present.
  */
  getNextTpaRequest(inform: boolean, ignoreExpirations: boolean, excludeHere: boolean): TpaRequest | null;
  /**
   * Whether or not this {@link IUser} has any valid TPA requests in queue.
   *
   * @param inform      true if the user should be informed if a request expires during iteration.
   * @param excludeHere true if /tpahere requests should be ignored in checking if a tpa request is available.
   * @return true if the user has an available pending request in queue.
  */
  hasPendingTpaRequests(inform: boolean, excludeHere: boolean): boolean;
}

}
declare module 'com.earth2me.essentials.utils.LocationUtil' {
export class Vector3D {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}

}
declare module 'com.earth2me.essentials.api' {
import { Locale, Collection, UUID } from 'java.util';
import { Throwable, Exception } from 'java.lang';
import { CompletableFuture } from 'java.util.concurrent';
import { MathContext, BigDecimal } from 'java.math';
/**
 * @deprecated This API is not asynchronous and is no longer maintained. Use {@link com.earth2me.essentials.api.IAsyncTeleport IAsyncTeleport}.
*/
export class ITeleport {
  /**
   * Teleport wrapper used to handle throwing user home after a jail sentence
   *
   * @throws Exception
  */
  back(): void;
}
/**
 * Provides access to the current locale in use.
 *
 * @deprecated External plugins should prefer to use either the player's client language ({@link Player#getLocale()} or
 *             {@link net.ess3.api.II18n} in case of future additions.
*/
export class II18n {
  /**
   * Gets the current locale setting
   *
   * @return the current locale, if not set it will return the default locale
  */
  getCurrentLocale(): Locale;
}
/**
 * Provides access to the current item alias registry.
 *
 * @deprecated External plugins should use {@link net.ess3.api.IItemDb} instead, which includes access to {@link net.ess3.api.IItemDb.ItemResolver}
 *             APIs.
*/
export class IItemDb {
  /**
   * Return names recognised by the database, intended for tab-completion.
   *
   * @return Collection of all item names
  */
  listNames(): Collection<string>;
  /**
   * Check whether the item database is loaded and ready for use.
   *
   * @return Whether items have finished loading
  */
  isReady(): boolean;
}
/**
 * Thrown when the requested user does not exist.
*/
export class UserDoesNotExistException extends Exception {
  constructor(name: string);
  constructor(uuid: UUID);
}
/**
 * Manages EssentialsX's teleport functionality for a player.
 * Use this if you want to access EssentialsX's async/safe teleport functionality and teleport warmups and cooldowns.
*/
export class IAsyncTeleport {
  /**
   * Teleport wrapper used to handle throwing user home after a jail sentence
   *
   * @param future - Future which is completed with the success status of the execution
  */
  back(future: CompletableFuture<boolean>): void;
}
/**
 * @deprecated This exception is unused. Use {@link net.ess3.api.InvalidWorldException} instead.
*/
export class InvalidWorldException extends Exception {
  constructor(world: string);
  getWorld(): string;
}
/**
 * @deprecated This exception relates to the abandoned 3.x storage refactor and is not implemented.
*/
export class InvalidNameException extends Exception {
  constructor(thrwbl: Throwable);
}
/**
 * You should use Vault instead of directly using this class.
*/
export class Economy {
  static readonly MATH_CONTEXT: MathContext;
  /**
   * Returns the balance of a user
   *
   * @param name Name of the user
   * @return balance
   * @throws UserDoesNotExistException
   * @deprecated Use {@link Economy#getMoneyExact(UUID)} or {@link Economy#getMoneyExact(User)}
  */
  static getMoney(name: string): number;
  /**
   * @param name Name of user
   * @return Exact balance of user
   * @throws UserDoesNotExistException
   * @deprecated Usernames can change, use {@link Economy#getMoneyExact(UUID)} or {@link Economy#getMoneyExact(User)}
  */
  static getMoneyExact(name: string): BigDecimal;
  /**
   * Get the exact balance of the account with the given UUID.
   *
   * @param uuid The UUID of the user account to retrieve the balance for
   * @return The account's balance
   * @throws UserDoesNotExistException If the user does not exist
  */
  static getMoneyExact(uuid: UUID): BigDecimal;
  /**
   * Sets the balance of a user
   *
   * @param name    Name of the user
   * @param balance The balance you want to set
   * @throws UserDoesNotExistException If a user by that name does not exists
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
   * @deprecated Use {@link Economy#setMoney(UUID, BigDecimal)} or {@link Economy#setMoney(User, BigDecimal)}
  */
  static setMoney(name: string, balance: number): void;
  /**
   * Sets the balance of a user
   *
   * @param name    Name of user
   * @param balance The balance you want to set
   * @throws UserDoesNotExistException If a user by that name does not exist
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
   * @deprecated Usernames can change use {@link Economy#setMoney(UUID, BigDecimal)} or {@link Economy#setMoney(User, BigDecimal)}
  */
  static setMoney(name: string, balance: BigDecimal): void;
  /**
   * Sets the balance of a user
   *
   * @param uuid    UUID of user
   * @param balance The balance you want to set
   * @throws UserDoesNotExistException If a user by that uuid does not exist
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
  */
  static setMoney(uuid: UUID, balance: BigDecimal): void;
  /**
   * Adds money to the balance of a user
   * 
   * Use {@link Economy#add(UUID, BigDecimal)} or {@link Economy#add(User, BigDecimal)}
   *
   * @param name   Name of the user
   * @param amount The money you want to add
   * @throws UserDoesNotExistException If a user by that name does not exists
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
  */
  static add(name: string, amount: number): void;
  /**
   * Adds money to the balance of a user
   *
   * @param name   Name of the user
   * @param amount The amount of money to be added to the user's account
   * @throws UserDoesNotExistException If a user by that name does not exist
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
   * @deprecated Usernames can change, use {@link Economy#add(UUID, BigDecimal)} or {@link Economy#add(User, BigDecimal)}
  */
  static add(name: string, amount: BigDecimal): void;
  /**
   * Adds money to the balance of a user
   *
   * @param uuid   UUID of the user
   * @param amount The money you want to add
   * @throws UserDoesNotExistException If a user by that uuid does not exist
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
  */
  static add(uuid: UUID, amount: BigDecimal): void;
  /**
   * Subtracts money from the balance of a user
   *
   * @param name   Name of the user
   * @param amount The money you want to subtract
   * @throws UserDoesNotExistException If a user by that name does not exists
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
   * @deprecated Use {@link Economy#subtract(UUID, BigDecimal)} or {@link Economy#subtract(User, BigDecimal)}
  */
  static subtract(name: string, amount: number): void;
  /**
   * Subtracts money from the balance of a user
   *
   * @param name   Name of the user
   * @param amount The money you want to subtract
   * @throws UserDoesNotExistException If a user by that name does not exist
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
   * @deprecated Usernames can change, use {@link Economy#subtract(UUID, BigDecimal)} or {@link Economy#subtract(User, BigDecimal)}
  */
  static substract(name: string, amount: BigDecimal): void;
  /**
   * Subtracts money from the balance of a user
   *
   * @param uuid   UUID of the user
   * @param amount The money you want to subtract
   * @throws UserDoesNotExistException If a user by that UUID does not exist
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
  */
  static subtract(uuid: UUID, amount: BigDecimal): void;
  /**
   * Divides the balance of a user by a value
   *
   * @param name   Name of the user
   * @param amount The balance is divided by this value
   * @throws UserDoesNotExistException If a user by that name does not exists
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
   * @deprecated Use {@link Economy#divide(UUID, BigDecimal)} or {@link Economy#divide(User, BigDecimal)}
  */
  static divide(name: string, amount: number): void;
  /**
   * Divides the balance of a user by a value
   *
   * @param name   Name of the user
   * @param amount The balance is divided by this value
   * @throws UserDoesNotExistException If a user by that name does not exist
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
   * @deprecated Usernames can change, use {@link Economy#divide(UUID, BigDecimal)} or {@link Economy#divide(User, BigDecimal)}
  */
  static divide(name: string, amount: BigDecimal): void;
  /**
   * Divides the balance of a user by a value
   *
   * @param uuid   Name of the user
   * @param amount The balance is divided by this value
   * @throws UserDoesNotExistException If a user by that UUID does not exist
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
  */
  static divide(uuid: UUID, amount: BigDecimal): void;
  /**
   * Multiplies the balance of a user by a value
   *
   * @param name   Name of the user
   * @param amount The balance is multiplied by this value
   * @throws UserDoesNotExistException If a user by that name does not exists
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
   * @deprecated Use {@link Economy#multiply(UUID, BigDecimal)} or {@link Economy#multiply(User, BigDecimal)}
  */
  static multiply(name: string, amount: number): void;
  /**
   * Multiplies the balance of a user by a value
   *
   * @param name   Name of the user
   * @param amount The balance is multiplied by the this value
   * @throws UserDoesNotExistException If a user by that name does not exist
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
   * @deprecated Usernames can change, use {@link Economy#multiply(UUID, BigDecimal)} or {@link Economy#multiply(User, BigDecimal)}
  */
  static multiply(name: string, amount: BigDecimal): void;
  /**
   * Multiplies the balance of a user by a value
   *
   * @param uuid   Name of the user
   * @param amount The balance is multiplied by the this value
   * @throws UserDoesNotExistException If a user by that uuid does not exist
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
  */
  static multiply(uuid: UUID, amount: BigDecimal): void;
  /**
   * Resets the balance of a user to the starting balance
   *
   * @param name Name of the user
   * @throws UserDoesNotExistException If a user by that name does not exists
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
   * @deprecated Usernames can change, use {@link Economy#resetBalance(UUID)} or {@link Economy#resetBalance(User)}
  */
  static resetBalance(name: string): void;
  /**
   * Resets the balance of a user to the starting balance
   *
   * @param uuid UUID of the user
   * @throws UserDoesNotExistException If a user by that UUID does not exists
   * @throws NoLoanPermittedException  If the user is not allowed to have a negative balance
   * @throws MaxMoneyException         If this transaction has but the user over the maximum amount of money
  */
  static resetBalance(uuid: UUID): void;
  /**
   * @param name   Name of the user
   * @param amount The amount of money the user should have
   * @return true, if the user has more or an equal amount of money
   * @throws UserDoesNotExistException If a user by that name does not exists
   * @deprecated Use {@link Economy#hasEnough(UUID, BigDecimal)} or {@link Economy#hasEnough(User, BigDecimal)}
  */
  static hasEnough(name: string, amount: number): boolean;
  /**
   * @param name   Name of the user
   * @param amount The amount of money the user should have
   * @return true, if the user has more or an equal amount of money
   * @throws UserDoesNotExistException If a user by that name does not exist
   * @throws ArithmeticException
   * @deprecated Usernames can change, use {@link Economy#hasEnough(UUID, BigDecimal)} or {@link Economy#hasEnough(User, BigDecimal)}
  */
  static hasEnough(name: string, amount: BigDecimal): boolean;
  /**
   * @param uuid   UUID of the user
   * @param amount The amount of money the user should have
   * @return true, if the user has more or an equal amount of money
   * @throws UserDoesNotExistException If a user by that UUID does not exist
   * @throws ArithmeticException
  */
  static hasEnough(uuid: UUID, amount: BigDecimal): boolean;
  /**
   * @param name   Name of the user
   * @param amount The amount of money the user should have
   * @return true, if the user has more money
   * @throws UserDoesNotExistException If a user by that name does not exists
   * @deprecated Use {@link Economy#hasMore(UUID, BigDecimal)} or {@link Economy#hasMore(User, BigDecimal)}
  */
  static hasMore(name: string, amount: number): boolean;
  /**
   * @param name   Name of the user
   * @param amount The amount of money the user should have
   * @return true, if the user has more money
   * @throws UserDoesNotExistException If a user by that name does not exists
   * @throws ArithmeticException
   * @deprecated Usernames can change, use {@link Economy#hasMore(UUID, BigDecimal)} or {@link Economy#hasMore(User, BigDecimal)}
  */
  static hasMore(name: string, amount: BigDecimal): boolean;
  /**
   * @param uuid   UUID of the user
   * @param amount The amount of money the user should have
   * @return true, if the user has more money
   * @throws UserDoesNotExistException If a user by that UUID does not exists
   * @throws ArithmeticException
  */
  static hasMore(uuid: UUID, amount: BigDecimal): boolean;
  /**
   * @param name   Name of the user
   * @param amount The amount of money the user should not have
   * @return true, if the user has less money
   * @throws UserDoesNotExistException If a user by that name does not exists
   * @deprecated Use {@link Economy#hasLess(UUID, BigDecimal)} or {@link Economy#hasLess(User, BigDecimal)}
  */
  static hasLess(name: string, amount: number): boolean;
  /**
   * @param name   Name of the user
   * @param amount The amount of money the user should not have
   * @return true, if the user has less money
   * @throws UserDoesNotExistException If a user by that name does not exist
   * @throws ArithmeticException
   * @deprecated Usernames can change, use {@link Economy#hasLess(UUID, BigDecimal)} or {@link Economy#hasLess(User, BigDecimal)}
  */
  static hasLess(name: string, amount: BigDecimal): boolean;
  /**
   * @param uuid   UUID of the user
   * @param amount The amount of money the user should not have
   * @return true, if the user has less money
   * @throws UserDoesNotExistException If a user by that UUID does not exist
   * @throws ArithmeticException
  */
  static hasLess(uuid: UUID, amount: BigDecimal): boolean;
  /**
   * Test if the user has a negative balance
   *
   * @param name Name of the user
   * @return true, if the user has a negative balance
   * @throws UserDoesNotExistException If a user by that name does not exists
   * @deprecated Usernames can change, use {@link Economy#isNegative(UUID)} or {@link Economy#isNegative(User)}
  */
  static isNegative(name: string): boolean;
  /**
   * Test if the user has a negative balance
   *
   * @param uuid UUID of the user
   * @return true, if the user has a negative balance
   * @throws UserDoesNotExistException If a user by that UUID does not exists
  */
  static isNegative(uuid: UUID): boolean;
  /**
   * Formats the amount of money like all other Essentials functions. Example: $100000 or $12345.67
   *
   * @param amount The amount of money
   * @return Formatted money
   * @deprecated Use {@link #format(BigDecimal)} if your input is already a {@link BigDecimal}.
  */
  static format(amount: number): string;
  /**
   * Formats the amount of money like all other Essentials functions. Example: $100000 or $12345.67
   *
   * @param amount The amount of money
   * @return Formatted money
  */
  static format(amount: BigDecimal): string;
  /**
   * Test if a player exists to avoid the UserDoesNotExistException
   *
   * @param name Name of the user
   * @return true, if the user exists
   * @deprecated Essentials is moving away from username based economy methods. This may be removed in the future.
  */
  static playerExists(name: string): boolean;
  /**
   * Test if a player exists to avoid the UserDoesNotExistException
   *
   * @param uuid UUID of the user
   * @return true, if the user exists
  */
  static playerExists(uuid: UUID): boolean;
  /**
   * Test if a player is a npc
   *
   * @param name Name of the player
   * @return true, if it's a npc
   * @throws UserDoesNotExistException
  */
  static isNPC(name: string): boolean;
  /**
   * Creates dummy files for a npc, if there is no player yet with that name.
   *
   * @param name Name of the player
   * @return true, if a new npc was created
  */
  static createNPC(name: string): boolean;
  /**
   * Deletes a user, if it is marked as npc.
   *
   * @param name Name of the player
   * @throws UserDoesNotExistException
  */
  static removeNPC(name: string): void;
}

}
declare module 'com.earth2me.essentials.utils' {
import { PasteResult, PasteFile } from 'com.earth2me.essentials.utils.PasteUtil';
import { Enum, Class } from 'java.lang';
import { DecimalFormat, SimpleDateFormat, NumberFormat } from 'java.text';
import { Set, Calendar, List, UUID, Map, Date } from 'java.util';
import { Pattern } from 'java.util.regex';
import { BukkitVersion, SupportStatus } from 'com.earth2me.essentials.utils.VersionUtil';
import { NamedTextColor } from 'com.earth2me.essentials.utils.DownsampleUtil';
import { CompletableFuture, ExecutorService } from 'java.util.concurrent';
import { Function } from 'java.util.function';
import { BigDecimal } from 'java.math';
import { Vector3D } from 'com.earth2me.essentials.utils.LocationUtil';
export class NumberUtil {
  static internalSetPrettyFormat(prettyFormat: NumberFormat): void;
  static formatDouble(value: number): string;
  static formatAsCurrency(value: BigDecimal): string;
  static formatAsPrettyCurrency(value: BigDecimal): string;
  static isInt(sInt: string): boolean;
  static isLong(sLong: string): boolean;
  static isPositiveInt(sInt: string): boolean;
  static isNumeric(sNum: string): boolean;
  /**
   * Backport from Guava.
  */
  static constrainToRange(value: number, min: number, max: number): number;
}
export class PasteUtil {
  /**
   * Creates an anonymous paste containing the provided files.
   *
   * @param pages The files to include in the paste.
   * @return The result of the paste, including the paste URL and deletion key.
  */
  static createPaste(pages: PasteFile[]): CompletableFuture<PasteResult>;
}
/**
 * A state that can be either true, false or unset.
 *
 * @see com.earth2me.essentials.perm.IPermissionsHandler#isPermissionSetExact(Player, String)
*/
export class TriState extends Enum<TriState> {
  static readonly TRUE: TriState;
  static readonly FALSE: TriState;
  static readonly UNSET: TriState;
  static valueOf(name: string): TriState;
  static values(): TriState[];
}
export class VersionUtil {
  static readonly v1_14_R01: BukkitVersion;
  static readonly v1_8_8_R01: BukkitVersion;
  static readonly v1_9_R01: BukkitVersion;
  static readonly v1_9_4_R01: BukkitVersion;
  static readonly v1_10_2_R01: BukkitVersion;
  static readonly v1_11_R01: BukkitVersion;
  static readonly v1_11_2_R01: BukkitVersion;
  static readonly v1_12_0_R01: BukkitVersion;
  static readonly v1_12_2_R01: BukkitVersion;
  static readonly v1_13_0_R01: BukkitVersion;
  static readonly v1_13_2_R01: BukkitVersion;
  static readonly v1_14_4_R01: BukkitVersion;
  static readonly v1_15_R01: BukkitVersion;
  static readonly v1_15_2_R01: BukkitVersion;
  static readonly v1_16_1_R01: BukkitVersion;
  static readonly v1_16_5_R01: BukkitVersion;
  static readonly v1_17_R01: BukkitVersion;
  static readonly v1_17_1_R01: BukkitVersion;
  static readonly v1_18_2_R01: BukkitVersion;
  static readonly v1_19_R01: BukkitVersion;
  static readonly v1_19_1_R01: BukkitVersion;
  static readonly PRE_FLATTENING: boolean;
  static isPaper(): boolean;
  static getServerBukkitVersion(): BukkitVersion;
  static getServerSupportStatus(): SupportStatus;
  static getSupportStatusClass(): string;
  static isServerSupported(): boolean;
}
/**
 * parseFloat and parseDouble proxies that are protected against non-finite values.
*/
export class FloatUtil {
  static parseFloat(s: string): number;
  static parseDouble(s: string): number;
}
export class StringUtil {
  static sanitizeFileName(name: string): string;
  static safeString(string: string): string;
  static sanitizeString(string: string): string;
  static joinList(...list: any[]): string;
  static joinList(seperator: string, ...list: any[]): string;
  static joinListSkip(seperator: string, skip: string, ...list: any[]): string;
  static toUUID(input: string): UUID;
  static abbreviate(input: string, length: number): string;
  static stripToNull(input: string): string;
  static strip(input: string): string;
  static strip(input: string, stripChars: string): string;
  static strip(input: string, shouldStrip: Function<string, boolean>): string;
}
/**
 * This utility class is used for converting between the ingame time in ticks to ingame time as a friendly string. Note
 * that the time is INGAME.
 * 
 * http://www.minecraftwiki.net/wiki/Day/night_cycle
 *
 * @author Olof Larsson
*/
export class DescParseTickFormat {
  static readonly nameToTicks: Map<string, number>;
  static readonly resetAliases: Set<string>;
  static readonly ticksAtMidnight: number;
  static readonly ticksPerDay: number;
  static readonly ticksPerHour: number;
  static readonly ticksPerMinute: number;
  static readonly ticksPerSecond: number;
  static parse(desc: string): number;
  static parseTicks(desc: string): number;
  static parse24(desc: string): number;
  static parse12(desc: string): number;
  static hoursMinutesToTicks(hours: number, minutes: number): number;
  static parseAlias(desc: string): number;
  static meansReset(desc: string): boolean;
  static format(ticks: number): string;
  static formatTicks(ticks: number): string;
  static format24(ticks: number): string;
  static format12(ticks: number): string;
  static formatDateFormat(ticks: number, format: SimpleDateFormat): string;
  static ticksToDate(ticks: number): Date;
}
export class FormatUtil {
  static readonly IPPATTERN: Pattern;
  static stripFormat(input: string): string;
  static stripEssentialsFormat(input: string): string;
  static stripAnsi(input: string): string;
  static stripPaper(input: string): string;
  static replaceFormat(input: string): string;
  /**
   * @throws NumberFormatException If the provided hex color code is invalid or if version is lower than 1.16.
  */
  static parseHexColor(hexColor: string): string;
  static unformatString(message: string): string;
  static stripLogColorFormat(input: string): string;
  static lastCode(input: string): string;
  static validIP(ipAddress: string): boolean;
}
/**
 * Most of this code was "borrowed" from KyoriPowered/Adventure and is subject to their MIT license;
 *
 * MIT License
 *
 * Copyright (c) 2017-2020 KyoriPowered
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/
export class DownsampleUtil {
  static nearestTo(rgb: number): string;
}
export class DateUtil {
  static removeTimePattern(input: string): string;
  static parseDateDiff(time: string, future: boolean): number;
  static parseDateDiff(time: string, future: boolean, emptyEpoch: boolean): number;
  static formatDateDiff(date: number): string;
  static formatDateDiff(fromDate: Calendar, toDate: Calendar): string;
}
export class StringUtilTest {
  testAbbreviate(): void;
  testStrip(): void;
  testStripToNull(): void;
}
export class MaterialUtil {

}
export class EnumUtil {
  /**
   * Returns the field matching the first provided enum name that exists within the given
   * enum class. If no field is found, this method returns null.
   *
   * @param enumClass The class to search through
   * @param names     The names of the fields to search for
   * @param        The enum to search through
   * @return The first matching enum field
  */
  static valueOf<T>(enumClass: Class<T>, ...names: string[]): T;
  /**
   * Return a set containing all fields of the given enum that match one of the provided
   * names.
   *
   * @param enumClass The class to search through
   * @param names     The names of the fields to search for
   * @param        The enum to search through
   * @return All matching enum fields
  */
  static getAllMatching<T>(enumClass: Class<T>, ...names: string[]): Set<T>;
}
export class FormatUtilTest {
  testFormatCase(): void;
  testFormatCategoryPerms(): void;
  testFormatCodePerms(): void;
  testFormatAddRemovePerms(): void;
  testFormatEscaping(): void;
  testUnformat(): void;
}
export class LocationUtil {
  static readonly RADIUS: number;
  static readonly VOLUME: Vector3D[];
  static setIsWaterSafe(isWaterSafe: boolean): void;
}

}
declare module 'com.earth2me.essentials.Mob' {
import { Enum, Exception } from 'java.lang';
export class Enemies extends Enum<Enemies> {
  static readonly FRIENDLY: Enemies;
  static readonly NEUTRAL: Enemies;
  static readonly ENEMY: Enemies;
  static readonly ADULT_ENEMY: Enemies;
  static valueOf(name: string): Enemies;
  static values(): Enemies[];
}
export class MobException extends Exception {

}

}
declare module 'com.earth2me.essentials.IUser' {
import { UUID } from 'java.util';
export class TpaRequest {
  constructor(name: string, requesterUuid: UUID);
  getName(): string;
  getRequesterUuid(): UUID;
  isHere(): boolean;
  setHere(here: boolean): void;
  getTime(): number;
  setTime(time: number);
}

}
declare module 'com.earth2me.essentials.perm' {
export class IPermissionsHandler {
  unregisterContexts(): void;
  getBackendName(): string;
}
export class PermissionsDefaults {
  static registerAllBackDefaults(): void;
  static registerAllHatDefaults(): void;
}

}
declare module 'com.earth2me.essentials.signs' {
import { Enum, Throwable, Exception } from 'java.lang';
import { ISign } from 'com.earth2me.essentials.signs.EssentialsSign';
import { BigDecimal } from 'java.math';
export class Signs extends Enum<Signs> {
  static readonly ANVIL: Signs;
  static readonly BALANCE: Signs;
  static readonly BUY: Signs;
  static readonly CARTOGRAPHY: Signs;
  static readonly DISPOSAL: Signs;
  static readonly ENCHANT: Signs;
  static readonly FREE: Signs;
  static readonly GAMEMODE: Signs;
  static readonly GRINDSTONE: Signs;
  static readonly HEAL: Signs;
  static readonly INFO: Signs;
  static readonly KIT: Signs;
  static readonly LOOM: Signs;
  static readonly MAIL: Signs;
  static readonly PROTECTION: Signs;
  static readonly REPAIR: Signs;
  static readonly SELL: Signs;
  static readonly SMITHING: Signs;
  static readonly SPAWNMOB: Signs;
  static readonly TIME: Signs;
  static readonly TRADE: Signs;
  static readonly WARP: Signs;
  static readonly WEATHER: Signs;
  static readonly WORKBENCH: Signs;
  static valueOf(name: string): Signs;
  static values(): Signs[];
}
export class EssentialsSign {
  constructor(signName: string);
  /**
   * @deprecated use {@link #isValidSign(IEssentials, ISign)} if possible
  */
  static isValidSign(sign: ISign): boolean;
  getSuccessName(): string;
  getTemplateName(): string;
  getName(): string;
  areHeavyEventRequired(): boolean;
}
export class SignException extends Exception {
  constructor(message: string);
  constructor(message: string, throwable: Throwable);
}

}
declare module 'com.earth2me.essentials.economy' {
import { List } from 'java.util';
export class EconomyLayer {
  getName(): string;
  getBackendName(): string;
  onServerLoad(): boolean;
  disable(): void;
  getPluginName(): string;
  getPluginVersion(): string;
}
/**
 * Abstraction layer for economy abstraction layers.
*/
export class EconomyLayers {
  static init(): void;
  static isServerStarted(): boolean;
  static isLayerSelected(): boolean;
  static onServerLoad(): void;
}

}
