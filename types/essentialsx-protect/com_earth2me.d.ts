declare module 'com.earth2me.essentials.protect' {
import { Enum } from 'java.lang';
export class ProtectConfig extends Enum<ProtectConfig> {
  static readonly disable_contactdmg: ProtectConfig;
  static readonly disable_lavadmg: ProtectConfig;
  static readonly disable_lava_item_dmg: ProtectConfig;
  static readonly disable_pvp: ProtectConfig;
  static readonly disable_projectiles: ProtectConfig;
  static readonly disable_fall: ProtectConfig;
  static readonly disable_suffocate: ProtectConfig;
  static readonly disable_firedmg: ProtectConfig;
  static readonly disable_lightning: ProtectConfig;
  static readonly disable_drown: ProtectConfig;
  static readonly disable_wither: ProtectConfig;
  static readonly disable_weather_storm: ProtectConfig;
  static readonly disable_weather_lightning: ProtectConfig;
  static readonly disable_weather_thunder: ProtectConfig;
  static readonly prevent_fire_spread: ProtectConfig;
  static readonly prevent_flint_fire: ProtectConfig;
  static readonly prevent_lava_fire_spread: ProtectConfig;
  static readonly prevent_lightning_fire_spread: ProtectConfig;
  static readonly prevent_water_flow: ProtectConfig;
  static readonly prevent_lava_flow: ProtectConfig;
  static readonly prevent_water_bucket_flow: ProtectConfig;
  static readonly prevent_portal_creation: ProtectConfig;
  static readonly prevent_block_on_rail: ProtectConfig;
  static readonly prevent_tnt_explosion: ProtectConfig;
  static readonly prevent_tnt_playerdmg: ProtectConfig;
  static readonly prevent_tnt_itemdmg: ProtectConfig;
  static readonly prevent_tntminecart_explosion: ProtectConfig;
  static readonly prevent_tntminecart_playerdmg: ProtectConfig;
  static readonly prevent_tntminecart_itemdmg: ProtectConfig;
  static readonly prevent_fireball_explosion: ProtectConfig;
  static readonly prevent_fireball_fire: ProtectConfig;
  static readonly prevent_fireball_playerdmg: ProtectConfig;
  static readonly prevent_fireball_itemdmg: ProtectConfig;
  static readonly prevent_witherskull_explosion: ProtectConfig;
  static readonly prevent_witherskull_playerdmg: ProtectConfig;
  static readonly prevent_witherskull_itemdmg: ProtectConfig;
  static readonly prevent_wither_spawnexplosion: ProtectConfig;
  static readonly prevent_wither_blockreplace: ProtectConfig;
  static readonly prevent_creeper_explosion: ProtectConfig;
  static readonly prevent_creeper_playerdmg: ProtectConfig;
  static readonly prevent_creeper_itemdmg: ProtectConfig;
  static readonly prevent_creeper_blockdmg: ProtectConfig;
  static readonly prevent_ender_crystal_explosion: ProtectConfig;
  static readonly prevent_enderman_pickup: ProtectConfig;
  static readonly prevent_villager_death: ProtectConfig;
  static readonly prevent_bed_explosion: ProtectConfig;
  static readonly prevent_respawn_anchor_explosion: ProtectConfig;
  static readonly prevent_enderdragon_blockdmg: ProtectConfig;
  static readonly prevent_entitytarget: ProtectConfig;
  static readonly enderdragon_fakeexplosions: ProtectConfig;
  static readonly prevent_zombie_door_break: ProtectConfig;
  static readonly prevent_ravager_thief: ProtectConfig;
  static readonly prevent_sheep_eat_grass: ProtectConfig;
  static readonly prevent_creeper_charge: ProtectConfig;
  static readonly prevent_villager_infection: ProtectConfig;
  static readonly prevent_villager_cure: ProtectConfig;
  static readonly prevent_villager_to_witch: ProtectConfig;
  static readonly prevent_pig_transformation: ProtectConfig;
  static readonly prevent_zombie_drowning: ProtectConfig;
  static readonly prevent_mooshroom_switching: ProtectConfig;
  static valueOf(name: string): ProtectConfig;
  static values(): ProtectConfig[];
  /**
   * @return the configName
  */
  getConfigName(): string;
  /**
   * @return the default value String
  */
  getDefaultValueString(): string;
  /**
   * @return the default value boolean
  */
  getDefaultValueBoolean(): boolean;
  isString(): boolean;
  isList(): boolean;
}

}
