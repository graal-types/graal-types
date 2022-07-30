declare module 'java.io.ObjectInputStream' {
import { ObjectStreamClass } from 'java.io';
/**
 * Provide access to the persistent fields read from the input stream.
*/
export class GetField {
  /**
   * Constructor for subclasses to call.
  */
  constructor();
  /**
   * Get the ObjectStreamClass that describes the fields in the stream.
   *
   * @return  the descriptor class that describes the serializable fields
  */
  getObjectStreamClass(): ObjectStreamClass;
  /**
   * Return true if the named field is defaulted and has no value in this
   * stream.
   *
   * @param  name the name of the field
   * @return true, if and only if the named field is defaulted
   * @throws IOException if there are I/O errors while reading from
   *         the underlying `InputStream`
   * @throws IllegalArgumentException if `name` does not
   *         correspond to a serializable field
  */
  defaulted(name: string): boolean;
  /**
   * Get the value of the named boolean field from the persistent field.
   *
   * @param  name the name of the field
   * @param  val the default value to use if `name` does not
   *         have a value
   * @return the value of the named `boolean` field
   * @throws IOException if there are I/O errors while reading from the
   *         underlying `InputStream`
   * @throws IllegalArgumentException if type of `name` is
   *         not serializable or if the field type is incorrect
  */
  get(name: string, val: boolean): boolean;
  /**
   * Get the value of the named byte field from the persistent field.
   *
   * @param  name the name of the field
   * @param  val the default value to use if `name` does not
   *         have a value
   * @return the value of the named `byte` field
   * @throws IOException if there are I/O errors while reading from the
   *         underlying `InputStream`
   * @throws IllegalArgumentException if type of `name` is
   *         not serializable or if the field type is incorrect
  */
  get(name: string, val: number): number;
  /**
   * Get the value of the named char field from the persistent field.
   *
   * @param  name the name of the field
   * @param  val the default value to use if `name` does not
   *         have a value
   * @return the value of the named `char` field
   * @throws IOException if there are I/O errors while reading from the
   *         underlying `InputStream`
   * @throws IllegalArgumentException if type of `name` is
   *         not serializable or if the field type is incorrect
  */
  get(name: string, val: string): string;
  /**
   * Get the value of the named Object field from the persistent field.
   *
   * @param  name the name of the field
   * @param  val the default value to use if `name` does not
   *         have a value
   * @return the value of the named `Object` field
   * @throws IOException if there are I/O errors while reading from the
   *         underlying `InputStream`
   * @throws IllegalArgumentException if type of `name` is
   *         not serializable or if the field type is incorrect
  */
  get(name: string, val: any): any;
}

}
declare module 'java.io.ObjectInputFilter' {
import { Enum, Class } from 'java.lang';
import { ObjectInputFilter } from 'java.io';
import { Logger } from 'java.lang.System';
/**
 * FilterInfo provides access to information about the current object
 * being deserialized and the status of the {@link ObjectInputStream}.
 * @since 9
*/
export class FilterInfo {
  /**
   * The class of an object being deserialized.
   * For arrays, it is the array type.
   * For example, the array class name of a 2 dimensional array of strings is
   * "`[[Ljava.lang.String;`".
   * To check the array's element type, iteratively use
   * {@link Class#getComponentType() Class.getComponentType} while the result
   * is an array and then check the class.
   * The `serialClass is null` in the case where a new object is not being
   * created and to give the filter a chance to check the depth, number of
   * references to existing objects, and the stream size.
   *
   * @return class of an object being deserialized; may be null
  */
  serialClass(): Class<any>;
  /**
   * The number of array elements when deserializing an array of the class.
   *
   * @return the non-negative number of array elements when deserializing
   * an array of the class, otherwise -1
  */
  arrayLength(): number;
  /**
   * The current depth.
   * The depth starts at `1` and increases for each nested object and
   * decrements when each nested object returns.
   *
   * @return the current depth
  */
  depth(): number;
  /**
   * The current number of object references.
   *
   * @return the non-negative current number of object references
  */
  references(): number;
  /**
   * The current number of bytes consumed.
   * @implSpec  `streamBytes` is implementation specific
   * and may not be directly related to the object in the stream
   * that caused the callback.
   *
   * @return the non-negative current number of bytes consumed
  */
  streamBytes(): number;
}
/**
 * The status of a check on the class, array length, number of references,
 * depth, and stream size.
 *
 * @since 9
*/
export class Status extends Enum<Status> {
  /**
   * The status is undecided, not allowed and not rejected.
  */
  static readonly UNDECIDED: Status;
  /**
   * The status is allowed.
  */
  static readonly ALLOWED: Status;
  /**
   * The status is rejected.
  */
  static readonly REJECTED: Status;
  static valueOf(name: string): Status;
  static values(): Status[];
}
/**
 * A utility class to set and get the system-wide filter or create a filter
 * from a pattern string. If a system-wide filter is set, it will be
 * used for each {@link ObjectInputStream} that does not set its own filter.
 * 
 * When setting the filter, it should be stateless and idempotent,
 * reporting the same result when passed the same arguments.
 * 
 * The filter is configured during the initialization of the `ObjectInputFilter.Config`
 * class. For example, by calling {@link #getSerialFilter() Config.getSerialFilter}.
 * If the Java virtual machine is started with the system property
 * {@systemProperty jdk.serialFilter}, its value is used to configure the filter.
 * If the system property is not defined, and the {@link java.security.Security} property
 * `jdk.serialFilter` is defined then it is used to configure the filter.
 * Otherwise, the filter is not configured during initialization and
 * can be set with {@link #setSerialFilter(ObjectInputFilter) Config.setSerialFilter}.
 * Setting the `jdk.serialFilter` with {@link System#setProperty(String, String)
 * System.setProperty} does not set the filter.
 * The syntax for each property is the same as for the
 * {@link #createFilter(String) createFilter} method.
 *
 * @since 9
*/
export class Config {
  /**
   * Returns the system-wide serialization filter or `null` if not configured.
   *
   * @return the system-wide serialization filter or `null` if not configured
  */
  static getSerialFilter(): ObjectInputFilter;
  /**
   * Set the system-wide filter if it has not already been configured or set.
   *
   * @param filter the serialization filter to set as the system-wide filter; not null
   * @throws SecurityException if there is security manager and the
   *       `SerializablePermission("serialFilter")` is not granted
   * @throws IllegalStateException if the filter has already been set `non-null`
  */
  static setSerialFilter(serialFilter: ObjectInputFilter);
  /**
   * Returns an ObjectInputFilter from a string of patterns.
   * 
   * Patterns are separated by ";" (semicolon). Whitespace is significant and
   * is considered part of the pattern.
   * If a pattern includes an equals assignment, "`=`" it sets a limit.
   * If a limit appears more than once the last value is used.
   * 
   *     maxdepth=`value` - the maximum depth of a graph
   *     maxrefs=`value`  - the maximum number of internal references
   *     maxbytes=`value` - the maximum number of bytes in the input stream
   *     maxarray=`value` - the maximum array length allowed
   * 
   * 
   * Other patterns match or reject class or package name
   * as returned from {@link Class#getName() Class.getName()} and
   * if an optional module name is present
   * {@link Module#getName() class.getModule().getName()}.
   * Note that for arrays the element type is used in the pattern,
   * not the array type.
   * 
   * If the pattern starts with "!", the class is rejected if the remaining pattern is matched;
   *     otherwise the class is allowed if the pattern matches.
   * If the pattern contains "/", the non-empty prefix up to the "/" is the module name;
   *     if the module name matches the module name of the class then
   *     the remaining pattern is matched with the class name.
   *     If there is no "/", the module name is not compared.
   * If the pattern ends with ".**" it matches any class in the package and all subpackages.
   * If the pattern ends with ".*" it matches any class in the package.
   * If the pattern ends with "*", it matches any class with the pattern as a prefix.
   * If the pattern is equal to the class name, it matches.
   * Otherwise, the pattern is not matched.
   * 
   * 
   * The resulting filter performs the limit checks and then
   * tries to match the class, if any. If any of the limits are exceeded,
   * the filter returns {@link Status#REJECTED Status.REJECTED}.
   * If the class is an array type, the class to be matched is the element type.
   * Arrays of any number of dimensions are treated the same as the element type.
   * For example, a pattern of "`!example.Foo`",
   * rejects creation of any instance or array of `example.Foo`.
   * The first pattern that matches, working from left to right, determines
   * the {@link Status#ALLOWED Status.ALLOWED}
   * or {@link Status#REJECTED Status.REJECTED} result.
   * If the limits are not exceeded and no pattern matches the class,
   * the result is {@link Status#UNDECIDED Status.UNDECIDED}.
   *
   * @param pattern the pattern string to parse; not null
   * @return a filter to check a class being deserialized;
   *          `null` if no patterns
   * @throws IllegalArgumentException if the pattern string is illegal or
   *         malformed and cannot be parsed.
   *         In particular, if any of the following is true:
   * 
   *    if a limit is missing the name or the name is not one of
   *        "maxdepth", "maxrefs", "maxbytes", or "maxarray"
   *    if the value of the limit can not be parsed by
   *        {@link Long#parseLong Long.parseLong} or is negative
   *    if the pattern contains "/" and the module name is missing
   *        or the remaining pattern is empty
   *    if the package is missing for ".*" and ".**"
   * 
  */
  static createFilter(pattern: string): ObjectInputFilter;
}

}
declare module 'java.io.ObjectOutputStream' {
import { ObjectOutput } from 'java.io';
/**
 * Provide programmatic access to the persistent fields to be written
 * to ObjectOutput.
 *
 * @since 1.2
*/
export class PutField {
  /**
   * Constructor for subclasses to call.
  */
  constructor();
  /**
   * Put the value of the named boolean field into the persistent field.
   *
   * @param  name the name of the serializable field
   * @param  val the value to assign to the field
   * @throws IllegalArgumentException if `name` does not
   * match the name of a serializable field for the class whose fields
   * are being written, or if the type of the named field is not
   * `boolean`
  */
  put(name: string, val: boolean): void;
  /**
   * Put the value of the named byte field into the persistent field.
   *
   * @param  name the name of the serializable field
   * @param  val the value to assign to the field
   * @throws IllegalArgumentException if `name` does not
   * match the name of a serializable field for the class whose fields
   * are being written, or if the type of the named field is not
   * `byte`
  */
  put(name: string, val: number): void;
  /**
   * Put the value of the named char field into the persistent field.
   *
   * @param  name the name of the serializable field
   * @param  val the value to assign to the field
   * @throws IllegalArgumentException if `name` does not
   * match the name of a serializable field for the class whose fields
   * are being written, or if the type of the named field is not
   * `char`
  */
  put(name: string, val: string): void;
  /**
   * Put the value of the named Object field into the persistent field.
   *
   * @param  name the name of the serializable field
   * @param  val the value to assign to the field
   *         (which may be `null`)
   * @throws IllegalArgumentException if `name` does not
   * match the name of a serializable field for the class whose fields
   * are being written, or if the type of the named field is not a
   * reference type
  */
  put(name: string, val: any): void;
  /**
   * Write the data and fields to the specified ObjectOutput stream,
   * which must be the same stream that produced this
   * `PutField` object.
   *
   * @param  out the stream to write the data and fields to
   * @throws IOException if I/O errors occur while writing to the
   *         underlying stream
   * @throws IllegalArgumentException if the specified stream is not
   *         the same stream that produced this `PutField`
   *         object
   * @deprecated This method does not write the values contained by this
   *         `PutField` object in a proper format, and may
   *         result in corruption of the serialization stream.  The
   *         correct way to write `PutField` data is by
   *         calling the {@link java.io.ObjectOutputStream#writeFields()}
   *         method.
  */
  write(out: ObjectOutput): void;
}

}
declare module 'java.io' {
import { Field, Constructor, Method } from 'java.lang.reflect';
import { ProtectionDomain, BasicPermission, PermissionCollection, Permission } from 'java.security';
import { Locale, Enumeration, Formatter, List, Map } from 'java.util';
import { Stream } from 'java.util.stream';
import { ValidationList, GetField, BlockDataInputStream, HandleTable } from 'java.io.ObjectInputStream';
import { CharBuffer } from 'java.nio';
import { DeserializationConstructorsCache, ClassDataSlot, FieldReflector, ExceptionInfo } from 'java.io.ObjectStreamClass';
import { FileChannel } from 'java.nio.channels';
import { PathStatus } from 'java.io.File';
import { Path, FileSystem } from 'java.nio.file';
import { CharsetDecoder, Charset, CharsetEncoder } from 'java.nio.charset';
import { Comparable, AutoCloseable, Appendable, CharSequence, Error, Exception, Thread, StringBuffer, RuntimeException, Throwable, Readable, Class, ClassNotFoundException } from 'java.lang';
import { URI, URL } from 'java.net';
import { MethodHandle } from 'java.lang.invoke';
import { BlockDataOutputStream, ReplaceTable, PutFieldImpl, DebugTraceInfoStack, HandleTable as java_io_ObjectOutputStream_HandleTable, PutField } from 'java.io.ObjectOutputStream';
import { Status, FilterInfo } from 'java.io.ObjectInputFilter';
export class RandomAccessFile extends DataOutput {
  /**
   * Creates a random access file stream to read from, and optionally
   * to write to, a file with the specified name. A new
   * {@link FileDescriptor} object is created to represent the
   * connection to the file.
   *
   *  The `mode` argument specifies the access mode with which the
   * file is to be opened.  The permitted values and their meanings are as
   * specified for the `RandomAccessFile(File,String)` constructor.
   *
   * 
   * If there is a security manager, its `checkRead` method
   * is called with the `name` argument
   * as its argument to see if read access to the file is allowed.
   * If the mode allows writing, the security manager's
   * `checkWrite` method
   * is also called with the `name` argument
   * as its argument to see if write access to the file is allowed.
   *
   * @param      name   the system-dependent filename
   * @param      mode   the access mode
   * @throws     IllegalArgumentException  if the mode argument is not equal
   *             to one of `"r"`, `"rw"`, `"rws"`, or
   *             `"rwd"`
   * @throws     FileNotFoundException
   *             if the mode is `"r"` but the given string does not
   *             denote an existing regular file, or if the mode begins with
   *             `"rw"` but the given string does not denote an
   *             existing, writable regular file and a new regular file of
   *             that name cannot be created, or if some other error occurs
   *             while opening or creating the file
   * @throws      SecurityException   if a security manager exists and its
   *             `checkRead` method denies read access to the file
   *             or the mode is `"rw"` and the security manager's
   *             `checkWrite` method denies write access to the file
   * @see        java.lang.SecurityException
   * @see        java.lang.SecurityManager#checkRead(java.lang.String)
   * @see        java.lang.SecurityManager#checkWrite(java.lang.String)
   * @revised 1.4
  */
  constructor(name: string, mode: string);
  /**
   * Creates a random access file stream to read from, and optionally to
   * write to, the file specified by the {@link File} argument.  A new {@link
   * FileDescriptor} object is created to represent this file connection.
   *
   * The `mode` argument specifies the access mode
   * in which the file is to be opened.  The permitted values and their
   * meanings are:
   *
   * 
   * Access mode permitted values and meanings
   * 
   * ValueMeaning
   * 
   * 
   * `"r"`
   *      Open for reading only. Invoking any of the `write`
   *     methods of the resulting object will cause an
   *     {@link java.io.IOException} to be thrown.
   * `"rw"`
   *      Open for reading and writing.  If the file does not already
   *     exist then an attempt will be made to create it.
   * `"rws"`
   *      Open for reading and writing, as with `"rw"`, and also
   *     require that every update to the file's content or metadata be
   *     written synchronously to the underlying storage device.
   * `"rwd"`
   *      Open for reading and writing, as with `"rw"`, and also
   *     require that every update to the file's content be written
   *     synchronously to the underlying storage device.
   * 
   * 
   *
   * The `"rws"` and `"rwd"` modes work much like the {@link
   * java.nio.channels.FileChannel#force(boolean) force(boolean)} method of
   * the {@link java.nio.channels.FileChannel} class, passing arguments of
   * `true` and `false`, respectively, except that they always
   * apply to every I/O operation and are therefore often more efficient.  If
   * the file resides on a local storage device then when an invocation of a
   * method of this class returns it is guaranteed that all changes made to
   * the file by that invocation will have been written to that device.  This
   * is useful for ensuring that critical information is not lost in the
   * event of a system crash.  If the file does not reside on a local device
   * then no such guarantee is made.
   *
   * The `"rwd"` mode can be used to reduce the number of I/O
   * operations performed.  Using `"rwd"` only requires updates to the
   * file's content to be written to storage; using `"rws"` requires
   * updates to both the file's content and its metadata to be written, which
   * generally requires at least one more low-level I/O operation.
   *
   * If there is a security manager, its `checkRead` method is
   * called with the pathname of the `file` argument as its
   * argument to see if read access to the file is allowed.  If the mode
   * allows writing, the security manager's `checkWrite` method is
   * also called with the path argument to see if write access to the file is
   * allowed.
   *
   * @param      file   the file object
   * @param      mode   the access mode, as described
   *                    above
   * @throws     IllegalArgumentException  if the mode argument is not equal
   *             to one of `"r"`, `"rw"`, `"rws"`, or
   *             `"rwd"`
   * @throws     FileNotFoundException
   *             if the mode is `"r"` but the given file object does
   *             not denote an existing regular file, or if the mode begins
   *             with `"rw"` but the given file object does not denote
   *             an existing, writable regular file and a new regular file of
   *             that name cannot be created, or if some other error occurs
   *             while opening or creating the file
   * @throws      SecurityException  if a security manager exists and its
   *             `checkRead` method denies read access to the file
   *             or the mode is `"rw"` and the security manager's
   *             `checkWrite` method denies write access to the file
   * @see        java.lang.SecurityManager#checkRead(java.lang.String)
   * @see        java.lang.SecurityManager#checkWrite(java.lang.String)
   * @see        java.nio.channels.FileChannel#force(boolean)
   * @revised 1.4
  */
  constructor(file: File, mode: string);
  /**
   * Returns the opaque file descriptor object associated with this
   * stream.
   *
   * @return     the file descriptor object associated with this stream.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FileDescriptor
  */
  getFD(): FileDescriptor;
  /**
   * Returns the unique {@link java.nio.channels.FileChannel FileChannel}
   * object associated with this file.
   *
   *  The {@link java.nio.channels.FileChannel#position()
   * position} of the returned channel will always be equal to
   * this object's file-pointer offset as returned by the {@link
   * #getFilePointer getFilePointer} method.  Changing this object's
   * file-pointer offset, whether explicitly or by reading or writing bytes,
   * will change the position of the channel, and vice versa.  Changing the
   * file's length via this object will change the length seen via the file
   * channel, and vice versa.
   *
   * @return  the file channel associated with this file
   *
   * @since 1.4
  */
  getChannel(): FileChannel;
  /**
   * Reads a byte of data from this file. The byte is returned as an
   * integer in the range 0 to 255 (`0x00-0x0ff`). This
   * method blocks if no input is yet available.
   * 
   * Although `RandomAccessFile` is not a subclass of
   * `InputStream`, this method behaves in exactly the same
   * way as the {@link InputStream#read()} method of
   * `InputStream`.
   *
   * @return     the next byte of data, or `-1` if the end of the
   *             file has been reached.
   * @throws     IOException  if an I/O error occurs. Not thrown if
   *                          end-of-file has been reached.
  */
  read(): number;
  /**
   * Reads up to `len` bytes of data from this file into an
   * array of bytes. This method blocks until at least one byte of input
   * is available.
   * 
   * Although `RandomAccessFile` is not a subclass of
   * `InputStream`, this method behaves in exactly the
   * same way as the {@link InputStream#read(byte[], int, int)} method of
   * `InputStream`.
   *
   * @param      b     the buffer into which the data is read.
   * @param      off   the start offset in array `b`
   *                   at which the data is written.
   * @param      len   the maximum number of bytes read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the file has been reached.
   * @throws     IOException If the first byte cannot be read for any reason
   *             other than end of file, or if the random access file has been closed,
   *             or if some other I/O error occurs.
   * @throws     NullPointerException If `b` is `null`.
   * @throws     IndexOutOfBoundsException If `off` is negative,
   *             `len` is negative, or `len` is greater than
   *             `b.length - off`
  */
  read(b: number[], off: number, len: number): number;
  /**
   * Reads up to `b.length` bytes of data from this file
   * into an array of bytes. This method blocks until at least one byte
   * of input is available.
   * 
   * Although `RandomAccessFile` is not a subclass of
   * `InputStream`, this method behaves in exactly the
   * same way as the {@link InputStream#read(byte[])} method of
   * `InputStream`.
   *
   * @param      b   the buffer into which the data is read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             this file has been reached.
   * @throws     IOException If the first byte cannot be read for any reason
   *             other than end of file, or if the random access file has been closed,
   *             or if some other I/O error occurs.
   * @throws     NullPointerException If `b` is `null`.
  */
  read(b: number[]): number;
  /**
   * Reads `b.length` bytes from this file into the byte
   * array, starting at the current file pointer. This method reads
   * repeatedly from the file until the requested number of bytes are
   * read. This method blocks until the requested number of bytes are
   * read, the end of the stream is detected, or an exception is thrown.
   *
   * @param   b   the buffer into which the data is read.
   * @throws  NullPointerException if `b` is `null`.
   * @throws  EOFException  if this file reaches the end before reading
   *              all the bytes.
   * @throws  IOException   if an I/O error occurs.
  */
  readFully(b: number[]): void;
  /**
   * Reads exactly `len` bytes from this file into the byte
   * array, starting at the current file pointer. This method reads
   * repeatedly from the file until the requested number of bytes are
   * read. This method blocks until the requested number of bytes are
   * read, the end of the stream is detected, or an exception is thrown.
   *
   * @param   b     the buffer into which the data is read.
   * @param   off   the start offset into the data array `b`.
   * @param   len   the number of bytes to read.
   * @throws  NullPointerException if `b` is `null`.
   * @throws  IndexOutOfBoundsException if `off` is negative,
   *                `len` is negative, or `len` is greater than
   *                `b.length - off`.
   * @throws  EOFException  if this file reaches the end before reading
   *                all the bytes.
   * @throws  IOException   if an I/O error occurs.
  */
  readFully(b: number[], off: number, len: number): void;
  /**
   * Attempts to skip over `n` bytes of input discarding the
   * skipped bytes.
   * 
   *
   * This method may skip over some smaller number of bytes, possibly zero.
   * This may result from any of a number of conditions; reaching end of
   * file before `n` bytes have been skipped is only one
   * possibility. This method never throws an `EOFException`.
   * The actual number of bytes skipped is returned.  If `n`
   * is negative, no bytes are skipped.
   *
   * @param      n   the number of bytes to be skipped.
   * @return     the actual number of bytes skipped.
   * @throws     IOException  if an I/O error occurs.
  */
  skipBytes(n: number): number;
  /**
   * Writes the specified byte to this file. The write starts at
   * the current file pointer.
   *
   * @param      b   the `byte` to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  write(b: number): void;
  /**
   * Writes `b.length` bytes from the specified byte array
   * to this file, starting at the current file pointer.
   *
   * @param      b   the data.
   * @throws     IOException  if an I/O error occurs.
  */
  write(b: number[]): void;
  /**
   * Writes `len` bytes from the specified byte array
   * starting at offset `off` to this file.
   *
   * @param      b     the data.
   * @param      off   the start offset in the data.
   * @param      len   the number of bytes to write.
   * @throws     IOException  if an I/O error occurs.
  */
  write(b: number[], off: number, len: number): void;
  /**
   * Returns the current offset in this file.
   *
   * @return     the offset from the beginning of the file, in bytes,
   *             at which the next read or write occurs.
   * @throws     IOException  if an I/O error occurs.
  */
  getFilePointer(): number;
  /**
   * Sets the file-pointer offset, measured from the beginning of this
   * file, at which the next read or write occurs.  The offset may be
   * set beyond the end of the file. Setting the offset beyond the end
   * of the file does not change the file length.  The file length will
   * change only by writing after the offset has been set beyond the end
   * of the file.
   *
   * @param      pos   the offset position, measured in bytes from the
   *                   beginning of the file, at which to set the file
   *                   pointer.
   * @throws     IOException  if `pos` is less than
   *                          `0` or if an I/O error occurs.
  */
  seek(pos: number): void;
  /**
   * Returns the length of this file.
   *
   * @return     the length of this file, measured in bytes.
   * @throws     IOException  if an I/O error occurs.
  */
  length(): number;
  /**
   * Sets the length of this file.
   *
   *  If the present length of the file as returned by the
   * `length` method is greater than the `newLength`
   * argument then the file will be truncated.  In this case, if the file
   * offset as returned by the `getFilePointer` method is greater
   * than `newLength` then after this method returns the offset
   * will be equal to `newLength`.
   *
   *  If the present length of the file as returned by the
   * `length` method is smaller than the `newLength`
   * argument then the file will be extended.  In this case, the contents of
   * the extended portion of the file are not defined.
   *
   * @param      newLength    The desired length of the file
   * @throws     IOException  If an I/O error occurs
   * @since      1.2
  */
  setLength(length: number): void;
  /**
   * Closes this random access file stream and releases any system
   * resources associated with the stream. A closed random access
   * file cannot perform input or output operations and cannot be
   * reopened.
   *
   *  If this file has an associated channel then the channel is closed
   * as well.
   *
   * @throws     IOException  if an I/O error occurs.
   *
   * @revised 1.4
  */
  close(): void;
  /**
   * Reads a `boolean` from this file. This method reads a
   * single byte from the file, starting at the current file pointer.
   * A value of `0` represents
   * `false`. Any other value represents `true`.
   * This method blocks until the byte is read, the end of the stream
   * is detected, or an exception is thrown.
   *
   * @return     the `boolean` value read.
   * @throws     EOFException  if this file has reached the end.
   * @throws     IOException   if an I/O error occurs.
  */
  readBoolean(): boolean;
  /**
   * Reads a signed eight-bit value from this file. This method reads a
   * byte from the file, starting from the current file pointer.
   * If the byte read is `b`, where
   * `0 <= b <= 255`,
   * then the result is:
   *      *     (byte)(b)
   * 
   * 
   * This method blocks until the byte is read, the end of the stream
   * is detected, or an exception is thrown.
   *
   * @return     the next byte of this file as a signed eight-bit
   *             `byte`.
   * @throws     EOFException  if this file has reached the end.
   * @throws     IOException   if an I/O error occurs.
  */
  readByte(): number;
  /**
   * Reads an unsigned eight-bit number from this file. This method reads
   * a byte from this file, starting at the current file pointer,
   * and returns that byte.
   * 
   * This method blocks until the byte is read, the end of the stream
   * is detected, or an exception is thrown.
   *
   * @return     the next byte of this file, interpreted as an unsigned
   *             eight-bit number.
   * @throws     EOFException  if this file has reached the end.
   * @throws     IOException   if an I/O error occurs.
  */
  readUnsignedByte(): number;
  /**
   * Reads a signed 16-bit number from this file. The method reads two
   * bytes from this file, starting at the current file pointer.
   * If the two bytes read, in order, are
   * `b1` and `b2`, where each of the two values is
   * between `0` and `255`, inclusive, then the
   * result is equal to:
   *      *     (short)((b1 << 8) | b2)
   * 
   * 
   * This method blocks until the two bytes are read, the end of the
   * stream is detected, or an exception is thrown.
   *
   * @return     the next two bytes of this file, interpreted as a signed
   *             16-bit number.
   * @throws     EOFException  if this file reaches the end before reading
   *               two bytes.
   * @throws     IOException   if an I/O error occurs.
  */
  readShort(): number;
  /**
   * Reads an unsigned 16-bit number from this file. This method reads
   * two bytes from the file, starting at the current file pointer.
   * If the bytes read, in order, are
   * `b1` and `b2`, where
   * `0 <= b1, b2 <= 255`,
   * then the result is equal to:
   *      *     (b1 << 8) | b2
   * 
   * 
   * This method blocks until the two bytes are read, the end of the
   * stream is detected, or an exception is thrown.
   *
   * @return     the next two bytes of this file, interpreted as an unsigned
   *             16-bit integer.
   * @throws     EOFException  if this file reaches the end before reading
   *               two bytes.
   * @throws     IOException   if an I/O error occurs.
  */
  readUnsignedShort(): number;
  /**
   * Reads a character from this file. This method reads two
   * bytes from the file, starting at the current file pointer.
   * If the bytes read, in order, are
   * `b1` and `b2`, where
   * `0 <= b1, b2 <= 255`,
   * then the result is equal to:
   *      *     (char)((b1 << 8) | b2)
   * 
   * 
   * This method blocks until the two bytes are read, the end of the
   * stream is detected, or an exception is thrown.
   *
   * @return     the next two bytes of this file, interpreted as a
   *                  `char`.
   * @throws     EOFException  if this file reaches the end before reading
   *               two bytes.
   * @throws     IOException   if an I/O error occurs.
  */
  readChar(): string;
  /**
   * Reads a signed 32-bit integer from this file. This method reads 4
   * bytes from the file, starting at the current file pointer.
   * If the bytes read, in order, are `b1`,
   * `b2`, `b3`, and `b4`, where
   * `0 <= b1, b2, b3, b4 <= 255`,
   * then the result is equal to:
   *      *     (b1 << 24) | (b2 << 16) + (b3 << 8) + b4
   * 
   * 
   * This method blocks until the four bytes are read, the end of the
   * stream is detected, or an exception is thrown.
   *
   * @return     the next four bytes of this file, interpreted as an
   *             `int`.
   * @throws     EOFException  if this file reaches the end before reading
   *               four bytes.
   * @throws     IOException   if an I/O error occurs.
  */
  readInt(): number;
  /**
   * Reads a signed 64-bit integer from this file. This method reads eight
   * bytes from the file, starting at the current file pointer.
   * If the bytes read, in order, are
   * `b1`, `b2`, `b3`,
   * `b4`, `b5`, `b6`,
   * `b7`, and `b8,` where:
   *      *     0 <= b1, b2, b3, b4, b5, b6, b7, b8 <=255,
   * 
   * 
   * then the result is equal to:
   *      *     ((long)b1 << 56) + ((long)b2 << 48)
   *     + ((long)b3 << 40) + ((long)b4 << 32)
   *     + ((long)b5 << 24) + ((long)b6 << 16)
   *     + ((long)b7 << 8) + b8
   * 
   * 
   * This method blocks until the eight bytes are read, the end of the
   * stream is detected, or an exception is thrown.
   *
   * @return     the next eight bytes of this file, interpreted as a
   *             `long`.
   * @throws     EOFException  if this file reaches the end before reading
   *               eight bytes.
   * @throws     IOException   if an I/O error occurs.
  */
  readLong(): number;
  /**
   * Reads a `float` from this file. This method reads an
   * `int` value, starting at the current file pointer,
   * as if by the `readInt` method
   * and then converts that `int` to a `float`
   * using the `intBitsToFloat` method in class
   * `Float`.
   * 
   * This method blocks until the four bytes are read, the end of the
   * stream is detected, or an exception is thrown.
   *
   * @return     the next four bytes of this file, interpreted as a
   *             `float`.
   * @throws     EOFException  if this file reaches the end before reading
   *             four bytes.
   * @throws     IOException   if an I/O error occurs.
   * @see        java.io.RandomAccessFile#readInt()
   * @see        java.lang.Float#intBitsToFloat(int)
  */
  readFloat(): number;
  /**
   * Reads a `double` from this file. This method reads a
   * `long` value, starting at the current file pointer,
   * as if by the `readLong` method
   * and then converts that `long` to a `double`
   * using the `longBitsToDouble` method in
   * class `Double`.
   * 
   * This method blocks until the eight bytes are read, the end of the
   * stream is detected, or an exception is thrown.
   *
   * @return     the next eight bytes of this file, interpreted as a
   *             `double`.
   * @throws     EOFException  if this file reaches the end before reading
   *             eight bytes.
   * @throws     IOException   if an I/O error occurs.
   * @see        java.io.RandomAccessFile#readLong()
   * @see        java.lang.Double#longBitsToDouble(long)
  */
  readDouble(): number;
  readLine(): string;
  /**
   * Reads in a string from this file. The string has been encoded
   * using a
   * modified UTF-8
   * format.
   * 
   * The first two bytes are read, starting from the current file
   * pointer, as if by
   * `readUnsignedShort`. This value gives the number of
   * following bytes that are in the encoded string, not
   * the length of the resulting string. The following bytes are then
   * interpreted as bytes encoding characters in the modified UTF-8 format
   * and are converted into characters.
   * 
   * This method blocks until all the bytes are read, the end of the
   * stream is detected, or an exception is thrown.
   *
   * @return     a Unicode string.
   * @throws     EOFException            if this file reaches the end before
   *               reading all the bytes.
   * @throws     IOException             if an I/O error occurs.
   * @throws     UTFDataFormatException  if the bytes do not represent
   *               valid modified UTF-8 encoding of a Unicode string.
   * @see        java.io.RandomAccessFile#readUnsignedShort()
  */
  readUTF(): string;
  /**
   * Writes a `boolean` to the file as a one-byte value. The
   * value `true` is written out as the value
   * `(byte)1`; the value `false` is written out
   * as the value `(byte)0`. The write starts at
   * the current position of the file pointer.
   *
   * @param      v   a `boolean` value to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeBoolean(v: boolean): void;
  /**
   * Writes a `byte` to the file as a one-byte value. The
   * write starts at the current position of the file pointer.
   *
   * @param      v   a `byte` value to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeByte(v: number): void;
  /**
   * Writes a `short` to the file as two bytes, high byte first.
   * The write starts at the current position of the file pointer.
   *
   * @param      v   a `short` to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeShort(v: number): void;
  /**
   * Writes a `char` to the file as a two-byte value, high
   * byte first. The write starts at the current position of the
   * file pointer.
   *
   * @param      v   a `char` value to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeChar(v: number): void;
  /**
   * Writes an `int` to the file as four bytes, high byte first.
   * The write starts at the current position of the file pointer.
   *
   * @param      v   an `int` to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeInt(v: number): void;
  /**
   * Writes a `long` to the file as eight bytes, high byte first.
   * The write starts at the current position of the file pointer.
   *
   * @param      v   a `long` to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeLong(v: number): void;
  /**
   * Converts the float argument to an `int` using the
   * `floatToIntBits` method in class `Float`,
   * and then writes that `int` value to the file as a
   * four-byte quantity, high byte first. The write starts at the
   * current position of the file pointer.
   *
   * @param      v   a `float` value to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.lang.Float#floatToIntBits(float)
  */
  writeFloat(v: number): void;
  /**
   * Converts the double argument to a `long` using the
   * `doubleToLongBits` method in class `Double`,
   * and then writes that `long` value to the file as an
   * eight-byte quantity, high byte first. The write starts at the current
   * position of the file pointer.
   *
   * @param      v   a `double` value to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.lang.Double#doubleToLongBits(double)
  */
  writeDouble(v: number): void;
  /**
   * Writes the string to the file as a sequence of bytes. Each
   * character in the string is written out, in sequence, by discarding
   * its high eight bits. The write starts at the current position of
   * the file pointer.
   *
   * @param      s   a string of bytes to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeBytes(s: string): void;
  /**
   * Writes a string to the file as a sequence of characters. Each
   * character is written to the data output stream as if by the
   * `writeChar` method. The write starts at the current
   * position of the file pointer.
   *
   * @param      s   a `String` value to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.RandomAccessFile#writeChar(int)
  */
  writeChars(s: string): void;
  /**
   * Writes a string to the file using
   * modified UTF-8
   * encoding in a machine-independent manner.
   * 
   * First, two bytes are written to the file, starting at the
   * current file pointer, as if by the
   * `writeShort` method giving the number of bytes to
   * follow. This value is the number of bytes actually written out,
   * not the length of the string. Following the length, each character
   * of the string is output, in sequence, using the modified UTF-8 encoding
   * for each character.
   *
   * @param      str   a string to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeUTF(str: string): void;
}
export interface RandomAccessFile extends DataOutput, DataInput, Closeable {}
/**
 * A `BufferedInputStream` adds
 * functionality to another input stream-namely,
 * the ability to buffer the input and to
 * support the `mark` and `reset`
 * methods. When  the `BufferedInputStream`
 * is created, an internal buffer array is
 * created. As bytes  from the stream are read
 * or skipped, the internal buffer is refilled
 * as necessary  from the contained input stream,
 * many bytes at a time. The `mark`
 * operation  remembers a point in the input
 * stream and the `reset` operation
 * causes all the  bytes read since the most
 * recent `mark` operation to be
 * reread before new bytes are  taken from
 * the contained input stream.
 *
 * @author  Arthur van Hoff
 * @since   1.0
*/
export class BufferedInputStream extends FilterInputStream {
  /**
   * Creates a `BufferedInputStream`
   * and saves its  argument, the input stream
   * `in`, for later use. An internal
   * buffer array is created and  stored in `buf`.
   *
   * @param   in   the underlying input stream.
  */
  constructor(in_: InputStream);
  /**
   * Creates a `BufferedInputStream`
   * with the specified buffer size,
   * and saves its  argument, the input stream
   * `in`, for later use.  An internal
   * buffer array of length  `size`
   * is created and stored in `buf`.
   *
   * @param   in     the underlying input stream.
   * @param   size   the buffer size.
   * @throws  IllegalArgumentException if `size <= 0`.
  */
  constructor(in_: InputStream, size: number);
  /**
   * See
   * the general contract of the `read`
   * method of `InputStream`.
   *
   * @return     the next byte of data, or `-1` if the end of the
   *             stream is reached.
   * @throws     IOException  if this input stream has been closed by
   *                          invoking its {@link #close()} method,
   *                          or an I/O error occurs.
   * @see        java.io.FilterInputStream#in
  */
  read(): number;
  /**
   * Reads bytes from this byte-input stream into the specified byte array,
   * starting at the given offset.
   *
   *  This method implements the general contract of the corresponding
   * {@link InputStream#read(byte[], int, int) read} method of
   * the {@link InputStream} class.  As an additional
   * convenience, it attempts to read as many bytes as possible by repeatedly
   * invoking the `read` method of the underlying stream.  This
   * iterated `read` continues until one of the following
   * conditions becomes true: 
   *
   *    The specified number of bytes have been read,
   *
   *    The `read` method of the underlying stream returns
   *   `-1`, indicating end-of-file, or
   *
   *    The `available` method of the underlying stream
   *   returns zero, indicating that further input requests would block.
   *
   *  If the first `read` on the underlying stream returns
   * `-1` to indicate end-of-file then this method returns
   * `-1`.  Otherwise this method returns the number of bytes
   * actually read.
   *
   *  Subclasses of this class are encouraged, but not required, to
   * attempt to read as many bytes as possible in the same fashion.
   *
   * @param      b     destination buffer.
   * @param      off   offset at which to start storing bytes.
   * @param      len   maximum number of bytes to read.
   * @return     the number of bytes read, or `-1` if the end of
   *             the stream has been reached.
   * @throws     IOException  if this input stream has been closed by
   *                          invoking its {@link #close()} method,
   *                          or an I/O error occurs.
  */
  read(b: number[], off: number, len: number): number;
  /**
   * See the general contract of the `skip`
   * method of `InputStream`.
   *
   * @throws IOException  if this input stream has been closed by
   *                      invoking its {@link #close()} method,
   *                      `in.skip(n)` throws an IOException,
   *                      or an I/O error occurs.
  */
  skip(n: number): number;
  /**
   * Returns an estimate of the number of bytes that can be read (or
   * skipped over) from this input stream without blocking by the next
   * invocation of a method for this input stream. The next invocation might be
   * the same thread or another thread.  A single read or skip of this
   * many bytes will not block, but may read or skip fewer bytes.
   * 
   * This method returns the sum of the number of bytes remaining to be read in
   * the buffer (`count - pos`) and the result of calling the
   * {@link java.io.FilterInputStream#in in}`.available()`.
   *
   * @return     an estimate of the number of bytes that can be read (or skipped
   *             over) from this input stream without blocking.
   * @throws     IOException  if this input stream has been closed by
   *                          invoking its {@link #close()} method,
   *                          or an I/O error occurs.
  */
  available(): number;
  /**
   * See the general contract of the `mark`
   * method of `InputStream`.
   *
   * @param   readlimit   the maximum limit of bytes that can be read before
   *                      the mark position becomes invalid.
   * @see     java.io.BufferedInputStream#reset()
  */
  mark(readlimit: number): void;
  /**
   * See the general contract of the `reset`
   * method of `InputStream`.
   * 
   * If `markpos` is `-1`
   * (no mark has been set or the mark has been
   * invalidated), an `IOException`
   * is thrown. Otherwise, `pos` is
   * set equal to `markpos`.
   *
   * @throws     IOException  if this stream has not been marked or,
   *                  if the mark has been invalidated, or the stream
   *                  has been closed by invoking its {@link #close()}
   *                  method, or an I/O error occurs.
   * @see        java.io.BufferedInputStream#mark(int)
  */
  reset(): void;
  /**
   * Tests if this input stream supports the `mark`
   * and `reset` methods. The `markSupported`
   * method of `BufferedInputStream` returns
   * `true`.
   *
   * @return  a `boolean` indicating if this stream type supports
   *          the `mark` and `reset` methods.
   * @see     java.io.InputStream#mark(int)
   * @see     java.io.InputStream#reset()
  */
  markSupported(): boolean;
  /**
   * Closes this input stream and releases any system resources
   * associated with the stream.
   * Once the stream has been closed, further read(), available(), reset(),
   * or skip() invocations will throw an IOException.
   * Closing a previously closed stream has no effect.
   *
   * @throws     IOException  if an I/O error occurs.
  */
  close(): void;
  /**
   * Reads up to `b.length` bytes of data from this
   * input stream into an array of bytes. This method blocks until some
   * input is available.
   * 
   * This method simply performs the call
   * `read(b, 0, b.length)` and returns
   * the  result. It is important that it does
   * not do `in.read(b)` instead;
   * certain subclasses of  `FilterInputStream`
   * depend on the implementation strategy actually
   * used.
   *
   * @param      b   the buffer into which the data is read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterInputStream#read(byte[], int, int)
  */
  read(b: number[]): number;
}
/**
 * This class implements a character buffer that can be used as a
 * character-input stream.
 *
 * @author      Herb Jellinek
 * @since       1.1
*/
export class CharArrayReader extends Reader {
  /**
   * Creates a CharArrayReader from the specified array of chars.
   * @param buf       Input buffer (not copied)
  */
  constructor(buf: string[]);
  /**
   * Creates a CharArrayReader from the specified array of chars.
   *
   *  The resulting reader will start reading at the given
   * `offset`.  The total number of `char` values that can be
   * read from this reader will be either `length` or
   * `buf.length-offset`, whichever is smaller.
   *
   * @throws IllegalArgumentException
   *         If `offset` is negative or greater than
   *         `buf.length`, or if `length` is negative, or if
   *         the sum of these two values is negative.
   *
   * @param buf       Input buffer (not copied)
   * @param offset    Offset of the first char to read
   * @param length    Number of chars to read
  */
  constructor(buf: string[], offset: number, length: number);
  /**
   * Reads a single character.
   *
   * @throws      IOException  If an I/O error occurs
  */
  read(): number;
  /**
   * Reads characters into a portion of an array.
   * @param   b  Destination buffer
   * @param   off  Offset at which to start storing characters
   * @param   len   Maximum number of characters to read
   * @return  The actual number of characters read, or -1 if
   *          the end of the stream has been reached
   *
   * @throws  IOException  If an I/O error occurs
   * @throws  IndexOutOfBoundsException {@inheritDoc}
  */
  read(b: string[], off: number, len: number): number;
  /**
   * Skips characters.  Returns the number of characters that were skipped.
   *
   * The `n` parameter may be negative, even though the
   * `skip` method of the {@link Reader} superclass throws
   * an exception in this case. If `n` is negative, then
   * this method does nothing and returns `0`.
   *
   * @param      n The number of characters to skip
   * @return     The number of characters actually skipped
   * @throws     IOException If the stream is closed, or an I/O error occurs
  */
  skip(n: number): number;
  /**
   * Tells whether this stream is ready to be read.  Character-array readers
   * are always ready to be read.
   *
   * @throws     IOException  If an I/O error occurs
  */
  ready(): boolean;
  /**
   * Tells whether this stream supports the mark() operation, which it does.
  */
  markSupported(): boolean;
  /**
   * Marks the present position in the stream.  Subsequent calls to reset()
   * will reposition the stream to this point.
   *
   * @param  readAheadLimit  Limit on the number of characters that may be
   *                         read while still preserving the mark.  Because
   *                         the stream's input comes from a character array,
   *                         there is no actual limit; hence this argument is
   *                         ignored.
   *
   * @throws     IOException  If an I/O error occurs
  */
  mark(readAheadLimit: number): void;
  /**
   * Resets the stream to the most recent mark, or to the beginning if it has
   * never been marked.
   *
   * @throws     IOException  If an I/O error occurs
  */
  reset(): void;
  /**
   * Closes the stream and releases any system resources associated with
   * it.  Once the stream has been closed, further read(), ready(),
   * mark(), reset(), or skip() invocations will throw an IOException.
   * Closing a previously closed stream has no effect. This method will block
   * while there is another thread blocking on the reader.
  */
  close(): void;
  /**
   * Attempts to read characters into the specified character buffer.
   * The buffer is used as a repository of characters as-is: the only
   * changes made are the results of a put operation. No flipping or
   * rewinding of the buffer is performed.
   *
   * @param target the buffer to read characters into
   * @return The number of characters added to the buffer, or
   *         -1 if this source of characters is at its end
   * @throws IOException if an I/O error occurs
   * @throws NullPointerException if target is null
   * @throws java.nio.ReadOnlyBufferException if target is a read only buffer
   * @since 1.5
  */
  read(target: CharBuffer): number;
  /**
   * Reads characters into an array.  This method will block until some input
   * is available, an I/O error occurs, or the end of the stream is reached.
   *
   * @param       cbuf  Destination buffer
   *
   * @return      The number of characters read, or -1
   *              if the end of the stream
   *              has been reached
   *
   * @throws      IOException  If an I/O error occurs
  */
  read(cbuf: string[]): number;
}
export class FilterReader extends Reader {
  /**
   * Reads a single character.
   *
   * @throws     IOException  If an I/O error occurs
  */
  read(): number;
  /**
   * Reads characters into a portion of an array.
   *
   * @throws     IOException  If an I/O error occurs
   * @throws     IndexOutOfBoundsException {@inheritDoc}
  */
  read(cbuf: string[], off: number, len: number): number;
  /**
   * Skips characters.
   *
   * @throws     IOException  If an I/O error occurs
  */
  skip(n: number): number;
  /**
   * Tells whether this stream is ready to be read.
   *
   * @throws     IOException  If an I/O error occurs
  */
  ready(): boolean;
  /**
   * Tells whether this stream supports the mark() operation.
  */
  markSupported(): boolean;
  /**
   * Marks the present position in the stream.
   *
   * @throws     IOException  If an I/O error occurs
  */
  mark(readAheadLimit: number): void;
  /**
   * Resets the stream.
   *
   * @throws     IOException  If an I/O error occurs
  */
  reset(): void;
  close(): void;
  /**
   * Attempts to read characters into the specified character buffer.
   * The buffer is used as a repository of characters as-is: the only
   * changes made are the results of a put operation. No flipping or
   * rewinding of the buffer is performed.
   *
   * @param target the buffer to read characters into
   * @return The number of characters added to the buffer, or
   *         -1 if this source of characters is at its end
   * @throws IOException if an I/O error occurs
   * @throws NullPointerException if target is null
   * @throws java.nio.ReadOnlyBufferException if target is a read only buffer
   * @since 1.5
  */
  read(target: CharBuffer): number;
  /**
   * Reads characters into an array.  This method will block until some input
   * is available, an I/O error occurs, or the end of the stream is reached.
   *
   * @param       cbuf  Destination buffer
   *
   * @return      The number of characters read, or -1
   *              if the end of the stream
   *              has been reached
   *
   * @throws      IOException  If an I/O error occurs
  */
  read(cbuf: string[]): number;
}
export class PipedWriter extends Writer {
  /**
   * Creates a piped writer connected to the specified piped
   * reader. Data characters written to this stream will then be
   * available as input from `snk`.
   *
   * @param      snk   The piped reader to connect to.
   * @throws     IOException  if an I/O error occurs.
  */
  constructor(snk: PipedReader);
  /**
   * Creates a piped writer that is not yet connected to a
   * piped reader. It must be connected to a piped reader,
   * either by the receiver or the sender, before being used.
   *
   * @see     java.io.PipedReader#connect(java.io.PipedWriter)
   * @see     java.io.PipedWriter#connect(java.io.PipedReader)
  */
  constructor();
  /**
   * Connects this piped writer to a receiver. If this object
   * is already connected to some other piped reader, an
   * `IOException` is thrown.
   * 
   * If `snk` is an unconnected piped reader and
   * `src` is an unconnected piped writer, they may
   * be connected by either the call:
   *      * src.connect(snk)
   * or the call:
   *      * snk.connect(src)
   * The two calls have the same effect.
   *
   * @param      snk   the piped reader to connect to.
   * @throws     IOException  if an I/O error occurs.
  */
  connect(snk: PipedReader): void;
  /**
   * Writes the specified `char` to the piped output stream.
   * If a thread was reading data characters from the connected piped input
   * stream, but the thread is no longer alive, then an
   * `IOException` is thrown.
   * 
   * Implements the `write` method of `Writer`.
   *
   * @param   c   the `char` to be written.
   * @throws  IOException  if the pipe is
   *           `broken`,
   *          {@link #connect(java.io.PipedReader) unconnected}, closed
   *          or an I/O error occurs.
  */
  write(c: number): void;
  /**
   * Writes `len` characters from the specified character array
   * starting at offset `off` to this piped output stream.
   * This method blocks until all the characters are written to the output
   * stream.
   * If a thread was reading data characters from the connected piped input
   * stream, but the thread is no longer alive, then an
   * `IOException` is thrown.
   *
   * @param   cbuf  the data.
   * @param   off   the start offset in the data.
   * @param   len   the number of characters to write.
   *
   * @throws  IndexOutOfBoundsException
   *          If `off` is negative, or `len` is negative,
   *          or `off + len` is negative or greater than the length
   *          of the given array
   *
   * @throws  IOException  if the pipe is
   *          `broken`,
   *          {@link #connect(java.io.PipedReader) unconnected}, closed
   *          or an I/O error occurs.
  */
  write(cbuf: string[], off: number, len: number): void;
  /**
   * Flushes this output stream and forces any buffered output characters
   * to be written out.
   * This will notify any readers that characters are waiting in the pipe.
   *
   * @throws     IOException  if the pipe is closed, or an I/O error occurs.
  */
  flush(): void;
  /**
   * Closes this piped output stream and releases any system resources
   * associated with this stream. This stream may no longer be used for
   * writing characters.
   *
   * @throws     IOException  if an I/O error occurs.
  */
  close(): void;
  /**
   * Writes an array of characters.
   *
   * @param  cbuf
   *         Array of characters to be written
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(cbuf: string[]): void;
  /**
   * Writes a string.
   *
   * @param  str
   *         String to be written
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(str: string): void;
  /**
   * Writes a portion of a string.
   *
   * @implSpec
   * The implementation in this class throws an
   * `IndexOutOfBoundsException` for the indicated conditions;
   * overriding methods may choose to do otherwise.
   *
   * @param  str
   *         A String
   *
   * @param  off
   *         Offset from which to start writing characters
   *
   * @param  len
   *         Number of characters to write
   *
   * @throws  IndexOutOfBoundsException
   *          Implementations should throw this exception
   *          if `off` is negative, or `len` is negative,
   *          or `off + len` is negative or greater than the length
   *          of the given string
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(str: string, off: number, len: number): void;
}
/**
 * Serializability of a class is enabled by the class implementing the
 * java.io.Serializable interface.
 *
 * Warning: Deserialization of untrusted data is inherently dangerous
 * and should be avoided. Untrusted data should be carefully validated according to the
 * "Serialization and Deserialization" section of the
 * {@extLink secure_coding_guidelines_javase Secure Coding Guidelines for Java SE}.
 * {@extLink serialization_filter_guide Serialization Filtering} describes best
 * practices for defensive use of serial filters.
 * 
 *
 * Classes that do not implement this
 * interface will not have any of their state serialized or
 * deserialized.  All subtypes of a serializable class are themselves
 * serializable.  The serialization interface has no methods or fields
 * and serves only to identify the semantics of being serializable. 
 *
 * It is possible for subtypes of non-serializable classes to be serialized
 * and deserialized. During serialization, no data will be written for the
 * fields of non-serializable superclasses. During deserialization, the fields of non-serializable
 * superclasses will be initialized using the no-arg constructor of the first (bottommost)
 * non-serializable superclass. This constructor must be accessible to the subclass that is being
 * deserialized. It is an error to declare a class Serializable if this is not
 * the case; the error will be detected at runtime. A serializable subtype may
 * assume responsibility for saving and restoring the state of a non-serializable
 * supertype's public, protected, and (if accessible) package-access fields. See
 * the 
 * Java Object Serialization Specification, section 3.1, for
 * a detailed specification of the deserialization process, including handling of
 * serializable and non-serializable classes. 
 *
 * When traversing a graph, an object may be encountered that does not
 * support the Serializable interface. In this case the
 * NotSerializableException will be thrown and will identify the class
 * of the non-serializable object. 
 *
 * Classes that require special handling during the serialization and
 * deserialization process must implement special methods with these exact
 * signatures:
 *
 *  * private void writeObject(java.io.ObjectOutputStream out)
 *     throws IOException
 * private void readObject(java.io.ObjectInputStream in)
 *     throws IOException, ClassNotFoundException;
 * private void readObjectNoData()
 *     throws ObjectStreamException;
 * 
 *
 * The writeObject method is responsible for writing the state of the
 * object for its particular class so that the corresponding
 * readObject method can restore it.  The default mechanism for saving
 * the Object's fields can be invoked by calling
 * out.defaultWriteObject. The method does not need to concern
 * itself with the state belonging to its superclasses or subclasses.
 * State is saved by writing the individual fields to the
 * ObjectOutputStream using the writeObject method or by using the
 * methods for primitive data types supported by DataOutput.
 *
 * The readObject method is responsible for reading from the stream and
 * restoring the classes fields. It may call in.defaultReadObject to invoke
 * the default mechanism for restoring the object's non-static and
 * non-transient fields.  The defaultReadObject method uses information in
 * the stream to assign the fields of the object saved in the stream with the
 * correspondingly named fields in the current object.  This handles the case
 * when the class has evolved to add new fields. The method does not need to
 * concern itself with the state belonging to its superclasses or subclasses.
 * State is restored by reading data from the ObjectInputStream for
 * the individual fields and making assignments to the appropriate fields
 * of the object. Reading primitive data types is supported by DataInput.
 *
 * The readObjectNoData method is responsible for initializing the state of
 * the object for its particular class in the event that the serialization
 * stream does not list the given class as a superclass of the object being
 * deserialized.  This may occur in cases where the receiving party uses a
 * different version of the deserialized instance's class than the sending
 * party, and the receiver's version extends classes that are not extended by
 * the sender's version.  This may also occur if the serialization stream has
 * been tampered; hence, readObjectNoData is useful for initializing
 * deserialized objects properly despite a "hostile" or incomplete source
 * stream.
 *
 * Serializable classes that need to designate an alternative object to be
 * used when writing an object to the stream should implement this
 * special method with the exact signature:
 *
 *  * ANY-ACCESS-MODIFIER Object writeReplace() throws ObjectStreamException;
 * 
 *
 * This writeReplace method is invoked by serialization if the method
 * exists and it would be accessible from a method defined within the
 * class of the object being serialized. Thus, the method can have private,
 * protected and package-private access. Subclass access to this method
 * follows java accessibility rules. 
 *
 * Classes that need to designate a replacement when an instance of it
 * is read from the stream should implement this special method with the
 * exact signature.
 *
 *  * ANY-ACCESS-MODIFIER Object readResolve() throws ObjectStreamException;
 * 
 *
 * This readResolve method follows the same invocation rules and
 * accessibility rules as writeReplace.
 *
 * Enum types are all serializable and receive treatment defined by
 * the 
 * Java Object Serialization Specification during
 * serialization and deserialization. Any declarations of the special
 * handling methods discussed above are ignored for enum types.
 *
 * Record classes can implement `Serializable` and receive treatment defined
 * by the 
 * Java Object Serialization Specification, Section 1.13,
 * "Serialization of Records". Any declarations of the special
 * handling methods discussed above are ignored for record types.
 *
 * The serialization runtime associates with each serializable class a version
 * number, called a serialVersionUID, which is used during deserialization to
 * verify that the sender and receiver of a serialized object have loaded
 * classes for that object that are compatible with respect to serialization.
 * If the receiver has loaded a class for the object that has a different
 * serialVersionUID than that of the corresponding sender's class, then
 * deserialization will result in an {@link InvalidClassException}.  A
 * serializable class can declare its own serialVersionUID explicitly by
 * declaring a field named `"serialVersionUID"` that must be static,
 * final, and of type `long`:
 *
 *  * ANY-ACCESS-MODIFIER static final long serialVersionUID = 42L;
 * 
 *
 * If a serializable class does not explicitly declare a serialVersionUID, then
 * the serialization runtime will calculate a default serialVersionUID value
 * for that class based on various aspects of the class, as described in the
 * Java Object Serialization
 * Specification. This specification defines the
 * serialVersionUID of an enum type to be 0L. However, it is strongly
 * recommended that all serializable classes other than enum types explicitly declare
 * serialVersionUID values, since the default serialVersionUID computation is
 * highly sensitive to class details that may vary depending on compiler
 * implementations, and can thus result in unexpected
 * `InvalidClassException`s during deserialization.  Therefore, to
 * guarantee a consistent serialVersionUID value across different java compiler
 * implementations, a serializable class must declare an explicit
 * serialVersionUID value.  It is also strongly advised that explicit
 * serialVersionUID declarations use the `private` modifier where
 * possible, since such declarations apply only to the immediately declaring
 * class--serialVersionUID fields are not useful as inherited members. Array
 * classes cannot declare an explicit serialVersionUID, so they always have
 * the default computed value, but the requirement for matching
 * serialVersionUID values is waived for array classes.
 *
 * @see java.io.ObjectOutputStream
 * @see java.io.ObjectInputStream
 * @see java.io.ObjectOutput
 * @see java.io.ObjectInput
 * @see java.io.Externalizable
 * @see 
 *      Java Object Serialization Specification
 * @since   1.1
*/
export class Serializable {

}
/**
 * Signals that a sync operation has failed.
 *
 * @author  Ken Arnold
 * @see     java.io.FileDescriptor#sync
 * @see     java.io.IOException
 * @since   1.1
*/
export class SyncFailedException extends IOException {
  /**
   * Constructs an SyncFailedException with a detail message.
   * A detail message is a String that describes this particular exception.
   *
   * @param desc  a String describing the exception.
  */
  constructor(desc: string);
}
export class ByteArrayOutputStream extends OutputStream {
  /**
   * Creates a new `ByteArrayOutputStream`. The buffer capacity is
   * initially 32 bytes, though its size increases if necessary.
  */
  constructor();
  /**
   * Creates a new `ByteArrayOutputStream`, with a buffer capacity of
   * the specified size, in bytes.
   *
   * @param  size   the initial size.
   * @throws IllegalArgumentException if size is negative.
  */
  constructor(size: number);
  /**
   * Writes the specified byte to this `ByteArrayOutputStream`.
   *
   * @param   b   the byte to be written.
  */
  write(b: number): void;
  /**
   * Writes `len` bytes from the specified byte array
   * starting at offset `off` to this `ByteArrayOutputStream`.
   *
   * @param   b     the data.
   * @param   off   the start offset in the data.
   * @param   len   the number of bytes to write.
   * @throws  NullPointerException if `b` is `null`.
   * @throws  IndexOutOfBoundsException if `off` is negative,
   * `len` is negative, or `len` is greater than
   * `b.length - off`
  */
  write(b: number[], off: number, len: number): void;
  /**
   * Writes the complete contents of the specified byte array
   * to this `ByteArrayOutputStream`.
   *
   * @apiNote
   * This method is equivalent to {@link #write(byte[],int,int)
   * write(b, 0, b.length)}.
   *
   * @param   b     the data.
   * @throws  NullPointerException if `b` is `null`.
   * @since   11
  */
  writeBytes(b: number[]): void;
  /**
   * Writes the complete contents of this `ByteArrayOutputStream` to
   * the specified output stream argument, as if by calling the output
   * stream's write method using `out.write(buf, 0, count)`.
   *
   * @param   out   the output stream to which to write the data.
   * @throws  NullPointerException if `out` is `null`.
   * @throws  IOException if an I/O error occurs.
  */
  writeTo(out: OutputStream): void;
  /**
   * Resets the `count` field of this `ByteArrayOutputStream`
   * to zero, so that all currently accumulated output in the
   * output stream is discarded. The output stream can be used again,
   * reusing the already allocated buffer space.
   *
   * @see     java.io.ByteArrayInputStream#count
  */
  reset(): void;
  /**
   * Creates a newly allocated byte array. Its size is the current
   * size of this output stream and the valid contents of the buffer
   * have been copied into it.
   *
   * @return  the current contents of this output stream, as a byte array.
   * @see     java.io.ByteArrayOutputStream#size()
  */
  toByteArray(): number[];
  /**
   * Returns the current size of the buffer.
   *
   * @return  the value of the `count` field, which is the number
   *          of valid bytes in this output stream.
   * @see     java.io.ByteArrayOutputStream#count
  */
  size(): number;
  /**
   * Converts the buffer's contents into a string decoding bytes using the
   * platform's default character set. The length of the new `String`
   * is a function of the character set, and hence may not be equal to the
   * size of the buffer.
   *
   *  This method always replaces malformed-input and unmappable-character
   * sequences with the default replacement string for the platform's
   * default character set. The {@linkplain java.nio.charset.CharsetDecoder}
   * class should be used when more control over the decoding process is
   * required.
   *
   * @return String decoded from the buffer's contents.
   * @since  1.1
  */
  toString(): string;
  /**
   * Converts the buffer's contents into a string by decoding the bytes using
   * the named {@link java.nio.charset.Charset charset}.
   *
   *  This method is equivalent to `#toString(charset)` that takes a
   * {@link java.nio.charset.Charset charset}.
   *
   *  An invocation of this method of the form
   *
   *  {@code
   *      ByteArrayOutputStream b = ...
   *      b.toString("UTF-8")
   *      }
   * 
   *
   * behaves in exactly the same way as the expression
   *
   *  {@code
   *      ByteArrayOutputStream b = ...
   *      b.toString(StandardCharsets.UTF_8)
   *      }
   * 
   *
   *
   * @param  charsetName  the name of a supported
   *         {@link java.nio.charset.Charset charset}
   * @return String decoded from the buffer's contents.
   * @throws UnsupportedEncodingException
   *         If the named charset is not supported
   * @since  1.1
  */
  toString(charsetName: string): string;
  /**
   * Converts the buffer's contents into a string by decoding the bytes using
   * the specified {@link java.nio.charset.Charset charset}. The length of the new
   * `String` is a function of the charset, and hence may not be equal
   * to the length of the byte array.
   *
   *  This method always replaces malformed-input and unmappable-character
   * sequences with the charset's default replacement string. The {@link
   * java.nio.charset.CharsetDecoder} class should be used when more control
   * over the decoding process is required.
   *
   * @param      charset  the {@linkplain java.nio.charset.Charset charset}
   *             to be used to decode the `bytes`
   * @return     String decoded from the buffer's contents.
   * @since      10
  */
  toString(charset: Charset): string;
  /**
   * Creates a newly allocated string. Its size is the current size of
   * the output stream and the valid contents of the buffer have been
   * copied into it. Each character c in the resulting string is
   * constructed from the corresponding element b in the byte
   * array such that:
   * {@code
   *     c == (char)(((hibyte & 0xff) << 8) | (b & 0xff))
   * }
   *
   * @deprecated This method does not properly convert bytes into characters.
   * As of JDK 1.1, the preferred way to do this is via the
   * {@link #toString(String charsetName)} or {@link #toString(Charset charset)}
   * method, which takes an encoding-name or charset argument,
   * or the `toString()` method, which uses the platform's default
   * character encoding.
   *
   * @param      hibyte    the high byte of each resulting Unicode character.
   * @return     the current contents of the output stream, as a string.
   * @see        java.io.ByteArrayOutputStream#size()
   * @see        java.io.ByteArrayOutputStream#toString(String)
   * @see        java.io.ByteArrayOutputStream#toString()
  */
  toString(hibyte: number): string;
  /**
   * Closing a `ByteArrayOutputStream` has no effect. The methods in
   * this class can be called after the stream has been closed without
   * generating an `IOException`.
  */
  close(): void;
  /**
   * Writes `b.length` bytes from the specified byte array
   * to this output stream. The general contract for `write(b)`
   * is that it should have exactly the same effect as the call
   * `write(b, 0, b.length)`.
   *
   * @param      b   the data.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.OutputStream#write(byte[], int, int)
  */
  write(b: number[]): void;
}
export class Console extends Flushable {
  /**
   * Retrieves the unique {@link java.io.PrintWriter PrintWriter} object
   * associated with this console.
   *
   * @return  The printwriter associated with this console
  */
  writer(): PrintWriter;
  /**
   * Retrieves the unique {@link java.io.Reader Reader} object associated
   * with this console.
   * 
   * This method is intended to be used by sophisticated applications, for
   * example, a {@link java.util.Scanner} object which utilizes the rich
   * parsing/scanning functionality provided by the `Scanner`:
   *     * Console con = System.console();
   * if (con != null) {
   *     Scanner sc = new Scanner(con.reader());
   *     ...
   * }
   * 
   * 
   * For simple applications requiring only line-oriented reading, use
   * {@link #readLine}.
   * 
   * The bulk read operations {@link java.io.Reader#read(char[]) read(char[]) },
   * {@link java.io.Reader#read(char[], int, int) read(char[], int, int) } and
   * {@link java.io.Reader#read(java.nio.CharBuffer) read(java.nio.CharBuffer)}
   * on the returned object will not read in characters beyond the line
   * bound for each invocation, even if the destination buffer has space for
   * more characters. The `Reader`'s `read` methods may block if a
   * line bound has not been entered or reached on the console's input device.
   * A line bound is considered to be any one of a line feed (`'\n'`),
   * a carriage return (`'\r'`), a carriage return followed immediately
   * by a linefeed, or an end of stream.
   *
   * @return  The reader associated with this console
  */
  reader(): Reader;
  /**
   * Writes a formatted string to this console's output stream using
   * the specified format string and arguments.
   *
   * @param  fmt
   *         A format string as described in Format string syntax
   *
   * @param  args
   *         Arguments referenced by the format specifiers in the format
   *         string.  If there are more arguments than format specifiers, the
   *         extra arguments are ignored.  The number of arguments is
   *         variable and may be zero.  The maximum number of arguments is
   *         limited by the maximum dimension of a Java array as defined by
   *         The Java Virtual Machine Specification.
   *         The behaviour on a
   *         `null` argument depends on the conversion.
   *
   * @throws  IllegalFormatException
   *          If a format string contains an illegal syntax, a format
   *          specifier that is incompatible with the given arguments,
   *          insufficient arguments given the format string, or other
   *          illegal conditions.  For specification of all possible
   *          formatting errors, see the Details section
   *          of the formatter class specification.
   *
   * @return  This console
  */
  format(fmt: string, ...args: any[]): Console;
  /**
   * A convenience method to write a formatted string to this console's
   * output stream using the specified format string and arguments.
   *
   *  An invocation of this method of the form
   * `con.printf(format, args)` behaves in exactly the same way
   * as the invocation of
   * con.format(format, args).
   *
   * @param  format
   *         A format string as described in Format string syntax.
   *
   * @param  args
   *         Arguments referenced by the format specifiers in the format
   *         string.  If there are more arguments than format specifiers, the
   *         extra arguments are ignored.  The number of arguments is
   *         variable and may be zero.  The maximum number of arguments is
   *         limited by the maximum dimension of a Java array as defined by
   *         The Java Virtual Machine Specification.
   *         The behaviour on a
   *         `null` argument depends on the conversion.
   *
   * @throws  IllegalFormatException
   *          If a format string contains an illegal syntax, a format
   *          specifier that is incompatible with the given arguments,
   *          insufficient arguments given the format string, or other
   *          illegal conditions.  For specification of all possible
   *          formatting errors, see the Details section of the
   *          formatter class specification.
   *
   * @return  This console
  */
  printf(format: string, ...args: any[]): Console;
  /**
   * Provides a formatted prompt, then reads a single line of text from the
   * console.
   *
   * @param  fmt
   *         A format string as described in Format string syntax.
   *
   * @param  args
   *         Arguments referenced by the format specifiers in the format
   *         string.  If there are more arguments than format specifiers, the
   *         extra arguments are ignored.  The maximum number of arguments is
   *         limited by the maximum dimension of a Java array as defined by
   *         The Java Virtual Machine Specification.
   *
   * @throws  IllegalFormatException
   *          If a format string contains an illegal syntax, a format
   *          specifier that is incompatible with the given arguments,
   *          insufficient arguments given the format string, or other
   *          illegal conditions.  For specification of all possible
   *          formatting errors, see the Details section
   *          of the formatter class specification.
   *
   * @throws IOError
   *         If an I/O error occurs.
   *
   * @return  A string containing the line read from the console, not
   *          including any line-termination characters, or `null`
   *          if an end of stream has been reached.
  */
  readLine(fmt: string, ...args: any[]): string;
  /**
   * Reads a single line of text from the console.
   *
   * @throws IOError
   *         If an I/O error occurs.
   *
   * @return  A string containing the line read from the console, not
   *          including any line-termination characters, or `null`
   *          if an end of stream has been reached.
  */
  readLine(): string;
  /**
   * Provides a formatted prompt, then reads a password or passphrase from
   * the console with echoing disabled.
   *
   * @param  fmt
   *         A format string as described in Format string syntax
   *         for the prompt text.
   *
   * @param  args
   *         Arguments referenced by the format specifiers in the format
   *         string.  If there are more arguments than format specifiers, the
   *         extra arguments are ignored.  The maximum number of arguments is
   *         limited by the maximum dimension of a Java array as defined by
   *         The Java Virtual Machine Specification.
   *
   * @throws  IllegalFormatException
   *          If a format string contains an illegal syntax, a format
   *          specifier that is incompatible with the given arguments,
   *          insufficient arguments given the format string, or other
   *          illegal conditions.  For specification of all possible
   *          formatting errors, see the Details
   *          section of the formatter class specification.
   *
   * @throws IOError
   *         If an I/O error occurs.
   *
   * @return  A character array containing the password or passphrase read
   *          from the console, not including any line-termination characters,
   *          or `null` if an end of stream has been reached.
  */
  readPassword(fmt: string, ...args: any[]): string[];
  /**
   * Reads a password or passphrase from the console with echoing disabled
   *
   * @throws IOError
   *         If an I/O error occurs.
   *
   * @return  A character array containing the password or passphrase read
   *          from the console, not including any line-termination characters,
   *          or `null` if an end of stream has been reached.
  */
  readPassword(): string[];
  /**
   * Flushes the console and forces any buffered output to be written
   * immediately .
  */
  flush(): void;
}
/**
 * A `Flushable` is a destination of data that can be flushed.  The
 * flush method is invoked to write any buffered output to the underlying
 * stream.
 *
 * @since 1.5
*/
export class Flushable {
  /**
   * Flushes this stream by writing any buffered output to the underlying
   * stream.
   *
   * @throws IOException If an I/O error occurs
  */
  flush(): void;
}
/**
 * Superclass of all exceptions specific to Object Stream classes.
 *
 * @since   1.1
*/
export class ObjectStreamException extends IOException {

}
export class StringReader extends Reader {
  /**
   * Creates a new string reader.
   *
   * @param s  String providing the character stream.
  */
  constructor(s: string);
  /**
   * Reads a single character.
   *
   * @return     The character read, or -1 if the end of the stream has been
   *             reached
   *
   * @throws     IOException  If an I/O error occurs
  */
  read(): number;
  /**
   * Reads characters into a portion of an array.
   *
   * @param      cbuf  Destination buffer
   * @param      off   Offset at which to start writing characters
   * @param      len   Maximum number of characters to read
   *
   * @return     The number of characters read, or -1 if the end of the
   *             stream has been reached
   *
   * @throws     IOException  If an I/O error occurs
   * @throws     IndexOutOfBoundsException {@inheritDoc}
  */
  read(cbuf: string[], off: number, len: number): number;
  /**
   * Skips the specified number of characters in the stream. Returns
   * the number of characters that were skipped.
   *
   * The `ns` parameter may be negative, even though the
   * `skip` method of the {@link Reader} superclass throws
   * an exception in this case. Negative values of `ns` cause the
   * stream to skip backwards. Negative return values indicate a skip
   * backwards. It is not possible to skip backwards past the beginning of
   * the string.
   *
   * If the entire string has been read or skipped, then this method has
   * no effect and always returns 0.
   *
   * @throws     IOException  If an I/O error occurs
  */
  skip(ns: number): number;
  /**
   * Tells whether this stream is ready to be read.
   *
   * @return True if the next read() is guaranteed not to block for input
   *
   * @throws     IOException  If the stream is closed
  */
  ready(): boolean;
  /**
   * Tells whether this stream supports the mark() operation, which it does.
  */
  markSupported(): boolean;
  /**
   * Marks the present position in the stream.  Subsequent calls to reset()
   * will reposition the stream to this point.
   *
   * @param  readAheadLimit  Limit on the number of characters that may be
   *                         read while still preserving the mark.  Because
   *                         the stream's input comes from a string, there
   *                         is no actual limit, so this argument must not
   *                         be negative, but is otherwise ignored.
   *
   * @throws     IllegalArgumentException  If `readAheadLimit < 0`
   * @throws     IOException  If an I/O error occurs
  */
  mark(readAheadLimit: number): void;
  /**
   * Resets the stream to the most recent mark, or to the beginning of the
   * string if it has never been marked.
   *
   * @throws     IOException  If an I/O error occurs
  */
  reset(): void;
  /**
   * Closes the stream and releases any system resources associated with
   * it. Once the stream has been closed, further read(),
   * ready(), mark(), or reset() invocations will throw an IOException.
   * Closing a previously closed stream has no effect. This method will block
   * while there is another thread blocking on the reader.
  */
  close(): void;
  /**
   * Attempts to read characters into the specified character buffer.
   * The buffer is used as a repository of characters as-is: the only
   * changes made are the results of a put operation. No flipping or
   * rewinding of the buffer is performed.
   *
   * @param target the buffer to read characters into
   * @return The number of characters added to the buffer, or
   *         -1 if this source of characters is at its end
   * @throws IOException if an I/O error occurs
   * @throws NullPointerException if target is null
   * @throws java.nio.ReadOnlyBufferException if target is a read only buffer
   * @since 1.5
  */
  read(target: CharBuffer): number;
  /**
   * Reads characters into an array.  This method will block until some input
   * is available, an I/O error occurs, or the end of the stream is reached.
   *
   * @param       cbuf  Destination buffer
   *
   * @return      The number of characters read, or -1
   *              if the end of the stream
   *              has been reached
   *
   * @throws      IOException  If an I/O error occurs
  */
  read(cbuf: string[]): number;
}
/**
 * This class is an input stream filter that provides the added
 * functionality of keeping track of the current line number.
 * 
 * A line is a sequence of bytes ending with a carriage return
 * character (`'\u005Cr'`), a newline character
 * (`'\u005Cn'`), or a carriage return character followed
 * immediately by a linefeed character. In all three cases, the line
 * terminating character(s) are returned as a single newline character.
 * 
 * The line number begins at `0`, and is incremented by
 * `1` when a `read` returns a newline character.
 *
 * @author     Arthur van Hoff
 * @see        java.io.LineNumberReader
 * @since      1.0
 * @deprecated This class incorrectly assumes that bytes adequately represent
 *             characters.  As of JDK 1.1, the preferred way to operate on
 *             character streams is via the new character-stream classes, which
 *             include a class for counting line numbers.
*/
export class LineNumberInputStream extends FilterInputStream {
  /**
   * Constructs a newline number input stream that reads its input
   * from the specified input stream.
   *
   * @param      in   the underlying input stream.
  */
  constructor(in_: InputStream);
  /**
   * Reads the next byte of data from this input stream. The value
   * byte is returned as an `int` in the range
   * `0` to `255`. If no byte is available
   * because the end of the stream has been reached, the value
   * `-1` is returned. This method blocks until input data
   * is available, the end of the stream is detected, or an exception
   * is thrown.
   * 
   * The `read` method of
   * `LineNumberInputStream` calls the `read`
   * method of the underlying input stream. It checks for carriage
   * returns and newline characters in the input, and modifies the
   * current line number as appropriate. A carriage-return character or
   * a carriage return followed by a newline character are both
   * converted into a single newline character.
   *
   * @return     the next byte of data, or `-1` if the end of this
   *             stream is reached.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterInputStream#in
   * @see        java.io.LineNumberInputStream#getLineNumber()
  */
  read(): number;
  /**
   * Reads up to `len` bytes of data from this input stream
   * into an array of bytes. This method blocks until some input is available.
   * 
   * The `read` method of
   * `LineNumberInputStream` repeatedly calls the
   * `read` method of zero arguments to fill in the byte array.
   *
   * @param      b     the buffer into which the data is read.
   * @param      off   the start offset of the data.
   * @param      len   the maximum number of bytes read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             this stream has been reached.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.LineNumberInputStream#read()
  */
  read(b: number[], off: number, len: number): number;
  /**
   * Skips over and discards `n` bytes of data from this
   * input stream. The `skip` method may, for a variety of
   * reasons, end up skipping over some smaller number of bytes,
   * possibly `0`. The actual number of bytes skipped is
   * returned.  If `n` is negative, no bytes are skipped.
   * 
   * The `skip` method of `LineNumberInputStream` creates
   * a byte array and then repeatedly reads into it until
   * `n` bytes have been read or the end of the stream has
   * been reached.
   *
   * @param      n   the number of bytes to be skipped.
   * @return     the actual number of bytes skipped.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterInputStream#in
  */
  skip(n: number): number;
  /**
   * Sets the line number to the specified argument.
   *
   * @param      lineNumber   the new line number.
   * @see #getLineNumber
  */
  setLineNumber(lineNumber: number);
  /**
   * Returns the current line number.
   *
   * @return     the current line number.
   * @see #setLineNumber
  */
  getLineNumber(): number;
  /**
   * Returns the number of bytes that can be read from this input
   * stream without blocking.
   * 
   * Note that if the underlying input stream is able to supply
   * k input characters without blocking, the
   * `LineNumberInputStream` can guarantee only to provide
   * k/2 characters without blocking, because the
   * k characters from the underlying input stream might
   * consist of k/2 pairs of `'\u005Cr'` and
   * `'\u005Cn'`, which are converted to just
   * k/2 `'\u005Cn'` characters.
   *
   * @return     the number of bytes that can be read from this input stream
   *             without blocking.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterInputStream#in
  */
  available(): number;
  /**
   * Marks the current position in this input stream. A subsequent
   * call to the `reset` method repositions this stream at
   * the last marked position so that subsequent reads re-read the same bytes.
   * 
   * The `mark` method of
   * `LineNumberInputStream` remembers the current line
   * number in a private variable, and then calls the `mark`
   * method of the underlying input stream.
   *
   * @param   readlimit   the maximum limit of bytes that can be read before
   *                      the mark position becomes invalid.
   * @see     java.io.FilterInputStream#in
   * @see     java.io.LineNumberInputStream#reset()
  */
  mark(readlimit: number): void;
  /**
   * Repositions this stream to the position at the time the
   * `mark` method was last called on this input stream.
   * 
   * The `reset` method of
   * `LineNumberInputStream` resets the line number to be
   * the line number at the time the `mark` method was
   * called, and then calls the `reset` method of the
   * underlying input stream.
   * 
   * Stream marks are intended to be used in
   * situations where you need to read ahead a little to see what's in
   * the stream. Often this is most easily done by invoking some
   * general parser. If the stream is of the type handled by the
   * parser, it just chugs along happily. If the stream is not of
   * that type, the parser should toss an exception when it fails,
   * which, if it happens within readlimit bytes, allows the outer
   * code to reset the stream and try another parser.
   *
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterInputStream#in
   * @see        java.io.LineNumberInputStream#mark(int)
  */
  reset(): void;
  /**
   * Reads up to `b.length` bytes of data from this
   * input stream into an array of bytes. This method blocks until some
   * input is available.
   * 
   * This method simply performs the call
   * `read(b, 0, b.length)` and returns
   * the  result. It is important that it does
   * not do `in.read(b)` instead;
   * certain subclasses of  `FilterInputStream`
   * depend on the implementation strategy actually
   * used.
   *
   * @param      b   the buffer into which the data is read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterInputStream#read(byte[], int, int)
  */
  read(b: number[]): number;
}
/**
 * A `ByteArrayInputStream` contains
 * an internal buffer that contains bytes that
 * may be read from the stream. An internal
 * counter keeps track of the next byte to
 * be supplied by the `read` method.
 * 
 * Closing a `ByteArrayInputStream` has no effect. The methods in
 * this class can be called after the stream has been closed without
 * generating an `IOException`.
 *
 * @author  Arthur van Hoff
 * @see     java.io.StringBufferInputStream
 * @since   1.0
*/
export class ByteArrayInputStream extends InputStream {
  /**
   * Creates a `ByteArrayInputStream`
   * so that it  uses `buf` as its
   * buffer array.
   * The buffer array is not copied.
   * The initial value of `pos`
   * is `0` and the initial value
   * of  `count` is the length of
   * `buf`.
   *
   * @param   buf   the input buffer.
  */
  constructor(buf: number[]);
  /**
   * Creates `ByteArrayInputStream`
   * that uses `buf` as its
   * buffer array. The initial value of `pos`
   * is `offset` and the initial value
   * of `count` is the minimum of `offset+length`
   * and `buf.length`.
   * The buffer array is not copied. The buffer's mark is
   * set to the specified offset.
   *
   * @param   buf      the input buffer.
   * @param   offset   the offset in the buffer of the first byte to read.
   * @param   length   the maximum number of bytes to read from the buffer.
  */
  constructor(buf: number[], offset: number, length: number);
  /**
   * Reads the next byte of data from this input stream. The value
   * byte is returned as an `int` in the range
   * `0` to `255`. If no byte is available
   * because the end of the stream has been reached, the value
   * `-1` is returned.
   * 
   * This `read` method
   * cannot block.
   *
   * @return  the next byte of data, or `-1` if the end of the
   *          stream has been reached.
  */
  read(): number;
  /**
   * Reads up to `len` bytes of data into an array of bytes from this
   * input stream.  If `pos` equals `count`, then `-1` is
   * returned to indicate end of file.  Otherwise, the  number `k` of
   * bytes read is equal to the smaller of `len` and `count-pos`.
   * If `k` is positive, then bytes `buf[pos]` through
   * `buf[pos+k-1]` are copied into `b[off]` through
   * `b[off+k-1]` in the manner performed by `System.arraycopy`.
   * The value `k` is added into `pos` and `k` is returned.
   * 
   * This `read` method cannot block.
   *
   * @param   b     the buffer into which the data is read.
   * @param   off   the start offset in the destination array `b`
   * @param   len   the maximum number of bytes read.
   * @return  the total number of bytes read into the buffer, or
   *          `-1` if there is no more data because the end of
   *          the stream has been reached.
   * @throws  NullPointerException If `b` is `null`.
   * @throws  IndexOutOfBoundsException If `off` is negative,
   * `len` is negative, or `len` is greater than
   * `b.length - off`
  */
  read(b: number[], off: number, len: number): number;
  readAllBytes(): number[];
  readNBytes(b: number[], off: number, len: number): number;
  transferTo(out: OutputStream): number;
  /**
   * Skips `n` bytes of input from this input stream. Fewer
   * bytes might be skipped if the end of the input stream is reached.
   * The actual number `k`
   * of bytes to be skipped is equal to the smaller
   * of `n` and  `count-pos`.
   * The value `k` is added into `pos`
   * and `k` is returned.
   *
   * @param   n   the number of bytes to be skipped.
   * @return  the actual number of bytes skipped.
  */
  skip(n: number): number;
  /**
   * Returns the number of remaining bytes that can be read (or skipped over)
   * from this input stream.
   * 
   * The value returned is `count - pos`,
   * which is the number of bytes remaining to be read from the input buffer.
   *
   * @return  the number of remaining bytes that can be read (or skipped
   *          over) from this input stream without blocking.
  */
  available(): number;
  /**
   * Tests if this `InputStream` supports mark/reset. The
   * `markSupported` method of `ByteArrayInputStream`
   * always returns `true`.
   *
   * @since   1.1
  */
  markSupported(): boolean;
  /**
   * Set the current marked position in the stream.
   * ByteArrayInputStream objects are marked at position zero by
   * default when constructed.  They may be marked at another
   * position within the buffer by this method.
   * 
   * If no mark has been set, then the value of the mark is the
   * offset passed to the constructor (or 0 if the offset was not
   * supplied).
   *
   *  Note: The `readAheadLimit` for this class
   *  has no meaning.
   *
   * @since   1.1
  */
  mark(readAheadLimit: number): void;
  /**
   * Resets the buffer to the marked position.  The marked position
   * is 0 unless another position was marked or an offset was specified
   * in the constructor.
  */
  reset(): void;
  /**
   * Closing a `ByteArrayInputStream` has no effect. The methods in
   * this class can be called after the stream has been closed without
   * generating an `IOException`.
  */
  close(): void;
  /**
   * Reads some number of bytes from the input stream and stores them into
   * the buffer array `b`. The number of bytes actually read is
   * returned as an integer.  This method blocks until input data is
   * available, end of file is detected, or an exception is thrown.
   *
   *  If the length of `b` is zero, then no bytes are read and
   * `0` is returned; otherwise, there is an attempt to read at
   * least one byte. If no byte is available because the stream is at the
   * end of the file, the value `-1` is returned; otherwise, at
   * least one byte is read and stored into `b`.
   *
   *  The first byte read is stored into element `b[0]`, the
   * next one into `b[1]`, and so on. The number of bytes read is,
   * at most, equal to the length of `b`. Let k be the
   * number of bytes actually read; these bytes will be stored in elements
   * `b[0]` through `b[`k`-1]`,
   * leaving elements `b[`k`]` through
   * `b[b.length-1]` unaffected.
   *
   *  The `read(b)` method for class `InputStream`
   * has the same effect as: ` read(b, 0, b.length) `
   *
   * @param      b   the buffer into which the data is read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
   * @throws     IOException  If the first byte cannot be read for any reason
   *             other than the end of the file, if the input stream has been
   *             closed, or if some other I/O error occurs.
   * @throws     NullPointerException  if `b` is `null`.
   * @see        java.io.InputStream#read(byte[], int, int)
  */
  read(b: number[]): number;
  /**
   * Reads up to a specified number of bytes from the input stream. This
   * method blocks until the requested number of bytes have been read, end
   * of stream is detected, or an exception is thrown. This method does not
   * close the input stream.
   *
   *  The length of the returned array equals the number of bytes read
   * from the stream. If `len` is zero, then no bytes are read and
   * an empty byte array is returned. Otherwise, up to `len` bytes
   * are read from the stream. Fewer than `len` bytes may be read if
   * end of stream is encountered.
   *
   *  When this stream reaches end of stream, further invocations of this
   * method will return an empty byte array.
   *
   *  Note that this method is intended for simple cases where it is
   * convenient to read the specified number of bytes into a byte array. The
   * total amount of memory allocated by this method is proportional to the
   * number of bytes read from the stream which is bounded by `len`.
   * Therefore, the method may be safely called with very large values of
   * `len` provided sufficient memory is available.
   *
   *  The behavior for the case where the input stream is asynchronously
   * closed, or the thread interrupted during the read, is highly input
   * stream specific, and therefore not specified.
   *
   *  If an I/O error occurs reading from the input stream, then it may do
   * so after some, but not all, bytes have been read. Consequently the input
   * stream may not be at end of stream and may be in an inconsistent state.
   * It is strongly recommended that the stream be promptly closed if an I/O
   * error occurs.
   *
   * @implNote
   * The number of bytes allocated to read data from this stream and return
   * the result is bounded by `2*(long)len`, inclusive.
   *
   * @param len the maximum number of bytes to read
   * @return a byte array containing the bytes read from this input stream
   * @throws IllegalArgumentException if `length` is negative
   * @throws IOException if an I/O error occurs
   * @throws OutOfMemoryError if an array of the required size cannot be
   *         allocated.
   *
   * @since 11
  */
  readNBytes(len: number): number[];
}
/**
 * The `DataInput` interface provides
 * for reading bytes from a binary stream and
 * reconstructing from them data in any of
 * the Java primitive types. There is also
 * a
 * facility for reconstructing a `String`
 * from data in
 * modified UTF-8
 * format.
 * 
 * It is generally true of all the reading
 * routines in this interface that if end of
 * file is reached before the desired number
 * of bytes has been read, an `EOFException`
 * (which is a kind of `IOException`)
 * is thrown. If any byte cannot be read for
 * any reason other than end of file, an `IOException`
 * other than `EOFException` is
 * thrown. In particular, an `IOException`
 * may be thrown if the input stream has been
 * closed.
 *
 * Modified UTF-8
 * 
 * Implementations of the DataInput and DataOutput interfaces represent
 * Unicode strings in a format that is a slight modification of UTF-8.
 * (For information regarding the standard UTF-8 format, see section
 * 3.9 Unicode Encoding Forms of The Unicode Standard, Version
 * 4.0)
 *
 * 
 * Characters in the range `'\u005Cu0001'` to
 *         `'\u005Cu007F'` are represented by a single byte.
 * The null character `'\u005Cu0000'` and characters
 *         in the range `'\u005Cu0080'` to `'\u005Cu07FF'` are
 *         represented by a pair of bytes.
 * Characters in the range `'\u005Cu0800'`
 *         to `'\u005CuFFFF'` are represented by three bytes.
 * 
 *
 *   
 *     Encoding of UTF-8 values
 *     
 *     
 *       Value
 *       Byte
 *       Bit Values
 *     
 *     
 *       
 *       
 *        7 
 *        6 
 *        5 
 *        4 
 *        3 
 *        2 
 *        1 
 *        0 
 *     
 *     
 *     
 *       
 *         `\u005Cu0001` to `\u005Cu007F` 
 *        1 
 *       0
 *       bits 6-0
 *     
 *     
 *       
 *           `\u005Cu0000`,
 *           `\u005Cu0080` to `\u005Cu07FF` 
 *        1 
 *       1
 *       1
 *       0
 *       bits 10-6
 *     
 *     
 *       
 *        2 
 *       1
 *       0
 *       bits 5-0
 *     
 *     
 *       
 *         `\u005Cu0800` to `\u005CuFFFF` 
 *        1 
 *       1
 *       1
 *       1
 *       0
 *       bits 15-12
 *     
 *     
 *       
 *        2 
 *       1
 *       0
 *       bits 11-6
 *     
 *     
 *       
 *        3 
 *       1
 *       0
 *       bits 5-0
 *     
 *     
 *   
 *
 * 
 * The differences between this format and the
 * standard UTF-8 format are the following:
 * 
 * The null byte `'\u005Cu0000'` is encoded in 2-byte format
 *     rather than 1-byte, so that the encoded strings never have
 *     embedded nulls.
 * Only the 1-byte, 2-byte, and 3-byte formats are used.
 * Supplementary characters
 *     are represented in the form of surrogate pairs.
 * 
 * @author  Frank Yellin
 * @see     java.io.DataInputStream
 * @see     java.io.DataOutput
 * @since   1.0
*/
export class DataInput {
  /**
   * Reads some bytes from an input
   * stream and stores them into the buffer
   * array `b`. The number of bytes
   * read is equal
   * to the length of `b`.
   * 
   * This method blocks until one of the
   * following conditions occurs:
   * 
   * `b.length`
   * bytes of input data are available, in which
   * case a normal return is made.
   *
   * End of
   * file is detected, in which case an `EOFException`
   * is thrown.
   *
   * An I/O error occurs, in
   * which case an `IOException` other
   * than `EOFException` is thrown.
   * 
   * 
   * If `b` is `null`,
   * a `NullPointerException` is thrown.
   * If `b.length` is zero, then
   * no bytes are read. Otherwise, the first
   * byte read is stored into element `b[0]`,
   * the next one into `b[1]`, and
   * so on.
   * If an exception is thrown from
   * this method, then it may be that some but
   * not all bytes of `b` have been
   * updated with data from the input stream.
   *
   * @param   b   the buffer into which the data is read.
   * @throws  NullPointerException if `b` is `null`.
   * @throws  EOFException  if this stream reaches the end before reading
   *          all the bytes.
   * @throws  IOException   if an I/O error occurs.
  */
  readFully(b: number[]): void;
  /**
   *
   * Reads `len`
   * bytes from
   * an input stream.
   * 
   * This method
   * blocks until one of the following conditions
   * occurs:
   * 
   * `len` bytes
   * of input data are available, in which case
   * a normal return is made.
   *
   * End of file
   * is detected, in which case an `EOFException`
   * is thrown.
   *
   * An I/O error occurs, in
   * which case an `IOException` other
   * than `EOFException` is thrown.
   * 
   * 
   * If `b` is `null`,
   * a `NullPointerException` is thrown.
   * If `off` is negative, or `len`
   * is negative, or `off+len` is
   * greater than the length of the array `b`,
   * then an `IndexOutOfBoundsException`
   * is thrown.
   * If `len` is zero,
   * then no bytes are read. Otherwise, the first
   * byte read is stored into element `b[off]`,
   * the next one into `b[off+1]`,
   * and so on. The number of bytes read is,
   * at most, equal to `len`.
   *
   * @param   b    the buffer into which the data is read.
   * @param   off  an int specifying the offset in the data array `b`.
   * @param   len  an int specifying the number of bytes to read.
   * @throws  NullPointerException if `b` is `null`.
   * @throws  IndexOutOfBoundsException if `off` is negative,
   *          `len` is negative, or `len` is greater than
   *          `b.length - off`.
   * @throws  EOFException  if this stream reaches the end before reading
   *          all the bytes.
   * @throws  IOException   if an I/O error occurs.
  */
  readFully(b: number[], off: number, len: number): void;
  /**
   * Makes an attempt to skip over
   * `n` bytes
   * of data from the input
   * stream, discarding the skipped bytes. However,
   * it may skip
   * over some smaller number of
   * bytes, possibly zero. This may result from
   * any of a
   * number of conditions; reaching
   * end of file before `n` bytes
   * have been skipped is
   * only one possibility.
   * This method never throws an `EOFException`.
   * The actual
   * number of bytes skipped is returned.
   *
   * @param      n   the number of bytes to be skipped.
   * @return     the number of bytes actually skipped.
   * @throws     IOException   if an I/O error occurs.
  */
  skipBytes(n: number): number;
  /**
   * Reads one input byte and returns
   * `true` if that byte is nonzero,
   * `false` if that byte is zero.
   * This method is suitable for reading
   * the byte written by the `writeBoolean`
   * method of interface `DataOutput`.
   *
   * @return     the `boolean` value read.
   * @throws     EOFException  if this stream reaches the end before reading
   *               all the bytes.
   * @throws     IOException   if an I/O error occurs.
  */
  readBoolean(): boolean;
  /**
   * Reads and returns one input byte.
   * The byte is treated as a signed value in
   * the range `-128` through `127`,
   * inclusive.
   * This method is suitable for
   * reading the byte written by the `writeByte`
   * method of interface `DataOutput`.
   *
   * @return     the 8-bit value read.
   * @throws     EOFException  if this stream reaches the end before reading
   *               all the bytes.
   * @throws     IOException   if an I/O error occurs.
  */
  readByte(): number;
  /**
   * Reads one input byte, zero-extends
   * it to type `int`, and returns
   * the result, which is therefore in the range
   * `0`
   * through `255`.
   * This method is suitable for reading
   * the byte written by the `writeByte`
   * method of interface `DataOutput`
   * if the argument to `writeByte`
   * was intended to be a value in the range
   * `0` through `255`.
   *
   * @return     the unsigned 8-bit value read.
   * @throws     EOFException  if this stream reaches the end before reading
   *               all the bytes.
   * @throws     IOException   if an I/O error occurs.
  */
  readUnsignedByte(): number;
  /**
   * Reads two input bytes and returns
   * a `short` value. Let `a`
   * be the first byte read and `b`
   * be the second byte. The value
   * returned
   * is:
   * {@code (short)((a << 8) | (b & 0xff))
   * }
   * This method
   * is suitable for reading the bytes written
   * by the `writeShort` method of
   * interface `DataOutput`.
   *
   * @return     the 16-bit value read.
   * @throws     EOFException  if this stream reaches the end before reading
   *               all the bytes.
   * @throws     IOException   if an I/O error occurs.
  */
  readShort(): number;
  /**
   * Reads two input bytes and returns
   * an `int` value in the range `0`
   * through `65535`. Let `a`
   * be the first byte read and
   * `b`
   * be the second byte. The value returned is:
   * {@code (((a & 0xff) << 8) | (b & 0xff))
   * }
   * This method is suitable for reading the bytes
   * written by the `writeShort` method
   * of interface `DataOutput`  if
   * the argument to `writeShort`
   * was intended to be a value in the range
   * `0` through `65535`.
   *
   * @return     the unsigned 16-bit value read.
   * @throws     EOFException  if this stream reaches the end before reading
   *               all the bytes.
   * @throws     IOException   if an I/O error occurs.
  */
  readUnsignedShort(): number;
  /**
   * Reads two input bytes and returns a `char` value.
   * Let `a`
   * be the first byte read and `b`
   * be the second byte. The value
   * returned is:
   * {@code (char)((a << 8) | (b & 0xff))
   * }
   * This method
   * is suitable for reading bytes written by
   * the `writeChar` method of interface
   * `DataOutput`.
   *
   * @return     the `char` value read.
   * @throws     EOFException  if this stream reaches the end before reading
   *               all the bytes.
   * @throws     IOException   if an I/O error occurs.
  */
  readChar(): string;
  /**
   * Reads four input bytes and returns an
   * `int` value. Let `a-d`
   * be the first through fourth bytes read. The value returned is:
   * {@code
   * (((a & 0xff) << 24) | ((b & 0xff) << 16) |
   *  ((c & 0xff) <<  8) | (d & 0xff))
   * }
   * This method is suitable
   * for reading bytes written by the `writeInt`
   * method of interface `DataOutput`.
   *
   * @return     the `int` value read.
   * @throws     EOFException  if this stream reaches the end before reading
   *               all the bytes.
   * @throws     IOException   if an I/O error occurs.
  */
  readInt(): number;
  /**
   * Reads eight input bytes and returns
   * a `long` value. Let `a-h`
   * be the first through eighth bytes read.
   * The value returned is:
   * {@code
   * (((long)(a & 0xff) << 56) |
   *  ((long)(b & 0xff) << 48) |
   *  ((long)(c & 0xff) << 40) |
   *  ((long)(d & 0xff) << 32) |
   *  ((long)(e & 0xff) << 24) |
   *  ((long)(f & 0xff) << 16) |
   *  ((long)(g & 0xff) <<  8) |
   *  ((long)(h & 0xff)))
   * }
   * 
   * This method is suitable
   * for reading bytes written by the `writeLong`
   * method of interface `DataOutput`.
   *
   * @return     the `long` value read.
   * @throws     EOFException  if this stream reaches the end before reading
   *               all the bytes.
   * @throws     IOException   if an I/O error occurs.
  */
  readLong(): number;
  /**
   * Reads four input bytes and returns
   * a `float` value. It does this
   * by first constructing an `int`
   * value in exactly the manner
   * of the `readInt`
   * method, then converting this `int`
   * value to a `float` in
   * exactly the manner of the method `Float.intBitsToFloat`.
   * This method is suitable for reading
   * bytes written by the `writeFloat`
   * method of interface `DataOutput`.
   *
   * @return     the `float` value read.
   * @throws     EOFException  if this stream reaches the end before reading
   *               all the bytes.
   * @throws     IOException   if an I/O error occurs.
  */
  readFloat(): number;
  /**
   * Reads eight input bytes and returns
   * a `double` value. It does this
   * by first constructing a `long`
   * value in exactly the manner
   * of the `readLong`
   * method, then converting this `long`
   * value to a `double` in exactly
   * the manner of the method `Double.longBitsToDouble`.
   * This method is suitable for reading
   * bytes written by the `writeDouble`
   * method of interface `DataOutput`.
   *
   * @return     the `double` value read.
   * @throws     EOFException  if this stream reaches the end before reading
   *               all the bytes.
   * @throws     IOException   if an I/O error occurs.
  */
  readDouble(): number;
  /**
   * Reads the next line of text from the input stream.
   * It reads successive bytes, converting
   * each byte separately into a character,
   * until it encounters a line terminator or
   * end of
   * file; the characters read are then
   * returned as a `String`. Note
   * that because this
   * method processes bytes,
   * it does not support input of the full Unicode
   * character set.
   * 
   * If end of file is encountered
   * before even one byte can be read, then `null`
   * is returned. Otherwise, each byte that is
   * read is converted to type `char`
   * by zero-extension. If the character `'\n'`
   * is encountered, it is discarded and reading
   * ceases. If the character `'\r'`
   * is encountered, it is discarded and, if
   * the following byte converts  to the
   * character `'\n'`, then that is
   * discarded also; reading then ceases. If
   * end of file is encountered before either
   * of the characters `'\n'` and
   * `'\r'` is encountered, reading
   * ceases. Once reading has ceased, a `String`
   * is returned that contains all the characters
   * read and not discarded, taken in order.
   * Note that every character in this string
   * will have a value less than `\u005Cu0100`,
   * that is, `(char)256`.
   *
   * @return the next line of text from the input stream,
   *         or `null` if the end of file is
   *         encountered before a byte can be read.
   * @throws IOException  if an I/O error occurs.
  */
  readLine(): string;
  /**
   * Reads in a string that has been encoded using a
   * modified UTF-8
   * format.
   * The general contract of `readUTF`
   * is that it reads a representation of a Unicode
   * character string encoded in modified
   * UTF-8 format; this string of characters
   * is then returned as a `String`.
   * 
   * First, two bytes are read and used to
   * construct an unsigned 16-bit integer in
   * exactly the manner of the `readUnsignedShort`
   * method . This integer value is called the
   * UTF length and specifies the number
   * of additional bytes to be read. These bytes
   * are then converted to characters by considering
   * them in groups. The length of each group
   * is computed from the value of the first
   * byte of the group. The byte following a
   * group, if any, is the first byte of the
   * next group.
   * 
   * If the first byte of a group
   * matches the bit pattern `0xxxxxxx`
   * (where `x` means "may be `0`
   * or `1`"), then the group consists
   * of just that byte. The byte is zero-extended
   * to form a character.
   * 
   * If the first byte
   * of a group matches the bit pattern `110xxxxx`,
   * then the group consists of that byte `a`
   * and a second byte `b`. If there
   * is no byte `b` (because byte
   * `a` was the last of the bytes
   * to be read), or if byte `b` does
   * not match the bit pattern `10xxxxxx`,
   * then a `UTFDataFormatException`
   * is thrown. Otherwise, the group is converted
   * to the character:
   * {@code (char)(((a & 0x1F) << 6) | (b & 0x3F))
   * }
   * If the first byte of a group
   * matches the bit pattern `1110xxxx`,
   * then the group consists of that byte `a`
   * and two more bytes `b` and `c`.
   * If there is no byte `c` (because
   * byte `a` was one of the last
   * two of the bytes to be read), or either
   * byte `b` or byte `c`
   * does not match the bit pattern `10xxxxxx`,
   * then a `UTFDataFormatException`
   * is thrown. Otherwise, the group is converted
   * to the character:
   * {@code
   * (char)(((a & 0x0F) << 12) | ((b & 0x3F) << 6) | (c & 0x3F))
   * }
   * If the first byte of a group matches the
   * pattern `1111xxxx` or the pattern
   * `10xxxxxx`, then a `UTFDataFormatException`
   * is thrown.
   * 
   * If end of file is encountered
   * at any time during this entire process,
   * then an `EOFException` is thrown.
   * 
   * After every group has been converted to
   * a character by this process, the characters
   * are gathered, in the same order in which
   * their corresponding groups were read from
   * the input stream, to form a `String`,
   * which is returned.
   * 
   * The `writeUTF`
   * method of interface `DataOutput`
   * may be used to write data that is suitable
   * for reading by this method.
   * @return     a Unicode string.
   * @throws     EOFException            if this stream reaches the end
   *               before reading all the bytes.
   * @throws     IOException             if an I/O error occurs.
   * @throws     UTFDataFormatException  if the bytes do not represent a
   *               valid modified UTF-8 encoding of a string.
  */
  readUTF(): string;
}
/**
 * A data input stream lets an application read primitive Java data
 * types from an underlying input stream in a machine-independent
 * way. An application uses a data output stream to write data that
 * can later be read by a data input stream.
 * 
 * A DataInputStream is not safe for use by multiple concurrent
 * threads. If a DataInputStream is to be used by more than one
 * thread then access to the data input stream should be controlled
 * by appropriate synchronization.
 *
 * @author  Arthur van Hoff
 * @see     java.io.DataOutputStream
 * @since   1.0
*/
export class DataInputStream extends FilterInputStream {
  /**
   * Creates a DataInputStream that uses the specified
   * underlying InputStream.
   *
   * @param  in   the specified input stream
  */
  constructor(in_: InputStream);
  /**
   * Reads some number of bytes from the contained input stream and
   * stores them into the buffer array `b`. The number of
   * bytes actually read is returned as an integer. This method blocks
   * until input data is available, end of file is detected, or an
   * exception is thrown.
   *
   * If `b` is null, a `NullPointerException` is
   * thrown. If the length of `b` is zero, then no bytes are
   * read and `0` is returned; otherwise, there is an attempt
   * to read at least one byte. If no byte is available because the
   * stream is at end of file, the value `-1` is returned;
   * otherwise, at least one byte is read and stored into `b`.
   *
   * The first byte read is stored into element `b[0]`, the
   * next one into `b[1]`, and so on. The number of bytes read
   * is, at most, equal to the length of `b`. Let `k`
   * be the number of bytes actually read; these bytes will be stored in
   * elements `b[0]` through `b[k-1]`, leaving
   * elements `b[k]` through `b[b.length-1]`
   * unaffected.
   *
   * The `read(b)` method has the same effect as:
   *      * read(b, 0, b.length)
   * 
   *
   * @param      b   the buffer into which the data is read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end
   *             of the stream has been reached.
   * @throws     IOException if the first byte cannot be read for any reason
   *             other than end of file, the stream has been closed and the underlying
   *             input stream does not support reading after close, or another I/O
   *             error occurs.
   * @see        java.io.FilterInputStream#in
   * @see        java.io.InputStream#read(byte[], int, int)
  */
  read(b: number[]): number;
  /**
   * Reads up to `len` bytes of data from the contained
   * input stream into an array of bytes.  An attempt is made to read
   * as many as `len` bytes, but a smaller number may be read,
   * possibly zero. The number of bytes actually read is returned as an
   * integer.
   *
   *  This method blocks until input data is available, end of file is
   * detected, or an exception is thrown.
   *
   *  If `len` is zero, then no bytes are read and
   * `0` is returned; otherwise, there is an attempt to read at
   * least one byte. If no byte is available because the stream is at end of
   * file, the value `-1` is returned; otherwise, at least one
   * byte is read and stored into `b`.
   *
   *  The first byte read is stored into element `b[off]`, the
   * next one into `b[off+1]`, and so on. The number of bytes read
   * is, at most, equal to `len`. Let k be the number of
   * bytes actually read; these bytes will be stored in elements
   * `b[off]` through `b[off+`k`-1]`,
   * leaving elements `b[off+`k`]` through
   * `b[off+len-1]` unaffected.
   *
   *  In every case, elements `b[0]` through
   * `b[off]` and elements `b[off+len]` through
   * `b[b.length-1]` are unaffected.
   *
   * @param      b     the buffer into which the data is read.
   * @param      off the start offset in the destination array `b`
   * @param      len   the maximum number of bytes read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end
   *             of the stream has been reached.
   * @throws     NullPointerException If `b` is `null`.
   * @throws     IndexOutOfBoundsException If `off` is negative,
   *             `len` is negative, or `len` is greater than
   *             `b.length - off`
   * @throws     IOException if the first byte cannot be read for any reason
   *             other than end of file, the stream has been closed and the underlying
   *             input stream does not support reading after close, or another I/O
   *             error occurs.
   * @see        java.io.FilterInputStream#in
   * @see        java.io.InputStream#read(byte[], int, int)
  */
  read(b: number[], off: number, len: number): number;
  /**
   * See the general contract of the `readFully`
   * method of `DataInput`.
   * 
   * Bytes
   * for this operation are read from the contained
   * input stream.
   *
   * @param   b   the buffer into which the data is read.
   * @throws  NullPointerException if `b` is `null`.
   * @throws  EOFException  if this input stream reaches the end before
   *          reading all the bytes.
   * @throws  IOException   the stream has been closed and the contained
   *          input stream does not support reading after close, or
   *          another I/O error occurs.
   * @see     java.io.FilterInputStream#in
  */
  readFully(b: number[]): void;
  /**
   * See the general contract of the `readFully`
   * method of `DataInput`.
   * 
   * Bytes
   * for this operation are read from the contained
   * input stream.
   *
   * @param      b     the buffer into which the data is read.
   * @param      off   the start offset in the data array `b`.
   * @param      len   the number of bytes to read.
   * @throws     NullPointerException if `b` is `null`.
   * @throws     IndexOutOfBoundsException if `off` is negative,
   *             `len` is negative, or `len` is greater than
   *             `b.length - off`.
   * @throws     EOFException  if this input stream reaches the end before
   *             reading all the bytes.
   * @throws     IOException   the stream has been closed and the contained
   *             input stream does not support reading after close, or
   *             another I/O error occurs.
   * @see        java.io.FilterInputStream#in
  */
  readFully(b: number[], off: number, len: number): void;
  /**
   * See the general contract of the `skipBytes`
   * method of `DataInput`.
   * 
   * Bytes for this operation are read from the contained
   * input stream.
   *
   * @param      n   the number of bytes to be skipped.
   * @return     the actual number of bytes skipped.
   * @throws     IOException  if the contained input stream does not support
   *             seek, or the stream has been closed and
   *             the contained input stream does not support
   *             reading after close, or another I/O error occurs.
  */
  skipBytes(n: number): number;
  /**
   * See the general contract of the `readBoolean`
   * method of `DataInput`.
   * 
   * Bytes for this operation are read from the contained
   * input stream.
   *
   * @return     the `boolean` value read.
   * @throws     EOFException  if this input stream has reached the end.
   * @throws     IOException   the stream has been closed and the contained
   *             input stream does not support reading after close, or
   *             another I/O error occurs.
   * @see        java.io.FilterInputStream#in
  */
  readBoolean(): boolean;
  /**
   * See the general contract of the `readByte`
   * method of `DataInput`.
   * 
   * Bytes
   * for this operation are read from the contained
   * input stream.
   *
   * @return     the next byte of this input stream as a signed 8-bit
   *             `byte`.
   * @throws     EOFException  if this input stream has reached the end.
   * @throws     IOException   the stream has been closed and the contained
   *             input stream does not support reading after close, or
   *             another I/O error occurs.
   * @see        java.io.FilterInputStream#in
  */
  readByte(): number;
  /**
   * See the general contract of the `readUnsignedByte`
   * method of `DataInput`.
   * 
   * Bytes
   * for this operation are read from the contained
   * input stream.
   *
   * @return     the next byte of this input stream, interpreted as an
   *             unsigned 8-bit number.
   * @throws     EOFException  if this input stream has reached the end.
   * @throws     IOException   the stream has been closed and the contained
   *             input stream does not support reading after close, or
   *             another I/O error occurs.
   * @see         java.io.FilterInputStream#in
  */
  readUnsignedByte(): number;
  /**
   * See the general contract of the `readShort`
   * method of `DataInput`.
   * 
   * Bytes
   * for this operation are read from the contained
   * input stream.
   *
   * @return     the next two bytes of this input stream, interpreted as a
   *             signed 16-bit number.
   * @throws     EOFException  if this input stream reaches the end before
   *               reading two bytes.
   * @throws     IOException   the stream has been closed and the contained
   *             input stream does not support reading after close, or
   *             another I/O error occurs.
   * @see        java.io.FilterInputStream#in
  */
  readShort(): number;
  /**
   * See the general contract of the `readUnsignedShort`
   * method of `DataInput`.
   * 
   * Bytes
   * for this operation are read from the contained
   * input stream.
   *
   * @return     the next two bytes of this input stream, interpreted as an
   *             unsigned 16-bit integer.
   * @throws     EOFException  if this input stream reaches the end before
   *             reading two bytes.
   * @throws     IOException   the stream has been closed and the contained
   *             input stream does not support reading after close, or
   *             another I/O error occurs.
   * @see        java.io.FilterInputStream#in
  */
  readUnsignedShort(): number;
  /**
   * See the general contract of the `readChar`
   * method of `DataInput`.
   * 
   * Bytes
   * for this operation are read from the contained
   * input stream.
   *
   * @return     the next two bytes of this input stream, interpreted as a
   *             `char`.
   * @throws     EOFException  if this input stream reaches the end before
   *               reading two bytes.
   * @throws     IOException   the stream has been closed and the contained
   *             input stream does not support reading after close, or
   *             another I/O error occurs.
   * @see        java.io.FilterInputStream#in
  */
  readChar(): string;
  /**
   * See the general contract of the `readInt`
   * method of `DataInput`.
   * 
   * Bytes
   * for this operation are read from the contained
   * input stream.
   *
   * @return     the next four bytes of this input stream, interpreted as an
   *             `int`.
   * @throws     EOFException  if this input stream reaches the end before
   *               reading four bytes.
   * @throws     IOException   the stream has been closed and the contained
   *             input stream does not support reading after close, or
   *             another I/O error occurs.
   * @see        java.io.FilterInputStream#in
  */
  readInt(): number;
  /**
   * See the general contract of the `readLong`
   * method of `DataInput`.
   * 
   * Bytes
   * for this operation are read from the contained
   * input stream.
   *
   * @return     the next eight bytes of this input stream, interpreted as a
   *             `long`.
   * @throws     EOFException  if this input stream reaches the end before
   *               reading eight bytes.
   * @throws     IOException   the stream has been closed and the contained
   *             input stream does not support reading after close, or
   *             another I/O error occurs.
   * @see        java.io.FilterInputStream#in
  */
  readLong(): number;
  /**
   * See the general contract of the `readFloat`
   * method of `DataInput`.
   * 
   * Bytes
   * for this operation are read from the contained
   * input stream.
   *
   * @return     the next four bytes of this input stream, interpreted as a
   *             `float`.
   * @throws     EOFException  if this input stream reaches the end before
   *               reading four bytes.
   * @throws     IOException   the stream has been closed and the contained
   *             input stream does not support reading after close, or
   *             another I/O error occurs.
   * @see        java.io.DataInputStream#readInt()
   * @see        java.lang.Float#intBitsToFloat(int)
  */
  readFloat(): number;
  /**
   * See the general contract of the `readDouble`
   * method of `DataInput`.
   * 
   * Bytes
   * for this operation are read from the contained
   * input stream.
   *
   * @return     the next eight bytes of this input stream, interpreted as a
   *             `double`.
   * @throws     EOFException  if this input stream reaches the end before
   *               reading eight bytes.
   * @throws     IOException   the stream has been closed and the contained
   *             input stream does not support reading after close, or
   *             another I/O error occurs.
   * @see        java.io.DataInputStream#readLong()
   * @see        java.lang.Double#longBitsToDouble(long)
  */
  readDouble(): number;
  /**
   * See the general contract of the `readLine`
   * method of `DataInput`.
   * 
   * Bytes
   * for this operation are read from the contained
   * input stream.
   *
   * @deprecated This method does not properly convert bytes to characters.
   * As of JDK 1.1, the preferred way to read lines of text is via the
   * `BufferedReader.readLine()` method.  Programs that use the
   * `DataInputStream` class to read lines can be converted to use
   * the `BufferedReader` class by replacing code of the form:
   *      *     DataInputStream d = new DataInputStream(in);
   * 
   * with:
   *      *     BufferedReader d
   *          = new BufferedReader(new InputStreamReader(in));
   * 
   *
   * @return     the next line of text from this input stream.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.BufferedReader#readLine()
   * @see        java.io.FilterInputStream#in
  */
  readLine(): string;
  /**
   * See the general contract of the `readUTF`
   * method of `DataInput`.
   * 
   * Bytes
   * for this operation are read from the contained
   * input stream.
   *
   * @return     a Unicode string.
   * @throws     EOFException  if this input stream reaches the end before
   *               reading all the bytes.
   * @throws     IOException   the stream has been closed and the contained
   *             input stream does not support reading after close, or
   *             another I/O error occurs.
   * @throws     UTFDataFormatException if the bytes do not represent a valid
   *             modified UTF-8 encoding of a string.
   * @see        java.io.DataInputStream#readUTF(java.io.DataInput)
  */
  readUTF(): string;
  /**
   * Reads from the
   * stream `in` a representation
   * of a Unicode  character string encoded in
   * modified UTF-8 format;
   * this string of characters is then returned as a `String`.
   * The details of the modified UTF-8 representation
   * are  exactly the same as for the `readUTF`
   * method of `DataInput`.
   *
   * @param      in   a data input stream.
   * @return     a Unicode string.
   * @throws     EOFException            if the input stream reaches the end
   *               before all the bytes.
   * @throws     IOException   the stream has been closed and the contained
   *             input stream does not support reading after close, or
   *             another I/O error occurs.
   * @throws     UTFDataFormatException  if the bytes do not represent a
   *               valid modified UTF-8 encoding of a Unicode string.
   * @see        java.io.DataInputStream#readUnsignedShort()
  */
  static readUTF(in_: DataInput): string;
  /**
   * Reads the next byte of data from this input stream. The value
   * byte is returned as an `int` in the range
   * `0` to `255`. If no byte is available
   * because the end of the stream has been reached, the value
   * `-1` is returned. This method blocks until input data
   * is available, the end of the stream is detected, or an exception
   * is thrown.
   * 
   * This method
   * simply performs `in.read()` and returns the result.
   *
   * @return     the next byte of data, or `-1` if the end of the
   *             stream is reached.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterInputStream#in
  */
  read(): number;
}
export interface DataInputStream extends FilterInputStream, DataInput {}
/**
 * This class allows an application to create an input stream in
 * which the bytes read are supplied by the contents of a string.
 * Applications can also read bytes from a byte array by using a
 * `ByteArrayInputStream`.
 * 
 * Only the low eight bits of each character in the string are used by
 * this class.
 *
 * @author     Arthur van Hoff
 * @see        java.io.ByteArrayInputStream
 * @see        java.io.StringReader
 * @since      1.0
 * @deprecated This class does not properly convert characters into bytes.  As
 *             of JDK 1.1, the preferred way to create a stream from a
 *             string is via the `StringReader` class.
*/
export class StringBufferInputStream extends InputStream {
  /**
   * Creates a string input stream to read data from the specified string.
   *
   * @param      s   the underlying input buffer.
  */
  constructor(s: string);
  /**
   * Reads the next byte of data from this input stream. The value
   * byte is returned as an `int` in the range
   * `0` to `255`. If no byte is available
   * because the end of the stream has been reached, the value
   * `-1` is returned.
   * 
   * The `read` method of
   * `StringBufferInputStream` cannot block. It returns the
   * low eight bits of the next character in this input stream's buffer.
   *
   * @return     the next byte of data, or `-1` if the end of the
   *             stream is reached.
  */
  read(): number;
  /**
   * Reads up to `len` bytes of data from this input stream
   * into an array of bytes.
   * 
   * The `read` method of
   * `StringBufferInputStream` cannot block. It copies the
   * low eight bits from the characters in this input stream's buffer into
   * the byte array argument.
   *
   * @param      b     the buffer into which the data is read.
   * @param      off   the start offset of the data.
   * @param      len   the maximum number of bytes read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
  */
  read(b: number[], off: number, len: number): number;
  /**
   * Skips `n` bytes of input from this input stream. Fewer
   * bytes might be skipped if the end of the input stream is reached.
   *
   * @param      n   the number of bytes to be skipped.
   * @return     the actual number of bytes skipped.
  */
  skip(n: number): number;
  /**
   * Returns the number of bytes that can be read from the input
   * stream without blocking.
   *
   * @return     the value of `count - pos`, which is the
   *             number of bytes remaining to be read from the input buffer.
  */
  available(): number;
  /**
   * Resets the input stream to begin reading from the first character
   * of this input stream's underlying buffer.
  */
  reset(): void;
  /**
   * Reads some number of bytes from the input stream and stores them into
   * the buffer array `b`. The number of bytes actually read is
   * returned as an integer.  This method blocks until input data is
   * available, end of file is detected, or an exception is thrown.
   *
   *  If the length of `b` is zero, then no bytes are read and
   * `0` is returned; otherwise, there is an attempt to read at
   * least one byte. If no byte is available because the stream is at the
   * end of the file, the value `-1` is returned; otherwise, at
   * least one byte is read and stored into `b`.
   *
   *  The first byte read is stored into element `b[0]`, the
   * next one into `b[1]`, and so on. The number of bytes read is,
   * at most, equal to the length of `b`. Let k be the
   * number of bytes actually read; these bytes will be stored in elements
   * `b[0]` through `b[`k`-1]`,
   * leaving elements `b[`k`]` through
   * `b[b.length-1]` unaffected.
   *
   *  The `read(b)` method for class `InputStream`
   * has the same effect as: ` read(b, 0, b.length) `
   *
   * @param      b   the buffer into which the data is read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
   * @throws     IOException  If the first byte cannot be read for any reason
   *             other than the end of the file, if the input stream has been
   *             closed, or if some other I/O error occurs.
   * @throws     NullPointerException  if `b` is `null`.
   * @see        java.io.InputStream#read(byte[], int, int)
  */
  read(b: number[]): number;
}
export class PrintStream extends FilterOutputStream {
  /**
   * Creates a new print stream, without automatic line flushing, with the
   * specified OutputStream. Characters written to the stream are converted
   * to bytes using the platform's default character encoding.
   *
   * @param  out        The output stream to which values and objects will be
   *                    printed
   *
   * @see java.io.PrintWriter#PrintWriter(java.io.OutputStream)
  */
  constructor(out: OutputStream);
  /**
   * Creates a new print stream, with the specified OutputStream and line
   * flushing. Characters written to the stream are converted to bytes using
   * the platform's default character encoding.
   *
   * @param  out        The output stream to which values and objects will be
   *                    printed
   * @param  autoFlush  Whether the output buffer will be flushed
   *                    whenever a byte array is written, one of the
   *                    `println` methods is invoked, or a newline
   *                    character or byte (`'\n'`) is written
   *
   * @see java.io.PrintWriter#PrintWriter(java.io.OutputStream, boolean)
  */
  constructor(out: OutputStream, autoFlush: boolean);
  /**
   * Creates a new print stream, with the specified OutputStream, line
   * flushing, and character encoding.
   *
   * @param  out        The output stream to which values and objects will be
   *                    printed
   * @param  autoFlush  Whether the output buffer will be flushed
   *                    whenever a byte array is written, one of the
   *                    `println` methods is invoked, or a newline
   *                    character or byte (`'\n'`) is written
   * @param  encoding   The name of a supported
   *                    
   *                    character encoding
   *
   * @throws  UnsupportedEncodingException
   *          If the named encoding is not supported
   *
   * @since  1.4
  */
  constructor(out: OutputStream, autoFlush: boolean, encoding: string);
  /**
   * Creates a new print stream, with the specified OutputStream, line
   * flushing and charset.  This convenience constructor creates the necessary
   * intermediate {@link java.io.OutputStreamWriter OutputStreamWriter},
   * which will encode characters using the provided charset.
   *
   * @param  out        The output stream to which values and objects will be
   *                    printed
   * @param  autoFlush  Whether the output buffer will be flushed
   *                    whenever a byte array is written, one of the
   *                    `println` methods is invoked, or a newline
   *                    character or byte (`'\n'`) is written
   * @param  charset    A {@linkplain java.nio.charset.Charset charset}
   *
   * @since  10
  */
  constructor(out: OutputStream, autoFlush: boolean, charset: Charset);
  /**
   * Creates a new print stream, without automatic line flushing, with the
   * specified file name.  This convenience constructor creates
   * the necessary intermediate {@link java.io.OutputStreamWriter
   * OutputStreamWriter}, which will encode characters using the
   * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}
   * for this instance of the Java virtual machine.
   *
   * @param  fileName
   *         The name of the file to use as the destination of this print
   *         stream.  If the file exists, then it will be truncated to
   *         zero size; otherwise, a new file will be created.  The output
   *         will be written to the file and is buffered.
   *
   * @throws  FileNotFoundException
   *          If the given file object does not denote an existing, writable
   *          regular file and a new regular file of that name cannot be
   *          created, or if some other error occurs while opening or
   *          creating the file
   *
   * @throws  SecurityException
   *          If a security manager is present and {@link
   *          SecurityManager#checkWrite checkWrite(fileName)} denies write
   *          access to the file
   *
   * @since  1.5
  */
  constructor(fileName: string);
  /**
   * Creates a new print stream, without automatic line flushing, with the
   * specified file name and charset.  This convenience constructor creates
   * the necessary intermediate {@link java.io.OutputStreamWriter
   * OutputStreamWriter}, which will encode characters using the provided
   * charset.
   *
   * @param  fileName
   *         The name of the file to use as the destination of this print
   *         stream.  If the file exists, then it will be truncated to
   *         zero size; otherwise, a new file will be created.  The output
   *         will be written to the file and is buffered.
   *
   * @param  csn
   *         The name of a supported {@linkplain java.nio.charset.Charset
   *         charset}
   *
   * @throws  FileNotFoundException
   *          If the given file object does not denote an existing, writable
   *          regular file and a new regular file of that name cannot be
   *          created, or if some other error occurs while opening or
   *          creating the file
   *
   * @throws  SecurityException
   *          If a security manager is present and {@link
   *          SecurityManager#checkWrite checkWrite(fileName)} denies write
   *          access to the file
   *
   * @throws  UnsupportedEncodingException
   *          If the named charset is not supported
   *
   * @since  1.5
  */
  constructor(fileName: string, csn: string);
  /**
   * Creates a new print stream, without automatic line flushing, with the
   * specified file name and charset.  This convenience constructor creates
   * the necessary intermediate {@link java.io.OutputStreamWriter
   * OutputStreamWriter}, which will encode characters using the provided
   * charset.
   *
   * @param  fileName
   *         The name of the file to use as the destination of this print
   *         stream.  If the file exists, then it will be truncated to
   *         zero size; otherwise, a new file will be created.  The output
   *         will be written to the file and is buffered.
   *
   * @param  charset
   *         A {@linkplain java.nio.charset.Charset charset}
   *
   * @throws  IOException
   *          if an I/O error occurs while opening or creating the file
   *
   * @throws  SecurityException
   *          If a security manager is present and {@link
   *          SecurityManager#checkWrite checkWrite(fileName)} denies write
   *          access to the file
   *
   * @since  10
  */
  constructor(fileName: string, charset: Charset);
  /**
   * Creates a new print stream, without automatic line flushing, with the
   * specified file.  This convenience constructor creates the necessary
   * intermediate {@link java.io.OutputStreamWriter OutputStreamWriter},
   * which will encode characters using the {@linkplain
   * java.nio.charset.Charset#defaultCharset() default charset} for this
   * instance of the Java virtual machine.
   *
   * @param  file
   *         The file to use as the destination of this print stream.  If the
   *         file exists, then it will be truncated to zero size; otherwise,
   *         a new file will be created.  The output will be written to the
   *         file and is buffered.
   *
   * @throws  FileNotFoundException
   *          If the given file object does not denote an existing, writable
   *          regular file and a new regular file of that name cannot be
   *          created, or if some other error occurs while opening or
   *          creating the file
   *
   * @throws  SecurityException
   *          If a security manager is present and {@link
   *          SecurityManager#checkWrite checkWrite(file.getPath())}
   *          denies write access to the file
   *
   * @since  1.5
  */
  constructor(file: File);
  /**
   * Creates a new print stream, without automatic line flushing, with the
   * specified file and charset.  This convenience constructor creates
   * the necessary intermediate {@link java.io.OutputStreamWriter
   * OutputStreamWriter}, which will encode characters using the provided
   * charset.
   *
   * @param  file
   *         The file to use as the destination of this print stream.  If the
   *         file exists, then it will be truncated to zero size; otherwise,
   *         a new file will be created.  The output will be written to the
   *         file and is buffered.
   *
   * @param  csn
   *         The name of a supported {@linkplain java.nio.charset.Charset
   *         charset}
   *
   * @throws  FileNotFoundException
   *          If the given file object does not denote an existing, writable
   *          regular file and a new regular file of that name cannot be
   *          created, or if some other error occurs while opening or
   *          creating the file
   *
   * @throws  SecurityException
   *          If a security manager is present and {@link
   *          SecurityManager#checkWrite checkWrite(file.getPath())}
   *          denies write access to the file
   *
   * @throws  UnsupportedEncodingException
   *          If the named charset is not supported
   *
   * @since  1.5
  */
  constructor(file: File, csn: string);
  /**
   * Creates a new print stream, without automatic line flushing, with the
   * specified file and charset.  This convenience constructor creates
   * the necessary intermediate {@link java.io.OutputStreamWriter
   * OutputStreamWriter}, which will encode characters using the provided
   * charset.
   *
   * @param  file
   *         The file to use as the destination of this print stream.  If the
   *         file exists, then it will be truncated to zero size; otherwise,
   *         a new file will be created.  The output will be written to the
   *         file and is buffered.
   *
   * @param  charset
   *         A {@linkplain java.nio.charset.Charset charset}
   *
   * @throws  IOException
   *          if an I/O error occurs while opening or creating the file
   *
   * @throws  SecurityException
   *          If a security manager is present and {@link
   *          SecurityManager#checkWrite checkWrite(file.getPath())}
   *          denies write access to the file
   *
   * @since  10
  */
  constructor(file: File, charset: Charset);
  /**
   * Flushes the stream.  This is done by writing any buffered output bytes to
   * the underlying output stream and then flushing that stream.
   *
   * @see        java.io.OutputStream#flush()
  */
  flush(): void;
  /**
   * Closes the stream.  This is done by flushing the stream and then closing
   * the underlying output stream.
   *
   * @see        java.io.OutputStream#close()
  */
  close(): void;
  /**
   * Flushes the stream and checks its error state. The internal error state
   * is set to `true` when the underlying output stream throws an
   * `IOException` other than `InterruptedIOException`,
   * and when the `setError` method is invoked.  If an operation
   * on the underlying output stream throws an
   * `InterruptedIOException`, then the `PrintStream`
   * converts the exception back into an interrupt by doing:
   * {@code
   *     Thread.currentThread().interrupt();
   * }
   * or the equivalent.
   *
   * @return `true` if and only if this stream has encountered an
   *         `IOException` other than
   *         `InterruptedIOException`, or the
   *         `setError` method has been invoked
  */
  checkError(): boolean;
  /**
   * Writes the specified byte to this stream.  If the byte is a newline and
   * automatic flushing is enabled then the `flush` method will be
   * invoked.
   *
   *  Note that the byte is written as given; to write a character that
   * will be translated according to the platform's default character
   * encoding, use the `print(char)` or `println(char)`
   * methods.
   *
   * @param  b  The byte to be written
   * @see #print(char)
   * @see #println(char)
  */
  write(b: number): void;
  /**
   * Writes `len` bytes from the specified byte array starting at
   * offset `off` to this stream.  If automatic flushing is
   * enabled then the `flush` method will be invoked.
   *
   *  Note that the bytes will be written as given; to write characters
   * that will be translated according to the platform's default character
   * encoding, use the `print(char)` or `println(char)`
   * methods.
   *
   * @param  buf   A byte array
   * @param  off   Offset from which to start taking bytes
   * @param  len   Number of bytes to write
  */
  write(buf: number[], off: number, len: number): void;
  /**
   * Writes all bytes from the specified byte array to this stream. If
   * automatic flushing is enabled then the `flush` method will be
   * invoked.
   *
   *  Note that the bytes will be written as given; to write characters
   * that will be translated according to the platform's default character
   * encoding, use the `print(char[])` or `println(char[])`
   * methods.
   *
   * @apiNote
   * Although declared to throw `IOException`, this method never
   * actually does so. Instead, like other methods that this class
   * overrides, it sets an internal flag which may be tested via the
   * {@link #checkError()} method. To write an array of bytes without having
   * to write a `catch` block for the `IOException`, use either
   * {@link #writeBytes(byte[] buf) writeBytes(buf)} or
   * {@link #write(byte[], int, int) write(buf, 0, buf.length)}.
   *
   * @implSpec
   * This method is equivalent to
   * {@link java.io.PrintStream#write(byte[],int,int)
   * this.write(buf, 0, buf.length)}.
   *
   * @param  buf   A byte array
   *
   * @throws IOException If an I/O error occurs.
   *
   * @see #writeBytes(byte[])
   * @see #write(byte[],int,int)
   *
   * @since 14
  */
  write(buf: number[]): void;
  /**
   * Writes all bytes from the specified byte array to this stream.
   * If automatic flushing is enabled then the `flush` method
   * will be invoked.
   *
   *  Note that the bytes will be written as given; to write characters
   * that will be translated according to the platform's default character
   * encoding, use the `print(char[])` or `println(char[])`
   * methods.
   *
   * @implSpec
   * This method is equivalent to
   * {@link #write(byte[], int, int) this.write(buf, 0, buf.length)}.
   *
   * @param  buf   A byte array
   *
   * @since 14
  */
  writeBytes(buf: number[]): void;
  /**
   * Prints a boolean value.  The string produced by {@link
   * java.lang.String#valueOf(boolean)} is translated into bytes
   * according to the platform's default character encoding, and these bytes
   * are written in exactly the manner of the
   * {@link #write(int)} method.
   *
   * @param      b   The `boolean` to be printed
  */
  print(b: boolean): void;
  /**
   * Prints a character.  The character is translated into one or more bytes
   * according to the character encoding given to the constructor, or the
   * platform's default character encoding if none specified. These bytes
   * are written in exactly the manner of the {@link #write(int)} method.
   *
   * @param      c   The `char` to be printed
  */
  print(c: string): void;
  /**
   * Prints an integer.  The string produced by {@link
   * java.lang.String#valueOf(int)} is translated into bytes
   * according to the platform's default character encoding, and these bytes
   * are written in exactly the manner of the
   * {@link #write(int)} method.
   *
   * @param      i   The `int` to be printed
   * @see        java.lang.Integer#toString(int)
  */
  print(i: number): void;
  /**
   * Prints an array of characters.  The characters are converted into bytes
   * according to the character encoding given to the constructor, or the
   * platform's default character encoding if none specified. These bytes
   * are written in exactly the manner of the {@link #write(int)} method.
   *
   * @param      s   The array of chars to be printed
   *
   * @throws  NullPointerException  If `s` is `null`
  */
  print(s: string[]): void;
  /**
   * Prints an object.  The string produced by the {@link
   * java.lang.String#valueOf(Object)} method is translated into bytes
   * according to the platform's default character encoding, and these bytes
   * are written in exactly the manner of the
   * {@link #write(int)} method.
   *
   * @param      obj   The `Object` to be printed
   * @see        java.lang.Object#toString()
  */
  print(obj: any): void;
  /**
   * Terminates the current line by writing the line separator string.  The
   * line separator string is defined by the system property
   * `line.separator`, and is not necessarily a single newline
   * character (`'\n'`).
  */
  println(): void;
  /**
   * Prints a boolean and then terminate the line.  This method behaves as
   * though it invokes {@link #print(boolean)} and then
   * {@link #println()}.
   *
   * @param x  The `boolean` to be printed
  */
  println(x: boolean): void;
  /**
   * Prints a character and then terminate the line.  This method behaves as
   * though it invokes {@link #print(char)} and then
   * {@link #println()}.
   *
   * @param x  The `char` to be printed.
  */
  println(x: string): void;
  /**
   * Prints an integer and then terminate the line.  This method behaves as
   * though it invokes {@link #print(int)} and then
   * {@link #println()}.
   *
   * @param x  The `int` to be printed.
  */
  println(x: number): void;
  /**
   * Prints an array of characters and then terminate the line.  This method
   * behaves as though it invokes {@link #print(char[])} and
   * then {@link #println()}.
   *
   * @param x  an array of chars to print.
  */
  println(x: string[]): void;
  /**
   * Prints an Object and then terminate the line.  This method calls
   * at first String.valueOf(x) to get the printed object's string value,
   * then behaves as
   * though it invokes {@link #print(String)} and then
   * {@link #println()}.
   *
   * @param x  The `Object` to be printed.
  */
  println(x: any): void;
  /**
   * A convenience method to write a formatted string to this output stream
   * using the specified format string and arguments.
   *
   *  An invocation of this method of the form
   * `out.printf(format, args)` behaves
   * in exactly the same way as the invocation
   *
   * {@code
   *     out.format(format, args)
   * }
   *
   * @param  format
   *         A format string as described in Format string syntax
   *
   * @param  args
   *         Arguments referenced by the format specifiers in the format
   *         string.  If there are more arguments than format specifiers, the
   *         extra arguments are ignored.  The number of arguments is
   *         variable and may be zero.  The maximum number of arguments is
   *         limited by the maximum dimension of a Java array as defined by
   *         The Java Virtual Machine Specification.
   *         The behaviour on a
   *         `null` argument depends on the conversion.
   *
   * @throws  java.util.IllegalFormatException
   *          If a format string contains an illegal syntax, a format
   *          specifier that is incompatible with the given arguments,
   *          insufficient arguments given the format string, or other
   *          illegal conditions.  For specification of all possible
   *          formatting errors, see the Details section of the
   *          formatter class specification.
   *
   * @throws  NullPointerException
   *          If the `format` is `null`
   *
   * @return  This output stream
   *
   * @since  1.5
  */
  printf(format: string, ...args: any[]): PrintStream;
  /**
   * A convenience method to write a formatted string to this output stream
   * using the specified format string and arguments.
   *
   *  An invocation of this method of the form
   * `out.printf(l, format, args)` behaves
   * in exactly the same way as the invocation
   *
   * {@code
   *     out.format(l, format, args)
   * }
   *
   * @param  l
   *         The {@linkplain java.util.Locale locale} to apply during
   *         formatting.  If `l` is `null` then no localization
   *         is applied.
   *
   * @param  format
   *         A format string as described in Format string syntax
   *
   * @param  args
   *         Arguments referenced by the format specifiers in the format
   *         string.  If there are more arguments than format specifiers, the
   *         extra arguments are ignored.  The number of arguments is
   *         variable and may be zero.  The maximum number of arguments is
   *         limited by the maximum dimension of a Java array as defined by
   *         The Java Virtual Machine Specification.
   *         The behaviour on a
   *         `null` argument depends on the conversion.
   *
   * @throws  java.util.IllegalFormatException
   *          If a format string contains an illegal syntax, a format
   *          specifier that is incompatible with the given arguments,
   *          insufficient arguments given the format string, or other
   *          illegal conditions.  For specification of all possible
   *          formatting errors, see the Details section of the
   *          formatter class specification.
   *
   * @throws  NullPointerException
   *          If the `format` is `null`
   *
   * @return  This output stream
   *
   * @since  1.5
  */
  printf(l: Locale, format: string, ...args: any[]): PrintStream;
  /**
   * Writes a formatted string to this output stream using the specified
   * format string and arguments.
   *
   *  The locale always used is the one returned by {@link
   * java.util.Locale#getDefault(Locale.Category)} with
   * {@link java.util.Locale.Category#FORMAT FORMAT} category specified,
   * regardless of any previous invocations of other formatting methods on
   * this object.
   *
   * @param  format
   *         A format string as described in Format string syntax
   *
   * @param  args
   *         Arguments referenced by the format specifiers in the format
   *         string.  If there are more arguments than format specifiers, the
   *         extra arguments are ignored.  The number of arguments is
   *         variable and may be zero.  The maximum number of arguments is
   *         limited by the maximum dimension of a Java array as defined by
   *         The Java Virtual Machine Specification.
   *         The behaviour on a
   *         `null` argument depends on the conversion.
   *
   * @throws  java.util.IllegalFormatException
   *          If a format string contains an illegal syntax, a format
   *          specifier that is incompatible with the given arguments,
   *          insufficient arguments given the format string, or other
   *          illegal conditions.  For specification of all possible
   *          formatting errors, see the Details section of the
   *          formatter class specification.
   *
   * @throws  NullPointerException
   *          If the `format` is `null`
   *
   * @return  This output stream
   *
   * @since  1.5
  */
  format(format: string, ...args: any[]): PrintStream;
  /**
   * Writes a formatted string to this output stream using the specified
   * format string and arguments.
   *
   * @param  l
   *         The {@linkplain java.util.Locale locale} to apply during
   *         formatting.  If `l` is `null` then no localization
   *         is applied.
   *
   * @param  format
   *         A format string as described in Format string syntax
   *
   * @param  args
   *         Arguments referenced by the format specifiers in the format
   *         string.  If there are more arguments than format specifiers, the
   *         extra arguments are ignored.  The number of arguments is
   *         variable and may be zero.  The maximum number of arguments is
   *         limited by the maximum dimension of a Java array as defined by
   *         The Java Virtual Machine Specification.
   *         The behaviour on a
   *         `null` argument depends on the conversion.
   *
   * @throws  java.util.IllegalFormatException
   *          If a format string contains an illegal syntax, a format
   *          specifier that is incompatible with the given arguments,
   *          insufficient arguments given the format string, or other
   *          illegal conditions.  For specification of all possible
   *          formatting errors, see the Details section of the
   *          formatter class specification.
   *
   * @throws  NullPointerException
   *          If the `format` is `null`
   *
   * @return  This output stream
   *
   * @since  1.5
  */
  format(l: Locale, format: string, ...args: any[]): PrintStream;
  /**
   * Appends the specified character sequence to this output stream.
   *
   *  An invocation of this method of the form `out.append(csq)`
   * behaves in exactly the same way as the invocation
   *
   * {@code
   *     out.print(csq.toString())
   * }
   *
   *  Depending on the specification of `toString` for the
   * character sequence `csq`, the entire sequence may not be
   * appended.  For instance, invoking then `toString` method of a
   * character buffer will return a subsequence whose content depends upon
   * the buffer's position and limit.
   *
   * @param  csq
   *         The character sequence to append.  If `csq` is
   *         `null`, then the four characters `"null"` are
   *         appended to this output stream.
   *
   * @return  This output stream
   *
   * @since  1.5
  */
  append(csq: CharSequence): PrintStream;
  /**
   * Appends a subsequence of the specified character sequence to this output
   * stream.
   *
   *  An invocation of this method of the form
   * `out.append(csq, start, end)` when
   * `csq` is not `null`, behaves in
   * exactly the same way as the invocation
   *
   * {@code
   *     out.print(csq.subSequence(start, end).toString())
   * }
   *
   * @param  csq
   *         The character sequence from which a subsequence will be
   *         appended.  If `csq` is `null`, then characters
   *         will be appended as if `csq` contained the four
   *         characters `"null"`.
   *
   * @param  start
   *         The index of the first character in the subsequence
   *
   * @param  end
   *         The index of the character following the last character in the
   *         subsequence
   *
   * @return  This output stream
   *
   * @throws  IndexOutOfBoundsException
   *          If `start` or `end` are negative, `start`
   *          is greater than `end`, or `end` is greater than
   *          `csq.length()`
   *
   * @since  1.5
  */
  append(csq: CharSequence, start: number, end: number): PrintStream;
  /**
   * Appends the specified character to this output stream.
   *
   *  An invocation of this method of the form `out.append(c)`
   * behaves in exactly the same way as the invocation
   *
   * {@code
   *     out.print(c)
   * }
   *
   * @param  c
   *         The 16-bit character to append
   *
   * @return  This output stream
   *
   * @since  1.5
  */
  append(c: string): PrintStream;
}
export interface PrintStream extends FilterOutputStream, Appendable, Closeable {}
/**
 * A piped input stream should be connected
 * to a piped output stream; the piped  input
 * stream then provides whatever data bytes
 * are written to the piped output  stream.
 * Typically, data is read from a `PipedInputStream`
 * object by one thread  and data is written
 * to the corresponding `PipedOutputStream`
 * by some  other thread. Attempting to use
 * both objects from a single thread is not
 * recommended, as it may deadlock the thread.
 * The piped input stream contains a buffer,
 * decoupling read operations from write operations,
 * within limits.
 * A pipe is said to be  broken  if a
 * thread that was providing data bytes to the connected
 * piped output stream is no longer alive.
 *
 * @author  James Gosling
 * @see     java.io.PipedOutputStream
 * @since   1.0
*/
export class PipedInputStream extends InputStream {
  /**
   * Creates a `PipedInputStream` so
   * that it is connected to the piped output
   * stream `src`. Data bytes written
   * to `src` will then be  available
   * as input from this stream.
   *
   * @param      src   the stream to connect to.
   * @throws     IOException  if an I/O error occurs.
  */
  constructor(src: PipedOutputStream);
  /**
   * Creates a `PipedInputStream` so that it is
   * connected to the piped output stream
   * `src` and uses the specified pipe size for
   * the pipe's buffer.
   * Data bytes written to `src` will then
   * be available as input from this stream.
   *
   * @param      src   the stream to connect to.
   * @param      pipeSize the size of the pipe's buffer.
   * @throws     IOException  if an I/O error occurs.
   * @throws     IllegalArgumentException if `pipeSize <= 0`.
   * @since      1.6
  */
  constructor(src: PipedOutputStream, pipeSize: number);
  /**
   * Creates a `PipedInputStream` so
   * that it is not yet {@linkplain #connect(java.io.PipedOutputStream)
   * connected}.
   * It must be {@linkplain java.io.PipedOutputStream#connect(
   * java.io.PipedInputStream) connected} to a
   * `PipedOutputStream` before being used.
  */
  constructor();
  /**
   * Creates a `PipedInputStream` so that it is not yet
   * {@linkplain #connect(java.io.PipedOutputStream) connected} and
   * uses the specified pipe size for the pipe's buffer.
   * It must be {@linkplain java.io.PipedOutputStream#connect(
   * java.io.PipedInputStream)
   * connected} to a `PipedOutputStream` before being used.
   *
   * @param      pipeSize the size of the pipe's buffer.
   * @throws     IllegalArgumentException if `pipeSize <= 0`.
   * @since      1.6
  */
  constructor(pipeSize: number);
  /**
   * Causes this piped input stream to be connected
   * to the piped  output stream `src`.
   * If this object is already connected to some
   * other piped output  stream, an `IOException`
   * is thrown.
   * 
   * If `src` is an
   * unconnected piped output stream and `snk`
   * is an unconnected piped input stream, they
   * may be connected by either the call:
   *
   * `snk.connect(src)` 
   * 
   * or the call:
   *
   * `src.connect(snk)` 
   * 
   * The two calls have the same effect.
   *
   * @param      src   The piped output stream to connect to.
   * @throws     IOException  if an I/O error occurs.
  */
  connect(src: PipedOutputStream): void;
  /**
   * Reads the next byte of data from this piped input stream. The
   * value byte is returned as an `int` in the range
   * `0` to `255`.
   * This method blocks until input data is available, the end of the
   * stream is detected, or an exception is thrown.
   *
   * @return   the next byte of data, or `-1` if the end of the
   *           stream is reached.
   * @throws   IOException  if the pipe is
   *           {@link #connect(java.io.PipedOutputStream) unconnected},
   *            `broken`, closed,
   *           or if an I/O error occurs.
  */
  read(): number;
  /**
   * Reads up to `len` bytes of data from this piped input
   * stream into an array of bytes. Less than `len` bytes
   * will be read if the end of the data stream is reached or if
   * `len` exceeds the pipe's buffer size.
   * If `len ` is zero, then no bytes are read and 0 is returned;
   * otherwise, the method blocks until at least 1 byte of input is
   * available, end of the stream has been detected, or an exception is
   * thrown.
   *
   * @param      b     the buffer into which the data is read.
   * @param      off   the start offset in the destination array `b`
   * @param      len   the maximum number of bytes read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
   * @throws     NullPointerException If `b` is `null`.
   * @throws     IndexOutOfBoundsException If `off` is negative,
   *             `len` is negative, or `len` is greater than
   *             `b.length - off`
   * @throws     IOException if the pipe is  `broken`,
   *           {@link #connect(java.io.PipedOutputStream) unconnected},
   *           closed, or if an I/O error occurs.
  */
  read(b: number[], off: number, len: number): number;
  /**
   * Returns the number of bytes that can be read from this input
   * stream without blocking.
   *
   * @return the number of bytes that can be read from this input stream
   *         without blocking, or `0` if this input stream has been
   *         closed by invoking its {@link #close()} method, or if the pipe
   *         is {@link #connect(java.io.PipedOutputStream) unconnected}, or
   *          `broken`.
   *
   * @throws IOException  if an I/O error occurs.
   * @since  1.0.2
  */
  available(): number;
  /**
   * Closes this piped input stream and releases any system resources
   * associated with the stream.
   *
   * @throws     IOException  if an I/O error occurs.
  */
  close(): void;
  /**
   * Reads some number of bytes from the input stream and stores them into
   * the buffer array `b`. The number of bytes actually read is
   * returned as an integer.  This method blocks until input data is
   * available, end of file is detected, or an exception is thrown.
   *
   *  If the length of `b` is zero, then no bytes are read and
   * `0` is returned; otherwise, there is an attempt to read at
   * least one byte. If no byte is available because the stream is at the
   * end of the file, the value `-1` is returned; otherwise, at
   * least one byte is read and stored into `b`.
   *
   *  The first byte read is stored into element `b[0]`, the
   * next one into `b[1]`, and so on. The number of bytes read is,
   * at most, equal to the length of `b`. Let k be the
   * number of bytes actually read; these bytes will be stored in elements
   * `b[0]` through `b[`k`-1]`,
   * leaving elements `b[`k`]` through
   * `b[b.length-1]` unaffected.
   *
   *  The `read(b)` method for class `InputStream`
   * has the same effect as: ` read(b, 0, b.length) `
   *
   * @param      b   the buffer into which the data is read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
   * @throws     IOException  If the first byte cannot be read for any reason
   *             other than the end of the file, if the input stream has been
   *             closed, or if some other I/O error occurs.
   * @throws     NullPointerException  if `b` is `null`.
   * @see        java.io.InputStream#read(byte[], int, int)
  */
  read(b: number[]): number;
}
/**
 * Thrown when control information that was read from an object stream
 * violates internal consistency checks.
 *
 * @since   1.1
*/
export class StreamCorruptedException extends ObjectStreamException {
  /**
   * Create a StreamCorruptedException and list a reason why thrown.
   *
   * @param reason  String describing the reason for the exception.
  */
  constructor(reason: string);
  /**
   * Create a StreamCorruptedException and list no reason why thrown.
  */
  constructor();
}
/**
 * Wraps an {@link IOException} with an unchecked exception.
 *
 * @since   1.8
*/
export class UncheckedIOException extends RuntimeException {
  /**
   * Constructs an instance of this class.
   *
   * @param   message
   *          the detail message, can be null
   * @param   cause
   *          the `IOException`
   *
   * @throws  NullPointerException
   *          if the cause is `null`
  */
  constructor(message: string, cause: IOException);
  /**
   * Constructs an instance of this class.
   *
   * @param   cause
   *          the `IOException`
   *
   * @throws  NullPointerException
   *          if the cause is `null`
  */
  constructor(cause: IOException);
  /**
   * Returns the cause of this exception.
   *
   * @return  the `IOException` which is the cause of this exception.
  */
  getCause(): IOException;
}
export class StringWriter extends Writer {
  /**
   * Create a new string writer using the default initial string-buffer
   * size.
  */
  constructor();
  /**
   * Create a new string writer using the specified initial string-buffer
   * size.
   *
   * @param initialSize
   *        The number of `char` values that will fit into this buffer
   *        before it is automatically expanded
   *
   * @throws IllegalArgumentException
   *         If `initialSize` is negative
  */
  constructor(initialSize: number);
  /**
   * Write a single character.
  */
  write(c: number): void;
  /**
   * Write a portion of an array of characters.
   *
   * @param  cbuf  Array of characters
   * @param  off   Offset from which to start writing characters
   * @param  len   Number of characters to write
   *
   * @throws  IndexOutOfBoundsException
   *          If `off` is negative, or `len` is negative,
   *          or `off + len` is negative or greater than the length
   *          of the given array
  */
  write(cbuf: string[], off: number, len: number): void;
  /**
   * Write a string.
  */
  write(str: string): void;
  /**
   * Write a portion of a string.
   *
   * @param  str  String to be written
   * @param  off  Offset from which to start writing characters
   * @param  len  Number of characters to write
   *
   * @throws  IndexOutOfBoundsException
   *          If `off` is negative, or `len` is negative,
   *          or `off + len` is negative or greater than the length
   *          of the given string
  */
  write(str: string, off: number, len: number): void;
  /**
   * Appends the specified character sequence to this writer.
   *
   *  An invocation of this method of the form `out.append(csq)`
   * behaves in exactly the same way as the invocation
   *
   *      *     out.write(csq.toString()) 
   *
   *  Depending on the specification of `toString` for the
   * character sequence `csq`, the entire sequence may not be
   * appended. For instance, invoking the `toString` method of a
   * character buffer will return a subsequence whose content depends upon
   * the buffer's position and limit.
   *
   * @param  csq
   *         The character sequence to append.  If `csq` is
   *         `null`, then the four characters `"null"` are
   *         appended to this writer.
   *
   * @return  This writer
   *
   * @since  1.5
  */
  append(csq: CharSequence): StringWriter;
  /**
   * Appends a subsequence of the specified character sequence to this writer.
   *
   *  An invocation of this method of the form
   * `out.append(csq, start, end)` when `csq`
   * is not `null`, behaves in
   * exactly the same way as the invocation
   *
   * {@code
   *     out.write(csq.subSequence(start, end).toString())
   * }
   *
   * @param  csq
   *         The character sequence from which a subsequence will be
   *         appended.  If `csq` is `null`, then characters
   *         will be appended as if `csq` contained the four
   *         characters `"null"`.
   *
   * @param  start
   *         The index of the first character in the subsequence
   *
   * @param  end
   *         The index of the character following the last character in the
   *         subsequence
   *
   * @return  This writer
   *
   * @throws  IndexOutOfBoundsException
   *          If `start` or `end` are negative, `start`
   *          is greater than `end`, or `end` is greater than
   *          `csq.length()`
   *
   * @since  1.5
  */
  append(csq: CharSequence, start: number, end: number): StringWriter;
  /**
   * Appends the specified character to this writer.
   *
   *  An invocation of this method of the form `out.append(c)`
   * behaves in exactly the same way as the invocation
   *
   *      *     out.write(c) 
   *
   * @param  c
   *         The 16-bit character to append
   *
   * @return  This writer
   *
   * @since 1.5
  */
  append(c: string): StringWriter;
  /**
   * Return the buffer's current value as a string.
  */
  toString(): string;
  /**
   * Return the string buffer itself.
   *
   * @return StringBuffer holding the current buffer value.
  */
  getBuffer(): StringBuffer;
  /**
   * Flush the stream.
  */
  flush(): void;
  /**
   * Closing a `StringWriter` has no effect. The methods in this
   * class can be called after the stream has been closed without generating
   * an `IOException`.
  */
  close(): void;
  /**
   * Writes an array of characters.
   *
   * @param  cbuf
   *         Array of characters to be written
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(cbuf: string[]): void;
}
/**
 * A filter for abstract pathnames.
 *
 *  Instances of this interface may be passed to the
 * {@link File#listFiles(java.io.FileFilter) listFiles(FileFilter)} method
 * of the {@link java.io.File} class.
 *
 * @since 1.2
*/
export class FileFilter {
  /**
   * Tests whether or not the specified abstract pathname should be
   * included in a pathname list.
   *
   * @param  pathname  The abstract pathname to be tested
   * @return  `true` if and only if `pathname`
   *          should be included
  */
  accept(pathname: File): boolean;
}
export class BufferedReader extends Reader {
  /**
   * Creates a buffering character-input stream that uses an input buffer of
   * the specified size.
   *
   * @param  in   A Reader
   * @param  sz   Input-buffer size
   *
   * @throws IllegalArgumentException  If `sz <= 0`
  */
  constructor(in_: Reader, sz: number);
  /**
   * Creates a buffering character-input stream that uses a default-sized
   * input buffer.
   *
   * @param  in   A Reader
  */
  constructor(in_: Reader);
  /**
   * Reads a single character.
   *
   * @return The character read, as an integer in the range
   *         0 to 65535 (`0x00-0xffff`), or -1 if the
   *         end of the stream has been reached
   * @throws     IOException  If an I/O error occurs
  */
  read(): number;
  /**
   * Reads characters into a portion of an array.
   *
   *  This method implements the general contract of the corresponding
   * {@link Reader#read(char[], int, int) read} method of the
   * {@link Reader} class.  As an additional convenience, it
   * attempts to read as many characters as possible by repeatedly invoking
   * the `read` method of the underlying stream.  This iterated
   * `read` continues until one of the following conditions becomes
   * true: 
   *
   *    The specified number of characters have been read,
   *
   *    The `read` method of the underlying stream returns
   *   `-1`, indicating end-of-file, or
   *
   *    The `ready` method of the underlying stream
   *   returns `false`, indicating that further input requests
   *   would block.
   *
   *  If the first `read` on the underlying stream returns
   * `-1` to indicate end-of-file then this method returns
   * `-1`.  Otherwise this method returns the number of characters
   * actually read.
   *
   *  Subclasses of this class are encouraged, but not required, to
   * attempt to read as many characters as possible in the same fashion.
   *
   *  Ordinarily this method takes characters from this stream's character
   * buffer, filling it from the underlying stream as necessary.  If,
   * however, the buffer is empty, the mark is not valid, and the requested
   * length is at least as large as the buffer, then this method will read
   * characters directly from the underlying stream into the given array.
   * Thus redundant `BufferedReader`s will not copy data
   * unnecessarily.
   *
   * @param      cbuf  Destination buffer
   * @param      off   Offset at which to start storing characters
   * @param      len   Maximum number of characters to read
   *
   * @return     The number of characters read, or -1 if the end of the
   *             stream has been reached
   *
   * @throws     IOException  If an I/O error occurs
   * @throws     IndexOutOfBoundsException {@inheritDoc}
  */
  read(cbuf: string[], off: number, len: number): number;
  /**
   * Reads a line of text.  A line is considered to be terminated by any one
   * of a line feed ('\n'), a carriage return ('\r'), a carriage return
   * followed immediately by a line feed, or by reaching the end-of-file
   * (EOF).
   *
   * @return     A String containing the contents of the line, not including
   *             any line-termination characters, or null if the end of the
   *             stream has been reached without reading any characters
   *
   * @throws     IOException  If an I/O error occurs
   *
   * @see java.nio.file.Files#readAllLines
  */
  readLine(): string;
  /**
   * Skips characters.
   *
   * @param  n  The number of characters to skip
   *
   * @return    The number of characters actually skipped
   *
   * @throws     IllegalArgumentException  If `n` is negative.
   * @throws     IOException  If an I/O error occurs
  */
  skip(n: number): number;
  /**
   * Tells whether this stream is ready to be read.  A buffered character
   * stream is ready if the buffer is not empty, or if the underlying
   * character stream is ready.
   *
   * @throws     IOException  If an I/O error occurs
  */
  ready(): boolean;
  /**
   * Tells whether this stream supports the mark() operation, which it does.
  */
  markSupported(): boolean;
  /**
   * Marks the present position in the stream.  Subsequent calls to reset()
   * will attempt to reposition the stream to this point.
   *
   * @param readAheadLimit   Limit on the number of characters that may be
   *                         read while still preserving the mark. An attempt
   *                         to reset the stream after reading characters
   *                         up to this limit or beyond may fail.
   *                         A limit value larger than the size of the input
   *                         buffer will cause a new buffer to be allocated
   *                         whose size is no smaller than limit.
   *                         Therefore large values should be used with care.
   *
   * @throws     IllegalArgumentException  If `readAheadLimit < 0`
   * @throws     IOException  If an I/O error occurs
  */
  mark(readAheadLimit: number): void;
  /**
   * Resets the stream to the most recent mark.
   *
   * @throws     IOException  If the stream has never been marked,
   *                          or if the mark has been invalidated
  */
  reset(): void;
  close(): void;
  /**
   * Returns a `Stream`, the elements of which are lines read from
   * this `BufferedReader`.  The {@link Stream} is lazily populated,
   * i.e., read only occurs during the
   * terminal
   * stream operation.
   *
   *  The reader must not be operated on during the execution of the
   * terminal stream operation. Otherwise, the result of the terminal stream
   * operation is undefined.
   *
   *  After execution of the terminal stream operation there are no
   * guarantees that the reader will be at a specific position from which to
   * read the next character or line.
   *
   *  If an {@link IOException} is thrown when accessing the underlying
   * `BufferedReader`, it is wrapped in an {@link
   * UncheckedIOException} which will be thrown from the `Stream`
   * method that caused the read to take place. This method will return a
   * Stream if invoked on a BufferedReader that is closed. Any operation on
   * that stream that requires reading from the BufferedReader after it is
   * closed, will cause an UncheckedIOException to be thrown.
   *
   * @return a `Stream` providing the lines of text
   *         described by this `BufferedReader`
   *
   * @since 1.8
  */
  lines(): Stream<string>;
  /**
   * Attempts to read characters into the specified character buffer.
   * The buffer is used as a repository of characters as-is: the only
   * changes made are the results of a put operation. No flipping or
   * rewinding of the buffer is performed.
   *
   * @param target the buffer to read characters into
   * @return The number of characters added to the buffer, or
   *         -1 if this source of characters is at its end
   * @throws IOException if an I/O error occurs
   * @throws NullPointerException if target is null
   * @throws java.nio.ReadOnlyBufferException if target is a read only buffer
   * @since 1.5
  */
  read(target: CharBuffer): number;
  /**
   * Reads characters into an array.  This method will block until some input
   * is available, an I/O error occurs, or the end of the stream is reached.
   *
   * @param       cbuf  Destination buffer
   *
   * @return      The number of characters read, or -1
   *              if the end of the stream
   *              has been reached
   *
   * @throws      IOException  If an I/O error occurs
  */
  read(cbuf: string[]): number;
}
export class LineNumberReader extends BufferedReader {
  /**
   * Create a new line-numbering reader, using the default input-buffer
   * size.
   *
   * @param  in
   *         A Reader object to provide the underlying stream
  */
  constructor(in_: Reader);
  /**
   * Create a new line-numbering reader, reading characters into a buffer of
   * the given size.
   *
   * @param  in
   *         A Reader object to provide the underlying stream
   *
   * @param  sz
   *         An int specifying the size of the buffer
  */
  constructor(in_: Reader, sz: number);
  /**
   * Set the current line number.
   *
   * @param  lineNumber
   *         An int specifying the line number
   *
   * @see #getLineNumber
  */
  setLineNumber(lineNumber: number);
  /**
   * Get the current line number.
   *
   * @return  The current line number
   *
   * @see #setLineNumber
  */
  getLineNumber(): number;
  /**
   * Read a single character.  Line terminators are
   * compressed into single newline ('\n') characters.  The current line
   * number is incremented whenever a line terminator is read, or when the
   * end of the stream is reached and the last character in the stream is
   * not a line terminator.
   *
   * @return  The character read, or -1 if the end of the stream has been
   *          reached
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  read(): number;
  /**
   * Read characters into a portion of an array.
   * Line terminators are compressed into single newline
   * ('\n') characters.  The current line number is incremented whenever a
   * line terminator is read, or when the end of the stream is reached and
   * the last character in the stream is not a line terminator.
   *
   * @param  cbuf
   *         Destination buffer
   *
   * @param  off
   *         Offset at which to start storing characters
   *
   * @param  len
   *         Maximum number of characters to read
   *
   * @return  The number of characters read, or -1 if the end of the stream
   *          has already been reached
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @throws  IndexOutOfBoundsException {@inheritDoc}
  */
  read(cbuf: string[], off: number, len: number): number;
  /**
   * Read a line of text.  Line terminators are compressed
   * into single newline ('\n') characters. The current line number is
   * incremented whenever a line terminator is read, or when the end of the
   * stream is reached and the last character in the stream is not a line
   * terminator.
   *
   * @return  A String containing the contents of the line, not including
   *          any line termination characters, or
   *          `null` if the end of the stream has been reached
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  readLine(): string;
  /**
   * Skip characters.
   *
   * @param  n
   *         The number of characters to skip
   *
   * @return  The number of characters actually skipped
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @throws  IllegalArgumentException
   *          If `n` is negative
  */
  skip(n: number): number;
  /**
   * Mark the present position in the stream.  Subsequent calls to reset()
   * will attempt to reposition the stream to this point, and will also reset
   * the line number appropriately.
   *
   * @param  readAheadLimit
   *         Limit on the number of characters that may be read while still
   *         preserving the mark.  After reading this many characters,
   *         attempting to reset the stream may fail.
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  mark(readAheadLimit: number): void;
  /**
   * Reset the stream to the most recent mark.
   *
   * @throws  IOException
   *          If the stream has not been marked, or if the mark has been
   *          invalidated
  */
  reset(): void;
  /**
   * Attempts to read characters into the specified character buffer.
   * The buffer is used as a repository of characters as-is: the only
   * changes made are the results of a put operation. No flipping or
   * rewinding of the buffer is performed.
   *
   * @param target the buffer to read characters into
   * @return The number of characters added to the buffer, or
   *         -1 if this source of characters is at its end
   * @throws IOException if an I/O error occurs
   * @throws NullPointerException if target is null
   * @throws java.nio.ReadOnlyBufferException if target is a read only buffer
   * @since 1.5
  */
  read(target: CharBuffer): number;
  /**
   * Reads characters into an array.  This method will block until some input
   * is available, an I/O error occurs, or the end of the stream is reached.
   *
   * @param       cbuf  Destination buffer
   *
   * @return      The number of characters read, or -1
   *              if the end of the stream
   *              has been reached
   *
   * @throws      IOException  If an I/O error occurs
  */
  read(cbuf: string[]): number;
}
export class FileNotFoundException extends IOException {
  /**
   * Constructs a `FileNotFoundException` with
   * `null` as its error detail message.
  */
  constructor();
  /**
   * Constructs a `FileNotFoundException` with the
   * specified detail message. The string `s` can be
   * retrieved later by the
   * {@link java.lang.Throwable#getMessage}
   * method of class `java.lang.Throwable`.
   *
   * @param   s   the detail message.
  */
  constructor(s: string);
}
export class Writer extends Appendable {
  /**
   * Returns a new `Writer` which discards all characters.  The
   * returned stream is initially open.  The stream is closed by calling
   * the `close()` method.  Subsequent calls to `close()` have
   * no effect.
   *
   *  While the stream is open, the `append(char)`, `     * append(CharSequence)`, `append(CharSequence, int, int)`,
   * `flush()`, `write(int)`, `write(char[])`, and
   * `write(char[], int, int)` methods do nothing. After the stream
   * has been closed, these methods all throw `IOException`.
   *
   *  The {@link #lock object} used to synchronize operations on the
   * returned `Writer` is not specified.
   *
   * @return a `Writer` which discards all characters
   *
   * @since 11
  */
  static nullWriter(): Writer;
  /**
   * Writes a single character.  The character to be written is contained in
   * the 16 low-order bits of the given integer value; the 16 high-order bits
   * are ignored.
   *
   *  Subclasses that intend to support efficient single-character output
   * should override this method.
   *
   * @param  c
   *         int specifying a character to be written
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(c: number): void;
  /**
   * Writes an array of characters.
   *
   * @param  cbuf
   *         Array of characters to be written
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(cbuf: string[]): void;
  /**
   * Writes a portion of an array of characters.
   *
   * @param  cbuf
   *         Array of characters
   *
   * @param  off
   *         Offset from which to start writing characters
   *
   * @param  len
   *         Number of characters to write
   *
   * @throws  IndexOutOfBoundsException
   *          Implementations should throw this exception
   *          if `off` is negative, or `len` is negative,
   *          or `off + len` is negative or greater than the length
   *          of the given array
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(cbuf: string[], off: number, len: number): void;
  /**
   * Writes a string.
   *
   * @param  str
   *         String to be written
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(str: string): void;
  /**
   * Writes a portion of a string.
   *
   * @implSpec
   * The implementation in this class throws an
   * `IndexOutOfBoundsException` for the indicated conditions;
   * overriding methods may choose to do otherwise.
   *
   * @param  str
   *         A String
   *
   * @param  off
   *         Offset from which to start writing characters
   *
   * @param  len
   *         Number of characters to write
   *
   * @throws  IndexOutOfBoundsException
   *          Implementations should throw this exception
   *          if `off` is negative, or `len` is negative,
   *          or `off + len` is negative or greater than the length
   *          of the given string
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(str: string, off: number, len: number): void;
  /**
   * Appends the specified character sequence to this writer.
   *
   *  An invocation of this method of the form `out.append(csq)`
   * behaves in exactly the same way as the invocation
   *
   *      *     out.write(csq.toString()) 
   *
   *  Depending on the specification of `toString` for the
   * character sequence `csq`, the entire sequence may not be
   * appended. For instance, invoking the `toString` method of a
   * character buffer will return a subsequence whose content depends upon
   * the buffer's position and limit.
   *
   * @param  csq
   *         The character sequence to append.  If `csq` is
   *         `null`, then the four characters `"null"` are
   *         appended to this writer.
   *
   * @return  This writer
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @since  1.5
  */
  append(csq: CharSequence): Writer;
  /**
   * Appends a subsequence of the specified character sequence to this writer.
   * `Appendable`.
   *
   *  An invocation of this method of the form
   * `out.append(csq, start, end)` when `csq`
   * is not `null` behaves in exactly the
   * same way as the invocation
   *
   * {@code
   *     out.write(csq.subSequence(start, end).toString())
   * }
   *
   * @param  csq
   *         The character sequence from which a subsequence will be
   *         appended.  If `csq` is `null`, then characters
   *         will be appended as if `csq` contained the four
   *         characters `"null"`.
   *
   * @param  start
   *         The index of the first character in the subsequence
   *
   * @param  end
   *         The index of the character following the last character in the
   *         subsequence
   *
   * @return  This writer
   *
   * @throws  IndexOutOfBoundsException
   *          If `start` or `end` are negative, `start`
   *          is greater than `end`, or `end` is greater than
   *          `csq.length()`
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @since  1.5
  */
  append(csq: CharSequence, start: number, end: number): Writer;
  /**
   * Appends the specified character to this writer.
   *
   *  An invocation of this method of the form `out.append(c)`
   * behaves in exactly the same way as the invocation
   *
   *      *     out.write(c) 
   *
   * @param  c
   *         The 16-bit character to append
   *
   * @return  This writer
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @since 1.5
  */
  append(c: string): Writer;
  /**
   * Flushes the stream.  If the stream has saved any characters from the
   * various write() methods in a buffer, write them immediately to their
   * intended destination.  Then, if that destination is another character or
   * byte stream, flush it.  Thus one flush() invocation will flush all the
   * buffers in a chain of Writers and OutputStreams.
   *
   *  If the intended destination of this stream is an abstraction provided
   * by the underlying operating system, for example a file, then flushing the
   * stream guarantees only that bytes previously written to the stream are
   * passed to the operating system for writing; it does not guarantee that
   * they are actually written to a physical device such as a disk drive.
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  flush(): void;
  /**
   * Closes the stream, flushing it first. Once the stream has been closed,
   * further write() or flush() invocations will cause an IOException to be
   * thrown. Closing a previously closed stream has no effect.
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  close(): void;
}
export interface Writer extends Appendable, Closeable, Flushable {}
/**
 * The Character Encoding is not supported.
 *
 * @author  Asmus Freytag
 * @since   1.1
*/
export class UnsupportedEncodingException extends IOException {
  /**
   * Constructs an UnsupportedEncodingException without a detail message.
  */
  constructor();
  /**
   * Constructs an UnsupportedEncodingException with a detail message.
   * @param s Describes the reason for the exception.
  */
  constructor(s: string);
}
/**
 * Serialization's descriptor for classes.  It contains the name and
 * serialVersionUID of the class.  The ObjectStreamClass for a specific class
 * loaded in this Java VM can be found/created using the lookup method.
 *
 * The algorithm to compute the SerialVersionUID is described in
 * 
 *    Java Object Serialization Specification, Section 4.6, "Stream Unique Identifiers".
 *
 * @author      Mike Warres
 * @author      Roger Riggs
 * @see ObjectStreamField
 * @see 
 *      Java Object Serialization Specification, Section 4, "Class Descriptors"
 * @since   1.1
*/
export class ObjectStreamClass extends Serializable {
  /**
   serialPersistentFields value indicating no serializable fields 
  */
  static readonly NO_FIELDS: ObjectStreamField[];
  /**
   * Find the descriptor for a class that can be serialized.  Creates an
   * ObjectStreamClass instance if one does not exist yet for class. Null is
   * returned if the specified class does not implement java.io.Serializable
   * or java.io.Externalizable.
   *
   * @param   cl class for which to get the descriptor
   * @return  the class descriptor for the specified class
  */
  static lookup(cl: Class<any>): ObjectStreamClass;
  /**
   * Returns the descriptor for any class, regardless of whether it
   * implements {@link Serializable}.
   *
   * @param        cl class for which to get the descriptor
   * @return       the class descriptor for the specified class
   * @since 1.6
  */
  static lookupAny(cl: Class<any>): ObjectStreamClass;
  /**
   * Returns the name of the class described by this descriptor.
   * This method returns the name of the class in the format that
   * is used by the {@link Class#getName} method.
   *
   * @return a string representing the name of the class
  */
  getName(): string;
  /**
   * Return the serialVersionUID for this class.  The serialVersionUID
   * defines a set of classes all with the same name that have evolved from a
   * common root class and agree to be serialized and deserialized using a
   * common format.  NonSerializable classes have a serialVersionUID of 0L.
   *
   * @return  the SUID of the class described by this descriptor
  */
  getSerialVersionUID(): number;
  /**
   * Return the class in the local VM that this version is mapped to.  Null
   * is returned if there is no corresponding local class.
   *
   * @return  the `Class` instance that this descriptor represents
  */
  forClass(): Class<any>;
  /**
   * Return an array of the fields of this serializable class.
   *
   * @return  an array containing an element for each persistent field of
   *          this class. Returns an array of length zero if there are no
   *          fields.
   * @since 1.2
  */
  getFields(): ObjectStreamField[];
  /**
   * Get the field of this class by name.
   *
   * @param   name the name of the data field to look for
   * @return  The ObjectStreamField object of the named field or null if
   *          there is no such named field.
  */
  getField(name: string): ObjectStreamField;
  /**
   * Return a string describing this ObjectStreamClass.
  */
  toString(): string;
}
/**
 * This abstract class is the superclass of all classes representing
 * an output stream of bytes. An output stream accepts output bytes
 * and sends them to some sink.
 * 
 * Applications that need to define a subclass of
 * `OutputStream` must always provide at least a method
 * that writes one byte of output.
 *
 * @author  Arthur van Hoff
 * @see     java.io.BufferedOutputStream
 * @see     java.io.ByteArrayOutputStream
 * @see     java.io.DataOutputStream
 * @see     java.io.FilterOutputStream
 * @see     java.io.InputStream
 * @see     java.io.OutputStream#write(int)
 * @since   1.0
*/
export class OutputStream extends Closeable {
  /**
   * Constructor for subclasses to call.
  */
  constructor();
  /**
   * Returns a new `OutputStream` which discards all bytes.  The
   * returned stream is initially open.  The stream is closed by calling
   * the `close()` method.  Subsequent calls to `close()` have
   * no effect.
   *
   *  While the stream is open, the `write(int)`, `     * write(byte[])`, and `write(byte[], int, int)` methods do nothing.
   * After the stream has been closed, these methods all throw `     * IOException`.
   *
   *  The `flush()` method does nothing.
   *
   * @return an `OutputStream` which discards all bytes
   *
   * @since 11
  */
  static nullOutputStream(): OutputStream;
  /**
   * Writes the specified byte to this output stream. The general
   * contract for `write` is that one byte is written
   * to the output stream. The byte to be written is the eight
   * low-order bits of the argument `b`. The 24
   * high-order bits of `b` are ignored.
   * 
   * Subclasses of `OutputStream` must provide an
   * implementation for this method.
   *
   * @param      b   the `byte`.
   * @throws     IOException  if an I/O error occurs. In particular,
   *             an `IOException` may be thrown if the
   *             output stream has been closed.
  */
  write(b: number): void;
  /**
   * Writes `b.length` bytes from the specified byte array
   * to this output stream. The general contract for `write(b)`
   * is that it should have exactly the same effect as the call
   * `write(b, 0, b.length)`.
   *
   * @param      b   the data.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.OutputStream#write(byte[], int, int)
  */
  write(b: number[]): void;
  /**
   * Writes `len` bytes from the specified byte array
   * starting at offset `off` to this output stream.
   * The general contract for `write(b, off, len)` is that
   * some of the bytes in the array `b` are written to the
   * output stream in order; element `b[off]` is the first
   * byte written and `b[off+len-1]` is the last byte written
   * by this operation.
   * 
   * The `write` method of `OutputStream` calls
   * the write method of one argument on each of the bytes to be
   * written out. Subclasses are encouraged to override this method and
   * provide a more efficient implementation.
   * 
   * If `b` is `null`, a
   * `NullPointerException` is thrown.
   * 
   * If `off` is negative, or `len` is negative, or
   * `off+len` is greater than the length of the array
   * `b`, then an `IndexOutOfBoundsException` is thrown.
   *
   * @param      b     the data.
   * @param      off   the start offset in the data.
   * @param      len   the number of bytes to write.
   * @throws     IOException  if an I/O error occurs. In particular,
   *             an `IOException` is thrown if the output
   *             stream is closed.
  */
  write(b: number[], off: number, len: number): void;
  /**
   * Flushes this output stream and forces any buffered output bytes
   * to be written out. The general contract of `flush` is
   * that calling it is an indication that, if any bytes previously
   * written have been buffered by the implementation of the output
   * stream, such bytes should immediately be written to their
   * intended destination.
   * 
   * If the intended destination of this stream is an abstraction provided by
   * the underlying operating system, for example a file, then flushing the
   * stream guarantees only that bytes previously written to the stream are
   * passed to the operating system for writing; it does not guarantee that
   * they are actually written to a physical device such as a disk drive.
   * 
   * The `flush` method of `OutputStream` does nothing.
   *
   * @throws     IOException  if an I/O error occurs.
  */
  flush(): void;
  /**
   * Closes this output stream and releases any system resources
   * associated with this stream. The general contract of `close`
   * is that it closes the output stream. A closed stream cannot perform
   * output operations and cannot be reopened.
   * 
   * The `close` method of `OutputStream` does nothing.
   *
   * @throws     IOException  if an I/O error occurs.
  */
  close(): void;
}
export interface OutputStream extends Closeable, Flushable {}
export class FilterWriter extends Writer {
  /**
   * Writes a single character.
   *
   * @throws     IOException  If an I/O error occurs
  */
  write(c: number): void;
  /**
   * Writes a portion of an array of characters.
   *
   * @param  cbuf  Buffer of characters to be written
   * @param  off   Offset from which to start reading characters
   * @param  len   Number of characters to be written
   *
   * @throws  IndexOutOfBoundsException
   *          If the values of the `off` and `len` parameters
   *          cause the corresponding method of the underlying `Writer`
   *          to throw an `IndexOutOfBoundsException`
   *
   * @throws  IOException  If an I/O error occurs
  */
  write(cbuf: string[], off: number, len: number): void;
  /**
   * Writes a portion of a string.
   *
   * @param  str  String to be written
   * @param  off  Offset from which to start reading characters
   * @param  len  Number of characters to be written
   *
   * @throws  IndexOutOfBoundsException
   *          If the values of the `off` and `len` parameters
   *          cause the corresponding method of the underlying `Writer`
   *          to throw an `IndexOutOfBoundsException`
   *
   * @throws  IOException  If an I/O error occurs
  */
  write(str: string, off: number, len: number): void;
  /**
   * Flushes the stream.
   *
   * @throws     IOException  If an I/O error occurs
  */
  flush(): void;
  close(): void;
  /**
   * Writes an array of characters.
   *
   * @param  cbuf
   *         Array of characters to be written
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(cbuf: string[]): void;
  /**
   * Writes a string.
   *
   * @param  str
   *         String to be written
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(str: string): void;
}
/**
 * Thrown when an instance is required to have a Serializable interface.
 * The serialization runtime or the class of the instance can throw
 * this exception. The argument should be the name of the class.
 *
 * @since   1.1
*/
export class NotSerializableException extends ObjectStreamException {
  /**
   * Constructs a NotSerializableException object with message string.
   *
   * @param classname Class of the instance being serialized/deserialized.
  */
  constructor(classname: string);
  /**
   *  Constructs a NotSerializableException object.
  */
  constructor();
}
/**
 * A `Closeable` is a source or destination of data that can be closed.
 * The close method is invoked to release resources that the object is
 * holding (such as open files).
 *
 * @since 1.5
*/
export class Closeable extends AutoCloseable {
  /**
   * Closes this stream and releases any system resources associated
   * with it. If the stream is already closed then invoking this
   * method has no effect.
   *
   *  As noted in {@link AutoCloseable#close()}, cases where the
   * close may fail require careful attention. It is strongly advised
   * to relinquish the underlying resources and to internally
   * mark the `Closeable` as closed, prior to throwing
   * the `IOException`.
   *
   * @throws IOException if an I/O error occurs
  */
  close(): void;
}
/**
 * This abstract class is the superclass of all classes representing
 * an input stream of bytes.
 *
 *  Applications that need to define a subclass of `InputStream`
 * must always provide a method that returns the next byte of input.
 *
 * @author  Arthur van Hoff
 * @see     java.io.BufferedInputStream
 * @see     java.io.ByteArrayInputStream
 * @see     java.io.DataInputStream
 * @see     java.io.FilterInputStream
 * @see     java.io.InputStream#read()
 * @see     java.io.OutputStream
 * @see     java.io.PushbackInputStream
 * @since   1.0
*/
export class InputStream extends Closeable {
  /**
   * Constructor for subclasses to call.
  */
  constructor();
  /**
   * Returns a new `InputStream` that reads no bytes. The returned
   * stream is initially open.  The stream is closed by calling the
   * `close()` method.  Subsequent calls to `close()` have no
   * effect.
   *
   *  While the stream is open, the `available()`, `read()`,
   * `read(byte[])`, `read(byte[], int, int)`,
   * `readAllBytes()`, `readNBytes(byte[], int, int)`,
   * `readNBytes(int)`, `skip(long)`, `skipNBytes(long)`,
   * and `transferTo()` methods all behave as if end of stream has been
   * reached.  After the stream has been closed, these methods all throw
   * `IOException`.
   *
   *  The `markSupported()` method returns `false`.  The
   * `mark()` method does nothing, and the `reset()` method
   * throws `IOException`.
   *
   * @return an `InputStream` which contains no bytes
   *
   * @since 11
  */
  static nullInputStream(): InputStream;
  /**
   * Reads the next byte of data from the input stream. The value byte is
   * returned as an `int` in the range `0` to
   * `255`. If no byte is available because the end of the stream
   * has been reached, the value `-1` is returned. This method
   * blocks until input data is available, the end of the stream is detected,
   * or an exception is thrown.
   *
   *  A subclass must provide an implementation of this method.
   *
   * @return     the next byte of data, or `-1` if the end of the
   *             stream is reached.
   * @throws     IOException  if an I/O error occurs.
  */
  read(): number;
  /**
   * Reads some number of bytes from the input stream and stores them into
   * the buffer array `b`. The number of bytes actually read is
   * returned as an integer.  This method blocks until input data is
   * available, end of file is detected, or an exception is thrown.
   *
   *  If the length of `b` is zero, then no bytes are read and
   * `0` is returned; otherwise, there is an attempt to read at
   * least one byte. If no byte is available because the stream is at the
   * end of the file, the value `-1` is returned; otherwise, at
   * least one byte is read and stored into `b`.
   *
   *  The first byte read is stored into element `b[0]`, the
   * next one into `b[1]`, and so on. The number of bytes read is,
   * at most, equal to the length of `b`. Let k be the
   * number of bytes actually read; these bytes will be stored in elements
   * `b[0]` through `b[`k`-1]`,
   * leaving elements `b[`k`]` through
   * `b[b.length-1]` unaffected.
   *
   *  The `read(b)` method for class `InputStream`
   * has the same effect as: ` read(b, 0, b.length) `
   *
   * @param      b   the buffer into which the data is read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
   * @throws     IOException  If the first byte cannot be read for any reason
   *             other than the end of the file, if the input stream has been
   *             closed, or if some other I/O error occurs.
   * @throws     NullPointerException  if `b` is `null`.
   * @see        java.io.InputStream#read(byte[], int, int)
  */
  read(b: number[]): number;
  /**
   * Reads up to `len` bytes of data from the input stream into
   * an array of bytes.  An attempt is made to read as many as
   * `len` bytes, but a smaller number may be read.
   * The number of bytes actually read is returned as an integer.
   *
   *  This method blocks until input data is available, end of file is
   * detected, or an exception is thrown.
   *
   *  If `len` is zero, then no bytes are read and
   * `0` is returned; otherwise, there is an attempt to read at
   * least one byte. If no byte is available because the stream is at end of
   * file, the value `-1` is returned; otherwise, at least one
   * byte is read and stored into `b`.
   *
   *  The first byte read is stored into element `b[off]`, the
   * next one into `b[off+1]`, and so on. The number of bytes read
   * is, at most, equal to `len`. Let k be the number of
   * bytes actually read; these bytes will be stored in elements
   * `b[off]` through `b[off+`k`-1]`,
   * leaving elements `b[off+`k`]` through
   * `b[off+len-1]` unaffected.
   *
   *  In every case, elements `b[0]` through
   * `b[off-1]` and elements `b[off+len]` through
   * `b[b.length-1]` are unaffected.
   *
   *  The `read(b, off, len)` method
   * for class `InputStream` simply calls the method
   * `read()` repeatedly. If the first such call results in an
   * `IOException`, that exception is returned from the call to
   * the `read(b,` `off,` `len)` method.  If
   * any subsequent call to `read()` results in a
   * `IOException`, the exception is caught and treated as if it
   * were end of file; the bytes read up to that point are stored into
   * `b` and the number of bytes read before the exception
   * occurred is returned. The default implementation of this method blocks
   * until the requested amount of input data `len` has been read,
   * end of file is detected, or an exception is thrown. Subclasses are
   * encouraged to provide a more efficient implementation of this method.
   *
   * @param      b     the buffer into which the data is read.
   * @param      off   the start offset in array `b`
   *                   at which the data is written.
   * @param      len   the maximum number of bytes to read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
   * @throws     IOException If the first byte cannot be read for any reason
   *             other than end of file, or if the input stream has been closed,
   *             or if some other I/O error occurs.
   * @throws     NullPointerException If `b` is `null`.
   * @throws     IndexOutOfBoundsException If `off` is negative,
   *             `len` is negative, or `len` is greater than
   *             `b.length - off`
   * @see        java.io.InputStream#read()
  */
  read(b: number[], off: number, len: number): number;
  /**
   * Reads all remaining bytes from the input stream. This method blocks until
   * all remaining bytes have been read and end of stream is detected, or an
   * exception is thrown. This method does not close the input stream.
   *
   *  When this stream reaches end of stream, further invocations of this
   * method will return an empty byte array.
   *
   *  Note that this method is intended for simple cases where it is
   * convenient to read all bytes into a byte array. It is not intended for
   * reading input streams with large amounts of data.
   *
   *  The behavior for the case where the input stream is asynchronously
   * closed, or the thread interrupted during the read, is highly input
   * stream specific, and therefore not specified.
   *
   *  If an I/O error occurs reading from the input stream, then it may do
   * so after some, but not all, bytes have been read. Consequently the input
   * stream may not be at end of stream and may be in an inconsistent state.
   * It is strongly recommended that the stream be promptly closed if an I/O
   * error occurs.
   *
   * @implSpec
   * This method invokes {@link #readNBytes(int)} with a length of
   * {@link Integer#MAX_VALUE}.
   *
   * @return a byte array containing the bytes read from this input stream
   * @throws IOException if an I/O error occurs
   * @throws OutOfMemoryError if an array of the required size cannot be
   *         allocated.
   *
   * @since 9
  */
  readAllBytes(): number[];
  /**
   * Reads up to a specified number of bytes from the input stream. This
   * method blocks until the requested number of bytes have been read, end
   * of stream is detected, or an exception is thrown. This method does not
   * close the input stream.
   *
   *  The length of the returned array equals the number of bytes read
   * from the stream. If `len` is zero, then no bytes are read and
   * an empty byte array is returned. Otherwise, up to `len` bytes
   * are read from the stream. Fewer than `len` bytes may be read if
   * end of stream is encountered.
   *
   *  When this stream reaches end of stream, further invocations of this
   * method will return an empty byte array.
   *
   *  Note that this method is intended for simple cases where it is
   * convenient to read the specified number of bytes into a byte array. The
   * total amount of memory allocated by this method is proportional to the
   * number of bytes read from the stream which is bounded by `len`.
   * Therefore, the method may be safely called with very large values of
   * `len` provided sufficient memory is available.
   *
   *  The behavior for the case where the input stream is asynchronously
   * closed, or the thread interrupted during the read, is highly input
   * stream specific, and therefore not specified.
   *
   *  If an I/O error occurs reading from the input stream, then it may do
   * so after some, but not all, bytes have been read. Consequently the input
   * stream may not be at end of stream and may be in an inconsistent state.
   * It is strongly recommended that the stream be promptly closed if an I/O
   * error occurs.
   *
   * @implNote
   * The number of bytes allocated to read data from this stream and return
   * the result is bounded by `2*(long)len`, inclusive.
   *
   * @param len the maximum number of bytes to read
   * @return a byte array containing the bytes read from this input stream
   * @throws IllegalArgumentException if `length` is negative
   * @throws IOException if an I/O error occurs
   * @throws OutOfMemoryError if an array of the required size cannot be
   *         allocated.
   *
   * @since 11
  */
  readNBytes(len: number): number[];
  /**
   * Reads the requested number of bytes from the input stream into the given
   * byte array. This method blocks until `len` bytes of input data have
   * been read, end of stream is detected, or an exception is thrown. The
   * number of bytes actually read, possibly zero, is returned. This method
   * does not close the input stream.
   *
   *  In the case where end of stream is reached before `len` bytes
   * have been read, then the actual number of bytes read will be returned.
   * When this stream reaches end of stream, further invocations of this
   * method will return zero.
   *
   *  If `len` is zero, then no bytes are read and `0` is
   * returned; otherwise, there is an attempt to read up to `len` bytes.
   *
   *  The first byte read is stored into element `b[off]`, the next
   * one in to `b[off+1]`, and so on. The number of bytes read is, at
   * most, equal to `len`. Let k be the number of bytes actually
   * read; these bytes will be stored in elements `b[off]` through
   * `b[off+`k`-1]`, leaving elements `b[off+`k
   * `]` through `b[off+len-1]` unaffected.
   *
   *  The behavior for the case where the input stream is asynchronously
   * closed, or the thread interrupted during the read, is highly input
   * stream specific, and therefore not specified.
   *
   *  If an I/O error occurs reading from the input stream, then it may do
   * so after some, but not all, bytes of `b` have been updated with
   * data from the input stream. Consequently the input stream and `b`
   * may be in an inconsistent state. It is strongly recommended that the
   * stream be promptly closed if an I/O error occurs.
   *
   * @param  b the byte array into which the data is read
   * @param  off the start offset in `b` at which the data is written
   * @param  len the maximum number of bytes to read
   * @return the actual number of bytes read into the buffer
   * @throws IOException if an I/O error occurs
   * @throws NullPointerException if `b` is `null`
   * @throws IndexOutOfBoundsException If `off` is negative, `len`
   *         is negative, or `len` is greater than `b.length - off`
   *
   * @since 9
  */
  readNBytes(b: number[], off: number, len: number): number;
  /**
   * Skips over and discards `n` bytes of data from this input
   * stream. The `skip` method may, for a variety of reasons, end
   * up skipping over some smaller number of bytes, possibly `0`.
   * This may result from any of a number of conditions; reaching end of file
   * before `n` bytes have been skipped is only one possibility.
   * The actual number of bytes skipped is returned. If `n` is
   * negative, the `skip` method for class `InputStream` always
   * returns 0, and no bytes are skipped. Subclasses may handle the negative
   * value differently.
   *
   *  The `skip` method implementation of this class creates a
   * byte array and then repeatedly reads into it until `n` bytes
   * have been read or the end of the stream has been reached. Subclasses are
   * encouraged to provide a more efficient implementation of this method.
   * For instance, the implementation may depend on the ability to seek.
   *
   * @param      n   the number of bytes to be skipped.
   * @return     the actual number of bytes skipped which might be zero.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.InputStream#skipNBytes(long)
  */
  skip(n: number): number;
  /**
   * Skips over and discards exactly `n` bytes of data from this input
   * stream.  If `n` is zero, then no bytes are skipped.
   * If `n` is negative, then no bytes are skipped.
   * Subclasses may handle the negative value differently.
   *
   *  This method blocks until the requested number of bytes have been
   * skipped, end of file is reached, or an exception is thrown.
   *
   *  If end of stream is reached before the stream is at the desired
   * position, then an `EOFException` is thrown.
   *
   *  If an I/O error occurs, then the input stream may be
   * in an inconsistent state. It is strongly recommended that the
   * stream be promptly closed if an I/O error occurs.
   *
   * @implNote
   * Subclasses are encouraged to provide a more efficient implementation
   * of this method.
   *
   * @implSpec
   * If `n` is zero or negative, then no bytes are skipped.
   * If `n` is positive, the default implementation of this method
   * invokes {@link #skip(long) skip()} repeatedly with its parameter equal
   * to the remaining number of bytes to skip until the requested number
   * of bytes has been skipped or an error condition occurs.  If at any
   * point the return value of `skip()` is negative or greater than the
   * remaining number of bytes to be skipped, then an `IOException` is
   * thrown.  If `skip()` ever returns zero, then {@link #read()} is
   * invoked to read a single byte, and if it returns `-1`, then an
   * `EOFException` is thrown.  Any exception thrown by `skip()`
   * or `read()` will be propagated.
   *
   * @param      n   the number of bytes to be skipped.
   * @throws     EOFException if end of stream is encountered before the
   *             stream can be positioned `n` bytes beyond its position
   *             when this method was invoked.
   * @throws     IOException  if the stream cannot be positioned properly or
   *             if an I/O error occurs.
   * @see        java.io.InputStream#skip(long)
   *
   * @since 12
  */
  skipNBytes(n: number): void;
  /**
   * Returns an estimate of the number of bytes that can be read (or skipped
   * over) from this input stream without blocking, which may be 0, or 0 when
   * end of stream is detected.  The read might be on the same thread or
   * another thread.  A single read or skip of this many bytes will not block,
   * but may read or skip fewer bytes.
   *
   *  Note that while some implementations of `InputStream` will
   * return the total number of bytes in the stream, many will not.  It is
   * never correct to use the return value of this method to allocate
   * a buffer intended to hold all data in this stream.
   *
   *  A subclass's implementation of this method may choose to throw an
   * {@link IOException} if this input stream has been closed by invoking the
   * {@link #close()} method.
   *
   *  The `available` method of `InputStream` always returns
   * `0`.
   *
   *  This method should be overridden by subclasses.
   *
   * @return     an estimate of the number of bytes that can be read (or
   *             skipped over) from this input stream without blocking or
   *             `0` when it reaches the end of the input stream.
   * @throws     IOException if an I/O error occurs.
  */
  available(): number;
  /**
   * Closes this input stream and releases any system resources associated
   * with the stream.
   *
   *  The `close` method of `InputStream` does
   * nothing.
   *
   * @throws     IOException  if an I/O error occurs.
  */
  close(): void;
  /**
   * Marks the current position in this input stream. A subsequent call to
   * the `reset` method repositions this stream at the last marked
   * position so that subsequent reads re-read the same bytes.
   *
   *  The `readlimit` arguments tells this input stream to
   * allow that many bytes to be read before the mark position gets
   * invalidated.
   *
   *  The general contract of `mark` is that, if the method
   * `markSupported` returns `true`, the stream somehow
   * remembers all the bytes read after the call to `mark` and
   * stands ready to supply those same bytes again if and whenever the method
   * `reset` is called.  However, the stream is not required to
   * remember any data at all if more than `readlimit` bytes are
   * read from the stream before `reset` is called.
   *
   *  Marking a closed stream should not have any effect on the stream.
   *
   *  The `mark` method of `InputStream` does
   * nothing.
   *
   * @param   readlimit   the maximum limit of bytes that can be read before
   *                      the mark position becomes invalid.
   * @see     java.io.InputStream#reset()
  */
  mark(readlimit: number): void;
  /**
   * Repositions this stream to the position at the time the
   * `mark` method was last called on this input stream.
   *
   *  The general contract of `reset` is:
   *
   * 
   *  If the method `markSupported` returns
   * `true`, then:
   *
   *      If the method `mark` has not been called since
   *     the stream was created, or the number of bytes read from the stream
   *     since `mark` was last called is larger than the argument
   *     to `mark` at that last call, then an
   *     `IOException` might be thrown.
   *
   *      If such an `IOException` is not thrown, then the
   *     stream is reset to a state such that all the bytes read since the
   *     most recent call to `mark` (or since the start of the
   *     file, if `mark` has not been called) will be resupplied
   *     to subsequent callers of the `read` method, followed by
   *     any bytes that otherwise would have been the next input data as of
   *     the time of the call to `reset`. 
   *
   *  If the method `markSupported` returns
   * `false`, then:
   *
   *      The call to `reset` may throw an
   *     `IOException`.
   *
   *      If an `IOException` is not thrown, then the stream
   *     is reset to a fixed state that depends on the particular type of the
   *     input stream and how it was created. The bytes that will be supplied
   *     to subsequent callers of the `read` method depend on the
   *     particular type of the input stream. 
   *
   * The method `reset` for class `InputStream`
   * does nothing except throw an `IOException`.
   *
   * @throws  IOException  if this stream has not been marked or if the
   *          mark has been invalidated.
   * @see     java.io.InputStream#mark(int)
   * @see     java.io.IOException
  */
  reset(): void;
  /**
   * Tests if this input stream supports the `mark` and
   * `reset` methods. Whether or not `mark` and
   * `reset` are supported is an invariant property of a
   * particular input stream instance. The `markSupported` method
   * of `InputStream` returns `false`.
   *
   * @return  `true` if this stream instance supports the mark
   *          and reset methods; `false` otherwise.
   * @see     java.io.InputStream#mark(int)
   * @see     java.io.InputStream#reset()
  */
  markSupported(): boolean;
  /**
   * Reads all bytes from this input stream and writes the bytes to the
   * given output stream in the order that they are read. On return, this
   * input stream will be at end of stream. This method does not close either
   * stream.
   * 
   * This method may block indefinitely reading from the input stream, or
   * writing to the output stream. The behavior for the case where the input
   * and/or output stream is asynchronously closed, or the thread
   * interrupted during the transfer, is highly input and output stream
   * specific, and therefore not specified.
   * 
   * If an I/O error occurs reading from the input stream or writing to the
   * output stream, then it may do so after some bytes have been read or
   * written. Consequently the input stream may not be at end of stream and
   * one, or both, streams may be in an inconsistent state. It is strongly
   * recommended that both streams be promptly closed if an I/O error occurs.
   *
   * @param  out the output stream, non-null
   * @return the number of bytes transferred
   * @throws IOException if an I/O error occurs when reading or writing
   * @throws NullPointerException if `out` is `null`
   *
   * @since 9
  */
  transferTo(out: OutputStream): number;
}
/**
 * A `PushbackInputStream` adds
 * functionality to another input stream, namely
 * the  ability to "push back" or "unread" bytes,
 * by storing pushed-back bytes in an internal buffer.
 * This is useful in situations where
 * it is convenient for a fragment of code
 * to read an indefinite number of data bytes
 * that  are delimited by a particular byte
 * value; after reading the terminating byte,
 * the  code fragment can "unread" it, so that
 * the next read operation on the input stream
 * will reread the byte that was pushed back.
 * For example, bytes representing the  characters
 * constituting an identifier might be terminated
 * by a byte representing an  operator character;
 * a method whose job is to read just an identifier
 * can read until it  sees the operator and
 * then push the operator back to be re-read.
 *
 * @author  David Connelly
 * @author  Jonathan Payne
 * @since   1.0
*/
export class PushbackInputStream extends FilterInputStream {
  /**
   * Creates a `PushbackInputStream`
   * with a pushback buffer of the specified `size`,
   * and saves its argument, the input stream
   * `in`, for later use. Initially,
   * the pushback buffer is empty.
   *
   * @param  in    the input stream from which bytes will be read.
   * @param  size  the size of the pushback buffer.
   * @throws IllegalArgumentException if `size <= 0`
   * @since  1.1
  */
  constructor(in_: InputStream, size: number);
  /**
   * Creates a `PushbackInputStream`
   * with a 1-byte pushback buffer, and saves its argument, the input stream
   * `in`, for later use. Initially,
   * the pushback buffer is empty.
   *
   * @param   in   the input stream from which bytes will be read.
  */
  constructor(in_: InputStream);
  /**
   * Reads the next byte of data from this input stream. The value
   * byte is returned as an `int` in the range
   * `0` to `255`. If no byte is available
   * because the end of the stream has been reached, the value
   * `-1` is returned. This method blocks until input data
   * is available, the end of the stream is detected, or an exception
   * is thrown.
   *
   *  This method returns the most recently pushed-back byte, if there is
   * one, and otherwise calls the `read` method of its underlying
   * input stream and returns whatever value that method returns.
   *
   * @return     the next byte of data, or `-1` if the end of the
   *             stream has been reached.
   * @throws     IOException  if this input stream has been closed by
   *             invoking its {@link #close()} method,
   *             or an I/O error occurs.
   * @see        java.io.InputStream#read()
  */
  read(): number;
  /**
   * Reads up to `len` bytes of data from this input stream into
   * an array of bytes.  This method first reads any pushed-back bytes; after
   * that, if fewer than `len` bytes have been read then it
   * reads from the underlying input stream. If `len` is not zero, the method
   * blocks until at least 1 byte of input is available; otherwise, no
   * bytes are read and `0` is returned.
   *
   * @param      b     the buffer into which the data is read.
   * @param      off   the start offset in the destination array `b`
   * @param      len   the maximum number of bytes read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
   * @throws     NullPointerException If `b` is `null`.
   * @throws     IndexOutOfBoundsException If `off` is negative,
   *             `len` is negative, or `len` is greater than
   *             `b.length - off`
   * @throws     IOException  if this input stream has been closed by
   *             invoking its {@link #close()} method,
   *             or an I/O error occurs.
   * @see        java.io.InputStream#read(byte[], int, int)
  */
  read(b: number[], off: number, len: number): number;
  /**
   * Pushes back a byte by copying it to the front of the pushback buffer.
   * After this method returns, the next byte to be read will have the value
   * `(byte)b`.
   *
   * @param      b   the `int` value whose low-order
   *                  byte is to be pushed back.
   * @throws    IOException If there is not enough room in the pushback
   *            buffer for the byte, or this input stream has been closed by
   *            invoking its {@link #close()} method.
  */
  unread(b: number): void;
  /**
   * Pushes back a portion of an array of bytes by copying it to the front
   * of the pushback buffer.  After this method returns, the next byte to be
   * read will have the value `b[off]`, the byte after that will
   * have the value `b[off+1]`, and so forth.
   *
   * @param     b the byte array to push back.
   * @param     off the start offset of the data.
   * @param     len the number of bytes to push back.
   * @throws    NullPointerException If `b` is `null`.
   * @throws    IOException If there is not enough room in the pushback
   *            buffer for the specified number of bytes,
   *            or this input stream has been closed by
   *            invoking its {@link #close()} method.
   * @since     1.1
  */
  unread(b: number[], off: number, len: number): void;
  /**
   * Pushes back an array of bytes by copying it to the front of the
   * pushback buffer.  After this method returns, the next byte to be read
   * will have the value `b[0]`, the byte after that will have the
   * value `b[1]`, and so forth.
   *
   * @param     b the byte array to push back
   * @throws    NullPointerException If `b` is `null`.
   * @throws    IOException If there is not enough room in the pushback
   *            buffer for the specified number of bytes,
   *            or this input stream has been closed by
   *            invoking its {@link #close()} method.
   * @since     1.1
  */
  unread(b: number[]): void;
  /**
   * Returns an estimate of the number of bytes that can be read (or
   * skipped over) from this input stream without blocking by the next
   * invocation of a method for this input stream. The next invocation might be
   * the same thread or another thread.  A single read or skip of this
   * many bytes will not block, but may read or skip fewer bytes.
   *
   *  The method returns the sum of the number of bytes that have been
   * pushed back and the value returned by {@link
   * java.io.FilterInputStream#available available}.
   *
   * @return     the number of bytes that can be read (or skipped over) from
   *             the input stream without blocking.
   * @throws     IOException  if this input stream has been closed by
   *             invoking its {@link #close()} method,
   *             or an I/O error occurs.
   * @see        java.io.FilterInputStream#in
   * @see        java.io.InputStream#available()
  */
  available(): number;
  /**
   * Skips over and discards `n` bytes of data from this
   * input stream. The `skip` method may, for a variety of
   * reasons, end up skipping over some smaller number of bytes,
   * possibly zero.  If `n` is negative, no bytes are skipped.
   *
   *  The `skip` method of `PushbackInputStream`
   * first skips over the bytes in the pushback buffer, if any.  It then
   * calls the `skip` method of the underlying input stream if
   * more bytes need to be skipped.  The actual number of bytes skipped
   * is returned.
   *
   * @param      n  {@inheritDoc}
   * @return     {@inheritDoc}
   * @throws     IOException  if the stream has been closed by
   *             invoking its {@link #close()} method,
   *             `in.skip(n)` throws an IOException,
   *             or an I/O error occurs.
   * @see        java.io.FilterInputStream#in
   * @see        java.io.InputStream#skip(long n)
   * @since      1.2
  */
  skip(n: number): number;
  /**
   * Tests if this input stream supports the `mark` and
   * `reset` methods, which it does not.
   *
   * @return   `false`, since this class does not support the
   *           `mark` and `reset` methods.
   * @see      java.io.InputStream#mark(int)
   * @see      java.io.InputStream#reset()
  */
  markSupported(): boolean;
  /**
   * Marks the current position in this input stream.
   *
   *  The `mark` method of `PushbackInputStream`
   * does nothing.
   *
   * @param   readlimit   the maximum limit of bytes that can be read before
   *                      the mark position becomes invalid.
   * @see     java.io.InputStream#reset()
  */
  mark(readlimit: number): void;
  /**
   * Repositions this stream to the position at the time the
   * `mark` method was last called on this input stream.
   *
   *  The method `reset` for class
   * `PushbackInputStream` does nothing except throw an
   * `IOException`.
   *
   * @throws  IOException  if this method is invoked.
   * @see     java.io.InputStream#mark(int)
   * @see     java.io.IOException
  */
  reset(): void;
  /**
   * Closes this input stream and releases any system resources
   * associated with the stream.
   * Once the stream has been closed, further read(), unread(),
   * available(), reset(), or skip() invocations will throw an IOException.
   * Closing a previously closed stream has no effect.
   *
   * @throws     IOException  if an I/O error occurs.
  */
  close(): void;
  /**
   * Reads up to `b.length` bytes of data from this
   * input stream into an array of bytes. This method blocks until some
   * input is available.
   * 
   * This method simply performs the call
   * `read(b, 0, b.length)` and returns
   * the  result. It is important that it does
   * not do `in.read(b)` instead;
   * certain subclasses of  `FilterInputStream`
   * depend on the implementation strategy actually
   * used.
   *
   * @param      b   the buffer into which the data is read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterInputStream#read(byte[], int, int)
  */
  read(b: number[]): number;
}
/**
 * Indicates that one or more deserialized objects failed validation
 * tests.  The argument should provide the reason for the failure.
 *
 * @see ObjectInputValidation
 * @since 1.1
 *
 * @since   1.1
*/
export class InvalidObjectException extends ObjectStreamException {
  /**
   * Constructs an `InvalidObjectException`.
   * @param reason Detailed message explaining the reason for the failure.
   *
   * @see ObjectInputValidation
  */
  constructor(reason: string);
}
/**
 * A description of a Serializable field from a Serializable class.  An array
 * of ObjectStreamFields is used to declare the Serializable fields of a class.
 *
 * @author      Mike Warres
 * @author      Roger Riggs
 * @see ObjectStreamClass
 * @since 1.2
*/
export class ObjectStreamField extends Comparable<any> {
  /**
   * Create a Serializable field with the specified type.  This field should
   * be documented with a `serialField` tag.
   *
   * @param   name the name of the serializable field
   * @param   type the `Class` object of the serializable field
  */
  constructor(name: string, type: Class<any>);
  /**
   * Creates an ObjectStreamField representing a serializable field with the
   * given name and type.  If unshared is false, values of the represented
   * field are serialized and deserialized in the default manner--if the
   * field is non-primitive, object values are serialized and deserialized as
   * if they had been written and read by calls to writeObject and
   * readObject.  If unshared is true, values of the represented field are
   * serialized and deserialized as if they had been written and read by
   * calls to writeUnshared and readUnshared.
   *
   * @param   name field name
   * @param   type field type
   * @param   unshared if false, write/read field values in the same manner
   *          as writeObject/readObject; if true, write/read in the same
   *          manner as writeUnshared/readUnshared
   * @since   1.4
  */
  constructor(name: string, type: Class<any>, unshared: boolean);
  /**
   * Get the name of this field.
   *
   * @return  a `String` representing the name of the serializable
   *          field
  */
  getName(): string;
  /**
   * Get the type of the field.  If the type is non-primitive and this
   * `ObjectStreamField` was obtained from a deserialized {@link
   * ObjectStreamClass} instance, then `Object.class` is returned.
   * Otherwise, the `Class` object for the type of the field is
   * returned.
   *
   * @return  a `Class` object representing the type of the
   *          serializable field
  */
  getType(): Class<any>;
  getTypeCode(): string;
  getTypeString(): string;
  getOffset(): number;
  isPrimitive(): boolean;
  /**
   * Returns boolean value indicating whether or not the serializable field
   * represented by this ObjectStreamField instance is unshared.
   *
   * @return `true` if this field is unshared
   *
   * @since 1.4
  */
  isUnshared(): boolean;
  compareTo(obj: any): number;
  /**
   * Return a string that describes this field.
  */
  toString(): string;
  /**
   * Compares this object with the specified object for order.  Returns a
   * negative integer, zero, or a positive integer as this object is less
   * than, equal to, or greater than the specified object.
   *
   * The implementor must ensure
   * `sgn(x.compareTo(y)) == -sgn(y.compareTo(x))`
   * for all `x` and `y`.  (This
   * implies that `x.compareTo(y)` must throw an exception iff
   * `y.compareTo(x)` throws an exception.)
   *
   * The implementor must also ensure that the relation is transitive:
   * `(x.compareTo(y) > 0 && y.compareTo(z) > 0)` implies
   * `x.compareTo(z) > 0`.
   *
   * Finally, the implementor must ensure that `x.compareTo(y)==0`
   * implies that `sgn(x.compareTo(z)) == sgn(y.compareTo(z))`, for
   * all `z`.
   *
   * It is strongly recommended, but not strictly required that
   * `(x.compareTo(y)==0) == (x.equals(y))`.  Generally speaking, any
   * class that implements the `Comparable` interface and violates
   * this condition should clearly indicate this fact.  The recommended
   * language is "Note: this class has a natural ordering that is
   * inconsistent with equals."
   *
   * In the foregoing description, the notation
   * `sgn(`expression`)` designates the mathematical
   * signum function, which is defined to return one of `-1`,
   * `0`, or `1` according to whether the value of
   * expression is negative, zero, or positive, respectively.
   *
   * @param   o the object to be compared.
   * @return  a negative integer, zero, or a positive integer as this object
   *          is less than, equal to, or greater than the specified object.
   *
   * @throws NullPointerException if the specified object is null
   * @throws ClassCastException if the specified object's type prevents it
   *         from being compared to this object.
  */
  compareTo(o: T): number;
}
/**
 * Signals that one of the ObjectStreamExceptions was thrown during a
 * write operation.  Thrown during a read operation when one of the
 * ObjectStreamExceptions was thrown during a write operation.  The
 * exception that terminated the write can be found in the detail
 * field. The stream is reset to it's initial state and all references
 * to objects already deserialized are discarded.
 *
 * As of release 1.4, this exception has been retrofitted to conform to
 * the general purpose exception-chaining mechanism.  The "exception causing
 * the abort" that is provided at construction time and
 * accessed via the public {@link #detail} field is now known as the
 * cause, and may be accessed via the {@link Throwable#getCause()}
 * method, as well as the aforementioned "legacy field."
 *
 * @since   1.1
*/
export class WriteAbortedException extends ObjectStreamException {
  /**
   * Exception that was caught while writing the ObjectStream.
   *
   * This field predates the general-purpose exception chaining facility.
   * The {@link Throwable#getCause()} method is now the preferred means of
   * obtaining this information.
   *
   * @serial
  */
  detail: Exception;
  /**
   * Constructs a WriteAbortedException with a string describing
   * the exception and the exception causing the abort.
   * @param s   String describing the exception.
   * @param ex  Exception causing the abort.
  */
  constructor(s: string, ex: Exception);
  /**
   * Produce the message and include the message from the nested
   * exception, if there is one.
  */
  getMessage(): string;
  /**
   * Returns the exception that terminated the operation (the cause).
   *
   * @return  the exception that terminated the operation (the cause),
   *          which may be null.
   * @since   1.4
  */
  getCause(): Throwable;
}
export class PipedReader extends Reader {
  /**
   * Creates a `PipedReader` so
   * that it is connected to the piped writer
   * `src`. Data written to `src`
   * will then be available as input from this stream.
   *
   * @param      src   the stream to connect to.
   * @throws     IOException  if an I/O error occurs.
  */
  constructor(src: PipedWriter);
  /**
   * Creates a `PipedReader` so that it is connected
   * to the piped writer `src` and uses the specified
   * pipe size for the pipe's buffer. Data written to `src`
   * will then be  available as input from this stream.
   *
   * @param      src       the stream to connect to.
   * @param      pipeSize  the size of the pipe's buffer.
   * @throws     IOException  if an I/O error occurs.
   * @throws     IllegalArgumentException if `pipeSize <= 0`.
   * @since      1.6
  */
  constructor(src: PipedWriter, pipeSize: number);
  /**
   * Creates a `PipedReader` so
   * that it is not yet {@linkplain #connect(java.io.PipedWriter)
   * connected}. It must be {@linkplain java.io.PipedWriter#connect(
   * java.io.PipedReader) connected} to a `PipedWriter`
   * before being used.
  */
  constructor();
  /**
   * Creates a `PipedReader` so that it is not yet
   * {@link #connect(java.io.PipedWriter) connected} and uses
   * the specified pipe size for the pipe's buffer.
   * It must be  {@linkplain java.io.PipedWriter#connect(
   * java.io.PipedReader) connected} to a `PipedWriter`
   * before being used.
   *
   * @param   pipeSize the size of the pipe's buffer.
   * @throws  IllegalArgumentException if `pipeSize <= 0`.
   * @since   1.6
  */
  constructor(pipeSize: number);
  /**
   * Causes this piped reader to be connected
   * to the piped  writer `src`.
   * If this object is already connected to some
   * other piped writer, an `IOException`
   * is thrown.
   * 
   * If `src` is an
   * unconnected piped writer and `snk`
   * is an unconnected piped reader, they
   * may be connected by either the call:
   *
   * `snk.connect(src)` 
   * 
   * or the call:
   *
   * `src.connect(snk)` 
   * 
   * The two calls have the same effect.
   *
   * @param      src   The piped writer to connect to.
   * @throws     IOException  if an I/O error occurs.
  */
  connect(src: PipedWriter): void;
  /**
   * Reads the next character of data from this piped stream.
   * If no character is available because the end of the stream
   * has been reached, the value `-1` is returned.
   * This method blocks until input data is available, the end of
   * the stream is detected, or an exception is thrown.
   *
   * @return  the next character of data, or `-1` if the end of the
   *          stream is reached.
   * @throws  IOException  if the pipe is
   *           `broken`,
   *          {@link #connect(java.io.PipedWriter) unconnected}, closed,
   *          or an I/O error occurs.
  */
  read(): number;
  /**
   * Reads up to `len` characters of data from this piped
   * stream into an array of characters. Less than `len` characters
   * will be read if the end of the data stream is reached or if
   * `len` exceeds the pipe's buffer size. This method
   * blocks until at least one character of input is available.
   *
   * @param      cbuf     the buffer into which the data is read.
   * @param      off   the start offset of the data.
   * @param      len   the maximum number of characters read.
   * @return     the total number of characters read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
   * @throws     IOException  if the pipe is
   *              `broken`,
   *             {@link #connect(java.io.PipedWriter) unconnected}, closed,
   *             or an I/O error occurs.
   * @throws     IndexOutOfBoundsException {@inheritDoc}
  */
  read(cbuf: string[], off: number, len: number): number;
  /**
   * Tell whether this stream is ready to be read.  A piped character
   * stream is ready if the circular buffer is not empty.
   *
   * @throws     IOException  if the pipe is
   *              `broken`,
   *             {@link #connect(java.io.PipedWriter) unconnected}, or closed.
  */
  ready(): boolean;
  /**
   * Closes this piped stream and releases any system resources
   * associated with the stream.
   *
   * @throws     IOException  if an I/O error occurs.
  */
  close(): void;
  /**
   * Attempts to read characters into the specified character buffer.
   * The buffer is used as a repository of characters as-is: the only
   * changes made are the results of a put operation. No flipping or
   * rewinding of the buffer is performed.
   *
   * @param target the buffer to read characters into
   * @return The number of characters added to the buffer, or
   *         -1 if this source of characters is at its end
   * @throws IOException if an I/O error occurs
   * @throws NullPointerException if target is null
   * @throws java.nio.ReadOnlyBufferException if target is a read only buffer
   * @since 1.5
  */
  read(target: CharBuffer): number;
  /**
   * Reads characters into an array.  This method will block until some input
   * is available, an I/O error occurs, or the end of the stream is reached.
   *
   * @param       cbuf  Destination buffer
   *
   * @return      The number of characters read, or -1
   *              if the end of the stream
   *              has been reached
   *
   * @throws      IOException  If an I/O error occurs
  */
  read(cbuf: string[]): number;
}
/**
 * Instances of classes that implement this interface are used to
 * filter filenames. These instances are used to filter directory
 * listings in the `list` method of class
 * `File`, and by the Abstract Window Toolkit's file
 * dialog component.
 *
 * @author  Arthur van Hoff
 * @author  Jonathan Payne
 * @see     java.awt.FileDialog#setFilenameFilter(java.io.FilenameFilter)
 * @see     java.io.File
 * @see     java.io.File#list(java.io.FilenameFilter)
 * @since   1.0
*/
export class FilenameFilter {
  /**
   * Tests if a specified file should be included in a file list.
   *
   * @param   dir    the directory in which the file was found.
   * @param   name   the name of the file.
   * @return  `true` if and only if the name should be
   * included in the file list; `false` otherwise.
  */
  accept(dir: File, name: string): boolean;
}
/**
 * Signals that an I/O exception of some sort has occurred. This
 * class is the general class of exceptions produced by failed or
 * interrupted I/O operations.
 *
 * @see     java.io.InputStream
 * @see     java.io.OutputStream
 * @since   1.0
*/
export class IOException extends Exception {
  /**
   * Constructs an `IOException` with `null`
   * as its error detail message.
  */
  constructor();
  /**
   * Constructs an `IOException` with the specified detail message.
   *
   * @param message
   *        The detail message (which is saved for later retrieval
   *        by the {@link #getMessage()} method)
  */
  constructor(message: string);
  /**
   * Constructs an `IOException` with the specified detail message
   * and cause.
   *
   *  Note that the detail message associated with `cause` is
   * not automatically incorporated into this exception's detail
   * message.
   *
   * @param message
   *        The detail message (which is saved for later retrieval
   *        by the {@link #getMessage()} method)
   *
   * @param cause
   *        The cause (which is saved for later retrieval by the
   *        {@link #getCause()} method).  (A null value is permitted,
   *        and indicates that the cause is nonexistent or unknown.)
   *
   * @since 1.6
  */
  constructor(message: string, cause: Throwable);
  /**
   * Constructs an `IOException` with the specified cause and a
   * detail message of `(cause==null ? null : cause.toString())`
   * (which typically contains the class and detail message of `cause`).
   * This constructor is useful for IO exceptions that are little more
   * than wrappers for other throwables.
   *
   * @param cause
   *        The cause (which is saved for later retrieval by the
   *        {@link #getCause()} method).  (A null value is permitted,
   *        and indicates that the cause is nonexistent or unknown.)
   *
   * @since 1.6
  */
  constructor(cause: Throwable);
}
export class InputStreamReader extends Reader {
  /**
   * Creates an InputStreamReader that uses the default charset.
   *
   * @param  in   An InputStream
  */
  constructor(in_: InputStream);
  /**
   * Creates an InputStreamReader that uses the named charset.
   *
   * @param  in
   *         An InputStream
   *
   * @param  charsetName
   *         The name of a supported
   *         {@link java.nio.charset.Charset charset}
   *
   * @throws     UnsupportedEncodingException
   *             If the named charset is not supported
  */
  constructor(in_: InputStream, charsetName: string);
  /**
   * Creates an InputStreamReader that uses the given charset.
   *
   * @param  in       An InputStream
   * @param  cs       A charset
   *
   * @since 1.4
  */
  constructor(in_: InputStream, cs: Charset);
  /**
   * Creates an InputStreamReader that uses the given charset decoder.
   *
   * @param  in       An InputStream
   * @param  dec      A charset decoder
   *
   * @since 1.4
  */
  constructor(in_: InputStream, dec: CharsetDecoder);
  /**
   * Returns the name of the character encoding being used by this stream.
   *
   *  If the encoding has an historical name then that name is returned;
   * otherwise the encoding's canonical name is returned.
   *
   *  If this instance was created with the {@link
   * #InputStreamReader(InputStream, String)} constructor then the returned
   * name, being unique for the encoding, may differ from the name passed to
   * the constructor. This method will return `null` if the
   * stream has been closed.
   * 
   * @return The historical name of this encoding, or
   *         `null` if the stream has been closed
   *
   * @see java.nio.charset.Charset
   *
   * @revised 1.4
  */
  getEncoding(): string;
  /**
   * Reads a single character.
   *
   * @return The character read, or -1 if the end of the stream has been
   *         reached
   *
   * @throws     IOException  If an I/O error occurs
  */
  read(): number;
  /**
   * Reads characters into a portion of an array.
   *
   * @param      cbuf     Destination buffer
   * @param      offset   Offset at which to start storing characters
   * @param      length   Maximum number of characters to read
   *
   * @return     The number of characters read, or -1 if the end of the
   *             stream has been reached
   *
   * @throws     IOException  If an I/O error occurs
   * @throws     IndexOutOfBoundsException {@inheritDoc}
  */
  read(cbuf: string[], offset: number, length: number): number;
  /**
   * Tells whether this stream is ready to be read.  An InputStreamReader is
   * ready if its input buffer is not empty, or if bytes are available to be
   * read from the underlying byte stream.
   *
   * @throws     IOException  If an I/O error occurs
  */
  ready(): boolean;
  close(): void;
  /**
   * Attempts to read characters into the specified character buffer.
   * The buffer is used as a repository of characters as-is: the only
   * changes made are the results of a put operation. No flipping or
   * rewinding of the buffer is performed.
   *
   * @param target the buffer to read characters into
   * @return The number of characters added to the buffer, or
   *         -1 if this source of characters is at its end
   * @throws IOException if an I/O error occurs
   * @throws NullPointerException if target is null
   * @throws java.nio.ReadOnlyBufferException if target is a read only buffer
   * @since 1.5
  */
  read(target: CharBuffer): number;
  /**
   * Reads characters into an array.  This method will block until some input
   * is available, an I/O error occurs, or the end of the stream is reached.
   *
   * @param       cbuf  Destination buffer
   *
   * @return      The number of characters read, or -1
   *              if the end of the stream
   *              has been reached
   *
   * @throws      IOException  If an I/O error occurs
  */
  read(cbuf: string[]): number;
}
/**
 * An ObjectInputStream deserializes primitive data and objects previously
 * written using an ObjectOutputStream.
 *
 * Warning: Deserialization of untrusted data is inherently dangerous
 * and should be avoided. Untrusted data should be carefully validated according to the
 * "Serialization and Deserialization" section of the
 * {@extLink secure_coding_guidelines_javase Secure Coding Guidelines for Java SE}.
 * {@extLink serialization_filter_guide Serialization Filtering} describes best
 * practices for defensive use of serial filters.
 * 
 *
 * ObjectOutputStream and ObjectInputStream can provide an application with
 * persistent storage for graphs of objects when used with a FileOutputStream
 * and FileInputStream respectively.  ObjectInputStream is used to recover
 * those objects previously serialized. Other uses include passing objects
 * between hosts using a socket stream or for marshaling and unmarshaling
 * arguments and parameters in a remote communication system.
 *
 * ObjectInputStream ensures that the types of all objects in the graph
 * created from the stream match the classes present in the Java Virtual
 * Machine.  Classes are loaded as required using the standard mechanisms.
 *
 * Only objects that support the java.io.Serializable or
 * java.io.Externalizable interface can be read from streams.
 *
 * The method `readObject` is used to read an object from the
 * stream.  Java's safe casting should be used to get the desired type.  In
 * Java, strings and arrays are objects and are treated as objects during
 * serialization. When read they need to be cast to the expected type.
 *
 * Primitive data types can be read from the stream using the appropriate
 * method on DataInput.
 *
 * The default deserialization mechanism for objects restores the contents
 * of each field to the value and type it had when it was written.  Fields
 * declared as transient or static are ignored by the deserialization process.
 * References to other objects cause those objects to be read from the stream
 * as necessary.  Graphs of objects are restored correctly using a reference
 * sharing mechanism.  New objects are always allocated when deserializing,
 * which prevents existing objects from being overwritten.
 *
 * Reading an object is analogous to running the constructors of a new
 * object.  Memory is allocated for the object and initialized to zero (NULL).
 * No-arg constructors are invoked for the non-serializable classes and then
 * the fields of the serializable classes are restored from the stream starting
 * with the serializable class closest to java.lang.object and finishing with
 * the object's most specific class.
 *
 * For example to read from a stream as written by the example in
 * ObjectOutputStream:
 * 
 *  *      FileInputStream fis = new FileInputStream("t.tmp");
 *      ObjectInputStream ois = new ObjectInputStream(fis);
 *
 *      int i = ois.readInt();
 *      String today = (String) ois.readObject();
 *      Date date = (Date) ois.readObject();
 *
 *      ois.close();
 * 
 *
 * Classes control how they are serialized by implementing either the
 * java.io.Serializable or java.io.Externalizable interfaces.
 *
 * Implementing the Serializable interface allows object serialization to
 * save and restore the entire state of the object and it allows classes to
 * evolve between the time the stream is written and the time it is read.  It
 * automatically traverses references between objects, saving and restoring
 * entire graphs.
 *
 * Serializable classes that require special handling during the
 * serialization and deserialization process should implement the following
 * methods:
 *
 *  * private void writeObject(java.io.ObjectOutputStream stream)
 *     throws IOException;
 * private void readObject(java.io.ObjectInputStream stream)
 *     throws IOException, ClassNotFoundException;
 * private void readObjectNoData()
 *     throws ObjectStreamException;
 * 
 *
 * The readObject method is responsible for reading and restoring the state
 * of the object for its particular class using data written to the stream by
 * the corresponding writeObject method.  The method does not need to concern
 * itself with the state belonging to its superclasses or subclasses.  State is
 * restored by reading data from the ObjectInputStream for the individual
 * fields and making assignments to the appropriate fields of the object.
 * Reading primitive data types is supported by DataInput.
 *
 * Any attempt to read object data which exceeds the boundaries of the
 * custom data written by the corresponding writeObject method will cause an
 * OptionalDataException to be thrown with an eof field value of true.
 * Non-object reads which exceed the end of the allotted data will reflect the
 * end of data in the same way that they would indicate the end of the stream:
 * bytewise reads will return -1 as the byte read or number of bytes read, and
 * primitive reads will throw EOFExceptions.  If there is no corresponding
 * writeObject method, then the end of default serialized data marks the end of
 * the allotted data.
 *
 * Primitive and object read calls issued from within a readExternal method
 * behave in the same manner--if the stream is already positioned at the end of
 * data written by the corresponding writeExternal method, object reads will
 * throw OptionalDataExceptions with eof set to true, bytewise reads will
 * return -1, and primitive reads will throw EOFExceptions.  Note that this
 * behavior does not hold for streams written with the old
 * `ObjectStreamConstants.PROTOCOL_VERSION_1` protocol, in which the
 * end of data written by writeExternal methods is not demarcated, and hence
 * cannot be detected.
 *
 * The readObjectNoData method is responsible for initializing the state of
 * the object for its particular class in the event that the serialization
 * stream does not list the given class as a superclass of the object being
 * deserialized.  This may occur in cases where the receiving party uses a
 * different version of the deserialized instance's class than the sending
 * party, and the receiver's version extends classes that are not extended by
 * the sender's version.  This may also occur if the serialization stream has
 * been tampered; hence, readObjectNoData is useful for initializing
 * deserialized objects properly despite a "hostile" or incomplete source
 * stream.
 *
 * Serialization does not read or assign values to the fields of any object
 * that does not implement the java.io.Serializable interface.  Subclasses of
 * Objects that are not serializable can be serializable. In this case the
 * non-serializable class must have a no-arg constructor to allow its fields to
 * be initialized.  In this case it is the responsibility of the subclass to
 * save and restore the state of the non-serializable class. It is frequently
 * the case that the fields of that class are accessible (public, package, or
 * protected) or that there are get and set methods that can be used to restore
 * the state.
 *
 * The contents of the stream can be filtered during deserialization.
 * If a {@linkplain #setObjectInputFilter(ObjectInputFilter) filter is set}
 * on an ObjectInputStream, the {@link ObjectInputFilter} can check that
 * the classes, array lengths, number of references in the stream, depth, and
 * number of bytes consumed from the input stream are allowed and
 * if not, can terminate deserialization.
 * A {@linkplain ObjectInputFilter.Config#setSerialFilter(ObjectInputFilter) system-wide filter}
 * can be configured that is applied to each `ObjectInputStream` unless replaced
 * using {@link #setObjectInputFilter(ObjectInputFilter) setObjectInputFilter}.
 *
 * Any exception that occurs while deserializing an object will be caught by
 * the ObjectInputStream and abort the reading process.
 *
 * Implementing the Externalizable interface allows the object to assume
 * complete control over the contents and format of the object's serialized
 * form.  The methods of the Externalizable interface, writeExternal and
 * readExternal, are called to save and restore the objects state.  When
 * implemented by a class they can write and read their own state using all of
 * the methods of ObjectOutput and ObjectInput.  It is the responsibility of
 * the objects to handle any versioning that occurs.
 *
 * Enum constants are deserialized differently than ordinary serializable or
 * externalizable objects.  The serialized form of an enum constant consists
 * solely of its name; field values of the constant are not transmitted.  To
 * deserialize an enum constant, ObjectInputStream reads the constant name from
 * the stream; the deserialized constant is then obtained by calling the static
 * method `Enum.valueOf(Class, String)` with the enum constant's
 * base type and the received constant name as arguments.  Like other
 * serializable or externalizable objects, enum constants can function as the
 * targets of back references appearing subsequently in the serialization
 * stream.  The process by which enum constants are deserialized cannot be
 * customized: any class-specific readObject, readObjectNoData, and readResolve
 * methods defined by enum types are ignored during deserialization.
 * Similarly, any serialPersistentFields or serialVersionUID field declarations
 * are also ignored--all enum types have a fixed serialVersionUID of 0L.
 *
 * 
 * Records are serialized differently than ordinary serializable or externalizable
 * objects. During deserialization the record's canonical constructor is invoked
 * to construct the record object. Certain serialization-related methods, such
 * as readObject and writeObject, are ignored for serializable records. See
 * 
 * Java Object Serialization Specification, Section 1.13,
 * "Serialization of Records" for additional information.
 *
 * @author      Mike Warres
 * @author      Roger Riggs
 * @see java.io.DataInput
 * @see java.io.ObjectOutputStream
 * @see java.io.Serializable
 * @see 
 *      Java Object Serialization Specification, Section 3, "Object Input Classes"
 * @since   1.1
*/
export class ObjectInputStream extends InputStream {
  /**
   * Creates an ObjectInputStream that reads from the specified InputStream.
   * A serialization stream header is read from the stream and verified.
   * This constructor will block until the corresponding ObjectOutputStream
   * has written and flushed the header.
   *
   * The serialization filter is initialized to the value of
   * {@linkplain ObjectInputFilter.Config#getSerialFilter() the system-wide filter}.
   *
   * If a security manager is installed, this constructor will check for
   * the "enableSubclassImplementation" SerializablePermission when invoked
   * directly or indirectly by the constructor of a subclass which overrides
   * the ObjectInputStream.readFields or ObjectInputStream.readUnshared
   * methods.
   *
   * @param   in input stream to read from
   * @throws  StreamCorruptedException if the stream header is incorrect
   * @throws  IOException if an I/O error occurs while reading stream header
   * @throws  SecurityException if untrusted subclass illegally overrides
   *          security-sensitive methods
   * @throws  NullPointerException if `in` is `null`
   * @see     ObjectInputStream#ObjectInputStream()
   * @see     ObjectInputStream#readFields()
   * @see     ObjectOutputStream#ObjectOutputStream(OutputStream)
  */
  constructor(in_: InputStream);
  /**
   * Read an object from the ObjectInputStream.  The class of the object, the
   * signature of the class, and the values of the non-transient and
   * non-static fields of the class and all of its supertypes are read.
   * Default deserializing for a class can be overridden using the writeObject
   * and readObject methods.  Objects referenced by this object are read
   * transitively so that a complete equivalent graph of objects is
   * reconstructed by readObject.
   *
   * The root object is completely restored when all of its fields and the
   * objects it references are completely restored.  At this point the object
   * validation callbacks are executed in order based on their registered
   * priorities. The callbacks are registered by objects (in the readObject
   * special methods) as they are individually restored.
   *
   * The serialization filter, when not `null`, is invoked for
   * each object (regular or class) read to reconstruct the root object.
   * See {@link #setObjectInputFilter(ObjectInputFilter) setObjectInputFilter} for details.
   *
   * Exceptions are thrown for problems with the InputStream and for
   * classes that should not be deserialized.  All exceptions are fatal to
   * the InputStream and leave it in an indeterminate state; it is up to the
   * caller to ignore or recover the stream state.
   *
   * @throws  ClassNotFoundException Class of a serialized object cannot be
   *          found.
   * @throws  InvalidClassException Something is wrong with a class used by
   *          serialization.
   * @throws  StreamCorruptedException Control information in the
   *          stream is inconsistent.
   * @throws  OptionalDataException Primitive data was found in the
   *          stream instead of objects.
   * @throws  IOException Any of the usual Input/Output related exceptions.
  */
  readObject(): any;
  /**
   * Reads an "unshared" object from the ObjectInputStream.  This method is
   * identical to readObject, except that it prevents subsequent calls to
   * readObject and readUnshared from returning additional references to the
   * deserialized instance obtained via this call.  Specifically:
   * 
   *   If readUnshared is called to deserialize a back-reference (the
   *       stream representation of an object which has been written
   *       previously to the stream), an ObjectStreamException will be
   *       thrown.
   *
   *   If readUnshared returns successfully, then any subsequent attempts
   *       to deserialize back-references to the stream handle deserialized
   *       by readUnshared will cause an ObjectStreamException to be thrown.
   * 
   * Deserializing an object via readUnshared invalidates the stream handle
   * associated with the returned object.  Note that this in itself does not
   * always guarantee that the reference returned by readUnshared is unique;
   * the deserialized object may define a readResolve method which returns an
   * object visible to other parties, or readUnshared may return a Class
   * object or enum constant obtainable elsewhere in the stream or through
   * external means. If the deserialized object defines a readResolve method
   * and the invocation of that method returns an array, then readUnshared
   * returns a shallow clone of that array; this guarantees that the returned
   * array object is unique and cannot be obtained a second time from an
   * invocation of readObject or readUnshared on the ObjectInputStream,
   * even if the underlying data stream has been manipulated.
   *
   * The serialization filter, when not `null`, is invoked for
   * each object (regular or class) read to reconstruct the root object.
   * See {@link #setObjectInputFilter(ObjectInputFilter) setObjectInputFilter} for details.
   *
   * ObjectInputStream subclasses which override this method can only be
   * constructed in security contexts possessing the
   * "enableSubclassImplementation" SerializablePermission; any attempt to
   * instantiate such a subclass without this permission will cause a
   * SecurityException to be thrown.
   *
   * @return  reference to deserialized object
   * @throws  ClassNotFoundException if class of an object to deserialize
   *          cannot be found
   * @throws  StreamCorruptedException if control information in the stream
   *          is inconsistent
   * @throws  ObjectStreamException if object to deserialize has already
   *          appeared in stream
   * @throws  OptionalDataException if primitive data is next in stream
   * @throws  IOException if an I/O error occurs during deserialization
   * @since   1.4
  */
  readUnshared(): any;
  /**
   * Read the non-static and non-transient fields of the current class from
   * this stream.  This may only be called from the readObject method of the
   * class being deserialized. It will throw the NotActiveException if it is
   * called otherwise.
   *
   * @throws  ClassNotFoundException if the class of a serialized object
   *          could not be found.
   * @throws  IOException if an I/O error occurs.
   * @throws  NotActiveException if the stream is not currently reading
   *          objects.
  */
  defaultReadObject(): void;
  /**
   * Reads the persistent fields from the stream and makes them available by
   * name.
   *
   * @return  the `GetField` object representing the persistent
   *          fields of the object being deserialized
   * @throws  ClassNotFoundException if the class of a serialized object
   *          could not be found.
   * @throws  IOException if an I/O error occurs.
   * @throws  NotActiveException if the stream is not currently reading
   *          objects.
   * @since 1.2
  */
  readFields(): GetField;
  /**
   * Register an object to be validated before the graph is returned.  While
   * similar to resolveObject these validations are called after the entire
   * graph has been reconstituted.  Typically, a readObject method will
   * register the object with the stream so that when all of the objects are
   * restored a final set of validations can be performed.
   *
   * @param   obj the object to receive the validation callback.
   * @param   prio controls the order of callbacks;zero is a good default.
   *          Use higher numbers to be called back earlier, lower numbers for
   *          later callbacks. Within a priority, callbacks are processed in
   *          no particular order.
   * @throws  NotActiveException The stream is not currently reading objects
   *          so it is invalid to register a callback.
   * @throws  InvalidObjectException The validation object is null.
  */
  registerValidation(obj: ObjectInputValidation, prio: number): void;
  /**
   * Reads a byte of data. This method will block if no input is available.
   *
   * @return  the byte read, or -1 if the end of the stream is reached.
   * @throws  IOException If an I/O error has occurred.
  */
  read(): number;
  /**
   * Reads into an array of bytes.  This method will block until some input
   * is available. Consider using java.io.DataInputStream.readFully to read
   * exactly 'length' bytes.
   *
   * @param   buf the buffer into which the data is read
   * @param   off the start offset in the destination array `buf`
   * @param   len the maximum number of bytes read
   * @return  the actual number of bytes read, -1 is returned when the end of
   *          the stream is reached.
   * @throws  NullPointerException if `buf` is `null`.
   * @throws  IndexOutOfBoundsException if `off` is negative,
   *          `len` is negative, or `len` is greater than
   *          `buf.length - off`.
   * @throws  IOException If an I/O error has occurred.
   * @see java.io.DataInputStream#readFully(byte[],int,int)
  */
  read(buf: number[], off: number, len: number): number;
  /**
   * Returns the number of bytes that can be read without blocking.
   *
   * @return  the number of available bytes.
   * @throws  IOException if there are I/O errors while reading from the
   *          underlying `InputStream`
  */
  available(): number;
  /**
   * Closes the input stream. Must be called to release any resources
   * associated with the stream.
   *
   * @throws  IOException If an I/O error has occurred.
  */
  close(): void;
  /**
   * Reads in a boolean.
   *
   * @return  the boolean read.
   * @throws  EOFException If end of file is reached.
   * @throws  IOException If other I/O error has occurred.
  */
  readBoolean(): boolean;
  /**
   * Reads an 8 bit byte.
   *
   * @return  the 8 bit byte read.
   * @throws  EOFException If end of file is reached.
   * @throws  IOException If other I/O error has occurred.
  */
  readByte(): number;
  /**
   * Reads an unsigned 8 bit byte.
   *
   * @return  the 8 bit byte read.
   * @throws  EOFException If end of file is reached.
   * @throws  IOException If other I/O error has occurred.
  */
  readUnsignedByte(): number;
  /**
   * Reads a 16 bit char.
   *
   * @return  the 16 bit char read.
   * @throws  EOFException If end of file is reached.
   * @throws  IOException If other I/O error has occurred.
  */
  readChar(): string;
  /**
   * Reads a 16 bit short.
   *
   * @return  the 16 bit short read.
   * @throws  EOFException If end of file is reached.
   * @throws  IOException If other I/O error has occurred.
  */
  readShort(): number;
  /**
   * Reads an unsigned 16 bit short.
   *
   * @return  the 16 bit short read.
   * @throws  EOFException If end of file is reached.
   * @throws  IOException If other I/O error has occurred.
  */
  readUnsignedShort(): number;
  /**
   * Reads a 32 bit int.
   *
   * @return  the 32 bit integer read.
   * @throws  EOFException If end of file is reached.
   * @throws  IOException If other I/O error has occurred.
  */
  readInt(): number;
  /**
   * Reads a 64 bit long.
   *
   * @return  the read 64 bit long.
   * @throws  EOFException If end of file is reached.
   * @throws  IOException If other I/O error has occurred.
  */
  readLong(): number;
  /**
   * Reads a 32 bit float.
   *
   * @return  the 32 bit float read.
   * @throws  EOFException If end of file is reached.
   * @throws  IOException If other I/O error has occurred.
  */
  readFloat(): number;
  /**
   * Reads a 64 bit double.
   *
   * @return  the 64 bit double read.
   * @throws  EOFException If end of file is reached.
   * @throws  IOException If other I/O error has occurred.
  */
  readDouble(): number;
  /**
   * Reads bytes, blocking until all bytes are read.
   *
   * @param   buf the buffer into which the data is read
   * @throws  NullPointerException If `buf` is `null`.
   * @throws  EOFException If end of file is reached.
   * @throws  IOException If other I/O error has occurred.
  */
  readFully(buf: number[]): void;
  /**
   * Reads bytes, blocking until all bytes are read.
   *
   * @param   buf the buffer into which the data is read
   * @param   off the start offset into the data array `buf`
   * @param   len the maximum number of bytes to read
   * @throws  NullPointerException If `buf` is `null`.
   * @throws  IndexOutOfBoundsException If `off` is negative,
   *          `len` is negative, or `len` is greater than
   *          `buf.length - off`.
   * @throws  EOFException If end of file is reached.
   * @throws  IOException If other I/O error has occurred.
  */
  readFully(buf: number[], off: number, len: number): void;
  /**
   * Skips bytes.
   *
   * @param   len the number of bytes to be skipped
   * @return  the actual number of bytes skipped.
   * @throws  IOException If an I/O error has occurred.
  */
  skipBytes(len: number): number;
  /**
   * Reads in a line that has been terminated by a \n, \r, \r\n or EOF.
   *
   * @return  a String copy of the line.
   * @throws  IOException if there are I/O errors while reading from the
   *          underlying `InputStream`
   * @deprecated This method does not properly convert bytes to characters.
   *          see DataInputStream for the details and alternatives.
  */
  readLine(): string;
  /**
   * Reads a String in
   * modified UTF-8
   * format.
   *
   * @return  the String.
   * @throws  IOException if there are I/O errors while reading from the
   *          underlying `InputStream`
   * @throws  UTFDataFormatException if read bytes do not represent a valid
   *          modified UTF-8 encoding of a string
  */
  readUTF(): string;
  /**
   * Returns the serialization filter for this stream.
   * The serialization filter is the most recent filter set in
   * {@link #setObjectInputFilter setObjectInputFilter} or
   * the initial system-wide filter from
   * {@link ObjectInputFilter.Config#getSerialFilter() ObjectInputFilter.Config.getSerialFilter}.
   *
   * @return the serialization filter for the stream; may be null
   * @since 9
  */
  getObjectInputFilter(): ObjectInputFilter;
  /**
   * Set the serialization filter for the stream.
   * The filter's {@link ObjectInputFilter#checkInput checkInput} method is called
   * for each class and reference in the stream.
   * The filter can check any or all of the class, the array length, the number
   * of references, the depth of the graph, and the size of the input stream.
   * The depth is the number of nested {@linkplain #readObject readObject}
   * calls starting with the reading of the root of the graph being deserialized
   * and the current object being deserialized.
   * The number of references is the cumulative number of objects and references
   * to objects already read from the stream including the current object being read.
   * The filter is invoked only when reading objects from the stream and for
   * not primitives.
   * 
   * If the filter returns {@link ObjectInputFilter.Status#REJECTED Status.REJECTED},
   * `null` or throws a {@link RuntimeException},
   * the active `readObject` or `readUnshared`
   * throws {@link InvalidClassException}, otherwise deserialization
   * continues uninterrupted.
   * 
   * The serialization filter is initialized to the value of
   * {@link ObjectInputFilter.Config#getSerialFilter() ObjectInputFilter.Config.getSerialFilter}
   * when the ` ObjectInputStream` is constructed and can be set
   * to a custom filter only once.
   * The filter must be set before reading any objects from the stream;
   * for example, by calling {@link #readObject} or {@link #readUnshared}.
   *
   * @implSpec
   * The filter, when not `null`, is invoked during {@link #readObject readObject}
   * and {@link #readUnshared readUnshared} for each object (regular or class) in the stream.
   * Strings are treated as primitives and do not invoke the filter.
   * The filter is called for:
   * 
   *     each object reference previously deserialized from the stream
   *     (class is `null`, arrayLength is -1),
   *     each regular class (class is not `null`, arrayLength is -1),
   *     each interface of a dynamic proxy and the dynamic proxy class itself
   *     (class is not `null`, arrayLength is -1),
   *     each array is filtered using the array type and length of the array
   *     (class is the array type, arrayLength is the requested length),
   *     each object replaced by its class' `readResolve` method
   *         is filtered using the replacement object's class, if not `null`,
   *         and if it is an array, the arrayLength, otherwise -1,
   *     and each object replaced by {@link #resolveObject resolveObject}
   *         is filtered using the replacement object's class, if not `null`,
   *         and if it is an array, the arrayLength, otherwise -1.
   * 
   *
   * When the {@link ObjectInputFilter#checkInput checkInput} method is invoked
   * it is given access to the current class, the array length,
   * the current number of references already read from the stream,
   * the depth of nested calls to {@link #readObject readObject} or
   * {@link #readUnshared readUnshared},
   * and the implementation dependent number of bytes consumed from the input stream.
   * 
   * Each call to {@link #readObject readObject} or
   * {@link #readUnshared readUnshared} increases the depth by 1
   * before reading an object and decreases by 1 before returning
   * normally or exceptionally.
   * The depth starts at `1` and increases for each nested object and
   * decrements when each nested call returns.
   * The count of references in the stream starts at `1` and
   * is increased before reading an object.
   *
   * @param filter the filter, may be null
   * @throws SecurityException if there is security manager and the
   *       `SerializablePermission("serialFilter")` is not granted
   * @throws IllegalStateException if the {@linkplain #getObjectInputFilter() current filter}
   *       is not `null` and is not the system-wide filter, or
   *       if an object has been read
   * @since 9
  */
  setObjectInputFilter(objectInputFilter: ObjectInputFilter);
  /**
   * Reads some number of bytes from the input stream and stores them into
   * the buffer array `b`. The number of bytes actually read is
   * returned as an integer.  This method blocks until input data is
   * available, end of file is detected, or an exception is thrown.
   *
   *  If the length of `b` is zero, then no bytes are read and
   * `0` is returned; otherwise, there is an attempt to read at
   * least one byte. If no byte is available because the stream is at the
   * end of the file, the value `-1` is returned; otherwise, at
   * least one byte is read and stored into `b`.
   *
   *  The first byte read is stored into element `b[0]`, the
   * next one into `b[1]`, and so on. The number of bytes read is,
   * at most, equal to the length of `b`. Let k be the
   * number of bytes actually read; these bytes will be stored in elements
   * `b[0]` through `b[`k`-1]`,
   * leaving elements `b[`k`]` through
   * `b[b.length-1]` unaffected.
   *
   *  The `read(b)` method for class `InputStream`
   * has the same effect as: ` read(b, 0, b.length) `
   *
   * @param      b   the buffer into which the data is read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
   * @throws     IOException  If the first byte cannot be read for any reason
   *             other than the end of the file, if the input stream has been
   *             closed, or if some other I/O error occurs.
   * @throws     NullPointerException  if `b` is `null`.
   * @see        java.io.InputStream#read(byte[], int, int)
  */
  read(b: number[]): number;
}
export interface ObjectInputStream extends InputStream, ObjectInput, ObjectStreamConstants {}
/**
 * Base class for character conversion exceptions.
 *
 * @author      Asmus Freytag
 * @since       1.1
*/
export class CharConversionException extends IOException {
  /**
   * This provides no detailed message.
  */
  constructor();
  /**
   * This provides a detailed message.
   *
   * @param s the detailed message associated with the exception.
  */
  constructor(s: string);
}
/**
 * ObjectInput extends the DataInput interface to include the reading of
 * objects. DataInput includes methods for the input of primitive types,
 * ObjectInput extends that interface to include objects, arrays, and Strings.
 *
 * @see java.io.InputStream
 * @see java.io.ObjectOutputStream
 * @see java.io.ObjectInputStream
 * @since   1.1
*/
export class ObjectInput extends DataInput {
  /**
   * Read and return an object. The class that implements this interface
   * defines where the object is "read" from.
   *
   * @return    the object read from the stream
   * @throws    java.lang.ClassNotFoundException If the class of a serialized
   *            object cannot be found.
   * @throws    IOException If any of the usual Input/Output
   *            related exceptions occur.
  */
  readObject(): any;
  /**
   * Reads a byte of data. This method will block if no input is
   * available.
   * @return  the byte read, or -1 if the end of the
   *          stream is reached.
   * @throws  IOException If an I/O error has occurred.
  */
  read(): number;
  /**
   * Reads into an array of bytes.  This method will
   * block until some input is available.
   * @param   b the buffer into which the data is read
   * @return  the actual number of bytes read, -1 is
   *          returned when the end of the stream is reached.
   * @throws  IOException If an I/O error has occurred.
  */
  read(b: number[]): number;
  /**
   * Reads into an array of bytes.  This method will
   * block until some input is available.
   * @param   b the buffer into which the data is read
   * @param   off the start offset of the data
   * @param   len the maximum number of bytes read
   * @return  the actual number of bytes read, -1 is
   *          returned when the end of the stream is reached.
   * @throws  IOException If an I/O error has occurred.
  */
  read(b: number[], off: number, len: number): number;
  /**
   * Skips n bytes of input.
   * @param   n the number of bytes to be skipped
   * @return  the actual number of bytes skipped.
   * @throws   IOException If an I/O error has occurred.
  */
  skip(n: number): number;
  /**
   * Returns the number of bytes that can be read
   * without blocking.
   * @return  the number of available bytes.
   * @throws  IOException If an I/O error has occurred.
  */
  available(): number;
  /**
   * Closes the input stream. Must be called
   * to release any resources associated with
   * the stream.
   * @throws    IOException If an I/O error has occurred.
  */
  close(): void;
}
export interface ObjectInput extends DataInput, AutoCloseable {}
/**
 * Signals that a malformed string in
 * modified UTF-8
 * format has been read in a data
 * input stream or by any class that implements the data input
 * interface.
 * See the
 * `DataInput`
 * class description for the format in
 * which modified UTF-8 strings are read and written.
 *
 * @author  Frank Yellin
 * @see     java.io.DataInput
 * @see     java.io.DataInputStream#readUTF(java.io.DataInput)
 * @see     java.io.IOException
 * @since   1.0
*/
export class UTFDataFormatException extends IOException {
  /**
   * Constructs a `UTFDataFormatException` with
   * `null` as its error detail message.
  */
  constructor();
  /**
   * Constructs a `UTFDataFormatException` with the
   * specified detail message. The string `s` can be
   * retrieved later by the
   * {@link java.lang.Throwable#getMessage}
   * method of class `java.lang.Throwable`.
   *
   * @param   s   the detail message.
  */
  constructor(s: string);
}
/**
 * A `FilterInputStream` contains
 * some other input stream, which it uses as
 * its  basic source of data, possibly transforming
 * the data along the way or providing  additional
 * functionality. The class `FilterInputStream`
 * itself simply overrides all  methods of
 * `InputStream` with versions that
 * pass all requests to the contained  input
 * stream. Subclasses of `FilterInputStream`
 * may further override some of  these methods
 * and may also provide additional methods
 * and fields.
 *
 * @author  Jonathan Payne
 * @since   1.0
*/
export class FilterInputStream extends InputStream {
  /**
   * Reads the next byte of data from this input stream. The value
   * byte is returned as an `int` in the range
   * `0` to `255`. If no byte is available
   * because the end of the stream has been reached, the value
   * `-1` is returned. This method blocks until input data
   * is available, the end of the stream is detected, or an exception
   * is thrown.
   * 
   * This method
   * simply performs `in.read()` and returns the result.
   *
   * @return     the next byte of data, or `-1` if the end of the
   *             stream is reached.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterInputStream#in
  */
  read(): number;
  /**
   * Reads up to `b.length` bytes of data from this
   * input stream into an array of bytes. This method blocks until some
   * input is available.
   * 
   * This method simply performs the call
   * `read(b, 0, b.length)` and returns
   * the  result. It is important that it does
   * not do `in.read(b)` instead;
   * certain subclasses of  `FilterInputStream`
   * depend on the implementation strategy actually
   * used.
   *
   * @param      b   the buffer into which the data is read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterInputStream#read(byte[], int, int)
  */
  read(b: number[]): number;
  /**
   * Reads up to `len` bytes of data from this input stream
   * into an array of bytes. If `len` is not zero, the method
   * blocks until some input is available; otherwise, no
   * bytes are read and `0` is returned.
   * 
   * This method simply performs `in.read(b, off, len)`
   * and returns the result.
   *
   * @param      b     the buffer into which the data is read.
   * @param      off   the start offset in the destination array `b`
   * @param      len   the maximum number of bytes read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
   * @throws     NullPointerException If `b` is `null`.
   * @throws     IndexOutOfBoundsException If `off` is negative,
   *             `len` is negative, or `len` is greater than
   *             `b.length - off`
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterInputStream#in
  */
  read(b: number[], off: number, len: number): number;
  /**
   * Skips over and discards `n` bytes of data from the
   * input stream. The `skip` method may, for a variety of
   * reasons, end up skipping over some smaller number of bytes,
   * possibly `0`. The actual number of bytes skipped is
   * returned.
   * 
   * This method simply performs `in.skip(n)`.
   *
   * @param      n   the number of bytes to be skipped.
   * @return     the actual number of bytes skipped.
   * @throws     IOException  if `in.skip(n)` throws an IOException.
  */
  skip(n: number): number;
  /**
   * Returns an estimate of the number of bytes that can be read (or
   * skipped over) from this input stream without blocking by the next
   * caller of a method for this input stream. The next caller might be
   * the same thread or another thread.  A single read or skip of this
   * many bytes will not block, but may read or skip fewer bytes.
   * 
   * This method returns the result of {@link #in in}.available().
   *
   * @return     an estimate of the number of bytes that can be read (or skipped
   *             over) from this input stream without blocking.
   * @throws     IOException  if an I/O error occurs.
  */
  available(): number;
  /**
   * Closes this input stream and releases any system resources
   * associated with the stream.
   * This
   * method simply performs `in.close()`.
   *
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterInputStream#in
  */
  close(): void;
  /**
   * Marks the current position in this input stream. A subsequent
   * call to the `reset` method repositions this stream at
   * the last marked position so that subsequent reads re-read the same bytes.
   * 
   * The `readlimit` argument tells this input stream to
   * allow that many bytes to be read before the mark position gets
   * invalidated.
   * 
   * This method simply performs `in.mark(readlimit)`.
   *
   * @param   readlimit   the maximum limit of bytes that can be read before
   *                      the mark position becomes invalid.
   * @see     java.io.FilterInputStream#in
   * @see     java.io.FilterInputStream#reset()
  */
  mark(readlimit: number): void;
  /**
   * Repositions this stream to the position at the time the
   * `mark` method was last called on this input stream.
   * 
   * This method
   * simply performs `in.reset()`.
   * 
   * Stream marks are intended to be used in
   * situations where you need to read ahead a little to see what's in
   * the stream. Often this is most easily done by invoking some
   * general parser. If the stream is of the type handled by the
   * parse, it just chugs along happily. If the stream is not of
   * that type, the parser should toss an exception when it fails.
   * If this happens within readlimit bytes, it allows the outer
   * code to reset the stream and try another parser.
   *
   * @throws     IOException  if the stream has not been marked or if the
   *               mark has been invalidated.
   * @see        java.io.FilterInputStream#in
   * @see        java.io.FilterInputStream#mark(int)
  */
  reset(): void;
  /**
   * Tests if this input stream supports the `mark`
   * and `reset` methods.
   * This method
   * simply performs `in.markSupported()`.
   *
   * @return  `true` if this stream type supports the
   *          `mark` and `reset` method;
   *          `false` otherwise.
   * @see     java.io.FilterInputStream#in
   * @see     java.io.InputStream#mark(int)
   * @see     java.io.InputStream#reset()
  */
  markSupported(): boolean;
}
export class OutputStreamWriter extends Writer {
  /**
   * Creates an OutputStreamWriter that uses the named charset.
   *
   * @param  out
   *         An OutputStream
   *
   * @param  charsetName
   *         The name of a supported
   *         {@link java.nio.charset.Charset charset}
   *
   * @throws     UnsupportedEncodingException
   *             If the named encoding is not supported
  */
  constructor(out: OutputStream, charsetName: string);
  /**
   * Creates an OutputStreamWriter that uses the default character encoding.
   *
   * @param  out  An OutputStream
  */
  constructor(out: OutputStream);
  /**
   * Creates an OutputStreamWriter that uses the given charset.
   *
   * @param  out
   *         An OutputStream
   *
   * @param  cs
   *         A charset
   *
   * @since 1.4
  */
  constructor(out: OutputStream, cs: Charset);
  /**
   * Creates an OutputStreamWriter that uses the given charset encoder.
   *
   * @param  out
   *         An OutputStream
   *
   * @param  enc
   *         A charset encoder
   *
   * @since 1.4
  */
  constructor(out: OutputStream, enc: CharsetEncoder);
  /**
   * Returns the name of the character encoding being used by this stream.
   *
   *  If the encoding has an historical name then that name is returned;
   * otherwise the encoding's canonical name is returned.
   *
   *  If this instance was created with the {@link
   * #OutputStreamWriter(OutputStream, String)} constructor then the returned
   * name, being unique for the encoding, may differ from the name passed to
   * the constructor.  This method may return `null` if the stream has
   * been closed. 
   *
   * @return The historical name of this encoding, or possibly
   *         `null` if the stream has been closed
   *
   * @see java.nio.charset.Charset
   *
   * @revised 1.4
  */
  getEncoding(): string;
  /**
   * Writes a single character.
   *
   * @throws     IOException  If an I/O error occurs
  */
  write(c: number): void;
  /**
   * Writes a portion of an array of characters.
   *
   * @param  cbuf  Buffer of characters
   * @param  off   Offset from which to start writing characters
   * @param  len   Number of characters to write
   *
   * @throws  IndexOutOfBoundsException
   *          If `off` is negative, or `len` is negative,
   *          or `off + len` is negative or greater than the length
   *          of the given array
   *
   * @throws  IOException  If an I/O error occurs
  */
  write(cbuf: string[], off: number, len: number): void;
  /**
   * Writes a portion of a string.
   *
   * @param  str  A String
   * @param  off  Offset from which to start writing characters
   * @param  len  Number of characters to write
   *
   * @throws  IndexOutOfBoundsException
   *          If `off` is negative, or `len` is negative,
   *          or `off + len` is negative or greater than the length
   *          of the given string
   *
   * @throws  IOException  If an I/O error occurs
  */
  write(str: string, off: number, len: number): void;
  append(csq: CharSequence, start: number, end: number): Writer;
  append(csq: CharSequence): Writer;
  /**
   * Flushes the stream.
   *
   * @throws     IOException  If an I/O error occurs
  */
  flush(): void;
  close(): void;
  /**
   * Writes an array of characters.
   *
   * @param  cbuf
   *         Array of characters to be written
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(cbuf: string[]): void;
  /**
   * Writes a string.
   *
   * @param  str
   *         String to be written
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(str: string): void;
  /**
   * Appends the specified character to this writer.
   *
   *  An invocation of this method of the form `out.append(c)`
   * behaves in exactly the same way as the invocation
   *
   *      *     out.write(c) 
   *
   * @param  c
   *         The 16-bit character to append
   *
   * @return  This writer
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @since 1.5
  */
  append(c: string): Writer;
}
/**
 * Thrown when serialization or deserialization is not active.
 *
 * @since   1.1
*/
export class NotActiveException extends ObjectStreamException {
  /**
   * Constructor to create a new NotActiveException with the reason given.
   *
   * @param reason  a String describing the reason for the exception.
  */
  constructor(reason: string);
  /**
   * Constructor to create a new NotActiveException without a reason.
  */
  constructor();
}
/**
 * A `SequenceInputStream` represents
 * the logical concatenation of other input
 * streams. It starts out with an ordered
 * collection of input streams and reads from
 * the first one until end of file is reached,
 * whereupon it reads from the second one,
 * and so on, until end of file is reached
 * on the last of the contained input streams.
 *
 * @author  Author van Hoff
 * @since   1.0
*/
export class SequenceInputStream extends InputStream {
  /**
   * Initializes a newly created `SequenceInputStream`
   * by remembering the argument, which must
   * be an `Enumeration`  that produces
   * objects whose run-time type is `InputStream`.
   * The input streams that are  produced by
   * the enumeration will be read, in order,
   * to provide the bytes to be read  from this
   * `SequenceInputStream`. After
   * each input stream from the enumeration
   * is exhausted, it is closed by calling its
   * `close` method.
   *
   * @param   e   an enumeration of input streams.
   * @see     java.util.Enumeration
  */
  constructor(e: Enumeration<InputStream>);
  /**
   * Initializes a newly
   * created `SequenceInputStream`
   * by remembering the two arguments, which
   * will be read in order, first `s1`
   * and then `s2`, to provide the
   * bytes to be read from this `SequenceInputStream`.
   *
   * @param   s1   the first input stream to read.
   * @param   s2   the second input stream to read.
  */
  constructor(s1: InputStream, s2: InputStream);
  /**
   * Returns an estimate of the number of bytes that can be read (or
   * skipped over) from the current underlying input stream without
   * blocking by the next invocation of a method for the current
   * underlying input stream. The next invocation might be
   * the same thread or another thread.  A single read or skip of this
   * many bytes will not block, but may read or skip fewer bytes.
   * 
   * This method simply calls `available` of the current underlying
   * input stream and returns the result.
   *
   * @return   an estimate of the number of bytes that can be read (or
   *           skipped over) from the current underlying input stream
   *           without blocking or `0` if this input stream
   *           has been closed by invoking its {@link #close()} method
   * @throws   IOException  if an I/O error occurs.
   *
   * @since    1.1
  */
  available(): number;
  /**
   * Reads the next byte of data from this input stream. The byte is
   * returned as an `int` in the range `0` to
   * `255`. If no byte is available because the end of the
   * stream has been reached, the value `-1` is returned.
   * This method blocks until input data is available, the end of the
   * stream is detected, or an exception is thrown.
   * 
   * This method
   * tries to read one character from the current substream. If it
   * reaches the end of the stream, it calls the `close`
   * method of the current substream and begins reading from the next
   * substream.
   *
   * @return     the next byte of data, or `-1` if the end of the
   *             stream is reached.
   * @throws     IOException  if an I/O error occurs.
  */
  read(): number;
  /**
   * Reads up to `len` bytes of data from this input stream
   * into an array of bytes.  If `len` is not zero, the method
   * blocks until at least 1 byte of input is available; otherwise, no
   * bytes are read and `0` is returned.
   * 
   * The `read` method of `SequenceInputStream`
   * tries to read the data from the current substream. If it fails to
   * read any characters because the substream has reached the end of
   * the stream, it calls the `close` method of the current
   * substream and begins reading from the next substream.
   *
   * @param      b     the buffer into which the data is read.
   * @param      off   the start offset in array `b`
   *                   at which the data is written.
   * @param      len   the maximum number of bytes read.
   * @return     int   the number of bytes read.
   * @throws     NullPointerException If `b` is `null`.
   * @throws     IndexOutOfBoundsException If `off` is negative,
   *             `len` is negative, or `len` is
   *             greater than `b.length - off`
   * @throws     IOException  if an I/O error occurs.
  */
  read(b: number[], off: number, len: number): number;
  /**
   * Closes this input stream and releases any system resources
   * associated with the stream.
   * A closed `SequenceInputStream`
   * cannot  perform input operations and cannot
   * be reopened.
   * 
   * If this stream was created
   * from an enumeration, all remaining elements
   * are requested from the enumeration and closed
   * before the `close` method returns.
   *
   * @throws     IOException  if an I/O error occurs.
  */
  close(): void;
  /**
   * Reads some number of bytes from the input stream and stores them into
   * the buffer array `b`. The number of bytes actually read is
   * returned as an integer.  This method blocks until input data is
   * available, end of file is detected, or an exception is thrown.
   *
   *  If the length of `b` is zero, then no bytes are read and
   * `0` is returned; otherwise, there is an attempt to read at
   * least one byte. If no byte is available because the stream is at the
   * end of the file, the value `-1` is returned; otherwise, at
   * least one byte is read and stored into `b`.
   *
   *  The first byte read is stored into element `b[0]`, the
   * next one into `b[1]`, and so on. The number of bytes read is,
   * at most, equal to the length of `b`. Let k be the
   * number of bytes actually read; these bytes will be stored in elements
   * `b[0]` through `b[`k`-1]`,
   * leaving elements `b[`k`]` through
   * `b[b.length-1]` unaffected.
   *
   *  The `read(b)` method for class `InputStream`
   * has the same effect as: ` read(b, 0, b.length) `
   *
   * @param      b   the buffer into which the data is read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the stream has been reached.
   * @throws     IOException  If the first byte cannot be read for any reason
   *             other than the end of the file, if the input stream has been
   *             closed, or if some other I/O error occurs.
   * @throws     NullPointerException  if `b` is `null`.
   * @see        java.io.InputStream#read(byte[], int, int)
  */
  read(b: number[]): number;
}
/**
 * Exception indicating the failure of an object read operation due to
 * unread primitive data, or the end of data belonging to a serialized
 * object in the stream.  This exception may be thrown in two cases:
 *
 * 
 *   An attempt was made to read an object when the next element in the
 *       stream is primitive data.  In this case, the OptionalDataException's
 *       length field is set to the number of bytes of primitive data
 *       immediately readable from the stream, and the eof field is set to
 *       false.
 *
 *   An attempt was made to read past the end of data consumable by a
 *       class-defined readObject or readExternal method.  In this case, the
 *       OptionalDataException's eof field is set to true, and the length field
 *       is set to 0.
 * 
 *
 * @since   1.1
*/
export class OptionalDataException extends ObjectStreamException {
  /**
   * The number of bytes of primitive data available to be read
   * in the current buffer.
   *
   * @serial
  */
  length: number;
  /**
   * True if there is no more data in the buffered part of the stream.
   *
   * @serial
  */
  eof: boolean;
}
/**
 * A `FileInputStream` obtains input bytes
 * from a file in a file system. What files
 * are  available depends on the host environment.
 *
 * `FileInputStream` is meant for reading streams of raw bytes
 * such as image data. For reading streams of characters, consider using
 * `FileReader`.
 *
 * @apiNote
 * To release resources used by this stream {@link #close} should be called
 * directly or by try-with-resources. Subclasses are responsible for the cleanup
 * of resources acquired by the subclass.
 * Subclasses that override {@link #finalize} in order to perform cleanup
 * should be modified to use alternative cleanup mechanisms such as
 * {@link java.lang.ref.Cleaner} and remove the overriding `finalize` method.
 *
 * @implSpec
 * If this FileInputStream has been subclassed and the {@link #close}
 * method has been overridden, the {@link #close} method will be
 * called when the FileInputStream is unreachable.
 * Otherwise, it is implementation specific how the resource cleanup described in
 * {@link #close} is performed.
 *
 * @author  Arthur van Hoff
 * @see     java.io.File
 * @see     java.io.FileDescriptor
 * @see     java.io.FileOutputStream
 * @see     java.nio.file.Files#newInputStream
 * @since   1.0
*/
export class FileInputStream extends InputStream {
  /**
   * Creates a `FileInputStream` by
   * opening a connection to an actual file,
   * the file named by the path name `name`
   * in the file system.  A new `FileDescriptor`
   * object is created to represent this file
   * connection.
   * 
   * First, if there is a security
   * manager, its `checkRead` method
   * is called with the `name` argument
   * as its argument.
   * 
   * If the named file does not exist, is a directory rather than a regular
   * file, or for some other reason cannot be opened for reading then a
   * `FileNotFoundException` is thrown.
   *
   * @param      name   the system-dependent file name.
   * @throws     FileNotFoundException  if the file does not exist,
   *             is a directory rather than a regular file,
   *             or for some other reason cannot be opened for
   *             reading.
   * @throws     SecurityException      if a security manager exists and its
   *             `checkRead` method denies read access
   *             to the file.
   * @see        java.lang.SecurityManager#checkRead(java.lang.String)
  */
  constructor(name: string);
  /**
   * Creates a `FileInputStream` by
   * opening a connection to an actual file,
   * the file named by the `File`
   * object `file` in the file system.
   * A new `FileDescriptor` object
   * is created to represent this file connection.
   * 
   * First, if there is a security manager,
   * its `checkRead` method  is called
   * with the path represented by the `file`
   * argument as its argument.
   * 
   * If the named file does not exist, is a directory rather than a regular
   * file, or for some other reason cannot be opened for reading then a
   * `FileNotFoundException` is thrown.
   *
   * @param      file   the file to be opened for reading.
   * @throws     FileNotFoundException  if the file does not exist,
   *             is a directory rather than a regular file,
   *             or for some other reason cannot be opened for
   *             reading.
   * @throws     SecurityException      if a security manager exists and its
   *             `checkRead` method denies read access to the file.
   * @see        java.io.File#getPath()
   * @see        java.lang.SecurityManager#checkRead(java.lang.String)
  */
  constructor(file: File);
  /**
   * Creates a `FileInputStream` by using the file descriptor
   * `fdObj`, which represents an existing connection to an
   * actual file in the file system.
   * 
   * If there is a security manager, its `checkRead` method is
   * called with the file descriptor `fdObj` as its argument to
   * see if it's ok to read the file descriptor. If read access is denied
   * to the file descriptor a `SecurityException` is thrown.
   * 
   * If `fdObj` is null then a `NullPointerException`
   * is thrown.
   * 
   * This constructor does not throw an exception if `fdObj`
   * is {@link java.io.FileDescriptor#valid() invalid}.
   * However, if the methods are invoked on the resulting stream to attempt
   * I/O on the stream, an `IOException` is thrown.
   *
   * @param      fdObj   the file descriptor to be opened for reading.
   * @throws     SecurityException      if a security manager exists and its
   *             `checkRead` method denies read access to the
   *             file descriptor.
   * @see        SecurityManager#checkRead(java.io.FileDescriptor)
  */
  constructor(fdObj: FileDescriptor);
  /**
   * Reads a byte of data from this input stream. This method blocks
   * if no input is yet available.
   *
   * @return     the next byte of data, or `-1` if the end of the
   *             file is reached.
   * @throws     IOException  if an I/O error occurs.
  */
  read(): number;
  /**
   * Reads up to `b.length` bytes of data from this input
   * stream into an array of bytes. This method blocks until some input
   * is available.
   *
   * @param      b   the buffer into which the data is read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the file has been reached.
   * @throws     IOException  if an I/O error occurs.
  */
  read(b: number[]): number;
  /**
   * Reads up to `len` bytes of data from this input stream
   * into an array of bytes. If `len` is not zero, the method
   * blocks until some input is available; otherwise, no
   * bytes are read and `0` is returned.
   *
   * @param      b     the buffer into which the data is read.
   * @param      off   the start offset in the destination array `b`
   * @param      len   the maximum number of bytes read.
   * @return     the total number of bytes read into the buffer, or
   *             `-1` if there is no more data because the end of
   *             the file has been reached.
   * @throws     NullPointerException If `b` is `null`.
   * @throws     IndexOutOfBoundsException If `off` is negative,
   *             `len` is negative, or `len` is greater than
   *             `b.length - off`
   * @throws     IOException  if an I/O error occurs.
  */
  read(b: number[], off: number, len: number): number;
  /**
   * Skips over and discards `n` bytes of data from the
   * input stream.
   *
   * The `skip` method may, for a variety of
   * reasons, end up skipping over some smaller number of bytes,
   * possibly `0`. If `n` is negative, the method
   * will try to skip backwards. In case the backing file does not support
   * backward skip at its current position, an `IOException` is
   * thrown. The actual number of bytes skipped is returned. If it skips
   * forwards, it returns a positive value. If it skips backwards, it
   * returns a negative value.
   *
   * This method may skip more bytes than what are remaining in the
   * backing file. This produces no exception and the number of bytes skipped
   * may include some number of bytes that were beyond the EOF of the
   * backing file. Attempting to read from the stream after skipping past
   * the end will result in -1 indicating the end of the file.
   *
   * @param      n   the number of bytes to be skipped.
   * @return     the actual number of bytes skipped.
   * @throws     IOException  if n is negative, if the stream does not
   *             support seek, or if an I/O error occurs.
  */
  skip(n: number): number;
  /**
   * Returns an estimate of the number of remaining bytes that can be read (or
   * skipped over) from this input stream without blocking by the next
   * invocation of a method for this input stream. Returns 0 when the file
   * position is beyond EOF. The next invocation might be the same thread
   * or another thread. A single read or skip of this many bytes will not
   * block, but may read or skip fewer bytes.
   *
   *  In some cases, a non-blocking read (or skip) may appear to be
   * blocked when it is merely slow, for example when reading large
   * files over slow networks.
   *
   * @return     an estimate of the number of remaining bytes that can be read
   *             (or skipped over) from this input stream without blocking.
   * @throws     IOException  if this file input stream has been closed by calling
   *             `close` or an I/O error occurs.
  */
  available(): number;
  /**
   * Closes this file input stream and releases any system resources
   * associated with the stream.
   *
   *  If this stream has an associated channel then the channel is closed
   * as well.
   *
   * @apiNote
   * Overriding {@link #close} to perform cleanup actions is reliable
   * only when called directly or when called by try-with-resources.
   * Do not depend on finalization to invoke `close`;
   * finalization is not reliable and is deprecated.
   * If cleanup of native resources is needed, other mechanisms such as
   * {@linkplain java.lang.ref.Cleaner} should be used.
   *
   * @throws     IOException  if an I/O error occurs.
   *
   * @revised 1.4
  */
  close(): void;
  /**
   * Returns the `FileDescriptor`
   * object  that represents the connection to
   * the actual file in the file system being
   * used by this `FileInputStream`.
   *
   * @return     the file descriptor object associated with this stream.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FileDescriptor
  */
  getFD(): FileDescriptor;
  /**
   * Returns the unique {@link java.nio.channels.FileChannel FileChannel}
   * object associated with this file input stream.
   *
   *  The initial {@link java.nio.channels.FileChannel#position()
   * position} of the returned channel will be equal to the
   * number of bytes read from the file so far.  Reading bytes from this
   * stream will increment the channel's position.  Changing the channel's
   * position, either explicitly or by reading, will change this stream's
   * file position.
   *
   * @return  the file channel associated with this file input stream
   *
   * @since 1.4
  */
  getChannel(): FileChannel;
}
/**
 * Reads text from character files using a default buffer size. Decoding from bytes
 * to characters uses either a specified {@linkplain java.nio.charset.Charset charset}
 * or the platform's
 * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}.
 *
 * 
 * The `FileReader` is meant for reading streams of characters. For reading
 * streams of raw bytes, consider using a `FileInputStream`.
 *
 * @see InputStreamReader
 * @see FileInputStream
 *
 * @author      Mark Reinhold
 * @since       1.1
*/
export class FileReader extends InputStreamReader {
  /**
   * Creates a new `FileReader`, given the name of the file to read,
   * using the platform's
   * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}.
   *
   * @param      fileName the name of the file to read
   * @throws     FileNotFoundException  if the named file does not exist,
   *             is a directory rather than a regular file,
   *             or for some other reason cannot be opened for
   *             reading.
  */
  constructor(fileName: string);
  /**
   * Creates a new `FileReader`, given the `File` to read,
   * using the platform's
   * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}.
   *
   * @param      file the `File` to read
   * @throws     FileNotFoundException  if the file does not exist,
   *             is a directory rather than a regular file,
   *             or for some other reason cannot be opened for
   *             reading.
  */
  constructor(file: File);
  /**
   * Creates a new `FileReader`, given the `FileDescriptor` to read,
   * using the platform's
   * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}.
   *
   * @param fd the `FileDescriptor` to read
  */
  constructor(fd: FileDescriptor);
  /**
   * Creates a new `FileReader`, given the name of the file to read
   * and the {@linkplain java.nio.charset.Charset charset}.
   *
   * @param      fileName the name of the file to read
   * @param      charset the {@linkplain java.nio.charset.Charset charset}
   * @throws     IOException  if the named file does not exist,
   *             is a directory rather than a regular file,
   *             or for some other reason cannot be opened for
   *             reading.
   *
   * @since 11
  */
  constructor(fileName: string, charset: Charset);
  /**
   * Creates a new `FileReader`, given the `File` to read and
   * the {@linkplain java.nio.charset.Charset charset}.
   *
   * @param      file the `File` to read
   * @param      charset the {@linkplain java.nio.charset.Charset charset}
   * @throws     IOException  if the file does not exist,
   *             is a directory rather than a regular file,
   *             or for some other reason cannot be opened for
   *             reading.
   *
   * @since 11
  */
  constructor(file: File, charset: Charset);
}
/**
 * Constants written into the Object Serialization Stream.
 *
 * @since 1.1
*/
export class ObjectStreamConstants {
  /**
   * Magic number that is written to the stream header.
  */
  static readonly STREAM_MAGIC: number;
  /**
   * Version number that is written to the stream header.
  */
  static readonly STREAM_VERSION: number;
  /**
   * First tag value.
  */
  static readonly TC_BASE: number;
  /**
   * Null object reference.
  */
  static readonly TC_NULL: number;
  /**
   * Reference to an object already written into the stream.
  */
  static readonly TC_REFERENCE: number;
  /**
   * new Class Descriptor.
  */
  static readonly TC_CLASSDESC: number;
  /**
   * new Object.
  */
  static readonly TC_OBJECT: number;
  /**
   * new String.
  */
  static readonly TC_STRING: number;
  /**
   * new Array.
  */
  static readonly TC_ARRAY: number;
  /**
   * Reference to Class.
  */
  static readonly TC_CLASS: number;
  /**
   * Block of optional data. Byte following tag indicates number
   * of bytes in this block data.
  */
  static readonly TC_BLOCKDATA: number;
  /**
   * End of optional block data blocks for an object.
  */
  static readonly TC_ENDBLOCKDATA: number;
  /**
   * Reset stream context. All handles written into stream are reset.
  */
  static readonly TC_RESET: number;
  /**
   * long Block data. The long following the tag indicates the
   * number of bytes in this block data.
  */
  static readonly TC_BLOCKDATALONG: number;
  /**
   * Exception during write.
  */
  static readonly TC_EXCEPTION: number;
  /**
   * Long string.
  */
  static readonly TC_LONGSTRING: number;
  /**
   * new Proxy Class Descriptor.
  */
  static readonly TC_PROXYCLASSDESC: number;
  /**
   * new Enum constant.
   * @since 1.5
  */
  static readonly TC_ENUM: number;
  /**
   * Last tag value.
  */
  static readonly TC_MAX: number;
  /**
   * First wire handle to be assigned.
  */
  static readonly baseWireHandle: number;
  /**
   * Bit mask for ObjectStreamClass flag. Indicates a Serializable class
   * defines its own writeObject method.
  */
  static readonly SC_WRITE_METHOD: number;
  /**
   * Bit mask for ObjectStreamClass flag. Indicates Externalizable data
   * written in Block Data mode.
   * Added for PROTOCOL_VERSION_2.
   *
   * @see #PROTOCOL_VERSION_2
   * @since 1.2
  */
  static readonly SC_BLOCK_DATA: number;
  /**
   * Bit mask for ObjectStreamClass flag. Indicates class is Serializable.
  */
  static readonly SC_SERIALIZABLE: number;
  /**
   * Bit mask for ObjectStreamClass flag. Indicates class is Externalizable.
  */
  static readonly SC_EXTERNALIZABLE: number;
  /**
   * Bit mask for ObjectStreamClass flag. Indicates class is an enum type.
   * @since 1.5
  */
  static readonly SC_ENUM: number;
  /**
   * Enable substitution of one object for another during
   * serialization/deserialization.
   *
   * @see java.io.ObjectOutputStream#enableReplaceObject(boolean)
   * @see java.io.ObjectInputStream#enableResolveObject(boolean)
   * @since 1.2
  */
  static readonly SUBSTITUTION_PERMISSION: SerializablePermission;
  /**
   * Enable overriding of readObject and writeObject.
   *
   * @see java.io.ObjectOutputStream#writeObjectOverride(Object)
   * @see java.io.ObjectInputStream#readObjectOverride()
   * @since 1.2
  */
  static readonly SUBCLASS_IMPLEMENTATION_PERMISSION: SerializablePermission;
  /**
   * Enable setting the system-wide serial filter.
   *
   * @see java.io.ObjectInputFilter.Config#setSerialFilter(ObjectInputFilter)
   * @since 9
  */
  static readonly SERIAL_FILTER_PERMISSION: SerializablePermission;
  /**
   * A Stream Protocol Version. 
   *
   * All externalizable data is written in JDK 1.1 external data
   * format after calling this method. This version is needed to write
   * streams containing Externalizable data that can be read by
   * pre-JDK 1.1.6 JVMs.
   *
   * @see java.io.ObjectOutputStream#useProtocolVersion(int)
   * @since 1.2
  */
  static readonly PROTOCOL_VERSION_1: number;
  /**
   * A Stream Protocol Version. 
   *
   * This protocol is written by JVM 1.2.
   *
   * Externalizable data is written in block data mode and is
   * terminated with TC_ENDBLOCKDATA. Externalizable class descriptor
   * flags has SC_BLOCK_DATA enabled. JVM 1.1.6 and greater can
   * read this format change.
   *
   * Enables writing a nonSerializable class descriptor into the
   * stream. The serialVersionUID of a nonSerializable class is
   * set to 0L.
   *
   * @see java.io.ObjectOutputStream#useProtocolVersion(int)
   * @see #SC_BLOCK_DATA
   * @since 1.2
  */
  static readonly PROTOCOL_VERSION_2: number;
}
/**
 * A data output stream lets an application write primitive Java data
 * types to an output stream in a portable way. An application can
 * then use a data input stream to read the data back in.
 * 
 * A DataOutputStream is not safe for use by multiple concurrent
 * threads. If a DataOutputStream is to be used by more than one
 * thread then access to the data output stream should be controlled
 * by appropriate synchronization.
 *
 * @see     java.io.DataInputStream
 * @since   1.0
*/
export class DataOutputStream extends FilterOutputStream {
  /**
   * Creates a new data output stream to write data to the specified
   * underlying output stream. The counter `written` is
   * set to zero.
   *
   * @param   out   the underlying output stream, to be saved for later
   *                use.
   * @see     java.io.FilterOutputStream#out
  */
  constructor(out: OutputStream);
  /**
   * Writes the specified byte (the low eight bits of the argument
   * `b`) to the underlying output stream. If no exception
   * is thrown, the counter `written` is incremented by
   * `1`.
   * 
   * Implements the `write` method of `OutputStream`.
   *
   * @param      b   the `byte` to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#out
  */
  write(b: number): void;
  /**
   * Writes `len` bytes from the specified byte array
   * starting at offset `off` to the underlying output stream.
   * If no exception is thrown, the counter `written` is
   * incremented by `len`.
   *
   * @param      b     the data.
   * @param      off   the start offset in the data.
   * @param      len   the number of bytes to write.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#out
  */
  write(b: number[], off: number, len: number): void;
  /**
   * Flushes this data output stream. This forces any buffered output
   * bytes to be written out to the stream.
   * 
   * The `flush` method of `DataOutputStream`
   * calls the `flush` method of its underlying output stream.
   *
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#out
   * @see        java.io.OutputStream#flush()
  */
  flush(): void;
  /**
   * Writes a `boolean` to the underlying output stream as
   * a 1-byte value. The value `true` is written out as the
   * value `(byte)1`; the value `false` is
   * written out as the value `(byte)0`. If no exception is
   * thrown, the counter `written` is incremented by
   * `1`.
   *
   * @param      v   a `boolean` value to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#out
  */
  writeBoolean(v: boolean): void;
  /**
   * Writes out a `byte` to the underlying output stream as
   * a 1-byte value. If no exception is thrown, the counter
   * `written` is incremented by `1`.
   *
   * @param      v   a `byte` value to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#out
  */
  writeByte(v: number): void;
  /**
   * Writes a `short` to the underlying output stream as two
   * bytes, high byte first. If no exception is thrown, the counter
   * `written` is incremented by `2`.
   *
   * @param      v   a `short` to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#out
  */
  writeShort(v: number): void;
  /**
   * Writes a `char` to the underlying output stream as a
   * 2-byte value, high byte first. If no exception is thrown, the
   * counter `written` is incremented by `2`.
   *
   * @param      v   a `char` value to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#out
  */
  writeChar(v: number): void;
  /**
   * Writes an `int` to the underlying output stream as four
   * bytes, high byte first. If no exception is thrown, the counter
   * `written` is incremented by `4`.
   *
   * @param      v   an `int` to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#out
  */
  writeInt(v: number): void;
  /**
   * Writes a `long` to the underlying output stream as eight
   * bytes, high byte first. In no exception is thrown, the counter
   * `written` is incremented by `8`.
   *
   * @param      v   a `long` to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#out
  */
  writeLong(v: number): void;
  /**
   * Converts the float argument to an `int` using the
   * `floatToIntBits` method in class `Float`,
   * and then writes that `int` value to the underlying
   * output stream as a 4-byte quantity, high byte first. If no
   * exception is thrown, the counter `written` is
   * incremented by `4`.
   *
   * @param      v   a `float` value to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#out
   * @see        java.lang.Float#floatToIntBits(float)
  */
  writeFloat(v: number): void;
  /**
   * Converts the double argument to a `long` using the
   * `doubleToLongBits` method in class `Double`,
   * and then writes that `long` value to the underlying
   * output stream as an 8-byte quantity, high byte first. If no
   * exception is thrown, the counter `written` is
   * incremented by `8`.
   *
   * @param      v   a `double` value to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#out
   * @see        java.lang.Double#doubleToLongBits(double)
  */
  writeDouble(v: number): void;
  /**
   * Writes out the string to the underlying output stream as a
   * sequence of bytes. Each character in the string is written out, in
   * sequence, by discarding its high eight bits. If no exception is
   * thrown, the counter `written` is incremented by the
   * length of `s`.
   *
   * @param      s   a string of bytes to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#out
  */
  writeBytes(s: string): void;
  /**
   * Writes a string to the underlying output stream as a sequence of
   * characters. Each character is written to the data output stream as
   * if by the `writeChar` method. If no exception is
   * thrown, the counter `written` is incremented by twice
   * the length of `s`.
   *
   * @param      s   a `String` value to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.DataOutputStream#writeChar(int)
   * @see        java.io.FilterOutputStream#out
  */
  writeChars(s: string): void;
  /**
   * Writes a string to the underlying output stream using
   * modified UTF-8
   * encoding in a machine-independent manner.
   * 
   * First, two bytes are written to the output stream as if by the
   * `writeShort` method giving the number of bytes to
   * follow. This value is the number of bytes actually written out,
   * not the length of the string. Following the length, each character
   * of the string is output, in sequence, using the modified UTF-8 encoding
   * for the character. If no exception is thrown, the counter
   * `written` is incremented by the total number of
   * bytes written to the output stream. This will be at least two
   * plus the length of `str`, and at most two plus
   * thrice the length of `str`.
   *
   * @param      str   a string to be written.
   * @throws     UTFDataFormatException  if the modified UTF-8 encoding of
   *             `str` would exceed 65535 bytes in length
   * @throws     IOException  if some other I/O error occurs.
   * @see        #writeChars(String)
  */
  writeUTF(str: string): void;
  /**
   * Returns the current value of the counter `written`,
   * the number of bytes written to this data output stream so far.
   * If the counter overflows, it will be wrapped to Integer.MAX_VALUE.
   *
   * @return  the value of the `written` field.
   * @see     java.io.DataOutputStream#written
  */
  size(): number;
  /**
   * Writes `b.length` bytes to this output stream.
   * 
   * The `write` method of `FilterOutputStream`
   * calls its `write` method of three arguments with the
   * arguments `b`, `0`, and
   * `b.length`.
   * 
   * Note that this method does not call the one-argument
   * `write` method of its underlying output stream with
   * the single argument `b`.
   *
   * @param      b   the data to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#write(byte[], int, int)
  */
  write(b: number[]): void;
}
export interface DataOutputStream extends FilterOutputStream, DataOutput {}
export class FilePermission extends Permission {
  /**
   * Creates a new FilePermission object with the specified actions.
   * path is the pathname of a file or directory, and actions
   * contains a comma-separated list of the desired actions granted on the
   * file or directory. Possible actions are
   * "read", "write", "execute", "delete", and "readlink".
   *
   * A pathname that ends in "/*" (where "/" is
   * the file separator character, `File.separatorChar`)
   * indicates all the files and directories contained in that directory.
   * A pathname that ends with "/-" indicates (recursively) all files and
   * subdirectories contained in that directory. The special pathname
   * {@literal "<>"} matches any file.
   *
   * A pathname consisting of a single "*" indicates all the files
   * in the current directory, while a pathname consisting of a single "-"
   * indicates all the files in the current directory and
   * (recursively) all files and subdirectories contained in the current
   * directory.
   *
   * A pathname containing an empty string represents an empty path.
   *
   * @implNote In this implementation, the
   * {@systemProperty jdk.io.permissionsUseCanonicalPath} system property
   * dictates how the `path` argument is processed and stored.
   * 
   * If the value of the system property is set to `true`, `path`
   * is canonicalized and stored as a String object named `cpath`.
   * This means a relative path is converted to an absolute path, a Windows
   * DOS-style 8.3 path is expanded to a long path, and a symbolic link is
   * resolved to its target, etc.
   * 
   * If the value of the system property is set to `false`, `path`
   * is converted to a {@link java.nio.file.Path} object named `npath`
   * after {@link Path#normalize() normalization}. No canonicalization is
   * performed which means the underlying file system is not accessed.
   * If an {@link InvalidPathException} is thrown during the conversion,
   * this `FilePermission` will be labeled as invalid.
   * 
   * In either case, the "*" or "-" character at the end of a wildcard
   * `path` is removed before canonicalization or normalization.
   * It is stored in a separate wildcard flag field.
   * 
   * The default value of the `jdk.io.permissionsUseCanonicalPath`
   * system property is `false` in this implementation.
   * 
   * The value can also be set with a security property using the same name,
   * but setting a system property will override the security property value.
   *
   * @param path the pathname of the file/directory.
   * @param actions the action string.
   *
   * @throws IllegalArgumentException if actions is `null`, empty,
   *         malformed or contains an action other than the specified
   *         possible actions
  */
  constructor(path: string, actions: string);
  /**
   * Checks if this FilePermission object "implies" the specified permission.
   * 
   * More specifically, this method returns true if:
   * 
   *  p is an instanceof FilePermission,
   *  p's actions are a proper subset of this
   * object's actions, and
   *  p's pathname is implied by this object's
   *      pathname. For example, "/tmp/*" implies "/tmp/foo", since
   *      "/tmp/*" encompasses all files in the "/tmp" directory,
   *      including the one named "foo".
   * 
   * 
   * Precisely, a simple pathname implies another simple pathname
   * if and only if they are equal. A simple pathname never implies
   * a wildcard pathname. A wildcard pathname implies another wildcard
   * pathname if and only if all simple pathnames implied by the latter
   * are implied by the former. A wildcard pathname implies a simple
   * pathname if and only if
   * 
   *     if the wildcard flag is "*", the simple pathname's path
   *     must be right inside the wildcard pathname's path.
   *     if the wildcard flag is "-", the simple pathname's path
   *     must be recursively inside the wildcard pathname's path.
   * 
   * 
   * {@literal "<>"} implies every other pathname. No pathname,
   * except for {@literal "<>"} itself, implies
   * {@literal "<>"}.
   *
   * @implNote
   * If `jdk.io.permissionsUseCanonicalPath` is `true`, a
   * simple `cpath` is inside a wildcard `cpath` if and only if
   * after removing the base name (the last name in the pathname's name
   * sequence) from the former the remaining part is equal to the latter,
   * a simple `cpath` is recursively inside a wildcard `cpath`
   * if and only if the former starts with the latter.
   * 
   * If `jdk.io.permissionsUseCanonicalPath` is `false`, a
   * simple `npath` is inside a wildcard `npath` if and only if
   * ` simple_npath.relativize(wildcard_npath)` is exactly "..",
   * a simple `npath` is recursively inside a wildcard `npath`
   * if and only if `simple_npath.relativize(wildcard_npath)` is a
   * series of one or more "..". This means "/-" implies "/foo" but not "foo".
   * 
   * An invalid `FilePermission` does not imply any object except for
   * itself. An invalid `FilePermission` is not implied by any object
   * except for itself or a `FilePermission` on
   * {@literal "<>"} whose actions is a superset of this
   * invalid `FilePermission`. Even if two `FilePermission`
   * are created with the same invalid path, one does not imply the other.
   *
   * @param p the permission to check against.
   *
   * @return `true` if the specified permission is not
   *                  `null` and is implied by this object,
   *                  `false` otherwise.
  */
  implies(p: Permission): boolean;
  /**
   * Checks two FilePermission objects for equality. Checks that obj is
   * a FilePermission, and has the same pathname and actions as this object.
   *
   * @implNote More specifically, two pathnames are the same if and only if
   * they have the same wildcard flag and their `cpath`
   * (if `jdk.io.permissionsUseCanonicalPath` is `true`) or
   * `npath` (if `jdk.io.permissionsUseCanonicalPath`
   * is `false`) are equal. Or they are both {@literal "<>"}.
   * 
   * When `jdk.io.permissionsUseCanonicalPath` is `false`, an
   * invalid `FilePermission` does not equal to any object except
   * for itself, even if they are created using the same invalid path.
   *
   * @param obj the object we are testing for equality with this object.
   * @return `true` if obj is a FilePermission, and has the same
   *          pathname and actions as this FilePermission object,
   *          `false` otherwise.
  */
  equals(obj: any): boolean;
  /**
   * Returns the hash code value for this object.
   *
   * @return a hash code value for this object.
  */
  hashCode(): number;
  /**
   * Returns the "canonical string representation" of the actions.
   * That is, this method always returns present actions in the following order:
   * read, write, execute, delete, readlink. For example, if this FilePermission
   * object allows both write and read actions, a call to `getActions`
   * will return the string "read,write".
   *
   * @return the canonical string representation of the actions.
  */
  getActions(): string;
  /**
   * Returns a new PermissionCollection object for storing FilePermission
   * objects.
   * 
   * FilePermission objects must be stored in a manner that allows them
   * to be inserted into the collection in any order, but that also enables the
   * PermissionCollection `implies`
   * method to be implemented in an efficient (and consistent) manner.
   *
   * For example, if you have two FilePermissions:
   * 
   *   `"/tmp/-", "read"`
   *   `"/tmp/scratch/foo", "write"`
   * 
   *
   * and you are calling the `implies` method with the FilePermission:
   *
   *      *   "/tmp/scratch/foo", "read,write",
   * 
   *
   * then the `implies` function must
   * take into account both the "/tmp/-" and "/tmp/scratch/foo"
   * permissions, so the effective permission is "read,write",
   * and `implies` returns true. The "implies" semantics for
   * FilePermissions are handled properly by the PermissionCollection object
   * returned by this `newPermissionCollection` method.
   *
   * @return a new PermissionCollection object suitable for storing
   * FilePermissions.
  */
  newPermissionCollection(): PermissionCollection;
}
export interface FilePermission extends Permission, Serializable {}
export class PrintWriter extends Writer {
  /**
   * Creates a new PrintWriter, without automatic line flushing.
   *
   * @param  out        A character-output stream
  */
  constructor(out: Writer);
  /**
   * Creates a new PrintWriter.
   *
   * @param  out        A character-output stream
   * @param  autoFlush  A boolean; if true, the `println`,
   *                    `printf`, or `format` methods will
   *                    flush the output buffer
  */
  constructor(out: Writer, autoFlush: boolean);
  /**
   * Creates a new PrintWriter, without automatic line flushing, from an
   * existing OutputStream.  This convenience constructor creates the
   * necessary intermediate OutputStreamWriter, which will convert characters
   * into bytes using the default character encoding.
   *
   * @param  out        An output stream
   *
   * @see java.io.OutputStreamWriter#OutputStreamWriter(java.io.OutputStream)
  */
  constructor(out: OutputStream);
  /**
   * Creates a new PrintWriter from an existing OutputStream.  This
   * convenience constructor creates the necessary intermediate
   * OutputStreamWriter, which will convert characters into bytes using the
   * default character encoding.
   *
   * @param  out        An output stream
   * @param  autoFlush  A boolean; if true, the `println`,
   *                    `printf`, or `format` methods will
   *                    flush the output buffer
   *
   * @see java.io.OutputStreamWriter#OutputStreamWriter(java.io.OutputStream)
  */
  constructor(out: OutputStream, autoFlush: boolean);
  /**
   * Creates a new PrintWriter from an existing OutputStream.  This
   * convenience constructor creates the necessary intermediate
   * OutputStreamWriter, which will convert characters into bytes using the
   * specified charset.
   *
   * @param  out        An output stream
   * @param  autoFlush  A boolean; if true, the `println`,
   *                    `printf`, or `format` methods will
   *                    flush the output buffer
   * @param  charset
   *         A {@linkplain java.nio.charset.Charset charset}
   *
   * @since 10
  */
  constructor(out: OutputStream, autoFlush: boolean, charset: Charset);
  /**
   * Creates a new PrintWriter, without automatic line flushing, with the
   * specified file name.  This convenience constructor creates the necessary
   * intermediate {@link java.io.OutputStreamWriter OutputStreamWriter},
   * which will encode characters using the {@linkplain
   * java.nio.charset.Charset#defaultCharset() default charset} for this
   * instance of the Java virtual machine.
   *
   * @param  fileName
   *         The name of the file to use as the destination of this writer.
   *         If the file exists then it will be truncated to zero size;
   *         otherwise, a new file will be created.  The output will be
   *         written to the file and is buffered.
   *
   * @throws  FileNotFoundException
   *          If the given string does not denote an existing, writable
   *          regular file and a new regular file of that name cannot be
   *          created, or if some other error occurs while opening or
   *          creating the file
   *
   * @throws  SecurityException
   *          If a security manager is present and {@link
   *          SecurityManager#checkWrite checkWrite(fileName)} denies write
   *          access to the file
   *
   * @since  1.5
  */
  constructor(fileName: string);
  /**
   * Creates a new PrintWriter, without automatic line flushing, with the
   * specified file name and charset.  This convenience constructor creates
   * the necessary intermediate {@link java.io.OutputStreamWriter
   * OutputStreamWriter}, which will encode characters using the provided
   * charset.
   *
   * @param  fileName
   *         The name of the file to use as the destination of this writer.
   *         If the file exists then it will be truncated to zero size;
   *         otherwise, a new file will be created.  The output will be
   *         written to the file and is buffered.
   *
   * @param  csn
   *         The name of a supported {@linkplain java.nio.charset.Charset
   *         charset}
   *
   * @throws  FileNotFoundException
   *          If the given string does not denote an existing, writable
   *          regular file and a new regular file of that name cannot be
   *          created, or if some other error occurs while opening or
   *          creating the file
   *
   * @throws  SecurityException
   *          If a security manager is present and {@link
   *          SecurityManager#checkWrite checkWrite(fileName)} denies write
   *          access to the file
   *
   * @throws  UnsupportedEncodingException
   *          If the named charset is not supported
   *
   * @since  1.5
  */
  constructor(fileName: string, csn: string);
  /**
   * Creates a new PrintWriter, without automatic line flushing, with the
   * specified file name and charset.  This convenience constructor creates
   * the necessary intermediate {@link java.io.OutputStreamWriter
   * OutputStreamWriter}, which will encode characters using the provided
   * charset.
   *
   * @param  fileName
   *         The name of the file to use as the destination of this writer.
   *         If the file exists then it will be truncated to zero size;
   *         otherwise, a new file will be created.  The output will be
   *         written to the file and is buffered.
   *
   * @param  charset
   *         A {@linkplain java.nio.charset.Charset charset}
   *
   * @throws  IOException
   *          if an I/O error occurs while opening or creating the file
   *
   * @throws  SecurityException
   *          If a security manager is present and {@link
   *          SecurityManager#checkWrite checkWrite(fileName)} denies write
   *          access to the file
   *
   * @since  10
  */
  constructor(fileName: string, charset: Charset);
  /**
   * Creates a new PrintWriter, without automatic line flushing, with the
   * specified file.  This convenience constructor creates the necessary
   * intermediate {@link java.io.OutputStreamWriter OutputStreamWriter},
   * which will encode characters using the {@linkplain
   * java.nio.charset.Charset#defaultCharset() default charset} for this
   * instance of the Java virtual machine.
   *
   * @param  file
   *         The file to use as the destination of this writer.  If the file
   *         exists then it will be truncated to zero size; otherwise, a new
   *         file will be created.  The output will be written to the file
   *         and is buffered.
   *
   * @throws  FileNotFoundException
   *          If the given file object does not denote an existing, writable
   *          regular file and a new regular file of that name cannot be
   *          created, or if some other error occurs while opening or
   *          creating the file
   *
   * @throws  SecurityException
   *          If a security manager is present and {@link
   *          SecurityManager#checkWrite checkWrite(file.getPath())}
   *          denies write access to the file
   *
   * @since  1.5
  */
  constructor(file: File);
  /**
   * Creates a new PrintWriter, without automatic line flushing, with the
   * specified file and charset.  This convenience constructor creates the
   * necessary intermediate {@link java.io.OutputStreamWriter
   * OutputStreamWriter}, which will encode characters using the provided
   * charset.
   *
   * @param  file
   *         The file to use as the destination of this writer.  If the file
   *         exists then it will be truncated to zero size; otherwise, a new
   *         file will be created.  The output will be written to the file
   *         and is buffered.
   *
   * @param  csn
   *         The name of a supported {@linkplain java.nio.charset.Charset
   *         charset}
   *
   * @throws  FileNotFoundException
   *          If the given file object does not denote an existing, writable
   *          regular file and a new regular file of that name cannot be
   *          created, or if some other error occurs while opening or
   *          creating the file
   *
   * @throws  SecurityException
   *          If a security manager is present and {@link
   *          SecurityManager#checkWrite checkWrite(file.getPath())}
   *          denies write access to the file
   *
   * @throws  UnsupportedEncodingException
   *          If the named charset is not supported
   *
   * @since  1.5
  */
  constructor(file: File, csn: string);
  /**
   * Creates a new PrintWriter, without automatic line flushing, with the
   * specified file and charset.  This convenience constructor creates the
   * necessary intermediate {@link java.io.OutputStreamWriter
   * OutputStreamWriter}, which will encode characters using the provided
   * charset.
   *
   * @param  file
   *         The file to use as the destination of this writer.  If the file
   *         exists then it will be truncated to zero size; otherwise, a new
   *         file will be created.  The output will be written to the file
   *         and is buffered.
   *
   * @param  charset
   *         A {@linkplain java.nio.charset.Charset charset}
   *
   * @throws  IOException
   *          if an I/O error occurs while opening or creating the file
   *
   * @throws  SecurityException
   *          If a security manager is present and {@link
   *          SecurityManager#checkWrite checkWrite(file.getPath())}
   *          denies write access to the file
   *
   * @since  10
  */
  constructor(file: File, charset: Charset);
  /**
   * Flushes the stream.
   * @see #checkError()
  */
  flush(): void;
  /**
   * Closes the stream and releases any system resources associated
   * with it. Closing a previously closed stream has no effect.
   *
   * @see #checkError()
  */
  close(): void;
  /**
   * Flushes the stream if it's not closed and checks its error state.
   *
   * @return `true` if the print stream has encountered an error,
   *          either on the underlying output stream or during a format
   *          conversion.
  */
  checkError(): boolean;
  /**
   * Writes a single character.
   * @param c int specifying a character to be written.
  */
  write(c: number): void;
  /**
   * Writes A Portion of an array of characters.
   * @param buf Array of characters
   * @param off Offset from which to start writing characters
   * @param len Number of characters to write
   *
   * @throws  IndexOutOfBoundsException
   *          If the values of the `off` and `len` parameters
   *          cause the corresponding method of the underlying `Writer`
   *          to throw an `IndexOutOfBoundsException`
  */
  write(buf: string[], off: number, len: number): void;
  /**
   * Writes an array of characters.  This method cannot be inherited from the
   * Writer class because it must suppress I/O exceptions.
   * @param buf Array of characters to be written
  */
  write(buf: string[]): void;
  /**
   * Writes a portion of a string.
   * @param s A String
   * @param off Offset from which to start writing characters
   * @param len Number of characters to write
   *
   * @throws  IndexOutOfBoundsException
   *          If the values of the `off` and `len` parameters
   *          cause the corresponding method of the underlying `Writer`
   *          to throw an `IndexOutOfBoundsException`
  */
  write(s: string, off: number, len: number): void;
  /**
   * Writes a string.  This method cannot be inherited from the Writer class
   * because it must suppress I/O exceptions.
   * @param s String to be written
  */
  write(s: string): void;
  /**
   * Prints a boolean value.  The string produced by {@link
   * java.lang.String#valueOf(boolean)} is translated into bytes
   * according to the platform's default character encoding, and these bytes
   * are written in exactly the manner of the {@link
   * #write(int)} method.
   *
   * @param      b   The `boolean` to be printed
  */
  print(b: boolean): void;
  /**
   * Prints a character.  The character is translated into one or more bytes
   * according to the platform's default character encoding, and these bytes
   * are written in exactly the manner of the {@link
   * #write(int)} method.
   *
   * @param      c   The `char` to be printed
  */
  print(c: string): void;
  /**
   * Prints an integer.  The string produced by {@link
   * java.lang.String#valueOf(int)} is translated into bytes according
   * to the platform's default character encoding, and these bytes are
   * written in exactly the manner of the {@link #write(int)}
   * method.
   *
   * @param      i   The `int` to be printed
   * @see        java.lang.Integer#toString(int)
  */
  print(i: number): void;
  /**
   * Prints an array of characters.  The characters are converted into bytes
   * according to the platform's default character encoding, and these bytes
   * are written in exactly the manner of the {@link #write(int)}
   * method.
   *
   * @param      s   The array of chars to be printed
   *
   * @throws  NullPointerException  If `s` is `null`
  */
  print(s: string[]): void;
  /**
   * Prints an object.  The string produced by the {@link
   * java.lang.String#valueOf(Object)} method is translated into bytes
   * according to the platform's default character encoding, and these bytes
   * are written in exactly the manner of the {@link #write(int)}
   * method.
   *
   * @param      obj   The `Object` to be printed
   * @see        java.lang.Object#toString()
  */
  print(obj: any): void;
  /**
   * Terminates the current line by writing the line separator string.  The
   * line separator is {@link System#lineSeparator()} and is not necessarily
   * a single newline character (`'\n'`).
  */
  println(): void;
  /**
   * Prints a boolean value and then terminates the line.  This method behaves
   * as though it invokes {@link #print(boolean)} and then
   * {@link #println()}.
   *
   * @param x the `boolean` value to be printed
  */
  println(x: boolean): void;
  /**
   * Prints a character and then terminates the line.  This method behaves as
   * though it invokes {@link #print(char)} and then {@link
   * #println()}.
   *
   * @param x the `char` value to be printed
  */
  println(x: string): void;
  /**
   * Prints an integer and then terminates the line.  This method behaves as
   * though it invokes {@link #print(int)} and then {@link
   * #println()}.
   *
   * @param x the `int` value to be printed
  */
  println(x: number): void;
  /**
   * Prints an array of characters and then terminates the line.  This method
   * behaves as though it invokes {@link #print(char[])} and then
   * {@link #println()}.
   *
   * @param x the array of `char` values to be printed
  */
  println(x: string[]): void;
  /**
   * Prints an Object and then terminates the line.  This method calls
   * at first String.valueOf(x) to get the printed object's string value,
   * then behaves as
   * though it invokes {@link #print(String)} and then
   * {@link #println()}.
   *
   * @param x  The `Object` to be printed.
  */
  println(x: any): void;
  /**
   * A convenience method to write a formatted string to this writer using
   * the specified format string and arguments.  If automatic flushing is
   * enabled, calls to this method will flush the output buffer.
   *
   *  An invocation of this method of the form
   * `out.printf(format, args)`
   * behaves in exactly the same way as the invocation
   *
   * {@code
   *     out.format(format, args)
   * }
   *
   * @param  format
   *         A format string as described in Format string syntax.
   *
   * @param  args
   *         Arguments referenced by the format specifiers in the format
   *         string.  If there are more arguments than format specifiers, the
   *         extra arguments are ignored.  The number of arguments is
   *         variable and may be zero.  The maximum number of arguments is
   *         limited by the maximum dimension of a Java array as defined by
   *         The Java Virtual Machine Specification.
   *         The behaviour on a
   *         `null` argument depends on the conversion.
   *
   * @throws  java.util.IllegalFormatException
   *          If a format string contains an illegal syntax, a format
   *          specifier that is incompatible with the given arguments,
   *          insufficient arguments given the format string, or other
   *          illegal conditions.  For specification of all possible
   *          formatting errors, see the Details section of the
   *          formatter class specification.
   *
   * @throws  NullPointerException
   *          If the `format` is `null`
   *
   * @return  This writer
   *
   * @since  1.5
  */
  printf(format: string, ...args: any[]): PrintWriter;
  /**
   * A convenience method to write a formatted string to this writer using
   * the specified format string and arguments.  If automatic flushing is
   * enabled, calls to this method will flush the output buffer.
   *
   *  An invocation of this method of the form
   * `out.printf(l, format, args)`
   * behaves in exactly the same way as the invocation
   *
   * {@code
   *     out.format(l, format, args)
   * }
   *
   * @param  l
   *         The {@linkplain java.util.Locale locale} to apply during
   *         formatting.  If `l` is `null` then no localization
   *         is applied.
   *
   * @param  format
   *         A format string as described in Format string syntax.
   *
   * @param  args
   *         Arguments referenced by the format specifiers in the format
   *         string.  If there are more arguments than format specifiers, the
   *         extra arguments are ignored.  The number of arguments is
   *         variable and may be zero.  The maximum number of arguments is
   *         limited by the maximum dimension of a Java array as defined by
   *         The Java Virtual Machine Specification.
   *         The behaviour on a
   *         `null` argument depends on the conversion.
   *
   * @throws  java.util.IllegalFormatException
   *          If a format string contains an illegal syntax, a format
   *          specifier that is incompatible with the given arguments,
   *          insufficient arguments given the format string, or other
   *          illegal conditions.  For specification of all possible
   *          formatting errors, see the Details section of the
   *          formatter class specification.
   *
   * @throws  NullPointerException
   *          If the `format` is `null`
   *
   * @return  This writer
   *
   * @since  1.5
  */
  printf(l: Locale, format: string, ...args: any[]): PrintWriter;
  /**
   * Writes a formatted string to this writer using the specified format
   * string and arguments.  If automatic flushing is enabled, calls to this
   * method will flush the output buffer.
   *
   *  The locale always used is the one returned by {@link
   * java.util.Locale#getDefault() Locale.getDefault()}, regardless of any
   * previous invocations of other formatting methods on this object.
   *
   * @param  format
   *         A format string as described in Format string syntax.
   *
   * @param  args
   *         Arguments referenced by the format specifiers in the format
   *         string.  If there are more arguments than format specifiers, the
   *         extra arguments are ignored.  The number of arguments is
   *         variable and may be zero.  The maximum number of arguments is
   *         limited by the maximum dimension of a Java array as defined by
   *         The Java Virtual Machine Specification.
   *         The behaviour on a
   *         `null` argument depends on the conversion.
   *
   * @throws  java.util.IllegalFormatException
   *          If a format string contains an illegal syntax, a format
   *          specifier that is incompatible with the given arguments,
   *          insufficient arguments given the format string, or other
   *          illegal conditions.  For specification of all possible
   *          formatting errors, see the Details section of the
   *          Formatter class specification.
   *
   * @throws  NullPointerException
   *          If the `format` is `null`
   *
   * @return  This writer
   *
   * @since  1.5
  */
  format(format: string, ...args: any[]): PrintWriter;
  /**
   * Writes a formatted string to this writer using the specified format
   * string and arguments.  If automatic flushing is enabled, calls to this
   * method will flush the output buffer.
   *
   * @param  l
   *         The {@linkplain java.util.Locale locale} to apply during
   *         formatting.  If `l` is `null` then no localization
   *         is applied.
   *
   * @param  format
   *         A format string as described in Format string syntax.
   *
   * @param  args
   *         Arguments referenced by the format specifiers in the format
   *         string.  If there are more arguments than format specifiers, the
   *         extra arguments are ignored.  The number of arguments is
   *         variable and may be zero.  The maximum number of arguments is
   *         limited by the maximum dimension of a Java array as defined by
   *         The Java Virtual Machine Specification.
   *         The behaviour on a
   *         `null` argument depends on the conversion.
   *
   * @throws  java.util.IllegalFormatException
   *          If a format string contains an illegal syntax, a format
   *          specifier that is incompatible with the given arguments,
   *          insufficient arguments given the format string, or other
   *          illegal conditions.  For specification of all possible
   *          formatting errors, see the Details section of the
   *          formatter class specification.
   *
   * @throws  NullPointerException
   *          If the `format` is `null`
   *
   * @return  This writer
   *
   * @since  1.5
  */
  format(l: Locale, format: string, ...args: any[]): PrintWriter;
  /**
   * Appends the specified character sequence to this writer.
   *
   *  An invocation of this method of the form `out.append(csq)`
   * behaves in exactly the same way as the invocation
   *
   * {@code
   *     out.write(csq.toString())
   * }
   *
   *  Depending on the specification of `toString` for the
   * character sequence `csq`, the entire sequence may not be
   * appended. For instance, invoking the `toString` method of a
   * character buffer will return a subsequence whose content depends upon
   * the buffer's position and limit.
   *
   * @param  csq
   *         The character sequence to append.  If `csq` is
   *         `null`, then the four characters `"null"` are
   *         appended to this writer.
   *
   * @return  This writer
   *
   * @since  1.5
  */
  append(csq: CharSequence): PrintWriter;
  /**
   * Appends a subsequence of the specified character sequence to this writer.
   *
   *  An invocation of this method of the form
   * `out.append(csq, start, end)`
   * when `csq` is not `null`, behaves in
   * exactly the same way as the invocation
   *
   * {@code
   *     out.write(csq.subSequence(start, end).toString())
   * }
   *
   * @param  csq
   *         The character sequence from which a subsequence will be
   *         appended.  If `csq` is `null`, then characters
   *         will be appended as if `csq` contained the four
   *         characters `"null"`.
   *
   * @param  start
   *         The index of the first character in the subsequence
   *
   * @param  end
   *         The index of the character following the last character in the
   *         subsequence
   *
   * @return  This writer
   *
   * @throws  IndexOutOfBoundsException
   *          If `start` or `end` are negative, `start`
   *          is greater than `end`, or `end` is greater than
   *          `csq.length()`
   *
   * @since  1.5
  */
  append(csq: CharSequence, start: number, end: number): PrintWriter;
  /**
   * Appends the specified character to this writer.
   *
   *  An invocation of this method of the form `out.append(c)`
   * behaves in exactly the same way as the invocation
   *
   * {@code
   *     out.write(c)
   * }
   *
   * @param  c
   *         The 16-bit character to append
   *
   * @return  This writer
   *
   * @since 1.5
  */
  append(c: string): PrintWriter;
}
/**
 * Only the identity of the class of an Externalizable instance is
 * written in the serialization stream and it is the responsibility
 * of the class to save and restore the contents of its instances.
 *
 * The writeExternal and readExternal methods of the Externalizable
 * interface are implemented by a class to give the class complete
 * control over the format and contents of the stream for an object
 * and its supertypes. These methods must explicitly
 * coordinate with the supertype to save its state. These methods supersede
 * customized implementations of writeObject and readObject methods.
 *
 * Object Serialization uses the Serializable and Externalizable
 * interfaces.  Object persistence mechanisms can use them as well.  Each
 * object to be stored is tested for the Externalizable interface. If
 * the object supports Externalizable, the writeExternal method is called. If the
 * object does not support Externalizable and does implement
 * Serializable, the object is saved using
 * ObjectOutputStream.  When an Externalizable object is
 * reconstructed, an instance is created using the public no-arg
 * constructor, then the readExternal method called.  Serializable
 * objects are restored by reading them from an ObjectInputStream.
 *
 * An Externalizable instance can designate a substitution object via
 * the writeReplace and readResolve methods documented in the Serializable
 * interface.
 *
 * @see java.io.ObjectOutputStream
 * @see java.io.ObjectInputStream
 * @see java.io.ObjectOutput
 * @see java.io.ObjectInput
 * @see java.io.Serializable
 * @since   1.1
*/
export class Externalizable extends Serializable {
  /**
   * The object implements the writeExternal method to save its contents
   * by calling the methods of DataOutput for its primitive values or
   * calling the writeObject method of ObjectOutput for objects, strings,
   * and arrays.
   *
   * @serialData Overriding methods should use this tag to describe
   *             the data layout of this Externalizable object.
   *             List the sequence of element types and, if possible,
   *             relate the element to a public/protected field and/or
   *             method of this Externalizable class.
   *
   * @param     out the stream to write the object to
   * @throws    IOException Includes any I/O exceptions that may occur
  */
  writeExternal(out: ObjectOutput): void;
  /**
   * The object implements the readExternal method to restore its
   * contents by calling the methods of DataInput for primitive
   * types and readObject for objects, strings and arrays.  The
   * readExternal method must read the values in the same sequence
   * and with the same types as were written by writeExternal.
   *
   * @param     in the stream to read data from in order to restore the object
   * @throws    IOException if I/O errors occur
   * @throws    ClassNotFoundException If the class for an object being
   *            restored cannot be found.
  */
  readExternal(in_: ObjectInput): void;
}
/**
 * Callback interface to allow validation of objects within a graph.
 * Allows an object to be called when a complete graph of objects has
 * been deserialized.
 *
 * @see     ObjectInputStream
 * @see     ObjectInputStream#registerValidation(java.io.ObjectInputValidation, int)
 * @since   1.1
*/
export class ObjectInputValidation {
  /**
   * Validates the object.
   *
   * @throws    InvalidObjectException If the object cannot validate itself.
  */
  validateObject(): void;
}
/**
 * This class is the superclass of all classes that filter output
 * streams. These streams sit on top of an already existing output
 * stream (the underlying output stream) which it uses as its
 * basic sink of data, but possibly transforming the data along the
 * way or providing additional functionality.
 * 
 * The class `FilterOutputStream` itself simply overrides
 * all methods of `OutputStream` with versions that pass
 * all requests to the underlying output stream. Subclasses of
 * `FilterOutputStream` may further override some of these
 * methods as well as provide additional methods and fields.
 *
 * @author  Jonathan Payne
 * @since   1.0
*/
export class FilterOutputStream extends OutputStream {
  /**
   * Creates an output stream filter built on top of the specified
   * underlying output stream.
   *
   * @param   out   the underlying output stream to be assigned to
   *                the field `this.out` for later use, or
   *                `null` if this instance is to be
   *                created without an underlying stream.
  */
  constructor(out: OutputStream);
  /**
   * Writes the specified `byte` to this output stream.
   * 
   * The `write` method of `FilterOutputStream`
   * calls the `write` method of its underlying output stream,
   * that is, it performs `out.write(b)`.
   * 
   * Implements the abstract `write` method of `OutputStream`.
   *
   * @param      b   the `byte`.
   * @throws     IOException  if an I/O error occurs.
  */
  write(b: number): void;
  /**
   * Writes `b.length` bytes to this output stream.
   * 
   * The `write` method of `FilterOutputStream`
   * calls its `write` method of three arguments with the
   * arguments `b`, `0`, and
   * `b.length`.
   * 
   * Note that this method does not call the one-argument
   * `write` method of its underlying output stream with
   * the single argument `b`.
   *
   * @param      b   the data to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#write(byte[], int, int)
  */
  write(b: number[]): void;
  /**
   * Writes `len` bytes from the specified
   * `byte` array starting at offset `off` to
   * this output stream.
   * 
   * The `write` method of `FilterOutputStream`
   * calls the `write` method of one argument on each
   * `byte` to output.
   * 
   * Note that this method does not call the `write` method
   * of its underlying output stream with the same arguments. Subclasses
   * of `FilterOutputStream` should provide a more efficient
   * implementation of this method.
   *
   * @param      b     the data.
   * @param      off   the start offset in the data.
   * @param      len   the number of bytes to write.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#write(int)
  */
  write(b: number[], off: number, len: number): void;
  /**
   * Flushes this output stream and forces any buffered output bytes
   * to be written out to the stream.
   * 
   * The `flush` method of `FilterOutputStream`
   * calls the `flush` method of its underlying output stream.
   *
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#out
  */
  flush(): void;
  /**
   * Closes this output stream and releases any system resources
   * associated with the stream.
   * 
   * When not already closed, the `close` method of `     * FilterOutputStream` calls its `flush` method, and then
   * calls the `close` method of its underlying output stream.
   *
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#flush()
   * @see        java.io.FilterOutputStream#out
  */
  close(): void;
}
export class Reader extends Readable {
  /**
   * Returns a new `Reader` that reads no characters. The returned
   * stream is initially open.  The stream is closed by calling the
   * `close()` method.  Subsequent calls to `close()` have no
   * effect.
   *
   *  While the stream is open, the `read()`, `read(char[])`,
   * `read(char[], int, int)`, `read(CharBuffer)`, `     * ready()`, `skip(long)`, and `transferTo()` methods all
   * behave as if end of stream has been reached. After the stream has been
   * closed, these methods all throw `IOException`.
   *
   *  The `markSupported()` method returns `false`.  The
   * `mark()` and `reset()` methods throw an `IOException`.
   *
   *  The {@link #lock object} used to synchronize operations on the
   * returned `Reader` is not specified.
   *
   * @return a `Reader` which reads no characters
   *
   * @since 11
  */
  static nullReader(): Reader;
  /**
   * Attempts to read characters into the specified character buffer.
   * The buffer is used as a repository of characters as-is: the only
   * changes made are the results of a put operation. No flipping or
   * rewinding of the buffer is performed.
   *
   * @param target the buffer to read characters into
   * @return The number of characters added to the buffer, or
   *         -1 if this source of characters is at its end
   * @throws IOException if an I/O error occurs
   * @throws NullPointerException if target is null
   * @throws java.nio.ReadOnlyBufferException if target is a read only buffer
   * @since 1.5
  */
  read(target: CharBuffer): number;
  /**
   * Reads a single character.  This method will block until a character is
   * available, an I/O error occurs, or the end of the stream is reached.
   *
   *  Subclasses that intend to support efficient single-character input
   * should override this method.
   *
   * @return     The character read, as an integer in the range 0 to 65535
   *             (`0x00-0xffff`), or -1 if the end of the stream has
   *             been reached
   *
   * @throws     IOException  If an I/O error occurs
  */
  read(): number;
  /**
   * Reads characters into an array.  This method will block until some input
   * is available, an I/O error occurs, or the end of the stream is reached.
   *
   * @param       cbuf  Destination buffer
   *
   * @return      The number of characters read, or -1
   *              if the end of the stream
   *              has been reached
   *
   * @throws      IOException  If an I/O error occurs
  */
  read(cbuf: string[]): number;
  /**
   * Reads characters into a portion of an array.  This method will block
   * until some input is available, an I/O error occurs, or the end of the
   * stream is reached.
   *
   * @param      cbuf  Destination buffer
   * @param      off   Offset at which to start storing characters
   * @param      len   Maximum number of characters to read
   *
   * @return     The number of characters read, or -1 if the end of the
   *             stream has been reached
   *
   * @throws     IOException  If an I/O error occurs
   * @throws     IndexOutOfBoundsException
   *             If `off` is negative, or `len` is negative,
   *             or `len` is greater than `cbuf.length - off`
  */
  read(cbuf: string[], off: number, len: number): number;
  /**
   * Skips characters.  This method will block until some characters are
   * available, an I/O error occurs, or the end of the stream is reached.
   *
   * @param  n  The number of characters to skip
   *
   * @return    The number of characters actually skipped
   *
   * @throws     IllegalArgumentException  If `n` is negative.
   * @throws     IOException  If an I/O error occurs
  */
  skip(n: number): number;
  /**
   * Tells whether this stream is ready to be read.
   *
   * @return True if the next read() is guaranteed not to block for input,
   * false otherwise.  Note that returning false does not guarantee that the
   * next read will block.
   *
   * @throws     IOException  If an I/O error occurs
  */
  ready(): boolean;
  /**
   * Tells whether this stream supports the mark() operation. The default
   * implementation always returns false. Subclasses should override this
   * method.
   *
   * @return true if and only if this stream supports the mark operation.
  */
  markSupported(): boolean;
  /**
   * Marks the present position in the stream.  Subsequent calls to reset()
   * will attempt to reposition the stream to this point.  Not all
   * character-input streams support the mark() operation.
   *
   * @param  readAheadLimit  Limit on the number of characters that may be
   *                         read while still preserving the mark.  After
   *                         reading this many characters, attempting to
   *                         reset the stream may fail.
   *
   * @throws     IOException  If the stream does not support mark(),
   *                          or if some other I/O error occurs
  */
  mark(readAheadLimit: number): void;
  /**
   * Resets the stream.  If the stream has been marked, then attempt to
   * reposition it at the mark.  If the stream has not been marked, then
   * attempt to reset it in some way appropriate to the particular stream,
   * for example by repositioning it to its starting point.  Not all
   * character-input streams support the reset() operation, and some support
   * reset() without supporting mark().
   *
   * @throws     IOException  If the stream has not been marked,
   *                          or if the mark has been invalidated,
   *                          or if the stream does not support reset(),
   *                          or if some other I/O error occurs
  */
  reset(): void;
  /**
   * Closes the stream and releases any system resources associated with
   * it.  Once the stream has been closed, further read(), ready(),
   * mark(), reset(), or skip() invocations will throw an IOException.
   * Closing a previously closed stream has no effect.
   *
   * @throws     IOException  If an I/O error occurs
  */
  close(): void;
  /**
   * Reads all characters from this reader and writes the characters to the
   * given writer in the order that they are read. On return, this reader
   * will be at end of the stream. This method does not close either reader
   * or writer.
   * 
   * This method may block indefinitely reading from the reader, or
   * writing to the writer. The behavior for the case where the reader
   * and/or writer is asynchronously closed, or the thread
   * interrupted during the transfer, is highly reader and writer
   * specific, and therefore not specified.
   * 
   * If an I/O error occurs reading from the reader or writing to the
   * writer, then it may do so after some characters have been read or
   * written. Consequently the reader may not be at end of the stream and
   * one, or both, streams may be in an inconsistent state. It is strongly
   * recommended that both streams be promptly closed if an I/O error occurs.
   *
   * @param  out the writer, non-null
   * @return the number of characters transferred
   * @throws IOException if an I/O error occurs when reading or writing
   * @throws NullPointerException if `out` is `null`
   *
   * @since 10
  */
  transferTo(out: Writer): number;
}
export interface Reader extends Readable, Closeable {}
/**
 * Signals that an I/O operation has been interrupted. An
 * `InterruptedIOException` is thrown to indicate that an
 * input or output transfer has been terminated because the thread
 * performing it was interrupted. The field {@link #bytesTransferred}
 * indicates how many bytes were successfully transferred before
 * the interruption occurred.
 *
 * @see     java.io.InputStream
 * @see     java.io.OutputStream
 * @see     java.lang.Thread#interrupt()
 * @since   1.0
*/
export class InterruptedIOException extends IOException {
  /**
   * Constructs an `InterruptedIOException` with
   * `null` as its error detail message.
  */
  constructor();
  /**
   * Constructs an `InterruptedIOException` with the
   * specified detail message. The string `s` can be
   * retrieved later by the
   * {@link java.lang.Throwable#getMessage}
   * method of class `java.lang.Throwable`.
   *
   * @param   s   the detail message.
  */
  constructor(s: string);
  /**
   * Reports how many bytes had been transferred as part of the I/O
   * operation before it was interrupted.
   *
   * @serial
  */
  bytesTransferred: number;
}
/**
 * The class implements a buffered output stream. By setting up such
 * an output stream, an application can write bytes to the underlying
 * output stream without necessarily causing a call to the underlying
 * system for each byte written.
 *
 * @author  Arthur van Hoff
 * @since   1.0
*/
export class BufferedOutputStream extends FilterOutputStream {
  /**
   * Creates a new buffered output stream to write data to the
   * specified underlying output stream.
   *
   * @param   out   the underlying output stream.
  */
  constructor(out: OutputStream);
  /**
   * Creates a new buffered output stream to write data to the
   * specified underlying output stream with the specified buffer
   * size.
   *
   * @param   out    the underlying output stream.
   * @param   size   the buffer size.
   * @throws  IllegalArgumentException if size <= 0.
  */
  constructor(out: OutputStream, size: number);
  /**
   * Writes the specified byte to this buffered output stream.
   *
   * @param      b   the byte to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  write(b: number): void;
  /**
   * Writes `len` bytes from the specified byte array
   * starting at offset `off` to this buffered output stream.
   *
   *  Ordinarily this method stores bytes from the given array into this
   * stream's buffer, flushing the buffer to the underlying output stream as
   * needed.  If the requested length is at least as large as this stream's
   * buffer, however, then this method will flush the buffer and write the
   * bytes directly to the underlying output stream.  Thus redundant
   * `BufferedOutputStream`s will not copy data unnecessarily.
   *
   * @param      b     the data.
   * @param      off   the start offset in the data.
   * @param      len   the number of bytes to write.
   * @throws     IOException  if an I/O error occurs.
  */
  write(b: number[], off: number, len: number): void;
  /**
   * Flushes this buffered output stream. This forces any buffered
   * output bytes to be written out to the underlying output stream.
   *
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#out
  */
  flush(): void;
  /**
   * Writes `b.length` bytes to this output stream.
   * 
   * The `write` method of `FilterOutputStream`
   * calls its `write` method of three arguments with the
   * arguments `b`, `0`, and
   * `b.length`.
   * 
   * Note that this method does not call the one-argument
   * `write` method of its underlying output stream with
   * the single argument `b`.
   *
   * @param      b   the data to be written.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FilterOutputStream#write(byte[], int, int)
  */
  write(b: number[]): void;
}
/**
 * An ObjectOutputStream writes primitive data types and graphs of Java objects
 * to an OutputStream.  The objects can be read (reconstituted) using an
 * ObjectInputStream.  Persistent storage of objects can be accomplished by
 * using a file for the stream.  If the stream is a network socket stream, the
 * objects can be reconstituted on another host or in another process.
 *
 * Only objects that support the java.io.Serializable interface can be
 * written to streams.  The class of each serializable object is encoded
 * including the class name and signature of the class, the values of the
 * object's fields and arrays, and the closure of any other objects referenced
 * from the initial objects.
 *
 * The method writeObject is used to write an object to the stream.  Any
 * object, including Strings and arrays, is written with writeObject. Multiple
 * objects or primitives can be written to the stream.  The objects must be
 * read back from the corresponding ObjectInputstream with the same types and
 * in the same order as they were written.
 *
 * Primitive data types can also be written to the stream using the
 * appropriate methods from DataOutput. Strings can also be written using the
 * writeUTF method.
 *
 * The default serialization mechanism for an object writes the class of the
 * object, the class signature, and the values of all non-transient and
 * non-static fields.  References to other objects (except in transient or
 * static fields) cause those objects to be written also. Multiple references
 * to a single object are encoded using a reference sharing mechanism so that
 * graphs of objects can be restored to the same shape as when the original was
 * written.
 *
 * For example to write an object that can be read by the example in
 * ObjectInputStream:
 * 
 *  *      FileOutputStream fos = new FileOutputStream("t.tmp");
 *      ObjectOutputStream oos = new ObjectOutputStream(fos);
 *
 *      oos.writeInt(12345);
 *      oos.writeObject("Today");
 *      oos.writeObject(new Date());
 *
 *      oos.close();
 * 
 *
 * Classes that require special handling during the serialization and
 * deserialization process must implement special methods with these exact
 * signatures:
 * 
 *  * private void readObject(java.io.ObjectInputStream stream)
 *     throws IOException, ClassNotFoundException;
 * private void writeObject(java.io.ObjectOutputStream stream)
 *     throws IOException
 * private void readObjectNoData()
 *     throws ObjectStreamException;
 * 
 *
 * The writeObject method is responsible for writing the state of the object
 * for its particular class so that the corresponding readObject method can
 * restore it.  The method does not need to concern itself with the state
 * belonging to the object's superclasses or subclasses.  State is saved by
 * writing the individual fields to the ObjectOutputStream using the
 * writeObject method or by using the methods for primitive data types
 * supported by DataOutput.
 *
 * Serialization does not write out the fields of any object that does not
 * implement the java.io.Serializable interface.  Subclasses of Objects that
 * are not serializable can be serializable. In this case the non-serializable
 * class must have a no-arg constructor to allow its fields to be initialized.
 * In this case it is the responsibility of the subclass to save and restore
 * the state of the non-serializable class. It is frequently the case that the
 * fields of that class are accessible (public, package, or protected) or that
 * there are get and set methods that can be used to restore the state.
 *
 * Serialization of an object can be prevented by implementing writeObject
 * and readObject methods that throw the NotSerializableException.  The
 * exception will be caught by the ObjectOutputStream and abort the
 * serialization process.
 *
 * Implementing the Externalizable interface allows the object to assume
 * complete control over the contents and format of the object's serialized
 * form.  The methods of the Externalizable interface, writeExternal and
 * readExternal, are called to save and restore the objects state.  When
 * implemented by a class they can write and read their own state using all of
 * the methods of ObjectOutput and ObjectInput.  It is the responsibility of
 * the objects to handle any versioning that occurs.
 *
 * Enum constants are serialized differently than ordinary serializable or
 * externalizable objects.  The serialized form of an enum constant consists
 * solely of its name; field values of the constant are not transmitted.  To
 * serialize an enum constant, ObjectOutputStream writes the string returned by
 * the constant's name method.  Like other serializable or externalizable
 * objects, enum constants can function as the targets of back references
 * appearing subsequently in the serialization stream.  The process by which
 * enum constants are serialized cannot be customized; any class-specific
 * writeObject and writeReplace methods defined by enum types are ignored
 * during serialization.  Similarly, any serialPersistentFields or
 * serialVersionUID field declarations are also ignored--all enum types have a
 * fixed serialVersionUID of 0L.
 *
 * Primitive data, excluding serializable fields and externalizable data, is
 * written to the ObjectOutputStream in block-data records. A block data record
 * is composed of a header and data. The block data header consists of a marker
 * and the number of bytes to follow the header.  Consecutive primitive data
 * writes are merged into one block-data record.  The blocking factor used for
 * a block-data record will be 1024 bytes.  Each block-data record will be
 * filled up to 1024 bytes, or be written whenever there is a termination of
 * block-data mode.  Calls to the ObjectOutputStream methods writeObject,
 * defaultWriteObject and writeFields initially terminate any existing
 * block-data record.
 *
 * Records are serialized differently than ordinary serializable or externalizable
 * objects, see record serialization.
 *
 * @author      Mike Warres
 * @author      Roger Riggs
 * @see java.io.DataOutput
 * @see java.io.ObjectInputStream
 * @see java.io.Serializable
 * @see java.io.Externalizable
 * @see 
 *      Java Object Serialization Specification, Section 2, "Object Output Classes"
 * @since       1.1
*/
export class ObjectOutputStream extends OutputStream {
  /**
   * Creates an ObjectOutputStream that writes to the specified OutputStream.
   * This constructor writes the serialization stream header to the
   * underlying stream; callers may wish to flush the stream immediately to
   * ensure that constructors for receiving ObjectInputStreams will not block
   * when reading the header.
   *
   * If a security manager is installed, this constructor will check for
   * the "enableSubclassImplementation" SerializablePermission when invoked
   * directly or indirectly by the constructor of a subclass which overrides
   * the ObjectOutputStream.putFields or ObjectOutputStream.writeUnshared
   * methods.
   *
   * @param   out output stream to write to
   * @throws  IOException if an I/O error occurs while writing stream header
   * @throws  SecurityException if untrusted subclass illegally overrides
   *          security-sensitive methods
   * @throws  NullPointerException if `out` is `null`
   * @since   1.4
   * @see     ObjectOutputStream#ObjectOutputStream()
   * @see     ObjectOutputStream#putFields()
   * @see     ObjectInputStream#ObjectInputStream(InputStream)
  */
  constructor(out: OutputStream);
  /**
   * Specify stream protocol version to use when writing the stream.
   *
   * This routine provides a hook to enable the current version of
   * Serialization to write in a format that is backwards compatible to a
   * previous version of the stream format.
   *
   * Every effort will be made to avoid introducing additional
   * backwards incompatibilities; however, sometimes there is no
   * other alternative.
   *
   * @param   version use ProtocolVersion from java.io.ObjectStreamConstants.
   * @throws  IllegalStateException if called after any objects
   *          have been serialized.
   * @throws  IllegalArgumentException if invalid version is passed in.
   * @throws  IOException if I/O errors occur
   * @see java.io.ObjectStreamConstants#PROTOCOL_VERSION_1
   * @see java.io.ObjectStreamConstants#PROTOCOL_VERSION_2
   * @since   1.2
  */
  useProtocolVersion(version: number): void;
  /**
   * Write the specified object to the ObjectOutputStream.  The class of the
   * object, the signature of the class, and the values of the non-transient
   * and non-static fields of the class and all of its supertypes are
   * written.  Default serialization for a class can be overridden using the
   * writeObject and the readObject methods.  Objects referenced by this
   * object are written transitively so that a complete equivalent graph of
   * objects can be reconstructed by an ObjectInputStream.
   *
   * Exceptions are thrown for problems with the OutputStream and for
   * classes that should not be serialized.  All exceptions are fatal to the
   * OutputStream, which is left in an indeterminate state, and it is up to
   * the caller to ignore or recover the stream state.
   *
   * @throws  InvalidClassException Something is wrong with a class used by
   *          serialization.
   * @throws  NotSerializableException Some object to be serialized does not
   *          implement the java.io.Serializable interface.
   * @throws  IOException Any exception thrown by the underlying
   *          OutputStream.
  */
  writeObject(obj: any): void;
  /**
   * Writes an "unshared" object to the ObjectOutputStream.  This method is
   * identical to writeObject, except that it always writes the given object
   * as a new, unique object in the stream (as opposed to a back-reference
   * pointing to a previously serialized instance).  Specifically:
   * 
   *   An object written via writeUnshared is always serialized in the
   *       same manner as a newly appearing object (an object that has not
   *       been written to the stream yet), regardless of whether or not the
   *       object has been written previously.
   *
   *   If writeObject is used to write an object that has been previously
   *       written with writeUnshared, the previous writeUnshared operation
   *       is treated as if it were a write of a separate object.  In other
   *       words, ObjectOutputStream will never generate back-references to
   *       object data written by calls to writeUnshared.
   * 
   * While writing an object via writeUnshared does not in itself guarantee a
   * unique reference to the object when it is deserialized, it allows a
   * single object to be defined multiple times in a stream, so that multiple
   * calls to readUnshared by the receiver will not conflict.  Note that the
   * rules described above only apply to the base-level object written with
   * writeUnshared, and not to any transitively referenced sub-objects in the
   * object graph to be serialized.
   *
   * ObjectOutputStream subclasses which override this method can only be
   * constructed in security contexts possessing the
   * "enableSubclassImplementation" SerializablePermission; any attempt to
   * instantiate such a subclass without this permission will cause a
   * SecurityException to be thrown.
   *
   * @param   obj object to write to stream
   * @throws  NotSerializableException if an object in the graph to be
   *          serialized does not implement the Serializable interface
   * @throws  InvalidClassException if a problem exists with the class of an
   *          object to be serialized
   * @throws  IOException if an I/O error occurs during serialization
   * @since 1.4
  */
  writeUnshared(obj: any): void;
  /**
   * Write the non-static and non-transient fields of the current class to
   * this stream.  This may only be called from the writeObject method of the
   * class being serialized. It will throw the NotActiveException if it is
   * called otherwise.
   *
   * @throws  IOException if I/O errors occur while writing to the underlying
   *          `OutputStream`
  */
  defaultWriteObject(): void;
  /**
   * Retrieve the object used to buffer persistent fields to be written to
   * the stream.  The fields will be written to the stream when writeFields
   * method is called.
   *
   * @return  an instance of the class Putfield that holds the serializable
   *          fields
   * @throws  IOException if I/O errors occur
   * @since 1.2
  */
  putFields(): PutField;
  /**
   * Write the buffered fields to the stream.
   *
   * @throws  IOException if I/O errors occur while writing to the underlying
   *          stream
   * @throws  NotActiveException Called when a classes writeObject method was
   *          not called to write the state of the object.
   * @since 1.2
  */
  writeFields(): void;
  /**
   * Reset will disregard the state of any objects already written to the
   * stream.  The state is reset to be the same as a new ObjectOutputStream.
   * The current point in the stream is marked as reset so the corresponding
   * ObjectInputStream will be reset at the same point.  Objects previously
   * written to the stream will not be referred to as already being in the
   * stream.  They will be written to the stream again.
   *
   * @throws  IOException if reset() is invoked while serializing an object.
  */
  reset(): void;
  /**
   * Writes a byte. This method will block until the byte is actually
   * written.
   *
   * @param   val the byte to be written to the stream
   * @throws  IOException If an I/O error has occurred.
  */
  write(val: number): void;
  /**
   * Writes an array of bytes. This method will block until the bytes are
   * actually written.
   *
   * @param   buf the data to be written
   * @throws  IOException If an I/O error has occurred.
  */
  write(buf: number[]): void;
  /**
   * Writes a sub array of bytes.
   *
   * @param   buf the data to be written
   * @param   off the start offset in the data
   * @param   len the number of bytes that are written
   * @throws  IOException If an I/O error has occurred.
  */
  write(buf: number[], off: number, len: number): void;
  /**
   * Flushes the stream. This will write any buffered output bytes and flush
   * through to the underlying stream.
   *
   * @throws  IOException If an I/O error has occurred.
  */
  flush(): void;
  /**
   * Closes the stream. This method must be called to release any resources
   * associated with the stream.
   *
   * @throws  IOException If an I/O error has occurred.
  */
  close(): void;
  /**
   * Writes a boolean.
   *
   * @param   val the boolean to be written
   * @throws  IOException if I/O errors occur while writing to the underlying
   *          stream
  */
  writeBoolean(val: boolean): void;
  /**
   * Writes an 8 bit byte.
   *
   * @param   val the byte value to be written
   * @throws  IOException if I/O errors occur while writing to the underlying
   *          stream
  */
  writeByte(val: number): void;
  /**
   * Writes a 16 bit short.
   *
   * @param   val the short value to be written
   * @throws  IOException if I/O errors occur while writing to the underlying
   *          stream
  */
  writeShort(val: number): void;
  /**
   * Writes a 16 bit char.
   *
   * @param   val the char value to be written
   * @throws  IOException if I/O errors occur while writing to the underlying
   *          stream
  */
  writeChar(val: number): void;
  /**
   * Writes a 32 bit int.
   *
   * @param   val the integer value to be written
   * @throws  IOException if I/O errors occur while writing to the underlying
   *          stream
  */
  writeInt(val: number): void;
  /**
   * Writes a 64 bit long.
   *
   * @param   val the long value to be written
   * @throws  IOException if I/O errors occur while writing to the underlying
   *          stream
  */
  writeLong(val: number): void;
  /**
   * Writes a 32 bit float.
   *
   * @param   val the float value to be written
   * @throws  IOException if I/O errors occur while writing to the underlying
   *          stream
  */
  writeFloat(val: number): void;
  /**
   * Writes a 64 bit double.
   *
   * @param   val the double value to be written
   * @throws  IOException if I/O errors occur while writing to the underlying
   *          stream
  */
  writeDouble(val: number): void;
  /**
   * Writes a String as a sequence of bytes.
   *
   * @param   str the String of bytes to be written
   * @throws  IOException if I/O errors occur while writing to the underlying
   *          stream
  */
  writeBytes(str: string): void;
  /**
   * Writes a String as a sequence of chars.
   *
   * @param   str the String of chars to be written
   * @throws  IOException if I/O errors occur while writing to the underlying
   *          stream
  */
  writeChars(str: string): void;
  /**
   * Primitive data write of this String in
   * modified UTF-8
   * format.  Note that there is a
   * significant difference between writing a String into the stream as
   * primitive data or as an Object. A String instance written by writeObject
   * is written into the stream as a String initially. Future writeObject()
   * calls write references to the string into the stream.
   *
   * @param   str the String to be written
   * @throws  IOException if I/O errors occur while writing to the underlying
   *          stream
  */
  writeUTF(str: string): void;
}
export interface ObjectOutputStream extends OutputStream, ObjectOutput, ObjectStreamConstants {}
/**
 * The `DataOutput` interface provides
 * for converting data from any of the Java
 * primitive types to a series of bytes and
 * writing these bytes to a binary stream.
 * There is  also a facility for converting
 * a `String` into
 * modified UTF-8
 * format and writing the resulting series
 * of bytes.
 * 
 * For all the methods in this interface that
 * write bytes, it is generally true that if
 * a byte cannot be written for any reason,
 * an `IOException` is thrown.
 *
 * @author  Frank Yellin
 * @see     java.io.DataInput
 * @see     java.io.DataOutputStream
 * @since   1.0
*/
export class DataOutput {
  /**
   * Writes to the output stream the eight
   * low-order bits of the argument `b`.
   * The 24 high-order  bits of `b`
   * are ignored.
   *
   * @param      b   the byte to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  write(b: number): void;
  /**
   * Writes to the output stream all the bytes in array `b`.
   * If `b` is `null`,
   * a `NullPointerException` is thrown.
   * If `b.length` is zero, then
   * no bytes are written. Otherwise, the byte
   * `b[0]` is written first, then
   * `b[1]`, and so on; the last byte
   * written is `b[b.length-1]`.
   *
   * @param      b   the data.
   * @throws     IOException  if an I/O error occurs.
  */
  write(b: number[]): void;
  /**
   * Writes `len` bytes from array
   * `b`, in order,  to
   * the output stream.  If `b`
   * is `null`, a `NullPointerException`
   * is thrown.  If `off` is negative,
   * or `len` is negative, or `off+len`
   * is greater than the length of the array
   * `b`, then an `IndexOutOfBoundsException`
   * is thrown.  If `len` is zero,
   * then no bytes are written. Otherwise, the
   * byte `b[off]` is written first,
   * then `b[off+1]`, and so on; the
   * last byte written is `b[off+len-1]`.
   *
   * @param      b     the data.
   * @param      off   the start offset in the data.
   * @param      len   the number of bytes to write.
   * @throws     IOException  if an I/O error occurs.
  */
  write(b: number[], off: number, len: number): void;
  /**
   * Writes a `boolean` value to this output stream.
   * If the argument `v`
   * is `true`, the value `(byte)1`
   * is written; if `v` is `false`,
   * the  value `(byte)0` is written.
   * The byte written by this method may
   * be read by the `readBoolean`
   * method of interface `DataInput`,
   * which will then return a `boolean`
   * equal to `v`.
   *
   * @param      v   the boolean to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeBoolean(v: boolean): void;
  /**
   * Writes to the output stream the eight low-order
   * bits of the argument `v`.
   * The 24 high-order bits of `v`
   * are ignored. (This means  that `writeByte`
   * does exactly the same thing as `write`
   * for an integer argument.) The byte written
   * by this method may be read by the `readByte`
   * method of interface `DataInput`,
   * which will then return a `byte`
   * equal to `(byte)v`.
   *
   * @param      v   the byte value to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeByte(v: number): void;
  /**
   * Writes two bytes to the output
   * stream to represent the value of the argument.
   * The byte values to be written, in the  order
   * shown, are:
   * {@code
   * (byte)(0xff & (v >> 8))
   * (byte)(0xff & v)
   * } 
   * The bytes written by this method may be
   * read by the `readShort` method
   * of interface `DataInput`, which
   * will then return a `short` equal
   * to `(short)v`.
   *
   * @param      v   the `short` value to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeShort(v: number): void;
  /**
   * Writes a `char` value, which
   * is comprised of two bytes, to the
   * output stream.
   * The byte values to be written, in the  order
   * shown, are:
   * {@code
   * (byte)(0xff & (v >> 8))
   * (byte)(0xff & v)
   * }
   * The bytes written by this method may be
   * read by the `readChar` method
   * of interface `DataInput`, which
   * will then return a `char` equal
   * to `(char)v`.
   *
   * @param      v   the `char` value to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeChar(v: number): void;
  /**
   * Writes an `int` value, which is
   * comprised of four bytes, to the output stream.
   * The byte values to be written, in the  order
   * shown, are:
   * {@code
   * (byte)(0xff & (v >> 24))
   * (byte)(0xff & (v >> 16))
   * (byte)(0xff & (v >>  8))
   * (byte)(0xff & v)
   * }
   * The bytes written by this method may be read
   * by the `readInt` method of interface
   * `DataInput`, which will then
   * return an `int` equal to `v`.
   *
   * @param      v   the `int` value to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeInt(v: number): void;
  /**
   * Writes a `long` value, which is
   * comprised of eight bytes, to the output stream.
   * The byte values to be written, in the  order
   * shown, are:
   * {@code
   * (byte)(0xff & (v >> 56))
   * (byte)(0xff & (v >> 48))
   * (byte)(0xff & (v >> 40))
   * (byte)(0xff & (v >> 32))
   * (byte)(0xff & (v >> 24))
   * (byte)(0xff & (v >> 16))
   * (byte)(0xff & (v >>  8))
   * (byte)(0xff & v)
   * }
   * The bytes written by this method may be
   * read by the `readLong` method
   * of interface `DataInput`, which
   * will then return a `long` equal
   * to `v`.
   *
   * @param      v   the `long` value to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeLong(v: number): void;
  /**
   * Writes a `float` value,
   * which is comprised of four bytes, to the output stream.
   * It does this as if it first converts this
   * `float` value to an `int`
   * in exactly the manner of the `Float.floatToIntBits`
   * method  and then writes the `int`
   * value in exactly the manner of the  `writeInt`
   * method.  The bytes written by this method
   * may be read by the `readFloat`
   * method of interface `DataInput`,
   * which will then return a `float`
   * equal to `v`.
   *
   * @param      v   the `float` value to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeFloat(v: number): void;
  /**
   * Writes a `double` value,
   * which is comprised of eight bytes, to the output stream.
   * It does this as if it first converts this
   * `double` value to a `long`
   * in exactly the manner of the `Double.doubleToLongBits`
   * method  and then writes the `long`
   * value in exactly the manner of the  `writeLong`
   * method. The bytes written by this method
   * may be read by the `readDouble`
   * method of interface `DataInput`,
   * which will then return a `double`
   * equal to `v`.
   *
   * @param      v   the `double` value to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeDouble(v: number): void;
  /**
   * Writes a string to the output stream.
   * For every character in the string
   * `s`,  taken in order, one byte
   * is written to the output stream.  If
   * `s` is `null`, a `NullPointerException`
   * is thrown.  If `s.length`
   * is zero, then no bytes are written. Otherwise,
   * the character `s[0]` is written
   * first, then `s[1]`, and so on;
   * the last character written is `s[s.length-1]`.
   * For each character, one byte is written,
   * the low-order byte, in exactly the manner
   * of the `writeByte` method . The
   * high-order eight bits of each character
   * in the string are ignored.
   *
   * @param      s   the string of bytes to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeBytes(s: string): void;
  /**
   * Writes every character in the string `s`,
   * to the output stream, in order,
   * two bytes per character. If `s`
   * is `null`, a `NullPointerException`
   * is thrown.  If `s.length`
   * is zero, then no characters are written.
   * Otherwise, the character `s[0]`
   * is written first, then `s[1]`,
   * and so on; the last character written is
   * `s[s.length-1]`. For each character,
   * two bytes are actually written, high-order
   * byte first, in exactly the manner of the
   * `writeChar` method.
   *
   * @param      s   the string value to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeChars(s: string): void;
  /**
   * Writes two bytes of length information
   * to the output stream, followed
   * by the
   * modified UTF-8
   * representation
   * of  every character in the string `s`.
   * If `s` is `null`,
   * a `NullPointerException` is thrown.
   * Each character in the string `s`
   * is converted to a group of one, two, or
   * three bytes, depending on the value of the
   * character.
   * If a character `c`
   * is in the range \u0001 through
   * \u007f, it is represented
   * by one byte:
   * (byte)c   
   * If a character `c` is \u0000
   * or is in the range \u0080
   * through \u07ff, then it is
   * represented by two bytes, to be written
   * in the order shown: {@code
   * (byte)(0xc0 | (0x1f & (c >> 6)))
   * (byte)(0x80 | (0x3f & c))
   * }  If a character
   * `c` is in the range \u0800
   * through `uffff`, then it is
   * represented by three bytes, to be written
   * in the order shown: {@code
   * (byte)(0xe0 | (0x0f & (c >> 12)))
   * (byte)(0x80 | (0x3f & (c >>  6)))
   * (byte)(0x80 | (0x3f & c))
   * }   First,
   * the total number of bytes needed to represent
   * all the characters of `s` is
   * calculated. If this number is larger than
   * `65535`, then a `UTFDataFormatException`
   * is thrown. Otherwise, this length is written
   * to the output stream in exactly the manner
   * of the `writeShort` method;
   * after this, the one-, two-, or three-byte
   * representation of each character in the
   * string `s` is written.  The
   * bytes written by this method may be read
   * by the `readUTF` method of interface
   * `DataInput`, which will then
   * return a `String` equal to `s`.
   *
   * @param      s   the string value to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  writeUTF(s: string): void;
}
export class BufferedWriter extends Writer {
  /**
   * Creates a buffered character-output stream that uses a default-sized
   * output buffer.
   *
   * @param  out  A Writer
  */
  constructor(out: Writer);
  /**
   * Creates a new buffered character-output stream that uses an output
   * buffer of the given size.
   *
   * @param  out  A Writer
   * @param  sz   Output-buffer size, a positive integer
   *
   * @throws     IllegalArgumentException  If `sz <= 0`
  */
  constructor(out: Writer, sz: number);
  /**
   * Writes a single character.
   *
   * @throws     IOException  If an I/O error occurs
  */
  write(c: number): void;
  /**
   * Writes a portion of an array of characters.
   *
   *  Ordinarily this method stores characters from the given array into
   * this stream's buffer, flushing the buffer to the underlying stream as
   * needed.  If the requested length is at least as large as the buffer,
   * however, then this method will flush the buffer and write the characters
   * directly to the underlying stream.  Thus redundant
   * `BufferedWriter`s will not copy data unnecessarily.
   *
   * @param  cbuf  A character array
   * @param  off   Offset from which to start reading characters
   * @param  len   Number of characters to write
   *
   * @throws  IndexOutOfBoundsException
   *          If `off` is negative, or `len` is negative,
   *          or `off + len` is negative or greater than the length
   *          of the given array
   *
   * @throws  IOException  If an I/O error occurs
  */
  write(cbuf: string[], off: number, len: number): void;
  /**
   * Writes a portion of a String.
   *
   * @implSpec
   * While the specification of this method in the
   * {@linkplain java.io.Writer#write(java.lang.String,int,int) superclass}
   * recommends that an {@link IndexOutOfBoundsException} be thrown
   * if `len` is negative or `off + len` is negative,
   * the implementation in this class does not throw such an exception in
   * these cases but instead simply writes no characters.
   *
   * @param  s     String to be written
   * @param  off   Offset from which to start reading characters
   * @param  len   Number of characters to be written
   *
   * @throws  IndexOutOfBoundsException
   *          If `off` is negative,
   *          or `off + len` is greater than the length
   *          of the given string
   *
   * @throws  IOException  If an I/O error occurs
  */
  write(s: string, off: number, len: number): void;
  /**
   * Writes a line separator.  The line separator string is defined by the
   * system property `line.separator`, and is not necessarily a single
   * newline ('\n') character.
   *
   * @throws     IOException  If an I/O error occurs
  */
  newLine(): void;
  /**
   * Flushes the stream.
   *
   * @throws     IOException  If an I/O error occurs
  */
  flush(): void;
  close(): void;
  /**
   * Writes an array of characters.
   *
   * @param  cbuf
   *         Array of characters to be written
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(cbuf: string[]): void;
  /**
   * Writes a string.
   *
   * @param  str
   *         String to be written
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(str: string): void;
}
/**
 * A file output stream is an output stream for writing data to a
 * `File` or to a `FileDescriptor`. Whether or not
 * a file is available or may be created depends upon the underlying
 * platform.  Some platforms, in particular, allow a file to be opened
 * for writing by only one `FileOutputStream` (or other
 * file-writing object) at a time.  In such situations the constructors in
 * this class will fail if the file involved is already open.
 *
 * `FileOutputStream` is meant for writing streams of raw bytes
 * such as image data. For writing streams of characters, consider using
 * `FileWriter`.
 *
 * @apiNote
 * To release resources used by this stream {@link #close} should be called
 * directly or by try-with-resources. Subclasses are responsible for the cleanup
 * of resources acquired by the subclass.
 * Subclasses that override {@link #finalize} in order to perform cleanup
 * should be modified to use alternative cleanup mechanisms such as
 * {@link java.lang.ref.Cleaner} and remove the overriding `finalize` method.
 *
 * @implSpec
 * If this FileOutputStream has been subclassed and the {@link #close}
 * method has been overridden, the {@link #close} method will be
 * called when the FileInputStream is unreachable.
 * Otherwise, it is implementation specific how the resource cleanup described in
 * {@link #close} is performed.
 *
 * @author  Arthur van Hoff
 * @see     java.io.File
 * @see     java.io.FileDescriptor
 * @see     java.io.FileInputStream
 * @see     java.nio.file.Files#newOutputStream
 * @since   1.0
*/
export class FileOutputStream extends OutputStream {
  /**
   * Creates a file output stream to write to the file with the
   * specified name. A new `FileDescriptor` object is
   * created to represent this file connection.
   * 
   * First, if there is a security manager, its `checkWrite`
   * method is called with `name` as its argument.
   * 
   * If the file exists but is a directory rather than a regular file, does
   * not exist but cannot be created, or cannot be opened for any other
   * reason then a `FileNotFoundException` is thrown.
   *
   * @implSpec Invoking this constructor with the parameter `name` is
   * equivalent to invoking {@link #FileOutputStream(String,boolean)
   * new FileOutputStream(name, false)}.
   *
   * @param      name   the system-dependent filename
   * @throws     FileNotFoundException  if the file exists but is a directory
   *                   rather than a regular file, does not exist but cannot
   *                   be created, or cannot be opened for any other reason
   * @throws     SecurityException  if a security manager exists and its
   *               `checkWrite` method denies write access
   *               to the file.
   * @see        java.lang.SecurityManager#checkWrite(java.lang.String)
  */
  constructor(name: string);
  /**
   * Creates a file output stream to write to the file with the specified
   * name.  If the second argument is `true`, then
   * bytes will be written to the end of the file rather than the beginning.
   * A new `FileDescriptor` object is created to represent this
   * file connection.
   * 
   * First, if there is a security manager, its `checkWrite`
   * method is called with `name` as its argument.
   * 
   * If the file exists but is a directory rather than a regular file, does
   * not exist but cannot be created, or cannot be opened for any other
   * reason then a `FileNotFoundException` is thrown.
   *
   * @param     name        the system-dependent file name
   * @param     append      if `true`, then bytes will be written
   *                   to the end of the file rather than the beginning
   * @throws     FileNotFoundException  if the file exists but is a directory
   *                   rather than a regular file, does not exist but cannot
   *                   be created, or cannot be opened for any other reason.
   * @throws     SecurityException  if a security manager exists and its
   *               `checkWrite` method denies write access
   *               to the file.
   * @see        java.lang.SecurityManager#checkWrite(java.lang.String)
   * @since     1.1
  */
  constructor(name: string, append: boolean);
  /**
   * Creates a file output stream to write to the file represented by
   * the specified `File` object. A new
   * `FileDescriptor` object is created to represent this
   * file connection.
   * 
   * First, if there is a security manager, its `checkWrite`
   * method is called with the path represented by the `file`
   * argument as its argument.
   * 
   * If the file exists but is a directory rather than a regular file, does
   * not exist but cannot be created, or cannot be opened for any other
   * reason then a `FileNotFoundException` is thrown.
   *
   * @param      file               the file to be opened for writing.
   * @throws     FileNotFoundException  if the file exists but is a directory
   *                   rather than a regular file, does not exist but cannot
   *                   be created, or cannot be opened for any other reason
   * @throws     SecurityException  if a security manager exists and its
   *               `checkWrite` method denies write access
   *               to the file.
   * @see        java.io.File#getPath()
   * @see        java.lang.SecurityException
   * @see        java.lang.SecurityManager#checkWrite(java.lang.String)
  */
  constructor(file: File);
  /**
   * Creates a file output stream to write to the file represented by
   * the specified `File` object. If the second argument is
   * `true`, then bytes will be written to the end of the file
   * rather than the beginning. A new `FileDescriptor` object is
   * created to represent this file connection.
   * 
   * First, if there is a security manager, its `checkWrite`
   * method is called with the path represented by the `file`
   * argument as its argument.
   * 
   * If the file exists but is a directory rather than a regular file, does
   * not exist but cannot be created, or cannot be opened for any other
   * reason then a `FileNotFoundException` is thrown.
   *
   * @param      file               the file to be opened for writing.
   * @param     append      if `true`, then bytes will be written
   *                   to the end of the file rather than the beginning
   * @throws     FileNotFoundException  if the file exists but is a directory
   *                   rather than a regular file, does not exist but cannot
   *                   be created, or cannot be opened for any other reason
   * @throws     SecurityException  if a security manager exists and its
   *               `checkWrite` method denies write access
   *               to the file.
   * @see        java.io.File#getPath()
   * @see        java.lang.SecurityException
   * @see        java.lang.SecurityManager#checkWrite(java.lang.String)
   * @since 1.4
  */
  constructor(file: File, append: boolean);
  /**
   * Creates a file output stream to write to the specified file
   * descriptor, which represents an existing connection to an actual
   * file in the file system.
   * 
   * First, if there is a security manager, its `checkWrite`
   * method is called with the file descriptor `fdObj`
   * argument as its argument.
   * 
   * If `fdObj` is null then a `NullPointerException`
   * is thrown.
   * 
   * This constructor does not throw an exception if `fdObj`
   * is {@link java.io.FileDescriptor#valid() invalid}.
   * However, if the methods are invoked on the resulting stream to attempt
   * I/O on the stream, an `IOException` is thrown.
   *
   * @param      fdObj   the file descriptor to be opened for writing
   * @throws     SecurityException  if a security manager exists and its
   *               `checkWrite` method denies
   *               write access to the file descriptor
   * @see        java.lang.SecurityManager#checkWrite(java.io.FileDescriptor)
  */
  constructor(fdObj: FileDescriptor);
  /**
   * Writes the specified byte to this file output stream. Implements
   * the `write` method of `OutputStream`.
   *
   * @param      b   the byte to be written.
   * @throws     IOException  if an I/O error occurs.
  */
  write(b: number): void;
  /**
   * Writes `b.length` bytes from the specified byte array
   * to this file output stream.
   *
   * @param      b   the data.
   * @throws     IOException  if an I/O error occurs.
  */
  write(b: number[]): void;
  /**
   * Writes `len` bytes from the specified byte array
   * starting at offset `off` to this file output stream.
   *
   * @param      b     the data.
   * @param      off   the start offset in the data.
   * @param      len   the number of bytes to write.
   * @throws     IOException  if an I/O error occurs.
  */
  write(b: number[], off: number, len: number): void;
  /**
   * Closes this file output stream and releases any system resources
   * associated with this stream. This file output stream may no longer
   * be used for writing bytes.
   *
   *  If this stream has an associated channel then the channel is closed
   * as well.
   *
   * @apiNote
   * Overriding {@link #close} to perform cleanup actions is reliable
   * only when called directly or when called by try-with-resources.
   * Do not depend on finalization to invoke `close`;
   * finalization is not reliable and is deprecated.
   * If cleanup of native resources is needed, other mechanisms such as
   * {@linkplain java.lang.ref.Cleaner} should be used.
   *
   * @throws     IOException  if an I/O error occurs.
   *
   * @revised 1.4
  */
  close(): void;
  /**
   * Returns the file descriptor associated with this stream.
   *
   * @return  the `FileDescriptor` object that represents
   *          the connection to the file in the file system being used
   *          by this `FileOutputStream` object.
   *
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.FileDescriptor
  */
  getFD(): FileDescriptor;
  /**
   * Returns the unique {@link java.nio.channels.FileChannel FileChannel}
   * object associated with this file output stream.
   *
   *  The initial {@link java.nio.channels.FileChannel#position()
   * position} of the returned channel will be equal to the
   * number of bytes written to the file so far unless this stream is in
   * append mode, in which case it will be equal to the size of the file.
   * Writing bytes to this stream will increment the channel's position
   * accordingly.  Changing the channel's position, either explicitly or by
   * writing, will change this stream's file position.
   *
   * @return  the file channel associated with this file output stream
   *
   * @since 1.4
  */
  getChannel(): FileChannel;
}
/**
 * A piped output stream can be connected to a piped input stream
 * to create a communications pipe. The piped output stream is the
 * sending end of the pipe. Typically, data is written to a
 * `PipedOutputStream` object by one thread and data is
 * read from the connected `PipedInputStream` by some
 * other thread. Attempting to use both objects from a single thread
 * is not recommended as it may deadlock the thread.
 * The pipe is said to be  broken  if a
 * thread that was reading data bytes from the connected piped input
 * stream is no longer alive.
 *
 * @author  James Gosling
 * @see     java.io.PipedInputStream
 * @since   1.0
*/
export class PipedOutputStream extends OutputStream {
  /**
   * Creates a piped output stream connected to the specified piped
   * input stream. Data bytes written to this stream will then be
   * available as input from `snk`.
   *
   * @param      snk   The piped input stream to connect to.
   * @throws     IOException  if an I/O error occurs.
  */
  constructor(snk: PipedInputStream);
  /**
   * Creates a piped output stream that is not yet connected to a
   * piped input stream. It must be connected to a piped input stream,
   * either by the receiver or the sender, before being used.
   *
   * @see     java.io.PipedInputStream#connect(java.io.PipedOutputStream)
   * @see     java.io.PipedOutputStream#connect(java.io.PipedInputStream)
  */
  constructor();
  /**
   * Connects this piped output stream to a receiver. If this object
   * is already connected to some other piped input stream, an
   * `IOException` is thrown.
   * 
   * If `snk` is an unconnected piped input stream and
   * `src` is an unconnected piped output stream, they may
   * be connected by either the call:
   *      * src.connect(snk)
   * or the call:
   *      * snk.connect(src)
   * The two calls have the same effect.
   *
   * @param      snk   the piped input stream to connect to.
   * @throws     IOException  if an I/O error occurs.
  */
  connect(snk: PipedInputStream): void;
  /**
   * Writes the specified `byte` to the piped output stream.
   * 
   * Implements the `write` method of `OutputStream`.
   *
   * @param   b   the `byte` to be written.
   * @throws  IOException if the pipe is  broken,
   *          {@link #connect(java.io.PipedInputStream) unconnected},
   *          closed, or if an I/O error occurs.
  */
  write(b: number): void;
  /**
   * Writes `len` bytes from the specified byte array
   * starting at offset `off` to this piped output stream.
   * This method blocks until all the bytes are written to the output
   * stream.
   *
   * @param   b     the data.
   * @param   off   the start offset in the data.
   * @param   len   the number of bytes to write.
   * @throws  IOException if the pipe is  broken,
   *          {@link #connect(java.io.PipedInputStream) unconnected},
   *          closed, or if an I/O error occurs.
  */
  write(b: number[], off: number, len: number): void;
  /**
   * Flushes this output stream and forces any buffered output bytes
   * to be written out.
   * This will notify any readers that bytes are waiting in the pipe.
   *
   * @throws    IOException if an I/O error occurs.
  */
  flush(): void;
  /**
   * Closes this piped output stream and releases any system resources
   * associated with this stream. This stream may no longer be used for
   * writing bytes.
   *
   * @throws     IOException  if an I/O error occurs.
  */
  close(): void;
  /**
   * Writes `b.length` bytes from the specified byte array
   * to this output stream. The general contract for `write(b)`
   * is that it should have exactly the same effect as the call
   * `write(b, 0, b.length)`.
   *
   * @param      b   the data.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.OutputStream#write(byte[], int, int)
  */
  write(b: number[]): void;
}
export class File extends Serializable {
  /**
   * The system-dependent default name-separator character.  This field is
   * initialized to contain the first character of the value of the system
   * property `file.separator`.  On UNIX systems the value of this
   * field is `'/'`; on Microsoft Windows systems it is `'\\'`.
   *
   * @see     java.lang.System#getProperty(java.lang.String)
  */
  static readonly separatorChar: string;
  /**
   * The system-dependent default name-separator character, represented as a
   * string for convenience.  This string contains a single character, namely
   * {@link #separatorChar}.
  */
  static readonly separator: string;
  /**
   * The system-dependent path-separator character.  This field is
   * initialized to contain the first character of the value of the system
   * property `path.separator`.  This character is used to
   * separate filenames in a sequence of files given as a path list.
   * On UNIX systems, this character is `':'`; on Microsoft Windows systems it
   * is `';'`.
   *
   * @see     java.lang.System#getProperty(java.lang.String)
  */
  static readonly pathSeparatorChar: string;
  /**
   * The system-dependent path-separator character, represented as a string
   * for convenience.  This string contains a single character, namely
   * {@link #pathSeparatorChar}.
  */
  static readonly pathSeparator: string;
  /**
   * Creates a new `File` instance by converting the given
   * pathname string into an abstract pathname.  If the given string is
   * the empty string, then the result is the empty abstract pathname.
   *
   * @param   pathname  A pathname string
   * @throws  NullPointerException
   *          If the `pathname` argument is `null`
  */
  constructor(pathname: string);
  /**
   * Creates a new `File` instance from a parent pathname string
   * and a child pathname string.
   *
   *  If `parent` is `null` then the new
   * `File` instance is created as if by invoking the
   * single-argument `File` constructor on the given
   * `child` pathname string.
   *
   *  Otherwise the `parent` pathname string is taken to denote
   * a directory, and the `child` pathname string is taken to
   * denote either a directory or a file.  If the `child` pathname
   * string is absolute then it is converted into a relative pathname in a
   * system-dependent way.  If `parent` is the empty string then
   * the new `File` instance is created by converting
   * `child` into an abstract pathname and resolving the result
   * against a system-dependent default directory.  Otherwise each pathname
   * string is converted into an abstract pathname and the child abstract
   * pathname is resolved against the parent.
   *
   * @param   parent  The parent pathname string
   * @param   child   The child pathname string
   * @throws  NullPointerException
   *          If `child` is `null`
  */
  constructor(parent: string, child: string);
  /**
   * Creates a new `File` instance from a parent abstract
   * pathname and a child pathname string.
   *
   *  If `parent` is `null` then the new
   * `File` instance is created as if by invoking the
   * single-argument `File` constructor on the given
   * `child` pathname string.
   *
   *  Otherwise the `parent` abstract pathname is taken to
   * denote a directory, and the `child` pathname string is taken
   * to denote either a directory or a file.  If the `child`
   * pathname string is absolute then it is converted into a relative
   * pathname in a system-dependent way.  If `parent` is the empty
   * abstract pathname then the new `File` instance is created by
   * converting `child` into an abstract pathname and resolving
   * the result against a system-dependent default directory.  Otherwise each
   * pathname string is converted into an abstract pathname and the child
   * abstract pathname is resolved against the parent.
   *
   * @param   parent  The parent abstract pathname
   * @param   child   The child pathname string
   * @throws  NullPointerException
   *          If `child` is `null`
  */
  constructor(parent: File, child: string);
  /**
   * Creates a new `File` instance by converting the given
   * `file:` URI into an abstract pathname.
   *
   *  The exact form of a `file:` URI is system-dependent, hence
   * the transformation performed by this constructor is also
   * system-dependent.
   *
   *  For a given abstract pathname f it is guaranteed that
   *
   * 
   * new File( f.{@link #toURI()
   * toURI}()).equals( f.{@link #getAbsoluteFile() getAbsoluteFile}())
   * 
   *
   * so long as the original abstract pathname, the URI, and the new abstract
   * pathname are all created in (possibly different invocations of) the same
   * Java virtual machine.  This relationship typically does not hold,
   * however, when a `file:` URI that is created in a virtual machine
   * on one operating system is converted into an abstract pathname in a
   * virtual machine on a different operating system.
   *
   * @param  uri
   *         An absolute, hierarchical URI with a scheme equal to
   *         `"file"`, a non-empty path component, and undefined
   *         authority, query, and fragment components
   *
   * @throws  NullPointerException
   *          If `uri` is `null`
   *
   * @throws  IllegalArgumentException
   *          If the preconditions on the parameter do not hold
   *
   * @see #toURI()
   * @see java.net.URI
   * @since 1.4
  */
  constructor(uri: URI);
  /**
   * Returns the name of the file or directory denoted by this abstract
   * pathname.  This is just the last name in the pathname's name
   * sequence.  If the pathname's name sequence is empty, then the empty
   * string is returned.
   *
   * @return  The name of the file or directory denoted by this abstract
   *          pathname, or the empty string if this pathname's name sequence
   *          is empty
  */
  getName(): string;
  /**
   * Returns the pathname string of this abstract pathname's parent, or
   * `null` if this pathname does not name a parent directory.
   *
   *  The parent of an abstract pathname consists of the
   * pathname's prefix, if any, and each name in the pathname's name
   * sequence except for the last.  If the name sequence is empty then
   * the pathname does not name a parent directory.
   *
   * @return  The pathname string of the parent directory named by this
   *          abstract pathname, or `null` if this pathname
   *          does not name a parent
  */
  getParent(): string;
  /**
   * Returns the abstract pathname of this abstract pathname's parent,
   * or `null` if this pathname does not name a parent
   * directory.
   *
   *  The parent of an abstract pathname consists of the
   * pathname's prefix, if any, and each name in the pathname's name
   * sequence except for the last.  If the name sequence is empty then
   * the pathname does not name a parent directory.
   *
   * @return  The abstract pathname of the parent directory named by this
   *          abstract pathname, or `null` if this pathname
   *          does not name a parent
   *
   * @since 1.2
  */
  getParentFile(): File;
  /**
   * Converts this abstract pathname into a pathname string.  The resulting
   * string uses the {@link #separator default name-separator character} to
   * separate the names in the name sequence.
   *
   * @return  The string form of this abstract pathname
  */
  getPath(): string;
  /**
   * Tests whether this abstract pathname is absolute.  The definition of
   * absolute pathname is system dependent.  On UNIX systems, a pathname is
   * absolute if its prefix is `"/"`.  On Microsoft Windows systems, a
   * pathname is absolute if its prefix is a drive specifier followed by
   * `"\\"`, or if its prefix is `"\\\\"`.
   *
   * @return  `true` if this abstract pathname is absolute,
   *          `false` otherwise
  */
  isAbsolute(): boolean;
  /**
   * Returns the absolute pathname string of this abstract pathname.
   *
   *  If this abstract pathname is already absolute, then the pathname
   * string is simply returned as if by the {@link #getPath}
   * method.  If this abstract pathname is the empty abstract pathname then
   * the pathname string of the current user directory, which is named by the
   * system property `user.dir`, is returned.  Otherwise this
   * pathname is resolved in a system-dependent way.  On UNIX systems, a
   * relative pathname is made absolute by resolving it against the current
   * user directory.  On Microsoft Windows systems, a relative pathname is made absolute
   * by resolving it against the current directory of the drive named by the
   * pathname, if any; if not, it is resolved against the current user
   * directory.
   *
   * @return  The absolute pathname string denoting the same file or
   *          directory as this abstract pathname
   *
   * @throws  SecurityException
   *          If a required system property value cannot be accessed.
   *
   * @see     java.io.File#isAbsolute()
  */
  getAbsolutePath(): string;
  /**
   * Returns the absolute form of this abstract pathname.  Equivalent to
   * new File(this.{@link #getAbsolutePath}).
   *
   * @return  The absolute abstract pathname denoting the same file or
   *          directory as this abstract pathname
   *
   * @throws  SecurityException
   *          If a required system property value cannot be accessed.
   *
   * @since 1.2
  */
  getAbsoluteFile(): File;
  /**
   * Returns the canonical pathname string of this abstract pathname.
   *
   *  A canonical pathname is both absolute and unique.  The precise
   * definition of canonical form is system-dependent.  This method first
   * converts this pathname to absolute form if necessary, as if by invoking the
   * {@link #getAbsolutePath} method, and then maps it to its unique form in a
   * system-dependent way.  This typically involves removing redundant names
   * such as `"."` and `".."` from the pathname, resolving
   * symbolic links (on UNIX platforms), and converting drive letters to a
   * standard case (on Microsoft Windows platforms).
   *
   *  Every pathname that denotes an existing file or directory has a
   * unique canonical form.  Every pathname that denotes a nonexistent file
   * or directory also has a unique canonical form.  The canonical form of
   * the pathname of a nonexistent file or directory may be different from
   * the canonical form of the same pathname after the file or directory is
   * created.  Similarly, the canonical form of the pathname of an existing
   * file or directory may be different from the canonical form of the same
   * pathname after the file or directory is deleted.
   *
   * @return  The canonical pathname string denoting the same file or
   *          directory as this abstract pathname
   *
   * @throws  IOException
   *          If an I/O error occurs, which is possible because the
   *          construction of the canonical pathname may require
   *          filesystem queries
   *
   * @throws  SecurityException
   *          If a required system property value cannot be accessed, or
   *          if a security manager exists and its {@link
   *          java.lang.SecurityManager#checkRead} method denies
   *          read access to the file
   *
   * @since   1.1
   * @see     Path#toRealPath
  */
  getCanonicalPath(): string;
  /**
   * Returns the canonical form of this abstract pathname.  Equivalent to
   * new File(this.{@link #getCanonicalPath}).
   *
   * @return  The canonical pathname string denoting the same file or
   *          directory as this abstract pathname
   *
   * @throws  IOException
   *          If an I/O error occurs, which is possible because the
   *          construction of the canonical pathname may require
   *          filesystem queries
   *
   * @throws  SecurityException
   *          If a required system property value cannot be accessed, or
   *          if a security manager exists and its {@link
   *          java.lang.SecurityManager#checkRead} method denies
   *          read access to the file
   *
   * @since 1.2
   * @see     Path#toRealPath
  */
  getCanonicalFile(): File;
  /**
   * Converts this abstract pathname into a `file:` URL.  The
   * exact form of the URL is system-dependent.  If it can be determined that
   * the file denoted by this abstract pathname is a directory, then the
   * resulting URL will end with a slash.
   *
   * @return  A URL object representing the equivalent file URL
   *
   * @throws  MalformedURLException
   *          If the path cannot be parsed as a URL
   *
   * @see     #toURI()
   * @see     java.net.URI
   * @see     java.net.URI#toURL()
   * @see     java.net.URL
   * @since   1.2
   *
   * @deprecated This method does not automatically escape characters that
   * are illegal in URLs.  It is recommended that new code convert an
   * abstract pathname into a URL by first converting it into a URI, via the
   * {@link #toURI() toURI} method, and then converting the URI into a URL
   * via the {@link java.net.URI#toURL() URI.toURL} method.
  */
  toURL(): URL;
  /**
   * Constructs a `file:` URI that represents this abstract pathname.
   *
   *  The exact form of the URI is system-dependent.  If it can be
   * determined that the file denoted by this abstract pathname is a
   * directory, then the resulting URI will end with a slash.
   *
   *  For a given abstract pathname f, it is guaranteed that
   *
   * 
   * new {@link #File(java.net.URI) File}( f.toURI()).equals(
   *  f.{@link #getAbsoluteFile() getAbsoluteFile}())
   * 
   *
   * so long as the original abstract pathname, the URI, and the new abstract
   * pathname are all created in (possibly different invocations of) the same
   * Java virtual machine.  Due to the system-dependent nature of abstract
   * pathnames, however, this relationship typically does not hold when a
   * `file:` URI that is created in a virtual machine on one operating
   * system is converted into an abstract pathname in a virtual machine on a
   * different operating system.
   *
   *  Note that when this abstract pathname represents a UNC pathname then
   * all components of the UNC (including the server name component) are encoded
   * in the `URI` path. The authority component is undefined, meaning
   * that it is represented as `null`. The {@link Path} class defines the
   * {@link Path#toUri toUri} method to encode the server name in the authority
   * component of the resulting `URI`. The {@link #toPath toPath} method
   * may be used to obtain a `Path` representing this abstract pathname.
   *
   * @return  An absolute, hierarchical URI with a scheme equal to
   *          `"file"`, a path representing this abstract pathname,
   *          and undefined authority, query, and fragment components
   * @throws SecurityException If a required system property value cannot
   * be accessed.
   *
   * @see #File(java.net.URI)
   * @see java.net.URI
   * @see java.net.URI#toURL()
   * @since 1.4
  */
  toURI(): URI;
  /**
   * Tests whether the application can read the file denoted by this
   * abstract pathname. On some platforms it may be possible to start the
   * Java virtual machine with special privileges that allow it to read
   * files that are marked as unreadable. Consequently this method may return
   * `true` even though the file does not have read permissions.
   *
   * @return  `true` if and only if the file specified by this
   *          abstract pathname exists and can be read by the
   *          application; `false` otherwise
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkRead(java.lang.String)}
   *          method denies read access to the file
  */
  canRead(): boolean;
  /**
   * Tests whether the application can modify the file denoted by this
   * abstract pathname. On some platforms it may be possible to start the
   * Java virtual machine with special privileges that allow it to modify
   * files that are marked read-only. Consequently this method may return
   * `true` even though the file is marked read-only.
   *
   * @return  `true` if and only if the file system actually
   *          contains a file denoted by this abstract pathname and
   *          the application is allowed to write to the file;
   *          `false` otherwise.
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkWrite(java.lang.String)}
   *          method denies write access to the file
  */
  canWrite(): boolean;
  /**
   * Tests whether the file or directory denoted by this abstract pathname
   * exists.
   *
   * @return  `true` if and only if the file or directory denoted
   *          by this abstract pathname exists; `false` otherwise
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkRead(java.lang.String)}
   *          method denies read access to the file or directory
  */
  exists(): boolean;
  /**
   * Tests whether the file denoted by this abstract pathname is a
   * directory.
   *
   *  Where it is required to distinguish an I/O exception from the case
   * that the file is not a directory, or where several attributes of the
   * same file are required at the same time, then the {@link
   * java.nio.file.Files#readAttributes(Path,Class,LinkOption[])
   * Files.readAttributes} method may be used.
   *
   * @return `true` if and only if the file denoted by this
   *          abstract pathname exists and is a directory;
   *          `false` otherwise
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkRead(java.lang.String)}
   *          method denies read access to the file
  */
  isDirectory(): boolean;
  /**
   * Tests whether the file denoted by this abstract pathname is a normal
   * file.  A file is normal if it is not a directory and, in
   * addition, satisfies other system-dependent criteria.  Any non-directory
   * file created by a Java application is guaranteed to be a normal file.
   *
   *  Where it is required to distinguish an I/O exception from the case
   * that the file is not a normal file, or where several attributes of the
   * same file are required at the same time, then the {@link
   * java.nio.file.Files#readAttributes(Path,Class,LinkOption[])
   * Files.readAttributes} method may be used.
   *
   * @return  `true` if and only if the file denoted by this
   *          abstract pathname exists and is a normal file;
   *          `false` otherwise
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkRead(java.lang.String)}
   *          method denies read access to the file
  */
  isFile(): boolean;
  /**
   * Tests whether the file named by this abstract pathname is a hidden
   * file.  The exact definition of hidden is system-dependent.  On
   * UNIX systems, a file is considered to be hidden if its name begins with
   * a period character (`'.'`).  On Microsoft Windows systems, a file is
   * considered to be hidden if it has been marked as such in the filesystem.
   *
   * @return  `true` if and only if the file denoted by this
   *          abstract pathname is hidden according to the conventions of the
   *          underlying platform
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkRead(java.lang.String)}
   *          method denies read access to the file
   *
   * @since 1.2
  */
  isHidden(): boolean;
  /**
   * Returns the time that the file denoted by this abstract pathname was
   * last modified.
   *
   * @apiNote
   * While the unit of time of the return value is milliseconds, the
   * granularity of the value depends on the underlying file system and may
   * be larger.  For example, some file systems use time stamps in units of
   * seconds.
   *
   *  Where it is required to distinguish an I/O exception from the case
   * where `0L` is returned, or where several attributes of the
   * same file are required at the same time, or where the time of last
   * access or the creation time are required, then the {@link
   * java.nio.file.Files#readAttributes(Path,Class,LinkOption[])
   * Files.readAttributes} method may be used.  If however only the
   * time of last modification is required, then the
   * {@link java.nio.file.Files#getLastModifiedTime(Path,LinkOption[])
   * Files.getLastModifiedTime} method may be used instead.
   *
   * @return  A `long` value representing the time the file was
   *          last modified, measured in milliseconds since the epoch
   *          (00:00:00 GMT, January 1, 1970), or `0L` if the
   *          file does not exist or if an I/O error occurs.  The value may
   *          be negative indicating the number of milliseconds before the
   *          epoch
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkRead(java.lang.String)}
   *          method denies read access to the file
  */
  lastModified(): number;
  /**
   * Returns the length of the file denoted by this abstract pathname.
   * The return value is unspecified if this pathname denotes a directory.
   *
   *  Where it is required to distinguish an I/O exception from the case
   * that `0L` is returned, or where several attributes of the same file
   * are required at the same time, then the {@link
   * java.nio.file.Files#readAttributes(Path,Class,LinkOption[])
   * Files.readAttributes} method may be used.
   *
   * @return  The length, in bytes, of the file denoted by this abstract
   *          pathname, or `0L` if the file does not exist.  Some
   *          operating systems may return `0L` for pathnames
   *          denoting system-dependent entities such as devices or pipes.
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkRead(java.lang.String)}
   *          method denies read access to the file
  */
  length(): number;
  /**
   * Atomically creates a new, empty file named by this abstract pathname if
   * and only if a file with this name does not yet exist.  The check for the
   * existence of the file and the creation of the file if it does not exist
   * are a single operation that is atomic with respect to all other
   * filesystem activities that might affect the file.
   * 
   * Note: this method should not be used for file-locking, as
   * the resulting protocol cannot be made to work reliably. The
   * {@link java.nio.channels.FileLock FileLock}
   * facility should be used instead.
   *
   * @return  `true` if the named file does not exist and was
   *          successfully created; `false` if the named file
   *          already exists
   *
   * @throws  IOException
   *          If an I/O error occurred
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkWrite(java.lang.String)}
   *          method denies write access to the file
   *
   * @since 1.2
  */
  createNewFile(): boolean;
  /**
   * Deletes the file or directory denoted by this abstract pathname.  If
   * this pathname denotes a directory, then the directory must be empty in
   * order to be deleted.
   *
   *  Note that the {@link java.nio.file.Files} class defines the {@link
   * java.nio.file.Files#delete(Path) delete} method to throw an {@link IOException}
   * when a file cannot be deleted. This is useful for error reporting and to
   * diagnose why a file cannot be deleted.
   *
   * @return  `true` if and only if the file or directory is
   *          successfully deleted; `false` otherwise
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkDelete} method denies
   *          delete access to the file
  */
  delete(): boolean;
  /**
   * Requests that the file or directory denoted by this abstract
   * pathname be deleted when the virtual machine terminates.
   * Files (or directories) are deleted in the reverse order that
   * they are registered. Invoking this method to delete a file or
   * directory that is already registered for deletion has no effect.
   * Deletion will be attempted only for normal termination of the
   * virtual machine, as defined by the Java Language Specification.
   *
   *  Once deletion has been requested, it is not possible to cancel the
   * request.  This method should therefore be used with care.
   *
   * 
   * Note: this method should not be used for file-locking, as
   * the resulting protocol cannot be made to work reliably. The
   * {@link java.nio.channels.FileLock FileLock}
   * facility should be used instead.
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkDelete} method denies
   *          delete access to the file
   *
   * @see #delete
   *
   * @since 1.2
  */
  deleteOnExit(): void;
  /**
   * Returns an array of strings naming the files and directories in the
   * directory denoted by this abstract pathname.
   *
   *  If this abstract pathname does not denote a directory, then this
   * method returns `null`.  Otherwise an array of strings is
   * returned, one for each file or directory in the directory.  Names
   * denoting the directory itself and the directory's parent directory are
   * not included in the result.  Each string is a file name rather than a
   * complete path.
   *
   *  There is no guarantee that the name strings in the resulting array
   * will appear in any specific order; they are not, in particular,
   * guaranteed to appear in alphabetical order.
   *
   *  Note that the {@link java.nio.file.Files} class defines the {@link
   * java.nio.file.Files#newDirectoryStream(Path) newDirectoryStream} method to
   * open a directory and iterate over the names of the files in the directory.
   * This may use less resources when working with very large directories, and
   * may be more responsive when working with remote directories.
   *
   * @return  An array of strings naming the files and directories in the
   *          directory denoted by this abstract pathname.  The array will be
   *          empty if the directory is empty.  Returns `null` if
   *          this abstract pathname does not denote a directory, or if an
   *          I/O error occurs.
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          SecurityManager#checkRead(String)} method denies read access to
   *          the directory
  */
  list(): string[];
  /**
   * Returns an array of strings naming the files and directories in the
   * directory denoted by this abstract pathname that satisfy the specified
   * filter.  The behavior of this method is the same as that of the
   * {@link #list()} method, except that the strings in the returned array
   * must satisfy the filter.  If the given `filter` is `null`
   * then all names are accepted.  Otherwise, a name satisfies the filter if
   * and only if the value `true` results when the {@link
   * FilenameFilter#accept FilenameFilter.accept(File, String)} method
   * of the filter is invoked on this abstract pathname and the name of a
   * file or directory in the directory that it denotes.
   *
   * @param  filter
   *         A filename filter
   *
   * @return  An array of strings naming the files and directories in the
   *          directory denoted by this abstract pathname that were accepted
   *          by the given `filter`.  The array will be empty if the
   *          directory is empty or if no names were accepted by the filter.
   *          Returns `null` if this abstract pathname does not denote
   *          a directory, or if an I/O error occurs.
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          SecurityManager#checkRead(String)} method denies read access to
   *          the directory
   *
   * @see java.nio.file.Files#newDirectoryStream(Path,String)
  */
  list(filter: FilenameFilter): string[];
  /**
   * Returns an array of abstract pathnames denoting the files in the
   * directory denoted by this abstract pathname.
   *
   *  If this abstract pathname does not denote a directory, then this
   * method returns `null`.  Otherwise an array of `File` objects
   * is returned, one for each file or directory in the directory.  Pathnames
   * denoting the directory itself and the directory's parent directory are
   * not included in the result.  Each resulting abstract pathname is
   * constructed from this abstract pathname using the {@link #File(File,
   * String) File(File, String)} constructor.  Therefore if this
   * pathname is absolute then each resulting pathname is absolute; if this
   * pathname is relative then each resulting pathname will be relative to
   * the same directory.
   *
   *  There is no guarantee that the name strings in the resulting array
   * will appear in any specific order; they are not, in particular,
   * guaranteed to appear in alphabetical order.
   *
   *  Note that the {@link java.nio.file.Files} class defines the {@link
   * java.nio.file.Files#newDirectoryStream(Path) newDirectoryStream} method
   * to open a directory and iterate over the names of the files in the
   * directory. This may use less resources when working with very large
   * directories.
   *
   * @return  An array of abstract pathnames denoting the files and
   *          directories in the directory denoted by this abstract pathname.
   *          The array will be empty if the directory is empty.  Returns
   *          `null` if this abstract pathname does not denote a
   *          directory, or if an I/O error occurs.
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          SecurityManager#checkRead(String)} method denies read access to
   *          the directory
   *
   * @since  1.2
  */
  listFiles(): File[];
  /**
   * Returns an array of abstract pathnames denoting the files and
   * directories in the directory denoted by this abstract pathname that
   * satisfy the specified filter.  The behavior of this method is the same
   * as that of the {@link #listFiles()} method, except that the pathnames in
   * the returned array must satisfy the filter.  If the given `filter`
   * is `null` then all pathnames are accepted.  Otherwise, a pathname
   * satisfies the filter if and only if the value `true` results when
   * the {@link FilenameFilter#accept
   * FilenameFilter.accept(File, String)} method of the filter is
   * invoked on this abstract pathname and the name of a file or directory in
   * the directory that it denotes.
   *
   * @param  filter
   *         A filename filter
   *
   * @return  An array of abstract pathnames denoting the files and
   *          directories in the directory denoted by this abstract pathname.
   *          The array will be empty if the directory is empty.  Returns
   *          `null` if this abstract pathname does not denote a
   *          directory, or if an I/O error occurs.
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          SecurityManager#checkRead(String)} method denies read access to
   *          the directory
   *
   * @since  1.2
   * @see java.nio.file.Files#newDirectoryStream(Path,String)
  */
  listFiles(filter: FilenameFilter): File[];
  /**
   * Returns an array of abstract pathnames denoting the files and
   * directories in the directory denoted by this abstract pathname that
   * satisfy the specified filter.  The behavior of this method is the same
   * as that of the {@link #listFiles()} method, except that the pathnames in
   * the returned array must satisfy the filter.  If the given `filter`
   * is `null` then all pathnames are accepted.  Otherwise, a pathname
   * satisfies the filter if and only if the value `true` results when
   * the {@link FileFilter#accept FileFilter.accept(File)} method of the
   * filter is invoked on the pathname.
   *
   * @param  filter
   *         A file filter
   *
   * @return  An array of abstract pathnames denoting the files and
   *          directories in the directory denoted by this abstract pathname.
   *          The array will be empty if the directory is empty.  Returns
   *          `null` if this abstract pathname does not denote a
   *          directory, or if an I/O error occurs.
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          SecurityManager#checkRead(String)} method denies read access to
   *          the directory
   *
   * @since  1.2
   * @see java.nio.file.Files#newDirectoryStream(Path,java.nio.file.DirectoryStream.Filter)
  */
  listFiles(filter: FileFilter): File[];
  /**
   * Creates the directory named by this abstract pathname.
   *
   * @return  `true` if and only if the directory was
   *          created; `false` otherwise
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkWrite(java.lang.String)}
   *          method does not permit the named directory to be created
  */
  mkdir(): boolean;
  /**
   * Creates the directory named by this abstract pathname, including any
   * necessary but nonexistent parent directories.  Note that if this
   * operation fails it may have succeeded in creating some of the necessary
   * parent directories.
   *
   * @return  `true` if and only if the directory was created,
   *          along with all necessary parent directories; `false`
   *          otherwise
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkRead(java.lang.String)}
   *          method does not permit verification of the existence of the
   *          named directory and all necessary parent directories; or if
   *          the {@link
   *          java.lang.SecurityManager#checkWrite(java.lang.String)}
   *          method does not permit the named directory and all necessary
   *          parent directories to be created
  */
  mkdirs(): boolean;
  /**
   * Renames the file denoted by this abstract pathname.
   *
   *  Many aspects of the behavior of this method are inherently
   * platform-dependent: The rename operation might not be able to move a
   * file from one filesystem to another, it might not be atomic, and it
   * might not succeed if a file with the destination abstract pathname
   * already exists.  The return value should always be checked to make sure
   * that the rename operation was successful.
   *
   *  Note that the {@link java.nio.file.Files} class defines the {@link
   * java.nio.file.Files#move move} method to move or rename a file in a
   * platform independent manner.
   *
   * @param  dest  The new abstract pathname for the named file
   *
   * @return  `true` if and only if the renaming succeeded;
   *          `false` otherwise
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkWrite(java.lang.String)}
   *          method denies write access to either the old or new pathnames
   *
   * @throws  NullPointerException
   *          If parameter `dest` is `null`
  */
  renameTo(dest: File): boolean;
  /**
   * Sets the last-modified time of the file or directory named by this
   * abstract pathname.
   *
   *  All platforms support file-modification times to the nearest second,
   * but some provide more precision.  The argument will be truncated to fit
   * the supported precision.  If the operation succeeds and no intervening
   * operations on the file take place, then the next invocation of the
   * {@link #lastModified} method will return the (possibly
   * truncated) `time` argument that was passed to this method.
   *
   * @param  time  The new last-modified time, measured in milliseconds since
   *               the epoch (00:00:00 GMT, January 1, 1970)
   *
   * @return `true` if and only if the operation succeeded;
   *          `false` otherwise
   *
   * @throws  IllegalArgumentException  If the argument is negative
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkWrite(java.lang.String)}
   *          method denies write access to the named file
   *
   * @since 1.2
  */
  setLastModified(lastModified: number): void;
  /**
   * Marks the file or directory named by this abstract pathname so that
   * only read operations are allowed. After invoking this method the file
   * or directory will not change until it is either deleted or marked
   * to allow write access. On some platforms it may be possible to start the
   * Java virtual machine with special privileges that allow it to modify
   * files that are marked read-only. Whether or not a read-only file or
   * directory may be deleted depends upon the underlying system.
   *
   * @return `true` if and only if the operation succeeded;
   *          `false` otherwise
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkWrite(java.lang.String)}
   *          method denies write access to the named file
   *
   * @since 1.2
  */
  setReadOnly(): boolean;
  /**
   * Sets the owner's or everybody's write permission for this abstract
   * pathname. On some platforms it may be possible to start the Java virtual
   * machine with special privileges that allow it to modify files that
   * disallow write operations.
   *
   *  The {@link java.nio.file.Files} class defines methods that operate on
   * file attributes including file permissions. This may be used when finer
   * manipulation of file permissions is required.
   *
   * @param   writable
   *          If `true`, sets the access permission to allow write
   *          operations; if `false` to disallow write operations
   *
   * @param   ownerOnly
   *          If `true`, the write permission applies only to the
   *          owner's write permission; otherwise, it applies to everybody.  If
   *          the underlying file system can not distinguish the owner's write
   *          permission from that of others, then the permission will apply to
   *          everybody, regardless of this value.
   *
   * @return  `true` if and only if the operation succeeded. The
   *          operation will fail if the user does not have permission to change
   *          the access permissions of this abstract pathname.
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkWrite(java.lang.String)}
   *          method denies write access to the named file
   *
   * @since 1.6
  */
  setWritable(writable: boolean, ownerOnly: boolean): boolean;
  /**
   * A convenience method to set the owner's write permission for this abstract
   * pathname. On some platforms it may be possible to start the Java virtual
   * machine with special privileges that allow it to modify files that
   * disallow write operations.
   *
   *  An invocation of this method of the form `file.setWritable(arg)`
   * behaves in exactly the same way as the invocation
   *
   * {@code
   *     file.setWritable(arg, true)
   * }
   *
   * @param   writable
   *          If `true`, sets the access permission to allow write
   *          operations; if `false` to disallow write operations
   *
   * @return  `true` if and only if the operation succeeded.  The
   *          operation will fail if the user does not have permission to
   *          change the access permissions of this abstract pathname.
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkWrite(java.lang.String)}
   *          method denies write access to the file
   *
   * @since 1.6
  */
  setWritable(writable: boolean): boolean;
  /**
   * Sets the owner's or everybody's read permission for this abstract
   * pathname. On some platforms it may be possible to start the Java virtual
   * machine with special privileges that allow it to read files that are
   * marked as unreadable.
   *
   *  The {@link java.nio.file.Files} class defines methods that operate on
   * file attributes including file permissions. This may be used when finer
   * manipulation of file permissions is required.
   *
   * @param   readable
   *          If `true`, sets the access permission to allow read
   *          operations; if `false` to disallow read operations
   *
   * @param   ownerOnly
   *          If `true`, the read permission applies only to the
   *          owner's read permission; otherwise, it applies to everybody.  If
   *          the underlying file system can not distinguish the owner's read
   *          permission from that of others, then the permission will apply to
   *          everybody, regardless of this value.
   *
   * @return  `true` if and only if the operation succeeded.  The
   *          operation will fail if the user does not have permission to
   *          change the access permissions of this abstract pathname.  If
   *          `readable` is `false` and the underlying
   *          file system does not implement a read permission, then the
   *          operation will fail.
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkWrite(java.lang.String)}
   *          method denies write access to the file
   *
   * @since 1.6
  */
  setReadable(readable: boolean, ownerOnly: boolean): boolean;
  /**
   * A convenience method to set the owner's read permission for this abstract
   * pathname. On some platforms it may be possible to start the Java virtual
   * machine with special privileges that allow it to read files that are
   * marked as unreadable.
   *
   * An invocation of this method of the form `file.setReadable(arg)`
   * behaves in exactly the same way as the invocation
   *
   * {@code
   *     file.setReadable(arg, true)
   * }
   *
   * @param  readable
   *          If `true`, sets the access permission to allow read
   *          operations; if `false` to disallow read operations
   *
   * @return  `true` if and only if the operation succeeded.  The
   *          operation will fail if the user does not have permission to
   *          change the access permissions of this abstract pathname.  If
   *          `readable` is `false` and the underlying
   *          file system does not implement a read permission, then the
   *          operation will fail.
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkWrite(java.lang.String)}
   *          method denies write access to the file
   *
   * @since 1.6
  */
  setReadable(readable: boolean): boolean;
  /**
   * Sets the owner's or everybody's execute permission for this abstract
   * pathname. On some platforms it may be possible to start the Java virtual
   * machine with special privileges that allow it to execute files that are
   * not marked executable.
   *
   *  The {@link java.nio.file.Files} class defines methods that operate on
   * file attributes including file permissions. This may be used when finer
   * manipulation of file permissions is required.
   *
   * @param   executable
   *          If `true`, sets the access permission to allow execute
   *          operations; if `false` to disallow execute operations
   *
   * @param   ownerOnly
   *          If `true`, the execute permission applies only to the
   *          owner's execute permission; otherwise, it applies to everybody.
   *          If the underlying file system can not distinguish the owner's
   *          execute permission from that of others, then the permission will
   *          apply to everybody, regardless of this value.
   *
   * @return  `true` if and only if the operation succeeded.  The
   *          operation will fail if the user does not have permission to
   *          change the access permissions of this abstract pathname.  If
   *          `executable` is `false` and the underlying
   *          file system does not implement an execute permission, then the
   *          operation will fail.
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkWrite(java.lang.String)}
   *          method denies write access to the file
   *
   * @since 1.6
  */
  setExecutable(executable: boolean, ownerOnly: boolean): boolean;
  /**
   * A convenience method to set the owner's execute permission for this
   * abstract pathname. On some platforms it may be possible to start the Java
   * virtual machine with special privileges that allow it to execute files
   * that are not marked executable.
   *
   * An invocation of this method of the form `file.setExcutable(arg)`
   * behaves in exactly the same way as the invocation
   *
   * {@code
   *     file.setExecutable(arg, true)
   * }
   *
   * @param   executable
   *          If `true`, sets the access permission to allow execute
   *          operations; if `false` to disallow execute operations
   *
   * @return   `true` if and only if the operation succeeded.  The
   *           operation will fail if the user does not have permission to
   *           change the access permissions of this abstract pathname.  If
   *           `executable` is `false` and the underlying
   *           file system does not implement an execute permission, then the
   *           operation will fail.
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkWrite(java.lang.String)}
   *          method denies write access to the file
   *
   * @since 1.6
  */
  setExecutable(executable: boolean): boolean;
  /**
   * Tests whether the application can execute the file denoted by this
   * abstract pathname. On some platforms it may be possible to start the
   * Java virtual machine with special privileges that allow it to execute
   * files that are not marked executable. Consequently this method may return
   * `true` even though the file does not have execute permissions.
   *
   * @return  `true` if and only if the abstract pathname exists
   *          and the application is allowed to execute the file
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkExec(java.lang.String)}
   *          method denies execute access to the file
   *
   * @since 1.6
  */
  canExecute(): boolean;
  /**
   * List the available filesystem roots.
   *
   *  A particular Java platform may support zero or more
   * hierarchically-organized file systems.  Each file system has a
   * `root` directory from which all other files in that file system
   * can be reached.  Windows platforms, for example, have a root directory
   * for each active drive; UNIX platforms have a single root directory,
   * namely `"/"`.  The set of available filesystem roots is affected
   * by various system-level operations such as the insertion or ejection of
   * removable media and the disconnecting or unmounting of physical or
   * virtual disk drives.
   *
   *  This method returns an array of `File` objects that denote the
   * root directories of the available filesystem roots.  It is guaranteed
   * that the canonical pathname of any file physically present on the local
   * machine will begin with one of the roots returned by this method.
   *
   *  The canonical pathname of a file that resides on some other machine
   * and is accessed via a remote-filesystem protocol such as SMB or NFS may
   * or may not begin with one of the roots returned by this method.  If the
   * pathname of a remote file is syntactically indistinguishable from the
   * pathname of a local file then it will begin with one of the roots
   * returned by this method.  Thus, for example, `File` objects
   * denoting the root directories of the mapped network drives of a Windows
   * platform will be returned by this method, while `File` objects
   * containing UNC pathnames will not be returned by this method.
   *
   *  Unlike most methods in this class, this method does not throw
   * security exceptions.  If a security manager exists and its {@link
   * SecurityManager#checkRead(String)} method denies read access to a
   * particular root directory, then that directory will not appear in the
   * result.
   *
   * @return  An array of `File` objects denoting the available
   *          filesystem roots, or `null` if the set of roots could not
   *          be determined.  The array will be empty if there are no
   *          filesystem roots.
   *
   * @since  1.2
   * @see java.nio.file.FileStore
  */
  static listRoots(): File[];
  /**
   * Returns the size of the partition named by this
   * abstract pathname. If the total number of bytes in the partition is
   * greater than {@link Long#MAX_VALUE}, then `Long.MAX_VALUE` will be
   * returned.
   *
   * @return  The size, in bytes, of the partition or `0L` if this
   *          abstract pathname does not name a partition or if the size
   *          cannot be obtained
   *
   * @throws  SecurityException
   *          If a security manager has been installed and it denies
   *          {@link RuntimePermission}`("getFileSystemAttributes")`
   *          or its {@link SecurityManager#checkRead(String)} method denies
   *          read access to the file named by this abstract pathname
   *
   * @since  1.6
   * @see FileStore#getTotalSpace
  */
  getTotalSpace(): number;
  /**
   * Returns the number of unallocated bytes in the partition named by this abstract path name.  If the
   * number of unallocated bytes in the partition is greater than
   * {@link Long#MAX_VALUE}, then `Long.MAX_VALUE` will be returned.
   *
   *  The returned number of unallocated bytes is a hint, but not
   * a guarantee, that it is possible to use most or any of these
   * bytes.  The number of unallocated bytes is most likely to be
   * accurate immediately after this call.  It is likely to be made
   * inaccurate by any external I/O operations including those made
   * on the system outside of this virtual machine.  This method
   * makes no guarantee that write operations to this file system
   * will succeed.
   *
   * @return  The number of unallocated bytes on the partition or `0L`
   *          if the abstract pathname does not name a partition or if this
   *          number cannot be obtained.  This value will be less than or
   *          equal to the total file system size returned by
   *          {@link #getTotalSpace}.
   *
   * @throws  SecurityException
   *          If a security manager has been installed and it denies
   *          {@link RuntimePermission}`("getFileSystemAttributes")`
   *          or its {@link SecurityManager#checkRead(String)} method denies
   *          read access to the file named by this abstract pathname
   *
   * @since  1.6
   * @see FileStore#getUnallocatedSpace
  */
  getFreeSpace(): number;
  /**
   * Returns the number of bytes available to this virtual machine on the
   * partition named by this abstract pathname.  If
   * the number of available bytes in the partition is greater than
   * {@link Long#MAX_VALUE}, then `Long.MAX_VALUE` will be returned.
   * When possible, this method checks for write permissions and other
   * operating system restrictions and will therefore usually provide a more
   * accurate estimate of how much new data can actually be written than
   * {@link #getFreeSpace}.
   *
   *  The returned number of available bytes is a hint, but not a
   * guarantee, that it is possible to use most or any of these bytes.  The
   * number of available bytes is most likely to be accurate immediately
   * after this call.  It is likely to be made inaccurate by any external
   * I/O operations including those made on the system outside of this
   * virtual machine.  This method makes no guarantee that write operations
   * to this file system will succeed.
   *
   * @return  The number of available bytes on the partition or `0L`
   *          if the abstract pathname does not name a partition or if this
   *          number cannot be obtained.  On systems where this information
   *          is not available, this method will be equivalent to a call to
   *          {@link #getFreeSpace}.
   *
   * @throws  SecurityException
   *          If a security manager has been installed and it denies
   *          {@link RuntimePermission}`("getFileSystemAttributes")`
   *          or its {@link SecurityManager#checkRead(String)} method denies
   *          read access to the file named by this abstract pathname
   *
   * @since  1.6
   * @see FileStore#getUsableSpace
  */
  getUsableSpace(): number;
  /**
   *  Creates a new empty file in the specified directory, using the
   * given prefix and suffix strings to generate its name.  If this method
   * returns successfully then it is guaranteed that:
   *
   * 
   *  The file denoted by the returned abstract pathname did not exist
   *      before this method was invoked, and
   *  Neither this method nor any of its variants will return the same
   *      abstract pathname again in the current invocation of the virtual
   *      machine.
   * 
   *
   * This method provides only part of a temporary-file facility.  To arrange
   * for a file created by this method to be deleted automatically, use the
   * {@link #deleteOnExit} method.
   *
   *  The `prefix` argument must be at least three characters
   * long.  It is recommended that the prefix be a short, meaningful string
   * such as `"hjb"` or `"mail"`.  The
   * `suffix` argument may be `null`, in which case the
   * suffix `".tmp"` will be used.
   *
   *  To create the new file, the prefix and the suffix may first be
   * adjusted to fit the limitations of the underlying platform.  If the
   * prefix is too long then it will be truncated, but its first three
   * characters will always be preserved.  If the suffix is too long then it
   * too will be truncated, but if it begins with a period character
   * (`'.'`) then the period and the first three characters
   * following it will always be preserved.  Once these adjustments have been
   * made the name of the new file will be generated by concatenating the
   * prefix, five or more internally-generated characters, and the suffix.
   *
   *  If the `directory` argument is `null` then the
   * system-dependent default temporary-file directory will be used.  The
   * default temporary-file directory is specified by the system property
   * `java.io.tmpdir`.  On UNIX systems the default value of this
   * property is typically `"/tmp"` or `"/var/tmp"`; on
   * Microsoft Windows systems it is typically `"C:\\WINNT\\TEMP"`.  A different
   * value may be given to this system property when the Java virtual machine
   * is invoked, but programmatic changes to this property are not guaranteed
   * to have any effect upon the temporary directory used by this method.
   *
   * @param  prefix     The prefix string to be used in generating the file's
   *                    name; must be at least three characters long
   *
   * @param  suffix     The suffix string to be used in generating the file's
   *                    name; may be `null`, in which case the
   *                    suffix `".tmp"` will be used
   *
   * @param  directory  The directory in which the file is to be created, or
   *                    `null` if the default temporary-file
   *                    directory is to be used
   *
   * @return  An abstract pathname denoting a newly-created empty file
   *
   * @throws  IllegalArgumentException
   *          If the `prefix` argument contains fewer than three
   *          characters
   *
   * @throws  IOException  If a file could not be created
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkWrite(java.lang.String)}
   *          method does not allow a file to be created
   *
   * @since 1.2
  */
  static createTempFile(prefix: string, suffix: string, directory: File): File;
  /**
   * Creates an empty file in the default temporary-file directory, using
   * the given prefix and suffix to generate its name. Invoking this method
   * is equivalent to invoking {@link #createTempFile(java.lang.String,
   * java.lang.String, java.io.File)
   * createTempFile(prefix, suffix, null)}.
   *
   *  The {@link
   * java.nio.file.Files#createTempFile(String,String,java.nio.file.attribute.FileAttribute[])
   * Files.createTempFile} method provides an alternative method to create an
   * empty file in the temporary-file directory. Files created by that method
   * may have more restrictive access permissions to files created by this
   * method and so may be more suited to security-sensitive applications.
   *
   * @param  prefix     The prefix string to be used in generating the file's
   *                    name; must be at least three characters long
   *
   * @param  suffix     The suffix string to be used in generating the file's
   *                    name; may be `null`, in which case the
   *                    suffix `".tmp"` will be used
   *
   * @return  An abstract pathname denoting a newly-created empty file
   *
   * @throws  IllegalArgumentException
   *          If the `prefix` argument contains fewer than three
   *          characters
   *
   * @throws  IOException  If a file could not be created
   *
   * @throws  SecurityException
   *          If a security manager exists and its {@link
   *          java.lang.SecurityManager#checkWrite(java.lang.String)}
   *          method does not allow a file to be created
   *
   * @since 1.2
   * @see java.nio.file.Files#createTempDirectory(String,FileAttribute[])
  */
  static createTempFile(prefix: string, suffix: string): File;
  /**
   * Compares two abstract pathnames lexicographically.  The ordering
   * defined by this method depends upon the underlying system.  On UNIX
   * systems, alphabetic case is significant in comparing pathnames; on Microsoft Windows
   * systems it is not.
   *
   * @param   pathname  The abstract pathname to be compared to this abstract
   *                    pathname
   *
   * @return  Zero if the argument is equal to this abstract pathname, a
   *          value less than zero if this abstract pathname is
   *          lexicographically less than the argument, or a value greater
   *          than zero if this abstract pathname is lexicographically
   *          greater than the argument
   *
   * @since   1.2
  */
  compareTo(pathname: File): number;
  /**
   * Tests this abstract pathname for equality with the given object.
   * Returns `true` if and only if the argument is not
   * `null` and is an abstract pathname that denotes the same file
   * or directory as this abstract pathname.  Whether or not two abstract
   * pathnames are equal depends upon the underlying system.  On UNIX
   * systems, alphabetic case is significant in comparing pathnames; on Microsoft Windows
   * systems it is not.
   *
   * @param   obj   The object to be compared with this abstract pathname
   *
   * @return  `true` if and only if the objects are the same;
   *          `false` otherwise
  */
  equals(obj: any): boolean;
  /**
   * Computes a hash code for this abstract pathname.  Because equality of
   * abstract pathnames is inherently system-dependent, so is the computation
   * of their hash codes.  On UNIX systems, the hash code of an abstract
   * pathname is equal to the exclusive or of the hash code
   * of its pathname string and the decimal value
   * `1234321`.  On Microsoft Windows systems, the hash
   * code is equal to the exclusive or of the hash code of
   * its pathname string converted to lower case and the decimal
   * value `1234321`.  Locale is not taken into account on
   * lowercasing the pathname string.
   *
   * @return  A hash code for this abstract pathname
  */
  hashCode(): number;
  /**
   * Returns the pathname string of this abstract pathname.  This is just the
   * string returned by the {@link #getPath} method.
   *
   * @return  The string form of this abstract pathname
  */
  toString(): string;
  /**
   * Returns a {@link Path java.nio.file.Path} object constructed from
   * this abstract path. The resulting `Path` is associated with the
   * {@link java.nio.file.FileSystems#getDefault default-filesystem}.
   *
   *  The first invocation of this method works as if invoking it were
   * equivalent to evaluating the expression:
   *      * {@link java.nio.file.FileSystems#getDefault FileSystems.getDefault}().{@link
   * java.nio.file.FileSystem#getPath getPath}(this.{@link #getPath getPath}());
   * 
   * Subsequent invocations of this method return the same `Path`.
   *
   *  If this abstract pathname is the empty abstract pathname then this
   * method returns a `Path` that may be used to access the current
   * user directory.
   *
   * @return  a `Path` constructed from this abstract path
   *
   * @throws  java.nio.file.InvalidPathException
   *          if a `Path` object cannot be constructed from the abstract
   *          path (see {@link java.nio.file.FileSystem#getPath FileSystem.getPath})
   *
   * @since   1.7
   * @see Path#toFile
  */
  toPath(): Path;
  /**
   * Compares this object with the specified object for order.  Returns a
   * negative integer, zero, or a positive integer as this object is less
   * than, equal to, or greater than the specified object.
   *
   * The implementor must ensure
   * `sgn(x.compareTo(y)) == -sgn(y.compareTo(x))`
   * for all `x` and `y`.  (This
   * implies that `x.compareTo(y)` must throw an exception iff
   * `y.compareTo(x)` throws an exception.)
   *
   * The implementor must also ensure that the relation is transitive:
   * `(x.compareTo(y) > 0 && y.compareTo(z) > 0)` implies
   * `x.compareTo(z) > 0`.
   *
   * Finally, the implementor must ensure that `x.compareTo(y)==0`
   * implies that `sgn(x.compareTo(z)) == sgn(y.compareTo(z))`, for
   * all `z`.
   *
   * It is strongly recommended, but not strictly required that
   * `(x.compareTo(y)==0) == (x.equals(y))`.  Generally speaking, any
   * class that implements the `Comparable` interface and violates
   * this condition should clearly indicate this fact.  The recommended
   * language is "Note: this class has a natural ordering that is
   * inconsistent with equals."
   *
   * In the foregoing description, the notation
   * `sgn(`expression`)` designates the mathematical
   * signum function, which is defined to return one of `-1`,
   * `0`, or `1` according to whether the value of
   * expression is negative, zero, or positive, respectively.
   *
   * @param   o the object to be compared.
   * @return  a negative integer, zero, or a positive integer as this object
   *          is less than, equal to, or greater than the specified object.
   *
   * @throws NullPointerException if the specified object is null
   * @throws ClassCastException if the specified object's type prevents it
   *         from being compared to this object.
  */
  compareTo(o: T): number;
}
export interface File extends Serializable, Comparable<File> {}
/**
 * Thrown when a serious I/O error has occurred.
 *
 * @author  Xueming Shen
 * @since   1.6
*/
export class IOError extends Error {
  /**
   * Constructs a new instance of IOError with the specified cause. The
   * IOError is created with the detail message of
   * `(cause==null ? null : cause.toString())` (which typically
   * contains the class and detail message of cause).
   *
   * @param  cause
   *         The cause of this error, or `null` if the cause
   *         is not known
  */
  constructor(cause: Throwable);
}
/**
 * ObjectOutput extends the DataOutput interface to include writing of objects.
 * DataOutput includes methods for output of primitive types, ObjectOutput
 * extends that interface to include objects, arrays, and Strings.
 *
 * @see java.io.InputStream
 * @see java.io.ObjectOutputStream
 * @see java.io.ObjectInputStream
 * @since   1.1
*/
export class ObjectOutput extends DataOutput {
  /**
   * Write an object to the underlying storage or stream.  The
   * class that implements this interface defines how the object is
   * written.
   *
   * @param     obj the object to be written
   * @throws    IOException Any of the usual Input/Output related exceptions.
  */
  writeObject(obj: any): void;
  /**
   * Writes a byte. This method will block until the byte is actually
   * written.
   * @param     b the byte
   * @throws    IOException If an I/O error has occurred.
  */
  write(b: number): void;
  /**
   * Writes an array of bytes. This method will block until the bytes
   * are actually written.
   * @param     b the data to be written
   * @throws    IOException If an I/O error has occurred.
  */
  write(b: number[]): void;
  /**
   * Writes a sub array of bytes.
   * @param     b the data to be written
   * @param     off       the start offset in the data
   * @param     len       the number of bytes that are written
   * @throws    IOException If an I/O error has occurred.
  */
  write(b: number[], off: number, len: number): void;
  /**
   * Flushes the stream. This will write any buffered
   * output bytes.
   * @throws    IOException If an I/O error has occurred.
  */
  flush(): void;
  /**
   * Closes the stream. This method must be called
   * to release any resources associated with the
   * stream.
   * @throws    IOException If an I/O error has occurred.
  */
  close(): void;
}
export interface ObjectOutput extends DataOutput, AutoCloseable {}
export class StreamTokenizer {
  /**
   * After a call to the `nextToken` method, this field
   * contains the type of the token just read. For a single character
   * token, its value is the single character, converted to an integer.
   * For a quoted string token, its value is the quote character.
   * Otherwise, its value is one of the following:
   * 
   * `TT_WORD` indicates that the token is a word.
   * `TT_NUMBER` indicates that the token is a number.
   * `TT_EOL` indicates that the end of line has been read.
   *     The field can only have this value if the
   *     `eolIsSignificant` method has been called with the
   *     argument `true`.
   * `TT_EOF` indicates that the end of the input stream
   *     has been reached.
   * 
   * 
   * The initial value of this field is -4.
   *
   * @see     java.io.StreamTokenizer#eolIsSignificant(boolean)
   * @see     java.io.StreamTokenizer#nextToken()
   * @see     java.io.StreamTokenizer#quoteChar(int)
   * @see     java.io.StreamTokenizer#TT_EOF
   * @see     java.io.StreamTokenizer#TT_EOL
   * @see     java.io.StreamTokenizer#TT_NUMBER
   * @see     java.io.StreamTokenizer#TT_WORD
  */
  ttype: number;
  /**
   * A constant indicating that the end of the stream has been read.
  */
  static readonly TT_EOF: number;
  /**
   * A constant indicating that the end of the line has been read.
  */
  static readonly TT_EOL: number;
  /**
   * A constant indicating that a number token has been read.
  */
  static readonly TT_NUMBER: number;
  /**
   * A constant indicating that a word token has been read.
  */
  static readonly TT_WORD: number;
  /**
   * If the current token is a word token, this field contains a
   * string giving the characters of the word token. When the current
   * token is a quoted string token, this field contains the body of
   * the string.
   * 
   * The current token is a word when the value of the
   * `ttype` field is `TT_WORD`. The current token is
   * a quoted string token when the value of the `ttype` field is
   * a quote character.
   * 
   * The initial value of this field is null.
   *
   * @see     java.io.StreamTokenizer#quoteChar(int)
   * @see     java.io.StreamTokenizer#TT_WORD
   * @see     java.io.StreamTokenizer#ttype
  */
  sval: string;
  /**
   * If the current token is a number, this field contains the value
   * of that number. The current token is a number when the value of
   * the `ttype` field is `TT_NUMBER`.
   * 
   * The initial value of this field is 0.0.
   *
   * @see     java.io.StreamTokenizer#TT_NUMBER
   * @see     java.io.StreamTokenizer#ttype
  */
  nval: number;
  /**
   * Creates a stream tokenizer that parses the specified input
   * stream. The stream tokenizer is initialized to the following
   * default state:
   * 
   * All byte values `'A'` through `'Z'`,
   *     `'a'` through `'z'`, and
   *     `'\u005Cu00A0'` through `'\u005Cu00FF'` are
   *     considered to be alphabetic.
   * All byte values `'\u005Cu0000'` through
   *     `'\u005Cu0020'` are considered to be white space.
   * `'/'` is a comment character.
   * Single quote `'\u005C''` and double quote `'"'`
   *     are string quote characters.
   * Numbers are parsed.
   * Ends of lines are treated as white space, not as separate tokens.
   * C-style and C++-style comments are not recognized.
   * 
   *
   * @deprecated As of JDK version 1.1, the preferred way to tokenize an
   * input stream is to convert it into a character stream, for example:
   *      *   Reader r = new BufferedReader(new InputStreamReader(is));
   *   StreamTokenizer st = new StreamTokenizer(r);
   * 
   *
   * @param      is        an input stream.
   * @see        java.io.BufferedReader
   * @see        java.io.InputStreamReader
   * @see        java.io.StreamTokenizer#StreamTokenizer(java.io.Reader)
  */
  constructor(is: InputStream);
  /**
   * Create a tokenizer that parses the given character stream.
   *
   * @param r  a Reader object providing the input stream.
   * @since   1.1
  */
  constructor(r: Reader);
  /**
   * Resets this tokenizer's syntax table so that all characters are
   * "ordinary." See the `ordinaryChar` method
   * for more information on a character being ordinary.
   *
   * @see     java.io.StreamTokenizer#ordinaryChar(int)
  */
  resetSyntax(): void;
  /**
   * Specifies that all characters c in the range
   * `low <= c <= high`
   * are word constituents. A word token consists of a word constituent
   * followed by zero or more word constituents or number constituents.
   *
   * @param   low   the low end of the range.
   * @param   hi    the high end of the range.
  */
  wordChars(low: number, hi: number): void;
  /**
   * Specifies that all characters c in the range
   * `low <= c <= high`
   * are white space characters. White space characters serve only to
   * separate tokens in the input stream.
   *
   * Any other attribute settings for the characters in the specified
   * range are cleared.
   *
   * @param   low   the low end of the range.
   * @param   hi    the high end of the range.
  */
  whitespaceChars(low: number, hi: number): void;
  /**
   * Specifies that all characters c in the range
   * `low <= c <= high`
   * are "ordinary" in this tokenizer. See the
   * `ordinaryChar` method for more information on a
   * character being ordinary.
   *
   * @param   low   the low end of the range.
   * @param   hi    the high end of the range.
   * @see     java.io.StreamTokenizer#ordinaryChar(int)
  */
  ordinaryChars(low: number, hi: number): void;
  /**
   * Specifies that the character argument is "ordinary"
   * in this tokenizer. It removes any special significance the
   * character has as a comment character, word component, string
   * delimiter, white space, or number character. When such a character
   * is encountered by the parser, the parser treats it as a
   * single-character token and sets `ttype` field to the
   * character value.
   *
   * Making a line terminator character "ordinary" may interfere
   * with the ability of a `StreamTokenizer` to count
   * lines. The `lineno` method may no longer reflect
   * the presence of such terminator characters in its line count.
   *
   * @param   ch   the character.
   * @see     java.io.StreamTokenizer#ttype
  */
  ordinaryChar(ch: number): void;
  /**
   * Specified that the character argument starts a single-line
   * comment. All characters from the comment character to the end of
   * the line are ignored by this stream tokenizer.
   *
   * Any other attribute settings for the specified character are cleared.
   *
   * @param   ch   the character.
  */
  commentChar(ch: number): void;
  /**
   * Specifies that matching pairs of this character delimit string
   * constants in this tokenizer.
   * 
   * When the `nextToken` method encounters a string
   * constant, the `ttype` field is set to the string
   * delimiter and the `sval` field is set to the body of
   * the string.
   * 
   * If a string quote character is encountered, then a string is
   * recognized, consisting of all characters after (but not including)
   * the string quote character, up to (but not including) the next
   * occurrence of that same string quote character, or a line
   * terminator, or end of file. The usual escape sequences such as
   * `"\u005Cn"` and `"\u005Ct"` are recognized and
   * converted to single characters as the string is parsed.
   *
   * Any other attribute settings for the specified character are cleared.
   *
   * @param   ch   the character.
   * @see     java.io.StreamTokenizer#nextToken()
   * @see     java.io.StreamTokenizer#sval
   * @see     java.io.StreamTokenizer#ttype
  */
  quoteChar(ch: number): void;
  /**
   * Specifies that numbers should be parsed by this tokenizer. The
   * syntax table of this tokenizer is modified so that each of the twelve
   * characters:
   *      *      0 1 2 3 4 5 6 7 8 9 . -
   * 
   * 
   * has the "numeric" attribute.
   * 
   * When the parser encounters a word token that has the format of a
   * double precision floating-point number, it treats the token as a
   * number rather than a word, by setting the `ttype`
   * field to the value `TT_NUMBER` and putting the numeric
   * value of the token into the `nval` field.
   *
   * @see     java.io.StreamTokenizer#nval
   * @see     java.io.StreamTokenizer#TT_NUMBER
   * @see     java.io.StreamTokenizer#ttype
  */
  parseNumbers(): void;
  /**
   * Determines whether or not ends of line are treated as tokens.
   * If the flag argument is true, this tokenizer treats end of lines
   * as tokens; the `nextToken` method returns
   * `TT_EOL` and also sets the `ttype` field to
   * this value when an end of line is read.
   * 
   * A line is a sequence of characters ending with either a
   * carriage-return character (`'\u005Cr'`) or a newline
   * character (`'\u005Cn'`). In addition, a carriage-return
   * character followed immediately by a newline character is treated
   * as a single end-of-line token.
   * 
   * If the `flag` is false, end-of-line characters are
   * treated as white space and serve only to separate tokens.
   *
   * @param   flag   `true` indicates that end-of-line characters
   *                 are separate tokens; `false` indicates that
   *                 end-of-line characters are white space.
   * @see     java.io.StreamTokenizer#nextToken()
   * @see     java.io.StreamTokenizer#ttype
   * @see     java.io.StreamTokenizer#TT_EOL
  */
  eolIsSignificant(flag: boolean): void;
  /**
   * Determines whether or not the tokenizer recognizes C-style comments.
   * If the flag argument is `true`, this stream tokenizer
   * recognizes C-style comments. All text between successive
   * occurrences of `/*` and * / are discarded.
   * 
   * If the flag argument is `false`, then C-style comments
   * are not treated specially.
   *
   * @param   flag   `true` indicates to recognize and ignore
   *                 C-style comments.
  */
  slashStarComments(flag: boolean): void;
  /**
   * Determines whether or not the tokenizer recognizes C++-style comments.
   * If the flag argument is `true`, this stream tokenizer
   * recognizes C++-style comments. Any occurrence of two consecutive
   * slash characters (`'/'`) is treated as the beginning of
   * a comment that extends to the end of the line.
   * 
   * If the flag argument is `false`, then C++-style
   * comments are not treated specially.
   *
   * @param   flag   `true` indicates to recognize and ignore
   *                 C++-style comments.
  */
  slashSlashComments(flag: boolean): void;
  /**
   * Determines whether or not word token are automatically lowercased.
   * If the flag argument is `true`, then the value in the
   * `sval` field is lowercased whenever a word token is
   * returned (the `ttype` field has the
   * value `TT_WORD` by the `nextToken` method
   * of this tokenizer.
   * 
   * If the flag argument is `false`, then the
   * `sval` field is not modified.
   *
   * @param   fl   `true` indicates that all word tokens should
   *               be lowercased.
   * @see     java.io.StreamTokenizer#nextToken()
   * @see     java.io.StreamTokenizer#ttype
   * @see     java.io.StreamTokenizer#TT_WORD
  */
  lowerCaseMode(fl: boolean): void;
  /**
   * Parses the next token from the input stream of this tokenizer.
   * The type of the next token is returned in the `ttype`
   * field. Additional information about the token may be in the
   * `nval` field or the `sval` field of this
   * tokenizer.
   * 
   * Typical clients of this
   * class first set up the syntax tables and then sit in a loop
   * calling nextToken to parse successive tokens until TT_EOF
   * is returned.
   *
   * @return     the value of the `ttype` field.
   * @throws     IOException  if an I/O error occurs.
   * @see        java.io.StreamTokenizer#nval
   * @see        java.io.StreamTokenizer#sval
   * @see        java.io.StreamTokenizer#ttype
  */
  nextToken(): number;
  /**
   * Causes the next call to the `nextToken` method of this
   * tokenizer to return the current value in the `ttype`
   * field, and not to modify the value in the `nval` or
   * `sval` field.
   *
   * @see     java.io.StreamTokenizer#nextToken()
   * @see     java.io.StreamTokenizer#nval
   * @see     java.io.StreamTokenizer#sval
   * @see     java.io.StreamTokenizer#ttype
  */
  pushBack(): void;
  /**
   * Return the current line number.
   *
   * @return  the current line number of this stream tokenizer.
  */
  lineno(): number;
  /**
   * Returns the string representation of the current stream token and
   * the line number it occurs on.
   *
   * The precise string returned is unspecified, although the following
   * example can be considered typical:
   *
   * Token['a'], line 10
   *
   * @return  a string representation of the token
   * @see     java.io.StreamTokenizer#nval
   * @see     java.io.StreamTokenizer#sval
   * @see     java.io.StreamTokenizer#ttype
  */
  toString(): string;
}
/**
 * Indicates that an annotated field or method is part of the {@linkplain
 * Serializable serialization mechanism} defined by the
 * Java Object Serialization Specification. This
 * annotation type is intended to allow compile-time checking of
 * serialization-related declarations, analogous to the checking
 * enabled by the {@link java.lang.Override} annotation type to
 * validate method overriding. `Serializable` classes are encouraged to
 * use `@Serial` annotations to help a compiler catch
 * mis-declared serialization-related fields and methods,
 * mis-declarations that may otherwise be difficult to detect.
 *
 * Specifically, annotations of this type should be
 * applied to serialization-related methods and fields in classes
 * declared to be `Serializable`. The five serialization-related
 * methods are:
 *
 * 
 * `private void writeObject(java.io.ObjectOutputStream stream) throws IOException`
 * `private void readObject(java.io.ObjectInputStream stream) throws IOException, ClassNotFoundException`
 * `private void readObjectNoData() throws ObjectStreamException`
 * ANY-ACCESS-MODIFIER `Object writeReplace() throws ObjectStreamException`
 * ANY-ACCESS-MODIFIER `Object readResolve() throws ObjectStreamException`
 * 
 *
 * The two serialization-related fields are:
 *
 * 
 * `private static final ObjectStreamField[] serialPersistentFields`
 * `private static final long serialVersionUID`
 * 
 *
 * Compilers are encouraged to validate that a method or field marked with a
 * `@Serial` annotation is one of the defined serialization-related
 * methods or fields declared in a meaningful context and issue a warning
 * if that is not the case.
 *
 * It is a semantic error to apply this annotation to other fields or methods, including:
 * 
 * fields or methods in a class that is not `Serializable`
 *
 * fields or methods of the proper structural declaration, but in
 * a type where they are ineffectual. For example, `enum` types
 * are defined to have a `serialVersionUID` of `0L` so a
 * `serialVersionUID` field declared in an `enum` type is
 * ignored. The five serialization-related methods identified above
 * are likewise ignored for an `enum` type.
 *
 * in a class that is `Externalizable`:
 * 
 *    method declarations of `writeObject`, ` *   readObject`, and `readObjectNoData`
 *
 *  a field declaration for `serialPersistentFields`
 * 
 *
 * While the `Externalizable` interface extends ` * Serializable`, the three methods and one field above are
 * not used for externalizable classes.
 *
 * 
 *
 * Note that serialization mechanism accesses its designated fields
 * and methods reflectively and those fields and methods may appear
 * otherwise unused in a `Serializable` class.
 *
 * @see Serializable
 * @see Externalizable
 * @since 14
*/
export class Serial {

}
/**
 * This class implements a character buffer that can be used as an Writer.
 * The buffer automatically grows when data is written to the stream.  The data
 * can be retrieved using toCharArray() and toString().
 * 
 * Note: Invoking close() on this class has no effect, and methods
 * of this class can be called after the stream has closed
 * without generating an IOException.
 *
 * @author      Herb Jellinek
 * @since       1.1
*/
export class CharArrayWriter extends Writer {
  /**
   * Creates a new CharArrayWriter.
  */
  constructor();
  /**
   * Creates a new CharArrayWriter with the specified initial size.
   *
   * @param  initialSize  an int specifying the initial buffer size.
   * @throws IllegalArgumentException if initialSize is negative
  */
  constructor(initialSize: number);
  /**
   * Writes a character to the buffer.
  */
  write(c: number): void;
  /**
   * Writes characters to the buffer.
   * @param c the data to be written
   * @param off       the start offset in the data
   * @param len       the number of chars that are written
   *
   * @throws  IndexOutOfBoundsException
   *          If `off` is negative, or `len` is negative,
   *          or `off + len` is negative or greater than the length
   *          of the given array
  */
  write(c: string[], off: number, len: number): void;
  /**
   * Write a portion of a string to the buffer.
   * @param  str  String to be written from
   * @param  off  Offset from which to start reading characters
   * @param  len  Number of characters to be written
   *
   * @throws  IndexOutOfBoundsException
   *          If `off` is negative, or `len` is negative,
   *          or `off + len` is negative or greater than the length
   *          of the given string
  */
  write(str: string, off: number, len: number): void;
  /**
   * Writes the contents of the buffer to another character stream.
   *
   * @param out       the output stream to write to
   * @throws IOException If an I/O error occurs.
  */
  writeTo(out: Writer): void;
  /**
   * Appends the specified character sequence to this writer.
   *
   *  An invocation of this method of the form `out.append(csq)`
   * behaves in exactly the same way as the invocation
   *
   *      *     out.write(csq.toString()) 
   *
   *  Depending on the specification of `toString` for the
   * character sequence `csq`, the entire sequence may not be
   * appended. For instance, invoking the `toString` method of a
   * character buffer will return a subsequence whose content depends upon
   * the buffer's position and limit.
   *
   * @param  csq
   *         The character sequence to append.  If `csq` is
   *         `null`, then the four characters `"null"` are
   *         appended to this writer.
   *
   * @return  This writer
   *
   * @since  1.5
  */
  append(csq: CharSequence): CharArrayWriter;
  /**
   * Appends a subsequence of the specified character sequence to this writer.
   *
   *  An invocation of this method of the form
   * `out.append(csq, start, end)` when
   * `csq` is not `null`, behaves in
   * exactly the same way as the invocation
   *
   *      *     out.write(csq.subSequence(start, end).toString()) 
   *
   * @param  csq
   *         The character sequence from which a subsequence will be
   *         appended.  If `csq` is `null`, then characters
   *         will be appended as if `csq` contained the four
   *         characters `"null"`.
   *
   * @param  start
   *         The index of the first character in the subsequence
   *
   * @param  end
   *         The index of the character following the last character in the
   *         subsequence
   *
   * @return  This writer
   *
   * @throws  IndexOutOfBoundsException
   *          If `start` or `end` are negative, `start`
   *          is greater than `end`, or `end` is greater than
   *          `csq.length()`
   *
   * @since  1.5
  */
  append(csq: CharSequence, start: number, end: number): CharArrayWriter;
  /**
   * Appends the specified character to this writer.
   *
   *  An invocation of this method of the form `out.append(c)`
   * behaves in exactly the same way as the invocation
   *
   *      *     out.write(c) 
   *
   * @param  c
   *         The 16-bit character to append
   *
   * @return  This writer
   *
   * @since 1.5
  */
  append(c: string): CharArrayWriter;
  /**
   * Resets the buffer so that you can use it again without
   * throwing away the already allocated buffer.
  */
  reset(): void;
  /**
   * Returns a copy of the input data.
   *
   * @return an array of chars copied from the input data.
  */
  toCharArray(): string[];
  /**
   * Returns the current size of the buffer.
   *
   * @return an int representing the current size of the buffer.
  */
  size(): number;
  /**
   * Converts input data to a string.
   * @return the string.
  */
  toString(): string;
  /**
   * Flush the stream.
  */
  flush(): void;
  /**
   * Close the stream.  This method does not release the buffer, since its
   * contents might still be required. Note: Invoking this method in this class
   * will have no effect.
  */
  close(): void;
  /**
   * Writes an array of characters.
   *
   * @param  cbuf
   *         Array of characters to be written
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(cbuf: string[]): void;
  /**
   * Writes a string.
   *
   * @param  str
   *         String to be written
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  write(str: string): void;
}
/**
 * Signals that an end of file or end of stream has been reached
 * unexpectedly during input.
 * 
 * This exception is mainly used by data input streams to signal end of
 * stream. Note that many other input operations return a special value on
 * end of stream rather than throwing an exception.
 *
 * @author  Frank Yellin
 * @see     java.io.DataInputStream
 * @see     java.io.IOException
 * @since   1.0
*/
export class EOFException extends IOException {
  /**
   * Constructs an `EOFException` with `null`
   * as its error detail message.
  */
  constructor();
  /**
   * Constructs an `EOFException` with the specified detail
   * message. The string `s` may later be retrieved by the
   * {@link java.lang.Throwable#getMessage} method of class
   * `java.lang.Throwable`.
   *
   * @param   s   the detail message.
  */
  constructor(s: string);
}
export class PushbackReader extends FilterReader {
  /**
   * Creates a new pushback reader with a pushback buffer of the given size.
   *
   * @param   in   The reader from which characters will be read
   * @param   size The size of the pushback buffer
   * @throws  IllegalArgumentException if `size <= 0`
  */
  constructor(in_: Reader, size: number);
  /**
   * Creates a new pushback reader with a one-character pushback buffer.
   *
   * @param   in  The reader from which characters will be read
  */
  constructor(in_: Reader);
  /**
   * Reads a single character.
   *
   * @return     The character read, or -1 if the end of the stream has been
   *             reached
   *
   * @throws     IOException  If an I/O error occurs
  */
  read(): number;
  /**
   * Reads characters into a portion of an array.
   *
   * @param      cbuf  Destination buffer
   * @param      off   Offset at which to start writing characters
   * @param      len   Maximum number of characters to read
   *
   * @return     The number of characters read, or -1 if the end of the
   *             stream has been reached
   *
   * @throws     IOException  If an I/O error occurs
   * @throws     IndexOutOfBoundsException {@inheritDoc}
  */
  read(cbuf: string[], off: number, len: number): number;
  /**
   * Pushes back a single character by copying it to the front of the
   * pushback buffer. After this method returns, the next character to be read
   * will have the value `(char)c`.
   *
   * @param  c  The int value representing a character to be pushed back
   *
   * @throws IOException  If the pushback buffer is full,
   *                      or if some other I/O error occurs
  */
  unread(c: number): void;
  /**
   * Pushes back a portion of an array of characters by copying it to the
   * front of the pushback buffer.  After this method returns, the next
   * character to be read will have the value `cbuf[off]`, the
   * character after that will have the value `cbuf[off+1]`, and
   * so forth.
   *
   * @param      cbuf  Character array
   * @param      off   Offset of first character to push back
   * @param      len   Number of characters to push back
   *
   * @throws     IOException  If there is insufficient room in the pushback
   *                          buffer, or if some other I/O error occurs
  */
  unread(cbuf: string[], off: number, len: number): void;
  /**
   * Pushes back an array of characters by copying it to the front of the
   * pushback buffer.  After this method returns, the next character to be
   * read will have the value `cbuf[0]`, the character after that
   * will have the value `cbuf[1]`, and so forth.
   *
   * @param      cbuf  Character array to push back
   *
   * @throws     IOException  If there is insufficient room in the pushback
   *                          buffer, or if some other I/O error occurs
  */
  unread(cbuf: string[]): void;
  /**
   * Tells whether this stream is ready to be read.
   *
   * @throws     IOException  If an I/O error occurs
  */
  ready(): boolean;
  /**
   * Marks the present position in the stream. The `mark`
   * for class `PushbackReader` always throws an exception.
   *
   * @throws     IOException  Always, since mark is not supported
  */
  mark(readAheadLimit: number): void;
  /**
   * Resets the stream. The `reset` method of
   * `PushbackReader` always throws an exception.
   *
   * @throws     IOException  Always, since reset is not supported
  */
  reset(): void;
  /**
   * Tells whether this stream supports the mark() operation, which it does
   * not.
  */
  markSupported(): boolean;
  /**
   * Closes the stream and releases any system resources associated with
   * it. Once the stream has been closed, further read(),
   * unread(), ready(), or skip() invocations will throw an IOException.
   * Closing a previously closed stream has no effect. This method will block
   * while there is another thread blocking on the reader.
   *
   * @throws     IOException  If an I/O error occurs
  */
  close(): void;
  /**
   * Skips characters.  This method will block until some characters are
   * available, an I/O error occurs, or the end of the stream is reached.
   *
   * @param     n  The number of characters to skip
   *
   * @return    The number of characters actually skipped
   *
   * @throws    IllegalArgumentException  If `n` is negative.
   * @throws    IOException  If an I/O error occurs
  */
  skip(n: number): number;
  /**
   * Attempts to read characters into the specified character buffer.
   * The buffer is used as a repository of characters as-is: the only
   * changes made are the results of a put operation. No flipping or
   * rewinding of the buffer is performed.
   *
   * @param target the buffer to read characters into
   * @return The number of characters added to the buffer, or
   *         -1 if this source of characters is at its end
   * @throws IOException if an I/O error occurs
   * @throws NullPointerException if target is null
   * @throws java.nio.ReadOnlyBufferException if target is a read only buffer
   * @since 1.5
  */
  read(target: CharBuffer): number;
  /**
   * Reads characters into an array.  This method will block until some input
   * is available, an I/O error occurs, or the end of the stream is reached.
   *
   * @param       cbuf  Destination buffer
   *
   * @return      The number of characters read, or -1
   *              if the end of the stream
   *              has been reached
   *
   * @throws      IOException  If an I/O error occurs
  */
  read(cbuf: string[]): number;
}
/**
 * Filter classes, array lengths, and graph metrics during deserialization.
 *
 * Warning: Deserialization of untrusted data is inherently dangerous
 * and should be avoided. Untrusted data should be carefully validated according to the
 * "Serialization and Deserialization" section of the
 * {@extLink secure_coding_guidelines_javase Secure Coding Guidelines for Java SE}.
 * {@extLink serialization_filter_guide Serialization Filtering} describes best
 * practices for defensive use of serial filters.
 * 
 *
 * If set on an {@link ObjectInputStream}, the {@link #checkInput checkInput(FilterInfo)}
 * method is called to validate classes, the length of each array,
 * the number of objects being read from the stream, the depth of the graph,
 * and the total number of bytes read from the stream.
 * 
 * A filter can be set via {@link ObjectInputStream#setObjectInputFilter setObjectInputFilter}
 * for an individual ObjectInputStream.
 * A filter can be set via {@link Config#setSerialFilter(ObjectInputFilter) Config.setSerialFilter}
 * to affect every `ObjectInputStream` that does not otherwise set a filter.
 * 
 * A filter determines whether the arguments are {@link Status#ALLOWED ALLOWED}
 * or {@link Status#REJECTED REJECTED} and should return the appropriate status.
 * If the filter cannot determine the status it should return
 * {@link Status#UNDECIDED UNDECIDED}.
 * Filters should be designed for the specific use case and expected types.
 * A filter designed for a particular use may be passed a class that is outside
 * of the scope of the filter. If the purpose of the filter is to black-list classes
 * then it can reject a candidate class that matches and report UNDECIDED for others.
 * A filter may be called with class equals `null`, `arrayLength` equal -1,
 * the depth, number of references, and stream size and return a status
 * that reflects only one or only some of the values.
 * This allows a filter to specific about the choice it is reporting and
 * to use other filters without forcing either allowed or rejected status.
 *
 * 
 * Typically, a custom filter should check if a system-wide filter
 * is configured and defer to it if so. For example,
 * {@code
 * ObjectInputFilter.Status checkInput(FilterInfo info) {
 *     ObjectInputFilter serialFilter = ObjectInputFilter.Config.getSerialFilter();
 *     if (serialFilter != null) {
 *         ObjectInputFilter.Status status = serialFilter.checkInput(info);
 *         if (status != ObjectInputFilter.Status.UNDECIDED) {
 *             // The system-wide filter overrides this filter
 *             return status;
 *         }
 *     }
 *     if (info.serialClass() != null &&
 *         Remote.class.isAssignableFrom(info.serialClass())) {
 *         return Status.REJECTED;      // Do not allow Remote objects
 *     }
 *     return Status.UNDECIDED;
 * }
 *}
 * 
 * Unless otherwise noted, passing a `null` argument to a
 * method in this interface and its nested classes will cause a
 * {@link NullPointerException} to be thrown.
 *
 * @see ObjectInputStream#setObjectInputFilter(ObjectInputFilter)
 * @since 9
*/
export class ObjectInputFilter {
  /**
   * Check the class, array length, number of object references, depth,
   * stream size, and other available filtering information.
   * Implementations of this method check the contents of the object graph being created
   * during deserialization. The filter returns {@link Status#ALLOWED Status.ALLOWED},
   * {@link Status#REJECTED Status.REJECTED}, or {@link Status#UNDECIDED Status.UNDECIDED}.
   *
   * @param filterInfo provides information about the current object being deserialized,
   *             if any, and the status of the {@link ObjectInputStream}
   * @return  {@link Status#ALLOWED Status.ALLOWED} if accepted,
   *          {@link Status#REJECTED Status.REJECTED} if rejected,
   *          {@link Status#UNDECIDED Status.UNDECIDED} if undecided.
  */
  checkInput(filterInfo: FilterInfo): Status;
}
/**
 * Thrown when the Serialization runtime detects one of the following
 * problems with a Class.
 * 
 *  The serial version of the class does not match that of the class
 *      descriptor read from the stream
 *  The class contains unknown datatypes
 *  The class does not have an accessible no-arg constructor
 *  The ObjectStreamClass of an enum constant does not represent
 *      an enum type
 *  Other conditions given in the Java Object Serialization
 *      Specification
 * 
 *
 * @since   1.1
*/
export class InvalidClassException extends ObjectStreamException {
  /**
   * Name of the invalid class.
   *
   * @serial Name of the invalid class.
  */
  classname: string;
  /**
   * Report an InvalidClassException for the reason specified.
   *
   * @param reason  String describing the reason for the exception.
  */
  constructor(reason: string);
  /**
   * Constructs an InvalidClassException object.
   *
   * @param cname   a String naming the invalid class.
   * @param reason  a String describing the reason for the exception.
  */
  constructor(cname: string, reason: string);
  /**
   * Produce the message and include the classname, if present.
  */
  getMessage(): string;
}
export class SerializablePermission extends BasicPermission {
  /**
   * Creates a new SerializablePermission with the specified name.
   * The name is the symbolic name of the SerializablePermission, such as
   * "enableSubstitution", etc.
   *
   * @param name the name of the SerializablePermission.
   *
   * @throws NullPointerException if `name` is `null`.
   * @throws IllegalArgumentException if `name` is empty.
  */
  constructor(name: string);
  constructor(name: string, actions: string);
}
export class FileWriter extends OutputStreamWriter {
  /**
   * Constructs a `FileWriter` given a file name, using the platform's
   * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}
   *
   * @param fileName  String The system-dependent filename.
   * @throws IOException  if the named file exists but is a directory rather
   *                  than a regular file, does not exist but cannot be
   *                  created, or cannot be opened for any other reason
  */
  constructor(fileName: string);
  /**
   * Constructs a `FileWriter` given a file name and a boolean indicating
   * whether to append the data written, using the platform's
   * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}.
   *
   * @param fileName  String The system-dependent filename.
   * @param append    boolean if `true`, then data will be written
   *                  to the end of the file rather than the beginning.
   * @throws IOException  if the named file exists but is a directory rather
   *                  than a regular file, does not exist but cannot be
   *                  created, or cannot be opened for any other reason
  */
  constructor(fileName: string, append: boolean);
  /**
   * Constructs a `FileWriter` given the `File` to write,
   * using the platform's
   * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}
   *
   * @param file  the `File` to write.
   * @throws IOException  if the file exists but is a directory rather than
   *                  a regular file, does not exist but cannot be created,
   *                  or cannot be opened for any other reason
  */
  constructor(file: File);
  /**
   * Constructs a `FileWriter` given the `File` to write and
   * a boolean indicating whether to append the data written, using the platform's
   * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}.
   *
   * @param file  the `File` to write
   * @param     append    if `true`, then bytes will be written
   *                      to the end of the file rather than the beginning
   * @throws IOException  if the file exists but is a directory rather than
   *                  a regular file, does not exist but cannot be created,
   *                  or cannot be opened for any other reason
   * @since 1.4
  */
  constructor(file: File, append: boolean);
  /**
   * Constructs a `FileWriter` given a file descriptor,
   * using the platform's
   * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}.
   *
   * @param fd  the `FileDescriptor` to write.
  */
  constructor(fd: FileDescriptor);
  /**
   * Constructs a `FileWriter` given a file name and
   * {@linkplain java.nio.charset.Charset charset}.
   *
   * @param fileName  the name of the file to write
   * @param charset the {@linkplain java.nio.charset.Charset charset}
   * @throws IOException  if the named file exists but is a directory rather
   *                  than a regular file, does not exist but cannot be
   *                  created, or cannot be opened for any other reason
   *
   * @since 11
  */
  constructor(fileName: string, charset: Charset);
  /**
   * Constructs a `FileWriter` given a file name,
   * {@linkplain java.nio.charset.Charset charset} and a boolean indicating
   * whether to append the data written.
   *
   * @param fileName  the name of the file to write
   * @param charset the {@linkplain java.nio.charset.Charset charset}
   * @param append    a boolean. If `true`, the writer will write the data
   *                  to the end of the file rather than the beginning.
   * @throws IOException  if the named file exists but is a directory rather
   *                  than a regular file, does not exist but cannot be
   *                  created, or cannot be opened for any other reason
   *
   * @since 11
  */
  constructor(fileName: string, charset: Charset, append: boolean);
  /**
   * Constructs a `FileWriter` given the `File` to write and
   * {@linkplain java.nio.charset.Charset charset}.
   *
   * @param file  the `File` to write
   * @param charset the {@linkplain java.nio.charset.Charset charset}
   * @throws IOException  if the file exists but is a directory rather than
   *                  a regular file, does not exist but cannot be created,
   *                  or cannot be opened for any other reason
   *
   * @since 11
  */
  constructor(file: File, charset: Charset);
  /**
   * Constructs a `FileWriter` given the `File` to write,
   * {@linkplain java.nio.charset.Charset charset} and a boolean indicating
   * whether to append the data written.
   *
   * @param file  the `File` to write
   * @param charset the {@linkplain java.nio.charset.Charset charset}
   * @param append    a boolean. If `true`, the writer will write the data
   *                  to the end of the file rather than the beginning.
   * @throws IOException  if the file exists but is a directory rather than
   *                  a regular file, does not exist but cannot be created,
   *                  or cannot be opened for any other reason
   * @since 11
  */
  constructor(file: File, charset: Charset, append: boolean);
}
/**
 * Instances of the file descriptor class serve as an opaque handle
 * to the underlying machine-specific structure representing an open
 * file, an open socket, or another source or sink of bytes.
 * The main practical use for a file descriptor is to create a
 * {@link FileInputStream} or {@link FileOutputStream} to contain it.
 * 
 * Applications should not create their own file descriptors.
 *
 * @author  Pavani Diwanji
 * @since   1.0
*/
export class FileDescriptor {
  /**
   * Constructs an (invalid) FileDescriptor object.
   * The fd or handle is set later.
  */
  constructor();
  /**
   * A handle to the standard input stream. Usually, this file
   * descriptor is not used directly, but rather via the input stream
   * known as `System.in`.
   *
   * @see     java.lang.System#in
  */
  static readonly in: FileDescriptor;
  /**
   * A handle to the standard output stream. Usually, this file
   * descriptor is not used directly, but rather via the output stream
   * known as `System.out`.
   * @see     java.lang.System#out
  */
  static readonly out: FileDescriptor;
  /**
   * A handle to the standard error stream. Usually, this file
   * descriptor is not used directly, but rather via the output stream
   * known as `System.err`.
   *
   * @see     java.lang.System#err
  */
  static readonly err: FileDescriptor;
  /**
   * Tests if this file descriptor object is valid.
   *
   * @return  `true` if the file descriptor object represents a
   *          valid, open file, socket, or other active I/O connection;
   *          `false` otherwise.
  */
  valid(): boolean;
  /**
   * Force all system buffers to synchronize with the underlying
   * device.  This method returns after all modified data and
   * attributes of this FileDescriptor have been written to the
   * relevant device(s).  In particular, if this FileDescriptor
   * refers to a physical storage medium, such as a file in a file
   * system, sync will not return until all in-memory modified copies
   * of buffers associated with this FileDescriptor have been
   * written to the physical medium.
   *
   * sync is meant to be used by code that requires physical
   * storage (such as a file) to be in a known state  For
   * example, a class that provided a simple transaction facility
   * might use sync to ensure that all changes to a file caused
   * by a given transaction were recorded on a storage medium.
   *
   * sync only affects buffers downstream of this FileDescriptor.  If
   * any in-memory buffering is being done by the application (for
   * example, by a BufferedOutputStream object), those buffers must
   * be flushed into the FileDescriptor (for example, by invoking
   * OutputStream.flush) before that data will be affected by sync.
   *
   * @throws    SyncFailedException
   *        Thrown when the buffers cannot be flushed,
   *        or because the system cannot guarantee that all the
   *        buffers have been synchronized with physical media.
   * @since     1.1
  */
  sync(): void;
}

}
