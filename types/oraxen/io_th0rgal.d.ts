declare module 'io.th0rgal.oraxen.mechanics.provided.cosmetic.aura.aura' {
import { AuraMechanic } from 'io.th0rgal.oraxen.mechanics.provided.cosmetic.aura';
export class Aura {
  start(): void;
  stop(): void;
}
export class HelixAura extends Aura {
  constructor(mechanic: AuraMechanic);
}
export class RingAura extends Aura {
  constructor(mechanic: AuraMechanic);
}
export class SimpleAura extends Aura {
  constructor(mechanic: AuraMechanic);
}

}
declare module 'io.th0rgal.oraxen.utils.actions' {
import { List } from 'java.util';
export class ClickAction {

}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.combat.spell' {
import { Mechanic } from 'io.th0rgal.oraxen.mechanics';
import { TimersFactory } from 'io.th0rgal.oraxen.utils.timers';
export class SpellMechanic extends Mechanic {
  readonly charges: number;
  getMaxCharges(): number;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.cosmetic.skin' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class SkinMechanicFactory extends MechanicFactory {

}
export class SkinMechanic extends Mechanic {
  doConsume(): boolean;
}

}
declare module 'io.th0rgal.oraxen.pack.dispatch' {
import { HostingProvider } from 'io.th0rgal.oraxen.pack.upload.hosts';
export class PackSender {
  register(): void;
  unregister(): void;
}

}
declare module 'io.th0rgal.oraxen.hud' {
import { Collection, Map } from 'java.util';
import { ConfigsManager } from 'io.th0rgal.oraxen.config';
export class HudManager {
  readonly hudUpdateTime: number;
  constructor(hudManager: ConfigsManager);
  registerEvents(): void;
  unregisterEvents(): void;
  getHuds(): Map<string, Hud>;
  getHudFromID(id: string): Hud;
  getHudID(hud: Hud): string;
  getDefaultEnabledHuds(): Collection<Hud>;
  registerTask(): void;
  parsedHudDisplays: Map<Hud, string>;
  generateHudDisplays(): Map<Hud, string>;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.misc.consumable' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class ConsumableMechanic extends Mechanic {

}
export class ConsumableMechanicFactory extends MechanicFactory {
  static get(): ConsumableMechanicFactory;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.misc.soulbound' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class SoulBoundMechanicFactory extends MechanicFactory {

}
export class SoulBoundMechanic extends Mechanic {
  getLoseChance(): number;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.gameplay.durability' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class DurabilityMechanicFactory extends MechanicFactory {
  static get(): DurabilityMechanicFactory;
}
export class DurabilityMechanic extends Mechanic {
  getItemMaxDurability(): number;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.gameplay.block' {
import { Drop } from 'io.th0rgal.oraxen.utils.drops';
import { LimitedPlacing } from 'io.th0rgal.oraxen.utils.limitedplacing';
import { List, Map } from 'java.util';
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
import { JsonObject } from 'com.google.gson';
export class BlockMechanic extends Mechanic {
  hasLimitedPlacing(): boolean;
  getLimitedPlacing(): LimitedPlacing;
  getCustomVariation(): number;
  getDrop(): Drop;
  canIgnite(): boolean;
  hasBreakSound(): boolean;
  getBreakSound(): string;
  hasPlaceSound(): boolean;
  getPlaceSound(): string;
  hasStepSound(): boolean;
  getStepSound(): string;
  hasHitSound(): boolean;
  getHitSound(): string;
  hasFallSound(): boolean;
  getFallSound(): string;
  static getBlockstateWhenFields(code: number): JsonObject;
}
export class BlockMechanicFactory extends MechanicFactory {
  readonly toolTypes: string[];
  static getBlockstateOverride(modelName: string, when: number): JsonObject;
  static getBlockMechanic(customVariation: number): BlockMechanic;
}

}
declare module 'io.th0rgal.oraxen.pack.upload' {
import { PackReceiver } from 'io.th0rgal.oraxen.pack.receive';
import { PackSender } from 'io.th0rgal.oraxen.pack.dispatch';
import { ResourcePack } from 'io.th0rgal.oraxen.pack.generation';
import { HostingProvider } from 'io.th0rgal.oraxen.pack.upload.hosts';
export class UploadManager {
  getHostingProvider(): HostingProvider;
  getSender(): PackSender;
  uploadAsyncAndSendToPlayers(resourcePack: ResourcePack): void;
  uploadAsyncAndSendToPlayers(resourcePack: ResourcePack, updatePackSender: boolean): void;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.gameplay.noteblock.directional.DirectionalBlock' {
import { Enum } from 'java.lang';
export class DirectionalType extends Enum<DirectionalType> {
  static readonly LOG: DirectionalType;
  static readonly FURNACE: DirectionalType;
  static readonly DROPPER: DirectionalType;
  static valueOf(name: string): DirectionalType;
  static values(): DirectionalType[];
}

}
declare module 'io.th0rgal.oraxen.recipes' {
export class CustomRecipe {
  getName(): string;
  isOrdered(): boolean;
  equals(object: any): boolean;
  hashCode(): number;
}
export class RecipesManager {

}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.gameplay.noteblock.farmblock' {
export class FarmBlockDryout {
  getDelay(): number;
  isFarmBlock(): boolean;
  isMoistFarmBlock(): boolean;
  getFarmBlock(): string;
  getMoistFarmBlock(): string;
  getDryoutTime(): number;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.cosmetic.aura' {
import { Aura } from 'io.th0rgal.oraxen.mechanics.provided.cosmetic.aura.aura';
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class AuraMechanicFactory extends MechanicFactory {

}
export class AuraMechanic extends Mechanic {

}

}
declare module 'io.th0rgal.oraxen.utils.timers' {
import { DecimalFormat } from 'java.text';
import { UUID, Map } from 'java.util';
export class Timer {
  static readonly DECIMAL_FORMAT: DecimalFormat;
  reset(): void;
  isFinished(): boolean;
  getRemainingTime(): number;
  getString(): string;
}
export class TimersFactory {
  constructor(delay: number);
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.gameplay.furniture.evolution' {
import { Random } from 'java.util';
export class EvolvingFurniture {
  getDelay(): number;
  isLightBoosted(): boolean;
  getMinimumLightLevel(): number;
  getLightBoostTick(): number;
  isRainBoosted(): boolean;
  getRainBoostTick(): number;
  isBoneMeal(): boolean;
  getBoneMealChance(): number;
  getCurrentStage(): string;
  getNextStage(): string;
  bernoulliTest(): boolean;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.gameplay.furniture' {
import { Drop } from 'io.th0rgal.oraxen.utils.drops';
import { LimitedPlacing } from 'io.th0rgal.oraxen.utils.limitedplacing';
import { StorageMechanic } from 'io.th0rgal.oraxen.utils.storage';
import { List, Map } from 'java.util';
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
import { ClickAction } from 'io.th0rgal.oraxen.utils.actions';
import { EvolutionTask, EvolvingFurniture } from 'io.th0rgal.oraxen.mechanics.provided.gameplay.furniture.evolution';
export class FurnitureMechanic extends Mechanic {
  readonly farmlandRequired: boolean;
  readonly farmblockRequired: boolean;
  hasBreakSound(): boolean;
  getBreakSound(): string;
  hasPlaceSound(): boolean;
  getPlaceSound(): string;
  hasStepSound(): boolean;
  getStepSound(): string;
  hasHitSound(): boolean;
  getHitSound(): string;
  hasFallSound(): boolean;
  getFallSound(): string;
  hasLimitedPlacing(): boolean;
  getLimitedPlacing(): LimitedPlacing;
  isStorage(): boolean;
  getStorage(): StorageMechanic;
  hasBarriers(): boolean;
  getBarriers(): BlockLocation[];
  hasRotation(): boolean;
  hasSeat(): boolean;
  getSeatHeight(): number;
  getSeatYaw(): number;
  hasFacing(): boolean;
  getDrop(): Drop;
  hasEvolution(): boolean;
  getEvolution(): EvolvingFurniture;
  setPlacedItem(): void;
  hasClickActions(): boolean;
}
export class FurnitureFactory extends MechanicFactory {
  static instance: FurnitureFactory;
  readonly toolTypes: string[];
  readonly evolutionCheckDelay: number;
  static getInstance(): FurnitureFactory;
  registerEvolution(): void;
}
export class BlockLocation {
  constructor(x: number, y: number, z: number);
  constructor(serializedBlockLocation: string);
  constructor(coordinatesMap: Map<string, any>);
  toString(): string;
  add(blockLocation: BlockLocation): BlockLocation;
  groundRotate(angle: number): BlockLocation;
  getX(): number;
  getY(): number;
  getZ(): number;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.gameplay.repair' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class RepairMechanicFactory extends MechanicFactory {
  isOraxenDurabilityOnly(): boolean;
}
export class RepairMechanic extends Mechanic {
  getFinalDamage(maxDurability: number, damage: number): number;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.combat.spell.witherskull' {
import { MechanicFactory } from 'io.th0rgal.oraxen.mechanics';
import { SpellMechanic } from 'io.th0rgal.oraxen.mechanics.provided.combat.spell';
import { TimersFactory } from 'io.th0rgal.oraxen.utils.timers';
export class WitherSkullMechanicFactory extends MechanicFactory {

}
export class WitherSkullMechanic extends SpellMechanic {
  readonly charged: boolean;
}

}
declare module 'io.th0rgal.oraxen.commands' {
import { HudManager } from 'io.th0rgal.oraxen.hud';
export class GlyphCommand {

}
export class HudCommand {

}
export class ModelDataCommand {

}
export class RecipesCommand {

}
export class CommandsManager {
  loadCommands(): void;
}
export class RepairCommand {

}
export class PrintGlyphCommand {

}
export class ReloadCommand {

}
export class DebugCommand {

}
export class ItemInfoCommand {

}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.gameplay.stringblock' {
import { Drop } from 'io.th0rgal.oraxen.utils.drops';
import { LimitedPlacing } from 'io.th0rgal.oraxen.utils.limitedplacing';
import { List, Map } from 'java.util';
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
import { SaplingMechanic, SaplingTask } from 'io.th0rgal.oraxen.mechanics.provided.gameplay.stringblock.sapling';
import { JsonObject } from 'com.google.gson';
export class StringBlockMechanicFactory extends MechanicFactory {
  static readonly BLOCK_PER_VARIATION: Map<number, StringBlockMechanic>;
  readonly toolTypes: string[];
  readonly saplingGrowthCheckDelay: number;
  static getModelJson(modelName: string): JsonObject;
  static getBlockstateVariantName(id: number): string;
  static getBlockMechanic(customVariation: number): StringBlockMechanic;
  static getInstance(): StringBlockMechanicFactory;
  registerSaplingMechanic(): void;
}
export class StringBlockMechanic extends Mechanic {
  hasLimitedPlacing(): boolean;
  getLimitedPlacing(): LimitedPlacing;
  isSapling(): boolean;
  getSaplingMechanic(): SaplingMechanic;
  getCustomVariation(): number;
  getDrop(): Drop;
  hasBreakSound(): boolean;
  getBreakSound(): string;
  hasPlaceSound(): boolean;
  getPlaceSound(): string;
  hasStepSound(): boolean;
  getStepSound(): string;
  hasHitSound(): boolean;
  getHitSound(): string;
  hasFallSound(): boolean;
  getFallSound(): string;
  getPeriod(): number;
  getLight(): number;
  hasRandomPlace(): boolean;
  getRandomPlaceBlock(): string[];
}

}
declare module 'io.th0rgal.oraxen.utils.logs' {
import { BiConsumer } from 'java.util.function';
export class Logs {
  static enableFilter(): void;
  static logInfo(message: string): void;
  static logError(message: string): void;
  static logWarning(message: string): void;
}
export class ConsoleAdapter extends BiConsumer<boolean, string> {
  static readonly INSTANCE: ConsoleAdapter;
  accept(flag: boolean, message: string): void;
  send(message: string): ConsoleAdapter;
}

}
declare module 'io.th0rgal.oraxen.sound' {
import { Collection, List } from 'java.util';
import { JsonObject } from 'com.google.gson';
export class SoundManager {
  getCustomSounds(): Collection<CustomSound>;
  isAutoGenerate(): boolean;
}
export class CustomSound {
  getName(): string;
  getSubtitle(): string;
  isReplace(): boolean;
  getSounds(): string[];
  toJson(): JsonObject;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.farming.bedrockbreak' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class BedrockBreakMechanicFactory extends MechanicFactory {
  isDisabledOnFirstLayer(): boolean;
  getDurabilityCost(): number;
}
export class BedrockBreakMechanic extends Mechanic {
  getPeriod(): number;
  bernouilliTest(): boolean;
}
export class BedrockBreakMechanicManager {
  constructor(factory: BedrockBreakMechanicFactory);
}

}
declare module 'io.th0rgal.oraxen.font' {
import { Set, Collection, List, Map } from 'java.util';
import { ConfigsManager } from 'io.th0rgal.oraxen.config';
import { JsonObject } from 'com.google.gson';
export class FontManager {
  readonly autoGenerate: boolean;
  readonly permsChatcolor: string;
  constructor(configsManager: ConfigsManager);
  verifyRequired(): void;
  registerEvents(): void;
  unregisterEvents(): void;
  getGlyphs(): Collection<Glyph>;
  getEmojis(): Collection<Glyph>;
  getFonts(): Collection<Font>;
  getFontFromFile(file: string): Font;
  getGlyphFromName(name: string): Glyph;
  getGlyphFromPlaceholder(word: string): Glyph;
  getGlyphByPlaceholderMap(): Map<string, Glyph>;
  getReverseMap(): Map<string, string>;
  getShift(length: number): string;
}
export class GlyphTag {

}
export class Glyph {
  isFileChanged(): boolean;
  getName(): string;
  getCharacter(): string;
  getTexture(): string;
  setTexture(texture: string);
  getAscent(): number;
  getHeight(): number;
  getPermission(): string;
  getPlaceholders(): string[];
  isEmoji(): boolean;
  hasTabCompletion(): boolean;
  getTabIconTexture(): string;
  getTabIconSignature(): string;
  toJson(): JsonObject;
  getCode(): number;
  verifyGlyph(glyphs: Glyph[]): void;
}
export class ShiftTag {

}

}
declare module 'io.th0rgal.oraxen.compatibilities.provided.worldedit' {
export class WrappedWorldEdit {
  static init(): void;
}
export class WorldEditUtils {

}

}
declare module 'io.th0rgal.oraxen.utils.commands' {
import { List } from 'java.util';
export class CommandsParser {

}

}
declare module 'io.th0rgal.oraxen.mechanics.MechanicsManager' {
export class FactoryConstructor {

}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.combat.spell.fireball' {
import { MechanicFactory } from 'io.th0rgal.oraxen.mechanics';
import { SpellMechanic } from 'io.th0rgal.oraxen.mechanics.provided.combat.spell';
export class FireballMechanic extends SpellMechanic {
  getYield(): number;
  getSpeed(): number;
}
export class FireballMechanicFactory extends MechanicFactory {

}

}
declare module 'io.th0rgal.oraxen.utils.limitedplacing' {
import { List } from 'java.util';
import { LimitedPlacingType } from 'io.th0rgal.oraxen.utils.limitedplacing.LimitedPlacing';
export class LimitedPlacing {
  getType(): LimitedPlacingType;
  getLimitedOraxenBlockIds(): string[];
}

}
declare module 'io.th0rgal.oraxen.utils.storage' {
import { StorageType } from 'io.th0rgal.oraxen.utils.storage.StorageMechanic';
export class StorageMechanic {
  getRows(): number;
  getTitle(): string;
  getStorageType(): StorageType;
  hasOpenSound(): boolean;
  getOpenSound(): string;
  hasCloseSound(): boolean;
  getCloseSound(): string;
  getPitch(): number;
  getVolume(): number;
  static forceCloseStorages(): void;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.misc.armorpotioneffects' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class ArmorPotionEffectsMechanicFactory extends MechanicFactory {

}
export class ArmorPotionEffectsMechanic extends Mechanic {

}

}
declare module 'io.th0rgal.oraxen.mechanics' {
import { Set, Map } from 'java.util';
import { Function } from 'java.util.function';
import { ItemBuilder } from 'io.th0rgal.oraxen.items';
import { FactoryConstructor } from 'io.th0rgal.oraxen.mechanics.MechanicsManager';
export class Mechanic {
  getItemID(): string;
  getItemModifiers(): Function[];
  getFactory(): MechanicFactory;
}
export class MechanicsManager {
  static registerNativeMechanics(): void;
  static registerMechanicFactory(mechanicId: string, constructor: FactoryConstructor): void;
  static unloadListeners(): void;
  static getMechanicFactory(mechanicID: string): MechanicFactory;
}
export class MechanicFactory {
  getItems(): Set<string>;
  isNotImplementedIn(itemID: string): boolean;
  getMechanic(itemID: string): Mechanic;
  getMechanicID(): string;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.gameplay.noteblock.logstrip' {
export class LogStripping {
  canBeStripped(): boolean;
  getStrippedLogBlock(): string;
  hasStrippedDrop(): boolean;
  getStrippedLogDrop(): string;
  shouldDecreaseAxeDurability(): boolean;
}

}
declare module 'io.th0rgal.oraxen.compatibilities.provided.mythiccrucible' {
export class WrappedCrucibleItem {

}

}
declare module 'io.th0rgal.oraxen.compatibilities' {
import { Class } from 'java.lang';
import { ConcurrentHashMap } from 'java.util.concurrent';
export class CompatibilitiesManager {
  static enableNativeCompatibilities(): void;
  static disableCompatibilities(): void;
  static enableCompatibility(pluginName: string): boolean;
  static disableCompatibility(pluginName: string): boolean;
  static addCompatibility(compatibilityPluginName: string, clazz: Class<CompatibilityProvider<any>>, tryEnable: boolean): boolean;
  static addCompatibility(compatibilityPluginName: string, clazz: Class<CompatibilityProvider<any>>): boolean;
  static getActiveCompatibility(pluginName: string): CompatibilityProvider<any>;
  static getCompatibility(pluginName: string): Class<CompatibilityProvider<any>>;
  static isCompatibilityEnabled(pluginName: string): boolean;
  static getCompatibilityProviders(): ConcurrentHashMap<string, Class<CompatibilityProvider<any>>>;
  static getActiveCompatibilityProviders(): ConcurrentHashMap<string, CompatibilityProvider<any>>;
  static hasPlugin(name: string): boolean;
}

}
declare module 'io.th0rgal.oraxen.recipes.loaders' {
export class ShapelessLoader extends RecipeLoader {
  registerRecipe(): void;
}
export class ShapedLoader extends RecipeLoader {
  registerRecipe(): void;
}
export class RecipeLoader {
  registerRecipe(): void;
}
export class FurnaceLoader extends RecipeLoader {
  registerRecipe(): void;
}

}
declare module 'io.th0rgal.oraxen.config' {
import { Enum } from 'java.lang';
import { Collection, List, Map } from 'java.util';
import { File } from 'java.io';
import { Glyph } from 'io.th0rgal.oraxen.font';
import { ItemBuilder } from 'io.th0rgal.oraxen.items';
import { ZipInputStream, ZipEntry } from 'java.util.zip';
export class ConfigsManager {
  getSchematicsFolder(): File;
  validatesConfig(): boolean;
  parseGlyphConfigs(): Collection<Glyph>;
  parseItemConfigs(): Map<File, Map<string, ItemBuilder>>;
}
export class Settings extends Enum<Settings> {
  static readonly PLUGIN_LANGUAGE: Settings;
  static readonly REPAIR_COMMAND_ORAXEN_DURABILITY: Settings;
  static readonly CONFIGS_VERSION: Settings;
  static readonly UPDATE_CONFIGS: Settings;
  static readonly AUTOMATICALLY_SET_GLYPH_CODE: Settings;
  static readonly AUTOMATICALLY_SET_MODEL_DATA: Settings;
  static readonly SKIPPED_MODEL_DATA_NUMBERS: Settings;
  static readonly ERROR_ITEM: Settings;
  static readonly RESET_RECIPES: Settings;
  static readonly ARMOR_EQUIP_EVENT_BYPASS: Settings;
  static readonly SHIELD_DISPLAY: Settings;
  static readonly BOW_DISPLAY: Settings;
  static readonly CROSSBOW_DISPLAY: Settings;
  static readonly AUTO_UPDATE_ITEMS: Settings;
  static readonly GENERATE: Settings;
  static readonly ARMOR_RESOLUTION: Settings;
  static readonly AUTOMATICALLY_GENERATE_SHADER_COMPATIBLE_ARMOR: Settings;
  static readonly COMPRESSION: Settings;
  static readonly PROTECTION: Settings;
  static readonly COMMENT: Settings;
  static readonly UPLOAD_TYPE: Settings;
  static readonly UPLOAD: Settings;
  static readonly UPLOAD_OPTIONS: Settings;
  static readonly POLYMATH_SERVER: Settings;
  static readonly SEND_PACK: Settings;
  static readonly SEND_PACK_DELAY: Settings;
  static readonly SEND_PACK_ADVANCED: Settings;
  static readonly SEND_PACK_ADVANCED_MANDATORY: Settings;
  static readonly SEND_PACK_ADVANCED_MESSAGE: Settings;
  static readonly SEND_JOIN_MESSAGE: Settings;
  static readonly JOIN_MESSAGE_DELAY: Settings;
  static readonly RECEIVE_ENABLED: Settings;
  static readonly RECEIVE_ALLOWED_ACTIONS: Settings;
  static readonly RECEIVE_LOADED_ACTIONS: Settings;
  static readonly RECEIVE_FAILED_ACTIONS: Settings;
  static readonly RECEIVE_DENIED_ACTIONS: Settings;
  static valueOf(name: string): Settings;
  static values(): Settings[];
  getPath(): string;
  getValue(): any;
  toString(): string;
  toBool(): boolean;
  toStringList(): string[];
}
export class ResourcesManager {
  extractConfiguration(fileName: string): File;
  extractConfigsInFolder(folder: string, fileExtension: string): void;
  extractFileIfTrue(entry: ZipEntry, name: string, isSuitable: boolean): void;
  static browse(): ZipInputStream;
}
export class Message extends Enum<Message> {
  static readonly PREFIX: Message;
  static readonly NO_PERMISSION: Message;
  static readonly WORK_IN_PROGRESS: Message;
  static readonly NOT_PLAYER: Message;
  static readonly COOLDOWN: Message;
  static readonly RELOAD: Message;
  static readonly PACK_UPLOADING: Message;
  static readonly PACK_NOT_UPLOADED: Message;
  static readonly PACK_UPLOADED: Message;
  static readonly PACK_REGENERATED: Message;
  static readonly UPDATING_CONFIG: Message;
  static readonly CONFIGS_VALIDATION_FAILED: Message;
  static readonly REPAIRED_ITEMS: Message;
  static readonly CANNOT_BE_REPAIRED: Message;
  static readonly CANNOT_BE_REPAIRED_INVALID: Message;
  static readonly UPDATED_ITEMS: Message;
  static readonly ZIP_BROWSE_ERROR: Message;
  static readonly BAD_RECIPE: Message;
  static readonly ITEM_NOT_FOUND: Message;
  static readonly PLUGIN_HOOKS: Message;
  static readonly PLUGIN_UNHOOKS: Message;
  static readonly NOT_ENOUGH_EXP: Message;
  static readonly NOT_ENOUGH_SPACE: Message;
  static readonly EXIT_MENU: Message;
  static readonly NO_EMOJIS: Message;
  static readonly PLUGIN_LOADED: Message;
  static readonly PLUGIN_UNLOADED: Message;
  static readonly NO_ARMOR_ITEM: Message;
  static readonly DUPLICATE_ARMOR_COLOR: Message;
  static readonly COMMAND_HELP: Message;
  static readonly COMMAND_JOIN_MESSAGE: Message;
  static readonly RECIPE_NO_BUILDER: Message;
  static readonly RECIPE_NO_FURNACE: Message;
  static readonly RECIPE_NO_NAME: Message;
  static readonly RECIPE_NO_RECIPE: Message;
  static readonly RECIPE_NO_ITEM: Message;
  static readonly RECIPE_SAVE: Message;
  static readonly GIVE_PLAYER: Message;
  static readonly GIVE_PLAYERS: Message;
  static readonly DYE_SUCCESS: Message;
  static readonly DYE_WRONG_COLOR: Message;
  static readonly DYE_FAILED: Message;
  static readonly HUD_NO_HUD: Message;
  static readonly HUD_TOGGLE_ON: Message;
  static readonly HUD_TOGGLE_OFF: Message;
  static readonly MECHANICS_NOT_ENOUGH_EXP: Message;
  static readonly MECHANICS_BACKPACK_STACKED: Message;
  static valueOf(name: string): Message;
  static values(): Message[];
  getPath(): string;
  toString(): string;
  toSerializedString(): string;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.farming.harvesting' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
import { TimersFactory } from 'io.th0rgal.oraxen.utils.timers';
export class HarvestingMechanic extends Mechanic {
  getRadius(): number;
  getHeight(): number;
}
export class HarvestingMechanicFactory extends MechanicFactory {

}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.misc.backpack' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class BackpackMechanicFactory extends MechanicFactory {

}
export class BackpackMechanic extends Mechanic {
  getRows(): number;
  getTitle(): string;
  hasOpenSound(): boolean;
  getOpenSound(): string;
  hasCloseSound(): boolean;
  getCloseSound(): string;
  getPitch(): number;
  getVolume(): number;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.cosmetic.hat' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class HatMechanic extends Mechanic {

}
export class HatMechanicFactory extends MechanicFactory {
  static get(): HatMechanicFactory;
}

}
declare module 'io.th0rgal.oraxen.utils.drops' {
import { List, LinkedHashMap } from 'java.util';
export class Loot {
  constructor(config: LinkedHashMap<string, any>);
}
export class Drop {
  constructor(hierarchy: string[], loots: Loot[], silktouch: boolean, fortune: boolean, sourceID: string, minimalType: string, bestTools: string[]);
  constructor(loots: Loot[], silktouch: boolean, fortune: boolean, sourceID: string);
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.gameplay.noteblock.directional' {
import { DirectionalType } from 'io.th0rgal.oraxen.mechanics.provided.gameplay.noteblock.directional.DirectionalBlock';
import { NoteBlockMechanic } from 'io.th0rgal.oraxen.mechanics.provided.gameplay.noteblock';
export class DirectionalBlock {
  isParentBlock(): boolean;
  getParentBlock(): string;
  getDirectionalType(): DirectionalType;
  isLog(): boolean;
  isFurnace(): boolean;
  isDropper(): boolean;
  getYBlock(): string;
  getXBlock(): string;
  getZBlock(): string;
  getNorthBlock(): string;
  getSouthBlock(): string;
  getEastBlock(): string;
  getWestBlock(): string;
  getUpBlock(): string;
  getDownBlock(): string;
  getDirectionalModel(mechanic: NoteBlockMechanic): string;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.misc.food' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class FoodMechanicFactory extends MechanicFactory {

}
export class FoodMechanic extends Mechanic {
  getHunger(): number;
  getSaturation(): number;
  hasReplacement(): boolean;
  hasEffects(): boolean;
  getEffectProbability(): number;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.farming.bigmining' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class BigMiningMechanicFactory extends MechanicFactory {

}
export class BigMiningMechanic extends Mechanic {
  getRadius(): number;
  getDepth(): number;
}

}
declare module 'io.th0rgal.oraxen.utils.storage.StorageMechanic' {
import { Enum } from 'java.lang';
export class StorageType extends Enum<StorageType> {
  static readonly STORAGE: StorageType;
  static readonly PERSONAL: StorageType;
  static readonly ENDERCHEST: StorageType;
  static readonly DISPOSAL: StorageType;
  static valueOf(name: string): StorageType;
  static values(): StorageType[];
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.gameplay.stringblock.sapling' {
import { File } from 'java.io';
export class SaplingMechanic {
  requiresWaterSource(): boolean;
  requiresLight(): boolean;
  getMinLightLevel(): number;
  canGrowNaturally(): boolean;
  getNaturalGrowthTime(): number;
  canGrowFromBoneMeal(): boolean;
  getBoneMealGrowthSpeedup(): number;
  hasGrowSound(): boolean;
  getGrowSound(): string;
  hasSchematic(): boolean;
  getSchematicName(): string;
  getSchematic(): File;
  replaceBlocks(): boolean;
  copyBiomes(): boolean;
  copyEntities(): boolean;
}

}
declare module 'io.th0rgal.oraxen.utils.inventories' {
import { FontManager } from 'io.th0rgal.oraxen.font';
export class RecipesView {

}
export class InvManager {
  constructor();
  regen(): void;
}
export class ItemsView {

}

}
declare module 'io.th0rgal.oraxen.utils.breaker' {
import { List } from 'java.util';
export class BreakerSystem {
  static readonly MODIFIERS: HardnessModifier[];
  constructor();
  registerListener(): void;
}
export class HardnessModifier {

}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.cosmetic.skinnable' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class SkinnableMechanicFactory extends MechanicFactory {
  static get(): SkinnableMechanicFactory;
}
export class SkinnableMechanic extends Mechanic {

}

}
declare module 'io.th0rgal.oraxen.recipes.builders' {
import { UUID, Map } from 'java.util';
import { File } from 'java.io';
export class ShapelessBuilder extends WorkbenchBuilder {
  saveRecipe(name: string): void;
  saveRecipe(name: string, permission: string): void;
}
export class FurnaceBuilder extends RecipeBuilder {
  saveRecipe(name: string): void;
  saveRecipe(name: string, permission: string): void;
  setCookingTime(cookingTime: number);
  setExperience(experience: number);
}
export class ShapedBuilder extends WorkbenchBuilder {
  saveRecipe(name: string): void;
  saveRecipe(name: string, permission: string): void;
}
export class WorkbenchBuilder extends RecipeBuilder {

}
export class RecipeBuilder {
  saveRecipe(name: string): void;
  saveRecipe(name: string, permission: string): void;
  saveConfig(): void;
  getInventoryTitle(): string;
  open(): void;
  static get(playerUUID: UUID): RecipeBuilder;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.misc.custom.fields' {
import { CustomListener } from 'io.th0rgal.oraxen.mechanics.provided.misc.custom.listeners';
import { CustomListenerConstructor } from 'io.th0rgal.oraxen.mechanics.provided.misc.custom.fields.CustomEventType';
import { Enum } from 'java.lang';
import { List } from 'java.util';
import { ClickAction } from 'io.th0rgal.oraxen.utils.actions';
export class CustomEvent {
  readonly type: CustomEventType;
  constructor(action: string, oneUsage: boolean);
  getParams(): string[];
  getListener(itemID: string, cooldown: number, clickAction: ClickAction): CustomListener;
  isOneUsage(): boolean;
}
export class CustomEventType extends Enum<CustomEventType> {
  static readonly BREAK: CustomEventType;
  static readonly CLICK: CustomEventType;
  static readonly DROP: CustomEventType;
  static readonly PICKUP: CustomEventType;
  static readonly EQUIP: CustomEventType;
  static readonly UNEQUIP: CustomEventType;
  static valueOf(name: string): CustomEventType;
  static values(): CustomEventType[];
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.farming.watering' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class WateringMechanic extends Mechanic {
  isEmpty(): boolean;
  isFilled(): boolean;
  getEmptyCanItem(): string;
  getFilledCanItem(): string;
}
export class WateringMechanicFactory extends MechanicFactory {
  static get(): WateringMechanicFactory;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.misc.commands' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
import { TimersFactory } from 'io.th0rgal.oraxen.utils.timers';
import { CommandsParser } from 'io.th0rgal.oraxen.utils.commands';
export class CommandsMechanic extends Mechanic {
  isOneUsage(): boolean;
  getPermission(): string;
  getCommands(): CommandsParser;
}
export class CommandsMechanicFactory extends MechanicFactory {

}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.misc.itemtype' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class ItemTypeMechanic extends Mechanic {
  readonly itemType: string;
}
export class ItemTypeMechanicFactory extends MechanicFactory {
  static get(): ItemTypeMechanicFactory;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.gameplay.efficiency' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class EfficiencyMechanicFactory extends MechanicFactory {

}
export class EfficiencyMechanic extends Mechanic {
  getAmount(): number;
}

}
declare module 'io.th0rgal.oraxen.compatibilities.provided.mmoitems' {
export class WrappedMMOItem {

}

}
declare module 'io.th0rgal.oraxen.compatibilities.provided.lightapi' {
export class WrappedLightAPI {
  static init(): void;
}
export class LightApiUtils {

}

}
declare module 'io.th0rgal.oraxen.utils.armorequipevent' {
import { Enum } from 'java.lang';
/**
 * @author Arnah
 * @since Jul 30, 2015
*/
export class ArmorType extends Enum<ArmorType> {
  static readonly HELMET: ArmorType;
  static readonly CHESTPLATE: ArmorType;
  static readonly LEGGINGS: ArmorType;
  static readonly BOOTS: ArmorType;
  static valueOf(name: string): ArmorType;
  static values(): ArmorType[];
  getSlot(): number;
}

}
declare module 'io.th0rgal.oraxen.utils' {
import { Comparable, Class } from 'java.lang';
import { Set, Optional, Collection, List, Map } from 'java.util';
import { BufferedImage } from 'java.awt.image';
import { InputStream, File } from 'java.io';
import { JarInputStream } from 'java.util.jar';
import { Consumer } from 'java.util.function';
import { ZipOutputStream } from 'java.util.zip';
export class BlockHelpers {
  static VANILLA_STONE_PLACE: string;
  static VANILLA_STONE_BREAK: string;
  static VANILLA_STONE_HIT: string;
  static VANILLA_STONE_STEP: string;
  static VANILLA_STONE_FALL: string;
  static VANILLA_WOOD_PLACE: string;
  static VANILLA_WOOD_BREAK: string;
  static VANILLA_WOOD_HIT: string;
  static VANILLA_WOOD_STEP: string;
  static VANILLA_WOOD_FALL: string;
  static validateReplacedSounds(sound: string): string;
}
export class ValueConsumer<E> extends Consumer<E> {
  static option<E>(provider: ValueProvider<E>): Optional<E>;
  consume(value: E): void;
  accept(value: E): void;
  accept(optional: Optional<E>): void;
}
export class ValueProvider<E> {
  static option<E>(provider: ValueProvider<E>): Optional<E>;
  get(): E;
  optional(): Optional<E>;
}
export class Utils {
  static toLowercaseList(...values: string[]): string[];
  static toLowercase(...values: string[]): string[];
  static getVersion(format: string): number;
  static removeExtension(s: string): string;
  static writeStringToFile(file: File, content: string): void;
  static firstEmpty(map: Map<string, number>, min: number): number;
}
export class Constants {

}
export class VirtualFile extends Comparable<VirtualFile> {
  constructor(parentFolder: string, name: string, inputStream: InputStream);
  getInputStream(): InputStream;
  getPath(): string;
  compareTo(other: VirtualFile): number;
}
export class ZipUtils {
  static writeZipFile(outputFile: File, directoryToZip: File, fileList: VirtualFile[]): void;
  static addToZip(zipFilePath: string, fis: InputStream, zos: ZipOutputStream): void;
}
export class CustomArmorsTextures {
  constructor();
  constructor(resolution: number);
  registerImage(file: File): boolean;
  hasCustomArmors(): boolean;
  getLayerOne(): InputStream;
  getLayerTwo(): InputStream;
  shouldGenerateOptifineFiles(): boolean;
  getOptifineFiles(): Set<VirtualFile>;
}
export class VectorUtils {

}
export class ReflectionUtils {
  static getClasses(sample: Class<any>, packageName: string, deep: boolean): Class[];
  static collectClasses(sample: Class<any>, packageName: string, collection: Collection<Class<any>>, deep: boolean): void;
  static acceptJarStream(sample: Class<any>, consumer: ValueConsumer<JarInputStream>): void;
  static getJarStream(sample: Class<any>): Optional<JarInputStream>;
}

}
declare module 'io.th0rgal.oraxen.pack.receive' {
import { CommandsParser } from 'io.th0rgal.oraxen.utils.commands';
export class PackAction {
  getDelay(): number;
  hasSound(): boolean;
  hasMessage(): boolean;
  getMessageType(): string;
  getCommandsParser(): CommandsParser;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.farming.smelting' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class SmeltingMechanicFactory extends MechanicFactory {

}
export class SmeltingMechanic extends Mechanic {
  playSound(): boolean;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.combat.spell.energyblast' {
import { MechanicFactory } from 'io.th0rgal.oraxen.mechanics';
import { SpellMechanic } from 'io.th0rgal.oraxen.mechanics.provided.combat.spell';
export class EnergyBlastMechanicFactory extends MechanicFactory {

}
export class EnergyBlastMechanic extends SpellMechanic {
  getDamage(): number;
  getLength(): number;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.misc.custom' {
import { CustomListener } from 'io.th0rgal.oraxen.mechanics.provided.misc.custom.listeners';
import { Map } from 'java.util';
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class CustomMechanic extends Mechanic {

}
export class CustomMechanicFactory extends MechanicFactory {

}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.combat.spell.thor' {
import { MechanicFactory } from 'io.th0rgal.oraxen.mechanics';
import { SpellMechanic } from 'io.th0rgal.oraxen.mechanics.provided.combat.spell';
import { TimersFactory } from 'io.th0rgal.oraxen.utils.timers';
export class ThorMechanicFactory extends MechanicFactory {

}
export class ThorMechanic extends SpellMechanic {
  getLightningBoltsAmount(): number;
}

}
declare module 'io.th0rgal.oraxen.pack.generation' {
import { Collection, Map } from 'java.util';
import { SoundManager } from 'io.th0rgal.oraxen.sound';
import { File } from 'java.io';
import { FontManager } from 'io.th0rgal.oraxen.font';
import { Consumer } from 'java.util.function';
import { VirtualFile, CustomArmorsTextures } from 'io.th0rgal.oraxen.utils';
import { OraxenMeta } from 'io.th0rgal.oraxen.items';
import { JsonObject } from 'com.google.gson';
export class ResourcePack {
  clear(): void;
  generate(fontManager: FontManager, soundManager: SoundManager): void;
  addModifiers(groupName: string, ...modifiers: Consumer[]): void;
  addOutputFiles(...files: VirtualFile[]): void;
  getFile(): File;
  writeStringToVirtual(folder: string, name: string, content: string): void;
}
export class PredicatesGenerator {
  toJSON(): JsonObject;
}
export class ModelGenerator {
  constructor(oraxenMeta: OraxenMeta);
  getJson(): JsonObject;
  toString(): string;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.farming.bottledexp' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class BottledExpMechanicFactory extends MechanicFactory {
  getDurabilityCost(): number;
}
export class BottledExpMechanic extends Mechanic {
  getBottleEquivalent(level: number, xp: number): number;
}

}
declare module 'io.th0rgal.oraxen.utils.limitedplacing.LimitedPlacing' {
import { Enum } from 'java.lang';
export class LimitedPlacingType extends Enum<LimitedPlacingType> {
  static readonly ALLOW: LimitedPlacingType;
  static readonly DENY: LimitedPlacingType;
  static valueOf(name: string): LimitedPlacingType;
  static values(): LimitedPlacingType[];
}

}
declare module 'io.th0rgal.oraxen.pack.upload.hosts' {
import { File } from 'java.io';
export class HostingProvider {
  uploadPack(resourcePack: File): boolean;
  getPackURL(): string;
  getMinecraftPackURL(): string;
  getSHA1(): number[];
  getOriginalSHA1(): string;
}
export class Polymath extends HostingProvider {
  constructor(serverAddress: string);
  uploadPack(resourcePack: File): boolean;
  getPackURL(): string;
  getMinecraftPackURL(): string;
  getSHA1(): number[];
  getOriginalSHA1(): string;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.gameplay.noteblock' {
import { Drop } from 'io.th0rgal.oraxen.utils.drops';
import { DirectionalBlock } from 'io.th0rgal.oraxen.mechanics.provided.gameplay.noteblock.directional';
import { LimitedPlacing } from 'io.th0rgal.oraxen.utils.limitedplacing';
import { StorageMechanic } from 'io.th0rgal.oraxen.utils.storage';
import { List, Map } from 'java.util';
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
import { ClickAction } from 'io.th0rgal.oraxen.utils.actions';
import { LogStripping } from 'io.th0rgal.oraxen.mechanics.provided.gameplay.noteblock.logstrip';
import { FarmBlockDryout, FarmBlockTask } from 'io.th0rgal.oraxen.mechanics.provided.gameplay.noteblock.farmblock';
import { JsonObject } from 'com.google.gson';
export class NoteBlockMechanicFactory extends MechanicFactory {
  static readonly BLOCK_PER_VARIATION: Map<number, NoteBlockMechanic>;
  readonly toolTypes: string[];
  readonly farmBlockCheckDelay: number;
  static getInstrumentName(id: number): string;
  static getModelJson(modelName: string): JsonObject;
  static getDirectionalModelJson(modelName: string, itemId: string, mechanic: NoteBlockMechanic, parentMechanic: NoteBlockMechanic): JsonObject;
  static getBlockstateVariantName(id: number): string;
  static getBlockstateVariantName(instrument: string, note: number, powered: boolean): string;
  static getBlockMechanic(customVariation: number): NoteBlockMechanic;
  static getInstance(): NoteBlockMechanicFactory;
  registerFarmBlock(): void;
}
export class NoteBlockMechanic extends Mechanic {
  hasLimitedPlacing(): boolean;
  getLimitedPlacing(): LimitedPlacing;
  isStorage(): boolean;
  getStorage(): StorageMechanic;
  hasDryout(): boolean;
  getDryout(): FarmBlockDryout;
  isLog(): boolean;
  getLog(): LogStripping;
  isDirectional(): boolean;
  getDirectional(): DirectionalBlock;
  getCustomVariation(): number;
  getDrop(): Drop;
  hasBreakSound(): boolean;
  getBreakSound(): string;
  hasPlaceSound(): boolean;
  getPlaceSound(): string;
  hasStepSound(): boolean;
  getStepSound(): string;
  hasHitSound(): boolean;
  getHitSound(): string;
  hasFallSound(): boolean;
  getFallSound(): string;
  getPeriod(): number;
  getLight(): number;
  canIgnite(): boolean;
  hasClickActions(): boolean;
}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.misc.consumablepotioneffects' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class ConsumablePotionEffectsMechanicFactory extends MechanicFactory {

}
export class ConsumablePotionEffectsMechanic extends Mechanic {

}

}
declare module 'io.th0rgal.oraxen.compatibilities.provided.placeholderapi' {
export class PapiAliases {

}

}
declare module 'io.th0rgal.oraxen.mechanics.provided.combat.lifeleech' {
import { MechanicFactory, Mechanic } from 'io.th0rgal.oraxen.mechanics';
export class LifeLeechMechanic extends Mechanic {
  getAmount(): number;
}
export class LifeLeechMechanicFactory extends MechanicFactory {

}

}
declare module 'io.th0rgal.oraxen.items' {
import { Set, Optional, Collection, List, Map } from 'java.util';
import { File } from 'java.io';
import { Stream } from 'java.util.stream';
import { WrappedCrucibleItem } from 'io.th0rgal.oraxen.compatibilities.provided.mythiccrucible';
import { Entry } from 'java.util.Map';
import { ConfigsManager } from 'io.th0rgal.oraxen.config';
import { WrappedMMOItem } from 'io.th0rgal.oraxen.compatibilities.provided.mmoitems';
import { ItemStack } from 'org.bukkit.inventory';
export class ModelData {
  getDurability(): number;
}
export class OraxenItems {
  static loadItems(configsManager: ConfigsManager): void;
  static loadItems(): void;
  static getIdByItem(item: ItemBuilder): string;
  static exists(itemId: string): boolean;
  static getOptionalItemById(id: string): Optional<ItemBuilder>;
  static getItemById(id: string): ItemBuilder;
  static getUnexcludedItems(): ItemBuilder[];
  static getUnexcludedItems(file: File): ItemBuilder[];
  static getMap(): Map<File, Map<string, ItemBuilder>>;
  static getEntriesAsMap(): Map<string, ItemBuilder>;
  static getEntries(): Set<Entry<string, ItemBuilder>>;
  static getItems(): Collection<ItemBuilder>;
  static getSectionsNames(): Set<string>;
  static getNames(): Set<string>;
  static nameArray(): string[];
  static nameStream(): Stream<string>;
  static itemStream(): Stream<ItemBuilder>;
  static entryStream(): Stream<Entry<string, ItemBuilder>>;
  static getItemNames(): string[];
  static build(): ItemStack;
}
export class ItemBuilder {
  constructor(wrapped: WrappedMMOItem);
  constructor(wrapped: WrappedCrucibleItem);
  setAmount(amount: number);
  setDisplayName(displayName: string);
  getLore(): string[];
  setLore(lore: string[]);
  setUnbreakable(unbreakable: boolean): ItemBuilder;
  setDurability(durability: number);
  hasCustomTag(): boolean;
  setCustomModelData(customModelData: number);
  hasOraxenMeta(): boolean;
  getOraxenMeta(): OraxenMeta;
  setOraxenMeta(oraxenMeta: OraxenMeta);
  regen(): ItemBuilder;
  getMaxStackSize(): number;
  toString(): string;
}
export class OraxenMeta {
  setExcludedFromInventory(): void;
  isExcludedFromInventory(): boolean;
  hasPackInfos(): boolean;
  setCustomModelData(customModelData: number);
  getCustomModelData(): number;
  setModelName(modelName: string);
  setNoUpdate(noUpdate: boolean): void;
  getModelName(): string;
  hasBlockingModel(): boolean;
  getBlockingModelName(): string;
  hasChargedModel(): boolean;
  getChargedModelName(): string;
  hasFireworkModel(): boolean;
  getFireworkModelName(): string;
  hasPullingModels(): boolean;
  getPullingModels(): string[];
  hasLayers(): boolean;
  getLayers(): string[];
  getParentModel(): string;
  shouldGenerateModel(): boolean;
  isNoUpdate(): boolean;
}
export class ItemParser {
  usesMMOItems(): boolean;
  usesCrucibleItems(): boolean;
  buildItem(): ItemBuilder;
  buildItem(name: string): ItemBuilder;
  isConfigUpdated(): boolean;
}

}
