declare module 'net.essentialsx.api.v2.services.discord.MessageType' {
import { MessageType } from 'net.essentialsx.api.v2.services.discord';
/**
 * Default {@link MessageType MessageTypes} provided and documented by EssentialsX Discord.
*/
export class DefaultTypes {
  static readonly JOIN: MessageType;
  static readonly LEAVE: MessageType;
  static readonly CHAT: MessageType;
  static readonly DEATH: MessageType;
  static readonly AFK: MessageType;
  static readonly ADVANCEMENT: MessageType;
  static readonly ACTION: MessageType;
  static readonly SERVER_START: MessageType;
  static readonly SERVER_STOP: MessageType;
  static readonly KICK: MessageType;
  static readonly MUTE: MessageType;
  /**
   * Gets an array of all the default {@link MessageType MessageTypes}.
   * @return An array of all the default {@link MessageType MessageTypes}.
  */
  static values(): MessageType[];
}

}
declare module 'net.essentialsx.discord.util' {
import { MessageFormat } from 'java.text';
import { CopyOnWriteArrayList } from 'java.util.concurrent';
export class DiscordCommandSender {

}
export class MessageUtil {
  /**
   * Sanitizes text to be sent to Discord, escaping any Markdown syntax.
  */
  static sanitizeDiscordMarkdown(message: string): string;
  /**
   * Shortcut method allowing for use of varags in {@link MessageFormat} instances
  */
  static formatMessage(format: MessageFormat, ...args: any[]): string;
}
export class DiscordUtil {
  static readonly ADVANCED_RELAY_NAME: string;
  static readonly CONSOLE_RELAY_NAME: string;
  static readonly ACTIVE_WEBHOOKS: CopyOnWriteArrayList<string>;
}

}
declare module 'net.essentialsx.api.v2.services.discord' {
import { List } from 'java.util';
import { Enum, Exception } from 'java.lang';
import { CompletableFuture } from 'java.util.concurrent';
/**
 * Indicates the type of message being sent and its literal channel name used in the config.
*/
export class MessageType {
  /**
   * Creates a {@link MessageType} which will send channels to the specified channel key.
   * 
   * The message type key may only contain: lowercase letters, numbers, and dashes.
   * @param key The channel key defined in the `message-types` section of the config.
  */
  constructor(key: string);
  /**
   * Gets the key used in `message-types` section of the config.
   * @return The config key.
  */
  getKey(): string;
  /**
   * Checks if this message type should be beholden to player-specific config settings.
   * @return true if message type should be beholden to player-specific config settings.
  */
  isPlayer(): boolean;
  toString(): string;
}
/**
 * Represents an argument for a command to be shown to Discord users.
*/
export class InteractionCommandArgument {
  /**
   * Gets the name of this argument.
   * @return the name of the argument.
  */
  getName(): string;
  /**
   * Gets the description of this argument.
   * @return the description of the argument.
  */
  getDescription(): string;
  /**
   * Whether or not this argument is required or not.
   * @return true if the argument is required.
  */
  isRequired(): boolean;
}
/**
 * Represents the interaction command executor as a guild member.
*/
export class InteractionMember {
  /**
   * Gets the username of this member.
   * @return this member's username.
  */
  getName(): string;
  /**
   * Gets the four numbers after the `#` in the member's username.
   * @return this member's discriminator.
  */
  getDiscriminator(): string;
  /**
   * Gets this member's name and discriminator split by a `#`.
   * @return this member's tag.
  */
  getTag(): string;
  /**
   * Gets the nickname of this member or their username if they don't have one.
   * @return this member's nickname or username if none is present.
  */
  getEffectiveName(): string;
  /**
   * Gets the nickname of this member or null if they do not have one.
   * @return this member's nickname or null.
  */
  getNickname(): string;
  /**
   * Gets the ID of this member.
   * @return this member's ID.
  */
  getId(): string;
  /**
   * Checks if this member has the administrator permission on Discord.
   * @return true if this user has administrative permissions.
  */
  isAdmin(): boolean;
  /**
   * Returns true if the user has one of the specified roles.
   * @param roleDefinitions A list of role definitions from the config.
   * @return true if the member has one of the given roles.
  */
  hasRoles(roleDefinitions: string[]): boolean;
  /**
   * Sends a private message to this member with the given content.
   * @param content The message to send.
   * @return A future which will complete a boolean stating the success of the message.
  */
  sendPrivateMessage(content: string): CompletableFuture<boolean>;
}
/**
 * Unstable methods that may vary with our implementation.
 * These methods have no guarantee of remaining consistent and may change at any time.
*/
export class Unsafe {

}
/**
 * A class which provides numerous methods to interact with Discord slash commands.
*/
export class InteractionController {

}
/**
 * Thrown when an error occurs during an operation dealing with Discord interactions.
*/
export class InteractionException extends Exception {
  constructor(message: string);
}
/**
 * Represents a command to be registered with the Discord client.
*/
export class InteractionCommand {
  /**
   * Whether or not the command has been disabled and should not be registered at the request of the user.
   * @return true if the command has been disabled.
  */
  isDisabled(): boolean;
  /**
   * Whether or not the command is ephemeral and if its usage/replies should be private for the user on in Discord client.
   * @return true if the command is ephemeral.
  */
  isEphemeral(): boolean;
  /**
   * Gets the name of this command as it appears in Discord.
   * @return the name of the command.
  */
  getName(): string;
  /**
   * Gets the brief description of the command as it appears in Discord.
   * @return the description of the command.
  */
  getDescription(): string;
}
/**
 * Represents a triggered interaction event.
*/
export class InteractionEvent {
  /**
   * Appends the given string to the initial response message and creates one if it doesn't exist.
   * @param message The message to append.
  */
  reply(message: string): void;
  /**
   * Get the value of the argument matching the given key represented as a String, or null if no argument by that name is present. 
   * @param key The key of the argument to lookup.
   * @return the string value or null.
  */
  getStringArgument(key: string): string;
  /**
   * Get the Long representation of the argument by the given key or null if none by that key is present.
   * @param key The key of the argument to lookup.
   * @return the long value or null
  */
  getIntegerArgument(key: string): number;
  /**
   * Helper method to get the Boolean representation of the argument by the given key or null if none by that key is present.
   * @param key The key of the argument to lookup.
   * @return the boolean value or null
  */
  getBooleanArgument(key: string): boolean;
  /**
   * Gets the channel ID where this interaction occurred.
   * @return the channel ID.
  */
  getChannelId(): string;
}
/**
 * A class which provides numerous methods to interact with EssentialsX Discord.
*/
export class DiscordService {
  /**
   * Checks if a {@link MessageType} by the given key is already registered.
   * @param key The {@link MessageType} key to check.
   * @return true if a {@link MessageType} with the provided key is registered, otherwise false.
  */
  isRegistered(key: string): boolean;
}
/**
 * Represents an argument type to be shown on the Discord client.
*/
export class InteractionCommandArgumentType extends Enum<InteractionCommandArgumentType> {
  static readonly STRING: InteractionCommandArgumentType;
  static readonly INTEGER: InteractionCommandArgumentType;
  static readonly BOOLEAN: InteractionCommandArgumentType;
  static readonly USER: InteractionCommandArgumentType;
  static readonly CHANNEL: InteractionCommandArgumentType;
  static valueOf(name: string): InteractionCommandArgumentType;
  static values(): InteractionCommandArgumentType[];
  /**
   * Gets the internal Discord ID for this argument type.
   * @return the internal Discord ID.
  */
  getId(): number;
}
/**
 * Represents a interaction channel argument as a guild channel.
*/
export class InteractionChannel {
  /**
   * Gets the name of this channel.
   * @return this channel's name.
  */
  getName(): string;
  /**
   * Gets the ID of this channel.
   * @return this channel's ID.
  */
  getId(): string;
}

}
declare module 'net.essentialsx.discord.util.DiscordCommandSender' {
export class CmdCallback {
  onMessage(message: string): void;
}

}
