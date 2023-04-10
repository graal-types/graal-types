declare module 'net.kyori.adventure.text.BlockNBTComponent' {
import { NBTComponentBuilder, BlockNBTComponent } from 'net.kyori.adventure.text';
import { Coordinate } from 'net.kyori.adventure.text.BlockNBTComponent.WorldPos';
/**
 * An NBT component builder.
 *
 * @since 4.0.0
*/
export class Builder extends NBTComponentBuilder<BlockNBTComponent, Builder> {
  /**
   * Sets the block position.
   *
   * @param pos the block position
   * @return this builder
   * @since 4.0.0
  */
  pos(pos: Pos): Builder;
  /**
   * Sets the block position to a {@link LocalPos} with the given values.
   *
   * @param left the left value
   * @param up the up value
   * @param forwards the forwards value
   * @return this builder
   * @since 4.0.0
  */
  localPos(left: number, up: number, forwards: number): Builder;
  /**
   * Sets the block position to a {@link WorldPos} with the given coordinates.
   *
   * @param x the x coordinate
   * @param y the y coordinate
   * @param z the z coordinate
   * @return this builder
   * @since 4.0.0
  */
  worldPos(x: Coordinate, y: Coordinate, z: Coordinate): Builder;
  /**
   * Sets the block position to an absolute {@link WorldPos} with the given coordinates.
   *
   * @param x the x coordinate
   * @param y the y coordinate
   * @param z the z coordinate
   * @return this builder
   * @since 4.0.0
  */
  absoluteWorldPos(x: number, y: number, z: number): Builder;
  /**
   * Sets the block position to an relative {@link WorldPos} with the given coordinates.
   *
   * @param x the x coordinate
   * @param y the y coordinate
   * @param z the z coordinate
   * @return this builder
   * @since 4.0.0
  */
  relativeWorldPos(x: number, y: number, z: number): Builder;
}
/**
 * A position.
 *
 * @since 4.0.0
*/
export class Pos {
  /**
   * Attempt to parse a position from the input string.
   *
   * The input string must refer to a local position (with 3 `^`-prefixed digits),
   * or a world position (with 3 digits that are global if unprefixed, or relative to the
   * current position if `~`-prefixed).
   *
   * @param input input
   * @return a new pos
   * @throws IllegalArgumentException if the position was in an invalid format
   * @since 4.0.0
  */
  static fromString(input: string): Pos;
  /**
   * Gets a parseable string representation of this position.
   *
   * @return a string representation
   * @see #fromString(String)
   * @since 4.0.0
  */
  asString(): string;
}
/**
 * A local position.
 *
 * @since 4.0.0
*/
export class LocalPos {
  /**
   * Creates a local position with the given values.
   *
   * @param left the left value
   * @param up the up value
   * @param forwards the forwards value
   * @return a local position
   * @since 4.0.0
  */
  static of(left: number, up: number, forwards: number): LocalPos;
  /**
   * Gets the left value.
   *
   * @return the left value
   * @since 4.0.0
  */
  left(): number;
  /**
   * Gets the up value.
   *
   * @return the up value
   * @since 4.0.0
  */
  up(): number;
  /**
   * Gets the forwards value.
   *
   * @return the forwards value
   * @since 4.0.0
  */
  forwards(): number;
}
/**
 * A world position.
 *
 * @since 4.0.0
*/
export class WorldPos {
  /**
   * Creates a world position with the given coordinates.
   *
   * @param x the x coordinate
   * @param y the y coordinate
   * @param z the z coordinate
   * @return a world position
   * @since 4.0.0
  */
  static of(x: Coordinate, y: Coordinate, z: Coordinate): WorldPos;
  /**
   * Gets the x coordinate.
   *
   * @return the x coordinate
   * @since 4.0.0
  */
  x(): Coordinate;
  /**
   * Gets the y coordinate.
   *
   * @return the y coordinate
   * @since 4.0.0
  */
  y(): Coordinate;
  /**
   * Gets the z coordinate.
   *
   * @return the z coordinate
   * @since 4.0.0
  */
  z(): Coordinate;
}

}
declare module 'net.kyori.adventure.text.TranslatableComponent' {
import { TranslatableComponent, ComponentLike, Component, ComponentBuilder } from 'net.kyori.adventure.text';
import { List } from 'java.util';
import { Translatable } from 'net.kyori.adventure.translation';
/**
 * A text component builder.
 *
 * @since 4.0.0
*/
export class Builder extends ComponentBuilder<TranslatableComponent, Builder> {
  /**
   * Sets the translation key.
   *
   * @param translatable the translatable object to get the key from
   * @return this builder
   * @since 4.8.0
  */
  key(translatable: Translatable): Builder;
  /**
   * Sets the translation key.
   *
   * @param key the translation key
   * @return this builder
   * @since 4.0.0
  */
  key(key: string): Builder;
  /**
   * Sets the translation args.
   *
   * @param arg the translation arg
   * @return this builder
   * @since 4.0.0
  */
  args(arg: ComponentBuilder<any, any>): Builder;
  /**
   * Sets the translation args.
   *
   * @param args the translation args
   * @return this builder
   * @since 4.0.0
  */
  args(...args: ComponentBuilder[]): Builder;
  /**
   * Sets the translation args.
   *
   * @param arg the translation arg
   * @return this builder
   * @since 4.0.0
  */
  args(arg: Component): Builder;
  /**
   * Sets the translation args.
   *
   * @param args the translation args
   * @return this builder
   * @since 4.0.0
  */
  args(...args: ComponentLike[]): Builder;
  /**
   * Sets the translation args.
   *
   * @param args the translation args
   * @return this builder
   * @since 4.0.0
  */
  args(args: ComponentLike[]): Builder;
}

}
declare module 'net.kyori.adventure.bossbar' {
import { ComponentLike, Component } from 'net.kyori.adventure.text';
import { Iterable } from 'java.lang';
import { Set } from 'java.util';
import { Listener, Color, Overlay, Flag } from 'net.kyori.adventure.bossbar.BossBar';
/**
 * Represents an in-game bossbar which can be shown to the client.
 * A bossbar consists of:
 * 
 *   name
 *   the title of the bossbar
 *   progress
 *   a number in the range [0,1] representing how much of the bossbar should be filled
 *   color
 *   the {@link Color} of the bossbar; platforms may downsample this for versions below Java Edition 1.9
 *   overlay
 *   {@link Overlay}s decide if the bossbar is continuous or split into segments
 *   flags(optional)
 *   {@link Flag}s are extra actions that can be triggered whenever the bossbar is displayed
 * 
 *
 * @since 4.0.0
*/
export class BossBar {
  /**
   * The minimum value the progress can be.
   *
   * @since 4.2.0
  */
  static readonly MIN_PROGRESS: number;
  /**
   * The maximum value the progress can be.
   *
   * @since 4.2.0
  */
  static readonly MAX_PROGRESS: number;
  /**
   * The minimum value the progress can be.
   *
   * @deprecated for removal since 4.2.0, use {@link #MIN_PROGRESS}
   * @since 4.0.0
  */
  static readonly MIN_PERCENT: number;
  /**
   * The maximum value the progress can be.
   *
   * @deprecated for removal since 4.2.0, use {@link #MAX_PROGRESS}
   * @since 4.0.0
  */
  static readonly MAX_PERCENT: number;
  /**
   * Creates a new bossbar.
   *
   * @param name the name
   * @param progress the progress, between 0 and 1
   * @param color the color
   * @param overlay the overlay
   * @return a bossbar
   * @throws IllegalArgumentException if progress is less than 0 or greater than 1
   * @since 4.3.0
  */
  static bossBar(name: ComponentLike, progress: number, color: Color, overlay: Overlay): BossBar;
  /**
   * Creates a new bossbar.
   *
   * @param name the name
   * @param progress the progress, between 0 and 1
   * @param color the color
   * @param overlay the overlay
   * @return a bossbar
   * @throws IllegalArgumentException if progress is less than 0 or greater than 1
   * @since 4.0.0
  */
  static bossBar(name: Component, progress: number, color: Color, overlay: Overlay): BossBar;
  /**
   * Creates a new bossbar.
   *
   * @param name the name
   * @param progress the progress, between 0 and 1
   * @param color the color
   * @param overlay the overlay
   * @param flags the flags
   * @return a bossbar
   * @throws IllegalArgumentException if progress is less than 0 or greater than 1
   * @since 4.3.0
  */
  static bossBar(name: ComponentLike, progress: number, color: Color, overlay: Overlay, flags: Set<Flag>): BossBar;
  /**
   * Creates a new bossbar.
   *
   * @param name the name
   * @param progress the progress, between 0 and 1
   * @param color the color
   * @param overlay the overlay
   * @param flags the flags
   * @return a bossbar
   * @throws IllegalArgumentException if progress is less than 0 or greater than 1
   * @since 4.0.0
  */
  static bossBar(name: Component, progress: number, color: Color, overlay: Overlay, flags: Set<Flag>): BossBar;
  /**
   * Gets the name.
   *
   * @return the name
   * @since 4.0.0
  */
  name(): Component;
  /**
   * Sets the name.
   *
   * @param name the name
   * @return the bossbar
   * @since 4.3.0
  */
  name(name: ComponentLike): BossBar;
  /**
   * Sets the name.
   *
   * @param name the name
   * @return the bossbar
   * @since 4.0.0
  */
  name(name: Component): BossBar;
  /**
   * Gets the progress.
   *
   * The progress is a value between 0 and 1.
   *
   * @return the progress
   * @since 4.0.0
  */
  progress(): number;
  /**
   * Sets the progress.
   *
   * The progress is a value between 0 and 1.
   *
   * @param progress the progress
   * @return the bossbar
   * @throws IllegalArgumentException if progress is less than 0 or greater than 1
   * @since 4.0.0
  */
  progress(progress: number): BossBar;
  /**
   * Gets the progress.
   *
   * The progress is a value between 0 and 1.
   *
   * @return the progress
   * @deprecated for removal since 4.2.0, use {@link #progress()}
   * @since 4.0.0
  */
  percent(): number;
  /**
   * Sets the progress.
   *
   * The progress is a value between 0 and 1.
   *
   * @param progress the progress
   * @return the bossbar
   * @throws IllegalArgumentException if progress is less than 0 or greater than 1
   * @deprecated for removal since 4.2.0, use {@link #progress(float)}
   * @since 4.0.0
  */
  percent(progress: number): BossBar;
  /**
   * Gets the color.
   *
   * @return the color
   * @since 4.0.0
  */
  color(): Color;
  /**
   * Sets the color.
   *
   * @param color the color
   * @return the bossbar
   * @since 4.0.0
  */
  color(color: Color): BossBar;
  /**
   * Gets the overlay.
   *
   * @return the overlay
   * @since 4.0.0
  */
  overlay(): Overlay;
  /**
   * Sets the overlay.
   *
   * @param overlay the overlay
   * @return the bossbar
   * @since 4.0.0
  */
  overlay(overlay: Overlay): BossBar;
  /**
   * Gets the flags.
   *
   * @return the flags
   * @since 4.0.0
  */
  flags(): Set<Flag>;
  /**
   * Sets the flags.
   *
   * @param flags the flags
   * @return the bossbar
   * @since 4.0.0
  */
  flags(flags: Set<Flag>): BossBar;
  /**
   * Checks if this bossbar has a flag.
   *
   * @param flag the flag
   * @return `true` if this bossbar has the flag, `false` otherwise
   * @since 4.0.0
  */
  hasFlag(flag: Flag): boolean;
  /**
   * Adds a flag to this bossbar.
   *
   * @param flag the flag
   * @return the bossbar
   * @since 4.0.0
  */
  addFlag(flag: Flag): BossBar;
  /**
   * Removes a flag from this bossbar.
   *
   * @param flag the flag
   * @return the bossbar
   * @since 4.0.0
  */
  removeFlag(flag: Flag): BossBar;
  /**
   * Adds flags to this bossbar.
   *
   * @param flags the flags
   * @return the bossbar
   * @since 4.0.0
  */
  addFlags(...flags: Flag[]): BossBar;
  /**
   * Removes flags from this bossbar.
   *
   * @param flags the flags
   * @return the bossbar
   * @since 4.0.0
  */
  removeFlags(...flags: Flag[]): BossBar;
  /**
   * Adds flags to this bossbar.
   *
   * @param flags the flags
   * @return the bossbar
   * @since 4.0.0
  */
  addFlags(flags: Iterable<Flag>): BossBar;
  /**
   * Removes flags from this bossbar.
   *
   * @param flags the flags
   * @return the bossbar
   * @since 4.0.0
  */
  removeFlags(flags: Iterable<Flag>): BossBar;
  /**
   * Adds a listener.
   *
   * @param listener a listener
   * @return the bossbar
   * @since 4.0.0
  */
  addListener(listener: Listener): BossBar;
  /**
   * Removes a listener.
   *
   * @param listener a listener
   * @return the bossbar
   * @since 4.0.0
  */
  removeListener(listener: Listener): BossBar;
}

}
declare module 'net.kyori.adventure.text.ScoreComponent' {
import { ScoreComponent, ComponentBuilder } from 'net.kyori.adventure.text';
/**
 * A score component builder.
 *
 * @since 4.0.0
*/
export class Builder extends ComponentBuilder<ScoreComponent, Builder> {
  /**
   * Sets the score name.
   *
   * @param name the score name
   * @return this builder
   * @since 4.0.0
  */
  name(name: string): Builder;
  /**
   * Sets the score objective.
   *
   * @param objective the score objective
   * @return this builder
   * @since 4.0.0
  */
  objective(objective: string): Builder;
  /**
   * Sets the value.
   *
   * @param value the value
   * @return this builder
   * @since 4.0.0
   * @deprecated since 4.7.0, not for removal, with no replacement. This field is no longer supported in 1.16.5.
  */
  value(value: string | null): Builder;
}

}
declare module 'net.kyori.adventure.inventory' {
import { Component } from 'net.kyori.adventure.text';
import { Collection, List } from 'java.util';
import { Buildable } from 'net.kyori.adventure.util';
import { Builder } from 'net.kyori.adventure.inventory.Book';
/**
 * Represents the in-game interface of a book.
 *
 *
 * Components exceeding the text limit for a page will be truncated client-side
 * and not moved automatically to the next page.
 *
 * @see Audience#openBook(Book)
 * @since 4.0.0
*/
export class Book extends Buildable<Book, Builder> {
  /**
   * Creates a book.
   *
   * @param title the title
   * @param author the author
   * @param pages the collection of pages
   * @return a book
   * @since 4.0.0
  */
  static book(title: Component, author: Component, pages: Collection<Component>): Book;
  /**
   * Creates a book.
   *
   * @param title the title
   * @param author the author
   * @param pages an array of pages
   * @return a book
   * @since 4.0.0
  */
  static book(title: Component, author: Component, ...pages: Component[]): Book;
  /**
   * Create a new builder that will create a {@link Book}.
   *
   * @return a builder
   * @since 4.0.0
  */
  static builder(): Builder;
  /**
   * Gets the title.
   *
   * @return the title
   * @since 4.0.0
  */
  title(): Component;
  /**
   * Changes the book's title.
   *
   * @param title the title
   * @return a new book with modifications
   * @since 4.0.0
  */
  title(title: Component): Book;
  /**
   * Gets the author.
   *
   * @return the author
   * @since 4.0.0
  */
  author(): Component;
  /**
   * Changes the book's author.
   *
   * @param author the author
   * @return a new book with modifications
   * @since 4.0.0
  */
  author(author: Component): Book;
  /**
   * Gets the list of pages.
   *
   * The returned collection will be unmodifiable.
   *
   * @return the list of pages
   * @since 4.0.0
  */
  pages(): Component[];
  /**
   * Returns an updated book with the provided pages.
   *
   * @param pages the pages to set
   * @return a new book with modifications
   * @since 4.0.0
  */
  pages(...pages: Component[]): Book;
  /**
   * Returns an updated book with the provided pages.
   *
   * @param pages the pages to set
   * @return a new book with modifications
   * @since 4.0.0
  */
  pages(pages: Component[]): Book;
  /**
   * Create a new builder initialized with the attributes of this book.
   *
   * @return the builder
  */
  toBuilder(): Builder;
}

}
declare module 'net.kyori.adventure.audience.ForwardingAudience' {
import { Component } from 'net.kyori.adventure.text';
import { Book } from 'net.kyori.adventure.inventory';
import { Optional } from 'java.util';
import { Iterable } from 'java.lang';
import { Emitter } from 'net.kyori.adventure.sound.Sound';
import { Title } from 'net.kyori.adventure.title';
import { SoundStop, Sound } from 'net.kyori.adventure.sound';
import { Identified, Identity } from 'net.kyori.adventure.identity';
import { Pointer } from 'net.kyori.adventure.pointer';
import { BossBar } from 'net.kyori.adventure.bossbar';
import { Audience, ForwardingAudience, MessageType } from 'net.kyori.adventure.audience';
import { Supplier } from 'java.util.function';
/**
 * An audience that forwards everything to a single other audience.
 *
 * @since 4.0.0
*/
export class Single extends ForwardingAudience {
  /**
   * Gets the audience.
   *
   * @return the audience
   * @since 4.0.0
  */
  audience(): Audience;
  /**
   * {@inheritDoc}
   *
   * @return {@link #audience()}
   * @deprecated this audience only supports forwarding to a single audience
  */
  audiences(): Iterable<Audience>;
  get<T>(pointer: Pointer<T>): Optional<T>;
  getOrDefault<T>(pointer: Pointer<T>, defaultValue: T | null): T | null;
  getOrDefaultFrom<T>(pointer: Pointer<T>, defaultValue: Supplier<T>): T;
  sendMessage(source: Identified, message: Component, type: MessageType): void;
  sendMessage(source: Identity, message: Component, type: MessageType): void;
  sendActionBar(message: Component): void;
  sendPlayerListHeader(header: Component): void;
  sendPlayerListFooter(footer: Component): void;
  sendPlayerListHeaderAndFooter(header: Component, footer: Component): void;
  showTitle(title: Title): void;
  clearTitle(): void;
  resetTitle(): void;
  showBossBar(bar: BossBar): void;
  hideBossBar(bar: BossBar): void;
  playSound(sound: Sound): void;
  playSound(sound: Sound, x: number, y: number, z: number): void;
  playSound(sound: Sound, emitter: Emitter): void;
  stopSound(stop: SoundStop): void;
  openBook(book: Book): void;
}

}
declare module 'net.kyori.adventure.pointer.Pointers' {
import { Pointers, Pointer } from 'net.kyori.adventure.pointer';
import { Supplier } from 'java.util.function';
import { Builder as net_kyori_adventure_util_Buildable_Builder } from 'net.kyori.adventure.util.Buildable';
/**
 * A builder of pointers.
 *
 * @see Pointers
 * @since 4.8.0
*/
export class Builder extends net_kyori_adventure_util_Buildable_Builder<Pointers> {
  /**
   * Adds a pointer with a static, optional value.
   *
   * @param pointer the pointer
   * @param value the optional value
   * @param  the type
   * @return this builder
   * @since 4.8.0
  */
  withStatic<T>(pointer: Pointer<T>, value: T | null): Builder;
  /**
   * Adds a pointer with a dynamic value provided by a supplier.
   *
   * @param pointer the pointer
   * @param value the value supplier
   * @param  the type
   * @return this builder
   * @since 4.8.0
  */
  withDynamic<T>(pointer: Pointer<T>, value: Supplier<T>): Builder;
}

}
declare module 'net.kyori.adventure.text.StorageNBTComponent' {
import { NBTComponentBuilder, StorageNBTComponent } from 'net.kyori.adventure.text';
import { Key } from 'net.kyori.adventure.key';
/**
 * A command storage NBT component builder.
 *
 * @since 4.0.0
*/
export class Builder extends NBTComponentBuilder<StorageNBTComponent, Builder> {
  /**
   * Sets the NBT storage.
   *
   * @param storage the id of the NBT storage
   * @return this builder
   * @since 4.0.0
  */
  storage(storage: Key): Builder;
}

}
declare module 'net.kyori.adventure.text.format.Style' {
import { Key } from 'net.kyori.adventure.key';
import { HoverEventSource, ClickEvent } from 'net.kyori.adventure.text.event';
import { Enum } from 'java.lang';
import { Set } from 'java.util';
import { Strategy } from 'net.kyori.adventure.text.format.Style.Merge';
import { State } from 'net.kyori.adventure.text.format.TextDecoration';
import { Builder as net_kyori_adventure_util_Buildable_Builder } from 'net.kyori.adventure.util.Buildable';
import { TextDecoration, Style, TextColor, StyleBuilderApplicable } from 'net.kyori.adventure.text.format';
/**
 * A merge choice.
 *
 * @since 4.0.0
*/
export class Merge extends Enum<Merge> {
  /**
   * Merges {@link Style#color()}.
   *
   * @since 4.0.0
  */
  static readonly COLOR: Merge;
  /**
   * Merges {@link Style#decorations()}.
   *
   * @since 4.0.0
  */
  static readonly DECORATIONS: Merge;
  /**
   * Merges {@link Style#clickEvent()} and {@link Style#hoverEvent()}.
   *
   * @since 4.0.0
  */
  static readonly EVENTS: Merge;
  /**
   * Merges {@link Style#insertion()}.
   *
   * @since 4.0.0
  */
  static readonly INSERTION: Merge;
  /**
   * Merges {@link Style#font()}.
   *
   * @since 4.0.0
  */
  static readonly FONT: Merge;
  static valueOf(name: string): Merge;
  static values(): Merge[];
  /**
   * Gets a merge set of all merge types.
   *
   * @return a merge set
   * @since 4.0.0
  */
  static all(): Set<Merge>;
  /**
   * Gets a merge set containing {@link #COLOR} and {@link #DECORATIONS}.
   *
   * @return a merge set
   * @since 4.0.0
  */
  static colorAndDecorations(): Set<Merge>;
  /**
   * Creates a merge set.
   *
   * @param merges the merge parts
   * @return a merge set
   * @since 4.0.0
  */
  static of(...merges: Merge[]): Set<Merge>;
}
/**
 * A style builder.
 *
 * @since 4.0.0
*/
export class Builder extends net_kyori_adventure_util_Buildable_Builder<Style> {
  /**
   * Sets the font.
   *
   * @param font the font
   * @return this builder
   * @since 4.0.0
   * @sinceMinecraft 1.16
  */
  font(font: Key | null): Builder;
  /**
   * Sets the color.
   *
   * @param color the color
   * @return this builder
   * @since 4.0.0
  */
  color(color: TextColor | null): Builder;
  /**
   * Sets the color if there isn't one set already.
   *
   * @param color the color
   * @return this builder
   * @since 4.0.0
  */
  colorIfAbsent(color: TextColor | null): Builder;
  /**
   * Sets `decoration` to {@link TextDecoration.State#TRUE}.
   *
   * @param decoration the decoration
   * @return a style
   * @since 4.0.0
  */
  decorate(decoration: TextDecoration): Builder;
  /**
   * Sets `decorations` to {@link TextDecoration.State#TRUE}.
   *
   * @param decorations the decorations
   * @return a style
   * @since 4.0.0
  */
  decorate(...decorations: TextDecoration[]): Builder;
  /**
   * Sets the state of a decoration on this style.
   *
   * @param decoration the decoration
   * @param flag `true` if this style should have the decoration, `false` if
   *     this style should not have the decoration
   * @return a style
   * @since 4.0.0
  */
  decoration(decoration: TextDecoration, flag: boolean): Builder;
  /**
   * Sets the value of a decoration.
   *
   * @param decoration the decoration
   * @param state {@link TextDecoration.State#TRUE} if this component should have the
   *     decoration, {@link TextDecoration.State#FALSE} if this component should not
   *     have the decoration, and {@link TextDecoration.State#NOT_SET} if the decoration
   *     should not have a set value
   * @return this builder
   * @since 4.0.0
  */
  decoration(decoration: TextDecoration, state: State): Builder;
  /**
   * Sets the click event.
   *
   * @param event the click event
   * @return this builder
   * @since 4.0.0
  */
  clickEvent(event: ClickEvent | null): Builder;
  /**
   * Sets the hover event.
   *
   * @param source the hover event source
   * @return this builder
   * @since 4.0.0
  */
  hoverEvent(source: HoverEventSource<any> | null): Builder;
  /**
   * Sets the string to be inserted.
   *
   * @param insertion the insertion string
   * @return this builder
   * @since 4.0.0
  */
  insertion(insertion: string | null): Builder;
  /**
   * Merges from another style into this style.
   *
   * @param that the other style
   * @return this builder
   * @since 4.0.0
  */
  merge(that: Style): Builder;
  /**
   * Merges from another style into this style.
   *
   * @param that the other style
   * @param strategy the merge strategy
   * @return this builder
   * @since 4.0.0
  */
  merge(that: Style, strategy: Strategy): Builder;
  /**
   * Merges from another style into this style.
   *
   * @param that the other style
   * @param merges the parts to merge
   * @return this builder
   * @since 4.0.0
  */
  merge(that: Style, ...merges: Merge[]): Builder;
  /**
   * Merges from another style into this style.
   *
   * @param that the other style
   * @param strategy the merge strategy
   * @param merges the parts to merge
   * @return this builder
   * @since 4.0.0
  */
  merge(that: Style, strategy: Strategy, ...merges: Merge[]): Builder;
  /**
   * Merges from another style into this style.
   *
   * @param that the other style
   * @param merges the parts to merge
   * @return this builder
   * @since 4.0.0
  */
  merge(that: Style, merges: Set<Merge>): Builder;
  /**
   * Merges from another style into this style.
   *
   * @param that the other style
   * @param strategy the merge strategy
   * @param merges the parts to merge
   * @return this builder
   * @since 4.0.0
  */
  merge(that: Style, strategy: Strategy, merges: Set<Merge>): Builder;
  /**
   * Applies `applicable` to this builder.
   *
   * @param applicable the applicable
   * @return this builder
   * @since 4.0.0
  */
  apply(applicable: StyleBuilderApplicable): Builder;
  /**
   * Builds the style.
   *
   * @return the style
  */
  build(): Style;
}

}
declare module 'net.kyori.adventure.util.Codec' {
/**
 * A decoder.
 *
 * @param  the decoded type
 * @param  the encoded type
 * @param  the exception type
 * @since 4.0.0
*/
export class Decoder<D, E, X> {
  /**
   * Decodes.
   *
   * @param encoded the encoded input
   * @return the decoded value
   * @throws X if an exception is encountered while decoding
   * @since 4.0.0
  */
  decode(encoded: E): D;
}
/**
 * An encoder.
 *
 * @param  the decoded type
 * @param  the encoded type
 * @param  the exception type
 * @since 4.0.0
*/
export class Encoder<D, E, X> {
  /**
   * Encodes.
   *
   * @param decoded the decoded value
   * @return the encoded output
   * @throws X if an exception is encountered while encoding
   * @since 4.0.0
  */
  encode(decoded: D): E;
}

}
declare module 'net.kyori.adventure.identity' {
import { Component } from 'net.kyori.adventure.text';
import { UUID } from 'java.util';
import { Pointer } from 'net.kyori.adventure.pointer';
/**
 * An identity used to track the sender of messages for the social interaction features
 * introduced in Minecraft: Java Edition 1.16.4.
 *
 * @since 4.0.0
 * @sinceMinecraft 1.16
*/
export class Identity {
  /**
   * A pointer to a name.
   *
   * @since 4.8.0
  */
  static readonly NAME: Pointer<string>;
  /**
   * A pointer to a {@link UUID}.
   *
   * @since 4.8.0
  */
  static readonly UUID: Pointer<UUID>;
  /**
   * A pointer to a display name.
   *
   * @since 4.8.0
  */
  static readonly DISPLAY_NAME: Pointer<Component>;
  /**
   * Gets the `null` identity.
   *
   * This should only be used when no players can be linked to a message.
   *
   * @return the `null` identity
   * @since 4.0.0
  */
  static nil(): Identity;
  /**
   * Creates an identity.
   *
   * @param uuid the uuid
   * @return an identity
   * @since 4.0.0
  */
  static identity(uuid: UUID): Identity;
  /**
   * Gets the uuid.
   *
   * @return the uuid
   * @since 4.0.0
  */
  uuid(): UUID;
}
/**
 * Something that can be identified by an {@link Identity}.
 *
 * @since 4.0.0
*/
export class Identified {
  /**
   * Gets the identity.
   *
   * @return the identity
   * @since 4.0.0
  */
  identity(): Identity;
}

}
declare module 'net.kyori.adventure.text.BlockNBTComponent.WorldPos' {
import { Type } from 'net.kyori.adventure.text.BlockNBTComponent.WorldPos.Coordinate';
/**
 * A coordinate component within a {@link WorldPos}.
 *
 * @since 4.0.0
*/
export class Coordinate {
  /**
   * Creates a absolute coordinate with the given value.
   *
   * @param value the value
   * @return a coordinate
   * @since 4.0.0
  */
  static absolute(value: number): Coordinate;
  /**
   * Creates a relative coordinate with the given value.
   *
   * @param value the value
   * @return a coordinate
   * @since 4.0.0
  */
  static relative(value: number): Coordinate;
  /**
   * Creates a coordinate with the given value and type.
   *
   * @param value the value
   * @param type the type
   * @return a coordinate
   * @since 4.0.0
  */
  static of(value: number, type: Type): Coordinate;
  /**
   * Gets the value.
   *
   * @return the value
   * @since 4.0.0
  */
  value(): number;
  /**
   * Gets the type.
   *
   * @return the type
   * @since 4.0.0
  */
  type(): Type;
}

}
declare module 'net.kyori.adventure.text.format' {
import { ComponentBuilderApplicable, ComponentBuilder } from 'net.kyori.adventure.text';
import { Key } from 'net.kyori.adventure.key';
import { Merge, Builder } from 'net.kyori.adventure.text.format.Style';
import { HoverEventSource, HoverEvent, ClickEvent } from 'net.kyori.adventure.text.event';
import { Set, List, Map } from 'java.util';
import { Enum, Comparable, Iterable } from 'java.lang';
import { HSVLike, RGBLike, Index, Buildable } from 'net.kyori.adventure.util';
import { Strategy } from 'net.kyori.adventure.text.format.Style.Merge';
import { State } from 'net.kyori.adventure.text.format.TextDecoration';
import { Consumer } from 'java.util.function';
/**
 * A style applies visual effects or extra functionality to {@link Component}s,
 * such as {@link TextColor}s, {@link TextDecoration}s, {@link ClickEvent}s etc.
 *
 * Some examples of valid styles:
 *    *     Style myStyle = Style.style(ClickEvent.openUrl(url), NamedTextColor.RED, TextDecoration.BOLD);
 *     Style yourStyle = Style.style(TextColor.color(20, 30, 40), HoverEvent.showText(Component.text("Wow!"));
 *     Style ourStyle = Style.style().color(NamedTextColor.WHITE).build();
 *   
 *
 * A note about fonts: the {@link Key} in this context represents the resource location
 * of the font in the same way as {@link Sound}s
 *
 * @since 4.0.0
*/
export class Style extends Buildable<Style, Builder> {
  /**
   * The default font.
   *
   * @since 4.0.0
   * @sinceMinecraft 1.16
  */
  static readonly DEFAULT_FONT: Key;
  /**
   * Gets an empty style.
   *
   * @return empty style
   * @since 4.0.0
  */
  static empty(): Style;
  /**
   * Creates a builder.
   *
   * @return a builder
   * @since 4.0.0
  */
  static style(): Builder;
  /**
   * Creates a style.
   *
   * @param consumer the builder consumer
   * @return a style
   * @since 4.0.0
  */
  static style(consumer: Consumer<Builder>): Style;
  /**
   * Creates a style with color.
   *
   * @param color the style
   * @return a style
   * @since 4.0.0
  */
  static style(color: TextColor | null): Style;
  /**
   * Creates a style with decoration.
   *
   * @param decoration the decoration
   * @return a style
   * @since 4.0.0
  */
  static style(decoration: TextDecoration): Style;
  /**
   * Creates a style with color and decorations.
   *
   * @param color the style
   * @param decorations the decorations
   * @return a style
   * @since 4.0.0
  */
  static style(color: TextColor | null, ...decorations: TextDecoration[]): Style;
  /**
   * Creates a style with color and decorations.
   *
   * @param color the style
   * @param decorations the decorations
   * @return a style
   * @since 4.0.0
  */
  static style(color: TextColor | null, decorations: Set<TextDecoration>): Style;
  /**
   * Creates a style with `applicables` applied.
   *
   * @param applicables the applicables
   * @return a style
   * @since 4.0.0
  */
  static style(...applicables: StyleBuilderApplicable[]): Style;
  /**
   * Creates a style with `applicables` applied.
   *
   * @param applicables the applicables
   * @return a style
   * @since 4.0.0
  */
  static style(applicables: Iterable<StyleBuilderApplicable>): Style;
  /**
   * Edits this style.
   *
   * The old style will be merge into the new style before `consumer` is called.
   *
   * @param consumer the consumer
   * @return a new style
   * @since 4.0.0
  */
  edit(consumer: Consumer<Builder>): Style;
  /**
   * Edits this style.
   *
   * @param consumer the consumer
   * @param strategy the merge strategy
   * @return a new style
   * @since 4.0.0
  */
  edit(consumer: Consumer<Builder>, strategy: Strategy): Style;
  /**
   * Gets the font.
   *
   * @return the font
   * @since 4.0.0
   * @sinceMinecraft 1.16
  */
  font(): Key | null;
  /**
   * Sets the font.
   *
   *
   * @param font the font
   * @return a style
   * @since 4.0.0
   * @sinceMinecraft 1.16
  */
  font(font: Key | null): Style;
  /**
   * Gets the color.
   *
   * @return the color
   * @since 4.0.0
  */
  color(): TextColor | null;
  /**
   * Sets the color.
   *
   * @param color the color
   * @return a style
   * @since 4.0.0
  */
  color(color: TextColor | null): Style;
  /**
   * Sets the color if there isn't one set already.
   *
   * @param color the color
   * @return this builder
   * @since 4.0.0
  */
  colorIfAbsent(color: TextColor | null): Style;
  /**
   * Tests if this style has a decoration.
   *
   * @param decoration the decoration
   * @return `true` if this style has the decoration, `false` if this
   *     style does not have the decoration
   * @since 4.0.0
  */
  hasDecoration(decoration: TextDecoration): boolean;
  /**
   * Gets the state of a decoration on this style.
   *
   * @param decoration the decoration
   * @return {@link TextDecoration.State#TRUE} if this style has the decoration,
   *     {@link TextDecoration.State#FALSE} if this style does not have the decoration,
   *     and {@link TextDecoration.State#NOT_SET} if not set
   * @since 4.0.0
  */
  decoration(decoration: TextDecoration): State;
  /**
   * Sets the state of `decoration` to {@link TextDecoration.State#TRUE} on this style.
   *
   * @param decoration the decoration
   * @return a style
   * @since 4.0.0
  */
  decorate(decoration: TextDecoration): Style;
  /**
   * Sets the state of a decoration on this style.
   *
   * @param decoration the decoration
   * @param flag `true` if this style should have the decoration, `false` if
   *     this style should not have the decoration
   * @return a style
   * @since 4.0.0
  */
  decoration(decoration: TextDecoration, flag: boolean): Style;
  /**
   * Sets the value of a decoration on this style.
   *
   * @param decoration the decoration
   * @param state {@link TextDecoration.State#TRUE} if this style should have the
   *     decoration, {@link TextDecoration.State#FALSE} if this style should not
   *     have the decoration, and {@link TextDecoration.State#NOT_SET} if the decoration
   *     should not have a set value
   * @return a style
   * @since 4.0.0
  */
  decoration(decoration: TextDecoration, state: State): Style;
  /**
   * Gets a map of decorations this style has.
   *
   * @return a set of decorations this style has
   * @since 4.0.0
  */
  decorations(): Map<TextDecoration, State>;
  /**
   * Sets decorations for this style using the specified `decorations` map.
   *
   * If a given decoration does not have a value explicitly set, the value of that particular decoration is not changed.
   *
   * @param decorations the decorations
   * @return a style
   * @since 4.0.0
  */
  decorations(decorations: Map<TextDecoration, State>): Style;
  /**
   * Gets the click event.
   *
   * @return the click event
   * @since 4.0.0
  */
  clickEvent(): ClickEvent | null;
  /**
   * Sets the click event.
   *
   * @param event the click event
   * @return a style
   * @since 4.0.0
  */
  clickEvent(event: ClickEvent | null): Style;
  /**
   * Gets the hover event.
   *
   * @return the hover event
   * @since 4.0.0
  */
  hoverEvent(): HoverEvent<any> | null;
  /**
   * Sets the hover event.
   *
   * @param source the hover event source
   * @return a style
   * @since 4.0.0
  */
  hoverEvent(source: HoverEventSource<any> | null): Style;
  /**
   * Gets the string to be inserted when this style is shift-clicked.
   *
   * @return the insertion string
   * @since 4.0.0
  */
  insertion(): string | null;
  /**
   * Sets the string to be inserted when this style is shift-clicked.
   *
   * @param insertion the insertion string
   * @return a style
   * @since 4.0.0
  */
  insertion(insertion: string | null): Style;
  /**
   * Merges from another style into this style.
   *
   * @param that the other style
   * @return a style
   * @since 4.0.0
  */
  merge(that: Style): Style;
  /**
   * Merges from another style into this style.
   *
   * @param that the other style
   * @param strategy the merge strategy
   * @return a style
   * @since 4.0.0
  */
  merge(that: Style, strategy: Strategy): Style;
  /**
   * Merges from another style into this style.
   *
   * @param that the other style
   * @param merge the part to merge
   * @return a style
   * @since 4.0.0
  */
  merge(that: Style, merge: Merge): Style;
  /**
   * Merges from another style into this style.
   *
   * @param that the other style
   * @param strategy the merge strategy
   * @param merge the part to merge
   * @return a style
   * @since 4.0.0
  */
  merge(that: Style, strategy: Strategy, merge: Merge): Style;
  /**
   * Merges from another style into this style.
   *
   * @param that the other style
   * @param merges the parts to merge
   * @return a style
   * @since 4.0.0
  */
  merge(that: Style, ...merges: Merge[]): Style;
  /**
   * Merges from another style into this style.
   *
   * @param that the other style
   * @param strategy the merge strategy
   * @param merges the parts to merge
   * @return a style
   * @since 4.0.0
  */
  merge(that: Style, strategy: Strategy, ...merges: Merge[]): Style;
  /**
   * Merges from another style into this style.
   *
   * @param that the other style
   * @param merges the parts to merge
   * @return a style
   * @since 4.0.0
  */
  merge(that: Style, merges: Set<Merge>): Style;
  /**
   * Merges from another style into this style.
   *
   * @param that the other style
   * @param strategy the merge strategy
   * @param merges the parts to merge
   * @return a style
   * @since 4.0.0
  */
  merge(that: Style, strategy: Strategy, merges: Set<Merge>): Style;
  /**
   * Tests if this style is empty.
   *
   * @return `true` if this style is empty, `false` if this
   *     style is not empty
   * @since 4.0.0
  */
  isEmpty(): boolean;
  /**
   * Create a builder from this style.
   *
   * @return a builder
  */
  toBuilder(): Builder;
}
/**
 * A combination of a {@link TextDecoration} and a {@link TextDecoration.State}.
 *
 * @since 4.8.0
*/
export class TextDecorationAndState extends StyleBuilderApplicable {
  /**
   * Gets the decoration.
   *
   * @return the decoration
   * @since 4.8.0
  */
  decoration(): TextDecoration;
  /**
   * Gets the state.
   *
   * @return the state
   * @since 4.8.0
  */
  state(): State;
  styleApply(style: Builder): void;
}
/**
 * The named text colours in Minecraft: Java Edition.
 *
 * @since 4.0.0
*/
export class NamedTextColor extends TextColor {
  /**
   * The standard `black` colour.
   *
   * @since 4.0.0
  */
  static readonly BLACK: NamedTextColor;
  /**
   * The standard `dark_blue` colour.
   *
   * @since 4.0.0
  */
  static readonly DARK_BLUE: NamedTextColor;
  /**
   * The standard `dark_green` colour.
   *
   * @since 4.0.0
  */
  static readonly DARK_GREEN: NamedTextColor;
  /**
   * The standard `dark_aqua` colour.
   *
   * @since 4.0.0
  */
  static readonly DARK_AQUA: NamedTextColor;
  /**
   * The standard `dark_red` colour.
   *
   * @since 4.0.0
  */
  static readonly DARK_RED: NamedTextColor;
  /**
   * The standard `dark_purple` colour.
   *
   * @since 4.0.0
  */
  static readonly DARK_PURPLE: NamedTextColor;
  /**
   * The standard `gold` colour.
   *
   * @since 4.0.0
  */
  static readonly GOLD: NamedTextColor;
  /**
   * The standard `gray` colour.
   *
   * @since 4.0.0
  */
  static readonly GRAY: NamedTextColor;
  /**
   * The standard `dark_gray` colour.
   *
   * @since 4.0.0
  */
  static readonly DARK_GRAY: NamedTextColor;
  /**
   * The standard `blue` colour.
   *
   * @since 4.0.0
  */
  static readonly BLUE: NamedTextColor;
  /**
   * The standard `green` colour.
   *
   * @since 4.0.0
  */
  static readonly GREEN: NamedTextColor;
  /**
   * The standard `aqua` colour.
   *
   * @since 4.0.0
  */
  static readonly AQUA: NamedTextColor;
  /**
   * The standard `red` colour.
   *
   * @since 4.0.0
  */
  static readonly RED: NamedTextColor;
  /**
   * The standard `light_purple` colour.
   *
   * @since 4.0.0
  */
  static readonly LIGHT_PURPLE: NamedTextColor;
  /**
   * The standard `yellow` colour.
   *
   * @since 4.0.0
  */
  static readonly YELLOW: NamedTextColor;
  /**
   * The standard `white` colour.
   *
   * @since 4.0.0
  */
  static readonly WHITE: NamedTextColor;
  /**
   * An index of name to color.
   *
   * @since 4.0.0
  */
  static readonly NAMES: Index<string, NamedTextColor>;
  /**
   * Gets the named color exactly matching the provided color.
   *
   * @param value the color to match
   * @return the matched color, or null
   * @since 4.0.0
  */
  static ofExact(value: number): NamedTextColor | null;
  /**
   * Find the named colour nearest to the provided colour.
   *
   * @param any colour to match
   * @return nearest named colour. will always return a value
   * @since 4.0.0
  */
  static nearestTo(any: TextColor): NamedTextColor;
  /**
   * The color, as an RGB value packed into an int.
   *
   * @return the value
   * @since 4.0.0
  */
  value(): number;
  /**
   * Converts the color represented by this RGBLike to the HSV color space.
   *
   * @return an HSVLike representing this RGBLike in the HSV color space
   * @since 4.6.0
  */
  asHSV(): HSVLike;
  toString(): string;
}
/**
 * A format which may be applied to a {@link Component}.
 *
 * @since 4.0.0
*/
export class TextFormat {

}
/**
 * Something that can be applied to a {@link Style}.
 *
 * @since 4.0.0
*/
export class StyleBuilderApplicable extends ComponentBuilderApplicable {
  /**
   * Applies to `style`.
   *
   * @param style the style builder
   * @since 4.0.0
  */
  styleApply(style: Builder): void;
  componentBuilderApply(component: ComponentBuilder<any, any>): void;
}
/**
 * A color which may be applied to a {@link Style}.
 *
 * The full range of hexadecimal colors are only supported in Minecraft: Java Edition 1.16 and above.
 * On older versions, platforms may downsample these to {@link NamedTextColor}s.
 *
 * This color does not include any alpha channel information.
 *
 * @see NamedTextColor
 * @since 4.0.0
*/
export class TextColor extends Comparable<TextColor> {
  /**
   * Creates a new text colour.
   *
   * @param value the rgb value
   * @return a new text colour
   * @since 4.0.0
  */
  static color(value: number): TextColor;
  /**
   * Creates a new text colour.
   *
   * @param rgb the rgb value
   * @return a new text colour
   * @since 4.0.0
  */
  static color(rgb: RGBLike): TextColor;
  /**
   * Creates a new text color, converting the provided {@link HSVLike} to the RGB color space.
   *
   * @param hsv the hsv value
   * @return a new text color
   * @see https://en.wikipedia.org/wiki/HSL_and_HSV
   * @since 4.6.0
  */
  static color(hsv: HSVLike): TextColor;
  /**
   * Create a new text colour with the red, green, and blue components individually.
   *
   * @param r red, as a value from 0 to 255
   * @param g green, as a value from 0 to 255
   * @param b blue, as a value from 0 to 255
   * @return a new text colour
   * @since 4.0.0
  */
  static color(r: number, g: number, b: number): TextColor;
  /**
   * Create a new color from a hex string.
   *
   * @param string the hex string
   * @return a new text colour
   * @since 4.0.0
  */
  static fromHexString(string: string): TextColor | null;
  /**
   * Create a color from a CSS hex string (`#rrggbb` or `#rgb`).
   *
   * @param string the hex string
   * @return a new text colour
   * @since 4.0.0
  */
  static fromCSSHexString(string: string): TextColor | null;
  /**
   * The color, as an RGB value packed into an int.
   *
   * @return the value
   * @since 4.0.0
  */
  value(): number;
  /**
   * Gets the color, as a hex string.
   *
   * @return a hex string
   * @since 4.0.0
  */
  asHexString(): string;
  /**
   * Get the red component of the text colour.
   *
   * @return the red component, in the range [0x0, 0xff]
   * @since 4.0.0
  */
  red(): number;
  /**
   * Get the green component of the text colour.
   *
   * @return the green component, in the range [0x0, 0xff]
   * @since 4.0.0
  */
  green(): number;
  /**
   * Get the blue component of the text colour.
   *
   * @return the blue component, in the range [0x0, 0xff]
   * @since 4.0.0
  */
  blue(): number;
  /**
   * Linearly interpolates between `a` and `b` by `t`.
   *
   * This returns a color blended between color `a`, at `t=0.0`, and color `b`, at `t=1.0`.
   *
   * @param t the interpolation value, between `0.0` and `1.0` (both inclusive)
   * @param a the lower bound (`t=0.0`)
   * @param b the upper bound (`t=1.0`)
   * @return the interpolated value, a color between the two input colors `a` and `b`
   * @since 4.8.0
  */
  static lerp(t: number, a: RGBLike, b: RGBLike): TextColor;
  styleApply(style: Builder): void;
  compareTo(that: TextColor): number;
}
export interface TextColor extends Comparable<TextColor>, RGBLike, StyleBuilderApplicable, TextFormat {}
/**
 * An enumeration of decorations which may be applied to a {@link Component}.
 *
 * @since 4.0.0
*/
export class TextDecoration extends Enum<TextDecoration> {
  /**
   * A decoration which makes text obfuscated/unreadable.
   *
   * @since 4.0.0
  */
  static readonly OBFUSCATED: TextDecoration;
  /**
   * A decoration which makes text appear bold.
   *
   * @since 4.0.0
  */
  static readonly BOLD: TextDecoration;
  /**
   * A decoration which makes text have a strike through it.
   *
   * @since 4.0.0
  */
  static readonly STRIKETHROUGH: TextDecoration;
  /**
   * A decoration which makes text have an underline.
   *
   * @since 4.0.0
  */
  static readonly UNDERLINED: TextDecoration;
  /**
   * A decoration which makes text appear in italics.
   *
   * @since 4.0.0
  */
  static readonly ITALIC: TextDecoration;
  static valueOf(name: string): TextDecoration;
  static values(): TextDecoration[];
  /**
   * The name map.
   *
   * @since 4.0.0
  */
  static readonly NAMES: Index<string, TextDecoration>;
  /**
   * Creates a {@link TextDecorationAndState}.
   *
   * @param state the state
   * @return a {@link TextDecorationAndState}
   * @since 4.8.0
  */
  as(state: boolean): TextDecorationAndState;
  /**
   * Creates a {@link TextDecorationAndState}.
   *
   * @param state the state
   * @return a {@link TextDecorationAndState}
   * @since 4.8.0
  */
  as(state: State): TextDecorationAndState;
  styleApply(style: Builder): void;
  toString(): string;
}

}
declare module 'net.kyori.adventure.text.flattener' {
import { Component } from 'net.kyori.adventure.text';
import { Buildable } from 'net.kyori.adventure.util';
import { Builder } from 'net.kyori.adventure.text.flattener.ComponentFlattener';
import { Style } from 'net.kyori.adventure.text.format';
/**
 * A listener accepting styled information from flattened components.
 *
 * @since 4.7.0
*/
export class FlattenerListener {
  /**
   * Begin a region of style in the component.
   *
   * @param style the style to push
   * @since 4.7.0
  */
  pushStyle(style: Style): void;
  /**
   * Accept the plain-text content of a single component.
   *
   * @param text the component text
   * @since 4.7.0
  */
  component(text: string): void;
  /**
   * Pop a pushed style.
   *
   * The popped style will always be the most recent un-popped style that has been {@link #pushStyle(Style) pushed}.
   *
   * @param style the style popped, as passed to {@link #pushStyle(Style)}
   * @since 4.7.0
  */
  popStyle(style: Style): void;
}
/**
 * A 'flattener' to convert a component tree to a linear string for display.
 *
 * @since 4.7.0
*/
export class ComponentFlattener extends Buildable<ComponentFlattener, Builder> {
  /**
   * Create a new builder for a flattener.
   *
   * @return a new builder
   * @since 4.7.0
  */
  static builder(): Builder;
  /**
   * A basic flattener that will print only information directly contained in components.
   *
   * The output of this flattener aims to match what the vanilla Minecraft: Java Edition client
   * will display when unable to resolve any game data.
   *
   * @return a basic flattener
   * @since 4.7.0
  */
  static basic(): ComponentFlattener;
  /**
   * A component flattener that will only handle text components.
   *
   * All other component types will not be included in the output.
   *
   * @return a text-only flattener
   * @since 4.7.0
  */
  static textOnly(): ComponentFlattener;
  /**
   * Perform a flattening on the component, providing output to the `listener`.
   *
   * @param input the component to be flattened
   * @param listener the listener that will receive flattened component state
   * @since 4.7.0
  */
  flatten(input: Component, listener: FlattenerListener): void;
}

}
declare module 'net.kyori.adventure.text.format.Style.Merge' {
import { Enum } from 'java.lang';
/**
 * A merge strategy.
 *
 * @since 4.0.0
*/
export class Strategy extends Enum<Strategy> {
  /**
   * Always merge onto target.
   *
   * @since 4.0.0
  */
  static readonly ALWAYS: Strategy;
  /**
   * Never merges onto target.
   *
   * @since 4.0.0
  */
  static readonly NEVER: Strategy;
  /**
   * Merge onto target when not already set on target.
   *
   * @since 4.0.0
  */
  static readonly IF_ABSENT_ON_TARGET: Strategy;
  static valueOf(name: string): Strategy;
  static values(): Strategy[];
}

}
declare module 'net.kyori.adventure.text.TextComponent' {
import { TextComponent, ComponentBuilder } from 'net.kyori.adventure.text';
/**
 * A text component builder.
 *
 * @since 4.0.0
*/
export class Builder extends ComponentBuilder<TextComponent, Builder> {
  /**
   * Gets the plain text content.
   *
   * @return the plain text content
   * @since 4.0.0
  */
  content(): string;
  /**
   * Sets the plain text content.
   *
   * @param content the plain text content
   * @return this builder
   * @since 4.0.0
  */
  content(content: string): Builder;
}

}
declare module 'net.kyori.adventure.key' {
import { Comparable, RuntimeException } from 'java.lang';
/**
 * A `T` value with an associated {@link Key}.
 *
 * @param  the value type
 * @since 4.0.0
*/
export class KeyedValue<T> extends Keyed {
  /**
   * Creates a link.
   *
   * @param key the key
   * @param value the value
   * @param  the value type
   * @return the keyed
   * @since 4.0.0
  */
  static of<T>(key: Key, value: T): KeyedValue<T>;
  /**
   * Gets the value.
   *
   * @return the value
   * @since 4.0.0
  */
  value(): T;
}
/**
 * Something that has a namespace.
 *
 * @since 4.4.0
*/
export class Namespaced {
  /**
   * Gets the namespace.
   *
   * @return the namespace
   * @since 4.4.0
  */
  namespace(): string;
}
/**
 * An identifying object used to fetch and/or store unique objects.
 *
 * A key consists of:
 * 
 *   namespace
 *   in most cases this should be your plugin or organization name
 *   value
 *   what this key leads to, e.g "translations" or "entity.firework_rocket.blast"
 * 
 *
 * Valid characters for namespaces are `[a-z0-9_.-]`.
 *
 * Valid characters for values are `[a-z0-9/._-]`.
 *
 * Some examples of possible custom keys:
 * 
 *    my_plugin:translations
 *    my_plugin:weapon.amazing-weapon_damage-attribute
 *    my_organization:music.song_1
 *    my_organization:item.magic_button
 * 
 *
 * @since 4.0.0
*/
export class Key extends Comparable<Key> {
  /**
   * The namespace for Minecraft.
   *
   * @since 4.0.0
  */
  static readonly MINECRAFT_NAMESPACE: string;
  /**
   * Creates a key.
   *
   * This will parse `string` as a key, using `:` as a separator between the namespace and the value.
   *
   * The namespace is optional. If you do not provide one (for example, if you provide just `player` or `:player`
   * as the string) then {@link #MINECRAFT_NAMESPACE} will be used as a namespace and `string` will be used as the value,
   * removing the colon if necessary.
   *
   * @param string the string
   * @return the key
   * @throws InvalidKeyException if the namespace or value contains an invalid character
   * @since 4.0.0
  */
  static key(string: string): Key;
  /**
   * Creates a key.
   *
   * This will parse `string` as a key, using `character` as a separator between the namespace and the value.
   *
   * The namespace is optional. If you do not provide one (for example, if you provide `player` or `character + "player"`
   * as the string) then {@link #MINECRAFT_NAMESPACE} will be used as a namespace and `string` will be used as the value,
   * removing the provided separator character if necessary.
   *
   * @param string the string
   * @param character the character that separates the namespace from the value
   * @return the key
   * @throws InvalidKeyException if the namespace or value contains an invalid character
   * @since 4.0.0
  */
  static key(string: string, character: string): Key;
  /**
   * Creates a key.
   *
   * @param namespaced the namespace source
   * @param value the value
   * @return the key
   * @throws InvalidKeyException if the namespace or value contains an invalid character
   * @since 4.4.0
  */
  static key(namespaced: Namespaced, value: string): Key;
  /**
   * Gets the namespace.
   *
   * @return the namespace
   * @since 4.0.0
  */
  namespace(): string;
  /**
   * Gets the value.
   *
   * @return the value
   * @since 4.0.0
  */
  value(): string;
  /**
   * Returns the string representation of this key.
   *
   * @return the string representation
   * @since 4.0.0
  */
  asString(): string;
  compareTo(that: Key): number;
}
/**
 * Something that has an associated {@link Key}.
 *
 * @since 4.0.0
*/
export class Keyed {
  /**
   * Gets the key.
   *
   * @return the key
   * @since 4.0.0
  */
  key(): Key;
}
/**
 * This exception is thrown when an invalid namespace and/or value has been detected while creating a {@link Key}.
 *
 * @since 4.0.0
*/
export class InvalidKeyException extends RuntimeException {
  /**
   * Gets the invalid key, as a string.
   *
   * @return a key
   * @since 4.0.0
  */
  keyNamespace(): string;
  /**
   * Gets the invalid key, as a string.
   *
   * @return a key
   * @since 4.0.0
  */
  keyValue(): string;
}

}
declare module 'net.kyori.adventure.text.EntityNBTComponent' {
import { EntityNBTComponent, NBTComponentBuilder } from 'net.kyori.adventure.text';
/**
 * An entity NBT component builder.
 *
 * @since 4.0.0
*/
export class Builder extends NBTComponentBuilder<EntityNBTComponent, Builder> {
  /**
   * Sets the entity selector.
   *
   * @param selector the entity selector
   * @return this builder
   * @since 4.0.0
  */
  selector(selector: string): Builder;
}

}
declare module 'net.kyori.adventure.text.serializer.legacy' {
import { TextComponent, Component } from 'net.kyori.adventure.text';
import { Buildable } from 'net.kyori.adventure.util';
import { ComponentSerializer } from 'net.kyori.adventure.text.serializer';
import { Builder } from 'net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer';
import { TextDecoration, NamedTextColor, TextColor } from 'net.kyori.adventure.text.format';
/**
 * A legacy component serializer.
 *
 * Legacy does not support more complex features such as, but not limited
 * to, {@link ClickEvent} and {@link HoverEvent}.
 *
 * @since 4.0.0
*/
export class LegacyComponentSerializer extends ComponentSerializer<Component, TextComponent, string> {
  /**
   * Gets a component serializer for legacy-based serialization and deserialization. Note that this
   * serializer works exactly like vanilla Minecraft and does not detect any links. If you want to
   * detect and make URLs clickable, use {@link Builder#extractUrls()}.
   *
   * The returned serializer uses the {@link #SECTION_CHAR section} character.
   *
   * @return a component serializer for legacy serialization and deserialization
   * @since 4.0.0
  */
  static legacySection(): LegacyComponentSerializer;
  /**
   * Gets a component serializer for legacy-based serialization and deserialization. Note that this
   * serializer works exactly like vanilla Minecraft and does not detect any links. If you want to
   * detect and make URLs clickable, use {@link Builder#extractUrls()}.
   *
   * The returned serializer uses the {@link #AMPERSAND_CHAR ampersand} character.
   *
   * @return a component serializer for legacy serialization and deserialization
   * @since 4.0.0
  */
  static legacyAmpersand(): LegacyComponentSerializer;
  /**
   * Gets a component serializer for legacy-based serialization and deserialization. Note that this
   * serializer works exactly like vanilla Minecraft and does not detect any links. If you want to
   * detect and make URLs clickable, use {@link Builder#extractUrls()}.
   *
   * @param legacyCharacter the legacy character to use
   * @return a component serializer for legacy serialization and deserialization
   * @since 4.0.0
  */
  static legacy(legacyCharacter: string): LegacyComponentSerializer;
  /**
   * Converts a legacy character (`0123456789abcdefklmnor`) to a legacy format, when possible.
   *
   * @param character the legacy character
   * @return the legacy format
   * @since 4.0.0
  */
  static parseChar(character: string): LegacyFormat | null;
  /**
   * Creates a new {@link LegacyComponentSerializer.Builder}.
   *
   * @return the builder
   * @since 4.0.0
  */
  static builder(): Builder;
  /**
   * The legacy character used by Minecraft. ('§')
   *
   * @since 4.0.0
  */
  static readonly SECTION_CHAR: string;
  /**
   * The legacy character frequently used by configurations and commands. ('&')
   *
   * @since 4.0.0
  */
  static readonly AMPERSAND_CHAR: string;
  /**
   * The legacy character used to prefix hex colors. ('#')
   *
   * @since 4.0.0
  */
  static readonly HEX_CHAR: string;
  /**
   * Deserialize a component from a legacy {@link String}.
   *
   * @param input the input
   * @return the component
  */
  deserialize(input: string): TextComponent;
  /**
   * Serializes a component into a legacy {@link String}.
   *
   * @param component the component
   * @return the string
  */
  serialize(component: Component): string;
  /**
   * Deserialize a component from input of type `R`.
   *
   * @param input the input
   * @return the component
   * @since 4.0.0
  */
  deserialize(input: R): O;
  /**
   * Serializes a component into an output of type `R`.
   *
   * @param component the component
   * @return the output
   * @since 4.0.0
  */
  serialize(component: I): R;
}
export interface LegacyComponentSerializer extends ComponentSerializer<Component, TextComponent, string>, Buildable<LegacyComponentSerializer, Builder> {}
/**
 * A legacy format.
 *
 * @since 4.0.0
*/
export class LegacyFormat {
  /**
   * Gets the color.
   *
   * @return the color
   * @since 4.0.0
  */
  color(): TextColor | null;
  /**
   * Gets the decoration.
   *
   * @return the decoration
   * @since 4.0.0
  */
  decoration(): TextDecoration | null;
  /**
   * Gets if this format is a reset.
   *
   * @return `true` if a reset, `false` otherwise
   * @since 4.0.0
  */
  reset(): boolean;
  equals(other: any | null): boolean;
  hashCode(): number;
}

}
declare module 'net.kyori.adventure.nbt.api' {
import { Codec } from 'net.kyori.adventure.util';
/**
 * Holds a compound binary tag.
 *
 * Instead of including an entire NBT implementation in Adventure, it was decided to
 * use this "holder" interface instead. This opens the door for platform specific implementations.
 *
 * See `net.kyori.adventure.nbt.impl` for a platform agnostic implementation.
 *
 * @since 4.0.0
*/
export class BinaryTagHolder {
  /**
   * Encodes `nbt` using `codec`.
   *
   * @param nbt the binary tag
   * @param codec the codec
   * @param  the binary tag type
   * @param  encode exception type
   * @return the encoded binary tag holder
   * @throws EX if an error occurred while encoding the binary tag
   * @since 4.0.0
  */
  static encode<T, EX>(nbt: T, codec: Codec<any, string, any, EX>): BinaryTagHolder;
  /**
   * Creates an encoded binary tag holder.
   *
   * @param string the encoded binary tag value
   * @return the encoded binary tag
   * @since 4.0.0
  */
  static of(string: string): BinaryTagHolder;
  /**
   * Gets the raw string value.
   *
   * @return the raw string value
   * @since 4.0.0
  */
  string(): string;
  /**
   * Gets the held value as a binary tag.
   *
   * @param codec the codec
   * @param  the binary tag type
   * @param  decode thrown exception type
   * @return the binary tag
   * @throws DX if an error occurred while retrieving the binary tag
   * @since 4.0.0
  */
  get<T, DX>(codec: Codec<T, string, DX, any>): T;
}

}
declare module 'net.kyori.adventure.text.event' {
import { ComponentLike, Component } from 'net.kyori.adventure.text';
import { Builder } from 'net.kyori.adventure.text.format.Style';
import { Keyed, Key } from 'net.kyori.adventure.key';
import { UUID } from 'java.util';
import { URL } from 'java.net';
import { BinaryTagHolder } from 'net.kyori.adventure.nbt.api';
import { ComponentRenderer } from 'net.kyori.adventure.text.renderer';
import { UnaryOperator } from 'java.util.function';
import { Action as net_kyori_adventure_text_event_ClickEvent_Action } from 'net.kyori.adventure.text.event.ClickEvent';
import { Action, ShowItem, ShowEntity } from 'net.kyori.adventure.text.event.HoverEvent';
import { StyleBuilderApplicable } from 'net.kyori.adventure.text.format';
/**
 * A hover event.
 *
 * A hover event displays a {@link HoverEvent#value component} when hovered
 * over by a mouse on the client.
 *
 * @param  the value type
 * @since 4.0.0
*/
export class HoverEvent<V> extends HoverEventSource<V> {
  /**
   * Creates a hover event that shows text on hover.
   *
   * @param text the text to show on hover
   * @return a hover event
   * @since 4.2.0
  */
  static showText(text: ComponentLike): HoverEvent<Component>;
  /**
   * Creates a hover event that shows text on hover.
   *
   * @param text the text to show on hover
   * @return a hover event
   * @since 4.0.0
  */
  static showText(text: Component): HoverEvent<Component>;
  /**
   * Creates a hover event that shows an item on hover.
   *
   * @param item the item
   * @param count the count
   * @return a hover event
   * @since 4.0.0
  */
  static showItem(item: Key, count: number): HoverEvent<ShowItem>;
  /**
   * Creates a hover event that shows an item on hover.
   *
   * @param item the item
   * @param count the count
   * @return a hover event
   * @since 4.6.0
  */
  static showItem(item: Keyed, count: number): HoverEvent<ShowItem>;
  /**
   * Creates a hover event that shows an item on hover.
   *
   * @param item the item
   * @param count the count
   * @param nbt the nbt
   * @return a hover event
   * @since 4.0.0
  */
  static showItem(item: Key, count: number, nbt: BinaryTagHolder | null): HoverEvent<ShowItem>;
  /**
   * Creates a hover event that shows an item on hover.
   *
   * @param item the item
   * @param count the count
   * @param nbt the nbt
   * @return a hover event
   * @since 4.6.0
  */
  static showItem(item: Keyed, count: number, nbt: BinaryTagHolder | null): HoverEvent<ShowItem>;
  /**
   * Creates a hover event that shows an item on hover.
   *
   * @param item the item to show on hover
   * @return a hover event
   * @since 4.0.0
  */
  static showItem(item: ShowItem): HoverEvent<ShowItem>;
  /**
   * Creates a hover event that show information about an entity on hover.
   *
   * In the official Minecraft: Java Edition client, no information will be shown unless the "Advanced tooltips" debug option is enabled.
   *
   * @param type the type
   * @param id the id
   * @return a `ShowEntity`
   * @since 4.0.0
  */
  static showEntity(type: Key, id: UUID): HoverEvent<ShowEntity>;
  /**
   * Creates a hover event that show information about an entity on hover.
   *
   * In the official Minecraft: Java Edition client, no information will be shown unless the "Advanced tooltips" debug option is enabled.
   *
   * @param type the type
   * @param id the id
   * @return a `ShowEntity`
   * @since 4.6.0
  */
  static showEntity(type: Keyed, id: UUID): HoverEvent<ShowEntity>;
  /**
   * Creates a hover event that show information about an entity on hover.
   *
   * In the official Minecraft: Java Edition client, no information will be shown unless the "Advanced tooltips" debug option is enabled.
   *
   * @param type the type
   * @param id the id
   * @param name the name
   * @return a `ShowEntity`
   * @since 4.0.0
  */
  static showEntity(type: Key, id: UUID, name: Component | null): HoverEvent<ShowEntity>;
  /**
   * Creates a hover event that show information about an entity on hover.
   *
   * In the official Minecraft: Java Edition client, no information will be shown unless the "Advanced tooltips" debug option is enabled.
   *
   * @param type the type
   * @param id the id
   * @param name the name
   * @return a `ShowEntity`
   * @since 4.6.0
  */
  static showEntity(type: Keyed, id: UUID, name: Component | null): HoverEvent<ShowEntity>;
  /**
   * Creates a hover event that show information about an entity on hover.
   *
   * In the official Minecraft: Java Edition client, no information will be shown unless the "Advanced tooltips" debug option is enabled.
   *
   * @param entity the entity to show on hover
   * @return a hover event
   * @since 4.0.0
  */
  static showEntity(entity: ShowEntity): HoverEvent<ShowEntity>;
  /**
   * Creates a hover event.
   *
   * @param action the action
   * @param value the value
   * @param  the value type
   * @return a click event
   * @since 4.0.0
  */
  static hoverEvent<V>(action: Action<V>, value: V): HoverEvent<V>;
  /**
   * Gets the hover event action.
   *
   * @return the hover event action
   * @since 4.0.0
  */
  action(): Action<V>;
  /**
   * Gets the hover event value.
   *
   * @return the hover event value
   * @since 4.0.0
  */
  value(): V;
  /**
   * Sets the hover event value.
   *
   * @param value the hover event value
   * @return a hover event
   * @since 4.0.0
  */
  value(value: V): HoverEvent<V>;
  /**
   * Returns a hover event with the value rendered using `renderer` when possible.
   *
   * @param renderer the renderer
   * @param context the render context
   * @param  the context type
   * @return a hover event
   * @since 4.0.0
  */
  withRenderedValue<C>(renderer: ComponentRenderer<C>, context: C): HoverEvent<V>;
  /**
   * Represent this object as a hover event.
   *
   * @return a hover event
   * @since 4.0.0
  */
  asHoverEvent(): HoverEvent<V>;
  /**
   * Represent this object as a hover event.
   *
   * @return a hover event
   * @since 4.0.0
  */
  asHoverEvent(op: UnaryOperator<V>): HoverEvent<V>;
  /**
   * Applies to `style`.
   *
   * @param style the style builder
   * @since 4.0.0
  */
  styleApply(style: Builder): void;
  equals(other: any | null): boolean;
  hashCode(): number;
  toString(): string;
}
export interface HoverEvent<V> extends HoverEventSource<V>, StyleBuilderApplicable {}
/**
 * A click event.
 *
 * A click event processes an {@link Action} when clicked on.
 *
 * @since 4.0.0
*/
export class ClickEvent extends StyleBuilderApplicable {
  /**
   * Creates a click event that opens a url.
   *
   * @param url the url to open
   * @return a click event
   * @since 4.0.0
  */
  static openUrl(url: string): ClickEvent;
  /**
   * Creates a click event that opens a url.
   *
   * @param url the url to open
   * @return a click event
   * @since 4.0.0
  */
  static openUrl(url: URL): ClickEvent;
  /**
   * Creates a click event that opens a file.
   *
   * This action is not readable, and may only be used locally on the client.
   *
   * @param file the file to open
   * @return a click event
   * @since 4.0.0
  */
  static openFile(file: string): ClickEvent;
  /**
   * Creates a click event that runs a command.
   *
   * @param command the command to run
   * @return a click event
   * @since 4.0.0
  */
  static runCommand(command: string): ClickEvent;
  /**
   * Creates a click event that suggests a command.
   *
   * @param command the command to suggest
   * @return a click event
   * @since 4.0.0
  */
  static suggestCommand(command: string): ClickEvent;
  /**
   * Creates a click event that changes to a page.
   *
   * @param page the page to change to
   * @return a click event
   * @since 4.0.0
  */
  static changePage(page: string): ClickEvent;
  /**
   * Creates a click event that changes to a page.
   *
   * @param page the page to change to
   * @return a click event
   * @since 4.0.0
  */
  static changePage(page: number): ClickEvent;
  /**
   * Creates a click event that copies text to the clipboard.
   *
   * @param text the text to copy to the clipboard
   * @return a click event
   * @since 4.0.0
   * @sinceMinecraft 1.15
  */
  static copyToClipboard(text: string): ClickEvent;
  /**
   * Creates a click event.
   *
   * @param action the action
   * @param value the value
   * @return a click event
   * @since 4.0.0
  */
  static clickEvent(action: net_kyori_adventure_text_event_ClickEvent_Action, value: string): ClickEvent;
  /**
   * Gets the click event action.
   *
   * @return the click event action
   * @since 4.0.0
  */
  action(): net_kyori_adventure_text_event_ClickEvent_Action;
  /**
   * Gets the click event value.
   *
   * @return the click event value
   * @since 4.0.0
  */
  value(): string;
  /**
   * Applies to `style`.
   *
   * @param style the style builder
   * @since 4.0.0
  */
  styleApply(style: Builder): void;
  equals(other: any | null): boolean;
  hashCode(): number;
  toString(): string;
}
/**
 * Something that can provide a {@link HoverEvent}.
 *
 * @param  the value type
 * @since 4.0.0
*/
export class HoverEventSource<V> {
  /**
   * Fetches a {@link HoverEvent} from a `HoverEventSource`.
   *
   * @param source the hover event source
   * @param  the value type
   * @return a hover event, or `null`
   * @since 4.0.0
  */
  static unbox<V>(source: HoverEventSource<V> | null): HoverEvent<V> | null;
  /**
   * Represent this object as a hover event.
   *
   * @return a hover event
   * @since 4.0.0
  */
  asHoverEvent(): HoverEvent<V>;
  /**
   * Creates a hover event with value derived from this object.
   *
   * The event value will be passed through the provided callback to allow
   * transforming the original value of the event.
   *
   * @param op transformation on value
   * @return a hover event
   * @since 4.0.0
  */
  asHoverEvent(op: UnaryOperator<V>): HoverEvent<V>;
}

}
declare module 'net.kyori.adventure.permission' {
import { TriState } from 'net.kyori.adventure.util';
import { Pointer } from 'net.kyori.adventure.pointer';
import { Predicate } from 'java.util.function';
/**
 * Something that has permissions.
 *
 * @since 4.8.0
*/
export class PermissionChecker extends Predicate<string> {
  /**
   * A pointer to a permission predicate.
   *
   * @since 4.8.0
  */
  static readonly POINTER: Pointer<PermissionChecker>;
  /**
   * Creates a {@link PermissionChecker} that always returns `state`.
   *
   * @param state the state
   * @return a {@link PermissionChecker}
   * @since 4.8.0
  */
  static always(state: TriState): PermissionChecker;
  /**
   * Checks if something has a permission.
   *
   * @param permission the permission
   * @return a tri-state result
   * @since 4.8.0
  */
  value(permission: string): TriState;
  test(permission: string): boolean;
}

}
declare module 'net.kyori.adventure.text' {
import { Builder as net_kyori_adventure_text_TextComponent_Builder } from 'net.kyori.adventure.text.TextComponent';
import { Key } from 'net.kyori.adventure.key';
import { Builder as net_kyori_adventure_text_KeybindComponent_Builder } from 'net.kyori.adventure.text.KeybindComponent';
import { Builder as net_kyori_adventure_text_ScoreComponent_Builder } from 'net.kyori.adventure.text.ScoreComponent';
import { Set, List, Map } from 'java.util';
import { Coordinate } from 'net.kyori.adventure.text.BlockNBTComponent.WorldPos';
import { Builder as net_kyori_adventure_text_EntityNBTComponent_Builder } from 'net.kyori.adventure.text.EntityNBTComponent';
import { Collector } from 'java.util.stream';
import { State } from 'net.kyori.adventure.text.format.TextDecoration';
import { Builder as net_kyori_adventure_text_StorageNBTComponent_Builder } from 'net.kyori.adventure.text.StorageNBTComponent';
import { Builder as net_kyori_adventure_util_Buildable_Builder } from 'net.kyori.adventure.util.Buildable';
import { Pos, Builder as net_kyori_adventure_text_BlockNBTComponent_Builder } from 'net.kyori.adventure.text.BlockNBTComponent';
import { Builder as net_kyori_adventure_text_SelectorComponent_Builder } from 'net.kyori.adventure.text.SelectorComponent';
import { Builder } from 'net.kyori.adventure.text.TranslatableComponent';
import { TextDecoration, Style, TextColor } from 'net.kyori.adventure.text.format';
import { HoverEventSource, HoverEvent, ClickEvent } from 'net.kyori.adventure.text.event';
import { Merge, Builder as net_kyori_adventure_text_format_Style_Builder } from 'net.kyori.adventure.text.format.Style';
import { Enum, Iterable } from 'java.lang';
import { Pattern } from 'java.util.regex';
import { IntFunction2, Buildable } from 'net.kyori.adventure.util';
import { Builder as net_kyori_adventure_text_TextReplacementConfig_Builder } from 'net.kyori.adventure.text.TextReplacementConfig';
import { Strategy } from 'net.kyori.adventure.text.format.Style.Merge';
import { Function, Consumer, UnaryOperator, BiPredicate, Predicate } from 'java.util.function';
import { Translatable } from 'net.kyori.adventure.translation';
/**
 * A component that can display translated text.
 *
 * This component consists of:
 * 
 *   key
 *   a translation key used together with the viewer locale to fetch a translated string.
 *   args(optional)
 *   components that can be used as arguments in the translated string.
 *   (e.g "You picked up {0}." -> "You picked up Carrot")
 * 
 *
 * Displaying this component through an {@link Audience} will run it through the {@link GlobalTranslator} by default,
 * rendering the key as translated text if a translation with a key matching this components key is found in the viewers locale,
 * optionally switching arguments with any placeholders in the discovered translation. If no translation is registered for the viewers locale
 * adventure will first try to find similar locales that has a valid translation, and then find a translation in the default language({@link TranslationRegistry#defaultLocale(Locale) relevant method}).
 *
 * In addition to the initial attempts, if no translation is found in the serverside registry,
 * the translation key and arguments will be passed through to the client which will perform translation using any
 * keys defined in an active resource pack. (Hint: vanilla Minecraft is also considered a resource pack)
 *
 * @see GlobalTranslator
 * @see TranslationRegistry
 * @since 4.0.0
*/
export class TranslatableComponent extends BuildableComponent<TranslatableComponent, Builder> {
  /**
   * Gets the translation key.
   *
   * @return the translation key
   * @since 4.0.0
  */
  key(): string;
  /**
   * Sets the translation key.
   *
   * @param translatable the translatable object to get the key from
   * @return a translatable component
   * @since 4.8.0
  */
  key(translatable: Translatable): TranslatableComponent;
  /**
   * Sets the translation key.
   *
   * @param key the translation key
   * @return a translatable component
   * @since 4.0.0
  */
  key(key: string): TranslatableComponent;
  /**
   * Gets the unmodifiable list of translation arguments.
   *
   * @return the unmodifiable list of translation arguments
   * @since 4.0.0
  */
  args(): Component[];
  /**
   * Sets the translation arguments for this component.
   *
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.0.0
  */
  args(...args: ComponentLike[]): TranslatableComponent;
  /**
   * Sets the translation arguments for this component.
   *
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.0.0
  */
  args(args: ComponentLike[]): TranslatableComponent;
}
export interface TranslatableComponent extends BuildableComponent<TranslatableComponent, Builder>, ScopedComponent<TranslatableComponent> {}
/**
 * A component that can display the name of entities found with a given selector.
 *
 * This component consists of:
 * 
 *   selector
 *   a Minecraft selector.(e.g `@p`, `@a`)
 * 
 *
 * This component is rendered serverside and can therefore receive platform-defined
 * context. See the documentation for your respective
 * platform for more info
 *
 * @since 4.0.0
*/
export class SelectorComponent extends BuildableComponent<SelectorComponent, net_kyori_adventure_text_SelectorComponent_Builder> {
  /**
   * Gets the selector pattern.
   *
   * @return the selector pattern
   * @since 4.0.0
  */
  pattern(): string;
  /**
   * Sets the selector pattern.
   *
   * @param pattern the selector pattern
   * @return a selector component
   * @since 4.0.0
  */
  pattern(pattern: string): SelectorComponent;
  /**
   * Gets the separator.
   *
   * @return the separator
   * @since 4.8.0
  */
  separator(): Component | null;
  /**
   * Sets the separator.
   *
   * @param separator the separator
   * @return the separator
   * @since 4.8.0
  */
  separator(separator: ComponentLike | null): SelectorComponent;
}
export interface SelectorComponent extends BuildableComponent<SelectorComponent, net_kyori_adventure_text_SelectorComponent_Builder>, ScopedComponent<SelectorComponent> {}
/**
 * Given an in-game position, this component reads the NBT of the associated block and displays that information.
 *
 * This component consists of:
 * 
 *   pos
 *   a position in the world the component is being displayed in.
 *   everything in
 *   {@link NBTComponent}
 * 
 *
 * @see NBTComponent
 * @since 4.0.0
 * @sinceMinecraft 1.14
*/
export class BlockNBTComponent extends NBTComponent<BlockNBTComponent, net_kyori_adventure_text_BlockNBTComponent_Builder> {
  /**
   * Gets the block position.
   *
   * @return the block position
   * @since 4.0.0
  */
  pos(): Pos;
  /**
   * Sets the block position.
   *
   * @param pos the block position
   * @return a block NBT component
   * @since 4.0.0
  */
  pos(pos: Pos): BlockNBTComponent;
  /**
   * Sets the block position to a {@link LocalPos} with the given coordinates.
   *
   * @param left the left coordinate
   * @param up the up coordinate
   * @param forwards the forwards coordinate
   * @return a block NBT component
   * @since 4.0.0
  */
  localPos(left: number, up: number, forwards: number): BlockNBTComponent;
  /**
   * Sets the block position to a {@link WorldPos} with the given coordinates.
   *
   * @param x the x coordinate
   * @param y the y coordinate
   * @param z the z coordinate
   * @return a block NBT component
   * @since 4.0.0
  */
  worldPos(x: Coordinate, y: Coordinate, z: Coordinate): BlockNBTComponent;
  /**
   * Sets the block position to an absolute {@link WorldPos} with the given coordinates.
   *
   * @param x the x coordinate
   * @param y the y coordinate
   * @param z the z coordinate
   * @return a block NBT component
   * @since 4.0.0
  */
  absoluteWorldPos(x: number, y: number, z: number): BlockNBTComponent;
  /**
   * Sets the block position to an relative {@link WorldPos} with the given coordinates.
   *
   * @param x the x coordinate
   * @param y the y coordinate
   * @param z the z coordinate
   * @return a block NBT component
   * @since 4.0.0
  */
  relativeWorldPos(x: number, y: number, z: number): BlockNBTComponent;
}
export interface BlockNBTComponent extends NBTComponent<BlockNBTComponent, net_kyori_adventure_text_BlockNBTComponent_Builder>, ScopedComponent<BlockNBTComponent> {}
/**
 * A component that can display a player's score from a scoreboard objective,
 * with an optional fallback value if the search for the score fails.
 * 
 * This component consists of:
 * 
 *   name
 *   a player username or a Minecraft selector that leads to a single player
 *   objective
 *   a scoreboard objective
 *   value(optional)
 *   a value to use that will override any queried scoreboard value
 *   This field is no longer present in the game from 1.16,
 *   which means it will be ignored
 * 
 *
 * This component is rendered serverside and can therefore receive platform-defined
 * context. See the documentation for your respective
 * platform for more info
 *
 * @since 4.0.0
*/
export class ScoreComponent extends BuildableComponent<ScoreComponent, net_kyori_adventure_text_ScoreComponent_Builder> {
  /**
   * Gets the score name.
   *
   * @return the score name
   * @since 4.0.0
  */
  name(): string;
  /**
   * Sets the score name.
   *
   * @param name the score name
   * @return a score component
   * @since 4.0.0
  */
  name(name: string): ScoreComponent;
  /**
   * Gets the objective name.
   *
   * @return the objective name
   * @since 4.0.0
  */
  objective(): string;
  /**
   * Sets the score objective.
   *
   * @param objective the score objective
   * @return a score component
   * @since 4.0.0
  */
  objective(objective: string): ScoreComponent;
  /**
   * Gets the value.
   *
   * @return the value
   * @since 4.0.0
   * @deprecated since 4.7.0, not for removal, with no replacement. This field is no longer supported in 1.16.5.
  */
  value(): string | null;
  /**
   * Sets the value.
   *
   * @param value the value
   * @return a score component
   * @since 4.0.0
   * @deprecated since 4.7.0, not for removal, with no replacement. This field is no longer supported in 1.16.5.
  */
  value(value: string | null): ScoreComponent;
}
export interface ScoreComponent extends BuildableComponent<ScoreComponent, net_kyori_adventure_text_ScoreComponent_Builder>, ScopedComponent<ScoreComponent> {}
/**
 * A component that displays a string.
 *
 * This component consists of:
 * 
 *   content
 *   string to be displayed
 * 
 *
 * @since 4.0.0
*/
export class TextComponent extends BuildableComponent<TextComponent, net_kyori_adventure_text_TextComponent_Builder> {
  /**
   * Creates a component with `components` as the children.
   *
   * @param components the children
   * @return a text component
   * @since 4.0.0
  */
  static ofChildren(...components: ComponentLike[]): TextComponent;
  /**
   * Gets the plain text content.
   *
   * @return the plain text content
   * @since 4.0.0
  */
  content(): string;
  /**
   * Sets the plain text content.
   *
   * @param content the plain text content
   * @return a copy of this component
   * @since 4.0.0
  */
  content(content: string): TextComponent;
}
export interface TextComponent extends BuildableComponent<TextComponent, net_kyori_adventure_text_TextComponent_Builder>, ScopedComponent<TextComponent> {}
/**
 * Given a Minecraft selector, this component reads the NBT of the associated entity and displays that information.
 *
 * This component consists of:
 * 
 *   selector
 *   a Minecraft selector.(e.g `@p`, `@r`)
 *   everything in
 *   {@link NBTComponent}
 * 
 *
 * @see NBTComponent
 * @since 4.0.0
 * @sinceMinecraft 1.14
*/
export class EntityNBTComponent extends NBTComponent<EntityNBTComponent, net_kyori_adventure_text_EntityNBTComponent_Builder> {
  /**
   * Gets the entity selector.
   *
   * @return the entity selector
   * @since 4.0.0
  */
  selector(): string;
  /**
   * Sets the entity selector.
   *
   * @param selector the entity selector
   * @return an entity NBT component
   * @since 4.0.0
  */
  selector(selector: string): EntityNBTComponent;
  /**
   * Creates a selector component by applying configuration from `consumer`.
   *
   * @param consumer the builder configurator
   * @return a selector component
   * @since 4.0.0
  */
  static selector(consumer: Consumer<any>): SelectorComponent;
  /**
   * Creates a selector component with a pattern.
   *
   * @param pattern the selector pattern
   * @param separator the separator
   * @return a selector component
   * @since 4.8.0
  */
  static selector(pattern: string, separator: ComponentLike | null): SelectorComponent;
}
export interface EntityNBTComponent extends NBTComponent<EntityNBTComponent, net_kyori_adventure_text_EntityNBTComponent_Builder>, ScopedComponent<EntityNBTComponent> {}
/**
 * Something that can be applied to a {@link Component}.
 *
 * @since 4.0.0
*/
export class ComponentApplicable {
  /**
   * Applies to `component`.
   *
   * @param component the component
   * @return a component with something applied.
   * @since 4.0.0
  */
  componentApply(component: Component): Component;
}
/**
 * A configuration for how text can be replaced in a component.
 *
 * The exact structure for a replacement specification is an implementation detail and therefore not exposed.
 * Custom implementations of `TextReplacementConfig` are not supported.
 *
 * @since 4.2.0
*/
export class TextReplacementConfig extends Buildable<TextReplacementConfig, net_kyori_adventure_text_TextReplacementConfig_Builder> {
  /**
   * Create a new builder.
   *
   * @return a new builder
   * @since 4.2.0
  */
  static builder(): net_kyori_adventure_text_TextReplacementConfig_Builder;
  /**
   * Get the pattern that will be searched for.
   *
   * @return the match pattern
   * @since 4.2.0
  */
  matchPattern(): Pattern;
}
/**
 * Something that can be represented as a {@link Component}.
 *
 * @since 4.0.0
*/
export class ComponentLike {
  /**
   * Converts a list of {@link ComponentLike}s to a list of {@link Component}s.
   *
   * @param likes the component-likes
   * @return the components
   * @since 4.8.0
  */
  static asComponents(likes: ComponentLike[]): Component[];
  /**
   * Converts a list of {@link ComponentLike}s to a list of {@link Component}s.
   *
   * Only components that match `filter` will be returned.
   *
   * @param likes the component-likes
   * @param filter the component filter
   * @return the components
   * @since 4.8.0
  */
  static asComponents(likes: ComponentLike[], filter: Predicate<any> | null): Component[];
  /**
   * Fetches a {@link Component} from a `ComponentLike`.
   *
   * @param like the component-like
   * @return a component, or `null`
   * @since 4.8.0
  */
  static unbox(like: ComponentLike | null): Component | null;
  /**
   * Gets a {@link Component} representation.
   *
   * @return a component
   * @since 4.0.0
  */
  asComponent(): Component;
}
/**
 * A component which may be built.
 *
 * @param  the component type
 * @param  the builder type
 * @since 4.0.0
*/
export class BuildableComponent<C, B> extends Buildable<C, B> {
  /**
   * Create a builder from this component.
   *
   * @return the builder
  */
  toBuilder(): B;
}
export interface BuildableComponent<C, B> extends Buildable<C, B>, Component {}
/**
 * A Component is an immutable object that represents how text
 * is displayed Minecraft clients.
 *
 * Components can be thought of as the combination of:
 *
 * 
 *  The message the Component wants to display; and
 *  The {@link Style} of that message.
 * 
 *
 * The most basic component is the {@link TextComponent},
 * where the message is a simple String. However, other dynamic
 * Components are available, which are linked to from here and you
 * are encouraged to explore to better support your plugin/mod.
 * Factories and builders for all available component types are
 * provided via this interface.
 *
 * Components can be serialized to and deserialized from other
 * formats via the use of {@link ComponentSerializer component
 * serializers}. If used within one of our natively supported platforms,
 * the availability of such serializers may vary, consult the documentation
 * or support for the given platform should this be the case.
 *
 * Further information about Components, along with functional
 * examples of how they can be used,
 * can be found on
 * our documentation.
 *
 * @see BlockNBTComponent
 * @see EntityNBTComponent
 * @see KeybindComponent
 * @see ScoreComponent
 * @see SelectorComponent
 * @see StorageNBTComponent
 * @see TextComponent
 * @see TranslatableComponent
 * @see LinearComponents
 * @since 4.0.0
*/
export class Component extends ComponentBuilderApplicable {
  /**
   * A predicate that checks equality of two `Component`s using {@link Objects#equals(Object, Object)}.
   *
   * @since 4.8.0
  */
  static readonly EQUALS: BiPredicate<any, any>;
  /**
   * A predicate that checks equality of two `Component`s using identity equality.
   *
   * @since 4.8.0
  */
  static readonly EQUALS_IDENTITY: BiPredicate<any, any>;
  /**
   * Gets an empty component.
   *
   * @return an empty component
   * @since 4.0.0
  */
  static empty(): TextComponent;
  /**
   * Gets a text component with a new line character as the content.
   *
   * @return a text component with a new line character as the content
   * @since 4.0.0
  */
  static newline(): TextComponent;
  /**
   * Gets a text immutable component with a single space as the content.
   *
   * @return a text component with a single space as the content
   * @since 4.0.0
  */
  static space(): TextComponent;
  /**
   * Joins `components` using `separator`.
   *
   * @param separator the separator
   * @param components the components
   * @return a text component
   * @since 4.0.0
  */
  static join(separator: ComponentLike, ...components: ComponentLike[]): TextComponent;
  /**
   * Joins `components` using `separator`.
   *
   * @param separator the separator
   * @param components the components
   * @return a text component
   * @since 4.0.0
  */
  static join(separator: ComponentLike, components: Iterable<ComponentLike>): TextComponent;
  /**
   * Create a collector that will join components without a separator.
   *
   * @return a collector that can join components
   * @since 4.6.0
  */
  static toComponent(): Collector<Component, ComponentBuilder<any, any>, Component>;
  /**
   * Create a collector that will join components using the provided separator.
   *
   * @param separator the separator to join with
   * @return a collector that can join components
   * @since 4.6.0
  */
  static toComponent(separator: Component): Collector<Component, ComponentBuilder<any, any>, Component>;
  /**
   * Creates a block NBT component builder.
   *
   * @return a builder
   * @since 4.0.0
  */
  static blockNBT(): net_kyori_adventure_text_BlockNBTComponent_Builder;
  /**
   * Creates a block NBT component by applying configuration from `consumer`.
   *
   * @param consumer the builder configurator
   * @return a block NBT component
   * @since 4.0.0
  */
  static blockNBT(consumer: Consumer<any>): BlockNBTComponent;
  /**
   * Creates a block NBT component with a position.
   *
   * @param nbtPath the nbt path
   * @param pos the block position
   * @return a block NBT component
   * @since 4.0.0
  */
  static blockNBT(nbtPath: string, pos: Pos): BlockNBTComponent;
  /**
   * Creates a block NBT component with a position.
   *
   * @param nbtPath the nbt path
   * @param interpret whether to interpret
   * @param pos the block position
   * @return a block NBT component
   * @since 4.0.0
  */
  static blockNBT(nbtPath: string, interpret: boolean, pos: Pos): BlockNBTComponent;
  /**
   * Creates a block NBT component with a position.
   *
   * @param nbtPath the nbt path
   * @param interpret whether to interpret
   * @param separator the separator
   * @param pos the block position
   * @return a block NBT component
   * @since 4.8.0
  */
  static blockNBT(nbtPath: string, interpret: boolean, separator: ComponentLike | null, pos: Pos): BlockNBTComponent;
  /**
   * Creates an entity NBT component builder.
   *
   * @return a builder
   * @since 4.0.0
  */
  static entityNBT(): net_kyori_adventure_text_EntityNBTComponent_Builder;
  /**
   * Creates a entity NBT component by applying configuration from `consumer`.
   *
   * @param consumer the builder configurator
   * @return an entity NBT component
   * @since 4.0.0
  */
  static entityNBT(consumer: Consumer<any>): EntityNBTComponent;
  /**
   * Creates a entity NBT component with a position.
   *
   * @param nbtPath the nbt path
   * @param selector the selector
   * @return an entity NBT component
   * @since 4.0.0
  */
  static entityNBT(nbtPath: string, selector: string): EntityNBTComponent;
  /**
   * Creates a keybind component builder.
   *
   * @return a builder
   * @since 4.0.0
  */
  static keybind(): net_kyori_adventure_text_KeybindComponent_Builder;
  /**
   * Creates a keybind component by applying configuration from `consumer`.
   *
   * @param consumer the builder configurator
   * @return the keybind component
   * @since 4.0.0
  */
  static keybind(consumer: Consumer<any>): KeybindComponent;
  /**
   * Creates a keybind component with a keybind.
   *
   * @param keybind the keybind
   * @return the keybind component
   * @since 4.0.0
  */
  static keybind(keybind: string): KeybindComponent;
  /**
   * Creates a keybind component with a keybind and styling.
   *
   * @param keybind the keybind
   * @param style the style
   * @return the keybind component
   * @since 4.0.0
  */
  static keybind(keybind: string, style: Style): KeybindComponent;
  /**
   * Creates a keybind component with a keybind, and optional color.
   *
   * @param keybind the keybind
   * @param color the color
   * @return the keybind component
   * @since 4.0.0
  */
  static keybind(keybind: string, color: TextColor | null): KeybindComponent;
  /**
   * Creates a keybind component with a keybind, and optional color and decorations.
   *
   * @param keybind the keybind
   * @param color the color
   * @param decorations the decorations
   * @return the keybind component
   * @since 4.0.0
  */
  static keybind(keybind: string, color: TextColor | null, ...decorations: TextDecoration[]): KeybindComponent;
  /**
   * Creates a keybind component with a keybind, and optional color and decorations.
   *
   * @param keybind the keybind
   * @param color the color
   * @param decorations the decorations
   * @return the keybind component
   * @since 4.0.0
  */
  static keybind(keybind: string, color: TextColor | null, decorations: Set<TextDecoration>): KeybindComponent;
  /**
   * Creates a score component builder.
   *
   * @return a builder
   * @since 4.0.0
  */
  static score(): net_kyori_adventure_text_ScoreComponent_Builder;
  /**
   * Creates a score component by applying configuration from `consumer`.
   *
   * @param consumer the builder configurator
   * @return a score component
   * @since 4.0.0
  */
  static score(consumer: Consumer<any>): ScoreComponent;
  /**
   * Creates a score component with a name and objective.
   *
   * @param name the score name
   * @param objective the score objective
   * @return a score component
   * @since 4.0.0
  */
  static score(name: string, objective: string): ScoreComponent;
  /**
   * Creates a score component with a name, objective, and optional value.
   *
   * @param name the score name
   * @param objective the score objective
   * @param value the value
   * @return a score component
   * @since 4.0.0
   * @deprecated since 4.7.0, not for removal, with no replacement. The `value` field is no longer supported in 1.16.5.
  */
  static score(name: string, objective: string, value: string | null): ScoreComponent;
  /**
   * Creates a selector component builder.
   *
   * @return a builder
   * @since 4.0.0
  */
  static selector(): net_kyori_adventure_text_SelectorComponent_Builder;
  /**
   * Creates a selector component by applying configuration from `consumer`.
   *
   * @param consumer the builder configurator
   * @return a selector component
   * @since 4.0.0
  */
  static selector(consumer: Consumer<any>): SelectorComponent;
  /**
   * Creates a selector component with a pattern.
   *
   * @param pattern the selector pattern
   * @return a selector component
   * @since 4.0.0
  */
  static selector(pattern: string): SelectorComponent;
  /**
   * Creates a selector component with a pattern.
   *
   * @param pattern the selector pattern
   * @param separator the separator
   * @return a selector component
   * @since 4.8.0
  */
  static selector(pattern: string, separator: ComponentLike | null): SelectorComponent;
  /**
   * Creates an storage NBT component builder.
   *
   * @return a builder
   * @since 4.0.0
  */
  static storageNBT(): net_kyori_adventure_text_StorageNBTComponent_Builder;
  /**
   * Creates a storage NBT component by applying configuration from `consumer`.
   *
   * @param consumer the builder configurator
   * @return a storage NBT component
   * @since 4.0.0
  */
  static storageNBT(consumer: Consumer<any>): StorageNBTComponent;
  /**
   * Creates a storage NBT component with a path and an storage ID.
   *
   * @param nbtPath the nbt path
   * @param storage the identifier of the storage
   * @return a storage NBT component
   * @since 4.0.0
  */
  static storageNBT(nbtPath: string, storage: Key): StorageNBTComponent;
  /**
   * Creates a storage NBT component with a path and an storage ID.
   *
   * @param nbtPath the nbt path
   * @param interpret whether to interpret
   * @param storage the identifier of the storage
   * @return a storage NBT component
   * @since 4.0.0
  */
  static storageNBT(nbtPath: string, interpret: boolean, storage: Key): StorageNBTComponent;
  /**
   * Creates a storage NBT component with a path and an storage ID.
   *
   * @param nbtPath the nbt path
   * @param interpret whether to interpret
   * @param separator the separator
   * @param storage the identifier of the storage
   * @return a storage NBT component
   * @since 4.8.0
  */
  static storageNBT(nbtPath: string, interpret: boolean, separator: ComponentLike | null, storage: Key): StorageNBTComponent;
  /**
   * Creates a text component builder.
   *
   * @return a builder
   * @since 4.0.0
  */
  static text(): net_kyori_adventure_text_TextComponent_Builder;
  /**
   * Creates a text component by applying configuration from `consumer`.
   *
   * @param consumer the builder configurator
   * @return the text component
   * @since 4.0.0
  */
  static text(consumer: Consumer<any>): TextComponent;
  /**
   * Creates a text component with content.
   *
   * @param content the plain text content
   * @return a text component
   * @since 4.0.0
  */
  static text(content: string): TextComponent;
  /**
   * Creates a text component with content and styling.
   *
   * @param content the plain text content
   * @param style the style
   * @return a text component
   * @since 4.0.0
  */
  static text(content: string, style: Style): TextComponent;
  /**
   * Creates a text component with content, and optional color.
   *
   * @param content the plain text content
   * @param color the color
   * @return a text component
   * @since 4.0.0
  */
  static text(content: string, color: TextColor | null): TextComponent;
  /**
   * Creates a text component with content, and optional color and decorations.
   *
   * @param content the plain text content
   * @param color the color
   * @param decorations the decorations
   * @return a text component
   * @since 4.0.0
  */
  static text(content: string, color: TextColor | null, ...decorations: TextDecoration[]): TextComponent;
  /**
   * Creates a text component with content, and optional color and decorations.
   *
   * @param content the plain text content
   * @param color the color
   * @param decorations the decorations
   * @return a text component
   * @since 4.0.0
  */
  static text(content: string, color: TextColor | null, decorations: Set<TextDecoration>): TextComponent;
  /**
   * Creates a text component with the content of {@link String#valueOf(boolean)}.
   *
   * @param value the boolean value
   * @return a text component
   * @since 4.0.0
  */
  static text(value: boolean): TextComponent;
  /**
   * Creates a text component with the content of {@link String#valueOf(boolean)} and styling.
   *
   * @param value the boolean value
   * @param style the style
   * @return a text component
   * @since 4.0.0
  */
  static text(value: boolean, style: Style): TextComponent;
  /**
   * Creates a text component with the content of {@link String#valueOf(boolean)}, and optional color.
   *
   * @param value the boolean value
   * @param color the color
   * @return a text component
   * @since 4.0.0
  */
  static text(value: boolean, color: TextColor | null): TextComponent;
  /**
   * Creates a text component with the content of {@link String#valueOf(boolean)}, and optional color and decorations.
   *
   * @param value the boolean value
   * @param color the color
   * @param decorations the decorations
   * @return a text component
   * @since 4.0.0
  */
  static text(value: boolean, color: TextColor | null, ...decorations: TextDecoration[]): TextComponent;
  /**
   * Creates a text component with the content of {@link String#valueOf(boolean)}, and optional color and decorations.
   *
   * @param value the boolean value
   * @param color the color
   * @param decorations the decorations
   * @return a text component
   * @since 4.0.0
  */
  static text(value: boolean, color: TextColor | null, decorations: Set<TextDecoration>): TextComponent;
  /**
   * Creates a text component with the content of {@link String#valueOf(double)}.
   *
   * @param value the double value
   * @return a text component
   * @since 4.0.0
  */
  static text(value: number): TextComponent;
  /**
   * Creates a text component with the content of {@link String#valueOf(double)} and styling.
   *
   * @param value the double value
   * @param style the style
   * @return a text component
   * @since 4.0.0
  */
  static text(value: number, style: Style): TextComponent;
  /**
   * Creates a text component with the content of {@link String#valueOf(double)}, and optional color.
   *
   * @param value the double value
   * @param color the color
   * @return a text component
   * @since 4.0.0
  */
  static text(value: number, color: TextColor | null): TextComponent;
  /**
   * Creates a text component with the content of {@link String#valueOf(double)}, and optional color and decorations.
   *
   * @param value the double value
   * @param color the color
   * @param decorations the decorations
   * @return a text component
   * @since 4.0.0
  */
  static text(value: number, color: TextColor | null, ...decorations: TextDecoration[]): TextComponent;
  /**
   * Creates a text component with the content of {@link String#valueOf(double)}, and optional color and decorations.
   *
   * @param value the double value
   * @param color the color
   * @param decorations the decorations
   * @return a text component
   * @since 4.0.0
  */
  static text(value: number, color: TextColor | null, decorations: Set<TextDecoration>): TextComponent;
  /**
   * Creates a translatable component builder.
   *
   * @return a builder
   * @since 4.0.0
  */
  static translatable(): Builder;
  /**
   * Creates a translatable component by applying configuration from `consumer`.
   *
   * @param consumer the builder configurator
   * @return a translatable component
   * @since 4.0.0
  */
  static translatable(consumer: Consumer<any>): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key.
   *
   * @param key the translation key
   * @return a translatable component
   * @since 4.0.0
  */
  static translatable(key: string): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key.
   *
   * @param translatable the translatable object to get the key from
   * @return a translatable component
   * @since 4.8.0
  */
  static translatable(translatable: Translatable): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key and styling.
   *
   * @param key the translation key
   * @param style the style
   * @return a translatable component
   * @since 4.0.0
  */
  static translatable(key: string, style: Style): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key and styling.
   *
   * @param translatable the translatable object to get the key from
   * @param style the style
   * @return a translatable component
   * @since 4.8.0
  */
  static translatable(translatable: Translatable, style: Style): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key, and optional color.
   *
   * @param key the translation key
   * @param color the color
   * @return a translatable component
   * @since 4.0.0
  */
  static translatable(key: string, color: TextColor | null): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key, and optional color.
   *
   * @param translatable the translatable object to get the key from
   * @param color the color
   * @return a translatable component
   * @since 4.8.0
  */
  static translatable(translatable: Translatable, color: TextColor | null): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key, and optional color and decorations.
   *
   * @param key the translation key
   * @param color the color
   * @param decorations the decorations
   * @return a translatable component
   * @since 4.0.0
  */
  static translatable(key: string, color: TextColor | null, ...decorations: TextDecoration[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key, and optional color and decorations.
   *
   * @param translatable the translatable object to get the key from
   * @param color the color
   * @param decorations the decorations
   * @return a translatable component
   * @since 4.8.0
  */
  static translatable(translatable: Translatable, color: TextColor | null, ...decorations: TextDecoration[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key, and optional color and decorations.
   *
   * @param key the translation key
   * @param color the color
   * @param decorations the decorations
   * @return a translatable component
   * @since 4.0.0
  */
  static translatable(key: string, color: TextColor | null, decorations: Set<TextDecoration>): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key, and optional color and decorations.
   *
   * @param translatable the translatable object to get the key from
   * @param color the color
   * @param decorations the decorations
   * @return a translatable component
   * @since 4.8.0
  */
  static translatable(translatable: Translatable, color: TextColor | null, decorations: Set<TextDecoration>): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key and arguments.
   *
   * @param key the translation key
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.0.0
  */
  static translatable(key: string, ...args: ComponentLike[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key and arguments.
   *
   * @param translatable the translatable object to get the key from
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.8.0
  */
  static translatable(translatable: Translatable, ...args: ComponentLike[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key and styling.
   *
   * @param key the translation key
   * @param style the style
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.0.0
  */
  static translatable(key: string, style: Style, ...args: ComponentLike[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key and styling.
   *
   * @param translatable the translatable object to get the key from
   * @param style the style
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.8.0
  */
  static translatable(translatable: Translatable, style: Style, ...args: ComponentLike[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key, arguments, and optional color.
   *
   * @param key the translation key
   * @param color the color
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.0.0
  */
  static translatable(key: string, color: TextColor | null, ...args: ComponentLike[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key, arguments, and optional color.
   *
   * @param translatable the translatable object to get the key from
   * @param color the color
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.8.0
  */
  static translatable(translatable: Translatable, color: TextColor | null, ...args: ComponentLike[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key, arguments, and optional color and decorations.
   *
   * @param key the translation key
   * @param color the color
   * @param decorations the decorations
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.0.0
  */
  static translatable(key: string, color: TextColor | null, decorations: Set<TextDecoration>, ...args: ComponentLike[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key, arguments, and optional color and decorations.
   *
   * @param translatable the translatable object to get the key from
   * @param color the color
   * @param decorations the decorations
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.8.0
  */
  static translatable(translatable: Translatable, color: TextColor | null, decorations: Set<TextDecoration>, ...args: ComponentLike[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key and arguments.
   *
   * @param key the translation key
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.0.0
  */
  static translatable(key: string, args: ComponentLike[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key and arguments.
   *
   * @param translatable the translatable object to get the key from
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.8.0
  */
  static translatable(translatable: Translatable, args: ComponentLike[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key and styling.
   *
   * @param key the translation key
   * @param style the style
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.0.0
  */
  static translatable(key: string, style: Style, args: ComponentLike[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key and styling.
   *
   * @param translatable the translatable object to get the key from
   * @param style the style
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.8.0
  */
  static translatable(translatable: Translatable, style: Style, args: ComponentLike[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key, arguments, and optional color.
   *
   * @param key the translation key
   * @param color the color
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.0.0
  */
  static translatable(key: string, color: TextColor | null, args: ComponentLike[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key, arguments, and optional color.
   *
   * @param translatable the translatable object to get the key from
   * @param color the color
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.8.0
  */
  static translatable(translatable: Translatable, color: TextColor | null, args: ComponentLike[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key, arguments, and optional color and decorations.
   *
   * @param key the translation key
   * @param color the color
   * @param decorations the decorations
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.0.0
  */
  static translatable(key: string, color: TextColor | null, decorations: Set<TextDecoration>, args: ComponentLike[]): TranslatableComponent;
  /**
   * Creates a translatable component with a translation key, arguments, and optional color and decorations.
   *
   * @param translatable the translatable object to get the key from
   * @param color the color
   * @param decorations the decorations
   * @param args the translation arguments
   * @return a translatable component
   * @since 4.8.0
  */
  static translatable(translatable: Translatable, color: TextColor | null, decorations: Set<TextDecoration>, args: ComponentLike[]): TranslatableComponent;
  /**
   * Gets the unmodifiable list of children.
   *
   * @return the unmodifiable list of children
   * @since 4.0.0
  */
  children(): Component[];
  /**
   * Sets the list of children.
   *
   * The contents of `children` will be copied.
   *
   * @param children the children
   * @return a component with the children set
   * @since 4.0.0
  */
  children(children: ComponentLike[]): Component;
  /**
   * Checks if this component contains a component.
   *
   * This method uses identity comparison when checking for contains. Use {@link #contains(Component, BiPredicate)} with {@link #EQUALS} if you
   * wish to use full equality comparison.
   *
   * @param that the other component
   * @return `true` if this component contains the provided
   *     component, `false` otherwise
   * @since 4.0.0
  */
  contains(that: Component): boolean;
  /**
   * Checks if this component contains a component.
   *
   * @param that the other component
   * @param equals the equality tester
   * @return `true` if this component contains the provided
   *     component, `false` otherwise
   * @since 4.8.0
  */
  contains(that: Component, equals: BiPredicate<any, any>): boolean;
  /**
   * Prevents a cycle between this component and the provided component.
   *
   * @param that the other component
   * @deprecated for removal since 4.7.0, with no replacement - this method is not necessary due to the fact `Component`s are immutable
   * @since 4.0.0
  */
  detectCycle(that: Component): void;
  /**
   * Appends a component to this component.
   *
   * @param component the component to append
   * @return a component with the component added
   * @since 4.0.0
  */
  append(component: Component): Component;
  /**
   * Appends a component to this component.
   *
   * @param component the component to append
   * @return a component with the component added
   * @since 4.0.0
  */
  append(component: ComponentLike): Component;
  /**
   * Appends a component to this component.
   *
   * @param builder the component to append
   * @return a component with the component added
   * @since 4.0.0
  */
  append(builder: ComponentBuilder<any, any>): Component;
  /**
   * Gets the style of this component.
   *
   * @return the style of this component
   * @since 4.0.0
  */
  style(): Style;
  /**
   * Sets the style of this component.
   *
   * @param style the style
   * @return a component
   * @since 4.0.0
  */
  style(style: Style): Component;
  /**
   * Sets the style of this component.
   *
   * @param consumer the style consumer
   * @return a component
   * @since 4.0.0
  */
  style(consumer: Consumer<net_kyori_adventure_text_format_Style_Builder>): Component;
  /**
   * Sets the style of this component.
   *
   * @param consumer the style consumer
   * @param strategy the merge strategy
   * @return a component
   * @since 4.0.0
  */
  style(consumer: Consumer<net_kyori_adventure_text_format_Style_Builder>, strategy: Strategy): Component;
  /**
   * Sets the style of this component.
   *
   * @param style the style
   * @return a component
   * @since 4.0.0
  */
  style(style: net_kyori_adventure_text_format_Style_Builder): Component;
  /**
   * Merges from another style into this component's style.
   *
   * @param that the other style
   * @return a component
   * @since 4.0.0
  */
  mergeStyle(that: Component): Component;
  /**
   * Merges from another style into this component's style.
   *
   * @param that the other style
   * @param merges the style parts to merge
   * @return a component
   * @since 4.0.0
  */
  mergeStyle(that: Component, ...merges: Merge[]): Component;
  /**
   * Merges from another style into this component's style.
   *
   * @param that the other style
   * @param merges the style parts to merge
   * @return a component
   * @since 4.0.0
  */
  mergeStyle(that: Component, merges: Set<Merge>): Component;
  /**
   * Gets the color of this component.
   *
   * @return the color of this component
   * @since 4.0.0
  */
  color(): TextColor | null;
  /**
   * Sets the color of this component.
   *
   * @param color the color
   * @return a component
   * @since 4.0.0
  */
  color(color: TextColor | null): Component;
  /**
   * Sets the color if there isn't one set already.
   *
   * @param color the color
   * @return a component
   * @since 4.0.0
  */
  colorIfAbsent(color: TextColor | null): Component;
  /**
   * Tests if this component has a decoration.
   *
   * @param decoration the decoration
   * @return `true` if this component has the decoration, `false` if this
   *     component does not have the decoration
   * @since 4.0.0
  */
  hasDecoration(decoration: TextDecoration): boolean;
  /**
   * Sets the state of `decoration` to {@link TextDecoration.State#TRUE} on this component.
   *
   * @param decoration the decoration
   * @return a component
   * @since 4.0.0
  */
  decorate(decoration: TextDecoration): Component;
  /**
   * Gets the state of a decoration on this component.
   *
   * @param decoration the decoration
   * @return {@link TextDecoration.State#TRUE} if this component has the decoration,
   *     {@link TextDecoration.State#FALSE} if this component does not have the decoration,
   *     and {@link TextDecoration.State#NOT_SET} if not set
   * @since 4.0.0
  */
  decoration(decoration: TextDecoration): State;
  /**
   * Sets the state of a decoration on this component.
   *
   * @param decoration the decoration
   * @param flag `true` if this component should have the decoration, `false` if
   *     this component should not have the decoration
   * @return a component
   * @since 4.0.0
  */
  decoration(decoration: TextDecoration, flag: boolean): Component;
  /**
   * Sets the value of a decoration on this component.
   *
   * @param decoration the decoration
   * @param state {@link TextDecoration.State#TRUE} if this component should have the
   *     decoration, {@link TextDecoration.State#FALSE} if this component should not
   *     have the decoration, and {@link TextDecoration.State#NOT_SET} if the decoration
   *     should not have a set value
   * @return a component
   * @since 4.0.0
  */
  decoration(decoration: TextDecoration, state: State): Component;
  /**
   * Gets a set of decorations this component has.
   *
   * @return a set of decorations this component has
   * @since 4.0.0
  */
  decorations(): Map<TextDecoration, State>;
  /**
   * Sets decorations for this component's style using the specified `decorations` map.
   *
   * If a given decoration does not have a value explicitly set, the value of that particular decoration is not changed.
   *
   * @param decorations a set of default values
   * @return a component
   * @since 4.0.0
  */
  decorations(decorations: Map<TextDecoration, State>): Component;
  /**
   * Gets the click event of this component.
   *
   * @return the click event
   * @since 4.0.0
  */
  clickEvent(): ClickEvent | null;
  /**
   * Sets the click event of this component.
   *
   * @param event the click event
   * @return a component
   * @since 4.0.0
  */
  clickEvent(event: ClickEvent | null): Component;
  /**
   * Gets the hover event of this component.
   *
   * @return the hover event
   * @since 4.0.0
  */
  hoverEvent(): HoverEvent<any> | null;
  /**
   * Sets the hover event of this component.
   *
   * @param source the hover event source
   * @return a component
   * @since 4.0.0
  */
  hoverEvent(source: HoverEventSource<any> | null): Component;
  /**
   * Gets the string to be inserted when this component is shift-clicked.
   *
   * @return the insertion string
   * @since 4.0.0
  */
  insertion(): string | null;
  /**
   * Sets the string to be inserted when this component is shift-clicked.
   *
   * @param insertion the insertion string
   * @return a component
   * @since 4.0.0
  */
  insertion(insertion: string | null): Component;
  /**
   * Tests if this component has any styling.
   *
   * @return `true` if this component has any styling, `false` if this
   *     component does not have any styling
   * @since 4.0.0
  */
  hasStyling(): boolean;
  /**
   * Finds and replaces any text with this or child {@link Component}s using the configured options.
   *
   * @param configurer the configurer
   * @return a modified copy of this component
   * @since 4.2.0
  */
  replaceText(configurer: Consumer<net_kyori_adventure_text_TextReplacementConfig_Builder>): Component;
  /**
   * Finds and replaces any text with this or child {@link Component}s using the provided options.
   *
   * @param config the replacement config
   * @return a modified copy of this component
   * @since 4.2.0
  */
  replaceText(config: TextReplacementConfig): Component;
  /**
   * Finds and replaces text within any {@link Component}s using a string literal.
   *
   * @param search a string literal
   * @param replacement a {@link ComponentLike} to replace each match
   * @return a modified copy of this component
   * @since 4.0.0
   * @deprecated for removal since 4.2.0, use {@link #replaceText(Consumer)} or {@link #replaceText(TextReplacementConfig)} instead.
  */
  replaceText(search: string, replacement: ComponentLike | null): Component;
  /**
   * Finds and replaces text within any {@link TextComponent}s using a regex pattern.
   *
   * @param pattern a regex pattern
   * @param replacement a function to replace each match
   * @return a modified copy of this component
   * @since 4.0.0
   * @deprecated for removal since 4.2.0, use {@link #replaceText(Consumer)} or {@link #replaceText(TextReplacementConfig)} instead.
  */
  replaceText(pattern: Pattern, replacement: Function<net_kyori_adventure_text_TextComponent_Builder, ComponentLike>): Component;
  /**
   * Finds and replaces the first occurrence of text within any {@link Component}s using a string literal.
   *
   * @param search a string literal
   * @param replacement a {@link ComponentLike} to replace the first match
   * @return a modified copy of this component
   * @since 4.0.0
   * @deprecated for removal since 4.2.0, use {@link #replaceText(Consumer)} or {@link #replaceText(TextReplacementConfig)} instead.
  */
  replaceFirstText(search: string, replacement: ComponentLike | null): Component;
  /**
   * Finds and replaces the first occurrence of text within any {@link TextComponent}s using a regex pattern.
   *
   * @param pattern a regex pattern
   * @param replacement a function to replace the first match
   * @return a modified copy of this component
   * @since 4.0.0
   * @deprecated for removal since 4.2.0, use {@link #replaceText(Consumer)} or {@link #replaceText(TextReplacementConfig)} instead.
  */
  replaceFirstText(pattern: Pattern, replacement: Function<net_kyori_adventure_text_TextComponent_Builder, ComponentLike>): Component;
  /**
   * Finds and replaces `n` instances of text within any {@link TextComponent}s using a string literal.
   *
   * @param search a string literal
   * @param replacement a {@link ComponentLike} to replace the first match
   * @param numberOfReplacements the amount of matches that should be replaced
   * @return a modified copy of this component
   * @since 4.0.0
   * @deprecated for removal since 4.2.0, use {@link #replaceText(Consumer)} or {@link #replaceText(TextReplacementConfig)} instead.
  */
  replaceText(search: string, replacement: ComponentLike | null, numberOfReplacements: number): Component;
  /**
   * Finds and replaces `n` instances of text within any {@link TextComponent}s using a regex pattern.
   *
   * @param pattern a regex pattern
   * @param replacement a function to replace each match
   * @param numberOfReplacements the amount of matches that should be replaced
   * @return a modified copy of this component
   * @since 4.0.0
   * @deprecated for removal since 4.2.0, use {@link #replaceText(Consumer)} or {@link #replaceText(TextReplacementConfig)} instead.
  */
  replaceText(pattern: Pattern, replacement: Function<net_kyori_adventure_text_TextComponent_Builder, ComponentLike>, numberOfReplacements: number): Component;
  /**
   * Finds and replaces `n` instances of text within any {@link TextComponent}s using a string literal.
   *
   * Utilises an {@link IntFunction2} to determine if each instance should be replaced.
   *
   * @param search a string literal
   * @param replacement a {@link ComponentLike} to replace the first match
   * @param fn a function of (index, replaced) used to determine if matches should be replaced, where "replaced" is the number of successful replacements
   * @return a modified copy of this component
   * @since 4.0.0
   * @deprecated for removal since 4.2.0, use {@link #replaceText(Consumer)} or {@link #replaceText(TextReplacementConfig)} instead.
  */
  replaceText(search: string, replacement: ComponentLike | null, fn: IntFunction2<PatternReplacementResult>): Component;
  /**
   * Finds and replaces text using a regex pattern.
   *
   * Utilises an {@link IntFunction2} to determine if each instance should be replaced.
   *
   * @param pattern a regex pattern
   * @param replacement a function to replace the first match
   * @param fn a function of (index, replaced) used to determine if matches should be replaced, where "replaced" is the number of successful replacements
   * @return a modified copy of this component
   * @since 4.0.0
   * @deprecated for removal since 4.2.0, use {@link #replaceText(Consumer)} or {@link #replaceText(TextReplacementConfig)} instead.
  */
  replaceText(pattern: Pattern, replacement: Function<net_kyori_adventure_text_TextComponent_Builder, ComponentLike>, fn: IntFunction2<PatternReplacementResult>): Component;
  componentBuilderApply(component: ComponentBuilder<any, any>): void;
  asComponent(): Component;
  asHoverEvent(op: UnaryOperator<Component>): HoverEvent<Component>;
  /**
   * Represent this object as a hover event.
   *
   * @return a hover event
   * @since 4.0.0
  */
  asHoverEvent(): HoverEvent<V>;
}
export interface Component extends ComponentBuilderApplicable, ComponentLike, HoverEventSource<Component> {}
/**
 * A component builder.
 *
 * @param  the component type
 * @param  the builder type
 * @since 4.0.0
*/
export class ComponentBuilder<C, B> extends net_kyori_adventure_util_Buildable_Builder<C> {
  /**
   * Appends a component to this component.
   *
   * @param component the component to append
   * @return this builder
   * @since 4.0.0
  */
  append(component: Component): B;
  /**
   * Appends a component to this component.
   *
   * @param component the component to append
   * @return this builder
   * @since 4.0.0
  */
  append(component: ComponentLike): B;
  /**
   * Appends a component to this component.
   *
   * @param builder the component to append
   * @return this builder
   * @since 4.0.0
  */
  append(builder: ComponentBuilder<any, any>): B;
  /**
   * Appends components to this component.
   *
   * @param components the components to append
   * @return this builder
   * @since 4.0.0
  */
  append(...components: Component[]): B;
  /**
   * Appends components to this component.
   *
   * @param components the components to append
   * @return this builder
   * @since 4.0.0
  */
  append(...components: ComponentLike[]): B;
  /**
   * Appends components to this component.
   *
   * @param components the components to append
   * @return this builder
   * @since 4.0.0
  */
  append(components: Iterable<ComponentLike>): B;
  /**
   * Applies an action to this builder.
   *
   * @param consumer the action
   * @return this builder
   * @since 4.0.0
  */
  apply(consumer: Consumer<any>): B;
  /**
   * Applies an action to this component and all child components if they are
   * an instance of {@link BuildableComponent}.
   *
   * @param action the action
   * @return this builder
   * @since 4.0.0
  */
  applyDeep(action: Consumer<any>): B;
  /**
   * Replaces each child of this component with the resultant component from the function.
   *
   * @param function the mapping function
   * @return this builder
   * @since 4.0.0
  */
  mapChildren(func: Function<BuildableComponent<any, any>, BuildableComponent<any, any>>): B;
  /**
   * Replaces each child and sub-child of this component with the resultant
   * component of the function.
   *
   * @param function the mapping function
   * @return this builder
   * @since 4.0.0
  */
  mapChildrenDeep(func: Function<BuildableComponent<any, any>, BuildableComponent<any, any>>): B;
  /**
   * Get an unmodifiable list containing all children currently in this builder.
   *
   * @return the list of children
   * @since 4.6.0
  */
  children(): Component[];
  /**
   * Sets the style.
   *
   * @param style the style
   * @return this builder
   * @since 4.0.0
  */
  style(style: Style): B;
  /**
   * Configures the style.
   *
   * @param consumer the style consumer
   * @return this builder
   * @since 4.0.0
  */
  style(consumer: Consumer<net_kyori_adventure_text_format_Style_Builder>): B;
  /**
   * Sets the font of this component.
   *
   * @param font the font
   * @return this builder
   * @since 4.0.0
  */
  font(font: Key | null): B;
  /**
   * Sets the color of this component.
   *
   * @param color the color
   * @return this builder
   * @since 4.0.0
  */
  color(color: TextColor | null): B;
  /**
   * Sets the color of this component if there isn't one set already.
   *
   * @param color the color
   * @return this builder
   * @since 4.0.0
  */
  colorIfAbsent(color: TextColor | null): B;
  /**
   * Sets the state of a set of decorations to `flag` on this component.
   *
   * @param decorations the decorations
   * @param flag `true` if this component should have the decorations, `false` if
   *     this component should not have the decorations
   * @return this builder
   * @since 4.0.0
  */
  decorations(decorations: Set<TextDecoration>, flag: boolean): B;
  /**
   * Sets the state of `decoration` to {@link TextDecoration.State#TRUE}.
   *
   * @param decoration the decoration
   * @return this builder
   * @since 4.0.0
  */
  decorate(decoration: TextDecoration): B;
  /**
   * Sets `decorations` to {@link TextDecoration.State#TRUE}.
   *
   * @param decorations the decorations
   * @return this builder
   * @since 4.0.0
  */
  decorate(...decorations: TextDecoration[]): B;
  /**
   * Sets the state of a decoration on this component.
   *
   * @param decoration the decoration
   * @param flag `true` if this component should have the decoration, `false` if
   *     this component should not have the decoration
   * @return this builder
   * @since 4.0.0
  */
  decoration(decoration: TextDecoration, flag: boolean): B;
  /**
   * Sets the value of a decoration on this component.
   *
   * @param decoration the decoration
   * @param state {@link TextDecoration.State#TRUE} if this component should have the
   *     decoration, {@link TextDecoration.State#FALSE} if this component should not
   *     have the decoration, and {@link TextDecoration.State#NOT_SET} if the decoration
   *     should not have a set value
   * @return this builder
   * @since 4.0.0
  */
  decoration(decoration: TextDecoration, state: State): B;
  /**
   * Sets the click event of this component.
   *
   * @param event the click event
   * @return this builder
   * @since 4.0.0
  */
  clickEvent(event: ClickEvent | null): B;
  /**
   * Sets the hover event of this component.
   *
   * @param source the hover event source
   * @return this builder
   * @since 4.0.0
  */
  hoverEvent(source: HoverEventSource<any> | null): B;
  /**
   * Sets the string to be inserted when this component is shift-clicked.
   *
   * @param insertion the insertion string
   * @return this builder
   * @since 4.0.0
  */
  insertion(insertion: string | null): B;
  /**
   * Merges styling from another component into this component.
   *
   * @param that the other component
   * @return this builder
   * @since 4.0.0
  */
  mergeStyle(that: Component): B;
  /**
   * Merges styling from another component into this component.
   *
   * @param that the other component
   * @param merges the parts to merge
   * @return this builder
   * @since 4.0.0
  */
  mergeStyle(that: Component, ...merges: Merge[]): B;
  /**
   * Merges styling from another component into this component.
   *
   * @param that the other component
   * @param merges the parts to merge
   * @return this builder
   * @since 4.0.0
  */
  mergeStyle(that: Component, merges: Set<Merge>): B;
  /**
   * Resets all styling on this component.
   *
   * @return this builder
   * @since 4.0.0
  */
  resetStyle(): B;
  /**
   * Build a component.
   *
   * @return the component
  */
  build(): C;
  /**
   * Applies `applicable`.
   *
   * @param applicable the thing to apply
   * @return this builder
   * @since 4.0.0
  */
  applicableApply(applicable: ComponentBuilderApplicable): B;
  componentBuilderApply(component: ComponentBuilder<any, any>): void;
  asComponent(): Component;
}
export interface ComponentBuilder<C, B> extends net_kyori_adventure_util_Buildable_Builder<C>, ComponentBuilderApplicable, ComponentLike {}
/**
 * Given a {@link Key}, this component reads the NBT of the associated command storage and displays that information.
 *
 * This component consists of:
 * 
 *   storage
 *   a key that represents the resource location of a command storage (eg. my_plugin:actions.punches_entity)
 *   everything in
 *   {@link NBTComponent}
 * 
 *
 * @see NBTComponent
 * @since 4.0.0
 * @sinceMinecraft 1.15
*/
export class StorageNBTComponent extends NBTComponent<StorageNBTComponent, net_kyori_adventure_text_StorageNBTComponent_Builder> {
  /**
   * Gets the NBT storage's ID.
   *
   * @return the NBT storage
   * @since 4.0.0
  */
  storage(): Key;
  /**
   * Sets the NBT storage.
   *
   * @param storage the identifier of the NBT storage
   * @return a storage NBT component
   * @since 4.0.0
  */
  storage(storage: Key): StorageNBTComponent;
}
export interface StorageNBTComponent extends NBTComponent<StorageNBTComponent, net_kyori_adventure_text_StorageNBTComponent_Builder>, ScopedComponent<StorageNBTComponent> {}
/**
 * A utility class that allows {@link Component components} to be created where {@link Style styles} can be specified inline.
 *
 * @since 4.0.0
*/
export class LinearComponents {
  /**
   * Styles apply to all components after them until a conflicting style is discovered
   *      *     Component message = LinearComponents.linear(NamedTextColor.RED, translatable("welcome.message"), TextDecoration.BOLD, text(" SERVER));
   *   
   * In this example all the text is red, but only the last word is bold.
   *      *     Component message = LinearComponents.linear(NamedTextColor.GREEN, text("I am green. "), NamedTextColor.GRAY, text("I am gray."));
   *   
   * In this example, the first text is green and the second is gray.
   *
   * @param applicables the things used to make the component
   * @return a component
   * @since 4.0.0
  */
  static linear(...applicables: ComponentBuilderApplicable[]): Component;
}
/**
 * An abstract implementation of a text component.
 *
 * @since 4.0.0
*/
export class AbstractComponent extends Component {
  /**
   * Gets the unmodifiable list of children.
   *
   * @return the unmodifiable list of children
   * @since 4.0.0
  */
  children(): Component[];
  /**
   * Gets the style of this component.
   *
   * @return the style of this component
   * @since 4.0.0
  */
  style(): Style;
  /**
   * Finds and replaces any text with this or child {@link Component}s using the configured options.
   *
   * @param configurer the configurer
   * @return a modified copy of this component
   * @since 4.2.0
  */
  replaceText(configurer: Consumer<net_kyori_adventure_text_TextReplacementConfig_Builder>): Component;
  /**
   * Finds and replaces any text with this or child {@link Component}s using the configured options.
   *
   * @param configurer the configurer
   * @return a modified copy of this component
   * @since 4.2.0
  */
  replaceText(config: TextReplacementConfig): Component;
  equals(other: any | null): boolean;
  hashCode(): number;
  toString(): string;
  /**
   * Sets the list of children.
   *
   * The contents of `children` will be copied.
   *
   * @param children the children
   * @return a component with the children set
   * @since 4.0.0
  */
  children(children: ComponentLike[]): Component;
  /**
   * Sets the style of this component.
   *
   * @param style the style
   * @return a component
   * @since 4.0.0
  */
  style(style: Style): Component;
  /**
   * Sets the style of this component.
   *
   * @param consumer the style consumer
   * @return a component
   * @since 4.0.0
  */
  style(consumer: Consumer<net_kyori_adventure_text_format_Style_Builder>): Component;
  /**
   * Sets the style of this component.
   *
   * @param consumer the style consumer
   * @param strategy the merge strategy
   * @return a component
   * @since 4.0.0
  */
  style(consumer: Consumer<net_kyori_adventure_text_format_Style_Builder>, strategy: Strategy): Component;
  /**
   * Sets the style of this component.
   *
   * @param style the style
   * @return a component
   * @since 4.0.0
  */
  style(style: net_kyori_adventure_text_format_Style_Builder): Component;
  /**
   * Finds and replaces text within any {@link Component}s using a string literal.
   *
   * @param search a string literal
   * @param replacement a {@link ComponentLike} to replace each match
   * @return a modified copy of this component
   * @since 4.0.0
   * @deprecated for removal since 4.2.0, use {@link #replaceText(Consumer)} or {@link #replaceText(TextReplacementConfig)} instead.
  */
  replaceText(search: string, replacement: ComponentLike | null): Component;
  /**
   * Finds and replaces text within any {@link TextComponent}s using a regex pattern.
   *
   * @param pattern a regex pattern
   * @param replacement a function to replace each match
   * @return a modified copy of this component
   * @since 4.0.0
   * @deprecated for removal since 4.2.0, use {@link #replaceText(Consumer)} or {@link #replaceText(TextReplacementConfig)} instead.
  */
  replaceText(pattern: Pattern, replacement: Function<net_kyori_adventure_text_TextComponent_Builder, ComponentLike>): Component;
  /**
   * Finds and replaces `n` instances of text within any {@link TextComponent}s using a string literal.
   *
   * @param search a string literal
   * @param replacement a {@link ComponentLike} to replace the first match
   * @param numberOfReplacements the amount of matches that should be replaced
   * @return a modified copy of this component
   * @since 4.0.0
   * @deprecated for removal since 4.2.0, use {@link #replaceText(Consumer)} or {@link #replaceText(TextReplacementConfig)} instead.
  */
  replaceText(search: string, replacement: ComponentLike | null, numberOfReplacements: number): Component;
  /**
   * Finds and replaces `n` instances of text within any {@link TextComponent}s using a regex pattern.
   *
   * @param pattern a regex pattern
   * @param replacement a function to replace each match
   * @param numberOfReplacements the amount of matches that should be replaced
   * @return a modified copy of this component
   * @since 4.0.0
   * @deprecated for removal since 4.2.0, use {@link #replaceText(Consumer)} or {@link #replaceText(TextReplacementConfig)} instead.
  */
  replaceText(pattern: Pattern, replacement: Function<net_kyori_adventure_text_TextComponent_Builder, ComponentLike>, numberOfReplacements: number): Component;
  /**
   * Finds and replaces `n` instances of text within any {@link TextComponent}s using a string literal.
   *
   * Utilises an {@link IntFunction2} to determine if each instance should be replaced.
   *
   * @param search a string literal
   * @param replacement a {@link ComponentLike} to replace the first match
   * @param fn a function of (index, replaced) used to determine if matches should be replaced, where "replaced" is the number of successful replacements
   * @return a modified copy of this component
   * @since 4.0.0
   * @deprecated for removal since 4.2.0, use {@link #replaceText(Consumer)} or {@link #replaceText(TextReplacementConfig)} instead.
  */
  replaceText(search: string, replacement: ComponentLike | null, fn: IntFunction2<PatternReplacementResult>): Component;
  /**
   * Finds and replaces text using a regex pattern.
   *
   * Utilises an {@link IntFunction2} to determine if each instance should be replaced.
   *
   * @param pattern a regex pattern
   * @param replacement a function to replace the first match
   * @param fn a function of (index, replaced) used to determine if matches should be replaced, where "replaced" is the number of successful replacements
   * @return a modified copy of this component
   * @since 4.0.0
   * @deprecated for removal since 4.2.0, use {@link #replaceText(Consumer)} or {@link #replaceText(TextReplacementConfig)} instead.
  */
  replaceText(pattern: Pattern, replacement: Function<net_kyori_adventure_text_TextComponent_Builder, ComponentLike>, fn: IntFunction2<PatternReplacementResult>): Component;
}
/**
 * A {@link Component} that displays the client's current keybind for the supplied action.
 *
 * This component takes:
 * 
 *   keybind
 *   a keybind identifier for a action. (e.g key.inventory, key.jump etc..)
 * 
 *
 * @since 4.0.0
 * @sinceMinecraft 1.12
*/
export class KeybindComponent extends BuildableComponent<KeybindComponent, net_kyori_adventure_text_KeybindComponent_Builder> {
  /**
   * Gets the keybind.
   *
   * @return the keybind
   * @since 4.0.0
  */
  keybind(): string;
  /**
   * Sets the keybind.
   *
   * @param keybind the keybind
   * @return a copy of this component
   * @since 4.0.0
  */
  keybind(keybind: string): KeybindComponent;
  /**
   * Creates a keybind component by applying configuration from `consumer`.
   *
   * @param consumer the builder configurator
   * @return the keybind component
   * @since 4.0.0
  */
  static keybind(consumer: Consumer<any>): KeybindComponent;
  /**
   * Creates a keybind component with a keybind and styling.
   *
   * @param keybind the keybind
   * @param style the style
   * @return the keybind component
   * @since 4.0.0
  */
  static keybind(keybind: string, style: Style): KeybindComponent;
  /**
   * Creates a keybind component with a keybind, and optional color.
   *
   * @param keybind the keybind
   * @param color the color
   * @return the keybind component
   * @since 4.0.0
  */
  static keybind(keybind: string, color: TextColor | null): KeybindComponent;
  /**
   * Creates a keybind component with a keybind, and optional color and decorations.
   *
   * @param keybind the keybind
   * @param color the color
   * @param decorations the decorations
   * @return the keybind component
   * @since 4.0.0
  */
  static keybind(keybind: string, color: TextColor | null, ...decorations: TextDecoration[]): KeybindComponent;
  /**
   * Creates a keybind component with a keybind, and optional color and decorations.
   *
   * @param keybind the keybind
   * @param color the color
   * @param decorations the decorations
   * @return the keybind component
   * @since 4.0.0
  */
  static keybind(keybind: string, color: TextColor | null, decorations: Set<TextDecoration>): KeybindComponent;
}
export interface KeybindComponent extends BuildableComponent<KeybindComponent, net_kyori_adventure_text_KeybindComponent_Builder>, ScopedComponent<KeybindComponent> {}
/**
 * Some magic to change return types.
 *
 * @param  the component type
 * @since 4.0.0
*/
export class ScopedComponent<C> extends Component {
  children(children: ComponentLike[]): C;
  style(style: Style): C;
  style(style: Consumer<net_kyori_adventure_text_format_Style_Builder>): C;
  style(style: net_kyori_adventure_text_format_Style_Builder): C;
  mergeStyle(that: Component): C;
  mergeStyle(that: Component, ...merges: Merge[]): C;
  append(component: Component): C;
  append(component: ComponentLike): C;
  append(builder: ComponentBuilder<any, any>): C;
  mergeStyle(that: Component, merges: Set<Merge>): C;
  color(color: TextColor | null): C;
  colorIfAbsent(color: TextColor | null): C;
  decorate(decoration: TextDecoration): Component;
  decoration(decoration: TextDecoration, flag: boolean): C;
  decoration(decoration: TextDecoration, state: State): C;
  clickEvent(event: ClickEvent | null): C;
  hoverEvent(event: HoverEventSource<any> | null): C;
  insertion(insertion: string | null): C;
  /**
   * Gets the unmodifiable list of children.
   *
   * @return the unmodifiable list of children
   * @since 4.0.0
  */
  children(): Component[];
  /**
   * Gets the style of this component.
   *
   * @return the style of this component
   * @since 4.0.0
  */
  style(): Style;
  /**
   * Sets the style of this component.
   *
   * @param consumer the style consumer
   * @param strategy the merge strategy
   * @return a component
   * @since 4.0.0
  */
  style(consumer: Consumer<net_kyori_adventure_text_format_Style_Builder>, strategy: Strategy): Component;
  /**
   * Gets the color of this component.
   *
   * @return the color of this component
   * @since 4.0.0
  */
  color(): TextColor | null;
  /**
   * Gets the state of a decoration on this component.
   *
   * @param decoration the decoration
   * @return {@link TextDecoration.State#TRUE} if this component has the decoration,
   *     {@link TextDecoration.State#FALSE} if this component does not have the decoration,
   *     and {@link TextDecoration.State#NOT_SET} if not set
   * @since 4.0.0
  */
  decoration(decoration: TextDecoration): State;
  /**
   * Gets the click event of this component.
   *
   * @return the click event
   * @since 4.0.0
  */
  clickEvent(): ClickEvent | null;
  /**
   * Gets the hover event of this component.
   *
   * @return the hover event
   * @since 4.0.0
  */
  hoverEvent(): HoverEvent<any> | null;
  /**
   * Gets the string to be inserted when this component is shift-clicked.
   *
   * @return the insertion string
   * @since 4.0.0
  */
  insertion(): string | null;
}
/**
 * Something that can be applied to a {@link ComponentBuilder}.
 *
 * @see StyleBuilderApplicable
 * @since 4.0.0
*/
export class ComponentBuilderApplicable {
  /**
   * Applies to `component`.
   *
   * @param component the component builder
   * @since 4.0.0
  */
  componentBuilderApply(component: ComponentBuilder<any, any>): void;
}
/**
 * A component that can display NBT fetched from different locations, optionally trying to interpret the NBT as JSON
 * using the `net.kyori.adventure.text.serializer.gson.GsonComponentSerializer` to convert the JSON to a {@link Component}.
 * Sending interpreted NBT to the chat would be similar to using `/tellraw`.
 *
 * This component consists of:
 * 
 *   nbtPath
 *   a path to specify which parts of the nbt you want displayed(examples).
 *   interpret
 *   a boolean telling adventure if the fetched NBT value should be parsed as JSON
 * 
 *
 * This component is rendered serverside and can therefore receive platform-defined
 * context. See the documentation for your respective
 * platform for more info
 *
 * @since 4.0.0
 * @sinceMinecraft 1.14
*/
export class NBTComponent<C, B> extends BuildableComponent<C, B> {
  /**
   * Gets the NBT path.
   *
   * @return the NBT path
   * @since 4.0.0
  */
  nbtPath(): string;
  /**
   * Sets the NBT path.
   *
   * @param nbtPath the NBT path
   * @return an NBT component
   * @since 4.0.0
  */
  nbtPath(nbtPath: string): C;
  /**
   * Gets if we should be interpreting.
   *
   * @return if we should be interpreting
   * @since 4.0.0
  */
  interpret(): boolean;
  /**
   * Sets if we should be interpreting.
   *
   * @param interpret if we should be interpreting.
   * @return an NBT component
   * @since 4.0.0
  */
  interpret(interpret: boolean): C;
  /**
   * Gets the separator.
   *
   * @return the separator
   * @since 4.8.0
  */
  separator(): Component | null;
  /**
   * Sets the separator.
   *
   * @param separator the separator
   * @return the separator
   * @since 4.8.0
  */
  separator(separator: ComponentLike | null): C;
}
/**
 * A result for {@link Component#replaceText(TextReplacementConfig)}  pattern-based replacements}.
 *
 * @since 4.0.0
*/
export class PatternReplacementResult extends Enum<PatternReplacementResult> {
  /**
   * Replace the current match.
   *
   * @since 4.0.0
  */
  static readonly REPLACE: PatternReplacementResult;
  /**
   * Skip the current match, but continue searching for others.
   *
   * @since 4.0.0
  */
  static readonly CONTINUE: PatternReplacementResult;
  /**
   * Stop matching.
   *
   * @since 4.0.0
  */
  static readonly STOP: PatternReplacementResult;
  static valueOf(name: string): PatternReplacementResult;
  static values(): PatternReplacementResult[];
}
/**
 * An NBT component builder.
 *
 * @since 4.0.0
*/
export class NBTComponentBuilder<C, B> extends ComponentBuilder<C, B> {
  /**
   * Sets the NBT path content.
   *
   * @param nbtPath the NBT path
   * @return this builder
   * @since 4.0.0
  */
  nbtPath(nbtPath: string): B;
  /**
   * Sets whether to interpret.
   *
   * @param interpret if we should be interpreting
   * @return this builder
   * @since 4.0.0
  */
  interpret(interpret: boolean): B;
  /**
   * Sets the separator.
   *
   * @param separator the separator
   * @return this builder
   * @since 4.8.0
  */
  separator(separator: ComponentLike | null): B;
}

}
declare module 'net.kyori.adventure.bossbar.BossBar' {
import { Component } from 'net.kyori.adventure.text';
import { Set } from 'java.util';
import { Enum } from 'java.lang';
import { Index } from 'net.kyori.adventure.util';
import { BossBar } from 'net.kyori.adventure.bossbar';
/**
 * A listener for changes that happen on a {@link BossBar}.
 *
 * @since 4.0.0
*/
export class Listener {
  /**
   * Bossbar name changed.
   *
   * @param bar the bossbar
   * @param oldName the old name
   * @param newName the new name
   * @since 4.0.0
  */
  bossBarNameChanged(bar: BossBar, oldName: Component, newName: Component): void;
  /**
   * Bossbar progress changed.
   *
   * @param bar the bossbar
   * @param oldProgress the old progress
   * @param newProgress the new progress
   * @since 4.0.0
  */
  bossBarProgressChanged(bar: BossBar, oldProgress: number, newProgress: number): void;
  /**
   * Bossbar progress changed.
   *
   * @param bar the bossbar
   * @param oldProgress the old progress
   * @param newProgress the new progress
   * @deprecated for removal since 4.2.0, use {@link #bossBarProgressChanged(BossBar, float, float)}
   * @since 4.0.0
  */
  bossBarPercentChanged(bar: BossBar, oldProgress: number, newProgress: number): void;
  /**
   * Bossbar color changed.
   *
   * @param bar the bossbar
   * @param oldColor the old color
   * @param newColor the new color
   * @since 4.0.0
  */
  bossBarColorChanged(bar: BossBar, oldColor: Color, newColor: Color): void;
  /**
   * Bossbar overlay changed.
   *
   * @param bar the bossbar
   * @param oldOverlay the old overlay
   * @param newOverlay the new overlay
   * @since 4.0.0
  */
  bossBarOverlayChanged(bar: BossBar, oldOverlay: Overlay, newOverlay: Overlay): void;
  /**
   * Bossbar flags changed.
   *
   * @param bar the bossbar
   * @param flagsAdded the flags added to the bossbar
   * @param flagsRemoved the flags removed from the bossbar
   * @since 4.0.0
  */
  bossBarFlagsChanged(bar: BossBar, flagsAdded: Set<Flag>, flagsRemoved: Set<Flag>): void;
}
/**
 * One of the colors the bar component of a {@link BossBar}.
 *
 * This color does not affect the color of the bar's name text.
 *
 * The exact color for each named value may vary slightly based on game version.
 *
 * @since 4.0.0
*/
export class Color extends Enum<Color> {
  /**
   * Pink.
   *
   * @since 4.0.0
   * @sinceMinecraft 1.9
  */
  static readonly PINK: Color;
  /**
   * Blue.
   *
   * @since 4.0.0
   * @sinceMinecraft 1.9
  */
  static readonly BLUE: Color;
  /**
   * Red.
   *
   * @since 4.0.0
   * @sinceMinecraft 1.9
  */
  static readonly RED: Color;
  /**
   * Green.
   *
   * @since 4.0.0
   * @sinceMinecraft 1.9
  */
  static readonly GREEN: Color;
  /**
   * Yellow.
   *
   * @since 4.0.0
   * @sinceMinecraft 1.9
  */
  static readonly YELLOW: Color;
  /**
   * Purple.
   *
   * @since 4.0.0
  */
  static readonly PURPLE: Color;
  /**
   * White.
   *
   * @since 4.0.0
   * @sinceMinecraft 1.9
  */
  static readonly WHITE: Color;
  static valueOf(name: string): Color;
  static values(): Color[];
  /**
   * The name map.
   *
   * @since 4.0.0
  */
  static readonly NAMES: Index<string, Color>;
}
/**
 * Flags to control toggleable effects of a bossbar.
 *
 * @since 4.0.0
*/
export class Flag extends Enum<Flag> {
  /**
   * If the screen should be darkened.
   *
   * @since 4.0.0
   * @sinceMinecraft 1.9
  */
  static readonly DARKEN_SCREEN: Flag;
  /**
   * If boss music should be played.
   *
   * @since 4.0.0
   * @sinceMinecraft 1.9
  */
  static readonly PLAY_BOSS_MUSIC: Flag;
  /**
   * If world fog should be created.
   *
   * @since 4.0.0
   * @sinceMinecraft 1.9
  */
  static readonly CREATE_WORLD_FOG: Flag;
  static valueOf(name: string): Flag;
  static values(): Flag[];
  /**
   * The name map.
   *
   * These names are not "official", but we want to provide them to allow serializers to be consistent.
   *
   * @since 4.0.0
  */
  static readonly NAMES: Index<string, Flag>;
}
/**
 * An overlay on the bar component of a bossbar.
 *
 * @since 4.0.0
*/
export class Overlay extends Enum<Overlay> {
  /**
   * A progress bar.
   *
   * @since 4.0.0
  */
  static readonly PROGRESS: Overlay;
  /**
   * A bar with `6` notches.
   *
   * @since 4.0.0
   * @sinceMinecraft 1.9
  */
  static readonly NOTCHED_6: Overlay;
  /**
   * A bar with `10` notches.
   *
   * @since 4.0.0
   * @sinceMinecraft 1.9
  */
  static readonly NOTCHED_10: Overlay;
  /**
   * A bar with `12` notches.
   *
   * @since 4.0.0
   * @sinceMinecraft 1.9
  */
  static readonly NOTCHED_12: Overlay;
  /**
   * A bar with `20` notches.
   *
   * @since 4.0.0
   * @sinceMinecraft 1.9
  */
  static readonly NOTCHED_20: Overlay;
  static valueOf(name: string): Overlay;
  static values(): Overlay[];
  /**
   * The name map.
   *
   * @since 4.0.0
  */
  static readonly NAMES: Index<string, Overlay>;
}

}
declare module 'net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer' {
import { PlainTextComponentSerializer } from 'net.kyori.adventure.text.serializer.plain';
import { Builder as net_kyori_adventure_util_Buildable_Builder } from 'net.kyori.adventure.util.Buildable';
import { Consumer } from 'java.util.function';
import { ComponentFlattener } from 'net.kyori.adventure.text.flattener';
/**
 * A builder for the plain-text component serializer.
 *
 * @since 4.8.0
*/
export class Builder extends net_kyori_adventure_util_Buildable_Builder<PlainTextComponentSerializer> {
  /**
   * Set the component flattener to use.
   *
   * The default flattener is {@link ComponentFlattener#basic()} modified to throw exceptions on unknown component types.
   *
   * @param flattener the new flattener
   * @return this builder
   * @since 4.8.0
  */
  flattener(flattener: ComponentFlattener): Builder;
}
/**
 * A {@link PlainTextComponentSerializer} service provider.
 *
 * @since 4.8.0
*/
export class Provider {
  /**
   * Provides a {@link PlainTextComponentSerializer}.
   *
   * @return a {@link PlainTextComponentSerializer}
   * @since 4.8.0
  */
  plainTextSimple(): PlainTextComponentSerializer;
  /**
   * Completes the building process of {@link Builder}.
   *
   * @return a {@link Consumer}
   * @since 4.8.0
  */
  plainText(): Consumer<Builder>;
}

}
declare module 'net.kyori.adventure' {
/**
 * We're going on an Adventure!
 *
 * @since 4.8.0
*/
export class Adventure {
  /**
   * The namespace.
   *
   * @see Key
   * @since 4.8.0
  */
  static readonly NAMESPACE: string;
}

}
declare module 'net.kyori.adventure.sound.Sound.Source' {
import { Source } from 'net.kyori.adventure.sound.Sound';
/**
 * A provider of sound sources.
 *
 * @since 4.8.0
*/
export class Provider {
  /**
   * Gets the source.
   *
   * @return the source
   * @since 4.8.0
  */
  soundSource(): Source;
}

}
declare module 'net.kyori.adventure.text.serializer.plain' {
import { TextComponent, TranslatableComponent, Component, KeybindComponent } from 'net.kyori.adventure.text';
import { StringBuilder } from 'java.lang';
import { Buildable } from 'net.kyori.adventure.util';
import { Builder } from 'net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer';
import { ComponentSerializer } from 'net.kyori.adventure.text.serializer';
import { Function } from 'java.util.function';
import { Builder as net_kyori_adventure_text_serializer_plain_PlainComponentSerializer_Builder } from 'net.kyori.adventure.text.serializer.plain.PlainComponentSerializer';
/**
 * A plain-text component serializer.
 *
 * Plain does not support more complex features such as, but not limited
 * to, colours, decorations, {@link ClickEvent}, and {@link HoverEvent}.
 *
 * @since 4.8.0
*/
export class PlainTextComponentSerializer extends ComponentSerializer<Component, TextComponent, string> {
  /**
   * A component serializer for plain-based serialization and deserialization.
   *
   * @return serializer instance
   * @since 4.8.0
  */
  static plainText(): PlainTextComponentSerializer;
  /**
   * Create a new builder.
   *
   * @return a new plain serializer builder
   * @since 4.8.0
  */
  static builder(): Builder;
  deserialize(input: string): TextComponent;
  serialize(component: Component): string;
  /**
   * Serializes.
   *
   * @param sb the string builder
   * @param component the component
   * @since 4.8.0
  */
  serialize(sb: StringBuilder, component: Component): void;
  /**
   * Deserialize a component from input of type `R`.
   *
   * @param input the input
   * @return the component
   * @since 4.0.0
  */
  deserialize(input: R): O;
  /**
   * Serializes a component into an output of type `R`.
   *
   * @param component the component
   * @return the output
   * @since 4.0.0
  */
  serialize(component: I): R;
}
export interface PlainTextComponentSerializer extends ComponentSerializer<Component, TextComponent, string>, Buildable<PlainTextComponentSerializer, Builder> {}
/**
 * A plain component serializer.
 *
 * Plain does not support more complex features such as, but not limited
 * to, colours, decorations, {@link ClickEvent}, and {@link HoverEvent}.
 *
 * @deprecated for removal since 4.8.0, use {@link PlainTextComponentSerializer} instead
 * @since 4.0.0
*/
export class PlainComponentSerializer extends ComponentSerializer<Component, TextComponent, string> {
  /**
   * A component serializer for plain-based serialization and deserialization.
   *
   * @return serializer instance
   * @deprecated for removal since 4.8.0, use {@link PlainTextComponentSerializer#plainText()} instead
   * @since 4.0.0
  */
  static plain(): PlainComponentSerializer;
  /**
   * Create a new builder.
   *
   * @return a new plain serializer builder
   * @deprecated for removal since 4.8.0, use {@link PlainTextComponentSerializer#builder()} instead
   * @since 4.7.0
  */
  static builder(): net_kyori_adventure_text_serializer_plain_PlainComponentSerializer_Builder;
  /**
   * Constructs.
   *
   * @since 4.0.0
   * @deprecated for removal since 4.7.0
  */
  constructor();
  /**
   * Constructs.
   *
   * @param keybind the keybind renderer
   * @param translatable the translatable renderer
   * @since 4.0.0
   * @deprecated for removal since 4.7.0, use the builder instead
  */
  constructor(keybind: Function<KeybindComponent, string> | null, translatable: Function<TranslatableComponent, string> | null);
  /**
   * Deserialize a component from input of type `R`.
   *
   * @param input the input
   * @return the component
   * @since 4.0.0
  */
  deserialize(input: string): TextComponent;
  /**
   * Serializes a component into an output of type `R`.
   *
   * @param component the component
   * @return the output
   * @since 4.0.0
  */
  serialize(component: Component): string;
  /**
   * Serializes.
   *
   * @param sb the string builder
   * @param component the component
   * @deprecated for removal since 4.8.0, use {@link PlainTextComponentSerializer#serialize(StringBuilder, Component)} instead
   * @since 4.0.0
  */
  serialize(sb: StringBuilder, component: Component): void;
  /**
   * Create a builder from this thing.
   *
   * @return a builder
   * @since 4.0.0
  */
  toBuilder(): net_kyori_adventure_text_serializer_plain_PlainComponentSerializer_Builder;
  /**
   * Deserialize a component from input of type `R`.
   *
   * @param input the input
   * @return the component
   * @since 4.0.0
  */
  deserialize(input: R): O;
  /**
   * Serializes a component into an output of type `R`.
   *
   * @param component the component
   * @return the output
   * @since 4.0.0
  */
  serialize(component: I): R;
}
export interface PlainComponentSerializer extends ComponentSerializer<Component, TextComponent, string>, Buildable<PlainComponentSerializer, net_kyori_adventure_text_serializer_plain_PlainComponentSerializer_Builder> {}

}
declare module 'net.kyori.adventure.text.TextReplacementConfig' {
import { PatternReplacementResult, ComponentLike, TextReplacementConfig } from 'net.kyori.adventure.text';
import { Builder as net_kyori_adventure_text_TextComponent_Builder } from 'net.kyori.adventure.text.TextComponent';
import { Pattern, MatchResult } from 'java.util.regex';
import { IntFunction2 } from 'net.kyori.adventure.util';
import { Function, BiFunction } from 'java.util.function';
import { Builder as net_kyori_adventure_util_Buildable_Builder } from 'net.kyori.adventure.util.Buildable';
/**
 * A builder for replacement configurations.
 *
 * @since 4.2.0
*/
export class Builder extends net_kyori_adventure_util_Buildable_Builder<TextReplacementConfig> {
  /**
   * Match against the literal string provided.
   *
   * This will NOT be parsed as a regular expression.
   *
   * @param literal the literal string to match
   * @return this builder
   * @since 4.2.0
  */
  matchLiteral(literal: string): Builder;
  /**
   * Compile the provided input as a {@link Pattern} and match against it.
   *
   * @param pattern the regex pattern to match
   * @return this builder
   * @since 4.2.0
  */
  match(pattern: string): Builder;
  /**
   * Match the provided {@link Pattern}.
   *
   * @param pattern pattern to find in any searched components
   * @return this builder
   * @since 4.2.0
  */
  match(pattern: Pattern): Builder;
  /**
   * Only replace the first occurrence of the matched pattern.
   *
   * @return this builder
   * @since 4.2.0
  */
  once(): Builder;
  /**
   * Only replace the first `times` matches of the pattern.
   *
   * @param times maximum amount of matches to process
   * @return this builder
   * @since 4.2.0
  */
  times(times: number): Builder;
  /**
   * Set the function to determine how an individual match should be processed.
   *
   * @param condition a function of `(matchCount, replaced)` used to determine if matches should be replaced, where "matchCount" is the number of matches
   *                  that have been found, including the current one, and "replaced" is the number of successful replacements.
   * @return this builder
   * @since 4.2.0
  */
  condition(condition: IntFunction2<PatternReplacementResult>): Builder;
  /**
   * Set the function to determine how an individual match should be processed.
   *
   * @param condition a function that determines whether a replacement should occur
   * @return this builder
   * @see Condition
   * @since 4.8.0
  */
  condition(condition: Condition): Builder;
  /**
   * Supply a literal replacement for the matched pattern.
   *
   * @param replacement the replacement
   * @return this builder
   * @since 4.2.0
  */
  replacement(replacement: string): Builder;
  /**
   * Supply a literal replacement for the matched pattern.
   *
   * @param replacement the replacement
   * @return this builder
   * @since 4.2.0
  */
  replacement(replacement: ComponentLike | null): Builder;
  /**
   * Supply a function that provides replacements for each match.
   *
   * @param replacement the replacement function
   * @return this builder
   * @since 4.2.0
  */
  replacement(replacement: Function<net_kyori_adventure_text_TextComponent_Builder, ComponentLike>): Builder;
  /**
   * Supply a function that provides replacements for each match, with access to group information.
   *
   * @param replacement the replacement function, taking a match result and a text component pre-populated with
   * @return this builder
   * @since 4.2.0
  */
  replacement(replacement: BiFunction<MatchResult, net_kyori_adventure_text_TextComponent_Builder, ComponentLike>): Builder;
}
/**
 * A function determining whether a certain match should be replaced.
 *
 * @since 4.8.0
*/
export class Condition {
  /**
   * Determine how a single match should be handled.
   *
   * @param result the current match result
   * @param matchCount the number of matches encountered, including this one and matches that were not replaced
   * @param replaced the number of matches that have already been replaced
   * @return whether a certain match should
   * @since 4.8.0
  */
  shouldReplace(result: MatchResult, matchCount: number, replaced: number): PatternReplacementResult;
}

}
declare module 'net.kyori.adventure.text.event.HoverEvent' {
import { Component } from 'net.kyori.adventure.text';
import { Keyed, Key } from 'net.kyori.adventure.key';
import { UUID } from 'java.util';
import { Class } from 'java.lang';
import { Index } from 'net.kyori.adventure.util';
import { BinaryTagHolder } from 'net.kyori.adventure.nbt.api';
import { Renderer } from 'net.kyori.adventure.text.event.HoverEvent.Action';
/**
 * The value of a {@link Action#SHOW_ITEM show_item} hover event.
 *
 * @since 4.0.0
*/
export class ShowItem {
  /**
   * Creates.
   *
   * @param item the item
   * @param count the count
   * @return a `ShowItem`
   * @since 4.0.0
  */
  static of(item: Key, count: number): ShowItem;
  /**
   * Creates.
   *
   * @param item the item
   * @param count the count
   * @return a `ShowItem`
   * @since 4.6.0
  */
  static of(item: Keyed, count: number): ShowItem;
  /**
   * Creates.
   *
   * @param item the item
   * @param count the count
   * @param nbt the nbt
   * @return a `ShowItem`
   * @since 4.0.0
  */
  static of(item: Key, count: number, nbt: BinaryTagHolder | null): ShowItem;
  /**
   * Creates.
   *
   * @param item the item
   * @param count the count
   * @param nbt the nbt
   * @return a `ShowItem`
   * @since 4.6.0
  */
  static of(item: Keyed, count: number, nbt: BinaryTagHolder | null): ShowItem;
  /**
   * Gets the item.
   *
   * @return the item
   * @since 4.0.0
  */
  item(): Key;
  /**
   * Sets the item.
   *
   * @param item the item
   * @return a `ShowItem`
   * @since 4.0.0
  */
  item(item: Key): ShowItem;
  /**
   * Gets the count.
   *
   * @return the count
   * @since 4.0.0
  */
  count(): number;
  /**
   * Sets the count.
   *
   * @param count the count
   * @return a `ShowItem`
   * @since 4.0.0
  */
  count(count: number): ShowItem;
  /**
   * Gets the nbt.
   *
   * @return the nbt
   * @since 4.0.0
  */
  nbt(): BinaryTagHolder | null;
  /**
   * Sets the nbt.
   *
   * @param nbt the nbt
   * @return a `ShowItem`
   * @since 4.0.0
  */
  nbt(nbt: BinaryTagHolder | null): ShowItem;
  equals(other: any | null): boolean;
  hashCode(): number;
  toString(): string;
}
/**
 * The value of a {@link Action#SHOW_ENTITY show_entity} hover event.
 *
 * @since 4.0.0
*/
export class ShowEntity {
  /**
   * Creates.
   *
   * @param type the type
   * @param id the id
   * @return a `ShowEntity`
   * @since 4.0.0
  */
  static of(type: Key, id: UUID): ShowEntity;
  /**
   * Creates.
   *
   * @param type the type
   * @param id the id
   * @return a `ShowEntity`
   * @since 4.6.0
  */
  static of(type: Keyed, id: UUID): ShowEntity;
  /**
   * Creates.
   *
   * @param type the type
   * @param id the id
   * @param name the name
   * @return a `ShowEntity`
   * @since 4.0.0
  */
  static of(type: Key, id: UUID, name: Component | null): ShowEntity;
  /**
   * Creates.
   *
   * @param type the type
   * @param id the id
   * @param name the name
   * @return a `ShowEntity`
   * @since 4.6.0
  */
  static of(type: Keyed, id: UUID, name: Component | null): ShowEntity;
  /**
   * Gets the type.
   *
   * @return the type
   * @since 4.0.0
  */
  type(): Key;
  /**
   * Sets the type.
   *
   * @param type the type
   * @return a `ShowEntity`
   * @since 4.0.0
  */
  type(type: Key): ShowEntity;
  /**
   * Sets the type.
   *
   * @param type the type
   * @return a `ShowEntity`
   * @since 4.6.0
  */
  type(type: Keyed): ShowEntity;
  /**
   * Gets the id.
   *
   * @return the id
   * @since 4.0.0
  */
  id(): UUID;
  /**
   * Sets the id.
   *
   * @param id the id
   * @return a `ShowEntity`
   * @since 4.0.0
  */
  id(id: UUID): ShowEntity;
  /**
   * Gets the name.
   *
   * @return the name
   * @since 4.0.0
  */
  name(): Component | null;
  /**
   * Sets the name.
   *
   * @param name the name
   * @return a `ShowEntity`
   * @since 4.0.0
  */
  name(name: Component | null): ShowEntity;
  equals(other: any | null): boolean;
  hashCode(): number;
  toString(): string;
}
/**
 * An enumeration of hover event actions.
 *
 * @since 4.0.0
*/
export class Action<V> {
  /**
   * Shows a {@link Component} when hovered over.
   *
   * @since 4.0.0
  */
  static readonly SHOW_TEXT: Action<Component>;
  /**
   * Shows an item instance when hovered over.
   *
   * @since 4.0.0
  */
  static readonly SHOW_ITEM: Action<ShowItem>;
  /**
   * Shows an entity when hovered over.
   *
   * @since 4.0.0
  */
  static readonly SHOW_ENTITY: Action<ShowEntity>;
  /**
   * The name map.
   *
   * @since 4.0.0
  */
  static readonly NAMES: Index<string, Action<any>>;
  /**
   * Gets the value type.
   *
   * @return the value type
   * @since 4.0.0
  */
  type(): Class<V>;
  /**
   * Tests if this action is readable.
   *
   * @return `true` if this action is readable, `false` if this
   *     action is not readable
   * @since 4.0.0
  */
  readable(): boolean;
  toString(): string;
}

}
declare module 'net.kyori.adventure.text.KeybindComponent' {
import { KeybindComponent, ComponentBuilder } from 'net.kyori.adventure.text';
/**
 * A keybind component builder.
 *
 * @since 4.0.0
*/
export class Builder extends ComponentBuilder<KeybindComponent, Builder> {
  /**
   * Sets the keybind.
   *
   * @param keybind the keybind
   * @return this builder
   * @since 4.0.0
  */
  keybind(keybind: string): Builder;
}

}
declare module 'net.kyori.adventure.text.flattener.ComponentFlattener' {
import { Component } from 'net.kyori.adventure.text';
import { Class } from 'java.lang';
import { Builder as net_kyori_adventure_util_Buildable_Builder } from 'net.kyori.adventure.util.Buildable';
import { Function, Consumer, BiConsumer } from 'java.util.function';
import { ComponentFlattener } from 'net.kyori.adventure.text.flattener';
/**
 * A builder for a component flattener.
 *
 * A new builder will start out empty, providing empty strings for all component types.
 *
 * @since 4.7.0
*/
export class Builder extends net_kyori_adventure_util_Buildable_Builder<ComponentFlattener> {
  /**
   * Register a type of component to be handled.
   *
   * @param type the component type
   * @param converter the converter to map that component to a string
   * @param  component type
   * @return this builder
   * @see #complexMapper(Class, BiConsumer) for component types that are too complex to be directly rendered to a string
   * @since 4.7.0
  */
  mapper<T>(type: Class<T>, converter: Function<T, string>): Builder;
  /**
   * Register a type of component that needs to be flattened to an intermediate stage.
   *
   * @param type the component type
   * @param converter a provider of contained Components
   * @param  component type
   * @return this builder
   * @since 4.7.0
  */
  complexMapper<T>(type: Class<T>, converter: BiConsumer<T, Consumer<Component>>): Builder;
  /**
   * Register a handler for unknown component types.
   *
   * This will be called if no other converter can be found.
   *
   * @param converter the converter, may be null to ignore unknown components
   * @return this builder
   * @since 4.7.0
  */
  unknownMapper(converter: Function<Component, string> | null): Builder;
}

}
declare module 'net.kyori.adventure.text.format.TextDecoration' {
import { Enum } from 'java.lang';
/**
 * A state that a {@link TextDecoration} can be in.
 *
 * @since 4.0.0
*/
export class State extends Enum<State> {
  /**
   * State describing the absence of a value.
   *
   * @since 4.0.0
  */
  static readonly NOT_SET: State;
  /**
   * State describing a `false` value.
   *
   * @since 4.0.0
  */
  static readonly FALSE: State;
  /**
   * State describing a `true` value.
   *
   * @since 4.0.0
  */
  static readonly TRUE: State;
  static valueOf(name: string): State;
  static values(): State[];
  toString(): string;
  /**
   * Gets a state from a `boolean`.
   *
   * @param flag the boolean
   * @return the state
   * @since 4.0.0
  */
  static byBoolean(flag: boolean): State;
}

}
declare module 'net.kyori.adventure.util.Buildable' {
/**
 * A builder.
 *
 * @param  the type to be built
 * @since 4.0.0
*/
export class Builder<R> {
  /**
   * Builds.
   *
   * @return the built thing
   * @since 4.0.0
  */
  build(): R;
}

}
declare module 'net.kyori.adventure.title' {
import { Component } from 'net.kyori.adventure.text';
import { Times } from 'net.kyori.adventure.title.Title';
/**
 * Represents an in-game title, which can be displayed across the centre of the screen.
 *
 * @see Times
 * @since 4.0.0
*/
export class Title {
  /**
   * The default times.
   *
   * @since 4.0.0
  */
  static readonly DEFAULT_TIMES: Times;
  /**
   * Creates a title.
   *
   * @param title the title
   * @param subtitle the subtitle
   * @return the title
   * @since 4.0.0
  */
  static title(title: Component, subtitle: Component): Title;
  /**
   * Creates a title.
   *
   * @param title the title
   * @param subtitle the subtitle
   * @param times the times
   * @return the title
   * @since 4.0.0
  */
  static title(title: Component, subtitle: Component, times: Times | null): Title;
  /**
   * Gets the title.
   *
   * @return the title
   * @since 4.0.0
  */
  title(): Component;
  /**
   * Gets the subtitle.
   *
   * @return the subtitle
   * @since 4.0.0
  */
  subtitle(): Component;
  /**
   * Gets the times.
   *
   * @return the times
   * @since 4.0.0
  */
  times(): Times | null;
}

}
declare module 'net.kyori.adventure.text.BlockNBTComponent.WorldPos.Coordinate' {
import { Enum } from 'java.lang';
/**
 * The type of a coordinate.
 *
 * @since 4.0.0
*/
export class Type extends Enum<Type> {
  /**
   * An absolute coordinate.
   *
   * @since 4.0.0
  */
  static readonly ABSOLUTE: Type;
  /**
   * A relative coordinate.
   *
   * @since 4.0.0
  */
  static readonly RELATIVE: Type;
  static valueOf(name: string): Type;
  static values(): Type[];
}

}
declare module 'net.kyori.adventure.pointer' {
import { Builder } from 'net.kyori.adventure.pointer.Pointers';
import { Key } from 'net.kyori.adventure.key';
import { Class } from 'java.lang';
import { Optional } from 'java.util';
import { Buildable } from 'net.kyori.adventure.util';
import { Supplier } from 'java.util.function';
/**
 * Something that can retrieve values based on a given {@link Pointer}.
 *
 * @since 4.8.0
*/
export class Pointered {
  /**
   * Gets the value of `pointer`.
   *
   * @param pointer the pointer
   * @param  the type
   * @return the value
   * @since 4.8.0
  */
  get<T>(pointer: Pointer<T>): Optional<T>;
  /**
   * Gets the value of `pointer`.
   *
   * If this `Audience` is unable to provide a value for `pointer`, `defaultValue` will be returned.
   *
   * @param pointer the pointer
   * @param defaultValue the default value
   * @param  the type
   * @return the value
   * @since 4.8.0
  */
  getOrDefault<T>(pointer: Pointer<T>, defaultValue: T | null): T | null;
  /**
   * Gets the value of `pointer`.
   *
   * If this `Audience` is unable to provide a value for `pointer`, the value supplied by `defaultValue` will be returned.
   *
   * @param pointer the pointer
   * @param defaultValue the default value supplier
   * @param  the type
   * @return the value
   * @since 4.8.0
  */
  getOrDefaultFrom<T>(pointer: Pointer<T>, defaultValue: Supplier<T>): T;
  /**
   * Gets the pointers for this object.
   *
   * @return the pointers
   * @since 4.8.0
  */
  pointers(): Pointers;
}
/**
 * A collection of {@link Pointer pointers}.
 *
 * @since 4.8.0
*/
export class Pointers extends Buildable<Pointers, Builder> {
  /**
   * Gets an empty pointers collection.
   *
   * @return the pointers
   * @since 4.8.0
  */
  static empty(): Pointers;
  /**
   * Gets a new pointers builder.
   *
   * @return the builder
   * @see Builder
   * @since 4.8.0
  */
  static builder(): Builder;
  /**
   * Gets the value of `pointer`.
   *
   * @param pointer the pointer
   * @param  the type
   * @return the value
   * @since 4.8.0
  */
  get<T>(pointer: Pointer<T>): Optional<T>;
  /**
   * Gets the value of `pointer`.
   *
   * If a value for `pointer` is unable to be provided, `defaultValue` will be returned.
   *
   * @param pointer the pointer
   * @param defaultValue the default value
   * @param  the type
   * @return the value
   * @since 4.8.0
  */
  getOrDefault<T>(pointer: Pointer<T>, defaultValue: T | null): T | null;
  /**
   * Gets the value of `pointer`.
   *
   * If a value for `pointer` is unable to be provided, the value supplied by `defaultValue` will be returned.
   *
   * @param pointer the pointer
   * @param defaultValue the default value supplier
   * @param  the type
   * @return the value
   * @since 4.8.0
  */
  getOrDefaultFrom<T>(pointer: Pointer<T>, defaultValue: Supplier<T>): T;
  /**
   * Checks if a given pointer is supported.
   *
   * This will return `true` when a mapping for the provided pointer exists, even if the value for the pointer is `null`.
   *
   * @param pointer the pointer
   * @param  the type
   * @return if the pointer is supported
   * @since 4.8.0
  */
  supports<T>(pointer: Pointer<T>): boolean;
}
/**
 * A pointer to a resource.
 *
 * @param  the value type
 * @since 4.8.0
*/
export class Pointer<V> {
  /**
   * Creates a pointer.
   *
   * @param type the value type
   * @param key the key
   * @param  the value type
   * @return the pointer
   * @since 4.8.0
  */
  static pointer<V>(type: Class<V>, key: Key): Pointer<V>;
  /**
   * Gets the value type.
   *
   * @return the value type
   * @since 4.8.0
  */
  type(): Class<V>;
  /**
   * Gets the key.
   *
   * @return the key
   * @since 4.8.0
  */
  key(): Key;
}

}
declare module 'net.kyori.adventure.text.serializer.plain.PlainComponentSerializer' {
import { PlainComponentSerializer } from 'net.kyori.adventure.text.serializer.plain';
import { Builder as net_kyori_adventure_util_Buildable_Builder } from 'net.kyori.adventure.util.Buildable';
import { ComponentFlattener } from 'net.kyori.adventure.text.flattener';
/**
 * A builder for the plain component serializer.
 *
 * @deprecated for removal since 4.8.0, use {@link PlainTextComponentSerializer.Builder} instead
 * @since 4.7.0
*/
export class Builder extends net_kyori_adventure_util_Buildable_Builder<PlainComponentSerializer> {
  /**
   * Set the component flattener to use.
   *
   * The default flattener is {@link ComponentFlattener#basic()} modified to throw exceptions on unknown component types.
   *
   * @param flattener the new flattener
   * @return this builder
   * @deprecated for removal since 4.8.0, use {@link PlainTextComponentSerializer.Builder#flattener(ComponentFlattener)} instead
   * @since 4.7.0
  */
  flattener(flattener: ComponentFlattener): Builder;
}

}
declare module 'net.kyori.adventure.translation' {
import { Component } from 'net.kyori.adventure.text';
import { Key } from 'net.kyori.adventure.key';
import { MessageFormat } from 'java.text';
import { Iterable } from 'java.lang';
import { Locale, Set, ResourceBundle, Map } from 'java.util';
import { Pattern } from 'java.util.regex';
import { TranslatableComponentRenderer } from 'net.kyori.adventure.text.renderer';
import { Function } from 'java.util.function';
import { Path } from 'java.nio.file';
/**
 * A global source of translations. The global source is the default source used by adventure platforms
 * when rendering a {@link TranslatableComponent} to an {@link Audience}.
 *
 * To add your translations to this source, use `GlobalTranslator#get()#addSource(Translator)`
 * with a {@link TranslationRegistry} or your own implementation of a {@link Translator}.
 *
 * @since 4.0.0
*/
export class GlobalTranslator extends Translator {
  /**
   * Gets the global translation source.
   *
   * @return the source
   * @since 4.0.0
  */
  static get(): GlobalTranslator;
  /**
   * Gets a renderer which uses the global source for translating.
   *
   * @return a renderer
   * @since 4.0.0
  */
  static renderer(): TranslatableComponentRenderer<Locale>;
  /**
   * Renders a component using the {@link #renderer() global renderer}.
   *
   * @param component the component to render
   * @param locale the locale to use when rendering
   * @return the rendered component
   * @since 4.0.0
  */
  static render(component: Component, locale: Locale): Component;
  /**
   * Gets the sources.
   *
   * @return the sources
   * @since 4.0.0
  */
  sources(): Iterable<Translator>;
  /**
   * Adds a translation source.
   *
   * Duplicate sources will be ignored.
   *
   * @param source the source
   * @return `true` if registered, `false` otherwise
   * @throws IllegalArgumentException if source is {@link GlobalTranslator}
   * @since 4.0.0
  */
  addSource(source: Translator): boolean;
  /**
   * Removes a translation source.
   *
   * @param source the source to unregister
   * @return `true` if unregistered, `false` otherwise
   * @since 4.0.0
  */
  removeSource(source: Translator): boolean;
}
/**
 * Something that has a translation key.
 *
 * @since 4.8.0
*/
export class Translatable {
  /**
   * Gets the translation key.
   *
   * @return the translation key
   * @since 4.8.0
  */
  translationKey(): string;
}
/**
 * A message format translator.
 *
 * To see how to create a {@link Translator} with a {@link ResourceBundle}
 * see {@link TranslationRegistry#registerAll(Locale, ResourceBundle, boolean)}
 *
 * After creating a {@link Translator} you can add it to the {@link GlobalTranslator}
 * to enable automatic translations by the platforms.
 *
 * @see TranslationRegistry
 * @since 4.0.0
*/
export class Translator {
  /**
   * Parses a {@link Locale} from a {@link String}.
   *
   * @param string the string
   * @return a locale
   * @since 4.0.0
  */
  static parseLocale(string: string): Locale | null;
  /**
   * A key identifying this translation source.
   *
   * Intended to be used for display to users.
   *
   * @return an identifier for this translation source
   * @since 4.0.0
  */
  name(): Key;
  /**
   * Gets a message format from a key and locale.
   *
   * @param locale a locale
   * @param key a translation key
   * @return a message format or `null` to skip translation
   * @since 4.0.0
  */
  translate(key: string, locale: Locale): MessageFormat | null;
}
/**
 * A registry of translations. Used to register localized strings for translation keys. The registry can be submitted
 * to the {@link GlobalTranslator} or can translate manually through {@link #translate(String, Locale)}.
 *
 * The recommended way to register translations is through {@link #registerAll(Locale, ResourceBundle, boolean)}
 *
 * @since 4.0.0
*/
export class TranslationRegistry extends Translator {
  /**
   * A pattern which matches a single quote.
   *
   * @since 4.0.0
  */
  static readonly SINGLE_QUOTE_PATTERN: Pattern;
  /**
   * Creates a new standalone translation registry.
   *
   * @return a translation registry
   * @since 4.0.0
  */
  static create(name: Key): TranslationRegistry;
  /**
   * Checks if any translations are explicitly registered for the specified key.
   *
   * @param key a translation key
   * @return whether the registry contains a value for the translation key
   * @since 4.7.0
  */
  contains(key: string): boolean;
  /**
   * Gets a message format from a key and locale.
   *
   * If a translation for `locale` is not found, we will then try `locale` without a country code, and then finally fallback to a default locale.
   *
   * @param locale a locale
   * @param key a translation key
   * @return a message format or `null` to skip translation
   * @since 4.0.0
  */
  translate(key: string, locale: Locale): MessageFormat | null;
  /**
   * Sets the default locale used by this registry.
   *
   * @param locale the locale to use a default
   * @since 4.0.0
  */
  defaultLocale(locale: Locale): void;
  /**
   * Registers a translation.
   *
   *    *   final TranslationRegistry registry;
   *   registry.register("example.hello", Locale.US, new MessageFormat("Hi, {0}. How are you?"));
   * 
   *
   * @param key a translation key
   * @param locale a locale
   * @param format a translation format
   * @throws IllegalArgumentException if the translation key is already exists
   * @since 4.0.0
  */
  register(key: string, locale: Locale, format: MessageFormat): void;
  /**
   * Registers a map of translations.
   *
   *    *   final TranslationRegistry registry;
   *   final Map<String, MessageFormat> translations;
   *
   *   translations.put("example.greeting", new MessageFormat("Greetings {0}. Doing ok?));
   *   translations.put("example.goodbye", new MessageFormat("Goodbye {0}. Have a nice day!));
   *
   *   registry.registerAll(Locale.US, translations);
   * 
   *
   * @param locale a locale
   * @param formats a map of translation keys to formats
   * @throws IllegalArgumentException if a translation key is already exists
   * @see #register(String, Locale, MessageFormat)
   * @since 4.0.0
  */
  registerAll(locale: Locale, formats: Map<string, MessageFormat>): void;
  /**
   * Registers a resource bundle of translations.
   *
   * @param locale a locale
   * @param path a path to the resource bundle
   * @param escapeSingleQuotes whether to escape single quotes
   * @throws IllegalArgumentException if a translation key is already exists
   * @see #registerAll(Locale, ResourceBundle, boolean)
   * @since 4.0.0
  */
  registerAll(locale: Locale, path: Path, escapeSingleQuotes: boolean): void;
  /**
   * Registers a resource bundle of translations.
   *
   * It is highly recommended to create your bundle using {@link UTF8ResourceBundleControl} as your bundle control for UTF-8 support - for example:
   *
   *    *   final ResourceBundle bundle = ResourceBundle.getBundle("my_bundle", Locale.GERMANY, UTF8ResourceBundleControl.get());
   *   registry.registerAll(Locale.GERMANY, bundle, false);
   * 
   *
   * @param locale a locale
   * @param bundle a resource bundle
   * @param escapeSingleQuotes whether to escape single quotes
   * @throws IllegalArgumentException if a translation key is already exists
   * @see UTF8ResourceBundleControl
   * @since 4.0.0
  */
  registerAll(locale: Locale, bundle: ResourceBundle, escapeSingleQuotes: boolean): void;
  /**
   * Registers a resource bundle of translations.
   *
   * @param locale a locale
   * @param keys the translation keys to register
   * @param function a function to transform a key into a message format
   * @throws IllegalArgumentException if a translation key is already exists
   * @since 4.0.0
  */
  registerAll(locale: Locale, keys: Set<string>, func: Function<string, MessageFormat>): void;
  /**
   * Unregisters a translation key.
   *
   * @param key a translation key
   * @since 4.0.0
  */
  unregister(key: string): void;
}

}
declare module 'net.kyori.adventure.sound.Sound' {
import { Keyed, Key } from 'net.kyori.adventure.key';
import { Enum } from 'java.lang';
import { Index } from 'net.kyori.adventure.util';
/**
 * The sound source.
 *
 * @since 4.0.0
*/
export class Source extends Enum<Source> {
  static readonly MASTER: Source;
  static readonly MUSIC: Source;
  static readonly RECORD: Source;
  static readonly WEATHER: Source;
  static readonly BLOCK: Source;
  static readonly HOSTILE: Source;
  static readonly NEUTRAL: Source;
  static readonly PLAYER: Source;
  static readonly AMBIENT: Source;
  static readonly VOICE: Source;
  static valueOf(name: string): Source;
  static values(): Source[];
  /**
   * The name map.
   *
   * @since 4.0.0
  */
  static readonly NAMES: Index<string, Source>;
}
/**
 * A sound type.
 *
 * @since 4.0.0
*/
export class Type extends Keyed {
  /**
   * Gets the key.
   *
   * @return the key
   * @since 4.0.0
  */
  key(): Key;
}
/**
 * An emitter of sounds.
 *
 * @see net.kyori.adventure.audience.Audience#playSound(Sound, Emitter)
 * @since 4.8.0
*/
export class Emitter {
  /**
   * An emitter representing the recipient of a sound.
   *
   * When used with {@link net.kyori.adventure.audience.Audience#playSound(Sound, Emitter)}, the sound will be emitted from the recipient of the sound.
   *
   * @return the emitter
   * @since 4.8.0
  */
  static self(): Emitter;
}

}
declare module 'net.kyori.adventure.inventory.Book' {
import { Component } from 'net.kyori.adventure.text';
import { Book } from 'net.kyori.adventure.inventory';
import { Collection } from 'java.util';
import { Builder as net_kyori_adventure_util_Buildable_Builder } from 'net.kyori.adventure.util.Buildable';
/**
 * A builder for a {@link Book}.
 *
 * @since 4.0.0
*/
export class Builder extends net_kyori_adventure_util_Buildable_Builder<Book> {
  /**
   * Set the title.
   *
   * @param title the title
   * @return this
   * @since 4.0.0
  */
  title(title: Component): Builder;
  /**
   * Set the author.
   *
   * @param author the author
   * @return this
   * @since 4.0.0
  */
  author(author: Component): Builder;
  /**
   * Add a page to the book.
   *
   * Each page's length will be limited by the size of the client's book viewer.
   * Any text that does not fit will be truncated clientside.
   *
   * @param page the page
   * @return this
   * @since 4.0.0
  */
  addPage(page: Component): Builder;
  /**
   * Add pages to the book.
   *
   * @param pages pages to add
   * @return this
   * @see #addPage(Component) for details on page values
   * @since 4.0.0
  */
  pages(...pages: Component[]): Builder;
  /**
   * Add pages to the book.
   *
   * @param pages pages to add
   * @return this
   * @see #addPage(Component) for details on page values
   * @since 4.0.0
  */
  pages(pages: Collection<Component>): Builder;
  /**
   * Builds.
   *
   * @return a new book
  */
  build(): Book;
}

}
declare module 'net.kyori.adventure.text.event.ClickEvent' {
import { Enum } from 'java.lang';
import { Index } from 'net.kyori.adventure.util';
/**
 * An enumeration of click event actions.
 *
 * @since 4.0.0
*/
export class Action extends Enum<Action> {
  /**
   * Opens a url when clicked.
   *
   * @since 4.0.0
  */
  static readonly OPEN_URL: Action;
  /**
   * Opens a file when clicked.
   *
   * This action is not readable, and may only be used locally on the client.
   *
   * @since 4.0.0
  */
  static readonly OPEN_FILE: Action;
  /**
   * Runs a command when clicked.
   *
   * @since 4.0.0
  */
  static readonly RUN_COMMAND: Action;
  /**
   * Suggests a command into the chat box.
   *
   * @since 4.0.0
  */
  static readonly SUGGEST_COMMAND: Action;
  /**
   * Changes the page of a book.
   *
   * @since 4.0.0
  */
  static readonly CHANGE_PAGE: Action;
  /**
   * Copies text to the clipboard.
   *
   * @since 4.0.0
   * @sinceMinecraft 1.15
  */
  static readonly COPY_TO_CLIPBOARD: Action;
  static valueOf(name: string): Action;
  static values(): Action[];
  /**
   * The name map.
   *
   * @since 4.0.0
  */
  static readonly NAMES: Index<string, Action>;
  /**
   * Tests if this action is readable.
   *
   * @return `true` if this action is readable, `false` if this
   *     action is not readable
   * @since 4.0.0
  */
  readable(): boolean;
  toString(): string;
}

}
declare module 'net.kyori.adventure.title.Title' {
import { Duration } from 'java.time';
/**
 * Title times.
 *
 * @since 4.0.0
*/
export class Times {
  /**
   * Creates times.
   *
   * @param fadeIn the fade-in time
   * @param stay the stay time
   * @param fadeOut the fade-out time
   * @return times
   * @since 4.0.0
  */
  static of(fadeIn: Duration, stay: Duration, fadeOut: Duration): Times;
  /**
   * Gets the time the title will fade-in.
   *
   * @return the time the title will fade-in
   * @since 4.0.0
  */
  fadeIn(): Duration;
  /**
   * Gets the time the title will stay.
   *
   * @return the time the title will stay
   * @since 4.0.0
  */
  stay(): Duration;
  /**
   * Gets the time the title will fade-out.
   *
   * @return the time the title will fade-out
   * @since 4.0.0
  */
  fadeOut(): Duration;
}

}
declare module 'net.kyori.adventure.util' {
import { Component } from 'net.kyori.adventure.text';
import { Duration } from 'java.time';
import { Locale, Set, Optional, ResourceBundle, List, Map } from 'java.util';
import { Enum, RuntimeException, Throwable, ClassLoader, Class } from 'java.lang';
import { Control } from 'java.util.ResourceBundle';
import { Encoder, Decoder } from 'net.kyori.adventure.util.Codec';
import { Function, Consumer } from 'java.util.function';
/**
 * A combination encoder and decoder.
 *
 * @param  the decoded type
 * @param  the encoded type
 * @param  the exception type
 * @since 4.0.0
*/
export class Codec<D, E, DX, EX> {
  /**
   * Creates a codec.
   *
   * @param decoder the decoder
   * @param encoder the encoder
   * @param  the decoded type
   * @param  the encoded type
   * @param  the decode exception type
   * @param  the encode exception type
   * @return a codec
   * @since 4.0.0
  */
  static of<D, E, DX, EX>(decoder: Decoder<D, E, DX>, encoder: Encoder<D, E, EX>): Codec<D, E, DX, EX>;
  /**
   * Decodes.
   *
   * @param encoded the encoded input
   * @return the decoded value
   * @throws DX if an exception is encountered while decoding
   * @since 4.0.0
  */
  decode(encoded: E): D;
  /**
   * Encodes.
   *
   * @param decoded the decoded value
   * @return the encoded output
   * @throws EX if an exception is encountered while encoding
   * @since 4.0.0
  */
  encode(decoded: D): E;
}
/**
 * A bi-directional map in which keys and values must be unique.
 *
 * @param  the key type
 * @param  the value type
 * @since 4.0.0
*/
export class Index<K, V> {
  /**
   * Creates an index map.
   *
   * @param type the value type
   * @param keyFunction the key function
   * @param  the key type
   * @param  the value type
   * @return the key map
   * @since 4.0.0
  */
  static create<K, V>(type: Class<V>, keyFunction: Function<any, K>): Index<K, V>;
  /**
   * Creates an index map.
   *
   * @param type the value type
   * @param keyFunction the key function
   * @param values the values
   * @param  the key type
   * @param  the value type
   * @return the key map
   * @since 4.0.0
  */
  static create<K, V>(type: Class<V>, keyFunction: Function<any, K>, ...values: V[]): Index<K, V>;
  /**
   * Creates an index map.
   *
   * @param keyFunction the key function
   * @param values the values
   * @param  the key type
   * @param  the value type
   * @return the key map
   * @since 4.0.0
  */
  static create<K, V>(keyFunction: Function<any, K>, ...values: V[]): Index<K, V>;
  /**
   * Creates an index map.
   *
   * @param keyFunction the key function
   * @param constants the constants
   * @param  the key type
   * @param  the value type
   * @return the key map
   * @since 4.0.0
  */
  static create<K, V>(keyFunction: Function<any, K>, constants: V[]): Index<K, V>;
  /**
   * Gets the keys.
   *
   * @return the keys
   * @since 4.0.0
  */
  keys(): Set<K>;
  /**
   * Gets the key for a value.
   *
   * @param value the value
   * @return the key
   * @since 4.0.0
  */
  key(value: V): K | null;
  /**
   * Gets the keys.
   *
   * @return the keys
   * @since 4.0.0
  */
  values(): Set<V>;
  /**
   * Gets a value by its key.
   *
   * @param key the key
   * @return the value
   * @since 4.0.0
  */
  value(key: K): V | null;
}
/**
 * Standard game tick utilities.
 *
 * @since 4.0.0
*/
export class Ticks {
  /**
   * The number of ticks that occur in one second.
   *
   * @since 4.0.0
  */
  static readonly TICKS_PER_SECOND: number;
  /**
   * A single tick duration, in milliseconds.
   *
   * @since 4.0.0
  */
  static readonly SINGLE_TICK_DURATION_MS: number;
  /**
   * Converts ticks into a {@link Duration}.
   *
   * @param ticks the number of ticks
   * @return a duration
   * @since 4.0.0
  */
  static duration(ticks: number): Duration;
}
/**
 * Something that can be built.
 *
 * @param  the type that can be built
 * @param  the builder type
 * @since 4.0.0
*/
export class Buildable<R, B> {
  /**
   * Configures `builder` using `consumer` and then builds.
   *
   * @param builder the builder
   * @param consumer the builder consume
   * @param  the type to be built
   * @param  the builder type
   * @return the built thing
   * @since 4.0.0
  */
  static configureAndBuild<R, B>(builder: B, consumer: Consumer<any> | null): R;
  /**
   * Create a builder from this thing.
   *
   * @return a builder
   * @since 4.0.0
  */
  toBuilder(): B;
}
/**
 * An extension interface for {@link Throwable}s to provide a {@link Component}-based message.
 *
 * @since 4.0.0
*/
export class ComponentMessageThrowable {
  /**
   * Gets the {@link Component}-based message from a {@link Throwable}, if available.
   *
   * @param throwable the throwable
   * @return the message
   * @since 4.0.0
  */
  static getMessage(throwable: Throwable | null): Component | null;
  /**
   * Gets the {@link Component}-based message from a {@link Throwable}, or converts {@link Throwable#getMessage()}.
   *
   * @param throwable the throwable
   * @return the message
   * @since 4.0.0
  */
  static getOrConvertMessage(throwable: Throwable | null): Component | null;
  /**
   * Gets the message.
   *
   * @return the message
   * @since 4.0.0
  */
  componentMessage(): Component | null;
}
/**
 * Various utilities.
 *
 * @since 4.0.0
*/
export class ShadyPines {
  /**
   * Creates a set from an array of enum constants.
   *
   * @param type the enum type
   * @param constants the enum constants
   * @param  the enum type
   * @return the set
   * @deprecated for removal since 4.8.0, use {@link MonkeyBars#enumSet(Class, Enum[])}
   * @since 4.0.0
  */
  static enumSet<E>(type: Class<E>, ...constants: E[]): Set<E>;
  /**
   * Checks if `a` is equal to `b`.
   *
   * @param a a double
   * @param b a double
   * @return `true` if `a` is equal to `b`, otherwise `false`
   * @since 4.0.0
  */
  static equals(a: number, b: number): boolean;
}
/**
 * A {@link ResourceBundle.Control} that enforces UTF-8 string encoding.
 *
 * See https://stackoverflow.com/a/4660195 for more details.
 *
 * @since 4.0.0
*/
export class UTF8ResourceBundleControl extends Control {
  /**
   * Gets the shared instance.
   *
   * @return a resource bundle control
   * @since 4.0.0
  */
  static get(): Control;
  newBundle(baseName: string, locale: Locale, format: string, loader: ClassLoader, reload: boolean): ResourceBundle;
}
/**
 * Tools for working with {@link ServiceLoader}s.
 *
 * @since 4.8.0
*/
export class Services {
  /**
   * Locates a service.
   *
   * @param type the service type
   * @param  the service type
   * @return a service, or {@link Optional#empty()}
   * @since 4.8.0
  */
  static service<P>(type: Class<P>): Optional<P>;
}
/**
 * Similar to a `boolean` but with three states.
 *
 * @since 4.8.0
*/
export class TriState extends Enum<TriState> {
  /**
   * State describing the absence of a value.
   *
   * @since 4.8.0
  */
  static readonly NOT_SET: TriState;
  /**
   * State describing a `false` value.
   *
   * @since 4.8.0
  */
  static readonly FALSE: TriState;
  /**
   * State describing a `true` value.
   *
   * @since 4.8.0
  */
  static readonly TRUE: TriState;
  static valueOf(name: string): TriState;
  static values(): TriState[];
  /**
   * Gets a state from a `boolean`.
   *
   * @param value the boolean
   * @return a tri-state
   * @since 4.8.0
  */
  static byBoolean(value: boolean): TriState;
}
/**
 * Something that can provide red, green, and blue colour components.
 *
 * @since 4.0.0
*/
export class RGBLike {
  /**
   * Gets the red component.
   *
   * @return the red component
   * @since 4.0.0
  */
  red(): number;
  /**
   * Gets the green component.
   *
   * @return the green component
   * @since 4.0.0
  */
  green(): number;
  /**
   * Gets the blue component.
   *
   * @return the blue component
   * @since 4.0.0
  */
  blue(): number;
  /**
   * Converts the color represented by this RGBLike to the HSV color space.
   *
   * @return an HSVLike representing this RGBLike in the HSV color space
   * @since 4.6.0
  */
  asHSV(): HSVLike;
}
/**
 * A function that takes two `int`s as input and produces a `R` result.
 *
 * This is the `int`-consuming primitive specialization for {@link BiFunction}.
 *
 * @param  the result type
 * @since 4.0.0
*/
export class IntFunction2<R> {
  /**
   * Evaluates this predicate on the given arguments.
   *
   * @param first the first input argument
   * @param second the second input argument
   * @return a result
   * @since 4.0.0
  */
  apply(first: number, second: number): R;
}
/**
 * Something that can provide hue, saturation, and value color components.
 *
 * Provided values should be in the range [0, 1].
 *
 * @since 4.6.0
*/
export class HSVLike {
  /**
   * Creates a new HSVLike.
   *
   * @param h hue color component
   * @param s saturation color component
   * @param v value color component
   * @return a new HSVLike
   * @since 4.6.0
  */
  static of(h: number, s: number, v: number): HSVLike;
  /**
   * Creates a new HSVLike from the given red, green, and blue color components.
   *
   * @param red red color component
   * @param green green color component
   * @param blue blue color component
   * @return a new HSVLike
   * @since 4.6.0
  */
  static fromRGB(red: number, green: number, blue: number): HSVLike;
  /**
   * Gets the hue component.
   *
   * @return the hue component
   * @since 4.6.0
  */
  h(): number;
  /**
   * Gets the saturation component.
   *
   * @return the saturation component
   * @since 4.6.0
  */
  s(): number;
  /**
   * Gets the value component.
   *
   * @return the value component
   * @since 4.6.0
  */
  v(): number;
}
/**
 * Something that has listeners.
 *
 * @param  the listener type
 * @since 4.0.0
*/
export class Listenable<L> {

}
/**
 * A nag.
 *
 * @since 4.7.0
*/
export class Nag extends RuntimeException {
  /**
   * Prints a nag.
   *
   * @param nag the nag
   * @since 4.7.0
  */
  static print(nag: Nag): void;
}
/**
 * {@link Collection} related utilities.
 *
 * @since 4.8.0
*/
export class MonkeyBars {
  /**
   * Creates a set from an array of enum constants.
   *
   * @param type the enum type
   * @param constants the enum constants
   * @param  the enum type
   * @return the set
   * @since 4.0.0
  */
  static enumSet<E>(type: Class<E>, ...constants: E[]): Set<E>;
  /**
   * Adds an element to the end of the list, or returns a new list.
   *
   * The returned list is unmodifiable.
   *
   * @param oldList the old list
   * @param newElement the element to add
   * @param  the element type
   * @return a list
   * @since 4.8.0
  */
  static addOne<T>(oldList: T[], newElement: T): T[];
}

}
declare module 'net.kyori.adventure.sound' {
import { Key } from 'net.kyori.adventure.key';
import { Type, Source } from 'net.kyori.adventure.sound.Sound';
import { Supplier } from 'java.util.function';
import { Provider } from 'net.kyori.adventure.sound.Sound.Source';
/**
 * Represents an in-game sound which can be played to the client.
 *
 * A sound consists of:
 * 
 *   key/type
 *   the resource location of this sound (e.g minecraft:ambient.cave or my_plugin:custom_sound
 *   source
 *   a {@link Source} telling the game where the sound is coming from
 *   volume
 *   a number in the range [0,∞) representing how loud the sound should be played.
 *   Increasing volume does not actually play the sound louder, but increases the radius
 *   of where it can be heard
 *   pitch
 *   a number in the range [0,2] representing which pitch the sound should be played at
 * 
 *
 * @see SoundStop
 * @since 4.0.0
*/
export class Sound {
  /**
   * Creates a new sound.
   *
   * @param name the name
   * @param source the source
   * @param volume the volume
   * @param pitch the pitch
   * @return the sound
   * @since 4.0.0
  */
  static sound(name: Key, source: Source, volume: number, pitch: number): Sound;
  /**
   * Creates a new sound.
   *
   * @param type the type
   * @param source the source
   * @param volume the volume
   * @param pitch the pitch
   * @return the sound
   * @since 4.0.0
  */
  static sound(type: Type, source: Source, volume: number, pitch: number): Sound;
  /**
   * Creates a new sound.
   *
   * @param type the type
   * @param source the source
   * @param volume the volume
   * @param pitch the pitch
   * @return the sound
   * @since 4.0.0
  */
  static sound(type: Supplier<Type>, source: Source, volume: number, pitch: number): Sound;
  /**
   * Creates a new sound.
   *
   * @param name the name
   * @param source the source
   * @param volume the volume
   * @param pitch the pitch
   * @return the sound
   * @since 4.8.0
  */
  static sound(name: Key, source: Provider, volume: number, pitch: number): Sound;
  /**
   * Creates a new sound.
   *
   * @param type the type
   * @param source the source
   * @param volume the volume
   * @param pitch the pitch
   * @return the sound
   * @since 4.8.0
  */
  static sound(type: Type, source: Provider, volume: number, pitch: number): Sound;
  /**
   * Creates a new sound.
   *
   * @param type the type
   * @param source the source
   * @param volume the volume
   * @param pitch the pitch
   * @return the sound
   * @since 4.8.0
  */
  static sound(type: Supplier<Type>, source: Provider, volume: number, pitch: number): Sound;
  /**
   * Gets the name.
   *
   * @return the name
   * @since 4.0.0
  */
  name(): Key;
  /**
   * Gets the source.
   *
   * @return the source
   * @since 4.0.0
  */
  source(): Source;
  /**
   * Gets the volume.
   *
   * @return the volume
   * @since 4.0.0
  */
  volume(): number;
  /**
   * Gets the pitch.
   *
   * @return the pitch
   * @since 4.0.0
  */
  pitch(): number;
  /**
   * Gets the {@link SoundStop} that will stop this specific sound.
   *
   * @return the sound stop
   * @since 4.8.0
  */
  asStop(): SoundStop;
}
/**
 * A sound and/or a sound source, used for stopping in-game sounds that
 * are being played on a game client matching the given sound and/or sound source.
 *
 * For clarification: a {@link SoundStop} consisting of the sound "ambient.weather.rain" and the source {@link Sound.Source#AMBIENT}
 * will only stop sounds matching BOTH parameters and not sounds matching only the sound or only the source.
 *
 *
 * @see Audience#stopSound(SoundStop)
 * @since 4.0.0
*/
export class SoundStop {
  /**
   * Stops all sounds.
   *
   * @return a sound stopper
   * @since 4.0.0
  */
  static all(): SoundStop;
  /**
   * Stops all sounds named `sound`.
   *
   * @param sound the sound
   * @return a sound stopper
   * @since 4.0.0
  */
  static named(sound: Key): SoundStop;
  /**
   * Stops all sounds named `sound`.
   *
   * @param sound the sound
   * @return a sound stopper
   * @since 4.0.0
  */
  static named(sound: Type): SoundStop;
  /**
   * Stops all sounds named `sound`.
   *
   * @param sound the sound
   * @return a sound stopper
   * @since 4.0.0
  */
  static named(sound: Supplier<Type>): SoundStop;
  /**
   * Stops all sounds on source `source`.
   *
   * @param source the source
   * @return a sound stopper
   * @since 4.0.0
  */
  static source(source: Source): SoundStop;
  /**
   * Stops all sounds named `name` on source `source`.
   *
   * @param sound the sound
   * @param source the source
   * @return a sound stopper
   * @since 4.0.0
  */
  static namedOnSource(sound: Key, source: Source): SoundStop;
  /**
   * Stops all sounds named `name` on source `source`.
   *
   * @param sound the sound
   * @param source the source
   * @return a sound stopper
   * @since 4.0.0
  */
  static namedOnSource(sound: Type, source: Source): SoundStop;
  /**
   * Stops all sounds named `name` on source `source`.
   *
   * @param sound the sound
   * @param source the source
   * @return a sound stopper
   * @since 4.0.0
  */
  static namedOnSource(sound: Supplier<Type>, source: Source): SoundStop;
  /**
   * Gets the sound.
   *
   * @return the sound
   * @since 4.0.0
  */
  sound(): Key | null;
  /**
   * Gets the source.
   *
   * @return the source
   * @since 4.0.0
  */
  source(): Source;
}

}
declare module 'net.kyori.adventure.text.renderer' {
import { Component } from 'net.kyori.adventure.text';
import { Merge } from 'net.kyori.adventure.text.format.Style';
import { Locale, Set } from 'java.util';
import { Function } from 'java.util.function';
import { Translator } from 'net.kyori.adventure.translation';
/**
 * A component renderer that does server-side translation rendering.
 *
 * @param  the context type, usually {@link java.util.Locale}.
 * @since 4.0.0
*/
export class TranslatableComponentRenderer<C> extends AbstractComponentRenderer<C> {
  /**
   * Creates a {@link TranslatableComponentRenderer} using the {@link Translator} to translate.
   *
   * @param source the translation source
   * @return the renderer
   * @since 4.0.0
  */
  static usingTranslationSource(source: Translator): TranslatableComponentRenderer<Locale>;
}
/**
 * An abstract implementation of a component renderer.
 *
 * @param  the context type
 * @since 4.0.0
*/
export class AbstractComponentRenderer<C> extends ComponentRenderer<C> {
  /**
   * Renders a component.
   *
   * @param component the component
   * @param context the context
   * @return the rendered component
   * @since 4.0.0
  */
  render(component: Component, context: C): Component;
}
/**
 * A component renderer.
 *
 * @param  the context type
 * @since 4.0.0
*/
export class ComponentRenderer<C> {
  /**
   * Renders a component.
   *
   * @param component the component
   * @param context the context
   * @return the rendered component
   * @since 4.0.0
  */
  render(component: Component, context: C): Component;
  /**
   * Return a {@link ComponentRenderer} that takes a different context type.
   *
   * @param transformer context type transformer
   * @param  transformation function
   * @return mapping renderer
   * @since 4.0.0
  */
  mapContext<T>(transformer: Function<T, C>): ComponentRenderer<T>;
}

}
declare module 'net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer' {
import { Pattern } from 'java.util.regex';
import { LegacyComponentSerializer } from 'net.kyori.adventure.text.serializer.legacy';
import { Builder as net_kyori_adventure_util_Buildable_Builder } from 'net.kyori.adventure.util.Buildable';
import { Consumer } from 'java.util.function';
import { Style } from 'net.kyori.adventure.text.format';
import { ComponentFlattener } from 'net.kyori.adventure.text.flattener';
/**
 * A builder for {@link LegacyComponentSerializer}.
 *
 * @since 4.0.0
*/
export class Builder extends net_kyori_adventure_util_Buildable_Builder<LegacyComponentSerializer> {
  /**
   * Sets the legacy character used by the serializer.
   *
   * @param legacyCharacter the legacy character
   * @return this builder
   * @since 4.0.0
  */
  character(legacyCharacter: string): Builder;
  /**
   * Sets the legacy hex character used by the serializer.
   *
   * @param legacyHexCharacter the legacy hex character.
   * @return this builder
   * @since 4.0.0
  */
  hexCharacter(legacyHexCharacter: string): Builder;
  /**
   * Sets that the serializer should extract URLs into {@link ClickEvent}s
   * when deserializing.
   *
   * @return this builder
   * @since 4.0.0
  */
  extractUrls(): Builder;
  /**
   * Sets that the serializer should extract URLs into {@link ClickEvent}s
   * when deserializing.
   *
   * @param pattern the url pattern
   * @return this builder
   * @since 4.2.0
  */
  extractUrls(pattern: Pattern): Builder;
  /**
   * Sets that the serializer should extract URLs into {@link ClickEvent}s
   * when deserializing.
   *
   * @param style the style to use for extracted links
   * @return this builder
   * @since 4.0.0
  */
  extractUrls(style: Style | null): Builder;
  /**
   * Sets that the serializer should extract URLs into {@link ClickEvent}s
   * when deserializing.
   *
   * @param pattern the url pattern
   * @return this builder
   * @since 4.2.0
  */
  extractUrls(pattern: Pattern, style: Style | null): Builder;
  /**
   * Sets that the serializer should support hex colors.
   *
   * Otherwise, hex colors are downsampled to the nearest named color.
   *
   * @return this builder
   * @since 4.0.0
  */
  hexColors(): Builder;
  /**
   * Sets that the serializer should use the '&x' repeated code format when serializing hex
   * colors. Note that messages in this format can still be deserialized, even with this option
   * disabled.
   *
   * This is the format adopted by the BungeeCord (and by usage, Spigot) text API.
   *
   * The format is difficult to manipulate and read, and its use is not recommended. Support
   * is provided for it only to allow plugin developers to use this library alongside parts of
   * the Spigot API which expect legacy strings in this format.
   *
   * It is recommended to use only when absolutely necessary, and when no better alternatives
   * are available.
   *
   * @return this builder
   * @since 4.0.0
  */
  useUnusualXRepeatedCharacterHexFormat(): Builder;
  /**
   * Use this component flattener to convert components into plain text.
   *
   * By default, this serializer will use {@link ComponentFlattener#basic()}
   *
   * @param flattener the flattener to use
   * @return this builder
   * @since 4.7.0
  */
  flattener(flattener: ComponentFlattener): Builder;
  /**
   * Builds the serializer.
   *
   * @return the built serializer
  */
  build(): LegacyComponentSerializer;
}
/**
 * A {@link LegacyComponentSerializer} service provider.
 *
 * @since 4.8.0
*/
export class Provider {
  /**
   * Provides a {@link LegacyComponentSerializer} using {@link #AMPERSAND_CHAR}.
   *
   * @return a {@link LegacyComponentSerializer}
   * @since 4.8.0
  */
  legacyAmpersand(): LegacyComponentSerializer;
  /**
   * Provides a {@link LegacyComponentSerializer} using {@link #SECTION_CHAR}.
   *
   * @return a {@link LegacyComponentSerializer}
   * @since 4.8.0
  */
  legacySection(): LegacyComponentSerializer;
  /**
   * Completes the building process of {@link Builder}.
   *
   * @return a {@link Consumer}
   * @since 4.8.0
  */
  legacy(): Consumer<Builder>;
}

}
declare module 'net.kyori.adventure.text.SelectorComponent' {
import { SelectorComponent, ComponentLike, ComponentBuilder } from 'net.kyori.adventure.text';
/**
 * A selector component builder.
 *
 * @since 4.0.0
*/
export class Builder extends ComponentBuilder<SelectorComponent, Builder> {
  /**
   * Sets the selector pattern.
   *
   * @param pattern the selector pattern
   * @return this builder
   * @since 4.0.0
  */
  pattern(pattern: string): Builder;
  /**
   * Sets the separator.
   *
   * @param separator the separator
   * @return this builder
   * @since 4.8.0
  */
  separator(separator: ComponentLike | null): Builder;
}

}
declare module 'net.kyori.adventure.text.serializer' {
/**
 * A {@link Component} serializer and deserializer.
 *
 * @param  the input component type
 * @param  the output component type
 * @param  the serialized type
 * @since 4.0.0
*/
export class ComponentSerializer<I, O, R> {
  /**
   * Deserialize a component from input of type `R`.
   *
   * @param input the input
   * @return the component
   * @since 4.0.0
  */
  deserialize(input: R): O;
  /**
   * Deserialize a component from input of type `R`.
   *
   * If `input` is `null`, then `null` will be returned.
   *
   * @param input the input
   * @return the component if `input` is non-null, otherwise `null`
   * @since 4.7.0
   * @deprecated for removal since 4.8.0, use {@link #deserializeOrNull(Object)} instead.
  */
  deseializeOrNull(input: R | null): O | null;
  /**
   * Deserialize a component from input of type `R`.
   *
   * If `input` is `null`, then `null` will be returned.
   *
   * @param input the input
   * @return the component if `input` is non-null, otherwise `null`
   * @since 4.8.0
  */
  deserializeOrNull(input: R | null): O | null;
  /**
   * Deserialize a component from input of type `R`.
   *
   * If `input` is `null`, then `fallback` will be returned.
   *
   * @param input the input
   * @param fallback the fallback value
   * @return the component if `input` is non-null, otherwise `fallback`
   * @since 4.7.0
  */
  deserializeOr(input: R | null, fallback: O | null): O | null;
  /**
   * Serializes a component into an output of type `R`.
   *
   * @param component the component
   * @return the output
   * @since 4.0.0
  */
  serialize(component: I): R;
  /**
   * Serializes a component into an output of type `R`.
   *
   * If `component` is `null`, then `null` will be returned.
   *
   * @param component the component
   * @return the output if `component` is non-null, otherwise `null`
   * @since 4.7.0
  */
  serializeOrNull(component: I | null): R | null;
  /**
   * Serializes a component into an output of type `R`.
   *
   * If `component` is `null`, then `fallback` will be returned.
   *
   * @param component the component
   * @param fallback the fallback value
   * @return the output if `component` is non-null, otherwise `fallback`
   * @since 4.7.0
  */
  serializeOr(component: I | null, fallback: R | null): R | null;
}

}
declare module 'net.kyori.adventure.audience' {
import { ComponentLike, Component } from 'net.kyori.adventure.text';
import { Optional } from 'java.util';
import { Collector } from 'java.util.stream';
import { Builder } from 'net.kyori.adventure.inventory.Book';
import { Book } from 'net.kyori.adventure.inventory';
import { Enum, Iterable } from 'java.lang';
import { Emitter } from 'net.kyori.adventure.sound.Sound';
import { Title } from 'net.kyori.adventure.title';
import { SoundStop, Sound } from 'net.kyori.adventure.sound';
import { Identified, Identity } from 'net.kyori.adventure.identity';
import { Pointered, Pointer } from 'net.kyori.adventure.pointer';
import { BossBar } from 'net.kyori.adventure.bossbar';
import { Supplier } from 'java.util.function';
/**
 * Message types.
 *
 * @since 4.0.0
*/
export class MessageType extends Enum<MessageType> {
  /**
   * Chat message type.
   *
   * @since 4.0.0
  */
  static readonly CHAT: MessageType;
  /**
   * System message type.
   *
   * @since 4.0.0
  */
  static readonly SYSTEM: MessageType;
  static valueOf(name: string): MessageType;
  static values(): MessageType[];
}
/**
 * A receiver that wraps one or more receivers.
 *
 * ForwardingAudience is designed to easily allow users or
 * implementations wrap an existing (collection of) Audience(s).
 *
 * @see Audience
 * @since 4.0.0
*/
export class ForwardingAudience extends Audience {
  /**
   * Gets the audiences.
   *
   * @return the audiences
   * @since 4.0.0
  */
  audiences(): Iterable<Audience>;
  get<T>(pointer: Pointer<T>): Optional<T>;
  getOrDefault<T>(pointer: Pointer<T>, defaultValue: T | null): T | null;
  getOrDefaultFrom<T>(pointer: Pointer<T>, defaultValue: Supplier<T>): T;
  sendMessage(source: Identified, message: Component, type: MessageType): void;
  sendMessage(source: Identity, message: Component, type: MessageType): void;
  sendActionBar(message: Component): void;
  sendPlayerListHeader(header: Component): void;
  sendPlayerListFooter(footer: Component): void;
  sendPlayerListHeaderAndFooter(header: Component, footer: Component): void;
  showTitle(title: Title): void;
  clearTitle(): void;
  resetTitle(): void;
  showBossBar(bar: BossBar): void;
  hideBossBar(bar: BossBar): void;
  playSound(sound: Sound): void;
  playSound(sound: Sound, x: number, y: number, z: number): void;
  playSound(sound: Sound, emitter: Emitter): void;
  stopSound(stop: SoundStop): void;
  openBook(book: Book): void;
  /**
   * Sends a chat message with a {@link Identity#nil() nil} identity to this {@link Audience}.
   *
   * @param message a message
   * @see Component
   * @see #sendMessage(Identified, ComponentLike)
   * @see #sendMessage(Identity, ComponentLike)
   * @since 4.1.0
  */
  sendMessage(message: ComponentLike): void;
  /**
   * Sends a chat message from the given {@link Identified} to this {@link Audience}.
   *
   * @param source the source of the message
   * @param message a message
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identified, message: ComponentLike): void;
  /**
   * Sends a chat message from the entity represented by the given {@link Identity} (or the game using {@link Identity#nil()}) to this {@link Audience}.
   *
   * @param source the identity of the source of the message
   * @param message a message
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identity, message: ComponentLike): void;
  /**
   * Sends a chat message with a {@link Identity#nil() nil} identity to this {@link Audience}.
   *
   * @param message a message
   * @see Component
   * @see #sendMessage(Identified, Component)
   * @see #sendMessage(Identity, Component)
   * @since 4.1.0
  */
  sendMessage(message: Component): void;
  /**
   * Sends a chat message from the given {@link Identified} to this {@link Audience}.
   *
   * @param source the source of the message
   * @param message a message
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identified, message: Component): void;
  /**
   * Sends a chat message from the entity represented by the given {@link Identity} (or the game using {@link Identity#nil()}) to this {@link Audience}.
   *
   * @param source the identity of the source of the message
   * @param message a message
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identity, message: Component): void;
  /**
   * Sends a chat message with a {@link Identity#nil() nil} identity to this {@link Audience}.
   *
   * @param message a message
   * @param type the type
   * @see Component
   * @see #sendMessage(Identified, ComponentLike, MessageType)
   * @see #sendMessage(Identity, ComponentLike, MessageType)
   * @since 4.1.0
  */
  sendMessage(message: ComponentLike, type: MessageType): void;
  /**
   * Sends a chat message from the given {@link Identified} to this {@link Audience}.
   *
   * @param source the source of the message
   * @param message a message
   * @param type the type
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identified, message: ComponentLike, type: MessageType): void;
  /**
   * Sends a chat message from the entity represented by the given {@link Identity} (or the game using {@link Identity#nil()}) to this {@link Audience}.
   *
   * @param source the identity of the source of the message
   * @param message a message
   * @param type the type
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identity, message: ComponentLike, type: MessageType): void;
  /**
   * Sends a chat message with a {@link Identity#nil() nil} identity to this {@link Audience}.
   *
   * @param message a message
   * @param type the type
   * @see Component
   * @see #sendMessage(Identified, Component, MessageType)
   * @see #sendMessage(Identity, Component, MessageType)
   * @since 4.1.0
  */
  sendMessage(message: Component, type: MessageType): void;
  /**
   * Sends a message on the action bar.
   *
   * @param message a message
   * @see Component
   * @since 4.0.0
  */
  sendActionBar(message: ComponentLike): void;
  /**
   * Sends the player list header.
   *
   * Depending on the implementation of this `Audience`, an existing footer may be displayed. If you wish
   * to set both the header and the footer, please use {@link #sendPlayerListHeaderAndFooter(ComponentLike, ComponentLike)}.
   *
   * @param header the header
   * @since 4.3.0
  */
  sendPlayerListHeader(header: ComponentLike): void;
  /**
   * Sends the player list footer.
   *
   * Depending on the implementation of this `Audience`, an existing footer may be displayed. If you wish
   * to set both the header and the footer, please use {@link #sendPlayerListHeaderAndFooter(ComponentLike, ComponentLike)}.
   *
   * @param footer the footer
   * @since 4.3.0
  */
  sendPlayerListFooter(footer: ComponentLike): void;
  /**
   * Sends the player list header and footer.
   *
   * @param header the header
   * @param footer the footer
   * @since 4.3.0
  */
  sendPlayerListHeaderAndFooter(header: ComponentLike, footer: ComponentLike): void;
  /**
   * Stops a sound.
   *
   * @param sound the sound
   * @since 4.8.0
  */
  stopSound(sound: Sound): void;
  /**
   * Opens a book.
   *
   * When possible, no item should persist after closing the book.
   *
   * @param book a book
   * @see Book
   * @since 4.0.0
  */
  openBook(book: Builder): void;
}
/**
 * A receiver of Minecraft media.
 *
 * Audience is designed to be a universal interface for any player,
 * command sender, console, or otherwise who can receive text, titles,
 * boss bars, and other Minecraft media. It is also designed for a group of
 * receivers such as a team, server, world, or permission.
 * In the past, Minecraft platforms have typically reserved methods such as
 * showTitle for a Player interface. While this is good
 * textbook object-oriented design, it presents two key drawbacks: 1) there
 * is no abstraction for groups of players, such as a Server or a
 * Team and 2) it add boilerplate for handling special cases like
 * console or command senders.
 * Consider the use-case of sending a message and title to every player on a
 * server, and also sending a message to console. Without an Audience,
 * the code might look like this:
 *  *   Server server;
 *   for (Player player : server.getPlayers()) {
 *     player.sendMessage(...);
 *     player.showTitle(...);
 *   }
 *   server.getConsole().sendMessage(...);
 * Now, if Server implemented Audience, its unified interface
 * would allow users to easily send media without if-guarding console or
 * iterating through the list of players:
 *  *   Server server;
 *   server.sendMessage(...); // Sends a message to players and console
 *   server.showTitle(...); // Shows a title to players, silently ignored by console
 * When an Audience is unable to perform an operation, such as sending
 * a boss bar to console, it will silently fail, without logging. This
 * requirement allows users to easily send media to a group of
 * Audiences without checking each for compatibility.
 * While the scope of Audience may be expanded in the future to support
 * new Minecraft media such as the player list, its interface will remain stateless
 * and any new methods will be stubbed by default.
 *
 * @see ForwardingAudience
 * @since 4.0.0
*/
export class Audience extends Pointered {
  /**
   * Gets an audience that does nothing.
   *
   * @return a do-nothing audience
   * @since 4.0.0
  */
  static empty(): Audience;
  /**
   * Creates an audience that forwards to many other audiences.
   *
   * @param audiences an array of audiences, can be empty
   * @return an audience
   * @see ForwardingAudience
   * @since 4.0.0
  */
  static audience(...audiences: Audience[]): Audience;
  /**
   * Creates an audience that forwards to many other audiences.
   *
   * The underlying Iterable is not copied, therefore any changes
   * made will be reflected in Audience.
   *
   * @param audiences an iterable of audiences, can be empty
   * @return an audience
   * @see ForwardingAudience
   * @since 4.0.0
  */
  static audience(audiences: Iterable<Audience>): ForwardingAudience;
  /**
   * Provides a collector to create a forwarding audience from a stream of audiences.
   *
   * The audience produced is immutable and can be reused as desired.
   *
   * @return a collector to create a forwarding audience
   * @since 4.0.0
  */
  static toAudience(): Collector<any, any, ForwardingAudience>;
  /**
   * Sends a chat message with a {@link Identity#nil() nil} identity to this {@link Audience}.
   *
   * @param message a message
   * @see Component
   * @see #sendMessage(Identified, ComponentLike)
   * @see #sendMessage(Identity, ComponentLike)
   * @since 4.1.0
  */
  sendMessage(message: ComponentLike): void;
  /**
   * Sends a chat message from the given {@link Identified} to this {@link Audience}.
   *
   * @param source the source of the message
   * @param message a message
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identified, message: ComponentLike): void;
  /**
   * Sends a chat message from the entity represented by the given {@link Identity} (or the game using {@link Identity#nil()}) to this {@link Audience}.
   *
   * @param source the identity of the source of the message
   * @param message a message
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identity, message: ComponentLike): void;
  /**
   * Sends a chat message with a {@link Identity#nil() nil} identity to this {@link Audience}.
   *
   * @param message a message
   * @see Component
   * @see #sendMessage(Identified, Component)
   * @see #sendMessage(Identity, Component)
   * @since 4.1.0
  */
  sendMessage(message: Component): void;
  /**
   * Sends a chat message from the given {@link Identified} to this {@link Audience}.
   *
   * @param source the source of the message
   * @param message a message
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identified, message: Component): void;
  /**
   * Sends a chat message from the entity represented by the given {@link Identity} (or the game using {@link Identity#nil()}) to this {@link Audience}.
   *
   * @param source the identity of the source of the message
   * @param message a message
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identity, message: Component): void;
  /**
   * Sends a chat message with a {@link Identity#nil() nil} identity to this {@link Audience}.
   *
   * @param message a message
   * @param type the type
   * @see Component
   * @see #sendMessage(Identified, ComponentLike, MessageType)
   * @see #sendMessage(Identity, ComponentLike, MessageType)
   * @since 4.1.0
  */
  sendMessage(message: ComponentLike, type: MessageType): void;
  /**
   * Sends a chat message from the given {@link Identified} to this {@link Audience}.
   *
   * @param source the source of the message
   * @param message a message
   * @param type the type
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identified, message: ComponentLike, type: MessageType): void;
  /**
   * Sends a chat message from the entity represented by the given {@link Identity} (or the game using {@link Identity#nil()}) to this {@link Audience}.
   *
   * @param source the identity of the source of the message
   * @param message a message
   * @param type the type
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identity, message: ComponentLike, type: MessageType): void;
  /**
   * Sends a chat message with a {@link Identity#nil() nil} identity to this {@link Audience}.
   *
   * @param message a message
   * @param type the type
   * @see Component
   * @see #sendMessage(Identified, Component, MessageType)
   * @see #sendMessage(Identity, Component, MessageType)
   * @since 4.1.0
  */
  sendMessage(message: Component, type: MessageType): void;
  /**
   * Sends a chat message.
   *
   * @param source the source of the message
   * @param message a message
   * @param type the type
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identified, message: Component, type: MessageType): void;
  /**
   * Sends a chat message.
   *
   * @param source the identity of the source of the message
   * @param message a message
   * @param type the type
   * @see Component
   * @since 4.0.0
  */
  sendMessage(source: Identity, message: Component, type: MessageType): void;
  /**
   * Sends a message on the action bar.
   *
   * @param message a message
   * @see Component
   * @since 4.0.0
  */
  sendActionBar(message: ComponentLike): void;
  /**
   * Sends a message on the action bar.
   *
   * @param message a message
   * @see Component
   * @since 4.0.0
  */
  sendActionBar(message: Component): void;
  /**
   * Sends the player list header.
   *
   * Depending on the implementation of this `Audience`, an existing footer may be displayed. If you wish
   * to set both the header and the footer, please use {@link #sendPlayerListHeaderAndFooter(ComponentLike, ComponentLike)}.
   *
   * @param header the header
   * @since 4.3.0
  */
  sendPlayerListHeader(header: ComponentLike): void;
  /**
   * Sends the player list header.
   *
   * Depending on the implementation of this `Audience`, an existing footer may be displayed. If you wish
   * to set both the header and the footer, please use {@link #sendPlayerListHeaderAndFooter(Component, Component)}.
   *
   * @param header the header
   * @since 4.3.0
  */
  sendPlayerListHeader(header: Component): void;
  /**
   * Sends the player list footer.
   *
   * Depending on the implementation of this `Audience`, an existing footer may be displayed. If you wish
   * to set both the header and the footer, please use {@link #sendPlayerListHeaderAndFooter(ComponentLike, ComponentLike)}.
   *
   * @param footer the footer
   * @since 4.3.0
  */
  sendPlayerListFooter(footer: ComponentLike): void;
  /**
   * Sends the player list footer.
   *
   * Depending on the implementation of this `Audience`, an existing footer may be displayed. If you wish
   * to set both the header and the footer, please use {@link #sendPlayerListHeaderAndFooter(Component, Component)}.
   *
   * @param footer the footer
   * @since 4.3.0
  */
  sendPlayerListFooter(footer: Component): void;
  /**
   * Sends the player list header and footer.
   *
   * @param header the header
   * @param footer the footer
   * @since 4.3.0
  */
  sendPlayerListHeaderAndFooter(header: ComponentLike, footer: ComponentLike): void;
  /**
   * Sends the player list header and footer.
   *
   * @param header the header
   * @param footer the footer
   * @since 4.3.0
  */
  sendPlayerListHeaderAndFooter(header: Component, footer: Component): void;
  /**
   * Shows a title.
   *
   * @param title a title
   * @see Title
   * @since 4.0.0
  */
  showTitle(title: Title): void;
  /**
   * Clears the title, if one is being displayed.
   *
   * @see Title
   * @since 4.0.0
  */
  clearTitle(): void;
  /**
   * Resets the title and timings back to their default.
   *
   * @see Title
   * @since 4.0.0
  */
  resetTitle(): void;
  /**
   * Shows a boss bar.
   *
   * @param bar a boss bar
   * @see BossBar
   * @since 4.0.0
  */
  showBossBar(bar: BossBar): void;
  /**
   * Hides a boss bar.
   *
   * @param bar a boss bar
   * @see BossBar
   * @since 4.0.0
  */
  hideBossBar(bar: BossBar): void;
  /**
   * Plays a sound at the location of the recipient of the sound.
   *
   * To play a sound that follows the recipient, use {@link #playSound(Sound, Sound.Emitter)} with {@link Sound.Emitter#self()}.
   *
   * @param sound a sound
   * @see Sound
   * @since 4.0.0
  */
  playSound(sound: Sound): void;
  /**
   * Plays a sound at a location.
   *
   * @param sound a sound
   * @param x x coordinate
   * @param y y coordinate
   * @param z z coordinate
   * @see Sound
   * @since 4.0.0
  */
  playSound(sound: Sound, x: number, y: number, z: number): void;
  /**
   * Stops a sound.
   *
   * @param sound the sound
   * @since 4.8.0
  */
  stopSound(sound: Sound): void;
  /**
   * Plays a sound from an emitter, usually an entity.
   *
   * 
   *   Sounds played using this method will follow the emitter unless the sound is a custom sound.
   *   In this case the sound will be played at the location of the emitter and will not follow them.
   * 
   *
   * To play a sound that follows the recipient, use {@link Sound.Emitter#self()}.
   *
   * Note: Due to MC-138832, the volume and pitch may be ignored when using this method.
   *
   * @param sound a sound
   * @param emitter an emitter
   * @since 4.8.0
  */
  playSound(sound: Sound, emitter: Emitter): void;
  /**
   * Stops a sound, or many sounds.
   *
   * @param stop a sound stop
   * @see SoundStop
   * @since 4.0.0
  */
  stopSound(stop: SoundStop): void;
  /**
   * Opens a book.
   *
   * When possible, no item should persist after closing the book.
   *
   * @param book a book
   * @see Book
   * @since 4.0.0
  */
  openBook(book: Builder): void;
  /**
   * Opens a book.
   *
   * When possible, no item should persist after closing the book.
   *
   * @param book a book
   * @see Book
   * @since 4.0.0
  */
  openBook(book: Book): void;
}

}
