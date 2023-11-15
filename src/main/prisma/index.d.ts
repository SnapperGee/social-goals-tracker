
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model friends
 * 
 */
export type friends = $Result.DefaultSelection<Prisma.$friendsPayload>
/**
 * Model goal
 * 
 */
export type goal = $Result.DefaultSelection<Prisma.$goalPayload>
/**
 * Model milestone
 * 
 */
export type milestone = $Result.DefaultSelection<Prisma.$milestonePayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Friends
 * const friends = await prisma.friends.findMany()
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
   * // Fetch zero or more Friends
   * const friends = await prisma.friends.findMany()
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
   * `prisma.friends`: Exposes CRUD operations for the **friends** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friends.findMany()
    * ```
    */
  get friends(): Prisma.friendsDelegate<ExtArgs>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.goalDelegate<ExtArgs>;

  /**
   * `prisma.milestone`: Exposes CRUD operations for the **milestone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Milestones
    * const milestones = await prisma.milestone.findMany()
    * ```
    */
  get milestone(): Prisma.milestoneDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
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
    friends: 'friends',
    goal: 'goal',
    milestone: 'milestone',
    user: 'user'
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
      modelProps: 'friends' | 'goal' | 'milestone' | 'user'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      friends: {
        payload: Prisma.$friendsPayload<ExtArgs>
        fields: Prisma.friendsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.friendsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.friendsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          findFirst: {
            args: Prisma.friendsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.friendsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          findMany: {
            args: Prisma.friendsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>[]
          }
          create: {
            args: Prisma.friendsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          createMany: {
            args: Prisma.friendsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.friendsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          update: {
            args: Prisma.friendsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          deleteMany: {
            args: Prisma.friendsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.friendsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.friendsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          aggregate: {
            args: Prisma.FriendsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFriends>
          }
          groupBy: {
            args: Prisma.friendsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FriendsGroupByOutputType>[]
          }
          count: {
            args: Prisma.friendsCountArgs<ExtArgs>,
            result: $Utils.Optional<FriendsCountAggregateOutputType> | number
          }
        }
      }
      goal: {
        payload: Prisma.$goalPayload<ExtArgs>
        fields: Prisma.goalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.goalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.goalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goalPayload>
          }
          findFirst: {
            args: Prisma.goalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.goalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goalPayload>
          }
          findMany: {
            args: Prisma.goalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goalPayload>[]
          }
          create: {
            args: Prisma.goalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goalPayload>
          }
          createMany: {
            args: Prisma.goalCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.goalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goalPayload>
          }
          update: {
            args: Prisma.goalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goalPayload>
          }
          deleteMany: {
            args: Prisma.goalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.goalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.goalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.goalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.goalCountArgs<ExtArgs>,
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      milestone: {
        payload: Prisma.$milestonePayload<ExtArgs>
        fields: Prisma.milestoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.milestoneFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$milestonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.milestoneFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$milestonePayload>
          }
          findFirst: {
            args: Prisma.milestoneFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$milestonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.milestoneFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$milestonePayload>
          }
          findMany: {
            args: Prisma.milestoneFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$milestonePayload>[]
          }
          create: {
            args: Prisma.milestoneCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$milestonePayload>
          }
          createMany: {
            args: Prisma.milestoneCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.milestoneDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$milestonePayload>
          }
          update: {
            args: Prisma.milestoneUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$milestonePayload>
          }
          deleteMany: {
            args: Prisma.milestoneDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.milestoneUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.milestoneUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$milestonePayload>
          }
          aggregate: {
            args: Prisma.MilestoneAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMilestone>
          }
          groupBy: {
            args: Prisma.milestoneGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MilestoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.milestoneCountArgs<ExtArgs>,
            result: $Utils.Optional<MilestoneCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
   * Count Type GoalCountOutputType
   */

  export type GoalCountOutputType = {
    milestone: number
  }

  export type GoalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestone?: boolean | GoalCountOutputTypeCountMilestoneArgs
  }

  // Custom InputTypes

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCountOutputType
     */
    select?: GoalCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountMilestoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: milestoneWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    friends_friends_sourceTouser: number
    friends_friends_targetTouser: number
    goal: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends_friends_sourceTouser?: boolean | UserCountOutputTypeCountFriends_friends_sourceTouserArgs
    friends_friends_targetTouser?: boolean | UserCountOutputTypeCountFriends_friends_targetTouserArgs
    goal?: boolean | UserCountOutputTypeCountGoalArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriends_friends_sourceTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriends_friends_targetTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goalWhereInput
  }



  /**
   * Models
   */

  /**
   * Model friends
   */

  export type AggregateFriends = {
    _count: FriendsCountAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  export type FriendsMinAggregateOutputType = {
    source: string | null
    target: string | null
  }

  export type FriendsMaxAggregateOutputType = {
    source: string | null
    target: string | null
  }

  export type FriendsCountAggregateOutputType = {
    source: number
    target: number
    _all: number
  }


  export type FriendsMinAggregateInputType = {
    source?: true
    target?: true
  }

  export type FriendsMaxAggregateInputType = {
    source?: true
    target?: true
  }

  export type FriendsCountAggregateInputType = {
    source?: true
    target?: true
    _all?: true
  }

  export type FriendsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friends to aggregate.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned friends
    **/
    _count?: true | FriendsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendsMaxAggregateInputType
  }

  export type GetFriendsAggregateType<T extends FriendsAggregateArgs> = {
        [P in keyof T & keyof AggregateFriends]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriends[P]>
      : GetScalarType<T[P], AggregateFriends[P]>
  }




  export type friendsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendsWhereInput
    orderBy?: friendsOrderByWithAggregationInput | friendsOrderByWithAggregationInput[]
    by: FriendsScalarFieldEnum[] | FriendsScalarFieldEnum
    having?: friendsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendsCountAggregateInputType | true
    _min?: FriendsMinAggregateInputType
    _max?: FriendsMaxAggregateInputType
  }

  export type FriendsGroupByOutputType = {
    source: string
    target: string
    _count: FriendsCountAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  type GetFriendsGroupByPayload<T extends friendsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendsGroupByOutputType[P]>
            : GetScalarType<T[P], FriendsGroupByOutputType[P]>
        }
      >
    >


  export type friendsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    source?: boolean
    target?: boolean
    user_friends_sourceTouser?: boolean | userDefaultArgs<ExtArgs>
    user_friends_targetTouser?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type friendsSelectScalar = {
    source?: boolean
    target?: boolean
  }

  export type friendsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_friends_sourceTouser?: boolean | userDefaultArgs<ExtArgs>
    user_friends_targetTouser?: boolean | userDefaultArgs<ExtArgs>
  }


  export type $friendsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "friends"
    objects: {
      user_friends_sourceTouser: Prisma.$userPayload<ExtArgs>
      user_friends_targetTouser: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      source: string
      target: string
    }, ExtArgs["result"]["friends"]>
    composites: {}
  }


  type friendsGetPayload<S extends boolean | null | undefined | friendsDefaultArgs> = $Result.GetResult<Prisma.$friendsPayload, S>

  type friendsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<friendsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FriendsCountAggregateInputType | true
    }

  export interface friendsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['friends'], meta: { name: 'friends' } }
    /**
     * Find zero or one Friends that matches the filter.
     * @param {friendsFindUniqueArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends friendsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, friendsFindUniqueArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Friends that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {friendsFindUniqueOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends friendsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, friendsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindFirstArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends friendsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, friendsFindFirstArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Friends that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindFirstOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends friendsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, friendsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friends.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friends.findMany({ take: 10 })
     * 
     * // Only select the `source`
     * const friendsWithSourceOnly = await prisma.friends.findMany({ select: { source: true } })
     * 
    **/
    findMany<T extends friendsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, friendsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Friends.
     * @param {friendsCreateArgs} args - Arguments to create a Friends.
     * @example
     * // Create one Friends
     * const Friends = await prisma.friends.create({
     *   data: {
     *     // ... data to create a Friends
     *   }
     * })
     * 
    **/
    create<T extends friendsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, friendsCreateArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Friends.
     *     @param {friendsCreateManyArgs} args - Arguments to create many Friends.
     *     @example
     *     // Create many Friends
     *     const friends = await prisma.friends.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends friendsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, friendsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Friends.
     * @param {friendsDeleteArgs} args - Arguments to delete one Friends.
     * @example
     * // Delete one Friends
     * const Friends = await prisma.friends.delete({
     *   where: {
     *     // ... filter to delete one Friends
     *   }
     * })
     * 
    **/
    delete<T extends friendsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, friendsDeleteArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Friends.
     * @param {friendsUpdateArgs} args - Arguments to update one Friends.
     * @example
     * // Update one Friends
     * const friends = await prisma.friends.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends friendsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, friendsUpdateArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Friends.
     * @param {friendsDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friends.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends friendsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, friendsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friends = await prisma.friends.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends friendsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, friendsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Friends.
     * @param {friendsUpsertArgs} args - Arguments to update or create a Friends.
     * @example
     * // Update or create a Friends
     * const friends = await prisma.friends.upsert({
     *   create: {
     *     // ... data to create a Friends
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friends we want to update
     *   }
     * })
    **/
    upsert<T extends friendsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, friendsUpsertArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friends.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends friendsCountArgs>(
      args?: Subset<T, friendsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendsAggregateArgs>(args: Subset<T, FriendsAggregateArgs>): Prisma.PrismaPromise<GetFriendsAggregateType<T>>

    /**
     * Group by Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsGroupByArgs} args - Group by arguments.
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
      T extends friendsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: friendsGroupByArgs['orderBy'] }
        : { orderBy?: friendsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, friendsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the friends model
   */
  readonly fields: friendsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for friends.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__friendsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_friends_sourceTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user_friends_targetTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the friends model
   */ 
  interface friendsFieldRefs {
    readonly source: FieldRef<"friends", 'String'>
    readonly target: FieldRef<"friends", 'String'>
  }
    

  // Custom InputTypes

  /**
   * friends findUnique
   */
  export type friendsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where: friendsWhereUniqueInput
  }


  /**
   * friends findUniqueOrThrow
   */
  export type friendsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where: friendsWhereUniqueInput
  }


  /**
   * friends findFirst
   */
  export type friendsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friends.
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }


  /**
   * friends findFirstOrThrow
   */
  export type friendsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friends.
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }


  /**
   * friends findMany
   */
  export type friendsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing friends.
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }


  /**
   * friends create
   */
  export type friendsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * The data needed to create a friends.
     */
    data: XOR<friendsCreateInput, friendsUncheckedCreateInput>
  }


  /**
   * friends createMany
   */
  export type friendsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many friends.
     */
    data: friendsCreateManyInput | friendsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * friends update
   */
  export type friendsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * The data needed to update a friends.
     */
    data: XOR<friendsUpdateInput, friendsUncheckedUpdateInput>
    /**
     * Choose, which friends to update.
     */
    where: friendsWhereUniqueInput
  }


  /**
   * friends updateMany
   */
  export type friendsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update friends.
     */
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyInput>
    /**
     * Filter which friends to update
     */
    where?: friendsWhereInput
  }


  /**
   * friends upsert
   */
  export type friendsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * The filter to search for the friends to update in case it exists.
     */
    where: friendsWhereUniqueInput
    /**
     * In case the friends found by the `where` argument doesn't exist, create a new friends with this data.
     */
    create: XOR<friendsCreateInput, friendsUncheckedCreateInput>
    /**
     * In case the friends was found with the provided `where` argument, update it with this data.
     */
    update: XOR<friendsUpdateInput, friendsUncheckedUpdateInput>
  }


  /**
   * friends delete
   */
  export type friendsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter which friends to delete.
     */
    where: friendsWhereUniqueInput
  }


  /**
   * friends deleteMany
   */
  export type friendsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friends to delete
     */
    where?: friendsWhereInput
  }


  /**
   * friends without action
   */
  export type friendsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
  }



  /**
   * Model goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    private: boolean | null
    user_id: string | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    private: boolean | null
    user_id: string | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    title: number
    description: number
    private: number
    user_id: number
    _all: number
  }


  export type GoalMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    private?: true
    user_id?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    private?: true
    user_id?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    private?: true
    user_id?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goal to aggregate.
     */
    where?: goalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: goalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type goalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goalWhereInput
    orderBy?: goalOrderByWithAggregationInput | goalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: goalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    title: string
    description: string | null
    private: boolean
    user_id: string
    _count: GoalCountAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends goalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type goalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    private?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    milestone?: boolean | goal$milestoneArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type goalSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    private?: boolean
    user_id?: boolean
  }

  export type goalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    milestone?: boolean | goal$milestoneArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $goalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "goal"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      milestone: Prisma.$milestonePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      private: boolean
      user_id: string
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }


  type goalGetPayload<S extends boolean | null | undefined | goalDefaultArgs> = $Result.GetResult<Prisma.$goalPayload, S>

  type goalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<goalFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: GoalCountAggregateInputType | true
    }

  export interface goalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['goal'], meta: { name: 'goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {goalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends goalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, goalFindUniqueArgs<ExtArgs>>
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Goal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {goalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends goalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, goalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends goalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, goalFindFirstArgs<ExtArgs>>
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends goalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, goalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends goalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, goalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Goal.
     * @param {goalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
    **/
    create<T extends goalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, goalCreateArgs<ExtArgs>>
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Goals.
     *     @param {goalCreateManyArgs} args - Arguments to create many Goals.
     *     @example
     *     // Create many Goals
     *     const goal = await prisma.goal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends goalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, goalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Goal.
     * @param {goalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
    **/
    delete<T extends goalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, goalDeleteArgs<ExtArgs>>
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Goal.
     * @param {goalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends goalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, goalUpdateArgs<ExtArgs>>
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Goals.
     * @param {goalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends goalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, goalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends goalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, goalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Goal.
     * @param {goalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
    **/
    upsert<T extends goalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, goalUpsertArgs<ExtArgs>>
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends goalCountArgs>(
      args?: Subset<T, goalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalGroupByArgs} args - Group by arguments.
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
      T extends goalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: goalGroupByArgs['orderBy'] }
        : { orderBy?: goalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, goalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the goal model
   */
  readonly fields: goalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__goalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    milestone<T extends goal$milestoneArgs<ExtArgs> = {}>(args?: Subset<T, goal$milestoneArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$milestonePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the goal model
   */ 
  interface goalFieldRefs {
    readonly id: FieldRef<"goal", 'String'>
    readonly title: FieldRef<"goal", 'String'>
    readonly description: FieldRef<"goal", 'String'>
    readonly private: FieldRef<"goal", 'Boolean'>
    readonly user_id: FieldRef<"goal", 'String'>
  }
    

  // Custom InputTypes

  /**
   * goal findUnique
   */
  export type goalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * Filter, which goal to fetch.
     */
    where: goalWhereUniqueInput
  }


  /**
   * goal findUniqueOrThrow
   */
  export type goalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * Filter, which goal to fetch.
     */
    where: goalWhereUniqueInput
  }


  /**
   * goal findFirst
   */
  export type goalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * Filter, which goal to fetch.
     */
    where?: goalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goals.
     */
    cursor?: goalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }


  /**
   * goal findFirstOrThrow
   */
  export type goalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * Filter, which goal to fetch.
     */
    where?: goalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goals.
     */
    cursor?: goalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }


  /**
   * goal findMany
   */
  export type goalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * Filter, which goals to fetch.
     */
    where?: goalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing goals.
     */
    cursor?: goalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }


  /**
   * goal create
   */
  export type goalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * The data needed to create a goal.
     */
    data: XOR<goalCreateInput, goalUncheckedCreateInput>
  }


  /**
   * goal createMany
   */
  export type goalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many goals.
     */
    data: goalCreateManyInput | goalCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * goal update
   */
  export type goalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * The data needed to update a goal.
     */
    data: XOR<goalUpdateInput, goalUncheckedUpdateInput>
    /**
     * Choose, which goal to update.
     */
    where: goalWhereUniqueInput
  }


  /**
   * goal updateMany
   */
  export type goalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update goals.
     */
    data: XOR<goalUpdateManyMutationInput, goalUncheckedUpdateManyInput>
    /**
     * Filter which goals to update
     */
    where?: goalWhereInput
  }


  /**
   * goal upsert
   */
  export type goalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * The filter to search for the goal to update in case it exists.
     */
    where: goalWhereUniqueInput
    /**
     * In case the goal found by the `where` argument doesn't exist, create a new goal with this data.
     */
    create: XOR<goalCreateInput, goalUncheckedCreateInput>
    /**
     * In case the goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<goalUpdateInput, goalUncheckedUpdateInput>
  }


  /**
   * goal delete
   */
  export type goalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null
    /**
     * Filter which goal to delete.
     */
    where: goalWhereUniqueInput
  }


  /**
   * goal deleteMany
   */
  export type goalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goals to delete
     */
    where?: goalWhereInput
  }


  /**
   * goal.milestone
   */
  export type goal$milestoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestone
     */
    select?: milestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: milestoneInclude<ExtArgs> | null
    where?: milestoneWhereInput
    orderBy?: milestoneOrderByWithRelationInput | milestoneOrderByWithRelationInput[]
    cursor?: milestoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }


  /**
   * goal without action
   */
  export type goalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null
  }



  /**
   * Model milestone
   */

  export type AggregateMilestone = {
    _count: MilestoneCountAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  export type MilestoneMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    goal_id: string | null
  }

  export type MilestoneMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    goal_id: string | null
  }

  export type MilestoneCountAggregateOutputType = {
    id: number
    title: number
    description: number
    goal_id: number
    _all: number
  }


  export type MilestoneMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    goal_id?: true
  }

  export type MilestoneMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    goal_id?: true
  }

  export type MilestoneCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    goal_id?: true
    _all?: true
  }

  export type MilestoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which milestone to aggregate.
     */
    where?: milestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of milestones to fetch.
     */
    orderBy?: milestoneOrderByWithRelationInput | milestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: milestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned milestones
    **/
    _count?: true | MilestoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestoneMaxAggregateInputType
  }

  export type GetMilestoneAggregateType<T extends MilestoneAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestone[P]>
      : GetScalarType<T[P], AggregateMilestone[P]>
  }




  export type milestoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: milestoneWhereInput
    orderBy?: milestoneOrderByWithAggregationInput | milestoneOrderByWithAggregationInput[]
    by: MilestoneScalarFieldEnum[] | MilestoneScalarFieldEnum
    having?: milestoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestoneCountAggregateInputType | true
    _min?: MilestoneMinAggregateInputType
    _max?: MilestoneMaxAggregateInputType
  }

  export type MilestoneGroupByOutputType = {
    id: string
    title: string
    description: string | null
    goal_id: string
    _count: MilestoneCountAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  type GetMilestoneGroupByPayload<T extends milestoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilestoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
            : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
        }
      >
    >


  export type milestoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    goal_id?: boolean
    goal?: boolean | goalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type milestoneSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    goal_id?: boolean
  }

  export type milestoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | goalDefaultArgs<ExtArgs>
  }


  export type $milestonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "milestone"
    objects: {
      goal: Prisma.$goalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      goal_id: string
    }, ExtArgs["result"]["milestone"]>
    composites: {}
  }


  type milestoneGetPayload<S extends boolean | null | undefined | milestoneDefaultArgs> = $Result.GetResult<Prisma.$milestonePayload, S>

  type milestoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<milestoneFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MilestoneCountAggregateInputType | true
    }

  export interface milestoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['milestone'], meta: { name: 'milestone' } }
    /**
     * Find zero or one Milestone that matches the filter.
     * @param {milestoneFindUniqueArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends milestoneFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, milestoneFindUniqueArgs<ExtArgs>>
    ): Prisma__milestoneClient<$Result.GetResult<Prisma.$milestonePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Milestone that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {milestoneFindUniqueOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends milestoneFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, milestoneFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__milestoneClient<$Result.GetResult<Prisma.$milestonePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Milestone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestoneFindFirstArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends milestoneFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, milestoneFindFirstArgs<ExtArgs>>
    ): Prisma__milestoneClient<$Result.GetResult<Prisma.$milestonePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Milestone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestoneFindFirstOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends milestoneFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, milestoneFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__milestoneClient<$Result.GetResult<Prisma.$milestonePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestoneFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milestones
     * const milestones = await prisma.milestone.findMany()
     * 
     * // Get first 10 Milestones
     * const milestones = await prisma.milestone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestoneWithIdOnly = await prisma.milestone.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends milestoneFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, milestoneFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$milestonePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Milestone.
     * @param {milestoneCreateArgs} args - Arguments to create a Milestone.
     * @example
     * // Create one Milestone
     * const Milestone = await prisma.milestone.create({
     *   data: {
     *     // ... data to create a Milestone
     *   }
     * })
     * 
    **/
    create<T extends milestoneCreateArgs<ExtArgs>>(
      args: SelectSubset<T, milestoneCreateArgs<ExtArgs>>
    ): Prisma__milestoneClient<$Result.GetResult<Prisma.$milestonePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Milestones.
     *     @param {milestoneCreateManyArgs} args - Arguments to create many Milestones.
     *     @example
     *     // Create many Milestones
     *     const milestone = await prisma.milestone.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends milestoneCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, milestoneCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Milestone.
     * @param {milestoneDeleteArgs} args - Arguments to delete one Milestone.
     * @example
     * // Delete one Milestone
     * const Milestone = await prisma.milestone.delete({
     *   where: {
     *     // ... filter to delete one Milestone
     *   }
     * })
     * 
    **/
    delete<T extends milestoneDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, milestoneDeleteArgs<ExtArgs>>
    ): Prisma__milestoneClient<$Result.GetResult<Prisma.$milestonePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Milestone.
     * @param {milestoneUpdateArgs} args - Arguments to update one Milestone.
     * @example
     * // Update one Milestone
     * const milestone = await prisma.milestone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends milestoneUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, milestoneUpdateArgs<ExtArgs>>
    ): Prisma__milestoneClient<$Result.GetResult<Prisma.$milestonePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Milestones.
     * @param {milestoneDeleteManyArgs} args - Arguments to filter Milestones to delete.
     * @example
     * // Delete a few Milestones
     * const { count } = await prisma.milestone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends milestoneDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, milestoneDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends milestoneUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, milestoneUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Milestone.
     * @param {milestoneUpsertArgs} args - Arguments to update or create a Milestone.
     * @example
     * // Update or create a Milestone
     * const milestone = await prisma.milestone.upsert({
     *   create: {
     *     // ... data to create a Milestone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milestone we want to update
     *   }
     * })
    **/
    upsert<T extends milestoneUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, milestoneUpsertArgs<ExtArgs>>
    ): Prisma__milestoneClient<$Result.GetResult<Prisma.$milestonePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestoneCountArgs} args - Arguments to filter Milestones to count.
     * @example
     * // Count the number of Milestones
     * const count = await prisma.milestone.count({
     *   where: {
     *     // ... the filter for the Milestones we want to count
     *   }
     * })
    **/
    count<T extends milestoneCountArgs>(
      args?: Subset<T, milestoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MilestoneAggregateArgs>(args: Subset<T, MilestoneAggregateArgs>): Prisma.PrismaPromise<GetMilestoneAggregateType<T>>

    /**
     * Group by Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestoneGroupByArgs} args - Group by arguments.
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
      T extends milestoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: milestoneGroupByArgs['orderBy'] }
        : { orderBy?: milestoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, milestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the milestone model
   */
  readonly fields: milestoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for milestone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__milestoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    goal<T extends goalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, goalDefaultArgs<ExtArgs>>): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the milestone model
   */ 
  interface milestoneFieldRefs {
    readonly id: FieldRef<"milestone", 'String'>
    readonly title: FieldRef<"milestone", 'String'>
    readonly description: FieldRef<"milestone", 'String'>
    readonly goal_id: FieldRef<"milestone", 'String'>
  }
    

  // Custom InputTypes

  /**
   * milestone findUnique
   */
  export type milestoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestone
     */
    select?: milestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: milestoneInclude<ExtArgs> | null
    /**
     * Filter, which milestone to fetch.
     */
    where: milestoneWhereUniqueInput
  }


  /**
   * milestone findUniqueOrThrow
   */
  export type milestoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestone
     */
    select?: milestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: milestoneInclude<ExtArgs> | null
    /**
     * Filter, which milestone to fetch.
     */
    where: milestoneWhereUniqueInput
  }


  /**
   * milestone findFirst
   */
  export type milestoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestone
     */
    select?: milestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: milestoneInclude<ExtArgs> | null
    /**
     * Filter, which milestone to fetch.
     */
    where?: milestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of milestones to fetch.
     */
    orderBy?: milestoneOrderByWithRelationInput | milestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for milestones.
     */
    cursor?: milestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }


  /**
   * milestone findFirstOrThrow
   */
  export type milestoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestone
     */
    select?: milestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: milestoneInclude<ExtArgs> | null
    /**
     * Filter, which milestone to fetch.
     */
    where?: milestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of milestones to fetch.
     */
    orderBy?: milestoneOrderByWithRelationInput | milestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for milestones.
     */
    cursor?: milestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }


  /**
   * milestone findMany
   */
  export type milestoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestone
     */
    select?: milestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: milestoneInclude<ExtArgs> | null
    /**
     * Filter, which milestones to fetch.
     */
    where?: milestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of milestones to fetch.
     */
    orderBy?: milestoneOrderByWithRelationInput | milestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing milestones.
     */
    cursor?: milestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` milestones.
     */
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }


  /**
   * milestone create
   */
  export type milestoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestone
     */
    select?: milestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: milestoneInclude<ExtArgs> | null
    /**
     * The data needed to create a milestone.
     */
    data: XOR<milestoneCreateInput, milestoneUncheckedCreateInput>
  }


  /**
   * milestone createMany
   */
  export type milestoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many milestones.
     */
    data: milestoneCreateManyInput | milestoneCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * milestone update
   */
  export type milestoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestone
     */
    select?: milestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: milestoneInclude<ExtArgs> | null
    /**
     * The data needed to update a milestone.
     */
    data: XOR<milestoneUpdateInput, milestoneUncheckedUpdateInput>
    /**
     * Choose, which milestone to update.
     */
    where: milestoneWhereUniqueInput
  }


  /**
   * milestone updateMany
   */
  export type milestoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update milestones.
     */
    data: XOR<milestoneUpdateManyMutationInput, milestoneUncheckedUpdateManyInput>
    /**
     * Filter which milestones to update
     */
    where?: milestoneWhereInput
  }


  /**
   * milestone upsert
   */
  export type milestoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestone
     */
    select?: milestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: milestoneInclude<ExtArgs> | null
    /**
     * The filter to search for the milestone to update in case it exists.
     */
    where: milestoneWhereUniqueInput
    /**
     * In case the milestone found by the `where` argument doesn't exist, create a new milestone with this data.
     */
    create: XOR<milestoneCreateInput, milestoneUncheckedCreateInput>
    /**
     * In case the milestone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<milestoneUpdateInput, milestoneUncheckedUpdateInput>
  }


  /**
   * milestone delete
   */
  export type milestoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestone
     */
    select?: milestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: milestoneInclude<ExtArgs> | null
    /**
     * Filter which milestone to delete.
     */
    where: milestoneWhereUniqueInput
  }


  /**
   * milestone deleteMany
   */
  export type milestoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which milestones to delete
     */
    where?: milestoneWhereInput
  }


  /**
   * milestone without action
   */
  export type milestoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestone
     */
    select?: milestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: milestoneInclude<ExtArgs> | null
  }



  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    friends_friends_sourceTouser?: boolean | user$friends_friends_sourceTouserArgs<ExtArgs>
    friends_friends_targetTouser?: boolean | user$friends_friends_targetTouserArgs<ExtArgs>
    goal?: boolean | user$goalArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
  }

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends_friends_sourceTouser?: boolean | user$friends_friends_sourceTouserArgs<ExtArgs>
    friends_friends_targetTouser?: boolean | user$friends_friends_targetTouserArgs<ExtArgs>
    goal?: boolean | user$goalArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      friends_friends_sourceTouser: Prisma.$friendsPayload<ExtArgs>[]
      friends_friends_targetTouser: Prisma.$friendsPayload<ExtArgs>[]
      goal: Prisma.$goalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    friends_friends_sourceTouser<T extends user$friends_friends_sourceTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$friends_friends_sourceTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'findMany'> | Null>;

    friends_friends_targetTouser<T extends user$friends_friends_targetTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$friends_friends_targetTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'findMany'> | Null>;

    goal<T extends user$goalArgs<ExtArgs> = {}>(args?: Subset<T, user$goalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user.friends_friends_sourceTouser
   */
  export type user$friends_friends_sourceTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    where?: friendsWhereInput
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    cursor?: friendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }


  /**
   * user.friends_friends_targetTouser
   */
  export type user$friends_friends_targetTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    where?: friendsWhereInput
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    cursor?: friendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }


  /**
   * user.goal
   */
  export type user$goalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null
    where?: goalWhereInput
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[]
    cursor?: goalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }


  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
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


  export const FriendsScalarFieldEnum: {
    source: 'source',
    target: 'target'
  };

  export type FriendsScalarFieldEnum = (typeof FriendsScalarFieldEnum)[keyof typeof FriendsScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    private: 'private',
    user_id: 'user_id'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const MilestoneScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    goal_id: 'goal_id'
  };

  export type MilestoneScalarFieldEnum = (typeof MilestoneScalarFieldEnum)[keyof typeof MilestoneScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type friendsWhereInput = {
    AND?: friendsWhereInput | friendsWhereInput[]
    OR?: friendsWhereInput[]
    NOT?: friendsWhereInput | friendsWhereInput[]
    source?: StringFilter<"friends"> | string
    target?: StringFilter<"friends"> | string
    user_friends_sourceTouser?: XOR<UserRelationFilter, userWhereInput>
    user_friends_targetTouser?: XOR<UserRelationFilter, userWhereInput>
  }

  export type friendsOrderByWithRelationInput = {
    source?: SortOrder
    target?: SortOrder
    user_friends_sourceTouser?: userOrderByWithRelationInput
    user_friends_targetTouser?: userOrderByWithRelationInput
  }

  export type friendsWhereUniqueInput = Prisma.AtLeast<{
    source_target?: friendsSourceTargetCompoundUniqueInput
    AND?: friendsWhereInput | friendsWhereInput[]
    OR?: friendsWhereInput[]
    NOT?: friendsWhereInput | friendsWhereInput[]
    source?: StringFilter<"friends"> | string
    target?: StringFilter<"friends"> | string
    user_friends_sourceTouser?: XOR<UserRelationFilter, userWhereInput>
    user_friends_targetTouser?: XOR<UserRelationFilter, userWhereInput>
  }, "source_target">

  export type friendsOrderByWithAggregationInput = {
    source?: SortOrder
    target?: SortOrder
    _count?: friendsCountOrderByAggregateInput
    _max?: friendsMaxOrderByAggregateInput
    _min?: friendsMinOrderByAggregateInput
  }

  export type friendsScalarWhereWithAggregatesInput = {
    AND?: friendsScalarWhereWithAggregatesInput | friendsScalarWhereWithAggregatesInput[]
    OR?: friendsScalarWhereWithAggregatesInput[]
    NOT?: friendsScalarWhereWithAggregatesInput | friendsScalarWhereWithAggregatesInput[]
    source?: StringWithAggregatesFilter<"friends"> | string
    target?: StringWithAggregatesFilter<"friends"> | string
  }

  export type goalWhereInput = {
    AND?: goalWhereInput | goalWhereInput[]
    OR?: goalWhereInput[]
    NOT?: goalWhereInput | goalWhereInput[]
    id?: StringFilter<"goal"> | string
    title?: StringFilter<"goal"> | string
    description?: StringNullableFilter<"goal"> | string | null
    private?: BoolFilter<"goal"> | boolean
    user_id?: StringFilter<"goal"> | string
    user?: XOR<UserRelationFilter, userWhereInput>
    milestone?: MilestoneListRelationFilter
  }

  export type goalOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    private?: SortOrder
    user_id?: SortOrder
    user?: userOrderByWithRelationInput
    milestone?: milestoneOrderByRelationAggregateInput
  }

  export type goalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: goalWhereInput | goalWhereInput[]
    OR?: goalWhereInput[]
    NOT?: goalWhereInput | goalWhereInput[]
    title?: StringFilter<"goal"> | string
    description?: StringNullableFilter<"goal"> | string | null
    private?: BoolFilter<"goal"> | boolean
    user_id?: StringFilter<"goal"> | string
    user?: XOR<UserRelationFilter, userWhereInput>
    milestone?: MilestoneListRelationFilter
  }, "id">

  export type goalOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    private?: SortOrder
    user_id?: SortOrder
    _count?: goalCountOrderByAggregateInput
    _max?: goalMaxOrderByAggregateInput
    _min?: goalMinOrderByAggregateInput
  }

  export type goalScalarWhereWithAggregatesInput = {
    AND?: goalScalarWhereWithAggregatesInput | goalScalarWhereWithAggregatesInput[]
    OR?: goalScalarWhereWithAggregatesInput[]
    NOT?: goalScalarWhereWithAggregatesInput | goalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"goal"> | string
    title?: StringWithAggregatesFilter<"goal"> | string
    description?: StringNullableWithAggregatesFilter<"goal"> | string | null
    private?: BoolWithAggregatesFilter<"goal"> | boolean
    user_id?: StringWithAggregatesFilter<"goal"> | string
  }

  export type milestoneWhereInput = {
    AND?: milestoneWhereInput | milestoneWhereInput[]
    OR?: milestoneWhereInput[]
    NOT?: milestoneWhereInput | milestoneWhereInput[]
    id?: StringFilter<"milestone"> | string
    title?: StringFilter<"milestone"> | string
    description?: StringNullableFilter<"milestone"> | string | null
    goal_id?: StringFilter<"milestone"> | string
    goal?: XOR<GoalRelationFilter, goalWhereInput>
  }

  export type milestoneOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    goal_id?: SortOrder
    goal?: goalOrderByWithRelationInput
  }

  export type milestoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: milestoneWhereInput | milestoneWhereInput[]
    OR?: milestoneWhereInput[]
    NOT?: milestoneWhereInput | milestoneWhereInput[]
    title?: StringFilter<"milestone"> | string
    description?: StringNullableFilter<"milestone"> | string | null
    goal_id?: StringFilter<"milestone"> | string
    goal?: XOR<GoalRelationFilter, goalWhereInput>
  }, "id">

  export type milestoneOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    goal_id?: SortOrder
    _count?: milestoneCountOrderByAggregateInput
    _max?: milestoneMaxOrderByAggregateInput
    _min?: milestoneMinOrderByAggregateInput
  }

  export type milestoneScalarWhereWithAggregatesInput = {
    AND?: milestoneScalarWhereWithAggregatesInput | milestoneScalarWhereWithAggregatesInput[]
    OR?: milestoneScalarWhereWithAggregatesInput[]
    NOT?: milestoneScalarWhereWithAggregatesInput | milestoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"milestone"> | string
    title?: StringWithAggregatesFilter<"milestone"> | string
    description?: StringNullableWithAggregatesFilter<"milestone"> | string | null
    goal_id?: StringWithAggregatesFilter<"milestone"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    friends_friends_sourceTouser?: FriendsListRelationFilter
    friends_friends_targetTouser?: FriendsListRelationFilter
    goal?: GoalListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    friends_friends_sourceTouser?: friendsOrderByRelationAggregateInput
    friends_friends_targetTouser?: friendsOrderByRelationAggregateInput
    goal?: goalOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    friends_friends_sourceTouser?: FriendsListRelationFilter
    friends_friends_targetTouser?: FriendsListRelationFilter
    goal?: GoalListRelationFilter
  }, "id" | "name">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
  }

  export type friendsCreateInput = {
    user_friends_sourceTouser: userCreateNestedOneWithoutFriends_friends_sourceTouserInput
    user_friends_targetTouser: userCreateNestedOneWithoutFriends_friends_targetTouserInput
  }

  export type friendsUncheckedCreateInput = {
    source: string
    target: string
  }

  export type friendsUpdateInput = {
    user_friends_sourceTouser?: userUpdateOneRequiredWithoutFriends_friends_sourceTouserNestedInput
    user_friends_targetTouser?: userUpdateOneRequiredWithoutFriends_friends_targetTouserNestedInput
  }

  export type friendsUncheckedUpdateInput = {
    source?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
  }

  export type friendsCreateManyInput = {
    source: string
    target: string
  }

  export type friendsUpdateManyMutationInput = {

  }

  export type friendsUncheckedUpdateManyInput = {
    source?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
  }

  export type goalCreateInput = {
    id?: string
    title: string
    description?: string | null
    private?: boolean
    user: userCreateNestedOneWithoutGoalInput
    milestone?: milestoneCreateNestedManyWithoutGoalInput
  }

  export type goalUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    private?: boolean
    user_id: string
    milestone?: milestoneUncheckedCreateNestedManyWithoutGoalInput
  }

  export type goalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutGoalNestedInput
    milestone?: milestoneUpdateManyWithoutGoalNestedInput
  }

  export type goalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
    milestone?: milestoneUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type goalCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    private?: boolean
    user_id: string
  }

  export type goalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
  }

  export type goalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type milestoneCreateInput = {
    id?: string
    title: string
    description?: string | null
    goal: goalCreateNestedOneWithoutMilestoneInput
  }

  export type milestoneUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    goal_id: string
  }

  export type milestoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: goalUpdateOneRequiredWithoutMilestoneNestedInput
  }

  export type milestoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal_id?: StringFieldUpdateOperationsInput | string
  }

  export type milestoneCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    goal_id: string
  }

  export type milestoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type milestoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    goal_id?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    id?: string
    name: string
    password: string
    friends_friends_sourceTouser?: friendsCreateNestedManyWithoutUser_friends_sourceTouserInput
    friends_friends_targetTouser?: friendsCreateNestedManyWithoutUser_friends_targetTouserInput
    goal?: goalCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    friends_friends_sourceTouser?: friendsUncheckedCreateNestedManyWithoutUser_friends_sourceTouserInput
    friends_friends_targetTouser?: friendsUncheckedCreateNestedManyWithoutUser_friends_targetTouserInput
    goal?: goalUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    friends_friends_sourceTouser?: friendsUpdateManyWithoutUser_friends_sourceTouserNestedInput
    friends_friends_targetTouser?: friendsUpdateManyWithoutUser_friends_targetTouserNestedInput
    goal?: goalUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    friends_friends_sourceTouser?: friendsUncheckedUpdateManyWithoutUser_friends_sourceTouserNestedInput
    friends_friends_targetTouser?: friendsUncheckedUpdateManyWithoutUser_friends_targetTouserNestedInput
    goal?: goalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    name: string
    password: string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
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

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type friendsSourceTargetCompoundUniqueInput = {
    source: string
    target: string
  }

  export type friendsCountOrderByAggregateInput = {
    source?: SortOrder
    target?: SortOrder
  }

  export type friendsMaxOrderByAggregateInput = {
    source?: SortOrder
    target?: SortOrder
  }

  export type friendsMinOrderByAggregateInput = {
    source?: SortOrder
    target?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MilestoneListRelationFilter = {
    every?: milestoneWhereInput
    some?: milestoneWhereInput
    none?: milestoneWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type milestoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type goalCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    private?: SortOrder
    user_id?: SortOrder
  }

  export type goalMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    private?: SortOrder
    user_id?: SortOrder
  }

  export type goalMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    private?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GoalRelationFilter = {
    is?: goalWhereInput
    isNot?: goalWhereInput
  }

  export type milestoneCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    goal_id?: SortOrder
  }

  export type milestoneMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    goal_id?: SortOrder
  }

  export type milestoneMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    goal_id?: SortOrder
  }

  export type FriendsListRelationFilter = {
    every?: friendsWhereInput
    some?: friendsWhereInput
    none?: friendsWhereInput
  }

  export type GoalListRelationFilter = {
    every?: goalWhereInput
    some?: goalWhereInput
    none?: goalWhereInput
  }

  export type friendsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type goalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type userCreateNestedOneWithoutFriends_friends_sourceTouserInput = {
    create?: XOR<userCreateWithoutFriends_friends_sourceTouserInput, userUncheckedCreateWithoutFriends_friends_sourceTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFriends_friends_sourceTouserInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutFriends_friends_targetTouserInput = {
    create?: XOR<userCreateWithoutFriends_friends_targetTouserInput, userUncheckedCreateWithoutFriends_friends_targetTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFriends_friends_targetTouserInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutFriends_friends_sourceTouserNestedInput = {
    create?: XOR<userCreateWithoutFriends_friends_sourceTouserInput, userUncheckedCreateWithoutFriends_friends_sourceTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFriends_friends_sourceTouserInput
    upsert?: userUpsertWithoutFriends_friends_sourceTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFriends_friends_sourceTouserInput, userUpdateWithoutFriends_friends_sourceTouserInput>, userUncheckedUpdateWithoutFriends_friends_sourceTouserInput>
  }

  export type userUpdateOneRequiredWithoutFriends_friends_targetTouserNestedInput = {
    create?: XOR<userCreateWithoutFriends_friends_targetTouserInput, userUncheckedCreateWithoutFriends_friends_targetTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFriends_friends_targetTouserInput
    upsert?: userUpsertWithoutFriends_friends_targetTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFriends_friends_targetTouserInput, userUpdateWithoutFriends_friends_targetTouserInput>, userUncheckedUpdateWithoutFriends_friends_targetTouserInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type userCreateNestedOneWithoutGoalInput = {
    create?: XOR<userCreateWithoutGoalInput, userUncheckedCreateWithoutGoalInput>
    connectOrCreate?: userCreateOrConnectWithoutGoalInput
    connect?: userWhereUniqueInput
  }

  export type milestoneCreateNestedManyWithoutGoalInput = {
    create?: XOR<milestoneCreateWithoutGoalInput, milestoneUncheckedCreateWithoutGoalInput> | milestoneCreateWithoutGoalInput[] | milestoneUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: milestoneCreateOrConnectWithoutGoalInput | milestoneCreateOrConnectWithoutGoalInput[]
    createMany?: milestoneCreateManyGoalInputEnvelope
    connect?: milestoneWhereUniqueInput | milestoneWhereUniqueInput[]
  }

  export type milestoneUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<milestoneCreateWithoutGoalInput, milestoneUncheckedCreateWithoutGoalInput> | milestoneCreateWithoutGoalInput[] | milestoneUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: milestoneCreateOrConnectWithoutGoalInput | milestoneCreateOrConnectWithoutGoalInput[]
    createMany?: milestoneCreateManyGoalInputEnvelope
    connect?: milestoneWhereUniqueInput | milestoneWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type userUpdateOneRequiredWithoutGoalNestedInput = {
    create?: XOR<userCreateWithoutGoalInput, userUncheckedCreateWithoutGoalInput>
    connectOrCreate?: userCreateOrConnectWithoutGoalInput
    upsert?: userUpsertWithoutGoalInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutGoalInput, userUpdateWithoutGoalInput>, userUncheckedUpdateWithoutGoalInput>
  }

  export type milestoneUpdateManyWithoutGoalNestedInput = {
    create?: XOR<milestoneCreateWithoutGoalInput, milestoneUncheckedCreateWithoutGoalInput> | milestoneCreateWithoutGoalInput[] | milestoneUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: milestoneCreateOrConnectWithoutGoalInput | milestoneCreateOrConnectWithoutGoalInput[]
    upsert?: milestoneUpsertWithWhereUniqueWithoutGoalInput | milestoneUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: milestoneCreateManyGoalInputEnvelope
    set?: milestoneWhereUniqueInput | milestoneWhereUniqueInput[]
    disconnect?: milestoneWhereUniqueInput | milestoneWhereUniqueInput[]
    delete?: milestoneWhereUniqueInput | milestoneWhereUniqueInput[]
    connect?: milestoneWhereUniqueInput | milestoneWhereUniqueInput[]
    update?: milestoneUpdateWithWhereUniqueWithoutGoalInput | milestoneUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: milestoneUpdateManyWithWhereWithoutGoalInput | milestoneUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: milestoneScalarWhereInput | milestoneScalarWhereInput[]
  }

  export type milestoneUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<milestoneCreateWithoutGoalInput, milestoneUncheckedCreateWithoutGoalInput> | milestoneCreateWithoutGoalInput[] | milestoneUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: milestoneCreateOrConnectWithoutGoalInput | milestoneCreateOrConnectWithoutGoalInput[]
    upsert?: milestoneUpsertWithWhereUniqueWithoutGoalInput | milestoneUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: milestoneCreateManyGoalInputEnvelope
    set?: milestoneWhereUniqueInput | milestoneWhereUniqueInput[]
    disconnect?: milestoneWhereUniqueInput | milestoneWhereUniqueInput[]
    delete?: milestoneWhereUniqueInput | milestoneWhereUniqueInput[]
    connect?: milestoneWhereUniqueInput | milestoneWhereUniqueInput[]
    update?: milestoneUpdateWithWhereUniqueWithoutGoalInput | milestoneUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: milestoneUpdateManyWithWhereWithoutGoalInput | milestoneUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: milestoneScalarWhereInput | milestoneScalarWhereInput[]
  }

  export type goalCreateNestedOneWithoutMilestoneInput = {
    create?: XOR<goalCreateWithoutMilestoneInput, goalUncheckedCreateWithoutMilestoneInput>
    connectOrCreate?: goalCreateOrConnectWithoutMilestoneInput
    connect?: goalWhereUniqueInput
  }

  export type goalUpdateOneRequiredWithoutMilestoneNestedInput = {
    create?: XOR<goalCreateWithoutMilestoneInput, goalUncheckedCreateWithoutMilestoneInput>
    connectOrCreate?: goalCreateOrConnectWithoutMilestoneInput
    upsert?: goalUpsertWithoutMilestoneInput
    connect?: goalWhereUniqueInput
    update?: XOR<XOR<goalUpdateToOneWithWhereWithoutMilestoneInput, goalUpdateWithoutMilestoneInput>, goalUncheckedUpdateWithoutMilestoneInput>
  }

  export type friendsCreateNestedManyWithoutUser_friends_sourceTouserInput = {
    create?: XOR<friendsCreateWithoutUser_friends_sourceTouserInput, friendsUncheckedCreateWithoutUser_friends_sourceTouserInput> | friendsCreateWithoutUser_friends_sourceTouserInput[] | friendsUncheckedCreateWithoutUser_friends_sourceTouserInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser_friends_sourceTouserInput | friendsCreateOrConnectWithoutUser_friends_sourceTouserInput[]
    createMany?: friendsCreateManyUser_friends_sourceTouserInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type friendsCreateNestedManyWithoutUser_friends_targetTouserInput = {
    create?: XOR<friendsCreateWithoutUser_friends_targetTouserInput, friendsUncheckedCreateWithoutUser_friends_targetTouserInput> | friendsCreateWithoutUser_friends_targetTouserInput[] | friendsUncheckedCreateWithoutUser_friends_targetTouserInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser_friends_targetTouserInput | friendsCreateOrConnectWithoutUser_friends_targetTouserInput[]
    createMany?: friendsCreateManyUser_friends_targetTouserInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type goalCreateNestedManyWithoutUserInput = {
    create?: XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput> | goalCreateWithoutUserInput[] | goalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: goalCreateOrConnectWithoutUserInput | goalCreateOrConnectWithoutUserInput[]
    createMany?: goalCreateManyUserInputEnvelope
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[]
  }

  export type friendsUncheckedCreateNestedManyWithoutUser_friends_sourceTouserInput = {
    create?: XOR<friendsCreateWithoutUser_friends_sourceTouserInput, friendsUncheckedCreateWithoutUser_friends_sourceTouserInput> | friendsCreateWithoutUser_friends_sourceTouserInput[] | friendsUncheckedCreateWithoutUser_friends_sourceTouserInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser_friends_sourceTouserInput | friendsCreateOrConnectWithoutUser_friends_sourceTouserInput[]
    createMany?: friendsCreateManyUser_friends_sourceTouserInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type friendsUncheckedCreateNestedManyWithoutUser_friends_targetTouserInput = {
    create?: XOR<friendsCreateWithoutUser_friends_targetTouserInput, friendsUncheckedCreateWithoutUser_friends_targetTouserInput> | friendsCreateWithoutUser_friends_targetTouserInput[] | friendsUncheckedCreateWithoutUser_friends_targetTouserInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser_friends_targetTouserInput | friendsCreateOrConnectWithoutUser_friends_targetTouserInput[]
    createMany?: friendsCreateManyUser_friends_targetTouserInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type goalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput> | goalCreateWithoutUserInput[] | goalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: goalCreateOrConnectWithoutUserInput | goalCreateOrConnectWithoutUserInput[]
    createMany?: goalCreateManyUserInputEnvelope
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[]
  }

  export type friendsUpdateManyWithoutUser_friends_sourceTouserNestedInput = {
    create?: XOR<friendsCreateWithoutUser_friends_sourceTouserInput, friendsUncheckedCreateWithoutUser_friends_sourceTouserInput> | friendsCreateWithoutUser_friends_sourceTouserInput[] | friendsUncheckedCreateWithoutUser_friends_sourceTouserInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser_friends_sourceTouserInput | friendsCreateOrConnectWithoutUser_friends_sourceTouserInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUser_friends_sourceTouserInput | friendsUpsertWithWhereUniqueWithoutUser_friends_sourceTouserInput[]
    createMany?: friendsCreateManyUser_friends_sourceTouserInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUser_friends_sourceTouserInput | friendsUpdateWithWhereUniqueWithoutUser_friends_sourceTouserInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutUser_friends_sourceTouserInput | friendsUpdateManyWithWhereWithoutUser_friends_sourceTouserInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type friendsUpdateManyWithoutUser_friends_targetTouserNestedInput = {
    create?: XOR<friendsCreateWithoutUser_friends_targetTouserInput, friendsUncheckedCreateWithoutUser_friends_targetTouserInput> | friendsCreateWithoutUser_friends_targetTouserInput[] | friendsUncheckedCreateWithoutUser_friends_targetTouserInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser_friends_targetTouserInput | friendsCreateOrConnectWithoutUser_friends_targetTouserInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUser_friends_targetTouserInput | friendsUpsertWithWhereUniqueWithoutUser_friends_targetTouserInput[]
    createMany?: friendsCreateManyUser_friends_targetTouserInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUser_friends_targetTouserInput | friendsUpdateWithWhereUniqueWithoutUser_friends_targetTouserInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutUser_friends_targetTouserInput | friendsUpdateManyWithWhereWithoutUser_friends_targetTouserInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type goalUpdateManyWithoutUserNestedInput = {
    create?: XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput> | goalCreateWithoutUserInput[] | goalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: goalCreateOrConnectWithoutUserInput | goalCreateOrConnectWithoutUserInput[]
    upsert?: goalUpsertWithWhereUniqueWithoutUserInput | goalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: goalCreateManyUserInputEnvelope
    set?: goalWhereUniqueInput | goalWhereUniqueInput[]
    disconnect?: goalWhereUniqueInput | goalWhereUniqueInput[]
    delete?: goalWhereUniqueInput | goalWhereUniqueInput[]
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[]
    update?: goalUpdateWithWhereUniqueWithoutUserInput | goalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: goalUpdateManyWithWhereWithoutUserInput | goalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: goalScalarWhereInput | goalScalarWhereInput[]
  }

  export type friendsUncheckedUpdateManyWithoutUser_friends_sourceTouserNestedInput = {
    create?: XOR<friendsCreateWithoutUser_friends_sourceTouserInput, friendsUncheckedCreateWithoutUser_friends_sourceTouserInput> | friendsCreateWithoutUser_friends_sourceTouserInput[] | friendsUncheckedCreateWithoutUser_friends_sourceTouserInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser_friends_sourceTouserInput | friendsCreateOrConnectWithoutUser_friends_sourceTouserInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUser_friends_sourceTouserInput | friendsUpsertWithWhereUniqueWithoutUser_friends_sourceTouserInput[]
    createMany?: friendsCreateManyUser_friends_sourceTouserInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUser_friends_sourceTouserInput | friendsUpdateWithWhereUniqueWithoutUser_friends_sourceTouserInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutUser_friends_sourceTouserInput | friendsUpdateManyWithWhereWithoutUser_friends_sourceTouserInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type friendsUncheckedUpdateManyWithoutUser_friends_targetTouserNestedInput = {
    create?: XOR<friendsCreateWithoutUser_friends_targetTouserInput, friendsUncheckedCreateWithoutUser_friends_targetTouserInput> | friendsCreateWithoutUser_friends_targetTouserInput[] | friendsUncheckedCreateWithoutUser_friends_targetTouserInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser_friends_targetTouserInput | friendsCreateOrConnectWithoutUser_friends_targetTouserInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUser_friends_targetTouserInput | friendsUpsertWithWhereUniqueWithoutUser_friends_targetTouserInput[]
    createMany?: friendsCreateManyUser_friends_targetTouserInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUser_friends_targetTouserInput | friendsUpdateWithWhereUniqueWithoutUser_friends_targetTouserInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutUser_friends_targetTouserInput | friendsUpdateManyWithWhereWithoutUser_friends_targetTouserInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type goalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput> | goalCreateWithoutUserInput[] | goalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: goalCreateOrConnectWithoutUserInput | goalCreateOrConnectWithoutUserInput[]
    upsert?: goalUpsertWithWhereUniqueWithoutUserInput | goalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: goalCreateManyUserInputEnvelope
    set?: goalWhereUniqueInput | goalWhereUniqueInput[]
    disconnect?: goalWhereUniqueInput | goalWhereUniqueInput[]
    delete?: goalWhereUniqueInput | goalWhereUniqueInput[]
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[]
    update?: goalUpdateWithWhereUniqueWithoutUserInput | goalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: goalUpdateManyWithWhereWithoutUserInput | goalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: goalScalarWhereInput | goalScalarWhereInput[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type userCreateWithoutFriends_friends_sourceTouserInput = {
    id?: string
    name: string
    password: string
    friends_friends_targetTouser?: friendsCreateNestedManyWithoutUser_friends_targetTouserInput
    goal?: goalCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutFriends_friends_sourceTouserInput = {
    id?: string
    name: string
    password: string
    friends_friends_targetTouser?: friendsUncheckedCreateNestedManyWithoutUser_friends_targetTouserInput
    goal?: goalUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutFriends_friends_sourceTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFriends_friends_sourceTouserInput, userUncheckedCreateWithoutFriends_friends_sourceTouserInput>
  }

  export type userCreateWithoutFriends_friends_targetTouserInput = {
    id?: string
    name: string
    password: string
    friends_friends_sourceTouser?: friendsCreateNestedManyWithoutUser_friends_sourceTouserInput
    goal?: goalCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutFriends_friends_targetTouserInput = {
    id?: string
    name: string
    password: string
    friends_friends_sourceTouser?: friendsUncheckedCreateNestedManyWithoutUser_friends_sourceTouserInput
    goal?: goalUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutFriends_friends_targetTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFriends_friends_targetTouserInput, userUncheckedCreateWithoutFriends_friends_targetTouserInput>
  }

  export type userUpsertWithoutFriends_friends_sourceTouserInput = {
    update: XOR<userUpdateWithoutFriends_friends_sourceTouserInput, userUncheckedUpdateWithoutFriends_friends_sourceTouserInput>
    create: XOR<userCreateWithoutFriends_friends_sourceTouserInput, userUncheckedCreateWithoutFriends_friends_sourceTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFriends_friends_sourceTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFriends_friends_sourceTouserInput, userUncheckedUpdateWithoutFriends_friends_sourceTouserInput>
  }

  export type userUpdateWithoutFriends_friends_sourceTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    friends_friends_targetTouser?: friendsUpdateManyWithoutUser_friends_targetTouserNestedInput
    goal?: goalUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutFriends_friends_sourceTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    friends_friends_targetTouser?: friendsUncheckedUpdateManyWithoutUser_friends_targetTouserNestedInput
    goal?: goalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userUpsertWithoutFriends_friends_targetTouserInput = {
    update: XOR<userUpdateWithoutFriends_friends_targetTouserInput, userUncheckedUpdateWithoutFriends_friends_targetTouserInput>
    create: XOR<userCreateWithoutFriends_friends_targetTouserInput, userUncheckedCreateWithoutFriends_friends_targetTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFriends_friends_targetTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFriends_friends_targetTouserInput, userUncheckedUpdateWithoutFriends_friends_targetTouserInput>
  }

  export type userUpdateWithoutFriends_friends_targetTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    friends_friends_sourceTouser?: friendsUpdateManyWithoutUser_friends_sourceTouserNestedInput
    goal?: goalUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutFriends_friends_targetTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    friends_friends_sourceTouser?: friendsUncheckedUpdateManyWithoutUser_friends_sourceTouserNestedInput
    goal?: goalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutGoalInput = {
    id?: string
    name: string
    password: string
    friends_friends_sourceTouser?: friendsCreateNestedManyWithoutUser_friends_sourceTouserInput
    friends_friends_targetTouser?: friendsCreateNestedManyWithoutUser_friends_targetTouserInput
  }

  export type userUncheckedCreateWithoutGoalInput = {
    id?: string
    name: string
    password: string
    friends_friends_sourceTouser?: friendsUncheckedCreateNestedManyWithoutUser_friends_sourceTouserInput
    friends_friends_targetTouser?: friendsUncheckedCreateNestedManyWithoutUser_friends_targetTouserInput
  }

  export type userCreateOrConnectWithoutGoalInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutGoalInput, userUncheckedCreateWithoutGoalInput>
  }

  export type milestoneCreateWithoutGoalInput = {
    id?: string
    title: string
    description?: string | null
  }

  export type milestoneUncheckedCreateWithoutGoalInput = {
    id?: string
    title: string
    description?: string | null
  }

  export type milestoneCreateOrConnectWithoutGoalInput = {
    where: milestoneWhereUniqueInput
    create: XOR<milestoneCreateWithoutGoalInput, milestoneUncheckedCreateWithoutGoalInput>
  }

  export type milestoneCreateManyGoalInputEnvelope = {
    data: milestoneCreateManyGoalInput | milestoneCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutGoalInput = {
    update: XOR<userUpdateWithoutGoalInput, userUncheckedUpdateWithoutGoalInput>
    create: XOR<userCreateWithoutGoalInput, userUncheckedCreateWithoutGoalInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutGoalInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutGoalInput, userUncheckedUpdateWithoutGoalInput>
  }

  export type userUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    friends_friends_sourceTouser?: friendsUpdateManyWithoutUser_friends_sourceTouserNestedInput
    friends_friends_targetTouser?: friendsUpdateManyWithoutUser_friends_targetTouserNestedInput
  }

  export type userUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    friends_friends_sourceTouser?: friendsUncheckedUpdateManyWithoutUser_friends_sourceTouserNestedInput
    friends_friends_targetTouser?: friendsUncheckedUpdateManyWithoutUser_friends_targetTouserNestedInput
  }

  export type milestoneUpsertWithWhereUniqueWithoutGoalInput = {
    where: milestoneWhereUniqueInput
    update: XOR<milestoneUpdateWithoutGoalInput, milestoneUncheckedUpdateWithoutGoalInput>
    create: XOR<milestoneCreateWithoutGoalInput, milestoneUncheckedCreateWithoutGoalInput>
  }

  export type milestoneUpdateWithWhereUniqueWithoutGoalInput = {
    where: milestoneWhereUniqueInput
    data: XOR<milestoneUpdateWithoutGoalInput, milestoneUncheckedUpdateWithoutGoalInput>
  }

  export type milestoneUpdateManyWithWhereWithoutGoalInput = {
    where: milestoneScalarWhereInput
    data: XOR<milestoneUpdateManyMutationInput, milestoneUncheckedUpdateManyWithoutGoalInput>
  }

  export type milestoneScalarWhereInput = {
    AND?: milestoneScalarWhereInput | milestoneScalarWhereInput[]
    OR?: milestoneScalarWhereInput[]
    NOT?: milestoneScalarWhereInput | milestoneScalarWhereInput[]
    id?: StringFilter<"milestone"> | string
    title?: StringFilter<"milestone"> | string
    description?: StringNullableFilter<"milestone"> | string | null
    goal_id?: StringFilter<"milestone"> | string
  }

  export type goalCreateWithoutMilestoneInput = {
    id?: string
    title: string
    description?: string | null
    private?: boolean
    user: userCreateNestedOneWithoutGoalInput
  }

  export type goalUncheckedCreateWithoutMilestoneInput = {
    id?: string
    title: string
    description?: string | null
    private?: boolean
    user_id: string
  }

  export type goalCreateOrConnectWithoutMilestoneInput = {
    where: goalWhereUniqueInput
    create: XOR<goalCreateWithoutMilestoneInput, goalUncheckedCreateWithoutMilestoneInput>
  }

  export type goalUpsertWithoutMilestoneInput = {
    update: XOR<goalUpdateWithoutMilestoneInput, goalUncheckedUpdateWithoutMilestoneInput>
    create: XOR<goalCreateWithoutMilestoneInput, goalUncheckedCreateWithoutMilestoneInput>
    where?: goalWhereInput
  }

  export type goalUpdateToOneWithWhereWithoutMilestoneInput = {
    where?: goalWhereInput
    data: XOR<goalUpdateWithoutMilestoneInput, goalUncheckedUpdateWithoutMilestoneInput>
  }

  export type goalUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutGoalNestedInput
  }

  export type goalUncheckedUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type friendsCreateWithoutUser_friends_sourceTouserInput = {
    user_friends_targetTouser: userCreateNestedOneWithoutFriends_friends_targetTouserInput
  }

  export type friendsUncheckedCreateWithoutUser_friends_sourceTouserInput = {
    target: string
  }

  export type friendsCreateOrConnectWithoutUser_friends_sourceTouserInput = {
    where: friendsWhereUniqueInput
    create: XOR<friendsCreateWithoutUser_friends_sourceTouserInput, friendsUncheckedCreateWithoutUser_friends_sourceTouserInput>
  }

  export type friendsCreateManyUser_friends_sourceTouserInputEnvelope = {
    data: friendsCreateManyUser_friends_sourceTouserInput | friendsCreateManyUser_friends_sourceTouserInput[]
    skipDuplicates?: boolean
  }

  export type friendsCreateWithoutUser_friends_targetTouserInput = {
    user_friends_sourceTouser: userCreateNestedOneWithoutFriends_friends_sourceTouserInput
  }

  export type friendsUncheckedCreateWithoutUser_friends_targetTouserInput = {
    source: string
  }

  export type friendsCreateOrConnectWithoutUser_friends_targetTouserInput = {
    where: friendsWhereUniqueInput
    create: XOR<friendsCreateWithoutUser_friends_targetTouserInput, friendsUncheckedCreateWithoutUser_friends_targetTouserInput>
  }

  export type friendsCreateManyUser_friends_targetTouserInputEnvelope = {
    data: friendsCreateManyUser_friends_targetTouserInput | friendsCreateManyUser_friends_targetTouserInput[]
    skipDuplicates?: boolean
  }

  export type goalCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    private?: boolean
    milestone?: milestoneCreateNestedManyWithoutGoalInput
  }

  export type goalUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    private?: boolean
    milestone?: milestoneUncheckedCreateNestedManyWithoutGoalInput
  }

  export type goalCreateOrConnectWithoutUserInput = {
    where: goalWhereUniqueInput
    create: XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput>
  }

  export type goalCreateManyUserInputEnvelope = {
    data: goalCreateManyUserInput | goalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type friendsUpsertWithWhereUniqueWithoutUser_friends_sourceTouserInput = {
    where: friendsWhereUniqueInput
    update: XOR<friendsUpdateWithoutUser_friends_sourceTouserInput, friendsUncheckedUpdateWithoutUser_friends_sourceTouserInput>
    create: XOR<friendsCreateWithoutUser_friends_sourceTouserInput, friendsUncheckedCreateWithoutUser_friends_sourceTouserInput>
  }

  export type friendsUpdateWithWhereUniqueWithoutUser_friends_sourceTouserInput = {
    where: friendsWhereUniqueInput
    data: XOR<friendsUpdateWithoutUser_friends_sourceTouserInput, friendsUncheckedUpdateWithoutUser_friends_sourceTouserInput>
  }

  export type friendsUpdateManyWithWhereWithoutUser_friends_sourceTouserInput = {
    where: friendsScalarWhereInput
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyWithoutUser_friends_sourceTouserInput>
  }

  export type friendsScalarWhereInput = {
    AND?: friendsScalarWhereInput | friendsScalarWhereInput[]
    OR?: friendsScalarWhereInput[]
    NOT?: friendsScalarWhereInput | friendsScalarWhereInput[]
    source?: StringFilter<"friends"> | string
    target?: StringFilter<"friends"> | string
  }

  export type friendsUpsertWithWhereUniqueWithoutUser_friends_targetTouserInput = {
    where: friendsWhereUniqueInput
    update: XOR<friendsUpdateWithoutUser_friends_targetTouserInput, friendsUncheckedUpdateWithoutUser_friends_targetTouserInput>
    create: XOR<friendsCreateWithoutUser_friends_targetTouserInput, friendsUncheckedCreateWithoutUser_friends_targetTouserInput>
  }

  export type friendsUpdateWithWhereUniqueWithoutUser_friends_targetTouserInput = {
    where: friendsWhereUniqueInput
    data: XOR<friendsUpdateWithoutUser_friends_targetTouserInput, friendsUncheckedUpdateWithoutUser_friends_targetTouserInput>
  }

  export type friendsUpdateManyWithWhereWithoutUser_friends_targetTouserInput = {
    where: friendsScalarWhereInput
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyWithoutUser_friends_targetTouserInput>
  }

  export type goalUpsertWithWhereUniqueWithoutUserInput = {
    where: goalWhereUniqueInput
    update: XOR<goalUpdateWithoutUserInput, goalUncheckedUpdateWithoutUserInput>
    create: XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput>
  }

  export type goalUpdateWithWhereUniqueWithoutUserInput = {
    where: goalWhereUniqueInput
    data: XOR<goalUpdateWithoutUserInput, goalUncheckedUpdateWithoutUserInput>
  }

  export type goalUpdateManyWithWhereWithoutUserInput = {
    where: goalScalarWhereInput
    data: XOR<goalUpdateManyMutationInput, goalUncheckedUpdateManyWithoutUserInput>
  }

  export type goalScalarWhereInput = {
    AND?: goalScalarWhereInput | goalScalarWhereInput[]
    OR?: goalScalarWhereInput[]
    NOT?: goalScalarWhereInput | goalScalarWhereInput[]
    id?: StringFilter<"goal"> | string
    title?: StringFilter<"goal"> | string
    description?: StringNullableFilter<"goal"> | string | null
    private?: BoolFilter<"goal"> | boolean
    user_id?: StringFilter<"goal"> | string
  }

  export type milestoneCreateManyGoalInput = {
    id?: string
    title: string
    description?: string | null
  }

  export type milestoneUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type milestoneUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type milestoneUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type friendsCreateManyUser_friends_sourceTouserInput = {
    target: string
  }

  export type friendsCreateManyUser_friends_targetTouserInput = {
    source: string
  }

  export type goalCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    private?: boolean
  }

  export type friendsUpdateWithoutUser_friends_sourceTouserInput = {
    user_friends_targetTouser?: userUpdateOneRequiredWithoutFriends_friends_targetTouserNestedInput
  }

  export type friendsUncheckedUpdateWithoutUser_friends_sourceTouserInput = {
    target?: StringFieldUpdateOperationsInput | string
  }

  export type friendsUncheckedUpdateManyWithoutUser_friends_sourceTouserInput = {
    target?: StringFieldUpdateOperationsInput | string
  }

  export type friendsUpdateWithoutUser_friends_targetTouserInput = {
    user_friends_sourceTouser?: userUpdateOneRequiredWithoutFriends_friends_sourceTouserNestedInput
  }

  export type friendsUncheckedUpdateWithoutUser_friends_targetTouserInput = {
    source?: StringFieldUpdateOperationsInput | string
  }

  export type friendsUncheckedUpdateManyWithoutUser_friends_targetTouserInput = {
    source?: StringFieldUpdateOperationsInput | string
  }

  export type goalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    milestone?: milestoneUpdateManyWithoutGoalNestedInput
  }

  export type goalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
    milestone?: milestoneUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type goalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    private?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use GoalCountOutputTypeDefaultArgs instead
     */
    export type GoalCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoalCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use friendsDefaultArgs instead
     */
    export type friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = friendsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use goalDefaultArgs instead
     */
    export type goalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = goalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use milestoneDefaultArgs instead
     */
    export type milestoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = milestoneDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>

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