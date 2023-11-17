
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.FriendsScalarFieldEnum = {
  source: 'source',
  target: 'target'
};

exports.Prisma.GoalScalarFieldEnum = {
  id: 'id',
  title: 'title',
  private: 'private',
  user_id: 'user_id'
};

exports.Prisma.MilestoneScalarFieldEnum = {
  id: 'id',
  title: 'title',
  goal_id: 'goal_id'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  password: 'password'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};


exports.Prisma.ModelName = {
  friends: 'friends',
  goal: 'goal',
  milestone: 'milestone',
  user: 'user'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\dcoll\\social-goals-tracker\\src\\main\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../..",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL3NyYy9tYWluL3ByaXNtYSIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIGZyaWVuZHMgewogIHNvdXJjZSAgICAgICAgICAgICAgICAgICAgU3RyaW5nIEBkYi5DaGFyKDM2KQogIHRhcmdldCAgICAgICAgICAgICAgICAgICAgU3RyaW5nIEBkYi5DaGFyKDM2KQogIHVzZXJfZnJpZW5kc19zb3VyY2VUb3VzZXIgdXNlciAgIEByZWxhdGlvbigiZnJpZW5kc19zb3VyY2VUb3VzZXIiLCBmaWVsZHM6IFtzb3VyY2VdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgbWFwOiAic291cmNlX2ZrIikKICB1c2VyX2ZyaWVuZHNfdGFyZ2V0VG91c2VyIHVzZXIgICBAcmVsYXRpb24oImZyaWVuZHNfdGFyZ2V0VG91c2VyIiwgZmllbGRzOiBbdGFyZ2V0XSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUsIG1hcDogInRhcmdldF9mayIpCgogIEBAaWQoW3NvdXJjZSwgdGFyZ2V0XSkKICBAQGluZGV4KFt0YXJnZXRdLCBtYXA6ICJ0YXJnZXRfZmsiKQp9Cgptb2RlbCBnb2FsIHsKICBpZCAgICAgICAgU3RyaW5nICAgICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCIodXVpZCgpKSIpKSBAZGIuQ2hhcigzNikKICB0aXRsZSAgICAgU3RyaW5nICAgICAgQGRiLkNoYXIoMjU1KQogIHByaXZhdGUgICBCb29sZWFuICAgICBAZGVmYXVsdChmYWxzZSkKICB1c2VyX2lkICAgU3RyaW5nICAgICAgQGRiLkNoYXIoMzYpCiAgdXNlciAgICAgIHVzZXIgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUsIG1hcDogInVzZXJfaWRfZmsiKQogIG1pbGVzdG9uZSBtaWxlc3RvbmVbXQoKICBAQGluZGV4KFt1c2VyX2lkXSwgbWFwOiAidXNlcl9pZF9mayIpCn0KCm1vZGVsIG1pbGVzdG9uZSB7CiAgaWQgICAgICBTdHJpbmcgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCIodXVpZCgpKSIpKSBAZGIuQ2hhcigzNikKICB0aXRsZSAgIFN0cmluZyBAZGIuQ2hhcigyNTUpCiAgZ29hbF9pZCBTdHJpbmcgQGRiLkNoYXIoMzYpCiAgZ29hbCAgICBnb2FsICAgQHJlbGF0aW9uKGZpZWxkczogW2dvYWxfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgbWFwOiAiZ29hbF9pZF9mayIpCgogIEBAaW5kZXgoW2dvYWxfaWRdLCBtYXA6ICJnb2FsX2lkX2ZrIikKfQoKbW9kZWwgdXNlciB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCIodXVpZCgpKSIpKSBAZGIuQ2hhcigzNikKICBuYW1lICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICBAdW5pcXVlKG1hcDogIm5hbWUiKSBAZGIuQ2hhcig3MCkKICBwYXNzd29yZCAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICBAZGIuQ2hhcigxMDApCiAgZnJpZW5kc19mcmllbmRzX3NvdXJjZVRvdXNlciBmcmllbmRzW10gQHJlbGF0aW9uKCJmcmllbmRzX3NvdXJjZVRvdXNlciIpCiAgZnJpZW5kc19mcmllbmRzX3RhcmdldFRvdXNlciBmcmllbmRzW10gQHJlbGF0aW9uKCJmcmllbmRzX3RhcmdldFRvdXNlciIpCiAgZ29hbCAgICAgICAgICAgICAgICAgICAgICAgICBnb2FsW10KfQo=",
  "inlineSchemaHash": "6bdb5784dded537a6be3ff64abea5439dcbbda2784e0d317a0ab128145a02306",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"friends\":{\"dbName\":null,\"fields\":[{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"target\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_friends_sourceTouser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"relationName\":\"friends_sourceTouser\",\"relationFromFields\":[\"source\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_friends_targetTouser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"relationName\":\"friends_targetTouser\",\"relationFromFields\":[\"target\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"source\",\"target\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"goal\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(uuid())\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"private\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"relationName\":\"goalTouser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"milestone\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"milestone\",\"relationName\":\"goalTomilestone\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"milestone\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(uuid())\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goal\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"goal\",\"relationName\":\"goalTomilestone\",\"relationFromFields\":[\"goal_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(uuid())\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friends_friends_sourceTouser\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"friends\",\"relationName\":\"friends_sourceTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friends_friends_targetTouser\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"friends\",\"relationName\":\"friends_targetTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goal\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"goal\",\"relationName\":\"goalTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

