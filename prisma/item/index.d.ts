
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Items
 * 
 */
export type Items = $Result.DefaultSelection<Prisma.$ItemsPayload>
/**
 * Model ItemStats
 * 
 */
export type ItemStats = $Result.DefaultSelection<Prisma.$ItemStatsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Items
 * const items = await prisma.items.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Items
   * const items = await prisma.items.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.items`: Exposes CRUD operations for the **Items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.items.findMany()
    * ```
    */
  get items(): Prisma.ItemsDelegate<ExtArgs>;

  /**
   * `prisma.itemStats`: Exposes CRUD operations for the **ItemStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemStats
    * const itemStats = await prisma.itemStats.findMany()
    * ```
    */
  get itemStats(): Prisma.ItemStatsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Items: 'Items',
    ItemStats: 'ItemStats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'items' | 'itemStats'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Items: {
        payload: Prisma.$ItemsPayload<ExtArgs>
        fields: Prisma.ItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          findFirst: {
            args: Prisma.ItemsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          findMany: {
            args: Prisma.ItemsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>[]
          }
          create: {
            args: Prisma.ItemsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          createMany: {
            args: Prisma.ItemsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ItemsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          update: {
            args: Prisma.ItemsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          deleteMany: {
            args: Prisma.ItemsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ItemsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ItemsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          aggregate: {
            args: Prisma.ItemsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItems>
          }
          groupBy: {
            args: Prisma.ItemsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemsCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemsCountAggregateOutputType> | number
          }
        }
      }
      ItemStats: {
        payload: Prisma.$ItemStatsPayload<ExtArgs>
        fields: Prisma.ItemStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemStatsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemStatsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemStatsPayload>
          }
          findFirst: {
            args: Prisma.ItemStatsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemStatsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemStatsPayload>
          }
          findMany: {
            args: Prisma.ItemStatsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemStatsPayload>[]
          }
          create: {
            args: Prisma.ItemStatsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemStatsPayload>
          }
          createMany: {
            args: Prisma.ItemStatsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ItemStatsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemStatsPayload>
          }
          update: {
            args: Prisma.ItemStatsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemStatsPayload>
          }
          deleteMany: {
            args: Prisma.ItemStatsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ItemStatsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ItemStatsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemStatsPayload>
          }
          aggregate: {
            args: Prisma.ItemStatsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItemStats>
          }
          groupBy: {
            args: Prisma.ItemStatsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemStatsCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemStatsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Items
   */

  export type AggregateItems = {
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  export type ItemsAvgAggregateOutputType = {
    item_code: number | null
    item_price: number | null
  }

  export type ItemsSumAggregateOutputType = {
    item_code: number | null
    item_price: number | null
  }

  export type ItemsMinAggregateOutputType = {
    item_code: number | null
    item_name: string | null
    item_price: number | null
  }

  export type ItemsMaxAggregateOutputType = {
    item_code: number | null
    item_name: string | null
    item_price: number | null
  }

  export type ItemsCountAggregateOutputType = {
    item_code: number
    item_name: number
    item_price: number
    _all: number
  }


  export type ItemsAvgAggregateInputType = {
    item_code?: true
    item_price?: true
  }

  export type ItemsSumAggregateInputType = {
    item_code?: true
    item_price?: true
  }

  export type ItemsMinAggregateInputType = {
    item_code?: true
    item_name?: true
    item_price?: true
  }

  export type ItemsMaxAggregateInputType = {
    item_code?: true
    item_name?: true
    item_price?: true
  }

  export type ItemsCountAggregateInputType = {
    item_code?: true
    item_name?: true
    item_price?: true
    _all?: true
  }

  export type ItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to aggregate.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsMaxAggregateInputType
  }

  export type GetItemsAggregateType<T extends ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems[P]>
      : GetScalarType<T[P], AggregateItems[P]>
  }




  export type ItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsWhereInput
    orderBy?: ItemsOrderByWithAggregationInput | ItemsOrderByWithAggregationInput[]
    by: ItemsScalarFieldEnum[] | ItemsScalarFieldEnum
    having?: ItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsCountAggregateInputType | true
    _avg?: ItemsAvgAggregateInputType
    _sum?: ItemsSumAggregateInputType
    _min?: ItemsMinAggregateInputType
    _max?: ItemsMaxAggregateInputType
  }

  export type ItemsGroupByOutputType = {
    item_code: number
    item_name: string
    item_price: number
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  type GetItemsGroupByPayload<T extends ItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsGroupByOutputType[P]>
        }
      >
    >


  export type ItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_code?: boolean
    item_name?: boolean
    item_price?: boolean
    item_stat?: boolean | Items$item_statArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type ItemsSelectScalar = {
    item_code?: boolean
    item_name?: boolean
    item_price?: boolean
  }


  export type ItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item_stat?: boolean | Items$item_statArgs<ExtArgs>
  }


  export type $ItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Items"
    objects: {
      item_stat: Prisma.$ItemStatsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      item_code: number
      item_name: string
      item_price: number
    }, ExtArgs["result"]["items"]>
    composites: {}
  }


  type ItemsGetPayload<S extends boolean | null | undefined | ItemsDefaultArgs> = $Result.GetResult<Prisma.$ItemsPayload, S>

  type ItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemsCountAggregateInputType | true
    }

  export interface ItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Items'], meta: { name: 'Items' } }
    /**
     * Find zero or one Items that matches the filter.
     * @param {ItemsFindUniqueArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ItemsFindUniqueArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Items that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemsFindUniqueOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemsFindFirstArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.items.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.items.findMany({ take: 10 })
     * 
     * // Only select the `item_code`
     * const itemsWithItem_codeOnly = await prisma.items.findMany({ select: { item_code: true } })
     * 
    **/
    findMany<T extends ItemsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Items.
     * @param {ItemsCreateArgs} args - Arguments to create a Items.
     * @example
     * // Create one Items
     * const Items = await prisma.items.create({
     *   data: {
     *     // ... data to create a Items
     *   }
     * })
     * 
    **/
    create<T extends ItemsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemsCreateArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Items.
     * @param {ItemsCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ItemsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Items.
     * @param {ItemsDeleteArgs} args - Arguments to delete one Items.
     * @example
     * // Delete one Items
     * const Items = await prisma.items.delete({
     *   where: {
     *     // ... filter to delete one Items
     *   }
     * })
     * 
    **/
    delete<T extends ItemsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ItemsDeleteArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Items.
     * @param {ItemsUpdateArgs} args - Arguments to update one Items.
     * @example
     * // Update one Items
     * const items = await prisma.items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemsUpdateArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Items.
     * @param {ItemsDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ItemsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Items.
     * @param {ItemsUpsertArgs} args - Arguments to update or create a Items.
     * @example
     * // Update or create a Items
     * const items = await prisma.items.upsert({
     *   create: {
     *     // ... data to create a Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items we want to update
     *   }
     * })
    **/
    upsert<T extends ItemsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ItemsUpsertArgs<ExtArgs>>
    ): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.items.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemsCountArgs>(
      args?: Subset<T, ItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemsAggregateArgs>(args: Subset<T, ItemsAggregateArgs>): Prisma.PrismaPromise<GetItemsAggregateType<T>>

    /**
     * Group by Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsGroupByArgs['orderBy'] }
        : { orderBy?: ItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Items model
   */
  readonly fields: ItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    item_stat<T extends Items$item_statArgs<ExtArgs> = {}>(args?: Subset<T, Items$item_statArgs<ExtArgs>>): Prisma__ItemStatsClient<$Result.GetResult<Prisma.$ItemStatsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Items model
   */ 
  interface ItemsFieldRefs {
    readonly item_code: FieldRef<"Items", 'Int'>
    readonly item_name: FieldRef<"Items", 'String'>
    readonly item_price: FieldRef<"Items", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Items findUnique
   */
  export type ItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items findUniqueOrThrow
   */
  export type ItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items findFirst
   */
  export type ItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items findFirstOrThrow
   */
  export type ItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items findMany
   */
  export type ItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items create
   */
  export type ItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a Items.
     */
    data: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
  }

  /**
   * Items createMany
   */
  export type ItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemsCreateManyInput | ItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Items update
   */
  export type ItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a Items.
     */
    data: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
    /**
     * Choose, which Items to update.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items updateMany
   */
  export type ItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemsWhereInput
  }

  /**
   * Items upsert
   */
  export type ItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the Items to update in case it exists.
     */
    where: ItemsWhereUniqueInput
    /**
     * In case the Items found by the `where` argument doesn't exist, create a new Items with this data.
     */
    create: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
    /**
     * In case the Items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
  }

  /**
   * Items delete
   */
  export type ItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter which Items to delete.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items deleteMany
   */
  export type ItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemsWhereInput
  }

  /**
   * Items.item_stat
   */
  export type Items$item_statArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStats
     */
    select?: ItemStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStatsInclude<ExtArgs> | null
    where?: ItemStatsWhereInput
  }

  /**
   * Items without action
   */
  export type ItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
  }


  /**
   * Model ItemStats
   */

  export type AggregateItemStats = {
    _count: ItemStatsCountAggregateOutputType | null
    _avg: ItemStatsAvgAggregateOutputType | null
    _sum: ItemStatsSumAggregateOutputType | null
    _min: ItemStatsMinAggregateOutputType | null
    _max: ItemStatsMaxAggregateOutputType | null
  }

  export type ItemStatsAvgAggregateOutputType = {
    itemStatId: number | null
    Item_Code: number | null
    health: number | null
    power: number | null
  }

  export type ItemStatsSumAggregateOutputType = {
    itemStatId: number | null
    Item_Code: number | null
    health: number | null
    power: number | null
  }

  export type ItemStatsMinAggregateOutputType = {
    itemStatId: number | null
    Item_Code: number | null
    health: number | null
    power: number | null
  }

  export type ItemStatsMaxAggregateOutputType = {
    itemStatId: number | null
    Item_Code: number | null
    health: number | null
    power: number | null
  }

  export type ItemStatsCountAggregateOutputType = {
    itemStatId: number
    Item_Code: number
    health: number
    power: number
    _all: number
  }


  export type ItemStatsAvgAggregateInputType = {
    itemStatId?: true
    Item_Code?: true
    health?: true
    power?: true
  }

  export type ItemStatsSumAggregateInputType = {
    itemStatId?: true
    Item_Code?: true
    health?: true
    power?: true
  }

  export type ItemStatsMinAggregateInputType = {
    itemStatId?: true
    Item_Code?: true
    health?: true
    power?: true
  }

  export type ItemStatsMaxAggregateInputType = {
    itemStatId?: true
    Item_Code?: true
    health?: true
    power?: true
  }

  export type ItemStatsCountAggregateInputType = {
    itemStatId?: true
    Item_Code?: true
    health?: true
    power?: true
    _all?: true
  }

  export type ItemStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemStats to aggregate.
     */
    where?: ItemStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemStats to fetch.
     */
    orderBy?: ItemStatsOrderByWithRelationInput | ItemStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemStats
    **/
    _count?: true | ItemStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemStatsMaxAggregateInputType
  }

  export type GetItemStatsAggregateType<T extends ItemStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateItemStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemStats[P]>
      : GetScalarType<T[P], AggregateItemStats[P]>
  }




  export type ItemStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemStatsWhereInput
    orderBy?: ItemStatsOrderByWithAggregationInput | ItemStatsOrderByWithAggregationInput[]
    by: ItemStatsScalarFieldEnum[] | ItemStatsScalarFieldEnum
    having?: ItemStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemStatsCountAggregateInputType | true
    _avg?: ItemStatsAvgAggregateInputType
    _sum?: ItemStatsSumAggregateInputType
    _min?: ItemStatsMinAggregateInputType
    _max?: ItemStatsMaxAggregateInputType
  }

  export type ItemStatsGroupByOutputType = {
    itemStatId: number
    Item_Code: number
    health: number
    power: number
    _count: ItemStatsCountAggregateOutputType | null
    _avg: ItemStatsAvgAggregateOutputType | null
    _sum: ItemStatsSumAggregateOutputType | null
    _min: ItemStatsMinAggregateOutputType | null
    _max: ItemStatsMaxAggregateOutputType | null
  }

  type GetItemStatsGroupByPayload<T extends ItemStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemStatsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemStatsGroupByOutputType[P]>
        }
      >
    >


  export type ItemStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemStatId?: boolean
    Item_Code?: boolean
    health?: boolean
    power?: boolean
    item?: boolean | ItemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemStats"]>

  export type ItemStatsSelectScalar = {
    itemStatId?: boolean
    Item_Code?: boolean
    health?: boolean
    power?: boolean
  }


  export type ItemStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemsDefaultArgs<ExtArgs>
  }


  export type $ItemStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemStats"
    objects: {
      item: Prisma.$ItemsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      itemStatId: number
      Item_Code: number
      health: number
      power: number
    }, ExtArgs["result"]["itemStats"]>
    composites: {}
  }


  type ItemStatsGetPayload<S extends boolean | null | undefined | ItemStatsDefaultArgs> = $Result.GetResult<Prisma.$ItemStatsPayload, S>

  type ItemStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemStatsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemStatsCountAggregateInputType | true
    }

  export interface ItemStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemStats'], meta: { name: 'ItemStats' } }
    /**
     * Find zero or one ItemStats that matches the filter.
     * @param {ItemStatsFindUniqueArgs} args - Arguments to find a ItemStats
     * @example
     * // Get one ItemStats
     * const itemStats = await prisma.itemStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemStatsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ItemStatsFindUniqueArgs<ExtArgs>>
    ): Prisma__ItemStatsClient<$Result.GetResult<Prisma.$ItemStatsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ItemStats that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemStatsFindUniqueOrThrowArgs} args - Arguments to find a ItemStats
     * @example
     * // Get one ItemStats
     * const itemStats = await prisma.itemStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemStatsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemStatsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ItemStatsClient<$Result.GetResult<Prisma.$ItemStatsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ItemStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemStatsFindFirstArgs} args - Arguments to find a ItemStats
     * @example
     * // Get one ItemStats
     * const itemStats = await prisma.itemStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemStatsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemStatsFindFirstArgs<ExtArgs>>
    ): Prisma__ItemStatsClient<$Result.GetResult<Prisma.$ItemStatsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ItemStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemStatsFindFirstOrThrowArgs} args - Arguments to find a ItemStats
     * @example
     * // Get one ItemStats
     * const itemStats = await prisma.itemStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemStatsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemStatsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ItemStatsClient<$Result.GetResult<Prisma.$ItemStatsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ItemStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemStats
     * const itemStats = await prisma.itemStats.findMany()
     * 
     * // Get first 10 ItemStats
     * const itemStats = await prisma.itemStats.findMany({ take: 10 })
     * 
     * // Only select the `itemStatId`
     * const itemStatsWithItemStatIdOnly = await prisma.itemStats.findMany({ select: { itemStatId: true } })
     * 
    **/
    findMany<T extends ItemStatsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemStatsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemStatsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ItemStats.
     * @param {ItemStatsCreateArgs} args - Arguments to create a ItemStats.
     * @example
     * // Create one ItemStats
     * const ItemStats = await prisma.itemStats.create({
     *   data: {
     *     // ... data to create a ItemStats
     *   }
     * })
     * 
    **/
    create<T extends ItemStatsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemStatsCreateArgs<ExtArgs>>
    ): Prisma__ItemStatsClient<$Result.GetResult<Prisma.$ItemStatsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ItemStats.
     * @param {ItemStatsCreateManyArgs} args - Arguments to create many ItemStats.
     * @example
     * // Create many ItemStats
     * const itemStats = await prisma.itemStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ItemStatsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemStatsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemStats.
     * @param {ItemStatsDeleteArgs} args - Arguments to delete one ItemStats.
     * @example
     * // Delete one ItemStats
     * const ItemStats = await prisma.itemStats.delete({
     *   where: {
     *     // ... filter to delete one ItemStats
     *   }
     * })
     * 
    **/
    delete<T extends ItemStatsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ItemStatsDeleteArgs<ExtArgs>>
    ): Prisma__ItemStatsClient<$Result.GetResult<Prisma.$ItemStatsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ItemStats.
     * @param {ItemStatsUpdateArgs} args - Arguments to update one ItemStats.
     * @example
     * // Update one ItemStats
     * const itemStats = await prisma.itemStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemStatsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemStatsUpdateArgs<ExtArgs>>
    ): Prisma__ItemStatsClient<$Result.GetResult<Prisma.$ItemStatsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ItemStats.
     * @param {ItemStatsDeleteManyArgs} args - Arguments to filter ItemStats to delete.
     * @example
     * // Delete a few ItemStats
     * const { count } = await prisma.itemStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemStatsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemStatsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemStats
     * const itemStats = await prisma.itemStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemStatsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ItemStatsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemStats.
     * @param {ItemStatsUpsertArgs} args - Arguments to update or create a ItemStats.
     * @example
     * // Update or create a ItemStats
     * const itemStats = await prisma.itemStats.upsert({
     *   create: {
     *     // ... data to create a ItemStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemStats we want to update
     *   }
     * })
    **/
    upsert<T extends ItemStatsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ItemStatsUpsertArgs<ExtArgs>>
    ): Prisma__ItemStatsClient<$Result.GetResult<Prisma.$ItemStatsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ItemStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemStatsCountArgs} args - Arguments to filter ItemStats to count.
     * @example
     * // Count the number of ItemStats
     * const count = await prisma.itemStats.count({
     *   where: {
     *     // ... the filter for the ItemStats we want to count
     *   }
     * })
    **/
    count<T extends ItemStatsCountArgs>(
      args?: Subset<T, ItemStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemStatsAggregateArgs>(args: Subset<T, ItemStatsAggregateArgs>): Prisma.PrismaPromise<GetItemStatsAggregateType<T>>

    /**
     * Group by ItemStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemStatsGroupByArgs['orderBy'] }
        : { orderBy?: ItemStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemStats model
   */
  readonly fields: ItemStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    item<T extends ItemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemsDefaultArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ItemStats model
   */ 
  interface ItemStatsFieldRefs {
    readonly itemStatId: FieldRef<"ItemStats", 'Int'>
    readonly Item_Code: FieldRef<"ItemStats", 'Int'>
    readonly health: FieldRef<"ItemStats", 'Int'>
    readonly power: FieldRef<"ItemStats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemStats findUnique
   */
  export type ItemStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStats
     */
    select?: ItemStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStatsInclude<ExtArgs> | null
    /**
     * Filter, which ItemStats to fetch.
     */
    where: ItemStatsWhereUniqueInput
  }

  /**
   * ItemStats findUniqueOrThrow
   */
  export type ItemStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStats
     */
    select?: ItemStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStatsInclude<ExtArgs> | null
    /**
     * Filter, which ItemStats to fetch.
     */
    where: ItemStatsWhereUniqueInput
  }

  /**
   * ItemStats findFirst
   */
  export type ItemStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStats
     */
    select?: ItemStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStatsInclude<ExtArgs> | null
    /**
     * Filter, which ItemStats to fetch.
     */
    where?: ItemStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemStats to fetch.
     */
    orderBy?: ItemStatsOrderByWithRelationInput | ItemStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemStats.
     */
    cursor?: ItemStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemStats.
     */
    distinct?: ItemStatsScalarFieldEnum | ItemStatsScalarFieldEnum[]
  }

  /**
   * ItemStats findFirstOrThrow
   */
  export type ItemStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStats
     */
    select?: ItemStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStatsInclude<ExtArgs> | null
    /**
     * Filter, which ItemStats to fetch.
     */
    where?: ItemStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemStats to fetch.
     */
    orderBy?: ItemStatsOrderByWithRelationInput | ItemStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemStats.
     */
    cursor?: ItemStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemStats.
     */
    distinct?: ItemStatsScalarFieldEnum | ItemStatsScalarFieldEnum[]
  }

  /**
   * ItemStats findMany
   */
  export type ItemStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStats
     */
    select?: ItemStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStatsInclude<ExtArgs> | null
    /**
     * Filter, which ItemStats to fetch.
     */
    where?: ItemStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemStats to fetch.
     */
    orderBy?: ItemStatsOrderByWithRelationInput | ItemStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemStats.
     */
    cursor?: ItemStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemStats.
     */
    skip?: number
    distinct?: ItemStatsScalarFieldEnum | ItemStatsScalarFieldEnum[]
  }

  /**
   * ItemStats create
   */
  export type ItemStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStats
     */
    select?: ItemStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemStats.
     */
    data: XOR<ItemStatsCreateInput, ItemStatsUncheckedCreateInput>
  }

  /**
   * ItemStats createMany
   */
  export type ItemStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemStats.
     */
    data: ItemStatsCreateManyInput | ItemStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemStats update
   */
  export type ItemStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStats
     */
    select?: ItemStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemStats.
     */
    data: XOR<ItemStatsUpdateInput, ItemStatsUncheckedUpdateInput>
    /**
     * Choose, which ItemStats to update.
     */
    where: ItemStatsWhereUniqueInput
  }

  /**
   * ItemStats updateMany
   */
  export type ItemStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemStats.
     */
    data: XOR<ItemStatsUpdateManyMutationInput, ItemStatsUncheckedUpdateManyInput>
    /**
     * Filter which ItemStats to update
     */
    where?: ItemStatsWhereInput
  }

  /**
   * ItemStats upsert
   */
  export type ItemStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStats
     */
    select?: ItemStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemStats to update in case it exists.
     */
    where: ItemStatsWhereUniqueInput
    /**
     * In case the ItemStats found by the `where` argument doesn't exist, create a new ItemStats with this data.
     */
    create: XOR<ItemStatsCreateInput, ItemStatsUncheckedCreateInput>
    /**
     * In case the ItemStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemStatsUpdateInput, ItemStatsUncheckedUpdateInput>
  }

  /**
   * ItemStats delete
   */
  export type ItemStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStats
     */
    select?: ItemStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStatsInclude<ExtArgs> | null
    /**
     * Filter which ItemStats to delete.
     */
    where: ItemStatsWhereUniqueInput
  }

  /**
   * ItemStats deleteMany
   */
  export type ItemStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemStats to delete
     */
    where?: ItemStatsWhereInput
  }

  /**
   * ItemStats without action
   */
  export type ItemStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemStats
     */
    select?: ItemStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemStatsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ItemsScalarFieldEnum: {
    item_code: 'item_code',
    item_name: 'item_name',
    item_price: 'item_price'
  };

  export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum]


  export const ItemStatsScalarFieldEnum: {
    itemStatId: 'itemStatId',
    Item_Code: 'Item_Code',
    health: 'health',
    power: 'power'
  };

  export type ItemStatsScalarFieldEnum = (typeof ItemStatsScalarFieldEnum)[keyof typeof ItemStatsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ItemsWhereInput = {
    AND?: ItemsWhereInput | ItemsWhereInput[]
    OR?: ItemsWhereInput[]
    NOT?: ItemsWhereInput | ItemsWhereInput[]
    item_code?: IntFilter<"Items"> | number
    item_name?: StringFilter<"Items"> | string
    item_price?: IntFilter<"Items"> | number
    item_stat?: XOR<ItemStatsNullableRelationFilter, ItemStatsWhereInput> | null
  }

  export type ItemsOrderByWithRelationInput = {
    item_code?: SortOrder
    item_name?: SortOrder
    item_price?: SortOrder
    item_stat?: ItemStatsOrderByWithRelationInput
  }

  export type ItemsWhereUniqueInput = Prisma.AtLeast<{
    item_code?: number
    item_name?: string
    AND?: ItemsWhereInput | ItemsWhereInput[]
    OR?: ItemsWhereInput[]
    NOT?: ItemsWhereInput | ItemsWhereInput[]
    item_price?: IntFilter<"Items"> | number
    item_stat?: XOR<ItemStatsNullableRelationFilter, ItemStatsWhereInput> | null
  }, "item_code" | "item_name">

  export type ItemsOrderByWithAggregationInput = {
    item_code?: SortOrder
    item_name?: SortOrder
    item_price?: SortOrder
    _count?: ItemsCountOrderByAggregateInput
    _avg?: ItemsAvgOrderByAggregateInput
    _max?: ItemsMaxOrderByAggregateInput
    _min?: ItemsMinOrderByAggregateInput
    _sum?: ItemsSumOrderByAggregateInput
  }

  export type ItemsScalarWhereWithAggregatesInput = {
    AND?: ItemsScalarWhereWithAggregatesInput | ItemsScalarWhereWithAggregatesInput[]
    OR?: ItemsScalarWhereWithAggregatesInput[]
    NOT?: ItemsScalarWhereWithAggregatesInput | ItemsScalarWhereWithAggregatesInput[]
    item_code?: IntWithAggregatesFilter<"Items"> | number
    item_name?: StringWithAggregatesFilter<"Items"> | string
    item_price?: IntWithAggregatesFilter<"Items"> | number
  }

  export type ItemStatsWhereInput = {
    AND?: ItemStatsWhereInput | ItemStatsWhereInput[]
    OR?: ItemStatsWhereInput[]
    NOT?: ItemStatsWhereInput | ItemStatsWhereInput[]
    itemStatId?: IntFilter<"ItemStats"> | number
    Item_Code?: IntFilter<"ItemStats"> | number
    health?: IntFilter<"ItemStats"> | number
    power?: IntFilter<"ItemStats"> | number
    item?: XOR<ItemsRelationFilter, ItemsWhereInput>
  }

  export type ItemStatsOrderByWithRelationInput = {
    itemStatId?: SortOrder
    Item_Code?: SortOrder
    health?: SortOrder
    power?: SortOrder
    item?: ItemsOrderByWithRelationInput
  }

  export type ItemStatsWhereUniqueInput = Prisma.AtLeast<{
    itemStatId?: number
    Item_Code?: number
    AND?: ItemStatsWhereInput | ItemStatsWhereInput[]
    OR?: ItemStatsWhereInput[]
    NOT?: ItemStatsWhereInput | ItemStatsWhereInput[]
    health?: IntFilter<"ItemStats"> | number
    power?: IntFilter<"ItemStats"> | number
    item?: XOR<ItemsRelationFilter, ItemsWhereInput>
  }, "itemStatId" | "Item_Code">

  export type ItemStatsOrderByWithAggregationInput = {
    itemStatId?: SortOrder
    Item_Code?: SortOrder
    health?: SortOrder
    power?: SortOrder
    _count?: ItemStatsCountOrderByAggregateInput
    _avg?: ItemStatsAvgOrderByAggregateInput
    _max?: ItemStatsMaxOrderByAggregateInput
    _min?: ItemStatsMinOrderByAggregateInput
    _sum?: ItemStatsSumOrderByAggregateInput
  }

  export type ItemStatsScalarWhereWithAggregatesInput = {
    AND?: ItemStatsScalarWhereWithAggregatesInput | ItemStatsScalarWhereWithAggregatesInput[]
    OR?: ItemStatsScalarWhereWithAggregatesInput[]
    NOT?: ItemStatsScalarWhereWithAggregatesInput | ItemStatsScalarWhereWithAggregatesInput[]
    itemStatId?: IntWithAggregatesFilter<"ItemStats"> | number
    Item_Code?: IntWithAggregatesFilter<"ItemStats"> | number
    health?: IntWithAggregatesFilter<"ItemStats"> | number
    power?: IntWithAggregatesFilter<"ItemStats"> | number
  }

  export type ItemsCreateInput = {
    item_name: string
    item_price: number
    item_stat?: ItemStatsCreateNestedOneWithoutItemInput
  }

  export type ItemsUncheckedCreateInput = {
    item_code?: number
    item_name: string
    item_price: number
    item_stat?: ItemStatsUncheckedCreateNestedOneWithoutItemInput
  }

  export type ItemsUpdateInput = {
    item_name?: StringFieldUpdateOperationsInput | string
    item_price?: IntFieldUpdateOperationsInput | number
    item_stat?: ItemStatsUpdateOneWithoutItemNestedInput
  }

  export type ItemsUncheckedUpdateInput = {
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    item_price?: IntFieldUpdateOperationsInput | number
    item_stat?: ItemStatsUncheckedUpdateOneWithoutItemNestedInput
  }

  export type ItemsCreateManyInput = {
    item_code?: number
    item_name: string
    item_price: number
  }

  export type ItemsUpdateManyMutationInput = {
    item_name?: StringFieldUpdateOperationsInput | string
    item_price?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsUncheckedUpdateManyInput = {
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    item_price?: IntFieldUpdateOperationsInput | number
  }

  export type ItemStatsCreateInput = {
    health?: number
    power?: number
    item: ItemsCreateNestedOneWithoutItem_statInput
  }

  export type ItemStatsUncheckedCreateInput = {
    itemStatId?: number
    Item_Code: number
    health?: number
    power?: number
  }

  export type ItemStatsUpdateInput = {
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    item?: ItemsUpdateOneRequiredWithoutItem_statNestedInput
  }

  export type ItemStatsUncheckedUpdateInput = {
    itemStatId?: IntFieldUpdateOperationsInput | number
    Item_Code?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
  }

  export type ItemStatsCreateManyInput = {
    itemStatId?: number
    Item_Code: number
    health?: number
    power?: number
  }

  export type ItemStatsUpdateManyMutationInput = {
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
  }

  export type ItemStatsUncheckedUpdateManyInput = {
    itemStatId?: IntFieldUpdateOperationsInput | number
    Item_Code?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ItemStatsNullableRelationFilter = {
    is?: ItemStatsWhereInput | null
    isNot?: ItemStatsWhereInput | null
  }

  export type ItemsCountOrderByAggregateInput = {
    item_code?: SortOrder
    item_name?: SortOrder
    item_price?: SortOrder
  }

  export type ItemsAvgOrderByAggregateInput = {
    item_code?: SortOrder
    item_price?: SortOrder
  }

  export type ItemsMaxOrderByAggregateInput = {
    item_code?: SortOrder
    item_name?: SortOrder
    item_price?: SortOrder
  }

  export type ItemsMinOrderByAggregateInput = {
    item_code?: SortOrder
    item_name?: SortOrder
    item_price?: SortOrder
  }

  export type ItemsSumOrderByAggregateInput = {
    item_code?: SortOrder
    item_price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ItemsRelationFilter = {
    is?: ItemsWhereInput
    isNot?: ItemsWhereInput
  }

  export type ItemStatsCountOrderByAggregateInput = {
    itemStatId?: SortOrder
    Item_Code?: SortOrder
    health?: SortOrder
    power?: SortOrder
  }

  export type ItemStatsAvgOrderByAggregateInput = {
    itemStatId?: SortOrder
    Item_Code?: SortOrder
    health?: SortOrder
    power?: SortOrder
  }

  export type ItemStatsMaxOrderByAggregateInput = {
    itemStatId?: SortOrder
    Item_Code?: SortOrder
    health?: SortOrder
    power?: SortOrder
  }

  export type ItemStatsMinOrderByAggregateInput = {
    itemStatId?: SortOrder
    Item_Code?: SortOrder
    health?: SortOrder
    power?: SortOrder
  }

  export type ItemStatsSumOrderByAggregateInput = {
    itemStatId?: SortOrder
    Item_Code?: SortOrder
    health?: SortOrder
    power?: SortOrder
  }

  export type ItemStatsCreateNestedOneWithoutItemInput = {
    create?: XOR<ItemStatsCreateWithoutItemInput, ItemStatsUncheckedCreateWithoutItemInput>
    connectOrCreate?: ItemStatsCreateOrConnectWithoutItemInput
    connect?: ItemStatsWhereUniqueInput
  }

  export type ItemStatsUncheckedCreateNestedOneWithoutItemInput = {
    create?: XOR<ItemStatsCreateWithoutItemInput, ItemStatsUncheckedCreateWithoutItemInput>
    connectOrCreate?: ItemStatsCreateOrConnectWithoutItemInput
    connect?: ItemStatsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemStatsUpdateOneWithoutItemNestedInput = {
    create?: XOR<ItemStatsCreateWithoutItemInput, ItemStatsUncheckedCreateWithoutItemInput>
    connectOrCreate?: ItemStatsCreateOrConnectWithoutItemInput
    upsert?: ItemStatsUpsertWithoutItemInput
    disconnect?: ItemStatsWhereInput | boolean
    delete?: ItemStatsWhereInput | boolean
    connect?: ItemStatsWhereUniqueInput
    update?: XOR<XOR<ItemStatsUpdateToOneWithWhereWithoutItemInput, ItemStatsUpdateWithoutItemInput>, ItemStatsUncheckedUpdateWithoutItemInput>
  }

  export type ItemStatsUncheckedUpdateOneWithoutItemNestedInput = {
    create?: XOR<ItemStatsCreateWithoutItemInput, ItemStatsUncheckedCreateWithoutItemInput>
    connectOrCreate?: ItemStatsCreateOrConnectWithoutItemInput
    upsert?: ItemStatsUpsertWithoutItemInput
    disconnect?: ItemStatsWhereInput | boolean
    delete?: ItemStatsWhereInput | boolean
    connect?: ItemStatsWhereUniqueInput
    update?: XOR<XOR<ItemStatsUpdateToOneWithWhereWithoutItemInput, ItemStatsUpdateWithoutItemInput>, ItemStatsUncheckedUpdateWithoutItemInput>
  }

  export type ItemsCreateNestedOneWithoutItem_statInput = {
    create?: XOR<ItemsCreateWithoutItem_statInput, ItemsUncheckedCreateWithoutItem_statInput>
    connectOrCreate?: ItemsCreateOrConnectWithoutItem_statInput
    connect?: ItemsWhereUniqueInput
  }

  export type ItemsUpdateOneRequiredWithoutItem_statNestedInput = {
    create?: XOR<ItemsCreateWithoutItem_statInput, ItemsUncheckedCreateWithoutItem_statInput>
    connectOrCreate?: ItemsCreateOrConnectWithoutItem_statInput
    upsert?: ItemsUpsertWithoutItem_statInput
    connect?: ItemsWhereUniqueInput
    update?: XOR<XOR<ItemsUpdateToOneWithWhereWithoutItem_statInput, ItemsUpdateWithoutItem_statInput>, ItemsUncheckedUpdateWithoutItem_statInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ItemStatsCreateWithoutItemInput = {
    health?: number
    power?: number
  }

  export type ItemStatsUncheckedCreateWithoutItemInput = {
    itemStatId?: number
    health?: number
    power?: number
  }

  export type ItemStatsCreateOrConnectWithoutItemInput = {
    where: ItemStatsWhereUniqueInput
    create: XOR<ItemStatsCreateWithoutItemInput, ItemStatsUncheckedCreateWithoutItemInput>
  }

  export type ItemStatsUpsertWithoutItemInput = {
    update: XOR<ItemStatsUpdateWithoutItemInput, ItemStatsUncheckedUpdateWithoutItemInput>
    create: XOR<ItemStatsCreateWithoutItemInput, ItemStatsUncheckedCreateWithoutItemInput>
    where?: ItemStatsWhereInput
  }

  export type ItemStatsUpdateToOneWithWhereWithoutItemInput = {
    where?: ItemStatsWhereInput
    data: XOR<ItemStatsUpdateWithoutItemInput, ItemStatsUncheckedUpdateWithoutItemInput>
  }

  export type ItemStatsUpdateWithoutItemInput = {
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
  }

  export type ItemStatsUncheckedUpdateWithoutItemInput = {
    itemStatId?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsCreateWithoutItem_statInput = {
    item_name: string
    item_price: number
  }

  export type ItemsUncheckedCreateWithoutItem_statInput = {
    item_code?: number
    item_name: string
    item_price: number
  }

  export type ItemsCreateOrConnectWithoutItem_statInput = {
    where: ItemsWhereUniqueInput
    create: XOR<ItemsCreateWithoutItem_statInput, ItemsUncheckedCreateWithoutItem_statInput>
  }

  export type ItemsUpsertWithoutItem_statInput = {
    update: XOR<ItemsUpdateWithoutItem_statInput, ItemsUncheckedUpdateWithoutItem_statInput>
    create: XOR<ItemsCreateWithoutItem_statInput, ItemsUncheckedCreateWithoutItem_statInput>
    where?: ItemsWhereInput
  }

  export type ItemsUpdateToOneWithWhereWithoutItem_statInput = {
    where?: ItemsWhereInput
    data: XOR<ItemsUpdateWithoutItem_statInput, ItemsUncheckedUpdateWithoutItem_statInput>
  }

  export type ItemsUpdateWithoutItem_statInput = {
    item_name?: StringFieldUpdateOperationsInput | string
    item_price?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsUncheckedUpdateWithoutItem_statInput = {
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    item_price?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ItemsDefaultArgs instead
     */
    export type ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemStatsDefaultArgs instead
     */
    export type ItemStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemStatsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}