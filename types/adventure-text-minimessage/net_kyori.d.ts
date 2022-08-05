declare module 'net.kyori.adventure.text.minimessage.tag.Tag' {
import { OptionalInt, OptionalDouble } from 'java.util';
/**
 * An argument that can be passed to a tag, after the first `:`.
 *
 * @since 4.10.0
*/
export class Argument {
  /**
   * Returns the value of this argument.
   *
   * @return the value
   * @since 4.10.0
  */
  value(): string;
  /**
   * Returns the value of this argument, lower-cased in the root locale.
   *
   * This value should be used for comparisons against literals, to help ensure MiniMessage tags are case-insensitive.
   *
   * @return the lower-cased value of this argument
   * @since 4.10.0
  */
  lowerValue(): string;
  /**
   * Checks if this argument represents `true`.
   *
   * @return if this argument represents `true`
   * @since 4.10.0
  */
  isTrue(): boolean;
  /**
   * Checks if this argument represents `false`.
   *
   * @return if this argument represents `false`
   * @since 4.10.0
  */
  isFalse(): boolean;
  /**
   * Try and parse this argument as an `int`.
   *
   * The optional will only be present if the value is a valid integer.
   *
   * @return an optional providing the value of this argument as an integer
   * @since 4.10.0
  */
  asInt(): OptionalInt;
  /**
   * Try and parse this argument as a `double`.
   *
   * The optional will only be present if the value is a valid double.
   *
   * @return an optional providing the value of this argument as an integer
   * @since 4.10.0
  */
  asDouble(): OptionalDouble;
}

}
declare module 'net.kyori.adventure.text.minimessage.tag' {
import { ComponentLike, Component } from 'net.kyori.adventure.text';
import { Builder } from 'net.kyori.adventure.text.format.Style';
import { Node } from 'net.kyori.adventure.text.minimessage.tree';
import { Consumer } from 'java.util.function';
import { StyleBuilderApplicable } from 'net.kyori.adventure.text.format';
/**
 * A tag that is applied at the tokenization stage, before the tree is constructed.
 *
 * Its value must be a MiniMessage string.
 *
 * @since 4.10.0
*/
export class PreProcess extends Tag {
  /**
   * The value to insert at the pre-process phase.
   *
   * @return the value to insert
   * @since 4.10.0
  */
  value(): string;
}
/**
 * A tag definition for the MiniMessage language.
 *
 * All implementations of `Tag` must implement one of {@link Inserting}, {@link Modifying},
 * {@link ParserDirective} or {@link PreProcess}.
 *
 * @since 4.10.0
*/
export class Tag {
  /**
   * Create a tag that inserts the content literally into the parse string.
   *
   * @param content content to insert
   * @return a new tag
   * @since 4.10.0
  */
  static preProcessParsed(content: string): PreProcess;
  /**
   * Create a tag that will insert a certain component into the output.
   *
   * Any content between this tag and an explicit closing tag will become a child of `content`.
   *
   * @param content the content to insert.
   * @return a tag that will insert this component
   * @since 4.10.0
  */
  static inserting(content: Component): Tag;
  /**
   * Create a tag that will insert a certain component into the output.
   *
   * Any content between this tag and an explicit closing tag will become a child of `content`.
   *
   * @param value the content to insert, eagerly converted to a component
   * @return a tag that will insert this component
   * @since 4.10.0
  */
  static inserting(value: ComponentLike): Tag;
  /**
   * Create a tag that will insert a certain component into the output.
   *
   * This tag is self-closing, so its contents will not influence the style of following content.
   *
   * @param content the content to insert.
   * @return a tag that will insert this component
   * @since 4.10.0
  */
  static selfClosingInserting(content: Component): Tag;
  /**
   * Create a tag that will insert a certain component into the output.
   *
   * This tag is self-closing, so its contents will not influence the style of following content.
   *
   * @param value the content to insert, eagerly converted to a component
   * @return a tag that will insert this component
   * @since 4.10.0
  */
  static selfClosingInserting(value: ComponentLike): Tag;
  /**
   * Create a tag that will apply a certain style to components.
   *
   * @param styles the action applied to the component style
   * @return a tag for this action
   * @since 4.10.0
  */
  static styling(styles: Consumer<Builder>): Tag;
  /**
   * Create a tag that will apply certain styles to components.
   *
   * @param actions the style builder actions
   * @return a tag for these actions
   * @since 4.10.0
  */
  static styling(...actions: StyleBuilderApplicable[]): Tag;
}
/**
 * Tags implementing this interface are used to provide directives, or instructions, to the parser directly.
 *
 * @see #RESET
 * @since 4.10.0
*/
export class ParserDirective extends Tag {
  /**
   * Instructs the parser to reset all style, events, insertions, etc.
   *
   * If {@link net.kyori.adventure.text.minimessage.MiniMessage.Builder#strict(boolean) strict mode} is enabled, usage of
   * this tag is disallowed and a parse exception will be thrown if this tag is present.
   *
   * @since 4.10.0
  */
  static readonly RESET: Tag;
}
/**
 * A tag that can transform a whole subtree of nodes.
 *
 * @since 4.10.0
*/
export class Modifying extends Tag {
  /**
   * Method called once for every element in the subtree, allowing calculations to be made before {@link #apply(Component, int) application}.
   *
   * @param current the current element in the subtree
   * @param depth depth in the tree this node is at
   * @since 4.10.0
  */
  visit(current: Node, depth: number): void;
  /**
   * Called after the entire tree has been {@link #visit(Node, int) visited}.
   *
   * This allows for finalizing calculations made during the tree visit, but before actual application to the child components of this tag.
   *
   * @since 4.10.0
  */
  postVisit(): void;
  /**
   * Applies this transformation for the current component.
   *
   * This gets called after the component tree has been assembled, however, the tree can still be modified at this point if desired.
   *
   * @param current the current component
   * @param depth the depth of the tree the current component is at
   * @return the new parent
   * @since 4.10.0
  */
  apply(current: Component, depth: number): Component;
}
/**
 * A tag that inserts a {@link Component} into the output.
 *
 * @since 4.10.0
*/
export class Inserting extends Tag {
  /**
   * Returns the component this tag produces.
   *
   * @return the component this tag produces
   * @since 4.10.0
  */
  value(): Component;
  /**
   * Get whether this tag allows children.
   *
   * If children are not allowed, this tag will be auto-closing, and
   * should not be closed explicitly. In strict mode, a closing tag will be
   * an error. In lenient mode, the closing tag will be interpreted as literal text.
   *
   * @return whether this tag will allow following to become children
   * @since 4.10.0
  */
  allowsChildren(): boolean;
}

}
declare module 'net.kyori.adventure.text.minimessage.internal' {
import { Pattern } from 'java.util.regex';
/**
 * Utility class for tag naming.
 *
 * @since 4.10.0
*/
export class TagInternals {
  /**
   * Checks if a tag name matches the pattern for allowed tag names. If it does not, then
   * this method will throw an {@link IllegalArgumentException}
   *
   * @param tagName the name of the tag
   * @since 4.10.0
  */
  static assertValidTagName(tagName: string): void;
  /**
   * Checks if a tag name matches the pattern for allowed tag names, first sanitizing it
   * by converting the tag name to lowercase. Returns a boolean representing the validity
   *
   * @param tagName the name of the tag
   * @return validity of this tag when sanitized
   * @since 4.10.1
  */
  static sanitizeAndCheckValidTagName(tagName: string): boolean;
  /**
   * Checks if a tag name matches the pattern for allowed tag names, first sanitizing it
   * by converting the tag name to lowercase. If it does not match the pattern, then this
   * method will throw an {@link IllegalArgumentException}
   *
   * @param tagName the name of the tag
   * @since 4.10.0
  */
  static sanitizeAndAssertValidTagName(tagName: string): void;
}

}
declare module 'net.kyori.adventure.text.minimessage.internal.parser' {
import { List } from 'java.util';
import { TagProvider } from 'net.kyori.adventure.text.minimessage.internal.parser.TokenParser';
import { RootNode } from 'net.kyori.adventure.text.minimessage.internal.parser.node';
import { Enum, CharSequence, Throwable } from 'java.lang';
import { MatchedTokenConsumer } from 'net.kyori.adventure.text.minimessage.internal.parser.match';
import { Stream } from 'java.util.stream';
import { ParsingException } from 'net.kyori.adventure.text.minimessage';
import { IntPredicate, Predicate } from 'java.util.function';
import { ExaminableProperty, Examinable } from 'net.kyori.examination';
/**
 * An exception that happens while parsing.
 *
 * @since 4.10.0
*/
export class ParsingExceptionImpl extends ParsingException {
  /**
   * Create a new parsing exception.
   *
   * @param message the detail message
   * @param originalText the original text which was parsed
   * @param tokens the token which caused the error
   * @since 4.10.0
  */
  constructor(message: string, originalText: string | null, ...tokens: Token[]);
  /**
   * Create a new parsing exception.
   *
   * @param message the detail message
   * @param originalText the original text which was parsed
   * @param cause the cause
   * @param withStackTrace whether to generate a stacktrace
   * @param tokens the token which caused the error
   * @since 4.10.0
  */
  constructor(message: string, originalText: string | null, cause: Throwable | null, withStackTrace: boolean, ...tokens: Token[]);
  getMessage(): string;
  detailMessage(): string | null;
  /**
   * Get the message which caused this exception.
   *
   * @return the original message
   * @since 4.10.0
  */
  originalText(): string | null;
  /**
   * Gets the tokens associated with this parsing error.
   *
   * @return the tokens for this error
   * @since 4.10.0
  */
  tokens(): Token[];
  /**
   * Sets the tokens associated with this parsing error.
   *
   * @param tokens the tokens for this error
   * @since 4.10.0
  */
  tokens(tokens: Token[]): void;
  fillInStackTrace(): Throwable;
  startIndex(): number;
  endIndex(): number;
}
/**
 * Represents a token for the lexer.
 *
 * @since 4.10.0
*/
export class Token extends Examinable {
  /**
   * Creates a new token.
   *
   * @param startIndex the start index of the token
   * @param endIndex the end index of the token
   * @param type the type of the token
   * @since 4.10.0
  */
  constructor(startIndex: number, endIndex: number, type: TokenType);
  /**
   * Returns the start index of this token.
   *
   * @return the start index
   * @since 4.10.0
  */
  startIndex(): number;
  /**
   * Returns the end index of this token.
   *
   * @return the end index
   * @since 4.10.0
  */
  endIndex(): number;
  /**
   * Returns the type of this token.
   *
   * @return the type
   * @since 4.10.0
  */
  type(): TokenType;
  /**
   * Returns the children of this token.
   *
   * @return the child tokens
   * @since 4.10.0
  */
  childTokens(): Token[];
  /**
   * Sets the children of this token.
   *
   * @param childTokens the new children
   * @since 4.10.0
  */
  childTokens(childTokens: Token[]): void;
  /**
   * Get the value of this token from the complete message.
   *
   * @param message the message to read
   * @return the value of this token
   * @since 4.10.0
  */
  get(message: CharSequence): CharSequence;
  examinableProperties(): Stream<ExaminableProperty>;
  toString(): string;
}
/**
 * Handles parsing a string into a list of tokens and then into a tree of nodes.
 *
 * @since 4.10.0
*/
export class TokenParser {
  static readonly TAG_START: string;
  static readonly TAG_END: string;
  static readonly CLOSE_TAG: string;
  static readonly SEPARATOR: string;
  static readonly ESCAPE: string;
  /**
   * Parse a minimessage string into a tree of nodes.
   *
   * @param tagProvider provides tags based on the available information
   * @param tagNameChecker checker for tag names, performing necessary tag normalization
   * @param message the minimessage string to parse, after processing for preprocess tags
   * @param originalMessage the string to parse, before preprocess tags
   * @param strict whether parsing in strict mode
   * @return the root of the resulting tree
   * @throws ParsingException if invalid input is provided when in strict mode
   * @since 4.10.0
  */
  static parse(tagProvider: TagProvider, tagNameChecker: Predicate<string>, message: string, originalMessage: string, strict: boolean): RootNode;
  /**
   * Resolves all pre-process tags in a string.
   *
   * @param message the message
   * @param provider the tag resolver, to gather preprocess tags
   * @return the resulting string
   * @since 4.10.0
  */
  static resolvePreProcessTags(message: string, provider: TagProvider): string;
  /**
   * Tokenize a minimessage string into a list of tokens.
   *
   * @param message the minimessage string to parse
   * @return the root tokens
   * @since 4.10.0
  */
  static tokenize(message: string): Token[];
  /**
   * Parses a string, providing information on matched tokens to the matched token consumer.
   *
   * @param message the message
   * @param consumer the consumer
   * @since 4.10.0
  */
  static parseString(message: string, consumer: MatchedTokenConsumer<any>): void;
  /**
   * Removes escaping `'\`` characters from a substring where the subsequent character matches a given predicate.
   *
   * @param text the input text
   * @param startIndex the starting index of the substring
   * @param endIndex the ending index of the substring
   * @param escapes the predicate to determine if an escape happened
   * @return the output escaped substring
   * @since 4.10.0
  */
  static unescape(text: string, startIndex: number, endIndex: number, escapes: IntPredicate): string;
}
/**
 * Represents the type of a token.
 *
 * @since 4.10.0
*/
export class TokenType extends Enum<TokenType> {
  static readonly TEXT: TokenType;
  static readonly OPEN_TAG: TokenType;
  static readonly OPEN_CLOSE_TAG: TokenType;
  static readonly CLOSE_TAG: TokenType;
  static readonly TAG_VALUE: TokenType;
  static valueOf(name: string): TokenType;
  static values(): TokenType[];
}

}
declare module 'net.kyori.adventure.text.minimessage.MiniMessage' {
import { Component } from 'net.kyori.adventure.text';
import { AbstractBuilder } from 'net.kyori.adventure.builder';
import { TagResolver } from 'net.kyori.adventure.text.minimessage.tag.resolver';
import { MiniMessage } from 'net.kyori.adventure.text.minimessage';
import { Consumer, UnaryOperator } from 'java.util.function';
import { Builder as net_kyori_adventure_text_minimessage_tag_resolver_TagResolver_Builder } from 'net.kyori.adventure.text.minimessage.tag.resolver.TagResolver';
/**
 * A builder for {@link MiniMessage}.
 *
 * @since 4.10.0
*/
export class Builder extends AbstractBuilder<MiniMessage> {
  /**
   * Set the known tags to the provided tag resolver.
   *
   * This resolver determines the base set of tags known to this {@link MiniMessage} instance.
   * Any resolvers passed to the {@link MiniMessage#deserialize(String, TagResolver)} method will override this resolver.
   *
   * @param tags the tag resolver to use
   * @return this builder
   * @since 4.10.0
  */
  tags(tags: TagResolver): Builder;
  /**
   * Add to the set of known tags this MiniMessage instance can use.
   *
   * @param adder a function operating on a builder containing currently known tags
   * @return this builder
   * @since 4.10.0
  */
  editTags(adder: Consumer<net_kyori_adventure_text_minimessage_tag_resolver_TagResolver_Builder>): Builder;
  /**
   * Enables strict mode (disabled by default).
   *
   * By default, MiniMessage will allow {@link net.kyori.adventure.text.minimessage.tag.Inserting#allowsChildren() child-allowing} tags to be implicitly closed. When strict mode
   * is enabled, all child-allowing tags which are `` must be explicitly `` as well.
   *
   * Additionally, the {@link net.kyori.adventure.text.minimessage.tag.ParserDirective#RESET reset tag} is disabled in this mode.
   * Any usage of this tag will throw a parser exception if strict mode is enabled.
   *
   * @param strict if strict mode should be enabled
   * @return this builder
   * @since 4.10.0
  */
  strict(strict: boolean): Builder;
  /**
   * Print debug information to the given output (disabled by default).
   *
   * Debug output includes detailed information about the parsing process to help debug parser behavior.
   *
   * The consumer will receive line fragments terminated by `LF`, not complete lines.
   * This avoids string concatenation within debug output generation. If the consumer is `null`, no debug information will be generated.
   *
   * @param debugOutput if debug mode should be enabled
   * @return this builder
   * @since 4.10.0
  */
  debug(debugOutput: Consumer<string> | null): Builder;
  /**
   * Specify a function that takes the component at the end of the parser process.
   * By default, this compacts the resulting component with {@link Component#compact()}.
   *
   * @param postProcessor method run at the end of parsing
   * @return this builder
   * @since 4.10.0
  */
  postProcessor(postProcessor: UnaryOperator<Component>): Builder;
  /**
   * Specify a function that takes the string at the start of the parser process.
   * By default, this does absolutely nothing.
   *
   * @param preProcessor method run at the start of parsing
   * @return this builder
   * @since 4.11.0
  */
  preProcessor(preProcessor: UnaryOperator<string>): Builder;
  /**
   * Builds the serializer.
   *
   * @return the built serializer
   * @since 4.10.0
  */
  build(): MiniMessage;
}
/**
 * A {@link MiniMessage} service provider.
 *
 * @since 4.10.0
 * @hidden
*/
export class Provider {
  /**
   * Provides a standard {@link MiniMessage} instance.
   *
   * @return a {@link MiniMessage} instance
   * @since 4.10.0
  */
  miniMessage(): MiniMessage;
  /**
   * Initialize a {@link Builder} before it is returned to the API caller.
   *
   * @return a {@link Consumer} modifying a {@link Builder}
   * @since 4.10.0
  */
  builder(): Consumer<Builder>;
}

}
declare module 'net.kyori.adventure.text.minimessage.tree.Node' {
import { Node } from 'net.kyori.adventure.text.minimessage.tree';
/**
 * The root node of a parse.
 *
 * @since 4.10.0
*/
export class Root extends Node {
  /**
   * Get the original provided message which produced this node.
   *
   * @return the input message
   * @since 4.10.0
  */
  input(): string;
}

}
declare module 'net.kyori.adventure.text.minimessage.internal.serializer' {
import { Component } from 'net.kyori.adventure.text';
import { Enum } from 'java.lang';
import { Set } from 'java.util';
import { Tag } from 'net.kyori.adventure.text.minimessage.tag';
import { TagResolver, ArgumentQueue } from 'net.kyori.adventure.text.minimessage.tag.resolver';
import { Context } from 'net.kyori.adventure.text.minimessage';
import { Function, BiFunction, BiConsumer, Predicate } from 'java.util.function';
import { Style } from 'net.kyori.adventure.text.format';
/**
 * The preferred style of argument quoting for a specific argument.
 *
 * This will allow overriding the style preferences for specific arguments.
 *
 * @since 4.10.0
*/
export class QuotingOverride extends Enum<QuotingOverride> {
  /**
   * Request that this argument is included unquoted.
   *
   * As no escapes can be included in an unquoted argument, this request may be ignored depending on the content of the argument.
   *
   * @since 4.10.0
  */
  static readonly UNQUOTED: QuotingOverride;
  /**
   * Request that this argument is included quoted.
   *
   * @since 4.10.0
  */
  static readonly QUOTED: QuotingOverride;
  static valueOf(name: string): QuotingOverride;
  static values(): QuotingOverride[];
}
/**
 * A specific {@link TagResolver} that can process serialization requests for a component.
 *
 * @since 4.10.0
*/
export class SerializableResolver {
  /**
   * Create a tag resolver that only responds to a single tag name, and whose value does not depend on that name.
   *
   * @param name the name to respond to
   * @param handler the tag handler, may throw {@link ParsingException} if provided arguments are in an invalid format
   * @param componentClaim the claim to test components against
   * @return a resolver that creates tags using the provided handler
   * @since 4.10.0
  */
  static claimingComponent(name: string, handler: BiFunction<ArgumentQueue, Context, Tag>, componentClaim: Function<Component, Emitable>): TagResolver;
  /**
   * Create a tag resolver that only responds to certain tag names, and whose value does not depend on that name.
   *
   * @param names the names to respond to
   * @param handler the tag handler, may throw {@link ParsingException} if provided arguments are in an invalid format
   * @param componentClaim the claim to test components against
   * @return a resolver that creates tags using the provided handler
   * @since 4.10.0
  */
  static claimingComponent(names: Set<string>, handler: BiFunction<ArgumentQueue, Context, Tag>, componentClaim: Function<Component, Emitable>): TagResolver;
  /**
   * Create a tag resolver that only responds to a single tag name, and whose value does not depend on that name.
   *
   * @param name the name to respond to
   * @param handler the tag handler, may throw {@link ParsingException} if provided arguments are in an invalid format
   * @param styleClaim the extractor for style claims on components
   * @return a resolver that creates tags using the provided handler
   * @since 4.10.0
  */
  static claimingStyle(name: string, handler: BiFunction<ArgumentQueue, Context, Tag>, styleClaim: StyleClaim<any>): TagResolver;
  /**
   * Create a tag resolver that only responds to certain tag names, and whose value does not depend on that name.
   *
   * @param names the names to respond to
   * @param handler the tag handler, may throw {@link ParsingException} if provided arguments are in an invalid format
   * @param styleClaim the extractor for style claims on components
   * @return a resolver that creates tags using the provided handler
   * @since 4.10.0
  */
  static claimingStyle(names: Set<string>, handler: BiFunction<ArgumentQueue, Context, Tag>, styleClaim: StyleClaim<any>): TagResolver;
  /**
   * Attempt to process a component for serialization.
   *
   * @param serializable the component to serialize
   * @param consumer a consumer for component claims, must not be stored
   * @since 4.10.0
  */
  handle(serializable: Component, consumer: ClaimConsumer): void;
}
/**
 * A consumer of tokens used to generate MiniMessage output.
 *
 * @since 4.10.0
*/
export class TokenEmitter {
  tag(token: string): TokenEmitter;
  selfClosingTag(token: string): TokenEmitter;
  /**
   * Add arguments to the current tag.
   *
   * Must be called after {@link #tag(String)}, but before any call to {@link #text(String)}.
   *
   * @param args args to add
   * @return this emitter
   * @since 4.10.0
  */
  arguments(...args: string[]): TokenEmitter;
  /**
   * Add a single argument to the current tag.
   *
   * Must be called after {@link #tag(String)}, but before any call to {@link #text(String)}.
   *
   * @param arg argument to add
   * @return this emitter
   * @since 4.10.0
  */
  argument(arg: string): TokenEmitter;
  /**
   * Add a single argument to the current tag.
   *
   * Must be called after {@link #tag(String)}, but before any call to {@link #text(String)}.
   *
   * @param arg argument to add
   * @param quotingPreference an argument-specific quoting instruction
   * @return this emitter
   * @since 4.10.0
  */
  argument(arg: string, quotingPreference: QuotingOverride): TokenEmitter;
  /**
   * Add a single argument to the current tag.
   *
   * Must be called after {@link #tag(String)}, but before any call to {@link #text(String)}.
   *
   * @param arg argument to add, serialized as a nested MiniMessage string
   * @return this emitter
   * @since 4.10.0
  */
  argument(arg: Component): TokenEmitter;
  /**
   * Emit literal text.
   *
   * Escaping will be automatically performed to ensure that none of the contents of `text` are parsed as tags.
   *
   * @param text the text to parse
   * @return this emitter
   * @since 4.10.0
  */
  text(text: string): TokenEmitter;
  /**
   * Explicitly end a token, only needed if there are multiple tokens within an {@link Emitable} for some reason.
   *
   * Usually depth handling is performed internally.
   *
   * @return this emitter
   * @since 4.10.0
  */
  pop(): TokenEmitter;
}
/**
 * A consumer of serialization claims.
 *
 * @since 4.10.0
*/
export class ClaimConsumer {
  /**
   * Submit a style claim for the active component.
   *
   * Style claims are additive, but any single style element can only be claimed once.
   *
   * @param claimKey an identifier for the style element being claimed
   * @param styleClaim the claim of a style
   * @since 4.10.0
  */
  style(claimKey: string, styleClaim: Emitable): void;
  /**
   * Submit a component claim for the active component.
   *
   * Only one component claim can be in effect. We use the first component claim.
   *
   * @param componentClaim the claim of a component
   * @return whether the claim was successful
   * @since 4.10.0
  */
  component(componentClaim: Emitable): boolean;
  /**
   * Get whether a style element has been claimed yet.
   *
   * @param claimId the id for this style elemnt being tested
   * @return whether style is claimed
   * @since 4.10.0
  */
  styleClaimed(claimId: string): boolean;
  /**
   * Get whether a component has been claimed yet.
   *
   * @return whether a component has been claimed yet
   * @since 4.10.0
  */
  componentClaimed(): boolean;
}
/**
 * Something that holds data representable as MiniMessage tags.
 *
 * @since 4.10.0
*/
export class Emitable {
  /**
   * Emit tags based on this emitable's data.
   *
   * @param emitter the target to emit to
   * @since 4.10.0
  */
  emit(emitter: TokenEmitter): void;
}
/**
 * A claim of a single style element.
 *
 * @param  the element type
 * @since 4.10.0
*/
export class StyleClaim<V> {
  /**
   * Create a new style claim that will emit content for any non-null value.
   *
   * @param  the value type
   * @param claimKey claim key for de-duplication
   * @param lens value extractor from a {@link Style} instance
   * @param emitable the function that handles emitting
   * @return a new claim
   * @since 4.10.0
  */
  static claim<T>(claimKey: string, lens: Function<Style, T>, emitable: BiConsumer<T, TokenEmitter>): StyleClaim<T>;
  /**
   * Create a new style claim that will emit content for any non-null value that passes the filter.
   *
   * @param  the value type
   * @param claimKey claim key for de-duplication
   * @param lens value extractor from a {@link Style} instance
   * @param filter a filter for values, will only receive non-null values
   * @param emitable the function that handles emitting
   * @return a new claim
   * @since 4.10.0
  */
  static claim<T>(claimKey: string, lens: Function<Style, T>, filter: Predicate<T>, emitable: BiConsumer<T, TokenEmitter>): StyleClaim<T>;
  claimKey(): string;
  /**
   * Prepare an emitable to apply this claim based on the style.
   *
   * @param style the style to test
   * @return an emitable for this style claim, if it is applicable to the provided style
   * @since 4.10.0
  */
  apply(style: Style): Emitable | null;
}

}
declare module 'net.kyori.adventure.text.minimessage.internal.serializer.SerializableResolver' {
import { Component } from 'net.kyori.adventure.text';
import { StyleClaim, Emitable, SerializableResolver, ClaimConsumer } from 'net.kyori.adventure.text.minimessage.internal.serializer';
/**
 * A subinterface for resolvers that only handle one single tag.
 *
 * @since 4.10.0
*/
export class Single extends SerializableResolver {
  handle(serializable: Component, consumer: ClaimConsumer): void;
  /**
   * Claim a style for tag emission.
   *
   * Style emitters are additive -- a non-`null` result will not terminate traversal of
   * iterable tags. However, each style element can only be claimed once.
   *
   * @return an emitable if this claimer handles some element of the provided style
   * @since 4.10.0
  */
  claimStyle(): StyleClaim<any> | null;
  /**
   * Claim a full component for tag emission.
   *
   * The first non-null result will be the only handler for this component. The component's style will be handled separately.
   *
   * Children of the provided component should be ignored.
   *
   * @param component the component to inspect
   * @return an emitable if this claimer handles the provided component type
   * @since 4.10.0
  */
  claimComponent(component: Component): Emitable | null;
}

}
declare module 'net.kyori.adventure.text.minimessage.tree' {
import { List } from 'java.util';
/**
 * A node in the MiniMessage parse tree.
 *
 * This API is currently incomplete -- it will be expanded in future versions based on user interest.
 *
 * @since 4.10.0
*/
export class Node {
  /**
   * Get a human-readable representation of this node and its descendants for debugging purposes.
   *
   * @return the human-readable representation of this node tree
   * @since 4.10.0
  */
  toString(): string;
  /**
   * Get children of this node.
   *
   * The returned list is unmodifiable.
   *
   * @return a list of children
   * @since 4.10.0
  */
  children(): Node[];
  /**
   * Get the parent of this node.
   *
   * If this node is at the root of the tree, this may be `null`.
   *
   * @return this node's parent
   * @since 4.10.0
  */
  parent(): Node | null;
}

}
declare module 'net.kyori.adventure.text.minimessage.internal.parser.TokenParser' {
import { Argument } from 'net.kyori.adventure.text.minimessage.tag.Tag';
import { TagNode } from 'net.kyori.adventure.text.minimessage.internal.parser.node';
import { List } from 'java.util';
import { Tag } from 'net.kyori.adventure.text.minimessage.tag';
import { Token } from 'net.kyori.adventure.text.minimessage.internal.parser';
/**
 * Normalizing provider for tag information.
 *
 * @since 4.10.0
*/
export class TagProvider {
  /**
   * Look up a tag.
   *
   * Parsing exceptions must be caught and handled within this method.
   *
   * @param name the tag name, pre-sanitized
   * @param trimmedArgs arguments, with the tag name trimmed off
   * @param token the token, if this tag is from a parse stream
   * @return a tag
   * @since 4.10.0
  */
  resolve(name: string, trimmedArgs: Argument[], token: Token | null): Tag | null;
  /**
   * Resolve by sanitized name.
   *
   * @param name sanitized name
   * @return a tag, if any is available
   * @since 4.10.0
  */
  resolve(name: string): Tag | null;
  /**
   * Resolve by node.
   *
   * @param node tag node
   * @return a tag, if any is available
   * @since 4.10.0
  */
  resolve(node: TagNode): Tag | null;
  /**
   * Sanitize placeholder names.
   *
   * This makes all placeholder names lower-case.
   *
   * @param name the raw name
   * @return a sanitized name
   * @since 4.10.0
  */
  static sanitizePlaceholderName(name: string): string;
}

}
declare module 'net.kyori.adventure.text.minimessage.internal.parser.node' {
import { Argument } from 'net.kyori.adventure.text.minimessage.tag.Tag';
import { Node } from 'net.kyori.adventure.text.minimessage.tree';
import { StringBuilder } from 'java.lang';
import { List } from 'java.util';
import { TagProvider } from 'net.kyori.adventure.text.minimessage.internal.parser.TokenParser';
import { Tag } from 'net.kyori.adventure.text.minimessage.tag';
import { Token } from 'net.kyori.adventure.text.minimessage.internal.parser';
import { Root } from 'net.kyori.adventure.text.minimessage.tree.Node';
/**
 * Represents a node in the tree.
 *
 * @since 4.10.0
*/
export class ElementNode extends Node {
  /**
   * Returns the parent of this node, if present.
   *
   * @return the parent or null
   * @since 4.10.0
  */
  parent(): ElementNode | null;
  /**
   * Returns the token that lead to the creation of this token.
   *
   * @return the token
   * @since 4.10.0
  */
  token(): Token | null;
  /**
   * Returns the source message of this node.
   *
   * @return the source message
   * @since 4.10.0
  */
  sourceMessage(): string;
  /**
   * Returns the children of this node.
   *
   * @return the children of this node
   * @since 4.10.0
  */
  children(): ElementNode[];
  /**
   * Returns an unsafe view of the children of this node.
   *
   * @return the children of this node
   * @since 4.10.0
  */
  unsafeChildren(): ElementNode[];
  /**
   * Adds a child to this node.
   *
   * This method will attempt to join text tokens together if possible.
   *
   * @param childNode the child node to add.
   * @since 4.10.0
  */
  addChild(childNode: ElementNode): void;
  /**
   * Serializes this node to a string.
   *
   * @param sb the string builder to serialize into
   * @param indent the current indent level
   * @return the passed string builder, for chaining
   * @since 4.10.0
  */
  buildToString(sb: StringBuilder, indent: number): StringBuilder;
  /**
   * Get a human-readable representation of this node and its descendants for debugging purposes.
   *
   * @return the human-readable representation of this node tree
   * @since 4.10.0
  */
  toString(): string;
}
/**
 * Node that represents a tag.
 *
 * @since 4.10.0
*/
export class TagNode extends ElementNode {
  /**
   * Creates a new element node.
   *
   * @param parent the parent of this node
   * @param token the token that created this node
   * @param sourceMessage the source message
   * @param tagProvider the tag provider
   * @since 4.10.0
  */
  constructor(parent: ElementNode, token: Token, sourceMessage: string, tagProvider: TagProvider);
  /**
   * Returns the parts of this tag.
   *
   * @return the parts
   * @since 4.10.0
  */
  parts(): TagPart[];
  /**
   * Returns the name of this tag.
   *
   * @return the name
   * @since 4.10.0
  */
  name(): string;
  token(): Token;
  /**
   * Gets the tag attached to this tag node.
   *
   * @return the tag for this tag node
   * @since 4.10.0
  */
  tag(): Tag;
  /**
   * Sets the tag logic that is represented by this tag node.
   *
   * @param tag the tag logic
   * @since 4.10.0
  */
  tag(tag: Tag): void;
  buildToString(sb: StringBuilder, indent: number): StringBuilder;
}
export class ValueNode extends ElementNode {
  /**
   * Returns the value of this text node.
   *
   * @return the value
   * @since 4.10.0
  */
  value(): string;
  token(): Token;
  buildToString(sb: StringBuilder, indent: number): StringBuilder;
}
/**
 * Represents the root node of a tree.
 *
 * @since 4.10.0
*/
export class RootNode extends ElementNode {
  /**
   * Creates a new root node.
   *
   * @param sourceMessage the source message
   * @param beforePreprocessing the source message before handling preProcess tags
   * @since 4.10.0
  */
  constructor(sourceMessage: string, beforePreprocessing: string);
  input(): string;
}
export interface RootNode extends ElementNode, Root {}
/**
 * Represents an inner part of a tag.
 *
 * @since 4.10.0
*/
export class TagPart extends Argument {
  /**
   * Constructs a new tag part.
   *
   * @param sourceMessage the source message
   * @param token the token that creates this tag part
   * @param tagResolver the combined tag resolver
   * @since 4.10.0
  */
  constructor(sourceMessage: string, token: Token, tagResolver: TagProvider);
  /**
   * Returns the value of this tag part.
   *
   * @return the value
   * @since 4.10.0
  */
  value(): string;
  /**
   * Returns the token that created this tag part.
   *
   * @return the token
   * @since 4.10.0
  */
  token(): Token;
  /**
   * Removes leading/trailing quotes from the given string, if necessary, and removes escaping `'\'` characters.
   *
   * @param text the input text
   * @param start the starting index of the substring
   * @param end the ending index of the substring
   * @return the output substring
   * @since 4.10.0
  */
  static unquoteAndEscape(text: string, start: number, end: number): string;
  toString(): string;
}
/**
 * Represents a string of chars.
 *
 * @since 4.10.0
*/
export class TextNode extends ValueNode {
  /**
   * Creates a new text node.
   *
   * @param parent the parent of this node
   * @param token the token that created this node
   * @param sourceMessage the source message
   * @since 4.10.0
  */
  constructor(parent: ElementNode | null, token: Token, sourceMessage: string);
}

}
declare module 'net.kyori.adventure.text.minimessage.internal.parser.match' {
import { StringBuilder } from 'java.lang';
import { TagProvider } from 'net.kyori.adventure.text.minimessage.internal.parser.TokenParser';
import { List } from 'java.util';
import { TokenType, Token } from 'net.kyori.adventure.text.minimessage.internal.parser';
/**
 * A matched token consumer that produces a list of matched tokens.
 *
 * @since 4.10.0
*/
export class TokenListProducingMatchedTokenConsumer extends MatchedTokenConsumer<Token[]> {
  /**
   * Creates a new token list producing matched token consumer.
   *
   * @param input the input
   * @since 4.10.0
  */
  constructor(input: string);
  accept(start: number, end: number, tokenType: TokenType): void;
  result(): Token[];
}
/**
 * A matched token consumer that produces a string and returns a copy of the string with {@link PreProcess} tags resolved.
 *
 * @since 4.10.0
*/
export class StringResolvingMatchedTokenConsumer extends MatchedTokenConsumer<string> {
  /**
   * Creates a string resolving matched token consumer.
   *
   * @param input the input
   * @param tagProvider the resolver for argument-less tags
   * @since 4.10.0
  */
  constructor(input: string, tagProvider: TagProvider);
  accept(start: number, end: number, tokenType: TokenType): void;
  result(): string;
}
/**
 * A consumer of a region of a string that was identified as a token.
 *
 * @param  the return result
 * @since 4.10.0
*/
export class MatchedTokenConsumer<T> {
  /**
   * Creates a new matched token consumer.
   *
   * @param input the input
   * @since 4.10.0
  */
  constructor(input: string);
  /**
   * Accepts a matched token.
   *
   * @param start     the start of the token
   * @param end       the end of the token
   * @param tokenType the type of the token
   * @since 4.10.0
  */
  accept(start: number, end: number, tokenType: TokenType): void;
  /**
   * Gets the result of this consumer, if any.
   *
   * @return the result
   * @since 4.10.0
  */
  result(): T;
  /**
   * The last accepted end index, or `-1` if no match has been accepted.
   *
   * @return the last accepted end index
   * @since 4.10.0
  */
  lastEndIndex(): number;
}

}
declare module 'net.kyori.adventure.text.minimessage.tag.resolver' {
import { ComponentLike } from 'net.kyori.adventure.text';
import { Argument } from 'net.kyori.adventure.text.minimessage.tag.Tag';
import { Iterable, Number } from 'java.lang';
import { Set } from 'java.util';
import { Tag } from 'net.kyori.adventure.text.minimessage.tag';
import { Collector } from 'java.util.stream';
import { Context } from 'net.kyori.adventure.text.minimessage';
import { TemporalAccessor } from 'java.time.temporal';
import { BiFunction, Supplier } from 'java.util.function';
import { WithoutArguments, Single, Builder } from 'net.kyori.adventure.text.minimessage.tag.resolver.TagResolver';
/**
 * A queue of {@link Tag} arguments.
 *
 * @since 4.10.0
*/
export class ArgumentQueue {
  /**
   * Pop an argument, throwing an exception if no argument was present.
   *
   * After an invocation of `pop()`, the internal argument pointer will be advanced to the next argument.
   *
   * @return the popped argument
   * @since 4.10.0
  */
  pop(): Argument;
  /**
   * Pop an argument, throwing an exception if no argument was present.
   *
   * After an invocation of `popOr()`, the internal argument pointer will be advanced to the next argument.
   *
   * @param errorMessage the error to throw if the argument is not present
   * @return the popped argument
   * @since 4.10.0
  */
  popOr(errorMessage: string): Argument;
  /**
   * Pop an argument, throwing an exception if no argument was present.
   *
   * After an invocation of `popOr()`, the internal argument pointer will be advanced to the next argument.
   *
   * @param errorMessage the error to throw if the argument is not present
   * @return the popped argument
   * @since 4.10.0
  */
  popOr(errorMessage: Supplier<string>): Argument;
  /**
   * Peek at the next argument without advancing the iteration pointer.
   *
   * @return the next argument, if any is available.
   * @since 4.10.0
  */
  peek(): Argument;
  /**
   * Get whether another argument is available to be popped.
   *
   * @return whether another argument is available
   * @since 4.10.0
  */
  hasNext(): boolean;
  /**
   * Reset index to the beginning, to begin another attempt.
   *
   * @since 4.10.0
  */
  reset(): void;
}
/**
 * A collection of known tags.
 *
 * A resolver can handle anywhere from a single tag, to a dynamically generated set of tags, returning a tag based on the provided name and arguments.
 *
 * @see StandardTags
 * @see Placeholder
 * @since 4.10.0
*/
export class TagResolver {
  /**
   * Create a new builder for a tag resolver.
   *
   * @return the tag resolver builder
   * @since 4.10.0
  */
  static builder(): Builder;
  /**
   * Get the tag resolver that resolves all {@link StandardTags standard tags}.
   *
   * This is the default resolver used by parsers.
   *
   * @return the default resolver
   * @since 4.10.0
  */
  static standard(): TagResolver;
  /**
   * An empty tag resolver that will return `null` for all resolve attempts.
   *
   * @return the tag resolver
   * @since 4.10.0
  */
  static empty(): TagResolver;
  /**
   * A tag resolver that will resolve a single tag by a case-insensitive key.
   *
   * @param name the name of the tag to resolve
   * @param tag the tag logic to return
   * @return a new tag resolver
   * @since 4.10.0
  */
  static resolver(name: string, tag: Tag): Single;
  /**
   * Create a tag resolver that only responds to a single tag name, and whose value does not depend on that name.
   *
   * @param name the name to respond to
   * @param handler the tag handler, may throw {@link ParsingException} if provided arguments are in an invalid format
   * @return a resolver that creates tags using the provided handler
   * @since 4.10.0
  */
  static resolver(name: string, handler: BiFunction<ArgumentQueue, Context, Tag>): TagResolver;
  /**
   * Create a tag resolver that only responds to certain tag names, and whose value does not depend on that name.
   *
   * @param names the names to respond to
   * @param handler the tag handler, may throw {@link ParsingException} if provided arguments are in an invalid format
   * @return a resolver that creates tags using the provided handler
   * @since 4.10.0
  */
  static resolver(names: Set<string>, handler: BiFunction<ArgumentQueue, Context, Tag>): TagResolver;
  /**
   * Constructs a tag resolver capable of resolving from multiple sources.
   *
   * The last specified resolver takes priority.
   *
   * @param resolvers the tag resolvers
   * @return the tag resolver
   * @since 4.10.0
  */
  static resolver(...resolvers: TagResolver[]): TagResolver;
  /**
   * Constructs a tag resolver capable of resolving from multiple sources.
   *
   * The last specified resolver takes priority.
   *
   * The provided iterable is copied. This means changes to the iterable will not reflect in the returned resolver.
   *
   * @param resolvers the tag resolvers
   * @return the tag resolver
   * @since 4.10.0
  */
  static resolver(resolvers: Iterable<TagResolver>): TagResolver;
  /**
   * Constructs a tag resolver capable of caching resolved tags.
   *
   * The resolver can return `null` to indicate it cannot resolve a placeholder.
   * Once a string to replacement mapping has been created, it will be cached to avoid
   * the cost of recreating the replacement.
   *
   * Due to the complexity of handling lookups for tags with arguments, the built-in cache does not support anything but tags without arguments.
   *
   * @param resolver the resolver
   * @return the caching tag resolver
   * @since 4.10.0
  */
  static caching(resolver: WithoutArguments): TagResolver;
  /**
   * A collector that will combine a stream of resolvers into one joined resolver.
   *
   * @return a collector for tag resolvers
   * @since 4.10.0
  */
  static toTagResolver(): Collector<TagResolver, any, TagResolver>;
  /**
   * Gets a tag from this resolver based on the current state.
   *
   * @param name the tag name
   * @param arguments the arguments passed to the tag
   * @param ctx the parse context
   * @return a possible tag
   * @throws ParsingException if the provided arguments are invalid
   * @since 4.10.0
  */
  resolve(name: string, arguments: ArgumentQueue, ctx: Context): Tag | null;
  /**
   * Get whether this resolver handles tags with a certain name.
   *
   * This does not allow validating arguments.
   *
   * @param name the tag name
   * @return whether this resolver has a tag with this name
   * @since 4.10.0
  */
  has(name: string): boolean;
}
/**
 * Tag resolvers producing tags that insert fixed values.
 *
 * These are effectively placeholders.
 *
 * @since 4.10.0
*/
export class Placeholder {
  /**
   * Creates a placeholder that inserts a MiniMessage string.
   *
   * The inserted string will impact the rest of the parse process.
   *
   * @param key the key
   * @param value the replacement
   * @return the placeholder
   * @since 4.10.0
  */
  static parsed(key: string, value: string): Single;
  /**
   * Creates a placeholder that inserts a literal string, without attempting to parse any contained tags.
   *
   * @param key the key
   * @param value the replacement
   * @return the placeholder
   * @since 4.10.0
  */
  static unparsed(key: string, value: string): Single;
  /**
   * Creates a replacement that inserts a component.
   *
   * This replacement is auto-closing, so its style will not influence the style of following components.
   *
   * @param key the key
   * @param value the replacement
   * @return the placeholder
   * @since 4.10.0
  */
  static component(key: string, value: ComponentLike): Single;
}
/**
 * Tag resolvers producing tags that insert formatted values.
 *
 * These are effectively placeholders.
 *
 * @since 4.11.0
*/
export class Formatter {
  /**
   * Creates a replacement that inserts a number as a component. The component will be formatted by the provided DecimalFormat.
   *
   * This tag accepts a locale, a format pattern, both or nothing as arguments. The locale has to be provided as first argument.
   *
   * Refer to {@link Locale} for usable locale tags. Refer to {@link DecimalFormat} for usable patterns.
   *
   * This replacement is auto-closing, so its style will not influence the style of following components.
   *
   * @param key the key
   * @param number the number
   * @return the placeholder
   * @since 4.11.0
  */
  static number(key: string, number: Number): TagResolver;
  /**
   * Creates a replacement that inserts a date or a time as a component. The component will be formatted by the provided Date Format.
   *
   * This tag expects a format as attribute. Refer to {@link DateTimeFormatter} for usable patterns.
   *
   * This replacement is auto-closing, so its style will not influence the style of following components.
   *
   * @param key the key
   * @param time the time
   * @return the placeholder
   * @since 4.11.0
  */
  static date(key: string, time: TemporalAccessor): TagResolver;
  /**
   * Creates a replacement that inserts a choice formatted text. The component will be formatted by the provided ChoiceFormat.
   *
   * This tag expectes a format as attribute. Refer to {@link ChoiceFormat} for usable patterns.
   *
   * This replacement is auto-closing, so its style will not influence the style of following components.
   *
   * @param key the key
   * @param number the number
   * @return the placeholder
   * @since 4.11.0
  */
  static choice(key: string, number: Number): TagResolver;
}

}
declare module 'net.kyori.adventure.text.minimessage' {
import { Component } from 'net.kyori.adventure.text';
import { RuntimeException, Throwable } from 'java.lang';
import { TagResolver, ArgumentQueue } from 'net.kyori.adventure.text.minimessage.tag.resolver';
import { Builder } from 'net.kyori.adventure.text.minimessage.MiniMessage';
import { ComponentSerializer } from 'net.kyori.adventure.text.serializer';
import { Root } from 'net.kyori.adventure.text.minimessage.tree.Node';
/**
 * An exception thrown when an error occurs while parsing a MiniMessage string.
 *
 * @since 4.10.0
*/
export class ParsingException extends RuntimeException {
  static readonly LOCATION_UNKNOWN: number;
  /**
   * Get the input message which caused this exception.
   *
   * @return the original input message
   * @since 4.10.0
  */
  originalText(): string;
  /**
   * Get the detail message optionally passed with this exception.
   *
   * Unlike {@link #getMessage()}, this method does not include location information.
   *
   * @return the detail message passed to this exception
   * @since 4.10.0
  */
  detailMessage(): string | null;
  /**
   * Get the start index of the location which caused this exception.
   *
   * This index is an index into {@link #originalText()}. If location is unknown, {@link #LOCATION_UNKNOWN} will be returned instead.
   *
   * @return the start index
   * @since 4.10.0
  */
  startIndex(): number;
  /**
   * Get the end index of the location which caused this exception.
   *
   * This index is an index into {@link #originalText()}. If location is unknown, {@link #LOCATION_UNKNOWN} will be returned instead.
   *
   * @return the end index
   * @since 4.10.0
  */
  endIndex(): number;
}
/**
 * MiniMessage is a textual representation of components.
 *
 * This class allows you to serialize and deserialize them, strip
 * or escape them.
 *
 * @since 4.10.0
*/
export class MiniMessage extends ComponentSerializer<Component, Component, string> {
  /**
   * Gets a simple instance with default settings.
   *
   * @return a simple instance
   * @since 4.10.0
  */
  static miniMessage(): MiniMessage;
  /**
   * Escapes all known tags in the input message, so that they are ignored in deserialization.
   *
   * Useful for untrusted input.
   *
   * Only globally known tags will be escaped. Use the overload that takes a {@link TagResolver} if any custom tags should be handled.
   *
   * @param input the input message, with potential tags
   * @return the output, with escaped tags
   * @since 4.10.0
  */
  escapeTags(input: string): string;
  /**
   * Escapes all known tags in the input message, so that they are ignored in deserialization.
   *
   * Useful for untrusted input.
   *
   * @param input the input message, with potential tags
   * @param tagResolver the tag resolver for any additional tags to handle
   * @return the output, with escaped tags
   * @since 4.10.0
  */
  escapeTags(input: string, tagResolver: TagResolver): string;
  /**
   * Escapes all known tags in the input message, so that they are ignored in deserialization.
   *
   * Useful for untrusted input.
   *
   * @param input the input message, with potential tags
   * @param tagResolvers a series of tag resolvers to apply extra tags from, last specified taking priority
   * @return the output, with escaped tags
   * @since 4.10.0
  */
  escapeTags(input: string, ...tagResolvers: TagResolver[]): string;
  /**
   * Removes all supported tags in the input message.
   *
   * Useful for untrusted input.
   *
   * Only globally known tags will be stripped. Use the overload that takes a {@link TagResolver} if any custom tags should be handled.
   *
   * @param input the input message, with potential tags
   * @return the output, without tags
   * @since 4.10.0
  */
  stripTags(input: string): string;
  /**
   * Removes all known tags in the input message, so that they are ignored in deserialization.
   *
   * Useful for untrusted input.
   *
   * @param input the input message, with tags
   * @param tagResolver the tag resolver for any additional tags to handle
   * @return the output, without tags
   * @since 4.10.0
  */
  stripTags(input: string, tagResolver: TagResolver): string;
  /**
   * Removes all known tags in the input message, so that they are ignored in deserialization.
   *
   * Useful for untrusted input.
   *
   * @param input the input message, with tags
   * @param tagResolvers a series of tag resolvers to apply extra tags from, last specified taking priority
   * @return the output, without tags
   * @since 4.10.0
  */
  stripTags(input: string, ...tagResolvers: TagResolver[]): string;
  /**
   * Deserializes a string into a component, with a tag resolver to parse tags of the form ``.
   *
   * Tags will be resolved from the resolver parameter before the resolver provided in the builder is used.
   *
   * @param input the input string
   * @param tagResolver the tag resolver for any additional tags to handle
   * @return the output component
   * @since 4.10.0
  */
  deserialize(input: string, tagResolver: TagResolver): Component;
  /**
   * Deserializes a string into a component, with a tag resolver to parse tags of the form ``.
   *
   * Tags will be resolved from the resolver parameters before the resolver provided in the builder is used.
   *
   * @param input the input string
   * @param tagResolvers a series of tag resolvers to apply extra tags from, last specified taking priority
   * @return the output component
   * @since 4.10.0
  */
  deserialize(input: string, ...tagResolvers: TagResolver[]): Component;
  /**
   * Deserializes a string into a tree of parsed elements,
   * This is intended for inspecting the output of the parser for debugging purposes.
   *
   * @param input the input string
   * @return the root of the resulting tree
   * @since 4.10.0
  */
  deserializeToTree(input: string): Root;
  /**
   * Deserializes a string into a tree of parsed elements, with a tag resolver to parse tags of the form ``.
   * This is intended for inspecting the output of the parser for debugging purposes.
   *
   * Tags will be resolved from the resolver parameter before the resolver provided in the builder is used.
   *
   * @param input the input string
   * @param tagResolver the tag resolver for any additional tags to handle
   * @return the root of the resulting tree
   * @since 4.10.0
  */
  deserializeToTree(input: string, tagResolver: TagResolver): Root;
  /**
   * Deserializes a string into a tree of parsed elements, with a tag resolver to parse tags of the form ``.
   * This is intended for inspecting the output of the parser for debugging purposes.
   *
   * Tags will be resolved from the resolver parameter before the resolver provided in the builder is used.
   *
   * @param input the input string
   * @param tagResolvers a series of tag resolvers to apply extra tags from, last specified taking priority
   * @return the root of the resulting tree
   * @since 4.10.0
  */
  deserializeToTree(input: string, ...tagResolvers: TagResolver[]): Root;
  /**
   * Creates a new {@link MiniMessage.Builder}.
   *
   * @return a builder
   * @since 4.10.0
  */
  static builder(): Builder;
}
/**
 * Parser context for use within transformations.
 *
 * This allows operating recursive parses, for cases where messages may include parse-specific tags.
 *
 * @since 4.10.0
*/
export class Context {
  /**
   * Deserializes a MiniMessage string using all the settings of this context.
   *
   * @param message the message to parse
   * @return the parsed message
   * @since 4.10.0
  */
  deserialize(message: string): Component;
  /**
   * Deserializes a MiniMessage string using all the settings of this context.
   *
   * @param message the message to parse
   * @param resolver additional tag resolver, added to all other resolvers in this parse, but taking priority in the event of a name overlap
   * @return the parsed message
   * @since 4.10.0
  */
  deserialize(message: string, resolver: TagResolver): Component;
  /**
   * Deserializes a MiniMessage string using all the settings of this context.
   *
   * @param message the message to parse
   * @param resolvers additional tag resolvers, added to all other resolvers in this parse, but taking priority in the event of a name overlap
   * @return the parsed message
   * @since 4.10.0
  */
  deserialize(message: string, ...resolvers: TagResolver[]): Component;
  /**
   * Create a new parsing exception.
   *
   * @param message a detail message describing the error
   * @param tags the tag parts which caused the error
   * @return the new parsing exception
   * @since 4.10.0
  */
  newException(message: string, tags: ArgumentQueue): ParsingException;
  /**
   * Create a new parsing exception without reference to a specific location.
   *
   * @param message a detail message describing the error
   * @return the new parsing exception
   * @since 4.10.0
  */
  newException(message: string): ParsingException;
  /**
   * Create a new parsing exception.
   *
   * @param message a detail message describing the error
   * @param cause the cause
   * @param args arguments that caused the errors
   * @return the new parsing exception
   * @since 4.10.0
  */
  newException(message: string, cause: Throwable | null, args: ArgumentQueue): ParsingException;
}

}
declare module 'net.kyori.adventure.text.minimessage.tag.standard' {
import { Component } from 'net.kyori.adventure.text';
import { Inserting } from 'net.kyori.adventure.text.minimessage.tag';
import { TagResolver } from 'net.kyori.adventure.text.minimessage.tag.resolver';
import { Stream } from 'java.util.stream';
import { ExaminableProperty, Examinable } from 'net.kyori.examination';
import { TextDecoration, TextColor } from 'net.kyori.adventure.text.format';
/**
 * Tag types distributed with MiniMessage.
 *
 * All built-in types are included in the default tag resolver.
 *
 * @since 4.10.0
*/
export class StandardTags {
  /**
   * Get a resolver for a specific text decoration.
   *
   * This tag supports both the standard names from {@link TextDecoration#NAMES} as well as a few aliases from {@link DecorationTag}.
   *
   * @param decoration the decoration to have a tag for
   * @return a resolver for a certain decoration's tags
   * @since 4.10.0
  */
  static decorations(decoration: TextDecoration): TagResolver;
  /**
   * Get a resolver for all decoration tags.
   *
   * This tag supports both standard names from {@link TextDecoration#NAMES} as well as a few aliases from {@link DecorationTag}.
   *
   * @return a resolver for all decoration tags
   * @since 4.10.0
  */
  static decorations(): TagResolver;
  /**
   * Get a resolver for the {@value ColorTagResolver#COLOR} tags.
   *
   * This tag supports both hex string colors as well as {@linkplain NamedTextColor named colors}.
   *
   * @return a resolver for the {@value ColorTagResolver#COLOR} tags
   * @since 4.10.0
  */
  static color(): TagResolver;
  /**
   * Get a resolver for the {@value HoverTag#HOVER} tag.
   *
   * @return a resolver for the {@value HoverTag#HOVER} tag
   * @since 4.10.0
  */
  static hoverEvent(): TagResolver;
  /**
   * Get a resolver for the {@value ClickTag#CLICK} tag.
   *
   * @return a resolver for the {@value ClickTag#CLICK} tag
   * @since 4.10.0
  */
  static clickEvent(): TagResolver;
  /**
   * Get a resolver for the {@value KeybindTag#KEYBIND} tag.
   *
   * @return a resolver for the {@value KeybindTag#KEYBIND} tag
   * @since 4.10.0
  */
  static keybind(): TagResolver;
  /**
   * Get a resolver for the {@value TranslatableTag#TRANSLATE} tag.
   *
   * This tag also responds to {@value TranslatableTag#LANG} and {@value TranslatableTag#TR}.
   *
   * @return a resolver for the {@value TranslatableTag#TRANSLATE} tag
   * @since 4.10.0
  */
  static translatable(): TagResolver;
  /**
   * Get a resolver for the {@value InsertionTag#INSERTION} tag.
   *
   * @return a resolver for the {@value InsertionTag#INSERTION} tag
   * @since 4.10.0
  */
  static insertion(): TagResolver;
  /**
   * Get a resolver for the {@value FontTag#FONT} tag.
   *
   * @return a resolver for the {@value FontTag#FONT} tag
   * @since 4.10.0
  */
  static font(): TagResolver;
  /**
   * Get a resolver for the {@value GradientTag#GRADIENT} tag.
   *
   * @return a resolver for the {@value GradientTag#GRADIENT} tag
   * @since 4.10.0
  */
  static gradient(): TagResolver;
  /**
   * Get a resolver for the {@value RainbowTag#RAINBOW} tag.
   *
   * @return a resolver for the {@value RainbowTag#RAINBOW} tag
   * @since 4.10.0
  */
  static rainbow(): TagResolver;
  /**
   * Get a resolver for the {@value TransitionTag#TRANSITION} tag.
   *
   * @return a resolver for the {@value TransitionTag#TRANSITION} tag
   * @since 4.10.0
  */
  static transition(): TagResolver;
  /**
   * Get a resolver for the {@value ResetTag#RESET} tag.
   *
   * @return a resolver for the {@value ResetTag#RESET} tag.
   * @since 4.10.0
  */
  static reset(): TagResolver;
  /**
   * Get a resolver for the {@value NewlineTag#NEWLINE} tag.
   *
   * This tag also responds to {@value NewlineTag#BR}.
   *
   * @return a resolver for the {@value NewlineTag#NEWLINE} tag.
   * @since 4.10.0
  */
  static newline(): TagResolver;
  /**
   * Get a resolver for the {@value SelectorTag#SELECTOR} tag.
   *
   * This tag also responds to {@value SelectorTag#SEL}.
   *
   * @return a resolver for the {@value SelectorTag#SELECTOR} tag
   * @since 4.11.0
  */
  static selector(): TagResolver;
  /**
   * Get a resolver that handles all default standard tags.
   *
   * This will currently return all standard tags, but in the future MiniMessage
   * may add tags that are not enabled by default, and which must explicitly be opted-in to.
   *
   * @return the resolver for built-in tags
   * @since 4.10.0
  */
  static defaults(): TagResolver;
}
/**
 * Changes the color based on a phase param.
 *
 * @since 4.10.0
*/
export class TransitionTag extends Inserting {
  static readonly TRANSITION: string;
  /**
   * Returns the component this tag produces.
   *
   * @return the component this tag produces
   * @since 4.10.0
  */
  value(): Component;
  examinableProperties(): Stream<ExaminableProperty>;
  equals(other: any): boolean;
  hashCode(): number;
}
export interface TransitionTag extends Inserting, Examinable {}

}
declare module 'net.kyori.adventure.text.minimessage.tag.resolver.TagResolver' {
import { Iterable } from 'java.lang';
import { Set } from 'java.util';
import { Tag } from 'net.kyori.adventure.text.minimessage.tag';
import { TagResolver, ArgumentQueue } from 'net.kyori.adventure.text.minimessage.tag.resolver';
import { BiFunction } from 'java.util.function';
import { Context } from 'net.kyori.adventure.text.minimessage';
/**
 * A resolver that only handles a single tag key.
 *
 * @see TagResolver#resolver(String, Tag)
 * @since 4.10.0
*/
export class Single {
  /**
   * The key this resolver matches.
   *
   * The returned key is compared case-insensitively.
   *
   * @return the key
   * @since 4.10.0
  */
  key(): string;
  /**
   * The tag returned by this resolver when the key is matching.
   *
   * @return the tag
   * @since 4.10.0
  */
  tag(): Tag;
  resolve(name: string): Tag | null;
  has(name: string): boolean;
}
/**
 * A tag resolver that only handles tags which do not take arguments.
 *
 * @since 4.10.0
*/
export class WithoutArguments extends TagResolver {
  /**
   * Resolve a tag based only on the provided name.
   *
   * @param name the provided name
   * @return a tag, if any is known.
   * @since 4.10.0
  */
  resolve(name: string): Tag | null;
  /**
   * Check if this resolver knows of a tag.
   *
   * @param name the tag name
   * @return whether this tag is present
   * @since 4.10.0
  */
  has(name: string): boolean;
  resolve(name: string, arguments: ArgumentQueue, ctx: Context): Tag | null;
}
/**
 * A builder to gradually construct tag resolvers.
 *
 * Entries added later will take priority over entries added earlier.
 *
 * @since 4.10.0
*/
export class Builder {
  /**
   * Add a single tag to this resolver.
   *
   * @param name the tag identifier
   * @param tag the tag logic
   * @return this builder
   * @since 4.10.0
  */
  tag(name: string, tag: Tag): Builder;
  /**
   * Add a single dynamically created tag to this resolver.
   *
   * @param name the name to respond to
   * @param handler the tag handler, may throw {@link ParsingException} if provided arguments are in an invalid format
   * @return this builder
   * @since 4.10.0
  */
  tag(name: string, handler: BiFunction<ArgumentQueue, Context, Tag>): Builder;
  /**
   * Add a single dynamically created tag to this resolver.
   *
   * @param names the names to respond to
   * @param handler the tag handler, may throw {@link ParsingException} if provided arguments are in an invalid format
   * @return this builder
   * @since 4.10.0
  */
  tag(names: Set<string>, handler: BiFunction<ArgumentQueue, Context, Tag>): Builder;
  /**
   * Add a placeholder resolver to those queried by the result of this builder.
   *
   * @param resolver the resolver to add
   * @return this builder
   * @since 4.10.0
  */
  resolver(resolver: TagResolver): Builder;
  /**
   * Add placeholder resolvers to those queried by the result of this builder.
   *
   * @param resolvers the resolvers to add
   * @return this builder
   * @since 4.10.0
  */
  resolvers(...resolvers: TagResolver[]): Builder;
  /**
   * Add placeholder resolvers to those queried by the result of this builder.
   *
   * @param resolvers the resolvers to add
   * @return this builder
   * @since 4.10.0
  */
  resolvers(resolvers: Iterable<TagResolver>): Builder;
  /**
   * Add a resolver that dynamically queries and caches based on the provided function.
   *
   * @param dynamic the function to query for replacements
   * @return this builder
   * @since 4.10.0
  */
  caching(dynamic: WithoutArguments): Builder;
  /**
   * Create a placeholder resolver based on the input.
   *
   * If no elements are added, this may return an empty resolver.
   *
   * @return the resolver
   * @since 4.10.0
  */
  build(): TagResolver;
}

}
