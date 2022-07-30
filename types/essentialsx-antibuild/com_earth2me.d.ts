declare module 'com.earth2me.essentials.antibuild' {
import { Enum } from 'java.lang';
export class AntiBuildConfig extends Enum<AntiBuildConfig> {
  static readonly disable_build: AntiBuildConfig;
  static readonly disable_use: AntiBuildConfig;
  static readonly alert_on_placement: AntiBuildConfig;
  static readonly alert_on_use: AntiBuildConfig;
  static readonly alert_on_break: AntiBuildConfig;
  static readonly blacklist_placement: AntiBuildConfig;
  static readonly blacklist_usage: AntiBuildConfig;
  static readonly blacklist_break: AntiBuildConfig;
  static readonly blacklist_piston: AntiBuildConfig;
  static readonly blacklist_dispenser: AntiBuildConfig;
  static valueOf(name: string): AntiBuildConfig;
  static values(): AntiBuildConfig[];
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
