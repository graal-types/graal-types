declare module 'java.nio' {
import { IllegalStateException, Comparable, RuntimeException, Appendable, CharSequence, Readable, UnsupportedOperationException } from 'java.lang';
import { FileDescriptor } from 'java.io';
import { IntStream } from 'java.util.stream';
export class ByteOrder {
  /**
   * Constant denoting big-endian byte order.  In this order, the bytes of a
   * multibyte value are ordered from most significant to least significant.
  */
  static readonly BIG_ENDIAN: ByteOrder;
  /**
   * Constant denoting little-endian byte order.  In this order, the bytes of
   * a multibyte value are ordered from least significant to most
   * significant.
  */
  static readonly LITTLE_ENDIAN: ByteOrder;
  /**
   * Retrieves the native byte order of the underlying platform.
   *
   *  This method is defined so that performance-sensitive Java code can
   * allocate direct buffers with the same byte order as the hardware.
   * Native code libraries are often more efficient when such buffers are
   * used.  
   *
   * @return  The native byte order of the hardware upon which this Java
   *          virtual machine is running
  */
  static nativeOrder(): ByteOrder;
  /**
   * Constructs a string describing this object.
   *
   *  This method returns the string
   * `"BIG_ENDIAN"` for {@link #BIG_ENDIAN} and
   * `"LITTLE_ENDIAN"` for {@link #LITTLE_ENDIAN}.
   *
   * @return  The specified string
  */
  toString(): string;
}
export class Buffer {
  /**
   * Returns this buffer's capacity.
   *
   * @return  The capacity of this buffer
  */
  capacity(): number;
  /**
   * Returns this buffer's position.
   *
   * @return  The position of this buffer
  */
  position(): number;
  /**
   * Sets this buffer's position.  If the mark is defined and larger than the
   * new position then it is discarded.
   *
   * @param  newPosition
   *         The new position value; must be non-negative
   *         and no larger than the current limit
   *
   * @return  This buffer
   *
   * @throws  IllegalArgumentException
   *          If the preconditions on `newPosition` do not hold
  */
  position(newPosition: number): Buffer;
  /**
   * Returns this buffer's limit.
   *
   * @return  The limit of this buffer
  */
  limit(): number;
  /**
   * Sets this buffer's limit.  If the position is larger than the new limit
   * then it is set to the new limit.  If the mark is defined and larger than
   * the new limit then it is discarded.
   *
   * @param  newLimit
   *         The new limit value; must be non-negative
   *         and no larger than this buffer's capacity
   *
   * @return  This buffer
   *
   * @throws  IllegalArgumentException
   *          If the preconditions on `newLimit` do not hold
  */
  limit(newLimit: number): Buffer;
  /**
   * Sets this buffer's mark at its position.
   *
   * @return  This buffer
  */
  mark(): Buffer;
  /**
   * Resets this buffer's position to the previously-marked position.
   *
   *  Invoking this method neither changes nor discards the mark's
   * value. 
   *
   * @return  This buffer
   *
   * @throws  InvalidMarkException
   *          If the mark has not been set
  */
  reset(): Buffer;
  /**
   * Clears this buffer.  The position is set to zero, the limit is set to
   * the capacity, and the mark is discarded.
   *
   *  Invoke this method before using a sequence of channel-read or
   * put operations to fill this buffer.  For example:
   *
   *      * buf.clear();     // Prepare buffer for reading
   * in.read(buf);    // Read data
   *
   *  This method does not actually erase the data in the buffer, but it
   * is named as if it did because it will most often be used in situations
   * in which that might as well be the case. 
   *
   * @return  This buffer
  */
  clear(): Buffer;
  /**
   * Flips this buffer.  The limit is set to the current position and then
   * the position is set to zero.  If the mark is defined then it is
   * discarded.
   *
   *  After a sequence of channel-read or put operations, invoke
   * this method to prepare for a sequence of channel-write or relative
   * get operations.  For example:
   *
   *      * buf.put(magic);    // Prepend header
   * in.read(buf);      // Read data into rest of buffer
   * buf.flip();        // Flip buffer
   * out.write(buf);    // Write header + data to channel
   *
   *  This method is often used in conjunction with the {@link
   * java.nio.ByteBuffer#compact compact} method when transferring data from
   * one place to another.  
   *
   * @return  This buffer
  */
  flip(): Buffer;
  /**
   * Rewinds this buffer.  The position is set to zero and the mark is
   * discarded.
   *
   *  Invoke this method before a sequence of channel-write or get
   * operations, assuming that the limit has already been set
   * appropriately.  For example:
   *
   *      * out.write(buf);    // Write remaining data
   * buf.rewind();      // Rewind buffer
   * buf.get(array);    // Copy data into array
   *
   * @return  This buffer
  */
  rewind(): Buffer;
  /**
   * Returns the number of elements between the current position and the
   * limit.
   *
   * @return  The number of elements remaining in this buffer
  */
  remaining(): number;
  /**
   * Tells whether there are any elements between the current position and
   * the limit.
   *
   * @return  `true` if, and only if, there is at least one element
   *          remaining in this buffer
  */
  hasRemaining(): boolean;
  /**
   * Tells whether or not this buffer is read-only.
   *
   * @return  `true` if, and only if, this buffer is read-only
  */
  isReadOnly(): boolean;
  /**
   * Tells whether or not this buffer is backed by an accessible
   * array.
   *
   *  If this method returns `true` then the {@link #array() array}
   * and {@link #arrayOffset() arrayOffset} methods may safely be invoked.
   * 
   *
   * @return  `true` if, and only if, this buffer
   *          is backed by an array and is not read-only
   *
   * @since 1.6
  */
  hasArray(): boolean;
  /**
   * Returns the array that backs this
   * buffer  (optional operation).
   *
   *  This method is intended to allow array-backed buffers to be
   * passed to native code more efficiently. Concrete subclasses
   * provide more strongly-typed return values for this method.
   *
   *  Modifications to this buffer's content will cause the returned
   * array's content to be modified, and vice versa.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The array that backs this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
   *
   * @since 1.6
  */
  array(): any;
  /**
   * Returns the offset within this buffer's backing array of the first
   * element of the buffer  (optional operation).
   *
   *  If this buffer is backed by an array then buffer position p
   * corresponds to array index p + `arrayOffset()`.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The offset within this buffer's array
   *          of the first element of the buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
   *
   * @since 1.6
  */
  arrayOffset(): number;
  /**
   * Tells whether or not this buffer is
   * direct.
   *
   * @return  `true` if, and only if, this buffer is direct
   *
   * @since 1.6
  */
  isDirect(): boolean;
  /**
   * Creates a new buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at this buffer's current
   * position.  Changes to this buffer's content will be visible in the new
   * buffer, and vice versa; the two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be the number of elements remaining in this buffer, its mark will be
   * undefined. The new buffer will be direct if, and only if, this buffer is
   * direct, and it will be read-only if, and only if, this buffer is
   * read-only.  
   *
   * @return  The new buffer
   *
   * @since 9
  */
  slice(): Buffer;
  /**
   * Creates a new buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at position `index`
   * in this buffer, and will contain `length` elements. Changes to
   * this buffer's content will be visible in the new buffer, and vice versa;
   * the two buffers' position, limit, and mark values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be `length`, its mark will be undefined. The new buffer will
   * be direct if, and only if, this buffer is direct, and it will be
   * read-only if, and only if, this buffer is read-only.  
   *
   * @param   index
   *          The position in this buffer at which the content of the new
   *          buffer will start; must be non-negative and no larger than
   *          {@link #limit() limit()}
   *
   * @param   length
   *          The number of elements the new buffer will contain; must be
   *          non-negative and no larger than `limit() - index`
   *
   * @return  The new buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative or greater than `limit()`,
   *          `length` is negative, or `length > limit() - index`
   *
   * @since 13
  */
  slice(index: number, length: number): Buffer;
  /**
   * Creates a new buffer that shares this buffer's content.
   *
   *  The content of the new buffer will be that of this buffer.  Changes
   * to this buffer's content will be visible in the new buffer, and vice
   * versa; the two buffers' position, limit, and mark values will be
   * independent.
   *
   *  The new buffer's capacity, limit, position and mark values will be
   * identical to those of this buffer. The new buffer will be direct if, and
   * only if, this buffer is direct, and it will be read-only if, and only if,
   * this buffer is read-only.  
   *
   * @return  The new buffer
   *
   * @since 9
  */
  duplicate(): Buffer;
}
export class ReadOnlyBufferException extends UnsupportedOperationException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class IntBuffer extends Buffer {
  /**
   * Allocates a new int buffer.
   *
   *  The new buffer's position will be zero, its limit will be its
   * capacity, its mark will be undefined, each of its elements will be
   * initialized to zero, and its byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * It will have a {@link #array backing array}, and its
   * {@link #arrayOffset array offset} will be zero.
   *
   * @param  capacity
   *         The new buffer's capacity, in ints
   *
   * @return  The new int buffer
   *
   * @throws  IllegalArgumentException
   *          If the `capacity` is a negative integer
  */
  static allocate(capacity: number): IntBuffer;
  /**
   * Wraps an int array into a buffer.
   *
   *  The new buffer will be backed by the given int array;
   * that is, modifications to the buffer will cause the array to be modified
   * and vice versa.  The new buffer's capacity will be
   * `array.length`, its position will be `offset`, its limit
   * will be `offset + length`, its mark will be undefined, and its
   * byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * Its {@link #array backing array} will be the given array, and
   * its {@link #arrayOffset array offset} will be zero.  
   *
   * @param  array
   *         The array that will back the new buffer
   *
   * @param  offset
   *         The offset of the subarray to be used; must be non-negative and
   *         no larger than `array.length`.  The new buffer's position
   *         will be set to this value.
   *
   * @param  length
   *         The length of the subarray to be used;
   *         must be non-negative and no larger than
   *         `array.length - offset`.
   *         The new buffer's limit will be set to `offset + length`.
   *
   * @return  The new int buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
  */
  static wrap(array: number[], offset: number, length: number): IntBuffer;
  /**
   * Wraps an int array into a buffer.
   *
   *  The new buffer will be backed by the given int array;
   * that is, modifications to the buffer will cause the array to be modified
   * and vice versa.  The new buffer's capacity and limit will be
   * `array.length`, its position will be zero, its mark will be
   * undefined, and its byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * Its {@link #array backing array} will be the given array, and its
   * {@link #arrayOffset array offset} will be zero.  
   *
   * @param  array
   *         The array that will back this buffer
   *
   * @return  The new int buffer
  */
  static wrap(array: number[]): IntBuffer;
  /**
   * Creates a new int buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at this buffer's current
   * position.  Changes to this buffer's content will be visible in the new
   * buffer, and vice versa; the two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be the number of ints remaining in this buffer, its mark will be
   * undefined, and its byte order will be
   * identical to that of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct, and
   * it will be read-only if, and only if, this buffer is read-only.  
   *
   * @return  The new int buffer
  */
  slice(): IntBuffer;
  /**
   * Creates a new int buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at position `index`
   * in this buffer, and will contain `length` elements. Changes to
   * this buffer's content will be visible in the new buffer, and vice versa;
   * the two buffers' position, limit, and mark values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be `length`, its mark will be undefined, and its byte order
   * will be
   * identical to that of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct,
   * and it will be read-only if, and only if, this buffer is read-only. 
   *
   * @param   index
   *          The position in this buffer at which the content of the new
   *          buffer will start; must be non-negative and no larger than
   *          {@link #limit() limit()}
   *
   * @param   length
   *          The number of elements the new buffer will contain; must be
   *          non-negative and no larger than `limit() - index`
   *
   * @return  The new buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative or greater than `limit()`,
   *          `length` is negative, or `length > limit() - index`
   *
   * @since 13
  */
  slice(index: number, length: number): IntBuffer;
  /**
   * Creates a new int buffer that shares this buffer's content.
   *
   *  The content of the new buffer will be that of this buffer.  Changes
   * to this buffer's content will be visible in the new buffer, and vice
   * versa; the two buffers' position, limit, and mark values will be
   * independent.
   *
   *  The new buffer's capacity, limit, position,
   * mark values, and byte order will be identical to those of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct, and
   * it will be read-only if, and only if, this buffer is read-only.  
   *
   * @return  The new int buffer
  */
  duplicate(): IntBuffer;
  /**
   * Creates a new, read-only int buffer that shares this buffer's
   * content.
   *
   *  The content of the new buffer will be that of this buffer.  Changes
   * to this buffer's content will be visible in the new buffer; the new
   * buffer itself, however, will be read-only and will not allow the shared
   * content to be modified.  The two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's capacity, limit, position,
   * mark values, and byte order will be identical to those of this buffer.
   *
   *  If this buffer is itself read-only then this method behaves in
   * exactly the same way as the {@link #duplicate duplicate} method.  
   *
   * @return  The new, read-only int buffer
  */
  asReadOnlyBuffer(): IntBuffer;
  /**
   * Relative get method.  Reads the int at this buffer's
   * current position, and then increments the position.
   *
   * @return  The int at the buffer's current position
   *
   * @throws  BufferUnderflowException
   *          If the buffer's current position is not smaller than its limit
  */
  get(): number;
  /**
   * Relative put method  (optional operation).
   *
   *  Writes the given int into this buffer at the current
   * position, and then increments the position. 
   *
   * @param  i
   *         The int to be written
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If this buffer's current position is not smaller than its limit
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(i: number): IntBuffer;
  /**
   * Absolute get method.  Reads the int at the given
   * index.
   *
   * @param  index
   *         The index from which the int will be read
   *
   * @return  The int at the given index
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit
  */
  get(index: number): number;
  /**
   * Absolute put method  (optional operation).
   *
   *  Writes the given int into this buffer at the given
   * index. 
   *
   * @param  index
   *         The index at which the int will be written
   *
   * @param  i
   *         The int value to be written
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(index: number, i: number): IntBuffer;
  /**
   * Relative bulk get method.
   *
   *  This method transfers ints from this buffer into the given
   * destination array.  If there are fewer ints remaining in the
   * buffer than are required to satisfy the request, that is, if
   * `length` `>` `remaining()`, then no
   * ints are transferred and a {@link BufferUnderflowException} is
   * thrown.
   *
   *  Otherwise, this method copies `length` ints from this
   * buffer into the given array, starting at the current position of this
   * buffer and at the given offset in the array.  The position of this
   * buffer is then incremented by `length`.
   *
   *  In other words, an invocation of this method of the form
   * src.get(dst, off, len) has exactly the same effect as
   * the loop
   *
   * {@code
   *     for (int i = off; i < off + len; i++)
   *         dst[i] = src.get();
   * }
   *
   * except that it first checks that there are sufficient ints in
   * this buffer and it is potentially much more efficient.
   *
   * @param  dst
   *         The array into which ints are to be written
   *
   * @param  offset
   *         The offset within the array of the first int to be
   *         written; must be non-negative and no larger than
   *         `dst.length`
   *
   * @param  length
   *         The maximum number of ints to be written to the given
   *         array; must be non-negative and no larger than
   *         `dst.length - offset`
   *
   * @return  This buffer
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than `length` ints
   *          remaining in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
  */
  get(dst: number[], offset: number, length: number): IntBuffer;
  /**
   * Relative bulk get method.
   *
   *  This method transfers ints from this buffer into the given
   * destination array.  An invocation of this method of the form
   * `src.get(a)` behaves in exactly the same way as the invocation
   *
   *      *     src.get(a, 0, a.length) 
   *
   * @param   dst
   *          The destination array
   *
   * @return  This buffer
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than `length` ints
   *          remaining in this buffer
  */
  get(dst: number[]): IntBuffer;
  /**
   * Absolute bulk get method.
   *
   *  This method transfers `length` ints from this
   * buffer into the given array, starting at the given index in this
   * buffer and at the given offset in the array.  The position of this
   * buffer is unchanged.
   *
   *  An invocation of this method of the form
   * src.get(index, dst, offset, length)
   * has exactly the same effect as the following loop except that it first
   * checks the consistency of the supplied parameters and it is potentially
   * much more efficient:
   *
   * {@code
   *     for (int i = offset, j = index; i < offset + length; i++, j++)
   *         dst[i] = src.get(j);
   * }
   *
   * @param  index
   *         The index in this buffer from which the first int will be
   *         read; must be non-negative and less than `limit()`
   *
   * @param  dst
   *         The destination array
   *
   * @param  offset
   *         The offset within the array of the first int to be
   *         written; must be non-negative and less than
   *         `dst.length`
   *
   * @param  length
   *         The number of ints to be written to the given array;
   *         must be non-negative and no larger than the smaller of
   *         `limit() - index` and `dst.length - offset`
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `index`, `offset`, and
   *          `length` parameters do not hold
   *
   * @since 13
  */
  get(index: number, dst: number[], offset: number, length: number): IntBuffer;
  /**
   * Absolute bulk get method.
   *
   *  This method transfers ints from this buffer into the given
   * destination array.  The position of this buffer is unchanged.  An
   * invocation of this method of the form
   * src.get(index, dst) behaves in exactly the same
   * way as the invocation:
   *
   *      *     src.get(index, dst, 0, dst.length) 
   *
   * @param  index
   *         The index in this buffer from which the first int will be
   *         read; must be non-negative and less than `limit()`
   *
   * @param  dst
   *         The destination array
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative, not smaller than `limit()`,
   *          or `limit() - index < dst.length`
   *
   * @since 13
  */
  get(index: number, dst: number[]): IntBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers the ints remaining in the given source
   * buffer into this buffer.  If there are more ints remaining in the
   * source buffer than in this buffer, that is, if
   * `src.remaining()` `>` `remaining()`,
   * then no ints are transferred and a {@link
   * BufferOverflowException} is thrown.
   *
   *  Otherwise, this method copies
   * n = `src.remaining()` ints from the given
   * buffer into this buffer, starting at each buffer's current position.
   * The positions of both buffers are then incremented by n.
   *
   *  In other words, an invocation of this method of the form
   * `dst.put(src)` has exactly the same effect as the loop
   *
   *      *     while (src.hasRemaining())
   *         dst.put(src.get()); 
   *
   * except that it first checks that there is sufficient space in this
   * buffer and it is potentially much more efficient.  If this buffer and
   * the source buffer share the same backing array or memory, then the
   * result will be as if the source elements were first copied to an
   * intermediate location before being written into this buffer.
   *
   * @param  src
   *         The source buffer from which ints are to be read;
   *         must not be this buffer
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *          for the remaining ints in the source buffer
   *
   * @throws  IllegalArgumentException
   *          If the source buffer is this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: IntBuffer): IntBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method transfers `length` ints into this buffer from
   * the given source buffer, starting at the given `offset` in the
   * source buffer and the given `index` in this buffer. The positions
   * of both buffers are unchanged.
   *
   *  In other words, an invocation of this method of the form
   * dst.put(index, src, offset, length)
   * has exactly the same effect as the loop
   *
   * {@code
   * for (int i = offset, j = index; i < offset + length; i++, j++)
   *     dst.put(j, src.get(i));
   * }
   *
   * except that it first checks the consistency of the supplied parameters
   * and it is potentially much more efficient.  If this buffer and
   * the source buffer share the same backing array or memory, then the
   * result will be as if the source elements were first copied to an
   * intermediate location before being written into this buffer.
   *
   * @param index
   *        The index in this buffer at which the first int will be
   *        written; must be non-negative and less than `limit()`
   *
   * @param src
   *        The buffer from which ints are to be read
   *
   * @param offset
   *        The index within the source buffer of the first int to be
   *        read; must be non-negative and less than `src.limit()`
   *
   * @param length
   *        The number of ints to be read from the given buffer;
   *        must be non-negative and no larger than the smaller of
   *        `limit() - index` and `src.limit() - offset`
   *
   * @return This buffer
   *
   * @throws IndexOutOfBoundsException
   *         If the preconditions on the `index`, `offset`, and
   *         `length` parameters do not hold
   *
   * @throws ReadOnlyBufferException
   *         If this buffer is read-only
   *
   * @since 16
  */
  put(index: number, src: IntBuffer, offset: number, length: number): IntBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers ints into this buffer from the given
   * source array.  If there are more ints to be copied from the array
   * than remain in this buffer, that is, if
   * `length` `>` `remaining()`, then no
   * ints are transferred and a {@link BufferOverflowException} is
   * thrown.
   *
   *  Otherwise, this method copies `length` ints from the
   * given array into this buffer, starting at the given offset in the array
   * and at the current position of this buffer.  The position of this buffer
   * is then incremented by `length`.
   *
   *  In other words, an invocation of this method of the form
   * dst.put(src, off, len) has exactly the same effect as
   * the loop
   *
   * {@code
   *     for (int i = off; i < off + len; i++)
   *         dst.put(src[i]);
   * }
   *
   * except that it first checks that there is sufficient space in this
   * buffer and it is potentially much more efficient.
   *
   * @param  src
   *         The array from which ints are to be read
   *
   * @param  offset
   *         The offset within the array of the first int to be read;
   *         must be non-negative and no larger than `src.length`
   *
   * @param  length
   *         The number of ints to be read from the given array;
   *         must be non-negative and no larger than
   *         `src.length - offset`
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: number[], offset: number, length: number): IntBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers the entire content of the given source
   * int array into this buffer.  An invocation of this method of the
   * form `dst.put(a)` behaves in exactly the same way as the
   * invocation
   *
   *      *     dst.put(a, 0, a.length) 
   *
   * @param   src
   *          The source array
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: number[]): IntBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method transfers `length` ints from the given
   * array, starting at the given offset in the array and at the given index
   * in this buffer.  The position of this buffer is unchanged.
   *
   *  An invocation of this method of the form
   * dst.put(index, src, offset, length)
   * has exactly the same effect as the following loop except that it first
   * checks the consistency of the supplied parameters and it is potentially
   * much more efficient:
   *
   * {@code
   *     for (int i = offset, j = index; i < offset + length; i++, j++)
   *         dst.put(j, src[i]);
   * }
   *
   * @param  index
   *         The index in this buffer at which the first int will be
   *         written; must be non-negative and less than `limit()`
   *
   * @param  src
   *         The array from which ints are to be read
   *
   * @param  offset
   *         The offset within the array of the first int to be read;
   *         must be non-negative and less than `src.length`
   *
   * @param  length
   *         The number of ints to be read from the given array;
   *         must be non-negative and no larger than the smaller of
   *         `limit() - index` and `src.length - offset`
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `index`, `offset`, and
   *          `length` parameters do not hold
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since 13
  */
  put(index: number, src: number[], offset: number, length: number): IntBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method copies ints into this buffer from the given source
   * array.  The position of this buffer is unchanged.  An invocation of this
   * method of the form dst.put(index, src)
   * behaves in exactly the same way as the invocation:
   *
   *      *     dst.put(index, src, 0, src.length); 
   *
   * @param  index
   *         The index in this buffer at which the first int will be
   *         written; must be non-negative and less than `limit()`
   *
   * @param  src
   *         The array from which ints are to be read
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative, not smaller than `limit()`,
   *          or `limit() - index < src.length`
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since 13
  */
  put(index: number, src: number[]): IntBuffer;
  /**
   * Tells whether or not this buffer is backed by an accessible int
   * array.
   *
   *  If this method returns `true` then the {@link #array() array}
   * and {@link #arrayOffset() arrayOffset} methods may safely be invoked.
   * 
   *
   * @return  `true` if, and only if, this buffer
   *          is backed by an array and is not read-only
  */
  hasArray(): boolean;
  /**
   * Returns the int array that backs this
   * buffer  (optional operation).
   *
   *  Modifications to this buffer's content will cause the returned
   * array's content to be modified, and vice versa.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The array that backs this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
  */
  array(): number[];
  /**
   * Returns the offset within this buffer's backing array of the first
   * element of the buffer  (optional operation).
   *
   *  If this buffer is backed by an array then buffer position p
   * corresponds to array index p + `arrayOffset()`.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The offset within this buffer's array
   *          of the first element of the buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
  */
  arrayOffset(): number;
  /**
   * {@inheritDoc}
  */
  position(newPosition: number): IntBuffer;
  /**
   * {@inheritDoc}
  */
  limit(newLimit: number): IntBuffer;
  /**
   * {@inheritDoc}
  */
  mark(): IntBuffer;
  /**
   * {@inheritDoc}
  */
  reset(): IntBuffer;
  /**
   * {@inheritDoc}
  */
  clear(): IntBuffer;
  /**
   * {@inheritDoc}
  */
  flip(): IntBuffer;
  /**
   * {@inheritDoc}
  */
  rewind(): IntBuffer;
  /**
   * Compacts this buffer  (optional operation).
   *
   *  The ints between the buffer's current position and its limit,
   * if any, are copied to the beginning of the buffer.  That is, the
   * int at index p = `position()` is copied
   * to index zero, the int at index p + 1 is copied
   * to index one, and so forth until the int at index
   * `limit()` - 1 is copied to index
   * n = `limit()` - `1` - p.
   * The buffer's position is then set to n+1 and its limit is set to
   * its capacity.  The mark, if defined, is discarded.
   *
   *  The buffer's position is set to the number of ints copied,
   * rather than to zero, so that an invocation of this method can be
   * followed immediately by an invocation of another relative put
   * method. 
   *
   *
   * @return  This buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  compact(): IntBuffer;
  /**
   * Tells whether or not this int buffer is direct.
   *
   * @return  `true` if, and only if, this buffer is direct
  */
  isDirect(): boolean;
  /**
   * Returns a string summarizing the state of this buffer.
   *
   * @return  A summary string
  */
  toString(): string;
  /**
   * Returns the current hash code of this buffer.
   *
   *  The hash code of a int buffer depends only upon its remaining
   * elements; that is, upon the elements from `position()` up to, and
   * including, the element at `limit()` - `1`.
   *
   *  Because buffer hash codes are content-dependent, it is inadvisable
   * to use buffers as keys in hash maps or similar data structures unless it
   * is known that their contents will not change.  
   *
   * @return  The current hash code of this buffer
  */
  hashCode(): number;
  /**
   * Tells whether or not this buffer is equal to another object.
   *
   *  Two int buffers are equal if, and only if,
   *
   * 
   *
   *    They have the same element type,  
   *
   *    They have the same number of remaining elements, and
   *   
   *
   *    The two sequences of remaining elements, considered
   *   independently of their starting positions, are pointwise equal.
   *   
   *
   * 
   *
   *  A int buffer is not equal to any other type of object.  
   *
   * @param  ob  The object to which this buffer is to be compared
   *
   * @return  `true` if, and only if, this buffer is equal to the
   *           given object
  */
  equals(ob: any): boolean;
  /**
   * Compares this buffer to another.
   *
   *  Two int buffers are compared by comparing their sequences of
   * remaining elements lexicographically, without regard to the starting
   * position of each sequence within its corresponding buffer.
   * Pairs of `int` elements are compared as if by invoking
   * {@link Integer#compare(int,int)}.
   *
   *  A int buffer is not comparable to any other type of object.
   *
   * @return  A negative integer, zero, or a positive integer as this buffer
   *          is less than, equal to, or greater than the given buffer
  */
  compareTo(that: IntBuffer): number;
  /**
   * Finds and returns the relative index of the first mismatch between this
   * buffer and a given buffer.  The index is relative to the
   * {@link #position() position} of each buffer and will be in the range of
   * 0 (inclusive) up to the smaller of the {@link #remaining() remaining}
   * elements in each buffer (exclusive).
   *
   *  If the two buffers share a common prefix then the returned index is
   * the length of the common prefix and it follows that there is a mismatch
   * between the two buffers at that index within the respective buffers.
   * If one buffer is a proper prefix of the other then the returned index is
   * the smaller of the remaining elements in each buffer, and it follows that
   * the index is only valid for the buffer with the larger number of
   * remaining elements.
   * Otherwise, there is no mismatch.
   *
   * @param  that
   *         The byte buffer to be tested for a mismatch with this buffer
   *
   * @return  The relative index of the first mismatch between this and the
   *          given buffer, otherwise -1 if no mismatch.
   *
   * @since 11
  */
  mismatch(that: IntBuffer): number;
  /**
   * Retrieves this buffer's byte order.
   *
   *  The byte order of an int buffer created by allocation or by
   * wrapping an existing `int` array is the {@link
   * ByteOrder#nativeOrder native order} of the underlying
   * hardware.  The byte order of an int buffer created as a view of a byte buffer is that of the
   * byte buffer at the moment that the view is created.  
   *
   * @return  This buffer's byte order
  */
  order(): ByteOrder;
  /**
   * Returns this buffer's position.
   *
   * @return  The position of this buffer
  */
  position(): number;
  /**
   * Returns this buffer's limit.
   *
   * @return  The limit of this buffer
  */
  limit(): number;
  /**
   * Tells whether or not this buffer is read-only.
   *
   * @return  `true` if, and only if, this buffer is read-only
  */
  isReadOnly(): boolean;
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
export interface IntBuffer extends Buffer, Comparable<IntBuffer> {}
export class DoubleBuffer extends Buffer {
  /**
   * Allocates a new double buffer.
   *
   *  The new buffer's position will be zero, its limit will be its
   * capacity, its mark will be undefined, each of its elements will be
   * initialized to zero, and its byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * It will have a {@link #array backing array}, and its
   * {@link #arrayOffset array offset} will be zero.
   *
   * @param  capacity
   *         The new buffer's capacity, in doubles
   *
   * @return  The new double buffer
   *
   * @throws  IllegalArgumentException
   *          If the `capacity` is a negative integer
  */
  static allocate(capacity: number): DoubleBuffer;
  /**
   * Wraps a double array into a buffer.
   *
   *  The new buffer will be backed by the given double array;
   * that is, modifications to the buffer will cause the array to be modified
   * and vice versa.  The new buffer's capacity will be
   * `array.length`, its position will be `offset`, its limit
   * will be `offset + length`, its mark will be undefined, and its
   * byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * Its {@link #array backing array} will be the given array, and
   * its {@link #arrayOffset array offset} will be zero.  
   *
   * @param  array
   *         The array that will back the new buffer
   *
   * @param  offset
   *         The offset of the subarray to be used; must be non-negative and
   *         no larger than `array.length`.  The new buffer's position
   *         will be set to this value.
   *
   * @param  length
   *         The length of the subarray to be used;
   *         must be non-negative and no larger than
   *         `array.length - offset`.
   *         The new buffer's limit will be set to `offset + length`.
   *
   * @return  The new double buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
  */
  static wrap(array: number[], offset: number, length: number): DoubleBuffer;
  /**
   * Wraps a double array into a buffer.
   *
   *  The new buffer will be backed by the given double array;
   * that is, modifications to the buffer will cause the array to be modified
   * and vice versa.  The new buffer's capacity and limit will be
   * `array.length`, its position will be zero, its mark will be
   * undefined, and its byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * Its {@link #array backing array} will be the given array, and its
   * {@link #arrayOffset array offset} will be zero.  
   *
   * @param  array
   *         The array that will back this buffer
   *
   * @return  The new double buffer
  */
  static wrap(array: number[]): DoubleBuffer;
  /**
   * Creates a new double buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at this buffer's current
   * position.  Changes to this buffer's content will be visible in the new
   * buffer, and vice versa; the two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be the number of doubles remaining in this buffer, its mark will be
   * undefined, and its byte order will be
   * identical to that of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct, and
   * it will be read-only if, and only if, this buffer is read-only.  
   *
   * @return  The new double buffer
  */
  slice(): DoubleBuffer;
  /**
   * Creates a new double buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at position `index`
   * in this buffer, and will contain `length` elements. Changes to
   * this buffer's content will be visible in the new buffer, and vice versa;
   * the two buffers' position, limit, and mark values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be `length`, its mark will be undefined, and its byte order
   * will be
   * identical to that of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct,
   * and it will be read-only if, and only if, this buffer is read-only. 
   *
   * @param   index
   *          The position in this buffer at which the content of the new
   *          buffer will start; must be non-negative and no larger than
   *          {@link #limit() limit()}
   *
   * @param   length
   *          The number of elements the new buffer will contain; must be
   *          non-negative and no larger than `limit() - index`
   *
   * @return  The new buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative or greater than `limit()`,
   *          `length` is negative, or `length > limit() - index`
   *
   * @since 13
  */
  slice(index: number, length: number): DoubleBuffer;
  /**
   * Creates a new double buffer that shares this buffer's content.
   *
   *  The content of the new buffer will be that of this buffer.  Changes
   * to this buffer's content will be visible in the new buffer, and vice
   * versa; the two buffers' position, limit, and mark values will be
   * independent.
   *
   *  The new buffer's capacity, limit, position,
   * mark values, and byte order will be identical to those of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct, and
   * it will be read-only if, and only if, this buffer is read-only.  
   *
   * @return  The new double buffer
  */
  duplicate(): DoubleBuffer;
  /**
   * Creates a new, read-only double buffer that shares this buffer's
   * content.
   *
   *  The content of the new buffer will be that of this buffer.  Changes
   * to this buffer's content will be visible in the new buffer; the new
   * buffer itself, however, will be read-only and will not allow the shared
   * content to be modified.  The two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's capacity, limit, position,
   * mark values, and byte order will be identical to those of this buffer.
   *
   *  If this buffer is itself read-only then this method behaves in
   * exactly the same way as the {@link #duplicate duplicate} method.  
   *
   * @return  The new, read-only double buffer
  */
  asReadOnlyBuffer(): DoubleBuffer;
  /**
   * Relative get method.  Reads the double at this buffer's
   * current position, and then increments the position.
   *
   * @return  The double at the buffer's current position
   *
   * @throws  BufferUnderflowException
   *          If the buffer's current position is not smaller than its limit
  */
  get(): number;
  /**
   * Relative put method  (optional operation).
   *
   *  Writes the given double into this buffer at the current
   * position, and then increments the position. 
   *
   * @param  d
   *         The double to be written
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If this buffer's current position is not smaller than its limit
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(d: number): DoubleBuffer;
  /**
   * Absolute get method.  Reads the double at the given
   * index.
   *
   * @param  index
   *         The index from which the double will be read
   *
   * @return  The double at the given index
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit
  */
  get(index: number): number;
  /**
   * Absolute put method  (optional operation).
   *
   *  Writes the given double into this buffer at the given
   * index. 
   *
   * @param  index
   *         The index at which the double will be written
   *
   * @param  d
   *         The double value to be written
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(index: number, d: number): DoubleBuffer;
  /**
   * Relative bulk get method.
   *
   *  This method transfers doubles from this buffer into the given
   * destination array.  If there are fewer doubles remaining in the
   * buffer than are required to satisfy the request, that is, if
   * `length` `>` `remaining()`, then no
   * doubles are transferred and a {@link BufferUnderflowException} is
   * thrown.
   *
   *  Otherwise, this method copies `length` doubles from this
   * buffer into the given array, starting at the current position of this
   * buffer and at the given offset in the array.  The position of this
   * buffer is then incremented by `length`.
   *
   *  In other words, an invocation of this method of the form
   * src.get(dst, off, len) has exactly the same effect as
   * the loop
   *
   * {@code
   *     for (int i = off; i < off + len; i++)
   *         dst[i] = src.get();
   * }
   *
   * except that it first checks that there are sufficient doubles in
   * this buffer and it is potentially much more efficient.
   *
   * @param  dst
   *         The array into which doubles are to be written
   *
   * @param  offset
   *         The offset within the array of the first double to be
   *         written; must be non-negative and no larger than
   *         `dst.length`
   *
   * @param  length
   *         The maximum number of doubles to be written to the given
   *         array; must be non-negative and no larger than
   *         `dst.length - offset`
   *
   * @return  This buffer
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than `length` doubles
   *          remaining in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
  */
  get(dst: number[], offset: number, length: number): DoubleBuffer;
  /**
   * Relative bulk get method.
   *
   *  This method transfers doubles from this buffer into the given
   * destination array.  An invocation of this method of the form
   * `src.get(a)` behaves in exactly the same way as the invocation
   *
   *      *     src.get(a, 0, a.length) 
   *
   * @param   dst
   *          The destination array
   *
   * @return  This buffer
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than `length` doubles
   *          remaining in this buffer
  */
  get(dst: number[]): DoubleBuffer;
  /**
   * Absolute bulk get method.
   *
   *  This method transfers `length` doubles from this
   * buffer into the given array, starting at the given index in this
   * buffer and at the given offset in the array.  The position of this
   * buffer is unchanged.
   *
   *  An invocation of this method of the form
   * src.get(index, dst, offset, length)
   * has exactly the same effect as the following loop except that it first
   * checks the consistency of the supplied parameters and it is potentially
   * much more efficient:
   *
   * {@code
   *     for (int i = offset, j = index; i < offset + length; i++, j++)
   *         dst[i] = src.get(j);
   * }
   *
   * @param  index
   *         The index in this buffer from which the first double will be
   *         read; must be non-negative and less than `limit()`
   *
   * @param  dst
   *         The destination array
   *
   * @param  offset
   *         The offset within the array of the first double to be
   *         written; must be non-negative and less than
   *         `dst.length`
   *
   * @param  length
   *         The number of doubles to be written to the given array;
   *         must be non-negative and no larger than the smaller of
   *         `limit() - index` and `dst.length - offset`
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `index`, `offset`, and
   *          `length` parameters do not hold
   *
   * @since 13
  */
  get(index: number, dst: number[], offset: number, length: number): DoubleBuffer;
  /**
   * Absolute bulk get method.
   *
   *  This method transfers doubles from this buffer into the given
   * destination array.  The position of this buffer is unchanged.  An
   * invocation of this method of the form
   * src.get(index, dst) behaves in exactly the same
   * way as the invocation:
   *
   *      *     src.get(index, dst, 0, dst.length) 
   *
   * @param  index
   *         The index in this buffer from which the first double will be
   *         read; must be non-negative and less than `limit()`
   *
   * @param  dst
   *         The destination array
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative, not smaller than `limit()`,
   *          or `limit() - index < dst.length`
   *
   * @since 13
  */
  get(index: number, dst: number[]): DoubleBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers the doubles remaining in the given source
   * buffer into this buffer.  If there are more doubles remaining in the
   * source buffer than in this buffer, that is, if
   * `src.remaining()` `>` `remaining()`,
   * then no doubles are transferred and a {@link
   * BufferOverflowException} is thrown.
   *
   *  Otherwise, this method copies
   * n = `src.remaining()` doubles from the given
   * buffer into this buffer, starting at each buffer's current position.
   * The positions of both buffers are then incremented by n.
   *
   *  In other words, an invocation of this method of the form
   * `dst.put(src)` has exactly the same effect as the loop
   *
   *      *     while (src.hasRemaining())
   *         dst.put(src.get()); 
   *
   * except that it first checks that there is sufficient space in this
   * buffer and it is potentially much more efficient.  If this buffer and
   * the source buffer share the same backing array or memory, then the
   * result will be as if the source elements were first copied to an
   * intermediate location before being written into this buffer.
   *
   * @param  src
   *         The source buffer from which doubles are to be read;
   *         must not be this buffer
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *          for the remaining doubles in the source buffer
   *
   * @throws  IllegalArgumentException
   *          If the source buffer is this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: DoubleBuffer): DoubleBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method transfers `length` doubles into this buffer from
   * the given source buffer, starting at the given `offset` in the
   * source buffer and the given `index` in this buffer. The positions
   * of both buffers are unchanged.
   *
   *  In other words, an invocation of this method of the form
   * dst.put(index, src, offset, length)
   * has exactly the same effect as the loop
   *
   * {@code
   * for (int i = offset, j = index; i < offset + length; i++, j++)
   *     dst.put(j, src.get(i));
   * }
   *
   * except that it first checks the consistency of the supplied parameters
   * and it is potentially much more efficient.  If this buffer and
   * the source buffer share the same backing array or memory, then the
   * result will be as if the source elements were first copied to an
   * intermediate location before being written into this buffer.
   *
   * @param index
   *        The index in this buffer at which the first double will be
   *        written; must be non-negative and less than `limit()`
   *
   * @param src
   *        The buffer from which doubles are to be read
   *
   * @param offset
   *        The index within the source buffer of the first double to be
   *        read; must be non-negative and less than `src.limit()`
   *
   * @param length
   *        The number of doubles to be read from the given buffer;
   *        must be non-negative and no larger than the smaller of
   *        `limit() - index` and `src.limit() - offset`
   *
   * @return This buffer
   *
   * @throws IndexOutOfBoundsException
   *         If the preconditions on the `index`, `offset`, and
   *         `length` parameters do not hold
   *
   * @throws ReadOnlyBufferException
   *         If this buffer is read-only
   *
   * @since 16
  */
  put(index: number, src: DoubleBuffer, offset: number, length: number): DoubleBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers doubles into this buffer from the given
   * source array.  If there are more doubles to be copied from the array
   * than remain in this buffer, that is, if
   * `length` `>` `remaining()`, then no
   * doubles are transferred and a {@link BufferOverflowException} is
   * thrown.
   *
   *  Otherwise, this method copies `length` doubles from the
   * given array into this buffer, starting at the given offset in the array
   * and at the current position of this buffer.  The position of this buffer
   * is then incremented by `length`.
   *
   *  In other words, an invocation of this method of the form
   * dst.put(src, off, len) has exactly the same effect as
   * the loop
   *
   * {@code
   *     for (int i = off; i < off + len; i++)
   *         dst.put(src[i]);
   * }
   *
   * except that it first checks that there is sufficient space in this
   * buffer and it is potentially much more efficient.
   *
   * @param  src
   *         The array from which doubles are to be read
   *
   * @param  offset
   *         The offset within the array of the first double to be read;
   *         must be non-negative and no larger than `src.length`
   *
   * @param  length
   *         The number of doubles to be read from the given array;
   *         must be non-negative and no larger than
   *         `src.length - offset`
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: number[], offset: number, length: number): DoubleBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers the entire content of the given source
   * double array into this buffer.  An invocation of this method of the
   * form `dst.put(a)` behaves in exactly the same way as the
   * invocation
   *
   *      *     dst.put(a, 0, a.length) 
   *
   * @param   src
   *          The source array
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: number[]): DoubleBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method transfers `length` doubles from the given
   * array, starting at the given offset in the array and at the given index
   * in this buffer.  The position of this buffer is unchanged.
   *
   *  An invocation of this method of the form
   * dst.put(index, src, offset, length)
   * has exactly the same effect as the following loop except that it first
   * checks the consistency of the supplied parameters and it is potentially
   * much more efficient:
   *
   * {@code
   *     for (int i = offset, j = index; i < offset + length; i++, j++)
   *         dst.put(j, src[i]);
   * }
   *
   * @param  index
   *         The index in this buffer at which the first double will be
   *         written; must be non-negative and less than `limit()`
   *
   * @param  src
   *         The array from which doubles are to be read
   *
   * @param  offset
   *         The offset within the array of the first double to be read;
   *         must be non-negative and less than `src.length`
   *
   * @param  length
   *         The number of doubles to be read from the given array;
   *         must be non-negative and no larger than the smaller of
   *         `limit() - index` and `src.length - offset`
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `index`, `offset`, and
   *          `length` parameters do not hold
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since 13
  */
  put(index: number, src: number[], offset: number, length: number): DoubleBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method copies doubles into this buffer from the given source
   * array.  The position of this buffer is unchanged.  An invocation of this
   * method of the form dst.put(index, src)
   * behaves in exactly the same way as the invocation:
   *
   *      *     dst.put(index, src, 0, src.length); 
   *
   * @param  index
   *         The index in this buffer at which the first double will be
   *         written; must be non-negative and less than `limit()`
   *
   * @param  src
   *         The array from which doubles are to be read
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative, not smaller than `limit()`,
   *          or `limit() - index < src.length`
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since 13
  */
  put(index: number, src: number[]): DoubleBuffer;
  /**
   * Tells whether or not this buffer is backed by an accessible double
   * array.
   *
   *  If this method returns `true` then the {@link #array() array}
   * and {@link #arrayOffset() arrayOffset} methods may safely be invoked.
   * 
   *
   * @return  `true` if, and only if, this buffer
   *          is backed by an array and is not read-only
  */
  hasArray(): boolean;
  /**
   * Returns the double array that backs this
   * buffer  (optional operation).
   *
   *  Modifications to this buffer's content will cause the returned
   * array's content to be modified, and vice versa.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The array that backs this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
  */
  array(): number[];
  /**
   * Returns the offset within this buffer's backing array of the first
   * element of the buffer  (optional operation).
   *
   *  If this buffer is backed by an array then buffer position p
   * corresponds to array index p + `arrayOffset()`.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The offset within this buffer's array
   *          of the first element of the buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
  */
  arrayOffset(): number;
  /**
   * {@inheritDoc}
  */
  position(newPosition: number): DoubleBuffer;
  /**
   * {@inheritDoc}
  */
  limit(newLimit: number): DoubleBuffer;
  /**
   * {@inheritDoc}
  */
  mark(): DoubleBuffer;
  /**
   * {@inheritDoc}
  */
  reset(): DoubleBuffer;
  /**
   * {@inheritDoc}
  */
  clear(): DoubleBuffer;
  /**
   * {@inheritDoc}
  */
  flip(): DoubleBuffer;
  /**
   * {@inheritDoc}
  */
  rewind(): DoubleBuffer;
  /**
   * Compacts this buffer  (optional operation).
   *
   *  The doubles between the buffer's current position and its limit,
   * if any, are copied to the beginning of the buffer.  That is, the
   * double at index p = `position()` is copied
   * to index zero, the double at index p + 1 is copied
   * to index one, and so forth until the double at index
   * `limit()` - 1 is copied to index
   * n = `limit()` - `1` - p.
   * The buffer's position is then set to n+1 and its limit is set to
   * its capacity.  The mark, if defined, is discarded.
   *
   *  The buffer's position is set to the number of doubles copied,
   * rather than to zero, so that an invocation of this method can be
   * followed immediately by an invocation of another relative put
   * method. 
   *
   *
   * @return  This buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  compact(): DoubleBuffer;
  /**
   * Tells whether or not this double buffer is direct.
   *
   * @return  `true` if, and only if, this buffer is direct
  */
  isDirect(): boolean;
  /**
   * Returns a string summarizing the state of this buffer.
   *
   * @return  A summary string
  */
  toString(): string;
  /**
   * Returns the current hash code of this buffer.
   *
   *  The hash code of a double buffer depends only upon its remaining
   * elements; that is, upon the elements from `position()` up to, and
   * including, the element at `limit()` - `1`.
   *
   *  Because buffer hash codes are content-dependent, it is inadvisable
   * to use buffers as keys in hash maps or similar data structures unless it
   * is known that their contents will not change.  
   *
   * @return  The current hash code of this buffer
  */
  hashCode(): number;
  /**
   * Tells whether or not this buffer is equal to another object.
   *
   *  Two double buffers are equal if, and only if,
   *
   * 
   *
   *    They have the same element type,  
   *
   *    They have the same number of remaining elements, and
   *   
   *
   *    The two sequences of remaining elements, considered
   *   independently of their starting positions, are pointwise equal.
   *   This method considers two double elements `a` and `b`
   *   to be equal if
   *   `(a == b) || (Double.isNaN(a) && Double.isNaN(b))`.
   *   The values `-0.0` and `+0.0` are considered to be
   *   equal, unlike {@link Double#equals(Object)}.
   *   
   *
   * 
   *
   *  A double buffer is not equal to any other type of object.  
   *
   * @param  ob  The object to which this buffer is to be compared
   *
   * @return  `true` if, and only if, this buffer is equal to the
   *           given object
  */
  equals(ob: any): boolean;
  /**
   * Compares this buffer to another.
   *
   *  Two double buffers are compared by comparing their sequences of
   * remaining elements lexicographically, without regard to the starting
   * position of each sequence within its corresponding buffer.
   * Pairs of `double` elements are compared as if by invoking
   * {@link Double#compare(double,double)}, except that
   * `-0.0` and `0.0` are considered to be equal.
   * `Double.NaN` is considered by this method to be equal
   * to itself and greater than all other `double` values
   * (including `Double.POSITIVE_INFINITY`).
   *
   *  A double buffer is not comparable to any other type of object.
   *
   * @return  A negative integer, zero, or a positive integer as this buffer
   *          is less than, equal to, or greater than the given buffer
  */
  compareTo(that: DoubleBuffer): number;
  /**
   * Finds and returns the relative index of the first mismatch between this
   * buffer and a given buffer.  The index is relative to the
   * {@link #position() position} of each buffer and will be in the range of
   * 0 (inclusive) up to the smaller of the {@link #remaining() remaining}
   * elements in each buffer (exclusive).
   *
   *  If the two buffers share a common prefix then the returned index is
   * the length of the common prefix and it follows that there is a mismatch
   * between the two buffers at that index within the respective buffers.
   * If one buffer is a proper prefix of the other then the returned index is
   * the smaller of the remaining elements in each buffer, and it follows that
   * the index is only valid for the buffer with the larger number of
   * remaining elements.
   * Otherwise, there is no mismatch.
   *
   * @param  that
   *         The byte buffer to be tested for a mismatch with this buffer
   *
   * @return  The relative index of the first mismatch between this and the
   *          given buffer, otherwise -1 if no mismatch.
   *
   * @since 11
  */
  mismatch(that: DoubleBuffer): number;
  /**
   * Retrieves this buffer's byte order.
   *
   *  The byte order of a double buffer created by allocation or by
   * wrapping an existing `double` array is the {@link
   * ByteOrder#nativeOrder native order} of the underlying
   * hardware.  The byte order of a double buffer created as a view of a byte buffer is that of the
   * byte buffer at the moment that the view is created.  
   *
   * @return  This buffer's byte order
  */
  order(): ByteOrder;
  /**
   * Returns this buffer's position.
   *
   * @return  The position of this buffer
  */
  position(): number;
  /**
   * Returns this buffer's limit.
   *
   * @return  The limit of this buffer
  */
  limit(): number;
  /**
   * Tells whether or not this buffer is read-only.
   *
   * @return  `true` if, and only if, this buffer is read-only
  */
  isReadOnly(): boolean;
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
export interface DoubleBuffer extends Buffer, Comparable<DoubleBuffer> {}
export class LongBuffer extends Buffer {
  /**
   * Allocates a new long buffer.
   *
   *  The new buffer's position will be zero, its limit will be its
   * capacity, its mark will be undefined, each of its elements will be
   * initialized to zero, and its byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * It will have a {@link #array backing array}, and its
   * {@link #arrayOffset array offset} will be zero.
   *
   * @param  capacity
   *         The new buffer's capacity, in longs
   *
   * @return  The new long buffer
   *
   * @throws  IllegalArgumentException
   *          If the `capacity` is a negative integer
  */
  static allocate(capacity: number): LongBuffer;
  /**
   * Wraps a long array into a buffer.
   *
   *  The new buffer will be backed by the given long array;
   * that is, modifications to the buffer will cause the array to be modified
   * and vice versa.  The new buffer's capacity will be
   * `array.length`, its position will be `offset`, its limit
   * will be `offset + length`, its mark will be undefined, and its
   * byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * Its {@link #array backing array} will be the given array, and
   * its {@link #arrayOffset array offset} will be zero.  
   *
   * @param  array
   *         The array that will back the new buffer
   *
   * @param  offset
   *         The offset of the subarray to be used; must be non-negative and
   *         no larger than `array.length`.  The new buffer's position
   *         will be set to this value.
   *
   * @param  length
   *         The length of the subarray to be used;
   *         must be non-negative and no larger than
   *         `array.length - offset`.
   *         The new buffer's limit will be set to `offset + length`.
   *
   * @return  The new long buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
  */
  static wrap(array: number[], offset: number, length: number): LongBuffer;
  /**
   * Wraps a long array into a buffer.
   *
   *  The new buffer will be backed by the given long array;
   * that is, modifications to the buffer will cause the array to be modified
   * and vice versa.  The new buffer's capacity and limit will be
   * `array.length`, its position will be zero, its mark will be
   * undefined, and its byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * Its {@link #array backing array} will be the given array, and its
   * {@link #arrayOffset array offset} will be zero.  
   *
   * @param  array
   *         The array that will back this buffer
   *
   * @return  The new long buffer
  */
  static wrap(array: number[]): LongBuffer;
  /**
   * Creates a new long buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at this buffer's current
   * position.  Changes to this buffer's content will be visible in the new
   * buffer, and vice versa; the two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be the number of longs remaining in this buffer, its mark will be
   * undefined, and its byte order will be
   * identical to that of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct, and
   * it will be read-only if, and only if, this buffer is read-only.  
   *
   * @return  The new long buffer
  */
  slice(): LongBuffer;
  /**
   * Creates a new long buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at position `index`
   * in this buffer, and will contain `length` elements. Changes to
   * this buffer's content will be visible in the new buffer, and vice versa;
   * the two buffers' position, limit, and mark values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be `length`, its mark will be undefined, and its byte order
   * will be
   * identical to that of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct,
   * and it will be read-only if, and only if, this buffer is read-only. 
   *
   * @param   index
   *          The position in this buffer at which the content of the new
   *          buffer will start; must be non-negative and no larger than
   *          {@link #limit() limit()}
   *
   * @param   length
   *          The number of elements the new buffer will contain; must be
   *          non-negative and no larger than `limit() - index`
   *
   * @return  The new buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative or greater than `limit()`,
   *          `length` is negative, or `length > limit() - index`
   *
   * @since 13
  */
  slice(index: number, length: number): LongBuffer;
  /**
   * Creates a new long buffer that shares this buffer's content.
   *
   *  The content of the new buffer will be that of this buffer.  Changes
   * to this buffer's content will be visible in the new buffer, and vice
   * versa; the two buffers' position, limit, and mark values will be
   * independent.
   *
   *  The new buffer's capacity, limit, position,
   * mark values, and byte order will be identical to those of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct, and
   * it will be read-only if, and only if, this buffer is read-only.  
   *
   * @return  The new long buffer
  */
  duplicate(): LongBuffer;
  /**
   * Creates a new, read-only long buffer that shares this buffer's
   * content.
   *
   *  The content of the new buffer will be that of this buffer.  Changes
   * to this buffer's content will be visible in the new buffer; the new
   * buffer itself, however, will be read-only and will not allow the shared
   * content to be modified.  The two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's capacity, limit, position,
   * mark values, and byte order will be identical to those of this buffer.
   *
   *  If this buffer is itself read-only then this method behaves in
   * exactly the same way as the {@link #duplicate duplicate} method.  
   *
   * @return  The new, read-only long buffer
  */
  asReadOnlyBuffer(): LongBuffer;
  /**
   * Relative get method.  Reads the long at this buffer's
   * current position, and then increments the position.
   *
   * @return  The long at the buffer's current position
   *
   * @throws  BufferUnderflowException
   *          If the buffer's current position is not smaller than its limit
  */
  get(): number;
  /**
   * Relative put method  (optional operation).
   *
   *  Writes the given long into this buffer at the current
   * position, and then increments the position. 
   *
   * @param  l
   *         The long to be written
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If this buffer's current position is not smaller than its limit
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(l: number): LongBuffer;
  /**
   * Absolute get method.  Reads the long at the given
   * index.
   *
   * @param  index
   *         The index from which the long will be read
   *
   * @return  The long at the given index
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit
  */
  get(index: number): number;
  /**
   * Absolute put method  (optional operation).
   *
   *  Writes the given long into this buffer at the given
   * index. 
   *
   * @param  index
   *         The index at which the long will be written
   *
   * @param  l
   *         The long value to be written
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(index: number, l: number): LongBuffer;
  /**
   * Relative bulk get method.
   *
   *  This method transfers longs from this buffer into the given
   * destination array.  If there are fewer longs remaining in the
   * buffer than are required to satisfy the request, that is, if
   * `length` `>` `remaining()`, then no
   * longs are transferred and a {@link BufferUnderflowException} is
   * thrown.
   *
   *  Otherwise, this method copies `length` longs from this
   * buffer into the given array, starting at the current position of this
   * buffer and at the given offset in the array.  The position of this
   * buffer is then incremented by `length`.
   *
   *  In other words, an invocation of this method of the form
   * src.get(dst, off, len) has exactly the same effect as
   * the loop
   *
   * {@code
   *     for (int i = off; i < off + len; i++)
   *         dst[i] = src.get();
   * }
   *
   * except that it first checks that there are sufficient longs in
   * this buffer and it is potentially much more efficient.
   *
   * @param  dst
   *         The array into which longs are to be written
   *
   * @param  offset
   *         The offset within the array of the first long to be
   *         written; must be non-negative and no larger than
   *         `dst.length`
   *
   * @param  length
   *         The maximum number of longs to be written to the given
   *         array; must be non-negative and no larger than
   *         `dst.length - offset`
   *
   * @return  This buffer
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than `length` longs
   *          remaining in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
  */
  get(dst: number[], offset: number, length: number): LongBuffer;
  /**
   * Relative bulk get method.
   *
   *  This method transfers longs from this buffer into the given
   * destination array.  An invocation of this method of the form
   * `src.get(a)` behaves in exactly the same way as the invocation
   *
   *      *     src.get(a, 0, a.length) 
   *
   * @param   dst
   *          The destination array
   *
   * @return  This buffer
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than `length` longs
   *          remaining in this buffer
  */
  get(dst: number[]): LongBuffer;
  /**
   * Absolute bulk get method.
   *
   *  This method transfers `length` longs from this
   * buffer into the given array, starting at the given index in this
   * buffer and at the given offset in the array.  The position of this
   * buffer is unchanged.
   *
   *  An invocation of this method of the form
   * src.get(index, dst, offset, length)
   * has exactly the same effect as the following loop except that it first
   * checks the consistency of the supplied parameters and it is potentially
   * much more efficient:
   *
   * {@code
   *     for (int i = offset, j = index; i < offset + length; i++, j++)
   *         dst[i] = src.get(j);
   * }
   *
   * @param  index
   *         The index in this buffer from which the first long will be
   *         read; must be non-negative and less than `limit()`
   *
   * @param  dst
   *         The destination array
   *
   * @param  offset
   *         The offset within the array of the first long to be
   *         written; must be non-negative and less than
   *         `dst.length`
   *
   * @param  length
   *         The number of longs to be written to the given array;
   *         must be non-negative and no larger than the smaller of
   *         `limit() - index` and `dst.length - offset`
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `index`, `offset`, and
   *          `length` parameters do not hold
   *
   * @since 13
  */
  get(index: number, dst: number[], offset: number, length: number): LongBuffer;
  /**
   * Absolute bulk get method.
   *
   *  This method transfers longs from this buffer into the given
   * destination array.  The position of this buffer is unchanged.  An
   * invocation of this method of the form
   * src.get(index, dst) behaves in exactly the same
   * way as the invocation:
   *
   *      *     src.get(index, dst, 0, dst.length) 
   *
   * @param  index
   *         The index in this buffer from which the first long will be
   *         read; must be non-negative and less than `limit()`
   *
   * @param  dst
   *         The destination array
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative, not smaller than `limit()`,
   *          or `limit() - index < dst.length`
   *
   * @since 13
  */
  get(index: number, dst: number[]): LongBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers the longs remaining in the given source
   * buffer into this buffer.  If there are more longs remaining in the
   * source buffer than in this buffer, that is, if
   * `src.remaining()` `>` `remaining()`,
   * then no longs are transferred and a {@link
   * BufferOverflowException} is thrown.
   *
   *  Otherwise, this method copies
   * n = `src.remaining()` longs from the given
   * buffer into this buffer, starting at each buffer's current position.
   * The positions of both buffers are then incremented by n.
   *
   *  In other words, an invocation of this method of the form
   * `dst.put(src)` has exactly the same effect as the loop
   *
   *      *     while (src.hasRemaining())
   *         dst.put(src.get()); 
   *
   * except that it first checks that there is sufficient space in this
   * buffer and it is potentially much more efficient.  If this buffer and
   * the source buffer share the same backing array or memory, then the
   * result will be as if the source elements were first copied to an
   * intermediate location before being written into this buffer.
   *
   * @param  src
   *         The source buffer from which longs are to be read;
   *         must not be this buffer
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *          for the remaining longs in the source buffer
   *
   * @throws  IllegalArgumentException
   *          If the source buffer is this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: LongBuffer): LongBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method transfers `length` longs into this buffer from
   * the given source buffer, starting at the given `offset` in the
   * source buffer and the given `index` in this buffer. The positions
   * of both buffers are unchanged.
   *
   *  In other words, an invocation of this method of the form
   * dst.put(index, src, offset, length)
   * has exactly the same effect as the loop
   *
   * {@code
   * for (int i = offset, j = index; i < offset + length; i++, j++)
   *     dst.put(j, src.get(i));
   * }
   *
   * except that it first checks the consistency of the supplied parameters
   * and it is potentially much more efficient.  If this buffer and
   * the source buffer share the same backing array or memory, then the
   * result will be as if the source elements were first copied to an
   * intermediate location before being written into this buffer.
   *
   * @param index
   *        The index in this buffer at which the first long will be
   *        written; must be non-negative and less than `limit()`
   *
   * @param src
   *        The buffer from which longs are to be read
   *
   * @param offset
   *        The index within the source buffer of the first long to be
   *        read; must be non-negative and less than `src.limit()`
   *
   * @param length
   *        The number of longs to be read from the given buffer;
   *        must be non-negative and no larger than the smaller of
   *        `limit() - index` and `src.limit() - offset`
   *
   * @return This buffer
   *
   * @throws IndexOutOfBoundsException
   *         If the preconditions on the `index`, `offset`, and
   *         `length` parameters do not hold
   *
   * @throws ReadOnlyBufferException
   *         If this buffer is read-only
   *
   * @since 16
  */
  put(index: number, src: LongBuffer, offset: number, length: number): LongBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers longs into this buffer from the given
   * source array.  If there are more longs to be copied from the array
   * than remain in this buffer, that is, if
   * `length` `>` `remaining()`, then no
   * longs are transferred and a {@link BufferOverflowException} is
   * thrown.
   *
   *  Otherwise, this method copies `length` longs from the
   * given array into this buffer, starting at the given offset in the array
   * and at the current position of this buffer.  The position of this buffer
   * is then incremented by `length`.
   *
   *  In other words, an invocation of this method of the form
   * dst.put(src, off, len) has exactly the same effect as
   * the loop
   *
   * {@code
   *     for (int i = off; i < off + len; i++)
   *         dst.put(src[i]);
   * }
   *
   * except that it first checks that there is sufficient space in this
   * buffer and it is potentially much more efficient.
   *
   * @param  src
   *         The array from which longs are to be read
   *
   * @param  offset
   *         The offset within the array of the first long to be read;
   *         must be non-negative and no larger than `src.length`
   *
   * @param  length
   *         The number of longs to be read from the given array;
   *         must be non-negative and no larger than
   *         `src.length - offset`
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: number[], offset: number, length: number): LongBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers the entire content of the given source
   * long array into this buffer.  An invocation of this method of the
   * form `dst.put(a)` behaves in exactly the same way as the
   * invocation
   *
   *      *     dst.put(a, 0, a.length) 
   *
   * @param   src
   *          The source array
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: number[]): LongBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method transfers `length` longs from the given
   * array, starting at the given offset in the array and at the given index
   * in this buffer.  The position of this buffer is unchanged.
   *
   *  An invocation of this method of the form
   * dst.put(index, src, offset, length)
   * has exactly the same effect as the following loop except that it first
   * checks the consistency of the supplied parameters and it is potentially
   * much more efficient:
   *
   * {@code
   *     for (int i = offset, j = index; i < offset + length; i++, j++)
   *         dst.put(j, src[i]);
   * }
   *
   * @param  index
   *         The index in this buffer at which the first long will be
   *         written; must be non-negative and less than `limit()`
   *
   * @param  src
   *         The array from which longs are to be read
   *
   * @param  offset
   *         The offset within the array of the first long to be read;
   *         must be non-negative and less than `src.length`
   *
   * @param  length
   *         The number of longs to be read from the given array;
   *         must be non-negative and no larger than the smaller of
   *         `limit() - index` and `src.length - offset`
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `index`, `offset`, and
   *          `length` parameters do not hold
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since 13
  */
  put(index: number, src: number[], offset: number, length: number): LongBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method copies longs into this buffer from the given source
   * array.  The position of this buffer is unchanged.  An invocation of this
   * method of the form dst.put(index, src)
   * behaves in exactly the same way as the invocation:
   *
   *      *     dst.put(index, src, 0, src.length); 
   *
   * @param  index
   *         The index in this buffer at which the first long will be
   *         written; must be non-negative and less than `limit()`
   *
   * @param  src
   *         The array from which longs are to be read
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative, not smaller than `limit()`,
   *          or `limit() - index < src.length`
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since 13
  */
  put(index: number, src: number[]): LongBuffer;
  /**
   * Tells whether or not this buffer is backed by an accessible long
   * array.
   *
   *  If this method returns `true` then the {@link #array() array}
   * and {@link #arrayOffset() arrayOffset} methods may safely be invoked.
   * 
   *
   * @return  `true` if, and only if, this buffer
   *          is backed by an array and is not read-only
  */
  hasArray(): boolean;
  /**
   * Returns the long array that backs this
   * buffer  (optional operation).
   *
   *  Modifications to this buffer's content will cause the returned
   * array's content to be modified, and vice versa.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The array that backs this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
  */
  array(): number[];
  /**
   * Returns the offset within this buffer's backing array of the first
   * element of the buffer  (optional operation).
   *
   *  If this buffer is backed by an array then buffer position p
   * corresponds to array index p + `arrayOffset()`.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The offset within this buffer's array
   *          of the first element of the buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
  */
  arrayOffset(): number;
  /**
   * {@inheritDoc}
  */
  position(newPosition: number): LongBuffer;
  /**
   * {@inheritDoc}
  */
  limit(newLimit: number): LongBuffer;
  /**
   * {@inheritDoc}
  */
  mark(): LongBuffer;
  /**
   * {@inheritDoc}
  */
  reset(): LongBuffer;
  /**
   * {@inheritDoc}
  */
  clear(): LongBuffer;
  /**
   * {@inheritDoc}
  */
  flip(): LongBuffer;
  /**
   * {@inheritDoc}
  */
  rewind(): LongBuffer;
  /**
   * Compacts this buffer  (optional operation).
   *
   *  The longs between the buffer's current position and its limit,
   * if any, are copied to the beginning of the buffer.  That is, the
   * long at index p = `position()` is copied
   * to index zero, the long at index p + 1 is copied
   * to index one, and so forth until the long at index
   * `limit()` - 1 is copied to index
   * n = `limit()` - `1` - p.
   * The buffer's position is then set to n+1 and its limit is set to
   * its capacity.  The mark, if defined, is discarded.
   *
   *  The buffer's position is set to the number of longs copied,
   * rather than to zero, so that an invocation of this method can be
   * followed immediately by an invocation of another relative put
   * method. 
   *
   *
   * @return  This buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  compact(): LongBuffer;
  /**
   * Tells whether or not this long buffer is direct.
   *
   * @return  `true` if, and only if, this buffer is direct
  */
  isDirect(): boolean;
  /**
   * Returns a string summarizing the state of this buffer.
   *
   * @return  A summary string
  */
  toString(): string;
  /**
   * Returns the current hash code of this buffer.
   *
   *  The hash code of a long buffer depends only upon its remaining
   * elements; that is, upon the elements from `position()` up to, and
   * including, the element at `limit()` - `1`.
   *
   *  Because buffer hash codes are content-dependent, it is inadvisable
   * to use buffers as keys in hash maps or similar data structures unless it
   * is known that their contents will not change.  
   *
   * @return  The current hash code of this buffer
  */
  hashCode(): number;
  /**
   * Tells whether or not this buffer is equal to another object.
   *
   *  Two long buffers are equal if, and only if,
   *
   * 
   *
   *    They have the same element type,  
   *
   *    They have the same number of remaining elements, and
   *   
   *
   *    The two sequences of remaining elements, considered
   *   independently of their starting positions, are pointwise equal.
   *   
   *
   * 
   *
   *  A long buffer is not equal to any other type of object.  
   *
   * @param  ob  The object to which this buffer is to be compared
   *
   * @return  `true` if, and only if, this buffer is equal to the
   *           given object
  */
  equals(ob: any): boolean;
  /**
   * Compares this buffer to another.
   *
   *  Two long buffers are compared by comparing their sequences of
   * remaining elements lexicographically, without regard to the starting
   * position of each sequence within its corresponding buffer.
   * Pairs of `long` elements are compared as if by invoking
   * {@link Long#compare(long,long)}.
   *
   *  A long buffer is not comparable to any other type of object.
   *
   * @return  A negative integer, zero, or a positive integer as this buffer
   *          is less than, equal to, or greater than the given buffer
  */
  compareTo(that: LongBuffer): number;
  /**
   * Finds and returns the relative index of the first mismatch between this
   * buffer and a given buffer.  The index is relative to the
   * {@link #position() position} of each buffer and will be in the range of
   * 0 (inclusive) up to the smaller of the {@link #remaining() remaining}
   * elements in each buffer (exclusive).
   *
   *  If the two buffers share a common prefix then the returned index is
   * the length of the common prefix and it follows that there is a mismatch
   * between the two buffers at that index within the respective buffers.
   * If one buffer is a proper prefix of the other then the returned index is
   * the smaller of the remaining elements in each buffer, and it follows that
   * the index is only valid for the buffer with the larger number of
   * remaining elements.
   * Otherwise, there is no mismatch.
   *
   * @param  that
   *         The byte buffer to be tested for a mismatch with this buffer
   *
   * @return  The relative index of the first mismatch between this and the
   *          given buffer, otherwise -1 if no mismatch.
   *
   * @since 11
  */
  mismatch(that: LongBuffer): number;
  /**
   * Retrieves this buffer's byte order.
   *
   *  The byte order of a long buffer created by allocation or by
   * wrapping an existing `long` array is the {@link
   * ByteOrder#nativeOrder native order} of the underlying
   * hardware.  The byte order of a long buffer created as a view of a byte buffer is that of the
   * byte buffer at the moment that the view is created.  
   *
   * @return  This buffer's byte order
  */
  order(): ByteOrder;
  /**
   * Returns this buffer's position.
   *
   * @return  The position of this buffer
  */
  position(): number;
  /**
   * Returns this buffer's limit.
   *
   * @return  The limit of this buffer
  */
  limit(): number;
  /**
   * Tells whether or not this buffer is read-only.
   *
   * @return  `true` if, and only if, this buffer is read-only
  */
  isReadOnly(): boolean;
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
export interface LongBuffer extends Buffer, Comparable<LongBuffer> {}
export class CharBuffer extends Buffer {
  /**
   * Allocates a new char buffer.
   *
   *  The new buffer's position will be zero, its limit will be its
   * capacity, its mark will be undefined, each of its elements will be
   * initialized to zero, and its byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * It will have a {@link #array backing array}, and its
   * {@link #arrayOffset array offset} will be zero.
   *
   * @param  capacity
   *         The new buffer's capacity, in chars
   *
   * @return  The new char buffer
   *
   * @throws  IllegalArgumentException
   *          If the `capacity` is a negative integer
  */
  static allocate(capacity: number): CharBuffer;
  /**
   * Wraps a char array into a buffer.
   *
   *  The new buffer will be backed by the given char array;
   * that is, modifications to the buffer will cause the array to be modified
   * and vice versa.  The new buffer's capacity will be
   * `array.length`, its position will be `offset`, its limit
   * will be `offset + length`, its mark will be undefined, and its
   * byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * Its {@link #array backing array} will be the given array, and
   * its {@link #arrayOffset array offset} will be zero.  
   *
   * @param  array
   *         The array that will back the new buffer
   *
   * @param  offset
   *         The offset of the subarray to be used; must be non-negative and
   *         no larger than `array.length`.  The new buffer's position
   *         will be set to this value.
   *
   * @param  length
   *         The length of the subarray to be used;
   *         must be non-negative and no larger than
   *         `array.length - offset`.
   *         The new buffer's limit will be set to `offset + length`.
   *
   * @return  The new char buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
  */
  static wrap(array: string[], offset: number, length: number): CharBuffer;
  /**
   * Wraps a char array into a buffer.
   *
   *  The new buffer will be backed by the given char array;
   * that is, modifications to the buffer will cause the array to be modified
   * and vice versa.  The new buffer's capacity and limit will be
   * `array.length`, its position will be zero, its mark will be
   * undefined, and its byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * Its {@link #array backing array} will be the given array, and its
   * {@link #arrayOffset array offset} will be zero.  
   *
   * @param  array
   *         The array that will back this buffer
   *
   * @return  The new char buffer
  */
  static wrap(array: string[]): CharBuffer;
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
   * @throws ReadOnlyBufferException if target is a read only buffer
   * @since 1.5
  */
  read(target: CharBuffer): number;
  /**
   * Wraps a character sequence into a buffer.
   *
   *  The content of the new, read-only buffer will be the content of the
   * given character sequence.  The buffer's capacity will be
   * `csq.length()`, its position will be `start`, its limit
   * will be `end`, and its mark will be undefined.  
   *
   * @param  csq
   *         The character sequence from which the new character buffer is to
   *         be created
   *
   * @param  start
   *         The index of the first character to be used;
   *         must be non-negative and no larger than `csq.length()`.
   *         The new buffer's position will be set to this value.
   *
   * @param  end
   *         The index of the character following the last character to be
   *         used; must be no smaller than `start` and no larger
   *         than `csq.length()`.
   *         The new buffer's limit will be set to this value.
   *
   * @return  The new character buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `start` and `end`
   *          parameters do not hold
  */
  static wrap(csq: CharSequence, start: number, end: number): CharBuffer;
  /**
   * Wraps a character sequence into a buffer.
   *
   *  The content of the new, read-only buffer will be the content of the
   * given character sequence.  The new buffer's capacity and limit will be
   * `csq.length()`, its position will be zero, and its mark will be
   * undefined.  
   *
   * @param  csq
   *         The character sequence from which the new character buffer is to
   *         be created
   *
   * @return  The new character buffer
  */
  static wrap(csq: CharSequence): CharBuffer;
  /**
   * Creates a new char buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at this buffer's current
   * position.  Changes to this buffer's content will be visible in the new
   * buffer, and vice versa; the two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be the number of chars remaining in this buffer, its mark will be
   * undefined, and its byte order will be
   * identical to that of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct, and
   * it will be read-only if, and only if, this buffer is read-only.  
   *
   * @return  The new char buffer
  */
  slice(): CharBuffer;
  /**
   * Creates a new char buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at position `index`
   * in this buffer, and will contain `length` elements. Changes to
   * this buffer's content will be visible in the new buffer, and vice versa;
   * the two buffers' position, limit, and mark values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be `length`, its mark will be undefined, and its byte order
   * will be
   * identical to that of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct,
   * and it will be read-only if, and only if, this buffer is read-only. 
   *
   * @param   index
   *          The position in this buffer at which the content of the new
   *          buffer will start; must be non-negative and no larger than
   *          {@link #limit() limit()}
   *
   * @param   length
   *          The number of elements the new buffer will contain; must be
   *          non-negative and no larger than `limit() - index`
   *
   * @return  The new buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative or greater than `limit()`,
   *          `length` is negative, or `length > limit() - index`
   *
   * @since 13
  */
  slice(index: number, length: number): CharBuffer;
  /**
   * Creates a new char buffer that shares this buffer's content.
   *
   *  The content of the new buffer will be that of this buffer.  Changes
   * to this buffer's content will be visible in the new buffer, and vice
   * versa; the two buffers' position, limit, and mark values will be
   * independent.
   *
   *  The new buffer's capacity, limit, position,
   * mark values, and byte order will be identical to those of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct, and
   * it will be read-only if, and only if, this buffer is read-only.  
   *
   * @return  The new char buffer
  */
  duplicate(): CharBuffer;
  /**
   * Creates a new, read-only char buffer that shares this buffer's
   * content.
   *
   *  The content of the new buffer will be that of this buffer.  Changes
   * to this buffer's content will be visible in the new buffer; the new
   * buffer itself, however, will be read-only and will not allow the shared
   * content to be modified.  The two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's capacity, limit, position,
   * mark values, and byte order will be identical to those of this buffer.
   *
   *  If this buffer is itself read-only then this method behaves in
   * exactly the same way as the {@link #duplicate duplicate} method.  
   *
   * @return  The new, read-only char buffer
  */
  asReadOnlyBuffer(): CharBuffer;
  /**
   * Relative get method.  Reads the char at this buffer's
   * current position, and then increments the position.
   *
   * @return  The char at the buffer's current position
   *
   * @throws  BufferUnderflowException
   *          If the buffer's current position is not smaller than its limit
  */
  get(): string;
  /**
   * Relative put method  (optional operation).
   *
   *  Writes the given char into this buffer at the current
   * position, and then increments the position. 
   *
   * @param  c
   *         The char to be written
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If this buffer's current position is not smaller than its limit
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(c: string): CharBuffer;
  /**
   * Absolute get method.  Reads the char at the given
   * index.
   *
   * @param  index
   *         The index from which the char will be read
   *
   * @return  The char at the given index
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit
  */
  get(index: number): string;
  /**
   * Absolute put method  (optional operation).
   *
   *  Writes the given char into this buffer at the given
   * index. 
   *
   * @param  index
   *         The index at which the char will be written
   *
   * @param  c
   *         The char value to be written
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(index: number, c: string): CharBuffer;
  /**
   * Relative bulk get method.
   *
   *  This method transfers chars from this buffer into the given
   * destination array.  If there are fewer chars remaining in the
   * buffer than are required to satisfy the request, that is, if
   * `length` `>` `remaining()`, then no
   * chars are transferred and a {@link BufferUnderflowException} is
   * thrown.
   *
   *  Otherwise, this method copies `length` chars from this
   * buffer into the given array, starting at the current position of this
   * buffer and at the given offset in the array.  The position of this
   * buffer is then incremented by `length`.
   *
   *  In other words, an invocation of this method of the form
   * src.get(dst, off, len) has exactly the same effect as
   * the loop
   *
   * {@code
   *     for (int i = off; i < off + len; i++)
   *         dst[i] = src.get();
   * }
   *
   * except that it first checks that there are sufficient chars in
   * this buffer and it is potentially much more efficient.
   *
   * @param  dst
   *         The array into which chars are to be written
   *
   * @param  offset
   *         The offset within the array of the first char to be
   *         written; must be non-negative and no larger than
   *         `dst.length`
   *
   * @param  length
   *         The maximum number of chars to be written to the given
   *         array; must be non-negative and no larger than
   *         `dst.length - offset`
   *
   * @return  This buffer
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than `length` chars
   *          remaining in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
  */
  get(dst: string[], offset: number, length: number): CharBuffer;
  /**
   * Relative bulk get method.
   *
   *  This method transfers chars from this buffer into the given
   * destination array.  An invocation of this method of the form
   * `src.get(a)` behaves in exactly the same way as the invocation
   *
   *      *     src.get(a, 0, a.length) 
   *
   * @param   dst
   *          The destination array
   *
   * @return  This buffer
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than `length` chars
   *          remaining in this buffer
  */
  get(dst: string[]): CharBuffer;
  /**
   * Absolute bulk get method.
   *
   *  This method transfers `length` chars from this
   * buffer into the given array, starting at the given index in this
   * buffer and at the given offset in the array.  The position of this
   * buffer is unchanged.
   *
   *  An invocation of this method of the form
   * src.get(index, dst, offset, length)
   * has exactly the same effect as the following loop except that it first
   * checks the consistency of the supplied parameters and it is potentially
   * much more efficient:
   *
   * {@code
   *     for (int i = offset, j = index; i < offset + length; i++, j++)
   *         dst[i] = src.get(j);
   * }
   *
   * @param  index
   *         The index in this buffer from which the first char will be
   *         read; must be non-negative and less than `limit()`
   *
   * @param  dst
   *         The destination array
   *
   * @param  offset
   *         The offset within the array of the first char to be
   *         written; must be non-negative and less than
   *         `dst.length`
   *
   * @param  length
   *         The number of chars to be written to the given array;
   *         must be non-negative and no larger than the smaller of
   *         `limit() - index` and `dst.length - offset`
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `index`, `offset`, and
   *          `length` parameters do not hold
   *
   * @since 13
  */
  get(index: number, dst: string[], offset: number, length: number): CharBuffer;
  /**
   * Absolute bulk get method.
   *
   *  This method transfers chars from this buffer into the given
   * destination array.  The position of this buffer is unchanged.  An
   * invocation of this method of the form
   * src.get(index, dst) behaves in exactly the same
   * way as the invocation:
   *
   *      *     src.get(index, dst, 0, dst.length) 
   *
   * @param  index
   *         The index in this buffer from which the first char will be
   *         read; must be non-negative and less than `limit()`
   *
   * @param  dst
   *         The destination array
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative, not smaller than `limit()`,
   *          or `limit() - index < dst.length`
   *
   * @since 13
  */
  get(index: number, dst: string[]): CharBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers the chars remaining in the given source
   * buffer into this buffer.  If there are more chars remaining in the
   * source buffer than in this buffer, that is, if
   * `src.remaining()` `>` `remaining()`,
   * then no chars are transferred and a {@link
   * BufferOverflowException} is thrown.
   *
   *  Otherwise, this method copies
   * n = `src.remaining()` chars from the given
   * buffer into this buffer, starting at each buffer's current position.
   * The positions of both buffers are then incremented by n.
   *
   *  In other words, an invocation of this method of the form
   * `dst.put(src)` has exactly the same effect as the loop
   *
   *      *     while (src.hasRemaining())
   *         dst.put(src.get()); 
   *
   * except that it first checks that there is sufficient space in this
   * buffer and it is potentially much more efficient.  If this buffer and
   * the source buffer share the same backing array or memory, then the
   * result will be as if the source elements were first copied to an
   * intermediate location before being written into this buffer.
   *
   * @param  src
   *         The source buffer from which chars are to be read;
   *         must not be this buffer
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *          for the remaining chars in the source buffer
   *
   * @throws  IllegalArgumentException
   *          If the source buffer is this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: CharBuffer): CharBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method transfers `length` chars into this buffer from
   * the given source buffer, starting at the given `offset` in the
   * source buffer and the given `index` in this buffer. The positions
   * of both buffers are unchanged.
   *
   *  In other words, an invocation of this method of the form
   * dst.put(index, src, offset, length)
   * has exactly the same effect as the loop
   *
   * {@code
   * for (int i = offset, j = index; i < offset + length; i++, j++)
   *     dst.put(j, src.get(i));
   * }
   *
   * except that it first checks the consistency of the supplied parameters
   * and it is potentially much more efficient.  If this buffer and
   * the source buffer share the same backing array or memory, then the
   * result will be as if the source elements were first copied to an
   * intermediate location before being written into this buffer.
   *
   * @param index
   *        The index in this buffer at which the first char will be
   *        written; must be non-negative and less than `limit()`
   *
   * @param src
   *        The buffer from which chars are to be read
   *
   * @param offset
   *        The index within the source buffer of the first char to be
   *        read; must be non-negative and less than `src.limit()`
   *
   * @param length
   *        The number of chars to be read from the given buffer;
   *        must be non-negative and no larger than the smaller of
   *        `limit() - index` and `src.limit() - offset`
   *
   * @return This buffer
   *
   * @throws IndexOutOfBoundsException
   *         If the preconditions on the `index`, `offset`, and
   *         `length` parameters do not hold
   *
   * @throws ReadOnlyBufferException
   *         If this buffer is read-only
   *
   * @since 16
  */
  put(index: number, src: CharBuffer, offset: number, length: number): CharBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers chars into this buffer from the given
   * source array.  If there are more chars to be copied from the array
   * than remain in this buffer, that is, if
   * `length` `>` `remaining()`, then no
   * chars are transferred and a {@link BufferOverflowException} is
   * thrown.
   *
   *  Otherwise, this method copies `length` chars from the
   * given array into this buffer, starting at the given offset in the array
   * and at the current position of this buffer.  The position of this buffer
   * is then incremented by `length`.
   *
   *  In other words, an invocation of this method of the form
   * dst.put(src, off, len) has exactly the same effect as
   * the loop
   *
   * {@code
   *     for (int i = off; i < off + len; i++)
   *         dst.put(src[i]);
   * }
   *
   * except that it first checks that there is sufficient space in this
   * buffer and it is potentially much more efficient.
   *
   * @param  src
   *         The array from which chars are to be read
   *
   * @param  offset
   *         The offset within the array of the first char to be read;
   *         must be non-negative and no larger than `src.length`
   *
   * @param  length
   *         The number of chars to be read from the given array;
   *         must be non-negative and no larger than
   *         `src.length - offset`
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: string[], offset: number, length: number): CharBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers the entire content of the given source
   * char array into this buffer.  An invocation of this method of the
   * form `dst.put(a)` behaves in exactly the same way as the
   * invocation
   *
   *      *     dst.put(a, 0, a.length) 
   *
   * @param   src
   *          The source array
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: string[]): CharBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method transfers `length` chars from the given
   * array, starting at the given offset in the array and at the given index
   * in this buffer.  The position of this buffer is unchanged.
   *
   *  An invocation of this method of the form
   * dst.put(index, src, offset, length)
   * has exactly the same effect as the following loop except that it first
   * checks the consistency of the supplied parameters and it is potentially
   * much more efficient:
   *
   * {@code
   *     for (int i = offset, j = index; i < offset + length; i++, j++)
   *         dst.put(j, src[i]);
   * }
   *
   * @param  index
   *         The index in this buffer at which the first char will be
   *         written; must be non-negative and less than `limit()`
   *
   * @param  src
   *         The array from which chars are to be read
   *
   * @param  offset
   *         The offset within the array of the first char to be read;
   *         must be non-negative and less than `src.length`
   *
   * @param  length
   *         The number of chars to be read from the given array;
   *         must be non-negative and no larger than the smaller of
   *         `limit() - index` and `src.length - offset`
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `index`, `offset`, and
   *          `length` parameters do not hold
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since 13
  */
  put(index: number, src: string[], offset: number, length: number): CharBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method copies chars into this buffer from the given source
   * array.  The position of this buffer is unchanged.  An invocation of this
   * method of the form dst.put(index, src)
   * behaves in exactly the same way as the invocation:
   *
   *      *     dst.put(index, src, 0, src.length); 
   *
   * @param  index
   *         The index in this buffer at which the first char will be
   *         written; must be non-negative and less than `limit()`
   *
   * @param  src
   *         The array from which chars are to be read
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative, not smaller than `limit()`,
   *          or `limit() - index < src.length`
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since 13
  */
  put(index: number, src: string[]): CharBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers chars from the given string into this
   * buffer.  If there are more chars to be copied from the string than
   * remain in this buffer, that is, if
   * end - start `>` `remaining()`,
   * then no chars are transferred and a {@link
   * BufferOverflowException} is thrown.
   *
   *  Otherwise, this method copies
   * n = `end` - `start` chars
   * from the given string into this buffer, starting at the given
   * `start` index and at the current position of this buffer.  The
   * position of this buffer is then incremented by n.
   *
   *  In other words, an invocation of this method of the form
   * dst.put(src, start, end) has exactly the same effect
   * as the loop
   *
   * {@code
   *     for (int i = start; i < end; i++)
   *         dst.put(src.charAt(i));
   * }
   *
   * except that it first checks that there is sufficient space in this
   * buffer and it is potentially much more efficient.
   *
   * @param  src
   *         The string from which chars are to be read
   *
   * @param  start
   *         The offset within the string of the first char to be read;
   *         must be non-negative and no larger than
   *         `string.length()`
   *
   * @param  end
   *         The offset within the string of the last char to be read,
   *         plus one; must be non-negative and no larger than
   *         `string.length()`
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `start` and `end`
   *          parameters do not hold
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: string, start: number, end: number): CharBuffer;
  /**
   * Tells whether or not this buffer is backed by an accessible char
   * array.
   *
   *  If this method returns `true` then the {@link #array() array}
   * and {@link #arrayOffset() arrayOffset} methods may safely be invoked.
   * 
   *
   * @return  `true` if, and only if, this buffer
   *          is backed by an array and is not read-only
  */
  hasArray(): boolean;
  /**
   * Returns the char array that backs this
   * buffer  (optional operation).
   *
   *  Modifications to this buffer's content will cause the returned
   * array's content to be modified, and vice versa.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The array that backs this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
  */
  array(): string[];
  /**
   * Returns the offset within this buffer's backing array of the first
   * element of the buffer  (optional operation).
   *
   *  If this buffer is backed by an array then buffer position p
   * corresponds to array index p + `arrayOffset()`.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The offset within this buffer's array
   *          of the first element of the buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
  */
  arrayOffset(): number;
  /**
   * {@inheritDoc}
  */
  position(newPosition: number): CharBuffer;
  /**
   * {@inheritDoc}
  */
  limit(newLimit: number): CharBuffer;
  /**
   * {@inheritDoc}
  */
  mark(): CharBuffer;
  /**
   * {@inheritDoc}
  */
  reset(): CharBuffer;
  /**
   * {@inheritDoc}
  */
  clear(): CharBuffer;
  /**
   * {@inheritDoc}
  */
  flip(): CharBuffer;
  /**
   * {@inheritDoc}
  */
  rewind(): CharBuffer;
  /**
   * Compacts this buffer  (optional operation).
   *
   *  The chars between the buffer's current position and its limit,
   * if any, are copied to the beginning of the buffer.  That is, the
   * char at index p = `position()` is copied
   * to index zero, the char at index p + 1 is copied
   * to index one, and so forth until the char at index
   * `limit()` - 1 is copied to index
   * n = `limit()` - `1` - p.
   * The buffer's position is then set to n+1 and its limit is set to
   * its capacity.  The mark, if defined, is discarded.
   *
   *  The buffer's position is set to the number of chars copied,
   * rather than to zero, so that an invocation of this method can be
   * followed immediately by an invocation of another relative put
   * method. 
   *
   *
   * @return  This buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  compact(): CharBuffer;
  /**
   * Tells whether or not this char buffer is direct.
   *
   * @return  `true` if, and only if, this buffer is direct
  */
  isDirect(): boolean;
  /**
   * Returns the current hash code of this buffer.
   *
   *  The hash code of a char buffer depends only upon its remaining
   * elements; that is, upon the elements from `position()` up to, and
   * including, the element at `limit()` - `1`.
   *
   *  Because buffer hash codes are content-dependent, it is inadvisable
   * to use buffers as keys in hash maps or similar data structures unless it
   * is known that their contents will not change.  
   *
   * @return  The current hash code of this buffer
  */
  hashCode(): number;
  /**
   * Tells whether or not this buffer is equal to another object.
   *
   *  Two char buffers are equal if, and only if,
   *
   * 
   *
   *    They have the same element type,  
   *
   *    They have the same number of remaining elements, and
   *   
   *
   *    The two sequences of remaining elements, considered
   *   independently of their starting positions, are pointwise equal.
   *   
   *
   * 
   *
   *  A char buffer is not equal to any other type of object.  
   *
   * @param  ob  The object to which this buffer is to be compared
   *
   * @return  `true` if, and only if, this buffer is equal to the
   *           given object
  */
  equals(ob: any): boolean;
  /**
   * Compares this buffer to another.
   *
   *  Two char buffers are compared by comparing their sequences of
   * remaining elements lexicographically, without regard to the starting
   * position of each sequence within its corresponding buffer.
   * Pairs of `char` elements are compared as if by invoking
   * {@link Character#compare(char,char)}.
   *
   *  A char buffer is not comparable to any other type of object.
   *
   * @return  A negative integer, zero, or a positive integer as this buffer
   *          is less than, equal to, or greater than the given buffer
  */
  compareTo(that: CharBuffer): number;
  /**
   * Finds and returns the relative index of the first mismatch between this
   * buffer and a given buffer.  The index is relative to the
   * {@link #position() position} of each buffer and will be in the range of
   * 0 (inclusive) up to the smaller of the {@link #remaining() remaining}
   * elements in each buffer (exclusive).
   *
   *  If the two buffers share a common prefix then the returned index is
   * the length of the common prefix and it follows that there is a mismatch
   * between the two buffers at that index within the respective buffers.
   * If one buffer is a proper prefix of the other then the returned index is
   * the smaller of the remaining elements in each buffer, and it follows that
   * the index is only valid for the buffer with the larger number of
   * remaining elements.
   * Otherwise, there is no mismatch.
   *
   * @param  that
   *         The byte buffer to be tested for a mismatch with this buffer
   *
   * @return  The relative index of the first mismatch between this and the
   *          given buffer, otherwise -1 if no mismatch.
   *
   * @since 11
  */
  mismatch(that: CharBuffer): number;
  /**
   * Returns a string containing the characters in this buffer.
   *
   *  The first character of the resulting string will be the character at
   * this buffer's position, while the last character will be the character
   * at index `limit()` - 1.  Invoking this method does not
   * change the buffer's position. 
   *
   * @return  The specified string
  */
  toString(): string;
  /**
   * Returns the length of this character buffer.
   *
   *  When viewed as a character sequence, the length of a character
   * buffer is simply the number of characters between the position
   * (inclusive) and the limit (exclusive); that is, it is equivalent to
   * `remaining()`. 
   *
   * @return  The length of this character buffer
  */
  length(): number;
  /**
   * Returns `true` if this character buffer is empty.
   *
   * @return `true` if there are `0` remaining characters,
   *         otherwise `false`
   *
   * @since 15
  */
  isEmpty(): boolean;
  /**
   * Reads the character at the given index relative to the current
   * position.
   *
   * @param  index
   *         The index of the character to be read, relative to the position;
   *         must be non-negative and smaller than `remaining()`
   *
   * @return  The character at index
   *          position() + index
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on `index` do not hold
  */
  charAt(index: number): string;
  /**
   * Creates a new character buffer that represents the specified subsequence
   * of this buffer, relative to the current position.
   *
   *  The new buffer will share this buffer's content; that is, if the
   * content of this buffer is mutable then modifications to one buffer will
   * cause the other to be modified.  The new buffer's capacity will be that
   * of this buffer, its position will be
   * `position()` + `start`, and its limit will be
   * `position()` + `end`.  The new buffer will be
   * direct if, and only if, this buffer is direct, and it will be read-only
   * if, and only if, this buffer is read-only.  
   *
   * @param  start
   *         The index, relative to the current position, of the first
   *         character in the subsequence; must be non-negative and no larger
   *         than `remaining()`
   *
   * @param  end
   *         The index, relative to the current position, of the character
   *         following the last character in the subsequence; must be no
   *         smaller than `start` and no larger than
   *         `remaining()`
   *
   * @return  The new character buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on `start` and `end`
   *          do not hold
  */
  subSequence(start: number, end: number): CharBuffer;
  /**
   * Appends the specified character sequence  to this
   * buffer  (optional operation).
   *
   *  An invocation of this method of the form `dst.append(csq)`
   * behaves in exactly the same way as the invocation
   *
   *      *     dst.put(csq.toString()) 
   *
   *  Depending on the specification of `toString` for the
   * character sequence `csq`, the entire sequence may not be
   * appended.  For instance, invoking the {@link CharBuffer#toString()
   * toString} method of a character buffer will return a subsequence whose
   * content depends upon the buffer's position and limit.
   *
   * @param  csq
   *         The character sequence to append.  If `csq` is
   *         `null`, then the four characters `"null"` are
   *         appended to this character buffer.
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since  1.5
  */
  append(csq: CharSequence): CharBuffer;
  /**
   * Appends a subsequence of the  specified character sequence  to this
   * buffer  (optional operation).
   *
   *  An invocation of this method of the form {@code dst.append(csq, start,
   * end)} when `csq` is not `null`, behaves in exactly the
   * same way as the invocation
   *
   *      *     dst.put(csq.subSequence(start, end).toString()) 
   *
   * @param  csq
   *         The character sequence from which a subsequence will be
   *         appended.  If `csq` is `null`, then characters
   *         will be appended as if `csq` contained the four
   *         characters `"null"`.
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `start` or `end` are negative, `start`
   *          is greater than `end`, or `end` is greater than
   *          `csq.length()`
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since  1.5
  */
  append(csq: CharSequence, start: number, end: number): CharBuffer;
  /**
   * Appends the specified char  to this
   * buffer  (optional operation).
   *
   *  An invocation of this method of the form `dst.append(c)`
   * behaves in exactly the same way as the invocation
   *
   *      *     dst.put(c) 
   *
   * @param  c
   *         The 16-bit char to append
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since  1.5
  */
  append(c: string): CharBuffer;
  /**
   * Retrieves this buffer's byte order.
   *
   *  The byte order of a char buffer created by allocation or by
   * wrapping an existing `char` array is the {@link
   * ByteOrder#nativeOrder native order} of the underlying
   * hardware.  The byte order of a char buffer created as a view of a byte buffer is that of the
   * byte buffer at the moment that the view is created.  
   *
   * @return  This buffer's byte order
  */
  order(): ByteOrder;
  /**
   * Returns a stream of `int` zero-extending the `char` values
   * from this sequence.  Any char which maps to a surrogate code
   * point is passed through uninterpreted.
   *
   * The stream binds to this sequence when the terminal stream operation
   * commences (specifically, for mutable sequences the spliterator for the
   * stream is late-binding).
   * If the sequence is modified during that operation then the result is
   * undefined.
   *
   * @return an IntStream of char values from this sequence
   * @since 1.8
  */
  chars(): IntStream;
  /**
   * Returns this buffer's position.
   *
   * @return  The position of this buffer
  */
  position(): number;
  /**
   * Returns this buffer's limit.
   *
   * @return  The limit of this buffer
  */
  limit(): number;
  /**
   * Tells whether or not this buffer is read-only.
   *
   * @return  `true` if, and only if, this buffer is read-only
  */
  isReadOnly(): boolean;
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
export interface CharBuffer extends Buffer, Comparable<CharBuffer>, Appendable, CharSequence, Readable {}
export class BufferOverflowException extends RuntimeException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class ShortBuffer extends Buffer {
  /**
   * Allocates a new short buffer.
   *
   *  The new buffer's position will be zero, its limit will be its
   * capacity, its mark will be undefined, each of its elements will be
   * initialized to zero, and its byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * It will have a {@link #array backing array}, and its
   * {@link #arrayOffset array offset} will be zero.
   *
   * @param  capacity
   *         The new buffer's capacity, in shorts
   *
   * @return  The new short buffer
   *
   * @throws  IllegalArgumentException
   *          If the `capacity` is a negative integer
  */
  static allocate(capacity: number): ShortBuffer;
  /**
   * Wraps a short array into a buffer.
   *
   *  The new buffer will be backed by the given short array;
   * that is, modifications to the buffer will cause the array to be modified
   * and vice versa.  The new buffer's capacity will be
   * `array.length`, its position will be `offset`, its limit
   * will be `offset + length`, its mark will be undefined, and its
   * byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * Its {@link #array backing array} will be the given array, and
   * its {@link #arrayOffset array offset} will be zero.  
   *
   * @param  array
   *         The array that will back the new buffer
   *
   * @param  offset
   *         The offset of the subarray to be used; must be non-negative and
   *         no larger than `array.length`.  The new buffer's position
   *         will be set to this value.
   *
   * @param  length
   *         The length of the subarray to be used;
   *         must be non-negative and no larger than
   *         `array.length - offset`.
   *         The new buffer's limit will be set to `offset + length`.
   *
   * @return  The new short buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
  */
  static wrap(array: number[], offset: number, length: number): ShortBuffer;
  /**
   * Wraps a short array into a buffer.
   *
   *  The new buffer will be backed by the given short array;
   * that is, modifications to the buffer will cause the array to be modified
   * and vice versa.  The new buffer's capacity and limit will be
   * `array.length`, its position will be zero, its mark will be
   * undefined, and its byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * Its {@link #array backing array} will be the given array, and its
   * {@link #arrayOffset array offset} will be zero.  
   *
   * @param  array
   *         The array that will back this buffer
   *
   * @return  The new short buffer
  */
  static wrap(array: number[]): ShortBuffer;
  /**
   * Creates a new short buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at this buffer's current
   * position.  Changes to this buffer's content will be visible in the new
   * buffer, and vice versa; the two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be the number of shorts remaining in this buffer, its mark will be
   * undefined, and its byte order will be
   * identical to that of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct, and
   * it will be read-only if, and only if, this buffer is read-only.  
   *
   * @return  The new short buffer
  */
  slice(): ShortBuffer;
  /**
   * Creates a new short buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at position `index`
   * in this buffer, and will contain `length` elements. Changes to
   * this buffer's content will be visible in the new buffer, and vice versa;
   * the two buffers' position, limit, and mark values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be `length`, its mark will be undefined, and its byte order
   * will be
   * identical to that of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct,
   * and it will be read-only if, and only if, this buffer is read-only. 
   *
   * @param   index
   *          The position in this buffer at which the content of the new
   *          buffer will start; must be non-negative and no larger than
   *          {@link #limit() limit()}
   *
   * @param   length
   *          The number of elements the new buffer will contain; must be
   *          non-negative and no larger than `limit() - index`
   *
   * @return  The new buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative or greater than `limit()`,
   *          `length` is negative, or `length > limit() - index`
   *
   * @since 13
  */
  slice(index: number, length: number): ShortBuffer;
  /**
   * Creates a new short buffer that shares this buffer's content.
   *
   *  The content of the new buffer will be that of this buffer.  Changes
   * to this buffer's content will be visible in the new buffer, and vice
   * versa; the two buffers' position, limit, and mark values will be
   * independent.
   *
   *  The new buffer's capacity, limit, position,
   * mark values, and byte order will be identical to those of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct, and
   * it will be read-only if, and only if, this buffer is read-only.  
   *
   * @return  The new short buffer
  */
  duplicate(): ShortBuffer;
  /**
   * Creates a new, read-only short buffer that shares this buffer's
   * content.
   *
   *  The content of the new buffer will be that of this buffer.  Changes
   * to this buffer's content will be visible in the new buffer; the new
   * buffer itself, however, will be read-only and will not allow the shared
   * content to be modified.  The two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's capacity, limit, position,
   * mark values, and byte order will be identical to those of this buffer.
   *
   *  If this buffer is itself read-only then this method behaves in
   * exactly the same way as the {@link #duplicate duplicate} method.  
   *
   * @return  The new, read-only short buffer
  */
  asReadOnlyBuffer(): ShortBuffer;
  /**
   * Relative get method.  Reads the short at this buffer's
   * current position, and then increments the position.
   *
   * @return  The short at the buffer's current position
   *
   * @throws  BufferUnderflowException
   *          If the buffer's current position is not smaller than its limit
  */
  get(): number;
  /**
   * Relative put method  (optional operation).
   *
   *  Writes the given short into this buffer at the current
   * position, and then increments the position. 
   *
   * @param  s
   *         The short to be written
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If this buffer's current position is not smaller than its limit
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(s: number): ShortBuffer;
  /**
   * Absolute get method.  Reads the short at the given
   * index.
   *
   * @param  index
   *         The index from which the short will be read
   *
   * @return  The short at the given index
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit
  */
  get(index: number): number;
  /**
   * Absolute put method  (optional operation).
   *
   *  Writes the given short into this buffer at the given
   * index. 
   *
   * @param  index
   *         The index at which the short will be written
   *
   * @param  s
   *         The short value to be written
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(index: number, s: number): ShortBuffer;
  /**
   * Relative bulk get method.
   *
   *  This method transfers shorts from this buffer into the given
   * destination array.  If there are fewer shorts remaining in the
   * buffer than are required to satisfy the request, that is, if
   * `length` `>` `remaining()`, then no
   * shorts are transferred and a {@link BufferUnderflowException} is
   * thrown.
   *
   *  Otherwise, this method copies `length` shorts from this
   * buffer into the given array, starting at the current position of this
   * buffer and at the given offset in the array.  The position of this
   * buffer is then incremented by `length`.
   *
   *  In other words, an invocation of this method of the form
   * src.get(dst, off, len) has exactly the same effect as
   * the loop
   *
   * {@code
   *     for (int i = off; i < off + len; i++)
   *         dst[i] = src.get();
   * }
   *
   * except that it first checks that there are sufficient shorts in
   * this buffer and it is potentially much more efficient.
   *
   * @param  dst
   *         The array into which shorts are to be written
   *
   * @param  offset
   *         The offset within the array of the first short to be
   *         written; must be non-negative and no larger than
   *         `dst.length`
   *
   * @param  length
   *         The maximum number of shorts to be written to the given
   *         array; must be non-negative and no larger than
   *         `dst.length - offset`
   *
   * @return  This buffer
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than `length` shorts
   *          remaining in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
  */
  get(dst: number[], offset: number, length: number): ShortBuffer;
  /**
   * Relative bulk get method.
   *
   *  This method transfers shorts from this buffer into the given
   * destination array.  An invocation of this method of the form
   * `src.get(a)` behaves in exactly the same way as the invocation
   *
   *      *     src.get(a, 0, a.length) 
   *
   * @param   dst
   *          The destination array
   *
   * @return  This buffer
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than `length` shorts
   *          remaining in this buffer
  */
  get(dst: number[]): ShortBuffer;
  /**
   * Absolute bulk get method.
   *
   *  This method transfers `length` shorts from this
   * buffer into the given array, starting at the given index in this
   * buffer and at the given offset in the array.  The position of this
   * buffer is unchanged.
   *
   *  An invocation of this method of the form
   * src.get(index, dst, offset, length)
   * has exactly the same effect as the following loop except that it first
   * checks the consistency of the supplied parameters and it is potentially
   * much more efficient:
   *
   * {@code
   *     for (int i = offset, j = index; i < offset + length; i++, j++)
   *         dst[i] = src.get(j);
   * }
   *
   * @param  index
   *         The index in this buffer from which the first short will be
   *         read; must be non-negative and less than `limit()`
   *
   * @param  dst
   *         The destination array
   *
   * @param  offset
   *         The offset within the array of the first short to be
   *         written; must be non-negative and less than
   *         `dst.length`
   *
   * @param  length
   *         The number of shorts to be written to the given array;
   *         must be non-negative and no larger than the smaller of
   *         `limit() - index` and `dst.length - offset`
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `index`, `offset`, and
   *          `length` parameters do not hold
   *
   * @since 13
  */
  get(index: number, dst: number[], offset: number, length: number): ShortBuffer;
  /**
   * Absolute bulk get method.
   *
   *  This method transfers shorts from this buffer into the given
   * destination array.  The position of this buffer is unchanged.  An
   * invocation of this method of the form
   * src.get(index, dst) behaves in exactly the same
   * way as the invocation:
   *
   *      *     src.get(index, dst, 0, dst.length) 
   *
   * @param  index
   *         The index in this buffer from which the first short will be
   *         read; must be non-negative and less than `limit()`
   *
   * @param  dst
   *         The destination array
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative, not smaller than `limit()`,
   *          or `limit() - index < dst.length`
   *
   * @since 13
  */
  get(index: number, dst: number[]): ShortBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers the shorts remaining in the given source
   * buffer into this buffer.  If there are more shorts remaining in the
   * source buffer than in this buffer, that is, if
   * `src.remaining()` `>` `remaining()`,
   * then no shorts are transferred and a {@link
   * BufferOverflowException} is thrown.
   *
   *  Otherwise, this method copies
   * n = `src.remaining()` shorts from the given
   * buffer into this buffer, starting at each buffer's current position.
   * The positions of both buffers are then incremented by n.
   *
   *  In other words, an invocation of this method of the form
   * `dst.put(src)` has exactly the same effect as the loop
   *
   *      *     while (src.hasRemaining())
   *         dst.put(src.get()); 
   *
   * except that it first checks that there is sufficient space in this
   * buffer and it is potentially much more efficient.  If this buffer and
   * the source buffer share the same backing array or memory, then the
   * result will be as if the source elements were first copied to an
   * intermediate location before being written into this buffer.
   *
   * @param  src
   *         The source buffer from which shorts are to be read;
   *         must not be this buffer
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *          for the remaining shorts in the source buffer
   *
   * @throws  IllegalArgumentException
   *          If the source buffer is this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: ShortBuffer): ShortBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method transfers `length` shorts into this buffer from
   * the given source buffer, starting at the given `offset` in the
   * source buffer and the given `index` in this buffer. The positions
   * of both buffers are unchanged.
   *
   *  In other words, an invocation of this method of the form
   * dst.put(index, src, offset, length)
   * has exactly the same effect as the loop
   *
   * {@code
   * for (int i = offset, j = index; i < offset + length; i++, j++)
   *     dst.put(j, src.get(i));
   * }
   *
   * except that it first checks the consistency of the supplied parameters
   * and it is potentially much more efficient.  If this buffer and
   * the source buffer share the same backing array or memory, then the
   * result will be as if the source elements were first copied to an
   * intermediate location before being written into this buffer.
   *
   * @param index
   *        The index in this buffer at which the first short will be
   *        written; must be non-negative and less than `limit()`
   *
   * @param src
   *        The buffer from which shorts are to be read
   *
   * @param offset
   *        The index within the source buffer of the first short to be
   *        read; must be non-negative and less than `src.limit()`
   *
   * @param length
   *        The number of shorts to be read from the given buffer;
   *        must be non-negative and no larger than the smaller of
   *        `limit() - index` and `src.limit() - offset`
   *
   * @return This buffer
   *
   * @throws IndexOutOfBoundsException
   *         If the preconditions on the `index`, `offset`, and
   *         `length` parameters do not hold
   *
   * @throws ReadOnlyBufferException
   *         If this buffer is read-only
   *
   * @since 16
  */
  put(index: number, src: ShortBuffer, offset: number, length: number): ShortBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers shorts into this buffer from the given
   * source array.  If there are more shorts to be copied from the array
   * than remain in this buffer, that is, if
   * `length` `>` `remaining()`, then no
   * shorts are transferred and a {@link BufferOverflowException} is
   * thrown.
   *
   *  Otherwise, this method copies `length` shorts from the
   * given array into this buffer, starting at the given offset in the array
   * and at the current position of this buffer.  The position of this buffer
   * is then incremented by `length`.
   *
   *  In other words, an invocation of this method of the form
   * dst.put(src, off, len) has exactly the same effect as
   * the loop
   *
   * {@code
   *     for (int i = off; i < off + len; i++)
   *         dst.put(src[i]);
   * }
   *
   * except that it first checks that there is sufficient space in this
   * buffer and it is potentially much more efficient.
   *
   * @param  src
   *         The array from which shorts are to be read
   *
   * @param  offset
   *         The offset within the array of the first short to be read;
   *         must be non-negative and no larger than `src.length`
   *
   * @param  length
   *         The number of shorts to be read from the given array;
   *         must be non-negative and no larger than
   *         `src.length - offset`
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: number[], offset: number, length: number): ShortBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers the entire content of the given source
   * short array into this buffer.  An invocation of this method of the
   * form `dst.put(a)` behaves in exactly the same way as the
   * invocation
   *
   *      *     dst.put(a, 0, a.length) 
   *
   * @param   src
   *          The source array
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: number[]): ShortBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method transfers `length` shorts from the given
   * array, starting at the given offset in the array and at the given index
   * in this buffer.  The position of this buffer is unchanged.
   *
   *  An invocation of this method of the form
   * dst.put(index, src, offset, length)
   * has exactly the same effect as the following loop except that it first
   * checks the consistency of the supplied parameters and it is potentially
   * much more efficient:
   *
   * {@code
   *     for (int i = offset, j = index; i < offset + length; i++, j++)
   *         dst.put(j, src[i]);
   * }
   *
   * @param  index
   *         The index in this buffer at which the first short will be
   *         written; must be non-negative and less than `limit()`
   *
   * @param  src
   *         The array from which shorts are to be read
   *
   * @param  offset
   *         The offset within the array of the first short to be read;
   *         must be non-negative and less than `src.length`
   *
   * @param  length
   *         The number of shorts to be read from the given array;
   *         must be non-negative and no larger than the smaller of
   *         `limit() - index` and `src.length - offset`
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `index`, `offset`, and
   *          `length` parameters do not hold
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since 13
  */
  put(index: number, src: number[], offset: number, length: number): ShortBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method copies shorts into this buffer from the given source
   * array.  The position of this buffer is unchanged.  An invocation of this
   * method of the form dst.put(index, src)
   * behaves in exactly the same way as the invocation:
   *
   *      *     dst.put(index, src, 0, src.length); 
   *
   * @param  index
   *         The index in this buffer at which the first short will be
   *         written; must be non-negative and less than `limit()`
   *
   * @param  src
   *         The array from which shorts are to be read
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative, not smaller than `limit()`,
   *          or `limit() - index < src.length`
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since 13
  */
  put(index: number, src: number[]): ShortBuffer;
  /**
   * Tells whether or not this buffer is backed by an accessible short
   * array.
   *
   *  If this method returns `true` then the {@link #array() array}
   * and {@link #arrayOffset() arrayOffset} methods may safely be invoked.
   * 
   *
   * @return  `true` if, and only if, this buffer
   *          is backed by an array and is not read-only
  */
  hasArray(): boolean;
  /**
   * Returns the short array that backs this
   * buffer  (optional operation).
   *
   *  Modifications to this buffer's content will cause the returned
   * array's content to be modified, and vice versa.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The array that backs this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
  */
  array(): number[];
  /**
   * Returns the offset within this buffer's backing array of the first
   * element of the buffer  (optional operation).
   *
   *  If this buffer is backed by an array then buffer position p
   * corresponds to array index p + `arrayOffset()`.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The offset within this buffer's array
   *          of the first element of the buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
  */
  arrayOffset(): number;
  /**
   * {@inheritDoc}
  */
  position(newPosition: number): ShortBuffer;
  /**
   * {@inheritDoc}
  */
  limit(newLimit: number): ShortBuffer;
  /**
   * {@inheritDoc}
  */
  mark(): ShortBuffer;
  /**
   * {@inheritDoc}
  */
  reset(): ShortBuffer;
  /**
   * {@inheritDoc}
  */
  clear(): ShortBuffer;
  /**
   * {@inheritDoc}
  */
  flip(): ShortBuffer;
  /**
   * {@inheritDoc}
  */
  rewind(): ShortBuffer;
  /**
   * Compacts this buffer  (optional operation).
   *
   *  The shorts between the buffer's current position and its limit,
   * if any, are copied to the beginning of the buffer.  That is, the
   * short at index p = `position()` is copied
   * to index zero, the short at index p + 1 is copied
   * to index one, and so forth until the short at index
   * `limit()` - 1 is copied to index
   * n = `limit()` - `1` - p.
   * The buffer's position is then set to n+1 and its limit is set to
   * its capacity.  The mark, if defined, is discarded.
   *
   *  The buffer's position is set to the number of shorts copied,
   * rather than to zero, so that an invocation of this method can be
   * followed immediately by an invocation of another relative put
   * method. 
   *
   *
   * @return  This buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  compact(): ShortBuffer;
  /**
   * Tells whether or not this short buffer is direct.
   *
   * @return  `true` if, and only if, this buffer is direct
  */
  isDirect(): boolean;
  /**
   * Returns a string summarizing the state of this buffer.
   *
   * @return  A summary string
  */
  toString(): string;
  /**
   * Returns the current hash code of this buffer.
   *
   *  The hash code of a short buffer depends only upon its remaining
   * elements; that is, upon the elements from `position()` up to, and
   * including, the element at `limit()` - `1`.
   *
   *  Because buffer hash codes are content-dependent, it is inadvisable
   * to use buffers as keys in hash maps or similar data structures unless it
   * is known that their contents will not change.  
   *
   * @return  The current hash code of this buffer
  */
  hashCode(): number;
  /**
   * Tells whether or not this buffer is equal to another object.
   *
   *  Two short buffers are equal if, and only if,
   *
   * 
   *
   *    They have the same element type,  
   *
   *    They have the same number of remaining elements, and
   *   
   *
   *    The two sequences of remaining elements, considered
   *   independently of their starting positions, are pointwise equal.
   *   
   *
   * 
   *
   *  A short buffer is not equal to any other type of object.  
   *
   * @param  ob  The object to which this buffer is to be compared
   *
   * @return  `true` if, and only if, this buffer is equal to the
   *           given object
  */
  equals(ob: any): boolean;
  /**
   * Compares this buffer to another.
   *
   *  Two short buffers are compared by comparing their sequences of
   * remaining elements lexicographically, without regard to the starting
   * position of each sequence within its corresponding buffer.
   * Pairs of `short` elements are compared as if by invoking
   * {@link Short#compare(short,short)}.
   *
   *  A short buffer is not comparable to any other type of object.
   *
   * @return  A negative integer, zero, or a positive integer as this buffer
   *          is less than, equal to, or greater than the given buffer
  */
  compareTo(that: ShortBuffer): number;
  /**
   * Finds and returns the relative index of the first mismatch between this
   * buffer and a given buffer.  The index is relative to the
   * {@link #position() position} of each buffer and will be in the range of
   * 0 (inclusive) up to the smaller of the {@link #remaining() remaining}
   * elements in each buffer (exclusive).
   *
   *  If the two buffers share a common prefix then the returned index is
   * the length of the common prefix and it follows that there is a mismatch
   * between the two buffers at that index within the respective buffers.
   * If one buffer is a proper prefix of the other then the returned index is
   * the smaller of the remaining elements in each buffer, and it follows that
   * the index is only valid for the buffer with the larger number of
   * remaining elements.
   * Otherwise, there is no mismatch.
   *
   * @param  that
   *         The byte buffer to be tested for a mismatch with this buffer
   *
   * @return  The relative index of the first mismatch between this and the
   *          given buffer, otherwise -1 if no mismatch.
   *
   * @since 11
  */
  mismatch(that: ShortBuffer): number;
  /**
   * Retrieves this buffer's byte order.
   *
   *  The byte order of a short buffer created by allocation or by
   * wrapping an existing `short` array is the {@link
   * ByteOrder#nativeOrder native order} of the underlying
   * hardware.  The byte order of a short buffer created as a view of a byte buffer is that of the
   * byte buffer at the moment that the view is created.  
   *
   * @return  This buffer's byte order
  */
  order(): ByteOrder;
  /**
   * Returns this buffer's position.
   *
   * @return  The position of this buffer
  */
  position(): number;
  /**
   * Returns this buffer's limit.
   *
   * @return  The limit of this buffer
  */
  limit(): number;
  /**
   * Tells whether or not this buffer is read-only.
   *
   * @return  `true` if, and only if, this buffer is read-only
  */
  isReadOnly(): boolean;
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
export interface ShortBuffer extends Buffer, Comparable<ShortBuffer> {}
export class BufferUnderflowException extends RuntimeException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class InvalidMarkException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class FloatBuffer extends Buffer {
  /**
   * Allocates a new float buffer.
   *
   *  The new buffer's position will be zero, its limit will be its
   * capacity, its mark will be undefined, each of its elements will be
   * initialized to zero, and its byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * It will have a {@link #array backing array}, and its
   * {@link #arrayOffset array offset} will be zero.
   *
   * @param  capacity
   *         The new buffer's capacity, in floats
   *
   * @return  The new float buffer
   *
   * @throws  IllegalArgumentException
   *          If the `capacity` is a negative integer
  */
  static allocate(capacity: number): FloatBuffer;
  /**
   * Wraps a float array into a buffer.
   *
   *  The new buffer will be backed by the given float array;
   * that is, modifications to the buffer will cause the array to be modified
   * and vice versa.  The new buffer's capacity will be
   * `array.length`, its position will be `offset`, its limit
   * will be `offset + length`, its mark will be undefined, and its
   * byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * Its {@link #array backing array} will be the given array, and
   * its {@link #arrayOffset array offset} will be zero.  
   *
   * @param  array
   *         The array that will back the new buffer
   *
   * @param  offset
   *         The offset of the subarray to be used; must be non-negative and
   *         no larger than `array.length`.  The new buffer's position
   *         will be set to this value.
   *
   * @param  length
   *         The length of the subarray to be used;
   *         must be non-negative and no larger than
   *         `array.length - offset`.
   *         The new buffer's limit will be set to `offset + length`.
   *
   * @return  The new float buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
  */
  static wrap(array: number[], offset: number, length: number): FloatBuffer;
  /**
   * Wraps a float array into a buffer.
   *
   *  The new buffer will be backed by the given float array;
   * that is, modifications to the buffer will cause the array to be modified
   * and vice versa.  The new buffer's capacity and limit will be
   * `array.length`, its position will be zero, its mark will be
   * undefined, and its byte order will be
   * the {@link ByteOrder#nativeOrder native order} of the underlying
   * hardware.
   * Its {@link #array backing array} will be the given array, and its
   * {@link #arrayOffset array offset} will be zero.  
   *
   * @param  array
   *         The array that will back this buffer
   *
   * @return  The new float buffer
  */
  static wrap(array: number[]): FloatBuffer;
  /**
   * Creates a new float buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at this buffer's current
   * position.  Changes to this buffer's content will be visible in the new
   * buffer, and vice versa; the two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be the number of floats remaining in this buffer, its mark will be
   * undefined, and its byte order will be
   * identical to that of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct, and
   * it will be read-only if, and only if, this buffer is read-only.  
   *
   * @return  The new float buffer
  */
  slice(): FloatBuffer;
  /**
   * Creates a new float buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at position `index`
   * in this buffer, and will contain `length` elements. Changes to
   * this buffer's content will be visible in the new buffer, and vice versa;
   * the two buffers' position, limit, and mark values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be `length`, its mark will be undefined, and its byte order
   * will be
   * identical to that of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct,
   * and it will be read-only if, and only if, this buffer is read-only. 
   *
   * @param   index
   *          The position in this buffer at which the content of the new
   *          buffer will start; must be non-negative and no larger than
   *          {@link #limit() limit()}
   *
   * @param   length
   *          The number of elements the new buffer will contain; must be
   *          non-negative and no larger than `limit() - index`
   *
   * @return  The new buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative or greater than `limit()`,
   *          `length` is negative, or `length > limit() - index`
   *
   * @since 13
  */
  slice(index: number, length: number): FloatBuffer;
  /**
   * Creates a new float buffer that shares this buffer's content.
   *
   *  The content of the new buffer will be that of this buffer.  Changes
   * to this buffer's content will be visible in the new buffer, and vice
   * versa; the two buffers' position, limit, and mark values will be
   * independent.
   *
   *  The new buffer's capacity, limit, position,
   * mark values, and byte order will be identical to those of this buffer.
   * The new buffer will be direct if, and only if, this buffer is direct, and
   * it will be read-only if, and only if, this buffer is read-only.  
   *
   * @return  The new float buffer
  */
  duplicate(): FloatBuffer;
  /**
   * Creates a new, read-only float buffer that shares this buffer's
   * content.
   *
   *  The content of the new buffer will be that of this buffer.  Changes
   * to this buffer's content will be visible in the new buffer; the new
   * buffer itself, however, will be read-only and will not allow the shared
   * content to be modified.  The two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's capacity, limit, position,
   * mark values, and byte order will be identical to those of this buffer.
   *
   *  If this buffer is itself read-only then this method behaves in
   * exactly the same way as the {@link #duplicate duplicate} method.  
   *
   * @return  The new, read-only float buffer
  */
  asReadOnlyBuffer(): FloatBuffer;
  /**
   * Relative get method.  Reads the float at this buffer's
   * current position, and then increments the position.
   *
   * @return  The float at the buffer's current position
   *
   * @throws  BufferUnderflowException
   *          If the buffer's current position is not smaller than its limit
  */
  get(): number;
  /**
   * Relative put method  (optional operation).
   *
   *  Writes the given float into this buffer at the current
   * position, and then increments the position. 
   *
   * @param  f
   *         The float to be written
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If this buffer's current position is not smaller than its limit
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(f: number): FloatBuffer;
  /**
   * Absolute get method.  Reads the float at the given
   * index.
   *
   * @param  index
   *         The index from which the float will be read
   *
   * @return  The float at the given index
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit
  */
  get(index: number): number;
  /**
   * Absolute put method  (optional operation).
   *
   *  Writes the given float into this buffer at the given
   * index. 
   *
   * @param  index
   *         The index at which the float will be written
   *
   * @param  f
   *         The float value to be written
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(index: number, f: number): FloatBuffer;
  /**
   * Relative bulk get method.
   *
   *  This method transfers floats from this buffer into the given
   * destination array.  If there are fewer floats remaining in the
   * buffer than are required to satisfy the request, that is, if
   * `length` `>` `remaining()`, then no
   * floats are transferred and a {@link BufferUnderflowException} is
   * thrown.
   *
   *  Otherwise, this method copies `length` floats from this
   * buffer into the given array, starting at the current position of this
   * buffer and at the given offset in the array.  The position of this
   * buffer is then incremented by `length`.
   *
   *  In other words, an invocation of this method of the form
   * src.get(dst, off, len) has exactly the same effect as
   * the loop
   *
   * {@code
   *     for (int i = off; i < off + len; i++)
   *         dst[i] = src.get();
   * }
   *
   * except that it first checks that there are sufficient floats in
   * this buffer and it is potentially much more efficient.
   *
   * @param  dst
   *         The array into which floats are to be written
   *
   * @param  offset
   *         The offset within the array of the first float to be
   *         written; must be non-negative and no larger than
   *         `dst.length`
   *
   * @param  length
   *         The maximum number of floats to be written to the given
   *         array; must be non-negative and no larger than
   *         `dst.length - offset`
   *
   * @return  This buffer
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than `length` floats
   *          remaining in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
  */
  get(dst: number[], offset: number, length: number): FloatBuffer;
  /**
   * Relative bulk get method.
   *
   *  This method transfers floats from this buffer into the given
   * destination array.  An invocation of this method of the form
   * `src.get(a)` behaves in exactly the same way as the invocation
   *
   *      *     src.get(a, 0, a.length) 
   *
   * @param   dst
   *          The destination array
   *
   * @return  This buffer
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than `length` floats
   *          remaining in this buffer
  */
  get(dst: number[]): FloatBuffer;
  /**
   * Absolute bulk get method.
   *
   *  This method transfers `length` floats from this
   * buffer into the given array, starting at the given index in this
   * buffer and at the given offset in the array.  The position of this
   * buffer is unchanged.
   *
   *  An invocation of this method of the form
   * src.get(index, dst, offset, length)
   * has exactly the same effect as the following loop except that it first
   * checks the consistency of the supplied parameters and it is potentially
   * much more efficient:
   *
   * {@code
   *     for (int i = offset, j = index; i < offset + length; i++, j++)
   *         dst[i] = src.get(j);
   * }
   *
   * @param  index
   *         The index in this buffer from which the first float will be
   *         read; must be non-negative and less than `limit()`
   *
   * @param  dst
   *         The destination array
   *
   * @param  offset
   *         The offset within the array of the first float to be
   *         written; must be non-negative and less than
   *         `dst.length`
   *
   * @param  length
   *         The number of floats to be written to the given array;
   *         must be non-negative and no larger than the smaller of
   *         `limit() - index` and `dst.length - offset`
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `index`, `offset`, and
   *          `length` parameters do not hold
   *
   * @since 13
  */
  get(index: number, dst: number[], offset: number, length: number): FloatBuffer;
  /**
   * Absolute bulk get method.
   *
   *  This method transfers floats from this buffer into the given
   * destination array.  The position of this buffer is unchanged.  An
   * invocation of this method of the form
   * src.get(index, dst) behaves in exactly the same
   * way as the invocation:
   *
   *      *     src.get(index, dst, 0, dst.length) 
   *
   * @param  index
   *         The index in this buffer from which the first float will be
   *         read; must be non-negative and less than `limit()`
   *
   * @param  dst
   *         The destination array
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative, not smaller than `limit()`,
   *          or `limit() - index < dst.length`
   *
   * @since 13
  */
  get(index: number, dst: number[]): FloatBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers the floats remaining in the given source
   * buffer into this buffer.  If there are more floats remaining in the
   * source buffer than in this buffer, that is, if
   * `src.remaining()` `>` `remaining()`,
   * then no floats are transferred and a {@link
   * BufferOverflowException} is thrown.
   *
   *  Otherwise, this method copies
   * n = `src.remaining()` floats from the given
   * buffer into this buffer, starting at each buffer's current position.
   * The positions of both buffers are then incremented by n.
   *
   *  In other words, an invocation of this method of the form
   * `dst.put(src)` has exactly the same effect as the loop
   *
   *      *     while (src.hasRemaining())
   *         dst.put(src.get()); 
   *
   * except that it first checks that there is sufficient space in this
   * buffer and it is potentially much more efficient.  If this buffer and
   * the source buffer share the same backing array or memory, then the
   * result will be as if the source elements were first copied to an
   * intermediate location before being written into this buffer.
   *
   * @param  src
   *         The source buffer from which floats are to be read;
   *         must not be this buffer
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *          for the remaining floats in the source buffer
   *
   * @throws  IllegalArgumentException
   *          If the source buffer is this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: FloatBuffer): FloatBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method transfers `length` floats into this buffer from
   * the given source buffer, starting at the given `offset` in the
   * source buffer and the given `index` in this buffer. The positions
   * of both buffers are unchanged.
   *
   *  In other words, an invocation of this method of the form
   * dst.put(index, src, offset, length)
   * has exactly the same effect as the loop
   *
   * {@code
   * for (int i = offset, j = index; i < offset + length; i++, j++)
   *     dst.put(j, src.get(i));
   * }
   *
   * except that it first checks the consistency of the supplied parameters
   * and it is potentially much more efficient.  If this buffer and
   * the source buffer share the same backing array or memory, then the
   * result will be as if the source elements were first copied to an
   * intermediate location before being written into this buffer.
   *
   * @param index
   *        The index in this buffer at which the first float will be
   *        written; must be non-negative and less than `limit()`
   *
   * @param src
   *        The buffer from which floats are to be read
   *
   * @param offset
   *        The index within the source buffer of the first float to be
   *        read; must be non-negative and less than `src.limit()`
   *
   * @param length
   *        The number of floats to be read from the given buffer;
   *        must be non-negative and no larger than the smaller of
   *        `limit() - index` and `src.limit() - offset`
   *
   * @return This buffer
   *
   * @throws IndexOutOfBoundsException
   *         If the preconditions on the `index`, `offset`, and
   *         `length` parameters do not hold
   *
   * @throws ReadOnlyBufferException
   *         If this buffer is read-only
   *
   * @since 16
  */
  put(index: number, src: FloatBuffer, offset: number, length: number): FloatBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers floats into this buffer from the given
   * source array.  If there are more floats to be copied from the array
   * than remain in this buffer, that is, if
   * `length` `>` `remaining()`, then no
   * floats are transferred and a {@link BufferOverflowException} is
   * thrown.
   *
   *  Otherwise, this method copies `length` floats from the
   * given array into this buffer, starting at the given offset in the array
   * and at the current position of this buffer.  The position of this buffer
   * is then incremented by `length`.
   *
   *  In other words, an invocation of this method of the form
   * dst.put(src, off, len) has exactly the same effect as
   * the loop
   *
   * {@code
   *     for (int i = off; i < off + len; i++)
   *         dst.put(src[i]);
   * }
   *
   * except that it first checks that there is sufficient space in this
   * buffer and it is potentially much more efficient.
   *
   * @param  src
   *         The array from which floats are to be read
   *
   * @param  offset
   *         The offset within the array of the first float to be read;
   *         must be non-negative and no larger than `src.length`
   *
   * @param  length
   *         The number of floats to be read from the given array;
   *         must be non-negative and no larger than
   *         `src.length - offset`
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: number[], offset: number, length: number): FloatBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers the entire content of the given source
   * float array into this buffer.  An invocation of this method of the
   * form `dst.put(a)` behaves in exactly the same way as the
   * invocation
   *
   *      *     dst.put(a, 0, a.length) 
   *
   * @param   src
   *          The source array
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: number[]): FloatBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method transfers `length` floats from the given
   * array, starting at the given offset in the array and at the given index
   * in this buffer.  The position of this buffer is unchanged.
   *
   *  An invocation of this method of the form
   * dst.put(index, src, offset, length)
   * has exactly the same effect as the following loop except that it first
   * checks the consistency of the supplied parameters and it is potentially
   * much more efficient:
   *
   * {@code
   *     for (int i = offset, j = index; i < offset + length; i++, j++)
   *         dst.put(j, src[i]);
   * }
   *
   * @param  index
   *         The index in this buffer at which the first float will be
   *         written; must be non-negative and less than `limit()`
   *
   * @param  src
   *         The array from which floats are to be read
   *
   * @param  offset
   *         The offset within the array of the first float to be read;
   *         must be non-negative and less than `src.length`
   *
   * @param  length
   *         The number of floats to be read from the given array;
   *         must be non-negative and no larger than the smaller of
   *         `limit() - index` and `src.length - offset`
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `index`, `offset`, and
   *          `length` parameters do not hold
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since 13
  */
  put(index: number, src: number[], offset: number, length: number): FloatBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method copies floats into this buffer from the given source
   * array.  The position of this buffer is unchanged.  An invocation of this
   * method of the form dst.put(index, src)
   * behaves in exactly the same way as the invocation:
   *
   *      *     dst.put(index, src, 0, src.length); 
   *
   * @param  index
   *         The index in this buffer at which the first float will be
   *         written; must be non-negative and less than `limit()`
   *
   * @param  src
   *         The array from which floats are to be read
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative, not smaller than `limit()`,
   *          or `limit() - index < src.length`
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since 13
  */
  put(index: number, src: number[]): FloatBuffer;
  /**
   * Tells whether or not this buffer is backed by an accessible float
   * array.
   *
   *  If this method returns `true` then the {@link #array() array}
   * and {@link #arrayOffset() arrayOffset} methods may safely be invoked.
   * 
   *
   * @return  `true` if, and only if, this buffer
   *          is backed by an array and is not read-only
  */
  hasArray(): boolean;
  /**
   * Returns the float array that backs this
   * buffer  (optional operation).
   *
   *  Modifications to this buffer's content will cause the returned
   * array's content to be modified, and vice versa.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The array that backs this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
  */
  array(): number[];
  /**
   * Returns the offset within this buffer's backing array of the first
   * element of the buffer  (optional operation).
   *
   *  If this buffer is backed by an array then buffer position p
   * corresponds to array index p + `arrayOffset()`.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The offset within this buffer's array
   *          of the first element of the buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
  */
  arrayOffset(): number;
  /**
   * {@inheritDoc}
  */
  position(newPosition: number): FloatBuffer;
  /**
   * {@inheritDoc}
  */
  limit(newLimit: number): FloatBuffer;
  /**
   * {@inheritDoc}
  */
  mark(): FloatBuffer;
  /**
   * {@inheritDoc}
  */
  reset(): FloatBuffer;
  /**
   * {@inheritDoc}
  */
  clear(): FloatBuffer;
  /**
   * {@inheritDoc}
  */
  flip(): FloatBuffer;
  /**
   * {@inheritDoc}
  */
  rewind(): FloatBuffer;
  /**
   * Compacts this buffer  (optional operation).
   *
   *  The floats between the buffer's current position and its limit,
   * if any, are copied to the beginning of the buffer.  That is, the
   * float at index p = `position()` is copied
   * to index zero, the float at index p + 1 is copied
   * to index one, and so forth until the float at index
   * `limit()` - 1 is copied to index
   * n = `limit()` - `1` - p.
   * The buffer's position is then set to n+1 and its limit is set to
   * its capacity.  The mark, if defined, is discarded.
   *
   *  The buffer's position is set to the number of floats copied,
   * rather than to zero, so that an invocation of this method can be
   * followed immediately by an invocation of another relative put
   * method. 
   *
   *
   * @return  This buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  compact(): FloatBuffer;
  /**
   * Tells whether or not this float buffer is direct.
   *
   * @return  `true` if, and only if, this buffer is direct
  */
  isDirect(): boolean;
  /**
   * Returns a string summarizing the state of this buffer.
   *
   * @return  A summary string
  */
  toString(): string;
  /**
   * Returns the current hash code of this buffer.
   *
   *  The hash code of a float buffer depends only upon its remaining
   * elements; that is, upon the elements from `position()` up to, and
   * including, the element at `limit()` - `1`.
   *
   *  Because buffer hash codes are content-dependent, it is inadvisable
   * to use buffers as keys in hash maps or similar data structures unless it
   * is known that their contents will not change.  
   *
   * @return  The current hash code of this buffer
  */
  hashCode(): number;
  /**
   * Tells whether or not this buffer is equal to another object.
   *
   *  Two float buffers are equal if, and only if,
   *
   * 
   *
   *    They have the same element type,  
   *
   *    They have the same number of remaining elements, and
   *   
   *
   *    The two sequences of remaining elements, considered
   *   independently of their starting positions, are pointwise equal.
   *   This method considers two float elements `a` and `b`
   *   to be equal if
   *   `(a == b) || (Float.isNaN(a) && Float.isNaN(b))`.
   *   The values `-0.0` and `+0.0` are considered to be
   *   equal, unlike {@link Float#equals(Object)}.
   *   
   *
   * 
   *
   *  A float buffer is not equal to any other type of object.  
   *
   * @param  ob  The object to which this buffer is to be compared
   *
   * @return  `true` if, and only if, this buffer is equal to the
   *           given object
  */
  equals(ob: any): boolean;
  /**
   * Compares this buffer to another.
   *
   *  Two float buffers are compared by comparing their sequences of
   * remaining elements lexicographically, without regard to the starting
   * position of each sequence within its corresponding buffer.
   * Pairs of `float` elements are compared as if by invoking
   * {@link Float#compare(float,float)}, except that
   * `-0.0` and `0.0` are considered to be equal.
   * `Float.NaN` is considered by this method to be equal
   * to itself and greater than all other `float` values
   * (including `Float.POSITIVE_INFINITY`).
   *
   *  A float buffer is not comparable to any other type of object.
   *
   * @return  A negative integer, zero, or a positive integer as this buffer
   *          is less than, equal to, or greater than the given buffer
  */
  compareTo(that: FloatBuffer): number;
  /**
   * Finds and returns the relative index of the first mismatch between this
   * buffer and a given buffer.  The index is relative to the
   * {@link #position() position} of each buffer and will be in the range of
   * 0 (inclusive) up to the smaller of the {@link #remaining() remaining}
   * elements in each buffer (exclusive).
   *
   *  If the two buffers share a common prefix then the returned index is
   * the length of the common prefix and it follows that there is a mismatch
   * between the two buffers at that index within the respective buffers.
   * If one buffer is a proper prefix of the other then the returned index is
   * the smaller of the remaining elements in each buffer, and it follows that
   * the index is only valid for the buffer with the larger number of
   * remaining elements.
   * Otherwise, there is no mismatch.
   *
   * @param  that
   *         The byte buffer to be tested for a mismatch with this buffer
   *
   * @return  The relative index of the first mismatch between this and the
   *          given buffer, otherwise -1 if no mismatch.
   *
   * @since 11
  */
  mismatch(that: FloatBuffer): number;
  /**
   * Retrieves this buffer's byte order.
   *
   *  The byte order of a float buffer created by allocation or by
   * wrapping an existing `float` array is the {@link
   * ByteOrder#nativeOrder native order} of the underlying
   * hardware.  The byte order of a float buffer created as a view of a byte buffer is that of the
   * byte buffer at the moment that the view is created.  
   *
   * @return  This buffer's byte order
  */
  order(): ByteOrder;
  /**
   * Returns this buffer's position.
   *
   * @return  The position of this buffer
  */
  position(): number;
  /**
   * Returns this buffer's limit.
   *
   * @return  The limit of this buffer
  */
  limit(): number;
  /**
   * Tells whether or not this buffer is read-only.
   *
   * @return  `true` if, and only if, this buffer is read-only
  */
  isReadOnly(): boolean;
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
export interface FloatBuffer extends Buffer, Comparable<FloatBuffer> {}
export class ByteBuffer extends Buffer {
  /**
   * Allocates a new direct byte buffer.
   *
   *  The new buffer's position will be zero, its limit will be its
   * capacity, its mark will be undefined, each of its elements will be
   * initialized to zero, and its byte order will be
   * {@link ByteOrder#BIG_ENDIAN BIG_ENDIAN}.  Whether or not it has a
   * {@link #hasArray backing array} is unspecified.
   *
   * @param  capacity
   *         The new buffer's capacity, in bytes
   *
   * @return  The new byte buffer
   *
   * @throws  IllegalArgumentException
   *          If the `capacity` is a negative integer
  */
  static allocateDirect(capacity: number): ByteBuffer;
  /**
   * Allocates a new byte buffer.
   *
   *  The new buffer's position will be zero, its limit will be its
   * capacity, its mark will be undefined, each of its elements will be
   * initialized to zero, and its byte order will be
   * {@link ByteOrder#BIG_ENDIAN BIG_ENDIAN}.
   * It will have a {@link #array backing array}, and its
   * {@link #arrayOffset array offset} will be zero.
   *
   * @param  capacity
   *         The new buffer's capacity, in bytes
   *
   * @return  The new byte buffer
   *
   * @throws  IllegalArgumentException
   *          If the `capacity` is a negative integer
  */
  static allocate(capacity: number): ByteBuffer;
  /**
   * Wraps a byte array into a buffer.
   *
   *  The new buffer will be backed by the given byte array;
   * that is, modifications to the buffer will cause the array to be modified
   * and vice versa.  The new buffer's capacity will be
   * `array.length`, its position will be `offset`, its limit
   * will be `offset + length`, its mark will be undefined, and its
   * byte order will be
   * {@link ByteOrder#BIG_ENDIAN BIG_ENDIAN}.
   * Its {@link #array backing array} will be the given array, and
   * its {@link #arrayOffset array offset} will be zero.  
   *
   * @param  array
   *         The array that will back the new buffer
   *
   * @param  offset
   *         The offset of the subarray to be used; must be non-negative and
   *         no larger than `array.length`.  The new buffer's position
   *         will be set to this value.
   *
   * @param  length
   *         The length of the subarray to be used;
   *         must be non-negative and no larger than
   *         `array.length - offset`.
   *         The new buffer's limit will be set to `offset + length`.
   *
   * @return  The new byte buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
  */
  static wrap(array: number[], offset: number, length: number): ByteBuffer;
  /**
   * Wraps a byte array into a buffer.
   *
   *  The new buffer will be backed by the given byte array;
   * that is, modifications to the buffer will cause the array to be modified
   * and vice versa.  The new buffer's capacity and limit will be
   * `array.length`, its position will be zero, its mark will be
   * undefined, and its byte order will be
   * {@link ByteOrder#BIG_ENDIAN BIG_ENDIAN}.
   * Its {@link #array backing array} will be the given array, and its
   * {@link #arrayOffset array offset} will be zero.  
   *
   * @param  array
   *         The array that will back this buffer
   *
   * @return  The new byte buffer
  */
  static wrap(array: number[]): ByteBuffer;
  /**
   * Creates a new byte buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at this buffer's current
   * position.  Changes to this buffer's content will be visible in the new
   * buffer, and vice versa; the two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be the number of bytes remaining in this buffer, its mark will be
   * undefined, and its byte order will be
   * {@link ByteOrder#BIG_ENDIAN BIG_ENDIAN}.
   * The new buffer will be direct if, and only if, this buffer is direct, and
   * it will be read-only if, and only if, this buffer is read-only.  
   *
   * @return  The new byte buffer
   *
   * @see #alignedSlice(int)
  */
  slice(): ByteBuffer;
  /**
   * Creates a new byte buffer whose content is a shared subsequence of
   * this buffer's content.
   *
   *  The content of the new buffer will start at position `index`
   * in this buffer, and will contain `length` elements. Changes to
   * this buffer's content will be visible in the new buffer, and vice versa;
   * the two buffers' position, limit, and mark values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be `length`, its mark will be undefined, and its byte order
   * will be
   * {@link ByteOrder#BIG_ENDIAN BIG_ENDIAN}.
   * The new buffer will be direct if, and only if, this buffer is direct,
   * and it will be read-only if, and only if, this buffer is read-only. 
   *
   * @param   index
   *          The position in this buffer at which the content of the new
   *          buffer will start; must be non-negative and no larger than
   *          {@link #limit() limit()}
   *
   * @param   length
   *          The number of elements the new buffer will contain; must be
   *          non-negative and no larger than `limit() - index`
   *
   * @return  The new buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative or greater than `limit()`,
   *          `length` is negative, or `length > limit() - index`
   *
   * @since 13
  */
  slice(index: number, length: number): ByteBuffer;
  /**
   * Creates a new byte buffer that shares this buffer's content.
   *
   *  The content of the new buffer will be that of this buffer.  Changes
   * to this buffer's content will be visible in the new buffer, and vice
   * versa; the two buffers' position, limit, and mark values will be
   * independent.
   *
   *  The new buffer's capacity, limit, position,
   * and mark values will be identical to those of this buffer, and its byte
   * order will be {@link ByteOrder#BIG_ENDIAN BIG_ENDIAN}.
   * The new buffer will be direct if, and only if, this buffer is direct, and
   * it will be read-only if, and only if, this buffer is read-only.  
   *
   * @return  The new byte buffer
  */
  duplicate(): ByteBuffer;
  /**
   * Creates a new, read-only byte buffer that shares this buffer's
   * content.
   *
   *  The content of the new buffer will be that of this buffer.  Changes
   * to this buffer's content will be visible in the new buffer; the new
   * buffer itself, however, will be read-only and will not allow the shared
   * content to be modified.  The two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's capacity, limit, position,
   * and mark values will be identical to those of this buffer, and its byte
   * order will be {@link ByteOrder#BIG_ENDIAN BIG_ENDIAN}.
   *
   *  If this buffer is itself read-only then this method behaves in
   * exactly the same way as the {@link #duplicate duplicate} method.  
   *
   * @return  The new, read-only byte buffer
  */
  asReadOnlyBuffer(): ByteBuffer;
  /**
   * Relative get method.  Reads the byte at this buffer's
   * current position, and then increments the position.
   *
   * @return  The byte at the buffer's current position
   *
   * @throws  BufferUnderflowException
   *          If the buffer's current position is not smaller than its limit
  */
  get(): number;
  /**
   * Relative put method  (optional operation).
   *
   *  Writes the given byte into this buffer at the current
   * position, and then increments the position. 
   *
   * @param  b
   *         The byte to be written
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If this buffer's current position is not smaller than its limit
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(b: number): ByteBuffer;
  /**
   * Absolute get method.  Reads the byte at the given
   * index.
   *
   * @param  index
   *         The index from which the byte will be read
   *
   * @return  The byte at the given index
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit
  */
  get(index: number): number;
  /**
   * Absolute put method  (optional operation).
   *
   *  Writes the given byte into this buffer at the given
   * index. 
   *
   * @param  index
   *         The index at which the byte will be written
   *
   * @param  b
   *         The byte value to be written
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(index: number, b: number): ByteBuffer;
  /**
   * Relative bulk get method.
   *
   *  This method transfers bytes from this buffer into the given
   * destination array.  If there are fewer bytes remaining in the
   * buffer than are required to satisfy the request, that is, if
   * `length` `>` `remaining()`, then no
   * bytes are transferred and a {@link BufferUnderflowException} is
   * thrown.
   *
   *  Otherwise, this method copies `length` bytes from this
   * buffer into the given array, starting at the current position of this
   * buffer and at the given offset in the array.  The position of this
   * buffer is then incremented by `length`.
   *
   *  In other words, an invocation of this method of the form
   * src.get(dst, off, len) has exactly the same effect as
   * the loop
   *
   * {@code
   *     for (int i = off; i < off + len; i++)
   *         dst[i] = src.get();
   * }
   *
   * except that it first checks that there are sufficient bytes in
   * this buffer and it is potentially much more efficient.
   *
   * @param  dst
   *         The array into which bytes are to be written
   *
   * @param  offset
   *         The offset within the array of the first byte to be
   *         written; must be non-negative and no larger than
   *         `dst.length`
   *
   * @param  length
   *         The maximum number of bytes to be written to the given
   *         array; must be non-negative and no larger than
   *         `dst.length - offset`
   *
   * @return  This buffer
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than `length` bytes
   *          remaining in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
  */
  get(dst: number[], offset: number, length: number): ByteBuffer;
  /**
   * Relative bulk get method.
   *
   *  This method transfers bytes from this buffer into the given
   * destination array.  An invocation of this method of the form
   * `src.get(a)` behaves in exactly the same way as the invocation
   *
   *      *     src.get(a, 0, a.length) 
   *
   * @param   dst
   *          The destination array
   *
   * @return  This buffer
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than `length` bytes
   *          remaining in this buffer
  */
  get(dst: number[]): ByteBuffer;
  /**
   * Absolute bulk get method.
   *
   *  This method transfers `length` bytes from this
   * buffer into the given array, starting at the given index in this
   * buffer and at the given offset in the array.  The position of this
   * buffer is unchanged.
   *
   *  An invocation of this method of the form
   * src.get(index, dst, offset, length)
   * has exactly the same effect as the following loop except that it first
   * checks the consistency of the supplied parameters and it is potentially
   * much more efficient:
   *
   * {@code
   *     for (int i = offset, j = index; i < offset + length; i++, j++)
   *         dst[i] = src.get(j);
   * }
   *
   * @param  index
   *         The index in this buffer from which the first byte will be
   *         read; must be non-negative and less than `limit()`
   *
   * @param  dst
   *         The destination array
   *
   * @param  offset
   *         The offset within the array of the first byte to be
   *         written; must be non-negative and less than
   *         `dst.length`
   *
   * @param  length
   *         The number of bytes to be written to the given array;
   *         must be non-negative and no larger than the smaller of
   *         `limit() - index` and `dst.length - offset`
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `index`, `offset`, and
   *          `length` parameters do not hold
   *
   * @since 13
  */
  get(index: number, dst: number[], offset: number, length: number): ByteBuffer;
  /**
   * Absolute bulk get method.
   *
   *  This method transfers bytes from this buffer into the given
   * destination array.  The position of this buffer is unchanged.  An
   * invocation of this method of the form
   * src.get(index, dst) behaves in exactly the same
   * way as the invocation:
   *
   *      *     src.get(index, dst, 0, dst.length) 
   *
   * @param  index
   *         The index in this buffer from which the first byte will be
   *         read; must be non-negative and less than `limit()`
   *
   * @param  dst
   *         The destination array
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative, not smaller than `limit()`,
   *          or `limit() - index < dst.length`
   *
   * @since 13
  */
  get(index: number, dst: number[]): ByteBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers the bytes remaining in the given source
   * buffer into this buffer.  If there are more bytes remaining in the
   * source buffer than in this buffer, that is, if
   * `src.remaining()` `>` `remaining()`,
   * then no bytes are transferred and a {@link
   * BufferOverflowException} is thrown.
   *
   *  Otherwise, this method copies
   * n = `src.remaining()` bytes from the given
   * buffer into this buffer, starting at each buffer's current position.
   * The positions of both buffers are then incremented by n.
   *
   *  In other words, an invocation of this method of the form
   * `dst.put(src)` has exactly the same effect as the loop
   *
   *      *     while (src.hasRemaining())
   *         dst.put(src.get()); 
   *
   * except that it first checks that there is sufficient space in this
   * buffer and it is potentially much more efficient.  If this buffer and
   * the source buffer share the same backing array or memory, then the
   * result will be as if the source elements were first copied to an
   * intermediate location before being written into this buffer.
   *
   * @param  src
   *         The source buffer from which bytes are to be read;
   *         must not be this buffer
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *          for the remaining bytes in the source buffer
   *
   * @throws  IllegalArgumentException
   *          If the source buffer is this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: ByteBuffer): ByteBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method transfers `length` bytes into this buffer from
   * the given source buffer, starting at the given `offset` in the
   * source buffer and the given `index` in this buffer. The positions
   * of both buffers are unchanged.
   *
   *  In other words, an invocation of this method of the form
   * dst.put(index, src, offset, length)
   * has exactly the same effect as the loop
   *
   * {@code
   * for (int i = offset, j = index; i < offset + length; i++, j++)
   *     dst.put(j, src.get(i));
   * }
   *
   * except that it first checks the consistency of the supplied parameters
   * and it is potentially much more efficient.  If this buffer and
   * the source buffer share the same backing array or memory, then the
   * result will be as if the source elements were first copied to an
   * intermediate location before being written into this buffer.
   *
   * @param index
   *        The index in this buffer at which the first byte will be
   *        written; must be non-negative and less than `limit()`
   *
   * @param src
   *        The buffer from which bytes are to be read
   *
   * @param offset
   *        The index within the source buffer of the first byte to be
   *        read; must be non-negative and less than `src.limit()`
   *
   * @param length
   *        The number of bytes to be read from the given buffer;
   *        must be non-negative and no larger than the smaller of
   *        `limit() - index` and `src.limit() - offset`
   *
   * @return This buffer
   *
   * @throws IndexOutOfBoundsException
   *         If the preconditions on the `index`, `offset`, and
   *         `length` parameters do not hold
   *
   * @throws ReadOnlyBufferException
   *         If this buffer is read-only
   *
   * @since 16
  */
  put(index: number, src: ByteBuffer, offset: number, length: number): ByteBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers bytes into this buffer from the given
   * source array.  If there are more bytes to be copied from the array
   * than remain in this buffer, that is, if
   * `length` `>` `remaining()`, then no
   * bytes are transferred and a {@link BufferOverflowException} is
   * thrown.
   *
   *  Otherwise, this method copies `length` bytes from the
   * given array into this buffer, starting at the given offset in the array
   * and at the current position of this buffer.  The position of this buffer
   * is then incremented by `length`.
   *
   *  In other words, an invocation of this method of the form
   * dst.put(src, off, len) has exactly the same effect as
   * the loop
   *
   * {@code
   *     for (int i = off; i < off + len; i++)
   *         dst.put(src[i]);
   * }
   *
   * except that it first checks that there is sufficient space in this
   * buffer and it is potentially much more efficient.
   *
   * @param  src
   *         The array from which bytes are to be read
   *
   * @param  offset
   *         The offset within the array of the first byte to be read;
   *         must be non-negative and no larger than `src.length`
   *
   * @param  length
   *         The number of bytes to be read from the given array;
   *         must be non-negative and no larger than
   *         `src.length - offset`
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: number[], offset: number, length: number): ByteBuffer;
  /**
   * Relative bulk put method  (optional operation).
   *
   *  This method transfers the entire content of the given source
   * byte array into this buffer.  An invocation of this method of the
   * form `dst.put(a)` behaves in exactly the same way as the
   * invocation
   *
   *      *     dst.put(a, 0, a.length) 
   *
   * @param   src
   *          The source array
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there is insufficient space in this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  put(src: number[]): ByteBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method transfers `length` bytes from the given
   * array, starting at the given offset in the array and at the given index
   * in this buffer.  The position of this buffer is unchanged.
   *
   *  An invocation of this method of the form
   * dst.put(index, src, offset, length)
   * has exactly the same effect as the following loop except that it first
   * checks the consistency of the supplied parameters and it is potentially
   * much more efficient:
   *
   * {@code
   *     for (int i = offset, j = index; i < offset + length; i++, j++)
   *         dst.put(j, src[i]);
   * }
   *
   * @param  index
   *         The index in this buffer at which the first byte will be
   *         written; must be non-negative and less than `limit()`
   *
   * @param  src
   *         The array from which bytes are to be read
   *
   * @param  offset
   *         The offset within the array of the first byte to be read;
   *         must be non-negative and less than `src.length`
   *
   * @param  length
   *         The number of bytes to be read from the given array;
   *         must be non-negative and no larger than the smaller of
   *         `limit() - index` and `src.length - offset`
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `index`, `offset`, and
   *          `length` parameters do not hold
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since 13
  */
  put(index: number, src: number[], offset: number, length: number): ByteBuffer;
  /**
   * Absolute bulk put method  (optional operation).
   *
   *  This method copies bytes into this buffer from the given source
   * array.  The position of this buffer is unchanged.  An invocation of this
   * method of the form dst.put(index, src)
   * behaves in exactly the same way as the invocation:
   *
   *      *     dst.put(index, src, 0, src.length); 
   *
   * @param  index
   *         The index in this buffer at which the first byte will be
   *         written; must be non-negative and less than `limit()`
   *
   * @param  src
   *         The array from which bytes are to be read
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative, not smaller than `limit()`,
   *          or `limit() - index < src.length`
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
   *
   * @since 13
  */
  put(index: number, src: number[]): ByteBuffer;
  /**
   * Tells whether or not this buffer is backed by an accessible byte
   * array.
   *
   *  If this method returns `true` then the {@link #array() array}
   * and {@link #arrayOffset() arrayOffset} methods may safely be invoked.
   * 
   *
   * @return  `true` if, and only if, this buffer
   *          is backed by an array and is not read-only
  */
  hasArray(): boolean;
  /**
   * Returns the byte array that backs this
   * buffer  (optional operation).
   *
   *  Modifications to this buffer's content will cause the returned
   * array's content to be modified, and vice versa.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The array that backs this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
  */
  array(): number[];
  /**
   * Returns the offset within this buffer's backing array of the first
   * element of the buffer  (optional operation).
   *
   *  If this buffer is backed by an array then buffer position p
   * corresponds to array index p + `arrayOffset()`.
   *
   *  Invoke the {@link #hasArray hasArray} method before invoking this
   * method in order to ensure that this buffer has an accessible backing
   * array.  
   *
   * @return  The offset within this buffer's array
   *          of the first element of the buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is backed by an array but is read-only
   *
   * @throws  UnsupportedOperationException
   *          If this buffer is not backed by an accessible array
  */
  arrayOffset(): number;
  /**
   * {@inheritDoc}
  */
  position(newPosition: number): ByteBuffer;
  /**
   * {@inheritDoc}
  */
  limit(newLimit: number): ByteBuffer;
  /**
   * {@inheritDoc}
  */
  mark(): ByteBuffer;
  /**
   * {@inheritDoc}
  */
  reset(): ByteBuffer;
  /**
   * {@inheritDoc}
  */
  clear(): ByteBuffer;
  /**
   * {@inheritDoc}
  */
  flip(): ByteBuffer;
  /**
   * {@inheritDoc}
  */
  rewind(): ByteBuffer;
  /**
   * Compacts this buffer  (optional operation).
   *
   *  The bytes between the buffer's current position and its limit,
   * if any, are copied to the beginning of the buffer.  That is, the
   * byte at index p = `position()` is copied
   * to index zero, the byte at index p + 1 is copied
   * to index one, and so forth until the byte at index
   * `limit()` - 1 is copied to index
   * n = `limit()` - `1` - p.
   * The buffer's position is then set to n+1 and its limit is set to
   * its capacity.  The mark, if defined, is discarded.
   *
   *  The buffer's position is set to the number of bytes copied,
   * rather than to zero, so that an invocation of this method can be
   * followed immediately by an invocation of another relative put
   * method. 
   *
   *
   *  Invoke this method after writing data from a buffer in case the
   * write was incomplete.  The following loop, for example, copies bytes
   * from one channel to another via the buffer `buf`:
   *
   * {@code
   *   buf.clear();          // Prepare buffer for use
   *   while (in.read(buf) >= 0 || buf.position != 0) {
   *       buf.flip();
   *       out.write(buf);
   *       buf.compact();    // In case of partial write
   *   }
   * }
   *
   *
   * @return  This buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  compact(): ByteBuffer;
  /**
   * Tells whether or not this byte buffer is direct.
   *
   * @return  `true` if, and only if, this buffer is direct
  */
  isDirect(): boolean;
  /**
   * Returns a string summarizing the state of this buffer.
   *
   * @return  A summary string
  */
  toString(): string;
  /**
   * Returns the current hash code of this buffer.
   *
   *  The hash code of a byte buffer depends only upon its remaining
   * elements; that is, upon the elements from `position()` up to, and
   * including, the element at `limit()` - `1`.
   *
   *  Because buffer hash codes are content-dependent, it is inadvisable
   * to use buffers as keys in hash maps or similar data structures unless it
   * is known that their contents will not change.  
   *
   * @return  The current hash code of this buffer
  */
  hashCode(): number;
  /**
   * Tells whether or not this buffer is equal to another object.
   *
   *  Two byte buffers are equal if, and only if,
   *
   * 
   *
   *    They have the same element type,  
   *
   *    They have the same number of remaining elements, and
   *   
   *
   *    The two sequences of remaining elements, considered
   *   independently of their starting positions, are pointwise equal.
   *   
   *
   * 
   *
   *  A byte buffer is not equal to any other type of object.  
   *
   * @param  ob  The object to which this buffer is to be compared
   *
   * @return  `true` if, and only if, this buffer is equal to the
   *           given object
  */
  equals(ob: any): boolean;
  /**
   * Compares this buffer to another.
   *
   *  Two byte buffers are compared by comparing their sequences of
   * remaining elements lexicographically, without regard to the starting
   * position of each sequence within its corresponding buffer.
   * Pairs of `byte` elements are compared as if by invoking
   * {@link Byte#compare(byte,byte)}.
   *
   *  A byte buffer is not comparable to any other type of object.
   *
   * @return  A negative integer, zero, or a positive integer as this buffer
   *          is less than, equal to, or greater than the given buffer
  */
  compareTo(that: ByteBuffer): number;
  /**
   * Finds and returns the relative index of the first mismatch between this
   * buffer and a given buffer.  The index is relative to the
   * {@link #position() position} of each buffer and will be in the range of
   * 0 (inclusive) up to the smaller of the {@link #remaining() remaining}
   * elements in each buffer (exclusive).
   *
   *  If the two buffers share a common prefix then the returned index is
   * the length of the common prefix and it follows that there is a mismatch
   * between the two buffers at that index within the respective buffers.
   * If one buffer is a proper prefix of the other then the returned index is
   * the smaller of the remaining elements in each buffer, and it follows that
   * the index is only valid for the buffer with the larger number of
   * remaining elements.
   * Otherwise, there is no mismatch.
   *
   * @param  that
   *         The byte buffer to be tested for a mismatch with this buffer
   *
   * @return  The relative index of the first mismatch between this and the
   *          given buffer, otherwise -1 if no mismatch.
   *
   * @since 11
  */
  mismatch(that: ByteBuffer): number;
  /**
   * Retrieves this buffer's byte order.
   *
   *  The byte order is used when reading or writing multibyte values, and
   * when creating buffers that are views of this byte buffer.  The order of
   * a newly-created byte buffer is always {@link ByteOrder#BIG_ENDIAN
   * BIG_ENDIAN}.  
   *
   * @return  This buffer's byte order
  */
  order(): ByteOrder;
  /**
   * Modifies this buffer's byte order.
   *
   * @param  bo
   *         The new byte order,
   *         either {@link ByteOrder#BIG_ENDIAN BIG_ENDIAN}
   *         or {@link ByteOrder#LITTLE_ENDIAN LITTLE_ENDIAN}
   *
   * @return  This buffer
  */
  order(bo: ByteOrder): ByteBuffer;
  /**
   * Returns the memory address, pointing to the byte at the given index,
   * modulo the given unit size.
   *
   *  The return value is non-negative in the range of `0`
   * (inclusive) up to `unitSize` (exclusive), with zero indicating
   * that the address of the byte at the index is aligned for the unit size,
   * and a positive value that the address is misaligned for the unit size.
   * If the address of the byte at the index is misaligned, the return value
   * represents how much the index should be adjusted to locate a byte at an
   * aligned address.  Specifically, the index should either be decremented by
   * the return value if the latter is not greater than `index`, or be
   * incremented by the unit size minus the return value.  Therefore given
   *      * int value = alignmentOffset(index, unitSize)
   * then the identities
   *      * alignmentOffset(index - value, unitSize) == 0, value ≤ index
   * and
   *      * alignmentOffset(index + (unitSize - value), unitSize) == 0
   * must hold.
   * 
   * @apiNote
   * This method may be utilized to determine if unit size bytes from an
   * index can be accessed atomically, if supported by the native platform.
   *
   * @implNote
   * This implementation throws `UnsupportedOperationException` for
   * non-direct buffers when the given unit size is greater then `8`.
   *
   * @param  index
   *         The index to query for alignment offset, must be non-negative, no
   *         upper bounds check is performed
   *
   * @param  unitSize
   *         The unit size in bytes, must be a power of `2`
   *
   * @return  The indexed byte's memory address modulo the unit size
   *
   * @throws IllegalArgumentException
   *         If the index is negative or the unit size is not a power of
   *         `2`
   *
   * @throws UnsupportedOperationException
   *         If the native platform does not guarantee stable alignment offset
   *         values for the given unit size when managing the memory regions
   *         of buffers of the same kind as this buffer (direct or
   *         non-direct).  For example, if garbage collection would result
   *         in the moving of a memory region covered by a non-direct buffer
   *         from one location to another and both locations have different
   *         alignment characteristics.
   *
   * @see #alignedSlice(int)
   * @since 9
  */
  alignmentOffset(index: number, unitSize: number): number;
  /**
   * Creates a new byte buffer whose content is a shared and aligned
   * subsequence of this buffer's content.
   *
   *  The content of the new buffer will start at this buffer's current
   * position rounded up to the index of the nearest aligned byte for the
   * given unit size, and end at this buffer's limit rounded down to the index
   * of the nearest aligned byte for the given unit size.
   * If rounding results in out-of-bound values then the new buffer's capacity
   * and limit will be zero.  If rounding is within bounds the following
   * expressions will be true for a new buffer `nb` and unit size
   * `unitSize`:
   * {@code
   * nb.alignmentOffset(0, unitSize) == 0
   * nb.alignmentOffset(nb.limit(), unitSize) == 0
   * }
   *
   *  Changes to this buffer's content will be visible in the new
   * buffer, and vice versa; the two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be the number of bytes remaining in this buffer or fewer subject to
   * alignment, its mark will be undefined, and its byte order will be
   * {@link ByteOrder#BIG_ENDIAN BIG_ENDIAN}.
   *
   * The new buffer will be direct if, and only if, this buffer is direct, and
   * it will be read-only if, and only if, this buffer is read-only.  
   *
   * @apiNote
   * This method may be utilized to create a new buffer where unit size bytes
   * from index, that is a multiple of the unit size, may be accessed
   * atomically, if supported by the native platform.
   *
   * @implNote
   * This implementation throws `UnsupportedOperationException` for
   * non-direct buffers when the given unit size is greater then `8`.
   *
   * @param  unitSize
   *         The unit size in bytes, must be a power of `2`
   *
   * @return  The new byte buffer
   *
   * @throws IllegalArgumentException
   *         If the unit size not a power of `2`
   *
   * @throws UnsupportedOperationException
   *         If the native platform does not guarantee stable aligned slices
   *         for the given unit size when managing the memory regions
   *         of buffers of the same kind as this buffer (direct or
   *         non-direct).  For example, if garbage collection would result
   *         in the moving of a memory region covered by a non-direct buffer
   *         from one location to another and both locations have different
   *         alignment characteristics.
   *
   * @see #alignmentOffset(int, int)
   * @see #slice()
   * @since 9
  */
  alignedSlice(unitSize: number): ByteBuffer;
  /**
   * Relative get method for reading a char value.
   *
   *  Reads the next two bytes at this buffer's current position,
   * composing them into a char value according to the current byte order,
   * and then increments the position by two.  
   *
   * @return  The char value at the buffer's current position
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than two bytes
   *          remaining in this buffer
  */
  getChar(): string;
  /**
   * Relative put method for writing a char
   * value  (optional operation).
   *
   *  Writes two bytes containing the given char value, in the
   * current byte order, into this buffer at the current position, and then
   * increments the position by two.  
   *
   * @param  value
   *         The char value to be written
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there are fewer than two bytes
   *          remaining in this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  putChar(value: string): ByteBuffer;
  /**
   * Absolute get method for reading a char value.
   *
   *  Reads two bytes at the given index, composing them into a
   * char value according to the current byte order.  
   *
   * @param  index
   *         The index from which the bytes will be read
   *
   * @return  The char value at the given index
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit,
   *          minus one
  */
  getChar(index: number): string;
  /**
   * Absolute put method for writing a char
   * value  (optional operation).
   *
   *  Writes two bytes containing the given char value, in the
   * current byte order, into this buffer at the given index.  
   *
   * @param  index
   *         The index at which the bytes will be written
   *
   * @param  value
   *         The char value to be written
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit,
   *          minus one
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  putChar(index: number, value: string): ByteBuffer;
  /**
   * Creates a view of this byte buffer as a char buffer.
   *
   *  The content of the new buffer will start at this buffer's current
   * position.  Changes to this buffer's content will be visible in the new
   * buffer, and vice versa; the two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be the number of bytes remaining in this buffer divided by
   * two, its mark will be undefined, and its byte order will be that
   * of the byte buffer at the moment the view is created.  The new buffer
   * will be direct if, and only if, this buffer is direct, and it will be
   * read-only if, and only if, this buffer is read-only.  
   *
   * @return  A new char buffer
  */
  asCharBuffer(): CharBuffer;
  /**
   * Relative get method for reading a short value.
   *
   *  Reads the next two bytes at this buffer's current position,
   * composing them into a short value according to the current byte order,
   * and then increments the position by two.  
   *
   * @return  The short value at the buffer's current position
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than two bytes
   *          remaining in this buffer
  */
  getShort(): number;
  /**
   * Relative put method for writing a short
   * value  (optional operation).
   *
   *  Writes two bytes containing the given short value, in the
   * current byte order, into this buffer at the current position, and then
   * increments the position by two.  
   *
   * @param  value
   *         The short value to be written
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there are fewer than two bytes
   *          remaining in this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  putShort(value: number): ByteBuffer;
  /**
   * Absolute get method for reading a short value.
   *
   *  Reads two bytes at the given index, composing them into a
   * short value according to the current byte order.  
   *
   * @param  index
   *         The index from which the bytes will be read
   *
   * @return  The short value at the given index
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit,
   *          minus one
  */
  getShort(index: number): number;
  /**
   * Absolute put method for writing a short
   * value  (optional operation).
   *
   *  Writes two bytes containing the given short value, in the
   * current byte order, into this buffer at the given index.  
   *
   * @param  index
   *         The index at which the bytes will be written
   *
   * @param  value
   *         The short value to be written
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit,
   *          minus one
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  putShort(index: number, value: number): ByteBuffer;
  /**
   * Creates a view of this byte buffer as a short buffer.
   *
   *  The content of the new buffer will start at this buffer's current
   * position.  Changes to this buffer's content will be visible in the new
   * buffer, and vice versa; the two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be the number of bytes remaining in this buffer divided by
   * two, its mark will be undefined, and its byte order will be that
   * of the byte buffer at the moment the view is created.  The new buffer
   * will be direct if, and only if, this buffer is direct, and it will be
   * read-only if, and only if, this buffer is read-only.  
   *
   * @return  A new short buffer
  */
  asShortBuffer(): ShortBuffer;
  /**
   * Relative get method for reading an int value.
   *
   *  Reads the next four bytes at this buffer's current position,
   * composing them into an int value according to the current byte order,
   * and then increments the position by four.  
   *
   * @return  The int value at the buffer's current position
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than four bytes
   *          remaining in this buffer
  */
  getInt(): number;
  /**
   * Relative put method for writing an int
   * value  (optional operation).
   *
   *  Writes four bytes containing the given int value, in the
   * current byte order, into this buffer at the current position, and then
   * increments the position by four.  
   *
   * @param  value
   *         The int value to be written
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there are fewer than four bytes
   *          remaining in this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  putInt(value: number): ByteBuffer;
  /**
   * Absolute get method for reading an int value.
   *
   *  Reads four bytes at the given index, composing them into a
   * int value according to the current byte order.  
   *
   * @param  index
   *         The index from which the bytes will be read
   *
   * @return  The int value at the given index
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit,
   *          minus three
  */
  getInt(index: number): number;
  /**
   * Absolute put method for writing an int
   * value  (optional operation).
   *
   *  Writes four bytes containing the given int value, in the
   * current byte order, into this buffer at the given index.  
   *
   * @param  index
   *         The index at which the bytes will be written
   *
   * @param  value
   *         The int value to be written
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit,
   *          minus three
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  putInt(index: number, value: number): ByteBuffer;
  /**
   * Creates a view of this byte buffer as an int buffer.
   *
   *  The content of the new buffer will start at this buffer's current
   * position.  Changes to this buffer's content will be visible in the new
   * buffer, and vice versa; the two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be the number of bytes remaining in this buffer divided by
   * four, its mark will be undefined, and its byte order will be that
   * of the byte buffer at the moment the view is created.  The new buffer
   * will be direct if, and only if, this buffer is direct, and it will be
   * read-only if, and only if, this buffer is read-only.  
   *
   * @return  A new int buffer
  */
  asIntBuffer(): IntBuffer;
  /**
   * Relative get method for reading a long value.
   *
   *  Reads the next eight bytes at this buffer's current position,
   * composing them into a long value according to the current byte order,
   * and then increments the position by eight.  
   *
   * @return  The long value at the buffer's current position
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than eight bytes
   *          remaining in this buffer
  */
  getLong(): number;
  /**
   * Relative put method for writing a long
   * value  (optional operation).
   *
   *  Writes eight bytes containing the given long value, in the
   * current byte order, into this buffer at the current position, and then
   * increments the position by eight.  
   *
   * @param  value
   *         The long value to be written
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there are fewer than eight bytes
   *          remaining in this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  putLong(value: number): ByteBuffer;
  /**
   * Absolute get method for reading a long value.
   *
   *  Reads eight bytes at the given index, composing them into a
   * long value according to the current byte order.  
   *
   * @param  index
   *         The index from which the bytes will be read
   *
   * @return  The long value at the given index
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit,
   *          minus seven
  */
  getLong(index: number): number;
  /**
   * Absolute put method for writing a long
   * value  (optional operation).
   *
   *  Writes eight bytes containing the given long value, in the
   * current byte order, into this buffer at the given index.  
   *
   * @param  index
   *         The index at which the bytes will be written
   *
   * @param  value
   *         The long value to be written
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit,
   *          minus seven
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  putLong(index: number, value: number): ByteBuffer;
  /**
   * Creates a view of this byte buffer as a long buffer.
   *
   *  The content of the new buffer will start at this buffer's current
   * position.  Changes to this buffer's content will be visible in the new
   * buffer, and vice versa; the two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be the number of bytes remaining in this buffer divided by
   * eight, its mark will be undefined, and its byte order will be that
   * of the byte buffer at the moment the view is created.  The new buffer
   * will be direct if, and only if, this buffer is direct, and it will be
   * read-only if, and only if, this buffer is read-only.  
   *
   * @return  A new long buffer
  */
  asLongBuffer(): LongBuffer;
  /**
   * Relative get method for reading a float value.
   *
   *  Reads the next four bytes at this buffer's current position,
   * composing them into a float value according to the current byte order,
   * and then increments the position by four.  
   *
   * @return  The float value at the buffer's current position
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than four bytes
   *          remaining in this buffer
  */
  getFloat(): number;
  /**
   * Relative put method for writing a float
   * value  (optional operation).
   *
   *  Writes four bytes containing the given float value, in the
   * current byte order, into this buffer at the current position, and then
   * increments the position by four.  
   *
   * @param  value
   *         The float value to be written
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there are fewer than four bytes
   *          remaining in this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  putFloat(value: number): ByteBuffer;
  /**
   * Absolute get method for reading a float value.
   *
   *  Reads four bytes at the given index, composing them into a
   * float value according to the current byte order.  
   *
   * @param  index
   *         The index from which the bytes will be read
   *
   * @return  The float value at the given index
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit,
   *          minus three
  */
  getFloat(index: number): number;
  /**
   * Absolute put method for writing a float
   * value  (optional operation).
   *
   *  Writes four bytes containing the given float value, in the
   * current byte order, into this buffer at the given index.  
   *
   * @param  index
   *         The index at which the bytes will be written
   *
   * @param  value
   *         The float value to be written
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit,
   *          minus three
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  putFloat(index: number, value: number): ByteBuffer;
  /**
   * Creates a view of this byte buffer as a float buffer.
   *
   *  The content of the new buffer will start at this buffer's current
   * position.  Changes to this buffer's content will be visible in the new
   * buffer, and vice versa; the two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be the number of bytes remaining in this buffer divided by
   * four, its mark will be undefined, and its byte order will be that
   * of the byte buffer at the moment the view is created.  The new buffer
   * will be direct if, and only if, this buffer is direct, and it will be
   * read-only if, and only if, this buffer is read-only.  
   *
   * @return  A new float buffer
  */
  asFloatBuffer(): FloatBuffer;
  /**
   * Relative get method for reading a double value.
   *
   *  Reads the next eight bytes at this buffer's current position,
   * composing them into a double value according to the current byte order,
   * and then increments the position by eight.  
   *
   * @return  The double value at the buffer's current position
   *
   * @throws  BufferUnderflowException
   *          If there are fewer than eight bytes
   *          remaining in this buffer
  */
  getDouble(): number;
  /**
   * Relative put method for writing a double
   * value  (optional operation).
   *
   *  Writes eight bytes containing the given double value, in the
   * current byte order, into this buffer at the current position, and then
   * increments the position by eight.  
   *
   * @param  value
   *         The double value to be written
   *
   * @return  This buffer
   *
   * @throws  BufferOverflowException
   *          If there are fewer than eight bytes
   *          remaining in this buffer
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  putDouble(value: number): ByteBuffer;
  /**
   * Absolute get method for reading a double value.
   *
   *  Reads eight bytes at the given index, composing them into a
   * double value according to the current byte order.  
   *
   * @param  index
   *         The index from which the bytes will be read
   *
   * @return  The double value at the given index
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit,
   *          minus seven
  */
  getDouble(index: number): number;
  /**
   * Absolute put method for writing a double
   * value  (optional operation).
   *
   *  Writes eight bytes containing the given double value, in the
   * current byte order, into this buffer at the given index.  
   *
   * @param  index
   *         The index at which the bytes will be written
   *
   * @param  value
   *         The double value to be written
   *
   * @return  This buffer
   *
   * @throws  IndexOutOfBoundsException
   *          If `index` is negative
   *          or not smaller than the buffer's limit,
   *          minus seven
   *
   * @throws  ReadOnlyBufferException
   *          If this buffer is read-only
  */
  putDouble(index: number, value: number): ByteBuffer;
  /**
   * Creates a view of this byte buffer as a double buffer.
   *
   *  The content of the new buffer will start at this buffer's current
   * position.  Changes to this buffer's content will be visible in the new
   * buffer, and vice versa; the two buffers' position, limit, and mark
   * values will be independent.
   *
   *  The new buffer's position will be zero, its capacity and its limit
   * will be the number of bytes remaining in this buffer divided by
   * eight, its mark will be undefined, and its byte order will be that
   * of the byte buffer at the moment the view is created.  The new buffer
   * will be direct if, and only if, this buffer is direct, and it will be
   * read-only if, and only if, this buffer is read-only.  
   *
   * @return  A new double buffer
  */
  asDoubleBuffer(): DoubleBuffer;
  /**
   * Returns this buffer's position.
   *
   * @return  The position of this buffer
  */
  position(): number;
  /**
   * Returns this buffer's limit.
   *
   * @return  The limit of this buffer
  */
  limit(): number;
  /**
   * Tells whether or not this buffer is read-only.
   *
   * @return  `true` if, and only if, this buffer is read-only
  */
  isReadOnly(): boolean;
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
export interface ByteBuffer extends Buffer, Comparable<ByteBuffer> {}
export class MappedByteBuffer extends ByteBuffer {
  /**
   * Tells whether or not this buffer's content is resident in physical
   * memory.
   *
   *  A return value of `true` implies that it is highly likely
   * that all of the data in this buffer is resident in physical memory and
   * may therefore be accessed without incurring any virtual-memory page
   * faults or I/O operations.  A return value of `false` does not
   * necessarily imply that the buffer's content is not resident in physical
   * memory.
   *
   *  The returned value is a hint, rather than a guarantee, because the
   * underlying operating system may have paged out some of the buffer's data
   * by the time that an invocation of this method returns.  
   *
   * @return  `true` if it is likely that this buffer's content
   *          is resident in physical memory
  */
  isLoaded(): boolean;
  /**
   * Loads this buffer's content into physical memory.
   *
   *  This method makes a best effort to ensure that, when it returns,
   * this buffer's content is resident in physical memory.  Invoking this
   * method may cause some number of page faults and I/O operations to
   * occur. 
   *
   * @return  This buffer
  */
  load(): MappedByteBuffer;
  /**
   * Forces any changes made to this buffer's content to be written to the
   * storage device containing the mapped file.
   *
   *  If the file mapped into this buffer resides on a local storage
   * device then when this method returns it is guaranteed that all changes
   * made to the buffer since it was created, or since this method was last
   * invoked, will have been written to that device.
   *
   *  If the file does not reside on a local device then no such guarantee
   * is made.
   *
   *  If this buffer was not mapped in read/write mode ({@link
   * java.nio.channels.FileChannel.MapMode#READ_WRITE}) then
   * invoking this method may have no effect. In particular, the
   * method has no effect for buffers mapped in read-only or private
   * mapping modes. This method may or may not have an effect for
   * implementation-specific mapping modes. 
   *
   * @return  This buffer
  */
  force(): MappedByteBuffer;
  /**
   * Forces any changes made to a region of this buffer's content to
   * be written to the storage device containing the mapped
   * file. The region starts at the given `index` in this
   * buffer and is `length` bytes.
   *
   *  If the file mapped into this buffer resides on a local
   * storage device then when this method returns it is guaranteed
   * that all changes made to the selected region buffer since it
   * was created, or since this method was last invoked, will have
   * been written to that device. The force operation is free to
   * write bytes that lie outside the specified region, for example
   * to ensure that data blocks of some device-specific granularity
   * are transferred in their entirety.
   *
   *  If the file does not reside on a local device then no such
   * guarantee is made.
   *
   *  If this buffer was not mapped in read/write mode ({@link
   * java.nio.channels.FileChannel.MapMode#READ_WRITE}) then
   * invoking this method may have no effect. In particular, the
   * method has no effect for buffers mapped in read-only or private
   * mapping modes. This method may or may not have an effect for
   * implementation-specific mapping modes. 
   *
   * @param  index
   *         The index of the first byte in the buffer region that is
   *         to be written back to storage; must be non-negative
   *         and less than limit()
   *
   * @param  length
   *         The length of the region in bytes; must be non-negative
   *         and no larger than limit() - index
   *
   * @throws IndexOutOfBoundsException
   *         if the preconditions on the index and length do not
   *         hold.
   *
   * @return  This buffer
   *
   * @since 13
  */
  force(index: number, length: number): MappedByteBuffer;
  /**
   * {@inheritDoc}
  */
  position(newPosition: number): MappedByteBuffer;
  /**
   * {@inheritDoc}
  */
  limit(newLimit: number): MappedByteBuffer;
  /**
   * {@inheritDoc}
  */
  mark(): MappedByteBuffer;
  /**
   * {@inheritDoc}
  */
  reset(): MappedByteBuffer;
  /**
   * {@inheritDoc}
  */
  clear(): MappedByteBuffer;
  /**
   * {@inheritDoc}
  */
  flip(): MappedByteBuffer;
  /**
   * {@inheritDoc}
  */
  rewind(): MappedByteBuffer;
  /**
   * Returns this buffer's position.
   *
   * @return  The position of this buffer
  */
  position(): number;
  /**
   * Returns this buffer's limit.
   *
   * @return  The limit of this buffer
  */
  limit(): number;
}

}
declare module 'java.nio.file' {
import { BasicPermission } from 'java.security';
import { ConcurrentModificationException, Set, Iterator, List, Map } from 'java.util';
import { TimeUnit } from 'java.util.concurrent';
import { Stream } from 'java.util.stream';
import { Kind, Modifier } from 'java.nio.file.WatchEvent';
import { SeekableByteChannel } from 'java.nio.channels';
import { Charset } from 'java.nio.charset';
import { FileSystemProvider } from 'java.nio.file.spi';
import { Filter } from 'java.nio.file.DirectoryStream';
import { Enum, IllegalStateException, Comparable, RuntimeException, Iterable, CharSequence, ClassLoader, Class, IllegalArgumentException, UnsupportedOperationException } from 'java.lang';
import { URI } from 'java.net';
import { InputStream, OutputStream, Closeable, BufferedReader, IOException, File, BufferedWriter } from 'java.io';
import { BiPredicate } from 'java.util.function';
import { UserPrincipalLookupService, FileTime, PosixFilePermission, FileAttributeView, UserPrincipal, BasicFileAttributes, FileAttribute } from 'java.nio.file.attribute';
export class Path extends Comparable<Path> {
  /**
   * Returns a `Path` by converting a path string, or a sequence of
   * strings that when joined form a path string. If `more` does not
   * specify any elements then the value of the `first` parameter is
   * the path string to convert. If `more` specifies one or more
   * elements then each non-empty string, including `first`, is
   * considered to be a sequence of name elements and is joined to form a
   * path string. The details as to how the Strings are joined is provider
   * specific but typically they will be joined using the
   * {@link FileSystem#getSeparator name-separator} as the separator.
   * For example, if the name separator is "`/`" and
   * `getPath("/foo","bar","gus")` is invoked, then the path string
   * `"/foo/bar/gus"` is converted to a `Path`. A `Path`
   * representing an empty path is returned if `first` is the empty
   * string and `more` does not contain any non-empty strings.
   *
   *  The `Path` is obtained by invoking the {@link FileSystem#getPath
   * getPath} method of the {@link FileSystems#getDefault default} {@link
   * FileSystem}.
   *
   *  Note that while this method is very convenient, using it will imply
   * an assumed reference to the default `FileSystem` and limit the
   * utility of the calling code. Hence it should not be used in library code
   * intended for flexible reuse. A more flexible alternative is to use an
   * existing `Path` instance as an anchor, such as:
   * {@code
   *     Path dir = ...
   *     Path path = dir.resolve("file");
   * }
   *
   * @param   first
   *          the path string or initial part of the path string
   * @param   more
   *          additional strings to be joined to form the path string
   *
   * @return  the resulting `Path`
   *
   * @throws  InvalidPathException
   *          if the path string cannot be converted to a `Path`
   *
   * @see FileSystem#getPath
   *
   * @since 11
  */
  static of(first: string, ...more: string[]): Path;
  /**
   * Returns a `Path` by converting a URI.
   *
   *  This method iterates over the {@link FileSystemProvider#installedProviders()
   * installed} providers to locate the provider that is identified by the
   * URI {@link URI#getScheme scheme} of the given URI. URI schemes are
   * compared without regard to case. If the provider is found then its {@link
   * FileSystemProvider#getPath getPath} method is invoked to convert the
   * URI.
   *
   *  In the case of the default provider, identified by the URI scheme
   * "file", the given URI has a non-empty path component, and undefined query
   * and fragment components. Whether the authority component may be present
   * is platform specific. The returned `Path` is associated with the
   * {@link FileSystems#getDefault default} file system.
   *
   *  The default provider provides a similar round-trip guarantee
   * to the {@link java.io.File} class. For a given `Path` p it
   * is guaranteed that
   * `     * Path.of(`p`.`{@link Path#toUri() toUri}`()).equals(`
   * p`.`{@link Path#toAbsolutePath() toAbsolutePath}`())`
   * 
   * so long as the original `Path`, the `URI`, and the new `     * Path` are all created in (possibly different invocations of) the same
   * Java virtual machine. Whether other providers make any guarantees is
   * provider specific and therefore unspecified.
   *
   * @param   uri
   *          the URI to convert
   *
   * @return  the resulting `Path`
   *
   * @throws  IllegalArgumentException
   *          if preconditions on the `uri` parameter do not hold. The
   *          format of the URI is provider specific.
   * @throws  FileSystemNotFoundException
   *          The file system, identified by the URI, does not exist and
   *          cannot be created automatically, or the provider identified by
   *          the URI's scheme component is not installed
   * @throws  SecurityException
   *          if a security manager is installed and it denies an unspecified
   *          permission to access the file system
   *
   * @since 11
  */
  static of(uri: URI): Path;
  /**
   * Returns the file system that created this object.
   *
   * @return  the file system that created this object
  */
  getFileSystem(): FileSystem;
  /**
   * Tells whether or not this path is absolute.
   *
   *  An absolute path is complete in that it doesn't need to be combined
   * with other path information in order to locate a file.
   *
   * @return  `true` if, and only if, this path is absolute
  */
  isAbsolute(): boolean;
  /**
   * Returns the root component of this path as a `Path` object,
   * or `null` if this path does not have a root component.
   *
   * @return  a path representing the root component of this path,
   *          or `null`
  */
  getRoot(): Path;
  /**
   * Returns the name of the file or directory denoted by this path as a
   * `Path` object. The file name is the farthest element from
   * the root in the directory hierarchy.
   *
   * @return  a path representing the name of the file or directory, or
   *          `null` if this path has zero elements
  */
  getFileName(): Path;
  /**
   * Returns the parent path, or `null` if this path does not
   * have a parent.
   *
   *  The parent of this path object consists of this path's root
   * component, if any, and each element in the path except for the
   * farthest from the root in the directory hierarchy. This method
   * does not access the file system; the path or its parent may not exist.
   * Furthermore, this method does not eliminate special names such as "."
   * and ".." that may be used in some implementations. On UNIX for example,
   * the parent of "`/a/b/c`" is "`/a/b`", and the parent of
   * `"x/y/.`" is "`x/y`". This method may be used with the {@link
   * #normalize normalize} method, to eliminate redundant names, for cases where
   * shell-like navigation is required.
   *
   *  If this path has more than one element, and no root component, then
   * this method is equivalent to evaluating the expression:
   *      * subpath(0, getNameCount()-1);
   * 
   *
   * @return  a path representing the path's parent
  */
  getParent(): Path;
  /**
   * Returns the number of name elements in the path.
   *
   * @return  the number of elements in the path, or `0` if this path
   *          only represents a root component
  */
  getNameCount(): number;
  /**
   * Returns a name element of this path as a `Path` object.
   *
   *  The `index` parameter is the index of the name element to return.
   * The element that is closest to the root in the directory hierarchy
   * has index `0`. The element that is farthest from the root
   * has index {@link #getNameCount count}`-1`.
   *
   * @param   index
   *          the index of the element
   *
   * @return  the name element
   *
   * @throws  IllegalArgumentException
   *          if `index` is negative, `index` is greater than or
   *          equal to the number of elements, or this path has zero name
   *          elements
  */
  getName(index: number): Path;
  /**
   * Returns a relative `Path` that is a subsequence of the name
   * elements of this path.
   *
   *  The `beginIndex` and `endIndex` parameters specify the
   * subsequence of name elements. The name that is closest to the root
   * in the directory hierarchy has index `0`. The name that is
   * farthest from the root has index {@link #getNameCount
   * count}`-1`. The returned `Path` object has the name elements
   * that begin at `beginIndex` and extend to the element at index `     * endIndex-1`.
   *
   * @param   beginIndex
   *          the index of the first element, inclusive
   * @param   endIndex
   *          the index of the last element, exclusive
   *
   * @return  a new `Path` object that is a subsequence of the name
   *          elements in this `Path`
   *
   * @throws  IllegalArgumentException
   *          if `beginIndex` is negative, or greater than or equal to
   *          the number of elements. If `endIndex` is less than or
   *          equal to `beginIndex`, or larger than the number of elements.
  */
  subpath(beginIndex: number, endIndex: number): Path;
  /**
   * Tests if this path starts with the given path.
   *
   *  This path starts with the given path if this path's root
   * component starts with the root component of the given path,
   * and this path starts with the same name elements as the given path.
   * If the given path has more name elements than this path then `false`
   * is returned.
   *
   *  Whether or not the root component of this path starts with the root
   * component of the given path is file system specific. If this path does
   * not have a root component and the given path has a root component then
   * this path does not start with the given path.
   *
   *  If the given path is associated with a different `FileSystem`
   * to this path then `false` is returned.
   *
   * @param   other
   *          the given path
   *
   * @return  `true` if this path starts with the given path; otherwise
   *          `false`
  */
  startsWith(other: Path): boolean;
  /**
   * Tests if this path starts with a `Path`, constructed by converting
   * the given path string, in exactly the manner specified by the {@link
   * #startsWith(Path) startsWith(Path)} method. On UNIX for example, the path
   * "`foo/bar`" starts with "`foo`" and "`foo/bar`". It
   * does not start with "`f`" or "`fo`".
   *
   * @implSpec
   * The default implementation is equivalent for this path to:
   * {@code
   *     startsWith(getFileSystem().getPath(other));
   * }
   *
   * @param   other
   *          the given path string
   *
   * @return  `true` if this path starts with the given path; otherwise
   *          `false`
   *
   * @throws  InvalidPathException
   *          If the path string cannot be converted to a Path.
  */
  startsWith(other: string): boolean;
  /**
   * Tests if this path ends with the given path.
   *
   *  If the given path has N elements, and no root component,
   * and this path has N or more elements, then this path ends with
   * the given path if the last N elements of each path, starting at
   * the element farthest from the root, are equal.
   *
   *  If the given path has a root component then this path ends with the
   * given path if the root component of this path ends with the root
   * component of the given path, and the corresponding elements of both paths
   * are equal. Whether or not the root component of this path ends with the
   * root component of the given path is file system specific. If this path
   * does not have a root component and the given path has a root component
   * then this path does not end with the given path.
   *
   *  If the given path is associated with a different `FileSystem`
   * to this path then `false` is returned.
   *
   * @param   other
   *          the given path
   *
   * @return  `true` if this path ends with the given path; otherwise
   *          `false`
  */
  endsWith(other: Path): boolean;
  /**
   * Tests if this path ends with a `Path`, constructed by converting
   * the given path string, in exactly the manner specified by the {@link
   * #endsWith(Path) endsWith(Path)} method. On UNIX for example, the path
   * "`foo/bar`" ends with "`foo/bar`" and "`bar`". It does
   * not end with "`r`" or "`/bar`". Note that trailing separators
   * are not taken into account, and so invoking this method on the `     * Path`"`foo/bar`" with the `String` "`bar/`" returns
   * `true`.
   *
   * @implSpec
   * The default implementation is equivalent for this path to:
   * {@code
   *     endsWith(getFileSystem().getPath(other));
   * }
   *
   * @param   other
   *          the given path string
   *
   * @return  `true` if this path ends with the given path; otherwise
   *          `false`
   *
   * @throws  InvalidPathException
   *          If the path string cannot be converted to a Path.
  */
  endsWith(other: string): boolean;
  /**
   * Returns a path that is this path with redundant name elements eliminated.
   *
   *  The precise definition of this method is implementation dependent but
   * in general it derives from this path, a path that does not contain
   * redundant name elements. In many file systems, the "`.`"
   * and "`..`" are special names used to indicate the current directory
   * and parent directory. In such file systems all occurrences of "`.`"
   * are considered redundant. If a "`..`" is preceded by a
   * non-"`..`" name then both names are considered redundant (the
   * process to identify such names is repeated until it is no longer
   * applicable).
   *
   *  This method does not access the file system; the path may not locate
   * a file that exists. Eliminating "`..`" and a preceding name from a
   * path may result in the path that locates a different file than the original
   * path. This can arise when the preceding name is a symbolic link.
   *
   * @return  the resulting path or this path if it does not contain
   *          redundant name elements; an empty path is returned if this path
   *          does not have a root component and all name elements are redundant
   *
   * @see #getParent
   * @see #toRealPath
  */
  normalize(): Path;
  /**
   * Resolve the given path against this path.
   *
   *  If the `other` parameter is an {@link #isAbsolute() absolute}
   * path then this method trivially returns `other`. If `other`
   * is an empty path then this method trivially returns this path.
   * Otherwise this method considers this path to be a directory and resolves
   * the given path against this path. In the simplest case, the given path
   * does not have a {@link #getRoot root} component, in which case this method
   * joins the given path to this path and returns a resulting path
   * that {@link #endsWith ends} with the given path. Where the given path has
   * a root component then resolution is highly implementation dependent and
   * therefore unspecified.
   *
   * @param   other
   *          the path to resolve against this path
   *
   * @return  the resulting path
   *
   * @see #relativize
  */
  resolve(other: Path): Path;
  /**
   * Converts a given path string to a `Path` and resolves it against
   * this `Path` in exactly the manner specified by the {@link
   * #resolve(Path) resolve} method. For example, suppose that the name
   * separator is "`/`" and a path represents "`foo/bar`", then
   * invoking this method with the path string "`gus`" will result in
   * the `Path` "`foo/bar/gus`".
   *
   * @implSpec
   * The default implementation is equivalent for this path to:
   * {@code
   *     resolve(getFileSystem().getPath(other));
   * }
   *
   * @param   other
   *          the path string to resolve against this path
   *
   * @return  the resulting path
   *
   * @throws  InvalidPathException
   *          if the path string cannot be converted to a Path.
   *
   * @see FileSystem#getPath
  */
  resolve(other: string): Path;
  /**
   * Resolves the given path against this path's {@link #getParent parent}
   * path. This is useful where a file name needs to be replaced with
   * another file name. For example, suppose that the name separator is
   * "`/`" and a path represents "`dir1/dir2/foo`", then invoking
   * this method with the `Path` "`bar`" will result in the `     * Path` "`dir1/dir2/bar`". If this path does not have a parent path,
   * or `other` is {@link #isAbsolute() absolute}, then this method
   * returns `other`. If `other` is an empty path then this method
   * returns this path's parent, or where this path doesn't have a parent, the
   * empty path.
   *
   * @implSpec
   * The default implementation is equivalent for this path to:
   * {@code
   *     (getParent() == null) ? other : getParent().resolve(other);
   * }
   * unless `other == null`, in which case a
   * `NullPointerException` is thrown.
   *
   * @param   other
   *          the path to resolve against this path's parent
   *
   * @return  the resulting path
   *
   * @see #resolve(Path)
  */
  resolveSibling(other: Path): Path;
  /**
   * Converts a given path string to a `Path` and resolves it against
   * this path's {@link #getParent parent} path in exactly the manner
   * specified by the {@link #resolveSibling(Path) resolveSibling} method.
   *
   * @implSpec
   * The default implementation is equivalent for this path to:
   * {@code
   *     resolveSibling(getFileSystem().getPath(other));
   * }
   *
   * @param   other
   *          the path string to resolve against this path's parent
   *
   * @return  the resulting path
   *
   * @throws  InvalidPathException
   *          if the path string cannot be converted to a Path.
   *
   * @see FileSystem#getPath
  */
  resolveSibling(other: string): Path;
  /**
   * Constructs a relative path between this path and a given path.
   *
   *  Relativization is the inverse of {@link #resolve(Path) resolution}.
   * This method attempts to construct a {@link #isAbsolute relative} path
   * that when {@link #resolve(Path) resolved} against this path, yields a
   * path that locates the same file as the given path. For example, on UNIX,
   * if this path is `"/a/b"` and the given path is `"/a/b/c/d"`
   * then the resulting relative path would be `"c/d"`. Where this
   * path and the given path do not have a {@link #getRoot root} component,
   * then a relative path can be constructed. A relative path cannot be
   * constructed if only one of the paths have a root component. Where both
   * paths have a root component then it is implementation dependent if a
   * relative path can be constructed. If this path and the given path are
   * {@link #equals equal} then an empty path is returned.
   *
   *  For any two {@link #normalize normalized} paths p and
   * q, where q does not have a root component,
   * 
   *   p`.relativize(`p
   *   `.resolve(`q`)).equals(`q`)`
   * 
   *
   *  When symbolic links are supported, then whether the resulting path,
   * when resolved against this path, yields a path that can be used to locate
   * the {@link Files#isSameFile same} file as `other` is implementation
   * dependent. For example, if this path is  `"/a/b"` and the given
   * path is `"/a/x"` then the resulting relative path may be `     * "../x"`. If `"b"` is a symbolic link then is implementation
   * dependent if `"a/b/../x"` would locate the same file as `"/a/x"`.
   *
   * @param   other
   *          the path to relativize against this path
   *
   * @return  the resulting relative path, or an empty path if both paths are
   *          equal
   *
   * @throws  IllegalArgumentException
   *          if `other` is not a `Path` that can be relativized
   *          against this path
  */
  relativize(other: Path): Path;
  /**
   * Returns a URI to represent this path.
   *
   *  This method constructs an absolute {@link URI} with a {@link
   * URI#getScheme() scheme} equal to the URI scheme that identifies the
   * provider. The exact form of the scheme specific part is highly provider
   * dependent.
   *
   *  In the case of the default provider, the URI is hierarchical with
   * a {@link URI#getPath() path} component that is absolute. The query and
   * fragment components are undefined. Whether the authority component is
   * defined or not is implementation dependent. There is no guarantee that
   * the `URI` may be used to construct a {@link java.io.File java.io.File}.
   * In particular, if this path represents a Universal Naming Convention (UNC)
   * path, then the UNC server name may be encoded in the authority component
   * of the resulting URI. In the case of the default provider, and the file
   * exists, and it can be determined that the file is a directory, then the
   * resulting `URI` will end with a slash.
   *
   *  The default provider provides a similar round-trip guarantee
   * to the {@link java.io.File} class. For a given `Path` p it
   * is guaranteed that
   * 
   * {@link Path#of(URI) Path.of}`(`p`.toUri()).equals(`p
   * `.`{@link #toAbsolutePath() toAbsolutePath}`())`
   * 
   * so long as the original `Path`, the `URI`, and the new `     * Path` are all created in (possibly different invocations of) the same
   * Java virtual machine. Whether other providers make any guarantees is
   * provider specific and therefore unspecified.
   *
   *  When a file system is constructed to access the contents of a file
   * as a file system then it is highly implementation specific if the returned
   * URI represents the given path in the file system or it represents a
   * compound URI that encodes the URI of the enclosing file system.
   * A format for compound URIs is not defined in this release; such a scheme
   * may be added in a future release.
   *
   * @return  the URI representing this path
   *
   * @throws  java.io.IOError
   *          if an I/O error occurs obtaining the absolute path, or where a
   *          file system is constructed to access the contents of a file as
   *          a file system, and the URI of the enclosing file system cannot be
   *          obtained
   *
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager
   *          is installed, the {@link #toAbsolutePath toAbsolutePath} method
   *          throws a security exception.
  */
  toUri(): URI;
  /**
   * Returns a `Path` object representing the absolute path of this
   * path.
   *
   *  If this path is already {@link Path#isAbsolute absolute} then this
   * method simply returns this path. Otherwise, this method resolves the path
   * in an implementation dependent manner, typically by resolving the path
   * against a file system default directory. Depending on the implementation,
   * this method may throw an I/O error if the file system is not accessible.
   *
   * @return  a `Path` object representing the absolute path
   *
   * @throws  java.io.IOError
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, a security manager
   *          is installed, and this path is not absolute, then the security
   *          manager's {@link SecurityManager#checkPropertyAccess(String)
   *          checkPropertyAccess} method is invoked to check access to the
   *          system property `user.dir`
  */
  toAbsolutePath(): Path;
  /**
   * Returns the real path of an existing file.
   *
   *  The precise definition of this method is implementation dependent but
   * in general it derives from this path, an {@link #isAbsolute absolute}
   * path that locates the {@link Files#isSameFile same} file as this path, but
   * with name elements that represent the actual name of the directories
   * and the file. For example, where filename comparisons on a file system
   * are case insensitive then the name elements represent the names in their
   * actual case. Additionally, the resulting path has redundant name
   * elements removed.
   *
   *  If this path is relative then its absolute path is first obtained,
   * as if by invoking the {@link #toAbsolutePath toAbsolutePath} method.
   *
   *  The `options` array may be used to indicate how symbolic links
   * are handled. By default, symbolic links are resolved to their final
   * target. If the option {@link LinkOption#NOFOLLOW_LINKS NOFOLLOW_LINKS} is
   * present then this method does not resolve symbolic links.
   *
   * Some implementations allow special names such as "`..`" to refer to
   * the parent directory. When deriving the real path, and a
   * "`..`" (or equivalent) is preceded by a non-"`..`" name then
   * an implementation will typically cause both names to be removed. When
   * not resolving symbolic links and the preceding name is a symbolic link
   * then the names are only removed if it guaranteed that the resulting path
   * will locate the same file as this path.
   *
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  an absolute path represent the real path of the file
   *          located by this object
   *
   * @throws  IOException
   *          if the file does not exist or an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager
   *          is installed, its {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file, and where
   *          this path is not absolute, its {@link SecurityManager#checkPropertyAccess(String)
   *          checkPropertyAccess} method is invoked to check access to the
   *          system property `user.dir`
  */
  toRealPath(...options: LinkOption[]): Path;
  /**
   * Returns a {@link File} object representing this path. Where this `     * Path` is associated with the default provider, then this method is
   * equivalent to returning a `File` object constructed with the
   * `String` representation of this path.
   *
   *  If this path was created by invoking the `File` {@link
   * File#toPath toPath} method then there is no guarantee that the `     * File` object returned by this method is {@link #equals equal} to the
   * original `File`.
   *
   * @implSpec
   * The default implementation is equivalent for this path to:
   * {@code
   *     new File(toString());
   * }
   * if the `FileSystem` which created this `Path` is the default
   * file system; otherwise an `UnsupportedOperationException` is
   * thrown.
   *
   * @return  a `File` object representing this path
   *
   * @throws  UnsupportedOperationException
   *          if this `Path` is not associated with the default provider
  */
  toFile(): File;
  /**
   * Registers the file located by this path with a watch service.
   *
   *  In this release, this path locates a directory that exists. The
   * directory is registered with the watch service so that entries in the
   * directory can be watched. The `events` parameter is the events to
   * register and may contain the following events:
   * 
   *   {@link StandardWatchEventKinds#ENTRY_CREATE ENTRY_CREATE} -
   *       entry created or moved into the directory
   *   {@link StandardWatchEventKinds#ENTRY_DELETE ENTRY_DELETE} -
   *        entry deleted or moved out of the directory
   *   {@link StandardWatchEventKinds#ENTRY_MODIFY ENTRY_MODIFY} -
   *        entry in directory was modified
   * 
   *
   *  The {@link WatchEvent#context context} for these events is the
   * relative path between the directory located by this path, and the path
   * that locates the directory entry that is created, deleted, or modified.
   *
   *  The set of events may include additional implementation specific
   * event that are not defined by the enum {@link StandardWatchEventKinds}
   *
   *  The `modifiers` parameter specifies modifiers that
   * qualify how the directory is registered. This release does not define any
   * standard modifiers. It may contain implementation specific
   * modifiers.
   *
   *  Where a file is registered with a watch service by means of a symbolic
   * link then it is implementation specific if the watch continues to depend
   * on the existence of the symbolic link after it is registered.
   *
   * @param   watcher
   *          the watch service to which this object is to be registered
   * @param   events
   *          the events for which this object should be registered
   * @param   modifiers
   *          the modifiers, if any, that modify how the object is registered
   *
   * @return  a key representing the registration of this object with the
   *          given watch service
   *
   * @throws  UnsupportedOperationException
   *          if unsupported events or modifiers are specified
   * @throws  IllegalArgumentException
   *          if an invalid combination of events or modifiers is specified
   * @throws  ClosedWatchServiceException
   *          if the watch service is closed
   * @throws  NotDirectoryException
   *          if the file is registered to watch the entries in a directory
   *          and the file is not a directory  (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
  */
  register(watcher: WatchService, events: Kind[], ...modifiers: Modifier[]): WatchKey;
  /**
   * Registers the file located by this path with a watch service.
   *
   *  An invocation of this method behaves in exactly the same way as the
   * invocation
   *      *     watchable.{@link #register(WatchService,WatchEvent.Kind[],WatchEvent.Modifier[]) register}(watcher, events, new WatchEvent.Modifier[0]);
   * 
   *
   *  Usage Example:
   * Suppose we wish to register a directory for entry create, delete, and modify
   * events:
   *      *     Path dir = ...
   *     WatchService watcher = ...
   *
   *     WatchKey key = dir.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
   * 
   *
   * @implSpec
   * The default implementation is equivalent for this path to:
   * {@code
   *     register(watcher, events, new WatchEvent.Modifier[0]);
   * }
   *
   * @param   watcher
   *          The watch service to which this object is to be registered
   * @param   events
   *          The events for which this object should be registered
   *
   * @return  A key representing the registration of this object with the
   *          given watch service
   *
   * @throws  UnsupportedOperationException
   *          If unsupported events are specified
   * @throws  IllegalArgumentException
   *          If an invalid combination of events is specified
   * @throws  ClosedWatchServiceException
   *          If the watch service is closed
   * @throws  NotDirectoryException
   *          If the file is registered to watch the entries in a directory
   *          and the file is not a directory  (optional specific exception)
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
  */
  register(watcher: WatchService, ...events: Kind[]): WatchKey;
  /**
   * Returns an iterator over the name elements of this path.
   *
   *  The first element returned by the iterator represents the name
   * element that is closest to the root in the directory hierarchy, the
   * second element is the next closest, and so on. The last element returned
   * is the name of the file or directory denoted by this path. The {@link
   * #getRoot root} component, if present, is not returned by the iterator.
   *
   * @implSpec
   * The default implementation returns an `Iterator` which, for
   * this path, traverses the `Path`s returned by
   * `getName(index)`, where `index` ranges from zero to
   * `getNameCount() - 1`, inclusive.
   *
   * @return  an iterator over the name elements of this path.
  */
  iterator(): Iterator<Path>;
  /**
   * Compares two abstract paths lexicographically. The ordering defined by
   * this method is provider specific, and in the case of the default
   * provider, platform specific. This method does not access the file system
   * and neither file is required to exist.
   *
   *  This method may not be used to compare paths that are associated
   * with different file system providers.
   *
   * @param   other  the path compared to this path.
   *
   * @return  zero if the argument is {@link #equals equal} to this path, a
   *          value less than zero if this path is lexicographically less than
   *          the argument, or a value greater than zero if this path is
   *          lexicographically greater than the argument
   *
   * @throws  ClassCastException
   *          if the paths are associated with different providers
  */
  compareTo(other: Path): number;
  /**
   * Tests this path for equality with the given object.
   *
   *  If the given object is not a Path, or is a Path associated with a
   * different `FileSystem`, then this method returns `false`.
   *
   *  Whether or not two path are equal depends on the file system
   * implementation. In some cases the paths are compared without regard
   * to case, and others are case sensitive. This method does not access the
   * file system and the file is not required to exist. Where required, the
   * {@link Files#isSameFile isSameFile} method may be used to check if two
   * paths locate the same file.
   *
   *  This method satisfies the general contract of the {@link
   * java.lang.Object#equals(Object) Object.equals} method. 
   *
   * @param   other
   *          the object to which this object is to be compared
   *
   * @return  `true` if, and only if, the given object is a `Path`
   *          that is identical to this `Path`
  */
  equals(other: any): boolean;
  /**
   * Computes a hash code for this path.
   *
   *  The hash code is based upon the components of the path, and
   * satisfies the general contract of the {@link Object#hashCode
   * Object.hashCode} method.
   *
   * @return  the hash-code value for this path
  */
  hashCode(): number;
  /**
   * Returns the string representation of this path.
   *
   *  If this path was created by converting a path string using the
   * {@link FileSystem#getPath getPath} method then the path string returned
   * by this method may differ from the original String used to create the path.
   *
   *  The returned path string uses the default name {@link
   * FileSystem#getSeparator separator} to separate names in the path.
   *
   * @return  the string representation of this path
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
export interface Path extends Comparable<Path>, Iterable<Path>, Watchable {}
export class FileVisitResult extends Enum<FileVisitResult> {
  /**
   * Continue. When returned from a {@link FileVisitor#preVisitDirectory
   * preVisitDirectory} method then the entries in the directory should also
   * be visited.
  */
  static readonly CONTINUE: FileVisitResult;
  /**
   * Terminate.
  */
  static readonly TERMINATE: FileVisitResult;
  /**
   * Continue without visiting the entries in this directory. This result
   * is only meaningful when returned from the {@link
   * FileVisitor#preVisitDirectory preVisitDirectory} method; otherwise
   * this result type is the same as returning {@link #CONTINUE}.
  */
  static readonly SKIP_SUBTREE: FileVisitResult;
  /**
   * Continue without visiting the siblings of this file or directory.
   * If returned from the {@link FileVisitor#preVisitDirectory
   * preVisitDirectory} method then the entries in the directory are also
   * skipped and the {@link FileVisitor#postVisitDirectory postVisitDirectory}
   * method is not invoked.
  */
  static readonly SKIP_SIBLINGS: FileVisitResult;
  static valueOf(name: string): FileVisitResult;
  static values(): FileVisitResult[];
  /**
   * Returns the enum constant of the specified enum class with the
   * specified name.  The name must match exactly an identifier used
   * to declare an enum constant in this class.  (Extraneous whitespace
   * characters are not permitted.)
   *
   * Note that for a particular enum class `T`, the
   * implicitly declared `public static T valueOf(String)`
   * method on that enum may be used instead of this method to map
   * from a name to the corresponding enum constant.  All the
   * constants of an enum class can be obtained by calling the
   * implicit `public static T[] values()` method of that
   * class.
   *
   * @param  The enum class whose constant is to be returned
   * @param enumClass the `Class` object of the enum class from which
   *      to return a constant
   * @param name the name of the constant to return
   * @return the enum constant of the specified enum class with the
   *      specified name
   * @throws IllegalArgumentException if the specified enum class has
   *         no constant with the specified name, or the specified
   *         class object does not represent an enum class
   * @throws NullPointerException if `enumClass` or `name`
   *         is null
   * @since 1.5
  */
  static valueOf<T>(enumClass: Class<T>, name: string): T;
}
export class ClosedFileSystemException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
/**
 * Unchecked exception thrown when an attempt is made to invoke a method on an
 * object created by one file system provider with a parameter created by a
 * different file system provider.
 *
 * @since 1.7
*/
export class ProviderMismatchException extends IllegalArgumentException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
  /**
   * Constructs an instance of this class.
   *
   * @param   msg
   *          the detail message
  */
  constructor(msg: string);
}
export class FileStore {
  /**
   * Returns the name of this file store. The format of the name is highly
   * implementation specific. It will typically be the name of the storage
   * pool or volume.
   *
   *  The string returned by this method may differ from the string
   * returned by the {@link Object#toString() toString} method.
   *
   * @return  the name of this file store
  */
  name(): string;
  /**
   * Returns the type of this file store. The format of the string
   * returned by this method is highly implementation specific. It may
   * indicate, for example, the format used or if the file store is local
   * or remote.
   *
   * @return  a string representing the type of this file store
  */
  type(): string;
  /**
   * Tells whether this file store is read-only. A file store is read-only if
   * it does not support write operations or other changes to files. Any
   * attempt to create a file, open an existing file for writing etc. causes
   * an `IOException` to be thrown.
   *
   * @return  `true` if, and only if, this file store is read-only
  */
  isReadOnly(): boolean;
  /**
   * Returns the size, in bytes, of the file store. If the total number of
   * bytes in the file store is greater than {@link Long#MAX_VALUE}, then
   * `Long.MAX_VALUE` will be returned.
   *
   * @return  the size of the file store, in bytes
   *
   * @throws  IOException
   *          if an I/O error occurs
  */
  getTotalSpace(): number;
  /**
   * Returns the number of bytes available to this Java virtual machine on the
   * file store.  If the number of bytes available is greater than
   * {@link Long#MAX_VALUE}, then `Long.MAX_VALUE` will be returned.
   *
   *  The returned number of available bytes is a hint, but not a
   * guarantee, that it is possible to use most or any of these bytes.  The
   * number of usable bytes is most likely to be accurate immediately
   * after the space attributes are obtained. It is likely to be made inaccurate
   * by any external I/O operations including those made on the system outside
   * of this Java virtual machine.
   *
   * @return  the number of bytes available
   *
   * @throws  IOException
   *          if an I/O error occurs
  */
  getUsableSpace(): number;
  /**
   * Returns the number of unallocated bytes in the file store.
   * If the number of unallocated bytes is greater than
   * {@link Long#MAX_VALUE}, then `Long.MAX_VALUE` will be returned.
   *
   *  The returned number of unallocated bytes is a hint, but not a
   * guarantee, that it is possible to use most or any of these bytes.  The
   * number of unallocated bytes is most likely to be accurate immediately
   * after the space attributes are obtained. It is likely to be
   * made inaccurate by any external I/O operations including those made on
   * the system outside of this virtual machine.
   *
   * @return  the number of unallocated bytes
   *
   * @throws  IOException
   *          if an I/O error occurs
  */
  getUnallocatedSpace(): number;
  /**
   * Returns the number of bytes per block in this file store.
   *
   *  File storage is typically organized into discrete sequences of bytes
   * called blocks. A block is the smallest storage unit of a file store.
   * Every read and write operation is performed on a multiple of blocks.
   *
   * @implSpec The implementation in this class throws
   *           `UnsupportedOperationException`.
   *
   * @return  a positive value representing the block size of this file store,
   *          in bytes
   *
   * @throws  IOException
   *          if an I/O error occurs
   *
   * @throws  UnsupportedOperationException
   *          if the operation is not supported
   *
   * @since 10
  */
  getBlockSize(): number;
  /**
   * Tells whether or not this file store supports the file attributes
   * identified by the given file attribute view.
   *
   *  Invoking this method to test if the file store supports {@link
   * BasicFileAttributeView} will always return `true`. In the case of
   * the default provider, this method cannot guarantee to give the correct
   * result when the file store is not a local storage device. The reasons for
   * this are implementation specific and therefore unspecified.
   *
   * @param   type
   *          the file attribute view type
   *
   * @return  `true` if, and only if, the file attribute view is
   *          supported
  */
  supportsFileAttributeView(type: Class<FileAttributeView>): boolean;
  /**
   * Tells whether or not this file store supports the file attributes
   * identified by the given file attribute view.
   *
   *  Invoking this method to test if the file store supports {@link
   * BasicFileAttributeView}, identified by the name "`basic`" will
   * always return `true`. In the case of the default provider, this
   * method cannot guarantee to give the correct result when the file store is
   * not a local storage device. The reasons for this are implementation
   * specific and therefore unspecified.
   *
   * @param   name
   *          the {@link FileAttributeView#name name} of file attribute view
   *
   * @return  `true` if, and only if, the file attribute view is
   *          supported
  */
  supportsFileAttributeView(name: string): boolean;
  /**
   * Returns a `FileStoreAttributeView` of the given type.
   *
   *  This method is intended to be used where the file store attribute
   * view defines type-safe methods to read or update the file store attributes.
   * The `type` parameter is the type of the attribute view required and
   * the method returns an instance of that type if supported.
   *
   * @param   
   *          The `FileStoreAttributeView` type
   * @param   type
   *          the `Class` object corresponding to the attribute view
   *
   * @return  a file store attribute view of the specified type or
   *          `null` if the attribute view is not available
  */
  getFileStoreAttributeView<V>(type: Class<V>): V;
  /**
   * Reads the value of a file store attribute.
   *
   *  The `attribute` parameter identifies the attribute to be read
   * and takes the form:
   * 
   * view-name:attribute-name
   * 
   * where the character `':'` stands for itself.
   *
   *  view-name is the {@link FileStoreAttributeView#name name} of
   * a {@link FileStore AttributeView} that identifies a set of file attributes.
   * attribute-name is the name of the attribute.
   *
   *  Usage Example:
   * Suppose we want to know if ZFS compression is enabled (assuming the "zfs"
   * view is supported):
   *      *    boolean compression = (Boolean)fs.getAttribute("zfs:compression");
   * 
   *
   * @param   attribute
   *          the attribute to read
   *
   * @return  the attribute value; `null` may be valid for some
   *          attributes
   *
   * @throws  UnsupportedOperationException
   *          if the attribute view is not available or it does not support
   *          reading the attribute
   * @throws  IOException
   *          if an I/O error occurs
  */
  getAttribute(attribute: string): any;
}
export class NotDirectoryException extends FileSystemException {
  /**
   * Constructs an instance of this class.
   *
   * @param   file
   *          a string identifying the file or `null` if not known
  */
  constructor(file: string);
}
export class ProviderNotFoundException extends RuntimeException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
  /**
   * Constructs an instance of this class.
   *
   * @param   msg
   *          the detail message
  */
  constructor(msg: string);
}
export class NoSuchFileException extends FileSystemException {
  /**
   * Constructs an instance of this class.
   *
   * @param   file
   *          a string identifying the file or `null` if not known.
  */
  constructor(file: string);
  /**
   * Constructs an instance of this class.
   *
   * @param   file
   *          a string identifying the file or `null` if not known.
   * @param   other
   *          a string identifying the other file or `null` if not known.
   * @param   reason
   *          a reason message with additional information or `null`
  */
  constructor(file: string, other: string, reason: string);
}
export class FileSystemAlreadyExistsException extends RuntimeException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
  /**
   * Constructs an instance of this class.
   *
   * @param   msg
   *          the detail message
  */
  constructor(msg: string);
}
export class FileVisitOption extends Enum<FileVisitOption> {
  /**
   * Follow symbolic links.
  */
  static readonly FOLLOW_LINKS: FileVisitOption;
  static valueOf(name: string): FileVisitOption;
  static values(): FileVisitOption[];
  /**
   * Returns the enum constant of the specified enum class with the
   * specified name.  The name must match exactly an identifier used
   * to declare an enum constant in this class.  (Extraneous whitespace
   * characters are not permitted.)
   *
   * Note that for a particular enum class `T`, the
   * implicitly declared `public static T valueOf(String)`
   * method on that enum may be used instead of this method to map
   * from a name to the corresponding enum constant.  All the
   * constants of an enum class can be obtained by calling the
   * implicit `public static T[] values()` method of that
   * class.
   *
   * @param  The enum class whose constant is to be returned
   * @param enumClass the `Class` object of the enum class from which
   *      to return a constant
   * @param name the name of the constant to return
   * @return the enum constant of the specified enum class with the
   *      specified name
   * @throws IllegalArgumentException if the specified enum class has
   *         no constant with the specified name, or the specified
   *         class object does not represent an enum class
   * @throws NullPointerException if `enumClass` or `name`
   *         is null
   * @since 1.5
  */
  static valueOf<T>(enumClass: Class<T>, name: string): T;
}
export class Watchable {
  /**
   * Registers an object with a watch service.
   *
   *  If the file system object identified by this object is currently
   * registered with the watch service then the watch key, representing that
   * registration, is returned after changing the event set or modifiers to
   * those specified by the `events` and `modifiers` parameters.
   * Changing the event set does not cause pending events for the object to be
   * discarded. Objects are automatically registered for the {@link
   * StandardWatchEventKinds#OVERFLOW OVERFLOW} event. This event is not
   * required to be present in the array of events.
   *
   *  Otherwise the file system object has not yet been registered with the
   * given watch service, so it is registered and the resulting new key is
   * returned.
   *
   *  Implementations of this interface should specify the events they
   * support.
   *
   * @param   watcher
   *          the watch service to which this object is to be registered
   * @param   events
   *          the events for which this object should be registered
   * @param   modifiers
   *          the modifiers, if any, that modify how the object is registered
   *
   * @return  a key representing the registration of this object with the
   *          given watch service
   *
   * @throws  UnsupportedOperationException
   *          if unsupported events or modifiers are specified
   * @throws  IllegalArgumentException
   *          if an invalid of combination of events are modifiers are specified
   * @throws  ClosedWatchServiceException
   *          if the watch service is closed
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          if a security manager is installed and it denies an unspecified
   *          permission required to monitor this object. Implementations of
   *          this interface should specify the permission checks.
  */
  register(watcher: WatchService, events: Kind[], ...modifiers: Modifier[]): WatchKey;
  /**
   * Registers an object with a watch service.
   *
   *  An invocation of this method behaves in exactly the same way as the
   * invocation
   *      *     watchable.{@link #register(WatchService,WatchEvent.Kind[],WatchEvent.Modifier[]) register}(watcher, events, new WatchEvent.Modifier[0]);
   * 
   *
   * @param   watcher
   *          the watch service to which this object is to be registered
   * @param   events
   *          the events for which this object should be registered
   *
   * @return  a key representing the registration of this object with the
   *          given watch service
   *
   * @throws  UnsupportedOperationException
   *          if unsupported events are specified
   * @throws  IllegalArgumentException
   *          if an invalid of combination of events are specified
   * @throws  ClosedWatchServiceException
   *          if the watch service is closed
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          if a security manager is installed and it denies an unspecified
   *          permission required to monitor this object. Implementations of
   *          this interface should specify the permission checks.
  */
  register(watcher: WatchService, ...events: Kind[]): WatchKey;
}
export class NotLinkException extends FileSystemException {
  /**
   * Constructs an instance of this class.
   *
   * @param   file
   *          a string identifying the file or `null` if not known
  */
  constructor(file: string);
  /**
   * Constructs an instance of this class.
   *
   * @param   file
   *          a string identifying the file or `null` if not known
   * @param   other
   *          a string identifying the other file or `null` if not known
   * @param   reason
   *          a reason message with additional information or `null`
  */
  constructor(file: string, other: string, reason: string);
}
export class ReadOnlyFileSystemException extends UnsupportedOperationException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class StandardCopyOption extends Enum<StandardCopyOption> {
  /**
   * Replace an existing file if it exists.
  */
  static readonly REPLACE_EXISTING: StandardCopyOption;
  /**
   * Copy attributes to the new file.
  */
  static readonly COPY_ATTRIBUTES: StandardCopyOption;
  /**
   * Move the file as an atomic file system operation.
  */
  static readonly ATOMIC_MOVE: StandardCopyOption;
  static valueOf(name: string): StandardCopyOption;
  static values(): StandardCopyOption[];
  /**
   * Returns the enum constant of the specified enum class with the
   * specified name.  The name must match exactly an identifier used
   * to declare an enum constant in this class.  (Extraneous whitespace
   * characters are not permitted.)
   *
   * Note that for a particular enum class `T`, the
   * implicitly declared `public static T valueOf(String)`
   * method on that enum may be used instead of this method to map
   * from a name to the corresponding enum constant.  All the
   * constants of an enum class can be obtained by calling the
   * implicit `public static T[] values()` method of that
   * class.
   *
   * @param  The enum class whose constant is to be returned
   * @param enumClass the `Class` object of the enum class from which
   *      to return a constant
   * @param name the name of the constant to return
   * @return the enum constant of the specified enum class with the
   *      specified name
   * @throws IllegalArgumentException if the specified enum class has
   *         no constant with the specified name, or the specified
   *         class object does not represent an enum class
   * @throws NullPointerException if `enumClass` or `name`
   *         is null
   * @since 1.5
  */
  static valueOf<T>(enumClass: Class<T>, name: string): T;
}
export class Files {
  /**
   * Opens a file, returning an input stream to read from the file. The stream
   * will not be buffered, and is not required to support the {@link
   * InputStream#mark mark} or {@link InputStream#reset reset} methods. The
   * stream will be safe for access by multiple concurrent threads. Reading
   * commences at the beginning of the file. Whether the returned stream is
   * asynchronously closeable and/or interruptible is highly
   * file system provider specific and therefore not specified.
   *
   *  The `options` parameter determines how the file is opened.
   * If no options are present then it is equivalent to opening the file with
   * the {@link StandardOpenOption#READ READ} option. In addition to the `     * READ` option, an implementation may also support additional implementation
   * specific options.
   *
   * @param   path
   *          the path to the file to open
   * @param   options
   *          options specifying how the file is opened
   *
   * @return  a new input stream
   *
   * @throws  IllegalArgumentException
   *          if an invalid combination of options is specified
   * @throws  UnsupportedOperationException
   *          if an unsupported option is specified
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
  */
  static newInputStream(path: Path, ...options: OpenOption[]): InputStream;
  /**
   * Opens or creates a file, returning an output stream that may be used to
   * write bytes to the file. The resulting stream will not be buffered. The
   * stream will be safe for access by multiple concurrent threads. Whether
   * the returned stream is asynchronously closeable and/or
   * interruptible is highly file system provider specific and
   * therefore not specified.
   *
   *  This method opens or creates a file in exactly the manner specified
   * by the {@link #newByteChannel(Path,Set,FileAttribute[]) newByteChannel}
   * method with the exception that the {@link StandardOpenOption#READ READ}
   * option may not be present in the array of options. If no options are
   * present then this method works as if the {@link StandardOpenOption#CREATE
   * CREATE}, {@link StandardOpenOption#TRUNCATE_EXISTING TRUNCATE_EXISTING},
   * and {@link StandardOpenOption#WRITE WRITE} options are present. In other
   * words, it opens the file for writing, creating the file if it doesn't
   * exist, or initially truncating an existing {@link #isRegularFile
   * regular-file} to a size of `0` if it exists.
   *
   *  Usage Examples:
   *      *     Path path = ...
   *
   *     // truncate and overwrite an existing file, or create the file if
   *     // it doesn't initially exist
   *     OutputStream out = Files.newOutputStream(path);
   *
   *     // append to an existing file, fail if the file does not exist
   *     out = Files.newOutputStream(path, APPEND);
   *
   *     // append to an existing file, create file if it doesn't initially exist
   *     out = Files.newOutputStream(path, CREATE, APPEND);
   *
   *     // always create new file, failing if it already exists
   *     out = Files.newOutputStream(path, CREATE_NEW);
   * 
   *
   * @param   path
   *          the path to the file to open or create
   * @param   options
   *          options specifying how the file is opened
   *
   * @return  a new output stream
   *
   * @throws  IllegalArgumentException
   *          if `options` contains an invalid combination of options
   * @throws  UnsupportedOperationException
   *          if an unsupported option is specified
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the file. The {@link
   *          SecurityManager#checkDelete(String) checkDelete} method is
   *          invoked to check delete access if the file is opened with the
   *          `DELETE_ON_CLOSE` option.
  */
  static newOutputStream(path: Path, ...options: OpenOption[]): OutputStream;
  /**
   * Opens or creates a file, returning a seekable byte channel to access the
   * file.
   *
   *  The `options` parameter determines how the file is opened.
   * The {@link StandardOpenOption#READ READ} and {@link
   * StandardOpenOption#WRITE WRITE} options determine if the file should be
   * opened for reading and/or writing. If neither option (or the {@link
   * StandardOpenOption#APPEND APPEND} option) is present then the file is
   * opened for reading. By default reading or writing commence at the
   * beginning of the file.
   *
   *  In the addition to `READ` and `WRITE`, the following
   * options may be present:
   *
   * 
   * Options
   * 
   *  Option Description 
   * 
   * 
   * 
   *    {@link StandardOpenOption#APPEND APPEND} 
   *    If this option is present then the file is opened for writing and
   *     each invocation of the channel's `write` method first advances
   *     the position to the end of the file and then writes the requested
   *     data. Whether the advancement of the position and the writing of the
   *     data are done in a single atomic operation is system-dependent and
   *     therefore unspecified. This option may not be used in conjunction
   *     with the `READ` or `TRUNCATE_EXISTING` options. 
   * 
   * 
   *    {@link StandardOpenOption#TRUNCATE_EXISTING TRUNCATE_EXISTING} 
   *    If this option is present then the existing file is truncated to
   *   a size of 0 bytes. This option is ignored when the file is opened only
   *   for reading. 
   * 
   * 
   *    {@link StandardOpenOption#CREATE_NEW CREATE_NEW} 
   *    If this option is present then a new file is created, failing if
   *   the file already exists or is a symbolic link. When creating a file the
   *   check for the existence of the file and the creation of the file if it
   *   does not exist is atomic with respect to other file system operations.
   *   This option is ignored when the file is opened only for reading. 
   * 
   * 
   *    {@link StandardOpenOption#CREATE CREATE} 
   *    If this option is present then an existing file is opened if it
   *   exists, otherwise a new file is created. This option is ignored if the
   *   `CREATE_NEW` option is also present or the file is opened only
   *   for reading. 
   * 
   * 
   *    {@link StandardOpenOption#DELETE_ON_CLOSE DELETE_ON_CLOSE} 
   *    When this option is present then the implementation makes a
   *   best effort attempt to delete the file when closed by the
   *   {@link SeekableByteChannel#close close} method. If the `close`
   *   method is not invoked then a best effort attempt is made to
   *   delete the file when the Java virtual machine terminates. 
   * 
   * 
   *   {@link StandardOpenOption#SPARSE SPARSE} 
   *    When creating a new file this option is a hint that the
   *   new file will be sparse. This option is ignored when not creating
   *   a new file. 
   * 
   * 
   *    {@link StandardOpenOption#SYNC SYNC} 
   *    Requires that every update to the file's content or metadata be
   *   written synchronously to the underlying storage device. (see  Synchronized I/O file
   *   integrity). 
   * 
   * 
   *    {@link StandardOpenOption#DSYNC DSYNC} 
   *    Requires that every update to the file's content be written
   *   synchronously to the underlying storage device. (see  Synchronized I/O file
   *   integrity). 
   * 
   * 
   * 
   *
   *  An implementation may also support additional implementation specific
   * options.
   *
   *  The `attrs` parameter is optional {@link FileAttribute
   * file-attributes} to set atomically when a new file is created.
   *
   *  In the case of the default provider, the returned seekable byte channel
   * is a {@link java.nio.channels.FileChannel}.
   *
   *  Usage Examples:
   * {@code
   *     Path path = ...
   *
   *     // open file for reading
   *     ReadableByteChannel rbc = Files.newByteChannel(path, EnumSet.of(READ)));
   *
   *     // open file for writing to the end of an existing file, creating
   *     // the file if it doesn't already exist
   *     WritableByteChannel wbc = Files.newByteChannel(path, EnumSet.of(CREATE,APPEND));
   *
   *     // create file with initial permissions, opening it for both reading and writing
   *     FileAttribute> perms = ...
   *     SeekableByteChannel sbc =
   *         Files.newByteChannel(path, EnumSet.of(CREATE_NEW,READ,WRITE), perms);
   * }
   *
   * @param   path
   *          the path to the file to open or create
   * @param   options
   *          options specifying how the file is opened
   * @param   attrs
   *          an optional list of file attributes to set atomically when
   *          creating the file
   *
   * @return  a new seekable byte channel
   *
   * @throws  IllegalArgumentException
   *          if the set contains an invalid combination of options
   * @throws  UnsupportedOperationException
   *          if an unsupported open option is specified or the array contains
   *          attributes that cannot be set atomically when creating the file
   * @throws  FileAlreadyExistsException
   *          if a file of that name already exists and the {@link
   *          StandardOpenOption#CREATE_NEW CREATE_NEW} option is specified
   *          (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the path if the file is
   *          opened for reading. The {@link SecurityManager#checkWrite(String)
   *          checkWrite} method is invoked to check write access to the path
   *          if the file is opened for writing. The {@link
   *          SecurityManager#checkDelete(String) checkDelete} method is
   *          invoked to check delete access if the file is opened with the
   *          `DELETE_ON_CLOSE` option.
   *
   * @see java.nio.channels.FileChannel#open(Path,Set,FileAttribute[])
  */
  static newByteChannel(path: Path, options: Set<OpenOption>, ...attrs: FileAttribute[]): SeekableByteChannel;
  /**
   * Opens or creates a file, returning a seekable byte channel to access the
   * file.
   *
   *  This method opens or creates a file in exactly the manner specified
   * by the {@link #newByteChannel(Path,Set,FileAttribute[]) newByteChannel}
   * method.
   *
   * @param   path
   *          the path to the file to open or create
   * @param   options
   *          options specifying how the file is opened
   *
   * @return  a new seekable byte channel
   *
   * @throws  IllegalArgumentException
   *          if the set contains an invalid combination of options
   * @throws  UnsupportedOperationException
   *          if an unsupported open option is specified
   * @throws  FileAlreadyExistsException
   *          if a file of that name already exists and the {@link
   *          StandardOpenOption#CREATE_NEW CREATE_NEW} option is specified
   *          (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the path if the file is
   *          opened for reading. The {@link SecurityManager#checkWrite(String)
   *          checkWrite} method is invoked to check write access to the path
   *          if the file is opened for writing. The {@link
   *          SecurityManager#checkDelete(String) checkDelete} method is
   *          invoked to check delete access if the file is opened with the
   *          `DELETE_ON_CLOSE` option.
   *
   * @see java.nio.channels.FileChannel#open(Path,OpenOption[])
  */
  static newByteChannel(path: Path, ...options: OpenOption[]): SeekableByteChannel;
  /**
   * Opens a directory, returning a {@link DirectoryStream} to iterate over
   * all entries in the directory. The elements returned by the directory
   * stream's {@link DirectoryStream#iterator iterator} are of type `     * Path`, each one representing an entry in the directory. The `Path`
   * objects are obtained as if by {@link Path#resolve(Path) resolving} the
   * name of the directory entry against `dir`.
   *
   *  When not using the try-with-resources construct, then directory
   * stream's `close` method should be invoked after iteration is
   * completed so as to free any resources held for the open directory.
   *
   *  When an implementation supports operations on entries in the
   * directory that execute in a race-free manner then the returned directory
   * stream is a {@link SecureDirectoryStream}.
   *
   * @param   dir
   *          the path to the directory
   *
   * @return  a new and open `DirectoryStream` object
   *
   * @throws  NotDirectoryException
   *          if the file could not otherwise be opened because it is not
   *          a directory (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the directory.
  */
  static newDirectoryStream(dir: Path): DirectoryStream<Path>;
  /**
   * Opens a directory, returning a {@link DirectoryStream} to iterate over
   * the entries in the directory. The elements returned by the directory
   * stream's {@link DirectoryStream#iterator iterator} are of type `     * Path`, each one representing an entry in the directory. The `Path`
   * objects are obtained as if by {@link Path#resolve(Path) resolving} the
   * name of the directory entry against `dir`. The entries returned by
   * the iterator are filtered by matching the `String` representation
   * of their file names against the given globbing pattern.
   *
   *  For example, suppose we want to iterate over the files ending with
   * ".java" in a directory:
   *      *     Path dir = ...
   *     try (DirectoryStream<Path> stream = Files.newDirectoryStream(dir, "*.java")) {
   *         :
   *     }
   * 
   *
   *  The globbing pattern is specified by the {@link
   * FileSystem#getPathMatcher getPathMatcher} method.
   *
   *  When not using the try-with-resources construct, then directory
   * stream's `close` method should be invoked after iteration is
   * completed so as to free any resources held for the open directory.
   *
   *  When an implementation supports operations on entries in the
   * directory that execute in a race-free manner then the returned directory
   * stream is a {@link SecureDirectoryStream}.
   *
   * @param   dir
   *          the path to the directory
   * @param   glob
   *          the glob pattern
   *
   * @return  a new and open `DirectoryStream` object
   *
   * @throws  java.util.regex.PatternSyntaxException
   *          if the pattern is invalid
   * @throws  NotDirectoryException
   *          if the file could not otherwise be opened because it is not
   *          a directory (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the directory.
  */
  static newDirectoryStream(dir: Path, glob: string): DirectoryStream<Path>;
  /**
   * Opens a directory, returning a {@link DirectoryStream} to iterate over
   * the entries in the directory. The elements returned by the directory
   * stream's {@link DirectoryStream#iterator iterator} are of type `     * Path`, each one representing an entry in the directory. The `Path`
   * objects are obtained as if by {@link Path#resolve(Path) resolving} the
   * name of the directory entry against `dir`. The entries returned by
   * the iterator are filtered by the given {@link DirectoryStream.Filter
   * filter}.
   *
   *  When not using the try-with-resources construct, then directory
   * stream's `close` method should be invoked after iteration is
   * completed so as to free any resources held for the open directory.
   *
   *  Where the filter terminates due to an uncaught error or runtime
   * exception then it is propagated to the {@link Iterator#hasNext()
   * hasNext} or {@link Iterator#next() next} method. Where an `     * IOException` is thrown, it results in the `hasNext` or `     * next` method throwing a {@link DirectoryIteratorException} with the
   * `IOException` as the cause.
   *
   *  When an implementation supports operations on entries in the
   * directory that execute in a race-free manner then the returned directory
   * stream is a {@link SecureDirectoryStream}.
   *
   *  Usage Example:
   * Suppose we want to iterate over the files in a directory that are
   * larger than 8K.
   *      *     DirectoryStream.Filter<Path> filter = new DirectoryStream.Filter<Path>() {
   *         public boolean accept(Path file) throws IOException {
   *             return (Files.size(file) > 8192L);
   *         }
   *     };
   *     Path dir = ...
   *     try (DirectoryStream<Path> stream = Files.newDirectoryStream(dir, filter)) {
   *         :
   *     }
   * 
   *
   * @param   dir
   *          the path to the directory
   * @param   filter
   *          the directory stream filter
   *
   * @return  a new and open `DirectoryStream` object
   *
   * @throws  NotDirectoryException
   *          if the file could not otherwise be opened because it is not
   *          a directory (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the directory.
  */
  static newDirectoryStream(dir: Path, filter: Filter<any>): DirectoryStream<Path>;
  /**
   * Creates a new and empty file, failing if the file already exists. The
   * check for the existence of the file and the creation of the new file if
   * it does not exist are a single operation that is atomic with respect to
   * all other filesystem activities that might affect the directory.
   *
   *  The `attrs` parameter is optional {@link FileAttribute
   * file-attributes} to set atomically when creating the file. Each attribute
   * is identified by its {@link FileAttribute#name name}. If more than one
   * attribute of the same name is included in the array then all but the last
   * occurrence is ignored.
   *
   * @param   path
   *          the path to the file to create
   * @param   attrs
   *          an optional list of file attributes to set atomically when
   *          creating the file
   *
   * @return  the file
   *
   * @throws  UnsupportedOperationException
   *          if the array contains an attribute that cannot be set atomically
   *          when creating the file
   * @throws  FileAlreadyExistsException
   *          if a file of that name already exists
   *          (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs or the parent directory does not exist
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the new file.
  */
  static createFile(path: Path, ...attrs: FileAttribute[]): Path;
  /**
   * Creates a new directory. The check for the existence of the file and the
   * creation of the directory if it does not exist are a single operation
   * that is atomic with respect to all other filesystem activities that might
   * affect the directory. The {@link #createDirectories createDirectories}
   * method should be used where it is required to create all nonexistent
   * parent directories first.
   *
   *  The `attrs` parameter is optional {@link FileAttribute
   * file-attributes} to set atomically when creating the directory. Each
   * attribute is identified by its {@link FileAttribute#name name}. If more
   * than one attribute of the same name is included in the array then all but
   * the last occurrence is ignored.
   *
   * @param   dir
   *          the directory to create
   * @param   attrs
   *          an optional list of file attributes to set atomically when
   *          creating the directory
   *
   * @return  the directory
   *
   * @throws  UnsupportedOperationException
   *          if the array contains an attribute that cannot be set atomically
   *          when creating the directory
   * @throws  FileAlreadyExistsException
   *          if a directory could not otherwise be created because a file of
   *          that name already exists (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs or the parent directory does not exist
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the new directory.
  */
  static createDirectory(dir: Path, ...attrs: FileAttribute[]): Path;
  /**
   * Creates a directory by creating all nonexistent parent directories first.
   * Unlike the {@link #createDirectory createDirectory} method, an exception
   * is not thrown if the directory could not be created because it already
   * exists.
   *
   *  The `attrs` parameter is optional {@link FileAttribute
   * file-attributes} to set atomically when creating the nonexistent
   * directories. Each file attribute is identified by its {@link
   * FileAttribute#name name}. If more than one attribute of the same name is
   * included in the array then all but the last occurrence is ignored.
   *
   *  If this method fails, then it may do so after creating some, but not
   * all, of the parent directories.
   *
   * @param   dir
   *          the directory to create
   *
   * @param   attrs
   *          an optional list of file attributes to set atomically when
   *          creating the directory
   *
   * @return  the directory
   *
   * @throws  UnsupportedOperationException
   *          if the array contains an attribute that cannot be set atomically
   *          when creating the directory
   * @throws  FileAlreadyExistsException
   *          if `dir` exists but is not a directory (optional specific
   *          exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          in the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked prior to attempting to create a directory and
   *          its {@link SecurityManager#checkRead(String) checkRead} is
   *          invoked for each parent directory that is checked. If `     *          dir` is not an absolute path then its {@link Path#toAbsolutePath
   *          toAbsolutePath} may need to be invoked to get its absolute path.
   *          This may invoke the security manager's {@link
   *          SecurityManager#checkPropertyAccess(String) checkPropertyAccess}
   *          method to check access to the system property `user.dir`
  */
  static createDirectories(dir: Path, ...attrs: FileAttribute[]): Path;
  /**
   * Creates a new empty file in the specified directory, using the given
   * prefix and suffix strings to generate its name. The resulting
   * `Path` is associated with the same `FileSystem` as the given
   * directory.
   *
   *  The details as to how the name of the file is constructed is
   * implementation dependent and therefore not specified. Where possible
   * the `prefix` and `suffix` are used to construct candidate
   * names in the same manner as the {@link
   * java.io.File#createTempFile(String,String,File)} method.
   *
   *  As with the `File.createTempFile` methods, this method is only
   * part of a temporary-file facility. Where used as a work files,
   * the resulting file may be opened using the {@link
   * StandardOpenOption#DELETE_ON_CLOSE DELETE_ON_CLOSE} option so that the
   * file is deleted when the appropriate `close` method is invoked.
   * Alternatively, a {@link Runtime#addShutdownHook shutdown-hook}, or the
   * {@link java.io.File#deleteOnExit} mechanism may be used to delete the
   * file automatically.
   *
   *  The `attrs` parameter is optional {@link FileAttribute
   * file-attributes} to set atomically when creating the file. Each attribute
   * is identified by its {@link FileAttribute#name name}. If more than one
   * attribute of the same name is included in the array then all but the last
   * occurrence is ignored. When no file attributes are specified, then the
   * resulting file may have more restrictive access permissions to files
   * created by the {@link java.io.File#createTempFile(String,String,File)}
   * method.
   *
   * @param   dir
   *          the path to directory in which to create the file
   * @param   prefix
   *          the prefix string to be used in generating the file's name;
   *          may be `null`
   * @param   suffix
   *          the suffix string to be used in generating the file's name;
   *          may be `null`, in which case "`.tmp`" is used
   * @param   attrs
   *          an optional list of file attributes to set atomically when
   *          creating the file
   *
   * @return  the path to the newly created file that did not exist before
   *          this method was invoked
   *
   * @throws  IllegalArgumentException
   *          if the prefix or suffix parameters cannot be used to generate
   *          a candidate file name
   * @throws  UnsupportedOperationException
   *          if the array contains an attribute that cannot be set atomically
   *          when creating the directory
   * @throws  IOException
   *          if an I/O error occurs or `dir` does not exist
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the file.
  */
  static createTempFile(dir: Path, prefix: string, suffix: string, ...attrs: FileAttribute[]): Path;
  /**
   * Creates an empty file in the default temporary-file directory, using
   * the given prefix and suffix to generate its name. The resulting `     * Path` is associated with the default `FileSystem`.
   *
   *  This method works in exactly the manner specified by the
   * {@link #createTempFile(Path,String,String,FileAttribute[])} method for
   * the case that the `dir` parameter is the temporary-file directory.
   *
   * @param   prefix
   *          the prefix string to be used in generating the file's name;
   *          may be `null`
   * @param   suffix
   *          the suffix string to be used in generating the file's name;
   *          may be `null`, in which case "`.tmp`" is used
   * @param   attrs
   *          an optional list of file attributes to set atomically when
   *          creating the file
   *
   * @return  the path to the newly created file that did not exist before
   *          this method was invoked
   *
   * @throws  IllegalArgumentException
   *          if the prefix or suffix parameters cannot be used to generate
   *          a candidate file name
   * @throws  UnsupportedOperationException
   *          if the array contains an attribute that cannot be set atomically
   *          when creating the directory
   * @throws  IOException
   *          if an I/O error occurs or the temporary-file directory does not
   *          exist
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the file.
  */
  static createTempFile(prefix: string, suffix: string, ...attrs: FileAttribute[]): Path;
  /**
   * Creates a new directory in the specified directory, using the given
   * prefix to generate its name.  The resulting `Path` is associated
   * with the same `FileSystem` as the given directory.
   *
   *  The details as to how the name of the directory is constructed is
   * implementation dependent and therefore not specified. Where possible
   * the `prefix` is used to construct candidate names.
   *
   *  As with the `createTempFile` methods, this method is only
   * part of a temporary-file facility. A {@link Runtime#addShutdownHook
   * shutdown-hook}, or the {@link java.io.File#deleteOnExit} mechanism may be
   * used to delete the directory automatically.
   *
   *  The `attrs` parameter is optional {@link FileAttribute
   * file-attributes} to set atomically when creating the directory. Each
   * attribute is identified by its {@link FileAttribute#name name}. If more
   * than one attribute of the same name is included in the array then all but
   * the last occurrence is ignored.
   *
   * @param   dir
   *          the path to directory in which to create the directory
   * @param   prefix
   *          the prefix string to be used in generating the directory's name;
   *          may be `null`
   * @param   attrs
   *          an optional list of file attributes to set atomically when
   *          creating the directory
   *
   * @return  the path to the newly created directory that did not exist before
   *          this method was invoked
   *
   * @throws  IllegalArgumentException
   *          if the prefix cannot be used to generate a candidate directory name
   * @throws  UnsupportedOperationException
   *          if the array contains an attribute that cannot be set atomically
   *          when creating the directory
   * @throws  IOException
   *          if an I/O error occurs or `dir` does not exist
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access when creating the
   *          directory.
  */
  static createTempDirectory(dir: Path, prefix: string, ...attrs: FileAttribute[]): Path;
  /**
   * Creates a new directory in the default temporary-file directory, using
   * the given prefix to generate its name. The resulting `Path` is
   * associated with the default `FileSystem`.
   *
   *  This method works in exactly the manner specified by {@link
   * #createTempDirectory(Path,String,FileAttribute[])} method for the case
   * that the `dir` parameter is the temporary-file directory.
   *
   * @param   prefix
   *          the prefix string to be used in generating the directory's name;
   *          may be `null`
   * @param   attrs
   *          an optional list of file attributes to set atomically when
   *          creating the directory
   *
   * @return  the path to the newly created directory that did not exist before
   *          this method was invoked
   *
   * @throws  IllegalArgumentException
   *          if the prefix cannot be used to generate a candidate directory name
   * @throws  UnsupportedOperationException
   *          if the array contains an attribute that cannot be set atomically
   *          when creating the directory
   * @throws  IOException
   *          if an I/O error occurs or the temporary-file directory does not
   *          exist
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access when creating the
   *          directory.
  */
  static createTempDirectory(prefix: string, ...attrs: FileAttribute[]): Path;
  /**
   * Creates a symbolic link to a target (optional operation).
   *
   *  The `target` parameter is the target of the link. It may be an
   * {@link Path#isAbsolute absolute} or relative path and may not exist. When
   * the target is a relative path then file system operations on the resulting
   * link are relative to the path of the link.
   *
   *  The `attrs` parameter is optional {@link FileAttribute
   * attributes} to set atomically when creating the link. Each attribute is
   * identified by its {@link FileAttribute#name name}. If more than one attribute
   * of the same name is included in the array then all but the last occurrence
   * is ignored.
   *
   *  Where symbolic links are supported, but the underlying {@link FileStore}
   * does not support symbolic links, then this may fail with an {@link
   * IOException}. Additionally, some operating systems may require that the
   * Java virtual machine be started with implementation specific privileges to
   * create symbolic links, in which case this method may throw `IOException`.
   *
   * @param   link
   *          the path of the symbolic link to create
   * @param   target
   *          the target of the symbolic link
   * @param   attrs
   *          the array of attributes to set atomically when creating the
   *          symbolic link
   *
   * @return  the path to the symbolic link
   *
   * @throws  UnsupportedOperationException
   *          if the implementation does not support symbolic links or the
   *          array contains an attribute that cannot be set atomically when
   *          creating the symbolic link
   * @throws  FileAlreadyExistsException
   *          if a file with the name already exists (optional specific
   *          exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager
   *          is installed, it denies {@link LinkPermission}`("symbolic")`
   *          or its {@link SecurityManager#checkWrite(String) checkWrite}
   *          method denies write access to the path of the symbolic link.
  */
  static createSymbolicLink(link: Path, target: Path, ...attrs: FileAttribute[]): Path;
  /**
   * Creates a new link (directory entry) for an existing file (optional
   * operation).
   *
   *  The `link` parameter locates the directory entry to create.
   * The `existing` parameter is the path to an existing file. This
   * method creates a new directory entry for the file so that it can be
   * accessed using `link` as the path. On some file systems this is
   * known as creating a "hard link". Whether the file attributes are
   * maintained for the file or for each directory entry is file system
   * specific and therefore not specified. Typically, a file system requires
   * that all links (directory entries) for a file be on the same file system.
   * Furthermore, on some platforms, the Java virtual machine may require to
   * be started with implementation specific privileges to create hard links
   * or to create links to directories.
   *
   * @param   link
   *          the link (directory entry) to create
   * @param   existing
   *          a path to an existing file
   *
   * @return  the path to the link (directory entry)
   *
   * @throws  UnsupportedOperationException
   *          if the implementation does not support adding an existing file
   *          to a directory
   * @throws  FileAlreadyExistsException
   *          if the entry could not otherwise be created because a file of
   *          that name already exists (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager
   *          is installed, it denies {@link LinkPermission}`("hard")`
   *          or its {@link SecurityManager#checkWrite(String) checkWrite}
   *          method denies write access to either the link or the
   *          existing file.
  */
  static createLink(link: Path, existing: Path): Path;
  /**
   * Deletes a file.
   *
   *  An implementation may require to examine the file to determine if the
   * file is a directory. Consequently this method may not be atomic with respect
   * to other file system operations.  If the file is a symbolic link then the
   * symbolic link itself, not the final target of the link, is deleted.
   *
   *  If the file is a directory then the directory must be empty. In some
   * implementations a directory has entries for special files or links that
   * are created when the directory is created. In such implementations a
   * directory is considered empty when only the special entries exist.
   * This method can be used with the {@link #walkFileTree walkFileTree}
   * method to delete a directory and all entries in the directory, or an
   * entire file-tree where required.
   *
   *  On some operating systems it may not be possible to remove a file when
   * it is open and in use by this Java virtual machine or other programs.
   *
   * @param   path
   *          the path to the file to delete
   *
   * @throws  NoSuchFileException
   *          if the file does not exist (optional specific exception)
   * @throws  DirectoryNotEmptyException
   *          if the file is a directory and could not otherwise be deleted
   *          because the directory is not empty (optional specific
   *          exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkDelete(String)} method
   *          is invoked to check delete access to the file
  */
  static delete(path: Path): void;
  /**
   * Deletes a file if it exists.
   *
   *  As with the {@link #delete(Path) delete(Path)} method, an
   * implementation may need to examine the file to determine if the file is a
   * directory. Consequently this method may not be atomic with respect to
   * other file system operations.  If the file is a symbolic link, then the
   * symbolic link itself, not the final target of the link, is deleted.
   *
   *  If the file is a directory then the directory must be empty. In some
   * implementations a directory has entries for special files or links that
   * are created when the directory is created. In such implementations a
   * directory is considered empty when only the special entries exist.
   *
   *  On some operating systems it may not be possible to remove a file when
   * it is open and in use by this Java virtual machine or other programs.
   *
   * @param   path
   *          the path to the file to delete
   *
   * @return  `true` if the file was deleted by this method; `     *          false` if the file could not be deleted because it did not
   *          exist
   *
   * @throws  DirectoryNotEmptyException
   *          if the file is a directory and could not otherwise be deleted
   *          because the directory is not empty (optional specific
   *          exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkDelete(String)} method
   *          is invoked to check delete access to the file.
  */
  static deleteIfExists(path: Path): boolean;
  /**
   * Copy a file to a target file.
   *
   *  This method copies a file to the target file with the `     * options` parameter specifying how the copy is performed. By default, the
   * copy fails if the target file already exists or is a symbolic link,
   * except if the source and target are the {@link #isSameFile same} file, in
   * which case the method completes without copying the file. File attributes
   * are not required to be copied to the target file. If symbolic links are
   * supported, and the file is a symbolic link, then the final target of the
   * link is copied. If the file is a directory then it creates an empty
   * directory in the target location (entries in the directory are not
   * copied). This method can be used with the {@link #walkFileTree
   * walkFileTree} method to copy a directory and all entries in the directory,
   * or an entire file-tree where required.
   *
   *  The `options` parameter may include any of the following:
   *
   * 
   * Options
   * 
   *  Option Description 
   * 
   * 
   * 
   *    {@link StandardCopyOption#REPLACE_EXISTING REPLACE_EXISTING} 
   *    If the target file exists, then the target file is replaced if it
   *     is not a non-empty directory. If the target file exists and is a
   *     symbolic link, then the symbolic link itself, not the target of
   *     the link, is replaced. 
   * 
   * 
   *    {@link StandardCopyOption#COPY_ATTRIBUTES COPY_ATTRIBUTES} 
   *    Attempts to copy the file attributes associated with this file to
   *     the target file. The exact file attributes that are copied is platform
   *     and file system dependent and therefore unspecified. Minimally, the
   *     {@link BasicFileAttributes#lastModifiedTime last-modified-time} is
   *     copied to the target file if supported by both the source and target
   *     file stores. Copying of file timestamps may result in precision
   *     loss. 
   * 
   * 
   *    {@link LinkOption#NOFOLLOW_LINKS NOFOLLOW_LINKS} 
   *    Symbolic links are not followed. If the file is a symbolic link,
   *     then the symbolic link itself, not the target of the link, is copied.
   *     It is implementation specific if file attributes can be copied to the
   *     new link. In other words, the `COPY_ATTRIBUTES` option may be
   *     ignored when copying a symbolic link. 
   * 
   * 
   * 
   *
   *  An implementation of this interface may support additional
   * implementation specific options.
   *
   *  Copying a file is not an atomic operation. If an {@link IOException}
   * is thrown, then it is possible that the target file is incomplete or some
   * of its file attributes have not been copied from the source file. When
   * the `REPLACE_EXISTING` option is specified and the target file
   * exists, then the target file is replaced. The check for the existence of
   * the file and the creation of the new file may not be atomic with respect
   * to other file system activities.
   *
   *  Usage Example:
   * Suppose we want to copy a file into a directory, giving it the same file
   * name as the source file:
   *      *     Path source = ...
   *     Path newdir = ...
   *     Files.copy(source, newdir.resolve(source.getFileName());
   * 
   *
   * @param   source
   *          the path to the file to copy
   * @param   target
   *          the path to the target file (may be associated with a different
   *          provider to the source path)
   * @param   options
   *          options specifying how the copy should be done
   *
   * @return  the path to the target file
   *
   * @throws  UnsupportedOperationException
   *          if the array contains a copy option that is not supported
   * @throws  FileAlreadyExistsException
   *          if the target file exists but cannot be replaced because the
   *          `REPLACE_EXISTING` option is not specified (optional
   *          specific exception)
   * @throws  DirectoryNotEmptyException
   *          the `REPLACE_EXISTING` option is specified but the file
   *          cannot be replaced because it is a non-empty directory
   *          (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the source file, the
   *          {@link SecurityManager#checkWrite(String) checkWrite} is invoked
   *          to check write access to the target file. If a symbolic link is
   *          copied the security manager is invoked to check {@link
   *          LinkPermission}`("symbolic")`.
  */
  static copy(source: Path, target: Path, ...options: CopyOption[]): Path;
  /**
   * Move or rename a file to a target file.
   *
   *  By default, this method attempts to move the file to the target
   * file, failing if the target file exists except if the source and
   * target are the {@link #isSameFile same} file, in which case this method
   * has no effect. If the file is a symbolic link then the symbolic link
   * itself, not the target of the link, is moved. This method may be
   * invoked to move an empty directory. In some implementations a directory
   * has entries for special files or links that are created when the
   * directory is created. In such implementations a directory is considered
   * empty when only the special entries exist. When invoked to move a
   * directory that is not empty then the directory is moved if it does not
   * require moving the entries in the directory.  For example, renaming a
   * directory on the same {@link FileStore} will usually not require moving
   * the entries in the directory. When moving a directory requires that its
   * entries be moved then this method fails (by throwing an `     * IOException`). To move a file tree may involve copying rather
   * than moving directories and this can be done using the {@link
   * #copy copy} method in conjunction with the {@link
   * #walkFileTree Files.walkFileTree} utility method.
   *
   *  The `options` parameter may include any of the following:
   *
   * 
   * Options
   * 
   *  Option Description 
   * 
   * 
   * 
   *    {@link StandardCopyOption#REPLACE_EXISTING REPLACE_EXISTING} 
   *    If the target file exists, then the target file is replaced if it
   *     is not a non-empty directory. If the target file exists and is a
   *     symbolic link, then the symbolic link itself, not the target of
   *     the link, is replaced. 
   * 
   * 
   *    {@link StandardCopyOption#ATOMIC_MOVE ATOMIC_MOVE} 
   *    The move is performed as an atomic file system operation and all
   *     other options are ignored. If the target file exists then it is
   *     implementation specific if the existing file is replaced or this method
   *     fails by throwing an {@link IOException}. If the move cannot be
   *     performed as an atomic file system operation then {@link
   *     AtomicMoveNotSupportedException} is thrown. This can arise, for
   *     example, when the target location is on a different `FileStore`
   *     and would require that the file be copied, or target location is
   *     associated with a different provider to this object. 
   * 
   * 
   *
   *  An implementation of this interface may support additional
   * implementation specific options.
   *
   *  Moving a file will copy the {@link
   * BasicFileAttributes#lastModifiedTime last-modified-time} to the target
   * file if supported by both source and target file stores. Copying of file
   * timestamps may result in precision loss. An implementation may also
   * attempt to copy other file attributes but is not required to fail if the
   * file attributes cannot be copied. When the move is performed as
   * a non-atomic operation, and an `IOException` is thrown, then the
   * state of the files is not defined. The original file and the target file
   * may both exist, the target file may be incomplete or some of its file
   * attributes may not been copied from the original file.
   *
   *  Usage Examples:
   * Suppose we want to rename a file to "newname", keeping the file in the
   * same directory:
   *      *     Path source = ...
   *     Files.move(source, source.resolveSibling("newname"));
   * 
   * Alternatively, suppose we want to move a file to new directory, keeping
   * the same file name, and replacing any existing file of that name in the
   * directory:
   *      *     Path source = ...
   *     Path newdir = ...
   *     Files.move(source, newdir.resolve(source.getFileName()), REPLACE_EXISTING);
   * 
   *
   * @param   source
   *          the path to the file to move
   * @param   target
   *          the path to the target file (may be associated with a different
   *          provider to the source path)
   * @param   options
   *          options specifying how the move should be done
   *
   * @return  the path to the target file
   *
   * @throws  UnsupportedOperationException
   *          if the array contains a copy option that is not supported
   * @throws  FileAlreadyExistsException
   *          if the target file exists but cannot be replaced because the
   *          `REPLACE_EXISTING` option is not specified (optional
   *          specific exception)
   * @throws  DirectoryNotEmptyException
   *          the `REPLACE_EXISTING` option is specified but the file
   *          cannot be replaced because it is a non-empty directory, or the
   *          source is a non-empty directory containing entries that would
   *          be required to be moved (optional specific exceptions)
   * @throws  AtomicMoveNotSupportedException
   *          if the options array contains the `ATOMIC_MOVE` option but
   *          the file cannot be moved as an atomic file system operation.
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to both the source and
   *          target file.
  */
  static move(source: Path, target: Path, ...options: CopyOption[]): Path;
  /**
   * Reads the target of a symbolic link (optional operation).
   *
   *  If the file system supports symbolic
   * links then this method is used to read the target of the link, failing
   * if the file is not a symbolic link. The target of the link need not exist.
   * The returned `Path` object will be associated with the same file
   * system as `link`.
   *
   * @param   link
   *          the path to the symbolic link
   *
   * @return  a `Path` object representing the target of the link
   *
   * @throws  UnsupportedOperationException
   *          if the implementation does not support symbolic links
   * @throws  NotLinkException
   *          if the target could otherwise not be read because the file
   *          is not a symbolic link (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager
   *          is installed, it checks that `FilePermission` has been
   *          granted with the "`readlink`" action to read the link.
  */
  static readSymbolicLink(link: Path): Path;
  /**
   * Returns the {@link FileStore} representing the file store where a file
   * is located.
   *
   *  Once a reference to the `FileStore` is obtained it is
   * implementation specific if operations on the returned `FileStore`,
   * or {@link FileStoreAttributeView} objects obtained from it, continue
   * to depend on the existence of the file. In particular the behavior is not
   * defined for the case that the file is deleted or moved to a different
   * file store.
   *
   * @param   path
   *          the path to the file
   *
   * @return  the file store where the file is stored
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file, and in
   *          addition it checks
   *          {@link RuntimePermission}`("getFileStoreAttributes")`
  */
  static getFileStore(path: Path): FileStore;
  /**
   * Tests if two paths locate the same file.
   *
   *  If both `Path` objects are {@link Path#equals(Object) equal}
   * then this method returns `true` without checking if the file exists.
   * If the two `Path` objects are associated with different providers
   * then this method returns `false`. Otherwise, this method checks if
   * both `Path` objects locate the same file, and depending on the
   * implementation, may require to open or access both files.
   *
   *  If the file system and files remain static, then this method implements
   * an equivalence relation for non-null `Paths`.
   * 
   * It is reflexive: for `Path` `f`,
   *     `isSameFile(f,f)` should return `true`.
   * It is symmetric: for two `Paths` `f` and `g`,
   *     `isSameFile(f,g)` will equal `isSameFile(g,f)`.
   * It is transitive: for three `Paths`
   *     `f`, `g`, and `h`, if `isSameFile(f,g)` returns
   *     `true` and `isSameFile(g,h)` returns `true`, then
   *     `isSameFile(f,h)` will return `true`.
   * 
   *
   * @param   path
   *          one path to the file
   * @param   path2
   *          the other path
   *
   * @return  `true` if, and only if, the two paths locate the same file
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to both files.
   *
   * @see java.nio.file.attribute.BasicFileAttributes#fileKey
  */
  static isSameFile(path: Path, path2: Path): boolean;
  /**
   * Finds and returns the position of the first mismatched byte in the content
   * of two files, or `-1L` if there is no mismatch. The position will be
   * in the inclusive range of `0L` up to the size (in bytes) of the
   * smaller file.
   *
   *  Two files are considered to match if they satisfy one of the following
   * conditions:
   * 
   *  The two paths locate the {@linkplain #isSameFile(Path, Path) same file},
   *      even if two {@linkplain Path#equals(Object) equal} paths locate a file
   *      does not exist, or 
   *  The two files are the same size, and every byte in the first file
   *      is identical to the corresponding byte in the second file. 
   * 
   *
   *  Otherwise there is a mismatch between the two files and the value
   * returned by this method is:
   * 
   *  The position of the first mismatched byte, or 
   *  The size of the smaller file (in bytes) when the files are different
   *      sizes and every byte of the smaller file is identical to the
   *      corresponding byte of the larger file. 
   * 
   *
   *  This method may not be atomic with respect to other file system
   * operations. This method is always reflexive (for `Path f`,
   * `mismatch(f,f)` returns `-1L`). If the file system and files
   * remain static, then this method is symmetric (for two `Paths f`
   * and `g`, `mismatch(f,g)` will return the same value as
   * `mismatch(g,f)`).
   *
   * @param   path
   *          the path to the first file
   * @param   path2
   *          the path to the second file
   *
   * @return  the position of the first mismatch or `-1L` if no mismatch
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to both files.
   *
   * @since 12
  */
  static mismatch(path: Path, path2: Path): number;
  /**
   * Tells whether or not a file is considered hidden.
   *
   * @apiNote
   * The exact definition of hidden is platform or provider dependent. On UNIX
   * for example a file is considered to be hidden if its name begins with a
   * period character ('.'). On Windows a file is considered hidden if the DOS
   * {@link DosFileAttributes#isHidden hidden} attribute is set.
   *
   *  Depending on the implementation this method may require to access
   * the file system to determine if the file is considered hidden.
   *
   * @param   path
   *          the path to the file to test
   *
   * @return  `true` if the file is considered hidden
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
  */
  static isHidden(path: Path): boolean;
  /**
   * Probes the content type of a file.
   *
   *  This method uses the installed {@link FileTypeDetector} implementations
   * to probe the given file to determine its content type. Each file type
   * detector's {@link FileTypeDetector#probeContentType probeContentType} is
   * invoked, in turn, to probe the file type. If the file is recognized then
   * the content type is returned. If the file is not recognized by any of the
   * installed file type detectors then a system-default file type detector is
   * invoked to guess the content type.
   *
   *  A given invocation of the Java virtual machine maintains a system-wide
   * list of file type detectors. Installed file type detectors are loaded
   * using the service-provider loading facility defined by the {@link ServiceLoader}
   * class. Installed file type detectors are loaded using the system class
   * loader. If the system class loader cannot be found then the platform class
   * loader is used. File type detectors are typically installed
   * by placing them in a JAR file on the application class path,
   * the JAR file contains a provider-configuration file
   * named `java.nio.file.spi.FileTypeDetector` in the resource directory
   * `META-INF/services`, and the file lists one or more fully-qualified
   * names of concrete subclass of `FileTypeDetector ` that have a zero
   * argument constructor. If the process of locating or instantiating the
   * installed file type detectors fails then an unspecified error is thrown.
   * The ordering that installed providers are located is implementation
   * specific.
   *
   *  The return value of this method is the string form of the value of a
   * Multipurpose Internet Mail Extension (MIME) content type as
   * defined by RFC 2045:
   * Multipurpose Internet Mail Extensions (MIME) Part One: Format of Internet
   * Message Bodies. The string is guaranteed to be parsable according
   * to the grammar in the RFC.
   *
   * @param   path
   *          the path to the file to probe
   *
   * @return  The content type of the file, or `null` if the content
   *          type cannot be determined
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          If a security manager is installed and it denies an unspecified
   *          permission required by a file type detector implementation.
  */
  static probeContentType(path: Path): string;
  /**
   * Returns a file attribute view of a given type.
   *
   *  A file attribute view provides a read-only or updatable view of a
   * set of file attributes. This method is intended to be used where the file
   * attribute view defines type-safe methods to read or update the file
   * attributes. The `type` parameter is the type of the attribute view
   * required and the method returns an instance of that type if supported.
   * The {@link BasicFileAttributeView} type supports access to the basic
   * attributes of a file. Invoking this method to select a file attribute
   * view of that type will always return an instance of that class.
   *
   *  The `options` array may be used to indicate how symbolic links
   * are handled by the resulting file attribute view for the case that the
   * file is a symbolic link. By default, symbolic links are followed. If the
   * option {@link LinkOption#NOFOLLOW_LINKS NOFOLLOW_LINKS} is present then
   * symbolic links are not followed. This option is ignored by implementations
   * that do not support symbolic links.
   *
   *  Usage Example:
   * Suppose we want read or set a file's ACL, if supported:
   *      *     Path path = ...
   *     AclFileAttributeView view = Files.getFileAttributeView(path, AclFileAttributeView.class);
   *     if (view != null) {
   *         List<AclEntry> acl = view.getAcl();
   *         :
   *     }
   * 
   *
   * @param   
   *          The `FileAttributeView` type
   * @param   path
   *          the path to the file
   * @param   type
   *          the `Class` object corresponding to the file attribute view
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  a file attribute view of the specified type, or `null` if
   *          the attribute view type is not available
  */
  static getFileAttributeView<V>(path: Path, type: Class<V>, ...options: LinkOption[]): V;
  /**
   * Reads a file's attributes as a bulk operation.
   *
   *  The `type` parameter is the type of the attributes required
   * and this method returns an instance of that type if supported. All
   * implementations support a basic set of file attributes and so invoking
   * this method with a  `type` parameter of `     * BasicFileAttributes.class` will not throw `     * UnsupportedOperationException`.
   *
   *  The `options` array may be used to indicate how symbolic links
   * are handled for the case that the file is a symbolic link. By default,
   * symbolic links are followed and the file attribute of the final target
   * of the link is read. If the option {@link LinkOption#NOFOLLOW_LINKS
   * NOFOLLOW_LINKS} is present then symbolic links are not followed.
   *
   *  It is implementation specific if all file attributes are read as an
   * atomic operation with respect to other file system operations.
   *
   *  Usage Example:
   * Suppose we want to read a file's attributes in bulk:
   *      *    Path path = ...
   *    BasicFileAttributes attrs = Files.readAttributes(path, BasicFileAttributes.class);
   * 
   * Alternatively, suppose we want to read file's POSIX attributes without
   * following symbolic links:
   *      *    PosixFileAttributes attrs =
   *        Files.readAttributes(path, PosixFileAttributes.class, NOFOLLOW_LINKS);
   * 
   *
   * @param   
   *          The `BasicFileAttributes` type
   * @param   path
   *          the path to the file
   * @param   type
   *          the `Class` of the file attributes required
   *          to read
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  the file attributes
   *
   * @throws  UnsupportedOperationException
   *          if an attributes of the given type are not supported
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, its {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file. If this
   *          method is invoked to read security sensitive attributes then the
   *          security manager may be invoke to check for additional permissions.
  */
  static readAttributes<A>(path: Path, type: Class<A>, ...options: LinkOption[]): A;
  /**
   * Sets the value of a file attribute.
   *
   *  The `attribute` parameter identifies the attribute to be set
   * and takes the form:
   * 
   * [view-name:]attribute-name
   * 
   * where square brackets [...] delineate an optional component and the
   * character `':'` stands for itself.
   *
   *  view-name is the {@link FileAttributeView#name name} of a {@link
   * FileAttributeView} that identifies a set of file attributes. If not
   * specified then it defaults to `"basic"`, the name of the file
   * attribute view that identifies the basic set of file attributes common to
   * many file systems. attribute-name is the name of the attribute
   * within the set.
   *
   *  The `options` array may be used to indicate how symbolic links
   * are handled for the case that the file is a symbolic link. By default,
   * symbolic links are followed and the file attribute of the final target
   * of the link is set. If the option {@link LinkOption#NOFOLLOW_LINKS
   * NOFOLLOW_LINKS} is present then symbolic links are not followed.
   *
   *  Usage Example:
   * Suppose we want to set the DOS "hidden" attribute:
   *      *    Path path = ...
   *    Files.setAttribute(path, "dos:hidden", true);
   * 
   *
   * @param   path
   *          the path to the file
   * @param   attribute
   *          the attribute to set
   * @param   value
   *          the attribute value
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  the given path
   *
   * @throws  UnsupportedOperationException
   *          if the attribute view is not available
   * @throws  IllegalArgumentException
   *          if the attribute name is not specified, or is not recognized, or
   *          the attribute value is of the correct type but has an
   *          inappropriate value
   * @throws  ClassCastException
   *          if the attribute value is not of the expected type or is a
   *          collection containing elements that are not of the expected
   *          type
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, its {@link SecurityManager#checkWrite(String) checkWrite}
   *          method denies write access to the file. If this method is invoked
   *          to set security sensitive attributes then the security manager
   *          may be invoked to check for additional permissions.
  */
  static setAttribute(path: Path, attribute: string, value: any, ...options: LinkOption[]): Path;
  /**
   * Reads the value of a file attribute.
   *
   *  The `attribute` parameter identifies the attribute to be read
   * and takes the form:
   * 
   * [view-name:]attribute-name
   * 
   * where square brackets [...] delineate an optional component and the
   * character `':'` stands for itself.
   *
   *  view-name is the {@link FileAttributeView#name name} of a {@link
   * FileAttributeView} that identifies a set of file attributes. If not
   * specified then it defaults to `"basic"`, the name of the file
   * attribute view that identifies the basic set of file attributes common to
   * many file systems. attribute-name is the name of the attribute.
   *
   *  The `options` array may be used to indicate how symbolic links
   * are handled for the case that the file is a symbolic link. By default,
   * symbolic links are followed and the file attribute of the final target
   * of the link is read. If the option {@link LinkOption#NOFOLLOW_LINKS
   * NOFOLLOW_LINKS} is present then symbolic links are not followed.
   *
   *  Usage Example:
   * Suppose we require the user ID of the file owner on a system that
   * supports a "`unix`" view:
   *      *    Path path = ...
   *    int uid = (Integer)Files.getAttribute(path, "unix:uid");
   * 
   *
   * @param   path
   *          the path to the file
   * @param   attribute
   *          the attribute to read
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  the attribute value
   *
   * @throws  UnsupportedOperationException
   *          if the attribute view is not available
   * @throws  IllegalArgumentException
   *          if the attribute name is not specified or is not recognized
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, its {@link SecurityManager#checkRead(String) checkRead}
   *          method denies read access to the file. If this method is invoked
   *          to read security sensitive attributes then the security manager
   *          may be invoked to check for additional permissions.
  */
  static getAttribute(path: Path, attribute: string, ...options: LinkOption[]): any;
  /**
   * Reads a set of file attributes as a bulk operation.
   *
   *  The `attributes` parameter identifies the attributes to be read
   * and takes the form:
   * 
   * [view-name:]attribute-list
   * 
   * where square brackets [...] delineate an optional component and the
   * character `':'` stands for itself.
   *
   *  view-name is the {@link FileAttributeView#name name} of a {@link
   * FileAttributeView} that identifies a set of file attributes. If not
   * specified then it defaults to `"basic"`, the name of the file
   * attribute view that identifies the basic set of file attributes common to
   * many file systems.
   *
   *  The attribute-list component is a comma separated list of
   * one or more names of attributes to read. If the list contains the value
   * `"*"` then all attributes are read. Attributes that are not supported
   * are ignored and will not be present in the returned map. It is
   * implementation specific if all attributes are read as an atomic operation
   * with respect to other file system operations.
   *
   *  The following examples demonstrate possible values for the `     * attributes` parameter:
   *
   * 
   * Possible values
   * 
   * 
   *  Example
   *  Description
   * 
   * 
   * 
   *    `"*"` 
   *    Read all {@link BasicFileAttributes basic-file-attributes}. 
   * 
   * 
   *    `"size,lastModifiedTime,lastAccessTime"` 
   *    Reads the file size, last modified time, and last access time
   *     attributes. 
   * 
   * 
   *    `"posix:*"` 
   *    Read all {@link PosixFileAttributes POSIX-file-attributes}. 
   * 
   * 
   *    `"posix:permissions,owner,size"` 
   *    Reads the POSIX file permissions, owner, and file size. 
   * 
   * 
   * 
   *
   *  The `options` array may be used to indicate how symbolic links
   * are handled for the case that the file is a symbolic link. By default,
   * symbolic links are followed and the file attribute of the final target
   * of the link is read. If the option {@link LinkOption#NOFOLLOW_LINKS
   * NOFOLLOW_LINKS} is present then symbolic links are not followed.
   *
   * @param   path
   *          the path to the file
   * @param   attributes
   *          the attributes to read
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  a map of the attributes returned; The map's keys are the
   *          attribute names, its values are the attribute values
   *
   * @throws  UnsupportedOperationException
   *          if the attribute view is not available
   * @throws  IllegalArgumentException
   *          if no attributes are specified or an unrecognized attribute is
   *          specified
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, its {@link SecurityManager#checkRead(String) checkRead}
   *          method denies read access to the file. If this method is invoked
   *          to read security sensitive attributes then the security manager
   *          may be invoke to check for additional permissions.
  */
  static readAttributes(path: Path, attributes: string, ...options: LinkOption[]): Map<string, any>;
  /**
   * Returns a file's POSIX file permissions.
   *
   *  The `path` parameter is associated with a `FileSystem`
   * that supports the {@link PosixFileAttributeView}. This attribute view
   * provides access to file attributes commonly associated with files on file
   * systems used by operating systems that implement the Portable Operating
   * System Interface (POSIX) family of standards.
   *
   *  The `options` array may be used to indicate how symbolic links
   * are handled for the case that the file is a symbolic link. By default,
   * symbolic links are followed and the file attribute of the final target
   * of the link is read. If the option {@link LinkOption#NOFOLLOW_LINKS
   * NOFOLLOW_LINKS} is present then symbolic links are not followed.
   *
   * @param   path
   *          the path to the file
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  the file permissions
   *
   * @throws  UnsupportedOperationException
   *          if the associated file system does not support the `     *          PosixFileAttributeView`
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, and it denies
   *          {@link RuntimePermission}`("accessUserInformation")`
   *          or its {@link SecurityManager#checkRead(String) checkRead} method
   *          denies read access to the file.
  */
  static getPosixFilePermissions(path: Path, ...options: LinkOption[]): Set<PosixFilePermission>;
  /**
   * Sets a file's POSIX permissions.
   *
   *  The `path` parameter is associated with a `FileSystem`
   * that supports the {@link PosixFileAttributeView}. This attribute view
   * provides access to file attributes commonly associated with files on file
   * systems used by operating systems that implement the Portable Operating
   * System Interface (POSIX) family of standards.
   *
   * @param   path
   *          The path to the file
   * @param   perms
   *          The new set of permissions
   *
   * @return  The given path
   *
   * @throws  UnsupportedOperationException
   *          if the associated file system does not support the `     *          PosixFileAttributeView`
   * @throws  ClassCastException
   *          if the sets contains elements that are not of type `     *          PosixFilePermission`
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, it denies
   *          {@link RuntimePermission}`("accessUserInformation")`
   *          or its {@link SecurityManager#checkWrite(String) checkWrite}
   *          method denies write access to the file.
  */
  static setPosixFilePermissions(path: Path, perms: Set<PosixFilePermission>): Path;
  /**
   * Returns the owner of a file.
   *
   *  The `path` parameter is associated with a file system that
   * supports {@link FileOwnerAttributeView}. This file attribute view provides
   * access to a file attribute that is the owner of the file.
   *
   * @param   path
   *          The path to the file
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  A user principal representing the owner of the file
   *
   * @throws  UnsupportedOperationException
   *          if the associated file system does not support the `     *          FileOwnerAttributeView`
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, it denies
   *          {@link RuntimePermission}`("accessUserInformation")`
   *          or its {@link SecurityManager#checkRead(String) checkRead} method
   *          denies read access to the file.
  */
  static getOwner(path: Path, ...options: LinkOption[]): UserPrincipal;
  /**
   * Updates the file owner.
   *
   *  The `path` parameter is associated with a file system that
   * supports {@link FileOwnerAttributeView}. This file attribute view provides
   * access to a file attribute that is the owner of the file.
   *
   *  Usage Example:
   * Suppose we want to make "joe" the owner of a file:
   *      *     Path path = ...
   *     UserPrincipalLookupService lookupService =
   *         provider(path).getUserPrincipalLookupService();
   *     UserPrincipal joe = lookupService.lookupPrincipalByName("joe");
   *     Files.setOwner(path, joe);
   * 
   *
   * @param   path
   *          The path to the file
   * @param   owner
   *          The new file owner
   *
   * @return  The given path
   *
   * @throws  UnsupportedOperationException
   *          if the associated file system does not support the `     *          FileOwnerAttributeView`
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, it denies
   *          {@link RuntimePermission}`("accessUserInformation")`
   *          or its {@link SecurityManager#checkWrite(String) checkWrite}
   *          method denies write access to the file.
   *
   * @see FileSystem#getUserPrincipalLookupService
   * @see java.nio.file.attribute.UserPrincipalLookupService
  */
  static setOwner(path: Path, owner: UserPrincipal): Path;
  /**
   * Tests whether a file is a symbolic link.
   *
   *  Where it is required to distinguish an I/O exception from the case
   * that the file is not a symbolic link then the file attributes can be
   * read with the {@link #readAttributes(Path,Class,LinkOption[])
   * readAttributes} method and the file type tested with the {@link
   * BasicFileAttributes#isSymbolicLink} method.
   *
   * @param   path  The path to the file
   *
   * @return  `true` if the file is a symbolic link; `false` if
   *          the file does not exist, is not a symbolic link, or it cannot
   *          be determined if the file is a symbolic link or not.
   *
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, its {@link SecurityManager#checkRead(String) checkRead}
   *          method denies read access to the file.
  */
  static isSymbolicLink(path: Path): boolean;
  /**
   * Tests whether a file is a directory.
   *
   *  The `options` array may be used to indicate how symbolic links
   * are handled for the case that the file is a symbolic link. By default,
   * symbolic links are followed and the file attribute of the final target
   * of the link is read. If the option {@link LinkOption#NOFOLLOW_LINKS
   * NOFOLLOW_LINKS} is present then symbolic links are not followed.
   *
   *  Where it is required to distinguish an I/O exception from the case
   * that the file is not a directory then the file attributes can be
   * read with the {@link #readAttributes(Path,Class,LinkOption[])
   * readAttributes} method and the file type tested with the {@link
   * BasicFileAttributes#isDirectory} method.
   *
   * @param   path
   *          the path to the file to test
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  `true` if the file is a directory; `false` if
   *          the file does not exist, is not a directory, or it cannot
   *          be determined if the file is a directory or not.
   *
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, its {@link SecurityManager#checkRead(String) checkRead}
   *          method denies read access to the file.
  */
  static isDirectory(path: Path, ...options: LinkOption[]): boolean;
  /**
   * Tests whether a file is a regular file with opaque content.
   *
   *  The `options` array may be used to indicate how symbolic links
   * are handled for the case that the file is a symbolic link. By default,
   * symbolic links are followed and the file attribute of the final target
   * of the link is read. If the option {@link LinkOption#NOFOLLOW_LINKS
   * NOFOLLOW_LINKS} is present then symbolic links are not followed.
   *
   *  Where it is required to distinguish an I/O exception from the case
   * that the file is not a regular file then the file attributes can be
   * read with the {@link #readAttributes(Path,Class,LinkOption[])
   * readAttributes} method and the file type tested with the {@link
   * BasicFileAttributes#isRegularFile} method.
   *
   * @param   path
   *          the path to the file
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  `true` if the file is a regular file; `false` if
   *          the file does not exist, is not a regular file, or it
   *          cannot be determined if the file is a regular file or not.
   *
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, its {@link SecurityManager#checkRead(String) checkRead}
   *          method denies read access to the file.
  */
  static isRegularFile(path: Path, ...options: LinkOption[]): boolean;
  /**
   * Returns a file's last modified time.
   *
   *  The `options` array may be used to indicate how symbolic links
   * are handled for the case that the file is a symbolic link. By default,
   * symbolic links are followed and the file attribute of the final target
   * of the link is read. If the option {@link LinkOption#NOFOLLOW_LINKS
   * NOFOLLOW_LINKS} is present then symbolic links are not followed.
   *
   * @param   path
   *          the path to the file
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  a `FileTime` representing the time the file was last
   *          modified, or an implementation specific default when a time
   *          stamp to indicate the time of last modification is not supported
   *          by the file system
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, its {@link SecurityManager#checkRead(String) checkRead}
   *          method denies read access to the file.
   *
   * @see BasicFileAttributes#lastModifiedTime
  */
  static getLastModifiedTime(path: Path, ...options: LinkOption[]): FileTime;
  /**
   * Updates a file's last modified time attribute. The file time is converted
   * to the epoch and precision supported by the file system. Converting from
   * finer to coarser granularities result in precision loss. The behavior of
   * this method when attempting to set the last modified time when it is not
   * supported by the file system or is outside the range supported by the
   * underlying file store is not defined. It may or not fail by throwing an
   * `IOException`.
   *
   *  Usage Example:
   * Suppose we want to set the last modified time to the current time:
   *      *    Path path = ...
   *    FileTime now = FileTime.fromMillis(System.currentTimeMillis());
   *    Files.setLastModifiedTime(path, now);
   * 
   *
   * @param   path
   *          the path to the file
   * @param   time
   *          the new last modified time
   *
   * @return  the given path
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, its {@link SecurityManager#checkWrite(String)
   *          checkWrite} method denies write access to the file.
   *
   * @see BasicFileAttributeView#setTimes
  */
  static setLastModifiedTime(path: Path, time: FileTime): Path;
  /**
   * Returns the size of a file (in bytes). The size may differ from the
   * actual size on the file system due to compression, support for sparse
   * files, or other reasons. The size of files that are not {@link
   * #isRegularFile regular} files is implementation specific and
   * therefore unspecified.
   *
   * @param   path
   *          the path to the file
   *
   * @return  the file size, in bytes
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, its {@link SecurityManager#checkRead(String) checkRead}
   *          method denies read access to the file.
   *
   * @see BasicFileAttributes#size
  */
  static size(path: Path): number;
  /**
   * Tests whether a file exists.
   *
   *  The `options` parameter may be used to indicate how symbolic links
   * are handled for the case that the file is a symbolic link. By default,
   * symbolic links are followed. If the option {@link LinkOption#NOFOLLOW_LINKS
   * NOFOLLOW_LINKS} is present then symbolic links are not followed.
   *
   *  Note that the result of this method is immediately outdated. If this
   * method indicates the file exists then there is no guarantee that a
   * subsequent access will succeed. Care should be taken when using this
   * method in security sensitive applications.
   *
   * @param   path
   *          the path to the file to test
   * @param   options
   *          options indicating how symbolic links are handled
   * .
   * @return  `true` if the file exists; `false` if the file does
   *          not exist or its existence cannot be determined.
   *
   * @throws  SecurityException
   *          In the case of the default provider, the {@link
   *          SecurityManager#checkRead(String)} is invoked to check
   *          read access to the file.
   *
   * @see #notExists
  */
  static exists(path: Path, ...options: LinkOption[]): boolean;
  /**
   * Tests whether the file located by this path does not exist. This method
   * is intended for cases where it is required to take action when it can be
   * confirmed that a file does not exist.
   *
   *  The `options` parameter may be used to indicate how symbolic links
   * are handled for the case that the file is a symbolic link. By default,
   * symbolic links are followed. If the option {@link LinkOption#NOFOLLOW_LINKS
   * NOFOLLOW_LINKS} is present then symbolic links are not followed.
   *
   *  Note that this method is not the complement of the {@link #exists
   * exists} method. Where it is not possible to determine if a file exists
   * or not then both methods return `false`. As with the `exists`
   * method, the result of this method is immediately outdated. If this
   * method indicates the file does exist then there is no guarantee that a
   * subsequent attempt to create the file will succeed. Care should be taken
   * when using this method in security sensitive applications.
   *
   * @param   path
   *          the path to the file to test
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  `true` if the file does not exist; `false` if the
   *          file exists or its existence cannot be determined
   *
   * @throws  SecurityException
   *          In the case of the default provider, the {@link
   *          SecurityManager#checkRead(String)} is invoked to check
   *          read access to the file.
  */
  static notExists(path: Path, ...options: LinkOption[]): boolean;
  /**
   * Tests whether a file is readable. This method checks that a file exists
   * and that this Java virtual machine has appropriate privileges that would
   * allow it open the file for reading. Depending on the implementation, this
   * method may require to read file permissions, access control lists, or
   * other file attributes in order to check the effective access to the file.
   * Consequently, this method may not be atomic with respect to other file
   * system operations.
   *
   *  Note that the result of this method is immediately outdated, there is
   * no guarantee that a subsequent attempt to open the file for reading will
   * succeed (or even that it will access the same file). Care should be taken
   * when using this method in security sensitive applications.
   *
   * @param   path
   *          the path to the file to check
   *
   * @return  `true` if the file exists and is readable; `false`
   *          if the file does not exist, read access would be denied because
   *          the Java virtual machine has insufficient privileges, or access
   *          cannot be determined
   *
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          is invoked to check read access to the file.
  */
  static isReadable(path: Path): boolean;
  /**
   * Tests whether a file is writable. This method checks that a file exists
   * and that this Java virtual machine has appropriate privileges that would
   * allow it open the file for writing. Depending on the implementation, this
   * method may require to read file permissions, access control lists, or
   * other file attributes in order to check the effective access to the file.
   * Consequently, this method may not be atomic with respect to other file
   * system operations.
   *
   *  Note that result of this method is immediately outdated, there is no
   * guarantee that a subsequent attempt to open the file for writing will
   * succeed (or even that it will access the same file). Care should be taken
   * when using this method in security sensitive applications.
   *
   * @param   path
   *          the path to the file to check
   *
   * @return  `true` if the file exists and is writable; `false`
   *          if the file does not exist, write access would be denied because
   *          the Java virtual machine has insufficient privileges, or access
   *          cannot be determined
   *
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          is invoked to check write access to the file.
  */
  static isWritable(path: Path): boolean;
  /**
   * Tests whether a file is executable. This method checks that a file exists
   * and that this Java virtual machine has appropriate privileges to {@link
   * Runtime#exec execute} the file. The semantics may differ when checking
   * access to a directory. For example, on UNIX systems, checking for
   * execute access checks that the Java virtual machine has permission to
   * search the directory in order to access file or subdirectories.
   *
   *  Depending on the implementation, this method may require to read file
   * permissions, access control lists, or other file attributes in order to
   * check the effective access to the file. Consequently, this method may not
   * be atomic with respect to other file system operations.
   *
   *  Note that the result of this method is immediately outdated, there is
   * no guarantee that a subsequent attempt to execute the file will succeed
   * (or even that it will access the same file). Care should be taken when
   * using this method in security sensitive applications.
   *
   * @param   path
   *          the path to the file to check
   *
   * @return  `true` if the file exists and is executable; `false`
   *          if the file does not exist, execute access would be denied because
   *          the Java virtual machine has insufficient privileges, or access
   *          cannot be determined
   *
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkExec(String)
   *          checkExec} is invoked to check execute access to the file.
  */
  static isExecutable(path: Path): boolean;
  /**
   * Walks a file tree.
   *
   *  This method walks a file tree rooted at a given starting file. The
   * file tree traversal is depth-first with the given {@link
   * FileVisitor} invoked for each file encountered. File tree traversal
   * completes when all accessible files in the tree have been visited, or a
   * visit method returns a result of {@link FileVisitResult#TERMINATE
   * TERMINATE}. Where a visit method terminates due an `IOException`,
   * an uncaught error, or runtime exception, then the traversal is terminated
   * and the error or exception is propagated to the caller of this method.
   *
   *  For each file encountered this method attempts to read its {@link
   * java.nio.file.attribute.BasicFileAttributes}. If the file is not a
   * directory then the {@link FileVisitor#visitFile visitFile} method is
   * invoked with the file attributes. If the file attributes cannot be read,
   * due to an I/O exception, then the {@link FileVisitor#visitFileFailed
   * visitFileFailed} method is invoked with the I/O exception.
   *
   *  Where the file is a directory, and the directory could not be opened,
   * then the `visitFileFailed` method is invoked with the I/O exception,
   * after which, the file tree walk continues, by default, at the next
   * sibling of the directory.
   *
   *  Where the directory is opened successfully, then the entries in the
   * directory, and their descendants are visited. When all entries
   * have been visited, or an I/O error occurs during iteration of the
   * directory, then the directory is closed and the visitor's {@link
   * FileVisitor#postVisitDirectory postVisitDirectory} method is invoked.
   * The file tree walk then continues, by default, at the next sibling
   * of the directory.
   *
   *  By default, symbolic links are not automatically followed by this
   * method. If the `options` parameter contains the {@link
   * FileVisitOption#FOLLOW_LINKS FOLLOW_LINKS} option then symbolic links are
   * followed. When following links, and the attributes of the target cannot
   * be read, then this method attempts to get the `BasicFileAttributes`
   * of the link. If they can be read then the `visitFile` method is
   * invoked with the attributes of the link (otherwise the `visitFileFailed`
   * method is invoked as specified above).
   *
   *  If the `options` parameter contains the {@link
   * FileVisitOption#FOLLOW_LINKS FOLLOW_LINKS} option then this method keeps
   * track of directories visited so that cycles can be detected. A cycle
   * arises when there is an entry in a directory that is an ancestor of the
   * directory. Cycle detection is done by recording the {@link
   * java.nio.file.attribute.BasicFileAttributes#fileKey file-key} of directories,
   * or if file keys are not available, by invoking the {@link #isSameFile
   * isSameFile} method to test if a directory is the same file as an
   * ancestor. When a cycle is detected it is treated as an I/O error, and the
   * {@link FileVisitor#visitFileFailed visitFileFailed} method is invoked with
   * an instance of {@link FileSystemLoopException}.
   *
   *  The `maxDepth` parameter is the maximum number of levels of
   * directories to visit. A value of `0` means that only the starting
   * file is visited, unless denied by the security manager. A value of
   * {@link Integer#MAX_VALUE MAX_VALUE} may be used to indicate that all
   * levels should be visited. The `visitFile` method is invoked for all
   * files, including directories, encountered at `maxDepth`, unless the
   * basic file attributes cannot be read, in which case the `     * visitFileFailed` method is invoked.
   *
   *  If a visitor returns a result of `null` then `     * NullPointerException` is thrown.
   *
   *  When a security manager is installed and it denies access to a file
   * (or directory), then it is ignored and the visitor is not invoked for
   * that file (or directory).
   *
   * @param   start
   *          the starting file
   * @param   options
   *          options to configure the traversal
   * @param   maxDepth
   *          the maximum number of directory levels to visit
   * @param   visitor
   *          the file visitor to invoke for each file
   *
   * @return  the starting file
   *
   * @throws  IllegalArgumentException
   *          if the `maxDepth` parameter is negative
   * @throws  SecurityException
   *          If the security manager denies access to the starting file.
   *          In the case of the default provider, the {@link
   *          SecurityManager#checkRead(String) checkRead} method is invoked
   *          to check read access to the directory.
   * @throws  IOException
   *          if an I/O error is thrown by a visitor method
  */
  static walkFileTree(start: Path, options: Set<FileVisitOption>, maxDepth: number, visitor: FileVisitor<any>): Path;
  /**
   * Walks a file tree.
   *
   *  This method works as if invoking it were equivalent to evaluating the
   * expression:
   *      * walkFileTree(start, EnumSet.noneOf(FileVisitOption.class), Integer.MAX_VALUE, visitor)
   * 
   * In other words, it does not follow symbolic links, and visits all levels
   * of the file tree.
   *
   * @param   start
   *          the starting file
   * @param   visitor
   *          the file visitor to invoke for each file
   *
   * @return  the starting file
   *
   * @throws  SecurityException
   *          If the security manager denies access to the starting file.
   *          In the case of the default provider, the {@link
   *          SecurityManager#checkRead(String) checkRead} method is invoked
   *          to check read access to the directory.
   * @throws  IOException
   *          if an I/O error is thrown by a visitor method
  */
  static walkFileTree(start: Path, visitor: FileVisitor<any>): Path;
  /**
   * Opens a file for reading, returning a `BufferedReader` that may be
   * used to read text from the file in an efficient manner. Bytes from the
   * file are decoded into characters using the specified charset. Reading
   * commences at the beginning of the file.
   *
   *  The `Reader` methods that read from the file throw `     * IOException` if a malformed or unmappable byte sequence is read.
   *
   * @param   path
   *          the path to the file
   * @param   cs
   *          the charset to use for decoding
   *
   * @return  a new buffered reader, with default buffer size, to read text
   *          from the file
   *
   * @throws  IOException
   *          if an I/O error occurs opening the file
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
   *
   * @see #readAllLines
  */
  static newBufferedReader(path: Path, cs: Charset): BufferedReader;
  /**
   * Opens a file for reading, returning a `BufferedReader` to read text
   * from the file in an efficient manner. Bytes from the file are decoded into
   * characters using the {@link StandardCharsets#UTF_8 UTF-8} {@link Charset
   * charset}.
   *
   *  This method works as if invoking it were equivalent to evaluating the
   * expression:
   * {@code
   * Files.newBufferedReader(path, StandardCharsets.UTF_8)
   * }
   *
   * @param   path
   *          the path to the file
   *
   * @return  a new buffered reader, with default buffer size, to read text
   *          from the file
   *
   * @throws  IOException
   *          if an I/O error occurs opening the file
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
   *
   * @since 1.8
  */
  static newBufferedReader(path: Path): BufferedReader;
  /**
   * Opens or creates a file for writing, returning a `BufferedWriter`
   * that may be used to write text to the file in an efficient manner.
   * The `options` parameter specifies how the file is created or
   * opened. If no options are present then this method works as if the {@link
   * StandardOpenOption#CREATE CREATE}, {@link
   * StandardOpenOption#TRUNCATE_EXISTING TRUNCATE_EXISTING}, and {@link
   * StandardOpenOption#WRITE WRITE} options are present. In other words, it
   * opens the file for writing, creating the file if it doesn't exist, or
   * initially truncating an existing {@link #isRegularFile regular-file} to
   * a size of `0` if it exists.
   *
   *  The `Writer` methods to write text throw `IOException`
   * if the text cannot be encoded using the specified charset.
   *
   * @param   path
   *          the path to the file
   * @param   cs
   *          the charset to use for encoding
   * @param   options
   *          options specifying how the file is opened
   *
   * @return  a new buffered writer, with default buffer size, to write text
   *          to the file
   *
   * @throws  IllegalArgumentException
   *          if `options` contains an invalid combination of options
   * @throws  IOException
   *          if an I/O error occurs opening or creating the file
   * @throws  UnsupportedOperationException
   *          if an unsupported option is specified
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the file. The {@link
   *          SecurityManager#checkDelete(String) checkDelete} method is
   *          invoked to check delete access if the file is opened with the
   *          `DELETE_ON_CLOSE` option.
   *
   * @see #write(Path,Iterable,Charset,OpenOption[])
  */
  static newBufferedWriter(path: Path, cs: Charset, ...options: OpenOption[]): BufferedWriter;
  /**
   * Opens or creates a file for writing, returning a `BufferedWriter`
   * to write text to the file in an efficient manner. The text is encoded
   * into bytes for writing using the {@link StandardCharsets#UTF_8 UTF-8}
   * {@link Charset charset}.
   *
   *  This method works as if invoking it were equivalent to evaluating the
   * expression:
   * {@code
   * Files.newBufferedWriter(path, StandardCharsets.UTF_8, options)
   * }
   *
   * @param   path
   *          the path to the file
   * @param   options
   *          options specifying how the file is opened
   *
   * @return  a new buffered writer, with default buffer size, to write text
   *          to the file
   *
   * @throws  IllegalArgumentException
   *          if `options` contains an invalid combination of options
   * @throws  IOException
   *          if an I/O error occurs opening or creating the file
   * @throws  UnsupportedOperationException
   *          if an unsupported option is specified
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the file. The {@link
   *          SecurityManager#checkDelete(String) checkDelete} method is
   *          invoked to check delete access if the file is opened with the
   *          `DELETE_ON_CLOSE` option.
   *
   * @since 1.8
  */
  static newBufferedWriter(path: Path, ...options: OpenOption[]): BufferedWriter;
  /**
   * Copies all bytes from an input stream to a file. On return, the input
   * stream will be at end of stream.
   *
   *  By default, the copy fails if the target file already exists or is a
   * symbolic link. If the {@link StandardCopyOption#REPLACE_EXISTING
   * REPLACE_EXISTING} option is specified, and the target file already exists,
   * then it is replaced if it is not a non-empty directory. If the target
   * file exists and is a symbolic link, then the symbolic link is replaced.
   * In this release, the `REPLACE_EXISTING` option is the only option
   * required to be supported by this method. Additional options may be
   * supported in future releases.
   *
   *   If an I/O error occurs reading from the input stream or writing to
   * the file, then it may do so after the target file has been created and
   * after some bytes have been read or written. Consequently the input
   * stream may not be at end of stream and may be in an inconsistent state.
   * It is strongly recommended that the input stream be promptly closed if an
   * I/O error occurs.
   *
   *  This method may block indefinitely reading from the input stream (or
   * writing to the file). The behavior for the case that the input stream is
   * asynchronously closed or the thread interrupted during the copy is
   * highly input stream and file system provider specific and therefore not
   * specified.
   *
   *  Usage example: Suppose we want to capture a web page and save
   * it to a file:
   *      *     Path path = ...
   *     URI u = URI.create("http://www.example.com/");
   *     try (InputStream in = u.toURL().openStream()) {
   *         Files.copy(in, path);
   *     }
   * 
   *
   * @param   in
   *          the input stream to read from
   * @param   target
   *          the path to the file
   * @param   options
   *          options specifying how the copy should be done
   *
   * @return  the number of bytes read or written
   *
   * @throws  IOException
   *          if an I/O error occurs when reading or writing
   * @throws  FileAlreadyExistsException
   *          if the target file exists but cannot be replaced because the
   *          `REPLACE_EXISTING` option is not specified (optional
   *          specific exception)
   * @throws  DirectoryNotEmptyException
   *          the `REPLACE_EXISTING` option is specified but the file
   *          cannot be replaced because it is a non-empty directory
   *          (optional specific exception)     *
   * @throws  UnsupportedOperationException
   *          if `options` contains a copy option that is not supported
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the file. Where the
   *          `REPLACE_EXISTING` option is specified, the security
   *          manager's {@link SecurityManager#checkDelete(String) checkDelete}
   *          method is invoked to check that an existing file can be deleted.
  */
  static copy(in_: InputStream, target: Path, ...options: CopyOption[]): number;
  /**
   * Copies all bytes from a file to an output stream.
   *
   *  If an I/O error occurs reading from the file or writing to the output
   * stream, then it may do so after some bytes have been read or written.
   * Consequently the output stream may be in an inconsistent state. It is
   * strongly recommended that the output stream be promptly closed if an I/O
   * error occurs.
   *
   *  This method may block indefinitely writing to the output stream (or
   * reading from the file). The behavior for the case that the output stream
   * is asynchronously closed or the thread interrupted during the copy
   * is highly output stream and file system provider specific and therefore
   * not specified.
   *
   *  Note that if the given output stream is {@link java.io.Flushable}
   * then its {@link java.io.Flushable#flush flush} method may need to invoked
   * after this method completes so as to flush any buffered output.
   *
   * @param   source
   *          the  path to the file
   * @param   out
   *          the output stream to write to
   *
   * @return  the number of bytes read or written
   *
   * @throws  IOException
   *          if an I/O error occurs when reading or writing
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
  */
  static copy(source: Path, out: OutputStream): number;
  /**
   * Reads all the bytes from a file. The method ensures that the file is
   * closed when all bytes have been read or an I/O error, or other runtime
   * exception, is thrown.
   *
   *  Note that this method is intended for simple cases where it is
   * convenient to read all bytes into a byte array. It is not intended for
   * reading in large files.
   *
   * @param   path
   *          the path to the file
   *
   * @return  a byte array containing the bytes read from the file
   *
   * @throws  IOException
   *          if an I/O error occurs reading from the stream
   * @throws  OutOfMemoryError
   *          if an array of the required size cannot be allocated, for
   *          example the file is larger that `2GB`
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
  */
  static readAllBytes(path: Path): number[];
  /**
   * Reads all content from a file into a string, decoding from bytes to characters
   * using the {@link StandardCharsets#UTF_8 UTF-8} {@link Charset charset}.
   * The method ensures that the file is closed when all content have been read
   * or an I/O error, or other runtime exception, is thrown.
   *
   *  This method is equivalent to:
   * `readString(path, StandardCharsets.UTF_8) `
   *
   * @param   path the path to the file
   *
   * @return  a String containing the content read from the file
   *
   * @throws  IOException
   *          if an I/O error occurs reading from the file or a malformed or
   *          unmappable byte sequence is read
   * @throws  OutOfMemoryError
   *          if the file is extremely large, for example larger than `2GB`
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
   *
   * @since 11
  */
  static readString(path: Path): string;
  /**
   * Reads all characters from a file into a string, decoding from bytes to characters
   * using the specified {@linkplain Charset charset}.
   * The method ensures that the file is closed when all content have been read
   * or an I/O error, or other runtime exception, is thrown.
   *
   *  This method reads all content including the line separators in the middle
   * and/or at the end. The resulting string will contain line separators as they
   * appear in the file.
   *
   * @apiNote
   * This method is intended for simple cases where it is appropriate and convenient
   * to read the content of a file into a String. It is not intended for reading
   * very large files.
   *
   *
   *
   * @param   path the path to the file
   * @param   cs the charset to use for decoding
   *
   * @return  a String containing the content read from the file
   *
   * @throws  IOException
   *          if an I/O error occurs reading from the file or a malformed or
   *          unmappable byte sequence is read
   * @throws  OutOfMemoryError
   *          if the file is extremely large, for example larger than `2GB`
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
   *
   * @since 11
  */
  static readString(path: Path, cs: Charset): string;
  /**
   * Read all lines from a file. This method ensures that the file is
   * closed when all bytes have been read or an I/O error, or other runtime
   * exception, is thrown. Bytes from the file are decoded into characters
   * using the specified charset.
   *
   *  This method recognizes the following as line terminators:
   * 
   *    \u000D followed by \u000A,
   *     CARRIAGE RETURN followed by LINE FEED 
   *    \u000A, LINE FEED 
   *    \u000D, CARRIAGE RETURN 
   * 
   *  Additional Unicode line terminators may be recognized in future
   * releases.
   *
   *  Note that this method is intended for simple cases where it is
   * convenient to read all lines in a single operation. It is not intended
   * for reading in large files.
   *
   * @param   path
   *          the path to the file
   * @param   cs
   *          the charset to use for decoding
   *
   * @return  the lines from the file as a `List`; whether the `     *          List` is modifiable or not is implementation dependent and
   *          therefore not specified
   *
   * @throws  IOException
   *          if an I/O error occurs reading from the file or a malformed or
   *          unmappable byte sequence is read
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
   *
   * @see #newBufferedReader
  */
  static readAllLines(path: Path, cs: Charset): string[];
  /**
   * Read all lines from a file. Bytes from the file are decoded into characters
   * using the {@link StandardCharsets#UTF_8 UTF-8} {@link Charset charset}.
   *
   *  This method works as if invoking it were equivalent to evaluating the
   * expression:
   * {@code
   * Files.readAllLines(path, StandardCharsets.UTF_8)
   * }
   *
   * @param   path
   *          the path to the file
   *
   * @return  the lines from the file as a `List`; whether the `     *          List` is modifiable or not is implementation dependent and
   *          therefore not specified
   *
   * @throws  IOException
   *          if an I/O error occurs reading from the file or a malformed or
   *          unmappable byte sequence is read
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
   *
   * @since 1.8
  */
  static readAllLines(path: Path): string[];
  /**
   * Writes bytes to a file. The `options` parameter specifies how
   * the file is created or opened. If no options are present then this method
   * works as if the {@link StandardOpenOption#CREATE CREATE}, {@link
   * StandardOpenOption#TRUNCATE_EXISTING TRUNCATE_EXISTING}, and {@link
   * StandardOpenOption#WRITE WRITE} options are present. In other words, it
   * opens the file for writing, creating the file if it doesn't exist, or
   * initially truncating an existing {@link #isRegularFile regular-file} to
   * a size of `0`. All bytes in the byte array are written to the file.
   * The method ensures that the file is closed when all bytes have been
   * written (or an I/O error or other runtime exception is thrown). If an I/O
   * error occurs then it may do so after the file has been created or
   * truncated, or after some bytes have been written to the file.
   *
   *  Usage example: By default the method creates a new file or
   * overwrites an existing file. Suppose you instead want to append bytes
   * to an existing file:
   *      *     Path path = ...
   *     byte[] bytes = ...
   *     Files.write(path, bytes, StandardOpenOption.APPEND);
   * 
   *
   * @param   path
   *          the path to the file
   * @param   bytes
   *          the byte array with the bytes to write
   * @param   options
   *          options specifying how the file is opened
   *
   * @return  the path
   *
   * @throws  IllegalArgumentException
   *          if `options` contains an invalid combination of options
   * @throws  IOException
   *          if an I/O error occurs writing to or creating the file
   * @throws  UnsupportedOperationException
   *          if an unsupported option is specified
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the file. The {@link
   *          SecurityManager#checkDelete(String) checkDelete} method is
   *          invoked to check delete access if the file is opened with the
   *          `DELETE_ON_CLOSE` option.
  */
  static write(path: Path, bytes: number[], ...options: OpenOption[]): Path;
  /**
   * Write lines of text to a file. Each line is a char sequence and is
   * written to the file in sequence with each line terminated by the
   * platform's line separator, as defined by the system property `     * line.separator`. Characters are encoded into bytes using the specified
   * charset.
   *
   *  The `options` parameter specifies how the file is created
   * or opened. If no options are present then this method works as if the
   * {@link StandardOpenOption#CREATE CREATE}, {@link
   * StandardOpenOption#TRUNCATE_EXISTING TRUNCATE_EXISTING}, and {@link
   * StandardOpenOption#WRITE WRITE} options are present. In other words, it
   * opens the file for writing, creating the file if it doesn't exist, or
   * initially truncating an existing {@link #isRegularFile regular-file} to
   * a size of `0`. The method ensures that the file is closed when all
   * lines have been written (or an I/O error or other runtime exception is
   * thrown). If an I/O error occurs then it may do so after the file has
   * been created or truncated, or after some bytes have been written to the
   * file.
   *
   * @param   path
   *          the path to the file
   * @param   lines
   *          an object to iterate over the char sequences
   * @param   cs
   *          the charset to use for encoding
   * @param   options
   *          options specifying how the file is opened
   *
   * @return  the path
   *
   * @throws  IllegalArgumentException
   *          if `options` contains an invalid combination of options
   * @throws  IOException
   *          if an I/O error occurs writing to or creating the file, or the
   *          text cannot be encoded using the specified charset
   * @throws  UnsupportedOperationException
   *          if an unsupported option is specified
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the file. The {@link
   *          SecurityManager#checkDelete(String) checkDelete} method is
   *          invoked to check delete access if the file is opened with the
   *          `DELETE_ON_CLOSE` option.
  */
  static write(path: Path, lines: Iterable<CharSequence>, cs: Charset, ...options: OpenOption[]): Path;
  /**
   * Write lines of text to a file. Characters are encoded into bytes using
   * the {@link StandardCharsets#UTF_8 UTF-8} {@link Charset charset}.
   *
   *  This method works as if invoking it were equivalent to evaluating the
   * expression:
   * {@code
   * Files.write(path, lines, StandardCharsets.UTF_8, options);
   * }
   *
   * @param   path
   *          the path to the file
   * @param   lines
   *          an object to iterate over the char sequences
   * @param   options
   *          options specifying how the file is opened
   *
   * @return  the path
   *
   * @throws  IllegalArgumentException
   *          if `options` contains an invalid combination of options
   * @throws  IOException
   *          if an I/O error occurs writing to or creating the file, or the
   *          text cannot be encoded as `UTF-8`
   * @throws  UnsupportedOperationException
   *          if an unsupported option is specified
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the file. The {@link
   *          SecurityManager#checkDelete(String) checkDelete} method is
   *          invoked to check delete access if the file is opened with the
   *          `DELETE_ON_CLOSE` option.
   *
   * @since 1.8
  */
  static write(path: Path, lines: Iterable<CharSequence>, ...options: OpenOption[]): Path;
  /**
   * Write a {@linkplain java.lang.CharSequence CharSequence} to a file.
   * Characters are encoded into bytes using the
   * {@link StandardCharsets#UTF_8 UTF-8} {@link Charset charset}.
   *
   *  This method is equivalent to:
   * `writeString(path, test, StandardCharsets.UTF_8, options) `
   *
   * @param   path
   *          the path to the file
   * @param   csq
   *          the CharSequence to be written
   * @param   options
   *          options specifying how the file is opened
   *
   * @return  the path
   *
   * @throws  IllegalArgumentException
   *          if `options` contains an invalid combination of options
   * @throws  IOException
   *          if an I/O error occurs writing to or creating the file, or the
   *          text cannot be encoded using the specified charset
   * @throws  UnsupportedOperationException
   *          if an unsupported option is specified
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the file. The {@link
   *          SecurityManager#checkDelete(String) checkDelete} method is
   *          invoked to check delete access if the file is opened with the
   *          `DELETE_ON_CLOSE` option.
   *
   * @since 11
  */
  static writeString(path: Path, csq: CharSequence, ...options: OpenOption[]): Path;
  /**
   * Write a {@linkplain java.lang.CharSequence CharSequence} to a file.
   * Characters are encoded into bytes using the specified
   * {@linkplain java.nio.charset.Charset charset}.
   *
   *  All characters are written as they are, including the line separators in
   * the char sequence. No extra characters are added.
   *
   *  The `options` parameter specifies how the file is created
   * or opened. If no options are present then this method works as if the
   * {@link StandardOpenOption#CREATE CREATE}, {@link
   * StandardOpenOption#TRUNCATE_EXISTING TRUNCATE_EXISTING}, and {@link
   * StandardOpenOption#WRITE WRITE} options are present. In other words, it
   * opens the file for writing, creating the file if it doesn't exist, or
   * initially truncating an existing {@link #isRegularFile regular-file} to
   * a size of `0`.
   *
   *
   * @param   path
   *          the path to the file
   * @param   csq
   *          the CharSequence to be written
   * @param   cs
   *          the charset to use for encoding
   * @param   options
   *          options specifying how the file is opened
   *
   * @return  the path
   *
   * @throws  IllegalArgumentException
   *          if `options` contains an invalid combination of options
   * @throws  IOException
   *          if an I/O error occurs writing to or creating the file, or the
   *          text cannot be encoded using the specified charset
   * @throws  UnsupportedOperationException
   *          if an unsupported option is specified
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the file. The {@link
   *          SecurityManager#checkDelete(String) checkDelete} method is
   *          invoked to check delete access if the file is opened with the
   *          `DELETE_ON_CLOSE` option.
   *
   * @since 11
  */
  static writeString(path: Path, csq: CharSequence, cs: Charset, ...options: OpenOption[]): Path;
  /**
   * Return a lazily populated `Stream`, the elements of
   * which are the entries in the directory.  The listing is not recursive.
   *
   *  The elements of the stream are {@link Path} objects that are
   * obtained as if by {@link Path#resolve(Path) resolving} the name of the
   * directory entry against `dir`. Some file systems maintain special
   * links to the directory itself and the directory's parent directory.
   * Entries representing these links are not included.
   *
   *  The stream is weakly consistent. It is thread safe but does
   * not freeze the directory while iterating, so it may (or may not)
   * reflect updates to the directory that occur after returning from this
   * method.
   *
   *  The returned stream contains a reference to an open directory.
   * The directory is closed by closing the stream.
   *
   *  Operating on a closed stream behaves as if the end of stream
   * has been reached. Due to read-ahead, one or more elements may be
   * returned after the stream has been closed.
   *
   *  If an {@link IOException} is thrown when accessing the directory
   * after this method has returned, it is wrapped in an {@link
   * UncheckedIOException} which will be thrown from the method that caused
   * the access to take place.
   *
   * @apiNote
   * This method must be used within a try-with-resources statement or similar
   * control structure to ensure that the stream's open directory is closed
   * promptly after the stream's operations have completed.
   *
   * @param   dir  The path to the directory
   *
   * @return  The `Stream` describing the content of the
   *          directory
   *
   * @throws  NotDirectoryException
   *          if the file could not otherwise be opened because it is not
   *          a directory (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs when opening the directory
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the directory.
   *
   * @see     #newDirectoryStream(Path)
   * @since   1.8
  */
  static list(dir: Path): Stream<Path>;
  /**
   * Return a `Stream` that is lazily populated with `     * Path` by walking the file tree rooted at a given starting file.  The
   * file tree is traversed depth-first, the elements in the stream
   * are {@link Path} objects that are obtained as if by {@link
   * Path#resolve(Path) resolving} the relative path against `start`.
   *
   *  The `stream` walks the file tree as elements are consumed.
   * The `Stream` returned is guaranteed to have at least one
   * element, the starting file itself. For each file visited, the stream
   * attempts to read its {@link BasicFileAttributes}. If the file is a
   * directory and can be opened successfully, entries in the directory, and
   * their descendants will follow the directory in the stream as
   * they are encountered. When all entries have been visited, then the
   * directory is closed. The file tree walk then continues at the next
   * sibling of the directory.
   *
   *  The stream is weakly consistent. It does not freeze the
   * file tree while iterating, so it may (or may not) reflect updates to
   * the file tree that occur after returned from this method.
   *
   *  By default, symbolic links are not automatically followed by this
   * method. If the `options` parameter contains the {@link
   * FileVisitOption#FOLLOW_LINKS FOLLOW_LINKS} option then symbolic links are
   * followed. When following links, and the attributes of the target cannot
   * be read, then this method attempts to get the `BasicFileAttributes`
   * of the link.
   *
   *  If the `options` parameter contains the {@link
   * FileVisitOption#FOLLOW_LINKS FOLLOW_LINKS} option then the stream keeps
   * track of directories visited so that cycles can be detected. A cycle
   * arises when there is an entry in a directory that is an ancestor of the
   * directory. Cycle detection is done by recording the {@link
   * java.nio.file.attribute.BasicFileAttributes#fileKey file-key} of directories,
   * or if file keys are not available, by invoking the {@link #isSameFile
   * isSameFile} method to test if a directory is the same file as an
   * ancestor. When a cycle is detected it is treated as an I/O error with
   * an instance of {@link FileSystemLoopException}.
   *
   *  The `maxDepth` parameter is the maximum number of levels of
   * directories to visit. A value of `0` means that only the starting
   * file is visited, unless denied by the security manager. A value of
   * {@link Integer#MAX_VALUE MAX_VALUE} may be used to indicate that all
   * levels should be visited.
   *
   *  When a security manager is installed and it denies access to a file
   * (or directory), then it is ignored and not included in the stream.
   *
   *  The returned stream contains references to one or more open directories.
   * The directories are closed by closing the stream.
   *
   *  If an {@link IOException} is thrown when accessing the directory
   * after this method has returned, it is wrapped in an {@link
   * UncheckedIOException} which will be thrown from the method that caused
   * the access to take place.
   *
   * @apiNote
   * This method must be used within a try-with-resources statement or similar
   * control structure to ensure that the stream's open directories are closed
   * promptly after the stream's operations have completed.
   *
   * @param   start
   *          the starting file
   * @param   maxDepth
   *          the maximum number of directory levels to visit
   * @param   options
   *          options to configure the traversal
   *
   * @return  the {@link Stream} of {@link Path}
   *
   * @throws  IllegalArgumentException
   *          if the `maxDepth` parameter is negative
   * @throws  SecurityException
   *          If the security manager denies access to the starting file.
   *          In the case of the default provider, the {@link
   *          SecurityManager#checkRead(String) checkRead} method is invoked
   *          to check read access to the directory.
   * @throws  IOException
   *          if an I/O error is thrown when accessing the starting file.
   * @since   1.8
  */
  static walk(start: Path, maxDepth: number, ...options: FileVisitOption[]): Stream<Path>;
  /**
   * Return a `Stream` that is lazily populated with `     * Path` by walking the file tree rooted at a given starting file.  The
   * file tree is traversed depth-first, the elements in the stream
   * are {@link Path} objects that are obtained as if by {@link
   * Path#resolve(Path) resolving} the relative path against `start`.
   *
   *  This method works as if invoking it were equivalent to evaluating the
   * expression:
   *      * walk(start, Integer.MAX_VALUE, options)
   * 
   * In other words, it visits all levels of the file tree.
   *
   *  The returned stream contains references to one or more open directories.
   * The directories are closed by closing the stream.
   *
   * @apiNote
   * This method must be used within a try-with-resources statement or similar
   * control structure to ensure that the stream's open directories are closed
   * promptly after the stream's operations have completed.
   *
   * @param   start
   *          the starting file
   * @param   options
   *          options to configure the traversal
   *
   * @return  the {@link Stream} of {@link Path}
   *
   * @throws  SecurityException
   *          If the security manager denies access to the starting file.
   *          In the case of the default provider, the {@link
   *          SecurityManager#checkRead(String) checkRead} method is invoked
   *          to check read access to the directory.
   * @throws  IOException
   *          if an I/O error is thrown when accessing the starting file.
   *
   * @see     #walk(Path, int, FileVisitOption...)
   * @since   1.8
  */
  static walk(start: Path, ...options: FileVisitOption[]): Stream<Path>;
  /**
   * Return a `Stream` that is lazily populated with `     * Path` by searching for files in a file tree rooted at a given starting
   * file.
   *
   *  This method walks the file tree in exactly the manner specified by
   * the {@link #walk walk} method. For each file encountered, the given
   * {@link BiPredicate} is invoked with its {@link Path} and {@link
   * BasicFileAttributes}. The `Path` object is obtained as if by
   * {@link Path#resolve(Path) resolving} the relative path against `     * start` and is only included in the returned {@link Stream} if
   * the `BiPredicate` returns true. Compare to calling {@link
   * java.util.stream.Stream#filter filter} on the `Stream`
   * returned by `walk` method, this method may be more efficient by
   * avoiding redundant retrieval of the `BasicFileAttributes`.
   *
   *  The returned stream contains references to one or more open directories.
   * The directories are closed by closing the stream.
   *
   *  If an {@link IOException} is thrown when accessing the directory
   * after returned from this method, it is wrapped in an {@link
   * UncheckedIOException} which will be thrown from the method that caused
   * the access to take place.
   *
   * @apiNote
   * This method must be used within a try-with-resources statement or similar
   * control structure to ensure that the stream's open directories are closed
   * promptly after the stream's operations have completed.
   *
   * @param   start
   *          the starting file
   * @param   maxDepth
   *          the maximum number of directory levels to search
   * @param   matcher
   *          the function used to decide whether a file should be included
   *          in the returned stream
   * @param   options
   *          options to configure the traversal
   *
   * @return  the {@link Stream} of {@link Path}
   *
   * @throws  IllegalArgumentException
   *          if the `maxDepth` parameter is negative
   * @throws  SecurityException
   *          If the security manager denies access to the starting file.
   *          In the case of the default provider, the {@link
   *          SecurityManager#checkRead(String) checkRead} method is invoked
   *          to check read access to the directory.
   * @throws  IOException
   *          if an I/O error is thrown when accessing the starting file.
   *
   * @see     #walk(Path, int, FileVisitOption...)
   * @since   1.8
  */
  static find(start: Path, maxDepth: number, matcher: BiPredicate<Path, BasicFileAttributes>, ...options: FileVisitOption[]): Stream<Path>;
  /**
   * Read all lines from a file as a `Stream`. Unlike {@link
   * #readAllLines(Path, Charset) readAllLines}, this method does not read
   * all lines into a `List`, but instead populates lazily as the stream
   * is consumed.
   *
   *  Bytes from the file are decoded into characters using the specified
   * charset and the same line terminators as specified by `     * readAllLines` are supported.
   *
   *  The returned stream contains a reference to an open file. The file
   * is closed by closing the stream.
   *
   *  The file contents should not be modified during the execution of the
   * terminal stream operation. Otherwise, the result of the terminal stream
   * operation is undefined.
   *
   *  After this method returns, then any subsequent I/O exception that
   * occurs while reading from the file or when a malformed or unmappable byte
   * sequence is read, is wrapped in an {@link UncheckedIOException} that will
   * be thrown from the
   * {@link java.util.stream.Stream} method that caused the read to take
   * place. In case an `IOException` is thrown when closing the file,
   * it is also wrapped as an `UncheckedIOException`.
   *
   * @apiNote
   * This method must be used within a try-with-resources statement or similar
   * control structure to ensure that the stream's open file is closed promptly
   * after the stream's operations have completed.
   *
   * @implNote
   * This implementation supports good parallel stream performance for the
   * standard charsets {@link StandardCharsets#UTF_8 UTF-8},
   * {@link StandardCharsets#US_ASCII US-ASCII} and
   * {@link StandardCharsets#ISO_8859_1 ISO-8859-1}.  Such
   * line-optimal charsets have the property that the encoded bytes
   * of a line feed ('\n') or a carriage return ('\r') are efficiently
   * identifiable from other encoded characters when randomly accessing the
   * bytes of the file.
   *
   *  For non-line-optimal charsets the stream source's
   * spliterator has poor splitting properties, similar to that of a
   * spliterator associated with an iterator or that associated with a stream
   * returned from {@link BufferedReader#lines()}.  Poor splitting properties
   * can result in poor parallel stream performance.
   *
   *  For line-optimal charsets the stream source's spliterator
   * has good splitting properties, assuming the file contains a regular
   * sequence of lines.  Good splitting properties can result in good parallel
   * stream performance.  The spliterator for a line-optimal charset
   * takes advantage of the charset properties (a line feed or a carriage
   * return being efficient identifiable) such that when splitting it can
   * approximately divide the number of covered lines in half.
   *
   * @param   path
   *          the path to the file
   * @param   cs
   *          the charset to use for decoding
   *
   * @return  the lines from the file as a `Stream`
   *
   * @throws  IOException
   *          if an I/O error occurs opening the file
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
   *
   * @see     #readAllLines(Path, Charset)
   * @see     #newBufferedReader(Path, Charset)
   * @see     java.io.BufferedReader#lines()
   * @since   1.8
  */
  static lines(path: Path, cs: Charset): Stream<string>;
  /**
   * Read all lines from a file as a `Stream`. Bytes from the file are
   * decoded into characters using the {@link StandardCharsets#UTF_8 UTF-8}
   * {@link Charset charset}.
   *
   *  The returned stream contains a reference to an open file. The file
   * is closed by closing the stream.
   *
   *  The file contents should not be modified during the execution of the
   * terminal stream operation. Otherwise, the result of the terminal stream
   * operation is undefined.
   *
   *  This method works as if invoking it were equivalent to evaluating the
   * expression:
   * {@code
   * Files.lines(path, StandardCharsets.UTF_8)
   * }
   *
   * @apiNote
   * This method must be used within a try-with-resources statement or similar
   * control structure to ensure that the stream's open file is closed promptly
   * after the stream's operations have completed.
   *
   * @param   path
   *          the path to the file
   *
   * @return  the lines from the file as a `Stream`
   *
   * @throws  IOException
   *          if an I/O error occurs opening the file
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
   *
   * @since 1.8
  */
  static lines(path: Path): Stream<string>;
}
export class DirectoryNotEmptyException extends FileSystemException {
  /**
   * Constructs an instance of this class.
   *
   * @param   dir
   *          a string identifying the directory or `null` if not known
  */
  constructor(dir: string);
}
export class Paths {
  /**
   * Converts a path string, or a sequence of strings that when joined form
   * a path string, to a `Path`.
   *
   * @implSpec
   * This method simply invokes {@link Path#of(String,String...)
   * Path.of(String, String...)} with the given parameters.
   *
   * @param   first
   *          the path string or initial part of the path string
   * @param   more
   *          additional strings to be joined to form the path string
   *
   * @return  the resulting `Path`
   *
   * @throws  InvalidPathException
   *          if the path string cannot be converted to a `Path`
   *
   * @see FileSystem#getPath
   * @see Path#of(String,String...)
  */
  static get(first: string, ...more: string[]): Path;
  /**
   * Converts the given URI to a {@link Path} object.
   *
   * @implSpec
   * This method simply invokes {@link Path#of(URI) Path.of(URI)} with the
   * given parameter.
   *
   * @param   uri
   *          the URI to convert
   *
   * @return  the resulting `Path`
   *
   * @throws  IllegalArgumentException
   *          if preconditions on the `uri` parameter do not hold. The
   *          format of the URI is provider specific.
   * @throws  FileSystemNotFoundException
   *          The file system, identified by the URI, does not exist and
   *          cannot be created automatically, or the provider identified by
   *          the URI's scheme component is not installed
   * @throws  SecurityException
   *          if a security manager is installed and it denies an unspecified
   *          permission to access the file system
   *
   * @see Path#of(URI)
  */
  static get(uri: URI): Path;
}
export class ClosedDirectoryStreamException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class WatchKey {
  /**
   * Tells whether or not this watch key is valid.
   *
   *  A watch key is valid upon creation and remains until it is cancelled,
   * or its watch service is closed.
   *
   * @return  `true` if, and only if, this watch key is valid
  */
  isValid(): boolean;
  /**
   * Retrieves and removes all pending events for this watch key, returning
   * a `List` of the events that were retrieved.
   *
   *  Note that this method does not wait if there are no events pending.
   *
   * @return  the list of the events retrieved; may be empty
  */
  pollEvents(): WatchEvent<any>[];
  /**
   * Resets this watch key.
   *
   *  If this watch key has been cancelled or this watch key is already in
   * the ready state then invoking this method has no effect. Otherwise
   * if there are pending events for the object then this watch key is
   * immediately re-queued to the watch service. If there are no pending
   * events then the watch key is put into the ready state and will remain in
   * that state until an event is detected or the watch key is cancelled.
   *
   * @return  `true` if the watch key is valid and has been reset, and
   *          `false` if the watch key could not be reset because it is
   *          no longer {@link #isValid valid}
  */
  reset(): boolean;
  /**
   * Cancels the registration with the watch service. Upon return the watch key
   * will be invalid. If the watch key is enqueued, waiting to be retrieved
   * from the watch service, then it will remain in the queue until it is
   * removed. Pending events, if any, remain pending and may be retrieved by
   * invoking the {@link #pollEvents pollEvents} method after the key is
   * cancelled.
   *
   *  If this watch key has already been cancelled then invoking this
   * method has no effect.  Once cancelled, a watch key remains forever invalid.
  */
  cancel(): void;
  /**
   * Returns the object for which this watch key was created. This method will
   * continue to return the object even after the key is cancelled.
   *
   *  As the `WatchService` is intended to map directly on to the
   * native file event notification facility (where available) then many of
   * details on how registered objects are watched is highly implementation
   * specific. When watching a directory for changes for example, and the
   * directory is moved or renamed in the file system, there is no guarantee
   * that the watch key will be cancelled and so the object returned by this
   * method may no longer be a valid path to the directory.
   *
   * @return the object for which this watch key was created
  */
  watchable(): Watchable;
}
export class FileSystemException extends IOException {
  /**
   * Constructs an instance of this class. This constructor should be used
   * when an operation involving one file fails and there isn't any additional
   * information to explain the reason.
   *
   * @param   file
   *          a string identifying the file or `null` if not known.
  */
  constructor(file: string);
  /**
   * Constructs an instance of this class. This constructor should be used
   * when an operation involving two files fails, or there is additional
   * information to explain the reason.
   *
   * @param   file
   *          a string identifying the file or `null` if not known.
   * @param   other
   *          a string identifying the other file or `null` if there
   *          isn't another file or if not known
   * @param   reason
   *          a reason message with additional information or `null`
  */
  constructor(file: string, other: string, reason: string);
  /**
   * Returns the file used to create this exception.
   *
   * @return  the file (can be `null`)
  */
  getFile(): string;
  /**
   * Returns the other file used to create this exception.
   *
   * @return  the other file (can be `null`)
  */
  getOtherFile(): string;
  /**
   * Returns the string explaining why the file system operation failed.
   *
   * @return  the string explaining why the file system operation failed
  */
  getReason(): string;
  /**
   * Returns the detail message string.
  */
  getMessage(): string;
}
export class AccessMode extends Enum<AccessMode> {
  /**
   * Test read access.
  */
  static readonly READ: AccessMode;
  /**
   * Test write access.
  */
  static readonly WRITE: AccessMode;
  /**
   * Test execute access.
  */
  static readonly EXECUTE: AccessMode;
  static valueOf(name: string): AccessMode;
  static values(): AccessMode[];
  /**
   * Returns the enum constant of the specified enum class with the
   * specified name.  The name must match exactly an identifier used
   * to declare an enum constant in this class.  (Extraneous whitespace
   * characters are not permitted.)
   *
   * Note that for a particular enum class `T`, the
   * implicitly declared `public static T valueOf(String)`
   * method on that enum may be used instead of this method to map
   * from a name to the corresponding enum constant.  All the
   * constants of an enum class can be obtained by calling the
   * implicit `public static T[] values()` method of that
   * class.
   *
   * @param  The enum class whose constant is to be returned
   * @param enumClass the `Class` object of the enum class from which
   *      to return a constant
   * @param name the name of the constant to return
   * @return the enum constant of the specified enum class with the
   *      specified name
   * @throws IllegalArgumentException if the specified enum class has
   *         no constant with the specified name, or the specified
   *         class object does not represent an enum class
   * @throws NullPointerException if `enumClass` or `name`
   *         is null
   * @since 1.5
  */
  static valueOf<T>(enumClass: Class<T>, name: string): T;
}
export class FileSystemLoopException extends FileSystemException {
  /**
   * Constructs an instance of this class.
   *
   * @param   file
   *          a string identifying the file causing the cycle or `null` if
   *          not known
  */
  constructor(file: string);
}
export class FileSystemNotFoundException extends RuntimeException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
  /**
   * Constructs an instance of this class.
   *
   * @param   msg
   *          the detail message
  */
  constructor(msg: string);
}
export class OpenOption {

}
export class WatchService extends Closeable {
  /**
   * Closes this watch service.
   *
   *  If a thread is currently blocked in the {@link #take take} or {@link
   * #poll(long,TimeUnit) poll} methods waiting for a key to be queued then
   * it immediately receives a {@link ClosedWatchServiceException}. Any
   * valid keys associated with this watch service are {@link WatchKey#isValid
   * invalidated}.
   *
   *  After a watch service is closed, any further attempt to invoke
   * operations upon it will throw {@link ClosedWatchServiceException}.
   * If this watch service is already closed then invoking this method
   * has no effect.
   *
   * @throws  IOException
   *          if an I/O error occurs
  */
  close(): void;
  /**
   * Retrieves and removes the next watch key, or `null` if none are
   * present.
   *
   * @return  the next watch key, or `null`
   *
   * @throws  ClosedWatchServiceException
   *          if this watch service is closed
  */
  poll(): WatchKey;
  /**
   * Retrieves and removes the next watch key, waiting if necessary up to the
   * specified wait time if none are yet present.
   *
   * @param   timeout
   *          how to wait before giving up, in units of unit
   * @param   unit
   *          a `TimeUnit` determining how to interpret the timeout
   *          parameter
   *
   * @return  the next watch key, or `null`
   *
   * @throws  ClosedWatchServiceException
   *          if this watch service is closed, or it is closed while waiting
   *          for the next key
   * @throws  InterruptedException
   *          if interrupted while waiting
  */
  poll(timeout: number, unit: TimeUnit): WatchKey;
  /**
   * Retrieves and removes next watch key, waiting if none are yet present.
   *
   * @return  the next watch key
   *
   * @throws  ClosedWatchServiceException
   *          if this watch service is closed, or it is closed while waiting
   *          for the next key
   * @throws  InterruptedException
   *          if interrupted while waiting
  */
  take(): WatchKey;
}
export class FileVisitor<T> {
  /**
   * Invoked for a directory before entries in the directory are visited.
   *
   *  If this method returns {@link FileVisitResult#CONTINUE CONTINUE},
   * then entries in the directory are visited. If this method returns {@link
   * FileVisitResult#SKIP_SUBTREE SKIP_SUBTREE} or {@link
   * FileVisitResult#SKIP_SIBLINGS SKIP_SIBLINGS} then entries in the
   * directory (and any descendants) will not be visited.
   *
   * @param   dir
   *          a reference to the directory
   * @param   attrs
   *          the directory's basic attributes
   *
   * @return  the visit result
   *
   * @throws  IOException
   *          if an I/O error occurs
  */
  preVisitDirectory(dir: T, attrs: BasicFileAttributes): FileVisitResult;
  /**
   * Invoked for a file in a directory.
   *
   * @param   file
   *          a reference to the file
   * @param   attrs
   *          the file's basic attributes
   *
   * @return  the visit result
   *
   * @throws  IOException
   *          if an I/O error occurs
  */
  visitFile(file: T, attrs: BasicFileAttributes): FileVisitResult;
  /**
   * Invoked for a file that could not be visited. This method is invoked
   * if the file's attributes could not be read, the file is a directory
   * that could not be opened, and other reasons.
   *
   * @param   file
   *          a reference to the file
   * @param   exc
   *          the I/O exception that prevented the file from being visited
   *
   * @return  the visit result
   *
   * @throws  IOException
   *          if an I/O error occurs
  */
  visitFileFailed(file: T, exc: IOException): FileVisitResult;
  /**
   * Invoked for a directory after entries in the directory, and all of their
   * descendants, have been visited. This method is also invoked when iteration
   * of the directory completes prematurely (by a {@link #visitFile visitFile}
   * method returning {@link FileVisitResult#SKIP_SIBLINGS SKIP_SIBLINGS},
   * or an I/O error when iterating over the directory).
   *
   * @param   dir
   *          a reference to the directory
   * @param   exc
   *          `null` if the iteration of the directory completes without
   *          an error; otherwise the I/O exception that caused the iteration
   *          of the directory to complete prematurely
   *
   * @return  the visit result
   *
   * @throws  IOException
   *          if an I/O error occurs
  */
  postVisitDirectory(dir: T, exc: IOException): FileVisitResult;
}
export class AccessDeniedException extends FileSystemException {
  /**
   * Constructs an instance of this class.
   *
   * @param   file
   *          a string identifying the file or `null` if not known
  */
  constructor(file: string);
  /**
   * Constructs an instance of this class.
   *
   * @param   file
   *          a string identifying the file or `null` if not known
   * @param   other
   *          a string identifying the other file or `null` if not known
   * @param   reason
   *          a reason message with additional information or `null`
  */
  constructor(file: string, other: string, reason: string);
}
export class WatchEvent<T> {
  /**
   * Returns the event kind.
   *
   * @return  the event kind
  */
  kind(): Kind<T>;
  /**
   * Returns the event count. If the event count is greater than `1`
   * then this is a repeated event.
   *
   * @return  the event count
  */
  count(): number;
  /**
   * Returns the context for the event.
   *
   *  In the case of {@link StandardWatchEventKinds#ENTRY_CREATE ENTRY_CREATE},
   * {@link StandardWatchEventKinds#ENTRY_DELETE ENTRY_DELETE}, and {@link
   * StandardWatchEventKinds#ENTRY_MODIFY ENTRY_MODIFY} events the context is
   * a `Path` that is the {@link Path#relativize relative} path between
   * the directory registered with the watch service, and the entry that is
   * created, deleted, or modified.
   *
   * @return  the event context; may be `null`
  */
  context(): T;
}
export class ClosedWatchServiceException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class SecureDirectoryStream<T> extends DirectoryStream<T> {
  /**
   * Opens the directory identified by the given path, returning a `     * SecureDirectoryStream` to iterate over the entries in the directory.
   *
   *  This method works in exactly the manner specified by the {@link
   * Files#newDirectoryStream(Path) newDirectoryStream} method for the case that
   * the `path` parameter is an {@link Path#isAbsolute absolute} path.
   * When the parameter is a relative path then the directory to open is
   * relative to this open directory. The {@link
   * LinkOption#NOFOLLOW_LINKS NOFOLLOW_LINKS} option may be used to
   * ensure that this method fails if the file is a symbolic link.
   *
   *  The new directory stream, once created, is not dependent upon the
   * directory stream used to create it. Closing this directory stream has no
   * effect upon newly created directory stream.
   *
   * @param   path
   *          the path to the directory to open
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  a new and open `SecureDirectoryStream` object
   *
   * @throws  ClosedDirectoryStreamException
   *          if the directory stream is closed
   * @throws  NotDirectoryException
   *          if the file could not otherwise be opened because it is not
   *          a directory (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the directory.
  */
  newDirectoryStream(path: T, ...options: LinkOption[]): SecureDirectoryStream<T>;
  /**
   * Opens or creates a file in this directory, returning a seekable byte
   * channel to access the file.
   *
   *  This method works in exactly the manner specified by the {@link
   * Files#newByteChannel Files.newByteChannel} method for the
   * case that the `path` parameter is an {@link Path#isAbsolute absolute}
   * path. When the parameter is a relative path then the file to open or
   * create is relative to this open directory. In addition to the options
   * defined by the `Files.newByteChannel` method, the {@link
   * LinkOption#NOFOLLOW_LINKS NOFOLLOW_LINKS} option may be used to
   * ensure that this method fails if the file is a symbolic link.
   *
   *  The channel, once created, is not dependent upon the directory stream
   * used to create it. Closing this directory stream has no effect upon the
   * channel.
   *
   * @param   path
   *          the path of the file to open or create
   * @param   options
   *          options specifying how the file is opened
   * @param   attrs
   *          an optional list of attributes to set atomically when creating
   *          the file
   *
   * @return  the seekable byte channel
   *
   * @throws  ClosedDirectoryStreamException
   *          if the directory stream is closed
   * @throws  IllegalArgumentException
   *          if the set contains an invalid combination of options
   * @throws  UnsupportedOperationException
   *          if an unsupported open option is specified or the array contains
   *          attributes that cannot be set atomically when creating the file
   * @throws  FileAlreadyExistsException
   *          if a file of that name already exists and the {@link
   *          StandardOpenOption#CREATE_NEW CREATE_NEW} option is specified
   *          (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the path if the file
   *          is opened for reading. The {@link SecurityManager#checkWrite(String)
   *          checkWrite} method is invoked to check write access to the path
   *          if the file is opened for writing.
  */
  newByteChannel(path: T, options: Set<OpenOption>, ...attrs: FileAttribute[]): SeekableByteChannel;
  /**
   * Deletes a file.
   *
   *  Unlike the {@link Files#delete delete()} method, this method does
   * not first examine the file to determine if the file is a directory.
   * Whether a directory is deleted by this method is system dependent and
   * therefore not specified. If the file is a symbolic link, then the link
   * itself, not the final target of the link, is deleted. When the
   * parameter is a relative path then the file to delete is relative to
   * this open directory.
   *
   * @param   path
   *          the path of the file to delete
   *
   * @throws  ClosedDirectoryStreamException
   *          if the directory stream is closed
   * @throws  NoSuchFileException
   *          if the file does not exist (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkDelete(String) checkDelete}
   *          method is invoked to check delete access to the file
  */
  deleteFile(path: T): void;
  /**
   * Deletes a directory.
   *
   *  Unlike the {@link Files#delete delete()} method, this method
   * does not first examine the file to determine if the file is a directory.
   * Whether non-directories are deleted by this method is system dependent and
   * therefore not specified. When the parameter is a relative path then the
   * directory to delete is relative to this open directory.
   *
   * @param   path
   *          the path of the directory to delete
   *
   * @throws  ClosedDirectoryStreamException
   *          if the directory stream is closed
   * @throws  NoSuchFileException
   *          if the directory does not exist (optional specific exception)
   * @throws  DirectoryNotEmptyException
   *          if the directory could not otherwise be deleted because it is
   *          not empty (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkDelete(String) checkDelete}
   *          method is invoked to check delete access to the directory
  */
  deleteDirectory(path: T): void;
  /**
   * Move a file from this directory to another directory.
   *
   *  This method works in a similar manner to {@link Files#move move}
   * method when the {@link StandardCopyOption#ATOMIC_MOVE ATOMIC_MOVE} option
   * is specified. That is, this method moves a file as an atomic file system
   * operation. If the `srcpath` parameter is an {@link Path#isAbsolute
   * absolute} path then it locates the source file. If the parameter is a
   * relative path then it is located relative to this open directory. If
   * the `targetpath` parameter is absolute then it locates the target
   * file (the `targetdir` parameter is ignored). If the parameter is
   * a relative path it is located relative to the open directory identified
   * by the `targetdir` parameter. In all cases, if the target file
   * exists then it is implementation specific if it is replaced or this
   * method fails.
   *
   * @param   srcpath
   *          the name of the file to move
   * @param   targetdir
   *          the destination directory
   * @param   targetpath
   *          the name to give the file in the destination directory
   *
   * @throws  ClosedDirectoryStreamException
   *          if this or the target directory stream is closed
   * @throws  FileAlreadyExistsException
   *          if the file already exists in the target directory and cannot
   *          be replaced (optional specific exception)
   * @throws  AtomicMoveNotSupportedException
   *          if the file cannot be moved as an atomic file system operation
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to both the source and
   *          target file.
  */
  move(srcpath: T, targetdir: SecureDirectoryStream<T>, targetpath: T): void;
  /**
   * Returns a new file attribute view to access the file attributes of this
   * directory.
   *
   *  The resulting file attribute view can be used to read or update the
   * attributes of this (open) directory. The `type` parameter specifies
   * the type of the attribute view and the method returns an instance of that
   * type if supported. Invoking this method to obtain a {@link
   * BasicFileAttributeView} always returns an instance of that class that is
   * bound to this open directory.
   *
   *  The state of resulting file attribute view is intimately connected
   * to this directory stream. Once the directory stream is {@link #close closed},
   * then all methods to read or update attributes will throw {@link
   * ClosedDirectoryStreamException ClosedDirectoryStreamException}.
   *
   * @param   
   *          The `FileAttributeView` type
   * @param   type
   *          the `Class` object corresponding to the file attribute view
   *
   * @return  a new file attribute view of the specified type bound to
   *          this directory stream, or `null` if the attribute view
   *          type is not available
  */
  getFileAttributeView<V>(type: Class<V>): V;
  /**
   * Returns a new file attribute view to access the file attributes of a file
   * in this directory.
   *
   *  The resulting file attribute view can be used to read or update the
   * attributes of file in this directory. The `type` parameter specifies
   * the type of the attribute view and the method returns an instance of that
   * type if supported. Invoking this method to obtain a {@link
   * BasicFileAttributeView} always returns an instance of that class that is
   * bound to the file in the directory.
   *
   *  The state of resulting file attribute view is intimately connected
   * to this directory stream. Once the directory stream {@link #close closed},
   * then all methods to read or update attributes will throw {@link
   * ClosedDirectoryStreamException ClosedDirectoryStreamException}. The
   * file is not required to exist at the time that the file attribute view
   * is created but methods to read or update attributes of the file will
   * fail when invoked and the file does not exist.
   *
   * @param   
   *          The `FileAttributeView` type
   * @param   path
   *          the path of the file
   * @param   type
   *          the `Class` object corresponding to the file attribute view
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  a new file attribute view of the specified type bound to a
   *          this directory stream, or `null` if the attribute view
   *          type is not available
   *
  */
  getFileAttributeView<V>(path: T, type: Class<V>, ...options: LinkOption[]): V;
}
export class SimpleFileVisitor<T> extends FileVisitor<T> {
  /**
   * Invoked for a directory before entries in the directory are visited.
   *
   *  Unless overridden, this method returns {@link FileVisitResult#CONTINUE
   * CONTINUE}.
  */
  preVisitDirectory(dir: T, attrs: BasicFileAttributes): FileVisitResult;
  /**
   * Invoked for a file in a directory.
   *
   *  Unless overridden, this method returns {@link FileVisitResult#CONTINUE
   * CONTINUE}.
  */
  visitFile(file: T, attrs: BasicFileAttributes): FileVisitResult;
  /**
   * Invoked for a file that could not be visited.
   *
   *  Unless overridden, this method re-throws the I/O exception that prevented
   * the file from being visited.
  */
  visitFileFailed(file: T, exc: IOException): FileVisitResult;
  /**
   * Invoked for a directory after entries in the directory, and all of their
   * descendants, have been visited.
   *
   *  Unless overridden, this method returns {@link FileVisitResult#CONTINUE
   * CONTINUE} if the directory iteration completes without an I/O exception;
   * otherwise this method re-throws the I/O exception that caused the iteration
   * of the directory to terminate prematurely.
  */
  postVisitDirectory(dir: T, exc: IOException): FileVisitResult;
}
export class FileSystem extends Closeable {
  /**
   * Returns the provider that created this file system.
   *
   * @return  The provider that created this file system.
  */
  provider(): FileSystemProvider;
  /**
   * Closes this file system.
   *
   *  After a file system is closed then all subsequent access to the file
   * system, either by methods defined by this class or on objects associated
   * with this file system, throw {@link ClosedFileSystemException}. If the
   * file system is already closed then invoking this method has no effect.
   *
   *  Closing a file system will close all open {@link
   * java.nio.channels.Channel channels}, {@link DirectoryStream directory-streams},
   * {@link WatchService watch-service}, and other closeable objects associated
   * with this file system. The {@link FileSystems#getDefault default} file
   * system cannot be closed.
   *
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  UnsupportedOperationException
   *          Thrown in the case of the default file system
  */
  close(): void;
  /**
   * Tells whether or not this file system is open.
   *
   *  File systems created by the default provider are always open.
   *
   * @return  `true` if, and only if, this file system is open
  */
  isOpen(): boolean;
  /**
   * Tells whether or not this file system allows only read-only access to
   * its file stores.
   *
   * @return  `true` if, and only if, this file system provides
   *          read-only access
  */
  isReadOnly(): boolean;
  /**
   * Returns the name separator, represented as a string.
   *
   *  The name separator is used to separate names in a path string. An
   * implementation may support multiple name separators in which case this
   * method returns an implementation specific default name separator.
   * This separator is used when creating path strings by invoking the {@link
   * Path#toString() toString()} method.
   *
   *  In the case of the default provider, this method returns the same
   * separator as {@link java.io.File#separator}.
   *
   * @return  The name separator
  */
  getSeparator(): string;
  /**
   * Returns an object to iterate over the paths of the root directories.
   *
   *  A file system provides access to a file store that may be composed
   * of a number of distinct file hierarchies, each with its own top-level
   * root directory. Unless denied by the security manager, each element in
   * the returned iterator corresponds to the root directory of a distinct
   * file hierarchy. The order of the elements is not defined. The file
   * hierarchies may change during the lifetime of the Java virtual machine.
   * For example, in some implementations, the insertion of removable media
   * may result in the creation of a new file hierarchy with its own
   * top-level directory.
   *
   *  When a security manager is installed, it is invoked to check access
   * to the each root directory. If denied, the root directory is not returned
   * by the iterator. In the case of the default provider, the {@link
   * SecurityManager#checkRead(String)} method is invoked to check read access
   * to each root directory. It is system dependent if the permission checks
   * are done when the iterator is obtained or during iteration.
   *
   * @return  An object to iterate over the root directories
  */
  getRootDirectories(): Iterable<Path>;
  /**
   * Returns an object to iterate over the underlying file stores.
   *
   *  The elements of the returned iterator are the {@link
   * FileStore FileStores} for this file system. The order of the elements is
   * not defined and the file stores may change during the lifetime of the
   * Java virtual machine. When an I/O error occurs, perhaps because a file
   * store is not accessible, then it is not returned by the iterator.
   *
   *  In the case of the default provider, and a security manager is
   * installed, the security manager is invoked to check {@link
   * RuntimePermission}`("getFileStoreAttributes")`. If denied, then
   * no file stores are returned by the iterator. In addition, the security
   * manager's {@link SecurityManager#checkRead(String)} method is invoked to
   * check read access to the file store's top-most directory. If
   * denied, the file store is not returned by the iterator. It is system
   * dependent if the permission checks are done when the iterator is obtained
   * or during iteration.
   *
   *  Usage Example:
   * Suppose we want to print the space usage for all file stores:
   *      *     for (FileStore store: FileSystems.getDefault().getFileStores()) {
   *         long total = store.getTotalSpace() / 1024;
   *         long used = (store.getTotalSpace() - store.getUnallocatedSpace()) / 1024;
   *         long avail = store.getUsableSpace() / 1024;
   *         System.out.format("%-20s %12d %12d %12d%n", store, total, used, avail);
   *     }
   * 
   *
   * @return  An object to iterate over the backing file stores
  */
  getFileStores(): Iterable<FileStore>;
  /**
   * Returns the set of the {@link FileAttributeView#name names} of the file
   * attribute views supported by this `FileSystem`.
   *
   *  The {@link BasicFileAttributeView} is required to be supported and
   * therefore the set contains at least one element, "basic".
   *
   *  The {@link FileStore#supportsFileAttributeView(String)
   * supportsFileAttributeView(String)} method may be used to test if an
   * underlying {@link FileStore} supports the file attributes identified by a
   * file attribute view.
   *
   * @return  An unmodifiable set of the names of the supported file attribute
   *          views
  */
  supportedFileAttributeViews(): Set<string>;
  /**
   * Converts a path string, or a sequence of strings that when joined form
   * a path string, to a `Path`. If `more` does not specify any
   * elements then the value of the `first` parameter is the path string
   * to convert. If `more` specifies one or more elements then each
   * non-empty string, including `first`, is considered to be a sequence
   * of name elements (see {@link Path}) and is joined to form a path string.
   * The details as to how the Strings are joined is provider specific but
   * typically they will be joined using the {@link #getSeparator
   * name-separator} as the separator. For example, if the name separator is
   * "`/`" and `getPath("/foo","bar","gus")` is invoked, then the
   * path string `"/foo/bar/gus"` is converted to a `Path`.
   * A `Path` representing an empty path is returned if `first`
   * is the empty string and `more` does not contain any non-empty
   * strings.
   *
   *  The parsing and conversion to a path object is inherently
   * implementation dependent. In the simplest case, the path string is rejected,
   * and {@link InvalidPathException} thrown, if the path string contains
   * characters that cannot be converted to characters that are legal
   * to the file store. For example, on UNIX systems, the NUL (\u0000)
   * character is not allowed to be present in a path. An implementation may
   * choose to reject path strings that contain names that are longer than those
   * allowed by any file store, and where an implementation supports a complex
   * path syntax, it may choose to reject path strings that are badly
   * formed.
   *
   *  In the case of the default provider, path strings are parsed based
   * on the definition of paths at the platform or virtual file system level.
   * For example, an operating system may not allow specific characters to be
   * present in a file name, but a specific underlying file store may impose
   * different or additional restrictions on the set of legal
   * characters.
   *
   *  This method throws {@link InvalidPathException} when the path string
   * cannot be converted to a path. Where possible, and where applicable,
   * the exception is created with an {@link InvalidPathException#getIndex
   * index} value indicating the first position in the `path` parameter
   * that caused the path string to be rejected.
   *
   * @param   first
   *          the path string or initial part of the path string
   * @param   more
   *          additional strings to be joined to form the path string
   *
   * @return  the resulting `Path`
   *
   * @throws  InvalidPathException
   *          If the path string cannot be converted
  */
  getPath(first: string, ...more: string[]): Path;
  /**
   * Returns a `PathMatcher` that performs match operations on the
   * `String` representation of {@link Path} objects by interpreting a
   * given pattern.
   *
   * The `syntaxAndPattern` parameter identifies the syntax and the
   * pattern and takes the form:
   *      * syntax:pattern
   * 
   * where `':'` stands for itself.
   *
   *  A `FileSystem` implementation supports the "`glob`" and
   * "`regex`" syntaxes, and may support others. The value of the syntax
   * component is compared without regard to case.
   *
   *  When the syntax is "`glob`" then the `String`
   * representation of the path is matched using a limited pattern language
   * that resembles regular expressions but with a simpler syntax. For example:
   *
   * 
   * Pattern Language
   * 
   * 
   *   Example
   *   Description
   * 
   * 
   * 
   * 
   *   `*.java`
   *   Matches a path that represents a file name ending in `.java`
   * 
   * 
   *   `*.*`
   *   Matches file names containing a dot
   * 
   * 
   *   `*.{java,class`}
   *   Matches file names ending with `.java` or `.class`
   * 
   * 
   *   `foo.?`
   *   Matches file names starting with `foo.` and a single
   *   character extension
   * 
   * 
   *   /home/* /*
   *   Matches /home/gus/data on UNIX platforms
   * 
   * 
   *   /home/**
   *   Matches /home/gus and
   *   /home/gus/data on UNIX platforms
   * 
   * 
   *   C:\\*
   *   Matches C:\foo and C:\bar on the Windows
   *   platform (note that the backslash is escaped; as a string literal in the
   *   Java Language the pattern would be "C:\\\\*") 
   * 
   * 
   * 
   *
   *  The following rules are used to interpret glob patterns:
   *
   * 
   *    The `*` character matches zero or more {@link Character
   *   characters} of a {@link Path#getName(int) name} component without
   *   crossing directory boundaries. 
   *
   *    The `**` characters matches zero or more {@link Character
   *   characters} crossing directory boundaries. 
   *
   *    The `?` character matches exactly one character of a
   *   name component.
   *
   *    The backslash character (`\`) is used to escape characters
   *   that would otherwise be interpreted as special characters. The expression
   *   `\\` matches a single backslash and "\{" matches a left brace
   *   for example.  
   *
   *    The `[ ]` characters are a bracket expression that
   *   match a single character of a name component out of a set of characters.
   *   For example, `[abc]` matches `"a"`, `"b"`, or `"c"`.
   *   The hyphen (`-`) may be used to specify a range so `[a-z]`
   *   specifies a range that matches from `"a"` to `"z"` (inclusive).
   *   These forms can be mixed so [abce-g] matches `"a"`, `"b"`,
   *   `"c"`, `"e"`, `"f"` or `"g"`. If the character
   *   after the `[` is a `!` then it is used for negation so `     *   [!a-c]` matches any character except `"a"`, `"b"`, or `     *   "c"`.
   *    Within a bracket expression the `*`, `?` and `\`
   *   characters match themselves. The (`-`) character matches itself if
   *   it is the first character within the brackets, or the first character
   *   after the `!` if negating.
   *
   *    The `{ `} characters are a group of subpatterns, where
   *   the group matches if any subpattern in the group matches. The `","`
   *   character is used to separate the subpatterns. Groups cannot be nested.
   *   
   *
   *    Leading period/dot characters in file name are
   *   treated as regular characters in match operations. For example,
   *   the `"*"` glob pattern matches file name `".login"`.
   *   The {@link Files#isHidden} method may be used to test whether a file
   *   is considered hidden.
   *   
   *
   *    All other characters match themselves in an implementation
   *   dependent manner. This includes characters representing any {@link
   *   FileSystem#getSeparator name-separators}. 
   *
   *    The matching of {@link Path#getRoot root} components is highly
   *   implementation-dependent and is not specified. 
   *
   * 
   *
   *  When the syntax is "`regex`" then the pattern component is a
   * regular expression as defined by the {@link java.util.regex.Pattern}
   * class.
   *
   *   For both the glob and regex syntaxes, the matching details, such as
   * whether the matching is case sensitive, are implementation-dependent
   * and therefore not specified.
   *
   * @param   syntaxAndPattern
   *          The syntax and pattern
   *
   * @return  A path matcher that may be used to match paths against the pattern
   *
   * @throws  IllegalArgumentException
   *          If the parameter does not take the form: `syntax:pattern`
   * @throws  java.util.regex.PatternSyntaxException
   *          If the pattern is invalid
   * @throws  UnsupportedOperationException
   *          If the pattern syntax is not known to the implementation
   *
   * @see Files#newDirectoryStream(Path,String)
  */
  getPathMatcher(syntaxAndPattern: string): PathMatcher;
  /**
   * Returns the `UserPrincipalLookupService` for this file system
   * (optional operation). The resulting lookup service may be used to
   * lookup user or group names.
   *
   *  Usage Example:
   * Suppose we want to make "joe" the owner of a file:
   *      *     UserPrincipalLookupService lookupService = FileSystems.getDefault().getUserPrincipalLookupService();
   *     Files.setOwner(path, lookupService.lookupPrincipalByName("joe"));
   * 
   *
   * @throws  UnsupportedOperationException
   *          If this `FileSystem` does not does have a lookup service
   *
   * @return  The `UserPrincipalLookupService` for this file system
  */
  getUserPrincipalLookupService(): UserPrincipalLookupService;
  /**
   * Constructs a new {@link WatchService} (optional operation).
   *
   *  This method constructs a new watch service that may be used to watch
   * registered objects for changes and events.
   *
   * @return  a new watch service
   *
   * @throws  UnsupportedOperationException
   *          If this `FileSystem` does not support watching file system
   *          objects for changes and events. This exception is not thrown
   *          by `FileSystems` created by the default provider.
   * @throws  IOException
   *          If an I/O error occurs
  */
  newWatchService(): WatchService;
}
export class LinkOption extends Enum<LinkOption> {
  /**
   * Do not follow symbolic links.
   *
   * @see Files#getFileAttributeView(Path,Class,LinkOption[])
   * @see Files#copy
   * @see SecureDirectoryStream#newByteChannel
  */
  static readonly NOFOLLOW_LINKS: LinkOption;
  static valueOf(name: string): LinkOption;
  static values(): LinkOption[];
  /**
   * Returns the enum constant of the specified enum class with the
   * specified name.  The name must match exactly an identifier used
   * to declare an enum constant in this class.  (Extraneous whitespace
   * characters are not permitted.)
   *
   * Note that for a particular enum class `T`, the
   * implicitly declared `public static T valueOf(String)`
   * method on that enum may be used instead of this method to map
   * from a name to the corresponding enum constant.  All the
   * constants of an enum class can be obtained by calling the
   * implicit `public static T[] values()` method of that
   * class.
   *
   * @param  The enum class whose constant is to be returned
   * @param enumClass the `Class` object of the enum class from which
   *      to return a constant
   * @param name the name of the constant to return
   * @return the enum constant of the specified enum class with the
   *      specified name
   * @throws IllegalArgumentException if the specified enum class has
   *         no constant with the specified name, or the specified
   *         class object does not represent an enum class
   * @throws NullPointerException if `enumClass` or `name`
   *         is null
   * @since 1.5
  */
  static valueOf<T>(enumClass: Class<T>, name: string): T;
}
/**
 * The `Permission` class for link creation operations.
 *
 *  The following table provides a summary description of what the permission
 * allows, and discusses the risks of granting code the permission.
 *
 * 
 * Table shows permission target name, what the permission allows, and associated risks
 * 
 * 
 * Permission Target Name
 * What the Permission Allows
 * Risks of Allowing this Permission
 * 
 * 
 * 
 * 
 *   hard
 *    Ability to add an existing file to a directory. This is sometimes
 *   known as creating a link, or hard link. 
 *    Extreme care should be taken when granting this permission. It allows
 *   linking to any file or directory in the file system thus allowing the
 *   attacker access to all files. 
 * 
 * 
 *   symbolic
 *    Ability to create symbolic links. 
 *    Extreme care should be taken when granting this permission. It allows
 *   linking to any file or directory in the file system thus allowing the
 *   attacker to access to all files. 
 * 
 * 
 * 
 *
 * @since 1.7
 *
 * @see Files#createLink
 * @see Files#createSymbolicLink
*/
export class LinkPermission extends BasicPermission {
  /**
   * Constructs a `LinkPermission` with the specified name.
   *
   * @param   name
   *          the name of the permission. It must be "hard" or "symbolic".
   *
   * @throws  IllegalArgumentException
   *          if name is empty or invalid
  */
  constructor(name: string);
  /**
   * Constructs a `LinkPermission` with the specified name.
   *
   * @param   name
   *          the name of the permission; must be "hard" or "symbolic".
   * @param   actions
   *          the actions for the permission; must be the empty string or
   *          `null`
   *
   * @throws  IllegalArgumentException
   *          if name is empty or invalid, or actions is a non-empty string
  */
  constructor(name: string, actions: string);
}
export class DirectoryStream<T> extends Closeable {
  /**
   * Returns the iterator associated with this `DirectoryStream`.
   *
   * @return  the iterator associated with this `DirectoryStream`
   *
   * @throws  IllegalStateException
   *          if this directory stream is closed or the iterator has already
   *          been returned
  */
  iterator(): Iterator<T>;
}
export interface DirectoryStream<T> extends Closeable, Iterable<T> {}
export class DirectoryIteratorException extends ConcurrentModificationException {
  /**
   * Constructs an instance of this class.
   *
   * @param   cause
   *          the `IOException` that caused the directory iteration
   *          to fail
   *
   * @throws  NullPointerException
   *          if the cause is `null`
  */
  constructor(cause: IOException);
  /**
   * Returns the cause of this exception.
   *
   * @return  the cause
  */
  getCause(): IOException;
}
export class CopyOption {

}
export class StandardWatchEventKinds {
  /**
   * A special event to indicate that events may have been lost or
   * discarded.
   *
   *  The {@link WatchEvent#context context} for this event is
   * implementation specific and may be `null`. The event {@link
   * WatchEvent#count count} may be greater than `1`.
   *
   * @see WatchService
  */
  static readonly OVERFLOW: Kind<any>;
  /**
   * Directory entry created.
   *
   *  When a directory is registered for this event then the {@link WatchKey}
   * is queued when it is observed that an entry is created in the directory
   * or renamed into the directory. The event {@link WatchEvent#count count}
   * for this event is always `1`.
  */
  static readonly ENTRY_CREATE: Kind<Path>;
  /**
   * Directory entry deleted.
   *
   *  When a directory is registered for this event then the {@link WatchKey}
   * is queued when it is observed that an entry is deleted or renamed out of
   * the directory. The event {@link WatchEvent#count count} for this event
   * is always `1`.
  */
  static readonly ENTRY_DELETE: Kind<Path>;
  /**
   * Directory entry modified.
   *
   *  When a directory is registered for this event then the {@link WatchKey}
   * is queued when it is observed that an entry in the directory has been
   * modified. The event {@link WatchEvent#count count} for this event is
   * `1` or greater.
  */
  static readonly ENTRY_MODIFY: Kind<Path>;
}
export class InvalidPathException extends IllegalArgumentException {
  /**
   * Constructs an instance from the given input string, reason, and error
   * index.
   *
   * @param  input   the input string
   * @param  reason  a string explaining why the input was rejected
   * @param  index   the index at which the error occurred,
   *                 or `-1` if the index is not known
   *
   * @throws  NullPointerException
   *          if either the input or reason strings are `null`
   *
   * @throws  IllegalArgumentException
   *          if the error index is less than `-1`
  */
  constructor(input: string, reason: string, index: number);
  /**
   * Constructs an instance from the given input string and reason.  The
   * resulting object will have an error index of `-1`.
   *
   * @param  input   the input string
   * @param  reason  a string explaining why the input was rejected
   *
   * @throws  NullPointerException
   *          if either the input or reason strings are `null`
  */
  constructor(input: string, reason: string);
  /**
   * Returns the input string.
   *
   * @return  the input string
  */
  getInput(): string;
  /**
   * Returns a string explaining why the input string was rejected.
   *
   * @return  the reason string
  */
  getReason(): string;
  /**
   * Returns an index into the input string of the position at which the
   * error occurred, or `-1` if this position is not known.
   *
   * @return  the error index
  */
  getIndex(): number;
  /**
   * Returns a string describing the error.  The resulting string
   * consists of the reason string followed by a colon character
   * (`':'`), a space, and the input string.  If the error index is
   * defined then the string `" at index "` followed by the index, in
   * decimal, is inserted after the reason string and before the colon
   * character.
   *
   * @return  a string describing the error
  */
  getMessage(): string;
}
export class FileSystems {
  /**
   * Returns the default `FileSystem`. The default file system creates
   * objects that provide access to the file systems accessible to the Java
   * virtual machine. The working directory of the file system is
   * the current user directory, named by the system property `user.dir`.
   * This allows for interoperability with the {@link java.io.File java.io.File}
   * class.
   *
   *  The first invocation of any of the methods defined by this class
   * locates the default {@link FileSystemProvider provider} object. Where the
   * system property `java.nio.file.spi.DefaultFileSystemProvider` is
   * not defined then the default provider is a system-default provider that
   * is invoked to create the default file system.
   *
   *  If the system property `java.nio.file.spi.DefaultFileSystemProvider`
   * is defined then it is taken to be a list of one or more fully-qualified
   * names of concrete provider classes identified by the URI scheme
   * `"file"`. Where the property is a list of more than one name then
   * the names are separated by a comma. Each class is loaded, using the system
   * class loader, and instantiated by invoking a one argument constructor
   * whose formal parameter type is `FileSystemProvider`. The providers
   * are loaded and instantiated in the order they are listed in the property.
   * If this process fails or a provider's scheme is not equal to `"file"`
   * then an unspecified error is thrown. URI schemes are normally compared
   * without regard to case but for the default provider, the scheme is
   * required to be `"file"`. The first provider class is instantiated
   * by invoking it with a reference to the system-default provider.
   * The second provider class is instantiated by invoking it with a reference
   * to the first provider instance. The third provider class is instantiated
   * by invoking it with a reference to the second instance, and so on. The
   * last provider to be instantiated becomes the default provider; its `     * getFileSystem` method is invoked with the URI `"file:///"` to
   * get a reference to the default file system.
   *
   *  Subsequent invocations of this method return the file system that was
   * returned by the first invocation.
   *
   * @return  the default file system
  */
  static getDefault(): FileSystem;
  /**
   * Returns a reference to an existing `FileSystem`.
   *
   *  This method iterates over the {@link FileSystemProvider#installedProviders()
   * installed} providers to locate the provider that is identified by the URI
   * {@link URI#getScheme scheme} of the given URI. URI schemes are compared
   * without regard to case. The exact form of the URI is highly provider
   * dependent. If found, the provider's {@link FileSystemProvider#getFileSystem
   * getFileSystem} method is invoked to obtain a reference to the `     * FileSystem`.
   *
   *  Once a file system created by this provider is {@link FileSystem#close
   * closed} it is provider-dependent if this method returns a reference to
   * the closed file system or throws {@link FileSystemNotFoundException}.
   * If the provider allows a new file system to be created with the same URI
   * as a file system it previously created then this method throws the
   * exception if invoked after the file system is closed (and before a new
   * instance is created by the {@link #newFileSystem newFileSystem} method).
   *
   *  If a security manager is installed then a provider implementation
   * may require to check a permission before returning a reference to an
   * existing file system. In the case of the {@link FileSystems#getDefault
   * default} file system, no permission check is required.
   *
   * @param   uri  the URI to locate the file system
   *
   * @return  the reference to the file system
   *
   * @throws  IllegalArgumentException
   *          if the pre-conditions for the `uri` parameter are not met
   * @throws  FileSystemNotFoundException
   *          if the file system, identified by the URI, does not exist
   * @throws  ProviderNotFoundException
   *          if a provider supporting the URI scheme is not installed
   * @throws  SecurityException
   *          if a security manager is installed and it denies an unspecified
   *          permission
  */
  static getFileSystem(uri: URI): FileSystem;
  /**
   * Constructs a new file system that is identified by a {@link URI}
   *
   *  This method iterates over the {@link FileSystemProvider#installedProviders()
   * installed} providers to locate the provider that is identified by the URI
   * {@link URI#getScheme scheme} of the given URI. URI schemes are compared
   * without regard to case. The exact form of the URI is highly provider
   * dependent. If found, the provider's {@link FileSystemProvider#newFileSystem(URI,Map)
   * newFileSystem(URI,Map)} method is invoked to construct the new file system.
   *
   *  Once a file system is {@link FileSystem#close closed} it is
   * provider-dependent if the provider allows a new file system to be created
   * with the same URI as a file system it previously created.
   *
   *  Usage Example:
   * Suppose there is a provider identified by the scheme `"memory"`
   * installed:
   *      *  FileSystem fs = FileSystems.newFileSystem(URI.create("memory:///?name=logfs"),
   *                                            Map.of("capacity", "16G", "blockSize", "4k"));
   * 
   *
   * @param   uri
   *          the URI identifying the file system
   * @param   env
   *          a map of provider specific properties to configure the file system;
   *          may be empty
   *
   * @return  a new file system
   *
   * @throws  IllegalArgumentException
   *          if the pre-conditions for the `uri` parameter are not met,
   *          or the `env` parameter does not contain properties required
   *          by the provider, or a property value is invalid
   * @throws  FileSystemAlreadyExistsException
   *          if the file system has already been created
   * @throws  ProviderNotFoundException
   *          if a provider supporting the URI scheme is not installed
   * @throws  IOException
   *          if an I/O error occurs creating the file system
   * @throws  SecurityException
   *          if a security manager is installed and it denies an unspecified
   *          permission required by the file system provider implementation
  */
  static newFileSystem(uri: URI, env: Map<string, any>): FileSystem;
  /**
   * Constructs a new file system that is identified by a {@link URI}
   *
   *  This method first attempts to locate an installed provider in exactly
   * the same manner as the {@link #newFileSystem(URI,Map) newFileSystem(URI,Map)}
   * method. If none of the installed providers support the URI scheme then an
   * attempt is made to locate the provider using the given class loader. If a
   * provider supporting the URI scheme is located then its {@link
   * FileSystemProvider#newFileSystem(URI,Map) newFileSystem(URI,Map)} is
   * invoked to construct the new file system.
   *
   * @param   uri
   *          the URI identifying the file system
   * @param   env
   *          a map of provider specific properties to configure the file system;
   *          may be empty
   * @param   loader
   *          the class loader to locate the provider or `null` to only
   *          attempt to locate an installed provider
   *
   * @return  a new file system
   *
   * @throws  IllegalArgumentException
   *          if the pre-conditions for the `uri` parameter are not met,
   *          or the `env` parameter does not contain properties required
   *          by the provider, or a property value is invalid
   * @throws  FileSystemAlreadyExistsException
   *          if the URI scheme identifies an installed provider and the file
   *          system has already been created
   * @throws  ProviderNotFoundException
   *          if a provider supporting the URI scheme is not found
   * @throws  ServiceConfigurationError
   *          when an error occurs while loading a service provider
   * @throws  IOException
   *          an I/O error occurs creating the file system
   * @throws  SecurityException
   *          if a security manager is installed and it denies an unspecified
   *          permission required by the file system provider implementation
  */
  static newFileSystem(uri: URI, env: Map<string, any>, loader: ClassLoader): FileSystem;
  /**
   * Constructs a new `FileSystem` to access the contents of a file as a
   * file system.
   *
   *  This method makes use of specialized providers that create pseudo file
   * systems where the contents of one or more files is treated as a file
   * system.
   *
   *  This method first attempts to locate an installed provider in exactly
   * the same manner as the {@link #newFileSystem(Path, Map, ClassLoader)
   * newFileSystem(Path, Map, ClassLoader)} method with an empty map. If none
   * of the installed providers return a `FileSystem` then an attempt is
   * made to locate the provider using the given class loader. If a provider
   * returns a file system then the lookup terminates and the file system is
   * returned.
   *
   * @param   path
   *          the path to the file
   * @param   loader
   *          the class loader to locate the provider or `null` to only
   *          attempt to locate an installed provider
   *
   * @return  a new file system
   *
   * @throws  ProviderNotFoundException
   *          if a provider supporting this file type cannot be located
   * @throws  ServiceConfigurationError
   *          when an error occurs while loading a service provider
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          if a security manager is installed and it denies an unspecified
   *          permission
  */
  static newFileSystem(path: Path, loader: ClassLoader): FileSystem;
  /**
   * Constructs a new `FileSystem` to access the contents of a file as a
   * file system.
   *
   *  This method makes use of specialized providers that create pseudo file
   * systems where the contents of one or more files is treated as a file
   * system.
   *
   *  This method first attempts to locate an installed provider in exactly
   * the same manner as the {@link #newFileSystem(Path,Map,ClassLoader)
   * newFileSystem(Path, Map, ClassLoader)} method. If found, the provider's
   * {@link FileSystemProvider#newFileSystem(Path, Map) newFileSystem(Path, Map)}
   * method is invoked to construct the new file system.
   *
   * @param   path
   *          the path to the file
   * @param   env
   *          a map of provider specific properties to configure the file system;
   *          may be empty
   *
   * @return  a new file system
   *
   * @throws  ProviderNotFoundException
   *          if a provider supporting this file type cannot be located
   * @throws  ServiceConfigurationError
   *          when an error occurs while loading a service provider
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          if a security manager is installed and it denies an unspecified
   *          permission
   *
   * @since 13
  */
  static newFileSystem(path: Path, env: Map<string, any>): FileSystem;
  /**
   * Constructs a new `FileSystem` to access the contents of a file as a
   * file system.
   *
   *  This method makes use of specialized providers that create pseudo file
   * systems where the contents of one or more files is treated as a file
   * system.
   *
   *  This method first attempts to locate an installed provider in exactly
   * the same manner as the {@link #newFileSystem(Path,Map,ClassLoader)
   * newFileSystem(Path, Map, ClassLoader)} method. If found, the provider's
   * {@link FileSystemProvider#newFileSystem(Path, Map) newFileSystem(Path, Map)}
   * method is invoked with an empty map to construct the new file system.
   *
   * @param   path
   *          the path to the file
   *
   * @return  a new file system
   *
   * @throws  ProviderNotFoundException
   *          if a provider supporting this file type cannot be located
   * @throws  ServiceConfigurationError
   *          when an error occurs while loading a service provider
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          if a security manager is installed and it denies an unspecified
   *          permission
   *
   * @since 13
  */
  static newFileSystem(path: Path): FileSystem;
  /**
   * Constructs a new `FileSystem` to access the contents of a file as a
   * file system.
   *
   *  This method makes use of specialized providers that create pseudo file
   * systems where the contents of one or more files is treated as a file
   * system.
   *
   *  This method iterates over the {@link FileSystemProvider#installedProviders()
   * installed} providers. It invokes, in turn, each provider's {@link
   * FileSystemProvider#newFileSystem(Path,Map) newFileSystem(Path,Map)}
   * method. If a provider returns a file system then the iteration
   * terminates and the file system is returned.
   * If none of the installed providers return a `FileSystem` then
   * an attempt is made to locate the provider using the given class loader.
   * If a provider returns a file
   * system, then the lookup terminates and the file system is returned.
   *
   * @param   path
   *          the path to the file
   * @param   env
   *          a map of provider specific properties to configure the file system;
   *          may be empty
   * @param   loader
   *          the class loader to locate the provider or `null` to only
   *          attempt to locate an installed provider
   *
   * @return  a new file system
   *
   * @throws  ProviderNotFoundException
   *          if a provider supporting this file type cannot be located
   * @throws  ServiceConfigurationError
   *          when an error occurs while loading a service provider
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          if a security manager is installed and it denies an unspecified
   *          permission
   *
   * @since 13
  */
  static newFileSystem(path: Path, env: Map<string, any>, loader: ClassLoader): FileSystem;
}
/**
 * An interface that is implemented by objects that perform match operations on
 * paths.
 *
 * @since 1.7
 *
 * @see FileSystem#getPathMatcher
 * @see Files#newDirectoryStream(Path,String)
*/
export class PathMatcher {
  /**
   * Tells if given path matches this matcher's pattern.
   *
   * @param   path
   *          the path to match
   *
   * @return  `true` if, and only if, the path matches this
   *          matcher's pattern
  */
  matches(path: Path): boolean;
}
export class StandardOpenOption extends Enum<StandardOpenOption> {
  /**
   * Open for read access.
  */
  static readonly READ: StandardOpenOption;
  /**
   * Open for write access.
  */
  static readonly WRITE: StandardOpenOption;
  /**
   * If the file is opened for {@link #WRITE} access then bytes will be written
   * to the end of the file rather than the beginning.
   *
   *  If the file is opened for write access by other programs, then it
   * is file system specific if writing to the end of the file is atomic.
  */
  static readonly APPEND: StandardOpenOption;
  /**
   * If the file already exists and it is opened for {@link #WRITE}
   * access, then its length is truncated to 0. This option is ignored
   * if the file is opened only for {@link #READ} access.
  */
  static readonly TRUNCATE_EXISTING: StandardOpenOption;
  /**
   * Create a new file if it does not exist.
   * This option is ignored if the {@link #CREATE_NEW} option is also set.
   * The check for the existence of the file and the creation of the file
   * if it does not exist is atomic with respect to other file system
   * operations.
  */
  static readonly CREATE: StandardOpenOption;
  /**
   * Create a new file, failing if the file already exists.
   * The check for the existence of the file and the creation of the file
   * if it does not exist is atomic with respect to other file system
   * operations.
  */
  static readonly CREATE_NEW: StandardOpenOption;
  /**
   * Delete on close. When this option is present then the implementation
   * makes a best effort attempt to delete the file when closed
   * by the appropriate `close` method. If the `close` method is
   * not invoked then a best effort attempt is made to delete the
   * file when the Java virtual machine terminates (either normally, as
   * defined by the Java Language Specification, or where possible, abnormally).
   * This option is primarily intended for use with work files that
   * are used solely by a single instance of the Java virtual machine. This
   * option is not recommended for use when opening files that are open
   * concurrently by other entities. Many of the details as to when and how
   * the file is deleted are implementation specific and therefore not
   * specified. In particular, an implementation may be unable to guarantee
   * that it deletes the expected file when replaced by an attacker while the
   * file is open. Consequently, security sensitive applications should take
   * care when using this option.
   *
   *  For security reasons, this option may imply the {@link
   * LinkOption#NOFOLLOW_LINKS} option. In other words, if the option is present
   * when opening an existing file that is a symbolic link then it may fail
   * (by throwing {@link java.io.IOException}).
  */
  static readonly DELETE_ON_CLOSE: StandardOpenOption;
  /**
   * Sparse file. When used with the {@link #CREATE_NEW} option then this
   * option provides a hint that the new file will be sparse. The
   * option is ignored when the file system does not support the creation of
   * sparse files.
  */
  static readonly SPARSE: StandardOpenOption;
  /**
   * Requires that every update to the file's content or metadata be written
   * synchronously to the underlying storage device.
   *
   * @see Synchronized I/O file integrity
  */
  static readonly SYNC: StandardOpenOption;
  /**
   * Requires that every update to the file's content be written
   * synchronously to the underlying storage device.
   *
   * @see Synchronized I/O file integrity
  */
  static readonly DSYNC: StandardOpenOption;
  static valueOf(name: string): StandardOpenOption;
  static values(): StandardOpenOption[];
  /**
   * Returns the enum constant of the specified enum class with the
   * specified name.  The name must match exactly an identifier used
   * to declare an enum constant in this class.  (Extraneous whitespace
   * characters are not permitted.)
   *
   * Note that for a particular enum class `T`, the
   * implicitly declared `public static T valueOf(String)`
   * method on that enum may be used instead of this method to map
   * from a name to the corresponding enum constant.  All the
   * constants of an enum class can be obtained by calling the
   * implicit `public static T[] values()` method of that
   * class.
   *
   * @param  The enum class whose constant is to be returned
   * @param enumClass the `Class` object of the enum class from which
   *      to return a constant
   * @param name the name of the constant to return
   * @return the enum constant of the specified enum class with the
   *      specified name
   * @throws IllegalArgumentException if the specified enum class has
   *         no constant with the specified name, or the specified
   *         class object does not represent an enum class
   * @throws NullPointerException if `enumClass` or `name`
   *         is null
   * @since 1.5
  */
  static valueOf<T>(enumClass: Class<T>, name: string): T;
}
export class FileAlreadyExistsException extends FileSystemException {
  /**
   * Constructs an instance of this class.
   *
   * @param   file
   *          a string identifying the file or `null` if not known
  */
  constructor(file: string);
  /**
   * Constructs an instance of this class.
   *
   * @param   file
   *          a string identifying the file or `null` if not known
   * @param   other
   *          a string identifying the other file or `null` if not known
   * @param   reason
   *          a reason message with additional information or `null`
  */
  constructor(file: string, other: string, reason: string);
}
export class AtomicMoveNotSupportedException extends FileSystemException {
  /**
   * Constructs an instance of this class.
   *
   * @param   source
   *          a string identifying the source file or `null` if not known
   * @param   target
   *          a string identifying the target file or `null` if not known
   * @param   reason
   *          a reason message with additional information or `null`
  */
  constructor(source: string, target: string, reason: string);
}

}
declare module 'java.nio.file.spi' {
import { Filter } from 'java.nio.file.DirectoryStream';
import { Class } from 'java.lang';
import { Set, List, Map } from 'java.util';
import { URI } from 'java.net';
import { InputStream, OutputStream } from 'java.io';
import { ExecutorService } from 'java.util.concurrent';
import { AsynchronousFileChannel, SeekableByteChannel, FileChannel } from 'java.nio.channels';
import { Path, FileStore, OpenOption, CopyOption, LinkOption, FileSystem, DirectoryStream, AccessMode } from 'java.nio.file';
import { FileAttribute } from 'java.nio.file.attribute';
export class FileTypeDetector {
  /**
   * Probes the given file to guess its content type.
   *
   *  The means by which this method determines the file type is highly
   * implementation specific. It may simply examine the file name, it may use
   * a file attribute,
   * or it may examines bytes in the file.
   *
   *  The probe result is the string form of the value of a
   * Multipurpose Internet Mail Extension (MIME) content type as
   * defined by RFC 2045:
   * Multipurpose Internet Mail Extensions (MIME) Part One: Format of Internet
   * Message Bodies. The string must be parsable according to the
   * grammar in the RFC 2045.
   *
   * @param   path
   *          the path to the file to probe
   *
   * @return  The content type or `null` if the file type is not
   *          recognized
   *
   * @throws  IOException
   *          An I/O error occurs
   * @throws  SecurityException
   *          If the implementation requires to access the file, and a
   *          security manager is installed, and it denies an unspecified
   *          permission required by a file system provider implementation.
   *          If the file reference is associated with the default file system
   *          provider then the {@link SecurityManager#checkRead(String)} method
   *          is invoked to check read access to the file.
   *
   * @see java.nio.file.Files#probeContentType
  */
  probeContentType(path: Path): string;
}
export class FileSystemProvider {
  /**
   * Returns a list of the installed file system providers.
   *
   *  The first invocation of this method causes the default provider to be
   * initialized (if not already initialized) and loads any other installed
   * providers as described by the {@link FileSystems} class.
   *
   * @return  An unmodifiable list of the installed file system providers. The
   *          list contains at least one element, that is the default file
   *          system provider
   *
   * @throws  ServiceConfigurationError
   *          When an error occurs while loading a service provider
  */
  static installedProviders(): FileSystemProvider[];
  /**
   * Returns the URI scheme that identifies this provider.
   *
   * @return  The URI scheme
  */
  getScheme(): string;
  /**
   * Constructs a new `FileSystem` object identified by a URI. This
   * method is invoked by the {@link FileSystems#newFileSystem(URI,Map)}
   * method to open a new file system identified by a URI.
   *
   *  The `uri` parameter is an absolute, hierarchical URI, with a
   * scheme equal (without regard to case) to the scheme supported by this
   * provider. The exact form of the URI is highly provider dependent. The
   * `env` parameter is a map of provider specific properties to configure
   * the file system.
   *
   *  This method throws {@link FileSystemAlreadyExistsException} if the
   * file system already exists because it was previously created by an
   * invocation of this method. Once a file system is {@link
   * java.nio.file.FileSystem#close closed} it is provider-dependent if the
   * provider allows a new file system to be created with the same URI as a
   * file system it previously created.
   *
   * @param   uri
   *          URI reference
   * @param   env
   *          A map of provider specific properties to configure the file system;
   *          may be empty
   *
   * @return  A new file system
   *
   * @throws  IllegalArgumentException
   *          If the pre-conditions for the `uri` parameter aren't met,
   *          or the `env` parameter does not contain properties required
   *          by the provider, or a property value is invalid
   * @throws  IOException
   *          An I/O error occurs creating the file system
   * @throws  SecurityException
   *          If a security manager is installed and it denies an unspecified
   *          permission required by the file system provider implementation
   * @throws  FileSystemAlreadyExistsException
   *          If the file system has already been created
  */
  newFileSystem(uri: URI, env: Map<string, any>): FileSystem;
  /**
   * Returns an existing `FileSystem` created by this provider.
   *
   *  This method returns a reference to a `FileSystem` that was
   * created by invoking the {@link #newFileSystem(URI,Map) newFileSystem(URI,Map)}
   * method. File systems created the {@link #newFileSystem(Path,Map)
   * newFileSystem(Path,Map)} method are not returned by this method.
   * The file system is identified by its `URI`. Its exact form
   * is highly provider dependent. In the case of the default provider the URI's
   * path component is `"/"` and the authority, query and fragment components
   * are undefined (Undefined components are represented by `null`).
   *
   *  Once a file system created by this provider is {@link
   * java.nio.file.FileSystem#close closed} it is provider-dependent if this
   * method returns a reference to the closed file system or throws {@link
   * FileSystemNotFoundException}. If the provider allows a new file system to
   * be created with the same URI as a file system it previously created then
   * this method throws the exception if invoked after the file system is
   * closed (and before a new instance is created by the {@link #newFileSystem
   * newFileSystem} method).
   *
   *  If a security manager is installed then a provider implementation
   * may require to check a permission before returning a reference to an
   * existing file system. In the case of the {@link FileSystems#getDefault
   * default} file system, no permission check is required.
   *
   * @param   uri
   *          URI reference
   *
   * @return  The file system
   *
   * @throws  IllegalArgumentException
   *          If the pre-conditions for the `uri` parameter aren't met
   * @throws  FileSystemNotFoundException
   *          If the file system does not exist
   * @throws  SecurityException
   *          If a security manager is installed and it denies an unspecified
   *          permission.
  */
  getFileSystem(uri: URI): FileSystem;
  /**
   * Return a `Path` object by converting the given {@link URI}. The
   * resulting `Path` is associated with a {@link FileSystem} that
   * already exists or is constructed automatically.
   *
   *  The exact form of the URI is file system provider dependent. In the
   * case of the default provider, the URI scheme is `"file"` and the
   * given URI has a non-empty path component, and undefined query, and
   * fragment components. The resulting `Path` is associated with the
   * default {@link FileSystems#getDefault default} `FileSystem`.
   *
   *  If a security manager is installed then a provider implementation
   * may require to check a permission. In the case of the {@link
   * FileSystems#getDefault default} file system, no permission check is
   * required.
   *
   * @param   uri
   *          The URI to convert
   *
   * @return  The resulting `Path`
   *
   * @throws  IllegalArgumentException
   *          If the URI scheme does not identify this provider or other
   *          preconditions on the uri parameter do not hold
   * @throws  FileSystemNotFoundException
   *          The file system, identified by the URI, does not exist and
   *          cannot be created automatically
   * @throws  SecurityException
   *          If a security manager is installed and it denies an unspecified
   *          permission.
  */
  getPath(uri: URI): Path;
  /**
   * Constructs a new `FileSystem` to access the contents of a file as a
   * file system.
   *
   *  This method is intended for specialized providers of pseudo file
   * systems where the contents of one or more files is treated as a file
   * system. The `env` parameter is a map of provider specific properties
   * to configure the file system.
   *
   *  If this provider does not support the creation of such file systems
   * or if the provider does not recognize the file type of the given file then
   * it throws `UnsupportedOperationException`. The default implementation
   * of this method throws `UnsupportedOperationException`.
   *
   * @param   path
   *          The path to the file
   * @param   env
   *          A map of provider specific properties to configure the file system;
   *          may be empty
   *
   * @return  A new file system
   *
   * @throws  UnsupportedOperationException
   *          If this provider does not support access to the contents as a
   *          file system or it does not recognize the file type of the
   *          given file
   * @throws  IllegalArgumentException
   *          If the `env` parameter does not contain properties required
   *          by the provider, or a property value is invalid
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  SecurityException
   *          If a security manager is installed and it denies an unspecified
   *          permission.
  */
  newFileSystem(path: Path, env: Map<string, any>): FileSystem;
  /**
   * Opens a file, returning an input stream to read from the file. This
   * method works in exactly the manner specified by the {@link
   * Files#newInputStream} method.
   *
   *  The default implementation of this method opens a channel to the file
   * as if by invoking the {@link #newByteChannel} method and constructs a
   * stream that reads bytes from the channel. This method should be overridden
   * where appropriate.
   *
   * @param   path
   *          the path to the file to open
   * @param   options
   *          options specifying how the file is opened
   *
   * @return  a new input stream
   *
   * @throws  IllegalArgumentException
   *          if an invalid combination of options is specified
   * @throws  UnsupportedOperationException
   *          if an unsupported option is specified
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
  */
  newInputStream(path: Path, ...options: OpenOption[]): InputStream;
  /**
   * Opens or creates a file, returning an output stream that may be used to
   * write bytes to the file. This method works in exactly the manner
   * specified by the {@link Files#newOutputStream} method.
   *
   *  The default implementation of this method opens a channel to the file
   * as if by invoking the {@link #newByteChannel} method and constructs a
   * stream that writes bytes to the channel. This method should be overridden
   * where appropriate.
   *
   * @param   path
   *          the path to the file to open or create
   * @param   options
   *          options specifying how the file is opened
   *
   * @return  a new output stream
   *
   * @throws  IllegalArgumentException
   *          if `options` contains an invalid combination of options
   * @throws  UnsupportedOperationException
   *          if an unsupported option is specified
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the file. The {@link
   *          SecurityManager#checkDelete(String) checkDelete} method is
   *          invoked to check delete access if the file is opened with the
   *          `DELETE_ON_CLOSE` option.
  */
  newOutputStream(path: Path, ...options: OpenOption[]): OutputStream;
  /**
   * Opens or creates a file for reading and/or writing, returning a file
   * channel to access the file. This method works in exactly the manner
   * specified by the {@link FileChannel#open(Path,Set,FileAttribute[])
   * FileChannel.open} method. A provider that does not support all the
   * features required to construct a file channel throws `     * UnsupportedOperationException`. The default provider is required to
   * support the creation of file channels. When not overridden, the default
   * implementation throws `UnsupportedOperationException`.
   *
   * @param   path
   *          the path of the file to open or create
   * @param   options
   *          options specifying how the file is opened
   * @param   attrs
   *          an optional list of file attributes to set atomically when
   *          creating the file
   *
   * @return  a new file channel
   *
   * @throws  IllegalArgumentException
   *          If the set contains an invalid combination of options
   * @throws  UnsupportedOperationException
   *          If this provider that does not support creating file channels,
   *          or an unsupported open option or file attribute is specified
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default file system, the {@link
   *          SecurityManager#checkRead(String)} method is invoked to check
   *          read access if the file is opened for reading. The {@link
   *          SecurityManager#checkWrite(String)} method is invoked to check
   *          write access if the file is opened for writing
  */
  newFileChannel(path: Path, options: Set<OpenOption>, ...attrs: FileAttribute[]): FileChannel;
  /**
   * Opens or creates a file for reading and/or writing, returning an
   * asynchronous file channel to access the file. This method works in
   * exactly the manner specified by the {@link
   * AsynchronousFileChannel#open(Path,Set,ExecutorService,FileAttribute[])
   * AsynchronousFileChannel.open} method.
   * A provider that does not support all the features required to construct
   * an asynchronous file channel throws `UnsupportedOperationException`.
   * The default provider is required to support the creation of asynchronous
   * file channels. When not overridden, the default implementation of this
   * method throws `UnsupportedOperationException`.
   *
   * @param   path
   *          the path of the file to open or create
   * @param   options
   *          options specifying how the file is opened
   * @param   executor
   *          the thread pool or `null` to associate the channel with
   *          the default thread pool
   * @param   attrs
   *          an optional list of file attributes to set atomically when
   *          creating the file
   *
   * @return  a new asynchronous file channel
   *
   * @throws  IllegalArgumentException
   *          If the set contains an invalid combination of options
   * @throws  UnsupportedOperationException
   *          If this provider that does not support creating asynchronous file
   *          channels, or an unsupported open option or file attribute is
   *          specified
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default file system, the {@link
   *          SecurityManager#checkRead(String)} method is invoked to check
   *          read access if the file is opened for reading. The {@link
   *          SecurityManager#checkWrite(String)} method is invoked to check
   *          write access if the file is opened for writing
  */
  newAsynchronousFileChannel(path: Path, options: Set<OpenOption>, executor: ExecutorService, ...attrs: FileAttribute[]): AsynchronousFileChannel;
  /**
   * Opens or creates a file, returning a seekable byte channel to access the
   * file. This method works in exactly the manner specified by the {@link
   * Files#newByteChannel(Path,Set,FileAttribute[])} method.
   *
   * @param   path
   *          the path to the file to open or create
   * @param   options
   *          options specifying how the file is opened
   * @param   attrs
   *          an optional list of file attributes to set atomically when
   *          creating the file
   *
   * @return  a new seekable byte channel
   *
   * @throws  IllegalArgumentException
   *          if the set contains an invalid combination of options
   * @throws  UnsupportedOperationException
   *          if an unsupported open option is specified or the array contains
   *          attributes that cannot be set atomically when creating the file
   * @throws  FileAlreadyExistsException
   *          if a file of that name already exists and the {@link
   *          StandardOpenOption#CREATE_NEW CREATE_NEW} option is specified
   *          (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the path if the file is
   *          opened for reading. The {@link SecurityManager#checkWrite(String)
   *          checkWrite} method is invoked to check write access to the path
   *          if the file is opened for writing. The {@link
   *          SecurityManager#checkDelete(String) checkDelete} method is
   *          invoked to check delete access if the file is opened with the
   *          `DELETE_ON_CLOSE` option.
  */
  newByteChannel(path: Path, options: Set<OpenOption>, ...attrs: FileAttribute[]): SeekableByteChannel;
  /**
   * Opens a directory, returning a `DirectoryStream` to iterate over
   * the entries in the directory. This method works in exactly the manner
   * specified by the {@link
   * Files#newDirectoryStream(java.nio.file.Path, java.nio.file.DirectoryStream.Filter)}
   * method.
   *
   * @param   dir
   *          the path to the directory
   * @param   filter
   *          the directory stream filter
   *
   * @return  a new and open `DirectoryStream` object
   *
   * @throws  NotDirectoryException
   *          if the file could not otherwise be opened because it is not
   *          a directory (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the directory.
  */
  newDirectoryStream(dir: Path, filter: Filter<any>): DirectoryStream<Path>;
  /**
   * Creates a new directory. This method works in exactly the manner
   * specified by the {@link Files#createDirectory} method.
   *
   * @param   dir
   *          the directory to create
   * @param   attrs
   *          an optional list of file attributes to set atomically when
   *          creating the directory
   *
   * @throws  UnsupportedOperationException
   *          if the array contains an attribute that cannot be set atomically
   *          when creating the directory
   * @throws  FileAlreadyExistsException
   *          if a directory could not otherwise be created because a file of
   *          that name already exists (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs or the parent directory does not exist
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the new directory.
  */
  createDirectory(dir: Path, ...attrs: FileAttribute[]): void;
  /**
   * Creates a symbolic link to a target. This method works in exactly the
   * manner specified by the {@link Files#createSymbolicLink} method.
   *
   *  The default implementation of this method throws `     * UnsupportedOperationException`.
   *
   * @param   link
   *          the path of the symbolic link to create
   * @param   target
   *          the target of the symbolic link
   * @param   attrs
   *          the array of attributes to set atomically when creating the
   *          symbolic link
   *
   * @throws  UnsupportedOperationException
   *          if the implementation does not support symbolic links or the
   *          array contains an attribute that cannot be set atomically when
   *          creating the symbolic link
   * @throws  FileAlreadyExistsException
   *          if a file with the name already exists (optional specific
   *          exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager
   *          is installed, it denies {@link LinkPermission}`("symbolic")`
   *          or its {@link SecurityManager#checkWrite(String) checkWrite}
   *          method denies write access to the path of the symbolic link.
  */
  createSymbolicLink(link: Path, target: Path, ...attrs: FileAttribute[]): void;
  /**
   * Creates a new link (directory entry) for an existing file. This method
   * works in exactly the manner specified by the {@link Files#createLink}
   * method.
   *
   *  The default implementation of this method throws `     * UnsupportedOperationException`.
   *
   * @param   link
   *          the link (directory entry) to create
   * @param   existing
   *          a path to an existing file
   *
   * @throws  UnsupportedOperationException
   *          if the implementation does not support adding an existing file
   *          to a directory
   * @throws  FileAlreadyExistsException
   *          if the entry could not otherwise be created because a file of
   *          that name already exists (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager
   *          is installed, it denies {@link LinkPermission}`("hard")`
   *          or its {@link SecurityManager#checkWrite(String) checkWrite}
   *          method denies write access to either the  link or the
   *          existing file.
  */
  createLink(link: Path, existing: Path): void;
  /**
   * Deletes a file. This method works in exactly the  manner specified by the
   * {@link Files#delete} method.
   *
   * @param   path
   *          the path to the file to delete
   *
   * @throws  NoSuchFileException
   *          if the file does not exist (optional specific exception)
   * @throws  DirectoryNotEmptyException
   *          if the file is a directory and could not otherwise be deleted
   *          because the directory is not empty (optional specific
   *          exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkDelete(String)} method
   *          is invoked to check delete access to the file
  */
  delete(path: Path): void;
  /**
   * Deletes a file if it exists. This method works in exactly the manner
   * specified by the {@link Files#deleteIfExists} method.
   *
   *  The default implementation of this method simply invokes {@link
   * #delete} ignoring the `NoSuchFileException` when the file does not
   * exist. It may be overridden where appropriate.
   *
   * @param   path
   *          the path to the file to delete
   *
   * @return  `true` if the file was deleted by this method; `     *          false` if the file could not be deleted because it did not
   *          exist
   *
   * @throws  DirectoryNotEmptyException
   *          if the file is a directory and could not otherwise be deleted
   *          because the directory is not empty (optional specific
   *          exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkDelete(String)} method
   *          is invoked to check delete access to the file
  */
  deleteIfExists(path: Path): boolean;
  /**
   * Reads the target of a symbolic link. This method works in exactly the
   * manner specified by the {@link Files#readSymbolicLink} method.
   *
   *  The default implementation of this method throws `     * UnsupportedOperationException`.
   *
   * @param   link
   *          the path to the symbolic link
   *
   * @return  The target of the symbolic link
   *
   * @throws  UnsupportedOperationException
   *          if the implementation does not support symbolic links
   * @throws  NotLinkException
   *          if the target could otherwise not be read because the file
   *          is not a symbolic link (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager
   *          is installed, it checks that `FilePermission` has been
   *          granted with the "`readlink`" action to read the link.
  */
  readSymbolicLink(link: Path): Path;
  /**
   * Copy a file to a target file. This method works in exactly the manner
   * specified by the {@link Files#copy(Path,Path,CopyOption[])} method
   * except that both the source and target paths must be associated with
   * this provider.
   *
   * @param   source
   *          the path to the file to copy
   * @param   target
   *          the path to the target file
   * @param   options
   *          options specifying how the copy should be done
   *
   * @throws  UnsupportedOperationException
   *          if the array contains a copy option that is not supported
   * @throws  FileAlreadyExistsException
   *          if the target file exists but cannot be replaced because the
   *          `REPLACE_EXISTING` option is not specified (optional
   *          specific exception)
   * @throws  DirectoryNotEmptyException
   *          the `REPLACE_EXISTING` option is specified but the file
   *          cannot be replaced because it is a non-empty directory
   *          (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the source file, the
   *          {@link SecurityManager#checkWrite(String) checkWrite} is invoked
   *          to check write access to the target file. If a symbolic link is
   *          copied the security manager is invoked to check {@link
   *          LinkPermission}`("symbolic")`.
  */
  copy(source: Path, target: Path, ...options: CopyOption[]): void;
  /**
   * Move or rename a file to a target file. This method works in exactly the
   * manner specified by the {@link Files#move} method except that both the
   * source and target paths must be associated with this provider.
   *
   * @param   source
   *          the path to the file to move
   * @param   target
   *          the path to the target file
   * @param   options
   *          options specifying how the move should be done
   *
   * @throws  UnsupportedOperationException
   *          if the array contains a copy option that is not supported
   * @throws  FileAlreadyExistsException
   *          if the target file exists but cannot be replaced because the
   *          `REPLACE_EXISTING` option is not specified (optional
   *          specific exception)
   * @throws  DirectoryNotEmptyException
   *          the `REPLACE_EXISTING` option is specified but the file
   *          cannot be replaced because it is a non-empty directory
   *          (optional specific exception)
   * @throws  AtomicMoveNotSupportedException
   *          if the options array contains the `ATOMIC_MOVE` option but
   *          the file cannot be moved as an atomic file system operation.
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to both the source and
   *          target file.
  */
  move(source: Path, target: Path, ...options: CopyOption[]): void;
  /**
   * Tests if two paths locate the same file. This method works in exactly the
   * manner specified by the {@link Files#isSameFile} method.
   *
   * @param   path
   *          one path to the file
   * @param   path2
   *          the other path
   *
   * @return  `true` if, and only if, the two paths locate the same file
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to both files.
  */
  isSameFile(path: Path, path2: Path): boolean;
  /**
   * Tells whether or not a file is considered hidden. This method
   * works in exactly the manner specified by the {@link Files#isHidden}
   * method.
   *
   *  This method is invoked by the {@link Files#isHidden isHidden} method.
   *
   * @param   path
   *          the path to the file to test
   *
   * @return  `true` if the file is considered hidden
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file.
  */
  isHidden(path: Path): boolean;
  /**
   * Returns the {@link FileStore} representing the file store where a file
   * is located. This method works in exactly the manner specified by the
   * {@link Files#getFileStore} method.
   *
   * @param   path
   *          the path to the file
   *
   * @return  the file store where the file is stored
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file, and in
   *          addition it checks
   *          {@link RuntimePermission}`("getFileStoreAttributes")`
  */
  getFileStore(path: Path): FileStore;
  /**
   * Checks the existence, and optionally the accessibility, of a file.
   *
   *  This method may be used by the {@link Files#isReadable isReadable},
   * {@link Files#isWritable isWritable} and {@link Files#isExecutable
   * isExecutable} methods to check the accessibility of a file.
   *
   *  This method checks the existence of a file and that this Java virtual
   * machine has appropriate privileges that would allow it access the file
   * according to all of access modes specified in the `modes` parameter
   * as follows:
   *
   * 
   * Access Modes
   * 
   *  Value Description 
   * 
   * 
   * 
   *    {@link AccessMode#READ READ} 
   *    Checks that the file exists and that the Java virtual machine has
   *     permission to read the file. 
   * 
   * 
   *    {@link AccessMode#WRITE WRITE} 
   *    Checks that the file exists and that the Java virtual machine has
   *     permission to write to the file, 
   * 
   * 
   *    {@link AccessMode#EXECUTE EXECUTE} 
   *    Checks that the file exists and that the Java virtual machine has
   *     permission to {@link Runtime#exec execute} the file. The semantics
   *     may differ when checking access to a directory. For example, on UNIX
   *     systems, checking for `EXECUTE` access checks that the Java
   *     virtual machine has permission to search the directory in order to
   *     access file or subdirectories. 
   * 
   * 
   * 
   *
   *  If the `modes` parameter is of length zero, then the existence
   * of the file is checked.
   *
   *  This method follows symbolic links if the file referenced by this
   * object is a symbolic link. Depending on the implementation, this method
   * may require to read file permissions, access control lists, or other
   * file attributes in order to check the effective access to the file. To
   * determine the effective access to a file may require access to several
   * attributes and so in some implementations this method may not be atomic
   * with respect to other file system operations.
   *
   * @param   path
   *          the path to the file to check
   * @param   modes
   *          The access modes to check; may have zero elements
   *
   * @throws  UnsupportedOperationException
   *          an implementation is required to support checking for
   *          `READ`, `WRITE`, and `EXECUTE` access. This
   *          exception is specified to allow for the `Access` enum to
   *          be extended in future releases.
   * @throws  NoSuchFileException
   *          if a file does not exist (optional specific exception)
   * @throws  AccessDeniedException
   *          the requested access would be denied or the access cannot be
   *          determined because the Java virtual machine has insufficient
   *          privileges or other reasons. (optional specific exception)
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, the {@link SecurityManager#checkRead(String) checkRead}
   *          is invoked when checking read access to the file or only the
   *          existence of the file, the {@link SecurityManager#checkWrite(String)
   *          checkWrite} is invoked when checking write access to the file,
   *          and {@link SecurityManager#checkExec(String) checkExec} is invoked
   *          when checking execute access.
  */
  checkAccess(path: Path, ...modes: AccessMode[]): void;
  /**
   * Returns a file attribute view of a given type. This method works in
   * exactly the manner specified by the {@link Files#getFileAttributeView}
   * method.
   *
   * @param   
   *          The `FileAttributeView` type
   * @param   path
   *          the path to the file
   * @param   type
   *          the `Class` object corresponding to the file attribute view
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  a file attribute view of the specified type, or `null` if
   *          the attribute view type is not available
  */
  getFileAttributeView<V>(path: Path, type: Class<V>, ...options: LinkOption[]): V;
  /**
   * Reads a file's attributes as a bulk operation. This method works in
   * exactly the manner specified by the {@link
   * Files#readAttributes(Path,Class,LinkOption[])} method.
   *
   * @param   
   *          The `BasicFileAttributes` type
   * @param   path
   *          the path to the file
   * @param   type
   *          the `Class` of the file attributes required
   *          to read
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  the file attributes
   *
   * @throws  UnsupportedOperationException
   *          if an attributes of the given type are not supported
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, its {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file
  */
  readAttributes<A>(path: Path, type: Class<A>, ...options: LinkOption[]): A;
  /**
   * Reads a set of file attributes as a bulk operation. This method works in
   * exactly the manner specified by the {@link
   * Files#readAttributes(Path,String,LinkOption[])} method.
   *
   * @param   path
   *          the path to the file
   * @param   attributes
   *          the attributes to read
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @return  a map of the attributes returned; may be empty. The map's keys
   *          are the attribute names, its values are the attribute values
   *
   * @throws  UnsupportedOperationException
   *          if the attribute view is not available
   * @throws  IllegalArgumentException
   *          if no attributes are specified or an unrecognized attributes is
   *          specified
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, its {@link SecurityManager#checkRead(String) checkRead}
   *          method denies read access to the file. If this method is invoked
   *          to read security sensitive attributes then the security manager
   *          may be invoke to check for additional permissions.
  */
  readAttributes(path: Path, attributes: string, ...options: LinkOption[]): Map<string, any>;
  /**
   * Sets the value of a file attribute. This method works in exactly the
   * manner specified by the {@link Files#setAttribute} method.
   *
   * @param   path
   *          the path to the file
   * @param   attribute
   *          the attribute to set
   * @param   value
   *          the attribute value
   * @param   options
   *          options indicating how symbolic links are handled
   *
   * @throws  UnsupportedOperationException
   *          if the attribute view is not available
   * @throws  IllegalArgumentException
   *          if the attribute name is not specified, or is not recognized, or
   *          the attribute value is of the correct type but has an
   *          inappropriate value
   * @throws  ClassCastException
   *          If the attribute value is not of the expected type or is a
   *          collection containing elements that are not of the expected
   *          type
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, its {@link SecurityManager#checkWrite(String) checkWrite}
   *          method denies write access to the file. If this method is invoked
   *          to set security sensitive attributes then the security manager
   *          may be invoked to check for additional permissions.
  */
  setAttribute(path: Path, attribute: string, value: any, ...options: LinkOption[]): void;
}

}
declare module 'java.nio.file.DirectoryStream' {
/**
 * An interface that is implemented by objects that decide if a directory
 * entry should be accepted or filtered. A `Filter` is passed as the
 * parameter to the {@link Files#newDirectoryStream(Path,DirectoryStream.Filter)}
 * method when opening a directory to iterate over the entries in the
 * directory.
 *
 * @param        the type of the directory entry
 *
 * @since 1.7
*/
export class Filter<T> {
  /**
   * Decides if the given directory entry should be accepted or filtered.
   *
   * @param   entry
   *          the directory entry to be tested
   *
   * @return  `true` if the directory entry should be accepted
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  accept(entry: T): boolean;
}

}
declare module 'java.nio.channels' {
import { Set } from 'java.util';
import { ThreadFactory, ExecutorService, Future, TimeUnit } from 'java.util.concurrent';
import { MappedByteBuffer, ByteBuffer } from 'java.nio';
import { Path, OpenOption } from 'java.nio.file';
import { CharsetDecoder, Charset, CharsetEncoder } from 'java.nio.charset';
import { IllegalStateException, AutoCloseable, Throwable, Void, IllegalArgumentException } from 'java.lang';
import { ProtocolFamily, SocketOption, DatagramSocket, NetworkInterface, ServerSocket, SocketAddress, InetAddress, Socket } from 'java.net';
import { InputStream, OutputStream, Closeable, Reader, IOException, Writer } from 'java.io';
import { AsynchronousChannelProvider, SelectorProvider, AbstractInterruptibleChannel, AbstractSelectableChannel } from 'java.nio.channels.spi';
import { VarHandle } from 'java.lang.invoke';
import { Consumer } from 'java.util.function';
import { MapMode } from 'java.nio.channels.FileChannel';
import { FileAttribute } from 'java.nio.file.attribute';
import { SourceChannel, SinkChannel } from 'java.nio.channels.Pipe';
export class Channel extends Closeable {
  /**
   * Tells whether or not this channel is open.
   *
   * @return `true` if, and only if, this channel is open
  */
  isOpen(): boolean;
  /**
   * Closes this channel.
   *
   *  After a channel is closed, any further attempt to invoke I/O
   * operations upon it will cause a {@link ClosedChannelException} to be
   * thrown.
   *
   *  If this channel is already closed then invoking this method has no
   * effect.
   *
   *  This method may be invoked at any time.  If some other thread has
   * already invoked it, however, then another invocation will block until
   * the first invocation is complete, after which it will return without
   * effect. 
   *
   * @throws  IOException  If an I/O error occurs
  */
  close(): void;
}
export class UnsupportedAddressTypeException extends IllegalArgumentException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class InterruptibleChannel extends Channel {
  /**
   * Closes this channel.
   *
   *  Any thread currently blocked in an I/O operation upon this channel
   * will receive an {@link AsynchronousCloseException}.
   *
   *  This method otherwise behaves exactly as specified by the {@link
   * Channel#close Channel} interface.  
   *
   * @throws  IOException  If an I/O error occurs
  */
  close(): void;
}
export class AsynchronousChannel extends Channel {
  /**
   * Closes this channel.
   *
   *  Any outstanding asynchronous operations upon this channel will
   * complete with the exception {@link AsynchronousCloseException}. After a
   * channel is closed, further attempts to initiate asynchronous I/O
   * operations complete immediately with cause {@link ClosedChannelException}.
   *
   *   This method otherwise behaves exactly as specified by the {@link
   * Channel} interface.
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  close(): void;
}
export class AlreadyBoundException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class NonWritableChannelException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class AsynchronousFileChannel extends AsynchronousChannel {
  /**
   * Opens or creates a file for reading and/or writing, returning an
   * asynchronous file channel to access the file.
   *
   *  The `options` parameter determines how the file is opened.
   * The {@link StandardOpenOption#READ READ} and {@link StandardOpenOption#WRITE
   * WRITE} options determines if the file should be opened for reading and/or
   * writing. If neither option is contained in the array then an existing file
   * is opened for  reading.
   *
   *  In addition to `READ` and `WRITE`, the following options
   * may be present:
   *
   * 
   * additional options
   * 
   *  Option Description 
   * 
   * 
   * 
   *    {@link StandardOpenOption#TRUNCATE_EXISTING TRUNCATE_EXISTING} 
   *    When opening an existing file, the file is first truncated to a
   *   size of 0 bytes. This option is ignored when the file is opened only
   *   for reading.
   * 
   * 
   *    {@link StandardOpenOption#CREATE_NEW CREATE_NEW} 
   *    If this option is present then a new file is created, failing if
   *   the file already exists. When creating a file the check for the
   *   existence of the file and the creation of the file if it does not exist
   *   is atomic with respect to other file system operations. This option is
   *   ignored when the file is opened only for reading. 
   * 
   * 
   *    {@link StandardOpenOption#CREATE CREATE} 
   *    If this option is present then an existing file is opened if it
   *   exists, otherwise a new file is created. When creating a file the check
   *   for the existence of the file and the creation of the file if it does
   *   not exist is atomic with respect to other file system operations. This
   *   option is ignored if the `CREATE_NEW` option is also present or
   *   the file is opened only for reading. 
   * 
   * 
   *    {@link StandardOpenOption#DELETE_ON_CLOSE DELETE_ON_CLOSE} 
   *    When this option is present then the implementation makes a
   *   best effort attempt to delete the file when closed by
   *   the {@link #close close} method. If the `close` method is not
   *   invoked then a best effort attempt is made to delete the file
   *   when the Java virtual machine terminates. 
   * 
   * 
   *   {@link StandardOpenOption#SPARSE SPARSE} 
   *    When creating a new file this option is a hint that the
   *   new file will be sparse. This option is ignored when not creating
   *   a new file. 
   * 
   * 
   *    {@link StandardOpenOption#SYNC SYNC} 
   *    Requires that every update to the file's content or metadata be
   *   written synchronously to the underlying storage device. (see  Synchronized I/O file
   *   integrity). 
   * 
   * 
   *    {@link StandardOpenOption#DSYNC DSYNC} 
   *    Requires that every update to the file's content be written
   *   synchronously to the underlying storage device. (see  Synchronized I/O file
   *   integrity). 
   * 
   * 
   * 
   *
   *  An implementation may also support additional options.
   *
   *  The `executor` parameter is the {@link ExecutorService} to
   * which tasks are submitted to handle I/O events and dispatch completion
   * results for operations initiated on resulting channel.
   * The nature of these tasks is highly implementation specific and so care
   * should be taken when configuring the `Executor`. Minimally it
   * should support an unbounded work queue and should not run tasks on the
   * caller thread of the {@link ExecutorService#execute execute} method.
   * Shutting down the executor service while the channel is open results in
   * unspecified behavior.
   *
   *  The `attrs` parameter is an optional array of file {@link
   * FileAttribute file-attributes} to set atomically when creating the file.
   *
   *  The new channel is created by invoking the {@link
   * FileSystemProvider#newFileChannel newFileChannel} method on the
   * provider that created the `Path`.
   *
   * @param   file
   *          The path of the file to open or create
   * @param   options
   *          Options specifying how the file is opened
   * @param   executor
   *          The thread pool or `null` to associate the channel with
   *          the default thread pool
   * @param   attrs
   *          An optional list of file attributes to set atomically when
   *          creating the file
   *
   * @return  A new asynchronous file channel
   *
   * @throws  IllegalArgumentException
   *          If the set contains an invalid combination of options
   * @throws  UnsupportedOperationException
   *          If the `file` is associated with a provider that does not
   *          support creating asynchronous file channels, or an unsupported
   *          open option is specified, or the array contains an attribute that
   *          cannot be set atomically when creating the file
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  SecurityException
   *          If a security manager is installed and it denies an
   *          unspecified permission required by the implementation.
   *          In the case of the default provider, the {@link
   *          SecurityManager#checkRead(String)} method is invoked to check
   *          read access if the file is opened for reading. The {@link
   *          SecurityManager#checkWrite(String)} method is invoked to check
   *          write access if the file is opened for writing
  */
  static open(file: Path, options: Set<OpenOption>, executor: ExecutorService, ...attrs: FileAttribute[]): AsynchronousFileChannel;
  /**
   * Opens or creates a file for reading and/or writing, returning an
   * asynchronous file channel to access the file.
   *
   *  An invocation of this method behaves in exactly the same way as the
   * invocation
   *      *     ch.{@link #open(Path,Set,ExecutorService,FileAttribute[])
   *       open}(file, opts, null, new FileAttribute<?>[0]);
   * 
   * where `opts` is a `Set` containing the options specified to
   * this method.
   *
   *  The resulting channel is associated with default thread pool to which
   * tasks are submitted to handle I/O events and dispatch to completion
   * handlers that consume the result of asynchronous operations performed on
   * the resulting channel.
   *
   * @param   file
   *          The path of the file to open or create
   * @param   options
   *          Options specifying how the file is opened
   *
   * @return  A new asynchronous file channel
   *
   * @throws  IllegalArgumentException
   *          If the set contains an invalid combination of options
   * @throws  UnsupportedOperationException
   *          If the `file` is associated with a provider that does not
   *          support creating file channels, or an unsupported open option is
   *          specified
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  SecurityException
   *          If a security manager is installed and it denies an
   *          unspecified permission required by the implementation.
   *          In the case of the default provider, the {@link
   *          SecurityManager#checkRead(String)} method is invoked to check
   *          read access if the file is opened for reading. The {@link
   *          SecurityManager#checkWrite(String)} method is invoked to check
   *          write access if the file is opened for writing
  */
  static open(file: Path, ...options: OpenOption[]): AsynchronousFileChannel;
  /**
   * Returns the current size of this channel's file.
   *
   * @return  The current size of this channel's file, measured in bytes
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  IOException
   *          If some other I/O error occurs
  */
  size(): number;
  /**
   * Truncates this channel's file to the given size.
   *
   *  If the given size is less than the file's current size then the file
   * is truncated, discarding any bytes beyond the new end of the file.  If
   * the given size is greater than or equal to the file's current size then
   * the file is not modified. 
   *
   * @param  size
   *         The new size, a non-negative byte count
   *
   * @return  This file channel
   *
   * @throws  NonWritableChannelException
   *          If this channel was not opened for writing
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  IllegalArgumentException
   *          If the new size is negative
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  truncate(size: number): AsynchronousFileChannel;
  /**
   * Forces any updates to this channel's file to be written to the storage
   * device that contains it.
   *
   *  If this channel's file resides on a local storage device then when
   * this method returns it is guaranteed that all changes made to the file
   * since this channel was created, or since this method was last invoked,
   * will have been written to that device.  This is useful for ensuring that
   * critical information is not lost in the event of a system crash.
   *
   *  If the file does not reside on a local device then no such guarantee
   * is made.
   *
   *  The `metaData` parameter can be used to limit the number of
   * I/O operations that this method is required to perform.  Passing
   * `false` for this parameter indicates that only updates to the
   * file's content need be written to storage; passing `true`
   * indicates that updates to both the file's content and metadata must be
   * written, which generally requires at least one more I/O operation.
   * Whether this parameter actually has any effect is dependent upon the
   * underlying operating system and is therefore unspecified.
   *
   *  Invoking this method may cause an I/O operation to occur even if the
   * channel was only opened for reading.  Some operating systems, for
   * example, maintain a last-access time as part of a file's metadata, and
   * this time is updated whenever the file is read.  Whether or not this is
   * actually done is system-dependent and is therefore unspecified.
   *
   *  This method is only guaranteed to force changes that were made to
   * this channel's file via the methods defined in this class.
   *
   * @param   metaData
   *          If `true` then this method is required to force changes
   *          to both the file's content and metadata to be written to
   *          storage; otherwise, it need only force content changes to be
   *          written
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  force(metaData: boolean): void;
  /**
   * Acquires a lock on the given region of this channel's file.
   *
   *  This method initiates an operation to acquire a lock on the given
   * region of this channel's file. The `handler` parameter is a
   * completion handler that is invoked when the lock is acquired (or the
   * operation fails). The result passed to the completion handler is the
   * resulting `FileLock`.
   *
   *  The region specified by the `position` and `size`
   * parameters need not be contained within, or even overlap, the actual
   * underlying file.  Lock regions are fixed in size; if a locked region
   * initially contains the end of the file and the file grows beyond the
   * region then the new portion of the file will not be covered by the lock.
   * If a file is expected to grow in size and a lock on the entire file is
   * required then a region starting at zero, and no smaller than the
   * expected maximum size of the file, should be locked.  The two-argument
   * {@link #lock(Object,CompletionHandler)} method simply locks a region
   * of size {@link Long#MAX_VALUE}. If a lock that overlaps the requested
   * region is already held by this Java virtual machine, or this method has
   * been invoked to lock an overlapping region and that operation has not
   * completed, then this method throws {@link OverlappingFileLockException}.
   *
   *  Some operating systems do not support a mechanism to acquire a file
   * lock in an asynchronous manner. Consequently an implementation may
   * acquire the file lock in a background thread or from a task executed by
   * a thread in the associated thread pool. If there are many lock operations
   * outstanding then it may consume threads in the Java virtual machine for
   * indefinite periods.
   *
   *  Some operating systems do not support shared locks, in which case a
   * request for a shared lock is automatically converted into a request for
   * an exclusive lock.  Whether the newly-acquired lock is shared or
   * exclusive may be tested by invoking the resulting lock object's {@link
   * FileLock#isShared() isShared} method.
   *
   *  File locks are held on behalf of the entire Java virtual machine.
   * They are not suitable for controlling access to a file by multiple
   * threads within the same virtual machine.
   *
   * @param   
   *          The type of the attachment
   * @param   position
   *          The position at which the locked region is to start; must be
   *          non-negative
   * @param   size
   *          The size of the locked region; must be non-negative, and the sum
   *          `position` + `size` must be non-negative
   * @param   shared
   *          `true` to request a shared lock, in which case this
   *          channel must be open for reading (and possibly writing);
   *          `false` to request an exclusive lock, in which case this
   *          channel must be open for writing (and possibly reading)
   * @param   attachment
   *          The object to attach to the I/O operation; can be `null`
   * @param   handler
   *          The handler for consuming the result
   *
   * @throws  OverlappingFileLockException
   *          If a lock that overlaps the requested region is already held by
   *          this Java virtual machine, or there is already a pending attempt
   *          to lock an overlapping region
   * @throws  IllegalArgumentException
   *          If the preconditions on the parameters do not hold
   * @throws  NonReadableChannelException
   *          If `shared` is true but this channel was not opened for reading
   * @throws  NonWritableChannelException
   *          If `shared` is false but this channel was not opened for writing
  */
  lock<A>(position: number, size: number, shared: boolean, attachment: A, handler: CompletionHandler<FileLock, any>): void;
  /**
   * Acquires an exclusive lock on this channel's file.
   *
   *  This method initiates an operation to acquire a lock on the given
   * region of this channel's file. The `handler` parameter is a
   * completion handler that is invoked when the lock is acquired (or the
   * operation fails). The result passed to the completion handler is the
   * resulting `FileLock`.
   *
   *  An invocation of this method of the form `ch.lock(att,handler)`
   * behaves in exactly the same way as the invocation
   *      *     ch.{@link #lock(long,long,boolean,Object,CompletionHandler) lock}(0L, Long.MAX_VALUE, false, att, handler)
   * 
   *
   * @param   
   *          The type of the attachment
   * @param   attachment
   *          The object to attach to the I/O operation; can be `null`
   * @param   handler
   *          The handler for consuming the result
   *
   * @throws  OverlappingFileLockException
   *          If a lock is already held by this Java virtual machine, or there
   *          is already a pending attempt to lock a region
   * @throws  NonWritableChannelException
   *          If this channel was not opened for writing
  */
  lock<A>(attachment: A, handler: CompletionHandler<FileLock, any>): void;
  /**
   * Acquires a lock on the given region of this channel's file.
   *
   *  This method initiates an operation to acquire a lock on the given
   * region of this channel's file.  The method behaves in exactly the same
   * manner as the {@link #lock(long, long, boolean, Object, CompletionHandler)}
   * method except that instead of specifying a completion handler, this
   * method returns a `Future` representing the pending result. The
   * `Future`'s {@link Future#get() get} method returns the {@link
   * FileLock} on successful completion.
   *
   * @param   position
   *          The position at which the locked region is to start; must be
   *          non-negative
   * @param   size
   *          The size of the locked region; must be non-negative, and the sum
   *          `position` + `size` must be non-negative
   * @param   shared
   *          `true` to request a shared lock, in which case this
   *          channel must be open for reading (and possibly writing);
   *          `false` to request an exclusive lock, in which case this
   *          channel must be open for writing (and possibly reading)
   *
   * @return  a `Future` object representing the pending result
   *
   * @throws  OverlappingFileLockException
   *          If a lock is already held by this Java virtual machine, or there
   *          is already a pending attempt to lock a region
   * @throws  IllegalArgumentException
   *          If the preconditions on the parameters do not hold
   * @throws  NonReadableChannelException
   *          If `shared` is true but this channel was not opened for reading
   * @throws  NonWritableChannelException
   *          If `shared` is false but this channel was not opened for writing
  */
  lock(position: number, size: number, shared: boolean): Future<FileLock>;
  /**
   * Acquires an exclusive lock on this channel's file.
   *
   *  This method initiates an operation to acquire an exclusive lock on this
   * channel's file. The method returns a `Future` representing the
   * pending result of the operation. The `Future`'s {@link Future#get()
   * get} method returns the {@link FileLock} on successful completion.
   *
   *  An invocation of this method behaves in exactly the same way as the
   * invocation
   *      *     ch.{@link #lock(long,long,boolean) lock}(0L, Long.MAX_VALUE, false)
   * 
   *
   * @return  a `Future` object representing the pending result
   *
   * @throws  OverlappingFileLockException
   *          If a lock is already held by this Java virtual machine, or there
   *          is already a pending attempt to lock a region
   * @throws  NonWritableChannelException
   *          If this channel was not opened for writing
  */
  lock(): Future<FileLock>;
  /**
   * Attempts to acquire a lock on the given region of this channel's file.
   *
   *  This method does not block. An invocation always returns immediately,
   * either having acquired a lock on the requested region or having failed to
   * do so.  If it fails to acquire a lock because an overlapping lock is held
   * by another program then it returns `null`.  If it fails to acquire
   * a lock for any other reason then an appropriate exception is thrown.
   *
   * @param  position
   *         The position at which the locked region is to start; must be
   *         non-negative
   *
   * @param  size
   *         The size of the locked region; must be non-negative, and the sum
   *         `position` + `size` must be non-negative
   *
   * @param  shared
   *         `true` to request a shared lock,
   *         `false` to request an exclusive lock
   *
   * @return  A lock object representing the newly-acquired lock,
   *          or `null` if the lock could not be acquired
   *          because another program holds an overlapping lock
   *
   * @throws  IllegalArgumentException
   *          If the preconditions on the parameters do not hold
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  OverlappingFileLockException
   *          If a lock that overlaps the requested region is already held by
   *          this Java virtual machine, or if another thread is already
   *          blocked in this method and is attempting to lock an overlapping
   *          region of the same file
   * @throws  NonReadableChannelException
   *          If `shared` is true but this channel was not opened for reading
   * @throws  NonWritableChannelException
   *          If `shared` is false but this channel was not opened for writing
   *
   * @throws  IOException
   *          If some other I/O error occurs
   *
   * @see     #lock(Object,CompletionHandler)
   * @see     #lock(long,long,boolean,Object,CompletionHandler)
   * @see     #tryLock()
  */
  tryLock(position: number, size: number, shared: boolean): FileLock;
  /**
   * Attempts to acquire an exclusive lock on this channel's file.
   *
   *  An invocation of this method of the form `ch.tryLock()`
   * behaves in exactly the same way as the invocation
   *
   *      *     ch.{@link #tryLock(long,long,boolean) tryLock}(0L, Long.MAX_VALUE, false) 
   *
   * @return  A lock object representing the newly-acquired lock,
   *          or `null` if the lock could not be acquired
   *          because another program holds an overlapping lock
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  OverlappingFileLockException
   *          If a lock that overlaps the requested region is already held by
   *          this Java virtual machine, or if another thread is already
   *          blocked in this method and is attempting to lock an overlapping
   *          region
   * @throws  NonWritableChannelException
   *          If `shared` is false but this channel was not opened for writing
   *
   * @throws  IOException
   *          If some other I/O error occurs
   *
   * @see     #lock(Object,CompletionHandler)
   * @see     #lock(long,long,boolean,Object,CompletionHandler)
   * @see     #tryLock(long,long,boolean)
  */
  tryLock(): FileLock;
  /**
   * Reads a sequence of bytes from this channel into the given buffer,
   * starting at the given file position.
   *
   *  This method initiates the reading of a sequence of bytes from this
   * channel into the given buffer, starting at the given file position. The
   * result of the read is the number of bytes read or `-1` if the given
   * position is greater than or equal to the file's size at the time that the
   * read is attempted.
   *
   *  This method works in the same manner as the {@link
   * AsynchronousByteChannel#read(ByteBuffer,Object,CompletionHandler)}
   * method, except that bytes are read starting at the given file position.
   * If the given file position is greater than the file's size at the time
   * that the read is attempted then no bytes are read.
   *
   * @param   
   *          The type of the attachment
   * @param   dst
   *          The buffer into which bytes are to be transferred
   * @param   position
   *          The file position at which the transfer is to begin;
   *          must be non-negative
   * @param   attachment
   *          The object to attach to the I/O operation; can be `null`
   * @param   handler
   *          The handler for consuming the result
   *
   * @throws  IllegalArgumentException
   *          If the position is negative or the buffer is read-only
   * @throws  NonReadableChannelException
   *          If this channel was not opened for reading
  */
  read<A>(dst: ByteBuffer, position: number, attachment: A, handler: CompletionHandler<number, any>): void;
  /**
   * Reads a sequence of bytes from this channel into the given buffer,
   * starting at the given file position.
   *
   *  This method initiates the reading of a sequence of bytes from this
   * channel into the given buffer, starting at the given file position. This
   * method returns a `Future` representing the pending result of the
   * operation. The `Future`'s {@link Future#get() get} method returns
   * the number of bytes read or `-1` if the given position is greater
   * than or equal to the file's size at the time that the read is attempted.
   *
   *  This method works in the same manner as the {@link
   * AsynchronousByteChannel#read(ByteBuffer)} method, except that bytes are
   * read starting at the given file position. If the given file position is
   * greater than the file's size at the time that the read is attempted then
   * no bytes are read.
   *
   * @param   dst
   *          The buffer into which bytes are to be transferred
   * @param   position
   *          The file position at which the transfer is to begin;
   *          must be non-negative
   *
   * @return  A `Future` object representing the pending result
   *
   * @throws  IllegalArgumentException
   *          If the position is negative or the buffer is read-only
   * @throws  NonReadableChannelException
   *          If this channel was not opened for reading
  */
  read(dst: ByteBuffer, position: number): Future<number>;
  /**
   * Writes a sequence of bytes to this channel from the given buffer, starting
   * at the given file position.
   *
   *  This method works in the same manner as the {@link
   * AsynchronousByteChannel#write(ByteBuffer,Object,CompletionHandler)}
   * method, except that bytes are written starting at the given file position.
   * If the given position is greater than the file's size, at the time that
   * the write is attempted, then the file will be grown to accommodate the new
   * bytes; the values of any bytes between the previous end-of-file and the
   * newly-written bytes are unspecified.
   *
   * @param   
   *          The type of the attachment
   * @param   src
   *          The buffer from which bytes are to be transferred
   * @param   position
   *          The file position at which the transfer is to begin;
   *          must be non-negative
   * @param   attachment
   *          The object to attach to the I/O operation; can be `null`
   * @param   handler
   *          The handler for consuming the result
   *
   * @throws  IllegalArgumentException
   *          If the position is negative
   * @throws  NonWritableChannelException
   *          If this channel was not opened for writing
  */
  write<A>(src: ByteBuffer, position: number, attachment: A, handler: CompletionHandler<number, any>): void;
  /**
   * Writes a sequence of bytes to this channel from the given buffer, starting
   * at the given file position.
   *
   *  This method initiates the writing of a sequence of bytes to this
   * channel from the given buffer, starting at the given file position. The
   * method returns a `Future` representing the pending result of the
   * write operation. The `Future`'s {@link Future#get() get} method
   * returns the number of bytes written.
   *
   *  This method works in the same manner as the {@link
   * AsynchronousByteChannel#write(ByteBuffer)} method, except that bytes are
   * written starting at the given file position. If the given position is
   * greater than the file's size, at the time that the write is attempted,
   * then the file will be grown to accommodate the new bytes; the values of
   * any bytes between the previous end-of-file and the newly-written bytes
   * are unspecified.
   *
   * @param   src
   *          The buffer from which bytes are to be transferred
   * @param   position
   *          The file position at which the transfer is to begin;
   *          must be non-negative
   *
   * @return  A `Future` object representing the pending result
   *
   * @throws  IllegalArgumentException
   *          If the position is negative
   * @throws  NonWritableChannelException
   *          If this channel was not opened for writing
  */
  write(src: ByteBuffer, position: number): Future<number>;
}
export class InterruptedByTimeoutException extends IOException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class Channels {
  /**
   * Constructs a stream that reads bytes from the given channel.
   *
   *  The `read` methods of the resulting stream will throw an
   * {@link IllegalBlockingModeException} if invoked while the underlying
   * channel is in non-blocking mode.  The stream will not be buffered, and
   * it will not support the {@link InputStream#mark mark} or {@link
   * InputStream#reset reset} methods.  The stream will be safe for access by
   * multiple concurrent threads.  Closing the stream will in turn cause the
   * channel to be closed.  
   *
   * @param  ch
   *         The channel from which bytes will be read
   *
   * @return  A new input stream
  */
  static newInputStream(ch: ReadableByteChannel): InputStream;
  /**
   * Constructs a stream that writes bytes to the given channel.
   *
   *  The `write` methods of the resulting stream will throw an
   * {@link IllegalBlockingModeException} if invoked while the underlying
   * channel is in non-blocking mode.  The stream will not be buffered.  The
   * stream will be safe for access by multiple concurrent threads.  Closing
   * the stream will in turn cause the channel to be closed.  
   *
   * @param  ch
   *         The channel to which bytes will be written
   *
   * @return  A new output stream
  */
  static newOutputStream(ch: WritableByteChannel): OutputStream;
  /**
   * Constructs a stream that reads bytes from the given channel.
   *
   *  The stream will not be buffered, and it will not support the {@link
   * InputStream#mark mark} or {@link InputStream#reset reset} methods.  The
   * stream will be safe for access by multiple concurrent threads.  Closing
   * the stream will in turn cause the channel to be closed.  
   *
   * @param  ch
   *         The channel from which bytes will be read
   *
   * @return  A new input stream
   *
   * @since 1.7
  */
  static newInputStream(ch: AsynchronousByteChannel): InputStream;
  /**
   * Constructs a stream that writes bytes to the given channel.
   *
   *  The stream will not be buffered. The stream will be safe for access
   * by multiple concurrent threads.  Closing the stream will in turn cause
   * the channel to be closed.  
   *
   * @param  ch
   *         The channel to which bytes will be written
   *
   * @return  A new output stream
   *
   * @since 1.7
  */
  static newOutputStream(ch: AsynchronousByteChannel): OutputStream;
  /**
   * Constructs a channel that reads bytes from the given stream.
   *
   *  The resulting channel will not be buffered; it will simply redirect
   * its I/O operations to the given stream.  Closing the channel will in
   * turn cause the stream to be closed.  
   *
   * @param  in
   *         The stream from which bytes are to be read
   *
   * @return  A new readable byte channel
  */
  static newChannel(in_: InputStream): ReadableByteChannel;
  /**
   * Constructs a channel that writes bytes to the given stream.
   *
   *  The resulting channel will not be buffered; it will simply redirect
   * its I/O operations to the given stream.  Closing the channel will in
   * turn cause the stream to be closed.  
   *
   * @param  out
   *         The stream to which bytes are to be written
   *
   * @return  A new writable byte channel
  */
  static newChannel(out: OutputStream): WritableByteChannel;
  /**
   * Constructs a reader that decodes bytes from the given channel using the
   * given decoder.
   *
   *  The resulting stream will contain an internal input buffer of at
   * least `minBufferCap` bytes.  The stream's `read` methods
   * will, as needed, fill the buffer by reading bytes from the underlying
   * channel; if the channel is in non-blocking mode when bytes are to be
   * read then an {@link IllegalBlockingModeException} will be thrown.  The
   * resulting stream will not otherwise be buffered, and it will not support
   * the {@link Reader#mark mark} or {@link Reader#reset reset} methods.
   * Closing the stream will in turn cause the channel to be closed.  
   *
   * @param  ch
   *         The channel from which bytes will be read
   *
   * @param  dec
   *         The charset decoder to be used
   *
   * @param  minBufferCap
   *         The minimum capacity of the internal byte buffer,
   *         or `-1` if an implementation-dependent
   *         default capacity is to be used
   *
   * @return  A new reader
  */
  static newReader(ch: ReadableByteChannel, dec: CharsetDecoder, minBufferCap: number): Reader;
  /**
   * Constructs a reader that decodes bytes from the given channel according
   * to the named charset.
   *
   *  An invocation of this method of the form
   *
   *  {@code
   *     Channels.newReader(ch, csname)
   * } 
   *
   * behaves in exactly the same way as the expression
   *
   *  {@code
   *     Channels.newReader(ch, Charset.forName(csName))
   * } 
   *
   * @param  ch
   *         The channel from which bytes will be read
   *
   * @param  csName
   *         The name of the charset to be used
   *
   * @return  A new reader
   *
   * @throws  UnsupportedCharsetException
   *          If no support for the named charset is available
   *          in this instance of the Java virtual machine
  */
  static newReader(ch: ReadableByteChannel, csName: string): Reader;
  /**
   * Constructs a reader that decodes bytes from the given channel according
   * to the given charset.
   *
   *  An invocation of this method of the form
   *
   *  {@code
   *     Channels.newReader(ch, charset)
   * } 
   *
   * behaves in exactly the same way as the expression
   *
   *  {@code
   *     Channels.newReader(ch, Charset.forName(csName).newDecoder(), -1)
   * } 
   *
   *  The reader's default action for malformed-input and unmappable-character
   * errors is to {@linkplain java.nio.charset.CodingErrorAction#REPORT report}
   * them. When more control over the error handling is required, the constructor
   * that takes a {@linkplain java.nio.charset.CharsetDecoder} should be used.
   *
   * @param  ch The channel from which bytes will be read
   *
   * @param  charset The charset to be used
   *
   * @return  A new reader
  */
  static newReader(ch: ReadableByteChannel, charset: Charset): Reader;
  /**
   * Constructs a writer that encodes characters using the given encoder and
   * writes the resulting bytes to the given channel.
   *
   *  The resulting stream will contain an internal output buffer of at
   * least `minBufferCap` bytes.  The stream's `write` methods
   * will, as needed, flush the buffer by writing bytes to the underlying
   * channel; if the channel is in non-blocking mode when bytes are to be
   * written then an {@link IllegalBlockingModeException} will be thrown.
   * The resulting stream will not otherwise be buffered.  Closing the stream
   * will in turn cause the channel to be closed.  
   *
   * @param  ch
   *         The channel to which bytes will be written
   *
   * @param  enc
   *         The charset encoder to be used
   *
   * @param  minBufferCap
   *         The minimum capacity of the internal byte buffer,
   *         or `-1` if an implementation-dependent
   *         default capacity is to be used
   *
   * @return  A new writer
  */
  static newWriter(ch: WritableByteChannel, enc: CharsetEncoder, minBufferCap: number): Writer;
  /**
   * Constructs a writer that encodes characters according to the named
   * charset and writes the resulting bytes to the given channel.
   *
   *  An invocation of this method of the form
   *
   *  {@code
   *     Channels.newWriter(ch, csname)
   * } 
   *
   * behaves in exactly the same way as the expression
   *
   *  {@code
   *     Channels.newWriter(ch, Charset.forName(csName))
   * } 
   *
   * @param  ch
   *         The channel to which bytes will be written
   *
   * @param  csName
   *         The name of the charset to be used
   *
   * @return  A new writer
   *
   * @throws  UnsupportedCharsetException
   *          If no support for the named charset is available
   *          in this instance of the Java virtual machine
  */
  static newWriter(ch: WritableByteChannel, csName: string): Writer;
  /**
   * Constructs a writer that encodes characters according to the given
   * charset and writes the resulting bytes to the given channel.
   *
   *  An invocation of this method of the form
   *
   *  {@code
   *     Channels.newWriter(ch, charset)
   * } 
   *
   * behaves in exactly the same way as the expression
   *
   *  {@code
   *     Channels.newWriter(ch, Charset.forName(csName).newEncoder(), -1)
   * } 
   *
   *  The writer's default action for malformed-input and unmappable-character
   * errors is to {@linkplain java.nio.charset.CodingErrorAction#REPORT report}
   * them. When more control over the error handling is required, the constructor
   * that takes a {@linkplain java.nio.charset.CharsetEncoder} should be used.
   *
   * @param  ch
   *         The channel to which bytes will be written
   *
   * @param  charset
   *         The charset to be used
   *
   * @return  A new writer
  */
  static newWriter(ch: WritableByteChannel, charset: Charset): Writer;
}
export class SelectableChannel extends AbstractInterruptibleChannel {
  /**
   * Returns the provider that created this channel.
   *
   * @return  The provider that created this channel
  */
  provider(): SelectorProvider;
  /**
   * Returns an operation set
   * identifying this channel's supported operations.  The bits that are set
   * in this integer value denote exactly the operations that are valid for
   * this channel.  This method always returns the same value for a given
   * concrete channel class.
   *
   * @return  The valid-operation set
  */
  validOps(): number;
  /**
   * Tells whether or not this channel is currently registered with any
   * selectors.  A newly-created channel is not registered.
   *
   *  Due to the inherent delay between key cancellation and channel
   * deregistration, a channel may remain registered for some time after all
   * of its keys have been cancelled.  A channel may also remain registered
   * for some time after it is closed.  
   *
   * @return `true` if, and only if, this channel is registered
  */
  isRegistered(): boolean;
  /**
   * Retrieves the key representing the channel's registration with the given
   * selector.
   *
   * @param   sel
   *          The selector
   *
   * @return  The key returned when this channel was last registered with the
   *          given selector, or `null` if this channel is not
   *          currently registered with that selector
  */
  keyFor(sel: Selector): SelectionKey;
  /**
   * Registers this channel with the given selector, returning a selection
   * key.
   *
   *  If this channel is currently registered with the given selector then
   * the selection key representing that registration is returned.  The key's
   * interest set will have been changed to `ops`, as if by invoking
   * the {@link SelectionKey#interestOps(int) interestOps(int)} method.  If
   * the `att` argument is not `null` then the key's attachment
   * will have been set to that value.  A {@link CancelledKeyException} will
   * be thrown if the key has already been cancelled.
   *
   *  Otherwise this channel has not yet been registered with the given
   * selector, so it is registered and the resulting new key is returned.
   * The key's initial interest set will be `ops` and its attachment
   * will be `att`.
   *
   *  This method may be invoked at any time.  If this method is invoked
   * while a selection operation is in progress then it has no effect upon
   * that operation; the new registration or change to the key's interest set
   * will be seen by the next selection operation.  If this method is invoked
   * while an invocation of {@link #configureBlocking(boolean) configureBlocking}
   * is in progress then it will block until the channel's blocking mode has
   * been adjusted.
   *
   *  If this channel is closed while this operation is in progress then
   * the key returned by this method will have been cancelled and will
   * therefore be invalid. 
   *
   * @param  sel
   *         The selector with which this channel is to be registered
   *
   * @param  ops
   *         The interest set for the resulting key
   *
   * @param  att
   *         The attachment for the resulting key; may be `null`
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  ClosedSelectorException
   *          If the selector is closed
   *
   * @throws  IllegalBlockingModeException
   *          If this channel is in blocking mode
   *
   * @throws  IllegalSelectorException
   *          If this channel was not created by the same provider
   *          as the given selector
   *
   * @throws  CancelledKeyException
   *          If this channel is currently registered with the given selector
   *          but the corresponding key has already been cancelled
   *
   * @throws  IllegalArgumentException
   *          If a bit in the `ops` set does not correspond to an
   *          operation that is supported by this channel, that is, if
   *          `set & ~validOps() != 0`
   *
   * @return  A key representing the registration of this channel with
   *          the given selector
  */
  register(sel: Selector, ops: number, att: any): SelectionKey;
  /**
   * Registers this channel with the given selector, returning a selection
   * key.
   *
   *  An invocation of this convenience method of the form
   *
   * `sc.register(sel, ops)`
   *
   * behaves in exactly the same way as the invocation
   *
   * `sc.`{@link
   * #register(java.nio.channels.Selector,int,java.lang.Object)
   * register(sel, ops, null)}
   *
   * @param  sel
   *         The selector with which this channel is to be registered
   *
   * @param  ops
   *         The interest set for the resulting key
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  ClosedSelectorException
   *          If the selector is closed
   *
   * @throws  IllegalBlockingModeException
   *          If this channel is in blocking mode
   *
   * @throws  IllegalSelectorException
   *          If this channel was not created by the same provider
   *          as the given selector
   *
   * @throws  CancelledKeyException
   *          If this channel is currently registered with the given selector
   *          but the corresponding key has already been cancelled
   *
   * @throws  IllegalArgumentException
   *          If a bit in `ops` does not correspond to an operation
   *          that is supported by this channel, that is, if {@code set &
   *          ~validOps() != 0}
   *
   * @return  A key representing the registration of this channel with
   *          the given selector
  */
  register(sel: Selector, ops: number): SelectionKey;
  /**
   * Adjusts this channel's blocking mode.
   *
   *  If this channel is registered with one or more selectors then an
   * attempt to place it into blocking mode will cause an {@link
   * IllegalBlockingModeException} to be thrown.
   *
   *  This method may be invoked at any time.  The new blocking mode will
   * only affect I/O operations that are initiated after this method returns.
   * For some implementations this may require blocking until all pending I/O
   * operations are complete.
   *
   *  If this method is invoked while another invocation of this method or
   * of the {@link #register(Selector, int) register} method is in progress
   * then it will first block until the other operation is complete. 
   *
   * @param  block  If `true` then this channel will be placed in
   *                blocking mode; if `false` then it will be placed
   *                non-blocking mode
   *
   * @return  This selectable channel
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  IllegalBlockingModeException
   *          If `block` is `true` and this channel is
   *          registered with one or more selectors
   *
   * @throws IOException
   *         If an I/O error occurs
  */
  configureBlocking(block: boolean): SelectableChannel;
  /**
   * Tells whether or not every I/O operation on this channel will block
   * until it completes.  A newly-created channel is always in blocking mode.
   *
   *  If this channel is closed then the value returned by this method is
   * not specified. 
   *
   * @return `true` if, and only if, this channel is in blocking mode
  */
  isBlocking(): boolean;
  /**
   * Retrieves the object upon which the {@link #configureBlocking
   * configureBlocking} and {@link #register register} methods synchronize.
   * This is often useful in the implementation of adaptors that require a
   * specific blocking mode to be maintained for a short period of time.
   *
   * @return  The blocking-mode lock object
  */
  blockingLock(): any;
}
export interface SelectableChannel extends AbstractInterruptibleChannel, Channel {}
export class ShutdownChannelGroupException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class AsynchronousByteChannel extends AsynchronousChannel {
  /**
   * Reads a sequence of bytes from this channel into the given buffer.
   *
   *  This method initiates an asynchronous read operation to read a
   * sequence of bytes from this channel into the given buffer. The `     * handler` parameter is a completion handler that is invoked when the read
   * operation completes (or fails). The result passed to the completion
   * handler is the number of bytes read or `-1` if no bytes could be
   * read because the channel has reached end-of-stream.
   *
   *  The read operation may read up to r bytes from the channel,
   * where r is the number of bytes remaining in the buffer, that is,
   * `dst.remaining()` at the time that the read is attempted. Where
   * r is 0, the read operation completes immediately with a result of
   * `0` without initiating an I/O operation.
   *
   *  Suppose that a byte sequence of length n is read, where
   * `0` `<` n `<=` r.
   * This byte sequence will be transferred into the buffer so that the first
   * byte in the sequence is at index p and the last byte is at index
   * p `+` n `-` `1`,
   * where p is the buffer's position at the moment the read is
   * performed. Upon completion the buffer's position will be equal to
   * p `+` n; its limit will not have changed.
   *
   *  Buffers are not safe for use by multiple concurrent threads so care
   * should be taken to not access the buffer until the operation has
   * completed.
   *
   *  This method may be invoked at any time. Some channel types may not
   * allow more than one read to be outstanding at any given time. If a thread
   * initiates a read operation before a previous read operation has
   * completed then a {@link ReadPendingException} will be thrown.
   *
   * @param   
   *          The type of the attachment
   * @param   dst
   *          The buffer into which bytes are to be transferred
   * @param   attachment
   *          The object to attach to the I/O operation; can be `null`
   * @param   handler
   *          The completion handler
   *
   * @throws  IllegalArgumentException
   *          If the buffer is read-only
   * @throws  ReadPendingException
   *          If the channel does not allow more than one read to be outstanding
   *          and a previous read has not completed
   * @throws  ShutdownChannelGroupException
   *          If the channel is associated with a {@link AsynchronousChannelGroup
   *          group} that has terminated
  */
  read<A>(dst: ByteBuffer, attachment: A, handler: CompletionHandler<number, any>): void;
  /**
   * Reads a sequence of bytes from this channel into the given buffer.
   *
   *  This method initiates an asynchronous read operation to read a
   * sequence of bytes from this channel into the given buffer. The method
   * behaves in exactly the same manner as the {@link
   * #read(ByteBuffer,Object,CompletionHandler)
   * read(ByteBuffer,Object,CompletionHandler)} method except that instead
   * of specifying a completion handler, this method returns a `Future`
   * representing the pending result. The `Future`'s {@link Future#get()
   * get} method returns the number of bytes read or `-1` if no bytes
   * could be read because the channel has reached end-of-stream.
   *
   * @param   dst
   *          The buffer into which bytes are to be transferred
   *
   * @return  A Future representing the result of the operation
   *
   * @throws  IllegalArgumentException
   *          If the buffer is read-only
   * @throws  ReadPendingException
   *          If the channel does not allow more than one read to be outstanding
   *          and a previous read has not completed
  */
  read(dst: ByteBuffer): Future<number>;
  /**
   * Writes a sequence of bytes to this channel from the given buffer.
   *
   *  This method initiates an asynchronous write operation to write a
   * sequence of bytes to this channel from the given buffer. The `     * handler` parameter is a completion handler that is invoked when the write
   * operation completes (or fails). The result passed to the completion
   * handler is the number of bytes written.
   *
   *  The write operation may write up to r bytes to the channel,
   * where r is the number of bytes remaining in the buffer, that is,
   * `src.remaining()` at the time that the write is attempted. Where
   * r is 0, the write operation completes immediately with a result of
   * `0` without initiating an I/O operation.
   *
   *  Suppose that a byte sequence of length n is written, where
   * `0` `<` n `<=` r.
   * This byte sequence will be transferred from the buffer starting at index
   * p, where p is the buffer's position at the moment the
   * write is performed; the index of the last byte written will be
   * p `+` n `-` `1`.
   * Upon completion the buffer's position will be equal to
   * p `+` n; its limit will not have changed.
   *
   *  Buffers are not safe for use by multiple concurrent threads so care
   * should be taken to not access the buffer until the operation has
   * completed.
   *
   *  This method may be invoked at any time. Some channel types may not
   * allow more than one write to be outstanding at any given time. If a thread
   * initiates a write operation before a previous write operation has
   * completed then a {@link WritePendingException} will be thrown.
   *
   * @param   
   *          The type of the attachment
   * @param   src
   *          The buffer from which bytes are to be retrieved
   * @param   attachment
   *          The object to attach to the I/O operation; can be `null`
   * @param   handler
   *          The completion handler object
   *
   * @throws  WritePendingException
   *          If the channel does not allow more than one write to be outstanding
   *          and a previous write has not completed
   * @throws  ShutdownChannelGroupException
   *          If the channel is associated with a {@link AsynchronousChannelGroup
   *          group} that has terminated
  */
  write<A>(src: ByteBuffer, attachment: A, handler: CompletionHandler<number, any>): void;
  /**
   * Writes a sequence of bytes to this channel from the given buffer.
   *
   *  This method initiates an asynchronous write operation to write a
   * sequence of bytes to this channel from the given buffer. The method
   * behaves in exactly the same manner as the {@link
   * #write(ByteBuffer,Object,CompletionHandler)
   * write(ByteBuffer,Object,CompletionHandler)} method except that instead
   * of specifying a completion handler, this method returns a `Future`
   * representing the pending result. The `Future`'s {@link Future#get()
   * get} method returns the number of bytes written.
   *
   * @param   src
   *          The buffer from which bytes are to be retrieved
   *
   * @return A Future representing the result of the operation
   *
   * @throws  WritePendingException
   *          If the channel does not allow more than one write to be outstanding
   *          and a previous write has not completed
  */
  write(src: ByteBuffer): Future<number>;
}
export class ClosedByInterruptException extends AsynchronousCloseException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class CancelledKeyException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class IllegalSelectorException extends IllegalArgumentException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class AsynchronousSocketChannel extends AsynchronousByteChannel {
  /**
   * Returns the provider that created this channel.
   *
   * @return  The provider that created this channel
  */
  provider(): AsynchronousChannelProvider;
  /**
   * Opens an asynchronous socket channel.
   *
   *  The new channel is created by invoking the {@link
   * AsynchronousChannelProvider#openAsynchronousSocketChannel
   * openAsynchronousSocketChannel} method on the {@link
   * AsynchronousChannelProvider} that created the group. If the group parameter
   * is `null` then the resulting channel is created by the system-wide
   * default provider, and bound to the default group.
   *
   * @param   group
   *          The group to which the newly constructed channel should be bound,
   *          or `null` for the default group
   *
   * @return  A new asynchronous socket channel
   *
   * @throws  ShutdownChannelGroupException
   *          If the channel group is shutdown
   * @throws  IOException
   *          If an I/O error occurs
  */
  static open(group: AsynchronousChannelGroup): AsynchronousSocketChannel;
  /**
   * Opens an asynchronous socket channel.
   *
   *  This method returns an asynchronous socket channel that is bound to
   * the default group.This method is equivalent to evaluating the
   * expression:
   *      * open((AsynchronousChannelGroup)null);
   * 
   *
   * @return  A new asynchronous socket channel
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  static open(): AsynchronousSocketChannel;
  /**
   * @throws  ConnectionPendingException
   *          If a connection operation is already in progress on this channel
   * @throws  AlreadyBoundException               {@inheritDoc}
   * @throws  UnsupportedAddressTypeException     {@inheritDoc}
   * @throws  ClosedChannelException              {@inheritDoc}
   * @throws  IOException                         {@inheritDoc}
   * @throws  SecurityException
   *          If a security manager has been installed and its
   *          {@link SecurityManager#checkListen checkListen} method denies
   *          the operation
  */
  bind(local: SocketAddress): AsynchronousSocketChannel;
  /**
   * @throws  IllegalArgumentException                {@inheritDoc}
   * @throws  ClosedChannelException                  {@inheritDoc}
   * @throws  IOException                             {@inheritDoc}
  */
  setOption<T>(name: SocketOption<T>, value: T): AsynchronousSocketChannel;
  /**
   * Shutdown the connection for reading without closing the channel.
   *
   *  Once shutdown for reading then further reads on the channel will
   * return `-1`, the end-of-stream indication. If the input side of the
   * connection is already shutdown then invoking this method has no effect.
   * The effect on an outstanding read operation is system dependent and
   * therefore not specified. The effect, if any, when there is data in the
   * socket receive buffer that has not been read, or data arrives subsequently,
   * is also system dependent.
   *
   * @return  The channel
   *
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  IOException
   *          If some other I/O error occurs
  */
  shutdownInput(): AsynchronousSocketChannel;
  /**
   * Shutdown the connection for writing without closing the channel.
   *
   *  Once shutdown for writing then further attempts to write to the
   * channel will throw {@link ClosedChannelException}. If the output side of
   * the connection is already shutdown then invoking this method has no
   * effect. The effect on an outstanding write operation is system dependent
   * and therefore not specified.
   *
   * @return  The channel
   *
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  IOException
   *          If some other I/O error occurs
  */
  shutdownOutput(): AsynchronousSocketChannel;
  /**
   * Returns the remote address to which this channel's socket is connected.
   *
   *  Where the channel is bound and connected to an Internet Protocol
   * socket address then the return value from this method is of type {@link
   * java.net.InetSocketAddress}.
   *
   * @return  The remote address; `null` if the channel's socket is not
   *          connected
   *
   * @throws  ClosedChannelException
   *          If the channel is closed
   * @throws  IOException
   *          If an I/O error occurs
  */
  getRemoteAddress(): SocketAddress;
  /**
   * Connects this channel.
   *
   *  This method initiates an operation to connect this channel. The
   * `handler` parameter is a completion handler that is invoked when
   * the connection is successfully established or connection cannot be
   * established. If the connection cannot be established then the channel is
   * closed.
   *
   *  This method performs exactly the same security checks as the {@link
   * java.net.Socket} class.  That is, if a security manager has been
   * installed then this method verifies that its {@link
   * java.lang.SecurityManager#checkConnect checkConnect} method permits
   * connecting to the address and port number of the given remote endpoint.
   *
   * @param   
   *          The type of the attachment
   * @param   remote
   *          The remote address to which this channel is to be connected
   * @param   attachment
   *          The object to attach to the I/O operation; can be `null`
   * @param   handler
   *          The handler for consuming the result
   *
   * @throws  UnresolvedAddressException
   *          If the given remote address is not fully resolved
   * @throws  UnsupportedAddressTypeException
   *          If the type of the given remote address is not supported
   * @throws  AlreadyConnectedException
   *          If this channel is already connected
   * @throws  ConnectionPendingException
   *          If a connection operation is already in progress on this channel
   * @throws  ShutdownChannelGroupException
   *          If the channel group has terminated
   * @throws  SecurityException
   *          If a security manager has been installed
   *          and it does not permit access to the given remote endpoint
   *
   * @see #getRemoteAddress
  */
  connect<A>(remote: SocketAddress, attachment: A, handler: CompletionHandler<Void, any>): void;
  /**
   * Connects this channel.
   *
   *  This method initiates an operation to connect this channel. This
   * method behaves in exactly the same manner as the {@link
   * #connect(SocketAddress, Object, CompletionHandler)} method except that
   * instead of specifying a completion handler, this method returns a `     * Future` representing the pending result. The `Future`'s {@link
   * Future#get() get} method returns `null` on successful completion.
   *
   * @param   remote
   *          The remote address to which this channel is to be connected
   *
   * @return  A `Future` object representing the pending result
   *
   * @throws  UnresolvedAddressException
   *          If the given remote address is not fully resolved
   * @throws  UnsupportedAddressTypeException
   *          If the type of the given remote address is not supported
   * @throws  AlreadyConnectedException
   *          If this channel is already connected
   * @throws  ConnectionPendingException
   *          If a connection operation is already in progress on this channel
   * @throws  SecurityException
   *          If a security manager has been installed
   *          and it does not permit access to the given remote endpoint
  */
  connect(remote: SocketAddress): Future<Void>;
  /**
   * Reads a sequence of bytes from this channel into the given buffer.
   *
   *  This method initiates an asynchronous read operation to read a
   * sequence of bytes from this channel into the given buffer. The `     * handler` parameter is a completion handler that is invoked when the read
   * operation completes (or fails). The result passed to the completion
   * handler is the number of bytes read or `-1` if no bytes could be
   * read because the channel has reached end-of-stream.
   *
   *  If a timeout is specified and the timeout elapses before the operation
   * completes then the operation completes with the exception {@link
   * InterruptedByTimeoutException}. Where a timeout occurs, and the
   * implementation cannot guarantee that bytes have not been read, or will not
   * be read from the channel into the given buffer, then further attempts to
   * read from the channel will cause an unspecific runtime exception to be
   * thrown.
   *
   *  Otherwise this method works in the same manner as the {@link
   * AsynchronousByteChannel#read(ByteBuffer,Object,CompletionHandler)}
   * method.
   *
   * @param   
   *          The type of the attachment
   * @param   dst
   *          The buffer into which bytes are to be transferred
   * @param   timeout
   *          The maximum time for the I/O operation to complete
   * @param   unit
   *          The time unit of the `timeout` argument
   * @param   attachment
   *          The object to attach to the I/O operation; can be `null`
   * @param   handler
   *          The handler for consuming the result
   *
   * @throws  IllegalArgumentException
   *          If the buffer is read-only
   * @throws  ReadPendingException
   *          If a read operation is already in progress on this channel
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
   * @throws  ShutdownChannelGroupException
   *          If the channel group has terminated
  */
  read<A>(dst: ByteBuffer, timeout: number, unit: TimeUnit, attachment: A, handler: CompletionHandler<number, any>): void;
  /**
   * @throws  IllegalArgumentException        {@inheritDoc}
   * @throws  ReadPendingException            {@inheritDoc}
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
   * @throws  ShutdownChannelGroupException
   *          If the channel group has terminated
  */
  read<A>(dst: ByteBuffer, attachment: A, handler: CompletionHandler<number, any>): void;
  /**
   * @throws  IllegalArgumentException        {@inheritDoc}
   * @throws  ReadPendingException            {@inheritDoc}
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
  */
  read(dst: ByteBuffer): Future<number>;
  /**
   * Reads a sequence of bytes from this channel into a subsequence of the
   * given buffers. This operation, sometimes called a scattering read,
   * is often useful when implementing network protocols that group data into
   * segments consisting of one or more fixed-length headers followed by a
   * variable-length body. The `handler` parameter is a completion
   * handler that is invoked when the read operation completes (or fails). The
   * result passed to the completion handler is the number of bytes read or
   * `-1` if no bytes could be read because the channel has reached
   * end-of-stream.
   *
   *  This method initiates a read of up to r bytes from this channel,
   * where r is the total number of bytes remaining in the specified
   * subsequence of the given buffer array, that is,
   *
   *      * dsts[offset].remaining()
   *     + dsts[offset+1].remaining()
   *     + ... + dsts[offset+length-1].remaining()
   *
   * at the moment that the read is attempted.
   *
   *  Suppose that a byte sequence of length n is read, where
   * `0` `<` n `<=` r.
   * Up to the first `dsts[offset].remaining()` bytes of this sequence
   * are transferred into buffer `dsts[offset]`, up to the next
   * `dsts[offset+1].remaining()` bytes are transferred into buffer
   * `dsts[offset+1]`, and so forth, until the entire byte sequence
   * is transferred into the given buffers.  As many bytes as possible are
   * transferred into each buffer, hence the final position of each updated
   * buffer, except the last updated buffer, is guaranteed to be equal to
   * that buffer's limit. The underlying operating system may impose a limit
   * on the number of buffers that may be used in an I/O operation. Where the
   * number of buffers (with bytes remaining), exceeds this limit, then the
   * I/O operation is performed with the maximum number of buffers allowed by
   * the operating system.
   *
   *  If a timeout is specified and the timeout elapses before the operation
   * completes then it completes with the exception {@link
   * InterruptedByTimeoutException}. Where a timeout occurs, and the
   * implementation cannot guarantee that bytes have not been read, or will not
   * be read from the channel into the given buffers, then further attempts to
   * read from the channel will cause an unspecific runtime exception to be
   * thrown.
   *
   * @param   
   *          The type of the attachment
   * @param   dsts
   *          The buffers into which bytes are to be transferred
   * @param   offset
   *          The offset within the buffer array of the first buffer into which
   *          bytes are to be transferred; must be non-negative and no larger than
   *          `dsts.length`
   * @param   length
   *          The maximum number of buffers to be accessed; must be non-negative
   *          and no larger than `dsts.length - offset`
   * @param   timeout
   *          The maximum time for the I/O operation to complete
   * @param   unit
   *          The time unit of the `timeout` argument
   * @param   attachment
   *          The object to attach to the I/O operation; can be `null`
   * @param   handler
   *          The handler for consuming the result
   *
   * @throws  IndexOutOfBoundsException
   *          If the pre-conditions for the `offset`  and `length`
   *          parameter aren't met
   * @throws  IllegalArgumentException
   *          If the buffer is read-only
   * @throws  ReadPendingException
   *          If a read operation is already in progress on this channel
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
   * @throws  ShutdownChannelGroupException
   *          If the channel group has terminated
  */
  read<A>(dsts: ByteBuffer[], offset: number, length: number, timeout: number, unit: TimeUnit, attachment: A, handler: CompletionHandler<number, any>): void;
  /**
   * Writes a sequence of bytes to this channel from the given buffer.
   *
   *  This method initiates an asynchronous write operation to write a
   * sequence of bytes to this channel from the given buffer. The `     * handler` parameter is a completion handler that is invoked when the write
   * operation completes (or fails). The result passed to the completion
   * handler is the number of bytes written.
   *
   *  If a timeout is specified and the timeout elapses before the operation
   * completes then it completes with the exception {@link
   * InterruptedByTimeoutException}. Where a timeout occurs, and the
   * implementation cannot guarantee that bytes have not been written, or will
   * not be written to the channel from the given buffer, then further attempts
   * to write to the channel will cause an unspecific runtime exception to be
   * thrown.
   *
   *  Otherwise this method works in the same manner as the {@link
   * AsynchronousByteChannel#write(ByteBuffer,Object,CompletionHandler)}
   * method.
   *
   * @param   
   *          The type of the attachment
   * @param   src
   *          The buffer from which bytes are to be retrieved
   * @param   timeout
   *          The maximum time for the I/O operation to complete
   * @param   unit
   *          The time unit of the `timeout` argument
   * @param   attachment
   *          The object to attach to the I/O operation; can be `null`
   * @param   handler
   *          The handler for consuming the result
   *
   * @throws  WritePendingException
   *          If a write operation is already in progress on this channel
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
   * @throws  ShutdownChannelGroupException
   *          If the channel group has terminated
  */
  write<A>(src: ByteBuffer, timeout: number, unit: TimeUnit, attachment: A, handler: CompletionHandler<number, any>): void;
  /**
   * @throws  WritePendingException          {@inheritDoc}
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
   * @throws  ShutdownChannelGroupException
   *          If the channel group has terminated
  */
  write<A>(src: ByteBuffer, attachment: A, handler: CompletionHandler<number, any>): void;
  /**
   * @throws  WritePendingException       {@inheritDoc}
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
  */
  write(src: ByteBuffer): Future<number>;
  /**
   * Writes a sequence of bytes to this channel from a subsequence of the given
   * buffers. This operation, sometimes called a gathering write, is
   * often useful when implementing network protocols that group data into
   * segments consisting of one or more fixed-length headers followed by a
   * variable-length body. The `handler` parameter is a completion
   * handler that is invoked when the write operation completes (or fails).
   * The result passed to the completion handler is the number of bytes written.
   *
   *  This method initiates a write of up to r bytes to this channel,
   * where r is the total number of bytes remaining in the specified
   * subsequence of the given buffer array, that is,
   *
   *      * srcs[offset].remaining()
   *     + srcs[offset+1].remaining()
   *     + ... + srcs[offset+length-1].remaining()
   *
   * at the moment that the write is attempted.
   *
   *  Suppose that a byte sequence of length n is written, where
   * `0` `<` n `<=` r.
   * Up to the first `srcs[offset].remaining()` bytes of this sequence
   * are written from buffer `srcs[offset]`, up to the next
   * `srcs[offset+1].remaining()` bytes are written from buffer
   * `srcs[offset+1]`, and so forth, until the entire byte sequence is
   * written.  As many bytes as possible are written from each buffer, hence
   * the final position of each updated buffer, except the last updated
   * buffer, is guaranteed to be equal to that buffer's limit. The underlying
   * operating system may impose a limit on the number of buffers that may be
   * used in an I/O operation. Where the number of buffers (with bytes
   * remaining), exceeds this limit, then the I/O operation is performed with
   * the maximum number of buffers allowed by the operating system.
   *
   *  If a timeout is specified and the timeout elapses before the operation
   * completes then it completes with the exception {@link
   * InterruptedByTimeoutException}. Where a timeout occurs, and the
   * implementation cannot guarantee that bytes have not been written, or will
   * not be written to the channel from the given buffers, then further attempts
   * to write to the channel will cause an unspecific runtime exception to be
   * thrown.
   *
   * @param   
   *          The type of the attachment
   * @param   srcs
   *          The buffers from which bytes are to be retrieved
   * @param   offset
   *          The offset within the buffer array of the first buffer from which
   *          bytes are to be retrieved; must be non-negative and no larger
   *          than `srcs.length`
   * @param   length
   *          The maximum number of buffers to be accessed; must be non-negative
   *          and no larger than `srcs.length - offset`
   * @param   timeout
   *          The maximum time for the I/O operation to complete
   * @param   unit
   *          The time unit of the `timeout` argument
   * @param   attachment
   *          The object to attach to the I/O operation; can be `null`
   * @param   handler
   *          The handler for consuming the result
   *
   * @throws  IndexOutOfBoundsException
   *          If the pre-conditions for the `offset`  and `length`
   *          parameter aren't met
   * @throws  WritePendingException
   *          If a write operation is already in progress on this channel
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
   * @throws  ShutdownChannelGroupException
   *          If the channel group has terminated
  */
  write<A>(srcs: ByteBuffer[], offset: number, length: number, timeout: number, unit: TimeUnit, attachment: A, handler: CompletionHandler<number, any>): void;
  /**
   * {@inheritDoc}
   * 
   * If there is a security manager set, its `checkConnect` method is
   * called with the local address and `-1` as its arguments to see
   * if the operation is allowed. If the operation is not allowed,
   * a `SocketAddress` representing the
   * {@link java.net.InetAddress#getLoopbackAddress loopback} address and the
   * local port of the channel's socket is returned.
   *
   * @return  The `SocketAddress` that the socket is bound to, or the
   *          `SocketAddress` representing the loopback address if
   *          denied by the security manager, or `null` if the
   *          channel's socket is not bound
   *
   * @throws  ClosedChannelException     {@inheritDoc}
   * @throws  IOException                {@inheritDoc}
  */
  getLocalAddress(): SocketAddress;
}
export interface AsynchronousSocketChannel extends AsynchronousByteChannel, NetworkChannel {}
export class SelectionKey {
  /**
   * Returns the channel for which this key was created.  This method will
   * continue to return the channel even after the key is cancelled.
   *
   * @return  This key's channel
  */
  channel(): SelectableChannel;
  /**
   * Returns the selector for which this key was created.  This method will
   * continue to return the selector even after the key is cancelled.
   *
   * @return  This key's selector
  */
  selector(): Selector;
  /**
   * Tells whether or not this key is valid.
   *
   *  A key is valid upon creation and remains so until it is cancelled,
   * its channel is closed, or its selector is closed.  
   *
   * @return  `true` if, and only if, this key is valid
  */
  isValid(): boolean;
  /**
   * Requests that the registration of this key's channel with its selector
   * be cancelled.  Upon return the key will be invalid and will have been
   * added to its selector's cancelled-key set.  The key will be removed from
   * all of the selector's key sets during the next selection operation.
   *
   *  If this key has already been cancelled then invoking this method has
   * no effect.  Once cancelled, a key remains forever invalid. 
   *
   *  This method may be invoked at any time.  It synchronizes on the
   * selector's cancelled-key set, and therefore may block briefly if invoked
   * concurrently with a cancellation or selection operation involving the
   * same selector.  
  */
  cancel(): void;
  /**
   * Retrieves this key's interest set.
   *
   *  It is guaranteed that the returned set will only contain operation
   * bits that are valid for this key's channel. 
   *
   * @return  This key's interest set
   *
   * @throws  CancelledKeyException
   *          If this key has been cancelled
  */
  interestOps(): number;
  /**
   * Sets this key's interest set to the given value.
   *
   *  This method may be invoked at any time.  If this method is invoked
   * while a selection operation is in progress then it has no effect upon
   * that operation; the change to the key's interest set will be seen by the
   * next selection operation.
   *
   * @param  ops  The new interest set
   *
   * @return  This selection key
   *
   * @throws  IllegalArgumentException
   *          If a bit in the set does not correspond to an operation that
   *          is supported by this key's channel, that is, if
   *          `(ops & ~channel().validOps()) != 0`
   *
   * @throws  CancelledKeyException
   *          If this key has been cancelled
  */
  interestOps(ops: number): SelectionKey;
  /**
   * Atomically sets this key's interest set to the bitwise union ("or") of
   * the existing interest set and the given value. This method is guaranteed
   * to be atomic with respect to other concurrent calls to this method or to
   * {@link #interestOpsAnd(int)}.
   *
   *  This method may be invoked at any time.  If this method is invoked
   * while a selection operation is in progress then it has no effect upon
   * that operation; the change to the key's interest set will be seen by the
   * next selection operation.
   *
   * @implSpec The default implementation synchronizes on this key and invokes
   * `interestOps()` and `interestOps(int)` to retrieve and set
   * this key's interest set.
   *
   * @param  ops  The interest set to apply
   *
   * @return  The previous interest set
   *
   * @throws  IllegalArgumentException
   *          If a bit in the set does not correspond to an operation that
   *          is supported by this key's channel, that is, if
   *          `(ops & ~channel().validOps()) != 0`
   *
   * @throws  CancelledKeyException
   *          If this key has been cancelled
   *
   * @since 11
  */
  interestOpsOr(ops: number): number;
  /**
   * Atomically sets this key's interest set to the bitwise intersection ("and")
   * of the existing interest set and the given value. This method is guaranteed
   * to be atomic with respect to other concurrent calls to this method or to
   * {@link #interestOpsOr(int)}.
   *
   *  This method may be invoked at any time.  If this method is invoked
   * while a selection operation is in progress then it has no effect upon
   * that operation; the change to the key's interest set will be seen by the
   * next selection operation.
   *
   * @apiNote Unlike the `interestOps(int)` and `interestOpsOr(int)`
   * methods, this method does not throw `IllegalArgumentException` when
   * invoked with bits in the interest set that do not correspond to an
   * operation that is supported by this key's channel. This is to allow
   * operation bits in the interest set to be cleared using bitwise complement
   * values, e.g., `interestOpsAnd(~SelectionKey.OP_READ)` will remove
   * the `OP_READ` from the interest set without affecting other bits.
   *
   * @implSpec The default implementation synchronizes on this key and invokes
   * `interestOps()` and `interestOps(int)` to retrieve and set
   * this key's interest set.
   *
   * @param  ops  The interest set to apply
   *
   * @return  The previous interest set
   *
   * @throws  CancelledKeyException
   *          If this key has been cancelled
   *
   * @since 11
  */
  interestOpsAnd(ops: number): number;
  /**
   * Retrieves this key's ready-operation set.
   *
   *  It is guaranteed that the returned set will only contain operation
   * bits that are valid for this key's channel.  
   *
   * @return  This key's ready-operation set
   *
   * @throws  CancelledKeyException
   *          If this key has been cancelled
  */
  readyOps(): number;
  /**
   * Operation-set bit for read operations.
   *
   *  Suppose that a selection key's interest set contains
   * `OP_READ` at the start of a selection operation.  If the selector
   * detects that the corresponding channel is ready for reading, has reached
   * end-of-stream, has been remotely shut down for further writing, or has
   * an error pending, then it will add `OP_READ` to the key's
   * ready-operation set.  
  */
  static readonly OP_READ: number;
  /**
   * Operation-set bit for write operations.
   *
   *  Suppose that a selection key's interest set contains
   * `OP_WRITE` at the start of a selection operation.  If the selector
   * detects that the corresponding channel is ready for writing, has been
   * remotely shut down for further reading, or has an error pending, then it
   * will add `OP_WRITE` to the key's ready set.  
  */
  static readonly OP_WRITE: number;
  /**
   * Operation-set bit for socket-connect operations.
   *
   *  Suppose that a selection key's interest set contains
   * `OP_CONNECT` at the start of a selection operation.  If the selector
   * detects that the corresponding socket channel is ready to complete its
   * connection sequence, or has an error pending, then it will add
   * `OP_CONNECT` to the key's ready set.  
  */
  static readonly OP_CONNECT: number;
  /**
   * Operation-set bit for socket-accept operations.
   *
   *  Suppose that a selection key's interest set contains
   * `OP_ACCEPT` at the start of a selection operation.  If the selector
   * detects that the corresponding server-socket channel is ready to accept
   * another connection, or has an error pending, then it will add
   * `OP_ACCEPT` to the key's ready set.  
  */
  static readonly OP_ACCEPT: number;
  /**
   * Tests whether this key's channel is ready for reading.
   *
   *  An invocation of this method of the form `k.isReadable()`
   * behaves in exactly the same way as the expression
   *
   * {@code
   * k.readyOps() & OP_READ != 0
   * }
   *
   *  If this key's channel does not support read operations then this
   * method always returns `false`.  
   *
   * @return  `true` if, and only if,
   *          `readyOps() & OP_READ` is nonzero
   *
   * @throws  CancelledKeyException
   *          If this key has been cancelled
  */
  isReadable(): boolean;
  /**
   * Tests whether this key's channel is ready for writing.
   *
   *  An invocation of this method of the form `k.isWritable()`
   * behaves in exactly the same way as the expression
   *
   * {@code
   * k.readyOps() & OP_WRITE != 0
   * }
   *
   *  If this key's channel does not support write operations then this
   * method always returns `false`.  
   *
   * @return  `true` if, and only if,
   *          `readyOps() & OP_WRITE` is nonzero
   *
   * @throws  CancelledKeyException
   *          If this key has been cancelled
  */
  isWritable(): boolean;
  /**
   * Tests whether this key's channel has either finished, or failed to
   * finish, its socket-connection operation.
   *
   *  An invocation of this method of the form `k.isConnectable()`
   * behaves in exactly the same way as the expression
   *
   * {@code
   * k.readyOps() & OP_CONNECT != 0
   * }
   *
   *  If this key's channel does not support socket-connect operations
   * then this method always returns `false`.  
   *
   * @return  `true` if, and only if,
   *          `readyOps() & OP_CONNECT` is nonzero
   *
   * @throws  CancelledKeyException
   *          If this key has been cancelled
  */
  isConnectable(): boolean;
  /**
   * Tests whether this key's channel is ready to accept a new socket
   * connection.
   *
   *  An invocation of this method of the form `k.isAcceptable()`
   * behaves in exactly the same way as the expression
   *
   * {@code
   * k.readyOps() & OP_ACCEPT != 0
   * }
   *
   *  If this key's channel does not support socket-accept operations then
   * this method always returns `false`.  
   *
   * @return  `true` if, and only if,
   *          `readyOps() & OP_ACCEPT` is nonzero
   *
   * @throws  CancelledKeyException
   *          If this key has been cancelled
  */
  isAcceptable(): boolean;
  /**
   * Attaches the given object to this key.
   *
   *  An attached object may later be retrieved via the {@link #attachment()
   * attachment} method.  Only one object may be attached at a time; invoking
   * this method causes any previous attachment to be discarded.  The current
   * attachment may be discarded by attaching `null`.  
   *
   * @param  ob
   *         The object to be attached; may be `null`
   *
   * @return  The previously-attached object, if any,
   *          otherwise `null`
  */
  attach(ob: any): any;
  /**
   * Retrieves the current attachment.
   *
   * @return  The object currently attached to this key,
   *          or `null` if there is no attachment
  */
  attachment(): any;
}
export class NoConnectionPendingException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class ClosedSelectorException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class AsynchronousServerSocketChannel extends AsynchronousChannel {
  /**
   * Returns the provider that created this channel.
   *
   * @return  The provider that created this channel
  */
  provider(): AsynchronousChannelProvider;
  /**
   * Opens an asynchronous server-socket channel.
   *
   *  The new channel is created by invoking the {@link
   * java.nio.channels.spi.AsynchronousChannelProvider#openAsynchronousServerSocketChannel
   * openAsynchronousServerSocketChannel} method on the {@link
   * java.nio.channels.spi.AsynchronousChannelProvider} object that created
   * the given group. If the group parameter is `null` then the
   * resulting channel is created by the system-wide default provider, and
   * bound to the default group.
   *
   * @param   group
   *          The group to which the newly constructed channel should be bound,
   *          or `null` for the default group
   *
   * @return  A new asynchronous server socket channel
   *
   * @throws  ShutdownChannelGroupException
   *          If the channel group is shutdown
   * @throws  IOException
   *          If an I/O error occurs
  */
  static open(group: AsynchronousChannelGroup): AsynchronousServerSocketChannel;
  /**
   * Opens an asynchronous server-socket channel.
   *
   *  This method returns an asynchronous server socket channel that is
   * bound to the default group. This method is equivalent to evaluating
   * the expression:
   *      * open((AsynchronousChannelGroup)null);
   * 
   *
   * @return  A new asynchronous server socket channel
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  static open(): AsynchronousServerSocketChannel;
  /**
   * Binds the channel's socket to a local address and configures the socket to
   * listen for connections.
   *
   *  An invocation of this method is equivalent to the following:
   *      * bind(local, 0);
   * 
   *
   * @param   local
   *          The local address to bind the socket, or `null` to bind
   *          to an automatically assigned socket address
   *
   * @return  This channel
   *
   * @throws  AlreadyBoundException               {@inheritDoc}
   * @throws  UnsupportedAddressTypeException     {@inheritDoc}
   * @throws  SecurityException                   {@inheritDoc}
   * @throws  ClosedChannelException              {@inheritDoc}
   * @throws  IOException                         {@inheritDoc}
  */
  bind(local: SocketAddress): AsynchronousServerSocketChannel;
  /**
   * Binds the channel's socket to a local address and configures the socket to
   * listen for connections.
   *
   *  This method is used to establish an association between the socket and
   * a local address. Once an association is established then the socket remains
   * bound until the associated channel is closed.
   *
   *  The `backlog` parameter is the maximum number of pending
   * connections on the socket. Its exact semantics are implementation specific.
   * In particular, an implementation may impose a maximum length or may choose
   * to ignore the parameter altogther. If the `backlog` parameter has
   * the value `0`, or a negative value, then an implementation specific
   * default is used.
   *
   * @param   local
   *          The local address to bind the socket, or `null` to bind
   *          to an automatically assigned socket address
   * @param   backlog
   *          The maximum number of pending connections
   *
   * @return  This channel
   *
   * @throws  AlreadyBoundException
   *          If the socket is already bound
   * @throws  UnsupportedAddressTypeException
   *          If the type of the given address is not supported
   * @throws  SecurityException
   *          If a security manager has been installed and its {@link
   *          SecurityManager#checkListen checkListen} method denies the operation
   * @throws  ClosedChannelException
   *          If the channel is closed
   * @throws  IOException
   *          If some other I/O error occurs
  */
  bind(local: SocketAddress, backlog: number): AsynchronousServerSocketChannel;
  /**
   * @throws  IllegalArgumentException                {@inheritDoc}
   * @throws  ClosedChannelException                  {@inheritDoc}
   * @throws  IOException                             {@inheritDoc}
  */
  setOption<T>(name: SocketOption<T>, value: T): AsynchronousServerSocketChannel;
  /**
   * Accepts a connection.
   *
   *  This method initiates an asynchronous operation to accept a
   * connection made to this channel's socket. The `handler` parameter is
   * a completion handler that is invoked when a connection is accepted (or
   * the operation fails). The result passed to the completion handler is
   * the {@link AsynchronousSocketChannel} to the new connection.
   *
   *  When a new connection is accepted then the resulting `     * AsynchronousSocketChannel` will be bound to the same {@link
   * AsynchronousChannelGroup} as this channel. If the group is {@link
   * AsynchronousChannelGroup#isShutdown shutdown} and a connection is accepted,
   * then the connection is closed, and the operation completes with an `     * IOException` and cause {@link ShutdownChannelGroupException}.
   *
   *  To allow for concurrent handling of new connections, the completion
   * handler is not invoked directly by the initiating thread when a new
   * connection is accepted immediately (see Threading).
   *
   *  If a security manager has been installed then it verifies that the
   * address and port number of the connection's remote endpoint are permitted
   * by the security manager's {@link SecurityManager#checkAccept checkAccept}
   * method. The permission check is performed with privileges that are restricted
   * by the calling context of this method. If the permission check fails then
   * the connection is closed and the operation completes with a {@link
   * SecurityException}.
   *
   * @param   
   *          The type of the attachment
   * @param   attachment
   *          The object to attach to the I/O operation; can be `null`
   * @param   handler
   *          The handler for consuming the result
   *
   * @throws  AcceptPendingException
   *          If an accept operation is already in progress on this channel
   * @throws  NotYetBoundException
   *          If this channel's socket has not yet been bound
   * @throws  ShutdownChannelGroupException
   *          If the channel group has terminated
  */
  accept<A>(attachment: A, handler: CompletionHandler<AsynchronousSocketChannel, any>): void;
  /**
   * Accepts a connection.
   *
   *  This method initiates an asynchronous operation to accept a
   * connection made to this channel's socket. The method behaves in exactly
   * the same manner as the {@link #accept(Object, CompletionHandler)} method
   * except that instead of specifying a completion handler, this method
   * returns a `Future` representing the pending result. The `     * Future`'s {@link Future#get() get} method returns the {@link
   * AsynchronousSocketChannel} to the new connection on successful completion.
   *
   * @return  a `Future` object representing the pending result
   *
   * @throws  AcceptPendingException
   *          If an accept operation is already in progress on this channel
   * @throws  NotYetBoundException
   *          If this channel's socket has not yet been bound
  */
  accept(): Future<AsynchronousSocketChannel>;
  /**
   * {@inheritDoc}
   * 
   * If there is a security manager set, its `checkConnect` method is
   * called with the local address and `-1` as its arguments to see
   * if the operation is allowed. If the operation is not allowed,
   * a `SocketAddress` representing the
   * {@link java.net.InetAddress#getLoopbackAddress loopback} address and the
   * local port of the channel's socket is returned.
   *
   * @return  The `SocketAddress` that the socket is bound to, or the
   *          `SocketAddress` representing the loopback address if
   *          denied by the security manager, or `null` if the
   *          channel's socket is not bound
   *
   * @throws  ClosedChannelException     {@inheritDoc}
   * @throws  IOException                {@inheritDoc}
  */
  getLocalAddress(): SocketAddress;
}
export interface AsynchronousServerSocketChannel extends AsynchronousChannel, NetworkChannel {}
export class SocketChannel extends AbstractSelectableChannel {
  /**
   * Opens a socket channel for an Internet protocol socket.
   *
   *  The new channel is created by invoking the {@link
   * java.nio.channels.spi.SelectorProvider#openSocketChannel
   * openSocketChannel} method of the system-wide default {@link
   * java.nio.channels.spi.SelectorProvider} object.  
   *
   * @return  A new socket channel
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @see     
   *          java.net.preferIPv4Stack system property
  */
  static open(): SocketChannel;
  /**
   * Opens a socket channel. The `family` parameter specifies the
   * {@link ProtocolFamily protocol family} of the channel's socket.
   *
   *  The new channel is created by invoking the {@link
   * java.nio.channels.spi.SelectorProvider#openSocketChannel(ProtocolFamily)
   * openSocketChannel(ProtocolFamily)} method of the system-wide default.
   * {@link java.nio.channels.spi.SelectorProvider} object.
   *
   * @param   family
   *          The protocol family
   *
   * @return  A new socket channel
   *
   * @throws  UnsupportedOperationException
   *          If the specified protocol family is not supported. For example,
   *          suppose the parameter is specified as {@link
   *          java.net.StandardProtocolFamily#INET6 StandardProtocolFamily.INET6}
   *          but IPv6 is not enabled on the platform.
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @see     
   *          java.net.preferIPv4Stack system property
   *
   * @since 15
  */
  static open(family: ProtocolFamily): SocketChannel;
  /**
   * Opens a socket channel and connects it to a remote address.
   *
   *  If the remote address is an {@link InetSocketAddress} then this
   * method works as if by invoking the {@link #open()} method, invoking the
   * {@link #connect(SocketAddress) connect} method upon the resulting socket
   * channel, passing it `remote`, and then returning that channel.
   *
   *  If the remote address is a {@link UnixDomainSocketAddress} then this
   * works by invoking the {@link #open(ProtocolFamily)} method with {@link
   * StandardProtocolFamily#UNIX} as parameter, invoking the {@link
   * #connect(SocketAddress) connect} method upon the resulting socket channel,
   * passing it `remote`, then returning that channel.  
   *
   * @param  remote
   *         The remote address to which the new channel is to be connected
   *
   * @return  A new, and connected, socket channel
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the connect operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the connect operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  UnresolvedAddressException
   *          If the given remote address is an InetSocketAddress that is not fully
   *          resolved
   *
   * @throws  UnsupportedAddressTypeException
   *          If the type of the given remote address is not supported
   *
   * @throws  SecurityException
   *          If a security manager has been installed
   *          and it does not permit access to the given remote endpoint
   *
   * @throws  IOException
   *          If some other I/O error occurs
   *
   * @see     
   *          java.net.preferIPv4Stack system property
  */
  static open(remote: SocketAddress): SocketChannel;
  /**
   * Returns an operation set identifying this channel's supported
   * operations.
   *
   *  Socket channels support connecting, reading, and writing, so this
   * method returns `(`{@link SelectionKey#OP_CONNECT}
   * `|` {@link SelectionKey#OP_READ} `|` {@link
   * SelectionKey#OP_WRITE}`)`.
   *
   * @return  The valid-operation set
  */
  validOps(): number;
  /**
   * Binds the channel's socket to a local address.
   *
   *  This method is used to establish an association between the socket
   * and a local address. For Internet Protocol sockets, once an
   * association is established then the socket remains bound until the
   * channel is closed. If the `local` parameter has the value `     * null` then the socket will be bound to an address that is assigned
   * automatically.
   *
   * @apiNote
   * Binding a socket channel to a Unix Domain socket creates a file
   * corresponding to the file path in the {@link UnixDomainSocketAddress}. This
   * file persists after the channel is closed, and must be removed before
   * another socket can bind to the same name. If a socket channel to a Unix
   * Domain socket is implicitly bound by connecting it without calling
   * bind first, then its socket is
   * unnamed
   * with no corresponding socket file in the file-system. If a socket channel
   * to a Unix Domain socket is automatically bound by calling `     * bind(null)` this results in an unnamed socket also.
   *
   * @implNote
   * Each platform enforces an implementation specific maximum length for the
   * name of a Unix Domain socket. This limitation is enforced when a
   * channel is bound. The maximum length is typically close to and generally
   * not less than 100 bytes.
   *
   * @param   local The address to bind the socket, or `null` to bind
   *          the socket to an automatically assigned socket address
   *
   * @return  This channel
   *
   * @throws  ConnectionPendingException
   *          If a non-blocking connect operation is already in progress on
   *          this channel
   * @throws  AlreadyBoundException               {@inheritDoc}
   * @throws  UnsupportedAddressTypeException     {@inheritDoc}
   * @throws  ClosedChannelException              {@inheritDoc}
   * @throws  IOException                         {@inheritDoc}
   * @throws  SecurityException
   *          If a security manager has been installed and its {@link
   *          SecurityManager#checkListen checkListen} method denies
   *          the operation for an Internet protocol socket address,
   *          or for a Unix domain socket address if it denies
   *          {@link NetPermission}`"accessUnixDomainSocket")`.
   *
   * @since 1.7
  */
  bind(local: SocketAddress): SocketChannel;
  /**
   * @throws  UnsupportedOperationException           {@inheritDoc}
   * @throws  IllegalArgumentException                {@inheritDoc}
   * @throws  ClosedChannelException                  {@inheritDoc}
   * @throws  IOException                             {@inheritDoc}
   *
   * @since 1.7
  */
  setOption<T>(name: SocketOption<T>, value: T): SocketChannel;
  /**
   * Shutdown the connection for reading without closing the channel.
   *
   *  Once shutdown for reading then further reads on the channel will
   * return `-1`, the end-of-stream indication. If the input side of the
   * connection is already shutdown then invoking this method has no effect.
   *
   * @return  The channel
   *
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  IOException
   *          If some other I/O error occurs
   *
   * @since 1.7
  */
  shutdownInput(): SocketChannel;
  /**
   * Shutdown the connection for writing without closing the channel.
   *
   *  Once shutdown for writing then further attempts to write to the
   * channel will throw {@link ClosedChannelException}. If the output side of
   * the connection is already shutdown then invoking this method has no
   * effect.
   *
   * @return  The channel
   *
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  IOException
   *          If some other I/O error occurs
   *
   * @since 1.7
  */
  shutdownOutput(): SocketChannel;
  /**
   * Retrieves a socket associated with this channel.
   *
   * @return  A socket associated with this channel
   *
   * @throws  UnsupportedOperationException
   *          If the channel's socket is not an Internet protocol socket
  */
  socket(): Socket;
  /**
   * Tells whether or not this channel's network socket is connected.
   *
   * @return  `true` if, and only if, this channel's network socket
   *          is {@link #isOpen open} and connected
  */
  isConnected(): boolean;
  /**
   * Tells whether or not a connection operation is in progress on this
   * channel.
   *
   * @return  `true` if, and only if, a connection operation has been
   *          initiated on this channel but not yet completed by invoking the
   *          {@link #finishConnect finishConnect} method
  */
  isConnectionPending(): boolean;
  /**
   * Connects this channel's socket.
   *
   *  If this channel is in non-blocking mode then an invocation of this
   * method initiates a non-blocking connection operation.  If the connection
   * is established immediately, as can happen with a local connection, then
   * this method returns `true`.  Otherwise this method returns
   * `false` and the connection operation must later be completed by
   * invoking the {@link #finishConnect finishConnect} method.
   *
   *  If this channel is in blocking mode then an invocation of this
   * method will block until the connection is established or an I/O error
   * occurs.
   *
   *  For channels to Internet protocol sockets, this method performs
   * exactly the same security checks as the {@link java.net.Socket} class.
   * That is, if a security manager has been
   * installed then this method verifies that its {@link
   * java.lang.SecurityManager#checkConnect checkConnect} method permits
   * connecting to the address and port number of the given remote endpoint.
   *
   *  For channels to Unix Domain sockets, this method checks
   * {@link java.net.NetPermission NetPermission}`     * ("accessUnixDomainSocket")` with the security manager's {@link
   * SecurityManager#checkPermission(java.security.Permission)
   * checkPermission} method.
   *
   *  This method may be invoked at any time.  If a read or write
   * operation upon this channel is invoked while an invocation of this
   * method is in progress then that operation will first block until this
   * invocation is complete.  If a connection attempt is initiated but fails,
   * that is, if an invocation of this method throws a checked exception,
   * then the channel will be closed.  
   *
   * @param  remote
   *         The remote address to which this channel is to be connected
   *
   * @return  `true` if a connection was established,
   *          `false` if this channel is in non-blocking mode
   *          and the connection operation is in progress
   *
   * @throws  AlreadyConnectedException
   *          If this channel is already connected
   *
   * @throws  ConnectionPendingException
   *          If a non-blocking connection operation is already in progress
   *          on this channel
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the connect operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the connect operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  UnresolvedAddressException
   *          If the given remote address is an InetSocketAddress that is not fully resolved
   *
   * @throws  UnsupportedAddressTypeException
   *          If the type of the given remote address is not supported
   *
   * @throws  SecurityException
   *          If a security manager has been installed
   *          and it does not permit access to the given remote endpoint
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  connect(remote: SocketAddress): boolean;
  /**
   * Finishes the process of connecting a socket channel.
   *
   *  A non-blocking connection operation is initiated by placing a socket
   * channel in non-blocking mode and then invoking its {@link #connect
   * connect} method.  Once the connection is established, or the attempt has
   * failed, the socket channel will become connectable and this method may
   * be invoked to complete the connection sequence.  If the connection
   * operation failed then invoking this method will cause an appropriate
   * {@link java.io.IOException} to be thrown.
   *
   *  If this channel is already connected then this method will not block
   * and will immediately return `true`.  If this channel is in
   * non-blocking mode then this method will return `false` if the
   * connection process is not yet complete.  If this channel is in blocking
   * mode then this method will block until the connection either completes
   * or fails, and will always either return `true` or throw a checked
   * exception describing the failure.
   *
   *  This method may be invoked at any time.  If a read or write
   * operation upon this channel is invoked while an invocation of this
   * method is in progress then that operation will first block until this
   * invocation is complete.  If a connection attempt fails, that is, if an
   * invocation of this method throws a checked exception, then the channel
   * will be closed.  
   *
   * @return  `true` if, and only if, this channel's socket is now
   *          connected
   *
   * @throws  NoConnectionPendingException
   *          If this channel is not connected and a connection operation
   *          has not been initiated
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the connect operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the connect operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  finishConnect(): boolean;
  /**
   * Returns the remote address to which this channel's socket is connected.
   *
   *  Where the channel's socket is bound and connected to an Internet
   * Protocol socket address then the return value is of type
   * {@link java.net.InetSocketAddress}.
   *
   *  Where the channel's socket is bound and connected to a Unix Domain
   * socket address, the returned address is a {@link UnixDomainSocketAddress}.
   *
   * @return  The remote address; `null` if the channel's socket is not
   *          connected
   *
   * @throws  ClosedChannelException
   *          If the channel is closed
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @since 1.7
  */
  getRemoteAddress(): SocketAddress;
  /**
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
  */
  read(dst: ByteBuffer): number;
  /**
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
  */
  read(dsts: ByteBuffer[], offset: number, length: number): number;
  /**
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
  */
  read(dsts: ByteBuffer[]): number;
  /**
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
  */
  write(src: ByteBuffer): number;
  /**
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
  */
  write(srcs: ByteBuffer[], offset: number, length: number): number;
  /**
   * @throws  NotYetConnectedException
   *          If this channel is not yet connected
  */
  write(srcs: ByteBuffer[]): number;
  /**
   * {@inheritDoc}
   *
   * If there is a security manager set, its `checkConnect` method is
   * called with the local address and `-1` as its arguments to see
   * if the operation is allowed. If the operation is not allowed,
   * a `SocketAddress` representing the
   * {@link java.net.InetAddress#getLoopbackAddress loopback} address and the
   * local port of the channel's socket is returned.
   *
   *  Where the channel is bound to a Unix Domain socket address, the socket
   * address is a {@link UnixDomainSocketAddress}. If there is a security manager
   * set, its {@link SecurityManager#checkPermission(java.security.Permission)
   * checkPermission} method is called with {@link NetPermission}`     * ("accessUnixDomainSocket")`. If the operation is not allowed an unnamed
   * {@link UnixDomainSocketAddress} is returned.
   *
   * @return  The `SocketAddress` that the socket is bound to, or the
   *          `SocketAddress` representing the loopback address or empty
   *          path if denied by the security manager, or `null` if the
   *          channel's socket is not bound
   *
   * @throws  ClosedChannelException     {@inheritDoc}
   * @throws  IOException                {@inheritDoc}
  */
  getLocalAddress(): SocketAddress;
}
export interface SocketChannel extends AbstractSelectableChannel, ByteChannel, ScatteringByteChannel, GatheringByteChannel, NetworkChannel {}
export class Pipe {
  /**
   * Returns this pipe's source channel.
   *
   * @return  This pipe's source channel
  */
  source(): SourceChannel;
  /**
   * Returns this pipe's sink channel.
   *
   * @return  This pipe's sink channel
  */
  sink(): SinkChannel;
  /**
   * Opens a pipe.
   *
   *  The new pipe is created by invoking the {@link
   * java.nio.channels.spi.SelectorProvider#openPipe openPipe} method of the
   * system-wide default {@link java.nio.channels.spi.SelectorProvider}
   * object.  
   *
   * @return  A new pipe
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  static open(): Pipe;
}
export class GatheringByteChannel extends WritableByteChannel {
  /**
   * Writes a sequence of bytes to this channel from a subsequence of the
   * given buffers.
   *
   *  An attempt is made to write up to r bytes to this channel,
   * where r is the total number of bytes remaining in the specified
   * subsequence of the given buffer array, that is,
   *
   *      * srcs[offset].remaining()
   *     + srcs[offset+1].remaining()
   *     + ... + srcs[offset+length-1].remaining()
   *
   * at the moment that this method is invoked.
   *
   *  Suppose that a byte sequence of length n is written, where
   * `0` `<=` n `<=` r.
   * Up to the first `srcs[offset].remaining()` bytes of this sequence
   * are written from buffer `srcs[offset]`, up to the next
   * `srcs[offset+1].remaining()` bytes are written from buffer
   * `srcs[offset+1]`, and so forth, until the entire byte sequence is
   * written.  As many bytes as possible are written from each buffer, hence
   * the final position of each updated buffer, except the last updated
   * buffer, is guaranteed to be equal to that buffer's limit.
   *
   *  Unless otherwise specified, a write operation will return only after
   * writing all of the r requested bytes.  Some types of channels,
   * depending upon their state, may write only some of the bytes or possibly
   * none at all.  A socket channel in non-blocking mode, for example, cannot
   * write any more bytes than are free in the socket's output buffer.
   *
   *  This method may be invoked at any time.  If another thread has
   * already initiated a write operation upon this channel, however, then an
   * invocation of this method will block until the first operation is
   * complete. 
   *
   * @param  srcs
   *         The buffers from which bytes are to be retrieved
   *
   * @param  offset
   *         The offset within the buffer array of the first buffer from
   *         which bytes are to be retrieved; must be non-negative and no
   *         larger than `srcs.length`
   *
   * @param  length
   *         The maximum number of buffers to be accessed; must be
   *         non-negative and no larger than
   *         `srcs.length` - `offset`
   *
   * @return  The number of bytes written, possibly zero
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
   *
   * @throws  NonWritableChannelException
   *          If this channel was not opened for writing
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the write operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the write operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  write(srcs: ByteBuffer[], offset: number, length: number): number;
  /**
   * Writes a sequence of bytes to this channel from the given buffers.
   *
   *  An invocation of this method of the form `c.write(srcs)`
   * behaves in exactly the same manner as the invocation
   *
   *      * c.write(srcs, 0, srcs.length);
   *
   * @param  srcs
   *         The buffers from which bytes are to be retrieved
   *
   * @return  The number of bytes written, possibly zero
   *
   * @throws  NonWritableChannelException
   *          If this channel was not opened for writing
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the write operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the write operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  write(srcs: ByteBuffer[]): number;
  /**
   * Writes a sequence of bytes to this channel from the given buffer.
   *
   *  An attempt is made to write up to r bytes to the channel,
   * where r is the number of bytes remaining in the buffer, that is,
   * `src.remaining()`, at the moment this method is invoked.
   *
   *  Suppose that a byte sequence of length n is written, where
   * `0` `<=` n `<=` r.
   * This byte sequence will be transferred from the buffer starting at index
   * p, where p is the buffer's position at the moment this
   * method is invoked; the index of the last byte written will be
   * p `+` n `-` `1`.
   * Upon return the buffer's position will be equal to
   * p `+` n; its limit will not have changed.
   *
   *  Unless otherwise specified, a write operation will return only after
   * writing all of the r requested bytes.  Some types of channels,
   * depending upon their state, may write only some of the bytes or possibly
   * none at all.  A socket channel in non-blocking mode, for example, cannot
   * write any more bytes than are free in the socket's output buffer.
   *
   *  This method may be invoked at any time.  If another thread has
   * already initiated a write operation upon this channel, however, then an
   * invocation of this method will block until the first operation is
   * complete. 
   *
   * @param  src
   *         The buffer from which bytes are to be retrieved
   *
   * @return The number of bytes written, possibly zero
   *
   * @throws  NonWritableChannelException
   *          If this channel was not opened for writing
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the write operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the write operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  write(src: ByteBuffer): number;
}
export class DatagramChannel extends AbstractSelectableChannel {
  /**
   * Opens a datagram channel.
   *
   *  The new channel is created by invoking the {@link
   * java.nio.channels.spi.SelectorProvider#openDatagramChannel()
   * openDatagramChannel} method of the system-wide default {@link
   * java.nio.channels.spi.SelectorProvider} object.  The channel will not be
   * connected.
   *
   *  The {@link ProtocolFamily ProtocolFamily} of the channel's socket
   * is platform (and possibly configuration) dependent and therefore unspecified.
   * The {@link #open(ProtocolFamily) open} allows the protocol family to be
   * selected when opening a datagram channel, and should be used to open
   * datagram channels that are intended for Internet Protocol multicasting.
   *
   * @return  A new datagram channel
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @see     
   *          java.net.preferIPv4Stack system property
  */
  static open(): DatagramChannel;
  /**
   * Opens a datagram channel.
   *
   *  The `family` parameter is used to specify the {@link
   * ProtocolFamily}. If the datagram channel is to be used for IP multicasting
   * then this should correspond to the address type of the multicast groups
   * that this channel will join.
   *
   *  The new channel is created by invoking the {@link
   * java.nio.channels.spi.SelectorProvider#openDatagramChannel(ProtocolFamily)
   * openDatagramChannel} method of the system-wide default {@link
   * java.nio.channels.spi.SelectorProvider} object.  The channel will not be
   * connected.
   *
   * @apiNote Unix domain sockets
   * are not supported by DatagramChannel.
   *
   * @param   family
   *          The protocol family
   *
   * @return  A new datagram channel
   *
   * @throws  UnsupportedOperationException
   *          If the specified protocol family is not supported. For example,
   *          suppose the parameter is specified as {@link
   *          java.net.StandardProtocolFamily#INET6 StandardProtocolFamily.INET6}
   *          but IPv6 is not enabled on the platform.
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @see     
   *          java.net.preferIPv4Stack system property
   *
   * @since   1.7
  */
  static open(family: ProtocolFamily): DatagramChannel;
  /**
   * Returns an operation set identifying this channel's supported
   * operations.
   *
   *  Datagram channels support reading and writing, so this method
   * returns `(`{@link SelectionKey#OP_READ} `|` {@link
   * SelectionKey#OP_WRITE}`)`.
   *
   * @return  The valid-operation set
  */
  validOps(): number;
  /**
   * @throws  AlreadyBoundException               {@inheritDoc}
   * @throws  UnsupportedAddressTypeException     {@inheritDoc}
   * @throws  ClosedChannelException              {@inheritDoc}
   * @throws  IOException                         {@inheritDoc}
   * @throws  SecurityException
   *          If a security manager has been installed and its {@link
   *          SecurityManager#checkListen checkListen} method denies the
   *          operation
   *
   * @since 1.7
  */
  bind(local: SocketAddress): DatagramChannel;
  /**
   * @throws  UnsupportedOperationException           {@inheritDoc}
   * @throws  IllegalArgumentException                {@inheritDoc}
   * @throws  ClosedChannelException                  {@inheritDoc}
   * @throws  IOException                             {@inheritDoc}
   *
   * @since 1.7
  */
  setOption<T>(name: SocketOption<T>, value: T): DatagramChannel;
  /**
   * Retrieves a datagram socket associated with this channel.
   *
   * @return  A datagram socket associated with this channel
  */
  socket(): DatagramSocket;
  /**
   * Tells whether or not this channel's socket is connected.
   *
   * @return  `true` if, and only if, this channel's socket
   *          is {@link #isOpen open} and connected
  */
  isConnected(): boolean;
  /**
   * Connects this channel's socket.
   *
   *  The channel's socket is configured so that it only receives
   * datagrams from, and sends datagrams to, the given remote peer
   * address.  Once connected, datagrams may not be received from or sent to
   * any other address.  Datagrams in the channel's {@linkplain
   * java.net.StandardSocketOptions#SO_RCVBUF socket receive buffer}, which
   * have not been {@linkplain #receive(ByteBuffer) received} before invoking
   * this method, may be discarded.  The channel's socket remains connected
   * until it is explicitly disconnected or until it is closed.
   *
   *  This method performs exactly the same security checks as the {@link
   * java.net.DatagramSocket#connect connect} method of the {@link
   * java.net.DatagramSocket} class.  That is, if a security manager has been
   * installed then this method verifies that its {@link
   * java.lang.SecurityManager#checkAccept checkAccept} and {@link
   * java.lang.SecurityManager#checkConnect checkConnect} methods permit
   * datagrams to be received from and sent to, respectively, the given
   * remote address. Once connected, no further security checks are performed
   * for datagrams received from, or sent to, the given remote address. Care
   * should be taken to ensure that a connected datagram channel is not shared
   * with untrusted code.
   *
   *  This method may be invoked at any time.  If another thread has
   * already initiated a read or write operation upon this channel, then an
   * invocation of this method will block until any such operation is
   * complete.  If this channel's socket is not bound then this method will
   * first cause the socket to be bound to an address that is assigned
   * automatically, as if invoking the {@link #bind bind} method with a
   * parameter of `null`.  
   *
   * @param  remote
   *         The remote address to which this channel is to be connected
   *
   * @return  This datagram channel
   *
   * @throws  AlreadyConnectedException
   *          If this channel is already connected
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the connect operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the connect operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  UnresolvedAddressException
   *          If the given remote address is not fully resolved
   *
   * @throws  UnsupportedAddressTypeException
   *          If the type of the given remote address is not supported
   *
   * @throws  SecurityException
   *          If a security manager has been installed and it does not
   *          permit access to the given remote address, or if unbound,
   *          the security manager {@link SecurityManager#checkListen checkListen}
   *          method denies the operation
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  connect(remote: SocketAddress): DatagramChannel;
  /**
   * Disconnects this channel's socket.
   *
   *  The channel's socket is configured so that it can receive datagrams
   * from, and sends datagrams to, any remote address so long as the security
   * manager, if installed, permits it.
   *
   *  This method may be invoked at any time.  If another thread has
   * already initiated a read or write operation upon this channel, then an
   * invocation of this method will block until any such operation is
   * complete.
   *
   *  If this channel's socket is not connected, or if the channel is
   * closed, then invoking this method has no effect.  
   *
   * @apiNote If this method throws an IOException, the channel's socket
   * may be left in an unspecified state. It is strongly recommended that
   * the channel be closed when disconnect fails.
   *
   * @return  This datagram channel
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  disconnect(): DatagramChannel;
  /**
   * Returns the remote address to which this channel's socket is connected.
   *
   * @return  The remote address; `null` if the channel's socket is not
   *          connected
   *
   * @throws  ClosedChannelException
   *          If the channel is closed
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @since 1.7
  */
  getRemoteAddress(): SocketAddress;
  /**
   * Receives a datagram via this channel.
   *
   *  If a datagram is immediately available, or if this channel is in
   * blocking mode and one eventually becomes available, then the datagram is
   * copied into the given byte buffer and its source address is returned.
   * If this channel is in non-blocking mode and a datagram is not
   * immediately available then this method immediately returns
   * `null`.
   *
   *  The datagram is transferred into the given byte buffer starting at
   * its current position, as if by a regular {@link
   * ReadableByteChannel#read(java.nio.ByteBuffer) read} operation.  If there
   * are fewer bytes remaining in the buffer than are required to hold the
   * datagram then the remainder of the datagram is silently discarded.
   *
   *  This method performs exactly the same security checks as the {@link
   * java.net.DatagramSocket#receive receive} method of the {@link
   * java.net.DatagramSocket} class.  That is, if the socket is not connected
   * to a specific remote address and a security manager has been installed
   * then for each datagram received this method verifies that the source's
   * address and port number are permitted by the security manager's {@link
   * java.lang.SecurityManager#checkAccept checkAccept} method. Datagrams
   * that are not permitted by the security manager are silently discarded.
   * The overhead of this security check can be avoided by first connecting
   * the socket via the {@link #connect connect} method.
   *
   *  This method may be invoked at any time.  If another thread has
   * already initiated a read operation upon this channel, however, then an
   * invocation of this method will block until the first operation is
   * complete. If this channel's socket is not bound then this method will
   * first cause the socket to be bound to an address that is assigned
   * automatically, as if invoking the {@link #bind bind} method with a
   * parameter of `null`. 
   *
   * @param  dst
   *         The buffer into which the datagram is to be transferred
   *
   * @return  The datagram's source address,
   *          or `null` if this channel is in non-blocking mode
   *          and no datagram was immediately available
   *
   * @throws  IllegalArgumentException
   *          If the buffer is read-only
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the read operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the read operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  SecurityException
   *          If unbound, and a security manager has been installed and
   *          its {@link SecurityManager#checkListen checkListen} method
   *          denies the operation
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  receive(dst: ByteBuffer): SocketAddress;
  /**
   * Sends a datagram via this channel.
   *
   *  If this channel is in non-blocking mode and there is sufficient room
   * in the underlying output buffer, or if this channel is in blocking mode
   * and sufficient room becomes available, then the remaining bytes in the
   * given buffer are transmitted as a single datagram to the given target
   * address.
   *
   *  The datagram is transferred from the byte buffer as if by a regular
   * {@link WritableByteChannel#write(java.nio.ByteBuffer) write} operation.
   *
   *  This method performs exactly the same security checks as the {@link
   * java.net.DatagramSocket#send send} method of the {@link
   * java.net.DatagramSocket} class.  That is, if the socket is not connected
   * to a specific remote address and a security manager has been installed
   * then for each datagram sent this method verifies that the target address
   * and port number are permitted by the security manager's {@link
   * java.lang.SecurityManager#checkConnect checkConnect} method.  The
   * overhead of this security check can be avoided by first connecting the
   * socket via the {@link #connect connect} method.
   *
   *  This method may be invoked at any time.  If another thread has
   * already initiated a write operation upon this channel, however, then an
   * invocation of this method will block until the first operation is
   * complete. If this channel's socket is not bound then this method will
   * first cause the socket to be bound to an address that is assigned
   * automatically, as if by invoking the {@link #bind bind} method with a
   * parameter of `null`. 
   *
   * @param  src
   *         The buffer containing the datagram to be sent
   *
   * @param  target
   *         The address to which the datagram is to be sent
   *
   * @return   The number of bytes sent, which will be either the number
   *           of bytes that were remaining in the source buffer when this
   *           method was invoked or, if this channel is non-blocking, may be
   *           zero if there was insufficient room for the datagram in the
   *           underlying output buffer
   *
   * @throws  AlreadyConnectedException
   *          If this channel is connected to a different address
   *          from that specified by `target`
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the read operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the read operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  UnresolvedAddressException
   *          If the given remote address is not fully resolved
   *
   * @throws  UnsupportedAddressTypeException
   *          If the type of the given remote address is not supported
   *
   * @throws  SecurityException
   *          If a security manager has been installed and it does not permit
   *          datagrams to be sent to the given address, or if unbound, and
   *          the security manager's {@link SecurityManager#checkListen checkListen}
   *          method denies the operation
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  send(src: ByteBuffer, target: SocketAddress): number;
  /**
   * Reads a datagram from this channel.
   *
   *  This method may only be invoked if this channel's socket is
   * connected, and it only accepts datagrams from the socket's peer.  If
   * there are more bytes in the datagram than remain in the given buffer
   * then the remainder of the datagram is silently discarded.  Otherwise
   * this method behaves exactly as specified in the {@link
   * ReadableByteChannel} interface.  
   *
   * @throws  NotYetConnectedException
   *          If this channel's socket is not connected
  */
  read(dst: ByteBuffer): number;
  /**
   * Reads a datagram from this channel.
   *
   *  This method may only be invoked if this channel's socket is
   * connected, and it only accepts datagrams from the socket's peer.  If
   * there are more bytes in the datagram than remain in the given buffers
   * then the remainder of the datagram is silently discarded.  Otherwise
   * this method behaves exactly as specified in the {@link
   * ScatteringByteChannel} interface.  
   *
   * @throws  NotYetConnectedException
   *          If this channel's socket is not connected
  */
  read(dsts: ByteBuffer[], offset: number, length: number): number;
  /**
   * Reads a datagram from this channel.
   *
   *  This method may only be invoked if this channel's socket is
   * connected, and it only accepts datagrams from the socket's peer.  If
   * there are more bytes in the datagram than remain in the given buffers
   * then the remainder of the datagram is silently discarded.  Otherwise
   * this method behaves exactly as specified in the {@link
   * ScatteringByteChannel} interface.  
   *
   * @throws  NotYetConnectedException
   *          If this channel's socket is not connected
  */
  read(dsts: ByteBuffer[]): number;
  /**
   * Writes a datagram to this channel.
   *
   *  This method may only be invoked if this channel's socket is
   * connected, in which case it sends datagrams directly to the socket's
   * peer.  Otherwise it behaves exactly as specified in the {@link
   * WritableByteChannel} interface.  
   *
   * @throws  NotYetConnectedException
   *          If this channel's socket is not connected
  */
  write(src: ByteBuffer): number;
  /**
   * Writes a datagram to this channel.
   *
   *  This method may only be invoked if this channel's socket is
   * connected, in which case it sends datagrams directly to the socket's
   * peer.  Otherwise it behaves exactly as specified in the {@link
   * GatheringByteChannel} interface.  
   *
   * @return   The number of bytes sent, which will be either the number
   *           of bytes that were remaining in the source buffer when this
   *           method was invoked or, if this channel is non-blocking, may be
   *           zero if there was insufficient room for the datagram in the
   *           underlying output buffer
   *
   * @throws  NotYetConnectedException
   *          If this channel's socket is not connected
  */
  write(srcs: ByteBuffer[], offset: number, length: number): number;
  /**
   * Writes a datagram to this channel.
   *
   *  This method may only be invoked if this channel's socket is
   * connected, in which case it sends datagrams directly to the socket's
   * peer.  Otherwise it behaves exactly as specified in the {@link
   * GatheringByteChannel} interface.  
   *
   * @return   The number of bytes sent, which will be either the number
   *           of bytes that were remaining in the source buffer when this
   *           method was invoked or, if this channel is non-blocking, may be
   *           zero if there was insufficient room for the datagram in the
   *           underlying output buffer
   *
   * @throws  NotYetConnectedException
   *          If this channel's socket is not connected
  */
  write(srcs: ByteBuffer[]): number;
  /**
   * {@inheritDoc}
   * 
   * If there is a security manager set, its `checkConnect` method is
   * called with the local address and `-1` as its arguments to see
   * if the operation is allowed. If the operation is not allowed,
   * a `SocketAddress` representing the
   * {@link java.net.InetAddress#getLoopbackAddress loopback} address and the
   * local port of the channel's socket is returned.
   *
   * @return  The `SocketAddress` that the socket is bound to, or the
   *          `SocketAddress` representing the loopback address if
   *          denied by the security manager, or `null` if the
   *          channel's socket is not bound
   *
   * @throws  ClosedChannelException     {@inheritDoc}
   * @throws  IOException                {@inheritDoc}
  */
  getLocalAddress(): SocketAddress;
}
export interface DatagramChannel extends AbstractSelectableChannel, ByteChannel, ScatteringByteChannel, GatheringByteChannel, MulticastChannel {}
/**
 * A token representing the membership of an Internet Protocol (IP) multicast
 * group.
 *
 *  A membership key may represent a membership to receive all datagrams sent
 * to the group, or it may be source-specific, meaning that it
 * represents a membership that receives only datagrams from a specific source
 * address. Whether or not a membership key is source-specific may be determined
 * by invoking its {@link #sourceAddress() sourceAddress} method.
 *
 *  A membership key is valid upon creation and remains valid until the
 * membership is dropped by invoking the {@link #drop() drop} method, or
 * the channel is closed. The validity of the membership key may be tested
 * by invoking its {@link #isValid() isValid} method.
 *
 *  Where a membership key is not source-specific and the underlying operation
 * system supports source filtering, then the {@link #block block} and {@link
 * #unblock unblock} methods can be used to block or unblock multicast datagrams
 * from particular source addresses.
 *
 * @see MulticastChannel
 *
 * @since 1.7
*/
export class MembershipKey {
  /**
   * Tells whether or not this membership is valid.
   *
   *  A multicast group membership is valid upon creation and remains
   * valid until the membership is dropped by invoking the {@link #drop() drop}
   * method, or the channel is closed.
   *
   * @return  `true` if this membership key is valid, `false`
   *          otherwise
  */
  isValid(): boolean;
  /**
   * Drop membership.
   *
   *  If the membership key represents a membership to receive all datagrams
   * then the membership is dropped and the channel will no longer receive any
   * datagrams sent to the group. If the membership key is source-specific
   * then the channel will no longer receive datagrams sent to the group from
   * that source address.
   *
   *  After membership is dropped it may still be possible to receive
   * datagrams sent to the group. This can arise when datagrams are waiting to
   * be received in the socket's receive buffer. After membership is dropped
   * then the channel may {@link MulticastChannel#join join} the group again
   * in which case a new membership key is returned.
   *
   *  Upon return, this membership object will be {@link #isValid() invalid}.
   * If the multicast group membership is already invalid then invoking this
   * method has no effect. Once a multicast group membership is invalid,
   * it remains invalid forever.
  */
  drop(): void;
  /**
   * Block multicast datagrams from the given source address.
   *
   *  If this membership key is not source-specific, and the underlying
   * operating system supports source filtering, then this method blocks
   * multicast datagrams from the given source address. If the given source
   * address is already blocked then this method has no effect.
   * After a source address is blocked it may still be possible to receive
   * datagrams from that source. This can arise when datagrams are waiting to
   * be received in the socket's receive buffer.
   *
   * @param   source
   *          The source address to block
   *
   * @return  This membership key
   *
   * @throws  IllegalArgumentException
   *          If the `source` parameter is not a unicast address or
   *          is not the same address type as the multicast group
   * @throws  IllegalStateException
   *          If this membership key is source-specific or is no longer valid
   * @throws  UnsupportedOperationException
   *          If the underlying operating system does not support source
   *          filtering
   * @throws  IOException
   *          If an I/O error occurs
  */
  block(source: InetAddress): MembershipKey;
  /**
   * Unblock multicast datagrams from the given source address that was
   * previously blocked using the {@link #block(InetAddress) block} method.
   *
   * @param   source
   *          The source address to unblock
   *
   * @return  This membership key
   *
   * @throws  IllegalStateException
   *          If the given source address is not currently blocked or the
   *          membership key is no longer valid
  */
  unblock(source: InetAddress): MembershipKey;
  /**
   * Returns the channel for which this membership key was created. This
   * method will continue to return the channel even after the membership
   * becomes {@link #isValid invalid}.
   *
   * @return  the channel
  */
  channel(): MulticastChannel;
  /**
   * Returns the multicast group for which this membership key was created.
   * This method will continue to return the group even after the membership
   * becomes {@link #isValid invalid}.
   *
   * @return  the multicast group
  */
  group(): InetAddress;
  /**
   * Returns the network interface for which this membership key was created.
   * This method will continue to return the network interface even after the
   * membership becomes {@link #isValid invalid}.
   *
   * @return  the network interface
  */
  networkInterface(): NetworkInterface;
  /**
   * Returns the source address if this membership key is source-specific,
   * or `null` if this membership is not source-specific.
   *
   * @return  The source address if this membership key is source-specific,
   *          otherwise `null`
  */
  sourceAddress(): InetAddress;
}
export class IllegalBlockingModeException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class ByteChannel extends ReadableByteChannel {

}
export interface ByteChannel extends ReadableByteChannel, WritableByteChannel {}
export class IllegalChannelGroupException extends IllegalArgumentException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class ReadPendingException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class AsynchronousChannelGroup {
  /**
   * Returns the provider that created this channel group.
   *
   * @return  The provider that created this channel group
  */
  provider(): AsynchronousChannelProvider;
  /**
   * Creates an asynchronous channel group with a fixed thread pool.
   *
   *  The resulting asynchronous channel group reuses a fixed number of
   * threads. At any point, at most `nThreads` threads will be active
   * processing tasks that are submitted to handle I/O events and dispatch
   * completion results for operations initiated on asynchronous channels in
   * the group.
   *
   *  The group is created by invoking the {@link
   * AsynchronousChannelProvider#openAsynchronousChannelGroup(int,ThreadFactory)
   * openAsynchronousChannelGroup(int,ThreadFactory)} method of the system-wide
   * default {@link AsynchronousChannelProvider} object.
   *
   * @param   nThreads
   *          The number of threads in the pool
   * @param   threadFactory
   *          The factory to use when creating new threads
   *
   * @return  A new asynchronous channel group
   *
   * @throws  IllegalArgumentException
   *          If `nThreads <= 0`
   * @throws  IOException
   *          If an I/O error occurs
  */
  static withFixedThreadPool(nThreads: number, threadFactory: ThreadFactory): AsynchronousChannelGroup;
  /**
   * Creates an asynchronous channel group with a given thread pool that
   * creates new threads as needed.
   *
   *  The `executor` parameter is an `ExecutorService` that
   * creates new threads as needed to execute tasks that are submitted to
   * handle I/O events and dispatch completion results for operations initiated
   * on asynchronous channels in the group. It may reuse previously constructed
   * threads when they are available.
   *
   *  The `initialSize` parameter may be used by the implementation
   * as a hint as to the initial number of tasks it may submit. For
   * example, it may be used to indicate the initial number of threads that
   * wait on I/O events.
   *
   *  The executor is intended to be used exclusively by the resulting
   * asynchronous channel group. Termination of the group results in the
   * orderly  {@link ExecutorService#shutdown shutdown} of the executor
   * service. Shutting down the executor service by other means results in
   * unspecified behavior.
   *
   *  The group is created by invoking the {@link
   * AsynchronousChannelProvider#openAsynchronousChannelGroup(ExecutorService,int)
   * openAsynchronousChannelGroup(ExecutorService,int)} method of the system-wide
   * default {@link AsynchronousChannelProvider} object.
   *
   * @param   executor
   *          The thread pool for the resulting group
   * @param   initialSize
   *          A value `>=0` or a negative value for implementation
   *          specific default
   *
   * @return  A new asynchronous channel group
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @see java.util.concurrent.Executors#newCachedThreadPool
  */
  static withCachedThreadPool(executor: ExecutorService, initialSize: number): AsynchronousChannelGroup;
  /**
   * Creates an asynchronous channel group with a given thread pool.
   *
   *  The `executor` parameter is an `ExecutorService` that
   * executes tasks submitted to dispatch completion results for operations
   * initiated on asynchronous channels in the group.
   *
   *  Care should be taken when configuring the executor service. It
   * should support direct handoff or unbounded queuing of
   * submitted tasks, and the thread that invokes the {@link
   * ExecutorService#execute execute} method should never invoke the task
   * directly. An implementation may mandate additional constraints.
   *
   *  The executor is intended to be used exclusively by the resulting
   * asynchronous channel group. Termination of the group results in the
   * orderly  {@link ExecutorService#shutdown shutdown} of the executor
   * service. Shutting down the executor service by other means results in
   * unspecified behavior.
   *
   *  The group is created by invoking the {@link
   * AsynchronousChannelProvider#openAsynchronousChannelGroup(ExecutorService,int)
   * openAsynchronousChannelGroup(ExecutorService,int)} method of the system-wide
   * default {@link AsynchronousChannelProvider} object with an `     * initialSize` of `0`.
   *
   * @param   executor
   *          The thread pool for the resulting group
   *
   * @return  A new asynchronous channel group
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  static withThreadPool(executor: ExecutorService): AsynchronousChannelGroup;
  /**
   * Tells whether or not this asynchronous channel group is shutdown.
   *
   * @return  `true` if this asynchronous channel group is shutdown or
   *          has been marked for shutdown.
  */
  isShutdown(): boolean;
  /**
   * Tells whether or not this group has terminated.
   *
   *  Where this method returns `true`, then the associated thread
   * pool has also {@link ExecutorService#isTerminated terminated}.
   *
   * @return  `true` if this group has terminated
  */
  isTerminated(): boolean;
  /**
   * Initiates an orderly shutdown of the group.
   *
   *  This method marks the group as shutdown. Further attempts to construct
   * channel that binds to this group will throw {@link ShutdownChannelGroupException}.
   * The group terminates when all asynchronous channels in the group are
   * closed, all actively executing completion handlers have run to completion,
   * and all resources have been released. This method has no effect if the
   * group is already shutdown.
  */
  shutdown(): void;
  /**
   * Shuts down the group and closes all open channels in the group.
   *
   *  In addition to the actions performed by the {@link #shutdown() shutdown}
   * method, this method invokes the {@link AsynchronousChannel#close close}
   * method on all open channels in the group. This method does not attempt to
   * stop or interrupt threads that are executing completion handlers. The
   * group terminates when all actively executing completion handlers have run
   * to completion and all resources have been released. This method may be
   * invoked at any time. If some other thread has already invoked it, then
   * another invocation will block until the first invocation is complete,
   * after which it will return without effect.
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  shutdownNow(): void;
  /**
   * Awaits termination of the group.
   *
   *  This method blocks until the group has terminated, or the timeout
   * occurs, or the current thread is interrupted, whichever happens first.
   *
   * @param   timeout
   *          The maximum time to wait, or zero or less to not wait
   * @param   unit
   *          The time unit of the timeout argument
   *
   * @return  `true` if the group has terminated; `false` if the
   *          timeout elapsed before termination
   *
   * @throws  InterruptedException
   *          If interrupted while waiting
  */
  awaitTermination(timeout: number, unit: TimeUnit): boolean;
}
export class AcceptPendingException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class Selector extends Closeable {
  /**
   * Opens a selector.
   *
   *  The new selector is created by invoking the {@link
   * java.nio.channels.spi.SelectorProvider#openSelector openSelector} method
   * of the system-wide default {@link
   * java.nio.channels.spi.SelectorProvider} object.  
   *
   * @return  A new selector
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  static open(): Selector;
  /**
   * Tells whether or not this selector is open.
   *
   * @return `true` if, and only if, this selector is open
  */
  isOpen(): boolean;
  /**
   * Returns the provider that created this channel.
   *
   * @return  The provider that created this channel
  */
  provider(): SelectorProvider;
  /**
   * Returns this selector's key set.
   *
   *  The key set is not directly modifiable.  A key is removed only after
   * it has been cancelled and its channel has been deregistered.  Any
   * attempt to modify the key set will cause an {@link
   * UnsupportedOperationException} to be thrown.
   *
   *  The set is safe for use by multiple concurrent
   * threads.  
   *
   * @return  This selector's key set
   *
   * @throws  ClosedSelectorException
   *          If this selector is closed
  */
  keys(): Set<SelectionKey>;
  /**
   * Returns this selector's selected-key set.
   *
   *  Keys may be removed from, but not directly added to, the
   * selected-key set.  Any attempt to add an object to the key set will
   * cause an {@link UnsupportedOperationException} to be thrown.
   *
   *  The selected-key set is not thread-safe.  
   *
   * @return  This selector's selected-key set
   *
   * @throws  ClosedSelectorException
   *          If this selector is closed
  */
  selectedKeys(): Set<SelectionKey>;
  /**
   * Selects a set of keys whose corresponding channels are ready for I/O
   * operations.
   *
   *  This method performs a non-blocking selection
   * operation.  If no channels have become selectable since the previous
   * selection operation then this method immediately returns zero.
   *
   *  Invoking this method clears the effect of any previous invocations
   * of the {@link #wakeup wakeup} method.  
   *
   * @return  The number of keys, possibly zero, whose ready-operation sets
   *          were updated by the selection operation
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @throws  ClosedSelectorException
   *          If this selector is closed
  */
  selectNow(): number;
  /**
   * Selects a set of keys whose corresponding channels are ready for I/O
   * operations.
   *
   *  This method performs a blocking selection
   * operation.  It returns only after at least one channel is selected,
   * this selector's {@link #wakeup wakeup} method is invoked, the current
   * thread is interrupted, or the given timeout period expires, whichever
   * comes first.
   *
   *  This method does not offer real-time guarantees: It schedules the
   * timeout as if by invoking the {@link Object#wait(long)} method. 
   *
   * @param  timeout  If positive, block for up to `timeout`
   *                  milliseconds, more or less, while waiting for a
   *                  channel to become ready; if zero, block indefinitely;
   *                  must not be negative
   *
   * @return  The number of keys, possibly zero,
   *          whose ready-operation sets were updated
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @throws  ClosedSelectorException
   *          If this selector is closed
   *
   * @throws  IllegalArgumentException
   *          If the value of the timeout argument is negative
  */
  select(timeout: number): number;
  /**
   * Selects a set of keys whose corresponding channels are ready for I/O
   * operations.
   *
   *  This method performs a blocking selection
   * operation.  It returns only after at least one channel is selected,
   * this selector's {@link #wakeup wakeup} method is invoked, or the current
   * thread is interrupted, whichever comes first.  
   *
   * @return  The number of keys, possibly zero,
   *          whose ready-operation sets were updated
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @throws  ClosedSelectorException
   *          If this selector is closed
  */
  select(): number;
  /**
   * Selects and performs an action on the keys whose corresponding channels
   * are ready for I/O operations.
   *
   *  This method performs a blocking selection
   * operation.  It wakes up from querying the operating system only when
   * at least one channel is selected, this selector's {@link #wakeup wakeup}
   * method is invoked, the current thread is interrupted, or the given
   * timeout period expires, whichever comes first.
   *
   *  The specified action's {@link Consumer#accept(Object) accept}
   * method is invoked with the key for each channel that is ready to perform
   * an operation identified by its key's interest set.  The `accept`
   * method may be invoked more than once for the same key but with the
   * ready-operation set containing a subset of the operations for which the
   * channel is ready (as described above).  The `accept` method is
   * invoked while synchronized on the selector and its selected-key set.
   * Great care must be taken to avoid deadlocking with other threads that
   * also synchronize on these objects.  Selection operations are not reentrant
   * in general and consequently the action should take great care not
   * to attempt a selection operation on the same selector.  The behavior when
   * attempting a reentrant selection operation is implementation specific and
   * therefore not specified.  If the action closes the selector then
   * `ClosedSelectorException` is thrown when the action completes.
   * The action is not prohibited from closing channels registered with
   * the selector, nor prohibited from cancelling keys or changing a key's
   * interest set.  If a channel is selected but its key is cancelled or its
   * interest set changed before the action is performed on the key
   * then it is implementation specific as to whether the action is
   * invoked (it may be invoked with an {@link SelectionKey#isValid() invalid}
   * key).  Exceptions thrown by the action are relayed to the caller.
   *
   *  This method does not offer real-time guarantees: It schedules the
   * timeout as if by invoking the {@link Object#wait(long)} method.
   *
   * @implSpec The default implementation removes all keys from the
   * selected-key set, invokes {@link #select(long) select(long)} with the
   * given timeout and then performs the action for each key added to the
   * selected-key set.  The default implementation does not detect the action
   * performing a reentrant selection operation.  The selected-key set may
   * or may not be empty on completion of the default implementation.
   *
   * @param  action   The action to perform
   *
   * @param  timeout  If positive, block for up to `timeout`
   *                  milliseconds, more or less, while waiting for a
   *                  channel to become ready; if zero, block indefinitely;
   *                  must not be negative
   *
   * @return  The number of unique keys consumed, possibly zero
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @throws  ClosedSelectorException
   *          If this selector is closed or is closed by the action
   *
   * @throws  IllegalArgumentException
   *          If the value of the timeout argument is negative
   *
   * @since 11
  */
  select(action: Consumer<SelectionKey>, timeout: number): number;
  /**
   * Selects and performs an action on the keys whose corresponding channels
   * are ready for I/O operations.
   *
   *  This method performs a blocking selection
   * operation.  It wakes up from querying the operating system only when
   * at least one channel is selected, this selector's {@link #wakeup wakeup}
   * method is invoked, or the current thread is interrupted, whichever comes
   * first.
   *
   *  This method is equivalent to invoking the 2-arg
   * {@link #select(Consumer, long) select} method with a timeout of `0`
   * to block indefinitely.  
   *
   * @implSpec The default implementation invokes the 2-arg `select`
   * method with a timeout of `0`.
   *
   * @param  action   The action to perform
   *
   * @return  The number of unique keys consumed, possibly zero
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @throws  ClosedSelectorException
   *          If this selector is closed or is closed by the action
   *
   * @since 11
  */
  select(action: Consumer<SelectionKey>): number;
  /**
   * Selects and performs an action on the keys whose corresponding channels
   * are ready for I/O operations.
   *
   *  This method performs a non-blocking selection
   * operation.
   *
   *  Invoking this method clears the effect of any previous invocations
   * of the {@link #wakeup wakeup} method.  
   *
   * @implSpec The default implementation removes all keys from the
   * selected-key set, invokes {@link #selectNow() selectNow()} and then
   * performs the action for each key added to the selected-key set.  The
   * default implementation does not detect the action performing a reentrant
   * selection operation.  The selected-key set may or may not be empty on
   * completion of the default implementation.
   *
   * @param  action   The action to perform
   *
   * @return  The number of unique keys consumed, possibly zero
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @throws  ClosedSelectorException
   *          If this selector is closed or is closed by the action
   *
   * @since 11
  */
  selectNow(action: Consumer<SelectionKey>): number;
  /**
   * Causes the first selection operation that has not yet returned to return
   * immediately.
   *
   *  If another thread is currently blocked in a selection operation then
   * that invocation will return immediately.  If no selection operation is
   * currently in progress then the next invocation of a selection operation
   * will return immediately unless {@link #selectNow()} or {@link
   * #selectNow(Consumer)} is invoked in the meantime.  In any case the value
   * returned by that invocation may be non-zero.  Subsequent selection
   * operations will block as usual unless this method is invoked again in the
   * meantime.
   *
   *  Invoking this method more than once between two successive selection
   * operations has the same effect as invoking it just once.  
   *
   * @return  This selector
  */
  wakeup(): Selector;
  /**
   * Closes this selector.
   *
   *  If a thread is currently blocked in one of this selector's selection
   * methods then it is interrupted as if by invoking the selector's {@link
   * #wakeup wakeup} method.
   *
   *  Any uncancelled keys still associated with this selector are
   * invalidated, their channels are deregistered, and any other resources
   * associated with this selector are released.
   *
   *  If this selector is already closed then invoking this method has no
   * effect.
   *
   *  After a selector is closed, any further attempt to use it, except by
   * invoking this method or the {@link #wakeup wakeup} method, will cause a
   * {@link ClosedSelectorException} to be thrown. 
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  close(): void;
}
export class ConnectionPendingException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class ScatteringByteChannel extends ReadableByteChannel {
  /**
   * Reads a sequence of bytes from this channel into a subsequence of the
   * given buffers.
   *
   *  An invocation of this method attempts to read up to r bytes
   * from this channel, where r is the total number of bytes remaining
   * the specified subsequence of the given buffer array, that is,
   *
   *      * dsts[offset].remaining()
   *     + dsts[offset+1].remaining()
   *     + ... + dsts[offset+length-1].remaining()
   *
   * at the moment that this method is invoked.
   *
   *  Suppose that a byte sequence of length n is read, where
   * `0` `<=` n `<=` r.
   * Up to the first `dsts[offset].remaining()` bytes of this sequence
   * are transferred into buffer `dsts[offset]`, up to the next
   * `dsts[offset+1].remaining()` bytes are transferred into buffer
   * `dsts[offset+1]`, and so forth, until the entire byte sequence
   * is transferred into the given buffers.  As many bytes as possible are
   * transferred into each buffer, hence the final position of each updated
   * buffer, except the last updated buffer, is guaranteed to be equal to
   * that buffer's limit.
   *
   *  This method may be invoked at any time.  If another thread has
   * already initiated a read operation upon this channel, however, then an
   * invocation of this method will block until the first operation is
   * complete. 
   *
   * @param  dsts
   *         The buffers into which bytes are to be transferred
   *
   * @param  offset
   *         The offset within the buffer array of the first buffer into
   *         which bytes are to be transferred; must be non-negative and no
   *         larger than `dsts.length`
   *
   * @param  length
   *         The maximum number of buffers to be accessed; must be
   *         non-negative and no larger than
   *         `dsts.length` - `offset`
   *
   * @return The number of bytes read, possibly zero,
   *         or `-1` if the channel has reached end-of-stream
   *
   * @throws  IndexOutOfBoundsException
   *          If the preconditions on the `offset` and `length`
   *          parameters do not hold
   *
   * @throws  IllegalArgumentException
   *          If any of the buffers is read-only
   *
   * @throws  NonReadableChannelException
   *          If this channel was not opened for reading
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the read operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the read operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  read(dsts: ByteBuffer[], offset: number, length: number): number;
  /**
   * Reads a sequence of bytes from this channel into the given buffers.
   *
   *  An invocation of this method of the form `c.read(dsts)`
   * behaves in exactly the same manner as the invocation
   *
   *      * c.read(dsts, 0, dsts.length);
   *
   * @param  dsts
   *         The buffers into which bytes are to be transferred
   *
   * @return The number of bytes read, possibly zero,
   *         or `-1` if the channel has reached end-of-stream
   *
   * @throws  IllegalArgumentException
   *          If any of the buffers is read-only
   *
   * @throws  NonReadableChannelException
   *          If this channel was not opened for reading
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the read operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the read operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  read(dsts: ByteBuffer[]): number;
  /**
   * Reads a sequence of bytes from this channel into the given buffer.
   *
   *  An attempt is made to read up to r bytes from the channel,
   * where r is the number of bytes remaining in the buffer, that is,
   * `dst.remaining()`, at the moment this method is invoked.
   *
   *  Suppose that a byte sequence of length n is read, where
   * `0` `<=` n `<=` r.
   * This byte sequence will be transferred into the buffer so that the first
   * byte in the sequence is at index p and the last byte is at index
   * p `+` n `-` `1`,
   * where p is the buffer's position at the moment this method is
   * invoked.  Upon return the buffer's position will be equal to
   * p `+` n; its limit will not have changed.
   *
   *  A read operation might not fill the buffer, and in fact it might not
   * read any bytes at all.  Whether or not it does so depends upon the
   * nature and state of the channel.  A socket channel in non-blocking mode,
   * for example, cannot read any more bytes than are immediately available
   * from the socket's input buffer; similarly, a file channel cannot read
   * any more bytes than remain in the file.  It is guaranteed, however, that
   * if a channel is in blocking mode and there is at least one byte
   * remaining in the buffer then this method will block until at least one
   * byte is read.
   *
   *  This method may be invoked at any time.  If another thread has
   * already initiated a read operation upon this channel, however, then an
   * invocation of this method will block until the first operation is
   * complete. 
   *
   * @param  dst
   *         The buffer into which bytes are to be transferred
   *
   * @return  The number of bytes read, possibly zero, or `-1` if the
   *          channel has reached end-of-stream
   *
   * @throws  IllegalArgumentException
   *          If the buffer is read-only
   *
   * @throws  NonReadableChannelException
   *          If this channel was not opened for reading
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the read operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the read operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  read(dst: ByteBuffer): number;
}
export class ClosedChannelException extends IOException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class WritableByteChannel extends Channel {
  /**
   * Writes a sequence of bytes to this channel from the given buffer.
   *
   *  An attempt is made to write up to r bytes to the channel,
   * where r is the number of bytes remaining in the buffer, that is,
   * `src.remaining()`, at the moment this method is invoked.
   *
   *  Suppose that a byte sequence of length n is written, where
   * `0` `<=` n `<=` r.
   * This byte sequence will be transferred from the buffer starting at index
   * p, where p is the buffer's position at the moment this
   * method is invoked; the index of the last byte written will be
   * p `+` n `-` `1`.
   * Upon return the buffer's position will be equal to
   * p `+` n; its limit will not have changed.
   *
   *  Unless otherwise specified, a write operation will return only after
   * writing all of the r requested bytes.  Some types of channels,
   * depending upon their state, may write only some of the bytes or possibly
   * none at all.  A socket channel in non-blocking mode, for example, cannot
   * write any more bytes than are free in the socket's output buffer.
   *
   *  This method may be invoked at any time.  If another thread has
   * already initiated a write operation upon this channel, however, then an
   * invocation of this method will block until the first operation is
   * complete. 
   *
   * @param  src
   *         The buffer from which bytes are to be retrieved
   *
   * @return The number of bytes written, possibly zero
   *
   * @throws  NonWritableChannelException
   *          If this channel was not opened for writing
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the write operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the write operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  write(src: ByteBuffer): number;
}
export class AsynchronousCloseException extends ClosedChannelException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class FileLock extends AutoCloseable {
  /**
   * Returns the file channel upon whose file this lock was acquired.
   *
   *  This method has been superseded by the {@link #acquiredBy acquiredBy}
   * method.
   *
   * @return  The file channel, or `null` if the file lock was not
   *          acquired by a file channel.
  */
  channel(): FileChannel;
  /**
   * Returns the channel upon whose file this lock was acquired.
   *
   * @return  The channel upon whose file this lock was acquired.
   *
   * @since 1.7
  */
  acquiredBy(): Channel;
  /**
   * Returns the position within the file of the first byte of the locked
   * region.
   *
   *  A locked region need not be contained within, or even overlap, the
   * actual underlying file, so the value returned by this method may exceed
   * the file's current size.  
   *
   * @return  The position
  */
  position(): number;
  /**
   * Returns the size of the locked region in bytes.
   *
   *  A locked region need not be contained within, or even overlap, the
   * actual underlying file, so the value returned by this method may exceed
   * the file's current size.  
   *
   * @return  The size of the locked region
  */
  size(): number;
  /**
   * Tells whether this lock is shared.
   *
   * @return `true` if lock is shared,
   *         `false` if it is exclusive
  */
  isShared(): boolean;
  /**
   * Tells whether or not this lock overlaps the given lock range.
   *
   * @param   position
   *          The starting position of the lock range
   * @param   size
   *          The size of the lock range
   *
   * @return  `true` if, and only if, this lock and the given lock
   *          range overlap by at least one byte
  */
  overlaps(position: number, size: number): boolean;
  /**
   * Tells whether or not this lock is valid.
   *
   *  A lock object remains valid until it is released or the associated
   * file channel is closed, whichever comes first.  
   *
   * @return  `true` if, and only if, this lock is valid
  */
  isValid(): boolean;
  /**
   * Releases this lock.
   *
   *  If this lock object is valid then invoking this method releases the
   * lock and renders the object invalid.  If this lock object is invalid
   * then invoking this method has no effect.  
   *
   * @throws  ClosedChannelException
   *          If the channel that was used to acquire this lock
   *          is no longer open
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  release(): void;
  /**
   * This method invokes the {@link #release} method. It was added
   * to the class so that it could be used in conjunction with the
   * automatic resource management block construct.
   *
   * @since 1.7
  */
  close(): void;
  /**
   * Returns a string describing the range, type, and validity of this lock.
   *
   * @return  A descriptive string
  */
  toString(): string;
}
export class SeekableByteChannel extends ByteChannel {
  /**
   * Reads a sequence of bytes from this channel into the given buffer.
   *
   *  Bytes are read starting at this channel's current position, and
   * then the position is updated with the number of bytes actually read.
   * Otherwise this method behaves exactly as specified in the {@link
   * ReadableByteChannel} interface.
  */
  read(dst: ByteBuffer): number;
  /**
   * Writes a sequence of bytes to this channel from the given buffer.
   *
   *  Bytes are written starting at this channel's current position, unless
   * the channel is connected to an entity such as a file that is opened with
   * the {@link java.nio.file.StandardOpenOption#APPEND APPEND} option, in
   * which case the position is first advanced to the end. The entity to which
   * the channel is connected is grown, if necessary, to accommodate the
   * written bytes, and then the position is updated with the number of bytes
   * actually written. Otherwise this method behaves exactly as specified by
   * the {@link WritableByteChannel} interface.
  */
  write(src: ByteBuffer): number;
  /**
   * Returns this channel's position.
   *
   * @return  This channel's position,
   *          a non-negative integer counting the number of bytes
   *          from the beginning of the entity to the current position
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  IOException
   *          If some other I/O error occurs
  */
  position(): number;
  /**
   * Sets this channel's position.
   *
   *  Setting the position to a value that is greater than the current size
   * is legal but does not change the size of the entity.  A later attempt to
   * read bytes at such a position will immediately return an end-of-file
   * indication.  A later attempt to write bytes at such a position will cause
   * the entity to grow to accommodate the new bytes; the values of any bytes
   * between the previous end-of-file and the newly-written bytes are
   * unspecified.
   *
   *  Setting the channel's position is not recommended when connected to
   * an entity, typically a file, that is opened with the {@link
   * java.nio.file.StandardOpenOption#APPEND APPEND} option. When opened for
   * append, the position is first advanced to the end before writing.
   *
   * @param  newPosition
   *         The new position, a non-negative integer counting
   *         the number of bytes from the beginning of the entity
   *
   * @return  This channel
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  IllegalArgumentException
   *          If the new position is negative
   * @throws  IOException
   *          If some other I/O error occurs
  */
  position(newPosition: number): SeekableByteChannel;
  /**
   * Returns the current size of entity to which this channel is connected.
   *
   * @return  The current size, measured in bytes
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  IOException
   *          If some other I/O error occurs
  */
  size(): number;
  /**
   * Truncates the entity, to which this channel is connected, to the given
   * size.
   *
   *  If the given size is less than the current size then the entity is
   * truncated, discarding any bytes beyond the new end. If the given size is
   * greater than or equal to the current size then the entity is not modified.
   * In either case, if the current position is greater than the given size
   * then it is set to that size.
   *
   *  An implementation of this interface may prohibit truncation when
   * connected to an entity, typically a file, opened with the {@link
   * java.nio.file.StandardOpenOption#APPEND APPEND} option.
   *
   * @param  size
   *         The new size, a non-negative byte count
   *
   * @return  This channel
   *
   * @throws  NonWritableChannelException
   *          If this channel was not opened for writing
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  IllegalArgumentException
   *          If the new size is negative
   * @throws  IOException
   *          If some other I/O error occurs
  */
  truncate(size: number): SeekableByteChannel;
}
export class AlreadyConnectedException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class ReadableByteChannel extends Channel {
  /**
   * Reads a sequence of bytes from this channel into the given buffer.
   *
   *  An attempt is made to read up to r bytes from the channel,
   * where r is the number of bytes remaining in the buffer, that is,
   * `dst.remaining()`, at the moment this method is invoked.
   *
   *  Suppose that a byte sequence of length n is read, where
   * `0` `<=` n `<=` r.
   * This byte sequence will be transferred into the buffer so that the first
   * byte in the sequence is at index p and the last byte is at index
   * p `+` n `-` `1`,
   * where p is the buffer's position at the moment this method is
   * invoked.  Upon return the buffer's position will be equal to
   * p `+` n; its limit will not have changed.
   *
   *  A read operation might not fill the buffer, and in fact it might not
   * read any bytes at all.  Whether or not it does so depends upon the
   * nature and state of the channel.  A socket channel in non-blocking mode,
   * for example, cannot read any more bytes than are immediately available
   * from the socket's input buffer; similarly, a file channel cannot read
   * any more bytes than remain in the file.  It is guaranteed, however, that
   * if a channel is in blocking mode and there is at least one byte
   * remaining in the buffer then this method will block until at least one
   * byte is read.
   *
   *  This method may be invoked at any time.  If another thread has
   * already initiated a read operation upon this channel, however, then an
   * invocation of this method will block until the first operation is
   * complete. 
   *
   * @param  dst
   *         The buffer into which bytes are to be transferred
   *
   * @return  The number of bytes read, possibly zero, or `-1` if the
   *          channel has reached end-of-stream
   *
   * @throws  IllegalArgumentException
   *          If the buffer is read-only
   *
   * @throws  NonReadableChannelException
   *          If this channel was not opened for reading
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the read operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the read operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  read(dst: ByteBuffer): number;
}
export class FileChannel extends AbstractInterruptibleChannel {
  /**
   * Opens or creates a file, returning a file channel to access the file.
   *
   *  The `options` parameter determines how the file is opened.
   * The {@link StandardOpenOption#READ READ} and {@link StandardOpenOption#WRITE
   * WRITE} options determine if the file should be opened for reading and/or
   * writing. If neither option (or the {@link StandardOpenOption#APPEND APPEND}
   * option) is contained in the array then the file is opened for reading.
   * By default reading or writing commences at the beginning of the file.
   *
   *  In the addition to `READ` and `WRITE`, the following
   * options may be present:
   *
   * 
   * additional options
   * 
   *  Option Description 
   * 
   * 
   * 
   *    {@link StandardOpenOption#APPEND APPEND} 
   *    If this option is present then the file is opened for writing and
   *     each invocation of the channel's `write` method first advances
   *     the position to the end of the file and then writes the requested
   *     data. Whether the advancement of the position and the writing of the
   *     data are done in a single atomic operation is system-dependent and
   *     therefore unspecified. This option may not be used in conjunction
   *     with the `READ` or `TRUNCATE_EXISTING` options. 
   * 
   * 
   *    {@link StandardOpenOption#TRUNCATE_EXISTING TRUNCATE_EXISTING} 
   *    If this option is present then the existing file is truncated to
   *   a size of 0 bytes. This option is ignored when the file is opened only
   *   for reading. 
   * 
   * 
   *    {@link StandardOpenOption#CREATE_NEW CREATE_NEW} 
   *    If this option is present then a new file is created, failing if
   *   the file already exists. When creating a file the check for the
   *   existence of the file and the creation of the file if it does not exist
   *   is atomic with respect to other file system operations. This option is
   *   ignored when the file is opened only for reading. 
   * 
   * 
   *    {@link StandardOpenOption#CREATE CREATE} 
   *    If this option is present then an existing file is opened if it
   *   exists, otherwise a new file is created. When creating a file the check
   *   for the existence of the file and the creation of the file if it does
   *   not exist is atomic with respect to other file system operations. This
   *   option is ignored if the `CREATE_NEW` option is also present or
   *   the file is opened only for reading. 
   * 
   * 
   *    {@link StandardOpenOption#DELETE_ON_CLOSE DELETE_ON_CLOSE} 
   *    When this option is present then the implementation makes a
   *   best effort attempt to delete the file when closed by
   *   the {@link #close close} method. If the `close` method is not
   *   invoked then a best effort attempt is made to delete the file
   *   when the Java virtual machine terminates. 
   * 
   * 
   *   {@link StandardOpenOption#SPARSE SPARSE} 
   *    When creating a new file this option is a hint that the
   *   new file will be sparse. This option is ignored when not creating
   *   a new file. 
   * 
   * 
   *    {@link StandardOpenOption#SYNC SYNC} 
   *    Requires that every update to the file's content or metadata be
   *   written synchronously to the underlying storage device. (see  Synchronized I/O file
   *   integrity). 
   * 
   * 
   *    {@link StandardOpenOption#DSYNC DSYNC} 
   *    Requires that every update to the file's content be written
   *   synchronously to the underlying storage device. (see  Synchronized I/O file
   *   integrity). 
   * 
   * 
   * 
   *
   *  An implementation may also support additional options.
   *
   *  The `attrs` parameter is an optional array of file {@link
   * FileAttribute file-attributes} to set atomically when creating the file.
   *
   *  The new channel is created by invoking the {@link
   * FileSystemProvider#newFileChannel newFileChannel} method on the
   * provider that created the `Path`.
   *
   * @param   path
   *          The path of the file to open or create
   * @param   options
   *          Options specifying how the file is opened
   * @param   attrs
   *          An optional list of file attributes to set atomically when
   *          creating the file
   *
   * @return  A new file channel
   *
   * @throws  IllegalArgumentException
   *          If the set contains an invalid combination of options
   * @throws  UnsupportedOperationException
   *          If the `path` is associated with a provider that does not
   *          support creating file channels, or an unsupported open option is
   *          specified, or the array contains an attribute that cannot be set
   *          atomically when creating the file
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  SecurityException
   *          If a security manager is installed and it denies an
   *          unspecified permission required by the implementation.
   *          In the case of the default provider, the {@link
   *          SecurityManager#checkRead(String)} method is invoked to check
   *          read access if the file is opened for reading. The {@link
   *          SecurityManager#checkWrite(String)} method is invoked to check
   *          write access if the file is opened for writing
   *
   * @since   1.7
  */
  static open(path: Path, options: Set<OpenOption>, ...attrs: FileAttribute[]): FileChannel;
  /**
   * Opens or creates a file, returning a file channel to access the file.
   *
   *  An invocation of this method behaves in exactly the same way as the
   * invocation
   *      *     fc.{@link #open(Path,Set,FileAttribute[]) open}(file, opts, new FileAttribute<?>[0]);
   * 
   * where `opts` is a set of the options specified in the `     * options` array.
   *
   * @param   path
   *          The path of the file to open or create
   * @param   options
   *          Options specifying how the file is opened
   *
   * @return  A new file channel
   *
   * @throws  IllegalArgumentException
   *          If the set contains an invalid combination of options
   * @throws  UnsupportedOperationException
   *          If the `path` is associated with a provider that does not
   *          support creating file channels, or an unsupported open option is
   *          specified
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  SecurityException
   *          If a security manager is installed and it denies an
   *          unspecified permission required by the implementation.
   *          In the case of the default provider, the {@link
   *          SecurityManager#checkRead(String)} method is invoked to check
   *          read access if the file is opened for reading. The {@link
   *          SecurityManager#checkWrite(String)} method is invoked to check
   *          write access if the file is opened for writing
   *
   * @since   1.7
  */
  static open(path: Path, ...options: OpenOption[]): FileChannel;
  /**
   * Reads a sequence of bytes from this channel into the given buffer.
   *
   *  Bytes are read starting at this channel's current file position, and
   * then the file position is updated with the number of bytes actually
   * read.  Otherwise this method behaves exactly as specified in the {@link
   * ReadableByteChannel} interface. 
  */
  read(dst: ByteBuffer): number;
  /**
   * Reads a sequence of bytes from this channel into a subsequence of the
   * given buffers.
   *
   *  Bytes are read starting at this channel's current file position, and
   * then the file position is updated with the number of bytes actually
   * read.  Otherwise this method behaves exactly as specified in the {@link
   * ScatteringByteChannel} interface.  
  */
  read(dsts: ByteBuffer[], offset: number, length: number): number;
  /**
   * Reads a sequence of bytes from this channel into the given buffers.
   *
   *  Bytes are read starting at this channel's current file position, and
   * then the file position is updated with the number of bytes actually
   * read.  Otherwise this method behaves exactly as specified in the {@link
   * ScatteringByteChannel} interface.  
  */
  read(dsts: ByteBuffer[]): number;
  /**
   * Writes a sequence of bytes to this channel from the given buffer.
   *
   *  Bytes are written starting at this channel's current file position
   * unless the channel is in append mode, in which case the position is
   * first advanced to the end of the file.  The file is grown, if necessary,
   * to accommodate the written bytes, and then the file position is updated
   * with the number of bytes actually written.  Otherwise this method
   * behaves exactly as specified by the {@link WritableByteChannel}
   * interface. 
  */
  write(src: ByteBuffer): number;
  /**
   * Writes a sequence of bytes to this channel from a subsequence of the
   * given buffers.
   *
   *  Bytes are written starting at this channel's current file position
   * unless the channel is in append mode, in which case the position is
   * first advanced to the end of the file.  The file is grown, if necessary,
   * to accommodate the written bytes, and then the file position is updated
   * with the number of bytes actually written.  Otherwise this method
   * behaves exactly as specified in the {@link GatheringByteChannel}
   * interface.  
  */
  write(srcs: ByteBuffer[], offset: number, length: number): number;
  /**
   * Writes a sequence of bytes to this channel from the given buffers.
   *
   *  Bytes are written starting at this channel's current file position
   * unless the channel is in append mode, in which case the position is
   * first advanced to the end of the file.  The file is grown, if necessary,
   * to accommodate the written bytes, and then the file position is updated
   * with the number of bytes actually written.  Otherwise this method
   * behaves exactly as specified in the {@link GatheringByteChannel}
   * interface.  
  */
  write(srcs: ByteBuffer[]): number;
  /**
   * Returns this channel's file position.
   *
   * @return  This channel's file position,
   *          a non-negative integer counting the number of bytes
   *          from the beginning of the file to the current position
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  position(): number;
  /**
   * Sets this channel's file position.
   *
   *  Setting the position to a value that is greater than the file's
   * current size is legal but does not change the size of the file.  A later
   * attempt to read bytes at such a position will immediately return an
   * end-of-file indication.  A later attempt to write bytes at such a
   * position will cause the file to be grown to accommodate the new bytes;
   * the values of any bytes between the previous end-of-file and the
   * newly-written bytes are unspecified.  
   *
   * @param  newPosition
   *         The new position, a non-negative integer counting
   *         the number of bytes from the beginning of the file
   *
   * @return  This file channel
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  IllegalArgumentException
   *          If the new position is negative
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  position(newPosition: number): FileChannel;
  /**
   * Returns the current size of this channel's file.
   *
   * @return  The current size of this channel's file,
   *          measured in bytes
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  size(): number;
  /**
   * Truncates this channel's file to the given size.
   *
   *  If the given size is less than the file's current size then the file
   * is truncated, discarding any bytes beyond the new end of the file.  If
   * the given size is greater than or equal to the file's current size then
   * the file is not modified.  In either case, if this channel's file
   * position is greater than the given size then it is set to that size.
   * 
   *
   * @param  size
   *         The new size, a non-negative byte count
   *
   * @return  This file channel
   *
   * @throws  NonWritableChannelException
   *          If this channel was not opened for writing
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  IllegalArgumentException
   *          If the new size is negative
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  truncate(size: number): FileChannel;
  /**
   * Forces any updates to this channel's file to be written to the storage
   * device that contains it.
   *
   *  If this channel's file resides on a local storage device then when
   * this method returns it is guaranteed that all changes made to the file
   * since this channel was created, or since this method was last invoked,
   * will have been written to that device.  This is useful for ensuring that
   * critical information is not lost in the event of a system crash.
   *
   *  If the file does not reside on a local device then no such guarantee
   * is made.
   *
   *  The `metaData` parameter can be used to limit the number of
   * I/O operations that this method is required to perform.  Passing
   * `false` for this parameter indicates that only updates to the
   * file's content need be written to storage; passing `true`
   * indicates that updates to both the file's content and metadata must be
   * written, which generally requires at least one more I/O operation.
   * Whether this parameter actually has any effect is dependent upon the
   * underlying operating system and is therefore unspecified.
   *
   *  Invoking this method may cause an I/O operation to occur even if the
   * channel was only opened for reading.  Some operating systems, for
   * example, maintain a last-access time as part of a file's metadata, and
   * this time is updated whenever the file is read.  Whether or not this is
   * actually done is system-dependent and is therefore unspecified.
   *
   *  This method is only guaranteed to force changes that were made to
   * this channel's file via the methods defined in this class.  It may or
   * may not force changes that were made by modifying the content of a
   * {@link MappedByteBuffer mapped byte buffer} obtained by
   * invoking the {@link #map map} method.  Invoking the {@link
   * MappedByteBuffer#force force} method of the mapped byte buffer will
   * force changes made to the buffer's content to be written.  
   *
   * @param   metaData
   *          If `true` then this method is required to force changes
   *          to both the file's content and metadata to be written to
   *          storage; otherwise, it need only force content changes to be
   *          written
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  force(metaData: boolean): void;
  /**
   * Transfers bytes from this channel's file to the given writable byte
   * channel.
   *
   *  An attempt is made to read up to `count` bytes starting at
   * the given `position` in this channel's file and write them to the
   * target channel.  An invocation of this method may or may not transfer
   * all of the requested bytes; whether or not it does so depends upon the
   * natures and states of the channels.  Fewer than the requested number of
   * bytes are transferred if this channel's file contains fewer than
   * `count` bytes starting at the given `position`, or if the
   * target channel is non-blocking and it has fewer than `count`
   * bytes free in its output buffer.
   *
   *  This method does not modify this channel's position.  If the given
   * position is greater than the file's current size then no bytes are
   * transferred.  If the target channel has a position then bytes are
   * written starting at that position and then the position is incremented
   * by the number of bytes written.
   *
   *  This method is potentially much more efficient than a simple loop
   * that reads from this channel and writes to the target channel.  Many
   * operating systems can transfer bytes directly from the filesystem cache
   * to the target channel without actually copying them.  
   *
   * @param  position
   *         The position within the file at which the transfer is to begin;
   *         must be non-negative
   *
   * @param  count
   *         The maximum number of bytes to be transferred; must be
   *         non-negative
   *
   * @param  target
   *         The target channel
   *
   * @return  The number of bytes, possibly zero,
   *          that were actually transferred
   *
   * @throws IllegalArgumentException
   *         If the preconditions on the parameters do not hold
   *
   * @throws  NonReadableChannelException
   *          If this channel was not opened for reading
   *
   * @throws  NonWritableChannelException
   *          If the target channel was not opened for writing
   *
   * @throws  ClosedChannelException
   *          If either this channel or the target channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes either channel
   *          while the transfer is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread while the
   *          transfer is in progress, thereby closing both channels and
   *          setting the current thread's interrupt status
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  transferTo(position: number, count: number, target: WritableByteChannel): number;
  /**
   * Transfers bytes into this channel's file from the given readable byte
   * channel.
   *
   *  An attempt is made to read up to `count` bytes from the
   * source channel and write them to this channel's file starting at the
   * given `position`.  An invocation of this method may or may not
   * transfer all of the requested bytes; whether or not it does so depends
   * upon the natures and states of the channels.  Fewer than the requested
   * number of bytes will be transferred if the source channel has fewer than
   * `count` bytes remaining, or if the source channel is non-blocking
   * and has fewer than `count` bytes immediately available in its
   * input buffer.
   *
   *  This method does not modify this channel's position.  If the given
   * position is greater than the file's current size then no bytes are
   * transferred.  If the source channel has a position then bytes are read
   * starting at that position and then the position is incremented by the
   * number of bytes read.
   *
   *  This method is potentially much more efficient than a simple loop
   * that reads from the source channel and writes to this channel.  Many
   * operating systems can transfer bytes directly from the source channel
   * into the filesystem cache without actually copying them.  
   *
   * @param  src
   *         The source channel
   *
   * @param  position
   *         The position within the file at which the transfer is to begin;
   *         must be non-negative
   *
   * @param  count
   *         The maximum number of bytes to be transferred; must be
   *         non-negative
   *
   * @return  The number of bytes, possibly zero,
   *          that were actually transferred
   *
   * @throws IllegalArgumentException
   *         If the preconditions on the parameters do not hold
   *
   * @throws  NonReadableChannelException
   *          If the source channel was not opened for reading
   *
   * @throws  NonWritableChannelException
   *          If this channel was not opened for writing
   *
   * @throws  ClosedChannelException
   *          If either this channel or the source channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes either channel
   *          while the transfer is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread while the
   *          transfer is in progress, thereby closing both channels and
   *          setting the current thread's interrupt status
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  transferFrom(src: ReadableByteChannel, position: number, count: number): number;
  /**
   * Reads a sequence of bytes from this channel into the given buffer,
   * starting at the given file position.
   *
   *  This method works in the same manner as the {@link
   * #read(ByteBuffer)} method, except that bytes are read starting at the
   * given file position rather than at the channel's current position.  This
   * method does not modify this channel's position.  If the given position
   * is greater than the file's current size then no bytes are read.  
   *
   * @param  dst
   *         The buffer into which bytes are to be transferred
   *
   * @param  position
   *         The file position at which the transfer is to begin;
   *         must be non-negative
   *
   * @return  The number of bytes read, possibly zero, or `-1` if the
   *          given position is greater than or equal to the file's current
   *          size
   *
   * @throws  IllegalArgumentException
   *          If the position is negative or the buffer is read-only
   *
   * @throws  NonReadableChannelException
   *          If this channel was not opened for reading
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the read operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the read operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  read(dst: ByteBuffer, position: number): number;
  /**
   * Writes a sequence of bytes to this channel from the given buffer,
   * starting at the given file position.
   *
   *  This method works in the same manner as the {@link
   * #write(ByteBuffer)} method, except that bytes are written starting at
   * the given file position rather than at the channel's current position.
   * This method does not modify this channel's position.  If the given
   * position is greater than the file's current size then the file will be
   * grown to accommodate the new bytes; the values of any bytes between the
   * previous end-of-file and the newly-written bytes are unspecified.  
   *
   * @param  src
   *         The buffer from which bytes are to be transferred
   *
   * @param  position
   *         The file position at which the transfer is to begin;
   *         must be non-negative
   *
   * @return  The number of bytes written, possibly zero
   *
   * @throws  IllegalArgumentException
   *          If the position is negative
   *
   * @throws  NonWritableChannelException
   *          If this channel was not opened for writing
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the write operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the write operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  write(src: ByteBuffer, position: number): number;
  /**
   * Maps a region of this channel's file directly into memory.
   *
   *  The `mode` parameter specifies how the region of the file is
   * mapped and may be one of the following modes:
   *
   * 
   *
   *    Read-only: Any attempt to modify the resulting buffer
   *   will cause a {@link java.nio.ReadOnlyBufferException} to be thrown.
   *   ({@link MapMode#READ_ONLY MapMode.READ_ONLY}) 
   *
   *    Read/write: Changes made to the resulting buffer will
   *   eventually be propagated to the file; they may or may not be made
   *   visible to other programs that have mapped the same file.  ({@link
   *   MapMode#READ_WRITE MapMode.READ_WRITE}) 
   *
   *    Private: Changes made to the resulting buffer will not
   *   be propagated to the file and will not be visible to other programs
   *   that have mapped the same file; instead, they will cause private
   *   copies of the modified portions of the buffer to be created.  ({@link
   *   MapMode#PRIVATE MapMode.PRIVATE}) 
   *
   * 
   *
   *  An implementation may support additional map modes.
   *
   *  For a read-only mapping, this channel must have been opened for
   * reading; for a read/write or private mapping, this channel must have
   * been opened for both reading and writing.
   *
   *  The {@link MappedByteBuffer mapped byte buffer}
   * returned by this method will have a position of zero and a limit and
   * capacity of `size`; its mark will be undefined.  The buffer and
   * the mapping that it represents will remain valid until the buffer itself
   * is garbage-collected.
   *
   *  A mapping, once established, is not dependent upon the file channel
   * that was used to create it.  Closing the channel, in particular, has no
   * effect upon the validity of the mapping.
   *
   *  Many of the details of memory-mapped files are inherently dependent
   * upon the underlying operating system and are therefore unspecified.  The
   * behavior of this method when the requested region is not completely
   * contained within this channel's file is unspecified.  Whether changes
   * made to the content or size of the underlying file, by this program or
   * another, are propagated to the buffer is unspecified.  The rate at which
   * changes to the buffer are propagated to the file is unspecified.
   *
   *  For most operating systems, mapping a file into memory is more
   * expensive than reading or writing a few tens of kilobytes of data via
   * the usual {@link #read read} and {@link #write write} methods.  From the
   * standpoint of performance it is generally only worth mapping relatively
   * large files into memory.  
   *
   * @param  mode
   *         One of the constants {@link MapMode#READ_ONLY READ_ONLY}, {@link
   *         MapMode#READ_WRITE READ_WRITE}, or {@link MapMode#PRIVATE
   *         PRIVATE} defined in the {@link MapMode} class, according to
   *         whether the file is to be mapped read-only, read/write, or
   *         privately (copy-on-write), respectively, or an implementation
   *         specific map mode
   *
   * @param  position
   *         The position within the file at which the mapped region
   *         is to start; must be non-negative
   *
   * @param  size
   *         The size of the region to be mapped; must be non-negative and
   *         no greater than {@link java.lang.Integer#MAX_VALUE}
   *
   * @return  The mapped byte buffer
   *
   * @throws NonReadableChannelException
   *         If the `mode` is {@link MapMode#READ_ONLY READ_ONLY} or
   *         an implementation specific map mode requiring read access
   *         but this channel was not opened for reading
   *
   * @throws NonWritableChannelException
   *         If the `mode` is {@link MapMode#READ_WRITE READ_WRITE}.
   *         {@link MapMode#PRIVATE PRIVATE} or an implementation specific
   *         map mode requiring write access but this channel was not
   *         opened for both reading and writing
   *
   * @throws IllegalArgumentException
   *         If the preconditions on the parameters do not hold
   *
   * @throws UnsupportedOperationException
   *         If an unsupported map mode is specified
   *
   * @throws IOException
   *         If some other I/O error occurs
   *
   * @see java.nio.channels.FileChannel.MapMode
   * @see java.nio.MappedByteBuffer
  */
  map(mode: MapMode, position: number, size: number): MappedByteBuffer;
  /**
   * Acquires a lock on the given region of this channel's file.
   *
   *  An invocation of this method will block until the region can be
   * locked, this channel is closed, or the invoking thread is interrupted,
   * whichever comes first.
   *
   *  If this channel is closed by another thread during an invocation of
   * this method then an {@link AsynchronousCloseException} will be thrown.
   *
   *  If the invoking thread is interrupted while waiting to acquire the
   * lock then its interrupt status will be set and a {@link
   * FileLockInterruptionException} will be thrown.  If the invoker's
   * interrupt status is set when this method is invoked then that exception
   * will be thrown immediately; the thread's interrupt status will not be
   * changed.
   *
   *  The region specified by the `position` and `size`
   * parameters need not be contained within, or even overlap, the actual
   * underlying file.  Lock regions are fixed in size; if a locked region
   * initially contains the end of the file and the file grows beyond the
   * region then the new portion of the file will not be covered by the lock.
   * If a file is expected to grow in size and a lock on the entire file is
   * required then a region starting at zero, and no smaller than the
   * expected maximum size of the file, should be locked.  The zero-argument
   * {@link #lock()} method simply locks a region of size {@link
   * Long#MAX_VALUE}.
   *
   *  Some operating systems do not support shared locks, in which case a
   * request for a shared lock is automatically converted into a request for
   * an exclusive lock.  Whether the newly-acquired lock is shared or
   * exclusive may be tested by invoking the resulting lock object's {@link
   * FileLock#isShared() isShared} method.
   *
   *  File locks are held on behalf of the entire Java virtual machine.
   * They are not suitable for controlling access to a file by multiple
   * threads within the same virtual machine.  
   *
   * @param  position
   *         The position at which the locked region is to start; must be
   *         non-negative
   *
   * @param  size
   *         The size of the locked region; must be non-negative, and the sum
   *         `position` + `size` must be non-negative
   *
   * @param  shared
   *         `true` to request a shared lock, in which case this
   *         channel must be open for reading (and possibly writing);
   *         `false` to request an exclusive lock, in which case this
   *         channel must be open for writing (and possibly reading)
   *
   * @return  A lock object representing the newly-acquired lock
   *
   * @throws  IllegalArgumentException
   *          If the preconditions on the parameters do not hold
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel while the invoking
   *          thread is blocked in this method
   *
   * @throws  FileLockInterruptionException
   *          If the invoking thread is interrupted while blocked in this
   *          method
   *
   * @throws  OverlappingFileLockException
   *          If a lock that overlaps the requested region is already held by
   *          this Java virtual machine, or if another thread is already
   *          blocked in this method and is attempting to lock an overlapping
   *          region
   *
   * @throws  NonReadableChannelException
   *          If `shared` is `true` this channel was not
   *          opened for reading
   *
   * @throws  NonWritableChannelException
   *          If `shared` is `false` but this channel was not
   *          opened for writing
   *
   * @throws  IOException
   *          If some other I/O error occurs
   *
   * @see     #lock()
   * @see     #tryLock()
   * @see     #tryLock(long,long,boolean)
  */
  lock(position: number, size: number, shared: boolean): FileLock;
  /**
   * Acquires an exclusive lock on this channel's file.
   *
   *  An invocation of this method of the form `fc.lock()` behaves
   * in exactly the same way as the invocation
   *
   *      *     fc.{@link #lock(long,long,boolean) lock}(0L, Long.MAX_VALUE, false) 
   *
   * @return  A lock object representing the newly-acquired lock
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel while the invoking
   *          thread is blocked in this method
   *
   * @throws  FileLockInterruptionException
   *          If the invoking thread is interrupted while blocked in this
   *          method
   *
   * @throws  OverlappingFileLockException
   *          If a lock that overlaps the requested region is already held by
   *          this Java virtual machine, or if another thread is already
   *          blocked in this method and is attempting to lock an overlapping
   *          region of the same file
   *
   * @throws  NonWritableChannelException
   *          If this channel was not opened for writing
   *
   * @throws  IOException
   *          If some other I/O error occurs
   *
   * @see     #lock(long,long,boolean)
   * @see     #tryLock()
   * @see     #tryLock(long,long,boolean)
  */
  lock(): FileLock;
  /**
   * Attempts to acquire a lock on the given region of this channel's file.
   *
   *  This method does not block.  An invocation always returns
   * immediately, either having acquired a lock on the requested region or
   * having failed to do so.  If it fails to acquire a lock because an
   * overlapping lock is held by another program then it returns
   * `null`.  If it fails to acquire a lock for any other reason then
   * an appropriate exception is thrown.
   *
   *  The region specified by the `position` and `size`
   * parameters need not be contained within, or even overlap, the actual
   * underlying file.  Lock regions are fixed in size; if a locked region
   * initially contains the end of the file and the file grows beyond the
   * region then the new portion of the file will not be covered by the lock.
   * If a file is expected to grow in size and a lock on the entire file is
   * required then a region starting at zero, and no smaller than the
   * expected maximum size of the file, should be locked.  The zero-argument
   * {@link #tryLock()} method simply locks a region of size {@link
   * Long#MAX_VALUE}.
   *
   *  Some operating systems do not support shared locks, in which case a
   * request for a shared lock is automatically converted into a request for
   * an exclusive lock.  Whether the newly-acquired lock is shared or
   * exclusive may be tested by invoking the resulting lock object's {@link
   * FileLock#isShared() isShared} method.
   *
   *  File locks are held on behalf of the entire Java virtual machine.
   * They are not suitable for controlling access to a file by multiple
   * threads within the same virtual machine.  
   *
   * @param  position
   *         The position at which the locked region is to start; must be
   *         non-negative
   *
   * @param  size
   *         The size of the locked region; must be non-negative, and the sum
   *         `position` + `size` must be non-negative
   *
   * @param  shared
   *         `true` to request a shared lock,
   *         `false` to request an exclusive lock
   *
   * @return  A lock object representing the newly-acquired lock,
   *          or `null` if the lock could not be acquired
   *          because another program holds an overlapping lock
   *
   * @throws  IllegalArgumentException
   *          If the preconditions on the parameters do not hold
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  OverlappingFileLockException
   *          If a lock that overlaps the requested region is already held by
   *          this Java virtual machine, or if another thread is already
   *          blocked in this method and is attempting to lock an overlapping
   *          region of the same file
   *
   * @throws  IOException
   *          If some other I/O error occurs
   *
   * @see     #lock()
   * @see     #lock(long,long,boolean)
   * @see     #tryLock()
  */
  tryLock(position: number, size: number, shared: boolean): FileLock;
  /**
   * Attempts to acquire an exclusive lock on this channel's file.
   *
   *  An invocation of this method of the form `fc.tryLock()`
   * behaves in exactly the same way as the invocation
   *
   *      *     fc.{@link #tryLock(long,long,boolean) tryLock}(0L, Long.MAX_VALUE, false) 
   *
   * @return  A lock object representing the newly-acquired lock,
   *          or `null` if the lock could not be acquired
   *          because another program holds an overlapping lock
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  OverlappingFileLockException
   *          If a lock that overlaps the requested region is already held by
   *          this Java virtual machine, or if another thread is already
   *          blocked in this method and is attempting to lock an overlapping
   *          region
   *
   * @throws  IOException
   *          If some other I/O error occurs
   *
   * @see     #lock()
   * @see     #lock(long,long,boolean)
   * @see     #tryLock(long,long,boolean)
  */
  tryLock(): FileLock;
}
export interface FileChannel extends AbstractInterruptibleChannel, SeekableByteChannel, GatheringByteChannel, ScatteringByteChannel {}
export class OverlappingFileLockException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class NotYetBoundException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class NonReadableChannelException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class UnresolvedAddressException extends IllegalArgumentException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class CompletionHandler<V, A> {
  /**
   * Invoked when an operation has completed.
   *
   * @param   result
   *          The result of the I/O operation.
   * @param   attachment
   *          The object attached to the I/O operation when it was initiated.
  */
  completed(result: V, attachment: A): void;
  /**
   * Invoked when an operation fails.
   *
   * @param   exc
   *          The exception to indicate why the I/O operation failed
   * @param   attachment
   *          The object attached to the I/O operation when it was initiated.
  */
  failed(exc: Throwable, attachment: A): void;
}
export class FileLockInterruptionException extends IOException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class NotYetConnectedException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class NetworkChannel extends Channel {
  /**
   * Binds the channel's socket to a local address.
   *
   *  This method is used to establish an association between the socket and
   * a local address. Once an association is established then the socket remains
   * bound until the channel is closed. If the `local` parameter has the
   * value `null` then the socket will be bound to an address that is
   * assigned automatically.
   *
   * @param   local
   *          The address to bind the socket, or `null` to bind the socket
   *          to an automatically assigned socket address
   *
   * @return  This channel
   *
   * @throws  AlreadyBoundException
   *          If the socket is already bound
   * @throws  UnsupportedAddressTypeException
   *          If the type of the given address is not supported
   * @throws  ClosedChannelException
   *          If the channel is closed
   * @throws  IOException
   *          If some other I/O error occurs
   * @throws  SecurityException
   *          If a security manager is installed and it denies an unspecified
   *          permission. An implementation of this interface should specify
   *          any required permissions.
   *
   * @see #getLocalAddress
  */
  bind(local: SocketAddress): NetworkChannel;
  /**
   * Returns the socket address that this channel's socket is bound to.
   *
   *  Where the channel is {@link #bind bound} to an Internet Protocol
   * socket address then the return value from this method is of type {@link
   * java.net.InetSocketAddress}.
   *
   * @return  The socket address that the socket is bound to, or `null`
   *          if the channel's socket is not bound
   *
   * @throws  ClosedChannelException
   *          If the channel is closed
   * @throws  IOException
   *          If an I/O error occurs
  */
  getLocalAddress(): SocketAddress;
  /**
   * Sets the value of a socket option.
   *
   * @param   
   *          The type of the socket option value
   * @param   name
   *          The socket option
   * @param   value
   *          The value of the socket option. A value of `null` may be
   *          a valid value for some socket options.
   *
   * @return  This channel
   *
   * @throws  UnsupportedOperationException
   *          If the socket option is not supported by this channel
   * @throws  IllegalArgumentException
   *          If the value is not a valid value for this socket option
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @see java.net.StandardSocketOptions
  */
  setOption<T>(name: SocketOption<T>, value: T): NetworkChannel;
  /**
   * Returns the value of a socket option.
   *
   * @param   
   *          The type of the socket option value
   * @param   name
   *          The socket option
   *
   * @return  The value of the socket option. A value of `null` may be
   *          a valid value for some socket options.
   *
   * @throws  UnsupportedOperationException
   *          If the socket option is not supported by this channel
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @see java.net.StandardSocketOptions
  */
  getOption<T>(name: SocketOption<T>): T;
  /**
   * Returns a set of the socket options supported by this channel.
   *
   *  This method will continue to return the set of options even after the
   * channel has been closed.
   *
   * @return  A set of the socket options supported by this channel
  */
  supportedOptions(): Set<SocketOption<any>>;
}
export class MulticastChannel extends NetworkChannel {
  /**
   * Closes this channel.
   *
   *  If the channel is a member of a multicast group then the membership
   * is {@link MembershipKey#drop dropped}. Upon return, the {@link
   * MembershipKey membership-key} will be {@link MembershipKey#isValid
   * invalid}.
   *
   *  This method otherwise behaves exactly as specified by the {@link
   * Channel} interface.
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  close(): void;
  /**
   * Joins a multicast group to begin receiving all datagrams sent to the group,
   * returning a membership key.
   *
   *  If this channel is currently a member of the group on the given
   * interface to receive all datagrams then the membership key, representing
   * that membership, is returned. Otherwise this channel joins the group and
   * the resulting new membership key is returned. The resulting membership key
   * is not {@link MembershipKey#sourceAddress source-specific}.
   *
   *  A multicast channel may join several multicast groups, including
   * the same group on more than one interface. An implementation may impose a
   * limit on the number of groups that may be joined at the same time.
   *
   * @param   group
   *          The multicast address to join
   * @param   interf
   *          The network interface on which to join the group
   *
   * @return  The membership key
   *
   * @throws  IllegalArgumentException
   *          If the group parameter is not a {@link InetAddress#isMulticastAddress
   *          multicast} address, or the group parameter is an address type
   *          that is not supported by this channel
   * @throws  IllegalStateException
   *          If the channel already has source-specific membership of the
   *          group on the interface
   * @throws  UnsupportedOperationException
   *          If the channel's socket is not an Internet Protocol socket, or
   *          the platform does not support multicasting
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  SecurityException
   *          If a security manager is set, and its
   *          {@link SecurityManager#checkMulticast(InetAddress) checkMulticast}
   *          method denies access to the multicast group
  */
  join(group: InetAddress, interf: NetworkInterface): MembershipKey;
  /**
   * Joins a multicast group to begin receiving datagrams sent to the group
   * from a given source address.
   *
   *  If this channel is currently a member of the group on the given
   * interface to receive datagrams from the given source address then the
   * membership key, representing that membership, is returned. Otherwise this
   * channel joins the group and the resulting new membership key is returned.
   * The resulting membership key is {@link MembershipKey#sourceAddress
   * source-specific}.
   *
   *  Membership is cumulative and this method may be invoked
   * again with the same group and interface to allow receiving datagrams sent
   * by other source addresses to the group.
   *
   * @param   group
   *          The multicast address to join
   * @param   interf
   *          The network interface on which to join the group
   * @param   source
   *          The source address
   *
   * @return  The membership key
   *
   * @throws  IllegalArgumentException
   *          If the group parameter is not a {@link
   *          InetAddress#isMulticastAddress multicast} address, the
   *          source parameter is not a unicast address, the group
   *          parameter is an address type that is not supported by this channel,
   *          or the source parameter is not the same address type as the group
   * @throws  IllegalStateException
   *          If the channel is currently a member of the group on the given
   *          interface to receive all datagrams
   * @throws  UnsupportedOperationException
   *          If the channel's socket is not an Internet Protocol socket, or
   *          source filtering is not supported, or the platform does not
   *          support multicasting
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  SecurityException
   *          If a security manager is set, and its
   *          {@link SecurityManager#checkMulticast(InetAddress) checkMulticast}
   *          method denies access to the multicast group
  */
  join(group: InetAddress, interf: NetworkInterface, source: InetAddress): MembershipKey;
}
export class WritePendingException extends IllegalStateException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class ServerSocketChannel extends AbstractSelectableChannel {
  /**
   * Opens a server-socket channel for an Internet protocol socket.
   *
   *  The new channel is created by invoking the {@link
   * java.nio.channels.spi.SelectorProvider#openServerSocketChannel
   * openServerSocketChannel} method of the system-wide default {@link
   * java.nio.channels.spi.SelectorProvider} object.
   *
   *  The new channel's socket is initially unbound; it must be bound to a
   * specific address via one of its socket's {@link
   * java.net.ServerSocket#bind(SocketAddress) bind} methods before
   * connections can be accepted.  
   *
   * @return  A new socket channel
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @see     
   *          java.net.preferIPv4Stack system property
  */
  static open(): ServerSocketChannel;
  /**
   * Opens a server-socket channel. The `family` parameter specifies the
   * {@link ProtocolFamily protocol family} of the channel's socket.
   *
   *  The new channel is created by invoking the {@link
   * java.nio.channels.spi.SelectorProvider#openServerSocketChannel(ProtocolFamily)
   * openServerSocketChannel(ProtocolFamily)} method of the system-wide default {@link
   * java.nio.channels.spi.SelectorProvider} object. 
   *
   * @param   family
   *          The protocol family
   *
   * @return  A new socket channel
   *
   * @throws  UnsupportedOperationException
   *          If the specified protocol family is not supported. For example,
   *          suppose the parameter is specified as {@link
   *          java.net.StandardProtocolFamily#INET6 StandardProtocolFamily.INET6}
   *          but IPv6 is not enabled on the platform.
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @see     
   *          java.net.preferIPv4Stack system property
   *
   * @since 15
  */
  static open(family: ProtocolFamily): ServerSocketChannel;
  /**
   * Returns an operation set identifying this channel's supported
   * operations.
   *
   *  Server-socket channels only support the accepting of new
   * connections, so this method returns {@link SelectionKey#OP_ACCEPT}.
   * 
   *
   * @return  The valid-operation set
  */
  validOps(): number;
  /**
   * Binds the channel's socket to a local address and configures the socket
   * to listen for connections.
   *
   *  An invocation of this method is equivalent to the following:
   *      * bind(local, 0);
   * 
   *
   * @param   local
   *          The local address to bind the socket, or `null` to bind
   *          to an automatically assigned socket address
   *
   * @return  This channel
   *
   * @throws  AlreadyBoundException               {@inheritDoc}
   * @throws  UnsupportedAddressTypeException     {@inheritDoc}
   * @throws  ClosedChannelException              {@inheritDoc}
   * @throws  IOException                         {@inheritDoc}
   * @throws  SecurityException
   *          If a security manager has been installed and it denies the
   *          operation
   *
   * @since 1.7
  */
  bind(local: SocketAddress): ServerSocketChannel;
  /**
   * Binds the channel's socket to a local address and configures the socket to
   * listen for connections.
   *
   *  This method is used to establish an association between the socket and
   * a local address. For Internet protocol sockets, once an association
   * is established then the socket remains bound until the channel is closed.
   *
   *  The `backlog` parameter is the maximum number of pending
   * connections on the socket. Its exact semantics are implementation specific.
   * In particular, an implementation may impose a maximum length or may choose
   * to ignore the parameter altogther. If the `backlog` parameter has
   * the value `0`, or a negative value, then an implementation specific
   * default is used.
   *
   * @apiNote
   * Binding a server socket channel for a Unix Domain socket, creates a
   * file corresponding to the file path in the {@link UnixDomainSocketAddress}.
   * This file persists after the channel is closed, and must be removed before
   * another socket can bind to the same name. Binding to a `null` address
   * causes the socket to be automatically bound to some unique file
   * in a system temporary location. The associated socket file also persists
   * after the channel is closed. Its name can be obtained from the channel's
   * local socket address.
   *
   * @implNote
   * Each platform enforces an implementation specific, maximum length for the
   * name of a Unix Domain socket. This limitation is enforced when a
   * channel is bound. The maximum length is typically close to and generally
   * not less than 100 bytes. This limitation also applies to automatically
   * bound server socket channels. See the Unix domain
   * networking
   * properties that can be used to select the temporary directory where
   * these sockets are created.
   *
   * @param   local
   *          The address to bind the socket, or `null` to bind to
   *          an automatically assigned socket address
   * @param   backlog
   *          The maximum number of pending connections
   *
   * @return  This channel
   *
   * @throws  AlreadyBoundException
   *          If the socket is already bound
   * @throws  UnsupportedAddressTypeException
   *          If the type of the given address is not supported
   * @throws  ClosedChannelException
   *          If this channel is closed
   * @throws  IOException
   *          If some other I/O error occurs
   * @throws  SecurityException
   *          If a security manager has been installed and its {@link
   *          SecurityManager#checkListen checkListen} method denies
   *          the operation for an Internet protocol socket address,
   *          or for a Unix domain socket address if it denies
   *          {@link NetPermission}`"accessUnixDomainSocket")`.
   *
   * @since 1.7
  */
  bind(local: SocketAddress, backlog: number): ServerSocketChannel;
  /**
   * @throws  UnsupportedOperationException           {@inheritDoc}
   * @throws  IllegalArgumentException                {@inheritDoc}
   * @throws  ClosedChannelException                  {@inheritDoc}
   * @throws  IOException                             {@inheritDoc}
   *
   * @since 1.7
  */
  setOption<T>(name: SocketOption<T>, value: T): ServerSocketChannel;
  /**
   * Retrieves a server socket associated with this channel.
   *
   *  The returned object will not declare any public methods that are not
   * declared in the {@link java.net.ServerSocket} class.  
   *
   * @return  A server socket associated with this channel
   *
   * @throws  UnsupportedOperationException
   *          If the channel's socket is not an Internet protocol socket
  */
  socket(): ServerSocket;
  /**
   * Accepts a connection made to this channel's socket.
   *
   *  If this channel is in non-blocking mode then this method will
   * immediately return `null` if there are no pending connections.
   * Otherwise it will block indefinitely until a new connection is available
   * or an I/O error occurs.
   *
   *  The socket channel returned by this method, if any, will be in
   * blocking mode regardless of the blocking mode of this channel.
   *
   *  If bound to an Internet protocol socket address, this method
   * performs exactly the same security checks as the {@link
   * java.net.ServerSocket#accept accept} method of the {@link java.net.ServerSocket}
   * class.  That is, if a security manager has been installed then for each
   * new connection this method verifies that the address and port number
   * of the connection's remote endpoint are permitted by the security
   * manager's {@link java.lang.SecurityManager#checkAccept checkAccept}
   * method. If bound to a Unix Domain socket address, this method checks
   * {@link NetPermission}`("accessUnixDomainSocket")`.
   *
   * @return  The socket channel for the new connection,
   *          or `null` if this channel is in non-blocking mode
   *          and no connection is available to be accepted
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  AsynchronousCloseException
   *          If another thread closes this channel
   *          while the accept operation is in progress
   *
   * @throws  ClosedByInterruptException
   *          If another thread interrupts the current thread
   *          while the accept operation is in progress, thereby
   *          closing the channel and setting the current thread's
   *          interrupt status
   *
   * @throws  NotYetBoundException
   *          If this channel's socket has not yet been bound
   *
   * @throws  SecurityException
   *          If a security manager has been installed and this
   *          channel is bound to an {@link InetSocketAddress}
   *          and the security manager denies access to the remote endpoint
   *          of the new connection, or if this channel is bound to a
   *          {@link UnixDomainSocketAddress} and the security manager
   *          denies {@link NetPermission}`("accessUnixDomainSocket")`
   *
   * @throws  IOException
   *          If some other I/O error occurs
  */
  accept(): SocketChannel;
  /**
   * {@inheritDoc}
   *
   * If there is a security manager set, its `checkConnect` method is
   * called with the local address and `-1` as its arguments to see
   * if the operation is allowed. If the operation is not allowed,
   * a `SocketAddress` representing the
   * {@link java.net.InetAddress#getLoopbackAddress loopback} address and the
   * local port of the channel's socket is returned.
   *
   *  Where the channel is bound to a Unix Domain socket address, the socket
   * address is a {@link UnixDomainSocketAddress}. If there is a security manager
   * set, its {@link SecurityManager#checkPermission(java.security.Permission)
   * checkPermission} method is called with {@link NetPermission}`     * ("accessUnixDomainSocket")`. If the operation is not allowed an unnamed
   * {@link UnixDomainSocketAddress} is returned.
   *
   * @return  The `SocketAddress` that the socket is bound to, or the
   *          `SocketAddress` representing the loopback address or empty
   *          path if denied by the security manager, or `null` if the
   *          channel's socket is not bound
   *
   * @throws  ClosedChannelException     {@inheritDoc}
   * @throws  IOException                {@inheritDoc}
  */
  getLocalAddress(): SocketAddress;
}
export interface ServerSocketChannel extends AbstractSelectableChannel, NetworkChannel {}

}
declare module 'java.nio.charset' {
import { WeakReference } from 'java.lang.ref';
import { Locale, Set, SortedMap } from 'java.util';
import { Comparable, ThreadLocal, CharSequence, Error, IllegalArgumentException, Exception } from 'java.lang';
import { IOException } from 'java.io';
import { CharBuffer, ByteBuffer } from 'java.nio';
import { CharsetProvider } from 'java.nio.charset.spi';
export class CharsetDecoder {
  /**
   * Returns the charset that created this decoder.
   *
   * @return  This decoder's charset
  */
  charset(): Charset;
  /**
   * Returns this decoder's replacement value.
   *
   * @return  This decoder's current replacement,
   *          which is never `null` and is never empty
  */
  replacement(): string;
  /**
   * Changes this decoder's replacement value.
   *
   *  This method invokes the {@link #implReplaceWith implReplaceWith}
   * method, passing the new replacement, after checking that the new
   * replacement is acceptable.  
   *
   * @param  newReplacement  The new replacement; must not be
   *         `null`, must have non-zero length,
   *         and must not be longer than the value returned by the
   *         {@link #maxCharsPerByte() maxCharsPerByte} method
   *
   * @return  This decoder
   *
   * @throws  IllegalArgumentException
   *          If the preconditions on the parameter do not hold
  */
  replaceWith(newReplacement: string): CharsetDecoder;
  /**
   * Returns this decoder's current action for malformed-input errors.
   *
   * @return The current malformed-input action, which is never `null`
  */
  malformedInputAction(): CodingErrorAction;
  /**
   * Changes this decoder's action for malformed-input errors.
   *
   *  This method invokes the {@link #implOnMalformedInput
   * implOnMalformedInput} method, passing the new action.  
   *
   * @param  newAction  The new action; must not be `null`
   *
   * @return  This decoder
   *
   * @throws IllegalArgumentException
   *         If the precondition on the parameter does not hold
  */
  onMalformedInput(newAction: CodingErrorAction): CharsetDecoder;
  /**
   * Returns this decoder's current action for unmappable-character errors.
   *
   * @return The current unmappable-character action, which is never
   *         `null`
  */
  unmappableCharacterAction(): CodingErrorAction;
  /**
   * Changes this decoder's action for unmappable-character errors.
   *
   *  This method invokes the {@link #implOnUnmappableCharacter
   * implOnUnmappableCharacter} method, passing the new action.  
   *
   * @param  newAction  The new action; must not be `null`
   *
   * @return  This decoder
   *
   * @throws IllegalArgumentException
   *         If the precondition on the parameter does not hold
  */
  onUnmappableCharacter(newAction: CodingErrorAction): CharsetDecoder;
  /**
   * Returns the average number of characters that will be produced for each
   * byte of input.  This heuristic value may be used to estimate the size
   * of the output buffer required for a given input sequence.
   *
   * @return  The average number of characters produced
   *          per byte of input
  */
  averageCharsPerByte(): number;
  /**
   * Returns the maximum number of characters that will be produced for each
   * byte of input.  This value may be used to compute the worst-case size
   * of the output buffer required for a given input sequence. This value
   * accounts for any necessary content-independent prefix or suffix
   * characters.
   *
   * @return  The maximum number of characters that will be produced per
   *          byte of input
  */
  maxCharsPerByte(): number;
  /**
   * Decodes as many bytes as possible from the given input buffer,
   * writing the results to the given output buffer.
   *
   *  The buffers are read from, and written to, starting at their current
   * positions.  At most {@link Buffer#remaining in.remaining()} bytes
   * will be read and at most {@link Buffer#remaining out.remaining()}
   * characters will be written.  The buffers' positions will be advanced to
   * reflect the bytes read and the characters written, but their marks and
   * limits will not be modified.
   *
   *  In addition to reading bytes from the input buffer and writing
   * characters to the output buffer, this method returns a {@link CoderResult}
   * object to describe its reason for termination:
   *
   * 
   *
   *    {@link CoderResult#UNDERFLOW} indicates that as much of the
   *   input buffer as possible has been decoded.  If there is no further
   *   input then the invoker can proceed to the next step of the
   *   decoding operation.  Otherwise this method
   *   should be invoked again with further input.  
   *
   *    {@link CoderResult#OVERFLOW} indicates that there is
   *   insufficient space in the output buffer to decode any more bytes.
   *   This method should be invoked again with an output buffer that has
   *   more {@linkplain Buffer#remaining remaining} characters. This is
   *   typically done by draining any decoded characters from the output
   *   buffer.  
   *
   *    A {@linkplain CoderResult#malformedForLength
   *   malformed-input} result indicates that a malformed-input
   *   error has been detected.  The malformed bytes begin at the input
   *   buffer's (possibly incremented) position; the number of malformed
   *   bytes may be determined by invoking the result object's {@link
   *   CoderResult#length() length} method.  This case applies only if the
   *   {@linkplain #onMalformedInput malformed action} of this decoder
   *   is {@link CodingErrorAction#REPORT}; otherwise the malformed input
   *   will be ignored or replaced, as requested.  
   *
   *    An {@linkplain CoderResult#unmappableForLength
   *   unmappable-character} result indicates that an
   *   unmappable-character error has been detected.  The bytes that
   *   decode the unmappable character begin at the input buffer's (possibly
   *   incremented) position; the number of such bytes may be determined
   *   by invoking the result object's {@link CoderResult#length() length}
   *   method.  This case applies only if the {@linkplain #onUnmappableCharacter
   *   unmappable action} of this decoder is {@link
   *   CodingErrorAction#REPORT}; otherwise the unmappable character will be
   *   ignored or replaced, as requested.  
   *
   * 
   *
   * In any case, if this method is to be reinvoked in the same decoding
   * operation then care should be taken to preserve any bytes remaining
   * in the input buffer so that they are available to the next invocation.
   *
   *  The `endOfInput` parameter advises this method as to whether
   * the invoker can provide further input beyond that contained in the given
   * input buffer.  If there is a possibility of providing additional input
   * then the invoker should pass `false` for this parameter; if there
   * is no possibility of providing further input then the invoker should
   * pass `true`.  It is not erroneous, and in fact it is quite
   * common, to pass `false` in one invocation and later discover that
   * no further input was actually available.  It is critical, however, that
   * the final invocation of this method in a sequence of invocations always
   * pass `true` so that any remaining undecoded input will be treated
   * as being malformed.
   *
   *  This method works by invoking the {@link #decodeLoop decodeLoop}
   * method, interpreting its results, handling error conditions, and
   * reinvoking it as necessary.  
   *
   *
   * @param  in
   *         The input byte buffer
   *
   * @param  out
   *         The output character buffer
   *
   * @param  endOfInput
   *         `true` if, and only if, the invoker can provide no
   *         additional input bytes beyond those in the given buffer
   *
   * @return  A coder-result object describing the reason for termination
   *
   * @throws  IllegalStateException
   *          If a decoding operation is already in progress and the previous
   *          step was an invocation neither of the {@link #reset reset}
   *          method, nor of this method with a value of `false` for
   *          the `endOfInput` parameter, nor of this method with a
   *          value of `true` for the `endOfInput` parameter
   *          but a return value indicating an incomplete decoding operation
   *
   * @throws  CoderMalfunctionError
   *          If an invocation of the decodeLoop method threw
   *          an unexpected exception
  */
  decode(in_: ByteBuffer, out: CharBuffer, endOfInput: boolean): CoderResult;
  /**
   * Flushes this decoder.
   *
   *  Some decoders maintain internal state and may need to write some
   * final characters to the output buffer once the overall input sequence has
   * been read.
   *
   *  Any additional output is written to the output buffer beginning at
   * its current position.  At most {@link Buffer#remaining out.remaining()}
   * characters will be written.  The buffer's position will be advanced
   * appropriately, but its mark and limit will not be modified.
   *
   *  If this method completes successfully then it returns {@link
   * CoderResult#UNDERFLOW}.  If there is insufficient room in the output
   * buffer then it returns {@link CoderResult#OVERFLOW}.  If this happens
   * then this method must be invoked again, with an output buffer that has
   * more room, in order to complete the current decoding
   * operation.
   *
   *  If this decoder has already been flushed then invoking this method
   * has no effect.
   *
   *  This method invokes the {@link #implFlush implFlush} method to
   * perform the actual flushing operation.  
   *
   * @param  out
   *         The output character buffer
   *
   * @return  A coder-result object, either {@link CoderResult#UNDERFLOW} or
   *          {@link CoderResult#OVERFLOW}
   *
   * @throws  IllegalStateException
   *          If the previous step of the current decoding operation was an
   *          invocation neither of the {@link #flush flush} method nor of
   *          the three-argument {@link
   *          #decode(ByteBuffer,CharBuffer,boolean) decode} method
   *          with a value of `true` for the `endOfInput`
   *          parameter
  */
  flush(out: CharBuffer): CoderResult;
  /**
   * Resets this decoder, clearing any internal state.
   *
   *  This method resets charset-independent state and also invokes the
   * {@link #implReset() implReset} method in order to perform any
   * charset-specific reset actions.  
   *
   * @return  This decoder
   *
  */
  reset(): CharsetDecoder;
  /**
   * Convenience method that decodes the remaining content of a single input
   * byte buffer into a newly-allocated character buffer.
   *
   *  This method implements an entire decoding
   * operation; that is, it resets this decoder, then it decodes the
   * bytes in the given byte buffer, and finally it flushes this
   * decoder.  This method should therefore not be invoked if a decoding
   * operation is already in progress.  
   *
   * @param  in
   *         The input byte buffer
   *
   * @return A newly-allocated character buffer containing the result of the
   *         decoding operation.  The buffer's position will be zero and its
   *         limit will follow the last character written.
   *
   * @throws  IllegalStateException
   *          If a decoding operation is already in progress
   *
   * @throws  MalformedInputException
   *          If the byte sequence starting at the input buffer's current
   *          position is not legal for this charset and the current malformed-input action
   *          is {@link CodingErrorAction#REPORT}
   *
   * @throws  UnmappableCharacterException
   *          If the byte sequence starting at the input buffer's current
   *          position cannot be mapped to an equivalent character sequence and
   *          the current unmappable-character action is {@link
   *          CodingErrorAction#REPORT}
  */
  decode(in_: ByteBuffer): CharBuffer;
  /**
   * Tells whether or not this decoder implements an auto-detecting charset.
   *
   *  The default implementation of this method always returns
   * `false`; it should be overridden by auto-detecting decoders to
   * return `true`.  
   *
   * @return  `true` if, and only if, this decoder implements an
   *          auto-detecting charset
  */
  isAutoDetecting(): boolean;
  /**
   * Tells whether or not this decoder has yet detected a
   * charset  (optional operation).
   *
   *  If this decoder implements an auto-detecting charset then at a
   * single point during a decoding operation this method may start returning
   * `true` to indicate that a specific charset has been detected in
   * the input byte sequence.  Once this occurs, the {@link #detectedCharset
   * detectedCharset} method may be invoked to retrieve the detected charset.
   *
   *  That this method returns `false` does not imply that no bytes
   * have yet been decoded.  Some auto-detecting decoders are capable of
   * decoding some, or even all, of an input byte sequence without fixing on
   * a particular charset.
   *
   *  The default implementation of this method always throws an {@link
   * UnsupportedOperationException}; it should be overridden by
   * auto-detecting decoders to return `true` once the input charset
   * has been determined.  
   *
   * @return  `true` if, and only if, this decoder has detected a
   *          specific charset
   *
   * @throws  UnsupportedOperationException
   *          If this decoder does not implement an auto-detecting charset
  */
  isCharsetDetected(): boolean;
  /**
   * Retrieves the charset that was detected by this
   * decoder  (optional operation).
   *
   *  If this decoder implements an auto-detecting charset then this
   * method returns the actual charset once it has been detected.  After that
   * point, this method returns the same value for the duration of the
   * current decoding operation.  If not enough input bytes have yet been
   * read to determine the actual charset then this method throws an {@link
   * IllegalStateException}.
   *
   *  The default implementation of this method always throws an {@link
   * UnsupportedOperationException}; it should be overridden by
   * auto-detecting decoders to return the appropriate value.  
   *
   * @return  The charset detected by this auto-detecting decoder,
   *          or `null` if the charset has not yet been determined
   *
   * @throws  IllegalStateException
   *          If insufficient bytes have been read to determine a charset
   *
   * @throws  UnsupportedOperationException
   *          If this decoder does not implement an auto-detecting charset
  */
  detectedCharset(): Charset;
}
export class CoderMalfunctionError extends Error {
  /**
   * Initializes an instance of this class.
   *
   * @param  cause
   *         The unexpected exception that was thrown
  */
  constructor(cause: Exception);
}
export class CharsetEncoder {
  /**
   * Returns the charset that created this encoder.
   *
   * @return  This encoder's charset
  */
  charset(): Charset;
  /**
   * Returns this encoder's replacement value.
   *
   * @return  This encoder's current replacement,
   *          which is never `null` and is never empty
  */
  replacement(): number[];
  /**
   * Changes this encoder's replacement value.
   *
   *  This method invokes the {@link #implReplaceWith implReplaceWith}
   * method, passing the new replacement, after checking that the new
   * replacement is acceptable.  
   *
   * @param  newReplacement  The new replacement; must not be
   *         `null`, must have non-zero length,
   *         must not be longer than the value returned by the
   *         {@link #maxBytesPerChar() maxBytesPerChar} method, and
   *         must be {@link #isLegalReplacement legal}
   *
   * @return  This encoder
   *
   * @throws  IllegalArgumentException
   *          If the preconditions on the parameter do not hold
  */
  replaceWith(newReplacement: number[]): CharsetEncoder;
  /**
   * Tells whether or not the given byte array is a legal replacement value
   * for this encoder.
   *
   *  A replacement is legal if, and only if, it is a legal sequence of
   * bytes in this encoder's charset; that is, it must be possible to decode
   * the replacement into one or more sixteen-bit Unicode characters.
   *
   *  The default implementation of this method is not very efficient; it
   * should generally be overridden to improve performance.  
   *
   * @param  repl  The byte array to be tested
   *
   * @return  `true` if, and only if, the given byte array
   *          is a legal replacement value for this encoder
  */
  isLegalReplacement(repl: number[]): boolean;
  /**
   * Returns this encoder's current action for malformed-input errors.
   *
   * @return The current malformed-input action, which is never `null`
  */
  malformedInputAction(): CodingErrorAction;
  /**
   * Changes this encoder's action for malformed-input errors.
   *
   *  This method invokes the {@link #implOnMalformedInput
   * implOnMalformedInput} method, passing the new action.  
   *
   * @param  newAction  The new action; must not be `null`
   *
   * @return  This encoder
   *
   * @throws IllegalArgumentException
   *         If the precondition on the parameter does not hold
  */
  onMalformedInput(newAction: CodingErrorAction): CharsetEncoder;
  /**
   * Returns this encoder's current action for unmappable-character errors.
   *
   * @return The current unmappable-character action, which is never
   *         `null`
  */
  unmappableCharacterAction(): CodingErrorAction;
  /**
   * Changes this encoder's action for unmappable-character errors.
   *
   *  This method invokes the {@link #implOnUnmappableCharacter
   * implOnUnmappableCharacter} method, passing the new action.  
   *
   * @param  newAction  The new action; must not be `null`
   *
   * @return  This encoder
   *
   * @throws IllegalArgumentException
   *         If the precondition on the parameter does not hold
  */
  onUnmappableCharacter(newAction: CodingErrorAction): CharsetEncoder;
  /**
   * Returns the average number of bytes that will be produced for each
   * character of input.  This heuristic value may be used to estimate the size
   * of the output buffer required for a given input sequence.
   *
   * @return  The average number of bytes produced
   *          per character of input
  */
  averageBytesPerChar(): number;
  /**
   * Returns the maximum number of bytes that will be produced for each
   * character of input.  This value may be used to compute the worst-case size
   * of the output buffer required for a given input sequence. This value
   * accounts for any necessary content-independent prefix or suffix
   * bytes, such as byte-order marks.
   *
   * @return  The maximum number of bytes that will be produced per
   *          character of input
  */
  maxBytesPerChar(): number;
  /**
   * Encodes as many characters as possible from the given input buffer,
   * writing the results to the given output buffer.
   *
   *  The buffers are read from, and written to, starting at their current
   * positions.  At most {@link Buffer#remaining in.remaining()} characters
   * will be read and at most {@link Buffer#remaining out.remaining()}
   * bytes will be written.  The buffers' positions will be advanced to
   * reflect the characters read and the bytes written, but their marks and
   * limits will not be modified.
   *
   *  In addition to reading characters from the input buffer and writing
   * bytes to the output buffer, this method returns a {@link CoderResult}
   * object to describe its reason for termination:
   *
   * 
   *
   *    {@link CoderResult#UNDERFLOW} indicates that as much of the
   *   input buffer as possible has been encoded.  If there is no further
   *   input then the invoker can proceed to the next step of the
   *   encoding operation.  Otherwise this method
   *   should be invoked again with further input.  
   *
   *    {@link CoderResult#OVERFLOW} indicates that there is
   *   insufficient space in the output buffer to encode any more characters.
   *   This method should be invoked again with an output buffer that has
   *   more {@linkplain Buffer#remaining remaining} bytes. This is
   *   typically done by draining any encoded bytes from the output
   *   buffer.  
   *
   *    A {@linkplain CoderResult#malformedForLength
   *   malformed-input} result indicates that a malformed-input
   *   error has been detected.  The malformed characters begin at the input
   *   buffer's (possibly incremented) position; the number of malformed
   *   characters may be determined by invoking the result object's {@link
   *   CoderResult#length() length} method.  This case applies only if the
   *   {@linkplain #onMalformedInput malformed action} of this encoder
   *   is {@link CodingErrorAction#REPORT}; otherwise the malformed input
   *   will be ignored or replaced, as requested.  
   *
   *    An {@linkplain CoderResult#unmappableForLength
   *   unmappable-character} result indicates that an
   *   unmappable-character error has been detected.  The characters that
   *   encode the unmappable character begin at the input buffer's (possibly
   *   incremented) position; the number of such characters may be determined
   *   by invoking the result object's {@link CoderResult#length() length}
   *   method.  This case applies only if the {@linkplain #onUnmappableCharacter
   *   unmappable action} of this encoder is {@link
   *   CodingErrorAction#REPORT}; otherwise the unmappable character will be
   *   ignored or replaced, as requested.  
   *
   * 
   *
   * In any case, if this method is to be reinvoked in the same encoding
   * operation then care should be taken to preserve any characters remaining
   * in the input buffer so that they are available to the next invocation.
   *
   *  The `endOfInput` parameter advises this method as to whether
   * the invoker can provide further input beyond that contained in the given
   * input buffer.  If there is a possibility of providing additional input
   * then the invoker should pass `false` for this parameter; if there
   * is no possibility of providing further input then the invoker should
   * pass `true`.  It is not erroneous, and in fact it is quite
   * common, to pass `false` in one invocation and later discover that
   * no further input was actually available.  It is critical, however, that
   * the final invocation of this method in a sequence of invocations always
   * pass `true` so that any remaining unencoded input will be treated
   * as being malformed.
   *
   *  This method works by invoking the {@link #encodeLoop encodeLoop}
   * method, interpreting its results, handling error conditions, and
   * reinvoking it as necessary.  
   *
   *
   * @param  in
   *         The input character buffer
   *
   * @param  out
   *         The output byte buffer
   *
   * @param  endOfInput
   *         `true` if, and only if, the invoker can provide no
   *         additional input characters beyond those in the given buffer
   *
   * @return  A coder-result object describing the reason for termination
   *
   * @throws  IllegalStateException
   *          If an encoding operation is already in progress and the previous
   *          step was an invocation neither of the {@link #reset reset}
   *          method, nor of this method with a value of `false` for
   *          the `endOfInput` parameter, nor of this method with a
   *          value of `true` for the `endOfInput` parameter
   *          but a return value indicating an incomplete encoding operation
   *
   * @throws  CoderMalfunctionError
   *          If an invocation of the encodeLoop method threw
   *          an unexpected exception
  */
  encode(in_: CharBuffer, out: ByteBuffer, endOfInput: boolean): CoderResult;
  /**
   * Flushes this encoder.
   *
   *  Some encoders maintain internal state and may need to write some
   * final bytes to the output buffer once the overall input sequence has
   * been read.
   *
   *  Any additional output is written to the output buffer beginning at
   * its current position.  At most {@link Buffer#remaining out.remaining()}
   * bytes will be written.  The buffer's position will be advanced
   * appropriately, but its mark and limit will not be modified.
   *
   *  If this method completes successfully then it returns {@link
   * CoderResult#UNDERFLOW}.  If there is insufficient room in the output
   * buffer then it returns {@link CoderResult#OVERFLOW}.  If this happens
   * then this method must be invoked again, with an output buffer that has
   * more room, in order to complete the current encoding
   * operation.
   *
   *  If this encoder has already been flushed then invoking this method
   * has no effect.
   *
   *  This method invokes the {@link #implFlush implFlush} method to
   * perform the actual flushing operation.  
   *
   * @param  out
   *         The output byte buffer
   *
   * @return  A coder-result object, either {@link CoderResult#UNDERFLOW} or
   *          {@link CoderResult#OVERFLOW}
   *
   * @throws  IllegalStateException
   *          If the previous step of the current encoding operation was an
   *          invocation neither of the {@link #flush flush} method nor of
   *          the three-argument {@link
   *          #encode(CharBuffer,ByteBuffer,boolean) encode} method
   *          with a value of `true` for the `endOfInput`
   *          parameter
  */
  flush(out: ByteBuffer): CoderResult;
  /**
   * Resets this encoder, clearing any internal state.
   *
   *  This method resets charset-independent state and also invokes the
   * {@link #implReset() implReset} method in order to perform any
   * charset-specific reset actions.  
   *
   * @return  This encoder
   *
  */
  reset(): CharsetEncoder;
  /**
   * Convenience method that encodes the remaining content of a single input
   * character buffer into a newly-allocated byte buffer.
   *
   *  This method implements an entire encoding
   * operation; that is, it resets this encoder, then it encodes the
   * characters in the given character buffer, and finally it flushes this
   * encoder.  This method should therefore not be invoked if an encoding
   * operation is already in progress.  
   *
   * @param  in
   *         The input character buffer
   *
   * @return A newly-allocated byte buffer containing the result of the
   *         encoding operation.  The buffer's position will be zero and its
   *         limit will follow the last byte written.
   *
   * @throws  IllegalStateException
   *          If an encoding operation is already in progress
   *
   * @throws  MalformedInputException
   *          If the character sequence starting at the input buffer's current
   *          position is not a legal sixteen-bit Unicode sequence and the current malformed-input action
   *          is {@link CodingErrorAction#REPORT}
   *
   * @throws  UnmappableCharacterException
   *          If the character sequence starting at the input buffer's current
   *          position cannot be mapped to an equivalent byte sequence and
   *          the current unmappable-character action is {@link
   *          CodingErrorAction#REPORT}
  */
  encode(in_: CharBuffer): ByteBuffer;
  /**
   * Tells whether or not this encoder can encode the given character.
   *
   *  This method returns `false` if the given character is a
   * surrogate character; such characters can be interpreted only when they
   * are members of a pair consisting of a high surrogate followed by a low
   * surrogate.  The {@link #canEncode(java.lang.CharSequence)
   * canEncode(CharSequence)} method may be used to test whether or not a
   * character sequence can be encoded.
   *
   *  This method may modify this encoder's state; it should therefore not
   * be invoked if an encoding operation is already in
   * progress.
   *
   *  The default implementation of this method is not very efficient; it
   * should generally be overridden to improve performance.  
   *
   * @param   c
   *          The given character
   *
   * @return  `true` if, and only if, this encoder can encode
   *          the given character
   *
   * @throws  IllegalStateException
   *          If an encoding operation is already in progress
  */
  canEncode(c: string): boolean;
  /**
   * Tells whether or not this encoder can encode the given character
   * sequence.
   *
   *  If this method returns `false` for a particular character
   * sequence then more information about why the sequence cannot be encoded
   * may be obtained by performing a full encoding
   * operation.
   *
   *  This method may modify this encoder's state; it should therefore not
   * be invoked if an encoding operation is already in progress.
   *
   *  The default implementation of this method is not very efficient; it
   * should generally be overridden to improve performance.  
   *
   * @param   cs
   *          The given character sequence
   *
   * @return  `true` if, and only if, this encoder can encode
   *          the given character without throwing any exceptions and without
   *          performing any replacements
   *
   * @throws  IllegalStateException
   *          If an encoding operation is already in progress
  */
  canEncode(cs: CharSequence): boolean;
}
export class Charset extends Comparable<Charset> {
  /**
   * Tells whether the named charset is supported.
   *
   * @param  charsetName
   *         The name of the requested charset; may be either
   *         a canonical name or an alias
   *
   * @return  `true` if, and only if, support for the named charset
   *          is available in the current Java virtual machine
   *
   * @throws IllegalCharsetNameException
   *         If the given charset name is illegal
   *
   * @throws  IllegalArgumentException
   *          If the given `charsetName` is null
  */
  static isSupported(charsetName: string): boolean;
  /**
   * Returns a charset object for the named charset.
   *
   * @param  charsetName
   *         The name of the requested charset; may be either
   *         a canonical name or an alias
   *
   * @return  A charset object for the named charset
   *
   * @throws  IllegalCharsetNameException
   *          If the given charset name is illegal
   *
   * @throws  IllegalArgumentException
   *          If the given `charsetName` is null
   *
   * @throws  UnsupportedCharsetException
   *          If no support for the named charset is available
   *          in this instance of the Java virtual machine
  */
  static forName(charsetName: string): Charset;
  /**
   * Constructs a sorted map from canonical charset names to charset objects.
   *
   *  The map returned by this method will have one entry for each charset
   * for which support is available in the current Java virtual machine.  If
   * two or more supported charsets have the same canonical name then the
   * resulting map will contain just one of them; which one it will contain
   * is not specified. 
   *
   *  The invocation of this method, and the subsequent use of the
   * resulting map, may cause time-consuming disk or network I/O operations
   * to occur.  This method is provided for applications that need to
   * enumerate all of the available charsets, for example to allow user
   * charset selection.  This method is not used by the {@link #forName
   * forName} method, which instead employs an efficient incremental lookup
   * algorithm.
   *
   *  This method may return different results at different times if new
   * charset providers are dynamically made available to the current Java
   * virtual machine.  In the absence of such changes, the charsets returned
   * by this method are exactly those that can be retrieved via the {@link
   * #forName forName} method.  
   *
   * @return An immutable, case-insensitive map from canonical charset names
   *         to charset objects
  */
  static availableCharsets(): SortedMap<string, Charset>;
  /**
   * Returns the default charset of this Java virtual machine.
   *
   *  The default charset is determined during virtual-machine startup and
   * typically depends upon the locale and charset of the underlying
   * operating system.
   *
   * @return  A charset object for the default charset
   *
   * @since 1.5
  */
  static defaultCharset(): Charset;
  /**
   * Returns this charset's canonical name.
   *
   * @return  The canonical name of this charset
  */
  name(): string;
  /**
   * Returns a set containing this charset's aliases.
   *
   * @return  An immutable set of this charset's aliases
  */
  aliases(): Set<string>;
  /**
   * Returns this charset's human-readable name for the default locale.
   *
   *  The default implementation of this method simply returns this
   * charset's canonical name.  Concrete subclasses of this class may
   * override this method in order to provide a localized display name. 
   *
   * @return  The display name of this charset in the default locale
  */
  displayName(): string;
  /**
   * Tells whether or not this charset is registered in the IANA Charset
   * Registry.
   *
   * @return  `true` if, and only if, this charset is known by its
   *          implementor to be registered with the IANA
  */
  isRegistered(): boolean;
  /**
   * Returns this charset's human-readable name for the given locale.
   *
   *  The default implementation of this method simply returns this
   * charset's canonical name.  Concrete subclasses of this class may
   * override this method in order to provide a localized display name. 
   *
   * @param  locale
   *         The locale for which the display name is to be retrieved
   *
   * @return  The display name of this charset in the given locale
  */
  displayName(locale: Locale): string;
  /**
   * Tells whether or not this charset contains the given charset.
   *
   *  A charset C is said to contain a charset D if,
   * and only if, every character representable in D is also
   * representable in C.  If this relationship holds then it is
   * guaranteed that every string that can be encoded in D can also be
   * encoded in C without performing any replacements.
   *
   *  That C contains D does not imply that each character
   * representable in C by a particular byte sequence is represented
   * in D by the same byte sequence, although sometimes this is the
   * case.
   *
   *  Every charset contains itself.
   *
   *  This method computes an approximation of the containment relation:
   * If it returns `true` then the given charset is known to be
   * contained by this charset; if it returns `false`, however, then
   * it is not necessarily the case that the given charset is not contained
   * in this charset.
   *
   * @param   cs
   *          The given charset
   *
   * @return  `true` if the given charset is contained in this charset
  */
  contains(cs: Charset): boolean;
  /**
   * Constructs a new decoder for this charset.
   *
   * @return  A new decoder for this charset
  */
  newDecoder(): CharsetDecoder;
  /**
   * Constructs a new encoder for this charset.
   *
   * @return  A new encoder for this charset
   *
   * @throws  UnsupportedOperationException
   *          If this charset does not support encoding
  */
  newEncoder(): CharsetEncoder;
  /**
   * Tells whether or not this charset supports encoding.
   *
   *  Nearly all charsets support encoding.  The primary exceptions are
   * special-purpose auto-detect charsets whose decoders can determine
   * which of several possible encoding schemes is in use by examining the
   * input byte sequence.  Such charsets do not support encoding because
   * there is no way to determine which encoding should be used on output.
   * Implementations of such charsets should override this method to return
   * `false`. 
   *
   * @return  `true` if, and only if, this charset supports encoding
  */
  canEncode(): boolean;
  /**
   * Convenience method that decodes bytes in this charset into Unicode
   * characters.
   *
   *  An invocation of this method upon a charset `cs` returns the
   * same result as the expression
   *
   *      *     cs.newDecoder()
   *       .onMalformedInput(CodingErrorAction.REPLACE)
   *       .onUnmappableCharacter(CodingErrorAction.REPLACE)
   *       .decode(bb); 
   *
   * except that it is potentially more efficient because it can cache
   * decoders between successive invocations.
   *
   *  This method always replaces malformed-input and unmappable-character
   * sequences with this charset's default replacement byte array.  In order
   * to detect such sequences, use the {@link
   * CharsetDecoder#decode(java.nio.ByteBuffer)} method directly.  
   *
   * @param  bb  The byte buffer to be decoded
   *
   * @return  A char buffer containing the decoded characters
  */
  decode(bb: ByteBuffer): CharBuffer;
  /**
   * Convenience method that encodes Unicode characters into bytes in this
   * charset.
   *
   *  An invocation of this method upon a charset `cs` returns the
   * same result as the expression
   *
   *      *     cs.newEncoder()
   *       .onMalformedInput(CodingErrorAction.REPLACE)
   *       .onUnmappableCharacter(CodingErrorAction.REPLACE)
   *       .encode(bb); 
   *
   * except that it is potentially more efficient because it can cache
   * encoders between successive invocations.
   *
   *  This method always replaces malformed-input and unmappable-character
   * sequences with this charset's default replacement string.  In order to
   * detect such sequences, use the {@link
   * CharsetEncoder#encode(java.nio.CharBuffer)} method directly.  
   *
   * @param  cb  The char buffer to be encoded
   *
   * @return  A byte buffer containing the encoded characters
  */
  encode(cb: CharBuffer): ByteBuffer;
  /**
   * Convenience method that encodes a string into bytes in this charset.
   *
   *  An invocation of this method upon a charset `cs` returns the
   * same result as the expression
   *
   *      *     cs.encode(CharBuffer.wrap(s)); 
   *
   * @param  str  The string to be encoded
   *
   * @return  A byte buffer containing the encoded characters
  */
  encode(str: string): ByteBuffer;
  /**
   * Compares this charset to another.
   *
   *  Charsets are ordered by their canonical names, without regard to
   * case. 
   *
   * @param  that
   *         The charset to which this charset is to be compared
   *
   * @return A negative integer, zero, or a positive integer as this charset
   *         is less than, equal to, or greater than the specified charset
  */
  compareTo(that: Charset): number;
  /**
   * Computes a hashcode for this charset.
   *
   * @return  An integer hashcode
  */
  hashCode(): number;
  /**
   * Tells whether or not this object is equal to another.
   *
   *  Two charsets are equal if, and only if, they have the same canonical
   * names.  A charset is never equal to any other type of object.  
   *
   * @return  `true` if, and only if, this charset is equal to the
   *          given object
  */
  equals(ob: any): boolean;
  /**
   * Returns a string describing this charset.
   *
   * @return  A string describing this charset
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
export class CodingErrorAction {
  /**
   * Action indicating that a coding error is to be handled by dropping the
   * erroneous input and resuming the coding operation.
  */
  static readonly IGNORE: CodingErrorAction;
  /**
   * Action indicating that a coding error is to be handled by dropping the
   * erroneous input, appending the coder's replacement value to the output
   * buffer, and resuming the coding operation.
  */
  static readonly REPLACE: CodingErrorAction;
  /**
   * Action indicating that a coding error is to be reported, either by
   * returning a {@link CoderResult} object or by throwing a {@link
   * CharacterCodingException}, whichever is appropriate for the method
   * implementing the coding process.
  */
  static readonly REPORT: CodingErrorAction;
  /**
   * Returns a string describing this action.
   *
   * @return  A descriptive string
  */
  toString(): string;
}
export class IllegalCharsetNameException extends IllegalArgumentException {
  /**
   * Constructs an instance of this class.
   *
   * @param  charsetName
   *         The illegal charset name
  */
  constructor(charsetName: string);
  /**
   * Retrieves the illegal charset name.
   *
   * @return  The illegal charset name
  */
  getCharsetName(): string;
}
/**
 * Constant definitions for the standard {@link Charset charsets}. These
 * charsets are guaranteed to be available on every implementation of the Java
 * platform.
 *
 * @see Standard Charsets
 * @since 1.7
*/
export class StandardCharsets {
  /**
   * Seven-bit ASCII, also known as ISO646-US, also known as the
   * Basic Latin block of the Unicode character set.
  */
  static readonly US_ASCII: Charset;
  /**
   * ISO Latin Alphabet {@literal No. 1}, also known as ISO-LATIN-1.
  */
  static readonly ISO_8859_1: Charset;
  /**
   * Eight-bit UCS Transformation Format.
  */
  static readonly UTF_8: Charset;
  /**
   * Sixteen-bit UCS Transformation Format, big-endian byte order.
  */
  static readonly UTF_16BE: Charset;
  /**
   * Sixteen-bit UCS Transformation Format, little-endian byte order.
  */
  static readonly UTF_16LE: Charset;
  /**
   * Sixteen-bit UCS Transformation Format, byte order identified by an
   * optional byte-order mark.
  */
  static readonly UTF_16: Charset;
}
export class UnsupportedCharsetException extends IllegalArgumentException {
  /**
   * Constructs an instance of this class.
   *
   * @param  charsetName
   *         The name of the unsupported charset
  */
  constructor(charsetName: string);
  /**
   * Retrieves the name of the unsupported charset.
   *
   * @return  The name of the unsupported charset
  */
  getCharsetName(): string;
}
export class UnmappableCharacterException extends CharacterCodingException {
  /**
   * Constructs an `UnmappableCharacterException` with the
   * given length.
   * @param inputLength the length of the input
  */
  constructor(inputLength: number);
  /**
   * Returns the length of the input.
   * @return the length of the input
  */
  getInputLength(): number;
  /**
   * Returns the message.
   * @return the message
  */
  getMessage(): string;
}
export class MalformedInputException extends CharacterCodingException {
  /**
   * Constructs an `MalformedInputException` with the given
   * length.
   * @param inputLength the length of the input
  */
  constructor(inputLength: number);
  /**
   * Returns the length of the input.
   * @return the length of the input
  */
  getInputLength(): number;
  /**
   * Returns the message.
   * @return the message
  */
  getMessage(): string;
}
export class CharacterCodingException extends IOException {
  /**
   * Constructs an instance of this class.
  */
  constructor();
}
export class CoderResult {
  /**
   * Returns a string describing this coder result.
   *
   * @return  A descriptive string
  */
  toString(): string;
  /**
   * Tells whether or not this object describes an underflow condition.
   *
   * @return  `true` if, and only if, this object denotes underflow
  */
  isUnderflow(): boolean;
  /**
   * Tells whether or not this object describes an overflow condition.
   *
   * @return  `true` if, and only if, this object denotes overflow
  */
  isOverflow(): boolean;
  /**
   * Tells whether or not this object describes an error condition.
   *
   * @return  `true` if, and only if, this object denotes either a
   *          malformed-input error or an unmappable-character error
  */
  isError(): boolean;
  /**
   * Tells whether or not this object describes a malformed-input error.
   *
   * @return  `true` if, and only if, this object denotes a
   *          malformed-input error
  */
  isMalformed(): boolean;
  /**
   * Tells whether or not this object describes an unmappable-character
   * error.
   *
   * @return  `true` if, and only if, this object denotes an
   *          unmappable-character error
  */
  isUnmappable(): boolean;
  /**
   * Returns the length of the erroneous input described by this
   * object  (optional operation).
   *
   * @return  The length of the erroneous input, a positive integer
   *
   * @throws  UnsupportedOperationException
   *          If this object does not describe an error condition, that is,
   *          if the {@link #isError() isError} does not return `true`
  */
  length(): number;
  /**
   * Result object indicating underflow, meaning that either the input buffer
   * has been completely consumed or, if the input buffer is not yet empty,
   * that additional input is required.
  */
  static readonly UNDERFLOW: CoderResult;
  /**
   * Result object indicating overflow, meaning that there is insufficient
   * room in the output buffer.
  */
  static readonly OVERFLOW: CoderResult;
  /**
   * Static factory method that returns the unique object describing a
   * malformed-input error of the given length.
   *
   * @param   length
   *          The given length
   *
   * @return  The requested coder-result object
  */
  static malformedForLength(length: number): CoderResult;
  /**
   * Static factory method that returns the unique result object describing
   * an unmappable-character error of the given length.
   *
   * @param   length
   *          The given length
   *
   * @return  The requested coder-result object
  */
  static unmappableForLength(length: number): CoderResult;
  /**
   * Throws an exception appropriate to the result described by this object.
   *
   * @throws  BufferUnderflowException
   *          If this object is {@link #UNDERFLOW}
   *
   * @throws  BufferOverflowException
   *          If this object is {@link #OVERFLOW}
   *
   * @throws  MalformedInputException
   *          If this object represents a malformed-input error; the
   *          exception's length value will be that of this object
   *
   * @throws  UnmappableCharacterException
   *          If this object represents an unmappable-character error; the
   *          exceptions length value will be that of this object
  */
  throwException(): void;
}

}
declare module 'java.nio.channels.Pipe' {
import { AbstractSelectableChannel } from 'java.nio.channels.spi';
import { ReadableByteChannel, GatheringByteChannel, WritableByteChannel, ScatteringByteChannel } from 'java.nio.channels';
/**
 * A channel representing the readable end of a {@link Pipe}.
 *
 * @since 1.4
*/
export class SourceChannel extends AbstractSelectableChannel {
  /**
   * Returns an operation set identifying this channel's supported
   * operations.
   *
   *  Pipe-source channels only support reading, so this method
   * returns {@link SelectionKey#OP_READ}.  
   *
   * @return  The valid-operation set
  */
  validOps(): number;
}
export interface SourceChannel extends AbstractSelectableChannel, ReadableByteChannel, ScatteringByteChannel {}
/**
 * A channel representing the writable end of a {@link Pipe}.
 *
 * @since 1.4
*/
export class SinkChannel extends AbstractSelectableChannel {
  /**
   * Returns an operation set identifying this channel's supported
   * operations.
   *
   *  Pipe-sink channels only support writing, so this method returns
   * {@link SelectionKey#OP_WRITE}.  
   *
   * @return  The valid-operation set
  */
  validOps(): number;
}
export interface SinkChannel extends AbstractSelectableChannel, WritableByteChannel, GatheringByteChannel {}

}
declare module 'java.nio.file.WatchEvent' {
import { Class } from 'java.lang';
/**
 * An event kind, for the purposes of identification.
 *
 * @since 1.7
 * @see StandardWatchEventKinds
*/
export class Kind<T> {
  /**
   * Returns the name of the event kind.
   *
   * @return the name of the event kind
  */
  name(): string;
  /**
   * Returns the type of the {@link WatchEvent#context context} value.
   *
   *
   * @return the type of the context value
  */
  type(): Class<T>;
}
/**
 * An event modifier that qualifies how a {@link Watchable} is registered
 * with a {@link WatchService}.
 *
 *  This release does not define any standard modifiers.
 *
 * @since 1.7
 * @see Watchable#register
*/
export class Modifier {
  /**
   * Returns the name of the modifier.
   *
   * @return the name of the modifier
  */
  name(): string;
}

}
declare module 'java.nio.file.attribute.AclEntry' {
import { Set } from 'java.util';
import { AclEntryFlag, AclEntryType, AclEntryPermission, AclEntry, UserPrincipal } from 'java.nio.file.attribute';
/**
 * A builder of {@link AclEntry} objects.
 *
 *  A `Builder` object is obtained by invoking one of the {@link
 * AclEntry#newBuilder newBuilder} methods defined by the `AclEntry`
 * class.
 *
 *  Builder objects are mutable and are not safe for use by multiple
 * concurrent threads without appropriate synchronization.
 *
 * @since 1.7
*/
export class Builder {
  /**
   * Constructs an {@link AclEntry} from the components of this builder.
   * The type and who components are required to have been set in order
   * to construct an `AclEntry`.
   *
   * @return  a new ACL entry
   *
   * @throws  IllegalStateException
   *          if the type or who component have not been set
  */
  build(): AclEntry;
  /**
   * Sets the type component of this builder.
   *
   * @param   type  the component type
   * @return  this builder
  */
  setType(type: AclEntryType);
  /**
   * Sets the principal component of this builder.
   *
   * @param   who  the principal component
   * @return  this builder
  */
  setPrincipal(principal: UserPrincipal);
  /**
   * Sets the permissions component of this builder. On return, the
   * permissions component of this builder is a copy of the given set.
   *
   * @param   perms  the permissions component
   * @return  this builder
   *
   * @throws  ClassCastException
   *          if the set contains elements that are not of type `         *          AclEntryPermission`
  */
  setPermissions(permissions: Set<AclEntryPermission>): void;
  /**
   * Sets the permissions component of this builder. On return, the
   * permissions component of this builder is a copy of the permissions in
   * the given array.
   *
   * @param   perms  the permissions component
   * @return  this builder
  */
  setPermissions(permissions: AclEntryPermission[]): void;
  /**
   * Sets the flags component of this builder. On return, the flags
   * component of this builder is a copy of the given set.
   *
   * @param   flags  the flags component
   * @return  this builder
   *
   * @throws  ClassCastException
   *          if the set contains elements that are not of type `         *          AclEntryFlag`
  */
  setFlags(flags: Set<AclEntryFlag>): void;
  /**
   * Sets the flags component of this builder. On return, the flags
   * component of this builder is a copy of the flags in the given
   * array.
   *
   * @param   flags  the flags component
   * @return  this builder
  */
  setFlags(flags: AclEntryFlag[]): void;
}

}
declare module 'java.nio.channels.spi' {
import { Thread } from 'java.lang';
import { Set } from 'java.util';
import { ProtocolFamily } from 'java.net';
import { ThreadFactory, ExecutorService } from 'java.util.concurrent';
import { VarHandle } from 'java.lang.invoke';
import { SelectionKey, SocketChannel, SelectableChannel, AsynchronousSocketChannel, InterruptibleChannel, AsynchronousChannelGroup, Channel, AsynchronousServerSocketChannel, DatagramChannel, Pipe, ServerSocketChannel, Selector } from 'java.nio.channels';
export class AbstractSelectionKey extends SelectionKey {
  isValid(): boolean;
  /**
   * Cancels this key.
   *
   *  If this key has not yet been cancelled then it is added to its
   * selector's cancelled-key set while synchronized on that set.  
  */
  cancel(): void;
}
export class AbstractSelectableChannel extends SelectableChannel {
  /**
   * Returns the provider that created this channel.
   *
   * @return  The provider that created this channel
  */
  provider(): SelectorProvider;
  isRegistered(): boolean;
  keyFor(sel: Selector): SelectionKey;
  /**
   * Registers this channel with the given selector, returning a selection key.
   *
   *   This method first verifies that this channel is open and that the
   * given initial interest set is valid.
   *
   *  If this channel is already registered with the given selector then
   * the selection key representing that registration is returned after
   * setting its interest set to the given value.
   *
   *  Otherwise this channel has not yet been registered with the given
   * selector, so the {@link AbstractSelector#register register} method of
   * the selector is invoked while holding the appropriate locks.  The
   * resulting key is added to this channel's key set before being returned.
   * 
   *
   * @throws  ClosedSelectorException {@inheritDoc}
   *
   * @throws  IllegalBlockingModeException {@inheritDoc}
   *
   * @throws  IllegalSelectorException {@inheritDoc}
   *
   * @throws  CancelledKeyException {@inheritDoc}
   *
   * @throws  IllegalArgumentException {@inheritDoc}
  */
  register(sel: Selector, ops: number, att: any): SelectionKey;
  isBlocking(): boolean;
  blockingLock(): any;
  /**
   * Adjusts this channel's blocking mode.
   *
   *  If the given blocking mode is different from the current blocking
   * mode then this method invokes the {@link #implConfigureBlocking
   * implConfigureBlocking} method, while holding the appropriate locks, in
   * order to change the mode.  
  */
  configureBlocking(block: boolean): SelectableChannel;
  /**
   * Registers this channel with the given selector, returning a selection
   * key.
   *
   *  An invocation of this convenience method of the form
   *
   * `sc.register(sel, ops)`
   *
   * behaves in exactly the same way as the invocation
   *
   * `sc.`{@link
   * #register(java.nio.channels.Selector,int,java.lang.Object)
   * register(sel, ops, null)}
   *
   * @param  sel
   *         The selector with which this channel is to be registered
   *
   * @param  ops
   *         The interest set for the resulting key
   *
   * @throws  ClosedChannelException
   *          If this channel is closed
   *
   * @throws  ClosedSelectorException
   *          If the selector is closed
   *
   * @throws  IllegalBlockingModeException
   *          If this channel is in blocking mode
   *
   * @throws  IllegalSelectorException
   *          If this channel was not created by the same provider
   *          as the given selector
   *
   * @throws  CancelledKeyException
   *          If this channel is currently registered with the given selector
   *          but the corresponding key has already been cancelled
   *
   * @throws  IllegalArgumentException
   *          If a bit in `ops` does not correspond to an operation
   *          that is supported by this channel, that is, if {@code set &
   *          ~validOps() != 0}
   *
   * @return  A key representing the registration of this channel with
   *          the given selector
  */
  register(sel: Selector, ops: number): SelectionKey;
}
export class AbstractSelector extends Selector {
  /**
   * Closes this selector.
   *
   *  If the selector has already been closed then this method returns
   * immediately.  Otherwise it marks the selector as closed and then invokes
   * the {@link #implCloseSelector implCloseSelector} method in order to
   * complete the close operation.  
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  close(): void;
  isOpen(): boolean;
  /**
   * Returns the provider that created this channel.
   *
   * @return  The provider that created this channel
  */
  provider(): SelectorProvider;
}
export class AsynchronousChannelProvider {
  /**
   * Returns the system-wide default asynchronous channel provider for this
   * invocation of the Java virtual machine.
   *
   *  The first invocation of this method locates the default provider
   * object as follows: 
   *
   * 
   *
   *    If the system property
   *   {@systemProperty java.nio.channels.spi.AsynchronousChannelProvider} is
   *   defined then it is taken to be the fully-qualified name of a concrete
   *   provider class. The class is loaded and instantiated; if this process
   *   fails then an unspecified error is thrown.  
   *
   *    If a provider class has been installed in a jar file that is
   *   visible to the system class loader, and that jar file contains a
   *   provider-configuration file named
   *   `java.nio.channels.spi.AsynchronousChannelProvider` in the resource
   *   directory `META-INF/services`, then the first class name
   *   specified in that file is taken.  The class is loaded and
   *   instantiated; if this process fails then an unspecified error is
   *   thrown.  
   *
   *    Finally, if no provider has been specified by any of the above
   *   means then the system-default provider class is instantiated and the
   *   result is returned.  
   *
   * 
   *
   *  Subsequent invocations of this method return the provider that was
   * returned by the first invocation.  
   *
   * @return  The system-wide default AsynchronousChannel provider
  */
  static provider(): AsynchronousChannelProvider;
  /**
   * Constructs a new asynchronous channel group with a fixed thread pool.
   *
   * @param   nThreads
   *          The number of threads in the pool
   * @param   threadFactory
   *          The factory to use when creating new threads
   *
   * @return  A new asynchronous channel group
   *
   * @throws  IllegalArgumentException
   *          If `nThreads <= 0`
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @see AsynchronousChannelGroup#withFixedThreadPool
  */
  openAsynchronousChannelGroup(nThreads: number, threadFactory: ThreadFactory): AsynchronousChannelGroup;
  /**
   * Constructs a new asynchronous channel group with the given thread pool.
   *
   * @param   executor
   *          The thread pool
   * @param   initialSize
   *          A value `>=0` or a negative value for implementation
   *          specific default
   *
   * @return  A new asynchronous channel group
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @see AsynchronousChannelGroup#withCachedThreadPool
  */
  openAsynchronousChannelGroup(executor: ExecutorService, initialSize: number): AsynchronousChannelGroup;
  /**
   * Opens an asynchronous server-socket channel.
   *
   * @param   group
   *          The group to which the channel is bound, or `null` to
   *          bind to the default group
   *
   * @return  The new channel
   *
   * @throws  IllegalChannelGroupException
   *          If the provider that created the group differs from this provider
   * @throws  ShutdownChannelGroupException
   *          The group is shutdown
   * @throws  IOException
   *          If an I/O error occurs
  */
  openAsynchronousServerSocketChannel(group: AsynchronousChannelGroup): AsynchronousServerSocketChannel;
  /**
   * Opens an asynchronous socket channel.
   *
   * @param   group
   *          The group to which the channel is bound, or `null` to
   *          bind to the default group
   *
   * @return  The new channel
   *
   * @throws  IllegalChannelGroupException
   *          If the provider that created the group differs from this provider
   * @throws  ShutdownChannelGroupException
   *          The group is shutdown
   * @throws  IOException
   *          If an I/O error occurs
  */
  openAsynchronousSocketChannel(group: AsynchronousChannelGroup): AsynchronousSocketChannel;
}
export class AbstractInterruptibleChannel extends Channel {
  /**
   * Closes this channel.
   *
   *  If the channel has already been closed then this method returns
   * immediately.  Otherwise it marks the channel as closed and then invokes
   * the {@link #implCloseChannel implCloseChannel} method in order to
   * complete the close operation.  
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  close(): void;
  isOpen(): boolean;
}
export interface AbstractInterruptibleChannel extends Channel, InterruptibleChannel {}
export class SelectorProvider {
  /**
   * Returns the system-wide default selector provider for this invocation of
   * the Java virtual machine.
   *
   *  The first invocation of this method locates the default provider
   * object as follows: 
   *
   * 
   *
   *    If the system property
   *   {@systemProperty java.nio.channels.spi.SelectorProvider} is defined
   *   then it is taken to be the fully-qualified name of a concrete provider
   *   class. The class is loaded and instantiated; if this process fails then
   *   an unspecified error is thrown.  
   *
   *    If a provider class has been installed in a jar file that is
   *   visible to the system class loader, and that jar file contains a
   *   provider-configuration file named
   *   `java.nio.channels.spi.SelectorProvider` in the resource
   *   directory `META-INF/services`, then the first class name
   *   specified in that file is taken.  The class is loaded and
   *   instantiated; if this process fails then an unspecified error is
   *   thrown.  
   *
   *    Finally, if no provider has been specified by any of the above
   *   means then the system-default provider class is instantiated and the
   *   result is returned.  
   *
   * 
   *
   *  Subsequent invocations of this method return the provider that was
   * returned by the first invocation.  
   *
   * @return  The system-wide default selector provider
  */
  static provider(): SelectorProvider;
  /**
   * Opens a datagram channel.
   *
   * @return  The new channel
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  openDatagramChannel(): DatagramChannel;
  /**
   * Opens a datagram channel.
   *
   * @param   family
   *          The protocol family
   *
   * @return  A new datagram channel
   *
   * @throws  UnsupportedOperationException
   *          If the specified protocol family is not supported
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @since 1.7
  */
  openDatagramChannel(family: ProtocolFamily): DatagramChannel;
  /**
   * Opens a pipe.
   *
   * @return  The new pipe
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  openPipe(): Pipe;
  /**
   * Opens a selector.
   *
   * @return  The new selector
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  openSelector(): AbstractSelector;
  /**
   * Opens a server-socket channel.
   *
   * @return  The new channel
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  openServerSocketChannel(): ServerSocketChannel;
  /**
   * Opens a socket channel.
   *
   * @return  The new channel
   *
   * @throws  IOException
   *          If an I/O error occurs
  */
  openSocketChannel(): SocketChannel;
  /**
   * Returns the channel inherited from the entity that created this
   * Java virtual machine.
   *
   *  On many operating systems a process, such as a Java virtual
   * machine, can be started in a manner that allows the process to
   * inherit a channel from the entity that created the process. The
   * manner in which this is done is system dependent, as are the
   * possible entities to which the channel may be connected. For example,
   * on UNIX systems, the Internet services daemon (inetd) is used to
   * start programs to service requests when a request arrives on an
   * associated network port. In this example, the process that is started,
   * inherits a channel representing a network socket.
   *
   *  In cases where the inherited channel is for an Internet protocol
   * socket then the {@link Channel Channel} type returned
   * by this method is determined as follows:
   *
   * 
   *
   *   If the inherited channel is for a stream-oriented connected
   *  socket then a {@link SocketChannel SocketChannel} is returned. The
   *  socket channel is, at least initially, in blocking mode, bound
   *  to a socket address, and connected to a peer.
   *  
   *
   *   If the inherited channel is for a stream-oriented listening
   *  socket then a {@link ServerSocketChannel ServerSocketChannel} is returned.
   *  The server-socket channel is, at least initially, in blocking mode,
   *  and bound to a socket address.
   *  
   *
   *   If the inherited channel is a datagram-oriented socket then a
   *  {@link DatagramChannel DatagramChannel} is returned. The datagram channel
   *  is, at least initially, in blocking mode, and bound to a socket address.
   *  
   *
   * 
   *
   *  In cases where the inherited channel is for a Unix domain
   * socket then the {@link Channel} type returned is the same as for
   * Internet protocol sockets as described above, except that
   * datagram-oriented sockets are not supported.
   *
   *  In addition to the two types of socket just described, this method
   * may return other types in the future.
   *
   *  The first invocation of this method creates the channel that is
   * returned. Subsequent invocations of this method return the same
   * channel. 
   *
   * @implSpec The default implementation of this method returns
   * `null`.
   *
   * @return  The inherited channel, if any, otherwise `null`.
   *
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @throws  SecurityException
   *          If a security manager has been installed and it denies
   *          {@link RuntimePermission}`("inheritedChannel")`
   *
   * @since 1.5
  */
  inheritedChannel(): Channel;
  /**
   * Opens a socket channel.
   *
   * @implSpec The default implementation of this method first checks that
   * the given protocol `family` is not `null`,
   * then throws {@link UnsupportedOperationException}.
   *
   * @param   family
   *          The protocol family
   *
   * @return  The new channel
   *
   * @throws  UnsupportedOperationException
   *          If the specified protocol family is not supported
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @since 15
  */
  openSocketChannel(family: ProtocolFamily): SocketChannel;
  /**
   * Opens a server-socket channel.
   *
   * @implSpec The default implementation of this method first checks that
   * the given protocol `family` is not `null`,
   * then throws {@link UnsupportedOperationException}.
   *
   * @param   family
   *          The protocol family
   *
   * @return  The new channel
   *
   * @throws  UnsupportedOperationException
   *          If the specified protocol family is not supported
   * @throws  IOException
   *          If an I/O error occurs
   *
   * @since 15
  */
  openServerSocketChannel(family: ProtocolFamily): ServerSocketChannel;
}

}
declare module 'java.nio.charset.spi' {
import { Iterator } from 'java.util';
import { Charset } from 'java.nio.charset';
export class CharsetProvider {
  /**
   * Creates an iterator that iterates over the charsets supported by this
   * provider.  This method is used in the implementation of the {@link
   * java.nio.charset.Charset#availableCharsets Charset.availableCharsets}
   * method.
   *
   * @return  The new iterator
  */
  charsets(): Iterator<Charset>;
  /**
   * Retrieves a charset for the given charset name.
   *
   * @param  charsetName
   *         The name of the requested charset; may be either
   *         a canonical name or an alias
   *
   * @return  A charset object for the named charset,
   *          or `null` if the named charset
   *          is not supported by this provider
  */
  charsetForName(charsetName: string): Charset;
}

}
declare module 'java.nio.channels.FileChannel' {
/**
 * A file-mapping mode.
 *
 * @since 1.4
 *
 * @see java.nio.channels.FileChannel#map
*/
export class MapMode {
  /**
   * Mode for a read-only mapping.
  */
  static readonly READ_ONLY: MapMode;
  /**
   * Mode for a read/write mapping.
  */
  static readonly READ_WRITE: MapMode;
  /**
   * Mode for a private (copy-on-write) mapping.
  */
  static readonly PRIVATE: MapMode;
  /**
   * Returns a string describing this file-mapping mode.
   *
   * @return  A descriptive string
  */
  toString(): string;
}

}
declare module 'java.nio.file.attribute' {
import { Principal } from 'java.security';
import { Instant } from 'java.time';
import { Set, List } from 'java.util';
import { Enum, Comparable, Class } from 'java.lang';
import { IOException } from 'java.io';
import { TimeUnit } from 'java.util.concurrent';
import { Builder } from 'java.nio.file.attribute.AclEntry';
import { ByteBuffer } from 'java.nio';
export class PosixFileAttributes extends BasicFileAttributes {
  /**
   * Returns the owner of the file.
   *
   * @return  the file owner
   *
   * @see PosixFileAttributeView#setOwner
  */
  owner(): UserPrincipal;
  /**
   * Returns the group owner of the file.
   *
   * @return  the file group owner
   *
   * @see PosixFileAttributeView#setGroup
  */
  group(): GroupPrincipal;
  /**
   * Returns the permissions of the file. The file permissions are returned
   * as a set of {@link PosixFilePermission} elements. The returned set is a
   * copy of the file permissions and is modifiable. This allows the result
   * to be modified and passed to the {@link PosixFileAttributeView#setPermissions
   * setPermissions} method to update the file's permissions.
   *
   * @return  the file permissions
   *
   * @see PosixFileAttributeView#setPermissions
  */
  permissions(): Set<PosixFilePermission>;
}
export class UserPrincipal extends Principal {

}
export class UserPrincipalLookupService {
  /**
   * Lookup a user principal by name.
   *
   * @param   name
   *          the string representation of the user principal to lookup
   *
   * @return  a user principal
   *
   * @throws  UserPrincipalNotFoundException
   *          the principal does not exist
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, it checks
   *          {@link RuntimePermission}`("lookupUserInformation")`
  */
  lookupPrincipalByName(name: string): UserPrincipal;
  /**
   * Lookup a group principal by group name.
   *
   *  Where an implementation does not support any notion of group then
   * this method always throws {@link UserPrincipalNotFoundException}. Where
   * the namespace for user accounts and groups is the same, then this method
   * is identical to invoking {@link #lookupPrincipalByName
   * lookupPrincipalByName}.
   *
   * @param   group
   *          the string representation of the group to lookup
   *
   * @return  a group principal
   *
   * @throws  UserPrincipalNotFoundException
   *          the principal does not exist or is not a group
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, it checks
   *          {@link RuntimePermission}`("lookupUserInformation")`
  */
  lookupPrincipalByGroupName(group: string): GroupPrincipal;
}
export class FileOwnerAttributeView extends FileAttributeView {
  /**
   * Returns the name of the attribute view. Attribute views of this type
   * have the name `"owner"`.
  */
  name(): string;
  /**
   * Read the file owner.
   *
   *  It is implementation specific if the file owner can be a {@link
   * GroupPrincipal group}.
   *
   * @return  the file owner
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, and it denies {@link
   *          RuntimePermission}`("accessUserInformation")` or its
   *          {@link SecurityManager#checkRead(String) checkRead} method
   *          denies read access to the file.
  */
  getOwner(): UserPrincipal;
  /**
   * Updates the file owner.
   *
   *  It is implementation specific if the file owner can be a {@link
   * GroupPrincipal group}. To ensure consistent and correct behavior
   * across platforms it is recommended that this method should only be used
   * to set the file owner to a user principal that is not a group.
   *
   * @param   owner
   *          the new file owner
   *
   * @throws  IOException
   *          if an I/O error occurs, or the `owner` parameter is a
   *          group and this implementation does not support setting the owner
   *          to a group
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, and it denies {@link
   *          RuntimePermission}`("accessUserInformation")` or its
   *          {@link SecurityManager#checkWrite(String) checkWrite} method
   *          denies write access to the file.
  */
  setOwner(owner: UserPrincipal);
}
export class PosixFileAttributeView extends BasicFileAttributeView {
  /**
   * Returns the name of the attribute view. Attribute views of this type
   * have the name `"posix"`.
  */
  name(): string;
  /**
   * @throws  IOException                {@inheritDoc}
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, and it denies
   *          {@link RuntimePermission}`("accessUserInformation")`
   *          or its {@link SecurityManager#checkRead(String) checkRead} method
   *          denies read access to the file.
  */
  readAttributes(): PosixFileAttributes;
  /**
   * Updates the file permissions.
   *
   * @param   perms
   *          the new set of permissions
   *
   * @throws  ClassCastException
   *          if the sets contains elements that are not of type `     *          PosixFilePermission`
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, and it denies
   *          {@link RuntimePermission}`("accessUserInformation")`
   *          or its {@link SecurityManager#checkWrite(String) checkWrite}
   *          method denies write access to the file.
  */
  setPermissions(permissions: Set<PosixFilePermission>);
  /**
   * Updates the file group-owner.
   *
   * @param   group
   *          the new file group-owner
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, and a security manager is
   *          installed, it denies
   *          {@link RuntimePermission}`("accessUserInformation")`
   *          or its {@link SecurityManager#checkWrite(String) checkWrite}
   *          method denies write access to the file.
  */
  setGroup(group: GroupPrincipal);
}
export interface PosixFileAttributeView extends BasicFileAttributeView, FileOwnerAttributeView {}
export class BasicFileAttributes {
  /**
   * Returns the time of last modification.
   *
   *  If the file system implementation does not support a time stamp
   * to indicate the time of last modification then this method returns an
   * implementation specific default value, typically a `FileTime`
   * representing the epoch (1970-01-01T00:00:00Z).
   *
   * @return  a `FileTime` representing the time the file was last
   *          modified
  */
  lastModifiedTime(): FileTime;
  /**
   * Returns the time of last access.
   *
   *  If the file system implementation does not support a time stamp
   * to indicate the time of last access then this method returns
   * an implementation specific default value, typically the {@link
   * #lastModifiedTime() last-modified-time} or a `FileTime`
   * representing the epoch (1970-01-01T00:00:00Z).
   *
   * @return  a `FileTime` representing the time of last access
  */
  lastAccessTime(): FileTime;
  /**
   * Returns the creation time. The creation time is the time that the file
   * was created.
   *
   *  If the file system implementation does not support a time stamp
   * to indicate the time when the file was created then this method returns
   * an implementation specific default value, typically the {@link
   * #lastModifiedTime() last-modified-time} or a `FileTime`
   * representing the epoch (1970-01-01T00:00:00Z).
   *
   * @return   a `FileTime` representing the time the file was created
  */
  creationTime(): FileTime;
  /**
   * Tells whether the file is a regular file with opaque content.
   *
   * @return `true` if the file is a regular file with opaque content
  */
  isRegularFile(): boolean;
  /**
   * Tells whether the file is a directory.
   *
   * @return `true` if the file is a directory
  */
  isDirectory(): boolean;
  /**
   * Tells whether the file is a symbolic link.
   *
   * @return `true` if the file is a symbolic link
  */
  isSymbolicLink(): boolean;
  /**
   * Tells whether the file is something other than a regular file, directory,
   * or symbolic link.
   *
   * @return `true` if the file something other than a regular file,
   *         directory or symbolic link
  */
  isOther(): boolean;
  /**
   * Returns the size of the file (in bytes). The size may differ from the
   * actual size on the file system due to compression, support for sparse
   * files, or other reasons. The size of files that are not {@link
   * #isRegularFile regular} files is implementation specific and
   * therefore unspecified.
   *
   * @return  the file size, in bytes
  */
  size(): number;
  /**
   * Returns an object that uniquely identifies the given file, or `     * null` if a file key is not available. On some platforms or file systems
   * it is possible to use an identifier, or a combination of identifiers to
   * uniquely identify a file. Such identifiers are important for operations
   * such as file tree traversal in file systems that support symbolic links or file systems
   * that allow a file to be an entry in more than one directory. On UNIX file
   * systems, for example, the device ID and inode are
   * commonly used for such purposes.
   *
   *  The file key returned by this method can only be guaranteed to be
   * unique if the file system and files remain static. Whether a file system
   * re-uses identifiers after a file is deleted is implementation dependent and
   * therefore unspecified.
   *
   *  File keys returned by this method can be compared for equality and are
   * suitable for use in collections. If the file system and files remain static,
   * and two files are the {@link java.nio.file.Files#isSameFile same} with
   * non-`null` file keys, then their file keys are equal.
   *
   * @return an object that uniquely identifies the given file, or `null`
   *
   * @see java.nio.file.Files#walkFileTree
  */
  fileKey(): any;
}
export class FileTime extends Comparable<FileTime> {
  /**
   * Returns a `FileTime` representing a value at the given unit of
   * granularity.
   *
   * @param   value
   *          the value since the epoch (1970-01-01T00:00:00Z); can be
   *          negative
   * @param   unit
   *          the unit of granularity to interpret the value
   *
   * @return  a `FileTime` representing the given value
  */
  static from(value: number, unit: TimeUnit): FileTime;
  /**
   * Returns a `FileTime` representing the given value in milliseconds.
   *
   * @param   value
   *          the value, in milliseconds, since the epoch
   *          (1970-01-01T00:00:00Z); can be negative
   *
   * @return  a `FileTime` representing the given value
  */
  static fromMillis(value: number): FileTime;
  /**
   * Returns a `FileTime` representing the same point of time value
   * on the time-line as the provided `Instant` object.
   *
   * @param   instant
   *          the instant to convert
   * @return  a `FileTime` representing the same point on the time-line
   *          as the provided instant
   * @since 1.8
  */
  static from(instant: Instant): FileTime;
  /**
   * Returns the value at the given unit of granularity.
   *
   *  Conversion from a coarser granularity that would numerically overflow
   * saturate to `Long.MIN_VALUE` if negative or `Long.MAX_VALUE`
   * if positive.
   *
   * @param   unit
   *          the unit of granularity for the return value
   *
   * @return  value in the given unit of granularity, since the epoch
   *          since the epoch (1970-01-01T00:00:00Z); can be negative
  */
  to(unit: TimeUnit): number;
  /**
   * Returns the value in milliseconds.
   *
   *  Conversion from a coarser granularity that would numerically overflow
   * saturate to `Long.MIN_VALUE` if negative or `Long.MAX_VALUE`
   * if positive.
   *
   * @return  the value in milliseconds, since the epoch (1970-01-01T00:00:00Z)
  */
  toMillis(): number;
  /**
   * Converts this `FileTime` object to an `Instant`.
   *
   *  The conversion creates an `Instant` that represents the
   * same point on the time-line as this `FileTime`.
   *
   *  `FileTime` can store points on the time-line further in the
   * future and further in the past than `Instant`. Conversion
   * from such further time points saturates to {@link Instant#MIN} if
   * earlier than `Instant.MIN` or {@link Instant#MAX} if later
   * than `Instant.MAX`.
   *
   * @return  an instant representing the same point on the time-line as
   *          this `FileTime` object
   * @since 1.8
  */
  toInstant(): Instant;
  /**
   * Tests this `FileTime` for equality with the given object.
   *
   *  The result is `true` if and only if the argument is not `     * null` and is a `FileTime` that represents the same time. This
   * method satisfies the general contract of the `Object.equals` method.
   *
   * @param   obj
   *          the object to compare with
   *
   * @return  `true` if, and only if, the given object is a `     *          FileTime` that represents the same time
  */
  equals(obj: any): boolean;
  /**
   * Computes a hash code for this file time.
   *
   *  The hash code is based upon the value represented, and satisfies the
   * general contract of the {@link Object#hashCode} method.
   *
   * @return  the hash-code value
  */
  hashCode(): number;
  /**
   * Compares the value of two `FileTime` objects for order.
   *
   * @param   other
   *          the other `FileTime` to be compared
   *
   * @return  `0` if this `FileTime` is equal to `other`, a
   *          value less than 0 if this `FileTime` represents a time
   *          that is before `other`, and a value greater than 0 if this
   *          `FileTime` represents a time that is after `other`
  */
  compareTo(other: FileTime): number;
  /**
   * Returns the string representation of this `FileTime`. The string
   * is returned in the ISO 8601 format:
   *      *     YYYY-MM-DDThh:mm:ss[.s+]Z
   * 
   * where "`[.s+]`" represents a dot followed by one of more digits
   * for the decimal fraction of a second. It is only present when the decimal
   * fraction of a second is not zero. For example, `     * FileTime.fromMillis(1234567890000L).toString()` yields `     * "2009-02-13T23:31:30Z"`, and `FileTime.fromMillis(1234567890123L).toString()`
   * yields `"2009-02-13T23:31:30.123Z"`.
   *
   *  A `FileTime` is primarily intended to represent the value of a
   * file's time stamp. Where used to represent extreme values, where
   * the year is less than "`0001`" or greater than "`9999`" then
   * this method deviates from ISO 8601 in the same manner as the
   * XML Schema
   * language. That is, the year may be expanded to more than four digits
   * and may be negative-signed. If more than four digits then leading zeros
   * are not present. The year before "`0001`" is "`-0001`".
   *
   * @return  the string representation of this file time
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
export class FileAttribute<T> {
  /**
   * Returns the attribute name.
   *
   * @return The attribute name
  */
  name(): string;
  /**
   * Returns the attribute value.
   *
   * @return The attribute value
  */
  value(): T;
}
export class DosFileAttributeView extends BasicFileAttributeView {
  /**
   * Returns the name of the attribute view. Attribute views of this type
   * have the name `"dos"`.
  */
  name(): string;
  /**
   * @throws  IOException                             {@inheritDoc}
   * @throws  SecurityException                       {@inheritDoc}
  */
  readAttributes(): DosFileAttributes;
  /**
   * Updates the value of the read-only attribute.
   *
   *  It is implementation specific if the attribute can be updated as an
   * atomic operation with respect to other file system operations. An
   * implementation may, for example, require to read the existing value of
   * the DOS attribute in order to update this attribute.
   *
   * @param   value
   *          the new value of the attribute
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default, and a security manager is installed,
   *          its  {@link SecurityManager#checkWrite(String) checkWrite} method
   *          is invoked to check write access to the file
  */
  setReadOnly(value: boolean): void;
  /**
   * Updates the value of the hidden attribute.
   *
   *  It is implementation specific if the attribute can be updated as an
   * atomic operation with respect to other file system operations. An
   * implementation may, for example, require to read the existing value of
   * the DOS attribute in order to update this attribute.
   *
   * @param   value
   *          the new value of the attribute
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default, and a security manager is installed,
   *          its  {@link SecurityManager#checkWrite(String) checkWrite} method
   *          is invoked to check write access to the file
  */
  setHidden(value: boolean): void;
  /**
   * Updates the value of the system attribute.
   *
   *  It is implementation specific if the attribute can be updated as an
   * atomic operation with respect to other file system operations. An
   * implementation may, for example, require to read the existing value of
   * the DOS attribute in order to update this attribute.
   *
   * @param   value
   *          the new value of the attribute
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default, and a security manager is installed,
   *          its  {@link SecurityManager#checkWrite(String) checkWrite} method
   *          is invoked to check write access to the file
  */
  setSystem(value: boolean): void;
  /**
   * Updates the value of the archive attribute.
   *
   *  It is implementation specific if the attribute can be updated as an
   * atomic operation with respect to other file system operations. An
   * implementation may, for example, require to read the existing value of
   * the DOS attribute in order to update this attribute.
   *
   * @param   value
   *          the new value of the attribute
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default, and a security manager is installed,
   *          its  {@link SecurityManager#checkWrite(String) checkWrite} method
   *          is invoked to check write access to the file
  */
  setArchive(value: boolean): void;
}
export class AclEntryFlag extends Enum<AclEntryFlag> {
  /**
   * Can be placed on a directory and indicates that the ACL entry should be
   * added to each new non-directory file created.
  */
  static readonly FILE_INHERIT: AclEntryFlag;
  /**
   * Can be placed on a directory and indicates that the ACL entry should be
   * added to each new directory created.
  */
  static readonly DIRECTORY_INHERIT: AclEntryFlag;
  /**
   * Can be placed on a directory to indicate that the ACL entry should not
   * be placed on the newly created directory which is inheritable by
   * subdirectories of the created directory.
  */
  static readonly NO_PROPAGATE_INHERIT: AclEntryFlag;
  /**
   * Can be placed on a directory but does not apply to the directory,
   * only to newly created files/directories as specified by the
   * {@link #FILE_INHERIT} and {@link #DIRECTORY_INHERIT} flags.
  */
  static readonly INHERIT_ONLY: AclEntryFlag;
  static valueOf(name: string): AclEntryFlag;
  static values(): AclEntryFlag[];
  /**
   * Returns the enum constant of the specified enum class with the
   * specified name.  The name must match exactly an identifier used
   * to declare an enum constant in this class.  (Extraneous whitespace
   * characters are not permitted.)
   *
   * Note that for a particular enum class `T`, the
   * implicitly declared `public static T valueOf(String)`
   * method on that enum may be used instead of this method to map
   * from a name to the corresponding enum constant.  All the
   * constants of an enum class can be obtained by calling the
   * implicit `public static T[] values()` method of that
   * class.
   *
   * @param  The enum class whose constant is to be returned
   * @param enumClass the `Class` object of the enum class from which
   *      to return a constant
   * @param name the name of the constant to return
   * @return the enum constant of the specified enum class with the
   *      specified name
   * @throws IllegalArgumentException if the specified enum class has
   *         no constant with the specified name, or the specified
   *         class object does not represent an enum class
   * @throws NullPointerException if `enumClass` or `name`
   *         is null
   * @since 1.5
  */
  static valueOf<T>(enumClass: Class<T>, name: string): T;
}
export class FileAttributeView extends AttributeView {

}
export class AclEntryType extends Enum<AclEntryType> {
  /**
   * Explicitly grants access to a file or directory.
  */
  static readonly ALLOW: AclEntryType;
  /**
   * Explicitly denies access to a file or directory.
  */
  static readonly DENY: AclEntryType;
  /**
   * Log, in a system dependent way, the access specified in the
   * permissions component of the ACL entry.
  */
  static readonly AUDIT: AclEntryType;
  /**
   * Generate an alarm, in a system dependent way, the access specified in the
   * permissions component of the ACL entry.
  */
  static readonly ALARM: AclEntryType;
  static valueOf(name: string): AclEntryType;
  static values(): AclEntryType[];
  /**
   * Returns the enum constant of the specified enum class with the
   * specified name.  The name must match exactly an identifier used
   * to declare an enum constant in this class.  (Extraneous whitespace
   * characters are not permitted.)
   *
   * Note that for a particular enum class `T`, the
   * implicitly declared `public static T valueOf(String)`
   * method on that enum may be used instead of this method to map
   * from a name to the corresponding enum constant.  All the
   * constants of an enum class can be obtained by calling the
   * implicit `public static T[] values()` method of that
   * class.
   *
   * @param  The enum class whose constant is to be returned
   * @param enumClass the `Class` object of the enum class from which
   *      to return a constant
   * @param name the name of the constant to return
   * @return the enum constant of the specified enum class with the
   *      specified name
   * @throws IllegalArgumentException if the specified enum class has
   *         no constant with the specified name, or the specified
   *         class object does not represent an enum class
   * @throws NullPointerException if `enumClass` or `name`
   *         is null
   * @since 1.5
  */
  static valueOf<T>(enumClass: Class<T>, name: string): T;
}
export class BasicFileAttributeView extends FileAttributeView {
  /**
   * Returns the name of the attribute view. Attribute views of this type
   * have the name `"basic"`.
  */
  name(): string;
  /**
   * Reads the basic file attributes as a bulk operation.
   *
   *  It is implementation specific if all file attributes are read as an
   * atomic operation with respect to other file system operations.
   *
   * @return  the file attributes
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, its {@link SecurityManager#checkRead(String) checkRead}
   *          method is invoked to check read access to the file
  */
  readAttributes(): BasicFileAttributes;
  /**
   * Updates any or all of the file's last modified time, last access time,
   * and create time attributes.
   *
   *  This method updates the file's timestamp attributes. The values are
   * converted to the epoch and precision supported by the file system.
   * Converting from finer to coarser granularities result in precision loss.
   * The behavior of this method when attempting to set a timestamp that is
   * not supported or to a value that is outside the range supported by the
   * underlying file store is not defined. It may or not fail by throwing an
   * `IOException`.
   *
   *  If any of the `lastModifiedTime`, `lastAccessTime`,
   * or `createTime` parameters has the value `null` then the
   * corresponding timestamp is not changed. An implementation may require to
   * read the existing values of the file attributes when only some, but not
   * all, of the timestamp attributes are updated. Consequently, this method
   * may not be an atomic operation with respect to other file system
   * operations. Reading and re-writing existing values may also result in
   * precision loss. If all of the `lastModifiedTime`, `     * lastAccessTime` and `createTime` parameters are `null` then
   * this method has no effect.
   *
   *  Usage Example:
   * Suppose we want to change a file's last access time.
   *      *    Path path = ...
   *    FileTime time = ...
   *    Files.getFileAttributeView(path, BasicFileAttributeView.class).setTimes(null, time, null);
   * 
   *
   * @param   lastModifiedTime
   *          the new last modified time, or `null` to not change the
   *          value
   * @param   lastAccessTime
   *          the last access time, or `null` to not change the value
   * @param   createTime
   *          the file's create time, or `null` to not change the value
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, its  {@link SecurityManager#checkWrite(String) checkWrite}
   *          method is invoked to check write access to the file
   *
   * @see java.nio.file.Files#setLastModifiedTime
  */
  setTimes(lastModifiedTime: FileTime, lastAccessTime: FileTime, createTime: FileTime): void;
}
export class UserPrincipalNotFoundException extends IOException {
  /**
   * Constructs an instance of this class.
   *
   * @param   name
   *          the principal name; may be `null`
  */
  constructor(name: string);
  /**
   * Returns the user principal name if this exception was created with the
   * user principal name that was not found, otherwise `null`.
   *
   * @return  the user principal name or `null`
  */
  getName(): string;
}
export class GroupPrincipal extends UserPrincipal {

}
export class PosixFilePermissions {
  /**
   * Returns the `String` representation of a set of permissions. It
   * is guaranteed that the returned `String` can be parsed by the
   * {@link #fromString} method.
   *
   *  If the set contains `null` or elements that are not of type
   * `PosixFilePermission` then these elements are ignored.
   *
   * @param   perms
   *          the set of permissions
   *
   * @return  the string representation of the permission set
  */
  static toString(perms: Set<PosixFilePermission>): string;
  /**
   * Returns the set of permissions corresponding to a given `String`
   * representation.
   *
   *  The `perms` parameter is a `String` representing the
   * permissions. It has 9 characters that are interpreted as three sets of
   * three. The first set refers to the owner's permissions; the next to the
   * group permissions and the last to others. Within each set, the first
   * character is `'r'` to indicate permission to read, the second
   * character is `'w'` to indicate permission to write, and the third
   * character is `'x'` for execute permission. Where a permission is
   * not set then the corresponding character is set to `'-'`.
   *
   *  Usage Example:
   * Suppose we require the set of permissions that indicate the owner has read,
   * write, and execute permissions, the group has read and execute permissions
   * and others have none.
   *      *   Set<PosixFilePermission> perms = PosixFilePermissions.fromString("rwxr-x---");
   * 
   *
   * @param   perms
   *          string representing a set of permissions
   *
   * @return  the resulting set of permissions
   *
   * @throws  IllegalArgumentException
   *          if the string cannot be converted to a set of permissions
   *
   * @see #toString(Set)
  */
  static fromString(perms: string): Set<PosixFilePermission>;
  /**
   * Creates a {@link FileAttribute}, encapsulating a copy of the given file
   * permissions, suitable for passing to the {@link java.nio.file.Files#createFile
   * createFile} or {@link java.nio.file.Files#createDirectory createDirectory}
   * methods.
   *
   * @param   perms
   *          the set of permissions
   *
   * @return  an attribute encapsulating the given file permissions with
   *          {@link FileAttribute#name name} `"posix:permissions"`
   *
   * @throws  ClassCastException
   *          if the set contains elements that are not of type `     *          PosixFilePermission`
  */
  static asFileAttribute(perms: Set<PosixFilePermission>): FileAttribute<Set<PosixFilePermission>>;
}
export class AclEntry {
  /**
   * Constructs a new builder. The initial value of the type and who
   * components is `null`. The initial value of the permissions and
   * flags components is the empty set.
   *
   * @return  a new builder
  */
  static newBuilder(): Builder;
  /**
   * Constructs a new builder with the components of an existing ACL entry.
   *
   * @param   entry  an ACL entry
   * @return  a new builder
  */
  static newBuilder(entry: AclEntry): Builder;
  /**
   * Returns the ACL entry type.
   *
   * @return the ACL entry type
  */
  type(): AclEntryType;
  /**
   * Returns the principal component.
   *
   * @return the principal component
  */
  principal(): UserPrincipal;
  /**
   * Returns a copy of the permissions component.
   *
   *  The returned set is a modifiable copy of the permissions.
   *
   * @return the permissions component
  */
  permissions(): Set<AclEntryPermission>;
  /**
   * Returns a copy of the flags component.
   *
   *  The returned set is a modifiable copy of the flags.
   *
   * @return the flags component
  */
  flags(): Set<AclEntryFlag>;
  /**
   * Compares the specified object with this ACL entry for equality.
   *
   *  If the given object is not an `AclEntry` then this method
   * immediately returns `false`.
   *
   *  For two ACL entries to be considered equals requires that they are
   * both the same type, their who components are equal, their permissions
   * components are equal, and their flags components are equal.
   *
   *  This method satisfies the general contract of the {@link
   * java.lang.Object#equals(Object) Object.equals} method. 
   *
   * @param   ob   the object to which this object is to be compared
   *
   * @return  `true` if, and only if, the given object is an AclEntry that
   *          is identical to this AclEntry
  */
  equals(ob: any): boolean;
  /**
   * Returns the hash-code value for this ACL entry.
   *
   *  This method satisfies the general contract of the {@link
   * Object#hashCode} method.
  */
  hashCode(): number;
  /**
   * Returns the string representation of this ACL entry.
   *
   * @return  the string representation of this entry
  */
  toString(): string;
}
export class FileStoreAttributeView extends AttributeView {

}
export class DosFileAttributes extends BasicFileAttributes {
  /**
   * Returns the value of the read-only attribute.
   *
   *  This attribute is often used as a simple access control mechanism
   * to prevent files from being deleted or updated. Whether the file system
   * or platform does any enforcement to prevent read-only files
   * from being updated is implementation specific.
   *
   * @return  the value of the read-only attribute
  */
  isReadOnly(): boolean;
  /**
   * Returns the value of the hidden attribute.
   *
   *  This attribute is often used to indicate if the file is visible to
   * users.
   *
   * @return  the value of the hidden attribute
  */
  isHidden(): boolean;
  /**
   * Returns the value of the archive attribute.
   *
   *  This attribute is typically used by backup programs.
   *
   * @return  the value of the archive attribute
  */
  isArchive(): boolean;
  /**
   * Returns the value of the system attribute.
   *
   *  This attribute is often used to indicate that the file is a component
   * of the operating system.
   *
   * @return  the value of the system attribute
  */
  isSystem(): boolean;
}
export class AclFileAttributeView extends FileOwnerAttributeView {
  /**
   * Returns the name of the attribute view. Attribute views of this type
   * have the name `"acl"`.
  */
  name(): string;
  /**
   * Reads the access control list.
   *
   *  When the file system uses an ACL model that differs from the NFSv4
   * defined ACL model, then this method returns an ACL that is the translation
   * of the ACL to the NFSv4 ACL model.
   *
   *  The returned list is modifiable so as to facilitate changes to the
   * existing ACL. The {@link #setAcl setAcl} method is used to update
   * the file's ACL attribute.
   *
   * @return  an ordered list of {@link AclEntry entries} representing the
   *          ACL
   *
   * @throws  IOException
   *          if an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, and it denies {@link RuntimePermission}`("accessUserInformation")`
   *          or its {@link SecurityManager#checkRead(String) checkRead} method
   *          denies read access to the file.
  */
  getAcl(): AclEntry[];
  /**
   * Updates (replace) the access control list.
   *
   *  Where the file system supports Access Control Lists, and it uses an
   * ACL model that differs from the NFSv4 defined ACL model, then this method
   * must translate the ACL to the model supported by the file system. This
   * method should reject (by throwing {@link IOException IOException}) any
   * attempt to write an ACL that would appear to make the file more secure
   * than would be the case if the ACL were updated. Where an implementation
   * does not support a mapping of {@link AclEntryType#AUDIT} or {@link
   * AclEntryType#ALARM} entries, then this method ignores these entries when
   * writing the ACL.
   *
   *  If an ACL entry contains a {@link AclEntry#principal user-principal}
   * that is not associated with the same provider as this attribute view then
   * {@link ProviderMismatchException} is thrown. Additional validation, if
   * any, is implementation dependent.
   *
   *  If the file system supports other security related file attributes
   * (such as a file {@link PosixFileAttributes#permissions
   * access-permissions} for example), the updating the access control list
   * may also cause these security related attributes to be updated.
   *
   * @param   acl
   *          the new access control list
   *
   * @throws  IOException
   *          if an I/O error occurs or the ACL is invalid
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, it denies {@link RuntimePermission}`("accessUserInformation")`
   *          or its {@link SecurityManager#checkWrite(String) checkWrite}
   *          method denies write access to the file.
  */
  setAcl(acl: AclEntry[]);
}
export class PosixFilePermission extends Enum<PosixFilePermission> {
  /**
   * Read permission, owner.
  */
  static readonly OWNER_READ: PosixFilePermission;
  /**
   * Write permission, owner.
  */
  static readonly OWNER_WRITE: PosixFilePermission;
  /**
   * Execute/search permission, owner.
  */
  static readonly OWNER_EXECUTE: PosixFilePermission;
  /**
   * Read permission, group.
  */
  static readonly GROUP_READ: PosixFilePermission;
  /**
   * Write permission, group.
  */
  static readonly GROUP_WRITE: PosixFilePermission;
  /**
   * Execute/search permission, group.
  */
  static readonly GROUP_EXECUTE: PosixFilePermission;
  /**
   * Read permission, others.
  */
  static readonly OTHERS_READ: PosixFilePermission;
  /**
   * Write permission, others.
  */
  static readonly OTHERS_WRITE: PosixFilePermission;
  /**
   * Execute/search permission, others.
  */
  static readonly OTHERS_EXECUTE: PosixFilePermission;
  static valueOf(name: string): PosixFilePermission;
  static values(): PosixFilePermission[];
  /**
   * Returns the enum constant of the specified enum class with the
   * specified name.  The name must match exactly an identifier used
   * to declare an enum constant in this class.  (Extraneous whitespace
   * characters are not permitted.)
   *
   * Note that for a particular enum class `T`, the
   * implicitly declared `public static T valueOf(String)`
   * method on that enum may be used instead of this method to map
   * from a name to the corresponding enum constant.  All the
   * constants of an enum class can be obtained by calling the
   * implicit `public static T[] values()` method of that
   * class.
   *
   * @param  The enum class whose constant is to be returned
   * @param enumClass the `Class` object of the enum class from which
   *      to return a constant
   * @param name the name of the constant to return
   * @return the enum constant of the specified enum class with the
   *      specified name
   * @throws IllegalArgumentException if the specified enum class has
   *         no constant with the specified name, or the specified
   *         class object does not represent an enum class
   * @throws NullPointerException if `enumClass` or `name`
   *         is null
   * @since 1.5
  */
  static valueOf<T>(enumClass: Class<T>, name: string): T;
}
export class AclEntryPermission extends Enum<AclEntryPermission> {
  /**
   * Permission to read the data of the file.
  */
  static readonly READ_DATA: AclEntryPermission;
  /**
   * Permission to modify the file's data.
  */
  static readonly WRITE_DATA: AclEntryPermission;
  /**
   * Permission to append data to a file.
  */
  static readonly APPEND_DATA: AclEntryPermission;
  /**
   * Permission to read the named attributes of a file.
   *
   *  RFC 3530: Network
   * File System (NFS) version 4 Protocol defines named attributes
   * as opaque files associated with a file in the file system.
  */
  static readonly READ_NAMED_ATTRS: AclEntryPermission;
  /**
   * Permission to write the named attributes of a file.
   *
   *  RFC 3530: Network
   * File System (NFS) version 4 Protocol defines named attributes
   * as opaque files associated with a file in the file system.
  */
  static readonly WRITE_NAMED_ATTRS: AclEntryPermission;
  /**
   * Permission to execute a file.
  */
  static readonly EXECUTE: AclEntryPermission;
  /**
   * Permission to delete a file or directory within a directory.
  */
  static readonly DELETE_CHILD: AclEntryPermission;
  /**
   * The ability to read (non-acl) file attributes.
  */
  static readonly READ_ATTRIBUTES: AclEntryPermission;
  /**
   * The ability to write (non-acl) file attributes.
  */
  static readonly WRITE_ATTRIBUTES: AclEntryPermission;
  /**
   * Permission to delete the file.
  */
  static readonly DELETE: AclEntryPermission;
  /**
   * Permission to read the ACL attribute.
  */
  static readonly READ_ACL: AclEntryPermission;
  /**
   * Permission to write the ACL attribute.
  */
  static readonly WRITE_ACL: AclEntryPermission;
  /**
   * Permission to change the owner.
  */
  static readonly WRITE_OWNER: AclEntryPermission;
  /**
   * Permission to access file locally at the server with synchronous reads
   * and writes.
  */
  static readonly SYNCHRONIZE: AclEntryPermission;
  static valueOf(name: string): AclEntryPermission;
  static values(): AclEntryPermission[];
  /**
   * Permission to list the entries of a directory (equal to {@link #READ_DATA})
  */
  static readonly LIST_DIRECTORY: AclEntryPermission;
  /**
   * Permission to add a new file to a directory (equal to {@link #WRITE_DATA})
  */
  static readonly ADD_FILE: AclEntryPermission;
  /**
   * Permission to create a subdirectory to a directory (equal to {@link #APPEND_DATA})
  */
  static readonly ADD_SUBDIRECTORY: AclEntryPermission;
  /**
   * Returns the enum constant of the specified enum class with the
   * specified name.  The name must match exactly an identifier used
   * to declare an enum constant in this class.  (Extraneous whitespace
   * characters are not permitted.)
   *
   * Note that for a particular enum class `T`, the
   * implicitly declared `public static T valueOf(String)`
   * method on that enum may be used instead of this method to map
   * from a name to the corresponding enum constant.  All the
   * constants of an enum class can be obtained by calling the
   * implicit `public static T[] values()` method of that
   * class.
   *
   * @param  The enum class whose constant is to be returned
   * @param enumClass the `Class` object of the enum class from which
   *      to return a constant
   * @param name the name of the constant to return
   * @return the enum constant of the specified enum class with the
   *      specified name
   * @throws IllegalArgumentException if the specified enum class has
   *         no constant with the specified name, or the specified
   *         class object does not represent an enum class
   * @throws NullPointerException if `enumClass` or `name`
   *         is null
   * @since 1.5
  */
  static valueOf<T>(enumClass: Class<T>, name: string): T;
}
export class UserDefinedFileAttributeView extends FileAttributeView {
  /**
   * Returns the name of this attribute view. Attribute views of this type
   * have the name `"user"`.
  */
  name(): string;
  /**
   * Returns a list containing the names of the user-defined attributes.
   *
   * @return  An unmodifiable list containing the names of the file's
   *          user-defined
   *
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, and it denies {@link
   *          RuntimePermission}`("accessUserDefinedAttributes")`
   *          or its {@link SecurityManager#checkRead(String) checkRead} method
   *          denies read access to the file.
  */
  list(): string[];
  /**
   * Returns the size of the value of a user-defined attribute.
   *
   * @param   name
   *          The attribute name
   *
   * @return  The size of the attribute value, in bytes.
   *
   * @throws  ArithmeticException
   *          If the size of the attribute is larger than {@link Integer#MAX_VALUE}
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, and it denies {@link
   *          RuntimePermission}`("accessUserDefinedAttributes")`
   *          or its {@link SecurityManager#checkRead(String) checkRead} method
   *          denies read access to the file.
  */
  size(name: string): number;
  /**
   * Read the value of a user-defined attribute into a buffer.
   *
   *  This method reads the value of the attribute into the given buffer
   * as a sequence of bytes, failing if the number of bytes remaining in
   * the buffer is insufficient to read the complete attribute value. The
   * number of bytes transferred into the buffer is `n`, where `n`
   * is the size of the attribute value. The first byte in the sequence is at
   * index `p` and the last byte is at index `p + n - 1`, where
   * `p` is the buffer's position. Upon return the buffer's position
   * will be equal to `p + n`; its limit will not have changed.
   *
   *  Usage Example:
   * Suppose we want to read a file's MIME type that is stored as a user-defined
   * attribute with the name "`user.mimetype`".
   *      *    UserDefinedFileAttributeView view =
   *        Files.getFileAttributeView(path, UserDefinedFileAttributeView.class);
   *    String name = "user.mimetype";
   *    ByteBuffer buf = ByteBuffer.allocate(view.size(name));
   *    view.read(name, buf);
   *    buf.flip();
   *    String value = Charset.defaultCharset().decode(buf).toString();
   * 
   *
   * @param   name
   *          The attribute name
   * @param   dst
   *          The destination buffer
   *
   * @return  The number of bytes read, possibly zero
   *
   * @throws  IllegalArgumentException
   *          If the destination buffer is read-only
   * @throws  IOException
   *          If an I/O error occurs or there is insufficient space in the
   *          destination buffer for the attribute value
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, and it denies {@link
   *          RuntimePermission}`("accessUserDefinedAttributes")`
   *          or its {@link SecurityManager#checkRead(String) checkRead} method
   *          denies read access to the file.
   *
   * @see #size
  */
  read(name: string, dst: ByteBuffer): number;
  /**
   * Writes the value of a user-defined attribute from a buffer.
   *
   *  This method writes the value of the attribute from a given buffer as
   * a sequence of bytes. The size of the value to transfer is `r`,
   * where `r` is the number of bytes remaining in the buffer, that is
   * `src.remaining()`. The sequence of bytes is transferred from the
   * buffer starting at index `p`, where `p` is the buffer's
   * position. Upon return, the buffer's position will be equal to `     * p + n`, where `n` is the number of bytes transferred; its limit
   * will not have changed.
   *
   *  If an attribute of the given name already exists then its value is
   * replaced. If the attribute does not exist then it is created. If it
   * implementation specific if a test to check for the existence of the
   * attribute and the creation of attribute are atomic with respect to other
   * file system activities.
   *
   *  Where there is insufficient space to store the attribute, or the
   * attribute name or value exceed an implementation specific maximum size
   * then an `IOException` is thrown.
   *
   *  Usage Example:
   * Suppose we want to write a file's MIME type as a user-defined attribute:
   *      *    UserDefinedFileAttributeView view =
   *        Files.getFileAttributeView(path, UserDefinedFileAttributeView.class);
   *    view.write("user.mimetype", Charset.defaultCharset().encode("text/html"));
   * 
   *
   * @param   name
   *          The attribute name
   * @param   src
   *          The buffer containing the attribute value
   *
   * @return  The number of bytes written, possibly zero
   *
   * @throws  IOException
   *          If an I/O error occurs
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, and it denies {@link
   *          RuntimePermission}`("accessUserDefinedAttributes")`
   *          or its {@link SecurityManager#checkWrite(String) checkWrite}
   *          method denies write access to the file.
  */
  write(name: string, src: ByteBuffer): number;
  /**
   * Deletes a user-defined attribute.
   *
   * @param   name
   *          The attribute name
   *
   * @throws  IOException
   *          If an I/O error occurs or the attribute does not exist
   * @throws  SecurityException
   *          In the case of the default provider, a security manager is
   *          installed, and it denies {@link
   *          RuntimePermission}`("accessUserDefinedAttributes")`
   *          or its {@link SecurityManager#checkWrite(String) checkWrite}
   *          method denies write access to the file.
  */
  delete(name: string): void;
}
export class AttributeView {
  /**
   * Returns the name of the attribute view.
   *
   * @return the name of the attribute view
  */
  name(): string;
}

}
